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
a[c]=function(){a[c]=function(){H.oP(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kJ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kr:function kr(){},
jR:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
fz:function(){return new P.c8("No element")},
mO:function(){return new P.c8("Too many elements")},
di:function(a,b,c,d){if(c-b<=32)H.ni(a,b,c,d)
else H.nh(a,b,c,d)},
ni:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.m(a,s,a[q])
s=q}C.b.m(a,s,t)}},
nh:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a6(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a6(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
r=p}C.b.m(a2,d,u)
C.b.m(a2,b,s)
C.b.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.D(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.S()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
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
if(typeof g!=="number")return g.S()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
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
H.di(a2,a3,o-2,a5)
H.di(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.D(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.D(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.m(a2,m,a2[o])
C.b.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
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
break}}}H.di(a2,o,n,a5)}else H.di(a2,o,n,a5)},
m:function m(a){this.a=a},
fe:function fe(){},
d1:function d1(){},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fR:function fR(a,b,c){this.a=a
this.b=b
this.$ti=c},
fS:function fS(a,b){this.a=null
this.b=a
this.c=b},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
iS:function iS(a,b){this.a=a
this.b=b},
cS:function cS(){},
iu:function iu(){},
dz:function dz(){},
mG:function(){throw H.d(P.x("Cannot modify unmodifiable Map"))},
eF:function(a){var u,t=H.oQ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oz:function(a){return v.types[a]},
m_:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a2(a)
if(typeof u!=="string")throw H.d(H.ai(a))
return u},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n9:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.D(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.n0(a)+H.lN(H.cA(a),0,null)},
n0:function(a){var u,t,s,r,q,p,o,n=J.O(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$iby){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eF(t.length>1&&C.a.D(t,0)===36?C.a.a8(t,1):t)},
n1:function(){if(!!self.location)return self.location.href
return},
li:function(a){var u,t,s,r,q=J.ad(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
na:function(a){var u,t,s,r=H.c([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ai(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aM(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ai(s))}return H.li(r)},
lj:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ai(s))
if(s<0)throw H.d(H.ai(s))
if(s>65535)return H.na(a)}return H.li(a)},
nb:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bt:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aM(u,10))>>>0,56320|u&1023)}}throw H.d(P.X(a,0,1114111,null,null))},
bs:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n8:function(a){var u=H.bs(a).getFullYear()+0
return u},
n6:function(a){var u=H.bs(a).getMonth()+1
return u},
n2:function(a){var u=H.bs(a).getDate()+0
return u},
n3:function(a){var u=H.bs(a).getHours()+0
return u},
n5:function(a){var u=H.bs(a).getMinutes()+0
return u},
n7:function(a){var u=H.bs(a).getSeconds()+0
return u},
n4:function(a){var u=H.bs(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.ai(a))},
b:function(a,b){if(a==null)J.ad(a)
throw H.d(H.bF(a,b))},
bF:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aj(!0,b,s,null)
u=J.ad(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.J(b,a,s,null,u)
return P.dd(b,s)},
ot:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bu(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bu(a,c,!0,b,"end",u)
return new P.aj(!0,b,"end",null)},
ai:function(a){return new P.aj(!0,a,null,null)},
oo:function(a){if(typeof a!=="number")throw H.d(H.ai(a))
return a},
d:function(a){var u
if(a==null)a=new P.da()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m5})
u.name=""}else u.toString=H.m5
return u},
m5:function(){return J.a2(this.dartException)},
t:function(a){throw H.d(a)},
p:function(a){throw H.d(P.aA(a))},
aw:function(a){var u,t,s,r,q,p
a=H.m3(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ig(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ih:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ls:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lf:function(a,b){return new H.hm(a,b==null?null:b.method)},
ks:function(a,b){var u=b==null,t=u?null:b.method
return new H.fD(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ka(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ks(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lf(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m9()
q=$.ma()
p=$.mb()
o=$.mc()
n=$.mf()
m=$.mg()
l=$.me()
$.md()
k=$.mi()
j=$.mh()
i=r.ae(u)
if(i!=null)return f.$1(H.ks(u,i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.ks(u,i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lf(u,i))}}return f.$1(new H.it(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dk()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aj(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dk()
return a},
kM:function(a){var u
if(a==null)return new H.ee(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ee(a)},
ox:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oF:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oF)
a.$identity=u
return u},
mF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.bJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.am
if(typeof t!=="number")return t.B()
$.am=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l3(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mB(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l3(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mB:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oz,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l2:H.ke
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
mC:function(a,b,c,d){var u=H.ke
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l3:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mE(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mC(t,!r,u,b)
if(t===0){r=$.am
if(typeof r!=="number")return r.B()
$.am=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eS("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.am
if(typeof r!=="number")return r.B()
$.am=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eS("self"):q)+"."+H.e(u)+"("+o+");}")()},
mD:function(a,b,c,d){var u=H.ke,t=H.l2
switch(b?-1:a){case 0:throw H.d(H.nf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mE:function(a,b){var u,t,s,r,q,p,o,n=$.bK
if(n==null)n=$.bK=H.eS("self")
u=$.l1
if(u==null)u=$.l1=H.eS("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mD(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.am
if(typeof u!=="number")return u.B()
$.am=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.am
if(typeof u!=="number")return u.B()
$.am=u+1
return new Function(n+u+"}")()},
kJ:function(a,b,c,d,e,f,g){return H.mF(a,b,c,d,!!e,!!f,g)},
ke:function(a){return a.a},
l2:function(a){return a.c},
eS:function(a){var u,t,s,r=new H.bJ("self","target","receiver","name"),q=J.kp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oK:function(a,b){throw H.d(H.mA(a,H.eF(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.oK(a,b)},
ov:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mA:function(a,b){return new H.eT("CastError: "+P.km(a)+": type '"+H.e(H.ok(a))+"' is not a subtype of type '"+b+"'")},
ok:function(a){var u,t=J.O(a)
if(!!t.$ibL){u=H.ov(t)
if(u!=null)return H.oL(u)
return"Closure"}return H.c6(a)},
oP:function(a){throw H.d(new P.f5(a))},
nf:function(a){return new H.hE(a)},
lY:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cA:function(a){if(a==null)return
return a.$ti},
po:function(a,b,c){return H.k7(a["$a"+H.e(c)],H.cA(b))},
oy:function(a,b,c,d){var u=H.k7(a["$a"+H.e(c)],H.cA(b))
return u==null?null:u[d]},
kL:function(a,b,c){var u=H.k7(a["$a"+H.e(b)],H.cA(a))
return u==null?null:u[c]},
cB:function(a,b){var u=H.cA(a)
return u==null?null:u[b]},
oL:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eF(a[0].name)+H.lN(a,1,b)
if(typeof a=="function")return H.eF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nT:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.k])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a0)p+=" extends "+H.bf(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bf(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bf(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bf(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ow(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bf(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.h(0)+">"},
k7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pm:function(a,b,c){return a.apply(b,H.k7(J.O(b)["$a"+H.e(c)],H.cA(b)))},
pn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oH:function(a){var u,t,s,r,q=$.lZ.$1(a),p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lS.$2(a,q)
if(q!=null){p=$.jP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k3(u)
$.jP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jV[q]=u
return u}if(s==="-"){r=H.k3(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m1(a,u)
if(s==="*")throw H.d(P.is(q))
if(v.leafTags[q]===true){r=H.k3(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m1(a,u)},
m1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k3:function(a){return J.kO(a,!1,null,!!a.$iB)},
oI:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k3(u)
else return J.kO(u,c,null,null)},
oD:function(){if(!0===$.kN)return
$.kN=!0
H.oE()},
oE:function(){var u,t,s,r,q,p,o,n
$.jP=Object.create(null)
$.jV=Object.create(null)
H.oC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m2.$1(q)
if(p!=null){o=H.oI(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oC:function(){var u,t,s,r,q,p,o=C.F()
o=H.bD(C.G,H.bD(C.H,H.bD(C.u,H.bD(C.u,H.bD(C.I,H.bD(C.J,H.bD(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lZ=new H.jS(r)
$.lS=new H.jT(q)
$.m2=new H.jU(p)},
bD:function(a,b){return a(b)||b},
mQ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.P("Illegal RegExp pattern ("+String(p)+")",a,null))},
oN:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ou:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kR:function(a,b,c){var u=H.oO(a,b,c)
return u},
oO:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m3(b),'g'),H.ou(c))},
eZ:function eZ(){},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hm:function hm(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
ka:function ka(a){this.a=a},
ee:function ee(a){this.a=a
this.b=null},
bL:function bL(){},
i1:function i1(){},
hU:function hU(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a){this.a=a},
hE:function hE(a){this.a=a},
N:function N(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fI:function fI(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function(a){return a},
mZ:function(a){return new Int8Array(a)},
ax:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bF(b,a))},
nR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ot(a,b,c))
return b},
c0:function c0(){},
b5:function b5(){},
d5:function d5(){},
c1:function c1(){},
d6:function d6(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
d7:function d7(){},
c2:function c2(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
ow:function(a){return J.l7(a?Object.keys(a):[],null)},
oQ:function(a){return v.mangledGlobalNames[a]},
oJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jQ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kN==null){H.oD()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.is("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kT()]
if(r!=null)return r
r=H.oH(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.kT(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mP:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.l_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.X(a,0,4294967295,"length",null))
return J.l7(new Array(a),b)},
l7:function(a,b){return J.kp(H.c(a,[b]))},
kp:function(a){a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.cV.prototype}if(typeof a=="string")return J.b1.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
cy:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
eD:function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
lX:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.by.prototype
return a},
cz:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.a0))return J.by.prototype
return a},
bH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a0)return a
return J.jQ(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).q(a,b)},
kV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lX(a).p(a,b)},
cE:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m_(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cy(a).i(a,b)},
kc:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m_(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eD(a).m(a,b,c)},
mr:function(a,b){return J.cz(a).D(a,b)},
ms:function(a,b,c){return J.bH(a).fR(a,b,c)},
mt:function(a,b,c,d){return J.bH(a).h9(a,b,c,d)},
mu:function(a,b){return J.cz(a).X(a,b)},
kd:function(a,b){return J.lX(a).hk(a,b)},
eG:function(a,b){return J.eD(a).J(a,b)},
mv:function(a,b,c,d){return J.bH(a).hw(a,b,c,d)},
kW:function(a,b){return J.eD(a).H(a,b)},
mw:function(a){return J.bH(a).ghf(a)},
kX:function(a){return J.bH(a).gc1(a)},
cF:function(a){return J.O(a).gI(a)},
aW:function(a){return J.eD(a).gV(a)},
ad:function(a){return J.cy(a).gl(a)},
kY:function(a){return J.eD(a).i1(a)},
mx:function(a,b){return J.bH(a).i5(a,b)},
my:function(a,b,c){return J.cz(a).t(a,b,c)},
mz:function(a){return J.cz(a).ig(a)},
a2:function(a){return J.O(a).h(a)},
a:function a(){},
fB:function fB(){},
cX:function cX(){},
cY:function cY(){},
hq:function hq(){},
by:function by(){},
b2:function b2(){},
b0:function b0(a){this.$ti=a},
kq:function kq(a){this.$ti=a},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bT:function bT(){},
cW:function cW(){},
cV:function cV(){},
b1:function b1(){}},P={
nt:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ol()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bE(new P.iU(s),1)).observe(u,{childList:true})
return new P.iT(s,u,t)}else if(self.setImmediate!=null)return P.om()
return P.on()},
nu:function(a){self.scheduleImmediate(H.bE(new P.iV(a),0))},
nv:function(a){self.setImmediate(H.bE(new P.iW(a),0))},
nw:function(a){P.kx(C.n,a)},
kx:function(a,b){var u=C.d.a6(a.a,1000)
return P.nB(u<0?0:u,b)},
lr:function(a,b){var u=C.d.a6(a.a,1000)
return P.nC(u<0?0:u,b)},
nB:function(a,b){var u=new P.ek()
u.eB(a,b)
return u},
nC:function(a,b){var u=new P.ek()
u.eC(a,b)
return u},
oe:function(){var u,t
for(;u=$.bC,u!=null;){$.cx=null
t=u.b
$.bC=t
if(t==null)$.cw=null
u.a.$0()}},
oj:function(){$.kH=!0
try{P.oe()}finally{$.cx=null
$.kH=!1
if($.bC!=null)$.kU().$1(P.lT())}},
oh:function(a){var u=new P.dH(a)
if($.bC==null){$.bC=$.cw=u
if(!$.kH)$.kU().$1(P.lT())}else $.cw=$.cw.b=u},
oi:function(a){var u,t,s=$.bC
if(s==null){P.oh(a)
$.cx=$.cw
return}u=new P.dH(a)
t=$.cx
if(t==null){u.b=s
$.bC=$.cx=u}else{u.b=t.b
$.cx=t.b=u
if(u.b==null)$.cw=u}},
lq:function(a,b){var u=$.al
if(u===C.f)return P.kx(a,b)
return P.kx(a,u.hg(b))},
nl:function(a,b){var u=$.al
if(u===C.f)return P.lr(a,b)
return P.lr(a,u.da(b,P.ds))},
lO:function(a,b,c,d,e){var u={}
u.a=d
P.oi(new P.jI(u,e))},
of:function(a,b,c,d){var u,t=$.al
if(t===c)return d.$0()
$.al=c
u=t
try{t=d.$0()
return t}finally{$.al=u}},
og:function(a,b,c,d,e){var u,t=$.al
if(t===c)return d.$1(e)
$.al=c
u=t
try{t=d.$1(e)
return t}finally{$.al=u}},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
ek:function ek(){this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a){this.a=a
this.b=null},
dm:function dm(){},
hX:function hX(){},
ds:function ds(){},
jz:function jz(){},
jI:function jI(a,b){this.a=a
this.b=b},
j9:function j9(){},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function(a,b){return new H.N([a,b])},
kt:function(a,b){return new H.N([a,b])},
mU:function(a){return H.ox(a,new H.N([null,null]))},
d0:function(a){return new P.j6([a])},
kC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nA:function(a,b){var u=new P.dW(a,b)
u.c=a.e
return u},
mN:function(a,b,c){var u,t
if(P.kI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
$.a6.push(a)
try{P.nU(a,u)}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=P.lo(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ko:function(a,b,c){var u,t
if(P.kI(a))return b+"..."+c
u=new P.R(b)
$.a6.push(a)
try{t=u
t.a=P.lo(t.a,a,", ")}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kI:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
nU:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gK(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
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
mT:function(a,b,c){var u=P.mS(b,c)
a.H(0,new P.fK(u))
return u},
l8:function(a,b){var u,t,s=P.d0(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.n(0,a[t])
return s},
ku:function(a){var u,t={}
if(P.kI(a))return"{...}"
u=new P.R("")
try{$.a6.push(a)
u.a+="{"
t.a=!0
J.kW(a,new P.fP(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.b($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j6:function j6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j7:function j7(a){this.a=a
this.c=this.b=null},
dW:function dW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fK:function fK(a){this.a=a},
fL:function fL(){},
r:function r(){},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
aF:function aF(){},
jr:function jr(){},
fQ:function fQ(){},
dA:function dA(a,b){this.a=a
this.$ti=b},
jd:function jd(){},
dX:function dX(){},
eq:function eq(){},
no:function(a,b,c,d){if(b instanceof Uint8Array)return P.np(!1,b,c,d)
return},
np:function(a,b,c,d){var u,t,s=$.mj()
if(s==null)return
u=0===c
if(u&&!0)return P.kA(s,b)
t=b.length
d=P.ba(c,d,t)
if(u&&d===t)return P.kA(s,b)
return P.kA(s,b.subarray(c,d))},
kA:function(a,b){if(P.nr(b))return
return P.ns(a,b)},
ns:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ac(t)}return},
nr:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ac(t)}return},
lQ:function(a,b,c){var u,t,s
for(u=J.cy(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.ai()
if((s&127)!==s)return t-b}return c-b},
l0:function(a,b,c,d,e,f){if(C.d.ba(f,4)!==0)throw H.d(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.P("Invalid base64 padding, more than two '=' characters",a,b))},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
f0:function f0(){},
fg:function fg(){},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fw:function fw(a){this.a=a},
iC:function iC(){},
iE:function iE(){},
jx:function jx(a){this.b=0
this.c=a},
iD:function iD(a){this.a=a},
jw:function jw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eE:function(a,b,c){var u=H.n9(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.P(a,null,null))},
mK:function(a){if(a instanceof H.bL)return a.h(0)
return"Instance of '"+H.e(H.c6(a))+"'"},
mV:function(a,b,c){var u,t,s=J.mP(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l9:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aW(a);u.A();)t.push(u.gK(u))
if(b)return t
return J.kp(t)},
c9:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.ba(b,c,u)
return H.lj(b>0||c<u?C.b.eh(a,b,c):a)}if(!!J.O(a).$ic2)return H.nb(a,b,P.ba(b,c,a.length))
return P.nj(a,b,c)},
nj:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.X(b,0,J.ad(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.X(c,b,J.ad(a),q,q))
t=J.aW(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.X(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.X(c,b,s,q,q))
r.push(t.gK(t))}return H.lj(r)},
nd:function(a){return new H.fC(a,H.mQ(a,!1,!0,!1,!1,!1))},
lo:function(a,b,c){var u=J.aW(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gK(u))
while(u.A())}else{a+=H.e(u.gK(u))
for(;u.A();)a=a+c+H.e(u.gK(u))}return a},
lu:function(){var u=H.n1()
if(u!=null)return P.nn(u)
throw H.d(P.x("'Uri.base' is not supported"))},
er:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mp().b
if(typeof b!=="string")H.t(H.ai(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghv().c2(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bt(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mH:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cN:function(a){if(a>=10)return""+a
return"0"+a},
l4:function(a){return new P.aZ(1000*a)},
km:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a2(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mK(a)},
cG:function(a){return new P.aj(!1,null,null,a)},
l_:function(a,b,c){return new P.aj(!0,a,b,c)},
dd:function(a,b){return new P.bu(null,null,!0,a,b,"Value not in range")},
X:function(a,b,c,d,e){return new P.bu(b,c,!0,a,d,"Invalid value")},
ba:function(a,b,c){if(0>a||a>c)throw H.d(P.X(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.X(b,a,c,"end",null))
return b}return c},
lk:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.d(P.X(a,0,null,b,null))},
J:function(a,b,c,d,e){var u=e==null?J.ad(b):e
return new P.fy(u,!0,a,c,"Index out of range")},
x:function(a){return new P.iv(a)},
is:function(a){return new P.ir(a)},
ln:function(a){return new P.c8(a)},
aA:function(a){return new P.eX(a)},
u:function(a){return new P.dP(a)},
P:function(a,b,c){return new P.fq(a,b,c)},
mW:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kQ:function(a){H.oJ(a)},
nn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.D(a,4)^58)*3|C.a.D(a,0)^100|C.a.D(a,1)^97|C.a.D(a,2)^116|C.a.D(a,3)^97)>>>0
if(u===0)return P.lt(e<e?C.a.t(a,0,e):a,5,f).ge9()
else if(u===32)return P.lt(C.a.t(a,5,e),0,f).ge9()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.w])
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
if(typeof r!=="number")return r.ij()
if(r>=0)if(P.lP(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.v(n)
if(m<n)n=m
if(typeof o!=="number")return o.S()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.S()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.S()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a3(a,"..",o)))j=n>o+2&&C.a.a3(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a3(a,"file",0)){if(q<=0){if(!C.a.a3(a,"/",o)){i="file:///"
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
a=C.a.aS(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a3(a,"http",0)){if(t&&p+3===o&&C.a.a3(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aS(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a3(a,"https",0)){if(t&&p+4===o&&C.a.a3(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aS(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jg(a,r,q,p,o,n,m,k)}return P.nD(a,0,e,r,q,p,o,n,m,k)},
lw:function(a){var u=P.k
return C.b.hB(H.c(a.split("&"),[u]),P.kt(u,u),new P.iA(C.e))},
nm:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ix(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eE(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eE(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iy(a),d=new P.iz(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gav(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nm(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.d.aM(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nD:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nL(a,b,d)
else{if(d===b)P.bA(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nM(a,u,e-1):""
s=P.nI(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.v(g)
q=r<g?P.nK(P.eE(C.a.t(a,r,g),new P.js(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nJ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.kE(a,h+1,i,n):n
return new P.bz(j,t,s,q,p,o,i<c?P.nH(a,i+1,c):n)},
lH:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bA:function(a,b,c){throw H.d(P.P(c,a,b))},
nK:function(a,b){if(a!=null&&a===P.lH(b))return
return a},
nI:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.a.X(a,u)!==93)P.bA(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nF(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.lM(a,C.a.a3(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lv(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.v(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lM(a,C.a.a3(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lv(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.nO(a,b,c)},
nF:function(a,b,c){var u,t=C.a.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.v(c)
u=t<c}else u=!1
return u?t:c},
lM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.kF(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bA(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.t(a,t,u)
l.a+=P.kD(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.v(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.kF(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bA(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kD(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nL:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lJ(C.a.D(a,b)))P.bA(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bA(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.nE(t?a.toLowerCase():a)},
nE:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nM:function(a,b,c){return P.cu(a,b,c,C.V,!1)},
nJ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cu(a,b,c,C.z,!0):C.j.iC(d,new P.jt(),P.k).k(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a1(u,"/"))u="/"+u
return P.nN(u,e,f)},
nN:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a1(a,"/"))return P.nP(a,!u||c)
return P.nQ(a)},
kE:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.cG("Both query and queryParameters specified"))
return P.cu(a,b,c,C.l,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.H(0,new P.ju(new P.jv(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nH:function(a,b,c){return P.cu(a,b,c,C.l,!0)},
kF:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.jR(u)
r=H.jR(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aM(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bt(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kD:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.w])
t[0]=37
t[1]=C.a.D(m,a>>>4)
t[2]=C.a.D(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.d.h1(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.D(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.D(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c9(t,0,null)},
cu:function(a,b,c,d,e){var u=P.lL(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
lL:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.v(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kF(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bA(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kD(u)}}if(m==null)m=new P.R("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.v(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lK:function(a){if(C.a.a1(a,"."))return!0
return C.a.dJ(a,"/.")!==-1},
nQ:function(a){var u,t,s,r,q,p,o
if(!P.lK(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.k(u,"/")},
nP:function(a,b){var u,t,s,r,q,p
if(!P.lK(a))return!b?P.lI(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gav(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gav(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lI(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.k(u,"/")},
lI:function(a){var u,t,s,r=a.length
if(r>=2&&P.lJ(J.mr(a,0)))for(u=1;u<r;++u){t=C.a.D(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nG:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cG("Invalid URL encoding"))}}return u},
kG:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.m(C.a.t(a,b,c))}else{r=H.c([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.D(a,q)
if(t>127)throw H.d(P.cG("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.cG("Truncated URI"))
r.push(P.nG(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iD(!1).c2(r)},
lJ:function(a){var u=a|32
return 97<=u&&u<=122},
lt:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.P(m,a,t))}}if(s<0&&t>b)throw H.d(P.P(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gav(l)
if(r!==44||t!==p+7||!C.a.a3(a,"base64",p+1))throw H.d(P.P("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hK(0,a,o,u)
else{n=P.lL(a,o,u,C.l,!0)
if(n!=null)a=C.a.aS(a,o,u,n)}return new P.iw(a,l,c)},
nS:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mW(22,new P.jD(),P.bw),n=new P.jC(o),m=new P.jE(),l=new P.jF(),k=n.$2(0,225)
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
lP:function(a,b,c,d,e){var u,t,s,r,q,p=$.mq()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
ay:function ay(){},
a7:function a7(a,b){this.a=a
this.b=b},
M:function M(){},
aZ:function aZ(a){this.a=a},
fc:function fc(){},
fd:function fd(){},
bl:function bl(){},
da:function da(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
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
iv:function iv(a){this.a=a},
ir:function ir(a){this.a=a},
c8:function c8(a){this.a=a},
eX:function eX(a){this.a=a},
hp:function hp(){},
dk:function dk(){},
f5:function f5(a){this.a=a},
dP:function dP(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(){},
w:function w(){},
i:function i(){},
fA:function fA(){},
o:function o(){},
Q:function Q(){},
b6:function b6(){},
ab:function ab(){},
a0:function a0(){},
k:function k(){},
R:function R(a){this.a=a},
iA:function iA(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(){},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(){},
jC:function jC(a){this.a=a},
jE:function jE(){},
jF:function jF(){},
jg:function jg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
or:function(a){var u,t=J.O(a)
if(!!t.$iaE){u=t.gde(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ep(a.data,a.height,a.width)},
oq:function(a){if(a instanceof P.ep)return{data:a.a,height:a.b,width:a.c}
return a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kt(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
op:function(a){var u={}
a.H(0,new P.jJ(u))
return u},
ji:function ji(){},
jk:function jk(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(){},
j5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j8:function j8(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
fF:function fF(){},
b7:function b7(){},
hn:function hn(){},
hu:function hu(){},
c7:function c7(){},
hY:function hY(){},
j:function j(){},
bb:function bb(){},
ie:function ie(){},
dU:function dU(){},
dV:function dV(){},
e4:function e4(){},
e5:function e5(){},
eg:function eg(){},
eh:function eh(){},
en:function en(){},
eo:function eo(){},
bw:function bw(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(a){this.a=a},
eO:function eO(){},
bh:function bh(){},
ho:function ho(){},
dI:function dI(){},
df:function df(){},
hT:function hT(){},
ec:function ec(){},
ed:function ed(){}},W={
kZ:function(){var u=document.createElement("a")
return u},
kg:function(){var u=document.createElement("canvas")
return u},
mJ:function(a,b,c){var u=document.body,t=(u&&C.r).ad(u,a,b,c)
t.toString
u=new H.ci(new W.a1(t),new W.ff(),[W.E])
return u.gaF(u)},
kj:function(a){return"wheel"},
bN:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bH(a)
t=u.ge5(a)
if(typeof t==="string")r=u.ge5(a)}catch(s){H.ac(s)}return r},
mM:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ac(u)}return s},
j4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lF:function(a,b,c,d){var u=W.j4(W.j4(W.j4(W.j4(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.lR(new W.j2(c),W.h)
if(u!=null&&!0)J.mt(a,b,u,!1)
return new W.j1(a,b,u,!1)},
lE:function(a){var u=W.kZ(),t=window.location
u=new W.ck(new W.jc(u,t))
u.eu(a)
return u},
nx:function(a,b,c,d){return!0},
ny:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lG:function(){var u=P.k,t=P.l8(C.o,u),s=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.d0(u),P.d0(u),P.d0(u),null)
t.eA(null,new H.fT(C.o,new W.jo(),[H.cB(C.o,0),u]),s,null)
return t},
lR:function(a,b){var u=$.al
if(u===C.f)return a
return u.da(a,b)},
n:function n(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
aX:function aX(){},
f1:function f1(){},
H:function H(){},
bM:function bM(){},
f2:function f2(){},
ae:function ae(){},
ao:function ao(){},
f3:function f3(){},
f4:function f4(){},
f7:function f7(){},
ak:function ak(){},
f9:function f9(){},
cP:function cP(){},
cQ:function cQ(){},
fa:function fa(){},
fb:function fb(){},
iY:function iY(a,b){this.a=a
this.b=b},
S:function S(){},
ff:function ff(){},
h:function h(){},
f:function f(){},
ap:function ap(){},
bP:function bP(){},
fl:function fl(){},
fp:function fp(){},
aD:function aD(){},
fv:function fv(){},
bR:function bR(){},
aE:function aE(){},
bS:function bS(){},
bq:function bq(){},
fM:function fM(){},
h7:function h7(){},
bZ:function bZ(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ha:function ha(){},
hb:function hb(a){this.a=a},
aG:function aG(){},
hc:function hc(){},
at:function at(){},
a1:function a1(a){this.a=a},
E:function E(){},
d8:function d8(){},
aJ:function aJ(){},
hs:function hs(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hF:function hF(){},
aK:function aK(){},
hQ:function hQ(){},
aL:function aL(){},
hR:function hR(){},
aM:function aM(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
au:function au(){},
dn:function dn(){},
hZ:function hZ(){},
i_:function i_(){},
ca:function ca(){},
aN:function aN(){},
av:function av(){},
i2:function i2(){},
i3:function i3(){},
i8:function i8(){},
aO:function aO(){},
bv:function bv(){},
ic:function ic(){},
id:function id(){},
bc:function bc(){},
iB:function iB(){},
iQ:function iQ(){},
be:function be(){},
cj:function cj(){},
iZ:function iZ(){},
dK:function dK(){},
j3:function j3(){},
e1:function e1(){},
jh:function jh(){},
jl:function jl(){},
iX:function iX(){},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j2:function j2(a){this.a=a},
ck:function ck(a){this.a=a},
I:function I(){},
d9:function d9(a){this.a=a},
hk:function hk(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(){},
je:function je(){},
jf:function jf(){},
jn:function jn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jo:function jo(){},
jm:function jm(){},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aI:function aI(){},
jc:function jc(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
jy:function jy(a){this.a=a},
dJ:function dJ(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
cq:function cq(){},
cr:function cr(){},
ea:function ea(){},
eb:function eb(){},
ef:function ef(){},
ei:function ei(){},
ej:function ej(){},
cs:function cs(){},
ct:function ct(){},
el:function el(){},
em:function em(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){}},T={
K:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.u("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.D(a,0)
t=C.a.D(b,0)
s=new T.hx()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new T.hG()
u.eq(a)
return u},
az:function az(){},
cU:function cU(){},
b4:function b4(){},
a4:function a4(){this.a=null},
hx:function hx(){this.b=this.a=null},
hG:function hG(){this.a=null},
dq:function dq(){},
i4:function i4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i6:function i6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
m0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=34067,a5="modifiers",a6=V.ng("Test 022"),a7=W.kg()
a7.className="pageLargeCanvas"
a7.id=a2
a6.a.appendChild(a7)
u=[P.k]
a6.d7(H.c(["Test of the Material Lighting shader with a textured point light."],u))
a6.h8(H.c(["shapes"],u))
a6.d7(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.t(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.nk(t,!0,!0,!0,!1)
r=s.f
q=r.a
p=q.createTexture()
q.bindTexture(a4,p)
q.texParameteri(a4,10242,10497)
q.texParameteri(a4,10243,10497)
q.texParameteri(a4,10241,9729)
q.texParameteri(a4,10240,9729)
q.bindTexture(a4,a3)
o=new T.i4()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aJ(o,p,"../resources/earthColor/posx.png",34069,!1,!1)
r.aJ(o,p,"../resources/earthColor/negx.png",34070,!1,!1)
r.aJ(o,p,"../resources/earthColor/posy.png",34071,!1,!1)
r.aJ(o,p,"../resources/earthColor/negy.png",34072,!1,!1)
r.aJ(o,p,"../resources/earthColor/posz.png",34073,!1,!1)
r.aJ(o,p,"../resources/earthColor/negz.png",34074,!1,!1)
n=U.kn()
n.n(0,U.eY(V.le(0,0,2)))
r=new U.dg()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seb(0)
r.sdY(0,0)
r.se4(0)
q=r.d
if(!(Math.abs(q-0.5)<$.z().a)){r.d=0.5
q=new D.y("deltaYaw",q,0.5)
q.b=!0
r.G(q)}q=r.e
if(!(Math.abs(q-0.5)<$.z().a)){r.e=0.5
q=new D.y("deltaPitch",q,0.5)
q.b=!0
r.G(q)}q=r.f
if(!(Math.abs(q-0)<$.z().a)){r.f=0
q=new D.y("deltaRoll",q,0)
q.b=!0
r.G(q)}n.n(0,r)
m=E.kl()
r=U.kn()
r.n(0,U.eY(V.kv(0.2,0.2,0.2,1)))
r.n(0,n)
m.saQ(r)
m.saa(0,F.m4(8,8))
r=O.la()
q=r.f
l=q.c
if(!l.c)q.bS(new A.Z(l.a,!1,!0))
l=q.e
if(l!==o){if(l!=null)l.gu().L(0,q.gbd())
k=q.e
q.e=o
o.gu().n(0,q.gbd())
l=new D.y(q.b+".textureCube",k,q.e)
l.b=!0
q.a.a_(l)}m.sb8(r)
j=new D.br()
j.c=new V.V(1,1,1)
j.r=1
j.y=j.x=0
j.z=!0
j.a=V.bY()
k=j.b
j.b=n
n.gu().n(0,j.gbx())
r=new D.y("mover",k,j.b)
r.b=!0
j.a4(r)
i=new V.V(1,1,1)
if(!j.c.q(0,i)){k=j.c
j.c=i
r=new D.y("color",k,i)
r.b=!0
j.a4(r)}r=j.d
if(r!==o){if(r!=null)r.gu().L(0,j.gbx())
k=j.d
j.d=o
o.gu().n(0,j.gbx())
r=new D.y("texture",k,j.d)
r.b=!0
j.a4(r)}r=$.lD
if(r==null){r=new V.ch(1,0.00390625,0.0000152587890625,0)
$.lD=r
h=r}else h=r
if(!J.D(j.f,h)){k=j.f
j.f=h
r=new D.y("shadowAdjust",k,h)
r.b=!0
j.a4(r)}r=j.r
if(!(Math.abs(r-1)<$.z().a)){j.r=1
r=new D.y("attenuation0",r,1)
r.b=!0
j.a4(r)}r=j.x
if(!(Math.abs(r-0.15)<$.z().a)){j.x=0.15
r=new D.y("attenuation1",r,0.15)
r.b=!0
j.a4(r)}r=j.y
if(!(Math.abs(r-0.05)<$.z().a)){j.y=0.05
r=new D.y("attenuation2",r,0.05)
r.b=!0
j.a4(r)}g=O.la()
g.dx.n(0,j)
r=g.r
r.saZ(0,new V.V(0.1,0.1,0.1))
r=g.x
r.saZ(0,new V.V(1,1,1))
r=g.z
r.saZ(0,new V.V(1,1,1))
r=g.z
r.bS(new A.Z(!0,!1,r.c.c))
r.d_(100)
f=E.kl()
f.saQ(U.eY(V.kv(3,3,3,1)))
r=F.kK(1,a3,a3,1)
r.cb()
f.saa(0,r)
e=E.kl()
e.saa(0,F.m6())
d=U.kn()
r=s.x
q=new U.dD()
l=U.ki()
l.sct(0,!0)
l.sci(6.283185307179586)
l.sck(0)
l.sY(0,0)
l.scj(100)
l.sW(0)
l.sc4(0.5)
q.b=l
c=q.gaK()
l.gu().n(0,c)
l=U.ki()
l.sct(0,!0)
l.sci(6.283185307179586)
l.sck(0)
l.sY(0,0)
l.scj(100)
l.sW(0)
l.sc4(0.5)
q.c=l
l.gu().n(0,c)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
b=new X.af(!1,!1,!1)
k=q.d
q.d=b
l=new D.y(a5,k,b)
l.b=!0
q.G(l)
l=q.f
if(l!==!1){q.f=!1
l=new D.y("invertX",l,!1)
l.b=!0
q.G(l)}l=q.r
if(l!==!1){q.r=!1
l=new D.y("invertY",l,!1)
l.b=!0
q.G(l)}q.aY(r)
d.n(0,q)
r=s.x
q=new U.dC()
l=U.ki()
l.sct(0,!0)
l.sci(6.283185307179586)
l.sck(0)
l.sY(0,0)
l.scj(100)
l.sW(0)
l.sc4(0.2)
q.b=l
l.gu().n(0,q.gaK())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
b=new X.af(!0,!1,!1)
k=q.c
q.c=b
l=new D.y(a5,k,b)
l.b=!0
q.G(l)
q.aY(r)
d.n(0,q)
r=s.x
q=new U.dE()
q.c=0.01
q.e=q.d=0
b=new X.af(!1,!1,!1)
q.b=b
l=new D.y(a5,a3,b)
l.b=!0
q.G(l)
q.aY(r)
d.n(0,q)
d.n(0,U.eY(V.le(0,0,5)))
a=new M.cR()
a.a=!0
r=O.kh(E.aC)
a.e=r
r.bb(a.gf6(),a.gf8())
a.y=a.x=a.r=a.f=null
a0=X.mL(a3)
a1=new X.db()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.saQ(a3)
r=a1.c
if(!(Math.abs(r-1.0471975511965976)<$.z().a)){a1.c=1.0471975511965976
r=new D.y("fov",r,1.0471975511965976)
r.b=!0
a1.aH(r)}r=a1.d
if(!(Math.abs(r-0.1)<$.z().a)){a1.d=0.1
r=new D.y("near",r,0.1)
r.b=!0
a1.aH(r)}r=a1.e
if(!(Math.abs(r-2000)<$.z().a)){a1.e=2000
r=new D.y("far",r,2000)
r.b=!0
a1.aH(r)}r=a.b
if(r!==a1){if(r!=null)r.gu().L(0,a.gaq())
k=a.b
a.b=a1
a1.gu().n(0,a.gaq())
r=new D.y("camera",k,a.b)
r.b=!0
a.aw(r)}r=a.c
if(r!==a0){if(r!=null)r.gu().L(0,a.gaq())
k=a.c
a.c=a0
a0.gu().n(0,a.gaq())
r=new D.y("target",k,a.c)
r.b=!0
a.aw(r)}a.sb8(a3)
a.sb8(g)
a.e.n(0,f)
a.e.n(0,e)
a.e.n(0,m)
a.b.saQ(d)
r=s.d
if(r!==a){if(r!=null)r.gu().L(0,s.gcE())
s.d=a
a.gu().n(0,s.gcE())
s.cF()}r=new V.hv("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
r.aX(0,"Cube",new T.jX(e))
r.aX(0,"Cylinder",new T.jY(e))
r.aX(0,"Cone",new T.jZ(e))
r.aX(0,"Sphere",new T.k_(e))
r.d5(0,"Toroid",new T.k0(e),!0)
r.aX(0,"Knot",new T.k1(e))
u=s.Q
if(u==null)u=s.Q=D.F()
r=u.b
u=r==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):r
u.push(new T.k2(a6,g))
V.oM(s)},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b}},R={
ia:function(){var u=new R.i9(),t=P.k
u.a=new H.N([t,R.dl])
u.b=new H.N([t,R.du])
return u},
dl:function dl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.b=a
this.c=null},
i9:function i9(){this.c=this.b=this.a=null},
dw:function dw(a){this.b=a
this.a=this.c=null}},O={
kh:function(a){var u=new O.aY([a])
u.bw(a)
return u},
aY:function aY(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
la:function(){var u,t=new O.d3(),s=O.kh(V.ar)
t.e=s
s.bb(t.gf0(),t.gf2())
s=new O.aq(t,"emission")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
t.f=s
s=new O.aq(t,"ambient")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
t.r=s
s=new O.aq(t,"diffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
t.x=s
s=new O.aq(t,"invDiffuse")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
t.y=s
s=new O.h_(t,"specular")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=100
t.z=s
s=new O.fW(t,"bump")
s.c=new A.Z(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aq(t,"reflect")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
t.cx=s
s=new O.fZ(t,"refract")
s.c=new A.Z(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=1
t.cy=s
s=new O.fV(t,"alpha")
s.c=new A.Z(!1,!1,!1)
s.f=1
t.db=s
s=new D.d_()
s.bw(D.a8)
s.e=H.c([],[D.f8])
s.f=H.c([],[D.br])
s.r=H.c([],[D.hS])
s.y=s.x=null
s.cw(s.geZ(),s.gfC(),s.gfG())
t.dx=s
u=new O.fY()
u.b=new V.an(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.x
s=u==null?s.x=D.F():u
s.n(0,t.gfT())
s=t.dx
u=s.y
s=u==null?s.y=D.F():u
s.n(0,t.gbd())
t.fr=null
return t},
d3:function d3(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(){},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
fV:function fV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aq:function aq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fY:function fY(){var _=this
_.e=_.d=_.c=_.b=null},
fZ:function fZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dp:function dp(){}},E={
kl:function(){var u,t=new E.aC()
t.a=""
t.b=!0
u=O.kh(E.aC)
t.y=u
u.bb(t.ghL(),t.ghO())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.saa(0,null)
t.sb8(null)
t.saQ(null)
return t},
ne:function(a,b){var u=new E.hy(a)
u.ep(a,b)
return u},
nk:function(a,b,c,d,e){var u,t,s=J.O(a)
if(!!s.$ibk)return E.lp(a,!0,!0,!0,!1)
u=W.kg()
t=u.style
t.width="100%"
t.height="100%"
s.gc1(a).n(0,u)
return E.lp(u,!0,!0,!0,!1)},
lp:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dr(),p=C.i.cu(a,"webgl2",P.mU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.u("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.ne(p,a)
u=new T.i5(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dB(a)
t=new X.fE()
t.c=new X.af(!1,!1,!1)
t.d=P.d0(P.w)
u.b=t
t=new X.hd(u)
t.f=0
t.r=V.b8()
t.x=V.b8()
t.ch=t.Q=1
u.c=t
t=new X.fN(u)
t.r=0
t.x=V.b8()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ib(u)
t.f=V.b8()
t.r=V.b8()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.dm,P.a0]])
u.z=t
s=document
t.push(W.U(s,"contextmenu",u.gfa(),!1))
u.z.push(W.U(a,"focus",u.gfg(),!1))
u.z.push(W.U(a,"blur",u.gf4(),!1))
u.z.push(W.U(s,"keyup",u.gfk(),!1))
u.z.push(W.U(s,"keydown",u.gfi(),!1))
u.z.push(W.U(a,"mousedown",u.gfo(),!1))
u.z.push(W.U(a,"mouseup",u.gft(),!1))
u.z.push(W.U(a,r,u.gfq(),!1))
t=u.z
W.kj(a)
W.kj(a)
t.push(W.U(a,W.kj(a),u.gfv(),!1))
u.z.push(W.U(s,r,u.gfc(),!1))
u.z.push(W.U(s,"mouseup",u.gfe(),!1))
u.z.push(W.U(s,"pointerlockchange",u.gfz(),!1))
u.z.push(W.U(a,"touchstart",u.gfM(),!1))
u.z.push(W.U(a,"touchend",u.gfI(),!1))
u.z.push(W.U(a,"touchmove",u.gfK(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cY()
return q},
eR:function eR(){},
aC:function aC(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
dr:function dr(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i7:function i7(a){this.a=a}},Z={
kB:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.dG(b,u)},
ah:function(a){return new Z.aP(a)},
dG:function dG(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iR:function iR(a){this.a=a},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a){this.a=a}},D={
F:function(){var u=new D.bm()
u.d=0
return u},
eU:function eU(){},
bm:function bm(){var _=this
_.d=_.c=_.b=_.a=null},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
W:function W(){this.b=null},
bo:function bo(){this.b=null},
bp:function bp(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f8:function f8(){},
a8:function a8(){},
d_:function d_(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
br:function br(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(){}},X={cK:function cK(a,b){this.a=a
this.b=b},cZ:function cZ(a,b){this.a=a
this.b=b},fE:function fE(){var _=this
_.d=_.c=_.b=_.a=null},d2:function d2(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fN:function fN(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},af:function af(a,b,c){this.a=a
this.b=b
this.c=c},aH:function aH(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hd:function hd(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ht:function ht(){},dv:function dv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ib:function ib(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dB:function dB(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mL:function(a){var u=new X.fr(),t=new V.an(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lm
if(t==null){t=V.ll(0,0,1,1)
$.lm=t}u.r=t
return u},
kf:function kf(){},
fr:function fr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(){}},V={
kb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.ba(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.a.af("null",c)
return C.a.af(C.c.e7(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bG:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.k])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.af(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
kP:function(a){return C.c.ib(Math.pow(2,C.R.cc(Math.log(H.oo(a))/Math.log(2))))},
bY:function(){var u=$.h6
return u==null?$.h6=V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
le:function(a,b,c){return V.as(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kv:function(a,b,c,d){return V.as(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lb:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.as(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lc:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.as(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ld:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.as(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
b8:function(){var u=$.lh
return u==null?$.lh=new V.a5(0,0):u},
n_:function(){var u=$.c4
return u==null?$.c4=new V.T(0,0,0):u},
ll:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.de(a,b,c,d)},
cg:function(){var u=$.lC
return u==null?$.lC=new V.A(0,0,0):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.a=a},
d4:function d4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ar:function ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oM:function(a){P.nl(C.O,new V.k4(a))},
ng:function(a){var u=new V.hL()
u.es(a,!0)
return u},
cL:function cL(){},
k4:function k4(a){this.a=a},
f6:function f6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ft:function ft(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hr:function hr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){this.a=a
this.c=null},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a}},U={
ki:function(){var u=new U.eW()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eY:function(a){var u=new U.cM()
u.a=a
return u},
kn:function(){var u=new U.bQ()
u.bw(U.a9)
u.bb(u.gex(),u.gfE())
u.e=null
u.f=V.bY()
u.r=0
return u},
eW:function eW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dg:function dg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cR:function cR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mX:function(a,b){var u=a.b1,t=new A.fU(b,u)
t.er(b,u)
t.eo(a,b)
return t},
mY:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gao(a1)+a2.gao(a2)+a3.gao(a3)+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.p)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.p)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
for(u=b1.length,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
if(!a7.a)q=a7.c
else q=!0
if(!q)if(!a8.a){q=a8.c
p=q}else p=!0
else p=!0
if(!a2.a)q=a2.c
else q=!0
if(!q){if(!a3.a)q=a3.c
else q=!0
if(!q){if(!a4.a)q=a4.c
else q=!0
if(!q)if(!a5.a)q=a5.c
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a5.a
if(q)n=a5.c
else n=!0
m=n||u>0||p
if(!a3.a)u=a3.c
else u=!0
if(!u){if(!a4.a)u=a4.c
else u=!0
if(!u){if(q)u=a5.c
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a6.a)u=a6.c
else u=!0
k=u||p}else k=!0
if(!a6.a)j=a6.c
else j=!0
i=a1.c||a2.c||a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c
h=a0>0
g=k||j||m||!1
b=b&&i
f=$.aU()
if(k){u=$.aT()
f=new Z.aP(f.a|u.a)}if(j){u=$.aS()
f=new Z.aP(f.a|u.a)}if(i){u=$.aV()
f=new Z.aP(f.a|u.a)}if(h){u=$.aR()
f=new Z.aP(f.a|u.a)}return new A.fX(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
jG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jH:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jG(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.k8(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
nY:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jG(b,t,"emission")
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
nV:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jH(b,t,"ambient")
b.a+="\n"},
nW:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jH(b,t,"diffuse")
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
nZ:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jH(b,t,"invDiffuse")
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
o4:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jH(b,t,"specular")
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
o0:function(a,b){var u,t,s
if(!a.k3)return
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
o2:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jG(b,t,"reflect")
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
o3:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jG(b,t,"refract")
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
nX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.k8(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ai()
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
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
o1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.k8(t)
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
if(typeof u!=="number")return u.ai()
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
o=a.b
if(!o.a)o=o.c
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
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.k8(t)
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
if(typeof u!=="number")return u.ai()
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
r=a.b
if(!r.a)r=r.c
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
o_:function(a,b){var u,t
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
u=b.a+="   return "+C.b.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
o6:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.R("")
i.a="precision mediump float;\n"
i.a=k
u=a.k3
if(u){i.a=j
t=j}else t=k
if(a.k4){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
i.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k1){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k2?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.dx)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.nY(a,i)
A.nV(a,i)
A.nW(a,i)
A.nZ(a,i)
A.o4(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.o2(a,i)
A.o3(a,i)}A.o0(a,i)
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
r=a.id
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.p)(q),++n)A.nX(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.p)(q),++n)A.o1(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.p)(q),++n)A.o5(a,q[n],i)
A.o_(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.k])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.p)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.p)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.p)(u),++n){r=u[n].h(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.b.k(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
o7:function(a,b){var u,t,s
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
o9:function(a,b){var u
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
o8:function(a,b){var u
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
ob:function(a,b){var u,t
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
oc:function(a,b){var u,t
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
oa:function(a,b){var u
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
od:function(a,b){var u
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
k8:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a8(a,1)},
ky:function(a,b,c,d,e){var u=new A.ij(a,c,e)
u.f=d
P.mV(d,0,P.w)
return u},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b){var _=this
_.dl=_.it=_.dk=_.bj=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iB=_.iA=_.iz=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.dB=_.iy=_.dA=_.dz=_.ix=_.dw=_.dv=_.du=_.iw=_.dt=_.ds=_.dr=_.iv=_.dq=_.dn=_.iu=_.dm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cO:function cO(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
dj:function dj(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b1=b3
_.bj=b4},
cc:function cc(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ce:function ce(a,b,c,d,e,f,g,h,i,j){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dh:function dh(){},
dx:function dx(){},
ip:function ip(a){this.a=a},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kK:function(a,b,c,d){var u=F.kw()
F.cv(u,b,c,d,a,1,0,0,1)
F.cv(u,b,c,d,a,0,1,0,3)
F.cv(u,b,c,d,a,0,0,1,2)
F.cv(u,b,c,d,a,-1,0,0,0)
F.cv(u,b,c,d,a,0,-1,0,0)
F.cv(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
jB:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cv:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.A(u+a3,t+a1,s+a2)
q=new V.A(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.A(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jB(i)
l=F.jB(j.b)
k=F.kS(d,a0,new F.jA(j,F.jB(j.c),F.jB(j.d),l,m,c),b)
if(k!=null)a.b5(k)},
lW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kw()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.bd])
q=u.a
p=new V.A(0,0,t)
p=p.v(0,Math.sqrt(p.C(p)))
r.push(q.hc(new V.b9(a,-1,-1,-1),new V.an(1,1,1,1),new V.T(0,0,c),new V.A(0,0,t),new V.a5(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.v(k)
j=new V.A(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dF(new V.b9(a,-1,-1,-1),null,new V.an(i,g,h,1),new V.T(m*k,l*k,c),new V.A(0,0,t),new V.a5(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.ha(r)
return u},
lU:function(a,b,c){return F.os(!0,a,1,new F.jK(1,c),b)},
os:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kS(c,e,new F.jM(d),null)
if(u==null)return
u.au()
u.bX()
if(b)u.b5(F.lW(3,!1,1,new F.jN(d),e))
u.b5(F.lW(1,!0,-1,new F.jO(d),e))
return u},
m4:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.k5()
t=F.kK(a,null,new F.k6(s,1),b)
t.bX()
return t},
m6:function(){return F.lV(15,30,0.5,1,new F.k9())},
oG:function(){return F.lV(12,120,0.3,1,new F.jW(3,2))},
lV:function(a,b,c,d,e){var u=F.kS(a,b,new F.jL(e,d,b,c),null)
if(u==null)return
u.au()
u.bX()
return u},
kS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kw()
t=H.c([],[F.bd])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dF(g,g,new V.an(p,0,0,1),g,g,new V.a5(r,1),g,g,0)
q.n(0,o)
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
o=F.dF(g,g,new V.an(j,i,h,1),g,g,new V.a5(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c3(d))}}u.d.hb(a+1,b+1,t)
return u},
bO:function(a,b,c){var u=new F.b_(),t=a.a
if(t==null)H.t(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.u("May not create a face with vertices attached to different shapes."))
u.bV(a)
u.bW(b)
u.fY(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
mR:function(a,b){var u=new F.bU(),t=a.a
if(t==null)H.t(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.u("May not create a line with vertices attached to different shapes."))
u.bV(a)
u.bW(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kw:function(){var u=new F.hH(),t=new F.iF(u)
t.b=!1
t.c=H.c([],[F.bd])
u.a=t
t=new F.hK(u)
t.b=H.c([],[F.c3])
u.b=t
t=new F.hJ(u)
t.b=H.c([],[F.bU])
u.c=t
t=new F.hI(u)
t.b=H.c([],[F.b_])
u.d=t
u.e=null
return u},
dF:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bd(),r=new F.iN()
r.b=H.c([],[F.c3])
s.b=r
r=new F.iJ()
u=[F.bU]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.iG()
u=[F.b_]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.mk()
s.e=0
r=$.aU()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aT().a)!==0?e:t
s.x=(u&$.aS().a)!==0?b:t
s.y=(u&$.bg().a)!==0?f:t
s.z=(u&$.aV().a)!==0?g:t
s.Q=(u&$.ml().a)!==0?c:t
s.ch=(u&$.bI().a)!==0?i:0
s.cx=(u&$.aR().a)!==0?a:t
return s},
jA:function jA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jK:function jK(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
k5:function k5(){},
k6:function k6(a,b){this.a=a
this.b=b},
k9:function k9(){},
jW:function jW(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(){},
hP:function hP(){},
bU:function bU(){this.b=this.a=null},
fG:function fG(){},
ii:function ii(){},
c3:function c3(){this.a=null},
hH:function hH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
bd:function bd(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iP:function iP(a){this.a=a},
iO:function iO(a){this.a=a},
iF:function iF(a){this.a=a
this.c=this.b=null},
iG:function iG(){this.d=this.c=this.b=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(){this.c=this.b=null},
iL:function iL(){},
iK:function iK(){},
iM:function iM(){},
hl:function hl(){},
iN:function iN(){this.b=null}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kr.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.c5(a)},
h:function(a){return"Instance of '"+H.e(H.c6(a))+"'"}}
J.fB.prototype={
h:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iay:1}
J.cX.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gI:function(a){return 0}}
J.cY.prototype={
gI:function(a){return 0},
h:function(a){return String(a)}}
J.hq.prototype={}
J.by.prototype={}
J.b2.prototype={
h:function(a){var u=a[$.m8()]
if(u==null)return this.el(a)
return"JavaScript function for "+H.e(J.a2(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b0.prototype={
e1:function(a,b){if(!!a.fixed$length)H.t(P.x("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dd(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aA(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
hH:function(a){return this.k(a,"")},
hA:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.aA(a))}return u},
hB:function(a,b,c){return this.hA(a,b,c,null)},
hz:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aA(a))}throw H.d(H.fz())},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
eh:function(a,b,c){if(b<0||b>a.length)throw H.d(P.X(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.X(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.cB(a,0)])
return H.c(a.slice(b,c),[H.cB(a,0)])},
ghy:function(a){if(a.length>0)return a[0]
throw H.d(H.fz())},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fz())},
d8:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aA(a))}return!1},
bu:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.di(a,0,a.length-1,b)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.ko(a,"[","]")},
gV:function(a){return new J.a3(a,a.length)},
gI:function(a){return H.c5(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.x("set length"))
if(b<0)throw H.d(P.X(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.bF(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bF(a,b))
a[b]=c},
$ii:1,
$io:1}
J.kq.prototype={}
J.a3.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bT.prototype={
hk:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ai(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
ib:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.x(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.x(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.x(""+a+".round()"))},
e7:function(a,b){var u
if(b>20)throw H.d(P.X(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.X(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.p("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.d(H.ai(b))
return a*b},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
en:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.d0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h1:function(a,b){if(b<0)throw H.d(H.ai(b))
return this.d0(a,b)},
d0:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iab:1}
J.cW.prototype={$iw:1}
J.cV.prototype={}
J.b1.prototype={
X:function(a,b){if(b<0)throw H.d(H.bF(a,b))
if(b>=a.length)H.t(H.bF(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.bF(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.d(P.l_(b,null,null))
return a+b},
aS:function(a,b,c,d){var u,t
c=P.ba(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a3:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.a3(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.d(P.dd(b,null))
if(b>c)throw H.d(P.dd(b,null))
if(c>a.length)throw H.d(P.dd(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.t(a,b,null)},
ig:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.X(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dJ:function(a,b){return this.bk(a,b,0)},
h:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ik:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.a.X(this.a,b)},
$ar:function(){return[P.w]},
$ai:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.fe.prototype={}
H.d1.prototype={
gV:function(a){return new H.bV(this,this.gl(this))},
bs:function(a,b){return this.ek(0,b)}}
H.bV.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.cy(s),q=r.gl(s)
if(t.b!==q)throw H.d(P.aA(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.fR.prototype={
gV:function(a){return new H.fS(J.aW(this.a),this.b)},
gl:function(a){return J.ad(this.a)},
J:function(a,b){return this.b.$1(J.eG(this.a,b))},
$ai:function(a,b){return[b]}}
H.fS.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gK(t))
return!0}u.a=null
return!1},
gK:function(a){return this.a}}
H.fT.prototype={
gl:function(a){return J.ad(this.a)},
J:function(a,b){return this.b.$1(J.eG(this.a,b))},
$ad1:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.ci.prototype={
gV:function(a){return new H.iS(J.aW(this.a),this.b)}}
H.iS.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.cS.prototype={}
H.iu.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify an unmodifiable list"))}}
H.dz.prototype={}
H.eZ.prototype={
h:function(a){return P.ku(this)},
m:function(a,b,c){return H.mG()},
$iQ:1}
H.f_.prototype={
gl:function(a){return this.a},
bh:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bh(0,b))return
return this.cR(b)},
cR:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cR(s))}}}
H.ig.prototype={
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
H.hm.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fD.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.it.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ka.prototype={
$1:function(a){if(!!J.O(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ee.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bL.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
gii:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i1.prototype={}
H.hU.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eF(u)+"'"}}
H.bJ.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c5(this.a)
else u=typeof t!=="object"?J.cF(t):H.c5(t)
return(u^H.c5(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c6(u))+"'")}}
H.eT.prototype={
h:function(a){return this.a}}
H.hE.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.N.prototype={
gl:function(a){return this.a},
ghG:function(a){return this.a===0},
ga2:function(a){return new H.fI(this,[H.cB(this,0)])},
bh:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cO(t,b)}else return s.hD(b)},
hD:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cf(u.bF(t,u.ce(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.hE(b)},
hE:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bF(r,s.ce(a))
t=s.cf(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cI(u==null?s.b=s.bN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cI(t==null?s.c=s.bN():t,b,c)}else s.hF(b,c)},
hF:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bN()
u=r.ce(a)
t=r.bF(q,u)
if(t==null)r.bT(q,u,[r.bO(a,b)])
else{s=r.cf(t,a)
if(s>=0)t[s].b=b
else t.push(r.bO(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aA(u))
t=t.c}},
cI:function(a,b,c){var u=this.be(a,b)
if(u==null)this.bT(a,b,this.bO(b,c))
else u.b=c},
eV:function(){this.r=this.r+1&67108863},
bO:function(a,b){var u,t=this,s=new H.fH(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eV()
return s},
ce:function(a){return J.cF(a)&0x3ffffff},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.ku(this)},
be:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
eO:function(a,b){delete a[b]},
cO:function(a,b){return this.be(a,b)!=null},
bN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bT(t,u,t)
this.eO(t,u)
return t}}
H.fH.prototype={}
H.fI.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fJ(u,u.r)
t.c=u.e
return t}}
H.fJ.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.jT.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jU.prototype={
$1:function(a){return this.a(a)}}
H.fC.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inc:1}
H.c0.prototype={$ic0:1}
H.b5.prototype={$ib5:1}
H.d5.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.c1.prototype={
i:function(a,b){H.ax(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ax(b,a,a.length)
a[b]=c},
$ar:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]}}
H.d6.prototype={
m:function(a,b,c){H.ax(b,a,a.length)
a[b]=c},
$ar:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.he.prototype={
i:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.hf.prototype={
i:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.hg.prototype={
i:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.hh.prototype={
i:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.hi.prototype={
i:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.d7.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.c2.prototype={
gl:function(a){return a.length},
i:function(a,b){H.ax(b,a,a.length)
return a[b]},
$ic2:1,
$ibw:1}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
P.iU.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iT.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iV.prototype={
$0:function(){this.a.$0()}}
P.iW.prototype={
$0:function(){this.a.$0()}}
P.ek.prototype={
eB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bE(new P.jq(this,b),0),a)
else throw H.d(P.x("`setTimeout()` not found."))},
eC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bE(new P.jp(this,a,Date.now(),b),0),a)
else throw H.d(P.x("Periodic timer."))},
$ids:1}
P.jq.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jp.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.en(u,q)}s.c=r
t.d.$1(s)}}
P.dH.prototype={}
P.dm.prototype={}
P.hX.prototype={}
P.ds.prototype={}
P.jz.prototype={}
P.jI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.da():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.h(0)
throw u}}
P.j9.prototype={
i7:function(a){var u,t,s,r=null
try{if(C.f===$.al){a.$0()
return}P.of(r,r,this,a)}catch(s){u=H.ac(s)
t=H.kM(s)
P.lO(r,r,this,u,t)}},
i8:function(a,b){var u,t,s,r=null
try{if(C.f===$.al){a.$1(b)
return}P.og(r,r,this,a,b)}catch(s){u=H.ac(s)
t=H.kM(s)
P.lO(r,r,this,u,t)}},
i9:function(a,b){return this.i8(a,b,null)},
hg:function(a){return new P.ja(this,a)},
da:function(a,b){return new P.jb(this,a,b)}}
P.ja.prototype={
$0:function(){return this.a.i7(this.b)}}
P.jb.prototype={
$1:function(a){return this.a.i9(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j6.prototype={
gV:function(a){var u=new P.dW(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eK(b)
return t}},
eK:function(a){var u=this.d
if(u==null)return!1
return this.bD(this.cS(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.kC():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.kC():t,b)}else return s.eE(0,b)},
eE:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kC()
u=s.cM(b)
t=r[u]
if(t==null)r[u]=[s.bA(b)]
else{if(s.bD(t,b)>=0)return!1
t.push(s.bA(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fP(this.c,b)
else return this.fO(0,b)},
fO:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cS(r,b)
t=s.bD(u,b)
if(t<0)return!1
s.d2(u.splice(t,1)[0])
return!0},
cK:function(a,b){if(a[b]!=null)return!1
a[b]=this.bA(b)
return!0},
fP:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d2(u)
delete a[b]
return!0},
cL:function(){this.r=1073741823&this.r+1},
bA:function(a){var u,t=this,s=new P.j7(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cL()
return s},
d2:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cL()},
cM:function(a){return J.cF(a)&1073741823},
cS:function(a,b){return a[this.cM(b)]},
bD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.j7.prototype={}
P.dW.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fK.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fL.prototype={$ii:1,$io:1}
P.r.prototype={
gV:function(a){return new H.bV(a,this.gl(a))},
J:function(a,b){return this.i(a,b)},
ie:function(a,b){var u,t,s=this,r=H.c([],[H.oy(s,a,"r",0)])
C.b.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
ic:function(a){return this.ie(a,!0)},
hw:function(a,b,c,d){var u
P.ba(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.ko(a,"[","]")}}
P.fO.prototype={}
P.fP.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.aF.prototype={
H:function(a,b){var u,t
for(u=J.aW(this.ga2(a));u.A();){t=u.gK(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.ad(this.ga2(a))},
h:function(a){return P.ku(a)},
$iQ:1}
P.jr.prototype={
m:function(a,b,c){throw H.d(P.x("Cannot modify unmodifiable map"))}}
P.fQ.prototype={
i:function(a,b){return J.cE(this.a,b)},
m:function(a,b,c){J.kc(this.a,b,c)},
H:function(a,b){J.kW(this.a,b)},
gl:function(a){return J.ad(this.a)},
h:function(a){return J.a2(this.a)},
$iQ:1}
P.dA.prototype={}
P.jd.prototype={
as:function(a,b){var u
for(u=J.aW(b);u.A();)this.n(0,u.gK(u))},
h:function(a){return P.ko(this,"{","}")},
J:function(a,b){var u,t,s
P.lk(b,"index")
for(u=P.nA(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.J(b,this,"index",null,t))},
$ii:1}
P.dX.prototype={}
P.eq.prototype={}
P.eP.prototype={
hK:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.ba(a0,a1,b.length)
u=$.mn()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jR(C.a.D(b,n))
j=H.jR(C.a.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.bt(m)
s=n
continue}}throw H.d(P.P("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.l0(b,p,a1,q,o,f)
else{e=C.d.ba(f-1,4)+1
if(e===1)throw H.d(P.P(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aS(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l0(b,p,a1,q,o,d)
else{e=C.d.ba(d,4)
if(e===1)throw H.d(P.P(c,b,a1))
if(e>1)b=C.a.aS(b,a1,a1,e===2?"==":"=")}return b}}
P.eQ.prototype={}
P.eV.prototype={}
P.f0.prototype={}
P.fg.prototype={}
P.fx.prototype={
h:function(a){return this.a}}
P.fw.prototype={
eL:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.R("")
if(r>b)q.a+=C.a.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.my(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iC.prototype={
ghv:function(){return C.M}}
P.iE.prototype={
c2:function(a){var u,t,s=P.ba(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jx(u)
if(t.eQ(a,0,s)!==s)t.d4(J.mu(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nR(0,t.b,u.length)))}}
P.jx.prototype={
d4:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eQ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d4(r,C.a.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iD.prototype={
c2:function(a){var u,t,s,r,q,p,o,n,m=P.no(!1,a,0,null)
if(m!=null)return m
u=P.ba(0,null,J.ad(a))
t=P.lQ(a,0,u)
if(t>0){s=P.c9(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jw(!1,r)
o.c=p
o.hl(a,q,u)
if(o.e>0){H.t(P.P("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bt(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jw.prototype={
hl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cy(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.ai()
if((r&192)!==128){q=P.P(k+C.d.b9(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.v,q)
if(j<=C.v[q]){q=P.P("Overlong encoding of 0x"+C.d.b9(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.d.b9(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.bt(j)
l.c=!1}for(q=s<c;q;){p=P.lQ(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c9(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.S()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.d.b9(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.P(k+C.d.b9(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.ay.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.aM(u,30))&1073741823},
h:function(a){var u=this,t=P.mH(H.n8(u)),s=P.cN(H.n6(u)),r=P.cN(H.n2(u)),q=P.cN(H.n3(u)),p=P.cN(H.n5(u)),o=P.cN(H.n7(u)),n=P.mI(H.n4(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.aZ.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
h:function(a){var u,t,s,r=new P.fd(),q=this.a
if(q<0)return"-"+new P.aZ(0-q).h(0)
u=r.$1(C.d.a6(q,6e7)%60)
t=r.$1(C.d.a6(q,1e6)%60)
s=new P.fc().$1(q%1e6)
return""+C.d.a6(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fc.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fd.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bl.prototype={}
P.da.prototype={
h:function(a){return"Throw of null."}}
P.aj.prototype={
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbC()+o+u
if(!q.a)return t
s=q.gbB()
r=P.km(q.b)
return t+s+": "+r}}
P.bu.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fy.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t=this.b
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iv.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ir.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eX.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.km(u)+"."}}
P.hp.prototype={
h:function(a){return"Out of Memory"},
$ibl:1}
P.dk.prototype={
h:function(a){return"Stack Overflow"},
$ibl:1}
P.f5.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dP.prototype={
h:function(a){return"Exception: "+this.a}}
P.fq.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.X(f,q)
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
return h+l+j+k+"\n"+C.a.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fs.prototype={}
P.w.prototype={}
P.i.prototype={
bs:function(a,b){return new H.ci(this,b,[H.kL(this,"i",0)])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
gaF:function(a){var u,t=this.gV(this)
if(!t.A())throw H.d(H.fz())
u=t.gK(t)
if(t.A())throw H.d(H.mO())
return u},
J:function(a,b){var u,t,s
P.lk(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.d(P.J(b,this,"index",null,t))},
h:function(a){return P.mN(this,"(",")")}}
P.fA.prototype={}
P.o.prototype={$ii:1}
P.Q.prototype={}
P.b6.prototype={
gI:function(a){return P.a0.prototype.gI.call(this,this)},
h:function(a){return"null"}}
P.ab.prototype={}
P.a0.prototype={constructor:P.a0,$ia0:1,
q:function(a,b){return this===b},
gI:function(a){return H.c5(this)},
h:function(a){return"Instance of '"+H.e(H.c6(this))+"'"},
toString:function(){return this.h(this)}}
P.k.prototype={}
P.R.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iA.prototype={
$2:function(a,b){var u,t,s,r=J.cz(b).dJ(b,"=")
if(r===-1){if(b!=="")J.kc(a,P.kG(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.a8(b,r+1)
s=this.a
J.kc(a,P.kG(u,0,u.length,s,!0),P.kG(t,0,t.length,s,!0))}return a}}
P.ix.prototype={
$2:function(a,b){throw H.d(P.P("Illegal IPv4 address, "+a,this.a,b))}}
P.iy.prototype={
$2:function(a,b){throw H.d(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iz.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eE(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bz.prototype={
gea:function(){return this.b},
gcd:function(a){var u=this.c
if(u==null)return""
if(C.a.a1(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.lH(this.a)
return u},
gcn:function(a){var u=this.f
return u==null?"":u},
gdD:function(){var u=this.r
return u==null?"":u},
e2:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a1(u,"/"))u="/"+u
s=P.kE(null,0,0,b)
return new P.bz(q,o,m,n,u,s,r.r)},
gco:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.k
u=this.Q=new P.dA(P.lw(t==null?"":t),[u,u])
t=u}return t},
gdE:function(){return this.c!=null},
gdH:function(){return this.f!=null},
gdF:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.O(b).$ikz)if(s.a==b.gbt())if(s.c!=null===b.gdE())if(s.b==b.gea())if(s.gcd(s)==b.gcd(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdX(b)){u=s.f
t=u==null
if(!t===b.gdH()){if(t)u=""
if(u===b.gcn(b)){u=s.r
t=u==null
if(!t===b.gdF()){if(t)u=""
u=u===b.gdD()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.a.gI(this.h(0)):u},
$ikz:1,
gbt:function(){return this.a},
gdX:function(a){return this.e}}
P.js.prototype={
$1:function(a){throw H.d(P.P("Invalid port",this.a,this.b+1))}}
P.jt.prototype={
$1:function(a){return P.er(C.W,a,C.e,!1)}}
P.jv.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.er(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.er(C.h,b,C.e,!0))}}}
P.ju.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aW(b),t=this.a;u.A();)t.$2(a,u.gK(u))}}
P.iw.prototype={
ge9:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bk(u,"?",o)
s=u.length
if(t>=0){r=P.cu(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.j_("data",p,p,p,P.cu(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jD.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jC.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mv(u,0,96,b)
return u},
$S:17}
P.jE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.D(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.D(b,0),t=C.a.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jg.prototype={
gdE:function(){return this.c>0},
gdG:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.v(t)
t=u+1<t
u=t}else u=!1
return u},
gdH:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdF:function(){return this.r<this.a.length},
gcT:function(){return this.b===4&&C.a.a1(this.a,"http")},
gcU:function(){return this.b===5&&C.a.a1(this.a,"https")},
gbt:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcT())q=t.x="http"
else if(t.gcU()){t.x="https"
q="https"}else if(q===4&&C.a.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a1(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
gea:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gcd:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gdG()){u=t.d
if(typeof u!=="number")return u.B()
return P.eE(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcT())return 80
if(t.gcU())return 443
return 0},
gdX:function(a){return C.a.t(this.a,this.e,this.f)},
gcn:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.a.t(this.a,u+1,t):""},
gdD:function(){var u=this.r,t=this.a
return u<t.length?C.a.a8(t,u+1):""},
gco:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.X
t=P.k
return new P.dA(P.lw(u.gcn(u)),[t,t])},
e2:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbt(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdG()?p.gbn(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a1(t,"/"))t="/"+t
r=P.kE(o,0,0,b)
s=p.r
q=s<l.length?C.a.a8(l,s+1):o
return new P.bz(n,k,u,j,t,r,q)},
gI:function(a){var u=this.y
return u==null?this.y=C.a.gI(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ikz&&this.a===b.h(0)},
h:function(a){return this.a},
$ikz:1}
P.j_.prototype={}
W.n.prototype={}
W.eH.prototype={
gl:function(a){return a.length}}
W.eI.prototype={
h:function(a){return String(a)}}
W.eJ.prototype={
h:function(a){return String(a)}}
W.bi.prototype={$ibi:1}
W.bj.prototype={$ibj:1}
W.bk.prototype={
cu:function(a,b,c){if(c!=null)return a.getContext(b,P.op(c))
return a.getContext(b)},
ed:function(a,b){return this.cu(a,b,null)},
$ibk:1}
W.aX.prototype={
gl:function(a){return a.length}}
W.f1.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bM.prototype={
gl:function(a){return a.length}}
W.f2.prototype={}
W.ae.prototype={}
W.ao.prototype={}
W.f3.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.f9.prototype={
h:function(a){return String(a)}}
W.cP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.aa,P.ab]]},
$ar:function(){return[[P.aa,P.ab]]},
$ii:1,
$ai:function(){return[[P.aa,P.ab]]},
$io:1,
$ao:function(){return[[P.aa,P.ab]]}}
W.cQ.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaE(a))+" x "+H.e(this.gaB(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iaa)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&this.gaE(a)===u.gaE(b)&&this.gaB(a)===u.gaB(b)},
gI:function(a){return W.lF(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gaE(a)),C.c.gI(this.gaB(a)))},
gdc:function(a){return a.bottom},
gaB:function(a){return a.height},
gbm:function(a){return a.left},
gbp:function(a){return a.right},
gbq:function(a){return a.top},
gaE:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ab]}}
W.fa.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.k]},
$ar:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
W.fb.prototype={
gl:function(a){return a.length}}
W.iY.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.ic(this)
return new J.a3(u,u.length)},
$ar:function(){return[W.S]},
$ai:function(){return[W.S]},
$ao:function(){return[W.S]}}
W.S.prototype={
ghf:function(a){return new W.j0(a)},
gc1:function(a){return new W.iY(a,a.children)},
gdd:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ab])},
h:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.l6
if(u==null){u=H.c([],[W.aI])
t=new W.d9(u)
u.push(W.lE(null))
u.push(W.lG())
$.l6=t
d=t}else d=u
u=$.l5
if(u==null){u=new W.es(d)
$.l5=u
c=u}else{u.a=d
c=u}}if($.aB==null){u=document
t=u.implementation.createHTMLDocument("")
$.aB=t
$.kk=t.createRange()
s=$.aB.createElement("base")
s.href=u.baseURI
$.aB.head.appendChild(s)}u=$.aB
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aB
if(!!this.$ibj)r=u.body
else{r=u.createElement(a.tagName)
$.aB.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.U(C.U,a.tagName)){$.kk.selectNodeContents(r)
q=$.kk.createContextualFragment(b)}else{r.innerHTML=b
q=$.aB.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aB.body
if(r==null?u!=null:r!==u)J.kY(r)
c.cv(q)
document.adoptNode(q)
return q},
ho:function(a,b,c){return this.ad(a,b,c,null)},
ef:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iS:1,
ge5:function(a){return a.tagName}}
W.ff.prototype={
$1:function(a){return!!J.O(a).$iS}}
W.h.prototype={$ih:1}
W.f.prototype={
h9:function(a,b,c,d){if(c!=null)this.eF(a,b,c,!1)},
eF:function(a,b,c,d){return a.addEventListener(b,H.bE(c,1),!1)}}
W.ap.prototype={$iap:1}
W.bP.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.ap]},
$ar:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]},
$io:1,
$ao:function(){return[W.ap]},
$ibP:1}
W.fl.prototype={
gl:function(a){return a.length}}
W.fp.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fv.prototype={
gl:function(a){return a.length}}
W.bR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aE.prototype={$iaE:1,
gde:function(a){return a.data}}
W.bS.prototype={$ibS:1}
W.bq.prototype={$ibq:1}
W.fM.prototype={
h:function(a){return String(a)}}
W.h7.prototype={
gl:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.h8.prototype={
i:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.k])
this.H(a,new W.h9(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iQ:1,
$aQ:function(){return[P.k,null]}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ha.prototype={
i:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.k])
this.H(a,new W.hb(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iQ:1,
$aQ:function(){return[P.k,null]}}
W.hb.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aG.prototype={$iaG:1}
W.hc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aG]},
$ar:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.at.prototype={$iat:1}
W.a1.prototype={
gaF:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.ln("No elements"))
if(t>1)throw H.d(P.ln("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cT(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.E]},
$ai:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
i1:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i5:function(a,b){var u,t
try{u=a.parentNode
J.ms(u,b,a)}catch(t){H.ac(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.ej(a):u},
fR:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.d8.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.hs.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$io:1,
$ao:function(){return[W.aJ]}}
W.hC.prototype={
i:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.k])
this.H(a,new W.hD(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iQ:1,
$aQ:function(){return[P.k,null]}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hF.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hQ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$io:1,
$ao:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$io:1,
$ao:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hV.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.c([],[P.k])
this.H(a,new W.hW(u))
return u},
gl:function(a){return a.length},
$iQ:1,
$aQ:function(){return[P.k,P.k]}}
W.hW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.dn.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
u=W.mJ("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).as(0,new W.a1(u))
return t}}
W.hZ.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaF(u)
s.toString
u=new W.a1(s)
r=u.gaF(u)
t.toString
r.toString
new W.a1(t).as(0,new W.a1(r))
return t}}
W.i_.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaF(u)
t.toString
s.toString
new W.a1(t).as(0,new W.a1(s))
return t}}
W.ca.prototype={$ica:1}
W.aN.prototype={$iaN:1}
W.av.prototype={$iav:1}
W.i2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.av]},
$ar:function(){return[W.av]},
$ii:1,
$ai:function(){return[W.av]},
$io:1,
$ao:function(){return[W.av]}}
W.i3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aN]},
$ar:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$io:1,
$ao:function(){return[W.aN]}}
W.i8.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.bv.prototype={$ibv:1}
W.ic.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aO]},
$ar:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$io:1,
$ao:function(){return[W.aO]}}
W.id.prototype={
gl:function(a){return a.length}}
W.bc.prototype={}
W.iB.prototype={
h:function(a){return String(a)}}
W.iQ.prototype={
gl:function(a){return a.length}}
W.be.prototype={
ghr:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.x("deltaY is not supported"))},
ghq:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.x("deltaX is not supported"))},
$ibe:1}
W.cj.prototype={
fS:function(a,b){return a.requestAnimationFrame(H.bE(b,1))},
eP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iZ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.H]},
$ar:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dK.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.O(b)
if(!u.$iaa)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&a.width===u.gaE(b)&&a.height===u.gaB(b)},
gI:function(a){return W.lF(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gaB:function(a){return a.height},
gaE:function(a){return a.width}}
W.j3.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aD]},
$ar:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.e1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.E]},
$ar:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.jh.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$io:1,
$ao:function(){return[W.aM]}}
W.jl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.au]},
$ar:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.iX.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.k])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.b(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aQ:function(){return[P.k,P.k]}}
W.j0.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.j1.prototype={}
W.j2.prototype={
$1:function(a){return this.a.$1(a)}}
W.ck.prototype={
eu:function(a){var u
if($.cl.ghG($.cl)){for(u=0;u<262;++u)$.cl.m(0,C.T[u],W.oA())
for(u=0;u<12;++u)$.cl.m(0,C.p[u],W.oB())}},
aN:function(a){return $.mo().U(0,W.bN(a))},
at:function(a,b,c){var u=$.cl.i(0,H.e(W.bN(a))+"::"+b)
if(u==null)u=$.cl.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaI:1}
W.I.prototype={
gV:function(a){return new W.cT(a,this.gl(a))}}
W.d9.prototype={
aN:function(a){return C.b.d8(this.a,new W.hk(a))},
at:function(a,b,c){return C.b.d8(this.a,new W.hj(a,b,c))},
$iaI:1}
W.hk.prototype={
$1:function(a){return a.aN(this.a)}}
W.hj.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.e9.prototype={
eA:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bs(0,new W.je())
t=b.bs(0,new W.jf())
this.b.as(0,u)
s=this.c
s.as(0,C.w)
s.as(0,t)},
aN:function(a){return this.a.U(0,W.bN(a))},
at:function(a,b,c){var u=this,t=W.bN(a),s=u.c
if(s.U(0,H.e(t)+"::"+b))return u.d.hd(c)
else if(s.U(0,"*::"+b))return u.d.hd(c)
else{s=u.b
if(s.U(0,H.e(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.e(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaI:1}
W.je.prototype={
$1:function(a){return!C.b.U(C.p,a)}}
W.jf.prototype={
$1:function(a){return C.b.U(C.p,a)}}
W.jn.prototype={
at:function(a,b,c){if(this.em(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jm.prototype={
aN:function(a){var u=J.O(a)
if(!!u.$ic7)return!1
u=!!u.$ij
if(u&&W.bN(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.aN(a)},
$iaI:1}
W.cT.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cE(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gK:function(a){return this.d}}
W.aI.prototype={}
W.jc.prototype={}
W.es.prototype={
cv:function(a){new W.jy(this).$2(a,null)},
aW:function(a,b){if(b==null)J.kY(a)
else b.removeChild(a)},
fX:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mw(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ac(r)}t="element unprintable"
try{t=J.a2(a)}catch(r){H.ac(r)}try{s=W.bN(a)
this.fW(a,b,p,t,s,o,n)}catch(r){if(H.ac(r) instanceof P.aj)throw r
else{this.aW(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aW(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aN(a)){p.aW(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.aW(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.c(u.slice(0),[H.cB(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.b(t,s)
r=t[s]
if(!p.a.at(a,J.mz(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.O(a).$ica)p.cv(a.content)}}
W.jy.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fX(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aW(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ac(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dJ.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ef.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.el.prototype={}
W.em.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
P.ji.prototype={
dC:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
cs:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.O(a)
if(!!u.$ia7)return new Date(a.a)
if(!!u.$inc)throw H.d(P.is("structured clone of RegExp"))
if(!!u.$iap)return a
if(!!u.$ibi)return a
if(!!u.$ibP)return a
if(!!u.$iaE)return a
if(!!u.$ic0||!!u.$ib5||!!u.$ibZ)return a
if(!!u.$iQ){t=p.dC(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.H(a,new P.jk(o,p))
return o.a}if(!!u.$io){t=p.dC(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.hn(a,t)}throw H.d(P.is("structured clone of other type"))},
hn:function(a,b){var u,t=J.cy(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.cs(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.jk.prototype={
$2:function(a,b){this.a.a[a]=this.b.cs(b)},
$S:3}
P.ep.prototype={$iaE:1,
gde:function(a){return this.a}}
P.jJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jj.prototype={}
P.fm.prototype={
gbf:function(){var u=this.b,t=H.kL(u,"r",0)
return new H.fR(new H.ci(u,new P.fn(),[t]),new P.fo(),[t,W.S])},
m:function(a,b,c){var u=this.gbf()
J.mx(u.b.$1(J.eG(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ad(this.gbf().a)},
i:function(a,b){var u=this.gbf()
return u.b.$1(J.eG(u.a,b))},
gV:function(a){var u=P.l9(this.gbf(),!1,W.S)
return new J.a3(u,u.length)},
$ar:function(){return[W.S]},
$ai:function(){return[W.S]},
$ao:function(){return[W.S]}}
P.fn.prototype={
$1:function(a){return!!J.O(a).$iS}}
P.fo.prototype={
$1:function(a){return H.l(a,"$iS")}}
P.j8.prototype={
gbp:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gdc:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.O(b)
if(!!u.$iaa){t=q.a
if(t==u.gbm(b)){s=q.b
if(s==u.gbq(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gbp(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gdc(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.cF(t),r=u.b,q=J.cF(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.d.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.d.gI(r+t)
return P.nz(P.j5(P.j5(P.j5(P.j5(0,s),q),p),t))}}
P.aa.prototype={
gbm:function(a){return this.a},
gbq:function(a){return this.b},
gaE:function(a){return this.c},
gaB:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.fF.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b3]},
$ii:1,
$ai:function(){return[P.b3]},
$io:1,
$ao:function(){return[P.b3]}}
P.b7.prototype={$ib7:1}
P.hn.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$io:1,
$ao:function(){return[P.b7]}}
P.hu.prototype={
gl:function(a){return a.length}}
P.c7.prototype={$ic7:1}
P.hY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.k]},
$ii:1,
$ai:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]}}
P.j.prototype={
gc1:function(a){return new P.fm(a,new W.a1(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aI])
p.push(W.lE(null))
p.push(W.lG())
p.push(new W.jm())
c=new W.es(new W.d9(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).ho(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.gaF(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bb.prototype={$ibb:1}
P.ie.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$io:1,
$ao:function(){return[P.bb]}}
P.dU.prototype={}
P.dV.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.eg.prototype={}
P.eh.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.bw.prototype={$ii:1,
$ai:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eL.prototype={
gl:function(a){return a.length}}
P.eM.prototype={
i:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.c([],[P.k])
this.H(a,new P.eN(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.d(P.x("Not supported"))},
$iQ:1,
$aQ:function(){return[P.k,null]}}
P.eN.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eO.prototype={
gl:function(a){return a.length}}
P.bh.prototype={}
P.ho.prototype={
gl:function(a){return a.length}}
P.dI.prototype={}
P.df.prototype={
ia:function(a,b,c,d,e,f,g){var u,t=J.O(g)
if(!!t.$iaE)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oq(g))
return}if(!!t.$ibS)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.d(P.cG("Incorrect number or type of arguments"))}}
P.hT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.J(b,a,null,null,null))
return P.aQ(a.item(b))},
m:function(a,b,c){throw H.d(P.x("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ar:function(){return[[P.Q,,,]]},
$ii:1,
$ai:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.ec.prototype={}
P.ed.prototype={}
T.az.prototype={
aC:function(a,b){return!0},
h:function(a){return"all"}}
T.cU.prototype={
aC:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].aC(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.b4.prototype={}
T.a4.prototype={
aC:function(a,b){return!this.ei(0,b)},
h:function(a){return"!["+this.cB(0)+"]"}}
T.hx.prototype={
aC:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.bt(this.a),t=H.bt(this.b)
return u+".."+t}}
T.hG.prototype={
eq:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a Set with zero characters."))
u=new H.N([P.w,P.ay])
for(t=new H.bV(a,a.gl(a));t.A();)u.m(0,t.d,!0)
this.a=u},
aC:function(a,b){return this.a.bh(0,b)},
h:function(a){var u=this.a
return P.c9(u.ga2(u),0,null)}}
R.dl.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.dw(this.a.j(0,b))
r.a=H.c([],[T.b4])
r.c=!1
this.c.push(r)
return r},
hx:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.aC(0,a))return r}return},
h:function(a){return this.b}}
R.dt.prototype={
h:function(a){var u=H.kR(this.b,"\n","\\n"),t=H.kR(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.du.prototype={
aD:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
R.i9.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.dl(this,b)
u.c=H.c([],[R.dw])
this.a.m(0,b,u)}return u},
R:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.du(a)
u=P.k
t.c=new H.N([u,u])
this.b.m(0,a,t)}return t},
e8:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[R.dt]),k=this.c,j=[P.w],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.D(a,s)
q=k.hx(r)
if(q==null){if(t==null){i.push(r)
p=P.c9(i,0,m)
throw H.d(P.u("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.c9(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.dt(n==null?o.b:n,p,s)}++s}}}}
R.dw.prototype={
h:function(a){return this.b.b+": "+this.cB(0)}}
O.aY.prototype={
bw:function(a){this.a=H.c([],[a])
this.c=this.b=null},
cw:function(a,b,c){this.b=b
this.c=a},
bb:function(a,b){return this.cw(a,null,b)},
fB:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eY:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a3(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kL(s,"aY",0)]
if(s.fB(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.eY(t,H.c([b],r))}},
$ii:1}
O.bX.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.F():u},
aG:function(){var u=this.b
if(u!=null)u.E(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.b.gav(u)
else return V.bY()},
e_:function(a){var u=this.a
if(a==null)u.push(V.bY())
else u.push(a)
this.aG()},
cm:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}}}
E.eR.prototype={}
E.aC.prototype={
cJ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a3(u,u.length);u.A();){t=u.d
if(t.f==null)t.cJ()}},
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().L(0,s.gdS())
u=s.c
if(u!=null)u.gu().n(0,s.gdS())
t=new D.y("shape",r,s.c)
t.b=!0
s.ak(t)}},
sb8:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().L(0,s.gdU())
u=s.f
s.f=a
if(a!=null)a.gu().n(0,s.gdU())
s.cJ()
t=new D.y("technique",u,s.f)
t.b=!0
s.ak(t)}},
saQ:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gu().L(0,s.gdQ())
if(a!=null)a.gu().n(0,s.gdQ())
s.r=a
t=new D.y("mover",u,a)
t.b=!0
s.ak(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.an(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.y("matrix",u,q)
t.b=!0
s.ak(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.a3(r,r.length);r.A();)r.d.am(0,b)},
aR:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga7(s))
else s.a.push(r.p(0,s.ga7(s)))
s.aG()
a.e0(t.f)
s=a.dy
u=(s&&C.b).gav(s)
if(u!=null&&t.d!=null)u.i4(a,t)
for(s=t.y.a,s=new J.a3(s,s.length);s.A();)s.d.aR(a)
a.dZ()
a.dx.cm()},
ak:function(a){var u=this.z
if(u!=null)u.E(a)},
Z:function(){return this.ak(null)},
dT:function(a){this.e=null
this.ak(a)},
hR:function(){return this.dT(null)},
dV:function(a){this.ak(a)},
hS:function(){return this.dV(null)},
dR:function(a){this.ak(a)},
hQ:function(){return this.dR(null)},
dP:function(a){this.ak(a)},
hN:function(){return this.dP(null)},
hM:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdO(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Z()},
hP:function(a,b){var u,t
for(u=b.gV(b),t=this.gdO();u.A();)u.gK(u).gu().L(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hy.prototype={
ep:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bX()
t=[V.ar]
u.a=H.c([],t)
u.gu().n(0,new E.hz(s))
s.cy=u
u=new O.bX()
u.a=H.c([],t)
u.gu().n(0,new E.hA(s))
s.db=u
u=new O.bX()
u.a=H.c([],t)
u.gu().n(0,new E.hB(s))
s.dx=u
u=H.c([],[O.dp])
s.dy=u
u.push(null)
s.fr=new H.N([P.k,A.dh])},
gi0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.p(0,u.ga7(u))
s=u}return s},
e0:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gav(u):a)},
dZ:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hz.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hA.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hB.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dr.prototype={
cG:function(a){this.e3()},
cF:function(){return this.cG(null)},
ghC:function(){var u,t=this,s=Date.now(),r=C.d.a6(P.l4(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cY:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.v(r)
u=C.c.cc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.c.cc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lq(C.n,s.gi6())}},
e3:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eP(u)
C.D.fS(u,W.lR(new E.i7(this),P.ab))}},
i3:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cY()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.l4(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aG()
r=s.db
C.b.sl(r.a,0)
r.aG()
r=s.dx
C.b.sl(r.a,0)
r.aG()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aR(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.ac(q)
t=H.kM(q)
P.kQ("Error: "+H.e(u))
P.kQ("Stack: "+H.e(t))
throw H.d(u)}}}
E.i7.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i3()}}}
Z.dG.prototype={}
Z.cI.prototype={
bY:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ac(s)
t=P.u('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.d(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iR.prototype={}
Z.cJ.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bY:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bY(a)},
ih:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aR:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.k],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a2(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.k(p,", ")+"\nAttrs:   "+C.b.k(r,", ")}}
Z.bn.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c6(this.c))+"'")+"]"}}
Z.aP.prototype={
gcA:function(a){var u=this.a,t=(u&$.aU().a)!==0?3:0
if((u&$.aT().a)!==0)t+=3
if((u&$.aS().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=2
if((u&$.aV().a)!==0)t+=3
if((u&$.cC().a)!==0)t+=3
if((u&$.cD().a)!==0)t+=4
if((u&$.bI().a)!==0)++t
return(u&$.aR().a)!==0?t+4:t},
he:function(a){var u,t=$.aU(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0)if(u===a)return t
return $.mm()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aP))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.k]),t=this.a
if((t&$.aU().a)!==0)u.push("Pos")
if((t&$.aT().a)!==0)u.push("Norm")
if((t&$.aS().a)!==0)u.push("Binm")
if((t&$.bg().a)!==0)u.push("Txt2D")
if((t&$.aV().a)!==0)u.push("TxtCube")
if((t&$.cC().a)!==0)u.push("Clr3")
if((t&$.cD().a)!==0)u.push("Clr4")
if((t&$.bI().a)!==0)u.push("Weight")
if((t&$.aR().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.k(u,"|")}}
D.eU.prototype={}
D.bm.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.U(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.H(P.l9(u,!0,{func:1,ret:-1,args:[D.W]}),new D.fi(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.H(u,new D.fj(q))}return!0},
ht:function(){return this.E(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fi.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fj.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.y.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cK.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cK))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cZ.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fE.prototype={
hX:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hT:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.d2.prototype={}
X.fN.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a5(o.a+n*m,o.b+u*t)
t=q.a.gaO()
r=new X.aH(a,V.b8(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
cl:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ee()
if(typeof u!=="number")return u.ai()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aU(a,b))
return!0},
hY:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaO()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.c_(new V.G(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fn:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d2(c,r.a.gaO(),b)
s.b=!0
t.E(s)
r.y=new P.a7(u,!1)
r.x=V.b8()}}
X.af.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.af))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aH.prototype={}
X.hd.prototype={
bE:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaO(),r=new X.aH(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cl:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bE(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ee()
if(typeof t!=="number")return t.ai()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bE(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bE(a,b,!1))
return!0},
hZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaO()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.c_(new V.G(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdg:function(){var u=this.b
return u==null?this.b=D.F():u},
gbr:function(){var u=this.c
return u==null?this.c=D.F():u},
gdM:function(){var u=this.d
return u==null?this.d=D.F():u}}
X.c_.prototype={}
X.ht.prototype={}
X.dv.prototype={}
X.ib.prototype={
aU:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.b8(),r=u.a.gaO(),q=new X.dv(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hW:function(a){var u=this.b
if(u==null)return!1
u.E(this.aU(a,!0))
return!0},
hU:function(a){var u=this.c
if(u==null)return!1
u.E(this.aU(a,!0))
return!0},
hV:function(a){var u=this.d
if(u==null)return!1
u.E(this.aU(a,!1))
return!0}}
X.dB.prototype={
gaO:function(){var u=this.a,t=C.i.gdd(u).c
t.toString
u=C.i.gdd(u).d
u.toString
return V.ll(0,0,t,u)},
cP:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.af(t,a.altKey,a.shiftKey))},
aL:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.af(t,a.altKey,a.shiftKey)},
bU:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.af(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.a5(s-q,r-u)},
aV:function(a){return new V.G(a.movementX,a.movementY)},
bP:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a5])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.c.al(r.pageX)
C.c.al(r.pageY)
p=o.left
C.c.al(r.pageX)
n.push(new V.a5(q-p,C.c.al(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cK(u,new X.af(t,a.altKey,a.shiftKey))},
bG:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fh:function(a){this.f=!0},
f5:function(a){this.f=!1},
fb:function(a){if(this.f&&this.bG(a))a.preventDefault()},
fl:function(a){var u
if(!this.f)return
u=this.cP(a)
this.b.hX(u)},
fj:function(a){var u
if(!this.f)return
u=this.cP(a)
this.b.hT(u)},
fp:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aL(a)
if(r.x){u=r.ax(a)
t=r.aV(a)
if(r.d.cl(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ax(a)
s=r.az(a)
if(r.c.cl(u,s))a.preventDefault()},
fu:function(a){var u,t,s,r=this
r.aL(a)
u=r.ax(a)
if(r.x){t=r.aV(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b7(u,s))a.preventDefault()},
ff:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aL(a)
u=r.ax(a)
if(r.x){t=r.aV(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b7(u,s))a.preventDefault()}},
fs:function(a){var u,t,s,r=this
r.aL(a)
u=r.ax(a)
if(r.x){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b6(u,s))a.preventDefault()},
fd:function(a){var u,t,s,r=this
if(!r.bG(a)){r.aL(a)
u=r.ax(a)
if(r.x){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.az(a)
if(r.c.b6(u,s))a.preventDefault()}},
fw:function(a){var u,t,s=this
s.aL(a)
u=new V.G((a&&C.C).ghq(a),C.C.ghr(a)).v(0,180)
if(s.x){if(s.d.hY(u))a.preventDefault()
return}if(s.r)return
t=s.az(a)
if(s.c.hZ(u,t))a.preventDefault()},
fA:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.fn(u,t,r)}},
fN:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bU(a)
u=t.bP(a)
if(t.e.hW(u))a.preventDefault()},
fJ:function(a){var u
this.bU(a)
u=this.bP(a)
if(this.e.hU(u))a.preventDefault()},
fL:function(a){var u
this.bU(a)
u=this.bP(a)
if(this.e.hV(u))a.preventDefault()}}
D.f8.prototype={$ia8:1}
D.a8.prototype={}
D.d_.prototype={
a4:function(a){var u=this.x
if(u!=null)u.E(a)},
cW:function(a){var u=this.y
if(u!=null)u.E(a)},
fm:function(){return this.cW(null)},
fD:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.ev(s))return!1}return!0},
f_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcV(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.br)this.f.push(q)
p=q.Q
if(p==null){p=new D.bm()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bo()
u.b=!0
this.a4(u)},
fH:function(a,b){var u,t,s
for(u=b.gV(b),t=this.gcV();u.A();){s=u.gK(u)
C.b.L(this.e,s)
s.gu().L(0,t)}u=new D.bp()
u.b=!0
this.a4(u)},
ev:function(a){var u=C.b.U(this.f,a)
return u},
$ai:function(){return[D.a8]},
$aaY:function(){return[D.a8]}}
D.br.prototype={
a4:function(a){var u=this.Q
if(u!=null)u.E(a)},
ew:function(){return this.a4(null)},
gaj:function(){var u=this.d!=null?1:0
return u+4},
$ia8:1}
D.hS.prototype={$ia8:1}
V.V.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.an.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.fh.prototype={}
V.d4.prototype={
ah:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
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
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bG(H.c([q.a,q.d,q.r],p),3,0),n=V.bG(H.c([q.b,q.e,q.x],p),3,0),m=V.bG(H.c([q.c,q.f,q.y],p),3,0)
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
V.ar.prototype={
ah:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
dK:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.bY()
u=1/b1
t=-n
s=-a0
return V.as((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.as(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cr:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
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
h:function(a){return this.P()},
F:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bG(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bG(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bG(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bG(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.F("")}}
V.a5.prototype={
M:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.T.prototype={
B:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.b9.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b9))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.de.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
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
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.G.prototype={
b2:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.G(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.lx
return u==null?$.lx=new V.G(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.G(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.A.prototype={
b2:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.A(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.z().a)return V.cg()
return new V.A(this.a/b,this.b/b,this.c/b)},
dL:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.ch.prototype={
b2:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ch))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
U.eW.prototype={
bz:function(a){var u=V.kb(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.F():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
sct:function(a,b){},
sci:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bz(u)}s=new D.y("maximumLocation",s,t.b)
s.b=!0
t.G(s)}},
sck:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bz(u)}s=new D.y("minimumLocation",s,t.c)
s.b=!0
t.G(s)}},
sY:function(a,b){var u,t=this
b=t.bz(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.y("location",u,b)
u.b=!0
t.G(u)}},
scj:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a)
r.b=!0
s.G(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.y("velocity",t,a)
t.b=!0
u.G(t)}},
sc4:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.y("dampening",u,a)
u.b=!0
this.G(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
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
u=s}r.sW(u)}}}
U.cM.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.F():u},
an:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.bQ.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.F():u},
G:function(a){var u=this.e
if(u!=null)u.E(a)},
a5:function(){return this.G(null)},
ey:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaK(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bo()
u.b=!0
this.G(u)},
fF:function(a,b){var u,t
for(u=b.gV(b),t=this.gaK();u.A();)u.gK(u).gu().L(0,t)
u=new D.bp()
u.b=!0
this.G(u)},
an:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a3(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.an(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bY():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ai:function(){return[U.a9]},
$aaY:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dg.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.F():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
seb:function(a){var u
a=V.kb(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.z().a)){this.a=a
u=new D.y("yaw",u,a)
u.b=!0
this.G(u)}},
sdY:function(a,b){var u
b=V.kb(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.z().a)){this.b=b
u=new D.y("pitch",u,b)
u.b=!0
this.G(u)}},
se4:function(a){var u
a=V.kb(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.z().a)){this.c=a
u=new D.y("roll",u,a)
u.b=!0
this.G(u)}},
an:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seb(u.a+u.d*b.y)
u.sdY(0,u.b+u.e*b.y)
u.se4(u.c+u.f*b.y)
u.x=V.ld(u.c).p(0,V.lc(u.b)).p(0,V.lb(u.a))
t=u.y
if(t!=null)t.ag(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dg))return!1
u=r.a
t=b.a
s=$.z().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotater: ["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+"], ["+V.C(u.d,3,0)+", "+V.C(u.e,3,0)+", "+V.C(u.f,3,0)+"]"}}
U.dC.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.F():u},
G:function(a){var u=this.cy
if(u!=null)u.E(a)},
a5:function(){return this.G(null)},
aY:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdg().n(0,u.gbH())
u.a.c.gdM().n(0,u.gbJ())
u.a.c.gbr().n(0,u.gbL())
return!0},
bI:function(a){var u=this
if(!J.D(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bK:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaH")
if(!n.y)return
if(n.x){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.M(0,a.y)
u=new V.G(t.a,t.b).p(0,2).v(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.G(s.a,s.b).p(0,2).v(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
n.b.sW(0)
t=t.M(0,a.z)
n.Q=new V.G(t.a,t.b).p(0,2).v(0,u.ga9())}n.a5()},
bM:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sW(t*10*s)
r.a5()}},
an:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.ch=r
u=b.y
t.b.am(0,u)
t.cx=V.ld(t.b.d)}return t.cx},
$ia9:1}
U.dD.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.F():u},
G:function(a){var u=this.fx
if(u!=null)u.E(a)},
a5:function(){return this.G(null)},
aY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdg().n(0,s.gbH())
s.a.c.gdM().n(0,s.gbJ())
s.a.c.gbr().n(0,s.gbL())
u=s.a.d
t=u.f
u=t==null?u.f=D.F():t
u.n(0,s.geR())
u=s.a.d
t=u.d
u=t==null?u.d=D.F():t
u.n(0,s.geT())
u=s.a.e
t=u.b
u=t==null?u.b=D.F():t
u.n(0,s.gh6())
u=s.a.e
t=u.d
u=t==null?u.d=D.F():t
u.n(0,s.gh4())
u=s.a.e
t=u.c
u=t==null?u.c=D.F():t
u.n(0,s.gh2())
return!0},
ar:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.T()
u=-u}if(this.r){if(typeof t!=="number")return t.T()
t=-t}return new V.G(u,t)},
bI:function(a){var u=this
H.l(a,"$iaH")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bK:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaH")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.ar(new V.G(t.a,t.b).p(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ar(new V.G(s.a,s.b).p(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.ar(new V.G(t.a,t.b).p(0,2).v(0,u.ga9()))}n.a5()},
bM:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.a5()}},
eS:function(a){var u=this
if(H.l(a,"$id2").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eU:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaH")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ar(new V.G(s.a,s.b).p(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.ar(new V.G(t.a,t.b).p(0,2).v(0,u.ga9()))
n.a5()},
h7:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h5:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idv")
if(!n.cx)return
if(n.ch){u=a.d.M(0,a.y)
u=new V.G(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.M(0,a.y)
u=n.ar(new V.G(t.a,t.b).p(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.ar(new V.G(s.a,s.b).p(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sY(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.M(0,a.z)
n.dx=n.ar(new V.G(t.a,t.b).p(0,2).v(0,u.ga9()))}n.a5()},
h3:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sW(-t*10*u)
r.a5()}},
an:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.am(0,u)
t.b.am(0,u)
t.fr=V.lb(t.b.d).p(0,V.lc(t.c.d))}return t.fr},
$ia9:1}
U.dE.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.F():u},
G:function(a){var u=this.r
if(u!=null)u.E(a)},
aY:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.F():t
t=r.geW()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.F():s).n(0,t)
return!0},
eX:function(a){var u,t,s,r,q=this
if(!J.D(q.b,q.a.b.c))return
H.l(a,"$ic_")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r)
u.b=!0
q.G(u)}},
an:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kv(u,u,u,1)}return t.f},
$ia9:1}
M.cR.prototype={
aw:function(a){var u=this.y
if(u!=null)u.E(a)},
ez:function(){return this.aw(null)},
f7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaq(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bo()
u.b=!0
this.aw(u)},
f9:function(a,b){var u,t
for(u=b.gV(b),t=this.gaq();u.A();)u.gK(u).gu().L(0,t)
u=new D.bp()
u.b=!0
this.aw(u)},
sb8:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().L(0,t.gaq())
u=t.d
t.d=a
if(a!=null)a.gu().n(0,t.gaq())
s=new D.y("technique",u,t.d)
s.b=!0
t.aw(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.F():u},
aR:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.e0(a1.d)
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
if(typeof s!=="number")return H.v(s)
o=C.c.al(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.c.al(p*r)
p=C.c.al(q.c*s)
a2.c=p
q=C.c.al(q.d*r)
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
i=V.as(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e_(i)
t=$.lg
if(t==null){t=V.n_()
q=$.lA
if(q==null)q=$.lA=new V.A(0,1,0)
p=$.ly
if(p==null)p=$.ly=new V.A(0,0,-1)
h=p.v(0,Math.sqrt(p.C(p)))
q=q.aA(h)
g=q.v(0,Math.sqrt(q.C(q)))
f=h.aA(g)
e=new V.A(t.a,t.b,t.c)
d=g.T(0).C(e)
c=f.T(0).C(e)
b=h.T(0).C(e)
t=V.as(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lg=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.an(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.e_(a)
u=a1.d
if(u!=null)u.am(0,a2)
for(u=a1.e.a,u=new J.a3(u,u.length);u.A();)u.d.am(0,a2)
for(u=a1.e.a,u=new J.a3(u,u.length);u.A();)u.d.aR(a2)
a1.b.toString
a2.cy.cm()
a2.db.cm()
a1.c.toString
a2.dZ()}}
A.cH.prototype={}
A.eK.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hs:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gao:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
h:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fU.prototype={
eo:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.R("")
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
A.o7(c3,u)
A.o9(c3,u)
A.o8(c3,u)
A.ob(c3,u)
A.oc(c3,u)
A.oa(c3,u)
A.od(c3,u)
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
m=A.o6(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cQ(n,35633)
b8.f=b8.cQ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.u("Failed to link shader: "+H.e(l)))}b8.fZ()
b8.h0()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.l(b8.y.N(0,"invViewMat"),"$iag")
if(t)b8.dy=H.l(b8.y.N(0,"objMat"),"$iag")
if(r)b8.fr=H.l(b8.y.N(0,"viewObjMat"),"$iag")
b8.fy=H.l(b8.y.N(0,"projViewObjMat"),"$iag")
if(c3.ry)b8.k1=H.l(b8.y.N(0,"txt2DMat"),"$icd")
if(c3.x1)b8.k2=H.l(b8.y.N(0,"txtCubeMat"),"$iag")
if(c3.x2)b8.k3=H.l(b8.y.N(0,"colorMat"),"$iag")
b8.r1=H.c([],[A.ag])
t=c3.y2
if(t>0){b8.k4=b8.y.N(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.t(P.u(c0+q+c1))
s.push(H.l(j,"$iag"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.N(0,"emissionClr"),"$iL")
if(t.c)b8.ry=H.l(b8.y.N(0,"emissionTxt"),"$ia_")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.N(0,"ambientClr"),"$iL")
if(t.c)b8.y1=H.l(b8.y.N(0,"ambientTxt"),"$ia_")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.N(0,"diffuseClr"),"$iL")
if(t.c)b8.bj=H.l(b8.y.N(0,"diffuseTxt"),"$ia_")
t=c3.d
if(t.a)b8.dk=H.l(b8.y.N(0,"invDiffuseClr"),"$iL")
if(t.c)b8.dl=H.l(b8.y.N(0,"invDiffuseTxt"),"$ia_")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dq=H.l(b8.y.N(0,"shininess"),"$iY")
if(s)b8.dm=H.l(b8.y.N(0,"specularClr"),"$iL")
if(t.c)b8.dn=H.l(b8.y.N(0,"specularTxt"),"$ia_")}if(c3.f.c)b8.dr=H.l(b8.y.N(0,"bumpTxt"),"$ia_")
if(c3.cy){b8.ds=H.l(b8.y.N(0,"envSampler"),"$ia_")
t=c3.r
if(t.a)b8.dt=H.l(b8.y.N(0,"reflectClr"),"$iL")
if(t.c)b8.du=H.l(b8.y.N(0,"reflectTxt"),"$ia_")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dv=H.l(b8.y.N(0,"refraction"),"$iY")
if(s)b8.dw=H.l(b8.y.N(0,"refractClr"),"$iL")
if(t.c)b8.dz=H.l(b8.y.N(0,"refractTxt"),"$ia_")}}t=c3.y
if(t.a)b8.dA=H.l(b8.y.N(0,"alpha"),"$iY")
if(t.c)b8.dB=H.l(b8.y.N(0,"alphaTxt"),"$ia_")
t=P.w
s=[t,A.dy]
b8.c5=new H.N(s)
b8.c6=new H.N([t,[P.o,A.cc]])
b8.c7=new H.N(s)
b8.c8=new H.N([t,[P.o,A.ce]])
b8.c9=new H.N(s)
b8.ca=new H.N([t,[P.o,A.cf]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ai()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.l(j,"$iL")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.l(c,"$iL")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.t(P.u(c0+d+c1))
H.l(b,"$iL")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.t(P.u(c0+d+c1))
H.l(j,"$iL")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.t(P.u(c0+d+c1))
H.l(c,"$iL")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.l(b,"$ibx")
a2=b}else a2=b9
e.push(new A.cc(a1,a0,a,j,c,a2))}b8.c6.m(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.Q,s=t.length,r=[A.ce],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.l(j,"$iL")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.l(c,"$iL")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.l(b,"$iL")
if(typeof g!=="number")return g.ai()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.l(a3,"$icd")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.l(a3,"$ia_")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.l(a3,"$ia_")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.l(a5,"$icb")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.l(a3,"$iY")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.l(a5,"$iY")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.l(a8,"$iY")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.ce(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c8.m(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}for(t=c3.ch,s=t.length,r=[A.cf],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
H.l(j,"$iL")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.t(P.u(c0+o+c1))
H.l(c,"$iL")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.t(P.u(c0+o+c1))
H.l(b,"$iL")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.t(P.u(c0+o+c1))
H.l(a3,"$iL")
if(typeof g!=="number")return g.ai()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.l(a5,"$iL")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.t(P.u(c0+o+c1))
H.l(a8,"$iL")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.t(P.u(c0+o+c1))
H.l(b2,"$iY")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.t(P.u(c0+o+c1))
H.l(b3,"$iY")
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
H.l(a5,"$icb")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.l(a5,"$iY")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.l(a8,"$iY")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.l(a5,"$iY")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.t(P.u(c0+d+c1))
H.l(a8,"$iY")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.t(P.u(c0+d+c1))
H.l(b2,"$iY")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.t(P.u(c0+d+c1))
H.l(a5,"$ibx")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.t(P.u(c0+o+c1))
H.l(a5,"$ibx")
a6=a5}else a6=b9
e.push(new A.cf(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.ca.m(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.t(P.u(c0+o+c1))
q.m(0,g,j)}}},
ac:function(a,b){if(b!=null&&b.d>=6)a.eg(b)}}
A.cO.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.dc.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.dj.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.fX.prototype={
h:function(a){return this.b1}}
A.cc.prototype={}
A.ce.prototype={}
A.cf.prototype={}
A.dh.prototype={
er:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.u("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fZ:function(){var u,t,s,r=this,q=H.c([],[A.cH]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cH(p,t.name,s))}r.x=new A.eK(q)},
h0:function(){var u,t,s,r=this,q=H.c([],[A.dx]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hp(t.type,t.size,t.name,s))}r.y=new A.ip(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.dy(u,b,c)
else return A.ky(u,this.r,b,a,c)},
eM:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.ky(u,this.r,b,a,c)},
eN:function(a,b,c){var u=this.a
if(a===1)return new A.a_(u,b,c)
else return A.ky(u,this.r,b,a,c)},
bg:function(a,b){return new P.dP(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hp:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.Y(u.a,c,d)
case 35664:return new A.ik(u.a,c,d)
case 35665:return new A.L(u.a,c,d)
case 35666:return new A.cb(u.a,c,d)
case 35667:return new A.il(u.a,c,d)
case 35668:return new A.im(u.a,c,d)
case 35669:return new A.io(u.a,c,d)
case 35674:return new A.iq(u.a,c,d)
case 35675:return new A.cd(u.a,c,d)
case 35676:return new A.ag(u.a,c,d)
case 35678:return u.eM(b,c,d)
case 35680:return u.eN(b,c,d)
case 35670:throw H.d(u.bg("BOOL",c))
case 35671:throw H.d(u.bg("BOOL_VEC2",c))
case 35672:throw H.d(u.bg("BOOL_VEC3",c))
case 35673:throw H.d(u.bg("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dx.prototype={}
A.ip.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.i(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dy.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.il.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.im.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.io.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ij.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Y.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ik.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.L.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cb.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iq.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cd.prototype={
ap:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ag.prototype={
ap:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bx.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a_.prototype={
eg:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jA.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cg(s.b,b).cg(s.d.cg(s.c,b),c)
a.sY(0,new V.T(r.a,r.b,r.c))
a.se6(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sd9(new V.b9(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jK.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jM.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.v(p)
s=-s*p
u=r*p
a.sY(0,new V.T(s,u,q))
u=new V.A(s,u,q)
a.se6(u.v(0,Math.sqrt(u.C(u))))
a.sd9(new V.b9(1-c,2+c,-1,-1))}}
F.jN.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jO.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k5.prototype={
$2:function(a,b){return 0}}
F.k6.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.v(s)
u=a.f
t=new V.A(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.C(t))).p(0,this.b+s)
a.sY(0,new V.T(s.a,s.b,s.c))}}
F.k9.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.jW.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.T(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jL.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kV(n.$1(o),m)
m=J.kV(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.A(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.C(m)))
n=$.lz
if(n==null){n=new V.A(1,0,0)
$.lz=n
t=n}else t=n
if(!J.D(u,t)){n=$.lB
if(n==null){n=new V.A(0,0,1)
$.lB=n
t=n}else t=n}n=u.aA(t)
s=n.v(0,Math.sqrt(n.C(n)))
n=s.aA(u)
t=n.v(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sY(0,l.B(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b_.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.L(u.a.a.d.b,u)
u.a.a.Z()}u.bQ()
u.bR()
u.fQ()},
bV:function(a){this.a=a
a.d.b.push(this)},
bW:function(a){this.b=a
a.d.c.push(this)},
fY:function(a){this.c=a
a.d.d.push(this)},
bQ:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
fQ:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cg()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dL())return
return s.v(0,Math.sqrt(s.C(s)))},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.M(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aA(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
c0:function(){var u,t=this
if(t.d!=null)return!0
u=t.eH()
if(u==null){u=t.eJ()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eG:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cg()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dL())return
return s.v(0,Math.sqrt(s.C(s)))},
eI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.M(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).p(0,p).B(0,g).M(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.aA(q)
l=l.v(0,Math.sqrt(l.C(l))).aA(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
bZ:function(){var u,t=this
if(t.e!=null)return!0
u=t.eG()
if(u==null){u=t.eI()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghj:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.a.af(J.a2(s.a.e),0)+", "+C.a.af(J.a2(s.b.e),0)+", "+C.a.af(J.a2(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
P:function(){return this.F("")}}
F.fk.prototype={}
F.hP.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bU.prototype={
b_:function(){var u=this
if(!u.gb0()){C.b.L(u.a.a.c.b,u)
u.a.a.Z()}u.bQ()
u.bR()},
bV:function(a){this.a=a
a.c.b.push(this)},
bW:function(a){this.b=a
a.c.c.push(this)},
bQ:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bR:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){if(this.gb0())return a+"disposed"
return a+C.a.af(J.a2(this.a.e),0)+", "+C.a.af(J.a2(this.b.e),0)},
P:function(){return this.F("")}}
F.fG.prototype={}
F.ii.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.c3.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.af(J.a2(u.e),0)},
P:function(){return this.F("")}}
F.hH.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.F():u},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){r=g[s]
h.a.n(0,r.hm())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c3()
if(n.a==null)H.t(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mR(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.p)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bO(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
hJ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.cB(o,0)])
for(o=[F.bd];u.length!==0;){t=C.b.ghy(u)
C.b.e1(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.b4(0,t,q)){s.push(q)
C.b.e1(u,r)}}if(s.length>1)b.b5(s)}}p.a.w()
p.c.cp()
p.d.cp()
p.b.i2()
p.c.cq(new F.ii())
p.d.cq(new F.hP())
o=p.e
if(o!=null)o.ag(0)},
bX:function(){this.hJ(new F.iK(),new F.hl())},
cb:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cb()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.b(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdN(new V.A(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.A(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.D(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.ag(0)},
hh:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aU()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aT().a)!==0)++s
if((t&$.aS().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.aV().a)!==0)++s
if((t&$.cC().a)!==0)++s
if((t&$.cD().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.aR().a)!==0)++s
r=a4.gcA(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cI])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.he(m)
k=l.gcA(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cI(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].hI(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bB(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cJ(new Z.dG(a1,d),o,a4)
c.b=H.c([],[Z.bn])
if(a0.b.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kB(u,34963,b)
c.b.push(new Z.bn(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kB(u,34963,b)
c.b.push(new Z.bn(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.w()
b.push(t.e)}a=Z.kB(u,34963,b)
c.b.push(new Z.bn(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.c([],[P.k])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.F(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.F(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.F(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.F(t))}return C.b.k(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hI.prototype={
ha:function(a){var u,t,s,r,q,p=H.c([],[F.b_]),o=a.length
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
p.push(F.bO(u,r,q))}}return p},
hb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.b_])
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
h.push(F.bO(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bO(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bO(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bO(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cq:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.b4(0,p,n)){p.b_()
break}}}}},
cp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.ghj(s)
if(t)s.b_()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bZ())s=!1
return s},
cb:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.A(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.A(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
h:function(a){return this.P()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
P:function(){return this.F("")}}
F.hJ.prototype={
gl:function(a){return this.b.length},
cq:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.b4(0,p,n)){p.b_()
break}}}}},
cp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.D(s.a,s.b)
if(t)s.b_()}},
h:function(a){return this.P()},
F:function(a){var u,t,s=H.c([],[P.k]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.k(s,"\n")},
P:function(){return this.F("")}}
F.hK.prototype={
gl:function(a){return this.b.length},
i2:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
h:function(a){return this.P()},
F:function(a){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(a))
return C.b.k(r,"\n")},
P:function(){return this.F("")}}
F.bd.prototype={
c3:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dF(u.cx,r,o,t,s,q,p,a,n)},
hm:function(){return this.c3(null)},
sY:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdN:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.C(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
se6:function(a){var u
if(!J.D(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sd9:function(a){var u
if(!J.D(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hI:function(a){var u,t,s=this
if(a.q(0,$.aU())){u=s.f
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aT())){u=s.r
t=[P.M]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aS())){u=s.x
t=[P.M]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bg())){u=s.y
t=[P.M]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.aV())){u=s.z
t=[P.M]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cC())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cD())){u=s.Q
t=[P.M]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bI()))return H.c([s.ch],[P.M])
else if(a.q(0,$.aR())){u=s.cx
t=[P.M]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.M])},
c0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cg()
t.d.H(0,new F.iP(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bZ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cg()
t.d.H(0,new F.iO(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.P()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.k])
q.push(C.a.af(J.a2(s.e),0))
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
q.push(V.C(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.k(q,", ")
return a+"{"+t+"}"},
P:function(){return this.F("")}}
F.iP.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iO.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iF.prototype={
w:function(){var u,t,s,r
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
hc:function(a,b,c,d,e,f){var u=F.dF(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bZ()
return!0},
hi:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
h:function(a){return this.P()},
F:function(a){var u,t,s,r
this.w()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].F(a))
return C.b.k(u,"\n")},
P:function(){return this.F("")}}
F.iG.prototype={
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
H:function(a,b){var u=this
C.b.H(u.b,b)
C.b.H(u.c,new F.iH(u,b))
C.b.H(u.d,new F.iI(u,b))},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iH.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iI.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.iJ.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
F.iL.prototype={}
F.iK.prototype={
b4:function(a,b,c){return J.D(b.f,c.f)}}
F.iM.prototype={}
F.hl.prototype={
b5:function(a){var u,t,s,r=V.cg()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.A(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.v(0,Math.sqrt(r.C(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)a[t].sdN(r)
return}}
F.iN.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.k])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].F(""))
return C.b.k(r,"\n")}}
O.d3.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.F():u},
a_:function(a){var u=this.fr
if(u!=null)u.E(a)},
by:function(){return this.a_(null)},
cX:function(a){this.a=null
this.a_(a)},
fU:function(){return this.cX(null)},
f1:function(a,b){var u=new D.bo()
u.b=!0
this.a_(u)},
f3:function(a,b){var u=new D.bp()
u.b=!0
this.a_(u)},
cN:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.w,h=new H.N([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=r.gaj()
p=h.i(0,r.gaj())
h.m(0,q,p==null?1:p)}o=H.c([],[A.cO])
h.H(0,new O.h0(j,o))
C.b.bu(o,new O.h1())
n=new H.N([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=r.gaj()
p=n.i(0,r.gaj())
n.m(0,q,p==null?1:p)}m=H.c([],[A.dc])
n.H(0,new O.h2(j,m))
C.b.bu(m,new O.h3())
l=new H.N([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.p)(i),++s){r=i[s]
t=r.gaj()
q=l.i(0,r.gaj())
l.m(0,t,q==null?1:q)}k=H.c([],[A.dj])
l.H(0,new O.h4(j,k))
C.b.bu(k,new O.h5())
i=C.d.a6(j.e.a.length+3,4)
j.dy.e
return A.mY(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ab:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
am:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a3(u,u.length);u.A();){t=u.d
t.toString
s=$.h6
t.a=s==null?$.h6=new V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.an(0,b,t)}},
i4:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.cN()
u=b3.fr.i(0,b2.b1)
if(u==null){u=A.mX(b2,b3.a)
t=u.b
if(t.length===0)H.t(P.u("May not cache a shader with no name."))
if(b3.fr.bh(0,t))H.t(P.u('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.m(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.bj
b2=b4.e
if(!(b2 instanceof Z.cJ))b2=b4.e=null
if(b2==null||!b2.d.q(0,r)){b2=s.k3
if(b2)b4.d.au()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.c_()
p.a.c_()
p=p.e
if(p!=null)p.ag(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.hi()
o=o.e
if(o!=null)o.ag(0)}m=b4.d.hh(new Z.iR(b3.a),r)
m.aP($.aU()).e=b1.a.Q.c
if(b2)m.aP($.aT()).e=b1.a.cx.c
if(q)m.aP($.aS()).e=b1.a.ch.c
if(s.r1)m.aP($.bg()).e=b1.a.cy.c
if(p)m.aP($.aV()).e=b1.a.db.c
if(s.rx)m.aP($.aR()).e=b1.a.dx.c
b4.e=m}l=H.c([],[T.dq])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.hu()
if(s.dy){b2=b1.a
p=b3.dx
p=p.ga7(p)
b2=b2.dy
b2.toString
b2.ap(p.ah(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.ga7(p)
o=b3.dx
o=b3.cx=p.p(0,o.ga7(o))
p=o}b2=b2.fr
b2.toString
b2.ap(p.ah(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.gi0()
o=b3.dx
o=b3.ch=p.p(0,o.ga7(o))
p=o}b2=b2.fy
b2.toString
b2.ap(p.ah(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ap(C.j.ah(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ap(C.j.ah(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ap(C.j.ah(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bB(p.ah(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}b2=s.a
if(b2.a){p=b1.a
o=b1.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.f.e)
b2=b1.a
p=b1.f.e
b2.ac(b2.ry,p)}if(s.id){b2=s.b
if(b2.a){p=b1.a
o=b1.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.r.e)
b2=b1.a
p=b1.r.e
b2.ac(b2.y1,p)}b2=s.c
if(b2.a){p=b1.a
o=b1.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.x.e)
b2=b1.a
p=b1.x.e
b2.ac(b2.bj,p)}b2=s.d
if(b2.a){p=b1.a
o=b1.y.f
p=p.dk
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.y.e)
b2=b1.a
p=b1.y.e
b2.ac(b2.dl,p)}b2=s.e
p=b2.a
if(!p)o=b2.c
else o=!0
if(o){o=b1.a
n=b1.z.ch
o=o.dq
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.z.f
p=p.dm
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.z.e)
b2=b1.a
p=b1.z.e
b2.ac(b2.dn,p)}b2=s.z
if(b2.length>0){p=b3.db
h=p.ga7(p)
p=P.w
g=new H.N([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=e.gaj()
c=g.i(0,d)
if(c==null)c=0
g.m(0,d,c+1)
b=J.cE(b1.a.c6.i(0,d),c)
n=e.gdf(e)
a=C.c.p(h.a,n.gdh(n))+C.c.p(h.b,n.gdi(n))+C.c.p(h.c,n.gdj())
a0=C.c.p(h.e,n.gdh(n))+C.c.p(h.f,n.gdi(n))+C.c.p(h.r,n.gdj())
n=C.c.p(h.y,n.gdh(n))+C.c.p(h.z,n.gdi(n))+C.c.p(h.Q,n.gdj())
n=new V.A(a,a0,n).v(0,Math.sqrt(a*a+a0*a0+n*n))
a0=b.e
a=n.a
a1=n.b
n=n.c
a0.a.uniform3f(a0.d,a,a1,n)
n=e.gaZ(e)
a1=b.f
a1.a.uniform3f(a1.d,n.a,n.b,n.c)
e.gaT()
n=e.gdf(e)
a=b.d
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gbr()
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gbp(e)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaT()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaT()
a=n.gb3(n)
if(a){a=b.r
a.toString
a0=n.gb3(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gdI(n)
a.a.uniform1i(a.d,n)}}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.c5.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.ga7(p)
p=P.w
a2=new H.N([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=e.gaj()
c=a2.i(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
b=J.cE(b1.a.c8.i(0,d),c)
a3=h.p(0,e.a)
n=e.a
a=$.c4
n=n.cr(a==null?$.c4=new V.T(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=$.c4
n=a3.cr(n==null?$.c4=new V.T(0,0,0):n)
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.c
a=b.e
a.a.uniform3f(a.d,n.a,n.b,n.c)
if(e.d!=null||!1){n=a3.dK(0)
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
i=new Float32Array(H.bB(new V.d4(a,a0,a1,a4,a5,a6,a7,a8,n).ah(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)}n=e.d
a=n!=null
if(a){if(a)if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.d
a=n!=null
if(a&&n.d>=6){a0=b.f
a0.toString
if(!a||n.d<6)a0.a.uniform1i(a0.d,0)
else{n=n.a
a0.a.uniform1i(a0.d,n)}}}n=e.r
a=b.y
a.a.uniform1f(a.d,n)
n=e.x
a=b.z
a.a.uniform1f(a.d,n)
n=e.y
a=b.Q
a.a.uniform1f(a.d,n)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=a2.i(0,o)
if(k==null)k=0
o=b1.a.c7.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.ga7(p)
p=P.w
b0=new H.N([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=e.gaj()
c=b0.i(0,d)
if(c==null)c=0
b0.m(0,d,c+1)
b=J.cE(b1.a.ca.i(0,d),c)
n=e.gi_(e)
a=b.b
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gdf(e).iD()
a=b.c
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=h.cr(e.gi_(e))
a=b.d
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gaZ(e)
a=b.e
a.a.uniform3f(a.d,n.a,n.b,n.c)
e.gaT()
n=e.gbr()
a=b.f
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.gbp(e)
a=b.r
a.a.uniform3f(a.d,n.a,n.b,n.c)
n=e.giE()
a=b.x
a.a.uniform1f(a.d,n)
n=e.giF()
a=b.y
a.a.uniform1f(a.d,n)
e.gaT()
n=e.gaT()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gaT()
a=n.gb3(n)
if(a){a=b.dx
a.toString
a0=n.gb3(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gdI(n)
a.a.uniform1i(a.d,n)}}e.gcz()
n=e.gik()
a=b.z
a.a.uniform4f(a.d,n.a,n.b,n.c,n.d)
n=e.gcz()
if(!C.b.U(l,n)){n.a=l.length
l.push(n)}n=e.gcz()
a=n.gb3(n)
if(a){a=b.dy
a.toString
a0=n.gb3(n)
if(!a0)a.a.uniform1i(a.d,0)
else{n=n.gdI(n)
a.a.uniform1i(a.d,n)}}if(e.gis()){n=e.giq()
a=b.Q
a.a.uniform1f(a.d,n)
n=e.gip()
a=b.ch
a.a.uniform1f(a.d,n)}if(e.gir()){n=e.gil()
a=b.cx
a.a.uniform1f(a.d,n)
n=e.gim()
a=b.cy
a.a.uniform1f(a.d,n)
n=e.gio()
a=b.db
a.a.uniform1f(a.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.p)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.c9.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.c){b1.ab(l,b1.Q.e)
b2=b1.a
p=b1.Q.e
b2.ac(b2.dr,p)}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.ga7(p).dK(0)}b2=b2.id
b2.toString
b2.ap(p.ah(0,!0))}if(s.cy){b1.ab(l,b1.ch)
b2=b1.a
p=b1.ch
b2.ac(b2.ds,p)
b2=s.r
if(b2.a){p=b1.a
o=b1.cx.f
p=p.dt
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.cx.e)
b2=b1.a
p=b1.cx.e
b2.ac(b2.du,p)}b2=s.x
p=b2.a
if(!p)o=b2.c
else o=!0
if(o){o=b1.a
n=b1.cy.ch
o=o.dv
o.a.uniform1f(o.d,n)}if(p){p=b1.a
o=b1.cy.f
p=p.dw
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b2.c){b1.ab(l,b1.cy.e)
b2=b1.a
p=b1.cy.e
b2.ac(b2.dz,p)}}b2=s.y
p=b2.a
o=!p
if(o)n=b2.c
else n=!0
if(n){if(p){p=b1.a
n=b1.db.f
p=p.dA
p.a.uniform1f(p.d,n)}if(b2.c){b1.ab(l,b1.db.e)
p=b1.a
n=b1.db.e
p.ac(p.dB,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d>=6){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(34067,p.b)}}p=b4.e
p.bY(b3)
p.aR(b3)
p.ih(b3)
if(o)b2=b2.c
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j){b2=l[j]
if(b2.c){b2.c=!1
q.activeTexture(33984+b2.a)
q.bindTexture(34067,null)}}b2=b1.a
b2.toString
q.useProgram(null)
b2.x.hs()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cN().b1}}
O.h0.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cO(a,C.d.a6(b+3,4)*4))}}
O.h1.prototype={
$2:function(a,b){return J.kd(a.a,b.a)}}
O.h2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dc(a,C.d.a6(b+3,4)*4))}}
O.h3.prototype={
$2:function(a,b){return J.kd(a.a,b.a)}}
O.h4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dj(a,C.d.a6(b+3,4)*4))}}
O.h5.prototype={
$2:function(a,b){return J.kd(a.a,b.a)}}
O.fV.prototype={
ay:function(){var u,t=this
t.cC()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.y(t.b,u,1)
u.b=!0
t.a.a_(u)}}}
O.bW.prototype={
a_:function(a){return this.a.a_(a)},
by:function(){return this.a_(null)},
ay:function(){},
bS:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.a_(null)}}}
O.fW.prototype={}
O.aq.prototype={
cZ:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a)
t.b=!0
s.a.a_(t)}},
ay:function(){this.cC()
this.cZ(new V.V(1,1,1))},
saZ:function(a,b){this.bS(new A.Z(!0,!1,this.c.c))
this.cZ(b)}}
O.fY.prototype={}
O.fZ.prototype={
ay:function(){var u,t=this
t.cD()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1)
u.b=!0
t.a.a_(u)}}}
O.h_.prototype={
d_:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a)
t.b=!0
u.a.a_(t)}},
ay:function(){this.cD()
this.d_(100)}}
O.dp.prototype={}
T.dq.prototype={}
T.i4.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.F():u}}
T.i5.prototype={
aJ:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.U(u,"load",new T.i6(this,u,!1,b,!1,d,a),!1)},
fV:function(a,b,c){var u,t,s,r
b=V.kP(b)
u=V.kP(a.width)
t=V.kP(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kg()
s.width=u
s.height=t
r=C.i.ed(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.or(r.getImageData(0,0,s.width,s.height))}}}
T.i6.prototype={
$1:function(a){var u=this,t=u.a,s=t.fV(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.Y.ia(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ht()}++t.e}}
X.kf.prototype={}
X.fr.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.F():u}}
X.db.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.F():u},
aH:function(a){var u=this.f
if(u!=null)u.E(a)},
eD:function(){return this.aH(null)},
saQ:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gu().L(0,s.gcH())
t=s.b
s.b=a
if(a!=null)a.gu().n(0,s.gcH())
u=new D.y("mover",t,s.b)
u.b=!0
s.aH(u)}}}
X.i0.prototype={}
V.cL.prototype={
bc:function(a){this.b=new P.fw(C.P)
this.c=null
this.d=H.c([],[[P.o,W.ak]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.ak]))
u=a.split("\n")
for(l=u.length,t=[W.ak],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eL(q,0,q.length)
n=o==null?q:o
C.N.ef(p,H.kR(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gav(m.d).push(p)}},
dW:function(a,b){var u,t,s,r,q=this
q.d=H.c([],[[P.o,W.ak]])
u=C.b.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bi():t).e8(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)q.bo(t[r])}}
V.k4.prototype={
$1:function(a){var u=C.c.e7(this.a.ghC(),2)
if(u!=="0.00")P.kQ(u+" fps")}}
V.f6.prototype={
bo:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.ia()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.K("a","z")
u.a.push(t)
t=T.K("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.K("0","9")
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.K("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.K("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.K("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.K("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.q(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.q(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.q(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.q(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.q(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.az())
t=a1.j(0,r).k(0,h)
u=T.q(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.q(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.q(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.az())
t=a1.j(0,r).k(0,e)
u=T.q(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.a4()
s=[T.b4]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.q(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.a4()
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.q(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.q(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.R("Num")
t=a1.j(0,n)
t.d=t.a.R("Num")
t=a1.j(0,m)
t.d=t.a.R("Symbol")
t=a1.j(0,j)
t.d=t.a.R("String")
t=a1.j(0,g)
t.d=t.a.R("String")
t=a1.j(0,c)
t.d=t.a.R(d)
t=a1.j(0,a0)
t.d=t.a.R(a0)
t=a1.j(0,q)
t=t.d=t.a.R(q)
u=[P.k]
t.aD(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aD(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aD(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ft.prototype={
bo:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.ia()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.K("a","z")
u.a.push(t)
t=T.K("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.K("0","9")
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.K("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.K("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.q(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.K("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.K("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.q(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.q(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.q(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.q(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.az())
t=e.j(0,j).k(0,i)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.a4()
s=[T.b4]
t.a=H.c([],s)
u.a.push(t)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.q(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.a4()
u.a=H.c([],s)
t.a.push(u)
t=T.q(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.q(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.q(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.R("Num")
u=e.j(0,n)
u.d=u.a.R("Num")
u=e.j(0,m)
u.d=u.a.R("Symbol")
u=e.j(0,i)
u.d=u.a.R(j)
u=e.j(0,g)
u.d=u.a.R(h)
u=e.j(0,f)
u.d=u.a.R(f)
u=e.j(0,q)
u=u.d=u.a.R(q)
t=[P.k]
u.aD(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aD(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aD(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fu.prototype={
bo:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.ia()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.q(new H.m("_"))
u.a.push(t)
t=T.K("a","z")
u.a.push(t)
t=T.K("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.q(new H.m("_"))
t.a.push(u)
u=T.K("0","9")
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.q(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.q(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.q(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.q(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.q(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.q(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.q(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.az())
l.j(0,s).k(0,m).a.push(new T.az())
u=l.j(0,m).k(0,m)
t=new T.a4()
t.a=H.c([],[T.b4])
u.a.push(t)
u=T.q(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.K("a","z")
t.a.push(u)
u=T.K("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.R("Symbol")
u=l.j(0,n)
u.d=u.a.R("String")
u=l.j(0,r)
t=u.a.R(r)
u.d=t
t.aD(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
t=l.j(0,q)
t.d=t.a.R(q)
t=l.j(0,m)
t.d=t.a.R(m)
return l}}
V.hr.prototype={
dW:function(a,b){this.d=H.c([],[[P.o,W.ak]])
this.O(C.b.k(b,"\n"),"#111")},
bo:function(a){},
bi:function(){return}}
V.hv.prototype={
d5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lu().gco().i(0,H.e(u))
if(t==null)if(d){c.$0()
m.d3(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kX(m.c).n(0,q)
o=W.mM("radio")
o.checked=s
o.name=u
W.U(o,"change",new V.hw(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kX(m.c).n(0,r.createElement("br"))},
aX:function(a,b,c){return this.d5(a,b,c,!1)},
d3:function(a){var u,t,s=P.lu(),r=P.k,q=P.mT(s.gco(),r,r)
q.m(0,this.a,a)
u=s.e2(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.jj([],[]).cs(""),"",t)}}
V.hw.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.d3(u.d)}}}
V.hL.prototype={
es:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hN(o),!1)},
d7:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.h_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e8(C.b.hH(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
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
if(H.oN(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.er(C.x,n,C.e,!1)
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
ec:function(a){var u,t,s,r=new V.f6("dart")
r.bc("dart")
u=new V.ft("glsl")
u.bc("glsl")
t=new V.fu("html")
t.bc("html")
s=C.b.hz(H.c([r,u,t],[V.cL]),new V.hO(a))
if(s!=null)return s
r=new V.hr("plain")
r.bc("plain")
return r},
d6:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cz(s).a1(s,"+")){b0[t]=C.a.a8(s,1)
a6.push(1)
u=!0}else if(C.a.a1(s,"-")){b0[t]=C.a.a8(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ec(a8)
r.dW(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.er(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.kZ()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.p)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.p)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gV(s);a2.A();)d.appendChild(a2.gK(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h8:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.ia()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.a4()
r=[T.b4]
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.a4()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.a4()
s.a=H.c([],r)
t.a.push(s)
t=T.q(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.q(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.q(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.a4()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.a4()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.az())
s=u.j(0,i).k(0,i)
t=new T.a4()
t.a=H.c([],r)
s.a.push(t)
s=T.q(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.R(p)
s=u.j(0,n)
s.d=s.a.R(o)
s=u.j(0,"CodeEnd")
s.d=s.a.R(m)
s=u.j(0,j)
s.d=s.a.R("Link")
s=u.j(0,i)
s.d=s.a.R(i)
this.b=u}}
V.hN.prototype={
$1:function(a){P.lq(C.n,new V.hM(this.a))}}
V.hM.prototype={
$0:function(){var u=C.c.al(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hO.prototype={
$1:function(a){return a.a===this.a}}
T.jX.prototype={
$0:function(){this.a.saa(0,F.kK(1,null,null,1))}}
T.jY.prototype={
$0:function(){this.a.saa(0,F.lU(!0,40,1))}}
T.jZ.prototype={
$0:function(){this.a.saa(0,F.lU(!1,40,0))}}
T.k_.prototype={
$0:function(){this.a.saa(0,F.m4(6,6))}}
T.k0.prototype={
$0:function(){this.a.saa(0,F.m6())}}
T.k1.prototype={
$0:function(){this.a.saa(0,F.oG())}}
T.k2.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.k]
u.d6("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d6("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ej=u.h
u=J.cY.prototype
u.el=u.h
u=P.i.prototype
u.ek=u.bs
u=W.S.prototype
u.bv=u.ad
u=W.e9.prototype
u.em=u.at
u=T.cU.prototype
u.ei=u.aC
u.cB=u.h
u=O.bW.prototype
u.cC=u.ay
u=O.aq.prototype
u.cD=u.ay})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ol","nu",8)
u(P,"om","nv",8)
u(P,"on","nw",8)
t(P,"lT","oj",10)
s(W,"oA",4,null,["$4"],["nx"],15,0)
s(W,"oB",4,null,["$4"],["ny"],15,0)
var m
r(m=E.aC.prototype,"gdS",0,0,null,["$1","$0"],["dT","hR"],0,0)
r(m,"gdU",0,0,null,["$1","$0"],["dV","hS"],0,0)
r(m,"gdQ",0,0,null,["$1","$0"],["dR","hQ"],0,0)
r(m,"gdO",0,0,null,["$1","$0"],["dP","hN"],0,0)
q(m,"ghL","hM",4)
q(m,"ghO","hP",4)
r(m=E.dr.prototype,"gcE",0,0,null,["$1","$0"],["cG","cF"],0,0)
p(m,"gi6","e3",10)
o(m=X.dB.prototype,"gfg","fh",5)
o(m,"gf4","f5",5)
o(m,"gfa","fb",2)
o(m,"gfk","fl",11)
o(m,"gfi","fj",11)
o(m,"gfo","fp",2)
o(m,"gft","fu",2)
o(m,"gfe","ff",2)
o(m,"gfq","fs",2)
o(m,"gfc","fd",2)
o(m,"gfv","fw",18)
o(m,"gfz","fA",5)
o(m,"gfM","fN",6)
o(m,"gfI","fJ",6)
o(m,"gfK","fL",6)
r(m=D.d_.prototype,"gcV",0,0,null,["$1","$0"],["cW","fm"],0,0)
o(m,"gfC","fD",19)
q(m,"geZ","f_",12)
q(m,"gfG","fH",12)
r(D.br.prototype,"gbx",0,0,null,["$1","$0"],["a4","ew"],0,0)
n(V.G.prototype,"gl","b2",7)
n(V.A.prototype,"gl","b2",7)
n(V.ch.prototype,"gl","b2",7)
r(m=U.bQ.prototype,"gaK",0,0,null,["$1","$0"],["G","a5"],0,0)
q(m,"gex","ey",13)
q(m,"gfE","fF",13)
r(m=U.dC.prototype,"gaK",0,0,null,["$1","$0"],["G","a5"],0,0)
o(m,"gbH","bI",1)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
r(m=U.dD.prototype,"gaK",0,0,null,["$1","$0"],["G","a5"],0,0)
o(m,"gbH","bI",1)
o(m,"gbJ","bK",1)
o(m,"gbL","bM",1)
o(m,"geR","eS",1)
o(m,"geT","eU",1)
o(m,"gh6","h7",1)
o(m,"gh4","h5",1)
o(m,"gh2","h3",1)
o(U.dE.prototype,"geW","eX",1)
r(m=M.cR.prototype,"gaq",0,0,null,["$1","$0"],["aw","ez"],0,0)
q(m,"gf6","f7",4)
q(m,"gf8","f9",4)
r(m=O.d3.prototype,"gbd",0,0,null,["$1","$0"],["a_","by"],0,0)
r(m,"gfT",0,0,null,["$1","$0"],["cX","fU"],0,0)
q(m,"gf0","f1",14)
q(m,"gf2","f3",14)
r(O.bW.prototype,"gbd",0,0,null,["$1","$0"],["a_","by"],0,0)
r(X.db.prototype,"gcH",0,0,null,["$1","$0"],["aH","eD"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a0,null)
s(P.a0,[H.kr,J.a,J.a3,P.dX,P.i,H.bV,P.fA,H.cS,H.iu,H.eZ,H.ig,P.bl,H.bL,H.ee,P.aF,H.fH,H.fJ,H.fC,P.ek,P.dH,P.dm,P.hX,P.ds,P.jz,P.jd,P.j7,P.dW,P.r,P.jr,P.fQ,P.eV,P.fx,P.jx,P.jw,P.ay,P.a7,P.ab,P.aZ,P.hp,P.dk,P.dP,P.fq,P.fs,P.o,P.Q,P.b6,P.k,P.R,P.bz,P.iw,P.jg,W.f2,W.ck,W.I,W.d9,W.e9,W.jm,W.cT,W.aI,W.jc,W.es,P.ji,P.ep,P.j8,P.bw,T.az,T.cU,T.b4,T.hx,T.hG,R.dl,R.dt,R.du,R.i9,O.aY,O.bX,E.eR,E.aC,E.hy,E.dr,Z.dG,Z.iR,Z.cJ,Z.bn,Z.aP,D.eU,D.bm,D.W,X.cK,X.cZ,X.fE,X.fN,X.af,X.hd,X.ib,X.dB,D.f8,D.a8,D.br,D.hS,V.V,V.an,V.fh,V.d4,V.ar,V.a5,V.T,V.b9,V.de,V.G,V.A,V.ch,U.dC,U.dD,U.dE,M.cR,A.cH,A.eK,A.Z,A.cO,A.dc,A.dj,A.fX,A.cc,A.ce,A.cf,A.dx,A.ip,F.b_,F.fk,F.bU,F.fG,F.c3,F.hH,F.hI,F.hJ,F.hK,F.bd,F.iF,F.iG,F.iJ,F.iL,F.iM,F.iN,O.dp,O.bW,O.fY,T.i5,X.kf,X.i0,X.db,V.cL,V.hv,V.hL])
s(J.a,[J.fB,J.cX,J.cY,J.b0,J.bT,J.b1,H.c0,H.b5,W.f,W.eH,W.bi,W.ao,W.H,W.dJ,W.ae,W.f7,W.f9,W.dL,W.cQ,W.dN,W.fb,W.h,W.dQ,W.aD,W.fv,W.dS,W.aE,W.fM,W.h7,W.dY,W.dZ,W.aG,W.e_,W.e2,W.aJ,W.e6,W.e8,W.aL,W.ea,W.aM,W.ef,W.au,W.ei,W.i8,W.aO,W.el,W.id,W.iB,W.et,W.ev,W.ex,W.ez,W.eB,P.b3,P.dU,P.b7,P.e4,P.hu,P.eg,P.bb,P.en,P.eL,P.dI,P.df,P.ec])
s(J.cY,[J.hq,J.by,J.b2])
t(J.kq,J.b0)
s(J.bT,[J.cW,J.cV])
t(P.fL,P.dX)
s(P.fL,[H.dz,W.iY,W.a1,P.fm])
t(H.m,H.dz)
s(P.i,[H.fe,H.fR,H.ci])
s(H.fe,[H.d1,H.fI])
s(P.fA,[H.fS,H.iS])
t(H.fT,H.d1)
t(H.f_,H.eZ)
s(P.bl,[H.hm,H.fD,H.it,H.eT,H.hE,P.da,P.aj,P.iv,P.ir,P.c8,P.eX,P.f5])
s(H.bL,[H.ka,H.i1,H.jS,H.jT,H.jU,P.iU,P.iT,P.iV,P.iW,P.jq,P.jp,P.jI,P.ja,P.jb,P.fK,P.fP,P.fc,P.fd,P.iA,P.ix,P.iy,P.iz,P.js,P.jt,P.jv,P.ju,P.jD,P.jC,P.jE,P.jF,W.ff,W.h9,W.hb,W.hD,W.hW,W.j2,W.hk,W.hj,W.je,W.jf,W.jo,W.jy,P.jk,P.jJ,P.fn,P.fo,P.eN,E.hz,E.hA,E.hB,E.i7,D.fi,D.fj,F.jA,F.jK,F.jM,F.jN,F.jO,F.k5,F.k6,F.k9,F.jW,F.jL,F.iP,F.iO,F.iH,F.iI,O.h0,O.h1,O.h2,O.h3,O.h4,O.h5,T.i6,V.k4,V.hw,V.hN,V.hM,V.hO,T.jX,T.jY,T.jZ,T.k_,T.k0,T.k1,T.k2])
s(H.i1,[H.hU,H.bJ])
t(P.fO,P.aF)
s(P.fO,[H.N,W.iX])
t(H.d5,H.b5)
s(H.d5,[H.cm,H.co])
t(H.cn,H.cm)
t(H.c1,H.cn)
t(H.cp,H.co)
t(H.d6,H.cp)
s(H.d6,[H.he,H.hf,H.hg,H.hh,H.hi,H.d7,H.c2])
t(P.j9,P.jz)
t(P.j6,P.jd)
t(P.eq,P.fQ)
t(P.dA,P.eq)
s(P.eV,[P.eP,P.fg])
t(P.f0,P.hX)
s(P.f0,[P.eQ,P.fw,P.iE,P.iD])
t(P.iC,P.fg)
s(P.ab,[P.M,P.w])
s(P.aj,[P.bu,P.fy])
t(P.j_,P.bz)
s(W.f,[W.E,W.fl,W.bZ,W.aK,W.cq,W.aN,W.av,W.cs,W.iQ,W.cj,P.eO,P.bh])
s(W.E,[W.S,W.aX])
s(W.S,[W.n,P.j])
s(W.n,[W.eI,W.eJ,W.bj,W.bk,W.ak,W.fp,W.bS,W.hF,W.dn,W.hZ,W.i_,W.ca])
t(W.f1,W.ao)
t(W.bM,W.dJ)
s(W.ae,[W.f3,W.f4])
t(W.dM,W.dL)
t(W.cP,W.dM)
t(W.dO,W.dN)
t(W.fa,W.dO)
t(W.ap,W.bi)
t(W.dR,W.dQ)
t(W.bP,W.dR)
t(W.dT,W.dS)
t(W.bR,W.dT)
t(W.bc,W.h)
s(W.bc,[W.bq,W.at,W.bv])
t(W.h8,W.dY)
t(W.ha,W.dZ)
t(W.e0,W.e_)
t(W.hc,W.e0)
t(W.e3,W.e2)
t(W.d8,W.e3)
t(W.e7,W.e6)
t(W.hs,W.e7)
t(W.hC,W.e8)
t(W.cr,W.cq)
t(W.hQ,W.cr)
t(W.eb,W.ea)
t(W.hR,W.eb)
t(W.hV,W.ef)
t(W.ej,W.ei)
t(W.i2,W.ej)
t(W.ct,W.cs)
t(W.i3,W.ct)
t(W.em,W.el)
t(W.ic,W.em)
t(W.be,W.at)
t(W.eu,W.et)
t(W.iZ,W.eu)
t(W.dK,W.cQ)
t(W.ew,W.ev)
t(W.j3,W.ew)
t(W.ey,W.ex)
t(W.e1,W.ey)
t(W.eA,W.ez)
t(W.jh,W.eA)
t(W.eC,W.eB)
t(W.jl,W.eC)
t(W.j0,W.iX)
t(W.j1,P.dm)
t(W.jn,W.e9)
t(P.jj,P.ji)
t(P.aa,P.j8)
t(P.dV,P.dU)
t(P.fF,P.dV)
t(P.e5,P.e4)
t(P.hn,P.e5)
t(P.c7,P.j)
t(P.eh,P.eg)
t(P.hY,P.eh)
t(P.eo,P.en)
t(P.ie,P.eo)
t(P.eM,P.dI)
t(P.ho,P.bh)
t(P.ed,P.ec)
t(P.hT,P.ed)
s(T.cU,[T.a4,R.dw])
s(E.eR,[Z.cI,A.dh,T.dq])
s(D.W,[D.bo,D.bp,D.y,X.ht])
s(X.ht,[X.d2,X.aH,X.c_,X.dv])
s(O.aY,[D.d_,U.bQ])
s(D.eU,[U.eW,U.a9])
s(U.a9,[U.cM,U.dg])
t(A.fU,A.dh)
s(A.dx,[A.dy,A.il,A.im,A.io,A.ij,A.Y,A.ik,A.L,A.cb,A.iq,A.cd,A.ag,A.bx,A.a_])
t(F.hP,F.fk)
t(F.ii,F.fG)
t(F.iK,F.iL)
t(F.hl,F.iM)
t(O.d3,O.dp)
s(O.bW,[O.fV,O.fW,O.aq])
s(O.aq,[O.fZ,O.h_])
t(T.i4,T.dq)
t(X.fr,X.i0)
s(V.cL,[V.f6,V.ft,V.fu,V.hr])
u(H.dz,H.iu)
u(H.cm,P.r)
u(H.cn,H.cS)
u(H.co,P.r)
u(H.cp,H.cS)
u(P.dX,P.r)
u(P.eq,P.jr)
u(W.dJ,W.f2)
u(W.dL,P.r)
u(W.dM,W.I)
u(W.dN,P.r)
u(W.dO,W.I)
u(W.dQ,P.r)
u(W.dR,W.I)
u(W.dS,P.r)
u(W.dT,W.I)
u(W.dY,P.aF)
u(W.dZ,P.aF)
u(W.e_,P.r)
u(W.e0,W.I)
u(W.e2,P.r)
u(W.e3,W.I)
u(W.e6,P.r)
u(W.e7,W.I)
u(W.e8,P.aF)
u(W.cq,P.r)
u(W.cr,W.I)
u(W.ea,P.r)
u(W.eb,W.I)
u(W.ef,P.aF)
u(W.ei,P.r)
u(W.ej,W.I)
u(W.cs,P.r)
u(W.ct,W.I)
u(W.el,P.r)
u(W.em,W.I)
u(W.et,P.r)
u(W.eu,W.I)
u(W.ev,P.r)
u(W.ew,W.I)
u(W.ex,P.r)
u(W.ey,W.I)
u(W.ez,P.r)
u(W.eA,W.I)
u(W.eB,P.r)
u(W.eC,W.I)
u(P.dU,P.r)
u(P.dV,W.I)
u(P.e4,P.r)
u(P.e5,W.I)
u(P.eg,P.r)
u(P.eh,W.I)
u(P.en,P.r)
u(P.eo,W.I)
u(P.dI,P.aF)
u(P.ec,P.r)
u(P.ed,W.I)})()
var v={mangledGlobalNames:{w:"int",M:"double",ab:"num",k:"String",ay:"bool",b6:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.b6,args:[,,]},{func:1,ret:-1,args:[P.w,[P.i,E.aC]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:P.M},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[P.w,[P.i,D.a8]]},{func:1,ret:-1,args:[P.w,[P.i,U.a9]]},{func:1,ret:-1,args:[P.w,[P.i,V.ar]]},{func:1,ret:P.ay,args:[W.S,P.k,P.k,W.ck]},{func:1,ret:P.b6,args:[,]},{func:1,ret:P.bw,args:[,,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.ay,args:[[P.i,D.a8]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bj.prototype
C.i=W.bk.prototype
C.N=W.ak.prototype
C.Q=J.a.prototype
C.b=J.b0.prototype
C.R=J.cV.prototype
C.d=J.cW.prototype
C.j=J.cX.prototype
C.c=J.bT.prototype
C.a=J.b1.prototype
C.S=J.b2.prototype
C.A=J.hq.prototype
C.Y=P.df.prototype
C.B=W.dn.prototype
C.q=J.by.prototype
C.C=W.be.prototype
C.D=W.cj.prototype
C.Z=new P.eQ()
C.E=new P.eP()
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

C.L=new P.hp()
C.e=new P.iC()
C.M=new P.iE()
C.f=new P.j9()
C.n=new P.aZ(0)
C.O=new P.aZ(5e6)
C.P=new P.fx("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.w])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.w=H.c(u([]),[P.k])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.c(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.p=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.X=new H.f_(0,{},C.w,[P.k,P.k])})();(function staticFields(){$.am=0
$.bK=null
$.l1=null
$.lZ=null
$.lS=null
$.m2=null
$.jP=null
$.jV=null
$.kN=null
$.bC=null
$.cw=null
$.cx=null
$.kH=!1
$.al=C.f
$.a6=[]
$.aB=null
$.kk=null
$.l6=null
$.l5=null
$.cl=P.kt(P.k,P.fs)
$.h6=null
$.lh=null
$.c4=null
$.lm=null
$.lx=null
$.lC=null
$.lz=null
$.lA=null
$.lB=null
$.ly=null
$.lD=null
$.lg=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oT","m8",function(){return H.lY("_$dart_dartClosure")})
u($,"oU","kT",function(){return H.lY("_$dart_js")})
u($,"oV","m9",function(){return H.aw(H.ih({
toString:function(){return"$receiver$"}}))})
u($,"oW","ma",function(){return H.aw(H.ih({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oX","mb",function(){return H.aw(H.ih(null))})
u($,"oY","mc",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p0","mf",function(){return H.aw(H.ih(void 0))})
u($,"p1","mg",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"p_","me",function(){return H.aw(H.ls(null))})
u($,"oZ","md",function(){return H.aw(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p3","mi",function(){return H.aw(H.ls(void 0))})
u($,"p2","mh",function(){return H.aw(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ph","kU",function(){return P.nt()})
u($,"p4","mj",function(){return P.nq()})
u($,"pi","mn",function(){return H.mZ(H.bB(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pk","mp",function(){return P.nd("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pl","mq",function(){return P.nS()})
u($,"pj","mo",function(){return P.l8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"pb","mm",function(){return Z.ah(0)})
u($,"p5","mk",function(){return Z.ah(511)})
u($,"pd","aU",function(){return Z.ah(1)})
u($,"pc","aT",function(){return Z.ah(2)})
u($,"p7","aS",function(){return Z.ah(4)})
u($,"pe","bg",function(){return Z.ah(8)})
u($,"pf","aV",function(){return Z.ah(16)})
u($,"p8","cC",function(){return Z.ah(32)})
u($,"p9","cD",function(){return Z.ah(64)})
u($,"pa","ml",function(){return Z.ah(96)})
u($,"pg","bI",function(){return Z.ah(128)})
u($,"p6","aR",function(){return Z.ah(256)})
u($,"oS","m7",function(){return new V.fh(1e-9)})
u($,"oR","z",function(){return $.m7()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c0,DataView:H.b5,ArrayBufferView:H.b5,Float32Array:H.c1,Float64Array:H.c1,Int16Array:H.he,Int32Array:H.hf,Int8Array:H.hg,Uint16Array:H.hh,Uint32Array:H.hi,Uint8ClampedArray:H.d7,CanvasPixelArray:H.d7,Uint8Array:H.c2,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eH,HTMLAnchorElement:W.eI,HTMLAreaElement:W.eJ,Blob:W.bi,HTMLBodyElement:W.bj,HTMLCanvasElement:W.bk,CDATASection:W.aX,CharacterData:W.aX,Comment:W.aX,ProcessingInstruction:W.aX,Text:W.aX,CSSPerspective:W.f1,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,CSSImageValue:W.ae,CSSKeywordValue:W.ae,CSSNumericValue:W.ae,CSSPositionValue:W.ae,CSSResourceValue:W.ae,CSSUnitValue:W.ae,CSSURLImageValue:W.ae,CSSStyleValue:W.ae,CSSMatrixComponent:W.ao,CSSRotation:W.ao,CSSScale:W.ao,CSSSkew:W.ao,CSSTranslation:W.ao,CSSTransformComponent:W.ao,CSSTransformValue:W.f3,CSSUnparsedValue:W.f4,DataTransferItemList:W.f7,HTMLDivElement:W.ak,DOMException:W.f9,ClientRectList:W.cP,DOMRectList:W.cP,DOMRectReadOnly:W.cQ,DOMStringList:W.fa,DOMTokenList:W.fb,Element:W.S,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ap,FileList:W.bP,FileWriter:W.fl,HTMLFormElement:W.fp,Gamepad:W.aD,History:W.fv,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.aE,HTMLImageElement:W.bS,KeyboardEvent:W.bq,Location:W.fM,MediaList:W.h7,MessagePort:W.bZ,MIDIInputMap:W.h8,MIDIOutputMap:W.ha,MimeType:W.aG,MimeTypeArray:W.hc,PointerEvent:W.at,MouseEvent:W.at,DragEvent:W.at,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.d8,RadioNodeList:W.d8,Plugin:W.aJ,PluginArray:W.hs,RTCStatsReport:W.hC,HTMLSelectElement:W.hF,SourceBuffer:W.aK,SourceBufferList:W.hQ,SpeechGrammar:W.aL,SpeechGrammarList:W.hR,SpeechRecognitionResult:W.aM,Storage:W.hV,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableElement:W.dn,HTMLTableRowElement:W.hZ,HTMLTableSectionElement:W.i_,HTMLTemplateElement:W.ca,TextTrack:W.aN,TextTrackCue:W.av,VTTCue:W.av,TextTrackCueList:W.i2,TextTrackList:W.i3,TimeRanges:W.i8,Touch:W.aO,TouchEvent:W.bv,TouchList:W.ic,TrackDefaultList:W.id,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.iB,VideoTrackList:W.iQ,WheelEvent:W.be,Window:W.cj,DOMWindow:W.cj,CSSRuleList:W.iZ,ClientRect:W.dK,DOMRect:W.dK,GamepadList:W.j3,NamedNodeMap:W.e1,MozNamedAttrMap:W.e1,SpeechRecognitionResultList:W.jh,StyleSheetList:W.jl,SVGLength:P.b3,SVGLengthList:P.fF,SVGNumber:P.b7,SVGNumberList:P.hn,SVGPointList:P.hu,SVGScriptElement:P.c7,SVGStringList:P.hY,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bb,SVGTransformList:P.ie,AudioBuffer:P.eL,AudioParamMap:P.eM,AudioTrackList:P.eO,AudioContext:P.bh,webkitAudioContext:P.bh,BaseAudioContext:P.bh,OfflineAudioContext:P.ho,WebGL2RenderingContext:P.df,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.m0,[])
else T.m0([])})})()
//# sourceMappingURL=test.dart.js.map
