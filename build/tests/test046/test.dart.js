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
a[c]=function(){a[c]=function(){H.mg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jd(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j0:function j0(){},
kH:function(a,b,c,d){if(!!a.$in)return new H.eH(a,b,[c,d])
return new H.bK(a,b,[c,d])},
js:function(){return new P.ha("No element")},
l0:function(a,b){var u=J.b9(a)
if(typeof u!=="number")return u.F()
H.cX(a,0,u-1,b)},
cX:function(a,b,c,d){if(c-b<=32)H.l_(a,b,c,d)
else H.kZ(a,b,c,d)},
l_:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ea(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a_()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
kZ:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.Z(a4+a5,2),f=g-j,e=g+j,d=J.ea(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a_()
if(a2>0){u=a1
a1=a0
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.F(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a2()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a_()
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
if(typeof l!=="number")return l.a2()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a_()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a_()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
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
H.cX(a3,a4,t-2,a6)
H.cX(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.F(a6.$2(d.h(a3,t),b),0);)++t
for(;J.F(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.cX(a3,t,s,a6)}else H.cX(a3,t,s,a6)},
M:function M(a){this.a=a},
n:function n(){},
bI:function bI(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b){this.a=null
this.b=a
this.c=b},
i0:function i0(a,b,c){this.a=a
this.b=b
this.$ti=c},
i1:function i1(a,b){this.a=a
this.b=b},
cw:function cw(){},
hG:function hG(){},
da:function da(){},
ce:function(a){var u,t=H.mh(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m0:function(a){return v.types[a]},
m5:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iw},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.c(H.aG(a))
return u},
bQ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.kK(a)+H.jR(H.cd(a),0,null)},
kK:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$ibY){r=C.k(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ce(t.length>1&&C.b.bd(t,0)===36?C.b.at(t,1):t)},
jD:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kU:function(a){var u,t,s,r=H.b([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b_(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aG(s))}return H.jD(r)},
kT:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aG(s))
if(s<0)throw H.c(H.aG(s))
if(s>65535)return H.kU(a)}return H.jD(a)},
kS:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b_(u,10))>>>0,56320|u&1023)}throw H.c(P.az(a,0,1114111,null,null))},
bk:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kR:function(a){var u=H.bk(a).getFullYear()+0
return u},
kP:function(a){var u=H.bk(a).getMonth()+1
return u},
kL:function(a){var u=H.bk(a).getDate()+0
return u},
kM:function(a){var u=H.bk(a).getHours()+0
return u},
kO:function(a){var u=H.bk(a).getMinutes()+0
return u},
kQ:function(a){var u=H.bk(a).getSeconds()+0
return u},
kN:function(a){var u=H.bk(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.aG(a))},
f:function(a,b){if(a==null)J.b9(a)
throw H.c(H.bs(a,b))},
bs:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,s,null)
u=J.b9(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.cS(b,s)},
lU:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bl(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bl(a,c,!0,b,"end",u)
return new P.ac(!0,b,"end",null)},
aG:function(a){return new P.ac(!0,a,null,null)},
lQ:function(a){if(typeof a!=="number")throw H.c(H.aG(a))
return a},
c:function(a){var u
if(a==null)a=new P.cP()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k3})
u.name=""}else u.toString=H.k3
return u},
k3:function(){return J.a4(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bA(a))},
al:function(a){var u,t,s,r,q,p
a=H.k1(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jL:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jy:function(a,b){return new H.fG(a,b==null?null:b.method)},
j1:function(a,b){var u=b==null,t=u?null:b.method
return new H.f2(a,t,u?null:b.receiver)},
ec:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j1(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jy(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k6()
q=$.k7()
p=$.k8()
o=$.k9()
n=$.kc()
m=$.kd()
l=$.kb()
$.ka()
k=$.kf()
j=$.ke()
i=r.a6(u)
if(i!=null)return f.$1(H.j1(u,i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.j1(u,i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jy(u,i))}}return f.$1(new H.hF(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cZ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ac(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cZ()
return a},
jf:function(a){var u
if(a==null)return new H.dP(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dP(a)},
lY:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
m4:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m4)
a.$identity=u
return u},
kv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hb().constructor.prototype):Object.create(new H.bw(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.C()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jo(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kr(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jo(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kr:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m0,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jn:H.iQ
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
ks:function(a,b,c,d){var u=H.iQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jo:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ku(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ks(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.C()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bx
return new Function(r+H.e(q==null?$.bx=H.eo("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.C()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.bx
return new Function(r+H.e(q==null?$.bx=H.eo("self"):q)+"."+H.e(u)+"("+o+");}")()},
kt:function(a,b,c,d){var u=H.iQ,t=H.jn
switch(b?-1:a){case 0:throw H.c(H.kX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ku:function(a,b){var u,t,s,r,q,p,o,n=$.bx
if(n==null)n=$.bx=H.eo("self")
u=$.jm
if(u==null)u=$.jm=H.eo("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kt(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ad
if(typeof u!=="number")return u.C()
$.ad=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ad
if(typeof u!=="number")return u.C()
$.ad=u+1
return new Function(n+u+"}")()},
jd:function(a,b,c,d,e,f,g){return H.kv(a,b,c,d,!!e,!!f,g)},
iQ:function(a){return a.a},
jn:function(a){return a.c},
eo:function(a){var u,t,s,r=new H.bw("self","target","receiver","name"),q=J.iZ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
m9:function(a,b){throw H.c(H.kq(a,H.ce(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.m9(a,b)},
lW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kq:function(a,b){return new H.ep("CastError: "+P.iW(a)+": type '"+H.e(H.lM(a))+"' is not a subtype of type '"+b+"'")},
lM:function(a){var u,t=J.U(a)
if(!!t.$ibz){u=H.lW(t)
if(u!=null)return H.ma(u)
return"Closure"}return H.bR(a)},
mg:function(a){throw H.c(new P.eA(a))},
kX:function(a){return new H.fV(a)},
jW:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cd:function(a){if(a==null)return
return a.$ti},
mO:function(a,b,c){return H.iM(a["$a"+H.e(c)],H.cd(b))},
m_:function(a,b,c,d){var u=H.iM(a["$a"+H.e(c)],H.cd(b))
return u==null?null:u[d]},
jX:function(a,b,c){var u=H.iM(a["$a"+H.e(b)],H.cd(a))
return u==null?null:u[c]},
aI:function(a,b){var u=H.cd(a)
return u==null?null:u[b]},
ma:function(a){return H.b4(a,null)},
b4:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.jR(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.lh(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lh:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b4(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b4(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b4(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b4(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lX(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b4(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jR:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aD("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b4(p,c)}return"<"+u.i(0)+">"},
iM:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mM:function(a,b,c){return a.apply(b,H.iM(J.U(b)["$a"+H.e(c)],H.cd(b)))},
mN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m6:function(a){var u,t,s,r,q=$.jY.$1(a),p=$.iA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iG[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jU.$2(a,q)
if(q!=null){p=$.iA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iG[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iI(u)
$.iA[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iG[q]=u
return u}if(s==="-"){r=H.iI(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.k_(a,u)
if(s==="*")throw H.c(P.jM(q))
if(v.leafTags[q]===true){r=H.iI(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.k_(a,u)},
k_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jh(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iI:function(a){return J.jh(a,!1,null,!!a.$iw)},
m7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iI(u)
else return J.jh(u,c,null,null)},
m2:function(){if(!0===$.jg)return
$.jg=!0
H.m3()},
m3:function(){var u,t,s,r,q,p,o,n
$.iA=Object.create(null)
$.iG=Object.create(null)
H.m1()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k0.$1(q)
if(p!=null){o=H.m7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m1:function(){var u,t,s,r,q,p,o=C.q()
o=H.bq(C.r,H.bq(C.t,H.bq(C.l,H.bq(C.l,H.bq(C.u,H.bq(C.v,H.bq(C.w(C.k),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jY=new H.iD(r)
$.jU=new H.iE(q)
$.k0=new H.iF(p)},
bq:function(a,b){return a(b)||b},
kC:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eT("Illegal RegExp pattern ("+String(p)+")",a))},
md:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
k1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k2:function(a,b,c){var u=H.me(a,b,c)
return u},
me:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.k1(b),'g'),H.lV(c))},
hu:function hu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fG:function fG(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a){this.a=a},
iN:function iN(a){this.a=a},
dP:function dP(a){this.a=a
this.b=null},
bz:function bz(){},
hh:function hh(){},
hb:function hb(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep:function ep(a){this.a=a},
fV:function fV(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f1:function f1(a){this.a=a},
f6:function f6(a,b){this.a=a
this.b=b
this.c=null},
bi:function bi(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function(a){return a},
am:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bs(b,a))},
lg:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lU(a,b,c))
return b},
bO:function bO(){},
cL:function cL(){},
bN:function bN(){},
cM:function cM(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
cN:function cN(){},
fE:function fE(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
lX:function(a){return J.jt(a?Object.keys(a):[],null)},
mh:function(a){return v.mangledGlobalNames[a]},
m8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iC:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jg==null){H.m2()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jM("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jk()]
if(r!=null)return r
r=H.m6(a)
if(r!=null)return r
if(typeof a=="function")return C.C
u=Object.getPrototypeOf(a)
if(u==null)return C.n
if(u===Object.prototype)return C.n
if(typeof s=="function"){Object.defineProperty(s,$.jk(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
kA:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.az(a,0,4294967295,"length",null))
return J.jt(new Array(a),b)},
jt:function(a,b){return J.iZ(H.b(a,[b]))},
iZ:function(a){a.fixed$length=Array
return a},
kB:function(a,b){return J.ci(a,b)},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.bg.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.f_.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iC(a)},
ea:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iC(a)},
je:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iC(a)},
lZ:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bY.prototype
return a},
iB:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.iC(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).n(a,b)},
ch:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m5(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ea(a).h(a,b)},
kk:function(a,b,c){return J.iB(a).eU(a,b,c)},
kl:function(a,b,c,d){return J.iB(a).fb(a,b,c,d)},
ci:function(a,b){return J.lZ(a).aA(a,b)},
iO:function(a,b){return J.je(a).D(a,b)},
km:function(a,b){return J.je(a).I(a,b)},
kn:function(a){return J.iB(a).gbF(a)},
bv:function(a){return J.U(a).gH(a)},
b8:function(a){return J.je(a).gN(a)},
b9:function(a){return J.ea(a).gj(a)},
ko:function(a,b){return J.iB(a).fW(a,b)},
a4:function(a){return J.U(a).i(a)},
a:function a(){},
f_:function f_(){},
cB:function cB(){},
cC:function cC(){},
fK:function fK(){},
bY:function bY(){},
aT:function aT(){},
aS:function aS(a){this.$ti=a},
j_:function j_(a){this.$ti=a},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bG:function bG(){},
cA:function cA(){},
cz:function cz(){},
bg:function bg(){}},P={
l5:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lN()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.br(new P.i3(s),1)).observe(u,{childList:true})
return new P.i2(s,u,t)}else if(self.setImmediate!=null)return P.lO()
return P.lP()},
l6:function(a){self.scheduleImmediate(H.br(new P.i4(a),0))},
l7:function(a){self.setImmediate(H.br(new P.i5(a),0))},
l8:function(a){P.j6(C.h,a)},
j6:function(a,b){var u=C.c.Z(a.a,1000)
return P.ld(u<0?0:u,b)},
jK:function(a,b){var u=C.c.Z(a.a,1000)
return P.le(u<0?0:u,b)},
ld:function(a,b){var u=new P.dV()
u.dA(a,b)
return u},
le:function(a,b){var u=new P.dV()
u.dB(a,b)
return u},
mK:function(a){return new P.bo(a,1)},
l9:function(){return C.F},
la:function(a){return new P.bo(a,3)},
lk:function(a,b){return new P.ip(a,[b])},
lG:function(){var u,t
for(;u=$.bp,u!=null;){$.cc=null
t=u.b
$.bp=t
if(t==null)$.cb=null
u.a.$0()}},
lL:function(){$.jb=!0
try{P.lG()}finally{$.cc=null
$.jb=!1
if($.bp!=null)$.jl().$1(P.jV())}},
lJ:function(a){var u=new P.dh(a)
if($.bp==null){$.bp=$.cb=u
if(!$.jb)$.jl().$1(P.jV())}else $.cb=$.cb.b=u},
lK:function(a){var u,t,s=$.bp
if(s==null){P.lJ(a)
$.cc=$.cb
return}u=new P.dh(a)
t=$.cc
if(t==null){u.b=s
$.bp=$.cc=u}else{u.b=t.b
$.cc=t.b=u
if(u.b==null)$.cb=u}},
jJ:function(a,b){var u=$.aa
if(u===C.e)return P.j6(a,b)
return P.j6(a,u.ff(b))},
l2:function(a,b){var u=$.aa
if(u===C.e)return P.jK(a,b)
return P.jK(a,u.cO(b,P.d4))},
jS:function(a,b,c,d,e){var u={}
u.a=d
P.lK(new P.iy(u,e))},
lH:function(a,b,c,d){var u,t=$.aa
if(t===c)return d.$0()
$.aa=c
u=t
try{t=d.$0()
return t}finally{$.aa=u}},
lI:function(a,b,c,d,e){var u,t=$.aa
if(t===c)return d.$1(e)
$.aa=c
u=t
try{t=d.$1(e)
return t}finally{$.aa=u}},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
dV:function dV(){this.c=0},
ir:function ir(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b){this.a=a
this.b=b},
c6:function c6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ip:function ip(a,b){this.a=a
this.$ti=b},
dh:function dh(a){this.a=a
this.b=null},
d0:function d0(){},
he:function he(){},
d4:function d4(){},
it:function it(){},
iy:function iy(a,b){this.a=a
this.b=b},
ii:function ii(){},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function(a,b){return new H.H([a,b])},
kF:function(a){return H.lY(a,new H.H([null,null]))},
ju:function(a){return new P.ie([a])},
ja:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lc:function(a,b){var u=new P.dx(a,b)
u.c=a.e
return u},
kz:function(a,b,c){var u,t
if(P.jc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.r])
$.a0.push(a)
try{P.lj(a,u)}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=P.jH(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
iY:function(a,b,c){var u,t
if(P.jc(a))return b+"..."+c
u=new P.aD(b)
$.a0.push(a)
try{t=u
t.a=P.jH(t.a,a,", ")}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jc:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
lj:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.u();r=q,q=p){p=n.gG(n);++l
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
jv:function(a){var u,t={}
if(P.jc(a))return"{...}"
u=new P.aD("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.km(a,new P.fc(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ie:function ie(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ig:function ig(a){this.a=a
this.c=this.b=null},
dx:function dx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eY:function eY(){},
f8:function f8(){},
q:function q(){},
fb:function fb(){},
fc:function fc(a,b){this.a=a
this.b=b},
Y:function Y(){},
il:function il(){},
dy:function dy(){},
er:function er(){},
ev:function ev(){},
eI:function eI(){},
hJ:function hJ(){},
hK:function hK(){},
is:function is(a){this.b=0
this.c=a},
ky:function(a){if(a instanceof H.bz)return a.i(0)
return"Instance of '"+H.e(H.bR(a))+"'"},
kG:function(a,b,c){var u,t,s=J.kA(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
j2:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b8(a);u.u();)t.push(u.gG(u))
if(b)return t
return J.iZ(t)},
j5:function(a){var u,t=a.length,s=P.j3(0,null,t)
if(typeof s!=="number")return s.a2()
u=s<t
return H.kT(u?C.a.dl(a,0,s):a)},
kV:function(a){return new H.f0(a,H.kC(a,!1,!0,!1,!1,!1))},
jH:function(a,b,c){var u=J.b8(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gG(u))
while(u.u())}else{a+=H.e(u.gG(u))
for(;u.u();)a=a+c+H.e(u.gG(u))}return a},
lf:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.m){u=$.kj().b
u=u.test(b)}else u=!1
if(u)return b
t=C.y.fj(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kS(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
jq:function(a){return new P.aN(1000*a)},
iW:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ky(a)},
kp:function(a){return new P.ac(!1,null,null,a)},
iP:function(a,b,c){return new P.ac(!0,a,b,c)},
cS:function(a,b){return new P.bl(null,null,!0,a,b,"Value not in range")},
az:function(a,b,c,d,e){return new P.bl(b,c,!0,a,d,"Invalid value")},
j3:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.az(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.az(b,a,c,"end",null))
return b}return c},
jE:function(a,b){if(typeof a!=="number")return a.a2()
if(a<0)throw H.c(P.az(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.b9(b):e
return new P.eX(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hH(a)},
jM:function(a){return new P.hE(a)},
bA:function(a){return new P.eu(a)},
o:function(a){return new P.dq(a)},
jj:function(a){H.m8(a)},
b5:function b5(){},
a6:function a6(a,b){this.a=a
this.b=b},
K:function K(){},
aN:function aN(a){this.a=a},
eF:function eF(){},
eG:function eG(){},
bd:function bd(){},
cP:function cP(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eX:function eX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hH:function hH(a){this.a=a},
hE:function hE(a){this.a=a},
ha:function ha(a){this.a=a},
eu:function eu(a){this.a=a},
fJ:function fJ(){},
cZ:function cZ(){},
eA:function eA(a){this.a=a},
dq:function dq(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=b},
u:function u(){},
i:function i(){},
eZ:function eZ(){},
aV:function aV(){},
bJ:function bJ(){},
aW:function aW(){},
a3:function a3(){},
Z:function Z(){},
r:function r(){},
aD:function aD(a){this.a=a},
lT:function(a){var u,t=J.U(a)
if(!!t.$iaP){u=t.gcT(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e_(a.data,a.height,a.width)},
lS:function(a){if(a instanceof P.e_)return{data:a.a,height:a.b,width:a.c}
return a},
aH:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
lR:function(a){var u={}
a.I(0,new P.iz(u))
return u},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
eP:function eP(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eR:function eR(){},
id:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ih:function ih(){},
a2:function a2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
f4:function f4(){},
aX:function aX(){},
fH:function fH(){},
fO:function fO(){},
hf:function hf(){},
j:function j(){},
aY:function aY(){},
ht:function ht(){},
dv:function dv(){},
dw:function dw(){},
dG:function dG(){},
dH:function dH(){},
dR:function dR(){},
dS:function dS(){},
dY:function dY(){},
dZ:function dZ(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(a){this.a=a},
el:function el(){},
ba:function ba(){},
fI:function fI(){},
di:function di(){},
cU:function cU(){},
h9:function h9(){},
dN:function dN(){},
dO:function dO(){}},W={
iS:function(){var u=document.createElement("canvas")
return u},
iV:function(a){return"wheel"},
ic:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jQ:function(a,b,c,d){var u=W.ic(W.ic(W.ic(W.ic(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.jT(new W.ia(c),W.h)
if(u!=null&&!0)J.kl(a,b,u,!1)
return new W.i9(a,b,u,!1)},
jT:function(a,b){var u=$.aa
if(u===C.e)return a
return u.cO(a,b)},
k:function k(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
cl:function cl(){},
bb:function bb(){},
aM:function aM(){},
ew:function ew(){},
G:function G(){},
bB:function bB(){},
ex:function ex(){},
a5:function a5(){},
ae:function ae(){},
ey:function ey(){},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
ct:function ct(){},
cu:function cu(){},
eD:function eD(){},
eE:function eE(){},
i7:function i7(a,b){this.a=a
this.b=b},
S:function S(){},
h:function h(){},
d:function d(){},
aq:function aq(){},
eN:function eN(){},
eO:function eO(){},
eS:function eS(){},
ar:function ar(){},
eV:function eV(){},
bE:function bE(){},
aP:function aP(){},
bF:function bF(){},
bh:function bh(){},
f9:function f9(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
fw:function fw(a){this.a=a},
at:function at(){},
fx:function fx(){},
ah:function ah(){},
i6:function i6(a){this.a=a},
C:function C(){},
cO:function cO(){},
aw:function aw(){},
fL:function fL(){},
fT:function fT(){},
fU:function fU(a){this.a=a},
fW:function fW(){},
aA:function aA(){},
h6:function h6(){},
aB:function aB(){},
h7:function h7(){},
aC:function aC(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
aj:function aj(){},
aE:function aE(){},
ak:function ak(){},
hi:function hi(){},
hj:function hj(){},
ho:function ho(){},
aF:function aF(){},
bm:function bm(){},
hr:function hr(){},
hs:function hs(){},
aZ:function aZ(){},
hI:function hI(){},
i_:function i_(){},
b3:function b3(){},
c_:function c_(){},
i8:function i8(){},
dk:function dk(){},
ib:function ib(){},
dD:function dD(){},
im:function im(){},
io:function io(){},
i9:function i9(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ia:function ia(a){this.a=a},
I:function I(){},
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
c4:function c4(){},
c5:function c5(){},
dL:function dL(){},
dM:function dM(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
c7:function c7(){},
c8:function c8(){},
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
T:function(a){var u=new K.fX()
u.du(a)
return u},
ee:function ee(){},
cy:function cy(){},
cH:function cH(){},
av:function av(){this.a=null},
fX:function fX(){this.a=null}},L={d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},d6:function d6(a){this.b=a
this.c=null},hp:function hp(){var _=this
_.d=_.c=_.b=_.a=null},d8:function d8(a){this.b=a
this.a=this.c=null}},O={
iT:function(a){var u=new O.an([a])
u.aX(a)
return u},
an:function an(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bL:function bL(){this.b=this.a=null},
cI:function cI(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(){},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
fe:function fe(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
ff:function ff(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
af:function af(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fh:function fh(){var _=this
_.e=_.d=_.c=_.b=null},
fi:function fi(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fj:function fj(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cW:function cW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){},
jZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.kY("Test 046"),b0=W.iS()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.r]
a9.fa(H.b(["buttons"],u))
a9.cJ(H.b(["Test of the fullscreen function of the ThreeDart."],u))
a9.cJ(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
s=E.l1(t,!0,!0,!0,!1)
r=X.iX(a6)
r.scR(0,!1)
q=E.jr()
q.sbb(0,F.mc())
a9=s.f
p=a9.a
o=p.createTexture()
p.bindTexture(a7,o)
p.texParameteri(a7,10242,10497)
p.texParameteri(a7,10243,10497)
p.texParameteri(a7,10241,9729)
p.texParameteri(a7,10240,9729)
p.bindTexture(a7,a6)
n=new T.hk()
n.a=0
n.b=o
n.c=!1
n.d=0
a9.ax(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a9.ax(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a9.ax(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a9.ax(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a9.ax(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a9.ax(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.cI()
a9=O.iT(V.as)
m.e=a9
a9.aD(m.ge2(),m.ge4())
a9=new O.af(m,"emission")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.f=a9
a9=new O.af(m,"ambient")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.r=a9
a9=new O.af(m,"diffuse")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.x=a9
a9=new O.af(m,"invDiffuse")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.y=a9
a9=new O.fj(m,"specular")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
a9.ch=100
m.z=a9
a9=new O.ff(m,"bump")
a9.c=new A.R(!1,!1,!1)
m.Q=a9
m.ch=null
a9=new O.af(m,"reflect")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
m.cx=a9
a9=new O.fi(m,"refract")
a9.c=new A.R(!1,!1,!1)
a9.f=new V.N(0,0,0)
a9.ch=1
m.cy=a9
a9=new O.fe(m,"alpha")
a9.c=new A.R(!1,!1,!1)
a9.f=1
m.db=a9
a9=new D.cE()
a9.aX(D.X)
a9.e=H.b([],[D.em])
a9.f=H.b([],[D.bc])
a9.r=H.b([],[D.fM])
a9.x=H.b([],[D.h8])
a9.z=a9.y=null
a9.c9(a9.ge0(),a9.geB(),a9.geF())
m.dx=a9
p=new O.fh()
p.b=new V.ao(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=a9.y
a9=p==null?a9.y=D.A():p
a9.l(0,m.geW())
a9=m.dx
p=a9.z
a9=p==null?a9.z=D.A():p
p=m.gbs()
a9.l(0,p)
m.fr=null
a9=m.dx
l=V.j8()
k=U.jp(V.jw(V.jC(),l,new V.y(-1,-1,-1)))
j=new V.N(1,1,1)
i=new D.bc()
i.c=new V.N(1,1,1)
i.a=V.l4()
i.d=V.j8()
i.e=V.l3()
h=i.b
i.b=k
k.gm().l(0,i.gdw())
k=new D.x("mover",h,i.b)
k.b=!0
i.ah(k)
if(!i.c.n(0,j)){h=i.c
i.c=j
k=new D.x("color",h,j)
k.b=!0
i.ah(k)}a9.l(0,i)
a9=m.r
a9.sae(0,new V.N(0.1,0.1,0.1))
a9=m.x
a9.sae(0,new V.N(0.1,0.1,0.1))
a9=m.z
a9.sae(0,new V.N(1,1,1))
a9=m.z
a9.bx(new A.R(!0,!1,!1))
a9.cE(10)
a9=m.ch
if(a9!==n){if(a9!=null)a9.gm().E(0,p)
h=m.ch
m.ch=n
n.gm().l(0,p)
a9=new D.x("environment",h,m.ch)
a9.b=!0
m.U(a9)}a9=m.cy
a9.bx(new A.R(!0,!1,!1))
a9.cD(0.6)
a9=m.cy
a9.sae(0,new V.N(1,1,1))
a9=m.cx
a9.sae(0,new V.N(0.6,0.6,0.6))
g=new U.bD()
g.aX(U.a1)
g.aD(g.gdZ(),g.geD())
g.e=null
g.f=V.bj()
g.r=0
a9=s.x
p=new U.dd()
k=U.iU()
k.sc7(0,!0)
k.sbW(6.283185307179586)
k.sbZ(0)
k.sY(0,0)
k.sbX(100)
k.sO(0)
k.sbI(0.5)
p.b=k
i=p.gav()
k.gm().l(0,i)
k=U.iU()
k.sc7(0,!0)
k.sbW(6.283185307179586)
k.sbZ(0)
k.sY(0,0)
k.sbX(100)
k.sO(0)
k.sbI(0.5)
p.c=k
k.gm().l(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.a7(!1,!1,!1)
h=p.d
p.d=f
k=new D.x(a8,h,f)
k.b=!0
p.L(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.x("invertX",k,!1)
k.b=!0
p.L(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.x("invertY",k,!1)
k.b=!0
p.L(k)}p.aJ(a9)
g.l(0,p)
a9=s.x
p=new U.dc()
k=U.iU()
k.sc7(0,!0)
k.sbW(6.283185307179586)
k.sbZ(0)
k.sY(0,0)
k.sbX(100)
k.sO(0)
k.sbI(0.2)
p.b=k
k.gm().l(0,p.gav())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.a7(!0,!1,!1)
h=p.c
p.c=f
k=new D.x(a8,h,f)
k.b=!0
p.L(k)
p.aJ(a9)
g.l(0,p)
a9=s.x
p=new U.de()
p.c=0.01
p.e=p.d=0
f=new X.a7(!1,!1,!1)
p.b=f
k=new D.x(a8,a6,f)
k.b=!0
p.L(k)
p.aJ(a9)
g.l(0,p)
g.l(0,U.jp(V.ag(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.jz(g)
d=new M.cq()
d.a=!0
a9=E.jr()
c=F.j4()
p=c.a
k=new V.y(-1,-1,1)
k=k.q(0,Math.sqrt(k.A(k)))
b=p.b2(new V.ay(1,2,4,6),V.es(255,0,0),new V.O(-1,-1,0),new V.V(0,1),k,a6)
k=c.a
p=new V.y(1,-1,1)
p=p.q(0,Math.sqrt(p.A(p)))
a=k.b2(new V.ay(0,3,4,6),V.es(0,0,255),new V.O(1,-1,0),new V.V(1,1),p,a6)
p=c.a
k=new V.y(1,1,1)
k=k.q(0,Math.sqrt(k.A(k)))
a0=p.b2(new V.ay(0,2,5,6),V.es(0,128,0),new V.O(1,1,0),new V.V(1,0),k,a6)
k=c.a
p=V.ax()
i=new V.y(-1,1,1)
i=i.q(0,Math.sqrt(i.A(i)))
a1=k.b2(new V.ay(0,2,4,7),V.es(255,255,0),new V.O(-1,1,0),p,i,a6)
c.d.fc(H.b([b,a,a0,a1],[F.b1]))
c.al()
a9.sbb(0,c)
d.e=a9
d.saK(a6)
d.saT(0,a6)
d.saU(a6)
a9=new O.cW()
a9.b=1.0471975511965976
a9.d=new V.N(1,1,1)
h=a9.c
a9.c=n
n.gm().l(0,a9.gbs())
p=new D.x("boxTexture",h,a9.c)
p.b=!0
a9.U(p)
d.saU(a9)
d.saT(0,r)
d.saK(e)
a2=new M.cv()
a2.a=!0
a9=O.iT(E.ap)
a2.e=a9
a9.aD(a2.ge8(),a2.gea())
a2.y=a2.x=a2.r=a2.f=null
a3=X.iX(a6)
a2.saK(a6)
a2.saT(0,a3)
a2.saU(a6)
a2.saK(e)
a2.saU(m)
a2.saT(0,r)
a2.e.l(0,q)
a2.c.scR(0,!1)
a9=M.a9
p=H.b([d,a2],[a9])
k=new M.co()
k.aX(a9)
k.e=!0
k.f=!1
k.r=null
k.aD(k.geH(),k.geJ())
k.b1(0,p)
a9=s.d
if(a9!==k){if(a9!=null)a9.gm().E(0,s.gcj())
s.d=k
k.gm().l(0,s.gcj())
s.ck()}t=u.getElementById("buttons")
a4=u.createElement("button")
a4.textContent="Fullscreen"
W.P(a4,"click",new O.iH(s),!1)
J.kn(t).l(0,a4)
V.mb(s)},
iH:function iH(a){this.a=a}},E={
jr:function(){var u,t=new E.ap()
t.a=""
t.b=!0
u=O.iT(E.ap)
t.y=u
u.aD(t.gfF(),t.gfI())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbb(0,null)
return t},
kW:function(a,b){var u=new E.fP(a)
u.dt(a,b)
return u},
l1:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibb)return E.jI(a,!0,!0,!0,!1)
u=W.iS()
t=u.style
t.width="100%"
t.height="100%"
s.gbF(a).l(0,u)
return E.jI(u,!0,!0,!0,!1)},
jI:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d3(),p=C.f.c8(a,"webgl2",P.kF(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.o("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kW(p,a)
u=new T.hl(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.db(a)
t=new X.f3()
t.c=new X.a7(!1,!1,!1)
t.d=P.ju(P.u)
u.b=t
t=new X.fy(u)
t.f=0
t.r=V.ax()
t.x=V.ax()
t.ch=t.Q=1
u.c=t
t=new X.fa(u)
t.r=0
t.x=V.ax()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hq(u)
t.f=V.ax()
t.r=V.ax()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d0,P.Z]])
u.z=t
s=document
t.push(W.P(s,"contextmenu",u.gec(),!1))
u.z.push(W.P(a,"focus",u.gei(),!1))
u.z.push(W.P(a,"blur",u.ge6(),!1))
u.z.push(W.P(s,"keyup",u.gem(),!1))
u.z.push(W.P(s,"keydown",u.gek(),!1))
u.z.push(W.P(a,"mousedown",u.geq(),!1))
u.z.push(W.P(a,"mouseup",u.gev(),!1))
u.z.push(W.P(a,r,u.ges(),!1))
t=u.z
W.iV(a)
W.iV(a)
t.push(W.P(a,W.iV(a),u.gex(),!1))
u.z.push(W.P(s,r,u.gee(),!1))
u.z.push(W.P(s,"mouseup",u.geg(),!1))
u.z.push(W.P(s,"pointerlockchange",u.gez(),!1))
u.z.push(W.P(a,"touchstart",u.geP(),!1))
u.z.push(W.P(a,"touchend",u.geL(),!1))
u.z.push(W.P(a,"touchmove",u.geN(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a6(Date.now(),!1)
q.db=0
q.cB()
return q},
en:function en(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fP:function fP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
d3:function d3(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hn:function hn(a){this.a=a}},Z={
j9:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ca(c)),35044)
a.bindBuffer(b,null)
return new Z.df(b,u)},
a8:function(a){return new Z.b2(a)},
df:function df(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dg:function dg(a){this.a=a},
by:function by(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
A:function(){var u=new D.be()
u.d=0
return u},
eq:function eq(){},
be:function be(){var _=this
_.d=_.c=_.b=_.a=null},
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
Q:function Q(){this.b=null},
aQ:function aQ(){this.b=null},
aR:function aR(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
em:function em(){},
bc:function bc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
X:function X(){},
cE:function cE(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
fM:function fM(){},
h8:function h8(){}},X={cn:function cn(a,b){this.a=a
this.b=b},cD:function cD(a,b){this.a=a
this.b=b},f3:function f3(){var _=this
_.d=_.c=_.b=_.a=null},cF:function cF(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fa:function fa(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},au:function au(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fy:function fy(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bM:function bM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fN:function fN(){},d7:function d7(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hq:function hq(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},db:function db(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iX:function(a){var u=new X.eU(),t=new V.ao(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jG
if(t==null){t=V.jF(0,0,1,1)
$.jG=t}u.r=t
return u},
jz:function(a){var u,t,s=new X.cQ()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.gdC())
t=new D.x("mover",u,s.b)
t.b=!0
s.ac(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.z().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.ac(t)}t=s.d
if(!(Math.abs(t-0.1)<$.z().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.ac(t)}t=s.e
if(!(Math.abs(t-2000)<$.z().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.ac(t)}return s},
iR:function iR(){},
eU:function eU(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eW:function eW(){this.b=this.a=null},
cQ:function cQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(){}},V={
es:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ao(u,t,s,1)},
mi:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dh(a-b,u)
return(a<0?a+u:a)+b},
E:function(a,b,c){if(a==null)return C.b.a7("null",c)
return C.b.a7(C.d.de(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bt:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.E(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a7(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
ji:function(a){return C.d.h2(Math.pow(2,C.B.bR(Math.log(H.lQ(a))/Math.log(2))))},
bj:function(){var u=$.jx
return u==null?$.jx=V.ag(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ag:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jw:function(a,b,c){var u=c.q(0,Math.sqrt(c.A(c))),t=b.aL(u),s=t.q(0,Math.sqrt(t.A(t))),r=u.aL(s),q=new V.y(a.a,a.b,a.c),p=s.M(0).A(q),o=r.M(0).A(q),n=u.M(0).A(q)
return V.ag(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ax:function(){var u=$.jB
return u==null?$.jB=new V.V(0,0):u},
jC:function(){var u=$.ai
return u==null?$.ai=new V.O(0,0,0):u},
jF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cT(a,b,c,d)},
bZ:function(){var u=$.jP
return u==null?$.jP=new V.y(0,0,0):u},
l3:function(){var u=$.hL
return u==null?$.hL=new V.y(-1,0,0):u},
j8:function(){var u=$.hM
return u==null?$.hM=new V.y(0,1,0):u},
l4:function(){var u=$.hN
return u==null?$.hN=new V.y(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
cK:function cK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
as:function as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
D:function D(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function(a){P.l2(C.z,new V.iJ(a))},
kY:function(a){var u=new V.h1()
u.dv(a,!0)
return u},
iJ:function iJ(a){this.a=a},
h1:function h1(){this.b=this.a=null},
h3:function h3(a){this.a=a},
h2:function h2(a){this.a=a}},U={
iU:function(){var u=new U.et()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jp:function(a){var u=new U.cp()
u.a=a
return u},
et:function et(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bD:function bD(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
dc:function dc(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={co:function co(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cq:function cq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cv:function cv(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a9:function a9(){}},A={
kI:function(a,b){var u=a.aO,t=new A.fd(b,u)
t.cg(b,u)
t.ds(a,b)
return t},
kJ:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gab(a2)+a3.gab(a3)+a4.gab(a4)+a5.gab(a5)+a6.gab(a6)+a7.gab(a7)+a8.gab(a8)+a9.gab(a9)+b0.gab(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.ab()
if(j){u=$.aL()
e=new Z.b2(e.a|u.a)}if(i){u=$.aK()
e=new Z.b2(e.a|u.a)}if(h){u=$.aJ()
e=new Z.b2(e.a|u.a)}return new A.fg(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
iw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ix:function(a,b,c){var u
A.iw(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eb(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lp:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iw(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
ll:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ix(b,t,"ambient")
b.a+="\n"},
ln:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ix(b,t,"diffuse")
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
lq:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ix(b,t,"invDiffuse")
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
lw:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ix(b,t,"specular")
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
ls:function(a,b){var u,t,s
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
lu:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iw(b,t,"reflect")
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
lv:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iw(b,t,"refract")
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
lm:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eb(t)
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
lo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eb(t)
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
r=[P.r]
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
lt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eb(t)
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
lx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eb(t)
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
lr:function(a,b){var u,t
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
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ly:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aD("")
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
A.lp(a,j)
A.ll(a,j)
A.ln(a,j)
A.lq(a,j)
A.lw(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lu(a,j)
A.lv(a,j)}A.ls(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lm(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lo(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lt(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.lx(a,q[o],j)
A.lr(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.at(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lz:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b3+"];\n"
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
lB:function(a,b){var u
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
lA:function(a,b){var u
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
lD:function(a,b){var u,t
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
lE:function(a,b){var u,t
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
lC:function(a,b){var u
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
lF:function(a,b){var u
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
eb:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.at(a,1)},
j7:function(a,b,c,d,e){var u=new A.hx(a,c,e)
u.f=d
P.kG(d,0,P.u)
return u},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a,b){var _=this
_.hf=_.he=_.b4=_.aO=_.b3=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hs=_.hr=_.hq=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.bJ=_.hp=_.ho=_.d2=_.hn=_.hm=_.d1=_.d0=_.hl=_.hk=_.d_=_.cZ=_.hj=_.hi=_.cY=_.hh=_.hg=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ck:function ck(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
cR:function cR(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b3=b3
_.aO=b4
_.b4=b5},
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
cV:function cV(){},
h5:function h5(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d9:function d9(){},
hC:function hC(a){this.a=a},
b_:function b_(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bn:function bn(a,b,c){this.a=a
this.c=b
this.d=c},
b0:function b0(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c9:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.iv(i)
l=F.iv(h)
k=F.mf(d,a0,new F.iu(j,F.iv(g),F.iv(f),l,m,c),b)
if(k!=null)a.bY(k)},
mc:function(){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.iK()
r=new F.iL(r,1)
t=F.j4()
F.c9(t,s,r,8,8,1,0,0,1)
F.c9(t,s,r,8,8,0,1,0,3)
F.c9(t,s,r,8,8,0,0,1,2)
F.c9(t,s,r,8,8,-1,0,0,0)
F.c9(t,s,r,8,8,0,-1,0,0)
F.c9(t,s,r,8,8,0,0,-1,3)
t.al()
t.fE(new F.hU(),new F.fF())
return t},
mf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.j4()
t=H.b([],[F.b1])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hO(g,g,new V.ao(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bH(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hO(g,g,new V.ao(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bH(d))}}u.d.fd(a+1,b+1,t)
return u},
bC:function(a,b,c){var u=new F.aO(),t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.bA(a)
u.bB(b)
u.f_(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
kD:function(a,b){var u=new F.bH(),t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.bA(a)
u.bB(b)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
j4:function(){var u=new F.fY(),t=new F.hP(u)
t.b=!1
t.c=H.b([],[F.b1])
u.a=t
t=new F.h0(u)
t.b=H.b([],[F.bP])
u.b=t
t=new F.h_(u)
t.b=H.b([],[F.bH])
u.c=t
t=new F.fZ(u)
t.b=H.b([],[F.aO])
u.d=t
u.e=null
return u},
hO:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b1(),r=new F.hX()
r.b=H.b([],[F.bP])
s.b=r
r=new F.hT()
u=[F.bH]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hQ()
u=[F.aO]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kg()
s.e=0
r=$.ab()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aL().a)!==0?e:t
s.x=(u&$.aK().a)!==0?b:t
s.y=(u&$.b6().a)!==0?f:t
s.z=(u&$.b7().a)!==0?g:t
s.Q=(u&$.kh().a)!==0?c:t
s.ch=(u&$.bu().a)!==0?i:0
s.cx=(u&$.aJ().a)!==0?a:t
return s},
iu:function iu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
aO:function aO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eM:function eM(){},
h4:function h4(){},
bH:function bH(){this.b=this.a=null},
f5:function f5(){},
hw:function hw(){},
bP:function bP(){this.a=null},
fY:function fY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(a){this.a=a
this.b=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
b1:function b1(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a},
hY:function hY(a){this.a=a},
hP:function hP(a){this.a=a
this.c=this.b=null},
hQ:function hQ(){this.d=this.c=this.b=null},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){this.c=this.b=null},
hV:function hV(){},
hU:function hU(){},
hW:function hW(){},
fF:function fF(){},
hX:function hX(){this.b=null}},T={d2:function d2(){},hk:function hk(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hl:function hl(a){var _=this
_.a=a
_.e=_.d=_.c=null},hm:function hm(a,b,c,d,e,f,g){var _=this
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
H.j0.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gH:function(a){return H.bQ(a)},
i:function(a){return"Instance of '"+H.e(H.bR(a))+"'"}}
J.f_.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ib5:1}
J.cB.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.cC.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.fK.prototype={}
J.bY.prototype={}
J.aT.prototype={
i:function(a){var u=a[$.k5()]
if(u==null)return this.dq(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aS.prototype={
c2:function(a,b){if(!!a.fixed$length)H.p(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cS(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.p(P.v("remove"))
for(u=0;u<a.length;++u)if(J.F(a[u],b)){a.splice(u,1)
return!0}return!1},
b1:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.v("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bA(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fC:function(a){return this.p(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dl:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.az(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.az(c,b,u,"end",null))
if(b===c)return H.b([],[H.aI(a,0)])
return H.b(a.slice(b,c),[H.aI(a,0)])},
gfw:function(a){if(a.length>0)return a[0]
throw H.c(H.js())},
gbT:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.js())},
aF:function(a,b){if(!!a.immutable$list)H.p(P.v("sort"))
H.l0(a,b==null?J.li():b)},
dk:function(a){return this.aF(a,null)},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.F(a[u],b))return!0
return!1},
i:function(a){return P.iY(a,"[","]")},
gN:function(a){return new J.W(a,a.length)},
gH:function(a){return H.bQ(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.v("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iP(b,u,null))
if(b<0)throw H.c(P.az(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bs(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.p(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bs(a,b))
a[b]=c},
$in:1,
$ii:1}
J.j_.prototype={}
J.W.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bG.prototype={
aA:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aG(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb5(b)
if(this.gb5(a)===u)return 0
if(this.gb5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb5:function(a){return a===0?1/a<0:a<0},
h2:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
bR:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
de:function(a,b){var u
if(b>20)throw H.c(P.az(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb5(a))return"-"+u
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
dh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dr:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cF(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cF(a,b)},
cF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.f3(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f3:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia3:1}
J.cA.prototype={$iu:1}
J.cz.prototype={}
J.bg.prototype={
bG:function(a,b){if(b<0)throw H.c(H.bs(a,b))
if(b>=a.length)H.p(H.bs(a,b))
return a.charCodeAt(b)},
bd:function(a,b){if(b>=a.length)throw H.c(H.bs(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.iP(b,null,null))
return a+b},
cc:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cS(b,null))
if(b>c)throw H.c(P.cS(b,null))
if(c>a.length)throw H.c(P.cS(c,null))
return a.substring(b,c)},
at:function(a,b){return this.cc(a,b,null)},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.x)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
aA:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aG(b))
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
gj:function(a){return a.length},
$ir:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bG(this.a,b)},
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$ai:function(){return[P.u]}}
H.n.prototype={}
H.bI.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.ea(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bA(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.bK.prototype={
gN:function(a){return new H.cG(J.b8(this.a),this.b)},
gj:function(a){return J.b9(this.a)},
D:function(a,b){return this.b.$1(J.iO(this.a,b))},
$ai:function(a,b){return[b]}}
H.eH.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cG.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.i0.prototype={
gN:function(a){return new H.i1(J.b8(this.a),this.b)}}
H.i1.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.cw.prototype={}
H.hG.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.da.prototype={}
H.hu.prototype={
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
H.fG.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f2.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hF.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iN.prototype={
$1:function(a){if(!!J.U(a).$ibd)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dP.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bz.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ce(t==null?"unknown":t)+"'"},
gh7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hh.prototype={}
H.hb.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.bw.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bw))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bQ(this.a)
else u=typeof t!=="object"?J.bv(t):H.bQ(t)
return(u^H.bQ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bR(u))+"'")}}
H.ep.prototype={
i:function(a){return this.a}}
H.fV.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gao:function(a){return new H.bi(this,[H.aI(this,0)])},
gh6:function(a){var u=this,t=H.aI(u,0)
return H.kH(new H.bi(u,[t]),new H.f1(u),t,H.aI(u,1))},
fi:function(a,b){var u=this.b
if(u==null)return!1
return this.dN(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fB(b)},
fB:function(a){var u,t,s=this.d
if(s==null)return
u=this.ct(s,J.bv(a)&0x3ffffff)
t=this.d4(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cm(u==null?o.b=o.bq():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cm(t==null?o.c=o.bq():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bq()
r=J.bv(b)&0x3ffffff
q=o.ct(s,r)
if(q==null)o.by(s,r,[o.br(b,c)])
else{p=o.d4(q,b)
if(p>=0)q[p].b=c
else q.push(o.br(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bA(u))
t=t.c}},
cm:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.by(a,b,this.br(b,c))
else u.b=c},
br:function(a,b){var u=this,t=new H.f6(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
d4:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1},
i:function(a){return P.jv(this)},
aY:function(a,b){return a[b]},
ct:function(a,b){return a[b]},
by:function(a,b,c){a[b]=c},
dQ:function(a,b){delete a[b]},
dN:function(a,b){return this.aY(a,b)!=null},
bq:function(){var u="<non-identifier-key>",t=Object.create(null)
this.by(t,u,t)
this.dQ(t,u)
return t}}
H.f1.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aI(u,1),args:[H.aI(u,0)]}}}
H.f6.prototype={}
H.bi.prototype={
gj:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.f7(u,u.r)
t.c=u.e
return t}}
H.f7.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iD.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iE.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iF.prototype={
$1:function(a){return this.a(a)}}
H.f0.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bO.prototype={}
H.cL.prototype={
gj:function(a){return a.length},
$iw:1,
$aw:function(){}}
H.bN.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]},
k:function(a,b,c){H.am(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.K]},
$aq:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]}}
H.cM.prototype={
k:function(a,b,c){H.am(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.u]},
$aq:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]}}
H.fz.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fA.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fB.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fC.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fD.prototype={
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.cN.prototype={
gj:function(a){return a.length},
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
H.c3.prototype={}
P.i3.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.i2.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i4.prototype={
$0:function(){this.a.$0()}}
P.i5.prototype={
$0:function(){this.a.$0()}}
P.dV.prototype={
dA:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.br(new P.ir(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dB:function(a,b){if(self.setTimeout!=null)self.setInterval(H.br(new P.iq(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id4:1}
P.ir.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iq.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dr(u,q)}s.c=r
t.d.$1(s)}}
P.bo.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.c6.prototype={
gG:function(a){var u=this.c
if(u==null)return this.b
return u.gG(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bo){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.b8(u)
if(!!r.$ic6){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ip.prototype={
gN:function(a){return new P.c6(this.a())}}
P.dh.prototype={}
P.d0.prototype={}
P.he.prototype={}
P.d4.prototype={}
P.it.prototype={}
P.iy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cP():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.ii.prototype={
fY:function(a){var u,t,s,r=null
try{if(C.e===$.aa){a.$0()
return}P.lH(r,r,this,a)}catch(s){u=H.ec(s)
t=H.jf(s)
P.jS(r,r,this,u,t)}},
fZ:function(a,b){var u,t,s,r=null
try{if(C.e===$.aa){a.$1(b)
return}P.lI(r,r,this,a,b)}catch(s){u=H.ec(s)
t=H.jf(s)
P.jS(r,r,this,u,t)}},
h_:function(a,b){return this.fZ(a,b,null)},
ff:function(a){return new P.ij(this,a)},
cO:function(a,b){return new P.ik(this,a,b)}}
P.ij.prototype={
$0:function(){return this.a.fY(this.b)}}
P.ik.prototype={
$1:function(a){return this.a.h_(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ie.prototype={
gN:function(a){var u=new P.dx(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dL(b)
return t}},
dL:function(a){var u=this.d
if(u==null)return!1
return this.bh(this.cs(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.ja():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.ja():t,b)}else return s.dE(0,b)},
dE:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ja()
u=s.co(b)
t=r[u]
if(t==null)r[u]=[s.be(b)]
else{if(s.bh(t,b)>=0)return!1
t.push(s.be(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eS(this.c,b)
else return this.eR(0,b)},
eR:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cs(r,b)
t=s.bh(u,b)
if(t<0)return!1
s.cH(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.be(b)
return!0},
eS:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cH(u)
delete a[b]
return!0},
cu:function(){this.r=1073741823&this.r+1},
be:function(a){var u,t=this,s=new P.ig(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cu()
return s},
cH:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cu()},
co:function(a){return J.bv(a)&1073741823},
cs:function(a,b){return a[this.co(b)]},
bh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.F(a[t].a,b))return t
return-1}}
P.ig.prototype={}
P.dx.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eY.prototype={}
P.f8.prototype={$in:1,$ii:1}
P.q.prototype={
gN:function(a){return new H.bI(a,this.gj(a))},
D:function(a,b){return this.h(a,b)},
h4:function(a,b){var u,t,s=this,r=H.b([],[H.m_(s,a,"q",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
h3:function(a){return this.h4(a,!0)},
i:function(a){return P.iY(a,"[","]")}}
P.fb.prototype={}
P.fc.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.Y.prototype={
I:function(a,b){var u,t
for(u=J.b8(this.gao(a));u.u();){t=u.gG(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.b9(this.gao(a))},
i:function(a){return P.jv(a)}}
P.il.prototype={
i:function(a){return P.iY(this,"{","}")},
D:function(a,b){var u,t,s
P.jE(b,"index")
for(u=P.lc(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
$in:1,
$ii:1}
P.dy.prototype={}
P.er.prototype={}
P.ev.prototype={}
P.eI.prototype={}
P.hJ.prototype={}
P.hK.prototype={
fj:function(a){var u,t,s,r=P.j3(0,null,a.length)
if(typeof r!=="number")return r.F()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.is(t)
if(s.dS(a,0,r)!==r)s.cI(C.b.bG(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lg(0,s.b,t.length)))}}
P.is.prototype={
cI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
if(b!==c&&(C.b.bG(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.bd(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cI(r,C.b.bd(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a6.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
aA:function(a,b){return C.c.aA(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.kw(H.kR(u)),s=P.cr(H.kP(u)),r=P.cr(H.kL(u)),q=P.cr(H.kM(u)),p=P.cr(H.kO(u)),o=P.cr(H.kQ(u)),n=P.kx(H.kN(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aN.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aN&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aA:function(a,b){return C.c.aA(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eG(),q=this.a
if(q<0)return"-"+new P.aN(0-q).i(0)
u=r.$1(C.c.Z(q,6e7)%60)
t=r.$1(C.c.Z(q,1e6)%60)
s=new P.eF().$1(q%1e6)
return""+C.c.Z(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
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
P.cP.prototype={
i:function(a){return"Throw of null."}}
P.ac.prototype={
gbg:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbf:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbg()+o+u
if(!q.a)return t
s=q.gbf()
r=P.iW(q.b)
return t+s+": "+r}}
P.bl.prototype={
gbg:function(){return"RangeError"},
gbf:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eX.prototype={
gbg:function(){return"RangeError"},
gbf:function(){var u,t=this.b
if(typeof t!=="number")return t.a2()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hE.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ha.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iW(u)+"."}}
P.fJ.prototype={
i:function(a){return"Out of Memory"},
$ibd:1}
P.cZ.prototype={
i:function(a){return"Stack Overflow"},
$ibd:1}
P.eA.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dq.prototype={
i:function(a){return"Exception: "+this.a}}
P.eT.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.cc(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gN(this)
for(u=0;t.u();)++u
return u},
D:function(a,b){var u,t,s
P.jE(b,"index")
for(u=this.gN(this),t=0;u.u();){s=u.gG(u)
if(b===t)return s;++t}throw H.c(P.J(b,this,"index",null,t))},
i:function(a){return P.kz(this,"(",")")}}
P.eZ.prototype={}
P.aV.prototype={$in:1,$ii:1}
P.bJ.prototype={}
P.aW.prototype={
gH:function(a){return P.Z.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gH:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.e(H.bR(this))+"'"},
toString:function(){return this.i(this)}}
P.r.prototype={}
P.aD.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.ed.prototype={
gj:function(a){return a.length}}
W.ef.prototype={
i:function(a){return String(a)}}
W.eg.prototype={
i:function(a){return String(a)}}
W.cl.prototype={}
W.bb.prototype={
c8:function(a,b,c){if(c!=null)return a.getContext(b,P.lR(c))
return a.getContext(b)},
dg:function(a,b){return this.c8(a,b,null)},
$ibb:1}
W.aM.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bB.prototype={
gj:function(a){return a.length}}
W.ex.prototype={}
W.a5.prototype={}
W.ae.prototype={}
W.ey.prototype={
gj:function(a){return a.length}}
W.ez.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
i:function(a){return String(a)}}
W.ct.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a2,P.a3]]},
$iw:1,
$aw:function(){return[[P.a2,P.a3]]},
$aq:function(){return[[P.a2,P.a3]]},
$ii:1,
$ai:function(){return[[P.a2,P.a3]]}}
W.cu.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gas(a))+" x "+H.e(this.gan(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
return!!u.$ia2&&a.left===u.gb6(b)&&a.top===u.gb9(b)&&this.gas(a)===u.gas(b)&&this.gan(a)===u.gan(b)},
gH:function(a){return W.jQ(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gas(a)),C.d.gH(this.gan(a)))},
gcP:function(a){return a.bottom},
gan:function(a){return a.height},
gb6:function(a){return a.left},
gc5:function(a){return a.right},
gb9:function(a){return a.top},
gas:function(a){return a.width},
$ia2:1,
$aa2:function(){return[P.a3]}}
W.eD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.r]},
$iw:1,
$aw:function(){return[P.r]},
$aq:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]}}
W.eE.prototype={
gj:function(a){return a.length}}
W.i7.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.h3(this)
return new J.W(u,u.length)},
$an:function(){return[W.S]},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]}}
W.S.prototype={
gbF:function(a){return new W.i7(a,a.children)},
gcS:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a2()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a2()
if(r<0)r=-r*0
return new P.a2(u,t,s,r,[P.a3])},
i:function(a){return a.localName},
$iS:1}
W.h.prototype={$ih:1}
W.d.prototype={
fb:function(a,b,c,d){if(c!=null)this.dF(a,b,c,!1)},
dF:function(a,b,c,d){return a.addEventListener(b,H.br(c,1),!1)}}
W.aq.prototype={$iaq:1}
W.eN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aq]},
$iw:1,
$aw:function(){return[W.aq]},
$aq:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]}}
W.eO.prototype={
gj:function(a){return a.length}}
W.eS.prototype={
gj:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.eV.prototype={
gj:function(a){return a.length}}
W.bE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$iw:1,
$aw:function(){return[W.C]},
$aq:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.aP.prototype={$iaP:1,
gcT:function(a){return a.data}}
W.bF.prototype={$ibF:1}
W.bh.prototype={$ibh:1}
W.f9.prototype={
i:function(a){return String(a)}}
W.fs.prototype={
gj:function(a){return a.length}}
W.ft.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.I(a,new W.fu(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.r,null]}}
W.fu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fv.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.I(a,new W.fw(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.r,null]}}
W.fw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.at]},
$iw:1,
$aw:function(){return[W.at]},
$aq:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]}}
W.ah.prototype={$iah:1}
W.i6.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cx(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.C]},
$aq:function(){return[W.C]},
$ai:function(){return[W.C]}}
W.C.prototype={
fW:function(a,b){var u,t
try{u=a.parentNode
J.kk(u,b,a)}catch(t){H.ec(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dn(a):u},
eU:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$iw:1,
$aw:function(){return[W.C]},
$aq:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.aw.prototype={$iaw:1,
gj:function(a){return a.length}}
W.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aw]},
$iw:1,
$aw:function(){return[W.aw]},
$aq:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]}}
W.fT.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.I(a,new W.fU(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.r,null]}}
W.fU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fW.prototype={
gj:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aA]},
$iw:1,
$aw:function(){return[W.aA]},
$aq:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aB]},
$iw:1,
$aw:function(){return[W.aB]},
$aq:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gj:function(a){return a.length}}
W.hc.prototype={
h:function(a,b){return a.getItem(b)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.b([],[P.r])
this.I(a,new W.hd(u))
return u},
gj:function(a){return a.length},
$aY:function(){return[P.r,P.r]}}
W.hd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aj.prototype={$iaj:1}
W.aE.prototype={$iaE:1}
W.ak.prototype={$iak:1}
W.hi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ak]},
$iw:1,
$aw:function(){return[W.ak]},
$aq:function(){return[W.ak]},
$ii:1,
$ai:function(){return[W.ak]}}
W.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$iw:1,
$aw:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.ho.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bm.prototype={$ibm:1}
W.hr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aF]},
$iw:1,
$aw:function(){return[W.aF]},
$aq:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.hs.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={}
W.hI.prototype={
i:function(a){return String(a)}}
W.i_.prototype={
gj:function(a){return a.length}}
W.b3.prototype={
gfn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib3:1}
W.c_.prototype={
eV:function(a,b){return a.requestAnimationFrame(H.br(b,1))},
dR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.G]},
$iw:1,
$aw:function(){return[W.G]},
$aq:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
return!!u.$ia2&&a.left===u.gb6(b)&&a.top===u.gb9(b)&&a.width===u.gas(b)&&a.height===u.gan(b)},
gH:function(a){return W.jQ(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gan:function(a){return a.height},
gas:function(a){return a.width}}
W.ib.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ar]},
$iw:1,
$aw:function(){return[W.ar]},
$aq:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]}}
W.dD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.C]},
$iw:1,
$aw:function(){return[W.C]},
$aq:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]}}
W.im.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$iw:1,
$aw:function(){return[W.aC]},
$aq:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]}}
W.io.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aj]},
$iw:1,
$aw:function(){return[W.aj]},
$aq:function(){return[W.aj]},
$ii:1,
$ai:function(){return[W.aj]}}
W.i9.prototype={}
W.ia.prototype={
$1:function(a){return this.a.$1(a)}}
W.I.prototype={
gN:function(a){return new W.cx(a,this.gj(a))}}
W.cx.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ch(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
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
W.c4.prototype={}
W.c5.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.c7.prototype={}
W.c8.prototype={}
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
P.e_.prototype={$iaP:1,
gcT:function(a){return this.a}}
P.iz.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eP.prototype={
gaZ:function(){var u=this.b,t=H.jX(u,"q",0)
return new H.bK(new H.i0(u,new P.eQ(),[t]),new P.eR(),[t,W.S])},
k:function(a,b,c){var u=this.gaZ()
J.ko(u.b.$1(J.iO(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.b9(this.gaZ().a)},
h:function(a,b){var u=this.gaZ()
return u.b.$1(J.iO(u.a,b))},
gN:function(a){var u=P.j2(this.gaZ(),!1,W.S)
return new J.W(u,u.length)},
$an:function(){return[W.S]},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]}}
P.eQ.prototype={
$1:function(a){return!!J.U(a).$iS}}
P.eR.prototype={
$1:function(a){return H.l(a,"$iS")}}
P.ih.prototype={
gc5:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
return u+t},
gcP:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ia2){t=q.a
if(t==u.gb6(b)){s=q.b
if(s==u.gb9(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gc5(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gcP(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.bv(t),r=u.b,q=J.bv(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.t(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.t(t)
t=C.c.gH(r+t)
return P.lb(P.id(P.id(P.id(P.id(0,s),q),p),t))}}
P.a2.prototype={
gb6:function(a){return this.a},
gb9:function(a){return this.b},
gas:function(a){return this.c},
gan:function(a){return this.d}}
P.aU.prototype={$iaU:1}
P.f4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aU]},
$aq:function(){return[P.aU]},
$ii:1,
$ai:function(){return[P.aU]}}
P.aX.prototype={$iaX:1}
P.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aX]},
$aq:function(){return[P.aX]},
$ii:1,
$ai:function(){return[P.aX]}}
P.fO.prototype={
gj:function(a){return a.length}}
P.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.r]},
$aq:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]}}
P.j.prototype={
gbF:function(a){return new P.eP(a,new W.i6(a))}}
P.aY.prototype={$iaY:1}
P.ht.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aY]},
$aq:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]}}
P.dv.prototype={}
P.dw.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.ei.prototype={
gj:function(a){return a.length}}
P.ej.prototype={
h:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gao:function(a){var u=H.b([],[P.r])
this.I(a,new P.ek(u))
return u},
gj:function(a){return a.size},
$aY:function(){return[P.r,null]}}
P.ek.prototype={
$2:function(a,b){return this.a.push(a)}}
P.el.prototype={
gj:function(a){return a.length}}
P.ba.prototype={}
P.fI.prototype={
gj:function(a){return a.length}}
P.di.prototype={}
P.cU.prototype={
h0:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$iaP)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.lS(g))
return}if(!!t.$ibF)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kp("Incorrect number or type of arguments"))}}
P.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.J(b,a,null,null,null))
return P.aH(a.item(b))},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bJ,,,]]},
$aq:function(){return[[P.bJ,,,]]},
$ii:1,
$ai:function(){return[[P.bJ,,,]]}}
P.dN.prototype={}
P.dO.prototype={}
K.ee.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"}}
K.cy.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cH.prototype={}
K.av.prototype={
aB:function(a,b){return!this.dm(0,b)},
i:function(a){return"!["+this.cd(0)+"]"}}
K.fX.prototype={
du:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
u=P.u
t=new H.H([u,P.b5])
for(s=new H.bI(a,a.gj(a));s.u();)t.k(0,s.d,!0)
r=P.j2(new H.bi(t,[u]),!0,u)
C.a.dk(r)
this.a=r},
aB:function(a,b){return C.a.X(this.a,b)},
i:function(a){return P.j5(this.a)}}
L.d_.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.d8(this.a.K(0,b))
r.a=H.b([],[K.cH])
r.c=!1
this.c.push(r)
return r},
fv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
cG:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.X(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bi(n,[H.aI(n,0)]),n=n.gN(n);n.u();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.X(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.d5.prototype={
i:function(a){var u=H.k2(this.b,"\n","\\n"),t=H.k2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.d6.prototype={
i:function(a){return this.b}}
L.hp.prototype={
K:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d_(this,b)
u.c=H.b([],[L.d8])
this.a.k(0,b,u)}return u},
aV:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.d6(a)
u=P.r
t.c=new H.H([u,u])
this.b.k(0,a,t)}return t},
df:function(a){return this.h5(a)},
h5:function(a){var u=this
return P.lk(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$df(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.c2(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.fv(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.j5(d)
throw H.c(P.o("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.v("removeRange"))
P.j3(0,m,d.length)
d.splice(0,m-0)
C.a.b1(c,d)
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
if(g.d!=null){j=P.j5(e)
i=g.d
h=i.c.h(0,j)
p=new L.d5(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.X(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.l9()
case 1:return P.la(q)}}},L.d5)},
i:function(a){var u,t=new P.aD(""),s=this.d
if(s!=null)t.a=s.cG()+"\n"
for(s=this.a,s=s.gh6(s),s=new H.cG(J.b8(s.a),s.b);s.u();){u=s.a
if(u!=this.d)t.a+=u.cG()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.d8.prototype={
i:function(a){return this.b.b+": "+this.cd(0)}}
O.an.prototype={
aX:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c9:function(a,b,c){this.b=b
this.c=a},
aD:function(a,b){return this.c9(a,null,b)},
cz:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.W(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.jX(s,"an",0)]
if(s.cz(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.b([b],r))}},
b1:function(a,b){var u,t
if(this.cz(b)){u=this.a
t=u.length
C.a.b1(u,b)
this.ci(t,b)}},
$ii:1}
O.bL.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
au:function(){var u=this.b
if(u!=null)u.w(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gbT(u)
else return V.bj()},
b8:function(a){var u=this.a
if(a==null)u.push(V.bj())
else u.push(a)
this.au()},
ap:function(){var u=this.a
if(u.length>0){u.pop()
this.au()}}}
E.en.prototype={}
E.ap.prototype={
sbb:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().E(0,s.gd9())
u=s.c
if(u!=null)u.gm().l(0,s.gd9())
t=new D.x("shape",r,s.c)
t.b=!0
s.b7(t)}},
aa:function(a,b){var u
for(u=this.y.a,u=new J.W(u,u.length);u.u();)u.d.aa(0,b)},
a4:function(a){var u,t=this,s=a.dx
s.a.push(s.gV(s))
s.au()
a.c1(t.f)
s=a.dy
u=(s&&C.a).gbT(s)
if(u!=null&&t.d!=null)u.dc(a,t)
for(s=t.y.a,s=new J.W(s,s.length);s.u();)s.d.a4(a)
a.c0()
a.dx.ap()},
b7:function(a){var u=this.z
if(u!=null)u.w(a)},
W:function(){return this.b7(null)},
da:function(a){this.e=null
this.b7(a)},
fK:function(){return this.da(null)},
d8:function(a){this.b7(a)},
fH:function(){return this.d8(null)},
fG:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd7(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.be()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
fJ:function(a,b){var u,t
for(u=b.gN(b),t=this.gd7();u.u();)u.gG(u).gm().E(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fP.prototype={
dt:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bL()
t=[V.as]
u.a=H.b([],t)
u.gm().l(0,new E.fQ(s))
s.cy=u
u=new O.bL()
u.a=H.b([],t)
u.gm().l(0,new E.fR(s))
s.db=u
u=new O.bL()
u.a=H.b([],t)
u.gm().l(0,new E.fS(s))
s.dx=u
u=H.b([],[O.d1])
s.dy=u
u.push(null)
s.fr=new H.H([P.r,A.cV])},
gfT:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.v(0,u.gV(u))
s=u}return s},
c1:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbT(u):a)},
c0:function(){var u=this.dy
if(u.length>1)u.pop()},
cK:function(a){var u=a.b
if(u.length===0)throw H.c(P.o("May not cache a shader with no name."))
if(this.fr.fi(0,u))throw H.c(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.fQ.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fR.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fS.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d3.prototype={
cl:function(a){this.dd()},
ck:function(){return this.cl(null)},
gfz:function(){var u,t=this,s=Date.now(),r=C.c.Z(P.jq(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
cB:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.t(r)
u=C.d.bR(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.d.bR(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jJ(C.h,s.gfX())}},
dd:function(){if(!this.cx){this.cx=!0
var u=window
C.p.dR(u)
C.p.eV(u,W.jT(new E.hn(this),P.a3))}},
fV:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cB()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.jq(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.au()
r=s.db
C.a.sj(r.a,0)
r.au()
r=s.dx
C.a.sj(r.a,0)
r.au()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a4(p.e)}}catch(q){u=H.ec(q)
t=H.jf(q)
P.jj("Error: "+H.e(u))
P.jj("Stack: "+H.e(t))
throw H.c(u)}}}
E.hn.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fV()}}}
Z.df.prototype={}
Z.cm.prototype={
T:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ec(s)
t=P.o('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dg.prototype={}
Z.by.prototype={
am:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
T:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].T(a)},
ar:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a4:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bf.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bR(this.c))+"'")+"]"}}
Z.b2.prototype={
gcb:function(a){var u=this.a,t=(u&$.ab().a)!==0?3:0
if((u&$.aL().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=3
if((u&$.b6().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cf().a)!==0)t+=3
if((u&$.cg().a)!==0)t+=4
if((u&$.bu().a)!==0)++t
return(u&$.aJ().a)!==0?t+4:t},
fe:function(a){var u,t=$.ab(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aJ()
if((s&t.a)!==0)if(u===a)return t
return $.ki()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.r]),t=this.a
if((t&$.ab().a)!==0)u.push("Pos")
if((t&$.aL().a)!==0)u.push("Norm")
if((t&$.aK().a)!==0)u.push("Binm")
if((t&$.b6().a)!==0)u.push("Txt2D")
if((t&$.b7().a)!==0)u.push("TxtCube")
if((t&$.cf().a)!==0)u.push("Clr3")
if((t&$.cg().a)!==0)u.push("Clr4")
if((t&$.bu().a)!==0)u.push("Weight")
if((t&$.aJ().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.eq.prototype={}
D.be.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Q]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.X(s,b)
if(s===!0){s=t.a
u=(s&&C.a).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.X(s,b)
if(s===!0){s=t.b
u=(s&&C.a).E(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.j2(u,!0,{func:1,ret:-1,args:[D.Q]}),new D.eK(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Q]}])
C.a.I(u,new D.eL(q))}return!0},
ft:function(){return this.w(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.eK.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eL.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Q.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cn.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cn))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cD.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.f3.prototype={
fP:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
fL:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.cF.prototype={}
X.fa.prototype={
aH:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaz()
r=new X.au(a,V.ax(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
c_:function(a,b){this.r=a.a
return!1},
aS:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.di()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
aR:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aH(a,b))
return!0},
fQ:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaz()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.bM(new V.D(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
ep:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cF(c,r.a.gaz(),b)
s.b=!0
t.w(s)
r.y=new P.a6(u,!1)
r.x=V.ax()}}
X.a7.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a7))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.au.prototype={}
X.fy.prototype={
bi:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gaz(),r=new X.au(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c_:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bi(a,b,!0))
return!0},
aS:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.di()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bi(a,b,!0))
return!0},
aR:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bi(a,b,!1))
return!0},
fR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaz()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.bM(new V.D(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gcV:function(){var u=this.b
return u==null?this.b=D.A():u},
gc6:function(){var u=this.c
return u==null?this.c=D.A():u},
gd6:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.bM.prototype={}
X.fN.prototype={}
X.d7.prototype={}
X.hq.prototype={
aH:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.ax(),r=u.a.gaz(),q=new X.d7(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
fO:function(a){var u=this.b
if(u==null)return!1
u.w(this.aH(a,!0))
return!0},
fM:function(a){var u=this.c
if(u==null)return!1
u.w(this.aH(a,!0))
return!0},
fN:function(a){var u=this.d
if(u==null)return!1
u.w(this.aH(a,!1))
return!0}}
X.db.prototype={
gaz:function(){var u=this.a,t=C.f.gcS(u).c
t.toString
u=C.f.gcS(u).d
u.toString
return V.jF(0,0,t,u)},
cq:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.a7(t,a.altKey,a.shiftKey))},
ay:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
bz:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a7(t,a.altKey,a.shiftKey)},
ak:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.V(s-q,r-u)},
aI:function(a){return new V.D(a.movementX,a.movementY)},
bu:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.a9(r.pageX)
C.d.a9(r.pageY)
p=o.left
C.d.a9(r.pageX)
n.push(new V.V(q-p,C.d.a9(r.pageY)-o.top))}return n},
ai:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cn(u,new X.a7(t,a.altKey,a.shiftKey))},
bj:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ej:function(a){this.f=!0},
e7:function(a){this.f=!1},
ed:function(a){if(this.f&&this.bj(a))a.preventDefault()},
en:function(a){var u
if(!this.f)return
u=this.cq(a)
this.b.fP(u)},
el:function(a){var u
if(!this.f)return
u=this.cq(a)
this.b.fL(u)},
er:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ay(a)
if(r.x){u=r.ai(a)
t=r.aI(a)
if(r.d.c_(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ai(a)
s=r.ak(a)
if(r.c.c_(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aS(u,s))a.preventDefault()},
eh:function(a){var u,t,s,r=this
if(!r.bj(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aS(u,s))a.preventDefault()}},
eu:function(a){var u,t,s,r=this
r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()},
ef:function(a){var u,t,s,r=this
if(!r.bj(a)){r.ay(a)
u=r.ai(a)
if(r.x){t=r.aI(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(r.r)return
s=r.ak(a)
if(r.c.aR(u,s))a.preventDefault()}},
ey:function(a){var u,t,s=this
s.ay(a)
u=new V.D((a&&C.o).gfm(a),C.o.gfn(a)).q(0,180)
if(s.x){if(s.d.fQ(u))a.preventDefault()
return}if(s.r)return
t=s.ak(a)
if(s.c.fR(u,t))a.preventDefault()},
eA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ai(s.y)
t=s.ak(s.y)
s.d.ep(u,t,r)}},
eQ:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bz(a)
u=t.bu(a)
if(t.e.fO(u))a.preventDefault()},
eM:function(a){var u
this.bz(a)
u=this.bu(a)
if(this.e.fM(u))a.preventDefault()},
eO:function(a){var u
this.bz(a)
u=this.bu(a)
if(this.e.fN(u))a.preventDefault()}}
D.em.prototype={$iX:1}
D.bc.prototype={
ah:function(a){var u=this.r
if(u!=null)u.w(a)},
dz:function(){return this.ah(null)},
$iX:1}
D.X.prototype={}
D.cE.prototype={
ah:function(a){var u=this.y
if(u!=null)u.w(a)},
cw:function(a){var u=this.z
if(u!=null)u.w(a)},
eo:function(){return this.cw(null)},
eC:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.dM(s))return!1}return!0},
e1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcv(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bc)this.f.push(q)
p=q.r
if(p==null){p=new D.be()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aQ()
u.b=!0
this.ah(u)},
eG:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gcv();u.u();){s=u.gG(u)
C.a.E(this.e,s)
s.gm().E(0,t)}u=new D.aR()
u.b=!0
this.ah(u)},
dM:function(a){var u=C.a.X(this.f,a)
return u},
$ai:function(){return[D.X]},
$aan:function(){return[D.X]}}
D.fM.prototype={$iX:1}
D.h8.prototype={$iX:1}
V.N.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.ao.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.eJ.prototype={}
V.cK.prototype={
a1:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cK))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bt(H.b([q.a,q.d,q.r],p),3,0),n=V.bt(H.b([q.b,q.e,q.x],p),3,0),m=V.bt(H.b([q.c,q.f,q.y],p),3,0)
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
V.as.prototype={
a1:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
bS:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.bj()
u=1/b1
t=-n
s=-a0
return V.ag((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ag(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ba:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aW:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
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
i:function(a){return this.J()},
B:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bt(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bt(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bt(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bt(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
J:function(){return this.B("")}}
V.V.prototype={
F:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.O.prototype={
F:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.ay.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.cT.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cT))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.E(u.a,3,0)+", "+V.E(u.b,3,0)+", "+V.E(u.c,3,0)+", "+V.E(u.d,3,0)+"]"}}
V.D.prototype={
bU:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.D(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.jN
return u==null?$.jN=new V.D(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.D(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.y.prototype={
bU:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bV:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aL:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.y(-this.a,-this.b,-this.c)},
q:function(a,b){if(Math.abs(b-0)<$.z().a)return V.bZ()
return new V.y(this.a/b,this.b/b,this.c/b)},
d5:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.et.prototype={
bc:function(a){var u=V.mi(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
L:function(a){var u=this.y
if(u!=null)u.w(a)},
sc7:function(a,b){},
sbW:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bc(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sbZ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bc(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sY:function(a,b){var u,t=this
b=t.bc(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.L(u)}},
sbX:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sO:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.L(t)}},
sbI:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.L(u)}},
aa:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sO(u)}}}
U.cp.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
aC:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bD.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
L:function(a){var u=this.e
if(u!=null)u.w(a)},
a0:function(){return this.L(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gav(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aQ()
u.b=!0
this.L(u)},
eE:function(a,b){var u,t
for(u=b.gN(b),t=this.gav();u.u();)u.gG(u).gm().E(0,t)
u=new D.aR()
u.b=!0
this.L(u)},
aC:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a2()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.W(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aC(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bj():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bD))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.F(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a1]},
$aan:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.dc.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.A():u},
L:function(a){var u=this.cy
if(u!=null)u.w(a)},
a0:function(){return this.L(null)},
aJ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcV().l(0,u.gbk())
u.a.c.gd6().l(0,u.gbm())
u.a.c.gc6().l(0,u.gbo())
return!0},
bl:function(a){var u=this
if(!J.F(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bn:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iau")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.D(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.D(t.a,t.b).v(0,2).q(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sO(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.D(s.a,s.b).v(0,2).q(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
n.b.sO(0)
t=t.F(0,a.z)
n.Q=new V.D(t.a,t.b).v(0,2).q(0,u.ga3())}n.a0()},
bp:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sO(t*10*s)
r.a0()}},
aC:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.ch=p
u=b.y
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ag(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia1:1}
U.dd.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.A():u},
L:function(a){var u=this.fx
if(u!=null)u.w(a)},
a0:function(){return this.L(null)},
aJ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcV().l(0,s.gbk())
s.a.c.gd6().l(0,s.gbm())
s.a.c.gc6().l(0,s.gbo())
u=s.a.d
t=u.f
u=t==null?u.f=D.A():t
u.l(0,s.gdT())
u=s.a.d
t=u.d
u=t==null?u.d=D.A():t
u.l(0,s.gdV())
u=s.a.e
t=u.b
u=t==null?u.b=D.A():t
u.l(0,s.gf8())
u=s.a.e
t=u.d
u=t==null?u.d=D.A():t
u.l(0,s.gf6())
u=s.a.e
t=u.c
u=t==null?u.c=D.A():t
u.l(0,s.gf4())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.D(u,t)},
bl:function(a){var u=this
H.l(a,"$iau")
if(!J.F(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bn:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iau")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.D(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ad(new V.D(t.a,t.b).v(0,2).q(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sO(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ad(new V.D(s.a,s.b).v(0,2).q(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.F(0,a.z)
n.dx=n.ad(new V.D(t.a,t.b).v(0,2).q(0,u.ga3()))}n.a0()},
bp:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sO(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sO(-t*10*u)
r.a0()}},
dU:function(a){var u=this
if(H.l(a,"$icF").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
dW:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iau")
if(!J.F(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ad(new V.D(s.a,s.b).v(0,2).q(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.F(0,a.z)
n.dx=n.ad(new V.D(t.a,t.b).v(0,2).q(0,u.ga3()))
n.a0()},
f9:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f7:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$id7")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.D(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ad(new V.D(t.a,t.b).v(0,2).q(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sO(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ad(new V.D(s.a,s.b).v(0,2).q(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sO(0)
n.c.sO(0)
t=t.F(0,a.z)
n.dx=n.ad(new V.D(t.a,t.b).v(0,2).q(0,u.ga3()))}n.a0()},
f5:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sO(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sO(-t*10*u)
r.a0()}},
aC:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a2()
if(q<p){r.dy=p
u=b.y
r.c.aa(0,u)
r.b.aa(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ag(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.ag(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia1:1}
U.de.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
L:function(a){var u=this.r
if(u!=null)u.w(a)},
aJ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.A():t
t=r.gdX()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.A():s).l(0,t)
return!0},
dY:function(a){var u,t,s,r,q=this
if(!J.F(q.b,q.a.b.c))return
H.l(a,"$ibM")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.x("zoom",u,r)
u.b=!0
q.L(u)}},
aC:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ag(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia1:1}
M.co.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
S:function(a){var u=this.r
if(u!=null)u.w(a)},
aG:function(){return this.S(null)},
eI:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aQ()
u.b=!0
this.S(u)},
eK:function(a,b){var u,t
for(u=b.gN(b),t=this.gR();u.u();)u.gG(u).gm().E(0,t)
u=new D.aR()
u.b=!0
this.S(u)},
a4:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.W(u,u.length);u.u();){t=u.d
if(t!=null)t.a4(a)}s.f=!1},
$ai:function(){return[M.a9]},
$aan:function(){return[M.a9]},
$ia9:1}
M.cq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
S:function(a){var u=this.r
if(u!=null)u.w(a)},
aG:function(){return this.S(null)},
saK:function(a){var u,t,s=this
if(a==null)a=new X.eW()
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gR())
t=s.b
s.b=a
a.gm().l(0,s.gR())
u=new D.x("camera",t,s.b)
u.b=!0
s.S(u)}},
saT:function(a,b){var u,t,s=this
if(b==null)b=X.iX(null)
u=s.c
if(u!==b){if(u!=null)u.gm().E(0,s.gR())
t=s.c
s.c=b
b.gm().l(0,s.gR())
u=new D.x("target",t,s.c)
u.b=!0
s.S(u)}},
saU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gR())
s=new D.x("technique",u,t.d)
s.b=!0
t.S(s)}},
a4:function(a){var u=this
a.c1(u.d)
u.c.T(a)
u.b.T(a)
u.e.aa(0,a)
u.e.a4(a)
u.b.ar(a)
u.c.toString
a.c0()},
$ia9:1}
M.cv.prototype={
S:function(a){var u=this.y
if(u!=null)u.w(a)},
aG:function(){return this.S(null)},
e9:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gR(),s=[{func:1,ret:-1,args:[D.Q]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.be()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aQ()
u.b=!0
this.S(u)},
eb:function(a,b){var u,t
for(u=b.gN(b),t=this.gR();u.u();)u.gG(u).gm().E(0,t)
u=new D.aR()
u.b=!0
this.S(u)},
saK:function(a){var u,t,s=this
if(a==null)a=X.jz(null)
u=s.b
if(u!==a){if(u!=null)u.gm().E(0,s.gR())
t=s.b
s.b=a
a.gm().l(0,s.gR())
u=new D.x("camera",t,s.b)
u.b=!0
s.S(u)}},
saT:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().E(0,t.gR())
u=t.c
t.c=b
b.gm().l(0,t.gR())
s=new D.x("target",u,t.c)
s.b=!0
t.S(s)}},
saU:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().E(0,t.gR())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gR())
s=new D.x("technique",u,t.d)
s.b=!0
t.S(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
a4:function(a){var u,t=this
a.c1(t.d)
t.c.T(a)
t.b.T(a)
u=t.d
if(u!=null)u.aa(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.u();)u.d.aa(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.u();)u.d.a4(a)
t.b.toString
a.cy.ap()
a.db.ap()
t.c.toString
a.c0()},
$ia9:1}
M.a9.prototype={}
A.cj.prototype={}
A.eh.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cU:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.R.prototype={
gab:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.R))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fd.prototype={
ds:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aD("")
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
A.lz(c0,u)
A.lB(c0,u)
A.lA(c0,u)
A.lD(c0,u)
A.lE(c0,u)
A.lC(c0,u)
A.lF(c0,u)
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
b5.d3(0,s.charCodeAt(0)==0?s:s,A.ly(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.l(b5.y.P(0,"invViewMat"),"$ia_")
if(t)b5.dy=H.l(b5.y.P(0,"objMat"),"$ia_")
if(r)b5.fr=H.l(b5.y.P(0,"viewObjMat"),"$ia_")
b5.fy=H.l(b5.y.P(0,"projViewObjMat"),"$ia_")
if(c0.go)b5.fx=H.l(b5.y.P(0,"viewMat"),"$ia_")
if(c0.x1)b5.k1=H.l(b5.y.P(0,"txt2DMat"),"$ibV")
if(c0.x2)b5.k2=H.l(b5.y.P(0,"txtCubeMat"),"$ia_")
if(c0.y1)b5.k3=H.l(b5.y.P(0,"colorMat"),"$ia_")
b5.r1=H.b([],[A.a_])
t=c0.b3
if(t>0){b5.k4=b5.y.P(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.o(b7+q+b8))
s.push(H.l(m,"$ia_"))}}if(c0.a.a)b5.r2=H.l(b5.y.P(0,"emissionClr"),"$iB")
if(c0.b.a)b5.x1=H.l(b5.y.P(0,"ambientClr"),"$iB")
if(c0.c.a)b5.y2=H.l(b5.y.P(0,"diffuseClr"),"$iB")
if(c0.d.a)b5.b4=H.l(b5.y.P(0,"invDiffuseClr"),"$iB")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.cY=H.l(b5.y.P(0,"shininess"),"$iL")
if(t)b5.cX=H.l(b5.y.P(0,"specularClr"),"$iB")}if(c0.db){b5.cZ=H.l(b5.y.P(0,"envSampler"),"$ib0")
if(c0.r.a)b5.d_=H.l(b5.y.P(0,"reflectClr"),"$iB")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.d0=H.l(b5.y.P(0,"refraction"),"$iL")
if(t)b5.d1=H.l(b5.y.P(0,"refractClr"),"$iB")}}if(c0.y.a)b5.d2=H.l(b5.y.P(0,"alpha"),"$iL")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.bJ=new H.H([r,A.b_])
b5.bK=new H.H([r,[P.aV,A.bT]])
for(r=[A.bT],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.l(g,"$iB")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
if(typeof j!=="number")return j.a8()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.l(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bT(m,g,f,a0,a,b))}b5.bK.k(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.bL=new H.H([r,A.b_])
b5.bM=new H.H([r,[P.aV,A.bU]])
for(r=[A.bU],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.a8()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.l(m,"$iB")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.l(g,"$iB")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.o(b7+a1+b8))
H.l(f,"$iB")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.o(b7+a1+b8))
H.l(m,"$iB")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.o(b7+a1+b8))
H.l(g,"$iB")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$ibn")
a5=f}else a5=b6
h.push(new A.bU(a4,a3,a2,m,g,a5))}b5.bM.k(0,j,h)
q=b5.bL
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.bN=new H.H([r,A.b_])
b5.bO=new H.H([r,[P.aV,A.bW]])
for(r=[A.bW],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.l(g,"$iB")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
if(typeof j!=="number")return j.a8()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ibV")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ib0")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$ib0")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$ibS")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.l(c,"$iL")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.bW(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bO.k(0,j,h)
q=b5.bN
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.bP=new H.H([r,A.b_])
b5.bQ=new H.H([r,[P.aV,A.bX]])
for(r=[A.bX],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
H.l(m,"$iB")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.o(b7+o+b8))
H.l(g,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.o(b7+o+b8))
H.l(f,"$iB")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.o(b7+o+b8))
H.l(e,"$iB")
if(typeof j!=="number")return j.a8()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$iB")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.o(b7+o+b8))
H.l(c,"$iB")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.o(b7+o+b8))
H.l(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.o(b7+o+b8))
H.l(b0,"$iL")
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
H.l(d,"$ibS")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.l(d,"$iL")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.l(c,"$iL")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.l(d,"$iL")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.o(b7+a1+b8))
H.l(c,"$iL")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.o(b7+a1+b8))
H.l(a9,"$iL")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.o(b7+a1+b8))
H.l(d,"$ibn")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.o(b7+o+b8))
H.l(d,"$ibn")
a7=d}else a7=b6
h.push(new A.bX(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bQ.k(0,j,h)
q=b5.bP
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.o(b7+o+b8))
q.k(0,j,m)}}}},
eZ:function(a,b){if(b!=null&&b.d>=6)a.ca(b)}}
A.ck.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cs.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cR.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.cY.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fg.prototype={
i:function(a){return this.aO}}
A.bT.prototype={}
A.bU.prototype={}
A.bW.prototype={}
A.bX.prototype={}
A.cV.prototype={
cg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d3:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cr(b,35633)
r.f=r.cr(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.o("Failed to link shader: "+H.e(s)))}r.f0()
r.f2()},
T:function(a){a.a.useProgram(this.r)
this.x.fu()},
cr:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.o("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
f0:function(){var u,t,s,r=this,q=H.b([],[A.cj]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cj(p,t.name,s))}r.x=new A.eh(q)},
f2:function(){var u,t,s,r=this,q=H.b([],[A.d9]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fl(t.type,t.size,t.name,s))}r.y=new A.hC(q)},
aw:function(a,b,c){var u=this.a
if(a===1)return new A.b_(u,b,c)
else return A.j7(u,this.r,b,a,c)},
dO:function(a,b,c){var u=this.a
if(a===1)return new A.bn(u,b,c)
else return A.j7(u,this.r,b,a,c)},
dP:function(a,b,c){var u=this.a
if(a===1)return new A.b0(u,b,c)
else return A.j7(u,this.r,b,a,c)},
b0:function(a,b){return new P.dq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fl:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aw(b,c,d)
case 5121:return u.aw(b,c,d)
case 5122:return u.aw(b,c,d)
case 5123:return u.aw(b,c,d)
case 5124:return u.aw(b,c,d)
case 5125:return u.aw(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.hy(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bS(u.a,c,d)
case 35667:return new A.hz(u.a,c,d)
case 35668:return new A.hA(u.a,c,d)
case 35669:return new A.hB(u.a,c,d)
case 35674:return new A.hD(u.a,c,d)
case 35675:return new A.bV(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dO(b,c,d)
case 35680:return u.dP(b,c,d)
case 35670:throw H.c(u.b0("BOOL",c))
case 35671:throw H.c(u.b0("BOOL_VEC2",c))
case 35672:throw H.c(u.b0("BOOL_VEC3",c))
case 35673:throw H.c(u.b0("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.h5.prototype={}
A.d9.prototype={}
A.hC.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
P:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b_.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hx.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bS.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bV.prototype={
a5:function(a){var u=new Float32Array(H.ca(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a_.prototype={
a5:function(a){var u=new Float32Array(H.ca(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bn.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b0.prototype={
ca:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iu.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bV(s.b,b).bV(s.d.bV(s.c,b),c)
a.sY(0,new V.O(r.a,r.b,r.c))
a.sh1(r.q(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.ay(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.F(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.W()}t.f.$3(a,b,c)}}
F.iK.prototype={
$2:function(a,b){return 0}}
F.iL.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=this.b+s
s=a.f
t=new V.y(s.a,s.b,s.c)
s=t.q(0,Math.sqrt(t.A(t)))
a.sY(0,new V.O(s.a*u,s.b*u,s.c*u))}}
F.aO.prototype={
aM:function(){var u=this
if(!u.gaN()){C.a.E(u.a.a.d.b,u)
u.a.a.W()}u.bv()
u.bw()
u.eT()},
bA:function(a){this.a=a
a.d.b.push(this)},
bB:function(a){this.b=a
a.d.c.push(this)},
f_:function(a){this.c=a
a.d.d.push(this)},
bv:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
bw:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
eT:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gaN:function(){return this.a==null||this.b==null||this.c==null},
dI:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bZ()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.d5())return
return s.q(0,Math.sqrt(s.A(s)))},
dK:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.A(r)))
r=t.F(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aL(r.q(0,Math.sqrt(r.A(r))))
return r.q(0,Math.sqrt(r.A(r)))},
bE:function(){var u,t=this
if(t.d!=null)return!0
u=t.dI()
if(u==null){u=t.dK()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
dH:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bZ()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.d5())return
return s.q(0,Math.sqrt(s.A(s)))},
dJ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.F(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.O(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.A(l)))
l=o.aL(q)
l=l.q(0,Math.sqrt(l.A(l))).aL(o)
q=l.q(0,Math.sqrt(l.A(l)))}return q},
bC:function(){var u,t=this
if(t.e!=null)return!0
u=t.dH()
if(u==null){u=t.dJ()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
gfh:function(a){var u=this
if(J.F(u.a,u.b))return!0
if(J.F(u.b,u.c))return!0
if(J.F(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u,t,s=this
if(s.gaN())return a+"disposed"
u=a+C.b.a7(J.a4(s.a.e),0)+", "+C.b.a7(J.a4(s.b.e),0)+", "+C.b.a7(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
J:function(){return this.B("")}}
F.eM.prototype={}
F.h4.prototype={
aQ:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bH.prototype={
aM:function(){var u=this
if(!u.gaN()){C.a.E(u.a.a.c.b,u)
u.a.a.W()}u.bv()
u.bw()},
bA:function(a){this.a=a
a.c.b.push(this)},
bB:function(a){this.b=a
a.c.c.push(this)},
bv:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
bw:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gaN:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){if(this.gaN())return a+"disposed"
return a+C.b.a7(J.a4(this.a.e),0)+", "+C.b.a7(J.a4(this.b.e),0)},
J:function(){return this.B("")}}
F.f5.prototype={}
F.hw.prototype={
aQ:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
return t==u.e}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
return t==u.e}else return!1}}}
F.bP.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a7(J.a4(u.e),0)},
J:function(){return this.B("")}}
F.fY.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
bY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.t()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.fk())}h.a.t()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.C()
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
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.kD(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bC(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
fE:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aI(o,0)])
for(o=[F.b1];u.length!==0;){t=C.a.gfw(u)
C.a.c2(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.aQ(0,t,q)){s.push(q)
C.a.c2(u,r)}}if(s.length>1)b.bY(s)}}p.a.t()
p.c.c3()
p.d.c3()
p.b.fU()
p.c.c4(new F.hw())
p.d.c4(new F.h4())
o=p.e
if(o!=null)o.ag(0)},
cQ:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ab()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aL().a)!==0)++s
if((t&$.aK().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.cf().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.aJ().a)!==0)++s
r=a4.gcb(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cm])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fe(m)
k=l.gcb(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cm(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fD(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.ca(p)),35044)
u.bindBuffer(a1,null)
c=new Z.by(new Z.df(a1,d),o,a4)
c.b=H.b([],[Z.bf])
if(a0.b.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.t()
b.push(t.e)}a=Z.j9(u,34963,b)
c.b.push(new Z.bf(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.t()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.t()
b.push(t.e)}a=Z.j9(u,34963,b)
c.b.push(new Z.bf(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.t()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.t()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.t()
b.push(t.e)}a=Z.j9(u,34963,b)
c.b.push(new Z.bf(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.B(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.B(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.B(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.B(t))}return C.a.p(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.w(null)}}
F.fZ.prototype={
fc:function(a){var u,t,s,r,q=H.b([],[F.aO]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bC(p,s,r))}return q},
fd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aO])
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
h.push(F.bC(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bC(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bC(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bC(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
c4:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aQ(0,p,n)){p.aM()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gfh(s)
if(t)s.aM()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bE())s=!1
return s},
bD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bC())s=!1
return s},
i:function(a){return this.J()},
B:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.p(r,"\n")},
J:function(){return this.B("")}}
F.h_.prototype={
gj:function(a){return this.b.length},
c4:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aQ(0,p,n)){p.aM()
break}}}}},
c3:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.F(s.a,s.b)
if(t)s.aM()}},
i:function(a){return this.J()},
B:function(a){var u,t,s=H.b([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].B(a+(""+u+". ")))}return C.a.p(s,"\n")},
J:function(){return this.B("")}}
F.h0.prototype={
gj:function(a){return this.b.length},
fU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.J()},
B:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(a))
return C.a.p(r,"\n")},
J:function(){return this.B("")}}
F.b1.prototype={
bH:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hO(u.cx,r,o,t,s,q,p,a,n)},
fk:function(){return this.bH(null)},
sY:function(a,b){var u
if(!J.F(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
sh1:function(a){var u
if(!J.F(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
fD:function(a){var u,t,s=this
if(a.n(0,$.ab())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aL())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aK())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b6())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b7())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cf())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cg())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bu()))return H.b([s.ch],[P.K])
else if(a.n(0,$.aJ())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bE:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bZ()
t.d.I(0,new F.hZ(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bC:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bZ()
t.d.I(0,new F.hY(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
B:function(a){var u,t,s=this,r="-",q=H.b([],[P.r])
q.push(C.b.a7(J.a4(s.e),0))
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
J:function(){return this.B("")}}
F.hZ.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hY.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.hP.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
b2:function(a,b,c,d,e,f){var u=F.hO(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bE()
return!0},
bD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bC()
return!0},
fg:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.F(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.J()},
B:function(a){var u,t,s,r
this.t()
u=H.b([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].B(a))
return C.a.p(u,"\n")},
J:function(){return this.B("")}}
F.hQ.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
I:function(a,b){var u=this
C.a.I(u.b,b)
C.a.I(u.c,new F.hR(u,b))
C.a.I(u.d,new F.hS(u,b))},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
F.hR.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.hS.prototype={
$1:function(a){var u=this.a
if(!J.F(a.a,u)&&!J.F(a.b,u))this.b.$1(a)}}
F.hT.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
F.hV.prototype={}
F.hU.prototype={
aQ:function(a,b,c){return J.F(b.f,c.f)}}
F.hW.prototype={}
F.fF.prototype={
bY:function(a){var u,t,s,r,q,p,o,n,m=V.bZ()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.y(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.q(0,Math.sqrt(m.A(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.q(0,Math.sqrt(p*p+o*o+n*n))}if(!J.F(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.w(null)}}}return}}
F.hX.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].B(""))
return C.a.p(r,"\n")}}
O.cI.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.A():u},
U:function(a){var u=this.fr
if(u!=null)u.w(a)},
bt:function(){return this.U(null)},
cA:function(a){this.a=null
this.U(a)},
eX:function(){return this.cA(null)},
e3:function(a,b){var u=new D.aQ()
u.b=!0
this.U(u)},
e5:function(a,b){var u=new D.aR()
u.b=!0
this.U(u)},
cp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaf()
o=u.h(0,q.gaf())
u.k(0,p,o==null?1:o)}n=H.b([],[A.ck])
u.I(0,new O.fk(g,n))
C.a.aF(n,new O.fl())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cs])
m.I(0,new O.fm(g,l))
C.a.aF(l,new O.fn())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaf()
o=k.h(0,q.gaf())
k.k(0,p,o==null?1:o)}j=H.b([],[A.cR])
k.I(0,new O.fo(g,j))
C.a.aF(j,new O.fp())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gaf()
p=i.h(0,q.gaf())
i.k(0,s,p==null?1:p)}h=H.b([],[A.cY])
i.I(0,new O.fq(g,h))
C.a.aF(h,new O.fr())
f=C.c.Z(g.e.a.length+3,4)
g.dy.e
return A.kJ(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dG:function(a,b){if(b!=null)if(!C.a.X(a,b)){b.a=a.length
a.push(b)}},
aa:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.W(u,u.length);u.u();){t=u.d
t.toString
s=$.hN
if(s==null)s=$.hN=new V.y(0,0,1)
t.a=s
r=$.hM
t.d=r==null?$.hM=new V.y(0,1,0):r
r=$.hL
t.e=r==null?$.hL=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.ba(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.ba(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.ba(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
dc:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cp()
u=b2.fr.h(0,b1.aO)
if(u==null){u=A.kI(b1,b2.a)
b2.cK(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.b4
b1=b3.e
if(!(b1 instanceof Z.by))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.al()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bD()
q.a.bD()
q=q.e
if(q!=null)q.ag(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fg()
p=p.e
if(p!=null)p.ag(0)}n=b3.d.cQ(new Z.dg(b2.a),s)
n.am($.ab()).e=b0.a.Q.c
if(b1)n.am($.aL()).e=b0.a.cx.c
if(r)n.am($.aK()).e=b0.a.ch.c
if(t.r2)n.am($.b6()).e=b0.a.cy.c
if(q)n.am($.b7()).e=b0.a.db.c
if(t.ry)n.am($.aJ()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.d2])
b0.a.T(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gV(r)
b1=b1.dy
b1.toString
b1.a5(r.a1(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gV(r)
q=b2.dx
q=b2.cx=r.v(0,q.gV(q))
r=q}b1=b1.fr
b1.toString
b1.a5(r.a1(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gfT()
q=b2.dx
q=b2.ch=r.v(0,q.gV(q))
r=q}b1=b1.fy
b1.toString
b1.a5(r.a1(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gV(r)
b1=b1.fx
b1.toString
b1.a5(r.a1(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a5(C.i.a1(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a5(C.i.a1(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a5(C.i.a1(r,!0))}if(t.b3>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.ca(r.a1(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}if(t.a.a){b1=b0.a
r=b0.f.f
b1=b1.r2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.k1){if(t.b.a){b1=b0.a
r=b0.r.f
b1=b1.x1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.c.a){b1=b0.a
r=b0.x.f
b1=b1.y2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.d.a){b1=b0.a
r=b0.y.f
b1=b1.b4
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.cY
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.cX
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.u
i=new H.H([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaf()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.ch(b0.a.bK.h(0,f),e)
p=g.gh8()
o=$.ai
p=p.aW(o==null?$.ai=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghd()
o=$.ai
p=p.aW(o==null?$.ai=new V.O(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gae(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gcW()){p=g.gcL()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcM()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcN()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bJ.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
b=new H.H([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.k(0,0,e+1)
d=J.ch(b0.a.bM.h(0,0),e)
p=c.ba(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.q(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bL.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
a1=new H.H([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaf()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.ch(b0.a.bO.h(0,f),e)
a2=c.v(0,g.gV(g))
p=g.gV(g)
o=$.ai
p=p.aW(o==null?$.ai=new V.O(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ai
p=a2.aW(p==null?$.ai=new V.O(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gae(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaq()
p=a2.bS(0)
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
j=new Float32Array(H.ca(new V.cK(o,a,a0,a3,a4,a5,a6,a7,p).a1(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaq()
p=g.gaq()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gaq()
o=p.gaP(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaE()
p=g.gdj()
o=d.x
o.toString
a=p.gfp(p)
a0=p.gfq(p)
a3=p.gfs()
p=p.gfo()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaE()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gaE()
o=p.gaP(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gcW()){p=g.gcL()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcM()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcN()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bN.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.u
a9=new H.H([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaf()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.ch(b0.a.bQ.h(0,f),e)
p=g.gfS(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghb(g).ht()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.aW(g.gfS(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gae(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaq()
p=g.gc6()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gc5(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghu()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghv()
o=d.y
o.a.uniform1f(o.d,p)
g.gaq()
p=g.gaq()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gaq()
o=p.gaP(p)
if(o){o=d.dx
o.toString
a=p.gaP(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gfA(p)
o.a.uniform1i(o.d,p)}}g.gaE()
p=g.gdj()
o=d.z
o.toString
a=p.gfp(p)
a0=p.gfq(p)
a3=p.gfs()
p=p.gfo()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaE()
if(!C.a.X(m,p)){p.a=m.length
m.push(p)}p=g.gaE()
o=p.gaP(p)
if(o){o=d.dy
o.toString
a=p.gaP(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gfA(p)
o.a.uniform1i(o.d,p)}}if(g.ghc()){p=g.gha()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gh9()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gcW()){p=g.gcL()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcM()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcN()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bP.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gV(r).bS(0)}b1=b1.id
b1.toString
b1.a5(r.a1(0,!0))}if(t.db){b0.dG(m,b0.ch)
b1=b0.a
r=b0.ch
b1.eZ(b1.cZ,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.d_
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.d0
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.d1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.d2
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].T(b2)
b1=b3.e
b1.T(b2)
b1.a4(b2)
b1.ar(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.cU()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cp().aO}}
O.fk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.ck(a,C.c.Z(b+3,4)*4))}}
O.fl.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cs(a,C.c.Z(b+3,4)*4))}}
O.fn.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fo.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cR(a,C.c.Z(b+3,4)*4))}}
O.fp.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cY(a,C.c.Z(b+3,4)*4))}}
O.fr.prototype={
$2:function(a,b){return J.ci(a.a,b.a)}}
O.fe.prototype={
aj:function(){var u,t=this
t.ce()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.x(t.b,u,1)
u.b=!0
t.a.U(u)}}}
O.cJ.prototype={
aj:function(){},
bx:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aj()
u=s.a
u.a=null
u.U(null)}}}
O.ff.prototype={}
O.af.prototype={
cC:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.U(t)}},
aj:function(){this.ce()
this.cC(new V.N(1,1,1))},
sae:function(a,b){this.bx(new A.R(!0,!1,!1))
this.cC(b)}}
O.fh.prototype={}
O.fi.prototype={
cD:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.x(u.b+".refraction",t,a)
t.b=!0
u.a.U(t)}},
aj:function(){this.cf()
this.cD(1)}}
O.fj.prototype={
cE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a)
t.b=!0
u.a.U(t)}},
aj:function(){this.cf()
this.cE(100)}}
O.cW.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
U:function(a){var u=this.e
if(u!=null)u.w(a)},
bt:function(){return this.U(null)},
dc:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.h5(t,n)
u.cg(t,n)
u.d3(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.l(u.y.h(0,"fov"),"$iL")
u.ch=H.l(u.y.h(0,"ratio"),"$iL")
u.cx=H.l(u.y.h(0,"boxClr"),"$iB")
u.cy=H.l(u.y.h(0,"boxTxt"),"$ib0")
u.db=H.l(u.y.h(0,"viewMat"),"$ia_")
a.cK(u)}o.a=u}if(b.e==null){t=b.d.cQ(new Z.dg(a.a),$.ab())
t.am($.ab()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.T(a)}t=a.d
s=a.c
r=o.a
r.T(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.ca(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).bS(0)
r=r.db
r.toString
r.a5(s.a1(0,!0))
t=b.e
if(t instanceof Z.by){t.T(a)
t.a4(a)
t.ar(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cU()
t=o.c
if(t!=null)t.ar(a)}}
O.d1.prototype={}
T.d2.prototype={}
T.hk.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
T:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ar:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hl.prototype={
ax:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.P(u,"load",new T.hm(this,u,!1,b,!1,d,a),!1)},
eY:function(a,b,c){var u,t,s,r
b=V.ji(b)
u=V.ji(a.width)
t=V.ji(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iS()
s.width=u
s.height=t
r=C.f.dg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lT(r.getImageData(0,0,s.width,s.height))}}}
T.hm.prototype={
$1:function(a){var u=this,t=u.a,s=t.eY(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.E.h0(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ft()}++t.e}}
X.iR.prototype={}
X.eU.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.A():u},
ac:function(a){var u=this.x
if(u!=null)u.w(a)},
scR:function(a,b){var u
if(this.b){this.b=!1
u=new D.x("clearColor",!0,!1)
u.b=!0
this.ac(u)}},
T:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.d.a9(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.d.a9(r*t)
r=C.d.a9(s.c*u)
a.c=r
s=C.d.a9(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.eW.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
T:function(a){var u
a.cy.b8(V.bj())
u=V.bj()
a.db.b8(u)},
ar:function(a){a.cy.ap()
a.db.ap()}}
X.cQ.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.A():u},
ac:function(a){var u=this.f
if(u!=null)u.w(a)},
dD:function(){return this.ac(null)},
T:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ag(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.b8(k)
r=$.jA
if(r==null){r=V.jC()
q=V.j8()
p=$.jO
r=V.jw(r,q,p==null?$.jO=new V.y(0,0,-1):p)
$.jA=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aC(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.b8(u)},
ar:function(a){a.cy.ap()
a.db.ap()}}
X.hg.prototype={}
V.iJ.prototype={
$1:function(a){var u=C.d.de(this.a.gfz(),2)
if(u!=="0.00")P.jj(u+" fps")}}
V.h1.prototype={
dv:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.h3(o),!1)},
cJ:function(a){var u,t,s,r,q,p,o,n
this.f1()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fC(a),s.toString,r=new H.M(r),r=new P.c6(s.df(new H.bI(r,r.gj(r))).a());r.u();){s=r.gG(r)
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
if(H.md(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.lf(C.D,s,C.m,!1)
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
fa:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
f1:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hp()
t=P.r
u.a=new H.H([t,L.d_])
u.b=new H.H([t,L.d6])
u.c=P.ju(t)
u.d=u.K(0,q)
t=u.K(0,q).p(0,p)
s=K.T(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).p(0,p)
s=new K.av()
r=[K.cH]
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.M("*"))
s.a.push(t)
t=u.K(0,p).p(0,"BoldEnd")
s=K.T(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,o)
s=K.T(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).p(0,o)
s=new K.av()
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.M("_"))
s.a.push(t)
t=u.K(0,o).p(0,n)
s=K.T(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,m)
s=K.T(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).p(0,m)
s=new K.av()
s.a=H.b([],r)
t.a.push(s)
t=K.T(new H.M("`"))
s.a.push(t)
t=u.K(0,m).p(0,"CodeEnd")
s=K.T(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).p(0,l)
s=K.T(new H.M("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).p(0,k)
s=K.T(new H.M("|"))
t.a.push(s)
s=u.K(0,l).p(0,j)
t=K.T(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).p(0,l)
t=new K.av()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.M("|]"))
t.a.push(s)
s=u.K(0,k).p(0,j)
t=K.T(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).p(0,k)
t=new K.av()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.M("|]"))
t.a.push(s)
u.K(0,q).p(0,i).a.push(new K.ee())
s=u.K(0,i).p(0,i)
t=new K.av()
t.a=H.b([],r)
s.a.push(t)
s=K.T(new H.M("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.aV(p)
s=u.K(0,n)
s.d=s.a.aV(o)
s=u.K(0,"CodeEnd")
s.d=s.a.aV(m)
s=u.K(0,j)
s.d=s.a.aV("Link")
s=u.K(0,i)
s.d=s.a.aV(i)
this.b=u}}
V.h3.prototype={
$1:function(a){P.jJ(C.h,new V.h2(this.a))}}
V.h2.prototype={
$0:function(){var u=C.d.a9(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
O.iH.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return}};(function aliases(){var u=J.a.prototype
u.dn=u.i
u=J.cC.prototype
u.dq=u.i
u=K.cy.prototype
u.dm=u.aB
u.cd=u.i
u=O.cJ.prototype
u.ce=u.aj
u=O.af.prototype
u.cf=u.aj})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"li","kB",19)
t(P,"lN","l6",6)
t(P,"lO","l7",6)
t(P,"lP","l8",6)
s(P,"jV","lL",9)
var m
r(m=E.ap.prototype,"gd9",0,0,null,["$1","$0"],["da","fK"],0,0)
r(m,"gd7",0,0,null,["$1","$0"],["d8","fH"],0,0)
q(m,"gfF","fG",3)
q(m,"gfI","fJ",3)
r(m=E.d3.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
p(m,"gfX","dd",9)
o(m=X.db.prototype,"gei","ej",4)
o(m,"ge6","e7",4)
o(m,"gec","ed",2)
o(m,"gem","en",10)
o(m,"gek","el",10)
o(m,"geq","er",2)
o(m,"gev","ew",2)
o(m,"geg","eh",2)
o(m,"ges","eu",2)
o(m,"gee","ef",2)
o(m,"gex","ey",17)
o(m,"gez","eA",4)
o(m,"geP","eQ",5)
o(m,"geL","eM",5)
o(m,"geN","eO",5)
r(D.bc.prototype,"gdw",0,0,null,["$1","$0"],["ah","dz"],0,0)
r(m=D.cE.prototype,"gcv",0,0,null,["$1","$0"],["cw","eo"],0,0)
o(m,"geB","eC",18)
q(m,"ge0","e1",11)
q(m,"geF","eG",11)
n(V.D.prototype,"gj","bU",12)
n(V.y.prototype,"gj","bU",12)
r(m=U.bD.prototype,"gav",0,0,null,["$1","$0"],["L","a0"],0,0)
q(m,"gdZ","e_",13)
q(m,"geD","eE",13)
r(m=U.dc.prototype,"gav",0,0,null,["$1","$0"],["L","a0"],0,0)
o(m,"gbk","bl",1)
o(m,"gbm","bn",1)
o(m,"gbo","bp",1)
r(m=U.dd.prototype,"gav",0,0,null,["$1","$0"],["L","a0"],0,0)
o(m,"gbk","bl",1)
o(m,"gbm","bn",1)
o(m,"gbo","bp",1)
o(m,"gdT","dU",1)
o(m,"gdV","dW",1)
o(m,"gf8","f9",1)
o(m,"gf6","f7",1)
o(m,"gf4","f5",1)
o(U.de.prototype,"gdX","dY",1)
r(m=M.co.prototype,"gR",0,0,null,["$1","$0"],["S","aG"],0,0)
q(m,"geH","eI",14)
q(m,"geJ","eK",14)
r(M.cq.prototype,"gR",0,0,null,["$1","$0"],["S","aG"],0,0)
r(m=M.cv.prototype,"gR",0,0,null,["$1","$0"],["S","aG"],0,0)
q(m,"ge8","e9",3)
q(m,"gea","eb",3)
r(m=O.cI.prototype,"gbs",0,0,null,["$1","$0"],["U","bt"],0,0)
r(m,"geW",0,0,null,["$1","$0"],["cA","eX"],0,0)
q(m,"ge2","e3",15)
q(m,"ge4","e5",15)
r(O.cW.prototype,"gbs",0,0,null,["$1","$0"],["U","bt"],0,0)
r(X.cQ.prototype,"gdC",0,0,null,["$1","$0"],["ac","dD"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.j0,J.a,J.W,P.dy,P.i,H.bI,P.eZ,H.cw,H.hG,H.hu,P.bd,H.bz,H.dP,P.Y,H.f6,H.f7,H.f0,P.dV,P.bo,P.c6,P.dh,P.d0,P.he,P.d4,P.it,P.il,P.ig,P.dx,P.q,P.er,P.is,P.b5,P.a6,P.a3,P.aN,P.fJ,P.cZ,P.dq,P.eT,P.aV,P.bJ,P.aW,P.r,P.aD,W.ex,W.I,W.cx,P.e_,P.ih,K.ee,K.cy,K.cH,K.fX,L.d_,L.d5,L.d6,L.hp,O.an,O.bL,E.en,E.ap,E.fP,E.d3,Z.df,Z.dg,Z.by,Z.bf,Z.b2,D.eq,D.be,D.Q,X.cn,X.cD,X.f3,X.fa,X.a7,X.fy,X.hq,X.db,D.em,D.bc,D.X,D.fM,D.h8,V.N,V.ao,V.eJ,V.cK,V.as,V.V,V.O,V.ay,V.cT,V.D,V.y,U.dc,U.dd,U.de,M.cq,M.cv,M.a9,A.cj,A.eh,A.R,A.ck,A.cs,A.cR,A.cY,A.fg,A.bT,A.bU,A.bW,A.bX,A.d9,A.hC,F.aO,F.eM,F.bH,F.f5,F.bP,F.fY,F.fZ,F.h_,F.h0,F.b1,F.hP,F.hQ,F.hT,F.hV,F.hW,F.hX,O.d1,O.cJ,O.fh,T.hl,X.iR,X.hg,X.eW,X.cQ,V.h1])
s(J.a,[J.f_,J.cB,J.cC,J.aS,J.bG,J.bg,H.bO,W.d,W.ed,W.cl,W.ae,W.G,W.dj,W.a5,W.eB,W.eC,W.dl,W.cu,W.dn,W.eE,W.h,W.dr,W.ar,W.eV,W.dt,W.aP,W.f9,W.fs,W.dz,W.dA,W.at,W.dB,W.dE,W.aw,W.dI,W.dK,W.aB,W.dL,W.aC,W.dQ,W.aj,W.dT,W.ho,W.aF,W.dW,W.hs,W.hI,W.e0,W.e2,W.e4,W.e6,W.e8,P.aU,P.dv,P.aX,P.dG,P.fO,P.dR,P.aY,P.dY,P.ei,P.di,P.cU,P.dN])
s(J.cC,[J.fK,J.bY,J.aT])
t(J.j_,J.aS)
s(J.bG,[J.cA,J.cz])
t(P.f8,P.dy)
s(P.f8,[H.da,W.i7,W.i6,P.eP])
t(H.M,H.da)
s(P.i,[H.n,H.bK,H.i0,P.eY])
t(H.eH,H.bK)
s(P.eZ,[H.cG,H.i1])
s(P.bd,[H.fG,H.f2,H.hF,H.ep,H.fV,P.cP,P.ac,P.hH,P.hE,P.ha,P.eu,P.eA])
s(H.bz,[H.iN,H.hh,H.f1,H.iD,H.iE,H.iF,P.i3,P.i2,P.i4,P.i5,P.ir,P.iq,P.iy,P.ij,P.ik,P.fc,P.eF,P.eG,W.fu,W.fw,W.fU,W.hd,W.ia,P.iz,P.eQ,P.eR,P.ek,E.fQ,E.fR,E.fS,E.hn,D.eK,D.eL,F.iu,F.iK,F.iL,F.hZ,F.hY,F.hR,F.hS,O.fk,O.fl,O.fm,O.fn,O.fo,O.fp,O.fq,O.fr,T.hm,V.iJ,V.h3,V.h2,O.iH])
s(H.hh,[H.hb,H.bw])
t(P.fb,P.Y)
t(H.H,P.fb)
t(H.bi,H.n)
t(H.cL,H.bO)
s(H.cL,[H.c0,H.c2])
t(H.c1,H.c0)
t(H.bN,H.c1)
t(H.c3,H.c2)
t(H.cM,H.c3)
s(H.cM,[H.fz,H.fA,H.fB,H.fC,H.fD,H.cN,H.fE])
t(P.ip,P.eY)
t(P.ii,P.it)
t(P.ie,P.il)
t(P.ev,P.he)
t(P.eI,P.er)
t(P.hJ,P.eI)
t(P.hK,P.ev)
s(P.a3,[P.K,P.u])
s(P.ac,[P.bl,P.eX])
s(W.d,[W.C,W.eO,W.aA,W.c4,W.aE,W.ak,W.c7,W.i_,W.c_,P.el,P.ba])
s(W.C,[W.S,W.aM])
s(W.S,[W.k,P.j])
s(W.k,[W.ef,W.eg,W.bb,W.eS,W.bF,W.fW])
t(W.ew,W.ae)
t(W.bB,W.dj)
s(W.a5,[W.ey,W.ez])
t(W.dm,W.dl)
t(W.ct,W.dm)
t(W.dp,W.dn)
t(W.eD,W.dp)
t(W.aq,W.cl)
t(W.ds,W.dr)
t(W.eN,W.ds)
t(W.du,W.dt)
t(W.bE,W.du)
t(W.aZ,W.h)
s(W.aZ,[W.bh,W.ah,W.bm])
t(W.ft,W.dz)
t(W.fv,W.dA)
t(W.dC,W.dB)
t(W.fx,W.dC)
t(W.dF,W.dE)
t(W.cO,W.dF)
t(W.dJ,W.dI)
t(W.fL,W.dJ)
t(W.fT,W.dK)
t(W.c5,W.c4)
t(W.h6,W.c5)
t(W.dM,W.dL)
t(W.h7,W.dM)
t(W.hc,W.dQ)
t(W.dU,W.dT)
t(W.hi,W.dU)
t(W.c8,W.c7)
t(W.hj,W.c8)
t(W.dX,W.dW)
t(W.hr,W.dX)
t(W.b3,W.ah)
t(W.e1,W.e0)
t(W.i8,W.e1)
t(W.dk,W.cu)
t(W.e3,W.e2)
t(W.ib,W.e3)
t(W.e5,W.e4)
t(W.dD,W.e5)
t(W.e7,W.e6)
t(W.im,W.e7)
t(W.e9,W.e8)
t(W.io,W.e9)
t(W.i9,P.d0)
t(P.a2,P.ih)
t(P.dw,P.dv)
t(P.f4,P.dw)
t(P.dH,P.dG)
t(P.fH,P.dH)
t(P.dS,P.dR)
t(P.hf,P.dS)
t(P.dZ,P.dY)
t(P.ht,P.dZ)
t(P.ej,P.di)
t(P.fI,P.ba)
t(P.dO,P.dN)
t(P.h9,P.dO)
s(K.cy,[K.av,L.d8])
s(E.en,[Z.cm,A.cV,T.d2])
s(D.Q,[D.aQ,D.aR,D.x,X.fN])
s(X.fN,[X.cF,X.au,X.bM,X.d7])
s(O.an,[D.cE,U.bD,M.co])
s(D.eq,[U.et,U.a1])
t(U.cp,U.a1)
s(A.cV,[A.fd,A.h5])
s(A.d9,[A.b_,A.hz,A.hA,A.hB,A.hx,A.L,A.hy,A.B,A.bS,A.hD,A.bV,A.a_,A.bn,A.b0])
t(F.h4,F.eM)
t(F.hw,F.f5)
t(F.hU,F.hV)
t(F.fF,F.hW)
s(O.d1,[O.cI,O.cW])
s(O.cJ,[O.fe,O.ff,O.af])
s(O.af,[O.fi,O.fj])
t(T.hk,T.d2)
t(X.eU,X.hg)
u(H.da,H.hG)
u(H.c0,P.q)
u(H.c1,H.cw)
u(H.c2,P.q)
u(H.c3,H.cw)
u(P.dy,P.q)
u(W.dj,W.ex)
u(W.dl,P.q)
u(W.dm,W.I)
u(W.dn,P.q)
u(W.dp,W.I)
u(W.dr,P.q)
u(W.ds,W.I)
u(W.dt,P.q)
u(W.du,W.I)
u(W.dz,P.Y)
u(W.dA,P.Y)
u(W.dB,P.q)
u(W.dC,W.I)
u(W.dE,P.q)
u(W.dF,W.I)
u(W.dI,P.q)
u(W.dJ,W.I)
u(W.dK,P.Y)
u(W.c4,P.q)
u(W.c5,W.I)
u(W.dL,P.q)
u(W.dM,W.I)
u(W.dQ,P.Y)
u(W.dT,P.q)
u(W.dU,W.I)
u(W.c7,P.q)
u(W.c8,W.I)
u(W.dW,P.q)
u(W.dX,W.I)
u(W.e0,P.q)
u(W.e1,W.I)
u(W.e2,P.q)
u(W.e3,W.I)
u(W.e4,P.q)
u(W.e5,W.I)
u(W.e6,P.q)
u(W.e7,W.I)
u(W.e8,P.q)
u(W.e9,W.I)
u(P.dv,P.q)
u(P.dw,W.I)
u(P.dG,P.q)
u(P.dH,W.I)
u(P.dR,P.q)
u(P.dS,W.I)
u(P.dY,P.q)
u(P.dZ,W.I)
u(P.di,P.Y)
u(P.dN,P.q)
u(P.dO,W.I)})()
var v={mangledGlobalNames:{u:"int",K:"double",a3:"num",r:"String",b5:"bool",aW:"Null",aV:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Q]},{func:1,ret:-1,args:[D.Q]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:-1,args:[P.u,[P.i,E.ap]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aW,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[P.u,[P.i,D.X]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.u,[P.i,U.a1]]},{func:1,ret:-1,args:[P.u,[P.i,M.a9]]},{func:1,ret:-1,args:[P.u,[P.i,V.as]]},{func:1,ret:P.aW,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.b5,args:[[P.i,D.X]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bb.prototype
C.A=J.a.prototype
C.a=J.aS.prototype
C.B=J.cz.prototype
C.c=J.cA.prototype
C.i=J.cB.prototype
C.d=J.bG.prototype
C.b=J.bg.prototype
C.C=J.aT.prototype
C.n=J.fK.prototype
C.E=P.cU.prototype
C.j=J.bY.prototype
C.o=W.b3.prototype
C.p=W.c_.prototype
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.q=function() {
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
C.w=function(getTagFallback) {
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
C.r=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.t=function(hooks) {
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
C.v=function(hooks) {
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
C.u=function(hooks) {
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

C.x=new P.fJ()
C.m=new P.hJ()
C.y=new P.hK()
C.e=new P.ii()
C.h=new P.aN(0)
C.z=new P.aN(5e6)
C.D=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.F=new P.bo(null,2)})();(function staticFields(){$.ad=0
$.bx=null
$.jm=null
$.jY=null
$.jU=null
$.k0=null
$.iA=null
$.iG=null
$.jg=null
$.bp=null
$.cb=null
$.cc=null
$.jb=!1
$.aa=C.e
$.a0=[]
$.jx=null
$.jB=null
$.ai=null
$.jG=null
$.jN=null
$.jP=null
$.hL=null
$.hM=null
$.hN=null
$.jO=null
$.jA=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ml","k5",function(){return H.jW("_$dart_dartClosure")})
u($,"mm","jk",function(){return H.jW("_$dart_js")})
u($,"mn","k6",function(){return H.al(H.hv({
toString:function(){return"$receiver$"}}))})
u($,"mo","k7",function(){return H.al(H.hv({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mp","k8",function(){return H.al(H.hv(null))})
u($,"mq","k9",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mt","kc",function(){return H.al(H.hv(void 0))})
u($,"mu","kd",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ms","kb",function(){return H.al(H.jL(null))})
u($,"mr","ka",function(){return H.al(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mw","kf",function(){return H.al(H.jL(void 0))})
u($,"mv","ke",function(){return H.al(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mJ","jl",function(){return P.l5()})
u($,"mL","kj",function(){return P.kV("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mD","ki",function(){return Z.a8(0)})
u($,"mx","kg",function(){return Z.a8(511)})
u($,"mF","ab",function(){return Z.a8(1)})
u($,"mE","aL",function(){return Z.a8(2)})
u($,"mz","aK",function(){return Z.a8(4)})
u($,"mG","b6",function(){return Z.a8(8)})
u($,"mH","b7",function(){return Z.a8(16)})
u($,"mA","cf",function(){return Z.a8(32)})
u($,"mB","cg",function(){return Z.a8(64)})
u($,"mC","kh",function(){return Z.a8(96)})
u($,"mI","bu",function(){return Z.a8(128)})
u($,"my","aJ",function(){return Z.a8(256)})
u($,"mk","k4",function(){return new V.eJ(1e-9)})
u($,"mj","z",function(){return $.k4()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bO,ArrayBufferView:H.bO,Float32Array:H.bN,Float64Array:H.bN,Int16Array:H.fz,Int32Array:H.fA,Int8Array:H.fB,Uint16Array:H.fC,Uint32Array:H.fD,Uint8ClampedArray:H.cN,CanvasPixelArray:H.cN,Uint8Array:H.fE,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.ed,HTMLAnchorElement:W.ef,HTMLAreaElement:W.eg,Blob:W.cl,HTMLCanvasElement:W.bb,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CSSPerspective:W.ew,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bB,MSStyleCSSProperties:W.bB,CSS2Properties:W.bB,CSSImageValue:W.a5,CSSKeywordValue:W.a5,CSSNumericValue:W.a5,CSSPositionValue:W.a5,CSSResourceValue:W.a5,CSSUnitValue:W.a5,CSSURLImageValue:W.a5,CSSStyleValue:W.a5,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.ey,CSSUnparsedValue:W.ez,DataTransferItemList:W.eB,DOMException:W.eC,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.eD,DOMTokenList:W.eE,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aq,FileList:W.eN,FileWriter:W.eO,HTMLFormElement:W.eS,Gamepad:W.ar,History:W.eV,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,ImageData:W.aP,HTMLImageElement:W.bF,KeyboardEvent:W.bh,Location:W.f9,MediaList:W.fs,MIDIInputMap:W.ft,MIDIOutputMap:W.fv,MimeType:W.at,MimeTypeArray:W.fx,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aw,PluginArray:W.fL,RTCStatsReport:W.fT,HTMLSelectElement:W.fW,SourceBuffer:W.aA,SourceBufferList:W.h6,SpeechGrammar:W.aB,SpeechGrammarList:W.h7,SpeechRecognitionResult:W.aC,Storage:W.hc,CSSStyleSheet:W.aj,StyleSheet:W.aj,TextTrack:W.aE,TextTrackCue:W.ak,VTTCue:W.ak,TextTrackCueList:W.hi,TextTrackList:W.hj,TimeRanges:W.ho,Touch:W.aF,TouchEvent:W.bm,TouchList:W.hr,TrackDefaultList:W.hs,CompositionEvent:W.aZ,FocusEvent:W.aZ,TextEvent:W.aZ,UIEvent:W.aZ,URL:W.hI,VideoTrackList:W.i_,WheelEvent:W.b3,Window:W.c_,DOMWindow:W.c_,CSSRuleList:W.i8,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.ib,NamedNodeMap:W.dD,MozNamedAttrMap:W.dD,SpeechRecognitionResultList:W.im,StyleSheetList:W.io,SVGLength:P.aU,SVGLengthList:P.f4,SVGNumber:P.aX,SVGNumberList:P.fH,SVGPointList:P.fO,SVGStringList:P.hf,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.aY,SVGTransformList:P.ht,AudioBuffer:P.ei,AudioParamMap:P.ej,AudioTrackList:P.el,AudioContext:P.ba,webkitAudioContext:P.ba,BaseAudioContext:P.ba,OfflineAudioContext:P.fI,WebGL2RenderingContext:P.cU,SQLResultSetRowList:P.h9})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
W.c4.$nativeSuperclassTag="EventTarget"
W.c5.$nativeSuperclassTag="EventTarget"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(O.jZ,[])
else O.jZ([])})})()
//# sourceMappingURL=test.dart.js.map
