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
a[c]=function(){a[c]=function(){H.pO(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lw(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l9:function l9(){},
kE:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h9:function(){return new P.cS("No element")},
nJ:function(){return new P.cS("Too many elements")},
e4:function(a,b,c,d,e){if(c-b<=32)H.od(a,b,c,d,e)
else H.oc(a,b,c,d,e)},
od:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oc:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a7(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a7(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.c(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.c(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.c(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.c(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.c(a2,c)
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
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.R(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.e4(a2,a3,o-2,a5,a6)
H.e4(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.R(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.R(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.e4(a2,o,n,a5,a6)}else H.e4(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fQ:function fQ(){},
bZ:function bZ(){},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
hq:function hq(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
js:function js(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(){},
d0:function d0(){},
eg:function eg(){},
nB:function(){throw H.e(P.I("Cannot modify unmodifiable Map"))},
cn:function(a){var u,t=H.pP(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pv:function(a){return v.types[H.ac(a)]},
pC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iK},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.e(H.aY(a))
return u},
cN:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o4:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.L(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cO:function(a){return H.nW(a)+H.ls(H.bN(a),0,null)},
nW:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ic9){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cn(t.length>1&&C.b.C(t,0)===36?C.b.a8(t,1):t)},
nX:function(){if(!!self.location)return self.location.href
return},
m4:function(a){var u,t,s,r,q=J.aB(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o5:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aY(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aM(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.aY(s))}return H.m4(r)},
m5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aY(s))
if(s<0)throw H.e(H.aY(s))
if(s>65535)return H.o5(a)}return H.m4(a)},
o6:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c0:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aM(u,10))>>>0,56320|u&1023)}}throw H.e(P.ag(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o3:function(a){var u=H.c_(a).getFullYear()+0
return u},
o1:function(a){var u=H.c_(a).getMonth()+1
return u},
nY:function(a){var u=H.c_(a).getDate()+0
return u},
nZ:function(a){var u=H.c_(a).getHours()+0
return u},
o0:function(a){var u=H.c_(a).getMinutes()+0
return u},
o2:function(a){var u=H.c_(a).getSeconds()+0
return u},
o_:function(a){var u=H.c_(a).getMilliseconds()+0
return u},
F:function(a){throw H.e(H.aY(a))},
c:function(a,b){if(a==null)J.aB(a)
throw H.e(H.ch(a,b))},
ch:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,s,null)
u=H.ac(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.e0(b,s)},
pq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c1(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c1(a,c,!0,b,"end",u)
return new P.aK(!0,b,"end",null)},
aY:function(a){return new P.aK(!0,a,null,null)},
pl:function(a){if(typeof a!=="number")throw H.e(H.aY(a))
return a},
e:function(a){var u
if(a==null)a=new P.dX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n0})
u.name=""}else u.toString=H.n0
return u},
n0:function(){return J.ar(this.dartException)},
y:function(a){throw H.e(a)},
t:function(a){throw H.e(P.bg(a))},
bb:function(a){var u,t,s,r,q,p
a=H.n_(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m0:function(a,b){return new H.hU(a,b==null?null:b.method)},
la:function(a,b){var u=b==null,t=u?null:b.method
return new H.hc(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.la(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m0(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n4()
q=$.n5()
p=$.n6()
o=$.n7()
n=$.na()
m=$.nb()
l=$.n9()
$.n8()
k=$.nd()
j=$.nc()
i=r.ab(u)
if(i!=null)return f.$1(H.la(H.L(u),i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.la(H.L(u),i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m0(H.L(u),i))}}return f.$1(new H.j1(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e6()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aK(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e6()
return a},
cl:function(a){var u
if(a==null)return new H.eU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eU(a)},
pu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pB:function(a,b,c,d,e,f){H.h(a,"$iby")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.B("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pB)
a.$identity=u
return u},
nA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ir().constructor.prototype):Object.create(new H.cq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.w()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lP(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nw(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lP(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nw:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pv,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lO:H.l1
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nx:function(a,b,c,d){var u=H.l1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nx(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.w()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cr
return new Function(r+H.i(q==null?$.cr=H.fx("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.w()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cr
return new Function(r+H.i(q==null?$.cr=H.fx("self"):q)+"."+H.i(u)+"("+o+");}")()},
ny:function(a,b,c,d){var u=H.l1,t=H.lO
switch(b?-1:a){case 0:throw H.e(H.oa("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nz:function(a,b){var u,t,s,r,q,p,o,n=$.cr
if(n==null)n=$.cr=H.fx("self")
u=$.lN
if(u==null)u=$.lN=H.fx("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ny(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aZ
if(typeof u!=="number")return u.w()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.w()
$.aZ=u+1
return new Function(n+u+"}")()},
lw:function(a,b,c,d,e,f,g){return H.nA(a,b,c,d,!!e,!!f,g)},
l1:function(a){return a.a},
lO:function(a){return a.c},
fx:function(a){var u,t,s,r=new H.cq("self","target","receiver","name"),q=J.l7(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.ph("boolean expression must not be null")
return a},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aX(a,"String"))},
pr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aX(a,"double"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aX(a,"num"))},
lt:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aX(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aX(a,"int"))},
mY:function(a,b){throw H.e(H.aX(a,H.cn(H.L(b).substring(2))))},
pI:function(a,b){throw H.e(H.nv(a,H.cn(H.L(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.mY(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.pI(a,b)},
qz:function(a){if(a==null)return a
if(!!J.P(a).$ib)return a
throw H.e(H.aX(a,"List<dynamic>"))},
mU:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ib)return a
if(u[b])return a
H.mY(a,b)},
mP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fi:function(a,b){var u
if(typeof a=="function")return!0
u=H.mP(J.P(a))
if(u==null)return!1
return H.mB(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lp)return a
$.lp=!0
try{if(H.fi(a,b))return a
u=H.kS(b)
t=H.aX(a,u)
throw H.e(t)}finally{$.lp=!1}},
ly:function(a,b){if(a!=null&&!H.lv(a,b))H.y(H.aX(a,H.kS(b)))
return a},
aX:function(a,b){return new H.iR("TypeError: "+P.dD(a)+": type '"+H.i(H.mH(a))+"' is not a subtype of type '"+b+"'")},
nv:function(a,b){return new H.fy("CastError: "+P.dD(a)+": type '"+H.i(H.mH(a))+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t=J.P(a)
if(!!t.$ict){u=H.mP(t)
if(u!=null)return H.kS(u)
return"Closure"}return H.cO(a)},
ph:function(a){throw H.e(new H.jt(a))},
pO:function(a){throw H.e(new P.fI(a))},
oa:function(a){return new H.ib(a)},
mR:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bN:function(a){if(a==null)return
return a.$ti},
qy:function(a,b,c){return H.cm(a["$a"+H.i(c)],H.bN(b))},
ck:function(a,b,c,d){var u=H.cm(a["$a"+H.i(c)],H.bN(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u=H.cm(a["$a"+H.i(b)],H.bN(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bN(a)
return u==null?null:u[b]},
kS:function(a){return H.bM(a,null)},
bM:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cn(a[0].name)+H.ls(a,1,b)
if(typeof a=="function")return H.cn(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.oR(a,b)
if('futureOr' in a)return"FutureOr<"+H.bM("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oR:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.f])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.T)p+=" extends "+H.bM(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bM(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bM(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bM(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pt(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.L(n[g])
i=i+h+H.bM(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ls:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a5("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bM(p,c)}return"<"+u.i(0)+">"},
cm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lu:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bN(a)
t=J.P(a)
if(t[b]==null)return!1
return H.mK(H.cm(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lu(a,b,c,d))return a
throw H.e(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cn(b.substring(2))+H.ls(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
qw:function(a,b,c){return a.apply(b,H.cm(J.P(b)["$a"+H.i(c)],H.bN(b)))},
mT:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="T"||a.name==="M"||a===-1||a===-2||H.mT(u)}return!1},
lv:function(a,b){var u,t
if(a==null)return b==null||b.name==="T"||b.name==="M"||b===-1||b===-2||H.mT(b)
if(b==null||b===-1||b.name==="T"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fi(a,b)}u=J.P(a).constructor
t=H.bN(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lv(a,b))throw H.e(H.aX(a,H.kS(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="T"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="T"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aJ("type" in a?a.type:l,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cz" in t.prototype))return!1
r=t.prototype["$a"+"cz"]
q=H.cm(r,u?a.slice(1):l)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mB(a,b,c,d)
if('func' in a)return c.name==="by"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mK(H.cm(m,u),b,p,d)},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aJ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aJ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aJ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aJ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pG(h,b,g,d)},
pG:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aJ(c[s],d,a[s],b))return!1}return!0},
qx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pE:function(a){var u,t,s,r,q=H.L($.mS.$1(a)),p=$.kC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.L($.mJ.$2(a,q))
if(q!=null){p=$.kC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kR(u)
$.kC[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kI[q]=u
return u}if(s==="-"){r=H.kR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mX(a,u)
if(s==="*")throw H.e(P.j0(q))
if(v.leafTags[q]===true){r=H.kR(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mX(a,u)},
mX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kR:function(a){return J.lA(a,!1,null,!!a.$iK)},
pF:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kR(u)
else return J.lA(u,c,null,null)},
pz:function(){if(!0===$.lz)return
$.lz=!0
H.pA()},
pA:function(){var u,t,s,r,q,p,o,n
$.kC=Object.create(null)
$.kI=Object.create(null)
H.py()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mZ.$1(q)
if(p!=null){o=H.pF(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
py:function(){var u,t,s,r,q,p,o=C.G()
o=H.cf(C.H,H.cf(C.I,H.cf(C.v,H.cf(C.v,H.cf(C.J,H.cf(C.K,H.cf(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mS=new H.kF(r)
$.mJ=new H.kG(q)
$.mZ=new H.kH(p)},
cf:function(a,b){return a(b)||b},
nL:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.a3("Illegal RegExp pattern ("+String(p)+")",a,null))},
pM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ps:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lD:function(a,b,c){var u=H.pN(a,b,c)
return u},
pN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n_(b),'g'),H.ps(c))},
fC:function fC(){},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hU:function hU(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
kY:function kY(a){this.a=a},
eU:function eU(a){this.a=a
this.b=null},
ct:function ct(){},
iB:function iB(){},
ir:function ir(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a){this.a=a},
fy:function fy(a){this.a=a},
ib:function ib(a){this.a=a},
jt:function jt(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hh:function hh(a,b){this.a=a
this.$ti=b},
hi:function hi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
nU:function(a){return new Int8Array(a)},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.ch(b,a))},
oP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pq(a,b,c))
return b},
cI:function cI(){},
bE:function bE(){},
dT:function dT(){},
cJ:function cJ(){},
dU:function dU(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
dV:function dV(){},
cK:function cK(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
pt:function(a){return J.lW(a?Object.keys(a):[],null)},
pP:function(a){return v.mangledGlobalNames[a]},
pH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kD:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lz==null){H.pz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.j0("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lF()]
if(r!=null)return r
r=H.pE(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lF(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.l0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ag(a,0,4294967295,"length",null))
return J.lW(new Array(a),b)},
lW:function(a,b){return J.l7(H.d(a,[b]))},
l7:function(a){a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dG.prototype
return J.dF.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.dH.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.T)return a
return J.kD(a)},
dj:function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.T)return a
return J.kD(a)},
fj:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.T)return a
return J.kD(a)},
mQ:function(a){if(typeof a=="number")return J.cD.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.c9.prototype
return a},
dk:function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.T))return J.c9.prototype
return a},
cj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.T)return a
return J.kD(a)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).q(a,b)},
lH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mQ(a).B(a,b)},
dn:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dj(a).j(a,b)},
kZ:function(a,b,c){return J.fj(a).k(a,b,c)},
nm:function(a,b){return J.dk(a).C(a,b)},
nn:function(a,b,c){return J.cj(a).hk(a,b,c)},
no:function(a,b,c,d){return J.cj(a).hP(a,b,c,d)},
np:function(a,b){return J.dk(a).V(a,b)},
l_:function(a,b){return J.mQ(a).i4(a,b)},
fl:function(a,b){return J.fj(a).H(a,b)},
nq:function(a,b,c,d){return J.cj(a).io(a,b,c,d)},
lI:function(a,b){return J.fj(a).F(a,b)},
nr:function(a){return J.cj(a).gi_(a)},
lJ:function(a){return J.cj(a).gbZ(a)},
dp:function(a){return J.P(a).gG(a)},
bq:function(a){return J.fj(a).gT(a)},
aB:function(a){return J.dj(a).gn(a)},
lK:function(a){return J.fj(a).iW(a)},
ns:function(a,b){return J.cj(a).j_(a,b)},
nt:function(a,b,c){return J.dk(a).p(a,b,c)},
nu:function(a){return J.dk(a).j9(a)},
ar:function(a){return J.P(a).i(a)},
a:function a(){},
ha:function ha(){},
dH:function dH(){},
dI:function dI(){},
hY:function hY(){},
c9:function c9(){},
bB:function bB(){},
b3:function b3(a){this.$ti=a},
l8:function l8(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cD:function cD(){},
dG:function dG(){},
dF:function dF(){},
bA:function bA(){}},P={
oq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pi()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cg(new P.jv(s),1)).observe(u,{childList:true})
return new P.ju(s,u,t)}else if(self.setImmediate!=null)return P.pj()
return P.pk()},
or:function(a){self.scheduleImmediate(H.cg(new P.jw(H.o(a,{func:1,ret:-1})),0))},
os:function(a){self.setImmediate(H.cg(new P.jx(H.o(a,{func:1,ret:-1})),0))},
ot:function(a){P.le(C.o,H.o(a,{func:1,ret:-1}))},
le:function(a,b){var u=C.d.a7(a.a,1000)
return P.oz(u<0?0:u,b)},
me:function(a,b){var u=C.d.a7(a.a,1000)
return P.oA(u<0?0:u,b)},
oz:function(a,b){var u=new P.f_()
u.eC(a,b)
return u},
oA:function(a,b){var u=new P.f_()
u.eD(a,b)
return u},
ou:function(a,b){var u,t,s
b.a=1
try{a.e2(new P.jH(b),new P.jI(b),null)}catch(s){u=H.ai(s)
t=H.cl(s)
P.pJ(new P.jJ(b,u,t))}},
mr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaI")
if(u>=4){t=b.bM()
b.a=a.a
b.c=a.c
P.d5(b,t)}else{t=H.h(b.c,"$ibd")
b.a=2
b.c=a
a.d_(t)}},
d5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$ial")
P.kt(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d5(h.a,b)}g=h.a
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
if(m){H.h(q,"$ial")
P.kt(i,i,g.b,q.a,q.b)
return}l=$.a_
if(l!==n)$.a_=n
else l=i
g=b.c
if((g&15)===8)new P.jN(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jM(u,b,q).$0()}else if((g&2)!==0)new P.jL(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.P(g).$icz){if(g.a>=4){k=H.h(o.c,"$ibd")
o.c=null
b=o.bf(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mr(g,o)
return}}j=b.b
k=H.h(j.c,"$ibd")
j.c=null
b=j.bf(k)
g=u.a
p=u.b
if(!g){H.C(p,H.q(j,0))
j.a=4
j.c=p}else{H.h(p,"$ial")
j.a=8
j.c=p}h.a=j
g=j}},
pd:function(a,b){if(H.fi(a,{func:1,args:[P.T,P.at]}))return H.o(a,{func:1,ret:null,args:[P.T,P.at]})
if(H.fi(a,{func:1,args:[P.T]}))return H.o(a,{func:1,ret:null,args:[P.T]})
throw H.e(P.l0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pc:function(){var u,t
for(;u=$.ce,u!=null;){$.di=null
t=u.b
$.ce=t
if(t==null)$.dh=null
u.a.$0()}},
pg:function(){$.lq=!0
try{P.pc()}finally{$.di=null
$.lq=!1
if($.ce!=null)$.lG().$1(P.mL())}},
mG:function(a){var u=new P.em(a)
if($.ce==null){$.ce=$.dh=u
if(!$.lq)$.lG().$1(P.mL())}else $.dh=$.dh.b=u},
pf:function(a){var u,t,s=$.ce
if(s==null){P.mG(a)
$.di=$.dh
return}u=new P.em(a)
t=$.di
if(t==null){u.b=s
$.ce=$.di=u}else{u.b=t.b
$.di=t.b=u
if(u.b==null)$.dh=u}},
pJ:function(a){var u=null,t=$.a_
if(C.f===t){P.kv(u,u,C.f,a)
return}P.kv(u,u,t,H.o(t.bV(a),{func:1,ret:-1}))},
md:function(a,b){var u=$.a_
if(u===C.f)return P.le(a,H.o(b,{func:1,ret:-1}))
return P.le(a,H.o(u.bV(b),{func:1,ret:-1}))},
og:function(a,b){var u=$.a_
if(u===C.f)return P.me(a,H.o(b,{func:1,ret:-1,args:[P.b9]}))
return P.me(a,H.o(u.dg(b,P.b9),{func:1,ret:-1,args:[P.b9]}))},
kt:function(a,b,c,d,e){var u={}
u.a=d
P.pf(new P.ku(u,e))},
mC:function(a,b,c,d,e){var u,t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mD:function(a,b,c,d,e,f,g){var u,t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
pe:function(a,b,c,d,e,f,g,h,i){var u,t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kv:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bV(d):c.i0(d,-1)
P.mG(d)},
jv:function jv(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
f_:function f_(){this.c=0},
kb:function kb(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aI:function aI(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jG:function jG(a,b){this.a=a
this.b=b},
jK:function jK(a,b){this.a=a
this.b=b},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jO:function jO(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a
this.b=null},
iu:function iu(){},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
cT:function cT(){},
iv:function iv(){},
b9:function b9(){},
al:function al(a,b){this.a=a
this.b=b},
kk:function kk(){},
ku:function ku(a,b){this.a=a
this.b=b},
jU:function jU(){},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function(a,b){return new H.a0([a,b])},
lb:function(a,b){return new H.a0([a,b])},
nP:function(a){return H.pu(a,new H.a0([null,null]))},
dL:function(a){return new P.jS([a])},
lk:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oy:function(a,b,c){var u=new P.eB(a,b,[c])
u.c=a.e
return u},
nI:function(a,b,c){var u,t
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.av,a)
try{P.oS(a,u)}finally{if(0>=$.av.length)return H.c($.av,-1)
$.av.pop()}t=P.mb(b,H.mU(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l6:function(a,b,c){var u,t
if(P.lr(a))return b+"..."+c
u=new P.a5(b)
C.a.h($.av,a)
try{t=u
t.a=P.mb(t.a,a,", ")}finally{if(0>=$.av.length)return H.c($.av,-1)
$.av.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lr:function(a){var u,t
for(u=$.av.length,t=0;t<u;++t)if(a===$.av[t])return!0
return!1},
oS:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.i(n.gI(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nO:function(a,b,c){var u=P.nN(b,c)
a.F(0,new P.hj(u,b,c))
return u},
lX:function(a,b){var u,t,s=P.dL(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t)s.h(0,H.C(a[t],b))
return s},
lc:function(a){var u,t={}
if(P.lr(a))return"{...}"
u=new P.a5("")
try{C.a.h($.av,a)
u.a+="{"
t.a=!0
J.lI(a,new P.hn(t,u))
u.a+="}"}finally{if(0>=$.av.length)return H.c($.av,-1)
$.av.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jS:function jS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.c=this.b=null},
eB:function eB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(){},
w:function w(){},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
ae:function ae(){},
kc:function kc(){},
ho:function ho(){},
eh:function eh(a,b){this.a=a
this.$ti=b},
jZ:function jZ(){},
eC:function eC(){},
f5:function f5(){},
ok:function(a,b,c,d){if(b instanceof Uint8Array)return P.ol(!1,b,c,d)
return},
ol:function(a,b,c,d){var u,t,s=$.ne()
if(s==null)return
u=0===c
if(u&&!0)return P.lh(s,b)
t=b.length
d=P.bI(c,d,t)
if(u&&d===t)return P.lh(s,b)
return P.lh(s,b.subarray(c,d))},
lh:function(a,b){if(P.on(b))return
return P.oo(a,b)},
oo:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
on:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
om:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
mF:function(a,b,c){var u,t,s
for(u=J.dj(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ae()
if((s&127)!==s)return t-b}return c-b},
lM:function(a,b,c,d,e,f){if(C.d.b9(f,4)!==0)throw H.e(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
fu:function fu(){},
fv:function fv(){},
bT:function bT(){},
bu:function bu(){},
fS:function fS(){},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h6:function h6(a){this.a=a},
j9:function j9(){},
jb:function jb(){},
ki:function ki(a){this.b=0
this.c=a},
ja:function ja(a){this.a=a},
kh:function kh(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fk:function(a,b,c){var u=H.o4(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a3(a,null,null))},
nF:function(a){if(a instanceof H.ct)return a.i(0)
return"Instance of '"+H.i(H.cO(a))+"'"},
nQ:function(a,b,c){var u,t=J.nK(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
lY:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bq(a);u.v();)C.a.h(s,H.C(u.gI(u),c))
if(b)return s
return H.m(J.l7(s),"$ib",t,"$ab")},
cU:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib3",[P.l],"$ab3")
u=a.length
c=P.bI(b,c,u)
return H.m5(b>0||c<u?C.a.eg(a,b,c):a)}if(!!J.P(a).$icK)return H.o6(a,b,P.bI(b,c,a.length))
return P.oe(a,b,c)},
oe:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.ag(b,0,J.aB(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ag(c,b,J.aB(a),q,q))
t=J.bq(a)
for(s=0;s<b;++s)if(!t.v())throw H.e(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.e(P.ag(c,b,s,q,q))
r.push(t.gI(t))}return H.m5(r)},
o8:function(a){return new H.hb(a,H.nL(a,!1,!0,!1,!1,!1))},
mb:function(a,b,c){var u=J.bq(b)
if(!u.v())return a
if(c.length===0){do a+=H.i(u.gI(u))
while(u.v())}else{a+=H.i(u.gI(u))
for(;u.v();)a=a+c+H.i(u.gI(u))}return a},
mh:function(){var u=H.nX()
if(u!=null)return P.oj(u)
throw H.e(P.I("'Uri.base' is not supported"))},
f6:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nk().b
if(typeof b!=="string")H.y(H.aY(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aq(c,"bT",0))
t=c.gim().c_(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c0(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nC:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dz:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a){return new P.bw(1000*a)},
dD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nF(a)},
dr:function(a){return new P.aK(!1,null,null,a)},
l0:function(a,b,c){return new P.aK(!0,a,b,c)},
e0:function(a,b){return new P.c1(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
bI:function(a,b,c){if(0>a||a>c)throw H.e(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ag(b,a,c,"end",null))
return b}return c},
m6:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.e(P.ag(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.ac(e==null?J.aB(b):e)
return new P.h8(u,!0,a,c,"Index out of range")},
I:function(a){return new P.j2(a)},
j0:function(a){return new P.j_(a)},
ma:function(a){return new P.cS(a)},
bg:function(a){return new P.fB(a)},
B:function(a){return new P.eu(a)},
a3:function(a,b,c){return new P.h1(a,b,c)},
nR:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lC:function(a){H.pH(a)},
oj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.mg(e<e?C.b.p(a,0,e):a,5,f).ge8()
else if(u===32)return P.mg(C.b.p(a,5,e),0,f).ge8()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mE(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jc()
if(r>=0)if(P.mE(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.F(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a5(a,"..",o)))j=n>o+2&&C.b.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a5(a,"file",0)){if(q<=0){if(!C.b.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a5(a,"http",0)){if(t&&p+3===o&&C.b.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a5(a,"https",0)){if(t&&p+4===o&&C.b.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k1(a,r,q,p,o,n,m,k)}return P.oB(a,0,e,r,q,p,o,n,m,k)},
mj:function(a){var u=P.f
return C.a.is(H.d(a.split("&"),[u]),P.lb(u,u),new P.j7(C.h),[P.x,P.f,P.f])},
oi:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j4(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fk(C.b.p(a,s,t),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fk(C.b.p(a,s,c),n,n)
if(typeof p!=="number")return p.a_()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j5(a),d=new P.j6(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.V(a,t)
if(p===58){if(t===b){++t
if(C.b.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oi(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aM(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
oB:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oJ(a,b,d)
else{if(d===b)P.cc(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oK(a,u,e-1):""
s=P.oG(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oI(P.fk(C.b.p(a,r,g),new P.kd(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oH(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lm(a,h+1,i,n):n
return new P.cb(j,t,s,q,p,o,i<c?P.oF(a,i+1,c):n)},
mv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cc:function(a,b,c){throw H.e(P.a3(c,a,b))},
oI:function(a,b){if(a!=null&&a===P.mv(b))return
return a},
oG:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.b.V(a,u)!==93)P.cc(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oD(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.mA(a,C.b.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mi(a,t,s)
return C.b.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.F(c)
p=b
for(;p<c;++p)if(C.b.V(a,p)===58){s=C.b.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mA(a,C.b.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mi(a,b,s)
return"["+C.b.p(a,b,s)+q+"]"}return P.oM(a,b,c)},
oD:function(a,b,c){var u,t=C.b.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.F(c)
u=t<c}else u=!1
return u?t:c},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a5(d):null
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.V(a,u)
if(r===37){q=P.ln(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a5("")
o=l.a+=C.b.p(a,t,u)
if(p)q=C.b.p(a,u,u+3)
else if(q==="%")P.cc(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a5("")
if(t<u){l.a+=C.b.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a5("")
l.a+=C.b.p(a,t,u)
l.a+=P.ll(r)
u+=m
t=u}}}if(l==null)return C.b.p(a,b,c)
if(t<c)l.a+=C.b.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.V(a,u)
if(q===37){p=P.ln(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a5("")
n=C.b.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a5("")
if(t<u){s.a+=C.b.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cc(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a5("")
n=C.b.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ll(q)
u+=l
t=u}}}}if(s==null)return C.b.p(a,b,c)
if(t<c){n=C.b.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oJ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mx(C.b.C(a,b)))P.cc(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cc(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.p(a,b,c)
return P.oC(t?a.toLowerCase():a)},
oC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oK:function(a,b,c){return P.df(a,b,c,C.W,!1)},
oH:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.df(a,b,c,C.A,!0):C.k.jw(d,new P.ke(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a2(u,"/"))u="/"+u
return P.oL(u,e,f)},
oL:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a2(a,"/"))return P.oN(a,!u||c)
return P.oO(a)},
lm:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.dr("Both query and queryParameters specified"))
return P.df(a,b,c,C.m,!0)}if(d==null)return
u=new P.a5("")
t.a=""
d.F(0,new P.kf(new P.kg(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oF:function(a,b,c){return P.df(a,b,c,C.m,!0)},
ln:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.V(a,b+1)
t=C.b.V(a,p)
s=H.kE(u)
r=H.kE(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aM(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c0(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.p(a,b,b+3).toUpperCase()
return},
ll:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hy(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.cU(t,0,null)},
df:function(a,b,c,d,e){var u=P.mz(a,b,c,d,e)
return u==null?C.b.p(a,b,c):u},
mz:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.F(c)
if(!(o<c))break
c$0:{u=C.b.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.ln(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cc(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ll(u)}}if(m==null)m=new P.a5("")
m.a+=C.b.p(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.F(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.b.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
my:function(a){if(C.b.a2(a,"."))return!0
return C.b.dE(a,"/.")!==-1},
oO:function(a){var u,t,s,r,q,p,o
if(!P.my(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.R(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oN:function(a,b){var u,t,s,r,q,p
if(!P.my(a))return!b?P.mw(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gas(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gas(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.mw(u[0]))}return C.a.m(u,"/")},
mw:function(a){var u,t,s,r=a.length
if(r>=2&&P.mx(J.nm(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.p(a,0,u)+"%3A"+C.b.a8(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oE:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.dr("Invalid URL encoding"))}}return u},
lo:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.p(a,b,c)
else r=new H.r(C.b.p(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.e(P.dr("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.dr("Truncated URI"))
C.a.h(r,P.oE(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.ja(!1).c_(r)},
mx:function(a){var u=a|32
return 97<=u&&u<=122},
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a3(m,a,t))}}if(s<0&&t>b)throw H.e(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gas(l)
if(r!==44||t!==p+7||!C.b.a5(a,"base64",p+1))throw H.e(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iF(0,a,o,u)
else{n=P.mz(a,o,u,C.m,!0)
if(n!=null)a=C.b.aR(a,o,u,n)}return new P.j3(a,l,c)},
oQ:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nR(22,new P.ko(),P.N),n=new P.kn(o),m=new P.kp(),l=new P.kq(),k=H.h(n.$2(0,225),"$iN")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iN")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iN")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iN")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iN")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iN")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iN")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iN")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iN")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iN"),"]",5)
k=H.h(n.$2(9,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iN")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iN")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iN")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iN")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iN"),"az",21)
k=H.h(n.$2(21,245),"$iN")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mE:function(a,b,c,d,e){var u,t,s,r,q=$.nl()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
O:function O(){},
ax:function ax(a,b){this.a=a
this.b=b},
z:function z(){},
bw:function bw(a){this.a=a},
fO:function fO(){},
fP:function fP(){},
bx:function bx(){},
fo:function fo(){},
dX:function dX(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h8:function h8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j2:function j2(a){this.a=a},
j_:function j_(a){this.a=a},
cS:function cS(a){this.a=a},
fB:function fB(a){this.a=a},
hX:function hX(){},
e6:function e6(){},
fI:function fI(a){this.a=a},
eu:function eu(a){this.a=a},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(){},
l:function l(){},
k:function k(){},
b2:function b2(){},
b:function b(){},
x:function x(){},
M:function M(){},
aa:function aa(){},
T:function T(){},
at:function at(){},
f:function f(){},
a5:function a5(a){this.a=a},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(){},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(){},
kn:function kn(a){this.a=a},
kp:function kp(){},
kq:function kq(){},
k1:function k1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jB:function jB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
po:function(a){var u,t=J.P(a)
if(!!t.$ibi){u=t.gdk(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f4(a.data,a.height,a.width)},
pn:function(a){if(a instanceof P.f4)return{data:a.a,height:a.b,width:a.c}
return a},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.lb(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=H.L(t[r])
u.k(0,q,a[q])}return u},
pm:function(a){var u={}
a.F(0,new P.kw(u))
return u},
k3:function k3(){},
k5:function k5(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h_:function h_(){},
jR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ox:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jT:function jT(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
he:function he(){},
b7:function b7(){},
hV:function hV(){},
i1:function i1(){},
cP:function cP(){},
iy:function iy(){},
p:function p(){},
ba:function ba(){},
iO:function iO(){},
ez:function ez(){},
eA:function eA(){},
eK:function eK(){},
eL:function eL(){},
eW:function eW(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
N:function N(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(a){this.a=a},
ft:function ft(){},
bQ:function bQ(){},
hW:function hW(){},
en:function en(){},
dt:function dt(){},
e_:function e_(){},
c2:function c2(){},
e2:function e2(){},
e9:function e9(){},
ef:function ef(){},
iq:function iq(){},
eS:function eS(){},
eT:function eT(){}},W={
lL:function(){var u=document.createElement("a")
return u},
l2:function(){var u=document.createElement("canvas")
return u},
nE:function(a,b,c){var u=document.body,t=(u&&C.t).aa(u,a,b,c)
t.toString
u=W.E
u=new H.d2(new W.ap(t),H.o(new W.fR(),{func:1,ret:P.O,args:[u]}),[u])
return H.h(u.gaG(u),"$iS")},
lU:function(a){H.h(a,"$ij")
return"wheel"},
cw:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cj(a)
t=u.ge_(a)
if(typeof t==="string")r=u.ge_(a)}catch(s){H.ai(s)}return r},
nH:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icC")
try{s.type=a}catch(u){H.ai(u)}return s},
jQ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mt:function(a,b,c,d){var u=W.jQ(W.jQ(W.jQ(W.jQ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.mI(new W.jF(c),W.n)
if(u!=null&&!0)J.no(a,b,u,!1)
return new W.jE(a,b,u,!1,[e])},
ms:function(a){var u=W.lL(),t=window.location
u=new W.bL(new W.jY(u,t))
u.ev(a)
return u},
ov:function(a,b,c,d){H.h(a,"$iS")
H.L(b)
H.L(c)
H.h(d,"$ibL")
return!0},
ow:function(a,b,c,d){var u,t,s
H.h(a,"$iS")
H.L(b)
H.L(c)
u=H.h(d,"$ibL").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mu:function(){var u=P.f,t=P.lX(C.p,u),s=H.q(C.p,0),r=H.o(new W.k9(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k8(t,P.dL(u),P.dL(u),P.dL(u),null)
t.ez(null,new H.hr(C.p,r,[s,u]),q,null)
return t},
mI:function(a,b){var u=$.a_
if(u===C.f)return a
return u.dg(a,b)},
v:function v(){},
fm:function fm(){},
dq:function dq(){},
fn:function fn(){},
cp:function cp(){},
bR:function bR(){},
br:function br(){},
bS:function bS(){},
cs:function cs(){},
bs:function bs(){},
cu:function cu(){},
fE:function fE(){},
V:function V(){},
cv:function cv(){},
fF:function fF(){},
b0:function b0(){},
b1:function b1(){},
fG:function fG(){},
fH:function fH(){},
fK:function fK(){},
aC:function aC(){},
fL:function fL(){},
dA:function dA(){},
dB:function dB(){},
fM:function fM(){},
fN:function fN(){},
jz:function jz(a,b){this.a=a
this.b=b},
S:function S(){},
fR:function fR(){},
n:function n(){},
j:function j(){},
aD:function aD(){},
cy:function cy(){},
fX:function fX(){},
h0:function h0(){},
aM:function aM(){},
h5:function h5(){},
bW:function bW(){},
bi:function bi(){},
cB:function cB(){},
cC:function cC(){},
b4:function b4(){},
dM:function dM(){},
hF:function hF(){},
cG:function cG(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
aN:function aN(){},
hK:function hK(){},
af:function af(){},
ap:function ap(a){this.a=a},
E:function E(){},
cL:function cL(){},
aO:function aO(){},
i_:function i_(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
ic:function ic(){},
aQ:function aQ(){},
io:function io(){},
aR:function aR(){},
ip:function ip(){},
aS:function aS(){},
is:function is(){},
it:function it(a){this.a=a},
aE:function aE(){},
b8:function b8(){},
e7:function e7(){},
iz:function iz(){},
iA:function iA(){},
cV:function cV(){},
aU:function aU(){},
aF:function aF(){},
iC:function iC(){},
iD:function iD(){},
iI:function iI(){},
aV:function aV(){},
aW:function aW(){},
iM:function iM(){},
iN:function iN(){},
bJ:function bJ(){},
j8:function j8(){},
jq:function jq(){},
bc:function bc(){},
d3:function d3(){},
d4:function d4(){},
jA:function jA(){},
ep:function ep(){},
jP:function jP(){},
eH:function eH(){},
k2:function k2(){},
k6:function k6(){},
jy:function jy(){},
jC:function jC(a){this.a=a},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lj:function lj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jE:function jE(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jF:function jF(a){this.a=a},
bL:function bL(a){this.a=a},
G:function G(){},
dW:function dW(a){this.a=a},
hS:function hS(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(){},
k_:function k_(){},
k0:function k0(){},
k8:function k8(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k9:function k9(){},
k7:function k7(){},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
az:function az(){},
jY:function jY(a,b){this.a=a
this.b=b},
f7:function f7(a){this.a=a},
kj:function kj(a){this.a=a},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
db:function db(){},
dc:function dc(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(){},
eY:function eY(){},
eZ:function eZ(){},
dd:function dd(){},
de:function de(){},
f0:function f0(){},
f1:function f1(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){}},O={
l3:function(a){var u=new O.a2([a])
u.bw(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cF:function cF(){this.b=this.a=null},
dP:function dP(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
ht:function ht(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hw:function hw(){var _=this
_.e=_.d=_.c=_.b=null},
hx:function hx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c3:function c3(){}},E={
lV:function(){var u=new E.an()
u.a=""
u.b=!0
u.seu(0,O.l3(E.an))
u.y.ba(u.giG(),u.giJ())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saf(0,null)
u.sb4(null)
return u},
o9:function(a,b){var u=new E.i5(a)
u.eo(a,b)
return u},
of:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibS)return E.mc(a,!0,!0,!0,!1)
u=W.l2()
t=u.style
t.width="100%"
t.height="100%"
s.gbZ(a).h(0,u)
return E.mc(u,!0,!0,!0,!1)},
mc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eb(),j=H.h(C.j.cp(a,"webgl2",P.nP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic2")
if(j==null)H.y(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o9(j,a)
u=new T.iF(j)
u.b=H.ac(j.getParameter(3379))
H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ei(a)
t=new X.hd()
t.she(P.dL(P.l))
u.b=t
t=new X.hL(u)
t.f=0
t.r=V.bG()
t.x=V.bG()
t.ch=t.Q=1
u.c=t
t=new X.hl(u)
t.r=0
t.x=V.bG()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iL(u)
t.f=V.bG()
t.r=V.bG()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seY(H.d([],[[P.cT,P.T]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.o(u.gfB(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.o(u.gfH(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.o(u.gfs(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.o(u.gfL(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.o(u.gfJ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.o(u.gfP(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.o(u.gfT(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.o(u.gfR(),q),!1,r))
n=u.z
W.lU(a)
m=W.bc;(n&&C.a).h(n,W.a9(a,H.L(W.lU(a)),H.o(u.gfV(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.o(u.gfD(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.o(u.gfF(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.o(u.gfX(),o),!1,p))
p=u.z
o=W.aW
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.o(u.gh9(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.o(u.gh5(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.o(u.gh7(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.d1()
return k},
fw:function fw(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
eb:function eb(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iH:function iH(a){this.a=a}},Z={
li:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cd(c)),35044)
a.bindBuffer(b,null)
return new Z.el(b,u)},
aH:function(a){return new Z.bK(a)},
el:function el(a,b){this.a=a
this.b=b},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jr:function jr(a){this.a=a},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a){this.a=a}},D={
a1:function(){var u=new D.bU()
u.sag(null)
u.saK(null)
u.c=null
u.d=0
return u},
fz:function fz(){},
bU:function bU(){var _=this
_.d=_.c=_.b=_.a=null},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
D:function D(){this.b=null},
bX:function bX(a){this.b=null
this.$ti=a},
bY:function bY(a){this.b=null
this.$ti=a},
U:function U(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ad:function ad(){},
dK:function dK(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dZ:function dZ(){},
e5:function e5(){}},X={dw:function dw(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},hd:function hd(){this.d=this.b=this.a=null},dN:function dN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hl:function hl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},bD:function bD(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hL:function hL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i0:function i0(){},ed:function ed(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iL:function iL(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ei:function ei(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nG:function(a){var u=new X.h2(),t=new V.b_(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m8
if(t==null){t=V.m7(0,0,1,1)
$.m8=t}u.r=t
return u},
dx:function dx(){},
h2:function h2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dY:function dY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){}},V={
pQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b9(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.e.e3(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
ci:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.f])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.t)(a),++s){r=V.W(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.ac(p[q],t))}return p},
lB:function(a){return C.e.j6(Math.pow(2,C.S.c8(Math.log(H.pl(a))/Math.log(2))))},
dS:function(){var u=$.m_
return u==null?$.m_=V.bk(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bk:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bk(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bG:function(){var u=$.m3
return u==null?$.m3=new V.ab(0,0):u},
nV:function(){var u=$.cM
return u==null?$.cM=new V.a4(0,0,0):u},
m7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e1(a,b,c,d)},
d1:function(){var u=$.mo
return u==null?$.mo=new V.J(0,0,0):u},
op:function(){var u=$.jc
return u==null?$.jc=new V.J(-1,0,0):u},
mp:function(){var u=$.jd
return u==null?$.jd=new V.J(0,1,0):u},
mq:function(){var u=$.je
return u==null?$.je=new V.J(0,0,1):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a){this.a=a},
dR:function dR(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.B("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.i4()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.id()
u.ep(a)
return u},
iK:function(){var u=new V.iJ(),t=P.f
u.shB(new H.a0([t,V.cR]))
u.shE(new H.a0([t,V.cX]))
u.c=null
return u},
bf:function bf(){},
ay:function ay(){},
dO:function dO(){},
as:function as(){this.a=null},
i4:function i4(){this.b=this.a=null},
id:function id(){this.a=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.b=a
this.c=null},
iJ:function iJ(){this.c=this.b=this.a=null},
cY:function cY(a){this.b=a
this.a=this.c=null},
pK:function(a){P.og(C.P,new V.kT(a))},
ob:function(a){var u=new V.ii()
u.er(a,!0)
return u},
bt:function bt(){},
kT:function kT(a){this.a=a},
fJ:function fJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h3:function h3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h4:function h4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){this.a=a
this.c=null},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(){this.b=this.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
il:function il(a){this.a=a}},U={
lQ:function(){var u=new U.fA()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l4:function(a){var u=new U.dy()
u.a=a
return u},
mk:function(a,b){var u,t,s,r=new U.ej(),q=U.lQ()
q.sea(0,!0)
q.sdH(6.283185307179586)
q.sdJ(0)
q.sa0(0,0)
q.sdI(100)
q.sY(0)
q.sdj(0.5)
r.b=q
u=r.gbc()
q.gA().h(0,u)
q=U.lQ()
q.sea(0,!0)
q.sdH(6.283185307179586)
q.sdJ(0)
q.sa0(0,0)
q.sdI(100)
q.sY(0)
q.sdj(0.5)
r.c=q
q.gA().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bC(a,!1,!1)
s=r.d
r.d=t
q=new D.U("modifiers",s,t,[X.bC])
q.b=!0
r.X(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.U("invertX",q,!1,[P.O])
q.b=!0
r.X(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.U("invertY",q,!1,[P.O])
q.b=!0
r.X(q)}r.hW(b)
return r},
fA:function fA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){this.b=this.a=null},
cA:function cA(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ej:function ej(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dC:function dC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c=V.ob("Test 023"),b=W.l2()
b.className="pageLargeCanvas"
b.id=e
c.a.appendChild(b)
u=[P.f]
c.dd(H.d(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],u))
c.hO(H.d(["shapes"],u))
c.dd(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.y(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.of(t,!0,!0,!0,!1)
r=U.mk(!1,s.r)
q=U.mk(!0,s.r)
p=new V.a7(0.6,0.9,1)
o=s.f.iC("../resources/Test.png",!0)
n=new D.bv()
n.c=new V.a7(1,1,1)
n.a=V.mq()
n.d=V.mp()
n.e=V.op()
m=n.b
n.b=q
q.gA().h(0,n.gbJ())
l=new D.U("mover",m,n.b,[U.aj])
l.b=!0
n.ao(l)
if(!n.c.q(0,p)){m=n.c
n.c=p
l=new D.U("color",m,p,[V.a7])
l.b=!0
n.ao(l)}l=n.f
if(l!==o){if(l!=null)l.gA().K(0,n.gbJ())
m=n.f
n.f=o
o.gA().h(0,n.gbJ())
o=new D.U("texture",m,n.f,[T.ea])
o.b=!0
n.ao(o)}k=new O.dP()
k.seL(O.l3(V.ao))
k.e.ba(k.gfn(),k.gfp())
o=new O.b6(k,"emission")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
k.f=o
o=new O.b6(k,"ambient")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
k.r=o
o=new O.b6(k,"diffuse")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
k.x=o
o=new O.b6(k,"invDiffuse")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
k.y=o
o=new O.hy(k,"specular")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
o.ch=100
k.z=o
o=new O.hu(k,"bump")
o.c=new A.am(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.b6(k,"reflect")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
k.cx=o
o=new O.hx(k,"refract")
o.c=new A.am(!1,!1,!1)
o.f=new V.a7(0,0,0)
o.ch=1
k.cy=o
o=new O.ht(k,"alpha")
o.c=new A.am(!1,!1,!1)
o.f=1
k.db=o
o=new D.dK()
o.bw(D.ad)
o.seW(H.d([],[D.bv]))
o.shb(H.d([],[D.dZ]))
o.shA(H.d([],[D.e5]))
o.y=o.x=null
o.cr(o.gfl(),o.gh_(),o.gh3())
k.dx=o
l=new O.hw()
l.b=new V.b_(0,0,0,0)
l.c=1
l.d=10
l.e=!1
k.dy=l
l=o.x
o=l==null?o.x=D.a1():l
o.h(0,k.ghm())
o=k.dx
l=o.y
o=l==null?o.y=D.a1():l
o.h(0,k.geA())
k.fr=null
k.dx.h(0,n)
k.f.saO(0,new V.a7(0,0,0))
o=k.r
o.saO(0,new V.a7(0.01,0.01,0.01))
o=k.x
o.saO(0,new V.a7(0.7,0.7,0.7))
o=k.z
o.saO(0,new V.a7(0.3,0.3,0.3))
o=k.z
o.d3(new A.am(!0,!1,!1))
o.d4(100)
j=E.lV()
j.saf(0,F.n1())
i=E.lV()
i.sb4(U.l4(V.bk(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.lx(1,d,d,1)
o.c7()
i.saf(0,o)
h=new U.cA()
h.bw(U.aj)
h.ba(h.gfj(),h.gh1())
h.e=null
h.f=V.dS()
h.r=0
h.h(0,r)
h.h(0,U.l4(V.lZ(3.141592653589793)))
h.h(0,U.l4(V.bk(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=new M.dC()
o.a=!0
o.seO(0,O.l3(E.an))
o.e.ba(o.gfv(),o.gfz())
o.y=o.x=o.r=o.f=null
g=X.nG(d)
f=new X.dY()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb4(d)
l=f.c
if(!(Math.abs(l-1.0471975511965976)<$.Q().a)){f.c=1.0471975511965976
l=new D.U("fov",l,1.0471975511965976,[P.z])
l.b=!0
f.aI(l)}l=f.d
if(!(Math.abs(l-0.1)<$.Q().a)){f.d=0.1
l=new D.U("near",l,0.1,[P.z])
l.b=!0
f.aI(l)}l=f.e
if(!(Math.abs(l-2000)<$.Q().a)){f.e=2000
l=new D.U("far",l,2000,[P.z])
l.b=!0
f.aI(l)}l=o.b
if(l!==f){if(l!=null)l.gA().K(0,o.gam())
m=o.b
o.b=f
f.gA().h(0,o.gam())
l=new D.U("camera",m,o.b,[X.dx])
l.b=!0
o.au(l)}l=o.c
if(l!==g){if(l!=null)l.gA().K(0,o.gam())
m=o.c
o.c=g
g.gA().h(0,o.gam())
l=new D.U("target",m,o.c,[X.e8])
l.b=!0
o.au(l)}o.se0(d)
o.se0(k)
o.e.h(0,j)
o.e.h(0,i)
o.b.sb4(h)
l=s.d
if(l!==o){if(l!=null)l.gA().K(0,s.gcw())
s.d=o
o.gA().h(0,s.gcw())
s.cz()}o=new V.i2("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.y("Failed to find shapes for RadioGroup")
o.aX(0,"Cube",new M.kK(j))
o.aX(0,"Cylinder",new M.kL(j))
o.aX(0,"Cone",new M.kM(j))
o.aX(0,"Sphere",new M.kN(j))
o.da(0,"Toroid",new M.kO(j),!0)
o.aX(0,"Knot",new M.kP(j))
u=s.z
if(u==null)u=s.z=D.a1()
o={func:1,ret:-1,args:[D.D]}
l=H.o(new M.kQ(c,k),o)
if(u.b==null)u.saK(H.d([],[o]))
u=u.b;(u&&C.a).h(u,l)
V.pK(s)},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a,b){this.a=a
this.b=b}},A={
nS:function(a,b){var u=a.b0,t=new A.hs(b,u)
t.eq(b,u)
t.en(a,b)
return t},
nT:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gaj(a0)+a1.gaj(a1)+a2.gaj(a2)+a3.gaj(a3)+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.t)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.t)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.t)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
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
g=$.bp()
if(k){u=$.bo()
g=new Z.bK(g.a|u.a)}if(j){u=$.bn()
g=new Z.bK(g.a|u.a)}if(i){u=$.bm()
g=new Z.bK(g.a|u.a)}return new A.hv(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kr:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ks:function(a,b,c){var u
A.kr(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kW(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oW:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kr(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oT:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ks(b,t,"ambient")
b.a+="\n"},
oU:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ks(b,t,"diffuse")
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
oX:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ks(b,t,"invDiffuse")
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
p2:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ks(b,t,"specular")
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
oZ:function(a,b){var u,t,s
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
p0:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kr(b,t,"reflect")
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
p1:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kr(b,t,"refract")
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
oV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kW(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
r=[P.f]
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.a.m(m," + ")+");\n"}else c.a+="   highLight = "+C.a.m(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
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
p_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kW(t)
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
if(typeof u!=="number")return u.ae()
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
c.a=r+"\n"}r=[P.f]
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.m(l," * ")+";\n"
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
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.m(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.m(l," + ")+");\n"
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
p3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kW(t)
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
if(typeof u!=="number")return u.ae()
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
c.a=u+"\n"}u=[P.f]
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.m(j," * ")+";\n"
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
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
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
oY:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.f])
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
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
p4:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a5("")
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
A.oW(a,j)
A.oT(a,j)
A.oU(a,j)
A.oX(a,j)
A.p2(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p0(a,j)
A.p1(a,j)}A.oZ(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.oV(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.p_(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.p3(a,q[o],j)
A.oY(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.f])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a8(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
p5:function(a,b){var u,t,s
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
p7:function(a,b){var u
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
p6:function(a,b){var u
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
p9:function(a,b){var u,t
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
pa:function(a,b){var u,t
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
p8:function(a,b){var u
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
pb:function(a,b){var u
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
kW:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.a8(a,1)},
lf:function(a,b,c,d,e){var u=new A.iT(a,c,e)
u.f=d
u.shM(P.nQ(d,0,P.l))
return u},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b){var _=this
_.ji=_.jh=_.dm=_.dl=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jv=_.ju=_.jt=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.js=_.jr=_.dv=_.jq=_.jp=_.du=_.dt=_.jo=_.jn=_.ds=_.dr=_.jm=_.jl=_.dq=_.jk=_.jj=_.dn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aL:function aL(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.dl=b4},
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cQ:function cQ(){},
ee:function ee(){},
iY:function iY(a){this.a=a},
aG:function aG(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lx:function(a,b,c,d){var u=F.ld()
F.dg(u,b,c,d,a,1,0,0,1)
F.dg(u,b,c,d,a,0,1,0,3)
F.dg(u,b,c,d,a,0,0,1,2)
F.dg(u,b,c,d,a,-1,0,0,0)
F.dg(u,b,c,d,a,0,-1,0,0)
F.dg(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
km:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.J(u+a3,t+a1,s+a2)
q=new V.J(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.J(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.km(i)
l=F.km(j.b)
k=F.lE(d,a0,new F.kl(j,F.km(j.c),F.km(j.d),l,m,c),b)
if(k!=null)a.b3(k)},
mO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.ld()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.au])
q=u.a
p=new V.J(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
C.a.h(r,q.hS(new V.bH(a,-1,-1,-1),new V.b_(1,1,1,1),new V.a4(0,0,c),new V.J(0,0,t),new V.ab(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.J(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ek(new V.bH(a,-1,-1,-1),null,new V.b_(i,g,h,1),new V.a4(m*k,l*k,c),new V.J(0,0,t),new V.ab(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hQ(r)
return u},
mM:function(a,b,c){return F.pp(!0,a,1,new F.kx(1,c),b)},
pp:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lE(c,e,new F.kz(d),null)
if(u==null)return
u.ar()
u.bT()
if(b)u.b3(F.mO(3,!1,1,new F.kA(d),e))
u.b3(F.mO(1,!0,-1,new F.kB(d),e))
return u},
pL:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kU()
t=F.lx(a,null,new F.kV(s,1),b)
t.bT()
return t},
n1:function(){return F.mN(15,30,0.5,1,new F.kX())},
pD:function(){return F.mN(12,120,0.3,1,new F.kJ(3,2))},
mN:function(a,b,c,d,e){var u=F.lE(a,b,new F.ky(e,d,b,c),null)
if(u==null)return
u.ar()
u.bT()
return u},
lE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.ld()
t=H.d([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ek(g,g,new V.b_(p,0,0,1),g,g,new V.ab(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c0(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ek(g,g,new V.b_(j,i,h,1),g,g,new V.ab(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c0(d))}}u.d.hR(a+1,b+1,t)
return u},
cx:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.y(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.B("May not create a face with vertices attached to different shapes."))
u.bR(a)
u.bS(b)
u.ht(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
nM:function(a,b){var u=new F.bj(),t=a.a
if(t==null)H.y(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.B("May not create a line with vertices attached to different shapes."))
u.bR(a)
u.bS(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
ld:function(){var u=new F.e3(),t=new F.jf(u)
t.b=!1
t.shN(H.d([],[F.au]))
u.a=t
t=new F.ih(u)
t.sbK(H.d([],[F.bF]))
u.b=t
t=new F.ig(u)
t.sf4(H.d([],[F.bj]))
u.c=t
t=new F.ie(u)
t.seZ(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
ek:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.jn()
r.sbK(H.d([],[F.bF]))
s.b=r
r=new F.jj()
u=[F.bj]
r.sf5(H.d([],u))
r.sf6(H.d([],u))
s.c=r
r=new F.jg()
u=[F.a8]
r.sf_(H.d([],u))
r.sf0(H.d([],u))
r.sf1(H.d([],u))
s.d=r
h=$.nf()
s.e=0
r=$.bp()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bo().a)!==0?e:t
s.x=(u&$.bn().a)!==0?b:t
s.y=(u&$.bO().a)!==0?f:t
s.z=(u&$.bP().a)!==0?g:t
s.Q=(u&$.ng().a)!==0?c:t
s.ch=(u&$.co().a)!==0?i:0
s.cx=(u&$.bm().a)!==0?a:t
return s},
kl:function kl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kx:function kx(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kU:function kU(){},
kV:function kV(a,b){this.a=a
this.b=b},
kX:function kX(){},
kJ:function kJ(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(){},
im:function im(){},
bj:function bj(){this.b=this.a=null},
hf:function hf(){},
iS:function iS(){},
bF:function bF(){this.a=null},
e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jp:function jp(a){this.a=a},
jo:function jo(a){this.a=a},
jf:function jf(a){this.a=a
this.c=this.b=null},
jg:function jg(){this.d=this.c=this.b=null},
jh:function jh(a,b){this.a=a
this.b=b},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(){this.c=this.b=null},
jl:function jl(){},
jk:function jk(){},
jm:function jm(){},
hT:function hT(){},
jn:function jn(){this.b=null}},T={cW:function cW(){},ea:function ea(){},iE:function iE(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iF:function iF(a){var _=this
_.a=a
_.e=_.d=_.b=null},iG:function iG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l9.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.cN(a)},
i:function(a){return"Instance of '"+H.i(H.cO(a))+"'"}}
J.ha.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iO:1}
J.dH.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dI.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hY.prototype={}
J.c9.prototype={}
J.bB.prototype={
i:function(a){var u=a[$.n3()]
if(u==null)return this.ej(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iby:1}
J.b3.prototype={
h:function(a,b){H.C(b,H.q(a,0))
if(!!a.fixed$length)H.y(P.I("add"))
a.push(b)},
dW:function(a,b){if(!!a.fixed$length)H.y(P.I("removeAt"))
if(b<0||b>=a.length)throw H.e(P.e0(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.y(P.I("remove"))
for(u=0;u<a.length;++u)if(J.R(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bg(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iA:function(a){return this.m(a,"")},
is:function(a,b,c,d){var u,t,s
H.C(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bg(a))}return t},
ir:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.O,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bg(a))}throw H.e(H.h9())},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eg:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
giq:function(a){if(a.length>0)return a[0]
throw H.e(H.h9())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.h9())},
de:function(a,b){var u,t
H.o(b,{func:1,ret:P.O,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bg(a))}return!1},
bu:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.y(P.I("sort"))
H.e4(a,0,a.length-1,b,u)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
i:function(a){return P.l6(a,"[","]")},
gT:function(a){return new J.aw(a,a.length,[H.q(a,0)])},
gG:function(a){return H.cN(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.y(P.I("set length"))
if(b<0)throw H.e(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.ch(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.q(a,0))
if(!!a.immutable$list)H.y(P.I("indexed set"))
if(b>=a.length||b<0)throw H.e(H.ch(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.l8.prototype={}
J.aw.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.t(s))
u=t.c
if(u>=r){t.scP(null)
return!1}t.scP(s[u]);++t.c
return!0},
scP:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
J.cD.prototype={
i4:function(a,b){var u
H.mW(b)
if(typeof b!=="number")throw H.e(H.aY(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
j6:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.I(""+a+".toInt()"))},
c8:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
e3:function(a,b){var u
if(b>20)throw H.e(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.y(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b9:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.d5(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hy:function(a,b){if(b<0)throw H.e(H.aY(b))
return this.d5(a,b)},
d5:function(a,b){return b>31?0:a>>>b},
$iz:1,
$iaa:1}
J.dG.prototype={$il:1}
J.dF.prototype={}
J.bA.prototype={
V:function(a,b){if(b<0)throw H.e(H.ch(a,b))
if(b>=a.length)H.y(H.ch(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.e(H.ch(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.e(P.l0(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.bI(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a5(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.y(H.aY(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.e(P.e0(b,null))
if(b>c)throw H.e(P.e0(b,null))
if(c>a.length)throw H.e(P.e0(c,null))
return a.substring(b,c)},
a8:function(a,b){return this.p(a,b,null)},
j9:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dE:function(a,b){return this.bk(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im1:1,
$if:1}
H.r.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$ad0:function(){return[P.l]},
$aw:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fQ.prototype={}
H.bZ.prototype={
gT:function(a){var u=this
return new H.cE(u,u.gn(u),[H.aq(u,"bZ",0)])},
bs:function(a,b){return this.ei(0,H.o(b,{func:1,ret:P.O,args:[H.aq(this,"bZ",0)]}))}}
H.cE.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.dj(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.bg(s))
u=t.c
if(u>=q){t.saT(null)
return!1}t.saT(r.H(s,u));++t.c
return!0},
saT:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
H.hp.prototype={
gT:function(a){return new H.hq(J.bq(this.a),this.b,this.$ti)},
gn:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.fl(this.a,b))},
$ak:function(a,b){return[b]}}
H.hq.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saT(u.c.$1(t.gI(t)))
return!0}u.saT(null)
return!1},
gI:function(a){return this.a},
saT:function(a){this.a=H.C(a,H.q(this,1))},
$ab2:function(a,b){return[b]}}
H.hr.prototype={
gn:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.fl(this.a,b))},
$abZ:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d2.prototype={
gT:function(a){return new H.js(J.bq(this.a),this.b,this.$ti)}}
H.js.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.H(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bV.prototype={}
H.d0.prototype={
k:function(a,b,c){H.C(c,H.aq(this,"d0",0))
throw H.e(P.I("Cannot modify an unmodifiable list"))}}
H.eg.prototype={}
H.fC.prototype={
i:function(a){return P.lc(this)},
k:function(a,b,c){H.C(b,H.q(this,0))
H.C(c,H.q(this,1))
return H.nB()},
$ix:1}
H.fD.prototype={
gn:function(a){return this.a},
bi:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bi(0,b))return
return this.cQ(b)},
cQ:function(a){return this.b[H.L(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.cQ(r),p))}}}
H.iP.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hU.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hc.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j1.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kY.prototype={
$1:function(a){if(!!J.P(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eU.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iat:1}
H.ct.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$iby:1,
gjb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iB.prototype={}
H.ir.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cn(u)+"'"}}
H.cq.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cN(this.a)
else u=typeof t!=="object"?J.dp(t):H.cN(t)
return(u^H.cN(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cO(u))+"'")}}
H.iR.prototype={
i:function(a){return this.a}}
H.fy.prototype={
i:function(a){return this.a}}
H.ib.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jt.prototype={
i:function(a){return"Assertion failed: "+P.dD(this.a)}}
H.a0.prototype={
gn:function(a){return this.a},
giz:function(a){return this.a===0},
ga3:function(a){return new H.hh(this,[H.q(this,0)])},
bi:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cM(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cM(t,b)}else return s.iw(b)},
iw:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cb(u.bD(t,u.ca(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.ix(b)},
ix:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bD(r,s.ca(a))
t=s.cb(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.q(s,0))
H.C(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cD(u==null?s.b=s.bH():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cD(t==null?s.c=s.bH():t,b,c)}else s.iy(b,c)},
iy:function(a,b){var u,t,s,r,q=this
H.C(a,H.q(q,0))
H.C(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bH()
t=q.ca(a)
s=q.bD(u,t)
if(s==null)q.bP(u,t,[q.bI(a,b)])
else{r=q.cb(s,a)
if(r>=0)s[r].b=b
else s.push(q.bI(a,b))}},
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bg(s))
u=u.c}},
cD:function(a,b,c){var u,t=this
H.C(b,H.q(t,0))
H.C(c,H.q(t,1))
u=t.bd(a,b)
if(u==null)t.bP(a,b,t.bI(b,c))
else u.b=c},
fc:function(){this.r=this.r+1&67108863},
bI:function(a,b){var u,t=this,s=new H.hg(H.C(a,H.q(t,0)),H.C(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fc()
return s},
ca:function(a){return J.dp(a)&0x3ffffff},
cb:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
i:function(a){return P.lc(this)},
bd:function(a,b){return a[b]},
bD:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
eU:function(a,b){delete a[b]},
cM:function(a,b){return this.bd(a,b)!=null},
bH:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bP(t,u,t)
this.eU(t,u)
return t}}
H.hg.prototype={}
H.hh.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hi(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hi.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bg(t))
else{t=u.c
if(t==null){u.scC(null)
return!1}else{u.scC(t.a)
u.c=u.c.c
return!0}}},
scC:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
H.kF.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kH.prototype={
$1:function(a){return this.a(H.L(a))},
$S:53}
H.hb.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im1:1,
$io7:1}
H.cI.prototype={$icI:1}
H.bE.prototype={$ibE:1,$ioh:1}
H.dT.prototype={
gn:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cJ.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pr(c)
H.be(b,a,a.length)
a[b]=c},
$abV:function(){return[P.z]},
$aw:function(){return[P.z]},
$ik:1,
$ak:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dU.prototype={
k:function(a,b,c){H.ac(c)
H.be(b,a,a.length)
a[b]=c},
$abV:function(){return[P.l]},
$aw:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hM.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.dV.prototype={
gn:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$iqb:1}
H.cK.prototype={
gn:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$icK:1,
$iN:1}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
P.jv.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.ju.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jw.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jx.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f_.prototype={
eC:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cg(new P.kb(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))},
eD:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cg(new P.ka(this,a,Date.now(),b),0),a)
else throw H.e(P.I("Periodic timer."))},
$ib9:1}
P.kb.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ka.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.em(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bd.prototype={
iD:function(a){if((this.c&15)!==6)return!0
return this.b.b.cm(H.o(this.d,{func:1,ret:P.O,args:[P.T]}),a.a,P.O,P.T)},
iu:function(a){var u=this.e,t=P.T,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fi(u,{func:1,args:[P.T,P.at]}))return H.ly(r.j1(u,a.a,a.b,null,t,P.at),s)
else return H.ly(r.cm(H.o(u,{func:1,args:[P.T]}),a.a,null,t),s)}}
P.aI.prototype={
e2:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pd(b,u)}t=new P.aI($.a_,[c])
s=b==null?1:3
this.cE(new P.bd(t,s,a,b,[r,c]))
return t},
j5:function(a,b){return this.e2(a,null,b)},
cE:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibd")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaI")
s=u.a
if(s<4){u.cE(a)
return}t.a=s
t.c=u.c}P.kv(null,null,t.b,H.o(new P.jG(t,a),{func:1,ret:-1}))}},
d_:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibd")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaI")
u=q.a
if(u<4){q.d_(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
P.kv(null,null,p.b,H.o(new P.jK(o,p),{func:1,ret:-1}))}},
bM:function(){var u=H.h(this.c,"$ibd")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cI:function(a){var u,t,s=this,r=H.q(s,0)
H.ly(a,{futureOr:1,type:r})
u=s.$ti
if(H.lu(a,"$icz",u,"$acz"))if(H.lu(a,"$iaI",u,null))P.mr(a,s)
else P.ou(a,s)
else{t=s.bM()
H.C(a,r)
s.a=4
s.c=a
P.d5(s,t)}},
cJ:function(a,b){var u,t=this
H.h(b,"$iat")
u=t.bM()
t.a=8
t.c=new P.al(a,b)
P.d5(t,u)},
$icz:1}
P.jG.prototype={
$0:function(){P.d5(this.a,this.b)},
$S:0}
P.jK.prototype={
$0:function(){P.d5(this.b,this.a.a)},
$S:0}
P.jH.prototype={
$1:function(a){var u=this.a
u.a=0
u.cI(a)},
$S:17}
P.jI.prototype={
$2:function(a,b){H.h(b,"$iat")
this.a.cJ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jJ.prototype={
$0:function(){this.a.cJ(this.b,this.c)},
$S:0}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dZ(H.o(s.d,{func:1}),null)}catch(r){u=H.ai(r)
t=H.cl(r)
if(o.d){s=H.h(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.P(n).$icz){if(n instanceof P.aI&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j5(new P.jO(p),null)
s.a=!1}},
$S:3}
P.jO.prototype={
$1:function(a){return this.a},
$S:46}
P.jM.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.C(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cm(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.cl(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$ial")
r=m.c
if(H.H(r.iD(u))&&r.e!=null){q=m.b
q.b=r.iu(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.cl(p)
r=H.h(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.em.prototype={}
P.iu.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aI($.a_,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iw(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.ix(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iw.prototype={
$1:function(a){H.C(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.q(this.b,0)]}}}
P.ix.prototype={
$0:function(){this.b.cI(this.a.a)},
$S:0}
P.cT.prototype={}
P.iv.prototype={}
P.b9.prototype={}
P.al.prototype={
i:function(a){return H.i(this.a)},
$ibx:1}
P.kk.prototype={$iqq:1}
P.ku.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dX():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jU.prototype={
j2:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.mC(r,r,this,a,-1)}catch(s){u=H.ai(s)
t=H.cl(s)
P.kt(r,r,this,u,H.h(t,"$iat"))}},
j3:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.mD(r,r,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.cl(s)
P.kt(r,r,this,u,H.h(t,"$iat"))}},
i0:function(a,b){return new P.jW(this,H.o(a,{func:1,ret:b}),b)},
bV:function(a){return new P.jV(this,H.o(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.jX(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
dZ:function(a,b){H.o(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.mC(null,null,this,a,b)},
cm:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a_===C.f)return a.$1(b)
return P.mD(null,null,this,a,b,c,d)},
j1:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.pe(null,null,this,a,b,c,d,e,f)}}
P.jW.prototype={
$0:function(){return this.a.dZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jV.prototype={
$0:function(){return this.a.j2(this.b)},
$S:3}
P.jX.prototype={
$1:function(a){var u=this.c
return this.a.j3(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jS.prototype={
gT:function(a){var u=this,t=new P.eB(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ica")!=null}else{t=this.eP(b)
return t}},
eP:function(a){var u=this.d
if(u==null)return!1
return this.bB(this.cR(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cF(u==null?s.b=P.lk():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cF(t==null?s.c=P.lk():t,b)}else return s.eF(0,b)},
eF:function(a,b){var u,t,s,r=this
H.C(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lk()
t=r.cK(b)
s=u[t]
if(s==null)u[t]=[r.by(b)]
else{if(r.bB(s,b)>=0)return!1
s.push(r.by(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hh(this.c,b)
else return this.hg(0,b)},
hg:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cR(r,b)
t=s.bB(u,b)
if(t<0)return!1
s.d7(u.splice(t,1)[0])
return!0},
cF:function(a,b){H.C(b,H.q(this,0))
if(H.h(a[b],"$ica")!=null)return!1
a[b]=this.by(b)
return!0},
hh:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ica")
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cH:function(){this.r=1073741823&this.r+1},
by:function(a){var u,t=this,s=new P.ca(H.C(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cH()
return s},
d7:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cH()},
cK:function(a){return J.dp(a)&1073741823},
cR:function(a,b){return a[this.cK(b)]},
bB:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1}}
P.ca.prototype={}
P.eB.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bg(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(H.C(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scG:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
P.hj.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hk.prototype={$ik:1,$ib:1}
P.w.prototype={
gT:function(a){return new H.cE(a,this.gn(a),[H.ck(this,a,"w",0)])},
H:function(a,b){return this.j(a,b)},
j8:function(a,b){var u,t=this,s=H.d([],[H.ck(t,a,"w",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
j7:function(a){return this.j8(a,!0)},
io:function(a,b,c,d){var u
H.C(d,H.ck(this,a,"w",0))
P.bI(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l6(a,"[","]")}}
P.hm.prototype={}
P.hn.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.ae.prototype={
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.ck(s,a,"ae",0),H.ck(s,a,"ae",1)]})
for(u=J.bq(s.ga3(a));u.v();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aB(this.ga3(a))},
i:function(a){return P.lc(a)},
$ix:1}
P.kc.prototype={
k:function(a,b,c){H.C(b,H.q(this,0))
H.C(c,H.q(this,1))
throw H.e(P.I("Cannot modify unmodifiable map"))}}
P.ho.prototype={
j:function(a,b){return J.dn(this.a,b)},
k:function(a,b,c){J.kZ(this.a,H.C(b,H.q(this,0)),H.C(c,H.q(this,1)))},
F:function(a,b){J.lI(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aB(this.a)},
i:function(a){return J.ar(this.a)},
$ix:1}
P.eh.prototype={}
P.jZ.prototype={
ap:function(a,b){var u
for(u=J.bq(H.m(b,"$ik",this.$ti,"$ak"));u.v();)this.h(0,u.gI(u))},
i:function(a){return P.l6(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.m6(b,"index")
for(u=P.oy(r,r.r,H.q(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.e(P.X(b,r,"index",null,t))},
$ik:1,
$im9:1}
P.eC.prototype={}
P.f5.prototype={}
P.fu.prototype={
iF:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bI(a0,a1,b.length)
u=$.ni()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kE(C.b.C(b,n))
j=H.kE(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a5("")
g=r.a+=C.b.p(b,s,t)
r.a=g+H.c0(m)
s=n
continue}}throw H.e(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.p(b,s,a1)
f=g.length
if(q>=0)P.lM(b,p,a1,q,o,f)
else{e=C.d.b9(f-1,4)+1
if(e===1)throw H.e(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lM(b,p,a1,q,o,d)
else{e=C.d.b9(d,4)
if(e===1)throw H.e(P.a3(c,b,a1))
if(e>1)b=C.b.aR(b,a1,a1,e===2?"==":"=")}return b},
$abT:function(){return[[P.b,P.l],P.f]}}
P.fv.prototype={
$abu:function(){return[[P.b,P.l],P.f]}}
P.bT.prototype={}
P.bu.prototype={}
P.fS.prototype={
$abT:function(){return[P.f,[P.b,P.l]]}}
P.h7.prototype={
i:function(a){return this.a}}
P.h6.prototype={
eR:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.c(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.a5("")
if(r>b)q.a+=C.b.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nt(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abu:function(){return[P.f,P.f]}}
P.j9.prototype={
gim:function(){return C.N}}
P.jb.prototype={
c_:function(a){var u,t,s=P.bI(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ki(u)
if(t.f2(a,0,s)!==s)t.d9(J.np(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oP(0,t.b,u.length)))},
$abu:function(){return[P.f,[P.b,P.l]]}}
P.ki.prototype={
d9:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f2:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d9(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ja.prototype={
c_:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.ok(!1,a,0,null)
if(u!=null)return u
t=P.bI(0,null,J.aB(a))
s=P.mF(a,0,t)
if(s>0){r=P.cU(a,0,s)
if(s===t)return r
q=new P.a5(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a5("")
n=new P.kh(!1,q)
n.c=o
n.i5(a,p,t)
if(n.e>0){H.y(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c0(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abu:function(){return[[P.b,P.l],P.f]}}
P.kh.prototype={
i5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dj(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ae()
if((o&192)!==128){n=P.a3(h+C.d.b7(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.w,n)
if(u<=C.w[n]){n=P.a3("Overlong encoding of 0x"+C.d.b7(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.d.b7(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.c0(u)
i.c=!1}for(n=p<c;n;){m=P.mF(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cU(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.d.b7(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.d.b7(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.O.prototype={}
P.ax.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aM(u,30))&1073741823},
i:function(a){var u=this,t=P.nC(H.o3(u)),s=P.dz(H.o1(u)),r=P.dz(H.nY(u)),q=P.dz(H.nZ(u)),p=P.dz(H.o0(u)),o=P.dz(H.o2(u)),n=P.nD(H.o_(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.bw.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bw&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fP(),q=this.a
if(q<0)return"-"+new P.bw(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fO().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fO.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fP.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bx.prototype={}
P.fo.prototype={
i:function(a){return"Assertion failed"}}
P.dX.prototype={
i:function(a){return"Throw of null."}}
P.aK.prototype={
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbA()+o+u
if(!q.a)return t
s=q.gbz()
r=P.dD(q.b)
return t+s+": "+r}}
P.c1.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h8.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j_.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dD(u)+"."}}
P.hX.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.e6.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fI.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eu.prototype={
i:function(a){return"Exception: "+this.a}}
P.h1.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.V(f,q)
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
k=""}j=C.b.p(f,m,n)
return h+l+j+k+"\n"+C.b.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.by.prototype={}
P.l.prototype={}
P.k.prototype={
bs:function(a,b){var u=H.aq(this,"k",0)
return new H.d2(this,H.o(b,{func:1,ret:P.O,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gaG:function(a){var u,t=this.gT(this)
if(!t.v())throw H.e(H.h9())
u=t.gI(t)
if(t.v())throw H.e(H.nJ())
return u},
H:function(a,b){var u,t,s
P.m6(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.e(P.X(b,this,"index",null,t))},
i:function(a){return P.nI(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ik:1}
P.x.prototype={}
P.M.prototype={
gG:function(a){return P.T.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.T.prototype={constructor:P.T,$iT:1,
q:function(a,b){return this===b},
gG:function(a){return H.cN(this)},
i:function(a){return"Instance of '"+H.i(H.cO(this))+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.f.prototype={$im1:1}
P.a5.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq_:1}
P.j7.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.m(a,"$ix",[r,r],"$ax")
H.L(b)
u=J.dk(b).dE(b,"=")
if(u===-1){if(b!=="")J.kZ(a,P.lo(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.p(b,0,u)
s=C.b.a8(b,u+1)
r=this.a
J.kZ(a,P.lo(t,0,t.length,r,!0),P.lo(s,0,s.length,r,!0))}return a},
$S:45}
P.j4.prototype={
$2:function(a,b){throw H.e(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j5.prototype={
$2:function(a,b){throw H.e(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j6.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fk(C.b.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cb.prototype={
ge9:function(){return this.b},
gc9:function(a){var u=this.c
if(u==null)return""
if(C.b.a2(u,"["))return C.b.p(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.mv(this.a)
return u},
gcg:function(a){var u=this.f
return u==null?"":u},
gdz:function(){var u=this.r
return u==null?"":u},
dX:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$ix",[P.f,null],"$ax")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a2(p,"/"))p="/"+p
n=P.lm(null,0,0,b)
return new P.cb(u,s,q,r,p,n,m.r)},
gci:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shf(new P.eh(P.mj(u==null?"":u),[t,t]))}return s.Q},
gdA:function(){return this.c!=null},
gdD:function(){return this.f!=null},
gdB:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.i(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.i(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.i(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ilg)if(s.a==b.gbt())if(s.c!=null===b.gdA())if(s.b==b.ge9())if(s.gc9(s)==b.gc9(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdS(b)){u=s.f
t=u==null
if(!t===b.gdD()){if(t)u=""
if(u===b.gcg(b)){u=s.r
t=u==null
if(!t===b.gdB()){if(t)u=""
u=u===b.gdz()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
shf:function(a){var u=P.f
this.Q=H.m(a,"$ix",[u,u],"$ax")},
$ilg:1,
gbt:function(){return this.a},
gdS:function(a){return this.e}}
P.kd.prototype={
$1:function(a){throw H.e(P.a3("Invalid port",this.a,this.b+1))},
$S:41}
P.ke.prototype={
$1:function(a){return P.f6(C.X,a,C.h,!1)},
$S:22}
P.kg.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f6(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f6(C.i,b,C.h,!0))}},
$S:23}
P.kf.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.bq(H.mU(b,"$ik")),t=this.a;u.v();)t.$2(a,H.L(u.gI(u)))},
$S:40}
P.j3.prototype={
ge8:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bk(u,"?",o)
s=u.length
if(t>=0){r=P.df(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jB("data",p,p,p,P.df(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.ko.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kn.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.nq(u,0,96,b)
return u},
$S:39}
P.kp.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.kq.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.k1.prototype={
gdA:function(){return this.c>0},
gdC:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gdD:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdB:function(){return this.r<this.a.length},
gcT:function(){return this.b===4&&C.b.a2(this.a,"http")},
gcU:function(){return this.b===5&&C.b.a2(this.a,"https")},
gbt:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcT())q=t.x="http"
else if(t.gcU()){t.x="https"
q="https"}else if(q===4&&C.b.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a2(t.a,r)){t.x=r
q=r}else{q=C.b.p(t.a,0,q)
t.x=q}return q},
ge9:function(){var u=this.c,t=this.b+3
return u>t?C.b.p(this.a,t,u-1):""},
gc9:function(a){var u=this.c
return u>0?C.b.p(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gdC()){u=t.d
if(typeof u!=="number")return u.w()
return P.fk(C.b.p(t.a,u+1,t.e),null,null)}if(t.gcT())return 80
if(t.gcU())return 443
return 0},
gdS:function(a){return C.b.p(this.a,this.e,this.f)},
gcg:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.p(this.a,u+1,t):""},
gdz:function(){var u=this.r,t=this.a
return u<t.length?C.b.a8(t,u+1):""},
gci:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.f
return new P.eh(P.mj(u.gcg(u)),[t,t])},
dX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$ix",[P.f,null],"$ax")
u=k.gbt()
t=u==="file"
s=k.c
r=s>0?C.b.p(k.a,k.b+3,s):""
q=k.gdC()?k.gbn(k):j
s=k.c
if(s>0)p=C.b.p(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.p(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a2(o,"/"))o="/"+o
m=P.lm(j,0,0,b)
n=k.r
l=n<s.length?C.b.a8(s,n+1):j
return new P.cb(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ilg&&this.a===b.i(0)},
i:function(a){return this.a},
$ilg:1}
P.jB.prototype={}
W.v.prototype={}
W.fm.prototype={
gn:function(a){return a.length}}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.cp.prototype={$icp:1}
W.bR.prototype={$ibR:1}
W.br.prototype={$ibr:1}
W.bS.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.pm(c))
return a.getContext(b)},
ec:function(a,b){return this.cp(a,b,null)},
$ibS:1}
W.cs.prototype={$ics:1}
W.bs.prototype={
gn:function(a){return a.length}}
W.cu.prototype={$icu:1}
W.fE.prototype={
gn:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cv.prototype={
gn:function(a){return a.length}}
W.fF.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fG.prototype={
gn:function(a){return a.length}}
W.fH.prototype={
gn:function(a){return a.length}}
W.fK.prototype={
gn:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fL.prototype={
i:function(a){return String(a)}}
W.dA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iak",[P.aa],"$aak")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ak,P.aa]]},
$aw:function(){return[[P.ak,P.aa]]},
$ik:1,
$ak:function(){return[[P.ak,P.aa]]},
$ib:1,
$ab:function(){return[[P.ak,P.aa]]},
$aG:function(){return[[P.ak,P.aa]]}}
W.dB.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaF(a))+" x "+H.i(this.gaz(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iak)return!1
return a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaF(a)===u.gaF(b)&&this.gaz(a)===u.gaz(b)},
gG:function(a){return W.mt(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(this.gaF(a)),C.e.gG(this.gaz(a)))},
gdh:function(a){return a.bottom},
gaz:function(a){return a.height},
gbm:function(a){return a.left},
gcl:function(a){return a.right},
gbp:function(a){return a.top},
gaF:function(a){return a.width},
$iak:1,
$aak:function(){return[P.aa]}}
W.fM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.L(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.f]},
$aw:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.fN.prototype={
gn:function(a){return a.length}}
W.jz.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.h(u[b],"$iS")},
k:function(a,b,c){var u
H.h(c,"$iS")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.j7(this)
return new J.aw(u,u.length,[H.q(u,0)])},
$aw:function(){return[W.S]},
$ak:function(){return[W.S]},
$ab:function(){return[W.S]}}
W.S.prototype={
gi_:function(a){return new W.jC(a)},
gbZ:function(a){return new W.jz(a,a.children)},
gdi:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
aa:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lT
if(u==null){u=H.d([],[W.az])
t=new W.dW(u)
C.a.h(u,W.ms(null))
C.a.h(u,W.mu())
$.lT=t
d=t}else d=u
u=$.lS
if(u==null){u=new W.f7(d)
$.lS=u
c=u}else{u.a=d
c=u}}if($.bh==null){u=document
t=u.implementation.createHTMLDocument("")
$.bh=t
$.l5=t.createRange()
t=$.bh.createElement("base")
H.h(t,"$icp")
t.href=u.baseURI
$.bh.head.appendChild(t)}u=$.bh
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibr")}u=$.bh
if(!!this.$ibr)s=u.body
else{s=u.createElement(a.tagName)
$.bh.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.V,a.tagName)){$.l5.selectNodeContents(s)
r=$.l5.createContextualFragment(b)}else{s.innerHTML=b
r=$.bh.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bh.body
if(s==null?u!=null:s!==u)J.lK(s)
c.cq(r)
document.adoptNode(r)
return r},
i8:function(a,b,c){return this.aa(a,b,c,null)},
ee:function(a,b){a.textContent=null
a.appendChild(this.aa(a,b,null,null))},
$iS:1,
ge_:function(a){return a.tagName}}
W.fR.prototype={
$1:function(a){return!!J.P(H.h(a,"$iE")).$iS},
$S:27}
W.n.prototype={$in:1}
W.j.prototype={
hP:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.eG(a,b,c,!1)},
eG:function(a,b,c,d){return a.addEventListener(b,H.cg(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aD.prototype={$iaD:1}
W.cy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaD")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aD]},
$aw:function(){return[W.aD]},
$ik:1,
$ak:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$icy:1,
$aG:function(){return[W.aD]}}
W.fX.prototype={
gn:function(a){return a.length}}
W.h0.prototype={
gn:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.h5.prototype={
gn:function(a){return a.length}}
W.bW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.E]},
$aw:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibW:1,
$aG:function(){return[W.E]}}
W.bi.prototype={$ibi:1,
gdk:function(a){return a.data}}
W.cB.prototype={$icB:1}
W.cC.prototype={$icC:1}
W.b4.prototype={$ib4:1}
W.dM.prototype={
i:function(a){return String(a)},
$idM:1}
W.hF.prototype={
gn:function(a){return a.length}}
W.cG.prototype={$icG:1}
W.hG.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.F(a,new W.hH(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$ix:1,
$ax:function(){return[P.f,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hI.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.F(a,new W.hJ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$ix:1,
$ax:function(){return[P.f,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aN.prototype={$iaN:1}
W.hK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaN")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aG:function(){return[W.aN]}}
W.af.prototype={$iaf:1}
W.ap.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.ma("No elements"))
if(t>1)throw H.e(P.ma("More than one element"))
return u.firstChild},
ap:function(a,b){var u,t,s,r
H.m(b,"$ik",[W.E],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dE(u,u.length,[H.ck(C.Z,u,"G",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ak:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iW:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j_:function(a,b){var u,t
try{u=a.parentNode
J.nn(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eh(a):u},
hU:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hk:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.E]},
$aw:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aO.prototype={$iaO:1,
gn:function(a){return a.length}}
W.i_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaO")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aG:function(){return[W.aO]}}
W.i9.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.F(a,new W.ia(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$ix:1,
$ax:function(){return[P.f,null]}}
W.ia.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ic.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.io.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaQ")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ik:1,
$ak:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aG:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.ip.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gn:function(a){return a.length}}
W.is.prototype={
j:function(a,b){return a.getItem(H.L(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.d([],[P.f])
this.F(a,new W.it(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$ix:1,
$ax:function(){return[P.f,P.f]}}
W.it.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.aE.prototype={$iaE:1}
W.b8.prototype={$ib8:1}
W.e7.prototype={
aa:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
u=W.nE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).ap(0,new W.ap(u))
return t}}
W.iz.prototype={
aa:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaG(u)
s.toString
u=new W.ap(s)
r=u.gaG(u)
t.toString
r.toString
new W.ap(t).ap(0,new W.ap(r))
return t}}
W.iA.prototype={
aa:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaG(u)
t.toString
s.toString
new W.ap(t).ap(0,new W.ap(s))
return t}}
W.cV.prototype={$icV:1}
W.aU.prototype={$iaU:1}
W.aF.prototype={$iaF:1}
W.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaF")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aF]},
$aw:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aG:function(){return[W.aF]}}
W.iD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.iI.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aW.prototype={$iaW:1}
W.iM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.iN.prototype={
gn:function(a){return a.length}}
W.bJ.prototype={}
W.j8.prototype={
i:function(a){return String(a)}}
W.jq.prototype={
gn:function(a){return a.length}}
W.bc.prototype={
gib:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.I("deltaY is not supported"))},
gia:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.I("deltaX is not supported"))},
$ibc:1}
W.d3.prototype={
hl:function(a,b){return a.requestAnimationFrame(H.cg(H.o(b,{func:1,ret:-1,args:[P.aa]}),1))},
eX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d4.prototype={$id4:1}
W.jA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iV")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.V]},
$aw:function(){return[W.V]},
$ik:1,
$ak:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aG:function(){return[W.V]}}
W.ep.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iak)return!1
return a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaF(b)&&a.height===u.gaz(b)},
gG:function(a){return W.mt(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(a.width),C.e.gG(a.height))},
gaz:function(a){return a.height},
gaF:function(a){return a.width}}
W.jP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaM")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aG:function(){return[W.aM]}}
W.eH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.E]},
$aw:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.k2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.k6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aE]},
$aw:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aG:function(){return[W.aE]}}
W.jy.prototype={
F:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.h(r[t],"$id4")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$ax:function(){return[P.f,P.f]}}
W.jC.prototype={
j:function(a,b){return this.a.getAttribute(H.L(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga3(this).length}}
W.jD.prototype={}
W.lj.prototype={}
W.jE.prototype={}
W.jF.prototype={
$1:function(a){return this.a.$1(H.h(a,"$in"))},
$S:37}
W.bL.prototype={
ev:function(a){var u
if($.d6.giz($.d6)){for(u=0;u<262;++u)$.d6.k(0,C.U[u],W.pw())
for(u=0;u<12;++u)$.d6.k(0,C.q[u],W.px())}},
aN:function(a){return $.nj().R(0,W.cw(a))},
aq:function(a,b,c){var u=$.d6.j(0,H.i(W.cw(a))+"::"+b)
if(u==null)u=$.d6.j(0,"*::"+b)
if(u==null)return!1
return H.lt(u.$4(a,b,c,this))},
$iaz:1}
W.G.prototype={
gT:function(a){return new W.dE(a,this.gn(a),[H.ck(this,a,"G",0)])}}
W.dW.prototype={
aN:function(a){return C.a.de(this.a,new W.hS(a))},
aq:function(a,b,c){return C.a.de(this.a,new W.hR(a,b,c))},
$iaz:1}
W.hS.prototype={
$1:function(a){return H.h(a,"$iaz").aN(this.a)},
$S:29}
W.hR.prototype={
$1:function(a){return H.h(a,"$iaz").aq(this.a,this.b,this.c)},
$S:29}
W.eP.prototype={
ez:function(a,b,c,d){var u,t,s
this.a.ap(0,c)
u=b.bs(0,new W.k_())
t=b.bs(0,new W.k0())
this.b.ap(0,u)
s=this.c
s.ap(0,C.x)
s.ap(0,t)},
aN:function(a){return this.a.R(0,W.cw(a))},
aq:function(a,b,c){var u=this,t=W.cw(a),s=u.c
if(s.R(0,H.i(t)+"::"+b))return u.d.hT(c)
else if(s.R(0,"*::"+b))return u.d.hT(c)
else{s=u.b
if(s.R(0,H.i(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.i(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iaz:1}
W.k_.prototype={
$1:function(a){return!C.a.R(C.q,H.L(a))},
$S:30}
W.k0.prototype={
$1:function(a){return C.a.R(C.q,H.L(a))},
$S:30}
W.k8.prototype={
aq:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.k9.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.L(a))},
$S:22}
W.k7.prototype={
aN:function(a){var u=J.P(a)
if(!!u.$icP)return!1
u=!!u.$ip
if(u&&W.cw(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.b.a2(b,"on"))return!1
return this.aN(a)},
$iaz:1}
W.dE.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scS(J.dn(u.a,t))
u.c=t
return!0}u.scS(null)
u.c=s
return!1},
gI:function(a){return this.d},
scS:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
W.az.prototype={}
W.jY.prototype={$iqc:1}
W.f7.prototype={
cq:function(a){new W.kj(this).$2(a,null)},
aW:function(a,b){if(b==null)J.lK(a)
else b.removeChild(a)},
hq:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nr(a)
n=o.a.getAttribute("is")
H.h(a,"$iS")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ai(r)}try{s=W.cw(a)
this.hp(H.h(a,"$iS"),b,p,t,s,H.h(o,"$ix"),H.L(n))}catch(r){if(H.ai(r) instanceof P.aK)throw r
else{this.aW(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hp:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aW(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aN(a)){o.aW(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aq(a,"is",g)){o.aW(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.nu(r)
H.L(r)
if(!q.aq(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$icV)o.cq(a.content)},
$ipX:1}
W.kj.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hq(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aW(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eV.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
P.k3.prototype={
dw:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
co:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iax)return new Date(a.a)
if(!!u.$io7)throw H.e(P.j0("structured clone of RegExp"))
if(!!u.$iaD)return a
if(!!u.$ibR)return a
if(!!u.$icy)return a
if(!!u.$ibi)return a
if(!!u.$icI||!!u.$ibE||!!u.$icG)return a
if(!!u.$ix){t=q.dw(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.k5(p,q))
return p.a}if(!!u.$ib){t=q.dw(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.i7(a,t)}throw H.e(P.j0("structured clone of other type"))},
i7:function(a,b){var u,t=J.dj(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.co(t.j(a,u)))
return r}}
P.k5.prototype={
$2:function(a,b){this.a.a[a]=this.b.co(b)},
$S:5}
P.f4.prototype={$ibi:1,
gdk:function(a){return this.a}}
P.kw.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k4.prototype={}
P.fY.prototype={
gbe:function(){var u=this.b,t=H.aq(u,"w",0),s=W.S
return new H.hp(new H.d2(u,H.o(new P.fZ(),{func:1,ret:P.O,args:[t]}),[t]),H.o(new P.h_(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iS")
u=this.gbe()
J.ns(u.b.$1(J.fl(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aB(this.gbe().a)},
j:function(a,b){var u=this.gbe()
return u.b.$1(J.fl(u.a,b))},
gT:function(a){var u=P.lY(this.gbe(),!1,W.S)
return new J.aw(u,u.length,[H.q(u,0)])},
$aw:function(){return[W.S]},
$ak:function(){return[W.S]},
$ab:function(){return[W.S]}}
P.fZ.prototype={
$1:function(a){return!!J.P(H.h(a,"$iE")).$iS},
$S:27}
P.h_.prototype={
$1:function(a){return H.A(H.h(a,"$iE"),"$iS")},
$S:34}
P.jT.prototype={
gcl:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.q(this,0))},
gdh:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iak){t=p.a
if(t==u.gbm(b)){s=p.b
if(s==u.gbp(b)){r=p.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.F(r)
q=H.q(p,0)
if(H.C(t+r,q)===u.gcl(b)){t=p.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.F(t)
u=H.C(s+t,q)===u.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dp(s),q=t.b,p=J.dp(q),o=t.c
if(typeof s!=="number")return s.w()
if(typeof o!=="number")return H.F(o)
u=H.q(t,0)
o=C.d.gG(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.F(s)
u=C.d.gG(H.C(q+s,u))
return P.ox(P.jR(P.jR(P.jR(P.jR(0,r),p),o),u))}}
P.ak.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaF:function(a){return this.c},
gaz:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.he.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib5")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b5]},
$ik:1,
$ak:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aG:function(){return[P.b5]}}
P.b7.prototype={$ib7:1}
P.hV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib7")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b7]},
$ik:1,
$ak:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aG:function(){return[P.b7]}}
P.i1.prototype={
gn:function(a){return a.length}}
P.cP.prototype={$icP:1}
P.iy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.L(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.p.prototype={
gbZ:function(a){return new P.fY(a,new W.ap(a))},
aa:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.az])
C.a.h(p,W.ms(null))
C.a.h(p,W.mu())
C.a.h(p,new W.k7())
c=new W.f7(new W.dW(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).i8(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.ba.prototype={$iba:1}
P.iO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$iba")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$aw:function(){return[P.ba]},
$ik:1,
$ak:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aG:function(){return[P.ba]}}
P.ez.prototype={}
P.eA.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.N.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioh:1}
P.fq.prototype={
gn:function(a){return a.length}}
P.fr.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.f])
this.F(a,new P.fs(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$ix:1,
$ax:function(){return[P.f,null]}}
P.fs.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.ft.prototype={
gn:function(a){return a.length}}
P.bQ.prototype={}
P.hW.prototype={
gn:function(a){return a.length}}
P.en.prototype={}
P.dt.prototype={$idt:1}
P.e_.prototype={$ie_:1}
P.c2.prototype={
j4:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$ibi)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pn(g))
return}if(!!t.$icB)t=!0
else t=!1
if(t){this.hD(a,b,c,d,e,f,g)
return}throw H.e(P.dr("Incorrect number or type of arguments"))},
hD:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
br:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e5:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e6:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e7:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic2:1}
P.e2.prototype={$ie2:1}
P.e9.prototype={$ie9:1}
P.ef.prototype={$ief:1}
P.iq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return P.bl(a.item(b))},
k:function(a,b,c){H.h(c,"$ix")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.x,,,]]},
$ik:1,
$ak:function(){return[[P.x,,,]]},
$ib:1,
$ab:function(){return[[P.x,,,]]},
$aG:function(){return[[P.x,,,]]}}
P.eS.prototype={}
P.eT.prototype={}
O.a2.prototype={
bw:function(a){var u=this
u.sf7(H.d([],[a]))
u.scY(null)
u.scV(null)
u.scZ(null)},
cr:function(a,b,c){var u=this,t=H.aq(u,"a2",0)
H.o(b,{func:1,ret:P.O,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.scY(b)
u.scV(a)
u.scZ(c)},
ba:function(a,b){return this.cr(a,null,b)},
fZ:function(a){var u
H.m(a,"$ik",[H.aq(this,"a2",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
es:function(a,b){var u
H.m(b,"$ik",[H.aq(this,"a2",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.aw(u,u.length,[H.q(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a2",0)
H.C(b,r)
r=[r]
if(H.H(s.fZ(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.es(t,H.d([b],r))}},
sf7:function(a){this.a=H.m(a,"$ib",[H.aq(this,"a2",0)],"$ab")},
scY:function(a){this.b=H.o(a,{func:1,ret:P.O,args:[[P.k,H.aq(this,"a2",0)]]})},
scV:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a2",0)]]})},
scZ:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a2",0)]]})},
$ik:1}
O.cF.prototype={
gn:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.a1():u},
aH:function(){var u=this.b
if(u!=null)u.J(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gas(u)
else return V.dS()},
dU:function(a){var u=this.a
if(a==null)C.a.h(u,V.dS())
else C.a.h(u,a)
this.aH()},
cf:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sbF:function(a){this.a=H.m(a,"$ib",[V.ao],"$ab")}}
E.fw.prototype={}
E.an.prototype={
saf:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdP())
u=s.c
if(u!=null)u.gA().h(0,s.gdP())
t=new D.U("shape",r,s.c,[F.e3])
t.b=!0
s.aB(t)}},
sb4:function(a){var u,t,s=this
if(!J.R(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdN())
if(a!=null)a.gA().h(0,s.gdN())
s.r=a
t=new D.U("mover",u,a,[U.aj])
t.b=!0
s.aB(t)}},
aE:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.R(q,s.x)){u=s.x
s.x=q
t=new D.U("matrix",u,q,[V.ao])
t.b=!0
s.aB(t)}for(r=s.y.a,r=new J.aw(r,r.length,[H.q(r,0)]);r.v();)r.d.aE(0,b)},
aQ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.B(0,s.ga1(s)))
s.aH()
a.dV(t.f)
s=a.dy
u=(s&&C.a).gas(s)
if(u!=null&&t.d!=null)u.iZ(a,t)
for(s=t.y.a,s=new J.aw(s,s.length,[H.q(s,0)]);s.v();)s.d.aQ(a)
a.dT()
a.dx.cf()},
aB:function(a){var u=this.z
if(u!=null)u.J(a)},
Z:function(){return this.aB(null)},
dQ:function(a){H.h(a,"$iD")
this.e=null
this.aB(a)},
iM:function(){return this.dQ(null)},
dO:function(a){this.aB(H.h(a,"$iD"))},
iL:function(){return this.dO(null)},
dM:function(a){this.aB(H.h(a,"$iD"))},
iI:function(){return this.dM(null)},
iH:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ik",[E.an],"$ak")
for(u=b.length,t=this.gdL(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bU()
o.sag(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
iK:function(a,b){var u,t
H.m(b,"$ik",[E.an],"$ak")
for(u=b.gT(b),t=this.gdL();u.v();)u.gI(u).gA().K(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seu:function(a,b){this.y=H.m(b,"$ia2",[E.an],"$aa2")},
$icH:1}
E.i5.prototype={
eo:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cF()
t=[V.ao]
u.sbF(H.d([],t))
u.b=null
u.gA().h(0,new E.i6(s))
s.cy=u
u=new O.cF()
u.sbF(H.d([],t))
u.b=null
u.gA().h(0,new E.i7(s))
s.db=u
u=new O.cF()
u.sbF(H.d([],t))
u.b=null
u.gA().h(0,new E.i8(s))
s.dx=u
s.shC(H.d([],[O.c3]))
u=s.dy;(u&&C.a).h(u,null)
s.shx(new H.a0([P.f,A.cQ]))},
giV:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.B(0,u.ga1(u))
s=u}return s},
dV:function(a){var u=this.dy,t=a==null?(u&&C.a).gas(u):a;(u&&C.a).h(u,t)},
dT:function(){var u=this.dy
if(u.length>1)u.pop()},
shC:function(a){this.dy=H.m(a,"$ib",[O.c3],"$ab")},
shx:function(a){this.fr=H.m(a,"$ix",[P.f,A.cQ],"$ax")}}
E.i6.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:10}
E.i7.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.i8.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:10}
E.eb.prototype={
cA:function(a){H.h(a,"$iD")
this.dY()},
cz:function(){return this.cA(null)},
git:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.lR(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
d1:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.F(r)
u=C.e.c8(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.e.c8(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.md(C.o,s.gj0())}},
dY:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iH(this),{func:1,ret:-1,args:[P.aa]})
C.E.eX(u)
C.E.hl(u,W.mI(t,P.aa))}},
iY:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d1()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.lR(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aH()
r=s.db
C.a.sn(r.a,0)
r.aH()
r=s.dx
C.a.sn(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aQ(p.e)}s=p.z
if(s!=null)s.J(null)}catch(q){u=H.ai(q)
t=H.cl(q)
P.lC("Error: "+H.i(u))
P.lC("Stack: "+H.i(t))
throw H.e(u)}}}
E.iH.prototype={
$1:function(a){var u
H.mW(a)
u=this.a
if(u.ch){u.ch=!1
u.iY()}},
$S:57}
Z.el.prototype={$ipR:1}
Z.du.prototype={
bU:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jr.prototype={$ipS:1}
Z.dv.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bU:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bU(a)},
ja:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sf3:function(a){this.b=H.m(a,"$ib",[Z.bz],"$ab")},
$iq0:1}
Z.bz.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cO(this.c))+"'")+"]"}}
Z.bK.prototype={
gcs:function(a){var u=this.a,t=(u&$.bp().a)!==0?3:0
if((u&$.bo().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=3
if((u&$.bO().a)!==0)t+=2
if((u&$.bP().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=4
if((u&$.co().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
hV:function(a){var u,t=$.bp(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.co()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0)if(u===a)return t
return $.nh()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bK))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bp().a)!==0)C.a.h(u,"Pos")
if((t&$.bo().a)!==0)C.a.h(u,"Norm")
if((t&$.bn().a)!==0)C.a.h(u,"Binm")
if((t&$.bO().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bP().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dl().a)!==0)C.a.h(u,"Clr3")
if((t&$.dm().a)!==0)C.a.h(u,"Clr4")
if((t&$.co().a)!==0)C.a.h(u,"Weight")
if((t&$.bm().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fz.prototype={}
D.bU.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.o(b,u)
if(this.a==null)this.sag(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.lY(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fU(q))
u=r.b
if(u!=null){r.saK(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.F(u,new D.fV(q))}return!0},
ij:function(){return this.J(null)},
ah:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}},
sag:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saK:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fU.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fV.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.D.prototype={}
D.bX.prototype={}
D.bY.prototype={}
D.U.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dw.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dJ.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hd.prototype={
iR:function(a){this.d.h(0,a.a)
return!1},
iN:function(a){this.d.K(0,a.a)
return!1},
she:function(a){this.d=H.m(a,"$im9",[P.l],"$am9")}}
X.dN.prototype={}
X.hl.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gbh()
r=new X.bD(a,V.bG(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
ce:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ed()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aU(a,b))
return!0},
iS:function(a){return!1},
fO:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dN(c,r.a.gbh(),b)
s.b=!0
t.J(s)
r.y=new P.ax(u,!1)
r.x=V.bG()}}
X.bC.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bC))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bD.prototype={}
X.hL.prototype={
bC:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gbh(),r=new X.bD(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ce:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bC(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ed()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bC(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bC(a,b,!1))
return!0},
iT:function(a,b){return!1}}
X.i0.prototype={}
X.ed.prototype={}
X.iL.prototype={
aU:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ab],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bG()
s=q.a.gbh()
r=new X.ed(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iQ:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.J(this.aU(a,!0))
return!0},
iO:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.J(this.aU(a,!0))
return!0},
iP:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.J(this.aU(a,!1))
return!0}}
X.ei.prototype={
gbh:function(){var u=this.a,t=C.j.gdi(u).c
t.toString
u=C.j.gdi(u).d
u.toString
return V.m7(0,0,t,u)},
cN:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dJ(u,new X.bC(t,a.altKey,a.shiftKey))},
aL:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
bQ:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.ab(s-q,r-u)},
aV:function(a){return new V.a6(a.movementX,a.movementY)},
bL:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.e.ai(r.pageX)
C.e.ai(r.pageY)
p=o.left
C.e.ai(r.pageX)
C.a.h(n,new V.ab(q-p,C.e.ai(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dw(u,new X.bC(t,a.altKey,a.shiftKey))},
bG:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fI:function(a){this.f=!0},
ft:function(a){this.f=!1},
fC:function(a){H.h(a,"$iaf")
if(H.H(this.f)&&this.bG(a))a.preventDefault()},
fM:function(a){var u
H.h(a,"$ib4")
if(!H.H(this.f))return
u=this.cN(a)
this.b.iR(u)},
fK:function(a){var u
H.h(a,"$ib4")
if(!H.H(this.f))return
u=this.cN(a)
this.b.iN(u)},
fQ:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aL(a)
if(H.H(q.x)){t=q.av(a)
s=q.aV(a)
if(q.d.ce(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.av(a)
r=q.ax(a)
if(q.c.ce(t,r))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aL(a)
u=r.av(a)
if(H.H(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.ax(a)
if(r.c.b6(u,s))a.preventDefault()},
fG:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bG(a)){r.aL(a)
u=r.av(a)
if(H.H(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.ax(a)
if(r.c.b6(u,s))a.preventDefault()}},
fS:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aL(a)
u=r.av(a)
if(H.H(r.x)){t=r.aV(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()},
fE:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bG(a)){r.aL(a)
u=r.av(a)
if(H.H(r.x)){t=r.aV(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()}},
fW:function(a){var u,t,s=this
H.h(a,"$ibc")
s.aL(a)
u=new V.a6((a&&C.D).gia(a),C.D.gib(a)).t(0,180)
if(H.H(s.x)){if(s.d.iS(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.ax(a)
if(s.c.iT(u,t))a.preventDefault()},
fY:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ax(s.y)
s.d.fO(u,t,r)}},
ha:function(a){var u,t=this
H.h(a,"$iaW")
t.a.focus()
t.f=!0
t.bQ(a)
u=t.bL(a)
if(t.e.iQ(u))a.preventDefault()},
h6:function(a){var u
H.h(a,"$iaW")
this.bQ(a)
u=this.bL(a)
if(this.e.iO(u))a.preventDefault()},
h8:function(a){var u
H.h(a,"$iaW")
this.bQ(a)
u=this.bL(a)
if(this.e.iP(u))a.preventDefault()},
seY:function(a){this.z=H.m(a,"$ib",[[P.cT,P.T]],"$ab")}}
D.bv.prototype={
ao:function(a){var u
H.h(a,"$iD")
u=this.r
if(u!=null)u.J(a)},
fu:function(){return this.ao(null)},
$iad:1,
$icH:1}
D.ad.prototype={$icH:1}
D.dK.prototype={
ao:function(a){var u=this.x
if(u!=null)u.J(a)},
cX:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.J(a)},
fN:function(){return this.cX(null)},
h0:function(a){var u,t,s
H.m(a,"$ik",[D.ad],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.eQ(s))return!1}return!0},
fm:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gcW(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.bv)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bU()
o.sag(null)
o.saK(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bX([n])
n.b=!0
this.ao(n)},
h4:function(a,b){var u,t,s,r=D.ad
H.m(b,"$ik",[r],"$ak")
for(u=b.gT(b),t=this.gcW();u.v();){s=u.gI(u)
C.a.K(this.e,s)
s.gA().K(0,t)}r=new D.bY([r])
r.b=!0
this.ao(r)},
eQ:function(a){var u=C.a.R(this.e,a)
return u},
seW:function(a){this.e=H.m(a,"$ib",[D.bv],"$ab")},
shb:function(a){this.f=H.m(a,"$ib",[D.dZ],"$ab")},
shA:function(a){this.r=H.m(a,"$ib",[D.e5],"$ab")},
$ak:function(){return[D.ad]},
$aa2:function(){return[D.ad]}}
D.dZ.prototype={$iad:1,$icH:1}
D.e5.prototype={$iad:1,$icH:1}
V.a7.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.b_.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.fT.prototype={}
V.dR.prototype={
ad:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dR))return!1
u=b.a
t=$.Q().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.ci(H.d([q.a,q.d,q.r],p),3,0),n=V.ci(H.d([q.b,q.e,q.x],p),3,0),m=V.ci(H.d([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
ad:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dF:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.dS()
u=1/b1
t=-n
s=-a0
return V.bk((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bk(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.J(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.Q().a
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
E:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.ci(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ci(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ci(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ci(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
M:function(){return this.E("")}}
V.ab.prototype={
O:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.a4.prototype={
w:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.bH.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bH))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.e1.prototype={
gat:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.a6.prototype={
cc:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.a6(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.ml
return u==null?$.ml=new V.a6(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.a6(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.J.prototype={
cc:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
S:function(a){return new V.J(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.d1()
return new V.J(this.a/b,this.b/b,this.c/b)},
dG:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fA.prototype={
bx:function(a){var u=V.pQ(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.a1():u},
X:function(a){var u=this.y
if(u!=null)u.J(a)},
sea:function(a,b){},
sdH:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bx(u)}s=new D.U("maximumLocation",s,t.b,[P.z])
s.b=!0
t.X(s)}},
sdJ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bx(u)}s=new D.U("minimumLocation",s,t.c,[P.z])
s.b=!0
t.X(s)}},
sa0:function(a,b){var u,t=this
b=t.bx(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.U("location",u,b,[P.z])
u.b=!0
t.X(u)}},
sdI:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.U("maximumVelocity",r,a,[P.z])
r.b=!0
s.X(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.U("velocity",t,a,[P.z])
t.b=!0
u.X(t)}},
sdj:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.U("dampening",u,a,[P.z])
u.b=!0
this.X(u)}},
aE:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dy.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.a1():u},
b8:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cA.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.a1():u},
X:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.J(a)},
al:function(){return this.X(null)},
fk:function(a,b){var u,t,s,r,q,p,o,n=U.aj
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gbc(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.o(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bX([n])
n.b=!0
this.X(n)},
h2:function(a,b){var u,t,s=U.aj
H.m(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gbc();u.v();)u.gI(u).gA().K(0,t)
s=new D.bY([s])
s.b=!0
this.X(s)},
b8:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aw(r,r.length,[H.q(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.b8(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.dS():u
r=s.e
if(r!=null)r.ah(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cA))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.R(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.aj]},
$aa2:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ej.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.a1():u},
X:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.J(a)},
al:function(){return this.X(null)},
hW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.a1():t
u.h(0,s.gfd())
u=s.a.c
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gff())
u=s.a.c
t=u.c
u=t==null?u.c=D.a1():t
u.h(0,s.gfh())
u=s.a.d
t=u.f
u=t==null?u.f=D.a1():t
u.h(0,s.gf8())
u=s.a.d
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gfa())
u=s.a.e
t=u.b
u=t==null?u.b=D.a1():t
u.h(0,s.ghJ())
u=s.a.e
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.ghH())
u=s.a.e
t=u.c
u=t==null?u.c=D.a1():t
u.h(0,s.ghF())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.a6(u,t)},
fe:function(a){var u=this
a=H.A(H.h(a,"$iD"),"$ibD")
if(!J.R(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fg:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibD")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.O(0,a.y)
u=new V.a6(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.an(new V.a6(t.a,t.b).B(0,2).t(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.an(new V.a6(s.a,s.b).B(0,2).t(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.an(new V.a6(t.a,t.b).B(0,2).t(0,u.gat()))}n.al()},
fi:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.al()}},
f9:function(a){var u=this
if(H.A(H.h(a,"$iD"),"$idN").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fb:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibD")
if(!J.R(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.an(new V.a6(s.a,s.b).B(0,2).t(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.an(new V.a6(t.a,t.b).B(0,2).t(0,u.gat()))
n.al()},
hK:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hI:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ied")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.O(0,a.y)
u=new V.a6(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.an(new V.a6(t.a,t.b).B(0,2).t(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.an(new V.a6(s.a,s.b).B(0,2).t(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.an(new V.a6(t.a,t.b).B(0,2).t(0,u.gat()))}n.al()},
hG:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.al()}},
b8:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.aE(0,u)
r.b.aE(0,u)
q=V.lZ(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.bk(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaj:1}
M.dC.prototype={
au:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.J(a)},
ew:function(){return this.au(null)},
fw:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gam(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bU()
o.sag(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sag(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bX([n])
n.b=!0
this.au(n)},
fA:function(a,b){var u,t,s=E.an
H.m(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gam();u.v();)u.gI(u).gA().K(0,t)
s=new D.bY([s])
s.b=!0
this.au(s)},
se0:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().K(0,t.gam())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gam())
s=new D.U("technique",u,t.d,[O.c3])
s.b=!0
t.au(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.a1():u},
aQ:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dV(a1.d)
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
if(typeof s!=="number")return H.F(s)
o=C.e.ai(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.ai(p*r)
p=C.e.ai(q.c*s)
a2.c=p
q=C.e.ai(q.d*r)
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
i=V.bk(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dU(i)
t=$.m2
if(t==null){t=V.nV()
q=V.mp()
p=$.mm
if(p==null)p=$.mm=new V.J(0,0,-1)
h=p.t(0,Math.sqrt(p.D(p)))
q=q.ay(h)
g=q.t(0,Math.sqrt(q.D(q)))
f=h.ay(g)
e=new V.J(t.a,t.b,t.c)
d=g.S(0).D(e)
c=f.S(0).D(e)
b=h.S(0).D(e)
t=V.bk(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m2=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.b8(0,a2,u)
if(a0!=null)a=a0.B(0,a)}a2.db.dU(a)
u=a1.d
if(u!=null)u.aE(0,a2)
for(u=a1.e.a,u=new J.aw(u,u.length,[H.q(u,0)]);u.v();)u.d.aE(0,a2)
for(u=a1.e.a,u=new J.aw(u,u.length,[H.q(u,0)]);u.v();)u.d.aQ(a2)
a1.b.toString
a2.cy.cf()
a2.db.cf()
a1.c.toString
a2.dT()},
seO:function(a,b){this.e=H.m(b,"$ia2",[E.an],"$aa2")},
$ipY:1}
A.ds.prototype={}
A.fp.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ik:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ic:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.am.prototype={
gaj:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.am))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hs.prototype={
en:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a5("")
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
A.p5(c3,u)
A.p7(c3,u)
A.p6(c3,u)
A.p9(c3,u)
A.pa(c3,u)
A.p8(c3,u)
A.pb(c3,u)
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
m=A.p4(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cO(n,35633)
b8.f=b8.cO(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.H(H.lt(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.y(P.B("Failed to link shader: "+H.i(l)))}b8.hu()
b8.hw()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.W(0,"invViewMat"),"$iaA")
if(t)b8.dy=H.A(b8.y.W(0,"objMat"),"$iaA")
if(r)b8.fr=H.A(b8.y.W(0,"viewObjMat"),"$iaA")
b8.fy=H.A(b8.y.W(0,"projViewObjMat"),"$iaA")
if(c3.ry)b8.k1=H.A(b8.y.W(0,"txt2DMat"),"$id_")
if(c3.x1)b8.k2=H.A(b8.y.W(0,"txtCubeMat"),"$iaA")
if(c3.x2)b8.k3=H.A(b8.y.W(0,"colorMat"),"$iaA")
b8.seK(H.d([],[A.aA]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.W(0,"bendMatCount"),"$iaG")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.y(P.B(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaA"))}}if(c3.a.a)b8.r2=H.A(b8.y.W(0,"emissionClr"),"$iZ")
if(c3.b.a)b8.x1=H.A(b8.y.W(0,"ambientClr"),"$iZ")
if(c3.c.a)b8.y2=H.A(b8.y.W(0,"diffuseClr"),"$iZ")
if(c3.d.a)b8.dm=H.A(b8.y.W(0,"invDiffuseClr"),"$iZ")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dq=H.A(b8.y.W(0,"shininess"),"$iah")
if(t)b8.dn=H.A(b8.y.W(0,"specularClr"),"$iZ")}if(c3.cy){b8.dr=H.A(b8.y.W(0,"envSampler"),"$ic7")
if(c3.r.a)b8.ds=H.A(b8.y.W(0,"reflectClr"),"$iZ")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dt=H.A(b8.y.W(0,"refraction"),"$iah")
if(t)b8.du=H.A(b8.y.W(0,"refractClr"),"$iZ")}}if(c3.y.a)b8.dv=H.A(b8.y.W(0,"alpha"),"$iah")
t=P.l
s=[t,A.aG]
b8.seV(new H.a0(s))
b8.sex(new H.a0([t,[P.b,A.c4]]))
b8.shc(new H.a0(s))
b8.shd(new H.a0([t,[P.b,A.c5]]))
b8.shz(new H.a0(s))
b8.sey(new H.a0([t,[P.b,A.c8]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c4],i=0;i<t.length;t.length===s||(0,H.t)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ae()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.y(P.B(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.y(P.B(c0+d+c1))
H.A(c,"$iZ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.y(P.B(c0+d+c1))
H.A(b,"$iZ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.y(P.B(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.y(P.B(c0+d+c1))
H.A(c,"$iZ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.y(P.B(c0+o+c1))
H.A(b,"$ic6")
a2=b}else a2=b9
C.a.h(e,new A.c4(a1,a0,a,j,c,a2))}b8.c2.k(0,g,e)
q=b8.c1
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}for(t=c3.Q,s=t.length,r=[A.c5],i=0;i<t.length;t.length===s||(0,H.t)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.y(P.B(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.y(P.B(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.y(P.B(c0+o+c1))
H.A(b,"$iZ")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.A(a3,"$id_")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.A(a3,"$ic7")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.A(a3,"$ic7")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.A(a5,"$icZ")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.A(a3,"$iah")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.A(a5,"$iah")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.y(P.B(c0+o+c1))
H.A(a8,"$iah")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c5(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c4.k(0,g,e)
q=b8.c3
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}for(t=c3.ch,s=t.length,r=[A.c8],i=0;i<t.length;t.length===s||(0,H.t)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.y(P.B(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.y(P.B(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.y(P.B(c0+o+c1))
H.A(b,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.y(P.B(c0+o+c1))
H.A(a3,"$iZ")
if(typeof g!=="number")return g.ae()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.A(a5,"$iZ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.y(P.B(c0+o+c1))
H.A(a8,"$iZ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.y(P.B(c0+o+c1))
H.A(b2,"$iah")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.y(P.B(c0+o+c1))
H.A(b3,"$iah")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.j(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.A(a5,"$icZ")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.y(P.B(c0+d+c1))
H.A(a8,"$iah")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.y(P.B(c0+d+c1))
H.A(a8,"$iah")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.y(P.B(c0+d+c1))
H.A(b2,"$iah")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.y(P.B(c0+d+c1))
H.A(a5,"$ic6")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.y(P.B(c0+o+c1))
H.A(a5,"$ic6")
a6=a5}else a6=b9
C.a.h(e,new A.c8(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c6.k(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}}},
hs:function(a,b){},
seK:function(a){this.r1=H.m(a,"$ib",[A.aA],"$ab")},
seV:function(a){this.c1=H.m(a,"$ix",[P.l,A.aG],"$ax")},
sex:function(a){this.c2=H.m(a,"$ix",[P.l,[P.b,A.c4]],"$ax")},
shc:function(a){this.c3=H.m(a,"$ix",[P.l,A.aG],"$ax")},
shd:function(a){this.c4=H.m(a,"$ix",[P.l,[P.b,A.c5]],"$ax")},
shz:function(a){this.c5=H.m(a,"$ix",[P.l,A.aG],"$ax")},
sey:function(a){this.c6=H.m(a,"$ix",[P.l,[P.b,A.c8]],"$ax")}}
A.aL.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aP.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aT.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hv.prototype={
i:function(a){return this.b0}}
A.c4.prototype={}
A.c5.prototype={}
A.c8.prototype={}
A.cQ.prototype={
eq:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cO:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.lt(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.B("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hu:function(){var u,t,s,r=this,q=H.d([],[A.ds]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.ds(p,t.name,s))}r.x=new A.fp(q)},
hw:function(){var u,t,s,r=this,q=H.d([],[A.ee]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.i9(t.type,t.size,t.name,s))}r.y=new A.iY(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.aG(u,b,c)
else return A.lf(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.c6(u,b,c)
else return A.lf(u,this.r,b,a,c)},
eT:function(a,b,c){var u=this.a
if(a===1)return new A.c7(u,b,c)
else return A.lf(u,this.r,b,a,c)},
bg:function(a,b){return new P.eu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
i9:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iU(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.cZ(u.a,c,d)
case 35667:return new A.iV(u.a,c,d)
case 35668:return new A.iW(u.a,c,d)
case 35669:return new A.iX(u.a,c,d)
case 35674:return new A.iZ(u.a,c,d)
case 35675:return new A.d_(u.a,c,d)
case 35676:return new A.aA(u.a,c,d)
case 35678:return u.eS(b,c,d)
case 35680:return u.eT(b,c,d)
case 35670:throw H.e(u.bg("BOOL",c))
case 35671:throw H.e(u.bg("BOOL_VEC2",c))
case 35672:throw H.e(u.bg("BOOL_VEC3",c))
case 35673:throw H.e(u.bg("BOOL_VEC4",c))
default:throw H.e(P.B("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ee.prototype={}
A.iY.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aG.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shM:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cZ.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d_.prototype={
ak:function(a){var u=new Float32Array(H.cd(H.m(a,"$ib",[P.z],"$ab")))
C.c.e6(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aA.prototype={
ak:function(a){var u=new Float32Array(H.cd(H.m(a,"$ib",[P.z],"$ab")))
C.c.e7(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.c6.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c7.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kl.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cd(s.b,b).cd(s.d.cd(s.c,b),c)
a.sa0(0,new V.a4(r.a,r.b,r.c))
a.se1(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdf(new V.bH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kx.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kz.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sa0(0,new V.a4(s,u,q))
u=new V.J(s,u,q)
a.se1(u.t(0,Math.sqrt(u.D(u))))
a.sdf(new V.bH(1-c,2+c,-1,-1))},
$S:7}
F.kA.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kB.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kU.prototype={
$2:function(a,b){return 0},
$S:20}
F.kV.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa0(0,new V.a4(s.a,s.b,s.c))},
$S:7}
F.kX.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kJ.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.ky.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lH(n.$1(o),m)
m=J.lH(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.J(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.mn
if(n==null){n=new V.J(1,0,0)
$.mn=n
t=n}else t=n
n=u.ay(!J.R(u,t)?V.mq():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.ay(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa0(0,l.w(0,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.K(u.a.a.d.b,u)
u.a.a.Z()}u.bN()
u.bO()
u.hi()},
bR:function(a){this.a=a
C.a.h(a.d.b,this)},
bS:function(a){this.b=a
C.a.h(a.d.c,this)},
ht:function(a){this.c=a
C.a.h(a.d.d,this)},
bN:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bO:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
hi:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d1()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dG())return
return s.t(0,Math.sqrt(s.D(s)))},
eN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.ay(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
bY:function(){var u,t=this
if(t.d!=null)return!0
u=t.eJ()
if(u==null){u=t.eN()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eI:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d1()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dG())return
return s.t(0,Math.sqrt(s.D(s)))},
eM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.O(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.O(0,g).B(0,p).w(0,g).O(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.ay(q)
l=l.t(0,Math.sqrt(l.D(l))).ay(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
bW:function(){var u,t=this
if(t.e!=null)return!0
u=t.eI()
if(u==null){u=t.eM()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gi3:function(a){var u=this
if(J.R(u.a,u.b))return!0
if(J.R(u.b,u.c))return!0
if(J.R(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.b.ac(J.ar(s.a.e),0)+", "+C.b.ac(J.ar(s.b.e),0)+", "+C.b.ac(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fW.prototype={}
F.im.prototype={
b2:function(a,b,c){var u,t=b.a
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
F.bj.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.K(u.a.a.c.b,u)
u.a.a.Z()}u.bN()
u.bO()},
bR:function(a){this.a=a
C.a.h(a.c.b,this)},
bS:function(a){this.b=a
C.a.h(a.c.c,this)},
bN:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bO:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb_())return a+"disposed"
return a+C.b.ac(J.ar(this.a.e),0)+", "+C.b.ac(J.ar(this.b.e),0)},
M:function(){return this.E("")}}
F.hf.prototype={}
F.iS.prototype={
b2:function(a,b,c){var u,t=b.a
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
F.bF.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ac(J.ar(u.e),0)},
M:function(){return this.E("")}}
F.e3.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.a1():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){r=g[s]
h.a.h(0,r.i6())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bF()
if(n.a==null)H.y(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cx(l,k,i)}g=h.e
if(g!=null)g.ah(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.ah(0)
return u},
iE:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.au];u.length!==0;){t=C.a.giq(u)
C.a.dW(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.dW(u,r)}}if(s.length>1)b.b3(s)}}p.a.u()
p.c.cj()
p.d.cj()
p.b.iX()
p.c.ck(new F.iS())
p.d.ck(new F.im())
o=p.e
if(o!=null)o.ah(0)},
bT:function(){this.iE(new F.jk(),new F.hT())},
c7:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c7()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdK(new V.J(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.J(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.R(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ah(0)},
i1:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bp()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bo().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.bP().a)!==0)++s
if((t&$.dl().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.co().a)!==0)++s
if((t&$.bm().a)!==0)++s
r=a3.gcs(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.du])
for(n=0,m=0;m<s;++m){l=a3.hV(m)
k=l.gcs(l)
C.a.k(o,m,new Z.du(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].iB(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cd(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dv(new Z.el(a0,f),o,a3)
e.sf3(H.d([],[Z.bz]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.li(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.li(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.li(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bz(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.m(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.J(null)},
$ipZ:1}
F.ie.prototype={
hQ:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.au],"$ab")
u=H.d([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cx(s,p,o))}}return u},
hR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.au],"$ab")
u=H.d([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.c(c,r)
l=c[r];++r
if(r>=m)return H.c(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.c(c,j)
i=c[j]
if(s<0||s>=m)return H.c(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cx(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cx(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
ck:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
cj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gi3(s)
if(t)s.aZ()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bY())s=!1
return s},
bX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bW())s=!1
return s},
c7:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
seZ:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.ig.prototype={
gn:function(a){return this.b.length},
ck:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
cj:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.R(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.m(s,"\n")},
M:function(){return this.E("")},
sf4:function(a){this.b=H.m(a,"$ib",[F.bj],"$ab")}}
F.ih.prototype={
gn:function(a){return this.b.length},
iX:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
sbK:function(a){this.b=H.m(a,"$ib",[F.bF],"$ab")}}
F.au.prototype={
c0:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ek(u.cx,r,o,t,s,q,p,a,n)},
i6:function(){return this.c0(null)},
sa0:function(a,b){var u
if(!J.R(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdK:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.R(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
se1:function(a){var u
if(!J.R(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdf:function(a){var u
if(!J.R(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
iB:function(a){var u,t,s=this
if(a.q(0,$.bp())){u=s.f
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bo())){u=s.r
t=[P.z]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bn())){u=s.x
t=[P.z]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bO())){u=s.y
t=[P.z]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bP())){u=s.z
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dl())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dm())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.co()))return H.d([s.ch],[P.z])
else if(a.q(0,$.bm())){u=s.cx
t=[P.z]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.z])},
bY:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d1()
t.d.F(0,new F.jp(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ah(0)}return!0},
bW:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d1()
t.d.F(0,new F.jo(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ah(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ac(J.ar(s.e),0))
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
C.a.h(q,V.W(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.jp.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.w(0,u)}},
$S:6}
F.jo.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.w(0,u)}},
$S:6}
F.jf.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
hS:function(a,b,c,d,e,f){var u=F.ek(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bY()
return!0},
bX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bW()
return!0},
i2:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.R(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.u()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
M:function(){return this.E("")},
shN:function(a){this.c=H.m(a,"$ib",[F.au],"$ab")}}
F.jg.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
F:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.jh(u,b))
C.a.F(u.d,new F.ji(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sf_:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sf0:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sf1:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.jh.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.R(a.a,this.a))this.b.$1(a)},
$S:6}
F.ji.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.R(a.a,u)&&!J.R(a.b,u))this.b.$1(a)},
$S:6}
F.jj.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sf5:function(a){this.b=H.m(a,"$ib",[F.bj],"$ab")},
sf6:function(a){this.c=H.m(a,"$ib",[F.bj],"$ab")}}
F.jl.prototype={}
F.jk.prototype={
b2:function(a,b,c){return J.R(b.f,c.f)}}
F.jm.prototype={}
F.hT.prototype={
b3:function(a){var u,t,s,r
H.m(a,"$ib",[F.au],"$ab")
u=V.d1()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.t)(a),++s)a[s].sdK(u)
return}}
F.jn.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sbK:function(a){this.b=H.m(a,"$ib",[F.bF],"$ab")}}
O.dP.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.a1():u},
a9:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.J(a)},
eB:function(){return this.a9(null)},
d0:function(a){H.h(a,"$iD")
this.a=null
this.a9(a)},
hn:function(){return this.d0(null)},
fo:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bX([u])
u.b=!0
this.a9(u)},
fq:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bY([u])
u.b=!0
this.a9(u)},
cL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=P.l,g=new H.a0([h,h])
for(u=i.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s].f!=null
q=r?1:0
p=g.j(0,r?1:0)
g.k(0,q,p==null?1:p)}o=H.d([],[A.aL])
g.F(0,new O.hz(i,o))
C.a.bu(o,new O.hA())
n=new H.a0([h,h])
for(u=i.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){m=u[s]
r=m.gaY()
q=n.j(0,m.gaY())
n.k(0,r,q==null?1:q)}l=H.d([],[A.aP])
n.F(0,new O.hB(i,l))
C.a.bu(l,new O.hC())
k=new H.a0([h,h])
for(h=i.dx.r,u=h.length,s=0;s<h.length;h.length===u||(0,H.t)(h),++s){m=h[s]
t=m.gaY()
r=k.j(0,m.gaY())
k.k(0,t,r==null?1:r)}j=H.d([],[A.aT])
k.F(0,new O.hD(i,j))
C.a.bu(j,new O.hE())
h=C.d.a7(i.e.a.length+3,4)
i.dy.e
return A.nT(!1,!1,!1,!1,h*4,i.f.c,i.r.c,i.x.c,i.y.c,i.z.c,i.Q.c,i.cx.c,i.cy.c,i.db.c,o,l,j)},
eH:function(a,b){H.m(a,"$ib",[T.cW],"$ab")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
aE:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aw(u,u.length,[H.q(u,0)]);u.v();){t=u.d
t.toString
s=$.je
t.a=s==null?$.je=new V.J(0,0,1):s
s=$.jd
t.d=s==null?$.jd=new V.J(0,1,0):s
s=$.jc
t.e=s==null?$.jc=new V.J(-1,0,0):s
s=t.b
if(s!=null){r=s.b8(0,b,t)
if(r!=null){s=r.bq(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(q*q+p*p+o*o))
o=r.bq(t.d)
p=o.a
q=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+q*q+s*s))
s=r.bq(t.e)
q=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(q*q+p*p+o*o))}}}},
iZ:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cL()
u=b6.fr.j(0,b5.b0)
if(u==null){u=A.nS(b5,b6.a)
t=u.b
if(t.length===0)H.y(P.B("May not cache a shader with no name."))
if(b6.fr.bi(0,t))H.y(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dl
b5=b7.e
if(!(b5 instanceof Z.dv))b5=b7.e=null
if(b5==null||!b5.d.q(0,r)){b5=s.k3
if(b5)b7.d.ar()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bX()
p.a.bX()
p=p.e
if(p!=null)p.ah(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.i2()
o=o.e
if(o!=null)o.ah(0)}m=b7.d.i1(new Z.jr(b6.a),r)
m.aP($.bp()).e=b4.a.Q.c
if(b5)m.aP($.bo()).e=b4.a.cx.c
if(q)m.aP($.bn()).e=b4.a.ch.c
if(s.r1)m.aP($.bO()).e=b4.a.cy.c
if(p)m.aP($.bP()).e=b4.a.db.c
if(s.rx)m.aP($.bm()).e=b4.a.dx.c
b7.e=m}b5=T.cW
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.ik()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga1(o)
q=q.dy
q.toString
q.ak(o.ad(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga1(o)
n=b6.dx
n=b6.cx=o.B(0,n.ga1(n))
o=n}q=q.fr
q.toString
q.ak(o.ad(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giV()
n=b6.dx
n=b6.ch=o.B(0,n.ga1(n))
o=n}q=q.fy
q.toString
q.ak(o.ad(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ak(C.k.ad(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ak(C.k.ad(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ak(C.k.ad(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.br(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.h(n,"$iao")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.cd(H.m(n.ad(0,!0),"$ib",q,"$ab")))
C.c.e7(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dm
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dq
C.c.a4(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dn
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.l
g=new H.a0([o,o])
for(o=b4.dx.e,n=o.length,f=[b5],e=0;e<o.length;o.length===n||(0,H.t)(o),++e){d=o[e]
c=d.f!=null?1:0
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dn(b4.a.c2.j(0,c),b)
a0=h.bq(d.a)
a1=a0.a
a2=a0.b
a3=a0.c
a3=a0.t(0,Math.sqrt(a1*a1+a2*a2+a3*a3))
a2=a.e
a1=a3.a
a0=a3.b
a3=a3.c
C.c.U(a2.a,a2.d,a1,a0,a3)
a3=d.c
a0=a.f
C.c.U(a0.a,a0.d,a3.a,a3.b,a3.c)
if(d.f!=null){a0=d.a
a1=a.d
a1.toString
a2=a0.a
a3=a0.b
a0=a0.c
C.c.U(a1.a,a1.d,a2,a3,a0)
a0=d.d
a3=a.b
a3.toString
a2=a0.a
a1=a0.b
a0=a0.c
C.c.U(a3.a,a3.d,a2,a1,a0)
a0=d.e
a1=a.c
a1.toString
a2=a0.a
a3=a0.b
a0=a0.c
C.c.U(a1.a,a1.d,a2,a3,a0)
a0=d.f
H.m(l,"$ib",f,"$ab")
if(a0!=null)if(!C.a.R(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.f
a1=a0!=null
if(a1&&a0.d){a2=a.r
a2.toString
if(!a1||!a0.d)a2.a.uniform1i(a2.d,0)
else{a0=a0.a
a2.a.uniform1i(a2.d,a0)}}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.t)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c1.j(0,n)
C.c.br(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.l
a4=new H.a0([o,o])
for(o=b4.dx.f,n=o.length,f=[b5],a0=[P.z],e=0;e<o.length;o.length===n||(0,H.t)(o),++e){d=o[e]
c=d.gaY()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dn(b4.a.c4.j(0,c),b)
a5=h.B(0,d.ga1(d))
a1=d.ga1(d)
a2=$.cM
a1=a1.cn(a2==null?$.cM=new V.a4(0,0,0):a2)
a2=a.b
C.c.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=$.cM
a1=a5.cn(a1==null?$.cM=new V.a4(0,0,0):a1)
a2=a.c
C.c.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=d.gaO(d)
a2=a.e
C.c.U(a2.a,a2.d,a1.a,a1.b,a1.c)
d.gaD()
a1=a5.dF(0)
a2=a1.a
a3=a1.b
a6=a1.c
a7=a1.e
a8=a1.f
a9=a1.r
b0=a1.y
b1=a1.z
a1=a1.Q
b2=a.d
b2.toString
i=new Float32Array(H.cd(H.m(new V.dR(a2,a3,a6,a7,a8,a9,b0,b1,a1).ad(0,!0),"$ib",a0,"$ab")))
C.c.e6(b2.a,b2.d,!1,i)
d.gaD()
a1=d.gaD()
H.m(l,"$ib",f,"$ab")
if(!C.a.R(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gaD()
a2=a1.gb1(a1)
if(a2){a2=a.f
a2.toString
a3=a1.gb1(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.giv(a1)
a2.a.uniform1i(a2.d,a1)}}d.gaS()
a1=d.gef()
a2=a.x
a2.toString
a3=a1.gig(a1)
a6=a1.gih(a1)
a7=a1.gii()
a1=a1.gie()
C.c.e5(a2.a,a2.d,a3,a6,a7,a1)
a1=d.gaS()
if(!C.a.R(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gaS()
a2=a1.gb1(a1)
if(a2){a2=a.r
a2.toString
a3=a1.gb1(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.giv(a1)
a2.a.uniform1i(a2.d,a1)}}if(d.gil()){a1=d.ghX()
a2=a.y
C.c.a4(a2.a,a2.d,a1)
a1=d.ghY()
a2=a.z
C.c.a4(a2.a,a2.d,a1)
a1=d.ghZ()
a2=a.Q
C.c.a4(a2.a,a2.d,a1)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.t)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=b4.a.c3.j(0,n)
C.c.br(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga1(o)
o=P.l
b3=new H.a0([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.t)(o),++e){d=o[e]
c=d.gaY()
b=b3.j(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.dn(b4.a.c6.j(0,c),b)
f=d.giU(d)
a0=a.b
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gjf(d).jx()
a0=a.c
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=h.cn(d.giU(d))
a0=a.d
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gaO(d)
a0=a.e
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
d.gaD()
f=d.gjA()
a0=a.f
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gcl(d)
a0=a.r
C.c.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gjy()
a0=a.x
C.c.a4(a0.a,a0.d,f)
f=d.gjz()
a0=a.y
C.c.a4(a0.a,a0.d,f)
d.gaD()
f=d.gaD()
H.m(l,"$ib",b5,"$ab")
if(!C.a.R(l,f)){f.a=l.length
C.a.h(l,f)}f=d.gaD()
a0=f.gb1(f)
if(a0){a0=a.dx
a0.toString
a1=f.d
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.a
a0.a.uniform1i(a0.d,f)}}d.gaS()
f=d.gef()
a0=a.z
a0.toString
a1=f.gig(f)
a2=f.gih(f)
a3=f.gii()
f=f.gie()
C.c.e5(a0.a,a0.d,a1,a2,a3,f)
f=d.gaS()
if(!C.a.R(l,f)){f.a=l.length
C.a.h(l,f)}f=d.gaS()
a0=f.gb1(f)
if(a0){a0=a.dy
a0.toString
a1=f.d
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.a
a0.a.uniform1i(a0.d,f)}}if(d.gjg()){f=d.gje()
a0=a.Q
C.c.a4(a0.a,a0.d,f)
f=d.gjd()
a0=a.ch
C.c.a4(a0.a,a0.d,f)}if(d.gil()){f=d.ghX()
a0=a.cx
C.c.a4(a0.a,a0.d,f)
f=d.ghY()
a0=a.cy
C.c.a4(a0.a,a0.d,f)
f=d.ghZ()
a0=a.db
C.c.a4(a0.a,a0.d,f)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.t)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c5.j(0,o)
C.c.br(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga1(q).dF(0)}b5=b5.id
b5.toString
b5.ak(q.ad(0,!0))}if(s.cy){b4.eH(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hs(b5.dr,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.ds
C.c.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dt
C.c.a4(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.du
C.c.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dv
C.c.a4(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){b5=l[j]
if(!b5.c&&b5.d){b5.c=!0
p.activeTexture(33984+b5.a)
p.bindTexture(3553,b5.b)}}b5=b7.e
b5.bU(b6)
b5.aQ(b6)
b5.ja(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.ic()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cL().b0},
seL:function(a){this.e=H.m(a,"$ia2",[V.ao],"$aa2")}}
O.hz.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.w()
return C.a.h(this.b,new A.aL(a,C.d.a7(b+3,4)*4))},
$S:12}
O.hA.prototype={
$2:function(a,b){H.h(a,"$iaL")
H.h(b,"$iaL")
return J.l_(a.a,b.a)},
$S:50}
O.hB.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.w()
return C.a.h(this.b,new A.aP(a,C.d.a7(b+3,4)*4))},
$S:12}
O.hC.prototype={
$2:function(a,b){H.h(a,"$iaP")
H.h(b,"$iaP")
return J.l_(a.a,b.a)},
$S:51}
O.hD.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.w()
return C.a.h(this.b,new A.aT(a,C.d.a7(b+3,4)*4))},
$S:12}
O.hE.prototype={
$2:function(a,b){H.h(a,"$iaT")
H.h(b,"$iaT")
return J.l_(a.a,b.a)},
$S:52}
O.ht.prototype={
aw:function(){var u,t=this
t.cu()
u=t.f
if(!(Math.abs(u-1)<$.Q().a)){t.f=1
u=new D.U(t.b,u,1,[P.z])
u.b=!0
t.a.a9(u)}}}
O.dQ.prototype={
aw:function(){},
d3:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aw()
u=s.a
u.a=null
u.a9(null)}}}
O.hu.prototype={}
O.b6.prototype={
d2:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.U(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.a9(t)}},
aw:function(){this.cu()
this.d2(new V.a7(1,1,1))},
saO:function(a,b){this.d3(new A.am(!0,!1,!1))
this.d2(b)}}
O.hw.prototype={}
O.hx.prototype={
aw:function(){var u,t=this
t.cv()
u=t.ch
if(!(Math.abs(u-1)<$.Q().a)){t.ch=1
u=new D.U(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.a9(u)}}}
O.hy.prototype={
d4:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.U(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.a9(t)}},
aw:function(){this.cv()
this.d4(100)}}
O.c3.prototype={}
T.cW.prototype={}
T.ea.prototype={}
T.iE.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.a1():u}}
T.iF.prototype={
iC:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iE()
t.a=0
t.b=q
t.d=t.c=!1
r=W.n
W.a9(u,"load",H.o(new T.iG(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ho:function(a,b,c){var u,t,s,r
b=V.lB(b)
u=V.lB(a.width)
t=V.lB(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l2()
s.width=u
s.height=t
r=H.h(C.j.ec(s,"2d"),"$ics")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.po(r.getImageData(0,0,s.width,s.height))}}}
T.iG.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ho(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.j4(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ij()}++s.e},
$S:11}
V.bf.prototype={
aA:function(a,b){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dO.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].aA(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.m(a,"$ib",[V.ay],"$ab")},
$iay:1}
V.as.prototype={
aA:function(a,b){return!this.ek(0,b)},
i:function(a){return"!["+this.ct(0)+"]"}}
V.i4.prototype={
aA:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c0(this.a),t=H.c0(this.b)
return u+".."+t},
$iay:1}
V.id.prototype={
ep:function(a){var u,t
if(a.a.length<=0)throw H.e(P.B("May not create a SetMatcher with zero characters."))
u=new H.a0([P.l,P.O])
for(t=new H.cE(a,a.gn(a),[H.aq(a,"w",0)]);t.v();)u.k(0,t.d,!0)
this.shr(u)},
aA:function(a,b){return this.a.bi(0,b)},
i:function(a){var u=this.a
return P.cU(u.ga3(u),0,null)},
shr:function(a){this.a=H.m(a,"$ix",[P.l,P.O],"$ax")},
$iay:1}
V.cR.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cY(this.a.l(0,b))
r.sa6(H.d([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
ip:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
i:function(a){return this.b},
shL:function(a){this.c=H.m(a,"$ib",[V.cY],"$ab")}}
V.ec.prototype={
i:function(a){var u=H.lD(this.b,"\n","\\n"),t=H.lD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cX.prototype={
aC:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.t)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shj:function(a){var u=P.f
this.c=H.m(a,"$ix",[u,u],"$ax")}}
V.iJ.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cR(this,b)
u.shL(H.d([],[V.cY]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cX(a)
u=P.f
t.shj(new H.a0([u,u]))
this.b.k(0,a,t)}return t},
e4:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ec]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.ip(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cU(i,0,m)
throw H.e(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cU(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ec(n==null?o.b:n,p,s)}++s}}},
shB:function(a){this.a=H.m(a,"$ix",[P.f,V.cR],"$ax")},
shE:function(a){this.b=H.m(a,"$ix",[P.f,V.cX],"$ax")}}
V.cY.prototype={
i:function(a){return this.b.b+": "+this.ct(0)}}
X.dx.prototype={$icH:1}
X.h2.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.a1():u}}
X.dY.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.a1():u},
aI:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.J(a)},
eE:function(){return this.aI(null)},
sb4:function(a){var u,t,s=this
if(!J.R(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gcB())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcB())
u=new D.U("mover",t,s.b,[U.aj])
u.b=!0
s.aI(u)}},
$icH:1,
$idx:1}
X.e8.prototype={}
V.bt.prototype={
bb:function(a){this.b=new P.h6(C.Q)
this.c=null
this.sbE(H.d([],[[P.b,W.aC]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aC]))
u=a.split("\n")
for(l=u.length,t=[W.aC],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.L(q)
o=m.b.eR(q,0,q.length)
n=o==null?q:o
C.O.ee(p,H.lD(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gas(m.d),p)}},
dR:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbE(H.d([],[[P.b,W.aC]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bj():t).e4(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)q.bo(t[r])},
sbE:function(a){this.d=H.m(a,"$ib",[[P.b,W.aC]],"$ab")}}
V.kT.prototype={
$1:function(a){var u
H.h(a,"$ib9")
u=C.e.e3(this.a.git(),2)
if(u!=="0.00")P.lC(u+" fps")},
$S:54}
V.fJ.prototype={
bo:function(a){var u=this
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
bj:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iK()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.u(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.u(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.u(new H.r("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.u(new H.r(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.u(new H.r(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.u(new H.r('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.u(new H.r('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.u(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.u(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bf())
t=a1.l(0,r).m(0,h)
u=V.u(new H.r("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.u(new H.r("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.u(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.u(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bf())
t=a1.l(0,r).m(0,e)
u=V.u(new H.r("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.u(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.as()
s=[V.ay]
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.u(new H.r("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.u(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.as()
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.u(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.u(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.u(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.u(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.N("Num")
t=a1.l(0,n)
t.d=t.a.N("Num")
t=a1.l(0,m)
t.d=t.a.N("Symbol")
t=a1.l(0,j)
t.d=t.a.N("String")
t=a1.l(0,g)
t.d=t.a.N("String")
t=a1.l(0,c)
t.d=t.a.N(d)
t=a1.l(0,a0)
t.d=t.a.N(a0)
t=a1.l(0,q)
t=t.d=t.a.N(q)
u=[P.f]
t.aC(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aC(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aC(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h3.prototype={
bo:function(a){var u=this
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
bj:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iK()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.u(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.u(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.u(new H.r("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.u(new H.r(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.u(new H.r(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.u(new H.r("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.u(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bf())
t=e.l(0,j).m(0,i)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.as()
s=[V.ay]
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.u(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.as()
u.sa6(H.d([],s))
C.a.h(t.a,u)
t=V.u(new H.r("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.u(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.u(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.N("Num")
u=e.l(0,n)
u.d=u.a.N("Num")
u=e.l(0,m)
u.d=u.a.N("Symbol")
u=e.l(0,i)
u.d=u.a.N(j)
u=e.l(0,g)
u.d=u.a.N(h)
u=e.l(0,f)
u.d=u.a.N(f)
u=e.l(0,q)
u=u.d=u.a.N(q)
t=[P.f]
u.aC(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aC(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aC(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h4.prototype={
bo:function(a){var u=this,t="#111"
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
bj:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iK()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.u(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.u(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.u(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.u(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.u(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.u(new H.r('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.u(new H.r('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.u(new H.r("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.u(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bf())
C.a.h(l.l(0,s).m(0,m).a,new V.bf())
u=l.l(0,m).m(0,m)
t=new V.as()
t.sa6(H.d([],[V.ay]))
C.a.h(u.a,t)
u=V.u(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.N("Symbol")
u=l.l(0,n)
u.d=u.a.N("String")
u=l.l(0,r)
t=u.a.N(r)
u.d=t
t.aC(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.N(q)
t=l.l(0,m)
t.d=t.a.N(m)
return l}}
V.hZ.prototype={
dR:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbE(H.d([],[[P.b,W.aC]]))
this.L(C.a.m(b,"\n"),"#111")},
bo:function(a){},
bj:function(){return}}
V.i2.prototype={
da:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mh().gci().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.d8(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lJ(m.c).h(0,q)
o=W.nH("radio")
o.checked=s
o.name=u
u=W.n
W.a9(o,"change",H.o(new V.i3(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lJ(m.c).h(0,r.createElement("br"))},
aX:function(a,b,c){return this.da(a,b,c,!1)},
d8:function(a){var u,t,s=P.mh(),r=P.f,q=P.nO(s.gci(),r,r)
q.k(0,this.a,a)
u=s.dX(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k4([],[]).co(""),"",t)}}
V.i3.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.d8(u.d)}},
$S:11}
V.ii.prototype={
er:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.a9(q,"scroll",H.o(new V.ik(o),{func:1,ret:-1,args:[r]}),!1,r)},
dd:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.hv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e4(C.a.iA(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
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
if(H.pM(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
t.appendChild(l)}else{k=P.f6(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
eb:function(a){var u,t,s,r=new V.fJ("dart")
r.bb("dart")
u=new V.h3("glsl")
u.bb("glsl")
t=new V.h4("html")
t.bb("html")
s=C.a.ir(H.d([r,u,t],[V.bt]),new V.il(a))
if(s!=null)return s
r=new V.hZ("plain")
r.bb("plain")
return r},
dc:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dk(r).a2(r,"+")){C.a.k(b0,s,C.b.a8(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a2(r,"-")){C.a.k(b0,s,C.b.a8(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eb(a8)
q.dR(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f6(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lL()
i.href="#"+H.i(m)
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
if(s>=u.length)return H.c(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.t)(r),++a0)C.a_.hU(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.t)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gT(r);a3.v();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hO:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.h(r.insertCell(-1),"$ib8").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.h(r.insertCell(-1),"$ib8")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iK()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.as()
r=[V.ay]
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.as()
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.u(new H.r("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.as()
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.u(new H.r("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.u(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.u(new H.r("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.as()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.as()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bf())
s=u.l(0,i).m(0,i)
t=new V.as()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.u(new H.r("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.N(p)
s=u.l(0,n)
s.d=s.a.N(o)
s=u.l(0,"CodeEnd")
s.d=s.a.N(m)
s=u.l(0,j)
s.d=s.a.N("Link")
s=u.l(0,i)
s.d=s.a.N(i)
this.b=u}}
V.ik.prototype={
$1:function(a){P.md(C.o,new V.ij(this.a))},
$S:11}
V.ij.prototype={
$0:function(){var u=C.e.ai(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.il.prototype={
$1:function(a){return H.h(a,"$ibt").a===this.a},
$S:55}
M.kK.prototype={
$0:function(){this.a.saf(0,F.lx(1,null,null,1))},
$S:0}
M.kL.prototype={
$0:function(){this.a.saf(0,F.mM(!0,40,1))},
$S:0}
M.kM.prototype={
$0:function(){this.a.saf(0,F.mM(!1,40,0))},
$S:0}
M.kN.prototype={
$0:function(){this.a.saf(0,F.pL(6,6))},
$S:0}
M.kO.prototype={
$0:function(){this.a.saf(0,F.n1())},
$S:0}
M.kP.prototype={
$0:function(){this.a.saf(0,F.pD())},
$S:0}
M.kQ.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dc("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dc("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eh=u.i
u=J.dI.prototype
u.ej=u.i
u=P.k.prototype
u.ei=u.bs
u=W.S.prototype
u.bv=u.aa
u=W.eP.prototype
u.el=u.aq
u=O.dQ.prototype
u.cu=u.aw
u=O.b6.prototype
u.cv=u.aw
u=V.dO.prototype
u.ek=u.aA
u.ct=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pi","or",13)
u(P,"pj","os",13)
u(P,"pk","ot",13)
t(P,"mL","pg",3)
s(W,"pw",4,null,["$4"],["ov"],28,0)
s(W,"px",4,null,["$4"],["ow"],28,0)
var m
r(m=E.an.prototype,"gdP",0,0,null,["$1","$0"],["dQ","iM"],1,0)
r(m,"gdN",0,0,null,["$1","$0"],["dO","iL"],1,0)
r(m,"gdL",0,0,null,["$1","$0"],["dM","iI"],1,0)
q(m,"giG","iH",9)
q(m,"giJ","iK",9)
r(m=E.eb.prototype,"gcw",0,0,null,["$1","$0"],["cA","cz"],1,0)
p(m,"gj0","dY",3)
o(m=X.ei.prototype,"gfH","fI",15)
o(m,"gfs","ft",15)
o(m,"gfB","fC",4)
o(m,"gfL","fM",31)
o(m,"gfJ","fK",31)
o(m,"gfP","fQ",4)
o(m,"gfT","fU",4)
o(m,"gfF","fG",4)
o(m,"gfR","fS",4)
o(m,"gfD","fE",4)
o(m,"gfV","fW",36)
o(m,"gfX","fY",15)
o(m,"gh9","ha",14)
o(m,"gh5","h6",14)
o(m,"gh7","h8",14)
r(D.bv.prototype,"gbJ",0,0,null,["$1","$0"],["ao","fu"],1,0)
r(m=D.dK.prototype,"gcW",0,0,null,["$1","$0"],["cX","fN"],1,0)
o(m,"gh_","h0",38)
q(m,"gfl","fm",26)
q(m,"gh3","h4",26)
n(V.a6.prototype,"gn","cc",24)
n(V.J.prototype,"gn","cc",24)
r(m=U.cA.prototype,"gbc",0,0,null,["$1","$0"],["X","al"],1,0)
q(m,"gfj","fk",21)
q(m,"gh1","h2",21)
r(m=U.ej.prototype,"gbc",0,0,null,["$1","$0"],["X","al"],1,0)
o(m,"gfd","fe",2)
o(m,"gff","fg",2)
o(m,"gfh","fi",2)
o(m,"gf8","f9",2)
o(m,"gfa","fb",2)
o(m,"ghJ","hK",2)
o(m,"ghH","hI",2)
o(m,"ghF","hG",2)
r(m=M.dC.prototype,"gam",0,0,null,["$1","$0"],["au","ew"],1,0)
q(m,"gfv","fw",9)
q(m,"gfz","fA",9)
r(m=O.dP.prototype,"geA",0,0,null,["$1","$0"],["a9","eB"],1,0)
r(m,"ghm",0,0,null,["$1","$0"],["d0","hn"],1,0)
q(m,"gfn","fo",33)
q(m,"gfp","fq",33)
r(X.dY.prototype,"gcB",0,0,null,["$1","$0"],["aI","eE"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.T,null)
s(P.T,[H.l9,J.a,J.aw,P.eC,P.k,H.cE,P.b2,H.bV,H.d0,H.fC,H.iP,P.bx,H.ct,H.eU,P.ae,H.hg,H.hi,H.hb,P.f_,P.bd,P.aI,P.em,P.iu,P.cT,P.iv,P.b9,P.al,P.kk,P.jZ,P.ca,P.eB,P.w,P.kc,P.ho,P.bT,P.h7,P.ki,P.kh,P.O,P.ax,P.aa,P.bw,P.hX,P.e6,P.eu,P.h1,P.by,P.b,P.x,P.M,P.at,P.f,P.a5,P.cb,P.j3,P.k1,W.fF,W.bL,W.G,W.dW,W.eP,W.k7,W.dE,W.az,W.jY,W.f7,P.k3,P.f4,P.jT,P.N,O.a2,O.cF,E.fw,E.an,E.i5,E.eb,Z.el,Z.jr,Z.dv,Z.bz,Z.bK,D.fz,D.bU,D.D,X.dw,X.dJ,X.hd,X.hl,X.bC,X.hL,X.iL,X.ei,D.bv,D.ad,D.dZ,D.e5,V.a7,V.b_,V.fT,V.dR,V.ao,V.ab,V.a4,V.bH,V.e1,V.a6,V.J,U.ej,M.dC,A.ds,A.fp,A.am,A.aL,A.aP,A.aT,A.hv,A.c4,A.c5,A.c8,A.ee,A.iY,F.a8,F.fW,F.bj,F.hf,F.bF,F.e3,F.ie,F.ig,F.ih,F.au,F.jf,F.jg,F.jj,F.jl,F.jm,F.jn,O.c3,O.dQ,O.hw,T.iF,V.bf,V.ay,V.dO,V.i4,V.id,V.cR,V.ec,V.cX,V.iJ,X.dx,X.e8,X.dY,V.bt,V.i2,V.ii])
s(J.a,[J.ha,J.dH,J.dI,J.b3,J.cD,J.bA,H.cI,H.bE,W.j,W.fm,W.bR,W.cs,W.b0,W.b1,W.V,W.eo,W.fK,W.fL,W.eq,W.dB,W.es,W.fN,W.n,W.ev,W.aM,W.h5,W.ex,W.bi,W.dM,W.hF,W.eD,W.eE,W.aN,W.eF,W.eI,W.aO,W.eM,W.eO,W.aR,W.eQ,W.aS,W.eV,W.aE,W.eY,W.iI,W.aV,W.f0,W.iN,W.j8,W.f8,W.fa,W.fc,W.fe,W.fg,P.b5,P.ez,P.b7,P.eK,P.i1,P.eW,P.ba,P.f2,P.fq,P.en,P.dt,P.e_,P.c2,P.e2,P.e9,P.ef,P.eS])
s(J.dI,[J.hY,J.c9,J.bB])
t(J.l8,J.b3)
s(J.cD,[J.dG,J.dF])
t(P.hk,P.eC)
s(P.hk,[H.eg,W.jz,W.ap,P.fY])
t(H.r,H.eg)
s(P.k,[H.fQ,H.hp,H.d2])
s(H.fQ,[H.bZ,H.hh])
s(P.b2,[H.hq,H.js])
t(H.hr,H.bZ)
t(H.fD,H.fC)
s(P.bx,[H.hU,H.hc,H.j1,H.iR,H.fy,H.ib,P.fo,P.dX,P.aK,P.j2,P.j_,P.cS,P.fB,P.fI])
s(H.ct,[H.kY,H.iB,H.kF,H.kG,H.kH,P.jv,P.ju,P.jw,P.jx,P.kb,P.ka,P.jG,P.jK,P.jH,P.jI,P.jJ,P.jN,P.jO,P.jM,P.jL,P.iw,P.ix,P.ku,P.jW,P.jV,P.jX,P.hj,P.hn,P.fO,P.fP,P.j7,P.j4,P.j5,P.j6,P.kd,P.ke,P.kg,P.kf,P.ko,P.kn,P.kp,P.kq,W.fR,W.hH,W.hJ,W.ia,W.it,W.jF,W.hS,W.hR,W.k_,W.k0,W.k9,W.kj,P.k5,P.kw,P.fZ,P.h_,P.fs,E.i6,E.i7,E.i8,E.iH,D.fU,D.fV,F.kl,F.kx,F.kz,F.kA,F.kB,F.kU,F.kV,F.kX,F.kJ,F.ky,F.jp,F.jo,F.jh,F.ji,O.hz,O.hA,O.hB,O.hC,O.hD,O.hE,T.iG,V.kT,V.i3,V.ik,V.ij,V.il,M.kK,M.kL,M.kM,M.kN,M.kO,M.kP,M.kQ])
s(H.iB,[H.ir,H.cq])
t(H.jt,P.fo)
t(P.hm,P.ae)
s(P.hm,[H.a0,W.jy])
t(H.dT,H.bE)
s(H.dT,[H.d7,H.d9])
t(H.d8,H.d7)
t(H.cJ,H.d8)
t(H.da,H.d9)
t(H.dU,H.da)
s(H.dU,[H.hM,H.hN,H.hO,H.hP,H.hQ,H.dV,H.cK])
t(P.jU,P.kk)
t(P.jS,P.jZ)
t(P.f5,P.ho)
t(P.eh,P.f5)
s(P.bT,[P.fu,P.fS])
t(P.bu,P.iv)
s(P.bu,[P.fv,P.h6,P.jb,P.ja])
t(P.j9,P.fS)
s(P.aa,[P.z,P.l])
s(P.aK,[P.c1,P.h8])
t(P.jB,P.cb)
s(W.j,[W.E,W.fX,W.cG,W.aQ,W.db,W.aU,W.aF,W.dd,W.jq,W.d3,P.ft,P.bQ])
s(W.E,[W.S,W.bs,W.d4])
s(W.S,[W.v,P.p])
s(W.v,[W.dq,W.fn,W.cp,W.br,W.bS,W.aC,W.h0,W.cB,W.cC,W.ic,W.b8,W.e7,W.iz,W.iA,W.cV])
s(W.b0,[W.cu,W.fG,W.fH])
t(W.fE,W.b1)
t(W.cv,W.eo)
t(W.er,W.eq)
t(W.dA,W.er)
t(W.et,W.es)
t(W.fM,W.et)
t(W.aD,W.bR)
t(W.ew,W.ev)
t(W.cy,W.ew)
t(W.ey,W.ex)
t(W.bW,W.ey)
t(W.bJ,W.n)
s(W.bJ,[W.b4,W.af,W.aW])
t(W.hG,W.eD)
t(W.hI,W.eE)
t(W.eG,W.eF)
t(W.hK,W.eG)
t(W.eJ,W.eI)
t(W.cL,W.eJ)
t(W.eN,W.eM)
t(W.i_,W.eN)
t(W.i9,W.eO)
t(W.dc,W.db)
t(W.io,W.dc)
t(W.eR,W.eQ)
t(W.ip,W.eR)
t(W.is,W.eV)
t(W.eZ,W.eY)
t(W.iC,W.eZ)
t(W.de,W.dd)
t(W.iD,W.de)
t(W.f1,W.f0)
t(W.iM,W.f1)
t(W.bc,W.af)
t(W.f9,W.f8)
t(W.jA,W.f9)
t(W.ep,W.dB)
t(W.fb,W.fa)
t(W.jP,W.fb)
t(W.fd,W.fc)
t(W.eH,W.fd)
t(W.ff,W.fe)
t(W.k2,W.ff)
t(W.fh,W.fg)
t(W.k6,W.fh)
t(W.jC,W.jy)
t(W.jD,P.iu)
t(W.lj,W.jD)
t(W.jE,P.cT)
t(W.k8,W.eP)
t(P.k4,P.k3)
t(P.ak,P.jT)
t(P.eA,P.ez)
t(P.he,P.eA)
t(P.eL,P.eK)
t(P.hV,P.eL)
t(P.cP,P.p)
t(P.eX,P.eW)
t(P.iy,P.eX)
t(P.f3,P.f2)
t(P.iO,P.f3)
t(P.fr,P.en)
t(P.hW,P.bQ)
t(P.eT,P.eS)
t(P.iq,P.eT)
s(E.fw,[Z.du,A.cQ,T.cW])
s(D.D,[D.bX,D.bY,D.U,X.i0])
s(X.i0,[X.dN,X.bD,X.ed])
s(O.a2,[D.dK,U.cA])
s(D.fz,[U.fA,U.aj])
t(U.dy,U.aj)
t(A.hs,A.cQ)
s(A.ee,[A.aG,A.iV,A.iW,A.iX,A.iT,A.ah,A.iU,A.Z,A.cZ,A.iZ,A.d_,A.aA,A.c6,A.c7])
t(F.im,F.fW)
t(F.iS,F.hf)
t(F.jk,F.jl)
t(F.hT,F.jm)
t(O.dP,O.c3)
s(O.dQ,[O.ht,O.hu,O.b6])
s(O.b6,[O.hx,O.hy])
t(T.ea,T.cW)
t(T.iE,T.ea)
s(V.dO,[V.as,V.cY])
t(X.h2,X.e8)
s(V.bt,[V.fJ,V.h3,V.h4,V.hZ])
u(H.eg,H.d0)
u(H.d7,P.w)
u(H.d8,H.bV)
u(H.d9,P.w)
u(H.da,H.bV)
u(P.eC,P.w)
u(P.f5,P.kc)
u(W.eo,W.fF)
u(W.eq,P.w)
u(W.er,W.G)
u(W.es,P.w)
u(W.et,W.G)
u(W.ev,P.w)
u(W.ew,W.G)
u(W.ex,P.w)
u(W.ey,W.G)
u(W.eD,P.ae)
u(W.eE,P.ae)
u(W.eF,P.w)
u(W.eG,W.G)
u(W.eI,P.w)
u(W.eJ,W.G)
u(W.eM,P.w)
u(W.eN,W.G)
u(W.eO,P.ae)
u(W.db,P.w)
u(W.dc,W.G)
u(W.eQ,P.w)
u(W.eR,W.G)
u(W.eV,P.ae)
u(W.eY,P.w)
u(W.eZ,W.G)
u(W.dd,P.w)
u(W.de,W.G)
u(W.f0,P.w)
u(W.f1,W.G)
u(W.f8,P.w)
u(W.f9,W.G)
u(W.fa,P.w)
u(W.fb,W.G)
u(W.fc,P.w)
u(W.fd,W.G)
u(W.fe,P.w)
u(W.ff,W.G)
u(W.fg,P.w)
u(W.fh,W.G)
u(P.ez,P.w)
u(P.eA,W.G)
u(P.eK,P.w)
u(P.eL,W.G)
u(P.eW,P.w)
u(P.eX,W.G)
u(P.f2,P.w)
u(P.f3,W.G)
u(P.en,P.ae)
u(P.eS,P.w)
u(P.eT,W.G)})()
var v={mangledGlobalNames:{l:"int",z:"double",aa:"num",f:"String",O:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.a8]},{func:1,ret:P.M,args:[F.au,P.z,P.z]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.l,[P.k,E.an]]},{func:1,ret:P.M,args:[D.D]},{func:1,ret:P.M,args:[W.n]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[W.n]},{func:1,ret:V.a4,args:[P.z]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.z,args:[P.z]},{func:1,ret:P.z,args:[P.z,P.z]},{func:1,ret:-1,args:[P.l,[P.k,U.aj]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.z},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ad]]},{func:1,ret:P.O,args:[W.E]},{func:1,ret:P.O,args:[W.S,P.f,P.f,W.bL]},{func:1,ret:P.O,args:[W.az]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[P.l,[P.k,V.ao]]},{func:1,ret:W.S,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.bc]},{func:1,args:[W.n]},{func:1,ret:P.O,args:[[P.k,D.ad]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.M,args:[P.f,,]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.x,P.f,P.f],args:[[P.x,P.f,P.f],P.f]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.at]},{func:1,ret:P.N,args:[P.l]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aL,A.aL]},{func:1,ret:P.l,args:[A.aP,A.aP]},{func:1,ret:P.l,args:[A.aT,A.aT]},{func:1,args:[P.f]},{func:1,ret:P.M,args:[P.b9]},{func:1,ret:P.O,args:[V.bt]},{func:1,args:[,P.f]},{func:1,ret:P.M,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.br.prototype
C.j=W.bS.prototype
C.O=W.aC.prototype
C.R=J.a.prototype
C.a=J.b3.prototype
C.S=J.dF.prototype
C.d=J.dG.prototype
C.k=J.dH.prototype
C.e=J.cD.prototype
C.b=J.bA.prototype
C.T=J.bB.prototype
C.Z=W.cL.prototype
C.B=J.hY.prototype
C.c=P.c2.prototype
C.a_=W.b8.prototype
C.C=W.e7.prototype
C.r=J.c9.prototype
C.D=W.bc.prototype
C.E=W.d3.prototype
C.a0=new P.fv()
C.F=new P.fu()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.M=new P.hX()
C.h=new P.j9()
C.N=new P.jb()
C.f=new P.jU()
C.o=new P.bw(0)
C.P=new P.bw(5e6)
C.Q=new P.h7("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.l=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.m=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.Y=new H.fD(0,{},C.x,[P.f,P.f])})();(function staticFields(){$.aZ=0
$.cr=null
$.lN=null
$.lp=!1
$.mS=null
$.mJ=null
$.mZ=null
$.kC=null
$.kI=null
$.lz=null
$.ce=null
$.dh=null
$.di=null
$.lq=!1
$.a_=C.f
$.av=[]
$.bh=null
$.l5=null
$.lT=null
$.lS=null
$.d6=P.lb(P.f,P.by)
$.m_=null
$.m3=null
$.cM=null
$.m8=null
$.ml=null
$.mo=null
$.mn=null
$.jc=null
$.jd=null
$.je=null
$.mm=null
$.m2=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pV","n3",function(){return H.mR("_$dart_dartClosure")})
u($,"pW","lF",function(){return H.mR("_$dart_js")})
u($,"q1","n4",function(){return H.bb(H.iQ({
toString:function(){return"$receiver$"}}))})
u($,"q2","n5",function(){return H.bb(H.iQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q3","n6",function(){return H.bb(H.iQ(null))})
u($,"q4","n7",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q7","na",function(){return H.bb(H.iQ(void 0))})
u($,"q8","nb",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q6","n9",function(){return H.bb(H.mf(null))})
u($,"q5","n8",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qa","nd",function(){return H.bb(H.mf(void 0))})
u($,"q9","nc",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qr","lG",function(){return P.oq()})
u($,"qd","ne",function(){return P.om()})
u($,"qs","ni",function(){return H.nU(H.cd(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qu","nk",function(){return P.o8("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qv","nl",function(){return P.oQ()})
u($,"qt","nj",function(){return P.lX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qk","nh",function(){return Z.aH(0)})
u($,"qe","nf",function(){return Z.aH(511)})
u($,"qm","bp",function(){return Z.aH(1)})
u($,"ql","bo",function(){return Z.aH(2)})
u($,"qg","bn",function(){return Z.aH(4)})
u($,"qn","bO",function(){return Z.aH(8)})
u($,"qo","bP",function(){return Z.aH(16)})
u($,"qh","dl",function(){return Z.aH(32)})
u($,"qi","dm",function(){return Z.aH(64)})
u($,"qj","ng",function(){return Z.aH(96)})
u($,"qp","co",function(){return Z.aH(128)})
u($,"qf","bm",function(){return Z.aH(256)})
u($,"pU","n2",function(){return new V.fT(1e-9)})
u($,"pT","Q",function(){return $.n2()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cI,DataView:H.bE,ArrayBufferView:H.bE,Float32Array:H.cJ,Float64Array:H.cJ,Int16Array:H.hM,Int32Array:H.hN,Int8Array:H.hO,Uint16Array:H.hP,Uint32Array:H.hQ,Uint8ClampedArray:H.dV,CanvasPixelArray:H.dV,Uint8Array:H.cK,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fm,HTMLAnchorElement:W.dq,HTMLAreaElement:W.fn,HTMLBaseElement:W.cp,Blob:W.bR,HTMLBodyElement:W.br,HTMLCanvasElement:W.bS,CanvasRenderingContext2D:W.cs,CDATASection:W.bs,CharacterData:W.bs,Comment:W.bs,ProcessingInstruction:W.bs,Text:W.bs,CSSNumericValue:W.cu,CSSUnitValue:W.cu,CSSPerspective:W.fE,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cv,MSStyleCSSProperties:W.cv,CSS2Properties:W.cv,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fG,CSSUnparsedValue:W.fH,DataTransferItemList:W.fK,HTMLDivElement:W.aC,DOMException:W.fL,ClientRectList:W.dA,DOMRectList:W.dA,DOMRectReadOnly:W.dB,DOMStringList:W.fM,DOMTokenList:W.fN,Element:W.S,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aD,FileList:W.cy,FileWriter:W.fX,HTMLFormElement:W.h0,Gamepad:W.aM,History:W.h5,HTMLCollection:W.bW,HTMLFormControlsCollection:W.bW,HTMLOptionsCollection:W.bW,ImageData:W.bi,HTMLImageElement:W.cB,HTMLInputElement:W.cC,KeyboardEvent:W.b4,Location:W.dM,MediaList:W.hF,MessagePort:W.cG,MIDIInputMap:W.hG,MIDIOutputMap:W.hI,MimeType:W.aN,MimeTypeArray:W.hK,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cL,RadioNodeList:W.cL,Plugin:W.aO,PluginArray:W.i_,RTCStatsReport:W.i9,HTMLSelectElement:W.ic,SourceBuffer:W.aQ,SourceBufferList:W.io,SpeechGrammar:W.aR,SpeechGrammarList:W.ip,SpeechRecognitionResult:W.aS,Storage:W.is,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.e7,HTMLTableRowElement:W.iz,HTMLTableSectionElement:W.iA,HTMLTemplateElement:W.cV,TextTrack:W.aU,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.iC,TextTrackList:W.iD,TimeRanges:W.iI,Touch:W.aV,TouchEvent:W.aW,TouchList:W.iM,TrackDefaultList:W.iN,CompositionEvent:W.bJ,FocusEvent:W.bJ,TextEvent:W.bJ,UIEvent:W.bJ,URL:W.j8,VideoTrackList:W.jq,WheelEvent:W.bc,Window:W.d3,DOMWindow:W.d3,Attr:W.d4,CSSRuleList:W.jA,ClientRect:W.ep,DOMRect:W.ep,GamepadList:W.jP,NamedNodeMap:W.eH,MozNamedAttrMap:W.eH,SpeechRecognitionResultList:W.k2,StyleSheetList:W.k6,SVGLength:P.b5,SVGLengthList:P.he,SVGNumber:P.b7,SVGNumberList:P.hV,SVGPointList:P.i1,SVGScriptElement:P.cP,SVGStringList:P.iy,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.ba,SVGTransformList:P.iO,AudioBuffer:P.fq,AudioParamMap:P.fr,AudioTrackList:P.ft,AudioContext:P.bQ,webkitAudioContext:P.bQ,BaseAudioContext:P.bQ,OfflineAudioContext:P.hW,WebGLBuffer:P.dt,WebGLProgram:P.e_,WebGL2RenderingContext:P.c2,WebGLShader:P.e2,WebGLTexture:P.e9,WebGLUniformLocation:P.ef,SQLResultSetRowList:P.iq})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.mV,[])
else M.mV([])})})()
//# sourceMappingURL=test.dart.js.map
