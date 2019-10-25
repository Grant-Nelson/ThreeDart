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
a[c]=function(){a[c]=function(){H.oO(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ko:function ko(){},
jQ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fv:function(){return new P.c5("No element")},
mM:function(){return new P.c5("Too many elements")},
dh:function(a,b,c,d){if(c-b<=32)H.nf(a,b,c,d)
else H.ne(a,b,c,d)},
nf:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
ne:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a5(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a5(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.C(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a3,a2[a1])
C.b.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.m(a2,a4,a2[a1])
C.b.m(a2,a1,r)
H.dh(a2,a3,o-2,a5)
H.dh(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.C(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.C(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.m(a2,o,a2[n])
C.b.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.m(a2,m,a2[n])
C.b.m(a2,n,l)}n=j
break}}}H.dh(a2,o,n,a5)}else H.dh(a2,o,n,a5)},
l:function l(a){this.a=a},
fa:function fa(){},
d_:function d_(){},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
fO:function fO(a,b){this.a=null
this.b=a
this.c=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
iR:function iR(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
iq:function iq(){},
dy:function dy(){},
mE:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
eC:function(a){var u,t=H.oP(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
ox:function(a){return v.types[a]},
lZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.M(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.d(H.aj(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n6:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.C(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.mY(a)+H.lN(H.cx(a),0,null)},
mY:function(a){var u,t,s,r,q,p,o,n=J.M(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibz){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eC(t.length>1&&C.a.C(t,0)===36?C.a.a6(t,1):t)},
mZ:function(){if(!!self.location)return self.location.href
return},
lh:function(a){var u,t,s,r,q=J.ab(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n7:function(a){var u,t,s,r=H.c([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aj(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aH(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.aj(s))}return H.lh(r)},
li:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aj(s))
if(s<0)throw H.d(H.aj(s))
if(s>65535)return H.n7(a)}return H.lh(a)},
n8:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bs:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aH(u,10))>>>0,56320|u&1023)}}throw H.d(P.X(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n5:function(a){var u=H.br(a).getFullYear()+0
return u},
n3:function(a){var u=H.br(a).getMonth()+1
return u},
n_:function(a){var u=H.br(a).getDate()+0
return u},
n0:function(a){var u=H.br(a).getHours()+0
return u},
n2:function(a){var u=H.br(a).getMinutes()+0
return u},
n4:function(a){var u=H.br(a).getSeconds()+0
return u},
n1:function(a){var u=H.br(a).getMilliseconds()+0
return u},
w:function(a){throw H.d(H.aj(a))},
b:function(a,b){if(a==null)J.ab(a)
throw H.d(H.bG(a,b))},
bG:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,s,null)
u=J.ab(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.dd(b,s)},
or:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bt(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bt(a,c,!0,b,"end",u)
return new P.af(!0,b,"end",null)},
aj:function(a){return new P.af(!0,a,null,null)},
om:function(a){if(typeof a!=="number")throw H.d(H.aj(a))
return a},
d:function(a){var u
if(a==null)a=new P.da()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m3})
u.name=""}else u.toString=H.m3
return u},
m3:function(){return J.a1(this.dartException)},
t:function(a){throw H.d(a)},
o:function(a){throw H.d(P.aw(a))},
as:function(a){var u,t,s,r,q,p
a=H.m2(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ib(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ic:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lr:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ld:function(a,b){return new H.hh(a,b==null?null:b.method)},
kp:function(a,b){var u=b==null,t=u?null:b.method
return new H.fz(a,t,u?null:b.receiver)},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kp(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ld(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m7()
q=$.m8()
p=$.m9()
o=$.ma()
n=$.md()
m=$.me()
l=$.mc()
$.mb()
k=$.mg()
j=$.mf()
i=r.aa(u)
if(i!=null)return f.$1(H.kp(u,i))
else{i=q.aa(u)
if(i!=null){i.method="call"
return f.$1(H.kp(u,i))}else{i=p.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=n.aa(u)
if(i==null){i=m.aa(u)
if(i==null){i=l.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=k.aa(u)
if(i==null){i=j.aa(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ld(u,i))}}return f.$1(new H.ip(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dj()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.af(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dj()
return a},
kJ:function(a){var u
if(a==null)return new H.eb(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eb(a)},
ov:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oD:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bF:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oD)
a.$identity=u
return u},
mD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.bK(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ak
if(typeof t!=="number")return t.A()
$.ak=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l0(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mz(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l0(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mz:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ox,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l_:H.kc
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mA:function(a,b,c,d){var u=H.kc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l0:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mA(t,!r,u,b)
if(t===0){r=$.ak
if(typeof r!=="number")return r.A()
$.ak=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
return new Function(r+H.e(q==null?$.bL=H.eP("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ak
if(typeof r!=="number")return r.A()
$.ak=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
return new Function(r+H.e(q==null?$.bL=H.eP("self"):q)+"."+H.e(u)+"("+o+");}")()},
mB:function(a,b,c,d){var u=H.kc,t=H.l_
switch(b?-1:a){case 0:throw H.d(H.nc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mC:function(a,b){var u,t,s,r,q,p,o,n=$.bL
if(n==null)n=$.bL=H.eP("self")
u=$.kZ
if(u==null)u=$.kZ=H.eP("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ak
if(typeof u!=="number")return u.A()
$.ak=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ak
if(typeof u!=="number")return u.A()
$.ak=u+1
return new Function(n+u+"}")()},
kF:function(a,b,c,d,e,f,g){return H.mD(a,b,c,d,!!e,!!f,g)},
kc:function(a){return a.a},
l_:function(a){return a.c},
eP:function(a){var u,t,s,r=new H.bK("self","target","receiver","name"),q=J.km(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oI:function(a,b){throw H.d(H.my(a,H.eC(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else u=!0
if(u)return a
H.oI(a,b)},
ot:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
my:function(a,b){return new H.eQ("CastError: "+P.kj(a)+": type '"+H.e(H.oi(a))+"' is not a subtype of type '"+b+"'")},
oi:function(a){var u,t=J.M(a)
if(!!t.$ibM){u=H.ot(t)
if(u!=null)return H.oJ(u)
return"Closure"}return H.c3(a)},
oO:function(a){throw H.d(new P.f1(a))},
nc:function(a){return new H.hA(a)},
lX:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cx:function(a){if(a==null)return
return a.$ti},
po:function(a,b,c){return H.k6(a["$a"+H.e(c)],H.cx(b))},
ow:function(a,b,c,d){var u=H.k6(a["$a"+H.e(c)],H.cx(b))
return u==null?null:u[d]},
kI:function(a,b,c){var u=H.k6(a["$a"+H.e(b)],H.cx(a))
return u==null?null:u[c]},
cy:function(a,b){var u=H.cx(a)
return u==null?null:u[b]},
oJ:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eC(a[0].name)+H.lN(a,1,b)
if(typeof a=="function")return H.eC(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nR:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ou(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.h(0)+">"},
k6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pm:function(a,b,c){return a.apply(b,H.k6(J.M(b)["$a"+H.e(c)],H.cx(b)))},
pn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oF:function(a){var u,t,s,r,q=$.lY.$1(a),p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lS.$2(a,q)
if(q!=null){p=$.jO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k2(u)
$.jO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jU[q]=u
return u}if(s==="-"){r=H.k2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m0(a,u)
if(s==="*")throw H.d(P.io(q))
if(v.leafTags[q]===true){r=H.k2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m0(a,u)},
m0:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kL(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k2:function(a){return J.kL(a,!1,null,!!a.$iB)},
oG:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k2(u)
else return J.kL(u,c,null,null)},
oB:function(){if(!0===$.kK)return
$.kK=!0
H.oC()},
oC:function(){var u,t,s,r,q,p,o,n
$.jO=Object.create(null)
$.jU=Object.create(null)
H.oA()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m1.$1(q)
if(p!=null){o=H.oG(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oA:function(){var u,t,s,r,q,p,o=C.F()
o=H.bE(C.G,H.bE(C.H,H.bE(C.u,H.bE(C.u,H.bE(C.I,H.bE(C.J,H.bE(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lY=new H.jR(r)
$.lS=new H.jS(q)
$.m1=new H.jT(p)},
bE:function(a,b){return a(b)||b},
mO:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
oM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
os:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m2:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kO:function(a,b,c){var u=H.oN(a,b,c)
return u},
oN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m2(b),'g'),H.os(c))},
eV:function eV(){},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a){this.a=a},
k9:function k9(a){this.a=a},
eb:function eb(a){this.a=a
this.b=null},
bM:function bM(){},
hX:function hX(){},
hP:function hP(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a){this.a=a},
hA:function hA(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fE:function fE(a,b){this.a=a
this.$ti=b},
fF:function fF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
fy:function fy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bC:function(a){return a},
mX:function(a){return new Int8Array(a)},
at:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bG(b,a))},
nP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.or(a,b,c))
return b},
bZ:function bZ(){},
b1:function b1(){},
d5:function d5(){},
c_:function c_(){},
d6:function d6(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
d7:function d7(){},
c0:function c0(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
ou:function(a){return J.l5(a?Object.keys(a):[],null)},
oP:function(a){return v.mangledGlobalNames[a]},
oH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kK==null){H.oB()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.io("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kQ()]
if(r!=null)return r
r=H.oF(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kQ(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.X(a,0,4294967295,"length",null))
return J.l5(new Array(a),b)},
l5:function(a,b){return J.km(H.c(a,[b]))},
km:function(a){a.fixed$length=Array
return a},
M:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cU.prototype
return J.cT.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.cV.prototype
if(typeof a=="boolean")return J.fx.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
cv:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
eA:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
lW:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bz.prototype
return a},
cw:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bz.prototype
return a},
bI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.a_)return a
return J.jP(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).p(a,b)},
kS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lW(a).B(a,b)},
cB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cv(a).i(a,b)},
ka:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lZ(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eA(a).m(a,b,c)},
mp:function(a,b){return J.cw(a).C(a,b)},
mq:function(a,b,c){return J.bI(a).ft(a,b,c)},
mr:function(a,b,c,d){return J.bI(a).fP(a,b,c,d)},
ms:function(a,b){return J.cw(a).U(a,b)},
kb:function(a,b){return J.lW(a).h0(a,b)},
eD:function(a,b){return J.eA(a).H(a,b)},
mt:function(a,b,c,d){return J.bI(a).hd(a,b,c,d)},
kT:function(a,b){return J.eA(a).F(a,b)},
mu:function(a){return J.bI(a).gfW(a)},
kU:function(a){return J.bI(a).gbO(a)},
cC:function(a){return J.M(a).gG(a)},
aR:function(a){return J.eA(a).gT(a)},
ab:function(a){return J.cv(a).gl(a)},
kV:function(a){return J.eA(a).hK(a)},
mv:function(a,b){return J.bI(a).hO(a,b)},
mw:function(a,b,c){return J.cw(a).q(a,b,c)},
mx:function(a){return J.cw(a).hX(a)},
a1:function(a){return J.M(a).h(a)},
a:function a(){},
fx:function fx(){},
cV:function cV(){},
cW:function cW(){},
hl:function hl(){},
bz:function bz(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
kn:function kn(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(){},
cU:function cU(){},
cT:function cT(){},
aX:function aX(){}},P={
nr:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oj()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bF(new P.iT(s),1)).observe(u,{childList:true})
return new P.iS(s,u,t)}else if(self.setImmediate!=null)return P.ok()
return P.ol()},
ns:function(a){self.scheduleImmediate(H.bF(new P.iU(a),0))},
nt:function(a){self.setImmediate(H.bF(new P.iV(a),0))},
nu:function(a){P.kt(C.n,a)},
kt:function(a,b){var u=C.c.a5(a.a,1000)
return P.nz(u<0?0:u,b)},
lq:function(a,b){var u=C.c.a5(a.a,1000)
return P.nA(u<0?0:u,b)},
nz:function(a,b){var u=new P.eh()
u.e8(a,b)
return u},
nA:function(a,b){var u=new P.eh()
u.e9(a,b)
return u},
oc:function(){var u,t
for(;u=$.bD,u!=null;){$.cu=null
t=u.b
$.bD=t
if(t==null)$.ct=null
u.a.$0()}},
oh:function(){$.kD=!0
try{P.oc()}finally{$.cu=null
$.kD=!1
if($.bD!=null)$.kR().$1(P.lT())}},
of:function(a){var u=new P.dE(a)
if($.bD==null){$.bD=$.ct=u
if(!$.kD)$.kR().$1(P.lT())}else $.ct=$.ct.b=u},
og:function(a){var u,t,s=$.bD
if(s==null){P.of(a)
$.cu=$.ct
return}u=new P.dE(a)
t=$.cu
if(t==null){u.b=s
$.bD=$.cu=u}else{u.b=t.b
$.cu=t.b=u
if(u.b==null)$.ct=u}},
lp:function(a,b){var u=$.ai
if(u===C.f)return P.kt(a,b)
return P.kt(a,u.fX(b))},
ni:function(a,b){var u=$.ai
if(u===C.f)return P.lq(a,b)
return P.lq(a,u.cT(b,P.dr))},
lO:function(a,b,c,d,e){var u={}
u.a=d
P.og(new P.jH(u,e))},
od:function(a,b,c,d){var u,t=$.ai
if(t===c)return d.$0()
$.ai=c
u=t
try{t=d.$0()
return t}finally{$.ai=u}},
oe:function(a,b,c,d,e){var u,t=$.ai
if(t===c)return d.$1(e)
$.ai=c
u=t
try{t=d.$1(e)
return t}finally{$.ai=u}},
iT:function iT(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
eh:function eh(){this.c=0},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a){this.a=a
this.b=null},
dl:function dl(){},
hS:function hS(){},
dr:function dr(){},
jy:function jy(){},
jH:function jH(a,b){this.a=a
this.b=b},
j8:function j8(){},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
mQ:function(a,b){return new H.L([a,b])},
kq:function(a,b){return new H.L([a,b])},
mS:function(a){return H.ov(a,new H.L([null,null]))},
cZ:function(a){return new P.j5([a])},
ky:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ny:function(a,b){var u=new P.dT(a,b)
u.c=a.e
return u},
mL:function(a,b,c){var u,t
if(P.kE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a5.push(a)
try{P.nS(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.ln(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kl:function(a,b,c){var u,t
if(P.kE(a))return b+"..."+c
u=new P.Q(b)
$.a5.push(a)
try{t=u
t.a=P.ln(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kE:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nS:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gI(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
mR:function(a,b,c){var u=P.mQ(b,c)
a.F(0,new P.fG(u))
return u},
l6:function(a,b){var u,t,s=P.cZ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kr:function(a){var u,t={}
if(P.kE(a))return"{...}"
u=new P.Q("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.kT(a,new P.fL(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j5:function j5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j6:function j6(a){this.a=a
this.c=this.b=null},
dT:function dT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fG:function fG(a){this.a=a},
fH:function fH(){},
q:function q(){},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
aB:function aB(){},
jq:function jq(){},
fM:function fM(){},
dz:function dz(a,b){this.a=a
this.$ti=b},
jc:function jc(){},
dU:function dU(){},
en:function en(){},
nl:function(a,b,c,d){if(b instanceof Uint8Array)return P.nm(!1,b,c,d)
return},
nm:function(a,b,c,d){var u,t,s=$.mh()
if(s==null)return
u=0===c
if(u&&!0)return P.kw(s,b)
t=b.length
d=P.b7(c,d,t)
if(u&&d===t)return P.kw(s,b)
return P.kw(s,b.subarray(c,d))},
kw:function(a,b){if(P.no(b))return
return P.np(a,b)},
np:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aa(t)}return},
no:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nn:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aa(t)}return},
lQ:function(a,b,c){var u,t,s
for(u=J.cv(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ad()
if((s&127)!==s)return t-b}return c-b},
kY:function(a,b,c,d,e,f){if(C.c.b3(f,4)!==0)throw H.d(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eM:function eM(){},
eN:function eN(){},
eS:function eS(){},
eX:function eX(){},
fc:function fc(){},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fs:function fs(a){this.a=a},
iy:function iy(){},
iA:function iA(){},
jw:function jw(a){this.b=0
this.c=a},
iz:function iz(a){this.a=a},
jv:function jv(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eB:function(a,b,c){var u=H.n6(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.O(a,null,null))},
mI:function(a){if(a instanceof H.bM)return a.h(0)
return"Instance of '"+H.e(H.c3(a))+"'"},
mT:function(a,b,c){var u,t,s=J.mN(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l7:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aR(a);u.v();)t.push(u.gI(u))
if(b)return t
return J.km(t)},
c6:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b7(b,c,u)
return H.li(b>0||c<u?C.b.dP(a,b,c):a)}if(!!J.M(a).$ic0)return H.n8(a,b,P.b7(b,c,a.length))
return P.ng(a,b,c)},
ng:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.X(b,0,J.ab(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.X(c,b,J.ab(a),q,q))
t=J.aR(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.X(c,b,s,q,q))
r.push(t.gI(t))}return H.li(r)},
na:function(a){return new H.fy(a,H.mO(a,!1,!0,!1,!1,!1))},
ln:function(a,b,c){var u=J.aR(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gI(u))
while(u.v())}else{a+=H.e(u.gI(u))
for(;u.v();)a=a+c+H.e(u.gI(u))}return a},
lt:function(){var u=H.mZ()
if(u!=null)return P.nk(u)
throw H.d(P.x("'Uri.base' is not supported"))},
eo:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mn().b
if(typeof b!=="string")H.t(H.aj(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghc().bP(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bs(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mF:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cL:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a){return new P.aU(1000*a)},
kj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mI(a)},
cD:function(a){return new P.af(!1,null,null,a)},
kX:function(a,b,c){return new P.af(!0,a,b,c)},
dd:function(a,b){return new P.bt(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bt(b,c,!0,a,d,"Invalid value")},
b7:function(a,b,c){if(0>a||a>c)throw H.d(P.X(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.X(b,a,c,"end",null))
return b}return c},
lj:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.X(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ab(b):e
return new P.fu(u,!0,a,c,"Index out of range")},
x:function(a){return new P.ir(a)},
io:function(a){return new P.im(a)},
lm:function(a){return new P.c5(a)},
aw:function(a){return new P.eU(a)},
u:function(a){return new P.dM(a)},
O:function(a,b,c){return new P.fm(a,b,c)},
mU:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kN:function(a){H.oH(a)},
nk:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.C(a,4)^58)*3|C.a.C(a,0)^100|C.a.C(a,1)^97|C.a.C(a,2)^116|C.a.C(a,3)^97)>>>0
if(u===0)return P.ls(e<e?C.a.q(a,0,e):a,5,f).gdI()
else if(u===32)return P.ls(C.a.q(a,5,e),0,f).gdI()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.v])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lP(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.i_()
if(r>=0)if(P.lP(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.w(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
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
a=C.a.aN(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aN(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aN(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jf(a,r,q,p,o,n,m,k)}return P.nB(a,0,e,r,q,p,o,n,m,k)},
lv:function(a){var u=P.k
return C.b.hi(H.c(a.split("&"),[u]),P.kq(u,u),new P.iw(C.e))},
nj:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.it(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.U(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eB(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eB(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iu(a),d=new P.iv(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.v])
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
else{m=P.nj(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aH(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nB:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nJ(a,b,d)
else{if(d===b)P.bB(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nK(a,u,e-1):""
s=P.nG(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nI(P.eB(C.a.q(a,r,g),new P.jr(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nH(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.kA(a,h+1,i,n):n
return new P.bA(j,t,s,q,p,o,i<c?P.nF(a,i+1,c):n)},
lH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bB:function(a,b,c){throw H.d(P.O(c,a,b))},
nI:function(a,b){if(a!=null&&a===P.lH(b))return
return a},
nG:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.U(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.a.U(a,u)!==93)P.bB(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nD(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.lM(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lu(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.U(a,p)===58){s=C.a.bd(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lM(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lu(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nM(a,b,c)},
nD:function(a,b,c){var u,t=C.a.bd(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
lM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.U(a,u)
if(r===37){q=P.kB(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bB(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.U(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.q(a,t,u)
l.a+=P.kz(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.U(a,u)
if(q===37){p=P.kB(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.Q("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bB(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kz(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lJ(C.a.C(a,b)))P.bB(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bB(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.nC(t?a.toLowerCase():a)},
nC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nK:function(a,b,c){return P.cr(a,b,c,C.V,!1)},
nH:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cr(a,b,c,C.z,!0):C.j.im(d,new P.js(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a2(u,"/"))u="/"+u
return P.nL(u,e,f)},
nL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a2(a,"/"))return P.nN(a,!u||c)
return P.nO(a)},
kA:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cD("Both query and queryParameters specified"))
return P.cr(a,b,c,C.l,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.F(0,new P.jt(new P.ju(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nF:function(a,b,c){return P.cr(a,b,c,C.l,!0)},
kB:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.U(a,b+1)
t=C.a.U(a,p)
s=H.jQ(u)
r=H.jQ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aH(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bs(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kz:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.v])
t[0]=37
t[1]=C.a.C(m,a>>>4)
t[2]=C.a.C(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fH(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.C(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.C(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c6(t,0,null)},
cr:function(a,b,c,d,e){var u=P.lL(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
lL:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.U(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kB(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bB(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.U(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kz(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lK:function(a){if(C.a.a2(a,"."))return!0
return C.a.dd(a,"/.")!==-1},
nO:function(a){var u,t,s,r,q,p,o
if(!P.lK(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nN:function(a,b){var u,t,s,r,q,p
if(!P.lK(a))return!b?P.lI(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaq(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaq(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lI(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lI:function(a){var u,t,s,r=a.length
if(r>=2&&P.lJ(J.mp(a,0)))for(u=1;u<r;++u){t=C.a.C(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cD("Invalid URL encoding"))}}return u},
kC:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.l(C.a.q(a,b,c))}else{r=H.c([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.C(a,q)
if(t>127)throw H.d(P.cD("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cD("Truncated URI"))
r.push(P.nE(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iz(!1).bP(r)},
lJ:function(a){var u=a|32
return 97<=u&&u<=122},
ls:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.O(m,a,t))}}if(s<0&&t>b)throw H.d(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaq(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.d(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.ht(0,a,o,u)
else{n=P.lL(a,o,u,C.l,!0)
if(n!=null)a=C.a.aN(a,o,u,n)}return new P.is(a,l,c)},
nQ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mU(22,new P.jC(),P.bw),n=new P.jB(o),m=new P.jD(),l=new P.jE(),k=n.$2(0,225)
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
lP:function(a,b,c,d,e){var u,t,s,r,q,p=$.mo()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
au:function au(){},
a6:function a6(a,b){this.a=a
this.b=b},
K:function K(){},
aU:function aU(a){this.a=a},
f8:function f8(){},
f9:function f9(){},
bk:function bk(){},
da:function da(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fu:function fu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ir:function ir(a){this.a=a},
im:function im(a){this.a=a},
c5:function c5(a){this.a=a},
eU:function eU(a){this.a=a},
hk:function hk(){},
dj:function dj(){},
f1:function f1(a){this.a=a},
dM:function dM(a){this.a=a},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(){},
v:function v(){},
i:function i(){},
fw:function fw(){},
n:function n(){},
P:function P(){},
b2:function b2(){},
a9:function a9(){},
a_:function a_(){},
k:function k(){},
Q:function Q(a){this.a=a},
iw:function iw(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(){},
ju:function ju(a,b){this.a=a
this.b=b},
jt:function jt(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(){},
jB:function jB(a){this.a=a},
jD:function jD(){},
jE:function jE(){},
jf:function jf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
op:function(a){var u,t=J.M(a)
if(!!t.$iaA){u=t.gcX(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.em(a.data,a.height,a.width)},
oo:function(a){if(a instanceof P.em)return{data:a.a,height:a.b,width:a.c}
return a},
aM:function(a){var u,t,s,r,q
if(a==null)return
u=P.kq(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
on:function(a){var u={}
a.F(0,new P.jI(u))
return u},
jh:function jh(){},
jj:function jj(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
fj:function fj(){},
fk:function fk(){},
j4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j7:function j7(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
fB:function fB(){},
b3:function b3(){},
hi:function hi(){},
hq:function hq(){},
c4:function c4(){},
hT:function hT(){},
j:function j(){},
b8:function b8(){},
ia:function ia(){},
dR:function dR(){},
dS:function dS(){},
e1:function e1(){},
e2:function e2(){},
ed:function ed(){},
ee:function ee(){},
ek:function ek(){},
el:function el(){},
bw:function bw(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(a){this.a=a},
eL:function eL(){},
bg:function bg(){},
hj:function hj(){},
dF:function dF(){},
df:function df(){},
hO:function hO(){},
e9:function e9(){},
ea:function ea(){}},W={
kW:function(){var u=document.createElement("a")
return u},
ke:function(){var u=document.createElement("canvas")
return u},
mH:function(a,b,c){var u=document.body,t=(u&&C.r).a9(u,a,b,c)
t.toString
u=new H.cf(new W.a0(t),new W.fb(),[W.E])
return u.gaC(u)},
kg:function(a){return"wheel"},
bO:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bI(a)
t=u.gdE(a)
if(typeof t==="string")r=u.gdE(a)}catch(s){H.aa(s)}return r},
mK:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.aa(u)}return s},
j3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lF:function(a,b,c,d){var u=W.j3(W.j3(W.j3(W.j3(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d){var u=W.lR(new W.j1(c),W.h)
if(u!=null&&!0)J.mr(a,b,u,!1)
return new W.j0(a,b,u,!1)},
lE:function(a){var u=W.kW(),t=window.location
u=new W.ch(new W.jb(u,t))
u.e0(a)
return u},
nv:function(a,b,c,d){return!0},
nw:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lG:function(){var u=P.k,t=P.l6(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jm(t,P.cZ(u),P.cZ(u),P.cZ(u),null)
t.e5(null,new H.fP(C.o,new W.jn(),[H.cy(C.o,0),u]),s,null)
return t},
lR:function(a,b){var u=$.ai
if(u===C.f)return a
return u.cT(a,b)},
m:function m(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
bh:function bh(){},
bi:function bi(){},
bj:function bj(){},
aS:function aS(){},
eY:function eY(){},
F:function F(){},
bN:function bN(){},
eZ:function eZ(){},
ac:function ac(){},
am:function am(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
ag:function ag(){},
f5:function f5(){},
cN:function cN(){},
cO:function cO(){},
f6:function f6(){},
f7:function f7(){},
iX:function iX(a,b){this.a=a
this.b=b},
S:function S(){},
fb:function fb(){},
h:function h(){},
f:function f(){},
an:function an(){},
bQ:function bQ(){},
fh:function fh(){},
fl:function fl(){},
az:function az(){},
fr:function fr(){},
bS:function bS(){},
aA:function aA(){},
bT:function bT(){},
bp:function bp(){},
fI:function fI(){},
h2:function h2(){},
bY:function bY(){},
h3:function h3(){},
h4:function h4(a){this.a=a},
h5:function h5(){},
h6:function h6(a){this.a=a},
aE:function aE(){},
h7:function h7(){},
ap:function ap(){},
a0:function a0(a){this.a=a},
E:function E(){},
d8:function d8(){},
aG:function aG(){},
hn:function hn(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
hB:function hB(){},
aH:function aH(){},
hM:function hM(){},
aI:function aI(){},
hN:function hN(){},
aJ:function aJ(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aq:function aq(){},
dm:function dm(){},
hU:function hU(){},
hV:function hV(){},
c7:function c7(){},
aK:function aK(){},
ar:function ar(){},
hY:function hY(){},
hZ:function hZ(){},
i4:function i4(){},
aL:function aL(){},
bv:function bv(){},
i8:function i8(){},
i9:function i9(){},
b9:function b9(){},
ix:function ix(){},
iP:function iP(){},
bc:function bc(){},
cg:function cg(){},
iY:function iY(){},
dH:function dH(){},
j2:function j2(){},
dZ:function dZ(){},
jg:function jg(){},
jk:function jk(){},
iW:function iW(){},
j_:function j_(a){this.a=a},
j0:function j0(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j1:function j1(a){this.a=a},
ch:function ch(a){this.a=a},
G:function G(){},
d9:function d9(a){this.a=a},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(){},
jd:function jd(){},
je:function je(){},
jm:function jm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jn:function jn(){},
jl:function jl(){},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aF:function aF(){},
jb:function jb(a,b){this.a=a
this.b=b},
ep:function ep(a){this.a=a},
jx:function jx(a){this.a=a},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
cn:function cn(){},
co:function co(){},
e7:function e7(){},
e8:function e8(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
cp:function cp(){},
cq:function cq(){},
ei:function ei(){},
ej:function ej(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){}},T={
I:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.C(a,0)
t=C.a.C(b,0)
s=new T.ht()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
p:function(a){var u=new T.hC()
u.dY(a)
return u},
av:function av(){},
cS:function cS(){},
b_:function b_(){},
a3:function a3(){this.a=null},
ht:function ht(){this.b=this.a=null},
hC:function hC(){this.a=null},
dp:function dp(){},
i_:function i_(){},
i0:function i0(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
i1:function i1(a){var _=this
_.a=a
_.e=_.d=_.b=null},
i2:function i2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
i6:function(){var u=new R.i5(),t=P.k
u.a=new H.L([t,R.dk])
u.b=new H.L([t,R.dt])
return u},
dk:function dk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a){this.b=a
this.c=null},
i5:function i5(){this.c=this.b=this.a=null},
dv:function dv(a){this.b=a
this.a=this.c=null}},O={
kf:function(a){var u=new O.aT([a])
u.bq(a)
return u},
aT:function aT(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
l8:function(){var u,t=new O.d1(),s=O.kf(V.aC)
t.e=s
s.b4(t.geE(),t.geG())
s=new O.ao(t,"emission")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.f=s
s=new O.ao(t,"ambient")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.r=s
s=new O.ao(t,"diffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.x=s
s=new O.ao(t,"invDiffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.y=s
s=new O.fW(t,"specular")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
s.ch=100
t.z=s
s=new O.fS(t,"bump")
s.c=new A.Z(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ao(t,"reflect")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
t.cx=s
s=new O.fV(t,"refract")
s.c=new A.Z(!1,!1,!1)
s.f=new V.U(0,0,0)
s.ch=1
t.cy=s
s=new O.fR(t,"alpha")
s.c=new A.Z(!1,!1,!1)
s.f=1
t.db=s
s=new D.cY()
s.bq(D.a7)
s.e=H.c([],[D.f4])
s.f=H.c([],[D.ho])
s.r=H.c([],[D.bu])
s.y=s.x=null
s.cc(s.geC(),s.gfd(),s.gfh())
t.dx=s
u=new O.fU()
u.b=new V.al(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.N():u
s.n(0,t.gfv())
s=t.dx
u=s.y
s=u==null?s.y=D.N():u
s.n(0,t.ge6())
t.fr=null
return t},
d1:function d1(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(){},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
fR:function fR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d2:function d2(){},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fU:function fU(){var _=this
_.e=_.d=_.c=_.b=null},
fV:function fV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fW:function fW(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dn:function dn(){}},E={
ki:function(){var u,t=new E.ay()
t.a=""
t.b=!0
u=O.kf(E.ay)
t.y=u
u.b4(t.ghu(),t.ghx())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa7(0,null)
t.sb1(null)
t.saL(null)
return t},
nb:function(a,b){var u=new E.hu(a)
u.dX(a,b)
return u},
nh:function(a,b,c,d,e){var u,t,s=J.M(a)
if(!!s.$ibj)return E.lo(a,!0,!0,!0,!1)
u=W.ke()
t=u.style
t.width="100%"
t.height="100%"
s.gbO(a).n(0,u)
return E.lo(u,!0,!0,!0,!1)},
lo:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dq(),p=C.i.ca(a,"webgl2",P.mS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nb(p,a)
u=new T.i1(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dA(a)
t=new X.fA()
t.d=P.cZ(P.v)
u.b=t
t=new X.h8(u)
t.f=0
t.r=V.b4()
t.x=V.b4()
t.ch=t.Q=1
u.c=t
t=new X.fJ(u)
t.r=0
t.x=V.b4()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i7(u)
t.f=V.b4()
t.r=V.b4()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dl,P.a_]])
u.z=t
s=document
t.push(W.V(s,"contextmenu",u.geP(),!1))
u.z.push(W.V(a,"focus",u.geV(),!1))
u.z.push(W.V(a,"blur",u.geI(),!1))
u.z.push(W.V(s,"keyup",u.geZ(),!1))
u.z.push(W.V(s,"keydown",u.geX(),!1))
u.z.push(W.V(a,"mousedown",u.gf2(),!1))
u.z.push(W.V(a,"mouseup",u.gf6(),!1))
u.z.push(W.V(a,r,u.gf4(),!1))
t=u.z
W.kg(a)
W.kg(a)
t.push(W.V(a,W.kg(a),u.gf8(),!1))
u.z.push(W.V(s,r,u.geR(),!1))
u.z.push(W.V(s,"mouseup",u.geT(),!1))
u.z.push(W.V(s,"pointerlockchange",u.gfa(),!1))
u.z.push(W.V(a,"touchstart",u.gfn(),!1))
u.z.push(W.V(a,"touchend",u.gfj(),!1))
u.z.push(W.V(a,"touchmove",u.gfl(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a6(Date.now(),!1)
q.db=0
q.cF()
return q},
eO:function eO(){},
ay:function ay(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
dq:function dq(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i3:function i3(a){this.a=a}},Z={
kx:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bC(c)),35044)
a.bindBuffer(b,null)
return new Z.dD(b,u)},
ae:function(a){return new Z.bb(a)},
dD:function dD(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iQ:function iQ(a){this.a=a},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a){this.a=a}},D={
N:function(){var u=new D.bl()
u.d=0
return u},
eR:function eR(){},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
W:function W(){this.b=null},
bn:function bn(){this.b=null},
bo:function bo(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f4:function f4(){},
a7:function a7(){},
cY:function cY(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ho:function ho(){},
bu:function bu(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={cH:function cH(a,b){this.a=a
this.b=b},cX:function cX(a,b){this.a=a
this.b=b},fA:function fA(){this.d=this.b=this.a=null},d0:function d0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fJ:function fJ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},b0:function b0(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h8:function h8(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hp:function hp(){},du:function du(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i7:function i7(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dA:function dA(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mJ:function(a){var u=new X.fn(),t=new V.al(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ll
if(t==null){t=V.lk(0,0,1,1)
$.ll=t}u.r=t
return u},
kd:function kd(){},
fn:function fn(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(){}},V={
oQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b3(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.ab("null",c)
return C.a.ab(C.d.dG(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bH:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.ab(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
kM:function(a){return C.d.hU(Math.pow(2,C.R.bY(Math.log(H.om(a))/Math.log(2))))},
d4:function(){var u=$.lc
return u==null?$.lc=V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lb:function(a,b,c){return V.aD(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
la:function(a,b,c,d){return V.aD(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
l9:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aD(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
b4:function(){var u=$.lf
return u==null?$.lf=new V.a4(0,0):u},
lg:function(){var u=$.b5
return u==null?$.b5=new V.T(0,0,0):u},
lk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.de(a,b,c,d)},
cd:function(){var u=$.lA
return u==null?$.lA=new V.y(0,0,0):u},
nq:function(){var u=$.iB
return u==null?$.iB=new V.y(-1,0,0):u},
lB:function(){var u=$.iC
return u==null?$.iC=new V.y(0,1,0):u},
lC:function(){var u=$.iD
return u==null?$.iD=new V.y(0,0,1):u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a){this.a=a},
d3:function d3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aC:function aC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oK:function(a){P.ni(C.O,new V.k3(a))},
nd:function(a){var u=new V.hH()
u.e_(a,!0)
return u},
cI:function cI(){},
k3:function k3(a){this.a=a},
f2:function f2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fp:function fp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fq:function fq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hr:function hr(a){this.a=a
this.c=null},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(){this.b=this.a=null},
hJ:function hJ(a){this.a=a},
hI:function hI(a){this.a=a},
hK:function hK(a){this.a=a}},U={
l1:function(){var u=new U.eT()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cK:function(a){var u=new U.cJ()
u.a=a
return u},
kk:function(){var u=new U.bR()
u.bq(U.ah)
u.b4(u.ge2(),u.gff())
u.e=null
u.f=V.d4()
u.r=0
return u},
lw:function(a,b){var u,t,s,r=new U.dB(),q=U.l1()
q.sdK(0,!0)
q.sdg(6.283185307179586)
q.sdi(0)
q.sa0(0,0)
q.sdh(100)
q.sX(0)
q.scW(0.5)
r.b=q
u=r.gb6()
q.gw().n(0,u)
q=U.l1()
q.sdK(0,!0)
q.sdg(6.283185307179586)
q.sdi(0)
q.sa0(0,0)
q.sdh(100)
q.sX(0)
q.scW(0.5)
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
t=new X.bq(a,!1,!1)
s=r.d
r.d=t
q=new D.A("modifiers",s,t)
q.b=!0
r.W(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.A("invertX",q,!1)
q.b=!0
r.W(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.A("invertY",q,!1)
q.b=!0
r.W(q)}r.fV(b)
return r},
eT:function eT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){this.b=this.a=null},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
dB:function dB(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cP:function cP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mV:function(a,b){var u=a.aW,t=new A.fQ(b,u)
t.dZ(b,u)
t.dW(a,b)
return t},
mW:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.o)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.o)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.aQ()
if(k){u=$.aP()
g=new Z.bb(g.a|u.a)}if(j){u=$.aO()
g=new Z.bb(g.a|u.a)}if(i){u=$.aN()
g=new Z.bb(g.a|u.a)}return new A.fT(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
jF:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jG:function(a,b,c){var u
A.jF(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k7(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nW:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jF(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
nT:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jG(b,t,"ambient")
b.a+="\n"},
nU:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jG(b,t,"diffuse")
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
nX:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jG(b,t,"invDiffuse")
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
o2:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jG(b,t,"specular")
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
nZ:function(a,b){var u,t,s
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
o0:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jF(b,t,"reflect")
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
o1:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jF(b,t,"refract")
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
nV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k7(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ad()
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
r=[P.k]
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.b.k(m," + ")+");\n"}else c.a+="   highLight = "+C.b.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.k(o," + ")+");\n"
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
o_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k7(t)
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
if(typeof u!=="number")return u.ad()
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
c.a=r+"\n"}r=[P.k]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.k(l," * ")+";\n"
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
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.k(l," + ")+");\n"
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
o3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k7(t)
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
if(typeof u!=="number")return u.ad()
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
c.a=u+"\n"}u=[P.k]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.k(j," * ")+";\n"
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
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.k(j," + ")+");\n"
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
nY:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.k])
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
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
o4:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
A.nW(a,j)
A.nT(a,j)
A.nU(a,j)
A.nX(a,j)
A.o2(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o0(a,j)
A.o1(a,j)}A.nZ(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nV(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o_(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o3(a,q[o],j)
A.nY(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.k])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o5:function(a,b){var u,t,s
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
o7:function(a,b){var u
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
o6:function(a,b){var u
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
o9:function(a,b){var u,t
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
oa:function(a,b){var u,t
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
o8:function(a,b){var u
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
ob:function(a,b){var u
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
k7:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
ku:function(a,b,c,d,e){var u=new A.ie(a,c,e)
u.f=d
P.mT(d,0,P.v)
return u},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b){var _=this
_.i6=_.i5=_.cZ=_.cY=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.il=_.ik=_.ij=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.ii=_.ih=_.d5=_.ig=_.ie=_.d4=_.d3=_.ic=_.ib=_.d2=_.d1=_.ia=_.i9=_.d0=_.i8=_.i7=_.d_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cM:function cM(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aW=b3
_.cY=b4},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cb:function cb(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dg:function dg(){},
dw:function dw(){},
ik:function ik(a){this.a=a},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c},
by:function by(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kG:function(a,b,c,d){var u=F.ks()
F.cs(u,b,c,d,a,1,0,0,1)
F.cs(u,b,c,d,a,0,1,0,3)
F.cs(u,b,c,d,a,0,0,1,2)
F.cs(u,b,c,d,a,-1,0,0,0)
F.cs(u,b,c,d,a,0,-1,0,0)
F.cs(u,b,c,d,a,0,0,-1,3)
u.ap()
return u},
jA:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cs:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
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
j.d=i}m=F.jA(i)
l=F.jA(j.b)
k=F.kP(d,a0,new F.jz(j,F.jA(j.c),F.jA(j.d),l,m,c),b)
if(k!=null)a.aZ(k)},
lV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.ks()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.ba])
q=u.a
p=new V.y(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
r.push(q.fS(new V.b6(a,-1,-1,-1),new V.al(1,1,1,1),new V.T(0,0,c),new V.y(0,0,t),new V.a4(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.w(k)
j=new V.y(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dC(new V.b6(a,-1,-1,-1),null,new V.al(i,g,h,1),new V.T(m*k,l*k,c),new V.y(0,0,t),new V.a4(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.fQ(r)
return u},
kH:function(a,b,c,d,e){return F.oq(b,c,1,new F.jJ(a,e),d)},
oq:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kP(c,e,new F.jL(d),null)
if(u==null)return
u.ap()
u.bJ()
if(b)u.aZ(F.lV(3,!1,1,new F.jM(d),e))
if(a)u.aZ(F.lV(1,!0,-1,new F.jN(d),e))
return u},
oL:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.k4()
t=F.kG(a,null,new F.k5(s,1),b)
t.bJ()
return t},
m4:function(){return F.lU(15,30,0.5,1,new F.k8())},
oE:function(){return F.lU(12,120,0.3,1,new F.jV(3,2))},
lU:function(a,b,c,d,e){var u=F.kP(a,b,new F.jK(e,d,b,c),null)
if(u==null)return
u.ap()
u.bJ()
return u},
kP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.ks()
t=H.c([],[F.ba])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dC(g,g,new V.al(p,0,0,1),g,g,new V.a4(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bQ(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dC(g,g,new V.al(j,i,h,1),g,g,new V.a4(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bQ(d))}}u.d.fR(a+1,b+1,t)
return u},
bP:function(a,b,c){var u=new F.aV(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bH(a)
u.bI(b)
u.fD(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
mP:function(a,b){var u=new F.bV(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bH(a)
u.bI(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
ks:function(){var u=new F.hD(),t=new F.iE(u)
t.b=!1
t.c=H.c([],[F.ba])
u.a=t
t=new F.hG(u)
t.b=H.c([],[F.c1])
u.b=t
t=new F.hF(u)
t.b=H.c([],[F.bV])
u.c=t
t=new F.hE(u)
t.b=H.c([],[F.aV])
u.d=t
u.e=null
return u},
dC:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ba(),r=new F.iM()
r.b=H.c([],[F.c1])
s.b=r
r=new F.iI()
u=[F.bV]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iF()
u=[F.aV]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mi()
s.e=0
r=$.aQ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aP().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.be().a)!==0?f:t
s.z=(u&$.bf().a)!==0?g:t
s.Q=(u&$.mj().a)!==0?c:t
s.ch=(u&$.bJ().a)!==0?i:0
s.cx=(u&$.aN().a)!==0?a:t
return s},
jz:function jz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jJ:function jJ(a,b){this.a=a
this.b=b},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
k4:function k4(){},
k5:function k5(a,b){this.a=a
this.b=b},
k8:function k8(){},
jV:function jV(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fg:function fg(){},
hL:function hL(){},
bV:function bV(){this.b=this.a=null},
fC:function fC(){},
id:function id(){},
c1:function c1(){this.a=null},
hD:function hD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){this.a=a
this.b=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
ba:function ba(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iO:function iO(a){this.a=a},
iN:function iN(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(){this.d=this.c=this.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){this.c=this.b=null},
iK:function iK(){},
iJ:function iJ(){},
iL:function iL(){},
hg:function hg(){},
iM:function iM(){this.b=null}},L={
m_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.nd("Test 025"),a=W.ke()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.k]
b.cQ(H.c(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.fO(H.c(["shapes"],u))
b.cQ(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nh(t,!0,!0,!0,!1)
r=U.kk()
r.n(0,U.cK(V.lb(0,0,-2.5)))
r.n(0,U.lw(!0,s.x))
q=new V.U(1,1,1)
p=s.f.hr("../resources/Test.png")
o=new D.bu()
o.r=new V.U(1,1,1)
o.ch=1.0471975511965976
o.cx=1
o.dx=o.cy=1.5707963267948966
o.db=!0
o.dy=1
o.fx=o.fr=0
o.fy=!0
o.a=V.lg()
o.b=V.lC()
o.c=V.lB()
o.d=V.nq()
n=o.f
o.f=r
r.gw().n(0,o.gbB())
m=new D.A("mover",n,o.f)
m.b=!0
o.Y(m)
if(!o.r.p(0,q)){n=o.r
o.r=q
m=new D.A("color",n,q)
m.b=!0
o.Y(m)}m=o.x
if(m!==p){if(m!=null)m.gw().K(0,o.gbB())
n=o.x
o.x=p
p.gw().n(0,o.gbB())
p=new D.A("texture",n,o.x)
p.b=!0
o.Y(p)}p=o.ch
if(!(Math.abs(p-0.5)<$.z().a)){o.ch=0.5
m=1/(Math.sqrt(2)*Math.tan(o.ch))
o.z=m
o.Q=m*o.cx
p=new D.A("fov",p,o.ch)
p.b=!0
o.Y(p)}p=o.cx
if(!(Math.abs(p-1)<$.z().a)){o.cx=1
m=o.z
if(typeof m!=="number")return m.B()
o.Q=m
p=new D.A("ratio",p,1)
p.b=!0
o.Y(p)}p=o.cy
if(!(Math.abs(p-1.5707963267948966)<$.z().a)){o.cy=1.5707963267948966
p=new D.A("cutoff",p,1.5707963267948966)
p.b=!0
o.Y(p)}p=o.dx
if(!(Math.abs(p-1.5707963267948966)<$.z().a)){o.dx=1.5707963267948966
p=new D.A("coneAngle",p,1.5707963267948966)
p.b=!0
o.Y(p)}p=$.lD
if(p==null){p=new V.ce(1,0.00390625,0.0000152587890625,0)
$.lD=p
l=p}else l=p
if(!J.C(o.e,l)){n=o.e
o.e=l
p=new D.A("shadowAdjust",n,l)
p.b=!0
o.Y(p)}p=o.dy
if(!(Math.abs(p-0.5)<$.z().a)){o.dy=0.5
p=new D.A("attenuation0",p,0.5)
p.b=!0
o.Y(p)}p=o.fr
if(!(Math.abs(p-0.05)<$.z().a)){o.fr=0.05
p=new D.A("attenuation1",p,0.05)
p.b=!0
o.Y(p)}p=o.fx
if(!(Math.abs(p-0.05)<$.z().a)){o.fx=0.05
p=new D.A("attenuation2",p,0.05)
p.b=!0
o.Y(p)}k=O.l8()
k.dx.n(0,o)
p=k.r
p.saJ(0,new V.U(0.05,0.05,0.05))
p=k.x
p.saJ(0,new V.U(0.7,0.7,0.7))
p=k.z
p.saJ(0,new V.U(0.3,0.3,0.3))
p=k.z
p.cH(new A.Z(!0,!1,!1))
p.cI(100)
j=E.ki()
j.sa7(0,F.m4())
i=E.ki()
i.saL(U.cK(V.la(3,3,3,1)))
p=F.kG(1,c,c,1)
p.bX()
i.sa7(0,p)
h=U.kk()
h.n(0,U.lw(!1,s.x))
h.n(0,U.cK(V.l9(3.141592653589793)))
h.n(0,U.cK(V.lb(0,0,5)))
g=E.ki()
p=U.kk()
p.n(0,U.cK(V.la(0.1,0.1,0.1,1)))
p.n(0,r)
g.saL(p)
g.sa7(0,F.kH(0,!1,!0,40,1))
p=O.l8()
m=p.f
m.saJ(0,new V.U(1,1,1))
g.sb1(p)
p=new M.cP()
p.a=!0
m=O.kf(E.ay)
p.e=m
m.b4(p.geL(),p.geN())
p.y=p.x=p.r=p.f=null
f=X.mJ(c)
e=new X.db()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saL(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.z().a)){e.c=1.0471975511965976
m=new D.A("fov",m,1.0471975511965976)
m.b=!0
e.aE(m)}m=e.d
if(!(Math.abs(m-0.1)<$.z().a)){e.d=0.1
m=new D.A("near",m,0.1)
m.b=!0
e.aE(m)}m=e.e
if(!(Math.abs(m-2000)<$.z().a)){e.e=2000
m=new D.A("far",m,2000)
m.b=!0
e.aE(m)}m=p.b
if(m!==e){if(m!=null)m.gw().K(0,p.gal())
n=p.b
p.b=e
e.gw().n(0,p.gal())
m=new D.A("camera",n,p.b)
m.b=!0
p.at(m)}m=p.c
if(m!==f){if(m!=null)m.gw().K(0,p.gal())
n=p.c
p.c=f
f.gw().n(0,p.gal())
m=new D.A("target",n,p.c)
m.b=!0
p.at(m)}p.sb1(c)
p.sb1(k)
p.e.n(0,j)
p.e.n(0,i)
p.e.n(0,g)
p.b.saL(h)
m=s.d
if(m!==p){if(m!=null)m.gw().K(0,s.gcj())
s.d=p
p.gw().n(0,s.gcj())
s.ck()}p=new V.hr("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
p.aT(0,"Cube",new L.jW(j))
p.aT(0,"Cylinder",new L.jX(j))
p.aT(0,"Cone",new L.jY(j))
p.aT(0,"Sphere",new L.jZ(j))
p.cO(0,"Toroid",new L.k_(j),!0)
p.aT(0,"Knot",new L.k0(j))
u=s.Q
if(u==null)u=s.Q=D.N()
p=u.b
u=p==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):p
u.push(new L.k1(b,k))
V.oK(s)},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ko.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.c2(a)},
h:function(a){return"Instance of '"+H.e(H.c3(a))+"'"}}
J.fx.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iau:1}
J.cV.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cW.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.hl.prototype={}
J.bz.prototype={}
J.aY.prototype={
h:function(a){var u=a[$.m6()]
if(u==null)return this.dT(a)
return"JavaScript function for "+H.e(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aW.prototype={
dB:function(a,b){if(!!a.fixed$length)H.t(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dd(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aw(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hp:function(a){return this.k(a,"")},
hh:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aw(a))}return u},
hi:function(a,b,c){return this.hh(a,b,c,null)},
hg:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aw(a))}throw H.d(H.fv())},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dP:function(a,b,c){if(b<0||b>a.length)throw H.d(P.X(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.X(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cy(a,0)])
return H.c(a.slice(b,c),[H.cy(a,0)])},
ghf:function(a){if(a.length>0)return a[0]
throw H.d(H.fv())},
gaq:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fv())},
cR:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aw(a))}return!1},
bo:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.dh(a,0,a.length-1,b)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
h:function(a){return P.kl(a,"[","]")},
gT:function(a){return new J.a2(a,a.length)},
gG:function(a){return H.c2(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.x("set length"))
if(b<0)throw H.d(P.X(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bG(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bG(a,b))
a[b]=c},
$ii:1,
$in:1}
J.kn.prototype={}
J.a2.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bU.prototype={
h0:function(a,b){var u
if(typeof b!=="number")throw H.d(H.aj(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbe(b)
if(this.gbe(a)===u)return 0
if(this.gbe(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbe:function(a){return a===0?1/a<0:a<0},
hU:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.x(""+a+".toInt()"))},
bY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
dG:function(a,b){var u
if(b>20)throw H.d(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbe(a))return"-"+u
return u},
b2:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.B("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b3:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cK(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.cK(a,b)},
cK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.cJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fH:function(a,b){if(b<0)throw H.d(H.aj(b))
return this.cJ(a,b)},
cJ:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia9:1}
J.cU.prototype={$iv:1}
J.cT.prototype={}
J.aX.prototype={
U:function(a,b){if(b<0)throw H.d(H.bG(a,b))
if(b>=a.length)H.t(H.bG(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.bG(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.d(P.kX(b,null,null))
return a+b},
aN:function(a,b,c,d){var u,t
c=P.b7(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a4(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aj(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.dd(b,null))
if(b>c)throw H.d(P.dd(b,null))
if(c>a.length)throw H.d(P.dd(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
hX:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ab:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bd:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dd:function(a,b){return this.bd(a,b,0)},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.l.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.U(this.a,b)},
$aq:function(){return[P.v]},
$ai:function(){return[P.v]},
$an:function(){return[P.v]}}
H.fa.prototype={}
H.d_.prototype={
gT:function(a){return new H.bW(this,this.gl(this))},
bm:function(a,b){return this.dS(0,b)}}
H.bW.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.cv(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aw(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.fN.prototype={
gT:function(a){return new H.fO(J.aR(this.a),this.b)},
gl:function(a){return J.ab(this.a)},
H:function(a,b){return this.b.$1(J.eD(this.a,b))},
$ai:function(a,b){return[b]}}
H.fO.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gI(t))
return!0}u.a=null
return!1},
gI:function(a){return this.a}}
H.fP.prototype={
gl:function(a){return J.ab(this.a)},
H:function(a,b){return this.b.$1(J.eD(this.a,b))},
$ad_:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cf.prototype={
gT:function(a){return new H.iR(J.aR(this.a),this.b)}}
H.iR.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.cQ.prototype={}
H.iq.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dy.prototype={}
H.eV.prototype={
h:function(a){return P.kr(this)},
m:function(a,b,c){return H.mE()},
$iP:1}
H.eW.prototype={
gl:function(a){return this.a},
bb:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bb(0,b))return
return this.cw(b)},
cw:function(a){return this.b[a]},
F:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cw(s))}}}
H.ib.prototype={
aa:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hh.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fz.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.ip.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k9.prototype={
$1:function(a){if(!!J.M(a).$ibk)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eb.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bM.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hX.prototype={}
H.hP.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eC(u)+"'"}}
H.bK.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bK))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.cC(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c3(u))+"'")}}
H.eQ.prototype={
h:function(a){return this.a}}
H.hA.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.L.prototype={
gl:function(a){return this.a},
gho:function(a){return this.a===0},
ga3:function(a){return new H.fE(this,[H.cy(this,0)])},
bb:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ct(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ct(t,b)}else return s.hl(b)},
hl:function(a){var u=this,t=u.d
if(t==null)return!1
return u.c0(u.bx(t,u.c_(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.hm(b)},
hm:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bx(r,s.c_(a))
t=s.c0(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cn(u==null?s.b=s.bz():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cn(t==null?s.c=s.bz():t,b,c)}else s.hn(b,c)},
hn:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bz()
u=r.c_(a)
t=r.bx(q,u)
if(t==null)r.bF(q,u,[r.bA(a,b)])
else{s=r.c0(t,a)
if(s>=0)t[s].b=b
else t.push(r.bA(a,b))}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aw(u))
t=t.c}},
cn:function(a,b,c){var u=this.b7(a,b)
if(u==null)this.bF(a,b,this.bA(b,c))
else u.b=c},
eu:function(){this.r=this.r+1&67108863},
bA:function(a,b){var u,t=this,s=new H.fD(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eu()
return s},
c_:function(a){return J.cC(a)&0x3ffffff},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
h:function(a){return P.kr(this)},
b7:function(a,b){return a[b]},
bx:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
em:function(a,b){delete a[b]},
ct:function(a,b){return this.b7(a,b)!=null},
bz:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bF(t,u,t)
this.em(t,u)
return t}}
H.fD.prototype={}
H.fE.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fF(u,u.r)
t.c=u.e
return t}}
H.fF.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aw(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jR.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jS.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jT.prototype={
$1:function(a){return this.a(a)}}
H.fy.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$in9:1}
H.bZ.prototype={$ibZ:1}
H.b1.prototype={$ib1:1}
H.d5.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.c_.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]},
m:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$aq:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]},
$in:1,
$an:function(){return[P.K]}}
H.d6.prototype={
m:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$aq:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
H.h9.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.ha.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.hb.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.hc.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.hd.prototype={
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.d7.prototype={
gl:function(a){return a.length},
i:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.c0.prototype={
gl:function(a){return a.length},
i:function(a,b){H.at(b,a,a.length)
return a[b]},
$ic0:1,
$ibw:1}
H.cj.prototype={}
H.ck.prototype={}
H.cl.prototype={}
H.cm.prototype={}
P.iT.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iS.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iU.prototype={
$0:function(){this.a.$0()}}
P.iV.prototype={
$0:function(){this.a.$0()}}
P.eh.prototype={
e8:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bF(new P.jp(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
e9:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bF(new P.jo(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$idr:1}
P.jp.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jo.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dV(u,q)}s.c=r
t.d.$1(s)}}
P.dE.prototype={}
P.dl.prototype={}
P.hS.prototype={}
P.dr.prototype={}
P.jy.prototype={}
P.jH.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.da():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.j8.prototype={
hQ:function(a){var u,t,s,r=null
try{if(C.f===$.ai){a.$0()
return}P.od(r,r,this,a)}catch(s){u=H.aa(s)
t=H.kJ(s)
P.lO(r,r,this,u,t)}},
hR:function(a,b){var u,t,s,r=null
try{if(C.f===$.ai){a.$1(b)
return}P.oe(r,r,this,a,b)}catch(s){u=H.aa(s)
t=H.kJ(s)
P.lO(r,r,this,u,t)}},
hS:function(a,b){return this.hR(a,b,null)},
fX:function(a){return new P.j9(this,a)},
cT:function(a,b){return new P.ja(this,a,b)}}
P.j9.prototype={
$0:function(){return this.a.hQ(this.b)}}
P.ja.prototype={
$1:function(a){return this.a.hS(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j5.prototype={
gT:function(a){var u=new P.dT(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ei(b)
return t}},
ei:function(a){var u=this.d
if(u==null)return!1
return this.bv(this.cz(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cp(u==null?s.b=P.ky():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cp(t==null?s.c=P.ky():t,b)}else return s.eb(0,b)},
eb:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ky()
u=s.cr(b)
t=r[u]
if(t==null)r[u]=[s.bs(b)]
else{if(s.bv(t,b)>=0)return!1
t.push(s.bs(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fq(this.c,b)
else return this.fp(0,b)},
fp:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cz(r,b)
t=s.bv(u,b)
if(t<0)return!1
s.cL(u.splice(t,1)[0])
return!0},
cp:function(a,b){if(a[b]!=null)return!1
a[b]=this.bs(b)
return!0},
fq:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cL(u)
delete a[b]
return!0},
cq:function(){this.r=1073741823&this.r+1},
bs:function(a){var u,t=this,s=new P.j6(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cq()
return s},
cL:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cq()},
cr:function(a){return J.cC(a)&1073741823},
cz:function(a,b){return a[this.cr(b)]},
bv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.j6.prototype={}
P.dT.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aw(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fG.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fH.prototype={$ii:1,$in:1}
P.q.prototype={
gT:function(a){return new H.bW(a,this.gl(a))},
H:function(a,b){return this.i(a,b)},
hW:function(a,b){var u,t,s=this,r=H.c([],[H.ow(s,a,"q",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hV:function(a){return this.hW(a,!0)},
hd:function(a,b,c,d){var u
P.b7(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.kl(a,"[","]")}}
P.fK.prototype={}
P.fL.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aB.prototype={
F:function(a,b){var u,t
for(u=J.aR(this.ga3(a));u.v();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ab(this.ga3(a))},
h:function(a){return P.kr(a)},
$iP:1}
P.jq.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fM.prototype={
i:function(a,b){return J.cB(this.a,b)},
m:function(a,b,c){J.ka(this.a,b,c)},
F:function(a,b){J.kT(this.a,b)},
gl:function(a){return J.ab(this.a)},
h:function(a){return J.a1(this.a)},
$iP:1}
P.dz.prototype={}
P.jc.prototype={
an:function(a,b){var u
for(u=J.aR(b);u.v();)this.n(0,u.gI(u))},
h:function(a){return P.kl(this,"{","}")},
H:function(a,b){var u,t,s
P.lj(b,"index")
for(u=P.ny(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
$ii:1}
P.dU.prototype={}
P.en.prototype={}
P.eM.prototype={
ht:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b7(a0,a1,b.length)
u=$.ml()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jQ(C.a.C(b,n))
j=H.jQ(C.a.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.Q("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.bs(m)
s=n
continue}}throw H.d(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kY(b,p,a1,q,o,f)
else{e=C.c.b3(f-1,4)+1
if(e===1)throw H.d(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aN(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kY(b,p,a1,q,o,d)
else{e=C.c.b3(d,4)
if(e===1)throw H.d(P.O(c,b,a1))
if(e>1)b=C.a.aN(b,a1,a1,e===2?"==":"=")}return b}}
P.eN.prototype={}
P.eS.prototype={}
P.eX.prototype={}
P.fc.prototype={}
P.ft.prototype={
h:function(a){return this.a}}
P.fs.prototype={
ej:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.b(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.Q("")
if(r>b)q.a+=C.a.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mw(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iy.prototype={
ghc:function(){return C.M}}
P.iA.prototype={
bP:function(a){var u,t,s=P.b7(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jw(u)
if(t.eo(a,0,s)!==s)t.cN(J.ms(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nP(0,t.b,u.length)))}}
P.jw.prototype={
cN:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eo:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cN(r,C.a.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iz.prototype={
bP:function(a){var u,t,s,r,q,p,o,n,m=P.nl(!1,a,0,null)
if(m!=null)return m
u=P.b7(0,null,J.ab(a))
t=P.lQ(a,0,u)
if(t>0){s=P.c6(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.jv(!1,r)
o.c=p
o.h1(a,q,u)
if(o.e>0){H.t(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bs(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jv.prototype={
h1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cv(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ad()
if((r&192)!==128){q=P.O(k+C.c.b2(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.O("Overlong encoding of 0x"+C.c.b2(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.b2(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bs(j)
l.c=!1}for(q=s<c;q;){p=P.lQ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c6(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.b2(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.b2(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.au.prototype={}
P.a6.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.c.aH(u,30))&1073741823},
h:function(a){var u=this,t=P.mF(H.n5(u)),s=P.cL(H.n3(u)),r=P.cL(H.n_(u)),q=P.cL(H.n0(u)),p=P.cL(H.n2(u)),o=P.cL(H.n4(u)),n=P.mG(H.n1(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.aU.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
h:function(a){var u,t,s,r=new P.f9(),q=this.a
if(q<0)return"-"+new P.aU(0-q).h(0)
u=r.$1(C.c.a5(q,6e7)%60)
t=r.$1(C.c.a5(q,1e6)%60)
s=new P.f8().$1(q%1e6)
return""+C.c.a5(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bk.prototype={}
P.da.prototype={
h:function(a){return"Throw of null."}}
P.af.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbu()+o+u
if(!q.a)return t
s=q.gbt()
r=P.kj(q.b)
return t+s+": "+r}}
P.bt.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fu.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.ir.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.im.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c5.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eU.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kj(u)+"."}}
P.hk.prototype={
h:function(a){return"Out of Memory"},
$ibk:1}
P.dj.prototype={
h:function(a){return"Stack Overflow"},
$ibk:1}
P.f1.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dM.prototype={
h:function(a){return"Exception: "+this.a}}
P.fm.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.C(f,q)
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
P.fo.prototype={}
P.v.prototype={}
P.i.prototype={
bm:function(a,b){return new H.cf(this,b,[H.kI(this,"i",0)])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gaC:function(a){var u,t=this.gT(this)
if(!t.v())throw H.d(H.fv())
u=t.gI(t)
if(t.v())throw H.d(H.mM())
return u},
H:function(a,b){var u,t,s
P.lj(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.d(P.H(b,this,"index",null,t))},
h:function(a){return P.mL(this,"(",")")}}
P.fw.prototype={}
P.n.prototype={$ii:1}
P.P.prototype={}
P.b2.prototype={
gG:function(a){return P.a_.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.a9.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
p:function(a,b){return this===b},
gG:function(a){return H.c2(this)},
h:function(a){return"Instance of '"+H.e(H.c3(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.Q.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iw.prototype={
$2:function(a,b){var u,t,s,r=J.cw(b).dd(b,"=")
if(r===-1){if(b!=="")J.ka(a,P.kC(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.ka(a,P.kC(u,0,u.length,s,!0),P.kC(t,0,t.length,s,!0))}return a}}
P.it.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.iu.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iv.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eB(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bA.prototype={
gdJ:function(){return this.b},
gbZ:function(a){var u=this.c
if(u==null)return""
if(C.a.a2(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbh:function(a){var u=this.d
if(u==null)return P.lH(this.a)
return u},
gc4:function(a){var u=this.f
return u==null?"":u},
gd7:function(){var u=this.r
return u==null?"":u},
dC:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a2(u,"/"))u="/"+u
s=P.kA(null,0,0,b)
return new P.bA(q,o,m,n,u,s,r.r)},
gc5:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dz(P.lv(t==null?"":t),[u,u])
t=u}return t},
gd8:function(){return this.c!=null},
gdc:function(){return this.f!=null},
gd9:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
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
if(!!J.M(b).$ikv)if(s.a==b.gbn())if(s.c!=null===b.gd8())if(s.b==b.gdJ())if(s.gbZ(s)==b.gbZ(b))if(s.gbh(s)==b.gbh(b))if(s.e===b.gdv(b)){u=s.f
t=u==null
if(!t===b.gdc()){if(t)u=""
if(u===b.gc4(b)){u=s.r
t=u==null
if(!t===b.gd9()){if(t)u=""
u=u===b.gd7()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.h(0)):u},
$ikv:1,
gbn:function(){return this.a},
gdv:function(a){return this.e}}
P.jr.prototype={
$1:function(a){throw H.d(P.O("Invalid port",this.a,this.b+1))}}
P.js.prototype={
$1:function(a){return P.eo(C.W,a,C.e,!1)}}
P.ju.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eo(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eo(C.h,b,C.e,!0))}}}
P.jt.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aR(b),t=this.a;u.v();)t.$2(a,u.gI(u))}}
P.is.prototype={
gdI:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bd(u,"?",o)
s=u.length
if(t>=0){r=P.cr(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iZ("data",p,p,p,P.cr(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jC.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jB.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mt(u,0,96,b)
return u},
$S:17}
P.jD.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.C(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.C(b,0),t=C.a.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jf.prototype={
gd8:function(){return this.c>0},
gda:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gdc:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gd9:function(){return this.r<this.a.length},
gcA:function(){return this.b===4&&C.a.a2(this.a,"http")},
gcB:function(){return this.b===5&&C.a.a2(this.a,"https")},
gbn:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcA())q=t.x="http"
else if(t.gcB()){t.x="https"
q="https"}else if(q===4&&C.a.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a2(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdJ:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gbZ:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbh:function(a){var u,t=this
if(t.gda()){u=t.d
if(typeof u!=="number")return u.A()
return P.eB(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcA())return 80
if(t.gcB())return 443
return 0},
gdv:function(a){return C.a.q(this.a,this.e,this.f)},
gc4:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.q(this.a,u+1,t):""},
gd7:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gc5:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.X
t=P.k
return new P.dz(P.lv(u.gc4(u)),[t,t])},
dC:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbn(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gda()?p.gbh(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a2(t,"/"))t="/"+t
r=P.kA(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bA(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.M(b).$ikv&&this.a===b.h(0)},
h:function(a){return this.a},
$ikv:1}
P.iZ.prototype={}
W.m.prototype={}
W.eE.prototype={
gl:function(a){return a.length}}
W.eF.prototype={
h:function(a){return String(a)}}
W.eG.prototype={
h:function(a){return String(a)}}
W.bh.prototype={$ibh:1}
W.bi.prototype={$ibi:1}
W.bj.prototype={
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.on(c))
return a.getContext(b)},
dM:function(a,b){return this.ca(a,b,null)},
$ibj:1}
W.aS.prototype={
gl:function(a){return a.length}}
W.eY.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bN.prototype={
gl:function(a){return a.length}}
W.eZ.prototype={}
W.ac.prototype={}
W.am.prototype={}
W.f_.prototype={
gl:function(a){return a.length}}
W.f0.prototype={
gl:function(a){return a.length}}
W.f3.prototype={
gl:function(a){return a.length}}
W.ag.prototype={$iag:1}
W.f5.prototype={
h:function(a){return String(a)}}
W.cN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.a8,P.a9]]},
$aq:function(){return[[P.a8,P.a9]]},
$ii:1,
$ai:function(){return[[P.a8,P.a9]]},
$in:1,
$an:function(){return[[P.a8,P.a9]]}}
W.cO.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaB(a))+" x "+H.e(this.gay(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.M(b)
if(!u.$ia8)return!1
return a.left===u.gbf(b)&&a.top===u.gbj(b)&&this.gaB(a)===u.gaB(b)&&this.gay(a)===u.gay(b)},
gG:function(a){return W.lF(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaB(a)),C.d.gG(this.gay(a)))},
gcU:function(a){return a.bottom},
gay:function(a){return a.height},
gbf:function(a){return a.left},
gc8:function(a){return a.right},
gbj:function(a){return a.top},
gaB:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.a9]}}
W.f6.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.k]},
$aq:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
W.f7.prototype={
gl:function(a){return a.length}}
W.iX.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.hV(this)
return new J.a2(u,u.length)},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
W.S.prototype={
gfW:function(a){return new W.j_(a)},
gbO:function(a){return new W.iX(a,a.children)},
gcV:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.a9])},
h:function(a){return a.localName},
a9:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l4
if(u==null){u=H.c([],[W.aF])
t=new W.d9(u)
u.push(W.lE(null))
u.push(W.lG())
$.l4=t
d=t}else d=u
u=$.l3
if(u==null){u=new W.ep(d)
$.l3=u
c=u}else{u.a=d
c=u}}if($.ax==null){u=document
t=u.implementation.createHTMLDocument("")
$.ax=t
$.kh=t.createRange()
s=$.ax.createElement("base")
s.href=u.baseURI
$.ax.head.appendChild(s)}u=$.ax
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ax
if(!!this.$ibi)r=u.body
else{r=u.createElement(a.tagName)
$.ax.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.S(C.U,a.tagName)){$.kh.selectNodeContents(r)
q=$.kh.createContextualFragment(b)}else{r.innerHTML=b
q=$.ax.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ax.body
if(r==null?u!=null:r!==u)J.kV(r)
c.cb(q)
document.adoptNode(q)
return q},
h4:function(a,b,c){return this.a9(a,b,c,null)},
dO:function(a,b){a.textContent=null
a.appendChild(this.a9(a,b,null,null))},
$iS:1,
gdE:function(a){return a.tagName}}
W.fb.prototype={
$1:function(a){return!!J.M(a).$iS}}
W.h.prototype={$ih:1}
W.f.prototype={
fP:function(a,b,c,d){if(c!=null)this.ec(a,b,c,!1)},
ec:function(a,b,c,d){return a.addEventListener(b,H.bF(c,1),!1)}}
W.an.prototype={$ian:1}
W.bQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.an]},
$aq:function(){return[W.an]},
$ii:1,
$ai:function(){return[W.an]},
$in:1,
$an:function(){return[W.an]},
$ibQ:1}
W.fh.prototype={
gl:function(a){return a.length}}
W.fl.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.fr.prototype={
gl:function(a){return a.length}}
W.bS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aA.prototype={$iaA:1,
gcX:function(a){return a.data}}
W.bT.prototype={$ibT:1}
W.bp.prototype={$ibp:1}
W.fI.prototype={
h:function(a){return String(a)}}
W.h2.prototype={
gl:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.h3.prototype={
i:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.h4(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.h4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h5.prototype={
i:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.h6(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.h6.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.h7.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aE]},
$aq:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$in:1,
$an:function(){return[W.aE]}}
W.ap.prototype={$iap:1}
W.a0.prototype={
gaC:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.lm("No elements"))
if(t>1)throw H.d(P.lm("More than one element"))
return u.firstChild},
an:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.cR(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$aq:function(){return[W.E]},
$ai:function(){return[W.E]},
$an:function(){return[W.E]}}
W.E.prototype={
hK:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hO:function(a,b){var u,t
try{u=a.parentNode
J.mq(u,b,a)}catch(t){H.aa(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dR(a):u},
ft:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.aG.prototype={$iaG:1,
gl:function(a){return a.length}}
W.hn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$in:1,
$an:function(){return[W.aG]}}
W.hy.prototype={
i:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.hz(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hB.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.hM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$in:1,
$an:function(){return[W.aH]}}
W.aI.prototype={$iaI:1}
W.hN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aI]},
$aq:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$in:1,
$an:function(){return[W.aI]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.hQ.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new W.hR(u))
return u},
gl:function(a){return a.length},
$iP:1,
$aP:function(){return[P.k,P.k]}}
W.hR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.dm.prototype={
a9:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bp(a,b,c,d)
u=W.mH("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a0(t).an(0,new W.a0(u))
return t}}
W.hU.prototype={
a9:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bp(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.gaC(u)
s.toString
u=new W.a0(s)
r=u.gaC(u)
t.toString
r.toString
new W.a0(t).an(0,new W.a0(r))
return t}}
W.hV.prototype={
a9:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bp(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.a0(u)
s=u.gaC(u)
t.toString
s.toString
new W.a0(t).an(0,new W.a0(s))
return t}}
W.c7.prototype={$ic7:1}
W.aK.prototype={$iaK:1}
W.ar.prototype={$iar:1}
W.hY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.ar]},
$aq:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$in:1,
$an:function(){return[W.ar]}}
W.hZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$aq:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$in:1,
$an:function(){return[W.aK]}}
W.i4.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.bv.prototype={$ibv:1}
W.i8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aL]},
$aq:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$in:1,
$an:function(){return[W.aL]}}
W.i9.prototype={
gl:function(a){return a.length}}
W.b9.prototype={}
W.ix.prototype={
h:function(a){return String(a)}}
W.iP.prototype={
gl:function(a){return a.length}}
W.bc.prototype={
gh7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
gh6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibc:1}
W.cg.prototype={
fu:function(a,b){return a.requestAnimationFrame(H.bF(b,1))},
en:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.F]},
$aq:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$in:1,
$an:function(){return[W.F]}}
W.dH.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.M(b)
if(!u.$ia8)return!1
return a.left===u.gbf(b)&&a.top===u.gbj(b)&&a.width===u.gaB(b)&&a.height===u.gay(b)},
gG:function(a){return W.lF(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gay:function(a){return a.height},
gaB:function(a){return a.width}}
W.j2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.az]},
$aq:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$in:1,
$an:function(){return[W.az]}}
W.dZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$aq:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]}}
W.jg.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aJ]},
$aq:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]}}
W.jk.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aq]},
$aq:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]},
$in:1,
$an:function(){return[W.aq]}}
W.iW.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aP:function(){return[P.k,P.k]}}
W.j_.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.j0.prototype={}
W.j1.prototype={
$1:function(a){return this.a.$1(a)}}
W.ch.prototype={
e0:function(a){var u
if($.ci.gho($.ci)){for(u=0;u<262;++u)$.ci.m(0,C.T[u],W.oy())
for(u=0;u<12;++u)$.ci.m(0,C.p[u],W.oz())}},
aI:function(a){return $.mm().S(0,W.bO(a))},
ao:function(a,b,c){var u=$.ci.i(0,H.e(W.bO(a))+"::"+b)
if(u==null)u=$.ci.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaF:1}
W.G.prototype={
gT:function(a){return new W.cR(a,this.gl(a))}}
W.d9.prototype={
aI:function(a){return C.b.cR(this.a,new W.hf(a))},
ao:function(a,b,c){return C.b.cR(this.a,new W.he(a,b,c))},
$iaF:1}
W.hf.prototype={
$1:function(a){return a.aI(this.a)}}
W.he.prototype={
$1:function(a){return a.ao(this.a,this.b,this.c)}}
W.e6.prototype={
e5:function(a,b,c,d){var u,t,s
this.a.an(0,c)
u=b.bm(0,new W.jd())
t=b.bm(0,new W.je())
this.b.an(0,u)
s=this.c
s.an(0,C.w)
s.an(0,t)},
aI:function(a){return this.a.S(0,W.bO(a))},
ao:function(a,b,c){var u=this,t=W.bO(a),s=u.c
if(s.S(0,H.e(t)+"::"+b))return u.d.fT(c)
else if(s.S(0,"*::"+b))return u.d.fT(c)
else{s=u.b
if(s.S(0,H.e(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.e(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaF:1}
W.jd.prototype={
$1:function(a){return!C.b.S(C.p,a)}}
W.je.prototype={
$1:function(a){return C.b.S(C.p,a)}}
W.jm.prototype={
ao:function(a,b,c){if(this.dU(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.jn.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jl.prototype={
aI:function(a){var u=J.M(a)
if(!!u.$ic4)return!1
u=!!u.$ij
if(u&&W.bO(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.aI(a)},
$iaF:1}
W.cR.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cB(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gI:function(a){return this.d}}
W.aF.prototype={}
W.jb.prototype={}
W.ep.prototype={
cb:function(a){new W.jx(this).$2(a,null)},
aS:function(a,b){if(b==null)J.kV(a)
else b.removeChild(a)},
fB:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mu(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aa(r)}t="element unprintable"
try{t=J.a1(a)}catch(r){H.aa(r)}try{s=W.bO(a)
this.fA(a,b,p,t,s,o,n)}catch(r){if(H.aa(r) instanceof P.af)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aI(a)){p.aS(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ao(a,"is",g)){p.aS(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.c(u.slice(0),[H.cy(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.ao(a,J.mx(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.M(a).$ic7)p.cb(a.content)}}
W.jx.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fB(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aa(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.cp.prototype={}
W.cq.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
P.jh.prototype={
d6:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
c9:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.M(a)
if(!!u.$ia6)return new Date(a.a)
if(!!u.$in9)throw H.d(P.io("structured clone of RegExp"))
if(!!u.$ian)return a
if(!!u.$ibh)return a
if(!!u.$ibQ)return a
if(!!u.$iaA)return a
if(!!u.$ibZ||!!u.$ib1||!!u.$ibY)return a
if(!!u.$iP){t=p.d6(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.F(a,new P.jj(o,p))
return o.a}if(!!u.$in){t=p.d6(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.h3(a,t)}throw H.d(P.io("structured clone of other type"))},
h3:function(a,b){var u,t=J.cv(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.c9(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jj.prototype={
$2:function(a,b){this.a.a[a]=this.b.c9(b)},
$S:3}
P.em.prototype={$iaA:1,
gcX:function(a){return this.a}}
P.jI.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ji.prototype={}
P.fi.prototype={
gb8:function(){var u=this.b,t=H.kI(u,"q",0)
return new H.fN(new H.cf(u,new P.fj(),[t]),new P.fk(),[t,W.S])},
m:function(a,b,c){var u=this.gb8()
J.mv(u.b.$1(J.eD(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ab(this.gb8().a)},
i:function(a,b){var u=this.gb8()
return u.b.$1(J.eD(u.a,b))},
gT:function(a){var u=P.l7(this.gb8(),!1,W.S)
return new J.a2(u,u.length)},
$aq:function(){return[W.S]},
$ai:function(){return[W.S]},
$an:function(){return[W.S]}}
P.fj.prototype={
$1:function(a){return!!J.M(a).$iS}}
P.fk.prototype={
$1:function(a){return H.r(a,"$iS")}}
P.j7.prototype={
gc8:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
gcU:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.w(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.M(b)
if(!!u.$ia8){t=q.a
if(t==u.gbf(b)){s=q.b
if(s==u.gbj(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.w(r)
if(t+r===u.gc8(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.w(t)
u=s+t===u.gcU(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cC(t),r=u.b,q=J.cC(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.w(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.w(t)
t=C.c.gG(r+t)
return P.nx(P.j4(P.j4(P.j4(P.j4(0,s),q),p),t))}}
P.a8.prototype={
gbf:function(a){return this.a},
gbj:function(a){return this.b},
gaB:function(a){return this.c},
gay:function(a){return this.d}}
P.aZ.prototype={$iaZ:1}
P.fB.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.aZ]},
$ii:1,
$ai:function(){return[P.aZ]},
$in:1,
$an:function(){return[P.aZ]}}
P.b3.prototype={$ib3:1}
P.hi.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.b3]},
$ii:1,
$ai:function(){return[P.b3]},
$in:1,
$an:function(){return[P.b3]}}
P.hq.prototype={
gl:function(a){return a.length}}
P.c4.prototype={$ic4:1}
P.hT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$in:1,
$an:function(){return[P.k]}}
P.j.prototype={
gbO:function(a){return new P.fi(a,new W.a0(a))},
a9:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aF])
p.push(W.lE(null))
p.push(W.lG())
p.push(new W.jl())
c=new W.ep(new W.d9(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).h4(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a0(s)
q=p.gaC(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b8.prototype={$ib8:1}
P.ia.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$in:1,
$an:function(){return[P.b8]}}
P.dR.prototype={}
P.dS.prototype={}
P.e1.prototype={}
P.e2.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.ek.prototype={}
P.el.prototype={}
P.bw.prototype={$ii:1,
$ai:function(){return[P.v]},
$in:1,
$an:function(){return[P.v]}}
P.eI.prototype={
gl:function(a){return a.length}}
P.eJ.prototype={
i:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
ga3:function(a){var u=H.c([],[P.k])
this.F(a,new P.eK(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iP:1,
$aP:function(){return[P.k,null]}}
P.eK.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eL.prototype={
gl:function(a){return a.length}}
P.bg.prototype={}
P.hj.prototype={
gl:function(a){return a.length}}
P.dF.prototype={}
P.df.prototype={
hT:function(a,b,c,d,e,f,g){var u,t=J.M(g)
if(!!t.$iaA)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oo(g))
return}if(!!t.$ibT)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cD("Incorrect number or type of arguments"))}}
P.hO.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.H(b,a,null,null,null))
return P.aM(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.i(a,b)},
$aq:function(){return[[P.P,,,]]},
$ii:1,
$ai:function(){return[[P.P,,,]]},
$in:1,
$an:function(){return[[P.P,,,]]}}
P.e9.prototype={}
P.ea.prototype={}
T.av.prototype={
az:function(a,b){return!0},
h:function(a){return"all"}}
T.cS.prototype={
az:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].az(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b_.prototype={}
T.a3.prototype={
az:function(a,b){return!this.dQ(0,b)},
h:function(a){return"!["+this.cf(0)+"]"}}
T.ht.prototype={
az:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bs(this.a),t=H.bs(this.b)
return u+".."+t}}
T.hC.prototype={
dY:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.L([P.v,P.au])
for(t=new H.bW(a,a.gl(a));t.v();)u.m(0,t.d,!0)
this.a=u},
az:function(a,b){return this.a.bb(0,b)},
h:function(a){var u=this.a
return P.c6(u.ga3(u),0,null)}}
R.dk.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dv(this.a.j(0,b))
r.a=H.c([],[T.b_])
r.c=!1
this.c.push(r)
return r},
he:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.az(0,a))return r}return},
h:function(a){return this.b}}
R.ds.prototype={
h:function(a){var u=H.kO(this.b,"\n","\\n"),t=H.kO(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dt.prototype={
aA:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.i5.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dk(this,b)
u.c=H.c([],[R.dv])
this.a.m(0,b,u)}return u},
N:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dt(a)
u=P.k
t.c=new H.L([u,u])
this.b.m(0,a,t)}return t},
dH:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.ds]),k=this.c,j=[P.v],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.C(a,s)
q=k.he(r)
if(q==null){if(t==null){i.push(r)
p=P.c6(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c6(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.ds(n==null?o.b:n,p,s)}++s}}}}
R.dv.prototype={
h:function(a){return this.b.b+": "+this.cf(0)}}
O.aT.prototype={
bq:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cc:function(a,b,c){this.b=b
this.c=a},
b4:function(a,b){return this.cc(a,null,b)},
fc:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eB:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a2(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kI(s,"aT",0)]
if(s.fc(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.eB(t,H.c([b],r))}},
$ii:1}
O.bX.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.N():u},
aD:function(){var u=this.b
if(u!=null)u.J(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gaq(u)
else return V.d4()},
dz:function(a){var u=this.a
if(a==null)u.push(V.d4())
else u.push(a)
this.aD()},
c3:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}}}
E.eO.prototype={}
E.ay.prototype={
co:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a2(u,u.length);u.v();){t=u.d
if(t.f==null)t.co()}},
sa7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().K(0,s.gdq())
u=s.c
if(u!=null)u.gw().n(0,s.gdq())
t=new D.A("shape",r,s.c)
t.b=!0
s.af(t)}},
sb1:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().K(0,s.gds())
u=s.f
s.f=a
if(a!=null)a.gw().n(0,s.gds())
s.co()
t=new D.A("technique",u,s.f)
t.b=!0
s.af(t)}},
saL:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gw().K(0,s.gdm())
if(a!=null)a.gw().n(0,s.gdm())
s.r=a
t=new D.A("mover",u,a)
t.b=!0
s.af(t)}},
as:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aP(0,b,s):null
if(!J.C(q,s.x)){u=s.x
s.x=q
t=new D.A("matrix",u,q)
t.b=!0
s.af(t)}r=s.f
if(r!=null)r.as(0,b)
for(r=s.y.a,r=new J.a2(r,r.length);r.v();)r.d.as(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga1(s))
else s.a.push(r.B(0,s.ga1(s)))
s.aD()
a.dA(t.f)
s=a.dy
u=(s&&C.b).gaq(s)
if(u!=null&&t.d!=null)u.hN(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.v();)s.d.aM(a)
a.dw()
a.dx.c3()},
af:function(a){var u=this.z
if(u!=null)u.J(a)},
Z:function(){return this.af(null)},
dr:function(a){this.e=null
this.af(a)},
hA:function(){return this.dr(null)},
dt:function(a){this.af(a)},
hB:function(){return this.dt(null)},
dn:function(a){this.af(a)},
hz:function(){return this.dn(null)},
dl:function(a){this.af(a)},
hw:function(){return this.dl(null)},
hv:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdk(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Z()},
hy:function(a,b){var u,t
for(u=b.gT(b),t=this.gdk();u.v();)u.gI(u).gw().K(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hu.prototype={
dX:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a6(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bX()
t=[V.aC]
u.a=H.c([],t)
u.gw().n(0,new E.hv(s))
s.cy=u
u=new O.bX()
u.a=H.c([],t)
u.gw().n(0,new E.hw(s))
s.db=u
u=new O.bX()
u.a=H.c([],t)
u.gw().n(0,new E.hx(s))
s.dx=u
u=H.c([],[O.dn])
s.dy=u
u.push(null)
s.fr=new H.L([P.k,A.dg])},
ghJ:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.B(0,u.ga1(u))
s=u}return s},
dA:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaq(u):a)},
dw:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hv.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hw.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hx.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dq.prototype={
cl:function(a){this.dD()},
ck:function(){return this.cl(null)},
ghj:function(){var u,t=this,s=Date.now(),r=C.c.a5(P.l2(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a6(s,!1)
return u/r},
cF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.w(r)
u=C.d.bY(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.d.bY(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lp(C.n,s.ghP())}},
dD:function(){if(!this.cx){this.cx=!0
var u=window
C.D.en(u)
C.D.fu(u,W.lR(new E.i3(this),P.a9))}},
hM:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a6(r,!1)
s.y=P.l2(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aD()
r=s.db
C.b.sl(r.a,0)
r.aD()
r=s.dx
C.b.sl(r.a,0)
r.aD()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aM(p.e)}s=p.Q
if(s!=null)s.J(null)}catch(q){u=H.aa(q)
t=H.kJ(q)
P.kN("Error: "+H.e(u))
P.kN("Stack: "+H.e(t))
throw H.d(u)}}}
E.i3.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hM()}}}
Z.dD.prototype={}
Z.cF.prototype={
bK:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aa(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iQ.prototype={}
Z.cG.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bK:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bK(a)},
hY:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a1(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bm.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c3(this.c))+"'")+"]"}}
Z.bb.prototype={
gce:function(a){var u=this.a,t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cz().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=4
if((u&$.bJ().a)!==0)++t
return(u&$.aN().a)!==0?t+4:t},
fU:function(a){var u,t=$.aQ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0)if(u===a)return t
return $.mk()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bb))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aQ().a)!==0)u.push("Pos")
if((t&$.aP().a)!==0)u.push("Norm")
if((t&$.aO().a)!==0)u.push("Binm")
if((t&$.be().a)!==0)u.push("Txt2D")
if((t&$.bf().a)!==0)u.push("TxtCube")
if((t&$.cz().a)!==0)u.push("Clr3")
if((t&$.cA().a)!==0)u.push("Clr4")
if((t&$.bJ().a)!==0)u.push("Weight")
if((t&$.aN().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eR.prototype={}
D.bl.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.S(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.S(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.F(P.l7(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fe(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.F(u,new D.ff(q))}return!0},
ha:function(){return this.J(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
D.fe.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ff.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bn.prototype={}
D.bo.prototype={}
D.A.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cH.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cH))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cX.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fA.prototype={
hG:function(a){this.d.n(0,a.a)
return!1},
hC:function(a){this.d.K(0,a.a)
return!1}}
X.d0.prototype={}
X.fJ.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.a4(o.a+n*m,o.b+u*t)
t=q.a.gba()
r=new X.b0(a,V.b4(),q.x,t,s)
r.b=!0
q.z=new P.a6(p,!1)
q.x=s
return r},
c2:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dN()
if(typeof u!=="number")return u.ad()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aQ(a,b))
return!0},
hH:function(a){return!1},
f1:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d0(c,r.a.gba(),b)
s.b=!0
t.J(s)
r.y=new P.a6(u,!1)
r.x=V.b4()}}
X.bq.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bq))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b0.prototype={}
X.h8.prototype={
bw:function(a,b,c){var u=this,t=new P.a6(Date.now(),!1),s=u.a.gba(),r=new X.b0(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c2:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bw(a,b,!0))
return!0},
b0:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dN()
if(typeof t!=="number")return t.ad()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bw(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bw(a,b,!1))
return!0},
hI:function(a,b){return!1}}
X.hp.prototype={}
X.du.prototype={}
X.i7.prototype={
aQ:function(a,b){var u=this,t=new P.a6(Date.now(),!1),s=a.length>0?a[0]:V.b4(),r=u.a.gba(),q=new X.du(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hF:function(a){var u=this.b
if(u==null)return!1
u.J(this.aQ(a,!0))
return!0},
hD:function(a){var u=this.c
if(u==null)return!1
u.J(this.aQ(a,!0))
return!0},
hE:function(a){var u=this.d
if(u==null)return!1
u.J(this.aQ(a,!1))
return!0}}
X.dA.prototype={
gba:function(){var u=this.a,t=C.i.gcV(u).c
t.toString
u=C.i.gcV(u).d
u.toString
return V.lk(0,0,t,u)},
cu:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.bq(t,a.altKey,a.shiftKey))},
aG:function(a){a.shiftKey},
bG:function(a){a.shiftKey},
aw:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.a4(s-q,r-u)},
aR:function(a){return new V.R(a.movementX,a.movementY)},
bC:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.ah(r.pageX)
C.d.ah(r.pageY)
p=o.left
C.d.ah(r.pageX)
n.push(new V.a4(q-p,C.d.ah(r.pageY)-o.top))}return n},
au:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cH(u,new X.bq(t,a.altKey,a.shiftKey))},
by:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eW:function(a){this.f=!0},
eJ:function(a){this.f=!1},
eQ:function(a){if(this.f&&this.by(a))a.preventDefault()},
f_:function(a){var u
if(!this.f)return
u=this.cu(a)
this.b.hG(u)},
eY:function(a){var u
if(!this.f)return
u=this.cu(a)
this.b.hC(u)},
f3:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aG(a)
if(r.x){u=r.au(a)
t=r.aR(a)
if(r.d.c2(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.au(a)
s=r.aw(a)
if(r.c.c2(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
r.aG(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b0(u,s))a.preventDefault()},
eU:function(a){var u,t,s,r=this
if(!r.by(a)){r.aG(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b0(u,s))a.preventDefault()}},
f5:function(a){var u,t,s,r=this
r.aG(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b_(u,s))a.preventDefault()},
eS:function(a){var u,t,s,r=this
if(!r.by(a)){r.aG(a)
u=r.au(a)
if(r.x){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.aw(a)
if(r.c.b_(u,s))a.preventDefault()}},
f9:function(a){var u,t,s=this
s.aG(a)
u=new V.R((a&&C.C).gh6(a),C.C.gh7(a)).t(0,180)
if(s.x){if(s.d.hH(u))a.preventDefault()
return}if(s.r)return
t=s.aw(a)
if(s.c.hI(u,t))a.preventDefault()},
fb:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.au(s.y)
t=s.aw(s.y)
s.d.f1(u,t,r)}},
fo:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bG(a)
u=t.bC(a)
if(t.e.hF(u))a.preventDefault()},
fk:function(a){var u
this.bG(a)
u=this.bC(a)
if(this.e.hD(u))a.preventDefault()},
fm:function(a){var u
this.bG(a)
u=this.bC(a)
if(this.e.hE(u))a.preventDefault()}}
D.f4.prototype={$ia7:1}
D.a7.prototype={}
D.cY.prototype={
Y:function(a){var u=this.x
if(u!=null)u.J(a)},
cD:function(a){var u=this.y
if(u!=null)u.J(a)},
f0:function(){return this.cD(null)},
fe:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.e1(s))return!1}return!0},
eD:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcC(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bu)this.r.push(q)
p=q.go
if(p==null){p=new D.bl()
p.d=0
q.go=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bn()
u.b=!0
this.Y(u)},
fi:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcC();u.v();){s=u.gI(u)
C.b.K(this.e,s)
s.gw().K(0,t)}u=new D.bo()
u.b=!0
this.Y(u)},
e1:function(a){var u=C.b.S(this.r,a)
return u},
$ai:function(){return[D.a7]},
$aaT:function(){return[D.a7]}}
D.ho.prototype={$ia7:1}
D.bu.prototype={
Y:function(a){var u=this.go
if(u!=null)u.J(a)},
eK:function(){return this.Y(null)},
gae:function(){var u=this.x!=null?1:0
return u+4+8},
$ia7:1}
V.U.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.al.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fd.prototype={}
V.d3.prototype={
ac:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d3))return!1
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
h:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bH(H.c([q.a,q.d,q.r],p),3,0),n=V.bH(H.c([q.b,q.e,q.x],p),3,0),m=V.bH(H.c([q.c,q.f,q.y],p),3,0)
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
V.aC.prototype={
ac:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
de:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.d4()
u=1/b1
t=-n
s=-a0
return V.aD((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aD(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bl:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bk:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aC))return!1
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
h:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bH(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bH(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bH(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bH(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.a4.prototype={
O:function(a,b){return new V.a4(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.T.prototype={
A:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.b6.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b6))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.de.prototype={
gar:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.de))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.R.prototype={
aX:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.w(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.w(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.R(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.lx
return u==null?$.lx=new V.R(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.R(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.y.prototype={
aX:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c1:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ax:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.y(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.z().a)return V.cd()
return new V.y(this.a/b,this.b/b,this.c/b)},
df:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ce.prototype={
aX:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ce))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.eT.prototype={
br:function(a){var u=V.oQ(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.N():u},
W:function(a){var u=this.y
if(u!=null)u.J(a)},
sdK:function(a,b){},
sdg:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.br(u)}s=new D.A("maximumLocation",s,t.b)
s.b=!0
t.W(s)}},
sdi:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.br(u)}s=new D.A("minimumLocation",s,t.c)
s.b=!0
t.W(s)}},
sa0:function(a,b){var u,t=this
b=t.br(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.A("location",u,b)
u.b=!0
t.W(u)}},
sdh:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a)
r.b=!0
s.W(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.A("velocity",t,a)
t.b=!0
u.W(t)}},
scW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.A("dampening",u,a)
u.b=!0
this.W(u)}},
as:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cJ.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.N():u},
aP:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
return J.C(this.a,b.a)},
h:function(a){return"Constant: "+this.a.E("          ")}}
U.bR.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.N():u},
W:function(a){var u=this.e
if(u!=null)u.J(a)},
ak:function(){return this.W(null)},
e3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb6(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gw()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.W(u)},
fg:function(a,b){var u,t
for(u=b.gT(b),t=this.gb6();u.v();)u.gI(u).gw().K(0,t)
u=new D.bo()
u.b=!0
this.W(u)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.d4():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.C(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aaT:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.dB.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.N():u},
W:function(a){var u=this.fx
if(u!=null)u.J(a)},
ak:function(){return this.W(null)},
fV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.N():t
u.n(0,s.gev())
u=s.a.c
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.gex())
u=s.a.c
t=u.c
u=t==null?u.c=D.N():t
u.n(0,s.gez())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.n(0,s.gep())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.ger())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.n(0,s.gfM())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.n(0,s.gfK())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.n(0,s.gfI())
return!0},
am:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.R(u,t)},
ew:function(a){var u=this
H.r(a,"$ib0")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ey:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib0")
if(!n.cx)return
if(n.ch){u=a.d.O(0,a.y)
u=new V.R(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.O(0,a.y)
u=n.am(new V.R(t.a,t.b).B(0,2).t(0,u.gar()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.am(new V.R(s.a,s.b).B(0,2).t(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.O(0,a.z)
n.dx=n.am(new V.R(t.a,t.b).B(0,2).t(0,u.gar()))}n.ak()},
eA:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.ak()}},
eq:function(a){var u=this
if(H.r(a,"$id0").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
es:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$ib0")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.am(new V.R(s.a,s.b).B(0,2).t(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.O(0,a.z)
n.dx=n.am(new V.R(t.a,t.b).B(0,2).t(0,u.gar()))
n.ak()},
fN:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fL:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idu")
if(!n.cx)return
if(n.ch){u=a.d.O(0,a.y)
u=new V.R(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.O(0,a.y)
u=n.am(new V.R(t.a,t.b).B(0,2).t(0,u.gar()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.w(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.w(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.am(new V.R(s.a,s.b).B(0,2).t(0,u.gar()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.w(p)
o=n.cy
if(typeof o!=="number")return H.w(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.w(q)
s=n.db
if(typeof s!=="number")return H.w(s)
o.sa0(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.O(0,a.z)
n.dx=n.am(new V.R(t.a,t.b).B(0,2).t(0,u.gar()))}n.ak()},
fJ:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.w(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.w(u)
s.sX(-t*10*u)
r.ak()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.as(0,u)
r.b.as(0,u)
q=V.l9(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.aD(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
M.cP.prototype={
at:function(a){var u=this.y
if(u!=null)u.J(a)},
e4:function(){return this.at(null)},
eM:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gal(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bl()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.at(u)},
eO:function(a,b){var u,t
for(u=b.gT(b),t=this.gal();u.v();)u.gI(u).gw().K(0,t)
u=new D.bo()
u.b=!0
this.at(u)},
sb1:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().K(0,t.gal())
u=t.d
t.d=a
if(a!=null)a.gw().n(0,t.gal())
s=new D.A("technique",u,t.d)
s.b=!0
t.at(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.N():u},
aM:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dA(a1.d)
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
if(typeof s!=="number")return H.w(s)
o=C.d.ah(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
n=C.d.ah(p*r)
p=C.d.ah(q.c*s)
a2.c=p
q=C.d.ah(q.d*r)
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
i=V.aD(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dz(i)
t=$.le
if(t==null){t=V.lg()
q=V.lB()
p=$.ly
if(p==null)p=$.ly=new V.y(0,0,-1)
h=p.t(0,Math.sqrt(p.D(p)))
q=q.ax(h)
g=q.t(0,Math.sqrt(q.D(q)))
f=h.ax(g)
e=new V.y(t.a,t.b,t.c)
d=g.R(0).D(e)
c=f.R(0).D(e)
b=h.R(0).D(e)
t=V.aD(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.le=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aP(0,a2,u)
if(a0!=null)a=a0.B(0,a)}a2.db.dz(a)
u=a1.d
if(u!=null)u.as(0,a2)
for(u=a1.e.a,u=new J.a2(u,u.length);u.v();)u.d.as(0,a2)
for(u=a1.e.a,u=new J.a2(u,u.length);u.v();)u.d.aM(a2)
a1.b.toString
a2.cy.c3()
a2.db.c3()
a1.c.toString
a2.dw()}}
A.cE.prototype={}
A.eH.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
h9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gai:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fQ.prototype={
dW:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.Q("")
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
A.o5(c3,u)
A.o7(c3,u)
A.o6(c3,u)
A.o9(c3,u)
A.oa(c3,u)
A.o8(c3,u)
A.ob(c3,u)
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
m=A.o4(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cv(n,35633)
b8.f=b8.cv(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.u("Failed to link shader: "+H.e(l)))}b8.fE()
b8.fG()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.r(b8.y.V(0,"invViewMat"),"$iad")
if(t)b8.dy=H.r(b8.y.V(0,"objMat"),"$iad")
if(r)b8.fr=H.r(b8.y.V(0,"viewObjMat"),"$iad")
b8.fy=H.r(b8.y.V(0,"projViewObjMat"),"$iad")
if(c3.ry)b8.k1=H.r(b8.y.V(0,"txt2DMat"),"$ica")
if(c3.x1)b8.k2=H.r(b8.y.V(0,"txtCubeMat"),"$iad")
if(c3.x2)b8.k3=H.r(b8.y.V(0,"colorMat"),"$iad")
b8.r1=H.c([],[A.ad])
t=c3.y2
if(t>0){b8.k4=b8.y.V(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.u(c0+q+c1))
s.push(H.r(j,"$iad"))}}if(c3.a.a)b8.r2=H.r(b8.y.V(0,"emissionClr"),"$iJ")
if(c3.b.a)b8.x1=H.r(b8.y.V(0,"ambientClr"),"$iJ")
if(c3.c.a)b8.y2=H.r(b8.y.V(0,"diffuseClr"),"$iJ")
if(c3.d.a)b8.cZ=H.r(b8.y.V(0,"invDiffuseClr"),"$iJ")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d0=H.r(b8.y.V(0,"shininess"),"$iY")
if(t)b8.d_=H.r(b8.y.V(0,"specularClr"),"$iJ")}if(c3.cy){b8.d1=H.r(b8.y.V(0,"envSampler"),"$iby")
if(c3.r.a)b8.d2=H.r(b8.y.V(0,"reflectClr"),"$iJ")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d3=H.r(b8.y.V(0,"refraction"),"$iY")
if(t)b8.d4=H.r(b8.y.V(0,"refractClr"),"$iJ")}}if(c3.y.a)b8.d5=H.r(b8.y.V(0,"alpha"),"$iY")
t=P.v
s=[t,A.dx]
b8.bR=new H.L(s)
b8.bS=new H.L([t,[P.n,A.c9]])
b8.bT=new H.L(s)
b8.bU=new H.L([t,[P.n,A.cb]])
b8.bV=new H.L(s)
b8.bW=new H.L([t,[P.n,A.cc]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.c9],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ad()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.r(j,"$iJ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.r(c,"$iJ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.u(c0+d+c1))
H.r(b,"$iJ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.r(j,"$iJ")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.r(c,"$iJ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.r(b,"$ibx")
a2=b}else a2=b9
e.push(new A.c9(a1,a0,a,j,c,a2))}b8.bS.m(0,g,e)
q=b8.bR
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.r(j,"$iJ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.r(c,"$iJ")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.r(b,"$iJ")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$ica")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$iby")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$iby")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$ic8")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$iY")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$iY")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.r(a8,"$iY")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.cb(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bU.m(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.r(j,"$iJ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.r(c,"$iJ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.r(b,"$iJ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.r(a3,"$iJ")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$iJ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.r(a8,"$iJ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.u(c0+o+c1))
H.r(b2,"$iY")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.u(c0+o+c1))
H.r(b3,"$iY")
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
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$ic8")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$iY")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.r(a8,"$iY")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$iY")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.r(a8,"$iY")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.u(c0+d+c1))
H.r(b2,"$iY")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.r(a5,"$ibx")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.r(a5,"$ibx")
a6=a5}else a6=b9
e.push(new A.cc(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bW.m(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}}},
fC:function(a,b){}}
A.cM.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dc.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.di.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fT.prototype={
h:function(a){return this.aW}}
A.c9.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.dg.prototype={
dZ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cv:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fE:function(){var u,t,s,r=this,q=H.c([],[A.cE]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cE(p,t.name,s))}r.x=new A.eH(q)},
fG:function(){var u,t,s,r=this,q=H.c([],[A.dw]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.h5(t.type,t.size,t.name,s))}r.y=new A.ik(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.dx(u,b,c)
else return A.ku(u,this.r,b,a,c)},
ek:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.ku(u,this.r,b,a,c)},
el:function(a,b,c){var u=this.a
if(a===1)return new A.by(u,b,c)
else return A.ku(u,this.r,b,a,c)},
b9:function(a,b){return new P.dM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
h5:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.Y(u.a,c,d)
case 35664:return new A.ig(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.c8(u.a,c,d)
case 35667:return new A.ih(u.a,c,d)
case 35668:return new A.ii(u.a,c,d)
case 35669:return new A.ij(u.a,c,d)
case 35674:return new A.il(u.a,c,d)
case 35675:return new A.ca(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.ek(b,c,d)
case 35680:return u.el(b,c,d)
case 35670:throw H.d(u.b9("BOOL",c))
case 35671:throw H.d(u.b9("BOOL_VEC2",c))
case 35672:throw H.d(u.b9("BOOL_VEC3",c))
case 35673:throw H.d(u.b9("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dw.prototype={}
A.ik.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dx.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.ih.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.ii.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.ij.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ie.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Y.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ig.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.J.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c8.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.il.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ca.prototype={
aj:function(a){var u=new Float32Array(H.bC(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ad.prototype={
aj:function(a){var u=new Float32Array(H.bC(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bx.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.by.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jz.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c1(s.b,b).c1(s.d.c1(s.c,b),c)
a.sa0(0,new V.T(r.a,r.b,r.c))
a.sdF(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.scS(new V.b6(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jJ.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jL.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.w(p)
s=-s*p
u=r*p
a.sa0(0,new V.T(s,u,q))
u=new V.y(s,u,q)
a.sdF(u.t(0,Math.sqrt(u.D(u))))
a.scS(new V.b6(1-c,2+c,-1,-1))}}
F.jM.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jN.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k4.prototype={
$2:function(a,b){return 0}}
F.k5.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.w(s)
u=a.f
t=new V.y(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa0(0,new V.T(s.a,s.b,s.c))}}
F.k8.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.jV.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jK.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kS(n.$1(o),m)
m=J.kS(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.lz
if(n==null){n=new V.y(1,0,0)
$.lz=n
t=n}else t=n
n=u.ax(!J.C(u,t)?V.lC():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.ax(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa0(0,l.A(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aV.prototype={
aU:function(){var u=this
if(!u.gaV()){C.b.K(u.a.a.d.b,u)
u.a.a.Z()}u.bD()
u.bE()
u.fs()},
bH:function(a){this.a=a
a.d.b.push(this)},
bI:function(a){this.b=a
a.d.c.push(this)},
fD:function(a){this.c=a
a.d.d.push(this)},
bD:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bE:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
fs:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
ef:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cd()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.df())return
return s.t(0,Math.sqrt(s.D(s)))},
eh:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.ax(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
bN:function(){var u,t=this
if(t.d!=null)return!0
u=t.ef()
if(u==null){u=t.eh()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
ee:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cd()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.df())return
return s.t(0,Math.sqrt(s.D(s)))},
eg:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.O(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.O(0,g).B(0,p).A(0,g).O(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.ax(q)
l=l.t(0,Math.sqrt(l.D(l))).ax(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
bL:function(){var u,t=this
if(t.e!=null)return!0
u=t.ee()
if(u==null){u=t.eg()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gh_:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gaV())return a+"disposed"
u=a+C.a.ab(J.a1(s.a.e),0)+", "+C.a.ab(J.a1(s.b.e),0)+", "+C.a.ab(J.a1(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fg.prototype={}
F.hL.prototype={
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
F.bV.prototype={
aU:function(){var u=this
if(!u.gaV()){C.b.K(u.a.a.c.b,u)
u.a.a.Z()}u.bD()
u.bE()},
bH:function(a){this.a=a
a.c.b.push(this)},
bI:function(a){this.b=a
a.c.c.push(this)},
bD:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bE:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){if(this.gaV())return a+"disposed"
return a+C.a.ab(J.a1(this.a.e),0)+", "+C.a.ab(J.a1(this.b.e),0)},
M:function(){return this.E("")}}
F.fC.prototype={}
F.id.prototype={
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
F.c1.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ab(J.a1(u.e),0)},
M:function(){return this.E("")}}
F.hD.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.N():u},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.n(0,r.h2())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c1()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mP(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bP(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
hs:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cy(o,0)])
for(o=[F.ba];u.length!==0;){t=C.b.ghf(u)
C.b.dB(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.b.dB(u,r)}}if(s.length>1)b.aZ(s)}}p.a.u()
p.c.c6()
p.d.c6()
p.b.hL()
p.c.c7(new F.id())
p.d.c7(new F.hL())
o=p.e
if(o!=null)o.ag(0)},
bJ:function(){this.hs(new F.iJ(),new F.hg())},
bX:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bX()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdj(new V.y(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.y(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.C(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ag(0)},
fY:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aQ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aP().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.cz().a)!==0)++s
if((t&$.cA().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.aN().a)!==0)++s
r=a4.gce(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cF])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fU(m)
k=l.gce(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cF(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hq(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bC(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cG(new Z.dD(a1,d),o,a4)
c.b=H.c([],[Z.bm])
if(a0.b.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.kx(u,34963,b)
c.b.push(new Z.bm(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.kx(u,34963,b)
c.b.push(new Z.bm(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.v])
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
b.push(t.e)}a=Z.kx(u,34963,b)
c.b.push(new Z.bm(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.E(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.E(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.E(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.E(t))}return C.b.k(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.J(null)}}
F.hE.prototype={
fQ:function(a){var u,t,s,r,q,p=H.c([],[F.aV]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bP(u,r,q))}}return p},
fR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aV])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bP(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bP(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bP(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bP(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
c7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
c6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gh_(s)
if(t)s.aU()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bN())s=!1
return s},
bM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bL())s=!1
return s},
bX:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.y(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.y(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
h:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(a))
return C.b.k(r,"\n")},
M:function(){return this.E("")}}
F.hF.prototype={
gl:function(a){return this.b.length},
c7:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
c6:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aU()}},
h:function(a){return this.M()},
E:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.b.k(s,"\n")},
M:function(){return this.E("")}}
F.hG.prototype={
gl:function(a){return this.b.length},
hL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
h:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(a))
return C.b.k(r,"\n")},
M:function(){return this.E("")}}
F.ba.prototype={
bQ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dC(u.cx,r,o,t,s,q,p,a,n)},
h2:function(){return this.bQ(null)},
sa0:function(a,b){var u
if(!J.C(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdj:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.C(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdF:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
scS:function(a){var u
if(!J.C(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hq:function(a){var u,t,s=this
if(a.p(0,$.aQ())){u=s.f
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aP())){u=s.r
t=[P.K]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.aO())){u=s.x
t=[P.K]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.be())){u=s.y
t=[P.K]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bf())){u=s.z
t=[P.K]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cz())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.cA())){u=s.Q
t=[P.K]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bJ()))return H.c([s.ch],[P.K])
else if(a.p(0,$.aN())){u=s.cx
t=[P.K]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.K])},
bN:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.F(0,new F.iO(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bL:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.F(0,new F.iN(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.ab(J.a1(s.e),0))
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
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.iO.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iN.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.iE.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
fS:function(a,b,c,d,e,f){var u=F.dC(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bN()
return!0},
bM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bL()
return!0},
fZ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
h:function(a){return this.M()},
E:function(a){var u,t,s,r
this.u()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].E(a))
return C.b.k(u,"\n")},
M:function(){return this.E("")}}
F.iF.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
F:function(a,b){var u=this
C.b.F(u.b,b)
C.b.F(u.c,new F.iG(u,b))
C.b.F(u.d,new F.iH(u,b))},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
F.iG.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.iH.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.iI.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
F.iK.prototype={}
F.iJ.prototype={
aY:function(a,b,c){return J.C(b.f,c.f)}}
F.iL.prototype={}
F.hg.prototype={
aZ:function(a){var u,t,s,r=V.cd()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.y(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.t(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)a[t].sdj(r)
return}}
F.iM.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].E(""))
return C.b.k(r,"\n")}}
O.d1.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.N():u},
a8:function(a){var u=this.fr
if(u!=null)u.J(a)},
e7:function(){return this.a8(null)},
cE:function(a){this.a=null
this.a8(a)},
fw:function(){return this.cE(null)},
eF:function(a,b){var u=new D.bn()
u.b=!0
this.a8(u)},
eH:function(a,b){var u=new D.bo()
u.b=!0
this.a8(u)},
cs:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.v,h=new H.L([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gae()
p=h.i(0,r.gae())
h.m(0,q,p==null?1:p)}o=H.c([],[A.cM])
h.F(0,new O.fX(j,o))
C.b.bo(o,new O.fY())
n=new H.L([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=r.gae()
p=n.i(0,r.gae())
n.m(0,q,p==null?1:p)}m=H.c([],[A.dc])
n.F(0,new O.fZ(j,m))
C.b.bo(m,new O.h_())
l=new H.L([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.o)(i),++s){r=i[s]
t=r.gae()
q=l.i(0,r.gae())
l.m(0,t,q==null?1:q)}k=H.c([],[A.di])
l.F(0,new O.h0(j,k))
C.b.bo(k,new O.h1())
i=C.c.a5(j.e.a.length+3,4)
j.dy.e
return A.mW(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ed:function(a,b){if(b!=null)if(!C.b.S(a,b)){b.a=a.length
a.push(b)}},
as:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.v();){t=u.d
t.toString
s=$.b5
t.a=s==null?$.b5=new V.T(0,0,0):s
s=$.iD
t.b=s==null?$.iD=new V.y(0,0,1):s
s=$.iC
t.c=s==null?$.iC=new V.y(0,1,0):s
s=$.iB
t.d=s==null?$.iB=new V.y(-1,0,0):s
s=t.f
if(s!=null){r=s.aP(0,b,t)
if(r!=null){t.a=r.bk(t.a)
s=r.bl(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.t(0,Math.sqrt(q*q+p*p+o*o))
o=r.bl(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.t(0,Math.sqrt(p*p+q*q+s*s))
s=r.bl(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.t(0,Math.sqrt(q*q+p*p+o*o))}}}},
hN:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cs()
u=b3.fr.i(0,b2.aW)
if(u==null){u=A.mV(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.u("May not cache a shader with no name."))
if(b3.fr.bb(0,t))H.t(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.cY
b2=b4.e
if(!(b2 instanceof Z.cG))b2=b4.e=null
if(b2==null||!b2.d.p(0,r)){b2=s.k3
if(b2)b4.d.ap()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bM()
p.a.bM()
p=p.e
if(p!=null)p.ag(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fZ()
o=o.e
if(o!=null)o.ag(0)}m=b4.d.fY(new Z.iQ(b3.a),r)
m.aK($.aQ()).e=b1.a.Q.c
if(b2)m.aK($.aP()).e=b1.a.cx.c
if(q)m.aK($.aO()).e=b1.a.ch.c
if(s.r1)m.aK($.be()).e=b1.a.cy.c
if(p)m.aK($.bf()).e=b1.a.db.c
if(s.rx)m.aK($.aN()).e=b1.a.dx.c
b4.e=m}l=H.c([],[T.dp])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.hb()
if(s.dy){b2=b1.a
p=b3.dx
p=p.ga1(p)
b2=b2.dy
b2.toString
b2.aj(p.ac(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.ga1(p)
o=b3.dx
o=b3.cx=p.B(0,o.ga1(o))
p=o}b2=b2.fr
b2.toString
b2.aj(p.ac(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.ghJ()
o=b3.dx
o=b3.ch=p.B(0,o.ga1(o))
p=o}b2=b2.fy
b2.toString
b2.aj(p.ac(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.aj(C.j.ac(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.aj(C.j.ac(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.aj(C.j.ac(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bC(p.ac(0,!0)))
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
b2=b2.cZ
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.e.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.z.ch
p=p.d0
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.z.f
b2=b2.d_
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.z
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
g=new H.L([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gae()
c=g.i(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.cB(b1.a.bS.i(0,d),c)
n=h.bl(e.gh8(e))
a=n.a
a0=n.b
a1=n.c
a1=n.t(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
n=a1.b
a1=a1.c
a0.a.uniform3f(a0.d,a,n,a1)
a1=e.gaJ(e)
n=b.f
n.a.uniform3f(n.d,a1.a,a1.b,a1.c)
e.gaO()
n=e.gh8(e)
a=b.d
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gio()
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gc8(e)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaO()
if(!C.b.S(l,n)){n.a=l.length
l.push(n)}n=e.gaO()
a=n.gbg(n)
if(a){a=b.r
a.toString
a0=n.d
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.a
a.a.uniform1i(a.d,n)}}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bR.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
a2=new H.L([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gae()
c=a2.i(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
b=J.cB(b1.a.bU.i(0,d),c)
a3=h.B(0,e.ga1(e))
n=e.ga1(e)
a=$.b5
n=n.bk(a==null?$.b5=new V.T(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=$.b5
n=a3.bk(n==null?$.b5=new V.T(0,0,0):n)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaJ(e)
a=b.e
a.a.uniform3f(a.d,n.a,n.b,n.c)
e.gaO()
n=a3.de(0)
a=n.a
a0=n.b
a1=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=b.d
a9.toString
i=new Float32Array(H.bC(new V.d3(a,a0,a1,a4,a5,a6,a7,a8,n).ac(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gaO()
n=e.gaO()
if(!C.b.S(l,n)){n.a=l.length
l.push(n)}n=e.gaO()
a=n.gbg(n)
if(a){a=b.f
a.toString
a0=n.gbg(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.ghk(n)
a.a.uniform1i(a.d,n)}}e.gcd()
n=e.gi0()
a=b.x
a.a.uniform4f(a.d,n.a,n.b,n.c,n.d)
n=e.gcd()
if(!C.b.S(l,n)){n.a=l.length
l.push(n)}n=e.gcd()
a=n.gbg(n)
if(a){a=b.r
a.toString
a0=n.gbg(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.ghk(n)
a.a.uniform1i(a.d,n)}}if(e.gi4()){n=e.gi1()
a=b.y
a.a.uniform1f(a.d,n)
n=e.gi2()
a=b.z
a.a.uniform1f(a.d,n)
n=e.gi3()
a=b.Q
a.a.uniform1f(a.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=a2.i(0,o)
if(k==null)k=0
o=b1.a.bT.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.ga1(p)
p=P.v
b0=new H.L([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gae()
c=b0.i(0,d)
if(c==null)c=0
b0.m(0,d,c+1)
b=J.cB(b1.a.bW.i(0,d),c)
n=e.a
a=b.b
a0=n.a
a1=n.b
n=n.c
a.a.uniform3f(a.d,a0,a1,n)
n=e.b
a1=n.a
a0=n.b
a=n.c
a=n.t(0,Math.sqrt(a1*a1+a0*a0+a*a))
a0=b.c
a1=a.a
n=a.b
a=a.c
a0.a.uniform3f(a0.d,a1,n,a)
a=h.bk(e.a)
n=b.d
n.a.uniform3f(n.d,a.a,a.b,a.c)
a=e.r
n=b.e
n.a.uniform3f(n.d,a.a,a.b,a.c)
if(e.x!=null||!1){n=e.c
a=b.f
a.toString
a0=n.a
a1=n.b
n=n.c
a.a.uniform3f(a.d,a0,a1,n)
n=e.d
a1=b.r
a1.toString
a0=n.a
a=n.b
n=n.c
a1.a.uniform3f(a1.d,a0,a,n)
n=e.z
a=b.x
a.a.uniform1f(a.d,n)
n=e.Q
a=b.y
a.a.uniform1f(a.d,n)}n=e.x
a=n!=null
if(a){if(a)if(!C.b.S(l,n)){n.a=l.length
l.push(n)}n=e.x
a=n!=null
if(a&&n.d){a0=b.dx
a0.toString
if(!a||!n.d)a0.a.uniform1i(a0.d,0)
else{n=n.a
a0.a.uniform1i(a0.d,n)}}}n=e.cy
a=b.Q
a.a.uniform1f(a.d,n)
n=e.dx
a=b.ch
a.a.uniform1f(a.d,n)
n=e.dy
a=b.cx
a.a.uniform1f(a.d,n)
n=e.fr
a=b.cy
a.a.uniform1f(a.d,n)
n=e.fx
a=b.db
a.a.uniform1f(a.d,n)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.o)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bV.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.ga1(p).de(0)}b2=b2.id
b2.toString
b2.aj(p.ac(0,!0))}if(s.cy){b1.ed(l,b1.ch)
b2=b1.a
p=b1.ch
b2.fC(b2.d1,p)
if(s.r.a){b2=b1.a
p=b1.cx.f
b2=b2.d2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.x.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.cy.ch
p=p.d3
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.cy.f
b2=b2.d4
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}}b2=s.y.a
p=!b2
if(p)o=!1
else o=!0
if(o){if(b2){b2=b1.a
o=b1.db.f
b2=b2.d5
b2.a.uniform1f(b2.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){b2=l[j]
if(!b2.c&&b2.d){b2.c=!0
q.activeTexture(33984+b2.a)
q.bindTexture(3553,b2.b)}}b2=b4.e
b2.bK(b3)
b2.aM(b3)
b2.hY(b3)
if(p)b2=!1
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(3553,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.h9()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cs().aW}}
O.fX.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cM(a,C.c.a5(b+3,4)*4))}}
O.fY.prototype={
$2:function(a,b){return J.kb(a.a,b.a)}}
O.fZ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dc(a,C.c.a5(b+3,4)*4))}}
O.h_.prototype={
$2:function(a,b){return J.kb(a.a,b.a)}}
O.h0.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.di(a,C.c.a5(b+3,4)*4))}}
O.h1.prototype={
$2:function(a,b){return J.kb(a.a,b.a)}}
O.fR.prototype={
av:function(){var u,t=this
t.cg()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.A(t.b,u,1)
u.b=!0
t.a.a8(u)}}}
O.d2.prototype={
av:function(){},
cH:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.av()
u=s.a
u.a=null
u.a8(null)}}}
O.fS.prototype={}
O.ao.prototype={
cG:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a)
t.b=!0
s.a.a8(t)}},
av:function(){this.cg()
this.cG(new V.U(1,1,1))},
saJ:function(a,b){this.cH(new A.Z(!0,!1,!1))
this.cG(b)}}
O.fU.prototype={}
O.fV.prototype={
av:function(){var u,t=this
t.ci()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.A(t.b+".refraction",u,1)
u.b=!0
t.a.a8(u)}}}
O.fW.prototype={
cI:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a)
t.b=!0
u.a.a8(t)}},
av:function(){this.ci()
this.cI(100)}}
O.dn.prototype={}
T.dp.prototype={}
T.i_.prototype={}
T.i0.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.N():u}}
T.i1.prototype={
hr:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i0()
t.a=0
t.b=q
t.d=t.c=!1
W.V(u,"load",new T.i2(this,t,u,!1,q,!1,!1),!1)
return t},
fz:function(a,b,c){var u,t,s,r
b=V.kM(b)
u=V.kM(a.width)
t=V.kM(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ke()
s.width=u
s.height=t
r=C.i.dM(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.op(r.getImageData(0,0,s.width,s.height))}}}
T.i2.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fz(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.Y.hT(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ha()}++s.e}}
X.kd.prototype={}
X.fn.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.N():u}}
X.db.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.N():u},
aE:function(a){var u=this.f
if(u!=null)u.J(a)},
ea:function(){return this.aE(null)},
saL:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gw().K(0,s.gcm())
t=s.b
s.b=a
if(a!=null)a.gw().n(0,s.gcm())
u=new D.A("mover",t,s.b)
u.b=!0
s.aE(u)}}}
X.hW.prototype={}
V.cI.prototype={
b5:function(a){this.b=new P.fs(C.P)
this.c=null
this.d=H.c([],[[P.n,W.ag]])},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ag]))
u=a.split("\n")
for(l=u.length,t=[W.ag],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ej(q,0,q.length)
n=o==null?q:o
C.N.dO(p,H.kO(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaq(m.d).push(p)}},
du:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.n,W.ag]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bc():t).dH(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)q.bi(t[r])}}
V.k3.prototype={
$1:function(a){var u=C.d.dG(this.a.ghj(),2)
if(u!=="0.00")P.kN(u+" fps")}}
V.f2.prototype={
bi:function(a){var u=this
switch(a.a){case"Class":u.L(a.b,"#551")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break
case"Type":u.L(a.b,"#B11")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bc:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.i6()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.p(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.p(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.p(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.p(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.p(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.p(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.p(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.av())
t=a1.j(0,r).k(0,h)
u=T.p(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.p(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.p(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.p(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.av())
t=a1.j(0,r).k(0,e)
u=T.p(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.p(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.p(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a3()
s=[T.b_]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.p(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.p(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a3()
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.p(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.p(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.p(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.N("Num")
t=a1.j(0,n)
t.d=t.a.N("Num")
t=a1.j(0,m)
t.d=t.a.N("Symbol")
t=a1.j(0,j)
t.d=t.a.N("String")
t=a1.j(0,g)
t.d=t.a.N("String")
t=a1.j(0,c)
t.d=t.a.N(d)
t=a1.j(0,a0)
t.d=t.a.N(a0)
t=a1.j(0,q)
t=t.d=t.a.N(q)
u=[P.k]
t.aA(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aA(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aA(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fp.prototype={
bi:function(a){var u=this
switch(a.a){case"Builtin":u.L(a.b,"#411")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Preprocess":u.L(a.b,"#737")
break
case"Reserved":u.L(a.b,"#119")
break
case"Symbol":u.L(a.b,"#611")
break
case"Type":u.L(a.b,"#171")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bc:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.i6()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.p(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.p(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.p(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.p(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.p(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.av())
t=e.j(0,j).k(0,i)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a3()
s=[T.b_]
t.a=H.c([],s)
u.a.push(t)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.p(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a3()
u.a=H.c([],s)
t.a.push(u)
t=T.p(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.p(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.p(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.p(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.N("Num")
u=e.j(0,n)
u.d=u.a.N("Num")
u=e.j(0,m)
u.d=u.a.N("Symbol")
u=e.j(0,i)
u.d=u.a.N(j)
u=e.j(0,g)
u.d=u.a.N(h)
u=e.j(0,f)
u.d=u.a.N(f)
u=e.j(0,q)
u=u.d=u.a.N(q)
t=[P.k]
u.aA(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aA(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aA(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fq.prototype={
bi:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.L(a.b,"#911")
u.L("=",t)
break
case"Id":u.L(a.b,t)
break
case"Other":u.L(a.b,t)
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break}},
bc:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.i6()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.p(new H.l("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.p(new H.l("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.p(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.p(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.p(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.p(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.p(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.p(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.p(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.av())
l.j(0,s).k(0,m).a.push(new T.av())
u=l.j(0,m).k(0,m)
t=new T.a3()
t.a=H.c([],[T.b_])
u.a.push(t)
u=T.p(new H.l('</\\-!>=_"'))
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.N("Symbol")
u=l.j(0,n)
u.d=u.a.N("String")
u=l.j(0,r)
t=u.a.N(r)
u.d=t
t.aA(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.N(q)
t=l.j(0,m)
t.d=t.a.N(m)
return l}}
V.hm.prototype={
du:function(a,b){this.d=H.c([],[[P.n,W.ag]])
this.L(C.b.k(b,"\n"),"#111")},
bi:function(a){},
bc:function(){return}}
V.hr.prototype={
cO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lt().gc5().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.cM(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kU(m.c).n(0,q)
o=W.mK("radio")
o.checked=s
o.name=u
W.V(o,"change",new V.hs(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kU(m.c).n(0,r.createElement("br"))},
aT:function(a,b,c){return this.cO(a,b,c,!1)},
cM:function(a){var u,t,s=P.lt(),r=P.k,q=P.mR(s.gc5(),r,r)
q.m(0,this.a,a)
u=s.dC(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.ji([],[]).c9(""),"",t)}}
V.hs.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cM(u.d)}}}
V.hH.prototype={
e_:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.V(q,"scroll",new V.hJ(o),!1)},
cQ:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fF()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dH(C.b.hp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
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
if(H.oM(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.eo(C.x,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.e(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
dL:function(a){var u,t,s,r=new V.f2("dart")
r.b5("dart")
u=new V.fp("glsl")
u.b5("glsl")
t=new V.fq("html")
t.b5("html")
s=C.b.hg(H.c([r,u,t],[V.cI]),new V.hK(a))
if(s!=null)return s
r=new V.hm("plain")
r.b5("plain")
return r},
cP:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cw(s).a2(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a2(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dL(a8)
r.du(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eo(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kW()
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
if(t>=a6.length)return H.b(a6,t)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.o)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.o)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gT(s);a2.v();)d.appendChild(a2.gI(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fO:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fF:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.i6()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.p(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a3()
r=[T.b_]
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.p(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.p(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.p(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.p(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a3()
s.a=H.c([],r)
t.a.push(s)
t=T.p(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.p(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.p(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.p(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.p(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.p(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.av())
s=u.j(0,i).k(0,i)
t=new T.a3()
t.a=H.c([],r)
s.a.push(t)
s=T.p(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.N(p)
s=u.j(0,n)
s.d=s.a.N(o)
s=u.j(0,"CodeEnd")
s.d=s.a.N(m)
s=u.j(0,j)
s.d=s.a.N("Link")
s=u.j(0,i)
s.d=s.a.N(i)
this.b=u}}
V.hJ.prototype={
$1:function(a){P.lp(C.n,new V.hI(this.a))}}
V.hI.prototype={
$0:function(){var u=C.d.ah(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hK.prototype={
$1:function(a){return a.a===this.a}}
L.jW.prototype={
$0:function(){this.a.sa7(0,F.kG(1,null,null,1))}}
L.jX.prototype={
$0:function(){this.a.sa7(0,F.kH(1,!0,!0,40,1))}}
L.jY.prototype={
$0:function(){this.a.sa7(0,F.kH(1,!0,!1,40,0))}}
L.jZ.prototype={
$0:function(){this.a.sa7(0,F.oL(6,6))}}
L.k_.prototype={
$0:function(){this.a.sa7(0,F.m4())}}
L.k0.prototype={
$0:function(){this.a.sa7(0,F.oE())}}
L.k1.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.cP("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cP("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dR=u.h
u=J.cW.prototype
u.dT=u.h
u=P.i.prototype
u.dS=u.bm
u=W.S.prototype
u.bp=u.a9
u=W.e6.prototype
u.dU=u.ao
u=T.cS.prototype
u.dQ=u.az
u.cf=u.h
u=O.d2.prototype
u.cg=u.av
u=O.ao.prototype
u.ci=u.av})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oj","ns",8)
u(P,"ok","nt",8)
u(P,"ol","nu",8)
t(P,"lT","oh",10)
s(W,"oy",4,null,["$4"],["nv"],15,0)
s(W,"oz",4,null,["$4"],["nw"],15,0)
var m
r(m=E.ay.prototype,"gdq",0,0,null,["$1","$0"],["dr","hA"],0,0)
r(m,"gds",0,0,null,["$1","$0"],["dt","hB"],0,0)
r(m,"gdm",0,0,null,["$1","$0"],["dn","hz"],0,0)
r(m,"gdk",0,0,null,["$1","$0"],["dl","hw"],0,0)
q(m,"ghu","hv",4)
q(m,"ghx","hy",4)
r(m=E.dq.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
p(m,"ghP","dD",10)
o(m=X.dA.prototype,"geV","eW",5)
o(m,"geI","eJ",5)
o(m,"geP","eQ",2)
o(m,"geZ","f_",11)
o(m,"geX","eY",11)
o(m,"gf2","f3",2)
o(m,"gf6","f7",2)
o(m,"geT","eU",2)
o(m,"gf4","f5",2)
o(m,"geR","eS",2)
o(m,"gf8","f9",18)
o(m,"gfa","fb",5)
o(m,"gfn","fo",6)
o(m,"gfj","fk",6)
o(m,"gfl","fm",6)
r(m=D.cY.prototype,"gcC",0,0,null,["$1","$0"],["cD","f0"],0,0)
o(m,"gfd","fe",19)
q(m,"geC","eD",12)
q(m,"gfh","fi",12)
r(D.bu.prototype,"gbB",0,0,null,["$1","$0"],["Y","eK"],0,0)
n(V.R.prototype,"gl","aX",7)
n(V.y.prototype,"gl","aX",7)
n(V.ce.prototype,"gl","aX",7)
r(m=U.bR.prototype,"gb6",0,0,null,["$1","$0"],["W","ak"],0,0)
q(m,"ge2","e3",13)
q(m,"gff","fg",13)
r(m=U.dB.prototype,"gb6",0,0,null,["$1","$0"],["W","ak"],0,0)
o(m,"gev","ew",1)
o(m,"gex","ey",1)
o(m,"gez","eA",1)
o(m,"gep","eq",1)
o(m,"ger","es",1)
o(m,"gfM","fN",1)
o(m,"gfK","fL",1)
o(m,"gfI","fJ",1)
r(m=M.cP.prototype,"gal",0,0,null,["$1","$0"],["at","e4"],0,0)
q(m,"geL","eM",4)
q(m,"geN","eO",4)
r(m=O.d1.prototype,"ge6",0,0,null,["$1","$0"],["a8","e7"],0,0)
r(m,"gfv",0,0,null,["$1","$0"],["cE","fw"],0,0)
q(m,"geE","eF",14)
q(m,"geG","eH",14)
r(X.db.prototype,"gcm",0,0,null,["$1","$0"],["aE","ea"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.ko,J.a,J.a2,P.dU,P.i,H.bW,P.fw,H.cQ,H.iq,H.eV,H.ib,P.bk,H.bM,H.eb,P.aB,H.fD,H.fF,H.fy,P.eh,P.dE,P.dl,P.hS,P.dr,P.jy,P.jc,P.j6,P.dT,P.q,P.jq,P.fM,P.eS,P.ft,P.jw,P.jv,P.au,P.a6,P.a9,P.aU,P.hk,P.dj,P.dM,P.fm,P.fo,P.n,P.P,P.b2,P.k,P.Q,P.bA,P.is,P.jf,W.eZ,W.ch,W.G,W.d9,W.e6,W.jl,W.cR,W.aF,W.jb,W.ep,P.jh,P.em,P.j7,P.bw,T.av,T.cS,T.b_,T.ht,T.hC,R.dk,R.ds,R.dt,R.i5,O.aT,O.bX,E.eO,E.ay,E.hu,E.dq,Z.dD,Z.iQ,Z.cG,Z.bm,Z.bb,D.eR,D.bl,D.W,X.cH,X.cX,X.fA,X.fJ,X.bq,X.h8,X.i7,X.dA,D.f4,D.a7,D.ho,D.bu,V.U,V.al,V.fd,V.d3,V.aC,V.a4,V.T,V.b6,V.de,V.R,V.y,V.ce,U.dB,M.cP,A.cE,A.eH,A.Z,A.cM,A.dc,A.di,A.fT,A.c9,A.cb,A.cc,A.dw,A.ik,F.aV,F.fg,F.bV,F.fC,F.c1,F.hD,F.hE,F.hF,F.hG,F.ba,F.iE,F.iF,F.iI,F.iK,F.iL,F.iM,O.dn,O.d2,O.fU,T.i1,X.kd,X.hW,X.db,V.cI,V.hr,V.hH])
s(J.a,[J.fx,J.cV,J.cW,J.aW,J.bU,J.aX,H.bZ,H.b1,W.f,W.eE,W.bh,W.am,W.F,W.dG,W.ac,W.f3,W.f5,W.dI,W.cO,W.dK,W.f7,W.h,W.dN,W.az,W.fr,W.dP,W.aA,W.fI,W.h2,W.dV,W.dW,W.aE,W.dX,W.e_,W.aG,W.e3,W.e5,W.aI,W.e7,W.aJ,W.ec,W.aq,W.ef,W.i4,W.aL,W.ei,W.i9,W.ix,W.eq,W.es,W.eu,W.ew,W.ey,P.aZ,P.dR,P.b3,P.e1,P.hq,P.ed,P.b8,P.ek,P.eI,P.dF,P.df,P.e9])
s(J.cW,[J.hl,J.bz,J.aY])
t(J.kn,J.aW)
s(J.bU,[J.cU,J.cT])
t(P.fH,P.dU)
s(P.fH,[H.dy,W.iX,W.a0,P.fi])
t(H.l,H.dy)
s(P.i,[H.fa,H.fN,H.cf])
s(H.fa,[H.d_,H.fE])
s(P.fw,[H.fO,H.iR])
t(H.fP,H.d_)
t(H.eW,H.eV)
s(P.bk,[H.hh,H.fz,H.ip,H.eQ,H.hA,P.da,P.af,P.ir,P.im,P.c5,P.eU,P.f1])
s(H.bM,[H.k9,H.hX,H.jR,H.jS,H.jT,P.iT,P.iS,P.iU,P.iV,P.jp,P.jo,P.jH,P.j9,P.ja,P.fG,P.fL,P.f8,P.f9,P.iw,P.it,P.iu,P.iv,P.jr,P.js,P.ju,P.jt,P.jC,P.jB,P.jD,P.jE,W.fb,W.h4,W.h6,W.hz,W.hR,W.j1,W.hf,W.he,W.jd,W.je,W.jn,W.jx,P.jj,P.jI,P.fj,P.fk,P.eK,E.hv,E.hw,E.hx,E.i3,D.fe,D.ff,F.jz,F.jJ,F.jL,F.jM,F.jN,F.k4,F.k5,F.k8,F.jV,F.jK,F.iO,F.iN,F.iG,F.iH,O.fX,O.fY,O.fZ,O.h_,O.h0,O.h1,T.i2,V.k3,V.hs,V.hJ,V.hI,V.hK,L.jW,L.jX,L.jY,L.jZ,L.k_,L.k0,L.k1])
s(H.hX,[H.hP,H.bK])
t(P.fK,P.aB)
s(P.fK,[H.L,W.iW])
t(H.d5,H.b1)
s(H.d5,[H.cj,H.cl])
t(H.ck,H.cj)
t(H.c_,H.ck)
t(H.cm,H.cl)
t(H.d6,H.cm)
s(H.d6,[H.h9,H.ha,H.hb,H.hc,H.hd,H.d7,H.c0])
t(P.j8,P.jy)
t(P.j5,P.jc)
t(P.en,P.fM)
t(P.dz,P.en)
s(P.eS,[P.eM,P.fc])
t(P.eX,P.hS)
s(P.eX,[P.eN,P.fs,P.iA,P.iz])
t(P.iy,P.fc)
s(P.a9,[P.K,P.v])
s(P.af,[P.bt,P.fu])
t(P.iZ,P.bA)
s(W.f,[W.E,W.fh,W.bY,W.aH,W.cn,W.aK,W.ar,W.cp,W.iP,W.cg,P.eL,P.bg])
s(W.E,[W.S,W.aS])
s(W.S,[W.m,P.j])
s(W.m,[W.eF,W.eG,W.bi,W.bj,W.ag,W.fl,W.bT,W.hB,W.dm,W.hU,W.hV,W.c7])
t(W.eY,W.am)
t(W.bN,W.dG)
s(W.ac,[W.f_,W.f0])
t(W.dJ,W.dI)
t(W.cN,W.dJ)
t(W.dL,W.dK)
t(W.f6,W.dL)
t(W.an,W.bh)
t(W.dO,W.dN)
t(W.bQ,W.dO)
t(W.dQ,W.dP)
t(W.bS,W.dQ)
t(W.b9,W.h)
s(W.b9,[W.bp,W.ap,W.bv])
t(W.h3,W.dV)
t(W.h5,W.dW)
t(W.dY,W.dX)
t(W.h7,W.dY)
t(W.e0,W.e_)
t(W.d8,W.e0)
t(W.e4,W.e3)
t(W.hn,W.e4)
t(W.hy,W.e5)
t(W.co,W.cn)
t(W.hM,W.co)
t(W.e8,W.e7)
t(W.hN,W.e8)
t(W.hQ,W.ec)
t(W.eg,W.ef)
t(W.hY,W.eg)
t(W.cq,W.cp)
t(W.hZ,W.cq)
t(W.ej,W.ei)
t(W.i8,W.ej)
t(W.bc,W.ap)
t(W.er,W.eq)
t(W.iY,W.er)
t(W.dH,W.cO)
t(W.et,W.es)
t(W.j2,W.et)
t(W.ev,W.eu)
t(W.dZ,W.ev)
t(W.ex,W.ew)
t(W.jg,W.ex)
t(W.ez,W.ey)
t(W.jk,W.ez)
t(W.j_,W.iW)
t(W.j0,P.dl)
t(W.jm,W.e6)
t(P.ji,P.jh)
t(P.a8,P.j7)
t(P.dS,P.dR)
t(P.fB,P.dS)
t(P.e2,P.e1)
t(P.hi,P.e2)
t(P.c4,P.j)
t(P.ee,P.ed)
t(P.hT,P.ee)
t(P.el,P.ek)
t(P.ia,P.el)
t(P.eJ,P.dF)
t(P.hj,P.bg)
t(P.ea,P.e9)
t(P.hO,P.ea)
s(T.cS,[T.a3,R.dv])
s(E.eO,[Z.cF,A.dg,T.dp])
s(D.W,[D.bn,D.bo,D.A,X.hp])
s(X.hp,[X.d0,X.b0,X.du])
s(O.aT,[D.cY,U.bR])
s(D.eR,[U.eT,U.ah])
t(U.cJ,U.ah)
t(A.fQ,A.dg)
s(A.dw,[A.dx,A.ih,A.ii,A.ij,A.ie,A.Y,A.ig,A.J,A.c8,A.il,A.ca,A.ad,A.bx,A.by])
t(F.hL,F.fg)
t(F.id,F.fC)
t(F.iJ,F.iK)
t(F.hg,F.iL)
t(O.d1,O.dn)
s(O.d2,[O.fR,O.fS,O.ao])
s(O.ao,[O.fV,O.fW])
t(T.i_,T.dp)
t(T.i0,T.i_)
t(X.fn,X.hW)
s(V.cI,[V.f2,V.fp,V.fq,V.hm])
u(H.dy,H.iq)
u(H.cj,P.q)
u(H.ck,H.cQ)
u(H.cl,P.q)
u(H.cm,H.cQ)
u(P.dU,P.q)
u(P.en,P.jq)
u(W.dG,W.eZ)
u(W.dI,P.q)
u(W.dJ,W.G)
u(W.dK,P.q)
u(W.dL,W.G)
u(W.dN,P.q)
u(W.dO,W.G)
u(W.dP,P.q)
u(W.dQ,W.G)
u(W.dV,P.aB)
u(W.dW,P.aB)
u(W.dX,P.q)
u(W.dY,W.G)
u(W.e_,P.q)
u(W.e0,W.G)
u(W.e3,P.q)
u(W.e4,W.G)
u(W.e5,P.aB)
u(W.cn,P.q)
u(W.co,W.G)
u(W.e7,P.q)
u(W.e8,W.G)
u(W.ec,P.aB)
u(W.ef,P.q)
u(W.eg,W.G)
u(W.cp,P.q)
u(W.cq,W.G)
u(W.ei,P.q)
u(W.ej,W.G)
u(W.eq,P.q)
u(W.er,W.G)
u(W.es,P.q)
u(W.et,W.G)
u(W.eu,P.q)
u(W.ev,W.G)
u(W.ew,P.q)
u(W.ex,W.G)
u(W.ey,P.q)
u(W.ez,W.G)
u(P.dR,P.q)
u(P.dS,W.G)
u(P.e1,P.q)
u(P.e2,W.G)
u(P.ed,P.q)
u(P.ee,W.G)
u(P.ek,P.q)
u(P.el,W.G)
u(P.dF,P.aB)
u(P.e9,P.q)
u(P.ea,W.G)})()
var v={mangledGlobalNames:{v:"int",K:"double",a9:"num",k:"String",au:"bool",b2:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.b2,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.ay]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[P.v,[P.i,D.a7]]},{func:1,ret:-1,args:[P.v,[P.i,U.ah]]},{func:1,ret:-1,args:[P.v,[P.i,V.aC]]},{func:1,ret:P.au,args:[W.S,P.k,P.k,W.ch]},{func:1,ret:P.b2,args:[,]},{func:1,ret:P.bw,args:[,,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.au,args:[[P.i,D.a7]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bi.prototype
C.i=W.bj.prototype
C.N=W.ag.prototype
C.Q=J.a.prototype
C.b=J.aW.prototype
C.R=J.cT.prototype
C.c=J.cU.prototype
C.j=J.cV.prototype
C.d=J.bU.prototype
C.a=J.aX.prototype
C.S=J.aY.prototype
C.A=J.hl.prototype
C.Y=P.df.prototype
C.B=W.dm.prototype
C.q=J.bz.prototype
C.C=W.bc.prototype
C.D=W.cg.prototype
C.Z=new P.eN()
C.E=new P.eM()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=new P.hk()
C.e=new P.iy()
C.M=new P.iA()
C.f=new P.j8()
C.n=new P.aU(0)
C.O=new P.aU(5e6)
C.P=new P.ft("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.v])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.X=new H.eW(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.ak=0
$.bL=null
$.kZ=null
$.lY=null
$.lS=null
$.m1=null
$.jO=null
$.jU=null
$.kK=null
$.bD=null
$.ct=null
$.cu=null
$.kD=!1
$.ai=C.f
$.a5=[]
$.ax=null
$.kh=null
$.l4=null
$.l3=null
$.ci=P.kq(P.k,P.fo)
$.lc=null
$.lf=null
$.b5=null
$.ll=null
$.lx=null
$.lA=null
$.lz=null
$.iB=null
$.iC=null
$.iD=null
$.ly=null
$.lD=null
$.le=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oT","m6",function(){return H.lX("_$dart_dartClosure")})
u($,"oU","kQ",function(){return H.lX("_$dart_js")})
u($,"oV","m7",function(){return H.as(H.ic({
toString:function(){return"$receiver$"}}))})
u($,"oW","m8",function(){return H.as(H.ic({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oX","m9",function(){return H.as(H.ic(null))})
u($,"oY","ma",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p0","md",function(){return H.as(H.ic(void 0))})
u($,"p1","me",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p_","mc",function(){return H.as(H.lr(null))})
u($,"oZ","mb",function(){return H.as(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p3","mg",function(){return H.as(H.lr(void 0))})
u($,"p2","mf",function(){return H.as(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ph","kR",function(){return P.nr()})
u($,"p4","mh",function(){return P.nn()})
u($,"pi","ml",function(){return H.mX(H.bC(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"pk","mn",function(){return P.na("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pl","mo",function(){return P.nQ()})
u($,"pj","mm",function(){return P.l6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pb","mk",function(){return Z.ae(0)})
u($,"p5","mi",function(){return Z.ae(511)})
u($,"pd","aQ",function(){return Z.ae(1)})
u($,"pc","aP",function(){return Z.ae(2)})
u($,"p7","aO",function(){return Z.ae(4)})
u($,"pe","be",function(){return Z.ae(8)})
u($,"pf","bf",function(){return Z.ae(16)})
u($,"p8","cz",function(){return Z.ae(32)})
u($,"p9","cA",function(){return Z.ae(64)})
u($,"pa","mj",function(){return Z.ae(96)})
u($,"pg","bJ",function(){return Z.ae(128)})
u($,"p6","aN",function(){return Z.ae(256)})
u($,"oS","m5",function(){return new V.fd(1e-9)})
u($,"oR","z",function(){return $.m5()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bZ,DataView:H.b1,ArrayBufferView:H.b1,Float32Array:H.c_,Float64Array:H.c_,Int16Array:H.h9,Int32Array:H.ha,Int8Array:H.hb,Uint16Array:H.hc,Uint32Array:H.hd,Uint8ClampedArray:H.d7,CanvasPixelArray:H.d7,Uint8Array:H.c0,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.eE,HTMLAnchorElement:W.eF,HTMLAreaElement:W.eG,Blob:W.bh,HTMLBodyElement:W.bi,HTMLCanvasElement:W.bj,CDATASection:W.aS,CharacterData:W.aS,Comment:W.aS,ProcessingInstruction:W.aS,Text:W.aS,CSSPerspective:W.eY,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bN,MSStyleCSSProperties:W.bN,CSS2Properties:W.bN,CSSImageValue:W.ac,CSSKeywordValue:W.ac,CSSNumericValue:W.ac,CSSPositionValue:W.ac,CSSResourceValue:W.ac,CSSUnitValue:W.ac,CSSURLImageValue:W.ac,CSSStyleValue:W.ac,CSSMatrixComponent:W.am,CSSRotation:W.am,CSSScale:W.am,CSSSkew:W.am,CSSTranslation:W.am,CSSTransformComponent:W.am,CSSTransformValue:W.f_,CSSUnparsedValue:W.f0,DataTransferItemList:W.f3,HTMLDivElement:W.ag,DOMException:W.f5,ClientRectList:W.cN,DOMRectList:W.cN,DOMRectReadOnly:W.cO,DOMStringList:W.f6,DOMTokenList:W.f7,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.an,FileList:W.bQ,FileWriter:W.fh,HTMLFormElement:W.fl,Gamepad:W.az,History:W.fr,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.aA,HTMLImageElement:W.bT,KeyboardEvent:W.bp,Location:W.fI,MediaList:W.h2,MessagePort:W.bY,MIDIInputMap:W.h3,MIDIOutputMap:W.h5,MimeType:W.aE,MimeTypeArray:W.h7,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d8,RadioNodeList:W.d8,Plugin:W.aG,PluginArray:W.hn,RTCStatsReport:W.hy,HTMLSelectElement:W.hB,SourceBuffer:W.aH,SourceBufferList:W.hM,SpeechGrammar:W.aI,SpeechGrammarList:W.hN,SpeechRecognitionResult:W.aJ,Storage:W.hQ,CSSStyleSheet:W.aq,StyleSheet:W.aq,HTMLTableElement:W.dm,HTMLTableRowElement:W.hU,HTMLTableSectionElement:W.hV,HTMLTemplateElement:W.c7,TextTrack:W.aK,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.hY,TextTrackList:W.hZ,TimeRanges:W.i4,Touch:W.aL,TouchEvent:W.bv,TouchList:W.i8,TrackDefaultList:W.i9,CompositionEvent:W.b9,FocusEvent:W.b9,TextEvent:W.b9,UIEvent:W.b9,URL:W.ix,VideoTrackList:W.iP,WheelEvent:W.bc,Window:W.cg,DOMWindow:W.cg,CSSRuleList:W.iY,ClientRect:W.dH,DOMRect:W.dH,GamepadList:W.j2,NamedNodeMap:W.dZ,MozNamedAttrMap:W.dZ,SpeechRecognitionResultList:W.jg,StyleSheetList:W.jk,SVGLength:P.aZ,SVGLengthList:P.fB,SVGNumber:P.b3,SVGNumberList:P.hi,SVGPointList:P.hq,SVGScriptElement:P.c4,SVGStringList:P.hT,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b8,SVGTransformList:P.ia,AudioBuffer:P.eI,AudioParamMap:P.eJ,AudioTrackList:P.eL,AudioContext:P.bg,webkitAudioContext:P.bg,BaseAudioContext:P.bg,OfflineAudioContext:P.hj,WebGL2RenderingContext:P.df,SQLResultSetRowList:P.hO})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cp.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.m_,[])
else L.m_([])})})()
//# sourceMappingURL=test.dart.js.map
