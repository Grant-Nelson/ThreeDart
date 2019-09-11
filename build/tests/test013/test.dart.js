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
a[c]=function(){a[c]=function(){H.nU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ku"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ku"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ku(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ke:function ke(){},
fU:function(){return new P.cI("No element")},
mm:function(){return new P.cI("Too many elements")},
dT:function(a,b,c,d,e){if(c-b<=32)H.mH(a,b,c,d,e)
else H.mG(a,b,c,d,e)},
mH:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mG:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a3(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a3(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.d(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.d(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.d(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.d(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.d(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.X(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ab()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ab()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ab()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.dT(a2,a3,o-2,a5,a6)
H.dT(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.X(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.X(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ab()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.dT(a2,o,n,a5,a6)}else H.dT(a2,o,n,a5,a6)},
p:function p(a){this.a=a},
fy:function fy(){},
bV:function bV(){},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
h7:function h7(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
j_:function j_(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(){},
e4:function e4(){},
e3:function e3(){},
cf:function(a){var u,t=H.nW(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nB:function(a){return v.types[H.ac(a)]},
nI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aM(a)
if(typeof u!=="string")throw H.i(H.bH(a))
return u},
cD:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cE:function(a){return H.mt(a)+H.kq(H.bI(a),0,null)},
mt:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ic6){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cf(t.length>1&&C.c.aF(t,0)===36?C.c.an(t,1):t)},
l4:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mB:function(a){var u,t,s,r=H.c([],[P.q])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bH(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.bd(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bH(s))}return H.l4(r)},
l5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bH(s))
if(s<0)throw H.i(H.bH(s))
if(s>65535)return H.mB(a)}return H.l4(a)},
kg:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bd(u,10))>>>0,56320|u&1023)}throw H.i(P.aZ(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mA:function(a){var u=H.bZ(a).getFullYear()+0
return u},
my:function(a){var u=H.bZ(a).getMonth()+1
return u},
mu:function(a){var u=H.bZ(a).getDate()+0
return u},
mv:function(a){var u=H.bZ(a).getHours()+0
return u},
mx:function(a){var u=H.bZ(a).getMinutes()+0
return u},
mz:function(a){var u=H.bZ(a).getSeconds()+0
return u},
mw:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.bH(a))},
d:function(a,b){if(a==null)J.bN(a)
throw H.i(H.cb(a,b))},
cb:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,s,null)
u=H.ac(J.bN(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.dN(b,s)},
nx:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c_(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c_(a,c,!0,b,"end",u)
return new P.aE(!0,b,"end",null)},
bH:function(a){return new P.aE(!0,a,null,null)},
ns:function(a){if(typeof a!=="number")throw H.i(H.bH(a))
return a},
i:function(a){var u
if(a==null)a=new P.dJ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lO})
u.name=""}else u.toString=H.lO
return u},
lO:function(){return J.aM(this.dartException)},
B:function(a){throw H.i(a)},
w:function(a){throw H.i(P.bo(a))},
b5:function(a){var u,t,s,r,q,p
a=H.lN(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lh:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kZ:function(a,b){return new H.hB(a,b==null?null:b.method)},
kf:function(a,b){var u=b==null,t=u?null:b.method
return new H.fX(a,t,u?null:b.receiver)},
aw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bd(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kf(H.h(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kZ(H.h(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lR()
q=$.lS()
p=$.lT()
o=$.lU()
n=$.lX()
m=$.lY()
l=$.lW()
$.lV()
k=$.m_()
j=$.lZ()
i=r.ae(u)
if(i!=null)return f.$1(H.kf(H.Q(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.kf(H.Q(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kZ(H.Q(u),i))}}return f.$1(new H.iF(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dV()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aE(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dV()
return a},
cd:function(a){var u
if(a==null)return new H.eK(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eK(a)},
nA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nH:function(a,b,c,d,e,f){H.k(a,"$ibs")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.z("Unsupported number of arguments for wrapped closure"))},
ca:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nH)
a.$identity=u
return u},
mg:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i4().constructor.prototype):Object.create(new H.ci(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aN
if(typeof t!=="number")return t.E()
$.aN=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kL(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mc(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kL(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mc:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nB,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kK:H.k5
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.i("Error in functionType of tearoff")},
md:function(a,b,c,d){var u=H.k5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mf(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.md(t,!r,u,b)
if(t===0){r=$.aN
if(typeof r!=="number")return r.E()
$.aN=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cj
return new Function(r+H.h(q==null?$.cj=H.fh("self"):q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aN
if(typeof r!=="number")return r.E()
$.aN=r+1
o+=r
r="return function("+o+"){return this."
q=$.cj
return new Function(r+H.h(q==null?$.cj=H.fh("self"):q)+"."+H.h(u)+"("+o+");}")()},
me:function(a,b,c,d){var u=H.k5,t=H.kK
switch(b?-1:a){case 0:throw H.i(H.mE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mf:function(a,b){var u,t,s,r,q,p,o,n=$.cj
if(n==null)n=$.cj=H.fh("self")
u=$.kJ
if(u==null)u=$.kJ=H.fh("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.me(s,!q,t,b)
if(s===1){n="return function(){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+");"
u=$.aN
if(typeof u!=="number")return u.E()
$.aN=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.h(n)+"."+H.h(t)+"(this."+H.h(u)+", "+o+");"
u=$.aN
if(typeof u!=="number")return u.E()
$.aN=u+1
return new Function(n+u+"}")()},
ku:function(a,b,c,d,e,f,g){return H.mg(a,b,c,d,!!e,!!f,g)},
k5:function(a){return a.a},
kK:function(a){return a.c},
fh:function(a){var u,t,s,r=new H.ci("self","target","receiver","name"),q=J.kc(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.no("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.b6(a,"String"))},
oC:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b6(a,"double"))},
lJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.b6(a,"num"))},
kr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.b6(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.b6(a,"int"))},
lL:function(a,b){throw H.i(H.b6(a,H.cf(H.Q(b).substring(2))))},
nO:function(a,b){throw H.i(H.mb(a,H.cf(H.Q(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.lL(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.nO(a,b)},
nJ:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.lL(a,b)},
lD:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
f6:function(a,b){var u
if(typeof a=="function")return!0
u=H.lD(J.W(a))
if(u==null)return!1
return H.lu(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kn)return a
$.kn=!0
try{if(H.f6(a,b))return a
u=H.jY(b)
t=H.b6(a,u)
throw H.i(t)}finally{$.kn=!1}},
kv:function(a,b){if(a!=null&&!H.kt(a,b))H.B(H.b6(a,H.jY(b)))
return a},
b6:function(a,b){return new H.iv("TypeError: "+P.dm(a)+": type '"+H.h(H.ly(a))+"' is not a subtype of type '"+b+"'")},
mb:function(a,b){return new H.fi("CastError: "+P.dm(a)+": type '"+H.h(H.ly(a))+"' is not a subtype of type '"+b+"'")},
ly:function(a){var u,t=J.W(a)
if(!!t.$icm){u=H.lD(t)
if(u!=null)return H.jY(u)
return"Closure"}return H.cE(a)},
no:function(a){throw H.i(new H.j0(a))},
nU:function(a){throw H.i(new P.fq(a))},
mE:function(a){return new H.hR(a)},
lF:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bI:function(a){if(a==null)return
return a.$ti},
oD:function(a,b,c){return H.ce(a["$a"+H.h(c)],H.bI(b))},
d6:function(a,b,c,d){var u=H.ce(a["$a"+H.h(c)],H.bI(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u=H.ce(a["$a"+H.h(b)],H.bI(a))
return u==null?null:u[c]},
y:function(a,b){var u=H.bI(a)
return u==null?null:u[b]},
jY:function(a){return H.bG(a,null)},
bG:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cf(a[0].name)+H.kq(a,1,b)
if(typeof a=="function")return H.cf(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.h(b[t])}if('func' in a)return H.mY(a,b)
if('futureOr' in a)return"FutureOr<"+H.bG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mY:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.j])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.c.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bG(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bG(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bG(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bG(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.Q(n[g])
i=i+h+H.bG(d[c],a0)+(" "+H.h(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kq:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bf("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bG(p,c)}return"<"+u.i(0)+">"},
ce:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ks:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bI(a)
t=J.W(a)
if(t[b]==null)return!1
return H.lB(H.ce(t[d],u),null,c,null)},
n:function(a,b,c,d){if(a==null)return a
if(H.ks(a,b,c,d))return a
throw H.i(H.b6(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cf(b.substring(2))+H.kq(c,0,null),v.mangledGlobalNames)))},
lB:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
oA:function(a,b,c){return a.apply(b,H.ce(J.W(b)["$a"+H.h(c)],H.bI(b)))},
lH:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="K"||a===-1||a===-2||H.lH(u)}return!1},
kt:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="K"||b===-1||b===-2||H.lH(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kt(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f6(a,b)}u=J.W(a).constructor
t=H.bI(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kt(a,b))throw H.i(H.b6(a,H.jY(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cs" in t.prototype))return!1
r=t.prototype["$a"+"cs"]
q=H.ce(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lu(a,b,c,d)
if('func' in a)return c.name==="bs"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lB(H.ce(m,u),b,p,d)},
lu:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nM(h,b,g,d)},
nM:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
oB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nK:function(a){var u,t,s,r,q=H.Q($.lG.$1(a)),p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.lA.$2(a,q))
if(q!=null){p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jX(u)
$.jP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jV[q]=u
return u}if(s==="-"){r=H.jX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lK(a,u)
if(s==="*")throw H.i(P.li(q))
if(v.leafTags[q]===true){r=H.jX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lK(a,u)},
lK:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jX:function(a){return J.kA(a,!1,null,!!a.$iI)},
nL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jX(u)
else return J.kA(u,c,null,null)},
nF:function(){if(!0===$.kz)return
$.kz=!0
H.nG()},
nG:function(){var u,t,s,r,q,p,o,n
$.jP=Object.create(null)
$.jV=Object.create(null)
H.nE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lM.$1(q)
if(p!=null){o=H.nL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nE:function(){var u,t,s,r,q,p,o=C.x()
o=H.c9(C.y,H.c9(C.z,H.c9(C.p,H.c9(C.p,H.c9(C.A,H.c9(C.B,H.c9(C.C(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lG=new H.jS(r)
$.lA=new H.jT(q)
$.lM=new H.jU(p)},
c9:function(a,b){return a(b)||b},
mo:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.i(new P.fL("Illegal RegExp pattern ("+String(p)+")",a))},
nR:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ny:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lN:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kD:function(a,b,c){var u=H.nS(a,b,c)
return u},
nS:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lN(b),'g'),H.ny(c))},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hB:function hB(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a){this.a=a},
k1:function k1(a){this.a=a},
eK:function eK(a){this.a=a
this.b=null},
cm:function cm(){},
ie:function ie(){},
i4:function i4(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a){this.a=a},
fi:function fi(a){this.a=a},
hR:function hR(a){this.a=a},
j0:function j0(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a,b){this.a=a
this.$ti=b},
h1:function h1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function(a){return a},
bF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.cb(b,a))},
mX:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.nx(a,b,c))
return b},
cA:function cA(){},
dF:function dF(){},
cz:function cz(){},
dG:function dG(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
dH:function dH(){},
hx:function hx(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
nz:function(a){return J.kS(a?Object.keys(a):[],null)},
nW:function(a){return v.mangledGlobalNames[a]},
nN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jR:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kz==null){H.nF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.li("Return interceptor for "+H.h(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kE()]
if(r!=null)return r
r=H.nK(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kE(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
mn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.k4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aZ(a,0,4294967295,"length",null))
return J.kS(new Array(a),b)},
kS:function(a,b){return J.kc(H.c(a,[b]))},
kc:function(a){a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.bw.prototype
if(a==null)return J.ds.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.jR(a)},
kw:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.jR(a)},
jQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.jR(a)},
lE:function(a){if(typeof a=="number")return J.cv.prototype
if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c6.prototype
return a},
kx:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.c6.prototype
return a},
ky:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.P)return a
return J.jR(a)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).t(a,b)},
kG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lE(a).u(a,b)},
f7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kw(a).j(a,b)},
m5:function(a,b,c,d){return J.ky(a).hu(a,b,c,d)},
k2:function(a,b){return J.lE(a).hH(a,b)},
k3:function(a,b){return J.jQ(a).C(a,b)},
m6:function(a,b){return J.jQ(a).J(a,b)},
m7:function(a){return J.ky(a).ghD(a)},
bL:function(a){return J.W(a).gH(a)},
bM:function(a){return J.jQ(a).gO(a)},
bN:function(a){return J.kw(a).gm(a)},
kH:function(a){return J.jQ(a).im(a)},
m8:function(a,b,c){return J.kx(a).b8(a,b,c)},
m9:function(a){return J.kx(a).iz(a)},
aM:function(a){return J.W(a).i(a)},
a:function a(){},
fV:function fV(){},
ds:function ds(){},
dt:function dt(){},
hF:function hF(){},
c6:function c6(){},
bx:function bx(){},
aT:function aT(a){this.$ti=a},
kd:function kd(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cv:function cv(){},
dr:function dr(){},
dq:function dq(){},
bw:function bw(){}},P={
mM:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.np()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ca(new P.j2(s),1)).observe(u,{childList:true})
return new P.j1(s,u,t)}else if(self.setImmediate!=null)return P.nq()
return P.nr()},
mN:function(a){self.scheduleImmediate(H.ca(new P.j3(H.m(a,{func:1,ret:-1})),0))},
mO:function(a){self.setImmediate(H.ca(new P.j4(H.m(a,{func:1,ret:-1})),0))},
mP:function(a){P.ki(C.j,H.m(a,{func:1,ret:-1}))},
ki:function(a,b){var u=C.e.a3(a.a,1000)
return P.mV(u<0?0:u,b)},
lg:function(a,b){var u=C.e.a3(a.a,1000)
return P.mW(u<0?0:u,b)},
mV:function(a,b){var u=new P.eQ()
u.eg(a,b)
return u},
mW:function(a,b){var u=new P.eQ()
u.eh(a,b)
return u},
mQ:function(a,b){var u,t,s
b.a=1
try{a.dM(new P.jd(b),new P.je(b),null)}catch(s){u=H.aw(s)
t=H.cd(s)
P.nP(new P.jf(b,u,t))}},
lp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaC")
if(u>=4){t=b.bS()
b.a=a.a
b.c=a.c
P.cV(b,t)}else{t=H.k(b.c,"$ib8")
b.a=2
b.c=a
a.cY(t)}},
cV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iae")
P.jK(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cV(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.k(q,"$iae")
P.jK(i,i,g.b,q.a,q.b)
return}l=$.a_
if(l!==n)$.a_=n
else l=i
g=b.c
if((g&15)===8)new P.jj(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.ji(u,b,q).$0()}else if((g&2)!==0)new P.jh(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.W(g).$ics){if(g.a>=4){k=H.k(o.c,"$ib8")
o.c=null
b=o.bc(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.lp(g,o)
return}}j=b.b
k=H.k(j.c,"$ib8")
j.c=null
b=j.bc(k)
g=u.a
p=u.b
if(!g){H.H(p,H.y(j,0))
j.a=4
j.c=p}else{H.k(p,"$iae")
j.a=8
j.c=p}h.a=j
g=j}},
nk:function(a,b){if(H.f6(a,{func:1,args:[P.P,P.ao]}))return H.m(a,{func:1,ret:null,args:[P.P,P.ao]})
if(H.f6(a,{func:1,args:[P.P]}))return H.m(a,{func:1,ret:null,args:[P.P]})
throw H.i(P.k4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nj:function(){var u,t
for(;u=$.c8,u!=null;){$.d5=null
t=u.b
$.c8=t
if(t==null)$.d4=null
u.a.$0()}},
nn:function(){$.ko=!0
try{P.nj()}finally{$.d5=null
$.ko=!1
if($.c8!=null)$.kF().$1(P.lC())}},
lx:function(a){var u=new P.eb(a)
if($.c8==null){$.c8=$.d4=u
if(!$.ko)$.kF().$1(P.lC())}else $.d4=$.d4.b=u},
nm:function(a){var u,t,s=$.c8
if(s==null){P.lx(a)
$.d5=$.d4
return}u=new P.eb(a)
t=$.d5
if(t==null){u.b=s
$.c8=$.d5=u}else{u.b=t.b
$.d5=t.b=u
if(u.b==null)$.d4=u}},
nP:function(a){var u=null,t=$.a_
if(C.f===t){P.jM(u,u,C.f,a)
return}P.jM(u,u,t,H.m(t.bV(a),{func:1,ret:-1}))},
lf:function(a,b){var u=$.a_
if(u===C.f)return P.ki(a,H.m(b,{func:1,ret:-1}))
return P.ki(a,H.m(u.bV(b),{func:1,ret:-1}))},
mK:function(a,b){var u=$.a_
if(u===C.f)return P.lg(a,H.m(b,{func:1,ret:-1,args:[P.b3]}))
return P.lg(a,H.m(u.da(b,P.b3),{func:1,ret:-1,args:[P.b3]}))},
jK:function(a,b,c,d,e){var u={}
u.a=d
P.nm(new P.jL(u,e))},
lv:function(a,b,c,d,e){var u,t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
lw:function(a,b,c,d,e,f,g){var u,t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
nl:function(a,b,c,d,e,f,g,h,i){var u,t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
jM:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bV(d):c.hE(d,-1)
P.lx(d)},
j2:function j2(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
eQ:function eQ(){this.c=0},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jc:function jc(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a){this.a=a
this.b=null},
i7:function i7(){},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
i8:function i8(){},
b3:function b3(){},
ae:function ae(a,b){this.a=a
this.b=b},
jH:function jH(){},
jL:function jL(a,b){this.a=a
this.b=b},
jq:function jq(){},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function(a,b){return new H.a1([a,b])},
mp:function(a){return H.nA(a,new H.a1([null,null]))},
dx:function(a){return new P.jo([a])},
km:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mU:function(a,b,c){var u=new P.er(a,b,[c])
u.c=a.e
return u},
ml:function(a,b,c){var u,t
if(P.kp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.j])
C.a.h($.ar,a)
try{P.mZ(a,u)}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=P.ld(b,H.nJ(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
kb:function(a,b,c){var u,t
if(P.kp(a))return b+"..."+c
u=new P.bf(b)
C.a.h($.ar,a)
try{t=u
t.a=P.ld(t.a,a,", ")}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kp:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mZ:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.h(n.gD(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.v()){if(l<=4){C.a.h(b,H.h(r))
return}t=H.h(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.v();r=q,q=p){p=n.gD(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.h(r)
t=H.h(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
kU:function(a,b){var u,t,s=P.dx(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t)s.h(0,H.H(a[t],b))
return s},
kW:function(a){var u,t={}
if(P.kp(a))return"{...}"
u=new P.bf("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.m6(a,new P.h5(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jo:function jo(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a){this.a=a
this.c=this.b=null},
er:function er(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h2:function h2(){},
v:function v(){},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
aa:function aa(){},
jv:function jv(){},
es:function es(){},
cn:function cn(){},
co:function co(){},
fA:function fA(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fQ:function fQ(a){this.a=a},
iI:function iI(){},
iJ:function iJ(){},
jF:function jF(a){this.b=0
this.c=a},
mk:function(a){if(a instanceof H.cm)return a.i(0)
return"Instance of '"+H.h(H.cE(a))+"'"},
mq:function(a,b,c){var u,t=J.mn(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.n(t,u,b)
return H.n(t,"$ib",[c],"$ab")},
kV:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bM(a);u.v();)C.a.h(s,H.H(u.gD(u),c))
if(b)return s
return H.n(J.kc(s),"$ib",t,"$ab")},
kh:function(a){var u,t
if(a.constructor===Array){H.n(a,"$iaT",[P.q],"$aaT")
u=a.length
t=P.l7(0,null,u)
return H.l5(t<u?C.a.dZ(a,0,t):a)}return P.mI(a,0,null)},
mI:function(a,b,c){var u,t,s=J.bM(a)
for(u=0;u<b;++u)if(!s.v())throw H.i(P.aZ(b,0,u,null,null))
t=[]
for(;s.v();)t.push(s.gD(s))
return H.l5(t)},
mC:function(a){return new H.fW(a,H.mo(a,!1,!0,!1,!1,!1))},
ld:function(a,b,c){var u=J.bM(b)
if(!u.v())return a
if(c.length===0){do a+=H.h(u.gD(u))
while(u.v())}else{a+=H.h(u.gD(u))
for(;u.v();)a=a+c+H.h(u.gD(u))}return a},
lt:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.i){u=$.m4().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hI(H.H(b,H.aj(c,"cn",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kg(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mh:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
di:function(a){if(a>=10)return""+a
return"0"+a},
kN:function(a){return new P.bq(1000*a)},
dm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mk(a)},
ma:function(a){return new P.aE(!1,null,null,a)},
k4:function(a,b,c){return new P.aE(!0,a,b,c)},
dN:function(a,b){return new P.c_(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
l7:function(a,b,c){if(0>a||a>c)throw H.i(P.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aZ(b,a,c,"end",null))
return b}return c},
l6:function(a,b){if(typeof a!=="number")return a.ab()
if(a<0)throw H.i(P.aZ(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ac(e==null?J.bN(b):e)
return new P.fT(u,!0,a,c,"Index out of range")},
ah:function(a){return new P.iG(a)},
li:function(a){return new P.iE(a)},
lc:function(a){return new P.cI(a)},
bo:function(a){return new P.fl(a)},
z:function(a){return new P.ej(a)},
kC:function(a){H.nN(a)},
M:function M(){},
ay:function ay(a,b){this.a=a
this.b=b},
D:function D(){},
bq:function bq(a){this.a=a},
fw:function fw(){},
fx:function fx(){},
br:function br(){},
fa:function fa(){},
dJ:function dJ(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fT:function fT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iG:function iG(a){this.a=a},
iE:function iE(a){this.a=a},
cI:function cI(a){this.a=a},
fl:function fl(a){this.a=a},
hE:function hE(){},
dV:function dV(){},
fq:function fq(a){this.a=a},
ej:function ej(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
bs:function bs(){},
q:function q(){},
e:function e(){},
aS:function aS(){},
b:function b(){},
G:function G(){},
K:function K(){},
a8:function a8(){},
P:function P(){},
ao:function ao(){},
j:function j(){},
bf:function bf(a){this.a=a},
nv:function(a){var u,t=J.W(a)
if(!!t.$ibt){u=t.gdi(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eV(a.data,a.height,a.width)},
nu:function(a){if(a instanceof P.eV)return{data:a.a,height:a.b,width:a.c}
return a},
bh:function(a){var u,t,s,r,q
if(a==null)return
u=P.kT(P.j,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=H.Q(t[r])
u.n(0,q,a[q])}return u},
nt:function(a){var u={}
a.J(0,new P.jN(u))
return u},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(){},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mT:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jp:function jp(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
fZ:function fZ(){},
bd:function bd(){},
hC:function hC(){},
hJ:function hJ(){},
cF:function cF(){},
ib:function ib(){},
o:function o(){},
bg:function bg(){},
is:function is(){},
ep:function ep(){},
eq:function eq(){},
eA:function eA(){},
eB:function eB(){},
eM:function eM(){},
eN:function eN(){},
eT:function eT(){},
eU:function eU(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(a){this.a=a},
ff:function ff(){},
bO:function bO(){},
hD:function hD(){},
ec:function ec(){},
dc:function dc(){},
dM:function dM(){},
c0:function c0(){},
dP:function dP(){},
dX:function dX(){},
e2:function e2(){},
i3:function i3(){},
eI:function eI(){},
eJ:function eJ(){}},W={
kI:function(){var u=document.createElement("a")
return u},
k6:function(){var u=document.createElement("canvas")
return u},
mj:function(a,b,c){var u=document.body,t=(u&&C.o).ad(u,a,b,c)
t.toString
u=W.E
u=new H.cS(new W.ai(t),H.m(new W.fz(),{func:1,ret:P.M,args:[u]}),[u])
return H.k(u.gaD(u),"$iR")},
kQ:function(a){H.k(a,"$if")
return"wheel"},
cr:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ky(a)
t=u.gdL(a)
if(typeof t==="string")r=u.gdL(a)}catch(s){H.aw(s)}return r},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lr:function(a,b,c,d){var u=W.jm(W.jm(W.jm(W.jm(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.lz(new W.jb(c),W.l)
if(u!=null&&!0)J.m5(a,b,u,!1)
return new W.ja(a,b,u,!1,[e])},
lq:function(a){var u=W.kI(),t=window.location
u=new W.bE(new W.ju(u,t))
u.ea(a)
return u},
mR:function(a,b,c,d){H.k(a,"$iR")
H.Q(b)
H.Q(c)
H.k(d,"$ibE")
return!0},
mS:function(a,b,c,d){var u,t,s
H.k(a,"$iR")
H.Q(b)
H.Q(c)
u=H.k(d,"$ibE").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ls:function(){var u=P.j,t=P.kU(C.l,u),s=H.y(C.l,0),r=H.m(new W.jC(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jB(t,P.dx(u),P.dx(u),P.dx(u),null)
t.ef(null,new H.h8(C.l,r,[s,u]),q,null)
return t},
lz:function(a,b){var u=$.a_
if(u===C.f)return a
return u.da(a,b)},
t:function t(){},
f8:function f8(){},
d9:function d9(){},
f9:function f9(){},
ch:function ch(){},
db:function db(){},
bl:function bl(){},
bQ:function bQ(){},
cl:function cl(){},
bm:function bm(){},
cp:function cp(){},
fm:function fm(){},
S:function S(){},
cq:function cq(){},
fn:function fn(){},
aO:function aO(){},
aP:function aP(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
az:function az(){},
ft:function ft(){},
dj:function dj(){},
dk:function dk(){},
fu:function fu(){},
fv:function fv(){},
j6:function j6(a,b){this.a=a
this.b=b},
R:function R(){},
fz:function fz(){},
l:function l(){},
f:function f(){},
aQ:function aQ(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
aR:function aR(){},
fP:function fP(){},
bT:function bT(){},
bt:function bt(){},
cu:function cu(){},
aU:function aU(){},
dy:function dy(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(a){this.a=a},
ho:function ho(){},
hp:function hp(a){this.a=a},
aX:function aX(){},
hq:function hq(){},
ab:function ab(){},
ai:function ai(a){this.a=a},
E:function E(){},
cB:function cB(){},
aY:function aY(){},
hH:function hH(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hS:function hS(){},
b_:function b_(){},
i1:function i1(){},
b0:function b0(){},
i2:function i2(){},
b1:function b1(){},
i5:function i5(){},
i6:function i6(a){this.a=a},
aI:function aI(){},
c1:function c1(){},
dW:function dW(){},
ic:function ic(){},
id:function id(){},
cL:function cL(){},
b2:function b2(){},
aJ:function aJ(){},
ig:function ig(){},
ih:function ih(){},
il:function il(){},
b4:function b4(){},
aK:function aK(){},
iq:function iq(){},
ir:function ir(){},
bB:function bB(){},
iH:function iH(){},
iZ:function iZ(){},
b7:function b7(){},
cT:function cT(){},
cU:function cU(){},
j7:function j7(){},
ee:function ee(){},
jl:function jl(){},
ex:function ex(){},
jy:function jy(){},
jz:function jz(){},
j5:function j5(){},
j8:function j8(a){this.a=a},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kl:function kl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ja:function ja(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jb:function jb(a){this.a=a},
bE:function bE(a){this.a=a},
C:function C(){},
dI:function dI(a){this.a=a},
hz:function hz(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(){},
jw:function jw(){},
jx:function jx(){},
jB:function jB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jC:function jC(){},
jA:function jA(){},
dp:function dp(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
au:function au(){},
ju:function ju(a,b){this.a=a
this.b=b},
eW:function eW(a){this.a=a},
jG:function jG(a){this.a=a},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
eo:function eo(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
d_:function d_(){},
d0:function d0(){},
eG:function eG(){},
eH:function eH(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
d1:function d1(){},
d2:function d2(){},
eR:function eR(){},
eS:function eS(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){}},O={
k7:function(a){var u=new O.a0([a])
u.ba(a)
return u},
a0:function a0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cx:function cx(){this.b=this.a=null},
dB:function dB(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
h9:function h9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dD:function dD(){},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(){var _=this
_.e=_.d=_.c=_.b=null},
hd:function hd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
he:function he(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dR:function dR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(){}},E={
kR:function(){var u=new E.ag()
u.a=""
u.b=!0
u.se9(0,O.k7(E.ag))
u.y.aP(u.gi5(),u.gi8())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbr(0,null)
return u},
mD:function(a,b){var u=new E.hL(a)
u.e6(a,b)
return u},
mJ:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibQ)return E.le(a,!0,!0,!0,!1)
u=W.k6()
t=u.style
t.width="100%"
t.height="100%"
s.gde(a).h(0,u)
return E.le(u,!0,!0,!0,!1)},
le:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dZ(),j=H.k(C.h.co(a,"webgl2",P.mp(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic0")
if(j==null)H.B(P.z("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mD(j,a)
u=new T.ii(j)
H.ac(j.getParameter(3379))
u.c=H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e5(a)
t=new X.fY()
t.c=new X.at(!1,!1,!1)
t.sfT(P.dx(P.q))
u.b=t
t=new X.hr(u)
t.f=0
t.r=V.be()
t.x=V.be()
t.ch=t.Q=1
u.c=t
t=new X.h3(u)
t.r=0
t.x=V.be()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ip(u)
t.f=V.be()
t.r=V.be()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seE(H.c([],[[P.cJ,P.P]]))
t=u.z
s=document
r=W.ab
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.m(u.gf9(),q),!1,r))
t=u.z
p=W.l
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.m(u.gff(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.m(u.gf3(),o),!1,p))
t=u.z
n=W.aU
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.m(u.gfj(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.m(u.gfh(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.m(u.gfn(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.m(u.gfs(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.m(u.gfp(),q),!1,r))
n=u.z
W.kQ(a)
m=W.b7;(n&&C.a).h(n,W.a7(a,H.Q(W.kQ(a)),H.m(u.gfu(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.m(u.gfb(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.m(u.gfd(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.m(u.gfw(),o),!1,p))
p=u.z
o=W.aK
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.m(u.gfO(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.m(u.gfK(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.m(u.gfM(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.d_()
return k},
fg:function fg(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ik:function ik(a){this.a=a}},Z={
lo:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d3(c)),35044)
a.bindBuffer(b,null)
return new Z.e9(b,u)},
aB:function(a){return new Z.bD(a)},
e9:function e9(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ea:function ea(a){this.a=a},
ck:function ck(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.a=a}},D={
O:function(){var u=new D.bR()
u.sac(null)
u.saJ(null)
u.c=null
u.d=0
return u},
fj:function fj(){},
bR:function bR(){var _=this
_.d=_.c=_.b=_.a=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
x:function x(){this.b=null},
bu:function bu(a){this.b=null
this.$ti=a},
bv:function bv(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bp:function bp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dv:function dv(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dL:function dL(){},
dU:function dU(){}},X={de:function de(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},fY:function fY(){var _=this
_.d=_.c=_.b=_.a=null},dz:function dz(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h3:function h3(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bc:function bc(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hr:function hr(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cy:function cy(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hI:function hI(){},e0:function e0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ip:function ip(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e5:function e5(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ka:function(a){var u=new X.fM(),t=new V.ax(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.l9
if(t==null){t=V.l8(0,0,1,1)
$.l9=t}u.r=t
return u},
l0:function(a){var u,t,s=new X.dK()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gei())
t=new D.J("mover",u,s.b,[U.ad])
t.b=!0
s.aj(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.N().a)){s.c=1.0471975511965976
t=new D.J("fov",t,1.0471975511965976,[P.D])
t.b=!0
s.aj(t)}t=s.d
if(!(Math.abs(t-0.1)<$.N().a)){s.d=0.1
t=new D.J("near",t,0.1,[P.D])
t.b=!0
s.aj(t)}t=s.e
if(!(Math.abs(t-2000)<$.N().a)){s.e=2000
t=new D.J("far",t,2000,[P.D])
t.b=!0
s.aj(t)}return s},
bP:function bP(){},
fM:function fM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){this.b=this.a=null},
dK:function dK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){}},V={
nX:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dU(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.ax("null",c)
return C.c.ax(C.d.dN(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cc:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.j])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.w)(a),++s){r=V.U(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.n(p,q,C.c.ax(p[q],t))}return p},
kB:function(a){return C.d.iw(Math.pow(2,C.J.c6(Math.log(H.ns(a))/Math.log(2))))},
bW:function(){var u=$.kY
return u==null?$.kY=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kX:function(a,b,c){var u=c.q(0,Math.sqrt(c.w(c))),t=b.at(u),s=t.q(0,Math.sqrt(t.w(t))),r=u.at(s),q=new V.L(a.a,a.b,a.c),p=s.N(0).w(q),o=r.N(0).w(q),n=u.N(0).w(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
be:function(){var u=$.l2
return u==null?$.l2=new V.a4(0,0):u},
l3:function(){var u=$.cC
return u==null?$.cC=new V.a5(0,0,0):u},
l8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dO(a,b,c,d)},
cR:function(){var u=$.lm
return u==null?$.lm=new V.L(0,0,0):u},
mL:function(){var u=$.iK
return u==null?$.iK=new V.L(-1,0,0):u},
kk:function(){var u=$.iL
return u==null?$.iL=new V.L(0,1,0):u},
ln:function(){var u=$.iM
return u==null?$.iM=new V.L(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.a=a},
dE:function dE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.z("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aF(a,0)
t=C.c.aF(b,0)
s=new V.hK()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hT()
u.e7(a)
return u},
io:function(){var u=new V.im(),t=P.j
u.shh(new H.a1([t,V.cH]))
u.shk(new H.a1([t,V.cN]))
u.c=null
return u},
b9:function b9(){},
as:function as(){},
dA:function dA(){},
am:function am(){this.a=null},
hK:function hK(){this.b=this.a=null},
hT:function hT(){this.a=null},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.b=a
this.c=null},
im:function im(){this.c=this.b=this.a=null},
cO:function cO(a){this.b=a
this.a=this.c=null},
nQ:function(a){P.mK(C.G,new V.jZ(a))},
mF:function(a){var u=new V.hX()
u.e8(a,!0)
return u},
bn:function bn(){},
jZ:function jZ(a){this.a=a},
fr:function fr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hG:function hG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hX:function hX(){this.b=this.a=null},
hZ:function hZ(a){this.a=a},
hY:function hY(a){this.a=a},
i_:function i_(a){this.a=a}},U={
k8:function(){var u=new U.fk()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kM:function(a){var u=new U.dg()
u.a=a
return u},
fk:function fk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){this.b=this.a=null},
ct:function ct(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dh:function dh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dl:function dl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},av:function av(){}},A={
mr:function(a,b){var u=a.b0,t=new A.dC(b,u)
t.cv(b,u)
t.e5(a,b)
return t},
ms:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.w)(a9),++t)f+="_"+H.h(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.w)(b0),++t)f+="_"+H.h(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.w)(b1),++t)f+="_"+H.h(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
if(!a6.a)q=!1
else q=!0
if(!q)if(!a7.a)p=!1
else p=!0
else p=!0
if(!a1.a)q=!1
else q=!0
if(!q){if(!a2.a)q=!1
else q=!0
if(!q){if(!a3.a)q=!1
else q=!0
if(!q)if(!a4.a)q=!1
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a4.a
if(q)n=!1
else n=!0
m=n||u>0||p
if(!a2.a)u=!1
else u=!0
if(!u){if(!a3.a)u=!1
else u=!0
if(!u){if(q)u=!1
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a5.a)u=!1
else u=!0
k=u||p}else k=!0
if(!a5.a)j=!1
else j=!0
i=e>0
h=k||j||m||!1
g=$.aL()
if(k){u=$.bk()
g=new Z.bD(g.a|u.a)}if(j){u=$.bj()
g=new Z.bD(g.a|u.a)}if(i){u=$.bi()
g=new Z.bD(g.a|u.a)}return new A.hb(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jJ:function(a,b,c){var u
A.jI(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k_(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
n2:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jI(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
n_:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jJ(b,t,"ambient")
b.a+="\n"},
n0:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jJ(b,t,"diffuse")
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
n3:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jJ(b,t,"invDiffuse")
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
n9:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jJ(b,t,"specular")
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
n5:function(a,b){var u,t,s
if(!a.k3)return
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
n7:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jI(b,t,"reflect")
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
n8:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jI(b,t,"refract")
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
n1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.h(u)
s=A.k_(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.am()
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
r=[P.j]
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(m,"specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.l(m," + ")+");\n"}else c.a+="   highLight = "+C.a.l(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
n6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.h(u)
s=A.k_(t)
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
if(typeof u!=="number")return u.am()
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
c.a=r+"\n"}r=[P.j]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.l(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
if(!a.b.a)o=!1
else o=!0
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.l(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.l(l," + ")+");\n"
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
na:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.h(u)
s=A.k_(t)
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
if(typeof u!=="number")return u.am()
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
c.a=u+"\n"}u=[P.j]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.l(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
if(!a.b.a)r=!1
else r=!0
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
n4:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.j])
if(!a.b.a)u=!1
else u=!0
if(u)C.a.h(t,"ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nb:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bf("")
j.a="precision mediump float;\n"
j.a=l
u=a.k3
if(u){j.a=k
t=k}else t=l
if(a.k4){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
j.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k1){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k2?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.dx)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.n2(a,j)
A.n_(a,j)
A.n0(a,j)
A.n3(a,j)
A.n9(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.n7(a,j)
A.n8(a,j)}A.n5(a,j)
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
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.n1(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.n6(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.w)(q),++o)A.na(a,q[o],j)
A.n4(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.j])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.an(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.an(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.w)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.an(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.l(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nc:function(a,b){var u,t,s
if(!a.rx)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.y2+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k3
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.k4
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
ne:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nd:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ng:function(a,b){var u,t
if(!a.r1)return
u=a.ry
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
nh:function(a,b){var u,t
if(!a.r2)return
u=a.x1
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
nf:function(a,b){var u
if(!a.k1)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ni:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
k_:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.an(a,1)},
kj:function(a,b,c,d,e){var u=new A.ix(a,c,e)
u.f=d
u.shs(P.mq(d,0,P.q))
return u},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b){var _=this
_.iG=_.iF=_.dn=_.dm=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iT=_.iS=_.iR=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.iQ=_.iP=_.dw=_.iO=_.iN=_.dv=_.du=_.iM=_.iL=_.dt=_.ds=_.iK=_.iJ=_.dr=_.iI=_.iH=_.dq=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aF:function aF(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b0=b3
_.dm=b4},
c2:function c2(a,b,c,d,e,f){var _=this
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
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cG:function cG(){},
dS:function dS(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(){},
iC:function iC(a){this.a=a},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
cP:function cP(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
cQ:function cQ(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
c4:function c4(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nV:function(){return F.nw(15,30,0.5,1,new F.k0())},
nw:function(a,b,c,d,e){var u=F.nT(a,b,new F.jO(e,d,b,c))
if(u==null)return
u.as()
u.i4(new F.iT(),new F.hA())
return u},
nT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lb()
t=H.c([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iN(g,g,new V.ax(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dh(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iN(g,g,new V.ax(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dh(g))}}u.d.hw(a+1,b+1,t)
return u},
dn:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.B(P.z("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.z("May not create a face with vertices attached to different shapes."))
u.h7(a)
u.h8(b)
u.h9(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a8()
return u},
lb:function(){var u=new F.dQ(),t=new F.iO(u)
t.b=!1
t.sht(H.c([],[F.aq]))
u.a=t
t=new F.hW()
t.sbQ(H.c([],[F.bY]))
u.b=t
t=new F.hV(u)
t.seL(H.c([],[F.by]))
u.c=t
t=new F.hU(u)
t.seF(H.c([],[F.a3]))
u.d=t
u.e=null
return u},
iN:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.iW()
r.sbQ(H.c([],[F.bY]))
s.b=r
r=new F.iS()
u=[F.by]
r.seM(H.c([],u))
r.seN(H.c([],u))
s.c=r
r=new F.iP()
u=[F.a3]
r.seG(H.c([],u))
r.seH(H.c([],u))
r.seI(H.c([],u))
s.d=r
h=$.m0()
s.e=0
r=$.aL()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bk().a)!==0?e:t
s.x=(u&$.bj().a)!==0?b:t
s.y=(u&$.bJ().a)!==0?f:t
s.z=(u&$.bK().a)!==0?g:t
s.Q=(u&$.m1().a)!==0?c:t
s.ch=(u&$.cg().a)!==0?i:0
s.cx=(u&$.bi().a)!==0?a:t
return s},
k0:function k0(){},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(){},
i0:function i0(){},
by:function by(){},
h_:function h_(){},
iw:function iw(){},
bY:function bY(){},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(a){this.a=a
this.b=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(){this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iY:function iY(a){this.a=a},
iX:function iX(a){this.a=a},
iO:function iO(a){this.a=a
this.c=this.b=null},
iP:function iP(){this.d=this.c=this.b=null},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(){this.c=this.b=null},
iU:function iU(){},
iT:function iT(){},
iV:function iV(){},
hA:function hA(){},
iW:function iW(){this.b=null}},T={cM:function cM(){},dY:function dY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ii:function ii(a){var _=this
_.a=a
_.e=_.d=_.c=null},ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="modifiers",a8=34067,a9=V.mF("Test 013"),b0=W.k6()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.j]
a9.d7(H.c(["Test of sky box and cover pass."],u))
a9.d7(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.B(P.z("Failed to find an element with the identifier, testCanvas."))
s=E.mJ(t,!0,!0,!0,!1)
r=new U.ct()
u=U.ad
r.ba(u)
r.aP(r.geW(),r.gfC())
r.e=null
r.f=V.bW()
r.r=0
q=s.r
p=new U.e7()
o=U.k8()
o.scn(0,!0)
o.sca(6.283185307179586)
o.scc(0)
o.sa6(0,0)
o.scb(100)
o.sR(0)
o.sc_(0.5)
p.b=o
n=p.gaI()
o.gp().h(0,n)
o=U.k8()
o.scn(0,!0)
o.sca(6.283185307179586)
o.scc(0)
o.sa6(0,0)
o.scb(100)
o.sR(0)
o.sc_(0.5)
p.c=o
o.gp().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.at(!1,!1,!1)
l=p.d
p.d=m
o=[X.at]
n=new D.J(a7,l,m,o)
n.b=!0
p.L(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.J("invertX",n,!1,[P.M])
n.b=!0
p.L(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.J("invertY",n,!1,[P.M])
n.b=!0
p.L(n)}p.aW(q)
r.h(0,p)
q=s.r
p=new U.e6()
n=U.k8()
n.scn(0,!0)
n.sca(6.283185307179586)
n.scc(0)
n.sa6(0,0)
n.scb(100)
n.sR(0)
n.sc_(0.2)
p.b=n
n.gp().h(0,p.gaI())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.at(!0,!1,!1)
l=p.c
p.c=m
n=new D.J(a7,l,m,o)
n.b=!0
p.L(n)
p.aW(q)
r.h(0,p)
q=s.r
p=new U.e8()
p.c=0.01
p.e=p.d=0
m=new X.at(!1,!1,!1)
p.b=m
o=new D.J(a7,a6,m,o)
o.b=!0
p.L(o)
p.aW(q)
r.h(0,p)
r.h(0,U.kM(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.l0(r)
j=X.ka(a6)
if(j.b){j.b=!1
q=new D.J("clearColor",!0,!1,[P.M])
q.b=!0
j.aj(q)}i=E.kR()
i.sbr(0,F.nV())
h=new O.dB()
h.seq(O.k7(V.al))
h.e.aP(h.gf_(),h.gf1())
q=new O.aV(h,"emission")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
h.f=q
q=new O.aV(h,"ambient")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
h.r=q
q=new O.aV(h,"diffuse")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
h.x=q
q=new O.aV(h,"invDiffuse")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
h.y=q
q=new O.he(h,"specular")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
q.ch=100
h.z=q
q=new O.ha(h,"bump")
q.c=new A.af(!1,!1,!1)
h.Q=q
h.ch=null
q=new O.aV(h,"reflect")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
h.cx=q
q=new O.hd(h,"refract")
q.c=new A.af(!1,!1,!1)
q.f=new V.a2(0,0,0)
q.ch=1
h.cy=q
q=new O.h9(h,"alpha")
q.c=new A.af(!1,!1,!1)
q.f=1
h.db=q
q=new D.dv()
q.ba(D.a9)
q.seC(H.c([],[D.bp]))
q.sfQ(H.c([],[D.dL]))
q.shg(H.c([],[D.dU]))
q.y=q.x=null
q.cq(q.geY(),q.gfA(),q.gfE())
h.dx=q
p=new O.hc()
p.b=new V.ax(0,0,0,0)
p.c=1
p.d=10
p.e=!1
h.dy=p
p=q.x
q=p==null?q.x=D.O():p
q.h(0,h.gh0())
q=h.dx
p=q.y
q=p==null?q.y=D.O():p
q.h(0,h.gbv())
h.fr=null
q=h.dx
g=V.kk()
p=U.kM(V.kX(V.l3(),g,new V.L(0,-1,-1)))
f=new V.a2(1,1,1)
o=new D.bp()
o.c=new V.a2(1,1,1)
o.a=V.ln()
o.d=V.kk()
o.e=V.mL()
l=o.b
o.b=p
p.gp().h(0,o.geb())
u=new D.J("mover",l,o.b,[u])
u.b=!0
o.ao(u)
if(!o.c.t(0,f)){l=o.c
o.c=f
u=new D.J("color",l,f,[V.a2])
u.b=!0
o.ao(u)}q.h(0,o)
u=h.r
u.saY(0,new V.a2(0,0,1))
u=h.x
u.saY(0,new V.a2(0,1,0))
u=h.z
u.saY(0,new V.a2(1,0,0))
u=h.z
u.d1(new A.af(!0,!1,!1))
u.d2(10)
u=s.f
q=u.a
e=q.createTexture()
q.bindTexture(a8,e)
q.texParameteri(a8,10242,10497)
q.texParameteri(a8,10243,10497)
q.texParameteri(a8,10241,9729)
q.texParameteri(a8,10240,9729)
q.bindTexture(a8,a6)
d=new T.dY()
d.a=0
d.b=e
d.c=!1
d.d=0
u.aH(d,e,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aH(d,e,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aH(d,e,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aH(d,e,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aH(d,e,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aH(d,e,"../resources/maskonaive/negz.jpg",34074,!1,!1)
c=new M.dh()
c.a=!0
u=E.kR()
b=F.lb()
q=b.a
p=new V.L(-1,-1,1)
p=p.q(0,Math.sqrt(p.w(p)))
a=q.bf(new V.bz(1,2,4,6),new V.ax(1,0,0,1),new V.a5(-1,-1,0),new V.a4(0,1),p,a6)
q=b.a
p=new V.L(1,-1,1)
p=p.q(0,Math.sqrt(p.w(p)))
a0=q.bf(new V.bz(0,3,4,6),new V.ax(0,0,1,1),new V.a5(1,-1,0),new V.a4(1,1),p,a6)
q=b.a
p=new V.L(1,1,1)
p=p.q(0,Math.sqrt(p.w(p)))
a1=q.bf(new V.bz(0,2,5,6),new V.ax(0,1,0,1),new V.a5(1,1,0),new V.a4(1,0),p,a6)
q=b.a
p=V.be()
o=new V.L(-1,1,1)
o=o.q(0,Math.sqrt(o.w(o)))
a2=q.bf(new V.bz(0,2,4,7),new V.ax(1,1,0,1),new V.a5(-1,1,0),p,o,a6)
b.d.hv(H.c([a,a0,a1,a2],[F.aq]))
b.as()
u.sbr(0,b)
c.e=u
c.saX(a6)
c.sb6(0,a6)
c.sb7(a6)
u=new O.dR()
u.b=1.0471975511965976
u.d=new V.a2(1,1,1)
l=u.c
u.c=d
d.gp().h(0,u.gbv())
q=new D.J("boxTexture",l,u.c,[T.dY])
q.b=!0
u.Z(q)
c.sb7(u)
c.sb6(0,j)
c.saX(k)
a3=new M.dl()
a3.a=!0
a3.seu(0,O.k7(E.ag))
a3.e.aP(a3.gf5(),a3.gf7())
a3.y=a3.x=a3.r=a3.f=null
a4=X.ka(a6)
a3.saX(a6)
a3.sb6(0,a4)
a3.sb7(a6)
a3.saX(k)
a3.sb7(h)
a3.sb6(0,j)
a3.e.h(0,i)
u=M.av
q=H.c([c,a3],[u])
p=new M.df()
p.ba(u)
p.e=!0
p.f=!1
p.r=null
p.aP(p.gfG(),p.gfI())
p.a4(0,q)
u=s.d
if(u!==p){if(u!=null)u.gp().M(0,s.gcz())
s.d=p
p.gp().h(0,s.gcz())
s.cA()}u=s.z
if(u==null)u=s.z=D.O()
q={func:1,ret:-1,args:[D.x]}
p=H.m(new B.jW(c,a9),q)
if(u.b==null)u.saJ(H.c([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.nQ(s)},
jW:function jW(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ke.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.cD(a)},
i:function(a){return"Instance of '"+H.h(H.cE(a))+"'"}}
J.fV.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iM:1}
J.ds.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dt.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hF.prototype={}
J.c6.prototype={}
J.bx.prototype={
i:function(a){var u=a[$.lQ()]
if(u==null)return this.e1(a)
return"JavaScript function for "+H.h(J.aM(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibs:1}
J.aT.prototype={
h:function(a,b){H.H(b,H.y(a,0))
if(!!a.fixed$length)H.B(P.ah("add"))
a.push(b)},
dH:function(a,b){if(!!a.fixed$length)H.B(P.ah("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dN(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.B(P.ah("remove"))
for(u=0;u<a.length;++u)if(J.X(a[u],b)){a.splice(u,1)
return!0}return!1},
a4:function(a,b){var u,t
H.n(b,"$ie",[H.y(a,0)],"$ae")
if(!!a.fixed$length)H.B(P.ah("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bo(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.h(a[u]))
return t.join(b)},
i0:function(a){return this.l(a,"")},
hW:function(a,b){var u,t,s
H.m(b,{func:1,ret:P.M,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.A(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bo(a))}throw H.i(H.fU())},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dZ:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aZ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aZ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
ghV:function(a){if(a.length>0)return a[0]
throw H.i(H.fU())},
gbi:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.fU())},
d9:function(a,b){var u,t
H.m(b,{func:1,ret:P.M,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.A(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bo(a))}return!1},
bs:function(a,b){var u=H.y(a,0)
H.m(b,{func:1,ret:P.q,args:[u,u]})
if(!!a.immutable$list)H.B(P.ah("sort"))
H.dT(a,0,a.length-1,b,u)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.X(a[u],b))return!0
return!1},
i:function(a){return P.kb(a,"[","]")},
gO:function(a){return new J.ak(a,a.length,[H.y(a,0)])},
gH:function(a){return H.cD(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.B(P.ah("set length"))
if(b<0)throw H.i(P.aZ(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.cb(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.y(a,0))
if(!!a.immutable$list)H.B(P.ah("indexed set"))
if(b>=a.length||b<0)throw H.i(H.cb(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.kd.prototype={}
J.ak.prototype={
gD:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.w(s))
u=t.c
if(u>=r){t.scC(null)
return!1}t.scC(s[u]);++t.c
return!0},
scC:function(a){this.d=H.H(a,H.y(this,0))},
$iaS:1}
J.cv.prototype={
hH:function(a,b){var u
H.lJ(b)
if(typeof b!=="number")throw H.i(H.bH(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbh(b)
if(this.gbh(a)===u)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
iw:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.ah(""+a+".toInt()"))},
c6:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.ah(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ah(""+a+".round()"))},
dN:function(a,b){var u
if(b>20)throw H.i(P.aZ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+u
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
dU:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.ah("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
bd:function(a,b){var u
if(a>0)u=this.he(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
he:function(a,b){return b>31?0:a>>>b},
$iD:1,
$ia8:1}
J.dr.prototype={$iq:1}
J.dq.prototype={}
J.bw.prototype={
bZ:function(a,b){if(b<0)throw H.i(H.cb(a,b))
if(b>=a.length)H.B(H.cb(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.i(H.cb(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.i(P.k4(b,null,null))
return a+b},
bt:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b8:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dN(b,null))
if(b>c)throw H.i(P.dN(b,null))
if(c>a.length)throw H.i(P.dN(c,null))
return a.substring(b,c)},
an:function(a,b){return this.b8(a,b,null)},
iz:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ax:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$il_:1,
$ij:1}
H.p.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bZ(this.a,b)},
$ae4:function(){return[P.q]},
$av:function(){return[P.q]},
$ae:function(){return[P.q]},
$ab:function(){return[P.q]}}
H.fy.prototype={}
H.bV.prototype={
gO:function(a){var u=this
return new H.cw(u,u.gm(u),[H.aj(u,"bV",0)])},
bq:function(a,b){return this.e0(0,H.m(b,{func:1,ret:P.M,args:[H.aj(this,"bV",0)]}))}}
H.cw.prototype={
gD:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.kw(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bo(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.C(s,u));++t.c
return!0},
saS:function(a){this.d=H.H(a,H.y(this,0))},
$iaS:1}
H.h6.prototype={
gO:function(a){return new H.h7(J.bM(this.a),this.b,this.$ti)},
gm:function(a){return J.bN(this.a)},
C:function(a,b){return this.b.$1(J.k3(this.a,b))},
$ae:function(a,b){return[b]}}
H.h7.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saS(u.c.$1(t.gD(t)))
return!0}u.saS(null)
return!1},
gD:function(a){return this.a},
saS:function(a){this.a=H.H(a,H.y(this,1))},
$aaS:function(a,b){return[b]}}
H.h8.prototype={
gm:function(a){return J.bN(this.a)},
C:function(a,b){return this.b.$1(J.k3(this.a,b))},
$abV:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cS.prototype={
gO:function(a){return new H.j_(J.bM(this.a),this.b,this.$ti)}}
H.j_.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.A(t.$1(u.gD(u))))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.bS.prototype={}
H.e4.prototype={}
H.e3.prototype={}
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
H.hB.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fX.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.h(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.h(t.a)+")"
return s+r+"' on '"+u+"' ("+H.h(t.a)+")"}}
H.iF.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k1.prototype={
$1:function(a){if(!!J.W(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eK.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.cm.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibs:1,
giA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ie.prototype={}
H.i4.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cf(u)+"'"}}
H.ci.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ci))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cD(this.a)
else u=typeof t!=="object"?J.bL(t):H.cD(t)
return(u^H.cD(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.cE(u))+"'")}}
H.iv.prototype={
i:function(a){return this.a}}
H.fi.prototype={
i:function(a){return this.a}}
H.hR.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.j0.prototype={
i:function(a){return"Assertion failed: "+P.dm(this.a)}}
H.a1.prototype={
gm:function(a){return this.a},
ga5:function(a){return new H.dw(this,[H.y(this,0)])},
dg:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cM(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cM(t,b)}else return s.hZ(b)},
hZ:function(a){var u=this.d
if(u==null)return!1
return this.c7(this.bD(u,J.bL(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bb(r,b)
s=t==null?null:t.b
return s}else return q.i_(b)},
i_:function(a){var u,t,s=this.d
if(s==null)return
u=this.bD(s,J.bL(a)&0x3ffffff)
t=this.c7(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.y(o,0))
H.H(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cD(u==null?o.b=o.bO():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cD(t==null?o.c=o.bO():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bO()
r=J.bL(b)&0x3ffffff
q=o.bD(s,r)
if(q==null)o.bT(s,r,[o.bP(b,c)])
else{p=o.c7(q,b)
if(p>=0)q[p].b=c
else q.push(o.bP(b,c))}}},
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bo(s))
u=u.c}},
cD:function(a,b,c){var u,t=this
H.H(b,H.y(t,0))
H.H(c,H.y(t,1))
u=t.bb(a,b)
if(u==null)t.bT(a,b,t.bP(b,c))
else u.b=c},
eT:function(){this.r=this.r+1&67108863},
bP:function(a,b){var u,t=this,s=new H.h0(H.H(a,H.y(t,0)),H.H(b,H.y(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eT()
return s},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1},
i:function(a){return P.kW(this)},
bb:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
eA:function(a,b){delete a[b]},
cM:function(a,b){return this.bb(a,b)!=null},
bO:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bT(t,u,t)
this.eA(t,u)
return t}}
H.h0.prototype={}
H.dw.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.h1(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h1.prototype={
gD:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bo(t))
else{t=u.c
if(t==null){u.scP(null)
return!1}else{u.scP(t.a)
u.c=u.c.c
return!0}}},
scP:function(a){this.d=H.H(a,H.y(this,0))},
$iaS:1}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:47}
H.jU.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:44}
H.fW.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$il_:1}
H.cA.prototype={$iog:1}
H.dF.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cz.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$abS:function(){return[P.D]},
$av:function(){return[P.D]},
$ie:1,
$ae:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.dG.prototype={
$abS:function(){return[P.q]},
$av:function(){return[P.q]},
$ie:1,
$ae:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.hs.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.ht.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hu.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hv.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hw.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.dH.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$ioh:1}
H.hx.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$ioi:1}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
P.j2.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:25}
P.j1.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j4.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eQ.prototype={
eg:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ca(new P.jE(this,b),0),a)
else throw H.i(P.ah("`setTimeout()` not found."))},
eh:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ca(new P.jD(this,a,Date.now(),b),0),a)
else throw H.i(P.ah("Periodic timer."))},
$ib3:1}
P.jE.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.e4(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b8.prototype={
i2:function(a){if((this.c&15)!==6)return!0
return this.b.b.ck(H.m(this.d,{func:1,ret:P.M,args:[P.P]}),a.a,P.M,P.P)},
hY:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f6(u,{func:1,args:[P.P,P.ao]}))return H.kv(r.ir(u,a.a,a.b,null,t,P.ao),s)
else return H.kv(r.ck(H.m(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aC.prototype={
dM:function(a,b,c){var u,t,s,r=H.y(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nk(b,u)}t=new P.aC($.a_,[c])
s=b==null?1:3
this.cE(new P.b8(t,s,a,b,[r,c]))
return t},
iv:function(a,b){return this.dM(a,null,b)},
cE:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaC")
s=u.a
if(s<4){u.cE(a)
return}t.a=s
t.c=u.c}P.jM(null,null,t.b,H.m(new P.jc(t,a),{func:1,ret:-1}))}},
cY:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaC")
u=q.a
if(u<4){q.cY(a)
return}p.a=u
p.c=q.c}o.a=p.bc(a)
P.jM(null,null,p.b,H.m(new P.jg(o,p),{func:1,ret:-1}))}},
bS:function(){var u=H.k(this.c,"$ib8")
this.c=null
return this.bc(u)},
bc:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cI:function(a){var u,t,s=this,r=H.y(s,0)
H.kv(a,{futureOr:1,type:r})
u=s.$ti
if(H.ks(a,"$ics",u,"$acs"))if(H.ks(a,"$iaC",u,null))P.lp(a,s)
else P.mQ(a,s)
else{t=s.bS()
H.H(a,r)
s.a=4
s.c=a
P.cV(s,t)}},
cJ:function(a,b){var u,t=this
H.k(b,"$iao")
u=t.bS()
t.a=8
t.c=new P.ae(a,b)
P.cV(t,u)},
$ics:1}
P.jc.prototype={
$0:function(){P.cV(this.a,this.b)},
$S:2}
P.jg.prototype={
$0:function(){P.cV(this.b,this.a.a)},
$S:2}
P.jd.prototype={
$1:function(a){var u=this.a
u.a=0
u.cI(a)},
$S:25}
P.je.prototype={
$2:function(a,b){H.k(b,"$iao")
this.a.cJ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:38}
P.jf.prototype={
$0:function(){this.a.cJ(this.b,this.c)},
$S:2}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dK(H.m(s.d,{func:1}),null)}catch(r){u=H.aw(r)
t=H.cd(r)
if(o.d){s=H.k(o.a.a.c,"$iae").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iae")
else q.b=new P.ae(u,t)
q.a=!0
return}if(!!J.W(n).$ics){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iae")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iv(new P.jk(p),null)
s.a=!1}},
$S:3}
P.jk.prototype={
$1:function(a){return this.a},
$S:40}
P.ji.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.H(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.ck(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aw(o)
t=H.cd(o)
s=n.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.jh.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iae")
r=m.c
if(H.A(r.i2(u))&&r.e!=null){q=m.b
q.b=r.hY(u)
q.a=!1}}catch(p){t=H.aw(p)
s=H.cd(p)
r=H.k(m.a.a.c,"$iae")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.eb.prototype={}
P.i7.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aC($.a_,[P.q])
r.a=0
u=H.y(s,0)
t=H.m(new P.i9(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.ia(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.i9.prototype={
$1:function(a){H.H(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.y(this.b,0)]}}}
P.ia.prototype={
$0:function(){this.b.cI(this.a.a)},
$S:2}
P.cJ.prototype={}
P.i8.prototype={}
P.b3.prototype={}
P.ae.prototype={
i:function(a){return H.h(this.a)},
$ibr:1}
P.jH.prototype={$iow:1}
P.jL.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dJ():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jq.prototype={
is:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.lv(r,r,this,a,-1)}catch(s){u=H.aw(s)
t=H.cd(s)
P.jK(r,r,this,u,H.k(t,"$iao"))}},
it:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.lw(r,r,this,a,b,-1,c)}catch(s){u=H.aw(s)
t=H.cd(s)
P.jK(r,r,this,u,H.k(t,"$iao"))}},
hE:function(a,b){return new P.js(this,H.m(a,{func:1,ret:b}),b)},
bV:function(a){return new P.jr(this,H.m(a,{func:1,ret:-1}))},
da:function(a,b){return new P.jt(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
dK:function(a,b){H.m(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.lv(null,null,this,a,b)},
ck:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.a_===C.f)return a.$1(b)
return P.lw(null,null,this,a,b,c,d)},
ir:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.nl(null,null,this,a,b,c,d,e,f)}}
P.js.prototype={
$0:function(){return this.a.dK(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jr.prototype={
$0:function(){return this.a.is(this.b)},
$S:3}
P.jt.prototype={
$1:function(a){var u=this.c
return this.a.it(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jo.prototype={
gO:function(a){var u=this,t=new P.er(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic7")!=null}else{t=this.ev(b)
return t}},
ev:function(a){var u=this.d
if(u==null)return!1
return this.bB(this.cQ(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cF(u==null?s.b=P.km():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cF(t==null?s.c=P.km():t,b)}else return s.ek(0,b)},
ek:function(a,b){var u,t,s,r=this
H.H(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.km()
t=r.cK(b)
s=u[t]
if(s==null)u[t]=[r.by(b)]
else{if(r.bB(s,b)>=0)return!1
s.push(r.by(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fV(this.c,b)
else return this.fU(0,b)},
fU:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cQ(r,b)
t=s.bB(u,b)
if(t<0)return!1
s.d4(u.splice(t,1)[0])
return!0},
cF:function(a,b){H.H(b,H.y(this,0))
if(H.k(a[b],"$ic7")!=null)return!1
a[b]=this.by(b)
return!0},
fV:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic7")
if(u==null)return!1
this.d4(u)
delete a[b]
return!0},
cH:function(){this.r=1073741823&this.r+1},
by:function(a){var u,t=this,s=new P.c7(H.H(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cH()
return s},
d4:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cH()},
cK:function(a){return J.bL(a)&1073741823},
cQ:function(a,b){return a[this.cK(b)]},
bB:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1}}
P.c7.prototype={}
P.er.prototype={
gD:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bo(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(H.H(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
scG:function(a){this.d=H.H(a,H.y(this,0))},
$iaS:1}
P.h2.prototype={$ie:1,$ib:1}
P.v.prototype={
gO:function(a){return new H.cw(a,this.gm(a),[H.d6(this,a,"v",0)])},
C:function(a,b){return this.j(a,b)},
iy:function(a,b){var u,t=this,s=H.c([],[H.d6(t,a,"v",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
ix:function(a){return this.iy(a,!0)},
i:function(a){return P.kb(a,"[","]")}}
P.h4.prototype={}
P.h5.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.h(a)
t.a=u+": "
t.a+=H.h(b)},
$S:21}
P.aa.prototype={
J:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.d6(s,a,"aa",0),H.d6(s,a,"aa",1)]})
for(u=J.bM(s.ga5(a));u.v();){t=u.gD(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bN(this.ga5(a))},
i:function(a){return P.kW(a)},
$iG:1}
P.jv.prototype={
a4:function(a,b){var u
for(u=J.bM(H.n(b,"$ie",this.$ti,"$ae"));u.v();)this.h(0,u.gD(u))},
i:function(a){return P.kb(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.l6(b,"index")
for(u=P.mU(r,r.r,H.y(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.i(P.Y(b,r,"index",null,t))},
$ie:1,
$ila:1}
P.es.prototype={}
P.cn.prototype={}
P.co.prototype={}
P.fA.prototype={
$acn:function(){return[P.j,[P.b,P.q]]}}
P.fR.prototype={
i:function(a){return this.a}}
P.fQ.prototype={
ex:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.bf("")
if(r>b)q.a+=C.c.b8(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.m8(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$aco:function(){return[P.j,P.j]}}
P.iI.prototype={}
P.iJ.prototype={
hI:function(a){var u,t,s=P.l7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jF(u)
if(t.eJ(a,0,s)!==s)t.d5(C.c.bZ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mX(0,t.b,u.length)))},
$aco:function(){return[P.j,[P.b,P.q]]}}
P.jF.prototype={
d5:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eJ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bZ(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aF(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d5(r,C.c.aF(a,p)))s=p}else if(r<=2047){q=n.b
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
P.M.prototype={}
P.ay.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.bd(u,30))&1073741823},
i:function(a){var u=this,t=P.mh(H.mA(u)),s=P.di(H.my(u)),r=P.di(H.mu(u)),q=P.di(H.mv(u)),p=P.di(H.mx(u)),o=P.di(H.mz(u)),n=P.mi(H.mw(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.bq.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bq&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.fx(),q=this.a
if(q<0)return"-"+new P.bq(0-q).i(0)
u=r.$1(C.e.a3(q,6e7)%60)
t=r.$1(C.e.a3(q,1e6)%60)
s=new P.fw().$1(q%1e6)
return""+C.e.a3(q,36e8)+":"+H.h(u)+":"+H.h(t)+"."+H.h(s)}}
P.fw.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.fx.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.br.prototype={}
P.fa.prototype={
i:function(a){return"Assertion failed"}}
P.dJ.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbA()+o+u
if(!q.a)return t
s=q.gbz()
r=P.dm(q.b)
return t+s+": "+r}}
P.c_.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.h(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.h(s)
else if(t>s)u=": Not in range "+H.h(s)+".."+H.h(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.h(s)}return u}}
P.fT.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.ab()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.h(u)},
gm:function(a){return this.f}}
P.iG.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iE.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cI.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fl.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dm(u)+"."}}
P.hE.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.dV.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.fq.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ej.prototype={
i:function(a){return"Exception: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.b8(s,0,75)+"...":s
return t+"\n"+r}}
P.bs.prototype={}
P.q.prototype={}
P.e.prototype={
bq:function(a,b){var u=H.aj(this,"e",0)
return new H.cS(this,H.m(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t=this.gO(this)
for(u=0;t.v();)++u
return u},
gaD:function(a){var u,t=this.gO(this)
if(!t.v())throw H.i(H.fU())
u=t.gD(t)
if(t.v())throw H.i(H.mm())
return u},
C:function(a,b){var u,t,s
P.l6(b,"index")
for(u=this.gO(this),t=0;u.v();){s=u.gD(u)
if(b===t)return s;++t}throw H.i(P.Y(b,this,"index",null,t))},
i:function(a){return P.ml(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$ie:1}
P.G.prototype={}
P.K.prototype={
gH:function(a){return P.P.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
t:function(a,b){return this===b},
gH:function(a){return H.cD(this)},
i:function(a){return"Instance of '"+H.h(H.cE(this))+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.j.prototype={$il_:1}
P.bf.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f8.prototype={
gm:function(a){return a.length}}
W.d9.prototype={
i:function(a){return String(a)},
$id9:1}
W.f9.prototype={
i:function(a){return String(a)}}
W.ch.prototype={$ich:1}
W.db.prototype={}
W.bl.prototype={$ibl:1}
W.bQ.prototype={
co:function(a,b,c){if(c!=null)return a.getContext(b,P.nt(c))
return a.getContext(b)},
dT:function(a,b){return this.co(a,b,null)},
$ibQ:1}
W.cl.prototype={$icl:1}
W.bm.prototype={
gm:function(a){return a.length}}
W.cp.prototype={$icp:1}
W.fm.prototype={
gm:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cq.prototype={
gm:function(a){return a.length}}
W.fn.prototype={}
W.aO.prototype={}
W.aP.prototype={}
W.fo.prototype={
gm:function(a){return a.length}}
W.fp.prototype={
gm:function(a){return a.length}}
W.fs.prototype={
gm:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.ft.prototype={
i:function(a){return String(a)}}
W.dj.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.an,P.a8]]},
$av:function(){return[[P.an,P.a8]]},
$ie:1,
$ae:function(){return[[P.an,P.a8]]},
$ib:1,
$ab:function(){return[[P.an,P.a8]]},
$aC:function(){return[[P.an,P.a8]]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaC(a))+" x "+H.h(this.gav(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$ian)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&this.gaC(a)===u.gaC(b)&&this.gav(a)===u.gav(b)},
gH:function(a){return W.lr(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaC(a)),C.d.gH(this.gav(a)))},
gdc:function(a){return a.bottom},
gav:function(a){return a.height},
gbj:function(a){return a.left},
gcj:function(a){return a.right},
gbn:function(a){return a.top},
gaC:function(a){return a.width},
$ian:1,
$aan:function(){return[P.a8]}}
W.fu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.j]},
$av:function(){return[P.j]},
$ie:1,
$ae:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aC:function(){return[P.j]}}
W.fv.prototype={
gm:function(a){return a.length}}
W.j6.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iR")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.ix(this)
return new J.ak(u,u.length,[H.y(u,0)])},
$av:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
W.R.prototype={
ghD:function(a){return new W.j8(a)},
gde:function(a){return new W.j6(a,a.children)},
gdf:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ab()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ab()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kP
if(u==null){u=H.c([],[W.au])
t=new W.dI(u)
C.a.h(u,W.lq(null))
C.a.h(u,W.ls())
$.kP=t
d=t}else d=u
u=$.kO
if(u==null){u=new W.eW(d)
$.kO=u
c=u}else{u.a=d
c=u}}if($.ba==null){u=document
t=u.implementation.createHTMLDocument("")
$.ba=t
$.k9=t.createRange()
t=$.ba.createElement("base")
H.k(t,"$ich")
t.href=u.baseURI
$.ba.head.appendChild(t)}u=$.ba
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibl")}u=$.ba
if(!!this.$ibl)s=u.body
else{s=u.createElement(a.tagName)
$.ba.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.M,a.tagName)){$.k9.selectNodeContents(s)
r=$.k9.createContextualFragment(b)}else{s.innerHTML=b
r=$.ba.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.ba.body
if(s==null?u!=null:s!==u)J.kH(s)
c.cp(r)
document.adoptNode(r)
return r},
hJ:function(a,b,c){return this.ad(a,b,c,null)},
dW:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iR:1,
gdL:function(a){return a.tagName}}
W.fz.prototype={
$1:function(a){return!!J.W(H.k(a,"$iE")).$iR},
$S:23}
W.l.prototype={$il:1}
W.f.prototype={
hu:function(a,b,c,d){H.m(c,{func:1,args:[W.l]})
if(c!=null)this.el(a,b,c,!1)},
el:function(a,b,c,d){return a.addEventListener(b,H.ca(H.m(c,{func:1,args:[W.l]}),1),!1)},
$if:1}
W.aQ.prototype={$iaQ:1}
W.fF.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$ie:1,
$ae:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.fG.prototype={
gm:function(a){return a.length}}
W.fK.prototype={
gm:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.fP.prototype={
gm:function(a){return a.length}}
W.bT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$av:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibT:1,
$aC:function(){return[W.E]}}
W.bt.prototype={$ibt:1,
gdi:function(a){return a.data}}
W.cu.prototype={$icu:1}
W.aU.prototype={$iaU:1}
W.dy.prototype={
i:function(a){return String(a)},
$idy:1}
W.hl.prototype={
gm:function(a){return a.length}}
W.hm.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.j])
this.J(a,new W.hn(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.j,null]},
$iG:1,
$aG:function(){return[P.j,null]}}
W.hn.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.ho.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.j])
this.J(a,new W.hp(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.j,null]},
$iG:1,
$aG:function(){return[P.j,null]}}
W.hp.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aX.prototype={$iaX:1}
W.hq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$av:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.ab.prototype={$iab:1}
W.ai.prototype={
gaD:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.lc("No elements"))
if(t>1)throw H.i(P.lc("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s,r
H.n(b,"$ie",[W.E],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.dp(u,u.length,[H.d6(C.O,u,"C",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$av:function(){return[W.E]},
$ae:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
im:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.e_(a):u},
hy:function(a,b){return a.appendChild(b)},
$iE:1}
W.cB.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$av:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$av:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.hP.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.j])
this.J(a,new W.hQ(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.j,null]},
$iG:1,
$aG:function(){return[P.j,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hS.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$av:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$av:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gm:function(a){return a.length}}
W.i5.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga5:function(a){var u=H.c([],[P.j])
this.J(a,new W.i6(u))
return u},
gm:function(a){return a.length},
$aaa:function(){return[P.j,P.j]},
$iG:1,
$aG:function(){return[P.j,P.j]}}
W.i6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:35}
W.aI.prototype={$iaI:1}
W.c1.prototype={}
W.dW.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.mj("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a4(0,new W.ai(u))
return t}}
W.ic.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaD(u)
s.toString
u=new W.ai(s)
r=u.gaD(u)
t.toString
r.toString
new W.ai(t).a4(0,new W.ai(r))
return t}}
W.id.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaD(u)
t.toString
s.toString
new W.ai(t).a4(0,new W.ai(s))
return t}}
W.cL.prototype={$icL:1}
W.b2.prototype={$ib2:1}
W.aJ.prototype={$iaJ:1}
W.ig.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$ie:1,
$ae:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aC:function(){return[W.aJ]}}
W.ih.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$av:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aC:function(){return[W.b2]}}
W.il.prototype={
gm:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.aK.prototype={$iaK:1}
W.iq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$av:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aC:function(){return[W.b4]}}
W.ir.prototype={
gm:function(a){return a.length}}
W.bB.prototype={}
W.iH.prototype={
i:function(a){return String(a)}}
W.iZ.prototype={
gm:function(a){return a.length}}
W.b7.prototype={
ghM:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ah("deltaY is not supported"))},
ghL:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ah("deltaX is not supported"))},
$ib7:1}
W.cT.prototype={
h_:function(a,b){return a.requestAnimationFrame(H.ca(H.m(b,{func:1,ret:-1,args:[P.a8]}),1))},
eD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cU.prototype={$icU:1}
W.j7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.S]},
$av:function(){return[W.S]},
$ie:1,
$ae:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aC:function(){return[W.S]}}
W.ee.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$ian)return!1
return a.left===u.gbj(b)&&a.top===u.gbn(b)&&a.width===u.gaC(b)&&a.height===u.gav(b)},
gH:function(a){return W.lr(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gav:function(a){return a.height},
gaC:function(a){return a.width}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$av:function(){return[W.aR]},
$ie:1,
$ae:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.ex.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.E]},
$av:function(){return[W.E]},
$ie:1,
$ae:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aC:function(){return[W.E]}}
W.jy.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$av:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.jz.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$av:function(){return[W.aI]},
$ie:1,
$ae:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aC:function(){return[W.aI]}}
W.j5.prototype={
J:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=this.ga5(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga5:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.j])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icU")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaa:function(){return[P.j,P.j]},
$aG:function(){return[P.j,P.j]}}
W.j8.prototype={
j:function(a,b){return this.a.getAttribute(H.Q(b))},
gm:function(a){return this.ga5(this).length}}
W.j9.prototype={}
W.kl.prototype={}
W.ja.prototype={}
W.jb.prototype={
$1:function(a){return this.a.$1(H.k(a,"$il"))},
$S:34}
W.bE.prototype={
ea:function(a){var u
if($.em.a===0){for(u=0;u<262;++u)$.em.n(0,C.L[u],W.nC())
for(u=0;u<12;++u)$.em.n(0,C.m[u],W.nD())}},
aL:function(a){return $.m3().S(0,W.cr(a))},
al:function(a,b,c){var u=$.em.j(0,H.h(W.cr(a))+"::"+b)
if(u==null)u=$.em.j(0,"*::"+b)
if(u==null)return!1
return H.kr(u.$4(a,b,c,this))},
$iau:1}
W.C.prototype={
gO:function(a){return new W.dp(a,this.gm(a),[H.d6(this,a,"C",0)])}}
W.dI.prototype={
aL:function(a){return C.a.d9(this.a,new W.hz(a))},
al:function(a,b,c){return C.a.d9(this.a,new W.hy(a,b,c))},
$iau:1}
W.hz.prototype={
$1:function(a){return H.k(a,"$iau").aL(this.a)},
$S:15}
W.hy.prototype={
$1:function(a){return H.k(a,"$iau").al(this.a,this.b,this.c)},
$S:15}
W.eF.prototype={
ef:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.bq(0,new W.jw())
t=b.bq(0,new W.jx())
this.b.a4(0,u)
s=this.c
s.a4(0,C.N)
s.a4(0,t)},
aL:function(a){return this.a.S(0,W.cr(a))},
al:function(a,b,c){var u=this,t=W.cr(a),s=u.c
if(s.S(0,H.h(t)+"::"+b))return u.d.hx(c)
else if(s.S(0,"*::"+b))return u.d.hx(c)
else{s=u.b
if(s.S(0,H.h(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.h(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iau:1}
W.jw.prototype={
$1:function(a){return!C.a.S(C.m,H.Q(a))},
$S:24}
W.jx.prototype={
$1:function(a){return C.a.S(C.m,H.Q(a))},
$S:24}
W.jB.prototype={
al:function(a,b,c){if(this.e3(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.jC.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.Q(a))},
$S:33}
W.jA.prototype={
aL:function(a){var u=J.W(a)
if(!!u.$icF)return!1
u=!!u.$io
if(u&&W.cr(a)==="foreignObject")return!1
if(u)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.c.bt(b,"on"))return!1
return this.aL(a)},
$iau:1}
W.dp.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scR(J.f7(u.a,t))
u.c=t
return!0}u.scR(null)
u.c=s
return!1},
gD:function(a){return this.d},
scR:function(a){this.d=H.H(a,H.y(this,0))},
$iaS:1}
W.au.prototype={}
W.ju.prototype={$ioj:1}
W.eW.prototype={
cp:function(a){new W.jG(this).$2(a,null)},
aV:function(a,b){if(b==null)J.kH(a)
else b.removeChild(a)},
h4:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.m7(a)
n=o.a.getAttribute("is")
H.k(a,"$iR")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.A(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aw(r)}t="element unprintable"
try{t=J.aM(a)}catch(r){H.aw(r)}try{s=W.cr(a)
this.h3(H.k(a,"$iR"),b,p,t,s,H.k(o,"$iG"),H.Q(n))}catch(r){if(H.aw(r) instanceof P.aE)throw r
else{this.aV(a,b)
window
q="Removing corrupted element "+H.h(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aV(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aL(a)){o.aV(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.al(a,"is",g)){o.aV(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga5(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga5(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.m9(r)
H.Q(r)
if(!q.al(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.W(a).$icL)o.cp(a.content)},
$io3:1}
W.jG.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h4(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aV(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aw(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:32}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eL.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
P.eV.prototype={$ibt:1,
gdi:function(a){return this.a}}
P.jN.prototype={
$2:function(a,b){this.a[a]=b},
$S:21}
P.fH.prototype={
gbE:function(){var u=this.b,t=H.aj(u,"v",0),s=W.R
return new H.h6(new H.cS(u,H.m(new P.fI(),{func:1,ret:P.M,args:[t]}),[t]),H.m(new P.fJ(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bN(this.gbE().a)},
j:function(a,b){var u=this.gbE()
return u.b.$1(J.k3(u.a,b))},
gO:function(a){var u=P.kV(this.gbE(),!1,W.R)
return new J.ak(u,u.length,[H.y(u,0)])},
$av:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
P.fI.prototype={
$1:function(a){return!!J.W(H.k(a,"$iE")).$iR},
$S:23}
P.fJ.prototype={
$1:function(a){return H.r(H.k(a,"$iE"),"$iR")},
$S:31}
P.jp.prototype={
gcj:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.y(this,0))},
gdc:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.h(u.a)+", "+H.h(u.b)+") "+H.h(u.c)+" x "+H.h(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$ian){t=p.a
if(t==u.gbj(b)){s=p.b
if(s==u.gbn(b)){r=p.c
if(typeof t!=="number")return t.E()
if(typeof r!=="number")return H.F(r)
q=H.y(p,0)
if(H.H(t+r,q)===u.gcj(b)){t=p.d
if(typeof s!=="number")return s.E()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gdc(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.bL(s),q=t.b,p=J.bL(q),o=t.c
if(typeof s!=="number")return s.E()
if(typeof o!=="number")return H.F(o)
u=H.y(t,0)
o=C.e.gH(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.E()
if(typeof s!=="number")return H.F(s)
u=C.e.gH(H.H(q+s,u))
return P.mT(P.jn(P.jn(P.jn(P.jn(0,r),p),o),u))}}
P.an.prototype={
gbj:function(a){return this.a},
gbn:function(a){return this.b},
gaC:function(a){return this.c},
gav:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.fZ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$av:function(){return[P.bb]},
$ie:1,
$ae:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aC:function(){return[P.bb]}}
P.bd.prototype={$ibd:1}
P.hC.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$av:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aC:function(){return[P.bd]}}
P.hJ.prototype={
gm:function(a){return a.length}}
P.cF.prototype={$icF:1}
P.ib.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$av:function(){return[P.j]},
$ie:1,
$ae:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aC:function(){return[P.j]}}
P.o.prototype={
gde:function(a){return new P.fH(a,new W.ai(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.au])
C.a.h(p,W.lq(null))
C.a.h(p,W.ls())
C.a.h(p,new W.jA())
c=new W.eW(new W.dI(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hJ(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ai(s)
q=p.gaD(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bg.prototype={$ibg:1}
P.is.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$av:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aC:function(){return[P.bg]}}
P.ep.prototype={}
P.eq.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.fc.prototype={
gm:function(a){return a.length}}
P.fd.prototype={
j:function(a,b){return P.bh(a.get(H.Q(b)))},
J:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga5:function(a){var u=H.c([],[P.j])
this.J(a,new P.fe(u))
return u},
gm:function(a){return a.size},
$aaa:function(){return[P.j,null]},
$iG:1,
$aG:function(){return[P.j,null]}}
P.fe.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.ff.prototype={
gm:function(a){return a.length}}
P.bO.prototype={}
P.hD.prototype={
gm:function(a){return a.length}}
P.ec.prototype={}
P.dc.prototype={$idc:1}
P.dM.prototype={$idM:1}
P.c0.prototype={
iu:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibt)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nu(g))
return}if(!!t.$icu)t=!0
else t=!1
if(t){this.hj(a,b,c,d,e,f,g)
return}throw H.i(P.ma("Incorrect number or type of arguments"))},
hj:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
Y:function(a,b,c){return a.uniform1f(b,c)},
bp:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dP:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic0:1}
P.dP.prototype={$idP:1}
P.dX.prototype={$idX:1}
P.e2.prototype={$ie2:1}
P.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.Y(b,a,null,null,null))
return P.bh(a.item(b))},
C:function(a,b){return this.j(a,b)},
$av:function(){return[[P.G,,,]]},
$ie:1,
$ae:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.eI.prototype={}
P.eJ.prototype={}
O.a0.prototype={
ba:function(a){var u=this
u.seO(H.c([],[a]))
u.scW(null)
u.scS(null)
u.scX(null)},
cq:function(a,b,c){var u=this,t=H.aj(u,"a0",0)
H.m(b,{func:1,ret:P.M,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.q,[P.e,t]]}
H.m(a,t)
H.m(c,t)
u.scW(b)
u.scS(a)
u.scX(c)},
aP:function(a,b){return this.cq(a,null,b)},
cV:function(a){var u
H.n(a,"$ie",[H.aj(this,"a0",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cw:function(a,b){var u
H.n(b,"$ie",[H.aj(this,"a0",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ak(u,u.length,[H.y(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aj(s,"a0",0)
H.H(b,r)
r=[r]
if(H.A(s.cV(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cw(t,H.c([b],r))}},
a4:function(a,b){var u,t,s=this
H.n(b,"$ie",[H.aj(s,"a0",0)],"$ae")
if(H.A(s.cV(b))){u=s.a
t=u.length
C.a.a4(u,b)
s.cw(t,b)}},
seO:function(a){this.a=H.n(a,"$ib",[H.aj(this,"a0",0)],"$ab")},
scW:function(a){this.b=H.m(a,{func:1,ret:P.M,args:[[P.e,H.aj(this,"a0",0)]]})},
scS:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.q,[P.e,H.aj(this,"a0",0)]]})},
scX:function(a){H.m(a,{func:1,ret:-1,args:[P.q,[P.e,H.aj(this,"a0",0)]]})},
$ie:1}
O.cx.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
aE:function(){var u=this.b
if(u!=null)u.B(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gbi(u)
else return V.bW()},
bm:function(a){var u=this.a
if(a==null)C.a.h(u,V.bW())
else C.a.h(u,a)
this.aE()},
ay:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sbG:function(a){this.a=H.n(a,"$ib",[V.al],"$ab")}}
E.fg.prototype={}
E.ag.prototype={
sbr:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().M(0,s.gdE())
u=s.c
if(u!=null)u.gp().h(0,s.gdE())
t=new D.J("shape",r,s.c,[F.dQ])
t.b=!0
s.bk(t)}},
ah:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.v();)u.d.ah(0,b)},
a9:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga_(s))
s.aE()
a.cf(t.f)
s=a.dy
u=(s&&C.a).gbi(s)
if(u!=null&&t.d!=null)u.dI(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.y(s,0)]);s.v();)s.d.a9(a)
a.ce()
a.dx.ay()},
bk:function(a){var u=this.z
if(u!=null)u.B(a)},
a8:function(){return this.bk(null)},
dF:function(a){H.k(a,"$ix")
this.e=null
this.bk(a)},
ia:function(){return this.dF(null)},
dD:function(a){this.bk(H.k(a,"$ix"))},
i7:function(){return this.dD(null)},
i6:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ie",[E.ag],"$ae")
for(u=b.length,t=this.gdC(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bR()
o.sac(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a8()},
i9:function(a,b){var u,t
H.n(b,"$ie",[E.ag],"$ae")
for(u=b.gO(b),t=this.gdC();u.v();)u.gD(u).gp().M(0,t)
this.a8()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
se9:function(a,b){this.y=H.n(b,"$ia0",[E.ag],"$aa0")},
$ibX:1}
E.hL.prototype={
e6:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cx()
t=[V.al]
u.sbG(H.c([],t))
u.b=null
u.gp().h(0,new E.hM(s))
s.cy=u
u=new O.cx()
u.sbG(H.c([],t))
u.b=null
u.gp().h(0,new E.hN(s))
s.db=u
u=new O.cx()
u.sbG(H.c([],t))
u.b=null
u.gp().h(0,new E.hO(s))
s.dx=u
s.shi(H.c([],[O.bA]))
u=s.dy;(u&&C.a).h(u,null)
s.shd(new H.a1([P.j,A.cG]))},
gil:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga_(s)
u=t.db
u=t.z=s.u(0,u.ga_(u))
s=u}return s},
cf:function(a){var u=this.dy,t=a==null?(u&&C.a).gbi(u):a;(u&&C.a).h(u,t)},
ce:function(){var u=this.dy
if(u.length>1)u.pop()},
d8:function(a){var u=a.b
if(u.length===0)throw H.i(P.z("May not cache a shader with no name."))
if(this.fr.dg(0,u))throw H.i(P.z('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
shi:function(a){this.dy=H.n(a,"$ib",[O.bA],"$ab")},
shd:function(a){this.fr=H.n(a,"$iG",[P.j,A.cG],"$aG")}}
E.hM.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:8}
E.hN.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hO.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dZ.prototype={
cB:function(a){H.k(a,"$ix")
this.dJ()},
cA:function(){return this.cB(null)},
ghX:function(){var u,t=this,s=Date.now(),r=C.e.a3(P.kN(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
d_:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.F(r)
u=C.d.c6(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.c6(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lf(C.j,s.giq())}},
dJ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.ik(this),{func:1,ret:-1,args:[P.a8]})
C.w.eD(u)
C.w.h_(u,W.lz(t,P.a8))}},
ip:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d_()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.kN(r-s.r.a).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aE()
r=s.db
C.a.sm(r.a,0)
r.aE()
r=s.dx
C.a.sm(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a9(p.e)}s=p.z
if(s!=null)s.B(null)}catch(q){u=H.aw(q)
t=H.cd(q)
P.kC("Error: "+H.h(u))
P.kC("Stack: "+H.h(t))
throw H.i(u)}}}
E.ik.prototype={
$1:function(a){var u
H.lJ(a)
u=this.a
if(u.ch){u.ch=!1
u.ip()}},
$S:29}
Z.e9.prototype={$inY:1}
Z.dd.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aw(s)
t=P.z('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.h(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.h(u.e)+"]"}}
Z.ea.prototype={$inZ:1}
Z.ck.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
aN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a9:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.j],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aM(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seK:function(a){this.b=H.n(a,"$ib",[Z.bU],"$ab")},
$io5:1}
Z.bU.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.cE(this.c))+"'")+"]"}}
Z.bD.prototype={
gcr:function(a){var u=this.a,t=(u&$.aL().a)!==0?3:0
if((u&$.bk().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=3
if((u&$.bJ().a)!==0)t+=2
if((u&$.bK().a)!==0)t+=3
if((u&$.d7().a)!==0)t+=3
if((u&$.d8().a)!==0)t+=4
if((u&$.cg().a)!==0)++t
return(u&$.bi().a)!==0?t+4:t},
hz:function(a){var u,t=$.aL(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0)if(u===a)return t
return $.m2()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bD))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.j]),t=this.a
if((t&$.aL().a)!==0)C.a.h(u,"Pos")
if((t&$.bk().a)!==0)C.a.h(u,"Norm")
if((t&$.bj().a)!==0)C.a.h(u,"Binm")
if((t&$.bJ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bK().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d7().a)!==0)C.a.h(u,"Clr3")
if((t&$.d8().a)!==0)C.a.h(u,"Clr4")
if((t&$.cg().a)!==0)C.a.h(u,"Weight")
if((t&$.bi().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fj.prototype={}
D.bR.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.m(b,u)
if(this.a==null)this.sac(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.kV(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fC(q))
u=r.b
if(u!=null){r.saJ(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.J(u,new D.fD(q))}return!0},
hR:function(){return this.B(null)},
aA:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
sac:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saJ:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fC.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:13}
D.fD.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:13}
D.x.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.de.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.du.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.fY.prototype={
ih:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ib:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
sfT:function(a){this.d=H.n(a,"$ila",[P.q],"$ala")}}
X.dz.prototype={}
X.h3.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaM()
r=new X.bc(a,V.be(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cd:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dV()
if(typeof u!=="number")return u.am()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aT(a,b))
return!0},
ii:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaM()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cy(new V.T(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
fm:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dz(c,r.a.gaM(),b)
s.b=!0
t.B(s)
r.y=new P.ay(u,!1)
r.x=V.be()}}
X.at.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.bc.prototype={}
X.hr.prototype={
bC:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaM(),r=new X.bc(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cd:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bC(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dV()
if(typeof t!=="number")return t.am()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bC(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bC(a,b,!1))
return!0},
ij:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaM()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cy(new V.T(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gdl:function(){var u=this.b
return u==null?this.b=D.O():u},
gcm:function(){var u=this.c
return u==null?this.c=D.O():u},
gdB:function(){var u=this.d
return u==null?this.d=D.O():u}}
X.cy.prototype={}
X.hI.prototype={}
X.e0.prototype={}
X.ip.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.a4],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.be()
s=q.a.gaM()
r=new X.e0(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ig:function(a){var u
H.n(a,"$ib",[V.a4],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
ic:function(a){var u
H.n(a,"$ib",[V.a4],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aT(a,!0))
return!0},
ie:function(a){var u
H.n(a,"$ib",[V.a4],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aT(a,!1))
return!0}}
X.e5.prototype={
gaM:function(){var u=this.a,t=C.h.gdf(u).c
t.toString
u=C.h.gdf(u).d
u.toString
return V.l8(0,0,t,u)},
cN:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.du(u,new X.at(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
bU:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.a4(s-q,r-u)},
aU:function(a){return new V.T(a.movementX,a.movementY)},
bR:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.d.ag(r.pageX)
C.d.ag(r.pageY)
p=o.left
C.d.ag(r.pageX)
C.a.h(n,new V.a4(q-p,C.d.ag(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.de(u,new X.at(t,a.altKey,a.shiftKey))},
bH:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fg:function(a){this.f=!0},
f4:function(a){this.f=!1},
fa:function(a){H.k(a,"$iab")
if(H.A(this.f)&&this.bH(a))a.preventDefault()},
fk:function(a){var u
H.k(a,"$iaU")
if(!H.A(this.f))return
u=this.cN(a)
this.b.ih(u)},
fi:function(a){var u
H.k(a,"$iaU")
if(!H.A(this.f))return
u=this.cN(a)
this.b.ib(u)},
fo:function(a){var u,t,s,r,q=this
H.k(a,"$iab")
u=q.a
u.focus()
q.f=!0
q.aK(a)
if(H.A(q.x)){t=q.ap(a)
s=q.aU(a)
if(q.d.cd(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ap(a)
r=q.ar(a)
if(q.c.cd(t,r))a.preventDefault()},
ft:function(a){var u,t,s,r=this
H.k(a,"$iab")
r.aK(a)
u=r.ap(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ar(a)
if(r.c.b5(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
H.k(a,"$iab")
if(!r.bH(a)){r.aK(a)
u=r.ap(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ar(a)
if(r.c.b5(u,s))a.preventDefault()}},
fq:function(a){var u,t,s,r=this
H.k(a,"$iab")
r.aK(a)
u=r.ap(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()},
fc:function(a){var u,t,s,r=this
H.k(a,"$iab")
if(!r.bH(a)){r.aK(a)
u=r.ap(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ar(a)
if(r.c.b4(u,s))a.preventDefault()}},
fv:function(a){var u,t,s=this
H.k(a,"$ib7")
s.aK(a)
u=new V.T((a&&C.v).ghL(a),C.v.ghM(a)).q(0,180)
if(H.A(s.x)){if(s.d.ii(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.ar(a)
if(s.c.ij(u,t))a.preventDefault()},
fz:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.fm(u,t,r)}},
fP:function(a){var u,t=this
H.k(a,"$iaK")
t.a.focus()
t.f=!0
t.bU(a)
u=t.bR(a)
if(t.e.ig(u))a.preventDefault()},
fL:function(a){var u
H.k(a,"$iaK")
this.bU(a)
u=this.bR(a)
if(this.e.ic(u))a.preventDefault()},
fN:function(a){var u
H.k(a,"$iaK")
this.bU(a)
u=this.bR(a)
if(this.e.ie(u))a.preventDefault()},
seE:function(a){this.z=H.n(a,"$ib",[[P.cJ,P.P]],"$ab")}}
D.bp.prototype={
ao:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
ec:function(){return this.ao(null)},
$ia9:1,
$ibX:1}
D.a9.prototype={$ibX:1}
D.dv.prototype={
ao:function(a){var u=this.x
if(u!=null)u.B(a)},
cU:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.B(a)},
fl:function(){return this.cU(null)},
fB:function(a){var u,t,s
H.n(a,"$ie",[D.a9],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.ew(s))return!1}return!0},
eZ:function(a,b){var u,t,s,r,q,p,o,n=D.a9
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcT(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=H.k(b[q],"$ia9")
if(p instanceof D.bp)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bR()
o.sac(null)
o.saJ(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bu([n])
n.b=!0
this.ao(n)},
fF:function(a,b){var u,t,s,r=D.a9
H.n(b,"$ie",[r],"$ae")
for(u=b.gO(b),t=this.gcT();u.v();){s=u.gD(u)
C.a.M(this.e,s)
s.gp().M(0,t)}r=new D.bv([r])
r.b=!0
this.ao(r)},
ew:function(a){var u=C.a.S(this.e,a)
return u},
seC:function(a){this.e=H.n(a,"$ib",[D.bp],"$ab")},
sfQ:function(a){this.f=H.n(a,"$ib",[D.dL],"$ab")},
shg:function(a){this.r=H.n(a,"$ib",[D.dU],"$ab")},
$ae:function(){return[D.a9]},
$aa0:function(){return[D.a9]}}
D.dL.prototype={$ia9:1,$ibX:1}
D.dU.prototype={$ia9:1,$ibX:1}
V.a2.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.ax.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fB.prototype={}
V.dE.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.D])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.N().a
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
i:function(a){var u,t,s,r,q=this,p=[P.D],o=V.cc(H.c([q.a,q.d,q.r],p),3,0),n=V.cc(H.c([q.b,q.e,q.x],p),3,0),m=V.cc(H.c([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
c8:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.N().a)return V.bW()
u=1/b1
t=-n
s=-a0
return V.aW((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aW(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bo:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cl:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.N().a
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
G:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.cc(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cc(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cc(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cc(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.a4.prototype={
F:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a5.prototype={
E:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.bz.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bz))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dO.prototype={
ga7:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dO))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.T.prototype={
c9:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.T(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.lj
return u==null?$.lj=new V.T(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.T(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.L.prototype={
c9:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
at:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
E:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.L(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cR()
return new V.L(this.a/b,this.b/b,this.c/b)},
dA:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fk.prototype={
bx:function(a){var u=V.nX(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.O():u},
L:function(a){var u=this.y
if(u!=null)u.B(a)},
scn:function(a,b){},
sca:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bx(u)}s=new D.J("maximumLocation",s,t.b,[P.D])
s.b=!0
t.L(s)}},
scc:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bx(u)}s=new D.J("minimumLocation",s,t.c,[P.D])
s.b=!0
t.L(s)}},
sa6:function(a,b){var u,t=this
b=t.bx(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.J("location",u,b,[P.D])
u.b=!0
t.L(u)}},
scb:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.D])
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.J("velocity",t,a,[P.D])
t.b=!0
u.L(t)}},
sc_:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.J("dampening",u,a,[P.D])
u.b=!0
this.L(u)}},
ah:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dg.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
aO:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dg))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.ct.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u},
L:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.B(a)},
a2:function(){return this.L(null)},
eX:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaI(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.L(n)},
fD:function(a,b){var u,t,s=U.ad
H.n(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gaI();u.v();)u.gD(u).gp().M(0,t)
s=new D.bv([s])
s.b=!0
this.L(s)},
aO:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ab()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.y(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aO(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bW():u
r=s.e
if(r!=null)r.aA(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ct))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.X(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.ad]},
$aa0:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.e6.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.O():u},
L:function(a){var u
H.k(a,"$ix")
u=this.cy
if(u!=null)u.B(a)},
a2:function(){return this.L(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdl().h(0,u.gbI())
u.a.c.gdB().h(0,u.gbK())
u.a.c.gcm().h(0,u.gbM())
return!0},
bJ:function(a){var u=this
H.k(a,"$ix")
if(!J.X(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bL:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$ix"),"$ibc")
if(!H.A(n.y))return
if(H.A(n.x)){u=a.d.F(0,a.y)
u=new V.T(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.A(n.d)){u=a.c
t=a.d.F(0,a.y)
u=new V.T(t.a,t.b).u(0,2).q(0,u.ga7())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.T(s.a,s.b).u(0,2).q(0,u.ga7())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
n.b.sR(0)
t=t.F(0,a.z)
n.Q=new V.T(t.a,t.b).u(0,2).q(0,u.ga7())}n.a2()},
bN:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.A(r.y))return
r.y=!1
if(H.A(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.a2()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.ch=p
u=b.y
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aW(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iad:1}
U.e7.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.O():u},
L:function(a){var u
H.k(a,"$ix")
u=this.fx
if(u!=null)u.B(a)},
a2:function(){return this.L(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdl().h(0,s.gbI())
s.a.c.gdB().h(0,s.gbK())
s.a.c.gcm().h(0,s.gbM())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.geP())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.geR())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.ghp())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.ghn())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.ghl())
return!0},
ak:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.T(u,t)},
bJ:function(a){var u=this
a=H.r(H.k(a,"$ix"),"$ibc")
if(!J.X(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bL:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$ix"),"$ibc")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.F(0,a.y)
u=new V.T(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.ak(new V.T(t.a,t.b).u(0,2).q(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ak(new V.T(s.a,s.b).u(0,2).q(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa6(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.ak(new V.T(t.a,t.b).u(0,2).q(0,u.ga7()))}n.a2()},
bN:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a2()}},
eQ:function(a){var u=this
if(H.r(H.k(a,"$ix"),"$idz").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eS:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$ix"),"$ibc")
if(!J.X(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ak(new V.T(s.a,s.b).u(0,2).q(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa6(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.ak(new V.T(t.a,t.b).u(0,2).q(0,u.ga7()))
n.a2()},
hq:function(a){var u=this
H.k(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ho:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$ix"),"$ie0")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.F(0,a.y)
u=new V.T(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.ak(new V.T(t.a,t.b).u(0,2).q(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ak(new V.T(s.a,s.b).u(0,2).q(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa6(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.F(0,a.z)
n.dx=n.ak(new V.T(t.a,t.b).u(0,2).q(0,u.ga7()))}n.a2()},
hm:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.a2()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.dy=p
u=b.y
r.c.ah(0,u)
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aW(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aW(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
U.e8.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.O():u},
L:function(a){var u=this.r
if(u!=null)u.B(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.O():t
t=r.geU()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.O():s).h(0,t)
return!0},
eV:function(a){var u,t,s,r,q=this
H.k(a,"$ix")
if(!J.X(q.b,q.a.b.c))return
H.r(a,"$icy")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.D])
u.b=!0
q.L(u)}},
aO:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aW(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iad:1}
M.df.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.O():u},
W:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
aR:function(){return this.W(null)},
fH:function(a,b){var u,t,s,r,q,p,o,n=M.av
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.W(n)},
fJ:function(a,b){var u,t,s=M.av
H.n(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.v();)u.gD(u).gp().M(0,t)
s=new D.bv([s])
s.b=!0
this.W(s)},
a9:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.v();){t=u.d
if(t!=null)t.a9(a)}s.f=!1},
$ae:function(){return[M.av]},
$aa0:function(){return[M.av]},
$iav:1}
M.dh.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.O():u},
W:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.B(a)},
aR:function(){return this.W(null)},
saX:function(a){var u,t,s=this
if(a==null)a=new X.fS()
u=s.b
if(u!==a){if(u!=null)u.gp().M(0,s.gV())
t=s.b
s.b=a
a.gp().h(0,s.gV())
u=new D.J("camera",t,s.b,[X.bP])
u.b=!0
s.W(u)}},
sb6:function(a,b){var u,t,s=this
if(b==null)b=X.ka(null)
u=s.c
if(u!==b){if(u!=null)u.gp().M(0,s.gV())
t=s.c
s.c=b
b.gp().h(0,s.gV())
u=new D.J("target",t,s.c,[X.cK])
u.b=!0
s.W(u)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().M(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gV())
s=new D.J("technique",u,t.d,[O.bA])
s.b=!0
t.W(s)}},
a9:function(a){var u=this
a.cf(u.d)
u.c.X(a)
u.b.X(a)
u.e.ah(0,a)
u.e.a9(a)
u.b.aN(a)
u.c.toString
a.ce()},
$iav:1}
M.dl.prototype={
W:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.B(a)},
aR:function(){return this.W(null)},
f6:function(a,b){var u,t,s,r,q,p,o,n=E.ag
H.n(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gV(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bR()
o.sac(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sac(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bu([n])
n.b=!0
this.W(n)},
f8:function(a,b){var u,t,s=E.ag
H.n(b,"$ie",[s],"$ae")
for(u=b.gO(b),t=this.gV();u.v();)u.gD(u).gp().M(0,t)
s=new D.bv([s])
s.b=!0
this.W(s)},
saX:function(a){var u,t,s=this
if(a==null)a=X.l0(null)
u=s.b
if(u!==a){if(u!=null)u.gp().M(0,s.gV())
t=s.b
s.b=a
a.gp().h(0,s.gV())
u=new D.J("camera",t,s.b,[X.bP])
u.b=!0
s.W(u)}},
sb6:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().M(0,t.gV())
u=t.c
t.c=b
b.gp().h(0,t.gV())
s=new D.J("target",u,t.c,[X.cK])
s.b=!0
t.W(s)}},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().M(0,t.gV())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gV())
s=new D.J("technique",u,t.d,[O.bA])
s.b=!0
t.W(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.O():u},
a9:function(a){var u,t=this
a.cf(t.d)
t.c.X(a)
t.b.X(a)
u=t.d
if(u!=null)u.ah(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.v();)u.d.ah(0,a)
for(u=t.e.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.v();)u.d.a9(a)
t.b.toString
a.cy.ay()
a.db.ay()
t.c.toString
a.ce()},
seu:function(a,b){this.e=H.n(b,"$ia0",[E.ag],"$aa0")},
$iav:1}
M.av.prototype={}
A.da.prototype={}
A.fb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
gai:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.af))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dC.prototype={
e5:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bf("")
t=c0.dy
if(t){u.a=b9
s=b9}else s=""
r=c0.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nc(c0,u)
A.ne(c0,u)
A.nd(c0,u)
A.ng(c0,u)
A.nh(c0,u)
A.nf(c0,u)
A.ni(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.rx
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
u.a=s}if(c0.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.dz(0,s.charCodeAt(0)==0?s:s,A.nb(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.T(0,"invViewMat"),"$iap")
if(t)b5.dy=H.r(b5.y.T(0,"objMat"),"$iap")
if(r)b5.fr=H.r(b5.y.T(0,"viewObjMat"),"$iap")
b5.fy=H.r(b5.y.T(0,"projViewObjMat"),"$iap")
if(c0.ry)b5.k1=H.r(b5.y.T(0,"txt2DMat"),"$icQ")
if(c0.x1)b5.k2=H.r(b5.y.T(0,"txtCubeMat"),"$iap")
if(c0.x2)b5.k3=H.r(b5.y.T(0,"colorMat"),"$iap")
b5.sep(H.c([],[A.ap]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.T(0,"bendMatCount"),"$iaA")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.B(P.z(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iap"))}}if(c0.a.a)b5.r2=H.r(b5.y.T(0,"emissionClr"),"$iV")
if(c0.b.a)b5.x1=H.r(b5.y.T(0,"ambientClr"),"$iV")
if(c0.c.a)b5.y2=H.r(b5.y.T(0,"diffuseClr"),"$iV")
if(c0.d.a)b5.dn=H.r(b5.y.T(0,"invDiffuseClr"),"$iV")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dr=H.r(b5.y.T(0,"shininess"),"$ia6")
if(t)b5.dq=H.r(b5.y.T(0,"specularClr"),"$iV")}if(c0.cy){b5.ds=H.r(b5.y.T(0,"envSampler"),"$ibC")
if(c0.r.a)b5.dt=H.r(b5.y.T(0,"reflectClr"),"$iV")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.du=H.r(b5.y.T(0,"refraction"),"$ia6")
if(t)b5.dv=H.r(b5.y.T(0,"refractClr"),"$iV")}}if(c0.y.a)b5.dw=H.r(b5.y.T(0,"alpha"),"$ia6")
t=P.q
s=[t,A.aA]
b5.seB(new H.a1(s))
b5.sed(new H.a1([t,[P.b,A.c2]]))
b5.sfR(new H.a1(s))
b5.sfS(new H.a1([t,[P.b,A.c3]]))
b5.shf(new H.a1(s))
b5.see(new H.a1([t,[P.b,A.c5]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c2],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.am()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.B(P.z(b7+g+b8))
H.r(m,"$iV")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.B(P.z(b7+g+b8))
H.r(f,"$iV")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.B(P.z(b7+g+b8))
H.r(e,"$iV")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.B(P.z(b7+g+b8))
H.r(m,"$iV")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.B(P.z(b7+g+b8))
H.r(f,"$iV")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.B(P.z(b7+o+b8))
H.r(e,"$ic4")
a=e}else a=b6
C.a.h(h,new A.c2(b,c,d,m,f,a))}b5.c1.n(0,j,h)
q=b5.c0
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaA"))}for(t=c0.Q,s=t.length,r=[A.c3],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.B(P.z(b7+o+b8))
H.r(m,"$iV")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.B(P.z(b7+o+b8))
H.r(f,"$iV")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.B(P.z(b7+o+b8))
H.r(e,"$iV")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.B(P.z(b7+o+b8))
H.r(a0,"$icQ")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.z(b7+o+b8))
H.r(a0,"$ibC")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.z(b7+o+b8))
H.r(a0,"$ibC")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.B(P.z(b7+o+b8))
H.r(a2,"$icP")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.B(P.z(b7+o+b8))
H.r(a0,"$ia6")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.B(P.z(b7+o+b8))
H.r(a2,"$ia6")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.B(P.z(b7+o+b8))
H.r(a5,"$ia6")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c3(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c3.n(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaA"))}for(t=c0.ch,s=t.length,r=[A.c5],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.h(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.B(P.z(b7+o+b8))
H.r(m,"$iV")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.B(P.z(b7+o+b8))
H.r(f,"$iV")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.B(P.z(b7+o+b8))
H.r(e,"$iV")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.B(P.z(b7+o+b8))
H.r(a0,"$iV")
if(typeof j!=="number")return j.am()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.B(P.z(b7+o+b8))
H.r(a2,"$iV")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.B(P.z(b7+o+b8))
H.r(a5,"$iV")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.B(P.z(b7+o+b8))
H.r(a9,"$ia6")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.B(P.z(b7+o+b8))
H.r(b0,"$ia6")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.j(0,g)
if(a2==null)H.B(P.z(b7+g+b8))
H.r(a2,"$icP")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.B(P.z(b7+g+b8))
H.r(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.B(P.z(b7+g+b8))
H.r(a5,"$ia6")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.B(P.z(b7+g+b8))
H.r(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.B(P.z(b7+g+b8))
H.r(a5,"$ia6")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.B(P.z(b7+g+b8))
H.r(a9,"$ia6")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.B(P.z(b7+g+b8))
H.r(a2,"$ic4")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.B(P.z(b7+o+b8))
H.r(a2,"$ic4")
a3=a2}else a3=b6
C.a.h(h,new A.c5(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c5.n(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.z(b7+o+b8))
q.n(0,j,H.k(m,"$iaA"))}}},
h6:function(a,b){},
sep:function(a){this.r1=H.n(a,"$ib",[A.ap],"$ab")},
seB:function(a){this.c0=H.n(a,"$iG",[P.q,A.aA],"$aG")},
sed:function(a){this.c1=H.n(a,"$iG",[P.q,[P.b,A.c2]],"$aG")},
sfR:function(a){this.c2=H.n(a,"$iG",[P.q,A.aA],"$aG")},
sfS:function(a){this.c3=H.n(a,"$iG",[P.q,[P.b,A.c3]],"$aG")},
shf:function(a){this.c4=H.n(a,"$iG",[P.q,A.aA],"$aG")},
see:function(a){this.c5=H.n(a,"$iG",[P.q,[P.b,A.c5]],"$aG")}}
A.aF.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.aG.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.aH.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.hb.prototype={
i:function(a){return this.b0}}
A.c2.prototype={}
A.c3.prototype={}
A.c5.prototype={}
A.cG.prototype={
cv:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dz:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cO(b,35633)
r.f=r.cO(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.A(H.kr(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.B(P.z("Failed to link shader: "+H.h(s)))}r.ha()
r.hc()},
X:function(a){a.a.useProgram(this.r)
this.x.hS()},
cO:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.kr(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.z("Error compiling shader '"+H.h(s)+"': "+H.h(u)))}return s},
ha:function(){var u,t,s,r=this,q=H.c([],[A.da]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.da(p,t.name,s))}r.x=new A.fb(q)},
hc:function(){var u,t,s,r=this,q=H.c([],[A.e1]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hK(t.type,t.size,t.name,s))}r.y=new A.iC(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.aA(u,b,c)
else return A.kj(u,this.r,b,a,c)},
ey:function(a,b,c){var u=this.a
if(a===1)return new A.c4(u,b,c)
else return A.kj(u,this.r,b,a,c)},
ez:function(a,b,c){var u=this.a
if(a===1)return new A.bC(u,b,c)
else return A.kj(u,this.r,b,a,c)},
be:function(a,b){return new P.ej(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
hK:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.a6(u.a,c,d)
case 35664:return new A.iy(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.cP(u.a,c,d)
case 35667:return new A.iz(u.a,c,d)
case 35668:return new A.iA(u.a,c,d)
case 35669:return new A.iB(u.a,c,d)
case 35674:return new A.iD(u.a,c,d)
case 35675:return new A.cQ(u.a,c,d)
case 35676:return new A.ap(u.a,c,d)
case 35678:return u.ey(b,c,d)
case 35680:return u.ez(b,c,d)
case 35670:throw H.i(u.be("BOOL",c))
case 35671:throw H.i(u.be("BOOL_VEC2",c))
case 35672:throw H.i(u.be("BOOL_VEC3",c))
case 35673:throw H.i(u.be("BOOL_VEC4",c))
default:throw H.i(P.z("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.dS.prototype={}
A.e1.prototype={}
A.iC.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.z("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aA.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
shs:function(a){H.n(a,"$ib",[P.q],"$ab")}}
A.a6.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.cP.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.cQ.prototype={
af:function(a){var u=new Float32Array(H.d3(H.n(a,"$ib",[P.D],"$ab")))
C.b.dQ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.ap.prototype={
af:function(a){var u=new Float32Array(H.d3(H.n(a,"$ib",[P.D],"$ab")))
C.b.dR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.c4.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.bC.prototype={
dX:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.k0.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jO.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kG(n.$1(o),m)
m=J.kG(n.$1(o+3.141592653589793/p.c),m).F(0,l)
m=new V.L(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.w(m)))
n=$.ll
if(n==null){n=new V.L(1,0,0)
$.ll=n
t=n}else t=n
n=u.at(!J.X(u,t)?V.ln():t)
s=n.q(0,Math.sqrt(n.w(n)))
n=s.at(u)
t=n.q(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=l.E(0,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.X(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a8()}},
$S:37}
F.a3.prototype={
b_:function(){var u=this
if(!u.gdk()){C.a.M(u.a.a.d.b,u)
u.a.a.a8()}u.fW()
u.fX()
u.fY()},
h7:function(a){this.a=a
C.a.h(a.d.b,this)},
h8:function(a){this.b=a
C.a.h(a.d.c,this)},
h9:function(a){this.c=a
C.a.h(a.d.d,this)},
fW:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
fX:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
fY:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gdk:function(){return this.a==null||this.b==null||this.c==null},
eo:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cR()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.dA())return
return s.q(0,Math.sqrt(s.w(s)))},
es:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.w(r)))
r=t.F(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.at(r.q(0,Math.sqrt(r.w(r))))
return r.q(0,Math.sqrt(r.w(r)))},
bY:function(){var u,t=this
if(t.d!=null)return!0
u=t.eo()
if(u==null){u=t.es()
if(u==null)return!1}t.d=u
t.a.a.a8()
return!0},
en:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cR()
if(q!=null)s=s.E(0,q)
if(u!=null)s=s.E(0,u)
if(t!=null)s=s.E(0,t)
if(s.dA())return
return s.q(0,Math.sqrt(s.w(s)))},
er:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.F(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.F(0,g).u(0,p).E(0,g).F(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.w(l)))
l=o.at(q)
l=l.q(0,Math.sqrt(l.w(l))).at(o)
q=l.q(0,Math.sqrt(l.w(l)))}return q},
bW:function(){var u,t=this
if(t.e!=null)return!0
u=t.en()
if(u==null){u=t.er()
if(u==null)return!1}t.e=u
t.a.a.a8()
return!0},
ghG:function(a){var u=this
if(J.X(u.a,u.b))return!0
if(J.X(u.b,u.c))return!0
if(J.X(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this
if(s.gdk())return a+"disposed"
u=a+C.c.ax(J.aM(s.a.e),0)+", "+C.c.ax(J.aM(s.b.e),0)+", "+C.c.ax(J.aM(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.fE.prototype={}
F.i0.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.by.prototype={}
F.h_.prototype={}
F.iw.prototype={
b3:function(a,b,c){var u,t=b.a
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
F.bY.prototype={}
F.dQ.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.aA(0)
return u},
i4:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.y(o,0)])
for(o=[F.aq];u.length!==0;){t=C.a.ghV(u)
C.a.dH(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){C.a.h(s,q)
C.a.dH(u,r)}}if(s.length>1)b.i3(s)}}p.a.A()
p.c.cg()
p.d.cg()
p.b.io()
p.c.ci(new F.iw())
p.d.ci(new F.i0())
o=p.e
if(o!=null)o.aA(0)},
dd:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aL()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bk().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.bK().a)!==0)++s
if((t&$.d7().a)!==0)++s
if((t&$.d8().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.bi().a)!==0)++s
r=a3.gcr(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.D
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dd])
for(n=0,m=0;m<s;++m){l=a3.hz(m)
k=l.gcr(l)
C.a.n(o,m,new Z.dd(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].i1(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d3(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ck(new Z.e9(a0,f),o,a3)
e.seK(H.c([],[Z.bU]))
a.b.b
if(a.c.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bU(1,d.length,b))}if(a.d.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.A()
C.a.h(d,c.e)}b=Z.lo(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bU(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.j])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.G("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.G("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.G("   "))}return C.a.l(t,"\n")},
a8:function(){var u=this.e
if(u!=null)u.B(null)},
$io4:1}
F.hU.prototype={
hv:function(a){var u,t,s,r,q,p
H.n(a,"$ib",[F.aq],"$ab")
u=H.c([],[F.a3])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dn(t,q,p))}return u},
hw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.aq],"$ab")
u=H.c([],[F.a3])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dn(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dn(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dn(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dn(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghG(s)
if(t)s.b_()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bY())s=!1
return s},
bX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bW())s=!1
return s},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].G(a))
return C.a.l(r,"\n")},
P:function(){return this.G("")},
seF:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")}}
F.hV.prototype={
gm:function(a){return this.b.length},
ci:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
cg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.X(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.c([],[P.j]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.l(s,"\n")},
P:function(){return this.G("")},
seL:function(a){this.b=H.n(a,"$ib",[F.by],"$ab")}}
F.hW.prototype={
gm:function(a){return 0},
io:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].giY()
t=t.giV(t)
if(t.gm(t).a0(0,1)){t=this.b
return H.d(t,u)
t[u].b_()}}},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.c([],[P.j])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].G(a))}return C.a.l(s,"\n")},
P:function(){return this.G("")},
sbQ:function(a){this.b=H.n(a,"$ib",[F.bY],"$ab")}}
F.aq.prototype={
dh:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iN(u.cx,r,o,t,s,q,p,a,n)},
i1:function(a){var u,t,s=this
if(a.t(0,$.aL())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bk())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bj())){u=s.x
t=[P.D]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bJ())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bK())){u=s.z
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d7())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.d8())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.cg()))return H.c([s.ch],[P.D])
else if(a.t(0,$.bi())){u=s.cx
t=[P.D]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.D])},
bY:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cR()
t.d.J(0,new F.iY(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aA(0)}return!0},
bW:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cR()
t.d.J(0,new F.iX(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.aA(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.j])
C.a.h(q,C.c.ax(J.aM(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
P:function(){return this.G("")}}
F.iY.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:5}
F.iX.prototype={
$1:function(a){var u,t
H.k(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.E(0,u)}},
$S:5}
F.iO.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.z("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a8()
return!0},
bf:function(a,b,c,d,e,f){var u=F.iN(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gm:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bY()
return!0},
bX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bW()
return!0},
hF:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.X(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.A()
u=H.c([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
P:function(){return this.G("")},
sht:function(a){this.c=H.n(a,"$ib",[F.aq],"$ab")}}
F.iP.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
J:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a3]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iQ(u,b))
C.a.J(u.d,new F.iR(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].G(""))
return C.a.l(r,"\n")},
seG:function(a){this.b=H.n(a,"$ib",[F.a3],"$ab")},
seH:function(a){this.c=H.n(a,"$ib",[F.a3],"$ab")},
seI:function(a){this.d=H.n(a,"$ib",[F.a3],"$ab")}}
F.iQ.prototype={
$1:function(a){H.k(a,"$ia3")
if(!J.X(a.a,this.a))this.b.$1(a)},
$S:5}
F.iR.prototype={
$1:function(a){var u
H.k(a,"$ia3")
u=this.a
if(!J.X(a.a,u)&&!J.X(a.b,u))this.b.$1(a)},
$S:5}
F.iS.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.j])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].G(""))
return C.a.l(r,"\n")},
seM:function(a){this.b=H.n(a,"$ib",[F.by],"$ab")},
seN:function(a){this.c=H.n(a,"$ib",[F.by],"$ab")}}
F.iU.prototype={}
F.iT.prototype={
b3:function(a,b,c){return J.X(b.f,c.f)}}
F.iV.prototype={}
F.hA.prototype={
i3:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ib",[F.aq],"$ab")
u=V.cR()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.w(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.w)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.q(0,Math.sqrt(o*o+n*n+m*m))}if(!J.X(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}return}}
F.iW.prototype={
gm:function(a){return 0},
i:function(a){return this.P()},
P:function(){var u,t,s=H.c([],[P.j])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].G(""))}return C.a.l(s,"\n")},
sbQ:function(a){this.b=H.n(a,"$ib",[F.bY],"$ab")}}
O.dB.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.O():u},
Z:function(a){var u
H.k(a,"$ix")
u=this.fr
if(u!=null)u.B(a)},
bw:function(){return this.Z(null)},
cZ:function(a){H.k(a,"$ix")
this.a=null
this.Z(a)},
h1:function(){return this.cZ(null)},
f0:function(a,b){var u=V.al
H.n(b,"$ie",[u],"$ae")
u=new D.bu([u])
u.b=!0
this.Z(u)},
f2:function(a,b){var u=V.al
H.n(b,"$ie",[u],"$ae")
u=new D.bv([u])
u.b=!0
this.Z(u)},
cL:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.q,h=new H.a1([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aF])
h.J(0,new O.hf(j,q))
C.a.bs(q,new O.hg())
p=new H.a1([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){o=u[s]
r=o.gaZ()
n=p.j(0,o.gaZ())
p.n(0,r,n==null?1:n)}m=H.c([],[A.aG])
p.J(0,new O.hh(j,m))
C.a.bs(m,new O.hi())
l=new H.a1([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.w)(i),++s){o=i[s]
t=o.gaZ()
r=l.j(0,o.gaZ())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aH])
l.J(0,new O.hj(j,k))
C.a.bs(k,new O.hk())
i=C.e.a3(j.e.a.length+3,4)
j.dy.e
return A.ms(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
em:function(a,b){H.n(a,"$ib",[T.cM],"$ab")},
ah:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ak(u,u.length,[H.y(u,0)]);u.v();){t=u.d
t.toString
s=$.iM
if(s==null)s=$.iM=new V.L(0,0,1)
t.a=s
r=$.iL
t.d=r==null?$.iL=new V.L(0,1,0):r
r=$.iK
t.e=r==null?$.iK=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bo(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bo(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bo(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
dI:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cL()
u=H.k(b4.fr.j(0,b3.b0),"$idC")
if(u==null){u=A.mr(b3,b4.a)
b4.d8(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dm
b3=b5.e
if(!(b3 instanceof Z.ck))b3=b5.e=null
if(b3==null||!b3.d.t(0,s)){b3=t.k3
if(b3)b5.d.as()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bX()
q.a.bX()
q=q.e
if(q!=null)q.aA(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hF()
p=p.e
if(p!=null)p.aA(0)}n=b5.d.dd(new Z.ea(b4.a),s)
n.au($.aL()).e=b2.a.Q.c
if(b3)n.au($.bk()).e=b2.a.cx.c
if(r)n.au($.bj()).e=b2.a.ch.c
if(t.r1)n.au($.bJ()).e=b2.a.cy.c
if(q)n.au($.bK()).e=b2.a.db.c
if(t.rx)n.au($.bi()).e=b2.a.dx.c
b5.e=n}b3=T.cM
m=H.c([],[b3])
b2.a.X(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga_(q)
r=r.dy
r.toString
r.af(q.aa(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga_(q)
p=b4.dx
p=b4.cx=q.u(0,p.ga_(p))
q=p}r=r.fr
r.toString
r.af(q.aa(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gil()
p=b4.dx
p=b4.ch=q.u(0,p.ga_(p))
q=p}r=r.fy
r.toString
r.af(q.aa(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.af(C.k.aa(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.af(C.k.aa(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.af(C.k.aa(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bp(r.a,r.d,l)
for(r=[P.D],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ial")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.d3(H.n(p.aa(0,!0),"$ib",r,"$ab")))
C.b.dR(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.b.U(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.dn
C.b.U(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.dr
C.b.Y(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.dq
C.b.U(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.q
h=new H.a1([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.f7(b2.a.c1.j(0,0),e)
o=i.bo(f.a)
c=o.a
b=o.b
a=o.c
a=o.q(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.U(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.U(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c0.j(0,p)
C.b.bp(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.q
a0=new H.a1([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.D],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
a1=f.gaZ()
e=a0.j(0,a1)
if(e==null)e=0
a0.n(0,a1,e+1)
d=J.f7(b2.a.c3.j(0,a1),e)
a2=i.u(0,f.ga_(f))
b=f.ga_(f)
a=$.cC
b=b.cl(a==null?$.cC=new V.a5(0,0,0):a)
a=d.b
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=$.cC
b=a2.cl(b==null?$.cC=new V.a5(0,0,0):b)
a=d.c
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=f.gaY(f)
a=d.e
C.b.U(a.a,a.d,b.a,b.b,b.c)
f.gaB()
b=a2.c8(0)
a=b.a
a3=b.b
a4=b.c
a5=b.e
a6=b.f
a7=b.r
a8=b.y
a9=b.z
b=b.Q
b0=d.d
b0.toString
j=new Float32Array(H.d3(H.n(new V.dE(a,a3,a4,a5,a6,a7,a8,a9,b).aa(0,!0),"$ib",c,"$ab")))
C.b.dQ(b0.a,b0.d,!1,j)
f.gaB()
b=f.gaB()
H.n(m,"$ib",o,"$ab")
if(!C.a.S(m,b)){b.sb1(0,m.length)
C.a.h(m,b)}b=f.gaB()
a=b.gb2(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaQ()
b=f.gdY()
a=d.x
a.toString
a3=b.ghO(b)
a4=b.ghP(b)
a5=b.ghQ()
b=b.ghN()
C.b.dP(a.a,a.d,a3,a4,a5,b)
b=f.gaQ()
if(!C.a.S(m,b)){b.sb1(0,m.length)
C.a.h(m,b)}b=f.gaQ()
a=b.gb2(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghT()){b=f.ghA()
a=d.y
C.b.Y(a.a,a.d,b)
b=f.ghB()
a=d.z
C.b.Y(a.a,a.d,b)
b=f.ghC()
a=d.Q
C.b.Y(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c2.j(0,p)
C.b.bp(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga_(q)
q=P.q
b1=new H.a1([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
a1=f.gaZ()
e=b1.j(0,a1)
if(e==null)e=0
b1.n(0,a1,e+1)
d=J.f7(b2.a.c5.j(0,a1),e)
o=f.gik(f)
c=d.b
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giD(f).iU()
c=d.c
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=i.cl(f.gik(f))
c=d.d
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gaY(f)
c=d.e
C.b.U(c.a,c.d,o.a,o.b,o.c)
f.gaB()
o=f.gcm()
c=d.f
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.gcj(f)
c=d.r
C.b.U(c.a,c.d,o.a,o.b,o.c)
o=f.giW()
c=d.x
C.b.Y(c.a,c.d,o)
o=f.giX()
c=d.y
C.b.Y(c.a,c.d,o)
f.gaB()
o=f.gaB()
H.n(m,"$ib",b3,"$ab")
if(!C.a.S(m,o)){o.sb1(0,m.length)
C.a.h(m,o)}o=f.gaB()
c=o.gb2(o)
if(c){c=d.dx
c.toString
b=o.gb2(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gb1(o)
c.a.uniform1i(c.d,o)}}f.gaQ()
o=f.gdY()
c=d.z
c.toString
b=o.ghO(o)
a=o.ghP(o)
a3=o.ghQ()
o=o.ghN()
C.b.dP(c.a,c.d,b,a,a3,o)
o=f.gaQ()
if(!C.a.S(m,o)){o.sb1(0,m.length)
C.a.h(m,o)}o=f.gaQ()
c=o.gb2(o)
if(c){c=d.dy
c.toString
b=o.gb2(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gb1(o)
c.a.uniform1i(c.d,o)}}if(f.giE()){o=f.giC()
c=d.Q
C.b.Y(c.a,c.d,o)
o=f.giB()
c=d.ch
C.b.Y(c.a,c.d,o)}if(f.ghT()){o=f.ghA()
c=d.cx
C.b.Y(c.a,c.d,o)
o=f.ghB()
c=d.cy
C.b.Y(c.a,c.d,o)
o=f.ghC()
c=d.db
C.b.Y(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.w)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c4.j(0,q)
C.b.bp(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga_(r).c8(0)}b3=b3.id
b3.toString
b3.af(r.aa(0,!0))}if(t.cy){b2.em(m,b2.ch)
b3=b2.a
r=b2.ch
b3.h6(b3.ds,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.dt
C.b.U(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.du
C.b.Y(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.dv
C.b.U(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.dw
C.b.Y(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].X(b4)
b3=b5.e
b3.X(b4)
b3.a9(b4)
b3.aN(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aN(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.dj()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cL().b0},
seq:function(a){this.e=H.n(a,"$ia0",[V.al],"$aa0")}}
O.hf.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.E()
return C.a.h(this.b,new A.aF(a,C.e.a3(b+3,4)*4))},
$S:10}
O.hg.prototype={
$2:function(a,b){H.k(a,"$iaF")
H.k(b,"$iaF")
return J.k2(a.a,b.a)},
$S:41}
O.hh.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.E()
return C.a.h(this.b,new A.aG(a,C.e.a3(b+3,4)*4))},
$S:10}
O.hi.prototype={
$2:function(a,b){H.k(a,"$iaG")
H.k(b,"$iaG")
return J.k2(a.a,b.a)},
$S:42}
O.hj.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.E()
return C.a.h(this.b,new A.aH(a,C.e.a3(b+3,4)*4))},
$S:10}
O.hk.prototype={
$2:function(a,b){H.k(a,"$iaH")
H.k(b,"$iaH")
return J.k2(a.a,b.a)},
$S:43}
O.h9.prototype={
aq:function(){var u,t=this
t.ct()
u=t.f
if(!(Math.abs(u-1)<$.N().a)){t.f=1
u=new D.J(t.b,u,1,[P.D])
u.b=!0
t.a.Z(u)}}}
O.dD.prototype={
aq:function(){},
d1:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.Z(null)}}}
O.ha.prototype={}
O.aV.prototype={
d0:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.Z(t)}},
aq:function(){this.ct()
this.d0(new V.a2(1,1,1))},
saY:function(a,b){this.d1(new A.af(!0,!1,!1))
this.d0(b)}}
O.hc.prototype={}
O.hd.prototype={
aq:function(){var u,t=this
t.cu()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.J(t.b+".refraction",u,1,[P.D])
u.b=!0
t.a.Z(u)}}}
O.he.prototype={
d2:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.J(u.b+".shininess",t,a,[P.D])
t.b=!0
u.a.Z(t)}},
aq:function(){this.cu()
this.d2(100)}}
O.dR.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u},
Z:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.B(a)},
bw:function(){return this.Z(null)},
dI:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idS")
if(u==null){t=a.a
u=new A.dS(t,n)
u.cv(t,n)
u.dz(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$ia6")
u.ch=H.r(u.y.j(0,"ratio"),"$ia6")
u.cx=H.r(u.y.j(0,"boxClr"),"$iV")
u.cy=H.r(u.y.j(0,"boxTxt"),"$ibC")
u.db=H.r(u.y.j(0,"viewMat"),"$iap")
a.d8(u)}o.a=u}if(b.e==null){t=b.d.dd(new Z.ea(a.a),$.aL())
t.au($.aL()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.X(a)
q=o.b
p=r.Q
C.b.Y(p.a,p.d,q)
q=r.ch
C.b.Y(q.a,q.d,t/s)
s=o.c
r.cy.dX(s)
s=o.d
t=r.cx
C.b.U(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga_(s).c8(0)
r=r.db
r.toString
r.af(s.aa(0,!0))
t=b.e
if(t instanceof Z.ck){t.X(a)
t.a9(a)
t.aN(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.dj()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bA.prototype={}
T.cM.prototype={}
T.dY.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u}}
T.ii.prototype={
aH:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.l
W.a7(t,"load",H.m(new T.ij(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
h2:function(a,b,c){var u,t,s,r
b=V.kB(b)
u=V.kB(a.width)
t=V.kB(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k6()
s.width=u
s.height=t
r=H.k(C.h.dT(s,"2d"),"$icl")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nv(r.getImageData(0,0,s.width,s.height))}}}
T.ij.prototype={
$1:function(a){var u=this,t=u.a,s=t.h2(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iu(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hR()}++t.e},
$S:20}
V.b9.prototype={
aw:function(a,b){return!0},
i:function(a){return"all"},
$ias:1}
V.as.prototype={}
V.dA.prototype={
aw:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aw(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa1:function(a){this.a=H.n(a,"$ib",[V.as],"$ab")},
$ias:1}
V.am.prototype={
aw:function(a,b){return!this.e2(0,b)},
i:function(a){return"!["+this.cs(0)+"]"}}
V.hK.prototype={
aw:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.kg(this.a),t=H.kg(this.b)
return u+".."+t},
$ias:1}
V.hT.prototype={
e7:function(a){var u,t
if(a.a.length<=0)throw H.i(P.z("May not create a SetMatcher with zero characters."))
u=new H.a1([P.q,P.M])
for(t=new H.cw(a,a.gm(a),[H.aj(a,"v",0)]);t.v();)u.n(0,t.d,!0)
this.sh5(u)},
aw:function(a,b){return this.a.dg(0,b)},
i:function(a){var u=this.a
return P.kh(new H.dw(u,[H.y(u,0)]))},
sh5:function(a){this.a=H.n(a,"$iG",[P.q,P.M],"$aG")},
$ias:1}
V.cH.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cO(this.a.k(0,b))
r.sa1(H.c([],[V.as]))
r.c=!1
C.a.h(this.c,r)
return r},
hU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aw(0,a))return r}return},
i:function(a){return this.b},
shr:function(a){this.c=H.n(a,"$ib",[V.cO],"$ab")}}
V.e_.prototype={
i:function(a){var u=H.kD(this.b,"\n","\\n"),t=H.kD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cN.prototype={
az:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.j],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.w)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfZ:function(a){var u=P.j
this.c=H.n(a,"$iG",[u,u],"$aG")}}
V.im.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cH(this,b)
u.shr(H.c([],[V.cO]))
u.d=null
this.a.n(0,b,u)}return u},
K:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cN(a)
u=P.j
t.sfZ(new H.a1([u,u]))
this.b.n(0,a,t)}return t},
dO:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e_]),l=this.c,k=[P.q],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aF(a,s)
q=l.hU(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.kh(j)
throw H.i(P.z("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.kh(j)
o=l.d
n=o.c.j(0,p)
t=new V.e_(n==null?o.b:n,p,s)}++s}}},
shh:function(a){this.a=H.n(a,"$iG",[P.j,V.cH],"$aG")},
shk:function(a){this.b=H.n(a,"$iG",[P.j,V.cN],"$aG")}}
V.cO.prototype={
i:function(a){return this.b.b+": "+this.cs(0)}}
X.bP.prototype={$ibX:1}
X.fM.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.O():u},
aj:function(a){var u=this.x
if(u!=null)u.B(a)},
X:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.d.ag(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.d.ag(r*t)
r=C.d.ag(s.c*u)
a.c=r
s=C.d.ag(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fS.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
X:function(a){var u
a.cy.bm(V.bW())
u=V.bW()
a.db.bm(u)},
aN:function(a){a.cy.ay()
a.db.ay()},
$ibX:1,
$ibP:1}
X.dK.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.O():u},
aj:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.B(a)},
ej:function(){return this.aj(null)},
X:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aW(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bm(k)
r=$.l1
if(r==null){r=V.l3()
q=V.kk()
p=$.lk
r=V.kX(r,q,p==null?$.lk=new V.L(0,0,-1):p)
$.l1=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aO(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bm(u)},
aN:function(a){a.cy.ay()
a.db.ay()},
$ibX:1,
$ibP:1}
X.cK.prototype={}
V.bn.prototype={
b9:function(a){this.b=new P.fQ(C.H)
this.c=null
this.sbF(H.c([],[[P.b,W.az]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.az]))
u=a.split("\n")
for(l=u.length,t=[W.az],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.Q(q)
o=m.b.ex(q,0,q.length)
n=o==null?q:o
C.F.dW(p,H.kD(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbi(m.d),p)}},
dG:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.j],"$ab")
q.sbF(H.c([],[[P.b,W.az]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bg():t).dO(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)q.bl(t[r])},
sbF:function(a){this.d=H.n(a,"$ib",[[P.b,W.az]],"$ab")}}
V.jZ.prototype={
$1:function(a){var u
H.k(a,"$ib3")
u=C.d.dN(this.a.ghX(),2)
if(u!=="0.00")P.kC(u+" fps")},
$S:45}
V.fr.prototype={
bl:function(a){var u=this
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
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.io()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.u(new H.p("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.u(new H.p("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.u(new H.p("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.u(new H.p(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.u(new H.p(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.u(new H.p('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.u(new H.p('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.u(new H.p("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.u(new H.p('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b9())
t=a1.k(0,r).l(0,h)
u=V.u(new H.p("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.u(new H.p("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.u(new H.p("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.u(new H.p("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b9())
t=a1.k(0,r).l(0,e)
u=V.u(new H.p("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.u(new H.p("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.u(new H.p("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.am()
s=[V.as]
t.sa1(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.p("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.u(new H.p("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.u(new H.p("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.am()
t.sa1(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.p("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.u(new H.p("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.u(new H.p(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.u(new H.p(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.K("Num")
t=a1.k(0,n)
t.d=t.a.K("Num")
t=a1.k(0,m)
t.d=t.a.K("Symbol")
t=a1.k(0,j)
t.d=t.a.K("String")
t=a1.k(0,g)
t.d=t.a.K("String")
t=a1.k(0,c)
t.d=t.a.K(d)
t=a1.k(0,a0)
t.d=t.a.K(a0)
t=a1.k(0,q)
t=t.d=t.a.K(q)
u=[P.j]
t.az(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.az(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.az(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fN.prototype={
bl:function(a){var u=this
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
bg:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.io()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.u(new H.p("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.u(new H.p("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.u(new H.p("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.u(new H.p(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.u(new H.p(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.u(new H.p("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.u(new H.p("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b9())
t=e.k(0,j).l(0,i)
u=V.u(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.am()
s=[V.as]
t.sa1(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.p("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.am()
u.sa1(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.p("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.u(new H.p("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.u(new H.p(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.u(new H.p(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.K("Num")
u=e.k(0,n)
u.d=u.a.K("Num")
u=e.k(0,m)
u.d=u.a.K("Symbol")
u=e.k(0,i)
u.d=u.a.K(j)
u=e.k(0,g)
u.d=u.a.K(h)
u=e.k(0,f)
u.d=u.a.K(f)
u=e.k(0,q)
u=u.d=u.a.K(q)
t=[P.j]
u.az(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.az(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.az(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fO.prototype={
bl:function(a){var u=this,t="#111"
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
bg:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.io()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.u(new H.p("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.u(new H.p("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.u(new H.p("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.u(new H.p("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.u(new H.p("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.u(new H.p('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.u(new H.p('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.u(new H.p("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.u(new H.p('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b9())
C.a.h(l.k(0,s).l(0,m).a,new V.b9())
u=l.k(0,m).l(0,m)
t=new V.am()
t.sa1(H.c([],[V.as]))
C.a.h(u.a,t)
u=V.u(new H.p('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.K("Symbol")
u=l.k(0,n)
u.d=u.a.K("String")
u=l.k(0,r)
t=u.a.K(r)
u.d=t
t.az(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.j]))
t=l.k(0,q)
t.d=t.a.K(q)
t=l.k(0,m)
t.d=t.a.K(m)
return l}}
V.hG.prototype={
dG:function(a,b){H.n(b,"$ib",[P.j],"$ab")
this.sbF(H.c([],[[P.b,W.az]]))
this.I(C.a.l(b,"\n"),"#111")},
bl:function(a){},
bg:function(){return}}
V.hX.prototype={
e8:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.l
W.a7(q,"scroll",H.m(new V.hZ(o),{func:1,ret:-1,args:[r]}),!1,r)},
d7:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.j],"$ab")
this.hb()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dO(C.a.i0(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.nR(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.lt(C.r,n,C.i,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
dS:function(a){var u,t,s,r=new V.fr("dart")
r.b9("dart")
u=new V.fN("glsl")
u.b9("glsl")
t=new V.fO("html")
t.b9("html")
s=C.a.hW(H.c([r,u,t],[V.bn]),new V.i_(a))
if(s!=null)return s
r=new V.hG("plain")
r.b9("plain")
return r},
d6:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.j],"$ab")
u=H.c([],[P.q])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kx(r).bt(r,"+")){C.a.n(b0,s,C.c.an(r,1))
C.a.h(u,1)
t=!0}else if(C.c.bt(r,"-")){C.a.n(b0,s,C.c.an(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dS(a8)
q.dG(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.lt(C.r,a7,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kI()
i.href="#"+m
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.d(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.w)(r),++a0)C.P.hy(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.w)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gO(r);a3.v();)c.appendChild(a3.gD(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hb:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.io()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.am()
r=[V.as]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.p("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.u(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.u(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.am()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.p("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.u(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.u(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.am()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.p("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.u(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.u(new H.p("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.u(new H.p("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.u(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.am()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.p("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.am()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.p("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b9())
s=u.k(0,i).l(0,i)
t=new V.am()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.p("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.K(p)
s=u.k(0,n)
s.d=s.a.K(o)
s=u.k(0,"CodeEnd")
s.d=s.a.K(m)
s=u.k(0,j)
s.d=s.a.K("Link")
s=u.k(0,i)
s.d=s.a.K(i)
this.b=u}}
V.hZ.prototype={
$1:function(a){P.lf(C.j,new V.hY(this.a))},
$S:20}
V.hY.prototype={
$0:function(){var u=C.d.ag(document.documentElement.scrollTop),t=this.a.style,s=H.h(-0.01*u)+"px"
t.top=s},
$S:2}
V.i_.prototype={
$1:function(a){return H.k(a,"$ibn").a===this.a},
$S:46}
B.jW.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ix")
u=this.a.d
t=this.b
s=u.a
r=[P.j]
t.d6("Vertex Shader for Skybox","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
s=u.a
t.d6("Fragment Shader for Skybox","glsl",0,H.c((s==null?null:s.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.e_=u.i
u=J.dt.prototype
u.e1=u.i
u=P.e.prototype
u.e0=u.bq
u=W.R.prototype
u.bu=u.ad
u=W.eF.prototype
u.e3=u.al
u=O.dD.prototype
u.ct=u.aq
u=O.aV.prototype
u.cu=u.aq
u=V.dA.prototype
u.e2=u.aw
u.cs=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"np","mN",9)
u(P,"nq","mO",9)
u(P,"nr","mP",9)
t(P,"lC","nn",3)
s(W,"nC",4,null,["$4"],["mR"],18,0)
s(W,"nD",4,null,["$4"],["mS"],18,0)
var m
r(m=E.ag.prototype,"gdE",0,0,null,["$1","$0"],["dF","ia"],0,0)
r(m,"gdC",0,0,null,["$1","$0"],["dD","i7"],0,0)
q(m,"gi5","i6",7)
q(m,"gi8","i9",7)
r(m=E.dZ.prototype,"gcz",0,0,null,["$1","$0"],["cB","cA"],0,0)
p(m,"giq","dJ",3)
o(m=X.e5.prototype,"gff","fg",12)
o(m,"gf3","f4",12)
o(m,"gf9","fa",4)
o(m,"gfj","fk",28)
o(m,"gfh","fi",28)
o(m,"gfn","fo",4)
o(m,"gfs","ft",4)
o(m,"gfd","fe",4)
o(m,"gfp","fq",4)
o(m,"gfb","fc",4)
o(m,"gfu","fv",48)
o(m,"gfw","fz",12)
o(m,"gfO","fP",11)
o(m,"gfK","fL",11)
o(m,"gfM","fN",11)
r(D.bp.prototype,"geb",0,0,null,["$1","$0"],["ao","ec"],0,0)
r(m=D.dv.prototype,"gcT",0,0,null,["$1","$0"],["cU","fl"],0,0)
o(m,"gfA","fB",30)
q(m,"geY","eZ",19)
q(m,"gfE","fF",19)
n(V.T.prototype,"gm","c9",27)
n(V.L.prototype,"gm","c9",27)
r(m=U.ct.prototype,"gaI",0,0,null,["$1","$0"],["L","a2"],0,0)
q(m,"geW","eX",17)
q(m,"gfC","fD",17)
r(m=U.e6.prototype,"gaI",0,0,null,["$1","$0"],["L","a2"],0,0)
o(m,"gbI","bJ",1)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
r(m=U.e7.prototype,"gaI",0,0,null,["$1","$0"],["L","a2"],0,0)
o(m,"gbI","bJ",1)
o(m,"gbK","bL",1)
o(m,"gbM","bN",1)
o(m,"geP","eQ",1)
o(m,"geR","eS",1)
o(m,"ghp","hq",1)
o(m,"ghn","ho",1)
o(m,"ghl","hm",1)
o(U.e8.prototype,"geU","eV",1)
r(m=M.df.prototype,"gV",0,0,null,["$1","$0"],["W","aR"],0,0)
q(m,"gfG","fH",26)
q(m,"gfI","fJ",26)
r(M.dh.prototype,"gV",0,0,null,["$1","$0"],["W","aR"],0,0)
r(m=M.dl.prototype,"gV",0,0,null,["$1","$0"],["W","aR"],0,0)
q(m,"gf5","f6",7)
q(m,"gf7","f8",7)
r(m=O.dB.prototype,"gbv",0,0,null,["$1","$0"],["Z","bw"],0,0)
r(m,"gh0",0,0,null,["$1","$0"],["cZ","h1"],0,0)
q(m,"gf_","f0",14)
q(m,"gf1","f2",14)
r(O.dR.prototype,"gbv",0,0,null,["$1","$0"],["Z","bw"],0,0)
r(X.dK.prototype,"gei",0,0,null,["$1","$0"],["aj","ej"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.ke,J.a,J.ak,P.es,P.e,H.cw,P.aS,H.bS,H.e4,H.it,P.br,H.cm,H.eK,P.aa,H.h0,H.h1,H.fW,P.eQ,P.b8,P.aC,P.eb,P.i7,P.cJ,P.i8,P.b3,P.ae,P.jH,P.jv,P.c7,P.er,P.v,P.cn,P.fR,P.jF,P.M,P.ay,P.a8,P.bq,P.hE,P.dV,P.ej,P.fL,P.bs,P.b,P.G,P.K,P.ao,P.j,P.bf,W.fn,W.bE,W.C,W.dI,W.eF,W.jA,W.dp,W.au,W.ju,W.eW,P.eV,P.jp,O.a0,O.cx,E.fg,E.ag,E.hL,E.dZ,Z.e9,Z.ea,Z.ck,Z.bU,Z.bD,D.fj,D.bR,D.x,X.de,X.du,X.fY,X.h3,X.at,X.hr,X.ip,X.e5,D.bp,D.a9,D.dL,D.dU,V.a2,V.ax,V.fB,V.dE,V.al,V.a4,V.a5,V.bz,V.dO,V.T,V.L,U.e6,U.e7,U.e8,M.dh,M.dl,M.av,A.da,A.fb,A.af,A.aF,A.aG,A.aH,A.hb,A.c2,A.c3,A.c5,A.e1,A.iC,F.a3,F.fE,F.by,F.h_,F.bY,F.dQ,F.hU,F.hV,F.hW,F.aq,F.iO,F.iP,F.iS,F.iU,F.iV,F.iW,O.bA,O.dD,O.hc,T.ii,V.b9,V.as,V.dA,V.hK,V.hT,V.cH,V.e_,V.cN,V.im,X.bP,X.cK,X.fS,X.dK,V.bn,V.hX])
s(J.a,[J.fV,J.ds,J.dt,J.aT,J.cv,J.bw,H.cA,W.f,W.f8,W.db,W.cl,W.aO,W.aP,W.S,W.ed,W.fs,W.ft,W.ef,W.dk,W.eh,W.fv,W.l,W.ek,W.aR,W.fP,W.en,W.bt,W.dy,W.hl,W.et,W.eu,W.aX,W.ev,W.ey,W.aY,W.eC,W.eE,W.b0,W.eG,W.b1,W.eL,W.aI,W.eO,W.il,W.b4,W.eR,W.ir,W.iH,W.eX,W.eZ,W.f0,W.f2,W.f4,P.bb,P.ep,P.bd,P.eA,P.hJ,P.eM,P.bg,P.eT,P.fc,P.ec,P.dc,P.dM,P.c0,P.dP,P.dX,P.e2,P.eI])
s(J.dt,[J.hF,J.c6,J.bx])
t(J.kd,J.aT)
s(J.cv,[J.dr,J.dq])
t(P.h2,P.es)
s(P.h2,[H.e3,W.j6,W.ai,P.fH])
t(H.p,H.e3)
s(P.e,[H.fy,H.h6,H.cS])
s(H.fy,[H.bV,H.dw])
s(P.aS,[H.h7,H.j_])
t(H.h8,H.bV)
s(P.br,[H.hB,H.fX,H.iF,H.iv,H.fi,H.hR,P.fa,P.dJ,P.aE,P.iG,P.iE,P.cI,P.fl,P.fq])
s(H.cm,[H.k1,H.ie,H.jS,H.jT,H.jU,P.j2,P.j1,P.j3,P.j4,P.jE,P.jD,P.jc,P.jg,P.jd,P.je,P.jf,P.jj,P.jk,P.ji,P.jh,P.i9,P.ia,P.jL,P.js,P.jr,P.jt,P.h5,P.fw,P.fx,W.fz,W.hn,W.hp,W.hQ,W.i6,W.jb,W.hz,W.hy,W.jw,W.jx,W.jC,W.jG,P.jN,P.fI,P.fJ,P.fe,E.hM,E.hN,E.hO,E.ik,D.fC,D.fD,F.k0,F.jO,F.iY,F.iX,F.iQ,F.iR,O.hf,O.hg,O.hh,O.hi,O.hj,O.hk,T.ij,V.jZ,V.hZ,V.hY,V.i_,B.jW])
s(H.ie,[H.i4,H.ci])
t(H.j0,P.fa)
t(P.h4,P.aa)
s(P.h4,[H.a1,W.j5])
t(H.dF,H.cA)
s(H.dF,[H.cW,H.cY])
t(H.cX,H.cW)
t(H.cz,H.cX)
t(H.cZ,H.cY)
t(H.dG,H.cZ)
s(H.dG,[H.hs,H.ht,H.hu,H.hv,H.hw,H.dH,H.hx])
t(P.jq,P.jH)
t(P.jo,P.jv)
t(P.co,P.i8)
t(P.fA,P.cn)
s(P.co,[P.fQ,P.iJ])
t(P.iI,P.fA)
s(P.a8,[P.D,P.q])
s(P.aE,[P.c_,P.fT])
s(W.f,[W.E,W.fG,W.b_,W.d_,W.b2,W.aJ,W.d1,W.iZ,W.cT,P.ff,P.bO])
s(W.E,[W.R,W.bm,W.cU])
s(W.R,[W.t,P.o])
s(W.t,[W.d9,W.f9,W.ch,W.bl,W.bQ,W.az,W.fK,W.cu,W.hS,W.c1,W.dW,W.ic,W.id,W.cL])
s(W.aO,[W.cp,W.fo,W.fp])
t(W.fm,W.aP)
t(W.cq,W.ed)
t(W.eg,W.ef)
t(W.dj,W.eg)
t(W.ei,W.eh)
t(W.fu,W.ei)
t(W.aQ,W.db)
t(W.el,W.ek)
t(W.fF,W.el)
t(W.eo,W.en)
t(W.bT,W.eo)
t(W.bB,W.l)
s(W.bB,[W.aU,W.ab,W.aK])
t(W.hm,W.et)
t(W.ho,W.eu)
t(W.ew,W.ev)
t(W.hq,W.ew)
t(W.ez,W.ey)
t(W.cB,W.ez)
t(W.eD,W.eC)
t(W.hH,W.eD)
t(W.hP,W.eE)
t(W.d0,W.d_)
t(W.i1,W.d0)
t(W.eH,W.eG)
t(W.i2,W.eH)
t(W.i5,W.eL)
t(W.eP,W.eO)
t(W.ig,W.eP)
t(W.d2,W.d1)
t(W.ih,W.d2)
t(W.eS,W.eR)
t(W.iq,W.eS)
t(W.b7,W.ab)
t(W.eY,W.eX)
t(W.j7,W.eY)
t(W.ee,W.dk)
t(W.f_,W.eZ)
t(W.jl,W.f_)
t(W.f1,W.f0)
t(W.ex,W.f1)
t(W.f3,W.f2)
t(W.jy,W.f3)
t(W.f5,W.f4)
t(W.jz,W.f5)
t(W.j8,W.j5)
t(W.j9,P.i7)
t(W.kl,W.j9)
t(W.ja,P.cJ)
t(W.jB,W.eF)
t(P.an,P.jp)
t(P.eq,P.ep)
t(P.fZ,P.eq)
t(P.eB,P.eA)
t(P.hC,P.eB)
t(P.cF,P.o)
t(P.eN,P.eM)
t(P.ib,P.eN)
t(P.eU,P.eT)
t(P.is,P.eU)
t(P.fd,P.ec)
t(P.hD,P.bO)
t(P.eJ,P.eI)
t(P.i3,P.eJ)
s(E.fg,[Z.dd,A.cG,T.cM])
s(D.x,[D.bu,D.bv,D.J,X.hI])
s(X.hI,[X.dz,X.bc,X.cy,X.e0])
s(O.a0,[D.dv,U.ct,M.df])
s(D.fj,[U.fk,U.ad])
t(U.dg,U.ad)
s(A.cG,[A.dC,A.dS])
s(A.e1,[A.aA,A.iz,A.iA,A.iB,A.ix,A.a6,A.iy,A.V,A.cP,A.iD,A.cQ,A.ap,A.c4,A.bC])
t(F.i0,F.fE)
t(F.iw,F.h_)
t(F.iT,F.iU)
t(F.hA,F.iV)
s(O.bA,[O.dB,O.dR])
s(O.dD,[O.h9,O.ha,O.aV])
s(O.aV,[O.hd,O.he])
t(T.dY,T.cM)
s(V.dA,[V.am,V.cO])
t(X.fM,X.cK)
s(V.bn,[V.fr,V.fN,V.fO,V.hG])
u(H.e3,H.e4)
u(H.cW,P.v)
u(H.cX,H.bS)
u(H.cY,P.v)
u(H.cZ,H.bS)
u(P.es,P.v)
u(W.ed,W.fn)
u(W.ef,P.v)
u(W.eg,W.C)
u(W.eh,P.v)
u(W.ei,W.C)
u(W.ek,P.v)
u(W.el,W.C)
u(W.en,P.v)
u(W.eo,W.C)
u(W.et,P.aa)
u(W.eu,P.aa)
u(W.ev,P.v)
u(W.ew,W.C)
u(W.ey,P.v)
u(W.ez,W.C)
u(W.eC,P.v)
u(W.eD,W.C)
u(W.eE,P.aa)
u(W.d_,P.v)
u(W.d0,W.C)
u(W.eG,P.v)
u(W.eH,W.C)
u(W.eL,P.aa)
u(W.eO,P.v)
u(W.eP,W.C)
u(W.d1,P.v)
u(W.d2,W.C)
u(W.eR,P.v)
u(W.eS,W.C)
u(W.eX,P.v)
u(W.eY,W.C)
u(W.eZ,P.v)
u(W.f_,W.C)
u(W.f0,P.v)
u(W.f1,W.C)
u(W.f2,P.v)
u(W.f3,W.C)
u(W.f4,P.v)
u(W.f5,W.C)
u(P.ep,P.v)
u(P.eq,W.C)
u(P.eA,P.v)
u(P.eB,W.C)
u(P.eM,P.v)
u(P.eN,W.C)
u(P.eT,P.v)
u(P.eU,W.C)
u(P.ec,P.aa)
u(P.eI,P.v)
u(P.eJ,W.C)})()
var v={mangledGlobalNames:{q:"int",D:"double",a8:"num",j:"String",M:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.K,args:[F.a3]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.q,[P.e,E.ag]]},{func:1,ret:P.K,args:[D.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:-1,args:[W.l]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[P.q,[P.e,V.al]]},{func:1,ret:P.M,args:[W.au]},{func:1,args:[,]},{func:1,ret:-1,args:[P.q,[P.e,U.ad]]},{func:1,ret:P.M,args:[W.R,P.j,P.j,W.bE]},{func:1,ret:-1,args:[P.q,[P.e,D.a9]]},{func:1,ret:P.K,args:[W.l]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.j,args:[P.q]},{func:1,ret:P.M,args:[W.E]},{func:1,ret:P.M,args:[P.j]},{func:1,ret:P.K,args:[,]},{func:1,ret:-1,args:[P.q,[P.e,M.av]]},{func:1,ret:P.D},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.K,args:[P.a8]},{func:1,ret:P.M,args:[[P.e,D.a9]]},{func:1,ret:W.R,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:P.j,args:[P.j]},{func:1,args:[W.l]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:V.a5,args:[P.D]},{func:1,ret:P.K,args:[F.aq,P.D,P.D]},{func:1,ret:P.K,args:[,],opt:[P.ao]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.q,args:[A.aF,A.aF]},{func:1,ret:P.q,args:[A.aG,A.aG]},{func:1,ret:P.q,args:[A.aH,A.aH]},{func:1,args:[P.j]},{func:1,ret:P.K,args:[P.b3]},{func:1,ret:P.M,args:[V.bn]},{func:1,args:[,P.j]},{func:1,ret:-1,args:[W.b7]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bl.prototype
C.h=W.bQ.prototype
C.F=W.az.prototype
C.I=J.a.prototype
C.a=J.aT.prototype
C.J=J.dq.prototype
C.e=J.dr.prototype
C.k=J.ds.prototype
C.d=J.cv.prototype
C.c=J.bw.prototype
C.K=J.bx.prototype
C.O=W.cB.prototype
C.t=J.hF.prototype
C.b=P.c0.prototype
C.P=W.c1.prototype
C.u=W.dW.prototype
C.n=J.c6.prototype
C.v=W.b7.prototype
C.w=W.cT.prototype
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.D=new P.hE()
C.i=new P.iI()
C.E=new P.iJ()
C.f=new P.jq()
C.j=new P.bq(0)
C.G=new P.bq(5e6)
C.H=new P.fR("element",!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.N=H.c(u([]),[P.j])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.q])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])})();(function staticFields(){$.aN=0
$.cj=null
$.kJ=null
$.kn=!1
$.lG=null
$.lA=null
$.lM=null
$.jP=null
$.jV=null
$.kz=null
$.c8=null
$.d4=null
$.d5=null
$.ko=!1
$.a_=C.f
$.ar=[]
$.ba=null
$.k9=null
$.kP=null
$.kO=null
$.em=P.kT(P.j,P.bs)
$.kY=null
$.l2=null
$.cC=null
$.l9=null
$.lj=null
$.lm=null
$.ll=null
$.iK=null
$.iL=null
$.iM=null
$.lk=null
$.l1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o1","lQ",function(){return H.lF("_$dart_dartClosure")})
u($,"o2","kE",function(){return H.lF("_$dart_js")})
u($,"o6","lR",function(){return H.b5(H.iu({
toString:function(){return"$receiver$"}}))})
u($,"o7","lS",function(){return H.b5(H.iu({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o8","lT",function(){return H.b5(H.iu(null))})
u($,"o9","lU",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oc","lX",function(){return H.b5(H.iu(void 0))})
u($,"od","lY",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ob","lW",function(){return H.b5(H.lh(null))})
u($,"oa","lV",function(){return H.b5(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"of","m_",function(){return H.b5(H.lh(void 0))})
u($,"oe","lZ",function(){return H.b5(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ox","kF",function(){return P.mM()})
u($,"oz","m4",function(){return P.mC("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oy","m3",function(){return P.kU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"oq","m2",function(){return Z.aB(0)})
u($,"ok","m0",function(){return Z.aB(511)})
u($,"os","aL",function(){return Z.aB(1)})
u($,"or","bk",function(){return Z.aB(2)})
u($,"om","bj",function(){return Z.aB(4)})
u($,"ot","bJ",function(){return Z.aB(8)})
u($,"ou","bK",function(){return Z.aB(16)})
u($,"on","d7",function(){return Z.aB(32)})
u($,"oo","d8",function(){return Z.aB(64)})
u($,"op","m1",function(){return Z.aB(96)})
u($,"ov","cg",function(){return Z.aB(128)})
u($,"ol","bi",function(){return Z.aB(256)})
u($,"o0","lP",function(){return new V.fB(1e-9)})
u($,"o_","N",function(){return $.lP()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cA,ArrayBufferView:H.cA,Float32Array:H.cz,Float64Array:H.cz,Int16Array:H.hs,Int32Array:H.ht,Int8Array:H.hu,Uint16Array:H.hv,Uint32Array:H.hw,Uint8ClampedArray:H.dH,CanvasPixelArray:H.dH,Uint8Array:H.hx,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f8,HTMLAnchorElement:W.d9,HTMLAreaElement:W.f9,HTMLBaseElement:W.ch,Blob:W.db,HTMLBodyElement:W.bl,HTMLCanvasElement:W.bQ,CanvasRenderingContext2D:W.cl,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.cp,CSSUnitValue:W.cp,CSSPerspective:W.fm,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.aO,CSSKeywordValue:W.aO,CSSPositionValue:W.aO,CSSResourceValue:W.aO,CSSURLImageValue:W.aO,CSSStyleValue:W.aO,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.fo,CSSUnparsedValue:W.fp,DataTransferItemList:W.fs,HTMLDivElement:W.az,DOMException:W.ft,ClientRectList:W.dj,DOMRectList:W.dj,DOMRectReadOnly:W.dk,DOMStringList:W.fu,DOMTokenList:W.fv,Element:W.R,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aQ,FileList:W.fF,FileWriter:W.fG,HTMLFormElement:W.fK,Gamepad:W.aR,History:W.fP,HTMLCollection:W.bT,HTMLFormControlsCollection:W.bT,HTMLOptionsCollection:W.bT,ImageData:W.bt,HTMLImageElement:W.cu,KeyboardEvent:W.aU,Location:W.dy,MediaList:W.hl,MIDIInputMap:W.hm,MIDIOutputMap:W.ho,MimeType:W.aX,MimeTypeArray:W.hq,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cB,RadioNodeList:W.cB,Plugin:W.aY,PluginArray:W.hH,RTCStatsReport:W.hP,HTMLSelectElement:W.hS,SourceBuffer:W.b_,SourceBufferList:W.i1,SpeechGrammar:W.b0,SpeechGrammarList:W.i2,SpeechRecognitionResult:W.b1,Storage:W.i5,CSSStyleSheet:W.aI,StyleSheet:W.aI,HTMLTableCellElement:W.c1,HTMLTableDataCellElement:W.c1,HTMLTableHeaderCellElement:W.c1,HTMLTableElement:W.dW,HTMLTableRowElement:W.ic,HTMLTableSectionElement:W.id,HTMLTemplateElement:W.cL,TextTrack:W.b2,TextTrackCue:W.aJ,VTTCue:W.aJ,TextTrackCueList:W.ig,TextTrackList:W.ih,TimeRanges:W.il,Touch:W.b4,TouchEvent:W.aK,TouchList:W.iq,TrackDefaultList:W.ir,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,URL:W.iH,VideoTrackList:W.iZ,WheelEvent:W.b7,Window:W.cT,DOMWindow:W.cT,Attr:W.cU,CSSRuleList:W.j7,ClientRect:W.ee,DOMRect:W.ee,GamepadList:W.jl,NamedNodeMap:W.ex,MozNamedAttrMap:W.ex,SpeechRecognitionResultList:W.jy,StyleSheetList:W.jz,SVGLength:P.bb,SVGLengthList:P.fZ,SVGNumber:P.bd,SVGNumberList:P.hC,SVGPointList:P.hJ,SVGScriptElement:P.cF,SVGStringList:P.ib,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bg,SVGTransformList:P.is,AudioBuffer:P.fc,AudioParamMap:P.fd,AudioTrackList:P.ff,AudioContext:P.bO,webkitAudioContext:P.bO,BaseAudioContext:P.bO,OfflineAudioContext:P.hD,WebGLBuffer:P.dc,WebGLProgram:P.dM,WebGL2RenderingContext:P.c0,WebGLShader:P.dP,WebGLTexture:P.dX,WebGLUniformLocation:P.e2,SQLResultSetRowList:P.i3})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lI,[])
else B.lI([])})})()
//# sourceMappingURL=test.dart.js.map
