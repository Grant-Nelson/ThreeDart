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
a[c]=function(){a[c]=function(){H.m8(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.j1(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iQ:function iQ(){},
kC:function(a,b,c,d){if(!!a.$in)return new H.eH(a,b,[c,d])
return new H.bJ(a,b,[c,d])},
ku:function(){return new P.h6("No element")},
kX:function(a,b){var u=J.b9(a)
if(typeof u!=="number")return u.E()
H.cW(a,0,u-1,b)},
cW:function(a,b,c,d){if(c-b<=32)H.kW(a,b,c,d)
else H.kV(a,b,c,d)},
kW:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.cc(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.Z()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
kV:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.X(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.X(a4+a5,2),f=g-j,e=g+j,d=J.cc(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.L(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a1()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
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
if(typeof l!=="number")return l.a1()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.Z()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.Z()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
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
H.cW(a3,a4,t-2,a6)
H.cW(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.L(a6.$2(d.h(a3,t),b),0);)++t
for(;J.L(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.cW(a3,t,s,a6)}else H.cW(a3,t,s,a6)},
M:function M(a){this.a=a},
n:function n(){},
bH:function bH(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b){this.a=null
this.b=a
this.c=b},
hT:function hT(a,b,c){this.a=a
this.b=b
this.$ti=c},
hU:function hU(a,b){this.a=a
this.b=b},
cw:function cw(){},
hE:function hE(){},
d9:function d9(){},
ce:function(a){var u,t=H.m9(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lV:function(a){return v.types[a]},
m_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iw},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.ap(a))
return u},
bQ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.kG(a)+H.jK(H.cd(a),0,null)},
kG:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.C||!!n.$ibY){r=C.k(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ce(t.length>1&&C.c.bh(t,0)===36?C.c.as(t,1):t)},
jv:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kQ:function(a){var u,t,s,r=H.b([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ap(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b_(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ap(s))}return H.jv(r)},
kP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ap(s))
if(s<0)throw H.c(H.ap(s))
if(s>65535)return H.kQ(a)}return H.jv(a)},
kO:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b_(u,10))>>>0,56320|u&1023)}throw H.c(P.ak(a,0,1114111,null,null))},
bj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kN:function(a){var u=H.bj(a).getFullYear()+0
return u},
kL:function(a){var u=H.bj(a).getMonth()+1
return u},
kH:function(a){var u=H.bj(a).getDate()+0
return u},
kI:function(a){var u=H.bj(a).getHours()+0
return u},
kK:function(a){var u=H.bj(a).getMinutes()+0
return u},
kM:function(a){var u=H.bj(a).getSeconds()+0
return u},
kJ:function(a){var u=H.bj(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ap(a))},
f:function(a,b){if(a==null)J.b9(a)
throw H.c(H.br(a,b))},
br:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=J.b9(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.cR(b,s)},
lO:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bk(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bk(a,c,!0,b,"end",u)
return new P.ad(!0,b,"end",null)},
ap:function(a){return new P.ad(!0,a,null,null)},
lK:function(a){if(typeof a!=="number")throw H.c(H.ap(a))
return a},
c:function(a){var u
if(a==null)a=new P.cO()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jY})
u.name=""}else u.toString=H.jY
return u},
jY:function(){return J.a5(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bz(a))},
an:function(a){var u,t,s,r,q,p
a=H.jV(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ht(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jD:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jr:function(a,b){return new H.fD(a,b==null?null:b.method)},
iR:function(a,b){var u=b==null,t=u?null:b.method
return new H.f1(a,t,u?null:b.receiver)},
eb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iB(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iR(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jr(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k1()
q=$.k2()
p=$.k3()
o=$.k4()
n=$.k7()
m=$.k8()
l=$.k6()
$.k5()
k=$.ka()
j=$.k9()
i=r.a8(u)
if(i!=null)return f.$1(H.iR(u,i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.iR(u,i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jr(u,i))}}return f.$1(new H.hD(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cY()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cY()
return a},
j4:function(a){var u
if(a==null)return new H.dP(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dP(a)},
lS:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
lZ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bq:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lZ)
a.$identity=u
return u},
ko:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h7().constructor.prototype):Object.create(new H.bv(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ae
if(typeof t!=="number")return t.w()
$.ae=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.je(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kk(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.je(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kk:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lV,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jd:H.iF
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kl:function(a,b,c,d){var u=H.iF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
je:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kn(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kl(t,!r,u,b)
if(t===0){r=$.ae
if(typeof r!=="number")return r.w()
$.ae=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bw
return new Function(r+H.e(q==null?$.bw=H.en("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ae
if(typeof r!=="number")return r.w()
$.ae=r+1
o+=r
r="return function("+o+"){return this."
q=$.bw
return new Function(r+H.e(q==null?$.bw=H.en("self"):q)+"."+H.e(u)+"("+o+");}")()},
km:function(a,b,c,d){var u=H.iF,t=H.jd
switch(b?-1:a){case 0:throw H.c(H.kT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kn:function(a,b){var u,t,s,r,q,p,o,n=$.bw
if(n==null)n=$.bw=H.en("self")
u=$.jc
if(u==null)u=$.jc=H.en("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.km(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ae
if(typeof u!=="number")return u.w()
$.ae=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ae
if(typeof u!=="number")return u.w()
$.ae=u+1
return new Function(n+u+"}")()},
j1:function(a,b,c,d,e,f,g){return H.ko(a,b,c,d,!!e,!!f,g)},
iF:function(a){return a.a},
jd:function(a){return a.c},
en:function(a){var u,t,s,r=new H.bv("self","target","receiver","name"),q=J.iO(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
m3:function(a,b){throw H.c(H.kj(a,H.ce(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.m3(a,b)},
lQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kj:function(a,b){return new H.eo("CastError: "+P.iL(a)+": type '"+H.e(H.lG(a))+"' is not a subtype of type '"+b+"'")},
lG:function(a){var u,t=J.T(a)
if(!!t.$iby){u=H.lQ(t)
if(u!=null)return H.m4(u)
return"Closure"}return H.bR(a)},
m8:function(a){throw H.c(new P.ez(a))},
kT:function(a){return new H.fS(a)},
jP:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cd:function(a){if(a==null)return
return a.$ti},
mH:function(a,b,c){return H.iA(a["$a"+H.e(c)],H.cd(b))},
lU:function(a,b,c,d){var u=H.iA(a["$a"+H.e(c)],H.cd(b))
return u==null?null:u[d]},
jQ:function(a,b,c){var u=H.iA(a["$a"+H.e(b)],H.cd(a))
return u==null?null:u[c]},
b6:function(a,b){var u=H.cd(a)
return u==null?null:u[b]},
m4:function(a){return H.b4(a,null)},
b4:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.jK(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.lb(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lb:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.c.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.b4(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b4(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b4(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b4(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lR(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b4(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jK:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b4(p,c)}return"<"+u.i(0)+">"},
iA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mF:function(a,b,c){return a.apply(b,H.iA(J.T(b)["$a"+H.e(c)],H.cd(b)))},
mG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m0:function(a){var u,t,s,r,q=$.jR.$1(a),p=$.is[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ix[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jN.$2(a,q)
if(q!=null){p=$.is[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ix[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iy(u)
$.is[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ix[q]=u
return u}if(s==="-"){r=H.iy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jT(a,u)
if(s==="*")throw H.c(P.jE(q))
if(v.leafTags[q]===true){r=H.iy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jT(a,u)},
jT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.j6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iy:function(a){return J.j6(a,!1,null,!!a.$iw)},
m1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iy(u)
else return J.j6(u,c,null,null)},
lX:function(){if(!0===$.j5)return
$.j5=!0
H.lY()},
lY:function(){var u,t,s,r,q,p,o,n
$.is=Object.create(null)
$.ix=Object.create(null)
H.lW()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jU.$1(q)
if(p!=null){o=H.m1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lW:function(){var u,t,s,r,q,p,o=C.t()
o=H.bp(C.u,H.bp(C.v,H.bp(C.l,H.bp(C.l,H.bp(C.w,H.bp(C.x,H.bp(C.y(C.k),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jR=new H.iu(r)
$.jN=new H.iv(q)
$.jU=new H.iw(p)},
bp:function(a,b){return a(b)||b},
kx:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eS("Illegal RegExp pattern ("+String(p)+")",a))},
jW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jX:function(a,b,c){var u=H.m6(a,b,c)
return u},
m6:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jV(b),'g'),H.lP(c))},
ht:function ht(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fD:function fD(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a){this.a=a},
iB:function iB(a){this.a=a},
dP:function dP(a){this.a=a
this.b=null},
by:function by(){},
hd:function hd(){},
h7:function h7(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(a){this.a=a},
fS:function fS(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f0:function f0(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b
this.c=null},
bh:function bh(a,b){this.a=a
this.$ti=b},
f5:function f5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
f_:function f_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c9:function(a){return a},
ao:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.br(b,a))},
la:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lO(a,b,c))
return b},
bO:function bO(){},
cK:function cK(){},
bN:function bN(){},
cL:function cL(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
cM:function cM(){},
fC:function fC(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
lR:function(a){return J.jn(a?Object.keys(a):[],null)},
m9:function(a){return v.mangledGlobalNames[a]},
m2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
j6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
it:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.j5==null){H.lX()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jE("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.j9()]
if(r!=null)return r
r=H.m0(a)
if(r!=null)return r
if(typeof a=="function")return C.E
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.j9(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kv:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ak(a,0,4294967295,"length",null))
return J.jn(new Array(a),b)},
jn:function(a,b){return J.iO(H.b(a,[b]))},
iO:function(a){a.fixed$length=Array
return a},
kw:function(a,b){return J.ci(a,b)},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.eZ.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.a_)return a
return J.it(a)},
cc:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.a_)return a
return J.it(a)},
j2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.a_)return a
return J.it(a)},
lT:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bY.prototype
return a},
j3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.a_)return a
return J.it(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).q(a,b)},
ch:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cc(a).h(a,b)},
kf:function(a,b,c){return J.j3(a).eS(a,b,c)},
kg:function(a,b,c,d){return J.j3(a).f8(a,b,c,d)},
ci:function(a,b){return J.lT(a).aB(a,b)},
iC:function(a,b,c){return J.cc(a).fe(a,b,c)},
iD:function(a,b){return J.j2(a).C(a,b)},
kh:function(a,b){return J.j2(a).H(a,b)},
bu:function(a){return J.T(a).gG(a)},
b8:function(a){return J.j2(a).gM(a)},
b9:function(a){return J.cc(a).gj(a)},
jb:function(a,b){return J.j3(a).fO(a,b)},
a5:function(a){return J.T(a).i(a)},
a:function a(){},
eZ:function eZ(){},
cB:function cB(){},
cC:function cC(){},
fH:function fH(){},
bY:function bY(){},
aV:function aV(){},
aU:function aU(a){this.$ti=a},
iP:function iP(a){this.$ti=a},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bF:function bF(){},
cA:function cA(){},
cz:function cz(){},
bf:function bf(){}},P={
l_:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lH()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bq(new P.hW(s),1)).observe(u,{childList:true})
return new P.hV(s,u,t)}else if(self.setImmediate!=null)return P.lI()
return P.lJ()},
l0:function(a){self.scheduleImmediate(H.bq(new P.hX(a),0))},
l1:function(a){self.setImmediate(H.bq(new P.hY(a),0))},
l2:function(a){P.iW(C.i,a)},
iW:function(a,b){var u=C.d.X(a.a,1000)
return P.l7(u<0?0:u,b)},
jC:function(a,b){var u=C.d.X(a.a,1000)
return P.l8(u<0?0:u,b)},
l7:function(a,b){var u=new P.dV()
u.dz(a,b)
return u},
l8:function(a,b){var u=new P.dV()
u.dA(a,b)
return u},
mD:function(a){return new P.bn(a,1)},
l3:function(){return C.G},
l4:function(a){return new P.bn(a,3)},
le:function(a,b){return new P.ig(a,[b])},
lA:function(){var u,t
for(;u=$.bo,u!=null;){$.cb=null
t=u.b
$.bo=t
if(t==null)$.ca=null
u.a.$0()}},
lF:function(){$.j_=!0
try{P.lA()}finally{$.cb=null
$.j_=!1
if($.bo!=null)$.ja().$1(P.jO())}},
lD:function(a){var u=new P.dh(a)
if($.bo==null){$.bo=$.ca=u
if(!$.j_)$.ja().$1(P.jO())}else $.ca=$.ca.b=u},
lE:function(a){var u,t,s=$.bo
if(s==null){P.lD(a)
$.cb=$.ca
return}u=new P.dh(a)
t=$.cb
if(t==null){u.b=s
$.bo=$.cb=u}else{u.b=t.b
$.cb=t.b=u
if(u.b==null)$.ca=u}},
jB:function(a,b){var u=$.ab
if(u===C.e)return P.iW(a,b)
return P.iW(a,u.fc(b))},
kZ:function(a,b){var u=$.ab
if(u===C.e)return P.jC(a,b)
return P.jC(a,u.cE(b,P.d3))},
jL:function(a,b,c,d,e){var u={}
u.a=d
P.lE(new P.iq(u,e))},
lB:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
lC:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
dV:function dV(){this.c=0},
ii:function ii(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b){this.a=a
this.b=b},
c5:function c5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ig:function ig(a,b){this.a=a
this.$ti=b},
dh:function dh(a){this.a=a
this.b=null},
d_:function d_(){},
ha:function ha(){},
d3:function d3(){},
ik:function ik(){},
iq:function iq(a,b){this.a=a
this.b=b},
i9:function i9(){},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function(a,b){return new H.G([a,b])},
kA:function(a){return H.lS(a,new H.G([null,null]))},
jo:function(a){return new P.i6([a])},
iZ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l6:function(a,b){var u=new P.dx(a,b)
u.c=a.e
return u},
kt:function(a,b,c){var u,t
if(P.j0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.r])
$.a1.push(a)
try{P.ld(a,u)}finally{if(0>=$.a1.length)return H.f($.a1,-1)
$.a1.pop()}t=P.jz(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iN:function(a,b,c){var u,t
if(P.j0(a))return b+"..."+c
u=new P.aF(b)
$.a1.push(a)
try{t=u
t.a=P.jz(t.a,a,", ")}finally{if(0>=$.a1.length)return H.f($.a1,-1)
$.a1.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j0:function(a){var u,t
for(u=$.a1.length,t=0;t<u;++t)if(a===$.a1[t])return!0
return!1},
ld:function(a,b){var u,t,s,r,q,p,o,n=a.gM(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.e(n.gF(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gF(n);++l
if(!n.t()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gF(n);++l
for(;n.t();r=q,q=p){p=n.gF(n);++l
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
jp:function(a){var u,t={}
if(P.j0(a))return"{...}"
u=new P.aF("")
try{$.a1.push(a)
u.a+="{"
t.a=!0
J.kh(a,new P.fa(t,u))
u.a+="}"}finally{if(0>=$.a1.length)return H.f($.a1,-1)
$.a1.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
i6:function i6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i7:function i7(a){this.a=a
this.c=this.b=null},
dx:function dx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eX:function eX(){},
f6:function f6(){},
q:function q(){},
f9:function f9(){},
fa:function fa(a,b){this.a=a
this.b=b},
Z:function Z(){},
ic:function ic(){},
dy:function dy(){},
eq:function eq(){},
eu:function eu(){},
eI:function eI(){},
hH:function hH(){},
hI:function hI(){},
ij:function ij(a){this.b=0
this.c=a},
ks:function(a){if(a instanceof H.by)return a.i(0)
return"Instance of '"+H.e(H.bR(a))+"'"},
kB:function(a,b,c){var u,t,s=J.kv(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iS:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b8(a);u.t();)t.push(u.gF(u))
if(b)return t
return J.iO(t)},
iV:function(a){var u,t=a.length,s=P.iT(0,null,t)
if(typeof s!=="number")return s.a1()
u=s<t
return H.kP(u?C.a.dm(a,0,s):a)},
kR:function(a){return new H.f_(a,H.kx(a,!1,!0,!1,!1,!1))},
jz:function(a,b,c){var u=J.b8(b)
if(!u.t())return a
if(c.length===0){do a+=H.e(u.gF(u))
while(u.t())}else{a+=H.e(u.gF(u))
for(;u.t();)a=a+c+H.e(u.gF(u))}return a},
l9:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.m){u=$.ke().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.fg(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kO(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kp:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
jk:function(a){return new P.aP(1000*a)},
iL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ks(a)},
ki:function(a){return new P.ad(!1,null,null,a)},
iE:function(a,b,c){return new P.ad(!0,a,b,c)},
cR:function(a,b){return new P.bk(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.bk(b,c,!0,a,d,"Invalid value")},
iT:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.ak(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.ak(b,a,c,"end",null))
return b}return c},
jw:function(a,b){if(typeof a!=="number")return a.a1()
if(a<0)throw H.c(P.ak(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.b9(b):e
return new P.eW(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hF(a)},
jE:function(a){return new P.hC(a)},
bz:function(a){return new P.et(a)},
o:function(a){return new P.dq(a)},
j8:function(a){H.m2(a)},
b5:function b5(){},
a7:function a7(a,b){this.a=a
this.b=b},
J:function J(){},
aP:function aP(a){this.a=a},
eF:function eF(){},
eG:function eG(){},
bd:function bd(){},
cO:function cO(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e,f){var _=this
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
hF:function hF(a){this.a=a},
hC:function hC(a){this.a=a},
h6:function h6(a){this.a=a},
et:function et(a){this.a=a},
fG:function fG(){},
cY:function cY(){},
ez:function ez(a){this.a=a},
dq:function dq(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
u:function u(){},
j:function j(){},
eY:function eY(){},
aX:function aX(){},
bI:function bI(){},
aY:function aY(){},
a4:function a4(){},
a_:function a_(){},
r:function r(){},
aF:function aF(a){this.a=a},
lN:function(a){var u,t=J.T(a)
if(!!t.$iaR){u=t.gcJ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e_(a.data,a.height,a.width)},
lM:function(a){if(a instanceof P.e_)return{data:a.a,height:a.b,width:a.c}
return a},
aJ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kz(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lL:function(a){var u={}
a.H(0,new P.ir(u))
return u},
jj:function(){var u=$.ji
return u==null?$.ji=J.iC(window.navigator.userAgent,"Opera",0):u},
kr:function(){var u,t=$.jf
if(t!=null)return t
u=$.jg
if(u==null?$.jg=J.iC(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.jh
if(u==null)u=$.jh=!P.jj()&&J.iC(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=P.jj()?"-o-":"-webkit-"}return $.jf=t},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
eO:function eO(a,b){this.a=a
this.b=b},
eP:function eP(){},
eQ:function eQ(){},
i5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l5:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
i8:function i8(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
f3:function f3(){},
aZ:function aZ(){},
fE:function fE(){},
fL:function fL(){},
hb:function hb(){},
k:function k(){},
b_:function b_(){},
hs:function hs(){},
dv:function dv(){},
dw:function dw(){},
dG:function dG(){},
dH:function dH(){},
dR:function dR(){},
dS:function dS(){},
dY:function dY(){},
dZ:function dZ(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(a){this.a=a},
ek:function ek(){},
ba:function ba(){},
fF:function fF(){},
di:function di(){},
cT:function cT(){},
h5:function h5(){},
dN:function dN(){},
dO:function dO(){}},W={
iH:function(){var u=document.createElement("canvas")
return u},
iK:function(a){return"wheel"},
jm:function(a){var u=document.createElement("img")
u.src=a
return u},
i4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jJ:function(a,b,c,d){var u=W.i4(W.i4(W.i4(W.i4(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
N:function(a,b,c,d){var u=W.jM(new W.i2(c),W.i)
if(u!=null&&!0)J.kg(a,b,u,!1)
return new W.i1(a,b,u,!1)},
jM:function(a,b){var u=$.ab
if(u===C.e)return a
return u.cE(a,b)},
l:function l(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
cl:function cl(){},
bb:function bb(){},
aO:function aO(){},
ev:function ev(){},
F:function F(){},
bc:function bc(){},
ew:function ew(){},
a6:function a6(){},
af:function af(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eC:function eC(){},
ct:function ct(){},
cu:function cu(){},
eD:function eD(){},
eE:function eE(){},
i_:function i_(a,b){this.a=a
this.b=b},
P:function P(){},
i:function i(){},
d:function d(){},
at:function at(){},
eM:function eM(){},
eN:function eN(){},
eR:function eR(){},
au:function au(){},
eU:function eU(){},
bD:function bD(){},
aR:function aR(){},
bE:function bE(){},
bg:function bg(){},
f7:function f7(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(a){this.a=a},
ft:function ft(){},
fu:function fu(a){this.a=a},
aw:function aw(){},
fv:function fv(){},
ai:function ai(){},
hZ:function hZ(a){this.a=a},
B:function B(){},
cN:function cN(){},
az:function az(){},
fI:function fI(){},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
fT:function fT(){},
aC:function aC(){},
h2:function h2(){},
aD:function aD(){},
h3:function h3(){},
aE:function aE(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
al:function al(){},
aG:function aG(){},
am:function am(){},
he:function he(){},
hf:function hf(){},
hn:function hn(){},
aH:function aH(){},
bl:function bl(){},
hq:function hq(){},
hr:function hr(){},
b0:function b0(){},
hG:function hG(){},
hS:function hS(){},
b3:function b3(){},
bZ:function bZ(){},
i0:function i0(){},
dk:function dk(){},
i3:function i3(){},
dD:function dD(){},
id:function id(){},
ie:function ie(){},
i1:function i1(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i2:function i2(a){this.a=a},
H:function H(){},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dj:function dj(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
dF:function dF(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
c3:function c3(){},
c4:function c4(){},
dL:function dL(){},
dM:function dM(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
c6:function c6(){},
c7:function c7(){},
dW:function dW(){},
dX:function dX(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){}},K={
R:function(a){var u=new K.fU()
u.dv(a)
return u},
ed:function ed(){},
cy:function cy(){},
cH:function cH(){},
ay:function ay(){this.a=null},
fU:function fU(){this.a=null}},L={cZ:function cZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},d5:function d5(a){this.b=a
this.c=null},ho:function ho(){var _=this
_.d=_.c=_.b=_.a=null},d7:function d7(a){this.b=a
this.a=this.c=null}},O={
iI:function(a){var u=new O.aq([a])
u.aX(a)
return u},
aq:function aq(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bL:function bL(){this.b=this.a=null},
cI:function cI(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fi:function fi(a,b){this.a=a
this.b=b},
fj:function fj(){},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(){},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fc:function fc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bK:function bK(){},
fd:function fd(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ag:function ag(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ff:function ff(){var _=this
_.e=_.d=_.c=_.b=null},
fg:function fg(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fh:function fh(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cV:function cV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){}},E={
jl:function(){var u,t=new E.as()
t.a=""
t.b=!0
u=O.iI(E.as)
t.y=u
u.aF(t.gfv(),t.gfA())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbf(0,null)
return t},
kS:function(a,b){var u=new E.fM(a)
u.du(a,b)
return u},
kY:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibb)return E.jA(a,!0,!0,!0,!1)
u=W.iH()
t=u.style
t.width="100%"
t.height="100%"
s.gcH(a).l(0,u)
return E.jA(u,!0,!0,!0,!1)},
jA:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d2(),p=C.f.bZ(a,"webgl2",P.kA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kS(p,a)
u=new T.hj(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.da(a)
t=new X.f2()
t.c=new X.a8(!1,!1,!1)
t.d=P.jo(P.u)
u.b=t
t=new X.fw(u)
t.f=0
t.r=V.aA()
t.x=V.aA()
t.ch=t.Q=1
u.c=t
t=new X.f8(u)
t.r=0
t.x=V.aA()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hp(u)
t.f=V.aA()
t.r=V.aA()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d_,P.a_]])
u.z=t
s=document
t.push(W.N(s,"contextmenu",u.geb(),!1))
u.z.push(W.N(a,"focus",u.geh(),!1))
u.z.push(W.N(a,"blur",u.ge5(),!1))
u.z.push(W.N(s,"keyup",u.gel(),!1))
u.z.push(W.N(s,"keydown",u.gej(),!1))
u.z.push(W.N(a,"mousedown",u.gep(),!1))
u.z.push(W.N(a,"mouseup",u.geu(),!1))
u.z.push(W.N(a,r,u.ger(),!1))
t=u.z
W.iK(a)
W.iK(a)
t.push(W.N(a,W.iK(a),u.gew(),!1))
u.z.push(W.N(s,r,u.ged(),!1))
u.z.push(W.N(s,"mouseup",u.gef(),!1))
u.z.push(W.N(s,"pointerlockchange",u.gey(),!1))
u.z.push(W.N(a,"touchstart",u.geO(),!1))
u.z.push(W.N(a,"touchend",u.geK(),!1))
u.z.push(W.N(a,"touchmove",u.geM(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cp()
return q},
em:function em(){},
as:function as(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
d2:function d2(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hm:function hm(a){this.a=a}},Z={
iY:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c9(c)),35044)
a.bindBuffer(b,null)
return new Z.df(b,u)},
a9:function(a){return new Z.aI(a)},
df:function df(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dg:function dg(a){this.a=a},
bx:function bx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
z:function(){var u=new D.bA()
u.d=0
return u},
ep:function ep(){},
bA:function bA(){var _=this
_.d=_.c=_.b=_.a=null},
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
Q:function Q(){this.b=null},
aS:function aS(){this.b=null},
aT:function aT(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
el:function el(){},
eB:function eB(){},
Y:function Y(){},
cE:function cE(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fJ:function fJ(){},
h4:function h4(){}},X={cn:function cn(a,b){this.a=a
this.b=b},cD:function cD(a,b){this.a=a
this.b=b},f2:function f2(){var _=this
_.d=_.c=_.b=_.a=null},cF:function cF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},f8:function f8(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},ax:function ax(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fw:function fw(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bM:function bM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fK:function fK(){},d6:function d6(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hp:function hp(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},da:function da(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iM:function(a){var u=new X.eT(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jy
if(t==null){t=V.jx(0,0,1,1)
$.jy=t}u.r=t
return u},
js:function(a){var u,t,s=new X.cP()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdB())
t=new D.x("mover",u,s.b)
t.b=!0
s.ag(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.y().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.ag(t)}t=s.d
if(!(Math.abs(t-0.1)<$.y().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.ag(t)}t=s.e
if(!(Math.abs(t-2000)<$.y().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.ag(t)}return s},
iG:function iG(){},
eT:function eT(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(){this.b=this.a=null},
cP:function cP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(){}},V={
er:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ar(u,t,s,1)},
ma:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dg(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.c.a9("null",c)
return C.c.a9(C.b.dd(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bs:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.c.a9(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
j7:function(a){return C.b.fU(Math.pow(2,C.D.bN(Math.log(H.lK(a))/Math.log(2))))},
bi:function(){var u=$.jq
return u==null?$.jq=V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aA:function(){var u=$.ju
return u==null?$.ju=new V.W(0,0):u},
kF:function(){var u=$.aj
return u==null?$.aj=new V.O(0,0,0):u},
jx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cS(a,b,c,d)},
de:function(){var u=$.jI
return u==null?$.jI=new V.D(0,0,0):u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
cJ:function cJ(a,b,c,d,e,f,g,h,i){var _=this
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
W:function W(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function(a){P.kZ(C.B,new V.iz(a))},
kU:function(a){var u=new V.fZ()
u.dw(a,!0)
return u},
iz:function iz(a){this.a=a},
fZ:function fZ(){this.b=this.a=null},
h0:function h0(a){this.a=a},
h_:function h_(a){this.a=a}},U={
iJ:function(){var u=new U.es()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
es:function es(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bC:function bC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
db:function db(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={co:function co(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cq:function cq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cv:function cv(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aa:function aa(){},
jS:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="modifiers",a6=34067,a7=V.kU("Test 034"),a8=W.iH()
a8.className="pageLargeCanvas"
a8.id=a3
a7.a.appendChild(a8)
u=[P.r]
a7.cz(H.b(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],u))
a7.cz(H.b(["\xab[Back to Tests|../]"],u))
u=document
a8=u.getElementById(a3)
a7=a8.style
a7.width="100%"
a7.height="100%"
a7.margin="-4px"
t=u.createElement("div")
a7=t.style
a7.border="2px solid"
a7.padding="10px"
C.n.eW(a7,(a7&&C.n).dH(a7,"resize"),"both","")
a7.overflow="auto"
J.jb(a8,t)
t.appendChild(a8)
s=u.getElementById(a3)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.kY(s,!0,!0,!0,!1)
q=new U.bC()
q.aX(U.a2)
q.aF(q.gdY(),q.geC())
q.e=null
q.f=V.bi()
q.r=0
a7=r.x
u=new U.dc()
p=U.iJ()
p.sbY(0,!0)
p.sbS(6.283185307179586)
p.sbU(0)
p.sa3(0,0)
p.sbT(100)
p.sN(0)
p.sbE(0.5)
u.b=p
o=u.gax()
p.gm().l(0,o)
p=U.iJ()
p.sbY(0,!0)
p.sbS(6.283185307179586)
p.sbU(0)
p.sa3(0,0)
p.sbT(100)
p.sN(0)
p.sbE(0.5)
u.c=p
p.gm().l(0,o)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
n=new X.a8(!1,!1,!1)
m=u.d
u.d=n
p=new D.x(a5,m,n)
p.b=!0
u.K(p)
p=u.f
if(p!==!1){u.f=!1
p=new D.x("invertX",p,!1)
p.b=!0
u.K(p)}p=u.r
if(p!==!1){u.r=!1
p=new D.x("invertY",p,!1)
p.b=!0
u.K(p)}u.aM(a7)
q.l(0,u)
a7=r.x
u=new U.db()
p=U.iJ()
p.sbY(0,!0)
p.sbS(6.283185307179586)
p.sbU(0)
p.sa3(0,0)
p.sbT(100)
p.sN(0)
p.sbE(0.2)
u.b=p
p.gm().l(0,u.gax())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
n=new X.a8(!0,!1,!1)
m=u.c
u.c=n
p=new D.x(a5,m,n)
p.b=!0
u.K(p)
u.aM(a7)
q.l(0,u)
a7=r.x
u=new U.dd()
u.c=0.01
u.e=u.d=0
n=new X.a8(!1,!1,!1)
u.b=n
p=new D.x(a5,a4,n)
p.b=!0
u.K(p)
u.aM(a7)
q.l(0,u)
l=V.ah(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a7=new U.cp()
a7.a=l
q.l(0,a7)
k=X.js(q)
j=new O.cI()
a7=O.iI(V.av)
j.e=a7
a7.aF(j.ge1(),j.ge3())
a7=new O.ag(j,"emission")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.f=a7
a7=new O.ag(j,"ambient")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.r=a7
a7=new O.ag(j,"diffuse")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.x=a7
a7=new O.ag(j,"invDiffuse")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.y=a7
a7=new O.fh(j,"specular")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
a7.ch=100
j.z=a7
a7=new O.fd(j,"bump")
a7.c=new A.V(!1,!1,!1)
j.Q=a7
j.ch=null
a7=new O.ag(j,"reflect")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
j.cx=a7
a7=new O.fg(j,"refract")
a7.c=new A.V(!1,!1,!1)
a7.f=new V.U(0,0,0)
a7.ch=1
j.cy=a7
a7=new O.fc(j,"alpha")
a7.c=new A.V(!1,!1,!1)
a7.f=1
j.db=a7
a7=new D.cE()
a7.aX(D.Y)
a7.e=H.b([],[D.el])
a7.f=H.b([],[D.eB])
a7.r=H.b([],[D.fJ])
a7.x=H.b([],[D.h4])
a7.z=a7.y=null
a7.c_(a7.ge_(),a7.geA(),a7.geE())
j.dx=a7
u=new O.ff()
u.b=new V.ar(0,0,0,0)
u.c=1
u.d=10
u.e=!1
j.dy=u
u=a7.y
a7=u==null?a7.y=D.z():u
a7.l(0,j.geU())
a7=j.dx
u=a7.z
a7=u==null?a7.z=D.z():u
a7.l(0,j.gau())
j.fr=null
a7=j.r
a7.saA(0,new V.U(0.3,0.3,0.3))
a7=j.x
a7.saA(0,new V.U(0.8,0.8,0.8))
a7=j.x
u=r.f.ft("../resources/Test.png")
p=a7.c
if(!p.b)a7.cs(new A.V(p.a,!0,!1))
p=a7.d
if(p!==u){if(p!=null)p.gm().O(0,a7.gau())
m=a7.d
a7.d=u
u.gm().l(0,a7.gau())
u=new D.x(a7.b+".texture2D",m,a7.d)
u.b=!0
a7.a.P(u)}i=X.iM(a4)
if(i.b){i.b=!1
a7=new D.x("clearColor",!0,!1)
a7.b=!0
i.ag(a7)}h=E.jl()
g=F.iU()
F.c8(g,a4,a4,1,1,1,0,0,1)
F.c8(g,a4,a4,1,1,0,1,0,3)
F.c8(g,a4,a4,1,1,0,0,1,2)
F.c8(g,a4,a4,1,1,-1,0,0,0)
F.c8(g,a4,a4,1,1,0,-1,0,0)
F.c8(g,a4,a4,1,1,0,0,-1,3)
g.al()
h.sbf(0,g)
f=new M.cv()
f.a=!0
a7=O.iI(E.as)
f.e=a7
a7.aF(f.ge7(),f.ge9())
f.y=f.x=f.r=f.f=null
e=X.iM(a4)
f.saN(a4)
f.saS(0,e)
f.saT(a4)
f.e.l(0,h)
f.saT(j)
f.saS(0,i)
f.saN(k)
a7=r.f
u=a7.a
d=u.createTexture()
u.bindTexture(a6,d)
u.texParameteri(a6,10242,10497)
u.texParameteri(a6,10243,10497)
u.texParameteri(a6,10241,9729)
u.texParameteri(a6,10240,9729)
u.bindTexture(a6,a4)
c=new T.hi()
c.a=0
c.b=d
c.c=!1
c.d=0
a7.aw(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a7.aw(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a7.aw(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a7.aw(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.cq()
b.a=!0
a7=E.jl()
g=F.iU()
u=g.a
p=new V.D(-1,-1,1)
p=p.u(0,Math.sqrt(p.A(p)))
a=u.b2(new V.aB(1,2,4,6),V.er(255,0,0),new V.O(-1,-1,0),new V.W(0,1),p,a4)
p=g.a
u=new V.D(1,-1,1)
u=u.u(0,Math.sqrt(u.A(u)))
a0=p.b2(new V.aB(0,3,4,6),V.er(0,0,255),new V.O(1,-1,0),new V.W(1,1),u,a4)
u=g.a
p=new V.D(1,1,1)
p=p.u(0,Math.sqrt(p.A(p)))
a1=u.b2(new V.aB(0,2,5,6),V.er(0,128,0),new V.O(1,1,0),new V.W(1,0),p,a4)
p=g.a
u=V.aA()
o=new V.D(-1,1,1)
o=o.u(0,Math.sqrt(o.A(o)))
a2=p.b2(new V.aB(0,2,4,7),V.er(255,255,0),new V.O(-1,1,0),u,o,a4)
g.d.f9(H.b([a,a0,a1,a2],[F.bm]))
g.al()
a7.sbf(0,g)
b.e=a7
b.saN(a4)
b.saS(0,a4)
b.saT(a4)
a7=new O.cV()
a7.b=1.0471975511965976
a7.d=new V.U(1,1,1)
m=a7.c
a7.c=c
c.gm().l(0,a7.gau())
u=new D.x("boxTexture",m,a7.c)
u.b=!0
a7.P(u)
b.saT(a7)
b.saS(0,i)
b.saN(k)
a7=M.aa
u=H.b([b,f],[a7])
p=new M.co()
p.aX(a7)
p.e=!0
p.f=!1
p.r=null
p.aF(p.geG(),p.geI())
p.b1(0,u)
a7=r.d
if(a7!==p){if(a7!=null)a7.gm().O(0,r.gc7())
r.d=p
p.gm().l(0,r.gc7())
r.c8()}V.m5(r)}},A={
kD:function(a,b){var u=a.aP,t=new A.fb(b,u)
t.c5(b,u)
t.dt(a,b)
return t},
kE:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+b0.gaf(b0)+b1.gaf(b1)+"_"
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
d=$.ac()
if(j){u=$.aM()
d=new Z.aI(d.a|u.a)}if(i){u=$.aL()
d=new Z.aI(d.a|u.a)}if(h){u=$.aN()
d=new Z.aI(d.a|u.a)}if(g){u=$.aK()
d=new Z.aI(d.a|u.a)}return new A.fe(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
io:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ip:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.io(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ea(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
lj:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.io(b,t,"emission")
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
lf:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ip(b,t,"ambient")
b.a+="\n"},
lh:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ip(b,t,"diffuse")
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
lk:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ip(b,t,"invDiffuse")
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
lq:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ip(b,t,"specular")
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
lm:function(a,b){var u,t,s
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
lo:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.io(b,t,"reflect")
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
lp:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.io(b,t,"refract")
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
lg:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.ea(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.r]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.p(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(q," + ")+");\n"
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
li:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.ea(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ac()
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
r=[P.r]
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
c.a+="      highLight = intensity*("+C.a.p(m," + ")+");\n"}else c.a+="   highLight = "+C.a.p(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
ln:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.ea(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.r]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.p(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.p(l," + ")+");\n"
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
lr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.ea(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=u+"\n"}u=[P.r]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.p(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
ll:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.r])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ls:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aF("")
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
A.lj(a,j)
A.lf(a,j)
A.lh(a,j)
A.lk(a,j)
A.lq(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lo(a,j)
A.lp(a,j)}A.lm(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lg(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.li(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.ln(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lr(a,q[o],j)
A.ll(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.r])
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
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.as(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lt:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aC+"];\n"
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
lv:function(a,b){var u
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
lu:function(a,b){var u
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
lx:function(a,b){var u,t
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
ly:function(a,b){var u,t
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
lw:function(a,b){var u
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
lz:function(a,b){var u
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
ea:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.c.as(a,1)},
iX:function(a,b,c,d,e){var u=new A.hv(a,c,e)
u.f=d
P.kB(d,0,P.u)
return u},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a,b){var _=this
_.h4=_.cP=_.b6=_.aP=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hc=_.hb=_.ha=_.bM=_.bL=_.bK=_.bJ=_.bI=_.bH=_.bG=_.bF=_.h9=_.d0=_.d_=_.h8=_.cZ=_.cY=_.cX=_.h7=_.cW=_.cV=_.cU=_.h6=_.cT=_.cS=_.h5=_.cR=_.cQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ck:function ck(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aC=b3
_.aP=b4
_.b6=b5},
bT:function bT(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bU:function bU(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bW:function bW(a,b,c,d,e,f,g,h,i,j){var _=this
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
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cU:function cU(){},
h1:function h1(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d8:function d8(){},
hA:function hA(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
A:function A(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
b2:function b2(a,b,c){this.a=a
this.c=b
this.d=c}},F={
im:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c8:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.D(h,g+a1,f+a2)
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
j.d=i}m=F.im(i)
l=F.im(h)
k=F.m7(d,a0,new F.il(j,F.im(g),F.im(f),l,m,c),b)
if(k!=null)a.fu(k)},
m7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.iU()
t=H.b([],[F.bm])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hJ(g,g,new V.ar(p,0,0,1),g,g,new V.W(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hJ(g,g,new V.ar(j,i,h,1),g,g,new V.W(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bD(d))}}u.d.fa(a+1,b+1,t)
return u},
bB:function(a,b,c){var u=new F.aQ(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
ky:function(a,b){var u=new F.bG(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
iU:function(){var u=new F.fV(),t=new F.hK(u)
t.b=!1
t.c=H.b([],[F.bm])
u.a=t
t=new F.fY(u)
t.b=H.b([],[F.bP])
u.b=t
t=new F.fX(u)
t.b=H.b([],[F.bG])
u.c=t
t=new F.fW(u)
t.b=H.b([],[F.aQ])
u.d=t
u.e=null
return u},
hJ:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bm(),r=new F.hP()
r.b=H.b([],[F.bP])
s.b=r
r=new F.hO()
u=[F.bG]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hL()
u=[F.aQ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kb()
s.e=0
r=$.ac()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aM().a)!==0?e:t
s.x=(u&$.aL().a)!==0?b:t
s.y=(u&$.aN().a)!==0?f:t
s.z=(u&$.b7().a)!==0?g:t
s.Q=(u&$.kc().a)!==0?c:t
s.ch=(u&$.bt().a)!==0?i:0
s.cx=(u&$.aK().a)!==0?a:t
return s},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aQ:function aQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bG:function bG(){this.b=this.a=null},
bP:function bP(){this.a=null},
fV:function fV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a){this.a=a
this.b=null},
fX:function fX(a){this.a=a
this.b=null},
fY:function fY(a){this.a=a
this.b=null},
bm:function bm(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hR:function hR(a){this.a=a},
hQ:function hQ(a){this.a=a},
hK:function hK(a){this.a=a
this.c=this.b=null},
hL:function hL(){this.d=this.c=this.b=null},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){this.c=this.b=null},
hP:function hP(){this.b=null}},T={d1:function d1(){},hg:function hg(){},hh:function hh(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hi:function hi(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hj:function hj(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hl:function hl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hk:function hk(a,b,c,d,e,f,g){var _=this
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
H.iQ.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.bQ(a)},
i:function(a){return"Instance of '"+H.e(H.bR(a))+"'"}}
J.eZ.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ib5:1}
J.cB.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.cC.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.fH.prototype={}
J.bY.prototype={}
J.aV.prototype={
i:function(a){var u=a[$.k0()]
if(u==null)return this.dr(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aU.prototype={
fM:function(a,b){var u
if(!!a.fixed$length)H.p(P.v("removeAt"))
u=a.length
if(b>=u)throw H.c(P.cR(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.p(P.v("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
b1:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bz(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fq:function(a){return this.p(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dm:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ak(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ak(c,b,u,"end",null))
if(b===c)return H.b([],[H.b6(a,0)])
return H.b(a.slice(b,c),[H.b6(a,0)])},
gbP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ku())},
aH:function(a,b){if(!!a.immutable$list)H.p(P.v("sort"))
H.kX(a,b==null?J.lc():b)},
dl:function(a){return this.aH(a,null)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.iN(a,"[","]")},
gM:function(a){return new J.X(a,a.length)},
gG:function(a){return H.bQ(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iE(b,u,null))
if(b<0)throw H.c(P.ak(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.br(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.br(a,b))
a[b]=c},
$in:1,
$ij:1}
J.iP.prototype={}
J.X.prototype={
gF:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bF.prototype={
aB:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ap(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb7(b)
if(this.gb7(a)===u)return 0
if(this.gb7(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb7:function(a){return a===0?1/a<0:a<0},
fU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
dd:function(a,b){var u
if(b>20)throw H.c(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb7(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.ap(b))
return a*b},
dg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ds:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ct(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.ct(a,b)},
ct:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.f0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f0:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia4:1}
J.cA.prototype={$iu:1}
J.cz.prototype={}
J.bf.prototype={
bC:function(a,b){if(b<0)throw H.c(H.br(a,b))
if(b>=a.length)H.p(H.br(a,b))
return a.charCodeAt(b)},
bh:function(a,b){if(b>=a.length)throw H.c(H.br(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.c(P.iE(b,null,null))
return a+b},
c1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cR(b,null))
if(b>c)throw H.c(P.cR(b,null))
if(c>a.length)throw H.c(P.cR(c,null))
return a.substring(b,c)},
as:function(a,b){return this.c1(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
fe:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.ak(c,0,u,null,null))
return H.jW(a,b,c)},
aB:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ap(b))
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
gj:function(a){return a.length},
$ir:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bC(this.a,b)},
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$aj:function(){return[P.u]}}
H.n.prototype={}
H.bH.prototype={
gF:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.cc(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bz(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.bJ.prototype={
gM:function(a){return new H.cG(J.b8(this.a),this.b)},
gj:function(a){return J.b9(this.a)},
C:function(a,b){return this.b.$1(J.iD(this.a,b))},
$aj:function(a,b){return[b]}}
H.eH.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cG.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gF(t))
return!0}u.a=null
return!1},
gF:function(a){return this.a}}
H.hT.prototype={
gM:function(a){return new H.hU(J.b8(this.a),this.b)}}
H.hU.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.cw.prototype={}
H.hE.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.d9.prototype={}
H.ht.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fD.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f1.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hD.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iB.prototype={
$1:function(a){if(!!J.T(a).$ibd)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dP.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.by.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ce(t==null?"unknown":t)+"'"},
gfZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hd.prototype={}
H.h7.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.bv.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bv))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bQ(this.a)
else u=typeof t!=="object"?J.bu(t):H.bQ(t)
return(u^H.bQ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bR(u))+"'")}}
H.eo.prototype={
i:function(a){return this.a}}
H.fS.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.G.prototype={
gj:function(a){return this.a},
gao:function(a){return new H.bh(this,[H.b6(this,0)])},
gfY:function(a){var u=this,t=H.b6(u,0)
return H.kC(new H.bh(u,[t]),new H.f0(u),t,H.b6(u,1))},
ff:function(a,b){var u=this.b
if(u==null)return!1
return this.dM(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fp(b)},
fp:function(a){var u,t,s=this.d
if(s==null)return
u=this.cj(s,J.bu(a)&0x3ffffff)
t=this.d2(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cb(u==null?o.b=o.bu():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cb(t==null?o.c=o.bu():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bu()
r=J.bu(b)&0x3ffffff
q=o.cj(s,r)
if(q==null)o.bx(s,r,[o.bv(b,c)])
else{p=o.d2(q,b)
if(p>=0)q[p].b=c
else q.push(o.bv(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bz(u))
t=t.c}},
cb:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.bx(a,b,this.bv(b,c))
else u.b=c},
bv:function(a,b){var u=this,t=new H.f4(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.jp(this)},
aY:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
dP:function(a,b){delete a[b]},
dM:function(a,b){return this.aY(a,b)!=null},
bu:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bx(t,u,t)
this.dP(t,u)
return t}}
H.f0.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b6(u,1),args:[H.b6(u,0)]}}}
H.f4.prototype={}
H.bh.prototype={
gj:function(a){return this.a.a},
gM:function(a){var u=this.a,t=new H.f5(u,u.r)
t.c=u.e
return t}}
H.f5.prototype={
gF:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bz(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iu.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iv.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iw.prototype={
$1:function(a){return this.a(a)}}
H.f_.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bO.prototype={}
H.cK.prototype={
gj:function(a){return a.length},
$iw:1,
$aw:function(){}}
H.bN.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.J]},
$aq:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cL.prototype={
k:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
H.fx.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fy.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fz.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fA.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fB.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.cM.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fC.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.c_.prototype={}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
P.hW.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.hV.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hX.prototype={
$0:function(){this.a.$0()}}
P.hY.prototype={
$0:function(){this.a.$0()}}
P.dV.prototype={
dz:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bq(new P.ii(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bq(new P.ih(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id3:1}
P.ii.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ih.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.ds(u,q)}s.c=r
t.d.$1(s)}}
P.bn.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.c5.prototype={
gF:function(a){var u=this.c
if(u==null)return this.b
return u.gF(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bn){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.b8(u)
if(!!r.$ic5){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ig.prototype={
gM:function(a){return new P.c5(this.a())}}
P.dh.prototype={}
P.d_.prototype={}
P.ha.prototype={}
P.d3.prototype={}
P.ik.prototype={}
P.iq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cO():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.i9.prototype={
fQ:function(a){var u,t,s,r=null
try{if(C.e===$.ab){a.$0()
return}P.lB(r,r,this,a)}catch(s){u=H.eb(s)
t=H.j4(s)
P.jL(r,r,this,u,t)}},
fR:function(a,b){var u,t,s,r=null
try{if(C.e===$.ab){a.$1(b)
return}P.lC(r,r,this,a,b)}catch(s){u=H.eb(s)
t=H.j4(s)
P.jL(r,r,this,u,t)}},
fS:function(a,b){return this.fR(a,b,null)},
fc:function(a){return new P.ia(this,a)},
cE:function(a,b){return new P.ib(this,a,b)}}
P.ia.prototype={
$0:function(){return this.a.fQ(this.b)}}
P.ib.prototype={
$1:function(a){return this.a.fS(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.i6.prototype={
gM:function(a){var u=new P.dx(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dK(b)
return t}},
dK:function(a){var u=this.d
if(u==null)return!1
return this.bl(this.ci(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cc(u==null?s.b=P.iZ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cc(t==null?s.c=P.iZ():t,b)}else return s.dD(0,b)},
dD:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iZ()
u=s.cd(b)
t=r[u]
if(t==null)r[u]=[s.bi(b)]
else{if(s.bl(t,b)>=0)return!1
t.push(s.bi(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eR(this.c,b)
else return this.eQ(0,b)},
eQ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ci(r,b)
t=s.bl(u,b)
if(t<0)return!1
s.cv(u.splice(t,1)[0])
return!0},
cc:function(a,b){if(a[b]!=null)return!1
a[b]=this.bi(b)
return!0},
eR:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cv(u)
delete a[b]
return!0},
ck:function(){this.r=1073741823&this.r+1},
bi:function(a){var u,t=this,s=new P.i7(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ck()
return s},
cv:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ck()},
cd:function(a){return J.bu(a)&1073741823},
ci:function(a,b){return a[this.cd(b)]},
bl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.i7.prototype={}
P.dx.prototype={
gF:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bz(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eX.prototype={}
P.f6.prototype={$in:1,$ij:1}
P.q.prototype={
gM:function(a){return new H.bH(a,this.gj(a))},
C:function(a,b){return this.h(a,b)},
fW:function(a,b){var u,t,s=this,r=H.b([],[H.lU(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
fV:function(a){return this.fW(a,!0)},
i:function(a){return P.iN(a,"[","]")}}
P.f9.prototype={}
P.fa.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.Z.prototype={
H:function(a,b){var u,t
for(u=J.b8(this.gao(a));u.t();){t=u.gF(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.b9(this.gao(a))},
i:function(a){return P.jp(a)}}
P.ic.prototype={
i:function(a){return P.iN(this,"{","}")},
C:function(a,b){var u,t,s
P.jw(b,"index")
for(u=P.l6(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
$in:1,
$ij:1}
P.dy.prototype={}
P.eq.prototype={}
P.eu.prototype={}
P.eI.prototype={}
P.hH.prototype={}
P.hI.prototype={
fg:function(a){var u,t,s,r=P.iT(0,null,a.length)
if(typeof r!=="number")return r.E()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ij(t)
if(s.dR(a,0,r)!==r)s.cw(C.c.bC(a,r-1),0)
return new Uint8Array(t.subarray(0,H.la(0,s.b,t.length)))}}
P.ij.prototype={
cw:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dR:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bC(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.bh(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cw(r,C.c.bh(a,p)))s=p}else if(r<=2047){q=n.b
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
P.b5.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aB:function(a,b){return C.d.aB(this.a,b.a)},
gG:function(a){var u=this.a
return(u^C.d.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.kp(H.kN(u)),s=P.cr(H.kL(u)),r=P.cr(H.kH(u)),q=P.cr(H.kI(u)),p=P.cr(H.kK(u)),o=P.cr(H.kM(u)),n=P.kq(H.kJ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aP.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
aB:function(a,b){return C.d.aB(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eG(),q=this.a
if(q<0)return"-"+new P.aP(0-q).i(0)
u=r.$1(C.d.X(q,6e7)%60)
t=r.$1(C.d.X(q,1e6)%60)
s=new P.eF().$1(q%1e6)
return""+C.d.X(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bd.prototype={}
P.cO.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbk()+o+u
if(!q.a)return t
s=q.gbj()
r=P.iL(q.b)
return t+s+": "+r}}
P.bk.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eW.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t=this.b
if(typeof t!=="number")return t.a1()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hF.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hC.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.h6.prototype={
i:function(a){return"Bad state: "+this.a}}
P.et.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iL(u)+"."}}
P.fG.prototype={
i:function(a){return"Out of Memory"},
$ibd:1}
P.cY.prototype={
i:function(a){return"Stack Overflow"},
$ibd:1}
P.ez.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dq.prototype={
i:function(a){return"Exception: "+this.a}}
P.eS.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.c1(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gM(this)
for(u=0;t.t();)++u
return u},
C:function(a,b){var u,t,s
P.jw(b,"index")
for(u=this.gM(this),t=0;u.t();){s=u.gF(u)
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
i:function(a){return P.kt(this,"(",")")}}
P.eY.prototype={}
P.aX.prototype={$in:1,$ij:1}
P.bI.prototype={}
P.aY.prototype={
gG:function(a){return P.a_.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
q:function(a,b){return this===b},
gG:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.e(H.bR(this))+"'"},
toString:function(){return this.i(this)}}
P.r.prototype={}
P.aF.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.ec.prototype={
gj:function(a){return a.length}}
W.ee.prototype={
i:function(a){return String(a)}}
W.ef.prototype={
i:function(a){return String(a)}}
W.cl.prototype={}
W.bb.prototype={
bZ:function(a,b,c){if(c!=null)return a.getContext(b,P.lL(c))
return a.getContext(b)},
df:function(a,b){return this.bZ(a,b,null)},
$ibb:1}
W.aO.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bc.prototype={
dH:function(a,b){var u=$.k_(),t=u[b]
if(typeof t==="string")return t
t=this.f1(a,b)
u[b]=t
return t},
f1:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.kr()+b
if(u in a)return u
return b},
eW:function(a,b,c,d){a.setProperty(b,c,d)},
gj:function(a){return a.length}}
W.ew.prototype={}
W.a6.prototype={}
W.af.prototype={}
W.ex.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gj:function(a){return a.length}}
W.eA.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
i:function(a){return String(a)}}
W.ct.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a3,P.a4]]},
$iw:1,
$aw:function(){return[[P.a3,P.a4]]},
$aq:function(){return[[P.a3,P.a4]]},
$ij:1,
$aj:function(){return[[P.a3,P.a4]]}}
W.cu.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gar(a))+" x "+H.e(this.gan(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.T(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbd(b)&&this.gar(a)===u.gar(b)&&this.gan(a)===u.gan(b)},
gG:function(a){return W.jJ(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(this.gar(a)),C.b.gG(this.gan(a)))},
gcF:function(a){return a.bottom},
gan:function(a){return a.height},
gb8:function(a){return a.left},
gbc:function(a){return a.right},
gbd:function(a){return a.top},
gar:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a4]}}
W.eD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.r]},
$iw:1,
$aw:function(){return[P.r]},
$aq:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]}}
W.eE.prototype={
gj:function(a){return a.length}}
W.i_.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var u=this.fV(this)
return new J.X(u,u.length)},
$an:function(){return[W.P]},
$aq:function(){return[W.P]},
$aj:function(){return[W.P]}}
W.P.prototype={
gcH:function(a){return new W.i_(a,a.children)},
gcI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a1()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a1()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
$iP:1}
W.i.prototype={$ii:1}
W.d.prototype={
f8:function(a,b,c,d){if(c!=null)this.dE(a,b,c,!1)},
dE:function(a,b,c,d){return a.addEventListener(b,H.bq(c,1),!1)}}
W.at.prototype={$iat:1}
W.eM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.at]},
$iw:1,
$aw:function(){return[W.at]},
$aq:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.eN.prototype={
gj:function(a){return a.length}}
W.eR.prototype={
gj:function(a){return a.length}}
W.au.prototype={$iau:1}
W.eU.prototype={
gj:function(a){return a.length}}
W.bD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$aq:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.aR.prototype={$iaR:1,
gcJ:function(a){return a.data}}
W.bE.prototype={$ibE:1}
W.bg.prototype={$ibg:1}
W.f7.prototype={
i:function(a){return String(a)}}
W.fq.prototype={
gj:function(a){return a.length}}
W.fr.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.fs(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
W.fs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ft.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.fu(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
W.fu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.fv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aw]},
$iw:1,
$aw:function(){return[W.aw]},
$aq:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.ai.prototype={$iai:1}
W.hZ.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gM:function(a){var u=this.a.childNodes
return new W.cx(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.B]},
$aq:function(){return[W.B]},
$aj:function(){return[W.B]}}
W.B.prototype={
fO:function(a,b){var u,t
try{u=a.parentNode
J.kf(u,b,a)}catch(t){H.eb(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dq(a):u},
eS:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$aq:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.az.prototype={$iaz:1,
gj:function(a){return a.length}}
W.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.az]},
$iw:1,
$aw:function(){return[W.az]},
$aq:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.fQ.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.fR(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fT.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$iw:1,
$aw:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aD]},
$iw:1,
$aw:function(){return[W.aD]},
$aq:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gj:function(a){return a.length}}
W.h8.prototype={
h:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new W.h9(u))
return u},
gj:function(a){return a.length},
$aZ:function(){return[P.r,P.r]}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.al.prototype={$ial:1}
W.aG.prototype={$iaG:1}
W.am.prototype={$iam:1}
W.he.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.am]},
$iw:1,
$aw:function(){return[W.am]},
$aq:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]}}
W.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aG]},
$iw:1,
$aw:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.hn.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bl.prototype={$ibl:1}
W.hq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aH]},
$iw:1,
$aw:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]}}
W.hr.prototype={
gj:function(a){return a.length}}
W.b0.prototype={}
W.hG.prototype={
i:function(a){return String(a)}}
W.hS.prototype={
gj:function(a){return a.length}}
W.b3.prototype={
gfk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib3:1}
W.bZ.prototype={
eT:function(a,b){return a.requestAnimationFrame(H.bq(b,1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.F]},
$iw:1,
$aw:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.T(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbd(b)&&a.width===u.gar(b)&&a.height===u.gan(b)},
gG:function(a){return W.jJ(C.b.gG(a.left),C.b.gG(a.top),C.b.gG(a.width),C.b.gG(a.height))},
gan:function(a){return a.height},
gar:function(a){return a.width}}
W.i3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.au]},
$iw:1,
$aw:function(){return[W.au]},
$aq:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.dD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$aq:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.id.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$iw:1,
$aw:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.ie.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.al]},
$iw:1,
$aw:function(){return[W.al]},
$aq:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]}}
W.i1.prototype={}
W.i2.prototype={
$1:function(a){return this.a.$1(a)}}
W.H.prototype={
gM:function(a){return new W.cx(a,this.gj(a))}}
W.cx.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ch(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gF:function(a){return this.d}}
W.dj.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.c3.prototype={}
W.c4.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.c6.prototype={}
W.c7.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
P.e_.prototype={$iaR:1,
gcJ:function(a){return this.a}}
P.ir.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eO.prototype={
gaZ:function(){var u=this.b,t=H.jQ(u,"q",0)
return new H.bJ(new H.hT(u,new P.eP(),[t]),new P.eQ(),[t,W.P])},
k:function(a,b,c){var u=this.gaZ()
J.jb(u.b.$1(J.iD(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.b9(this.gaZ().a)},
h:function(a,b){var u=this.gaZ()
return u.b.$1(J.iD(u.a,b))},
gM:function(a){var u=P.iS(this.gaZ(),!1,W.P)
return new J.X(u,u.length)},
$an:function(){return[W.P]},
$aq:function(){return[W.P]},
$aj:function(){return[W.P]}}
P.eP.prototype={
$1:function(a){return!!J.T(a).$iP}}
P.eQ.prototype={
$1:function(a){return H.h(a,"$iP")}}
P.i8.prototype={
gbc:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return u+t},
gcF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.T(b)
if(!!u.$ia3){t=q.a
if(t==u.gb8(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gbc(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gcF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.bu(t),r=u.b,q=J.bu(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.t(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.t(t)
t=C.d.gG(r+t)
return P.l5(P.i5(P.i5(P.i5(P.i5(0,s),q),p),t))}}
P.a3.prototype={
gb8:function(a){return this.a},
gbd:function(a){return this.b},
gar:function(a){return this.c},
gan:function(a){return this.d}}
P.aW.prototype={$iaW:1}
P.f3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aW]},
$aq:function(){return[P.aW]},
$ij:1,
$aj:function(){return[P.aW]}}
P.aZ.prototype={$iaZ:1}
P.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aZ]},
$aq:function(){return[P.aZ]},
$ij:1,
$aj:function(){return[P.aZ]}}
P.fL.prototype={
gj:function(a){return a.length}}
P.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.r]},
$aq:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]}}
P.k.prototype={
gcH:function(a){return new P.eO(a,new W.hZ(a))}}
P.b_.prototype={$ib_:1}
P.hs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b_]},
$aq:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]}}
P.dv.prototype={}
P.dw.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.eh.prototype={
gj:function(a){return a.length}}
P.ei.prototype={
h:function(a,b){return P.aJ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.H(a,new P.ej(u))
return u},
gj:function(a){return a.size},
$aZ:function(){return[P.r,null]}}
P.ej.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ek.prototype={
gj:function(a){return a.length}}
P.ba.prototype={}
P.fF.prototype={
gj:function(a){return a.length}}
P.di.prototype={}
P.cT.prototype={
dc:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$iaR)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lM(g))
return}if(!!t.$ibE)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.ki("Incorrect number or type of arguments"))}}
P.h5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.aJ(a.item(b))},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bI,,,]]},
$aq:function(){return[[P.bI,,,]]},
$ij:1,
$aj:function(){return[[P.bI,,,]]}}
P.dN.prototype={}
P.dO.prototype={}
K.ed.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"}}
K.cy.prototype={
aD:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aD(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cH.prototype={}
K.ay.prototype={
aD:function(a,b){return!this.dn(0,b)},
i:function(a){return"!["+this.c2(0)+"]"}}
K.fU.prototype={
dv:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.u
t=new H.G([u,P.b5])
for(s=new H.bH(a,a.gj(a));s.t();)t.k(0,s.d,!0)
r=P.iS(new H.bh(t,[u]),!0,u)
C.a.dl(r)
this.a=r},
aD:function(a,b){return C.a.U(this.a,b)},
i:function(a){return P.iV(this.a)}}
L.cZ.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.d7(this.a.J(0,b))
r.a=H.b([],[K.cH])
r.c=!1
this.c.push(r)
return r},
fn:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aD(0,a))return r}return},
i:function(a){return this.b},
cu:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.U(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bh(n,[H.b6(n,0)]),n=n.gM(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.U(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.d4.prototype={
i:function(a){var u=H.jX(this.b,"\n","\\n"),t=H.jX(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.d5.prototype={
i:function(a){return this.b}}
L.ho.prototype={
J:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.cZ(this,b)
u.c=H.b([],[L.d7])
this.a.k(0,b,u)}return u},
aU:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.d5(a)
u=P.r
t.c=new H.G([u,u])
this.b.k(0,a,t)}return t},
de:function(a){return this.fX(a)},
fX:function(a){var u=this
return P.le(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$de(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.fM(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fn(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.iV(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.v("removeRange"))
P.iT(0,m,d.length)
d.splice(0,m-0)
C.a.b1(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.U(0,p.a)?7:8
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
if(g.d!=null){j=P.iV(e)
i=g.d
h=i.c.h(0,j)
p=new L.d4(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.U(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.l3()
case 1:return P.l4(q)}}},L.d4)},
i:function(a){var u,t=new P.aF(""),s=this.d
if(s!=null)t.a=s.cu()+"\n"
for(s=this.a,s=s.gfY(s),s=new H.cG(J.b8(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cu()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.d7.prototype={
i:function(a){return this.b.b+": "+this.c2(0)}}
O.aq.prototype={
aX:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c_:function(a,b,c){this.b=b
this.c=a},
aF:function(a,b){return this.c_(a,null,b)},
cn:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
c6:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.X(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.jQ(s,"aq",0)]
if(s.cn(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.c6(t,H.b([b],r))}},
b1:function(a,b){var u,t
if(this.cn(b)){u=this.a
t=u.length
C.a.b1(u,b)
this.c6(t,b)}},
$ij:1}
O.bL.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
at:function(){var u=this.b
if(u!=null)u.B(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gbP(u)
else return V.bi()},
bb:function(a){var u=this.a
if(a==null)u.push(V.bi())
else u.push(a)
this.at()},
ap:function(){var u=this.a
if(u.length>0){u.pop()
this.at()}}}
E.em.prototype={}
E.as.prototype={
sbf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().O(0,s.gd7())
u=s.c
if(u!=null)u.gm().l(0,s.gd7())
t=new D.x("shape",r,s.c)
t.b=!0
s.ba(t)}},
ab:function(a,b){var u
for(u=this.y.a,u=new J.X(u,u.length);u.t();)u.d.ab(0,b)},
a5:function(a){var u,t=this,s=a.dx
s.a.push(s.gV(s))
s.at()
a.bX(t.f)
s=a.dy
u=(s&&C.a).gbP(s)
if(u!=null&&t.d!=null)u.d9(a,t)
for(s=t.y.a,s=new J.X(s,s.length);s.t();)s.d.a5(a)
a.bW()
a.dx.ap()},
ba:function(a){var u=this.z
if(u!=null)u.B(a)},
Y:function(){return this.ba(null)},
d8:function(a){this.e=null
this.ba(a)},
fC:function(){return this.d8(null)},
d6:function(a){this.ba(a)},
fz:function(){return this.d6(null)},
fw:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd5(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bA()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
fB:function(a,b){var u,t
for(u=b.gM(b),t=this.gd5();u.t();)u.gF(u).gm().O(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fM.prototype={
du:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bL()
t=[V.av]
u.a=H.b([],t)
u.gm().l(0,new E.fN(s))
s.cy=u
u=new O.bL()
u.a=H.b([],t)
u.gm().l(0,new E.fO(s))
s.db=u
u=new O.bL()
u.a=H.b([],t)
u.gm().l(0,new E.fP(s))
s.dx=u
u=H.b([],[O.d0])
s.dy=u
u.push(null)
s.fr=new H.G([P.r,A.cU])},
gfL:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.n(0,u.gV(u))
s=u}return s},
bX:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbP(u):a)},
bW:function(){var u=this.dy
if(u.length>1)u.pop()},
cA:function(a){var u=a.b
if(u.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.ff(0,u))throw H.c(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.fN.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fO.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fP.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d2.prototype={
c9:function(a){this.da()},
c8:function(){return this.c9(null)},
gfo:function(){var u,t=this,s=Date.now(),r=C.d.X(P.jk(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cp:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.t(r)
u=C.b.bN(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.b.bN(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jB(C.i,s.gfP())}},
da:function(){if(!this.cx){this.cx=!0
var u=window
C.r.dQ(u)
C.r.eT(u,W.jM(new E.hm(this),P.a4))}},
fN:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cp()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jk(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.at()
r=s.db
C.a.sj(r.a,0)
r.at()
r=s.dx
C.a.sj(r.a,0)
r.at()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a5(p.e)}}catch(q){u=H.eb(q)
t=H.j4(q)
P.j8("Error: "+H.e(u))
P.j8("Stack: "+H.e(t))
throw H.c(u)}}}
E.hm.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fN()}}}
Z.df.prototype={}
Z.cm.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.eb(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dg.prototype={}
Z.bx.prototype={
am:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aW:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a5:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.r],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.be.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bR(this.c))+"'")+"]"}}
Z.aI.prototype={
gc0:function(a){var u=this.a,t=(u&$.ac().a)!==0?3:0
if((u&$.aM().a)!==0)t+=3
if((u&$.aL().a)!==0)t+=3
if((u&$.aN().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cf().a)!==0)t+=3
if((u&$.cg().a)!==0)t+=4
if((u&$.bt().a)!==0)++t
return(u&$.aK().a)!==0?t+4:t},
fb:function(a){var u,t=$.ac(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0)if(u===a)return t
return $.kd()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.r]),t=this.a
if((t&$.ac().a)!==0)u.push("Pos")
if((t&$.aM().a)!==0)u.push("Norm")
if((t&$.aL().a)!==0)u.push("Binm")
if((t&$.aN().a)!==0)u.push("Txt2D")
if((t&$.b7().a)!==0)u.push("TxtCube")
if((t&$.cf().a)!==0)u.push("Clr3")
if((t&$.cg().a)!==0)u.push("Clr4")
if((t&$.bt().a)!==0)u.push("Weight")
if((t&$.aK().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.ep.prototype={}
D.bA.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
O:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.U(s,b)
if(s===!0){s=t.a
u=(s&&C.a).O(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.U(s,b)
if(s===!0){s=t.b
u=(s&&C.a).O(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.iS(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eK(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.H(u,new D.eL(q))}return!0},
cN:function(){return this.B(null)},
aq:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.eK.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eL.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aS.prototype={}
D.aT.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cn.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cn))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cD.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.f2.prototype={
fH:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fD:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.cF.prototype={}
X.f8.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.W(o.a+n*m,o.b+u*t)
t=q.a.gaz()
r=new X.ax(a,V.aA(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
bV:function(a,b){this.r=a.a
return!1},
aR:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dh()
if(typeof u!=="number")return u.ac()
this.r=(u&~t)>>>0
return!1},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aK(a,b))
return!0},
fI:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaz()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.bM(new V.C(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
eo:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cF(c,r.a.gaz(),b)
s.b=!0
t.B(s)
r.y=new P.a7(u,!1)
r.x=V.aA()}}
X.a8.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ax.prototype={}
X.fw.prototype={
bm:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaz(),r=new X.ax(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bm(a,b,!0))
return!0},
aR:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dh()
if(typeof t!=="number")return t.ac()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bm(a,b,!0))
return!0},
aQ:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bm(a,b,!1))
return!0},
fJ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaz()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.bM(new V.C(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gcM:function(){var u=this.b
return u==null?this.b=D.z():u},
gbe:function(){var u=this.c
return u==null?this.c=D.z():u},
gd4:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.bM.prototype={}
X.fK.prototype={}
X.d6.prototype={}
X.hp.prototype={
aK:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.aA(),r=u.a.gaz(),q=new X.d6(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fG:function(a){var u=this.b
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
fE:function(a){var u=this.c
if(u==null)return!1
u.B(this.aK(a,!0))
return!0},
fF:function(a){var u=this.d
if(u==null)return!1
u.B(this.aK(a,!1))
return!0}}
X.da.prototype={
gaz:function(){var u=this.a,t=C.f.gcI(u).c
t.toString
u=C.f.gcI(u).d
u.toString
return V.jx(0,0,t,u)},
cf:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.a8(t,a.altKey,a.shiftKey))},
ay:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
by:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.W(s-q,r-u)},
aL:function(a){return new V.C(a.movementX,a.movementY)},
bw:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.W])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.b.ae(r.pageX)
C.b.ae(r.pageY)
p=o.left
C.b.ae(r.pageX)
n.push(new V.W(q-p,C.b.ae(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cn(u,new X.a8(t,a.altKey,a.shiftKey))},
bn:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ei:function(a){this.f=!0},
e6:function(a){this.f=!1},
ec:function(a){if(this.f&&this.bn(a))a.preventDefault()},
em:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fH(u)},
ek:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fD(u)},
eq:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ay(a)
if(r.x){u=r.ai(a)
t=r.aL(a)
if(r.d.bV(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.bV(u,s))a.preventDefault()},
ev:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()},
eg:function(a){var u,t,s,r=this
if(!r.bn(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()}},
es:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aQ(u,s))a.preventDefault()},
ee:function(a){var u,t,s,r=this
if(!r.bn(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aL(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aQ(u,s))a.preventDefault()}},
ex:function(a){var u,t,s=this
s.ay(a)
u=new V.C((a&&C.q).gfj(a),C.q.gfk(a)).u(0,180)
if(s.x){if(s.d.fI(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fJ(u,t))a.preventDefault()},
ez:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.eo(u,t,r)}},
eP:function(a){var u,t=this
t.a.focus()
t.f=!0
t.by(a)
u=t.bw(a)
if(t.e.fG(u))a.preventDefault()},
eL:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fE(u))a.preventDefault()},
eN:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fF(u))a.preventDefault()}}
D.el.prototype={$iY:1}
D.eB.prototype={$iY:1}
D.Y.prototype={}
D.cE.prototype={
ca:function(a){var u=this.y
if(u!=null)u.B(a)},
cm:function(a){var u=this.z
if(u!=null)u.B(a)},
en:function(){return this.cm(null)},
eB:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dL(s))return!1}return!0},
e0:function(a,b){var u,t,s,r
for(u=b.length,t=this.gcl(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
r.gm().l(0,t)}u=new D.aS()
u.b=!0
this.ca(u)},
eF:function(a,b){var u,t,s
for(u=b.gM(b),t=this.gcl();u.t();){s=u.gF(u)
C.a.O(this.e,s)
s.gm().O(0,t)}u=new D.aT()
u.b=!0
this.ca(u)},
dL:function(a){var u=C.a.U(this.e,a)
return u},
$aj:function(){return[D.Y]},
$aaq:function(){return[D.Y]}}
D.fJ.prototype={$iY:1}
D.h4.prototype={$iY:1}
V.U.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.ar.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eJ.prototype={}
V.cJ.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cJ))return!1
u=b.a
t=$.y().a
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bs(H.b([q.a,q.d,q.r],p),3,0),n=V.bs(H.b([q.b,q.e,q.x],p),3,0),m=V.bs(H.b([q.c,q.f,q.y],p),3,0)
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
a0:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
bO:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.bi()
u=1/b1
t=-n
s=-a0
return V.ah((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ah(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
aV:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.y().a
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
i:function(a){return this.I()},
v:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bs(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bs(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bs(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bs(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.v("")}}
V.W.prototype={
E:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.O.prototype={
E:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.aB.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.cS.prototype={
ga4:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cS))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.C.prototype={
bQ:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.C(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.jF
return u==null?$.jF=new V.C(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.C(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.D.prototype={
bQ:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bR:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aO:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.D(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.y().a)return V.de()
return new V.D(this.a/b,this.b/b,this.c/b)},
d3:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.es.prototype={
bg:function(a){var u=V.ma(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
K:function(a){var u=this.y
if(u!=null)u.B(a)},
sbY:function(a,b){},
sbS:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bg(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.K(s)}},
sbU:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bg(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.K(s)}},
sa3:function(a,b){var u,t=this
b=t.bg(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.K(u)}},
sbT:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.K(r)}},
sN:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.K(t)}},
sbE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.K(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa3(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sN(u)}}}
U.cp.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
aE:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bC.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
K:function(a){var u=this.e
if(u!=null)u.B(a)},
a_:function(){return this.K(null)},
dZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gax(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aS()
u.b=!0
this.K(u)},
eD:function(a,b){var u,t
for(u=b.gM(b),t=this.gax();u.t();)u.gF(u).gm().O(0,t)
u=new D.aT()
u.b=!0
this.K(u)},
aE:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a1()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.X(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aE(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bi():u
r=s.e
if(r!=null)r.aq(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a2]},
$aaq:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.db.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.z():u},
K:function(a){var u=this.cy
if(u!=null)u.B(a)},
a_:function(){return this.K(null)},
aM:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcM().l(0,u.gbo())
u.a.c.gd4().l(0,u.gbq())
u.a.c.gbe().l(0,u.gbs())
return!0},
bp:function(a){var u=this
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!n.y)return
if(n.x){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.E(0,a.y)
u=new V.C(t.a,t.b).n(0,2).u(0,u.ga4())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sN(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.C(s.a,s.b).n(0,2).u(0,u.ga4())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
n.b.sN(0)
t=t.E(0,a.z)
n.Q=new V.C(t.a,t.b).n(0,2).u(0,u.ga4())}n.a_()},
bt:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sN(t*10*s)
r.a_()}},
aE:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.ch=p
u=b.y
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ah(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia2:1}
U.dc.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.z():u},
K:function(a){var u=this.fx
if(u!=null)u.B(a)},
a_:function(){return this.K(null)},
aM:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcM().l(0,s.gbo())
s.a.c.gd4().l(0,s.gbq())
s.a.c.gbe().l(0,s.gbs())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.l(0,s.gdS())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.gdU())
u=s.a.e
t=u.b
u=t==null?u.b=D.z():t
u.l(0,s.gf6())
u=s.a.e
t=u.d
u=t==null?u.d=D.z():t
u.l(0,s.gf4())
u=s.a.e
t=u.c
u=t==null?u.c=D.z():t
u.l(0,s.gf2())
return!0},
ah:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.L()
u=-u}if(this.r){if(typeof t!=="number")return t.L()
t=-t}return new V.C(u,t)},
bp:function(a){var u=this
H.h(a,"$iax")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ah(new V.C(s.a,s.b).n(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa3(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.E(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))}n.a_()},
bt:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sN(-t*10*u)
r.a_()}},
dT:function(a){var u=this
if(H.h(a,"$icF").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dV:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iax")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ah(new V.C(s.a,s.b).n(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa3(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.E(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))
n.a_()},
f7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f5:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$id6")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ah(new V.C(s.a,s.b).n(0,2).u(0,u.ga4()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa3(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa3(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.E(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).n(0,2).u(0,u.ga4()))}n.a_()},
f3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sN(-t*10*u)
r.a_()}},
aE:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a1()
if(q<p){r.dy=p
u=b.y
r.c.ab(0,u)
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ah(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.n(0,V.ah(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia2:1}
U.dd.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
K:function(a){var u=this.r
if(u!=null)u.B(a)},
aM:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.gdW()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).l(0,t)
return!0},
dX:function(a){var u,t,s,r,q=this
if(!J.L(q.b,q.a.b.c))return
H.h(a,"$ibM")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.K(u)}},
aE:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ah(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia2:1}
M.co.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
S:function(a){var u=this.r
if(u!=null)u.B(a)},
aI:function(){return this.S(null)},
eH:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aS()
u.b=!0
this.S(u)},
eJ:function(a,b){var u,t
for(u=b.gM(b),t=this.gR();u.t();)u.gF(u).gm().O(0,t)
u=new D.aT()
u.b=!0
this.S(u)},
a5:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.X(u,u.length);u.t();){t=u.d
if(t!=null)t.a5(a)}s.f=!1},
$aj:function(){return[M.aa]},
$aaq:function(){return[M.aa]},
$iaa:1}
M.cq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.z():u},
S:function(a){var u=this.r
if(u!=null)u.B(a)},
aI:function(){return this.S(null)},
saN:function(a){var u,t,s=this
if(a==null)a=new X.eV()
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gR())
t=s.b
s.b=a
a.gm().l(0,s.gR())
u=new D.x("camera",t,s.b)
u.b=!0
s.S(u)}},
saS:function(a,b){var u,t,s=this
if(b==null)b=X.iM(null)
u=s.c
if(u!==b){if(u!=null)u.gm().O(0,s.gR())
t=s.c
s.c=b
b.gm().l(0,s.gR())
u=new D.x("target",t,s.c)
u.b=!0
s.S(u)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gR())
s=new D.x("technique",u,t.d)
s.b=!0
t.S(s)}},
a5:function(a){var u=this
a.bX(u.d)
u.c.W(a)
u.b.W(a)
u.e.ab(0,a)
u.e.a5(a)
u.b.aW(a)
u.c.toString
a.bW()},
$iaa:1}
M.cv.prototype={
S:function(a){var u=this.y
if(u!=null)u.B(a)},
aI:function(){return this.S(null)},
e8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bA()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aS()
u.b=!0
this.S(u)},
ea:function(a,b){var u,t
for(u=b.gM(b),t=this.gR();u.t();)u.gF(u).gm().O(0,t)
u=new D.aT()
u.b=!0
this.S(u)},
saN:function(a){var u,t,s=this
if(a==null)a=X.js(null)
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gR())
t=s.b
s.b=a
a.gm().l(0,s.gR())
u=new D.x("camera",t,s.b)
u.b=!0
s.S(u)}},
saS:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().O(0,t.gR())
u=t.c
t.c=b
b.gm().l(0,t.gR())
s=new D.x("target",u,t.c)
s.b=!0
t.S(s)}},
saT:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gR())
s=new D.x("technique",u,t.d)
s.b=!0
t.S(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.z():u},
a5:function(a){var u,t=this
a.bX(t.d)
t.c.W(a)
t.b.W(a)
u=t.d
if(u!=null)u.ab(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.t();)u.d.ab(0,a)
for(u=t.e.a,u=new J.X(u,u.length);u.t();)u.d.a5(a)
t.b.toString
a.cy.ap()
a.db.ap()
t.c.toString
a.bW()},
$iaa:1}
M.aa.prototype={}
A.cj.prototype={}
A.eg.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.V.prototype={
gaf:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.V))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fb.prototype={
dt:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aF("")
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
A.lt(c0,u)
A.lv(c0,u)
A.lu(c0,u)
A.lx(c0,u)
A.ly(c0,u)
A.lw(c0,u)
A.lz(c0,u)
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
b5.d1(0,s.charCodeAt(0)==0?s:s,A.ls(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.D(0,"invViewMat"),"$ia0")
if(t)b5.dy=H.h(b5.y.D(0,"objMat"),"$ia0")
if(r)b5.fr=H.h(b5.y.D(0,"viewObjMat"),"$ia0")
b5.fy=H.h(b5.y.D(0,"projViewObjMat"),"$ia0")
if(c0.go)b5.fx=H.h(b5.y.D(0,"viewMat"),"$ia0")
if(c0.x1)b5.k1=H.h(b5.y.D(0,"txt2DMat"),"$ibV")
if(c0.x2)b5.k2=H.h(b5.y.D(0,"txtCubeMat"),"$ia0")
if(c0.y1)b5.k3=H.h(b5.y.D(0,"colorMat"),"$ia0")
b5.r1=H.b([],[A.a0])
t=c0.aC
if(t>0){b5.k4=b5.y.D(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.h(m,"$ia0"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.D(0,"emissionClr"),"$iA")
if(t.b)b5.rx=H.h(b5.y.D(0,"emissionTxt"),"$iS")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.D(0,"ambientClr"),"$iA")
if(t.b)b5.x2=H.h(b5.y.D(0,"ambientTxt"),"$iS")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.D(0,"diffuseClr"),"$iA")
if(t.b)b5.aC=H.h(b5.y.D(0,"diffuseTxt"),"$iS")
t=c0.d
if(t.a)b5.b6=H.h(b5.y.D(0,"invDiffuseClr"),"$iA")
if(t.b)b5.cP=H.h(b5.y.D(0,"invDiffuseTxt"),"$iS")
t=c0.e
s=t.a
if(s||t.b||!1){b5.cS=H.h(b5.y.D(0,"shininess"),"$iK")
if(s)b5.cQ=H.h(b5.y.D(0,"specularClr"),"$iA")
if(t.b)b5.cR=H.h(b5.y.D(0,"specularTxt"),"$iS")}if(c0.f.b)b5.cT=H.h(b5.y.D(0,"bumpTxt"),"$iS")
if(c0.db){b5.cU=H.h(b5.y.D(0,"envSampler"),"$ib2")
t=c0.r
if(t.a)b5.cV=H.h(b5.y.D(0,"reflectClr"),"$iA")
if(t.b)b5.cW=H.h(b5.y.D(0,"reflectTxt"),"$iS")
t=c0.x
s=t.a
if(s||t.b||!1){b5.cX=H.h(b5.y.D(0,"refraction"),"$iK")
if(s)b5.cY=H.h(b5.y.D(0,"refractClr"),"$iA")
if(t.b)b5.cZ=H.h(b5.y.D(0,"refractTxt"),"$iS")}}t=c0.y
if(t.a)b5.d_=H.h(b5.y.D(0,"alpha"),"$iK")
if(t.b)b5.d0=H.h(b5.y.D(0,"alphaTxt"),"$iS")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.bF=new H.G([r,A.b1])
b5.bG=new H.G([r,[P.aX,A.bT]])
for(r=[A.bT],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iA")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iA")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iA")
if(typeof j!=="number")return j.ac()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iK")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iK")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iK")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bT(m,g,f,a0,a,b))}b5.bG.k(0,j,h)
q=b5.bF
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.bH=new H.G([r,A.b1])
b5.bI=new H.G([r,[P.aX,A.bU]])
for(r=[A.bU],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ac()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iA")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iA")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.h(f,"$iA")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iA")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iA")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iS")
a5=f}else a5=b6
h.push(new A.bU(a4,a3,a2,m,g,a5))}b5.bI.k(0,j,h)
q=b5.bH
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.bJ=new H.G([r,A.b1])
b5.bK=new H.G([r,[P.aX,A.bW]])
for(r=[A.bW],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iA")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iA")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iA")
if(typeof j!=="number")return j.ac()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ibV")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ib2")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ib2")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibS")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iK")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iK")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iK")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bW(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bK.k(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.bL=new H.G([r,A.b1])
b5.bM=new H.G([r,[P.aX,A.bX]])
for(r=[A.bX],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iA")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iA")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iA")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iA")
if(typeof j!=="number")return j.ac()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iA")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iA")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.h(a9,"$iK")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.h(b0,"$iK")
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
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$ibS")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iK")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iK")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iK")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iK")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.h(a9,"$iK")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iS")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iS")
a7=d}else a7=b6
h.push(new A.bX(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bM.k(0,j,h)
q=b5.bL
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}}},
ad:function(a,b){if(b!=null&&b.d)a.di(b)},
eX:function(a,b){}}
A.ck.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cs.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cQ.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.cX.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fe.prototype={
i:function(a){return this.aP}}
A.bT.prototype={}
A.bU.prototype={}
A.bW.prototype={}
A.bX.prototype={}
A.cU.prototype={
c5:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d1:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cg(b,35633)
r.f=r.cg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.eY()
r.f_()},
W:function(a){a.a.useProgram(this.r)
this.x.fm()},
cg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
eY:function(){var u,t,s,r=this,q=H.b([],[A.cj]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cj(p,t.name,s))}r.x=new A.eg(q)},
f_:function(){var u,t,s,r=this,q=H.b([],[A.d8]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fi(t.type,t.size,t.name,s))}r.y=new A.hA(q)},
av:function(a,b,c){var u=this.a
if(a===1)return new A.b1(u,b,c)
else return A.iX(u,this.r,b,a,c)},
dN:function(a,b,c){var u=this.a
if(a===1)return new A.S(u,b,c)
else return A.iX(u,this.r,b,a,c)},
dO:function(a,b,c){var u=this.a
if(a===1)return new A.b2(u,b,c)
else return A.iX(u,this.r,b,a,c)},
b0:function(a,b){return new P.dq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fi:function(a,b,c,d){var u=this
switch(a){case 5120:return u.av(b,c,d)
case 5121:return u.av(b,c,d)
case 5122:return u.av(b,c,d)
case 5123:return u.av(b,c,d)
case 5124:return u.av(b,c,d)
case 5125:return u.av(b,c,d)
case 5126:return new A.K(u.a,c,d)
case 35664:return new A.hw(u.a,c,d)
case 35665:return new A.A(u.a,c,d)
case 35666:return new A.bS(u.a,c,d)
case 35667:return new A.hx(u.a,c,d)
case 35668:return new A.hy(u.a,c,d)
case 35669:return new A.hz(u.a,c,d)
case 35674:return new A.hB(u.a,c,d)
case 35675:return new A.bV(u.a,c,d)
case 35676:return new A.a0(u.a,c,d)
case 35678:return u.dN(b,c,d)
case 35680:return u.dO(b,c,d)
case 35670:throw H.c(u.b0("BOOL",c))
case 35671:throw H.c(u.b0("BOOL_VEC2",c))
case 35672:throw H.c(u.b0("BOOL_VEC3",c))
case 35673:throw H.c(u.b0("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.h1.prototype={}
A.d8.prototype={}
A.hA.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b1.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.K.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.A.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bS.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bV.prototype={
a6:function(a){var u=new Float32Array(H.c9(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a0.prototype={
a6:function(a){var u=new Float32Array(H.c9(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.S.prototype={
di:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b2.prototype={
dj:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.il.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bR(s.b,b).bR(s.d.bR(s.c,b),c)
s=new V.O(r.a,r.b,r.c)
if(!J.L(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.sfT(r.u(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.aB(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.L(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}}}
F.aQ.prototype={
dG:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.de()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.d3())return
return s.u(0,Math.sqrt(s.A(s)))},
dJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.A(r)))
r=t.E(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.aO(r.u(0,Math.sqrt(r.A(r))))
return r.u(0,Math.sqrt(r.A(r)))},
bB:function(){var u,t=this
if(t.d!=null)return!0
u=t.dG()
if(u==null){u=t.dJ()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
dF:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.de()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.d3())return
return s.u(0,Math.sqrt(s.A(s)))},
dI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.E(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.O(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).E(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.A(l)))
l=o.aO(q)
l=l.u(0,Math.sqrt(l.A(l))).aO(o)
q=l.u(0,Math.sqrt(l.A(l)))}return q},
bz:function(){var u,t=this
if(t.e!=null)return!0
u=t.dF()
if(u==null){u=t.dI()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.a9(J.a5(s.e),0)+", "+C.c.a9(J.a5(t.b.e),0)+", "+C.c.a9(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
I:function(){return this.v("")}}
F.bG.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a9(J.a5(u.e),0)+", "+C.c.a9(J.a5(this.b.e),0)},
I:function(){return this.v("")}}
F.bP.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a9(J.a5(u.e),0)},
I:function(){return this.v("")}}
F.fV.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
fu:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.T()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.fh())}h.a.T()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.bP()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.T()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.ky(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.T()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bB(l,k,i)}g=h.e
if(g!=null)g.aq(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.aq(0)
return u},
cG:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ac()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aM().a)!==0)++s
if((t&$.aL().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.cf().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.aK().a)!==0)++s
r=a4.gc0(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cm])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fb(m)
k=l.gc0(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cm(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fs(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.c9(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bx(new Z.df(a1,d),o,a4)
c.b=H.b([],[Z.be])
if(a0.b.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.T()
b.push(t.e)}a=Z.iY(u,34963,b)
c.b.push(new Z.be(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.T()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.T()
b.push(t.e)}a=Z.iY(u,34963,b)
c.b.push(new Z.be(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.T()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.T()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.T()
b.push(t.e)}a=Z.iY(u,34963,b)
c.b.push(new Z.be(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.v(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.v(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.v(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.v(t))}return C.a.p(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.B(null)}}
F.fW.prototype={
f9:function(a){var u,t,s,r,q=H.b([],[F.aQ]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bB(p,s,r))}return q},
fa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aQ])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bB(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bB(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bB(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bB(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.p(r,"\n")},
I:function(){return this.v("")}}
F.fX.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s=H.b([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].v(a+(""+u+". ")))}return C.a.p(s,"\n")},
I:function(){return this.v("")}}
F.fY.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(a))
return C.a.p(r,"\n")},
I:function(){return this.v("")}}
F.bm.prototype={
bD:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hJ(u.cx,r,o,t,s,q,p,a,n)},
fh:function(){return this.bD(null)},
sfT:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
fs:function(a){var u,t,s=this
if(a.q(0,$.ac())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aM())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aL())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aN())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.b7())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cf())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cg())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bt()))return H.b([s.ch],[P.J])
else if(a.q(0,$.aK())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bB:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.de()
t.d.H(0,new F.hR(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
bz:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.de()
t.d.H(0,new F.hQ(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aq(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t,s=this,r="-",q=H.b([],[P.r])
q.push(C.c.a9(J.a5(s.e),0))
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
q.push(V.E(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.p(q,", ")
return a+"{"+t+"}"},
I:function(){return this.v("")}}
F.hR.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.hQ.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.hK.prototype={
T:function(){},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
b2:function(a,b,c,d,e,f){var u=F.hJ(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bz()
return!0},
fd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.I()},
v:function(a){var u,t,s,r
this.T()
u=H.b([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].v(a))
return C.a.p(u,"\n")},
I:function(){return this.v("")}}
F.hL.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.hM(u,b))
C.a.H(u.d,new F.hN(u,b))},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.p(r,"\n")}}
F.hM.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.hN.prototype={
$1:function(a){var u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)}}
F.hO.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.p(r,"\n")}}
F.hP.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].v(""))
return C.a.p(r,"\n")}}
O.cI.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.z():u},
P:function(a){var u=this.fr
if(u!=null)u.B(a)},
aJ:function(){return this.P(null)},
co:function(a){this.a=null
this.P(a)},
eV:function(){return this.co(null)},
e2:function(a,b){var u=new D.aS()
u.b=!0
this.P(u)},
e4:function(a,b){var u=new D.aT()
u.b=!0
this.P(u)},
ce:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga2()
o=u.h(0,q.ga2())
u.k(0,p,o==null?1:o)}n=H.b([],[A.ck])
u.H(0,new O.fi(g,n))
C.a.aH(n,new O.fj())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga2()
o=m.h(0,q.ga2())
m.k(0,p,o==null?1:o)}l=H.b([],[A.cs])
m.H(0,new O.fk(g,l))
C.a.aH(l,new O.fl())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.ga2()
o=k.h(0,q.ga2())
k.k(0,p,o==null?1:o)}j=H.b([],[A.cQ])
k.H(0,new O.fm(g,j))
C.a.aH(j,new O.fn())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.ga2()
p=i.h(0,q.ga2())
i.k(0,s,p==null?1:p)}h=H.b([],[A.cX])
i.H(0,new O.fo(g,h))
C.a.aH(h,new O.fp())
f=C.d.X(g.e.a.length+3,4)
g.dy.e
return A.kE(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a7:function(a,b){if(b!=null)if(!C.a.U(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var u
for(u=this.dx.a,u=new J.X(u,u.length);u.t();)C.h.ab(u.d,b)},
d9:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.ce()
u=b2.fr.h(0,b1.aP)
if(u==null){u=A.kD(b1,b2.a)
b2.cA(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.b6
b1=b3.e
if(!(b1 instanceof Z.bx))b1=b3.e=null
if(b1==null||!b1.d.q(0,s)){b1=t.k4
if(b1)b3.d.al()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bA()
q.a.bA()
q=q.e
if(q!=null)q.aq(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fd()
p=p.e
if(p!=null)p.aq(0)}n=b3.d.cG(new Z.dg(b2.a),s)
n.am($.ac()).e=b0.a.Q.c
if(b1)n.am($.aM()).e=b0.a.cx.c
if(r)n.am($.aL()).e=b0.a.ch.c
if(t.r2)n.am($.aN()).e=b0.a.cy.c
if(q)n.am($.b7()).e=b0.a.db.c
if(t.ry)n.am($.aK()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.d1])
b0.a.W(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gV(r)
b1=b1.dy
b1.toString
b1.a6(r.a0(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gV(r)
q=b2.dx
q=b2.cx=r.n(0,q.gV(q))
r=q}b1=b1.fr
b1.toString
b1.a6(r.a0(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gfL()
q=b2.dx
q=b2.ch=r.n(0,q.gV(q))
r=q}b1=b1.fy
b1.toString
b1.a6(r.a0(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gV(r)
b1=b1.fx
b1.toString
b1.a6(r.a0(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a6(C.h.a0(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a6(C.h.a0(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a6(C.h.a0(r,!0))}if(t.aC>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.c9(r.a0(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.ad(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.ad(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.ad(b1.aC,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.b6
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.ad(b1.cP,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.cS
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.cQ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.ad(b1.cR,r)}b1=t.z
if(b1.length>0){r=P.u
i=new H.G([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.ch(b0.a.bG.h(0,f),e)
p=g.gh_()
o=$.aj
p=p.aV(o==null?$.aj=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gh3()
o=$.aj
p=p.aV(o==null?$.aj=new V.O(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaA(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gcO()){p=g.gcB()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcC()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcD()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bF.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
b=new H.G([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=b.h(0,f)
if(e==null)e=0
b.k(0,f,e+1)
d=J.ch(b0.a.bI.h(0,f),e)
p=g.gcK(g)
o=C.b.n(c.a,p.gb3(p))+C.b.n(c.b,p.gb4(p))+C.b.n(c.c,p.gb5())
a=C.b.n(c.e,p.gb3(p))+C.b.n(c.f,p.gb4(p))+C.b.n(c.r,p.gb5())
p=C.b.n(c.y,p.gb3(p))+C.b.n(c.z,p.gb4(p))+C.b.n(c.Q,p.gb5())
p=new V.D(o,a,p).u(0,Math.sqrt(o*o+a*a+p*p))
a=d.e
o=p.a
a0=p.b
p=p.c
a.a.uniform3f(a.d,o,a0,p)
p=g.gaA(g)
a0=d.f
a0.a.uniform3f(a0.d,p.a,p.b,p.c)
g.gaa()
p=g.gcK(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbe()
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbc(g)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaa()
if(!C.a.U(m,p)){p.a=m.length
m.push(p)}p=g.gaa()
o=p.gb9(p)
if(o){o=d.r
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bH.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
a1=new H.G([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.ch(b0.a.bK.h(0,f),e)
a2=c.n(0,g.gV(g))
p=g.gV(g)
o=$.aj
p=p.aV(o==null?$.aj=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aj
p=a2.aV(p==null?$.aj=new V.O(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaA(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaa()
p=a2.bO(0)
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
j=new Float32Array(H.c9(new V.cJ(o,a,a0,a3,a4,a5,a6,a7,p).a0(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaa()
p=g.gaa()
if(!C.a.U(m,p)){p.a=m.length
m.push(p)}p=g.gaa()
o=p.gb9(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaG()
p=g.gdk()
o=d.x
o.toString
a=p.gb3(p)
a0=p.gb4(p)
a3=p.gb5()
p=p.gfl()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaG()
if(!C.a.U(m,p)){p.a=m.length
m.push(p)}p=g.gaG()
o=p.gb9(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gcO()){p=g.gcB()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcC()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcD()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bJ.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
a9=new H.G([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.ga2()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.ch(b0.a.bM.h(0,f),e)
p=g.gfK(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcK(g).hd()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.aV(g.gfK(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaA(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaa()
p=g.gbe()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbc(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghe()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghf()
o=d.y
o.a.uniform1f(o.d,p)
g.gaa()
p=g.gaa()
if(!C.a.U(m,p)){p.a=m.length
m.push(p)}p=g.gaa()
o=p.gb9(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaG()
p=g.gdk()
o=d.z
o.toString
a=p.gb3(p)
a0=p.gb4(p)
a3=p.gb5()
p=p.gfl()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaG()
if(!C.a.U(m,p)){p.a=m.length
m.push(p)}p=g.gaG()
o=p.gb9(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gh2()){p=g.gh1()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gh0()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gcO()){p=g.gcB()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcC()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcD()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bL.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.a7(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.ad(b1.cT,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gV(r).bO(0)}b1=b1.id
b1.toString
b1.a6(r.a0(0,!0))}if(t.db){b0.a7(m,b0.ch)
b1=b0.a
r=b0.ch
b1.eX(b1.cU,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.cV
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.ad(b1.cW,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.cX
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.cY
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.a7(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.ad(b1.cZ,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.d_
r.a.uniform1f(r.d,p)}if(b1.b){b0.a7(m,b0.db.d)
r=b0.a
p=b0.db.d
r.ad(r.d0,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b3.e
p.W(b2)
p.a5(b2)
p.aW(b2)
if(!q||b1.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b1=m[k]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(3553,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.cL()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ce().aP}}
O.fi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.ck(a,C.d.X(b+3,4)*4))}}
O.fj.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cs(a,C.d.X(b+3,4)*4))}}
O.fl.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cQ(a,C.d.X(b+3,4)*4))}}
O.fn.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cX(a,C.d.X(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fc.prototype={
aj:function(){var u,t=this
t.c3()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.P(u)}}}
O.bK.prototype={
P:function(a){return this.a.P(a)},
aJ:function(){return this.P(null)},
aj:function(){},
cs:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.P(null)}}}
O.fd.prototype={}
O.ag.prototype={
cr:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.P(t)}},
aj:function(){this.c3()
this.cr(new V.U(1,1,1))},
saA:function(a,b){this.cs(new A.V(!0,this.c.b,!1))
this.cr(b)}}
O.ff.prototype={}
O.fg.prototype={
aj:function(){var u,t=this
t.c4()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.P(u)}}}
O.fh.prototype={
aj:function(){var u,t=this
t.c4()
u=t.ch
if(!(Math.abs(u-100)<$.y().a)){t.ch=100
u=new D.x(t.b+".shininess",u,100)
u.b=!0
t.a.P(u)}}}
O.cV.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u},
P:function(a){var u=this.e
if(u!=null)u.B(a)},
aJ:function(){return this.P(null)},
d9:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.h1(t,n)
u.c5(t,n)
u.d1(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iK")
u.ch=H.h(u.y.h(0,"ratio"),"$iK")
u.cx=H.h(u.y.h(0,"boxClr"),"$iA")
u.cy=H.h(u.y.h(0,"boxTxt"),"$ib2")
u.db=H.h(u.y.h(0,"viewMat"),"$ia0")
a.cA(u)}o.a=u}if(b.e==null){t=b.d.cG(new Z.dg(a.a),$.ac())
t.am($.ac()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.W(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.dj(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).bO(0)
r=r.db
r.toString
r.a6(s.a0(0,!0))
t=b.e
if(t instanceof Z.bx){t.W(a)
t.a5(a)
t.aW(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cL()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.d0.prototype={}
T.d1.prototype={}
T.hg.prototype={}
T.hh.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.z():u}}
T.hi.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.z():u}}
T.hj.prototype={
ft:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.jm(a)
t=new T.hh()
t.a=0
t.b=q
t.d=t.c=!1
W.N(u,"load",new T.hl(this,t,u,!1,q,!1,!1),!1)
return t},
aw:function(a,b,c,d,e,f){var u=W.jm(c);++this.d
W.N(u,"load",new T.hk(this,u,!1,b,!1,d,a),!1)},
cq:function(a,b,c){var u,t,s,r
b=V.j7(b)
u=V.j7(a.width)
t=V.j7(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iH()
s.width=u
s.height=t
r=C.f.df(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lN(r.getImageData(0,0,s.width,s.height))}}}
T.hl.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cq(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.p.dc(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.cN()}++s.e}}
T.hk.prototype={
$1:function(a){var u=this,t=u.a,s=t.cq(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.p.dc(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cN()}++t.e}}
X.iG.prototype={}
X.eT.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.z():u},
ag:function(a){var u=this.x
if(u!=null)u.B(a)},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.b.ae(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.b.ae(r*t)
r=C.b.ae(s.c*u)
a.c=r
s=C.b.ae(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.eV.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.z():u},
W:function(a){var u
a.cy.bb(V.bi())
u=V.bi()
a.db.bb(u)},
aW:function(a){a.cy.ap()
a.db.ap()}}
X.cP.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.z():u},
ag:function(a){var u=this.f
if(u!=null)u.B(a)},
dC:function(){return this.ag(null)},
W:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.ah(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bb(d)
k=$.jt
if(k==null){k=V.kF()
j=$.jH
if(j==null)j=$.jH=new V.D(0,1,0)
i=$.jG
if(i==null)i=$.jG=new V.D(0,0,-1)
u=i.u(0,Math.sqrt(i.A(i)))
j=j.aO(u)
t=j.u(0,Math.sqrt(j.A(j)))
s=u.aO(t)
r=new V.D(k.a,k.b,k.c)
q=t.L(0).A(r)
p=s.L(0).A(r)
o=u.L(0).A(r)
k=V.ah(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.jt=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aE(0,a,l)
if(m!=null)n=m.n(0,n)}a.db.bb(n)},
aW:function(a){a.cy.ap()
a.db.ap()}}
X.hc.prototype={}
V.iz.prototype={
$1:function(a){var u=C.b.dd(this.a.gfo(),2)
if(u!=="0.00")P.j8(u+" fps")}}
V.fZ.prototype={
dw:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.N(q,"scroll",new V.h0(o),!1)},
cz:function(a){var u,t,s,r,q,p,o,n
this.eZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fq(a),s.toString,r=new H.M(r),r=new P.c5(s.de(new H.bH(r,r.gj(r))).a());r.t();){s=r.gF(r)
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
if(H.jW(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.l9(C.F,s,C.m,!1)
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
eZ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.ho()
t=P.r
u.a=new H.G([t,L.cZ])
u.b=new H.G([t,L.d5])
u.c=P.jo(t)
u.d=u.J(0,q)
t=u.J(0,q).p(0,p)
s=K.R(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.J(0,p).p(0,p)
s=new K.ay()
r=[K.cH]
s.a=H.b([],r)
t.a.push(s)
t=K.R(new H.M("*"))
s.a.push(t)
t=u.J(0,p).p(0,"BoldEnd")
s=K.R(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.J(0,q).p(0,o)
s=K.R(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.J(0,o).p(0,o)
s=new K.ay()
s.a=H.b([],r)
t.a.push(s)
t=K.R(new H.M("_"))
s.a.push(t)
t=u.J(0,o).p(0,n)
s=K.R(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.J(0,q).p(0,m)
s=K.R(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.J(0,m).p(0,m)
s=new K.ay()
s.a=H.b([],r)
t.a.push(s)
t=K.R(new H.M("`"))
s.a.push(t)
t=u.J(0,m).p(0,"CodeEnd")
s=K.R(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.J(0,q).p(0,l)
s=K.R(new H.M("["))
t.a.push(s)
t.c=!0
t=u.J(0,l).p(0,k)
s=K.R(new H.M("|"))
t.a.push(s)
s=u.J(0,l).p(0,j)
t=K.R(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.J(0,l).p(0,l)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.R(new H.M("|]"))
t.a.push(s)
s=u.J(0,k).p(0,j)
t=K.R(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.J(0,k).p(0,k)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.R(new H.M("|]"))
t.a.push(s)
u.J(0,q).p(0,i).a.push(new K.ed())
s=u.J(0,i).p(0,i)
t=new K.ay()
t.a=H.b([],r)
s.a.push(t)
s=K.R(new H.M("*_`["))
t.a.push(s)
s=u.J(0,"BoldEnd")
s.d=s.a.aU(p)
s=u.J(0,n)
s.d=s.a.aU(o)
s=u.J(0,"CodeEnd")
s.d=s.a.aU(m)
s=u.J(0,j)
s.d=s.a.aU("Link")
s=u.J(0,i)
s.d=s.a.aU(i)
this.b=u}}
V.h0.prototype={
$1:function(a){P.jB(C.i,new V.h_(this.a))}}
V.h_.prototype={
$0:function(){var u=C.b.ae(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dq=u.i
u=J.cC.prototype
u.dr=u.i
u=K.cy.prototype
u.dn=u.aD
u.c2=u.i
u=O.bK.prototype
u.c3=u.aj
u=O.ag.prototype
u.c4=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lc","kw",19)
t(P,"lH","l0",6)
t(P,"lI","l1",6)
t(P,"lJ","l2",6)
s(P,"jO","lF",9)
var m
r(m=E.as.prototype,"gd7",0,0,null,["$1","$0"],["d8","fC"],0,0)
r(m,"gd5",0,0,null,["$1","$0"],["d6","fz"],0,0)
q(m,"gfv","fw",3)
q(m,"gfA","fB",3)
r(m=E.d2.prototype,"gc7",0,0,null,["$1","$0"],["c9","c8"],0,0)
p(m,"gfP","da",9)
o(m=X.da.prototype,"geh","ei",4)
o(m,"ge5","e6",4)
o(m,"geb","ec",2)
o(m,"gel","em",10)
o(m,"gej","ek",10)
o(m,"gep","eq",2)
o(m,"geu","ev",2)
o(m,"gef","eg",2)
o(m,"ger","es",2)
o(m,"ged","ee",2)
o(m,"gew","ex",17)
o(m,"gey","ez",4)
o(m,"geO","eP",5)
o(m,"geK","eL",5)
o(m,"geM","eN",5)
r(m=D.cE.prototype,"gcl",0,0,null,["$1","$0"],["cm","en"],0,0)
o(m,"geA","eB",18)
q(m,"ge_","e0",11)
q(m,"geE","eF",11)
n(V.C.prototype,"gj","bQ",12)
n(V.D.prototype,"gj","bQ",12)
r(m=U.bC.prototype,"gax",0,0,null,["$1","$0"],["K","a_"],0,0)
q(m,"gdY","dZ",13)
q(m,"geC","eD",13)
r(m=U.db.prototype,"gax",0,0,null,["$1","$0"],["K","a_"],0,0)
o(m,"gbo","bp",1)
o(m,"gbq","br",1)
o(m,"gbs","bt",1)
r(m=U.dc.prototype,"gax",0,0,null,["$1","$0"],["K","a_"],0,0)
o(m,"gbo","bp",1)
o(m,"gbq","br",1)
o(m,"gbs","bt",1)
o(m,"gdS","dT",1)
o(m,"gdU","dV",1)
o(m,"gf6","f7",1)
o(m,"gf4","f5",1)
o(m,"gf2","f3",1)
o(U.dd.prototype,"gdW","dX",1)
r(m=M.co.prototype,"gR",0,0,null,["$1","$0"],["S","aI"],0,0)
q(m,"geG","eH",14)
q(m,"geI","eJ",14)
r(M.cq.prototype,"gR",0,0,null,["$1","$0"],["S","aI"],0,0)
r(m=M.cv.prototype,"gR",0,0,null,["$1","$0"],["S","aI"],0,0)
q(m,"ge7","e8",3)
q(m,"ge9","ea",3)
r(m=O.cI.prototype,"gau",0,0,null,["$1","$0"],["P","aJ"],0,0)
r(m,"geU",0,0,null,["$1","$0"],["co","eV"],0,0)
q(m,"ge1","e2",15)
q(m,"ge3","e4",15)
r(O.bK.prototype,"gau",0,0,null,["$1","$0"],["P","aJ"],0,0)
r(O.cV.prototype,"gau",0,0,null,["$1","$0"],["P","aJ"],0,0)
r(X.cP.prototype,"gdB",0,0,null,["$1","$0"],["ag","dC"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.iQ,J.a,J.X,P.dy,P.j,H.bH,P.eY,H.cw,H.hE,H.ht,P.bd,H.by,H.dP,P.Z,H.f4,H.f5,H.f_,P.dV,P.bn,P.c5,P.dh,P.d_,P.ha,P.d3,P.ik,P.ic,P.i7,P.dx,P.q,P.eq,P.ij,P.b5,P.a7,P.a4,P.aP,P.fG,P.cY,P.dq,P.eS,P.aX,P.bI,P.aY,P.r,P.aF,W.ew,W.H,W.cx,P.e_,P.i8,K.ed,K.cy,K.cH,K.fU,L.cZ,L.d4,L.d5,L.ho,O.aq,O.bL,E.em,E.as,E.fM,E.d2,Z.df,Z.dg,Z.bx,Z.be,Z.aI,D.ep,D.bA,D.Q,X.cn,X.cD,X.f2,X.f8,X.a8,X.fw,X.hp,X.da,D.el,D.eB,D.Y,D.fJ,D.h4,V.U,V.ar,V.eJ,V.cJ,V.av,V.W,V.O,V.aB,V.cS,V.C,V.D,U.db,U.dc,U.dd,M.cq,M.cv,M.aa,A.cj,A.eg,A.V,A.ck,A.cs,A.cQ,A.cX,A.fe,A.bT,A.bU,A.bW,A.bX,A.d8,A.hA,F.aQ,F.bG,F.bP,F.fV,F.fW,F.fX,F.fY,F.bm,F.hK,F.hL,F.hO,F.hP,O.d0,O.bK,O.ff,T.hj,X.iG,X.hc,X.eV,X.cP,V.fZ])
s(J.a,[J.eZ,J.cB,J.cC,J.aU,J.bF,J.bf,H.bO,W.d,W.ec,W.cl,W.af,W.F,W.dj,W.a6,W.eA,W.eC,W.dl,W.cu,W.dn,W.eE,W.i,W.dr,W.au,W.eU,W.dt,W.aR,W.f7,W.fq,W.dz,W.dA,W.aw,W.dB,W.dE,W.az,W.dI,W.dK,W.aD,W.dL,W.aE,W.dQ,W.al,W.dT,W.hn,W.aH,W.dW,W.hr,W.hG,W.e0,W.e2,W.e4,W.e6,W.e8,P.aW,P.dv,P.aZ,P.dG,P.fL,P.dR,P.b_,P.dY,P.eh,P.di,P.cT,P.dN])
s(J.cC,[J.fH,J.bY,J.aV])
t(J.iP,J.aU)
s(J.bF,[J.cA,J.cz])
t(P.f6,P.dy)
s(P.f6,[H.d9,W.i_,W.hZ,P.eO])
t(H.M,H.d9)
s(P.j,[H.n,H.bJ,H.hT,P.eX])
t(H.eH,H.bJ)
s(P.eY,[H.cG,H.hU])
s(P.bd,[H.fD,H.f1,H.hD,H.eo,H.fS,P.cO,P.ad,P.hF,P.hC,P.h6,P.et,P.ez])
s(H.by,[H.iB,H.hd,H.f0,H.iu,H.iv,H.iw,P.hW,P.hV,P.hX,P.hY,P.ii,P.ih,P.iq,P.ia,P.ib,P.fa,P.eF,P.eG,W.fs,W.fu,W.fR,W.h9,W.i2,P.ir,P.eP,P.eQ,P.ej,E.fN,E.fO,E.fP,E.hm,D.eK,D.eL,F.il,F.hR,F.hQ,F.hM,F.hN,O.fi,O.fj,O.fk,O.fl,O.fm,O.fn,O.fo,O.fp,T.hl,T.hk,V.iz,V.h0,V.h_])
s(H.hd,[H.h7,H.bv])
t(P.f9,P.Z)
t(H.G,P.f9)
t(H.bh,H.n)
t(H.cK,H.bO)
s(H.cK,[H.c_,H.c1])
t(H.c0,H.c_)
t(H.bN,H.c0)
t(H.c2,H.c1)
t(H.cL,H.c2)
s(H.cL,[H.fx,H.fy,H.fz,H.fA,H.fB,H.cM,H.fC])
t(P.ig,P.eX)
t(P.i9,P.ik)
t(P.i6,P.ic)
t(P.eu,P.ha)
t(P.eI,P.eq)
t(P.hH,P.eI)
t(P.hI,P.eu)
s(P.a4,[P.J,P.u])
s(P.ad,[P.bk,P.eW])
s(W.d,[W.B,W.eN,W.aC,W.c3,W.aG,W.am,W.c6,W.hS,W.bZ,P.ek,P.ba])
s(W.B,[W.P,W.aO])
s(W.P,[W.l,P.k])
s(W.l,[W.ee,W.ef,W.bb,W.eR,W.bE,W.fT])
t(W.ev,W.af)
t(W.bc,W.dj)
s(W.a6,[W.ex,W.ey])
t(W.dm,W.dl)
t(W.ct,W.dm)
t(W.dp,W.dn)
t(W.eD,W.dp)
t(W.at,W.cl)
t(W.ds,W.dr)
t(W.eM,W.ds)
t(W.du,W.dt)
t(W.bD,W.du)
t(W.b0,W.i)
s(W.b0,[W.bg,W.ai,W.bl])
t(W.fr,W.dz)
t(W.ft,W.dA)
t(W.dC,W.dB)
t(W.fv,W.dC)
t(W.dF,W.dE)
t(W.cN,W.dF)
t(W.dJ,W.dI)
t(W.fI,W.dJ)
t(W.fQ,W.dK)
t(W.c4,W.c3)
t(W.h2,W.c4)
t(W.dM,W.dL)
t(W.h3,W.dM)
t(W.h8,W.dQ)
t(W.dU,W.dT)
t(W.he,W.dU)
t(W.c7,W.c6)
t(W.hf,W.c7)
t(W.dX,W.dW)
t(W.hq,W.dX)
t(W.b3,W.ai)
t(W.e1,W.e0)
t(W.i0,W.e1)
t(W.dk,W.cu)
t(W.e3,W.e2)
t(W.i3,W.e3)
t(W.e5,W.e4)
t(W.dD,W.e5)
t(W.e7,W.e6)
t(W.id,W.e7)
t(W.e9,W.e8)
t(W.ie,W.e9)
t(W.i1,P.d_)
t(P.a3,P.i8)
t(P.dw,P.dv)
t(P.f3,P.dw)
t(P.dH,P.dG)
t(P.fE,P.dH)
t(P.dS,P.dR)
t(P.hb,P.dS)
t(P.dZ,P.dY)
t(P.hs,P.dZ)
t(P.ei,P.di)
t(P.fF,P.ba)
t(P.dO,P.dN)
t(P.h5,P.dO)
s(K.cy,[K.ay,L.d7])
s(E.em,[Z.cm,A.cU,T.d1])
s(D.Q,[D.aS,D.aT,D.x,X.fK])
s(X.fK,[X.cF,X.ax,X.bM,X.d6])
s(O.aq,[D.cE,U.bC,M.co])
s(D.ep,[U.es,U.a2])
t(U.cp,U.a2)
s(A.cU,[A.fb,A.h1])
s(A.d8,[A.b1,A.hx,A.hy,A.hz,A.hv,A.K,A.hw,A.A,A.bS,A.hB,A.bV,A.a0,A.S,A.b2])
s(O.d0,[O.cI,O.cV])
s(O.bK,[O.fc,O.fd,O.ag])
s(O.ag,[O.fg,O.fh])
s(T.d1,[T.hg,T.hi])
t(T.hh,T.hg)
t(X.eT,X.hc)
u(H.d9,H.hE)
u(H.c_,P.q)
u(H.c0,H.cw)
u(H.c1,P.q)
u(H.c2,H.cw)
u(P.dy,P.q)
u(W.dj,W.ew)
u(W.dl,P.q)
u(W.dm,W.H)
u(W.dn,P.q)
u(W.dp,W.H)
u(W.dr,P.q)
u(W.ds,W.H)
u(W.dt,P.q)
u(W.du,W.H)
u(W.dz,P.Z)
u(W.dA,P.Z)
u(W.dB,P.q)
u(W.dC,W.H)
u(W.dE,P.q)
u(W.dF,W.H)
u(W.dI,P.q)
u(W.dJ,W.H)
u(W.dK,P.Z)
u(W.c3,P.q)
u(W.c4,W.H)
u(W.dL,P.q)
u(W.dM,W.H)
u(W.dQ,P.Z)
u(W.dT,P.q)
u(W.dU,W.H)
u(W.c6,P.q)
u(W.c7,W.H)
u(W.dW,P.q)
u(W.dX,W.H)
u(W.e0,P.q)
u(W.e1,W.H)
u(W.e2,P.q)
u(W.e3,W.H)
u(W.e4,P.q)
u(W.e5,W.H)
u(W.e6,P.q)
u(W.e7,W.H)
u(W.e8,P.q)
u(W.e9,W.H)
u(P.dv,P.q)
u(P.dw,W.H)
u(P.dG,P.q)
u(P.dH,W.H)
u(P.dR,P.q)
u(P.dS,W.H)
u(P.dY,P.q)
u(P.dZ,W.H)
u(P.di,P.Z)
u(P.dN,P.q)
u(P.dO,W.H)})()
var v={mangledGlobalNames:{u:"int",J:"double",a4:"num",r:"String",b5:"bool",aY:"Null",aX:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:-1,args:[P.u,[P.j,E.as]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aY,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bg]},{func:1,ret:-1,args:[P.u,[P.j,D.Y]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.u,[P.j,U.a2]]},{func:1,ret:-1,args:[P.u,[P.j,M.aa]]},{func:1,ret:-1,args:[P.u,[P.j,V.av]]},{func:1,ret:P.aY,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.b5,args:[[P.j,D.Y]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bb.prototype
C.n=W.bc.prototype
C.C=J.a.prototype
C.a=J.aU.prototype
C.D=J.cz.prototype
C.d=J.cA.prototype
C.h=J.cB.prototype
C.b=J.bF.prototype
C.c=J.bf.prototype
C.E=J.aV.prototype
C.o=J.fH.prototype
C.p=P.cT.prototype
C.j=J.bY.prototype
C.q=W.b3.prototype
C.r=W.bZ.prototype
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=function() {
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
C.y=function(getTagFallback) {
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
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.x=function(hooks) {
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
C.w=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.z=new P.fG()
C.m=new P.hH()
C.A=new P.hI()
C.e=new P.i9()
C.i=new P.aP(0)
C.B=new P.aP(5e6)
C.F=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.G=new P.bn(null,2)})();(function staticFields(){$.ae=0
$.bw=null
$.jc=null
$.jR=null
$.jN=null
$.jU=null
$.is=null
$.ix=null
$.j5=null
$.bo=null
$.ca=null
$.cb=null
$.j_=!1
$.ab=C.e
$.a1=[]
$.ji=null
$.jh=null
$.jg=null
$.jf=null
$.jq=null
$.ju=null
$.aj=null
$.jy=null
$.jF=null
$.jI=null
$.jH=null
$.jG=null
$.jt=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"me","k0",function(){return H.jP("_$dart_dartClosure")})
u($,"mf","j9",function(){return H.jP("_$dart_js")})
u($,"mg","k1",function(){return H.an(H.hu({
toString:function(){return"$receiver$"}}))})
u($,"mh","k2",function(){return H.an(H.hu({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mi","k3",function(){return H.an(H.hu(null))})
u($,"mj","k4",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mm","k7",function(){return H.an(H.hu(void 0))})
u($,"mn","k8",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ml","k6",function(){return H.an(H.jD(null))})
u($,"mk","k5",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mp","ka",function(){return H.an(H.jD(void 0))})
u($,"mo","k9",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mC","ja",function(){return P.l_()})
u($,"mE","ke",function(){return P.kR("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"md","k_",function(){return{}})
u($,"mw","kd",function(){return Z.a9(0)})
u($,"mq","kb",function(){return Z.a9(511)})
u($,"my","ac",function(){return Z.a9(1)})
u($,"mx","aM",function(){return Z.a9(2)})
u($,"ms","aL",function(){return Z.a9(4)})
u($,"mz","aN",function(){return Z.a9(8)})
u($,"mA","b7",function(){return Z.a9(16)})
u($,"mt","cf",function(){return Z.a9(32)})
u($,"mu","cg",function(){return Z.a9(64)})
u($,"mv","kc",function(){return Z.a9(96)})
u($,"mB","bt",function(){return Z.a9(128)})
u($,"mr","aK",function(){return Z.a9(256)})
u($,"mc","jZ",function(){return new V.eJ(1e-9)})
u($,"mb","y",function(){return $.jZ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bO,ArrayBufferView:H.bO,Float32Array:H.bN,Float64Array:H.bN,Int16Array:H.fx,Int32Array:H.fy,Int8Array:H.fz,Uint16Array:H.fA,Uint32Array:H.fB,Uint8ClampedArray:H.cM,CanvasPixelArray:H.cM,Uint8Array:H.fC,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ec,HTMLAnchorElement:W.ee,HTMLAreaElement:W.ef,Blob:W.cl,HTMLCanvasElement:W.bb,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CSSPerspective:W.ev,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.ex,CSSUnparsedValue:W.ey,DataTransferItemList:W.eA,DOMException:W.eC,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.eD,DOMTokenList:W.eE,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.at,FileList:W.eM,FileWriter:W.eN,HTMLFormElement:W.eR,Gamepad:W.au,History:W.eU,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,ImageData:W.aR,HTMLImageElement:W.bE,KeyboardEvent:W.bg,Location:W.f7,MediaList:W.fq,MIDIInputMap:W.fr,MIDIOutputMap:W.ft,MimeType:W.aw,MimeTypeArray:W.fv,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.az,PluginArray:W.fI,RTCStatsReport:W.fQ,HTMLSelectElement:W.fT,SourceBuffer:W.aC,SourceBufferList:W.h2,SpeechGrammar:W.aD,SpeechGrammarList:W.h3,SpeechRecognitionResult:W.aE,Storage:W.h8,CSSStyleSheet:W.al,StyleSheet:W.al,TextTrack:W.aG,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.he,TextTrackList:W.hf,TimeRanges:W.hn,Touch:W.aH,TouchEvent:W.bl,TouchList:W.hq,TrackDefaultList:W.hr,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.hG,VideoTrackList:W.hS,WheelEvent:W.b3,Window:W.bZ,DOMWindow:W.bZ,CSSRuleList:W.i0,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.i3,NamedNodeMap:W.dD,MozNamedAttrMap:W.dD,SpeechRecognitionResultList:W.id,StyleSheetList:W.ie,SVGLength:P.aW,SVGLengthList:P.f3,SVGNumber:P.aZ,SVGNumberList:P.fE,SVGPointList:P.fL,SVGStringList:P.hb,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b_,SVGTransformList:P.hs,AudioBuffer:P.eh,AudioParamMap:P.ei,AudioTrackList:P.ek,AudioContext:P.ba,webkitAudioContext:P.ba,BaseAudioContext:P.ba,OfflineAudioContext:P.fF,WebGL2RenderingContext:P.cT,SQLResultSetRowList:P.h5})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(M.jS,[])
else M.jS([])})})()
//# sourceMappingURL=test.dart.js.map
