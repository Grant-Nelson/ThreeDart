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
a[c]=function(){a[c]=function(){H.mM(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jy(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jl:function jl(){},
lb:function(a,b,c,d){if(!!a.$iq)return new H.eZ(a,b,[c,d])
return new H.bS(a,b,[c,d])},
jQ:function(){return new P.hv("No element")},
lw:function(a,b){var u=J.bg(a)
if(typeof u!=="number")return u.I()
H.d9(a,0,u-1,b)},
d9:function(a,b,c,d){if(c-b<=32)H.lv(a,b,c,d)
else H.lu(a,b,c,d)},
lv:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.en(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a6()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
lu:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a1(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a1(a4+a5,2),f=g-j,e=g+j,d=J.en(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a6()
if(a2>0){u=a1
a1=a0
a0=u}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.x(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.aa()
if(p<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a6()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
s=o
t=n
break}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.aa()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a6()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a6()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.aa()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=s+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
H.d9(a3,a4,t-2,a6)
H.d9(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.x(a6.$2(d.h(a3,t),b),0);)++t
for(;J.x(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.aa()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.d9(a3,t,s,a6)}else H.d9(a3,t,s,a6)},
N:function N(a){this.a=a},
q:function q(){},
bQ:function bQ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bS:function bS(a,b,c){this.a=a
this.b=b
this.$ti=c},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b){this.a=null
this.b=a
this.c=b},
ik:function ik(a,b,c){this.a=a
this.b=b
this.$ti=c},
il:function il(a,b){this.a=a
this.b=b},
cI:function cI(){},
i2:function i2(){},
dn:function dn(){},
cp:function(a){var u,t=H.mN(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mx:function(a){return v.types[a]},
mC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iA},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a8(a)
if(typeof u!=="string")throw H.d(H.ay(a))
return u},
c0:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c1:function(a){return H.lf(a)+H.kj(H.cn(a),0,null)},
lf:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic7){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cp(t.length>1&&C.d.bn(t,0)===36?C.d.aE(t,1):t)},
k0:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lp:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ay(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b7(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ay(s))}return H.k0(r)},
lo:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ay(s))
if(s<0)throw H.d(H.ay(s))
if(s>65535)return H.lp(a)}return H.k0(a)},
ln:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b7(u,10))>>>0,56320|u&1023)}throw H.d(P.aJ(a,0,1114111,null,null))},
bq:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lm:function(a){var u=H.bq(a).getFullYear()+0
return u},
lk:function(a){var u=H.bq(a).getMonth()+1
return u},
lg:function(a){var u=H.bq(a).getDate()+0
return u},
lh:function(a){var u=H.bq(a).getHours()+0
return u},
lj:function(a){var u=H.bq(a).getMinutes()+0
return u},
ll:function(a){var u=H.bq(a).getSeconds()+0
return u},
li:function(a){var u=H.bq(a).getMilliseconds()+0
return u},
t:function(a){throw H.d(H.ay(a))},
c:function(a,b){if(a==null)J.bg(a)
throw H.d(H.bB(a,b))},
bB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.bg(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d3(b,s)},
mq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.br(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.br(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ay:function(a){return new P.aj(!0,a,null,null)},
ml:function(a){if(typeof a!=="number")throw H.d(H.ay(a))
return a},
d:function(a){var u
if(a==null)a=new P.d0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kz})
u.name=""}else u.toString=H.kz
return u},
kz:function(){return J.a8(this.dartException)},
p:function(a){throw H.d(a)},
n:function(a){throw H.d(P.bI(a))},
au:function(a){var u,t,s,r,q,p
a=H.kw(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.u])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jY:function(a,b){return new H.h0(a,b==null?null:b.method)},
jm:function(a,b){var u=b==null,t=u?null:b.method
return new H.fm(a,t,u?null:b.receiver)},
ep:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jm(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jY(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kC()
q=$.kD()
p=$.kE()
o=$.kF()
n=$.kI()
m=$.kJ()
l=$.kH()
$.kG()
k=$.kL()
j=$.kK()
i=r.ah(u)
if(i!=null)return f.$1(H.jm(u,i))
else{i=q.ah(u)
if(i!=null){i.method="call"
return f.$1(H.jm(u,i))}else{i=p.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=n.ah(u)
if(i==null){i=m.ah(u)
if(i==null){i=l.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=k.ah(u)
if(i==null){i=j.ah(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jY(u,i))}}return f.$1(new H.i1(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.db()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.db()
return a},
jC:function(a){var u
if(a==null)return new H.e1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e1(a)},
mu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mB:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mB)
a.$identity=u
return u},
l_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hw().constructor.prototype):Object.create(new H.bF(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ak
if(typeof t!=="number")return t.E()
$.ak=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jK(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kW(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jK(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kW:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mx,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jJ:H.jb
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
kX:function(a,b,c,d){var u=H.jb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jK:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kX(t,!r,u,b)
if(t===0){r=$.ak
if(typeof r!=="number")return r.E()
$.ak=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bG
return new Function(r+H.f(q==null?$.bG=H.eD("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ak
if(typeof r!=="number")return r.E()
$.ak=r+1
o+=r
r="return function("+o+"){return this."
q=$.bG
return new Function(r+H.f(q==null?$.bG=H.eD("self"):q)+"."+H.f(u)+"("+o+");}")()},
kY:function(a,b,c,d){var u=H.jb,t=H.jJ
switch(b?-1:a){case 0:throw H.d(H.ls("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kZ:function(a,b){var u,t,s,r,q,p,o,n=$.bG
if(n==null)n=$.bG=H.eD("self")
u=$.jI
if(u==null)u=$.jI=H.eD("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kY(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ak
if(typeof u!=="number")return u.E()
$.ak=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ak
if(typeof u!=="number")return u.E()
$.ak=u+1
return new Function(n+u+"}")()},
jy:function(a,b,c,d,e,f,g){return H.l_(a,b,c,d,!!e,!!f,g)},
jb:function(a){return a.a},
jJ:function(a){return a.c},
eD:function(a){var u,t,s,r=new H.bF("self","target","receiver","name"),q=J.jj(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mG:function(a,b){throw H.d(H.kV(a,H.cp(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.mG(a,b)},
ms:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kV:function(a,b){return new H.eE("CastError: "+P.jh(a)+": type '"+H.f(H.mh(a))+"' is not a subtype of type '"+b+"'")},
mh:function(a){var u,t=J.W(a)
if(!!t.$ibH){u=H.ms(t)
if(u!=null)return H.mH(u)
return"Closure"}return H.c1(a)},
mM:function(a){throw H.d(new P.eR(a))},
ls:function(a){return new H.hf(a)},
kr:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cn:function(a){if(a==null)return
return a.$ti},
ni:function(a,b,c){return H.j6(a["$a"+H.f(c)],H.cn(b))},
mw:function(a,b,c,d){var u=H.j6(a["$a"+H.f(c)],H.cn(b))
return u==null?null:u[d]},
jB:function(a,b,c){var u=H.j6(a["$a"+H.f(b)],H.cn(a))
return u==null?null:u[c]},
aR:function(a,b){var u=H.cn(a)
return u==null?null:u[b]},
mH:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cp(a[0].name)+H.kj(a,1,b)
if(typeof a=="function")return H.cp(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.f(b[t])}if('func' in a)return H.lN(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.u])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.d.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a1)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mt(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kj:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ar("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
j6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ng:function(a,b,c){return a.apply(b,H.j6(J.W(b)["$a"+H.f(c)],H.cn(b)))},
nh:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mD:function(a){var u,t,s,r,q=$.ks.$1(a),p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.km.$2(a,q)
if(q!=null){p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j2(u)
$.iX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j1[q]=u
return u}if(s==="-"){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ku(a,u)
if(s==="*")throw H.d(P.k9(q))
if(v.leafTags[q]===true){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ku(a,u)},
ku:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.jE(a,!1,null,!!a.$iA)},
mE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j2(u)
else return J.jE(u,c,null,null)},
mz:function(){if(!0===$.jD)return
$.jD=!0
H.mA()},
mA:function(){var u,t,s,r,q,p,o,n
$.iX=Object.create(null)
$.j1=Object.create(null)
H.my()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kv.$1(q)
if(p!=null){o=H.mE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
my:function(){var u,t,s,r,q,p,o=C.v()
o=H.bz(C.w,H.bz(C.x,H.bz(C.m,H.bz(C.m,H.bz(C.y,H.bz(C.z,H.bz(C.A(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ks=new H.iZ(r)
$.km=new H.j_(q)
$.kv=new H.j0(p)},
bz:function(a,b){return a(b)||b},
l6:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(new P.fa("Illegal RegExp pattern ("+String(p)+")",a))},
mK:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kw:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kx:function(a,b,c){var u=H.mL(a,b,c)
return u},
mL:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kw(b),'g'),H.mr(c))},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h0:function h0(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
j7:function j7(a){this.a=a},
e1:function e1(a){this.a=a
this.b=null},
bH:function bH(){},
hC:function hC(){},
hw:function hw(){},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a){this.a=a},
hf:function hf(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fl:function fl(a){this.a=a},
fq:function fq(a,b){this.a=a
this.b=b
this.c=null},
bo:function bo(a,b){this.a=a
this.$ti=b},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bx:function(a){return a},
ax:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bB(b,a))},
lM:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.mq(a,b,c))
return b},
bZ:function bZ(){},
cX:function cX(){},
bY:function bY(){},
cY:function cY(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
cZ:function cZ(){},
fZ:function fZ(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
mt:function(a){return J.jR(a?Object.keys(a):[],null)},
mN:function(a){return v.mangledGlobalNames[a]},
mF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jD==null){H.mz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.k9("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jG()]
if(r!=null)return r
r=H.mD(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.jG(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
l4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.ja(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.aJ(a,0,4294967295,"length",null))
return J.jR(new Array(a),b)},
jR:function(a,b){return J.jj(H.b(a,[b]))},
jj:function(a){a.fixed$length=Array
return a},
l5:function(a,b){return J.ct(a,b)},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cO.prototype
return J.cN.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.cP.prototype
if(typeof a=="boolean")return J.fj.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a1)return a
return J.iY(a)},
en:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a1)return a
return J.iY(a)},
jz:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a1)return a
return J.iY(a)},
mv:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.c7.prototype
return a},
jA:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b3.prototype
return a}if(a instanceof P.a1)return a
return J.iY(a)},
x:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).p(a,b)},
cs:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.en(a).h(a,b)},
kQ:function(a,b,c){return J.jA(a).fz(a,b,c)},
kR:function(a,b,c,d){return J.jA(a).fP(a,b,c,d)},
ct:function(a,b){return J.mv(a).aM(a,b)},
j9:function(a,b){return J.jz(a).H(a,b)},
kS:function(a,b){return J.jz(a).L(a,b)},
bE:function(a){return J.W(a).gK(a)},
bf:function(a){return J.jz(a).gP(a)},
bg:function(a){return J.en(a).gj(a)},
kT:function(a,b){return J.jA(a).hw(a,b)},
a8:function(a){return J.W(a).i(a)},
a:function a(){},
fj:function fj(){},
cP:function cP(){},
cQ:function cQ(){},
h4:function h4(){},
c7:function c7(){},
b3:function b3(){},
b2:function b2(a){this.$ti=a},
jk:function jk(a){this.$ti=a},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bO:function bO(){},
cO:function cO(){},
cN:function cN(){},
bm:function bm(){}},P={
lB:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mi()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bA(new P.io(s),1)).observe(u,{childList:true})
return new P.im(s,u,t)}else if(self.setImmediate!=null)return P.mj()
return P.mk()},
lC:function(a){self.scheduleImmediate(H.bA(new P.ip(a),0))},
lD:function(a){self.setImmediate(H.bA(new P.iq(a),0))},
lE:function(a){P.js(C.i,a)},
js:function(a,b){var u=C.c.a1(a.a,1000)
return P.lJ(u<0?0:u,b)},
k7:function(a,b){var u=C.c.a1(a.a,1000)
return P.lK(u<0?0:u,b)},
lJ:function(a,b){var u=new P.e7()
u.eb(a,b)
return u},
lK:function(a,b){var u=new P.e7()
u.ec(a,b)
return u},
ne:function(a){return new P.bw(a,1)},
lF:function(){return C.J},
lG:function(a){return new P.bw(a,3)},
lQ:function(a,b){return new P.iI(a,[b])},
mb:function(){var u,t
for(;u=$.by,u!=null;){$.cm=null
t=u.b
$.by=t
if(t==null)$.cl=null
u.a.$0()}},
mg:function(){$.jw=!0
try{P.mb()}finally{$.cm=null
$.jw=!1
if($.by!=null)$.jH().$1(P.kn())}},
me:function(a){var u=new P.dv(a)
if($.by==null){$.by=$.cl=u
if(!$.jw)$.jH().$1(P.kn())}else $.cl=$.cl.b=u},
mf:function(a){var u,t,s=$.by
if(s==null){P.me(a)
$.cm=$.cl
return}u=new P.dv(a)
t=$.cm
if(t==null){u.b=s
$.by=$.cm=u}else{u.b=t.b
$.cm=t.b=u
if(u.b==null)$.cl=u}},
k6:function(a,b){var u=$.ai
if(u===C.e)return P.js(a,b)
return P.js(a,u.fW(b))},
lA:function(a,b){var u=$.ai
if(u===C.e)return P.k7(a,b)
return P.k7(a,u.d1(b,P.dh))},
kk:function(a,b,c,d,e){var u={}
u.a=d
P.mf(new P.iR(u,e))},
mc:function(a,b,c,d){var u,t=$.ai
if(t===c)return d.$0()
$.ai=c
u=t
try{t=d.$0()
return t}finally{$.ai=u}},
md:function(a,b,c,d,e){var u,t=$.ai
if(t===c)return d.$1(e)
$.ai=c
u=t
try{t=d.$1(e)
return t}finally{$.ai=u}},
io:function io(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
e7:function e7(){this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b){this.a=a
this.b=b},
ch:function ch(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iI:function iI(a,b){this.a=a
this.$ti=b},
dv:function dv(a){this.a=a
this.b=null},
dd:function dd(){},
hz:function hz(){},
dh:function dh(){},
iM:function iM(){},
iR:function iR(a,b){this.a=a
this.b=b},
iC:function iC(){},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
l8:function(a,b){return new H.H([a,b])},
l9:function(a){return H.mu(a,new H.H([null,null]))},
jS:function(a){return new P.iz([a])},
jv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lI:function(a,b){var u=new P.dK(a,b)
u.c=a.e
return u},
l3:function(a,b,c){var u,t
if(P.jx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.u])
$.a2.push(a)
try{P.lP(a,u)}finally{if(0>=$.a2.length)return H.c($.a2,-1)
$.a2.pop()}t=P.k2(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ji:function(a,b,c){var u,t
if(P.jx(a))return b+"..."+c
u=new P.ar(b)
$.a2.push(a)
try{t=u
t.a=P.k2(t.a,a,", ")}finally{if(0>=$.a2.length)return H.c($.a2,-1)
$.a2.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jx:function(a){var u,t
for(u=$.a2.length,t=0;t<u;++t)if(a===$.a2[t])return!0
return!1},
lP:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.f(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.v()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.v();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jT:function(a){var u,t={}
if(P.jx(a))return"{...}"
u=new P.ar("")
try{$.a2.push(a)
u.a+="{"
t.a=!0
J.kS(a,new P.fw(t,u))
u.a+="}"}finally{if(0>=$.a2.length)return H.c($.a2,-1)
$.a2.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iz:function iz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
dK:function dK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fh:function fh(){},
fs:function fs(){},
r:function r(){},
fv:function fv(){},
fw:function fw(a,b){this.a=a
this.b=b},
a0:function a0(){},
iF:function iF(){},
dL:function dL(){},
eG:function eG(){},
eL:function eL(){},
f_:function f_(){},
i5:function i5(){},
i6:function i6(){},
iL:function iL(a){this.b=0
this.c=a},
l2:function(a){if(a instanceof H.bH)return a.i(0)
return"Instance of '"+H.f(H.c1(a))+"'"},
la:function(a,b,c){var u,t,s=J.l4(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jn:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bf(a);u.v();)t.push(u.gJ(u))
if(b)return t
return J.jj(t)},
jq:function(a){var u,t=a.length,s=P.jp(0,null,t)
if(typeof s!=="number")return s.aa()
u=s<t
return H.lo(u?C.a.cq(a,0,s):a)},
lq:function(a){return new H.fk(a,H.l6(a,!1,!0,!1,!1,!1))},
k2:function(a,b,c){var u=J.bf(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gJ(u))
while(u.v())}else{a+=H.f(u.gJ(u))
for(;u.v();)a=a+c+H.f(u.gJ(u))}return a},
lL:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.n){u=$.kP().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.h_(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ln(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l0:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cC:function(a){if(a>=10)return""+a
return"0"+a},
jM:function(a){return new P.aY(1000*a)},
jh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l2(a)},
kU:function(a){return new P.aj(!1,null,null,a)},
ja:function(a,b,c){return new P.aj(!0,a,b,c)},
d3:function(a,b){return new P.br(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.br(b,c,!0,a,d,"Invalid value")},
jp:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.d(P.aJ(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.d(P.aJ(b,a,c,"end",null))
return b}return c},
k1:function(a,b){if(typeof a!=="number")return a.aa()
if(a<0)throw H.d(P.aJ(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.bg(b):e
return new P.fg(u,!0,a,c,"Index out of range")},
y:function(a){return new P.i3(a)},
k9:function(a){return new P.i0(a)},
bI:function(a){return new P.eK(a)},
o:function(a){return new P.dD(a)},
jF:function(a){H.mF(a)},
be:function be(){},
aa:function aa(a,b){this.a=a
this.b=b},
I:function I(){},
aY:function aY(a){this.a=a},
eX:function eX(){},
eY:function eY(){},
bk:function bk(){},
d0:function d0(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fg:function fg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i3:function i3(a){this.a=a},
i0:function i0(a){this.a=a},
hv:function hv(a){this.a=a},
eK:function eK(a){this.a=a},
h3:function h3(){},
db:function db(){},
eR:function eR(a){this.a=a},
dD:function dD(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
w:function w(){},
j:function j(){},
fi:function fi(){},
b5:function b5(){},
bR:function bR(){},
b6:function b6(){},
a6:function a6(){},
a1:function a1(){},
u:function u(){},
ar:function ar(a){this.a=a},
mo:function(a){var u,t=J.W(a)
if(!!t.$ib_){u=t.gd7(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ec(a.data,a.height,a.width)},
mn:function(a){if(a instanceof P.ec)return{data:a.a,height:a.b,width:a.c}
return a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.l8(P.u,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
mm:function(a){var u={}
a.L(0,new P.iS(u))
return u},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b},
f7:function f7(){},
f8:function f8(){},
iy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iB:function iB(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
fo:function fo(){},
b7:function b7(){},
h1:function h1(){},
h7:function h7(){},
hA:function hA(){},
k:function k(){},
b9:function b9(){},
hR:function hR(){},
dI:function dI(){},
dJ:function dJ(){},
dT:function dT(){},
dU:function dU(){},
e3:function e3(){},
e4:function e4(){},
ea:function ea(){},
eb:function eb(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(a){this.a=a},
ey:function ey(){},
bh:function bh(){},
h2:function h2(){},
dw:function dw(){},
d6:function d6(){},
hu:function hu(){},
e_:function e_(){},
e0:function e0(){}},W={
jd:function(){var u=document.createElement("canvas")
return u},
jg:function(a){return"wheel"},
ix:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ki:function(a,b,c,d){var u=W.ix(W.ix(W.ix(W.ix(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.kl(new W.iv(c),W.i)
if(u!=null&&!0)J.kR(a,b,u,!1)
return new W.iu(a,b,u,!1)},
kl:function(a,b){var u=$.ai
if(u===C.e)return a
return u.d1(a,b)},
l:function l(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
cw:function cw(){},
bi:function bi(){},
aX:function aX(){},
eN:function eN(){},
G:function G(){},
bJ:function bJ(){},
eO:function eO(){},
a9:function a9(){},
am:function am(){},
eP:function eP(){},
eQ:function eQ(){},
eS:function eS(){},
eU:function eU(){},
cE:function cE(){},
cF:function cF(){},
eV:function eV(){},
eW:function eW(){},
is:function is(a,b){this.a=a
this.b=b},
S:function S(){},
i:function i(){},
e:function e(){},
aB:function aB(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
aC:function aC(){},
fe:function fe(){},
bM:function bM(){},
b_:function b_(){},
bN:function bN(){},
bn:function bn(){},
ft:function ft(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
aE:function aE(){},
fS:function fS(){},
ap:function ap(){},
ir:function ir(a){this.a=a},
E:function E(){},
d_:function d_(){},
aH:function aH(){},
h5:function h5(){},
hd:function hd(){},
he:function he(a){this.a=a},
hg:function hg(){},
aK:function aK(){},
hr:function hr(){},
aL:function aL(){},
hs:function hs(){},
aM:function aM(){},
hx:function hx(){},
hy:function hy(a){this.a=a},
as:function as(){},
aN:function aN(){},
at:function at(){},
hD:function hD(){},
hE:function hE(){},
hM:function hM(){},
aO:function aO(){},
bt:function bt(){},
hP:function hP(){},
hQ:function hQ(){},
ba:function ba(){},
i4:function i4(){},
ij:function ij(){},
bc:function bc(){},
ca:function ca(){},
it:function it(){},
dy:function dy(){},
iw:function iw(){},
dQ:function dQ(){},
iG:function iG(){},
iH:function iH(){},
iu:function iu(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iv:function iv(a){this.a=a},
J:function J(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dR:function dR(){},
dS:function dS(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
cf:function cf(){},
cg:function cg(){},
dY:function dY(){},
dZ:function dZ(){},
e2:function e2(){},
e5:function e5(){},
e6:function e6(){},
ci:function ci(){},
cj:function cj(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){}},K={
T:function(a){var u=new K.hh()
u.e5(a)
return u},
er:function er(){},
cM:function cM(){},
cV:function cV(){},
aG:function aG(){this.a=null},
hh:function hh(){this.a=null}},L={dc:function dc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},di:function di(a,b,c){this.a=a
this.b=b
this.c=c},dj:function dj(a){this.b=a
this.c=null},hN:function hN(){var _=this
_.d=_.c=_.b=_.a=null},dl:function dl(a){this.b=a
this.a=this.c=null}},O={
eH:function(a){var u=new O.al([a])
u.b4(a)
return u},
al:function al(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bV:function bV(){this.b=this.a=null},
jO:function(a,b){var u,t,s,r=new O.cL()
r.r=0
r.scj(null)
r.sbL(null)
if(a==null){u=$.ka
if(u==null){u=new V.D(1,0)
$.ka=u
t=u}else t=u}else t=a
if(!J.x(r.d,t)){s=r.d
r.d=t
u=new D.m("blurDirection",s,t)
u.b=!0
r.A(u)}r.sd6(b)
r.sbM(null)
r.sbN(0)
return r},
fy:function(){var u,t=new O.cW(),s=O.eH(V.ae)
t.e=s
s.aC(t.geC(),t.geE())
s=new O.ao(t,"emission")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
t.f=s
s=new O.ao(t,"ambient")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
t.r=s
s=new O.ao(t,"diffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
t.x=s
s=new O.ao(t,"invDiffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
t.y=s
s=new O.fE(t,"specular")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
s.ch=100
t.z=s
s=new O.fA(t,"bump")
s.c=new A.Z(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ao(t,"reflect")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
t.cx=s
s=new O.fD(t,"refract")
s.c=new A.Z(!1,!1,!1)
s.f=new V.P(0,0,0)
s.ch=1
t.cy=s
s=new O.fz(t,"alpha")
s.c=new A.Z(!1,!1,!1)
s.f=1
t.db=s
s=new D.cS()
s.b4(D.a_)
s.e=H.b([],[D.eB])
s.f=H.b([],[D.eT])
s.r=H.b([],[D.bp])
s.x=H.b([],[D.ht])
s.z=s.y=null
s.cm(s.geA(),s.gfd(),s.gfh())
t.dx=s
u=new O.fC()
u.b=new V.Y(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.C():u
s.k(0,t.gfB())
s=t.dx
u=s.z
s=u==null?s.z=D.C():u
s.k(0,t.ga0())
t.fr=null
return t},
k4:function(){var u,t,s,r=new O.df()
r.a=new V.Y(0,0,0,0)
u=O.eH(O.b8)
r.c=u
u.aC(r.geS(),r.geU())
r.d=0
r.e=null
r.r=r.f=C.h
t=new V.Y(0,0,0,0)
if(!r.a.p(0,t)){s=r.a
r.a=t
u=new D.m("backColor",s,t)
u.b=!0
r.A(u)}r.sd2(C.h)
return r},
jr:function(a,b){var u,t,s,r,q=new O.b8(),p=q.a
q.a=b
b.gm().k(0,q.ga0())
u=new D.m("texture",p,q.a)
u.b=!0
q.A(u)
t=a==null?V.aD():a
if(!J.x(q.b,t)){p=q.b
q.b=t
u=new D.m("colorMatrix",p,t)
u.b=!0
q.A(u)}s=V.d5()
if(!J.x(q.c,s)){p=q.c
q.c=s
u=new D.m("source",p,s)
u.b=!0
q.A(u)}r=V.d5()
if(!J.x(q.d,r)){p=q.d
q.d=r
u=new D.m("destination",p,r)
u.b=!0
q.A(u)}if(q.e!==!1){q.e=!1
u=new D.m("flip",!0,!1)
u.b=!0
q.A(u)}q.f=null
return q},
cL:function cL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){var _=this
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
bT:function bT(){},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
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
de:function de(){},
df:function df(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
cG:function(){var u,t=new E.aA()
t.a=""
t.b=!0
u=O.eH(E.aA)
t.y=u
u.aC(t.ghd(),t.ghg())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.saD(0,null)
t.sae(null)
t.sas(null)
return t},
lr:function(a,b){var u=new E.h9(a)
u.e4(a,b)
return u},
lz:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibi)return E.k5(a,!0,!0,!0,!1)
u=W.jd()
t=u.style
t.width="100%"
t.height="100%"
s.gd4(a).k(0,u)
return E.k5(u,!0,!0,!0,!1)},
k5:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dg(),p=C.f.cl(a,"webgl2",P.l9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lr(p,a)
u=new T.hJ(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dp(a)
t=new X.fn()
t.c=new X.ab(!1,!1,!1)
t.d=P.jS(P.w)
u.b=t
t=new X.fT(u)
t.f=0
t.r=V.aI()
t.x=V.aI()
t.ch=t.Q=1
u.c=t
t=new X.fu(u)
t.r=0
t.x=V.aI()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hO(u)
t.f=V.aI()
t.r=V.aI()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dd,P.a1]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.geM(),!1))
u.z.push(W.R(a,"focus",u.geW(),!1))
u.z.push(W.R(a,"blur",u.geG(),!1))
u.z.push(W.R(s,"keyup",u.gf_(),!1))
u.z.push(W.R(s,"keydown",u.geY(),!1))
u.z.push(W.R(a,"mousedown",u.gf3(),!1))
u.z.push(W.R(a,"mouseup",u.gf7(),!1))
u.z.push(W.R(a,r,u.gf5(),!1))
t=u.z
W.jg(a)
W.jg(a)
t.push(W.R(a,W.jg(a),u.gf9(),!1))
u.z.push(W.R(s,r,u.geO(),!1))
u.z.push(W.R(s,"mouseup",u.geQ(),!1))
u.z.push(W.R(s,"pointerlockchange",u.gfb(),!1))
u.z.push(W.R(a,"touchstart",u.gfs(),!1))
u.z.push(W.R(a,"touchend",u.gfn(),!1))
u.z.push(W.R(a,"touchmove",u.gfp(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.aa(Date.now(),!1)
q.db=0
q.cP()
return q},
eC:function eC(){},
aA:function aA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
dg:function dg(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hL:function hL(a){this.a=a}},Z={
ju:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bx(c)),35044)
a.bindBuffer(b,null)
return new Z.du(b,u)},
ad:function(a){return new Z.aw(a)},
du:function du(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
c9:function c9(a){this.a=a},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a){this.a=a}},D={
C:function(){var u=new D.an()
u.d=0
return u},
eF:function eF(){},
an:function an(){var _=this
_.d=_.c=_.b=_.a=null},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
O:function O(){this.b=null},
b0:function b0(){this.b=null},
b1:function b1(){this.b=null},
m:function m(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eB:function eB(){},
eT:function eT(){},
a_:function a_(){},
cS:function cS(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bp:function bp(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(){}},X={cy:function cy(a,b){this.a=a
this.b=b},cR:function cR(a,b){this.a=a
this.b=b},fn:function fn(){var _=this
_.d=_.c=_.b=_.a=null},cT:function cT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fu:function fu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},aF:function aF(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fT:function fT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bX:function bX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h6:function h6(){},dk:function dk(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hO:function hO(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dp:function dp(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
eA:function(a,b,c,d){var u,t,s,r,q=new X.ez()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.k3(null)
q.cx=new V.Y(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.d5()
q.sak(0,512)
q.sag(0,512)
u=new V.Y(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.m("color",t,u)
s.b=!0
q.V(s)}if(q.cy!==d){q.cy=d
s=new D.m("clearColor",!d,d)
s.b=!0
q.V(s)}s=q.db
if(!(Math.abs(s-2000)<$.v().a)){q.db=2000
s=new D.m("depth",s,2000)
s.b=!0
q.V(s)}if(!q.f){q.f=!0
s=new D.m("autoResize",!1,!0)
s.b=!0
q.V(s)}s=q.r
if(!(Math.abs(s-b)<$.v().a)){q.r=b
s=new D.m("autoResizeScalarX",s,b)
s.b=!0
q.V(s)}s=q.x
if(!(Math.abs(s-c)<$.v().a)){q.x=c
s=new D.m("autoResizeScalarY",s,c)
s.b=!0
q.V(s)}r=V.d5()
if(!J.x(q.dy,r)){t=q.dy
q.dy=r
s=new D.m("region",t,r)
s.b=!0
q.V(s)}return q},
jN:function(a){var u=new X.fb(),t=new V.Y(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.d5()
u.r=t
return u},
ez:function ez(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jc:function jc(){},
fb:function fb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ff:function ff(){this.b=this.a=null},
d1:function d1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(){}},V={
eI:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.Y(u,t,s,1)},
j8:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dT(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.d.ai("null",c)
return C.d.ai(C.b.dP(Math.abs(a-0)<$.v().a?0:a,b),c+b+1)},
bC:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.u])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.d.ai(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
co:function(a){return C.b.hC(Math.pow(2,C.G.c4(Math.log(H.ml(a))/Math.log(2))))},
aD:function(){var u=$.bW
return u==null?$.bW=V.af(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
af:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jX:function(a,b,c,d){return V.af(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jo:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.af(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jV:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.af(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
jW:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.af(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
aI:function(){var u=$.k_
return u==null?$.k_=new V.Q(0,0):u},
le:function(){var u=$.aq
return u==null?$.aq=new V.L(0,0,0):u},
d5:function(){var u=$.c2
return u==null?$.c2=V.h8(0,0,1,1):u},
h8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d4(a,b,c,d)},
c8:function(){var u=$.kf
return u==null?$.kf=new V.z(0,0,0):u},
kh:function(){var u=$.kg
return u==null?$.kg=new V.bv(1,0.00390625,0.0000152587890625,0):u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a){this.a=a},
bU:function bU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mI:function(a){P.lA(C.E,new V.j3(a))},
lt:function(a){var u=new V.hn()
u.e6(a,!0)
return u},
j3:function j3(a){this.a=a},
hn:function hn(){this.b=this.a=null},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a}},U={
je:function(){var u=new U.eJ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jf:function(a){var u=new U.cA()
u.a=a
return u},
jP:function(){var u=new U.bL()
u.b4(U.a3)
u.aC(u.ge9(),u.gff())
u.e=null
u.f=V.aD()
u.r=0
return u},
eJ:function eJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cA:function cA(){this.b=this.a=null},
bL:function bL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
d7:function d7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="testCanvas",b9=null,c0="../resources/StarsCan.png",c1="../resources/Stars.png",c2="modifiers",c3=V.lt("Test 042"),c4=W.jd()
c4.className="pageLargeCanvas"
c4.id=b8
c3.a.appendChild(c4)
u=[P.u]
c3.cZ(H.b(["Test of the Blum effect technique."],u))
c3.cZ(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b8)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.lz(t,!0,!0,!0,!1)
r=U.jP()
c3=new U.d7()
c3.r=c3.f=c3.e=c3.d=c3.c=c3.b=c3.a=0
c3.sdR(0)
c3.sdK(0,0)
c3.sdN(0)
u=c3.d
if(!(Math.abs(u-0)<$.v().a)){c3.d=0
u=new D.m("deltaYaw",u,0)
u.b=!0
c3.F(u)}u=c3.e
if(!(Math.abs(u-0)<$.v().a)){c3.e=0
u=new D.m("deltaPitch",u,0)
u.b=!0
c3.F(u)}u=c3.f
if(!(Math.abs(u-0.5)<$.v().a)){c3.f=0.5
u=new D.m("deltaRoll",u,0.5)
u.b=!0
c3.F(u)}r.k(0,c3)
r.k(0,U.jf(V.jo(1.5707963267948966)))
q=E.cG()
q.sas(r)
q.saD(0,F.mJ(0.6))
c3=O.fy()
c3.f.sax(0,new V.P(1,1,1))
q.sae(c3)
p=s.f.dw(c0,c0,c0,c0,c0,c0)
o=E.cG()
o.sas(r)
o.saD(0,F.kp(1.2,16,1.2))
c3=O.fy()
c3.x.saA(p)
c3.db.saA(p)
o.sae(c3)
n=E.cG()
n.sas(r)
c3=F.kp(1.2,16,1.2)
c3.bd()
n.saD(0,c3)
c3=O.fy()
u=c3.r
u.sax(0,new V.P(0.6,0.6,0.6))
c3.x.saA(p)
c3.db.saA(p)
n.sae(c3)
m=s.f.dw(c1,c1,c1,c1,c1,c1)
l=new D.bp()
l.c=new V.P(1,1,1)
l.r=1
l.y=l.x=0
l.z=!0
l.a=V.aD()
k=l.b
l.b=r
r.gm().k(0,l.gbl())
c3=new D.m("mover",k,l.b)
c3.b=!0
l.a7(c3)
j=new V.P(1,1,1)
if(!l.c.p(0,j)){k=l.c
l.c=j
c3=new D.m("color",k,j)
c3.b=!0
l.a7(c3)}c3=l.d
if(c3!==m){if(c3!=null)c3.gm().C(0,l.gbl())
k=l.d
l.d=m
m.gm().k(0,l.gbl())
c3=new D.m("texture",k,l.d)
c3.b=!0
l.a7(c3)}i=V.kh()
if(!J.x(l.f,i)){k=l.f
l.f=i
c3=new D.m("shadowAdjust",k,i)
c3.b=!0
l.a7(c3)}c3=l.r
if(!(Math.abs(c3-0.5)<$.v().a)){l.r=0.5
c3=new D.m("attenuation0",c3,0.5)
c3.b=!0
l.a7(c3)}c3=l.x
if(!(Math.abs(c3-0.05)<$.v().a)){l.x=0.05
c3=new D.m("attenuation1",c3,0.05)
c3.b=!0
l.a7(c3)}c3=l.y
if(!(Math.abs(c3-0.025)<$.v().a)){l.y=0.025
c3=new D.m("attenuation2",c3,0.025)
c3.b=!0
l.a7(c3)}h=E.cG()
h.sas(U.jf(V.jX(10,10,10,1)))
c3=F.ko(1,b9,b9,1)
c3.bd()
h.saD(0,c3)
g=U.jP()
c3=s.x
u=new U.dr()
f=U.je()
f.sck(0,!0)
f.sc8(6.283185307179586)
f.sca(0)
f.sZ(0,0)
f.sc9(100)
f.sS(0)
f.sbU(0.5)
u.b=f
e=u.gaJ()
f.gm().k(0,e)
f=U.je()
f.sck(0,!0)
f.sc8(6.283185307179586)
f.sca(0)
f.sZ(0,0)
f.sc9(100)
f.sS(0)
f.sbU(0.5)
u.c=f
f.gm().k(0,e)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.ab(!1,!1,!1)
k=u.d
u.d=d
f=new D.m(c2,k,d)
f.b=!0
u.F(f)
f=u.f
if(f!==!1){u.f=!1
f=new D.m("invertX",f,!1)
f.b=!0
u.F(f)}f=u.r
if(f!==!1){u.r=!1
f=new D.m("invertY",f,!1)
f.b=!0
u.F(f)}u.aT(c3)
g.k(0,u)
c3=s.x
u=new U.dq()
f=U.je()
f.sck(0,!0)
f.sc8(6.283185307179586)
f.sca(0)
f.sZ(0,0)
f.sc9(100)
f.sS(0)
f.sbU(0.2)
u.b=f
f.gm().k(0,u.gaJ())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.ab(!0,!1,!1)
k=u.c
u.c=d
f=new D.m(c2,k,d)
f.b=!0
u.F(f)
u.aT(c3)
g.k(0,u)
c3=s.x
u=new U.ds()
u.c=0.01
u.e=u.d=0
d=new X.ab(!1,!1,!1)
u.b=d
f=new D.m(c2,b9,d)
f.b=!0
u.F(f)
u.aT(c3)
g.k(0,u)
g.k(0,U.jf(V.af(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=O.fy()
c.dx.k(0,l)
c3=c.r
c3.sax(0,new V.P(0.05,0.05,0.05))
c3=c.x
c3.sax(0,new V.P(0.7,0.7,0.7))
b=X.eA(!0,1,1,!0)
a=new M.cH()
a.a=!0
c3=O.eH(E.aA)
a.e=c3
c3.aC(a.geI(),a.geK())
a.y=a.x=a.r=a.f=null
a0=X.jN(b9)
a1=new X.d1()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.sas(b9)
c3=a1.c
if(!(Math.abs(c3-1.0471975511965976)<$.v().a)){a1.c=1.0471975511965976
c3=new D.m("fov",c3,1.0471975511965976)
c3.b=!0
a1.V(c3)}c3=a1.d
if(!(Math.abs(c3-0.1)<$.v().a)){a1.d=0.1
c3=new D.m("near",c3,0.1)
c3.b=!0
a1.V(c3)}c3=a1.e
if(!(Math.abs(c3-2000)<$.v().a)){a1.e=2000
c3=new D.m("far",c3,2000)
c3.b=!0
a1.V(c3)}c3=a.b
if(c3!==a1){if(c3!=null)c3.gm().C(0,a.gT())
k=a.b
a.b=a1
a1.gm().k(0,a.gT())
c3=new D.m("camera",k,a.b)
c3.b=!0
a.R(c3)}a.saO(0,a0)
a.sae(b9)
a.sae(c)
a.e.k(0,h)
a.e.k(0,q)
a.e.k(0,n)
a.e.k(0,o)
a.b.sas(g)
a.saO(0,b)
a2=X.eA(!0,1,1,!1)
a3=O.k4()
c3=a3.c
u=b.ch
c3.k(0,O.jr(V.af(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),u))
a4=M.eM(b9,b9)
a4.saO(0,a2)
a4.sae(a3)
a5=M.jL(b9)
for(c3=[H.jB(a5,"al",0)],u=[{func:1,ret:-1,args:[D.O]}],a6=a2,a7=0;a7<4;++a7,a6=a8){a8=X.eA(!0,0.25,0.25,!1)
f=new V.bv(10,10,10,1)
e=a6.ch
a9=a2.ch
b0=new M.cK()
b0.a=!0
b0.c=X.eA(!0,1,1,!1)
b1=O.jO(b9,b9)
b2=b1.x
if(b2==null){b2=new D.an()
b2.d=0
b1.x=b2}b3=b0.gT()
b4=b2.a;(b4==null?b2.a=H.b([],u):b4).push(b3)
b0.d=b1
b0.e=M.eM(b0.c,b1)
b1=b0.c.ch
b2=$.kb
b1=O.jO(b2==null?$.kb=new V.D(0,1):b2,b1)
b2=b1.x
if(b2==null){b2=new D.an()
b2.d=0
b1.x=b2}b4=b2.a;(b4==null?b2.a=H.b([],u):b4).push(b3)
b0.f=b1
b0.r=M.eM(b9,b1)
b0.d.sbN(0)
b0.f.sbN(0)
b0.d.sd6(e)
b0.d.sbM(a9)
b0.f.sbM(a9)
b0.d.scj(b9)
b0.f.scj(b9)
b0.d.sbL(f)
b0.f.sbL(f)
b0.r.saO(0,a8)
if(a5.bC(H.b([b0],c3))){f=a5.a
b5=f.length
f.push(b0)
f=H.b([b0],c3)
e=a5.c
if(e!=null)e.$2(b5,f)}}b6=O.k4()
b6.sd2(C.p)
b6.c.k(0,O.jr(b9,b.ch))
b6.c.k(0,O.jr(b9,a6.ch))
b7=M.eM(b9,b9)
b7.sae(b6)
c3=M.jL(H.b([a,a4,a5,b7],[M.a5]))
u=s.d
if(u!==c3){if(u!=null)u.gm().C(0,s.gcv())
s.d=c3
c3.gm().k(0,s.gcv())
s.cw()}V.mI(s)}},M={
jL:function(a){var u=new M.cz()
u.b4(M.a5)
u.e=!0
u.f=!1
u.r=null
u.aC(u.gfj(),u.gfl())
if(a!=null)u.b9(0,a)
return u},
eM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=new M.cB()
i.a=!0
u=E.cG()
t=F.hj()
s=t.a
r=new V.z(-1,-1,1)
r=r.q(0,Math.sqrt(r.B(r)))
q=s.ba(new V.ac(1,2,4,6),V.eI(255,0,0),new V.L(-1,-1,0),new V.Q(0,1),r,j)
r=t.a
s=new V.z(1,-1,1)
s=s.q(0,Math.sqrt(s.B(s)))
p=r.ba(new V.ac(0,3,4,6),V.eI(0,0,255),new V.L(1,-1,0),new V.Q(1,1),s,j)
s=t.a
r=new V.z(1,1,1)
r=r.q(0,Math.sqrt(r.B(r)))
o=s.ba(new V.ac(0,2,5,6),V.eI(0,128,0),new V.L(1,1,0),new V.Q(1,0),r,j)
r=t.a
s=V.aI()
n=new V.z(-1,1,1)
n=n.q(0,Math.sqrt(n.B(n)))
m=r.ba(new V.ac(0,2,4,7),V.eI(255,255,0),new V.L(-1,1,0),s,n,j)
t.d.cX(H.b([q,p,o,m],[F.aP]))
t.ar()
u.saD(0,t)
i.e=u
l=new X.ff()
k=i.b
i.b=l
l.gm().k(0,i.gT())
u=new D.m("camera",k,i.b)
u.b=!0
i.R(u)
i.saO(0,a)
i.sae(b)
return i},
cz:function cz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cB:function cB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){}},A={
lc:function(a,b){var u=a.ay,t=new A.fx(b,u)
t.bk(b,u)
t.e3(a,b)
return t},
ld:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gap(a3)+a4.gap(a4)+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+a9.gap(a9)+b0.gap(b0)+b1.gap(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)c+="_"+H.f(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.n)(b3),++t)c+="_"+H.f(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.n)(b4),++t)c+="_"+H.f(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.n)(b5),++t)c+="_"+H.f(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.a7()
if(j){u=$.aU()
d=new Z.aw(d.a|u.a)}if(i){u=$.aT()
d=new Z.aw(d.a|u.a)}if(h){u=$.aV()
d=new Z.aw(d.a|u.a)}if(g){u=$.aS()
d=new Z.aw(d.a|u.a)}return new A.fB(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
iP:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iQ:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iP(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eo(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lV:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iP(b,t,"emission")
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
lR:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iQ(b,t,"ambient")
b.a+="\n"},
lT:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iQ(b,t,"diffuse")
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
lW:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iQ(b,t,"invDiffuse")
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
m1:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iQ(b,t,"specular")
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
lY:function(a,b){var u,t,s
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
m_:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iP(b,t,"reflect")
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
m0:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iP(b,t,"refract")
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
lS:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.eo(t)
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
if(typeof u!=="number")return u.al()
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
c.a=r+"\n"}r=[P.u]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.t(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.t(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.t(q," + ")+");\n"
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
lU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.eo(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.al()
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
r=[P.u]
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
c.a+="      highLight = intensity*("+C.a.t(m," + ")+");\n"}else c.a+="   highLight = "+C.a.t(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
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
lZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.eo(t)
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
if(typeof u!=="number")return u.al()
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
c.a=r+"\n"}r=[P.u]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.t(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.t(l," + ")+");\n"
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
m2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.eo(t)
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
if(typeof u!=="number")return u.al()
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
c.a=u+"\n"}u=[P.u]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.t(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.t(j," + ")+");\n"
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
lX:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.u])
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
u=b.a+="   return "+C.a.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
m3:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ar("")
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
A.lV(a,i)
A.lR(a,i)
A.lT(a,i)
A.lW(a,i)
A.m1(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.m_(a,i)
A.m0(a,i)}A.lY(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lS(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lU(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lZ(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.m2(a,q[n],i)
A.lX(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.u])
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
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aE(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aE(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aE(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.c(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aE(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.t(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m4:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bb+"];\n"
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
m6:function(a,b){var u
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
m5:function(a,b){var u
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
m8:function(a,b){var u,t
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
m9:function(a,b){var u,t
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
m7:function(a,b){var u
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
ma:function(a,b){var u
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
eo:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.d.aE(a,1)},
ly:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.o?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.p)t+="      clrAccum += color;\n"
else if(b===C.h)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.o
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
lx:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.hI(c,u)
t.bk(c,u)
t.e7(a,b,c)
return t},
jt:function(a,b,c,d,e){var u=new A.hV(a,c,e)
u.f=d
P.la(d,0,P.w)
return u},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fd:function fd(a,b){this.a=a
this.b=b},
fx:function fx(a,b){var _=this
_.de=_.hO=_.bc=_.ay=_.bb=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hW=_.hV=_.hU=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.ds=_.hT=_.dr=_.dq=_.hS=_.dn=_.dm=_.dl=_.hR=_.dk=_.dj=_.di=_.hQ=_.dh=_.dg=_.hP=_.df=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cv:function cv(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
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
_.bb=b3
_.ay=b4
_.bc=b5},
c3:function c3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c4:function c4(a,b,c,d,e,f){var _=this
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
d8:function d8(){},
bj:function bj(a,b){this.a=a
this.b=b},
hI:function hI(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dm:function dm(){},
hZ:function hZ(a){this.a=a},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
av:function av(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ko:function(a,b,c,d){var u=F.hj()
F.ck(u,b,c,d,a,1,0,0,1)
F.ck(u,b,c,d,a,0,1,0,3)
F.ck(u,b,c,d,a,0,0,1,2)
F.ck(u,b,c,d,a,-1,0,0,0)
F.ck(u,b,c,d,a,0,-1,0,0)
F.ck(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
iO:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ck:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.z(h,g+a1,f+a2)
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
j.d=i}m=F.iO(i)
l=F.iO(h)
k=F.ky(d,a0,new F.iN(j,F.iO(g),F.iO(f),l,m,c),b)
if(k!=null)a.aZ(k)},
kq:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hj()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.aP])
q=u.a
p=new V.z(0,0,t)
p=p.q(0,Math.sqrt(p.B(p)))
r.push(q.fR(new V.ac(a,-1,-1,-1),new V.Y(1,1,1,1),new V.L(0,0,c),new V.z(0,0,t),new V.Q(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.z(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dt(new V.ac(a,-1,-1,-1),null,new V.Y(i,g,h,1),new V.L(m*k,l*k,c),new V.z(0,0,t),new V.Q(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.k(0,f)
r.push(f)}u.d.cX(r)
return u},
kp:function(a,b,c){return F.mp(!0,!0,1,new F.iT(a,c),b)},
mp:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.ky(c,e,new F.iU(d),null)
if(u==null)return
u.ar()
u.d_()
u.aZ(F.kq(3,!1,1,new F.iV(d),e))
u.aZ(F.kq(1,!0,-1,new F.iW(d),e))
return u},
mJ:function(a){var u,t,s={}
s.a=u
s.a=null
s.a=new F.j4()
t=F.ko(8,null,new F.j5(s,a),8)
t.d_()
return t},
ky:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hj()
t=H.b([],[F.aP])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dt(g,g,new V.Y(p,0,0,1),g,g,new V.Q(r,1),g,g,0)
q.k(0,o)
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
o=F.dt(g,g,new V.Y(j,i,h,1),g,g,new V.Q(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bT(d))}}u.d.fQ(a+1,b+1,t)
return u},
bK:function(a,b,c){var u=new F.aZ(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.bI(a)
u.bJ(b)
u.fE(c)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
l7:function(a,b){var u=new F.bP(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.bI(a)
u.bJ(b)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
hj:function(){var u=new F.hi(),t=new F.i7(u)
t.b=!1
t.c=H.b([],[F.aP])
u.a=t
t=new F.hm(u)
t.b=H.b([],[F.c_])
u.b=t
t=new F.hl(u)
t.b=H.b([],[F.bP])
u.c=t
t=new F.hk(u)
t.b=H.b([],[F.aZ])
u.d=t
u.e=null
return u},
dt:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aP(),r=new F.ig()
r.b=H.b([],[F.c_])
s.b=r
r=new F.ib()
u=[F.bP]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i8()
u=[F.aZ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kM()
s.e=0
r=$.a7()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aU().a)!==0?e:t
s.x=(u&$.aT().a)!==0?b:t
s.y=(u&$.az().a)!==0?f:t
s.z=(u&$.aV().a)!==0?g:t
s.Q=(u&$.kN().a)!==0?c:t
s.ch=(u&$.bD().a)!==0?i:0
s.cx=(u&$.aS().a)!==0?a:t
return s},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
j4:function j4(){},
j5:function j5(a,b){this.a=a
this.b=b},
aZ:function aZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f3:function f3(){},
hq:function hq(){},
bP:function bP(){this.b=this.a=null},
fp:function fp(){},
hU:function hU(){},
c_:function c_(){this.a=null},
hi:function hi(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a
this.b=null},
hl:function hl(a){this.a=a
this.b=null},
hm:function hm(a){this.a=a
this.b=null},
aP:function aP(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a},
ih:function ih(a){this.a=a},
i7:function i7(a){this.a=a
this.c=this.b=null},
i8:function i8(){this.d=this.c=this.b=null},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){this.c=this.b=null},
id:function id(){},
ic:function ic(){},
ie:function ie(){},
h_:function h_(){},
ig:function ig(){this.b=null}},T={
k3:function(a){var u=new T.hG()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bs:function bs(){},
hF:function hF(){},
hG:function hG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hK:function hK(a,b,c,d,e,f,g){var _=this
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
H.jl.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gK:function(a){return H.c0(a)},
i:function(a){return"Instance of '"+H.f(H.c1(a))+"'"}}
J.fj.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$ibe:1}
J.cP.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.cQ.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.h4.prototype={}
J.c7.prototype={}
J.b3.prototype={
i:function(a){var u=a[$.kB()]
if(u==null)return this.e1(a)
return"JavaScript function for "+H.f(J.a8(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b2.prototype={
ce:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.d3(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.x(a[u],b)){a.splice(u,1)
return!0}return!1},
b9:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
L:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.bI(a))}},
t:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
ha:function(a){return this.t(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cq:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.aJ(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.d(P.aJ(c,b,u,"end",null))
if(b===c)return H.b([],[H.aR(a,0)])
return H.b(a.slice(b,c),[H.aR(a,0)])},
cp:function(a,b){return this.cq(a,b,null)},
gh7:function(a){if(a.length>0)return a[0]
throw H.d(H.jQ())},
gc6:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.jQ())},
aQ:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.lw(a,b==null?J.lO():b)},
dZ:function(a){return this.aQ(a,null)},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.x(a[u],b))return!0
return!1},
i:function(a){return P.ji(a,"[","]")},
gP:function(a){return new J.X(a,a.length)},
gK:function(a){return H.c0(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.ja(b,u,null))
if(b<0)throw H.d(P.aJ(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.bB(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bB(a,b))
a[b]=c},
$iq:1,
$ij:1}
J.jk.prototype={}
J.X.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bO.prototype={
aM:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbe(b)
if(this.gbe(a)===u)return 0
if(this.gbe(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbe:function(a){return a===0?1/a<0:a<0},
hC:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
c4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
dP:function(a,b){var u
if(b>20)throw H.d(P.aJ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbe(a))return"-"+u
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
n:function(a,b){if(typeof b!=="number")throw H.d(H.ay(b))
return a*b},
dT:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cT(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cT(a,b)},
cT:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.fI(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fI:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia6:1}
J.cO.prototype={$iw:1}
J.cN.prototype={}
J.bm.prototype={
bS:function(a,b){if(b<0)throw H.d(H.bB(a,b))
if(b>=a.length)H.p(H.bB(a,b))
return a.charCodeAt(b)},
bn:function(a,b){if(b>=a.length)throw H.d(H.bB(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.d(P.ja(b,null,null))
return a+b},
cr:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.d3(b,null))
if(b>c)throw H.d(P.d3(b,null))
if(c>a.length)throw H.d(P.d3(c,null))
return a.substring(b,c)},
aE:function(a,b){return this.cr(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ai:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
aM:function(a,b){var u
if(typeof b!=="string")throw H.d(H.ay(b))
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
gj:function(a){return a.length},
$iu:1}
H.N.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bS(this.a,b)},
$aq:function(){return[P.w]},
$ar:function(){return[P.w]},
$aj:function(){return[P.w]}}
H.q.prototype={}
H.bQ.prototype={
gJ:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.en(s),q=r.gj(s)
if(t.b!=q)throw H.d(P.bI(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.bS.prototype={
gP:function(a){return new H.cU(J.bf(this.a),this.b)},
gj:function(a){return J.bg(this.a)},
H:function(a,b){return this.b.$1(J.j9(this.a,b))},
$aj:function(a,b){return[b]}}
H.eZ.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.cU.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.ik.prototype={
gP:function(a){return new H.il(J.bf(this.a),this.b)}}
H.il.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cI.prototype={}
H.i2.prototype={
l:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dn.prototype={}
H.hS.prototype={
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
H.h0.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fm.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.i1.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j7.prototype={
$1:function(a){if(!!J.W(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.e1.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bH.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cp(t==null?"unknown":t)+"'"},
ghH:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hC.prototype={}
H.hw.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cp(u)+"'"}}
H.bF.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bF))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.c0(this.a)
else u=typeof t!=="object"?J.bE(t):H.c0(t)
return(u^H.c0(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.c1(u))+"'")}}
H.eE.prototype={
i:function(a){return this.a}}
H.hf.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gaz:function(a){return new H.bo(this,[H.aR(this,0)])},
ghG:function(a){var u=this,t=H.aR(u,0)
return H.lb(new H.bo(u,[t]),new H.fl(u),t,H.aR(u,1))},
fZ:function(a,b){var u=this.b
if(u==null)return!1
return this.em(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.h9(b)},
h9:function(a){var u,t,s=this.d
if(s==null)return
u=this.cJ(s,J.bE(a)&0x3ffffff)
t=this.dt(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cB(u==null?o.b=o.bA():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cB(t==null?o.c=o.bA():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bA()
r=J.bE(b)&0x3ffffff
q=o.cJ(s,r)
if(q==null)o.bG(s,r,[o.bB(b,c)])
else{p=o.dt(q,b)
if(p>=0)q[p].b=c
else q.push(o.bB(b,c))}}},
L:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.bI(u))
t=t.c}},
cB:function(a,b,c){var u=this.b5(a,b)
if(u==null)this.bG(a,b,this.bB(b,c))
else u.b=c},
bB:function(a,b){var u=this,t=new H.fq(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dt:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.x(a[t].a,b))return t
return-1},
i:function(a){return P.jT(this)},
b5:function(a,b){return a[b]},
cJ:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
ep:function(a,b){delete a[b]},
em:function(a,b){return this.b5(a,b)!=null},
bA:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.ep(t,u)
return t}}
H.fl.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aR(u,1),args:[H.aR(u,0)]}}}
H.fq.prototype={}
H.bo.prototype={
gj:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fr(u,u.r)
t.c=u.e
return t}}
H.fr.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bI(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.j_.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j0.prototype={
$1:function(a){return this.a(a)}}
H.fk.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bZ.prototype={}
H.cX.prototype={
gj:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.bY.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]},
l:function(a,b,c){H.ax(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.I]},
$ar:function(){return[P.I]},
$ij:1,
$aj:function(){return[P.I]}}
H.cY.prototype={
l:function(a,b,c){H.ax(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ar:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]}}
H.fU.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.fW.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.fY.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.cZ.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.cb.prototype={}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
P.io.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.im.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ip.prototype={
$0:function(){this.a.$0()}}
P.iq.prototype={
$0:function(){this.a.$0()}}
P.e7.prototype={
eb:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bA(new P.iK(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
ec:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bA(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idh:1}
P.iK.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iJ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.e2(u,q)}s.c=r
t.d.$1(s)}}
P.bw.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.ch.prototype={
gJ:function(a){var u=this.c
if(u==null)return this.b
return u.gJ(u)},
v:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.v())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bw){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.c(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bf(u)
if(!!r.$ich){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iI.prototype={
gP:function(a){return new P.ch(this.a())}}
P.dv.prototype={}
P.dd.prototype={}
P.hz.prototype={}
P.dh.prototype={}
P.iM.prototype={}
P.iR.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d0():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u}}
P.iC.prototype={
hy:function(a){var u,t,s,r=null
try{if(C.e===$.ai){a.$0()
return}P.mc(r,r,this,a)}catch(s){u=H.ep(s)
t=H.jC(s)
P.kk(r,r,this,u,t)}},
hz:function(a,b){var u,t,s,r=null
try{if(C.e===$.ai){a.$1(b)
return}P.md(r,r,this,a,b)}catch(s){u=H.ep(s)
t=H.jC(s)
P.kk(r,r,this,u,t)}},
hA:function(a,b){return this.hz(a,b,null)},
fW:function(a){return new P.iD(this,a)},
d1:function(a,b){return new P.iE(this,a,b)}}
P.iD.prototype={
$0:function(){return this.a.hy(this.b)}}
P.iE.prototype={
$1:function(a){return this.a.hA(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iz.prototype={
gP:function(a){var u=new P.dK(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ek(b)
return t}},
ek:function(a){var u=this.d
if(u==null)return!1
return this.br(this.cI(u,a),a)>=0},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cD(u==null?s.b=P.jv():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cD(t==null?s.c=P.jv():t,b)}else return s.ee(0,b)},
ee:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jv()
u=s.cE(b)
t=r[u]
if(t==null)r[u]=[s.bo(b)]
else{if(s.br(t,b)>=0)return!1
t.push(s.bo(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fv(this.c,b)
else return this.fu(0,b)},
fu:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cI(r,b)
t=s.br(u,b)
if(t<0)return!1
s.cV(u.splice(t,1)[0])
return!0},
cD:function(a,b){if(a[b]!=null)return!1
a[b]=this.bo(b)
return!0},
fv:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cV(u)
delete a[b]
return!0},
cK:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.iA(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cK()
return s},
cV:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cK()},
cE:function(a){return J.bE(a)&1073741823},
cI:function(a,b){return a[this.cE(b)]},
br:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.x(a[t].a,b))return t
return-1}}
P.iA.prototype={}
P.dK.prototype={
gJ:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bI(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fh.prototype={}
P.fs.prototype={$iq:1,$ij:1}
P.r.prototype={
gP:function(a){return new H.bQ(a,this.gj(a))},
H:function(a,b){return this.h(a,b)},
hE:function(a,b){var u,t,s=this,r=H.b([],[H.mw(s,a,"r",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t;++u}return r},
hD:function(a){return this.hE(a,!0)},
i:function(a){return P.ji(a,"[","]")}}
P.fv.prototype={}
P.fw.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:9}
P.a0.prototype={
L:function(a,b){var u,t
for(u=J.bf(this.gaz(a));u.v();){t=u.gJ(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bg(this.gaz(a))},
i:function(a){return P.jT(a)}}
P.iF.prototype={
i:function(a){return P.ji(this,"{","}")},
H:function(a,b){var u,t,s
P.k1(b,"index")
for(u=P.lI(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.dL.prototype={}
P.eG.prototype={}
P.eL.prototype={}
P.f_.prototype={}
P.i5.prototype={}
P.i6.prototype={
h_:function(a){var u,t,s,r=P.jp(0,null,a.length)
if(typeof r!=="number")return r.I()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iL(t)
if(s.er(a,0,r)!==r)s.cW(C.d.bS(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lM(0,s.b,t.length)))}}
P.iL.prototype={
cW:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.c(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.c(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|a&63
return!1}},
er:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bS(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.bn(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cW(r,C.d.bn(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.c(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.c(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=128|r&63}}return s}}
P.be.prototype={}
P.aa.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aa&&this.a===b.a&&!0},
aM:function(a,b){return C.c.aM(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.c.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.l0(H.lm(u)),s=P.cC(H.lk(u)),r=P.cC(H.lg(u)),q=P.cC(H.lh(u)),p=P.cC(H.lj(u)),o=P.cC(H.ll(u)),n=P.l1(H.li(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.aY.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
aM:function(a,b){return C.c.aM(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eY(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.c.a1(q,6e7)%60)
t=r.$1(C.c.a1(q,1e6)%60)
s=new P.eX().$1(q%1e6)
return""+C.c.a1(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bk.prototype={}
P.d0.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbq()+o+u
if(!q.a)return t
s=q.gbp()
r=P.jh(q.b)
return t+s+": "+r}}
P.br.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fg.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t=this.b
if(typeof t!=="number")return t.aa()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.i3.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i0.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hv.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jh(u)+"."}}
P.h3.prototype={
i:function(a){return"Out of Memory"},
$ibk:1}
P.db.prototype={
i:function(a){return"Stack Overflow"},
$ibk:1}
P.eR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dD.prototype={
i:function(a){return"Exception: "+this.a}}
P.fa.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cr(s,0,75)+"...":s
return t+"\n"+r}}
P.w.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gP(this)
for(u=0;t.v();)++u
return u},
H:function(a,b){var u,t,s
P.k1(b,"index")
for(u=this.gP(this),t=0;u.v();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
i:function(a){return P.l3(this,"(",")")}}
P.fi.prototype={}
P.b5.prototype={$iq:1,$ij:1}
P.bR.prototype={}
P.b6.prototype={
gK:function(a){return P.a1.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
p:function(a,b){return this===b},
gK:function(a){return H.c0(this)},
i:function(a){return"Instance of '"+H.f(H.c1(this))+"'"},
toString:function(){return this.i(this)}}
P.u.prototype={}
P.ar.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.eq.prototype={
gj:function(a){return a.length}}
W.es.prototype={
i:function(a){return String(a)}}
W.et.prototype={
i:function(a){return String(a)}}
W.cw.prototype={}
W.bi.prototype={
cl:function(a,b,c){if(c!=null)return a.getContext(b,P.mm(c))
return a.getContext(b)},
dS:function(a,b){return this.cl(a,b,null)},
$ibi:1}
W.aX.prototype={
gj:function(a){return a.length}}
W.eN.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bJ.prototype={
gj:function(a){return a.length}}
W.eO.prototype={}
W.a9.prototype={}
W.am.prototype={}
W.eP.prototype={
gj:function(a){return a.length}}
W.eQ.prototype={
gj:function(a){return a.length}}
W.eS.prototype={
gj:function(a){return a.length}}
W.eU.prototype={
i:function(a){return String(a)}}
W.cE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a4,P.a6]]},
$iA:1,
$aA:function(){return[[P.a4,P.a6]]},
$ar:function(){return[[P.a4,P.a6]]},
$ij:1,
$aj:function(){return[[P.a4,P.a6]]}}
W.cF.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gak(a))+" x "+H.f(this.gag(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.W(b)
return!!u.$ia4&&a.left===u.gbf(b)&&a.top===u.gbi(b)&&this.gak(a)===u.gak(b)&&this.gag(a)===u.gag(b)},
gK:function(a){return W.ki(C.b.gK(a.left),C.b.gK(a.top),C.b.gK(this.gak(a)),C.b.gK(this.gag(a)))},
gd3:function(a){return a.bottom},
gag:function(a){return a.height},
gbf:function(a){return a.left},
gbh:function(a){return a.right},
gbi:function(a){return a.top},
gak:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.a6]}}
W.eV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.u]},
$iA:1,
$aA:function(){return[P.u]},
$ar:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
W.eW.prototype={
gj:function(a){return a.length}}
W.is.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
k:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.hD(this)
return new J.X(u,u.length)},
$aq:function(){return[W.S]},
$ar:function(){return[W.S]},
$aj:function(){return[W.S]}}
W.S.prototype={
gd4:function(a){return new W.is(a,a.children)},
gd5:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aa()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aa()
if(r<0)r=-r*0
return new P.a4(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$iS:1}
W.i.prototype={$ii:1}
W.e.prototype={
fP:function(a,b,c,d){if(c!=null)this.ef(a,b,c,!1)},
ef:function(a,b,c,d){return a.addEventListener(b,H.bA(c,1),!1)}}
W.aB.prototype={$iaB:1}
W.f4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iA:1,
$aA:function(){return[W.aB]},
$ar:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.f5.prototype={
gj:function(a){return a.length}}
W.f9.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fe.prototype={
gj:function(a){return a.length}}
W.bM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iA:1,
$aA:function(){return[W.E]},
$ar:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]}}
W.b_.prototype={$ib_:1,
gd7:function(a){return a.data}}
W.bN.prototype={$ibN:1}
W.bn.prototype={$ibn:1}
W.ft.prototype={
i:function(a){return String(a)}}
W.fN.prototype={
gj:function(a){return a.length}}
W.fO.prototype={
h:function(a,b){return P.aQ(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gaz:function(a){var u=H.b([],[P.u])
this.L(a,new W.fP(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.u,null]}}
W.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fQ.prototype={
h:function(a,b){return P.aQ(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gaz:function(a){var u=H.b([],[P.u])
this.L(a,new W.fR(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.u,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iA:1,
$aA:function(){return[W.aE]},
$ar:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.ap.prototype={$iap:1}
W.ir.prototype={
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cJ(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aq:function(){return[W.E]},
$ar:function(){return[W.E]},
$aj:function(){return[W.E]}}
W.E.prototype={
hw:function(a,b){var u,t
try{u=a.parentNode
J.kQ(u,b,a)}catch(t){H.ep(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e0(a):u},
fz:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iA:1,
$aA:function(){return[W.E]},
$ar:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]}}
W.aH.prototype={$iaH:1,
gj:function(a){return a.length}}
W.h5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aH]},
$iA:1,
$aA:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]}}
W.hd.prototype={
h:function(a,b){return P.aQ(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gaz:function(a){var u=H.b([],[P.u])
this.L(a,new W.he(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.u,null]}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hg.prototype={
gj:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aK]},
$iA:1,
$aA:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aL]},
$iA:1,
$aA:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gj:function(a){return a.length}}
W.hx.prototype={
h:function(a,b){return a.getItem(b)},
L:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaz:function(a){var u=H.b([],[P.u])
this.L(a,new W.hy(u))
return u},
gj:function(a){return a.length},
$aa0:function(){return[P.u,P.u]}}
W.hy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.aN.prototype={$iaN:1}
W.at.prototype={$iat:1}
W.hD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.at]},
$iA:1,
$aA:function(){return[W.at]},
$ar:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.hE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aN]},
$iA:1,
$aA:function(){return[W.aN]},
$ar:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]}}
W.hM.prototype={
gj:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.bt.prototype={$ibt:1}
W.hP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aO]},
$iA:1,
$aA:function(){return[W.aO]},
$ar:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]}}
W.hQ.prototype={
gj:function(a){return a.length}}
W.ba.prototype={}
W.i4.prototype={
i:function(a){return String(a)}}
W.ij.prototype={
gj:function(a){return a.length}}
W.bc.prototype={
gh3:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
gh2:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibc:1}
W.ca.prototype={
fA:function(a,b){return a.requestAnimationFrame(H.bA(b,1))},
eq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.it.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.G]},
$iA:1,
$aA:function(){return[W.G]},
$ar:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]}}
W.dy.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.W(b)
return!!u.$ia4&&a.left===u.gbf(b)&&a.top===u.gbi(b)&&a.width===u.gak(b)&&a.height===u.gag(b)},
gK:function(a){return W.ki(C.b.gK(a.left),C.b.gK(a.top),C.b.gK(a.width),C.b.gK(a.height))},
gag:function(a){return a.height},
gak:function(a){return a.width}}
W.iw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iA:1,
$aA:function(){return[W.aC]},
$ar:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.dQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iA:1,
$aA:function(){return[W.E]},
$ar:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]}}
W.iG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aM]},
$iA:1,
$aA:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]}}
W.iH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.as]},
$iA:1,
$aA:function(){return[W.as]},
$ar:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]}}
W.iu.prototype={}
W.iv.prototype={
$1:function(a){return this.a.$1(a)}}
W.J.prototype={
gP:function(a){return new W.cJ(a,this.gj(a))}}
W.cJ.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cs(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.cf.prototype={}
W.cg.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e2.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
P.ec.prototype={$ib_:1,
gd7:function(a){return this.a}}
P.iS.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.f6.prototype={
gb6:function(){var u=this.b,t=H.jB(u,"r",0)
return new H.bS(new H.ik(u,new P.f7(),[t]),new P.f8(),[t,W.S])},
l:function(a,b,c){var u=this.gb6()
J.kT(u.b.$1(J.j9(u.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bg(this.gb6().a)},
h:function(a,b){var u=this.gb6()
return u.b.$1(J.j9(u.a,b))},
gP:function(a){var u=P.jn(this.gb6(),!1,W.S)
return new J.X(u,u.length)},
$aq:function(){return[W.S]},
$ar:function(){return[W.S]},
$aj:function(){return[W.S]}}
P.f7.prototype={
$1:function(a){return!!J.W(a).$iS}}
P.f8.prototype={
$1:function(a){return H.h(a,"$iS")}}
P.iB.prototype={
gbh:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.t(t)
return u+t},
gd3:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.W(b)
if(!!u.$ia4){t=q.a
if(t==u.gbf(b)){s=q.b
if(s==u.gbi(b)){r=q.c
if(typeof t!=="number")return t.E()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gbh(b)){t=q.d
if(typeof s!=="number")return s.E()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gd3(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u=this,t=u.a,s=J.bE(t),r=u.b,q=J.bE(r),p=u.c
if(typeof t!=="number")return t.E()
if(typeof p!=="number")return H.t(p)
p=C.c.gK(t+p)
t=u.d
if(typeof r!=="number")return r.E()
if(typeof t!=="number")return H.t(t)
t=C.c.gK(r+t)
return P.lH(P.iy(P.iy(P.iy(P.iy(0,s),q),p),t))}}
P.a4.prototype={
gbf:function(a){return this.a},
gbi:function(a){return this.b},
gak:function(a){return this.c},
gag:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.fo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b4]},
$ar:function(){return[P.b4]},
$ij:1,
$aj:function(){return[P.b4]}}
P.b7.prototype={$ib7:1}
P.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b7]},
$ar:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]}}
P.h7.prototype={
gj:function(a){return a.length}}
P.hA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.u]},
$ar:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]}}
P.k.prototype={
gd4:function(a){return new P.f6(a,new W.ir(a))}}
P.b9.prototype={$ib9:1}
P.hR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b9]},
$ar:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]}}
P.dI.prototype={}
P.dJ.prototype={}
P.dT.prototype={}
P.dU.prototype={}
P.e3.prototype={}
P.e4.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.ev.prototype={
gj:function(a){return a.length}}
P.ew.prototype={
h:function(a,b){return P.aQ(a.get(b))},
L:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
gaz:function(a){var u=H.b([],[P.u])
this.L(a,new P.ex(u))
return u},
gj:function(a){return a.size},
$aa0:function(){return[P.u,null]}}
P.ex.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ey.prototype={
gj:function(a){return a.length}}
P.bh.prototype={}
P.h2.prototype={
gj:function(a){return a.length}}
P.dw.prototype={}
P.d6.prototype={
dO:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.W(g)
if(!!u.$ib_&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.mn(g))
return}if(!!u.$ibN&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.kU("Incorrect number or type of arguments"))},
hB:function(a,b,c,d,e,f,g){return this.dO(a,b,c,d,e,f,g,null,null,null)}}
P.hu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aQ(a.item(b))},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.bR,,,]]},
$ar:function(){return[[P.bR,,,]]},
$ij:1,
$aj:function(){return[[P.bR,,,]]}}
P.e_.prototype={}
P.e0.prototype={}
K.er.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"}}
K.cM.prototype={
aN:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aN(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cV.prototype={}
K.aG.prototype={
aN:function(a,b){return!this.e_(0,b)},
i:function(a){return"!["+this.cs(0)+"]"}}
K.hh.prototype={
e5:function(a){var u,t,s,r
if(a.a.length<=0)throw H.d(P.o("May not create a Set with zero characters."))
u=P.w
t=new H.H([u,P.be])
for(s=new H.bQ(a,a.gj(a));s.v();)t.l(0,s.d,!0)
r=P.jn(new H.bo(t,[u]),!0,u)
C.a.dZ(r)
this.a=r},
aN:function(a,b){return C.a.X(this.a,b)},
i:function(a){return P.jq(this.a)}}
L.dc.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dl(this.a.N(0,b))
r.a=H.b([],[K.cV])
r.c=!1
this.c.push(r)
return r},
h6:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aN(0,a))return r}return},
i:function(a){return this.b},
cU:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.X(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bo(n,[H.aR(n,0)]),n=n.gP(n);n.v();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.X(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.di.prototype={
i:function(a){var u=H.kx(this.b,"\n","\\n"),t=H.kx(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dj.prototype={
i:function(a){return this.b}}
L.hN.prototype={
N:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dc(this,b)
u.c=H.b([],[L.dl])
this.a.l(0,b,u)}return u},
b2:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dj(a)
u=P.u
t.c=new H.H([u,u])
this.b.l(0,a,t)}return t},
dQ:function(a){return this.hF(a)},
hF:function(a){var u=this
return P.lQ(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dQ(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.ce(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.h6(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jq(d)
throw H.d(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.jp(0,m,d.length)
d.splice(0,m-0)
C.a.b9(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.X(0,p.a)?7:8
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
if(g.d!=null){j=P.jq(e)
i=g.d
h=i.c.h(0,j)
p=new L.di(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.X(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lF()
case 1:return P.lG(q)}}},L.di)},
i:function(a){var u,t=new P.ar(""),s=this.d
if(s!=null)t.a=s.cU()+"\n"
for(s=this.a,s=s.ghG(s),s=new H.cU(J.bf(s.a),s.b);s.v();){u=s.a
if(u!=this.d)t.a+=u.cU()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dl.prototype={
i:function(a){return this.b.b+": "+this.cs(0)}}
O.al.prototype={
b4:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cm:function(a,b,c){this.b=b
this.c=a},
aC:function(a,b){return this.cm(a,null,b)},
bC:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cL:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.X(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jB(s,"al",0)]
if(s.bC(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cL(t,H.b([b],r))}},
b9:function(a,b){var u,t
if(this.bC(b)){u=this.a
t=u.length
C.a.b9(u,b)
this.cL(t,b)}},
$ij:1}
O.bV.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.C():u},
aF:function(){var u=this.b
if(u!=null)u.w(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gc6(u)
else return V.aD()},
bg:function(a){var u=this.a
if(a==null)u.push(V.aD())
else u.push(a)
this.aF()},
b1:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}}}
E.eC.prototype={}
E.aA.prototype={
cC:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.X(u,u.length);u.v();){t=u.d
if(t.f==null)t.cC()}},
saD:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().C(0,s.gdG())
u=s.c
if(u!=null)u.gm().k(0,s.gdG())
t=new D.m("shape",r,s.c)
t.b=!0
s.an(t)}},
sae:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().C(0,s.gdI())
u=s.f
s.f=a
if(a!=null)a.gm().k(0,s.gdI())
s.cC()
t=new D.m("technique",u,s.f)
t.b=!0
s.an(t)}},
sas:function(a){var u,t,s=this
if(!J.x(s.r,a)){u=s.r
if(u!=null)u.gm().C(0,s.gdE())
if(a!=null)a.gm().k(0,s.gdE())
s.r=a
t=new D.m("mover",u,a)
t.b=!0
s.an(t)}},
a5:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ao(0,b,s):null
if(!J.x(q,s.x)){u=s.x
s.x=q
t=new D.m("matrix",u,q)
t.b=!0
s.an(t)}r=s.f
if(r!=null)r.a5(0,b)
for(r=s.y.a,r=new J.X(r,r.length);r.v();)r.d.a5(0,b)},
a_:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga4(s))
else s.a.push(r.n(0,s.ga4(s)))
s.aF()
a.cd(t.f)
s=a.dy
u=(s&&C.a).gc6(s)
if(u!=null&&t.d!=null)u.ci(a,t)
for(s=t.y.a,s=new J.X(s,s.length);s.v();)s.d.a_(a)
a.cc()
a.dx.b1()},
an:function(a){var u=this.z
if(u!=null)u.w(a)},
Y:function(){return this.an(null)},
dH:function(a){this.e=null
this.an(a)},
hj:function(){return this.dH(null)},
dJ:function(a){this.an(a)},
hk:function(){return this.dJ(null)},
dF:function(a){this.an(a)},
hi:function(){return this.dF(null)},
dD:function(a){this.an(a)},
hf:function(){return this.dD(null)},
he:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdC(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.an()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Y()},
hh:function(a,b){var u,t
for(u=b.gP(b),t=this.gdC();u.v();)u.gJ(u).gm().C(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h9.prototype={
e4:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aa(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bV()
t=[V.ae]
u.a=H.b([],t)
u.gm().k(0,new E.ha(s))
s.cy=u
u=new O.bV()
u.a=H.b([],t)
u.gm().k(0,new E.hb(s))
s.db=u
u=new O.bV()
u.a=H.b([],t)
u.gm().k(0,new E.hc(s))
s.dx=u
u=H.b([],[O.de])
s.dy=u
u.push(null)
s.fr=new H.H([P.u,A.d8])},
ght:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.n(0,u.ga4(u))
s=u}return s},
gdL:function(){var u,t=this,s=t.ch
if(s==null){s=t.ght()
u=t.dx
u=t.ch=s.n(0,u.ga4(u))
s=u}return s},
cd:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc6(u):a)},
cc:function(){var u=this.dy
if(u.length>1)u.pop()},
bK:function(a){var u=a.b
if(u.length===0)throw H.d(P.o("May not cache a shader with no name."))
if(this.fr.fZ(0,u))throw H.d(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.ha.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hb.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hc.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dg.prototype={
cz:function(a){this.dM()},
cw:function(){return this.cz(null)},
gh8:function(){var u,t=this,s=Date.now(),r=C.c.a1(P.jM(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aa(s,!1)
return u/r},
cP:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.t(r)
u=C.b.c4(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.b.c4(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k6(C.i,s.ghx())}},
dM:function(){if(!this.cx){this.cx=!0
var u=window
C.u.eq(u)
C.u.fA(u,W.kl(new E.hL(this),P.a6))}},
hv:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cP()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aa(r,!1)
s.y=P.jM(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aF()
r=s.db
C.a.sj(r.a,0)
r.aF()
r=s.dx
C.a.sj(r.a,0)
r.aF()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a_(p.e)}}catch(q){u=H.ep(q)
t=H.jC(q)
P.jF("Error: "+H.f(u))
P.jF("Stack: "+H.f(t))
throw H.d(u)}}}
E.hL.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hv()}}}
Z.du.prototype={}
Z.cx.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ep(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.c9.prototype={}
Z.aW.prototype={
am:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aB:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a_:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.u],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a8(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(p,", ")+"\nAttrs:   "+C.a.t(r,", ")}}
Z.bl.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.c1(this.c))+"'")+"]"}}
Z.aw.prototype={
gco:function(a){var u=this.a,t=(u&$.a7().a)!==0?3:0
if((u&$.aU().a)!==0)t+=3
if((u&$.aT().a)!==0)t+=3
if((u&$.az().a)!==0)t+=2
if((u&$.aV().a)!==0)t+=3
if((u&$.cq().a)!==0)t+=3
if((u&$.cr().a)!==0)t+=4
if((u&$.bD().a)!==0)++t
return(u&$.aS().a)!==0?t+4:t},
fS:function(a){var u,t=$.a7(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.az()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aS()
if((s&t.a)!==0)if(u===a)return t
return $.kO()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aw))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.u]),t=this.a
if((t&$.a7().a)!==0)u.push("Pos")
if((t&$.aU().a)!==0)u.push("Norm")
if((t&$.aT().a)!==0)u.push("Binm")
if((t&$.az().a)!==0)u.push("Txt2D")
if((t&$.aV().a)!==0)u.push("TxtCube")
if((t&$.cq().a)!==0)u.push("Clr3")
if((t&$.cr().a)!==0)u.push("Clr4")
if((t&$.bD().a)!==0)u.push("Weight")
if((t&$.aS().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.eF.prototype={}
D.an.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.O]}]):u).push(b)},
C:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.X(s,b)
if(s===!0){s=t.a
u=(s&&C.a).C(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.X(s,b)
if(s===!0){s=t.b
u=(s&&C.a).C(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.L(P.jn(u,!0,{func:1,ret:-1,args:[D.O]}),new D.f1(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.O]}])
C.a.L(u,new D.f2(q))}return!0},
bW:function(){return this.w(null)},
aj:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.f1.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f2.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.O.prototype={}
D.b0.prototype={}
D.b1.prototype={}
D.m.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cy.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cy))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cR.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.fn.prototype={
hp:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
hl:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}}
X.cT.prototype={}
X.fu.prototype={
aR:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.Q(o.a+n*m,o.b+u*t)
t=q.a.gaL()
r=new X.aF(a,V.aI(),q.x,t,s)
r.b=!0
q.z=new P.aa(p,!1)
q.x=s
return r},
cb:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dU()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aR(a,b))
return!0},
hq:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaL()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.bX(new V.D(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
f2:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cT(c,r.a.gaL(),b)
s.b=!0
t.w(s)
r.y=new P.aa(u,!1)
r.x=V.aI()}}
X.ab.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ab))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aF.prototype={}
X.fT.prototype={
bs:function(a,b,c){var u=this,t=new P.aa(Date.now(),!1),s=u.a.gaL(),r=new X.aF(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cb:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bs(a,b,!0))
return!0},
b0:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dU()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bs(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bs(a,b,!1))
return!0},
hr:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaL()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.bX(new V.D(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gd9:function(){var u=this.b
return u==null?this.b=D.C():u},
gbj:function(){var u=this.c
return u==null?this.c=D.C():u},
gdA:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.bX.prototype={}
X.h6.prototype={}
X.dk.prototype={}
X.hO.prototype={
aR:function(a,b){var u=this,t=new P.aa(Date.now(),!1),s=a.length>0?a[0]:V.aI(),r=u.a.gaL(),q=new X.dk(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ho:function(a){var u=this.b
if(u==null)return!1
u.w(this.aR(a,!0))
return!0},
hm:function(a){var u=this.c
if(u==null)return!1
u.w(this.aR(a,!0))
return!0},
hn:function(a){var u=this.d
if(u==null)return!1
u.w(this.aR(a,!1))
return!0}}
X.dp.prototype={
gaL:function(){var u=this.a,t=C.f.gd5(u).c
t.toString
u=C.f.gd5(u).d
u.toString
return V.h8(0,0,t,u)},
cG:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.ab(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
bH:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.I()
u=t.top
if(typeof r!=="number")return r.I()
return new V.Q(s-q,r-u)},
aS:function(a){return new V.D(a.movementX,a.movementY)},
bD:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Q])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.b.U(r.pageX)
C.b.U(r.pageY)
p=o.left
C.b.U(r.pageX)
n.push(new V.Q(q-p,C.b.U(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cy(u,new X.ab(t,a.altKey,a.shiftKey))},
bt:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.I()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.I()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eX:function(a){this.f=!0},
eH:function(a){this.f=!1},
eN:function(a){if(this.f&&this.bt(a))a.preventDefault()},
f0:function(a){var u
if(!this.f)return
u=this.cG(a)
this.b.hp(u)},
eZ:function(a){var u
if(!this.f)return
u=this.cG(a)
this.b.hl(u)},
f4:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aK(a)
if(r.x){u=r.au(a)
t=r.aS(a)
if(r.d.cb(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.au(a)
s=r.aw(a)
if(r.c.cb(u,s))a.preventDefault()},
f8:function(a){var u,t,s,r=this
r.aK(a)
u=r.au(a)
if(r.x){t=r.aS(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b0(u,s))a.preventDefault()},
eR:function(a){var u,t,s,r=this
if(!r.bt(a)){r.aK(a)
u=r.au(a)
if(r.x){t=r.aS(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b0(u,s))a.preventDefault()}},
f6:function(a){var u,t,s,r=this
r.aK(a)
u=r.au(a)
if(r.x){t=r.aS(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b_(u,s))a.preventDefault()},
eP:function(a){var u,t,s,r=this
if(!r.bt(a)){r.aK(a)
u=r.au(a)
if(r.x){t=r.aS(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b_(u,s))a.preventDefault()}},
fa:function(a){var u,t,s=this
s.aK(a)
u=new V.D((a&&C.t).gh2(a),C.t.gh3(a)).q(0,180)
if(s.x){if(s.d.hq(u))a.preventDefault()
return}if(s.r)return
t=s.aw(a)
if(s.c.hr(u,t))a.preventDefault()},
fc:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.aw(s.y)
s.d.f2(u,t,r)}},
ft:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bH(a)
u=t.bD(a)
if(t.e.ho(u))a.preventDefault()},
fo:function(a){var u
this.bH(a)
u=this.bD(a)
if(this.e.hm(u))a.preventDefault()},
fq:function(a){var u
this.bH(a)
u=this.bD(a)
if(this.e.hn(u))a.preventDefault()}}
D.eB.prototype={$ia_:1}
D.eT.prototype={$ia_:1}
D.a_.prototype={}
D.cS.prototype={
a7:function(a){var u=this.y
if(u!=null)u.w(a)},
cN:function(a){var u=this.z
if(u!=null)u.w(a)},
f1:function(){return this.cN(null)},
fe:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.el(s))return!1}return!0},
eB:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcM(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bp)this.r.push(q)
p=q.Q
if(p==null){p=new D.an()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b0()
u.b=!0
this.a7(u)},
fi:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcM();u.v();){s=u.gJ(u)
C.a.C(this.e,s)
s.gm().C(0,t)}u=new D.b1()
u.b=!0
this.a7(u)},
el:function(a){var u=C.a.X(this.r,a)
return u},
$aj:function(){return[D.a_]},
$aal:function(){return[D.a_]}}
D.bp.prototype={
a7:function(a){var u=this.Q
if(u!=null)u.w(a)},
e8:function(){return this.a7(null)},
ga9:function(){var u=this.d!=null?1:0
return u+4},
$ia_:1}
D.ht.prototype={$ia_:1}
V.P.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.Y.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.f0.prototype={}
V.bU.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bU))return!1
u=b.a
t=$.v().a
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
i:function(a){var u,t,s,r,q=this,p=[P.I],o=V.bC(H.b([q.a,q.d,q.r],p),3,0),n=V.bC(H.b([q.b,q.e,q.x],p),3,0),m=V.bC(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.c(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.c(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.c(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.c(o,1)
r=" "+o[1]+", "
if(1>=t)return H.c(n,1)
r=r+n[1]+", "
if(1>=s)return H.c(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.c(o,2)
p=" "+o[2]+", "
if(2>=t)return H.c(n,2)
p=p+n[2]+", "
if(2>=s)return H.c(m,2)
return r+(p+m[2]+"]")}}
V.ae.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
du:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.v().a)return V.aD()
u=1/b1
t=-n
s=-a0
return V.af((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.af(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b3:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.v().a
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
i:function(a){return this.M()},
D:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.bC(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bC(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bC(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bC(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.c(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.c(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.c(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.c(n,1)
q=q+n[1]+", "
if(1>=t)return H.c(m,1)
q=q+m[1]+", "
if(1>=s)return H.c(l,1)
q=q+l[1]+", "
if(1>=r)return H.c(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.c(n,2)
u=u+n[2]+", "
if(2>=t)return H.c(m,2)
u=u+m[2]+", "
if(2>=s)return H.c(l,2)
u=u+l[2]+", "
if(2>=r)return H.c(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.c(n,3)
q=q+n[3]+", "
if(3>=t)return H.c(m,3)
q=q+m[3]+", "
if(3>=s)return H.c(l,3)
q=q+l[3]+", "
if(3>=r)return H.c(k,3)
return u+(q+k[3]+"]")},
M:function(){return this.D("")}}
V.Q.prototype={
I:function(a,b){return new V.Q(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.L.prototype={
I:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.ac.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.d4.prototype={
gad:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d4))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.D.prototype={
aX:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
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
return new V.D(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.v().a){u=$.kc
return u==null?$.kc=new V.D(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.D(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=this.a
s=$.v()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.z.prototype={
aX:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c7:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.z(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aU:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.z(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.z(-this.a,-this.b,-this.c)},
q:function(a,b){if(Math.abs(b-0)<$.v().a)return V.c8()
return new V.z(this.a/b,this.b/b,this.c/b)},
dv:function(){var u=$.v().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.bv.prototype={
aX:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bv))return!1
u=b.a
t=$.v().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
U.eJ.prototype={
bm:function(a){var u=V.j8(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.C():u},
F:function(a){var u=this.y
if(u!=null)u.w(a)},
sck:function(a,b){},
sc8:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.v().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bm(u)}s=new D.m("maximumLocation",s,t.b)
s.b=!0
t.F(s)}},
sca:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.v().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bm(u)}s=new D.m("minimumLocation",s,t.c)
s.b=!0
t.F(s)}},
sZ:function(a,b){var u,t=this
b=t.bm(b)
u=t.d
if(!(Math.abs(u-b)<$.v().a)){t.d=b
u=new D.m("location",u,b)
u.b=!0
t.F(u)}},
sc9:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.v().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.m("maximumVelocity",r,a)
r.b=!0
s.F(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.v().a)){u.f=a
t=new D.m("velocity",t,a)
t.b=!0
u.F(t)}},
sbU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.v().a)){this.x=a
u=new D.m("dampening",u,a)
u.b=!0
this.F(u)}},
a5:function(a,b){var u,t,s,r=this,q=r.f,p=$.v().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.v().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.cA.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.C():u},
ao:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cA))return!1
return J.x(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bL.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.C():u},
F:function(a){var u=this.e
if(u!=null)u.w(a)},
a8:function(){return this.F(null)},
ea:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaJ(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.F(u)},
fg:function(a,b){var u,t
for(u=b.gP(b),t=this.gaJ();u.v();)u.gJ(u).gm().C(0,t)
u=new D.b1()
u.b=!0
this.F(u)},
ao:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aa()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.X(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.ao(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.aD():u
r=s.e
if(r!=null)r.aj(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bL))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.x(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a3]},
$aal:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.d7.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.C():u},
F:function(a){var u=this.y
if(u!=null)u.w(a)},
sdR:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.v().a)){this.a=a
u=new D.m("yaw",u,a)
u.b=!0
this.F(u)}},
sdK:function(a,b){var u
b=V.j8(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.v().a)){this.b=b
u=new D.m("pitch",u,b)
u.b=!0
this.F(u)}},
sdN:function(a){var u
a=V.j8(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.v().a)){this.c=a
u=new D.m("roll",u,a)
u.b=!0
this.F(u)}},
ao:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdR(u.a+u.d*b.y)
u.sdK(0,u.b+u.e*b.y)
u.sdN(u.c+u.f*b.y)
u.x=V.jW(u.c).n(0,V.jV(u.b)).n(0,V.jo(u.a))
t=u.y
if(t!=null)t.aj(0)}return u.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d7))return!1
u=r.a
t=b.a
s=$.v().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+"], ["+V.B(u.d,3,0)+", "+V.B(u.e,3,0)+", "+V.B(u.f,3,0)+"]"}}
U.dq.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.C():u},
F:function(a){var u=this.cy
if(u!=null)u.w(a)},
a8:function(){return this.F(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd9().k(0,u.gbu())
u.a.c.gdA().k(0,u.gbw())
u.a.c.gbj().k(0,u.gby())
return!0},
bv:function(a){var u=this
if(!J.x(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bx:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaF")
if(!n.y)return
if(n.x){u=a.d.I(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.I(0,a.y)
u=new V.D(t.a,t.b).n(0,2).q(0,u.gad())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.D(s.a,s.b).n(0,2).q(0,u.gad())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
n.b.sS(0)
t=t.I(0,a.z)
n.Q=new V.D(t.a,t.b).n(0,2).q(0,u.gad())}n.a8()},
bz:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sS(t*10*s)
r.a8()}},
ao:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.aa()
if(s<r){t.ch=r
u=b.y
t.b.a5(0,u)
t.cx=V.jW(t.b.d)}return t.cx},
$ia3:1}
U.dr.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.C():u},
F:function(a){var u=this.fx
if(u!=null)u.w(a)},
a8:function(){return this.F(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd9().k(0,s.gbu())
s.a.c.gdA().k(0,s.gbw())
s.a.c.gbj().k(0,s.gby())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.k(0,s.geu())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.k(0,s.gew())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.k(0,s.gfN())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.k(0,s.gfL())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.k(0,s.gfJ())
return!0},
aq:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.D(u,t)},
bv:function(a){var u=this
H.h(a,"$iaF")
if(!J.x(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bx:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaF")
if(!n.cx)return
if(n.ch){u=a.d.I(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.I(0,a.y)
u=n.aq(new V.D(t.a,t.b).n(0,2).q(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.aq(new V.D(s.a,s.b).n(0,2).q(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.I(0,a.z)
n.dx=n.aq(new V.D(t.a,t.b).n(0,2).q(0,u.gad()))}n.a8()},
bz:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sS(-t*10*u)
r.a8()}},
ev:function(a){var u=this
if(H.h(a,"$icT").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ex:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaF")
if(!J.x(n.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=n.aq(new V.D(s.a,s.b).n(0,2).q(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.I(0,a.z)
n.dx=n.aq(new V.D(t.a,t.b).n(0,2).q(0,u.gad()))
n.a8()},
fO:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fM:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$idk")
if(!n.cx)return
if(n.ch){u=a.d.I(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.I(0,a.y)
u=n.aq(new V.D(t.a,t.b).n(0,2).q(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=n.aq(new V.D(s.a,s.b).n(0,2).q(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sZ(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.I(0,a.z)
n.dx=n.aq(new V.D(t.a,t.b).n(0,2).q(0,u.gad()))}n.a8()},
fK:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sS(-t*10*u)
r.a8()}},
ao:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.aa()
if(s<r){t.dy=r
u=b.y
t.c.a5(0,u)
t.b.a5(0,u)
t.fr=V.jo(t.b.d).n(0,V.jV(t.c.d))}return t.fr},
$ia3:1}
U.ds.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.C():u},
F:function(a){var u=this.r
if(u!=null)u.w(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.gey()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).k(0,t)
return!0},
ez:function(a){var u,t,s,r,q=this
if(!J.x(q.b,q.a.b.c))return
H.h(a,"$ibX")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.m("zoom",u,r)
u.b=!0
q.F(u)}},
ao:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.jX(u,u,u,1)}return t.f},
$ia3:1}
M.cz.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.C():u},
R:function(a){var u=this.r
if(u!=null)u.w(a)},
at:function(){return this.R(null)},
fk:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.R(u)},
fm:function(a,b){var u,t
for(u=b.gP(b),t=this.gT();u.v();)u.gJ(u).gm().C(0,t)
u=new D.b1()
u.b=!0
this.R(u)},
a_:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.X(u,u.length);u.v();){t=u.d
if(t!=null)t.a_(a)}s.f=!1},
$aj:function(){return[M.a5]},
$aal:function(){return[M.a5]},
$ia5:1}
M.cB.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.C():u},
R:function(a){var u=this.r
if(u!=null)u.w(a)},
at:function(){return this.R(null)},
saO:function(a,b){var u,t,s=this
if(b==null)b=X.jN(null)
u=s.c
if(u!==b){if(u!=null)u.gm().C(0,s.gT())
t=s.c
s.c=b
b.gm().k(0,s.gT())
u=new D.m("target",t,s.c)
u.b=!0
s.R(u)}},
sae:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().C(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gT())
s=new D.m("technique",u,t.d)
s.b=!0
t.R(s)}},
a_:function(a){var u,t,s=this
a.cd(s.d)
s.c.W(a)
u=s.b
u.toString
a.cy.bg(V.aD())
t=V.aD()
u.a
a.db.bg(t)
u=s.d
if(u!=null)u.a5(0,a)
s.e.a5(0,a)
s.e.a_(a)
s.b.toString
a.cy.b1()
a.db.b1()
s.c.aB(a)
a.cc()},
$ia5:1}
M.cH.prototype={
R:function(a){var u=this.y
if(u!=null)u.w(a)},
at:function(){return this.R(null)},
eJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.an()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.R(u)},
eL:function(a,b){var u,t
for(u=b.gP(b),t=this.gT();u.v();)u.gJ(u).gm().C(0,t)
u=new D.b1()
u.b=!0
this.R(u)},
saO:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().C(0,t.gT())
u=t.c
t.c=b
b.gm().k(0,t.gT())
s=new D.m("target",u,t.c)
s.b=!0
t.R(s)}},
sae:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().C(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gT())
s=new D.m("technique",u,t.d)
s.b=!0
t.R(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.C():u},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cd(c.d)
c.c.W(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.af(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bg(m)
t=$.jZ
if(t==null){t=V.le()
s=$.ke
if(s==null)s=$.ke=new V.z(0,1,0)
r=$.kd
if(r==null)r=$.kd=new V.z(0,0,-1)
l=r.q(0,Math.sqrt(r.B(r)))
s=s.aU(l)
k=s.q(0,Math.sqrt(s.B(s)))
j=l.aU(k)
i=new V.z(t.a,t.b,t.c)
h=k.O(0).B(i)
g=j.O(0).B(i)
f=l.O(0).B(i)
t=V.af(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.jZ=t
e=t}else e=t
t=u.b
if(t!=null){d=t.ao(0,a,u)
if(d!=null)e=d.n(0,e)}a.db.bg(e)
u=c.d
if(u!=null)u.a5(0,a)
for(u=c.e.a,u=new J.X(u,u.length);u.v();)u.d.a5(0,a)
for(u=c.e.a,u=new J.X(u,u.length);u.v();)u.d.a_(a)
c.b.toString
a.cy.b1()
a.db.b1()
c.c.aB(a)
a.cc()},
$ia5:1}
M.cK.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.C():u},
R:function(a){var u=this.b
if(u!=null)u.w(a)},
at:function(){return this.R(null)},
a_:function(a){var u=this.e
if(u!=null)u.a_(a)
u=this.r
if(u!=null)u.a_(a)},
$ia5:1}
M.a5.prototype={}
A.cu.prototype={}
A.eu.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gap:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fc.prototype={
cS:function(a,b){if(b!=null&&b.d)a.dW(b)}}
A.fd.prototype={
aG:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.c(c,0)
u=Math.abs(c[0]-0)<$.v().a
if(u){if(0>=d.length)return H.c(d,0)
t=d[0]
d=C.a.cp(d,1)
c=C.a.cp(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.f(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.c(c,r)
a.a+="  offset = blurScale * "+H.f(c[r])+";\n"
if(r>=d.length)return H.c(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.f(d[r])+";\n"
if(r>=d.length)return H.c(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.f(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.fx.prototype={
e3:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ar("")
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
A.m4(c0,u)
A.m6(c0,u)
A.m5(c0,u)
A.m8(c0,u)
A.m9(c0,u)
A.m7(c0,u)
A.ma(c0,u)
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
b5.c5(0,s.charCodeAt(0)==0?s:s,A.m3(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.G(0,"invViewMat"),"$iU")
if(t)b5.dy=H.h(b5.y.G(0,"objMat"),"$iU")
if(r)b5.fr=H.h(b5.y.G(0,"viewObjMat"),"$iU")
b5.fy=H.h(b5.y.G(0,"projViewObjMat"),"$iU")
if(c0.go)b5.fx=H.h(b5.y.G(0,"viewMat"),"$iU")
if(c0.x1)b5.k1=H.h(b5.y.G(0,"txt2DMat"),"$ibu")
if(c0.x2)b5.k2=H.h(b5.y.G(0,"txtCubeMat"),"$iU")
if(c0.y1)b5.k3=H.h(b5.y.G(0,"colorMat"),"$iU")
b5.r1=H.b([],[A.U])
t=c0.bb
if(t>0){b5.k4=b5.y.G(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.h(m,"$iU"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.G(0,"emissionClr"),"$iF")
if(t.c)b5.ry=H.h(b5.y.G(0,"emissionTxt"),"$iV")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.G(0,"ambientClr"),"$iF")
if(t.c)b5.y1=H.h(b5.y.G(0,"ambientTxt"),"$iV")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.G(0,"diffuseClr"),"$iF")
if(t.c)b5.ay=H.h(b5.y.G(0,"diffuseTxt"),"$iV")
t=c0.d
if(t.a)b5.bc=H.h(b5.y.G(0,"invDiffuseClr"),"$iF")
if(t.c)b5.de=H.h(b5.y.G(0,"invDiffuseTxt"),"$iV")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dh=H.h(b5.y.G(0,"shininess"),"$iM")
if(s)b5.df=H.h(b5.y.G(0,"specularClr"),"$iF")
if(t.c)b5.dg=H.h(b5.y.G(0,"specularTxt"),"$iV")}if(c0.f.c)b5.di=H.h(b5.y.G(0,"bumpTxt"),"$iV")
if(c0.db){b5.dj=H.h(b5.y.G(0,"envSampler"),"$iV")
t=c0.r
if(t.a)b5.dk=H.h(b5.y.G(0,"reflectClr"),"$iF")
if(t.c)b5.dl=H.h(b5.y.G(0,"reflectTxt"),"$iV")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dm=H.h(b5.y.G(0,"refraction"),"$iM")
if(s)b5.dn=H.h(b5.y.G(0,"refractClr"),"$iF")
if(t.c)b5.dq=H.h(b5.y.G(0,"refractTxt"),"$iV")}}t=c0.y
if(t.a)b5.dr=H.h(b5.y.G(0,"alpha"),"$iM")
if(t.c)b5.ds=H.h(b5.y.G(0,"alphaTxt"),"$iV")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.bX=new H.H([r,A.ag])
b5.bY=new H.H([r,[P.b5,A.c3]])
for(r=[A.c3],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="barLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iF")
if(typeof j!=="number")return j.al()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iM")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iM")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iM")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c3(m,g,f,a0,a,b))}b5.bY.l(0,j,h)
q=b5.bX
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.bZ=new H.H([r,A.ag])
b5.c_=new H.H([r,[P.b5,A.c4]])
for(r=[A.c4],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.al()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iF")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iF")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.h(f,"$iF")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.h(m,"$iF")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.h(g,"$iF")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iah")
a5=f}else a5=b6
h.push(new A.c4(a4,a3,a2,m,g,a5))}b5.c_.l(0,j,h)
q=b5.bZ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.c0=new H.H([r,A.ag])
b5.c1=new H.H([r,[P.b5,A.c5]])
for(r=[A.c5],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iF")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$ibu")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iV")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iV")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$ibb")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iM")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iM")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iM")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c5(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.c1.l(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.c2=new H.H([r,A.ag])
b5.c3=new H.H([r,[P.b5,A.c6]])
for(r=[A.c6],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.h(f,"$iF")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.h(e,"$iF")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iF")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.h(c,"$iF")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.h(a9,"$iM")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.h(b0,"$iM")
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
H.h(d,"$ibb")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iM")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iM")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iM")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.h(c,"$iM")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.h(a9,"$iM")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.h(d,"$iah")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.h(d,"$iah")
a7=d}else a7=b6
h.push(new A.c6(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.c3.l(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.l(0,j,m)}}}},
af:function(a,b){if(b!=null&&b.d>=6)a.dX(b)}}
A.cv.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.cD.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.d2.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.da.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.fB.prototype={
i:function(a){return this.ay}}
A.c3.prototype={}
A.c4.prototype={}
A.c5.prototype={}
A.c6.prototype={}
A.d8.prototype={
bk:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
c5:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cH(b,35633)
r.f=r.cH(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.f(s)))}r.fF()
r.fH()},
W:function(a){a.a.useProgram(this.r)
this.x.h4()},
cH:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.o("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fF:function(){var u,t,s,r=this,q=H.b([],[A.cu]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cu(p,t.name,s))}r.x=new A.eu(q)},
fH:function(){var u,t,s,r=this,q=H.b([],[A.dm]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.h1(t.type,t.size,t.name,s))}r.y=new A.hZ(q)},
aH:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.jt(u,this.r,b,a,c)},
en:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.jt(u,this.r,b,a,c)},
eo:function(a,b,c){var u=this.a
if(a===1)return new A.V(u,b,c)
else return A.jt(u,this.r,b,a,c)},
b8:function(a,b){return new P.dD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
h1:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aH(b,c,d)
case 5121:return u.aH(b,c,d)
case 5122:return u.aH(b,c,d)
case 5123:return u.aH(b,c,d)
case 5124:return u.aH(b,c,d)
case 5125:return u.aH(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.av(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.bb(u.a,c,d)
case 35667:return new A.hW(u.a,c,d)
case 35668:return new A.hX(u.a,c,d)
case 35669:return new A.hY(u.a,c,d)
case 35674:return new A.i_(u.a,c,d)
case 35675:return new A.bu(u.a,c,d)
case 35676:return new A.U(u.a,c,d)
case 35678:return u.en(b,c,d)
case 35680:return u.eo(b,c,d)
case 35670:throw H.d(u.b8("BOOL",c))
case 35671:throw H.d(u.b8("BOOL_VEC2",c))
case 35672:throw H.d(u.b8("BOOL_VEC3",c))
case 35673:throw H.d(u.b8("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.bj.prototype={
i:function(a){return this.b}}
A.hI.prototype={
e7:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.c5(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.ly(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.G(0,"txtCount"),"$iag")
p.ch=H.h(p.y.G(0,"backClr"),"$ibb")
p.cx=H.b([],[A.ah])
p.cy=H.b([],[A.U])
u=[A.av]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.ag])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iah"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iU"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iav"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iav"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iav"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iav"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.p(P.o(o+r+n))
u.push(H.h(q,"$iag"))}}}
A.dm.prototype={}
A.hZ.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
G:function(a,b){var u=this.h(0,b)
if(u==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ag.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.av.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.F.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bb.prototype={
dY:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
dV:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.bu.prototype={
ab:function(a){var u=new Float32Array(H.bx(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.U.prototype={
ab:function(a){var u=new Float32Array(H.bx(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.ah.prototype={
dW:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.V.prototype={
dX:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iN.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c7(s.b,b).c7(s.d.c7(s.c,b),c)
a.sZ(0,new V.L(r.a,r.b,r.c))
a.saA(r.q(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sd0(new V.ac(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.iT.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.iU.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sZ(0,new V.L(s,u,q))
u=new V.z(s,u,q)
a.saA(u.q(0,Math.sqrt(u.B(u))))
a.sd0(new V.ac(1-c,2+c,-1,-1))}}
F.iV.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.iW.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.j4.prototype={
$2:function(a,b){return 0}}
F.j5.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=this.b+s
s=a.f
t=new V.z(s.a,s.b,s.c)
s=t.q(0,Math.sqrt(t.B(t)))
a.sZ(0,new V.L(s.a*u,s.b*u,s.c*u))}}
F.aZ.prototype={
aV:function(){var u=this
if(!u.gaW()){C.a.C(u.a.a.d.b,u)
u.a.a.Y()}u.bE()
u.bF()
u.fw()},
bI:function(a){this.a=a
a.d.b.push(this)},
bJ:function(a){this.b=a
a.d.c.push(this)},
fE:function(a){this.c=a
a.d.d.push(this)},
bE:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
fw:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gaW:function(){return this.a==null||this.b==null||this.c==null},
eh:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c8()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.dv())return
return s.q(0,Math.sqrt(s.B(s)))},
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.I(0,q)
r=new V.z(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.B(r)))
r=t.I(0,q)
r=new V.z(r.a,r.b,r.c)
r=s.aU(r.q(0,Math.sqrt(r.B(r))))
return r.q(0,Math.sqrt(r.B(r)))},
bR:function(){var u,t=this
if(t.d!=null)return!0
u=t.eh()
if(u==null){u=t.ej()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
eg:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c8()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.dv())return
return s.q(0,Math.sqrt(s.B(s)))},
ei:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.v().a){l=d.I(0,g)
l=new V.z(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.I(0,g)
l=new V.L(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).I(0,j)
l=new V.z(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.B(l)))
l=o.aU(q)
l=l.q(0,Math.sqrt(l.B(l))).aU(o)
q=l.q(0,Math.sqrt(l.B(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.eg()
if(u==null){u=t.ei()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
gfY:function(a){var u=this
if(J.x(u.a,u.b))return!0
if(J.x(u.b,u.c))return!0
if(J.x(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this
if(s.gaW())return a+"disposed"
u=a+C.d.ai(J.a8(s.a.e),0)+", "+C.d.ai(J.a8(s.b.e),0)+", "+C.d.ai(J.a8(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.f3.prototype={}
F.hq.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bP.prototype={
aV:function(){var u=this
if(!u.gaW()){C.a.C(u.a.a.c.b,u)
u.a.a.Y()}u.bE()
u.bF()},
bI:function(a){this.a=a
a.c.b.push(this)},
bJ:function(a){this.b=a
a.c.c.push(this)},
bE:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
bF:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gaW:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){if(this.gaW())return a+"disposed"
return a+C.d.ai(J.a8(this.a.e),0)+", "+C.d.ai(J.a8(this.b.e),0)},
M:function(){return this.D("")}}
F.fp.prototype={}
F.hU.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.c_.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ai(J.a8(u.e),0)},
M:function(){return this.D("")}}
F.hi.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.C():u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.k(0,r.h0())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.c_()
if(n.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.l7(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.E()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.E()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bK(l,k,i)}g=h.e
if(g!=null)g.aj(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.aj(0)
return u},
hc:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aR(o,0)])
for(o=[F.aP];u.length!==0;){t=C.a.gh7(u)
C.a.ce(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.a.ce(u,r)}}if(s.length>1)b.aZ(s)}}p.a.u()
p.c.cf()
p.d.cf()
p.b.hu()
p.c.cg(new F.hU())
p.d.cg(new F.hq())
o=p.e
if(o!=null)o.aj(0)},
d_:function(){this.hc(new F.ic(),new F.h_())},
bd:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bd()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdB(new V.z(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.z(s,r,o).q(0,Math.sqrt(s*s+r*r+o*o))
if(!J.x(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}}o=p.e
if(o!=null)o.aj(0)},
bO:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a7()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aU().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.az().a)!==0)++s
if((t&$.aV().a)!==0)++s
if((t&$.cq().a)!==0)++s
if((t&$.cr().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.aS().a)!==0)++s
r=a4.gco(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cx])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fS(m)
k=l.gco(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cx(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].hb(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bx(p)),35044)
u.bindBuffer(a1,null)
c=new Z.aW(new Z.du(a1,d),o,a4)
c.b=H.b([],[Z.bl])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.ju(u,34963,b)
c.b.push(new Z.bl(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.ju(u,34963,b)
c.b.push(new Z.bl(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.ju(u,34963,b)
c.b.push(new Z.bl(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.u])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.a.t(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.w(null)}}
F.hk.prototype={
cX:function(a){var u,t,s,r,q,p=H.b([],[F.aZ]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.c(a,r)
r=a[r]
if(s>=q)return H.c(a,s)
q=a[s]
t.a.k(0,u)
t.a.k(0,r)
t.a.k(0,q)
p.push(F.bK(u,r,q))}}return p},
fQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aZ])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.c(c,s)
m=c[s];++s
if(s>=n)return H.c(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.c(c,k)
j=c[k]
if(t<0||t>=n)return H.c(c,t)
i=c[t]
n=u.a
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bK(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bK(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bK(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bK(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
cg:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aY(0,p,n)){p.aV()
break}}}}},
cf:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gfY(s)
if(t)s.aV()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bP())s=!1
return s},
bd:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.z(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.z(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.w(null)}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.t(r,"\n")},
M:function(){return this.D("")}}
F.hl.prototype={
gj:function(a){return this.b.length},
cg:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aY(0,p,n)){p.aV()
break}}}}},
cf:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.x(s.a,s.b)
if(t)s.aV()}},
i:function(a){return this.M()},
D:function(a){var u,t,s=H.b([],[P.u]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.a.t(s,"\n")},
M:function(){return this.D("")}}
F.hm.prototype={
gj:function(a){return this.b.length},
hu:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.t(r,"\n")},
M:function(){return this.D("")}}
F.aP.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dt(u.cx,r,o,t,s,q,p,a,n)},
h0:function(){return this.bT(null)},
sZ:function(a,b){var u
if(!J.x(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sdB:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.B(a)))
if(!J.x(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Y()}},
saA:function(a){var u
if(!J.x(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sd0:function(a){var u
if(!J.x(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
hb:function(a){var u,t,s=this
if(a.p(0,$.a7())){u=s.f
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aU())){u=s.r
t=[P.I]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aT())){u=s.x
t=[P.I]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.az())){u=s.y
t=[P.I]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.aV())){u=s.z
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cq())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cr())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bD()))return H.b([s.ch],[P.I])
else if(a.p(0,$.aS())){u=s.cx
t=[P.I]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.I])},
bR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c8()
t.d.L(0,new F.ii(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c8()
t.d.L(0,new F.ih(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.b([],[P.u])
q.push(C.d.ai(J.a8(s.e),0))
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
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.t(q,", ")
return a+"{"+t+"}"},
M:function(){return this.D("")}}
F.ii.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.ih.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.E(0,t)}}}
F.i7.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
cY:function(a,b,c,d,e,f,g){var u=F.dt(a,null,b,c,d,e,f,g,0)
this.k(0,u)
return u},
ba:function(a,b,c,d,e,f){return this.cY(a,b,c,null,d,e,f)},
fR:function(a,b,c,d,e,f){return this.cY(a,b,c,d,e,f,null)},
gj:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bP()
return!0},
fX:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.x(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var u,t,s,r
this.u()
u=H.b([],[P.u])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].D(a))
return C.a.t(u,"\n")},
M:function(){return this.D("")}}
F.i8.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
L:function(a,b){var u=this
C.a.L(u.b,b)
C.a.L(u.c,new F.i9(u,b))
C.a.L(u.d,new F.ia(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.t(r,"\n")}}
F.i9.prototype={
$1:function(a){if(!J.x(a.a,this.a))this.b.$1(a)}}
F.ia.prototype={
$1:function(a){var u=this.a
if(!J.x(a.a,u)&&!J.x(a.b,u))this.b.$1(a)}}
F.ib.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.t(r,"\n")}}
F.id.prototype={}
F.ic.prototype={
aY:function(a,b,c){return J.x(b.f,c.f)}}
F.ie.prototype={}
F.h_.prototype={
aZ:function(a){var u,t,s,r=V.c8()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.z(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.q(0,Math.sqrt(r.B(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)a[t].sdB(r)
return}}
F.ig.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.b([],[P.u])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.t(r,"\n")}}
O.cL.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.C():u},
A:function(a){var u=this.x
if(u!=null)u.w(a)},
ac:function(){return this.A(null)},
sbN:function(a){var u=this.r
if(!(Math.abs(u-a)<$.v().a)){this.r=a
u=new D.m("blurValue",u,a)
u.b=!0
this.A(u)}},
sd6:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gm().C(0,t.ga0())
u=t.e
t.e=a
if(a!=null)a.gm().k(0,t.ga0())
s=new D.m("colorTexture",u,t.e)
s.b=!0
t.A(s)}},
sbM:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().C(0,s.ga0())
u=s.f
s.f=a
if(a!=null)a.gm().k(0,s.ga0())
r=new D.m("blurTexture",u,s.f)
t=r.b=!0
s.A(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.A(null)}}},
scj:function(a){var u,t=this,s=$.jU
if(s==null){s=new V.bU(1,0,0,0,1,0,0,0,1)
$.jU=s
a=s}else a=s
if(!J.x(t.b,a)){u=t.b
t.b=a
s=new D.m("textureMatrix",u,a)
s.b=!0
t.A(s)}},
sbL:function(a){var u,t,s=this
if(a==null)a=V.kh()
if(!J.x(s.c,a)){u=s.c
s.c=a
t=new D.m("blurAdjust",u,a)
t.b=!0
s.A(t)}},
a5:function(a,b){},
a3:function(a,b){if(b!=null)if(!C.a.X(a,b)){b.a=a.length
a.push(b)}},
ci:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=a.fr.h(0,t)
if(s==null){g=a.a
s=new A.fc(g,t)
s.bk(g,t)
r=s.z=new A.fd(u,t)
q=new P.ar("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.I]
r.aG(q,3,H.b([0.75],g),H.b([0.5],g))
r.aG(q,6,H.b([0.42857,2.14286],g),H.b([0.41667,0.08333],g))
r.aG(q,9,H.b([0,1.8],g),H.b([0.5122,0.2439],g))
r.aG(q,12,H.b([0,1.38462,3.23077],g),H.b([0.22703,0.31622,0.07027],g))
r.aG(q,15,H.b([0.9375,2.8125],g),H.b([0.36184,0.13816],g))
r.aG(q,18,H.b([0.47368,2.36842,4.26316],g),H.b([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.c5(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.h(0,"posAttr")
s.ch=s.x.h(0,"txtAttr")
s.cx=H.h(s.y.h(0,"projViewObjMat"),"$iU")
s.cy=H.h(s.y.h(0,"txt2DMat"),"$ibu")
s.dy=H.h(s.y.h(0,"colorTxt"),"$iah")
s.dx=H.h(s.y.h(0,"blurScale"),"$iav")
g=s.y
if(u){s.fr=H.h(g.h(0,"blurTxt"),"$iah")
s.db=H.h(s.y.h(0,"blurAdj"),"$ibb")}else s.fx=H.h(g.h(0,"blurValue"),"$iM")
a.bK(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.aW)?b.e=null:g)==null){g=b.d
p=$.a7()
o=$.az()
o=g.bO(new Z.c9(a.a),new Z.aw(p.a|o.a))
o.am($.a7()).e=h.a.Q.c
o.am($.az()).e=h.a.ch.c
b.e=o}n=H.b([],[T.bs])
h.a3(n,h.e)
g=r.a
if(g)h.a3(n,h.f)
for(m=0;m<n.length;++m)n[m].W(a)
p=h.a
p.W(a)
o=h.e
p.cS(p.dy,o)
o=h.b
l=p.cy
l.toString
l.ab(o.a2(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.q()
o=o.b
j=a.d
if(typeof o!=="number")return o.q()
i=p.dx
i.a.uniform2f(i.d,l/k,o/j)
j=a.gdL()
p=p.cx
p.toString
p.ab(j.a2(0,!0))
p=h.a
if(g){g=h.f
p.cS(p.fr,g)
g=h.c
p.db.dY(g)}else{g=h.r
p=p.fx
p.a.uniform1f(p.d,g)}g=b.e
if(g instanceof Z.aW){g.W(a)
g.a_(a)
g.aB(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.bV()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.cW.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.C():u},
A:function(a){var u=this.fr
if(u!=null)u.w(a)},
ac:function(){return this.A(null)},
cO:function(a){this.a=null
this.A(a)},
fC:function(){return this.cO(null)},
eD:function(a,b){var u=new D.b0()
u.b=!0
this.A(u)},
eF:function(a,b){var u=new D.b1()
u.b=!0
this.A(u)},
cF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.ga9()
o=u.h(0,q.ga9())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cv])
u.L(0,new O.fF(g,n))
C.a.aQ(n,new O.fG())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.ga9()
o=m.h(0,q.ga9())
m.l(0,p,o==null?1:o)}l=H.b([],[A.cD])
m.L(0,new O.fH(g,l))
C.a.aQ(l,new O.fI())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.ga9()
o=k.h(0,q.ga9())
k.l(0,p,o==null?1:o)}j=H.b([],[A.d2])
k.L(0,new O.fJ(g,j))
C.a.aQ(j,new O.fK())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.ga9()
p=i.h(0,q.ga9())
i.l(0,s,p==null?1:p)}h=H.b([],[A.da])
i.L(0,new O.fL(g,h))
C.a.aQ(h,new O.fM())
f=C.c.a1(g.e.a.length+3,4)
g.dy.e
return A.ld(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a3:function(a,b){if(b!=null)if(!C.a.X(a,b)){b.a=a.length
a.push(b)}},
a5:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.X(u,u.length);u.v();){t=u.d
t.toString
s=$.bW
t.a=s==null?$.bW=new V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.ao(0,b,t)}},
ci:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cF()
u=b2.fr.h(0,b1.ay)
if(u==null){u=A.lc(b1,b2.a)
b2.bK(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bc
b1=b3.e
if(!(b1 instanceof Z.aW))b1=b3.e=null
if(b1==null||!b1.d.p(0,s)){b1=t.k4
if(b1)b3.d.ar()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bQ()
q.a.bQ()
q=q.e
if(q!=null)q.aj(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fX()
p=p.e
if(p!=null)p.aj(0)}n=b3.d.bO(new Z.c9(b2.a),s)
n.am($.a7()).e=b0.a.Q.c
if(b1)n.am($.aU()).e=b0.a.cx.c
if(r)n.am($.aT()).e=b0.a.ch.c
if(t.r2)n.am($.az()).e=b0.a.cy.c
if(q)n.am($.aV()).e=b0.a.db.c
if(t.ry)n.am($.aS()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.bs])
b0.a.W(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga4(r)
b1=b1.dy
b1.toString
b1.ab(r.a2(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga4(r)
q=b2.dx
q=b2.cx=r.n(0,q.ga4(q))
r=q}b1=b1.fr
b1.toString
b1.ab(r.a2(0,!0))}b1=b0.a
r=b2.gdL()
b1=b1.fy
b1.toString
b1.ab(r.a2(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga4(r)
b1=b1.fx
b1.toString
b1.ab(r.a2(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ab(C.j.a2(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ab(C.j.a2(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ab(C.j.a2(r,!0))}if(t.bb>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.c(b1,k)
b1=b1[k]
j=new Float32Array(H.bx(r.a2(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.af(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.af(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.af(b1.ay,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bc
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.af(b1.de,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.dh
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.df
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.af(b1.dg,r)}b1=t.z
if(b1.length>0){r=P.w
i=new H.H([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.ga9()
e=i.h(0,f)
if(e==null)e=0
i.l(0,f,e+1)
d=J.cs(b0.a.bY.h(0,f),e)
p=g.ghJ()
o=$.aq
p=p.b3(o==null?$.aq=new V.L(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghN()
o=$.aq
p=p.b3(o==null?$.aq=new V.L(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gax(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gh5()){p=g.gfT()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gfU()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gfV()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bX.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
b=new H.H([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.ga9()
e=b.h(0,f)
if(e==null)e=0
b.l(0,f,e+1)
d=J.cs(b0.a.c_.h(0,f),e)
p=g.gd8(g)
o=C.b.n(c.a,p.gda(p))+C.b.n(c.b,p.gdc(p))+C.b.n(c.c,p.gdd())
a=C.b.n(c.e,p.gda(p))+C.b.n(c.f,p.gdc(p))+C.b.n(c.r,p.gdd())
p=C.b.n(c.y,p.gda(p))+C.b.n(c.z,p.gdc(p))+C.b.n(c.Q,p.gdd())
p=new V.z(o,a,p).q(0,Math.sqrt(o*o+a*a+p*p))
a=d.e
o=p.a
a0=p.b
p=p.c
a.a.uniform3f(a.d,o,a0,p)
p=g.gax(g)
a0=d.f
a0.a.uniform3f(a0.d,p.a,p.b,p.c)
g.gaP()
p=g.gd8(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbj()
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbh(g)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaP()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gaP()
o=p.gdz(p)
if(o){o=d.r
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bZ.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
a1=new H.H([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.ga9()
e=a1.h(0,f)
if(e==null)e=0
a1.l(0,f,e+1)
d=J.cs(b0.a.c1.h(0,f),e)
a2=c.n(0,g.a)
p=g.a
o=$.aq
p=p.b3(o==null?$.aq=new V.L(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aq
p=a2.b3(p==null?$.aq=new V.L(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.c
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.d!=null||!1){p=a2.du(0)
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
j=new Float32Array(H.bx(new V.bU(o,a,a0,a3,a4,a5,a6,a7,p).a2(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)}p=g.d
o=p!=null
if(o){if(o)if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.d
o=p!=null
if(o&&p.d>=6){a=d.f
a.toString
if(!o||p.d<6)a.a.uniform1i(a.d,0)
else{p=p.a
a.a.uniform1i(a.d,p)}}}p=g.r
o=d.y
o.a.uniform1f(o.d,p)
p=g.x
o=d.z
o.a.uniform1f(o.d,p)
p=g.y
o=d.Q
o.a.uniform1f(o.d,p)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.c0.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
a9=new H.H([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.ga9()
e=a9.h(0,f)
if(e==null)e=0
a9.l(0,f,e+1)
d=J.cs(b0.a.c3.h(0,f),e)
p=g.ghs(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gd8(g).hX()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b3(g.ghs(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gax(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaP()
p=g.gbj()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gbh(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghY()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghZ()
o=d.y
o.a.uniform1f(o.d,p)
g.gaP()
p=g.gaP()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gaP()
o=p.gdz(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gcn()
p=g.ghI()
o=d.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gcn()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gcn()
o=p.gdz(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.ghM()){p=g.ghL()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.ghK()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gh5()){p=g.gfT()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gfU()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gfV()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.c2.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.a3(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.af(b1.di,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga4(r).du(0)}b1=b1.id
b1.toString
b1.ab(r.a2(0,!0))}if(t.db){b0.a3(m,b0.ch)
b1=b0.a
r=b0.ch
b1.af(b1.dj,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dk
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.af(b1.dl,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.dm
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dn
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.a3(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.af(b1.dq,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.dr
r.a.uniform1f(r.d,p)}if(b1.c){b0.a3(m,b0.db.e)
r=b0.a
p=b0.db.e
r.af(r.ds,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d>=6){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(34067,p.b)}}p=b3.e
p.W(b2)
p.a_(b2)
p.aB(b2)
if(q)b1=b1.c
else b1=!0
if(b1)r.disable(3042)
for(k=0;k<m.length;++k){b1=m[k]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(34067,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.bV()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cF().ay}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cv(a,C.c.a1(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.cD(a,C.c.a1(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.d2(a,C.c.a1(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.E()
return this.b.push(new A.da(a,C.c.a1(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fz.prototype={
av:function(){var u,t=this
t.ct()
u=t.f
if(!(Math.abs(u-1)<$.v().a)){t.f=1
u=new D.m(t.b,u,1)
u.b=!0
t.a.A(u)}}}
O.bT.prototype={
A:function(a){return this.a.A(a)},
ac:function(){return this.A(null)},
av:function(){},
cR:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.A(null)}},
saA:function(a){var u,t=this,s=t.c
if(!s.c)t.cR(new A.Z(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().C(0,t.ga0())
u=t.e
t.e=a
a.gm().k(0,t.ga0())
s=new D.m(t.b+".textureCube",u,t.e)
s.b=!0
t.a.A(s)}}}
O.fA.prototype={}
O.ao.prototype={
cQ:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.m(s.b+".color",u,a)
t.b=!0
s.a.A(t)}},
av:function(){this.ct()
this.cQ(new V.P(1,1,1))},
sax:function(a,b){this.cR(new A.Z(!0,!1,this.c.c))
this.cQ(b)}}
O.fC.prototype={}
O.fD.prototype={
av:function(){var u,t=this
t.cu()
u=t.ch
if(!(Math.abs(u-1)<$.v().a)){t.ch=1
u=new D.m(t.b+".refraction",u,1)
u.b=!0
t.a.A(u)}}}
O.fE.prototype={
av:function(){var u,t=this
t.cu()
u=t.ch
if(!(Math.abs(u-100)<$.v().a)){t.ch=100
u=new D.m(t.b+".shininess",u,100)
u.b=!0
t.a.A(u)}}}
O.de.prototype={}
O.df.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.C():u},
A:function(a){var u=this.e
if(u!=null)u.w(a)},
ac:function(){return this.A(null)},
eT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.an()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.ac()},
eV:function(a,b){var u,t
for(u=b.gP(b),t=this.ga0();u.v();)u.gJ(u).gm().C(0,t)
this.ac()},
sd2:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.m("blend",u,a)
u.b=!0
this.A(u)}},
a5:function(a,b){},
es:function(a){a=C.c.a1(a+3,4)*4
if(a<=0)return 4
return a},
ci:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.es(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.lx(i,u,a.a)
a.bK(s)}j.b=s
u=s}if(b.e==null){u=b.d.bO(new Z.c9(a.a),$.a7())
t=u.am($.a7())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.W(a)
q=H.b([],[T.bs])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.X(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.c(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.c(u,p)
u=u[p]
if(t==null){t=$.bW
if(t==null){t=new V.ae(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.bW=t}}l=new Float32Array(H.bx(t.a2(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.c2
if(t==null){t=V.h8(0,0,1,1)
$.c2=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.c(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.c(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.c2
if(t==null){t=V.h8(0,0,1,1)
$.c2=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.c(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.c(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.c(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.dV(t)
for(o=0;o<q.length;++o)q[o].W(a)
u=b.e
if(u instanceof Z.aW){u.W(a)
u.a_(a)
u.aB(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.bV()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.b8.prototype={
A:function(a){var u=this.f
if(u!=null)u.w(a)},
ac:function(){return this.A(null)}}
T.bs.prototype={}
T.hF.prototype={}
T.hG.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.C():u},
W:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.hH.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.C():u}}
T.hJ.prototype={
dw:function(a,b,c,d,e,f){var u,t=this,s=34067,r=t.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null)
u=new T.hH()
u.a=0
u.b=q
u.c=!1
u.d=0
t.aI(u,q,a,34069,!1,!1)
t.aI(u,q,d,34070,!1,!1)
t.aI(u,q,b,34071,!1,!1)
t.aI(u,q,e,34072,!1,!1)
t.aI(u,q,c,34073,!1,!1)
t.aI(u,q,f,34074,!1,!1)
return u},
aI:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.R(u,"load",new T.hK(this,u,!1,b,!1,d,a),!1)},
fD:function(a,b,c){var u,t,s,r
b=V.co(b)
u=V.co(a.width)
t=V.co(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jd()
s.width=u
s.height=t
r=C.f.dS(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mo(r.getImageData(0,0,s.width,s.height))}}}
T.hK.prototype={
$1:function(a){var u=this,t=u.a,s=t.fD(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.r.hB(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bW()}++t.e}}
X.ez.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.C():u},
V:function(a){var u=this.fr
if(u!=null)u.w(a)},
sak:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.m("width",u,b)
u.b=!0
t.V(u)}},
sag:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.m("height",u,b)
u.b=!0
t.V(u)}},
W:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.n()
h.sak(0,C.b.U(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.n()
h.sag(0,C.b.U(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.co(s)
o=V.co(r)
q=V.co(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.r.dO(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.k3(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bW()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bW()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.b.U(s*h.a)
r=t.d
a.d=C.b.U(r*h.b)
l=t.a
k=h.c
j=C.b.U(l*k)
t=t.b
l=h.d
u.viewport(j,C.b.U(t*l),C.b.U(s*k),C.b.U(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aB:function(a){a.a.bindFramebuffer(36160,null)}}
X.jc.prototype={}
X.fb.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.C():u},
W:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.b.U(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.b.U(r*t)
r=C.b.U(s.c*u)
a.c=r
s=C.b.U(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aB:function(a){}}
X.ff.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.C():u}}
X.d1.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.C():u},
V:function(a){var u=this.f
if(u!=null)u.w(a)},
ed:function(){return this.V(null)},
sas:function(a){var u,t,s=this
if(!J.x(s.b,a)){u=s.b
if(u!=null)u.gm().C(0,s.gcA())
t=s.b
s.b=a
if(a!=null)a.gm().k(0,s.gcA())
u=new D.m("mover",t,s.b)
u.b=!0
s.V(u)}}}
X.hB.prototype={}
V.j3.prototype={
$1:function(a){var u=C.b.dP(this.a.gh8(),2)
if(u!=="0.00")P.jF(u+" fps")}}
V.hn.prototype={
e6:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.hp(o),!1)},
cZ:function(a){var u,t,s,r,q,p,o,n
this.fG()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.ha(a),s.toString,r=new H.N(r),r=new P.ch(s.dQ(new H.bQ(r,r.gj(r))).a());r.v();){s=r.gJ(r)
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
if(H.mK(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.lL(C.I,s,C.n,!1)
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
fG:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hN()
t=P.u
u.a=new H.H([t,L.dc])
u.b=new H.H([t,L.dj])
u.c=P.jS(t)
u.d=u.N(0,q)
t=u.N(0,q).t(0,p)
s=K.T(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).t(0,p)
s=new K.aG()
r=[K.cV]
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.N("*"))
s.a.push(t)
t=u.N(0,p).t(0,"BoldEnd")
s=K.T(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,o)
s=K.T(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).t(0,o)
s=new K.aG()
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.N("_"))
s.a.push(t)
t=u.N(0,o).t(0,n)
s=K.T(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,m)
s=K.T(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).t(0,m)
s=new K.aG()
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.N("`"))
s.a.push(t)
t=u.N(0,m).t(0,"CodeEnd")
s=K.T(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,l)
s=K.T(new H.N("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).t(0,k)
s=K.T(new H.N("|"))
t.a.push(s)
s=u.N(0,l).t(0,j)
t=K.T(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).t(0,l)
t=new K.aG()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.N("|]"))
t.a.push(s)
s=u.N(0,k).t(0,j)
t=K.T(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).t(0,k)
t=new K.aG()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.N("|]"))
t.a.push(s)
u.N(0,q).t(0,i).a.push(new K.er())
s=u.N(0,i).t(0,i)
t=new K.aG()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.N("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.b2(p)
s=u.N(0,n)
s.d=s.a.b2(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b2(m)
s=u.N(0,j)
s.d=s.a.b2("Link")
s=u.N(0,i)
s.d=s.a.b2(i)
this.b=u}}
V.hp.prototype={
$1:function(a){P.k6(C.i,new V.ho(this.a))}}
V.ho.prototype={
$0:function(){var u=C.b.U(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.e0=u.i
u=J.cQ.prototype
u.e1=u.i
u=K.cM.prototype
u.e_=u.aN
u.cs=u.i
u=O.bT.prototype
u.ct=u.av
u=O.ao.prototype
u.cu=u.av})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lO","l5",20)
t(P,"mi","lC",7)
t(P,"mj","lD",7)
t(P,"mk","lE",7)
s(P,"kn","mg",10)
var m
r(m=E.aA.prototype,"gdG",0,0,null,["$1","$0"],["dH","hj"],0,0)
r(m,"gdI",0,0,null,["$1","$0"],["dJ","hk"],0,0)
r(m,"gdE",0,0,null,["$1","$0"],["dF","hi"],0,0)
r(m,"gdC",0,0,null,["$1","$0"],["dD","hf"],0,0)
q(m,"ghd","he",3)
q(m,"ghg","hh",3)
r(m=E.dg.prototype,"gcv",0,0,null,["$1","$0"],["cz","cw"],0,0)
p(m,"ghx","dM",10)
o(m=X.dp.prototype,"geW","eX",4)
o(m,"geG","eH",4)
o(m,"geM","eN",2)
o(m,"gf_","f0",11)
o(m,"geY","eZ",11)
o(m,"gf3","f4",2)
o(m,"gf7","f8",2)
o(m,"geQ","eR",2)
o(m,"gf5","f6",2)
o(m,"geO","eP",2)
o(m,"gf9","fa",18)
o(m,"gfb","fc",4)
o(m,"gfs","ft",5)
o(m,"gfn","fo",5)
o(m,"gfp","fq",5)
r(m=D.cS.prototype,"gcM",0,0,null,["$1","$0"],["cN","f1"],0,0)
o(m,"gfd","fe",19)
q(m,"geA","eB",12)
q(m,"gfh","fi",12)
r(D.bp.prototype,"gbl",0,0,null,["$1","$0"],["a7","e8"],0,0)
n(V.D.prototype,"gj","aX",6)
n(V.z.prototype,"gj","aX",6)
n(V.bv.prototype,"gj","aX",6)
r(m=U.bL.prototype,"gaJ",0,0,null,["$1","$0"],["F","a8"],0,0)
q(m,"ge9","ea",13)
q(m,"gff","fg",13)
r(m=U.dq.prototype,"gaJ",0,0,null,["$1","$0"],["F","a8"],0,0)
o(m,"gbu","bv",1)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
r(m=U.dr.prototype,"gaJ",0,0,null,["$1","$0"],["F","a8"],0,0)
o(m,"gbu","bv",1)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"geu","ev",1)
o(m,"gew","ex",1)
o(m,"gfN","fO",1)
o(m,"gfL","fM",1)
o(m,"gfJ","fK",1)
o(U.ds.prototype,"gey","ez",1)
r(m=M.cz.prototype,"gT",0,0,null,["$1","$0"],["R","at"],0,0)
q(m,"gfj","fk",14)
q(m,"gfl","fm",14)
r(M.cB.prototype,"gT",0,0,null,["$1","$0"],["R","at"],0,0)
r(m=M.cH.prototype,"gT",0,0,null,["$1","$0"],["R","at"],0,0)
q(m,"geI","eJ",3)
q(m,"geK","eL",3)
r(M.cK.prototype,"gT",0,0,null,["$1","$0"],["R","at"],0,0)
r(O.cL.prototype,"ga0",0,0,null,["$1","$0"],["A","ac"],0,0)
r(m=O.cW.prototype,"ga0",0,0,null,["$1","$0"],["A","ac"],0,0)
r(m,"gfB",0,0,null,["$1","$0"],["cO","fC"],0,0)
q(m,"geC","eD",15)
q(m,"geE","eF",15)
r(O.bT.prototype,"ga0",0,0,null,["$1","$0"],["A","ac"],0,0)
r(m=O.df.prototype,"ga0",0,0,null,["$1","$0"],["A","ac"],0,0)
q(m,"geS","eT",16)
q(m,"geU","eV",16)
r(O.b8.prototype,"ga0",0,0,null,["$1","$0"],["A","ac"],0,0)
r(X.d1.prototype,"gcA",0,0,null,["$1","$0"],["V","ed"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.jl,J.a,J.X,P.dL,P.j,H.bQ,P.fi,H.cI,H.i2,H.hS,P.bk,H.bH,H.e1,P.a0,H.fq,H.fr,H.fk,P.e7,P.bw,P.ch,P.dv,P.dd,P.hz,P.dh,P.iM,P.iF,P.iA,P.dK,P.r,P.eG,P.iL,P.be,P.aa,P.a6,P.aY,P.h3,P.db,P.dD,P.fa,P.b5,P.bR,P.b6,P.u,P.ar,W.eO,W.J,W.cJ,P.ec,P.iB,K.er,K.cM,K.cV,K.hh,L.dc,L.di,L.dj,L.hN,O.al,O.bV,E.eC,E.aA,E.h9,E.dg,Z.du,Z.c9,Z.aW,Z.bl,Z.aw,D.eF,D.an,D.O,X.cy,X.cR,X.fn,X.fu,X.ab,X.fT,X.hO,X.dp,D.eB,D.eT,D.a_,D.bp,D.ht,V.P,V.Y,V.f0,V.bU,V.ae,V.Q,V.L,V.ac,V.d4,V.D,V.z,V.bv,U.dq,U.dr,U.ds,M.cB,M.cH,M.cK,M.a5,A.cu,A.eu,A.Z,A.fd,A.cv,A.cD,A.d2,A.da,A.fB,A.c3,A.c4,A.c5,A.c6,A.bj,A.dm,A.hZ,F.aZ,F.f3,F.bP,F.fp,F.c_,F.hi,F.hk,F.hl,F.hm,F.aP,F.i7,F.i8,F.ib,F.id,F.ie,F.ig,O.de,O.bT,O.fC,O.b8,T.hJ,X.hB,X.jc,X.ff,X.d1,V.hn])
s(J.a,[J.fj,J.cP,J.cQ,J.b2,J.bO,J.bm,H.bZ,W.e,W.eq,W.cw,W.am,W.G,W.dx,W.a9,W.eS,W.eU,W.dz,W.cF,W.dB,W.eW,W.i,W.dE,W.aC,W.fe,W.dG,W.b_,W.ft,W.fN,W.dM,W.dN,W.aE,W.dO,W.dR,W.aH,W.dV,W.dX,W.aL,W.dY,W.aM,W.e2,W.as,W.e5,W.hM,W.aO,W.e8,W.hQ,W.i4,W.ed,W.ef,W.eh,W.ej,W.el,P.b4,P.dI,P.b7,P.dT,P.h7,P.e3,P.b9,P.ea,P.ev,P.dw,P.d6,P.e_])
s(J.cQ,[J.h4,J.c7,J.b3])
t(J.jk,J.b2)
s(J.bO,[J.cO,J.cN])
t(P.fs,P.dL)
s(P.fs,[H.dn,W.is,W.ir,P.f6])
t(H.N,H.dn)
s(P.j,[H.q,H.bS,H.ik,P.fh])
t(H.eZ,H.bS)
s(P.fi,[H.cU,H.il])
s(P.bk,[H.h0,H.fm,H.i1,H.eE,H.hf,P.d0,P.aj,P.i3,P.i0,P.hv,P.eK,P.eR])
s(H.bH,[H.j7,H.hC,H.fl,H.iZ,H.j_,H.j0,P.io,P.im,P.ip,P.iq,P.iK,P.iJ,P.iR,P.iD,P.iE,P.fw,P.eX,P.eY,W.fP,W.fR,W.he,W.hy,W.iv,P.iS,P.f7,P.f8,P.ex,E.ha,E.hb,E.hc,E.hL,D.f1,D.f2,F.iN,F.iT,F.iU,F.iV,F.iW,F.j4,F.j5,F.ii,F.ih,F.i9,F.ia,O.fF,O.fG,O.fH,O.fI,O.fJ,O.fK,O.fL,O.fM,T.hK,V.j3,V.hp,V.ho])
s(H.hC,[H.hw,H.bF])
t(P.fv,P.a0)
t(H.H,P.fv)
t(H.bo,H.q)
t(H.cX,H.bZ)
s(H.cX,[H.cb,H.cd])
t(H.cc,H.cb)
t(H.bY,H.cc)
t(H.ce,H.cd)
t(H.cY,H.ce)
s(H.cY,[H.fU,H.fV,H.fW,H.fX,H.fY,H.cZ,H.fZ])
t(P.iI,P.fh)
t(P.iC,P.iM)
t(P.iz,P.iF)
t(P.eL,P.hz)
t(P.f_,P.eG)
t(P.i5,P.f_)
t(P.i6,P.eL)
s(P.a6,[P.I,P.w])
s(P.aj,[P.br,P.fg])
s(W.e,[W.E,W.f5,W.aK,W.cf,W.aN,W.at,W.ci,W.ij,W.ca,P.ey,P.bh])
s(W.E,[W.S,W.aX])
s(W.S,[W.l,P.k])
s(W.l,[W.es,W.et,W.bi,W.f9,W.bN,W.hg])
t(W.eN,W.am)
t(W.bJ,W.dx)
s(W.a9,[W.eP,W.eQ])
t(W.dA,W.dz)
t(W.cE,W.dA)
t(W.dC,W.dB)
t(W.eV,W.dC)
t(W.aB,W.cw)
t(W.dF,W.dE)
t(W.f4,W.dF)
t(W.dH,W.dG)
t(W.bM,W.dH)
t(W.ba,W.i)
s(W.ba,[W.bn,W.ap,W.bt])
t(W.fO,W.dM)
t(W.fQ,W.dN)
t(W.dP,W.dO)
t(W.fS,W.dP)
t(W.dS,W.dR)
t(W.d_,W.dS)
t(W.dW,W.dV)
t(W.h5,W.dW)
t(W.hd,W.dX)
t(W.cg,W.cf)
t(W.hr,W.cg)
t(W.dZ,W.dY)
t(W.hs,W.dZ)
t(W.hx,W.e2)
t(W.e6,W.e5)
t(W.hD,W.e6)
t(W.cj,W.ci)
t(W.hE,W.cj)
t(W.e9,W.e8)
t(W.hP,W.e9)
t(W.bc,W.ap)
t(W.ee,W.ed)
t(W.it,W.ee)
t(W.dy,W.cF)
t(W.eg,W.ef)
t(W.iw,W.eg)
t(W.ei,W.eh)
t(W.dQ,W.ei)
t(W.ek,W.ej)
t(W.iG,W.ek)
t(W.em,W.el)
t(W.iH,W.em)
t(W.iu,P.dd)
t(P.a4,P.iB)
t(P.dJ,P.dI)
t(P.fo,P.dJ)
t(P.dU,P.dT)
t(P.h1,P.dU)
t(P.e4,P.e3)
t(P.hA,P.e4)
t(P.eb,P.ea)
t(P.hR,P.eb)
t(P.ew,P.dw)
t(P.h2,P.bh)
t(P.e0,P.e_)
t(P.hu,P.e0)
s(K.cM,[K.aG,L.dl])
s(E.eC,[Z.cx,A.d8,T.bs])
s(D.O,[D.b0,D.b1,D.m,X.h6])
s(X.h6,[X.cT,X.aF,X.bX,X.dk])
s(O.al,[D.cS,U.bL,M.cz])
s(D.eF,[U.eJ,U.a3])
s(U.a3,[U.cA,U.d7])
s(A.d8,[A.fc,A.fx,A.hI])
s(A.dm,[A.ag,A.hW,A.hX,A.hY,A.hV,A.M,A.av,A.F,A.bb,A.i_,A.bu,A.U,A.ah,A.V])
t(F.hq,F.f3)
t(F.hU,F.fp)
t(F.ic,F.id)
t(F.h_,F.ie)
s(O.de,[O.cL,O.cW,O.df])
s(O.bT,[O.fz,O.fA,O.ao])
s(O.ao,[O.fD,O.fE])
s(T.bs,[T.hF,T.hH])
t(T.hG,T.hF)
s(X.hB,[X.ez,X.fb])
u(H.dn,H.i2)
u(H.cb,P.r)
u(H.cc,H.cI)
u(H.cd,P.r)
u(H.ce,H.cI)
u(P.dL,P.r)
u(W.dx,W.eO)
u(W.dz,P.r)
u(W.dA,W.J)
u(W.dB,P.r)
u(W.dC,W.J)
u(W.dE,P.r)
u(W.dF,W.J)
u(W.dG,P.r)
u(W.dH,W.J)
u(W.dM,P.a0)
u(W.dN,P.a0)
u(W.dO,P.r)
u(W.dP,W.J)
u(W.dR,P.r)
u(W.dS,W.J)
u(W.dV,P.r)
u(W.dW,W.J)
u(W.dX,P.a0)
u(W.cf,P.r)
u(W.cg,W.J)
u(W.dY,P.r)
u(W.dZ,W.J)
u(W.e2,P.a0)
u(W.e5,P.r)
u(W.e6,W.J)
u(W.ci,P.r)
u(W.cj,W.J)
u(W.e8,P.r)
u(W.e9,W.J)
u(W.ed,P.r)
u(W.ee,W.J)
u(W.ef,P.r)
u(W.eg,W.J)
u(W.eh,P.r)
u(W.ei,W.J)
u(W.ej,P.r)
u(W.ek,W.J)
u(W.el,P.r)
u(W.em,W.J)
u(P.dI,P.r)
u(P.dJ,W.J)
u(P.dT,P.r)
u(P.dU,W.J)
u(P.e3,P.r)
u(P.e4,W.J)
u(P.ea,P.r)
u(P.eb,W.J)
u(P.dw,P.a0)
u(P.e_,P.r)
u(P.e0,W.J)})()
var v={mangledGlobalNames:{w:"int",I:"double",a6:"num",u:"String",be:"bool",b6:"Null",b5:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.O]},{func:1,ret:-1,args:[D.O]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:-1,args:[P.w,[P.j,E.aA]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:P.I},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b6,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[P.w,[P.j,D.a_]]},{func:1,ret:-1,args:[P.w,[P.j,U.a3]]},{func:1,ret:-1,args:[P.w,[P.j,M.a5]]},{func:1,ret:-1,args:[P.w,[P.j,V.ae]]},{func:1,ret:-1,args:[P.w,[P.j,O.b8]]},{func:1,ret:P.b6,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.be,args:[[P.j,D.a_]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bi.prototype
C.F=J.a.prototype
C.a=J.b2.prototype
C.G=J.cN.prototype
C.c=J.cO.prototype
C.j=J.cP.prototype
C.b=J.bO.prototype
C.d=J.bm.prototype
C.H=J.b3.prototype
C.q=J.h4.prototype
C.r=P.d6.prototype
C.k=J.c7.prototype
C.t=W.bc.prototype
C.u=W.ca.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.B=new P.h3()
C.n=new P.i5()
C.C=new P.i6()
C.e=new P.iC()
C.o=new A.bj(0,"ColorBlendType.Overwrite")
C.p=new A.bj(1,"ColorBlendType.Additive")
C.D=new A.bj(2,"ColorBlendType.Average")
C.h=new A.bj(3,"ColorBlendType.AlphaBlend")
C.i=new P.aY(0)
C.E=new P.aY(5e6)
C.I=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.J=new P.bw(null,2)})();(function staticFields(){$.ak=0
$.bG=null
$.jI=null
$.ks=null
$.km=null
$.kv=null
$.iX=null
$.j1=null
$.jD=null
$.by=null
$.cl=null
$.cm=null
$.jw=!1
$.ai=C.e
$.a2=[]
$.jU=null
$.bW=null
$.k_=null
$.aq=null
$.c2=null
$.kc=null
$.ka=null
$.kb=null
$.kf=null
$.ke=null
$.kd=null
$.kg=null
$.jZ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mQ","kB",function(){return H.kr("_$dart_dartClosure")})
u($,"mR","jG",function(){return H.kr("_$dart_js")})
u($,"mS","kC",function(){return H.au(H.hT({
toString:function(){return"$receiver$"}}))})
u($,"mT","kD",function(){return H.au(H.hT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mU","kE",function(){return H.au(H.hT(null))})
u($,"mV","kF",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mY","kI",function(){return H.au(H.hT(void 0))})
u($,"mZ","kJ",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mX","kH",function(){return H.au(H.k8(null))})
u($,"mW","kG",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n0","kL",function(){return H.au(H.k8(void 0))})
u($,"n_","kK",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nd","jH",function(){return P.lB()})
u($,"nf","kP",function(){return P.lq("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n7","kO",function(){return Z.ad(0)})
u($,"n1","kM",function(){return Z.ad(511)})
u($,"n9","a7",function(){return Z.ad(1)})
u($,"n8","aU",function(){return Z.ad(2)})
u($,"n3","aT",function(){return Z.ad(4)})
u($,"na","az",function(){return Z.ad(8)})
u($,"nb","aV",function(){return Z.ad(16)})
u($,"n4","cq",function(){return Z.ad(32)})
u($,"n5","cr",function(){return Z.ad(64)})
u($,"n6","kN",function(){return Z.ad(96)})
u($,"nc","bD",function(){return Z.ad(128)})
u($,"n2","aS",function(){return Z.ad(256)})
u($,"mP","kA",function(){return new V.f0(1e-9)})
u($,"mO","v",function(){return $.kA()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bZ,ArrayBufferView:H.bZ,Float32Array:H.bY,Float64Array:H.bY,Int16Array:H.fU,Int32Array:H.fV,Int8Array:H.fW,Uint16Array:H.fX,Uint32Array:H.fY,Uint8ClampedArray:H.cZ,CanvasPixelArray:H.cZ,Uint8Array:H.fZ,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eq,HTMLAnchorElement:W.es,HTMLAreaElement:W.et,Blob:W.cw,HTMLCanvasElement:W.bi,CDATASection:W.aX,CharacterData:W.aX,Comment:W.aX,ProcessingInstruction:W.aX,Text:W.aX,CSSPerspective:W.eN,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bJ,MSStyleCSSProperties:W.bJ,CSS2Properties:W.bJ,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.eP,CSSUnparsedValue:W.eQ,DataTransferItemList:W.eS,DOMException:W.eU,ClientRectList:W.cE,DOMRectList:W.cE,DOMRectReadOnly:W.cF,DOMStringList:W.eV,DOMTokenList:W.eW,Element:W.S,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aB,FileList:W.f4,FileWriter:W.f5,HTMLFormElement:W.f9,Gamepad:W.aC,History:W.fe,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,ImageData:W.b_,HTMLImageElement:W.bN,KeyboardEvent:W.bn,Location:W.ft,MediaList:W.fN,MIDIInputMap:W.fO,MIDIOutputMap:W.fQ,MimeType:W.aE,MimeTypeArray:W.fS,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d_,RadioNodeList:W.d_,Plugin:W.aH,PluginArray:W.h5,RTCStatsReport:W.hd,HTMLSelectElement:W.hg,SourceBuffer:W.aK,SourceBufferList:W.hr,SpeechGrammar:W.aL,SpeechGrammarList:W.hs,SpeechRecognitionResult:W.aM,Storage:W.hx,CSSStyleSheet:W.as,StyleSheet:W.as,TextTrack:W.aN,TextTrackCue:W.at,VTTCue:W.at,TextTrackCueList:W.hD,TextTrackList:W.hE,TimeRanges:W.hM,Touch:W.aO,TouchEvent:W.bt,TouchList:W.hP,TrackDefaultList:W.hQ,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.i4,VideoTrackList:W.ij,WheelEvent:W.bc,Window:W.ca,DOMWindow:W.ca,CSSRuleList:W.it,ClientRect:W.dy,DOMRect:W.dy,GamepadList:W.iw,NamedNodeMap:W.dQ,MozNamedAttrMap:W.dQ,SpeechRecognitionResultList:W.iG,StyleSheetList:W.iH,SVGLength:P.b4,SVGLengthList:P.fo,SVGNumber:P.b7,SVGNumberList:P.h1,SVGPointList:P.h7,SVGStringList:P.hA,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b9,SVGTransformList:P.hR,AudioBuffer:P.ev,AudioParamMap:P.ew,AudioTrackList:P.ey,AudioContext:P.bh,webkitAudioContext:P.bh,BaseAudioContext:P.bh,OfflineAudioContext:P.h2,WebGL2RenderingContext:P.d6,SQLResultSetRowList:P.hu})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
W.cf.$nativeSuperclassTag="EventTarget"
W.cg.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.cj.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.kt,[])
else U.kt([])})})()
//# sourceMappingURL=test.dart.js.map
