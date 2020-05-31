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
a[c]=function(){a[c]=function(){H.oW(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kz:function kz(){},
k8:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mW:function(a,b,c,d){if(!!J.P(a).$it)return new H.fs(a,b,[c,d])
return new H.c8(a,b,[c,d])},
kw:function(){return new P.cl("No element")},
mL:function(){return new P.cl("Too many elements")},
nj:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.I()
H.dy(a,0,u-1,b)},
dy:function(a,b,c,d){if(c-b<=32)H.ni(a,b,c,d)
else H.nh(a,b,c,d)},
ni:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.at(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nh:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.at(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.G(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.N()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
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
if(typeof l!=="number")return l.N()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.N()
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
H.dy(a3,a4,t-2,a6)
H.dy(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.G(a6.$2(d.h(a3,t),b),0);)++t
for(;J.G(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.N()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dy(a3,t,s,a6)}else H.dy(a3,t,s,a6)},
o:function o(a){this.a=a},
t:function t(){},
df:function df(){},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
hd:function hd(a,b){this.a=null
this.b=a
this.c=b},
he:function he(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
jc:function jc(a,b){this.a=a
this.b=b},
d5:function d5(){},
iQ:function iQ(){},
dN:function dN(){},
mE:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cN:function(a){var u,t=H.oX(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oH:function(a){return v.types[a]},
lZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a6(a)
if(typeof u!=="string")throw H.c(H.af(a))
return u},
ch:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n9:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.W(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
ci:function(a){return H.n0(a)+H.lQ(H.cL(a),0,null)},
n0:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibM){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cN(t.length>1&&C.a.E(t,0)===36?C.a.a7(t,1):t)},
n1:function(){if(!!self.location)return self.location.href
return},
lk:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
na:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aP(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.af(s))}return H.lk(r)},
ll:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.af(s))
if(s<0)throw H.c(H.af(s))
if(s>65535)return H.na(a)}return H.lk(a)},
nb:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iz()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bH:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aP(u,10))>>>0,56320|u&1023)}}throw H.c(P.W(a,0,1114111,null,null))},
bG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n8:function(a){var u=H.bG(a).getFullYear()+0
return u},
n6:function(a){var u=H.bG(a).getMonth()+1
return u},
n2:function(a){var u=H.bG(a).getDate()+0
return u},
n3:function(a){var u=H.bG(a).getHours()+0
return u},
n5:function(a){var u=H.bG(a).getMinutes()+0
return u},
n7:function(a){var u=H.bG(a).getSeconds()+0
return u},
n4:function(a){var u=H.bG(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.af(a))},
d:function(a,b){if(a==null)J.ag(a)
throw H.c(H.bm(a,b))},
bm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.du(b,s)},
oA:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bI(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bI(a,c,!0,b,"end",u)
return new P.an(!0,b,"end",null)},
af:function(a){return new P.an(!0,a,null,null)},
ow:function(a){if(typeof a!=="number")throw H.c(H.af(a))
return a},
c:function(a){var u
if(a==null)a=new P.dq()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m4})
u.name=""}else u.toString=H.m4
return u},
m4:function(){return J.a6(this.dartException)},
m:function(a){throw H.c(a)},
n:function(a){throw H.c(P.ay(a))},
aM:function(a){var u,t,s,r,q,p
a=H.m2(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lu:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lg:function(a,b){return new H.hI(a,b==null?null:b.method)},
kA:function(a,b){var u=b==null,t=u?null:b.method
return new H.h_(a,t,u?null:b.receiver)},
am:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ki(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aP(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kA(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lg(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m7()
q=$.m8()
p=$.m9()
o=$.ma()
n=$.md()
m=$.me()
l=$.mc()
$.mb()
k=$.mg()
j=$.mf()
i=r.ah(u)
if(i!=null)return f.$1(H.kA(u,i))
else{i=q.ah(u)
if(i!=null){i.method="call"
return f.$1(H.kA(u,i))}else{i=p.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=n.ah(u)
if(i==null){i=m.ah(u)
if(i==null){i=l.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=k.ah(u)
if(i==null){i=j.ah(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lg(u,i))}}return f.$1(new H.iP(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dA()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.an(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dA()
return a},
kT:function(a){var u
if(a==null)return new H.et(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.et(a)},
oE:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oN:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.p("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oN)
a.$identity=u
return u},
mD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ic().constructor.prototype):Object.create(new H.bZ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ax
if(typeof t!=="number")return t.A()
$.ax=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l6(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mz(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l6(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mz:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oH,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l5:H.km
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mA:function(a,b,c,d){var u=H.km
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l6:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mA(t,!r,u,b)
if(t===0){r=$.ax
if(typeof r!=="number")return r.A()
$.ax=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c_
return new Function(r+H.e(q==null?$.c_=H.f7("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ax
if(typeof r!=="number")return r.A()
$.ax=r+1
o+=r
r="return function("+o+"){return this."
q=$.c_
return new Function(r+H.e(q==null?$.c_=H.f7("self"):q)+"."+H.e(u)+"("+o+");}")()},
mB:function(a,b,c,d){var u=H.km,t=H.l5
switch(b?-1:a){case 0:throw H.c(H.nf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mC:function(a,b){var u,t,s,r,q,p,o,n=$.c_
if(n==null)n=$.c_=H.f7("self")
u=$.l4
if(u==null)u=$.l4=H.f7("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ax
if(typeof u!=="number")return u.A()
$.ax=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ax
if(typeof u!=="number")return u.A()
$.ax=u+1
return new Function(n+u+"}")()},
kR:function(a,b,c,d,e,f,g){return H.mD(a,b,c,d,!!e,!!f,g)},
km:function(a){return a.a},
l5:function(a){return a.c},
f7:function(a){var u,t,s,r=new H.bZ("self","target","receiver","name"),q=J.kx(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oR:function(a,b){throw H.c(H.my(a,H.cN(b.substring(2))))},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.oR(a,b)},
oC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
my:function(a,b){return new H.f8("CastError: "+P.ku(a)+": type '"+H.e(H.os(a))+"' is not a subtype of type '"+b+"'")},
os:function(a){var u,t=J.P(a)
if(!!t.$ic0){u=H.oC(t)
if(u!=null)return H.oS(u)
return"Closure"}return H.ci(a)},
oW:function(a){throw H.c(new P.fk(a))},
nf:function(a){return new H.hZ(a)},
lX:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cL:function(a){if(a==null)return
return a.$ti},
px:function(a,b,c){return H.kh(a["$a"+H.e(c)],H.cL(b))},
oG:function(a,b,c,d){var u=H.kh(a["$a"+H.e(c)],H.cL(b))
return u==null?null:u[d]},
kS:function(a,b,c){var u=H.kh(a["$a"+H.e(b)],H.cL(a))
return u==null?null:u[c]},
b3:function(a,b){var u=H.cL(a)
return u==null?null:u[b]},
oS:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cN(a[0].name)+H.lQ(a,1,b)
if(typeof a=="function")return H.cN(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.nY(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nY:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bl(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bl(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bl(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bl(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oD(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bl(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lQ:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.i(0)+">"},
kh:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pv:function(a,b,c){return a.apply(b,H.kh(J.P(b)["$a"+H.e(c)],H.cL(b)))},
pw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oO:function(a){var u,t,s,r,q=$.lY.$1(a),p=$.k6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lV.$2(a,q)
if(q!=null){p=$.k6[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kc[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kf(u)
$.k6[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kc[q]=u
return u}if(s==="-"){r=H.kf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m0(a,u)
if(s==="*")throw H.c(P.iO(q))
if(v.leafTags[q]===true){r=H.kf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m0(a,u)},
m0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kf:function(a){return J.kV(a,!1,null,!!a.$iz)},
oP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kf(u)
else return J.kV(u,c,null,null)},
oL:function(){if(!0===$.kU)return
$.kU=!0
H.oM()},
oM:function(){var u,t,s,r,q,p,o,n
$.k6=Object.create(null)
$.kc=Object.create(null)
H.oK()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m1.$1(q)
if(p!=null){o=H.oP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oK:function(){var u,t,s,r,q,p,o=C.K()
o=H.bT(C.L,H.bT(C.M,H.bT(C.w,H.bT(C.w,H.bT(C.N,H.bT(C.O,H.bT(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lY=new H.k9(r)
$.lV=new H.ka(q)
$.m1=new H.kb(p)},
bT:function(a,b){return a(b)||b},
mP:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
m3:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oB:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m2:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kY:function(a,b,c){var u=H.oU(a,b,c)
return u},
oU:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m2(b),'g'),H.oB(c))},
fd:function fd(){},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
ki:function ki(a){this.a=a},
et:function et(a){this.a=a
this.b=null},
c0:function c0(){},
il:function il(){},
ic:function ic(){},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
hZ:function hZ(a){this.a=a},
F:function F(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a){this.a=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h3:function h3(a,b){this.a=a
this.$ti=b},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bR:function(a){return a},
mZ:function(a){return new Int8Array(a)},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bm(b,a))},
nW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oA(a,b,c))
return b},
cd:function cd(){},
be:function be(){},
dk:function dk(){},
ce:function ce(){},
dl:function dl(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
dm:function dm(){},
cf:function cf(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
oD:function(a){return J.lc(a?Object.keys(a):[],null)},
oX:function(a){return v.mangledGlobalNames[a]},
oQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kU==null){H.oL()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iO("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kZ()]
if(r!=null)return r
r=H.oO(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.kZ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.W(a,0,4294967295,"length",null))
return J.lc(new Array(a),b)},
lc:function(a,b){return J.kx(H.b(a,[b]))},
kx:function(a){a.fixed$length=Array
return a},
mN:function(a,b){return J.cP(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k7(a)},
at:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k7(a)},
eS:function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k7(a)},
oF:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bM.prototype
return a},
cK:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bM.prototype
return a},
bW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.a3)return a
return J.k7(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).q(a,b)},
bY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.at(a).h(a,b)},
kj:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lZ(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eS(a).m(a,b,c)},
mp:function(a,b){return J.cK(a).E(a,b)},
mq:function(a,b,c){return J.bW(a).h2(a,b,c)},
mr:function(a,b,c,d){return J.bW(a).hn(a,b,c,d)},
ms:function(a,b){return J.cK(a).X(a,b)},
cP:function(a,b){return J.oF(a).aT(a,b)},
kk:function(a,b){return J.at(a).D(a,b)},
eU:function(a,b){return J.eS(a).H(a,b)},
mt:function(a,b,c,d){return J.bW(a).hH(a,b,c,d)},
l0:function(a,b){return J.eS(a).v(a,b)},
mu:function(a){return J.bW(a).ghr(a)},
eV:function(a){return J.bW(a).gbW(a)},
cQ:function(a){return J.P(a).gG(a)},
aR:function(a){return J.eS(a).gS(a)},
ag:function(a){return J.at(a).gl(a)},
l1:function(a){return J.eS(a).ig(a)},
mv:function(a,b){return J.bW(a).ij(a,b)},
mw:function(a,b,c){return J.cK(a).p(a,b,c)},
mx:function(a){return J.cK(a).iu(a)},
a6:function(a){return J.P(a).i(a)},
a:function a(){},
fX:function fX(){},
db:function db(){},
dc:function dc(){},
hM:function hM(){},
bM:function bM(){},
bb:function bb(){},
b9:function b9(a){this.$ti=a},
ky:function ky(a){this.$ti=a},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(){},
da:function da(){},
d9:function d9(){},
ba:function ba(){}},P={
nw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ot()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bU(new P.je(s),1)).observe(u,{childList:true})
return new P.jd(s,u,t)}else if(self.setImmediate!=null)return P.ou()
return P.ov()},
nx:function(a){self.scheduleImmediate(H.bU(new P.jf(a),0))},
ny:function(a){self.setImmediate(H.bU(new P.jg(a),0))},
nz:function(a){P.kD(C.n,a)},
kD:function(a,b){var u=C.c.a4(a.a,1000)
return P.nG(u<0?0:u,b)},
lt:function(a,b){var u=C.c.a4(a.a,1000)
return P.nH(u<0?0:u,b)},
nG:function(a,b){var u=new P.ez()
u.eE(a,b)
return u},
nH:function(a,b){var u=new P.ez()
u.eF(a,b)
return u},
ps:function(a){return new P.bN(a,1)},
nC:function(){return C.a6},
nD:function(a){return new P.bN(a,3)},
o0:function(a,b){return new P.jJ(a,[b])},
om:function(){var u,t
for(;u=$.bS,u!=null;){$.cJ=null
t=u.b
$.bS=t
if(t==null)$.cI=null
u.a.$0()}},
or:function(){$.kP=!0
try{P.om()}finally{$.cJ=null
$.kP=!1
if($.bS!=null)$.l_().$1(P.lW())}},
op:function(a){var u=new P.dV(a)
if($.bS==null){$.bS=$.cI=u
if(!$.kP)$.l_().$1(P.lW())}else $.cI=$.cI.b=u},
oq:function(a){var u,t,s=$.bS
if(s==null){P.op(a)
$.cJ=$.cI
return}u=new P.dV(a)
t=$.cJ
if(t==null){u.b=s
$.bS=$.cJ=u}else{u.b=t.b
$.cJ=t.b=u
if(u.b==null)$.cI=u}},
ls:function(a,b){var u=$.as
if(u===C.f)return P.kD(a,b)
return P.kD(a,u.hs(b))},
nm:function(a,b){var u=$.as
if(u===C.f)return P.lt(a,b)
return P.lt(a,u.df(b,P.dH))},
lR:function(a,b,c,d,e){var u={}
u.a=d
P.oq(new P.k4(u,e))},
on:function(a,b,c,d){var u,t=$.as
if(t===c)return d.$0()
$.as=c
u=t
try{t=d.$0()
return t}finally{$.as=u}},
oo:function(a,b,c,d,e){var u,t=$.as
if(t===c)return d.$1(e)
$.as=c
u=t
try{t=d.$1(e)
return t}finally{$.as=u}},
je:function je(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
ez:function ez(){this.c=0},
jN:function jN(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b){this.a=a
this.b=b},
bO:function bO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jJ:function jJ(a,b){this.a=a
this.$ti=b},
dV:function dV(a){this.a=a
this.b=null},
dC:function dC(){},
ig:function ig(){},
dH:function dH(){},
jW:function jW(){},
k4:function k4(a,b){this.a=a
this.b=b},
ju:function ju(){},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function(a,b){return new H.F([a,b])},
kB:function(a,b){return new H.F([a,b])},
mT:function(a){return H.oE(a,new H.F([null,null]))},
c7:function(a){return new P.jr([a])},
kK:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nF:function(a,b){var u=new P.ea(a,b)
u.c=a.e
return u},
mK:function(a,b,c){var u,t
if(P.kQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.o_(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.lq(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kv:function(a,b,c){var u,t
if(P.kQ(a))return b+"..."+c
u=new P.S(b)
$.ab.push(a)
try{t=u
t.a=P.lq(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kQ:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
o_:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.t();r=q,q=p){p=n.gC(n);++l
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
mS:function(a,b,c){var u=P.mR(b,c)
a.v(0,new P.h5(u))
return u},
ld:function(a,b){var u,t,s=P.c7(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)s.n(0,a[t])
return s},
kC:function(a){var u,t={}
if(P.kQ(a))return"{...}"
u=new P.S("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.l0(a,new P.hb(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jr:function jr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
js:function js(a){this.a=a
this.c=this.b=null},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fV:function fV(){},
h5:function h5(a){this.a=a},
h6:function h6(){},
x:function x(){},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
a2:function a2(){},
jO:function jO(){},
hc:function hc(){},
dO:function dO(a,b){this.a=a
this.$ti=b},
jy:function jy(){},
eb:function eb(){},
eF:function eF(){},
np:function(a,b,c,d){if(b instanceof Uint8Array)return P.nq(!1,b,c,d)
return},
nq:function(a,b,c,d){var u,t,s=$.mh()
if(s==null)return
u=0===c
if(u&&!0)return P.kG(s,b)
t=b.length
d=P.b0(c,d,t)
if(u&&d===t)return P.kG(s,b)
return P.kG(s,b.subarray(c,d))},
kG:function(a,b){if(P.ns(b))return
return P.nt(a,b)},
nt:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.am(t)}return},
ns:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nr:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.am(t)}return},
lT:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.u(c)
u=J.at(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.aa()
if((s&127)!==s)return t-b}return c-b},
l3:function(a,b,c,d,e,f){if(C.c.bc(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
f4:function f4(){},
f5:function f5(){},
fa:function fa(){},
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
jU:function jU(a){this.b=0
this.c=a},
iZ:function iZ(a){this.a=a},
jT:function jT(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cM:function(a,b,c){var u=H.n9(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
mI:function(a){if(a instanceof H.c0)return a.i(0)
return"Instance of '"+H.e(H.ci(a))+"'"},
mU:function(a,b,c){var u,t,s=J.mM(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
h7:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aR(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.kx(t)},
cm:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b0(b,c,u)
if(b<=0){if(typeof c!=="number")return c.N()
t=c<u}else t=!0
return H.ll(t?C.b.em(a,b,c):a)}if(!!J.P(a).$icf)return H.nb(a,b,P.b0(b,c,a.length))
return P.nk(a,b,c)},
nk:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.W(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.W(c,b,J.ag(a),q,q))
t=J.aR(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.W(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.W(c,b,s,q,q))
r.push(t.gC(t))}return H.ll(r)},
nd:function(a){return new H.fY(a,H.mP(a,!1,!0,!1,!1,!1))},
lq:function(a,b,c){var u=J.aR(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.t())}else{a+=H.e(u.gC(u))
for(;u.t();)a=a+c+H.e(u.gC(u))}return a},
lw:function(){var u=H.n1()
if(u!=null)return P.no(u)
throw H.c(P.y("'Uri.base' is not supported"))},
eG:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mn().b
if(typeof b!=="string")H.m(H.af(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghG().bY(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bH(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mF:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
l8:function(a){return new P.b8(1000*a)},
ku:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mI(a)},
cR:function(a){return new P.an(!1,null,null,a)},
kl:function(a,b,c){return new P.an(!0,a,b,c)},
du:function(a,b){return new P.bI(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bI(b,c,!0,a,d,"Invalid value")},
b0:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.W(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.W(b,a,c,"end",null))
return b}return c},
lm:function(a,b){if(typeof a!=="number")return a.N()
if(a<0)throw H.c(P.W(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fM(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iR(a)},
iO:function(a){return new P.iN(a)},
lp:function(a){return new P.cl(a)},
ay:function(a){return new P.fc(a)},
p:function(a){return new P.e3(a)},
T:function(a,b,c){return new P.fE(a,b,c)},
mV:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
kX:function(a){H.oQ(a)},
no:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lv(e<e?C.a.p(a,0,e):a,5,f).gec()
else if(u===32)return P.lv(C.a.p(a,5,e),0,f).gec()}t=new Array(8)
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
if(P.lS(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iy()
if(r>=0)if(P.lS(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.N()
if(typeof n!=="number")return H.u(n)
if(m<n)n=m
if(typeof o!=="number")return o.N()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.N()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.N()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a6(a,"..",o)))j=n>o+2&&C.a.a6(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a6(a,"file",0)){if(q<=0){if(!C.a.a6(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a6(a,"http",0)){if(t&&p+3===o&&C.a.a6(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a6(a,"https",0)){if(t&&p+4===o&&C.a.a6(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jB(a,r,q,p,o,n,m,k)}return P.nI(a,0,e,r,q,p,o,n,m,k)},
ly:function(a){var u=P.h
return C.b.hM(H.b(a.split("&"),[u]),P.kB(u,u),new P.iW(C.e))},
nn:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iT(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cM(C.a.p(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cM(C.a.p(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iU(a),d=new P.iV(e,a)
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
n=C.b.gar(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nn(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aP(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nI:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nQ(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nR(a,u,e-1):""
s=P.nN(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.nP(P.cM(C.a.p(a,r,g),new P.jP(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nO(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.N()
o=h<i?P.kM(a,h+1,i,n):n
return new P.bP(j,t,s,q,p,o,i<c?P.nM(a,i+1,c):n)},
lK:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.c(P.T(c,a,b))},
nP:function(a,b){if(a!=null&&a===P.lK(b))return
return a},
nN:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.I()
u=c-1
if(C.a.X(a,u)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nK(a,t,u)
if(typeof s!=="number")return s.N()
if(s<u){r=s+1
q=P.lP(a,C.a.a6(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lx(a,t,s)
return C.a.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.u(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bn(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lP(a,C.a.a6(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lx(a,b,s)
return"["+C.a.p(a,b,s)+q+"]"}return P.nT(a,b,c)},
nK:function(a,b,c){var u,t=C.a.bn(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.u(c)
u=t<c}else u=!1
return u?t:c},
lP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kN(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.p(a,t,u)
if(p)q=C.a.p(a,u,u+3)
else if(q==="%")P.bQ(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.p(a,t,u)
l.a+=P.kL(r)
u+=m
t=u}}}if(l==null)return C.a.p(a,b,c)
if(t<c)l.a+=C.a.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kN(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bQ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kL(q)
u+=l
t=u}}}}if(s==null)return C.a.p(a,b,c)
if(t<c){n=C.a.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nQ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lM(C.a.E(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bQ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.p(a,b,c)
return P.nJ(t?a.toLowerCase():a)},
nJ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nR:function(a,b,c){return P.cG(a,b,c,C.a_,!1)},
nO:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cG(a,b,c,C.B,!0):C.j.iP(d,new P.jQ(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.nS(u,e,f)},
nS:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.nU(a,!u||c)
return P.nV(a)},
kM:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cR("Both query and queryParameters specified"))
return P.cG(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.v(0,new P.jR(new P.jS(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nM:function(a,b,c){return P.cG(a,b,c,C.l,!0)},
kN:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.k8(u)
r=H.k8(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aP(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bH(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.p(a,b,b+3).toUpperCase()
return},
kL:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hd(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.cm(t,0,null)},
cG:function(a,b,c,d,e){var u=P.lO(a,b,c,d,e)
return u==null?C.a.p(a,b,c):u},
lO:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.N()
if(typeof c!=="number")return H.u(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kN(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bQ(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kL(u)}}if(m==null)m=new P.S("")
m.a+=C.a.p(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.u(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.N()
if(n<c)m.a+=C.a.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lN:function(a){if(C.a.a3(a,"."))return!0
return C.a.dK(a,"/.")!==-1},
nV:function(a){var u,t,s,r,q,p,o
if(!P.lN(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.G(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
nU:function(a,b){var u,t,s,r,q,p
if(!P.lN(a))return!b?P.lL(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gar(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gar(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.lL(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lL:function(a){var u,t,s,r=a.length
if(r>=2&&P.lM(J.mp(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.p(a,0,u)+"%3A"+C.a.a7(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nL:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cR("Invalid URL encoding"))}}return u},
kO:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.p(a,b,c)
else r=new H.o(C.a.p(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.cR("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cR("Truncated URI"))
r.push(P.nL(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iZ(!1).bY(r)},
lM:function(a){var u=a|32
return 97<=u&&u<=122},
lv:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gar(l)
if(r!==44||t!==p+7||!C.a.a6(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hX(0,a,o,u)
else{n=P.lO(a,o,u,C.l,!0)
if(n!=null)a=C.a.aW(a,o,u,n)}return new P.iS(a,l,c)},
nX:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mV(22,new P.k_(),P.bK),n=new P.jZ(o),m=new P.k0(),l=new P.k1(),k=n.$2(0,225)
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
lS:function(a,b,c,d,e){var u,t,s,r,q,p=$.mo()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aQ:function aQ(){},
ad:function ad(a,b){this.a=a
this.b=b},
L:function L(){},
b8:function b8(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
bw:function bw(){},
dq:function dq(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fM:function fM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(a){this.a=a},
iN:function iN(a){this.a=a},
cl:function cl(a){this.a=a},
fc:function fc(a){this.a=a},
hL:function hL(){},
dA:function dA(){},
fk:function fk(a){this.a=a},
e3:function e3(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(){},
w:function w(){},
k:function k(){},
fW:function fW(){},
q:function q(){},
R:function R(){},
bf:function bf(){},
ac:function ac(){},
a3:function a3(){},
h:function h(){},
S:function S(a){this.a=a},
iW:function iW(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
jS:function jS(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(){},
jZ:function jZ(a){this.a=a},
k0:function k0(){},
k1:function k1(){},
jB:function jB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jk:function jk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oz:function(a){var u,t=J.P(a)
if(!!t.$iaV){u=t.gdj(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eE(a.data,a.height,a.width)},
oy:function(a){if(a instanceof P.eE)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var u,t,s,r,q
if(a==null)return
u=P.kB(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
ox:function(a){var u={}
a.v(0,new P.k5(u))
return u},
jD:function jD(){},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a){this.a=a},
jE:function jE(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
jq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jt:function jt(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
h1:function h1(){},
b_:function b_(){},
hJ:function hJ(){},
hR:function hR(){},
cj:function cj(){},
ih:function ih(){},
l:function l(){},
b1:function b1(){},
iD:function iD(){},
e8:function e8(){},
e9:function e9(){},
ej:function ej(){},
ek:function ek(){},
ev:function ev(){},
ew:function ew(){},
eC:function eC(){},
eD:function eD(){},
bK:function bK(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
f2:function f2(){},
bp:function bp(){},
hK:function hK(){},
dW:function dW(){},
dw:function dw(){},
ib:function ib(){},
er:function er(){},
es:function es(){}},W={
l2:function(){var u=document.createElement("a")
return u},
ko:function(){var u=document.createElement("canvas")
return u},
mH:function(a,b,c){var u=document.body,t=(u&&C.r).af(u,a,b,c)
t.toString
u=new H.cu(new W.a5(t),new W.ft(),[W.B])
return u.gaH(u)},
kr:function(a){return"wheel"},
c2:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bW(a)
t=u.ge9(a)
if(typeof t==="string")r=u.ge9(a)}catch(s){H.am(s)}return r},
lb:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lI:function(a,b,c,d){var u=W.jp(W.jp(W.jp(W.jp(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.lU(new W.jn(c),W.j)
if(u!=null&&!0)J.mr(a,b,u,!1)
return new W.jm(a,b,u,!1)},
lH:function(a){var u=W.l2(),t=window.location
u=new W.cw(new W.jx(u,t))
u.ez(a)
return u},
nA:function(a,b,c,d){return!0},
nB:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lJ:function(){var u=P.h,t=P.ld(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jK(t,P.c7(u),P.c7(u),P.c7(u),null)
t.eD(null,new H.he(C.o,new W.jL(),[H.b3(C.o,0),u]),s,null)
return t},
lU:function(a,b){var u=$.as
if(u===C.f)return a
return u.df(a,b)},
r:function r(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
bq:function bq(){},
br:function br(){},
bu:function bu(){},
b6:function b6(){},
fg:function fg(){},
H:function H(){},
c1:function c1(){},
fh:function fh(){},
ah:function ah(){},
az:function az(){},
fi:function fi(){},
fj:function fj(){},
fm:function fm(){},
ao:function ao(){},
fn:function fn(){},
d1:function d1(){},
d2:function d2(){},
fo:function fo(){},
fp:function fp(){},
ji:function ji(a,b){this.a=a
this.b=b},
Q:function Q(){},
ft:function ft(){},
j:function j(){},
f:function f(){},
ap:function ap(){},
c3:function c3(){},
fz:function fz(){},
fD:function fD(){},
aA:function aA(){},
fJ:function fJ(){},
c5:function c5(){},
aV:function aV(){},
bz:function bz(){},
bD:function bD(){},
h8:function h8(){},
hu:function hu(){},
cb:function cb(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hx:function hx(){},
hy:function hy(a){this.a=a},
aD:function aD(){},
hz:function hz(){},
aE:function aE(){},
a5:function a5(a){this.a=a},
B:function B(){},
dn:function dn(){},
aF:function aF(){},
hO:function hO(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
i_:function i_(){},
aH:function aH(){},
i8:function i8(){},
aI:function aI(){},
i9:function i9(){},
aJ:function aJ(){},
id:function id(){},
ie:function ie(a){this.a=a},
aq:function aq(){},
dD:function dD(){},
ii:function ii(){},
ij:function ij(){},
cn:function cn(){},
aK:function aK(){},
ar:function ar(){},
im:function im(){},
io:function io(){},
ix:function ix(){},
aL:function aL(){},
bJ:function bJ(){},
iB:function iB(){},
iC:function iC(){},
bh:function bh(){},
iX:function iX(){},
jb:function jb(){},
bk:function bk(){},
cv:function cv(){},
jj:function jj(){},
dY:function dY(){},
jo:function jo(){},
eg:function eg(){},
jC:function jC(){},
jH:function jH(){},
jh:function jh(){},
jl:function jl(a){this.a=a},
jm:function jm(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jn:function jn(a){this.a=a},
cw:function cw(a){this.a=a},
M:function M(){},
dp:function dp(a){this.a=a},
hH:function hH(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(){},
jz:function jz(){},
jA:function jA(){},
jK:function jK(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jL:function jL(){},
jI:function jI(){},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aZ:function aZ(){},
jx:function jx(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
jV:function jV(a){this.a=a},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
en:function en(){},
cC:function cC(){},
cD:function cD(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ex:function ex(){},
ey:function ey(){},
cE:function cE(){},
cF:function cF(){},
eA:function eA(){},
eB:function eB(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){}},K={
O:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.p("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hS(u,t)},
v:function(a){var u=new K.i0()
u.ew(a)
return u},
aS:function aS(){},
d7:function d7(){},
bd:function bd(){},
a9:function a9(){this.a=null},
hS:function hS(a,b){this.a=a
this.b=b},
i0:function i0(){this.a=null}},L={
iz:function(){var u=new L.iy(),t=P.h
u.a=new H.F([t,L.dB])
u.b=new H.F([t,L.dJ])
u.c=P.c7(t)
return u},
dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a){this.b=a
this.c=null},
iy:function iy(){var _=this
_.d=_.c=_.b=_.a=null},
dL:function dL(a){this.b=a
this.a=this.c=null}},O={
kp:function(a){var u=new O.b7([a])
u.bz(a)
return u},
b7:function b7(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ca:function ca(){this.b=this.a=null},
d8:function d8(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(a,b){this.a=a
this.b=b},
fR:function fR(a){this.a=a},
fT:function fT(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
fO:function fO(a){this.a=a},
dh:function dh(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(){},
hg:function hg(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c9:function c9(){},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aB:function aB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hj:function hj(){var _=this
_.e=_.d=_.c=_.b=null},
hk:function hk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hl:function hl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dE:function dE(){}},E={
kt:function(){var u,t=new E.aU()
t.a=""
t.b=!0
u=O.kp(E.aU)
t.y=u
u.be(t.ghY(),t.gi0())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbx(0,null)
t.scm(null)
t.sb7(null)
return t},
lF:function(){if(J.kk(window.navigator.vendor,"Google"))return C.H
if(J.kk(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.at(u).D(u,"Trident")||C.a.D(u,"Edge"))return C.u
if(J.kk(window.navigator.appName,"Microsoft"))return C.u
return C.I},
lG:function(){var u=window.navigator.appVersion
if(J.at(u).D(u,"Win"))return C.a2
if(C.a.D(u,"Mac"))return C.C
if(C.a.D(u,"Linux"))return C.a3
return C.a4},
ne:function(a,b){var u=new E.hT(a)
u.ev(a,b)
return u},
nl:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibu)return E.lr(a,!0,!0,!0,!1)
u=W.ko()
t=u.style
t.width="100%"
t.height="100%"
s.gbW(a).n(0,u)
return E.lr(u,!0,!0,!0,!1)},
lr:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dG(),o=C.i.cq(a,"webgl2",P.mT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.m(P.p("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.ne(o,a)
u=new T.iu(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dP(a)
t=new X.h0()
t.c=new X.ai(!1,!1,!1)
t.d=P.c7(P.w)
u.b=t
t=new X.hA(u)
t.f=0
t.r=V.bg()
t.x=V.bg()
t.ch=t.Q=1
u.c=t
t=new X.h9(u)
t.r=0
t.x=V.bg()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iA(u)
t.f=V.bg()
t.r=V.bg()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dC,P.a3]])
t=$.fv
u.Q=(t==null?$.fv=new E.e2(E.lF(),E.lG()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.X(r,"contextmenu",u.gfm(),!1))
u.z.push(W.X(a,"focus",u.gft(),!1))
u.z.push(W.X(a,"blur",u.gfg(),!1))
u.z.push(W.X(r,"keyup",u.gfz(),!1))
u.z.push(W.X(r,"keydown",u.gfv(),!1))
u.z.push(W.X(a,"mousedown",u.gfD(),!1))
u.z.push(W.X(a,"mouseup",u.gfH(),!1))
u.z.push(W.X(a,q,u.gfF(),!1))
s=u.z
W.kr(a)
W.kr(a)
s.push(W.X(a,W.kr(a),u.gfJ(),!1))
u.z.push(W.X(r,q,u.gfo(),!1))
u.z.push(W.X(r,"mouseup",u.gfq(),!1))
u.z.push(W.X(r,"pointerlockchange",u.gfL(),!1))
u.z.push(W.X(a,"touchstart",u.gfY(),!1))
u.z.push(W.X(a,"touchend",u.gfU(),!1))
u.z.push(W.X(a,"touchmove",u.gfW(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ad(Date.now(),!1)
p.db=0
p.cW()
return p},
f6:function f6(){},
aU:function aU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bs:function bs(a){this.b=a},
bF:function bF(a){this.b=a},
e2:function e2(a,b){this.a=a
this.b=b},
hT:function hT(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
dG:function dG(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iw:function iw(a){this.a=a}},Z={
kJ:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bR(c)),35044)
a.bindBuffer(b,null)
return new Z.dT(b,u)},
al:function(a){return new Z.aO(a)},
dT:function dT(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dU:function dU(a){this.a=a},
bt:function bt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cV:function cV(){this.a=null},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a){this.a=a}},D={
I:function(){var u=new D.bx()
u.d=0
return u},
f9:function f9(){},
bx:function bx(){var _=this
_.d=_.c=_.b=_.a=null},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
Z:function Z(){this.b=null},
bB:function bB(){this.b=null},
bC:function bC(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f3:function f3(){},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
de:function de(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hP:function hP(){},
ia:function ia(){}},X={cW:function cW(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},h0:function h0(){var _=this
_.d=_.c=_.b=_.a=null},dg:function dg(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h9:function h9(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},aY:function aY(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hA:function hA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cc:function cc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hQ:function hQ(){},dK:function dK(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iA:function iA(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mJ:function(a){var u=new X.fF(),t=new V.V(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lo
if(t==null){t=V.ln(0,0,1,1)
$.lo=t}u.r=t
return u},
kn:function kn(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(){}},V={
cY:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.V(a,a,a,1)},
oY:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bc(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.a.ai("null",c)
return C.a.ai(C.d.ea(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bV:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.K(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ai(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
kW:function(a){return C.d.ir(Math.pow(2,C.W.c9(Math.log(H.ow(a))/Math.log(2))))},
dj:function(){var u=$.lf
return u==null?$.lf=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
le:function(a,b,c){var u=c.B(0,Math.sqrt(c.J(c))),t=b.b4(u),s=t.B(0,Math.sqrt(t.J(t))),r=u.b4(s),q=new V.D(a.a,a.b,a.c),p=s.T(0).J(q),o=r.T(0).J(q),n=u.T(0).J(q)
return V.aC(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bg:function(){var u=$.li
return u==null?$.li=new V.aj(0,0):u},
lj:function(){var u=$.aG
return u==null?$.aG=new V.a4(0,0,0):u},
ln:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dv(a,b,c,d)},
aN:function(){var u=$.lC
return u==null?$.lC=new V.D(0,0,0):u},
lE:function(){var u=$.lB
return u==null?$.lB=new V.D(1,0,0):u},
nu:function(){var u=$.j0
return u==null?$.j0=new V.D(-1,0,0):u},
kH:function(){var u=$.j1
return u==null?$.j1=new V.D(0,1,0):u},
nv:function(){var u=$.j2
return u==null?$.j2=new V.D(0,0,1):u},
lD:function(){var u=$.lA
return u==null?$.lA=new V.D(0,0,-1):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a){this.a=a},
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
aX:function aX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aj:function aj(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
oT:function(a){P.nm(C.T,new V.kg(a))},
ng:function(a){var u=new V.i4()
u.ex(a,!0)
return u},
cX:function cX(){},
kg:function kg(a){this.a=a},
fl:function fl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i4:function i4(){this.b=this.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a},
i7:function i7(a){this.a=a},
iq:function iq(a,b){this.a=a
this.c=null
this.d=b},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(){}},U={
kq:function(){var u=new U.fb()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l7:function(a){var u=new U.cZ()
u.a=a
return u},
fb:function fb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
c4:function c4(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dQ:function dQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mX:function(a,b){var u=a.b5,t=new A.hf(b,u)
t.cz(b,u)
t.eu(a,b)
return t},
mY:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gan(a3)+a4.gan(a4)+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+a9.gan(a9)+b0.gan(b0)+b1.gan(b1)+"_"
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
d=$.aw()
if(j){u=$.av()
d=new Z.aO(d.a|u.a)}if(i){u=$.au()
d=new Z.aO(d.a|u.a)}if(h){u=$.b5()
d=new Z.aO(d.a|u.a)}if(g){u=$.b4()
d=new Z.aO(d.a|u.a)}return new A.hi(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k2:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k3:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k2(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eT(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
o5:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k2(b,t,"emission")
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
o1:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k3(b,t,"ambient")
b.a+="\n"},
o3:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k3(b,t,"diffuse")
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
o6:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k3(b,t,"invDiffuse")
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
oc:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k3(b,t,"specular")
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
o8:function(a,b){var u,t,s
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
oa:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k2(b,t,"reflect")
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
ob:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k2(b,t,"refract")
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
o2:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eT(t)
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
if(typeof u!=="number")return u.aa()
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
o4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eT(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aa()
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
o9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eT(t)
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
if(typeof u!=="number")return u.aa()
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
od:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eT(t)
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
if(typeof u!=="number")return u.aa()
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
if(o){u=$.fv
if(u==null)u=$.fv=new E.e2(E.lF(),E.lG())
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
o7:function(a,b){var u,t
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
oe:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.o5(a,j)
A.o1(a,j)
A.o3(a,j)
A.o6(a,j)
A.oc(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oa(a,j)
A.ob(a,j)}A.o8(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.o2(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.o4(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.o9(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.od(a,q[o],j)
A.o7(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a7(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a7(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a7(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a7(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
of:function(a,b){var u,t,s
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
oh:function(a,b){var u
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
og:function(a,b){var u
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
oj:function(a,b){var u,t
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
ok:function(a,b){var u,t
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
oi:function(a,b){var u
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
ol:function(a,b){var u
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
eT:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a7(a,1)},
kE:function(a,b,c,d,e){var u=new A.iG(a,c,e)
u.f=d
P.mU(d,0,P.w)
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hf:function hf(a,b){var _=this
_.iG=_.dn=_.bm=_.b5=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iO=_.iN=_.iM=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.iL=_.dD=_.dC=_.iK=_.dB=_.dA=_.dz=_.iJ=_.dw=_.dv=_.du=_.iI=_.dt=_.ds=_.iH=_.dr=_.dq=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cT:function cT(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b5=b4
_.bm=b5},
co:function co(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cp:function cp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cr:function cr(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
iL:function iL(a){this.a=a},
bi:function bi(a,b,c){this.a=a
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
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
bj:function bj(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
bL:function bL(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jY:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cH:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.D(u+a3,t+a1,s+a2)
q=new V.D(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.D(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jY(i)
l=F.jY(h)
k=F.oV(d,a0,new F.jX(j,F.jY(g),F.jY(f),l,m,c),b)
if(k!=null)a.hW(k)},
oV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.ck()
t=H.b([],[F.ct])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.d6(new V.V(p,0,0,1),new V.aj(r,1))
c.$3(o,r,0)
t.push(o.bZ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.d6(new V.V(j,i,h,1),new V.aj(r,m))
c.$3(o,r,n)
t.push(o.bZ(d))}}u.d.ho(a+1,b+1,t)
return u},
d4:function(a,b,c){var u=new F.by(),t=a.a
if(t==null)H.m(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.m(P.p("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
mQ:function(a,b){var u,t=new F.bE()
if(a==null)H.m(P.p("May not create a line with a null start vertex."))
if(b==null)H.m(P.p("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.m(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.m(P.p("May not create a line with vertices attached to different shapes."))
t.a=a
a.c.b.push(t)
t.b=b
b.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.Y()
return t},
n_:function(a){var u=new F.cg()
if(a.a==null)H.m(P.p("May not create a point with a vertex which is not attached to a shape."))
u.a=a
a.b.b.push(u)
u.a.a.b.b.push(u)
u.a.a.Y()
return u},
ck:function(){var u=new F.ak(),t=new F.j3(u)
t.b=!1
t.c=H.b([],[F.ct])
u.a=t
t=new F.i3(u)
t.b=H.b([],[F.cg])
u.b=t
t=new F.i2(u)
t.b=H.b([],[F.bE])
u.c=t
t=new F.i1(u)
t.b=H.b([],[F.by])
u.d=t
u.e=null
return u},
kI:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ct(),r=new F.j8()
r.b=H.b([],[F.cg])
s.b=r
r=new F.j7()
u=[F.bE]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j4()
u=[F.by]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mi()
s.e=0
r=$.aw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.av().a)!==0?e:t
s.x=(u&$.au().a)!==0?b:t
s.y=(u&$.b5().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.mj().a)!==0?c:t
s.ch=(u&$.bX().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
jX:function jX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
by:function by(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bE:function bE(){this.b=this.a=null},
cg:function cg(){this.a=null},
ak:function ak(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a
this.b=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
ct:function ct(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
j3:function j3(a){this.a=a
this.c=this.b=null},
j4:function j4(){this.d=this.c=this.b=null},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(){this.c=this.b=null},
j8:function j8(){this.b=null}},T={dF:function dF(){},ip:function ip(){},it:function it(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iu:function iu(a){var _=this
_.a=a
_.e=_.d=_.b=null},iv:function iv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
m_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="bumpMaps",a1="modifiers",a2=V.ng("Test 006"),a3=W.ko()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.h]
a2.d8(H.b(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],u))
a2.hm(H.b(["bumpMaps"],u))
a2.d8(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.m(P.p("Failed to find an element with the identifier, testCanvas."))
s=E.nl(t,!0,!0,!0,!1)
r=F.ck()
F.cH(r,a,a,1,1,1,0,0,1)
F.cH(r,a,a,1,1,0,1,0,3)
F.cH(r,a,a,1,1,0,0,1,2)
F.cH(r,a,a,1,1,-1,0,0,0)
F.cH(r,a,a,1,1,0,-1,0,0)
F.cH(r,a,a,1,1,0,0,-1,3)
r.az()
q=new O.dh()
p=O.kp(V.aX)
q.e=p
p.be(q.gfc(),q.gfe())
p=new O.aB(q,"emission")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
q.f=p
p=new O.aB(q,"ambient")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
q.r=p
p=new O.aB(q,"diffuse")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
q.x=p
p=new O.aB(q,"invDiffuse")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
q.y=p
p=new O.hl(q,"specular")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
p.ch=100
q.z=p
p=new O.hh(q,"bump")
p.c=new A.a_(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.aB(q,"reflect")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
q.cx=p
p=new O.hk(q,"refract")
p.c=new A.a_(!1,!1,!1)
p.f=new V.Y(0,0,0)
p.ch=1
q.cy=p
p=new O.hg(q,"alpha")
p.c=new A.a_(!1,!1,!1)
p.f=1
q.db=p
p=new D.de()
p.bz(D.a8)
p.e=H.b([],[D.f3])
p.f=H.b([],[D.bv])
p.r=H.b([],[D.hP])
p.x=H.b([],[D.ia])
p.z=p.y=null
p.cs(p.gfa(),p.gfO(),p.gfS())
q.dx=p
o=new O.hj()
o.b=new V.V(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.y
p=o==null?p.y=D.I():o
p.n(0,q.gh4())
p=q.dx
o=p.z
p=o==null?p.z=D.I():o
p.n(0,q.gbh())
q.fr=null
p=q.dx
n=V.kH()
o=U.l7(V.le(V.lj(),n,new V.D(0,0,-1)))
m=new V.Y(1,1,1)
l=new D.bv()
l.c=new V.Y(1,1,1)
l.a=V.nv()
l.d=V.kH()
l.e=V.nu()
k=l.b
l.b=o
o.gu().n(0,l.geA())
o=new D.A("mover",k,l.b)
o.b=!0
l.as(o)
if(!l.c.q(0,m)){k=l.c
l.c=m
o=new D.A("color",k,m)
o.b=!0
l.as(o)}p.n(0,l)
p=q.r
p.sa9(0,new V.Y(0,0,1))
p=q.x
p.sa9(0,new V.Y(0,1,0))
p=q.z
p.sa9(0,new V.Y(1,0,0))
p=q.z
p.bR(new A.a_(!0,p.c.b,!1))
p.cY(10)
j=E.kt()
j.sbx(0,r)
j.scm(q)
i=E.kt()
i.sbx(0,r)
p=new O.d8()
p.b=V.lD()
p.c=new V.V(0.2,0.3,0.4,1)
p.d=new V.V(0.1,0.2,0.3,1)
p.e=V.cY(0.7)
p.f=V.cY(0.3)
p.r=V.cY(0.5)
p.x=V.cY(0.5)
p.y=new V.V(1,1,1,1)
p.z=V.cY(0.8)
p.r1=p.k4=p.k3=p.k2=p.k1=p.id=p.go=p.fy=p.fx=p.fr=p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=!1
p.r2=1
if(!(Math.abs(0.6)<$.C().a)){p.r2=0.4
o=new D.A("vectorScale",1,0.4)
o.b=!0
p.V(o)}if(!p.ch){p.ch=!0
o=new D.A("showWireFrame",!1,!0)
o.b=!0
p.V(o)}if(!p.k3){p.k3=!0
o=new D.A("showAxis",!1,!0)
o.b=!0
p.V(o)}if(!p.cy){p.cy=!0
o=new D.A("showNormals",!1,!0)
o.b=!0
p.V(o)}if(!p.db){p.db=!0
o=new D.A("showBinormals",!1,!0)
o.b=!0
p.V(o)}i.scm(p)
h=E.kt()
h.y.n(0,i)
h.y.n(0,j)
p=new U.c4()
p.bz(U.ae)
p.be(p.gf8(),p.gfQ())
p.e=null
p.f=V.dj()
p.r=0
o=s.x
l=new U.dR()
g=U.kq()
g.scp(0,!0)
g.scd(6.283185307179586)
g.scf(0)
g.sab(0,0)
g.sce(100)
g.sW(0)
g.sc_(0.5)
l.b=g
f=l.gaJ()
g.gu().n(0,f)
g=U.kq()
g.scp(0,!0)
g.scd(6.283185307179586)
g.scf(0)
g.sab(0,0)
g.sce(100)
g.sW(0)
g.sc_(0.5)
l.c=g
g.gu().n(0,f)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
e=new X.ai(!1,!1,!1)
k=l.d
l.d=e
g=new D.A(a1,k,e)
g.b=!0
l.R(g)
g=l.f
if(g!==!1){l.f=!1
g=new D.A("invertX",g,!1)
g.b=!0
l.R(g)}g=l.r
if(g!==!0){l.r=!0
g=new D.A("invertY",g,!0)
g.b=!0
l.R(g)}l.b3(o)
p.n(0,l)
o=s.x
l=new U.dQ()
g=U.kq()
g.scp(0,!0)
g.scd(6.283185307179586)
g.scf(0)
g.sab(0,0)
g.sce(100)
g.sW(0)
g.sc_(0.2)
l.b=g
g.gu().n(0,l.gaJ())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
e=new X.ai(!0,!1,!1)
k=l.c
l.c=e
g=new D.A(a1,k,e)
g.b=!0
l.R(g)
l.b3(o)
p.n(0,l)
o=s.x
l=new U.dS()
l.c=0.01
l.e=l.d=0
e=new X.ai(!1,!1,!1)
l.b=e
g=new D.A(a1,a,e)
g.b=!0
l.R(g)
l.b3(o)
p.n(0,l)
h.sb7(p)
p=new M.d3()
p.a=!0
o=O.kp(E.aU)
p.e=o
o.be(p.gfi(),p.gfk())
p.y=p.x=p.r=p.f=null
d=X.mJ(a)
c=new X.dr()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb7(a)
o=c.c
if(!(Math.abs(o-1.0471975511965976)<$.C().a)){c.c=1.0471975511965976
o=new D.A("fov",o,1.0471975511965976)
o.b=!0
c.aM(o)}o=c.d
if(!(Math.abs(o-0.1)<$.C().a)){c.d=0.1
o=new D.A("near",o,0.1)
o.b=!0
c.aM(o)}o=c.e
if(!(Math.abs(o-2000)<$.C().a)){c.e=2000
o=new D.A("far",o,2000)
o.b=!0
c.aM(o)}o=p.b
if(o!==c){if(o!=null)o.gu().Z(0,p.gaK())
k=p.b
p.b=c
c.gu().n(0,p.gaK())
o=new D.A("camera",k,p.b)
o.b=!0
p.aL(o)}o=p.c
if(o!==d){if(o!=null)o.gu().Z(0,p.gaK())
k=p.c
p.c=d
d.gu().n(0,p.gaK())
o=new D.A("target",k,p.c)
o.b=!0
p.aL(o)}p.e.n(0,h)
p.b.sb7(U.l7(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=s.d
if(o!==p){if(o!=null)o.gu().Z(0,s.gcA())
s.d=p
p.gu().n(0,s.gcA())
s.cB()}p=new V.iq(a0,new N.kd(q,s))
u=u.getElementById(a0)
p.c=u
if(u==null)H.m("Failed to find bumpMaps for Texture2DGroup")
p.aw(0,"../resources/BumpMap1.png",!0)
p.n(0,"../resources/BumpMap2.png")
p.n(0,"../resources/BumpMap3.png")
p.n(0,"../resources/BumpMap4.png")
p.n(0,"../resources/BumpMap5.png")
p.n(0,"../resources/ScrewBumpMap.png")
p.n(0,"../resources/CtrlPnlBumpMap.png")
u=s.Q
if(u==null)u=s.Q=D.I()
p=u.b
u=p==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):p
u.push(new N.ke(a2,q))
V.oT(s)},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kz.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.e(H.ci(a))+"'"}}
J.fX.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iaQ:1}
J.db.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dc.prototype={
gG:function(a){return 0},
i:function(a){return String(a)},
$imO:1}
J.hM.prototype={}
J.bM.prototype={}
J.bb.prototype={
i:function(a){var u=a[$.m6()]
if(u==null)return this.eq(a)
return"JavaScript function for "+H.e(J.a6(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b9.prototype={
ih:function(a,b){var u
if(!!a.fixed$length)H.m(P.y("removeAt"))
u=a.length
if(b>=u)throw H.c(P.du(b,null))
return a.splice(b,1)[0]},
Z:function(a,b){var u
if(!!a.fixed$length)H.m(P.y("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
if(!!a.fixed$length)H.m(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
v:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.ay(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hT:function(a){return this.j(a,"")},
hL:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.ay(a))}return u},
hM:function(a,b,c){return this.hL(a,b,c,null)},
hK:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.ay(a))}throw H.c(H.kw())},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
em:function(a,b,c){if(b<0||b>a.length)throw H.c(P.W(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.W(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.b3(a,0)])
return H.b(a.slice(b,c),[H.b3(a,0)])},
gar:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kw())},
da:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.ay(a))}return!1},
aZ:function(a,b){if(!!a.immutable$list)H.m(P.y("sort"))
H.nj(a,b==null?J.nZ():b)},
el:function(a){return this.aZ(a,null)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
i:function(a){return P.kv(a,"[","]")},
gS:function(a){return new J.a7(a,a.length)},
gG:function(a){return H.ch(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.m(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kl(b,u,null))
if(b<0)throw H.c(P.W(b,0,null,u,null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bm(a,b))
if(b>=a.length||b<0)throw H.c(H.bm(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.m(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bm(a,b))
a[b]=c},
$it:1,
$ik:1,
$iq:1}
J.ky.prototype={}
J.a7.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c6.prototype={
aT:function(a,b){var u
if(typeof b!=="number")throw H.c(H.af(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
ir:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
c9:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
ea:function(a,b){var u
if(b>20)throw H.c(P.W(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.W(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.m(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.w("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bc:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d_(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d_(a,b)},
d_:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aP:function(a,b){var u
if(a>0)u=this.cZ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hd:function(a,b){if(b<0)throw H.c(H.af(b))
return this.cZ(a,b)},
cZ:function(a,b){return b>31?0:a>>>b},
$iL:1,
$iac:1}
J.da.prototype={$iw:1}
J.d9.prototype={}
J.ba.prototype={
X:function(a,b){if(b<0)throw H.c(H.bm(a,b))
if(b>=a.length)H.m(H.bm(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bm(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.kl(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.b0(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.m(H.af(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.W(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a6(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.m(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.N()
if(b<0)throw H.c(P.du(b,null))
if(b>c)throw H.c(P.du(b,null))
if(c>a.length)throw H.c(P.du(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.p(a,b,null)},
iu:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ai:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
bn:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.W(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dK:function(a,b){return this.bn(a,b,0)},
ht:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.W(c,0,u,null,null))
return H.m3(a,b,c)},
D:function(a,b){return this.ht(a,b,0)},
aT:function(a,b){var u
if(typeof b!=="string")throw H.c(H.af(b))
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
gl:function(a){return a.length},
$ih:1}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)},
$at:function(){return[P.w]},
$ax:function(){return[P.w]},
$ak:function(){return[P.w]},
$aq:function(){return[P.w]}}
H.t.prototype={}
H.df.prototype={
gS:function(a){return new H.bc(this,this.gl(this))},
bv:function(a,b){return this.ep(0,b)}}
H.bc.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.at(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.ay(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.c8.prototype={
gS:function(a){return new H.hd(J.aR(this.a),this.b)},
gl:function(a){return J.ag(this.a)},
H:function(a,b){return this.b.$1(J.eU(this.a,b))},
$ak:function(a,b){return[b]}}
H.fs.prototype={$it:1,
$at:function(a,b){return[b]}}
H.hd.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.he.prototype={
gl:function(a){return J.ag(this.a)},
H:function(a,b){return this.b.$1(J.eU(this.a,b))},
$at:function(a,b){return[b]},
$adf:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.cu.prototype={
gS:function(a){return new H.jc(J.aR(this.a),this.b)}}
H.jc.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d5.prototype={}
H.iQ.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dN.prototype={}
H.fd.prototype={
i:function(a){return P.kC(this)},
m:function(a,b,c){return H.mE()},
$iR:1}
H.fe.prototype={
gl:function(a){return this.a},
bX:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bX(0,b))return
return this.cO(b)},
cO:function(a){return this.b[a]},
v:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cO(s))}}}
H.iE.prototype={
ah:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hI.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h_.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iP.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ki.prototype={
$1:function(a){if(!!J.P(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.et.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c0.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cN(t==null?"unknown":t)+"'"},
gix:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.il.prototype={}
H.ic.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cN(u)+"'"}}
H.bZ.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bZ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.ch(this.a)
else u=typeof t!=="object"?J.cQ(t):H.ch(t)
return(u^H.ch(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ci(u))+"'")}}
H.f8.prototype={
i:function(a){return this.a}}
H.hZ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.F.prototype={
gl:function(a){return this.a},
ghS:function(a){return this.a===0},
ga0:function(a){return new H.h3(this,[H.b3(this,0)])},
giw:function(a){var u=this
return H.mW(u.ga0(u),new H.fZ(u),H.b3(u,0),H.b3(u,1))},
bX:function(a,b){var u=this.b
if(u==null)return!1
return this.eT(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.hQ(b)},
hQ:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cQ(r,s.dM(a))
t=s.dN(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cE(u==null?s.b=s.bN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cE(t==null?s.c=s.bN():t,b,c)}else s.hR(b,c)},
hR:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bN()
u=r.dM(a)
t=r.cQ(q,u)
if(t==null)r.bS(q,u,[r.bO(a,b)])
else{s=r.dN(t,a)
if(s>=0)t[s].b=b
else t.push(r.bO(a,b))}},
v:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.ay(u))
t=t.c}},
cE:function(a,b,c){var u=this.bg(a,b)
if(u==null)this.bS(a,b,this.bO(b,c))
else u.b=c},
f3:function(){this.r=this.r+1&67108863},
bO:function(a,b){var u,t=this,s=new H.h2(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f3()
return s},
dM:function(a){return J.cQ(a)&0x3ffffff},
dN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
i:function(a){return P.kC(this)},
bg:function(a,b){return a[b]},
cQ:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eX:function(a,b){delete a[b]},
eT:function(a,b){return this.bg(a,b)!=null},
bN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bS(t,u,t)
this.eX(t,u)
return t}}
H.fZ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b3(u,1),args:[H.b3(u,0)]}}}
H.h2.prototype={}
H.h3.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.h4(u,u.r)
t.c=u.e
return t}}
H.h4.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.ay(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k9.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.ka.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kb.prototype={
$1:function(a){return this.a(a)}}
H.fY.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inc:1}
H.cd.prototype={$icd:1}
H.be.prototype={$ibe:1}
H.dk.prototype={
gl:function(a){return a.length},
$iz:1,
$az:function(){}}
H.ce.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aP(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.L]},
$ax:function(){return[P.L]},
$ik:1,
$ak:function(){return[P.L]},
$iq:1,
$aq:function(){return[P.L]}}
H.dl.prototype={
m:function(a,b,c){H.aP(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.w]},
$ax:function(){return[P.w]},
$ik:1,
$ak:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
H.hB.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.hC.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.hD.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.hE.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.hF.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.dm.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.cf.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aP(b,a,a.length)
return a[b]},
$icf:1,
$ibK:1}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
P.je.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jd.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jf.prototype={
$0:function(){this.a.$0()}}
P.jg.prototype={
$0:function(){this.a.$0()}}
P.ez.prototype={
eE:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bU(new P.jN(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eF:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bU(new P.jM(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idH:1}
P.jN.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jM.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.es(u,q)}s.c=r
t.d.$1(s)}}
P.bN.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bO.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bN){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aR(u)
if(!!r.$ibO){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jJ.prototype={
gS:function(a){return new P.bO(this.a())}}
P.dV.prototype={}
P.dC.prototype={}
P.ig.prototype={}
P.dH.prototype={}
P.jW.prototype={}
P.k4.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dq():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.ju.prototype={
il:function(a){var u,t,s,r=null
try{if(C.f===$.as){a.$0()
return}P.on(r,r,this,a)}catch(s){u=H.am(s)
t=H.kT(s)
P.lR(r,r,this,u,t)}},
im:function(a,b){var u,t,s,r=null
try{if(C.f===$.as){a.$1(b)
return}P.oo(r,r,this,a,b)}catch(s){u=H.am(s)
t=H.kT(s)
P.lR(r,r,this,u,t)}},
io:function(a,b){return this.im(a,b,null)},
hs:function(a){return new P.jv(this,a)},
df:function(a,b){return new P.jw(this,a,b)}}
P.jv.prototype={
$0:function(){return this.a.il(this.b)}}
P.jw.prototype={
$1:function(a){return this.a.io(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jr.prototype={
gS:function(a){var u=new P.ea(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eR(b)
return t}},
eR:function(a){var u=this.d
if(u==null)return!1
return this.bE(this.cP(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cI(u==null?s.b=P.kK():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cI(t==null?s.c=P.kK():t,b)}else return s.eH(0,b)},
eH:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kK()
u=s.cK(b)
t=r[u]
if(t==null)r[u]=[s.bB(b)]
else{if(s.bE(t,b)>=0)return!1
t.push(s.bB(b))}return!0},
Z:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h0(this.c,b)
else return this.h_(0,b)},
h_:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cP(r,b)
t=s.bE(u,b)
if(t<0)return!1
s.d1(u.splice(t,1)[0])
return!0},
cI:function(a,b){if(a[b]!=null)return!1
a[b]=this.bB(b)
return!0},
h0:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d1(u)
delete a[b]
return!0},
cJ:function(){this.r=1073741823&this.r+1},
bB:function(a){var u,t=this,s=new P.js(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cJ()
return s},
d1:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cJ()},
cK:function(a){return J.cQ(a)&1073741823},
cP:function(a,b){return a[this.cK(b)]},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.js.prototype={}
P.ea.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.ay(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fV.prototype={}
P.h5.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h6.prototype={$it:1,$ik:1,$iq:1}
P.x.prototype={
gS:function(a){return new H.bc(a,this.gl(a))},
H:function(a,b){return this.h(a,b)},
v:function(a,b){var u,t=this.gl(a)
if(typeof t!=="number")return H.u(t)
u=0
for(;u<t;++u){b.$1(this.h(a,u))
if(t!==this.gl(a))throw H.c(P.ay(a))}},
it:function(a,b){var u,t,s=this,r=H.b([],[H.oG(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
is:function(a){return this.it(a,!0)},
hH:function(a,b,c,d){var u
P.b0(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kv(a,"[","]")}}
P.ha.prototype={}
P.hb.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a2.prototype={
v:function(a,b){var u,t
for(u=J.aR(this.ga0(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ag(this.ga0(a))},
i:function(a){return P.kC(a)},
$iR:1}
P.jO.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.hc.prototype={
h:function(a,b){return J.bY(this.a,b)},
m:function(a,b,c){J.kj(this.a,b,c)},
v:function(a,b){J.l0(this.a,b)},
gl:function(a){return J.ag(this.a)},
i:function(a){return J.a6(this.a)},
$iR:1}
P.dO.prototype={}
P.jy.prototype={
ae:function(a,b){var u
for(u=J.aR(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.kv(this,"{","}")},
H:function(a,b){var u,t,s
P.lm(b,"index")
for(u=P.nF(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$it:1,
$ik:1}
P.eb.prototype={}
P.eF.prototype={}
P.f4.prototype={
hX:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b0(a0,a1,b.length)
u=$.ml()
if(typeof a1!=="number")return H.u(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k8(C.a.E(b,n))
j=H.k8(C.a.E(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.p(b,s,t)
r.a=g+H.bH(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.p(b,s,a1)
f=g.length
if(q>=0)P.l3(b,p,a1,q,o,f)
else{e=C.c.bc(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l3(b,p,a1,q,o,d)
else{e=C.c.bc(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aW(b,a1,a1,e===2?"==":"=")}return b}}
P.f5.prototype={}
P.fa.prototype={}
P.ff.prototype={}
P.fu.prototype={}
P.fL.prototype={
i:function(a){return this.a}}
P.fK.prototype={
eU:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.S("")
if(r>b)q.a+=C.a.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mw(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iY.prototype={
ghG:function(){return C.R}}
P.j_.prototype={
bY:function(a){var u,t,s,r=P.b0(0,null,a.length)
if(typeof r!=="number")return r.I()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jU(t)
if(s.eZ(a,0,r)!==r)s.d4(J.ms(a,r-1),0)
return new Uint8Array(t.subarray(0,H.nW(0,s.b,t.length)))}}
P.jU.prototype={
d4:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eZ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d4(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
bY:function(a){var u,t,s,r,q,p,o,n,m=P.np(!1,a,0,null)
if(m!=null)return m
u=P.b0(0,null,J.ag(a))
t=P.lT(a,0,u)
if(t>0){s=P.cm(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jT(!1,r)
o.c=p
o.hu(a,q,u)
if(o.e>0){H.m(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bH(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jT.prototype={
hu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.at(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.aa()
if((r&192)!==128){q=P.T(k+C.c.ba(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.T("Overlong encoding of 0x"+C.c.ba(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.ba(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bH(j)
l.c=!1}if(typeof c!=="number")return H.u(c)
q=s<c
for(;q;){p=P.lT(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cm(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.N()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.ba(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.ba(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aQ.prototype={}
P.ad.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
aT:function(a,b){return C.c.aT(this.a,b.a)},
gG:function(a){var u=this.a
return(u^C.c.aP(u,30))&1073741823},
i:function(a){var u=this,t=P.mF(H.n8(u)),s=P.d_(H.n6(u)),r=P.d_(H.n2(u)),q=P.d_(H.n3(u)),p=P.d_(H.n5(u)),o=P.d_(H.n7(u)),n=P.mG(H.n4(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.L.prototype={}
P.b8.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
aT:function(a,b){return C.c.aT(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fr(),q=this.a
if(q<0)return"-"+new P.b8(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.fq().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.dq.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
gbD:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbC:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbD()+o+u
if(!q.a)return t
s=q.gbC()
r=P.ku(q.b)
return t+s+": "+r}}
P.bI.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fM.prototype={
gbD:function(){return"RangeError"},
gbC:function(){var u,t=this.b
if(typeof t!=="number")return t.N()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cl.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fc.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ku(u)+"."}}
P.hL.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dA.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fk.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e3.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
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
k=""}j=C.a.p(f,m,n)
return h+l+j+k+"\n"+C.a.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fG.prototype={}
P.w.prototype={}
P.k.prototype={
bv:function(a,b){return new H.cu(this,b,[H.kS(this,"k",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.t();)++u
return u},
gaH:function(a){var u,t=this.gS(this)
if(!t.t())throw H.c(H.kw())
u=t.gC(t)
if(t.t())throw H.c(H.mL())
return u},
H:function(a,b){var u,t,s
P.lm(b,"index")
for(u=this.gS(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.mK(this,"(",")")}}
P.fW.prototype={}
P.q.prototype={$it:1,$ik:1}
P.R.prototype={}
P.bf.prototype={
gG:function(a){return P.a3.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
q:function(a,b){return this===b},
gG:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.e(H.ci(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iW.prototype={
$2:function(a,b){var u,t,s,r=J.cK(b).dK(b,"=")
if(r===-1){if(b!=="")J.kj(a,P.kO(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.p(b,0,r)
t=C.a.a7(b,r+1)
s=this.a
J.kj(a,P.kO(u,0,u.length,s,!0),P.kO(t,0,t.length,s,!0))}return a}}
P.iT.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iU.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iV.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cM(C.a.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.N()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bP.prototype={
ged:function(){return this.b},
gca:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.p(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.lK(this.a)
return u},
gcj:function(a){var u=this.f
return u==null?"":u},
gdF:function(){var u=this.r
return u==null?"":u},
e7:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a3(u,"/"))u="/"+u
s=P.kM(null,0,0,b)
return new P.bP(q,o,m,n,u,s,r.r)},
gck:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dO(P.ly(t==null?"":t),[u,u])
t=u}return t},
gdG:function(){return this.c!=null},
gdJ:function(){return this.f!=null},
gdH:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ikF)if(s.a==b.gbw())if(s.c!=null===b.gdG())if(s.b==b.ged())if(s.gca(s)==b.gca(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.ge1(b)){u=s.f
t=u==null
if(!t===b.gdJ()){if(t)u=""
if(u===b.gcj(b)){u=s.r
t=u==null
if(!t===b.gdH()){if(t)u=""
u=u===b.gdF()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.i(0)):u},
$ikF:1,
gbw:function(){return this.a},
ge1:function(a){return this.e}}
P.jP.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jQ.prototype={
$1:function(a){return P.eG(C.a0,a,C.e,!1)}}
P.jS.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eG(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eG(C.h,b,C.e,!0))}}}
P.jR.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aR(b),t=this.a;u.t();)t.$2(a,u.gC(u))}}
P.iS.prototype={
gec:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bn(u,"?",o)
s=u.length
if(t>=0){r=P.cG(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jk("data",p,p,p,P.cG(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k_.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jZ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mt(u,0,96,b)
return u},
$S:18}
P.k0.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k1.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jB.prototype={
gdG:function(){return this.c>0},
gdI:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
gdJ:function(){var u=this.f
if(typeof u!=="number")return u.N()
return u<this.r},
gdH:function(){return this.r<this.a.length},
gcR:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcS:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbw:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcR())q=t.x="http"
else if(t.gcS()){t.x="https"
q="https"}else if(q===4&&C.a.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a3(t.a,r)){t.x=r
q=r}else{q=C.a.p(t.a,0,q)
t.x=q}return q},
ged:function(){var u=this.c,t=this.b+3
return u>t?C.a.p(this.a,t,u-1):""},
gca:function(a){var u=this.c
return u>0?C.a.p(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdI()){u=t.d
if(typeof u!=="number")return u.A()
return P.cM(C.a.p(t.a,u+1,t.e),null,null)}if(t.gcR())return 80
if(t.gcS())return 443
return 0},
ge1:function(a){return C.a.p(this.a,this.e,this.f)},
gcj:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.N()
return u<t?C.a.p(this.a,u+1,t):""},
gdF:function(){var u=this.r,t=this.a
return u<t.length?C.a.a7(t,u+1):""},
gck:function(){var u=this,t=u.f
if(typeof t!=="number")return t.N()
if(t>=u.r)return C.a1
t=P.h
return new P.dO(P.ly(u.gcj(u)),[t,t])},
e7:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbw(),m=n==="file",l=p.c,k=l>0?C.a.p(p.a,p.b+3,l):"",j=p.gdI()?p.gbq(p):o
l=p.c
if(l>0)u=C.a.p(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.p(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.kM(o,0,0,b)
s=p.r
q=s<l.length?C.a.a7(l,s+1):o
return new P.bP(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ikF&&this.a===b.i(0)},
i:function(a){return this.a},
$ikF:1}
P.jk.prototype={}
W.r.prototype={}
W.eW.prototype={
gl:function(a){return a.length}}
W.eX.prototype={
i:function(a){return String(a)}}
W.eY.prototype={
i:function(a){return String(a)}}
W.bq.prototype={$ibq:1}
W.br.prototype={$ibr:1}
W.bu.prototype={
cq:function(a,b,c){if(c!=null)return a.getContext(b,P.ox(c))
return a.getContext(b)},
eg:function(a,b){return this.cq(a,b,null)},
$ibu:1}
W.b6.prototype={
gl:function(a){return a.length}}
W.fg.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c1.prototype={
gl:function(a){return a.length}}
W.fh.prototype={}
W.ah.prototype={}
W.az.prototype={}
W.fi.prototype={
gl:function(a){return a.length}}
W.fj.prototype={
gl:function(a){return a.length}}
W.fm.prototype={
gl:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[[P.aa,P.ac]]},
$iz:1,
$az:function(){return[[P.aa,P.ac]]},
$ax:function(){return[[P.aa,P.ac]]},
$ik:1,
$ak:function(){return[[P.aa,P.ac]]},
$iq:1,
$aq:function(){return[[P.aa,P.ac]]}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaG(a))+" x "+H.e(this.gaA(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$iaa&&a.left===u.gbp(b)&&a.top===u.gbs(b)&&this.gaG(a)===u.gaG(b)&&this.gaA(a)===u.gaA(b)},
gG:function(a){return W.lI(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaG(a)),C.d.gG(this.gaA(a)))},
gdg:function(a){return a.bottom},
gaA:function(a){return a.height},
gbp:function(a){return a.left},
gcl:function(a){return a.right},
gbs:function(a){return a.top},
gaG:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ac]}}
W.fo.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[P.h]},
$iz:1,
$az:function(){return[P.h]},
$ax:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
W.fp.prototype={
gl:function(a){return a.length}}
W.ji.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.is(this)
return new J.a7(u,u.length)},
$at:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ak:function(){return[W.Q]},
$aq:function(){return[W.Q]}}
W.Q.prototype={
ghr:function(a){return new W.jl(a)},
gbW:function(a){return new W.ji(a,a.children)},
gdi:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.N()
if(s<0)s=-s*0
if(typeof r!=="number")return r.N()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.la
if(u==null){u=H.b([],[W.aZ])
t=new W.dp(u)
u.push(W.lH(null))
u.push(W.lJ())
$.la=t
d=t}else d=u
u=$.l9
if(u==null){u=new W.eH(d)
$.l9=u
c=u}else{u.a=d
c=u}}if($.aT==null){u=document
t=u.implementation.createHTMLDocument("")
$.aT=t
$.ks=t.createRange()
s=$.aT.createElement("base")
s.href=u.baseURI
$.aT.head.appendChild(s)}u=$.aT
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aT
if(!!this.$ibr)r=u.body
else{r=u.createElement(a.tagName)
$.aT.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Z,a.tagName)){$.ks.selectNodeContents(r)
q=$.ks.createContextualFragment(b)}else{r.innerHTML=b
q=$.aT.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aT.body
if(r==null?u!=null:r!==u)J.l1(r)
c.cr(q)
document.adoptNode(q)
return q},
hw:function(a,b,c){return this.af(a,b,c,null)},
ei:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iQ:1,
ge9:function(a){return a.tagName}}
W.ft.prototype={
$1:function(a){return!!J.P(a).$iQ}}
W.j.prototype={$ij:1}
W.f.prototype={
hn:function(a,b,c,d){if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.bU(c,1),!1)}}
W.ap.prototype={$iap:1}
W.c3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ap]},
$iz:1,
$az:function(){return[W.ap]},
$ax:function(){return[W.ap]},
$ik:1,
$ak:function(){return[W.ap]},
$iq:1,
$aq:function(){return[W.ap]},
$ic3:1}
W.fz.prototype={
gl:function(a){return a.length}}
W.fD.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fJ.prototype={
gl:function(a){return a.length}}
W.c5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.B]},
$iz:1,
$az:function(){return[W.B]},
$ax:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]},
$iq:1,
$aq:function(){return[W.B]}}
W.aV.prototype={$iaV:1,
gdj:function(a){return a.data}}
W.bz.prototype={$ibz:1}
W.bD.prototype={$ibD:1}
W.h8.prototype={
i:function(a){return String(a)}}
W.hu.prototype={
gl:function(a){return a.length}}
W.cb.prototype={$icb:1}
W.hv.prototype={
h:function(a,b){return P.b2(a.get(b))},
v:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.v(a,new W.hw(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa2:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hx.prototype={
h:function(a,b){return P.b2(a.get(b))},
v:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.v(a,new W.hy(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa2:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aD]},
$iz:1,
$az:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ik:1,
$ak:function(){return[W.aD]},
$iq:1,
$aq:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.a5.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lp("No elements"))
if(t>1)throw H.c(P.lp("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d6(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$at:function(){return[W.B]},
$ax:function(){return[W.B]},
$ak:function(){return[W.B]},
$aq:function(){return[W.B]}}
W.B.prototype={
ig:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ij:function(a,b){var u,t
try{u=a.parentNode
J.mq(u,b,a)}catch(t){H.am(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
h2:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.dn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.B]},
$iz:1,
$az:function(){return[W.B]},
$ax:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]},
$iq:1,
$aq:function(){return[W.B]}}
W.aF.prototype={$iaF:1,
gl:function(a){return a.length}}
W.hO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aF]},
$iz:1,
$az:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$iq:1,
$aq:function(){return[W.aF]}}
W.hX.prototype={
h:function(a,b){return P.b2(a.get(b))},
v:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.v(a,new W.hY(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa2:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
W.hY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.i_.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.i8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aH]},
$iz:1,
$az:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ik:1,
$ak:function(){return[W.aH]},
$iq:1,
$aq:function(){return[W.aH]}}
W.aI.prototype={$iaI:1}
W.i9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aI]},
$iz:1,
$az:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ik:1,
$ak:function(){return[W.aI]},
$iq:1,
$aq:function(){return[W.aI]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.id.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
v:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.b([],[P.h])
this.v(a,new W.ie(u))
return u},
gl:function(a){return a.length},
$aa2:function(){return[P.h,P.h]},
$iR:1,
$aR:function(){return[P.h,P.h]}}
W.ie.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.dD.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=W.mH("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a5(t).ae(0,new W.a5(u))
return t}}
W.ii.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.af(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaH(u)
s.toString
u=new W.a5(s)
r=u.gaH(u)
t.toString
r.toString
new W.a5(t).ae(0,new W.a5(r))
return t}}
W.ij.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.by(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.af(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaH(u)
t.toString
s.toString
new W.a5(t).ae(0,new W.a5(s))
return t}}
W.cn.prototype={$icn:1}
W.aK.prototype={$iaK:1}
W.ar.prototype={$iar:1}
W.im.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ar]},
$iz:1,
$az:function(){return[W.ar]},
$ax:function(){return[W.ar]},
$ik:1,
$ak:function(){return[W.ar]},
$iq:1,
$aq:function(){return[W.ar]}}
W.io.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aK]},
$iz:1,
$az:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ik:1,
$ak:function(){return[W.aK]},
$iq:1,
$aq:function(){return[W.aK]}}
W.ix.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.bJ.prototype={$ibJ:1}
W.iB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aL]},
$iz:1,
$az:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ik:1,
$ak:function(){return[W.aL]},
$iq:1,
$aq:function(){return[W.aL]}}
W.iC.prototype={
gl:function(a){return a.length}}
W.bh.prototype={}
W.iX.prototype={
i:function(a){return String(a)}}
W.jb.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
ghz:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghy:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibk:1}
W.cv.prototype={
h3:function(a,b){return a.requestAnimationFrame(H.bU(b,1))},
eY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.H]},
$iz:1,
$az:function(){return[W.H]},
$ax:function(){return[W.H]},
$ik:1,
$ak:function(){return[W.H]},
$iq:1,
$aq:function(){return[W.H]}}
W.dY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$iaa&&a.left===u.gbp(b)&&a.top===u.gbs(b)&&a.width===u.gaG(b)&&a.height===u.gaA(b)},
gG:function(a){return W.lI(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaA:function(a){return a.height},
gaG:function(a){return a.width}}
W.jo.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aA]},
$iz:1,
$az:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ik:1,
$ak:function(){return[W.aA]},
$iq:1,
$aq:function(){return[W.aA]}}
W.eg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.B]},
$iz:1,
$az:function(){return[W.B]},
$ax:function(){return[W.B]},
$ik:1,
$ak:function(){return[W.B]},
$iq:1,
$aq:function(){return[W.B]}}
W.jC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aJ]},
$iz:1,
$az:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$iq:1,
$aq:function(){return[W.aJ]}}
W.jH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aq]},
$iz:1,
$az:function(){return[W.aq]},
$ax:function(){return[W.aq]},
$ik:1,
$ak:function(){return[W.aq]},
$iq:1,
$aq:function(){return[W.aq]}}
W.jh.prototype={
v:function(a,b){var u,t,s,r,q
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa2:function(){return[P.h,P.h]},
$aR:function(){return[P.h,P.h]}}
W.jl.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga0(this).length}}
W.jm.prototype={}
W.jn.prototype={
$1:function(a){return this.a.$1(a)}}
W.cw.prototype={
ez:function(a){var u
if($.cx.ghS($.cx)){for(u=0;u<262;++u)$.cx.m(0,C.Y[u],W.oI())
for(u=0;u<12;++u)$.cx.m(0,C.p[u],W.oJ())}},
aQ:function(a){return $.mm().D(0,W.c2(a))},
ap:function(a,b,c){var u=$.cx.h(0,H.e(W.c2(a))+"::"+b)
if(u==null)u=$.cx.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaZ:1}
W.M.prototype={
gS:function(a){return new W.d6(a,this.gl(a))}}
W.dp.prototype={
aQ:function(a){return C.b.da(this.a,new W.hH(a))},
ap:function(a,b,c){return C.b.da(this.a,new W.hG(a,b,c))},
$iaZ:1}
W.hH.prototype={
$1:function(a){return a.aQ(this.a)}}
W.hG.prototype={
$1:function(a){return a.ap(this.a,this.b,this.c)}}
W.eo.prototype={
eD:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bv(0,new W.jz())
t=b.bv(0,new W.jA())
this.b.ae(0,u)
s=this.c
s.ae(0,C.y)
s.ae(0,t)},
aQ:function(a){return this.a.D(0,W.c2(a))},
ap:function(a,b,c){var u=this,t=W.c2(a),s=u.c
if(s.D(0,H.e(t)+"::"+b))return u.d.hp(c)
else if(s.D(0,"*::"+b))return u.d.hp(c)
else{s=u.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iaZ:1}
W.jz.prototype={
$1:function(a){return!C.b.D(C.p,a)}}
W.jA.prototype={
$1:function(a){return C.b.D(C.p,a)}}
W.jK.prototype={
ap:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.jL.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jI.prototype={
aQ:function(a){var u=J.P(a)
if(!!u.$icj)return!1
u=!!u.$il
if(u&&W.c2(a)==="foreignObject")return!1
if(u)return!0
return!1},
ap:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aQ(a)},
$iaZ:1}
W.d6.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bY(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aZ.prototype={}
W.jx.prototype={}
W.eH.prototype={
cr:function(a){new W.jV(this).$2(a,null)},
b2:function(a,b){if(b==null)J.l1(a)
else b.removeChild(a)},
h8:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mu(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.am(r)}t="element unprintable"
try{t=J.a6(a)}catch(r){H.am(r)}try{s=W.c2(a)
this.h7(a,b,p,t,s,o,n)}catch(r){if(H.am(r) instanceof P.an)throw r
else{this.b2(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aQ(a)){p.b2(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ap(a,"is",g)){p.b2(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.b(u.slice(0),[H.b3(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ap(a,J.mx(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icn)p.cr(a.content)}}
W.jV.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h8(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b2(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.am(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dX.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
P.jD.prototype={
c8:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bu:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iad)return new Date(a.a)
if(!!u.$inc)throw H.c(P.iO("structured clone of RegExp"))
if(!!u.$iap)return a
if(!!u.$ibq)return a
if(!!u.$ic3)return a
if(!!u.$iaV)return a
if(!!u.$icd||!!u.$ibe||!!u.$icb)return a
if(!!u.$iR){t=p.c8(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.v(a,new P.jF(o,p))
return o.a}if(!!u.$iq){t=p.c8(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hv(a,t)}if(!!u.$imO){t=p.c8(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hN(a,new P.jG(o,p))
return o.b}throw H.c(P.iO("structured clone of other type"))},
hv:function(a,b){var u,t=J.at(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.u(s)
u=0
for(;u<s;++u){q=this.bu(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jF.prototype={
$2:function(a,b){this.a.a[a]=this.b.bu(b)},
$S:3}
P.jG.prototype={
$2:function(a,b){this.a.b[a]=this.b.bu(b)},
$S:3}
P.eE.prototype={$iaV:1,
gdj:function(a){return this.a}}
P.k5.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jE.prototype={
hN:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fA.prototype={
gb0:function(){var u=this.b,t=H.kS(u,"x",0)
return new H.c8(new H.cu(u,new P.fB(),[t]),new P.fC(),[t,W.Q])},
v:function(a,b){C.b.v(P.h7(this.gb0(),!1,W.Q),b)},
m:function(a,b,c){var u=this.gb0()
J.mv(u.b.$1(J.eU(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ag(this.gb0().a)},
h:function(a,b){var u=this.gb0()
return u.b.$1(J.eU(u.a,b))},
gS:function(a){var u=P.h7(this.gb0(),!1,W.Q)
return new J.a7(u,u.length)},
$at:function(){return[W.Q]},
$ax:function(){return[W.Q]},
$ak:function(){return[W.Q]},
$aq:function(){return[W.Q]}}
P.fB.prototype={
$1:function(a){return!!J.P(a).$iQ}}
P.fC.prototype={
$1:function(a){return H.i(a,"$iQ")}}
P.jt.prototype={
gcl:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
return u+t},
gdg:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iaa){t=q.a
if(t==u.gbp(b)){s=q.b
if(s==u.gbs(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gcl(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gdg(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cQ(t),r=u.b,q=J.cQ(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.u(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.u(t)
t=C.c.gG(r+t)
return P.nE(P.jq(P.jq(P.jq(P.jq(0,s),q),p),t))}}
P.aa.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaG:function(a){return this.c},
gaA:function(a){return this.d}}
P.aW.prototype={$iaW:1}
P.h1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aW]},
$ax:function(){return[P.aW]},
$ik:1,
$ak:function(){return[P.aW]},
$iq:1,
$aq:function(){return[P.aW]}}
P.b_.prototype={$ib_:1}
P.hJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.b_]},
$ax:function(){return[P.b_]},
$ik:1,
$ak:function(){return[P.b_]},
$iq:1,
$aq:function(){return[P.b_]}}
P.hR.prototype={
gl:function(a){return a.length}}
P.cj.prototype={$icj:1}
P.ih.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.h]},
$ax:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
P.l.prototype={
gbW:function(a){return new P.fA(a,new W.a5(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aZ])
p.push(W.lH(null))
p.push(W.lJ())
p.push(new W.jI())
c=new W.eH(new W.dp(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hw(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a5(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b1.prototype={$ib1:1}
P.iD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.b1]},
$ax:function(){return[P.b1]},
$ik:1,
$ak:function(){return[P.b1]},
$iq:1,
$aq:function(){return[P.b1]}}
P.e8.prototype={}
P.e9.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.bK.prototype={$it:1,
$at:function(){return[P.w]},
$ik:1,
$ak:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
P.f_.prototype={
gl:function(a){return a.length}}
P.f0.prototype={
h:function(a,b){return P.b2(a.get(b))},
v:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.v(a,new P.f1(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa2:function(){return[P.h,null]},
$iR:1,
$aR:function(){return[P.h,null]}}
P.f1.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f2.prototype={
gl:function(a){return a.length}}
P.bp.prototype={}
P.hK.prototype={
gl:function(a){return a.length}}
P.dW.prototype={}
P.dw.prototype={
ip:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$iaV)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oy(g))
return}if(!!t.$ibz)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cR("Incorrect number or type of arguments"))}}
P.ib.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.b2(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[[P.R,,,]]},
$ax:function(){return[[P.R,,,]]},
$ik:1,
$ak:function(){return[[P.R,,,]]},
$iq:1,
$aq:function(){return[[P.R,,,]]}}
P.er.prototype={}
P.es.prototype={}
K.aS.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"}}
K.d7.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bd.prototype={}
K.a9.prototype={
aB:function(a,b){return!this.en(0,b)},
i:function(a){return"!["+this.cu(0)+"]"}}
K.hS.prototype={
aB:function(a,b){if(typeof b!=="number")return H.u(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bH(this.a),t=H.bH(this.b)
return u+".."+t}}
K.i0.prototype={
ew:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.p("May not create a Set with zero characters."))
u=P.w
t=new H.F([u,P.aQ])
for(s=new H.bc(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.h7(t.ga0(t),!0,u)
C.b.el(r)
this.a=r},
aB:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.cm(this.a,0,null)}}
L.dB.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dL(this.a.k(0,b))
r.a=H.b([],[K.bd])
r.c=!1
this.c.push(r)
return r},
hI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
d0:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.D(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga0(n),n=n.gS(n);n.t();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.D(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dI.prototype={
i:function(a){var u=H.kY(this.b,"\n","\\n"),t=H.kY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dJ.prototype={
aD:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.n)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iy.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dB(this,b)
u.c=H.b([],[L.dL])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dJ(a)
u=P.h
t.c=new H.F([u,u])
this.b.m(0,a,t)}return t},
cn:function(a){return this.iv(a)},
iv:function(a){var u=this
return P.o0(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cn(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ih(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hI(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cm(d,0,null)
throw H.c(P.p("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.m(P.y("removeRange"))
P.b0(0,m,d.length)
d.splice(0,m-0)
C.b.ae(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.D(0,p.a)?7:8
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
if(g.d!=null){j=P.cm(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dI(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.D(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nC()
case 1:return P.nD(q)}}},L.dI)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.d0()+"\n"
for(s=this.a,s=s.giw(s),s=s.gS(s);s.t();){u=s.gC(s)
if(u!=this.d)t.a+=u.d0()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dL.prototype={
i:function(a){return this.b.b+": "+this.cu(0)}}
O.b7.prototype={
bz:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cs:function(a,b,c){this.b=b
this.c=a},
be:function(a,b){return this.cs(a,null,b)},
fN:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ey:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a7(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kS(s,"b7",0)]
if(s.fN(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ey(t,H.b([b],r))}},
$ik:1}
O.ca.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.I():u},
aI:function(){var u=this.b
if(u!=null)u.K(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.b.gar(u)
else return V.dj()},
e4:function(a){var u=this.a
if(a==null)u.push(V.dj())
else u.push(a)
this.aI()},
ci:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.f6.prototype={}
E.aU.prototype={
cH:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a7(u,u.length);u.t();){t=u.d
if(t.f==null)t.cH()}},
sbx:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().Z(0,s.gdW())
u=s.c
if(u!=null)u.gu().n(0,s.gdW())
t=new D.A("shape",r,s.c)
t.b=!0
s.ak(t)}},
scm:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().Z(0,s.gdY())
u=s.f
s.f=a
if(a!=null)a.gu().n(0,s.gdY())
s.cH()
t=new D.A("technique",u,s.f)
t.b=!0
s.ak(t)}},
sb7:function(a){var u,t,s=this
if(!J.G(s.r,a)){u=s.r
if(u!=null)u.gu().Z(0,s.gdU())
if(a!=null)a.gu().n(0,s.gdU())
s.r=a
t=new D.A("mover",u,a)
t.b=!0
s.ak(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aX(0,b,s):null
if(!J.G(q,s.x)){u=s.x
s.x=q
t=new D.A("matrix",u,q)
t.b=!0
s.ak(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.a7(r,r.length);r.t();)r.d.am(0,b)},
aC:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga_(s))
else s.a.push(r.w(0,s.ga_(s)))
s.aI()
a.e5(t.f)
s=a.dy
u=(s&&C.b).gar(s)
if(u!=null&&t.d!=null)u.e6(a,t)
for(s=t.y.a,s=new J.a7(s,s.length);s.t();)s.d.aC(a)
a.e2()
a.dx.ci()},
ak:function(a){var u=this.z
if(u!=null)u.K(a)},
Y:function(){return this.ak(null)},
dX:function(a){this.e=null
this.ak(a)},
i3:function(){return this.dX(null)},
dZ:function(a){this.ak(a)},
i4:function(){return this.dZ(null)},
dV:function(a){this.ak(a)},
i2:function(){return this.dV(null)},
dT:function(a){this.ak(a)},
i_:function(){return this.dT(null)},
hZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdS(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
i1:function(a,b){var u,t
for(u=b.gS(b),t=this.gdS();u.t();)u.gC(u).gu().Z(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bs.prototype={
i:function(a){return this.b}}
E.bF.prototype={
i:function(a){return this.b}}
E.e2.prototype={}
E.hT.prototype={
ev:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ad(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ca()
t=[V.aX]
u.a=H.b([],t)
u.gu().n(0,new E.hU(s))
s.cy=u
u=new O.ca()
u.a=H.b([],t)
u.gu().n(0,new E.hV(s))
s.db=u
u=new O.ca()
u.a=H.b([],t)
u.gu().n(0,new E.hW(s))
s.dx=u
u=H.b([],[O.dE])
s.dy=u
u.push(null)
s.fr=new H.F([P.h,A.dx])},
gie:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.w(0,u.ga_(u))
s=u}return s},
ge3:function(){var u,t=this,s=t.ch
if(s==null){s=t.gie()
u=t.dx
u=t.ch=s.w(0,u.ga_(u))
s=u}return s},
gee:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga_(s)
u=t.dx
u=t.cx=s.w(0,u.ga_(u))
s=u}return s},
e5:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gar(u):a)},
e2:function(){var u=this.dy
if(u.length>1)u.pop()},
d9:function(a){var u=a.b
if(u.length===0)throw H.c(P.p("May not cache a shader with no name."))
if(this.fr.bX(0,u))throw H.c(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hU.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hV.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hW.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dG.prototype={
cC:function(a){this.e8()},
cB:function(){return this.cC(null)},
ghO:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.l8(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ad(s,!1)
return u/r},
cW:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.u(r)
u=C.d.c9(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.d.c9(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ls(C.n,s.gik())}},
e8:function(){if(!this.cx){this.cx=!0
var u=window
C.G.eY(u)
C.G.h3(u,W.lU(new E.iw(this),P.ac))}},
ii:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cW()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.l8(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aI()
r=s.db
C.b.sl(r.a,0)
r.aI()
r=s.dx
C.b.sl(r.a,0)
r.aI()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aC(p.e)}s=p.Q
if(s!=null)s.K(null)}catch(q){u=H.am(q)
t=H.kT(q)
P.kX("Error: "+H.e(u))
P.kX("Stack: "+H.e(t))
throw H.c(u)}}}
E.iw.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ii()}}}
Z.dT.prototype={}
Z.cU.prototype={
ax:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.am(s)
t=P.p('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dU.prototype={}
Z.bt.prototype={
ag:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ax:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ax(a)},
eb:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aC:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
e_:function(a){this.ax(a)
this.aC(a)
this.eb(a)},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a6(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.cV.prototype={}
Z.bA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ci(this.c))+"'")+"]"}}
Z.aO.prototype={
gct:function(a){var u=this.a,t=(u&$.aw().a)!==0?3:0
if((u&$.av().a)!==0)t+=3
if((u&$.au().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=4
if((u&$.bX().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
hq:function(a){var u,t=$.aw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.av()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.au()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.mk()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aO))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aw().a)!==0)u.push("Pos")
if((t&$.av().a)!==0)u.push("Norm")
if((t&$.au().a)!==0)u.push("Binm")
if((t&$.b5().a)!==0)u.push("Txt2D")
if((t&$.bo().a)!==0)u.push("TxtCube")
if((t&$.bn().a)!==0)u.push("Clr3")
if((t&$.cO().a)!==0)u.push("Clr4")
if((t&$.bX().a)!==0)u.push("Weight")
if((t&$.b4().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f9.prototype={}
D.bx.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
Z:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.a
u=(s&&C.b).Z(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.b
u=(s&&C.b).Z(s,b)||u}return u},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.v(P.h7(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fx(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.v(u,new D.fy(q))}return!0},
hE:function(){return this.K(null)},
aE:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.fx.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fy.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.bB.prototype={}
D.bC.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cW.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dd.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.h0.prototype={
i9:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i5:function(a){this.c=a.b
this.d.Z(0,a.a)
return!1}}
X.dg.prototype={}
X.h9.prototype={
b_:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.aj(o.a+n*m,o.b+u*t)
t=q.a.gaS()
r=new X.aY(a,V.bg(),q.x,t,s)
r.b=!0
q.z=new P.ad(p,!1)
q.x=s
return r},
cg:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.aa()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.b_(a,b))
return!0},
ia:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaS()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cc(new V.J(s*r,q*p),u,t)
t.b=!0
n.K(t)
return!0},
fC:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dg(c,r.a.gaS(),b)
s.b=!0
t.K(s)
r.y=new P.ad(u,!1)
r.x=V.bg()}}
X.ai.prototype={
q:function(a,b){var u=this
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
X.aY.prototype={}
X.hA.prototype={
bF:function(a,b,c){var u=this,t=new P.ad(Date.now(),!1),s=u.a.gaS(),r=new X.aY(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cg:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bF(a,b,!0))
return!0},
b9:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.aa()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bF(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bF(a,b,!1))
return!0},
ib:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaS()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cc(new V.J(t*s,r*q),u,b)
u.b=!0
o.K(u)
return!0},
gdl:function(){var u=this.b
return u==null?this.b=D.I():u},
gco:function(){var u=this.c
return u==null?this.c=D.I():u},
gdQ:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.cc.prototype={}
X.hQ.prototype={}
X.dK.prototype={}
X.iA.prototype={
b_:function(a,b){var u=this,t=new P.ad(Date.now(),!1),s=a.length>0?a[0]:V.bg(),r=u.a.gaS(),q=new X.dK(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i8:function(a){var u=this.b
if(u==null)return!1
u.K(this.b_(a,!0))
return!0},
i6:function(a){var u=this.c
if(u==null)return!1
u.K(this.b_(a,!0))
return!0},
i7:function(a){var u=this.d
if(u==null)return!1
u.K(this.b_(a,!1))
return!0}}
X.dP.prototype={
gaS:function(){var u=this.a,t=C.i.gdi(u).c
t.toString
u=C.i.gdi(u).d
u.toString
return V.ln(0,0,t,u)},
cM:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.ai(t,a.altKey,a.shiftKey))},
aO:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
bT:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
av:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.I()
u=t.top
if(typeof r!=="number")return r.I()
return new V.aj(s-q,r-u)},
b1:function(a){return new V.J(a.movementX,a.movementY)},
bQ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.aj])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.d.al(r.pageX)
C.d.al(r.pageY)
p=o.left
C.d.al(r.pageX)
n.push(new V.aj(q-p,C.d.al(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.ai(t,a.altKey,a.shiftKey))},
bG:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.I()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.I()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fu:function(a){this.f=!0},
fh:function(a){this.f=!1},
fn:function(a){if(this.f&&this.bG(a))a.preventDefault()},
fA:function(a){var u
if(!this.f)return
u=this.cM(a)
this.b.i9(u)},
fw:function(a){var u
if(!this.f)return
u=this.cM(a)
this.b.i5(u)},
fE:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aO(a)
if(r.x){u=r.at(a)
t=r.b1(a)
if(r.d.cg(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.at(a)
s=r.av(a)
if(r.c.cg(u,s))a.preventDefault()},
fI:function(a){var u,t,s,r=this
r.aO(a)
u=r.at(a)
if(r.x){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b9(u,s))a.preventDefault()},
fs:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aO(a)
u=r.at(a)
if(r.x){t=r.b1(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b9(u,s))a.preventDefault()}},
fG:function(a){var u,t,s,r=this
r.aO(a)
u=r.at(a)
if(r.x){t=r.b1(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b8(u,s))a.preventDefault()},
fp:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aO(a)
u=r.at(a)
if(r.x){t=r.b1(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b8(u,s))a.preventDefault()}},
fK:function(a){var u,t,s=this
s.aO(a)
u=new V.J((a&&C.F).ghy(a),C.F.ghz(a)).w(0,s.Q)
if(s.x){if(s.d.ia(u))a.preventDefault()
return}if(s.r)return
t=s.av(a)
if(s.c.ib(u,t))a.preventDefault()},
fM:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.av(s.y)
s.d.fC(u,t,r)}},
fZ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bT(a)
u=t.bQ(a)
if(t.e.i8(u))a.preventDefault()},
fV:function(a){var u
this.bT(a)
u=this.bQ(a)
if(this.e.i6(u))a.preventDefault()},
fX:function(a){var u
this.bT(a)
u=this.bQ(a)
if(this.e.i7(u))a.preventDefault()}}
D.f3.prototype={$ia8:1}
D.bv.prototype={
as:function(a){var u=this.r
if(u!=null)u.K(a)},
eB:function(){return this.as(null)},
$ia8:1}
D.a8.prototype={}
D.de.prototype={
as:function(a){var u=this.y
if(u!=null)u.K(a)},
cU:function(a){var u=this.z
if(u!=null)u.K(a)},
fB:function(){return this.cU(null)},
fP:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.eS(s))return!1}return!0},
fb:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcT(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bv)this.f.push(q)
p=q.r
if(p==null){p=new D.bx()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bB()
u.b=!0
this.as(u)},
fT:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcT();u.t();){s=u.gC(u)
C.b.Z(this.e,s)
s.gu().Z(0,t)}u=new D.bC()
u.b=!0
this.as(u)},
eS:function(a){var u=C.b.D(this.f,a)
return u},
$ak:function(){return[D.a8]},
$ab7:function(){return[D.a8]}}
D.hP.prototype={$ia8:1}
D.ia.prototype={$ia8:1}
V.Y.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.V.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.fw.prototype={}
V.di.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.L])
return t},
q:function(a,b){var u,t,s=this
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
i:function(a){var u,t,s,r,q=this,p=[P.L],o=V.bV(H.b([q.a,q.d,q.r],p),3,0),n=V.bV(H.b([q.b,q.e,q.x],p),3,0),m=V.bV(H.b([q.c,q.f,q.y],p),3,0)
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
V.aX.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.L])
return t},
dO:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.dj()
u=1/b1
t=-n
s=-a0
return V.aC((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aC(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bb:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aX))return!1
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
i:function(a){return this.O()},
F:function(a){var u,t,s,r,q,p=this,o=[P.L],n=V.bV(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bV(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bV(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bV(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.F("")}}
V.aj.prototype={
I:function(a,b){return new V.aj(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.a4.prototype={
A:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.ds.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ds))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.dv.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.J.prototype={
cb:function(a){return Math.sqrt(this.J(this))},
J:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
if(typeof b!=="number")return H.u(b)
u=this.b
if(typeof u!=="number")return u.w()
return new V.J(t*b,u*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.lz
return u==null?$.lz=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.J(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.D.prototype={
cb:function(a){return Math.sqrt(this.J(this))},
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cc:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b4:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.D(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.C().a)return V.aN()
return new V.D(this.a/b,this.b/b,this.c/b)},
dP:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.fb.prototype={
bA:function(a){var u=V.oY(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.I():u},
R:function(a){var u=this.y
if(u!=null)u.K(a)},
scp:function(a,b){},
scd:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bA(u)}s=new D.A("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
scf:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bA(u)}s=new D.A("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
sab:function(a,b){var u,t=this
b=t.bA(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.A("location",u,b)
u.b=!0
t.R(u)}},
sce:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.A("velocity",t,a)
t.b=!0
u.R(t)}},
sc_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.A("dampening",u,a)
u.b=!0
this.R(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sab(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cZ.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.I():u},
aX:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.c4.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.I():u},
R:function(a){var u=this.e
if(u!=null)u.K(a)},
a8:function(){return this.R(null)},
f9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaJ(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bB()
u.b=!0
this.R(u)},
fR:function(a,b){var u,t
for(u=b.gS(b),t=this.gaJ();u.t();)u.gC(u).gu().Z(0,t)
u=new D.bC()
u.b=!0
this.R(u)},
aX:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.N()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a7(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aX(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.dj():u
r=s.e
if(r!=null)r.aE(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.G(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.ae]},
$ab7:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dQ.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.I():u},
R:function(a){var u=this.cy
if(u!=null)u.K(a)},
a8:function(){return this.R(null)},
b3:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdl().n(0,u.gbH())
u.a.c.gdQ().n(0,u.gbJ())
u.a.c.gco().n(0,u.gbL())
return!0},
bI:function(a){var u=this
if(!J.G(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bK:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaY")
if(!n.y)return
if(n.x){u=a.d.I(0,a.y)
u=new V.J(u.a,u.b)
u=u.J(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.I(0,a.y)
u=new V.J(t.a,t.b).w(0,2).B(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.J(s.a,s.b).w(0,2).B(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
n.b.sW(0)
t=t.I(0,a.z)
n.Q=new V.J(t.a,t.b).w(0,2).B(0,u.gac())}n.a8()},
bM:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.J(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sW(t*10*s)
r.a8()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.N()
if(q<p){r.ch=p
u=b.y
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aC(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iae:1}
U.dR.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.I():u},
R:function(a){var u=this.fx
if(u!=null)u.K(a)},
a8:function(){return this.R(null)},
b3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdl().n(0,s.gbH())
s.a.c.gdQ().n(0,s.gbJ())
s.a.c.gco().n(0,s.gbL())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.n(0,s.gf_())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.gf1())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.n(0,s.ghi())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.ghg())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.n(0,s.ghe())
return!0},
ao:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.J(u,t)},
bI:function(a){var u=this
H.i(a,"$iaY")
if(!J.G(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bK:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaY")
if(!n.cx)return
if(n.ch){u=a.d.I(0,a.y)
u=new V.J(u.a,u.b)
u=u.J(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.I(0,a.y)
u=n.ao(new V.J(t.a,t.b).w(0,2).B(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.ao(new V.J(s.a,s.b).w(0,2).B(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sab(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.I(0,a.z)
n.dx=n.ao(new V.J(t.a,t.b).w(0,2).B(0,u.gac()))}n.a8()},
bM:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.J(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sW(-t*10*u)
r.a8()}},
f0:function(a){var u=this
if(H.i(a,"$idg").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f2:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaY")
if(!J.G(n.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=n.ao(new V.J(s.a,s.b).w(0,2).B(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sab(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.I(0,a.z)
n.dx=n.ao(new V.J(t.a,t.b).w(0,2).B(0,u.gac()))
n.a8()},
hj:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hh:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$idK")
if(!n.cx)return
if(n.ch){u=a.d.I(0,a.y)
u=new V.J(u.a,u.b)
u=u.J(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.I(0,a.y)
u=n.ao(new V.J(t.a,t.b).w(0,2).B(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.ao(new V.J(s.a,s.b).w(0,2).B(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sab(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.I(0,a.z)
n.dx=n.ao(new V.J(t.a,t.b).w(0,2).B(0,u.gac()))}n.a8()},
hf:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.J(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sW(-t*10*u)
r.a8()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.N()
if(q<p){r.dy=p
u=b.y
r.c.am(0,u)
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aC(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.aC(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iae:1}
U.dS.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.I():u},
R:function(a){var u=this.r
if(u!=null)u.K(a)},
b3:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.gf4()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).n(0,t)
return!0},
f5:function(a){var u,t,s,r,q=this
if(!J.G(q.b,q.a.b.c))return
H.i(a,"$icc")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.A("zoom",u,r)
u.b=!0
q.R(u)}},
aX:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aC(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iae:1}
M.d3.prototype={
aL:function(a){var u=this.y
if(u!=null)u.K(a)},
eC:function(){return this.aL(null)},
fj:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaK(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bB()
u.b=!0
this.aL(u)},
fl:function(a,b){var u,t
for(u=b.gS(b),t=this.gaK();u.t();)u.gC(u).gu().Z(0,t)
u=new D.bC()
u.b=!0
this.aL(u)},
gu:function(){var u=this.y
return u==null?this.y=D.I():u},
aC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.e5(f.d)
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
if(typeof s!=="number")return H.u(s)
o=C.d.al(p*s)
p=q.b
if(typeof r!=="number")return H.u(r)
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
i=V.aC(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e4(i)
t=$.lh
if(t==null){t=V.le(V.lj(),V.kH(),V.lD())
$.lh=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.w(0,h)}a.db.e4(h)
for(u=f.e.a,u=new J.a7(u,u.length);u.t();)u.d.am(0,a)
for(u=f.e.a,u=new J.a7(u,u.length);u.t();)u.d.aC(a)
f.b.toString
a.cy.ci()
a.db.ci()
f.c.toString
a.e2()}}
A.cS.prototype={}
A.eZ.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gan:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.a_))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fN.prototype={}
A.hf.prototype={
eu:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.S("")
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
A.of(c0,u)
A.oh(c0,u)
A.og(c0,u)
A.oj(c0,u)
A.ok(c0,u)
A.oi(c0,u)
A.ol(c0,u)
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
b5.dL(0,s.charCodeAt(0)==0?s:s,A.oe(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.i(b5.y.L(0,"invViewMat"),"$ia0")
if(t)b5.dy=H.i(b5.y.L(0,"objMat"),"$ia0")
if(r)b5.fr=H.i(b5.y.L(0,"viewObjMat"),"$ia0")
b5.fy=H.i(b5.y.L(0,"projViewObjMat"),"$ia0")
if(c0.go)b5.fx=H.i(b5.y.L(0,"viewMat"),"$ia0")
if(c0.x1)b5.k1=H.i(b5.y.L(0,"txt2DMat"),"$icq")
if(c0.x2)b5.k2=H.i(b5.y.L(0,"txtCubeMat"),"$ia0")
if(c0.y1)b5.k3=H.i(b5.y.L(0,"colorMat"),"$ia0")
b5.r1=H.b([],[A.a0])
t=c0.aV
if(t>0){b5.k4=b5.y.L(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.m(P.p(b7+q+b8))
s.push(H.i(m,"$ia0"))}}t=c0.a
if(t.a)b5.r2=H.i(b5.y.L(0,"emissionClr"),"$iE")
if(t.b)b5.rx=H.i(b5.y.L(0,"emissionTxt"),"$ia1")
t=c0.b
if(t.a)b5.x1=H.i(b5.y.L(0,"ambientClr"),"$iE")
if(t.b)b5.x2=H.i(b5.y.L(0,"ambientTxt"),"$ia1")
t=c0.c
if(t.a)b5.y2=H.i(b5.y.L(0,"diffuseClr"),"$iE")
if(t.b)b5.aV=H.i(b5.y.L(0,"diffuseTxt"),"$ia1")
t=c0.d
if(t.a)b5.bm=H.i(b5.y.L(0,"invDiffuseClr"),"$iE")
if(t.b)b5.dn=H.i(b5.y.L(0,"invDiffuseTxt"),"$ia1")
t=c0.e
s=t.a
if(s||t.b||!1){b5.ds=H.i(b5.y.L(0,"shininess"),"$iU")
if(s)b5.dq=H.i(b5.y.L(0,"specularClr"),"$iE")
if(t.b)b5.dr=H.i(b5.y.L(0,"specularTxt"),"$ia1")}if(c0.f.b)b5.dt=H.i(b5.y.L(0,"bumpTxt"),"$ia1")
if(c0.db){b5.du=H.i(b5.y.L(0,"envSampler"),"$ibL")
t=c0.r
if(t.a)b5.dv=H.i(b5.y.L(0,"reflectClr"),"$iE")
if(t.b)b5.dw=H.i(b5.y.L(0,"reflectTxt"),"$ia1")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dz=H.i(b5.y.L(0,"refraction"),"$iU")
if(s)b5.dA=H.i(b5.y.L(0,"refractClr"),"$iE")
if(t.b)b5.dB=H.i(b5.y.L(0,"refractTxt"),"$ia1")}}t=c0.y
if(t.a)b5.dC=H.i(b5.y.L(0,"alpha"),"$iU")
if(t.b)b5.dD=H.i(b5.y.L(0,"alphaTxt"),"$ia1")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.c0=new H.F([r,A.bi])
b5.c1=new H.F([r,[P.q,A.co]])
for(r=[A.co],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
H.i(m,"$iE")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.m(P.p(b7+o+b8))
H.i(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.i(f,"$iE")
if(typeof j!=="number")return j.aa()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.i(e,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.i(d,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.m(P.p(b7+o+b8))
H.i(c,"$iU")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.co(m,g,f,a0,a,b))}b5.c1.m(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.c2=new H.F([r,A.bi])
b5.c3=new H.F([r,[P.q,A.cp]])
for(r=[A.cp],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aa()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.m(P.p(b7+a1+b8))
H.i(m,"$iE")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.m(P.p(b7+a1+b8))
H.i(g,"$iE")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.m(P.p(b7+a1+b8))
H.i(f,"$iE")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.m(P.p(b7+a1+b8))
H.i(m,"$iE")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.m(P.p(b7+a1+b8))
H.i(g,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.i(f,"$ia1")
a5=f}else a5=b6
h.push(new A.cp(a4,a3,a2,m,g,a5))}b5.c3.m(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.c4=new H.F([r,A.bi])
b5.c5=new H.F([r,[P.q,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
H.i(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.m(P.p(b7+o+b8))
H.i(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.i(f,"$iE")
if(typeof j!=="number")return j.aa()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.i(e,"$icq")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.i(e,"$ibL")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.i(e,"$ibL")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.i(d,"$ibj")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.i(e,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.i(d,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.m(P.p(b7+o+b8))
H.i(c,"$iU")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cr(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.c5.m(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.c6=new H.F([r,A.bi])
b5.c7=new H.F([r,[P.q,A.cs]])
for(r=[A.cs],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
H.i(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.m(P.p(b7+o+b8))
H.i(g,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.i(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.i(e,"$iE")
if(typeof j!=="number")return j.aa()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.i(d,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.m(P.p(b7+o+b8))
H.i(c,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.m(P.p(b7+o+b8))
H.i(a9,"$iU")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.m(P.p(b7+o+b8))
H.i(b0,"$iU")
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
H.i(d,"$ibj")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.m(P.p(b7+a1+b8))
H.i(d,"$iU")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.m(P.p(b7+a1+b8))
H.i(c,"$iU")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.m(P.p(b7+a1+b8))
H.i(d,"$iU")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.m(P.p(b7+a1+b8))
H.i(c,"$iU")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.m(P.p(b7+a1+b8))
H.i(a9,"$iU")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.m(P.p(b7+a1+b8))
H.i(d,"$ia1")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.i(d,"$ia1")
a7=d}else a7=b6
h.push(new A.cs(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.c7.m(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.m(0,j,m)}}}},
aj:function(a,b){if(b!=null&&b.d)a.ej(b)},
h9:function(a,b){}}
A.cT.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dt.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dz.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hi.prototype={
i:function(a){return this.b5}}
A.co.prototype={}
A.cp.prototype={}
A.cr.prototype={}
A.cs.prototype={}
A.dx.prototype={
cz:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dL:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cN(b,35633)
r.f=r.cN(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.m(P.p("Failed to link shader: "+H.e(s)))}r.ha()
r.hc()},
ax:function(a){a.a.useProgram(this.r)
this.x.hF()},
cN:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.p("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
ha:function(){var u,t,s,r=this,q=H.b([],[A.cS]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cS(p,t.name,s))}r.x=new A.eZ(q)},
hc:function(){var u,t,s,r=this,q=H.b([],[A.dM]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hx(t.type,t.size,t.name,s))}r.y=new A.iL(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.bi(u,b,c)
else return A.kE(u,this.r,b,a,c)},
eV:function(a,b,c){var u=this.a
if(a===1)return new A.a1(u,b,c)
else return A.kE(u,this.r,b,a,c)},
eW:function(a,b,c){var u=this.a
if(a===1)return new A.bL(u,b,c)
else return A.kE(u,this.r,b,a,c)},
bj:function(a,b){return new P.e3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hx:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.iH(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.bj(u.a,c,d)
case 35667:return new A.iI(u.a,c,d)
case 35668:return new A.iJ(u.a,c,d)
case 35669:return new A.iK(u.a,c,d)
case 35674:return new A.iM(u.a,c,d)
case 35675:return new A.cq(u.a,c,d)
case 35676:return new A.a0(u.a,c,d)
case 35678:return u.eV(b,c,d)
case 35680:return u.eW(b,c,d)
case 35670:throw H.c(u.bj("BOOL",c))
case 35671:throw H.c(u.bj("BOOL_VEC2",c))
case 35672:throw H.c(u.bj("BOOL_VEC3",c))
case 35673:throw H.c(u.bj("BOOL_VEC4",c))
default:throw H.c(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dM.prototype={}
A.iL.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bi.prototype={
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
A.E.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bj.prototype={
bd:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cq.prototype={
a5:function(a){var u=new Float32Array(H.bR(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a0.prototype={
a5:function(a){var u=new Float32Array(H.bR(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a1.prototype={
ej:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bL.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jX.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cc(s.b,b).cc(s.d.cc(s.c,b),c)
s=new V.a4(r.a,r.b,r.c)
if(!J.G(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.siq(r.B(0,Math.sqrt(r.J(r))))
s=1-b
u=1-c
u=new V.ds(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.G(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}}}
F.by.prototype={
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.aN()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dP())return
return s.B(0,Math.sqrt(s.J(s)))},
eQ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.I(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.J(r)))
r=t.I(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.b4(r.B(0,Math.sqrt(r.J(r))))
return r.B(0,Math.sqrt(r.J(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.eK()
if(u==null){u=t.eQ()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.aN()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dP())return
return s.B(0,Math.sqrt(s.J(s)))},
eP:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.I(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.J(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.I(0,g)
l=new V.a4(l.a*p,l.b*p,l.c*p).A(0,g).I(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.J(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.J(l)))
l=o.b4(q)
l=l.B(0,Math.sqrt(l.J(l))).b4(o)
q=l.B(0,Math.sqrt(l.J(l)))}return q},
bU:function(){var u,t=this
if(t.e!=null)return!0
u=t.eJ()
if(u==null){u=t.eP()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.ai(J.a6(s.e),0)+", "+C.a.ai(J.a6(t.b.e),0)+", "+C.a.ai(J.a6(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
O:function(){return this.F("")}}
F.bE.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.ai(J.a6(u.e),0)+", "+C.a.ai(J.a6(this.b.e),0)},
O:function(){return this.F("")}}
F.cg.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ai(J.a6(u.e),0)},
O:function(){return this.F("")}}
F.ak.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.I():u},
hW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.n(0,r.aU())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
F.n_(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mQ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.d4(l,k,i)}g=h.e
if(g!=null)g.aE(0)},
az:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.az()||!1
if(!t.a.az())u=!1
s=t.e
if(s!=null)s.aE(0)
return u},
aR:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aR()||!1
if(!t.a.aR())u=!1
s=t.e
if(s!=null)s.aE(0)
return u},
bk:function(){var u=this.e
if(u!=null)++u.d
this.a.bk()
u=this.e
if(u!=null)u.aE(0)
return!0},
dh:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aw()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.av().a)!==0)++s
if((t&$.au().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a4.gct(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.L])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cU])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hq(m)
k=l.gct(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cU(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hU(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bR(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bt(new Z.dT(a1,d),o,a4)
c.b=H.b([],[Z.bA])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)}a=Z.kJ(u,34963,b)
c.b.push(new Z.bA(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)}a=Z.kJ(u,34963,b)
c.b.push(new Z.bA(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.U()
b.push(t.e)}a=Z.kJ(u,34963,b)
c.b.push(new Z.bA(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.F(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.F(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.F(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.F(t))}return C.b.j(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.K(null)}}
F.i1.prototype={
ho:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.by])
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
h.push(F.d4(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.d4(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.d4(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.d4(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
az:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bV())s=!1
return s},
aR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bU())s=!1
return s},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(a))
return C.b.j(r,"\n")},
O:function(){return this.F("")}}
F.i2.prototype={
aw:function(a,b,c){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t=new F.bE()
if(b==null)H.m(P.p("May not create a line with a null start vertex."))
if(c==null)H.m(P.p("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.m(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.m(P.p("May not create a line with vertices attached to different shapes."))
t.a=b
b.c.b.push(t)
t.b=c
c.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.Y()
return t},
gl:function(a){return this.b.length},
i:function(a){return this.O()},
F:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.j(s,"\n")},
O:function(){return this.F("")}}
F.i3.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
F:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(a))
return C.b.j(r,"\n")},
O:function(){return this.F("")}}
F.ct.prototype={
bZ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kI(u.cx,r,o,t,s,q,p,a,n)},
aU:function(){return this.bZ(null)},
sdR:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.J(a)))
if(!J.G(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
say:function(a){var u
a=a==null?null:a.B(0,Math.sqrt(a.J(a)))
if(!J.G(this.x,a)){this.x=a
u=this.a
if(u!=null)u.Y()}},
siq:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sa9:function(a,b){var u
if(!J.G(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.Y()}},
hU:function(a){var u,t,s=this
if(a.q(0,$.aw())){u=s.f
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.av())){u=s.r
t=[P.L]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.au())){u=s.x
t=[P.L]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.b5())){u=s.y
t=[P.L]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bo())){u=s.z
t=[P.L]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bn())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cO())){u=s.Q
t=[P.L]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bX()))return H.b([s.ch],[P.L])
else if(a.q(0,$.b4())){u=s.cx
t=[P.L]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.L])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.aN()
t.d.v(0,new F.ja(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aE(0)}return!0},
bU:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.aN()
t.d.v(0,new F.j9(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aE(0)}return!0},
dE:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.b
t.a.a.U()
t=t.e
a.a.a.U()
if(t==a.e)return s}return},
hJ:function(a){var u=this.dE(a)
if(u!=null)return u
return a.dE(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
F:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ai(J.a6(s.e),0))
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
q.push(V.K(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
O:function(){return this.F("")}}
F.ja.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.j9.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.j3.prototype={
U:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.p("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
d6:function(a,b){var u=null,t=F.kI(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
d7:function(a,b,c){var u=null,t=F.kI(u,u,u,new V.a4(a,b,c),u,u,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
az:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bV()
return!0},
aR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bU()
return!0},
bk:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
F:function(a){var u,t,s,r
this.U()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].F(a))
return C.b.j(u,"\n")},
O:function(){return this.F("")}}
F.j4.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
v:function(a,b){var u=this
C.b.v(u.b,b)
C.b.v(u.c,new F.j5(u,b))
C.b.v(u.d,new F.j6(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(""))
return C.b.j(r,"\n")}}
F.j5.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.j6.prototype={
$1:function(a){var u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)}}
F.j7.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(""))
return C.b.j(r,"\n")}}
F.j8.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].F(""))
return C.b.j(r,"\n")}}
O.d8.prototype={
gu:function(){var u=this.rx
return u==null?this.rx=D.I():u},
V:function(a){var u=this.rx
if(u!=null)u.K(a)},
am:function(a,b){},
e6:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.fN(t,n)
u.cz(t,n)
u.dL(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.h(0,"posAttr")
u.Q=u.x.h(0,"normAttr")
u.ch=u.x.h(0,"clrAttr")
u.cx=u.x.h(0,"binmAttr")
u.cy=H.i(u.y.h(0,"lightVec"),"$iE")
u.db=H.i(u.y.h(0,"ambientClr"),"$ibj")
u.dx=H.i(u.y.h(0,"diffuseClr"),"$ibj")
u.dy=H.i(u.y.h(0,"weightScalar"),"$iU")
u.fr=H.i(u.y.h(0,"viewMat"),"$ia0")
u.fx=H.i(u.y.h(0,"viewObjMatrix"),"$ia0")
u.fy=H.i(u.y.h(0,"projViewObjMatrix"),"$ia0")
a.d9(u)}o.a=u}if(b.e==null){b.d.az()
b.d.aR()
b.d.bk()
t=new Z.cV()
t.a=new H.F([P.h,Z.bt])
b.e=t}t=o.a
t.ax(a)
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
s=s.ga_(s)
p=t.fr
p.toString
p.a5(s.a2(0,!0))
s=a.gee()
p=t.fx
p.toString
p.a5(s.a2(0,!0))
s=a.ge3()
t=t.fy
t.toString
t.a5(s.a2(0,!0))
t=b.e
if(t instanceof Z.cV){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.h1(a,t,b.d,"Axis",o.gcF(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.bi(a,t,b.c,"wireFrame",o.ghk(),o.f,o.e)
if(o.cy)o.bi(a,t,b.c,"normals",o.gf6(),o.f,o.e)
if(o.db)o.bi(a,t,b.c,"binormals",o.geN(),o.f,o.e)
if(o.k3)o.bi(a,t,b.c,"Axis",o.gcF(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dk()},
bi:function(a,b,c,d,e,f,g){var u,t=b.a.h(0,d)
if(t==null){t=this.cG(a,e.$1(c))
b.a.m(0,d,t)}u=this.a
u.db.bd(f)
u.dx.bd(g)
t.e_(a)},
h1:function(a,b,c,d,e,f,g){var u,t=b.a.h(0,d)
if(t==null){t=this.cG(a,e.$1(c))
b.a.m(0,d,t)}u=this.a
u.db.bd(f)
u.dx.bd(g)
t.e_(a)},
cG:function(a,b){var u=this,t=$.aw(),s=$.av(),r=b.dh(new Z.dU(a.a),new Z.aO(t.a|s.a|$.au().a|$.bn().a))
r.ag($.aw()).e=u.a.z.c
r.ag($.av()).e=u.a.Q.c
r.ag($.bn()).e=u.a.ch.c
r.ag($.au()).e=u.a.cx.c
return r},
d3:function(a,b){var u,t={}
t.a=b
u=F.ck()
t.a=new V.V(0,0.7,1,1)
C.b.v(a.a.c,new O.fS(t,u))
t=new O.fR(u)
C.b.v(a.c.b,new O.fT(u,t))
C.b.v(a.d.b,new O.fU(u,t))
return u},
hl:function(a){return this.d3(a,null)},
f7:function(a){var u=F.ck()
C.b.v(a.a.c,new O.fQ(new V.V(1,1,0.3,1),u))
return u},
eO:function(a){var u=F.ck()
C.b.v(a.a.c,new O.fP(new V.V(1,0.3,0.3,1),u))
return u},
eL:function(a){return this.eM(a)},
eM:function(a){var u=F.ck(),t=new O.fO(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u}}
O.fS.prototype={
$1:function(a){var u=this.b.a,t=a.aU()
t.sa9(0,this.a.a)
t.say(V.aN())
u.n(0,t)}}
O.fR.prototype={
$2:function(a,b){if(a.hJ(b)==null)this.a.c.aw(0,a,b)}}
O.fT.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.U()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.d(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.U()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.d(t,r)
this.b.$2(u,t[r])}}
O.fU.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.U()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.d(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.U()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.d(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.U()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.d(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.fQ.prototype={
$1:function(a){var u,t,s=a.aU()
s.sa9(0,this.a)
s.say(V.aN())
u=s.aU()
u.say(s.r)
t=this.b
t.a.n(0,s)
t.a.n(0,u)
t.c.aw(0,s,u)}}
O.fP.prototype={
$1:function(a){var u,t,s=a.aU()
s.sa9(0,this.a)
s.say(V.aN())
u=s.aU()
u.say(a.x)
t=this.b
t.a.n(0,s)
t.a.n(0,u)
t.c.aw(0,s,u)}}
O.fO.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.V(s,r,q,1)
s=this.a
u=s.a.d7(0,0,0)
u.say(V.aN())
u.sdR(V.lE())
u.sa9(0,p)
t=s.a.d7(a,b,c)
t.say(V.aN())
t.sdR(V.lE())
t.sa9(0,p)
s.c.aw(0,u,t)}}
O.dh.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.I():u},
V:function(a){var u=this.fr
if(u!=null)u.K(a)},
bP:function(){return this.V(null)},
cV:function(a){this.a=null
this.V(a)},
h5:function(){return this.cV(null)},
fd:function(a,b){var u=new D.bB()
u.b=!0
this.V(u)},
ff:function(a,b){var u=new D.bC()
u.b=!0
this.V(u)},
cL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.F(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gaq()
o=u.h(0,q.gaq())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cT])
u.v(0,new O.hm(g,n))
C.b.aZ(n,new O.hn())
m=new H.F(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d0])
m.v(0,new O.ho(g,l))
C.b.aZ(l,new O.hp())
k=new H.F(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gaq()
o=k.h(0,q.gaq())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dt])
k.v(0,new O.hq(g,j))
C.b.aZ(j,new O.hr())
i=new H.F(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.gaq()
p=i.h(0,q.gaq())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dz])
i.v(0,new O.hs(g,h))
C.b.aZ(h,new O.ht())
f=C.c.a4(g.e.a.length+3,4)
g.dy.e
return A.mY(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ad:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
am:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a7(u,u.length);u.t();){t=u.d
t.toString
s=$.j2
if(s==null)s=$.j2=new V.D(0,0,1)
t.a=s
r=$.j1
t.d=r==null?$.j1=new V.D(0,1,0):r
r=$.j0
t.e=r==null?$.j0=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bt(s)
r=s.a
p=s.b
o=s.c
t.a=s.B(0,Math.sqrt(r*r+p*p+o*o))
o=q.bt(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.B(0,Math.sqrt(p*p+r*r+s*s))
s=q.bt(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.B(0,Math.sqrt(r*r+p*p+o*o))}}}},
e6:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cL()
u=b2.fr.h(0,b1.b5)
if(u==null){u=A.mX(b1,b2.a)
b2.d9(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bm
b1=b3.e
if(!(b1 instanceof Z.bt))b1=b3.e=null
if(b1==null||!b1.d.q(0,s)){b1=t.k4
if(b1)b3.d.az()
r=t.r1
if(r)b3.d.aR()
q=t.rx
if(q)b3.d.bk()
p=b3.d.dh(new Z.dU(b2.a),s)
p.ag($.aw()).e=b0.a.Q.c
if(b1)p.ag($.av()).e=b0.a.cx.c
if(r)p.ag($.au()).e=b0.a.ch.c
if(t.r2)p.ag($.b5()).e=b0.a.cy.c
if(q)p.ag($.bo()).e=b0.a.db.c
if(t.ry)p.ag($.b4()).e=b0.a.dx.c
b3.e=p}o=H.b([],[T.dF])
b0.a.ax(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga_(r)
b1=b1.dy
b1.toString
b1.a5(r.a2(0,!0))}if(t.fx){b1=b0.a
r=b2.gee()
b1=b1.fr
b1.toString
b1.a5(r.a2(0,!0))}b1=b0.a
r=b2.ge3()
b1=b1.fy
b1.toString
b1.a5(r.a2(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga_(r)
b1=b1.fx
b1.toString
b1.a5(r.a2(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a5(C.j.a2(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a5(C.j.a2(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a5(C.j.a2(r,!0))}if(t.aV>0){n=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,n)
for(m=0;m<n;++m){b1=b0.a
r=b0.e.a
if(m>=r.length)return H.d(r,m)
r=r[m]
b1=b1.r1
if(m>=b1.length)return H.d(b1,m)
b1=b1[m]
l=new Float32Array(H.bR(r.a2(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,l)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.f.d)
b1=b0.a
r=b0.f.d
b1.aj(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.r.d)
b1=b0.a
r=b0.r.d
b1.aj(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.x.d)
b1=b0.a
r=b0.x.d
b1.aj(b1.aV,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bm
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.y.d)
b1=b0.a
r=b0.y.d
b1.aj(b1.dn,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
k=b0.z.ch
q=q.ds
q.a.uniform1f(q.d,k)}if(r){r=b0.a
q=b0.z.f
r=r.dq
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.z.d)
b1=b0.a
r=b0.z.d
b1.aj(b1.dr,r)}b1=t.z
if(b1.length>0){r=P.w
j=new H.F([r,r])
for(r=b0.dx.e,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
g=h.gaq()
f=j.h(0,g)
if(f==null)f=0
j.m(0,g,f+1)
e=J.bY(b0.a.c1.h(0,g),f)
k=h.giA()
d=$.aG
k=k.bb(d==null?$.aG=new V.a4(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.giF()
d=$.aG
k=k.bb(d==null?$.aG=new V.a4(0,0,0):d)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.ga9(h)
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
if(h.gdm()){k=h.gdc()
d=e.e
d.a.uniform1f(d.d,k)
k=h.gdd()
d=e.f
d.a.uniform1f(d.d,k)
k=h.gde()
d=e.r
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=j.h(0,q)
if(n==null)n=0
q=b0.a.c0.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga_(r)
r=P.w
b=new H.F([r,r])
for(r=b0.dx.f,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
f=b.h(0,0)
if(f==null)f=0
b.m(0,0,f+1)
e=J.bY(b0.a.c3.h(0,0),f)
k=c.bt(h.a)
d=k.a
a=k.b
a0=k.c
a0=k.B(0,Math.sqrt(d*d+a*a+a0*a0))
a=e.e
d=a0.a
k=a0.b
a0=a0.c
a.a.uniform3f(a.d,d,k,a0)
a0=h.c
k=e.f
k.a.uniform3f(k.d,a0.a,a0.b,a0.c)}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=b.h(0,q)
if(n==null)n=0
q=b0.a.c2.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga_(r)
r=P.w
a1=new H.F([r,r])
for(r=b0.dx.r,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
g=h.gaq()
f=a1.h(0,g)
if(f==null)f=0
a1.m(0,g,f+1)
e=J.bY(b0.a.c5.h(0,g),f)
a2=c.w(0,h.ga_(h))
k=h.ga_(h)
d=$.aG
k=k.bb(d==null?$.aG=new V.a4(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=$.aG
k=a2.bb(k==null?$.aG=new V.a4(0,0,0):k)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.ga9(h)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
h.gaF()
k=a2.dO(0)
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
l=new Float32Array(H.bR(new V.di(d,a,a0,a3,a4,a5,a6,a7,k).a2(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,l)
h.gaF()
k=h.gaF()
if(!C.b.D(o,k)){k.a=o.length
o.push(k)}k=h.gaF()
d=k.gb6(k)
if(d){d=e.f
d.toString
a=k.gb6(k)
if(!a)d.a.uniform1i(d.d,0)
else{k=k.ghP(k)
d.a.uniform1i(d.d,k)}}h.gaY()
k=h.gek()
d=e.x
d.toString
a=k.ghB(k)
a0=k.ghC(k)
a3=k.ghD()
k=k.ghA()
d.a.uniform4f(d.d,a,a0,a3,k)
k=h.gaY()
if(!C.b.D(o,k)){k.a=o.length
o.push(k)}k=h.gaY()
d=k.gb6(k)
if(d){d=e.r
d.toString
a=k.gb6(k)
if(!a)d.a.uniform1i(d.d,0)
else{k=k.ghP(k)
d.a.uniform1i(d.d,k)}}if(h.gdm()){k=h.gdc()
d=e.y
d.a.uniform1f(d.d,k)
k=h.gdd()
d=e.z
d.a.uniform1f(d.d,k)
k=h.gde()
d=e.Q
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=a1.h(0,q)
if(n==null)n=0
q=b0.a.c4.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga_(r)
r=P.w
a9=new H.F([r,r])
for(r=b0.dx.x,q=r.length,i=0;i<r.length;r.length===q||(0,H.n)(r),++i){h=r[i]
g=h.gaq()
f=a9.h(0,g)
if(f==null)f=0
a9.m(0,g,f+1)
e=J.bY(b0.a.c7.h(0,g),f)
k=h.gic(h)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.giD(h).iQ()
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=c.bb(h.gic(h))
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.ga9(h)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
h.gaF()
k=h.gco()
d=e.f
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gcl(h)
d=e.r
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.giR()
d=e.x
d.a.uniform1f(d.d,k)
k=h.giS()
d=e.y
d.a.uniform1f(d.d,k)
h.gaF()
k=h.gaF()
if(!C.b.D(o,k)){k.a=o.length
o.push(k)}k=h.gaF()
d=k.gb6(k)
if(d){d=e.dx
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}h.gaY()
k=h.gek()
d=e.z
d.toString
a=k.ghB(k)
a0=k.ghC(k)
a3=k.ghD()
k=k.ghA()
d.a.uniform4f(d.d,a,a0,a3,k)
k=h.gaY()
if(!C.b.D(o,k)){k.a=o.length
o.push(k)}k=h.gaY()
d=k.gb6(k)
if(d){d=e.dy
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(h.giE()){k=h.giC()
d=e.Q
d.a.uniform1f(d.d,k)
k=h.giB()
d=e.ch
d.a.uniform1f(d.d,k)}if(h.gdm()){k=h.gdc()
d=e.cx
d.a.uniform1f(d.d,k)
k=h.gdd()
d=e.cy
d.a.uniform1f(d.d,k)
k=h.gde()
d=e.db
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.n)(b1),++i){q=b1[i].a
n=a9.h(0,q)
if(n==null)n=0
q=b0.a.c6.h(0,q)
q.a.uniform1i(q.d,n)}}}if(t.f.b){b0.ad(o,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.aj(b1.dt,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga_(r).dO(0)}b1=b1.id
b1.toString
b1.a5(r.a2(0,!0))}if(t.db){b0.ad(o,b0.ch)
b1=b0.a
r=b0.ch
b1.h9(b1.du,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dv
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.aj(b1.dw,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
k=b0.cy.ch
q=q.dz
q.a.uniform1f(q.d,k)}if(r){r=b0.a
q=b0.cy.f
r=r.dA
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ad(o,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.aj(b1.dB,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
k=b0.db.f
r=r.dC
r.a.uniform1f(r.d,k)}if(b1.b){b0.ad(o,b0.db.d)
r=b0.a
k=b0.db.d
r.aj(r.dD,k)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,m=0;m<o.length;++m){k=o[m]
if(!k.c&&k.d){k.c=!0
r.activeTexture(33984+k.a)
r.bindTexture(3553,k.b)}}k=H.i(b3.e,"$ibt")
k.ax(b2)
k.aC(b2)
k.eb(b2)
if(!q||b1.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b1=o[m]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(3553,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.dk()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cL().b5}}
O.hm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cT(a,C.c.a4(b+3,4)*4))}}
O.hn.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.ho.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.d0(a,C.c.a4(b+3,4)*4))}}
O.hp.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dt(a,C.c.a4(b+3,4)*4))}}
O.hr.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dz(a,C.c.a4(b+3,4)*4))}}
O.ht.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hg.prototype={
au:function(){var u,t=this
t.cv()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.A(t.b,u,1)
u.b=!0
t.a.V(u)}}}
O.c9.prototype={
V:function(a){return this.a.V(a)},
bP:function(){return this.V(null)},
au:function(){},
bR:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.au()
u=s.a
u.a=null
u.V(null)}}}
O.hh.prototype={}
O.aB.prototype={
cX:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a)
t.b=!0
s.a.V(t)}},
au:function(){this.cv()
this.cX(new V.Y(1,1,1))},
sa9:function(a,b){this.bR(new A.a_(!0,this.c.b,!1))
this.cX(b)}}
O.hj.prototype={}
O.hk.prototype={
au:function(){var u,t=this
t.cw()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.A(t.b+".refraction",u,1)
u.b=!0
t.a.V(u)}}}
O.hl.prototype={
cY:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a)
t.b=!0
u.a.V(t)}},
au:function(){this.cw()
this.cY(100)}}
O.dE.prototype={}
T.dF.prototype={}
T.ip.prototype={}
T.it.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.I():u}}
T.iu.prototype={
hV:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lb(a)
t=new T.it()
t.a=0
t.b=q
t.d=t.c=!1
W.X(u,"load",new T.iv(this,t,u,!1,q,!1,!1),!1)
return t},
h6:function(a,b,c){var u,t,s,r
b=V.kW(b)
u=V.kW(a.width)
t=V.kW(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ko()
s.width=u
s.height=t
r=C.i.eg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oz(r.getImageData(0,0,s.width,s.height))}}}
T.iv.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.h6(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.a5.ip(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hE()}++s.e}}
X.kn.prototype={}
X.fF.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.I():u}}
X.dr.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.I():u},
aM:function(a){var u=this.f
if(u!=null)u.K(a)},
eG:function(){return this.aM(null)},
sb7:function(a){var u,t,s=this
if(!J.G(s.b,a)){u=s.b
if(u!=null)u.gu().Z(0,s.gcD())
t=s.b
s.b=a
if(a!=null)a.gu().n(0,s.gcD())
u=new D.A("mover",t,s.b)
u.b=!0
s.aM(u)}}}
X.ik.prototype={}
V.cX.prototype={
bf:function(a){this.b=new P.fK(C.U)
this.c=null
this.d=H.b([],[[P.q,W.ao]])},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ao]))
u=a.split("\n")
for(l=u.length,t=[W.ao],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eU(q,0,q.length)
n=o==null?q:o
C.S.ei(p,H.kY(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gar(m.d).push(p)}},
e0:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.q,W.ao]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bl()
for(t.toString,s=new H.o(u),s=new P.bO(t.cn(new H.bc(s,s.gl(s))).a());s.t();)r.br(s.gC(s))}}
V.kg.prototype={
$1:function(a){var u=C.d.ea(this.a.ghO(),2)
if(u!=="0.00")P.kX(u+" fps")}}
V.fl.prototype={
br:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bl:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iz()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.v(new H.o("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.v(new H.o("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.v(new H.o("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.v(new H.o(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.v(new H.o(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.v(new H.o('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.v(new H.o('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.v(new H.o("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.v(new H.o('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aS())
t=a1.k(0,r).j(0,h)
u=K.v(new H.o("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.v(new H.o("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.v(new H.o("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.v(new H.o("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aS())
t=a1.k(0,r).j(0,e)
u=K.v(new H.o("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.v(new H.o("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.v(new H.o("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a9()
s=[K.bd]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.o("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.v(new H.o("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.v(new H.o("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a9()
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.o("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.v(new H.o("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.v(new H.o(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.v(new H.o(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.P("Num")
t=a1.k(0,n)
t.d=t.a.P("Num")
t=a1.k(0,m)
t.d=t.a.P("Symbol")
t=a1.k(0,j)
t.d=t.a.P("String")
t=a1.k(0,g)
t.d=t.a.P("String")
t=a1.k(0,c)
t.d=t.a.P(d)
t=a1.k(0,a0)
t.d=t.a.P(a0)
t=a1.k(0,q)
t=t.d=t.a.P(q)
u=[P.h]
t.aD(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aD(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aD(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fH.prototype={
br:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bl:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iz()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.v(new H.o("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.v(new H.o("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.v(new H.o("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.O("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.O("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.v(new H.o(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.v(new H.o(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.v(new H.o("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.v(new H.o("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aS())
t=e.k(0,j).j(0,i)
u=K.v(new H.o("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a9()
s=[K.bd]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.o("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.v(new H.o("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a9()
u.a=H.b([],s)
t.a.push(u)
t=K.v(new H.o("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.v(new H.o("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.v(new H.o(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.v(new H.o(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.P("Num")
u=e.k(0,n)
u.d=u.a.P("Num")
u=e.k(0,m)
u.d=u.a.P("Symbol")
u=e.k(0,i)
u.d=u.a.P(j)
u=e.k(0,g)
u.d=u.a.P(h)
u=e.k(0,f)
u.d=u.a.P(f)
u=e.k(0,q)
u=u.d=u.a.P(q)
t=[P.h]
u.aD(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aD(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aD(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fI.prototype={
br:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bl:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iz()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.v(new H.o("_"))
u.a.push(t)
t=K.O("a","z")
u.a.push(t)
t=K.O("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.v(new H.o("_"))
t.a.push(u)
u=K.O("0","9")
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.v(new H.o("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.v(new H.o("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.v(new H.o("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.v(new H.o('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.v(new H.o('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.v(new H.o("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.v(new H.o('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aS())
l.k(0,s).j(0,m).a.push(new K.aS())
u=l.k(0,m).j(0,m)
t=new K.a9()
t.a=H.b([],[K.bd])
u.a.push(t)
u=K.v(new H.o('</\\-!>=_"'))
t.a.push(u)
u=K.O("a","z")
t.a.push(u)
u=K.O("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.P("Symbol")
u=l.k(0,n)
u.d=u.a.P("String")
u=l.k(0,r)
t=u.a.P(r)
u.d=t
t.aD(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.P(q)
t=l.k(0,m)
t.d=t.a.P(m)
return l}}
V.hN.prototype={
e0:function(a,b){this.d=H.b([],[[P.q,W.ao]])
this.M(C.b.j(b,"\n"),"#111")},
br:function(a){},
bl:function(){return}}
V.i4.prototype={
ex:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.X(q,"scroll",new V.i6(o),!1)},
d8:function(a){var u,t,s,r,q,p,o,n
this.hb()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hT(a),s.toString,r=new H.o(r),r=new P.bO(s.cn(new H.bc(r,r.gl(r))).a());r.t();){s=r.gC(r)
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
if(H.m3(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eG(C.z,s,C.e,!1)
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
ef:function(a){var u,t,s,r=new V.fl("dart")
r.bf("dart")
u=new V.fH("glsl")
u.bf("glsl")
t=new V.fI("html")
t.bf("html")
s=C.b.hK(H.b([r,u,t],[V.cX]),new V.i7(a))
if(s!=null)return s
r=new V.hN("plain")
r.bf("plain")
return r},
d5:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cK(s).a3(s,"+")){b0[t]=C.a.a7(s,1)
a6.push(1)
u=!0}else if(C.a.a3(s,"-")){b0[t]=C.a.a7(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ef(a8)
r.e0(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eG(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l2()
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
for(a2=C.b.gS(s);a2.t();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hm:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
hb:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.iz()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.v(new H.o("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a9()
r=[K.bd]
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.o("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.v(new H.o("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.v(new H.o("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a9()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.o("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.v(new H.o("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.v(new H.o("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a9()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.o("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.v(new H.o("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.v(new H.o("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.v(new H.o("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.v(new H.o("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.o("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.v(new H.o("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.o("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aS())
s=u.k(0,i).j(0,i)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.o("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.P(p)
s=u.k(0,n)
s.d=s.a.P(o)
s=u.k(0,"CodeEnd")
s.d=s.a.P(m)
s=u.k(0,j)
s.d=s.a.P("Link")
s=u.k(0,i)
s.d=s.a.P(i)
this.b=u}}
V.i6.prototype={
$1:function(a){P.ls(C.n,new V.i5(this.a))}}
V.i5.prototype={
$0:function(){var u=C.d.al(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i7.prototype={
$1:function(a){return a.a===this.a}}
V.iq.prototype={
aw:function(a,b,c){var u,t,s,r,q=this,p=W.lb(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.eV(q.c)
t=u.gl(u)
W.X(p,"click",new V.is(q,p,b,t),!1)
J.eV(q.c).n(0,p)
J.eV(q.c).n(0,document.createElement("br"))
s=P.lw().gck().h(0,H.e(q.a))
if(s==null){q.d2(t)
r=c}else r=P.cM(s,null,null)==t
if(r)p.click()},
n:function(a,b){return this.aw(a,b,!1)},
d2:function(a){var u,t,s=P.lw(),r=P.h,q=P.mS(s.gck(),r,r)
q.m(0,this.a,H.e(a))
u=s.e7(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jE([],[]).bu(""),"",t)}}
V.is.prototype={
$1:function(a){var u=this,t=u.a,s=J.eV(t.c)
s.v(s,new V.ir())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.d2(u.d)}}
V.ir.prototype={
$1:function(a){var u
if(!!J.P(a).$ibz){u=a.style
u.border="solid 2px white"}}}
N.kd.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.hV(a),r=t.c
if(!r.b)t.bR(new A.a_(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gu().Z(0,t.gbh())
u=t.d
t.d=s
s.gu().n(0,t.gbh())
s=new D.A(t.b+".texture2D",u,t.d)
s.b=!0
t.a.V(s)}}}
N.ke.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.d5("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d5("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eo=u.i
u=J.dc.prototype
u.eq=u.i
u=P.k.prototype
u.ep=u.bv
u=W.Q.prototype
u.by=u.af
u=W.eo.prototype
u.er=u.ap
u=K.d7.prototype
u.en=u.aB
u.cu=u.i
u=O.c9.prototype
u.cv=u.au
u=O.aB.prototype
u.cw=u.au})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"nZ","mN",22)
t(P,"ot","nx",8)
t(P,"ou","ny",8)
t(P,"ov","nz",8)
s(P,"lW","or",10)
r(W,"oI",4,null,["$4"],["nA"],16,0)
r(W,"oJ",4,null,["$4"],["nB"],16,0)
var l
q(l=E.aU.prototype,"gdW",0,0,null,["$1","$0"],["dX","i3"],0,0)
q(l,"gdY",0,0,null,["$1","$0"],["dZ","i4"],0,0)
q(l,"gdU",0,0,null,["$1","$0"],["dV","i2"],0,0)
q(l,"gdS",0,0,null,["$1","$0"],["dT","i_"],0,0)
p(l,"ghY","hZ",4)
p(l,"gi0","i1",4)
q(l=E.dG.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
o(l,"gik","e8",10)
n(l=X.dP.prototype,"gft","fu",5)
n(l,"gfg","fh",5)
n(l,"gfm","fn",2)
n(l,"gfz","fA",11)
n(l,"gfv","fw",11)
n(l,"gfD","fE",2)
n(l,"gfH","fI",2)
n(l,"gfq","fs",2)
n(l,"gfF","fG",2)
n(l,"gfo","fp",2)
n(l,"gfJ","fK",19)
n(l,"gfL","fM",5)
n(l,"gfY","fZ",6)
n(l,"gfU","fV",6)
n(l,"gfW","fX",6)
q(D.bv.prototype,"geA",0,0,null,["$1","$0"],["as","eB"],0,0)
q(l=D.de.prototype,"gcT",0,0,null,["$1","$0"],["cU","fB"],0,0)
n(l,"gfO","fP",20)
p(l,"gfa","fb",12)
p(l,"gfS","fT",12)
m(V.J.prototype,"gl","cb",13)
m(V.D.prototype,"gl","cb",13)
q(l=U.c4.prototype,"gaJ",0,0,null,["$1","$0"],["R","a8"],0,0)
p(l,"gf8","f9",14)
p(l,"gfQ","fR",14)
q(l=U.dQ.prototype,"gaJ",0,0,null,["$1","$0"],["R","a8"],0,0)
n(l,"gbH","bI",1)
n(l,"gbJ","bK",1)
n(l,"gbL","bM",1)
q(l=U.dR.prototype,"gaJ",0,0,null,["$1","$0"],["R","a8"],0,0)
n(l,"gbH","bI",1)
n(l,"gbJ","bK",1)
n(l,"gbL","bM",1)
n(l,"gf_","f0",1)
n(l,"gf1","f2",1)
n(l,"ghi","hj",1)
n(l,"ghg","hh",1)
n(l,"ghe","hf",1)
n(U.dS.prototype,"gf4","f5",1)
q(l=M.d3.prototype,"gaK",0,0,null,["$1","$0"],["aL","eC"],0,0)
p(l,"gfi","fj",4)
p(l,"gfk","fl",4)
q(l=O.d8.prototype,"ghk",0,1,null,["$2$color","$1"],["d3","hl"],21,0)
n(l,"gf6","f7",7)
n(l,"geN","eO",7)
n(l,"gcF","eL",7)
q(l=O.dh.prototype,"gbh",0,0,null,["$1","$0"],["V","bP"],0,0)
q(l,"gh4",0,0,null,["$1","$0"],["cV","h5"],0,0)
p(l,"gfc","fd",15)
p(l,"gfe","ff",15)
q(O.c9.prototype,"gbh",0,0,null,["$1","$0"],["V","bP"],0,0)
q(X.dr.prototype,"gcD",0,0,null,["$1","$0"],["aM","eG"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.kz,J.a,J.a7,P.eb,P.k,H.bc,P.fW,H.d5,H.iQ,H.fd,H.iE,P.bw,H.c0,H.et,P.a2,H.h2,H.h4,H.fY,P.ez,P.bN,P.bO,P.dV,P.dC,P.ig,P.dH,P.jW,P.jy,P.js,P.ea,P.x,P.jO,P.hc,P.fa,P.fL,P.jU,P.jT,P.aQ,P.ad,P.ac,P.b8,P.hL,P.dA,P.e3,P.fE,P.fG,P.q,P.R,P.bf,P.h,P.S,P.bP,P.iS,P.jB,W.fh,W.cw,W.M,W.dp,W.eo,W.jI,W.d6,W.aZ,W.jx,W.eH,P.jD,P.eE,P.jt,P.bK,K.aS,K.d7,K.bd,K.hS,K.i0,L.dB,L.dI,L.dJ,L.iy,O.b7,O.ca,E.f6,E.aU,E.bs,E.bF,E.e2,E.hT,E.dG,Z.dT,Z.dU,Z.bt,Z.cV,Z.bA,Z.aO,D.f9,D.bx,D.Z,X.cW,X.dd,X.h0,X.h9,X.ai,X.hA,X.iA,X.dP,D.f3,D.bv,D.a8,D.hP,D.ia,V.Y,V.V,V.fw,V.di,V.aX,V.aj,V.a4,V.ds,V.dv,V.J,V.D,U.dQ,U.dR,U.dS,M.d3,A.cS,A.eZ,A.a_,A.cT,A.d0,A.dt,A.dz,A.hi,A.co,A.cp,A.cr,A.cs,A.dM,A.iL,F.by,F.bE,F.cg,F.ak,F.i1,F.i2,F.i3,F.ct,F.j3,F.j4,F.j7,F.j8,O.dE,O.c9,O.hj,T.iu,X.kn,X.ik,X.dr,V.cX,V.i4,V.iq])
s(J.a,[J.fX,J.db,J.dc,J.b9,J.c6,J.ba,H.cd,H.be,W.f,W.eW,W.bq,W.az,W.H,W.dX,W.ah,W.fm,W.fn,W.dZ,W.d2,W.e0,W.fp,W.j,W.e4,W.aA,W.fJ,W.e6,W.aV,W.h8,W.hu,W.ec,W.ed,W.aD,W.ee,W.eh,W.aF,W.el,W.en,W.aI,W.ep,W.aJ,W.eu,W.aq,W.ex,W.ix,W.aL,W.eA,W.iC,W.iX,W.eI,W.eK,W.eM,W.eO,W.eQ,P.aW,P.e8,P.b_,P.ej,P.hR,P.ev,P.b1,P.eC,P.f_,P.dW,P.dw,P.er])
s(J.dc,[J.hM,J.bM,J.bb])
t(J.ky,J.b9)
s(J.c6,[J.da,J.d9])
t(P.h6,P.eb)
s(P.h6,[H.dN,W.ji,W.a5,P.fA])
t(H.o,H.dN)
s(P.k,[H.t,H.c8,H.cu,P.fV])
s(H.t,[H.df,H.h3])
t(H.fs,H.c8)
s(P.fW,[H.hd,H.jc])
t(H.he,H.df)
t(H.fe,H.fd)
s(P.bw,[H.hI,H.h_,H.iP,H.f8,H.hZ,P.dq,P.an,P.iR,P.iN,P.cl,P.fc,P.fk])
s(H.c0,[H.ki,H.il,H.fZ,H.k9,H.ka,H.kb,P.je,P.jd,P.jf,P.jg,P.jN,P.jM,P.k4,P.jv,P.jw,P.h5,P.hb,P.fq,P.fr,P.iW,P.iT,P.iU,P.iV,P.jP,P.jQ,P.jS,P.jR,P.k_,P.jZ,P.k0,P.k1,W.ft,W.hw,W.hy,W.hY,W.ie,W.jn,W.hH,W.hG,W.jz,W.jA,W.jL,W.jV,P.jF,P.jG,P.k5,P.fB,P.fC,P.f1,E.hU,E.hV,E.hW,E.iw,D.fx,D.fy,F.jX,F.ja,F.j9,F.j5,F.j6,O.fS,O.fR,O.fT,O.fU,O.fQ,O.fP,O.fO,O.hm,O.hn,O.ho,O.hp,O.hq,O.hr,O.hs,O.ht,T.iv,V.kg,V.i6,V.i5,V.i7,V.is,V.ir,N.kd,N.ke])
s(H.il,[H.ic,H.bZ])
t(P.ha,P.a2)
s(P.ha,[H.F,W.jh])
t(H.dk,H.be)
s(H.dk,[H.cy,H.cA])
t(H.cz,H.cy)
t(H.ce,H.cz)
t(H.cB,H.cA)
t(H.dl,H.cB)
s(H.dl,[H.hB,H.hC,H.hD,H.hE,H.hF,H.dm,H.cf])
t(P.jJ,P.fV)
t(P.ju,P.jW)
t(P.jr,P.jy)
t(P.eF,P.hc)
t(P.dO,P.eF)
s(P.fa,[P.f4,P.fu])
t(P.ff,P.ig)
s(P.ff,[P.f5,P.fK,P.j_,P.iZ])
t(P.iY,P.fu)
s(P.ac,[P.L,P.w])
s(P.an,[P.bI,P.fM])
t(P.jk,P.bP)
s(W.f,[W.B,W.fz,W.cb,W.aH,W.cC,W.aK,W.ar,W.cE,W.jb,W.cv,P.f2,P.bp])
s(W.B,[W.Q,W.b6])
s(W.Q,[W.r,P.l])
s(W.r,[W.eX,W.eY,W.br,W.bu,W.ao,W.fD,W.bz,W.i_,W.dD,W.ii,W.ij,W.cn])
t(W.fg,W.az)
t(W.c1,W.dX)
s(W.ah,[W.fi,W.fj])
t(W.e_,W.dZ)
t(W.d1,W.e_)
t(W.e1,W.e0)
t(W.fo,W.e1)
t(W.ap,W.bq)
t(W.e5,W.e4)
t(W.c3,W.e5)
t(W.e7,W.e6)
t(W.c5,W.e7)
t(W.bh,W.j)
s(W.bh,[W.bD,W.aE,W.bJ])
t(W.hv,W.ec)
t(W.hx,W.ed)
t(W.ef,W.ee)
t(W.hz,W.ef)
t(W.ei,W.eh)
t(W.dn,W.ei)
t(W.em,W.el)
t(W.hO,W.em)
t(W.hX,W.en)
t(W.cD,W.cC)
t(W.i8,W.cD)
t(W.eq,W.ep)
t(W.i9,W.eq)
t(W.id,W.eu)
t(W.ey,W.ex)
t(W.im,W.ey)
t(W.cF,W.cE)
t(W.io,W.cF)
t(W.eB,W.eA)
t(W.iB,W.eB)
t(W.bk,W.aE)
t(W.eJ,W.eI)
t(W.jj,W.eJ)
t(W.dY,W.d2)
t(W.eL,W.eK)
t(W.jo,W.eL)
t(W.eN,W.eM)
t(W.eg,W.eN)
t(W.eP,W.eO)
t(W.jC,W.eP)
t(W.eR,W.eQ)
t(W.jH,W.eR)
t(W.jl,W.jh)
t(W.jm,P.dC)
t(W.jK,W.eo)
t(P.jE,P.jD)
t(P.aa,P.jt)
t(P.e9,P.e8)
t(P.h1,P.e9)
t(P.ek,P.ej)
t(P.hJ,P.ek)
t(P.cj,P.l)
t(P.ew,P.ev)
t(P.ih,P.ew)
t(P.eD,P.eC)
t(P.iD,P.eD)
t(P.f0,P.dW)
t(P.hK,P.bp)
t(P.es,P.er)
t(P.ib,P.es)
s(K.d7,[K.a9,L.dL])
s(E.f6,[Z.cU,A.dx,T.dF])
s(D.Z,[D.bB,D.bC,D.A,X.hQ])
s(X.hQ,[X.dg,X.aY,X.cc,X.dK])
s(O.b7,[D.de,U.c4])
s(D.f9,[U.fb,U.ae])
t(U.cZ,U.ae)
s(A.dx,[A.fN,A.hf])
s(A.dM,[A.bi,A.iI,A.iJ,A.iK,A.iG,A.U,A.iH,A.E,A.bj,A.iM,A.cq,A.a0,A.a1,A.bL])
s(O.dE,[O.d8,O.dh])
s(O.c9,[O.hg,O.hh,O.aB])
s(O.aB,[O.hk,O.hl])
t(T.ip,T.dF)
t(T.it,T.ip)
t(X.fF,X.ik)
s(V.cX,[V.fl,V.fH,V.fI,V.hN])
u(H.dN,H.iQ)
u(H.cy,P.x)
u(H.cz,H.d5)
u(H.cA,P.x)
u(H.cB,H.d5)
u(P.eb,P.x)
u(P.eF,P.jO)
u(W.dX,W.fh)
u(W.dZ,P.x)
u(W.e_,W.M)
u(W.e0,P.x)
u(W.e1,W.M)
u(W.e4,P.x)
u(W.e5,W.M)
u(W.e6,P.x)
u(W.e7,W.M)
u(W.ec,P.a2)
u(W.ed,P.a2)
u(W.ee,P.x)
u(W.ef,W.M)
u(W.eh,P.x)
u(W.ei,W.M)
u(W.el,P.x)
u(W.em,W.M)
u(W.en,P.a2)
u(W.cC,P.x)
u(W.cD,W.M)
u(W.ep,P.x)
u(W.eq,W.M)
u(W.eu,P.a2)
u(W.ex,P.x)
u(W.ey,W.M)
u(W.cE,P.x)
u(W.cF,W.M)
u(W.eA,P.x)
u(W.eB,W.M)
u(W.eI,P.x)
u(W.eJ,W.M)
u(W.eK,P.x)
u(W.eL,W.M)
u(W.eM,P.x)
u(W.eN,W.M)
u(W.eO,P.x)
u(W.eP,W.M)
u(W.eQ,P.x)
u(W.eR,W.M)
u(P.e8,P.x)
u(P.e9,W.M)
u(P.ej,P.x)
u(P.ek,W.M)
u(P.ev,P.x)
u(P.ew,W.M)
u(P.eC,P.x)
u(P.eD,W.M)
u(P.dW,P.a2)
u(P.er,P.x)
u(P.es,W.M)})()
var v={mangledGlobalNames:{w:"int",L:"double",ac:"num",h:"String",aQ:"bool",bf:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.bf,args:[,,]},{func:1,ret:-1,args:[P.w,[P.k,E.aU]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bJ]},{func:1,ret:F.ak,args:[F.ak]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bD]},{func:1,ret:-1,args:[P.w,[P.k,D.a8]]},{func:1,ret:P.L},{func:1,ret:-1,args:[P.w,[P.k,U.ae]]},{func:1,ret:-1,args:[P.w,[P.k,V.aX]]},{func:1,ret:P.aQ,args:[W.Q,P.h,P.h,W.cw]},{func:1,ret:P.bf,args:[,]},{func:1,ret:P.bK,args:[,,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.aQ,args:[[P.k,D.a8]]},{func:1,ret:F.ak,args:[F.ak],named:{color:V.V}},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.br.prototype
C.i=W.bu.prototype
C.S=W.ao.prototype
C.V=J.a.prototype
C.b=J.b9.prototype
C.W=J.d9.prototype
C.c=J.da.prototype
C.j=J.db.prototype
C.d=J.c6.prototype
C.a=J.ba.prototype
C.X=J.bb.prototype
C.D=J.hM.prototype
C.a5=P.dw.prototype
C.E=W.dD.prototype
C.q=J.bM.prototype
C.F=W.bk.prototype
C.G=W.cv.prototype
C.H=new E.bs("Browser.chrome")
C.t=new E.bs("Browser.firefox")
C.u=new E.bs("Browser.edge")
C.I=new E.bs("Browser.other")
C.a7=new P.f5()
C.J=new P.f4()
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

C.Q=new P.hL()
C.e=new P.iY()
C.R=new P.j_()
C.f=new P.ju()
C.n=new P.b8(0)
C.T=new P.b8(5e6)
C.U=new P.fL("element",!1,!1,!1)
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
C.a1=new H.fe(0,{},C.y,[P.h,P.h])
C.a2=new E.bF("OperatingSystem.windows")
C.C=new E.bF("OperatingSystem.mac")
C.a3=new E.bF("OperatingSystem.linux")
C.a4=new E.bF("OperatingSystem.other")
C.a6=new P.bN(null,2)})();(function staticFields(){$.ax=0
$.c_=null
$.l4=null
$.lY=null
$.lV=null
$.m1=null
$.k6=null
$.kc=null
$.kU=null
$.bS=null
$.cI=null
$.cJ=null
$.kP=!1
$.as=C.f
$.ab=[]
$.aT=null
$.ks=null
$.la=null
$.l9=null
$.cx=P.kB(P.h,P.fG)
$.fv=null
$.lf=null
$.li=null
$.aG=null
$.lo=null
$.lz=null
$.lC=null
$.lB=null
$.j0=null
$.j1=null
$.j2=null
$.lA=null
$.lh=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p0","m6",function(){return H.lX("_$dart_dartClosure")})
u($,"p1","kZ",function(){return H.lX("_$dart_js")})
u($,"p2","m7",function(){return H.aM(H.iF({
toString:function(){return"$receiver$"}}))})
u($,"p3","m8",function(){return H.aM(H.iF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p4","m9",function(){return H.aM(H.iF(null))})
u($,"p5","ma",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p8","md",function(){return H.aM(H.iF(void 0))})
u($,"p9","me",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p7","mc",function(){return H.aM(H.lu(null))})
u($,"p6","mb",function(){return H.aM(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pb","mg",function(){return H.aM(H.lu(void 0))})
u($,"pa","mf",function(){return H.aM(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pp","l_",function(){return P.nw()})
u($,"pc","mh",function(){return P.nr()})
u($,"pq","ml",function(){return H.mZ(H.bR(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pt","mn",function(){return P.nd("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pu","mo",function(){return P.nX()})
u($,"pr","mm",function(){return P.ld(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pj","mk",function(){return Z.al(0)})
u($,"pd","mi",function(){return Z.al(511)})
u($,"pl","aw",function(){return Z.al(1)})
u($,"pk","av",function(){return Z.al(2)})
u($,"pf","au",function(){return Z.al(4)})
u($,"pm","b5",function(){return Z.al(8)})
u($,"pn","bo",function(){return Z.al(16)})
u($,"pg","bn",function(){return Z.al(32)})
u($,"ph","cO",function(){return Z.al(64)})
u($,"pi","mj",function(){return Z.al(96)})
u($,"po","bX",function(){return Z.al(128)})
u($,"pe","b4",function(){return Z.al(256)})
u($,"p_","m5",function(){return new V.fw(1e-9)})
u($,"oZ","C",function(){return $.m5()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cd,DataView:H.be,ArrayBufferView:H.be,Float32Array:H.ce,Float64Array:H.ce,Int16Array:H.hB,Int32Array:H.hC,Int8Array:H.hD,Uint16Array:H.hE,Uint32Array:H.hF,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.cf,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eW,HTMLAnchorElement:W.eX,HTMLAreaElement:W.eY,Blob:W.bq,HTMLBodyElement:W.br,HTMLCanvasElement:W.bu,CDATASection:W.b6,CharacterData:W.b6,Comment:W.b6,ProcessingInstruction:W.b6,Text:W.b6,CSSPerspective:W.fg,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c1,MSStyleCSSProperties:W.c1,CSS2Properties:W.c1,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.az,CSSRotation:W.az,CSSScale:W.az,CSSSkew:W.az,CSSTranslation:W.az,CSSTransformComponent:W.az,CSSTransformValue:W.fi,CSSUnparsedValue:W.fj,DataTransferItemList:W.fm,HTMLDivElement:W.ao,DOMException:W.fn,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.fo,DOMTokenList:W.fp,Element:W.Q,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ap,FileList:W.c3,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aA,History:W.fJ,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,ImageData:W.aV,HTMLImageElement:W.bz,KeyboardEvent:W.bD,Location:W.h8,MediaList:W.hu,MessagePort:W.cb,MIDIInputMap:W.hv,MIDIOutputMap:W.hx,MimeType:W.aD,MimeTypeArray:W.hz,PointerEvent:W.aE,MouseEvent:W.aE,DragEvent:W.aE,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.dn,RadioNodeList:W.dn,Plugin:W.aF,PluginArray:W.hO,RTCStatsReport:W.hX,HTMLSelectElement:W.i_,SourceBuffer:W.aH,SourceBufferList:W.i8,SpeechGrammar:W.aI,SpeechGrammarList:W.i9,SpeechRecognitionResult:W.aJ,Storage:W.id,CSSStyleSheet:W.aq,StyleSheet:W.aq,HTMLTableElement:W.dD,HTMLTableRowElement:W.ii,HTMLTableSectionElement:W.ij,HTMLTemplateElement:W.cn,TextTrack:W.aK,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.im,TextTrackList:W.io,TimeRanges:W.ix,Touch:W.aL,TouchEvent:W.bJ,TouchList:W.iB,TrackDefaultList:W.iC,CompositionEvent:W.bh,FocusEvent:W.bh,TextEvent:W.bh,UIEvent:W.bh,URL:W.iX,VideoTrackList:W.jb,WheelEvent:W.bk,Window:W.cv,DOMWindow:W.cv,CSSRuleList:W.jj,ClientRect:W.dY,DOMRect:W.dY,GamepadList:W.jo,NamedNodeMap:W.eg,MozNamedAttrMap:W.eg,SpeechRecognitionResultList:W.jC,StyleSheetList:W.jH,SVGLength:P.aW,SVGLengthList:P.h1,SVGNumber:P.b_,SVGNumberList:P.hJ,SVGPointList:P.hR,SVGScriptElement:P.cj,SVGStringList:P.ih,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b1,SVGTransformList:P.iD,AudioBuffer:P.f_,AudioParamMap:P.f0,AudioTrackList:P.f2,AudioContext:P.bp,webkitAudioContext:P.bp,BaseAudioContext:P.bp,OfflineAudioContext:P.hK,WebGL2RenderingContext:P.dw,SQLResultSetRowList:P.ib})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.m_,[])
else N.m_([])})})()
//# sourceMappingURL=test.dart.js.map
