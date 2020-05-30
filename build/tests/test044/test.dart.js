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
a[c]=function(){a[c]=function(){H.mS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jC(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jo:function jo(){},
lh:function(a,b,c,d){if(!!a.$ip)return new H.eP(a,b,[c,d])
return new H.bN(a,b,[c,d])},
fb:function(){return new P.bX("No element")},
lb:function(){return new P.bX("Too many elements")},
lB:function(a,b){var u=J.aR(a)
if(typeof u!=="number")return u.T()
H.d5(a,0,u-1,b)},
d5:function(a,b,c,d){if(c-b<=32)H.lA(a,b,c,d)
else H.lz(a,b,c,d)},
lA:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ei(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.V()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lz:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.U(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.U(a4+a5,2),f=g-j,e=g+j,d=J.ei(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
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
if(typeof p!=="number")return p.al()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.V()
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
if(typeof l!=="number")return l.al()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.V()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.V()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.al()
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
H.d5(a3,a4,t-2,a6)
H.d5(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.K(a6.$2(d.h(a3,t),b),0);)++t
for(;J.K(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.al()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.d5(a3,t,s,a6)}else H.d5(a3,t,s,a6)},
l:function l(a){this.a=a},
p:function p(){},
cN:function cN(){},
b1:function b1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cO:function cO(a,b){this.a=null
this.b=a
this.c=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b){this.a=a
this.b=b},
cE:function cE(){},
i1:function i1(){},
dj:function dj(){},
cl:function(a){var u,t=H.mT(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mB:function(a){return v.types[a]},
mI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$ix},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a_(a)
if(typeof u!=="string")throw H.c(H.aJ(a))
return u},
bU:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bV:function(a){return H.lk(a)+H.kp(H.ck(a),0,null)},
lk:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibq){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cl(t.length>1&&C.b.aD(t,0)===36?C.b.a7(t,1):t)},
k6:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lt:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.k)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aJ(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aW(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aJ(s))}return H.k6(r)},
ls:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aJ(s))
if(s<0)throw H.c(H.aJ(s))
if(s>65535)return H.lt(a)}return H.k6(a)},
js:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aW(u,10))>>>0,56320|u&1023)}throw H.c(P.aB(a,0,1114111,null,null))},
bm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lr:function(a){var u=H.bm(a).getFullYear()+0
return u},
lp:function(a){var u=H.bm(a).getMonth()+1
return u},
ll:function(a){var u=H.bm(a).getDate()+0
return u},
lm:function(a){var u=H.bm(a).getHours()+0
return u},
lo:function(a){var u=H.bm(a).getMinutes()+0
return u},
lq:function(a){var u=H.bm(a).getSeconds()+0
return u},
ln:function(a){var u=H.bm(a).getMilliseconds()+0
return u},
Z:function(a){throw H.c(H.aJ(a))},
f:function(a,b){if(a==null)J.aR(a)
throw H.c(H.bx(a,b))},
bx:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,s,null)
u=J.aR(a)
if(!(b<0)){if(typeof u!=="number")return H.Z(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.d0(b,s)},
mu:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bn(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end",u)
return new P.a7(!0,b,"end",null)},
aJ:function(a){return new P.a7(!0,a,null,null)},
mq:function(a){if(typeof a!=="number")throw H.c(H.aJ(a))
return a},
c:function(a){var u
if(a==null)a=new P.cW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kA})
u.name=""}else u.toString=H.kA
return u},
kA:function(){return J.a_(this.dartException)},
t:function(a){throw H.c(a)},
k:function(a){throw H.c(P.aT(a))},
an:function(a){var u,t,s,r,q,p
a=H.kz(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k2:function(a,b){return new H.fY(a,b==null?null:b.method)},
jp:function(a,b){var u=b==null,t=u?null:b.method
return new H.fg(a,t,u?null:b.receiver)},
aq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jp(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k2(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kD()
q=$.kE()
p=$.kF()
o=$.kG()
n=$.kJ()
m=$.kK()
l=$.kI()
$.kH()
k=$.kM()
j=$.kL()
i=r.a0(u)
if(i!=null)return f.$1(H.jp(u,i))
else{i=q.a0(u)
if(i!=null){i.method="call"
return f.$1(H.jp(u,i))}else{i=p.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=n.a0(u)
if(i==null){i=m.a0(u)
if(i==null){i=l.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=k.a0(u)
if(i==null){i=j.a0(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k2(u,i))}}return f.$1(new H.i0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d7()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a7(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d7()
return a},
jF:function(a){var u
if(a==null)return new H.dW(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dW(a)},
my:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mH)
a.$identity=u
return u},
l4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ht().constructor.prototype):Object.create(new H.bA(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ae
if(typeof t!=="number")return t.H()
$.ae=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jS(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l0(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jS(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l0:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mB,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jR:H.je
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
l1:function(a,b,c,d){var u=H.je
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l1(t,!r,u,b)
if(t===0){r=$.ae
if(typeof r!=="number")return r.H()
$.ae=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
return new Function(r+H.d(q==null?$.bB=H.ex("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ae
if(typeof r!=="number")return r.H()
$.ae=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
return new Function(r+H.d(q==null?$.bB=H.ex("self"):q)+"."+H.d(u)+"("+o+");}")()},
l2:function(a,b,c,d){var u=H.je,t=H.jR
switch(b?-1:a){case 0:throw H.c(H.lx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l3:function(a,b){var u,t,s,r,q,p,o,n=$.bB
if(n==null)n=$.bB=H.ex("self")
u=$.jQ
if(u==null)u=$.jQ=H.ex("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l2(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ae
if(typeof u!=="number")return u.H()
$.ae=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ae
if(typeof u!=="number")return u.H()
$.ae=u+1
return new Function(n+u+"}")()},
jC:function(a,b,c,d,e,f,g){return H.l4(a,b,c,d,!!e,!!f,g)},
je:function(a){return a.a},
jR:function(a){return a.c},
ex:function(a){var u,t,s,r=new H.bA("self","target","receiver","name"),q=J.jm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mM:function(a,b){throw H.c(H.l_(a,H.cl(b.substring(2))))},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.mM(a,b)},
mw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l_:function(a,b){return new H.ey("CastError: "+P.jk(a)+": type '"+H.d(H.mm(a))+"' is not a subtype of type '"+b+"'")},
mm:function(a){var u,t=J.N(a)
if(!!t.$ibC){u=H.mw(t)
if(u!=null)return H.mN(u)
return"Closure"}return H.bV(a)},
mS:function(a){throw H.c(new P.eH(a))},
lx:function(a){return new H.hd(a)},
ku:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ck:function(a){if(a==null)return
return a.$ti},
np:function(a,b,c){return H.jb(a["$a"+H.d(c)],H.ck(b))},
mA:function(a,b,c,d){var u=H.jb(a["$a"+H.d(c)],H.ck(b))
return u==null?null:u[d]},
jE:function(a,b,c){var u=H.jb(a["$a"+H.d(b)],H.ck(a))
return u==null?null:u[c]},
ad:function(a,b){var u=H.ck(a)
return u==null?null:u[b]},
mN:function(a){return H.b9(a,null)},
b9:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cl(a[0].name)+H.kp(a,1,b)
if(typeof a=="function")return H.cl(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.lS(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lS:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.T)p+=" extends "+H.b9(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b9(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b9(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b9(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mx(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b9(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kp:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b9(p,c)}return"<"+u.i(0)+">"},
jb:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nn:function(a,b,c){return a.apply(b,H.jb(J.N(b)["$a"+H.d(c)],H.ck(b)))},
no:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mJ:function(a){var u,t,s,r,q=$.kv.$1(a),p=$.j1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ks.$2(a,q)
if(q!=null){p=$.j1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j9(u)
$.j1[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j7[q]=u
return u}if(s==="-"){r=H.j9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kx(a,u)
if(s==="*")throw H.c(P.kg(q))
if(v.leafTags[q]===true){r=H.j9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kx(a,u)},
kx:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jH(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j9:function(a){return J.jH(a,!1,null,!!a.$ix)},
mK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j9(u)
else return J.jH(u,c,null,null)},
mF:function(){if(!0===$.jG)return
$.jG=!0
H.mG()},
mG:function(){var u,t,s,r,q,p,o,n
$.j1=Object.create(null)
$.j7=Object.create(null)
H.mE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ky.$1(q)
if(p!=null){o=H.mK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mE:function(){var u,t,s,r,q,p,o=C.w()
o=H.bv(C.x,H.bv(C.y,H.bv(C.o,H.bv(C.o,H.bv(C.z,H.bv(C.A,H.bv(C.B(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kv=new H.j4(r)
$.ks=new H.j5(q)
$.ky=new H.j6(p)},
bv:function(a,b){return a(b)||b},
le:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.f1("Illegal RegExp pattern ("+String(p)+")",a))},
mP:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mv:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kz:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jK:function(a,b,c){var u=H.mQ(a,b,c)
return u},
mQ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kz(b),'g'),H.mv(c))},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fY:function fY(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
jc:function jc(a){this.a=a},
dW:function dW(a){this.a=a
this.b=null},
bC:function bC(){},
hB:function hB(){},
ht:function ht(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(a){this.a=a},
hd:function hd(a){this.a=a},
E:function E(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ff:function ff(a){this.a=a},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bl:function bl(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
fe:function fe(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
ao:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bx(b,a))},
lR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mu(a,b,c))
return b},
bS:function bS(){},
cR:function cR(){},
bR:function bR(){},
cS:function cS(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
cT:function cT(){},
fU:function fU(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
mx:function(a){return J.jX(a?Object.keys(a):[],null)},
mT:function(a){return v.mangledGlobalNames[a]},
mL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j3:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jG==null){H.mF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kg("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jM()]
if(r!=null)return r
r=H.mJ(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jM(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lc:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aB(a,0,4294967295,"length",null))
return J.jX(new Array(a),b)},
jX:function(a,b){return J.jm(H.b(a,[b]))},
jm:function(a){a.fixed$length=Array
return a},
ld:function(a,b){return J.cp(a,b)},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cI.prototype
return J.cH.prototype}if(typeof a=="string")return J.aZ.prototype
if(a==null)return J.cJ.prototype
if(typeof a=="boolean")return J.fd.prototype
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.T)return a
return J.j3(a)},
ei:function(a){if(typeof a=="string")return J.aZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.T)return a
return J.j3(a)},
j2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.T)return a
return J.j3(a)},
mz:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bq.prototype
return a},
jD:function(a){if(typeof a=="string")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.bq.prototype
return a},
ej:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.T)return a
return J.j3(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).n(a,b)},
co:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ei(a).h(a,b)},
kS:function(a,b,c){return J.ej(a).eJ(a,b,c)},
kT:function(a,b,c,d){return J.ej(a).eY(a,b,c,d)},
cp:function(a,b){return J.mz(a).au(a,b)},
el:function(a,b){return J.j2(a).A(a,b)},
kU:function(a,b){return J.j2(a).C(a,b)},
kV:function(a){return J.ej(a).gf1(a)},
em:function(a){return J.N(a).gK(a)},
aQ:function(a){return J.j2(a).gL(a)},
aR:function(a){return J.ei(a).gl(a)},
jO:function(a){return J.j2(a).fM(a)},
kW:function(a,b){return J.ej(a).fQ(a,b)},
kX:function(a,b,c){return J.jD(a).aR(a,b,c)},
kY:function(a){return J.jD(a).h_(a)},
a_:function(a){return J.N(a).i(a)},
a:function a(){},
fd:function fd(){},
cJ:function cJ(){},
cK:function cK(){},
h1:function h1(){},
bq:function bq(){},
b_:function b_(){},
aY:function aY(a){this.$ti=a},
jn:function jn(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(){},
cI:function cI(){},
cH:function cH(){},
aZ:function aZ(){}},P={
lG:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mn()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bw(new P.iq(s),1)).observe(u,{childList:true})
return new P.ip(s,u,t)}else if(self.setImmediate!=null)return P.mo()
return P.mp()},
lH:function(a){self.scheduleImmediate(H.bw(new P.ir(a),0))},
lI:function(a){self.setImmediate(H.bw(new P.is(a),0))},
lJ:function(a){P.jv(C.h,a)},
jv:function(a,b){var u=C.d.U(a.a,1000)
return P.lP(u<0?0:u,b)},
ke:function(a,b){var u=C.d.U(a.a,1000)
return P.lQ(u<0?0:u,b)},
lP:function(a,b){var u=new P.e1()
u.dB(a,b)
return u},
lQ:function(a,b){var u=new P.e1()
u.dC(a,b)
return u},
nl:function(a){return new P.bs(a,1)},
lM:function(){return C.O},
lN:function(a){return new P.bs(a,3)},
lV:function(a,b){return new P.iO(a,[b])},
mg:function(){var u,t
for(;u=$.bu,u!=null;){$.cj=null
t=u.b
$.bu=t
if(t==null)$.ci=null
u.a.$0()}},
ml:function(){$.jA=!0
try{P.mg()}finally{$.cj=null
$.jA=!1
if($.bu!=null)$.jN().$1(P.kt())}},
mj:function(a){var u=new P.dm(a)
if($.bu==null){$.bu=$.ci=u
if(!$.jA)$.jN().$1(P.kt())}else $.ci=$.ci.b=u},
mk:function(a){var u,t,s=$.bu
if(s==null){P.mj(a)
$.cj=$.ci
return}u=new P.dm(a)
t=$.cj
if(t==null){u.b=s
$.bu=$.cj=u}else{u.b=t.b
$.cj=t.b=u
if(u.b==null)$.ci=u}},
kd:function(a,b){var u=$.ab
if(u===C.e)return P.jv(a,b)
return P.jv(a,u.f2(b))},
lD:function(a,b){var u=$.ab
if(u===C.e)return P.ke(a,b)
return P.ke(a,u.cq(b,P.de))},
kq:function(a,b,c,d,e){var u={}
u.a=d
P.mk(new P.j_(u,e))},
mh:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
mi:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
e1:function e1(){this.c=0},
iS:function iS(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b){this.a=a
this.b=b},
bt:function bt(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iO:function iO(a,b){this.a=a
this.$ti=b},
dm:function dm(a){this.a=a
this.b=null},
d9:function d9(){},
hw:function hw(){},
de:function de(){},
iV:function iV(){},
j_:function j_(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function(a,b){return new H.E([a,b])},
lf:function(a){return H.my(a,new H.E([null,null]))},
bL:function(a){return new P.iB([a])},
jz:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lO:function(a,b){var u=new P.dD(a,b)
u.c=a.e
return u},
la:function(a,b,c){var u,t
if(P.jB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.Y.push(a)
try{P.lU(a,u)}finally{if(0>=$.Y.length)return H.f($.Y,-1)
$.Y.pop()}t=P.kb(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jl:function(a,b,c){var u,t
if(P.jB(a))return b+"..."+c
u=new P.ak(b)
$.Y.push(a)
try{t=u
t.a=P.kb(t.a,a,", ")}finally{if(0>=$.Y.length)return H.f($.Y,-1)
$.Y.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jB:function(a){var u,t
for(u=$.Y.length,t=0;t<u;++t)if(a===$.Y[t])return!0
return!1},
lU:function(a,b){var u,t,s,r,q,p,o,n=a.gL(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.d(n.gB(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gB(n);++l
if(!n.t()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gB(n);++l
for(;n.t();r=q,q=p){p=n.gB(n);++l
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
jZ:function(a,b){var u,t,s=P.bL(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.k)(a),++t)s.p(0,a[t])
return s},
k_:function(a){var u,t={}
if(P.jB(a))return"{...}"
u=new P.ak("")
try{$.Y.push(a)
u.a+="{"
t.a=!0
J.kU(a,new P.fq(t,u))
u.a+="}"}finally{if(0>=$.Y.length)return H.f($.Y,-1)
$.Y.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iB:function iB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fa:function fa(){},
fm:function fm(){},
u:function u(){},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
S:function S(){},
iI:function iI(){},
dE:function dE(){},
eA:function eA(){},
eC:function eC(){},
eR:function eR(){},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f7:function f7(a){this.a=a},
i4:function i4(){},
i5:function i5(){},
iT:function iT(a){this.b=0
this.c=a},
l8:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.d(H.bV(a))+"'"},
lg:function(a,b,c){var u,t,s=J.lc(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jq:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aQ(a);u.t();)t.push(u.gB(u))
if(b)return t
return J.jm(t)},
ju:function(a){var u,t=a.length,s=P.jt(0,null,t)
if(typeof s!=="number")return s.al()
u=s<t
return H.ls(u?C.a.dg(a,0,s):a)},
lu:function(a){return new H.fe(a,H.le(a,!1,!0,!1,!1,!1))},
kb:function(a,b,c){var u=J.aQ(b)
if(!u.t())return a
if(c.length===0){do a+=H.d(u.gB(u))
while(u.t())}else{a+=H.d(u.gB(u))
for(;u.t();)a=a+c+H.d(u.gB(u))}return a},
ko:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kR().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.f7(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.js(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cy:function(a){if(a>=10)return""+a
return"0"+a},
jU:function(a){return new P.aV(1000*a)},
jk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l8(a)},
kZ:function(a){return new P.a7(!1,null,null,a)},
jd:function(a,b,c){return new P.a7(!0,a,b,c)},
d0:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
jt:function(a,b,c){var u
if(typeof a!=="number")return H.Z(a)
if(0<=a){if(typeof c!=="number")return H.Z(c)
u=a>c}else u=!0
if(u)throw H.c(P.aB(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.Z(c)
u=b>c}else u=!0
if(u)throw H.c(P.aB(b,a,c,"end",null))
return b}return c},
k7:function(a,b){if(typeof a!=="number")return a.al()
if(a<0)throw H.c(P.aB(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.aR(b):e
return new P.f9(u,!0,a,c,"Index out of range")},
v:function(a){return new P.i2(a)},
kg:function(a){return new P.i_(a)},
ka:function(a){return new P.bX(a)},
aT:function(a){return new P.eB(a)},
r:function(a){return new P.dv(a)},
jJ:function(a){H.mL(a)},
ap:function ap(){},
aU:function aU(a,b){this.a=a
this.b=b},
J:function J(){},
aV:function aV(a){this.a=a},
eN:function eN(){},
eO:function eO(){},
bg:function bg(){},
cW:function cW(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f9:function f9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i2:function i2(a){this.a=a},
i_:function i_(a){this.a=a},
bX:function bX(a){this.a=a},
eB:function eB(a){this.a=a},
h0:function h0(){},
d7:function d7(){},
eH:function eH(a){this.a=a},
dv:function dv(a){this.a=a},
f1:function f1(a,b){this.a=a
this.b=b},
f3:function f3(){},
w:function w(){},
j:function j(){},
fc:function fc(){},
a9:function a9(){},
bM:function bM(){},
b3:function b3(){},
a6:function a6(){},
T:function T(){},
m:function m(){},
ak:function ak(a){this.a=a},
mt:function(a){var u,t=J.N(a)
if(!!t.$iaX){u=t.gcs(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e6(a.data,a.height,a.width)},
ms:function(a){if(a instanceof P.e6)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var u,t,s,r,q
if(a==null)return
u=P.jY(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mr:function(a){var u={}
a.C(0,new P.j0(u))
return u},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(){},
f_:function f_(){},
iD:function iD(){},
aa:function aa(){},
b0:function b0(){},
fi:function fi(){},
b4:function b4(){},
fZ:function fZ(){},
h5:function h5(){},
bW:function bW(){},
hx:function hx(){},
i:function i(){},
b5:function b5(){},
hP:function hP(){},
dB:function dB(){},
dC:function dC(){},
dM:function dM(){},
dN:function dN(){},
dY:function dY(){},
dZ:function dZ(){},
e4:function e4(){},
e5:function e5(){},
er:function er(){},
es:function es(){},
et:function et(a){this.a=a},
eu:function eu(){},
bb:function bb(){},
h_:function h_(){},
dn:function dn(){},
d2:function d2(){},
hs:function hs(){},
dU:function dU(){},
dV:function dV(){}},W={
jP:function(){var u=document.createElement("a")
return u},
jg:function(){var u=document.createElement("canvas")
return u},
l7:function(a,b,c){var u=document.body,t=(u&&C.m).a_(u,a,b,c)
t.toString
u=new H.c5(new W.U(t),new W.eQ(),[W.B])
return u.gam(u)},
ji:function(a){return"wheel"},
bE:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ej(a)
t=u.gd2(a)
if(typeof t==="string")r=u.gd2(a)}catch(s){H.aq(s)}return r},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
km:function(a,b,c,d){var u=W.iA(W.iA(W.iA(W.iA(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
O:function(a,b,c,d){var u=W.kr(new W.iy(c),W.h)
if(u!=null&&!0)J.kT(a,b,u,!1)
return new W.ix(a,b,u,!1)},
kl:function(a){var u=W.jP(),t=window.location
u=new W.c7(new W.iH(u,t))
u.du(a)
return u},
lK:function(a,b,c,d){return!0},
lL:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kn:function(){var u=P.m,t=P.jZ(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.iP(t,P.bL(u),P.bL(u),P.bL(u),null)
t.dA(null,new H.fr(C.j,new W.iQ(),[H.ad(C.j,0),u]),s,null)
return t},
kr:function(a,b){var u=$.ab
if(u===C.e)return a
return u.cq(a,b)},
o:function o(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
cs:function cs(){},
bc:function bc(){},
bd:function bd(){},
aS:function aS(){},
eD:function eD(){},
D:function D(){},
bD:function bD(){},
eE:function eE(){},
a3:function a3(){},
af:function af(){},
eF:function eF(){},
eG:function eG(){},
eJ:function eJ(){},
a8:function a8(){},
eK:function eK(){},
cA:function cA(){},
cB:function cB(){},
eL:function eL(){},
eM:function eM(){},
iu:function iu(a,b){this.a=a
this.b=b},
L:function L(){},
eQ:function eQ(){},
h:function h(){},
e:function e(){},
au:function au(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
av:function av(){},
f6:function f6(){},
bF:function bF(){},
aX:function aX(){},
bG:function bG(){},
bk:function bk(){},
fn:function fn(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
fL:function fL(a){this.a=a},
ay:function ay(){},
fM:function fM(){},
ah:function ah(){},
U:function U(a){this.a=a},
B:function B(){},
cU:function cU(){},
aA:function aA(){},
h3:function h3(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
he:function he(){},
aC:function aC(){},
hp:function hp(){},
aD:function aD(){},
hq:function hq(){},
aE:function aE(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
al:function al(){},
da:function da(){},
hy:function hy(){},
hz:function hz(){},
bY:function bY(){},
aF:function aF(){},
am:function am(){},
hC:function hC(){},
hD:function hD(){},
hJ:function hJ(){},
aG:function aG(){},
bo:function bo(){},
hN:function hN(){},
hO:function hO(){},
b6:function b6(){},
i3:function i3(){},
il:function il(){},
b8:function b8(){},
c6:function c6(){},
iv:function iv(){},
dq:function dq(){},
iz:function iz(){},
dJ:function dJ(){},
iL:function iL(){},
iM:function iM(){},
it:function it(){},
iw:function iw(a){this.a=a},
ix:function ix(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iy:function iy(a){this.a=a},
c7:function c7(a){this.a=a},
G:function G(){},
cV:function cV(a){this.a=a},
fW:function fW(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(){},
iJ:function iJ(){},
iK:function iK(){},
iP:function iP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iQ:function iQ(){},
iN:function iN(){},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
az:function az(){},
iH:function iH(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a},
iU:function iU(a){this.a=a},
dp:function dp(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
cc:function cc(){},
cd:function cd(){},
dS:function dS(){},
dT:function dT(){},
dX:function dX(){},
e_:function e_(){},
e0:function e0(){},
ce:function ce(){},
cf:function cf(){},
e2:function e2(){},
e3:function e3(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){}},K={
I:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aD(a,0)
t=C.b.aD(b,0)
if(u>t){s=t
t=u
u=s}return new K.h6(u,t)},
q:function(a){var u=new K.hf()
u.dr(a)
return u},
ar:function ar(){},
cG:function cG(){},
b2:function b2(){},
X:function X(){this.a=null},
h6:function h6(a,b){this.a=a
this.b=b},
hf:function hf(){this.a=null}},L={
hL:function(){var u=new L.hK(),t=P.m
u.a=new H.E([t,L.d8])
u.b=new H.E([t,L.dg])
u.c=P.bL(t)
return u},
d8:function d8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a){this.b=a
this.c=null},
hK:function hK(){var _=this
_.d=_.c=_.b=_.a=null},
dh:function dh(a){this.b=a
this.a=this.c=null}},O={
jh:function(a){var u=new O.be([a])
u.bV(a)
return u},
be:function be(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bP:function bP(){this.b=this.a=null},
cP:function cP(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
ft:function ft(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bO:function bO(){},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ag:function ag(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fw:function fw(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
fx:function fx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fy:function fy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
db:function db(){}},E={
lw:function(a,b){var u=new E.h7(a)
u.dq(a,b)
return u},
lC:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibd)return E.kc(a,!0,!0,!0,!1)
u=W.jg()
t=u.style
t.width="100%"
t.height="100%"
s.gcr(a).p(0,u)
return E.kc(u,!0,!0,!0,!1)},
kc:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dd(),p=C.p.bN(a,"webgl2",P.lf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lw(p,a)
u=new T.hG(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dk(a)
t=new X.fh()
t.d=P.bL(P.w)
u.b=t
t=new X.fN(u)
t.f=0
t.r=V.cY()
t.x=V.cY()
t.ch=t.Q=1
u.c=t
t=new X.fo(u)
t.r=0
t.x=V.cY()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hM(u)
t.f=V.cY()
t.r=V.cY()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d9,P.T]])
u.z=t
s=document
t.push(W.O(s,"contextmenu",u.ge6(),!1))
u.z.push(W.O(a,"focus",u.gec(),!1))
u.z.push(W.O(a,"blur",u.ge0(),!1))
u.z.push(W.O(s,"keyup",u.geg(),!1))
u.z.push(W.O(s,"keydown",u.gee(),!1))
u.z.push(W.O(a,"mousedown",u.gek(),!1))
u.z.push(W.O(a,"mouseup",u.geo(),!1))
u.z.push(W.O(a,r,u.gem(),!1))
t=u.z
W.ji(a)
W.ji(a)
t.push(W.O(a,W.ji(a),u.geq(),!1))
u.z.push(W.O(s,r,u.ge8(),!1))
u.z.push(W.O(s,"mouseup",u.gea(),!1))
u.z.push(W.O(s,"pointerlockchange",u.ges(),!1))
u.z.push(W.O(a,"touchstart",u.geE(),!1))
u.z.push(W.O(a,"touchend",u.geA(),!1))
u.z.push(W.O(a,"touchmove",u.geC(),!1))
q.ch=!0
q.cx=!1
q.cy=new P.aU(Date.now(),!1)
q.db=0
q.cb()
return q},
ew:function ew(){},
aW:function aW(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
dd:function dd(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.f=_.e=_.d=_.c=_.b=null},
hI:function hI(a){this.a=a}},Z={
jy:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.dl(b,u)},
a5:function(a){return new Z.aI(a)},
dl:function dl(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
im:function im(a){this.a=a},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
a4:function(){var u=new D.bh()
u.d=0
return u},
ez:function ez(){},
bh:function bh(){var _=this
_.d=_.c=_.b=_.a=null},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
V:function V(){this.b=null},
bH:function bH(){this.b=null},
bI:function bI(){this.b=null},
F:function F(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ev:function ev(){},
bf:function bf(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
W:function W(){},
cM:function cM(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h4:function h4(){},
hr:function hr(){}},X={cv:function cv(a,b){this.a=a
this.b=b},cL:function cL(a,b){this.a=a
this.b=b},fh:function fh(){this.d=this.b=this.a=null},fo:function fo(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},fN:function fN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dk:function dk(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l9:function(a){var u=new X.f2(),t=V.ac(1)
u.a=new V.as(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k8
if(t==null){t=V.lv(0,0,1,1)
$.k8=t}u.r=t
return u},
jf:function jf(){},
f2:function f2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(){}},V={
ac:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jL:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.d9(a-b,u)
return(a<0?a+u:a)+b},
y:function(a,b,c){if(a==null)return C.b.a1("null",c)
return C.b.a1(C.c.d4(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
by:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.k)(a),++s){r=V.y(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a1(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jI:function(a){return C.c.fX(Math.pow(2,C.I.bC(Math.log(H.mq(a))/Math.log(2))))},
jr:function(){var u=$.k1
return u==null?$.k1=V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k0:function(a,b,c){var u=c.D(0,Math.sqrt(c.M(c))),t=b.aH(u),s=t.D(0,Math.sqrt(t.M(t))),r=u.aH(s),q=new V.z(a.a,a.b,a.c),p=s.aA(0).M(q),o=r.aA(0).M(q),n=u.aA(0).M(q)
return V.ax(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cY:function(){var u=$.k4
return u==null?$.k4=new V.ai(0,0):u},
k5:function(){var u=$.aj
return u==null?$.aj=new V.a0(0,0,0):u},
lv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d1(a,b,c,d)},
c4:function(){var u=$.kj
return u==null?$.kj=new V.z(0,0,0):u},
lE:function(){var u=$.i6
return u==null?$.i6=new V.z(-1,0,0):u},
jx:function(){var u=$.i7
return u==null?$.i7=new V.z(0,1,0):u},
lF:function(){var u=$.i8
return u==null?$.i8=new V.z(0,0,1):u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
cQ:function cQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aw:function aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ai:function ai(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function(a){P.lD(C.F,new V.ja(a))},
ly:function(a){var u=new V.hk()
u.dt(a,!0)
return u},
cw:function cw(){},
ja:function ja(a){this.a=a},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h2:function h2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(){this.b=this.a=null},
hm:function hm(a){this.a=a},
hl:function hl(a){this.a=a},
hn:function hn(a){this.a=a}},U={
jT:function(a){var u=new U.cx()
u.a=a
return u},
cx:function cx(){this.b=this.a=null},
fO:function fO(){},
d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cC:function cC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
li:function(a,b){var u=a.aK,t=new A.fs(b,u)
t.ds(b,u)
t.dn(a,b)
return t},
lj:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.ga6(a3)+a4.ga6(a4)+a5.ga6(a5)+a6.ga6(a6)+a7.ga6(a7)+a8.ga6(a8)+a9.ga6(a9)+b0.ga6(b0)+b1.ga6(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+(a1?"1":"0")+"_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.k)(b2),++t)c+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.k)(b3),++t)c+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.k)(b4),++t)c+="_"+H.d(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.k)(b5),++t)c+="_"+H.d(b5[t].a)}for(u=b2.length,s=a1,r=0,t=0;t<u;++t,s=!0)r+=b2[t].b
for(q=b3.length,t=0;t<q;++t,s=!0)r+=b3[t].b
for(q=b4.length,t=0;t<q;++t,s=!0)r+=b4[t].b
for(p=b5.length,t=0;t<p;++t,s=!0)r+=b5[t].b
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
f=j||i||l||a1
e=n&&k
a=a&&h
d=$.aO()
if(j){u=$.aN()
d=new Z.aI(d.a|u.a)}if(i){u=$.aM()
d=new Z.aI(d.a|u.a)}if(h){u=$.aP()
d=new Z.aI(d.a|u.a)}if(g){u=$.aL()
d=new Z.aI(d.a|u.a)}return new A.fv(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,r,o,k,o,s,f,!0,e,!1,m,s,l,j,i,h,!1,g,a,!1,a0,a1,a2,c.charCodeAt(0)==0?c:c,d)},
iY:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iZ:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iY(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ek(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
m_:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iY(b,t,"emission")
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
lW:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iZ(b,t,"ambient")
b.a+="\n"},
lY:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iZ(b,t,"diffuse")
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
m0:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iZ(b,t,"invDiffuse")
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
m6:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iZ(b,t,"specular")
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
m2:function(a,b){var u,t,s
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
m4:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iY(b,t,"reflect")
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
m5:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iY(b,t,"refract")
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
lX:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.a2()
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
lZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.ek(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a2()
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
m3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.a2()
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
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.a2()
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
m1:function(a,b){var u,t
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
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
m8:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ak("")
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
i.a=t}if(a.dy){t+="uniform mat4 invViewMat;\n"
i.a=t}r=a.y2
if(r){t+="uniform vec4 fogColor;\n"
i.a=t
t+="uniform float fogStop;\n"
i.a=t
t=i.a=t+"uniform float fogWidth;\n"}i.a=t+"\n"
A.m_(a,i)
A.lW(a,i)
A.lY(a,i)
A.m0(a,i)
A.m6(a,i)
t=a.db
if(t){q=i.a+="// === Environmental ===\n"
q+="\n"
i.a=q
q+="uniform samplerCube envSampler;\n"
i.a=q
i.a=q+"\n"
A.m4(a,i)
A.m5(a,i)}A.m2(a,i)
q=i.a+="// === Alpha ===\n"
q=i.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
i.a=q}p=p.b
if(p)q=i.a=q+"uniform sampler2D alphaTxt;\n"
q+="float alphaValue()\n"
i.a=q
q=i.a=q+"{\n"
if(!(o||p||!1))q=i.a=q+"   return 1.0;\n"
else if(p||!1){if(o){if(p){q+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
i.a=q}}else if(p){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
i.a=q}q+="   if (a <= 0.000001) discard;\n"
i.a=q
q+="   return a;\n"
i.a=q}else if(o){q+="   return alpha;\n"
i.a=q}q+="}\n"
i.a=q
i.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.k)(p),++n)A.lX(a,p[n],i)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.k)(p),++n)A.lZ(a,p[n],i)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.k)(p),++n)A.m3(a,p[n],i)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.k)(p),++n)A.m7(a,p[n],i)
A.m1(a,i)}p=i.a+="// === Main ===\n"
p+="\n"
i.a=p
p+="void main()\n"
i.a=p
p+="{\n"
i.a=p
p=i.a=p+"   float alpha = alphaValue();\n"
u=u?i.a=p+"   vec3 norm = normal();\n":p
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.m])
if(q){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
u=a.b
if(u.a||u.b||!1)i.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)i.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.k)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.f(q,0)
i.a+=l+(q[0].toUpperCase()+C.b.a7(q,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.k)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.f(q,0)
i.a+=l+(q[0].toUpperCase()+C.b.a7(q,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.k)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.f(q,0)
i.a+=l+(q[0].toUpperCase()+C.b.a7(q,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.k)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.f(q,0)
i.a+=l+(q[0].toUpperCase()+C.b.a7(q,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)m.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)m.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.k(m," + ")+", alpha);\n"
if(s){u+="   objClr = colorMat*objClr;\n"
i.a=u}if(r){u+="   float fogFactor = (viewPos.z-fogStop) / fogWidth;\n"
i.a=u
u=i.a=u+"   objClr = mix(fogColor, objClr, clamp(fogFactor, 0.0, 1.0));\n"}u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m9:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.av+"];\n"
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
mb:function(a,b){var u
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
ma:function(a,b){var u
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
md:function(a,b){var u,t
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
me:function(a,b){var u,t
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
mc:function(a,b){var u
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
mf:function(a,b){var u
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
ek:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.a7(a,1)},
jw:function(a,b,c,d,e){var u=new A.hT(a,c,e)
u.f=d
P.lg(d,0,P.w)
return u},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a,b){var _=this
_.ha=_.cu=_.aZ=_.aK=_.av=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.cL=_.cK=_.cJ=_.bB=_.bA=_.bz=_.by=_.bx=_.bw=_.bv=_.bu=_.hf=_.cI=_.cH=_.he=_.cG=_.cF=_.cE=_.hd=_.cD=_.cC=_.cB=_.hc=_.cA=_.cz=_.hb=_.cw=_.cv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cr:function cr(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.av=b3
_.aK=b4
_.aZ=b5},
c_:function c_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c0:function c0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c2:function c2(a,b,c,d,e,f,g,h,i,j){var _=this
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
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d4:function d4(){},
di:function di(){},
hY:function hY(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iX:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.iX(i)
l=F.iX(h)
k=F.mR(d,a0,new F.iW(j,F.iX(g),F.iX(f),l,m,c),b)
if(k!=null)a.bG(k)},
mR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.k9()
t=H.b([],[F.br])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.ck(new V.as(p,0,0,1),new V.ai(r,1))
c.$3(o,r,0)
t.push(o.bs(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.ck(new V.as(j,i,h,1),new V.ai(r,m))
c.$3(o,r,n)
t.push(o.bs(d))}}u.d.eZ(a+1,b+1,t)
return u},
cD:function(a,b,c){var u=new F.bi(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.eR(a)
u.eS(b)
u.eT(c)
u.a.a.d.b.push(u)
u.a.a.S()
return u},
k9:function(){var u=new F.hg(),t=new F.i9(u)
t.b=!1
t.c=H.b([],[F.br])
u.a=t
t=new F.hj(u)
t.b=H.b([],[F.bT])
u.b=t
t=new F.hi(u)
t.b=H.b([],[F.bK])
u.c=t
t=new F.hh(u)
t.b=H.b([],[F.bi])
u.d=t
u.e=null
return u},
kk:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.br(),r=new F.ii()
r.b=H.b([],[F.bT])
s.b=r
r=new F.id()
u=[F.bK]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ia()
u=[F.bi]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kN()
s.e=0
r=$.aO()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aN().a)!==0?e:t
s.x=(u&$.aM().a)!==0?b:t
s.y=(u&$.aP().a)!==0?f:t
s.z=(u&$.ba().a)!==0?g:t
s.Q=(u&$.kO().a)!==0?c:t
s.ch=(u&$.bz().a)!==0?i:0
s.cx=(u&$.aL().a)!==0?a:t
return s},
iW:function iW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bi:function bi(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(){},
ho:function ho(){},
bK:function bK(){this.b=this.a=null},
fj:function fj(){},
hS:function hS(){},
bT:function bT(){this.a=null},
hg:function hg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a){this.a=a
this.b=null},
hi:function hi(a){this.a=a
this.b=null},
hj:function hj(a){this.a=a
this.b=null},
br:function br(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
i9:function i9(a){this.a=a
this.c=this.b=null},
ia:function ia(){this.d=this.c=this.b=null},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(){this.c=this.b=null},
ig:function ig(){},
ie:function ie(){},
ih:function ih(){},
fX:function fX(){},
ii:function ii(){this.b=null},
kw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.ly("Test 044"),c=W.jg()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
u=[P.m]
d.cl(H.b(["A test of the Material Lighting shader with fog. ","This test is similar to test 005 except with fog."],u))
d.cl(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(f)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lC(t,!0,!0,!0,!1)
r=new E.aW()
r.a=""
r.b=!0
u=E.aW
q=O.jh(u)
r.y=q
q.b6(r.gfu(),r.gfz())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbQ(0,e)
r.saN(e)
p=F.k9()
F.cg(p,e,e,1,1,1,0,0,1)
F.cg(p,e,e,1,1,0,1,0,3)
F.cg(p,e,e,1,1,0,0,1,2)
F.cg(p,e,e,1,1,-1,0,0,0)
F.cg(p,e,e,1,1,0,-1,0,0)
F.cg(p,e,e,1,1,0,0,-1,3)
p.at()
p.ft(new F.ie(),new F.fX())
r.sbQ(0,p)
q=new U.d3()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.sd6(0)
q.scX(0,0)
q.sd1(0)
o=q.d
if(!(Math.abs(o-0.1)<$.A().a)){q.d=0.1
o=new D.F("deltaYaw",o,0.1)
o.b=!0
q.aq(o)}o=q.e
if(!(Math.abs(o-0.21)<$.A().a)){q.e=0.21
o=new D.F("deltaPitch",o,0.21)
o.b=!0
q.aq(o)}o=q.f
if(!(Math.abs(o-0.32)<$.A().a)){q.f=0.32
o=new D.F("deltaRoll",o,0.32)
o.b=!0
q.aq(o)}r.saN(q)
n=s.f.bF("../resources/CtrlPnlColor.png")
m=new O.cP()
q=O.jh(V.aw)
m.e=q
q.b6(m.gdX(),m.gdZ())
q=new O.ag(m,"emission")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.f=q
q=new O.ag(m,"ambient")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.r=q
q=new O.ag(m,"diffuse")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.x=q
q=new O.ag(m,"invDiffuse")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.y=q
q=new O.fy(m,"specular")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
q.ch=100
m.z=q
q=new O.fu(m,"bump")
q.c=new A.Q(!1,!1,!1)
m.Q=q
m.ch=null
q=new O.ag(m,"reflect")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.cx=q
q=new O.fx(m,"refract")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
q.ch=1
m.cy=q
q=new O.ft(m,"alpha")
q.c=new A.Q(!1,!1,!1)
q.f=1
m.db=q
q=new D.cM()
q.bV(D.W)
q.e=H.b([],[D.ev])
q.f=H.b([],[D.bf])
q.r=H.b([],[D.h4])
q.x=H.b([],[D.hr])
q.z=q.y=null
q.bP(q.gdV(),q.gew(),q.gey())
m.dx=q
o=new O.fw(m)
o.b=new V.as(0,0,0,0)
o.c=1
o.d=10
o.e=!1
m.dy=o
o=q.y
q=o==null?q.y=D.a4():o
q.p(0,m.geL())
q=m.dx
o=q.z
q=o==null?q.z=D.a4():o
q.p(0,m.gaT())
m.fr=null
q=m.dy
l=new V.as(V.ac(1),V.ac(1),V.ac(1),V.ac(1))
if(!q.b.n(0,l)){q.sbt(0,!0)
q.b=l
q.a.N(e)}q=m.dy
if(q.c!==4){q.sbt(0,!0)
q.c=4
q.a.N(e)}q=m.dy
if(q.d!==5){q.sbt(0,!0)
q.d=5
q.a.N(e)}q=m.dx
k=V.jx()
o=U.jT(V.k0(V.k5(),k,new V.z(1,-1,-3)))
l=new V.P(1,1,1)
j=new D.bf()
j.c=new V.P(1,1,1)
j.a=V.lF()
j.d=V.jx()
j.e=V.lE()
i=j.b
j.b=o
o.gw().p(0,j.gdv())
o=new D.F("mover",i,j.b)
o.b=!0
j.ac(o)
if(!j.c.n(0,l)){i=j.c
j.c=l
o=new D.F("color",i,l)
o.b=!0
j.ac(o)}q.p(0,j)
m.f.sb2(s.f.bF("../resources/CtrlPnlEmission.png"))
m.r.saG(0,new V.P(V.ac(0.2),V.ac(0.2),V.ac(0.2)))
m.x.saG(0,new V.P(V.ac(0.8),V.ac(0.8),V.ac(0.8)))
m.r.sb2(n)
m.x.sb2(n)
m.z.sb2(s.f.bF("../resources/CtrlPnlSpecular.png"))
q=m.z
q.bk(new A.Q(!0,q.c.b,!1))
q.cd(10)
q=new M.cC()
q.a=!0
u=O.jh(u)
q.e=u
u.b6(q.ge2(),q.ge4())
q.y=q.x=q.r=q.f=null
h=X.l9(e)
g=new X.cX()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saN(e)
u=g.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){g.c=1.0471975511965976
u=new D.F("fov",u,1.0471975511965976)
u.b=!0
g.ao(u)}u=g.d
if(!(Math.abs(u-0.1)<$.A().a)){g.d=0.1
u=new D.F("near",u,0.1)
u.b=!0
g.ao(u)}u=g.e
if(!(Math.abs(u-2000)<$.A().a)){g.e=2000
u=new D.F("far",u,2000)
u.b=!0
g.ao(u)}u=q.b
if(u!==g){if(u!=null)u.gw().G(0,q.ga8())
i=q.b
q.b=g
g.gw().p(0,q.ga8())
u=new D.F("camera",i,q.b)
u.b=!0
q.ad(u)}u=q.c
if(u!==h){if(u!=null)u.gw().G(0,q.ga8())
i=q.c
q.c=h
h.gw().p(0,q.ga8())
u=new D.F("target",i,q.c)
u.b=!0
q.ad(u)}q.sd3(e)
q.sd3(m)
q.e.p(0,r)
q.b.saN(U.jT(V.ax(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==q){if(u!=null)u.gw().G(0,s.gbW())
s.d=q
q.gw().p(0,s.gbW())
s.bX()}u=s.Q
if(u==null)u=s.Q=D.a4()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.V]}]):q
u.push(new F.j8(d,m))
V.mO(s)},
j8:function j8(a,b){this.a=a
this.b=b}},T={dc:function dc(){},hE:function hE(){},hF:function hF(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hG:function hG(a){var _=this
_.a=a
_.e=_.d=_.b=null},hH:function hH(a,b,c,d,e,f,g){var _=this
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
H.jo.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gK:function(a){return H.bU(a)},
i:function(a){return"Instance of '"+H.d(H.bV(a))+"'"}}
J.fd.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iap:1}
J.cJ.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.cK.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.h1.prototype={}
J.bq.prototype={}
J.b_.prototype={
i:function(a){var u=a[$.kC()]
if(u==null)return this.dk(a)
return"JavaScript function for "+H.d(J.a_(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aY.prototype={
bJ:function(a,b){if(!!a.fixed$length)H.t(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.d0(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.t(P.v("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
Z:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.k)(b),++t)a.push(b[t])},
C:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aT(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fq:function(a){return this.k(a,"")},
fm:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aT(a))}throw H.c(H.fb())},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dg:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aB(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aB(c,b,u,"end",null))
if(b===c)return H.b([],[H.ad(a,0)])
return H.b(a.slice(b,c),[H.ad(a,0)])},
gfl:function(a){if(a.length>0)return a[0]
throw H.c(H.fb())},
gb0:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fb())},
cm:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aT(a))}return!1},
aC:function(a,b){if(!!a.immutable$list)H.t(P.v("sort"))
H.lB(a,b==null?J.lT():b)},
df:function(a){return this.aC(a,null)},
F:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.jl(a,"[","]")},
gL:function(a){return new J.a2(a,a.length)},
gK:function(a){return H.bU(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jd(b,u,null))
if(b<0)throw H.c(P.aB(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bx(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bx(a,b))
a[b]=c},
$ip:1,
$ij:1}
J.jn.prototype={}
J.a2.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.k(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bJ.prototype={
au:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aJ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb_(b)
if(this.gb_(a)===u)return 0
if(this.gb_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb_:function(a){return a===0?1/a<0:a<0},
fX:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bC:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
d4:function(a,b){var u
if(b>20)throw H.c(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb_(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d9:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dm:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ce(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.ce(a,b)},
ce:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.eX(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eX:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia6:1}
J.cI.prototype={$iw:1}
J.cH.prototype={}
J.aZ.prototype={
br:function(a,b){if(b<0)throw H.c(H.bx(a,b))
if(b>=a.length)H.t(H.bx(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.c(H.bx(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.jd(b,null,null))
return a+b},
b7:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aR:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d0(b,null))
if(b>c)throw H.c(P.d0(b,null))
if(c>a.length)throw H.c(P.d0(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.aR(a,b,null)},
h_:function(a){return a.toLowerCase()},
R:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a1:function(a,b){var u=b-a.length
if(u<=0)return a
return this.R(" ",u)+a},
au:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aJ(b))
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
$im:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.br(this.a,b)},
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$aj:function(){return[P.w]}}
H.p.prototype={}
H.cN.prototype={
gL:function(a){return new H.b1(this,this.gl(this))},
b5:function(a,b){return this.dj(0,b)}}
H.b1.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.ei(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aT(s))
u=t.c
if(typeof q!=="number")return H.Z(q)
if(u>=q){t.d=null
return!1}t.d=r.A(s,u);++t.c
return!0}}
H.bN.prototype={
gL:function(a){return new H.cO(J.aQ(this.a),this.b)},
gl:function(a){return J.aR(this.a)},
A:function(a,b){return this.b.$1(J.el(this.a,b))},
$aj:function(a,b){return[b]}}
H.eP.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cO.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.fr.prototype={
gl:function(a){return J.aR(this.a)},
A:function(a,b){return this.b.$1(J.el(this.a,b))},
$ap:function(a,b){return[b]},
$acN:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.c5.prototype={
gL:function(a){return new H.io(J.aQ(this.a),this.b)}}
H.io.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.cE.prototype={}
H.i1.prototype={
m:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.dj.prototype={}
H.hQ.prototype={
a0:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fg.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.i0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jc.prototype={
$1:function(a){if(!!J.N(a).$ibg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dW.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cl(t==null?"unknown":t)+"'"},
gh3:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hB.prototype={}
H.ht.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cl(u)+"'"}}
H.bA.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.bU(this.a)
else u=typeof t!=="object"?J.em(t):H.bU(t)
return(u^H.bU(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bV(u))+"'")}}
H.ey.prototype={
i:function(a){return this.a}}
H.hd.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.E.prototype={
gl:function(a){return this.a},
gW:function(a){return new H.bl(this,[H.ad(this,0)])},
gh2:function(a){var u=this,t=H.ad(u,0)
return H.lh(new H.bl(u,[t]),new H.ff(u),t,H.ad(u,1))},
f6:function(a,b){var u=this.b
if(u==null)return!1
return this.dM(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aU(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aU(r,b)
s=t==null?null:t.b
return s}else return q.fp(b)},
fp:function(a){var u,t,s=this.d
if(s==null)return
u=this.c7(s,J.em(a)&0x3ffffff)
t=this.cM(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.c_(u==null?o.b=o.bf():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c_(t==null?o.c=o.bf():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bf()
r=J.em(b)&0x3ffffff
q=o.c7(s,r)
if(q==null)o.bl(s,r,[o.bg(b,c)])
else{p=o.cM(q,b)
if(p>=0)q[p].b=c
else q.push(o.bg(b,c))}}},
C:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aT(u))
t=t.c}},
c_:function(a,b,c){var u=this.aU(a,b)
if(u==null)this.bl(a,b,this.bg(b,c))
else u.b=c},
dT:function(){this.r=this.r+1&67108863},
bg:function(a,b){var u,t=this,s=new H.fk(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dT()
return s},
cM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.k_(this)},
aU:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
bl:function(a,b,c){a[b]=c},
dQ:function(a,b){delete a[b]},
dM:function(a,b){return this.aU(a,b)!=null},
bf:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bl(t,u,t)
this.dQ(t,u)
return t}}
H.ff.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ad(u,1),args:[H.ad(u,0)]}}}
H.fk.prototype={}
H.bl.prototype={
gl:function(a){return this.a.a},
gL:function(a){var u=this.a,t=new H.fl(u,u.r)
t.c=u.e
return t}}
H.fl.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j4.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.j5.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j6.prototype={
$1:function(a){return this.a(a)}}
H.fe.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bS.prototype={}
H.cR.prototype={
gl:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bR.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.J]},
$au:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cS.prototype={
m:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]}}
H.fP.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fQ.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fR.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fS.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fT.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.cT.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fU.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
H.cb.prototype={}
P.iq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ip.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.e1.prototype={
dB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bw(new P.iS(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bw(new P.iR(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$ide:1}
P.iS.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iR.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dm(u,q)}s.c=r
t.d.$1(s)}}
P.bs.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bt.prototype={
gB:function(a){var u=this.c
if(u==null)return this.b
return u.gB(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
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
else{r=J.aQ(u)
if(!!r.$ibt){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iO.prototype={
gL:function(a){return new P.bt(this.a())}}
P.dm.prototype={}
P.d9.prototype={}
P.hw.prototype={}
P.de.prototype={}
P.iV.prototype={}
P.j_.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cW():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iE.prototype={
fS:function(a){var u,t,s,r=null
try{if(C.e===$.ab){a.$0()
return}P.mh(r,r,this,a)}catch(s){u=H.aq(s)
t=H.jF(s)
P.kq(r,r,this,u,t)}},
fT:function(a,b){var u,t,s,r=null
try{if(C.e===$.ab){a.$1(b)
return}P.mi(r,r,this,a,b)}catch(s){u=H.aq(s)
t=H.jF(s)
P.kq(r,r,this,u,t)}},
fU:function(a,b){return this.fT(a,b,null)},
f2:function(a){return new P.iF(this,a)},
cq:function(a,b){return new P.iG(this,a,b)}}
P.iF.prototype={
$0:function(){return this.a.fS(this.b)}}
P.iG.prototype={
$1:function(a){return this.a.fU(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iB.prototype={
gL:function(a){var u=new P.dD(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
F:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dK(b)
return t}},
dK:function(a){var u=this.d
if(u==null)return!1
return this.bd(this.c6(u,a),a)>=0},
p:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c0(u==null?s.b=P.jz():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c0(t==null?s.c=P.jz():t,b)}else return s.dE(0,b)},
dE:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jz()
u=s.c2(b)
t=r[u]
if(t==null)r[u]=[s.ba(b)]
else{if(s.bd(t,b)>=0)return!1
t.push(s.ba(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eH(this.c,b)
else return this.eG(0,b)},
eG:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c6(r,b)
t=s.bd(u,b)
if(t<0)return!1
s.cg(u.splice(t,1)[0])
return!0},
c0:function(a,b){if(a[b]!=null)return!1
a[b]=this.ba(b)
return!0},
eH:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cg(u)
delete a[b]
return!0},
c1:function(){this.r=1073741823&this.r+1},
ba:function(a){var u,t=this,s=new P.iC(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c1()
return s},
cg:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c1()},
c2:function(a){return J.em(a)&1073741823},
c6:function(a,b){return a[this.c2(b)]},
bd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.iC.prototype={}
P.dD.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fa.prototype={}
P.fm.prototype={$ip:1,$ij:1}
P.u.prototype={
gL:function(a){return new H.b1(a,this.gl(a))},
A:function(a,b){return this.h(a,b)},
fZ:function(a,b){var u,t,s=this,r=H.b([],[H.mA(s,a,"u",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.Z(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
fY:function(a){return this.fZ(a,!0)},
i:function(a){return P.jl(a,"[","]")}}
P.fp.prototype={}
P.fq.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.S.prototype={
C:function(a,b){var u,t
for(u=J.aQ(this.gW(a));u.t();){t=u.gB(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aR(this.gW(a))},
i:function(a){return P.k_(a)}}
P.iI.prototype={
Z:function(a,b){var u
for(u=J.aQ(b);u.t();)this.p(0,u.gB(u))},
i:function(a){return P.jl(this,"{","}")},
A:function(a,b){var u,t,s
P.k7(b,"index")
for(u=P.lO(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
$ip:1,
$ij:1}
P.dE.prototype={}
P.eA.prototype={}
P.eC.prototype={}
P.eR.prototype={}
P.f8.prototype={
i:function(a){return this.a}}
P.f7.prototype={
dN:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ak("")
if(r>b)q.a+=C.b.aR(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kX(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i4.prototype={}
P.i5.prototype={
f7:function(a){var u,t,s,r=P.jt(0,null,a.length)
if(typeof r!=="number")return r.T()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iT(t)
if(s.dS(a,0,r)!==r)s.ci(C.b.br(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lR(0,s.b,t.length)))}}
P.iT.prototype={
ci:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dS:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.br(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aD(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ci(r,C.b.aD(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ap.prototype={}
P.aU.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a&&!0},
au:function(a,b){return C.d.au(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.d.aW(u,30))&1073741823},
i:function(a){var u=this,t=P.l5(H.lr(u)),s=P.cy(H.lp(u)),r=P.cy(H.ll(u)),q=P.cy(H.lm(u)),p=P.cy(H.lo(u)),o=P.cy(H.lq(u)),n=P.l6(H.ln(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gK:function(a){return C.d.gK(this.a)},
au:function(a,b){return C.d.au(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eO(),q=this.a
if(q<0)return"-"+new P.aV(0-q).i(0)
u=r.$1(C.d.U(q,6e7)%60)
t=r.$1(C.d.U(q,1e6)%60)
s=new P.eN().$1(q%1e6)
return""+C.d.U(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.eN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bg.prototype={}
P.cW.prototype={
i:function(a){return"Throw of null."}}
P.a7.prototype={
gbc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbb:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbc()+o+u
if(!q.a)return t
s=q.gbb()
r=P.jk(q.b)
return t+s+": "+r}}
P.bn.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.f9.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t=this.b
if(typeof t!=="number")return t.al()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.i2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i_.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bX.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jk(u)+"."}}
P.h0.prototype={
i:function(a){return"Out of Memory"},
$ibg:1}
P.d7.prototype={
i:function(a){return"Stack Overflow"},
$ibg:1}
P.eH.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dv.prototype={
i:function(a){return"Exception: "+this.a}}
P.f1.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aR(s,0,75)+"...":s
return t+"\n"+r}}
P.f3.prototype={}
P.w.prototype={}
P.j.prototype={
b5:function(a,b){return new H.c5(this,b,[H.jE(this,"j",0)])},
gl:function(a){var u,t=this.gL(this)
for(u=0;t.t();)++u
return u},
gam:function(a){var u,t=this.gL(this)
if(!t.t())throw H.c(H.fb())
u=t.gB(t)
if(t.t())throw H.c(H.lb())
return u},
A:function(a,b){var u,t,s
P.k7(b,"index")
for(u=this.gL(this),t=0;u.t();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
i:function(a){return P.la(this,"(",")")}}
P.fc.prototype={}
P.a9.prototype={$ip:1,$ij:1}
P.bM.prototype={}
P.b3.prototype={
gK:function(a){return P.T.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
n:function(a,b){return this===b},
gK:function(a){return H.bU(this)},
i:function(a){return"Instance of '"+H.d(H.bV(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.ak.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.en.prototype={
gl:function(a){return a.length}}
W.eo.prototype={
i:function(a){return String(a)}}
W.ep.prototype={
i:function(a){return String(a)}}
W.cs.prototype={}
W.bc.prototype={$ibc:1}
W.bd.prototype={
bN:function(a,b,c){if(c!=null)return a.getContext(b,P.mr(c))
return a.getContext(b)},
d8:function(a,b){return this.bN(a,b,null)},
$ibd:1}
W.aS.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bD.prototype={
gl:function(a){return a.length}}
W.eE.prototype={}
W.a3.prototype={}
W.af.prototype={}
W.eF.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.a8.prototype={$ia8:1}
W.eK.prototype={
i:function(a){return String(a)}}
W.cA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.aa,P.a6]]},
$ix:1,
$ax:function(){return[[P.aa,P.a6]]},
$au:function(){return[[P.aa,P.a6]]},
$ij:1,
$aj:function(){return[[P.aa,P.a6]]}}
W.cB.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaz(a))+" x "+H.d(this.gax(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$iaa&&a.left===u.gcP(b)&&a.top===u.gd5(b)&&this.gaz(a)===u.gaz(b)&&this.gax(a)===u.gax(b)},
gK:function(a){return W.km(C.c.gK(a.left),C.c.gK(a.top),C.c.gK(this.gaz(a)),C.c.gK(this.gax(a)))},
gax:function(a){return a.height},
gcP:function(a){return a.left},
gd5:function(a){return a.top},
gaz:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.a6]}}
W.eL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.m]},
$ix:1,
$ax:function(){return[P.m]},
$au:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]}}
W.eM.prototype={
gl:function(a){return a.length}}
W.iu.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
p:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var u=this.fY(this)
return new J.a2(u,u.length)},
$ap:function(){return[W.L]},
$au:function(){return[W.L]},
$aj:function(){return[W.L]}}
W.L.prototype={
gf1:function(a){return new W.iw(a)},
gcr:function(a){return new W.iu(a,a.children)},
i:function(a){return a.localName},
a_:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jW
if(u==null){u=H.b([],[W.az])
t=new W.cV(u)
u.push(W.kl(null))
u.push(W.kn())
$.jW=t
d=t}else d=u
u=$.jV
if(u==null){u=new W.e7(d)
$.jV=u
c=u}else{u.a=d
c=u}}if($.at==null){u=document
t=u.implementation.createHTMLDocument("")
$.at=t
$.jj=t.createRange()
s=$.at.createElement("base")
s.href=u.baseURI
$.at.head.appendChild(s)}u=$.at
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.at
if(!!this.$ibc)r=u.body
else{r=u.createElement(a.tagName)
$.at.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.L,a.tagName)){$.jj.selectNodeContents(r)
q=$.jj.createContextualFragment(b)}else{r.innerHTML=b
q=$.at.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.at.body
if(r==null?u!=null:r!==u)J.jO(r)
c.bO(q)
document.adoptNode(q)
return q},
f9:function(a,b,c){return this.a_(a,b,c,null)},
dc:function(a,b){a.textContent=null
a.appendChild(this.a_(a,b,null,null))},
$iL:1,
gd2:function(a){return a.tagName}}
W.eQ.prototype={
$1:function(a){return!!J.N(a).$iL}}
W.h.prototype={$ih:1}
W.e.prototype={
eY:function(a,b,c,d){if(c!=null)this.dF(a,b,c,!1)},
dF:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)}}
W.au.prototype={$iau:1}
W.eW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.au]},
$ix:1,
$ax:function(){return[W.au]},
$au:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.eX.prototype={
gl:function(a){return a.length}}
W.f0.prototype={
gl:function(a){return a.length}}
W.av.prototype={$iav:1}
W.f6.prototype={
gl:function(a){return a.length}}
W.bF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$ix:1,
$ax:function(){return[W.B]},
$au:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.aX.prototype={$iaX:1,
gcs:function(a){return a.data}}
W.bG.prototype={$ibG:1}
W.bk.prototype={$ibk:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.fH.prototype={
gl:function(a){return a.length}}
W.fI.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.C(a,new W.fJ(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
W.fJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fK.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.C(a,new W.fL(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
W.fL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.fM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ay]},
$ix:1,
$ax:function(){return[W.ay]},
$au:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]}}
W.ah.prototype={$iah:1}
W.U.prototype={
gam:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ka("No elements"))
if(t>1)throw H.c(P.ka("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gL:function(a){var u=this.a.childNodes
return new W.cF(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.B]},
$au:function(){return[W.B]},
$aj:function(){return[W.B]}}
W.B.prototype={
fM:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
fQ:function(a,b){var u,t
try{u=a.parentNode
J.kS(u,b,a)}catch(t){H.aq(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.di(a):u},
eJ:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$ix:1,
$ax:function(){return[W.B]},
$au:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.aA.prototype={$iaA:1,
gl:function(a){return a.length}}
W.h3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aA]},
$ix:1,
$ax:function(){return[W.aA]},
$au:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.hb.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.C(a,new W.hc(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
gl:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.hp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aC]},
$ix:1,
$ax:function(){return[W.aC]},
$au:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.hq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aD]},
$ix:1,
$ax:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gl:function(a){return a.length}}
W.hu.prototype={
h:function(a,b){return a.getItem(b)},
C:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gW:function(a){var u=H.b([],[P.m])
this.C(a,new W.hv(u))
return u},
gl:function(a){return a.length},
$aS:function(){return[P.m,P.m]}}
W.hv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.al.prototype={$ial:1}
W.da.prototype={
a_:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
u=W.l7("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.U(t).Z(0,new W.U(u))
return t}}
W.hy.prototype={
a_:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gam(u)
s.toString
u=new W.U(s)
r=u.gam(u)
t.toString
r.toString
new W.U(t).Z(0,new W.U(r))
return t}}
W.hz.prototype={
a_:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gam(u)
t.toString
s.toString
new W.U(t).Z(0,new W.U(s))
return t}}
W.bY.prototype={$ibY:1}
W.aF.prototype={$iaF:1}
W.am.prototype={$iam:1}
W.hC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.am]},
$ix:1,
$ax:function(){return[W.am]},
$au:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]}}
W.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$ix:1,
$ax:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]}}
W.hJ.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bo.prototype={$ibo:1}
W.hN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aG]},
$ix:1,
$ax:function(){return[W.aG]},
$au:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.hO.prototype={
gl:function(a){return a.length}}
W.b6.prototype={}
W.i3.prototype={
i:function(a){return String(a)}}
W.il.prototype={
gl:function(a){return a.length}}
W.b8.prototype={
gfc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib8:1}
W.c6.prototype={
eK:function(a,b){return a.requestAnimationFrame(H.bw(b,1))},
dR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$ix:1,
$ax:function(){return[W.D]},
$au:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.dq.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$iaa&&a.left===u.gcP(b)&&a.top===u.gd5(b)&&a.width===u.gaz(b)&&a.height===u.gax(b)},
gK:function(a){return W.km(C.c.gK(a.left),C.c.gK(a.top),C.c.gK(a.width),C.c.gK(a.height))},
gax:function(a){return a.height},
gaz:function(a){return a.width}}
W.iz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.av]},
$ix:1,
$ax:function(){return[W.av]},
$au:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]}}
W.dJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$ix:1,
$ax:function(){return[W.B]},
$au:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]}}
W.iL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aE]},
$ix:1,
$ax:function(){return[W.aE]},
$au:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.iM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.al]},
$ix:1,
$ax:function(){return[W.al]},
$au:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]}}
W.it.prototype={
C:function(a,b){var u,t,s,r,q
for(u=this.gW(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.k)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gW:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aS:function(){return[P.m,P.m]}}
W.iw.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gW(this).length}}
W.ix.prototype={}
W.iy.prototype={
$1:function(a){return this.a.$1(a)}}
W.c7.prototype={
du:function(a){var u
if($.dy.a===0){for(u=0;u<262;++u)$.dy.m(0,C.K[u],W.mC())
for(u=0;u<12;++u)$.dy.m(0,C.k[u],W.mD())}},
as:function(a){return $.kQ().F(0,W.bE(a))},
a9:function(a,b,c){var u=$.dy.h(0,H.d(W.bE(a))+"::"+b)
if(u==null)u=$.dy.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaz:1}
W.G.prototype={
gL:function(a){return new W.cF(a,this.gl(a))}}
W.cV.prototype={
as:function(a){return C.a.cm(this.a,new W.fW(a))},
a9:function(a,b,c){return C.a.cm(this.a,new W.fV(a,b,c))},
$iaz:1}
W.fW.prototype={
$1:function(a){return a.as(this.a)}}
W.fV.prototype={
$1:function(a){return a.a9(this.a,this.b,this.c)}}
W.dR.prototype={
dA:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.b5(0,new W.iJ())
t=b.b5(0,new W.iK())
this.b.Z(0,u)
s=this.c
s.Z(0,C.M)
s.Z(0,t)},
as:function(a){return this.a.F(0,W.bE(a))},
a9:function(a,b,c){var u=this,t=W.bE(a),s=u.c
if(s.F(0,H.d(t)+"::"+b))return u.d.f_(c)
else if(s.F(0,"*::"+b))return u.d.f_(c)
else{s=u.b
if(s.F(0,H.d(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.d(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1},
$iaz:1}
W.iJ.prototype={
$1:function(a){return!C.a.F(C.k,a)}}
W.iK.prototype={
$1:function(a){return C.a.F(C.k,a)}}
W.iP.prototype={
a9:function(a,b,c){if(this.dl(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.iQ.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iN.prototype={
as:function(a){var u=J.N(a)
if(!!u.$ibW)return!1
u=!!u.$ii
if(u&&W.bE(a)==="foreignObject")return!1
if(u)return!0
return!1},
a9:function(a,b,c){if(b==="is"||C.b.b7(b,"on"))return!1
return this.as(a)},
$iaz:1}
W.cF.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.co(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.az.prototype={}
W.iH.prototype={}
W.e7.prototype={
bO:function(a){new W.iU(this).$2(a,null)},
aF:function(a,b){if(b==null)J.jO(a)
else b.removeChild(a)},
eP:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kV(a)
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
try{t=J.a_(a)}catch(r){H.aq(r)}try{s=W.bE(a)
this.eO(a,b,p,t,s,o,n)}catch(r){if(H.aq(r) instanceof P.a7)throw r
else{this.aF(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aF(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.as(a)){p.aF(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a9(a,"is",g)){p.aF(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gW(f)
t=H.b(u.slice(0),[H.ad(u,0)])
for(s=f.gW(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a9(a,J.kY(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ibY)p.bO(a.content)}}
W.iU.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.eP(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aF(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aq(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dp.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.cc.prototype={}
W.cd.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dX.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.ce.prototype={}
W.cf.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
P.e6.prototype={$iaX:1,
gcs:function(a){return this.a}}
P.j0.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eY.prototype={
gaV:function(){var u=this.b,t=H.jE(u,"u",0)
return new H.bN(new H.c5(u,new P.eZ(),[t]),new P.f_(),[t,W.L])},
m:function(a,b,c){var u=this.gaV()
J.kW(u.b.$1(J.el(u.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aR(this.gaV().a)},
h:function(a,b){var u=this.gaV()
return u.b.$1(J.el(u.a,b))},
gL:function(a){var u=P.jq(this.gaV(),!1,W.L)
return new J.a2(u,u.length)},
$ap:function(){return[W.L]},
$au:function(){return[W.L]},
$aj:function(){return[W.L]}}
P.eZ.prototype={
$1:function(a){return!!J.N(a).$iL}}
P.f_.prototype={
$1:function(a){return H.n(a,"$iL")}}
P.iD.prototype={}
P.aa.prototype={}
P.b0.prototype={$ib0:1}
P.fi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b0]},
$au:function(){return[P.b0]},
$ij:1,
$aj:function(){return[P.b0]}}
P.b4.prototype={$ib4:1}
P.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b4]},
$au:function(){return[P.b4]},
$ij:1,
$aj:function(){return[P.b4]}}
P.h5.prototype={
gl:function(a){return a.length}}
P.bW.prototype={$ibW:1}
P.hx.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.m]},
$au:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]}}
P.i.prototype={
gcr:function(a){return new P.eY(a,new W.U(a))},
a_:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.az])
p.push(W.kl(null))
p.push(W.kn())
p.push(new W.iN())
c=new W.e7(new W.cV(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).f9(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.U(s)
q=p.gam(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.b5.prototype={$ib5:1}
P.hP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b5]},
$au:function(){return[P.b5]},
$ij:1,
$aj:function(){return[P.b5]}}
P.dB.prototype={}
P.dC.prototype={}
P.dM.prototype={}
P.dN.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.er.prototype={
gl:function(a){return a.length}}
P.es.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aK(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.C(a,new P.et(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
P.et.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eu.prototype={
gl:function(a){return a.length}}
P.bb.prototype={}
P.h_.prototype={
gl:function(a){return a.length}}
P.dn.prototype={}
P.d2.prototype={
fV:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaX)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.ms(g))
return}if(!!t.$ibG)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kZ("Incorrect number or type of arguments"))}}
P.hs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.aK(a.item(b))},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bM,,,]]},
$au:function(){return[[P.bM,,,]]},
$ij:1,
$aj:function(){return[[P.bM,,,]]}}
P.dU.prototype={}
P.dV.prototype={}
K.ar.prototype={
ah:function(a,b){return!0},
i:function(a){return"all"}}
K.cG.prototype={
ah:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)if(u[s].ah(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.k)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b2.prototype={}
K.X.prototype={
ah:function(a,b){return!this.dh(0,b)},
i:function(a){return"!["+this.bS(0)+"]"}}
K.h6.prototype={
ah:function(a,b){if(typeof b!=="number")return H.Z(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.js(this.a),t=H.js(this.b)
return u+".."+t}}
K.hf.prototype={
dr:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.E([u,P.ap])
for(s=new H.b1(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.jq(new H.bl(t,[u]),!0,u)
C.a.df(r)
this.a=r},
ah:function(a,b){return C.a.F(this.a,b)},
i:function(a){return P.ju(this.a)}}
L.d8.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dh(this.a.j(0,b))
r.a=H.b([],[K.b2])
r.c=!1
this.c.push(r)
return r},
fk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
if(r.ah(0,a))return r}return},
i:function(a){return this.b},
cf:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.F(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bl(n,[H.ad(n,0)]),n=n.gL(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.F(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.k)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.df.prototype={
i:function(a){var u=H.jK(this.b,"\n","\\n"),t=H.jK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dg.prototype={
aj:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.k)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hK.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d8(this,b)
u.c=H.b([],[L.dh])
this.a.m(0,b,u)}return u},
J:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dg(a)
u=P.m
t.c=new H.E([u,u])
this.b.m(0,a,t)}return t},
bM:function(a){return this.h0(a)},
h0:function(a){var u=this
return P.lV(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$bM(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bJ(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fk(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ju(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.v("removeRange"))
P.jt(0,m,d.length)
d.splice(0,m-0)
C.a.Z(c,d)
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
if(g.d!=null){j=P.ju(e)
i=g.d
h=i.c.h(0,j)
p=new L.df(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.F(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lM()
case 1:return P.lN(q)}}},L.df)},
i:function(a){var u,t=new P.ak(""),s=this.d
if(s!=null)t.a=s.cf()+"\n"
for(s=this.a,s=s.gh2(s),s=new H.cO(J.aQ(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cf()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dh.prototype={
i:function(a){return this.b.b+": "+this.bS(0)}}
O.be.prototype={
bV:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bP:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.bP(a,null,b)},
ev:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dU:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.a2(u,u.length)},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
p:function(a,b){var u,t,s=this,r=[H.jE(s,"be",0)]
if(s.ev(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dU(t,H.b([b],r))}},
$ij:1}
O.bP.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.a4():u},
an:function(){var u=this.b
if(u!=null)u.O(null)},
gP:function(a){var u=this.a
if(u.length>0)return C.a.gb0(u)
else return V.jr()},
cZ:function(a){var u=this.a
if(a==null)u.push(V.jr())
else u.push(a)
this.an()},
bI:function(){var u=this.a
if(u.length>0){u.pop()
this.an()}}}
E.ew.prototype={}
E.aW.prototype={
sbQ:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().G(0,s.gcU())
u=s.c
if(u!=null)u.gw().p(0,s.gcU())
t=new D.F("shape",r,s.c)
t.b=!0
s.ai(t)}},
saN:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gw().G(0,s.gcS())
if(a!=null)a.gw().p(0,s.gcS())
s.r=a
t=new D.F("mover",u,a)
t.b=!0
s.ai(t)}},
b4:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sd6(m.a+m.d*b.y)
m.scX(0,m.b+m.e*b.y)
m.sd1(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.ax(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.R(0,V.ax(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.R(0,V.ax(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ab(0)}q=m.x}else q=null
if(!J.K(q,n.x)){p=n.x
n.x=q
o=new D.F("matrix",p,q)
o.b=!0
n.ai(o)}for(m=n.y.a,m=new J.a2(m,m.length);m.t();)m.d.b4(0,b)},
ay:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gP(s))
else s.a.push(r.R(0,s.gP(s)))
s.an()
a.d_(t.f)
s=a.dy
u=(s&&C.a).gb0(s)
if(u!=null&&t.d!=null)u.fP(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.t();)s.d.ay(a)
a.cY()
a.dx.bI()},
ai:function(a){var u=this.z
if(u!=null)u.O(a)},
S:function(){return this.ai(null)},
cV:function(a){this.e=null
this.ai(a)},
fC:function(){return this.cV(null)},
cT:function(a){this.ai(a)},
fB:function(){return this.cT(null)},
cR:function(a){this.ai(a)},
fw:function(){return this.cR(null)},
fv:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcQ(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.k)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bh()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.S()},
fA:function(a,b){var u,t
for(u=b.gL(b),t=this.gcQ();u.t();)u.gB(u).gw().G(0,t)
this.S()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h7.prototype={
dq:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aU(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bP()
t=[V.aw]
u.a=H.b([],t)
u.gw().p(0,new E.h8(s))
s.cy=u
u=new O.bP()
u.a=H.b([],t)
u.gw().p(0,new E.h9(s))
s.db=u
u=new O.bP()
u.a=H.b([],t)
u.gw().p(0,new E.ha(s))
s.dx=u
u=H.b([],[O.db])
s.dy=u
u.push(null)
s.fr=new H.E([P.m,A.d4])},
gfL:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gP(s)
u=t.db
u=t.z=s.R(0,u.gP(u))
s=u}return s},
d_:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb0(u):a)},
cY:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.h8.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h9.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ha.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dd.prototype={
bY:function(a){this.d0()},
bX:function(){return this.bY(null)},
gfn:function(){var u,t=this,s=Date.now(),r=C.d.U(P.jU(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aU(s,!1)
return u/r},
cb:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.R()
if(typeof r!=="number")return H.Z(r)
u=C.c.bC(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.R()
t=C.c.bC(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kd(C.h,s.gfR())}},
d0:function(){if(!this.cx){this.cx=!0
var u=window
C.v.dR(u)
C.v.eK(u,W.kr(new E.hI(this),P.a6))}},
fO:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cb()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aU(r,!1)
s.y=P.jU(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.an()
r=s.db
C.a.sl(r.a,0)
r.an()
r=s.dx
C.a.sl(r.a,0)
r.an()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.ay(p.e)}s=p.Q
if(s!=null)s.O(null)}catch(q){u=H.aq(q)
t=H.jF(q)
P.jJ("Error: "+H.d(u))
P.jJ("Stack: "+H.d(t))
throw H.c(u)}}}
E.hI.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fO()}}}
Z.dl.prototype={}
Z.ct.prototype={
bn:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aq(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.im.prototype={}
Z.cu.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bn:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bn(a)},
h1:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ay:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a_(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.bj.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bV(this.c))+"'")+"]"}}
Z.aI.prototype={
gbR:function(a){var u=this.a,t=(u&$.aO().a)!==0?3:0
if((u&$.aN().a)!==0)t+=3
if((u&$.aM().a)!==0)t+=3
if((u&$.aP().a)!==0)t+=2
if((u&$.ba().a)!==0)t+=3
if((u&$.cm().a)!==0)t+=3
if((u&$.cn().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.aL().a)!==0?t+4:t},
f0:function(a){var u,t=$.aO(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0)if(u===a)return t
return $.kP()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aO().a)!==0)u.push("Pos")
if((t&$.aN().a)!==0)u.push("Norm")
if((t&$.aM().a)!==0)u.push("Binm")
if((t&$.aP().a)!==0)u.push("Txt2D")
if((t&$.ba().a)!==0)u.push("TxtCube")
if((t&$.cm().a)!==0)u.push("Clr3")
if((t&$.cn().a)!==0)u.push("Clr4")
if((t&$.bz().a)!==0)u.push("Weight")
if((t&$.aL().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ez.prototype={}
D.bh.prototype={
p:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
G:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.F(s,b)
if(s===!0){s=t.a
u=(s&&C.a).G(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.F(s,b)
if(s===!0){s=t.b
u=(s&&C.a).G(s,b)||u}return u},
O:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.V()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.C(P.jq(u,!0,{func:1,ret:-1,args:[D.V]}),new D.eT(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.V]}])
C.a.C(u,new D.eU(q))}return!0},
fi:function(){return this.O(null)},
ab:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.O(u)}}}}
D.eT.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eU.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.bH.prototype={}
D.bI.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cv.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cv))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cL.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fh.prototype={
fH:function(a){this.d.p(0,a.a)
return!1},
fD:function(a){this.d.G(0,a.a)
return!1}}
X.fo.prototype={
bH:function(a,b){this.r=a.a
return!1},
aP:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.da()
if(typeof u!=="number")return u.a2()
this.r=(u&~t)>>>0
return!1},
aO:function(a,b){return!1},
fI:function(a){return!1},
ej:function(a,b,c){return}}
X.bQ.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bQ))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fN.prototype={
bH:function(a,b){this.f=a.a
return!1},
aP:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.da()
if(typeof u!=="number")return u.a2()
this.f=(u&~t)>>>0
return!1},
aO:function(a,b){return!1},
fJ:function(a,b){return!1}}
X.hM.prototype={
fG:function(a){return!1},
fE:function(a){return!1},
fF:function(a){return!1}}
X.dk.prototype={
c4:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cL(u,new X.bQ(t,a.altKey,a.shiftKey))},
ar:function(a){a.shiftKey},
bm:function(a){a.shiftKey},
ag:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.T()
u=t.top
if(typeof r!=="number")return r.T()
return new V.ai(s-q,r-u)},
aE:function(a){return new V.aH(a.movementX,a.movementY)},
bh:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ai])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
q=C.c.a5(r.pageX)
C.c.a5(r.pageY)
p=o.left
C.c.a5(r.pageX)
n.push(new V.ai(q-p,C.c.a5(r.pageY)-o.top))}return n},
ae:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cv(u,new X.bQ(t,a.altKey,a.shiftKey))},
be:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.T()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.T()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ed:function(a){this.f=!0},
e1:function(a){this.f=!1},
e7:function(a){if(this.f&&this.be(a))a.preventDefault()},
eh:function(a){var u
if(!this.f)return
u=this.c4(a)
this.b.fH(u)},
ef:function(a){var u
if(!this.f)return
u=this.c4(a)
this.b.fD(u)},
el:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ar(a)
if(r.x){u=r.ae(a)
t=r.aE(a)
if(r.d.bH(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ae(a)
s=r.ag(a)
if(r.c.bH(u,s))a.preventDefault()},
ep:function(a){var u,t,s,r=this
r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aP(u,s))a.preventDefault()},
eb:function(a){var u,t,s,r=this
if(!r.be(a)){r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aP(u,s))a.preventDefault()}},
en:function(a){var u,t,s,r=this
r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aO(u,s))a.preventDefault()},
e9:function(a){var u,t,s,r=this
if(!r.be(a)){r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aO(u,s))a.preventDefault()}},
er:function(a){var u,t,s=this
s.ar(a)
u=new V.aH((a&&C.u).gfb(a),C.u.gfc(a)).D(0,180)
if(s.x){if(s.d.fI(u))a.preventDefault()
return}if(s.r)return
t=s.ag(a)
if(s.c.fJ(u,t))a.preventDefault()},
eu:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ae(s.y)
t=s.ag(s.y)
s.d.ej(u,t,r)}},
eF:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bm(a)
u=t.bh(a)
if(t.e.fG(u))a.preventDefault()},
eB:function(a){var u
this.bm(a)
u=this.bh(a)
if(this.e.fE(u))a.preventDefault()},
eD:function(a){var u
this.bm(a)
u=this.bh(a)
if(this.e.fF(u))a.preventDefault()}}
D.ev.prototype={$iW:1}
D.bf.prototype={
ac:function(a){var u=this.r
if(u!=null)u.O(a)},
dw:function(){return this.ac(null)},
$iW:1}
D.W.prototype={}
D.cM.prototype={
ac:function(a){var u=this.y
if(u!=null)u.O(a)},
c9:function(a){var u=this.z
if(u!=null)u.O(a)},
ei:function(){return this.c9(null)},
ex:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.k)(a),++t){s=a[t]
if(s==null||this.dL(s))return!1}return!0},
dW:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gc8(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.k)(b),++r){q=b[r]
if(q instanceof D.bf)this.f.push(q)
p=q.r
if(p==null){p=new D.bh()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bH()
u.b=!0
this.ac(u)},
ez:function(a,b){var u,t,s
for(u=b.gL(b),t=this.gc8();u.t();){s=u.gB(u)
C.a.G(this.e,s)
s.gw().G(0,t)}u=new D.bI()
u.b=!0
this.ac(u)},
dL:function(a){var u=C.a.F(this.f,a)
return u},
$aj:function(){return[D.W]},
$abe:function(){return[D.W]}}
D.h4.prototype={$iW:1}
D.hr.prototype={$iW:1}
V.P.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.as.prototype={
n:function(a,b){var u,t,s=this
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
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.eS.prototype={}
V.cQ.prototype={
X:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cQ))return!1
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
V.aw.prototype={
X:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
cN:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.jr()
u=1/b1
t=-n
s=-a0
return V.ax((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
R:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ax(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b3:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aw))return!1
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
i:function(a){return this.I()},
u:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.by(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.by(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.by(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.by(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.u("")}}
V.ai.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.a0.prototype={
T:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.cZ.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cZ))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.d1.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.aH.prototype={
bD:function(a){var u,t=this.a
if(typeof t!=="number")return t.R()
u=this.b
if(typeof u!=="number")return u.R()
return Math.sqrt(t*t+u*u)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.kh
return u==null?$.kh=new V.aH(0,0):u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.aH(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.Z(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.Z(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.z.prototype={
bD:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bE:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
aA:function(a){return new V.z(-this.a,-this.b,-this.c)},
D:function(a,b){if(Math.abs(b-0)<$.A().a)return V.c4()
return new V.z(this.a/b,this.b/b,this.c/b)},
cO:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.cx.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.a4():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cx))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.fO.prototype={}
U.d3.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a4():u},
aq:function(a){var u=this.y
if(u!=null)u.O(a)},
sd6:function(a){var u
a=V.jL(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.F("yaw",u,a)
u.b=!0
this.aq(u)}},
scX:function(a,b){var u
b=V.jL(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.F("pitch",u,b)
u.b=!0
this.aq(u)}},
sd1:function(a){var u
a=V.jL(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.F("roll",u,a)
u.b=!0
this.aq(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d3))return!1
u=r.a
t=b.a
s=$.A().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+"], ["+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
M.cC.prototype={
ad:function(a){var u=this.y
if(u!=null)u.O(a)},
dz:function(){return this.ad(null)},
e3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga8(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.k)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bh()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bH()
u.b=!0
this.ad(u)},
e5:function(a,b){var u,t
for(u=b.gL(b),t=this.ga8();u.t();)u.gB(u).gw().G(0,t)
u=new D.bI()
u.b=!0
this.ad(u)},
sd3:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().G(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gw().p(0,t.ga8())
s=new D.F("technique",u,t.d)
s.b=!0
t.ad(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.a4():u},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.d_(f.d)
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
if(typeof s!=="number")return H.Z(s)
o=C.c.a5(p*s)
p=q.b
if(typeof r!=="number")return H.Z(r)
n=C.c.a5(p*r)
p=C.c.a5(q.c*s)
a.c=p
q=C.c.a5(q.d*r)
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
i=V.ax(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cZ(i)
t=$.k3
if(t==null){t=V.k5()
q=V.jx()
p=$.ki
t=V.k0(t,q,p==null?$.ki=new V.z(0,0,-1):p)
$.k3=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.R(0,h)}a.db.cZ(h)
u=f.d
if(u!=null)u.b4(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.t();)u.d.b4(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.t();)u.d.ay(a)
f.b.toString
a.cy.bI()
a.db.bI()
f.c.toString
a.cY()}}
A.cq.prototype={}
A.eq.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Q.prototype={
ga6:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.Q))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fs.prototype={
dn:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ak("")
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
A.m9(c3,u)
A.mb(c3,u)
A.ma(c3,u)
A.md(c3,u)
A.me(c3,u)
A.mc(c3,u)
A.mf(c3,u)
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
m=A.m8(b8.z)
b8.c=n
b8.d=m
b8.e=b8.c5(n,35633)
b8.f=b8.c5(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.d(l)))}b8.eU()
b8.eW()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.n(b8.y.v(0,"invViewMat"),"$ia1")
if(t)b8.dy=H.n(b8.y.v(0,"objMat"),"$ia1")
if(r)b8.fr=H.n(b8.y.v(0,"viewObjMat"),"$ia1")
b8.fy=H.n(b8.y.v(0,"projViewObjMat"),"$ia1")
if(c3.go)b8.fx=H.n(b8.y.v(0,"viewMat"),"$ia1")
if(c3.x1)b8.k1=H.n(b8.y.v(0,"txt2DMat"),"$ic1")
if(c3.x2)b8.k2=H.n(b8.y.v(0,"txtCubeMat"),"$ia1")
if(c3.y1)b8.k3=H.n(b8.y.v(0,"colorMat"),"$ia1")
b8.r1=H.b([],[A.a1])
t=c3.av
if(t>0){b8.k4=b8.y.v(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.n(j,"$ia1"))}}t=c3.a
if(t.a)b8.r2=H.n(b8.y.v(0,"emissionClr"),"$iC")
if(t.b)b8.rx=H.n(b8.y.v(0,"emissionTxt"),"$iR")
t=c3.b
if(t.a)b8.x1=H.n(b8.y.v(0,"ambientClr"),"$iC")
if(t.b)b8.x2=H.n(b8.y.v(0,"ambientTxt"),"$iR")
t=c3.c
if(t.a)b8.y2=H.n(b8.y.v(0,"diffuseClr"),"$iC")
if(t.b)b8.av=H.n(b8.y.v(0,"diffuseTxt"),"$iR")
t=c3.d
if(t.a)b8.aZ=H.n(b8.y.v(0,"invDiffuseClr"),"$iC")
if(t.b)b8.cu=H.n(b8.y.v(0,"invDiffuseTxt"),"$iR")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cz=H.n(b8.y.v(0,"shininess"),"$iM")
if(s)b8.cv=H.n(b8.y.v(0,"specularClr"),"$iC")
if(t.b)b8.cw=H.n(b8.y.v(0,"specularTxt"),"$iR")}if(c3.f.b)b8.cA=H.n(b8.y.v(0,"bumpTxt"),"$iR")
if(c3.db){b8.cB=H.n(b8.y.v(0,"envSampler"),"$ibp")
t=c3.r
if(t.a)b8.cC=H.n(b8.y.v(0,"reflectClr"),"$iC")
if(t.b)b8.cD=H.n(b8.y.v(0,"reflectTxt"),"$iR")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cE=H.n(b8.y.v(0,"refraction"),"$iM")
if(s)b8.cF=H.n(b8.y.v(0,"refractClr"),"$iC")
if(t.b)b8.cG=H.n(b8.y.v(0,"refractTxt"),"$iR")}}t=c3.y
if(t.a)b8.cH=H.n(b8.y.v(0,"alpha"),"$iM")
if(t.b)b8.cI=H.n(b8.y.v(0,"alphaTxt"),"$iR")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bu=new H.E([r,A.b7])
b8.bv=new H.E([r,[P.a9,A.c_]])
for(r=[A.c_],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
g=h.a
f="barLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.t(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.n(c,"$iC")
if(typeof g!=="number")return g.a2()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$iM")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.n(a,"$iM")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.t(P.r(c0+o+c1))
H.n(a0,"$iM")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c_(j,d,c,a3,a2,a1))}b8.bv.m(0,g,e)
q=b8.bu
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bw=new H.E([r,A.b7])
b8.bx=new H.E([r,[P.a9,A.c0]])
for(r=[A.c0],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a2()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.t(P.r(c0+a4+c1))
H.n(j,"$iC")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.t(P.r(c0+a4+c1))
H.n(d,"$iC")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.t(P.r(c0+a4+c1))
H.n(c,"$iC")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.t(P.r(c0+a4+c1))
H.n(j,"$iC")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.t(P.r(c0+a4+c1))
H.n(d,"$iC")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.n(c,"$iR")
a8=c}else a8=b9
e.push(new A.c0(a7,a6,a5,j,d,a8))}b8.bx.m(0,g,e)
q=b8.bw
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.by=new H.E([r,A.b7])
b8.bz=new H.E([r,[P.a9,A.c2]])
for(r=[A.c2],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.t(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.n(c,"$iC")
if(typeof g!=="number")return g.a2()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$ic1")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$ibp")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$ibp")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.n(a,"$ibZ")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$iM")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.n(a,"$iM")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.t(P.r(c0+o+c1))
H.n(a0,"$iM")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c2(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bz.m(0,g,e)
q=b8.by
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bA=new H.E([r,A.b7])
b8.bB=new H.E([r,[P.a9,A.c3]])
for(r=[A.c3],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.t(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.n(c,"$iC")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$iC")
if(typeof g!=="number")return g.a2()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.n(a,"$iC")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.t(P.r(c0+o+c1))
H.n(a0,"$iC")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.t(P.r(c0+o+c1))
H.n(b2,"$iM")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.t(P.r(c0+o+c1))
H.n(b3,"$iM")
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
if(a==null)H.t(P.r(c0+a4+c1))
H.n(a,"$ibZ")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.n(a,"$iM")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.t(P.r(c0+a4+c1))
H.n(a0,"$iM")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.n(a,"$iM")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.t(P.r(c0+a4+c1))
H.n(a0,"$iM")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.t(P.r(c0+a4+c1))
H.n(b2,"$iM")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.n(a,"$iR")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.n(a,"$iR")
b0=a}else b0=b9
e.push(new A.c3(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bB.m(0,g,e)
q=b8.bA
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}}if(c3.y2){b8.cJ=b8.y.v(0,"fogColor")
b8.cK=b8.y.v(0,"fogStop")
b8.cL=b8.y.v(0,"fogWidth")}},
a4:function(a,b){if(b!=null&&b.d)a.dd(b)},
eQ:function(a,b){}}
A.cr.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cz.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.d_.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.d6.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fv.prototype={
i:function(a){return this.aK}}
A.c_.prototype={}
A.c0.prototype={}
A.c2.prototype={}
A.c3.prototype={}
A.d4.prototype={
ds:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c5:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
eU:function(){var u,t,s,r=this,q=H.b([],[A.cq]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.Z(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cq(p,t.name,s))}r.x=new A.eq(q)},
eW:function(){var u,t,s,r=this,q=H.b([],[A.di]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.Z(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fa(t.type,t.size,t.name,s))}r.y=new A.hY(q)},
ap:function(a,b,c){var u=this.a
if(a===1)return new A.b7(u,b,c)
else return A.jw(u,this.r,b,a,c)},
dO:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.jw(u,this.r,b,a,c)},
dP:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.jw(u,this.r,b,a,c)},
aX:function(a,b){return new P.dv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fa:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ap(b,c,d)
case 5121:return u.ap(b,c,d)
case 5122:return u.ap(b,c,d)
case 5123:return u.ap(b,c,d)
case 5124:return u.ap(b,c,d)
case 5125:return u.ap(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.hU(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.bZ(u.a,c,d)
case 35667:return new A.hV(u.a,c,d)
case 35668:return new A.hW(u.a,c,d)
case 35669:return new A.hX(u.a,c,d)
case 35674:return new A.hZ(u.a,c,d)
case 35675:return new A.c1(u.a,c,d)
case 35676:return new A.a1(u.a,c,d)
case 35678:return u.dO(b,c,d)
case 35680:return u.dP(b,c,d)
case 35670:throw H.c(u.aX("BOOL",c))
case 35671:throw H.c(u.aX("BOOL_VEC2",c))
case 35672:throw H.c(u.aX("BOOL_VEC3",c))
case 35673:throw H.c(u.aX("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.di.prototype={}
A.hY.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
v:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.k)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b7.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.bZ.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.c1.prototype={
a3:function(a){var u=new Float32Array(H.ch(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a1.prototype={
a3:function(a){var u=new Float32Array(H.ch(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.R.prototype={
dd:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bp.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.iW.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bE(s.b,b).bE(s.d.bE(s.c,b),c)
s=new V.a0(r.a,r.b,r.c)
if(!J.K(a.f,s)){a.f=s
s=a.a
if(s!=null)s.S()}a.sfW(r.D(0,Math.sqrt(r.M(r))))
s=1-b
u=1-c
u=new V.cZ(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.K(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.S()}}}
F.bi.prototype={
aI:function(){var u=this
if(!u.gaJ()){C.a.G(u.a.a.d.b,u)
u.a.a.S()}u.bi()
u.bj()
u.eI()},
eR:function(a){this.a=a
a.d.b.push(this)},
eS:function(a){this.b=a
a.d.c.push(this)},
eT:function(a){this.c=a
a.d.d.push(this)},
bi:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
bj:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
eI:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gaJ:function(){return this.a==null||this.b==null||this.c==null},
dH:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c4()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.cO())return
return s.D(0,Math.sqrt(s.M(s)))},
dJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.T(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.D(0,Math.sqrt(r.M(r)))
r=t.T(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aH(r.D(0,Math.sqrt(r.M(r))))
return r.D(0,Math.sqrt(r.M(r)))},
bq:function(){var u,t=this
if(t.d!=null)return!0
u=t.dH()
if(u==null){u=t.dJ()
if(u==null)return!1}t.d=u
t.a.a.S()
return!0},
dG:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c4()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.cO())return
return s.D(0,Math.sqrt(s.M(s)))},
dI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.T(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.D(0,Math.sqrt(l.M(l)))
if(s.a-t.a<0)q=q.aA(0)}else{p=(l-u.b)/r
l=d.T(0,g)
l=new V.a0(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).T(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.D(0,Math.sqrt(l.M(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aA(0)}l=n.d
if(l!=null){o=l.D(0,Math.sqrt(l.M(l)))
l=o.aH(q)
l=l.D(0,Math.sqrt(l.M(l))).aH(o)
q=l.D(0,Math.sqrt(l.M(l)))}return q},
bo:function(){var u,t=this
if(t.e!=null)return!0
u=t.dG()
if(u==null){u=t.dI()
if(u==null)return!1}t.e=u
t.a.a.S()
return!0},
gf5:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
u:function(a){var u,t,s=this
if(s.gaJ())return a+"disposed"
u=a+C.b.a1(J.a_(s.a.e),0)+", "+C.b.a1(J.a_(s.b.e),0)+", "+C.b.a1(J.a_(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
I:function(){return this.u("")}}
F.eV.prototype={}
F.ho.prototype={
aM:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bK.prototype={
aI:function(){var u=this
if(!u.gaJ()){C.a.G(u.a.a.c.b,u)
u.a.a.S()}u.bi()
u.bj()},
bi:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
bj:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gaJ:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
u:function(a){if(this.gaJ())return a+"disposed"
return a+C.b.a1(J.a_(this.a.e),0)+", "+C.b.a1(J.a_(this.b.e),0)},
I:function(){return this.u("")}}
F.fj.prototype={}
F.hS.prototype={
aM:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
return t==u.e}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
return t==u.e}else return!1}}}
F.bT.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a1(J.a_(u.e),0)},
I:function(){return this.u("")}}
F.hg.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.a4():u},
bG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){r=g[s]
h.a.p(0,r.f8())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.p(0,n)
o=new F.bT()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.O(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.p(0,l)
p.a.p(0,k)
p=new F.bK()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.O(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.p(0,l)
o.a.p(0,k)
o.a.p(0,i)
F.cD(l,k,i)}g=h.e
if(g!=null)g.ab(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ab(0)
return u},
ft:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.ad(o,0)])
for(o=[F.br];u.length!==0;){t=C.a.gfl(u)
C.a.bJ(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.aM(0,t,q)){s.push(q)
C.a.bJ(u,r)}}if(s.length>1)b.bG(s)}}p.a.q()
p.c.bK()
p.d.bK()
p.b.fN()
p.c.bL(new F.hS())
p.d.bL(new F.ho())
o=p.e
if(o!=null)o.ab(0)},
f3:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aO()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aN().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.aP().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.cn().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.aL().a)!==0)++s
r=a4.gbR(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.ct])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.f0(m)
k=l.gbR(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.ct(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fs(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ch(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cu(new Z.dl(a1,d),o,a4)
c.b=H.b([],[Z.bj])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)}a=Z.jy(u,34963,b)
c.b.push(new Z.bj(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)}a=Z.jy(u,34963,b)
c.b.push(new Z.bj(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.q()
b.push(t.e)}a=Z.jy(u,34963,b)
c.b.push(new Z.bj(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.m])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.u(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.u(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.u(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.u(t))}return C.a.k(s,"\n")},
S:function(){var u=this.e
if(u!=null)u.O(null)}}
F.hh.prototype={
eZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bi])
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
if(p){n.p(0,m)
u.a.p(0,l)
u.a.p(0,j)
h.push(F.cD(m,l,j))
u.a.p(0,m)
u.a.p(0,j)
u.a.p(0,i)
h.push(F.cD(m,j,i))}else{n.p(0,l)
u.a.p(0,j)
u.a.p(0,i)
h.push(F.cD(l,j,i))
u.a.p(0,l)
u.a.p(0,i)
u.a.p(0,m)
h.push(F.cD(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aM(0,p,n)){p.aI()
break}}}}},
bK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gf5(s)
if(t)s.aI()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.k)(u),++r)if(!u[r].bq())s=!1
return s},
bp:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.k)(u),++r)if(!u[r].bo())s=!1
return s},
i:function(a){return this.I()},
u:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(a))
return C.a.k(r,"\n")},
I:function(){return this.u("")}}
F.hi.prototype={
gl:function(a){return this.b.length},
bL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aM(0,p,n)){p.aI()
break}}}}},
bK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.aI()}},
i:function(a){return this.I()},
u:function(a){var u,t,s=H.b([],[P.m]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].u(a+(""+u+". ")))}return C.a.k(s,"\n")},
I:function(){return this.u("")}}
F.hj.prototype={
gl:function(a){return this.b.length},
fN:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.O(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.I()},
u:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(a))
return C.a.k(r,"\n")},
I:function(){return this.u("")}}
F.br.prototype={
bs:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kk(u.cx,r,o,t,s,q,p,a,n)},
f8:function(){return this.bs(null)},
sfW:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.S()}},
fs:function(a){var u,t,s=this
if(a.n(0,$.aO())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aN())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aM())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aP())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.ba())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cm())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cn())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bz()))return H.b([s.ch],[P.J])
else if(a.n(0,$.aL())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bq:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c4()
t.d.C(0,new F.ik(s))
s=s.a
t.r=s.D(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.ab(0)}return!0},
bo:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c4()
t.d.C(0,new F.ij(s))
s=s.a
t.x=s.D(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.ab(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
u:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
q.push(C.b.a1(J.a_(s.e),0))
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
q.push(V.y(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
I:function(){return this.u("")}}
F.ik.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.i9.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
p:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.S()
return!0},
ck:function(a,b){var u=null,t=F.kk(u,u,a,u,u,b,u,u,0)
this.p(0,t)
return t},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)u[s].bq()
return!0},
bp:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)u[s].bo()
return!0},
f4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.D(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.O(null)}}}}return!0},
i:function(a){return this.I()},
u:function(a){var u,t,s,r
this.q()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r)u.push(t[r].u(a))
return C.a.k(u,"\n")},
I:function(){return this.u("")}}
F.ia.prototype={
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
C:function(a,b){var u=this
C.a.C(u.b,b)
C.a.C(u.c,new F.ib(u,b))
C.a.C(u.d,new F.ic(u,b))},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(""))
return C.a.k(r,"\n")}}
F.ib.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)}}
F.ic.prototype={
$1:function(a){var u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)}}
F.id.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(""))
return C.a.k(r,"\n")}}
F.ig.prototype={}
F.ie.prototype={
aM:function(a,b,c){return J.K(b.f,c.f)}}
F.ih.prototype={}
F.fX.prototype={
bG:function(a){var u,t,s,r,q,p,o,n,m=V.c4()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.z(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.D(0,Math.sqrt(m.M(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.k)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.D(0,Math.sqrt(p*p+o*o+n*n))}if(!J.K(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.O(null)}}}return}}
F.ii.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].u(""))
return C.a.k(r,"\n")}}
O.cP.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.a4():u},
N:function(a){var u=this.fr
if(u!=null)u.O(a)},
b9:function(){return this.N(null)},
ca:function(a){this.a=null
this.N(a)},
eM:function(){return this.ca(null)},
dY:function(a,b){var u=new D.bH()
u.b=!0
this.N(u)},
e_:function(a,b){var u=new D.bI()
u.b=!0
this.N(u)},
c3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.E(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){q=t[r]
p=q.gaa()
o=u.h(0,q.gaa())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cr])
u.C(0,new O.fz(g,n))
C.a.aC(n,new O.fA())
m=new H.E(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cz])
m.C(0,new O.fB(g,l))
C.a.aC(l,new O.fC())
k=new H.E(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){q=t[r]
p=q.gaa()
o=k.h(0,q.gaa())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d_])
k.C(0,new O.fD(g,j))
C.a.aC(j,new O.fE())
i=new H.E(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.k)(f),++r){q=f[r]
s=q.gaa()
p=i.h(0,q.gaa())
i.m(0,s,p==null?1:p)}h=H.b([],[A.d6])
i.C(0,new O.fF(g,h))
C.a.aC(h,new O.fG())
f=C.d.U(g.e.a.length+3,4)
return A.lj(!1,!1,!1,g.dy.e,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
Y:function(a,b){if(b!=null)if(!C.a.F(a,b)){b.a=a.length
a.push(b)}},
b4:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.t();){t=u.d
t.toString
s=$.i8
if(s==null)s=$.i8=new V.z(0,0,1)
t.a=s
r=$.i7
t.d=r==null?$.i7=new V.z(0,1,0):r
r=$.i6
t.e=r==null?$.i6=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b3(s)
r=s.a
p=s.b
o=s.c
t.a=s.D(0,Math.sqrt(r*r+p*p+o*o))
o=q.b3(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.D(0,Math.sqrt(p*p+r*r+s*s))
s=q.b3(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.D(0,Math.sqrt(r*r+p*p+o*o))}}}},
fP:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.c3()
u=b4.fr.h(0,b3.aK)
if(u==null){u=A.li(b3,b4.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b4.fr.f6(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.aZ
b3=b5.e
if(!(b3 instanceof Z.cu))b3=b5.e=null
if(b3==null||!b3.d.n(0,r)){b3=s.k4
if(b3)b5.d.at()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bp()
p.a.bp()
p=p.e
if(p!=null)p.ab(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.f4()
o=o.e
if(o!=null)o.ab(0)}m=b5.d.f3(new Z.im(b4.a),r)
m.aw($.aO()).e=b2.a.Q.c
if(b3)m.aw($.aN()).e=b2.a.cx.c
if(q)m.aw($.aM()).e=b2.a.ch.c
if(s.r2)m.aw($.aP()).e=b2.a.cy.c
if(p)m.aw($.ba()).e=b2.a.db.c
if(s.ry)m.aw($.aL()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dc])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fj()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gP(p)
b3=b3.dy
b3.toString
b3.a3(p.X(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gP(p)
o=b4.dx
o=b4.cx=p.R(0,o.gP(o))
p=o}b3=b3.fr
b3.toString
b3.a3(p.X(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfL()
o=b4.dx
o=b4.ch=p.R(0,o.gP(o))
p=o}b3=b3.fy
b3.toString
b3.a3(p.X(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gP(p)
b3=b3.fx
b3.toString
b3.a3(p.X(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a3(C.i.X(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a3(C.i.X(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a3(C.i.X(p,!0))}if(s.av>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.ch(p.X(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.f.d)
b3=b2.a
p=b2.f.d
b3.a4(b3.rx,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.r.d)
b3=b2.a
p=b2.r.d
b3.a4(b3.x2,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.x.d)
b3=b2.a
p=b2.x.d
b3.a4(b3.av,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.aZ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.y.d)
b3=b2.a
p=b2.y.d
b3.a4(b3.cu,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.cz
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cv
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.a4(b3.cw,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.E([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
e=f.gaa()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.co(b2.a.bv.h(0,e),d)
n=f.gh4()
b=$.aj
n=n.aQ(b==null?$.aj=new V.a0(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh9()
b=$.aj
n=n.aQ(b==null?$.aj=new V.a0(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gct()){n=f.gcn()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gco()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcp()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bu.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gP(p)
p=P.w
a0=new H.E([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.co(b2.a.bx.h(0,0),d)
n=a.b3(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.D(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bw.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gP(p)
p=P.w
a3=new H.E([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
e=f.gaa()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.co(b2.a.bz.h(0,e),d)
a4=a.R(0,f.gP(f))
n=f.gP(f)
b=$.aj
n=n.aQ(b==null?$.aj=new V.a0(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aj
n=a4.aQ(n==null?$.aj=new V.a0(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gak()
n=a4.cN(0)
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
i=new Float32Array(H.ch(new V.cQ(b,a1,a2,a5,a6,a7,a8,a9,n).X(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gak()
n=f.gak()
if(!C.a.F(l,n)){n.a=l.length
l.push(n)}n=f.gak()
b=n.gaL(n)
if(b){b=c.f
b.toString
a1=n.gaL(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfo(n)
b.a.uniform1i(b.d,n)}}f.gaB()
n=f.gde()
b=c.x
b.toString
a1=n.gff(n)
a2=n.gfg(n)
a5=n.gfh()
n=n.gfe()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaB()
if(!C.a.F(l,n)){n.a=l.length
l.push(n)}n=f.gaB()
b=n.gaL(n)
if(b){b=c.r
b.toString
a1=n.gaL(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfo(n)
b.a.uniform1i(b.d,n)}}if(f.gct()){n=f.gcn()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gco()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcp()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.by.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gP(p)
p=P.w
b1=new H.E([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
e=f.gaa()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.co(b2.a.bB.h(0,e),d)
n=f.gfK(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh7(f).hg()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aQ(f.gfK(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gak()
n=f.ghk()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghh(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghi()
b=c.x
b.a.uniform1f(b.d,n)
n=f.ghj()
b=c.y
b.a.uniform1f(b.d,n)
f.gak()
n=f.gak()
if(!C.a.F(l,n)){n.a=l.length
l.push(n)}n=f.gak()
b=n.gaL(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaB()
n=f.gde()
b=c.z
b.toString
a1=n.gff(n)
a2=n.gfg(n)
a5=n.gfh()
n=n.gfe()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaB()
if(!C.a.F(l,n)){n.a=l.length
l.push(n)}n=f.gaB()
b=n.gaL(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.gh8()){n=f.gh6()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gh5()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gct()){n=f.gcn()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gco()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcp()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bA.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.Y(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.a4(b3.cA,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gP(p).cN(0)}b3=b3.id
b3.toString
b3.a3(p.X(0,!0))}if(s.db){b2.Y(l,b2.ch)
b3=b2.a
p=b2.ch
b3.eQ(b3.cB,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cC
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.a4(b3.cD,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.cE
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.cF
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.a4(b3.cG,p)}}if(s.y2){b3=b2.a
p=b2.dy.b
b3=b3.cJ
b3.a.uniform4f(b3.d,p.a,p.b,p.c,p.d)
p=b2.a
b3=b2.dy.d
p=p.cK
p.a.uniform1f(p.d,b3)
b3=b2.a
p=b2.dy
o=p.c
p=p.d
b3=b3.cL
b3.a.uniform1f(b3.d,o-p)}b3=s.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.cH
p.a.uniform1f(p.d,n)}if(b3.b){b2.Y(l,b2.db.d)
p=b2.a
n=b2.db.d
p.a4(p.cI,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b5.e
p.bn(b4)
p.ay(b4)
p.h1(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fd()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.c3().aK}}
O.fz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cr(a,C.d.U(b+3,4)*4))}}
O.fA.prototype={
$2:function(a,b){return J.cp(a.a,b.a)}}
O.fB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cz(a,C.d.U(b+3,4)*4))}}
O.fC.prototype={
$2:function(a,b){return J.cp(a.a,b.a)}}
O.fD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.d_(a,C.d.U(b+3,4)*4))}}
O.fE.prototype={
$2:function(a,b){return J.cp(a.a,b.a)}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.d6(a,C.d.U(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cp(a.a,b.a)}}
O.ft.prototype={
af:function(){var u,t=this
t.bT()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.F(t.b,u,1)
u.b=!0
t.a.N(u)}}}
O.bO.prototype={
N:function(a){return this.a.N(a)},
b9:function(){return this.N(null)},
af:function(){},
bk:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.af()
u=s.a
u.a=null
u.N(null)}},
sb2:function(a){var u,t=this,s=t.c
if(!s.b)t.bk(new A.Q(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gw().G(0,t.gaT())
u=t.d
t.d=a
a.gw().p(0,t.gaT())
s=new D.F(t.b+".texture2D",u,t.d)
s.b=!0
t.a.N(s)}}}
O.fu.prototype={}
O.ag.prototype={
cc:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a)
t.b=!0
s.a.N(t)}},
af:function(){this.bT()
this.cc(new V.P(1,1,1))},
saG:function(a,b){this.bk(new A.Q(!0,this.c.b,!1))
this.cc(b)}}
O.fw.prototype={
sbt:function(a,b){var u
if(!this.e){this.e=!0
u=this.a
u.a=null
u.N(null)}}}
O.fx.prototype={
af:function(){var u,t=this
t.bU()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1)
u.b=!0
t.a.N(u)}}}
O.fy.prototype={
cd:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a)
t.b=!0
u.a.N(t)}},
af:function(){this.bU()
this.cd(100)}}
O.db.prototype={}
T.dc.prototype={}
T.hE.prototype={}
T.hF.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a4():u}}
T.hG.prototype={
bF:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hF()
t.a=0
t.b=q
t.d=t.c=!1
W.O(u,"load",new T.hH(this,t,u,!1,q,!1,!1),!1)
return t},
eN:function(a,b,c){var u,t,s,r
b=V.jI(b)
u=V.jI(a.width)
t=V.jI(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jg()
s.width=u
s.height=t
r=C.p.d8(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mt(r.getImageData(0,0,s.width,s.height))}}}
T.hH.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.eN(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.N.fV(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.fi()}++s.e}}
X.jf.prototype={}
X.f2.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.a4():u}}
X.cX.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.a4():u},
ao:function(a){var u=this.f
if(u!=null)u.O(a)},
dD:function(){return this.ao(null)},
saN:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gw().G(0,s.gbZ())
t=s.b
s.b=a
if(a!=null)a.gw().p(0,s.gbZ())
u=new D.F("mover",t,s.b)
u.b=!0
s.ao(u)}}}
X.hA.prototype={}
V.cw.prototype={
aS:function(a){this.b=new P.f7(C.G)
this.c=null
this.d=H.b([],[[P.a9,W.a8]])},
E:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a8]))
u=a.split("\n")
for(l=u.length,t=[W.a8],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dN(q,0,q.length)
n=o==null?q:o
C.E.dc(p,H.jK(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb0(m.d).push(p)}},
cW:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.a9,W.a8]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.aY()
for(t.toString,s=new H.l(u),s=new P.bt(t.bM(new H.b1(s,s.gl(s))).a());s.t();)r.b1(s.gB(s))}}
V.ja.prototype={
$1:function(a){var u=C.c.d4(this.a.gfn(),2)
if(u!=="0.00")P.jJ(u+" fps")}}
V.eI.prototype={
b1:function(a){var u=this
switch(a.a){case"Class":u.E(a.b,"#551")
break
case"Comment":u.E(a.b,"#777")
break
case"Id":u.E(a.b,"#111")
break
case"Num":u.E(a.b,"#191")
break
case"Reserved":u.E(a.b,"#119")
break
case"String":u.E(a.b,"#171")
break
case"Symbol":u.E(a.b,"#616")
break
case"Type":u.E(a.b,"#B11")
break
case"Whitespace":u.E(a.b,"#111")
break}},
aY:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hL()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.q(new H.l("_"))
u.a.push(t)
t=K.I("a","z")
u.a.push(t)
t=K.I("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.q(new H.l("_"))
t.a.push(u)
u=K.I("0","9")
t.a.push(u)
u=K.I("a","z")
t.a.push(u)
u=K.I("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=K.I("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=K.I("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=K.q(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.I("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.I("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.q(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.q(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.q(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.q(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.q(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.ar())
t=a1.j(0,r).k(0,h)
u=K.q(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.q(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.q(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.ar())
t=a1.j(0,r).k(0,e)
u=K.q(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.X()
s=[K.b2]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.q(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.X()
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.q(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.q(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.J("Num")
t=a1.j(0,n)
t.d=t.a.J("Num")
t=a1.j(0,m)
t.d=t.a.J("Symbol")
t=a1.j(0,j)
t.d=t.a.J("String")
t=a1.j(0,g)
t.d=t.a.J("String")
t=a1.j(0,c)
t.d=t.a.J(d)
t=a1.j(0,a0)
t.d=t.a.J(a0)
t=a1.j(0,q)
t=t.d=t.a.J(q)
u=[P.m]
t.aj(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aj(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aj(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f4.prototype={
b1:function(a){var u=this
switch(a.a){case"Builtin":u.E(a.b,"#411")
break
case"Comment":u.E(a.b,"#777")
break
case"Id":u.E(a.b,"#111")
break
case"Num":u.E(a.b,"#191")
break
case"Preprocess":u.E(a.b,"#737")
break
case"Reserved":u.E(a.b,"#119")
break
case"Symbol":u.E(a.b,"#611")
break
case"Type":u.E(a.b,"#171")
break
case"Whitespace":u.E(a.b,"#111")
break}},
aY:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hL()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.q(new H.l("_"))
u.a.push(t)
t=K.I("a","z")
u.a.push(t)
t=K.I("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.q(new H.l("_"))
t.a.push(u)
u=K.I("0","9")
t.a.push(u)
u=K.I("a","z")
t.a.push(u)
u=K.I("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=K.I("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=K.I("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=K.q(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.I("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.I("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.q(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.q(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.q(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.q(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.ar())
t=e.j(0,j).k(0,i)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.X()
s=[K.b2]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.q(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.X()
u.a=H.b([],s)
t.a.push(u)
t=K.q(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.q(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.q(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.J("Num")
u=e.j(0,n)
u.d=u.a.J("Num")
u=e.j(0,m)
u.d=u.a.J("Symbol")
u=e.j(0,i)
u.d=u.a.J(j)
u=e.j(0,g)
u.d=u.a.J(h)
u=e.j(0,f)
u.d=u.a.J(f)
u=e.j(0,q)
u=u.d=u.a.J(q)
t=[P.m]
u.aj(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aj(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aj(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f5.prototype={
b1:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.E(a.b,"#911")
u.E("=",t)
break
case"Id":u.E(a.b,t)
break
case"Other":u.E(a.b,t)
break
case"Reserved":u.E(a.b,"#119")
break
case"String":u.E(a.b,"#171")
break
case"Symbol":u.E(a.b,"#616")
break}},
aY:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hL()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.q(new H.l("_"))
u.a.push(t)
t=K.I("a","z")
u.a.push(t)
t=K.I("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.q(new H.l("_"))
t.a.push(u)
u=K.I("0","9")
t.a.push(u)
u=K.I("a","z")
t.a.push(u)
u=K.I("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.q(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.q(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.q(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.q(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.q(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.q(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.q(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.ar())
l.j(0,s).k(0,m).a.push(new K.ar())
u=l.j(0,m).k(0,m)
t=new K.X()
t.a=H.b([],[K.b2])
u.a.push(t)
u=K.q(new H.l('</\\-!>=_"'))
t.a.push(u)
u=K.I("a","z")
t.a.push(u)
u=K.I("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.J("Symbol")
u=l.j(0,n)
u.d=u.a.J("String")
u=l.j(0,r)
t=u.a.J(r)
u.d=t
t.aj(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.J(q)
t=l.j(0,m)
t.d=t.a.J(m)
return l}}
V.h2.prototype={
cW:function(a,b){this.d=H.b([],[[P.a9,W.a8]])
this.E(C.a.k(b,"\n"),"#111")},
b1:function(a){},
aY:function(){return}}
V.hk.prototype={
dt:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.O(q,"scroll",new V.hm(o),!1)},
cl:function(a){var u,t,s,r,q,p,o,n
this.eV()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fq(a),s.toString,r=new H.l(r),r=new P.bt(s.bM(new H.b1(r,r.gl(r))).a());r.t();){s=r.gB(r)
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
if(H.mP(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ko(C.q,s,C.f,!1)
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
d7:function(a){var u,t,s,r=new V.eI("dart")
r.aS("dart")
u=new V.f4("glsl")
u.aS("glsl")
t=new V.f5("html")
t.aS("html")
s=C.a.fm(H.b([r,u,t],[V.cw]),new V.hn(a))
if(s!=null)return s
r=new V.h2("plain")
r.aS("plain")
return r},
cj:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jD(s).b7(s,"+")){b0[t]=C.b.a7(s,1)
a6.push(1)
u=!0}else if(C.b.b7(s,"-")){b0[t]=C.b.a7(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.d7(a8)
r.cW(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ko(C.q,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jP()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.k)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.k)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gL(s);a2.t();)d.appendChild(a2.gB(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
eV:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hL()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.X()
r=[K.b2]
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.X()
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.X()
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.q(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.q(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.X()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.X()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.ar())
s=u.j(0,i).k(0,i)
t=new K.X()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.J(p)
s=u.j(0,n)
s.d=s.a.J(o)
s=u.j(0,"CodeEnd")
s.d=s.a.J(m)
s=u.j(0,j)
s.d=s.a.J("Link")
s=u.j(0,i)
s.d=s.a.J(i)
this.b=u}}
V.hm.prototype={
$1:function(a){P.kd(C.h,new V.hl(this.a))}}
V.hl.prototype={
$0:function(){var u=C.c.a5(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hn.prototype={
$1:function(a){return a.a===this.a}}
F.j8.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.m]
u.cj("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cj("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.di=u.i
u=J.cK.prototype
u.dk=u.i
u=P.j.prototype
u.dj=u.b5
u=W.L.prototype
u.b8=u.a_
u=W.dR.prototype
u.dl=u.a9
u=K.cG.prototype
u.dh=u.ah
u.bS=u.i
u=O.bO.prototype
u.bT=u.af
u=O.ag.prototype
u.bU=u.af})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"lT","ld",17)
t(P,"mn","lH",5)
t(P,"mo","lI",5)
t(P,"mp","lJ",5)
s(P,"kt","ml",8)
r(W,"mC",4,null,["$4"],["lK"],13,0)
r(W,"mD",4,null,["$4"],["lL"],13,0)
var l
q(l=E.aW.prototype,"gcU",0,0,null,["$1","$0"],["cV","fC"],0,0)
q(l,"gcS",0,0,null,["$1","$0"],["cT","fB"],0,0)
q(l,"gcQ",0,0,null,["$1","$0"],["cR","fw"],0,0)
p(l,"gfu","fv",2)
p(l,"gfz","fA",2)
q(l=E.dd.prototype,"gbW",0,0,null,["$1","$0"],["bY","bX"],0,0)
o(l,"gfR","d0",8)
n(l=X.dk.prototype,"gec","ed",3)
n(l,"ge0","e1",3)
n(l,"ge6","e7",1)
n(l,"geg","eh",9)
n(l,"gee","ef",9)
n(l,"gek","el",1)
n(l,"geo","ep",1)
n(l,"gea","eb",1)
n(l,"gem","en",1)
n(l,"ge8","e9",1)
n(l,"geq","er",15)
n(l,"ges","eu",3)
n(l,"geE","eF",4)
n(l,"geA","eB",4)
n(l,"geC","eD",4)
q(D.bf.prototype,"gdv",0,0,null,["$1","$0"],["ac","dw"],0,0)
q(l=D.cM.prototype,"gc8",0,0,null,["$1","$0"],["c9","ei"],0,0)
n(l,"gew","ex",16)
p(l,"gdV","dW",10)
p(l,"gey","ez",10)
m(V.aH.prototype,"gl","bD",11)
m(V.z.prototype,"gl","bD",11)
q(l=M.cC.prototype,"ga8",0,0,null,["$1","$0"],["ad","dz"],0,0)
p(l,"ge2","e3",2)
p(l,"ge4","e5",2)
q(l=O.cP.prototype,"gaT",0,0,null,["$1","$0"],["N","b9"],0,0)
q(l,"geL",0,0,null,["$1","$0"],["ca","eM"],0,0)
p(l,"gdX","dY",12)
p(l,"gdZ","e_",12)
q(O.bO.prototype,"gaT",0,0,null,["$1","$0"],["N","b9"],0,0)
q(X.cX.prototype,"gbZ",0,0,null,["$1","$0"],["ao","dD"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.jo,J.a,J.a2,P.dE,P.j,H.b1,P.fc,H.cE,H.i1,H.hQ,P.bg,H.bC,H.dW,P.S,H.fk,H.fl,H.fe,P.e1,P.bs,P.bt,P.dm,P.d9,P.hw,P.de,P.iV,P.iI,P.iC,P.dD,P.u,P.eA,P.f8,P.iT,P.ap,P.aU,P.a6,P.aV,P.h0,P.d7,P.dv,P.f1,P.f3,P.a9,P.bM,P.b3,P.m,P.ak,W.eE,W.c7,W.G,W.cV,W.dR,W.iN,W.cF,W.az,W.iH,W.e7,P.e6,P.iD,K.ar,K.cG,K.b2,K.h6,K.hf,L.d8,L.df,L.dg,L.hK,O.be,O.bP,E.ew,E.aW,E.h7,E.dd,Z.dl,Z.im,Z.cu,Z.bj,Z.aI,D.ez,D.bh,D.V,X.cv,X.cL,X.fh,X.fo,X.bQ,X.fN,X.hM,X.dk,D.ev,D.bf,D.W,D.h4,D.hr,V.P,V.as,V.eS,V.cQ,V.aw,V.ai,V.a0,V.cZ,V.d1,V.aH,V.z,M.cC,A.cq,A.eq,A.Q,A.cr,A.cz,A.d_,A.d6,A.fv,A.c_,A.c0,A.c2,A.c3,A.di,A.hY,F.bi,F.eV,F.bK,F.fj,F.bT,F.hg,F.hh,F.hi,F.hj,F.br,F.i9,F.ia,F.id,F.ig,F.ih,F.ii,O.db,O.bO,O.fw,T.hG,X.jf,X.hA,X.cX,V.cw,V.hk])
s(J.a,[J.fd,J.cJ,J.cK,J.aY,J.bJ,J.aZ,H.bS,W.e,W.en,W.cs,W.af,W.D,W.dp,W.a3,W.eJ,W.eK,W.dr,W.cB,W.dt,W.eM,W.h,W.dw,W.av,W.f6,W.dz,W.aX,W.fn,W.fH,W.dF,W.dG,W.ay,W.dH,W.dK,W.aA,W.dO,W.dQ,W.aD,W.dS,W.aE,W.dX,W.al,W.e_,W.hJ,W.aG,W.e2,W.hO,W.i3,W.e8,W.ea,W.ec,W.ee,W.eg,P.b0,P.dB,P.b4,P.dM,P.h5,P.dY,P.b5,P.e4,P.er,P.dn,P.d2,P.dU])
s(J.cK,[J.h1,J.bq,J.b_])
t(J.jn,J.aY)
s(J.bJ,[J.cI,J.cH])
t(P.fm,P.dE)
s(P.fm,[H.dj,W.iu,W.U,P.eY])
t(H.l,H.dj)
s(P.j,[H.p,H.bN,H.c5,P.fa])
s(H.p,[H.cN,H.bl])
t(H.eP,H.bN)
s(P.fc,[H.cO,H.io])
t(H.fr,H.cN)
s(P.bg,[H.fY,H.fg,H.i0,H.ey,H.hd,P.cW,P.a7,P.i2,P.i_,P.bX,P.eB,P.eH])
s(H.bC,[H.jc,H.hB,H.ff,H.j4,H.j5,H.j6,P.iq,P.ip,P.ir,P.is,P.iS,P.iR,P.j_,P.iF,P.iG,P.fq,P.eN,P.eO,W.eQ,W.fJ,W.fL,W.hc,W.hv,W.iy,W.fW,W.fV,W.iJ,W.iK,W.iQ,W.iU,P.j0,P.eZ,P.f_,P.et,E.h8,E.h9,E.ha,E.hI,D.eT,D.eU,F.iW,F.ik,F.ij,F.ib,F.ic,O.fz,O.fA,O.fB,O.fC,O.fD,O.fE,O.fF,O.fG,T.hH,V.ja,V.hm,V.hl,V.hn,F.j8])
s(H.hB,[H.ht,H.bA])
t(P.fp,P.S)
s(P.fp,[H.E,W.it])
t(H.cR,H.bS)
s(H.cR,[H.c8,H.ca])
t(H.c9,H.c8)
t(H.bR,H.c9)
t(H.cb,H.ca)
t(H.cS,H.cb)
s(H.cS,[H.fP,H.fQ,H.fR,H.fS,H.fT,H.cT,H.fU])
t(P.iO,P.fa)
t(P.iE,P.iV)
t(P.iB,P.iI)
t(P.eC,P.hw)
t(P.eR,P.eA)
s(P.eC,[P.f7,P.i5])
t(P.i4,P.eR)
s(P.a6,[P.J,P.w])
s(P.a7,[P.bn,P.f9])
s(W.e,[W.B,W.eX,W.aC,W.cc,W.aF,W.am,W.ce,W.il,W.c6,P.eu,P.bb])
s(W.B,[W.L,W.aS])
s(W.L,[W.o,P.i])
s(W.o,[W.eo,W.ep,W.bc,W.bd,W.a8,W.f0,W.bG,W.he,W.da,W.hy,W.hz,W.bY])
t(W.eD,W.af)
t(W.bD,W.dp)
s(W.a3,[W.eF,W.eG])
t(W.ds,W.dr)
t(W.cA,W.ds)
t(W.du,W.dt)
t(W.eL,W.du)
t(W.au,W.cs)
t(W.dx,W.dw)
t(W.eW,W.dx)
t(W.dA,W.dz)
t(W.bF,W.dA)
t(W.b6,W.h)
s(W.b6,[W.bk,W.ah,W.bo])
t(W.fI,W.dF)
t(W.fK,W.dG)
t(W.dI,W.dH)
t(W.fM,W.dI)
t(W.dL,W.dK)
t(W.cU,W.dL)
t(W.dP,W.dO)
t(W.h3,W.dP)
t(W.hb,W.dQ)
t(W.cd,W.cc)
t(W.hp,W.cd)
t(W.dT,W.dS)
t(W.hq,W.dT)
t(W.hu,W.dX)
t(W.e0,W.e_)
t(W.hC,W.e0)
t(W.cf,W.ce)
t(W.hD,W.cf)
t(W.e3,W.e2)
t(W.hN,W.e3)
t(W.b8,W.ah)
t(W.e9,W.e8)
t(W.iv,W.e9)
t(W.dq,W.cB)
t(W.eb,W.ea)
t(W.iz,W.eb)
t(W.ed,W.ec)
t(W.dJ,W.ed)
t(W.ef,W.ee)
t(W.iL,W.ef)
t(W.eh,W.eg)
t(W.iM,W.eh)
t(W.iw,W.it)
t(W.ix,P.d9)
t(W.iP,W.dR)
t(P.aa,P.iD)
t(P.dC,P.dB)
t(P.fi,P.dC)
t(P.dN,P.dM)
t(P.fZ,P.dN)
t(P.bW,P.i)
t(P.dZ,P.dY)
t(P.hx,P.dZ)
t(P.e5,P.e4)
t(P.hP,P.e5)
t(P.es,P.dn)
t(P.h_,P.bb)
t(P.dV,P.dU)
t(P.hs,P.dV)
s(K.cG,[K.X,L.dh])
s(E.ew,[Z.ct,A.d4,T.dc])
s(D.V,[D.bH,D.bI,D.F])
t(D.cM,O.be)
t(U.fO,D.ez)
s(U.fO,[U.cx,U.d3])
t(A.fs,A.d4)
s(A.di,[A.b7,A.hV,A.hW,A.hX,A.hT,A.M,A.hU,A.C,A.bZ,A.hZ,A.c1,A.a1,A.R,A.bp])
t(F.ho,F.eV)
t(F.hS,F.fj)
t(F.ie,F.ig)
t(F.fX,F.ih)
t(O.cP,O.db)
s(O.bO,[O.ft,O.fu,O.ag])
s(O.ag,[O.fx,O.fy])
t(T.hE,T.dc)
t(T.hF,T.hE)
t(X.f2,X.hA)
s(V.cw,[V.eI,V.f4,V.f5,V.h2])
u(H.dj,H.i1)
u(H.c8,P.u)
u(H.c9,H.cE)
u(H.ca,P.u)
u(H.cb,H.cE)
u(P.dE,P.u)
u(W.dp,W.eE)
u(W.dr,P.u)
u(W.ds,W.G)
u(W.dt,P.u)
u(W.du,W.G)
u(W.dw,P.u)
u(W.dx,W.G)
u(W.dz,P.u)
u(W.dA,W.G)
u(W.dF,P.S)
u(W.dG,P.S)
u(W.dH,P.u)
u(W.dI,W.G)
u(W.dK,P.u)
u(W.dL,W.G)
u(W.dO,P.u)
u(W.dP,W.G)
u(W.dQ,P.S)
u(W.cc,P.u)
u(W.cd,W.G)
u(W.dS,P.u)
u(W.dT,W.G)
u(W.dX,P.S)
u(W.e_,P.u)
u(W.e0,W.G)
u(W.ce,P.u)
u(W.cf,W.G)
u(W.e2,P.u)
u(W.e3,W.G)
u(W.e8,P.u)
u(W.e9,W.G)
u(W.ea,P.u)
u(W.eb,W.G)
u(W.ec,P.u)
u(W.ed,W.G)
u(W.ee,P.u)
u(W.ef,W.G)
u(W.eg,P.u)
u(W.eh,W.G)
u(P.dB,P.u)
u(P.dC,W.G)
u(P.dM,P.u)
u(P.dN,W.G)
u(P.dY,P.u)
u(P.dZ,W.G)
u(P.e4,P.u)
u(P.e5,W.G)
u(P.dn,P.S)
u(P.dU,P.u)
u(P.dV,W.G)})()
var v={mangledGlobalNames:{w:"int",J:"double",a6:"num",m:"String",ap:"bool",b3:"Null",a9:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.w,[P.j,E.aW]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b3,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.w,[P.j,D.W]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.w,[P.j,V.aw]]},{func:1,ret:P.ap,args:[W.L,P.m,P.m,W.c7]},{func:1,ret:P.b3,args:[,]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.ap,args:[[P.j,D.W]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bc.prototype
C.p=W.bd.prototype
C.E=W.a8.prototype
C.H=J.a.prototype
C.a=J.aY.prototype
C.I=J.cH.prototype
C.d=J.cI.prototype
C.i=J.cJ.prototype
C.c=J.bJ.prototype
C.b=J.aZ.prototype
C.J=J.b_.prototype
C.r=J.h1.prototype
C.N=P.d2.prototype
C.t=W.da.prototype
C.l=J.bq.prototype
C.u=W.b8.prototype
C.v=W.c6.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.C=new P.h0()
C.f=new P.i4()
C.D=new P.i5()
C.e=new P.iE()
C.h=new P.aV(0)
C.F=new P.aV(5e6)
C.G=new P.f8("element",!1,!1,!1)
C.K=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.L=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.M=H.b(u([]),[P.m])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.O=new P.bs(null,2)})();(function staticFields(){$.ae=0
$.bB=null
$.jQ=null
$.kv=null
$.ks=null
$.ky=null
$.j1=null
$.j7=null
$.jG=null
$.bu=null
$.ci=null
$.cj=null
$.jA=!1
$.ab=C.e
$.Y=[]
$.at=null
$.jj=null
$.jW=null
$.jV=null
$.dy=P.jY(P.m,P.f3)
$.k1=null
$.k4=null
$.aj=null
$.k8=null
$.kh=null
$.kj=null
$.i6=null
$.i7=null
$.i8=null
$.ki=null
$.k3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mW","kC",function(){return H.ku("_$dart_dartClosure")})
u($,"mX","jM",function(){return H.ku("_$dart_js")})
u($,"mY","kD",function(){return H.an(H.hR({
toString:function(){return"$receiver$"}}))})
u($,"mZ","kE",function(){return H.an(H.hR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n_","kF",function(){return H.an(H.hR(null))})
u($,"n0","kG",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n3","kJ",function(){return H.an(H.hR(void 0))})
u($,"n4","kK",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n2","kI",function(){return H.an(H.kf(null))})
u($,"n1","kH",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n6","kM",function(){return H.an(H.kf(void 0))})
u($,"n5","kL",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nj","jN",function(){return P.lG()})
u($,"nm","kR",function(){return P.lu("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nk","kQ",function(){return P.jZ(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"nd","kP",function(){return Z.a5(0)})
u($,"n7","kN",function(){return Z.a5(511)})
u($,"nf","aO",function(){return Z.a5(1)})
u($,"ne","aN",function(){return Z.a5(2)})
u($,"n9","aM",function(){return Z.a5(4)})
u($,"ng","aP",function(){return Z.a5(8)})
u($,"nh","ba",function(){return Z.a5(16)})
u($,"na","cm",function(){return Z.a5(32)})
u($,"nb","cn",function(){return Z.a5(64)})
u($,"nc","kO",function(){return Z.a5(96)})
u($,"ni","bz",function(){return Z.a5(128)})
u($,"n8","aL",function(){return Z.a5(256)})
u($,"mV","kB",function(){return new V.eS(1e-9)})
u($,"mU","A",function(){return $.kB()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bS,ArrayBufferView:H.bS,Float32Array:H.bR,Float64Array:H.bR,Int16Array:H.fP,Int32Array:H.fQ,Int8Array:H.fR,Uint16Array:H.fS,Uint32Array:H.fT,Uint8ClampedArray:H.cT,CanvasPixelArray:H.cT,Uint8Array:H.fU,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.en,HTMLAnchorElement:W.eo,HTMLAreaElement:W.ep,Blob:W.cs,HTMLBodyElement:W.bc,HTMLCanvasElement:W.bd,CDATASection:W.aS,CharacterData:W.aS,Comment:W.aS,ProcessingInstruction:W.aS,Text:W.aS,CSSPerspective:W.eD,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bD,MSStyleCSSProperties:W.bD,CSS2Properties:W.bD,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.eF,CSSUnparsedValue:W.eG,DataTransferItemList:W.eJ,HTMLDivElement:W.a8,DOMException:W.eK,ClientRectList:W.cA,DOMRectList:W.cA,DOMRectReadOnly:W.cB,DOMStringList:W.eL,DOMTokenList:W.eM,Element:W.L,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.au,FileList:W.eW,FileWriter:W.eX,HTMLFormElement:W.f0,Gamepad:W.av,History:W.f6,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,ImageData:W.aX,HTMLImageElement:W.bG,KeyboardEvent:W.bk,Location:W.fn,MediaList:W.fH,MIDIInputMap:W.fI,MIDIOutputMap:W.fK,MimeType:W.ay,MimeTypeArray:W.fM,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aA,PluginArray:W.h3,RTCStatsReport:W.hb,HTMLSelectElement:W.he,SourceBuffer:W.aC,SourceBufferList:W.hp,SpeechGrammar:W.aD,SpeechGrammarList:W.hq,SpeechRecognitionResult:W.aE,Storage:W.hu,CSSStyleSheet:W.al,StyleSheet:W.al,HTMLTableElement:W.da,HTMLTableRowElement:W.hy,HTMLTableSectionElement:W.hz,HTMLTemplateElement:W.bY,TextTrack:W.aF,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.hC,TextTrackList:W.hD,TimeRanges:W.hJ,Touch:W.aG,TouchEvent:W.bo,TouchList:W.hN,TrackDefaultList:W.hO,CompositionEvent:W.b6,FocusEvent:W.b6,TextEvent:W.b6,UIEvent:W.b6,URL:W.i3,VideoTrackList:W.il,WheelEvent:W.b8,Window:W.c6,DOMWindow:W.c6,CSSRuleList:W.iv,ClientRect:W.dq,DOMRect:W.dq,GamepadList:W.iz,NamedNodeMap:W.dJ,MozNamedAttrMap:W.dJ,SpeechRecognitionResultList:W.iL,StyleSheetList:W.iM,SVGLength:P.b0,SVGLengthList:P.fi,SVGNumber:P.b4,SVGNumberList:P.fZ,SVGPointList:P.h5,SVGScriptElement:P.bW,SVGStringList:P.hx,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.b5,SVGTransformList:P.hP,AudioBuffer:P.er,AudioParamMap:P.es,AudioTrackList:P.eu,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.h_,WebGL2RenderingContext:P.d2,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
W.cc.$nativeSuperclassTag="EventTarget"
W.cd.$nativeSuperclassTag="EventTarget"
W.ce.$nativeSuperclassTag="EventTarget"
W.cf.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.kw,[])
else F.kw([])})})()
//# sourceMappingURL=test.dart.js.map
