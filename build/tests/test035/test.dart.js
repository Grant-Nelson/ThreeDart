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
a[c]=function(){a[c]=function(){H.nO(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k2(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jL:function jL(){},
j9:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kk:function(){return new P.he("No element")},
cV:function(a,b,c,d){if(c-b<=32)H.ml(a,b,c,d)
else H.mk(a,b,c,d)},
ml:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.V()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.j(a,s,a[q])
s=q}C.b.j(a,s,t)}},
mk:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a0(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a0(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.b(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.b(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.b(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.b(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.b(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.V()
if(a1>0){p=q
q=r
r=p}C.b.j(a2,d,u)
C.b.j(a2,b,s)
C.b.j(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.j(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.j(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.B(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.M()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.j(a2,m,a2[o])
C.b.j(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.V()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.j(a2,o,a2[n])
C.b.j(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.j(a2,m,a2[n])
C.b.j(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.M()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.j(a2,m,a2[o])
C.b.j(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.V()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.V()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.j(a2,o,a2[n])
C.b.j(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.j(a2,m,a2[n])
C.b.j(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.j(a2,a3,a2[a1])
C.b.j(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.j(a2,a4,a2[a1])
C.b.j(a2,a1,r)
H.cV(a2,a3,o-2,a5)
H.cV(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.B(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.B(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.j(a2,m,a2[o])
C.b.j(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.j(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.j(a2,o,a2[n])
C.b.j(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.j(a2,m,a2[n])
C.b.j(a2,n,l)}n=j
break}}}H.cV(a2,o,n,a5)}else H.cV(a2,o,n,a5)},
M:function M(a){this.a=a},
eK:function eK(){},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fg:function fg(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b){this.a=null
this.b=a
this.c=b},
i9:function i9(a,b,c){this.a=a
this.b=b
this.$ti=c},
ia:function ia(a,b){this.a=a
this.b=b},
cv:function cv(){},
hJ:function hJ(){},
d9:function d9(){},
lL:function(){throw H.c(P.v("Cannot modify unmodifiable Map"))},
ec:function(a){var u,t=H.nQ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ny:function(a){return v.types[a]},
l9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iy},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.c(H.at(a))
return u},
bT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mc:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.S(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
bU:function(a){return H.m3(a)+H.kW(H.cg(a),0,null)},
m3:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibq){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ec(t.length>1&&C.a.E(t,0)===36?C.a.a8(t,1):t)},
m4:function(){if(!!self.location)return self.location.href
return},
kw:function(a){var u,t,s,r,q=J.ad(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
md:function(a){var u,t,s,r=H.d([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aC(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.at(s))}return H.kw(r)},
kx:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<0)throw H.c(H.at(s))
if(s>65535)return H.md(a)}return H.kw(a)},
me:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cQ:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aC(u,10))>>>0,56320|u&1023)}}throw H.c(P.S(a,0,1114111,null,null))},
bk:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mb:function(a){var u=H.bk(a).getFullYear()+0
return u},
m9:function(a){var u=H.bk(a).getMonth()+1
return u},
m5:function(a){var u=H.bk(a).getDate()+0
return u},
m6:function(a){var u=H.bk(a).getHours()+0
return u},
m8:function(a){var u=H.bk(a).getMinutes()+0
return u},
ma:function(a){var u=H.bk(a).getSeconds()+0
return u},
m7:function(a){var u=H.bk(a).getMilliseconds()+0
return u},
i:function(a){throw H.c(H.at(a))},
b:function(a,b){if(a==null)J.ad(a)
throw H.c(H.bx(a,b))},
bx:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,s,null)
u=J.ad(a)
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.cR(b,s)},
ns:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bl(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bl(a,c,!0,b,"end",u)
return new P.af(!0,b,"end",null)},
at:function(a){return new P.af(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.cN()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lf})
u.name=""}else u.toString=H.lf
return u},
lf:function(){return J.a2(this.dartException)},
r:function(a){throw H.c(a)},
n:function(a){throw H.c(P.bd(a))},
ar:function(a){var u,t,s,r,q,p
a=H.ld(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hw(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hx:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kF:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ks:function(a,b){return new H.fJ(a,b==null?null:b.method)},
jM:function(a,b){var u=b==null,t=u?null:b.method
return new H.f2(a,t,u?null:b.receiver)},
b6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aC(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jM(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ks(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.li()
q=$.lj()
p=$.lk()
o=$.ll()
n=$.lo()
m=$.lp()
l=$.ln()
$.lm()
k=$.lr()
j=$.lq()
i=r.a4(u)
if(i!=null)return f.$1(H.jM(u,i))
else{i=q.a4(u)
if(i!=null){i.method="call"
return f.$1(H.jM(u,i))}else{i=p.a4(u)
if(i==null){i=o.a4(u)
if(i==null){i=n.a4(u)
if(i==null){i=m.a4(u)
if(i==null){i=l.a4(u)
if(i==null){i=o.a4(u)
if(i==null){i=k.a4(u)
if(i==null){i=j.a4(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ks(u,i))}}return f.$1(new H.hI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cX()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.af(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cX()
return a},
k4:function(a){var u
if(a==null)return new H.dP(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dP(a)},
nw:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
nD:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nD)
a.$identity=u
return u},
lK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hf().constructor.prototype):Object.create(new H.bA(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ag
if(typeof t!=="number")return t.v()
$.ag=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ki(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lG(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ki(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lG:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ny,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kg:H.jB
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lH:function(a,b,c,d){var u=H.jB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ki:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lH(t,!r,u,b)
if(t===0){r=$.ag
if(typeof r!=="number")return r.v()
$.ag=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
return new Function(r+H.f(q==null?$.bB=H.eq("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ag
if(typeof r!=="number")return r.v()
$.ag=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
return new Function(r+H.f(q==null?$.bB=H.eq("self"):q)+"."+H.f(u)+"("+o+");}")()},
lI:function(a,b,c,d){var u=H.jB,t=H.kg
switch(b?-1:a){case 0:throw H.c(H.mi("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lJ:function(a,b){var u,t,s,r,q,p,o,n=$.bB
if(n==null)n=$.bB=H.eq("self")
u=$.kf
if(u==null)u=$.kf=H.eq("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lI(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ag
if(typeof u!=="number")return u.v()
$.ag=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ag
if(typeof u!=="number")return u.v()
$.ag=u+1
return new Function(n+u+"}")()},
k2:function(a,b,c,d,e,f,g){return H.lK(a,b,c,d,!!e,!!f,g)},
jB:function(a){return a.a},
kg:function(a){return a.c},
eq:function(a){var u,t,s,r=new H.bA("self","target","receiver","name"),q=J.jJ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nI:function(a,b){throw H.c(H.lF(a,H.ec(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.nI(a,b)},
nu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lF:function(a,b){return new H.er("CastError: "+P.jG(a)+": type '"+H.f(H.nm(a))+"' is not a subtype of type '"+b+"'")},
nm:function(a){var u,t=J.Q(a)
if(!!t.$ibC){u=H.nu(t)
if(u!=null)return H.nJ(u)
return"Closure"}return H.bU(a)},
nO:function(a){throw H.c(new P.eD(a))},
mi:function(a){return new H.h_(a)},
l7:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
cg:function(a){if(a==null)return
return a.$ti},
on:function(a,b,c){return H.js(a["$a"+H.f(c)],H.cg(b))},
nx:function(a,b,c,d){var u=H.js(a["$a"+H.f(c)],H.cg(b))
return u==null?null:u[d]},
j5:function(a,b,c){var u=H.js(a["$a"+H.f(b)],H.cg(a))
return u==null?null:u[c]},
j6:function(a,b){var u=H.cg(a)
return u==null?null:u[b]},
nJ:function(a){return H.b4(a,null)},
b4:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ec(a[0].name)+H.kW(a,1,b)
if(typeof a=="function")return H.ec(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.mV(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mV:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.v(p,a0[m])
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
for(n=H.nv(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b4(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kW:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b4(p,c)}return"<"+u.h(0)+">"},
js:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ol:function(a,b,c){return a.apply(b,H.js(J.Q(b)["$a"+H.f(c)],H.cg(b)))},
om:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nF:function(a){var u,t,s,r,q=$.l8.$1(a),p=$.j2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.l0.$2(a,q)
if(q!=null){p=$.j2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jd[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jo(u)
$.j2[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jd[q]=u
return u}if(s==="-"){r=H.jo(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lb(a,u)
if(s==="*")throw H.c(P.hH(q))
if(v.leafTags[q]===true){r=H.jo(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lb(a,u)},
lb:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jo:function(a){return J.k6(a,!1,null,!!a.$iy)},
nG:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jo(u)
else return J.k6(u,c,null,null)},
nB:function(){if(!0===$.k5)return
$.k5=!0
H.nC()},
nC:function(){var u,t,s,r,q,p,o,n
$.j2=Object.create(null)
$.jd=Object.create(null)
H.nA()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lc.$1(q)
if(p!=null){o=H.nG(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nA:function(){var u,t,s,r,q,p,o=C.z()
o=H.bv(C.A,H.bv(C.B,H.bv(C.q,H.bv(C.q,H.bv(C.C,H.bv(C.D,H.bv(C.E(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l8=new H.ja(r)
$.l0=new H.jb(q)
$.lc=new H.jc(p)},
bv:function(a,b){return a(b)||b},
lT:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.L("Illegal RegExp pattern ("+String(p)+")",a,null))},
nM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nt:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ld:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
le:function(a,b,c){var u=H.nN(a,b,c)
return u},
nN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ld(b),'g'),H.nt(c))},
ew:function ew(){},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fJ:function fJ(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
jw:function jw(a){this.a=a},
dP:function dP(a){this.a=a
this.b=null},
bC:function bC(){},
hl:function hl(){},
hf:function hf(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
er:function er(a){this.a=a},
h_:function h_(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f6:function f6(a,b){this.a=a
this.b=b
this.c=null},
f7:function f7(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
f1:function f1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bt:function(a){return a},
m2:function(a){return new Int8Array(a)},
as:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bx(b,a))},
mT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ns(a,b,c))
return b},
bO:function bO(){},
aV:function aV(){},
cJ:function cJ(){},
bP:function bP(){},
cK:function cK(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
cL:function cL(){},
bQ:function bQ(){},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
nv:function(a){return J.kl(a?Object.keys(a):[],null)},
nQ:function(a){return v.mangledGlobalNames[a]},
nH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j4:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k5==null){H.nB()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.hH("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k8()]
if(r!=null)return r
r=H.nF(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.k8(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
lS:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.S(a,0,4294967295,"length",null))
return J.kl(new Array(a),b)},
kl:function(a,b){return J.jJ(H.d(a,[b]))},
jJ:function(a){a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.f0.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.f_.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.j4(a)},
cf:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.j4(a)},
j3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.j4(a)},
l6:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bq.prototype
return a},
k3:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bq.prototype
return a},
ea:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.j4(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
ka:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l6(a).m(a,b)},
cj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cf(a).i(a,b)},
jy:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.l9(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.j3(a).j(a,b,c)},
lz:function(a,b){return J.k3(a).E(a,b)},
lA:function(a,b,c){return J.ea(a).f5(a,b,c)},
lB:function(a,b,c,d){return J.ea(a).fm(a,b,c,d)},
lC:function(a,b){return J.k3(a).S(a,b)},
jz:function(a,b){return J.l6(a).fB(a,b)},
jA:function(a,b){return J.j3(a).J(a,b)},
lD:function(a,b,c,d){return J.ea(a).fQ(a,b,c,d)},
kb:function(a,b){return J.j3(a).I(a,b)},
kc:function(a){return J.ea(a).gbF(a)},
ck:function(a){return J.Q(a).gG(a)},
b9:function(a){return J.j3(a).gX(a)},
ad:function(a){return J.cf(a).gk(a)},
lE:function(a,b){return J.ea(a).hl(a,b)},
a2:function(a){return J.Q(a).h(a)},
a:function a(){},
f_:function f_(){},
cz:function cz(){},
cA:function cA(){},
fN:function fN(){},
bq:function bq(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
jK:function jK(a){this.$ti=a},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(){},
cy:function cy(){},
f0:function f0(){},
aS:function aS(){}},P={
mx:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nn()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bw(new P.ic(s),1)).observe(u,{childList:true})
return new P.ib(s,u,t)}else if(self.setImmediate!=null)return P.no()
return P.np()},
my:function(a){self.scheduleImmediate(H.bw(new P.id(a),0))},
mz:function(a){self.setImmediate(H.bw(new P.ie(a),0))},
mA:function(a){P.jQ(C.n,a)},
jQ:function(a,b){var u=C.c.a0(a.a,1000)
return P.mD(u<0?0:u,b)},
kE:function(a,b){var u=C.c.a0(a.a,1000)
return P.mE(u<0?0:u,b)},
mD:function(a,b){var u=new P.dV()
u.dS(a,b)
return u},
mE:function(a,b){var u=new P.dV()
u.dT(a,b)
return u},
ng:function(){var u,t
for(;u=$.bu,u!=null;){$.ce=null
t=u.b
$.bu=t
if(t==null)$.cd=null
u.a.$0()}},
nl:function(){$.k0=!0
try{P.ng()}finally{$.ce=null
$.k0=!1
if($.bu!=null)$.k9().$1(P.l1())}},
nj:function(a){var u=new P.dh(a)
if($.bu==null){$.bu=$.cd=u
if(!$.k0)$.k9().$1(P.l1())}else $.cd=$.cd.b=u},
nk:function(a){var u,t,s=$.bu
if(s==null){P.nj(a)
$.ce=$.cd
return}u=new P.dh(a)
t=$.ce
if(t==null){u.b=s
$.bu=$.ce=u}else{u.b=t.b
$.ce=t.b=u
if(u.b==null)$.cd=u}},
kD:function(a,b){var u=$.ae
if(u===C.f)return P.jQ(a,b)
return P.jQ(a,u.fv(b))},
mo:function(a,b){var u=$.ae
if(u===C.f)return P.kE(a,b)
return P.kE(a,u.cN(b,P.d2))},
kX:function(a,b,c,d,e){var u={}
u.a=d
P.nk(new P.iW(u,e))},
nh:function(a,b,c,d){var u,t=$.ae
if(t===c)return d.$0()
$.ae=c
u=t
try{t=d.$0()
return t}finally{$.ae=u}},
ni:function(a,b,c,d,e){var u,t=$.ae
if(t===c)return d.$1(e)
$.ae=c
u=t
try{t=d.$1(e)
return t}finally{$.ae=u}},
ic:function ic(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
dV:function dV(){this.c=0},
iE:function iE(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a){this.a=a
this.b=null},
d_:function d_(){},
hi:function hi(){},
d2:function d2(){},
iN:function iN(){},
iW:function iW(a,b){this.a=a
this.b=b},
it:function it(){},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function(a,b){return new H.K([a,b])},
km:function(a,b){return new H.K([a,b])},
lX:function(a){return H.nw(a,new H.K([null,null]))},
lY:function(a){return new P.iq([a])},
jW:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mC:function(a,b){var u=new P.dx(a,b)
u.c=a.e
return u},
lR:function(a,b,c){var u,t
if(P.k1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.q])
$.a1.push(a)
try{P.mW(a,u)}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}t=P.kB(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jI:function(a,b,c){var u,t
if(P.k1(a))return b+"..."+c
u=new P.P(b)
$.a1.push(a)
try{t=u
t.a=P.kB(t.a,a,", ")}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k1:function(a){var u,t
for(u=$.a1.length,t=0;t<u;++t)if(a===$.a1[t])return!0
return!1},
mW:function(a,b){var u,t,s,r,q,p,o,n=a.gX(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.H())return
u=H.f(n.gP(n))
b.push(u)
m+=u.length+2;++l}if(!n.H()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gP(n);++l
if(!n.H()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gP(n);++l
for(;n.H();r=q,q=p){p=n.gP(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
lW:function(a,b,c){var u=P.lV(b,c)
a.I(0,new P.f9(u))
return u},
jN:function(a){var u,t={}
if(P.k1(a))return"{...}"
u=new P.P("")
try{$.a1.push(a)
u.a+="{"
t.a=!0
J.kb(a,new P.fe(t,u))
u.a+="}"}finally{if(0>=$.a1.length)return H.b($.a1,-1)
$.a1.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function iq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ir:function ir(a){this.a=a
this.c=this.b=null},
dx:function dx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f9:function f9(a){this.a=a},
fa:function fa(){},
p:function p(){},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
av:function av(){},
iF:function iF(){},
ff:function ff(){},
da:function da(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
dy:function dy(){},
e_:function e_(){},
mr:function(a,b,c,d){if(b instanceof Uint8Array)return P.ms(!1,b,c,d)
return},
ms:function(a,b,c,d){var u,t,s=$.ls()
if(s==null)return
u=0===c
if(u&&!0)return P.jT(s,b)
t=b.length
d=P.aZ(c,d,t)
if(u&&d===t)return P.jT(s,b)
return P.jT(s,b.subarray(c,d))},
jT:function(a,b){if(P.mu(b))return
return P.mv(a,b)},
mv:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b6(t)}return},
mu:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mt:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b6(t)}return},
kZ:function(a,b,c){var u,t,s
for(u=J.cf(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.a7()
if((s&127)!==s)return t-b}return c-b},
ke:function(a,b,c,d,e,f){if(C.c.aZ(f,4)!==0)throw H.c(P.L("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.L("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.L("Invalid base64 padding, more than two '=' characters",a,b))},
en:function en(){},
eo:function eo(){},
et:function et(){},
ey:function ey(){},
eL:function eL(){},
hR:function hR(){},
hT:function hT(){},
iM:function iM(a){this.b=0
this.c=a},
hS:function hS(a){this.a=a},
iL:function iL(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eb:function(a,b,c){var u=H.mc(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.L(a,null,null))},
lO:function(a){if(a instanceof H.bC)return a.h(0)
return"Instance of '"+H.f(H.bU(a))+"'"},
lZ:function(a,b,c){var u,t,s=J.lS(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kn:function(a,b,c){var u,t=H.d([],[c])
for(u=J.b9(a);u.H();)t.push(u.gP(u))
if(b)return t
return J.jJ(t)},
bW:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aZ(b,c,u)
return H.kx(b>0||c<u?C.b.dD(a,b,c):a)}if(!!J.Q(a).$ibQ)return H.me(a,b,P.aZ(b,c,a.length))
return P.mm(a,b,c)},
mm:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.S(b,0,J.ad(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.S(c,b,J.ad(a),q,q))
t=J.b9(a)
for(s=0;s<b;++s)if(!t.H())throw H.c(P.S(b,0,s,q,q))
r=[]
if(u)for(;t.H();)r.push(t.gP(t))
else for(s=b;s<c;++s){if(!t.H())throw H.c(P.S(c,b,s,q,q))
r.push(t.gP(t))}return H.kx(r)},
mg:function(a){return new H.f1(a,H.lT(a,!1,!0,!1,!1,!1))},
kB:function(a,b,c){var u=J.b9(b)
if(!u.H())return a
if(c.length===0){do a+=H.f(u.gP(u))
while(u.H())}else{a+=H.f(u.gP(u))
for(;u.H();)a=a+c+H.f(u.gP(u))}return a},
kH:function(){var u=H.m4()
if(u!=null)return P.mq(u)
throw H.c(P.v("'Uri.base' is not supported"))},
iK:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lx().b
if(typeof b!=="string")H.r(H.at(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfP().bG(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cQ(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lM:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lN:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cq:function(a){if(a>=10)return""+a
return"0"+a},
kj:function(a){return new P.aO(1000*a)},
jG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lO(a)},
eh:function(a){return new P.af(!1,null,null,a)},
kd:function(a,b,c){return new P.af(!0,a,b,c)},
cR:function(a,b){return new P.bl(null,null,!0,a,b,"Value not in range")},
S:function(a,b,c,d,e){return new P.bl(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c){if(0>a||a>c)throw H.c(P.S(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.S(b,a,c,"end",null))
return b}return c},
ky:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.c(P.S(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ad(b):e
return new P.eY(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hK(a)},
hH:function(a){return new P.hG(a)},
bd:function(a){return new P.ev(a)},
t:function(a){return new P.dq(a)},
L:function(a,b,c){return new P.eV(a,b,c)},
m_:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
k7:function(a){H.nH(a)},
mq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.kG(e<e?C.a.q(a,0,e):a,5,f).gdv()
else if(u===32)return P.kG(C.a.q(a,5,e),0,f).gdv()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.kY(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hu()
if(r>=0)if(P.kY(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.i(n)
if(m<n)n=m
if(typeof o!=="number")return o.M()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.M()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.M()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.Z(a,"..",o)))j=n>o+2&&C.a.Z(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.Z(a,"file",0)){if(q<=0){if(!C.a.Z(a,"/",o)){i="file:///"
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
a=C.a.aI(a,o,n,"/");++e
n=h}k="file"}else if(C.a.Z(a,"http",0)){if(t&&p+3===o&&C.a.Z(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aI(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.Z(a,"https",0)){if(t&&p+4===o&&C.a.Z(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aI(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ix(a,r,q,p,o,n,m,k)}return P.mF(a,0,e,r,q,p,o,n,m,k)},
kJ:function(a){var u=P.q
return C.b.fU(H.d(a.split("&"),[u]),P.km(u,u),new P.hP(C.e))},
mp:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hM(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eb(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.V()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eb(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.V()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
kI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hN(a),d=new P.hO(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.S(a,t)
if(p===58){if(t===b){++t
if(C.a.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mp(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aC(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
mF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mN(a,b,d)
else{if(d===b)P.bs(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mO(a,u,e-1):""
s=P.mK(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.i(g)
q=r<g?P.mM(P.eb(C.a.q(a,r,g),new P.iG(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mL(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.jY(a,h+1,i,n):n
return new P.br(j,t,s,q,p,o,i<c?P.mJ(a,i+1,c):n)},
kQ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bs:function(a,b,c){throw H.c(P.L(c,a,b))},
mM:function(a,b){if(a!=null&&a===P.kQ(b))return
return a},
mK:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.S(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.a.S(a,u)!==93)P.bs(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mH(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.kV(a,C.a.Z(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kI(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.i(c)
p=b
for(;p<c;++p)if(C.a.S(a,p)===58){s=C.a.b5(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.kV(a,C.a.Z(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kI(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.mQ(a,b,c)},
mH:function(a,b,c){var u,t=C.a.b5(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.i(c)
u=t<c}else u=!1
return u?t:c},
kV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.S(a,u)
if(r===37){q=P.jZ(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bs(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.q(a,t,u)
l.a+=P.jX(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.S(a,u)
if(q===37){p=P.jZ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bs(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jX(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mN:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kS(C.a.E(a,b)))P.bs(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bs(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.mG(t?a.toLowerCase():a)},
mG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mO:function(a,b,c){return P.cb(a,b,c,C.L,!1)},
mL:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cb(a,b,c,C.u,!0):C.i.hO(d,new P.iH(),P.q).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.mP(u,e,f)},
mP:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.mR(a,!u||c)
return P.mS(a)},
jY:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.eh("Both query and queryParameters specified"))
return P.cb(a,b,c,C.k,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.I(0,new P.iI(new P.iJ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mJ:function(a,b,c){return P.cb(a,b,c,C.k,!0)},
jZ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.S(a,b+1)
t=C.a.S(a,p)
s=H.j9(u)
r=H.j9(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aC(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cQ(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
jX:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.u])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fe(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.bW(t,0,null)},
cb:function(a,b,c,d,e){var u=P.kU(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
kU:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.i(c)
if(!(o<c))break
c$0:{u=C.a.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jZ(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bs(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jX(u)}}if(m==null)m=new P.P("")
m.a+=C.a.q(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.i(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kT:function(a){if(C.a.a2(a,"."))return!0
return C.a.d6(a,"/.")!==-1},
mS:function(a){var u,t,s,r,q,p,o
if(!P.kT(a))return a
u=H.d([],[P.q])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.B(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.t(u,"/")},
mR:function(a,b){var u,t,s,r,q,p
if(!P.kT(a))return!b?P.kR(a):a
u=H.d([],[P.q])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gas(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gas(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.kR(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.t(u,"/")},
kR:function(a){var u,t,s,r=a.length
if(r>=2&&P.kS(J.lz(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mI:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eh("Invalid URL encoding"))}}return u},
k_:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.M(C.a.q(a,b,c))}else{r=H.d([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.eh("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eh("Truncated URI"))
r.push(P.mI(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.hS(!1).bG(r)},
kS:function(a){var u=a|32
return 97<=u&&u<=122},
kG:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.L(m,a,t))}}if(s<0&&t>b)throw H.c(P.L(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gas(l)
if(r!==44||t!==p+7||!C.a.Z(a,"base64",p+1))throw H.c(P.L("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.y.h1(0,a,o,u)
else{n=P.kU(a,o,u,C.k,!0)
if(n!=null)a=C.a.aI(a,o,u,n)}return new P.hL(a,l,c)},
mU:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.m_(22,new P.iR(),P.bn),n=new P.iQ(o),m=new P.iS(),l=new P.iT(),k=n.$2(0,225)
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
kY:function(a,b,c,d,e){var u,t,s,r,q,p=$.ly()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
b5:function b5(){},
a4:function a4(a,b){this.a=a
this.b=b},
J:function J(){},
aO:function aO(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
bf:function bf(){},
cN:function cN(){},
af:function af(a,b,c,d){var _=this
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
eY:function eY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hK:function hK(a){this.a=a},
hG:function hG(a){this.a=a},
he:function he(a){this.a=a},
ev:function ev(a){this.a=a},
fM:function fM(){},
cX:function cX(){},
eD:function eD(a){this.a=a},
dq:function dq(a){this.a=a},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
j:function j(){},
eZ:function eZ(){},
m:function m(){},
N:function N(){},
aW:function aW(){},
a8:function a8(){},
Z:function Z(){},
q:function q(){},
P:function P(a){this.a=a},
hP:function hP(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b},
br:function br(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(){},
iQ:function iQ(a){this.a=a},
iS:function iS(){},
iT:function iT(){},
ix:function ix(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aH:function(a){var u,t,s,r,q
if(a==null)return
u=P.km(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.j(0,q,a[q])}return u},
nq:function(a){var u={}
a.I(0,new P.iX(u))
return u},
iz:function iz(){},
iB:function iB(a,b){this.a=a
this.b=b},
iX:function iX(a){this.a=a},
iA:function iA(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
eS:function eS(){},
eT:function eT(){},
ip:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
is:function is(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
f4:function f4(){},
aX:function aX(){},
fK:function fK(){},
fR:function fR(){},
hj:function hj(){},
k:function k(){},
b_:function b_(){},
hv:function hv(){},
dv:function dv(){},
dw:function dw(){},
dG:function dG(){},
dH:function dH(){},
dR:function dR(){},
dS:function dS(){},
dY:function dY(){},
dZ:function dZ(){},
bn:function bn(){},
ej:function ej(){},
ek:function ek(){},
el:function el(a){this.a=a},
em:function em(){},
ba:function ba(){},
fL:function fL(){},
di:function di(){},
hd:function hd(){},
dN:function dN(){},
dO:function dO(){}},W={
kh:function(){var u=document.createElement("canvas")
return u},
jF:function(a){return"wheel"},
lQ:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.b6(u)}return s},
io:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kP:function(a,b,c,d){var u=W.io(W.io(W.io(W.io(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.l_(new W.il(c),W.h)
if(u!=null&&!0)J.lB(a,b,u,!1)
return new W.ik(a,b,u,!1)},
l_:function(a,b){var u=$.ae
if(u===C.f)return a
return u.cN(a,b)},
l:function l(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
bb:function bb(){},
bc:function bc(){},
aM:function aM(){},
ez:function ez(){},
E:function E(){},
bD:function bD(){},
eA:function eA(){},
a9:function a9(){},
aj:function aj(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
cs:function cs(){},
ct:function ct(){},
eG:function eG(){},
eH:function eH(){},
ih:function ih(a,b){this.a=a
this.b=b},
V:function V(){},
h:function h(){},
e:function e(){},
al:function al(){},
bF:function bF(){},
eQ:function eQ(){},
eU:function eU(){},
au:function au(){},
eX:function eX(){},
bH:function bH(){},
bI:function bI(){},
bj:function bj(){},
fb:function fb(){},
fw:function fw(){},
bM:function bM(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
fz:function fz(){},
fA:function fA(a){this.a=a},
ax:function ax(){},
fB:function fB(){},
ao:function ao(){},
ig:function ig(a){this.a=a},
C:function C(){},
cM:function cM(){},
aA:function aA(){},
fO:function fO(){},
fY:function fY(){},
fZ:function fZ(a){this.a=a},
h0:function h0(){},
aC:function aC(){},
ha:function ha(){},
aD:function aD(){},
hb:function hb(){},
aE:function aE(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
ap:function ap(){},
aF:function aF(){},
aq:function aq(){},
hm:function hm(){},
hn:function hn(){},
hq:function hq(){},
aG:function aG(){},
bm:function bm(){},
ht:function ht(){},
hu:function hu(){},
b0:function b0(){},
hQ:function hQ(){},
i7:function i7(){},
b3:function b3(){},
c2:function c2(){},
ii:function ii(){},
dk:function dk(){},
im:function im(){},
dD:function dD(){},
iy:function iy(){},
iC:function iC(){},
ik:function ik(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
il:function il(a){this.a=a},
G:function G(){},
cw:function cw(a,b){var _=this
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
c7:function c7(){},
c8:function c8(){},
dL:function dL(){},
dM:function dM(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
c9:function c9(){},
ca:function ca(){},
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
e9:function e9(){}},T={
X:function(a){var u=new T.h1()
u.dK(a)
return u},
ee:function ee(){},
cx:function cx(){},
cF:function cF(){},
az:function az(){this.a=null},
h1:function h1(){this.a=null},
ho:function ho(){}},R={cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},d4:function d4(a){this.b=a
this.c=null},hr:function hr(){this.c=this.b=this.a=null},d6:function d6(a){this.b=a
this.a=this.c=null}},O={
jD:function(a){var u=new O.ah([a])
u.bd(a)
return u},
ah:function ah(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bL:function bL(){this.b=this.a=null},
cG:function cG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(){},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fj:function fj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cH:function cH(){},
fk:function fk(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
am:function am(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fm:function fm(){var _=this
_.e=_.d=_.c=_.b=null},
fn:function fn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fo:function fo(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){}},E={
mh:function(a,b){var u=new E.fU(a)
u.dJ(a,b)
return u},
mn:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibc)return E.kC(a,!0,!0,!0,!1)
u=W.kh()
t=u.style
t.width="100%"
t.height="100%"
s.gbF(a).l(0,u)
return E.kC(u,!0,!0,!0,!1)},
kC:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d1(),p=C.m.dA(a,"webgl2",P.lX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.t("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mh(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.db(a)
t=new X.f3()
t.c=new X.aa(!1,!1,!1)
t.d=P.lY(P.u)
u.b=t
t=new X.fC(u)
t.f=0
t.r=V.aY()
t.x=V.aY()
t.ch=t.Q=1
u.c=t
t=new X.fc(u)
t.r=0
t.x=V.aY()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hs(u)
t.f=V.aY()
t.r=V.aY()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.d([],[[P.d_,P.Z]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.ges(),!1))
u.z.push(W.U(a,"focus",u.gez(),!1))
u.z.push(W.U(a,"blur",u.gek(),!1))
u.z.push(W.U(s,"keyup",u.geD(),!1))
u.z.push(W.U(s,"keydown",u.geB(),!1))
u.z.push(W.U(a,"mousedown",u.geH(),!1))
u.z.push(W.U(a,"mouseup",u.geL(),!1))
u.z.push(W.U(a,r,u.geJ(),!1))
t=u.z
W.jF(a)
W.jF(a)
t.push(W.U(a,W.jF(a),u.geN(),!1))
u.z.push(W.U(s,r,u.gev(),!1))
u.z.push(W.U(s,"mouseup",u.gex(),!1))
u.z.push(W.U(s,"pointerlockchange",u.geP(),!1))
u.z.push(W.U(a,"touchstart",u.gf0(),!1))
u.z.push(W.U(a,"touchend",u.geX(),!1))
u.z.push(W.U(a,"touchmove",u.geZ(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a4(Date.now(),!1)
q.cy=0
q.cC()
return q},
ep:function ep(){},
aP:function aP(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
cZ:function cZ(a){this.c=a
this.b=null},
d1:function d1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hp:function hp(a){this.a=a}},Z={
jV:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bt(c)),35044)
a.bindBuffer(b,null)
return new Z.dg(b,u)},
ac:function(a){return new Z.b2(a)},
dg:function dg(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i8:function i8(a){this.a=a},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
F:function(){var u=new D.ak()
u.d=0
return u},
es:function es(){},
ak:function ak(){var _=this
_.d=_.c=_.b=_.a=null},
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
W:function W(){this.b=null},
bh:function bh(){this.b=null},
bi:function bi(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
aN:function aN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
cC:function cC(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fP:function fP(){},
hc:function hc(){}},X={co:function co(a,b){this.a=a
this.b=b},cB:function cB(a,b){this.a=a
this.b=b},f3:function f3(){var _=this
_.d=_.c=_.b=_.a=null},cE:function cE(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fc:function fc(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},ay:function ay(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fC:function fC(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bN:function bN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fQ:function fQ(){},d5:function d5(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hs:function hs(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},db:function db(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lP:function(a){var u=new X.eW(),t=new V.ai(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kA
if(t==null){t=V.kz(0,0,1,1)
$.kA=t}u.r=t
return u},
jC:function jC(){},
eW:function eW(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cO:function cO(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){}},V={
jx:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aZ(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.a.a5("null",c)
return C.a.a5(C.d.dt(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
by:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.a5(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
a_:function(){var u=$.kr
return u==null?$.kr=V.an(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
an:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
fv:function(a,b,c){return V.an(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jO:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.an(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.an(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kq:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.an(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
ko:function(a,b,c){var u=c.p(0,Math.sqrt(c.B(c))),t=b.ap(u),s=t.p(0,Math.sqrt(t.B(t))),r=u.ap(s),q=new V.w(a.a,a.b,a.c),p=s.O(0).B(q),o=r.O(0).B(q),n=u.O(0).B(q)
return V.an(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aY:function(){var u=$.ku
return u==null?$.ku=new V.a0(0,0):u},
kv:function(){var u=$.bS
return u==null?$.bS=new V.O(0,0,0):u},
kz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cS(a,b,c,d)},
c1:function(){var u=$.kN
return u==null?$.kN=new V.w(0,0,0):u},
mw:function(){var u=$.hU
return u==null?$.hU=new V.w(-1,0,0):u},
jU:function(){var u=$.hV
return u==null?$.hV=new V.w(0,1,0):u},
kO:function(){var u=$.hW
return u==null?$.hW=new V.w(0,0,1):u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a){this.a=a},
cI:function cI(a,b,c,d,e,f,g,h,i){var _=this
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
a0:function a0(a,b){this.a=a
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
D:function D(a,b){this.a=a
this.b=b},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
nK:function(a){P.mo(C.H,new V.jp(a))},
mj:function(a){var u=new V.h6()
u.dM(a,!0)
return u},
jp:function jp(a){this.a=a},
fS:function fS(a){this.a=a
this.c=null},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(){this.b=this.a=null},
h8:function h8(a){this.a=a},
h7:function h7(a){this.a=a}},U={
jE:function(){var u=new U.eu()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
be:function(a){var u=new U.cp()
if(a==null)a=V.a_()
if(null!=a)u.a=a
return u},
jH:function(){var u=new U.bG()
u.bd(U.a6)
u.b_(u.gdP(),u.geT())
u.e=null
u.f=V.a_()
u.r=0
return u},
bV:function(a,b,c){var u,t=new U.cT()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sdz(0)
t.sdi(0,0)
t.sdr(0)
u=t.d
if(!(Math.abs(u-c)<$.x().a)){t.d=c
u=new D.z("deltaYaw",u,c)
u.b=!0
t.D(u)}u=t.e
if(!(Math.abs(u-a)<$.x().a)){t.e=a
u=new D.z("deltaPitch",u,a)
u.b=!0
t.D(u)}u=t.f
if(!(Math.abs(u-b)<$.x().a)){t.f=b
u=new D.z("deltaRoll",u,b)
u.b=!0
t.D(u)}return t},
eu:function eu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cu:function cu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m0:function(a,b){var u=a.aR,t=new A.fi(b,u)
t.dL(b,u)
t.dI(a,b)
return t},
m1:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gad(a0)+a1.gad(a1)+a2.gad(a2)+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.n)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.n)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.n)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
if(k){u=$.aK()
g=new Z.b2(g.a|u.a)}if(j){u=$.aJ()
g=new Z.b2(g.a|u.a)}if(i){u=$.aI()
g=new Z.b2(g.a|u.a)}return new A.fl(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iU:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iV:function(a,b,c){var u
A.iU(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ju(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
n_:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iU(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mX:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iV(b,t,"ambient")
b.a+="\n"},
mY:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iV(b,t,"diffuse")
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
n0:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iV(b,t,"invDiffuse")
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
n6:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iV(b,t,"specular")
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
n2:function(a,b){var u,t,s
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
n4:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iU(b,t,"reflect")
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
n5:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iU(b,t,"refract")
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
mZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.ju(t)
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
r=[P.q]
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.b.t(m," + ")+");\n"}else c.a+="   highLight = "+C.b.t(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.t(o," + ")+");\n"
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
n3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.ju(t)
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
c.a=r+"\n"}r=[P.q]
l=H.d([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.t(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
if(!a.b.a)o=!1
else o=!0
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.t(l," + ")+");\n"
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
n7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.ju(t)
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
c.a=u+"\n"}u=[P.q]
j=H.d([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.t(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
if(!a.b.a)r=!1
else r=!0
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.t(j," + ")+");\n"
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
n1:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.q])
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
u=b.a+="   return "+C.b.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
n8:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
A.n_(a,j)
A.mX(a,j)
A.mY(a,j)
A.n0(a,j)
A.n6(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.n4(a,j)
A.n5(a,j)}A.n2(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.mZ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.n3(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.n7(a,q[o],j)
A.n1(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.q])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
n9:function(a,b){var u,t,s
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
nb:function(a,b){var u
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
na:function(a,b){var u
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
nd:function(a,b){var u,t
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
ne:function(a,b){var u,t
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
nc:function(a,b){var u
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
nf:function(a,b){var u
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
ju:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a8(a,1)},
jR:function(a,b,c,d,e){var u=new A.hz(a,c,e)
u.f=d
P.lZ(d,0,P.u)
return u},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.a=a},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a,b){var _=this
_.hA=_.hz=_.cS=_.cR=_.aR=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hN=_.hM=_.hL=_.bO=_.bN=_.bM=_.bL=_.bK=_.bJ=_.hK=_.hJ=_.cZ=_.hI=_.hH=_.cY=_.cX=_.hG=_.hF=_.cW=_.cV=_.hE=_.hD=_.cU=_.hC=_.hB=_.cT=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cr:function cr(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
fl:function fl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.cR=b4},
bY:function bY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c_:function c_(a,b,c,d,e,f,g,h,i,j){var _=this
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
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d7:function d7(){},
hE:function hE(a){this.a=a},
d8:function d8(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
T:function T(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
bZ:function bZ(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
bo:function bo(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l2:function(a,b,c){var u=null,t=F.jP()
F.cc(t,u,b,c,a,1,0,0,1)
F.cc(t,u,b,c,a,0,1,0,3)
F.cc(t,u,b,c,a,0,0,1,2)
F.cc(t,u,b,c,a,-1,0,0,0)
F.cc(t,u,b,c,a,0,-1,0,0)
F.cc(t,u,b,c,a,0,0,-1,3)
t.a9()
return t},
iP:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.V()
return(u>0?t+4:t)*2},
cc:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.w(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.w(u+a3,t+a1,s+a2)
q=new V.w(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.w(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iP(i)
l=F.iP(j.b)
k=F.jt(d,a0,new F.iO(j,F.iP(j.c),F.iP(j.d),l,m,c),b)
if(k!=null)a.aT(k)},
l5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.jP()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.b1])
q=u.a
p=new V.w(0,0,t)
p=p.p(0,Math.sqrt(p.B(p)))
r.push(q.fp(new V.aB(a,-1,-1,-1),new V.ai(1,1,1,1),new V.O(0,0,c),new V.w(0,0,t),new V.a0(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.i(k)
j=new V.w(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.df(new V.aB(a,-1,-1,-1),null,new V.ai(i,g,h,1),new V.O(m*k,l*k,c),new V.w(0,0,t),new V.a0(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.l(0,f)
r.push(f)}u.d.fn(r)
return u},
l3:function(a,b,c,d){return F.nr(!0,a,b,new F.iY(1,d),c)},
nr:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.jt(c,e,new F.j_(d),null)
if(u==null)return
u.a9()
u.bA()
if(b)u.aT(F.l5(3,!1,1,new F.j0(d),e))
u.aT(F.l5(1,!0,-1,new F.j1(d),e))
return u},
nL:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jq()
t=F.l2(a,new F.jr(s,1),b)
t.bA()
return t},
nP:function(a,b){return F.l4(15,30,b,a,new F.jv())},
nE:function(a){return F.l4(12,120,a,1,new F.je(3,2))},
l4:function(a,b,c,d,e){var u=F.jt(a,b,new F.iZ(e,d,b,c),null)
if(u==null)return
u.a9()
u.bA()
return u},
nz:function(){var u,t={}
t.a=u
t.a=null
t.a=new F.j7()
return F.jt(4,4,new F.j8(t),null)},
jt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jP()
t=H.d([],[F.b1])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.df(g,g,new V.ai(p,0,0,1),g,g,new V.a0(r,1),g,g,0)
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
o=F.df(g,g,new V.ai(j,i,h,1),g,g,new V.a0(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bH(d))}}u.d.fo(a+1,b+1,t)
return u},
bE:function(a,b,c){var u=new F.aQ(),t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.by(a)
u.bz(b)
u.fa(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
lU:function(a,b){var u=new F.bK(),t=a.a
if(t==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
u.by(a)
u.bz(b)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
jP:function(){var u=new F.h2(),t=new F.hX(u)
t.b=!1
t.c=H.d([],[F.b1])
u.a=t
t=new F.h5(u)
t.b=H.d([],[F.bR])
u.b=t
t=new F.h4(u)
t.b=H.d([],[F.bK])
u.c=t
t=new F.h3(u)
t.b=H.d([],[F.aQ])
u.d=t
u.e=null
return u},
df:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b1(),r=new F.i4()
r.b=H.d([],[F.bR])
s.b=r
r=new F.i0()
u=[F.bK]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.hY()
u=[F.aQ]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.lt()
s.e=0
r=$.aL()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aK().a)!==0?e:t
s.x=(u&$.aJ().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.lu().a)!==0?c:t
s.ch=(u&$.bz().a)!==0?i:0
s.cx=(u&$.aI().a)!==0?a:t
return s},
iO:function iO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iY:function iY(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
jq:function jq(){},
jr:function jr(a,b){this.a=a
this.b=b},
jv:function jv(){},
je:function je(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(){},
j8:function j8(a){this.a=a},
aQ:function aQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eP:function eP(){},
h9:function h9(){},
bK:function bK(){this.b=this.a=null},
f5:function f5(){},
hy:function hy(){},
bR:function bR(){this.a=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a
this.b=null},
h4:function h4(a){this.a=a
this.b=null},
h5:function h5(a){this.a=a
this.b=null},
b1:function b1(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a},
hX:function hX(a){this.a=a
this.c=this.b=null},
hY:function hY(){this.d=this.c=this.b=null},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(){this.c=this.b=null},
i2:function i2(){},
i1:function i1(){},
i3:function i3(){},
fI:function fI(){},
i4:function i4(){this.b=null}},K={
la:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.mj("Test 035"),a2=W.kh()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.q]
a1.cM(H.d(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],u))
a1.fl(H.d(["shapes"],u))
a1.cM(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mn(t,!0,!0,!0,!1)
r=new E.aP()
r.a=""
r.b=!0
a1=E.aP
q=O.jD(a1)
r.y=q
q.b_(r.gh2(),r.gh5())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc9(0,a)
r.saU(a)
r.saU(U.be(a))
p=new O.cG()
q=O.jD(V.aw)
p.e=q
q.b_(p.geg(),p.gei())
q=new O.am(p,"emission")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
p.f=q
q=new O.am(p,"ambient")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
p.r=q
q=new O.am(p,"diffuse")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
p.x=q
q=new O.am(p,"invDiffuse")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
p.y=q
q=new O.fo(p,"specular")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
q.ch=100
p.z=q
q=new O.fk(p,"bump")
q.c=new A.Y(!1,!1,!1)
p.Q=q
p.ch=null
q=new O.am(p,"reflect")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
p.cx=q
q=new O.fn(p,"refract")
q.c=new A.Y(!1,!1,!1)
q.f=new V.R(0,0,0)
q.ch=1
p.cy=q
q=new O.fj(p,"alpha")
q.c=new A.Y(!1,!1,!1)
q.f=1
p.db=q
q=new D.cC()
q.bd(D.a5)
q.e=H.d([],[D.aN])
q.f=H.d([],[D.fP])
q.r=H.d([],[D.hc])
q.y=q.x=null
q.c8(q.gee(),q.geR(),q.geV())
p.dx=q
o=new O.fm()
o.b=new V.ai(0,0,0,0)
o.c=1
o.d=10
o.e=!1
p.dy=o
o=q.x
q=o==null?q.x=D.F():o
q.l(0,p.gf7())
q=p.dx
o=q.y
q=o==null?q.y=D.F():o
q.l(0,p.gem())
p.fr=null
q=p.dx
n=V.jU()
o=U.be(V.ko(V.kv(),n,new V.w(1,1,-3)))
m=new V.R(1,1,1)
l=new D.aN()
l.c=new V.R(1,1,1)
l.a=V.kO()
l.d=V.jU()
l.e=V.mw()
k=l.b
l.b=o
o.gA().l(0,l.gdN())
o=new D.z("mover",k,l.b)
o.b=!0
l.aj(o)
if(!l.c.n(0,m)){k=l.c
l.c=m
o=new D.z("color",k,m)
o.b=!0
l.aj(o)}q.l(0,l)
q=p.r
q.saN(0,new V.R(0,0,1))
q=p.x
q.saN(0,new V.R(0,1,0))
q=p.z
q.saN(0,new V.R(1,0,0))
q=p.z
q.cE(new A.Y(!0,!1,!1))
q.cF(10)
p.e.l(0,V.a_())
p.e.l(0,V.a_())
p.e.l(0,V.a_())
p.e.l(0,V.a_())
p.e.l(0,V.a_())
p.e.l(0,V.a_())
p.e.l(0,V.a_())
p.e.l(0,V.a_())
j=U.jH()
q=s.r
o=new U.dd()
l=U.jE()
l.sc7(0,!0)
l.sbU(6.283185307179586)
l.sbW(0)
l.sU(0,0)
l.sbV(100)
l.sR(0)
l.sbI(0.5)
o.b=l
i=o.gay()
l.gA().l(0,i)
l=U.jE()
l.sc7(0,!0)
l.sbU(6.283185307179586)
l.sbW(0)
l.sU(0,0)
l.sbV(100)
l.sR(0)
l.sbI(0.5)
o.c=l
l.gA().l(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.aa(!1,!1,!1)
k=o.d
o.d=h
l=new D.z(a0,k,h)
l.b=!0
o.D(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.z("invertX",l,!1)
l.b=!0
o.D(l)}l=o.r
if(l!==!1){o.r=!1
l=new D.z("invertY",l,!1)
l.b=!0
o.D(l)}o.aM(q)
j.l(0,o)
q=s.r
o=new U.dc()
l=U.jE()
l.sc7(0,!0)
l.sbU(6.283185307179586)
l.sbW(0)
l.sU(0,0)
l.sbV(100)
l.sR(0)
l.sbI(0.2)
o.b=l
l.gA().l(0,o.gay())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.aa(!0,!1,!1)
k=o.c
o.c=h
l=new D.z(a0,k,h)
l.b=!0
o.D(l)
o.aM(q)
j.l(0,o)
q=s.r
o=new U.de()
o.c=0.01
o.e=o.d=0
h=new X.aa(!1,!1,!1)
o.b=h
l=new D.z(a0,a,h)
l.b=!0
o.D(l)
o.aM(q)
j.l(0,o)
j.l(0,U.be(V.fv(0,0,5)))
g=U.jH()
g.l(0,U.be(V.fv(0.5,0,0)))
g.l(0,U.bV(0,1.7,0))
g.l(0,U.bV(0.5,0,0))
g.l(0,U.be(V.jO(0.35)))
g.l(0,U.bV(-0.5,0,0))
g.l(0,U.bV(0,-1.7,0))
g.l(0,U.be(V.fv(-0.5,0,0)))
f=U.jH()
f.l(0,U.bV(0,-1.4,0))
f.l(0,U.be(V.fv(0.5,0,0)))
f.l(0,U.bV(0,1.4,0))
e=new M.cu()
e.a=!0
a1=O.jD(a1)
e.e=a1
a1.b_(e.geo(),e.geq())
e.y=e.x=e.r=e.f=null
d=X.lP(a)
c=new X.cO()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saU(a)
a1=c.c
if(!(Math.abs(a1-1.0471975511965976)<$.x().a)){c.c=1.0471975511965976
a1=new D.z("fov",a1,1.0471975511965976)
a1.b=!0
c.az(a1)}a1=c.d
if(!(Math.abs(a1-0.1)<$.x().a)){c.d=0.1
a1=new D.z("near",a1,0.1)
a1.b=!0
c.az(a1)}a1=c.e
if(!(Math.abs(a1-2000)<$.x().a)){c.e=2000
a1=new D.z("far",a1,2000)
a1.b=!0
c.az(a1)}a1=e.b
if(a1!==c){if(a1!=null)a1.gA().K(0,e.gaf())
k=e.b
e.b=c
c.gA().l(0,e.gaf())
a1=new D.z("camera",k,e.b)
a1.b=!0
e.ak(a1)}a1=e.c
if(a1!==d){if(a1!=null)a1.gA().K(0,e.gaf())
k=e.c
e.c=d
d.gA().l(0,e.gaf())
a1=new D.z("target",k,e.c)
a1.b=!0
e.ak(a1)}e.sds(a)
e.sds(p)
e.e.l(0,r)
e.b.saU(j)
a1=e.f
if(a1==null)a1=e.f=D.F()
a1.l(0,new K.jf(g,f,p))
a1=s.d
if(a1!==e){if(a1!=null)a1.gA().K(0,s.gce())
s.d=e
e.gA().l(0,s.gce())
s.cf()}a1=new K.jn(r)
q=new V.fS("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.r("Failed to find shapes for RadioGroup")
q.cL(0,"Cuboid",new K.jg(a1),!0)
q.aD(0,"Cylinder",new K.jh(a1))
q.aD(0,"Cone",new K.ji(a1))
q.aD(0,"Sphere",new K.jj(a1))
q.aD(0,"Toroid",new K.jk(a1))
q.aD(0,"Knot",new K.jl(a1))
q.aD(0,"Grid",new K.jm(a1))
V.nK(s)},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jL.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.bT(a)},
h:function(a){return"Instance of '"+H.f(H.bU(a))+"'"}}
J.f_.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ib5:1}
J.cz.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cA.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.fN.prototype={}
J.bq.prototype={}
J.aT.prototype={
h:function(a){var u=a[$.lh()]
if(u==null)return this.dG(a)
return"JavaScript function for "+H.f(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aR.prototype={
dm:function(a,b){if(!!a.fixed$length)H.r(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cR(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.r(P.v("remove"))
for(u=0;u<a.length;++u)if(J.B(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bd(a))}},
t:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fZ:function(a){return this.t(a,"")},
fT:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.bd(a))}return u},
fU:function(a,b,c){return this.fT(a,b,c,null)},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dD:function(a,b,c){if(b<0||b>a.length)throw H.c(P.S(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.S(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.j6(a,0)])
return H.d(a.slice(b,c),[H.j6(a,0)])},
gfS:function(a){if(a.length>0)return a[0]
throw H.c(H.kk())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kk())},
bc:function(a,b){if(!!a.immutable$list)H.r(P.v("sort"))
H.cV(a,0,a.length-1,b)},
ao:function(a,b){var u
for(u=0;u<a.length;++u)if(J.B(a[u],b))return!0
return!1},
h:function(a){return P.jI(a,"[","]")},
gX:function(a){return new J.a3(a,a.length)},
gG:function(a){return H.bT(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.v("set length"))
if(b<0)throw H.c(P.S(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.bx(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.r(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bx(a,b))
a[b]=c},
$ij:1,
$im:1}
J.jK.prototype={}
J.a3.prototype={
gP:function(a){return this.d},
H:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bJ.prototype={
fB:function(a,b){var u
if(typeof b!=="number")throw H.c(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb6(b)
if(this.gb6(a)===u)return 0
if(this.gb6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb6:function(a){return a===0?1/a<0:a<0},
d0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
dt:function(a,b){var u
if(b>20)throw H.c(P.S(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb6(a))return"-"+u
return u},
aX:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.S(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.v("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cH(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cH(a,b)},
cH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aC:function(a,b){var u
if(a>0)u=this.cG(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fe:function(a,b){if(b<0)throw H.c(H.at(b))
return this.cG(a,b)},
cG:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia8:1}
J.cy.prototype={$iu:1}
J.f0.prototype={}
J.aS.prototype={
S:function(a,b){if(b<0)throw H.c(H.bx(a,b))
if(b>=a.length)H.r(H.bx(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bx(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.c(P.kd(b,null,null))
return a+b},
aI:function(a,b,c,d){var u,t
c=P.aZ(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
Z:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.S(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.Z(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.at(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.c(P.cR(b,null))
if(b>c)throw H.c(P.cR(b,null))
if(c>a.length)throw H.c(P.cR(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a5:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
b5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.S(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
d6:function(a,b){return this.b5(a,b,0)},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$iq:1}
H.M.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.S(this.a,b)},
$ap:function(){return[P.u]},
$aj:function(){return[P.u]},
$am:function(){return[P.u]}}
H.eK.prototype={}
H.cD.prototype={
gP:function(a){return this.d},
H:function(){var u,t=this,s=t.a,r=J.cf(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bd(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fg.prototype={
gX:function(a){return new H.fh(J.b9(this.a),this.b)},
gk:function(a){return J.ad(this.a)},
J:function(a,b){return this.b.$1(J.jA(this.a,b))},
$aj:function(a,b){return[b]}}
H.fh.prototype={
H:function(){var u=this,t=u.b
if(t.H()){u.a=u.c.$1(t.gP(t))
return!0}u.a=null
return!1},
gP:function(a){return this.a}}
H.i9.prototype={
gX:function(a){return new H.ia(J.b9(this.a),this.b)}}
H.ia.prototype={
H:function(){var u,t
for(u=this.a,t=this.b;u.H();)if(t.$1(u.gP(u)))return!0
return!1},
gP:function(a){var u=this.a
return u.gP(u)}}
H.cv.prototype={}
H.hJ.prototype={
j:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.d9.prototype={}
H.ew.prototype={
h:function(a){return P.jN(this)},
j:function(a,b,c){return H.lL()},
$iN:1}
H.ex.prototype={
gk:function(a){return this.a},
b4:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.b4(0,b))return
return this.cq(b)},
cq:function(a){return this.b[a]},
I:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cq(s))}}}
H.hw.prototype={
a4:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fJ.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f2.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hI.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jw.prototype={
$1:function(a){if(!!J.Q(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dP.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ght:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hl.prototype={}
H.hf.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ec(u)+"'"}}
H.bA.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bT(this.a)
else u=typeof t!=="object"?J.ck(t):H.bT(t)
return(u^H.bT(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bU(u))+"'")}}
H.er.prototype={
h:function(a){return this.a}}
H.h_.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.K.prototype={
gk:function(a){return this.a},
gah:function(a){return new H.f7(this,[H.j6(this,0)])},
b4:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cn(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cn(t,b)}else return s.fW(b)},
fW:function(a){var u=this,t=u.d
if(t==null)return!1
return u.bR(u.bj(t,u.bQ(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b0(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b0(r,b)
s=t==null?null:t.b
return s}else return q.fX(b)},
fX:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bj(r,s.bQ(a))
t=s.bR(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cj(u==null?s.b=s.br():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cj(t==null?s.c=s.br():t,b,c)}else s.fY(b,c)},
fY:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.br()
u=r.bQ(a)
t=r.bj(q,u)
if(t==null)r.bw(q,u,[r.bs(a,b)])
else{s=r.bR(t,a)
if(s>=0)t[s].b=b
else t.push(r.bs(a,b))}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bd(u))
t=t.c}},
cj:function(a,b,c){var u=this.b0(a,b)
if(u==null)this.bw(a,b,this.bs(b,c))
else u.b=c},
bs:function(a,b){var u=this,t=new H.f6(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bQ:function(a){return J.ck(a)&0x3ffffff},
bR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1},
h:function(a){return P.jN(this)},
b0:function(a,b){return a[b]},
bj:function(a,b){return a[b]},
bw:function(a,b,c){a[b]=c},
e4:function(a,b){delete a[b]},
cn:function(a,b){return this.b0(a,b)!=null},
br:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bw(t,u,t)
this.e4(t,u)
return t}}
H.f6.prototype={}
H.f7.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.f8(u,u.r)
t.c=u.e
return t}}
H.f8.prototype={
gP:function(a){return this.d},
H:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bd(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ja.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jb.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jc.prototype={
$1:function(a){return this.a(a)}}
H.f1.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imf:1}
H.bO.prototype={$ibO:1}
H.aV.prototype={$iaV:1}
H.cJ.prototype={
gk:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.bP.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]},
j:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$ap:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$im:1,
$am:function(){return[P.J]}}
H.cK.prototype={
j:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$ap:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$im:1,
$am:function(){return[P.u]}}
H.fD.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fE.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fF.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fG.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fH.prototype={
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.cL.prototype={
gk:function(a){return a.length},
i:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.bQ.prototype={
gk:function(a){return a.length},
i:function(a,b){H.as(b,a,a.length)
return a[b]},
$ibQ:1,
$ibn:1}
H.c3.prototype={}
H.c4.prototype={}
H.c5.prototype={}
H.c6.prototype={}
P.ic.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.ib.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.id.prototype={
$0:function(){this.a.$0()}}
P.ie.prototype={
$0:function(){this.a.$0()}}
P.dV.prototype={
dS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bw(new P.iE(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bw(new P.iD(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id2:1}
P.iE.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iD.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dH(u,q)}s.c=r
t.d.$1(s)}}
P.dh.prototype={}
P.d_.prototype={}
P.hi.prototype={}
P.d2.prototype={}
P.iN.prototype={}
P.iW.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cN():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.it.prototype={
hn:function(a){var u,t,s,r=null
try{if(C.f===$.ae){a.$0()
return}P.nh(r,r,this,a)}catch(s){u=H.b6(s)
t=H.k4(s)
P.kX(r,r,this,u,t)}},
ho:function(a,b){var u,t,s,r=null
try{if(C.f===$.ae){a.$1(b)
return}P.ni(r,r,this,a,b)}catch(s){u=H.b6(s)
t=H.k4(s)
P.kX(r,r,this,u,t)}},
hp:function(a,b){return this.ho(a,b,null)},
fv:function(a){return new P.iu(this,a)},
cN:function(a,b){return new P.iv(this,a,b)}}
P.iu.prototype={
$0:function(){return this.a.hn(this.b)}}
P.iv.prototype={
$1:function(a){return this.a.hp(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iq.prototype={
gX:function(a){var u=new P.dx(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ck(u==null?s.b=P.jW():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ck(t==null?s.c=P.jW():t,b)}else return s.dV(0,b)},
dV:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jW()
u=s.cl(b)
t=r[u]
if(t==null)r[u]=[s.bf(b)]
else{if(s.cr(t,b)>=0)return!1
t.push(s.bf(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f3(this.c,b)
else return this.f2(0,b)},
f2:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.e7(r,b)
t=s.cr(u,b)
if(t<0)return!1
s.cI(u.splice(t,1)[0])
return!0},
ck:function(a,b){if(a[b]!=null)return!1
a[b]=this.bf(b)
return!0},
f3:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cI(u)
delete a[b]
return!0},
cu:function(){this.r=1073741823&this.r+1},
bf:function(a){var u,t=this,s=new P.ir(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cu()
return s},
cI:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cu()},
cl:function(a){return J.ck(a)&1073741823},
e7:function(a,b){return a[this.cl(b)]},
cr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.B(a[t].a,b))return t
return-1}}
P.ir.prototype={}
P.dx.prototype={
gP:function(a){return this.d},
H:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bd(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f9.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:3}
P.fa.prototype={$ij:1,$im:1}
P.p.prototype={
gX:function(a){return new H.cD(a,this.gk(a))},
J:function(a,b){return this.i(a,b)},
hr:function(a,b){var u,t,s=this,r=H.d([],[H.nx(s,a,"p",0)])
C.b.sk(r,s.gk(a))
for(u=0;u<s.gk(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hq:function(a){return this.hr(a,!0)},
fQ:function(a,b,c,d){var u
P.aZ(b,c,this.gk(a))
for(u=b;u<c;++u)this.j(a,u,d)},
h:function(a){return P.jI(a,"[","]")}}
P.fd.prototype={}
P.fe.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:3}
P.av.prototype={
I:function(a,b){var u,t
for(u=J.b9(this.gah(a));u.H();){t=u.gP(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.ad(this.gah(a))},
h:function(a){return P.jN(a)},
$iN:1}
P.iF.prototype={
j:function(a,b,c){throw H.c(P.v("Cannot modify unmodifiable map"))}}
P.ff.prototype={
i:function(a,b){return J.cj(this.a,b)},
j:function(a,b,c){J.jy(this.a,b,c)},
I:function(a,b){J.kb(this.a,b)},
gk:function(a){return J.ad(this.a)},
h:function(a){return J.a2(this.a)},
$iN:1}
P.da.prototype={}
P.iw.prototype={
h:function(a){return P.jI(this,"{","}")},
J:function(a,b){var u,t,s
P.ky(b,"index")
for(u=P.mC(this,this.r),t=0;u.H();){s=u.d
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
$ij:1}
P.dy.prototype={}
P.e_.prototype={}
P.en.prototype={
h1:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aZ(a0,a1,b.length)
u=$.lw()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.j9(C.a.E(b,n))
j=H.j9(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.cQ(m)
s=n
continue}}throw H.c(P.L("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.ke(b,p,a1,q,o,f)
else{e=C.c.aZ(f-1,4)+1
if(e===1)throw H.c(P.L(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aI(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ke(b,p,a1,q,o,d)
else{e=C.c.aZ(d,4)
if(e===1)throw H.c(P.L(c,b,a1))
if(e>1)b=C.a.aI(b,a1,a1,e===2?"==":"=")}return b}}
P.eo.prototype={}
P.et.prototype={}
P.ey.prototype={}
P.eL.prototype={}
P.hR.prototype={
gfP:function(){return C.G}}
P.hT.prototype={
bG:function(a){var u,t,s=P.aZ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iM(u)
if(t.e6(a,0,s)!==s)t.cK(J.lC(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mT(0,t.b,u.length)))}}
P.iM.prototype={
cK:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
e6:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cK(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.hS.prototype={
bG:function(a){var u,t,s,r,q,p,o,n,m=P.mr(!1,a,0,null)
if(m!=null)return m
u=P.aZ(0,null,J.ad(a))
t=P.kZ(a,0,u)
if(t>0){s=P.bW(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.iL(!1,r)
o.c=p
o.fC(a,q,u)
if(o.e>0){H.r(P.L("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.cQ(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iL.prototype={
fC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cf(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.a7()
if((r&192)!==128){q=P.L(k+C.c.aX(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.r,q)
if(j<=C.r[q]){q=P.L("Overlong encoding of 0x"+C.c.aX(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.L("Character outside valid Unicode range: 0x"+C.c.aX(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.cQ(j)
l.c=!1}for(q=s<c;q;){p=P.kZ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bW(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.L("Negative UTF-8 code unit: -0x"+C.c.aX(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.L(k+C.c.aX(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.b5.prototype={}
P.a4.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.c.aC(u,30))&1073741823},
h:function(a){var u=this,t=P.lM(H.mb(u)),s=P.cq(H.m9(u)),r=P.cq(H.m5(u)),q=P.cq(H.m6(u)),p=P.cq(H.m8(u)),o=P.cq(H.ma(u)),n=P.lN(H.m7(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aO.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aO&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
h:function(a){var u,t,s,r=new P.eJ(),q=this.a
if(q<0)return"-"+new P.aO(0-q).h(0)
u=r.$1(C.c.a0(q,6e7)%60)
t=r.$1(C.c.a0(q,1e6)%60)
s=new P.eI().$1(q%1e6)
return""+C.c.a0(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eI.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eJ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bf.prototype={}
P.cN.prototype={
h:function(a){return"Throw of null."}}
P.af.prototype={
gbh:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbg:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbh()+o+u
if(!q.a)return t
s=q.gbg()
r=P.jG(q.b)
return t+s+": "+r}}
P.bl.prototype={
gbh:function(){return"RangeError"},
gbg:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.eY.prototype={
gbh:function(){return"RangeError"},
gbg:function(){var u,t=this.b
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.hK.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hG.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.he.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ev.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jG(u)+"."}}
P.fM.prototype={
h:function(a){return"Out of Memory"},
$ibf:1}
P.cX.prototype={
h:function(a){return"Stack Overflow"},
$ibf:1}
P.eD.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dq.prototype={
h:function(a){return"Exception: "+this.a}}
P.eV.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.S(f,q)
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
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.u.prototype={}
P.j.prototype={
gk:function(a){var u,t=this.gX(this)
for(u=0;t.H();)++u
return u},
J:function(a,b){var u,t,s
P.ky(b,"index")
for(u=this.gX(this),t=0;u.H();){s=u.gP(u)
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
h:function(a){return P.lR(this,"(",")")}}
P.eZ.prototype={}
P.m.prototype={$ij:1}
P.N.prototype={}
P.aW.prototype={
gG:function(a){return P.Z.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.a8.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gG:function(a){return H.bT(this)},
h:function(a){return"Instance of '"+H.f(H.bU(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.P.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hP.prototype={
$2:function(a,b){var u,t,s,r=J.k3(b).d6(b,"=")
if(r===-1){if(b!=="")J.jy(a,P.k_(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a8(b,r+1)
s=this.a
J.jy(a,P.k_(u,0,u.length,s,!0),P.k_(t,0,t.length,s,!0))}return a}}
P.hM.prototype={
$2:function(a,b){throw H.c(P.L("Illegal IPv4 address, "+a,this.a,b))}}
P.hN.prototype={
$2:function(a,b){throw H.c(P.L("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hO.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eb(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.br.prototype={
gdw:function(){return this.b},
gbP:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.q(u,1,u.length-1)
return u},
gb8:function(a){var u=this.d
if(u==null)return P.kQ(this.a)
return u},
gbZ:function(a){var u=this.f
return u==null?"":u},
gd1:function(){var u=this.r
return u==null?"":u},
dn:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.jY(null,0,0,b)
return new P.br(q,o,m,n,u,s,r.r)},
gc_:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.q
u=this.Q=new P.da(P.kJ(t==null?"":t),[u,u])
t=u}return t},
gd2:function(){return this.c!=null},
gd5:function(){return this.f!=null},
gd3:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.f(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.f(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.f(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ijS)if(s.a==b.gbb())if(s.c!=null===b.gd2())if(s.b==b.gdw())if(s.gbP(s)==b.gbP(b))if(s.gb8(s)==b.gb8(b))if(s.e===b.gdh(b)){u=s.f
t=u==null
if(!t===b.gd5()){if(t)u=""
if(u===b.gbZ(b)){u=s.r
t=u==null
if(!t===b.gd3()){if(t)u=""
u=u===b.gd1()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.h(0)):u},
$ijS:1,
gbb:function(){return this.a},
gdh:function(a){return this.e}}
P.iG.prototype={
$1:function(a){throw H.c(P.L("Invalid port",this.a,this.b+1))}}
P.iH.prototype={
$1:function(a){return P.iK(C.N,a,C.e,!1)}}
P.iJ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.iK(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.iK(C.h,b,C.e,!0))}}}
P.iI.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b9(b),t=this.a;u.H();)t.$2(a,u.gP(u))}}
P.hL.prototype={
gdv:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.b5(u,"?",o)
s=u.length
if(t>=0){r=P.cb(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.ij("data",p,p,p,P.cb(u,o,s,C.u,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iR.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iQ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.lD(u,0,96,b)
return u},
$S:16}
P.iS.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.iT.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.ix.prototype={
gd2:function(){return this.c>0},
gd4:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.i(t)
t=u+1<t
u=t}else u=!1
return u},
gd5:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gd3:function(){return this.r<this.a.length},
gcs:function(){return this.b===4&&C.a.a2(this.a,"http")},
gct:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbb:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcs())q=t.x="http"
else if(t.gct()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdw:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gbP:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gb8:function(a){var u,t=this
if(t.gd4()){u=t.d
if(typeof u!=="number")return u.v()
return P.eb(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcs())return 80
if(t.gct())return 443
return 0},
gdh:function(a){return C.a.q(this.a,this.e,this.f)},
gbZ:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.a.q(this.a,u+1,t):""},
gd1:function(){var u=this.r,t=this.a
return u<t.length?C.a.a8(t,u+1):""},
gc_:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.O
t=P.q
return new P.da(P.kJ(u.gbZ(u)),[t,t])},
dn:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbb(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gd4()?p.gb8(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.jY(o,0,0,b)
s=p.r
q=s<l.length?C.a.a8(l,s+1):o
return new P.br(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ijS&&this.a===b.h(0)},
h:function(a){return this.a},
$ijS:1}
P.ij.prototype={}
W.l.prototype={}
W.ed.prototype={
gk:function(a){return a.length}}
W.ef.prototype={
h:function(a){return String(a)}}
W.eg.prototype={
h:function(a){return String(a)}}
W.bb.prototype={$ibb:1}
W.bc.prototype={
dA:function(a,b,c){var u=a.getContext(b,P.nq(c))
return u},
$ibc:1}
W.aM.prototype={
gk:function(a){return a.length}}
W.ez.prototype={
gk:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bD.prototype={
gk:function(a){return a.length}}
W.eA.prototype={}
W.a9.prototype={}
W.aj.prototype={}
W.eB.prototype={
gk:function(a){return a.length}}
W.eC.prototype={
gk:function(a){return a.length}}
W.eE.prototype={
gk:function(a){return a.length}}
W.eF.prototype={
h:function(a){return String(a)}}
W.cs.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[[P.a7,P.a8]]},
$ap:function(){return[[P.a7,P.a8]]},
$ij:1,
$aj:function(){return[[P.a7,P.a8]]},
$im:1,
$am:function(){return[[P.a7,P.a8]]}}
W.ct.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaw(a))+" x "+H.f(this.gaq(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia7)return!1
return a.left===u.gb7(b)&&a.top===u.gb9(b)&&this.gaw(a)===u.gaw(b)&&this.gaq(a)===u.gaq(b)},
gG:function(a){return W.kP(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaw(a)),C.d.gG(this.gaq(a)))},
gcO:function(a){return a.bottom},
gaq:function(a){return a.height},
gb7:function(a){return a.left},
gc2:function(a){return a.right},
gb9:function(a){return a.top},
gaw:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a8]}}
W.eG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[P.q]},
$ap:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]},
$im:1,
$am:function(){return[P.q]}}
W.eH.prototype={
gk:function(a){return a.length}}
W.ih.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.hq(this)
return new J.a3(u,u.length)},
$ap:function(){return[W.V]},
$aj:function(){return[W.V]},
$am:function(){return[W.V]}}
W.V.prototype={
gbF:function(a){return new W.ih(a,a.children)},
gcP:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a8])},
h:function(a){return a.localName},
$iV:1}
W.h.prototype={$ih:1}
W.e.prototype={
fm:function(a,b,c,d){if(c!=null)this.dW(a,b,c,!1)},
dW:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)}}
W.al.prototype={$ial:1}
W.bF.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.al]},
$ap:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]},
$im:1,
$am:function(){return[W.al]},
$ibF:1}
W.eQ.prototype={
gk:function(a){return a.length}}
W.eU.prototype={
gk:function(a){return a.length}}
W.au.prototype={$iau:1}
W.eX.prototype={
gk:function(a){return a.length}}
W.bH.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$ap:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.bI.prototype={$ibI:1}
W.bj.prototype={$ibj:1}
W.fb.prototype={
h:function(a){return String(a)}}
W.fw.prototype={
gk:function(a){return a.length}}
W.bM.prototype={$ibM:1}
W.fx.prototype={
i:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gah:function(a){var u=H.d([],[P.q])
this.I(a,new W.fy(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.v("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
W.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fz.prototype={
i:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gah:function(a){var u=H.d([],[P.q])
this.I(a,new W.fA(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.v("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
W.fA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.fB.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.ax]},
$ap:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$im:1,
$am:function(){return[W.ax]}}
W.ao.prototype={$iao:1}
W.ig.prototype={
j:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.cw(u,u.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ap:function(){return[W.C]},
$aj:function(){return[W.C]},
$am:function(){return[W.C]}}
W.C.prototype={
hl:function(a,b){var u,t
try{u=a.parentNode
J.lA(u,b,a)}catch(t){H.b6(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dF(a):u},
f5:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$ap:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.aA.prototype={$iaA:1,
gk:function(a){return a.length}}
W.fO.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aA]},
$ap:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$im:1,
$am:function(){return[W.aA]}}
W.fY.prototype={
i:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gah:function(a){var u=H.d([],[P.q])
this.I(a,new W.fZ(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.v("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
W.fZ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h0.prototype={
gk:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.ha.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aC]},
$ap:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$im:1,
$am:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.hb.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aD]},
$ap:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$im:1,
$am:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gk:function(a){return a.length}}
W.hg.prototype={
i:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gah:function(a){var u=H.d([],[P.q])
this.I(a,new W.hh(u))
return u},
gk:function(a){return a.length},
$iN:1,
$aN:function(){return[P.q,P.q]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.aF.prototype={$iaF:1}
W.aq.prototype={$iaq:1}
W.hm.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aq]},
$ap:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]},
$im:1,
$am:function(){return[W.aq]}}
W.hn.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aF]},
$ap:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$im:1,
$am:function(){return[W.aF]}}
W.hq.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bm.prototype={$ibm:1}
W.ht.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aG]},
$ap:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$im:1,
$am:function(){return[W.aG]}}
W.hu.prototype={
gk:function(a){return a.length}}
W.b0.prototype={}
W.hQ.prototype={
h:function(a){return String(a)}}
W.i7.prototype={
gk:function(a){return a.length}}
W.b3.prototype={
gfH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib3:1}
W.c2.prototype={
f6:function(a,b){return a.requestAnimationFrame(H.bw(b,1))},
e5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ii.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.E]},
$ap:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$im:1,
$am:function(){return[W.E]}}
W.dk.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ia7)return!1
return a.left===u.gb7(b)&&a.top===u.gb9(b)&&a.width===u.gaw(b)&&a.height===u.gaq(b)},
gG:function(a){return W.kP(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaq:function(a){return a.height},
gaw:function(a){return a.width}}
W.im.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.au]},
$ap:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]},
$im:1,
$am:function(){return[W.au]}}
W.dD.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.C]},
$ap:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]},
$im:1,
$am:function(){return[W.C]}}
W.iy.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.aE]},
$ap:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$im:1,
$am:function(){return[W.aE]}}
W.iC.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iy:1,
$ay:function(){return[W.ap]},
$ap:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]},
$im:1,
$am:function(){return[W.ap]}}
W.ik.prototype={}
W.il.prototype={
$1:function(a){return this.a.$1(a)}}
W.G.prototype={
gX:function(a){return new W.cw(a,this.gk(a))}}
W.cw.prototype={
H:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cj(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gP:function(a){return this.d}}
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
W.c7.prototype={}
W.c8.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.c9.prototype={}
W.ca.prototype={}
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
P.iz.prototype={
d_:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
c6:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$ia4)return new Date(a.a)
if(!!u.$imf)throw H.c(P.hH("structured clone of RegExp"))
if(!!u.$ial)return a
if(!!u.$ibb)return a
if(!!u.$ibF)return a
if(!!u.$ibI)return a
if(!!u.$ibO||!!u.$iaV||!!u.$ibM)return a
if(!!u.$iN){t=p.d_(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.I(a,new P.iB(o,p))
return o.a}if(!!u.$im){t=p.d_(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fE(a,t)}throw H.c(P.hH("structured clone of other type"))},
fE:function(a,b){var u,t=J.cf(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.c6(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iB.prototype={
$2:function(a,b){this.a.a[a]=this.b.c6(b)},
$S:3}
P.iX.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iA.prototype={}
P.eR.prototype={
gb1:function(){var u=this.b,t=H.j5(u,"p",0)
return new H.fg(new H.i9(u,new P.eS(),[t]),new P.eT(),[t,W.V])},
j:function(a,b,c){var u=this.gb1()
J.lE(u.b.$1(J.jA(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ad(this.gb1().a)},
i:function(a,b){var u=this.gb1()
return u.b.$1(J.jA(u.a,b))},
gX:function(a){var u=P.kn(this.gb1(),!1,W.V)
return new J.a3(u,u.length)},
$ap:function(){return[W.V]},
$aj:function(){return[W.V]},
$am:function(){return[W.V]}}
P.eS.prototype={
$1:function(a){return!!J.Q(a).$iV}}
P.eT.prototype={
$1:function(a){return H.o(a,"$iV")}}
P.is.prototype={
gc2:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.i(t)
return u+t},
gcO:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.i(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia7){t=q.a
if(t==u.gb7(b)){s=q.b
if(s==u.gb9(b)){r=q.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.i(r)
if(t+r===u.gc2(b)){t=q.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.i(t)
u=s+t===u.gcO(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.ck(t),r=u.b,q=J.ck(r),p=u.c
if(typeof t!=="number")return t.v()
if(typeof p!=="number")return H.i(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.i(t)
t=C.c.gG(r+t)
return P.mB(P.ip(P.ip(P.ip(P.ip(0,s),q),p),t))}}
P.a7.prototype={
gb7:function(a){return this.a},
gb9:function(a){return this.b},
gaw:function(a){return this.c},
gaq:function(a){return this.d}}
P.aU.prototype={$iaU:1}
P.f4.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$im:1,
$am:function(){return[P.aU]}}
P.aX.prototype={$iaX:1}
P.fK.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aX]},
$ij:1,
$aj:function(){return[P.aX]},
$im:1,
$am:function(){return[P.aX]}}
P.fR.prototype={
gk:function(a){return a.length}}
P.hj.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]},
$im:1,
$am:function(){return[P.q]}}
P.k.prototype={
gbF:function(a){return new P.eR(a,new W.ig(a))}}
P.b_.prototype={$ib_:1}
P.hv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ap:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]},
$im:1,
$am:function(){return[P.b_]}}
P.dv.prototype={}
P.dw.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.bn.prototype={$ij:1,
$aj:function(){return[P.u]},
$im:1,
$am:function(){return[P.u]}}
P.ej.prototype={
gk:function(a){return a.length}}
P.ek.prototype={
i:function(a,b){return P.aH(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aH(u.value[1]))}},
gah:function(a){var u=H.d([],[P.q])
this.I(a,new P.el(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.v("Not supported"))},
$iN:1,
$aN:function(){return[P.q,null]}}
P.el.prototype={
$2:function(a,b){return this.a.push(a)}}
P.em.prototype={
gk:function(a){return a.length}}
P.ba.prototype={}
P.fL.prototype={
gk:function(a){return a.length}}
P.di.prototype={}
P.hd.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.aH(a.item(b))},
j:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.N,,,]]},
$ij:1,
$aj:function(){return[[P.N,,,]]},
$im:1,
$am:function(){return[[P.N,,,]]}}
P.dN.prototype={}
P.dO.prototype={}
T.ee.prototype={
aG:function(a,b){return!0},
h:function(a){return"all"}}
T.cx.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aG(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cF.prototype={}
T.az.prototype={
aG:function(a,b){return!this.dE(0,b)},
h:function(a){return"!["+this.cb(0)+"]"}}
T.h1.prototype={
dK:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
u=new H.K([P.u,P.b5])
for(t=new H.cD(a,a.gk(a));t.H();)u.j(0,t.d,!0)
this.a=u},
aG:function(a,b){return this.a.b4(0,b)},
h:function(a){var u=this.a
return P.bW(u.gah(u),0,null)}}
R.cY.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d6(this.a.N(0,b))
r.a=H.d([],[T.cF])
r.c=!1
this.c.push(r)
return r},
fR:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
h:function(a){return this.b}}
R.d3.prototype={
h:function(a){var u=H.le(this.b,"\n","\\n"),t=H.le(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d4.prototype={
h:function(a){return this.b}}
R.hr.prototype={
N:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.cY(this,b)
u.c=H.d([],[R.d6])
this.a.j(0,b,u)}return u},
aY:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d4(a)
u=P.q
t.c=new H.K([u,u])
this.b.j(0,a,t)}return t},
hs:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[R.d3]),k=this.c,j=[P.u],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.E(a,s)
q=k.fR(r)
if(q==null){if(t==null){i.push(r)
p=P.bW(i,0,m)
throw H.c(P.t("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.bW(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.d3(n==null?o.b:n,p,s)}++s}}}}
R.d6.prototype={
h:function(a){return this.b.b+": "+this.cb(0)}}
O.ah.prototype={
bd:function(a){var u=this
u.a=H.d([],[a])
u.d=u.c=u.b=null},
c8:function(a,b,c){this.b=b
this.c=a
this.d=c},
b_:function(a,b){return this.c8(a,null,b)},
cA:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cv:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.a3(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.j5(s,"ah",0)]
if(s.cA(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.cv(t,H.d([b],r))}},
j:function(a,b,c){var u,t,s,r=this,q=r.a
if(b>=q.length)return H.b(q,b)
u=q[b]
if(!J.B(u,c)&&r.cA(H.d([c],[H.j5(r,"ah",0)]))){q=r.a
if(b>=q.length)return H.b(q,b)
q[b]=c
q=[H.j5(r,"ah",0)]
t=H.d([u],q)
s=r.d
if(s!=null)s.$2(b,t)
r.cv(b,H.d([c],q))}},
$ij:1}
O.bL.prototype={
gk:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.F():u},
ax:function(){var u=this.b
if(u!=null)u.F(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.b.gas(u)
else return V.a_()},
dk:function(a){var u=this.a
if(a==null)u.push(V.a_())
else u.push(a)
this.ax()},
bY:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}}}
E.ep.prototype={}
E.aP.prototype={
sc9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdf())
u=s.c
if(u!=null)u.gA().l(0,s.gdf())
t=new D.z("shape",r,s.c)
t.b=!0
s.au(t)}},
saU:function(a){var u,t,s=this
if(!J.B(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdd())
if(a!=null)a.gA().l(0,s.gdd())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.au(t)}},
ai:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.B(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.au(t)}for(r=s.y.a,r=new J.a3(r,r.length);r.H();)r.d.ai(0,b)},
aH:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gY(s))
else s.a.push(r.m(0,s.gY(s)))
s.ax()
a.dl(t.f)
s=a.dy
u=(s&&C.b).gas(s)
if(u!=null&&t.d!=null)u.hk(a,t)
for(s=t.y.a,s=new J.a3(s,s.length);s.H();)s.d.aH(a)
a.dj()
a.dx.bY()},
au:function(a){var u=this.z
if(u!=null)u.F(a)},
W:function(){return this.au(null)},
dg:function(a){this.e=null
this.au(a)},
h8:function(){return this.dg(null)},
de:function(a){this.au(a)},
h7:function(){return this.de(null)},
dc:function(a){this.au(a)},
h4:function(){return this.dc(null)},
h3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gda(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ak()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.W()},
h6:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gda(),s=0;s<b.length;b.length===u||(0,H.n)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.ak()
q.d=0
r.z=q}q.K(0,t)}}this.W()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fU.prototype={
dJ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a4(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bL()
t=[V.aw]
u.a=H.d([],t)
u.gA().l(0,new E.fV(s))
s.cy=u
u=new O.bL()
u.a=H.d([],t)
u.gA().l(0,new E.fW(s))
s.db=u
u=new O.bL()
u.a=H.d([],t)
u.gA().l(0,new E.fX(s))
s.dx=u
u=H.d([],[O.d0])
s.dy=u
u.push(null)
s.fr=new H.K([P.q,A.cU])},
ghh:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.m(0,u.gY(u))
s=u}return s},
dl:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gas(u):a)},
dj:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fV.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fW.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fX.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cZ.prototype={}
E.d1.prototype={
cg:function(a){this.dq()},
cf:function(){return this.cg(null)},
gfV:function(){var u,t=this,s=Date.now(),r=C.c.a0(P.kj(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a4(s,!1)
return u/r},
cC:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.i(r)
u=C.d.d0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.d0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kD(C.n,s.ghm())}},
dq:function(){if(!this.ch){this.ch=!0
var u=window
C.x.e5(u)
C.x.f6(u,W.l_(new E.hp(this),P.a8))}},
hj:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cC()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a4(r,!1)
s.y=P.kj(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.ax()
r=s.db
C.b.sk(r.a,0)
r.ax()
r=s.dx
C.b.sk(r.a,0)
r.ax()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.aH(p.e)}}catch(q){u=H.b6(q)
t=H.k4(q)
P.k7("Error: "+H.f(u))
P.k7("Stack: "+H.f(t))
throw H.c(u)}}}
E.hp.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hj()}}}
Z.dg.prototype={}
Z.cm.prototype={
b3:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b6(s)
t=P.t('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.i8.prototype={}
Z.cn.prototype={
aF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b3:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b3(a)},
du:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aH:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.q],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].h(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a2(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.t(p,", ")+"\nAttrs:   "+C.b.t(r,", ")}}
Z.bg.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bU(this.c))+"'")+"]"}}
Z.b2.prototype={
gca:function(a){var u=this.a,t=(u&$.aL().a)!==0?3:0
if((u&$.aK().a)!==0)t+=3
if((u&$.aJ().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.aI().a)!==0?t+4:t},
fq:function(a){var u,t=$.aL(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aI()
if((s&t.a)!==0)if(u===a)return t
return $.lv()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
h:function(a){var u=H.d([],[P.q]),t=this.a
if((t&$.aL().a)!==0)u.push("Pos")
if((t&$.aK().a)!==0)u.push("Norm")
if((t&$.aJ().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.ch().a)!==0)u.push("Clr3")
if((t&$.ci().a)!==0)u.push("Clr4")
if((t&$.bz().a)!==0)u.push("Weight")
if((t&$.aI().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.t(u,"|")}}
D.es.prototype={}
D.ak.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.ao(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.ao(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.I(P.kn(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eN(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.W]}])
C.b.I(u,new D.eO(q))}return!0},
aa:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.eN.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eO.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bh.prototype={}
D.bi.prototype={}
D.z.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.co.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.co))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cB.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.f3.prototype={
hd:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
h9:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.cE.prototype={}
X.fc.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a0(o.a+n*m,o.b+u*t)
t=q.a.gaE()
r=new X.ay(a,V.aY(),q.x,t,s)
r.b=!0
q.z=new P.a4(p,!1)
q.x=s
return r},
bX:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dB()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aK(a,b))
return!0},
he:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaE()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.bN(new V.D(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
eG:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cE(c,r.a.gaE(),b)
s.b=!0
t.F(s)
r.y=new P.a4(u,!1)
r.x=V.aY()}}
X.aa.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aa))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ay.prototype={}
X.fC.prototype={
bi:function(a,b,c){var u=this,t=new P.a4(Date.now(),!1),s=u.a.gaE(),r=new X.ay(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bX:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bi(a,b,!0))
return!0},
aW:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dB()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bi(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bi(a,b,!1))
return!0},
hf:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaE()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.bN(new V.D(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gcQ:function(){var u=this.b
return u==null?this.b=D.F():u},
gc5:function(){var u=this.c
return u==null?this.c=D.F():u},
gd9:function(){var u=this.d
return u==null?this.d=D.F():u}}
X.bN.prototype={}
X.fQ.prototype={}
X.d5.prototype={}
X.hs.prototype={
aK:function(a,b){var u=this,t=new P.a4(Date.now(),!1),s=a.length>0?a[0]:V.aY(),r=u.a.gaE(),q=new X.d5(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hc:function(a){var u=this.b
if(u==null)return!1
u.F(this.aK(a,!0))
return!0},
ha:function(a){var u=this.c
if(u==null)return!1
u.F(this.aK(a,!0))
return!0},
hb:function(a){var u=this.d
if(u==null)return!1
u.F(this.aK(a,!1))
return!0}}
X.db.prototype={
gaE:function(){var u=this.a,t=C.m.gcP(u).c
t.toString
u=C.m.gcP(u).d
u.toString
return V.kz(0,0,t,u)},
co:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.aa(t,a.altKey,a.shiftKey))},
aB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
bx:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.a0(s-q,r-u)},
aL:function(a){return new V.D(a.movementX,a.movementY)},
bt:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a0])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.d.ab(r.pageX)
C.d.ab(r.pageY)
p=o.left
C.d.ab(r.pageX)
n.push(new V.a0(q-p,C.d.ab(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.co(u,new X.aa(t,a.altKey,a.shiftKey))},
bk:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eA:function(a){this.f=!0},
el:function(a){this.f=!1},
eu:function(a){if(this.f&&this.bk(a))a.preventDefault()},
eE:function(a){var u
if(!this.f)return
u=this.co(a)
this.b.hd(u)},
eC:function(a){var u
if(!this.f)return
u=this.co(a)
this.b.h9(u)},
eI:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aB(a)
if(r.x){u=r.al(a)
t=r.aL(a)
if(r.d.bX(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.al(a)
s=r.an(a)
if(r.c.bX(u,s))a.preventDefault()},
eM:function(a){var u,t,s,r=this
r.aB(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aW(u,s))a.preventDefault()},
ey:function(a){var u,t,s,r=this
if(!r.bk(a)){r.aB(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aW(u,s))a.preventDefault()}},
eK:function(a){var u,t,s,r=this
r.aB(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aV(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
if(!r.bk(a)){r.aB(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aV(u,s))a.preventDefault()}},
eO:function(a){var u,t,s=this
s.aB(a)
u=new V.D((a&&C.w).gfG(a),C.w.gfH(a)).p(0,180)
if(s.x){if(s.d.he(u))a.preventDefault()
return}if(s.r)return
t=s.an(a)
if(s.c.hf(u,t))a.preventDefault()},
eQ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.an(s.y)
s.d.eG(u,t,r)}},
f1:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bx(a)
u=t.bt(a)
if(t.e.hc(u))a.preventDefault()},
eY:function(a){var u
this.bx(a)
u=this.bt(a)
if(this.e.ha(u))a.preventDefault()},
f_:function(a){var u
this.bx(a)
u=this.bt(a)
if(this.e.hb(u))a.preventDefault()}}
D.aN.prototype={
aj:function(a){var u=this.r
if(u!=null)u.F(a)},
dO:function(){return this.aj(null)},
$ia5:1}
D.a5.prototype={}
D.cC.prototype={
aj:function(a){var u=this.x
if(u!=null)u.F(a)},
cz:function(a){var u=this.y
if(u!=null)u.F(a)},
eF:function(){return this.cz(null)},
eS:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.e1(s))return!1}return!0},
ef:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcw(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.aN)this.e.push(q)
p=q.r
if(p==null){p=new D.ak()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}u=new D.bh()
u.b=!0
this.aj(u)},
eW:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gcw(),s=0;s<b.length;b.length===u||(0,H.n)(b),++s){r=b[s]
if(r instanceof D.aN)C.b.K(this.e,r)
q=r.r
if(q==null){q=new D.ak()
q.d=0
r.r=q}q.K(0,t)}u=new D.bi()
u.b=!0
this.aj(u)},
e1:function(a){var u=C.b.ao(this.e,a)
return u},
$aj:function(){return[D.a5]},
$aah:function(){return[D.a5]}}
D.fP.prototype={$ia5:1}
D.hc.prototype={$ia5:1}
V.R.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.ai.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.eM.prototype={}
V.cI.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cI))return!1
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
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.by(H.d([q.a,q.d,q.r],p),3,0),n=V.by(H.d([q.b,q.e,q.x],p),3,0),m=V.by(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.aw.prototype={
a6:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
d7:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
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
if(Math.abs(i-0)<$.x().a)return V.a_()
h=1/i
g=-a
f=-t
return V.an((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.i(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.i(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.i(m)
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
return V.an(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
ba:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.i(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.w(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
c4:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.i(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.O(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aw))return!1
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
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.L()},
C:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.by(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.by(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.by(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.by(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
L:function(){return this.C("")}}
V.a0.prototype={
w:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.O.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.i(t)
return new V.O(this.a+b.a,this.b+b.b,u+t)},
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
return new V.O(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.O(this.a*b,this.b*b,u*b)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.aB.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.cS.prototype={
ga1:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cS))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.D.prototype={
bS:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.D(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.kK
return u==null?$.kK=new V.D(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.D(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.w.prototype={
bS:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
return this.a*a.a+this.b*a.b+u*t},
bT:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.i(s)
return new V.w(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ap:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.i(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.w(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.i(r)
return new V.w(this.a+u,this.b+t,s+r)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.w(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.w(this.a*b,this.b*b,u*b)},
p:function(a,b){var u
if(Math.abs(b-0)<$.x().a)return V.c1()
u=this.c
if(typeof u!=="number")return u.p()
return new V.w(this.a/b,this.b/b,u/b)},
d8:function(){var u,t=$.x(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.w))return!1
u=b.a
t=$.x()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.eu.prototype={
be:function(a){var u=V.jx(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.F():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sc7:function(a,b){},
sbU:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.be(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.D(s)}},
sbW:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.be(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.D(s)}},
sU:function(a,b){var u,t=this
b=t.be(b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.D(u)}},
sbV:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.D(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.D(t)}},
sbI:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.D(u)}},
ai:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sU(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cp.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.F():u},
ac:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.B(this.a,b.a)},
h:function(a){return"Constant: "+this.a.C("          ")}}
U.bG.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.F():u},
D:function(a){var u=this.e
if(u!=null)u.F(a)},
a_:function(){return this.D(null)},
dQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gay(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gA()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bh()
u.b=!0
this.D(u)},
eU:function(a,b){var u,t,s,r
for(u=b.length,t=this.gay(),s=0;s<b.length;b.length===u||(0,H.n)(b),++s){r=b[s]
if(r!=null)r.gA().K(0,t)}u=new D.bi()
u.b=!0
this.D(u)},
ac:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a3(r,r.length),u=null;r.H();){q=r.d
if(q!=null){t=q.ac(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.a_():u
r=s.e
if(r!=null)r.aa(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.B(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a6]},
$aah:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.cT.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.F():u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sdz:function(a){var u
a=V.jx(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.x().a)){this.a=a
u=new D.z("yaw",u,a)
u.b=!0
this.D(u)}},
sdi:function(a,b){var u
b=V.jx(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.x().a)){this.b=b
u=new D.z("pitch",u,b)
u.b=!0
this.D(u)}},
sdr:function(a){var u
a=V.jx(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.x().a)){this.c=a
u=new D.z("roll",u,a)
u.b=!0
this.D(u)}},
ac:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdz(u.a+u.d*b.y)
u.sdi(0,u.b+u.e*b.y)
u.sdr(u.c+u.f*b.y)
u.x=V.kq(u.c).m(0,V.kp(u.b)).m(0,V.jO(u.a))
t=u.y
if(t!=null)t.aa(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cT))return!1
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
h:function(a){var u=this
return"Rotater: ["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+"], ["+V.A(u.d,3,0)+", "+V.A(u.e,3,0)+", "+V.A(u.f,3,0)+"]"}}
U.dc.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.F():u},
D:function(a){var u=this.cy
if(u!=null)u.F(a)},
a_:function(){return this.D(null)},
aM:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcQ().l(0,u.gbl())
u.a.c.gd9().l(0,u.gbn())
u.a.c.gc5().l(0,u.gbp())
return!0},
bm:function(a){var u=this
if(!J.B(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bo:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iay")
if(!n.y)return
if(n.x){u=a.d.w(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.w(0,a.y)
u=new V.D(t.a,t.b).m(0,2).p(0,u.ga1())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.i(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=new V.D(s.a,s.b).m(0,2).p(0,u.ga1())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.i(p)
o=n.z
if(typeof o!=="number")return H.i(o)
s.sU(0,-q*p+o)
n.b.sR(0)
t=t.w(0,a.z)
n.Q=new V.D(t.a,t.b).m(0,2).p(0,u.ga1())}n.a_()},
bq:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.i(s)
u.sR(t*10*s)
r.a_()}},
ac:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.ch=r
u=b.y
t.b.ai(0,u)
t.cx=V.kq(t.b.d)}return t.cx},
$ia6:1}
U.dd.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.F():u},
D:function(a){var u=this.fx
if(u!=null)u.F(a)},
a_:function(){return this.D(null)},
aM:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcQ().l(0,s.gbl())
s.a.c.gd9().l(0,s.gbn())
s.a.c.gc5().l(0,s.gbp())
u=s.a.d
t=u.f
u=t==null?u.f=D.F():t
u.l(0,s.ge8())
u=s.a.d
t=u.d
u=t==null?u.d=D.F():t
u.l(0,s.gea())
u=s.a.e
t=u.b
u=t==null?u.b=D.F():t
u.l(0,s.gfj())
u=s.a.e
t=u.d
u=t==null?u.d=D.F():t
u.l(0,s.gfh())
u=s.a.e
t=u.c
u=t==null?u.c=D.F():t
u.l(0,s.gff())
return!0},
ag:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.D(u,t)},
bm:function(a){var u=this
H.o(a,"$iay")
if(!J.B(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bo:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iay")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ag(new V.D(t.a,t.b).m(0,2).p(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ag(new V.D(s.a,s.b).m(0,2).p(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sU(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ag(new V.D(t.a,t.b).m(0,2).p(0,u.ga1()))}n.a_()},
bq:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sR(-t*10*u)
r.a_()}},
e9:function(a){var u=this
if(H.o(a,"$icE").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eb:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iay")
if(!J.B(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ag(new V.D(s.a,s.b).m(0,2).p(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sU(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ag(new V.D(t.a,t.b).m(0,2).p(0,u.ga1()))
n.a_()},
fk:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fi:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$id5")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.D(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ag(new V.D(t.a,t.b).m(0,2).p(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ag(new V.D(s.a,s.b).m(0,2).p(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sU(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ag(new V.D(t.a,t.b).m(0,2).p(0,u.ga1()))}n.a_()},
fg:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sR(-t*10*u)
r.a_()}},
ac:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.dy=r
u=b.y
t.c.ai(0,u)
t.b.ai(0,u)
t.fr=V.jO(t.b.d).m(0,V.kp(t.c.d))}return t.fr},
$ia6:1}
U.de.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.F():u},
D:function(a){var u=this.r
if(u!=null)u.F(a)},
aM:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.F():t
t=r.gec()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.F():s).l(0,t)
return!0},
ed:function(a){var u,t,s,r,q=this
if(!J.B(q.b,q.a.b.c))return
H.o(a,"$ibN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.D(u)}},
ac:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.an(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia6:1}
M.cu.prototype={
ak:function(a){var u=this.y
if(u!=null)u.F(a)},
dR:function(){return this.ak(null)},
ep:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaf(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ak()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bh()
u.b=!0
this.ak(u)},
er:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gaf(),s=0;s<b.length;b.length===u||(0,H.n)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.ak()
q.d=0
r.z=q}q.K(0,t)}}u=new D.bi()
u.b=!0
this.ak(u)},
sds:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().K(0,t.gaf())
u=t.d
t.d=a
if(a!=null)a.gA().l(0,t.gaf())
s=new D.z("technique",u,t.d)
s.b=!0
t.ak(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.F():u},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.cZ(a)
e.b=!0
u=f.f
if(u!=null)u.F(e)
a.dl(f.d)
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
if(typeof s!=="number")return H.i(s)
o=C.d.ab(p*s)
p=q.b
if(typeof r!=="number")return H.i(r)
n=C.d.ab(p*r)
p=C.d.ab(q.c*s)
a.c=p
q=C.d.ab(q.d*r)
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
i=V.an(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dk(i)
t=$.kt
if(t==null){t=V.kv()
q=V.jU()
p=$.kL
t=V.ko(t,q,p==null?$.kL=new V.w(0,0,-1):p)
$.kt=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ac(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dk(h)
u=f.d
if(u!=null)u.ai(0,a)
for(u=f.e.a,u=new J.a3(u,u.length);u.H();)u.d.ai(0,a)
for(u=f.e.a,u=new J.a3(u,u.length);u.H();)u.d.aH(a)
f.b.toString
a.cy.bY()
a.db.bY()
f.c.toString
a.dj()}}
A.cl.prototype={}
A.ei.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fN:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Y.prototype={
gad:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Y))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fi.prototype={
dI:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.P("")
t=c3.dy
if(t){u.a=c2
s=c2}else s=""
r=c3.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.n9(c3,u)
A.nb(c3,u)
A.na(c3,u)
A.nd(c3,u)
A.ne(c3,u)
A.nc(c3,u)
A.nf(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.rx
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
u.a=s}if(c3.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.n8(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cp(n,35633)
b8.f=b8.cp(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.r(P.t("Failed to link shader: "+H.f(l)))}b8.fb()
b8.fd()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.o(b8.y.T(0,"invViewMat"),"$iab")
if(t)b8.dy=H.o(b8.y.T(0,"objMat"),"$iab")
if(r)b8.fr=H.o(b8.y.T(0,"viewObjMat"),"$iab")
b8.fy=H.o(b8.y.T(0,"projViewObjMat"),"$iab")
if(c3.ry)b8.k1=H.o(b8.y.T(0,"txt2DMat"),"$ibZ")
if(c3.x1)b8.k2=H.o(b8.y.T(0,"txtCubeMat"),"$iab")
if(c3.x2)b8.k3=H.o(b8.y.T(0,"colorMat"),"$iab")
b8.r1=H.d([],[A.ab])
t=c3.y2
if(t>0){b8.k4=b8.y.T(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.r(P.t(c0+q+c1))
s.push(H.o(j,"$iab"))}}if(c3.a.a)b8.r2=H.o(b8.y.T(0,"emissionClr"),"$iI")
if(c3.b.a)b8.x1=H.o(b8.y.T(0,"ambientClr"),"$iI")
if(c3.c.a)b8.y2=H.o(b8.y.T(0,"diffuseClr"),"$iI")
if(c3.d.a)b8.cS=H.o(b8.y.T(0,"invDiffuseClr"),"$iI")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cU=H.o(b8.y.T(0,"shininess"),"$iT")
if(t)b8.cT=H.o(b8.y.T(0,"specularClr"),"$iI")}if(c3.cy){b8.cV=H.o(b8.y.T(0,"envSampler"),"$ibp")
if(c3.r.a)b8.cW=H.o(b8.y.T(0,"reflectClr"),"$iI")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cX=H.o(b8.y.T(0,"refraction"),"$iT")
if(t)b8.cY=H.o(b8.y.T(0,"refractClr"),"$iI")}}if(c3.y.a)b8.cZ=H.o(b8.y.T(0,"alpha"),"$iT")
t=P.u
s=[t,A.d8]
b8.bJ=new H.K(s)
b8.bK=new H.K([t,[P.m,A.bY]])
b8.bL=new H.K(s)
b8.bM=new H.K([t,[P.m,A.c_]])
b8.bN=new H.K(s)
b8.bO=new H.K([t,[P.m,A.c0]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.r(P.t(c0+d+c1))
H.o(j,"$iI")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.r(P.t(c0+d+c1))
H.o(c,"$iI")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.r(P.t(c0+d+c1))
H.o(b,"$iI")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.r(P.t(c0+d+c1))
H.o(j,"$iI")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.r(P.t(c0+d+c1))
H.o(c,"$iI")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.o(b,"$ibo")
a2=b}else a2=b9
e.push(new A.bY(a1,a0,a,j,c,a2))}b8.bK.j(0,g,e)
q=b8.bJ
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.j(0,g,j)}for(t=c3.Q,s=t.length,r=[A.c_],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
H.o(j,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.r(P.t(c0+o+c1))
H.o(c,"$iI")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.o(b,"$iI")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$ibZ")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$ibp")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$ibp")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$ibX")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$iT")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$iT")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.r(P.t(c0+o+c1))
H.o(a8,"$iT")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.c_(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bM.j(0,g,e)
q=b8.bL
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.j(0,g,j)}for(t=c3.ch,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.n)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
H.o(j,"$iI")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.r(P.t(c0+o+c1))
H.o(c,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.o(b,"$iI")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$iI")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$iI")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.r(P.t(c0+o+c1))
H.o(a8,"$iI")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.r(P.t(c0+o+c1))
H.o(b2,"$iT")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.r(P.t(c0+o+c1))
H.o(b3,"$iT")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$ibX")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$iT")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.r(P.t(c0+d+c1))
H.o(a8,"$iT")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$iT")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.r(P.t(c0+d+c1))
H.o(a8,"$iT")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.r(P.t(c0+d+c1))
H.o(b2,"$iT")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$ibo")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$ibo")
a6=a5}else a6=b9
e.push(new A.c0(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bO.j(0,g,e)
q=b8.bN
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.j(0,g,j)}}},
f9:function(a,b){}}
A.cr.prototype={
h:function(a){return"dirLight"+H.f(this.a)}}
A.cP.prototype={
h:function(a){return"pointLight"+H.f(this.a)}}
A.cW.prototype={
h:function(a){return"spotLight"+H.f(this.a)}}
A.fl.prototype={
h:function(a){return this.aR}}
A.bY.prototype={}
A.c_.prototype={}
A.c0.prototype={}
A.cU.prototype={
dL:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cp:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.t("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fb:function(){var u,t,s,r=this,q=H.d([],[A.cl]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cl(p,t.name,s))}r.x=new A.ei(q)},
fd:function(){var u,t,s,r=this,q=H.d([],[A.d7]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fF(t.type,t.size,t.name,s))}r.y=new A.hE(q)},
aA:function(a,b,c){var u=this.a
if(a===1)return new A.d8(u,b,c)
else return A.jR(u,this.r,b,a,c)},
e2:function(a,b,c){var u=this.a
if(a===1)return new A.bo(u,b,c)
else return A.jR(u,this.r,b,a,c)},
e3:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.jR(u,this.r,b,a,c)},
b2:function(a,b){return new P.dq(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fF:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aA(b,c,d)
case 5121:return u.aA(b,c,d)
case 5122:return u.aA(b,c,d)
case 5123:return u.aA(b,c,d)
case 5124:return u.aA(b,c,d)
case 5125:return u.aA(b,c,d)
case 5126:return new A.T(u.a,c,d)
case 35664:return new A.hA(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bX(u.a,c,d)
case 35667:return new A.hB(u.a,c,d)
case 35668:return new A.hC(u.a,c,d)
case 35669:return new A.hD(u.a,c,d)
case 35674:return new A.hF(u.a,c,d)
case 35675:return new A.bZ(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.e2(b,c,d)
case 35680:return u.e3(b,c,d)
case 35670:throw H.c(u.b2("BOOL",c))
case 35671:throw H.c(u.b2("BOOL_VEC2",c))
case 35672:throw H.c(u.b2("BOOL_VEC3",c))
case 35673:throw H.c(u.b2("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.d7.prototype={}
A.hE.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.d8.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hB.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hz.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.T.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hA.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bX.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.bZ.prototype={
ae:function(a){var u=new Float32Array(H.bt(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ab.prototype={
ae:function(a){var u=new Float32Array(H.bt(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.bo.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bp.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iO.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bT(s.b,b).bT(s.d.bT(s.c,b),c)
a.sU(0,new V.O(r.a,r.b,r.c))
a.sc3(r.p(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sbB(new V.aB(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.iY.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.j_.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.i(p)
s=-s*p
u=r*p
a.sU(0,new V.O(s,u,q))
u=new V.w(s,u,q)
a.sc3(u.p(0,Math.sqrt(u.B(u))))
a.sbB(new V.aB(1-c,2+c,-1,-1))}}
F.j0.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.j1.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jq.prototype={
$2:function(a,b){return 0}}
F.jr.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.i(s)
u=a.f
t=new V.w(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.B(t))).m(0,this.b+s)
a.sU(0,new V.O(s.a,s.b,s.c))}}
F.jv.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.je.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.O(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.iZ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.ka(m.$1(n),l)
l=J.ka(m.$1(n+3.141592653589793/o.c),l).w(0,k)
l=new V.w(l.a,l.b,l.c)
u=l.p(0,Math.sqrt(l.B(l)))
m=$.kM
if(m==null){m=new V.w(1,0,0)
$.kM=m
t=m}else t=m
m=u.ap(!J.B(u,t)?V.kO():t)
s=m.p(0,Math.sqrt(m.B(m)))
m=s.ap(u)
t=m.p(0,Math.sqrt(m.B(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.i(p)
a.sU(0,k.v(0,new V.O(m.a-l.a,m.b-l.b,q-p)))}}
F.j7.prototype={
$2:function(a,b){return 0}}
F.j8.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sU(0,new V.O(s,r,this.a.a.$2(b,c)))
u=new V.w(s,r,1)
a.sc3(u.p(0,Math.sqrt(u.B(u))))
u=1-b
t=1-c
a.sbB(new V.aB(b*c,2+u*c,4+b*t,6+u*t))}}
F.aQ.prototype={
aP:function(){var u=this
if(!u.gaQ()){C.b.K(u.a.a.d.b,u)
u.a.a.W()}u.bu()
u.bv()
u.f4()},
by:function(a){this.a=a
a.d.b.push(this)},
bz:function(a){this.b=a
a.d.c.push(this)},
fa:function(a){this.c=a
a.d.d.push(this)},
bu:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bv:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
f4:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gaQ:function(){return this.a==null||this.b==null||this.c==null},
dZ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c1()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.d8())return
return s.p(0,Math.sqrt(s.B(s)))},
e0:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.w(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.B(r)))
r=t.w(0,q)
r=new V.w(r.a,r.b,r.c)
r=s.ap(r.p(0,Math.sqrt(r.B(r))))
return r.p(0,Math.sqrt(r.B(r)))},
bE:function(){var u,t=this
if(t.d!=null)return!0
u=t.dZ()
if(u==null){u=t.e0()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
dY:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c1()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.d8())return
return s.p(0,Math.sqrt(s.B(s)))},
e_:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.x().a){l=d.w(0,g)
l=new V.w(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.w(0,g).m(0,p).v(0,g).w(0,j)
l=new V.w(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.B(l)))
l=o.ap(q)
l=l.p(0,Math.sqrt(l.B(l))).ap(o)
q=l.p(0,Math.sqrt(l.B(l)))}return q},
bC:function(){var u,t=this
if(t.e!=null)return!0
u=t.dY()
if(u==null){u=t.e_()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
gfA:function(a){var u=this
if(J.B(u.a,u.b))return!0
if(J.B(u.b,u.c))return!0
if(J.B(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u,t,s=this
if(s.gaQ())return a+"disposed"
u=a+C.a.a5(J.a2(s.a.e),0)+", "+C.a.a5(J.a2(s.b.e),0)+", "+C.a.a5(J.a2(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.eP.prototype={}
F.h9.prototype={
aS:function(a,b,c){var u,t=b.a
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
F.bK.prototype={
aP:function(){var u=this
if(!u.gaQ()){C.b.K(u.a.a.c.b,u)
u.a.a.W()}u.bu()
u.bv()},
by:function(a){this.a=a
a.c.b.push(this)},
bz:function(a){this.b=a
a.c.c.push(this)},
bu:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bv:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gaQ:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){if(this.gaQ())return a+"disposed"
return a+C.a.a5(J.a2(this.a.e),0)+", "+C.a.a5(J.a2(this.b.e),0)},
L:function(){return this.C("")}}
F.f5.prototype={}
F.hy.prototype={
aS:function(a,b,c){var u,t=b.a
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
F.bR.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.a5(J.a2(u.e),0)},
L:function(){return this.C("")}}
F.h2.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.F():u},
aT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.l(0,r.fD())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.bR()
if(n.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.lU(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bE(l,k,i)}g=h.e
if(g!=null)g.aa(0)},
a9:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a9()||!1
if(!t.a.a9())u=!1
s=t.e
if(s!=null)s.aa(0)
return u},
h0:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.j6(o,0)])
for(o=[F.b1];u.length!==0;){t=C.b.gfS(u)
C.b.dm(u,0)
if(t!=null){s=H.d([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aS(0,t,q)){s.push(q)
C.b.dm(u,r)}}if(s.length>1)b.aT(s)}}p.a.u()
p.c.c0()
p.d.c0()
p.b.hi()
p.c.c1(new F.hy())
p.d.c1(new F.h9())
o=p.e
if(o!=null)o.aa(0)},
bA:function(){this.h0(new F.i1(),new F.fI())},
fw:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aL()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aK().a)!==0)++s
if((t&$.aJ().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.aI().a)!==0)++s
r=a4.gca(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.d(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cm])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fq(m)
k=l.gca(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cm(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].h_(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bt(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cn(new Z.dg(a1,d),o,a4)
c.b=H.d([],[Z.bg])
if(a0.b.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.jV(u,34963,b)
c.b.push(new Z.bg(0,b.length,a))}if(a0.c.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.jV(u,34963,b)
c.b.push(new Z.bg(1,b.length,a))}if(a0.d.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.jV(u,34963,b)
c.b.push(new Z.bg(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.d([],[P.q])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.C(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.C(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.C(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.C(t))}return C.b.t(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.F(null)}}
F.h3.prototype={
fn:function(a){var u,t,s,r,q,p=H.d([],[F.aQ]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.l(0,u)
t.a.l(0,r)
t.a.l(0,q)
p.push(F.bE(u,r,q))}}return p},
fo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.d([],[F.aQ])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bE(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bE(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bE(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bE(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
c1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aS(0,p,n)){p.aP()
break}}}}},
c0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfA(s)
if(t)s.aP()}},
a9:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bE())s=!1
return s},
bD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bC())s=!1
return s},
h:function(a){return this.L()},
C:function(a){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(a))
return C.b.t(r,"\n")},
L:function(){return this.C("")}}
F.h4.prototype={
gk:function(a){return this.b.length},
c1:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aS(0,p,n)){p.aP()
break}}}}},
c0:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.B(s.a,s.b)
if(t)s.aP()}},
h:function(a){return this.L()},
C:function(a){var u,t,s=H.d([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.b.t(s,"\n")},
L:function(){return this.C("")}}
F.h5.prototype={
gk:function(a){return this.b.length},
hi:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
h:function(a){return this.L()},
C:function(a){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(a))
return C.b.t(r,"\n")},
L:function(){return this.C("")}}
F.b1.prototype={
bH:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.df(u.cx,r,o,t,s,q,p,a,n)},
fD:function(){return this.bH(null)},
sU:function(a,b){var u
if(!J.B(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
sc3:function(a){var u
if(!J.B(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sbB:function(a){var u
if(!J.B(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
h_:function(a){var u,t,s=this
if(a.n(0,$.aL())){u=s.f
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aK())){u=s.r
t=[P.J]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aJ())){u=s.x
t=[P.J]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.b7())){u=s.y
t=[P.J]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.n(0,$.b8())){u=s.z
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.ch())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.ci())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bz()))return H.d([s.ch],[P.J])
else if(a.n(0,$.aI())){u=s.cx
t=[P.J]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.J])},
bE:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c1()
t.d.I(0,new F.i6(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.aa(0)}return!0},
bC:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c1()
t.d.I(0,new F.i5(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.aa(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.d([],[P.q])
q.push(C.a.a5(J.a2(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.t(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.i6.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.i5.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.hX.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
fp:function(a,b,c,d,e,f){var u=F.df(a,null,b,c,d,e,f,null,0)
this.l(0,u)
return u},
gk:function(a){return this.c.length},
a9:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bE()
return!0},
bD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bC()
return!0},
fz:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.B(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
h:function(a){return this.L()},
C:function(a){var u,t,s,r
this.u()
u=H.d([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].C(a))
return C.b.t(u,"\n")},
L:function(){return this.C("")}}
F.hY.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
I:function(a,b){var u=this
C.b.I(u.b,b)
C.b.I(u.c,new F.hZ(u,b))
C.b.I(u.d,new F.i_(u,b))},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(""))
return C.b.t(r,"\n")}}
F.hZ.prototype={
$1:function(a){if(!J.B(a.a,this.a))this.b.$1(a)}}
F.i_.prototype={
$1:function(a){var u=this.a
if(!J.B(a.a,u)&&!J.B(a.b,u))this.b.$1(a)}}
F.i0.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(""))
return C.b.t(r,"\n")}}
F.i2.prototype={}
F.i1.prototype={
aS:function(a,b,c){return J.B(b.f,c.f)}}
F.i3.prototype={}
F.fI.prototype={
aT:function(a){var u,t,s,r,q,p,o,n,m,l,k=V.c1()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=k.a
q=s.a
p=k.b
o=s.b
n=k.c
s=s.c
if(typeof n!=="number")return n.v()
if(typeof s!=="number")return H.i(s)
k=new V.w(r+q,p+o,n+s)}}k=k.p(0,Math.sqrt(k.B(k)))
for(u=a.length,s=k==null,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){m=a[t]
if(s)l=null
else{r=k.a
q=k.b
p=k.c
if(typeof p!=="number")return p.m()
l=k.p(0,Math.sqrt(r*r+q*q+p*p))}if(!J.B(m.r,l)){m.r=l
r=m.a
if(r!=null){r=r.e
if(r!=null)r.F(null)}}}return}}
F.i4.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].C(""))
return C.b.t(r,"\n")}}
O.cG.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.F():u},
a3:function(a){var u=this.fr
if(u!=null)u.F(a)},
en:function(){return this.a3(null)},
cB:function(a){this.a=null
this.a3(a)},
f8:function(){return this.cB(null)},
eh:function(a,b){var u=new D.bh()
u.b=!0
this.a3(u)},
ej:function(a,b){var u=new D.bi()
u.b=!0
this.a3(u)},
cm:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.u,h=new H.K([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=h.i(0,0)
h.j(0,0,r==null?1:r)}q=H.d([],[A.cr])
h.I(0,new O.fp(j,q))
C.b.bc(q,new O.fq())
p=new H.K([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){o=u[s]
r=o.gaO()
n=p.i(0,o.gaO())
p.j(0,r,n==null?1:n)}m=H.d([],[A.cP])
p.I(0,new O.fr(j,m))
C.b.bc(m,new O.fs())
l=new H.K([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.n)(i),++s){o=i[s]
t=o.gaO()
r=l.i(0,o.gaO())
l.j(0,t,r==null?1:r)}k=H.d([],[A.cW])
l.I(0,new O.ft(j,k))
C.b.bc(k,new O.fu())
i=C.c.a0(j.e.a.length+3,4)
j.dy.e
return A.m1(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dX:function(a,b){},
ai:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a3(u,u.length);u.H();){t=u.d
t.toString
s=$.hW
if(s==null)s=$.hW=new V.w(0,0,1)
t.a=s
r=$.hV
t.d=r==null?$.hV=new V.w(0,1,0):r
r=$.hU
t.e=r==null?$.hU=new V.w(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.ba(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.ba(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.ba(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
hk:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cm()
u=b3.fr.i(0,b2.aR)
if(u==null){u=A.m0(b2,b3.a)
t=u.b
if(t.length===0)H.r(P.t("May not cache a shader with no name."))
if(b3.fr.b4(0,t))H.r(P.t('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.j(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.cR
b2=b4.e
if(!(b2 instanceof Z.cn))b2=b4.e=null
if(b2==null||!b2.d.n(0,r)){b2=s.k3
if(b2)b4.d.a9()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bD()
p.a.bD()
p=p.e
if(p!=null)p.aa(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fz()
o=o.e
if(o!=null)o.aa(0)}m=b4.d.fw(new Z.i8(b3.a),r)
m.aF($.aL()).e=b1.a.Q.c
if(b2)m.aF($.aK()).e=b1.a.cx.c
if(q)m.aF($.aJ()).e=b1.a.ch.c
if(s.r1)m.aF($.b7()).e=b1.a.cy.c
if(p)m.aF($.b8()).e=b1.a.db.c
if(s.rx)m.aF($.aI()).e=b1.a.dx.c
b4.e=m}l=H.d([],[T.ho])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.fN()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gY(p)
b2=b2.dy
b2.toString
b2.ae(p.a6(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gY(p)
o=b3.dx
o=b3.cx=p.m(0,o.gY(o))
p=o}b2=b2.fr
b2.toString
b2.ae(p.a6(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.ghh()
o=b3.dx
o=b3.ch=p.m(0,o.gY(o))
p=o}b2=b2.fy
b2.toString
b2.ae(p.a6(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ae(C.i.a6(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ae(C.i.a6(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ae(C.i.a6(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bt(p.a6(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}if(s.a.a){b2=b1.a
p=b1.f.f
b2=b2.r2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.id){if(s.b.a){b2=b1.a
p=b1.r.f
b2=b2.x1
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.c.a){b2=b1.a
p=b1.x.f
b2=b2.y2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.d.a){b2=b1.a
p=b1.y.f
b2=b2.cS
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.e.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.z.ch
p=p.cU
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.z.f
b2=b2.cT
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gY(p)
p=P.u
g=new H.K([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.j(0,0,d+1)
c=J.cj(b1.a.bK.i(0,0),d)
n=h.ba(e.a)
b=n.a
a=n.b
a0=n.c
if(typeof a0!=="number")return a0.m()
a0=n.p(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bJ.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gY(p)
p=P.u
a1=new H.K([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
a2=e.gaO()
d=a1.i(0,a2)
if(d==null)d=0
a1.j(0,a2,d+1)
c=J.cj(b1.a.bM.i(0,a2),d)
a3=h.m(0,e.gY(e))
n=e.gY(e)
b=$.bS
n=n.c4(b==null?$.bS=new V.O(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bS
n=a3.c4(n==null?$.bS=new V.O(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaN(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gav()
n=a3.d7(0)
b=n.a
a=n.b
a0=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=c.d
a9.toString
i=new Float32Array(H.bt(new V.cI(b,a,a0,a4,a5,a6,a7,a8,n).a6(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gav()
n=e.gav()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gav()
b=n.gat(n)
if(b){b=c.f
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}e.gaJ()
n=e.gdC()
b=c.x
b.toString
a=n.gfK(n)
a0=n.gfL(n)
a4=n.gfM()
n=n.gfJ()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaJ()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gaJ()
b=n.gat(n)
if(b){b=c.r
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}if(e.gfO()){n=e.gfs()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gft()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gfu()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bL.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gY(p)
p=P.u
b0=new H.K([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.n)(p),++f){e=p[f]
a2=e.gaO()
d=b0.i(0,a2)
if(d==null)d=0
b0.j(0,a2,d+1)
c=J.cj(b1.a.bO.i(0,a2),d)
n=e.ghg(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghx(e).hP()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.c4(e.ghg(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaN(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gav()
n=e.gc5()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gc2(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghQ()
b=c.x
b.a.uniform1f(b.d,n)
n=e.ghR()
b=c.y
b.a.uniform1f(b.d,n)
e.gav()
n=e.gav()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gav()
b=n.gat(n)
if(b){b=c.dx
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}e.gaJ()
n=e.gdC()
b=c.z
b.toString
a=n.gfK(n)
a0=n.gfL(n)
a4=n.gfM()
n=n.gfJ()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaJ()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gaJ()
b=n.gat(n)
if(b){b=c.dy
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}if(e.ghy()){n=e.ghw()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.ghv()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.gfO()){n=e.gfs()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gft()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gfu()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.n)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bN.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gY(p).d7(0)}b2=b2.id
b2.toString
b2.ae(p.a6(0,!0))}if(s.cy){b1.dX(l,b1.ch)
b2=b1.a
p=b1.ch
b2.f9(b2.cV,p)
if(s.r.a){b2=b1.a
p=b1.cx.f
b2=b2.cW
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.x.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.cy.ch
p=p.cX
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.cy.f
b2=b2.cY
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}}b2=s.y.a
p=!b2
if(p)o=!1
else o=!0
if(o){if(b2){b2=b1.a
o=b1.db.f
b2=b2.cZ
b2.a.uniform1f(b2.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b3(b3)
b2=b4.e
b2.b3(b3)
b2.aH(b3)
b2.du(b3)
if(p)b2=!1
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j)l[j].du(b3)
b2=b1.a
b2.toString
q.useProgram(null)
b2.x.fI()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cm().aR}}
O.fp.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cr(a,C.c.a0(b+3,4)*4))}}
O.fq.prototype={
$2:function(a,b){return J.jz(a.a,b.a)}}
O.fr.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cP(a,C.c.a0(b+3,4)*4))}}
O.fs.prototype={
$2:function(a,b){return J.jz(a.a,b.a)}}
O.ft.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cW(a,C.c.a0(b+3,4)*4))}}
O.fu.prototype={
$2:function(a,b){return J.jz(a.a,b.a)}}
O.fj.prototype={
am:function(){var u,t=this
t.cc()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.cH.prototype={
am:function(){},
cE:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.am()
u=s.a
u.a=null
u.a3(null)}}}
O.fk.prototype={}
O.am.prototype={
cD:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
am:function(){this.cc()
this.cD(new V.R(1,1,1))},
saN:function(a,b){this.cE(new A.Y(!0,!1,!1))
this.cD(b)}}
O.fm.prototype={}
O.fn.prototype={
am:function(){var u,t=this
t.cd()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.a3(u)}}}
O.fo.prototype={
cF:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
am:function(){this.cd()
this.cF(100)}}
O.d0.prototype={}
T.ho.prototype={}
X.jC.prototype={}
X.eW.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.F():u}}
X.cO.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.F():u},
az:function(a){var u=this.f
if(u!=null)u.F(a)},
dU:function(){return this.az(null)},
saU:function(a){var u,t,s=this
if(!J.B(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gci())
t=s.b
s.b=a
if(a!=null)a.gA().l(0,s.gci())
u=new D.z("mover",t,s.b)
u.b=!0
s.az(u)}}}
X.hk.prototype={}
V.jp.prototype={
$1:function(a){var u=C.d.dt(this.a.gfV(),2)
if(u!=="0.00")P.k7(u+" fps")}}
V.fS.prototype={
cL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.kH().gc_().i(0,H.f(u))
if(t==null)if(d){c.$0()
m.cJ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kc(m.c).l(0,q)
o=W.lQ("radio")
o.checked=s
o.name=u
W.U(o,"change",new V.fT(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kc(m.c).l(0,r.createElement("br"))},
aD:function(a,b,c){return this.cL(a,b,c,!1)},
cJ:function(a){var u,t,s=P.kH(),r=P.q,q=P.lW(s.gc_(),r,r)
q.j(0,this.a,a)
u=s.dn(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.iA([],[]).c6(""),"",t)}}
V.fT.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cJ(u.d)}}}
V.h6.prototype={
dM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.h8(o),!1)},
cM:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fc()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hs(C.b.fZ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
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
if(H.nM(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.iK(C.M,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.f(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
fl:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fc:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hr()
t=P.q
u.a=new H.K([t,R.cY])
u.b=new H.K([t,R.d4])
u.c=u.N(0,q)
t=u.N(0,q).t(0,p)
s=T.X(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).t(0,p)
s=new T.az()
r=[T.cF]
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.M("*"))
s.a.push(t)
t=u.N(0,p).t(0,"BoldEnd")
s=T.X(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,o)
s=T.X(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).t(0,o)
s=new T.az()
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.M("_"))
s.a.push(t)
t=u.N(0,o).t(0,n)
s=T.X(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,m)
s=T.X(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).t(0,m)
s=new T.az()
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.M("`"))
s.a.push(t)
t=u.N(0,m).t(0,"CodeEnd")
s=T.X(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,l)
s=T.X(new H.M("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).t(0,k)
s=T.X(new H.M("|"))
t.a.push(s)
s=u.N(0,l).t(0,j)
t=T.X(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).t(0,l)
t=new T.az()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.M("|]"))
t.a.push(s)
s=u.N(0,k).t(0,j)
t=T.X(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).t(0,k)
t=new T.az()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.M("|]"))
t.a.push(s)
u.N(0,q).t(0,i).a.push(new T.ee())
s=u.N(0,i).t(0,i)
t=new T.az()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.M("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.aY(p)
s=u.N(0,n)
s.d=s.a.aY(o)
s=u.N(0,"CodeEnd")
s.d=s.a.aY(m)
s=u.N(0,j)
s.d=s.a.aY("Link")
s=u.N(0,i)
s.d=s.a.aY(i)
this.b=u}}
V.h8.prototype={
$1:function(a){P.kD(C.n,new V.h7(this.a))}}
V.h7.prototype={
$0:function(){var u=C.d.ab(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
K.jf.prototype={
$1:function(a){var u=H.o(a,"$icZ").c,t=this.a.ac(0,u,null),s=this.b.ac(0,u,null),r=this.c
r.e.j(0,0,t)
r.e.j(0,1,s)
r.e.j(0,2,t)
r.e.j(0,3,s)
r.e.j(0,4,t)
r.e.j(0,5,s)
r.e.j(0,6,t)
r.e.j(0,7,s)}}
K.jn.prototype={
$1:function(a){a.a9()
this.a.sc9(0,a)}}
K.jg.prototype={
$0:function(){this.a.$1(F.l2(30,null,30))}}
K.jh.prototype={
$0:function(){this.a.$1(F.l3(!0,100,20,1))}}
K.ji.prototype={
$0:function(){this.a.$1(F.l3(!1,30,12,0))}}
K.jj.prototype={
$0:function(){this.a.$1(F.nL(20,20))}}
K.jk.prototype={
$0:function(){this.a.$1(F.nP(1.5,0.25))}}
K.jl.prototype={
$0:function(){this.a.$1(F.nE(0.1))}}
K.jm.prototype={
$0:function(){this.a.$1(F.nz())}};(function aliases(){var u=J.a.prototype
u.dF=u.h
u=J.cA.prototype
u.dG=u.h
u=T.cx.prototype
u.dE=u.aG
u.cb=u.h
u=O.cH.prototype
u.cc=u.am
u=O.am.prototype
u.cd=u.am})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nn","my",7)
u(P,"no","mz",7)
u(P,"np","mA",7)
t(P,"l1","nl",9)
var n
s(n=E.aP.prototype,"gdf",0,0,null,["$1","$0"],["dg","h8"],0,0)
s(n,"gdd",0,0,null,["$1","$0"],["de","h7"],0,0)
s(n,"gda",0,0,null,["$1","$0"],["dc","h4"],0,0)
r(n,"gh2","h3",4)
r(n,"gh5","h6",4)
s(n=E.d1.prototype,"gce",0,0,null,["$1","$0"],["cg","cf"],0,0)
q(n,"ghm","dq",9)
p(n=X.db.prototype,"gez","eA",5)
p(n,"gek","el",5)
p(n,"ges","eu",2)
p(n,"geD","eE",10)
p(n,"geB","eC",10)
p(n,"geH","eI",2)
p(n,"geL","eM",2)
p(n,"gex","ey",2)
p(n,"geJ","eK",2)
p(n,"gev","ew",2)
p(n,"geN","eO",17)
p(n,"geP","eQ",5)
p(n,"gf0","f1",6)
p(n,"geX","eY",6)
p(n,"geZ","f_",6)
s(D.aN.prototype,"gdN",0,0,null,["$1","$0"],["aj","dO"],0,0)
s(n=D.cC.prototype,"gcw",0,0,null,["$1","$0"],["cz","eF"],0,0)
p(n,"geR","eS",18)
r(n,"gee","ef",11)
r(n,"geV","eW",11)
o(V.D.prototype,"gk","bS",12)
o(V.w.prototype,"gk","bS",12)
s(n=U.bG.prototype,"gay",0,0,null,["$1","$0"],["D","a_"],0,0)
r(n,"gdP","dQ",13)
r(n,"geT","eU",13)
s(n=U.dc.prototype,"gay",0,0,null,["$1","$0"],["D","a_"],0,0)
p(n,"gbl","bm",1)
p(n,"gbn","bo",1)
p(n,"gbp","bq",1)
s(n=U.dd.prototype,"gay",0,0,null,["$1","$0"],["D","a_"],0,0)
p(n,"gbl","bm",1)
p(n,"gbn","bo",1)
p(n,"gbp","bq",1)
p(n,"ge8","e9",1)
p(n,"gea","eb",1)
p(n,"gfj","fk",1)
p(n,"gfh","fi",1)
p(n,"gff","fg",1)
p(U.de.prototype,"gec","ed",1)
s(n=M.cu.prototype,"gaf",0,0,null,["$1","$0"],["ak","dR"],0,0)
r(n,"geo","ep",4)
r(n,"geq","er",4)
s(n=O.cG.prototype,"gem",0,0,null,["$1","$0"],["a3","en"],0,0)
s(n,"gf7",0,0,null,["$1","$0"],["cB","f8"],0,0)
r(n,"geg","eh",14)
r(n,"gei","ej",14)
s(X.cO.prototype,"gci",0,0,null,["$1","$0"],["az","dU"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.jL,J.a,J.a3,P.dy,P.j,H.cD,P.eZ,H.cv,H.hJ,H.ew,H.hw,P.bf,H.bC,H.dP,P.av,H.f6,H.f8,H.f1,P.dV,P.dh,P.d_,P.hi,P.d2,P.iN,P.iw,P.ir,P.dx,P.p,P.iF,P.ff,P.et,P.iM,P.iL,P.b5,P.a4,P.a8,P.aO,P.fM,P.cX,P.dq,P.eV,P.m,P.N,P.aW,P.q,P.P,P.br,P.hL,P.ix,W.eA,W.G,W.cw,P.iz,P.is,P.bn,T.ee,T.cx,T.cF,T.h1,R.cY,R.d3,R.d4,R.hr,O.ah,O.bL,E.ep,E.aP,E.fU,D.W,E.d1,Z.dg,Z.i8,Z.cn,Z.bg,Z.b2,D.es,D.ak,X.co,X.cB,X.f3,X.fc,X.aa,X.fC,X.hs,X.db,D.aN,D.a5,D.fP,D.hc,V.R,V.ai,V.eM,V.cI,V.aw,V.a0,V.O,V.aB,V.cS,V.D,V.w,U.dc,U.dd,U.de,M.cu,A.cl,A.ei,A.Y,A.cr,A.cP,A.cW,A.fl,A.bY,A.c_,A.c0,A.d7,A.hE,F.aQ,F.eP,F.bK,F.f5,F.bR,F.h2,F.h3,F.h4,F.h5,F.b1,F.hX,F.hY,F.i0,F.i2,F.i3,F.i4,O.d0,O.cH,O.fm,X.jC,X.hk,X.cO,V.fS,V.h6])
s(J.a,[J.f_,J.cz,J.cA,J.aR,J.bJ,J.aS,H.bO,H.aV,W.e,W.ed,W.bb,W.aj,W.E,W.dj,W.a9,W.eE,W.eF,W.dl,W.ct,W.dn,W.eH,W.h,W.dr,W.au,W.eX,W.dt,W.bI,W.fb,W.fw,W.dz,W.dA,W.ax,W.dB,W.dE,W.aA,W.dI,W.dK,W.aD,W.dL,W.aE,W.dQ,W.ap,W.dT,W.hq,W.aG,W.dW,W.hu,W.hQ,W.e0,W.e2,W.e4,W.e6,W.e8,P.aU,P.dv,P.aX,P.dG,P.fR,P.dR,P.b_,P.dY,P.ej,P.di,P.dN])
s(J.cA,[J.fN,J.bq,J.aT])
t(J.jK,J.aR)
s(J.bJ,[J.cy,J.f0])
t(P.fa,P.dy)
s(P.fa,[H.d9,W.ih,W.ig,P.eR])
t(H.M,H.d9)
s(P.j,[H.eK,H.fg,H.i9])
s(P.eZ,[H.fh,H.ia])
t(H.ex,H.ew)
s(P.bf,[H.fJ,H.f2,H.hI,H.er,H.h_,P.cN,P.af,P.hK,P.hG,P.he,P.ev,P.eD])
s(H.bC,[H.jw,H.hl,H.ja,H.jb,H.jc,P.ic,P.ib,P.id,P.ie,P.iE,P.iD,P.iW,P.iu,P.iv,P.f9,P.fe,P.eI,P.eJ,P.hP,P.hM,P.hN,P.hO,P.iG,P.iH,P.iJ,P.iI,P.iR,P.iQ,P.iS,P.iT,W.fy,W.fA,W.fZ,W.hh,W.il,P.iB,P.iX,P.eS,P.eT,P.el,E.fV,E.fW,E.fX,E.hp,D.eN,D.eO,F.iO,F.iY,F.j_,F.j0,F.j1,F.jq,F.jr,F.jv,F.je,F.iZ,F.j7,F.j8,F.i6,F.i5,F.hZ,F.i_,O.fp,O.fq,O.fr,O.fs,O.ft,O.fu,V.jp,V.fT,V.h8,V.h7,K.jf,K.jn,K.jg,K.jh,K.ji,K.jj,K.jk,K.jl,K.jm])
s(H.hl,[H.hf,H.bA])
t(P.fd,P.av)
t(H.K,P.fd)
t(H.f7,H.eK)
t(H.cJ,H.aV)
s(H.cJ,[H.c3,H.c5])
t(H.c4,H.c3)
t(H.bP,H.c4)
t(H.c6,H.c5)
t(H.cK,H.c6)
s(H.cK,[H.fD,H.fE,H.fF,H.fG,H.fH,H.cL,H.bQ])
t(P.it,P.iN)
t(P.iq,P.iw)
t(P.e_,P.ff)
t(P.da,P.e_)
s(P.et,[P.en,P.eL])
t(P.ey,P.hi)
s(P.ey,[P.eo,P.hT,P.hS])
t(P.hR,P.eL)
s(P.a8,[P.J,P.u])
s(P.af,[P.bl,P.eY])
t(P.ij,P.br)
s(W.e,[W.C,W.eQ,W.bM,W.aC,W.c7,W.aF,W.aq,W.c9,W.i7,W.c2,P.em,P.ba])
s(W.C,[W.V,W.aM])
s(W.V,[W.l,P.k])
s(W.l,[W.ef,W.eg,W.bc,W.eU,W.h0])
t(W.ez,W.aj)
t(W.bD,W.dj)
s(W.a9,[W.eB,W.eC])
t(W.dm,W.dl)
t(W.cs,W.dm)
t(W.dp,W.dn)
t(W.eG,W.dp)
t(W.al,W.bb)
t(W.ds,W.dr)
t(W.bF,W.ds)
t(W.du,W.dt)
t(W.bH,W.du)
t(W.b0,W.h)
s(W.b0,[W.bj,W.ao,W.bm])
t(W.fx,W.dz)
t(W.fz,W.dA)
t(W.dC,W.dB)
t(W.fB,W.dC)
t(W.dF,W.dE)
t(W.cM,W.dF)
t(W.dJ,W.dI)
t(W.fO,W.dJ)
t(W.fY,W.dK)
t(W.c8,W.c7)
t(W.ha,W.c8)
t(W.dM,W.dL)
t(W.hb,W.dM)
t(W.hg,W.dQ)
t(W.dU,W.dT)
t(W.hm,W.dU)
t(W.ca,W.c9)
t(W.hn,W.ca)
t(W.dX,W.dW)
t(W.ht,W.dX)
t(W.b3,W.ao)
t(W.e1,W.e0)
t(W.ii,W.e1)
t(W.dk,W.ct)
t(W.e3,W.e2)
t(W.im,W.e3)
t(W.e5,W.e4)
t(W.dD,W.e5)
t(W.e7,W.e6)
t(W.iy,W.e7)
t(W.e9,W.e8)
t(W.iC,W.e9)
t(W.ik,P.d_)
t(P.iA,P.iz)
t(P.a7,P.is)
t(P.dw,P.dv)
t(P.f4,P.dw)
t(P.dH,P.dG)
t(P.fK,P.dH)
t(P.dS,P.dR)
t(P.hj,P.dS)
t(P.dZ,P.dY)
t(P.hv,P.dZ)
t(P.ek,P.di)
t(P.fL,P.ba)
t(P.dO,P.dN)
t(P.hd,P.dO)
s(T.cx,[T.az,R.d6])
s(D.W,[E.cZ,D.bh,D.bi,D.z,X.fQ])
s(E.ep,[Z.cm,A.cU,T.ho])
s(X.fQ,[X.cE,X.ay,X.bN,X.d5])
s(O.ah,[D.cC,U.bG])
s(D.es,[U.eu,U.a6])
s(U.a6,[U.cp,U.cT])
t(A.fi,A.cU)
s(A.d7,[A.d8,A.hB,A.hC,A.hD,A.hz,A.T,A.hA,A.I,A.bX,A.hF,A.bZ,A.ab,A.bo,A.bp])
t(F.h9,F.eP)
t(F.hy,F.f5)
t(F.i1,F.i2)
t(F.fI,F.i3)
t(O.cG,O.d0)
s(O.cH,[O.fj,O.fk,O.am])
s(O.am,[O.fn,O.fo])
t(X.eW,X.hk)
u(H.d9,H.hJ)
u(H.c3,P.p)
u(H.c4,H.cv)
u(H.c5,P.p)
u(H.c6,H.cv)
u(P.dy,P.p)
u(P.e_,P.iF)
u(W.dj,W.eA)
u(W.dl,P.p)
u(W.dm,W.G)
u(W.dn,P.p)
u(W.dp,W.G)
u(W.dr,P.p)
u(W.ds,W.G)
u(W.dt,P.p)
u(W.du,W.G)
u(W.dz,P.av)
u(W.dA,P.av)
u(W.dB,P.p)
u(W.dC,W.G)
u(W.dE,P.p)
u(W.dF,W.G)
u(W.dI,P.p)
u(W.dJ,W.G)
u(W.dK,P.av)
u(W.c7,P.p)
u(W.c8,W.G)
u(W.dL,P.p)
u(W.dM,W.G)
u(W.dQ,P.av)
u(W.dT,P.p)
u(W.dU,W.G)
u(W.c9,P.p)
u(W.ca,W.G)
u(W.dW,P.p)
u(W.dX,W.G)
u(W.e0,P.p)
u(W.e1,W.G)
u(W.e2,P.p)
u(W.e3,W.G)
u(W.e4,P.p)
u(W.e5,W.G)
u(W.e6,P.p)
u(W.e7,W.G)
u(W.e8,P.p)
u(W.e9,W.G)
u(P.dv,P.p)
u(P.dw,W.G)
u(P.dG,P.p)
u(P.dH,W.G)
u(P.dR,P.p)
u(P.dS,W.G)
u(P.dY,P.p)
u(P.dZ,W.G)
u(P.di,P.av)
u(P.dN,P.p)
u(P.dO,W.G)})()
var v={mangledGlobalNames:{u:"int",J:"double",a8:"num",q:"String",b5:"bool",aW:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.ao]},{func:1,ret:P.aW,args:[,,]},{func:1,ret:-1,args:[P.u,[P.j,E.aP]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bj]},{func:1,ret:-1,args:[P.u,[P.j,D.a5]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.u,[P.j,U.a6]]},{func:1,ret:-1,args:[P.u,[P.j,V.aw]]},{func:1,ret:P.aW,args:[,]},{func:1,ret:P.bn,args:[,,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.b5,args:[[P.j,D.a5]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bc.prototype
C.I=J.a.prototype
C.b=J.aR.prototype
C.c=J.cy.prototype
C.i=J.cz.prototype
C.d=J.bJ.prototype
C.a=J.aS.prototype
C.J=J.aT.prototype
C.v=J.fN.prototype
C.o=J.bq.prototype
C.w=W.b3.prototype
C.x=W.c2.prototype
C.P=new P.eo()
C.y=new P.en()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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

C.F=new P.fM()
C.e=new P.hR()
C.G=new P.hT()
C.f=new P.it()
C.n=new P.aO(0)
C.H=new P.aO(5e6)
C.r=H.d(u([127,2047,65535,1114111]),[P.u])
C.j=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.k=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.l=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.L=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.M=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.t=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.N=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.u=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.K=H.d(u([]),[P.q])
C.O=new H.ex(0,{},C.K,[P.q,P.q])})();(function staticFields(){$.ag=0
$.bB=null
$.kf=null
$.l8=null
$.l0=null
$.lc=null
$.j2=null
$.jd=null
$.k5=null
$.bu=null
$.cd=null
$.ce=null
$.k0=!1
$.ae=C.f
$.a1=[]
$.kr=null
$.ku=null
$.bS=null
$.kA=null
$.kK=null
$.kN=null
$.kM=null
$.hU=null
$.hV=null
$.hW=null
$.kL=null
$.kt=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nT","lh",function(){return H.l7("_$dart_dartClosure")})
u($,"nU","k8",function(){return H.l7("_$dart_js")})
u($,"nV","li",function(){return H.ar(H.hx({
toString:function(){return"$receiver$"}}))})
u($,"nW","lj",function(){return H.ar(H.hx({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nX","lk",function(){return H.ar(H.hx(null))})
u($,"nY","ll",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o0","lo",function(){return H.ar(H.hx(void 0))})
u($,"o1","lp",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o_","ln",function(){return H.ar(H.kF(null))})
u($,"nZ","lm",function(){return H.ar(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o3","lr",function(){return H.ar(H.kF(void 0))})
u($,"o2","lq",function(){return H.ar(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oh","k9",function(){return P.mx()})
u($,"o4","ls",function(){return P.mt()})
u($,"oi","lw",function(){return H.m2(H.bt(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"oj","lx",function(){return P.mg("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ok","ly",function(){return P.mU()})
u($,"ob","lv",function(){return Z.ac(0)})
u($,"o5","lt",function(){return Z.ac(511)})
u($,"od","aL",function(){return Z.ac(1)})
u($,"oc","aK",function(){return Z.ac(2)})
u($,"o7","aJ",function(){return Z.ac(4)})
u($,"oe","b7",function(){return Z.ac(8)})
u($,"of","b8",function(){return Z.ac(16)})
u($,"o8","ch",function(){return Z.ac(32)})
u($,"o9","ci",function(){return Z.ac(64)})
u($,"oa","lu",function(){return Z.ac(96)})
u($,"og","bz",function(){return Z.ac(128)})
u($,"o6","aI",function(){return Z.ac(256)})
u($,"nS","lg",function(){return new V.eM(1e-9)})
u($,"nR","x",function(){return $.lg()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bO,DataView:H.aV,ArrayBufferView:H.aV,Float32Array:H.bP,Float64Array:H.bP,Int16Array:H.fD,Int32Array:H.fE,Int8Array:H.fF,Uint16Array:H.fG,Uint32Array:H.fH,Uint8ClampedArray:H.cL,CanvasPixelArray:H.cL,Uint8Array:H.bQ,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ed,HTMLAnchorElement:W.ef,HTMLAreaElement:W.eg,Blob:W.bb,HTMLCanvasElement:W.bc,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CSSPerspective:W.ez,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bD,MSStyleCSSProperties:W.bD,CSS2Properties:W.bD,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.eB,CSSUnparsedValue:W.eC,DataTransferItemList:W.eE,DOMException:W.eF,ClientRectList:W.cs,DOMRectList:W.cs,DOMRectReadOnly:W.ct,DOMStringList:W.eG,DOMTokenList:W.eH,Element:W.V,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.al,FileList:W.bF,FileWriter:W.eQ,HTMLFormElement:W.eU,Gamepad:W.au,History:W.eX,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.bI,KeyboardEvent:W.bj,Location:W.fb,MediaList:W.fw,MessagePort:W.bM,MIDIInputMap:W.fx,MIDIOutputMap:W.fz,MimeType:W.ax,MimeTypeArray:W.fB,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,Attr:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cM,RadioNodeList:W.cM,Plugin:W.aA,PluginArray:W.fO,RTCStatsReport:W.fY,HTMLSelectElement:W.h0,SourceBuffer:W.aC,SourceBufferList:W.ha,SpeechGrammar:W.aD,SpeechGrammarList:W.hb,SpeechRecognitionResult:W.aE,Storage:W.hg,CSSStyleSheet:W.ap,StyleSheet:W.ap,TextTrack:W.aF,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.hm,TextTrackList:W.hn,TimeRanges:W.hq,Touch:W.aG,TouchEvent:W.bm,TouchList:W.ht,TrackDefaultList:W.hu,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.hQ,VideoTrackList:W.i7,WheelEvent:W.b3,Window:W.c2,DOMWindow:W.c2,CSSRuleList:W.ii,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.im,NamedNodeMap:W.dD,MozNamedAttrMap:W.dD,SpeechRecognitionResultList:W.iy,StyleSheetList:W.iC,SVGLength:P.aU,SVGLengthList:P.f4,SVGNumber:P.aX,SVGNumberList:P.fK,SVGPointList:P.fR,SVGStringList:P.hj,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b_,SVGTransformList:P.hv,AudioBuffer:P.ej,AudioParamMap:P.ek,AudioTrackList:P.em,AudioContext:P.ba,webkitAudioContext:P.ba,BaseAudioContext:P.ba,OfflineAudioContext:P.fL,SQLResultSetRowList:P.hd})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.la,[])
else K.la([])})})()
//# sourceMappingURL=test.dart.js.map
