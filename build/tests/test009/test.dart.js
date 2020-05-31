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
a[c]=function(){a[c]=function(){H.mW(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jF(this,a,b,c,true,false,e).prototype
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
lp:function(a,b,c,d){if(!!a.$io)return new H.eS(a,b,[c,d])
return new H.bQ(a,b,[c,d])},
fg:function(){return new P.bY("No element")},
lj:function(){return new P.bY("Too many elements")},
lI:function(a,b){var u=J.aP(a)
if(typeof u!=="number")return u.D()
H.d6(a,0,u-1,b)},
d6:function(a,b,c,d){if(c-b<=32)H.lH(a,b,c,d)
else H.lG(a,b,c,d)},
lH:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bb(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.V()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lG:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.W(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.W(a4+a5,2),f=g-j,e=g+j,d=J.bb(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.H(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.Z()
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
if(typeof l!=="number")return l.Z()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.V()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.V()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
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
H.d6(a3,a4,t-2,a6)
H.d6(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.h(a3,t),b),0);)++t
for(;J.H(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.d6(a3,t,s,a6)}else H.d6(a3,t,s,a6)},
k:function k(a){this.a=a},
o:function o(){},
cO:function cO(){},
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
cQ:function cQ(a,b){this.a=null
this.b=a
this.c=b},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ir:function ir(a,b){this.a=a
this.b=b},
cE:function cE(){},
i4:function i4(){},
dk:function dk(){},
cm:function(a){var u,t=H.mY(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mG:function(a){return v.types[a]},
mN:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$ix},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.af(a)
if(typeof u!=="string")throw H.c(H.ba(a))
return u},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bW:function(a){return H.ls(a)+H.kw(H.cl(a),0,null)},
ls:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibw){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cm(t.length>1&&C.b.aM(t,0)===36?C.b.ab(t,1):t)},
k9:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lB:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ba(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b_(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ba(s))}return H.k9(r)},
lA:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ba(s))
if(s<0)throw H.c(H.ba(s))
if(s>65535)return H.lB(a)}return H.k9(a)},
jw:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b_(u,10))>>>0,56320|u&1023)}throw H.c(P.an(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lz:function(a){var u=H.br(a).getFullYear()+0
return u},
lx:function(a){var u=H.br(a).getMonth()+1
return u},
lt:function(a){var u=H.br(a).getDate()+0
return u},
lu:function(a){var u=H.br(a).getHours()+0
return u},
lw:function(a){var u=H.br(a).getMinutes()+0
return u},
ly:function(a){var u=H.br(a).getSeconds()+0
return u},
lv:function(a){var u=H.br(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.ba(a))},
f:function(a,b){if(a==null)J.aP(a)
throw H.c(H.bC(a,b))},
bC:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.aP(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d3(b,s)},
mA:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bs(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
ba:function(a){return new P.ag(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.d_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kJ})
u.name=""}else u.toString=H.kJ
return u},
kJ:function(){return J.af(this.dartException)},
u:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aT(a))},
ar:function(a){var u,t,s,r,q,p
a=H.kH(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ki:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k5:function(a,b){return new H.h2(a,b==null?null:b.method)},
ju:function(a,b){var u=b==null,t=u?null:b.method
return new H.fm(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ju(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k5(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kM()
q=$.kN()
p=$.kO()
o=$.kP()
n=$.kS()
m=$.kT()
l=$.kR()
$.kQ()
k=$.kV()
j=$.kU()
i=r.a6(u)
if(i!=null)return f.$1(H.ju(u,i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.ju(u,i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k5(u,i))}}return f.$1(new H.i3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
jI:function(a){var u
if(a==null)return new H.e0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e0(a)},
mE:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mM:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mM)
a.$identity=u
return u},
lc:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hz().constructor.prototype):Object.create(new H.bG(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.E()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jV(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l8(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jV(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l8:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mG,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jT:H.jj
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
l9:function(a,b,c,d){var u=H.jj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jV:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lb(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l9(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.E()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bH
return new Function(r+H.d(q==null?$.bH=H.ez("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.E()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bH
return new Function(r+H.d(q==null?$.bH=H.ez("self"):q)+"."+H.d(u)+"("+o+");}")()},
la:function(a,b,c,d){var u=H.jj,t=H.jT
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
lb:function(a,b){var u,t,s,r,q,p,o,n=$.bH
if(n==null)n=$.bH=H.ez("self")
u=$.jS
if(u==null)u=$.jS=H.ez("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.la(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ah
if(typeof u!=="number")return u.E()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.E()
$.ah=u+1
return new Function(n+u+"}")()},
jF:function(a,b,c,d,e,f,g){return H.lc(a,b,c,d,!!e,!!f,g)},
jj:function(a){return a.a},
jT:function(a){return a.c},
ez:function(a){var u,t,s,r=new H.bG("self","target","receiver","name"),q=J.jr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mR:function(a,b){throw H.c(H.l7(a,H.cm(b.substring(2))))},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.mR(a,b)},
mC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l7:function(a,b){return new H.eA("CastError: "+P.jp(a)+": type '"+H.d(H.mu(a))+"' is not a subtype of type '"+b+"'")},
mu:function(a){var u,t=J.S(a)
if(!!t.$ibI){u=H.mC(t)
if(u!=null)return H.mS(u)
return"Closure"}return H.bW(a)},
mW:function(a){throw H.c(new P.eK(a))},
lE:function(a){return new H.hj(a)},
kC:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cl:function(a){if(a==null)return
return a.$ti},
nv:function(a,b,c){return H.je(a["$a"+H.d(c)],H.cl(b))},
mF:function(a,b,c,d){var u=H.je(a["$a"+H.d(c)],H.cl(b))
return u==null?null:u[d]},
jH:function(a,b,c){var u=H.je(a["$a"+H.d(b)],H.cl(a))
return u==null?null:u[c]},
ae:function(a,b){var u=H.cl(a)
return u==null?null:u[b]},
mS:function(a){return H.b9(a,null)},
b9:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cm(a[0].name)+H.kw(a,1,b)
if(typeof a=="function")return H.cm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.m_(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m_:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.W)p+=" extends "+H.b9(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b9(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b9(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b9(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mD(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b9(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kw:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ao("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b9(p,c)}return"<"+u.i(0)+">"},
je:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nt:function(a,b,c){return a.apply(b,H.je(J.S(b)["$a"+H.d(c)],H.cl(b)))},
nu:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mO:function(a){var u,t,s,r,q=$.kD.$1(a),p=$.j4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ja[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kz.$2(a,q)
if(q!=null){p=$.j4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ja[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jc(u)
$.j4[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ja[q]=u
return u}if(s==="-"){r=H.jc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kF(a,u)
if(s==="*")throw H.c(P.kj(q))
if(v.leafTags[q]===true){r=H.jc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kF(a,u)},
kF:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jK(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jc:function(a){return J.jK(a,!1,null,!!a.$ix)},
mP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jc(u)
else return J.jK(u,c,null,null)},
mK:function(){if(!0===$.jJ)return
$.jJ=!0
H.mL()},
mL:function(){var u,t,s,r,q,p,o,n
$.j4=Object.create(null)
$.ja=Object.create(null)
H.mJ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kG.$1(q)
if(p!=null){o=H.mP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mJ:function(){var u,t,s,r,q,p,o=C.B()
o=H.bA(C.C,H.bA(C.D,H.bA(C.r,H.bA(C.r,H.bA(C.E,H.bA(C.F,H.bA(C.G(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kD=new H.j7(r)
$.kz=new H.j8(q)
$.kG=new H.j9(p)},
bA:function(a,b){return a(b)||b},
lm:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.f6("Illegal RegExp pattern ("+String(p)+")",a))},
kI:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mB:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kH:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jM:function(a,b,c){var u=H.mU(a,b,c)
return u},
mU:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kH(b),'g'),H.mB(c))},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
jg:function jg(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null},
bI:function bI(){},
hH:function hH(){},
hz:function hz(){},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
hj:function hj(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fl:function fl(a){this.a=a},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bp:function bp(a,b){this.a=a
this.$ti=b},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
as:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bC(b,a))},
lZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mA(a,b,c))
return b},
bU:function bU(){},
cV:function cV(){},
bT:function bT(){},
cW:function cW(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
cX:function cX(){},
fZ:function fZ(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
mD:function(a){return J.k_(a?Object.keys(a):[],null)},
mY:function(a){return v.mangledGlobalNames[a]},
mQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j6:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jJ==null){H.mK()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kj("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jN()]
if(r!=null)return r
r=H.mO(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.jN(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lk:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ji(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.an(a,0,4294967295,"length",null))
return J.k_(new Array(a),b)},
k_:function(a,b){return J.jr(H.b(a,[b]))},
jr:function(a){a.fixed$length=Array
return a},
ll:function(a,b){return J.cq(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cI.prototype
return J.fj.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.cJ.prototype
if(typeof a=="boolean")return J.fi.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j6(a)},
bb:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j6(a)},
j5:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j6(a)},
kB:function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.bw.prototype
return a},
jG:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.bw.prototype
return a},
em:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j6(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
jP:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kB(a).p(a,b)},
cp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mN(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bb(a).h(a,b)},
l0:function(a,b,c){return J.em(a).f1(a,b,c)},
l1:function(a,b,c,d){return J.em(a).fl(a,b,c,d)},
cq:function(a,b){return J.kB(a).aG(a,b)},
jh:function(a,b){return J.bb(a).w(a,b)},
eo:function(a,b){return J.j5(a).C(a,b)},
l2:function(a,b){return J.j5(a).G(a,b)},
l3:function(a){return J.em(a).gfp(a)},
bF:function(a){return J.S(a).gH(a)},
aO:function(a){return J.j5(a).gN(a)},
aP:function(a){return J.bb(a).gl(a)},
jQ:function(a){return J.j5(a).h6(a)},
l4:function(a,b){return J.em(a).ha(a,b)},
l5:function(a,b,c){return J.jG(a).aW(a,b,c)},
l6:function(a){return J.jG(a).hh(a)},
af:function(a){return J.S(a).i(a)},
a:function a(){},
fi:function fi(){},
cJ:function cJ(){},
cK:function cK(){},
h6:function h6(){},
bw:function bw(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
js:function js(a){this.$ti=a},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(){},
cI:function cI(){},
fj:function fj(){},
aX:function aX(){}},P={
lN:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mv()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bB(new P.it(s),1)).observe(u,{childList:true})
return new P.is(s,u,t)}else if(self.setImmediate!=null)return P.mw()
return P.mx()},
lO:function(a){self.scheduleImmediate(H.bB(new P.iu(a),0))},
lP:function(a){self.setImmediate(H.bB(new P.iv(a),0))},
lQ:function(a){P.jz(C.i,a)},
jz:function(a,b){var u=C.c.W(a.a,1000)
return P.lX(u<0?0:u,b)},
kh:function(a,b){var u=C.c.W(a.a,1000)
return P.lY(u<0?0:u,b)},
lX:function(a,b){var u=new P.e6()
u.dG(a,b)
return u},
lY:function(a,b){var u=new P.e6()
u.dH(a,b)
return u},
nr:function(a){return new P.bx(a,1)},
lT:function(){return C.U},
lU:function(a){return new P.bx(a,3)},
m2:function(a,b){return new P.iS(a,[b])},
mo:function(){var u,t
for(;u=$.bz,u!=null;){$.ck=null
t=u.b
$.bz=t
if(t==null)$.cj=null
u.a.$0()}},
mt:function(){$.jD=!0
try{P.mo()}finally{$.ck=null
$.jD=!1
if($.bz!=null)$.jO().$1(P.kA())}},
mr:function(a){var u=new P.dr(a)
if($.bz==null){$.bz=$.cj=u
if(!$.jD)$.jO().$1(P.kA())}else $.cj=$.cj.b=u},
ms:function(a){var u,t,s=$.bz
if(s==null){P.mr(a)
$.ck=$.cj
return}u=new P.dr(a)
t=$.ck
if(t==null){u.b=s
$.bz=$.ck=u}else{u.b=t.b
$.ck=t.b=u
if(u.b==null)$.cj=u}},
kg:function(a,b){var u=$.ad
if(u===C.e)return P.jz(a,b)
return P.jz(a,u.fq(b))},
lK:function(a,b){var u=$.ad
if(u===C.e)return P.kh(a,b)
return P.kh(a,u.cE(b,P.de))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.ms(new P.j1(u,e))},
mp:function(a,b,c,d){var u,t=$.ad
if(t===c)return d.$0()
$.ad=c
u=t
try{t=d.$0()
return t}finally{$.ad=u}},
mq:function(a,b,c,d,e){var u,t=$.ad
if(t===c)return d.$1(e)
$.ad=c
u=t
try{t=d.$1(e)
return t}finally{$.ad=u}},
it:function it(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
e6:function e6(){this.c=0},
iW:function iW(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b){this.a=a
this.b=b},
by:function by(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iS:function iS(a,b){this.a=a
this.$ti=b},
dr:function dr(a){this.a=a
this.b=null},
da:function da(){},
hC:function hC(){},
de:function de(){},
iZ:function iZ(){},
j1:function j1(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function(a,b){return new H.G([a,b])},
ln:function(a){return H.mE(a,new H.G([null,null]))},
bO:function(a){return new P.iF([a])},
jC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lW:function(a,b){var u=new P.dI(a,b)
u.c=a.e
return u},
li:function(a,b,c){var u,t
if(P.jE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.a0.push(a)
try{P.m1(a,u)}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=P.ke(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jq:function(a,b,c){var u,t
if(P.jE(a))return b+"..."+c
u=new P.ao(b)
$.a0.push(a)
try{t=u
t.a=P.ke(t.a,a,", ")}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jE:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
m1:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.d(n.gA(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gA(n);++l
if(!n.t()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gA(n);++l
for(;n.t();r=q,q=p){p=n.gA(n);++l
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
k1:function(a,b){var u,t,s=P.bO(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.n(0,a[t])
return s},
k2:function(a){var u,t={}
if(P.jE(a))return"{...}"
u=new P.ao("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.l2(a,new P.fw(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iF:function iF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a
this.c=this.b=null},
dI:function dI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ff:function ff(){},
fs:function fs(){},
t:function t(){},
fv:function fv(){},
fw:function fw(a,b){this.a=a
this.b=b},
V:function V(){},
iM:function iM(){},
dJ:function dJ(){},
eC:function eC(){},
eF:function eF(){},
eU:function eU(){},
fd:function fd(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fc:function fc(a){this.a=a},
i7:function i7(){},
i8:function i8(){},
iX:function iX(a){this.b=0
this.c=a},
lg:function(a){if(a instanceof H.bI)return a.i(0)
return"Instance of '"+H.d(H.bW(a))+"'"},
lo:function(a,b,c){var u,t,s=J.lk(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jv:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aO(a);u.t();)t.push(u.gA(u))
if(b)return t
return J.jr(t)},
jy:function(a){var u,t=a.length,s=P.jx(0,null,t)
if(typeof s!=="number")return s.Z()
u=s<t
return H.lA(u?C.a.dk(a,0,s):a)},
lC:function(a){return new H.fk(a,H.lm(a,!1,!0,!1,!1,!1))},
ke:function(a,b,c){var u=J.aO(b)
if(!u.t())return a
if(c.length===0){do a+=H.d(u.gA(u))
while(u.t())}else{a+=H.d(u.gA(u))
for(;u.t();)a=a+c+H.d(u.gA(u))}return a},
kv:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.l_().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.fw(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jw(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ld:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
le:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cz:function(a){if(a>=10)return""+a
return"0"+a},
jX:function(a){return new P.aU(1000*a)},
jp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lg(a)},
ji:function(a,b,c){return new P.ag(!0,a,b,c)},
d3:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
jx:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.an(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.an(b,a,c,"end",null))
return b}return c},
ka:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.c(P.an(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.aP(b):e
return new P.fe(u,!0,a,c,"Index out of range")},
y:function(a){return new P.i5(a)},
kj:function(a){return new P.i2(a)},
kd:function(a){return new P.bY(a)},
aT:function(a){return new P.eE(a)},
r:function(a){return new P.dA(a)},
jL:function(a){H.mQ(a)},
at:function at(){},
a7:function a7(a,b){this.a=a
this.b=b},
M:function M(){},
aU:function aU(a){this.a=a},
eQ:function eQ(){},
eR:function eR(){},
bj:function bj(){},
d_:function d_(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fe:function fe(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i5:function i5(a){this.a=a},
i2:function i2(a){this.a=a},
bY:function bY(a){this.a=a},
eE:function eE(a){this.a=a},
h5:function h5(){},
d8:function d8(){},
eK:function eK(a){this.a=a},
dA:function dA(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b},
f8:function f8(){},
w:function w(){},
i:function i(){},
fh:function fh(){},
ac:function ac(){},
bP:function bP(){},
b1:function b1(){},
a5:function a5(){},
W:function W(){},
m:function m(){},
ao:function ao(a){this.a=a},
aJ:function(a){var u,t,s,r,q
if(a==null)return
u=P.k0(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
my:function(a){var u={}
a.G(0,new P.j2(u))
return u},
j2:function j2(a){this.a=a},
f2:function f2(a,b){this.a=a
this.b=b},
f3:function f3(){},
f4:function f4(){},
iE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iH:function iH(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
fo:function fo(){},
b2:function b2(){},
h3:function h3(){},
hb:function hb(){},
bX:function bX(){},
hD:function hD(){},
j:function j(){},
b4:function b4(){},
hS:function hS(){},
dG:function dG(){},
dH:function dH(){},
dR:function dR(){},
dS:function dS(){},
e2:function e2(){},
e3:function e3(){},
e9:function e9(){},
ea:function ea(){},
et:function et(){},
eu:function eu(){},
ev:function ev(a){this.a=a},
ew:function ew(){},
be:function be(){},
h4:function h4(){},
ds:function ds(){},
hy:function hy(){},
dZ:function dZ(){},
e_:function e_(){}},W={
jR:function(){var u=document.createElement("a")
return u},
jU:function(){var u=document.createElement("canvas")
return u},
lf:function(a,b,c){var u=document.body,t=(u&&C.n).a5(u,a,b,c)
t.toString
u=new H.c7(new W.Y(t),new W.eT(),[W.A])
return u.gax(u)},
jn:function(a){return"wheel"},
bK:function(a){var u,t,s,r="element tag unavailable"
try{u=J.em(a)
t=u.gd8(a)
if(typeof t==="string")r=u.gd8(a)}catch(s){H.au(s)}return r},
iD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kt:function(a,b,c,d){var u=W.iD(W.iD(W.iD(W.iD(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.ky(new W.iB(c),W.h)
if(u!=null&&!0)J.l1(a,b,u,!1)
return new W.iA(a,b,u,!1)},
ks:function(a){var u=W.jR(),t=window.location
u=new W.c9(new W.iL(u,t))
u.dB(a)
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
ku:function(){var u=P.m,t=P.k1(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iT(t,P.bO(u),P.bO(u),P.bO(u),null)
t.dF(null,new H.fx(C.k,new W.iU(),[H.ae(C.k,0),u]),s,null)
return t},
ky:function(a,b){var u=$.ad
if(u===C.e)return a
return u.cE(a,b)},
l:function l(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
ct:function ct(){},
bf:function bf(){},
bh:function bh(){},
aQ:function aQ(){},
eG:function eG(){},
F:function F(){},
bJ:function bJ(){},
eH:function eH(){},
a6:function a6(){},
ai:function ai(){},
eI:function eI(){},
eJ:function eJ(){},
eM:function eM(){},
ab:function ab(){},
eN:function eN(){},
cB:function cB(){},
cC:function cC(){},
eO:function eO(){},
eP:function eP(){},
ix:function ix(a,b){this.a=a
this.b=b},
O:function O(){},
eT:function eT(){},
h:function h(){},
e:function e(){},
ax:function ax(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
ay:function ay(){},
fb:function fb(){},
bM:function bM(){},
bo:function bo(){},
ft:function ft(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
aA:function aA(){},
fS:function fS(){},
al:function al(){},
Y:function Y(a){this.a=a},
A:function A(){},
cY:function cY(){},
aD:function aD(){},
h8:function h8(){},
hh:function hh(){},
hi:function hi(a){this.a=a},
hk:function hk(){},
aE:function aE(){},
hv:function hv(){},
aF:function aF(){},
hw:function hw(){},
aG:function aG(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
ap:function ap(){},
db:function db(){},
hE:function hE(){},
hF:function hF(){},
bZ:function bZ(){},
aH:function aH(){},
aq:function aq(){},
hI:function hI(){},
hJ:function hJ(){},
hM:function hM(){},
aI:function aI(){},
bt:function bt(){},
hQ:function hQ(){},
hR:function hR(){},
b5:function b5(){},
i6:function i6(){},
ip:function ip(){},
b8:function b8(){},
c8:function c8(){},
iy:function iy(){},
du:function du(){},
iC:function iC(){},
dO:function dO(){},
iP:function iP(){},
iQ:function iQ(){},
iw:function iw(){},
iz:function iz(a){this.a=a},
iA:function iA(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iB:function iB(a){this.a=a},
c9:function c9(a){this.a=a},
J:function J(){},
cZ:function cZ(a){this.a=a},
h0:function h0(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(){},
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
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aC:function aC(){},
iL:function iL(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
iY:function iY(a){this.a=a},
dt:function dt(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
dF:function dF(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
ce:function ce(){},
cf:function cf(){},
dX:function dX(){},
dY:function dY(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
cg:function cg(){},
ch:function ch(){},
e7:function e7(){},
e8:function e8(){},
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
L:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aM(a,0)
t=C.b.aM(b,0)
if(u>t){s=t
t=u
u=s}return new K.hc(u,t)},
p:function(a){var u=new K.hl()
u.dv(a)
return u},
av:function av(){},
cG:function cG(){},
b0:function b0(){},
a_:function a_(){this.a=null},
hc:function hc(a,b){this.a=a
this.b=b},
hl:function hl(){this.a=null}},L={
hO:function(){var u=new L.hN(),t=P.m
u.a=new H.G([t,L.d9])
u.b=new H.G([t,L.dg])
u.c=P.bO(t)
return u},
d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a){this.b=a
this.c=null},
hN:function hN(){var _=this
_.d=_.c=_.b=_.a=null},
di:function di(a){this.b=a
this.a=this.c=null}},O={
jl:function(a){var u=new O.aR([a])
u.bg(a)
return u},
aR:function aR(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bR:function bR(){this.b=this.a=null},
cR:function cR(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fz:function fz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cS:function cS(){},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aj:function aj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(){var _=this
_.e=_.d=_.c=_.b=null},
fD:function fD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fE:function fE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dc:function dc(){}},E={
kq:function(){if(J.jh(window.navigator.vendor,"Google"))return C.z
if(J.jh(window.navigator.userAgent,"Firefox"))return C.o
var u=window.navigator.appVersion
if(J.bb(u).w(u,"Trident")||C.b.w(u,"Edge"))return C.p
if(J.jh(window.navigator.appName,"Microsoft"))return C.p
return C.A},
kr:function(){var u=window.navigator.appVersion
if(J.bb(u).w(u,"Win"))return C.R
if(C.b.w(u,"Mac"))return C.u
if(C.b.w(u,"Linux"))return C.S
return C.T},
lD:function(a,b){var u=new E.hd(a)
u.du(a,b)
return u},
lJ:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibh)return E.kf(a,!0,!0,!0,!1)
u=W.jU()
t=u.style
t.width="100%"
t.height="100%"
s.gcG(a).n(0,u)
return E.kf(u,!0,!0,!0,!1)},
kf:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dd(),o=C.h.de(a,"webgl2",P.ln(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.u(P.r("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.lD(o,a)
o.getParameter(3379)
o.getParameter(34076)
u=new X.dl(a)
t=new X.fn()
t.c=new X.a8(!1,!1,!1)
t.d=P.bO(P.w)
u.b=t
t=new X.fT(u)
t.f=0
t.r=V.b3()
t.x=V.b3()
t.ch=t.Q=1
u.c=t
t=new X.fu(u)
t.r=0
t.x=V.b3()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hP(u)
t.f=V.b3()
t.r=V.b3()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.da,P.W]])
t=$.eV
u.Q=(t==null?$.eV=new E.dz(E.kq(),E.kr()):t).a===C.o?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.T(r,"contextmenu",u.gel(),!1))
u.z.push(W.T(a,"focus",u.ger(),!1))
u.z.push(W.T(a,"blur",u.ged(),!1))
u.z.push(W.T(r,"keyup",u.gew(),!1))
u.z.push(W.T(r,"keydown",u.geu(),!1))
u.z.push(W.T(a,"mousedown",u.geA(),!1))
u.z.push(W.T(a,"mouseup",u.geE(),!1))
u.z.push(W.T(a,q,u.geC(),!1))
s=u.z
W.jn(a)
W.jn(a)
s.push(W.T(a,W.jn(a),u.geG(),!1))
u.z.push(W.T(r,q,u.gen(),!1))
u.z.push(W.T(r,"mouseup",u.gep(),!1))
u.z.push(W.T(r,"pointerlockchange",u.geI(),!1))
u.z.push(W.T(a,"touchstart",u.geV(),!1))
u.z.push(W.T(a,"touchend",u.geR(),!1))
u.z.push(W.T(a,"touchmove",u.geT(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a7(Date.now(),!1)
p.db=0
p.cn()
return p},
ey:function ey(){},
aV:function aV(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bg:function bg(a){this.b=a},
bq:function bq(a){this.b=a},
dz:function dz(a,b){this.a=a
this.b=b},
hd:function hd(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
dd:function dd(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hL:function hL(a){this.a=a}},Z={
lM:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.dq(b,u)},
aa:function(a){return new Z.b7(a)},
dq:function dq(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iq:function iq(a){this.a=a},
cv:function cv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
I:function(){var u=new D.bk()
u.d=0
return u},
eB:function eB(){},
bk:function bk(){var _=this
_.d=_.c=_.b=_.a=null},
eX:function eX(a){this.a=a},
eY:function eY(a){this.a=a},
R:function R(){this.b=null},
bm:function bm(){this.b=null},
bn:function bn(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ex:function ex(){},
bi:function bi(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Z:function Z(){},
cM:function cM(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h9:function h9(){},
hx:function hx(){}},X={cw:function cw(a,b){this.a=a
this.b=b},cL:function cL(a,b){this.a=a
this.b=b},fn:function fn(){var _=this
_.d=_.c=_.b=_.a=null},cP:function cP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fu:function fu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},aB:function aB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fT:function fT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bS:function bS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ha:function ha(){},dh:function dh(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hP:function hP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lh:function(a){var u=new X.f7(),t=new V.aS(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kc
if(t==null){t=V.kb(0,0,1,1)
$.kc=t}u.r=t
return u},
jk:function jk(){},
f7:function f7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(){}},V={
mZ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.df(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.as("null",c)
return C.b.as(C.d.da(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bD:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.N(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.as(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
cU:function(){var u=$.k4
return u==null?$.k4=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k3:function(a,b,c){var u=c.u(0,Math.sqrt(c.B(c))),t=b.an(u),s=t.u(0,Math.sqrt(t.B(t))),r=u.an(s),q=new V.D(a.a,a.b,a.c),p=s.O(0).B(q),o=r.O(0).B(q),n=u.O(0).B(q)
return V.ak(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b3:function(){var u=$.k7
return u==null?$.k7=new V.a9(0,0):u},
k8:function(){var u=$.am
return u==null?$.am=new V.X(0,0,0):u},
kb:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
c5:function(){var u=$.kn
return u==null?$.kn=new V.D(0,0,0):u},
lL:function(){var u=$.i9
return u==null?$.i9=new V.D(-1,0,0):u},
jB:function(){var u=$.ia
return u==null?$.ia=new V.D(0,1,0):u},
ko:function(){var u=$.ib
return u==null?$.ib=new V.D(0,0,1):u},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
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
az:function az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function(a){P.lK(C.K,new V.jd(a))},
lF:function(a){var u=new V.hq()
u.dz(a,!0)
return u},
cx:function cx(){},
jd:function jd(a){this.a=a},
eL:function eL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fa:function fa(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hq:function hq(){this.b=this.a=null},
hs:function hs(a){this.a=a},
hr:function hr(a){this.a=a},
ht:function ht(a){this.a=a}},U={
jm:function(){var u=new U.eD()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jW:function(a){var u=new U.cy()
u.a=a
return u},
eD:function eD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cy:function cy(){this.b=this.a=null},
bL:function bL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
dm:function dm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cD:function cD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lq:function(a,b){var u=a.aR,t=new A.fy(b,u)
t.dw(b,u)
t.dt(a,b)
return t},
lr:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gaa(a2)+a3.gaa(a3)+a4.gaa(a4)+a5.gaa(a5)+a6.gaa(a6)+a7.gaa(a7)+a8.gaa(a8)+a9.gaa(a9)+b0.gaa(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.q)(b1),++t)d+="_"+H.d(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.q)(b2),++t)d+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.q)(b3),++t)d+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.q)(b4),++t)d+="_"+H.d(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.aN()
if(j){u=$.aM()
e=new Z.b7(e.a|u.a)}if(i){u=$.aL()
e=new Z.b7(e.a|u.a)}if(h){u=$.aK()
e=new Z.b7(e.a|u.a)}return new A.fB(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
j_:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
j0:function(a,b,c){var u
A.j_(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.en(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
m7:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j_(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
m3:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j0(b,t,"ambient")
b.a+="\n"},
m5:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j0(b,t,"diffuse")
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
m8:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j0(b,t,"invDiffuse")
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
me:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j0(b,t,"specular")
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
ma:function(a,b){var u,t,s
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
mc:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j_(b,t,"reflect")
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
md:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j_(b,t,"refract")
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
m4:function(a,b,c){var u,t,s,r,q,p,o=b.b
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
if(typeof u!=="number")return u.a7()
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
m6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.a7()
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
mb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.a7()
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
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.a7()
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
if(u==null)u=$.eV=new E.dz(E.kq(),E.kr())
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
m9:function(a,b){var u,t
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
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mg:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ao("")
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
A.m7(a,j)
A.m3(a,j)
A.m5(a,j)
A.m8(a,j)
A.me(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mc(a,j)
A.md(a,j)}A.ma(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.m4(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.m6(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.mb(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.mf(a,q[o],j)
A.m9(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mh:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b4+"];\n"
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
mj:function(a,b){var u
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
mi:function(a,b){var u
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
ml:function(a,b){var u,t
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
mm:function(a,b){var u,t
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
mk:function(a,b){var u
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
mn:function(a,b){var u
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
return a[0].toUpperCase()+C.b.ab(a,1)},
jA:function(a,b,c,d,e){var u=new A.hW(a,c,e)
u.f=d
P.lo(d,0,P.w)
return u},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a){this.a=a},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b){var _=this
_.hs=_.hr=_.b5=_.aR=_.b4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hF=_.hE=_.hD=_.bL=_.bK=_.bJ=_.bI=_.bH=_.bG=_.bF=_.bE=_.hC=_.hB=_.cT=_.hA=_.hz=_.cS=_.cR=_.hy=_.hx=_.cQ=_.cP=_.hw=_.hv=_.cO=_.hu=_.ht=_.cN=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cs:function cs(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b4=b3
_.aR=b4
_.b5=b5},
c0:function c0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c1:function c1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c3:function c3(a,b,c,d,e,f,g,h,i,j){var _=this
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
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d5:function d5(){},
dj:function dj(){},
i0:function i0(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c},
bv:function bv(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mX:function(){return F.mz(15,30,0.5,1,new F.jf())},
mz:function(a,b,c,d,e){var u=F.mV(a,b,new F.j3(e,d,b,c))
if(u==null)return
u.aE()
u.fR(new F.ii(),new F.h1())
return u},
mV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.hm()
t=new F.ic(u)
t.b=!1
s=[F.c6]
t.c=H.b([],s)
u.a=t
t=new F.hp()
t.b=H.b([],[F.d1])
u.b=t
t=new F.ho(u)
t.b=H.b([],[F.cN])
u.c=t
t=new F.hn(u)
t.b=H.b([],[F.bl])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cw(new V.aS(s,0,0,1),new V.a9(p,1))
c.$3(o,p,0)
r.push(o.cJ(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cw(new V.aS(j,i,h,1),new V.a9(p,m))
c.$3(o,p,n)
r.push(o.cJ(null))}}u.d.fm(a+1,b+1,r)
return u},
eZ:function(a,b,c){var u=new F.bl(),t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.f8(a)
u.f9(b)
u.fa(c)
u.a.a.d.b.push(u)
u.a.a.a1()
return u},
kp:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.c6(),r=new F.il()
r.b=H.b([],[F.d1])
s.b=r
r=new F.ih()
u=[F.cN]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.id()
u=[F.bl]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kW()
s.e=0
r=$.aN()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aM().a)!==0?e:t
s.x=(u&$.aL().a)!==0?b:t
s.y=(u&$.bc().a)!==0?f:t
s.z=(u&$.bd().a)!==0?g:t
s.Q=(u&$.kX().a)!==0?c:t
s.ch=(u&$.bE().a)!==0?i:0
s.cx=(u&$.aK().a)!==0?a:t
return s},
jf:function jf(){},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f_:function f_(){},
hu:function hu(){},
cN:function cN(){},
fp:function fp(){},
hV:function hV(){},
d1:function d1(){},
hm:function hm(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(a){this.a=a
this.b=null},
ho:function ho(a){this.a=a
this.b=null},
hp:function hp(){this.b=null},
c6:function c6(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
ic:function ic(a){this.a=a
this.c=this.b=null},
id:function id(){this.d=this.c=this.b=null},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){this.c=this.b=null},
ij:function ij(){},
ii:function ii(){},
ik:function ik(){},
h1:function h1(){},
il:function il(){this.b=null}},T={hK:function hK(){}},Q={
kE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.lF("Test 009"),a=W.jU()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.m]
b.cz(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],u))
b.cz(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(e)
if(t==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lJ(t,!0,!0,!0,!1)
r=new E.aV()
r.a=""
r.b=!0
u=E.aV
q=O.jl(u)
r.y=q
q.aV(r.gfS(),r.gfV())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc1(0,d)
r.sc1(0,F.mX())
p=new O.cR()
q=O.jl(V.az)
p.e=q
q.aV(p.ge9(),p.geb())
q=new O.aj(p,"emission")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.f=q
q=new O.aj(p,"ambient")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.r=q
q=new O.aj(p,"diffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.x=q
q=new O.aj(p,"invDiffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.y=q
q=new O.fE(p,"specular")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
q.ch=100
p.z=q
q=new O.fA(p,"bump")
q.c=new A.U(!1,!1,!1)
p.Q=q
p.ch=null
q=new O.aj(p,"reflect")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.cx=q
q=new O.fD(p,"refract")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
q.ch=1
p.cy=q
q=new O.fz(p,"alpha")
q.c=new A.U(!1,!1,!1)
q.f=1
p.db=q
q=new D.cM()
q.bg(D.Z)
q.e=H.b([],[D.ex])
q.f=H.b([],[D.bi])
q.r=H.b([],[D.h9])
q.x=H.b([],[D.hx])
q.z=q.y=null
q.c0(q.ge7(),q.geL(),q.geP())
p.dx=q
o=new O.fC()
o.b=new V.aS(0,0,0,0)
o.c=1
o.d=10
o.e=!1
p.dy=o
o=q.y
q=o==null?q.y=D.I():o
q.n(0,p.gf3())
q=p.dx
o=q.z
q=o==null?q.z=D.I():o
q.n(0,p.gef())
p.fr=null
q=p.dx
n=V.jB()
o=U.jW(V.k3(V.k8(),n,new V.D(-1,-1,-1)))
m=new V.Q(1,1,1)
l=new D.bi()
l.c=new V.Q(1,1,1)
l.a=V.ko()
l.d=V.jB()
l.e=V.lL()
k=l.b
l.b=o
o.gv().n(0,l.gdC())
o=new D.B("mover",k,l.b)
o.b=!0
l.ah(o)
if(!l.c.q(0,m)){k=l.c
l.c=m
o=new D.B("color",k,m)
o.b=!0
l.ah(o)}q.n(0,l)
p.f.sam(0,new V.Q(0,0,0))
q=p.r
q.sam(0,new V.Q(0,0,1))
q=p.x
q.sam(0,new V.Q(0,1,0))
q=p.z
q.sam(0,new V.Q(1,0,0))
q=p.z
q.cp(new A.U(!0,!1,!1))
q.cq(10)
j=new U.bL()
j.bg(U.a2)
j.aV(j.ge5(),j.geN())
j.e=null
j.f=V.cU()
j.r=0
q=s.x
o=new U.dn()
l=U.jm()
l.sbZ(0,!0)
l.sbO(6.283185307179586)
l.sbQ(0)
l.sa_(0,0)
l.sbP(100)
l.sR(0)
l.sbD(0.5)
o.b=l
i=o.gaz()
l.gv().n(0,i)
l=U.jm()
l.sbZ(0,!0)
l.sbO(6.283185307179586)
l.sbQ(0)
l.sa_(0,0)
l.sbP(100)
l.sR(0)
l.sbD(0.5)
o.c=l
l.gv().n(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.a8(!1,!1,!1)
k=o.d
o.d=h
l=new D.B(c,k,h)
l.b=!0
o.L(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.B("invertX",l,!1)
l.b=!0
o.L(l)}l=o.r
if(l!==!0){o.r=!0
l=new D.B("invertY",l,!0)
l.b=!0
o.L(l)}o.aQ(q)
j.n(0,o)
q=s.x
o=new U.dm()
l=U.jm()
l.sbZ(0,!0)
l.sbO(6.283185307179586)
l.sbQ(0)
l.sa_(0,0)
l.sbP(100)
l.sR(0)
l.sbD(0.2)
o.b=l
l.gv().n(0,o.gaz())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.a8(!0,!1,!1)
k=o.c
o.c=h
l=new D.B(c,k,h)
l.b=!0
o.L(l)
o.aQ(q)
j.n(0,o)
q=s.x
o=new U.dp()
o.c=0.01
o.e=o.d=0
h=new X.a8(!1,!1,!1)
o.b=h
l=new D.B(c,d,h)
l.b=!0
o.L(l)
o.aQ(q)
j.n(0,o)
j.n(0,U.jW(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=new M.cD()
q.a=!0
u=O.jl(u)
q.e=u
u.aV(q.geh(),q.gej())
q.y=q.x=q.r=q.f=null
g=X.lh(d)
f=new X.d0()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.scZ(d)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.z().a)){f.c=1.0471975511965976
u=new D.B("fov",u,1.0471975511965976)
u.b=!0
f.aA(u)}u=f.d
if(!(Math.abs(u-0.1)<$.z().a)){f.d=0.1
u=new D.B("near",u,0.1)
u.b=!0
f.aA(u)}u=f.e
if(!(Math.abs(u-2000)<$.z().a)){f.e=2000
u=new D.B("far",u,2000)
u.b=!0
f.aA(u)}u=q.b
if(u!==f){if(u!=null)u.gv().S(0,q.gac())
k=q.b
q.b=f
f.gv().n(0,q.gac())
u=new D.B("camera",k,q.b)
u.b=!0
q.ai(u)}u=q.c
if(u!==g){if(u!=null)u.gv().S(0,q.gac())
k=q.c
q.c=g
g.gv().n(0,q.gac())
u=new D.B("target",k,q.c)
u.b=!0
q.ai(u)}q.sd9(d)
q.sd9(p)
q.e.n(0,r)
q.b.scZ(j)
u=s.d
if(u!==q){if(u!=null)u.gv().S(0,s.gc6())
s.d=q
q.gv().n(0,s.gc6())
s.c7()}u=s.Q
if(u==null)u=s.Q=D.I()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.R]}]):q
u.push(new Q.jb(b,p))
V.mT(s)},
jb:function jb(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jt.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.bV(a)},
i:function(a){return"Instance of '"+H.d(H.bW(a))+"'"}}
J.fi.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iat:1}
J.cJ.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.cK.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.h6.prototype={}
J.bw.prototype={}
J.aY.prototype={
i:function(a){var u=a[$.kL()]
if(u==null)return this.dq(a)
return"JavaScript function for "+H.d(J.af(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aW.prototype={
bT:function(a,b){if(!!a.fixed$length)H.u(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.d3(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.u(P.y("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
a4:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aT(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fO:function(a){return this.k(a,"")},
fL:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aT(a))}throw H.c(H.fg())},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dk:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.an(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.an(c,b,u,"end",null))
if(b===c)return H.b([],[H.ae(a,0)])
return H.b(a.slice(b,c),[H.ae(a,0)])},
gfK:function(a){if(a.length>0)return a[0]
throw H.c(H.fg())},
gb7:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fg())},
cA:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aT(a))}return!1},
aL:function(a,b){if(!!a.immutable$list)H.u(P.y("sort"))
H.lI(a,b==null?J.m0():b)},
dj:function(a){return this.aL(a,null)},
w:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
i:function(a){return P.jq(a,"[","]")},
gN:function(a){return new J.a1(a,a.length)},
gH:function(a){return H.bV(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ji(b,u,null))
if(b<0)throw H.c(P.an(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bC(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bC(a,b))
a[b]=c},
$io:1,
$ii:1}
J.js.prototype={}
J.a1.prototype={
gA:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bN.prototype={
aG:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb6(b)
if(this.gb6(a)===u)return 0
if(this.gb6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb6:function(a){return a===0?1/a<0:a<0},
cU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
da:function(a,b){var u
if(b>20)throw H.c(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb6(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
df:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ds:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cr(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cr(a,b)},
cr:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.fe(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fe:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia5:1}
J.cI.prototype={$iw:1}
J.fj.prototype={}
J.aX.prototype={
bC:function(a,b){if(b<0)throw H.c(H.bC(a,b))
if(b>=a.length)H.u(H.bC(a,b))
return a.charCodeAt(b)},
aM:function(a,b){if(b>=a.length)throw H.c(H.bC(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.c(P.ji(b,null,null))
return a+b},
be:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aW:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d3(b,null))
if(b>c)throw H.c(P.d3(b,null))
if(c>a.length)throw H.c(P.d3(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.aW(a,b,null)},
hh:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
as:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
fu:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.an(c,0,u,null,null))
return H.kI(a,b,c)},
w:function(a,b){return this.fu(a,b,0)},
aG:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ba(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im:1}
H.k.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bC(this.a,b)},
$ao:function(){return[P.w]},
$at:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.o.prototype={}
H.cO.prototype={
gN:function(a){return new H.b_(this,this.gl(this))},
bd:function(a,b){return this.dn(0,b)}}
H.b_.prototype={
gA:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.bb(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aT(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.bQ.prototype={
gN:function(a){return new H.cQ(J.aO(this.a),this.b)},
gl:function(a){return J.aP(this.a)},
C:function(a,b){return this.b.$1(J.eo(this.a,b))},
$ai:function(a,b){return[b]}}
H.eS.prototype={$io:1,
$ao:function(a,b){return[b]}}
H.cQ.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gA(t))
return!0}u.a=null
return!1},
gA:function(a){return this.a}}
H.fx.prototype={
gl:function(a){return J.aP(this.a)},
C:function(a,b){return this.b.$1(J.eo(this.a,b))},
$ao:function(a,b){return[b]},
$acO:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.c7.prototype={
gN:function(a){return new H.ir(J.aO(this.a),this.b)}}
H.ir.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gA(u)))return!0
return!1},
gA:function(a){var u=this.a
return u.gA(u)}}
H.cE.prototype={}
H.i4.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dk.prototype={}
H.hT.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fm.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.i3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jg.prototype={
$1:function(a){if(!!J.S(a).$ibj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.e0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bI.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cm(t==null?"unknown":t)+"'"},
ghk:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hH.prototype={}
H.hz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cm(u)+"'"}}
H.bG.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bG))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bV(this.a)
else u=typeof t!=="object"?J.bF(t):H.bV(t)
return(u^H.bV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bW(u))+"'")}}
H.eA.prototype={
i:function(a){return this.a}}
H.hj.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.G.prototype={
gl:function(a){return this.a},
gY:function(a){return new H.bp(this,[H.ae(this,0)])},
ghj:function(a){var u=this,t=H.ae(u,0)
return H.lp(new H.bp(u,[t]),new H.fl(u),t,H.ae(u,1))},
fv:function(a,b){var u=this.b
if(u==null)return!1
return this.dS(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fN(b)},
fN:function(a){var u,t,s=this.d
if(s==null)return
u=this.cj(s,J.bF(a)&0x3ffffff)
t=this.cV(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.ca(u==null?o.b=o.bu():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ca(t==null?o.c=o.bu():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bu()
r=J.bF(b)&0x3ffffff
q=o.cj(s,r)
if(q==null)o.bx(s,r,[o.bv(b,c)])
else{p=o.cV(q,b)
if(p>=0)q[p].b=c
else q.push(o.bv(b,c))}}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aT(u))
t=t.c}},
ca:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.bx(a,b,this.bv(b,c))
else u.b=c},
e2:function(){this.r=this.r+1&67108863},
bv:function(a,b){var u,t=this,s=new H.fq(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.e2()
return s},
cV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
i:function(a){return P.k2(this)},
aY:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
dW:function(a,b){delete a[b]},
dS:function(a,b){return this.aY(a,b)!=null},
bu:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bx(t,u,t)
this.dW(t,u)
return t}}
H.fl.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ae(u,1),args:[H.ae(u,0)]}}}
H.fq.prototype={}
H.bp.prototype={
gl:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fr(u,u.r)
t.c=u.e
return t}}
H.fr.prototype={
gA:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j7.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j8.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j9.prototype={
$1:function(a){return this.a(a)}}
H.fk.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bU.prototype={}
H.cV.prototype={
gl:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bT.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]},
m:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$io:1,
$ao:function(){return[P.M]},
$at:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]}}
H.cW.prototype={
m:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$io:1,
$ao:function(){return[P.w]},
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fU.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fW.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fY.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.cX.prototype={
gl:function(a){return a.length},
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.ca.prototype={}
H.cb.prototype={}
H.cc.prototype={}
H.cd.prototype={}
P.it.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.is.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iu.prototype={
$0:function(){this.a.$0()}}
P.iv.prototype={
$0:function(){this.a.$0()}}
P.e6.prototype={
dG:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bB(new P.iW(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
dH:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bB(new P.iV(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$ide:1}
P.iW.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iV.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ds(u,q)}s.c=r
t.d.$1(s)}}
P.bx.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.by.prototype={
gA:function(a){var u=this.c
if(u==null)return this.b
return u.gA(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bx){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aO(u)
if(!!r.$iby){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iS.prototype={
gN:function(a){return new P.by(this.a())}}
P.dr.prototype={}
P.da.prototype={}
P.hC.prototype={}
P.de.prototype={}
P.iZ.prototype={}
P.j1.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d_():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iI.prototype={
hc:function(a){var u,t,s,r=null
try{if(C.e===$.ad){a.$0()
return}P.mp(r,r,this,a)}catch(s){u=H.au(s)
t=H.jI(s)
P.kx(r,r,this,u,t)}},
hd:function(a,b){var u,t,s,r=null
try{if(C.e===$.ad){a.$1(b)
return}P.mq(r,r,this,a,b)}catch(s){u=H.au(s)
t=H.jI(s)
P.kx(r,r,this,u,t)}},
he:function(a,b){return this.hd(a,b,null)},
fq:function(a){return new P.iJ(this,a)},
cE:function(a,b){return new P.iK(this,a,b)}}
P.iJ.prototype={
$0:function(){return this.a.hc(this.b)}}
P.iK.prototype={
$1:function(a){return this.a.he(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iF.prototype={
gN:function(a){var u=new P.dI(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
w:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dQ(b)
return t}},
dQ:function(a){var u=this.d
if(u==null)return!1
return this.bl(this.ci(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cb(u==null?s.b=P.jC():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cb(t==null?s.c=P.jC():t,b)}else return s.dJ(0,b)},
dJ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jC()
u=s.cd(b)
t=r[u]
if(t==null)r[u]=[s.bi(b)]
else{if(s.bl(t,b)>=0)return!1
t.push(s.bi(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eY(this.c,b)
else return this.eX(0,b)},
eX:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ci(r,b)
t=s.bl(u,b)
if(t<0)return!1
s.ct(u.splice(t,1)[0])
return!0},
cb:function(a,b){if(a[b]!=null)return!1
a[b]=this.bi(b)
return!0},
eY:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.ct(u)
delete a[b]
return!0},
cc:function(){this.r=1073741823&this.r+1},
bi:function(a){var u,t=this,s=new P.iG(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cc()
return s},
ct:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cc()},
cd:function(a){return J.bF(a)&1073741823},
ci:function(a,b){return a[this.cd(b)]},
bl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.iG.prototype={}
P.dI.prototype={
gA:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.ff.prototype={}
P.fs.prototype={$io:1,$ii:1}
P.t.prototype={
gN:function(a){return new H.b_(a,this.gl(a))},
C:function(a,b){return this.h(a,b)},
hg:function(a,b){var u,t,s=this,r=H.b([],[H.mF(s,a,"t",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hf:function(a){return this.hg(a,!0)},
i:function(a){return P.jq(a,"[","]")}}
P.fv.prototype={}
P.fw.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:8}
P.V.prototype={
G:function(a,b){var u,t
for(u=J.aO(this.gY(a));u.t();){t=u.gA(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aP(this.gY(a))},
i:function(a){return P.k2(a)}}
P.iM.prototype={
a4:function(a,b){var u
for(u=J.aO(b);u.t();)this.n(0,u.gA(u))},
i:function(a){return P.jq(this,"{","}")},
C:function(a,b){var u,t,s
P.ka(b,"index")
for(u=P.lW(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
$io:1,
$ii:1}
P.dJ.prototype={}
P.eC.prototype={}
P.eF.prototype={}
P.eU.prototype={}
P.fd.prototype={
i:function(a){return this.a}}
P.fc.prototype={
dT:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ao("")
if(r>b)q.a+=C.b.aW(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l5(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i7.prototype={}
P.i8.prototype={
fw:function(a){var u,t,s,r=P.jx(0,null,a.length)
if(typeof r!=="number")return r.D()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iX(t)
if(s.dY(a,0,r)!==r)s.cu(C.b.bC(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lZ(0,s.b,t.length)))}}
P.iX.prototype={
cu:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dY:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bC(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aM(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cu(r,C.b.aM(a,p)))s=p}else if(r<=2047){q=n.b
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
P.at.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aG:function(a,b){return C.c.aG(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.ld(H.lz(u)),s=P.cz(H.lx(u)),r=P.cz(H.lt(u)),q=P.cz(H.lu(u)),p=P.cz(H.lw(u)),o=P.cz(H.ly(u)),n=P.le(H.lv(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.aU.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aG:function(a,b){return C.c.aG(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eR(),q=this.a
if(q<0)return"-"+new P.aU(0-q).i(0)
u=r.$1(C.c.W(q,6e7)%60)
t=r.$1(C.c.W(q,1e6)%60)
s=new P.eQ().$1(q%1e6)
return""+C.c.W(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
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
P.bj.prototype={}
P.d_.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbk()+o+u
if(!q.a)return t
s=q.gbj()
r=P.jp(q.b)
return t+s+": "+r}}
P.bs.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fe.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t=this.b
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.i5.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bY.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eE.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jp(u)+"."}}
P.h5.prototype={
i:function(a){return"Out of Memory"},
$ibj:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$ibj:1}
P.eK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dA.prototype={
i:function(a){return"Exception: "+this.a}}
P.f6.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aW(s,0,75)+"...":s
return t+"\n"+r}}
P.f8.prototype={}
P.w.prototype={}
P.i.prototype={
bd:function(a,b){return new H.c7(this,b,[H.jH(this,"i",0)])},
gl:function(a){var u,t=this.gN(this)
for(u=0;t.t();)++u
return u},
gax:function(a){var u,t=this.gN(this)
if(!t.t())throw H.c(H.fg())
u=t.gA(t)
if(t.t())throw H.c(H.lj())
return u},
C:function(a,b){var u,t,s
P.ka(b,"index")
for(u=this.gN(this),t=0;u.t();){s=u.gA(u)
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
i:function(a){return P.li(this,"(",")")}}
P.fh.prototype={}
P.ac.prototype={$io:1,$ii:1}
P.bP.prototype={}
P.b1.prototype={
gH:function(a){return P.W.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.W.prototype={constructor:P.W,$iW:1,
q:function(a,b){return this===b},
gH:function(a){return H.bV(this)},
i:function(a){return"Instance of '"+H.d(H.bW(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.ao.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.ep.prototype={
gl:function(a){return a.length}}
W.eq.prototype={
i:function(a){return String(a)}}
W.er.prototype={
i:function(a){return String(a)}}
W.ct.prototype={}
W.bf.prototype={$ibf:1}
W.bh.prototype={
de:function(a,b,c){var u=a.getContext(b,P.my(c))
return u},
$ibh:1}
W.aQ.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bJ.prototype={
gl:function(a){return a.length}}
W.eH.prototype={}
W.a6.prototype={}
W.ai.prototype={}
W.eI.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eM.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.eN.prototype={
i:function(a){return String(a)}}
W.cB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[[P.a3,P.a5]]},
$ix:1,
$ax:function(){return[[P.a3,P.a5]]},
$at:function(){return[[P.a3,P.a5]]},
$ii:1,
$ai:function(){return[[P.a3,P.a5]]}}
W.cC.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaw(a))+" x "+H.d(this.gao(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbb(b)&&this.gaw(a)===u.gaw(b)&&this.gao(a)===u.gao(b)},
gH:function(a){return W.kt(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaw(a)),C.d.gH(this.gao(a)))},
gcF:function(a){return a.bottom},
gao:function(a){return a.height},
gb8:function(a){return a.left},
gbW:function(a){return a.right},
gbb:function(a){return a.top},
gaw:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a5]}}
W.eO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[P.m]},
$ix:1,
$ax:function(){return[P.m]},
$at:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]}}
W.eP.prototype={
gl:function(a){return a.length}}
W.ix.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.hf(this)
return new J.a1(u,u.length)},
$ao:function(){return[W.O]},
$at:function(){return[W.O]},
$ai:function(){return[W.O]}}
W.O.prototype={
gfp:function(a){return new W.iz(a)},
gcG:function(a){return new W.ix(a,a.children)},
gcH:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
a5:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jZ
if(u==null){u=H.b([],[W.aC])
t=new W.cZ(u)
u.push(W.ks(null))
u.push(W.ku())
$.jZ=t
d=t}else d=u
u=$.jY
if(u==null){u=new W.eb(d)
$.jY=u
c=u}else{u.a=d
c=u}}if($.aw==null){u=document
t=u.implementation.createHTMLDocument("")
$.aw=t
$.jo=t.createRange()
s=$.aw.createElement("base")
s.href=u.baseURI
$.aw.head.appendChild(s)}u=$.aw
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aw
if(!!this.$ibf)r=u.body
else{r=u.createElement(a.tagName)
$.aw.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.P,a.tagName)){$.jo.selectNodeContents(r)
q=$.jo.createContextualFragment(b)}else{r.innerHTML=b
q=$.aw.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aw.body
if(r==null?u!=null:r!==u)J.jQ(r)
c.c_(q)
document.adoptNode(q)
return q},
fz:function(a,b,c){return this.a5(a,b,c,null)},
dh:function(a,b){a.textContent=null
a.appendChild(this.a5(a,b,null,null))},
$iO:1,
gd8:function(a){return a.tagName}}
W.eT.prototype={
$1:function(a){return!!J.S(a).$iO}}
W.h.prototype={$ih:1}
W.e.prototype={
fl:function(a,b,c,d){if(c!=null)this.dK(a,b,c,!1)},
dK:function(a,b,c,d){return a.addEventListener(b,H.bB(c,1),!1)}}
W.ax.prototype={$iax:1}
W.f0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ax]},
$ix:1,
$ax:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]}}
W.f1.prototype={
gl:function(a){return a.length}}
W.f5.prototype={
gl:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fb.prototype={
gl:function(a){return a.length}}
W.bM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$at:function(){return[W.A]},
$ii:1,
$ai:function(){return[W.A]}}
W.bo.prototype={$ibo:1}
W.ft.prototype={
i:function(a){return String(a)}}
W.fN.prototype={
gl:function(a){return a.length}}
W.fO.prototype={
h:function(a,b){return P.aJ(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.G(a,new W.fP(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
W.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fQ.prototype={
h:function(a,b){return P.aJ(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.G(a,new W.fR(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.fS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aA]},
$ix:1,
$ax:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]}}
W.al.prototype={$ial:1}
W.Y.prototype={
gax:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.kd("No elements"))
if(t>1)throw H.c(P.kd("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cF(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ao:function(){return[W.A]},
$at:function(){return[W.A]},
$ai:function(){return[W.A]}}
W.A.prototype={
h6:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ha:function(a,b){var u,t
try{u=a.parentNode
J.l0(u,b,a)}catch(t){H.au(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dm(a):u},
f1:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.cY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$at:function(){return[W.A]},
$ii:1,
$ai:function(){return[W.A]}}
W.aD.prototype={$iaD:1,
gl:function(a){return a.length}}
W.h8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aD]},
$ix:1,
$ax:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]}}
W.hh.prototype={
h:function(a,b){return P.aJ(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.G(a,new W.hi(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
W.hi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hk.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.hv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aE]},
$ix:1,
$ax:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.aF.prototype={$iaF:1}
W.hw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aF]},
$ix:1,
$ax:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.aG.prototype={$iaG:1,
gl:function(a){return a.length}}
W.hA.prototype={
h:function(a,b){return a.getItem(b)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gY:function(a){var u=H.b([],[P.m])
this.G(a,new W.hB(u))
return u},
gl:function(a){return a.length},
$aV:function(){return[P.m,P.m]}}
W.hB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.db.prototype={
a5:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
u=W.lf("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Y(t).a4(0,new W.Y(u))
return t}}
W.hE.prototype={
a5:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gax(u)
s.toString
u=new W.Y(s)
r=u.gax(u)
t.toString
r.toString
new W.Y(t).a4(0,new W.Y(r))
return t}}
W.hF.prototype={
a5:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gax(u)
t.toString
s.toString
new W.Y(t).a4(0,new W.Y(s))
return t}}
W.bZ.prototype={$ibZ:1}
W.aH.prototype={$iaH:1}
W.aq.prototype={$iaq:1}
W.hI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aq]},
$ix:1,
$ax:function(){return[W.aq]},
$at:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]}}
W.hJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aH]},
$ix:1,
$ax:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]}}
W.hM.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bt.prototype={$ibt:1}
W.hQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aI]},
$ix:1,
$ax:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]}}
W.hR.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.i6.prototype={
i:function(a){return String(a)}}
W.ip.prototype={
gl:function(a){return a.length}}
W.b8.prototype={
gfC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
gfB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ib8:1}
W.c8.prototype={
f2:function(a,b){return a.requestAnimationFrame(H.bB(b,1))},
dX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.F]},
$ix:1,
$ax:function(){return[W.F]},
$at:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]}}
W.du.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbb(b)&&a.width===u.gaw(b)&&a.height===u.gao(b)},
gH:function(a){return W.kt(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gao:function(a){return a.height},
gaw:function(a){return a.width}}
W.iC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ay]},
$ix:1,
$ax:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]}}
W.dO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$at:function(){return[W.A]},
$ii:1,
$ai:function(){return[W.A]}}
W.iP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aG]},
$ix:1,
$ax:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]}}
W.iQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ap]},
$ix:1,
$ax:function(){return[W.ap]},
$at:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]}}
W.iw.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.gY(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gY:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aV:function(){return[P.m,P.m]}}
W.iz.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gY(this).length}}
W.iA.prototype={}
W.iB.prototype={
$1:function(a){return this.a.$1(a)}}
W.c9.prototype={
dB:function(a){var u
if($.dD.a===0){for(u=0;u<262;++u)$.dD.m(0,C.O[u],W.mH())
for(u=0;u<12;++u)$.dD.m(0,C.l[u],W.mI())}},
aD:function(a){return $.kZ().w(0,W.bK(a))},
ae:function(a,b,c){var u=$.dD.h(0,H.d(W.bK(a))+"::"+b)
if(u==null)u=$.dD.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaC:1}
W.J.prototype={
gN:function(a){return new W.cF(a,this.gl(a))}}
W.cZ.prototype={
aD:function(a){return C.a.cA(this.a,new W.h0(a))},
ae:function(a,b,c){return C.a.cA(this.a,new W.h_(a,b,c))},
$iaC:1}
W.h0.prototype={
$1:function(a){return a.aD(this.a)}}
W.h_.prototype={
$1:function(a){return a.ae(this.a,this.b,this.c)}}
W.dW.prototype={
dF:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.bd(0,new W.iN())
t=b.bd(0,new W.iO())
this.b.a4(0,u)
s=this.c
s.a4(0,C.Q)
s.a4(0,t)},
aD:function(a){return this.a.w(0,W.bK(a))},
ae:function(a,b,c){var u=this,t=W.bK(a),s=u.c
if(s.w(0,H.d(t)+"::"+b))return u.d.fn(c)
else if(s.w(0,"*::"+b))return u.d.fn(c)
else{s=u.b
if(s.w(0,H.d(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.d(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1},
$iaC:1}
W.iN.prototype={
$1:function(a){return!C.a.w(C.l,a)}}
W.iO.prototype={
$1:function(a){return C.a.w(C.l,a)}}
W.iT.prototype={
ae:function(a,b,c){if(this.dr(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.iU.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iR.prototype={
aD:function(a){var u=J.S(a)
if(!!u.$ibX)return!1
u=!!u.$ij
if(u&&W.bK(a)==="foreignObject")return!1
if(u)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.b.be(b,"on"))return!1
return this.aD(a)},
$iaC:1}
W.cF.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cp(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gA:function(a){return this.d}}
W.aC.prototype={}
W.iL.prototype={}
W.eb.prototype={
c_:function(a){new W.iY(this).$2(a,null)},
aP:function(a,b){if(b==null)J.jQ(a)
else b.removeChild(a)},
f6:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l3(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.af(a)}catch(r){H.au(r)}try{s=W.bK(a)
this.f5(a,b,p,t,s,o,n)}catch(r){if(H.au(r) instanceof P.ag)throw r
else{this.aP(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
f5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aP(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aD(a)){p.aP(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ae(a,"is",g)){p.aP(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gY(f)
t=H.b(u.slice(0),[H.ae(u,0)])
for(s=f.gY(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.ae(a,J.l6(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$ibZ)p.c_(a.content)}}
W.iY.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.f6(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aP(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dt.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.ce.prototype={}
W.cf.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.e7.prototype={}
W.e8.prototype={}
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
P.j2.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.f2.prototype={
gaZ:function(){var u=this.b,t=H.jH(u,"t",0)
return new H.bQ(new H.c7(u,new P.f3(),[t]),new P.f4(),[t,W.O])},
m:function(a,b,c){var u=this.gaZ()
J.l4(u.b.$1(J.eo(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aP(this.gaZ().a)},
h:function(a,b){var u=this.gaZ()
return u.b.$1(J.eo(u.a,b))},
gN:function(a){var u=P.jv(this.gaZ(),!1,W.O)
return new J.a1(u,u.length)},
$ao:function(){return[W.O]},
$at:function(){return[W.O]},
$ai:function(){return[W.O]}}
P.f3.prototype={
$1:function(a){return!!J.S(a).$iO}}
P.f4.prototype={
$1:function(a){return H.n(a,"$iO")}}
P.iH.prototype={
gbW:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.v(t)
return u+t},
gcF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.d(u.a)+", "+H.d(u.b)+") "+H.d(u.c)+" x "+H.d(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia3){t=q.a
if(t==u.gb8(b)){s=q.b
if(s==u.gbb(b)){r=q.c
if(typeof t!=="number")return t.E()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gbW(b)){t=q.d
if(typeof s!=="number")return s.E()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.bF(t),r=u.b,q=J.bF(r),p=u.c
if(typeof t!=="number")return t.E()
if(typeof p!=="number")return H.v(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.E()
if(typeof t!=="number")return H.v(t)
t=C.c.gH(r+t)
return P.lV(P.iE(P.iE(P.iE(P.iE(0,s),q),p),t))}}
P.a3.prototype={
gb8:function(a){return this.a},
gbb:function(a){return this.b},
gaw:function(a){return this.c},
gao:function(a){return this.d}}
P.aZ.prototype={$iaZ:1}
P.fo.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.aZ]},
$at:function(){return[P.aZ]},
$ii:1,
$ai:function(){return[P.aZ]}}
P.b2.prototype={$ib2:1}
P.h3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.b2]},
$at:function(){return[P.b2]},
$ii:1,
$ai:function(){return[P.b2]}}
P.hb.prototype={
gl:function(a){return a.length}}
P.bX.prototype={$ibX:1}
P.hD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.m]},
$at:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]}}
P.j.prototype={
gcG:function(a){return new P.f2(a,new W.Y(a))},
a5:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aC])
p.push(W.ks(null))
p.push(W.ku())
p.push(new W.iR())
c=new W.eb(new W.cZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fz(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.Y(s)
q=p.gax(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b4.prototype={$ib4:1}
P.hS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.b4]},
$at:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]}}
P.dG.prototype={}
P.dH.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.e9.prototype={}
P.ea.prototype={}
P.et.prototype={
gl:function(a){return a.length}}
P.eu.prototype={
h:function(a,b){return P.aJ(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.G(a,new P.ev(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
P.ev.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ew.prototype={
gl:function(a){return a.length}}
P.be.prototype={}
P.h4.prototype={
gl:function(a){return a.length}}
P.ds.prototype={}
P.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return P.aJ(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[[P.bP,,,]]},
$at:function(){return[[P.bP,,,]]},
$ii:1,
$ai:function(){return[[P.bP,,,]]}}
P.dZ.prototype={}
P.e_.prototype={}
K.av.prototype={
ar:function(a,b){return!0},
i:function(a){return"all"}}
K.cG.prototype={
ar:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].ar(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b0.prototype={}
K.a_.prototype={
ar:function(a,b){return!this.dl(0,b)},
i:function(a){return"!["+this.c3(0)+"]"}}
K.hc.prototype={
ar:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jw(this.a),t=H.jw(this.b)
return u+".."+t}}
K.hl.prototype={
dv:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.G([u,P.at])
for(s=new H.b_(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.jv(new H.bp(t,[u]),!0,u)
C.a.dj(r)
this.a=r},
ar:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.jy(this.a)}}
L.d9.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.di(this.a.j(0,b))
r.a=H.b([],[K.b0])
r.c=!1
this.c.push(r)
return r},
fJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.ar(0,a))return r}return},
i:function(a){return this.b},
cs:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.w(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bp(n,[H.ae(n,0)]),n=n.gN(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.w(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.q)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.df.prototype={
i:function(a){var u=H.jM(this.b,"\n","\\n"),t=H.jM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dg.prototype={
at:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hN.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d9(this,b)
u.c=H.b([],[L.di])
this.a.m(0,b,u)}return u},
K:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dg(a)
u=P.m
t.c=new H.G([u,u])
this.b.m(0,a,t)}return t},
bX:function(a){return this.hi(a)},
hi:function(a){var u=this
return P.m2(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$bX(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bT(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fJ(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jy(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.y("removeRange"))
P.jx(0,m,d.length)
d.splice(0,m-0)
C.a.a4(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.w(0,p.a)?7:8
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
if(g.d!=null){j=P.jy(e)
i=g.d
h=i.c.h(0,j)
p=new L.df(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.w(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lT()
case 1:return P.lU(q)}}},L.df)},
i:function(a){var u,t=new P.ao(""),s=this.d
if(s!=null)t.a=s.cs()+"\n"
for(s=this.a,s=s.ghj(s),s=new H.cQ(J.aO(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cs()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.di.prototype={
i:function(a){return this.b.b+": "+this.c3(0)}}
O.aR.prototype={
bg:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c0:function(a,b,c){this.b=b
this.c=a},
aV:function(a,b){return this.c0(a,null,b)},
eK:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dA:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.a1(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jH(s,"aR",0)]
if(s.eK(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dA(t,H.b([b],r))}},
$ii:1}
O.bR.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.I():u},
ay:function(){var u=this.b
if(u!=null)u.F(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gb7(u)
else return V.cU()},
d5:function(a){var u=this.a
if(a==null)u.push(V.cU())
else u.push(a)
this.ay()},
bS:function(){var u=this.a
if(u.length>0){u.pop()
this.ay()}}}
E.ey.prototype={}
E.aV.prototype={
sc1:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().S(0,s.gd1())
u=s.c
if(u!=null)u.gv().n(0,s.gd1())
t=new D.B("shape",r,s.c)
t.b=!0
s.b9(t)}},
ag:function(a,b){var u
for(u=this.y.a,u=new J.a1(u,u.length);u.t();)u.d.ag(0,b)},
aI:function(a){var u,t=this,s=a.dx
s.a.push(s.gU(s))
s.ay()
a.d6(t.f)
s=a.dy
u=(s&&C.a).gb7(s)
if(u!=null&&t.d!=null)u.h9(a,t)
for(s=t.y.a,s=new J.a1(s,s.length);s.t();)s.d.aI(a)
a.d4()
a.dx.bS()},
b9:function(a){var u=this.z
if(u!=null)u.F(a)},
a1:function(){return this.b9(null)},
d2:function(a){this.e=null
this.b9(a)},
fX:function(){return this.d2(null)},
d0:function(a){this.b9(a)},
fU:function(){return this.d0(null)},
fT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd_(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bk()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a1()},
fW:function(a,b){var u,t
for(u=b.gN(b),t=this.gd_();u.t();)u.gA(u).gv().S(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bg.prototype={
i:function(a){return this.b}}
E.bq.prototype={
i:function(a){return this.b}}
E.dz.prototype={}
E.hd.prototype={
du:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bR()
t=[V.az]
u.a=H.b([],t)
u.gv().n(0,new E.he(s))
s.cy=u
u=new O.bR()
u.a=H.b([],t)
u.gv().n(0,new E.hf(s))
s.db=u
u=new O.bR()
u.a=H.b([],t)
u.gv().n(0,new E.hg(s))
s.dx=u
u=H.b([],[O.dc])
s.dy=u
u.push(null)
s.fr=new H.G([P.m,A.d5])},
gh5:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.p(0,u.gU(u))
s=u}return s},
d6:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb7(u):a)},
d4:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.he.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hf.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hg.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dd.prototype={
c8:function(a){this.d7()},
c7:function(){return this.c8(null)},
gfM:function(){var u,t=this,s=Date.now(),r=C.c.W(P.jX(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.v(r)
u=C.d.cU(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.cU(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kg(C.i,s.ghb())}},
d7:function(){if(!this.cx){this.cx=!0
var u=window
C.y.dX(u)
C.y.f2(u,W.ky(new E.hL(this),P.a5))}},
h8:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cn()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jX(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ay()
r=s.db
C.a.sl(r.a,0)
r.ay()
r=s.dx
C.a.sl(r.a,0)
r.ay()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.aI(p.e)}s=p.Q
if(s!=null)s.F(null)}catch(q){u=H.au(q)
t=H.jI(q)
P.jL("Error: "+H.d(u))
P.jL("Stack: "+H.d(t))
throw H.c(u)}}}
E.hL.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.h8()}}}
Z.dq.prototype={}
Z.cu.prototype={
b1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.iq.prototype={}
Z.cv.prototype={
aH:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b1(a)},
dc:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aI:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.af(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.cH.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bW(this.c))+"'")+"]"}}
Z.b7.prototype={
gc2:function(a){var u=this.a,t=(u&$.aN().a)!==0?3:0
if((u&$.aM().a)!==0)t+=3
if((u&$.aL().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=2
if((u&$.bd().a)!==0)t+=3
if((u&$.cn().a)!==0)t+=3
if((u&$.co().a)!==0)t+=4
if((u&$.bE().a)!==0)++t
return(u&$.aK().a)!==0?t+4:t},
fo:function(a){var u,t=$.aN(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.co()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0)if(u===a)return t
return $.kY()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aN().a)!==0)u.push("Pos")
if((t&$.aM().a)!==0)u.push("Norm")
if((t&$.aL().a)!==0)u.push("Binm")
if((t&$.bc().a)!==0)u.push("Txt2D")
if((t&$.bd().a)!==0)u.push("TxtCube")
if((t&$.cn().a)!==0)u.push("Clr3")
if((t&$.co().a)!==0)u.push("Clr4")
if((t&$.bE().a)!==0)u.push("Weight")
if((t&$.aK().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eB.prototype={}
D.bk.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.R()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.G(P.jv(u,!0,{func:1,ret:-1,args:[D.R]}),new D.eX(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.R]}])
C.a.G(u,new D.eY(q))}return!0},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.eX.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eY.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cw.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cw))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cL.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fn.prototype={
h1:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
fY:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cP.prototype={}
X.fu.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.aB(a,V.b3(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
bR:function(a,b){this.r=a.a
return!1},
aT:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dg()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aN(a,b))
return!0},
h2:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.bS(new V.E(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
ez:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cP(c,r.a.gaF(),b)
s.b=!0
t.F(s)
r.y=new P.a7(u,!1)
r.x=V.b3()}}
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
X.aB.prototype={}
X.fT.prototype={
bm:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaF(),r=new X.aB(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bR:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bm(a,b,!0))
return!0},
aT:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dg()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bm(a,b,!0))
return!0},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bm(a,b,!1))
return!0},
h3:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.bS(new V.E(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gcL:function(){var u=this.b
return u==null?this.b=D.I():u},
gbY:function(){var u=this.c
return u==null?this.c=D.I():u},
gcY:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.bS.prototype={}
X.ha.prototype={}
X.dh.prototype={}
X.hP.prototype={
aN:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.b3(),r=u.a.gaF(),q=new X.dh(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h0:function(a){var u=this.b
if(u==null)return!1
u.F(this.aN(a,!0))
return!0},
fZ:function(a){var u=this.c
if(u==null)return!1
u.F(this.aN(a,!0))
return!0},
h_:function(a){var u=this.d
if(u==null)return!1
u.F(this.aN(a,!1))
return!0}}
X.dl.prototype={
gaF:function(){var u=this.a,t=C.h.gcH(u).c
t.toString
u=C.h.gcH(u).d
u.toString
return V.kb(0,0,t,u)},
cf:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cL(u,new X.a8(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
by:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
al:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.D()
u=t.top
if(typeof r!=="number")return r.D()
return new V.a9(s-q,r-u)},
aO:function(a){return new V.E(a.movementX,a.movementY)},
bw:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.a9(r.pageX)
C.d.a9(r.pageY)
p=o.left
C.d.a9(r.pageX)
n.push(new V.a9(q-p,C.d.a9(r.pageY)-o.top))}return n},
aj:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cw(u,new X.a8(t,a.altKey,a.shiftKey))},
bn:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.D()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.D()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
es:function(a){this.f=!0},
ee:function(a){this.f=!1},
em:function(a){if(this.f&&this.bn(a))a.preventDefault()},
ex:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.h1(u)},
ev:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fY(u)},
eB:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.aj(a)
t=r.aO(a)
if(r.d.bR(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aj(a)
s=r.al(a)
if(r.c.bR(u,s))a.preventDefault()},
eF:function(a){var u,t,s,r=this
r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aT(u,s))a.preventDefault()},
eq:function(a){var u,t,s,r=this
if(!r.bn(a)){r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aT(u,s))a.preventDefault()}},
eD:function(a){var u,t,s,r=this
r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aS(u,s))a.preventDefault()},
eo:function(a){var u,t,s,r=this
if(!r.bn(a)){r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aS(u,s))a.preventDefault()}},
eH:function(a){var u,t,s=this
s.aC(a)
u=new V.E((a&&C.x).gfB(a),C.x.gfC(a)).p(0,s.Q)
if(s.x){if(s.d.h2(u))a.preventDefault()
return}if(s.r)return
t=s.al(a)
if(s.c.h3(u,t))a.preventDefault()},
eJ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aj(s.y)
t=s.al(s.y)
s.d.ez(u,t,r)}},
eW:function(a){var u,t=this
t.a.focus()
t.f=!0
t.by(a)
u=t.bw(a)
if(t.e.h0(u))a.preventDefault()},
eS:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fZ(u))a.preventDefault()},
eU:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.h_(u))a.preventDefault()}}
D.ex.prototype={$iZ:1}
D.bi.prototype={
ah:function(a){var u=this.r
if(u!=null)u.F(a)},
dD:function(){return this.ah(null)},
$iZ:1}
D.Z.prototype={}
D.cM.prototype={
ah:function(a){var u=this.y
if(u!=null)u.F(a)},
cl:function(a){var u=this.z
if(u!=null)u.F(a)},
ey:function(){return this.cl(null)},
eM:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.dR(s))return!1}return!0},
e8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gck(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.bi)this.f.push(q)
p=q.r
if(p==null){p=new D.bk()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bm()
u.b=!0
this.ah(u)},
eQ:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gck();u.t();){s=u.gA(u)
C.a.S(this.e,s)
s.gv().S(0,t)}u=new D.bn()
u.b=!0
this.ah(u)},
dR:function(a){var u=C.a.w(this.f,a)
return u},
$ai:function(){return[D.Z]},
$aaR:function(){return[D.Z]}}
D.h9.prototype={$iZ:1}
D.hx.prototype={$iZ:1}
V.Q.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.aS.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aS))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.eW.prototype={}
V.cT.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cT))return!1
u=b.a
t=$.z().a
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bD(H.b([q.a,q.d,q.r],p),3,0),n=V.bD(H.b([q.b,q.e,q.x],p),3,0),m=V.bD(H.b([q.c,q.f,q.y],p),3,0)
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
V.az.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
cW:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.cU()
u=1/b1
t=-n
s=-a0
return V.ak((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ak(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aU:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.X(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.z().a
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
i:function(a){return this.P()},
J:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bD(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bD(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bD(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bD(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.J("")}}
V.a9.prototype={
D:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.X.prototype={
E:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
D:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.d4.prototype={
ga0:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.E.prototype={
bM:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
if(typeof b!=="number")return H.v(b)
u=this.b
if(typeof u!=="number")return u.p()
return new V.E(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.kk
return u==null?$.kk=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.E(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.D.prototype={
bM:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
an:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.D(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.z().a)return V.c5()
return new V.D(this.a/b,this.b/b,this.c/b)},
cX:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.eD.prototype={
bh:function(a){var u=V.mZ(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
L:function(a){var u=this.y
if(u!=null)u.F(a)},
sbZ:function(a,b){},
sbO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bh(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sbQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bh(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sa_:function(a,b){var u,t=this
b=t.bh(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.L(u)}},
sbP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.L(t)}},
sbD:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.L(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cy.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.I():u},
aJ:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.bL.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u},
L:function(a){var u=this.e
if(u!=null)u.F(a)},
X:function(){return this.L(null)},
e6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaz(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gv()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bm()
u.b=!0
this.L(u)},
eO:function(a,b){var u,t
for(u=b.gN(b),t=this.gaz();u.t();)u.gA(u).gv().S(0,t)
u=new D.bn()
u.b=!0
this.L(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a1(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.cU():u
r=s.e
if(r!=null)r.au(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bL))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.H(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a2]},
$aaR:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.dm.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.I():u},
L:function(a){var u=this.cy
if(u!=null)u.F(a)},
X:function(){return this.L(null)},
aQ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcL().n(0,u.gbo())
u.a.c.gcY().n(0,u.gbq())
u.a.c.gbY().n(0,u.gbs())
return!0},
bp:function(a){var u=this
if(!J.H(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaB")
if(!n.y)return
if(n.x){u=a.d.D(0,a.y)
u=new V.E(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.D(0,a.y)
u=new V.E(t.a,t.b).p(0,2).u(0,u.ga0())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=new V.E(s.a,s.b).p(0,2).u(0,u.ga0())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
n.b.sR(0)
t=t.D(0,a.z)
n.Q=new V.E(t.a,t.b).p(0,2).u(0,u.ga0())}n.X()},
bt:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sR(t*10*s)
r.X()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.ch=p
u=b.y
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ak(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia2:1}
U.dn.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.I():u},
L:function(a){var u=this.fx
if(u!=null)u.F(a)},
X:function(){return this.L(null)},
aQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcL().n(0,s.gbo())
s.a.c.gcY().n(0,s.gbq())
s.a.c.gbY().n(0,s.gbs())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.n(0,s.gdZ())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.ge0())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.n(0,s.gfj())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.gfh())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.n(0,s.gff())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.E(u,t)},
bp:function(a){var u=this
H.n(a,"$iaB")
if(!J.H(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaB")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.E(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.ad(new V.E(t.a,t.b).p(0,2).u(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ad(new V.E(s.a,s.b).p(0,2).u(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.D(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).p(0,2).u(0,u.ga0()))}n.X()},
bt:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
r.X()}},
e_:function(a){var u=this
if(H.n(a,"$icP").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e1:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaB")
if(!J.H(n.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ad(new V.E(s.a,s.b).p(0,2).u(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.D(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).p(0,2).u(0,u.ga0()))
n.X()},
fk:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fi:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$idh")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.E(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.ad(new V.E(t.a,t.b).p(0,2).u(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.ad(new V.E(s.a,s.b).p(0,2).u(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.D(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).p(0,2).u(0,u.ga0()))}n.X()},
fg:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
r.X()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.dy=p
u=b.y
r.c.ag(0,u)
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ak(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.p(0,V.ak(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia2:1}
U.dp.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.I():u},
L:function(a){var u=this.r
if(u!=null)u.F(a)},
aQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.ge3()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).n(0,t)
return!0},
e4:function(a){var u,t,s,r,q=this
if(!J.H(q.b,q.a.b.c))return
H.n(a,"$ibS")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.L(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ak(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia2:1}
M.cD.prototype={
ai:function(a){var u=this.y
if(u!=null)u.F(a)},
dE:function(){return this.ai(null)},
ei:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gac(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bk()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bm()
u.b=!0
this.ai(u)},
ek:function(a,b){var u,t
for(u=b.gN(b),t=this.gac();u.t();)u.gA(u).gv().S(0,t)
u=new D.bn()
u.b=!0
this.ai(u)},
sd9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().S(0,t.gac())
u=t.d
t.d=a
if(a!=null)a.gv().n(0,t.gac())
s=new D.B("technique",u,t.d)
s.b=!0
t.ai(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
aI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.d6(f.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.a9(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.a9(p*r)
p=C.d.a9(q.c*s)
a.c=p
q=C.d.a9(q.d*r)
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
i=V.ak(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.d5(i)
t=$.k6
if(t==null){t=V.k8()
q=V.jB()
p=$.kl
t=V.k3(t,q,p==null?$.kl=new V.D(0,0,-1):p)
$.k6=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aJ(0,a,u)
if(g!=null)h=g.p(0,h)}a.db.d5(h)
u=f.d
if(u!=null)u.ag(0,a)
for(u=f.e.a,u=new J.a1(u,u.length);u.t();)u.d.ag(0,a)
for(u=f.e.a,u=new J.a1(u,u.length);u.t();)u.d.aI(a)
f.b.toString
a.cy.bS()
a.db.bS()
f.c.toString
a.d4()}}
A.cr.prototype={}
A.es.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fD:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.U.prototype={
gaa:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.U))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fy.prototype={
dt:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ao("")
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
A.mh(c3,u)
A.mj(c3,u)
A.mi(c3,u)
A.ml(c3,u)
A.mm(c3,u)
A.mk(c3,u)
A.mn(c3,u)
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
m=A.mg(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cg(n,35633)
b8.f=b8.cg(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.u(P.r("Failed to link shader: "+H.d(l)))}b8.fb()
b8.fd()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.n(b8.y.T(0,"invViewMat"),"$ia4")
if(t)b8.dy=H.n(b8.y.T(0,"objMat"),"$ia4")
if(r)b8.fr=H.n(b8.y.T(0,"viewObjMat"),"$ia4")
b8.fy=H.n(b8.y.T(0,"projViewObjMat"),"$ia4")
if(c3.go)b8.fx=H.n(b8.y.T(0,"viewMat"),"$ia4")
if(c3.x1)b8.k1=H.n(b8.y.T(0,"txt2DMat"),"$ic2")
if(c3.x2)b8.k2=H.n(b8.y.T(0,"txtCubeMat"),"$ia4")
if(c3.y1)b8.k3=H.n(b8.y.T(0,"colorMat"),"$ia4")
b8.r1=H.b([],[A.a4])
t=c3.b4
if(t>0){b8.k4=b8.y.T(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.u(P.r(c0+q+c1))
s.push(H.n(j,"$ia4"))}}if(c3.a.a)b8.r2=H.n(b8.y.T(0,"emissionClr"),"$iC")
if(c3.b.a)b8.x1=H.n(b8.y.T(0,"ambientClr"),"$iC")
if(c3.c.a)b8.y2=H.n(b8.y.T(0,"diffuseClr"),"$iC")
if(c3.d.a)b8.b5=H.n(b8.y.T(0,"invDiffuseClr"),"$iC")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cO=H.n(b8.y.T(0,"shininess"),"$iP")
if(t)b8.cN=H.n(b8.y.T(0,"specularClr"),"$iC")}if(c3.db){b8.cP=H.n(b8.y.T(0,"envSampler"),"$ibv")
if(c3.r.a)b8.cQ=H.n(b8.y.T(0,"reflectClr"),"$iC")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cR=H.n(b8.y.T(0,"refraction"),"$iP")
if(t)b8.cS=H.n(b8.y.T(0,"refractClr"),"$iC")}}if(c3.y.a)b8.cT=H.n(b8.y.T(0,"alpha"),"$iP")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bE=new H.G([r,A.b6])
b8.bF=new H.G([r,[P.ac,A.c0]])
for(r=[A.c0],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="barLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.u(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$iC")
if(typeof g!=="number")return g.a7()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.r(c0+o+c1))
H.n(a0,"$iP")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c0(j,d,c,a3,a2,a1))}b8.bF.m(0,g,e)
q=b8.bE
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bG=new H.G([r,A.b6])
b8.bH=new H.G([r,[P.ac,A.c1]])
for(r=[A.c1],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.u(P.r(c0+a4+c1))
H.n(j,"$iC")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.u(P.r(c0+a4+c1))
H.n(d,"$iC")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.u(P.r(c0+a4+c1))
H.n(c,"$iC")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.u(P.r(c0+a4+c1))
H.n(j,"$iC")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.u(P.r(c0+a4+c1))
H.n(d,"$iC")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$ibu")
a8=c}else a8=b9
e.push(new A.c1(a7,a6,a5,j,d,a8))}b8.bH.m(0,g,e)
q=b8.bG
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bI=new H.G([r,A.b6])
b8.bJ=new H.G([r,[P.ac,A.c3]])
for(r=[A.c3],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.u(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$iC")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$ic2")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$ibv")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$ibv")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$ic_")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.r(c0+o+c1))
H.n(a0,"$iP")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c3(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bJ.m(0,g,e)
q=b8.bI
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bK=new H.G([r,A.b6])
b8.bL=new H.G([r,[P.ac,A.c4]])
for(r=[A.c4],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.u(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$iC")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$iC")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$iC")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.u(P.r(c0+o+c1))
H.n(a0,"$iC")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.u(P.r(c0+o+c1))
H.n(b2,"$iP")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.u(P.r(c0+o+c1))
H.n(b3,"$iP")
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
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$ic_")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$iP")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.u(P.r(c0+a4+c1))
H.n(a0,"$iP")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$iP")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.u(P.r(c0+a4+c1))
H.n(a0,"$iP")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.u(P.r(c0+a4+c1))
H.n(b2,"$iP")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$ibu")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$ibu")
b0=a}else b0=b9
e.push(new A.c4(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bL.m(0,g,e)
q=b8.bK
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}}},
f7:function(a,b){}}
A.cs.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cA.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.d2.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.d7.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fB.prototype={
i:function(a){return this.aR}}
A.c0.prototype={}
A.c1.prototype={}
A.c3.prototype={}
A.c4.prototype={}
A.d5.prototype={
dw:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
fb:function(){var u,t,s,r=this,q=H.b([],[A.cr]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cr(p,t.name,s))}r.x=new A.es(q)},
fd:function(){var u,t,s,r=this,q=H.b([],[A.dj]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fA(t.type,t.size,t.name,s))}r.y=new A.i0(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.b6(u,b,c)
else return A.jA(u,this.r,b,a,c)},
dU:function(a,b,c){var u=this.a
if(a===1)return new A.bu(u,b,c)
else return A.jA(u,this.r,b,a,c)},
dV:function(a,b,c){var u=this.a
if(a===1)return new A.bv(u,b,c)
else return A.jA(u,this.r,b,a,c)},
b0:function(a,b){return new P.dA(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fA:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.hX(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.c_(u.a,c,d)
case 35667:return new A.hY(u.a,c,d)
case 35668:return new A.hZ(u.a,c,d)
case 35669:return new A.i_(u.a,c,d)
case 35674:return new A.i1(u.a,c,d)
case 35675:return new A.c2(u.a,c,d)
case 35676:return new A.a4(u.a,c,d)
case 35678:return u.dU(b,c,d)
case 35680:return u.dV(b,c,d)
case 35670:throw H.c(u.b0("BOOL",c))
case 35671:throw H.c(u.b0("BOOL_VEC2",c))
case 35672:throw H.c(u.b0("BOOL_VEC3",c))
case 35673:throw H.c(u.b0("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.dj.prototype={}
A.i0.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b6.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.P.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.c_.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.c2.prototype={
a8:function(a){var u=new Float32Array(H.ci(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a4.prototype={
a8:function(a){var u=new Float32Array(H.ci(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.bu.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bv.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jf.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}}
F.j3.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jP(n.$1(o),m)
m=J.jP(n.$1(o+3.141592653589793/p.c),m).D(0,l)
m=new V.D(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.B(m)))
n=$.km
if(n==null){n=new V.D(1,0,0)
$.km=n
t=n}else t=n
n=u.an(!J.H(u,t)?V.ko():t)
s=n.u(0,Math.sqrt(n.B(n)))
n=s.an(u)
t=n.u(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
m=l.E(0,new V.X(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.H(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a1()}}}
F.bl.prototype={
b3:function(){var u=this
if(!u.gcK()){C.a.S(u.a.a.d.b,u)
u.a.a.a1()}u.eZ()
u.f_()
u.f0()},
f8:function(a){this.a=a
a.d.b.push(this)},
f9:function(a){this.b=a
a.d.c.push(this)},
fa:function(a){this.c=a
a.d.d.push(this)},
eZ:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
f_:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
f0:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
gcK:function(){return this.a==null||this.b==null||this.c==null},
dN:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c5()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.cX())return
return s.u(0,Math.sqrt(s.B(s)))},
dP:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.D(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.B(r)))
r=t.D(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.an(r.u(0,Math.sqrt(r.B(r))))
return r.u(0,Math.sqrt(r.B(r)))},
bB:function(){var u,t=this
if(t.d!=null)return!0
u=t.dN()
if(u==null){u=t.dP()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
dM:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c5()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.cX())return
return s.u(0,Math.sqrt(s.B(s)))},
dO:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.D(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.D(0,g).p(0,p).E(0,g).D(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.B(l)))
l=o.an(q)
l=l.u(0,Math.sqrt(l.B(l))).an(o)
q=l.u(0,Math.sqrt(l.B(l)))}return q},
bz:function(){var u,t=this
if(t.e!=null)return!0
u=t.dM()
if(u==null){u=t.dO()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
gcI:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u,t,s=this
if(s.gcK())return a+"disposed"
u=a+C.b.as(J.af(s.a.e),0)+", "+C.b.as(J.af(s.b.e),0)+", "+C.b.as(J.af(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.J("")}}
F.f_.prototype={}
F.hu.prototype={
bN:function(a,b,c){var u,t=b.a
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cN.prototype={}
F.fp.prototype={}
F.hV.prototype={}
F.d1.prototype={}
F.hm.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u},
aE:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aE()||!1
if(!t.a.aE())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
fR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.ae(o,0)])
for(o=[F.c6];u.length!==0;){t=C.a.gfK(u)
C.a.bT(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.bN(0,t,q)){s.push(q)
C.a.bT(u,r)}}if(s.length>1)b.fQ(s)}}p.a.M()
p.c.bU()
p.d.bU()
p.b.h7()
p.c.bV(new F.hV())
p.d.bV(new F.hu())
o=p.e
if(o!=null)o.au(0)},
fs:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aN()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aM().a)!==0)++s
if((t&$.aL().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.cn().a)!==0)++s
if((t&$.co().a)!==0)++s
if((t&$.bE().a)!==0)++s
if((t&$.aK().a)!==0)++s
r=a4.gc2(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cu])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fo(m)
k=l.gc2(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cu(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fP(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cv(new Z.dq(a1,d),o,a4)
c.b=H.b([],[Z.cH])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.M()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.M()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.M()
b.push(t.e)}a=Z.lM(u,34963,b)
c.b.push(new Z.cH(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.m])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.J("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.J("   "))}return C.a.k(t,"\n")},
a1:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hn.prototype={
fm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bl])
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
h.push(F.eZ(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.eZ(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.eZ(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.eZ(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.bN(0,p,n)){p.b3()
break}}}}},
bU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gcI(s)
if(t)s.b3()}},
aE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.P()},
J:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].J(a))
return C.a.k(r,"\n")},
P:function(){return this.J("")}}
F.ho.prototype={
gl:function(a){return 0},
bV:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.h(0,q)}},
bU:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gcI(s)
if(t)s.b3()}},
i:function(a){return this.P()},
J:function(a){var u,t,s=H.b([],[P.m])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.f(t,u)
s.push(t[u].J(a+(""+u+". ")))}return C.a.k(s,"\n")},
P:function(){return this.J("")}}
F.hp.prototype={
gl:function(a){return 0},
h7:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].ghK()
t=t.ghH(t)
if(t.gl(t).V(0,1)){t=this.b
return H.f(t,u)
t[u].b3()}}},
i:function(a){return this.P()},
J:function(a){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].J(a))}return C.a.k(s,"\n")},
P:function(){return this.J("")}}
F.c6.prototype={
cJ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kp(u.cx,r,o,t,s,q,p,a,n)},
fP:function(a){var u,t,s=this
if(a.q(0,$.aN())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aM())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aL())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bc())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bd())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cn())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.co())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bE()))return H.b([s.ch],[P.M])
else if(a.q(0,$.aK())){u=H.b([-1,-1,-1,-1],[P.M])
return u}else return H.b([],[P.M])},
bB:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c5()
t.d.G(0,new F.io(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bz:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c5()
t.d.G(0,new F.im(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.au(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
J:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
q.push(C.b.as(J.af(s.e),0))
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
q.push(V.N(s.ch,3,0))
q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
P:function(){return this.J("")}}
F.io.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.im.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.ic.prototype={
M:function(){var u,t,s,r
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
u.a1()
return!0},
cw:function(a,b){var u=null,t=F.kp(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
aE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bz()
return!0},
ft:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.P()},
J:function(a){var u,t,s,r
this.M()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].J(a))
return C.a.k(u,"\n")},
P:function(){return this.J("")}}
F.id.prototype={
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
G:function(a,b){var u=this
C.a.G(u.b,b)
C.a.G(u.c,new F.ie(u,b))
C.a.G(u.d,new F.ig(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].J(""))
return C.a.k(r,"\n")}}
F.ie.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.ig.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.ih.prototype={
gl:function(a){return 0},
h:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].J(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].J(""))}return C.a.k(s,"\n")}}
F.ij.prototype={}
F.ii.prototype={
bN:function(a,b,c){return J.H(b.f,c.f)}}
F.ik.prototype={}
F.h1.prototype={
fQ:function(a){var u,t,s,r,q,p,o,n,m=V.c5()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.D(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.u(0,Math.sqrt(m.B(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.u(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.F(null)}}}return}}
F.il.prototype={
gl:function(a){return 0},
i:function(a){return this.P()},
P:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].J(""))}return C.a.k(s,"\n")}}
O.cR.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.I():u},
a3:function(a){var u=this.fr
if(u!=null)u.F(a)},
eg:function(){return this.a3(null)},
cm:function(a){this.a=null
this.a3(a)},
f4:function(){return this.cm(null)},
ea:function(a,b){var u=new D.bm()
u.b=!0
this.a3(u)},
ec:function(a,b){var u=new D.bn()
u.b=!0
this.a3(u)},
ce:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gaf()
o=u.h(0,q.gaf())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cs])
u.G(0,new O.fF(g,n))
C.a.aL(n,new O.fG())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cA])
m.G(0,new O.fH(g,l))
C.a.aL(l,new O.fI())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gaf()
o=k.h(0,q.gaf())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d2])
k.G(0,new O.fJ(g,j))
C.a.aL(j,new O.fK())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.q)(f),++r){q=f[r]
s=q.gaf()
p=i.h(0,q.gaf())
i.m(0,s,p==null?1:p)}h=H.b([],[A.d7])
i.G(0,new O.fL(g,h))
C.a.aL(h,new O.fM())
f=C.c.W(g.e.a.length+3,4)
g.dy.e
return A.lr(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dL:function(a,b){},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a1(u,u.length);u.t();){t=u.d
t.toString
s=$.ib
if(s==null)s=$.ib=new V.D(0,0,1)
t.a=s
r=$.ia
t.d=r==null?$.ia=new V.D(0,1,0):r
r=$.i9
t.e=r==null?$.i9=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bc(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bc(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bc(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
h9:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ce()
u=b4.fr.h(0,b3.aR)
if(u==null){u=A.lq(b3,b4.a)
t=u.b
if(t.length===0)H.u(P.r("May not cache a shader with no name."))
if(b4.fr.fv(0,t))H.u(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.b5
b3=b5.e
if(!(b3 instanceof Z.cv))b3=b5.e=null
if(b3==null||!b3.d.q(0,r)){b3=s.k4
if(b3)b5.d.aE()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bA()
p.a.bA()
p=p.e
if(p!=null)p.au(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.ft()
o=o.e
if(o!=null)o.au(0)}m=b5.d.fs(new Z.iq(b4.a),r)
m.aH($.aN()).e=b2.a.Q.c
if(b3)m.aH($.aM()).e=b2.a.cx.c
if(q)m.aH($.aL()).e=b2.a.ch.c
if(s.r2)m.aH($.bc()).e=b2.a.cy.c
if(p)m.aH($.bd()).e=b2.a.db.c
if(s.ry)m.aH($.aK()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.hK])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fI()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gU(p)
b3=b3.dy
b3.toString
b3.a8(p.a2(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gU(p)
o=b4.dx
o=b4.cx=p.p(0,o.gU(o))
p=o}b3=b3.fr
b3.toString
b3.a8(p.a2(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gh5()
o=b4.dx
o=b4.ch=p.p(0,o.gU(o))
p=o}b3=b3.fy
b3.toString
b3.a8(p.a2(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gU(p)
b3=b3.fx
b3.toString
b3.a8(p.a2(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a8(C.j.a2(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a8(C.j.a2(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a8(C.j.a2(p,!0))}if(s.b4>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.ci(p.a2(0,!0)))
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
b3=b3.b5
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.cO
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.cN
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.w
h=new H.G([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gaf()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cp(b2.a.bF.h(0,e),d)
n=f.ghl()
b=$.am
n=n.aU(b==null?$.am=new V.X(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghq()
b=$.am
n=n.aU(b==null?$.am=new V.X(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gam(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcM()){n=f.gcB()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcC()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcD()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bE.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gU(p)
p=P.w
a0=new H.G([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.cp(b2.a.bH.h(0,0),d)
n=a.bc(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.u(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bG.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gU(p)
p=P.w
a3=new H.G([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gaf()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.cp(b2.a.bJ.h(0,e),d)
a4=a.p(0,f.gU(f))
n=f.gU(f)
b=$.am
n=n.aU(b==null?$.am=new V.X(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.am
n=a4.aU(n==null?$.am=new V.X(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gam(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=a4.cW(0)
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
i=new Float32Array(H.ci(new V.cT(b,a1,a2,a5,a6,a7,a8,a9,n).a2(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gav()
n=f.gav()
if(!C.a.w(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gav()
b=n.gaq(n)
if(b){b=c.f
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}f.gaK()
n=f.gdi()
b=c.x
b.toString
a1=n.gfF(n)
a2=n.gfG(n)
a5=n.gfH()
n=n.gfE()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaK()
if(!C.a.w(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gaK()
b=n.gaq(n)
if(b){b=c.r
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}if(f.gcM()){n=f.gcB()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcC()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcD()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bI.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gU(p)
p=P.w
b1=new H.G([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gaf()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.cp(b2.a.bL.h(0,e),d)
n=f.gh4(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gho(f).hG()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aU(f.gh4(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gam(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=f.gbY()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbW(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghI()
b=c.x
b.a.uniform1f(b.d,n)
n=f.ghJ()
b=c.y
b.a.uniform1f(b.d,n)
f.gav()
n=f.gav()
if(!C.a.w(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gav()
b=n.gaq(n)
if(b){b=c.dx
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}f.gaK()
n=f.gdi()
b=c.z
b.toString
a1=n.gfF(n)
a2=n.gfG(n)
a5=n.gfH()
n=n.gfE()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaK()
if(!C.a.w(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gaK()
b=n.gaq(n)
if(b){b=c.dy
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}if(f.ghp()){n=f.ghn()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghm()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcM()){n=f.gcB()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcC()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcD()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bK.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gU(p).cW(0)}b3=b3.id
b3.toString
b3.a8(p.a2(0,!0))}if(s.db){b2.dL(l,b2.ch)
b3=b2.a
p=b2.ch
b3.f7(b3.cP,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.cQ
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.cR
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.cS
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.cT
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b1(b4)
b3=b5.e
b3.b1(b4)
b3.aI(b4)
b3.dc(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dc(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fD()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ce().aR}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cs(a,C.c.W(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cq(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cA(a,C.c.W(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.cq(a.a,b.a)}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.d2(a,C.c.W(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.cq(a.a,b.a)}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.d7(a,C.c.W(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.cq(a.a,b.a)}}
O.fz.prototype={
ak:function(){var u,t=this
t.c4()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.cS.prototype={
ak:function(){},
cp:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ak()
u=s.a
u.a=null
u.a3(null)}}}
O.fA.prototype={}
O.aj.prototype={
co:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
ak:function(){this.c4()
this.co(new V.Q(1,1,1))},
sam:function(a,b){this.cp(new A.U(!0,!1,!1))
this.co(b)}}
O.fC.prototype={}
O.fD.prototype={
ak:function(){var u,t=this
t.c5()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.a3(u)}}}
O.fE.prototype={
cq:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
ak:function(){this.c5()
this.cq(100)}}
O.dc.prototype={}
T.hK.prototype={}
X.jk.prototype={}
X.f7.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.I():u}}
X.d0.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.I():u},
aA:function(a){var u=this.f
if(u!=null)u.F(a)},
dI:function(){return this.aA(null)},
scZ:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gv().S(0,s.gc9())
t=s.b
s.b=a
if(a!=null)a.gv().n(0,s.gc9())
u=new D.B("mover",t,s.b)
u.b=!0
s.aA(u)}}}
X.hG.prototype={}
V.cx.prototype={
aX:function(a){this.b=new P.fc(C.L)
this.c=null
this.d=H.b([],[[P.ac,W.ab]])},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ab]))
u=a.split("\n")
for(l=u.length,t=[W.ab],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dT(q,0,q.length)
n=o==null?q:o
C.J.dh(p,H.jM(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb7(m.d).push(p)}},
d3:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.ac,W.ab]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.b2()
for(t.toString,s=new H.k(u),s=new P.by(t.bX(new H.b_(s,s.gl(s))).a());s.t();)r.ba(s.gA(s))}}
V.jd.prototype={
$1:function(a){var u=C.d.da(this.a.gfM(),2)
if(u!=="0.00")P.jL(u+" fps")}}
V.eL.prototype={
ba:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b2:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hO()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=K.L("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=K.L("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=K.p(new H.k("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.L("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.p(new H.k(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.p(new H.k(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.p(new H.k('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.p(new H.k('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.p(new H.k("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.p(new H.k('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.av())
t=a1.j(0,r).k(0,h)
u=K.p(new H.k("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.p(new H.k("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.p(new H.k("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.p(new H.k("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.av())
t=a1.j(0,r).k(0,e)
u=K.p(new H.k("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.p(new H.k("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.p(new H.k("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.a_()
s=[K.b0]
t.a=H.b([],s)
u.a.push(t)
u=K.p(new H.k("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.p(new H.k("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.p(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.a_()
t.a=H.b([],s)
u.a.push(t)
u=K.p(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.p(new H.k("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.p(new H.k(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.p(new H.k(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.K("Num")
t=a1.j(0,n)
t.d=t.a.K("Num")
t=a1.j(0,m)
t.d=t.a.K("Symbol")
t=a1.j(0,j)
t.d=t.a.K("String")
t=a1.j(0,g)
t.d=t.a.K("String")
t=a1.j(0,c)
t.d=t.a.K(d)
t=a1.j(0,a0)
t.d=t.a.K(a0)
t=a1.j(0,q)
t=t.d=t.a.K(q)
u=[P.m]
t.at(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.at(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.at(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f9.prototype={
ba:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b2:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hO()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=K.L("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=K.L("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=K.p(new H.k("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.L("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.p(new H.k(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.p(new H.k(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.p(new H.k("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.p(new H.k("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.av())
t=e.j(0,j).k(0,i)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.a_()
s=[K.b0]
t.a=H.b([],s)
u.a.push(t)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.p(new H.k("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.a_()
u.a=H.b([],s)
t.a.push(u)
t=K.p(new H.k("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.p(new H.k(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.p(new H.k(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.K("Num")
u=e.j(0,n)
u.d=u.a.K("Num")
u=e.j(0,m)
u.d=u.a.K("Symbol")
u=e.j(0,i)
u.d=u.a.K(j)
u=e.j(0,g)
u.d=u.a.K(h)
u=e.j(0,f)
u.d=u.a.K(f)
u=e.j(0,q)
u=u.d=u.a.K(q)
t=[P.m]
u.at(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.at(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.at(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fa.prototype={
ba:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
b2:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hO()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.p(new H.k("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.p(new H.k("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.p(new H.k("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.p(new H.k('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.p(new H.k('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.p(new H.k("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.p(new H.k('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.av())
l.j(0,s).k(0,m).a.push(new K.av())
u=l.j(0,m).k(0,m)
t=new K.a_()
t.a=H.b([],[K.b0])
u.a.push(t)
u=K.p(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.K("Symbol")
u=l.j(0,n)
u.d=u.a.K("String")
u=l.j(0,r)
t=u.a.K(r)
u.d=t
t.at(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.K(q)
t=l.j(0,m)
t.d=t.a.K(m)
return l}}
V.h7.prototype={
d3:function(a,b){this.d=H.b([],[[P.ac,W.ab]])
this.I(C.a.k(b,"\n"),"#111")},
ba:function(a){},
b2:function(){return}}
V.hq.prototype={
dz:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.T(q,"scroll",new V.hs(o),!1)},
cz:function(a){var u,t,s,r,q,p,o,n
this.fc()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fO(a),s.toString,r=new H.k(r),r=new P.by(s.bX(new H.b_(r,r.gl(r))).a());r.t();){s=r.gA(r)
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
if(H.kI(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kv(C.t,s,C.f,!1)
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
dd:function(a){var u,t,s,r=new V.eL("dart")
r.aX("dart")
u=new V.f9("glsl")
u.aX("glsl")
t=new V.fa("html")
t.aX("html")
s=C.a.fL(H.b([r,u,t],[V.cx]),new V.ht(a))
if(s!=null)return s
r=new V.h7("plain")
r.aX("plain")
return r},
cv:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jG(s).be(s,"+")){b0[t]=C.b.ab(s,1)
a6.push(1)
u=!0}else if(C.b.be(s,"-")){b0[t]=C.b.ab(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dd(a8)
r.d3(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kv(C.t,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jR()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.q)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.q)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gN(s);a2.t();)d.appendChild(a2.gA(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fc:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hO()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.a_()
r=[K.b0]
s.a=H.b([],r)
t.a.push(s)
t=K.p(new H.k("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.a_()
s.a=H.b([],r)
t.a.push(s)
t=K.p(new H.k("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.a_()
s.a=H.b([],r)
t.a.push(s)
t=K.p(new H.k("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.p(new H.k("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.p(new H.k("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.p(new H.k("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.p(new H.k("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.av())
s=u.j(0,i).k(0,i)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.p(new H.k("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.K(p)
s=u.j(0,n)
s.d=s.a.K(o)
s=u.j(0,"CodeEnd")
s.d=s.a.K(m)
s=u.j(0,j)
s.d=s.a.K("Link")
s=u.j(0,i)
s.d=s.a.K(i)
this.b=u}}
V.hs.prototype={
$1:function(a){P.kg(C.i,new V.hr(this.a))}}
V.hr.prototype={
$0:function(){var u=C.d.a9(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.ht.prototype={
$1:function(a){return a.a===this.a}}
Q.jb.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.m]
u.cv("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cv("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dm=u.i
u=J.cK.prototype
u.dq=u.i
u=P.i.prototype
u.dn=u.bd
u=W.O.prototype
u.bf=u.a5
u=W.dW.prototype
u.dr=u.ae
u=K.cG.prototype
u.dl=u.ar
u.c3=u.i
u=O.cS.prototype
u.c4=u.ak
u=O.aj.prototype
u.c5=u.ak})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"m0","ll",19)
t(P,"mv","lO",6)
t(P,"mw","lP",6)
t(P,"mx","lQ",6)
s(P,"kA","mt",9)
r(W,"mH",4,null,["$4"],["lR"],15,0)
r(W,"mI",4,null,["$4"],["lS"],15,0)
var l
q(l=E.aV.prototype,"gd1",0,0,null,["$1","$0"],["d2","fX"],0,0)
q(l,"gd_",0,0,null,["$1","$0"],["d0","fU"],0,0)
p(l,"gfS","fT",3)
p(l,"gfV","fW",3)
q(l=E.dd.prototype,"gc6",0,0,null,["$1","$0"],["c8","c7"],0,0)
o(l,"ghb","d7",9)
n(l=X.dl.prototype,"ger","es",4)
n(l,"ged","ee",4)
n(l,"gel","em",2)
n(l,"gew","ex",10)
n(l,"geu","ev",10)
n(l,"geA","eB",2)
n(l,"geE","eF",2)
n(l,"gep","eq",2)
n(l,"geC","eD",2)
n(l,"gen","eo",2)
n(l,"geG","eH",17)
n(l,"geI","eJ",4)
n(l,"geV","eW",5)
n(l,"geR","eS",5)
n(l,"geT","eU",5)
q(D.bi.prototype,"gdC",0,0,null,["$1","$0"],["ah","dD"],0,0)
q(l=D.cM.prototype,"gck",0,0,null,["$1","$0"],["cl","ey"],0,0)
n(l,"geL","eM",18)
p(l,"ge7","e8",11)
p(l,"geP","eQ",11)
m(V.E.prototype,"gl","bM",12)
m(V.D.prototype,"gl","bM",12)
q(l=U.bL.prototype,"gaz",0,0,null,["$1","$0"],["L","X"],0,0)
p(l,"ge5","e6",13)
p(l,"geN","eO",13)
q(l=U.dm.prototype,"gaz",0,0,null,["$1","$0"],["L","X"],0,0)
n(l,"gbo","bp",1)
n(l,"gbq","br",1)
n(l,"gbs","bt",1)
q(l=U.dn.prototype,"gaz",0,0,null,["$1","$0"],["L","X"],0,0)
n(l,"gbo","bp",1)
n(l,"gbq","br",1)
n(l,"gbs","bt",1)
n(l,"gdZ","e_",1)
n(l,"ge0","e1",1)
n(l,"gfj","fk",1)
n(l,"gfh","fi",1)
n(l,"gff","fg",1)
n(U.dp.prototype,"ge3","e4",1)
q(l=M.cD.prototype,"gac",0,0,null,["$1","$0"],["ai","dE"],0,0)
p(l,"geh","ei",3)
p(l,"gej","ek",3)
q(l=O.cR.prototype,"gef",0,0,null,["$1","$0"],["a3","eg"],0,0)
q(l,"gf3",0,0,null,["$1","$0"],["cm","f4"],0,0)
p(l,"ge9","ea",14)
p(l,"geb","ec",14)
q(X.d0.prototype,"gc9",0,0,null,["$1","$0"],["aA","dI"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.W,null)
s(P.W,[H.jt,J.a,J.a1,P.dJ,P.i,H.b_,P.fh,H.cE,H.i4,H.hT,P.bj,H.bI,H.e0,P.V,H.fq,H.fr,H.fk,P.e6,P.bx,P.by,P.dr,P.da,P.hC,P.de,P.iZ,P.iM,P.iG,P.dI,P.t,P.eC,P.fd,P.iX,P.at,P.a7,P.a5,P.aU,P.h5,P.d8,P.dA,P.f6,P.f8,P.ac,P.bP,P.b1,P.m,P.ao,W.eH,W.c9,W.J,W.cZ,W.dW,W.iR,W.cF,W.aC,W.iL,W.eb,P.iH,K.av,K.cG,K.b0,K.hc,K.hl,L.d9,L.df,L.dg,L.hN,O.aR,O.bR,E.ey,E.aV,E.bg,E.bq,E.dz,E.hd,E.dd,Z.dq,Z.iq,Z.cv,Z.cH,Z.b7,D.eB,D.bk,D.R,X.cw,X.cL,X.fn,X.fu,X.a8,X.fT,X.hP,X.dl,D.ex,D.bi,D.Z,D.h9,D.hx,V.Q,V.aS,V.eW,V.cT,V.az,V.a9,V.X,V.d4,V.E,V.D,U.dm,U.dn,U.dp,M.cD,A.cr,A.es,A.U,A.cs,A.cA,A.d2,A.d7,A.fB,A.c0,A.c1,A.c3,A.c4,A.dj,A.i0,F.bl,F.f_,F.cN,F.fp,F.d1,F.hm,F.hn,F.ho,F.hp,F.c6,F.ic,F.id,F.ih,F.ij,F.ik,F.il,O.dc,O.cS,O.fC,X.jk,X.hG,X.d0,V.cx,V.hq])
s(J.a,[J.fi,J.cJ,J.cK,J.aW,J.bN,J.aX,H.bU,W.e,W.ep,W.ct,W.ai,W.F,W.dt,W.a6,W.eM,W.eN,W.dv,W.cC,W.dx,W.eP,W.h,W.dB,W.ay,W.fb,W.dE,W.ft,W.fN,W.dK,W.dL,W.aA,W.dM,W.dP,W.aD,W.dT,W.dV,W.aF,W.dX,W.aG,W.e1,W.ap,W.e4,W.hM,W.aI,W.e7,W.hR,W.i6,W.ec,W.ee,W.eg,W.ei,W.ek,P.aZ,P.dG,P.b2,P.dR,P.hb,P.e2,P.b4,P.e9,P.et,P.ds,P.dZ])
s(J.cK,[J.h6,J.bw,J.aY])
t(J.js,J.aW)
s(J.bN,[J.cI,J.fj])
t(P.fs,P.dJ)
s(P.fs,[H.dk,W.ix,W.Y,P.f2])
t(H.k,H.dk)
s(P.i,[H.o,H.bQ,H.c7,P.ff])
s(H.o,[H.cO,H.bp])
t(H.eS,H.bQ)
s(P.fh,[H.cQ,H.ir])
t(H.fx,H.cO)
s(P.bj,[H.h2,H.fm,H.i3,H.eA,H.hj,P.d_,P.ag,P.i5,P.i2,P.bY,P.eE,P.eK])
s(H.bI,[H.jg,H.hH,H.fl,H.j7,H.j8,H.j9,P.it,P.is,P.iu,P.iv,P.iW,P.iV,P.j1,P.iJ,P.iK,P.fw,P.eQ,P.eR,W.eT,W.fP,W.fR,W.hi,W.hB,W.iB,W.h0,W.h_,W.iN,W.iO,W.iU,W.iY,P.j2,P.f3,P.f4,P.ev,E.he,E.hf,E.hg,E.hL,D.eX,D.eY,F.jf,F.j3,F.io,F.im,F.ie,F.ig,O.fF,O.fG,O.fH,O.fI,O.fJ,O.fK,O.fL,O.fM,V.jd,V.hs,V.hr,V.ht,Q.jb])
s(H.hH,[H.hz,H.bG])
t(P.fv,P.V)
s(P.fv,[H.G,W.iw])
t(H.cV,H.bU)
s(H.cV,[H.ca,H.cc])
t(H.cb,H.ca)
t(H.bT,H.cb)
t(H.cd,H.cc)
t(H.cW,H.cd)
s(H.cW,[H.fU,H.fV,H.fW,H.fX,H.fY,H.cX,H.fZ])
t(P.iS,P.ff)
t(P.iI,P.iZ)
t(P.iF,P.iM)
t(P.eF,P.hC)
t(P.eU,P.eC)
s(P.eF,[P.fc,P.i8])
t(P.i7,P.eU)
s(P.a5,[P.M,P.w])
s(P.ag,[P.bs,P.fe])
s(W.e,[W.A,W.f1,W.aE,W.ce,W.aH,W.aq,W.cg,W.ip,W.c8,P.ew,P.be])
s(W.A,[W.O,W.aQ])
s(W.O,[W.l,P.j])
s(W.l,[W.eq,W.er,W.bf,W.bh,W.ab,W.f5,W.hk,W.db,W.hE,W.hF,W.bZ])
t(W.eG,W.ai)
t(W.bJ,W.dt)
s(W.a6,[W.eI,W.eJ])
t(W.dw,W.dv)
t(W.cB,W.dw)
t(W.dy,W.dx)
t(W.eO,W.dy)
t(W.ax,W.ct)
t(W.dC,W.dB)
t(W.f0,W.dC)
t(W.dF,W.dE)
t(W.bM,W.dF)
t(W.b5,W.h)
s(W.b5,[W.bo,W.al,W.bt])
t(W.fO,W.dK)
t(W.fQ,W.dL)
t(W.dN,W.dM)
t(W.fS,W.dN)
t(W.dQ,W.dP)
t(W.cY,W.dQ)
t(W.dU,W.dT)
t(W.h8,W.dU)
t(W.hh,W.dV)
t(W.cf,W.ce)
t(W.hv,W.cf)
t(W.dY,W.dX)
t(W.hw,W.dY)
t(W.hA,W.e1)
t(W.e5,W.e4)
t(W.hI,W.e5)
t(W.ch,W.cg)
t(W.hJ,W.ch)
t(W.e8,W.e7)
t(W.hQ,W.e8)
t(W.b8,W.al)
t(W.ed,W.ec)
t(W.iy,W.ed)
t(W.du,W.cC)
t(W.ef,W.ee)
t(W.iC,W.ef)
t(W.eh,W.eg)
t(W.dO,W.eh)
t(W.ej,W.ei)
t(W.iP,W.ej)
t(W.el,W.ek)
t(W.iQ,W.el)
t(W.iz,W.iw)
t(W.iA,P.da)
t(W.iT,W.dW)
t(P.a3,P.iH)
t(P.dH,P.dG)
t(P.fo,P.dH)
t(P.dS,P.dR)
t(P.h3,P.dS)
t(P.bX,P.j)
t(P.e3,P.e2)
t(P.hD,P.e3)
t(P.ea,P.e9)
t(P.hS,P.ea)
t(P.eu,P.ds)
t(P.h4,P.be)
t(P.e_,P.dZ)
t(P.hy,P.e_)
s(K.cG,[K.a_,L.di])
s(E.ey,[Z.cu,A.d5,T.hK])
s(D.R,[D.bm,D.bn,D.B,X.ha])
s(X.ha,[X.cP,X.aB,X.bS,X.dh])
s(O.aR,[D.cM,U.bL])
s(D.eB,[U.eD,U.a2])
t(U.cy,U.a2)
t(A.fy,A.d5)
s(A.dj,[A.b6,A.hY,A.hZ,A.i_,A.hW,A.P,A.hX,A.C,A.c_,A.i1,A.c2,A.a4,A.bu,A.bv])
t(F.hu,F.f_)
t(F.hV,F.fp)
t(F.ii,F.ij)
t(F.h1,F.ik)
t(O.cR,O.dc)
s(O.cS,[O.fz,O.fA,O.aj])
s(O.aj,[O.fD,O.fE])
t(X.f7,X.hG)
s(V.cx,[V.eL,V.f9,V.fa,V.h7])
u(H.dk,H.i4)
u(H.ca,P.t)
u(H.cb,H.cE)
u(H.cc,P.t)
u(H.cd,H.cE)
u(P.dJ,P.t)
u(W.dt,W.eH)
u(W.dv,P.t)
u(W.dw,W.J)
u(W.dx,P.t)
u(W.dy,W.J)
u(W.dB,P.t)
u(W.dC,W.J)
u(W.dE,P.t)
u(W.dF,W.J)
u(W.dK,P.V)
u(W.dL,P.V)
u(W.dM,P.t)
u(W.dN,W.J)
u(W.dP,P.t)
u(W.dQ,W.J)
u(W.dT,P.t)
u(W.dU,W.J)
u(W.dV,P.V)
u(W.ce,P.t)
u(W.cf,W.J)
u(W.dX,P.t)
u(W.dY,W.J)
u(W.e1,P.V)
u(W.e4,P.t)
u(W.e5,W.J)
u(W.cg,P.t)
u(W.ch,W.J)
u(W.e7,P.t)
u(W.e8,W.J)
u(W.ec,P.t)
u(W.ed,W.J)
u(W.ee,P.t)
u(W.ef,W.J)
u(W.eg,P.t)
u(W.eh,W.J)
u(W.ei,P.t)
u(W.ej,W.J)
u(W.ek,P.t)
u(W.el,W.J)
u(P.dG,P.t)
u(P.dH,W.J)
u(P.dR,P.t)
u(P.dS,W.J)
u(P.e2,P.t)
u(P.e3,W.J)
u(P.e9,P.t)
u(P.ea,W.J)
u(P.ds,P.V)
u(P.dZ,P.t)
u(P.e_,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",a5:"num",m:"String",at:"bool",b1:"Null",ac:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[D.R]},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[P.w,[P.i,E.aV]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b1,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[P.w,[P.i,D.Z]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.i,U.a2]]},{func:1,ret:-1,args:[P.w,[P.i,V.az]]},{func:1,ret:P.at,args:[W.O,P.m,P.m,W.c9]},{func:1,ret:P.b1,args:[,]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.at,args:[[P.i,D.Z]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bf.prototype
C.h=W.bh.prototype
C.J=W.ab.prototype
C.M=J.a.prototype
C.a=J.aW.prototype
C.c=J.cI.prototype
C.j=J.cJ.prototype
C.d=J.bN.prototype
C.b=J.aX.prototype
C.N=J.aY.prototype
C.v=J.h6.prototype
C.w=W.db.prototype
C.m=J.bw.prototype
C.x=W.b8.prototype
C.y=W.c8.prototype
C.z=new E.bg("Browser.chrome")
C.o=new E.bg("Browser.firefox")
C.p=new E.bg("Browser.edge")
C.A=new E.bg("Browser.other")
C.q=function getTagFallback(o) {
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
C.r=function(hooks) { return hooks; }

C.H=new P.h5()
C.f=new P.i7()
C.I=new P.i8()
C.e=new P.iI()
C.i=new P.aU(0)
C.K=new P.aU(5e6)
C.L=new P.fd("element",!1,!1,!1)
C.O=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.P=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.Q=H.b(u([]),[P.m])
C.t=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.R=new E.bq("OperatingSystem.windows")
C.u=new E.bq("OperatingSystem.mac")
C.S=new E.bq("OperatingSystem.linux")
C.T=new E.bq("OperatingSystem.other")
C.U=new P.bx(null,2)})();(function staticFields(){$.ah=0
$.bH=null
$.jS=null
$.kD=null
$.kz=null
$.kG=null
$.j4=null
$.ja=null
$.jJ=null
$.bz=null
$.cj=null
$.ck=null
$.jD=!1
$.ad=C.e
$.a0=[]
$.aw=null
$.jo=null
$.jZ=null
$.jY=null
$.dD=P.k0(P.m,P.f8)
$.eV=null
$.k4=null
$.k7=null
$.am=null
$.kc=null
$.kk=null
$.kn=null
$.km=null
$.i9=null
$.ia=null
$.ib=null
$.kl=null
$.k6=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n1","kL",function(){return H.kC("_$dart_dartClosure")})
u($,"n2","jN",function(){return H.kC("_$dart_js")})
u($,"n3","kM",function(){return H.ar(H.hU({
toString:function(){return"$receiver$"}}))})
u($,"n4","kN",function(){return H.ar(H.hU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n5","kO",function(){return H.ar(H.hU(null))})
u($,"n6","kP",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n9","kS",function(){return H.ar(H.hU(void 0))})
u($,"na","kT",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n8","kR",function(){return H.ar(H.ki(null))})
u($,"n7","kQ",function(){return H.ar(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nc","kV",function(){return H.ar(H.ki(void 0))})
u($,"nb","kU",function(){return H.ar(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"np","jO",function(){return P.lN()})
u($,"ns","l_",function(){return P.lC("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nq","kZ",function(){return P.k1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"nj","kY",function(){return Z.aa(0)})
u($,"nd","kW",function(){return Z.aa(511)})
u($,"nl","aN",function(){return Z.aa(1)})
u($,"nk","aM",function(){return Z.aa(2)})
u($,"nf","aL",function(){return Z.aa(4)})
u($,"nm","bc",function(){return Z.aa(8)})
u($,"nn","bd",function(){return Z.aa(16)})
u($,"ng","cn",function(){return Z.aa(32)})
u($,"nh","co",function(){return Z.aa(64)})
u($,"ni","kX",function(){return Z.aa(96)})
u($,"no","bE",function(){return Z.aa(128)})
u($,"ne","aK",function(){return Z.aa(256)})
u($,"n0","kK",function(){return new V.eW(1e-9)})
u($,"n_","z",function(){return $.kK()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bU,ArrayBufferView:H.bU,Float32Array:H.bT,Float64Array:H.bT,Int16Array:H.fU,Int32Array:H.fV,Int8Array:H.fW,Uint16Array:H.fX,Uint32Array:H.fY,Uint8ClampedArray:H.cX,CanvasPixelArray:H.cX,Uint8Array:H.fZ,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ep,HTMLAnchorElement:W.eq,HTMLAreaElement:W.er,Blob:W.ct,HTMLBodyElement:W.bf,HTMLCanvasElement:W.bh,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CSSPerspective:W.eG,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bJ,MSStyleCSSProperties:W.bJ,CSS2Properties:W.bJ,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eI,CSSUnparsedValue:W.eJ,DataTransferItemList:W.eM,HTMLDivElement:W.ab,DOMException:W.eN,ClientRectList:W.cB,DOMRectList:W.cB,DOMRectReadOnly:W.cC,DOMStringList:W.eO,DOMTokenList:W.eP,Element:W.O,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ax,FileList:W.f0,FileWriter:W.f1,HTMLFormElement:W.f5,Gamepad:W.ay,History:W.fb,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,KeyboardEvent:W.bo,Location:W.ft,MediaList:W.fN,MIDIInputMap:W.fO,MIDIOutputMap:W.fQ,MimeType:W.aA,MimeTypeArray:W.fS,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cY,RadioNodeList:W.cY,Plugin:W.aD,PluginArray:W.h8,RTCStatsReport:W.hh,HTMLSelectElement:W.hk,SourceBuffer:W.aE,SourceBufferList:W.hv,SpeechGrammar:W.aF,SpeechGrammarList:W.hw,SpeechRecognitionResult:W.aG,Storage:W.hA,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableElement:W.db,HTMLTableRowElement:W.hE,HTMLTableSectionElement:W.hF,HTMLTemplateElement:W.bZ,TextTrack:W.aH,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.hI,TextTrackList:W.hJ,TimeRanges:W.hM,Touch:W.aI,TouchEvent:W.bt,TouchList:W.hQ,TrackDefaultList:W.hR,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.i6,VideoTrackList:W.ip,WheelEvent:W.b8,Window:W.c8,DOMWindow:W.c8,CSSRuleList:W.iy,ClientRect:W.du,DOMRect:W.du,GamepadList:W.iC,NamedNodeMap:W.dO,MozNamedAttrMap:W.dO,SpeechRecognitionResultList:W.iP,StyleSheetList:W.iQ,SVGLength:P.aZ,SVGLengthList:P.fo,SVGNumber:P.b2,SVGNumberList:P.h3,SVGPointList:P.hb,SVGScriptElement:P.bX,SVGStringList:P.hD,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b4,SVGTransformList:P.hS,AudioBuffer:P.et,AudioParamMap:P.eu,AudioTrackList:P.ew,AudioContext:P.be,webkitAudioContext:P.be,BaseAudioContext:P.be,OfflineAudioContext:P.h4,SQLResultSetRowList:P.hy})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
W.ce.$nativeSuperclassTag="EventTarget"
W.cf.$nativeSuperclassTag="EventTarget"
W.cg.$nativeSuperclassTag="EventTarget"
W.ch.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.kE,[])
else Q.kE([])})})()
//# sourceMappingURL=test.dart.js.map
