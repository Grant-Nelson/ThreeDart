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
a[c]=function(){a[c]=function(){H.mY(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jH"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jH(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jt:function jt(){},
lo:function(a,b,c,d){if(!!a.$ip)return new H.eS(a,b,[c,d])
return new H.bQ(a,b,[c,d])},
ff:function(){return new P.c_("No element")},
li:function(){return new P.c_("Too many elements")},
lI:function(a,b){var u=J.aO(a)
if(typeof u!=="number")return u.T()
H.d8(a,0,u-1,b)},
d8:function(a,b,c,d){if(c-b<=32)H.lH(a,b,c,d)
else H.lG(a,b,c,d)},
lH:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.b8(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.V()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lG:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.U(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.U(a4+a5,2),f=g-j,e=g+j,d=J.b8(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.d8(a3,a4,t-2,a6)
H.d8(a3,s+2,a5,a6)
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
break}}H.d8(a3,t,s,a6)}else H.d8(a3,t,s,a6)},
l:function l(a){this.a=a},
p:function p(){},
cQ:function cQ(){},
b_:function b_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b){this.a=null
this.b=a
this.c=b},
fv:function fv(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
is:function is(a,b){this.a=a
this.b=b},
cH:function cH(){},
i5:function i5(){},
dm:function dm(){},
co:function(a){var u,t=H.mZ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mI:function(a){return v.types[a]},
mP:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$ix},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a_(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
bX:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bY:function(a){return H.lr(a)+H.kv(H.cn(a),0,null)},
lr:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibr){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.co(t.length>1&&C.b.aD(t,0)===36?C.b.a7(t,1):t)},
kb:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lA:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.k)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aW(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aG(s))}return H.kb(r)},
lz:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.lA(a)}return H.kb(a)},
jx:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aW(u,10))>>>0,56320|u&1023)}throw H.c(P.aj(a,0,1114111,null,null))},
bn:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ly:function(a){var u=H.bn(a).getFullYear()+0
return u},
lw:function(a){var u=H.bn(a).getMonth()+1
return u},
ls:function(a){var u=H.bn(a).getDate()+0
return u},
lt:function(a){var u=H.bn(a).getHours()+0
return u},
lv:function(a){var u=H.bn(a).getMinutes()+0
return u},
lx:function(a){var u=H.bn(a).getSeconds()+0
return u},
lu:function(a){var u=H.bn(a).getMilliseconds()+0
return u},
V:function(a){throw H.c(H.aG(a))},
f:function(a,b){if(a==null)J.aO(a)
throw H.c(H.bA(a,b))},
bA:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,s,null)
u=J.aO(a)
if(!(b<0)){if(typeof u!=="number")return H.V(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.d3(b,s)},
mB:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bo(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bo(a,c,!0,b,"end",u)
return new P.a7(!0,b,"end",null)},
aG:function(a){return new P.a7(!0,a,null,null)},
mx:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.cZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kH})
u.name=""}else u.toString=H.kH
return u},
kH:function(){return J.a_(this.dartException)},
t:function(a){throw H.c(a)},
k:function(a){throw H.c(P.aR(a))},
an:function(a){var u,t,s,r,q,p
a=H.kF(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k7:function(a,b){return new H.h1(a,b==null?null:b.method)},
ju:function(a,b){var u=b==null,t=u?null:b.method
return new H.fk(a,t,u?null:b.receiver)},
aq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ju(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k7(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kK()
q=$.kL()
p=$.kM()
o=$.kN()
n=$.kQ()
m=$.kR()
l=$.kP()
$.kO()
k=$.kT()
j=$.kS()
i=r.a0(u)
if(i!=null)return f.$1(H.ju(u,i))
else{i=q.a0(u)
if(i!=null){i.method="call"
return f.$1(H.ju(u,i))}else{i=p.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=n.a0(u)
if(i==null){i=m.a0(u)
if(i==null){i=l.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=k.a0(u)
if(i==null){i=j.a0(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k7(u,i))}}return f.$1(new H.i4(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.da()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a7(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.da()
return a},
jK:function(a){var u
if(a==null)return new H.e_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e_(a)},
mF:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mO:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bz:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mO)
a.$identity=u
return u},
lb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hx().constructor.prototype):Object.create(new H.bD(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.G()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jX(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l7(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jX(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l7:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mI,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jW:H.jj
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
l8:function(a,b,c,d){var u=H.jj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.la(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l8(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.G()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bE
return new Function(r+H.d(q==null?$.bE=H.eA("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.G()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.bE
return new Function(r+H.d(q==null?$.bE=H.eA("self"):q)+"."+H.d(u)+"("+o+");}")()},
l9:function(a,b,c,d){var u=H.jj,t=H.jW
switch(b?-1:a){case 0:throw H.c(H.lE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
la:function(a,b){var u,t,s,r,q,p,o,n=$.bE
if(n==null)n=$.bE=H.eA("self")
u=$.jV
if(u==null)u=$.jV=H.eA("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l9(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ad
if(typeof u!=="number")return u.G()
$.ad=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ad
if(typeof u!=="number")return u.G()
$.ad=u+1
return new Function(n+u+"}")()},
jH:function(a,b,c,d,e,f,g){return H.lb(a,b,c,d,!!e,!!f,g)},
jj:function(a){return a.a},
jW:function(a){return a.c},
eA:function(a){var u,t,s,r=new H.bD("self","target","receiver","name"),q=J.jr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mT:function(a,b){throw H.c(H.l6(a,H.co(b.substring(2))))},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.mT(a,b)},
mD:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l6:function(a,b){return new H.eB("CastError: "+P.jp(a)+": type '"+H.d(H.mt(a))+"' is not a subtype of type '"+b+"'")},
mt:function(a){var u,t=J.N(a)
if(!!t.$ibF){u=H.mD(t)
if(u!=null)return H.mU(u)
return"Closure"}return H.bY(a)},
mY:function(a){throw H.c(new P.eK(a))},
lE:function(a){return new H.hh(a)},
kA:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cn:function(a){if(a==null)return
return a.$ti},
nv:function(a,b,c){return H.jf(a["$a"+H.d(c)],H.cn(b))},
mH:function(a,b,c,d){var u=H.jf(a["$a"+H.d(c)],H.cn(b))
return u==null?null:u[d]},
jJ:function(a,b,c){var u=H.jf(a["$a"+H.d(b)],H.cn(a))
return u==null?null:u[c]},
ac:function(a,b){var u=H.cn(a)
return u==null?null:u[b]},
mU:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.kv(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.lZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lZ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.G(p,a0[m])
l=u[q]
if(l!=null&&l!==P.T)p+=" extends "+H.b7(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b7(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b7(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mE(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b7(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kv:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
jf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nt:function(a,b,c){return a.apply(b,H.jf(J.N(b)["$a"+H.d(c)],H.cn(b)))},
nu:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mQ:function(a){var u,t,s,r,q=$.kB.$1(a),p=$.j5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ky.$2(a,q)
if(q!=null){p=$.j5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jd(u)
$.j5[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jb[q]=u
return u}if(s==="-"){r=H.jd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kD(a,u)
if(s==="*")throw H.c(P.kl(q))
if(v.leafTags[q]===true){r=H.jd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kD(a,u)},
kD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jM(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jd:function(a){return J.jM(a,!1,null,!!a.$ix)},
mR:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jd(u)
else return J.jM(u,c,null,null)},
mM:function(){if(!0===$.jL)return
$.jL=!0
H.mN()},
mN:function(){var u,t,s,r,q,p,o,n
$.j5=Object.create(null)
$.jb=Object.create(null)
H.mL()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kE.$1(q)
if(p!=null){o=H.mR(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mL:function(){var u,t,s,r,q,p,o=C.B()
o=H.bx(C.C,H.bx(C.D,H.bx(C.q,H.bx(C.q,H.bx(C.E,H.bx(C.F,H.bx(C.G(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kB=new H.j8(r)
$.ky=new H.j9(q)
$.kE=new H.ja(p)},
bx:function(a,b){return a(b)||b},
ll:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.f5("Illegal RegExp pattern ("+String(p)+")",a))},
kG:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mC:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kF:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jP:function(a,b,c){var u=H.mW(a,b,c)
return u},
mW:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kF(b),'g'),H.mC(c))},
hU:function hU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1:function h1(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.a=a},
jg:function jg(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
bF:function bF(){},
hF:function hF(){},
hx:function hx(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
hh:function hh(a){this.a=a},
E:function E(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fj:function fj(a){this.a=a},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bl:function bl(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ck:function(a){return a},
ao:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bA(b,a))},
lY:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mB(a,b,c))
return b},
bV:function bV(){},
cU:function cU(){},
bU:function bU(){},
cV:function cV(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
cW:function cW(){},
fY:function fY(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
mE:function(a){return J.k1(a?Object.keys(a):[],null)},
mZ:function(a){return v.mangledGlobalNames[a]},
mS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jL==null){H.mM()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kl("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jR()]
if(r!=null)return r
r=H.mQ(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.jR(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lj:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ji(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.k1(new Array(a),b)},
k1:function(a,b){return J.jr(H.b(a,[b]))},
jr:function(a){a.fixed$length=Array
return a},
lk:function(a,b){return J.cs(a,b)},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cL.prototype
return J.cK.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.cM.prototype
if(typeof a=="boolean")return J.fh.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.T)return a
return J.j7(a)},
b8:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.T)return a
return J.j7(a)},
j6:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.T)return a
return J.j7(a)},
mG:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.br.prototype
return a},
jI:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.br.prototype
return a},
em:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.T)return a
return J.j7(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).p(a,b)},
cr:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b8(a).h(a,b)},
kZ:function(a,b,c){return J.em(a).eF(a,b,c)},
l_:function(a,b,c,d){return J.em(a).eU(a,b,c,d)},
cs:function(a,b){return J.mG(a).au(a,b)},
jh:function(a,b){return J.b8(a).u(a,b)},
eo:function(a,b){return J.j6(a).A(a,b)},
l0:function(a,b){return J.j6(a).D(a,b)},
l1:function(a){return J.em(a).geY(a)},
ep:function(a){return J.N(a).gJ(a)},
aN:function(a){return J.j6(a).gL(a)},
aO:function(a){return J.b8(a).gl(a)},
jT:function(a){return J.j6(a).fJ(a)},
l2:function(a,b){return J.em(a).fN(a,b)},
l3:function(a,b,c){return J.jI(a).aR(a,b,c)},
l4:function(a){return J.jI(a).fX(a)},
a_:function(a){return J.N(a).i(a)},
a:function a(){},
fh:function fh(){},
cM:function cM(){},
cN:function cN(){},
h5:function h5(){},
br:function br(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
js:function js(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bM:function bM(){},
cL:function cL(){},
cK:function cK(){},
aX:function aX(){}},P={
lN:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mu()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bz(new P.iu(s),1)).observe(u,{childList:true})
return new P.it(s,u,t)}else if(self.setImmediate!=null)return P.mv()
return P.mw()},
lO:function(a){self.scheduleImmediate(H.bz(new P.iv(a),0))},
lP:function(a){self.setImmediate(H.bz(new P.iw(a),0))},
lQ:function(a){P.jA(C.h,a)},
jA:function(a,b){var u=C.d.U(a.a,1000)
return P.lW(u<0?0:u,b)},
kj:function(a,b){var u=C.d.U(a.a,1000)
return P.lX(u<0?0:u,b)},
lW:function(a,b){var u=new P.e5()
u.dv(a,b)
return u},
lX:function(a,b){var u=new P.e5()
u.dw(a,b)
return u},
nr:function(a){return new P.bu(a,1)},
lT:function(){return C.W},
lU:function(a){return new P.bu(a,3)},
m1:function(a,b){return new P.iS(a,[b])},
mn:function(){var u,t
for(;u=$.bw,u!=null;){$.cm=null
t=u.b
$.bw=t
if(t==null)$.cl=null
u.a.$0()}},
ms:function(){$.jF=!0
try{P.mn()}finally{$.cm=null
$.jF=!1
if($.bw!=null)$.jS().$1(P.kz())}},
mq:function(a){var u=new P.dq(a)
if($.bw==null){$.bw=$.cl=u
if(!$.jF)$.jS().$1(P.kz())}else $.cl=$.cl.b=u},
mr:function(a){var u,t,s=$.bw
if(s==null){P.mq(a)
$.cm=$.cl
return}u=new P.dq(a)
t=$.cm
if(t==null){u.b=s
$.bw=$.cm=u}else{u.b=t.b
$.cm=t.b=u
if(u.b==null)$.cl=u}},
ki:function(a,b){var u=$.ab
if(u===C.e)return P.jA(a,b)
return P.jA(a,u.eZ(b))},
lK:function(a,b){var u=$.ab
if(u===C.e)return P.kj(a,b)
return P.kj(a,u.cp(b,P.dh))},
kw:function(a,b,c,d,e){var u={}
u.a=d
P.mr(new P.j3(u,e))},
mo:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
mp:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
iu:function iu(a){this.a=a},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
e5:function e5(){this.c=0},
iW:function iW(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b){this.a=a
this.b=b},
bv:function bv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iS:function iS(a,b){this.a=a
this.$ti=b},
dq:function dq(a){this.a=a
this.b=null},
dc:function dc(){},
hA:function hA(){},
dh:function dh(){},
iZ:function iZ(){},
j3:function j3(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function(a,b){return new H.E([a,b])},
lm:function(a){return H.mF(a,new H.E([null,null]))},
bO:function(a){return new P.iF([a])},
jE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lV:function(a,b){var u=new P.dH(a,b)
u.c=a.e
return u},
lh:function(a,b,c){var u,t
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.Z.push(a)
try{P.m0(a,u)}finally{if(0>=$.Z.length)return H.f($.Z,-1)
$.Z.pop()}t=P.kg(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jq:function(a,b,c){var u,t
if(P.jG(a))return b+"..."+c
u=new P.ak(b)
$.Z.push(a)
try{t=u
t.a=P.kg(t.a,a,", ")}finally{if(0>=$.Z.length)return H.f($.Z,-1)
$.Z.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jG:function(a){var u,t
for(u=$.Z.length,t=0;t<u;++t)if(a===$.Z[t])return!0
return!1},
m0:function(a,b){var u,t,s,r,q,p,o,n=a.gL(a),m=0,l=0
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
k3:function(a,b){var u,t,s=P.bO(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.k)(a),++t)s.n(0,a[t])
return s},
k4:function(a){var u,t={}
if(P.jG(a))return"{...}"
u=new P.ak("")
try{$.Z.push(a)
u.a+="{"
t.a=!0
J.l0(a,new P.fu(t,u))
u.a+="}"}finally{if(0>=$.Z.length)return H.f($.Z,-1)
$.Z.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iF:function iF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a
this.c=this.b=null},
dH:function dH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fe:function fe(){},
fq:function fq(){},
u:function u(){},
ft:function ft(){},
fu:function fu(a,b){this.a=a
this.b=b},
S:function S(){},
iM:function iM(){},
dI:function dI(){},
eD:function eD(){},
eF:function eF(){},
eU:function eU(){},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fb:function fb(a){this.a=a},
i8:function i8(){},
i9:function i9(){},
iX:function iX(a){this.b=0
this.c=a},
lf:function(a){if(a instanceof H.bF)return a.i(0)
return"Instance of '"+H.d(H.bY(a))+"'"},
ln:function(a,b,c){var u,t,s=J.lj(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jv:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aN(a);u.t();)t.push(u.gB(u))
if(b)return t
return J.jr(t)},
jz:function(a){var u,t=a.length,s=P.jy(0,null,t)
if(typeof s!=="number")return s.al()
u=s<t
return H.lz(u?C.a.dc(a,0,s):a)},
lB:function(a){return new H.fi(a,H.ll(a,!1,!0,!1,!1,!1))},
kg:function(a,b,c){var u=J.aN(b)
if(!u.t())return a
if(c.length===0){do a+=H.d(u.gB(u))
while(u.t())}else{a+=H.d(u.gB(u))
for(;u.t();)a=a+c+H.d(u.gB(u))}return a},
ku:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kY().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.f4(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jx(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lc:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ld:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cB:function(a){if(a>=10)return""+a
return"0"+a},
jZ:function(a){return new P.aT(1000*a)},
jp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lf(a)},
l5:function(a){return new P.a7(!1,null,null,a)},
ji:function(a,b,c){return new P.a7(!0,a,b,c)},
d3:function(a,b){return new P.bo(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.bo(b,c,!0,a,d,"Invalid value")},
jy:function(a,b,c){var u
if(typeof a!=="number")return H.V(a)
if(0<=a){if(typeof c!=="number")return H.V(c)
u=a>c}else u=!0
if(u)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.V(c)
u=b>c}else u=!0
if(u)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
kc:function(a,b){if(typeof a!=="number")return a.al()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.aO(b):e
return new P.fd(u,!0,a,c,"Index out of range")},
v:function(a){return new P.i6(a)},
kl:function(a){return new P.i3(a)},
kf:function(a){return new P.c_(a)},
aR:function(a){return new P.eE(a)},
r:function(a){return new P.dz(a)},
jO:function(a){H.mS(a)},
ap:function ap(){},
aS:function aS(a,b){this.a=a
this.b=b},
J:function J(){},
aT:function aT(a){this.a=a},
eQ:function eQ(){},
eR:function eR(){},
bg:function bg(){},
cZ:function cZ(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fd:function fd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i6:function i6(a){this.a=a},
i3:function i3(a){this.a=a},
c_:function c_(a){this.a=a},
eE:function eE(a){this.a=a},
h4:function h4(){},
da:function da(){},
eK:function eK(a){this.a=a},
dz:function dz(a){this.a=a},
f5:function f5(a,b){this.a=a
this.b=b},
f7:function f7(){},
w:function w(){},
j:function j(){},
fg:function fg(){},
a9:function a9(){},
bP:function bP(){},
b1:function b1(){},
a6:function a6(){},
T:function T(){},
m:function m(){},
ak:function ak(a){this.a=a},
mA:function(a){var u,t=J.N(a)
if(!!t.$iaV){u=t.gcr(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ea(a.data,a.height,a.width)},
mz:function(a){if(a instanceof P.ea)return{data:a.a,height:a.b,width:a.c}
return a},
aH:function(a){var u,t,s,r,q
if(a==null)return
u=P.k2(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
my:function(a){var u={}
a.D(0,new P.j4(u))
return u},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
f1:function f1(a,b){this.a=a
this.b=b},
f2:function f2(){},
f3:function f3(){},
iH:function iH(){},
aa:function aa(){},
aZ:function aZ(){},
fm:function fm(){},
b2:function b2(){},
h2:function h2(){},
h9:function h9(){},
bZ:function bZ(){},
hB:function hB(){},
i:function i(){},
b3:function b3(){},
hT:function hT(){},
dF:function dF(){},
dG:function dG(){},
dQ:function dQ(){},
dR:function dR(){},
e1:function e1(){},
e2:function e2(){},
e8:function e8(){},
e9:function e9(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(a){this.a=a},
ex:function ex(){},
ba:function ba(){},
h3:function h3(){},
dr:function dr(){},
d5:function d5(){},
hw:function hw(){},
dY:function dY(){},
dZ:function dZ(){}},W={
jU:function(){var u=document.createElement("a")
return u},
jl:function(){var u=document.createElement("canvas")
return u},
le:function(a,b,c){var u=document.body,t=(u&&C.m).a_(u,a,b,c)
t.toString
u=new H.c8(new W.U(t),new W.eT(),[W.A])
return u.gam(u)},
jn:function(a){return"wheel"},
bH:function(a){var u,t,s,r="element tag unavailable"
try{u=J.em(a)
t=u.gcZ(a)
if(typeof t==="string")r=u.gcZ(a)}catch(s){H.aq(s)}return r},
iE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ks:function(a,b,c,d){var u=W.iE(W.iE(W.iE(W.iE(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
O:function(a,b,c,d){var u=W.kx(new W.iC(c),W.h)
if(u!=null&&!0)J.l_(a,b,u,!1)
return new W.iB(a,b,u,!1)},
kr:function(a){var u=W.jU(),t=window.location
u=new W.ca(new W.iL(u,t))
u.dq(a)
return u},
lR:function(a,b,c,d){return!0},
lS:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kt:function(){var u=P.m,t=P.k3(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.iT(t,P.bO(u),P.bO(u),P.bO(u),null)
t.du(null,new H.fv(C.j,new W.iU(),[H.ac(C.j,0),u]),s,null)
return t},
kx:function(a,b){var u=$.ab
if(u===C.e)return a
return u.cp(a,b)},
o:function o(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cv:function cv(){},
bb:function bb(){},
bd:function bd(){},
aP:function aP(){},
eG:function eG(){},
D:function D(){},
bG:function bG(){},
eH:function eH(){},
a3:function a3(){},
ae:function ae(){},
eI:function eI(){},
eJ:function eJ(){},
eM:function eM(){},
a8:function a8(){},
eN:function eN(){},
cD:function cD(){},
cE:function cE(){},
eO:function eO(){},
eP:function eP(){},
iy:function iy(a,b){this.a=a
this.b=b},
L:function L(){},
eT:function eT(){},
h:function h(){},
e:function e(){},
at:function at(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
au:function au(){},
fa:function fa(){},
bI:function bI(){},
aV:function aV(){},
bJ:function bJ(){},
bk:function bk(){},
fr:function fr(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(a){this.a=a},
fO:function fO(){},
fP:function fP(a){this.a=a},
ax:function ax(){},
fQ:function fQ(){},
ag:function ag(){},
U:function U(a){this.a=a},
A:function A(){},
cX:function cX(){},
az:function az(){},
h7:function h7(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hi:function hi(){},
aA:function aA(){},
ht:function ht(){},
aB:function aB(){},
hu:function hu(){},
aC:function aC(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
al:function al(){},
dd:function dd(){},
hC:function hC(){},
hD:function hD(){},
c0:function c0(){},
aD:function aD(){},
am:function am(){},
hG:function hG(){},
hH:function hH(){},
hN:function hN(){},
aE:function aE(){},
bp:function bp(){},
hR:function hR(){},
hS:function hS(){},
b4:function b4(){},
i7:function i7(){},
iq:function iq(){},
b6:function b6(){},
c9:function c9(){},
iz:function iz(){},
dt:function dt(){},
iD:function iD(){},
dN:function dN(){},
iP:function iP(){},
iQ:function iQ(){},
ix:function ix(){},
iA:function iA(a){this.a=a},
iB:function iB(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iC:function iC(a){this.a=a},
ca:function ca(a){this.a=a},
G:function G(){},
cY:function cY(a){this.a=a},
h_:function h_(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(){},
iN:function iN(){},
iO:function iO(){},
iT:function iT(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iU:function iU(){},
iR:function iR(){},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ay:function ay(){},
iL:function iL(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
iY:function iY(a){this.a=a},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dA:function dA(){},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
cf:function cf(){},
cg:function cg(){},
dW:function dW(){},
dX:function dX(){},
e0:function e0(){},
e3:function e3(){},
e4:function e4(){},
ch:function ch(){},
ci:function ci(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){}},K={
I:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aD(a,0)
t=C.b.aD(b,0)
if(u>t){s=t
t=u
u=s}return new K.ha(u,t)},
q:function(a){var u=new K.hj()
u.dl(a)
return u},
ar:function ar(){},
cJ:function cJ(){},
b0:function b0(){},
Y:function Y(){this.a=null},
ha:function ha(a,b){this.a=a
this.b=b},
hj:function hj(){this.a=null}},L={
hP:function(){var u=new L.hO(),t=P.m
u.a=new H.E([t,L.db])
u.b=new H.E([t,L.dj])
u.c=P.bO(t)
return u},
db:function db(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function di(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(a){this.b=a
this.c=null},
hO:function hO(){var _=this
_.d=_.c=_.b=_.a=null},
dk:function dk(a){this.b=a
this.a=this.c=null}},O={
jm:function(a){var u=new O.be([a])
u.bU(a)
return u},
be:function be(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bS:function bS(){this.b=this.a=null},
cS:function cS(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fx:function fx(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bR:function bR(){},
fy:function fy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
af:function af(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fA:function fA(){var _=this
_.e=_.d=_.c=_.b=null},
fB:function fB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
de:function de(){}},E={
kp:function(){if(J.jh(window.navigator.vendor,"Google"))return C.z
if(J.jh(window.navigator.userAgent,"Firefox"))return C.n
var u=window.navigator.appVersion
if(J.b8(u).u(u,"Trident")||C.b.u(u,"Edge"))return C.o
if(J.jh(window.navigator.appName,"Microsoft"))return C.o
return C.A},
kq:function(){var u=window.navigator.appVersion
if(J.b8(u).u(u,"Win"))return C.S
if(C.b.u(u,"Mac"))return C.u
if(C.b.u(u,"Linux"))return C.T
return C.U},
lD:function(a,b){var u=new E.hb(a)
u.dk(a,b)
return u},
lJ:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibd)return E.kh(a,!0,!0,!0,!1)
u=W.jl()
t=u.style
t.width="100%"
t.height="100%"
s.gcq(a).n(0,u)
return E.kh(u,!0,!0,!0,!1)},
kh:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dg(),o=C.r.bM(a,"webgl2",P.lm(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.t(P.r("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.lD(o,a)
u=new T.hK(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dn(a)
t=new X.fl()
t.d=P.bO(P.w)
u.b=t
t=new X.fR(u)
t.f=0
t.r=V.d0()
t.x=V.d0()
t.ch=t.Q=1
u.c=t
t=new X.fs(u)
t.r=0
t.x=V.d0()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hQ(u)
t.f=V.d0()
t.r=V.d0()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dc,P.T]])
t=$.eV
u.Q=(t==null?$.eV=new E.dy(E.kp(),E.kq()):t).a===C.n?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.O(r,"contextmenu",u.ge2(),!1))
u.z.push(W.O(a,"focus",u.ge8(),!1))
u.z.push(W.O(a,"blur",u.gdX(),!1))
u.z.push(W.O(r,"keyup",u.gec(),!1))
u.z.push(W.O(r,"keydown",u.gea(),!1))
u.z.push(W.O(a,"mousedown",u.geg(),!1))
u.z.push(W.O(a,"mouseup",u.gek(),!1))
u.z.push(W.O(a,q,u.gei(),!1))
s=u.z
W.jn(a)
W.jn(a)
s.push(W.O(a,W.jn(a),u.gem(),!1))
u.z.push(W.O(r,q,u.ge4(),!1))
u.z.push(W.O(r,"mouseup",u.ge6(),!1))
u.z.push(W.O(r,"pointerlockchange",u.geo(),!1))
u.z.push(W.O(a,"touchstart",u.geA(),!1))
u.z.push(W.O(a,"touchend",u.gew(),!1))
u.z.push(W.O(a,"touchmove",u.gey(),!1))
p.ch=!0
p.cx=!1
p.cy=new P.aS(Date.now(),!1)
p.db=0
p.ca()
return p},
ez:function ez(){},
aU:function aU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bc:function bc(a){this.b=a},
bm:function bm(a){this.b=a},
dy:function dy(a,b){this.a=a
this.b=b},
hb:function hb(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
dg:function dg(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.f=_.e=_.d=_.c=_.b=null},
hM:function hM(a){this.a=a}},Z={
jD:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ck(c)),35044)
a.bindBuffer(b,null)
return new Z.dp(b,u)},
a5:function(a){return new Z.aF(a)},
dp:function dp(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ir:function ir(a){this.a=a},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a}},D={
a4:function(){var u=new D.bh()
u.d=0
return u},
eC:function eC(){},
bh:function bh(){var _=this
_.d=_.c=_.b=_.a=null},
eX:function eX(a){this.a=a},
eY:function eY(a){this.a=a},
W:function W(){this.b=null},
bK:function bK(){this.b=null},
bL:function bL(){this.b=null},
F:function F(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ey:function ey(){},
bf:function bf(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
X:function X(){},
cP:function cP(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h8:function h8(){},
hv:function hv(){}},X={cy:function cy(a,b){this.a=a
this.b=b},cO:function cO(a,b){this.a=a
this.b=b},fl:function fl(){this.d=this.b=this.a=null},fs:function fs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},fR:function fR(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hQ:function hQ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dn:function dn(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lg:function(a){var u=new X.f6(),t=V.by(1)
u.a=new V.aQ(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kd
if(t==null){t=V.lC(0,0,1,1)
$.kd=t}u.r=t
return u},
jk:function jk(){},
f6:function f6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(){}},V={
by:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.d5(a-b,u)
return(a<0?a+u:a)+b},
y:function(a,b,c){if(a==null)return C.b.a1("null",c)
return C.b.a1(C.c.d0(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bB:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.k)(a),++s){r=V.y(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a1(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jN:function(a){return C.c.fU(Math.pow(2,C.N.bB(Math.log(H.mx(a))/Math.log(2))))},
jw:function(){var u=$.k6
return u==null?$.k6=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k5:function(a,b,c){var u=c.K(0,Math.sqrt(c.M(c))),t=b.aH(u),s=t.K(0,Math.sqrt(t.M(t))),r=u.aH(s),q=new V.z(a.a,a.b,a.c),p=s.aA(0).M(q),o=r.aA(0).M(q),n=u.aA(0).M(q)
return V.aw(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
d0:function(){var u=$.k9
return u==null?$.k9=new V.ah(0,0):u},
ka:function(){var u=$.ai
return u==null?$.ai=new V.a0(0,0,0):u},
lC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
c7:function(){var u=$.kn
return u==null?$.kn=new V.z(0,0,0):u},
lL:function(){var u=$.ia
return u==null?$.ia=new V.z(-1,0,0):u},
jC:function(){var u=$.ib
return u==null?$.ib=new V.z(0,1,0):u},
lM:function(){var u=$.ic
return u==null?$.ic=new V.z(0,0,1):u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a){this.a=a},
cT:function cT(a,b,c,d,e,f,g,h,i){var _=this
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
ah:function ah(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function(a){P.lK(C.K,new V.je(a))},
lF:function(a){var u=new V.ho()
u.dn(a,!0)
return u},
cz:function cz(){},
je:function je(a){this.a=a},
eL:function eL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f8:function f8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ho:function ho(){this.b=this.a=null},
hq:function hq(a){this.a=a},
hp:function hp(a){this.a=a},
hr:function hr(a){this.a=a}},U={
jY:function(a){var u=new U.cA()
u.a=a
return u},
cA:function cA(){this.b=this.a=null},
fS:function fS(){},
d6:function d6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cF:function cF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lp:function(a,b){var u=a.aK,t=new A.fw(b,u)
t.dm(b,u)
t.dj(a,b)
return t},
lq:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.ga6(a3)+a4.ga6(a4)+a5.ga6(a5)+a6.ga6(a6)+a7.ga6(a7)+a8.ga6(a8)+a9.ga6(a9)+b0.ga6(b0)+b1.ga6(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.k)(b2),++t)c+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.k)(b3),++t)c+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.k)(b4),++t)c+="_"+H.d(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.k)(b5),++t)c+="_"+H.d(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.aL()
if(j){u=$.aK()
d=new Z.aF(d.a|u.a)}if(i){u=$.aJ()
d=new Z.aF(d.a|u.a)}if(h){u=$.aM()
d=new Z.aF(d.a|u.a)}if(g){u=$.aI()
d=new Z.aF(d.a|u.a)}return new A.fz(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
j1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
j2:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.j1(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.en(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
m6:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j1(b,t,"emission")
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
m2:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j2(b,t,"ambient")
b.a+="\n"},
m4:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"diffuse")
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
m7:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"invDiffuse")
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
md:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j2(b,t,"specular")
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
m9:function(a,b){var u,t,s
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
mb:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j1(b,t,"reflect")
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
mc:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j1(b,t,"refract")
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
m3:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.en(t)
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
m5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.en(t)
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
ma:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.en(t)
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
me:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.en(t)
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.eV
if(u==null)u=$.eV=new E.dy(E.kp(),E.kq())
r=c.a
if(u.b===C.u){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
m8:function(a,b){var u,t
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
mf:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ak("")
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
A.m6(a,j)
A.m2(a,j)
A.m4(a,j)
A.m7(a,j)
A.md(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mb(a,j)
A.mc(a,j)}A.m9(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.k)(q),++o)A.m3(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.k)(q),++o)A.m5(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.k)(q),++o)A.ma(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.k)(q),++o)A.me(a,q[o],j)
A.m8(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.k)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.k)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.k)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.k)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mg:function(a,b){var u,t,s
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
mi:function(a,b){var u
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
mh:function(a,b){var u
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
mk:function(a,b){var u,t
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
ml:function(a,b){var u,t
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
mj:function(a,b){var u
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
mm:function(a,b){var u
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
en:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.a7(a,1)},
jB:function(a,b,c,d,e){var u=new A.hX(a,c,e)
u.f=d
P.ln(d,0,P.w)
return u},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a,b){var _=this
_.h7=_.ct=_.aZ=_.aK=_.av=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hf=_.he=_.hd=_.bA=_.bz=_.by=_.bx=_.bw=_.bv=_.bu=_.bt=_.hc=_.cH=_.cG=_.hb=_.cF=_.cE=_.cD=_.ha=_.cC=_.cB=_.cA=_.h9=_.cz=_.cw=_.h8=_.cv=_.cu=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cu:function cu(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
c2:function c2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c3:function c3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c5:function c5(a,b,c,d,e,f,g,h,i,j){var _=this
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
c6:function c6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d7:function d7(){},
dl:function dl(){},
i1:function i1(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
c4:function c4(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
bq:function bq(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j0:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cj:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.j0(i)
l=F.j0(h)
k=F.mX(d,a0,new F.j_(j,F.j0(g),F.j0(f),l,m,c),b)
if(k!=null)a.bF(k)},
mX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.ke()
t=H.b([],[F.bt])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cj(new V.aQ(p,0,0,1),new V.ah(r,1))
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
o=k.cj(new V.aQ(j,i,h,1),new V.ah(r,m))
c.$3(o,r,n)
t.push(o.bs(d))}}u.d.eV(a+1,b+1,t)
return u},
cG:function(a,b,c){var u=new F.bi(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.eN(a)
u.eO(b)
u.eP(c)
u.a.a.d.b.push(u)
u.a.a.S()
return u},
ke:function(){var u=new F.hk(),t=new F.id(u)
t.b=!1
t.c=H.b([],[F.bt])
u.a=t
t=new F.hn(u)
t.b=H.b([],[F.bW])
u.b=t
t=new F.hm(u)
t.b=H.b([],[F.bN])
u.c=t
t=new F.hl(u)
t.b=H.b([],[F.bi])
u.d=t
u.e=null
return u},
ko:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bt(),r=new F.im()
r.b=H.b([],[F.bW])
s.b=r
r=new F.ii()
u=[F.bN]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ie()
u=[F.bi]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kU()
s.e=0
r=$.aL()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aK().a)!==0?e:t
s.x=(u&$.aJ().a)!==0?b:t
s.y=(u&$.aM().a)!==0?f:t
s.z=(u&$.b9().a)!==0?g:t
s.Q=(u&$.kV().a)!==0?c:t
s.ch=(u&$.bC().a)!==0?i:0
s.cx=(u&$.aI().a)!==0?a:t
return s},
j_:function j_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bi:function bi(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eZ:function eZ(){},
hs:function hs(){},
bN:function bN(){this.b=this.a=null},
fn:function fn(){},
hW:function hW(){},
bW:function bW(){this.a=null},
hk:function hk(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hl:function hl(a){this.a=a
this.b=null},
hm:function hm(a){this.a=a
this.b=null},
hn:function hn(a){this.a=a
this.b=null},
bt:function bt(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a},
io:function io(a){this.a=a},
id:function id(a){this.a=a
this.c=this.b=null},
ie:function ie(){this.d=this.c=this.b=null},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(){this.c=this.b=null},
ik:function ik(){},
ij:function ij(){},
il:function il(){},
h0:function h0(){},
im:function im(){this.b=null},
kC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.lF("Test 005"),c=W.jl()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
u=[P.m]
d.ck(H.b(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."],u))
d.ck(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(f)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lJ(t,!0,!0,!0,!1)
r=new E.aU()
r.a=""
r.b=!0
u=E.aU
q=O.jm(u)
r.y=q
q.b6(r.gfq(),r.gfu())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbP(0,e)
r.saN(e)
p=F.ke()
F.cj(p,e,e,1,1,1,0,0,1)
F.cj(p,e,e,1,1,0,1,0,3)
F.cj(p,e,e,1,1,0,0,1,2)
F.cj(p,e,e,1,1,-1,0,0,0)
F.cj(p,e,e,1,1,0,-1,0,0)
F.cj(p,e,e,1,1,0,0,-1,3)
p.at()
p.fp(new F.ij(),new F.h0())
r.sbP(0,p)
q=new U.d6()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.sd2(0)
q.scT(0,0)
q.scY(0)
o=q.d
if(!(Math.abs(o-0.1)<$.B().a)){q.d=0.1
o=new D.F("deltaYaw",o,0.1)
o.b=!0
q.aq(o)}o=q.e
if(!(Math.abs(o-0.21)<$.B().a)){q.e=0.21
o=new D.F("deltaPitch",o,0.21)
o.b=!0
q.aq(o)}o=q.f
if(!(Math.abs(o-0.32)<$.B().a)){q.f=0.32
o=new D.F("deltaRoll",o,0.32)
o.b=!0
q.aq(o)}r.saN(q)
n=s.f.bE("../resources/CtrlPnlColor.png")
m=new O.cS()
q=O.jm(V.av)
m.e=q
q.b6(m.gdT(),m.gdV())
q=new O.af(m,"emission")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.f=q
q=new O.af(m,"ambient")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.r=q
q=new O.af(m,"diffuse")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.x=q
q=new O.af(m,"invDiffuse")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.y=q
q=new O.fC(m,"specular")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
q.ch=100
m.z=q
q=new O.fy(m,"bump")
q.c=new A.Q(!1,!1,!1)
m.Q=q
m.ch=null
q=new O.af(m,"reflect")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
m.cx=q
q=new O.fB(m,"refract")
q.c=new A.Q(!1,!1,!1)
q.f=new V.P(0,0,0)
q.ch=1
m.cy=q
q=new O.fx(m,"alpha")
q.c=new A.Q(!1,!1,!1)
q.f=1
m.db=q
q=new D.cP()
q.bU(D.X)
q.e=H.b([],[D.ey])
q.f=H.b([],[D.bf])
q.r=H.b([],[D.h8])
q.x=H.b([],[D.hv])
q.z=q.y=null
q.bO(q.gdR(),q.ger(),q.geu())
m.dx=q
o=new O.fA()
o.b=new V.aQ(0,0,0,0)
o.c=1
o.d=10
o.e=!1
m.dy=o
o=q.y
q=o==null?q.y=D.a4():o
q.n(0,m.geH())
q=m.dx
o=q.z
q=o==null?q.z=D.a4():o
q.n(0,m.gaT())
m.fr=null
q=m.dx
l=V.jC()
o=U.jY(V.k5(V.ka(),l,new V.z(1,-1,-3)))
k=new V.P(1,1,1)
j=new D.bf()
j.c=new V.P(1,1,1)
j.a=V.lM()
j.d=V.jC()
j.e=V.lL()
i=j.b
j.b=o
o.gw().n(0,j.gdr())
o=new D.F("mover",i,j.b)
o.b=!0
j.ac(o)
if(!j.c.p(0,k)){i=j.c
j.c=k
o=new D.F("color",i,k)
o.b=!0
j.ac(o)}q.n(0,j)
m.f.sb2(s.f.bE("../resources/CtrlPnlEmission.png"))
m.r.saG(0,new V.P(V.by(0.2),V.by(0.2),V.by(0.2)))
m.x.saG(0,new V.P(V.by(0.8),V.by(0.8),V.by(0.8)))
m.r.sb2(n)
m.x.sb2(n)
m.z.sb2(s.f.bE("../resources/CtrlPnlSpecular.png"))
q=m.z
q.bk(new A.Q(!0,q.c.b,!1))
q.cc(10)
q=new M.cF()
q.a=!0
u=O.jm(u)
q.e=u
u.b6(q.gdZ(),q.ge0())
q.y=q.x=q.r=q.f=null
h=X.lg(e)
g=new X.d_()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saN(e)
u=g.c
if(!(Math.abs(u-1.0471975511965976)<$.B().a)){g.c=1.0471975511965976
u=new D.F("fov",u,1.0471975511965976)
u.b=!0
g.ao(u)}u=g.d
if(!(Math.abs(u-0.1)<$.B().a)){g.d=0.1
u=new D.F("near",u,0.1)
u.b=!0
g.ao(u)}u=g.e
if(!(Math.abs(u-2000)<$.B().a)){g.e=2000
u=new D.F("far",u,2000)
u.b=!0
g.ao(u)}u=q.b
if(u!==g){if(u!=null)u.gw().F(0,q.ga8())
i=q.b
q.b=g
g.gw().n(0,q.ga8())
u=new D.F("camera",i,q.b)
u.b=!0
q.ad(u)}u=q.c
if(u!==h){if(u!=null)u.gw().F(0,q.ga8())
i=q.c
q.c=h
h.gw().n(0,q.ga8())
u=new D.F("target",i,q.c)
u.b=!0
q.ad(u)}q.sd_(e)
q.sd_(m)
q.e.n(0,r)
q.b.saN(U.jY(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==q){if(u!=null)u.gw().F(0,s.gbV())
s.d=q
q.gw().n(0,s.gbV())
s.bW()}u=s.Q
if(u==null)u=s.Q=D.a4()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.W]}]):q
u.push(new F.jc(d,m))
V.mV(s)},
jc:function jc(a,b){this.a=a
this.b=b}},T={df:function df(){},hI:function hI(){},hJ:function hJ(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hK:function hK(a){var _=this
_.a=a
_.e=_.d=_.b=null},hL:function hL(a,b,c,d,e,f,g){var _=this
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
H.jt.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.bX(a)},
i:function(a){return"Instance of '"+H.d(H.bY(a))+"'"}}
J.fh.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iap:1}
J.cM.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.cN.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.h5.prototype={}
J.br.prototype={}
J.aY.prototype={
i:function(a){var u=a[$.kJ()]
if(u==null)return this.dg(a)
return"JavaScript function for "+H.d(J.a_(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aW.prototype={
bI:function(a,b){if(!!a.fixed$length)H.t(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.d3(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.t(P.v("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
Z:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.k)(b),++t)a.push(b[t])},
D:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aR(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fn:function(a){return this.k(a,"")},
fj:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aR(a))}throw H.c(H.ff())},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dc:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aj(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aj(c,b,u,"end",null))
if(b===c)return H.b([],[H.ac(a,0)])
return H.b(a.slice(b,c),[H.ac(a,0)])},
gfi:function(a){if(a.length>0)return a[0]
throw H.c(H.ff())},
gb0:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ff())},
cl:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aR(a))}return!1},
aC:function(a,b){if(!!a.immutable$list)H.t(P.v("sort"))
H.lI(a,b==null?J.m_():b)},
da:function(a){return this.aC(a,null)},
u:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.jq(a,"[","]")},
gL:function(a){return new J.a2(a,a.length)},
gJ:function(a){return H.bX(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ji(b,u,null))
if(b<0)throw H.c(P.aj(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bA(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bA(a,b))
a[b]=c},
$ip:1,
$ij:1}
J.js.prototype={}
J.a2.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.k(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bM.prototype={
au:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aG(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb_(b)
if(this.gb_(a)===u)return 0
if(this.gb_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb_:function(a){return a===0?1/a<0:a<0},
fU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bB:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
d0:function(a,b){var u
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb_(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
d5:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
di:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cd(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.cd(a,b)},
cd:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.eT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eT:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia6:1}
J.cL.prototype={$iw:1}
J.cK.prototype={}
J.aX.prototype={
br:function(a,b){if(b<0)throw H.c(H.bA(a,b))
if(b>=a.length)H.t(H.bA(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.c(H.bA(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.c(P.ji(b,null,null))
return a+b},
b7:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aR:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d3(b,null))
if(b>c)throw H.c(P.d3(b,null))
if(c>a.length)throw H.c(P.d3(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.aR(a,b,null)},
fX:function(a){return a.toLowerCase()},
O:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a1:function(a,b){var u=b-a.length
if(u<=0)return a
return this.O(" ",u)+a},
f2:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.aj(c,0,u,null,null))
return H.kG(a,b,c)},
u:function(a,b){return this.f2(a,b,0)},
au:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aG(b))
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
$im:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.br(this.a,b)},
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$aj:function(){return[P.w]}}
H.p.prototype={}
H.cQ.prototype={
gL:function(a){return new H.b_(this,this.gl(this))},
b5:function(a,b){return this.df(0,b)}}
H.b_.prototype={
gB:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.b8(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aR(s))
u=t.c
if(typeof q!=="number")return H.V(q)
if(u>=q){t.d=null
return!1}t.d=r.A(s,u);++t.c
return!0}}
H.bQ.prototype={
gL:function(a){return new H.cR(J.aN(this.a),this.b)},
gl:function(a){return J.aO(this.a)},
A:function(a,b){return this.b.$1(J.eo(this.a,b))},
$aj:function(a,b){return[b]}}
H.eS.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cR.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.fv.prototype={
gl:function(a){return J.aO(this.a)},
A:function(a,b){return this.b.$1(J.eo(this.a,b))},
$ap:function(a,b){return[b]},
$acQ:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.c8.prototype={
gL:function(a){return new H.is(J.aN(this.a),this.b)}}
H.is.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.cH.prototype={}
H.i5.prototype={
m:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.dm.prototype={}
H.hU.prototype={
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
H.h1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fk.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.i4.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jg.prototype={
$1:function(a){if(!!J.N(a).$ibg)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.e_.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bF.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.co(t==null?"unknown":t)+"'"},
gh0:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hF.prototype={}
H.hx.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.bD.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bD))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.bX(this.a)
else u=typeof t!=="object"?J.ep(t):H.bX(t)
return(u^H.bX(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bY(u))+"'")}}
H.eB.prototype={
i:function(a){return this.a}}
H.hh.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.E.prototype={
gl:function(a){return this.a},
gW:function(a){return new H.bl(this,[H.ac(this,0)])},
gh_:function(a){var u=this,t=H.ac(u,0)
return H.lo(new H.bl(u,[t]),new H.fj(u),t,H.ac(u,1))},
f3:function(a,b){var u=this.b
if(u==null)return!1
return this.dI(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aU(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aU(r,b)
s=t==null?null:t.b
return s}else return q.fm(b)},
fm:function(a){var u,t,s=this.d
if(s==null)return
u=this.c6(s,J.ep(a)&0x3ffffff)
t=this.cI(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bZ(u==null?o.b=o.bf():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bZ(t==null?o.c=o.bf():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bf()
r=J.ep(b)&0x3ffffff
q=o.c6(s,r)
if(q==null)o.bl(s,r,[o.bg(b,c)])
else{p=o.cI(q,b)
if(p>=0)q[p].b=c
else q.push(o.bg(b,c))}}},
D:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aR(u))
t=t.c}},
bZ:function(a,b,c){var u=this.aU(a,b)
if(u==null)this.bl(a,b,this.bg(b,c))
else u.b=c},
dP:function(){this.r=this.r+1&67108863},
bg:function(a,b){var u,t=this,s=new H.fo(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dP()
return s},
cI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.k4(this)},
aU:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
bl:function(a,b,c){a[b]=c},
dM:function(a,b){delete a[b]},
dI:function(a,b){return this.aU(a,b)!=null},
bf:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bl(t,u,t)
this.dM(t,u)
return t}}
H.fj.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ac(u,1),args:[H.ac(u,0)]}}}
H.fo.prototype={}
H.bl.prototype={
gl:function(a){return this.a.a},
gL:function(a){var u=this.a,t=new H.fp(u,u.r)
t.c=u.e
return t}}
H.fp.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aR(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j8.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.j9.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ja.prototype={
$1:function(a){return this.a(a)}}
H.fi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bV.prototype={}
H.cU.prototype={
gl:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bU.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.J]},
$au:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cV.prototype={
m:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]}}
H.fT.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fU.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fW.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.cW.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.fY.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.cb.prototype={}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
P.iu.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.it.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iv.prototype={
$0:function(){this.a.$0()}}
P.iw.prototype={
$0:function(){this.a.$0()}}
P.e5.prototype={
dv:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bz(new P.iW(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dw:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bz(new P.iV(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$idh:1}
P.iW.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iV.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.di(u,q)}s.c=r
t.d.$1(s)}}
P.bu.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bv.prototype={
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
if(t instanceof P.bu){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aN(u)
if(!!r.$ibv){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iS.prototype={
gL:function(a){return new P.bv(this.a())}}
P.dq.prototype={}
P.dc.prototype={}
P.hA.prototype={}
P.dh.prototype={}
P.iZ.prototype={}
P.j3.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cZ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iI.prototype={
fP:function(a){var u,t,s,r=null
try{if(C.e===$.ab){a.$0()
return}P.mo(r,r,this,a)}catch(s){u=H.aq(s)
t=H.jK(s)
P.kw(r,r,this,u,t)}},
fQ:function(a,b){var u,t,s,r=null
try{if(C.e===$.ab){a.$1(b)
return}P.mp(r,r,this,a,b)}catch(s){u=H.aq(s)
t=H.jK(s)
P.kw(r,r,this,u,t)}},
fR:function(a,b){return this.fQ(a,b,null)},
eZ:function(a){return new P.iJ(this,a)},
cp:function(a,b){return new P.iK(this,a,b)}}
P.iJ.prototype={
$0:function(){return this.a.fP(this.b)}}
P.iK.prototype={
$1:function(a){return this.a.fR(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iF.prototype={
gL:function(a){var u=new P.dH(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
u:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dG(b)
return t}},
dG:function(a){var u=this.d
if(u==null)return!1
return this.bd(this.c5(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.c_(u==null?s.b=P.jE():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.c_(t==null?s.c=P.jE():t,b)}else return s.dA(0,b)},
dA:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jE()
u=s.c1(b)
t=r[u]
if(t==null)r[u]=[s.ba(b)]
else{if(s.bd(t,b)>=0)return!1
t.push(s.ba(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eD(this.c,b)
else return this.eC(0,b)},
eC:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c5(r,b)
t=s.bd(u,b)
if(t<0)return!1
s.cf(u.splice(t,1)[0])
return!0},
c_:function(a,b){if(a[b]!=null)return!1
a[b]=this.ba(b)
return!0},
eD:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cf(u)
delete a[b]
return!0},
c0:function(){this.r=1073741823&this.r+1},
ba:function(a){var u,t=this,s=new P.iG(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.c0()
return s},
cf:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.c0()},
c1:function(a){return J.ep(a)&1073741823},
c5:function(a,b){return a[this.c1(b)]},
bd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.iG.prototype={}
P.dH.prototype={
gB:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aR(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fe.prototype={}
P.fq.prototype={$ip:1,$ij:1}
P.u.prototype={
gL:function(a){return new H.b_(a,this.gl(a))},
A:function(a,b){return this.h(a,b)},
fW:function(a,b){var u,t,s=this,r=H.b([],[H.mH(s,a,"u",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.V(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
fV:function(a){return this.fW(a,!0)},
i:function(a){return P.jq(a,"[","]")}}
P.ft.prototype={}
P.fu.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.S.prototype={
D:function(a,b){var u,t
for(u=J.aN(this.gW(a));u.t();){t=u.gB(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aO(this.gW(a))},
i:function(a){return P.k4(a)}}
P.iM.prototype={
Z:function(a,b){var u
for(u=J.aN(b);u.t();)this.n(0,u.gB(u))},
i:function(a){return P.jq(this,"{","}")},
A:function(a,b){var u,t,s
P.kc(b,"index")
for(u=P.lV(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
$ip:1,
$ij:1}
P.dI.prototype={}
P.eD.prototype={}
P.eF.prototype={}
P.eU.prototype={}
P.fc.prototype={
i:function(a){return this.a}}
P.fb.prototype={
dJ:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(c>b)q.a+=J.l3(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i8.prototype={}
P.i9.prototype={
f4:function(a){var u,t,s,r=P.jy(0,null,a.length)
if(typeof r!=="number")return r.T()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iX(t)
if(s.dO(a,0,r)!==r)s.cg(C.b.br(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lY(0,s.b,t.length)))}}
P.iX.prototype={
cg:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dO:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.br(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aD(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cg(r,C.b.aD(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aS.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a&&!0},
au:function(a,b){return C.d.au(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.d.aW(u,30))&1073741823},
i:function(a){var u=this,t=P.lc(H.ly(u)),s=P.cB(H.lw(u)),r=P.cB(H.ls(u)),q=P.cB(H.lt(u)),p=P.cB(H.lv(u)),o=P.cB(H.lx(u)),n=P.ld(H.lu(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aT.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
au:function(a,b){return C.d.au(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eR(),q=this.a
if(q<0)return"-"+new P.aT(0-q).i(0)
u=r.$1(C.d.U(q,6e7)%60)
t=r.$1(C.d.U(q,1e6)%60)
s=new P.eQ().$1(q%1e6)
return""+C.d.U(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.eQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bg.prototype={}
P.cZ.prototype={
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
r=P.jp(q.b)
return t+s+": "+r}}
P.bo.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fd.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t=this.b
if(typeof t!=="number")return t.al()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.i6.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i3.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c_.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eE.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jp(u)+"."}}
P.h4.prototype={
i:function(a){return"Out of Memory"},
$ibg:1}
P.da.prototype={
i:function(a){return"Stack Overflow"},
$ibg:1}
P.eK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dz.prototype={
i:function(a){return"Exception: "+this.a}}
P.f5.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aR(s,0,75)+"...":s
return t+"\n"+r}}
P.f7.prototype={}
P.w.prototype={}
P.j.prototype={
b5:function(a,b){return new H.c8(this,b,[H.jJ(this,"j",0)])},
gl:function(a){var u,t=this.gL(this)
for(u=0;t.t();)++u
return u},
gam:function(a){var u,t=this.gL(this)
if(!t.t())throw H.c(H.ff())
u=t.gB(t)
if(t.t())throw H.c(H.li())
return u},
A:function(a,b){var u,t,s
P.kc(b,"index")
for(u=this.gL(this),t=0;u.t();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
i:function(a){return P.lh(this,"(",")")}}
P.fg.prototype={}
P.a9.prototype={$ip:1,$ij:1}
P.bP.prototype={}
P.b1.prototype={
gJ:function(a){return P.T.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
p:function(a,b){return this===b},
gJ:function(a){return H.bX(this)},
i:function(a){return"Instance of '"+H.d(H.bY(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.ak.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.eq.prototype={
gl:function(a){return a.length}}
W.er.prototype={
i:function(a){return String(a)}}
W.es.prototype={
i:function(a){return String(a)}}
W.cv.prototype={}
W.bb.prototype={$ibb:1}
W.bd.prototype={
bM:function(a,b,c){if(c!=null)return a.getContext(b,P.my(c))
return a.getContext(b)},
d4:function(a,b){return this.bM(a,b,null)},
$ibd:1}
W.aP.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bG.prototype={
gl:function(a){return a.length}}
W.eH.prototype={}
W.a3.prototype={}
W.ae.prototype={}
W.eI.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eM.prototype={
gl:function(a){return a.length}}
W.a8.prototype={$ia8:1}
W.eN.prototype={
i:function(a){return String(a)}}
W.cD.prototype={
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
W.cE.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaz(a))+" x "+H.d(this.gax(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$iaa&&a.left===u.gcL(b)&&a.top===u.gd1(b)&&this.gaz(a)===u.gaz(b)&&this.gax(a)===u.gax(b)},
gJ:function(a){return W.ks(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaz(a)),C.c.gJ(this.gax(a)))},
gax:function(a){return a.height},
gcL:function(a){return a.left},
gd1:function(a){return a.top},
gaz:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.a6]}}
W.eO.prototype={
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
W.eP.prototype={
gl:function(a){return a.length}}
W.iy.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var u=this.fV(this)
return new J.a2(u,u.length)},
$ap:function(){return[W.L]},
$au:function(){return[W.L]},
$aj:function(){return[W.L]}}
W.L.prototype={
geY:function(a){return new W.iA(a)},
gcq:function(a){return new W.iy(a,a.children)},
i:function(a){return a.localName},
a_:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.k0
if(u==null){u=H.b([],[W.ay])
t=new W.cY(u)
u.push(W.kr(null))
u.push(W.kt())
$.k0=t
d=t}else d=u
u=$.k_
if(u==null){u=new W.eb(d)
$.k_=u
c=u}else{u.a=d
c=u}}if($.as==null){u=document
t=u.implementation.createHTMLDocument("")
$.as=t
$.jo=t.createRange()
s=$.as.createElement("base")
s.href=u.baseURI
$.as.head.appendChild(s)}u=$.as
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.as
if(!!this.$ibb)r=u.body
else{r=u.createElement(a.tagName)
$.as.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.Q,a.tagName)){$.jo.selectNodeContents(r)
q=$.jo.createContextualFragment(b)}else{r.innerHTML=b
q=$.as.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.as.body
if(r==null?u!=null:r!==u)J.jT(r)
c.bN(q)
document.adoptNode(q)
return q},
f6:function(a,b,c){return this.a_(a,b,c,null)},
d7:function(a,b){a.textContent=null
a.appendChild(this.a_(a,b,null,null))},
$iL:1,
gcZ:function(a){return a.tagName}}
W.eT.prototype={
$1:function(a){return!!J.N(a).$iL}}
W.h.prototype={$ih:1}
W.e.prototype={
eU:function(a,b,c,d){if(c!=null)this.dB(a,b,c,!1)},
dB:function(a,b,c,d){return a.addEventListener(b,H.bz(c,1),!1)}}
W.at.prototype={$iat:1}
W.f_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.at]},
$ix:1,
$ax:function(){return[W.at]},
$au:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.f0.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.fa.prototype={
gl:function(a){return a.length}}
W.bI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$au:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]}}
W.aV.prototype={$iaV:1,
gcr:function(a){return a.data}}
W.bJ.prototype={$ibJ:1}
W.bk.prototype={$ibk:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.fL.prototype={
gl:function(a){return a.length}}
W.fM.prototype={
h:function(a,b){return P.aH(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.D(a,new W.fN(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
W.fN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fO.prototype={
h:function(a,b){return P.aH(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.D(a,new W.fP(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
W.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.fQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ax]},
$ix:1,
$ax:function(){return[W.ax]},
$au:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]}}
W.ag.prototype={$iag:1}
W.U.prototype={
gam:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.kf("No elements"))
if(t>1)throw H.c(P.kf("More than one element"))
return u.firstChild},
Z:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gL:function(a){var u=this.a.childNodes
return new W.cI(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.A]},
$au:function(){return[W.A]},
$aj:function(){return[W.A]}}
W.A.prototype={
fJ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
fN:function(a,b){var u,t
try{u=a.parentNode
J.kZ(u,b,a)}catch(t){H.aq(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.de(a):u},
eF:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.cX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$au:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]}}
W.az.prototype={$iaz:1,
gl:function(a){return a.length}}
W.h7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.az]},
$ix:1,
$ax:function(){return[W.az]},
$au:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.hf.prototype={
h:function(a,b){return P.aH(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.D(a,new W.hg(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
W.hg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hi.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.ht.prototype={
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
W.aB.prototype={$iaB:1}
W.hu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aB]},
$ix:1,
$ax:function(){return[W.aB]},
$au:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.hy.prototype={
h:function(a,b){return a.getItem(b)},
D:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gW:function(a){var u=H.b([],[P.m])
this.D(a,new W.hz(u))
return u},
gl:function(a){return a.length},
$aS:function(){return[P.m,P.m]}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.al.prototype={$ial:1}
W.dd.prototype={
a_:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
u=W.le("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.U(t).Z(0,new W.U(u))
return t}}
W.hC.prototype={
a_:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.a_(u.createElement("table"),b,c,d)
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
W.hD.prototype={
a_:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gam(u)
t.toString
s.toString
new W.U(t).Z(0,new W.U(s))
return t}}
W.c0.prototype={$ic0:1}
W.aD.prototype={$iaD:1}
W.am.prototype={$iam:1}
W.hG.prototype={
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
W.hH.prototype={
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
W.hN.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.bp.prototype={$ibp:1}
W.hR.prototype={
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
W.hS.prototype={
gl:function(a){return a.length}}
W.b4.prototype={}
W.i7.prototype={
i:function(a){return String(a)}}
W.iq.prototype={
gl:function(a){return a.length}}
W.b6.prototype={
gf9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gf8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib6:1}
W.c9.prototype={
eG:function(a,b){return a.requestAnimationFrame(H.bz(b,1))},
dN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iz.prototype={
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
W.dt.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$iaa&&a.left===u.gcL(b)&&a.top===u.gd1(b)&&a.width===u.gaz(b)&&a.height===u.gax(b)},
gJ:function(a){return W.ks(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gax:function(a){return a.height},
gaz:function(a){return a.width}}
W.iD.prototype={
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
W.dN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$au:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]}}
W.iP.prototype={
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
W.iQ.prototype={
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
W.ix.prototype={
D:function(a,b){var u,t,s,r,q
for(u=this.gW(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.k)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gW:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aS:function(){return[P.m,P.m]}}
W.iA.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gW(this).length}}
W.iB.prototype={}
W.iC.prototype={
$1:function(a){return this.a.$1(a)}}
W.ca.prototype={
dq:function(a){var u
if($.dC.a===0){for(u=0;u<262;++u)$.dC.m(0,C.P[u],W.mJ())
for(u=0;u<12;++u)$.dC.m(0,C.k[u],W.mK())}},
as:function(a){return $.kX().u(0,W.bH(a))},
a9:function(a,b,c){var u=$.dC.h(0,H.d(W.bH(a))+"::"+b)
if(u==null)u=$.dC.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iay:1}
W.G.prototype={
gL:function(a){return new W.cI(a,this.gl(a))}}
W.cY.prototype={
as:function(a){return C.a.cl(this.a,new W.h_(a))},
a9:function(a,b,c){return C.a.cl(this.a,new W.fZ(a,b,c))},
$iay:1}
W.h_.prototype={
$1:function(a){return a.as(this.a)}}
W.fZ.prototype={
$1:function(a){return a.a9(this.a,this.b,this.c)}}
W.dV.prototype={
du:function(a,b,c,d){var u,t,s
this.a.Z(0,c)
u=b.b5(0,new W.iN())
t=b.b5(0,new W.iO())
this.b.Z(0,u)
s=this.c
s.Z(0,C.R)
s.Z(0,t)},
as:function(a){return this.a.u(0,W.bH(a))},
a9:function(a,b,c){var u=this,t=W.bH(a),s=u.c
if(s.u(0,H.d(t)+"::"+b))return u.d.eW(c)
else if(s.u(0,"*::"+b))return u.d.eW(c)
else{s=u.b
if(s.u(0,H.d(t)+"::"+b))return!0
else if(s.u(0,"*::"+b))return!0
else if(s.u(0,H.d(t)+"::*"))return!0
else if(s.u(0,"*::*"))return!0}return!1},
$iay:1}
W.iN.prototype={
$1:function(a){return!C.a.u(C.k,a)}}
W.iO.prototype={
$1:function(a){return C.a.u(C.k,a)}}
W.iT.prototype={
a9:function(a,b,c){if(this.dh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.u(0,b)
return!1}}
W.iU.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iR.prototype={
as:function(a){var u=J.N(a)
if(!!u.$ibZ)return!1
u=!!u.$ii
if(u&&W.bH(a)==="foreignObject")return!1
if(u)return!0
return!1},
a9:function(a,b,c){if(b==="is"||C.b.b7(b,"on"))return!1
return this.as(a)},
$iay:1}
W.cI.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cr(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.ay.prototype={}
W.iL.prototype={}
W.eb.prototype={
bN:function(a){new W.iY(this).$2(a,null)},
aF:function(a,b){if(b==null)J.jT(a)
else b.removeChild(a)},
eL:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l1(a)
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
try{t=J.a_(a)}catch(r){H.aq(r)}try{s=W.bH(a)
this.eK(a,b,p,t,s,o,n)}catch(r){if(H.aq(r) instanceof P.a7)throw r
else{this.aF(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
eK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
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
t=H.b(u.slice(0),[H.ac(u,0)])
for(s=f.gW(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a9(a,J.l4(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ic0)p.bN(a.content)}}
W.iY.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.eL(a,b)
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
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.cf.prototype={}
W.cg.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e0.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
P.ea.prototype={$iaV:1,
gcr:function(a){return this.a}}
P.j4.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.f1.prototype={
gaV:function(){var u=this.b,t=H.jJ(u,"u",0)
return new H.bQ(new H.c8(u,new P.f2(),[t]),new P.f3(),[t,W.L])},
m:function(a,b,c){var u=this.gaV()
J.l2(u.b.$1(J.eo(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aO(this.gaV().a)},
h:function(a,b){var u=this.gaV()
return u.b.$1(J.eo(u.a,b))},
gL:function(a){var u=P.jv(this.gaV(),!1,W.L)
return new J.a2(u,u.length)},
$ap:function(){return[W.L]},
$au:function(){return[W.L]},
$aj:function(){return[W.L]}}
P.f2.prototype={
$1:function(a){return!!J.N(a).$iL}}
P.f3.prototype={
$1:function(a){return H.n(a,"$iL")}}
P.iH.prototype={}
P.aa.prototype={}
P.aZ.prototype={$iaZ:1}
P.fm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.aZ]},
$au:function(){return[P.aZ]},
$ij:1,
$aj:function(){return[P.aZ]}}
P.b2.prototype={$ib2:1}
P.h2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b2]},
$au:function(){return[P.b2]},
$ij:1,
$aj:function(){return[P.b2]}}
P.h9.prototype={
gl:function(a){return a.length}}
P.bZ.prototype={$ibZ:1}
P.hB.prototype={
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
gcq:function(a){return new P.f1(a,new W.U(a))},
a_:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ay])
p.push(W.kr(null))
p.push(W.kt())
p.push(new W.iR())
c=new W.eb(new W.cY(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).f6(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.U(s)
q=p.gam(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.b3.prototype={$ib3:1}
P.hT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b3]},
$au:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]}}
P.dF.prototype={}
P.dG.prototype={}
P.dQ.prototype={}
P.dR.prototype={}
P.e1.prototype={}
P.e2.prototype={}
P.e8.prototype={}
P.e9.prototype={}
P.eu.prototype={
gl:function(a){return a.length}}
P.ev.prototype={
h:function(a,b){return P.aH(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gW:function(a){var u=H.b([],[P.m])
this.D(a,new P.ew(u))
return u},
gl:function(a){return a.size},
$aS:function(){return[P.m,null]}}
P.ew.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ex.prototype={
gl:function(a){return a.length}}
P.ba.prototype={}
P.h3.prototype={
gl:function(a){return a.length}}
P.dr.prototype={}
P.d5.prototype={
fS:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaV)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mz(g))
return}if(!!t.$ibJ)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.l5("Incorrect number or type of arguments"))}}
P.hw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.aH(a.item(b))},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bP,,,]]},
$au:function(){return[[P.bP,,,]]},
$ij:1,
$aj:function(){return[[P.bP,,,]]}}
P.dY.prototype={}
P.dZ.prototype={}
K.ar.prototype={
ah:function(a,b){return!0},
i:function(a){return"all"}}
K.cJ.prototype={
ah:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)if(u[s].ah(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.k)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b0.prototype={}
K.Y.prototype={
ah:function(a,b){return!this.dd(0,b)},
i:function(a){return"!["+this.bR(0)+"]"}}
K.ha.prototype={
ah:function(a,b){if(typeof b!=="number")return H.V(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jx(this.a),t=H.jx(this.b)
return u+".."+t}}
K.hj.prototype={
dl:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.E([u,P.ap])
for(s=new H.b_(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.jv(new H.bl(t,[u]),!0,u)
C.a.da(r)
this.a=r},
ah:function(a,b){return C.a.u(this.a,b)},
i:function(a){return P.jz(this.a)}}
L.db.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dk(this.a.j(0,b))
r.a=H.b([],[K.b0])
r.c=!1
this.c.push(r)
return r},
fh:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
if(r.ah(0,a))return r}return},
i:function(a){return this.b},
ce:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.u(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bl(n,[H.ac(n,0)]),n=n.gL(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.u(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.k)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.di.prototype={
i:function(a){var u=H.jP(this.b,"\n","\\n"),t=H.jP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dj.prototype={
aj:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.k)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hO.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.db(this,b)
u.c=H.b([],[L.dk])
this.a.m(0,b,u)}return u},
I:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dj(a)
u=P.m
t.c=new H.E([u,u])
this.b.m(0,a,t)}return t},
bL:function(a){return this.fY(a)},
fY:function(a){var u=this
return P.m1(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$bL(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bI(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fh(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jz(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.v("removeRange"))
P.jy(0,m,d.length)
d.splice(0,m-0)
C.a.Z(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.u(0,p.a)?7:8
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
if(g.d!=null){j=P.jz(e)
i=g.d
h=i.c.h(0,j)
p=new L.di(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.u(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lT()
case 1:return P.lU(q)}}},L.di)},
i:function(a){var u,t=new P.ak(""),s=this.d
if(s!=null)t.a=s.ce()+"\n"
for(s=this.a,s=s.gh_(s),s=new H.cR(J.aN(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.ce()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dk.prototype={
i:function(a){return this.b.b+": "+this.bR(0)}}
O.be.prototype={
bU:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bO:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.bO(a,null,b)},
eq:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dQ:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.a2(u,u.length)},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jJ(s,"be",0)]
if(s.eq(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dQ(t,H.b([b],r))}},
$ij:1}
O.bS.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.a4():u},
an:function(){var u=this.b
if(u!=null)u.N(null)},
gR:function(a){var u=this.a
if(u.length>0)return C.a.gb0(u)
else return V.jw()},
cV:function(a){var u=this.a
if(a==null)u.push(V.jw())
else u.push(a)
this.an()},
bH:function(){var u=this.a
if(u.length>0){u.pop()
this.an()}}}
E.ez.prototype={}
E.aU.prototype={
sbP:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().F(0,s.gcQ())
u=s.c
if(u!=null)u.gw().n(0,s.gcQ())
t=new D.F("shape",r,s.c)
t.b=!0
s.ai(t)}},
saN:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gw().F(0,s.gcO())
if(a!=null)a.gw().n(0,s.gcO())
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
m.sd2(m.a+m.d*b.y)
m.scT(0,m.b+m.e*b.y)
m.scY(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aw(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.O(0,V.aw(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.O(0,V.aw(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ab(0)}q=m.x}else q=null
if(!J.K(q,n.x)){p=n.x
n.x=q
o=new D.F("matrix",p,q)
o.b=!0
n.ai(o)}for(m=n.y.a,m=new J.a2(m,m.length);m.t();)m.d.b4(0,b)},
ay:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gR(s))
else s.a.push(r.O(0,s.gR(s)))
s.an()
a.cW(t.f)
s=a.dy
u=(s&&C.a).gb0(s)
if(u!=null&&t.d!=null)u.fM(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.t();)s.d.ay(a)
a.cU()
a.dx.bH()},
ai:function(a){var u=this.z
if(u!=null)u.N(a)},
S:function(){return this.ai(null)},
cR:function(a){this.e=null
this.ai(a)},
fz:function(){return this.cR(null)},
cP:function(a){this.ai(a)},
fw:function(){return this.cP(null)},
cN:function(a){this.ai(a)},
ft:function(){return this.cN(null)},
fs:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcM(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.k)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bh()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.S()},
fv:function(a,b){var u,t
for(u=b.gL(b),t=this.gcM();u.t();)u.gB(u).gw().F(0,t)
this.S()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bc.prototype={
i:function(a){return this.b}}
E.bm.prototype={
i:function(a){return this.b}}
E.dy.prototype={}
E.hb.prototype={
dk:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aS(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bS()
t=[V.av]
u.a=H.b([],t)
u.gw().n(0,new E.hc(s))
s.cy=u
u=new O.bS()
u.a=H.b([],t)
u.gw().n(0,new E.hd(s))
s.db=u
u=new O.bS()
u.a=H.b([],t)
u.gw().n(0,new E.he(s))
s.dx=u
u=H.b([],[O.de])
s.dy=u
u.push(null)
s.fr=new H.E([P.m,A.d7])},
gfI:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gR(s)
u=t.db
u=t.z=s.O(0,u.gR(u))
s=u}return s},
cW:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb0(u):a)},
cU:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hc.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hd.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.he.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dg.prototype={
bX:function(a){this.cX()},
bW:function(){return this.bX(null)},
gfk:function(){var u,t=this,s=Date.now(),r=C.d.U(P.jZ(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aS(s,!1)
return u/r},
ca:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.O()
if(typeof r!=="number")return H.V(r)
u=C.c.bB(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.O()
t=C.c.bB(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ki(C.h,s.gfO())}},
cX:function(){if(!this.cx){this.cx=!0
var u=window
C.y.dN(u)
C.y.eG(u,W.kx(new E.hM(this),P.a6))}},
fL:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.ca()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aS(r,!1)
s.y=P.jZ(r-s.r.a).a*0.000001
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
if(s!=null)s.N(null)}catch(q){u=H.aq(q)
t=H.jK(q)
P.jO("Error: "+H.d(u))
P.jO("Stack: "+H.d(t))
throw H.c(u)}}}
E.hM.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fL()}}}
Z.dp.prototype={}
Z.cw.prototype={
bn:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aq(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.ir.prototype={}
Z.cx.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bn:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bn(a)},
fZ:function(a){var u,t,s
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
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bY(this.c))+"'")+"]"}}
Z.aF.prototype={
gbQ:function(a){var u=this.a,t=(u&$.aL().a)!==0?3:0
if((u&$.aK().a)!==0)t+=3
if((u&$.aJ().a)!==0)t+=3
if((u&$.aM().a)!==0)t+=2
if((u&$.b9().a)!==0)t+=3
if((u&$.cp().a)!==0)t+=3
if((u&$.cq().a)!==0)t+=4
if((u&$.bC().a)!==0)++t
return(u&$.aI().a)!==0?t+4:t},
eX:function(a){var u,t=$.aL(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aI()
if((s&t.a)!==0)if(u===a)return t
return $.kW()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aF))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aL().a)!==0)u.push("Pos")
if((t&$.aK().a)!==0)u.push("Norm")
if((t&$.aJ().a)!==0)u.push("Binm")
if((t&$.aM().a)!==0)u.push("Txt2D")
if((t&$.b9().a)!==0)u.push("TxtCube")
if((t&$.cp().a)!==0)u.push("Clr3")
if((t&$.cq().a)!==0)u.push("Clr4")
if((t&$.bC().a)!==0)u.push("Weight")
if((t&$.aI().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eC.prototype={}
D.bh.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
F:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.u(s,b)
if(s===!0){s=t.a
u=(s&&C.a).F(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.u(s,b)
if(s===!0){s=t.b
u=(s&&C.a).F(s,b)||u}return u},
N:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.D(P.jv(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eX(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.W]}])
C.a.D(u,new D.eY(q))}return!0},
ff:function(){return this.N(null)},
ab:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.N(u)}}}}
D.eX.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eY.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bK.prototype={}
D.bL.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cy.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cy))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cO.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fl.prototype={
fE:function(a){this.d.n(0,a.a)
return!1},
fA:function(a){this.d.F(0,a.a)
return!1}}
X.fs.prototype={
bG:function(a,b){this.r=a.a
return!1},
aP:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.d6()
if(typeof u!=="number")return u.a2()
this.r=(u&~t)>>>0
return!1},
aO:function(a,b){return!1},
fF:function(a){return!1},
ef:function(a,b,c){return}}
X.bT.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bT))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fR.prototype={
bG:function(a,b){this.f=a.a
return!1},
aP:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.d6()
if(typeof u!=="number")return u.a2()
this.f=(u&~t)>>>0
return!1},
aO:function(a,b){return!1},
fG:function(a,b){return!1}}
X.hQ.prototype={
fD:function(a){return!1},
fB:function(a){return!1},
fC:function(a){return!1}}
X.dn.prototype={
c3:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cO(u,new X.bT(t,a.altKey,a.shiftKey))},
ar:function(a){a.shiftKey},
bm:function(a){a.shiftKey},
ag:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.T()
u=t.top
if(typeof r!=="number")return r.T()
return new V.ah(s-q,r-u)},
aE:function(a){return new V.bs(a.movementX,a.movementY)},
bh:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ah])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
q=C.c.a5(r.pageX)
C.c.a5(r.pageY)
p=o.left
C.c.a5(r.pageX)
n.push(new V.ah(q-p,C.c.a5(r.pageY)-o.top))}return n},
ae:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cy(u,new X.bT(t,a.altKey,a.shiftKey))},
be:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.T()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.T()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
e9:function(a){this.f=!0},
dY:function(a){this.f=!1},
e3:function(a){if(this.f&&this.be(a))a.preventDefault()},
ed:function(a){var u
if(!this.f)return
u=this.c3(a)
this.b.fE(u)},
eb:function(a){var u
if(!this.f)return
u=this.c3(a)
this.b.fA(u)},
eh:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ar(a)
if(r.x){u=r.ae(a)
t=r.aE(a)
if(r.d.bG(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ae(a)
s=r.ag(a)
if(r.c.bG(u,s))a.preventDefault()},
el:function(a){var u,t,s,r=this
r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aP(u,s))a.preventDefault()},
e7:function(a){var u,t,s,r=this
if(!r.be(a)){r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aP(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aP(u,s))a.preventDefault()}},
ej:function(a){var u,t,s,r=this
r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aO(u,s))a.preventDefault()},
e5:function(a){var u,t,s,r=this
if(!r.be(a)){r.ar(a)
u=r.ae(a)
if(r.x){t=r.aE(a)
if(r.d.aO(u,t))a.preventDefault()
return}if(r.r)return
s=r.ag(a)
if(r.c.aO(u,s))a.preventDefault()}},
en:function(a){var u,t,s,r,q,p=this
p.ar(a)
u=(a&&C.x).gf8(a)
t=C.x.gf9(a)
s=p.Q
if(typeof u!=="number")return u.O()
if(typeof s!=="number")return H.V(s)
if(typeof t!=="number")return t.O()
r=new V.bs(u*s,t*s)
if(p.x){if(p.d.fF(r))a.preventDefault()
return}if(p.r)return
q=p.ag(a)
if(p.c.fG(r,q))a.preventDefault()},
ep:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ae(s.y)
t=s.ag(s.y)
s.d.ef(u,t,r)}},
eB:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bm(a)
u=t.bh(a)
if(t.e.fD(u))a.preventDefault()},
ex:function(a){var u
this.bm(a)
u=this.bh(a)
if(this.e.fB(u))a.preventDefault()},
ez:function(a){var u
this.bm(a)
u=this.bh(a)
if(this.e.fC(u))a.preventDefault()}}
D.ey.prototype={$iX:1}
D.bf.prototype={
ac:function(a){var u=this.r
if(u!=null)u.N(a)},
ds:function(){return this.ac(null)},
$iX:1}
D.X.prototype={}
D.cP.prototype={
ac:function(a){var u=this.y
if(u!=null)u.N(a)},
c8:function(a){var u=this.z
if(u!=null)u.N(a)},
ee:function(){return this.c8(null)},
es:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.k)(a),++t){s=a[t]
if(s==null||this.dH(s))return!1}return!0},
dS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gc7(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.k)(b),++r){q=b[r]
if(q instanceof D.bf)this.f.push(q)
p=q.r
if(p==null){p=new D.bh()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bK()
u.b=!0
this.ac(u)},
ev:function(a,b){var u,t,s
for(u=b.gL(b),t=this.gc7();u.t();){s=u.gB(u)
C.a.F(this.e,s)
s.gw().F(0,t)}u=new D.bL()
u.b=!0
this.ac(u)},
dH:function(a){var u=C.a.u(this.f,a)
return u},
$aj:function(){return[D.X]},
$abe:function(){return[D.X]}}
D.h8.prototype={$iX:1}
D.hv.prototype={$iX:1}
V.P.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.aQ.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.eW.prototype={}
V.cT.prototype={
X:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cT))return!1
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
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bB(H.b([q.a,q.d,q.r],p),3,0),n=V.bB(H.b([q.b,q.e,q.x],p),3,0),m=V.bB(H.b([q.c,q.f,q.y],p),3,0)
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
X:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
cJ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.B().a)return V.jw()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
O:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b3:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.z(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aQ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a0(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
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
i:function(a){return this.H()},
v:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bB(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bB(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bB(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bB(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
H:function(){return this.v("")}}
V.ah.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.a0.prototype={
T:function(a,b){return new V.a0(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.d1.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.d4.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+", "+V.y(u.d,3,0)+"]"}}
V.bs.prototype={
bC:function(a){var u,t=this.a
if(typeof t!=="number")return t.O()
u=this.b
if(typeof u!=="number")return u.O()
return Math.sqrt(t*t+u*u)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.V(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.T()
if(typeof t!=="number")return H.V(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.z.prototype={
bC:function(a){return Math.sqrt(this.M(this))},
M:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bD:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
aA:function(a){return new V.z(-this.a,-this.b,-this.c)},
K:function(a,b){if(Math.abs(b-0)<$.B().a)return V.c7()
return new V.z(this.a/b,this.b/b,this.c/b)},
cK:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.cA.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.a4():u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cA))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.fS.prototype={}
U.d6.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a4():u},
aq:function(a){var u=this.y
if(u!=null)u.N(a)},
sd2:function(a){var u
a=V.jQ(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.F("yaw",u,a)
u.b=!0
this.aq(u)}},
scT:function(a,b){var u
b=V.jQ(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.F("pitch",u,b)
u.b=!0
this.aq(u)}},
scY:function(a){var u
a=V.jQ(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.F("roll",u,a)
u.b=!0
this.aq(u)}},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d6))return!1
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
i:function(a){var u=this
return"Rotator: ["+V.y(u.a,3,0)+", "+V.y(u.b,3,0)+", "+V.y(u.c,3,0)+"], ["+V.y(u.d,3,0)+", "+V.y(u.e,3,0)+", "+V.y(u.f,3,0)+"]"}}
M.cF.prototype={
ad:function(a){var u=this.y
if(u!=null)u.N(a)},
dt:function(){return this.ad(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga8(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.k)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bh()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bK()
u.b=!0
this.ad(u)},
e1:function(a,b){var u,t
for(u=b.gL(b),t=this.ga8();u.t();)u.gB(u).gw().F(0,t)
u=new D.bL()
u.b=!0
this.ad(u)},
sd_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().F(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gw().n(0,t.ga8())
s=new D.F("technique",u,t.d)
s.b=!0
t.ad(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.a4():u},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cW(f.d)
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
o=C.c.a5(p*s)
p=q.b
if(typeof r!=="number")return H.V(r)
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
i=V.aw(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cV(i)
t=$.k8
if(t==null){t=V.ka()
q=V.jC()
p=$.km
t=V.k5(t,q,p==null?$.km=new V.z(0,0,-1):p)
$.k8=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.O(0,h)}a.db.cV(h)
u=f.d
if(u!=null)u.b4(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.t();)u.d.b4(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.t();)u.d.ay(a)
f.b.toString
a.cy.bH()
a.db.bH()
f.c.toString
a.cU()}}
A.ct.prototype={}
A.et.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fa:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Q.prototype={
ga6:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.Q))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fw.prototype={
dj:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.mg(c3,u)
A.mi(c3,u)
A.mh(c3,u)
A.mk(c3,u)
A.ml(c3,u)
A.mj(c3,u)
A.mm(c3,u)
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
m=A.mf(b8.z)
b8.c=n
b8.d=m
b8.e=b8.c4(n,35633)
b8.f=b8.c4(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.d(l)))}b8.eQ()
b8.eS()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.n(b8.y.C(0,"invViewMat"),"$ia1")
if(t)b8.dy=H.n(b8.y.C(0,"objMat"),"$ia1")
if(r)b8.fr=H.n(b8.y.C(0,"viewObjMat"),"$ia1")
b8.fy=H.n(b8.y.C(0,"projViewObjMat"),"$ia1")
if(c3.go)b8.fx=H.n(b8.y.C(0,"viewMat"),"$ia1")
if(c3.x1)b8.k1=H.n(b8.y.C(0,"txt2DMat"),"$ic4")
if(c3.x2)b8.k2=H.n(b8.y.C(0,"txtCubeMat"),"$ia1")
if(c3.y1)b8.k3=H.n(b8.y.C(0,"colorMat"),"$ia1")
b8.r1=H.b([],[A.a1])
t=c3.av
if(t>0){b8.k4=b8.y.C(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.n(j,"$ia1"))}}t=c3.a
if(t.a)b8.r2=H.n(b8.y.C(0,"emissionClr"),"$iC")
if(t.b)b8.rx=H.n(b8.y.C(0,"emissionTxt"),"$iR")
t=c3.b
if(t.a)b8.x1=H.n(b8.y.C(0,"ambientClr"),"$iC")
if(t.b)b8.x2=H.n(b8.y.C(0,"ambientTxt"),"$iR")
t=c3.c
if(t.a)b8.y2=H.n(b8.y.C(0,"diffuseClr"),"$iC")
if(t.b)b8.av=H.n(b8.y.C(0,"diffuseTxt"),"$iR")
t=c3.d
if(t.a)b8.aZ=H.n(b8.y.C(0,"invDiffuseClr"),"$iC")
if(t.b)b8.ct=H.n(b8.y.C(0,"invDiffuseTxt"),"$iR")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cw=H.n(b8.y.C(0,"shininess"),"$iM")
if(s)b8.cu=H.n(b8.y.C(0,"specularClr"),"$iC")
if(t.b)b8.cv=H.n(b8.y.C(0,"specularTxt"),"$iR")}if(c3.f.b)b8.cz=H.n(b8.y.C(0,"bumpTxt"),"$iR")
if(c3.db){b8.cA=H.n(b8.y.C(0,"envSampler"),"$ibq")
t=c3.r
if(t.a)b8.cB=H.n(b8.y.C(0,"reflectClr"),"$iC")
if(t.b)b8.cC=H.n(b8.y.C(0,"reflectTxt"),"$iR")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cD=H.n(b8.y.C(0,"refraction"),"$iM")
if(s)b8.cE=H.n(b8.y.C(0,"refractClr"),"$iC")
if(t.b)b8.cF=H.n(b8.y.C(0,"refractTxt"),"$iR")}}t=c3.y
if(t.a)b8.cG=H.n(b8.y.C(0,"alpha"),"$iM")
if(t.b)b8.cH=H.n(b8.y.C(0,"alphaTxt"),"$iR")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bt=new H.E([r,A.b5])
b8.bu=new H.E([r,[P.a9,A.c2]])
for(r=[A.c2],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
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
a3=a2}e.push(new A.c2(j,d,c,a3,a2,a1))}b8.bu.m(0,g,e)
q=b8.bt
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bv=new H.E([r,A.b5])
b8.bw=new H.E([r,[P.a9,A.c3]])
for(r=[A.c3],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
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
e.push(new A.c3(a7,a6,a5,j,d,a8))}b8.bw.m(0,g,e)
q=b8.bv
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bx=new H.E([r,A.b5])
b8.by=new H.E([r,[P.a9,A.c5]])
for(r=[A.c5],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
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
H.n(b,"$ic4")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$ibq")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.n(b,"$ibq")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.n(a,"$ic1")
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
a3=a2}e.push(new A.c5(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.by.m(0,g,e)
q=b8.bx
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bz=new H.E([r,A.b5])
b8.bA=new H.E([r,[P.a9,A.c6]])
for(r=[A.c6],i=0;i<t.length;t.length===s||(0,H.k)(t),++i){h=t[i]
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
H.n(a,"$ic1")
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
e.push(new A.c6(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bA.m(0,g,e)
q=b8.bz
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}}},
a4:function(a,b){if(b!=null&&b.d)a.d8(b)},
eM:function(a,b){}}
A.cu.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cC.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.d2.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.d9.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fz.prototype={
i:function(a){return this.aK}}
A.c2.prototype={}
A.c3.prototype={}
A.c5.prototype={}
A.c6.prototype={}
A.d7.prototype={
dm:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c4:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
eQ:function(){var u,t,s,r=this,q=H.b([],[A.ct]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.V(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ct(p,t.name,s))}r.x=new A.et(q)},
eS:function(){var u,t,s,r=this,q=H.b([],[A.dl]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.V(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.f7(t.type,t.size,t.name,s))}r.y=new A.i1(q)},
ap:function(a,b,c){var u=this.a
if(a===1)return new A.b5(u,b,c)
else return A.jB(u,this.r,b,a,c)},
dK:function(a,b,c){var u=this.a
if(a===1)return new A.R(u,b,c)
else return A.jB(u,this.r,b,a,c)},
dL:function(a,b,c){var u=this.a
if(a===1)return new A.bq(u,b,c)
else return A.jB(u,this.r,b,a,c)},
aX:function(a,b){return new P.dz(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
f7:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ap(b,c,d)
case 5121:return u.ap(b,c,d)
case 5122:return u.ap(b,c,d)
case 5123:return u.ap(b,c,d)
case 5124:return u.ap(b,c,d)
case 5125:return u.ap(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.hY(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.c1(u.a,c,d)
case 35667:return new A.hZ(u.a,c,d)
case 35668:return new A.i_(u.a,c,d)
case 35669:return new A.i0(u.a,c,d)
case 35674:return new A.i2(u.a,c,d)
case 35675:return new A.c4(u.a,c,d)
case 35676:return new A.a1(u.a,c,d)
case 35678:return u.dK(b,c,d)
case 35680:return u.dL(b,c,d)
case 35670:throw H.c(u.aX("BOOL",c))
case 35671:throw H.c(u.aX("BOOL_VEC2",c))
case 35672:throw H.c(u.aX("BOOL_VEC3",c))
case 35673:throw H.c(u.aX("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.dl.prototype={}
A.i1.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
C:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.k)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b5.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.c1.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.c4.prototype={
a3:function(a){var u=new Float32Array(H.ck(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a1.prototype={
a3:function(a){var u=new Float32Array(H.ck(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.R.prototype={
d8:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bq.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.j_.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bD(s.b,b).bD(s.d.bD(s.c,b),c)
s=new V.a0(r.a,r.b,r.c)
if(!J.K(a.f,s)){a.f=s
s=a.a
if(s!=null)s.S()}a.sfT(r.K(0,Math.sqrt(r.M(r))))
s=1-b
u=1-c
u=new V.d1(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.K(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.S()}}}
F.bi.prototype={
aI:function(){var u=this
if(!u.gaJ()){C.a.F(u.a.a.d.b,u)
u.a.a.S()}u.bi()
u.bj()
u.eE()},
eN:function(a){this.a=a
a.d.b.push(this)},
eO:function(a){this.b=a
a.d.c.push(this)},
eP:function(a){this.c=a
a.d.d.push(this)},
bi:function(){var u=this.a
if(u!=null){C.a.F(u.d.b,this)
this.a=null}},
bj:function(){var u=this.b
if(u!=null){C.a.F(u.d.c,this)
this.b=null}},
eE:function(){var u=this.c
if(u!=null){C.a.F(u.d.d,this)
this.c=null}},
gaJ:function(){return this.a==null||this.b==null||this.c==null},
dD:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c7()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.cK())return
return s.K(0,Math.sqrt(s.M(s)))},
dF:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.T(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.M(r)))
r=t.T(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aH(r.K(0,Math.sqrt(r.M(r))))
return r.K(0,Math.sqrt(r.M(r)))},
bq:function(){var u,t=this
if(t.d!=null)return!0
u=t.dD()
if(u==null){u=t.dF()
if(u==null)return!1}t.d=u
t.a.a.S()
return!0},
dC:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c7()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.cK())return
return s.K(0,Math.sqrt(s.M(s)))},
dE:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.B().a){l=d.T(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.K(0,Math.sqrt(l.M(l)))
if(s.a-t.a<0)q=q.aA(0)}else{p=(l-u.b)/r
l=d.T(0,g)
l=new V.a0(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).T(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.K(0,Math.sqrt(l.M(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aA(0)}l=n.d
if(l!=null){o=l.K(0,Math.sqrt(l.M(l)))
l=o.aH(q)
l=l.K(0,Math.sqrt(l.M(l))).aH(o)
q=l.K(0,Math.sqrt(l.M(l)))}return q},
bo:function(){var u,t=this
if(t.e!=null)return!0
u=t.dC()
if(u==null){u=t.dE()
if(u==null)return!1}t.e=u
t.a.a.S()
return!0},
gf1:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u,t,s=this
if(s.gaJ())return a+"disposed"
u=a+C.b.a1(J.a_(s.a.e),0)+", "+C.b.a1(J.a_(s.b.e),0)+", "+C.b.a1(J.a_(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
H:function(){return this.v("")}}
F.eZ.prototype={}
F.hs.prototype={
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
F.bN.prototype={
aI:function(){var u=this
if(!u.gaJ()){C.a.F(u.a.a.c.b,u)
u.a.a.S()}u.bi()
u.bj()},
bi:function(){var u=this.a
if(u!=null){C.a.F(u.c.b,this)
this.a=null}},
bj:function(){var u=this.b
if(u!=null){C.a.F(u.c.c,this)
this.b=null}},
gaJ:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){if(this.gaJ())return a+"disposed"
return a+C.b.a1(J.a_(this.a.e),0)+", "+C.b.a1(J.a_(this.b.e),0)},
H:function(){return this.v("")}}
F.fn.prototype={}
F.hW.prototype={
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
F.bW.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a1(J.a_(u.e),0)},
H:function(){return this.v("")}}
F.hk.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.a4():u},
bF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){r=g[s]
h.a.n(0,r.f5())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.bW()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.N(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.G()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
p=new F.bN()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.N(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.k)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.G()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.G()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.cG(l,k,i)}g=h.e
if(g!=null)g.ab(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ab(0)
return u},
fp:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.ac(o,0)])
for(o=[F.bt];u.length!==0;){t=C.a.gfi(u)
C.a.bI(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.aM(0,t,q)){s.push(q)
C.a.bI(u,r)}}if(s.length>1)b.bF(s)}}p.a.q()
p.c.bJ()
p.d.bJ()
p.b.fK()
p.c.bK(new F.hW())
p.d.bK(new F.hs())
o=p.e
if(o!=null)o.ab(0)},
f_:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aL()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aK().a)!==0)++s
if((t&$.aJ().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.cp().a)!==0)++s
if((t&$.cq().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.aI().a)!==0)++s
r=a4.gbQ(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cw])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.eX(m)
k=l.gbQ(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cw(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fo(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ck(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cx(new Z.dp(a1,d),o,a4)
c.b=H.b([],[Z.bj])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)}a=Z.jD(u,34963,b)
c.b.push(new Z.bj(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.q()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.q()
b.push(t.e)}a=Z.jD(u,34963,b)
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
b.push(t.e)}a=Z.jD(u,34963,b)
c.b.push(new Z.bj(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.m])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.v(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.v(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.v(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.v(t))}return C.a.k(s,"\n")},
S:function(){var u=this.e
if(u!=null)u.N(null)}}
F.hl.prototype={
eV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bi])
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
h.push(F.cG(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cG(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cG(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cG(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aM(0,p,n)){p.aI()
break}}}}},
bJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gf1(s)
if(t)s.aI()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.k)(u),++r)if(!u[r].bq())s=!1
return s},
bp:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.k)(u),++r)if(!u[r].bo())s=!1
return s},
i:function(a){return this.H()},
v:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(a))
return C.a.k(r,"\n")},
H:function(){return this.v("")}}
F.hm.prototype={
gl:function(a){return this.b.length},
bK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aM(0,p,n)){p.aI()
break}}}}},
bJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.aI()}},
i:function(a){return this.H()},
v:function(a){var u,t,s=H.b([],[P.m]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].v(a+(""+u+". ")))}return C.a.k(s,"\n")},
H:function(){return this.v("")}}
F.hn.prototype={
gl:function(a){return this.b.length},
fK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.N(null)}s=t.a
if(s!=null){C.a.F(s.b.b,t)
t.a=null}}}},
i:function(a){return this.H()},
v:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(a))
return C.a.k(r,"\n")},
H:function(){return this.v("")}}
F.bt.prototype={
bs:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ko(u.cx,r,o,t,s,q,p,a,n)},
f5:function(){return this.bs(null)},
sfT:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.S()}},
fo:function(a){var u,t,s=this
if(a.p(0,$.aL())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aK())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aJ())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aM())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.b9())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cp())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cq())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bC()))return H.b([s.ch],[P.J])
else if(a.p(0,$.aI())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bq:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c7()
t.d.D(0,new F.ip(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.ab(0)}return!0},
bo:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c7()
t.d.D(0,new F.io(s))
s=s.a
t.x=s.K(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.ab(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
v:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
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
H:function(){return this.v("")}}
F.ip.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.G(0,t)}}}
F.io.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.G(0,t)}}}
F.id.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.S()
return!0},
cj:function(a,b){var u=null,t=F.ko(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)u[s].bq()
return!0},
bp:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)u[s].bo()
return!0},
f0:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.K(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.N(null)}}}}return!0},
i:function(a){return this.H()},
v:function(a){var u,t,s,r
this.q()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r)u.push(t[r].v(a))
return C.a.k(u,"\n")},
H:function(){return this.v("")}}
F.ie.prototype={
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
D:function(a,b){var u=this
C.a.D(u.b,b)
C.a.D(u.c,new F.ig(u,b))
C.a.D(u.d,new F.ih(u,b))},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(""))
return C.a.k(r,"\n")}}
F.ig.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)}}
F.ih.prototype={
$1:function(a){var u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)}}
F.ii.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(""))
return C.a.k(r,"\n")}}
F.ik.prototype={}
F.ij.prototype={
aM:function(a,b,c){return J.K(b.f,c.f)}}
F.il.prototype={}
F.h0.prototype={
bF:function(a){var u,t,s,r,q,p,o,n,m=V.c7()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.z(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.K(0,Math.sqrt(m.M(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.k)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.K(0,Math.sqrt(p*p+o*o+n*n))}if(!J.K(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.N(null)}}}return}}
F.im.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.k)(u),++s)r.push(u[s].v(""))
return C.a.k(r,"\n")}}
O.cS.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.a4():u},
P:function(a){var u=this.fr
if(u!=null)u.N(a)},
b9:function(){return this.P(null)},
c9:function(a){this.a=null
this.P(a)},
eI:function(){return this.c9(null)},
dU:function(a,b){var u=new D.bK()
u.b=!0
this.P(u)},
dW:function(a,b){var u=new D.bL()
u.b=!0
this.P(u)},
c2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.E(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){q=t[r]
p=q.gaa()
o=u.h(0,q.gaa())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cu])
u.D(0,new O.fD(g,n))
C.a.aC(n,new O.fE())
m=new H.E(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cC])
m.D(0,new O.fF(g,l))
C.a.aC(l,new O.fG())
k=new H.E(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.k)(t),++r){q=t[r]
p=q.gaa()
o=k.h(0,q.gaa())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d2])
k.D(0,new O.fH(g,j))
C.a.aC(j,new O.fI())
i=new H.E(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.k)(f),++r){q=f[r]
s=q.gaa()
p=i.h(0,q.gaa())
i.m(0,s,p==null?1:p)}h=H.b([],[A.d9])
i.D(0,new O.fJ(g,h))
C.a.aC(h,new O.fK())
f=C.d.U(g.e.a.length+3,4)
g.dy.e
return A.lq(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
Y:function(a,b){if(b!=null)if(!C.a.u(a,b)){b.a=a.length
a.push(b)}},
b4:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.t();){t=u.d
t.toString
s=$.ic
if(s==null)s=$.ic=new V.z(0,0,1)
t.a=s
r=$.ib
t.d=r==null?$.ib=new V.z(0,1,0):r
r=$.ia
t.e=r==null?$.ia=new V.z(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b3(s)
r=s.a
p=s.b
o=s.c
t.a=s.K(0,Math.sqrt(r*r+p*p+o*o))
o=q.b3(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.K(0,Math.sqrt(p*p+r*r+s*s))
s=q.b3(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.K(0,Math.sqrt(r*r+p*p+o*o))}}}},
fM:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.c2()
u=b4.fr.h(0,b3.aK)
if(u==null){u=A.lp(b3,b4.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b4.fr.f3(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.aZ
b3=b5.e
if(!(b3 instanceof Z.cx))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
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
o.a.f0()
o=o.e
if(o!=null)o.ab(0)}m=b5.d.f_(new Z.ir(b4.a),r)
m.aw($.aL()).e=b2.a.Q.c
if(b3)m.aw($.aK()).e=b2.a.cx.c
if(q)m.aw($.aJ()).e=b2.a.ch.c
if(s.r2)m.aw($.aM()).e=b2.a.cy.c
if(p)m.aw($.b9()).e=b2.a.db.c
if(s.ry)m.aw($.aI()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.df])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fg()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gR(p)
b3=b3.dy
b3.toString
b3.a3(p.X(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gR(p)
o=b4.dx
o=b4.cx=p.O(0,o.gR(o))
p=o}b3=b3.fr
b3.toString
b3.a3(p.X(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfI()
o=b4.dx
o=b4.ch=p.O(0,o.gR(o))
p=o}b3=b3.fy
b3.toString
b3.a3(p.X(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gR(p)
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
i=new Float32Array(H.ck(p.X(0,!0)))
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
b3.a4(b3.ct,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.cw
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cu
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.a4(b3.cv,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.E([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
e=f.gaa()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cr(b2.a.bu.h(0,e),d)
n=f.gh1()
b=$.ai
n=n.aQ(b==null?$.ai=new V.a0(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh6()
b=$.ai
n=n.aQ(b==null?$.ai=new V.a0(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcs()){n=f.gcm()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcn()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gco()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bt.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gR(p)
p=P.w
a0=new H.E([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.cr(b2.a.bw.h(0,0),d)
n=a.b3(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.K(0,Math.sqrt(b*b+a1*a1+a2*a2))
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
o=b2.a.bv.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gR(p)
p=P.w
a3=new H.E([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
e=f.gaa()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.cr(b2.a.by.h(0,e),d)
a4=a.O(0,f.gR(f))
n=f.gR(f)
b=$.ai
n=n.aQ(b==null?$.ai=new V.a0(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ai
n=a4.aQ(n==null?$.ai=new V.a0(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gak()
n=a4.cJ(0)
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
i=new Float32Array(H.ck(new V.cT(b,a1,a2,a5,a6,a7,a8,a9,n).X(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gak()
n=f.gak()
if(!C.a.u(l,n)){n.a=l.length
l.push(n)}n=f.gak()
b=n.gaL(n)
if(b){b=c.f
b.toString
a1=n.gaL(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfl(n)
b.a.uniform1i(b.d,n)}}f.gaB()
n=f.gd9()
b=c.x
b.toString
a1=n.gfc(n)
a2=n.gfd(n)
a5=n.gfe()
n=n.gfb()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaB()
if(!C.a.u(l,n)){n.a=l.length
l.push(n)}n=f.gaB()
b=n.gaL(n)
if(b){b=c.r
b.toString
a1=n.gaL(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfl(n)
b.a.uniform1i(b.d,n)}}if(f.gcs()){n=f.gcm()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcn()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gco()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bx.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gR(p)
p=P.w
b1=new H.E([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.k)(p),++g){f=p[g]
e=f.gaa()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.cr(b2.a.bA.h(0,e),d)
n=f.gfH(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh4(f).hg()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aQ(f.gfH(f))
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
if(!C.a.u(l,n)){n.a=l.length
l.push(n)}n=f.gak()
b=n.gaL(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaB()
n=f.gd9()
b=c.z
b.toString
a1=n.gfc(n)
a2=n.gfd(n)
a5=n.gfe()
n=n.gfb()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaB()
if(!C.a.u(l,n)){n.a=l.length
l.push(n)}n=f.gaB()
b=n.gaL(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.gh5()){n=f.gh3()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gh2()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcs()){n=f.gcm()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcn()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gco()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.k)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bz.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.Y(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.a4(b3.cz,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gR(p).cJ(0)}b3=b3.id
b3.toString
b3.a3(p.X(0,!0))}if(s.db){b2.Y(l,b2.ch)
b3=b2.a
p=b2.ch
b3.eM(b3.cA,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cB
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.a4(b3.cC,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.cD
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.cE
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.Y(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.a4(b3.cF,p)}}b3=s.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.cG
p.a.uniform1f(p.d,n)}if(b3.b){b2.Y(l,b2.db.d)
p=b2.a
n=b2.db.d
p.a4(p.cH,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b5.e
p.bn(b4)
p.ay(b4)
p.fZ(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fa()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.c2().aK}}
O.fD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.cu(a,C.d.U(b+3,4)*4))}}
O.fE.prototype={
$2:function(a,b){return J.cs(a.a,b.a)}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.cC(a,C.d.U(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cs(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.d2(a,C.d.U(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.cs(a.a,b.a)}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.d9(a,C.d.U(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.cs(a.a,b.a)}}
O.fx.prototype={
af:function(){var u,t=this
t.bS()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.F(t.b,u,1)
u.b=!0
t.a.P(u)}}}
O.bR.prototype={
P:function(a){return this.a.P(a)},
b9:function(){return this.P(null)},
af:function(){},
bk:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.af()
u=s.a
u.a=null
u.P(null)}},
sb2:function(a){var u,t=this,s=t.c
if(!s.b)t.bk(new A.Q(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gw().F(0,t.gaT())
u=t.d
t.d=a
a.gw().n(0,t.gaT())
s=new D.F(t.b+".texture2D",u,t.d)
s.b=!0
t.a.P(s)}}}
O.fy.prototype={}
O.af.prototype={
cb:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a)
t.b=!0
s.a.P(t)}},
af:function(){this.bS()
this.cb(new V.P(1,1,1))},
saG:function(a,b){this.bk(new A.Q(!0,this.c.b,!1))
this.cb(b)}}
O.fA.prototype={}
O.fB.prototype={
af:function(){var u,t=this
t.bT()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1)
u.b=!0
t.a.P(u)}}}
O.fC.prototype={
cc:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a)
t.b=!0
u.a.P(t)}},
af:function(){this.bT()
this.cc(100)}}
O.de.prototype={}
T.df.prototype={}
T.hI.prototype={}
T.hJ.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a4():u}}
T.hK.prototype={
bE:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hJ()
t.a=0
t.b=q
t.d=t.c=!1
W.O(u,"load",new T.hL(this,t,u,!1,q,!1,!1),!1)
return t},
eJ:function(a,b,c){var u,t,s,r
b=V.jN(b)
u=V.jN(a.width)
t=V.jN(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jl()
s.width=u
s.height=t
r=C.r.d4(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mA(r.getImageData(0,0,s.width,s.height))}}}
T.hL.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.eJ(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.V.fS(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ff()}++s.e}}
X.jk.prototype={}
X.f6.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.a4():u}}
X.d_.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.a4():u},
ao:function(a){var u=this.f
if(u!=null)u.N(a)},
dz:function(){return this.ao(null)},
saN:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gw().F(0,s.gbY())
t=s.b
s.b=a
if(a!=null)a.gw().n(0,s.gbY())
u=new D.F("mover",t,s.b)
u.b=!0
s.ao(u)}}}
X.hE.prototype={}
V.cz.prototype={
aS:function(a){this.b=new P.fb(C.L)
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
o=m.b.dJ(q,0,q.length)
n=o==null?q:o
C.J.d7(p,H.jP(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb0(m.d).push(p)}},
cS:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.a9,W.a8]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.aY()
for(t.toString,s=new H.l(u),s=new P.bv(t.bL(new H.b_(s,s.gl(s))).a());s.t();)r.b1(s.gB(s))}}
V.je.prototype={
$1:function(a){var u=C.c.d0(this.a.gfk(),2)
if(u!=="0.00")P.jO(u+" fps")}}
V.eL.prototype={
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
aY:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hP()
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
t=new K.Y()
s=[K.b0]
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
t=new K.Y()
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
t.d=t.a.I("Num")
t=a1.j(0,n)
t.d=t.a.I("Num")
t=a1.j(0,m)
t.d=t.a.I("Symbol")
t=a1.j(0,j)
t.d=t.a.I("String")
t=a1.j(0,g)
t.d=t.a.I("String")
t=a1.j(0,c)
t.d=t.a.I(d)
t=a1.j(0,a0)
t.d=t.a.I(a0)
t=a1.j(0,q)
t=t.d=t.a.I(q)
u=[P.m]
t.aj(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aj(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aj(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f8.prototype={
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
aY:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hP()
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
t=new K.Y()
s=[K.b0]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.q(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.Y()
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
u.d=u.a.I("Num")
u=e.j(0,n)
u.d=u.a.I("Num")
u=e.j(0,m)
u.d=u.a.I("Symbol")
u=e.j(0,i)
u.d=u.a.I(j)
u=e.j(0,g)
u.d=u.a.I(h)
u=e.j(0,f)
u.d=u.a.I(f)
u=e.j(0,q)
u=u.d=u.a.I(q)
t=[P.m]
u.aj(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aj(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aj(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f9.prototype={
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
aY:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hP()
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
t=new K.Y()
t.a=H.b([],[K.b0])
u.a.push(t)
u=K.q(new H.l('</\\-!>=_"'))
t.a.push(u)
u=K.I("a","z")
t.a.push(u)
u=K.I("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.I("Symbol")
u=l.j(0,n)
u.d=u.a.I("String")
u=l.j(0,r)
t=u.a.I(r)
u.d=t
t.aj(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.I(q)
t=l.j(0,m)
t.d=t.a.I(m)
return l}}
V.h6.prototype={
cS:function(a,b){this.d=H.b([],[[P.a9,W.a8]])
this.E(C.a.k(b,"\n"),"#111")},
b1:function(a){},
aY:function(){return}}
V.ho.prototype={
dn:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.O(q,"scroll",new V.hq(o),!1)},
ck:function(a){var u,t,s,r,q,p,o,n
this.eR()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fn(a),s.toString,r=new H.l(r),r=new P.bv(s.bL(new H.b_(r,r.gl(r))).a());r.t();){s=r.gB(r)
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
if(H.kG(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ku(C.t,s,C.f,!1)
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
d3:function(a){var u,t,s,r=new V.eL("dart")
r.aS("dart")
u=new V.f8("glsl")
u.aS("glsl")
t=new V.f9("html")
t.aS("html")
s=C.a.fj(H.b([r,u,t],[V.cz]),new V.hr(a))
if(s!=null)return s
r=new V.h6("plain")
r.aS("plain")
return r},
ci:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jI(s).b7(s,"+")){b0[t]=C.b.a7(s,1)
a6.push(1)
u=!0}else if(C.b.b7(s,"-")){b0[t]=C.b.a7(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.d3(a8)
r.cS(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ku(C.t,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jU()
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
eR:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hP()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.Y()
r=[K.b0]
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
s=new K.Y()
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
s=new K.Y()
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
t=new K.Y()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.Y()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.ar())
s=u.j(0,i).k(0,i)
t=new K.Y()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.I(p)
s=u.j(0,n)
s.d=s.a.I(o)
s=u.j(0,"CodeEnd")
s.d=s.a.I(m)
s=u.j(0,j)
s.d=s.a.I("Link")
s=u.j(0,i)
s.d=s.a.I(i)
this.b=u}}
V.hq.prototype={
$1:function(a){P.ki(C.h,new V.hp(this.a))}}
V.hp.prototype={
$0:function(){var u=C.c.a5(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hr.prototype={
$1:function(a){return a.a===this.a}}
F.jc.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.m]
u.ci("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.ci("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.de=u.i
u=J.cN.prototype
u.dg=u.i
u=P.j.prototype
u.df=u.b5
u=W.L.prototype
u.b8=u.a_
u=W.dV.prototype
u.dh=u.a9
u=K.cJ.prototype
u.dd=u.ah
u.bR=u.i
u=O.bR.prototype
u.bS=u.af
u=O.af.prototype
u.bT=u.af})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"m_","lk",17)
t(P,"mu","lO",5)
t(P,"mv","lP",5)
t(P,"mw","lQ",5)
s(P,"kz","ms",8)
r(W,"mJ",4,null,["$4"],["lR"],13,0)
r(W,"mK",4,null,["$4"],["lS"],13,0)
var l
q(l=E.aU.prototype,"gcQ",0,0,null,["$1","$0"],["cR","fz"],0,0)
q(l,"gcO",0,0,null,["$1","$0"],["cP","fw"],0,0)
q(l,"gcM",0,0,null,["$1","$0"],["cN","ft"],0,0)
p(l,"gfq","fs",2)
p(l,"gfu","fv",2)
q(l=E.dg.prototype,"gbV",0,0,null,["$1","$0"],["bX","bW"],0,0)
o(l,"gfO","cX",8)
n(l=X.dn.prototype,"ge8","e9",3)
n(l,"gdX","dY",3)
n(l,"ge2","e3",1)
n(l,"gec","ed",9)
n(l,"gea","eb",9)
n(l,"geg","eh",1)
n(l,"gek","el",1)
n(l,"ge6","e7",1)
n(l,"gei","ej",1)
n(l,"ge4","e5",1)
n(l,"gem","en",15)
n(l,"geo","ep",3)
n(l,"geA","eB",4)
n(l,"gew","ex",4)
n(l,"gey","ez",4)
q(D.bf.prototype,"gdr",0,0,null,["$1","$0"],["ac","ds"],0,0)
q(l=D.cP.prototype,"gc7",0,0,null,["$1","$0"],["c8","ee"],0,0)
n(l,"ger","es",16)
p(l,"gdR","dS",10)
p(l,"geu","ev",10)
m(V.bs.prototype,"gl","bC",11)
m(V.z.prototype,"gl","bC",11)
q(l=M.cF.prototype,"ga8",0,0,null,["$1","$0"],["ad","dt"],0,0)
p(l,"gdZ","e_",2)
p(l,"ge0","e1",2)
q(l=O.cS.prototype,"gaT",0,0,null,["$1","$0"],["P","b9"],0,0)
q(l,"geH",0,0,null,["$1","$0"],["c9","eI"],0,0)
p(l,"gdT","dU",12)
p(l,"gdV","dW",12)
q(O.bR.prototype,"gaT",0,0,null,["$1","$0"],["P","b9"],0,0)
q(X.d_.prototype,"gbY",0,0,null,["$1","$0"],["ao","dz"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.jt,J.a,J.a2,P.dI,P.j,H.b_,P.fg,H.cH,H.i5,H.hU,P.bg,H.bF,H.e_,P.S,H.fo,H.fp,H.fi,P.e5,P.bu,P.bv,P.dq,P.dc,P.hA,P.dh,P.iZ,P.iM,P.iG,P.dH,P.u,P.eD,P.fc,P.iX,P.ap,P.aS,P.a6,P.aT,P.h4,P.da,P.dz,P.f5,P.f7,P.a9,P.bP,P.b1,P.m,P.ak,W.eH,W.ca,W.G,W.cY,W.dV,W.iR,W.cI,W.ay,W.iL,W.eb,P.ea,P.iH,K.ar,K.cJ,K.b0,K.ha,K.hj,L.db,L.di,L.dj,L.hO,O.be,O.bS,E.ez,E.aU,E.bc,E.bm,E.dy,E.hb,E.dg,Z.dp,Z.ir,Z.cx,Z.bj,Z.aF,D.eC,D.bh,D.W,X.cy,X.cO,X.fl,X.fs,X.bT,X.fR,X.hQ,X.dn,D.ey,D.bf,D.X,D.h8,D.hv,V.P,V.aQ,V.eW,V.cT,V.av,V.ah,V.a0,V.d1,V.d4,V.bs,V.z,M.cF,A.ct,A.et,A.Q,A.cu,A.cC,A.d2,A.d9,A.fz,A.c2,A.c3,A.c5,A.c6,A.dl,A.i1,F.bi,F.eZ,F.bN,F.fn,F.bW,F.hk,F.hl,F.hm,F.hn,F.bt,F.id,F.ie,F.ii,F.ik,F.il,F.im,O.de,O.bR,O.fA,T.hK,X.jk,X.hE,X.d_,V.cz,V.ho])
s(J.a,[J.fh,J.cM,J.cN,J.aW,J.bM,J.aX,H.bV,W.e,W.eq,W.cv,W.ae,W.D,W.ds,W.a3,W.eM,W.eN,W.du,W.cE,W.dw,W.eP,W.h,W.dA,W.au,W.fa,W.dD,W.aV,W.fr,W.fL,W.dJ,W.dK,W.ax,W.dL,W.dO,W.az,W.dS,W.dU,W.aB,W.dW,W.aC,W.e0,W.al,W.e3,W.hN,W.aE,W.e6,W.hS,W.i7,W.ec,W.ee,W.eg,W.ei,W.ek,P.aZ,P.dF,P.b2,P.dQ,P.h9,P.e1,P.b3,P.e8,P.eu,P.dr,P.d5,P.dY])
s(J.cN,[J.h5,J.br,J.aY])
t(J.js,J.aW)
s(J.bM,[J.cL,J.cK])
t(P.fq,P.dI)
s(P.fq,[H.dm,W.iy,W.U,P.f1])
t(H.l,H.dm)
s(P.j,[H.p,H.bQ,H.c8,P.fe])
s(H.p,[H.cQ,H.bl])
t(H.eS,H.bQ)
s(P.fg,[H.cR,H.is])
t(H.fv,H.cQ)
s(P.bg,[H.h1,H.fk,H.i4,H.eB,H.hh,P.cZ,P.a7,P.i6,P.i3,P.c_,P.eE,P.eK])
s(H.bF,[H.jg,H.hF,H.fj,H.j8,H.j9,H.ja,P.iu,P.it,P.iv,P.iw,P.iW,P.iV,P.j3,P.iJ,P.iK,P.fu,P.eQ,P.eR,W.eT,W.fN,W.fP,W.hg,W.hz,W.iC,W.h_,W.fZ,W.iN,W.iO,W.iU,W.iY,P.j4,P.f2,P.f3,P.ew,E.hc,E.hd,E.he,E.hM,D.eX,D.eY,F.j_,F.ip,F.io,F.ig,F.ih,O.fD,O.fE,O.fF,O.fG,O.fH,O.fI,O.fJ,O.fK,T.hL,V.je,V.hq,V.hp,V.hr,F.jc])
s(H.hF,[H.hx,H.bD])
t(P.ft,P.S)
s(P.ft,[H.E,W.ix])
t(H.cU,H.bV)
s(H.cU,[H.cb,H.cd])
t(H.cc,H.cb)
t(H.bU,H.cc)
t(H.ce,H.cd)
t(H.cV,H.ce)
s(H.cV,[H.fT,H.fU,H.fV,H.fW,H.fX,H.cW,H.fY])
t(P.iS,P.fe)
t(P.iI,P.iZ)
t(P.iF,P.iM)
t(P.eF,P.hA)
t(P.eU,P.eD)
s(P.eF,[P.fb,P.i9])
t(P.i8,P.eU)
s(P.a6,[P.J,P.w])
s(P.a7,[P.bo,P.fd])
s(W.e,[W.A,W.f0,W.aA,W.cf,W.aD,W.am,W.ch,W.iq,W.c9,P.ex,P.ba])
s(W.A,[W.L,W.aP])
s(W.L,[W.o,P.i])
s(W.o,[W.er,W.es,W.bb,W.bd,W.a8,W.f4,W.bJ,W.hi,W.dd,W.hC,W.hD,W.c0])
t(W.eG,W.ae)
t(W.bG,W.ds)
s(W.a3,[W.eI,W.eJ])
t(W.dv,W.du)
t(W.cD,W.dv)
t(W.dx,W.dw)
t(W.eO,W.dx)
t(W.at,W.cv)
t(W.dB,W.dA)
t(W.f_,W.dB)
t(W.dE,W.dD)
t(W.bI,W.dE)
t(W.b4,W.h)
s(W.b4,[W.bk,W.ag,W.bp])
t(W.fM,W.dJ)
t(W.fO,W.dK)
t(W.dM,W.dL)
t(W.fQ,W.dM)
t(W.dP,W.dO)
t(W.cX,W.dP)
t(W.dT,W.dS)
t(W.h7,W.dT)
t(W.hf,W.dU)
t(W.cg,W.cf)
t(W.ht,W.cg)
t(W.dX,W.dW)
t(W.hu,W.dX)
t(W.hy,W.e0)
t(W.e4,W.e3)
t(W.hG,W.e4)
t(W.ci,W.ch)
t(W.hH,W.ci)
t(W.e7,W.e6)
t(W.hR,W.e7)
t(W.b6,W.ag)
t(W.ed,W.ec)
t(W.iz,W.ed)
t(W.dt,W.cE)
t(W.ef,W.ee)
t(W.iD,W.ef)
t(W.eh,W.eg)
t(W.dN,W.eh)
t(W.ej,W.ei)
t(W.iP,W.ej)
t(W.el,W.ek)
t(W.iQ,W.el)
t(W.iA,W.ix)
t(W.iB,P.dc)
t(W.iT,W.dV)
t(P.aa,P.iH)
t(P.dG,P.dF)
t(P.fm,P.dG)
t(P.dR,P.dQ)
t(P.h2,P.dR)
t(P.bZ,P.i)
t(P.e2,P.e1)
t(P.hB,P.e2)
t(P.e9,P.e8)
t(P.hT,P.e9)
t(P.ev,P.dr)
t(P.h3,P.ba)
t(P.dZ,P.dY)
t(P.hw,P.dZ)
s(K.cJ,[K.Y,L.dk])
s(E.ez,[Z.cw,A.d7,T.df])
s(D.W,[D.bK,D.bL,D.F])
t(D.cP,O.be)
t(U.fS,D.eC)
s(U.fS,[U.cA,U.d6])
t(A.fw,A.d7)
s(A.dl,[A.b5,A.hZ,A.i_,A.i0,A.hX,A.M,A.hY,A.C,A.c1,A.i2,A.c4,A.a1,A.R,A.bq])
t(F.hs,F.eZ)
t(F.hW,F.fn)
t(F.ij,F.ik)
t(F.h0,F.il)
t(O.cS,O.de)
s(O.bR,[O.fx,O.fy,O.af])
s(O.af,[O.fB,O.fC])
t(T.hI,T.df)
t(T.hJ,T.hI)
t(X.f6,X.hE)
s(V.cz,[V.eL,V.f8,V.f9,V.h6])
u(H.dm,H.i5)
u(H.cb,P.u)
u(H.cc,H.cH)
u(H.cd,P.u)
u(H.ce,H.cH)
u(P.dI,P.u)
u(W.ds,W.eH)
u(W.du,P.u)
u(W.dv,W.G)
u(W.dw,P.u)
u(W.dx,W.G)
u(W.dA,P.u)
u(W.dB,W.G)
u(W.dD,P.u)
u(W.dE,W.G)
u(W.dJ,P.S)
u(W.dK,P.S)
u(W.dL,P.u)
u(W.dM,W.G)
u(W.dO,P.u)
u(W.dP,W.G)
u(W.dS,P.u)
u(W.dT,W.G)
u(W.dU,P.S)
u(W.cf,P.u)
u(W.cg,W.G)
u(W.dW,P.u)
u(W.dX,W.G)
u(W.e0,P.S)
u(W.e3,P.u)
u(W.e4,W.G)
u(W.ch,P.u)
u(W.ci,W.G)
u(W.e6,P.u)
u(W.e7,W.G)
u(W.ec,P.u)
u(W.ed,W.G)
u(W.ee,P.u)
u(W.ef,W.G)
u(W.eg,P.u)
u(W.eh,W.G)
u(W.ei,P.u)
u(W.ej,W.G)
u(W.ek,P.u)
u(W.el,W.G)
u(P.dF,P.u)
u(P.dG,W.G)
u(P.dQ,P.u)
u(P.dR,W.G)
u(P.e1,P.u)
u(P.e2,W.G)
u(P.e8,P.u)
u(P.e9,W.G)
u(P.dr,P.S)
u(P.dY,P.u)
u(P.dZ,W.G)})()
var v={mangledGlobalNames:{w:"int",J:"double",a6:"num",m:"String",ap:"bool",b1:"Null",a9:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:-1,args:[P.w,[P.j,E.aU]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b1,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[P.w,[P.j,D.X]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.w,[P.j,V.av]]},{func:1,ret:P.ap,args:[W.L,P.m,P.m,W.ca]},{func:1,ret:P.b1,args:[,]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.ap,args:[[P.j,D.X]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bb.prototype
C.r=W.bd.prototype
C.J=W.a8.prototype
C.M=J.a.prototype
C.a=J.aW.prototype
C.N=J.cK.prototype
C.d=J.cL.prototype
C.i=J.cM.prototype
C.c=J.bM.prototype
C.b=J.aX.prototype
C.O=J.aY.prototype
C.v=J.h5.prototype
C.V=P.d5.prototype
C.w=W.dd.prototype
C.l=J.br.prototype
C.x=W.b6.prototype
C.y=W.c9.prototype
C.z=new E.bc("Browser.chrome")
C.n=new E.bc("Browser.firefox")
C.o=new E.bc("Browser.edge")
C.A=new E.bc("Browser.other")
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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

C.H=new P.h4()
C.f=new P.i8()
C.I=new P.i9()
C.e=new P.iI()
C.h=new P.aT(0)
C.K=new P.aT(5e6)
C.L=new P.fc("element",!1,!1,!1)
C.P=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.Q=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.R=H.b(u([]),[P.m])
C.t=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.S=new E.bm("OperatingSystem.windows")
C.u=new E.bm("OperatingSystem.mac")
C.T=new E.bm("OperatingSystem.linux")
C.U=new E.bm("OperatingSystem.other")
C.W=new P.bu(null,2)})();(function staticFields(){$.ad=0
$.bE=null
$.jV=null
$.kB=null
$.ky=null
$.kE=null
$.j5=null
$.jb=null
$.jL=null
$.bw=null
$.cl=null
$.cm=null
$.jF=!1
$.ab=C.e
$.Z=[]
$.as=null
$.jo=null
$.k0=null
$.k_=null
$.dC=P.k2(P.m,P.f7)
$.eV=null
$.k6=null
$.k9=null
$.ai=null
$.kd=null
$.kn=null
$.ia=null
$.ib=null
$.ic=null
$.km=null
$.k8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n1","kJ",function(){return H.kA("_$dart_dartClosure")})
u($,"n2","jR",function(){return H.kA("_$dart_js")})
u($,"n3","kK",function(){return H.an(H.hV({
toString:function(){return"$receiver$"}}))})
u($,"n4","kL",function(){return H.an(H.hV({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n5","kM",function(){return H.an(H.hV(null))})
u($,"n6","kN",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n9","kQ",function(){return H.an(H.hV(void 0))})
u($,"na","kR",function(){return H.an(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n8","kP",function(){return H.an(H.kk(null))})
u($,"n7","kO",function(){return H.an(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nc","kT",function(){return H.an(H.kk(void 0))})
u($,"nb","kS",function(){return H.an(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"np","jS",function(){return P.lN()})
u($,"ns","kY",function(){return P.lB("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nq","kX",function(){return P.k3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"nj","kW",function(){return Z.a5(0)})
u($,"nd","kU",function(){return Z.a5(511)})
u($,"nl","aL",function(){return Z.a5(1)})
u($,"nk","aK",function(){return Z.a5(2)})
u($,"nf","aJ",function(){return Z.a5(4)})
u($,"nm","aM",function(){return Z.a5(8)})
u($,"nn","b9",function(){return Z.a5(16)})
u($,"ng","cp",function(){return Z.a5(32)})
u($,"nh","cq",function(){return Z.a5(64)})
u($,"ni","kV",function(){return Z.a5(96)})
u($,"no","bC",function(){return Z.a5(128)})
u($,"ne","aI",function(){return Z.a5(256)})
u($,"n0","kI",function(){return new V.eW(1e-9)})
u($,"n_","B",function(){return $.kI()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bV,ArrayBufferView:H.bV,Float32Array:H.bU,Float64Array:H.bU,Int16Array:H.fT,Int32Array:H.fU,Int8Array:H.fV,Uint16Array:H.fW,Uint32Array:H.fX,Uint8ClampedArray:H.cW,CanvasPixelArray:H.cW,Uint8Array:H.fY,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eq,HTMLAnchorElement:W.er,HTMLAreaElement:W.es,Blob:W.cv,HTMLBodyElement:W.bb,HTMLCanvasElement:W.bd,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CSSPerspective:W.eG,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bG,MSStyleCSSProperties:W.bG,CSS2Properties:W.bG,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.eI,CSSUnparsedValue:W.eJ,DataTransferItemList:W.eM,HTMLDivElement:W.a8,DOMException:W.eN,ClientRectList:W.cD,DOMRectList:W.cD,DOMRectReadOnly:W.cE,DOMStringList:W.eO,DOMTokenList:W.eP,Element:W.L,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.at,FileList:W.f_,FileWriter:W.f0,HTMLFormElement:W.f4,Gamepad:W.au,History:W.fa,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.aV,HTMLImageElement:W.bJ,KeyboardEvent:W.bk,Location:W.fr,MediaList:W.fL,MIDIInputMap:W.fM,MIDIOutputMap:W.fO,MimeType:W.ax,MimeTypeArray:W.fQ,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cX,RadioNodeList:W.cX,Plugin:W.az,PluginArray:W.h7,RTCStatsReport:W.hf,HTMLSelectElement:W.hi,SourceBuffer:W.aA,SourceBufferList:W.ht,SpeechGrammar:W.aB,SpeechGrammarList:W.hu,SpeechRecognitionResult:W.aC,Storage:W.hy,CSSStyleSheet:W.al,StyleSheet:W.al,HTMLTableElement:W.dd,HTMLTableRowElement:W.hC,HTMLTableSectionElement:W.hD,HTMLTemplateElement:W.c0,TextTrack:W.aD,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.hG,TextTrackList:W.hH,TimeRanges:W.hN,Touch:W.aE,TouchEvent:W.bp,TouchList:W.hR,TrackDefaultList:W.hS,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.i7,VideoTrackList:W.iq,WheelEvent:W.b6,Window:W.c9,DOMWindow:W.c9,CSSRuleList:W.iz,ClientRect:W.dt,DOMRect:W.dt,GamepadList:W.iD,NamedNodeMap:W.dN,MozNamedAttrMap:W.dN,SpeechRecognitionResultList:W.iP,StyleSheetList:W.iQ,SVGLength:P.aZ,SVGLengthList:P.fm,SVGNumber:P.b2,SVGNumberList:P.h2,SVGPointList:P.h9,SVGScriptElement:P.bZ,SVGStringList:P.hB,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.b3,SVGTransformList:P.hT,AudioBuffer:P.eu,AudioParamMap:P.ev,AudioTrackList:P.ex,AudioContext:P.ba,webkitAudioContext:P.ba,BaseAudioContext:P.ba,OfflineAudioContext:P.h3,WebGL2RenderingContext:P.d5,SQLResultSetRowList:P.hw})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
W.cf.$nativeSuperclassTag="EventTarget"
W.cg.$nativeSuperclassTag="EventTarget"
W.ch.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.kC,[])
else F.kC([])})})()
//# sourceMappingURL=test.dart.js.map
