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
a[c]=function(){a[c]=function(){H.pf(b)}
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
k7:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ng:function(a,b,c,d){if(!!J.N(a).$iq)return new H.fm(a,b,[c,d])
return new H.c6(a,b,[c,d])},
fJ:function(){return new P.cg("No element")},
n5:function(){return new P.cg("Too many elements")},
nD:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.M()
H.dt(a,0,u-1,b)},
dt:function(a,b,c,d){if(c-b<=32)H.nC(a,b,c,d)
else H.nB(a,b,c,d)},
nC:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aq(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nB:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.aq(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.E(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.R()
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
if(typeof l!=="number")return l.R()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
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
H.dt(a3,a4,t-2,a6)
H.dt(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.E(a6.$2(d.h(a3,t),b),0);)++t
for(;J.E(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dt(a3,t,s,a6)}else H.dt(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
da:function da(){},
b6:function b6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(a,b,c){this.a=a
this.b=b
this.$ti=c},
fm:function fm(a,b,c){this.a=a
this.b=b
this.$ti=c},
h1:function h1(a,b){this.a=null
this.b=a
this.c=b},
h2:function h2(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
j6:function j6(a,b){this.a=a
this.b=b},
d1:function d1(){},
iG:function iG(){},
dI:function dI(){},
mY:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cJ:function(a){var u,t=H.pg(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
p_:function(a){return v.types[a]},
mh:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iC},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.c(H.ad(a))
return u},
cd:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nt:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
ce:function(a){return H.nk(a)+H.m5(H.cI(a),0,null)},
nk:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibG){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cJ(t.length>1&&C.a.F(t,0)===36?C.a.a6(t,1):t)},
nl:function(){if(!!self.location)return self.location.href
return},
ly:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nu:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aI(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ad(s))}return H.ly(r)},
lz:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ad(s))
if(s<0)throw H.c(H.ad(s))
if(s>65535)return H.nu(a)}return H.ly(a)},
nv:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ib()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bz:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aI(u,10))>>>0,56320|u&1023)}}throw H.c(P.X(a,0,1114111,null,null))},
by:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ns:function(a){var u=H.by(a).getFullYear()+0
return u},
nq:function(a){var u=H.by(a).getMonth()+1
return u},
nm:function(a){var u=H.by(a).getDate()+0
return u},
nn:function(a){var u=H.by(a).getHours()+0
return u},
np:function(a){var u=H.by(a).getMinutes()+0
return u},
nr:function(a){var u=H.by(a).getSeconds()+0
return u},
no:function(a){var u=H.by(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.ad(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.dp(b,s)},
oU:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bA(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bA(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ad:function(a){return new P.aj(!0,a,null,null)},
oP:function(a){if(typeof a!=="number")throw H.c(H.ad(a))
return a},
c:function(a){var u
if(a==null)a=new P.dl()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mn})
u.name=""}else u.toString=H.mn
return u},
mn:function(){return J.a3(this.dartException)},
p:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aK(a))},
aE:function(a){var u,t,s,r,q,p
a=H.ml(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lI:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lu:function(a,b){return new H.hx(a,b==null?null:b.method)},
kH:function(a,b){var u=b==null,t=u?null:b.method
return new H.fO(a,t,u?null:b.receiver)},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kH(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lu(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mr()
q=$.ms()
p=$.mt()
o=$.mu()
n=$.mx()
m=$.my()
l=$.mw()
$.mv()
k=$.mA()
j=$.mz()
i=r.ae(u)
if(i!=null)return f.$1(H.kH(u,i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.kH(u,i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lu(u,i))}}return f.$1(new H.iF(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dv()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dv()
return a},
l1:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
oY:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p5:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p5)
a.$identity=u
return u},
mX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i4().constructor.prototype):Object.create(new H.bU(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.A()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.li(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mT(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.li(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mT:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.p_,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lh:H.ku
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mU:function(a,b,c,d){var u=H.ku
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
li:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mU(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.A()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f0("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.A()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f0("self"):q)+"."+H.e(u)+"("+o+");}")()},
mV:function(a,b,c,d){var u=H.ku,t=H.lh
switch(b?-1:a){case 0:throw H.c(H.nz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mW:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.f0("self")
u=$.lg
if(u==null)u=$.lg=H.f0("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mV(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ar
if(typeof u!=="number")return u.A()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.A()
$.ar=u+1
return new Function(n+u+"}")()},
kY:function(a,b,c,d,e,f,g){return H.mX(a,b,c,d,!!e,!!f,g)},
ku:function(a){return a.a},
lh:function(a){return a.c},
f0:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.kE(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pa:function(a,b){throw H.c(H.mS(a,H.cJ(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.pa(a,b)},
oW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mS:function(a,b){return new H.f1("CastError: "+P.kB(a)+": type '"+H.e(H.oL(a))+"' is not a subtype of type '"+b+"'")},
oL:function(a){var u,t=J.N(a)
if(!!t.$ibW){u=H.oW(t)
if(u!=null)return H.pb(u)
return"Closure"}return H.ce(a)},
pf:function(a){throw H.c(new P.fd(a))},
nz:function(a){return new H.hQ(a)},
mf:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cI:function(a){if(a==null)return
return a.$ti},
pR:function(a,b,c){return H.ko(a["$a"+H.e(c)],H.cI(b))},
oZ:function(a,b,c,d){var u=H.ko(a["$a"+H.e(c)],H.cI(b))
return u==null?null:u[d]},
l0:function(a,b,c){var u=H.ko(a["$a"+H.e(b)],H.cI(a))
return u==null?null:u[c]},
aH:function(a,b){var u=H.cI(a)
return u==null?null:u[b]},
pb:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cJ(a[0].name)+H.m5(a,1,b)
if(typeof a=="function")return H.cJ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.og(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
og:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.a1)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oX(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m5:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.S("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.i(0)+">"},
ko:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pP:function(a,b,c){return a.apply(b,H.ko(J.N(b)["$a"+H.e(c)],H.cI(b)))},
pQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p7:function(a){var u,t,s,r,q=$.mg.$1(a),p=$.k5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ma.$2(a,q)
if(q!=null){p=$.k5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kk(u)
$.k5[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kb[q]=u
return u}if(s==="-"){r=H.kk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mj(a,u)
if(s==="*")throw H.c(P.iE(q))
if(v.leafTags[q]===true){r=H.kk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mj(a,u)},
mj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l3(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kk:function(a){return J.l3(a,!1,null,!!a.$iC)},
p8:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kk(u)
else return J.l3(u,c,null,null)},
p3:function(){if(!0===$.l2)return
$.l2=!0
H.p4()},
p4:function(){var u,t,s,r,q,p,o,n
$.k5=Object.create(null)
$.kb=Object.create(null)
H.p2()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mk.$1(q)
if(p!=null){o=H.p8(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p2:function(){var u,t,s,r,q,p,o=C.K()
o=H.bN(C.L,H.bN(C.M,H.bN(C.w,H.bN(C.w,H.bN(C.N,H.bN(C.O,H.bN(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mg=new H.k8(r)
$.ma=new H.k9(q)
$.mk=new H.ka(p)},
bN:function(a,b){return a(b)||b},
n9:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
mm:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ml:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l6:function(a,b,c){var u=H.pe(a,b,c)
return u},
pe:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ml(b),'g'),H.oV(c))},
f6:function f6(){},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hx:function hx(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a){this.a=a},
kq:function kq(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
bW:function bW(){},
ic:function ic(){},
i4:function i4(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a){this.a=a},
hQ:function hQ(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a){this.a=a},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fT:function fT(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function(a){return a},
nj:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
oe:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oU(a,b,c))
return b},
c9:function c9(){},
b9:function b9(){},
dg:function dg(){},
ca:function ca(){},
dh:function dh(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
di:function di(){},
cb:function cb(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
oX:function(a){return J.ln(a?Object.keys(a):[],null)},
pg:function(a){return v.mangledGlobalNames[a]},
p9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k6:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l2==null){H.p3()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iE("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l8()]
if(r!=null)return r
r=H.p7(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.l8(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n6:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kt(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.X(a,0,4294967295,"length",null))
return J.ln(new Array(a),b)},
ln:function(a,b){return J.kE(H.b(a,[b]))},
kE:function(a){a.fixed$length=Array
return a},
n7:function(a,b){return J.cM(a,b)},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.d4.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.d6.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k6(a)},
aq:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k6(a)},
eL:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k6(a)},
me:function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bG.prototype
return a},
cH:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bG.prototype
return a},
bR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.k6(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).p(a,b)},
la:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.me(a).B(a,b)},
bT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aq(a).h(a,b)},
kr:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mh(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eL(a).m(a,b,c)},
mJ:function(a,b){return J.cH(a).F(a,b)},
mK:function(a,b,c){return J.bR(a).fA(a,b,c)},
mL:function(a,b,c,d){return J.bR(a).fU(a,b,c,d)},
mM:function(a,b){return J.cH(a).U(a,b)},
cM:function(a,b){return J.me(a).aK(a,b)},
ks:function(a,b){return J.aq(a).D(a,b)},
eO:function(a,b){return J.eL(a).J(a,b)},
mN:function(a,b,c,d){return J.bR(a).hm(a,b,c,d)},
lb:function(a,b){return J.eL(a).G(a,b)},
mO:function(a){return J.bR(a).gh3(a)},
lc:function(a){return J.bR(a).gbQ(a)},
cN:function(a){return J.N(a).gI(a)},
aI:function(a){return J.eL(a).gS(a)},
af:function(a){return J.aq(a).gl(a)},
ld:function(a){return J.eL(a).hT(a)},
mP:function(a,b){return J.bR(a).hX(a,b)},
mQ:function(a,b,c){return J.cH(a).q(a,b,c)},
mR:function(a){return J.cH(a).i5(a)},
a3:function(a){return J.N(a).i(a)},
a:function a(){},
fL:function fL(){},
d6:function d6(){},
d7:function d7(){},
hB:function hB(){},
bG:function bG(){},
b5:function b5(){},
b3:function b3(a){this.$ti=a},
kF:function kF(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c3:function c3(){},
d5:function d5(){},
d4:function d4(){},
b4:function b4(){}},P={
nP:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oM()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bO(new P.j8(s),1)).observe(u,{childList:true})
return new P.j7(s,u,t)}else if(self.setImmediate!=null)return P.oN()
return P.oO()},
nQ:function(a){self.scheduleImmediate(H.bO(new P.j9(a),0))},
nR:function(a){self.setImmediate(H.bO(new P.ja(a),0))},
nS:function(a){P.kM(C.n,a)},
kM:function(a,b){var u=C.c.a4(a.a,1000)
return P.nZ(u<0?0:u,b)},
lH:function(a,b){var u=C.c.a4(a.a,1000)
return P.o_(u<0?0:u,b)},
nZ:function(a,b){var u=new P.es()
u.ec(a,b)
return u},
o_:function(a,b){var u=new P.es()
u.ed(a,b)
return u},
pM:function(a){return new P.bH(a,1)},
nV:function(){return C.a6},
nW:function(a){return new P.bH(a,3)},
oj:function(a,b){return new P.jD(a,[b])},
oF:function(){var u,t
for(;u=$.bM,u!=null;){$.cG=null
t=u.b
$.bM=t
if(t==null)$.cF=null
u.a.$0()}},
oK:function(){$.kW=!0
try{P.oF()}finally{$.cG=null
$.kW=!1
if($.bM!=null)$.l9().$1(P.mb())}},
oI:function(a){var u=new P.dO(a)
if($.bM==null){$.bM=$.cF=u
if(!$.kW)$.l9().$1(P.mb())}else $.cF=$.cF.b=u},
oJ:function(a){var u,t,s=$.bM
if(s==null){P.oI(a)
$.cG=$.cF
return}u=new P.dO(a)
t=$.cG
if(t==null){u.b=s
$.bM=$.cG=u}else{u.b=t.b
$.cG=t.b=u
if(u.b==null)$.cF=u}},
lG:function(a,b){var u=$.ap
if(u===C.f)return P.kM(a,b)
return P.kM(a,u.h4(b))},
nG:function(a,b){var u=$.ap
if(u===C.f)return P.lH(a,b)
return P.lH(a,u.cZ(b,P.dC))},
m6:function(a,b,c,d,e){var u={}
u.a=d
P.oJ(new P.jZ(u,e))},
oG:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
oH:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j8:function j8(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
es:function es(){this.c=0},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jD:function jD(a,b){this.a=a
this.$ti=b},
dO:function dO(a){this.a=a
this.b=null},
dx:function dx(){},
i7:function i7(){},
dC:function dC(){},
jQ:function jQ(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
jo:function jo(){},
jp:function jp(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
nb:function(a,b){return new H.I([a,b])},
kI:function(a,b){return new H.I([a,b])},
nd:function(a){return H.oY(a,new H.I([null,null]))},
c5:function(a){return new P.jl([a])},
kR:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nY:function(a,b){var u=new P.e3(a,b)
u.c=a.e
return u},
n4:function(a,b,c){var u,t
if(P.kX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.oi(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lE(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kD:function(a,b,c){var u,t
if(P.kX(a))return b+"..."+c
u=new P.S(b)
$.a9.push(a)
try{t=u
t.a=P.lE(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kX:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
oi:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
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
nc:function(a,b,c){var u=P.nb(b,c)
a.G(0,new P.fV(u))
return u},
lo:function(a,b){var u,t,s=P.c5(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kK:function(a){var u,t={}
if(P.kX(a))return"{...}"
u=new P.S("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.lb(a,new P.h_(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jl:function jl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jm:function jm(a){this.a=a
this.c=this.b=null},
e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fI:function fI(){},
fV:function fV(a){this.a=a},
fW:function fW(){},
x:function x(){},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
a0:function a0(){},
jI:function jI(){},
h0:function h0(){},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
js:function js(){},
e4:function e4(){},
ey:function ey(){},
nJ:function(a,b,c,d){if(b instanceof Uint8Array)return P.nK(!1,b,c,d)
return},
nK:function(a,b,c,d){var u,t,s=$.mB()
if(s==null)return
u=0===c
if(u&&!0)return P.kP(s,b)
t=b.length
d=P.aT(c,d,t)
if(u&&d===t)return P.kP(s,b)
return P.kP(s,b.subarray(c,d))},
kP:function(a,b){if(P.nM(b))return
return P.nN(a,b)},
nN:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ae(t)}return},
nM:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nL:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ae(t)}return},
m8:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.v(c)
u=J.aq(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a8()
if((s&127)!==s)return t-b}return c-b},
lf:function(a,b,c,d,e,f){if(C.c.b6(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
eY:function eY(){},
eZ:function eZ(){},
f3:function f3(){},
f8:function f8(){},
fo:function fo(){},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fF:function fF(a){this.a=a},
iO:function iO(){},
iQ:function iQ(){},
jO:function jO(a){this.b=0
this.c=a},
iP:function iP(a){this.a=a},
jN:function jN(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eM:function(a,b,c){var u=H.nt(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
n1:function(a){if(a instanceof H.bW)return a.i(0)
return"Instance of '"+H.e(H.ce(a))+"'"},
ne:function(a,b,c){var u,t,s=J.n6(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kJ:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aI(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.kE(t)},
ch:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aT(b,c,u)
if(b<=0){if(typeof c!=="number")return c.R()
t=c<u}else t=!0
return H.lz(t?C.b.dT(a,b,c):a)}if(!!J.N(a).$icb)return H.nv(a,b,P.aT(b,c,a.length))
return P.nE(a,b,c)},
nE:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.X(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.X(c,b,J.af(a),q,q))
t=J.aI(a)
for(s=0;s<b;++s)if(!t.t())throw H.c(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.t();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.t())throw H.c(P.X(c,b,s,q,q))
r.push(t.gC(t))}return H.lz(r)},
nx:function(a){return new H.fM(a,H.n9(a,!1,!0,!1,!1,!1))},
lE:function(a,b,c){var u=J.aI(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.t())}else{a+=H.e(u.gC(u))
for(;u.t();)a=a+c+H.e(u.gC(u))}return a},
lK:function(){var u=H.nl()
if(u!=null)return P.nI(u)
throw H.c(P.y("'Uri.base' is not supported"))},
ez:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mH().b
if(typeof b!=="string")H.p(H.ad(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghl().bS(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bz(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mZ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cX:function(a){if(a>=10)return""+a
return"0"+a},
lk:function(a){return new P.b1(1000*a)},
kB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n1(a)},
cO:function(a){return new P.aj(!1,null,null,a)},
kt:function(a,b,c){return new P.aj(!0,a,b,c)},
dp:function(a,b){return new P.bA(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bA(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.X(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.X(b,a,c,"end",null))
return b}return c},
lA:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.X(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fH(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iH(a)},
iE:function(a){return new P.iD(a)},
lD:function(a){return new P.cg(a)},
aK:function(a){return new P.f5(a)},
u:function(a){return new P.dX(a)},
T:function(a,b,c){return new P.fz(a,b,c)},
nf:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
l5:function(a){H.p9(a)},
nI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.lJ(e<e?C.a.q(a,0,e):a,5,f).gdL()
else if(u===32)return P.lJ(C.a.q(a,5,e),0,f).gdL()}t=new Array(8)
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
if(P.m7(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ia()
if(r>=0)if(P.m7(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.v(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a5(a,"..",o)))j=n>o+2&&C.a.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a5(a,"file",0)){if(q<=0){if(!C.a.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aO(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a5(a,"http",0)){if(t&&p+3===o&&C.a.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aO(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a5(a,"https",0)){if(t&&p+4===o&&C.a.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aO(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jv(a,r,q,p,o,n,m,k)}return P.o0(a,0,e,r,q,p,o,n,m,k)},
lM:function(a){var u=P.h
return C.b.hr(H.b(a.split("&"),[u]),P.kI(u,u),new P.iM(C.e))},
nH:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iJ(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eM(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eM(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iK(a),d=new P.iL(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.U(a,t)
if(p===58){if(t===b){++t
if(C.a.U(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaq(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nH(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aI(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
o0:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o8(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o9(a,u,e-1):""
s=P.o5(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.o7(P.eM(C.a.q(a,r,g),new P.jJ(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o6(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.kT(a,h+1,i,n):n
return new P.bJ(j,t,s,q,p,o,i<c?P.o4(a,i+1,c):n)},
m_:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.c(P.T(c,a,b))},
o7:function(a,b){if(a!=null&&a===P.m_(b))return
return a},
o5:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.U(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.U(a,u)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.o2(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.m4(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lL(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.U(a,p)===58){s=C.a.bh(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m4(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lL(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.ob(a,b,c)},
o2:function(a,b,c){var u,t=C.a.bh(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
m4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.S(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.U(a,u)
if(r===37){q=P.kU(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.S("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bK(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.S("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.S("")
l.a+=C.a.q(a,t,u)
l.a+=P.kS(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
ob:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.U(a,u)
if(q===37){p=P.kU(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.S("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bK(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.S("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kS(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o8:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m1(C.a.F(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bK(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.o1(t?a.toLowerCase():a)},
o1:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o9:function(a,b,c){return P.cD(a,b,c,C.a_,!1)},
o6:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cD(a,b,c,C.B,!0):C.j.ix(d,new P.jK(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.oa(u,e,f)},
oa:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.oc(a,!u||c)
return P.od(a)},
kT:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cO("Both query and queryParameters specified"))
return P.cD(a,b,c,C.l,!0)}if(d==null)return
u=new P.S("")
t.a=""
d.G(0,new P.jL(new P.jM(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o4:function(a,b,c){return P.cD(a,b,c,C.l,!0)},
kU:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.U(a,b+1)
t=C.a.U(a,p)
s=H.k7(u)
r=H.k7(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aI(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bz(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kS:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fM(a,6*r)&63|s
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
q+=3}}return P.ch(t,0,null)},
cD:function(a,b,c,d,e){var u=P.m3(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
m3:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kU(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bK(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kS(u)}}if(m==null)m=new P.S("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m2:function(a){if(C.a.a3(a,"."))return!0
return C.a.dg(a,"/.")!==-1},
od:function(a){var u,t,s,r,q,p,o
if(!P.m2(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.E(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
oc:function(a,b){var u,t,s,r,q,p
if(!P.m2(a))return!b?P.m0(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaq(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaq(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m0(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m0:function(a){var u,t,s,r=a.length
if(r>=2&&P.m1(J.mJ(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o3:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cO("Invalid URL encoding"))}}return u},
kV:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.m(C.a.q(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cO("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cO("Truncated URI"))
r.push(P.o3(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iP(!1).bS(r)},
m1:function(a){var u=a|32
return 97<=u&&u<=122},
lJ:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaq(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hC(0,a,o,u)
else{n=P.m3(a,o,u,C.l,!0)
if(n!=null)a=C.a.aO(a,o,u,n)}return new P.iI(a,l,c)},
of:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nf(22,new P.jU(),P.bD),n=new P.jT(o),m=new P.jV(),l=new P.jW(),k=n.$2(0,225)
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
m7:function(a,b,c,d,e){var u,t,s,r,q,p=$.mI()
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
aG:function aG(){},
ab:function ab(a,b){this.a=a
this.b=b},
J:function J(){},
b1:function b1(a){this.a=a},
fk:function fk(){},
fl:function fl(){},
bq:function bq(){},
dl:function dl(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fH:function fH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iH:function iH(a){this.a=a},
iD:function iD(a){this.a=a},
cg:function cg(a){this.a=a},
f5:function f5(a){this.a=a},
hA:function hA(){},
dv:function dv(){},
fd:function fd(a){this.a=a},
dX:function dX(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(){},
w:function w(){},
j:function j(){},
fK:function fK(){},
n:function n(){},
Q:function Q(){},
ba:function ba(){},
aa:function aa(){},
a1:function a1(){},
h:function h(){},
S:function S(a){this.a=a},
iM:function iM(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a,b){this.a=a
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
jJ:function jJ(a,b){this.a=a
this.b=b},
jK:function jK(){},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(){},
jT:function jT(a){this.a=a},
jV:function jV(){},
jW:function jW(){},
jv:function jv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
je:function je(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oS:function(a){var u,t=J.N(a)
if(!!t.$iaN){u=t.gd2(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
oR:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
aV:function(a){var u,t,s,r,q
if(a==null)return
u=P.kI(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oQ:function(a){var u={}
a.G(0,new P.k_(u))
return u},
jx:function jx(){},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
jy:function jy(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fx:function fx(){},
jk:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jn:function jn(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
fQ:function fQ(){},
aS:function aS(){},
hy:function hy(){},
hG:function hG(){},
cf:function cf(){},
i8:function i8(){},
k:function k(){},
aU:function aU(){},
is:function is(){},
e1:function e1(){},
e2:function e2(){},
ec:function ec(){},
ed:function ed(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
bD:function bD(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(a){this.a=a},
eW:function eW(){},
bl:function bl(){},
hz:function hz(){},
dP:function dP(){},
dr:function dr(){},
i3:function i3(){},
ek:function ek(){},
el:function el(){}},W={
le:function(){var u=document.createElement("a")
return u},
kw:function(){var u=document.createElement("canvas")
return u},
n0:function(a,b,c){var u=document.body,t=(u&&C.r).ad(u,a,b,c)
t.toString
u=new H.cr(new W.a2(t),new W.fn(),[W.D])
return u.gaD(u)},
ky:function(a){return"wheel"},
bY:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bR(a)
t=u.gdI(a)
if(typeof t==="string")r=u.gdI(a)}catch(s){H.ae(s)}return r},
n3:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ae(u)}return s},
jj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lY:function(a,b,c,d){var u=W.jj(W.jj(W.jj(W.jj(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.m9(new W.jh(c),W.i)
if(u!=null&&!0)J.mL(a,b,u,!1)
return new W.jg(a,b,u,!1)},
lX:function(a){var u=W.le(),t=window.location
u=new W.ct(new W.jr(u,t))
u.e4(a)
return u},
nT:function(a,b,c,d){return!0},
nU:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lZ:function(){var u=P.h,t=P.lo(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jE(t,P.c5(u),P.c5(u),P.c5(u),null)
t.e9(null,new H.h2(C.o,new W.jF(),[H.aH(C.o,0),u]),s,null)
return t},
m9:function(a,b){var u=$.ap
if(u===C.f)return a
return u.cZ(a,b)},
o:function o(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
bm:function bm(){},
bn:function bn(){},
bp:function bp(){},
b_:function b_(){},
f9:function f9(){},
H:function H(){},
bX:function bX(){},
fa:function fa(){},
ag:function ag(){},
at:function at(){},
fb:function fb(){},
fc:function fc(){},
ff:function ff(){},
ak:function ak(){},
fh:function fh(){},
cZ:function cZ(){},
d_:function d_(){},
fi:function fi(){},
fj:function fj(){},
jc:function jc(a,b){this.a=a
this.b=b},
O:function O(){},
fn:function fn(){},
i:function i(){},
f:function f(){},
al:function al(){},
c_:function c_(){},
fu:function fu(){},
fy:function fy(){},
au:function au(){},
fE:function fE(){},
c1:function c1(){},
aN:function aN(){},
c2:function c2(){},
bv:function bv(){},
fX:function fX(){},
hi:function hi(){},
c8:function c8(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
hm:function hm(a){this.a=a},
aw:function aw(){},
hn:function hn(){},
ax:function ax(){},
a2:function a2(a){this.a=a},
D:function D(){},
dj:function dj(){},
ay:function ay(){},
hD:function hD(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
hR:function hR(){},
az:function az(){},
i1:function i1(){},
aA:function aA(){},
i2:function i2(){},
aB:function aB(){},
i5:function i5(){},
i6:function i6(a){this.a=a},
an:function an(){},
dy:function dy(){},
i9:function i9(){},
ia:function ia(){},
ci:function ci(){},
aC:function aC(){},
ao:function ao(){},
id:function id(){},
ie:function ie(){},
il:function il(){},
aD:function aD(){},
bC:function bC(){},
iq:function iq(){},
ir:function ir(){},
bd:function bd(){},
iN:function iN(){},
j4:function j4(){},
bh:function bh(){},
cs:function cs(){},
jd:function jd(){},
dR:function dR(){},
ji:function ji(){},
e9:function e9(){},
jw:function jw(){},
jB:function jB(){},
jb:function jb(){},
jf:function jf(a){this.a=a},
jg:function jg(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jh:function jh(a){this.a=a},
ct:function ct(a){this.a=a},
K:function K(){},
dk:function dk(a){this.a=a},
hv:function hv(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(){},
jt:function jt(){},
ju:function ju(){},
jE:function jE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jF:function jF(){},
jC:function jC(){},
d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aR:function aR(){},
jr:function jr(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
jP:function jP(a){this.a=a},
dQ:function dQ(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cz:function cz(){},
cA:function cA(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cB:function cB(){},
cC:function cC(){},
et:function et(){},
eu:function eu(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){}},K={
M:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
if(u>t){s=t
t=u
u=s}return new K.hJ(u,t)},
t:function(a){var u=new K.hS()
u.e1(a)
return u},
aJ:function aJ(){},
d3:function d3(){},
b7:function b7(){},
a6:function a6(){this.a=null},
hJ:function hJ(a,b){this.a=a
this.b=b},
hS:function hS(){this.a=null}},L={
io:function(){var u=new L.im(),t=P.h
u.a=new H.I([t,L.dw])
u.b=new H.I([t,L.dE])
u.c=P.c5(t)
return u},
dw:function dw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a){this.b=a
this.c=null},
im:function im(){var _=this
_.d=_.c=_.b=_.a=null},
dG:function dG(a){this.b=a
this.a=this.c=null},
mi:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.nA("Test 025"),a=W.kw()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.h]
b.cW(H.b(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.fT(H.b(["shapes"],u))
b.cW(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nF(t,!0,!0,!0,!1)
r=U.kC()
r.n(0,U.cW(V.ls(0,0,-2.5)))
r.n(0,U.lN(!0,s.x))
q=new V.W(1,1,1)
p=s.f.hA("../resources/Test.png")
o=new D.bB()
o.r=new V.W(1,1,1)
o.ch=1.0471975511965976
o.cx=1
o.dx=o.cy=1.5707963267948966
o.db=!0
o.dy=1
o.fx=o.fr=0
o.fy=!0
o.a=V.lx()
o.b=V.lT()
o.c=V.lS()
o.d=V.nO()
n=o.f
o.f=r
r.gw().n(0,o.gbD())
m=new D.B("mover",n,o.f)
m.b=!0
o.Y(m)
if(!o.r.p(0,q)){n=o.r
o.r=q
m=new D.B("color",n,q)
m.b=!0
o.Y(m)}m=o.x
if(m!==p){if(m!=null)m.gw().L(0,o.gbD())
n=o.x
o.x=p
p.gw().n(0,o.gbD())
p=new D.B("texture",n,o.x)
p.b=!0
o.Y(p)}p=o.ch
if(!(Math.abs(p-0.5)<$.A().a)){o.ch=0.5
m=1/(Math.sqrt(2)*Math.tan(o.ch))
o.z=m
o.Q=m*o.cx
p=new D.B("fov",p,o.ch)
p.b=!0
o.Y(p)}p=o.cx
if(!(Math.abs(p-1)<$.A().a)){o.cx=1
m=o.z
if(typeof m!=="number")return m.B()
o.Q=m
p=new D.B("ratio",p,1)
p.b=!0
o.Y(p)}p=o.cy
if(!(Math.abs(p-1.5707963267948966)<$.A().a)){o.cy=1.5707963267948966
p=new D.B("cutoff",p,1.5707963267948966)
p.b=!0
o.Y(p)}p=o.dx
if(!(Math.abs(p-1.5707963267948966)<$.A().a)){o.dx=1.5707963267948966
p=new D.B("coneAngle",p,1.5707963267948966)
p.b=!0
o.Y(p)}p=$.lU
if(p==null){p=new V.cq(1,0.00390625,0.0000152587890625,0)
$.lU=p
l=p}else l=p
if(!J.E(o.e,l)){n=o.e
o.e=l
p=new D.B("shadowAdjust",n,l)
p.b=!0
o.Y(p)}p=o.dy
if(!(Math.abs(p-0.5)<$.A().a)){o.dy=0.5
p=new D.B("attenuation0",p,0.5)
p.b=!0
o.Y(p)}p=o.fr
if(!(Math.abs(p-0.05)<$.A().a)){o.fr=0.05
p=new D.B("attenuation1",p,0.05)
p.b=!0
o.Y(p)}p=o.fx
if(!(Math.abs(p-0.05)<$.A().a)){o.fx=0.05
p=new D.B("attenuation2",p,0.05)
p.b=!0
o.Y(p)}k=O.lp()
k.dx.n(0,o)
p=k.r
p.sax(0,new V.W(0.05,0.05,0.05))
p=k.x
p.sax(0,new V.W(0.7,0.7,0.7))
p=k.z
p.sax(0,new V.W(0.3,0.3,0.3))
p=k.z
p.cM(new A.a_(!0,!1,!1))
p.cN(100)
j=E.kA()
j.saa(0,F.mo())
i=E.kA()
i.saM(U.cW(V.lr(3,3,3,1)))
p=F.kZ(1,c,c,1)
p.c2()
i.saa(0,p)
h=U.kC()
h.n(0,U.lN(!1,s.x))
h.n(0,U.cW(V.lq(3.141592653589793)))
h.n(0,U.cW(V.ls(0,0,5)))
g=E.kA()
p=U.kC()
p.n(0,U.cW(V.lr(0.1,0.1,0.1,1)))
p.n(0,r)
g.saM(p)
g.saa(0,F.l_(0,!1,!0,40,1))
p=O.lp()
m=p.f
m.sax(0,new V.W(1,1,1))
g.sb4(p)
p=new M.d0()
p.a=!0
m=O.kx(E.aM)
p.e=m
m.b7(p.geQ(),p.geS())
p.y=p.x=p.r=p.f=null
f=X.n2(c)
e=new X.dm()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saM(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.A().a)){e.c=1.0471975511965976
m=new D.B("fov",m,1.0471975511965976)
m.b=!0
e.aF(m)}m=e.d
if(!(Math.abs(m-0.1)<$.A().a)){e.d=0.1
m=new D.B("near",m,0.1)
m.b=!0
e.aF(m)}m=e.e
if(!(Math.abs(m-2000)<$.A().a)){e.e=2000
m=new D.B("far",m,2000)
m.b=!0
e.aF(m)}m=p.b
if(m!==e){if(m!=null)m.gw().L(0,p.gam())
n=p.b
p.b=e
e.gw().n(0,p.gam())
m=new D.B("camera",n,p.b)
m.b=!0
p.at(m)}m=p.c
if(m!==f){if(m!=null)m.gw().L(0,p.gam())
n=p.c
p.c=f
f.gw().n(0,p.gam())
m=new D.B("target",n,p.c)
m.b=!0
p.at(m)}p.sb4(c)
p.sb4(k)
p.e.n(0,j)
p.e.n(0,i)
p.e.n(0,g)
p.b.saM(h)
m=s.d
if(m!==p){if(m!=null)m.gw().L(0,s.gco())
s.d=p
p.gw().n(0,s.gco())
s.cp()}p=new V.hH("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
p.aW(0,"Cube",new L.kd(j))
p.aW(0,"Cylinder",new L.ke(j))
p.aW(0,"Cone",new L.kf(j))
p.aW(0,"Sphere",new L.kg(j))
p.cU(0,"Toroid",new L.kh(j),!0)
p.aW(0,"Knot",new L.ki(j))
u=s.Q
if(u==null)u=s.Q=D.P()
p=u.b
u=p==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):p
u.push(new L.kj(b,k))
V.pc(s)},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b}},O={
kx:function(a){var u=new O.b0([a])
u.bt(a)
return u},
b0:function b0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c7:function c7(){this.b=this.a=null},
lp:function(){var u,t=new O.dc(),s=O.kx(V.aP)
t.e=s
s.b7(t.geJ(),t.geL())
s=new O.av(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.f=s
s=new O.av(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.r=s
s=new O.av(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.x=s
s=new O.av(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.y=s
s=new O.h9(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=100
t.z=s
s=new O.h5(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.av(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.cx=s
s=new O.h8(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=1
t.cy=s
s=new O.h4(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.d9()
s.bt(D.a5)
s.e=H.b([],[D.eX])
s.f=H.b([],[D.fg])
s.r=H.b([],[D.hE])
s.x=H.b([],[D.bB])
s.z=s.y=null
s.ci(s.geH(),s.gfi(),s.gfm())
t.dx=s
u=new O.h7()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.P():u
s.n(0,t.gfC())
s=t.dx
u=s.z
s=u==null?s.z=D.P():u
s.n(0,t.gea())
t.fr=null
return t},
dc:function dc(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
h4:function h4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dd:function dd(){},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
av:function av(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(){var _=this
_.e=_.d=_.c=_.b=null},
h8:function h8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dz:function dz(){}},E={
kA:function(){var u,t=new E.aM()
t.a=""
t.b=!0
u=O.kx(E.aM)
t.y=u
u.b7(t.ghD(),t.ghG())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.saa(0,null)
t.sb4(null)
t.saM(null)
return t},
lV:function(){if(J.ks(window.navigator.vendor,"Google"))return C.H
if(J.ks(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.aq(u).D(u,"Trident")||C.a.D(u,"Edge"))return C.u
if(J.ks(window.navigator.appName,"Microsoft"))return C.u
return C.I},
lW:function(){var u=window.navigator.appVersion
if(J.aq(u).D(u,"Win"))return C.a2
if(C.a.D(u,"Mac"))return C.C
if(C.a.D(u,"Linux"))return C.a3
return C.a4},
ny:function(a,b){var u=new E.hK(a)
u.e0(a,b)
return u},
nF:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibp)return E.lF(a,!0,!0,!0,!1)
u=W.kw()
t=u.style
t.width="100%"
t.height="100%"
s.gbQ(a).n(0,u)
return E.lF(u,!0,!0,!0,!1)},
lF:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dB(),o=C.i.cf(a,"webgl2",P.nd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.u("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.ny(o,a)
u=new T.ii(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dK(a)
t=new X.fP()
t.d=P.c5(P.w)
u.b=t
t=new X.ho(u)
t.f=0
t.r=V.bb()
t.x=V.bb()
t.ch=t.Q=1
u.c=t
t=new X.fY(u)
t.r=0
t.x=V.bb()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ip(u)
t.f=V.bb()
t.r=V.bb()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dx,P.a1]])
t=$.fp
u.Q=(t==null?$.fp=new E.dW(E.lV(),E.lW()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.Y(r,"contextmenu",u.geU(),!1))
u.z.push(W.Y(a,"focus",u.gf_(),!1))
u.z.push(W.Y(a,"blur",u.geN(),!1))
u.z.push(W.Y(r,"keyup",u.gf3(),!1))
u.z.push(W.Y(r,"keydown",u.gf1(),!1))
u.z.push(W.Y(a,"mousedown",u.gf7(),!1))
u.z.push(W.Y(a,"mouseup",u.gfb(),!1))
u.z.push(W.Y(a,q,u.gf9(),!1))
s=u.z
W.ky(a)
W.ky(a)
s.push(W.Y(a,W.ky(a),u.gfd(),!1))
u.z.push(W.Y(r,q,u.geW(),!1))
u.z.push(W.Y(r,"mouseup",u.geY(),!1))
u.z.push(W.Y(r,"pointerlockchange",u.gff(),!1))
u.z.push(W.Y(a,"touchstart",u.gft(),!1))
u.z.push(W.Y(a,"touchend",u.gfo(),!1))
u.z.push(W.Y(a,"touchmove",u.gfq(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ab(Date.now(),!1)
p.db=0
p.cK()
return p},
f_:function f_(){},
aM:function aM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(a){this.b=a},
bx:function bx(a){this.b=a},
dW:function dW(a,b){this.a=a
this.b=b},
hK:function hK(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
dB:function dB(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ik:function ik(a){this.a=a}},Z={
kQ:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.dN(b,u)},
ai:function(a){return new Z.bg(a)},
dN:function dN(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j5:function j5(a){this.a=a},
cS:function cS(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
P:function(){var u=new D.br()
u.d=0
return u},
f2:function f2(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
Z:function Z(){this.b=null},
bt:function bt(){this.b=null},
bu:function bu(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eX:function eX(){},
fg:function fg(){},
a5:function a5(){},
d9:function d9(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hE:function hE(){},
bB:function bB(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={cT:function cT(a,b){this.a=a
this.b=b},d8:function d8(a,b){this.a=a
this.b=b},fP:function fP(){this.d=this.b=this.a=null},db:function db(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},b8:function b8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ho:function ho(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hF:function hF(){},dF:function dF(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ip:function ip(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dK:function dK(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n2:function(a){var u=new X.fA(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lC
if(t==null){t=V.lB(0,0,1,1)
$.lC=t}u.r=t
return u},
kv:function kv(){},
fA:function fA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){}},V={
ph:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b6(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.af("null",c)
return C.a.af(C.d.dK(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.af(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
l4:function(a){return C.d.i2(Math.pow(2,C.W.c3(Math.log(H.oP(a))/Math.log(2))))},
df:function(){var u=$.lt
return u==null?$.lt=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ls:function(a,b,c){return V.aQ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lr:function(a,b,c,d){return V.aQ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lq:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aQ(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bb:function(){var u=$.lw
return u==null?$.lw=new V.a7(0,0):u},
lx:function(){var u=$.ah
return u==null?$.ah=new V.R(0,0,0):u},
lB:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dq(a,b,c,d)},
cp:function(){var u=$.lR
return u==null?$.lR=new V.z(0,0,0):u},
nO:function(){var u=$.iR
return u==null?$.iR=new V.z(-1,0,0):u},
lS:function(){var u=$.iS
return u==null?$.iS=new V.z(0,1,0):u},
lT:function(){var u=$.iT
return u==null?$.iT=new V.z(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(a){this.a=a},
de:function de(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aP:function aP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pc:function(a){P.nG(C.T,new V.kl(a))},
nA:function(a){var u=new V.hX()
u.e3(a,!0)
return u},
cU:function cU(){},
kl:function kl(a){this.a=a},
fe:function fe(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fC:function fC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fD:function fD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hC:function hC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hH:function hH(a){this.a=a
this.c=null},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(){this.b=this.a=null},
hZ:function hZ(a){this.a=a},
hY:function hY(a){this.a=a},
i_:function i_(a){this.a=a}},U={
lj:function(){var u=new U.f4()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cW:function(a){var u=new U.cV()
u.a=a
return u},
kC:function(){var u=new U.c0()
u.bt(U.am)
u.b7(u.ge6(),u.gfk())
u.e=null
u.f=V.df()
u.r=0
return u},
lN:function(a,b){var u,t,s,r=new U.dL(),q=U.lj()
q.sdN(0,!0)
q.sdl(6.283185307179586)
q.sdn(0)
q.sa2(0,0)
q.sdm(100)
q.sX(0)
q.sd1(0.5)
r.b=q
u=r.gb9()
q.gw().n(0,u)
q=U.lj()
q.sdN(0,!0)
q.sdl(6.283185307179586)
q.sdn(0)
q.sa2(0,0)
q.sdm(100)
q.sX(0)
q.sd1(0.5)
r.c=q
q.gw().n(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bw(a,!1,!1)
s=r.d
r.d=t
q=new D.B("modifiers",s,t)
q.b=!0
r.W(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.B("invertX",q,!1)
q.b=!0
r.W(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.B("invertY",q,!1)
q.b=!0
r.W(q)}r.h_(b)
return r},
f4:function f4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cV:function cV(){this.b=this.a=null},
c0:function c0(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
dL:function dL(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d0:function d0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nh:function(a,b){var u=a.aZ,t=new A.h3(b,u)
t.e2(b,u)
t.e_(a,b)
return t},
ni:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gak(a2)+a3.gak(a3)+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+"_"
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
e=$.aZ()
if(j){u=$.aY()
e=new Z.bg(e.a|u.a)}if(i){u=$.aX()
e=new Z.bg(e.a|u.a)}if(h){u=$.aW()
e=new Z.bg(e.a|u.a)}return new A.h6(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jX:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jY:function(a,b,c){var u
A.jX(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eN(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oo:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jX(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
ok:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jY(b,t,"ambient")
b.a+="\n"},
om:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jY(b,t,"diffuse")
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
op:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jY(b,t,"invDiffuse")
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
ov:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jY(b,t,"specular")
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
or:function(a,b){var u,t,s
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
ot:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jX(b,t,"reflect")
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
ou:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jX(b,t,"refract")
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
ol:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eN(t)
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
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eN(t)
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
os:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eN(t)
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
ow:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eN(t)
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
if(o){u=$.fp
if(u==null)u=$.fp=new E.dW(E.lV(),E.lW())
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
oq:function(a,b){var u,t
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
ox:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.S("")
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
A.oo(a,j)
A.ok(a,j)
A.om(a,j)
A.op(a,j)
A.ov(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ot(a,j)
A.ou(a,j)}A.or(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.ol(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.on(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.os(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.ow(a,q[o],j)
A.oq(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
oy:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bf+"];\n"
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
oA:function(a,b){var u
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
oz:function(a,b){var u
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
oC:function(a,b){var u,t
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
oD:function(a,b){var u,t
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
oB:function(a,b){var u
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
oE:function(a,b){var u
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
eN:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
kN:function(a,b,c,d,e){var u=new A.iw(a,c,e)
u.f=d
P.ne(d,0,P.w)
return u},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){var _=this
_.ii=_.ih=_.bg=_.aZ=_.bf=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iw=_.iv=_.iu=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.it=_.is=_.d9=_.ir=_.iq=_.d8=_.d7=_.ip=_.io=_.d6=_.d5=_.im=_.il=_.d4=_.ik=_.ij=_.d3=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cQ:function cQ(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bf=b3
_.aZ=b4
_.bg=b5},
ck:function ck(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cl:function cl(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cn:function cn(a,b,c,d,e,f,g,h,i,j){var _=this
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
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dH:function dH(){},
iB:function iB(a){this.a=a},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kZ:function(a,b,c,d){var u=F.kL()
F.cE(u,b,c,d,a,1,0,0,1)
F.cE(u,b,c,d,a,0,1,0,3)
F.cE(u,b,c,d,a,0,0,1,2)
F.cE(u,b,c,d,a,-1,0,0,0)
F.cE(u,b,c,d,a,0,-1,0,0)
F.cE(u,b,c,d,a,0,0,-1,3)
u.ap()
return u},
jS:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cE:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.z(u+a3,t+a1,s+a2)
q=new V.z(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.z(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jS(i)
l=F.jS(h)
k=F.l7(d,a0,new F.jR(j,F.jS(g),F.jS(f),l,m,c),b)
if(k!=null)a.b1(k)},
md:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kL()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bf])
q=u.a
p=new V.z(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
r.push(q.fX(new V.bc(a,-1,-1,-1),new V.as(1,1,1,1),new V.R(0,0,c),new V.z(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.z(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dM(new V.bc(a,-1,-1,-1),null,new V.as(i,g,h,1),new V.R(m*k,l*k,c),new V.z(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.fV(r)
return u},
l_:function(a,b,c,d,e){return F.oT(b,c,1,new F.k0(a,e),d)},
oT:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.l7(c,e,new F.k2(d),null)
if(u==null)return
u.ap()
u.bL()
if(b)u.b1(F.md(3,!1,1,new F.k3(d),e))
if(a)u.b1(F.md(1,!0,-1,new F.k4(d),e))
return u},
pd:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.km()
t=F.kZ(a,null,new F.kn(s,1),b)
t.bL()
return t},
mo:function(){return F.mc(15,30,0.5,1,new F.kp())},
p6:function(){return F.mc(12,120,0.3,1,new F.kc(3,2))},
mc:function(a,b,c,d,e){var u=F.l7(a,b,new F.k1(e,d,b,c),null)
if(u==null)return
u.ap()
u.bL()
return u},
l7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kL()
t=H.b([],[F.bf])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dM(g,g,new V.as(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bT(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dM(g,g,new V.as(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bT(d))}}u.d.fW(a+1,b+1,t)
return u},
bZ:function(a,b,c){var u=new F.b2(),t=a.a
if(t==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.u("May not create a face with vertices attached to different shapes."))
u.bJ(a)
u.bK(b)
u.fI(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
na:function(a,b){var u=new F.c4(),t=a.a
if(t==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.u("May not create a line with vertices attached to different shapes."))
u.bJ(a)
u.bK(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kL:function(){var u=new F.hT(),t=new F.iU(u)
t.b=!1
t.c=H.b([],[F.bf])
u.a=t
t=new F.hW(u)
t.b=H.b([],[F.cc])
u.b=t
t=new F.hV(u)
t.b=H.b([],[F.c4])
u.c=t
t=new F.hU(u)
t.b=H.b([],[F.b2])
u.d=t
u.e=null
return u},
dM:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bf(),r=new F.j1()
r.b=H.b([],[F.cc])
s.b=r
r=new F.iY()
u=[F.c4]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iV()
u=[F.b2]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mC()
s.e=0
r=$.aZ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aY().a)!==0?e:t
s.x=(u&$.aX().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.mD().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.aW().a)!==0?a:t
return s},
jR:function jR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k0:function k0(a,b){this.a=a
this.b=b},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
km:function km(){},
kn:function kn(a,b){this.a=a
this.b=b},
kp:function kp(){},
kc:function kc(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(){},
i0:function i0(){},
c4:function c4(){this.b=this.a=null},
fR:function fR(){},
iv:function iv(){},
cc:function cc(){this.a=null},
hT:function hT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
bf:function bf(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
iU:function iU(a){this.a=a
this.c=this.b=null},
iV:function iV(){this.d=this.c=this.b=null},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(){this.c=this.b=null},
j_:function j_(){},
iZ:function iZ(){},
j0:function j0(){},
hw:function hw(){},
j1:function j1(){this.b=null}},T={dA:function dA(){},ig:function ig(){},ih:function ih(){var _=this
_.y=_.d=_.c=_.b=_.a=null},ii:function ii(a){var _=this
_.a=a
_.e=_.d=_.b=null},ij:function ij(a,b,c,d,e,f,g){var _=this
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
H.kG.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cd(a)},
i:function(a){return"Instance of '"+H.e(H.ce(a))+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaG:1}
J.d6.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.d7.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$in8:1}
J.hB.prototype={}
J.bG.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.mq()]
if(u==null)return this.dX(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b3.prototype={
ca:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dp(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aK(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hy:function(a){return this.j(a,"")},
hq:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aK(a))}return u},
hr:function(a,b,c){return this.hq(a,b,c,null)},
hp:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aK(a))}throw H.c(H.fJ())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dT:function(a,b,c){if(b<0||b>a.length)throw H.c(P.X(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.X(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aH(a,0)])
return H.b(a.slice(b,c),[H.aH(a,0)])},
gho:function(a){if(a.length>0)return a[0]
throw H.c(H.fJ())},
gaq:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fJ())},
cX:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aK(a))}return!1},
aS:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.nD(a,b==null?J.oh():b)},
dS:function(a){return this.aS(a,null)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
i:function(a){return P.kD(a,"[","]")},
gS:function(a){return new J.a4(a,a.length)},
gI:function(a){return H.cd(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kt(b,u,null))
if(b<0)throw H.c(P.X(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$iq:1,
$ij:1,
$in:1}
J.kF.prototype={}
J.a4.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c3.prototype={
aK:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ad(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
i2:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.y(""+a+".toInt()"))},
c3:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dK:function(a,b){var u
if(b>20)throw H.c(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
b5:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b6:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cP(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.cP(a,b)},
cP:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aI:function(a,b){var u
if(a>0)u=this.cO(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fM:function(a,b){if(b<0)throw H.c(H.ad(b))
return this.cO(a,b)},
cO:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iaa:1}
J.d5.prototype={$iw:1}
J.d4.prototype={}
J.b4.prototype={
U:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.p(H.bP(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.kt(b,null,null))
return a+b},
aO:function(a,b,c,d){var u,t
c=P.aT(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ad(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ad(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dp(b,null))
if(b>c)throw H.c(P.dp(b,null))
if(c>a.length)throw H.c(P.dp(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
i5:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bh:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dg:function(a,b){return this.bh(a,b,0)},
h8:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.X(c,0,u,null,null))
return H.mm(a,b,c)},
D:function(a,b){return this.h8(a,b,0)},
aK:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ad(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ih:1}
H.m.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)},
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$an:function(){return[P.w]}}
H.q.prototype={}
H.da.prototype={
gS:function(a){return new H.b6(this,this.gl(this))},
bq:function(a,b){return this.dW(0,b)}}
H.b6.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.aq(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aK(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.c6.prototype={
gS:function(a){return new H.h1(J.aI(this.a),this.b)},
gl:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eO(this.a,b))},
$aj:function(a,b){return[b]}}
H.fm.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.h1.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.h2.prototype={
gl:function(a){return J.af(this.a)},
J:function(a,b){return this.b.$1(J.eO(this.a,b))},
$aq:function(a,b){return[b]},
$ada:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cr.prototype={
gS:function(a){return new H.j6(J.aI(this.a),this.b)}}
H.j6.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d1.prototype={}
H.iG.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dI.prototype={}
H.f6.prototype={
i:function(a){return P.kK(this)},
m:function(a,b,c){return H.mY()},
$iQ:1}
H.f7.prototype={
gl:function(a){return this.a},
bR:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bR(0,b))return
return this.cC(b)},
cC:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cC(s))}}}
H.it.prototype={
ae:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hx.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fO.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iF.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kq.prototype={
$1:function(a){if(!!J.N(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.em.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bW.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cJ(t==null?"unknown":t)+"'"},
gi9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ic.prototype={}
H.i4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cJ(u)+"'"}}
H.bU.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cd(this.a)
else u=typeof t!=="object"?J.cN(t):H.cd(t)
return(u^H.cd(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ce(u))+"'")}}
H.f1.prototype={
i:function(a){return this.a}}
H.hQ.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghx:function(a){return this.a===0},
ga_:function(a){return new H.fT(this,[H.aH(this,0)])},
gi8:function(a){var u=this
return H.ng(u.ga_(u),new H.fN(u),H.aH(u,0),H.aH(u,1))},
bR:function(a,b){var u=this.b
if(u==null)return!1
return this.en(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.hv(b)},
hv:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cE(r,s.dh(a))
t=s.di(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cs(u==null?s.b=s.bB():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cs(t==null?s.c=s.bB():t,b,c)}else s.hw(b,c)},
hw:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bB()
u=r.dh(a)
t=r.cE(q,u)
if(t==null)r.bH(q,u,[r.bC(a,b)])
else{s=r.di(t,a)
if(s>=0)t[s].b=b
else t.push(r.bC(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aK(u))
t=t.c}},
cs:function(a,b,c){var u=this.ba(a,b)
if(u==null)this.bH(a,b,this.bC(b,c))
else u.b=c},
ez:function(){this.r=this.r+1&67108863},
bC:function(a,b){var u,t=this,s=new H.fS(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ez()
return s},
dh:function(a){return J.cN(a)&0x3ffffff},
di:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
i:function(a){return P.kK(this)},
ba:function(a,b){return a[b]},
cE:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
er:function(a,b){delete a[b]},
en:function(a,b){return this.ba(a,b)!=null},
bB:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bH(t,u,t)
this.er(t,u)
return t}}
H.fN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aH(u,1),args:[H.aH(u,0)]}}}
H.fS.prototype={}
H.fT.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fU(u,u.r)
t.c=u.e
return t}}
H.fU.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aK(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k8.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k9.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ka.prototype={
$1:function(a){return this.a(a)}}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inw:1}
H.c9.prototype={$ic9:1}
H.b9.prototype={$ib9:1}
H.dg.prototype={
gl:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.ca.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.J]},
$ax:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$in:1,
$an:function(){return[P.J]}}
H.dh.prototype={
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]}}
H.hp.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.hq.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.hr.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.hs.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.ht.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.di.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cb.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
$icb:1,
$ibD:1}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
P.j8.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j7.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j9.prototype={
$0:function(){this.a.$0()}}
P.ja.prototype={
$0:function(){this.a.$0()}}
P.es.prototype={
ec:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jH(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ed:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.jG(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idC:1}
P.jH.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jG.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dZ(u,q)}s.c=r
t.d.$1(s)}}
P.bH.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bI.prototype={
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
if(t instanceof P.bH){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aI(u)
if(!!r.$ibI){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jD.prototype={
gS:function(a){return new P.bI(this.a())}}
P.dO.prototype={}
P.dx.prototype={}
P.i7.prototype={}
P.dC.prototype={}
P.jQ.prototype={}
P.jZ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dl():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jo.prototype={
hZ:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.oG(r,r,this,a)}catch(s){u=H.ae(s)
t=H.l1(s)
P.m6(r,r,this,u,t)}},
i_:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.oH(r,r,this,a,b)}catch(s){u=H.ae(s)
t=H.l1(s)
P.m6(r,r,this,u,t)}},
i0:function(a,b){return this.i_(a,b,null)},
h4:function(a){return new P.jp(this,a)},
cZ:function(a,b){return new P.jq(this,a,b)}}
P.jp.prototype={
$0:function(){return this.a.hZ(this.b)}}
P.jq.prototype={
$1:function(a){return this.a.i0(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jl.prototype={
gS:function(a){var u=new P.e3(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.em(b)
return t}},
em:function(a){var u=this.d
if(u==null)return!1
return this.by(this.cD(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cu(u==null?s.b=P.kR():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cu(t==null?s.c=P.kR():t,b)}else return s.ef(0,b)},
ef:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kR()
u=s.cw(b)
t=r[u]
if(t==null)r[u]=[s.bv(b)]
else{if(s.by(t,b)>=0)return!1
t.push(s.bv(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fw(this.c,b)
else return this.fv(0,b)},
fv:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cD(r,b)
t=s.by(u,b)
if(t<0)return!1
s.cR(u.splice(t,1)[0])
return!0},
cu:function(a,b){if(a[b]!=null)return!1
a[b]=this.bv(b)
return!0},
fw:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cR(u)
delete a[b]
return!0},
cv:function(){this.r=1073741823&this.r+1},
bv:function(a){var u,t=this,s=new P.jm(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cv()
return s},
cR:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cv()},
cw:function(a){return J.cN(a)&1073741823},
cD:function(a,b){return a[this.cw(b)]},
by:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.jm.prototype={}
P.e3.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aK(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fI.prototype={}
P.fV.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fW.prototype={$iq:1,$ij:1,$in:1}
P.x.prototype={
gS:function(a){return new H.b6(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
i4:function(a,b){var u,t,s=this,r=H.b([],[H.oZ(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i3:function(a){return this.i4(a,!0)},
hm:function(a,b,c,d){var u
P.aT(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kD(a,"[","]")}}
P.fZ.prototype={}
P.h_.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a0.prototype={
G:function(a,b){var u,t
for(u=J.aI(this.ga_(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.af(this.ga_(a))},
i:function(a){return P.kK(a)},
$iQ:1}
P.jI.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.h0.prototype={
h:function(a,b){return J.bT(this.a,b)},
m:function(a,b,c){J.kr(this.a,b,c)},
G:function(a,b){J.lb(this.a,b)},
gl:function(a){return J.af(this.a)},
i:function(a){return J.a3(this.a)},
$iQ:1}
P.dJ.prototype={}
P.js.prototype={
ac:function(a,b){var u
for(u=J.aI(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.kD(this,"{","}")},
J:function(a,b){var u,t,s
P.lA(b,"index")
for(u=P.nY(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.e4.prototype={}
P.ey.prototype={}
P.eY.prototype={
hC:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aT(a0,a1,b.length)
u=$.mF()
if(typeof a1!=="number")return H.v(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.k7(C.a.F(b,n))
j=H.k7(C.a.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.S("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bz(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.lf(b,p,a1,q,o,f)
else{e=C.c.b6(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aO(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lf(b,p,a1,q,o,d)
else{e=C.c.b6(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aO(b,a1,a1,e===2?"==":"=")}return b}}
P.eZ.prototype={}
P.f3.prototype={}
P.f8.prototype={}
P.fo.prototype={}
P.fG.prototype={
i:function(a){return this.a}}
P.fF.prototype={
eo:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mQ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iO.prototype={
ghl:function(){return C.R}}
P.iQ.prototype={
bS:function(a){var u,t,s,r=P.aT(0,null,a.length)
if(typeof r!=="number")return r.M()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jO(t)
if(s.eu(a,0,r)!==r)s.cT(J.mM(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oe(0,s.b,t.length)))}}
P.jO.prototype={
cT:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eu:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cT(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iP.prototype={
bS:function(a){var u,t,s,r,q,p,o,n,m=P.nJ(!1,a,0,null)
if(m!=null)return m
u=P.aT(0,null,J.af(a))
t=P.m8(a,0,u)
if(t>0){s=P.ch(a,0,t)
if(t===u)return s
r=new P.S(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.S("")
o=new P.jN(!1,r)
o.c=p
o.h9(a,q,u)
if(o.e>0){H.p(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bz(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jN.prototype={
h9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.aq(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a8()
if((r&192)!==128){q=P.T(k+C.c.b5(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.T("Overlong encoding of 0x"+C.c.b5(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.b5(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bz(j)
l.c=!1}if(typeof c!=="number")return H.v(c)
q=s<c
for(;q;){p=P.m8(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ch(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.b5(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.b5(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aG.prototype={}
P.ab.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aK:function(a,b){return C.c.aK(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.aI(u,30))&1073741823},
i:function(a){var u=this,t=P.mZ(H.ns(u)),s=P.cX(H.nq(u)),r=P.cX(H.nm(u)),q=P.cX(H.nn(u)),p=P.cX(H.np(u)),o=P.cX(H.nr(u)),n=P.n_(H.no(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.b1.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aK:function(a,b){return C.c.aK(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fl(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.fk().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fk.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fl.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bq.prototype={}
P.dl.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbx()+o+u
if(!q.a)return t
s=q.gbw()
r=P.kB(q.b)
return t+s+": "+r}}
P.bA.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fH.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iD.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f5.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kB(u)+"."}}
P.hA.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dv.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.fd.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dX.prototype={
i:function(a){return"Exception: "+this.a}}
P.fz.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.U(f,q)
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
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fB.prototype={}
P.w.prototype={}
P.j.prototype={
bq:function(a,b){return new H.cr(this,b,[H.l0(this,"j",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.t();)++u
return u},
gaD:function(a){var u,t=this.gS(this)
if(!t.t())throw H.c(H.fJ())
u=t.gC(t)
if(t.t())throw H.c(H.n5())
return u},
J:function(a,b){var u,t,s
P.lA(b,"index")
for(u=this.gS(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.n4(this,"(",")")}}
P.fK.prototype={}
P.n.prototype={$iq:1,$ij:1}
P.Q.prototype={}
P.ba.prototype={
gI:function(a){return P.a1.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
p:function(a,b){return this===b},
gI:function(a){return H.cd(this)},
i:function(a){return"Instance of '"+H.e(H.ce(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.S.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iM.prototype={
$2:function(a,b){var u,t,s,r=J.cH(b).dg(b,"=")
if(r===-1){if(b!=="")J.kr(a,P.kV(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.kr(a,P.kV(u,0,u.length,s,!0),P.kV(t,0,t.length,s,!0))}return a}}
P.iJ.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iK.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iL.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eM(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bJ.prototype={
gdM:function(){return this.b},
gc4:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbl:function(a){var u=this.d
if(u==null)return P.m_(this.a)
return u},
gc8:function(a){var u=this.f
return u==null?"":u},
gda:function(){var u=this.r
return u==null?"":u},
dG:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a3(u,"/"))u="/"+u
s=P.kT(null,0,0,b)
return new P.bJ(q,o,m,n,u,s,r.r)},
gc9:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dJ(P.lM(t==null?"":t),[u,u])
t=u}return t},
gdc:function(){return this.c!=null},
gdf:function(){return this.f!=null},
gdd:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.N(b).$ikO)if(s.a==b.gbr())if(s.c!=null===b.gdc())if(s.b==b.gdM())if(s.gc4(s)==b.gc4(b))if(s.gbl(s)==b.gbl(b))if(s.e===b.gdC(b)){u=s.f
t=u==null
if(!t===b.gdf()){if(t)u=""
if(u===b.gc8(b)){u=s.r
t=u==null
if(!t===b.gdd()){if(t)u=""
u=u===b.gda()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.i(0)):u},
$ikO:1,
gbr:function(){return this.a},
gdC:function(a){return this.e}}
P.jJ.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jK.prototype={
$1:function(a){return P.ez(C.a0,a,C.e,!1)}}
P.jM.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ez(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ez(C.h,b,C.e,!0))}}}
P.jL.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aI(b),t=this.a;u.t();)t.$2(a,u.gC(u))}}
P.iI.prototype={
gdL:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bh(u,"?",o)
s=u.length
if(t>=0){r=P.cD(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.je("data",p,p,p,P.cD(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jU.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jT.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mN(u,0,96,b)
return u},
$S:17}
P.jV.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jW.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jv.prototype={
gdc:function(){return this.c>0},
gde:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdf:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdd:function(){return this.r<this.a.length},
gcF:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcG:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbr:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcF())q=t.x="http"
else if(t.gcG()){t.x="https"
q="https"}else if(q===4&&C.a.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a3(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdM:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gc4:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbl:function(a){var u,t=this
if(t.gde()){u=t.d
if(typeof u!=="number")return u.A()
return P.eM(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcF())return 80
if(t.gcG())return 443
return 0},
gdC:function(a){return C.a.q(this.a,this.e,this.f)},
gc8:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.q(this.a,u+1,t):""},
gda:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gc9:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.a1
t=P.h
return new P.dJ(P.lM(u.gc8(u)),[t,t])},
dG:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbr(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gde()?p.gbl(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.kT(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bJ(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ikO&&this.a===b.i(0)},
i:function(a){return this.a},
$ikO:1}
P.je.prototype={}
W.o.prototype={}
W.eP.prototype={
gl:function(a){return a.length}}
W.eQ.prototype={
i:function(a){return String(a)}}
W.eR.prototype={
i:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={$ibn:1}
W.bp.prototype={
cf:function(a,b,c){if(c!=null)return a.getContext(b,P.oQ(c))
return a.getContext(b)},
dP:function(a,b){return this.cf(a,b,null)},
$ibp:1}
W.b_.prototype={
gl:function(a){return a.length}}
W.f9.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bX.prototype={
gl:function(a){return a.length}}
W.fa.prototype={}
W.ag.prototype={}
W.at.prototype={}
W.fb.prototype={
gl:function(a){return a.length}}
W.fc.prototype={
gl:function(a){return a.length}}
W.ff.prototype={
gl:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fh.prototype={
i:function(a){return String(a)}}
W.cZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a8,P.aa]]},
$iC:1,
$aC:function(){return[[P.a8,P.aa]]},
$ax:function(){return[[P.a8,P.aa]]},
$ij:1,
$aj:function(){return[[P.a8,P.aa]]},
$in:1,
$an:function(){return[[P.a8,P.aa]]}}
W.d_.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaC(a))+" x "+H.e(this.gaz(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$ia8&&a.left===u.gbj(b)&&a.top===u.gbn(b)&&this.gaC(a)===u.gaC(b)&&this.gaz(a)===u.gaz(b)},
gI:function(a){return W.lY(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaC(a)),C.d.gI(this.gaz(a)))},
gd_:function(a){return a.bottom},
gaz:function(a){return a.height},
gbj:function(a){return a.left},
gcd:function(a){return a.right},
gbn:function(a){return a.top},
gaC:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iC:1,
$aC:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
W.fj.prototype={
gl:function(a){return a.length}}
W.jc.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.i3(this)
return new J.a4(u,u.length)},
$aq:function(){return[W.O]},
$ax:function(){return[W.O]},
$aj:function(){return[W.O]},
$an:function(){return[W.O]}}
W.O.prototype={
gh3:function(a){return new W.jf(a)},
gbQ:function(a){return new W.jc(a,a.children)},
gd0:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lm
if(u==null){u=H.b([],[W.aR])
t=new W.dk(u)
u.push(W.lX(null))
u.push(W.lZ())
$.lm=t
d=t}else d=u
u=$.ll
if(u==null){u=new W.eA(d)
$.ll=u
c=u}else{u.a=d
c=u}}if($.aL==null){u=document
t=u.implementation.createHTMLDocument("")
$.aL=t
$.kz=t.createRange()
s=$.aL.createElement("base")
s.href=u.baseURI
$.aL.head.appendChild(s)}u=$.aL
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aL
if(!!this.$ibn)r=u.body
else{r=u.createElement(a.tagName)
$.aL.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Z,a.tagName)){$.kz.selectNodeContents(r)
q=$.kz.createContextualFragment(b)}else{r.innerHTML=b
q=$.aL.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aL.body
if(r==null?u!=null:r!==u)J.ld(r)
c.cg(q)
document.adoptNode(q)
return q},
hc:function(a,b,c){return this.ad(a,b,c,null)},
dR:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iO:1,
gdI:function(a){return a.tagName}}
W.fn.prototype={
$1:function(a){return!!J.N(a).$iO}}
W.i.prototype={$ii:1}
W.f.prototype={
fU:function(a,b,c,d){if(c!=null)this.eg(a,b,c,!1)},
eg:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)}}
W.al.prototype={$ial:1}
W.c_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.al]},
$iC:1,
$aC:function(){return[W.al]},
$ax:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]},
$in:1,
$an:function(){return[W.al]},
$ic_:1}
W.fu.prototype={
gl:function(a){return a.length}}
W.fy.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fE.prototype={
gl:function(a){return a.length}}
W.c1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iC:1,
$aC:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$in:1,
$an:function(){return[W.D]}}
W.aN.prototype={$iaN:1,
gd2:function(a){return a.data}}
W.c2.prototype={$ic2:1}
W.bv.prototype={$ibv:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.hi.prototype={
gl:function(a){return a.length}}
W.c8.prototype={$ic8:1}
W.hj.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hk(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hl.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hm(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.hn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$iC:1,
$aC:function(){return[W.aw]},
$ax:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]},
$in:1,
$an:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.a2.prototype={
gaD:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lD("No elements"))
if(t>1)throw H.c(P.lD("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d2(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ax:function(){return[W.D]},
$aj:function(){return[W.D]},
$an:function(){return[W.D]}}
W.D.prototype={
hT:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hX:function(a,b){var u,t
try{u=a.parentNode
J.mK(u,b,a)}catch(t){H.ae(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dV(a):u},
fA:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iC:1,
$aC:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$in:1,
$an:function(){return[W.D]}}
W.ay.prototype={$iay:1,
gl:function(a){return a.length}}
W.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$iC:1,
$aC:function(){return[W.ay]},
$ax:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$in:1,
$an:function(){return[W.ay]}}
W.hO.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hP(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hR.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.i1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iC:1,
$aC:function(){return[W.az]},
$ax:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$in:1,
$an:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.i2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iC:1,
$aC:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$in:1,
$an:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gl:function(a){return a.length}}
W.i5.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.i6(u))
return u},
gl:function(a){return a.length},
$aa0:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i6.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.dy.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=W.n0("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ac(0,new W.a2(u))
return t}}
W.i9.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaD(u)
s.toString
u=new W.a2(s)
r=u.gaD(u)
t.toString
r.toString
new W.a2(t).ac(0,new W.a2(r))
return t}}
W.ia.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bs(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaD(u)
t.toString
s.toString
new W.a2(t).ac(0,new W.a2(s))
return t}}
W.ci.prototype={$ici:1}
W.aC.prototype={$iaC:1}
W.ao.prototype={$iao:1}
W.id.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iC:1,
$aC:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$in:1,
$an:function(){return[W.ao]}}
W.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iC:1,
$aC:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]}}
W.il.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bC.prototype={$ibC:1}
W.iq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iC:1,
$aC:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$in:1,
$an:function(){return[W.aD]}}
W.ir.prototype={
gl:function(a){return a.length}}
W.bd.prototype={}
W.iN.prototype={
i:function(a){return String(a)}}
W.j4.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
ghf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghe:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibh:1}
W.cs.prototype={
fB:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
es:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iC:1,
$aC:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$in:1,
$an:function(){return[W.H]}}
W.dR.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$ia8&&a.left===u.gbj(b)&&a.top===u.gbn(b)&&a.width===u.gaC(b)&&a.height===u.gaz(b)},
gI:function(a){return W.lY(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaz:function(a){return a.height},
gaC:function(a){return a.width}}
W.ji.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$iC:1,
$aC:function(){return[W.au]},
$ax:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$in:1,
$an:function(){return[W.au]}}
W.e9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iC:1,
$aC:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$in:1,
$an:function(){return[W.D]}}
W.jw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iC:1,
$aC:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$in:1,
$an:function(){return[W.aB]}}
W.jB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iC:1,
$aC:function(){return[W.an]},
$ax:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$in:1,
$an:function(){return[W.an]}}
W.jb.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa0:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.jf.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga_(this).length}}
W.jg.prototype={}
W.jh.prototype={
$1:function(a){return this.a.$1(a)}}
W.ct.prototype={
e4:function(a){var u
if($.cu.ghx($.cu)){for(u=0;u<262;++u)$.cu.m(0,C.Y[u],W.p0())
for(u=0;u<12;++u)$.cu.m(0,C.p[u],W.p1())}},
aJ:function(a){return $.mG().D(0,W.bY(a))},
ao:function(a,b,c){var u=$.cu.h(0,H.e(W.bY(a))+"::"+b)
if(u==null)u=$.cu.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaR:1}
W.K.prototype={
gS:function(a){return new W.d2(a,this.gl(a))}}
W.dk.prototype={
aJ:function(a){return C.b.cX(this.a,new W.hv(a))},
ao:function(a,b,c){return C.b.cX(this.a,new W.hu(a,b,c))},
$iaR:1}
W.hv.prototype={
$1:function(a){return a.aJ(this.a)}}
W.hu.prototype={
$1:function(a){return a.ao(this.a,this.b,this.c)}}
W.eh.prototype={
e9:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.bq(0,new W.jt())
t=b.bq(0,new W.ju())
this.b.ac(0,u)
s=this.c
s.ac(0,C.y)
s.ac(0,t)},
aJ:function(a){return this.a.D(0,W.bY(a))},
ao:function(a,b,c){var u=this,t=W.bY(a),s=u.c
if(s.D(0,H.e(t)+"::"+b))return u.d.fY(c)
else if(s.D(0,"*::"+b))return u.d.fY(c)
else{s=u.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iaR:1}
W.jt.prototype={
$1:function(a){return!C.b.D(C.p,a)}}
W.ju.prototype={
$1:function(a){return C.b.D(C.p,a)}}
W.jE.prototype={
ao:function(a,b,c){if(this.dY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.jF.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jC.prototype={
aJ:function(a){var u=J.N(a)
if(!!u.$icf)return!1
u=!!u.$ik
if(u&&W.bY(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aJ(a)},
$iaR:1}
W.d2.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bT(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aR.prototype={}
W.jr.prototype={}
W.eA.prototype={
cg:function(a){new W.jP(this).$2(a,null)},
aV:function(a,b){if(b==null)J.ld(a)
else b.removeChild(a)},
fG:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mO(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ae(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.ae(r)}try{s=W.bY(a)
this.fF(a,b,p,t,s,o,n)}catch(r){if(H.ae(r) instanceof P.aj)throw r
else{this.aV(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aV(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aJ(a)){p.aV(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ao(a,"is",g)){p.aV(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.b(u.slice(0),[H.aH(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ao(a,J.mR(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ici)p.cg(a.content)}}
W.jP.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fG(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aV(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ae(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dQ.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
P.jx.prototype={
c1:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bp:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.N(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$inw)throw H.c(P.iE("structured clone of RegExp"))
if(!!u.$ial)return a
if(!!u.$ibm)return a
if(!!u.$ic_)return a
if(!!u.$iaN)return a
if(!!u.$ic9||!!u.$ib9||!!u.$ic8)return a
if(!!u.$iQ){t=p.c1(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jz(o,p))
return o.a}if(!!u.$in){t=p.c1(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hb(a,t)}if(!!u.$in8){t=p.c1(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hs(a,new P.jA(o,p))
return o.b}throw H.c(P.iE("structured clone of other type"))},
hb:function(a,b){var u,t=J.aq(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.v(s)
u=0
for(;u<s;++u){q=this.bp(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jz.prototype={
$2:function(a,b){this.a.a[a]=this.b.bp(b)},
$S:3}
P.jA.prototype={
$2:function(a,b){this.a.b[a]=this.b.bp(b)},
$S:3}
P.ex.prototype={$iaN:1,
gd2:function(a){return this.a}}
P.k_.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jy.prototype={
hs:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fv.prototype={
gbb:function(){var u=this.b,t=H.l0(u,"x",0)
return new H.c6(new H.cr(u,new P.fw(),[t]),new P.fx(),[t,W.O])},
m:function(a,b,c){var u=this.gbb()
J.mP(u.b.$1(J.eO(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.af(this.gbb().a)},
h:function(a,b){var u=this.gbb()
return u.b.$1(J.eO(u.a,b))},
gS:function(a){var u=P.kJ(this.gbb(),!1,W.O)
return new J.a4(u,u.length)},
$aq:function(){return[W.O]},
$ax:function(){return[W.O]},
$aj:function(){return[W.O]},
$an:function(){return[W.O]}}
P.fw.prototype={
$1:function(a){return!!J.N(a).$iO}}
P.fx.prototype={
$1:function(a){return H.r(a,"$iO")}}
P.jn.prototype={
gcd:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return u+t},
gd_:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia8){t=q.a
if(t==u.gbj(b)){s=q.b
if(s==u.gbn(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcd(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gd_(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cN(t),r=u.b,q=J.cN(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.nX(P.jk(P.jk(P.jk(P.jk(0,s),q),p),t))}}
P.a8.prototype={
gbj:function(a){return this.a},
gbn:function(a){return this.b},
gaC:function(a){return this.c},
gaz:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.fQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aO]},
$ax:function(){return[P.aO]},
$ij:1,
$aj:function(){return[P.aO]},
$in:1,
$an:function(){return[P.aO]}}
P.aS.prototype={$iaS:1}
P.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aS]},
$ax:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$in:1,
$an:function(){return[P.aS]}}
P.hG.prototype={
gl:function(a){return a.length}}
P.cf.prototype={$icf:1}
P.i8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]}}
P.k.prototype={
gbQ:function(a){return new P.fv(a,new W.a2(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aR])
p.push(W.lX(null))
p.push(W.lZ())
p.push(new W.jC())
c=new W.eA(new W.dk(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hc(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaD(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aU.prototype={$iaU:1}
P.is.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$in:1,
$an:function(){return[P.aU]}}
P.e1.prototype={}
P.e2.prototype={}
P.ec.prototype={}
P.ed.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.bD.prototype={$iq:1,
$aq:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]}}
P.eT.prototype={
gl:function(a){return a.length}}
P.eU.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new P.eV(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eV.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eW.prototype={
gl:function(a){return a.length}}
P.bl.prototype={}
P.hz.prototype={
gl:function(a){return a.length}}
P.dP.prototype={}
P.dr.prototype={
i1:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaN)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oR(g))
return}if(!!t.$ic2)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cO("Incorrect number or type of arguments"))}}
P.i3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$in:1,
$an:function(){return[[P.Q,,,]]}}
P.ek.prototype={}
P.el.prototype={}
K.aJ.prototype={
aA:function(a,b){return!0},
i:function(a){return"all"}}
K.d3.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aA(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b7.prototype={}
K.a6.prototype={
aA:function(a,b){return!this.dU(0,b)},
i:function(a){return"!["+this.cl(0)+"]"}}
K.hJ.prototype={
aA:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bz(this.a),t=H.bz(this.b)
return u+".."+t}}
K.hS.prototype={
e1:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.u("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.aG])
for(s=new H.b6(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.kJ(t.ga_(t),!0,u)
C.b.dS(r)
this.a=r},
aA:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.ch(this.a,0,null)}}
L.dw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dG(this.a.k(0,b))
r.a=H.b([],[K.b7])
r.c=!1
this.c.push(r)
return r},
hn:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
i:function(a){return this.b},
cQ:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.D(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga_(n),n=n.gS(n);n.t();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.D(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dD.prototype={
i:function(a){var u=H.l6(this.b,"\n","\\n"),t=H.l6(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dE.prototype={
aB:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.im.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dw(this,b)
u.c=H.b([],[L.dG])
this.a.m(0,b,u)}return u},
P:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dE(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
ce:function(a){return this.i6(a)},
i6:function(a){var u=this
return P.oj(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$ce(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ca(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.hn(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ch(d,0,null)
throw H.c(P.u("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.aT(0,m,d.length)
d.splice(0,m-0)
C.b.ac(c,d)
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
if(g.d!=null){j=P.ch(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dD(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.D(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nV()
case 1:return P.nW(q)}}},L.dD)},
i:function(a){var u,t=new P.S(""),s=this.d
if(s!=null)t.a=s.cQ()+"\n"
for(s=this.a,s=s.gi8(s),s=s.gS(s);s.t();){u=s.gC(s)
if(u!=this.d)t.a+=u.cQ()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dG.prototype={
i:function(a){return this.b.b+": "+this.cl(0)}}
O.b0.prototype={
bt:function(a){this.a=H.b([],[a])
this.c=this.b=null},
ci:function(a,b,c){this.b=b
this.c=a},
b7:function(a,b){return this.ci(a,null,b)},
fh:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eG:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a4(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l0(s,"b0",0)]
if(s.fh(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.eG(t,H.b([b],r))}},
$ij:1}
O.c7.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.P():u},
aE:function(){var u=this.b
if(u!=null)u.K(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.b.gaq(u)
else return V.df()},
dE:function(a){var u=this.a
if(a==null)u.push(V.df())
else u.push(a)
this.aE()},
c7:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}}}
E.f_.prototype={}
E.aM.prototype={
ct:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a4(u,u.length);u.t();){t=u.d
if(t.f==null)t.ct()}},
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().L(0,s.gdv())
u=s.c
if(u!=null)u.gw().n(0,s.gdv())
t=new D.B("shape",r,s.c)
t.b=!0
s.ah(t)}},
sb4:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().L(0,s.gdz())
u=s.f
s.f=a
if(a!=null)a.gw().n(0,s.gdz())
s.ct()
t=new D.B("technique",u,s.f)
t.b=!0
s.ah(t)}},
saM:function(a){var u,t,s=this
if(!J.E(s.r,a)){u=s.r
if(u!=null)u.gw().L(0,s.gdt())
if(a!=null)a.gw().n(0,s.gdt())
s.r=a
t=new D.B("mover",u,a)
t.b=!0
s.ah(t)}},
as:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aR(0,b,s):null
if(!J.E(q,s.x)){u=s.x
s.x=q
t=new D.B("matrix",u,q)
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.as(0,b)
for(r=s.y.a,r=new J.a4(r,r.length);r.t();)r.d.as(0,b)},
aN:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga0(s))
else s.a.push(r.B(0,s.ga0(s)))
s.aE()
a.dF(t.f)
s=a.dy
u=(s&&C.b).gaq(s)
if(u!=null&&t.d!=null)u.hW(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.t();)s.d.aN(a)
a.dD()
a.dx.c7()},
ah:function(a){var u=this.z
if(u!=null)u.K(a)},
Z:function(){return this.ah(null)},
dw:function(a){this.e=null
this.ah(a)},
hJ:function(){return this.dw(null)},
dA:function(a){this.ah(a)},
hK:function(){return this.dA(null)},
du:function(a){this.ah(a)},
hI:function(){return this.du(null)},
ds:function(a){this.ah(a)},
hF:function(){return this.ds(null)},
hE:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdr(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hH:function(a,b){var u,t
for(u=b.gS(b),t=this.gdr();u.t();)u.gC(u).gw().L(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bo.prototype={
i:function(a){return this.b}}
E.bx.prototype={
i:function(a){return this.b}}
E.dW.prototype={}
E.hK.prototype={
e0:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c7()
t=[V.aP]
u.a=H.b([],t)
u.gw().n(0,new E.hL(s))
s.cy=u
u=new O.c7()
u.a=H.b([],t)
u.gw().n(0,new E.hM(s))
s.db=u
u=new O.c7()
u.a=H.b([],t)
u.gw().n(0,new E.hN(s))
s.dx=u
u=H.b([],[O.dz])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.ds])},
ghS:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.B(0,u.ga0(u))
s=u}return s},
dF:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaq(u):a)},
dD:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hL.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hM.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hN.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dB.prototype={
cq:function(a){this.dH()},
cp:function(){return this.cq(null)},
ght:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.lk(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
cK:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.v(r)
u=C.d.c3(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.d.c3(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lG(C.n,s.ghY())}},
dH:function(){if(!this.cx){this.cx=!0
var u=window
C.G.es(u)
C.G.fB(u,W.m9(new E.ik(this),P.aa))}},
hV:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cK()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.lk(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aE()
r=s.db
C.b.sl(r.a,0)
r.aE()
r=s.dx
C.b.sl(r.a,0)
r.aE()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aN(p.e)}s=p.Q
if(s!=null)s.K(null)}catch(q){u=H.ae(q)
t=H.l1(q)
P.l5("Error: "+H.e(u))
P.l5("Stack: "+H.e(t))
throw H.c(u)}}}
E.ik.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hV()}}}
Z.dN.prototype={}
Z.cR.prototype={
bM:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ae(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.j5.prototype={}
Z.cS.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bM:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bM(a)},
i7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aN:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ce(this.c))+"'")+"]"}}
Z.bg.prototype={
gck:function(a){var u=this.a,t=(u&$.aZ().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.aW().a)!==0?t+4:t},
fZ:function(a){var u,t=$.aZ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0)if(u===a)return t
return $.mE()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aZ().a)!==0)u.push("Pos")
if((t&$.aY().a)!==0)u.push("Norm")
if((t&$.aX().a)!==0)u.push("Binm")
if((t&$.bj().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cK().a)!==0)u.push("Clr3")
if((t&$.cL().a)!==0)u.push("Clr4")
if((t&$.bS().a)!==0)u.push("Weight")
if((t&$.aW().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f2.prototype={}
D.br.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.D(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
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
return!0}if(!t)C.b.G(P.kJ(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fr(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.G(u,new D.fs(q))}return!0},
hi:function(){return this.K(null)},
ai:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}}}
D.fr.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fs.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.bt.prototype={}
D.bu.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cT.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cT))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d8.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fP.prototype={
hP:function(a){this.d.n(0,a.a)
return!1},
hL:function(a){this.d.L(0,a.a)
return!1}}
X.db.prototype={}
X.fY.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gbd()
r=new X.b8(a,V.bb(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
c6:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dQ()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aT(a,b))
return!0},
hQ:function(a){return!1},
f6:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.db(c,r.a.gbd(),b)
s.b=!0
t.K(s)
r.y=new P.ab(u,!1)
r.x=V.bb()}}
X.bw.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bw))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b8.prototype={}
X.ho.prototype={
bz:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gbd(),r=new X.b8(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c6:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bz(a,b,!0))
return!0},
b3:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dQ()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bz(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bz(a,b,!1))
return!0},
hR:function(a,b){return!1}}
X.hF.prototype={}
X.dF.prototype={}
X.ip.prototype={
aT:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.bb(),r=u.a.gbd(),q=new X.dF(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hO:function(a){var u=this.b
if(u==null)return!1
u.K(this.aT(a,!0))
return!0},
hM:function(a){var u=this.c
if(u==null)return!1
u.K(this.aT(a,!0))
return!0},
hN:function(a){var u=this.d
if(u==null)return!1
u.K(this.aT(a,!1))
return!0}}
X.dK.prototype={
gbd:function(){var u=this.a,t=C.i.gd0(u).c
t.toString
u=C.i.gd0(u).d
u.toString
return V.lB(0,0,t,u)},
cA:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.bw(t,a.altKey,a.shiftKey))},
aH:function(a){a.shiftKey},
bI:function(a){a.shiftKey},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a7(s-q,r-u)},
aU:function(a){return new V.U(a.movementX,a.movementY)},
bE:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.aj(r.pageX)
C.d.aj(r.pageY)
p=o.left
C.d.aj(r.pageX)
n.push(new V.a7(q-p,C.d.aj(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cT(u,new X.bw(t,a.altKey,a.shiftKey))},
bA:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
f0:function(a){this.f=!0},
eO:function(a){this.f=!1},
eV:function(a){if(this.f&&this.bA(a))a.preventDefault()},
f4:function(a){var u
if(!this.f)return
u=this.cA(a)
this.b.hP(u)},
f2:function(a){var u
if(!this.f)return
u=this.cA(a)
this.b.hL(u)},
f8:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aH(a)
if(r.x){u=r.au(a)
t=r.aU(a)
if(r.d.c6(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.au(a)
s=r.aw(a)
if(r.c.c6(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
r.aH(a)
u=r.au(a)
if(r.x){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b3(u,s))a.preventDefault()},
eZ:function(a){var u,t,s,r=this
if(!r.bA(a)){r.aH(a)
u=r.au(a)
if(r.x){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b3(u,s))a.preventDefault()}},
fa:function(a){var u,t,s,r=this
r.aH(a)
u=r.au(a)
if(r.x){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b2(u,s))a.preventDefault()},
eX:function(a){var u,t,s,r=this
if(!r.bA(a)){r.aH(a)
u=r.au(a)
if(r.x){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b2(u,s))a.preventDefault()}},
fe:function(a){var u,t,s=this
s.aH(a)
u=new V.U((a&&C.F).ghe(a),C.F.ghf(a)).B(0,s.Q)
if(s.x){if(s.d.hQ(u))a.preventDefault()
return}if(s.r)return
t=s.aw(a)
if(s.c.hR(u,t))a.preventDefault()},
fg:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.aw(s.y)
s.d.f6(u,t,r)}},
fu:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bI(a)
u=t.bE(a)
if(t.e.hO(u))a.preventDefault()},
fp:function(a){var u
this.bI(a)
u=this.bE(a)
if(this.e.hM(u))a.preventDefault()},
fs:function(a){var u
this.bI(a)
u=this.bE(a)
if(this.e.hN(u))a.preventDefault()}}
D.eX.prototype={$ia5:1}
D.fg.prototype={$ia5:1}
D.a5.prototype={}
D.d9.prototype={
Y:function(a){var u=this.y
if(u!=null)u.K(a)},
cI:function(a){var u=this.z
if(u!=null)u.K(a)},
f5:function(){return this.cI(null)},
fj:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.e5(s))return!1}return!0},
eI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcH(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bB)this.x.push(q)
p=q.go
if(p==null){p=new D.br()
p.d=0
q.go=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bt()
u.b=!0
this.Y(u)},
fn:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcH();u.t();){s=u.gC(u)
C.b.L(this.e,s)
s.gw().L(0,t)}u=new D.bu()
u.b=!0
this.Y(u)},
e5:function(a){var u=C.b.D(this.x,a)
return u},
$aj:function(){return[D.a5]},
$ab0:function(){return[D.a5]}}
D.hE.prototype={$ia5:1}
D.bB.prototype={
Y:function(a){var u=this.go
if(u!=null)u.K(a)},
eP:function(){return this.Y(null)},
ga7:function(){var u=this.x!=null?1:0
return u+4+8},
$ia5:1}
V.W.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.as.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fq.prototype={}
V.de.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.de))return!1
u=b.a
t=$.A().a
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bQ(H.b([q.a,q.d,q.r],p),3,0),n=V.bQ(H.b([q.b,q.e,q.x],p),3,0),m=V.bQ(H.b([q.c,q.f,q.y],p),3,0)
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
V.aP.prototype={
a9:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dj:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.df()
u=1/b1
t=-n
s=-a0
return V.aQ((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aQ(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bo:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.A().a
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
H:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bQ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bQ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bQ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bQ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.H("")}}
V.a7.prototype={
M:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.R.prototype={
A:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bc.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dq.prototype={
gar:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dq))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.U.prototype={
b_:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
if(typeof b!=="number")return H.v(b)
u=this.b
if(typeof u!=="number")return u.B()
return new V.U(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lO
return u==null?$.lO=new V.U(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.U(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.z.prototype={
b_:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c5:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cp()
return new V.z(this.a/b,this.b/b,this.c/b)},
dk:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.cq.prototype={
b_:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cq))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.f4.prototype={
bu:function(a){var u=V.ph(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.P():u},
W:function(a){var u=this.y
if(u!=null)u.K(a)},
sdN:function(a,b){},
sdl:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bu(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.W(s)}},
sdn:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bu(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.W(s)}},
sa2:function(a,b){var u,t=this
b=t.bu(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.W(u)}},
sdm:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.W(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.W(t)}},
sd1:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.W(u)}},
as:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cV.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.P():u},
aR:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cV))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c0.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.P():u},
W:function(a){var u=this.e
if(u!=null)u.K(a)},
al:function(){return this.W(null)},
e7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb9(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gw()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bt()
u.b=!0
this.W(u)},
fl:function(a,b){var u,t
for(u=b.gS(b),t=this.gb9();u.t();)u.gC(u).gw().L(0,t)
u=new D.bu()
u.b=!0
this.W(u)},
aR:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aR(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.df():u
r=s.e
if(r!=null)r.ai(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c0))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.E(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.am]},
$ab0:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.dL.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.P():u},
W:function(a){var u=this.fx
if(u!=null)u.K(a)},
al:function(){return this.W(null)},
h_:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.P():t
u.n(0,s.geA())
u=s.a.c
t=u.d
u=t==null?u.d=D.P():t
u.n(0,s.geC())
u=s.a.c
t=u.c
u=t==null?u.c=D.P():t
u.n(0,s.geE())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.n(0,s.gev())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.n(0,s.gex())
u=s.a.e
t=u.b
u=t==null?u.b=D.P():t
u.n(0,s.gfR())
u=s.a.e
t=u.d
u=t==null?u.d=D.P():t
u.n(0,s.gfP())
u=s.a.e
t=u.c
u=t==null?u.c=D.P():t
u.n(0,s.gfN())
return!0},
an:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.U(u,t)},
eB:function(a){var u=this
H.r(a,"$ib8")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eD:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib8")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.an(new V.U(t.a,t.b).B(0,2).u(0,u.gar()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.an(new V.U(s.a,s.b).B(0,2).u(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).B(0,2).u(0,u.gar()))}n.al()},
eF:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sX(-t*10*u)
r.al()}},
ew:function(a){var u=this
if(H.r(a,"$idb").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ey:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib8")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.an(new V.U(s.a,s.b).B(0,2).u(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).B(0,2).u(0,u.gar()))
n.al()},
fS:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fQ:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idF")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.U(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.an(new V.U(t.a,t.b).B(0,2).u(0,u.gar()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.an(new V.U(s.a,s.b).B(0,2).u(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa2(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.an(new V.U(t.a,t.b).B(0,2).u(0,u.gar()))}n.al()},
fO:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sX(-t*10*u)
r.al()}},
aR:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.as(0,u)
r.b.as(0,u)
q=V.lq(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.aQ(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iam:1}
M.d0.prototype={
at:function(a){var u=this.y
if(u!=null)u.K(a)},
e8:function(){return this.at(null)},
eR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gam(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bt()
u.b=!0
this.at(u)},
eT:function(a,b){var u,t
for(u=b.gS(b),t=this.gam();u.t();)u.gC(u).gw().L(0,t)
u=new D.bu()
u.b=!0
this.at(u)},
sb4:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().L(0,t.gam())
u=t.d
t.d=a
if(a!=null)a.gw().n(0,t.gam())
s=new D.B("technique",u,t.d)
s.b=!0
t.at(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.P():u},
aN:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dF(a1.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.aj(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.aj(p*r)
p=C.d.aj(q.c*s)
a2.c=p
q=C.d.aj(q.d*r)
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
i=V.aQ(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dE(i)
t=$.lv
if(t==null){t=V.lx()
q=V.lS()
p=$.lP
if(p==null)p=$.lP=new V.z(0,0,-1)
h=p.u(0,Math.sqrt(p.E(p)))
q=q.ay(h)
g=q.u(0,Math.sqrt(q.E(q)))
f=h.ay(g)
e=new V.z(t.a,t.b,t.c)
d=g.T(0).E(e)
c=f.T(0).E(e)
b=h.T(0).E(e)
t=V.aQ(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lv=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aR(0,a2,u)
if(a0!=null)a=a0.B(0,a)}a2.db.dE(a)
u=a1.d
if(u!=null)u.as(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.t();)u.d.as(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.t();)u.d.aN(a2)
a1.b.toString
a2.cy.c7()
a2.db.c7()
a1.c.toString
a2.dD()}}
A.cP.prototype={}
A.eS.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gak:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.h3.prototype={
e_:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.S("")
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
A.oy(c3,u)
A.oA(c3,u)
A.oz(c3,u)
A.oC(c3,u)
A.oD(c3,u)
A.oB(c3,u)
A.oE(c3,u)
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
m=A.ox(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cB(n,35633)
b8.f=b8.cB(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.u("Failed to link shader: "+H.e(l)))}b8.fJ()
b8.fL()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.V(0,"invViewMat"),"$iac")
if(t)b8.dy=H.r(b8.y.V(0,"objMat"),"$iac")
if(r)b8.fr=H.r(b8.y.V(0,"viewObjMat"),"$iac")
b8.fy=H.r(b8.y.V(0,"projViewObjMat"),"$iac")
if(c3.go)b8.fx=H.r(b8.y.V(0,"viewMat"),"$iac")
if(c3.x1)b8.k1=H.r(b8.y.V(0,"txt2DMat"),"$icm")
if(c3.x2)b8.k2=H.r(b8.y.V(0,"txtCubeMat"),"$iac")
if(c3.y1)b8.k3=H.r(b8.y.V(0,"colorMat"),"$iac")
b8.r1=H.b([],[A.ac])
t=c3.bf
if(t>0){b8.k4=b8.y.V(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.u(c0+q+c1))
s.push(H.r(j,"$iac"))}}if(c3.a.a)b8.r2=H.r(b8.y.V(0,"emissionClr"),"$iG")
if(c3.b.a)b8.x1=H.r(b8.y.V(0,"ambientClr"),"$iG")
if(c3.c.a)b8.y2=H.r(b8.y.V(0,"diffuseClr"),"$iG")
if(c3.d.a)b8.bg=H.r(b8.y.V(0,"invDiffuseClr"),"$iG")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d4=H.r(b8.y.V(0,"shininess"),"$iV")
if(t)b8.d3=H.r(b8.y.V(0,"specularClr"),"$iG")}if(c3.db){b8.d5=H.r(b8.y.V(0,"envSampler"),"$ibF")
if(c3.r.a)b8.d6=H.r(b8.y.V(0,"reflectClr"),"$iG")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d7=H.r(b8.y.V(0,"refraction"),"$iV")
if(t)b8.d8=H.r(b8.y.V(0,"refractClr"),"$iG")}}if(c3.y.a)b8.d9=H.r(b8.y.V(0,"alpha"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bU=new H.I([r,A.be])
b8.bV=new H.I([r,[P.n,A.ck]])
for(r=[A.ck],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.ck(j,d,c,a3,a2,a1))}b8.bV.m(0,g,e)
q=b8.bU
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bW=new H.I([r,A.be])
b8.bX=new H.I([r,[P.n,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a8()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.u(c0+a4+c1))
H.r(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.u(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.u(c0+a4+c1))
H.r(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$ibE")
a8=c}else a8=b9
e.push(new A.cl(a7,a6,a5,j,d,a8))}b8.bX.m(0,g,e)
q=b8.bW
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bY=new H.I([r,A.be])
b8.bZ=new H.I([r,[P.n,A.cn]])
for(r=[A.cn],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$icm")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibF")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$ibF")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$icj")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cn(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bZ.m(0,g,e)
q=b8.bY
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.c_=new H.I([r,A.be])
b8.c0=new H.I([r,[P.n,A.co]])
for(r=[A.co],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.u(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.u(c0+o+c1))
H.r(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.u(c0+o+c1))
H.r(b,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.u(c0+o+c1))
H.r(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.u(c0+o+c1))
H.r(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.u(c0+o+c1))
H.r(b3,"$iV")
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
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$icj")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.u(c0+a4+c1))
H.r(a0,"$iV")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.u(c0+a4+c1))
H.r(a0,"$iV")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.u(c0+a4+c1))
H.r(b2,"$iV")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.u(c0+a4+c1))
H.r(a,"$ibE")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.u(c0+o+c1))
H.r(a,"$ibE")
b0=a}else b0=b9
e.push(new A.co(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c0.m(0,g,e)
q=b8.c_
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.u(c0+o+c1))
q.m(0,g,j)}}}},
fH:function(a,b){}}
A.cQ.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cY.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dn.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.du.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h6.prototype={
i:function(a){return this.aZ}}
A.ck.prototype={}
A.cl.prototype={}
A.cn.prototype={}
A.co.prototype={}
A.ds.prototype={
e2:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cB:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fJ:function(){var u,t,s,r=this,q=H.b([],[A.cP]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cP(p,t.name,s))}r.x=new A.eS(q)},
fL:function(){var u,t,s,r=this,q=H.b([],[A.dH]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hd(t.type,t.size,t.name,s))}r.y=new A.iB(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.kN(u,this.r,b,a,c)},
ep:function(a,b,c){var u=this.a
if(a===1)return new A.bE(u,b,c)
else return A.kN(u,this.r,b,a,c)},
eq:function(a,b,c){var u=this.a
if(a===1)return new A.bF(u,b,c)
else return A.kN(u,this.r,b,a,c)},
bc:function(a,b){return new P.dX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hd:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.ix(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cj(u.a,c,d)
case 35667:return new A.iy(u.a,c,d)
case 35668:return new A.iz(u.a,c,d)
case 35669:return new A.iA(u.a,c,d)
case 35674:return new A.iC(u.a,c,d)
case 35675:return new A.cm(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.ep(b,c,d)
case 35680:return u.eq(b,c,d)
case 35670:throw H.c(u.bc("BOOL",c))
case 35671:throw H.c(u.bc("BOOL_VEC2",c))
case 35672:throw H.c(u.bc("BOOL_VEC3",c))
case 35673:throw H.c(u.bc("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dH.prototype={}
A.iB.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.be.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cj.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cm.prototype={
ag:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
ag:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bE.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bF.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jR.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c5(s.b,b).c5(s.d.c5(s.c,b),c)
a.sa2(0,new V.R(r.a,r.b,r.c))
a.sdJ(r.u(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.scY(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k0.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k2.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sa2(0,new V.R(s,u,q))
u=new V.z(s,u,q)
a.sdJ(u.u(0,Math.sqrt(u.E(u))))
a.scY(new V.bc(1-c,2+c,-1,-1))}}
F.k3.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k4.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.km.prototype={
$2:function(a,b){return 0}}
F.kn.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.z(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.E(t))).B(0,this.b+s)
a.sa2(0,new V.R(s.a,s.b,s.c))}}
F.kp.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}}
F.kc.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.R(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k1.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.la(n.$1(o),m)
m=J.la(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.z(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.E(m)))
n=$.lQ
if(n==null){n=new V.z(1,0,0)
$.lQ=n
t=n}else t=n
n=u.ay(!J.E(u,t)?V.lT():t)
s=n.u(0,Math.sqrt(n.E(n)))
n=s.ay(u)
t=n.u(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa2(0,l.A(0,new V.R(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b2.prototype={
aX:function(){var u=this
if(!u.gaY()){C.b.L(u.a.a.d.b,u)
u.a.a.Z()}u.bF()
u.bG()
u.fz()},
bJ:function(a){this.a=a
a.d.b.push(this)},
bK:function(a){this.b=a
a.d.c.push(this)},
fI:function(a){this.c=a
a.d.d.push(this)},
bF:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bG:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fz:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cp()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dk())return
return s.u(0,Math.sqrt(s.E(s)))},
el:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.E(r)))
r=t.M(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.ay(r.u(0,Math.sqrt(r.E(r))))
return r.u(0,Math.sqrt(r.E(r)))},
bP:function(){var u,t=this
if(t.d!=null)return!0
u=t.ej()
if(u==null){u=t.el()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
ei:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cp()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dk())return
return s.u(0,Math.sqrt(s.E(s)))},
ek:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.M(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).B(0,p).A(0,g).M(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.E(l)))
l=o.ay(q)
l=l.u(0,Math.sqrt(l.E(l))).ay(o)
q=l.u(0,Math.sqrt(l.E(l)))}return q},
bN:function(){var u,t=this
if(t.e!=null)return!0
u=t.ei()
if(u==null){u=t.ek()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gh7:function(a){var u=this
if(J.E(u.a,u.b))return!0
if(J.E(u.b,u.c))return!0
if(J.E(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this
if(s.gaY())return a+"disposed"
u=a+C.a.af(J.a3(s.a.e),0)+", "+C.a.af(J.a3(s.b.e),0)+", "+C.a.af(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.ft.prototype={}
F.i0.prototype={
b0:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.v()
t=t.e
u=c.c
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.c
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c4.prototype={
aX:function(){var u=this
if(!u.gaY()){C.b.L(u.a.a.c.b,u)
u.a.a.Z()}u.bF()
u.bG()},
bJ:function(a){this.a=a
a.c.b.push(this)},
bK:function(a){this.b=a
a.c.c.push(this)},
bF:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bG:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gaY())return a+"disposed"
return a+C.a.af(J.a3(this.a.e),0)+", "+C.a.af(J.a3(this.b.e),0)},
O:function(){return this.H("")}}
F.fR.prototype={}
F.iv.prototype={
b0:function(a,b,c){var u,t=b.a
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
return t==u.e}else{t=b.a
t.a.a.v()
t=t.e
u=c.b
u.a.a.v()
if(t==u.e){t=b.b
t.a.a.v()
t=t.e
u=c.a
u.a.a.v()
return t==u.e}else return!1}}}
F.cc.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.af(J.a3(u.e),0)},
O:function(){return this.H("")}}
F.hT.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.P():u},
b1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.ha())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cc()
if(n.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.na(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
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
F.bZ(l,k,i)}g=h.e
if(g!=null)g.ai(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ai(0)
return u},
hB:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aH(o,0)])
for(o=[F.bf];u.length!==0;){t=C.b.gho(u)
C.b.ca(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b0(0,t,q)){s.push(q)
C.b.ca(u,r)}}if(s.length>1)b.b1(s)}}p.a.v()
p.c.cb()
p.d.cb()
p.b.hU()
p.c.cc(new F.iv())
p.d.cc(new F.i0())
o=p.e
if(o!=null)o.ai(0)},
bL:function(){this.hB(new F.iZ(),new F.hw())},
c2:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c2()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdq(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.E(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.ai(0)},
h5:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aZ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.aW().a)!==0)++s
r=a4.gck(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cR])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fZ(m)
k=l.gck(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cR(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hz(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bL(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cS(new Z.dN(a1,d),o,a4)
c.b=H.b([],[Z.bs])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.kQ(u,34963,b)
c.b.push(new Z.bs(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.kQ(u,34963,b)
c.b.push(new Z.bs(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.v()
b.push(t.e)}a=Z.kQ(u,34963,b)
c.b.push(new Z.bs(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.K(null)}}
F.hU.prototype={
fV:function(a){var u,t,s,r,q,p=H.b([],[F.b2]),o=a.length
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
p.push(F.bZ(u,r,q))}}return p},
fW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b2])
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
h.push(F.bZ(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bZ(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bZ(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bZ(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b0(0,p,n)){p.aX()
break}}}}},
cb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gh7(s)
if(t)s.aX()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bP())s=!1
return s},
bO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bN())s=!1
return s},
c2:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.z(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.z(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
O:function(){return this.H("")}}
F.hV.prototype={
gl:function(a){return this.b.length},
cc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b0(0,p,n)){p.aX()
break}}}}},
cb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.aX()}},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
O:function(){return this.H("")}}
F.hW.prototype={
gl:function(a){return this.b.length},
hU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
O:function(){return this.H("")}}
F.bf.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dM(u.cx,r,o,t,s,q,p,a,n)},
ha:function(){return this.bT(null)},
sa2:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdq:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.E(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdJ:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
scY:function(a){var u
if(!J.E(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hz:function(a){var u,t,s=this
if(a.p(0,$.aZ())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aY())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aX())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bj())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bk())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cK())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cL())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bS()))return H.b([s.ch],[P.J])
else if(a.p(0,$.aW())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bP:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.G(0,new F.j3(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
bN:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cp()
t.d.G(0,new F.j2(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ai(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.af(J.a3(s.e),0))
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
O:function(){return this.H("")}}
F.j3.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.j2.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iU.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
fX:function(a,b,c,d,e,f){var u=F.dM(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bP()
return!0},
bO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bN()
return!0},
h6:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.v()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
O:function(){return this.H("")}}
F.iV.prototype={
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
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.iW(u,b))
C.b.G(u.d,new F.iX(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iW.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iX.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.iY.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j_.prototype={}
F.iZ.prototype={
b0:function(a,b,c){return J.E(b.f,c.f)}}
F.j0.prototype={}
F.hw.prototype={
b1:function(a){var u,t,s,r=V.cp()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.u(0,Math.sqrt(r.E(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sdq(r)
return}}
F.j1.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.dc.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.P():u},
ab:function(a){var u=this.fr
if(u!=null)u.K(a)},
eb:function(){return this.ab(null)},
cJ:function(a){this.a=null
this.ab(a)},
fD:function(){return this.cJ(null)},
eK:function(a,b){var u=new D.bt()
u.b=!0
this.ab(u)},
eM:function(a,b){var u=new D.bu()
u.b=!0
this.ab(u)},
cz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=u.h(0,q.ga7())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cQ])
u.G(0,new O.ha(g,n))
C.b.aS(n,new O.hb())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=m.h(0,q.ga7())
m.m(0,p,o==null?1:o)}l=H.b([],[A.cY])
m.G(0,new O.hc(g,l))
C.b.aS(l,new O.hd())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=k.h(0,q.ga7())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dn])
k.G(0,new O.he(g,j))
C.b.aS(j,new O.hf())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.ga7()
p=i.h(0,q.ga7())
i.m(0,s,p==null?1:p)}h=H.b([],[A.du])
i.G(0,new O.hg(g,h))
C.b.aS(h,new O.hh())
f=C.c.a4(g.e.a.length+3,4)
g.dy.e
return A.ni(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
eh:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
as:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a4(u,u.length);u.t();){t=u.d
t.toString
s=$.ah
t.a=s==null?$.ah=new V.R(0,0,0):s
s=$.iT
t.b=s==null?$.iT=new V.z(0,0,1):s
s=$.iS
t.c=s==null?$.iS=new V.z(0,1,0):s
s=$.iR
t.d=s==null?$.iR=new V.z(-1,0,0):s
s=t.f
if(s!=null){r=s.aR(0,b,t)
if(r!=null){t.a=r.aQ(t.a)
s=r.bo(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bo(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bo(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
hW:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cz()
u=b4.fr.h(0,b3.aZ)
if(u==null){u=A.nh(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.u("May not cache a shader with no name."))
if(b4.fr.bR(0,t))H.p(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bg
b3=b5.e
if(!(b3 instanceof Z.cS))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.ap()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bO()
p.a.bO()
p=p.e
if(p!=null)p.ai(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.h6()
o=o.e
if(o!=null)o.ai(0)}m=b5.d.h5(new Z.j5(b4.a),r)
m.aL($.aZ()).e=b2.a.Q.c
if(b3)m.aL($.aY()).e=b2.a.cx.c
if(q)m.aL($.aX()).e=b2.a.ch.c
if(s.r2)m.aL($.bj()).e=b2.a.cy.c
if(p)m.aL($.bk()).e=b2.a.db.c
if(s.ry)m.aL($.aW()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dA])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hj()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga0(p)
b3=b3.dy
b3.toString
b3.ag(p.a9(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga0(p)
o=b4.dx
o=b4.cx=p.B(0,o.ga0(o))
p=o}b3=b3.fr
b3.toString
b3.ag(p.a9(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghS()
o=b4.dx
o=b4.ch=p.B(0,o.ga0(o))
p=o}b3=b3.fy
b3.toString
b3.ag(p.a9(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga0(p)
b3=b3.fx
b3.toString
b3.ag(p.a9(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ag(C.j.a9(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ag(C.j.a9(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ag(C.j.a9(p,!0))}if(s.bf>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bL(p.a9(0,!0)))
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
b3=b3.bg
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d4
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d3
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.bT(b2.a.bV.h(0,e),d)
n=f.gie()
b=$.ah
n=n.aQ(b==null?$.ah=new V.R(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gig()
b=$.ah
n=n.aQ(b==null?$.ah=new V.R(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gax(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.ghk()){n=f.gh0()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gh1()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gh2()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bU.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a0.h(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.bT(b2.a.bX.h(0,e),d)
n=a.bo(f.ghg(f))
b=n.a
a1=n.b
a2=n.c
a2=n.u(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.gax(f)
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)
f.gaP()
n=f.ghg(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giy()
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gcd(f)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaP()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaP()
b=n.gbk(n)
if(b){b=c.r
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bW.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.bT(b2.a.bZ.h(0,e),d)
a4=a.B(0,f.ga0(f))
n=f.ga0(f)
b=$.ah
n=n.aQ(b==null?$.ah=new V.R(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ah
n=a4.aQ(n==null?$.ah=new V.R(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gax(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaP()
n=a4.dj(0)
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
i=new Float32Array(H.bL(new V.de(b,a1,a2,a5,a6,a7,a8,a9,n).a9(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaP()
n=f.gaP()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gaP()
b=n.gbk(n)
if(b){b=c.f
b.toString
a1=n.gbk(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghu(n)
b.a.uniform1i(b.d,n)}}f.gcj()
n=f.gic()
b=c.x
b.a.uniform4f(b.d,n.a,n.b,n.c,n.d)
n=f.gcj()
if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.gcj()
b=n.gbk(n)
if(b){b=c.r
b.toString
a1=n.gbk(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghu(n)
b.a.uniform1i(b.d,n)}}if(f.ghk()){n=f.gh0()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gh1()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gh2()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bY.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga0(p)
p=P.w
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.bT(b2.a.c0.h(0,e),d)
n=f.a
b=c.b
a1=n.a
a2=n.b
n=n.c
b.a.uniform3f(b.d,a1,a2,n)
n=f.b
a2=n.a
a1=n.b
b=n.c
b=n.u(0,Math.sqrt(a2*a2+a1*a1+b*b))
a1=c.c
a2=b.a
n=b.b
b=b.c
a1.a.uniform3f(a1.d,a2,n,b)
b=a.aQ(f.a)
n=c.d
n.a.uniform3f(n.d,b.a,b.b,b.c)
b=f.r
n=c.e
n.a.uniform3f(n.d,b.a,b.b,b.c)
if(f.x!=null||!1){n=f.c
b=c.f
b.toString
a1=n.a
a2=n.b
n=n.c
b.a.uniform3f(b.d,a1,a2,n)
n=f.d
a2=c.r
a2.toString
a1=n.a
b=n.b
n=n.c
a2.a.uniform3f(a2.d,a1,b,n)
n=f.z
b=c.x
b.a.uniform1f(b.d,n)
n=f.Q
b=c.y
b.a.uniform1f(b.d,n)}n=f.x
b=n!=null
if(b){if(b)if(!C.b.D(l,n)){n.a=l.length
l.push(n)}n=f.x
b=n!=null
if(b&&n.d){a1=c.dx
a1.toString
if(!b||!n.d)a1.a.uniform1i(a1.d,0)
else{n=n.a
a1.a.uniform1i(a1.d,n)}}}n=f.cy
b=c.Q
b.a.uniform1f(b.d,n)
n=f.dx
b=c.ch
b.a.uniform1f(b.d,n)
n=f.dy
b=c.cx
b.a.uniform1f(b.d,n)
n=f.fr
b=c.cy
b.a.uniform1f(b.d,n)
n=f.fx
b=c.db
b.a.uniform1f(b.d,n)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.c_.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga0(p).dj(0)}b3=b3.id
b3.toString
b3.ag(p.a9(0,!0))}if(s.db){b2.eh(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fH(b3.d5,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d6
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d7
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.d8
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.d9
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){b3=l[j]
if(!b3.c&&b3.d){b3.c=!0
q.activeTexture(33984+b3.a)
q.bindTexture(3553,b3.b)}}b3=b5.e
b3.bM(b4)
b3.aN(b4)
b3.i7(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hh()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cz().aZ}}
O.ha.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cQ(a,C.c.a4(b+3,4)*4))}}
O.hb.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.hc.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cY(a,C.c.a4(b+3,4)*4))}}
O.hd.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dn(a,C.c.a4(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.du(a,C.c.a4(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cM(a.a,b.a)}}
O.h4.prototype={
av:function(){var u,t=this
t.cm()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.ab(u)}}}
O.dd.prototype={
av:function(){},
cM:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.ab(null)}}}
O.h5.prototype={}
O.av.prototype={
cL:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.ab(t)}},
av:function(){this.cm()
this.cL(new V.W(1,1,1))},
sax:function(a,b){this.cM(new A.a_(!0,!1,!1))
this.cL(b)}}
O.h7.prototype={}
O.h8.prototype={
av:function(){var u,t=this
t.cn()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.ab(u)}}}
O.h9.prototype={
cN:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.ab(t)}},
av:function(){this.cn()
this.cN(100)}}
O.dz.prototype={}
T.dA.prototype={}
T.ig.prototype={}
T.ih.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.P():u}}
T.ii.prototype={
hA:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.ih()
t.a=0
t.b=q
t.d=t.c=!1
W.Y(u,"load",new T.ij(this,t,u,!1,q,!1,!1),!1)
return t},
fE:function(a,b,c){var u,t,s,r
b=V.l4(b)
u=V.l4(a.width)
t=V.l4(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kw()
s.width=u
s.height=t
r=C.i.dP(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oS(r.getImageData(0,0,s.width,s.height))}}}
T.ij.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fE(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.a5.i1(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hi()}++s.e}}
X.kv.prototype={}
X.fA.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.P():u}}
X.dm.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.P():u},
aF:function(a){var u=this.f
if(u!=null)u.K(a)},
ee:function(){return this.aF(null)},
saM:function(a){var u,t,s=this
if(!J.E(s.b,a)){u=s.b
if(u!=null)u.gw().L(0,s.gcr())
t=s.b
s.b=a
if(a!=null)a.gw().n(0,s.gcr())
u=new D.B("mover",t,s.b)
u.b=!0
s.aF(u)}}}
X.ib.prototype={}
V.cU.prototype={
b8:function(a){this.b=new P.fF(C.U)
this.c=null
this.d=H.b([],[[P.n,W.ak]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eo(q,0,q.length)
n=o==null?q:o
C.S.dR(p,H.l6(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaq(m.d).push(p)}},
dB:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.n,W.ak]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.be()
for(t.toString,s=new H.m(u),s=new P.bI(t.ce(new H.b6(s,s.gl(s))).a());s.t();)r.bm(s.gC(s))}}
V.kl.prototype={
$1:function(a){var u=C.d.dK(this.a.ght(),2)
if(u!=="0.00")P.l5(u+" fps")}}
V.fe.prototype={
bm:function(a){var u=this
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
be:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.io()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.M("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.M("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.t(new H.m(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.t(new H.m(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.t(new H.m('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.t(new H.m('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.t(new H.m("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.t(new H.m('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aJ())
t=a1.k(0,r).j(0,h)
u=K.t(new H.m("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.t(new H.m("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.t(new H.m("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.t(new H.m("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aJ())
t=a1.k(0,r).j(0,e)
u=K.t(new H.m("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.t(new H.m("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.t(new H.m("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a6()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.t(new H.m("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.t(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a6()
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.t(new H.m("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.t(new H.m(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.t(new H.m(" \n\t"))
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
t.aB(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aB(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aB(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fC.prototype={
bm:function(a){var u=this
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
be:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.io()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.M("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.t(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.M("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.M("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.t(new H.m(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.t(new H.m(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.t(new H.m("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.t(new H.m("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aJ())
t=e.k(0,j).j(0,i)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a6()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.t(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a6()
u.a=H.b([],s)
t.a.push(u)
t=K.t(new H.m("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.t(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.t(new H.m(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.t(new H.m(" \n\t"))
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
u.aB(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aB(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aB(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fD.prototype={
bm:function(a){var u=this,t="#111"
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
be:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.io()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.t(new H.m("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.t(new H.m("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.t(new H.m("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.t(new H.m("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.t(new H.m("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.t(new H.m('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.t(new H.m('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.t(new H.m("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.t(new H.m('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aJ())
l.k(0,s).j(0,m).a.push(new K.aJ())
u=l.k(0,m).j(0,m)
t=new K.a6()
t.a=H.b([],[K.b7])
u.a.push(t)
u=K.t(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.P("Symbol")
u=l.k(0,n)
u.d=u.a.P("String")
u=l.k(0,r)
t=u.a.P(r)
u.d=t
t.aB(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.P(q)
t=l.k(0,m)
t.d=t.a.P(m)
return l}}
V.hC.prototype={
dB:function(a,b){this.d=H.b([],[[P.n,W.ak]])
this.N(C.b.j(b,"\n"),"#111")},
bm:function(a){},
be:function(){return}}
V.hH.prototype={
cU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lK().gc9().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cS(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lc(m.c).n(0,q)
o=W.n3("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hI(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lc(m.c).n(0,r.createElement("br"))},
aW:function(a,b,c){return this.cU(a,b,c,!1)},
cS:function(a){var u,t,s=P.lK(),r=P.h,q=P.nc(s.gc9(),r,r)
q.m(0,this.a,a)
u=s.dG(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jy([],[]).bp(""),"",t)}}
V.hI.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cS(u.d)}}}
V.hX.prototype={
e3:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.hZ(o),!1)},
cW:function(a){var u,t,s,r,q,p,o,n
this.fK()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hy(a),s.toString,r=new H.m(r),r=new P.bI(s.ce(new H.b6(r,r.gl(r))).a());r.t();){s=r.gC(r)
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
if(H.mm(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ez(C.z,s,C.e,!1)
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
dO:function(a){var u,t,s,r=new V.fe("dart")
r.b8("dart")
u=new V.fC("glsl")
u.b8("glsl")
t=new V.fD("html")
t.b8("html")
s=C.b.hp(H.b([r,u,t],[V.cU]),new V.i_(a))
if(s!=null)return s
r=new V.hC("plain")
r.b8("plain")
return r},
cV:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cH(s).a3(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a3(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dO(a8)
r.dB(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ez(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.le()
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
for(a2=C.b.gS(s);a2.t();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fT:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fK:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.io()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a6()
r=[K.b7]
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.t(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.t(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a6()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.t(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.t(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a6()
s.a=H.b([],r)
t.a.push(s)
t=K.t(new H.m("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.t(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.t(new H.m("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.t(new H.m("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.t(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aJ())
s=u.k(0,i).j(0,i)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.t(new H.m("*_`["))
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
V.hZ.prototype={
$1:function(a){P.lG(C.n,new V.hY(this.a))}}
V.hY.prototype={
$0:function(){var u=C.d.aj(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i_.prototype={
$1:function(a){return a.a===this.a}}
L.kd.prototype={
$0:function(){this.a.saa(0,F.kZ(1,null,null,1))}}
L.ke.prototype={
$0:function(){this.a.saa(0,F.l_(1,!0,!0,40,1))}}
L.kf.prototype={
$0:function(){this.a.saa(0,F.l_(1,!0,!1,40,0))}}
L.kg.prototype={
$0:function(){this.a.saa(0,F.pd(6,6))}}
L.kh.prototype={
$0:function(){this.a.saa(0,F.mo())}}
L.ki.prototype={
$0:function(){this.a.saa(0,F.p6())}}
L.kj.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.cV("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cV("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dV=u.i
u=J.d7.prototype
u.dX=u.i
u=P.j.prototype
u.dW=u.bq
u=W.O.prototype
u.bs=u.ad
u=W.eh.prototype
u.dY=u.ao
u=K.d3.prototype
u.dU=u.aA
u.cl=u.i
u=O.dd.prototype
u.cm=u.av
u=O.av.prototype
u.cn=u.av})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"oh","n7",20)
t(P,"oM","nQ",8)
t(P,"oN","nR",8)
t(P,"oO","nS",8)
s(P,"mb","oK",10)
r(W,"p0",4,null,["$4"],["nT"],15,0)
r(W,"p1",4,null,["$4"],["nU"],15,0)
var l
q(l=E.aM.prototype,"gdv",0,0,null,["$1","$0"],["dw","hJ"],0,0)
q(l,"gdz",0,0,null,["$1","$0"],["dA","hK"],0,0)
q(l,"gdt",0,0,null,["$1","$0"],["du","hI"],0,0)
q(l,"gdr",0,0,null,["$1","$0"],["ds","hF"],0,0)
p(l,"ghD","hE",4)
p(l,"ghG","hH",4)
q(l=E.dB.prototype,"gco",0,0,null,["$1","$0"],["cq","cp"],0,0)
o(l,"ghY","dH",10)
n(l=X.dK.prototype,"gf_","f0",5)
n(l,"geN","eO",5)
n(l,"geU","eV",2)
n(l,"gf3","f4",11)
n(l,"gf1","f2",11)
n(l,"gf7","f8",2)
n(l,"gfb","fc",2)
n(l,"geY","eZ",2)
n(l,"gf9","fa",2)
n(l,"geW","eX",2)
n(l,"gfd","fe",18)
n(l,"gff","fg",5)
n(l,"gft","fu",6)
n(l,"gfo","fp",6)
n(l,"gfq","fs",6)
q(l=D.d9.prototype,"gcH",0,0,null,["$1","$0"],["cI","f5"],0,0)
n(l,"gfi","fj",19)
p(l,"geH","eI",12)
p(l,"gfm","fn",12)
q(D.bB.prototype,"gbD",0,0,null,["$1","$0"],["Y","eP"],0,0)
m(V.U.prototype,"gl","b_",7)
m(V.z.prototype,"gl","b_",7)
m(V.cq.prototype,"gl","b_",7)
q(l=U.c0.prototype,"gb9",0,0,null,["$1","$0"],["W","al"],0,0)
p(l,"ge6","e7",13)
p(l,"gfk","fl",13)
q(l=U.dL.prototype,"gb9",0,0,null,["$1","$0"],["W","al"],0,0)
n(l,"geA","eB",1)
n(l,"geC","eD",1)
n(l,"geE","eF",1)
n(l,"gev","ew",1)
n(l,"gex","ey",1)
n(l,"gfR","fS",1)
n(l,"gfP","fQ",1)
n(l,"gfN","fO",1)
q(l=M.d0.prototype,"gam",0,0,null,["$1","$0"],["at","e8"],0,0)
p(l,"geQ","eR",4)
p(l,"geS","eT",4)
q(l=O.dc.prototype,"gea",0,0,null,["$1","$0"],["ab","eb"],0,0)
q(l,"gfC",0,0,null,["$1","$0"],["cJ","fD"],0,0)
p(l,"geJ","eK",14)
p(l,"geL","eM",14)
q(X.dm.prototype,"gcr",0,0,null,["$1","$0"],["aF","ee"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.kG,J.a,J.a4,P.e4,P.j,H.b6,P.fK,H.d1,H.iG,H.f6,H.it,P.bq,H.bW,H.em,P.a0,H.fS,H.fU,H.fM,P.es,P.bH,P.bI,P.dO,P.dx,P.i7,P.dC,P.jQ,P.js,P.jm,P.e3,P.x,P.jI,P.h0,P.f3,P.fG,P.jO,P.jN,P.aG,P.ab,P.aa,P.b1,P.hA,P.dv,P.dX,P.fz,P.fB,P.n,P.Q,P.ba,P.h,P.S,P.bJ,P.iI,P.jv,W.fa,W.ct,W.K,W.dk,W.eh,W.jC,W.d2,W.aR,W.jr,W.eA,P.jx,P.ex,P.jn,P.bD,K.aJ,K.d3,K.b7,K.hJ,K.hS,L.dw,L.dD,L.dE,L.im,O.b0,O.c7,E.f_,E.aM,E.bo,E.bx,E.dW,E.hK,E.dB,Z.dN,Z.j5,Z.cS,Z.bs,Z.bg,D.f2,D.br,D.Z,X.cT,X.d8,X.fP,X.fY,X.bw,X.ho,X.ip,X.dK,D.eX,D.fg,D.a5,D.hE,D.bB,V.W,V.as,V.fq,V.de,V.aP,V.a7,V.R,V.bc,V.dq,V.U,V.z,V.cq,U.dL,M.d0,A.cP,A.eS,A.a_,A.cQ,A.cY,A.dn,A.du,A.h6,A.ck,A.cl,A.cn,A.co,A.dH,A.iB,F.b2,F.ft,F.c4,F.fR,F.cc,F.hT,F.hU,F.hV,F.hW,F.bf,F.iU,F.iV,F.iY,F.j_,F.j0,F.j1,O.dz,O.dd,O.h7,T.ii,X.kv,X.ib,X.dm,V.cU,V.hH,V.hX])
s(J.a,[J.fL,J.d6,J.d7,J.b3,J.c3,J.b4,H.c9,H.b9,W.f,W.eP,W.bm,W.at,W.H,W.dQ,W.ag,W.ff,W.fh,W.dS,W.d_,W.dU,W.fj,W.i,W.dY,W.au,W.fE,W.e_,W.aN,W.fX,W.hi,W.e5,W.e6,W.aw,W.e7,W.ea,W.ay,W.ee,W.eg,W.aA,W.ei,W.aB,W.en,W.an,W.eq,W.il,W.aD,W.et,W.ir,W.iN,W.eB,W.eD,W.eF,W.eH,W.eJ,P.aO,P.e1,P.aS,P.ec,P.hG,P.eo,P.aU,P.ev,P.eT,P.dP,P.dr,P.ek])
s(J.d7,[J.hB,J.bG,J.b5])
t(J.kF,J.b3)
s(J.c3,[J.d5,J.d4])
t(P.fW,P.e4)
s(P.fW,[H.dI,W.jc,W.a2,P.fv])
t(H.m,H.dI)
s(P.j,[H.q,H.c6,H.cr,P.fI])
s(H.q,[H.da,H.fT])
t(H.fm,H.c6)
s(P.fK,[H.h1,H.j6])
t(H.h2,H.da)
t(H.f7,H.f6)
s(P.bq,[H.hx,H.fO,H.iF,H.f1,H.hQ,P.dl,P.aj,P.iH,P.iD,P.cg,P.f5,P.fd])
s(H.bW,[H.kq,H.ic,H.fN,H.k8,H.k9,H.ka,P.j8,P.j7,P.j9,P.ja,P.jH,P.jG,P.jZ,P.jp,P.jq,P.fV,P.h_,P.fk,P.fl,P.iM,P.iJ,P.iK,P.iL,P.jJ,P.jK,P.jM,P.jL,P.jU,P.jT,P.jV,P.jW,W.fn,W.hk,W.hm,W.hP,W.i6,W.jh,W.hv,W.hu,W.jt,W.ju,W.jF,W.jP,P.jz,P.jA,P.k_,P.fw,P.fx,P.eV,E.hL,E.hM,E.hN,E.ik,D.fr,D.fs,F.jR,F.k0,F.k2,F.k3,F.k4,F.km,F.kn,F.kp,F.kc,F.k1,F.j3,F.j2,F.iW,F.iX,O.ha,O.hb,O.hc,O.hd,O.he,O.hf,O.hg,O.hh,T.ij,V.kl,V.hI,V.hZ,V.hY,V.i_,L.kd,L.ke,L.kf,L.kg,L.kh,L.ki,L.kj])
s(H.ic,[H.i4,H.bU])
t(P.fZ,P.a0)
s(P.fZ,[H.I,W.jb])
t(H.dg,H.b9)
s(H.dg,[H.cv,H.cx])
t(H.cw,H.cv)
t(H.ca,H.cw)
t(H.cy,H.cx)
t(H.dh,H.cy)
s(H.dh,[H.hp,H.hq,H.hr,H.hs,H.ht,H.di,H.cb])
t(P.jD,P.fI)
t(P.jo,P.jQ)
t(P.jl,P.js)
t(P.ey,P.h0)
t(P.dJ,P.ey)
s(P.f3,[P.eY,P.fo])
t(P.f8,P.i7)
s(P.f8,[P.eZ,P.fF,P.iQ,P.iP])
t(P.iO,P.fo)
s(P.aa,[P.J,P.w])
s(P.aj,[P.bA,P.fH])
t(P.je,P.bJ)
s(W.f,[W.D,W.fu,W.c8,W.az,W.cz,W.aC,W.ao,W.cB,W.j4,W.cs,P.eW,P.bl])
s(W.D,[W.O,W.b_])
s(W.O,[W.o,P.k])
s(W.o,[W.eQ,W.eR,W.bn,W.bp,W.ak,W.fy,W.c2,W.hR,W.dy,W.i9,W.ia,W.ci])
t(W.f9,W.at)
t(W.bX,W.dQ)
s(W.ag,[W.fb,W.fc])
t(W.dT,W.dS)
t(W.cZ,W.dT)
t(W.dV,W.dU)
t(W.fi,W.dV)
t(W.al,W.bm)
t(W.dZ,W.dY)
t(W.c_,W.dZ)
t(W.e0,W.e_)
t(W.c1,W.e0)
t(W.bd,W.i)
s(W.bd,[W.bv,W.ax,W.bC])
t(W.hj,W.e5)
t(W.hl,W.e6)
t(W.e8,W.e7)
t(W.hn,W.e8)
t(W.eb,W.ea)
t(W.dj,W.eb)
t(W.ef,W.ee)
t(W.hD,W.ef)
t(W.hO,W.eg)
t(W.cA,W.cz)
t(W.i1,W.cA)
t(W.ej,W.ei)
t(W.i2,W.ej)
t(W.i5,W.en)
t(W.er,W.eq)
t(W.id,W.er)
t(W.cC,W.cB)
t(W.ie,W.cC)
t(W.eu,W.et)
t(W.iq,W.eu)
t(W.bh,W.ax)
t(W.eC,W.eB)
t(W.jd,W.eC)
t(W.dR,W.d_)
t(W.eE,W.eD)
t(W.ji,W.eE)
t(W.eG,W.eF)
t(W.e9,W.eG)
t(W.eI,W.eH)
t(W.jw,W.eI)
t(W.eK,W.eJ)
t(W.jB,W.eK)
t(W.jf,W.jb)
t(W.jg,P.dx)
t(W.jE,W.eh)
t(P.jy,P.jx)
t(P.a8,P.jn)
t(P.e2,P.e1)
t(P.fQ,P.e2)
t(P.ed,P.ec)
t(P.hy,P.ed)
t(P.cf,P.k)
t(P.ep,P.eo)
t(P.i8,P.ep)
t(P.ew,P.ev)
t(P.is,P.ew)
t(P.eU,P.dP)
t(P.hz,P.bl)
t(P.el,P.ek)
t(P.i3,P.el)
s(K.d3,[K.a6,L.dG])
s(E.f_,[Z.cR,A.ds,T.dA])
s(D.Z,[D.bt,D.bu,D.B,X.hF])
s(X.hF,[X.db,X.b8,X.dF])
s(O.b0,[D.d9,U.c0])
s(D.f2,[U.f4,U.am])
t(U.cV,U.am)
t(A.h3,A.ds)
s(A.dH,[A.be,A.iy,A.iz,A.iA,A.iw,A.V,A.ix,A.G,A.cj,A.iC,A.cm,A.ac,A.bE,A.bF])
t(F.i0,F.ft)
t(F.iv,F.fR)
t(F.iZ,F.j_)
t(F.hw,F.j0)
t(O.dc,O.dz)
s(O.dd,[O.h4,O.h5,O.av])
s(O.av,[O.h8,O.h9])
t(T.ig,T.dA)
t(T.ih,T.ig)
t(X.fA,X.ib)
s(V.cU,[V.fe,V.fC,V.fD,V.hC])
u(H.dI,H.iG)
u(H.cv,P.x)
u(H.cw,H.d1)
u(H.cx,P.x)
u(H.cy,H.d1)
u(P.e4,P.x)
u(P.ey,P.jI)
u(W.dQ,W.fa)
u(W.dS,P.x)
u(W.dT,W.K)
u(W.dU,P.x)
u(W.dV,W.K)
u(W.dY,P.x)
u(W.dZ,W.K)
u(W.e_,P.x)
u(W.e0,W.K)
u(W.e5,P.a0)
u(W.e6,P.a0)
u(W.e7,P.x)
u(W.e8,W.K)
u(W.ea,P.x)
u(W.eb,W.K)
u(W.ee,P.x)
u(W.ef,W.K)
u(W.eg,P.a0)
u(W.cz,P.x)
u(W.cA,W.K)
u(W.ei,P.x)
u(W.ej,W.K)
u(W.en,P.a0)
u(W.eq,P.x)
u(W.er,W.K)
u(W.cB,P.x)
u(W.cC,W.K)
u(W.et,P.x)
u(W.eu,W.K)
u(W.eB,P.x)
u(W.eC,W.K)
u(W.eD,P.x)
u(W.eE,W.K)
u(W.eF,P.x)
u(W.eG,W.K)
u(W.eH,P.x)
u(W.eI,W.K)
u(W.eJ,P.x)
u(W.eK,W.K)
u(P.e1,P.x)
u(P.e2,W.K)
u(P.ec,P.x)
u(P.ed,W.K)
u(P.eo,P.x)
u(P.ep,W.K)
u(P.ev,P.x)
u(P.ew,W.K)
u(P.dP,P.a0)
u(P.ek,P.x)
u(P.el,W.K)})()
var v={mangledGlobalNames:{w:"int",J:"double",aa:"num",h:"String",aG:"bool",ba:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.ax]},{func:1,ret:P.ba,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aM]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bC]},{func:1,ret:P.J},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.w,[P.j,D.a5]]},{func:1,ret:-1,args:[P.w,[P.j,U.am]]},{func:1,ret:-1,args:[P.w,[P.j,V.aP]]},{func:1,ret:P.aG,args:[W.O,P.h,P.h,W.ct]},{func:1,ret:P.ba,args:[,]},{func:1,ret:P.bD,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.aG,args:[[P.j,D.a5]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bn.prototype
C.i=W.bp.prototype
C.S=W.ak.prototype
C.V=J.a.prototype
C.b=J.b3.prototype
C.W=J.d4.prototype
C.c=J.d5.prototype
C.j=J.d6.prototype
C.d=J.c3.prototype
C.a=J.b4.prototype
C.X=J.b5.prototype
C.D=J.hB.prototype
C.a5=P.dr.prototype
C.E=W.dy.prototype
C.q=J.bG.prototype
C.F=W.bh.prototype
C.G=W.cs.prototype
C.H=new E.bo("Browser.chrome")
C.t=new E.bo("Browser.firefox")
C.u=new E.bo("Browser.edge")
C.I=new E.bo("Browser.other")
C.a7=new P.eZ()
C.J=new P.eY()
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

C.Q=new P.hA()
C.e=new P.iO()
C.R=new P.iQ()
C.f=new P.jo()
C.n=new P.b1(0)
C.T=new P.b1(5e6)
C.U=new P.fG("element",!1,!1,!1)
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
C.a1=new H.f7(0,{},C.y,[P.h,P.h])
C.a2=new E.bx("OperatingSystem.windows")
C.C=new E.bx("OperatingSystem.mac")
C.a3=new E.bx("OperatingSystem.linux")
C.a4=new E.bx("OperatingSystem.other")
C.a6=new P.bH(null,2)})();(function staticFields(){$.ar=0
$.bV=null
$.lg=null
$.mg=null
$.ma=null
$.mk=null
$.k5=null
$.kb=null
$.l2=null
$.bM=null
$.cF=null
$.cG=null
$.kW=!1
$.ap=C.f
$.a9=[]
$.aL=null
$.kz=null
$.lm=null
$.ll=null
$.cu=P.kI(P.h,P.fB)
$.fp=null
$.lt=null
$.lw=null
$.ah=null
$.lC=null
$.lO=null
$.lR=null
$.lQ=null
$.iR=null
$.iS=null
$.iT=null
$.lP=null
$.lU=null
$.lv=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pk","mq",function(){return H.mf("_$dart_dartClosure")})
u($,"pl","l8",function(){return H.mf("_$dart_js")})
u($,"pm","mr",function(){return H.aE(H.iu({
toString:function(){return"$receiver$"}}))})
u($,"pn","ms",function(){return H.aE(H.iu({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"po","mt",function(){return H.aE(H.iu(null))})
u($,"pp","mu",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ps","mx",function(){return H.aE(H.iu(void 0))})
u($,"pt","my",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pr","mw",function(){return H.aE(H.lI(null))})
u($,"pq","mv",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pv","mA",function(){return H.aE(H.lI(void 0))})
u($,"pu","mz",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pJ","l9",function(){return P.nP()})
u($,"pw","mB",function(){return P.nL()})
u($,"pK","mF",function(){return H.nj(H.bL(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pN","mH",function(){return P.nx("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pO","mI",function(){return P.of()})
u($,"pL","mG",function(){return P.lo(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pD","mE",function(){return Z.ai(0)})
u($,"px","mC",function(){return Z.ai(511)})
u($,"pF","aZ",function(){return Z.ai(1)})
u($,"pE","aY",function(){return Z.ai(2)})
u($,"pz","aX",function(){return Z.ai(4)})
u($,"pG","bj",function(){return Z.ai(8)})
u($,"pH","bk",function(){return Z.ai(16)})
u($,"pA","cK",function(){return Z.ai(32)})
u($,"pB","cL",function(){return Z.ai(64)})
u($,"pC","mD",function(){return Z.ai(96)})
u($,"pI","bS",function(){return Z.ai(128)})
u($,"py","aW",function(){return Z.ai(256)})
u($,"pj","mp",function(){return new V.fq(1e-9)})
u($,"pi","A",function(){return $.mp()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c9,DataView:H.b9,ArrayBufferView:H.b9,Float32Array:H.ca,Float64Array:H.ca,Int16Array:H.hp,Int32Array:H.hq,Int8Array:H.hr,Uint16Array:H.hs,Uint32Array:H.ht,Uint8ClampedArray:H.di,CanvasPixelArray:H.di,Uint8Array:H.cb,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eP,HTMLAnchorElement:W.eQ,HTMLAreaElement:W.eR,Blob:W.bm,HTMLBodyElement:W.bn,HTMLCanvasElement:W.bp,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSPerspective:W.f9,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bX,MSStyleCSSProperties:W.bX,CSS2Properties:W.bX,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.fb,CSSUnparsedValue:W.fc,DataTransferItemList:W.ff,HTMLDivElement:W.ak,DOMException:W.fh,ClientRectList:W.cZ,DOMRectList:W.cZ,DOMRectReadOnly:W.d_,DOMStringList:W.fi,DOMTokenList:W.fj,Element:W.O,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.al,FileList:W.c_,FileWriter:W.fu,HTMLFormElement:W.fy,Gamepad:W.au,History:W.fE,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.aN,HTMLImageElement:W.c2,KeyboardEvent:W.bv,Location:W.fX,MediaList:W.hi,MessagePort:W.c8,MIDIInputMap:W.hj,MIDIOutputMap:W.hl,MimeType:W.aw,MimeTypeArray:W.hn,PointerEvent:W.ax,MouseEvent:W.ax,DragEvent:W.ax,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dj,RadioNodeList:W.dj,Plugin:W.ay,PluginArray:W.hD,RTCStatsReport:W.hO,HTMLSelectElement:W.hR,SourceBuffer:W.az,SourceBufferList:W.i1,SpeechGrammar:W.aA,SpeechGrammarList:W.i2,SpeechRecognitionResult:W.aB,Storage:W.i5,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.dy,HTMLTableRowElement:W.i9,HTMLTableSectionElement:W.ia,HTMLTemplateElement:W.ci,TextTrack:W.aC,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.id,TextTrackList:W.ie,TimeRanges:W.il,Touch:W.aD,TouchEvent:W.bC,TouchList:W.iq,TrackDefaultList:W.ir,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,URL:W.iN,VideoTrackList:W.j4,WheelEvent:W.bh,Window:W.cs,DOMWindow:W.cs,CSSRuleList:W.jd,ClientRect:W.dR,DOMRect:W.dR,GamepadList:W.ji,NamedNodeMap:W.e9,MozNamedAttrMap:W.e9,SpeechRecognitionResultList:W.jw,StyleSheetList:W.jB,SVGLength:P.aO,SVGLengthList:P.fQ,SVGNumber:P.aS,SVGNumberList:P.hy,SVGPointList:P.hG,SVGScriptElement:P.cf,SVGStringList:P.i8,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aU,SVGTransformList:P.is,AudioBuffer:P.eT,AudioParamMap:P.eU,AudioTrackList:P.eW,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.hz,WebGL2RenderingContext:P.dr,SQLResultSetRowList:P.i3})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.mi,[])
else L.mi([])})})()
//# sourceMappingURL=test.dart.js.map
