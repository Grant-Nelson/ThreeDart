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
a[c]=function(){a[c]=function(){H.ot(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kv(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kc:function kc(){},
jF:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mv:function(a,b,c,d){if(!!J.S(a).$it)return new H.fh(a,b,[c,d])
return new H.c2(a,b,[c,d])},
kR:function(){return new P.hO("No element")},
mT:function(a,b){var u=J.aj(a)
if(typeof u!=="number")return u.D()
H.dl(a,0,u-1,b)},
dl:function(a,b,c,d){if(c-b<=32)H.mS(a,b,c,d)
else H.mR(a,b,c,d)},
mS:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bk(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
mR:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.bk(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.z(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.P()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
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
if(typeof l!=="number")return l.P()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
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
H.dl(a3,a4,t-2,a6)
H.dl(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.z(a6.$2(d.h(a3,t),b),0);)++t
for(;J.z(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.dl(a3,t,s,a6)}else H.dl(a3,t,s,a6)},
O:function O(a){this.a=a},
t:function t(){},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fS:function fS(a,b){this.a=null
this.b=a
this.c=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
iN:function iN(a,b){this.a=a
this.b=b},
cU:function cU(){},
io:function io(){},
dA:function dA(){},
mf:function(){throw H.d(P.y("Cannot modify unmodifiable Map"))},
cC:function(a){var u,t=H.ou(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oe:function(a){return v.types[a]},
lE:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iA},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ab(a)
if(typeof u!=="string")throw H.d(H.a5(a))
return u},
cc:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mJ:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.L(s,q)|32)>t)return}return parseInt(a,b)},
cd:function(a){return H.mA(a)+H.lu(H.cA(a),0,null)},
mA:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibE){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cC(t.length>1&&C.a.L(t,0)===36?C.a.ah(t,1):t)},
mB:function(){if(!!self.location)return self.location.href
return},
l3:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mK:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.a5(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aM(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.a5(s))}return H.l3(r)},
l4:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.a5(s))
if(s<0)throw H.d(H.a5(s))
if(s>65535)return H.mK(a)}return H.l3(a)},
mL:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iq()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
df:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aM(u,10))>>>0,56320|u&1023)}}throw H.d(P.a_(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mI:function(a){var u=H.bx(a).getFullYear()+0
return u},
mG:function(a){var u=H.bx(a).getMonth()+1
return u},
mC:function(a){var u=H.bx(a).getDate()+0
return u},
mD:function(a){var u=H.bx(a).getHours()+0
return u},
mF:function(a){var u=H.bx(a).getMinutes()+0
return u},
mH:function(a){var u=H.bx(a).getSeconds()+0
return u},
mE:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
j:function(a){throw H.d(H.a5(a))},
c:function(a,b){if(a==null)J.aj(a)
throw H.d(H.bO(a,b))},
bO:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,s,null)
u=J.aj(a)
if(!(b<0)){if(typeof u!=="number")return H.j(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.dg(b,s)},
o7:function(a,b,c){var u="Invalid value"
if(a>c)return new P.by(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.by(a,c,!0,b,"end",u)
return new P.at(!0,b,"end",null)},
a5:function(a){return new P.at(!0,a,null,null)},
o3:function(a){if(typeof a!=="number")throw H.d(H.a5(a))
return a},
d:function(a){var u
if(a==null)a=new P.dc()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lM})
u.name=""}else u.toString=H.lM
return u},
lM:function(){return J.ab(this.dartException)},
n:function(a){throw H.d(a)},
q:function(a){throw H.d(P.bs(a))},
aK:function(a){var u,t,s,r,q,p
a=H.lI(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ia(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ib:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lb:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l_:function(a,b){return new H.hk(a,b==null?null:b.method)},
kd:function(a,b){var u=b==null,t=u?null:b.method
return new H.fE(a,t,u?null:b.receiver)},
bm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kd(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.l_(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lP()
q=$.lQ()
p=$.lR()
o=$.lS()
n=$.lV()
m=$.lW()
l=$.lU()
$.lT()
k=$.lY()
j=$.lX()
i=r.ao(u)
if(i!=null)return f.$1(H.kd(u,i))
else{i=q.ao(u)
if(i!=null){i.method="call"
return f.$1(H.kd(u,i))}else{i=p.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=n.ao(u)
if(i==null){i=m.ao(u)
if(i==null){i=l.ao(u)
if(i==null){i=o.ao(u)
if(i==null){i=k.ao(u)
if(i==null){i=j.ao(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.l_(u,i))}}return f.$1(new H.im(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dn()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.at(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dn()
return a},
kx:function(a){var u
if(a==null)return new H.ec(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ec(a)},
ob:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
oj:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.p("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oj)
a.$identity=u
return u},
me:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.bR(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.w()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kK(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ma(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kK(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ma:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oe,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kJ:H.k1
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mb:function(a,b,c,d){var u=H.k1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kK:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.md(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mb(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.w()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bS
return new Function(r+H.e(q==null?$.bS=H.eQ("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.w()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bS
return new Function(r+H.e(q==null?$.bS=H.eQ("self"):q)+"."+H.e(u)+"("+o+");}")()},
mc:function(a,b,c,d){var u=H.k1,t=H.kJ
switch(b?-1:a){case 0:throw H.d(H.mP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
md:function(a,b){var u,t,s,r,q,p,o,n=$.bS
if(n==null)n=$.bS=H.eQ("self")
u=$.kI
if(u==null)u=$.kI=H.eQ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mc(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.au
if(typeof u!=="number")return u.w()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.w()
$.au=u+1
return new Function(n+u+"}")()},
kv:function(a,b,c,d,e,f,g){return H.me(a,b,c,d,!!e,!!f,g)},
k1:function(a){return a.a},
kJ:function(a){return a.c},
eQ:function(a){var u,t,s,r=new H.bR("self","target","receiver","name"),q=J.ka(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
on:function(a,b){throw H.d(H.m9(a,H.cC(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.on(a,b)},
o9:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
m9:function(a,b){return new H.eR("CastError: "+P.k7(a)+": type '"+H.e(H.o_(a))+"' is not a subtype of type '"+b+"'")},
o_:function(a){var u,t=J.S(a)
if(!!t.$ibT){u=H.o9(t)
if(u!=null)return H.oo(u)
return"Closure"}return H.cd(a)},
ot:function(a){throw H.d(new P.f7(a))},
mP:function(a){return new H.hz(a)},
lB:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cA:function(a){if(a==null)return
return a.$ti},
p2:function(a,b,c){return H.jV(a["$a"+H.e(c)],H.cA(b))},
od:function(a,b,c,d){var u=H.jV(a["$a"+H.e(c)],H.cA(b))
return u==null?null:u[d]},
lC:function(a,b,c){var u=H.jV(a["$a"+H.e(b)],H.cA(a))
return u==null?null:u[c]},
bl:function(a,b){var u=H.cA(a)
return u==null?null:u[b]},
oo:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cC(a[0].name)+H.lu(a,1,b)
if(typeof a=="function")return H.cC(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.nv(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nv:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.a.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oa(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lu:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.N("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.i(0)+">"},
jV:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
p0:function(a,b,c){return a.apply(b,H.jV(J.S(b)["$a"+H.e(c)],H.cA(b)))},
p1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ok:function(a){var u,t,s,r,q=$.lD.$1(a),p=$.jA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lz.$2(a,q)
if(q!=null){p=$.jA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jR(u)
$.jA[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jJ[q]=u
return u}if(s==="-"){r=H.jR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lG(a,u)
if(s==="*")throw H.d(P.il(q))
if(v.leafTags[q]===true){r=H.jR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lG(a,u)},
lG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jR:function(a){return J.kz(a,!1,null,!!a.$iA)},
ol:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jR(u)
else return J.kz(u,c,null,null)},
oh:function(){if(!0===$.ky)return
$.ky=!0
H.oi()},
oi:function(){var u,t,s,r,q,p,o,n
$.jA=Object.create(null)
$.jJ=Object.create(null)
H.og()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lH.$1(q)
if(p!=null){o=H.ol(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
og:function(){var u,t,s,r,q,p,o=C.C()
o=H.bM(C.D,H.bM(C.E,H.bM(C.t,H.bM(C.t,H.bM(C.F,H.bM(C.G,H.bM(C.H(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lD=new H.jG(r)
$.lz=new H.jH(q)
$.lH=new H.jI(p)},
bM:function(a,b){return a(b)||b},
mo:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.P("Illegal RegExp pattern ("+String(p)+")",a,null))},
or:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
o8:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lI:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lK:function(a,b,c){var u=H.os(a,b,c)
return u},
os:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lI(b),'g'),H.o8(c))},
f0:function f0(){},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
jW:function jW(a){this.a=a},
ec:function ec(a){this.a=a
this.b=null},
bT:function bT(){},
hV:function hV(){},
hP:function hP(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a){this.a=a},
hz:function hz(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fD:function fD(a){this.a=a},
fI:function fI(a,b){this.a=a
this.b=b
this.c=null},
fJ:function fJ(a,b){this.a=a
this.$ti=b},
fK:function fK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bK:function(a){return a},
my:function(a){return new Int8Array(a)},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bO(b,a))},
nt:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.o7(a,b,c))
return b},
c8:function c8(){},
bb:function bb(){},
d8:function d8(){},
c9:function c9(){},
d9:function d9(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
da:function da(){},
ca:function ca(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
oa:function(a){return J.kS(a?Object.keys(a):[],null)},
ou:function(a){return v.mangledGlobalNames[a]},
om:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jC:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ky==null){H.oh()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.il("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kB()]
if(r!=null)return r
r=H.ok(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.kB(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
ml:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.k_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.kS(new Array(a),b)},
kS:function(a,b){return J.ka(H.b(a,[b]))},
ka:function(a){a.fixed$length=Array
return a},
mm:function(a,b){return J.cF(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d_.prototype
return J.cZ.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.d0.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a3)return a
return J.jC(a)},
bk:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a3)return a
return J.jC(a)},
jB:function(a){if(a==null)return a
if(a.constructor==Array)return J.b7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a3)return a
return J.jC(a)},
oc:function(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bE.prototype
return a},
kw:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bE.prototype
return a},
ez:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.a3)return a
return J.jC(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).p(a,b)},
bQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lE(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bk(a).h(a,b)},
jY:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lE(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jB(a).k(a,b,c)},
m3:function(a,b){return J.kw(a).L(a,b)},
m4:function(a,b,c){return J.ez(a).fZ(a,b,c)},
m5:function(a,b,c,d){return J.ez(a).hg(a,b,c,d)},
m6:function(a,b){return J.kw(a).V(a,b)},
cF:function(a,b){return J.oc(a).aQ(a,b)},
jZ:function(a,b){return J.jB(a).M(a,b)},
m7:function(a,b,c,d){return J.ez(a).hA(a,b,c,d)},
kF:function(a,b){return J.jB(a).I(a,b)},
kG:function(a){return J.ez(a).gc0(a)},
cG:function(a){return J.S(a).gJ(a)},
b0:function(a){return J.jB(a).gS(a)},
aj:function(a){return J.bk(a).gj(a)},
m8:function(a,b){return J.ez(a).i7(a,b)},
ab:function(a){return J.S(a).i(a)},
a:function a(){},
fB:function fB(){},
d0:function d0(){},
d1:function d1(){},
ho:function ho(){},
bE:function bE(){},
b9:function b9(){},
b7:function b7(a){this.$ti=a},
kb:function kb(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c_:function c_(){},
d_:function d_(){},
cZ:function cZ(){},
b8:function b8(){}},P={
n5:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o0()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.iP(s),1)).observe(u,{childList:true})
return new P.iO(s,u,t)}else if(self.setImmediate!=null)return P.o1()
return P.o2()},
n6:function(a){self.scheduleImmediate(H.bN(new P.iQ(a),0))},
n7:function(a){self.setImmediate(H.bN(new P.iR(a),0))},
n8:function(a){P.ki(C.p,a)},
ki:function(a,b){var u=C.c.a2(a.a,1000)
return P.nd(u<0?0:u,b)},
la:function(a,b){var u=C.c.a2(a.a,1000)
return P.ne(u<0?0:u,b)},
nd:function(a,b){var u=new P.ei()
u.ev(a,b)
return u},
ne:function(a,b){var u=new P.ei()
u.ew(a,b)
return u},
oY:function(a){return new P.bH(a,1)},
n9:function(){return C.V},
na:function(a){return new P.bH(a,3)},
ny:function(a,b){return new P.je(a,[b])},
nU:function(){var u,t
for(;u=$.bL,u!=null;){$.cz=null
t=u.b
$.bL=t
if(t==null)$.cy=null
u.a.$0()}},
nZ:function(){$.kt=!0
try{P.nU()}finally{$.cz=null
$.kt=!1
if($.bL!=null)$.kE().$1(P.lA())}},
nX:function(a){var u=new P.dG(a)
if($.bL==null){$.bL=$.cy=u
if(!$.kt)$.kE().$1(P.lA())}else $.cy=$.cy.b=u},
nY:function(a){var u,t,s=$.bL
if(s==null){P.nX(a)
$.cz=$.cy
return}u=new P.dG(a)
t=$.cz
if(t==null){u.b=s
$.bL=$.cz=u}else{u.b=t.b
$.cz=t.b=u
if(u.b==null)$.cy=u}},
l9:function(a,b){var u=$.ar
if(u===C.f)return P.ki(a,b)
return P.ki(a,u.ho(b))},
mY:function(a,b){var u=$.ar
if(u===C.f)return P.la(a,b)
return P.la(a,u.da(b,P.du))},
lv:function(a,b,c,d,e){var u={}
u.a=d
P.nY(new P.jy(u,e))},
nV:function(a,b,c,d){var u,t=$.ar
if(t===c)return d.$0()
$.ar=c
u=t
try{t=d.$0()
return t}finally{$.ar=u}},
nW:function(a,b,c,d,e){var u,t=$.ar
if(t===c)return d.$1(e)
$.ar=c
u=t
try{t=d.$1(e)
return t}finally{$.ar=u}},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
ei:function ei(){this.c=0},
jg:function jg(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
ct:function ct(a){var _=this
_.a=a
_.d=_.c=_.b=null},
je:function je(a,b){this.a=a
this.$ti=b},
dG:function dG(a){this.a=a
this.b=null},
dq:function dq(){},
hS:function hS(){},
du:function du(){},
jp:function jp(){},
jy:function jy(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
mq:function(a,b){return new H.H([a,b])},
kT:function(a,b){return new H.H([a,b])},
ms:function(a){return H.ob(a,new H.H([null,null]))},
kU:function(a){return new P.j0([a])},
ko:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nc:function(a,b){var u=new P.dV(a,b)
u.c=a.e
return u},
mk:function(a,b,c){var u,t
if(P.ku(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.r])
$.a9.push(a)
try{P.nx(a,u)}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}t=P.l6(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
k9:function(a,b,c){var u,t
if(P.ku(a))return b+"..."+c
u=new P.N(b)
$.a9.push(a)
try{t=u
t.a=P.l6(t.a,a,", ")}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ku:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
nx:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gF(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gF(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gF(n);++l
for(;n.u();r=q,q=p){p=n.gF(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
mr:function(a,b,c){var u=P.mq(b,c)
a.I(0,new P.fL(u))
return u},
kf:function(a){var u,t={}
if(P.ku(a))return"{...}"
u=new P.N("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.kF(a,new P.fQ(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.c($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j0:function j0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j1:function j1(a){this.a=a
this.c=this.b=null},
dV:function dV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fz:function fz(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
w:function w(){},
fP:function fP(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
a7:function a7(){},
jh:function jh(){},
fR:function fR(){},
dB:function dB(a,b){this.a=a
this.$ti=b},
j6:function j6(){},
dW:function dW(){},
eo:function eo(){},
n0:function(a,b,c,d){if(b instanceof Uint8Array)return P.n1(!1,b,c,d)
return},
n1:function(a,b,c,d){var u,t,s=$.lZ()
if(s==null)return
u=0===c
if(u&&!0)return P.km(s,b)
t=b.length
d=P.aX(c,d,t)
if(u&&d===t)return P.km(s,b)
return P.km(s,b.subarray(c,d))},
km:function(a,b){if(P.n3(b))return
return P.n4(a,b)},
n4:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.bm(t)}return},
n3:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
n2:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.bm(t)}return},
lx:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.j(c)
u=J.bk(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
kH:function(a,b,c,d,e,f){if(C.c.av(f,4)!==0)throw H.d(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.P("Invalid base64 padding, more than two '=' characters",a,b))},
eN:function eN(){},
eO:function eO(){},
eW:function eW(){},
f2:function f2(){},
fi:function fi(){},
iw:function iw(){},
iy:function iy(){},
jo:function jo(a){this.b=0
this.c=a},
ix:function ix(a){this.a=a},
jn:function jn(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eA:function(a,b,c){var u=H.mJ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.P(a,null,null))},
mi:function(a){if(a instanceof H.bT)return a.i(0)
return"Instance of '"+H.e(H.cd(a))+"'"},
mt:function(a,b,c){var u,t,s=J.ml(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ke:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b0(a);u.u();)t.push(u.gF(u))
if(b)return t
return J.ka(t)},
cg:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aX(b,c,u)
if(b<=0){if(typeof c!=="number")return c.P()
t=c<u}else t=!0
return H.l4(t?C.b.cv(a,b,c):a)}if(!!J.S(a).$ica)return H.mL(a,b,P.aX(b,c,a.length))
return P.mU(a,b,c)},
mU:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.a_(b,0,J.aj(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.a_(c,b,J.aj(a),q,q))
t=J.b0(a)
for(s=0;s<b;++s)if(!t.u())throw H.d(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gF(t))
else for(s=b;s<c;++s){if(!t.u())throw H.d(P.a_(c,b,s,q,q))
r.push(t.gF(t))}return H.l4(r)},
mN:function(a){return new H.fC(a,H.mo(a,!1,!0,!1,!1,!1))},
l6:function(a,b,c){var u=J.b0(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gF(u))
while(u.u())}else{a+=H.e(u.gF(u))
for(;u.u();)a=a+c+H.e(u.gF(u))}return a},
kl:function(){var u=H.mB()
if(u!=null)return P.n_(u)
throw H.d(P.y("'Uri.base' is not supported"))},
jm:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.m1().b
if(typeof b!=="string")H.n(H.a5(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghz().c2(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.df(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mg:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cP:function(a){if(a>=10)return""+a
return"0"+a},
kN:function(a){return new P.b2(1000*a)},
k7:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ab(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mi(a)},
cH:function(a){return new P.at(!1,null,null,a)},
k_:function(a,b,c){return new P.at(!0,a,b,c)},
dg:function(a,b){return new P.by(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.by(b,c,!0,a,d,"Invalid value")},
aX:function(a,b,c){var u
if(typeof a!=="number")return H.j(a)
if(0<=a){if(typeof c!=="number")return H.j(c)
u=a>c}else u=!0
if(u)throw H.d(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.j(c)
u=b>c}else u=!0
if(u)throw H.d(P.a_(b,a,c,"end",null))
return b}return c},
l5:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.a_(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.aj(b):e
return new P.fy(u,!0,a,c,"Index out of range")},
y:function(a){return new P.ip(a)},
il:function(a){return new P.ik(a)},
bs:function(a){return new P.f_(a)},
p:function(a){return new P.dO(a)},
P:function(a,b,c){return new P.fs(a,b,c)},
mu:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.c(s,u)
s[u]=t}return s},
kA:function(a){H.om(a)},
n_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.L(a,4)^58)*3|C.a.L(a,0)^100|C.a.L(a,1)^97|C.a.L(a,2)^116|C.a.L(a,3)^97)>>>0
if(u===0)return P.lc(e<e?C.a.t(a,0,e):a,5,f).ge8()
else if(u===32)return P.lc(C.a.t(a,5,e),0,f).ge8()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.v])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lw(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ip()
if(r>=0)if(P.lw(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.j(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.ac(a,"..",o)))j=n>o+2&&C.a.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.ac(a,"file",0)){if(q<=0){if(!C.a.ac(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aT(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ac(a,"http",0)){if(t&&p+3===o&&C.a.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ac(a,"https",0)){if(t&&p+4===o&&C.a.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aT(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.j7(a,r,q,p,o,n,m,k)}return P.nf(a,0,e,r,q,p,o,n,m,k)},
le:function(a){var u=P.r
return C.b.hE(H.b(a.split("&"),[u]),P.kT(u,u),new P.iu(C.e))},
mZ:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ir(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eA(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eA(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
ld:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.is(a),d=new P.it(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaF(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mZ(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.c.aM(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
nf:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nn(a,b,d)
else{if(d===b)P.bJ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.no(a,u,e-1):""
s=P.nk(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.j(g)
q=r<g?P.nm(P.eA(C.a.t(a,r,g),new P.ji(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nl(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kq(a,h+1,i,n):n
return new P.bI(j,t,s,q,p,o,i<c?P.nj(a,i+1,c):n)},
lo:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bJ:function(a,b,c){throw H.d(P.P(c,a,b))},
nm:function(a,b){if(a!=null&&a===P.lo(b))return
return a},
nk:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.D()
u=c-1
if(C.a.V(a,u)!==93)P.bJ(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nh(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lt(a,C.a.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.ld(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.j(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bp(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lt(a,C.a.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.ld(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.nq(a,b,c)},
nh:function(a,b,c){var u,t=C.a.bp(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.j(c)
u=t<c}else u=!1
return u?t:c},
lt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.N(d):null
if(typeof c!=="number")return H.j(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.kr(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.N("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bJ(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.N("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.N("")
l.a+=C.a.t(a,t,u)
l.a+=P.kp(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.j(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.kr(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.N("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.v,o)
o=(C.v[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.N("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bJ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.N("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kp(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nn:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lq(C.a.L(a,b)))P.bJ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.L(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bJ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.ng(t?a.toLowerCase():a)},
ng:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
no:function(a,b,c){return P.cw(a,b,c,C.R,!1)},
nl:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cw(a,b,c,C.w,!0):C.j.iG(d,new P.jj(),P.r).q(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.ak(u,"/"))u="/"+u
return P.np(u,e,f)},
np:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.ak(a,"/"))return P.nr(a,!u||c)
return P.ns(a)},
kq:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cH("Both query and queryParameters specified"))
return P.cw(a,b,c,C.l,!0)}if(d==null)return
u=new P.N("")
t.a=""
d.I(0,new P.jk(new P.jl(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nj:function(a,b,c){return P.cw(a,b,c,C.l,!0)},
kr:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.jF(u)
r=H.jF(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aM(q,4)
if(p>=8)return H.c(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.df(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kp:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.v])
t[0]=37
t[1]=C.a.L(m,a>>>4)
t[2]=C.a.L(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h8(a,6*r)&63|s
if(q>=u)return H.c(t,q)
t[q]=37
o=q+1
n=C.a.L(m,p>>>4)
if(o>=u)return H.c(t,o)
t[o]=n
n=q+2
o=C.a.L(m,p&15)
if(n>=u)return H.c(t,n)
t[n]=o
q+=3}}return P.cg(t,0,null)},
cw:function(a,b,c,d,e){var u=P.ls(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
ls:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.j(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kr(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bJ(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kp(u)}}if(m==null)m=new P.N("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.j(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lr:function(a){if(C.a.ak(a,"."))return!0
return C.a.dJ(a,"/.")!==-1},
ns:function(a){var u,t,s,r,q,p,o
if(!P.lr(a))return a
u=H.b([],[P.r])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.q(u,"/")},
nr:function(a,b){var u,t,s,r,q,p
if(!P.lr(a))return!b?P.lp(a):a
u=H.b([],[P.r])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaF(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaF(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.c(u,0)
t=P.lp(u[0])
if(0>=u.length)return H.c(u,0)
u[0]=t}return C.b.q(u,"/")},
lp:function(a){var u,t,s,r=a.length
if(r>=2&&P.lq(J.m3(a,0)))for(u=1;u<r;++u){t=C.a.L(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.ah(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ni:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.L(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cH("Invalid URL encoding"))}}return u},
ks:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.L(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.O(C.a.t(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.L(a,q)
if(t>127)throw H.d(P.cH("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cH("Truncated URI"))
r.push(P.ni(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.ix(!1).c2(r)},
lq:function(a){var u=a|32
return 97<=u&&u<=122},
lc:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.L(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.P(m,a,t))}}if(s<0&&t>b)throw H.d(P.P(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.L(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaF(l)
if(r!==44||t!==p+7||!C.a.ac(a,"base64",p+1))throw H.d(P.P("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.B.hN(0,a,o,u)
else{n=P.ls(a,o,u,C.l,!0)
if(n!=null)a=C.a.aT(a,o,u,n)}return new P.iq(a,l,c)},
nu:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mu(22,new P.jt(),P.bB),n=new P.js(o),m=new P.ju(),l=new P.jv(),k=n.$2(0,225)
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
lw:function(a,b,c,d,e){var u,t,s,r,q,p=$.m2()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.c(p,d)
t=p[d]
s=C.a.L(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.c(e,q)
e[q]=u}return d},
bj:function bj(){},
ad:function ad(a,b){this.a=a
this.b=b},
I:function I(){},
b2:function b2(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
bt:function bt(){},
dc:function dc(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fy:function fy(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ip:function ip(a){this.a=a},
ik:function ik(a){this.a=a},
hO:function hO(a){this.a=a},
f_:function f_(a){this.a=a},
hn:function hn(){},
dn:function dn(){},
f7:function f7(a){this.a=a},
dO:function dO(a){this.a=a},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
v:function v(){},
i:function i(){},
fA:function fA(){},
u:function u(){},
Q:function Q(){},
bc:function bc(){},
aa:function aa(){},
a3:function a3(){},
r:function r(){},
N:function N(a){this.a=a},
iu:function iu(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(){},
jl:function jl(a,b){this.a=a
this.b=b},
jk:function jk(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(){},
js:function js(a){this.a=a},
ju:function ju(){},
jv:function jv(){},
j7:function j7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iV:function iV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
o6:function(a){var u,t=J.S(a)
if(!!t.$iaR){u=t.gdh(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.en(a.data,a.height,a.width)},
o5:function(a){if(a instanceof P.en)return{data:a.a,height:a.b,width:a.c}
return a},
aZ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kT(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
o4:function(a){var u={}
a.I(0,new P.jz(u))
return u},
j9:function j9(){},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
ja:function ja(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(){},
j_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j2:function j2(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
fG:function fG(){},
aV:function aV(){},
hl:function hl(){},
hr:function hr(){},
hT:function hT(){},
l:function l(){},
aY:function aY(){},
i9:function i9(){},
dT:function dT(){},
dU:function dU(){},
e3:function e3(){},
e4:function e4(){},
ee:function ee(){},
ef:function ef(){},
el:function el(){},
em:function em(){},
bB:function bB(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(a){this.a=a},
eK:function eK(){},
bo:function bo(){},
hm:function hm(){},
dH:function dH(){},
di:function di(){},
hN:function hN(){},
ea:function ea(){},
eb:function eb(){}},W={
k3:function(){var u=document.createElement("canvas")
return u},
k5:function(a){return"wheel"},
mj:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.bm(u)}return s},
iZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ln:function(a,b,c,d){var u=W.iZ(W.iZ(W.iZ(W.iZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.ly(new W.iX(c),W.k)
if(u!=null&&!0)J.m5(a,b,u,!1)
return new W.iW(a,b,u,!1)},
ly:function(a,b){var u=$.ar
if(u===C.f)return a
return u.da(a,b)},
m:function m(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
bp:function bp(){},
bq:function bq(){},
b1:function b1(){},
f3:function f3(){},
G:function G(){},
bU:function bU(){},
f4:function f4(){},
af:function af(){},
av:function av(){},
f5:function f5(){},
f6:function f6(){},
f8:function f8(){},
fc:function fc(){},
cR:function cR(){},
cS:function cS(){},
fd:function fd(){},
fe:function fe(){},
iT:function iT(a,b){this.a=a
this.b=b},
U:function U(){},
k:function k(){},
f:function f(){},
ak:function ak(){},
bW:function bW(){},
fn:function fn(){},
fr:function fr(){},
ax:function ax(){},
fw:function fw(){},
bY:function bY(){},
aR:function aR(){},
bZ:function bZ(){},
eV:function eV(){},
bv:function bv(){},
fN:function fN(){},
h7:function h7(){},
c6:function c6(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ha:function ha(){},
hb:function hb(a){this.a=a},
aA:function aA(){},
hc:function hc(){},
aB:function aB(){},
iS:function iS(a){this.a=a},
D:function D(){},
db:function db(){},
aC:function aC(){},
hp:function hp(){},
hx:function hx(){},
hy:function hy(a){this.a=a},
hA:function hA(){},
aF:function aF(){},
hK:function hK(){},
aG:function aG(){},
hL:function hL(){},
aH:function aH(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
an:function an(){},
aI:function aI(){},
ao:function ao(){},
hW:function hW(){},
hX:function hX(){},
i4:function i4(){},
aJ:function aJ(){},
bA:function bA(){},
i7:function i7(){},
i8:function i8(){},
be:function be(){},
iv:function iv(){},
iL:function iL(){},
bh:function bh(){},
cm:function cm(){},
iU:function iU(){},
dJ:function dJ(){},
iY:function iY(){},
e0:function e0(){},
j8:function j8(){},
jd:function jd(){},
iW:function iW(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iX:function iX(a){this.a=a},
J:function J(){},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
cr:function cr(){},
cs:function cs(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
cu:function cu(){},
cv:function cv(){},
ej:function ej(){},
ek:function ek(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){}},K={
a0:function(a){var u=new K.hB()
u.en(a)
return u},
eD:function eD(){},
cY:function cY(){},
d5:function d5(){},
aU:function aU(){this.a=null},
hB:function hB(){this.a=null},
lF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="controls",b3="modifiers",b4={},b5=V.mQ("Test 040"),b6=W.k3()
b6.className="pageLargeCanvas"
b6.id=b0
b5.a.appendChild(b6)
u=[P.r]
b5.d8(H.b(["A combination of bump mapping with height map and specular map."],u))
b5.hf(H.b(["controls"],u))
b5.d8(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.n(P.p("Failed to find an element with the identifier, testCanvas."))
s=E.mX(t,!0,!0,!0,!1)
r=s.f.bt("../resources/gravel/colorLarge.png")
q=s.f.bt("../resources/gravel/bumpLarge.png")
p=s.f.bt("../resources/gravel/specularSmall.png")
o=s.f.bt("../resources/gravel/heightSmall.png")
b5=U.kM(V.kZ(0,0,2))
n=new U.dj()
n.r=n.f=n.e=n.d=n.c=n.b=n.a=0
n.sec(0)
n.se_(0,0)
n.se3(0)
m=n.d
if(!(Math.abs(m-0.6)<$.x().a)){n.d=0.6
m=new D.o("deltaYaw",m,0.6)
m.b=!0
n.N(m)}m=n.e
if(!(Math.abs(m-0.1)<$.x().a)){n.e=0.1
m=new D.o("deltaPitch",m,0.1)
m.b=!0
n.N(m)}m=n.f
if(!(Math.abs(m-0)<$.x().a)){n.f=0
m=new D.o("deltaRoll",m,0)
m.b=!0
n.N(m)}m=[U.ae]
l=U.kQ(H.b([b5,n],m))
k=E.k6(F.oq(0.03))
k.sb6(l)
n=O.kV()
b5=n.f
b5.saP(0,new V.Y(1,1,1))
k.saq(n)
j=new V.Y(1,1,1)
i=new D.bw()
i.c=new V.Y(1,1,1)
i.r=1
i.y=i.x=0
i.z=!0
i.a=V.aT()
h=i.b
i.b=l
l.gn().l(0,i.geq())
b5=new D.o("mover",h,i.b)
b5.b=!0
i.ai(b5)
if(!i.c.p(0,j)){h=i.c
i.c=j
b5=new D.o("color",h,j)
b5.b=!0
i.ai(b5)}g=V.lm()
if(!J.z(i.f,g)){h=i.f
i.f=g
b5=new D.o("shadowAdjust",h,g)
b5.b=!0
i.ai(b5)}b5=i.r
if(!(Math.abs(b5-0.5)<$.x().a)){i.r=0.5
b5=new D.o("attenuation0",b5,0.5)
b5.b=!0
i.ai(b5)}b5=i.x
if(!(Math.abs(b5-0.1)<$.x().a)){i.x=0.1
b5=new D.o("attenuation1",b5,0.1)
b5.b=!0
i.ai(b5)}b5=i.y
if(!(Math.abs(b5-0)<$.x().a)){i.y=0
b5=new D.o("attenuation2",b5,0)
b5.b=!0
i.ai(b5)}f=F.lJ()
e=E.k6(f)
b4.a=null
o.gn().l(0,new K.jK(b4,s,o))
d=X.l0()
b5=s.x
n=new U.dD()
c=U.kL()
c.seb(0,!0)
c.sdO(6.283185307179586)
c.sdQ(0)
c.saa(0,0)
c.sdP(100)
c.sZ(0)
c.sdg(0.5)
n.b=c
b=n.gbh()
c.gn().l(0,b)
c=U.kL()
c.seb(0,!0)
c.sdO(6.283185307179586)
c.sdQ(0)
c.saa(0,0)
c.sdP(100)
c.sZ(0)
c.sdg(0.5)
n.c=c
c.gn().l(0,b)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
a=new X.am(!1,!1,!1)
h=n.d
n.d=a
c=new D.o(b3,h,a)
c.b=!0
n.N(c)
c=n.f
if(c!==!1){n.f=!1
c=new D.o("invertX",c,!1)
c.b=!0
n.N(c)}c=n.r
if(c!==!1){n.r=!1
c=new D.o("invertY",c,!1)
c.b=!0
n.N(c)}n.bU(b5)
b5=s.x
c=new U.dE()
c.c=0.01
c.e=c.d=0
a=new X.am(!1,!1,!1)
c.b=a
b=new D.o(b3,b1,a)
b.b=!0
c.N(b)
c.bU(b5)
d.sb6(U.kQ(H.b([n,c,U.kM(V.kZ(0,0,5))],m)))
a0=O.kV()
a0.dx.l(0,i)
b5=a0.r
b5.saP(0,new V.Y(0.3,0.3,0.3))
a0.x.saP(0,new V.Y(1,1,1))
b5=a0.z
b5.bi(new A.Z(!0,b5.c.b,!1))
b5.d0(40)
a1=X.k0(!0,1,1,!0)
b5=[E.aw]
a2=M.kO(H.b([e,k],b5))
a2.saq(a0)
a2.sc_(d)
a2.saG(0,a1)
a3=X.k0(!0,0.5,0.5,!0)
a4=M.kO(H.b([e,k],b5))
a4.sc_(d)
a4.saG(0,a3)
b5=new O.f9()
b5.b=1
b5.c=10
b5.f=b5.e=b5.d=!1
if(!(Math.abs(0.5)<$.x().a)){b5.b=0.5
n=new D.o("start",1,0.5)
n.b=!0
b5.A(n)}n=b5.c
if(!(Math.abs(n-5.5)<$.x().a)){b5.c=5.5
n=new D.o("stop",n,5.5)
n.b=!0
b5.A(n)}a4.saq(b5)
b5=new V.bF(-1,0,0,1)
n=a1.ch
m=a3.ch
a5=new M.cW()
a5.a=!0
a5.c=X.k0(!0,1,1,!1)
c=O.kP(b1,b1)
b=a5.gW()
c.gn().l(0,b)
a5.d=c
a5.e=M.k4(a5.c,c)
c=a5.c.ch
a6=$.lg
c=O.kP(a6==null?$.lg=new V.L(0,1):a6,c)
c.gn().l(0,b)
a5.f=c
a5.r=M.k4(b1,c)
a5.d.sbW(0)
a5.f.sbW(0)
a5.d.sdf(n)
a5.d.saZ(m)
a5.f.saZ(m)
a5.d.sco(b1)
a5.f.sco(b1)
a5.d.sbV(b5)
a5.f.sbV(b5)
a5.r.saG(0,b1)
a7=new O.ds()
a7.a=new V.ac(0,0,0,0)
b5=O.eX(O.bd)
a7.c=b5
b5.aH(a7.gfh(),a7.gfj())
a7.d=0
a7.e=null
a7.r=a7.f=C.o
a8=new V.ac(0,0,0,0)
if(!a7.a.p(0,a8)){h=a7.a
a7.a=a8
b5=new D.o("backColor",h,a8)
b5.b=!0
a7.A(b5)}a7.sdc(C.o)
a7.sdc(C.n)
b5=a7.c
n=a3.ch
b5.l(0,O.l7(V.ce(0,0.8,0.2,0.2),n))
n=a7.c
b5=a1.ch
n.l(0,O.l7(V.ce(0,0.6,0.2,0.2),b5))
a9=M.k4(b1,b1)
a9.saG(0,X.k8(!1,b1))
a9.saq(a7)
b5=M.ag
n=H.b([a2,a4,a5,a9],[b5])
m=new M.cM()
m.bd(b5)
m.e=!0
m.f=!1
m.r=null
m.aH(m.gfM(),m.gfO())
m.aN(0,n)
b5=s.d
if(b5!==m){if(b5!=null)b5.gn().E(0,s.gcC())
s.d=m
m.gn().l(0,s.gcC())
s.cD()}b5=new V.eT(b2)
u=u.getElementById(b2)
b5.c=u
if(u==null)H.n("Failed to find controls for CheckGroup")
b5.d=H.b([],[W.eV])
b5.d7(0,"Color",new K.jL(a0,r),!0)
b5.aY(0,"Specular",new K.jM(a0,p))
b5.aY(0,"Bump",new K.jN(a0,q))
b5.aY(0,"Height",new K.jO(b4,e,f))
b5.aY(0,"Blur",new K.jP(a5,a3))
b5.aY(0,"Passes",new K.jQ(a9,a7))
V.op(s)},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b}},L={dp:function dp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},dw:function dw(a){this.b=a
this.c=null},i5:function i5(){var _=this
_.d=_.c=_.b=_.a=null},dy:function dy(a){this.b=a
this.a=this.c=null}},O={
eX:function(a){var u=new O.aQ([a])
u.bd(a)
return u},
aQ:function aQ(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c4:function c4(){this.b=this.a=null},
kP:function(a,b){var u,t,s,r=new O.cX()
r.r=0
r.sco(null)
r.sbV(null)
if(a==null){u=$.lf
if(u==null){u=new V.L(1,0)
$.lf=u
t=u}else t=u}else t=a
if(!J.z(r.d,t)){s=r.d
r.d=t
u=new D.o("blurDirection",s,t)
u.b=!0
r.A(u)}r.sdf(b)
r.saZ(null)
r.sbW(0)
return r},
kV:function(){var u,t=new O.d6(),s=O.eX(V.al)
t.e=s
s.aH(t.gf1(),t.gf3())
s=new O.ay(t,"emission")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
t.f=s
s=new O.ay(t,"ambient")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
t.r=s
s=new O.ay(t,"diffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
t.x=s
s=new O.ay(t,"invDiffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
t.y=s
s=new O.fZ(t,"specular")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
s.ch=100
t.z=s
s=new O.fV(t,"bump")
s.c=new A.Z(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ay(t,"reflect")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
t.cx=s
s=new O.fY(t,"refract")
s.c=new A.Z(!1,!1,!1)
s.f=new V.Y(0,0,0)
s.ch=1
t.cy=s
s=new O.fU(t,"alpha")
s.c=new A.Z(!1,!1,!1)
s.f=1
t.db=s
s=new D.d3()
s.bd(D.a6)
s.e=H.b([],[D.eM])
s.f=H.b([],[D.fb])
s.r=H.b([],[D.bw])
s.x=H.b([],[D.hM])
s.z=s.y=null
s.cq(s.gf_(),s.gfG(),s.gfK())
t.dx=s
u=new O.fX()
u.b=new V.ac(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.C():u
s.l(0,t.gh0())
s=t.dx
u=s.z
s=u==null?s.z=D.C():u
s.l(0,t.ga6())
t.fr=null
return t},
l7:function(a,b){var u,t,s,r=new O.bd(),q=r.a
r.a=b
b.gn().l(0,r.ga6())
u=new D.o("texture",q,r.a)
u.b=!0
r.A(u)
t=V.aT()
if(!J.z(r.b,t)){q=r.b
r.b=t
u=new D.o("colorMatrix",q,t)
u.b=!0
r.A(u)}s=V.hs()
if(!J.z(r.c,s)){q=r.c
r.c=s
u=new D.o("source",q,s)
u.b=!0
r.A(u)}if(!J.z(r.d,a)){q=r.d
r.d=a
u=new D.o("destination",q,a)
u.b=!0
r.A(u)}if(r.e!==!1){r.e=!1
u=new D.o("flip",!0,!1)
u.b=!0
r.A(u)}r.f=null
return r},
f9:function f9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
fU:function fU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c3:function c3(){},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ay:function ay(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fX:function fX(){var _=this
_.e=_.d=_.c=_.b=null},
fY:function fY(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dr:function dr(){},
ds:function ds(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bd:function bd(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
k6:function(a){var u,t=new E.aw()
t.a=""
t.b=!0
u=O.eX(E.aw)
t.y=u
u.aH(t.ghO(),t.ghR())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbD(0,a)
t.saq(null)
t.sb6(null)
return t},
mO:function(a,b){var u=new E.ht(a)
u.em(a,b)
return u},
mX:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibq)return E.l8(a,!0,!0,!0,!1)
u=W.k3()
t=u.style
t.width="100%"
t.height="100%"
s.gc0(a).l(0,u)
return E.l8(u,!0,!0,!0,!1)},
l8:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dt(),p=C.i.cp(a,"webgl2",P.ms(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.n(P.p("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mO(p,a)
u=new T.i0(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dC(a)
t=new X.fF()
t.c=new X.am(!1,!1,!1)
t.d=P.kU(P.v)
u.b=t
t=new X.hd(u)
t.f=0
t.r=V.aW()
t.x=V.aW()
t.ch=t.Q=1
u.c=t
t=new X.fO(u)
t.r=0
t.x=V.aW()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i6(u)
t.f=V.aW()
t.r=V.aW()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dq,P.a3]])
u.z=t
s=document
t.push(W.X(s,"contextmenu",u.gfb(),!1))
u.z.push(W.X(a,"focus",u.gfl(),!1))
u.z.push(W.X(a,"blur",u.gf5(),!1))
u.z.push(W.X(s,"keyup",u.gfp(),!1))
u.z.push(W.X(s,"keydown",u.gfn(),!1))
u.z.push(W.X(a,"mousedown",u.gfu(),!1))
u.z.push(W.X(a,"mouseup",u.gfA(),!1))
u.z.push(W.X(a,r,u.gfw(),!1))
t=u.z
W.k5(a)
W.k5(a)
t.push(W.X(a,W.k5(a),u.gfC(),!1))
u.z.push(W.X(s,r,u.gfd(),!1))
u.z.push(W.X(s,"mouseup",u.gff(),!1))
u.z.push(W.X(s,"pointerlockchange",u.gfE(),!1))
u.z.push(W.X(a,"touchstart",u.gfU(),!1))
u.z.push(W.X(a,"touchend",u.gfQ(),!1))
u.z.push(W.X(a,"touchmove",u.gfS(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ad(Date.now(),!1)
q.db=0
q.cY()
return q},
eP:function eP(){},
aw:function aw(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
dt:function dt(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i3:function i3(a){this.a=a}},Z={
kn:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bK(c)),35044)
a.bindBuffer(b,null)
return new Z.dF(b,u)},
ah:function(a){return new Z.aq(a)},
dF:function dF(a,b){this.a=a
this.b=b},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bG:function bG(a){this.a=a},
aP:function aP(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function aq(a){this.a=a}},D={
C:function(){var u=new D.b3()
u.d=0
return u},
eS:function eS(){},
b3:function b3(){var _=this
_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
V:function V(){this.b=null},
b5:function b5(){this.b=null},
b6:function b6(){this.b=null},
o:function o(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eM:function eM(){},
fb:function fb(){},
a6:function a6(){},
d3:function d3(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bw:function bw(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(){}},X={cL:function cL(a,b){this.a=a
this.b=b},d2:function d2(a,b){this.a=a
this.b=b},fF:function fF(){var _=this
_.d=_.c=_.b=_.a=null},d4:function d4(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fO:function fO(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},ba:function ba(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hd:function hd(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c7:function c7(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hq:function hq(){},dx:function dx(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i6:function i6(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dC:function dC(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k0:function(a,b,c,d){var u,t,s,r,q=new X.eL()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kh(null)
q.cx=new V.ac(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.hs()
q.sar(0,512)
q.sam(0,512)
u=new V.ac(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.o("color",t,u)
s.b=!0
q.a_(s)}if(q.cy!==d){q.cy=d
s=new D.o("clearColor",!d,d)
s.b=!0
q.a_(s)}s=q.db
if(!(Math.abs(s-2000)<$.x().a)){q.db=2000
s=new D.o("depth",s,2000)
s.b=!0
q.a_(s)}if(!q.f){q.f=!0
s=new D.o("autoResize",!1,!0)
s.b=!0
q.a_(s)}s=q.r
if(!(Math.abs(s-b)<$.x().a)){q.r=b
s=new D.o("autoResizeScalarX",s,b)
s.b=!0
q.a_(s)}s=q.x
if(!(Math.abs(s-c)<$.x().a)){q.x=c
s=new D.o("autoResizeScalarY",s,c)
s.b=!0
q.a_(s)}r=V.hs()
if(!J.z(q.dy,r)){t=q.dy
q.dy=r
s=new D.o("region",t,r)
s.b=!0
q.a_(s)}return q},
k8:function(a,b){var u=new X.ft(),t=new V.ac(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hs()
u.r=t
return u},
l0:function(){var u,t=new X.dd()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.sb6(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.x().a)){t.c=1.0471975511965976
u=new D.o("fov",u,1.0471975511965976)
u.b=!0
t.a_(u)}u=t.d
if(!(Math.abs(u-0.1)<$.x().a)){t.d=0.1
u=new D.o("near",u,0.1)
u.b=!0
t.a_(u)}u=t.e
if(!(Math.abs(u-2000)<$.x().a)){t.e=2000
u=new D.o("far",u,2000)
u.b=!0
t.a_(u)}return t},
eL:function eL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k2:function k2(){},
ft:function ft(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){this.b=this.a=null},
dd:function dd(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(){}},V={
eY:function(a,b,c,d){var u=a/255,t=b/255,s=c/255,r=d/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ac(u,t,s,r)},
jX:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.av(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.a.ap("null",c)
return C.a.ap(C.d.e6(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
bP:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.a.ap(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
cB:function(a){return C.d.ie(Math.pow(2,C.O.b3(Math.log(H.o3(a))/Math.log(2))))},
aT:function(){var u=$.c5
return u==null?$.c5=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kZ:function(a,b,c){return V.az(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kX:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.az(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kY:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.az(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
aW:function(){var u=$.l2
return u==null?$.l2=new V.a4(0,0):u},
mz:function(){var u=$.aD
return u==null?$.aD=new V.R(0,0,0):u},
hs:function(){var u=$.cf
return u==null?$.cf=V.ce(0,0,1,1):u},
ce:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dh(a,b,c,d)},
cl:function(){var u=$.lk
return u==null?$.lk=new V.E(0,0,0):u},
lm:function(){var u=$.ll
return u==null?$.ll=new V.bF(1,0.00390625,0.0000152587890625,0):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
d7:function d7(a,b,c,d,e,f,g,h,i){var _=this
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
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
op:function(a){P.mY(C.M,new V.jS(a))},
mQ:function(a){var u=new V.hG()
u.eo(a,!0)
return u},
eT:function eT(a){this.a=a
this.d=this.c=null},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a){this.a=a},
hG:function hG(){this.b=this.a=null},
hI:function hI(a){this.a=a},
hH:function hH(a){this.a=a}},U={
kL:function(){var u=new U.eZ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kM:function(a){var u=new U.cN()
u.a=a
return u},
kQ:function(a){var u=new U.bX()
u.bd(U.ae)
u.aH(u.ges(),u.gfI())
u.aN(0,a)
u.e=null
u.f=V.aT()
u.r=0
return u},
eZ:function eZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){this.b=this.a=null},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dj:function dj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
k4:function(a,b){var u,t,s,r=new M.cO()
r.a=!0
u=E.k6(null)
u.sbD(0,F.lJ())
r.e=u
t=new X.fx()
s=r.b
r.b=t
t.gn().l(0,r.gW())
u=new D.o("camera",s,r.b)
u.b=!0
r.U(u)
r.saG(0,a)
r.saq(b)
return r},
kO:function(a){var u,t,s=new M.cT()
s.a=!0
u=O.eX(E.aw)
s.e=u
u.aH(s.gf7(),s.gf9())
s.y=s.x=s.r=s.f=null
t=X.k8(!0,null)
s.sc_(null)
s.saG(0,t)
s.saq(null)
s.e.aN(0,a)
return s},
cM:function cM(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cO:function cO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ag:function ag(){}},A={
mw:function(a,b){var u=a.b2,t=new A.fT(b,u)
t.be(b,u)
t.el(a,b)
return t},
mx:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gau(a3)+a4.gau(a4)+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+a9.gau(a9)+b0.gau(b0)+b1.gau(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.q)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.q)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.q)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.q)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.a1()
if(j){u=$.as()
d=new Z.aq(d.a|u.a)}if(i){u=$.aO()
d=new Z.aq(d.a|u.a)}if(h){u=$.ai()
d=new Z.aq(d.a|u.a)}if(g){u=$.aN()
d=new Z.aq(d.a|u.a)}return new A.fW(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
jw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jx:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jw(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eB(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
nD:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jw(b,t,"emission")
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
nz:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jx(b,t,"ambient")
b.a+="\n"},
nB:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jx(b,t,"diffuse")
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
nE:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jx(b,t,"invDiffuse")
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
nK:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jx(b,t,"specular")
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
nG:function(a,b){var u,t,s
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
nI:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jw(b,t,"reflect")
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
nJ:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jw(b,t,"refract")
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
nA:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eB(t)
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
if(typeof u!=="number")return u.ag()
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
u=c.a+="   return "+C.b.q(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.q(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.q(q," + ")+");\n"
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
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eB(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ag()
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
c.a+="      highLight = intensity*("+C.b.q(m," + ")+");\n"}else c.a+="   highLight = "+C.b.q(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.q(o," + ")+");\n"
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
nH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eB(t)
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
if(typeof u!=="number")return u.ag()
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
o=c.a+="   return "+C.b.q(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.q(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.q(l," + ")+");\n"
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
nL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eB(t)
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
if(typeof u!=="number")return u.ag()
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
r=c.a+="   return "+C.b.q(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.q(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.q(j," + ")+");\n"
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
nF:function(a,b){var u,t
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
u=b.a+="   return "+C.b.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nM:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.N("")
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
A.nD(a,j)
A.nz(a,j)
A.nB(a,j)
A.nE(a,j)
A.nK(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nI(a,j)
A.nJ(a,j)}A.nG(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nA(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nC(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nH(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nL(a,q[o],j)
A.nF(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ah(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.q(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nN:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aR+"];\n"
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
nP:function(a,b){var u
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
nO:function(a,b){var u
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
nR:function(a,b){var u,t
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
nS:function(a,b){var u,t
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
nQ:function(a,b){var u
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
nT:function(a,b){var u
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
eB:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.ah(a,1)},
mW:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.L
t=(s||b===C.n?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.K)t+="      clrAccum += color;\n"
else if(b===C.o)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.n
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mV:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.i_(c,u)
t.be(c,u)
t.ep(a,b,c)
return t},
kj:function(a,b,c,d,e){var u=new A.id(a,c,e)
u.f=d
P.mt(d,0,P.v)
return u},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fu:function fu(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fv:function fv(a,b){this.a=a
this.b=b},
fT:function fT(a,b){var _=this
_.ix=_.dn=_.bo=_.b2=_.aR=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iF=_.iE=_.iD=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.iC=_.dD=_.dC=_.iB=_.dB=_.dA=_.dz=_.iA=_.dw=_.dv=_.du=_.iz=_.dt=_.ds=_.iy=_.dr=_.dq=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cJ:function cJ(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aR=b3
_.b2=b4
_.bo=b5},
ch:function ch(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ci:function ci(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cj:function cj(a,b,c,d,e,f,g,h,i,j){var _=this
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
ck:function ck(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dk:function dk(){},
br:function br(a,b){this.a=a
this.b=b},
i_:function i_(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dz:function dz(){},
ii:function ii(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
bf:function bf(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lJ:function(){var u,t,s,r,q,p=null,o=F.kg(),n=o.a,m=new V.E(-1,-1,1)
m=m.B(0,Math.sqrt(m.G(m)))
u=n.bk(new V.aE(1,2,4,6),V.eY(255,0,0,255),new V.R(-1,-1,0),new V.a4(0,1),m,p)
m=o.a
n=new V.E(1,-1,1)
n=n.B(0,Math.sqrt(n.G(n)))
t=m.bk(new V.aE(0,3,4,6),V.eY(0,0,255,255),new V.R(1,-1,0),new V.a4(1,1),n,p)
n=o.a
m=new V.E(1,1,1)
m=m.B(0,Math.sqrt(m.G(m)))
s=n.bk(new V.aE(0,2,5,6),V.eY(0,128,0,255),new V.R(1,1,0),new V.a4(1,0),m,p)
m=o.a
n=V.aW()
r=new V.E(-1,1,1)
r=r.B(0,Math.sqrt(r.G(r)))
q=m.bk(new V.aE(0,2,4,7),V.eY(255,255,0,255),new V.R(-1,1,0),n,r,p)
o.d.hh(H.b([u,t,s,q],[F.bg]))
o.as()
return o},
jr:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.a1()
return(u>0?t+4:t)*2},
cx:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.E(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.E(u+a3,t+a1,s+a2)
q=new V.E(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.E(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jr(i)
l=F.jr(h)
k=F.lL(d,a0,new F.jq(j,F.jr(g),F.jr(f),l,m,c),b)
if(k!=null)a.cf(k)},
oq:function(a){var u,t,s=null,r={}
r.a=u
r.a=null
r.a=new F.jT()
r=new F.jU(r,a)
t=F.kg()
F.cx(t,s,r,8,8,1,0,0,1)
F.cx(t,s,r,8,8,0,1,0,3)
F.cx(t,s,r,8,8,0,0,1,2)
F.cx(t,s,r,8,8,-1,0,0,0)
F.cx(t,s,r,8,8,0,-1,0,0)
F.cx(t,s,r,8,8,0,0,-1,3)
t.as()
t.hM(new F.iF(),new F.hj())
return t},
of:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jD()
return F.lL(b,a,new F.jE(t),null)},
lL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kg()
t=H.b([],[F.bg])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iz(g,g,new V.ac(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.c3(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iz(g,g,new V.ac(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.c3(d))}}u.d.hi(a+1,b+1,t)
return u},
bV:function(a,b,c){var u=new F.b4(),t=a.a
if(t==null)H.n(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.p("May not create a face with vertices attached to different shapes."))
u.bS(a)
u.bT(b)
u.h4(c)
u.a.a.d.b.push(u)
u.a.a.a4()
return u},
mp:function(a,b){var u=new F.c0(),t=a.a
if(t==null)H.n(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.n(P.p("May not create a line with vertices attached to different shapes."))
u.bS(a)
u.bT(b)
u.a.a.c.b.push(u)
u.a.a.a4()
return u},
kg:function(){var u=new F.hC(),t=new F.iA(u)
t.b=!1
t.c=H.b([],[F.bg])
u.a=t
t=new F.hF(u)
t.b=H.b([],[F.cb])
u.b=t
t=new F.hE(u)
t.b=H.b([],[F.c0])
u.c=t
t=new F.hD(u)
t.b=H.b([],[F.b4])
u.d=t
u.e=null
return u},
iz:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bg(),r=new F.iI()
r.b=H.b([],[F.cb])
s.b=r
r=new F.iE()
u=[F.c0]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iB()
u=[F.b4]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kC()
s.e=0
r=$.a1()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.as().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.ai().a)!==0?f:t
s.z=(u&$.b_().a)!==0?g:t
s.Q=(u&$.kD().a)!==0?c:t
s.ch=(u&$.bn().a)!==0?i:0
s.cx=(u&$.aN().a)!==0?a:t
return s},
jq:function jq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jT:function jT(){},
jU:function jU(a,b){this.a=a
this.b=b},
jD:function jD(){},
jE:function jE(a){this.a=a},
b4:function b4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fm:function fm(){},
hJ:function hJ(){},
c0:function c0(){this.b=this.a=null},
fH:function fH(){},
ic:function ic(){},
cb:function cb(){this.a=null},
hC:function hC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){this.a=a
this.b=null},
hE:function hE(a){this.a=a
this.b=null},
hF:function hF(a){this.a=a
this.b=null},
bg:function bg(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iK:function iK(a){this.a=a},
iJ:function iJ(a){this.a=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
iB:function iB(){this.d=this.c=this.b=null},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(){this.c=this.b=null},
iG:function iG(){},
iF:function iF(){},
iH:function iH(){},
hj:function hj(){},
iI:function iI(){this.b=null}},T={
kh:function(a){var u=new T.hZ()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bz:function bz(){},
hY:function hY(){},
hZ:function hZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){var _=this
_.a=a
_.e=_.d=_.b=null},
i1:function i1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kc.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.cc(a)},
i:function(a){return"Instance of '"+H.e(H.cd(a))+"'"}}
J.fB.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ibj:1}
J.d0.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.d1.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$imn:1}
J.ho.prototype={}
J.bE.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.lO()]
if(u==null)return this.ek(a)
return"JavaScript function for "+H.e(J.ab(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b7.prototype={
cl:function(a,b){if(!!a.fixed$length)H.n(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dg(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.n(P.y("remove"))
for(u=0;u<a.length;++u)if(J.z(a[u],b)){a.splice(u,1)
return!0}return!1},
aN:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.bs(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
hK:function(a){return this.q(a,"")},
hD:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.bs(a))}return u},
hE:function(a,b,c){return this.hD(a,b,c,null)},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cv:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.bl(a,0)])
return H.b(a.slice(b,c),[H.bl(a,0)])},
cu:function(a,b){return this.cv(a,b,null)},
ghC:function(a){if(a.length>0)return a[0]
throw H.d(H.kR())},
gaF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.kR())},
aV:function(a,b){if(!!a.immutable$list)H.n(P.y("sort"))
H.mT(a,b==null?J.nw():b)},
eh:function(a){return this.aV(a,null)},
a3:function(a,b){var u
for(u=0;u<a.length;++u)if(J.z(a[u],b))return!0
return!1},
i:function(a){return P.k9(a,"[","]")},
gS:function(a){return new J.a2(a,a.length)},
gJ:function(a){return H.cc(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.n(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.k_(b,u,null))
if(b<0)throw H.d(P.a_(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.bO(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bO(a,b))
a[b]=c},
$it:1,
$ii:1,
$iu:1}
J.kb.prototype={}
J.a2.prototype={
gF:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c_.prototype={
aQ:function(a,b){var u
if(typeof b!=="number")throw H.d(H.a5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbr(b)
if(this.gbr(a)===u)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
ie:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.y(""+a+".toInt()"))},
b3:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
e6:function(a,b){var u
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.n(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
m:function(a,b){if(typeof b!=="number")throw H.d(H.a5(b))
return a*b},
av:function(a,b){var u
if(typeof b!=="number")throw H.d(H.a5(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d2(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d2(a,b)},
d2:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.d1(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h8:function(a,b){if(b<0)throw H.d(H.a5(b))
return this.d1(a,b)},
d1:function(a,b){return b>31?0:a>>>b},
$iI:1,
$iaa:1}
J.d_.prototype={$iv:1}
J.cZ.prototype={}
J.b8.prototype={
V:function(a,b){if(b<0)throw H.d(H.bO(a,b))
if(b>=a.length)H.n(H.bO(a,b))
return a.charCodeAt(b)},
L:function(a,b){if(b>=a.length)throw H.d(H.bO(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.k_(b,null,null))
return a+b},
aT:function(a,b,c,d){var u,t
c=P.aX(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.n(H.a5(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ak:function(a,b){return this.ac(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.n(H.a5(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.dg(b,null))
if(b>c)throw H.d(P.dg(b,null))
if(c>a.length)throw H.d(P.dg(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.t(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.I)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ap:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
hW:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
bp:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dJ:function(a,b){return this.bp(a,b,0)},
aQ:function(a,b){var u
if(typeof b!=="string")throw H.d(H.a5(b))
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
gj:function(a){return a.length},
$ir:1}
H.O.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)},
$at:function(){return[P.v]},
$aw:function(){return[P.v]},
$ai:function(){return[P.v]},
$au:function(){return[P.v]}}
H.t.prototype={}
H.c1.prototype={
gF:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.bk(s),q=r.gj(s)
if(t.b!=q)throw H.d(P.bs(s))
u=t.c
if(typeof q!=="number")return H.j(q)
if(u>=q){t.d=null
return!1}t.d=r.M(s,u);++t.c
return!0}}
H.c2.prototype={
gS:function(a){return new H.fS(J.b0(this.a),this.b)},
gj:function(a){return J.aj(this.a)},
M:function(a,b){return this.b.$1(J.jZ(this.a,b))},
$ai:function(a,b){return[b]}}
H.fh.prototype={$it:1,
$at:function(a,b){return[b]}}
H.fS.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gF(t))
return!0}u.a=null
return!1},
gF:function(a){return this.a}}
H.iM.prototype={
gS:function(a){return new H.iN(J.b0(this.a),this.b)}}
H.iN.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.cU.prototype={}
H.io.prototype={
k:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dA.prototype={}
H.f0.prototype={
i:function(a){return P.kf(this)},
k:function(a,b,c){return H.mf()},
$iQ:1}
H.f1.prototype={
gj:function(a){return this.a},
c1:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c1(0,b))return
return this.cN(b)},
cN:function(a){return this.b[a]},
I:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cN(s))}}}
H.ia.prototype={
ao:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hk.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fE.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.im.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jW.prototype={
$1:function(a){if(!!J.S(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ec.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bT.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cC(t==null?"unknown":t)+"'"},
gio:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hV.prototype={}
H.hP.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cC(u)+"'"}}
H.bR.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bR))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cc(this.a)
else u=typeof t!=="object"?J.cG(t):H.cc(t)
return(u^H.cc(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cd(u))+"'")}}
H.eR.prototype={
i:function(a){return this.a}}
H.hz.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.H.prototype={
gj:function(a){return this.a},
gan:function(a){return new H.fJ(this,[H.bl(this,0)])},
gim:function(a){var u=this
return H.mv(u.gan(u),new H.fD(u),H.bl(u,0),H.bl(u,1))},
c1:function(a,b){var u=this.b
if(u==null)return!1
return this.eG(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bf(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bf(r,b)
s=t==null?null:t.b
return s}else return q.hH(b)},
hH:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cP(r,s.dK(a))
t=s.dL(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cG(u==null?s.b=s.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cG(t==null?s.c=s.bL():t,b,c)}else s.hI(b,c)},
hI:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bL()
u=r.dK(a)
t=r.cP(q,u)
if(t==null)r.bQ(q,u,[r.bM(a,b)])
else{s=r.dL(t,a)
if(s>=0)t[s].b=b
else t.push(r.bM(a,b))}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.bs(u))
t=t.c}},
cG:function(a,b,c){var u=this.bf(a,b)
if(u==null)this.bQ(a,b,this.bM(b,c))
else u.b=c},
bM:function(a,b){var u=this,t=new H.fI(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dK:function(a){return J.cG(a)&0x3ffffff},
dL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1},
i:function(a){return P.kf(this)},
bf:function(a,b){return a[b]},
cP:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
eJ:function(a,b){delete a[b]},
eG:function(a,b){return this.bf(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bQ(t,u,t)
this.eJ(t,u)
return t}}
H.fD.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.bl(u,1),args:[H.bl(u,0)]}}}
H.fI.prototype={}
H.fJ.prototype={
gj:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fK(u,u.r)
t.c=u.e
return t}}
H.fK.prototype={
gF:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bs(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jG.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jH.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jI.prototype={
$1:function(a){return this.a(a)}}
H.fC.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imM:1}
H.c8.prototype={$ic8:1}
H.bb.prototype={$ibb:1}
H.d8.prototype={
gj:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.c9.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.I]},
$aw:function(){return[P.I]},
$ii:1,
$ai:function(){return[P.I]},
$iu:1,
$au:function(){return[P.I]}}
H.d9.prototype={
k:function(a,b,c){H.aM(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.v]},
$aw:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$iu:1,
$au:function(){return[P.v]}}
H.he.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hf.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hg.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hh.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.hi.prototype={
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.da.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aM(b,a,a.length)
return a[b]}}
H.ca.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aM(b,a,a.length)
return a[b]},
$ica:1,
$ibB:1}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
P.iP.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iO.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iQ.prototype={
$0:function(){this.a.$0()}}
P.iR.prototype={
$0:function(){this.a.$0()}}
P.ei.prototype={
ev:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.jg(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
ew:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bN(new P.jf(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idu:1}
P.jg.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jf.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.cB(u,q)}s.c=r
t.d.$1(s)}}
P.bH.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.ct.prototype={
gF:function(a){var u=this.c
if(u==null)return this.b
return u.gF(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bH){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.c(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.b0(u)
if(!!r.$ict){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.je.prototype={
gS:function(a){return new P.ct(this.a())}}
P.dG.prototype={}
P.dq.prototype={}
P.hS.prototype={}
P.du.prototype={}
P.jp.prototype={}
P.jy.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dc():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u}}
P.j3.prototype={
i9:function(a){var u,t,s,r=null
try{if(C.f===$.ar){a.$0()
return}P.nV(r,r,this,a)}catch(s){u=H.bm(s)
t=H.kx(s)
P.lv(r,r,this,u,t)}},
ia:function(a,b){var u,t,s,r=null
try{if(C.f===$.ar){a.$1(b)
return}P.nW(r,r,this,a,b)}catch(s){u=H.bm(s)
t=H.kx(s)
P.lv(r,r,this,u,t)}},
ib:function(a,b){return this.ia(a,b,null)},
ho:function(a){return new P.j4(this,a)},
da:function(a,b){return new P.j5(this,a,b)}}
P.j4.prototype={
$0:function(){return this.a.i9(this.b)}}
P.j5.prototype={
$1:function(a){return this.a.ib(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j0.prototype={
gS:function(a){var u=new P.dV(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
a3:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eE(b)
return t}},
eE:function(a){var u=this.d
if(u==null)return!1
return this.bI(this.cO(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cI(u==null?s.b=P.ko():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cI(t==null?s.c=P.ko():t,b)}else return s.ey(0,b)},
ey:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ko()
u=s.cJ(b)
t=r[u]
if(t==null)r[u]=[s.bF(b)]
else{if(s.bI(t,b)>=0)return!1
t.push(s.bF(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fX(this.c,b)
else return this.fW(0,b)},
fW:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cO(r,b)
t=s.bI(u,b)
if(t<0)return!1
s.d4(u.splice(t,1)[0])
return!0},
cI:function(a,b){if(a[b]!=null)return!1
a[b]=this.bF(b)
return!0},
fX:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d4(u)
delete a[b]
return!0},
cS:function(){this.r=1073741823&this.r+1},
bF:function(a){var u,t=this,s=new P.j1(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cS()
return s},
d4:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cS()},
cJ:function(a){return J.cG(a)&1073741823},
cO:function(a,b){return a[this.cJ(b)]},
bI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.z(a[t].a,b))return t
return-1}}
P.j1.prototype={}
P.dV.prototype={
gF:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bs(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fz.prototype={}
P.fL.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fM.prototype={$it:1,$ii:1,$iu:1}
P.w.prototype={
gS:function(a){return new H.c1(a,this.gj(a))},
M:function(a,b){return this.h(a,b)},
ih:function(a,b){var u,t,s=this,r=H.b([],[H.od(s,a,"w",0)])
C.b.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.j(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t;++u}return r},
ig:function(a){return this.ih(a,!0)},
hA:function(a,b,c,d){var u
P.aX(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.k9(a,"[","]")}}
P.fP.prototype={}
P.fQ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a7.prototype={
I:function(a,b){var u,t
for(u=J.b0(this.gan(a));u.u();){t=u.gF(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.aj(this.gan(a))},
i:function(a){return P.kf(a)},
$iQ:1}
P.jh.prototype={
k:function(a,b,c){throw H.d(P.y("Cannot modify unmodifiable map"))}}
P.fR.prototype={
h:function(a,b){return J.bQ(this.a,b)},
k:function(a,b,c){J.jY(this.a,b,c)},
I:function(a,b){J.kF(this.a,b)},
gj:function(a){return J.aj(this.a)},
i:function(a){return J.ab(this.a)},
$iQ:1}
P.dB.prototype={}
P.j6.prototype={
i:function(a){return P.k9(this,"{","}")},
M:function(a,b){var u,t,s
P.l5(b,"index")
for(u=P.nc(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$it:1,
$ii:1}
P.dW.prototype={}
P.eo.prototype={}
P.eN.prototype={
hN:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aX(a0,a1,b.length)
u=$.m0()
if(typeof a1!=="number")return H.j(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.L(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jF(C.a.L(b,n))
j=H.jF(C.a.L(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.N("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.df(m)
s=n
continue}}throw H.d(P.P("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.kH(b,p,a1,q,o,f)
else{e=C.c.av(f-1,4)+1
if(e===1)throw H.d(P.P(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aT(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kH(b,p,a1,q,o,d)
else{e=C.c.av(d,4)
if(e===1)throw H.d(P.P(c,b,a1))
if(e>1)b=C.a.aT(b,a1,a1,e===2?"==":"=")}return b}}
P.eO.prototype={}
P.eW.prototype={}
P.f2.prototype={}
P.fi.prototype={}
P.iw.prototype={
ghz:function(){return C.J}}
P.iy.prototype={
c2:function(a){var u,t,s,r=P.aX(0,null,a.length)
if(typeof r!=="number")return r.D()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jo(t)
if(s.eL(a,0,r)!==r)s.d6(J.m6(a,r-1),0)
return new Uint8Array(t.subarray(0,H.nt(0,s.b,t.length)))}}
P.jo.prototype={
d6:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eL:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.L(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d6(r,C.a.L(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ix.prototype={
c2:function(a){var u,t,s,r,q,p,o,n,m=P.n0(!1,a,0,null)
if(m!=null)return m
u=P.aX(0,null,J.aj(a))
t=P.lx(a,0,u)
if(t>0){s=P.cg(a,0,t)
if(t===u)return s
r=new P.N(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.N("")
o=new P.jn(!1,r)
o.c=p
o.hr(a,q,u)
if(o.e>0){H.n(P.P("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.df(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jn.prototype={
hr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bk(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ag()
if((r&192)!==128){q=P.P(k+C.c.ba(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.c(C.u,q)
if(j<=C.u[q]){q=P.P("Overlong encoding of 0x"+C.c.ba(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.c.ba(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.df(j)
l.c=!1}if(typeof c!=="number")return H.j(c)
q=s<c
for(;q;){p=P.lx(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cg(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.c.ba(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.P(k+C.c.ba(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.bj.prototype={}
P.ad.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aM(u,30))&1073741823},
i:function(a){var u=this,t=P.mg(H.mI(u)),s=P.cP(H.mG(u)),r=P.cP(H.mC(u)),q=P.cP(H.mD(u)),p=P.cP(H.mF(u)),o=P.cP(H.mH(u)),n=P.mh(H.mE(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.I.prototype={}
P.b2.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aQ:function(a,b){return C.c.aQ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fg(),q=this.a
if(q<0)return"-"+new P.b2(0-q).i(0)
u=r.$1(C.c.a2(q,6e7)%60)
t=r.$1(C.c.a2(q,1e6)%60)
s=new P.ff().$1(q%1e6)
return""+C.c.a2(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bt.prototype={}
P.dc.prototype={
i:function(a){return"Throw of null."}}
P.at.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbH()+o+u
if(!q.a)return t
s=q.gbG()
r=P.k7(q.b)
return t+s+": "+r}}
P.by.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fy.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.ip.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ik.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f_.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.k7(u)+"."}}
P.hn.prototype={
i:function(a){return"Out of Memory"},
$ibt:1}
P.dn.prototype={
i:function(a){return"Stack Overflow"},
$ibt:1}
P.f7.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dO.prototype={
i:function(a){return"Exception: "+this.a}}
P.fs.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.L(f,q)
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
k=""}j=C.a.t(f,m,n)
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.v.prototype={}
P.i.prototype={
gj:function(a){var u,t=this.gS(this)
for(u=0;t.u();)++u
return u},
M:function(a,b){var u,t,s
P.l5(b,"index")
for(u=this.gS(this),t=0;u.u();){s=u.gF(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
i:function(a){return P.mk(this,"(",")")}}
P.fA.prototype={}
P.u.prototype={$it:1,$ii:1}
P.Q.prototype={}
P.bc.prototype={
gJ:function(a){return P.a3.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
p:function(a,b){return this===b},
gJ:function(a){return H.cc(this)},
i:function(a){return"Instance of '"+H.e(H.cd(this))+"'"},
toString:function(){return this.i(this)}}
P.r.prototype={}
P.N.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iu.prototype={
$2:function(a,b){var u,t,s,r=J.kw(b).dJ(b,"=")
if(r===-1){if(b!=="")J.jY(a,P.ks(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.ah(b,r+1)
s=this.a
J.jY(a,P.ks(u,0,u.length,s,!0),P.ks(t,0,t.length,s,!0))}return a}}
P.ir.prototype={
$2:function(a,b){throw H.d(P.P("Illegal IPv4 address, "+a,this.a,b))}}
P.is.prototype={
$2:function(a,b){throw H.d(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.it.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eA(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bI.prototype={
ge9:function(){return this.b},
gcd:function(a){var u=this.c
if(u==null)return""
if(C.a.ak(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbu:function(a){var u=this.d
if(u==null)return P.lo(this.a)
return u},
gck:function(a){var u=this.f
return u==null?"":u},
gdE:function(){var u=this.r
return u==null?"":u},
e1:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.ak(u,"/"))u="/"+u
s=P.kq(null,0,0,b)
return new P.bI(q,o,m,n,u,s,r.r)},
gbw:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.r
u=this.Q=new P.dB(P.le(t==null?"":t),[u,u])
t=u}return t},
gdF:function(){return this.c!=null},
gdI:function(){return this.f!=null},
gdG:function(){return this.r!=null},
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
if(!!J.S(b).$ikk)if(s.a==b.gbC())if(s.c!=null===b.gdF())if(s.b==b.ge9())if(s.gcd(s)==b.gcd(b))if(s.gbu(s)==b.gbu(b))if(s.e===b.gdZ(b)){u=s.f
t=u==null
if(!t===b.gdI()){if(t)u=""
if(u===b.gck(b)){u=s.r
t=u==null
if(!t===b.gdG()){if(t)u=""
u=u===b.gdE()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$ikk:1,
gbC:function(){return this.a},
gdZ:function(a){return this.e}}
P.ji.prototype={
$1:function(a){throw H.d(P.P("Invalid port",this.a,this.b+1))}}
P.jj.prototype={
$1:function(a){return P.jm(C.T,a,C.e,!1)}}
P.jl.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.jm(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.jm(C.h,b,C.e,!0))}}}
P.jk.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b0(b),t=this.a;u.u();)t.$2(a,u.gF(u))}}
P.iq.prototype={
ge8:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.a.bp(u,"?",o)
s=u.length
if(t>=0){r=P.cw(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iV("data",p,p,p,P.cw(u,o,s,C.w,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jt.prototype={
$1:function(a){return new Uint8Array(96)}}
P.js.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.m7(u,0,96,b)
return u},
$S:18}
P.ju.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.L(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.jv.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.L(b,0),t=C.a.L(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.j7.prototype={
gdF:function(){return this.c>0},
gdH:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.j(t)
t=u+1<t
u=t}else u=!1
return u},
gdI:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdG:function(){return this.r<this.a.length},
gcQ:function(){return this.b===4&&C.a.ak(this.a,"http")},
gcR:function(){return this.b===5&&C.a.ak(this.a,"https")},
gbC:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcQ())q=t.x="http"
else if(t.gcR()){t.x="https"
q="https"}else if(q===4&&C.a.ak(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.ak(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
ge9:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gcd:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbu:function(a){var u,t=this
if(t.gdH()){u=t.d
if(typeof u!=="number")return u.w()
return P.eA(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcQ())return 80
if(t.gcR())return 443
return 0},
gdZ:function(a){return C.a.t(this.a,this.e,this.f)},
gck:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.t(this.a,u+1,t):""},
gdE:function(){var u=this.r,t=this.a
return u<t.length?C.a.ah(t,u+1):""},
gbw:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.U
t=P.r
return new P.dB(P.le(u.gck(u)),[t,t])},
e1:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbC(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdH()?p.gbu(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.ak(t,"/"))t="/"+t
r=P.kq(o,0,0,b)
s=p.r
q=s<l.length?C.a.ah(l,s+1):o
return new P.bI(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ikk&&this.a===b.i(0)},
i:function(a){return this.a},
$ikk:1}
P.iV.prototype={}
W.m.prototype={}
W.eC.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
i:function(a){return String(a)}}
W.eF.prototype={
i:function(a){return String(a)}}
W.bp.prototype={$ibp:1}
W.bq.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.o4(c))
return a.getContext(b)},
ed:function(a,b){return this.cp(a,b,null)},
$ibq:1}
W.b1.prototype={
gj:function(a){return a.length}}
W.f3.prototype={
gj:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bU.prototype={
gj:function(a){return a.length}}
W.f4.prototype={}
W.af.prototype={}
W.av.prototype={}
W.f5.prototype={
gj:function(a){return a.length}}
W.f6.prototype={
gj:function(a){return a.length}}
W.f8.prototype={
gj:function(a){return a.length}}
W.fc.prototype={
i:function(a){return String(a)}}
W.cR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[[P.a8,P.aa]]},
$iA:1,
$aA:function(){return[[P.a8,P.aa]]},
$aw:function(){return[[P.a8,P.aa]]},
$ii:1,
$ai:function(){return[[P.a8,P.aa]]},
$iu:1,
$au:function(){return[[P.a8,P.aa]]}}
W.cS.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gar(a))+" x "+H.e(this.gam(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia8&&a.left===u.gbs(b)&&a.top===u.gbA(b)&&this.gar(a)===u.gar(b)&&this.gam(a)===u.gam(b)},
gJ:function(a){return W.ln(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gar(a)),C.d.gJ(this.gam(a)))},
gdd:function(a){return a.bottom},
gam:function(a){return a.height},
gbs:function(a){return a.left},
gby:function(a){return a.right},
gbA:function(a){return a.top},
gar:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[P.r]},
$iA:1,
$aA:function(){return[P.r]},
$aw:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$iu:1,
$au:function(){return[P.r]}}
W.fe.prototype={
gj:function(a){return a.length}}
W.iT.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.ig(this)
return new J.a2(u,u.length)},
$at:function(){return[W.U]},
$aw:function(){return[W.U]},
$ai:function(){return[W.U]},
$au:function(){return[W.U]}}
W.U.prototype={
gc0:function(a){return new W.iT(a,a.children)},
gde:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$iU:1}
W.k.prototype={$ik:1}
W.f.prototype={
hg:function(a,b,c,d){if(c!=null)this.ez(a,b,c,!1)},
ez:function(a,b,c,d){return a.addEventListener(b,H.bN(c,1),!1)}}
W.ak.prototype={$iak:1}
W.bW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ak]},
$iA:1,
$aA:function(){return[W.ak]},
$aw:function(){return[W.ak]},
$ii:1,
$ai:function(){return[W.ak]},
$iu:1,
$au:function(){return[W.ak]},
$ibW:1}
W.fn.prototype={
gj:function(a){return a.length}}
W.fr.prototype={
gj:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fw.prototype={
gj:function(a){return a.length}}
W.bY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$iA:1,
$aA:function(){return[W.D]},
$aw:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$iu:1,
$au:function(){return[W.D]}}
W.aR.prototype={$iaR:1,
gdh:function(a){return a.data}}
W.bZ.prototype={$ibZ:1}
W.eV.prototype={$iU:1,$iD:1}
W.bv.prototype={$ibv:1}
W.fN.prototype={
i:function(a){return String(a)}}
W.h7.prototype={
gj:function(a){return a.length}}
W.c6.prototype={$ic6:1}
W.h8.prototype={
h:function(a,b){return P.aZ(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aZ(u.value[1]))}},
gan:function(a){var u=H.b([],[P.r])
this.I(a,new W.h9(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.y("Not supported"))},
$aa7:function(){return[P.r,null]},
$iQ:1,
$aQ:function(){return[P.r,null]}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ha.prototype={
h:function(a,b){return P.aZ(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aZ(u.value[1]))}},
gan:function(a){var u=H.b([],[P.r])
this.I(a,new W.hb(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.y("Not supported"))},
$aa7:function(){return[P.r,null]},
$iQ:1,
$aQ:function(){return[P.r,null]}}
W.hb.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.hc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aA]},
$iA:1,
$aA:function(){return[W.aA]},
$aw:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$iu:1,
$au:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.iS.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.cV(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$at:function(){return[W.D]},
$aw:function(){return[W.D]},
$ai:function(){return[W.D]},
$au:function(){return[W.D]}}
W.D.prototype={
i7:function(a,b){var u,t
try{u=a.parentNode
J.m4(u,b,a)}catch(t){H.bm(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ej(a):u},
fZ:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.db.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$iA:1,
$aA:function(){return[W.D]},
$aw:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$iu:1,
$au:function(){return[W.D]}}
W.aC.prototype={$iaC:1,
gj:function(a){return a.length}}
W.hp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aC]},
$iA:1,
$aA:function(){return[W.aC]},
$aw:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$iu:1,
$au:function(){return[W.aC]}}
W.hx.prototype={
h:function(a,b){return P.aZ(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aZ(u.value[1]))}},
gan:function(a){var u=H.b([],[P.r])
this.I(a,new W.hy(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.y("Not supported"))},
$aa7:function(){return[P.r,null]},
$iQ:1,
$aQ:function(){return[P.r,null]}}
W.hy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hA.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aF]},
$iA:1,
$aA:function(){return[W.aF]},
$aw:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$iu:1,
$au:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.hL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aG]},
$iA:1,
$aA:function(){return[W.aG]},
$aw:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$iu:1,
$au:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gj:function(a){return a.length}}
W.hQ.prototype={
h:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gan:function(a){var u=H.b([],[P.r])
this.I(a,new W.hR(u))
return u},
gj:function(a){return a.length},
$aa7:function(){return[P.r,P.r]},
$iQ:1,
$aQ:function(){return[P.r,P.r]}}
W.hR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.aI.prototype={$iaI:1}
W.ao.prototype={$iao:1}
W.hW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ao]},
$iA:1,
$aA:function(){return[W.ao]},
$aw:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$iu:1,
$au:function(){return[W.ao]}}
W.hX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aI]},
$iA:1,
$aA:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$iu:1,
$au:function(){return[W.aI]}}
W.i4.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bA.prototype={$ibA:1}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aJ]},
$iA:1,
$aA:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$iu:1,
$au:function(){return[W.aJ]}}
W.i8.prototype={
gj:function(a){return a.length}}
W.be.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iL.prototype={
gj:function(a){return a.length}}
W.bh.prototype={
ghw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
ghv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibh:1}
W.cm.prototype={
h_:function(a,b){return a.requestAnimationFrame(H.bN(b,1))},
eK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.G]},
$iA:1,
$aA:function(){return[W.G]},
$aw:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$iu:1,
$au:function(){return[W.G]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia8&&a.left===u.gbs(b)&&a.top===u.gbA(b)&&a.width===u.gar(b)&&a.height===u.gam(b)},
gJ:function(a){return W.ln(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gam:function(a){return a.height},
gar:function(a){return a.width}}
W.iY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ax]},
$iA:1,
$aA:function(){return[W.ax]},
$aw:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$iu:1,
$au:function(){return[W.ax]}}
W.e0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.D]},
$iA:1,
$aA:function(){return[W.D]},
$aw:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$iu:1,
$au:function(){return[W.D]}}
W.j8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aH]},
$iA:1,
$aA:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$iu:1,
$au:function(){return[W.aH]}}
W.jd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$it:1,
$at:function(){return[W.an]},
$iA:1,
$aA:function(){return[W.an]},
$aw:function(){return[W.an]},
$ii:1,
$ai:function(){return[W.an]},
$iu:1,
$au:function(){return[W.an]}}
W.iW.prototype={}
W.iX.prototype={
$1:function(a){return this.a.$1(a)}}
W.J.prototype={
gS:function(a){return new W.cV(a,this.gj(a))}}
W.cV.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bQ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gF:function(a){return this.d}}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.cr.prototype={}
W.cs.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cu.prototype={}
W.cv.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
P.j9.prototype={
cc:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bB:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iad)return new Date(a.a)
if(!!u.$imM)throw H.d(P.il("structured clone of RegExp"))
if(!!u.$iak)return a
if(!!u.$ibp)return a
if(!!u.$ibW)return a
if(!!u.$iaR)return a
if(!!u.$ic8||!!u.$ibb||!!u.$ic6)return a
if(!!u.$iQ){t=p.cc(a)
s=p.b
r=s.length
if(t>=r)return H.c(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.c(s,t)
s[t]=q
u.I(a,new P.jb(o,p))
return o.a}if(!!u.$iu){t=p.cc(a)
o=p.b
if(t>=o.length)return H.c(o,t)
q=o[t]
if(q!=null)return q
return p.ht(a,t)}if(!!u.$imn){t=p.cc(a)
u=p.b
s=u.length
if(t>=s)return H.c(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.c(u,t)
u[t]=q
p.hF(a,new P.jc(o,p))
return o.b}throw H.d(P.il("structured clone of other type"))},
ht:function(a,b){var u,t=J.bk(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.c(q,b)
q[b]=r
if(typeof s!=="number")return H.j(s)
u=0
for(;u<s;++u){q=this.bB(t.h(a,u))
if(u>=r.length)return H.c(r,u)
r[u]=q}return r}}
P.jb.prototype={
$2:function(a,b){this.a.a[a]=this.b.bB(b)},
$S:3}
P.jc.prototype={
$2:function(a,b){this.a.b[a]=this.b.bB(b)},
$S:3}
P.en.prototype={$iaR:1,
gdh:function(a){return this.a}}
P.jz.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ja.prototype={
hF:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fo.prototype={
gbg:function(){var u=this.b,t=H.lC(u,"w",0)
return new H.c2(new H.iM(u,new P.fp(),[t]),new P.fq(),[t,W.U])},
k:function(a,b,c){var u=this.gbg()
J.m8(u.b.$1(J.jZ(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.aj(this.gbg().a)},
h:function(a,b){var u=this.gbg()
return u.b.$1(J.jZ(u.a,b))},
gS:function(a){var u=P.ke(this.gbg(),!1,W.U)
return new J.a2(u,u.length)},
$at:function(){return[W.U]},
$aw:function(){return[W.U]},
$ai:function(){return[W.U]},
$au:function(){return[W.U]}}
P.fp.prototype={
$1:function(a){return!!J.S(a).$iU}}
P.fq.prototype={
$1:function(a){return H.h(a,"$iU")}}
P.j2.prototype={
gby:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
return u+t},
gdd:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia8){t=q.a
if(t==u.gbs(b)){s=q.b
if(s==u.gbA(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.j(r)
if(t+r===u.gby(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.j(t)
u=s+t===u.gdd(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cG(t),r=u.b,q=J.cG(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.j(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.j(t)
t=C.c.gJ(r+t)
return P.nb(P.j_(P.j_(P.j_(P.j_(0,s),q),p),t))}}
P.a8.prototype={
gbs:function(a){return this.a},
gbA:function(a){return this.b},
gar:function(a){return this.c},
gam:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aS]},
$aw:function(){return[P.aS]},
$ii:1,
$ai:function(){return[P.aS]},
$iu:1,
$au:function(){return[P.aS]}}
P.aV.prototype={$iaV:1}
P.hl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aV]},
$aw:function(){return[P.aV]},
$ii:1,
$ai:function(){return[P.aV]},
$iu:1,
$au:function(){return[P.aV]}}
P.hr.prototype={
gj:function(a){return a.length}}
P.hT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.r]},
$aw:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$iu:1,
$au:function(){return[P.r]}}
P.l.prototype={
gc0:function(a){return new P.fo(a,new W.iS(a))}}
P.aY.prototype={$iaY:1}
P.i9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aY]},
$aw:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]},
$iu:1,
$au:function(){return[P.aY]}}
P.dT.prototype={}
P.dU.prototype={}
P.e3.prototype={}
P.e4.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.el.prototype={}
P.em.prototype={}
P.bB.prototype={$it:1,
$at:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$iu:1,
$au:function(){return[P.v]}}
P.eH.prototype={
gj:function(a){return a.length}}
P.eI.prototype={
h:function(a,b){return P.aZ(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aZ(u.value[1]))}},
gan:function(a){var u=H.b([],[P.r])
this.I(a,new P.eJ(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.d(P.y("Not supported"))},
$aa7:function(){return[P.r,null]},
$iQ:1,
$aQ:function(){return[P.r,null]}}
P.eJ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eK.prototype={
gj:function(a){return a.length}}
P.bo.prototype={}
P.hm.prototype={
gj:function(a){return a.length}}
P.dH.prototype={}
P.di.prototype={
e4:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.S(g)
if(!!u.$iaR&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.o5(g))
return}if(!!u.$ibZ&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cH("Incorrect number or type of arguments"))},
ic:function(a,b,c,d,e,f,g){return this.e4(a,b,c,d,e,f,g,null,null,null)}}
P.hN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aZ(a.item(b))},
k:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[[P.Q,,,]]},
$aw:function(){return[[P.Q,,,]]},
$ii:1,
$ai:function(){return[[P.Q,,,]]},
$iu:1,
$au:function(){return[[P.Q,,,]]}}
P.ea.prototype={}
P.eb.prototype={}
K.eD.prototype={
aS:function(a,b){return!0},
i:function(a){return"all"}}
K.cY.prototype={
aS:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].aS(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.d5.prototype={}
K.aU.prototype={
aS:function(a,b){return!this.ei(0,b)},
i:function(a){return"!["+this.cw(0)+"]"}}
K.hB.prototype={
en:function(a){var u,t,s,r
if(a.a.length<=0)throw H.d(P.p("May not create a Set with zero characters."))
u=P.v
t=new H.H([u,P.bj])
for(s=new H.c1(a,a.gj(a));s.u();)t.k(0,s.d,!0)
r=P.ke(t.gan(t),!0,u)
C.b.eh(r)
this.a=r},
aS:function(a,b){return C.b.a3(this.a,b)},
i:function(a){return P.cg(this.a,0,null)}}
L.dp.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dy(this.a.R(0,b))
r.a=H.b([],[K.d5])
r.c=!1
this.c.push(r)
return r},
hB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.aS(0,a))return r}return},
i:function(a){return this.b},
d3:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.a3(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gan(n),n=n.gS(n);n.u();){t=n.gF(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.a3(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.q)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dv.prototype={
i:function(a){var u=H.lK(this.b,"\n","\\n"),t=H.lK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dw.prototype={
i:function(a){return this.b}}
L.i5.prototype={
R:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dp(this,b)
u.c=H.b([],[L.dy])
this.a.k(0,b,u)}return u},
bb:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dw(a)
u=P.r
t.c=new H.H([u,u])
this.b.k(0,a,t)}return t},
e7:function(a){return this.ii(a)},
ii:function(a){var u=this
return P.ny(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$e7(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cl(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.hB(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cg(d,0,null)
throw H.d(P.p("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.n(P.y("removeRange"))
P.aX(0,m,d.length)
d.splice(0,m-0)
C.b.aN(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.a3(0,p.a)?7:8
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
if(g.d!=null){j=P.cg(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dv(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.a3(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.n9()
case 1:return P.na(q)}}},L.dv)},
i:function(a){var u,t=new P.N(""),s=this.d
if(s!=null)t.a=s.d3()+"\n"
for(s=this.a,s=s.gim(s),s=s.gS(s);s.u();){u=s.gF(s)
if(u!=this.d)t.a+=u.d3()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dy.prototype={
i:function(a){return this.b.b+": "+this.cw(0)}}
O.aQ.prototype={
bd:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cq:function(a,b,c){this.b=b
this.c=a},
aH:function(a,b){return this.cq(a,null,b)},
cW:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cT:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a2(u,u.length)},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.lC(s,"aQ",0)]
if(s.cW(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cT(t,H.b([b],r))}},
aN:function(a,b){var u,t
if(this.cW(b)){u=this.a
t=u.length
C.b.aN(u,b)
this.cT(t,b)}},
$ii:1}
O.c4.prototype={
gj:function(a){return this.a.length},
gn:function(){var u=this.b
return u==null?this.b=D.C():u},
aI:function(){var u=this.b
if(u!=null)u.C(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.b.gaF(u)
else return V.aT()},
bv:function(a){var u=this.a
if(a==null)u.push(V.aT())
else u.push(a)
this.aI()},
b9:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}}}
E.eP.prototype={}
E.aw.prototype={
cH:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a2(u,u.length);u.u();){t=u.d
if(t.f==null)t.cH()}},
sbD:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().E(0,s.gdV())
u=s.c
if(u!=null)u.gn().l(0,s.gdV())
t=new D.o("shape",r,s.c)
t.b=!0
s.at(t)}},
saq:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().E(0,s.gdX())
u=s.f
s.f=a
if(a!=null)a.gn().l(0,s.gdX())
s.cH()
t=new D.o("technique",u,s.f)
t.b=!0
s.at(t)}},
sb6:function(a){var u,t,s=this
if(!J.z(s.r,a)){u=s.r
if(u!=null)u.gn().E(0,s.gdT())
if(a!=null)a.gn().l(0,s.gdT())
s.r=a
t=new D.o("mover",u,a)
t.b=!0
s.at(t)}},
ab:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aA(0,b,s):null
if(!J.z(q,s.x)){u=s.x
s.x=q
t=new D.o("matrix",u,q)
t.b=!0
s.at(t)}r=s.f
if(r!=null)r.ab(0,b)
for(r=s.y.a,r=new J.a2(r,r.length);r.u();)r.d.ab(0,b)},
a0:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga7(s))
else s.a.push(r.m(0,s.ga7(s)))
s.aI()
a.cj(t.f)
s=a.dy
u=(s&&C.b).gaF(s)
if(u!=null&&t.d!=null)u.bx(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.u();)s.d.a0(a)
a.ci()
a.dx.b9()},
at:function(a){var u=this.z
if(u!=null)u.C(a)},
a4:function(){return this.at(null)},
dW:function(a){this.e=null
this.at(a)},
hU:function(){return this.dW(null)},
dY:function(a){this.at(a)},
hV:function(){return this.dY(null)},
dU:function(a){this.at(a)},
hT:function(){return this.dU(null)},
dS:function(a){this.at(a)},
hQ:function(){return this.dS(null)},
hP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdR(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b3()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a4()},
hS:function(a,b){var u,t
for(u=b.gS(b),t=this.gdR();u.u();)u.gF(u).gn().E(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.ht.prototype={
em:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ad(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c4()
t=[V.al]
u.a=H.b([],t)
u.gn().l(0,new E.hu(s))
s.cy=u
u=new O.c4()
u.a=H.b([],t)
u.gn().l(0,new E.hv(s))
s.db=u
u=new O.c4()
u.a=H.b([],t)
u.gn().l(0,new E.hw(s))
s.dx=u
u=H.b([],[O.dr])
s.dy=u
u.push(null)
s.fr=new H.H([P.r,A.dk])},
gi4:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.m(0,u.ga7(u))
s=u}return s},
ge0:function(){var u,t=this,s=t.ch
if(s==null){s=t.gi4()
u=t.dx
u=t.ch=s.m(0,u.ga7(u))
s=u}return s},
gea:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga7(s)
u=t.dx
u=t.cx=s.m(0,u.ga7(u))
s=u}return s},
cj:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaF(u):a)},
ci:function(){var u=this.dy
if(u.length>1)u.pop()},
bl:function(a){var u=a.b
if(u.length===0)throw H.d(P.p("May not cache a shader with no name."))
if(this.fr.c1(0,u))throw H.d(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.hu.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hv.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hw.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dt.prototype={
cE:function(a){this.e2()},
cD:function(){return this.cE(null)},
ghG:function(){var u,t=this,s=Date.now(),r=C.c.a2(P.kN(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ad(s,!1)
return u/r},
cY:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.j(r)
u=C.d.b3(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.b3(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l9(C.p,s.gi8())}},
e2:function(){if(!this.cx){this.cx=!0
var u=window
C.A.eK(u)
C.A.h_(u,W.ly(new E.i3(this),P.aa))}},
i6:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cY()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.kN(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.aI()
r=s.db
C.b.sj(r.a,0)
r.aI()
r=s.dx
C.b.sj(r.a,0)
r.aI()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.a0(p.e)}}catch(q){u=H.bm(q)
t=H.kx(q)
P.kA("Error: "+H.e(u))
P.kA("Stack: "+H.e(t))
throw H.d(u)}}}
E.i3.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i6()}}}
Z.dF.prototype={}
Z.cK.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bm(s)
t=P.p('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.bG.prototype={}
Z.aP.prototype={
al:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
az:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a0:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.r],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ab(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.q(p,", ")+"\nAttrs:   "+C.b.q(r,", ")}}
Z.bu.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cd(this.c))+"'")+"]"}}
Z.aq.prototype={
gct:function(a){var u=this.a,t=(u&$.a1().a)!==0?3:0
if((u&$.as().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.ai().a)!==0)t+=2
if((u&$.b_().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=3
if((u&$.cE().a)!==0)t+=4
if((u&$.bn().a)!==0)++t
return(u&$.aN().a)!==0?t+4:t},
hk:function(a){var u,t=$.a1(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.as()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ai()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0)if(u===a)return t
return $.m_()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aq))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.r]),t=this.a
if((t&$.a1().a)!==0)u.push("Pos")
if((t&$.as().a)!==0)u.push("Norm")
if((t&$.aO().a)!==0)u.push("Binm")
if((t&$.ai().a)!==0)u.push("Txt2D")
if((t&$.b_().a)!==0)u.push("TxtCube")
if((t&$.cD().a)!==0)u.push("Clr3")
if((t&$.cE().a)!==0)u.push("Clr4")
if((t&$.bn().a)!==0)u.push("Weight")
if((t&$.aN().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.q(u,"|")}}
D.eS.prototype={}
D.b3.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.a3(s,b)
if(s===!0){s=t.a
u=(s&&C.b).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.a3(s,b)
if(s===!0){s=t.b
u=(s&&C.b).E(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.I(P.ke(u,!0,{func:1,ret:-1,args:[D.V]}),new D.fk(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.V]}])
C.b.I(u,new D.fl(q))}return!0},
dm:function(){return this.C(null)},
af:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.fk.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fl.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.V.prototype={}
D.b5.prototype={}
D.b6.prototype={}
D.o.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cL.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d2.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d2))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fF.prototype={
i0:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hX:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.d4.prototype={}
X.fO.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gaO()
r=new X.ba(a,V.aW(),q.x,t,s)
r.b=!0
q.z=new P.ad(p,!1)
q.x=s
return r},
cg:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ee()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aW(a,b))
return!0},
i1:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaO()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.c7(new V.L(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
ft:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d4(c,r.a.gaO(),b)
s.b=!0
t.C(s)
r.y=new P.ad(u,!1)
r.x=V.aW()}}
X.am.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.am))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ba.prototype={}
X.hd.prototype={
bJ:function(a,b,c){var u=this,t=new P.ad(Date.now(),!1),s=u.a.gaO(),r=new X.ba(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cg:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bJ(a,b,!0))
return!0},
b8:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ee()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bJ(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bJ(a,b,!1))
return!0},
i2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaO()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.c7(new V.L(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0}}
X.c7.prototype={}
X.hq.prototype={}
X.dx.prototype={}
X.i6.prototype={
aW:function(a,b){var u=this,t=new P.ad(Date.now(),!1),s=a.length>0?a[0]:V.aW(),r=u.a.gaO(),q=new X.dx(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i_:function(a){var u=this.b
if(u==null)return!1
u.C(this.aW(a,!0))
return!0},
hY:function(a){var u=this.c
if(u==null)return!1
u.C(this.aW(a,!0))
return!0},
hZ:function(a){var u=this.d
if(u==null)return!1
u.C(this.aW(a,!1))
return!0}}
X.dC.prototype={
gaO:function(){var u=this.a,t=C.i.gde(u).c
t.toString
u=C.i.gde(u).d
u.toString
return V.ce(0,0,t,u)},
cL:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d2(u,new X.am(t,a.altKey,a.shiftKey))},
aL:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
bR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.D()
u=t.top
if(typeof r!=="number")return r.D()
return new V.a4(s-q,r-u)},
aX:function(a){return new V.L(a.movementX,a.movementY)},
bN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.Y(r.pageX)
C.d.Y(r.pageY)
p=o.left
C.d.Y(r.pageX)
n.push(new V.a4(q-p,C.d.Y(r.pageY)-o.top))}return n},
aC:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cL(u,new X.am(t,a.altKey,a.shiftKey))},
bK:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.D()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.D()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fm:function(a){this.f=!0},
f6:function(a){this.f=!1},
fc:function(a){if(this.f&&this.bK(a))a.preventDefault()},
fq:function(a){var u
if(!this.f)return
u=this.cL(a)
this.b.i0(u)},
fo:function(a){var u
if(!this.f)return
u=this.cL(a)
this.b.hX(u)},
fv:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aL(a)
if(r.x){u=r.aC(a)
t=r.aX(a)
if(r.d.cg(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aC(a)
s=r.aE(a)
if(r.c.cg(u,s))a.preventDefault()},
fB:function(a){var u,t,s,r=this
r.aL(a)
u=r.aC(a)
if(r.x){t=r.aX(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b8(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
if(!r.bK(a)){r.aL(a)
u=r.aC(a)
if(r.x){t=r.aX(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b8(u,s))a.preventDefault()}},
fz:function(a){var u,t,s,r=this
r.aL(a)
u=r.aC(a)
if(r.x){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b7(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
if(!r.bK(a)){r.aL(a)
u=r.aC(a)
if(r.x){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.b7(u,s))a.preventDefault()}},
fD:function(a){var u,t,s=this
s.aL(a)
u=new V.L((a&&C.z).ghv(a),C.z.ghw(a)).B(0,180)
if(s.x){if(s.d.i1(u))a.preventDefault()
return}if(s.r)return
t=s.aE(a)
if(s.c.i2(u,t))a.preventDefault()},
fF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aC(s.y)
t=s.aE(s.y)
s.d.ft(u,t,r)}},
fV:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bR(a)
u=t.bN(a)
if(t.e.i_(u))a.preventDefault()},
fR:function(a){var u
this.bR(a)
u=this.bN(a)
if(this.e.hY(u))a.preventDefault()},
fT:function(a){var u
this.bR(a)
u=this.bN(a)
if(this.e.hZ(u))a.preventDefault()}}
D.eM.prototype={$ia6:1}
D.fb.prototype={$ia6:1}
D.a6.prototype={}
D.d3.prototype={
ai:function(a){var u=this.y
if(u!=null)u.C(a)},
cV:function(a){var u=this.z
if(u!=null)u.C(a)},
fs:function(){return this.cV(null)},
fH:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.eF(s))return!1}return!0},
f0:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcU(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.bw)this.r.push(q)
p=q.Q
if(p==null){p=new D.b3()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b5()
u.b=!0
this.ai(u)},
fL:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gcU();u.u();){s=u.gF(u)
C.b.E(this.e,s)
s.gn().E(0,t)}u=new D.b6()
u.b=!0
this.ai(u)},
eF:function(a){var u=C.b.a3(this.r,a)
return u},
$ai:function(){return[D.a6]},
$aaQ:function(){return[D.a6]}}
D.bw.prototype={
ai:function(a){var u=this.Q
if(u!=null)u.C(a)},
er:function(){return this.ai(null)},
gae:function(){return 4},
$ia6:1}
D.hM.prototype={$ia6:1}
V.Y.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.x().a
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
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.fj.prototype={}
V.d7.prototype={
a5:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.I])
return t},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.d7))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.I],o=V.bP(H.b([q.a,q.d,q.r],p),3,0),n=V.bP(H.b([q.b,q.e,q.x],p),3,0),m=V.bP(H.b([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
a5:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.I])
return t},
hJ:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.x().a)return V.aT()
h=1/i
g=-a
f=-t
return V.az((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.j(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.j(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.j(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.az(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bc:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.j(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.R(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r,q,p=this,o=[P.I],n=V.bP(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bP(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bP(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bP(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.H("")}}
V.a4.prototype={
D:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.R.prototype={
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.j(t)
return new V.R(this.a+b.a,this.b+b.b,u+t)},
D:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
return new V.R(this.a-b.a,this.b-b.b,u-t)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aE.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.dh.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.L.prototype={
b4:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.j(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.j(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.L(t*b,u*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.lh
return u==null?$.lh=new V.L(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.L(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.E.prototype={
b4:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.j(t)
return this.a*a.a+this.b*a.b+u*t},
ce:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.D()
if(typeof s!=="number")return H.j(s)
return new V.E(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b_:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.j(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.E(q*p-u*t,u*s-r*p,r*t-q*s)},
w:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.j(r)
return new V.E(this.a+u,this.b+t,s+r)},
T:function(a){var u=this.c
if(typeof u!=="number")return u.T()
return new V.E(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.E(this.a*b,this.b*b,u*b)},
B:function(a,b){var u
if(Math.abs(b-0)<$.x().a)return V.cl()
u=this.c
if(typeof u!=="number")return u.B()
return new V.E(this.a/b,this.b/b,u/b)},
dM:function(){var u,t=$.x(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.j(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.j(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.bF.prototype={
b4:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
U.eZ.prototype={
bE:function(a){var u=V.jX(a,this.c,this.b)
return u},
gn:function(){var u=this.y
return u==null?this.y=D.C():u},
N:function(a){var u=this.y
if(u!=null)u.C(a)},
seb:function(a,b){},
sdO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bE(u)}s=new D.o("maximumLocation",s,t.b)
s.b=!0
t.N(s)}},
sdQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bE(u)}s=new D.o("minimumLocation",s,t.c)
s.b=!0
t.N(s)}},
saa:function(a,b){var u,t=this
b=t.bE(b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.o("location",u,b)
u.b=!0
t.N(u)}},
sdP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.o("maximumVelocity",r,a)
r.b=!0
s.N(r)}},
sZ:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.o("velocity",t,a)
t.b=!0
u.N(t)}},
sdg:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.o("dampening",u,a)
u.b=!0
this.N(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.saa(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sZ(u)}}}
U.cN.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.C():u},
aA:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
return J.z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bX.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.C():u},
N:function(a){var u=this.e
if(u!=null)u.C(a)},
ax:function(){return this.N(null)},
eu:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbh(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gn()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b5()
u.b=!0
this.N(u)},
fJ:function(a,b){var u,t
for(u=b.gS(b),t=this.gbh();u.u();)u.gF(u).gn().E(0,t)
u=new D.b6()
u.b=!0
this.N(u)},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aA(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.aT():u
r=s.e
if(r!=null)r.af(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ae]},
$aaQ:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dj.prototype={
gn:function(){var u=this.y
return u==null?this.y=D.C():u},
N:function(a){var u=this.y
if(u!=null)u.C(a)},
sec:function(a){var u
a=V.jX(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.x().a)){this.a=a
u=new D.o("yaw",u,a)
u.b=!0
this.N(u)}},
se_:function(a,b){var u
b=V.jX(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.x().a)){this.b=b
u=new D.o("pitch",u,b)
u.b=!0
this.N(u)}},
se3:function(a){var u
a=V.jX(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.x().a)){this.c=a
u=new D.o("roll",u,a)
u.b=!0
this.N(u)}},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sec(s.a+s.d*b.y)
s.se_(0,s.b+s.e*b.y)
s.se3(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.az(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).m(0,V.kY(s.b)).m(0,V.kX(s.a))
r=s.y
if(r!=null)r.af(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dj))return!1
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
return"Rotator: ["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+"], ["+V.B(u.d,3,0)+", "+V.B(u.e,3,0)+", "+V.B(u.f,3,0)+"]"}}
U.dD.prototype={
gn:function(){var u=this.fx
return u==null?this.fx=D.C():u},
N:function(a){var u=this.fx
if(u!=null)u.C(a)},
ax:function(){return this.N(null)},
bU:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.C():t
u.l(0,s.geS())
u=s.a.c
t=u.d
u=t==null?u.d=D.C():t
u.l(0,s.geU())
u=s.a.c
t=u.c
u=t==null?u.c=D.C():t
u.l(0,s.geW())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.l(0,s.geO())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.l(0,s.geQ())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.l(0,s.ghd())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.l(0,s.ghb())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.l(0,s.gh9())
return!0},
aw:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.L(u,t)},
eT:function(a){var u=this
H.h(a,"$iba")
if(!J.z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eV:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iba")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.L(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.j(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.aw(new V.L(t.a,t.b).m(0,2).B(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.j(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.j(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.aw(new V.L(s.a,s.b).m(0,2).B(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.saa(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.D(0,a.z)
n.dx=n.aw(new V.L(t.a,t.b).m(0,2).B(0,u.gay()))}n.ax()},
eX:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.j(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.j(u)
s.sZ(-t*10*u)
r.ax()}},
eP:function(a){var u=this
if(H.h(a,"$id4").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eR:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iba")
if(!J.z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.D(0,a.y)
r=n.aw(new V.L(s.a,s.b).m(0,2).B(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.saa(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.D(0,a.z)
n.dx=n.aw(new V.L(t.a,t.b).m(0,2).B(0,u.gay()))
n.ax()},
he:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hc:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$idx")
if(!n.cx)return
if(n.ch){u=a.d.D(0,a.y)
u=new V.L(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.j(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.D(0,a.y)
u=n.aw(new V.L(t.a,t.b).m(0,2).B(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.j(s)
t.sZ(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.j(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.D(0,a.y)
r=n.aw(new V.L(s.a,s.b).m(0,2).B(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.saa(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.saa(0,-p*q+s)
n.b.sZ(0)
n.c.sZ(0)
t=t.D(0,a.z)
n.dx=n.aw(new V.L(t.a,t.b).m(0,2).B(0,u.gay()))}n.ax()},
ha:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.j(s)
u.sZ(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.j(u)
s.sZ(-t*10*u)
r.ax()}},
aA:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.P()
if(s<r){t.dy=r
u=b.y
t.c.ab(0,u)
t.b.ab(0,u)
t.fr=V.kX(t.b.d).m(0,V.kY(t.c.d))}return t.fr},
$iae:1}
U.dE.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.C():u},
N:function(a){var u=this.r
if(u!=null)u.C(a)},
bU:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.geY()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).l(0,t)
return!0},
eZ:function(a){var u,t,s,r,q=this
if(!J.z(q.b,q.a.b.c))return
H.h(a,"$ic7")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.o("zoom",u,r)
u.b=!0
q.N(u)}},
aA:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.az(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iae:1}
M.cM.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.C():u},
U:function(a){var u=this.r
if(u!=null)u.C(a)},
aB:function(){return this.U(null)},
fN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gW(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gn()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b5()
u.b=!0
this.U(u)},
fP:function(a,b){var u,t
for(u=b.gS(b),t=this.gW();u.u();)u.gF(u).gn().E(0,t)
u=new D.b6()
u.b=!0
this.U(u)},
a0:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a2(u,u.length);u.u();){t=u.d
if(t!=null)t.a0(a)}s.f=!1},
$ai:function(){return[M.ag]},
$aaQ:function(){return[M.ag]},
$iag:1}
M.cO.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.C():u},
U:function(a){var u=this.r
if(u!=null)u.C(a)},
aB:function(){return this.U(null)},
saG:function(a,b){var u,t,s=this
if(b==null)b=X.k8(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gn().E(0,s.gW())
t=s.c
s.c=b
b.gn().l(0,s.gW())
u=new D.o("target",t,s.c)
u.b=!0
s.U(u)}},
saq:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().E(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gn().l(0,t.gW())
s=new D.o("technique",u,t.d)
s.b=!0
t.U(s)}},
a0:function(a){var u,t,s=this
a.cj(s.d)
s.c.X(a)
u=s.b
u.toString
a.cy.bv(V.aT())
t=V.aT()
u.a
a.db.bv(t)
u=s.d
if(u!=null)u.ab(0,a)
s.e.ab(0,a)
s.e.a0(a)
s.b.toString
a.cy.b9()
a.db.b9()
s.c.az(a)
a.ci()},
$iag:1}
M.cT.prototype={
U:function(a){var u=this.y
if(u!=null)u.C(a)},
aB:function(){return this.U(null)},
f8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gW(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.b3()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b5()
u.b=!0
this.U(u)},
fa:function(a,b){var u,t
for(u=b.gS(b),t=this.gW();u.u();)u.gF(u).gn().E(0,t)
u=new D.b6()
u.b=!0
this.U(u)},
sc_:function(a){var u,t,s=this
if(a==null)a=X.l0()
u=s.b
if(u!==a){if(u!=null)u.gn().E(0,s.gW())
t=s.b
s.b=a
a.gn().l(0,s.gW())
u=new D.o("camera",t,s.b)
u.b=!0
s.U(u)}},
saG:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gn().E(0,t.gW())
u=t.c
t.c=b
b.gn().l(0,t.gW())
s=new D.o("target",u,t.c)
s.b=!0
t.U(s)}},
saq:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gn().E(0,t.gW())
u=t.d
t.d=a
if(a!=null)a.gn().l(0,t.gW())
s=new D.o("technique",u,t.d)
s.b=!0
t.U(s)}},
gn:function(){var u=this.y
return u==null?this.y=D.C():u},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cj(c.d)
c.c.X(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.az(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bv(m)
t=$.l1
if(t==null){t=V.mz()
s=$.lj
if(s==null)s=$.lj=new V.E(0,1,0)
r=$.li
if(r==null)r=$.li=new V.E(0,0,-1)
l=r.B(0,Math.sqrt(r.G(r)))
s=s.b_(l)
k=s.B(0,Math.sqrt(s.G(s)))
j=l.b_(k)
i=new V.E(t.a,t.b,t.c)
h=k.T(0).G(i)
g=j.T(0).G(i)
f=l.T(0).G(i)
t=V.az(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.l1=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aA(0,a,u)
if(d!=null)e=d.m(0,e)}a.db.bv(e)
u=c.d
if(u!=null)u.ab(0,a)
for(u=c.e.a,u=new J.a2(u,u.length);u.u();)u.d.ab(0,a)
for(u=c.e.a,u=new J.a2(u,u.length);u.u();)u.d.a0(a)
c.b.toString
a.cy.b9()
a.db.b9()
c.c.az(a)
a.ci()},
$iag:1}
M.cW.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.C():u},
U:function(a){var u=this.b
if(u!=null)u.C(a)},
aB:function(){return this.U(null)},
a0:function(a){var u=this.e
if(u!=null)u.a0(a)
u=this.r
if(u!=null)u.a0(a)},
$iag:1}
M.ag.prototype={}
A.cI.prototype={}
A.eG.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hx:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bn:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gau:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.Z))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fa.prototype={}
A.fu.prototype={
ad:function(a,b){if(b!=null&&b.d)a.cr(b)}}
A.fv.prototype={
aJ:function(a,b,c,d){var u,t,s,r,q=c.length
if(0>=q)return H.c(c,0)
u=Math.abs(c[0]-0)<$.x().a
if(u){if(0>=d.length)return H.c(d,0)
t=d[0]
d=C.b.cu(d,1)
c=C.b.cu(c,1);--q}else t=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(u)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(t)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(r=0;r<q;++r){if(r>=c.length)return H.c(c,r)
a.a+="  offset = blurScale * "+H.e(c[r])+";\n"
if(r>=d.length)return H.c(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[r])+";\n"
if(r>=d.length)return H.c(d,r)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[r])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.fT.prototype={
el:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.N("")
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
A.nN(c0,u)
A.nP(c0,u)
A.nO(c0,u)
A.nR(c0,u)
A.nS(c0,u)
A.nQ(c0,u)
A.nT(c0,u)
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
b5.bq(0,s.charCodeAt(0)==0?s:s,A.nM(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.K(0,"invViewMat"),"$iW")
if(t)b5.dy=H.h(b5.y.K(0,"objMat"),"$iW")
if(r)b5.fr=H.h(b5.y.K(0,"viewObjMat"),"$iW")
b5.fy=H.h(b5.y.K(0,"projViewObjMat"),"$iW")
if(c0.go)b5.fx=H.h(b5.y.K(0,"viewMat"),"$iW")
if(c0.x1)b5.k1=H.h(b5.y.K(0,"txt2DMat"),"$ibC")
if(c0.x2)b5.k2=H.h(b5.y.K(0,"txtCubeMat"),"$iW")
if(c0.y1)b5.k3=H.h(b5.y.K(0,"colorMat"),"$iW")
b5.r1=H.b([],[A.W])
t=c0.aR
if(t>0){b5.k4=b5.y.K(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.n(P.p(b7+q+b8))
s.push(H.h(m,"$iW"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.K(0,"emissionClr"),"$iF")
if(t.b)b5.rx=H.h(b5.y.K(0,"emissionTxt"),"$iT")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.K(0,"ambientClr"),"$iF")
if(t.b)b5.x2=H.h(b5.y.K(0,"ambientTxt"),"$iT")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.K(0,"diffuseClr"),"$iF")
if(t.b)b5.aR=H.h(b5.y.K(0,"diffuseTxt"),"$iT")
t=c0.d
if(t.a)b5.bo=H.h(b5.y.K(0,"invDiffuseClr"),"$iF")
if(t.b)b5.dn=H.h(b5.y.K(0,"invDiffuseTxt"),"$iT")
t=c0.e
s=t.a
if(s||t.b||!1){b5.ds=H.h(b5.y.K(0,"shininess"),"$iM")
if(s)b5.dq=H.h(b5.y.K(0,"specularClr"),"$iF")
if(t.b)b5.dr=H.h(b5.y.K(0,"specularTxt"),"$iT")}if(c0.f.b)b5.dt=H.h(b5.y.K(0,"bumpTxt"),"$iT")
if(c0.db){b5.du=H.h(b5.y.K(0,"envSampler"),"$ibD")
t=c0.r
if(t.a)b5.dv=H.h(b5.y.K(0,"reflectClr"),"$iF")
if(t.b)b5.dw=H.h(b5.y.K(0,"reflectTxt"),"$iT")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dz=H.h(b5.y.K(0,"refraction"),"$iM")
if(s)b5.dA=H.h(b5.y.K(0,"refractClr"),"$iF")
if(t.b)b5.dB=H.h(b5.y.K(0,"refractTxt"),"$iT")}}t=c0.y
if(t.a)b5.dC=H.h(b5.y.K(0,"alpha"),"$iM")
if(t.b)b5.dD=H.h(b5.y.K(0,"alphaTxt"),"$iT")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.c4=new H.H([r,A.ap])
b5.c5=new H.H([r,[P.u,A.ch]])
for(r=[A.ch],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.n(P.p(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.n(P.p(b7+o+b8))
H.h(f,"$iF")
if(typeof j!=="number")return j.ag()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.n(P.p(b7+o+b8))
H.h(e,"$iM")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.n(P.p(b7+o+b8))
H.h(d,"$iM")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.n(P.p(b7+o+b8))
H.h(c,"$iM")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.ch(m,g,f,a0,a,b))}b5.c5.k(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.c6=new H.H([r,A.ap])
b5.c7=new H.H([r,[P.u,A.ci]])
for(r=[A.ci],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ag()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.n(P.p(b7+a1+b8))
H.h(m,"$iF")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.n(P.p(b7+a1+b8))
H.h(g,"$iF")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.n(P.p(b7+a1+b8))
H.h(f,"$iF")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.n(P.p(b7+a1+b8))
H.h(m,"$iF")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.n(P.p(b7+a1+b8))
H.h(g,"$iF")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.n(P.p(b7+o+b8))
H.h(f,"$iT")
a5=f}else a5=b6
h.push(new A.ci(a4,a3,a2,m,g,a5))}b5.c7.k(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.c8=new H.H([r,A.ap])
b5.c9=new H.H([r,[P.u,A.cj]])
for(r=[A.cj],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.n(P.p(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.n(P.p(b7+o+b8))
H.h(f,"$iF")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.n(P.p(b7+o+b8))
H.h(e,"$ibC")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.n(P.p(b7+o+b8))
H.h(e,"$ibD")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.n(P.p(b7+o+b8))
H.h(e,"$ibD")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.n(P.p(b7+o+b8))
H.h(d,"$ibf")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.n(P.p(b7+o+b8))
H.h(e,"$iM")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.n(P.p(b7+o+b8))
H.h(d,"$iM")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.n(P.p(b7+o+b8))
H.h(c,"$iM")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cj(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.c9.k(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.ca=new H.H([r,A.ap])
b5.cb=new H.H([r,[P.u,A.ck]])
for(r=[A.ck],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.n(P.p(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.n(P.p(b7+o+b8))
H.h(f,"$iF")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.n(P.p(b7+o+b8))
H.h(e,"$iF")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.n(P.p(b7+o+b8))
H.h(d,"$iF")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.n(P.p(b7+o+b8))
H.h(c,"$iF")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.n(P.p(b7+o+b8))
H.h(a9,"$iM")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.n(P.p(b7+o+b8))
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
if(d==null)H.n(P.p(b7+a1+b8))
H.h(d,"$ibf")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.n(P.p(b7+a1+b8))
H.h(d,"$iM")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.n(P.p(b7+a1+b8))
H.h(c,"$iM")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.n(P.p(b7+a1+b8))
H.h(d,"$iM")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.n(P.p(b7+a1+b8))
H.h(c,"$iM")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.n(P.p(b7+a1+b8))
H.h(a9,"$iM")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.n(P.p(b7+a1+b8))
H.h(d,"$iT")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.n(P.p(b7+o+b8))
H.h(d,"$iT")
a7=d}else a7=b6
h.push(new A.ck(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cb.k(0,j,h)
q=b5.ca
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.p(b7+o+b8))
q.k(0,j,m)}}}},
ad:function(a,b){if(b!=null&&b.d)a.cr(b)},
h3:function(a,b){}}
A.cJ.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cQ.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.de.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dm.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fW.prototype={
i:function(a){return this.b2}}
A.ch.prototype={}
A.ci.prototype={}
A.cj.prototype={}
A.ck.prototype={}
A.dk.prototype={
be:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bq:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cM(b,35633)
r.f=r.cM(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.n(P.p("Failed to link shader: "+H.e(s)))}r.h5()
r.h7()},
X:function(a){a.a.useProgram(this.r)
this.x.hx()},
cM:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.p("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h5:function(){var u,t,s,r=this,q=H.b([],[A.cI]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.j(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cI(p,t.name,s))}r.x=new A.eG(q)},
h7:function(){var u,t,s,r=this,q=H.b([],[A.dz]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.j(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hu(t.type,t.size,t.name,s))}r.y=new A.ii(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.kj(u,this.r,b,a,c)},
eH:function(a,b,c){var u=this.a
if(a===1)return new A.T(u,b,c)
else return A.kj(u,this.r,b,a,c)},
eI:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kj(u,this.r,b,a,c)},
bj:function(a,b){return new P.dO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.aL(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.bf(u.a,c,d)
case 35667:return new A.ie(u.a,c,d)
case 35668:return new A.ig(u.a,c,d)
case 35669:return new A.ih(u.a,c,d)
case 35674:return new A.ij(u.a,c,d)
case 35675:return new A.bC(u.a,c,d)
case 35676:return new A.W(u.a,c,d)
case 35678:return u.eH(b,c,d)
case 35680:return u.eI(b,c,d)
case 35670:throw H.d(u.bj("BOOL",c))
case 35671:throw H.d(u.bj("BOOL_VEC2",c))
case 35672:throw H.d(u.bj("BOOL_VEC3",c))
case 35673:throw H.d(u.bj("BOOL_VEC4",c))
default:throw H.d(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.br.prototype={
i:function(a){return this.b}}
A.i_.prototype={
ep:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bq(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mW(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.K(0,"txtCount"),"$iap")
p.ch=H.h(p.y.K(0,"backClr"),"$ibf")
p.cx=H.b([],[A.T])
p.cy=H.b([],[A.W])
u=[A.aL]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.ap])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iT"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iW"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iaL"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iaL"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iaL"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iaL"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.n(P.p(o+r+n))
u.push(H.h(q,"$iap"))}}}
A.dz.prototype={}
A.ii.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.h(0,b)
if(u==null)throw H.d(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ap.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.aL.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.F.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bf.prototype={
eg:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
ef:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.bC.prototype={
a8:function(a){var u=new Float32Array(H.bK(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.W.prototype={
a8:function(a){var u=new Float32Array(H.bK(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.T.prototype={
cr:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jq.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ce(s.b,b).ce(s.d.ce(s.c,b),c)
a.saa(0,new V.R(r.a,r.b,r.c))
a.se5(r.B(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
a.sd9(new V.aE(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
t.f.$3(a,b,c)}}
F.jT.prototype={
$2:function(a,b){return 0}}
F.jU.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.j(s)
u=a.f
t=new V.E(u.a,u.b,u.c)
s=t.B(0,Math.sqrt(t.G(t))).m(0,this.b+s)
a.saa(0,new V.R(s.a,s.b,s.c))}}
F.jD.prototype={
$2:function(a,b){return 0}}
F.jE.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.saa(0,new V.R(s,r,this.a.a.$2(b,c)))
u=new V.E(s,r,1)
a.se5(u.B(0,Math.sqrt(u.G(u))))
u=1-b
t=1-c
a.sd9(new V.aE(b*c,2+u*c,4+b*t,6+u*t))}}
F.b4.prototype={
b0:function(){var u=this
if(!u.gb1()){C.b.E(u.a.a.d.b,u)
u.a.a.a4()}u.bO()
u.bP()
u.fY()},
bS:function(a){this.a=a
a.d.b.push(this)},
bT:function(a){this.b=a
a.d.c.push(this)},
h4:function(a){this.c=a
a.d.d.push(this)},
bO:function(){var u=this.a
if(u!=null){C.b.E(u.d.b,this)
this.a=null}},
bP:function(){var u=this.b
if(u!=null){C.b.E(u.d.c,this)
this.b=null}},
fY:function(){var u=this.c
if(u!=null){C.b.E(u.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
eB:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cl()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dM())return
return s.B(0,Math.sqrt(s.G(s)))},
eD:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.D(0,q)
r=new V.E(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.G(r)))
r=t.D(0,q)
r=new V.E(r.a,r.b,r.c)
r=s.b_(r.B(0,Math.sqrt(r.G(r))))
return r.B(0,Math.sqrt(r.G(r)))},
bZ:function(){var u,t=this
if(t.d!=null)return!0
u=t.eB()
if(u==null){u=t.eD()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cl()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dM())return
return s.B(0,Math.sqrt(s.G(s)))},
eC:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.D(0,g)
l=new V.E(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.D(0,g)
k=l.c
if(typeof k!=="number")return k.m()
k=new V.R(l.a*p,l.b*p,k*p).w(0,g).D(0,j)
k=new V.E(k.a,k.b,k.c)
q=k.B(0,Math.sqrt(k.G(k)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.G(l)))
l=o.b_(q)
l=l.B(0,Math.sqrt(l.G(l))).b_(o)
q=l.B(0,Math.sqrt(l.G(l)))}return q},
bX:function(){var u,t=this
if(t.e!=null)return!0
u=t.eA()
if(u==null){u=t.eC()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
ghq:function(a){var u=this
if(J.z(u.a,u.b))return!0
if(J.z(u.b,u.c))return!0
if(J.z(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this
if(s.gb1())return a+"disposed"
u=a+C.a.ap(J.ab(s.a.e),0)+", "+C.a.ap(J.ab(s.b.e),0)+", "+C.a.ap(J.ab(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.fm.prototype={}
F.hJ.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.c0.prototype={
b0:function(){var u=this
if(!u.gb1()){C.b.E(u.a.a.c.b,u)
u.a.a.a4()}u.bO()
u.bP()},
bS:function(a){this.a=a
a.c.b.push(this)},
bT:function(a){this.b=a
a.c.c.push(this)},
bO:function(){var u=this.a
if(u!=null){C.b.E(u.c.b,this)
this.a=null}},
bP:function(){var u=this.b
if(u!=null){C.b.E(u.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gb1())return a+"disposed"
return a+C.a.ap(J.ab(this.a.e),0)+", "+C.a.ap(J.ab(this.b.e),0)},
O:function(){return this.H("")}}
F.fH.prototype={}
F.ic.prototype={
b5:function(a,b,c){var u,t=b.a
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
F.cb.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ap(J.ab(u.e),0)},
O:function(){return this.H("")}}
F.hC.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.C():u},
cf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){r=g[s]
h.a.l(0,r.hs())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.cb()
if(n.a==null)H.n(P.p("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.C(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.mp(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bV(l,k,i)}g=h.e
if(g!=null)g.af(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.af(0)
return u},
hj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.c(p,u)
o=p[u]
p=o.y
n=C.d.b3(p.a*q)
p=p.b
if(typeof r!=="number")return r.D()
m=C.d.b3(p*(r-1))
n=n>=0?C.c.av(n,c):c+C.c.av(n,c)
l=(n+(m>=0?C.c.av(m,r):r+C.c.av(m,r))*c)*4
if(l<0||l>=s)return H.c(t,l)
p=t[l]
k=l+1
if(k>=s)return H.c(t,k)
k=t[k]
j=l+2
if(j>=s)return H.c(t,j)
j=t[j]
i=l+3
if(i>=s)return H.c(t,i)
p/=255
k/=255
j/=255
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.w()
k=new V.R(g+j*h,f+i*h,e+k*h)
if(!J.z(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}c=d.e
if(c!=null)c.af(0)},
ik:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.c(s,u)
r=s[u]
if((t&$.a1().a)===0)r.f=null
if((t&$.as().a)===0)r.r=null
if((t&$.aO().a)===0)r.x=null
if((t&$.ai().a)===0)r.y=null
if((t&$.b_().a)===0)r.z=null
if((t&$.kD().a)===0)r.Q=null
if((t&$.bn().a)===0)r.ch=0
if((t&$.aN().a)===0)r.cx=null}q=this.e
if(q!=null)q.af(0)},
ij:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.c(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.af(0)},
hM:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.bl(o,0)])
for(o=[F.bg];u.length!==0;){t=C.b.ghC(u)
C.b.cl(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){s.push(q)
C.b.cl(u,r)}}if(s.length>1)b.cf(s)}}p.a.v()
p.c.cm()
p.d.cm()
p.b.i5()
p.c.cn(new F.ic())
p.d.cn(new F.hJ())
o=p.e
if(o!=null)o.af(0)},
bm:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a1()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.as().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.ai().a)!==0)++s
if((t&$.b_().a)!==0)++s
if((t&$.cD().a)!==0)++s
if((t&$.cE().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.aN().a)!==0)++s
r=a4.gct(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.I])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cK])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hk(m)
k=l.gct(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cK(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].hL(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bK(p)),35044)
u.bindBuffer(a1,null)
c=new Z.aP(new Z.dF(a1,d),o,a4)
c.b=H.b([],[Z.bu])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)}a=Z.kn(u,34963,b)
c.b.push(new Z.bu(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)}a=Z.kn(u,34963,b)
c.b.push(new Z.bu(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.v()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.v()
b.push(t.e)}a=Z.kn(u,34963,b)
c.b.push(new Z.bu(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.q(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.C(null)}}
F.hD.prototype={
hh:function(a){var u,t,s,r,q=H.b([],[F.b4]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.bV(p,s,r))}return q},
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b4])
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
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bV(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bV(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bV(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bV(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
cn:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b5(0,p,n)){p.b0()
break}}}}},
cm:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.ghq(s)
if(t)s.b0()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bZ())s=!1
return s},
bY:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bX())s=!1
return s},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(a))
return C.b.q(r,"\n")},
O:function(){return this.H("")}}
F.hE.prototype={
gj:function(a){return this.b.length},
cn:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b5(0,p,n)){p.b0()
break}}}}},
cm:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.z(s.a,s.b)
if(t)s.b0()}},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.b([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.q(s,"\n")},
O:function(){return this.H("")}}
F.hF.prototype={
gj:function(a){return this.b.length},
i5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.C(null)}s=t.a
if(s!=null){C.b.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(a))
return C.b.q(r,"\n")},
O:function(){return this.H("")}}
F.bg.prototype={
c3:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iz(u.cx,r,o,t,s,q,p,a,n)},
hs:function(){return this.c3(null)},
saa:function(a,b){var u
if(!J.z(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
se5:function(a){var u
if(!J.z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
sd9:function(a){var u
if(!J.z(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
hL:function(a){var u,t,s=this
if(a.p(0,$.a1())){u=s.f
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.as())){u=s.r
t=[P.I]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aO())){u=s.x
t=[P.I]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ai())){u=s.y
t=[P.I]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.b_())){u=s.z
t=[P.I]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cD())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cE())){u=s.Q
t=[P.I]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bn()))return H.b([s.ch],[P.I])
else if(a.p(0,$.aN())){u=s.cx
t=[P.I]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.I])},
bZ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cl()
t.d.I(0,new F.iK(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.af(0)}return!0},
bX:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cl()
t.d.I(0,new F.iJ(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.af(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.r])
q.push(C.a.ap(J.ab(s.e),0))
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
t=C.b.q(q,", ")
return a+"{"+t+"}"},
O:function(){return this.H("")}}
F.iK.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iJ.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iA.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.p("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a4()
return!0},
bk:function(a,b,c,d,e,f){var u=F.iz(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bZ()
return!0},
bY:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bX()
return!0},
hp:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.O()},
H:function(a){var u,t,s,r
this.v()
u=H.b([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].H(a))
return C.b.q(u,"\n")},
O:function(){return this.H("")}}
F.iB.prototype={
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
I:function(a,b){var u=this
C.b.I(u.b,b)
C.b.I(u.c,new F.iC(u,b))
C.b.I(u.d,new F.iD(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(""))
return C.b.q(r,"\n")}}
F.iC.prototype={
$1:function(a){if(!J.z(a.a,this.a))this.b.$1(a)}}
F.iD.prototype={
$1:function(a){var u=this.a
if(!J.z(a.a,u)&&!J.z(a.b,u))this.b.$1(a)}}
F.iE.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(""))
return C.b.q(r,"\n")}}
F.iG.prototype={}
F.iF.prototype={
b5:function(a,b,c){return J.z(b.f,c.f)}}
F.iH.prototype={}
F.hj.prototype={
cf:function(a){var u,t,s,r,q,p,o,n,m,l,k=V.cl()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=k.a
q=s.a
p=k.b
o=s.b
n=k.c
s=s.c
if(typeof n!=="number")return n.w()
if(typeof s!=="number")return H.j(s)
k=new V.E(r+q,p+o,n+s)}}k=k.B(0,Math.sqrt(k.G(k)))
for(u=a.length,s=k==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){m=a[t]
if(s)l=null
else{r=k.a
q=k.b
p=k.c
if(typeof p!=="number")return p.m()
l=k.B(0,Math.sqrt(r*r+q*q+p*p))}if(!J.z(m.r,l)){m.r=l
r=m.a
if(r!=null){r=r.e
if(r!=null)r.C(null)}}}return}}
F.iI.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.b([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].H(""))
return C.b.q(r,"\n")}}
O.f9.prototype={
gn:function(){var u=this.r
return u==null?this.r=D.C():u},
A:function(a){var u=this.r
if(u!=null)u.C(a)},
ab:function(a,b){},
bx:function(a,b){var u,t,s,r,q=this,p="GreyViewDepth",o=q.a
if(o==null){u=a.fr.h(0,p)
if(u==null){o=a.a
u=new A.fa(o,p)
u.be(o,p)
u.bq(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n","precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n".charCodeAt(0)==0?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"width"),"$iM")
u.ch=H.h(u.y.h(0,"stop"),"$iM")
u.cx=H.h(u.y.h(0,"viewObjMat"),"$iW")
u.cy=H.h(u.y.h(0,"projMat"),"$iW")
a.bl(u)}q.a=u
o=u}t=b.e
if((!(t instanceof Z.aP)?b.e=null:t)==null){o=b.d.bm(new Z.bG(a.a),$.a1())
t=o.al($.a1())
s=q.a
t.e=s.z.c
b.e=o
o=s}o.X(a)
t=q.b
s=q.c
r=o.Q
r.a.uniform1f(r.d,t-s)
s=q.c
t=o.ch
t.a.uniform1f(t.d,s)
s=a.cy
s=s.ga7(s)
t=o.cy
t.toString
t.a8(s.a5(0,!0))
s=a.gea()
o=o.cx
o.toString
o.a8(s.a5(0,!0))
o=b.e
o.X(a)
o.a0(a)
o.az(a)
o=q.a
o.toString
a.a.useProgram(null)
o.x.bn()}}
O.cX.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.C():u},
A:function(a){var u=this.x
if(u!=null)u.C(a)},
aj:function(){return this.A(null)},
sbW:function(a){var u=this.r
if(!(Math.abs(u-a)<$.x().a)){this.r=a
u=new D.o("blurValue",u,a)
u.b=!0
this.A(u)}},
sdf:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gn().E(0,t.ga6())
u=t.e
t.e=a
if(a!=null)a.gn().l(0,t.ga6())
s=new D.o("colorTexture",u,t.e)
s.b=!0
t.A(s)}},
saZ:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gn().E(0,s.ga6())
u=s.f
s.f=a
if(a!=null)a.gn().l(0,s.ga6())
r=new D.o("blurTexture",u,s.f)
t=r.b=!0
s.A(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.A(null)}}},
sco:function(a){var u,t=this,s=$.kW
if(s==null){s=new V.d7(1,0,0,0,1,0,0,0,1)
$.kW=s
a=s}else a=s
if(!J.z(t.b,a)){u=t.b
t.b=a
s=new D.o("textureMatrix",u,a)
s.b=!0
t.A(s)}},
sbV:function(a){var u,t,s=this
if(a==null)a=V.lm()
if(!J.z(s.c,a)){u=s.c
s.c=a
t=new D.o("blurAdjust",u,a)
t.b=!0
s.A(t)}},
ab:function(a,b){},
a9:function(a,b){if(b!=null)if(!C.b.a3(a,b)){b.a=a.length
a.push(b)}},
bx:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=a.fr.h(0,t)
if(s==null){g=a.a
s=new A.fu(g,t)
s.be(g,t)
r=s.z=new A.fv(u,t)
q=new P.N("")
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
r.aJ(q,3,H.b([0.75],g),H.b([0.5],g))
r.aJ(q,6,H.b([0.42857,2.14286],g),H.b([0.41667,0.08333],g))
r.aJ(q,9,H.b([0,1.8],g),H.b([0.5122,0.2439],g))
r.aJ(q,12,H.b([0,1.38462,3.23077],g),H.b([0.22703,0.31622,0.07027],g))
r.aJ(q,15,H.b([0.9375,2.8125],g),H.b([0.36184,0.13816],g))
r.aJ(q,18,H.b([0.47368,2.36842,4.26316],g),H.b([0.29916,0.16318,0.03766],g))
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
s.bq(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.h(0,"posAttr")
s.ch=s.x.h(0,"txtAttr")
s.cx=H.h(s.y.h(0,"projViewObjMat"),"$iW")
s.cy=H.h(s.y.h(0,"txt2DMat"),"$ibC")
s.dy=H.h(s.y.h(0,"colorTxt"),"$iT")
s.dx=H.h(s.y.h(0,"blurScale"),"$iaL")
g=s.y
if(u){s.fr=H.h(g.h(0,"blurTxt"),"$iT")
s.db=H.h(s.y.h(0,"blurAdj"),"$ibf")}else s.fx=H.h(g.h(0,"blurValue"),"$iM")
a.bl(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.aP)?b.e=null:g)==null){g=b.d
p=$.a1()
o=$.ai()
o=g.bm(new Z.bG(a.a),new Z.aq(p.a|o.a))
o.al($.a1()).e=h.a.Q.c
o.al($.ai()).e=h.a.ch.c
b.e=o}n=H.b([],[T.bz])
h.a9(n,h.e)
g=r.a
if(g)h.a9(n,h.f)
for(m=0;m<n.length;++m)n[m].X(a)
p=h.a
p.X(a)
o=h.e
p.ad(p.dy,o)
o=h.b
l=p.cy
l.toString
l.a8(o.a5(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.B()
o=o.b
j=a.d
if(typeof o!=="number")return o.B()
i=p.dx
i.a.uniform2f(i.d,l/k,o/j)
j=a.ge0()
p=p.cx
p.toString
p.a8(j.a5(0,!0))
p=h.a
if(g){g=h.f
p.ad(p.fr,g)
g=h.c
p.db.eg(g)}else{g=h.r
p=p.fx
p.a.uniform1f(p.d,g)}g=b.e
if(g instanceof Z.aP){g.X(a)
g.a0(a)
g.az(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.bn()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.d6.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.C():u},
A:function(a){var u=this.fr
if(u!=null)u.C(a)},
aj:function(){return this.A(null)},
cX:function(a){this.a=null
this.A(a)},
h1:function(){return this.cX(null)},
f2:function(a,b){var u=new D.b5()
u.b=!0
this.A(u)},
f4:function(a,b){var u=new D.b6()
u.b=!0
this.A(u)},
cK:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gae()
o=u.h(0,q.gae())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cJ])
u.I(0,new O.h_(g,n))
C.b.aV(n,new O.h0())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gae()
o=m.h(0,q.gae())
m.k(0,p,o==null?1:o)}l=H.b([],[A.cQ])
m.I(0,new O.h1(g,l))
C.b.aV(l,new O.h2())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gae()
o=k.h(0,q.gae())
k.k(0,p,o==null?1:o)}j=H.b([],[A.de])
k.I(0,new O.h3(g,j))
C.b.aV(j,new O.h4())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.q)(f),++r){q=f[r]
s=q.gae()
p=i.h(0,q.gae())
i.k(0,s,p==null?1:p)}h=H.b([],[A.dm])
i.I(0,new O.h5(g,h))
C.b.aV(h,new O.h6())
f=C.c.a2(g.e.a.length+3,4)
g.dy.e
return A.mx(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a9:function(a,b){if(b!=null)if(!C.b.a3(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a2(u,u.length);u.u();){t=u.d
t.toString
s=$.c5
t.a=s==null?$.c5=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aA(0,b,t)}},
bx:function(a8,a9){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a6.a
if(a7==null){a7=a6.cK()
u=a8.fr.h(0,a7.b2)
if(u==null){u=A.mw(a7,a8.a)
a8.bl(u)}a7=a6.a=u
a9.e=null}t=a7.z
s=t.bo
a7=a9.e
if(!(a7 instanceof Z.aP))a7=a9.e=null
if(a7==null||!a7.d.p(0,s)){a7=t.k4
if(a7)a9.d.as()
r=t.r1
if(r){q=a9.d
p=q.e
if(p!=null)++p.d
q.d.bY()
q.a.bY()
q=q.e
if(q!=null)q.af(0)}q=t.rx
if(q){p=a9.d
o=p.e
if(o!=null)++o.d
p.a.hp()
p=p.e
if(p!=null)p.af(0)}n=a9.d.bm(new Z.bG(a8.a),s)
n.al($.a1()).e=a6.a.Q.c
if(a7)n.al($.as()).e=a6.a.cx.c
if(r)n.al($.aO()).e=a6.a.ch.c
if(t.r2)n.al($.ai()).e=a6.a.cy.c
if(q)n.al($.b_()).e=a6.a.db.c
if(t.ry)n.al($.aN()).e=a6.a.dx.c
a9.e=n}m=H.b([],[T.bz])
a6.a.X(a8)
if(t.fr){a7=a6.a
r=a8.dx
r=r.ga7(r)
a7=a7.dy
a7.toString
a7.a8(r.a5(0,!0))}if(t.fx){a7=a6.a
r=a8.gea()
a7=a7.fr
a7.toString
a7.a8(r.a5(0,!0))}a7=a6.a
r=a8.ge0()
a7=a7.fy
a7.toString
a7.a8(r.a5(0,!0))
if(t.go){a7=a6.a
r=a8.db
r=r.ga7(r)
a7=a7.fx
a7.toString
a7.a8(r.a5(0,!0))}if(t.x1){a7=a6.a
r=a6.b
a7=a7.k1
a7.toString
a7.a8(C.j.a5(r,!0))}if(t.x2){a7=a6.a
r=a6.c
a7=a7.k2
a7.toString
a7.a8(C.j.a5(r,!0))}if(t.y1){a7=a6.a
r=a6.d
a7=a7.k3
a7.toString
a7.a8(C.j.a5(r,!0))}if(t.aR>0){l=a6.e.a.length
a7=a6.a.k4
a7.a.uniform1i(a7.d,l)
for(k=0;k<l;++k){a7=a6.a
r=a6.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
a7=a7.r1
if(k>=a7.length)return H.c(a7,k)
a7=a7[k]
j=new Float32Array(H.bK(r.a5(0,!0)))
a7.a.uniformMatrix4fv(a7.d,!1,j)}}a7=t.a
if(a7.a){r=a6.a
q=a6.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.f.d)
a7=a6.a
r=a6.f.d
a7.ad(a7.rx,r)}if(t.k1){a7=t.b
if(a7.a){r=a6.a
q=a6.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.r.d)
a7=a6.a
r=a6.r.d
a7.ad(a7.x2,r)}a7=t.c
if(a7.a){r=a6.a
q=a6.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.x.d)
a7=a6.a
r=a6.x.d
a7.ad(a7.aR,r)}a7=t.d
if(a7.a){r=a6.a
q=a6.y.f
r=r.bo
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.y.d)
a7=a6.a
r=a6.y.d
a7.ad(a7.dn,r)}a7=t.e
r=a7.a
if(r||a7.b||!1){q=a6.a
p=a6.z.ch
q=q.ds
q.a.uniform1f(q.d,p)}if(r){r=a6.a
q=a6.z.f
r=r.dq
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.z.d)
a7=a6.a
r=a6.z.d
a7.ad(a7.dr,r)}a7=t.z
if(a7.length>0){r=P.v
i=new H.H([r,r])
for(r=a6.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
f=g.gae()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.bQ(a6.a.c5.h(0,f),e)
p=g.gis()
o=$.aD
p=p.bc(o==null?$.aD=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giw()
o=$.aD
p=p.bc(o==null?$.aD=new V.R(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaP(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.ghy()){p=g.ghl()
o=d.e
o.a.uniform1f(o.d,p)
p=g.ghm()
o=d.f
o.a.uniform1f(o.d,p)
p=g.ghn()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,H.q)(a7),++h){q=a7[h].a
l=i.h(0,q)
if(l==null)l=0
q=a6.a.c4.h(0,q)
q.a.uniform1i(q.d,l)}}a7=t.Q
if(a7.length>0){r=a8.db
c=r.ga7(r)
r=P.v
b=new H.H([r,r])
for(r=a6.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
f=g.gae()
e=b.h(0,f)
if(e==null)e=0
b.k(0,f,e+1)
d=J.bQ(a6.a.c7.h(0,f),e)
p=g.gdi(g)
o=C.d.m(c.a,p.gdj(p))+C.d.m(c.b,p.gdk(p))+C.d.m(c.c,p.gdl())
a=C.d.m(c.e,p.gdj(p))+C.d.m(c.f,p.gdk(p))+C.d.m(c.r,p.gdl())
a0=c.y
a1=p.gdj(p)
if(typeof a0!=="number")return a0.m()
a1=C.d.m(a0,a1)
a0=c.z
a2=p.gdk(p)
if(typeof a0!=="number")return a0.m()
a2=C.d.m(a0,a2)
a0=c.Q
p=p.gdl()
if(typeof a0!=="number")return a0.m()
p=a1+a2+C.d.m(a0,p)
p=new V.E(o,a,p).B(0,Math.sqrt(o*o+a*a+p*p))
a=d.e
o=p.a
a0=p.b
p=p.c
a.a.uniform3f(a.d,o,a0,p)
p=g.gaP(g)
a0=d.f
a0.a.uniform3f(a0.d,p.a,p.b,p.c)
g.gaU()
p=g.gdi(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gil()
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gby(g)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaU()
if(!C.b.a3(m,p)){p.a=m.length
m.push(p)}p=g.gaU()
o=p.gdN(p)
if(o){o=d.r
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}}for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,H.q)(a7),++h){q=a7[h].a
l=b.h(0,q)
if(l==null)l=0
q=a6.a.c6.h(0,q)
q.a.uniform1i(q.d,l)}}a7=t.ch
if(a7.length>0){r=a8.db
c=r.ga7(r)
r=P.v
a3=new H.H([r,r])
for(r=a6.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
f=g.gae()
e=a3.h(0,f)
if(e==null)e=0
a3.k(0,f,e+1)
d=J.bQ(a6.a.c9.h(0,f),e)
a4=c.m(0,g.a)
p=g.a
o=$.aD
p=p.bc(o==null?$.aD=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aD
p=a4.bc(p==null?$.aD=new V.R(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.c
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.r
o=d.y
o.a.uniform1f(o.d,p)
p=g.x
o=d.z
o.a.uniform1f(o.d,p)
p=g.y
o=d.Q
o.a.uniform1f(o.d,p)}for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,H.q)(a7),++h){q=a7[h].a
l=a3.h(0,q)
if(l==null)l=0
q=a6.a.c8.h(0,q)
q.a.uniform1i(q.d,l)}}a7=t.cx
if(a7.length>0){r=a8.db
c=r.ga7(r)
r=P.v
a5=new H.H([r,r])
for(r=a6.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.q)(r),++h){g=r[h]
f=g.gae()
e=a5.h(0,f)
if(e==null)e=0
a5.k(0,f,e+1)
d=J.bQ(a6.a.cb.h(0,f),e)
p=g.gi3(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gdi(g).iH()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bc(g.gi3(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaP(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaU()
p=g.gil()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gby(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giI()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giJ()
o=d.y
o.a.uniform1f(o.d,p)
g.gaU()
p=g.gaU()
if(!C.b.a3(m,p)){p.a=m.length
m.push(p)}p=g.gaU()
o=p.gdN(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gcs()
p=g.gir()
o=d.z
o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=g.gcs()
if(!C.b.a3(m,p)){p.a=m.length
m.push(p)}p=g.gcs()
o=p.gdN(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.giv()){p=g.giu()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.git()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.ghy()){p=g.ghl()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.ghm()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.ghn()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=a7.length,h=0;h<a7.length;a7.length===r||(0,H.q)(a7),++h){q=a7[h].a
l=a5.h(0,q)
if(l==null)l=0
q=a6.a.ca.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a6.a9(m,a6.Q.d)
a7=a6.a
r=a6.Q.d
a7.ad(a7.dt,r)}if(t.dy){a7=a6.a
r=a8.Q
if(r==null){r=a8.db
r=a8.Q=r.ga7(r).hJ(0)}a7=a7.id
a7.toString
a7.a8(r.a5(0,!0))}if(t.db){a6.a9(m,a6.ch)
a7=a6.a
r=a6.ch
a7.h3(a7.du,r)
a7=t.r
if(a7.a){r=a6.a
q=a6.cx.f
r=r.dv
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.cx.d)
a7=a6.a
r=a6.cx.d
a7.ad(a7.dw,r)}a7=t.x
r=a7.a
if(r||a7.b||!1){q=a6.a
p=a6.cy.ch
q=q.dz
q.a.uniform1f(q.d,p)}if(r){r=a6.a
q=a6.cy.f
r=r.dA
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(a7.b){a6.a9(m,a6.cy.d)
a7=a6.a
r=a6.cy.d
a7.ad(a7.dB,r)}}a7=t.y
r=a7.a
q=!r
if(!q||a7.b||!1){if(r){r=a6.a
p=a6.db.f
r=r.dC
r.a.uniform1f(r.d,p)}if(a7.b){a6.a9(m,a6.db.d)
r=a6.a
p=a6.db.d
r.ad(r.dD,p)}r=a8.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].X(a8)
r=a9.e
r.X(a8)
r.a0(a8)
r.az(a8)
if(!q||a7.b||!1)a8.a.disable(3042)
for(a7=a8.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a7.activeTexture(33984+r.a)
a7.bindTexture(3553,null)}}r=a6.a
r.toString
a7.useProgram(null)
r.x.bn()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cK().b2}}
O.h_.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cJ(a,C.c.a2(b+3,4)*4))}}
O.h0.prototype={
$2:function(a,b){return J.cF(a.a,b.a)}}
O.h1.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cQ(a,C.c.a2(b+3,4)*4))}}
O.h2.prototype={
$2:function(a,b){return J.cF(a.a,b.a)}}
O.h3.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.de(a,C.c.a2(b+3,4)*4))}}
O.h4.prototype={
$2:function(a,b){return J.cF(a.a,b.a)}}
O.h5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dm(a,C.c.a2(b+3,4)*4))}}
O.h6.prototype={
$2:function(a,b){return J.cF(a.a,b.a)}}
O.fU.prototype={
aD:function(){var u,t=this
t.cz()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.o(t.b,u,1)
u.b=!0
t.a.A(u)}}}
O.c3.prototype={
A:function(a){return this.a.A(a)},
aj:function(){return this.A(null)},
aD:function(){},
bi:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aD()
u=s.a
u.a=null
u.A(null)}},
sbz:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.bi(new A.Z(u.a,!1,!1))}else{u=s.c
if(!u.b)s.bi(new A.Z(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gn().E(0,s.ga6())
t=s.d
s.d=a
if(!r)a.gn().l(0,s.ga6())
r=new D.o(s.b+".texture2D",t,s.d)
r.b=!0
s.a.A(r)}}}
O.fV.prototype={}
O.ay.prototype={
cZ:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.o(s.b+".color",u,a)
t.b=!0
s.a.A(t)}},
aD:function(){this.cz()
this.cZ(new V.Y(1,1,1))},
saP:function(a,b){this.bi(new A.Z(!0,this.c.b,!1))
this.cZ(b)}}
O.fX.prototype={}
O.fY.prototype={
aD:function(){var u,t=this
t.cA()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.o(t.b+".refraction",u,1)
u.b=!0
t.a.A(u)}}}
O.fZ.prototype={
d0:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.o(u.b+".shininess",t,a)
t.b=!0
u.a.A(t)}},
aD:function(){this.cA()
this.d0(100)}}
O.dr.prototype={}
O.ds.prototype={
gn:function(){var u=this.e
return u==null?this.e=D.C():u},
A:function(a){var u=this.e
if(u!=null)u.C(a)},
aj:function(){return this.A(null)},
fi:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga6(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.b3()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.aj()},
fk:function(a,b){var u,t
for(u=b.gS(b),t=this.ga6();u.u();)u.gF(u).gn().E(0,t)
this.aj()},
sdc:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.o("blend",u,a)
u.b=!0
this.A(u)}},
ab:function(a,b){},
eN:function(a){a=C.c.a2(a+3,4)*4
if(a<=0)return 4
return a},
bx:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.eN(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.mV(i,u,a.a)
a.bl(s)}j.b=s
u=s}if(b.e==null){u=b.d.bm(new Z.bG(a.a),$.a1())
t=u.al($.a1())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.X(a)
q=H.b([],[T.bz])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.b.a3(q,u)){u.a=q.length
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
if(t==null){t=$.c5
if(t==null){t=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.c5=t}}l=new Float32Array(H.bK(t.a5(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.cf
if(t==null){t=V.ce(0,0,1,1)
$.cf=t
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
if(k==null){t=$.cf
if(t==null){t=V.ce(0,0,1,1)
$.cf=t
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
u.ch.ef(t)
for(o=0;o<q.length;++o)q[o].X(a)
u=b.e
if(u instanceof Z.aP){u.X(a)
u.a0(a)
u.az(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.bn()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.bd.prototype={
A:function(a){var u=this.f
if(u!=null)u.C(a)},
aj:function(){return this.A(null)}}
T.bz.prototype={}
T.hY.prototype={}
T.hZ.prototype={
d_:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.dm()}},
gn:function(){var u=this.y
return u==null?this.y=D.C():u},
X:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.i0.prototype={
bt:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=T.kh(q)
W.X(u,"load",new T.i1(this,t,u,!1,q,!1,!1),!1)
return t},
h2:function(a,b,c){var u,t,s,r
b=V.cB(b)
u=V.cB(a.width)
t=V.cB(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k3()
s.width=u
s.height=t
r=C.i.ed(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.o6(r.getImageData(0,0,s.width,s.height))}}}
T.i1.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.h2(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.y.ic(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.d_();++u.e}}
T.i2.prototype={
eM:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.cB()
u=C.c.a2(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.c(s,i)
g=s[i]
if(h<0||h>=r)return H.c(s,h)
s[i]=s[h]
s[h]=g}}}}}
X.eL.prototype={
gn:function(){var u=this.fr
return u==null?this.fr=D.C():u},
a_:function(a){var u=this.fr
if(u!=null)u.C(a)},
sar:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.o("width",u,b)
u.b=!0
t.a_(u)}},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.o("height",u,b)
u.b=!0
t.a_(u)}},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.m()
h.sar(0,C.d.Y(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.m()
h.sam(0,C.d.Y(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cB(s)
o=V.cB(r)
q=V.cB(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.y.e4(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kh(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.d_()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dm()
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
a.c=C.d.Y(s*h.a)
r=t.d
a.d=C.d.Y(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.j(k)
j=C.d.Y(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.j(l)
u.viewport(j,C.d.Y(t*l),C.d.Y(s*k),C.d.Y(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
az:function(a){a.a.bindFramebuffer(36160,null)}}
X.k2.prototype={}
X.ft.prototype={
gn:function(){var u=this.x
return u==null?this.x=D.C():u},
X:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.j(u)
q=C.d.Y(r*u)
r=s.b
if(typeof t!=="number")return H.j(t)
p=C.d.Y(r*t)
r=C.d.Y(s.c*u)
a.c=r
s=C.d.Y(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
az:function(a){}}
X.fx.prototype={
gn:function(){var u=this.b
return u==null?this.b=D.C():u}}
X.dd.prototype={
gn:function(){var u=this.f
return u==null?this.f=D.C():u},
a_:function(a){var u=this.f
if(u!=null)u.C(a)},
ex:function(){return this.a_(null)},
sb6:function(a){var u,t,s=this
if(!J.z(s.b,a)){u=s.b
if(u!=null)u.gn().E(0,s.gcF())
t=s.b
s.b=a
if(a!=null)a.gn().l(0,s.gcF())
u=new D.o("mover",t,s.b)
u.b=!0
s.a_(u)}}}
X.hU.prototype={}
V.eT.prototype={
d7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.kl().gbw().h(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.c(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.kG(l.c).l(0,p)
n=W.mj("checkbox")
n.checked=s
W.X(n,"change",new V.eU(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.kG(l.c).l(0,q.createElement("br"))
l.d.push(n)
if(r)l.d5(u,s)},
aY:function(a,b,c){return this.d7(a,b,c,!1)},
d5:function(a,b){var u,t,s,r,q,p=this.a,o=P.kl().gbw().h(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.hW(o,a-u+1,"0")
t=a>0?C.a.t(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.ah(o,u)
s=P.kl()
u=P.r
r=P.mr(s.gbw(),u,u)
r.k(0,p,t)
q=s.e1(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.ja([],[]).bB(""),"",u)}}
V.eU.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.d5(u.d,t.checked)}}
V.jS.prototype={
$1:function(a){var u=C.d.e6(this.a.ghG(),2)
if(u!=="0.00")P.kA(u+" fps")}}
V.hG.prototype={
eo:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.X(q,"scroll",new V.hI(o),!1)},
d8:function(a){var u,t,s,r,q,p,o,n
this.h6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hK(a),s.toString,r=new H.O(r),r=new P.ct(s.e7(new H.c1(r,r.gj(r))).a());r.u();){s=r.gF(r)
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
if(H.or(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.jm(C.S,s,C.e,!1)
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
hf:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.i5()
t=P.r
u.a=new H.H([t,L.dp])
u.b=new H.H([t,L.dw])
u.c=P.kU(t)
u.d=u.R(0,q)
t=u.R(0,q).q(0,p)
s=K.a0(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.R(0,p).q(0,p)
s=new K.aU()
r=[K.d5]
s.a=H.b([],r)
t.a.push(s)
t=K.a0(new H.O("*"))
s.a.push(t)
t=u.R(0,p).q(0,"BoldEnd")
s=K.a0(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.R(0,q).q(0,o)
s=K.a0(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.R(0,o).q(0,o)
s=new K.aU()
s.a=H.b([],r)
t.a.push(s)
t=K.a0(new H.O("_"))
s.a.push(t)
t=u.R(0,o).q(0,n)
s=K.a0(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.R(0,q).q(0,m)
s=K.a0(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.R(0,m).q(0,m)
s=new K.aU()
s.a=H.b([],r)
t.a.push(s)
t=K.a0(new H.O("`"))
s.a.push(t)
t=u.R(0,m).q(0,"CodeEnd")
s=K.a0(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.R(0,q).q(0,l)
s=K.a0(new H.O("["))
t.a.push(s)
t.c=!0
t=u.R(0,l).q(0,k)
s=K.a0(new H.O("|"))
t.a.push(s)
s=u.R(0,l).q(0,j)
t=K.a0(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.R(0,l).q(0,l)
t=new K.aU()
t.a=H.b([],r)
s.a.push(t)
s=K.a0(new H.O("|]"))
t.a.push(s)
s=u.R(0,k).q(0,j)
t=K.a0(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.R(0,k).q(0,k)
t=new K.aU()
t.a=H.b([],r)
s.a.push(t)
s=K.a0(new H.O("|]"))
t.a.push(s)
u.R(0,q).q(0,i).a.push(new K.eD())
s=u.R(0,i).q(0,i)
t=new K.aU()
t.a=H.b([],r)
s.a.push(t)
s=K.a0(new H.O("*_`["))
t.a.push(s)
s=u.R(0,"BoldEnd")
s.d=s.a.bb(p)
s=u.R(0,n)
s.d=s.a.bb(o)
s=u.R(0,"CodeEnd")
s.d=s.a.bb(m)
s=u.R(0,j)
s.d=s.a.bb("Link")
s=u.R(0,i)
s.d=s.a.bb(i)
this.b=u}}
V.hI.prototype={
$1:function(a){P.l9(C.p,new V.hH(this.a))}}
V.hH.prototype={
$0:function(){var u=C.d.Y(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
K.jK.prototype={
$1:function(a){var u,t,s,r,q,p=this.c,o=this.b.f.a,n=p.r,m=p.x
if(typeof m!=="number")return m.D()
u=m-m-0
o.bindFramebuffer(36160,o.createFramebuffer())
o.readBuffer(36064)
o.framebufferTexture2D(36160,36064,3553,p.b,0)
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return H.j(m)
t=new Uint8Array(n*m*4)
o.readPixels(0,u,n,m,6408,5121,t)
o.bindFramebuffer(36160,null)
s=new T.i2(t,n,m)
s.eM()
r=F.of(150,150)
p=this.a
p.a=r
r.as()
p.a.hj(s,0.05)
o=p.a
q=$.as()
q.toString
o.ik(new Z.aq($.kC().a&~q.a))
p.a.ij(!1)
p.a.as()}}
K.jL.prototype={
$1:function(a){var u=this.a,t=u.r
t.sbz(a?this.b:null)
u=u.x
u.sbz(a?this.b:null)}}
K.jM.prototype={
$1:function(a){var u=this.a.z
u.sbz(a?this.b:null)}}
K.jN.prototype={
$1:function(a){var u=this.a.Q
u.sbz(a?this.b:null)}}
K.jO.prototype={
$1:function(a){var u=a?this.a.a:this.c
this.b.sbD(0,u)}}
K.jP.prototype={
$1:function(a){var u=this.a,t=a?this.b.ch:null
u.d.saZ(t)
u.f.saZ(t)}}
K.jQ.prototype={
$1:function(a){var u=a?this.b:null
this.a.saq(u)}};(function aliases(){var u=J.a.prototype
u.ej=u.i
u=J.d1.prototype
u.ek=u.i
u=K.cY.prototype
u.ei=u.aS
u.cw=u.i
u=O.c3.prototype
u.cz=u.aD
u=O.ay.prototype
u.cA=u.aD})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"nw","mm",21)
t(P,"o0","n6",8)
t(P,"o1","n7",8)
t(P,"o2","n8",8)
s(P,"lA","nZ",10)
var m
r(m=E.aw.prototype,"gdV",0,0,null,["$1","$0"],["dW","hU"],0,0)
r(m,"gdX",0,0,null,["$1","$0"],["dY","hV"],0,0)
r(m,"gdT",0,0,null,["$1","$0"],["dU","hT"],0,0)
r(m,"gdR",0,0,null,["$1","$0"],["dS","hQ"],0,0)
q(m,"ghO","hP",4)
q(m,"ghR","hS",4)
r(m=E.dt.prototype,"gcC",0,0,null,["$1","$0"],["cE","cD"],0,0)
p(m,"gi8","e2",10)
o(m=X.dC.prototype,"gfl","fm",5)
o(m,"gf5","f6",5)
o(m,"gfb","fc",2)
o(m,"gfp","fq",11)
o(m,"gfn","fo",11)
o(m,"gfu","fv",2)
o(m,"gfA","fB",2)
o(m,"gff","fg",2)
o(m,"gfw","fz",2)
o(m,"gfd","fe",2)
o(m,"gfC","fD",19)
o(m,"gfE","fF",5)
o(m,"gfU","fV",6)
o(m,"gfQ","fR",6)
o(m,"gfS","fT",6)
r(m=D.d3.prototype,"gcU",0,0,null,["$1","$0"],["cV","fs"],0,0)
o(m,"gfG","fH",20)
q(m,"gf_","f0",12)
q(m,"gfK","fL",12)
r(D.bw.prototype,"geq",0,0,null,["$1","$0"],["ai","er"],0,0)
n(V.L.prototype,"gj","b4",7)
n(V.E.prototype,"gj","b4",7)
n(V.bF.prototype,"gj","b4",7)
r(m=U.bX.prototype,"gbh",0,0,null,["$1","$0"],["N","ax"],0,0)
q(m,"ges","eu",13)
q(m,"gfI","fJ",13)
r(m=U.dD.prototype,"gbh",0,0,null,["$1","$0"],["N","ax"],0,0)
o(m,"geS","eT",1)
o(m,"geU","eV",1)
o(m,"geW","eX",1)
o(m,"geO","eP",1)
o(m,"geQ","eR",1)
o(m,"ghd","he",1)
o(m,"ghb","hc",1)
o(m,"gh9","ha",1)
o(U.dE.prototype,"geY","eZ",1)
r(m=M.cM.prototype,"gW",0,0,null,["$1","$0"],["U","aB"],0,0)
q(m,"gfM","fN",14)
q(m,"gfO","fP",14)
r(M.cO.prototype,"gW",0,0,null,["$1","$0"],["U","aB"],0,0)
r(m=M.cT.prototype,"gW",0,0,null,["$1","$0"],["U","aB"],0,0)
q(m,"gf7","f8",4)
q(m,"gf9","fa",4)
r(M.cW.prototype,"gW",0,0,null,["$1","$0"],["U","aB"],0,0)
r(O.cX.prototype,"ga6",0,0,null,["$1","$0"],["A","aj"],0,0)
r(m=O.d6.prototype,"ga6",0,0,null,["$1","$0"],["A","aj"],0,0)
r(m,"gh0",0,0,null,["$1","$0"],["cX","h1"],0,0)
q(m,"gf1","f2",15)
q(m,"gf3","f4",15)
r(O.c3.prototype,"ga6",0,0,null,["$1","$0"],["A","aj"],0,0)
r(m=O.ds.prototype,"ga6",0,0,null,["$1","$0"],["A","aj"],0,0)
q(m,"gfh","fi",16)
q(m,"gfj","fk",16)
r(O.bd.prototype,"ga6",0,0,null,["$1","$0"],["A","aj"],0,0)
r(X.dd.prototype,"gcF",0,0,null,["$1","$0"],["a_","ex"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.kc,J.a,J.a2,P.dW,P.i,H.c1,P.fA,H.cU,H.io,H.f0,H.ia,P.bt,H.bT,H.ec,P.a7,H.fI,H.fK,H.fC,P.ei,P.bH,P.ct,P.dG,P.dq,P.hS,P.du,P.jp,P.j6,P.j1,P.dV,P.w,P.jh,P.fR,P.eW,P.jo,P.jn,P.bj,P.ad,P.aa,P.b2,P.hn,P.dn,P.dO,P.fs,P.u,P.Q,P.bc,P.r,P.N,P.bI,P.iq,P.j7,W.f4,W.eV,W.J,W.cV,P.j9,P.en,P.j2,P.bB,K.eD,K.cY,K.d5,K.hB,L.dp,L.dv,L.dw,L.i5,O.aQ,O.c4,E.eP,E.aw,E.ht,E.dt,Z.dF,Z.bG,Z.aP,Z.bu,Z.aq,D.eS,D.b3,D.V,X.cL,X.d2,X.fF,X.fO,X.am,X.hd,X.i6,X.dC,D.eM,D.fb,D.a6,D.bw,D.hM,V.Y,V.ac,V.fj,V.d7,V.al,V.a4,V.R,V.aE,V.dh,V.L,V.E,V.bF,U.dD,U.dE,M.cO,M.cT,M.cW,M.ag,A.cI,A.eG,A.Z,A.fv,A.cJ,A.cQ,A.de,A.dm,A.fW,A.ch,A.ci,A.cj,A.ck,A.br,A.dz,A.ii,F.b4,F.fm,F.c0,F.fH,F.cb,F.hC,F.hD,F.hE,F.hF,F.bg,F.iA,F.iB,F.iE,F.iG,F.iH,F.iI,O.dr,O.c3,O.fX,O.bd,T.i0,T.i2,X.hU,X.k2,X.fx,X.dd,V.eT,V.hG])
s(J.a,[J.fB,J.d0,J.d1,J.b7,J.c_,J.b8,H.c8,H.bb,W.f,W.eC,W.bp,W.av,W.G,W.dI,W.af,W.f8,W.fc,W.dK,W.cS,W.dM,W.fe,W.k,W.dP,W.ax,W.fw,W.dR,W.aR,W.fN,W.h7,W.dX,W.dY,W.aA,W.dZ,W.e1,W.aC,W.e5,W.e7,W.aG,W.e8,W.aH,W.ed,W.an,W.eg,W.i4,W.aJ,W.ej,W.i8,W.iv,W.ep,W.er,W.et,W.ev,W.ex,P.aS,P.dT,P.aV,P.e3,P.hr,P.ee,P.aY,P.el,P.eH,P.dH,P.di,P.ea])
s(J.d1,[J.ho,J.bE,J.b9])
t(J.kb,J.b7)
s(J.c_,[J.d_,J.cZ])
t(P.fM,P.dW)
s(P.fM,[H.dA,W.iT,W.iS,P.fo])
t(H.O,H.dA)
s(P.i,[H.t,H.c2,H.iM,P.fz])
t(H.fh,H.c2)
s(P.fA,[H.fS,H.iN])
t(H.f1,H.f0)
s(P.bt,[H.hk,H.fE,H.im,H.eR,H.hz,P.dc,P.at,P.ip,P.ik,P.hO,P.f_,P.f7])
s(H.bT,[H.jW,H.hV,H.fD,H.jG,H.jH,H.jI,P.iP,P.iO,P.iQ,P.iR,P.jg,P.jf,P.jy,P.j4,P.j5,P.fL,P.fQ,P.ff,P.fg,P.iu,P.ir,P.is,P.it,P.ji,P.jj,P.jl,P.jk,P.jt,P.js,P.ju,P.jv,W.h9,W.hb,W.hy,W.hR,W.iX,P.jb,P.jc,P.jz,P.fp,P.fq,P.eJ,E.hu,E.hv,E.hw,E.i3,D.fk,D.fl,F.jq,F.jT,F.jU,F.jD,F.jE,F.iK,F.iJ,F.iC,F.iD,O.h_,O.h0,O.h1,O.h2,O.h3,O.h4,O.h5,O.h6,T.i1,V.eU,V.jS,V.hI,V.hH,K.jK,K.jL,K.jM,K.jN,K.jO,K.jP,K.jQ])
s(H.hV,[H.hP,H.bR])
t(P.fP,P.a7)
t(H.H,P.fP)
t(H.fJ,H.t)
t(H.d8,H.bb)
s(H.d8,[H.cn,H.cp])
t(H.co,H.cn)
t(H.c9,H.co)
t(H.cq,H.cp)
t(H.d9,H.cq)
s(H.d9,[H.he,H.hf,H.hg,H.hh,H.hi,H.da,H.ca])
t(P.je,P.fz)
t(P.j3,P.jp)
t(P.j0,P.j6)
t(P.eo,P.fR)
t(P.dB,P.eo)
s(P.eW,[P.eN,P.fi])
t(P.f2,P.hS)
s(P.f2,[P.eO,P.iy,P.ix])
t(P.iw,P.fi)
s(P.aa,[P.I,P.v])
s(P.at,[P.by,P.fy])
t(P.iV,P.bI)
s(W.f,[W.D,W.fn,W.c6,W.aF,W.cr,W.aI,W.ao,W.cu,W.iL,W.cm,P.eK,P.bo])
s(W.D,[W.U,W.b1])
s(W.U,[W.m,P.l])
s(W.m,[W.eE,W.eF,W.bq,W.fr,W.bZ,W.hA])
t(W.f3,W.av)
t(W.bU,W.dI)
s(W.af,[W.f5,W.f6])
t(W.dL,W.dK)
t(W.cR,W.dL)
t(W.dN,W.dM)
t(W.fd,W.dN)
t(W.ak,W.bp)
t(W.dQ,W.dP)
t(W.bW,W.dQ)
t(W.dS,W.dR)
t(W.bY,W.dS)
t(W.be,W.k)
s(W.be,[W.bv,W.aB,W.bA])
t(W.h8,W.dX)
t(W.ha,W.dY)
t(W.e_,W.dZ)
t(W.hc,W.e_)
t(W.e2,W.e1)
t(W.db,W.e2)
t(W.e6,W.e5)
t(W.hp,W.e6)
t(W.hx,W.e7)
t(W.cs,W.cr)
t(W.hK,W.cs)
t(W.e9,W.e8)
t(W.hL,W.e9)
t(W.hQ,W.ed)
t(W.eh,W.eg)
t(W.hW,W.eh)
t(W.cv,W.cu)
t(W.hX,W.cv)
t(W.ek,W.ej)
t(W.i7,W.ek)
t(W.bh,W.aB)
t(W.eq,W.ep)
t(W.iU,W.eq)
t(W.dJ,W.cS)
t(W.es,W.er)
t(W.iY,W.es)
t(W.eu,W.et)
t(W.e0,W.eu)
t(W.ew,W.ev)
t(W.j8,W.ew)
t(W.ey,W.ex)
t(W.jd,W.ey)
t(W.iW,P.dq)
t(P.ja,P.j9)
t(P.a8,P.j2)
t(P.dU,P.dT)
t(P.fG,P.dU)
t(P.e4,P.e3)
t(P.hl,P.e4)
t(P.ef,P.ee)
t(P.hT,P.ef)
t(P.em,P.el)
t(P.i9,P.em)
t(P.eI,P.dH)
t(P.hm,P.bo)
t(P.eb,P.ea)
t(P.hN,P.eb)
s(K.cY,[K.aU,L.dy])
s(E.eP,[Z.cK,A.dk,T.bz])
s(D.V,[D.b5,D.b6,D.o,X.hq])
s(X.hq,[X.d4,X.ba,X.c7,X.dx])
s(O.aQ,[D.d3,U.bX,M.cM])
s(D.eS,[U.eZ,U.ae])
s(U.ae,[U.cN,U.dj])
s(A.dk,[A.fa,A.fu,A.fT,A.i_])
s(A.dz,[A.ap,A.ie,A.ig,A.ih,A.id,A.M,A.aL,A.F,A.bf,A.ij,A.bC,A.W,A.T,A.bD])
t(F.hJ,F.fm)
t(F.ic,F.fH)
t(F.iF,F.iG)
t(F.hj,F.iH)
s(O.dr,[O.f9,O.cX,O.d6,O.ds])
s(O.c3,[O.fU,O.fV,O.ay])
s(O.ay,[O.fY,O.fZ])
t(T.hY,T.bz)
t(T.hZ,T.hY)
s(X.hU,[X.eL,X.ft])
u(H.dA,H.io)
u(H.cn,P.w)
u(H.co,H.cU)
u(H.cp,P.w)
u(H.cq,H.cU)
u(P.dW,P.w)
u(P.eo,P.jh)
u(W.dI,W.f4)
u(W.dK,P.w)
u(W.dL,W.J)
u(W.dM,P.w)
u(W.dN,W.J)
u(W.dP,P.w)
u(W.dQ,W.J)
u(W.dR,P.w)
u(W.dS,W.J)
u(W.dX,P.a7)
u(W.dY,P.a7)
u(W.dZ,P.w)
u(W.e_,W.J)
u(W.e1,P.w)
u(W.e2,W.J)
u(W.e5,P.w)
u(W.e6,W.J)
u(W.e7,P.a7)
u(W.cr,P.w)
u(W.cs,W.J)
u(W.e8,P.w)
u(W.e9,W.J)
u(W.ed,P.a7)
u(W.eg,P.w)
u(W.eh,W.J)
u(W.cu,P.w)
u(W.cv,W.J)
u(W.ej,P.w)
u(W.ek,W.J)
u(W.ep,P.w)
u(W.eq,W.J)
u(W.er,P.w)
u(W.es,W.J)
u(W.et,P.w)
u(W.eu,W.J)
u(W.ev,P.w)
u(W.ew,W.J)
u(W.ex,P.w)
u(W.ey,W.J)
u(P.dT,P.w)
u(P.dU,W.J)
u(P.e3,P.w)
u(P.e4,W.J)
u(P.ee,P.w)
u(P.ef,W.J)
u(P.el,P.w)
u(P.em,W.J)
u(P.dH,P.a7)
u(P.ea,P.w)
u(P.eb,W.J)})()
var v={mangledGlobalNames:{v:"int",I:"double",aa:"num",r:"String",bj:"bool",bc:"Null",u:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[D.V]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.bc,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.aw]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.I},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.v,[P.i,D.a6]]},{func:1,ret:-1,args:[P.v,[P.i,U.ae]]},{func:1,ret:-1,args:[P.v,[P.i,M.ag]]},{func:1,ret:-1,args:[P.v,[P.i,V.al]]},{func:1,ret:-1,args:[P.v,[P.i,O.bd]]},{func:1,ret:P.bc,args:[,]},{func:1,ret:P.bB,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.bj,args:[[P.i,D.a6]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bq.prototype
C.N=J.a.prototype
C.b=J.b7.prototype
C.O=J.cZ.prototype
C.c=J.d_.prototype
C.j=J.d0.prototype
C.d=J.c_.prototype
C.a=J.b8.prototype
C.P=J.b9.prototype
C.x=J.ho.prototype
C.y=P.di.prototype
C.q=J.bE.prototype
C.z=W.bh.prototype
C.A=W.cm.prototype
C.W=new P.eO()
C.B=new P.eN()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.I=new P.hn()
C.e=new P.iw()
C.J=new P.iy()
C.f=new P.j3()
C.n=new A.br(0,"ColorBlendType.Overwrite")
C.K=new A.br(1,"ColorBlendType.Additive")
C.L=new A.br(2,"ColorBlendType.Average")
C.o=new A.br(3,"ColorBlendType.AlphaBlend")
C.p=new P.b2(0)
C.M=new P.b2(5e6)
C.u=H.b(u([127,2047,65535,1114111]),[P.v])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.R=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.S=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.v=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.T=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.w=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.Q=H.b(u([]),[P.r])
C.U=new H.f1(0,{},C.Q,[P.r,P.r])
C.V=new P.bH(null,2)})();(function staticFields(){$.au=0
$.bS=null
$.kI=null
$.lD=null
$.lz=null
$.lH=null
$.jA=null
$.jJ=null
$.ky=null
$.bL=null
$.cy=null
$.cz=null
$.kt=!1
$.ar=C.f
$.a9=[]
$.kW=null
$.c5=null
$.l2=null
$.aD=null
$.cf=null
$.lh=null
$.lf=null
$.lg=null
$.lk=null
$.lj=null
$.li=null
$.ll=null
$.l1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ox","lO",function(){return H.lB("_$dart_dartClosure")})
u($,"oy","kB",function(){return H.lB("_$dart_js")})
u($,"oz","lP",function(){return H.aK(H.ib({
toString:function(){return"$receiver$"}}))})
u($,"oA","lQ",function(){return H.aK(H.ib({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oB","lR",function(){return H.aK(H.ib(null))})
u($,"oC","lS",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oF","lV",function(){return H.aK(H.ib(void 0))})
u($,"oG","lW",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oE","lU",function(){return H.aK(H.lb(null))})
u($,"oD","lT",function(){return H.aK(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oI","lY",function(){return H.aK(H.lb(void 0))})
u($,"oH","lX",function(){return H.aK(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oW","kE",function(){return P.n5()})
u($,"oJ","lZ",function(){return P.n2()})
u($,"oX","m0",function(){return H.my(H.bK(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"oZ","m1",function(){return P.mN("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"p_","m2",function(){return P.nu()})
u($,"oQ","m_",function(){return Z.ah(0)})
u($,"oK","kC",function(){return Z.ah(511)})
u($,"oS","a1",function(){return Z.ah(1)})
u($,"oR","as",function(){return Z.ah(2)})
u($,"oM","aO",function(){return Z.ah(4)})
u($,"oT","ai",function(){return Z.ah(8)})
u($,"oU","b_",function(){return Z.ah(16)})
u($,"oN","cD",function(){return Z.ah(32)})
u($,"oO","cE",function(){return Z.ah(64)})
u($,"oP","kD",function(){return Z.ah(96)})
u($,"oV","bn",function(){return Z.ah(128)})
u($,"oL","aN",function(){return Z.ah(256)})
u($,"ow","lN",function(){return new V.fj(1e-9)})
u($,"ov","x",function(){return $.lN()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c8,DataView:H.bb,ArrayBufferView:H.bb,Float32Array:H.c9,Float64Array:H.c9,Int16Array:H.he,Int32Array:H.hf,Int8Array:H.hg,Uint16Array:H.hh,Uint32Array:H.hi,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.ca,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.eC,HTMLAnchorElement:W.eE,HTMLAreaElement:W.eF,Blob:W.bp,HTMLCanvasElement:W.bq,CDATASection:W.b1,CharacterData:W.b1,Comment:W.b1,ProcessingInstruction:W.b1,Text:W.b1,CSSPerspective:W.f3,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bU,MSStyleCSSProperties:W.bU,CSS2Properties:W.bU,CSSImageValue:W.af,CSSKeywordValue:W.af,CSSNumericValue:W.af,CSSPositionValue:W.af,CSSResourceValue:W.af,CSSUnitValue:W.af,CSSURLImageValue:W.af,CSSStyleValue:W.af,CSSMatrixComponent:W.av,CSSRotation:W.av,CSSScale:W.av,CSSSkew:W.av,CSSTranslation:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.f5,CSSUnparsedValue:W.f6,DataTransferItemList:W.f8,DOMException:W.fc,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.U,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ak,FileList:W.bW,FileWriter:W.fn,HTMLFormElement:W.fr,Gamepad:W.ax,History:W.fw,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.aR,HTMLImageElement:W.bZ,KeyboardEvent:W.bv,Location:W.fN,MediaList:W.h7,MessagePort:W.c6,MIDIInputMap:W.h8,MIDIOutputMap:W.ha,MimeType:W.aA,MimeTypeArray:W.hc,PointerEvent:W.aB,MouseEvent:W.aB,DragEvent:W.aB,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.db,RadioNodeList:W.db,Plugin:W.aC,PluginArray:W.hp,RTCStatsReport:W.hx,HTMLSelectElement:W.hA,SourceBuffer:W.aF,SourceBufferList:W.hK,SpeechGrammar:W.aG,SpeechGrammarList:W.hL,SpeechRecognitionResult:W.aH,Storage:W.hQ,CSSStyleSheet:W.an,StyleSheet:W.an,TextTrack:W.aI,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.hW,TextTrackList:W.hX,TimeRanges:W.i4,Touch:W.aJ,TouchEvent:W.bA,TouchList:W.i7,TrackDefaultList:W.i8,CompositionEvent:W.be,FocusEvent:W.be,TextEvent:W.be,UIEvent:W.be,URL:W.iv,VideoTrackList:W.iL,WheelEvent:W.bh,Window:W.cm,DOMWindow:W.cm,CSSRuleList:W.iU,ClientRect:W.dJ,DOMRect:W.dJ,GamepadList:W.iY,NamedNodeMap:W.e0,MozNamedAttrMap:W.e0,SpeechRecognitionResultList:W.j8,StyleSheetList:W.jd,SVGLength:P.aS,SVGLengthList:P.fG,SVGNumber:P.aV,SVGNumberList:P.hl,SVGPointList:P.hr,SVGStringList:P.hT,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGScriptElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGTransform:P.aY,SVGTransformList:P.i9,AudioBuffer:P.eH,AudioParamMap:P.eI,AudioTrackList:P.eK,AudioContext:P.bo,webkitAudioContext:P.bo,BaseAudioContext:P.bo,OfflineAudioContext:P.hm,WebGL2RenderingContext:P.di,SQLResultSetRowList:P.hN})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.lF,[])
else K.lF([])})})()
//# sourceMappingURL=test.dart.js.map
