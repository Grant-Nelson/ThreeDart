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
a[c]=function(){a[c]=function(){H.pB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lt(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
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
if(w[u][a])return w[u][a]}}var C={},H={l6:function l6(){},
kH:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
l3:function(){return new P.cY("No element")},
nv:function(){return new P.cY("Too many elements")},
ec:function(a,b,c,d,e){H.n(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.o_(a,b,c,d,e)
else H.nZ(a,b,c,d,e)},
o_:function(a,b,c,d,e){var u,t,s,r,q
H.n(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b6(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
nZ:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.n(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.d.a7(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a7(a3+a4,2)
q=r-u
p=r+u
o=a2.length
if(t<0||t>=o)return H.e(a2,t)
n=a2[t]
if(q<0||q>=o)return H.e(a2,q)
m=a2[q]
if(r<0||r>=o)return H.e(a2,r)
l=a2[r]
if(p<0||p>=o)return H.e(a2,p)
k=a2[p]
if(s<0||s>=o)return H.e(a2,s)
j=a2[s]
if(J.b6(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b6(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b6(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b6(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b6(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b6(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b6(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b6(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b6(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.k(a2,t,n)
C.a.k(a2,r,l)
C.a.k(a2,s,j)
if(a3<0||a3>=a2.length)return H.e(a2,a3)
C.a.k(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.e(a2,a4)
C.a.k(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.W(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.P()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aq()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.e(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.P()
if(a0<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aq()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aq()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.P()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.e(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.e(a2,o)
C.a.k(a2,a3,a2[o])
C.a.k(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.e(a2,o)
C.a.k(a2,a4,a2[o])
C.a.k(a2,o,k)
H.ec(a2,a3,h-2,a5,a6)
H.ec(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.W(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.W(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.P()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.e(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.e(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.e(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}H.ec(a2,h,g,a5,a6)}else H.ec(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
h_:function h_(){},
c9:function c9(){},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
hE:function hE(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
jA:function jA(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
d5:function d5(){},
eo:function eo(){},
nn:function(){throw H.c(P.K("Cannot modify unmodifiable Map"))},
cu:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pj:function(a){return v.types[H.a4(a)]},
pq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.aS(a))
return u},
cS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nR:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cb:function(a){return H.nI(a)+H.lp(H.bW(a),0,null)},
nI:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibR){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cu(t.length>1&&C.b.C(t,0)===36?C.b.a9(t,1):t)},
nJ:function(){if(!!self.location)return self.location.href
return},
lX:function(a){var u,t,s,r,q
H.kM(a)
u=J.aG(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nS:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aS(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aU(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aS(s))}return H.lX(r)},
lY:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aS(s))
if(s<0)throw H.c(H.aS(s))
if(s>65535)return H.nS(a)}return H.lX(a)},
nT:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aU(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nQ:function(a){var u=H.ca(a).getFullYear()+0
return u},
nO:function(a){var u=H.ca(a).getMonth()+1
return u},
nK:function(a){var u=H.ca(a).getDate()+0
return u},
nL:function(a){var u=H.ca(a).getHours()+0
return u},
nN:function(a){var u=H.ca(a).getMinutes()+0
return u},
nP:function(a){var u=H.ca(a).getSeconds()+0
return u},
nM:function(a){var u=H.ca(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.aS(a))},
e:function(a,b){if(a==null)J.aG(a)
throw H.c(H.bU(a,b))},
bU:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,s,null)
u=H.a4(J.aG(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.ie(b,s)},
pc:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end",u)
return new P.aT(!0,b,"end",null)},
aS:function(a){return new P.aT(!0,a,null,null)},
p8:function(a){if(typeof a!=="number")throw H.c(H.aS(a))
return a},
c:function(a){var u
if(a==null)a=new P.e5()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mP})
u.name=""}else u.toString=H.mP
return u},
mP:function(){return J.av(this.dartException)},
z:function(a){throw H.c(a)},
x:function(a){throw H.c(P.b8(a))},
bl:function(a){var u,t,s,r,q,p
a=H.mO(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m7:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lS:function(a,b){return new H.i5(a,b==null?null:b.method)},
l7:function(a,b){var u=b==null,t=u?null:b.method
return new H.hr(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aU(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l7(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lS(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mS()
q=$.mT()
p=$.mU()
o=$.mV()
n=$.mY()
m=$.mZ()
l=$.mX()
$.mW()
k=$.n0()
j=$.n_()
i=r.ah(u)
if(i!=null)return f.$1(H.l7(H.I(u),i))
else{i=q.ah(u)
if(i!=null){i.method="call"
return f.$1(H.l7(H.I(u),i))}else{i=p.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=n.ah(u)
if(i==null){i=m.ah(u)
if(i==null){i=l.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=k.ah(u)
if(i==null){i=j.ah(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lS(H.I(u),i))}}return f.$1(new H.jd(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ee()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aT(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ee()
return a},
cs:function(a){var u
if(a==null)return new H.f3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f3(a)},
pg:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pp:function(a,b,c,d,e,f){H.f(a,"$ibH")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.A("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pp)
a.$identity=u
return u},
nm:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iB().constructor.prototype):Object.create(new H.cx(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b7
if(typeof t!=="number")return t.B()
$.b7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lI(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pj,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lH:H.kX
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lI(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nj:function(a,b,c,d){var u=H.kX
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lI:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nl(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nj(t,!r,u,b)
if(t===0){r=$.b7
if(typeof r!=="number")return r.B()
$.b7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cy
return new Function(r+H.i(q==null?$.cy=H.fH("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b7
if(typeof r!=="number")return r.B()
$.b7=r+1
o+=r
r="return function("+o+"){return this."
q=$.cy
return new Function(r+H.i(q==null?$.cy=H.fH("self"):q)+"."+H.i(u)+"("+o+");}")()},
nk:function(a,b,c,d){var u=H.kX,t=H.lH
switch(b?-1:a){case 0:throw H.c(H.nX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nl:function(a,b){var u,t,s,r,q,p,o,n=$.cy
if(n==null)n=$.cy=H.fH("self")
u=$.lG
if(u==null)u=$.lG=H.fH("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nk(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b7
if(typeof u!=="number")return u.B()
$.b7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b7
if(typeof u!=="number")return u.B()
$.b7=u+1
return new Function(n+u+"}")()},
lt:function(a,b,c,d,e,f,g){return H.nm(a,b,H.a4(c),d,!!e,!!f,g)},
kX:function(a){return a.a},
lH:function(a){return a.c},
fH:function(a){var u,t,s,r=new H.cx("self","target","receiver","name"),q=J.l4(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.p4("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b2(a,"String"))},
pd:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"double"))},
mK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"num"))},
lq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b2(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b2(a,"int"))},
mM:function(a,b){throw H.c(H.b2(a,H.cu(H.I(b).substring(2))))},
pv:function(a,b){throw H.c(H.ni(a,H.cu(H.I(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.P(a)[b])return a
H.mM(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.pv(a,b)},
kM:function(a){if(a==null)return a
if(!!J.P(a).$ib)return a
throw H.c(H.b2(a,"List<dynamic>"))},
mI:function(a,b){var u
if(a==null)return a
u=J.P(a)
if(!!u.$ib)return a
if(u[b])return a
H.mM(a,b)},
mE:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
fs:function(a,b){var u
if(typeof a=="function")return!0
u=H.mE(J.P(a))
if(u==null)return!1
return H.mt(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.lm)return a
$.lm=!0
try{if(H.fs(a,b))return a
u=H.kQ(b)
t=H.b2(a,u)
throw H.c(t)}finally{$.lm=!1}},
lu:function(a,b){if(a!=null&&!H.ls(a,b))H.z(H.b2(a,H.kQ(b)))
return a},
b2:function(a,b){return new H.j3("TypeError: "+P.dJ(a)+": type '"+H.mz(a)+"' is not a subtype of type '"+b+"'")},
ni:function(a,b){return new H.fI("CastError: "+P.dJ(a)+": type '"+H.mz(a)+"' is not a subtype of type '"+b+"'")},
mz:function(a){var u,t=J.P(a)
if(!!t.$icA){u=H.mE(t)
if(u!=null)return H.kQ(u)
return"Closure"}return H.cb(a)},
p4:function(a){throw H.c(new H.jB(a))},
pB:function(a){throw H.c(new P.fS(H.I(a)))},
nX:function(a){return new H.io(a)},
mF:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
qi:function(a,b,c){return H.ct(a["$a"+H.i(c)],H.bW(b))},
bV:function(a,b,c,d){var u
H.I(c)
H.a4(d)
u=H.ct(a["$a"+H.i(c)],H.bW(b))
return u==null?null:u[d]},
au:function(a,b,c){var u
H.I(b)
H.a4(c)
u=H.ct(a["$a"+H.i(b)],H.bW(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a4(b)
u=H.bW(a)
return u==null?null:u[b]},
kQ:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.n(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cu(a[0].name)+H.lp(a,1,b)
if(typeof a=="function")return H.cu(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oE(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.n(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.B(p,a0[n])
m=u[q]
if(m!=null&&m!==P.R)p+=" extends "+H.bT(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bT(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bT(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pf(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bT(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lp:function(a,b,c){var u,t,s,r,q,p
H.n(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
ct:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lr:function(a,b,c,d){var u,t
H.I(b)
H.kM(c)
H.I(d)
if(a==null)return!1
u=H.bW(a)
t=J.P(a)
if(t[b]==null)return!1
return H.mC(H.ct(t[d],u),null,c,null)},
n:function(a,b,c,d){H.I(b)
H.kM(c)
H.I(d)
if(a==null)return a
if(H.lr(a,b,c,d))return a
throw H.c(H.b2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cu(b.substring(2))+H.lp(c,0,null),v.mangledGlobalNames)))},
mC:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aR(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aR(a[t],b,c[t],d))return!1
return!0},
qg:function(a,b,c){return a.apply(b,H.ct(J.P(b)["$a"+H.i(c)],H.bW(b)))},
mH:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="J"||a===-1||a===-2||H.mH(u)}return!1},
ls:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="J"||b===-1||b===-2||H.mH(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ls(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fs(a,b)}u=J.P(a).constructor
t=H.bW(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aR(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.ls(a,b))throw H.c(H.b2(a,H.kQ(b)))
return a},
aR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aR(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.mt(a,b,c,d)
if('func' in a)return c.name==="bH"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aR("type" in a?a.type:l,b,s,d)
else if(H.aR(a,b,s,d))return!0
else{if(!('$i'+"cF" in t.prototype))return!1
r=t.prototype["$a"+"cF"]
q=H.ct(r,u?a.slice(1):l)
return H.aR(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mC(H.ct(m,u),b,p,d)},
mt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aR(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aR(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aR(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aR(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pt(h,b,g,d)},
pt:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aR(c[s],d,a[s],b))return!1}return!0},
qh:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pr:function(a){var u,t,s,r,q=H.I($.mG.$1(a)),p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mB.$2(a,q))
if(q!=null){p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kP(u)
$.kF[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kL[q]=u
return u}if(s==="-"){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mL(a,u)
if(s==="*")throw H.c(P.jc(q))
if(v.leafTags[q]===true){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mL(a,u)},
mL:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kP:function(a){return J.lw(a,!1,null,!!a.$iL)},
ps:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kP(u)
else return J.lw(u,c,null,null)},
pn:function(){if(!0===$.lv)return
$.lv=!0
H.po()},
po:function(){var u,t,s,r,q,p,o,n
$.kF=Object.create(null)
$.kL=Object.create(null)
H.pm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mN.$1(q)
if(p!=null){o=H.ps(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pm:function(){var u,t,s,r,q,p,o=C.G()
o=H.co(C.H,H.co(C.I,H.co(C.v,H.co(C.v,H.co(C.J,H.co(C.K,H.co(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mG=new H.kI(r)
$.mB=new H.kJ(q)
$.mN=new H.kK(p)},
co:function(a,b){return a(b)||b},
nx:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
py:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pe:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var u=H.pz(a,b,c)
return u},
pz:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mO(b),'g'),H.pe(c))},
fM:function fM(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i5:function i5(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
kT:function kT(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null},
cA:function cA(){},
iL:function iL(){},
iB:function iB(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a){this.a=a},
fI:function fI(a){this.a=a},
io:function io(a){this.a=a},
jB:function jB(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hv:function hv(a,b){this.a=a
this.$ti=b},
hw:function hw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
nG:function(a){return new Int8Array(a)},
bq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bU(b,a))},
oC:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pc(a,b,c))
return b},
cN:function cN(){},
bL:function bL(){},
e1:function e1(){},
cO:function cO(){},
e2:function e2(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
e3:function e3(){},
cP:function cP(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
pf:function(a){return J.lO(a?Object.keys(a):[],null)},
pu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kG:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lv==null){H.pn()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jc("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lA()]
if(r!=null)return r
r=H.pr(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lA(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nw:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.lO(new Array(a),b)},
lO:function(a,b){return J.l4(H.d(a,[b]))},
l4:function(a){H.kM(a)
a.fixed$length=Array
return a},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.bJ.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hp.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.R)return a
return J.kG(a)},
dp:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.R)return a
return J.kG(a)},
ft:function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.R)return a
return J.kG(a)},
ph:function(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
pi:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
dq:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
cr:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.R)return a
return J.kG(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).p(a,b)},
b6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ph(a).aq(a,b)},
dt:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dp(a).j(a,b)},
kU:function(a,b,c){return J.ft(a).k(a,b,c)},
n9:function(a,b){return J.dq(a).C(a,b)},
na:function(a,b,c){return J.cr(a).hM(a,b,c)},
nb:function(a,b,c,d){return J.cr(a).ij(a,b,c,d)},
nc:function(a,b){return J.dq(a).Y(a,b)},
kV:function(a,b){return J.pi(a).iu(a,b)},
fu:function(a,b){return J.ft(a).F(a,b)},
nd:function(a,b,c,d){return J.cr(a).iJ(a,b,c,d)},
lC:function(a,b){return J.ft(a).u(a,b)},
ne:function(a){return J.cr(a).gis(a)},
fv:function(a){return J.cr(a).gc4(a)},
du:function(a){return J.P(a).gE(a)},
by:function(a){return J.ft(a).gV(a)},
aG:function(a){return J.dp(a).gn(a)},
lD:function(a){return J.ft(a).jh(a)},
nf:function(a,b){return J.cr(a).jj(a,b)},
ng:function(a,b,c){return J.dq(a).t(a,b,c)},
nh:function(a){return J.dq(a).ju(a)},
av:function(a){return J.P(a).i(a)},
a:function a(){},
hp:function hp(){},
dQ:function dQ(){},
dR:function dR(){},
i9:function i9(){},
bR:function bR(){},
bK:function bK(){},
bc:function bc(a){this.$ti=a},
l5:function l5(a){this.$ti=a},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c8:function c8(){},
dP:function dP(){},
dO:function dO(){},
bJ:function bJ(){}},P={
oe:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.p5()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cp(new P.jD(s),1)).observe(u,{childList:true})
return new P.jC(s,u,t)}else if(self.setImmediate!=null)return P.p6()
return P.p7()},
of:function(a){self.scheduleImmediate(H.cp(new P.jE(H.l(a,{func:1,ret:-1})),0))},
og:function(a){self.setImmediate(H.cp(new P.jF(H.l(a,{func:1,ret:-1})),0))},
oh:function(a){P.lb(C.o,H.l(a,{func:1,ret:-1}))},
lb:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.d.a7(a.a,1000)
return P.on(u<0?0:u,b)},
m6:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.bj]})
u=C.d.a7(a.a,1000)
return P.oo(u<0?0:u,b)},
on:function(a,b){var u=new P.f9()
u.f3(a,b)
return u},
oo:function(a,b){var u=new P.f9()
u.f4(a,b)
return u},
oi:function(a,b){var u,t,s
b.a=1
try{a.eu(new P.jP(b),new P.jQ(b),null)}catch(s){u=H.ap(s)
t=H.cs(s)
P.pw(new P.jR(b,u,t))}},
mi:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaQ")
if(u>=4){t=b.bY()
b.a=a.a
b.c=a.c
P.d9(b,t)}else{t=H.f(b.c,"$ibp")
b.a=2
b.c=a
a.df(t)}},
d9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iaq")
g=g.b
r=s.a
q=s.b
g.toString
P.kB(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d9(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.f(o,"$iaq")
g=g.b
r=o.a
q=o.b
g.toString
P.kB(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jV(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jU(u,b,o).$0()}else if((g&2)!==0)new P.jT(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.P(g).$icF){if(g.a>=4){k=H.f(q.c,"$ibp")
q.c=null
b=q.bl(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mi(g,q)
return}}j=b.b
k=H.f(j.c,"$ibp")
j.c=null
b=j.bl(k)
g=u.a
r=u.b
if(!g){H.C(r,H.r(j,0))
j.a=4
j.c=r}else{H.f(r,"$iaq")
j.a=8
j.c=r}h.a=j
g=j}},
p0:function(a,b){if(H.fs(a,{func:1,args:[P.R,P.az]}))return H.l(a,{func:1,ret:null,args:[P.R,P.az]})
if(H.fs(a,{func:1,args:[P.R]}))return H.l(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.kW(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
p_:function(){var u,t
for(;u=$.cn,u!=null;){$.dn=null
t=u.b
$.cn=t
if(t==null)$.dm=null
u.a.$0()}},
p3:function(){$.ln=!0
try{P.p_()}finally{$.dn=null
$.ln=!1
if($.cn!=null)$.lB().$1(P.mD())}},
my:function(a){var u=new P.ew(H.l(a,{func:1,ret:-1}))
if($.cn==null){$.cn=$.dm=u
if(!$.ln)$.lB().$1(P.mD())}else $.dm=$.dm.b=u},
p2:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.cn
if(u==null){P.my(a)
$.dn=$.dm
return}t=new P.ew(a)
s=$.dn
if(s==null){t.b=u
$.cn=$.dn=t}else{t.b=s.b
$.dn=s.b=t
if(t.b==null)$.dm=t}},
pw:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.a1
if(C.f===u){P.kD(t,t,C.f,a)
return}u.toString
P.kD(t,t,u,H.l(u.c1(a),s))},
m5:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lb(a,b)}return P.lb(a,H.l(u.c1(b),t))},
o3:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bj]}
H.l(b,s)
u=$.a1
if(u===C.f){u.toString
return P.m6(a,b)}t=u.dA(b,P.bj)
$.a1.toString
return P.m6(a,H.l(t,s))},
kB:function(a,b,c,d,e){var u={}
u.a=d
P.p2(new P.kC(u,e))},
mu:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mv:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
p1:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kD:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c1(d):c.it(d,-1)
P.my(d)},
jD:function jD(a){this.a=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
f9:function f9(){this.c=0},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aQ:function aQ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jO:function jO(a,b){this.a=a
this.b=b},
jS:function jS(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jW:function jW(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a){this.a=a
this.b=null},
iE:function iE(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
iF:function iF(){},
bj:function bj(){},
aq:function aq(a,b){this.a=a
this.b=b},
ks:function ks(){},
kC:function kC(a,b){this.a=a
this.b=b},
k1:function k1(){},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b){this.a=a
this.b=b},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function(a,b){return new H.a2([a,b])},
l8:function(a,b){return new H.a2([a,b])},
nB:function(a){return H.pg(a,new H.a2([null,null]))},
dU:function(a){return new P.k_([a])},
lj:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
om:function(a,b,c){var u=new P.eL(a,b,[c])
u.c=a.e
return u},
nu:function(a,b,c){var u,t
if(P.lo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.aA,a)
try{P.oF(a,u)}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}t=P.m3(b,H.mI(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l2:function(a,b,c){var u,t
if(P.lo(a))return b+"..."+c
u=new P.aj(b)
C.a.h($.aA,a)
try{t=u
t.a=P.m3(t.a,a,", ")}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lo:function(a){var u,t
for(u=$.aA.length,t=0;t<u;++t)if(a===$.aA[t])return!0
return!1},
oF:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.n(b,"$ib",[P.h],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.i(u.gG(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gG(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG(u);++s
for(;u.v();o=n,n=m){m=u.gG(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nA:function(a,b,c){var u=P.nz(b,c)
a.u(0,new P.hx(u,b,c))
return u},
lP:function(a,b){var u,t,s=P.dU(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t)s.h(0,H.C(a[t],b))
return s},
la:function(a){var u,t={}
if(P.lo(a))return"{...}"
u=new P.aj("")
try{C.a.h($.aA,a)
u.a+="{"
t.a=!0
J.lC(a,new P.hB(t,u))
u.a+="}"}finally{if(0>=$.aA.length)return H.e($.aA,-1)
$.aA.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k_:function k_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a){this.a=a
this.c=this.b=null},
eL:function eL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(){},
y:function y(){},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
ag:function ag(){},
kk:function kk(){},
hC:function hC(){},
ep:function ep(a,b){this.a=a
this.$ti=b},
k6:function k6(){},
eM:function eM(){},
ff:function ff(){},
o7:function(a,b,c,d){H.n(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.o8(!1,b,c,d)
return},
o8:function(a,b,c,d){var u,t,s=$.n1()
if(s==null)return
u=0===c
if(u&&!0)return P.le(s,b)
t=b.length
d=P.bO(c,d,t)
if(u&&d===t)return P.le(s,b)
return P.le(s,b.subarray(c,d))},
le:function(a,b){if(P.oa(b))return
return P.ob(a,b)},
ob:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ap(t)}return},
oa:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
o9:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ap(t)}return},
mx:function(a,b,c){var u,t,s
H.n(a,"$ib",[P.m],"$ab")
for(u=J.dp(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.aj()
if((s&127)!==s)return t-b}return c-b},
lF:function(a,b,c,d,e,f){if(C.d.be(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fE:function fE(){},
fF:function fF(){},
c1:function c1(){},
bD:function bD(){},
h1:function h1(){},
hg:function hg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hf:function hf(a){this.a=a},
jl:function jl(){},
jn:function jn(){},
kq:function kq(a){this.b=0
this.c=a},
jm:function jm(a){this.a=a},
kp:function kp(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dr:function(a,b,c){var u
H.l(b,{func:1,ret:P.m,args:[P.h]})
u=H.nR(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
ns:function(a){if(a instanceof H.cA)return a.i(0)
return"Instance of '"+H.cb(a)+"'"},
nC:function(a,b,c){var u,t
H.C(b,c)
u=J.nw(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.n(u,"$ib",[c],"$ab")},
l9:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.by(a);u.v();)C.a.h(s,H.C(u.gG(u),c))
if(b)return s
return H.n(J.l4(s),"$ib",t,"$ab")},
d_:function(a,b,c){var u,t=P.m
H.n(a,"$ik",[t],"$ak")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$ibc",[t],"$abc")
u=a.length
c=P.bO(b,c,u)
return H.lY(b>0||c<u?C.a.eJ(a,b,c):a)}if(!!J.P(a).$icP)return H.nT(a,b,P.bO(b,c,a.length))
return P.o0(a,b,c)},
o0:function(a,b,c){var u,t,s,r,q=null
H.n(a,"$ik",[P.m],"$ak")
if(b<0)throw H.c(P.ah(b,0,J.aG(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aG(a),q,q))
t=J.by(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gG(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gG(t))}return H.lY(r)},
nV:function(a){return new H.hq(a,H.nx(a,!1,!0,!1))},
m3:function(a,b,c){var u=J.by(b)
if(!u.v())return a
if(c.length===0){do a+=H.i(u.gG(u))
while(u.v())}else{a+=H.i(u.gG(u))
for(;u.v();)a=a+c+H.i(u.gG(u))}return a},
m9:function(){var u=H.nJ()
if(u!=null)return P.o6(u)
throw H.c(P.K("'Uri.base' is not supported"))},
fg:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.n(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.n7().b
if(typeof b!=="string")H.z(H.aS(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.au(c,"c1",0))
t=c.giI().c5(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
no:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
np:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dF:function(a){if(a>=10)return""+a
return"0"+a},
lK:function(a,b){return new P.bF(1e6*b+1000*a)},
dJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ns(a)},
dw:function(a){return new P.aT(!1,null,null,a)},
kW:function(a,b,c){return new P.aT(!0,a,b,c)},
ie:function(a,b){return new P.cd(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
bO:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
lZ:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.a4(e==null?J.aG(b):e)
return new P.hh(u,!0,a,c,"Index out of range")},
K:function(a){return new P.je(a)},
jc:function(a){return new P.jb(a)},
m2:function(a){return new P.cY(a)},
b8:function(a){return new P.fL(a)},
A:function(a){return new P.eE(a)},
a6:function(a,b,c){return new P.ha(a,b,c)},
nD:function(a,b,c){var u,t
H.l(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
ly:function(a){H.pu(a)},
o6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.m8(e<e?C.b.t(a,0,e):a,5,f).geA()
else if(u===32)return P.m8(C.b.t(a,5,e),0,f).geA()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.m])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mw(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jw()
if(r>=0)if(P.mw(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.G(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ad(a,"..",o)))j=n>o+2&&C.b.ad(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ad(a,"file",0)){if(q<=0){if(!C.b.ad(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ad(a,"http",0)){if(t&&p+3===o&&C.b.ad(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ad(a,"https",0)){if(t&&p+4===o&&C.b.ad(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k9(a,r,q,p,o,n,m,k)}return P.op(a,0,e,r,q,p,o,n,m,k)},
mb:function(a){var u=P.h
return C.a.iN(H.d(a.split("&"),[u]),P.l8(u,u),new P.jj(C.h),[P.v,P.h,P.h])},
o5:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jg(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dr(C.b.t(a,s,t),n,n)
if(typeof p!=="number")return p.aq()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dr(C.b.t(a,s,c),n,n)
if(typeof p!=="number")return p.aq()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
ma:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jh(a)
t=new P.ji(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Y(a,r)
if(n===58){if(r===b){++r
if(C.b.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gau(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o5(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.d.aU(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
op:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ow(a,b,d)
else{if(d===b)P.dj(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ox(a,u,e-1):""
s=P.ot(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.ov(P.dr(C.b.t(a,r,g),new P.kl(a,f),n),j):n}else{q=n
s=q
t=""}p=P.ou(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lk(a,h+1,i,n):n
return new P.cl(j,t,s,q,p,o,i<c?P.os(a,i+1,c):n)},
mm:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dj:function(a,b,c){throw H.c(P.a6(c,a,b))},
ov:function(a,b){if(a!=null&&a===P.mm(b))return
return a},
ot:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.b.Y(a,u)!==93)P.dj(a,b,"Missing end `]` to match `[` in host")
P.ma(a,b+1,u)
return C.b.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.ma(a,b,c)
return"["+a+"]"}return P.oz(a,b,c)},
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.ms(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.b.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.b.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dj(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.b.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mn(q)
u+=l
t=u}}}}if(s==null)return C.b.t(a,b,c)
if(t<c){n=C.b.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ow:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mp(C.b.C(a,b)))P.dj(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dj(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.t(a,b,c)
return P.oq(t?a.toLowerCase():a)},
oq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ox:function(a,b,c){return P.dk(a,b,c,C.W,!1)},
ou:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dk(a,b,c,C.A,!0):C.j.jL(d,new P.km(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a2(u,"/"))u="/"+u
return P.oy(u,e,f)},
oy:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a2(a,"/"))return P.oA(a,!u||c)
return P.oB(a)},
lk:function(a,b,c,d){var u,t={}
H.n(d,"$iv",[P.h,null],"$av")
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.dk(a,b,c,C.l,!0)}if(d==null)return
u=new P.aj("")
t.a=""
d.u(0,new P.kn(new P.ko(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
os:function(a,b,c){return P.dk(a,b,c,C.l,!0)},
ms:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kH(u)
r=H.kH(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aU(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
mn:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.d.hZ(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.d_(t,0,null)},
dk:function(a,b,c,d,e){var u=P.mr(a,b,c,H.n(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.t(a,b,c):u},
mr:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.n(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.P()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.ms(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dj(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mn(q)}}if(r==null)r=new P.aj("")
r.a+=C.b.t(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.P()
if(s<c)r.a+=C.b.t(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mq:function(a){if(C.b.a2(a,"."))return!0
return C.b.e2(a,"/.")!==-1},
oB:function(a){var u,t,s,r,q,p,o
if(!P.mq(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oA:function(a,b){var u,t,s,r,q,p
if(!P.mq(a))return!b?P.mo(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gau(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gau(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mo(u[0]))}return C.a.m(u,"/")},
mo:function(a){var u,t,s,r=a.length
if(r>=2&&P.mp(J.n9(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.t(a,0,u)+"%3A"+C.b.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
or:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
ll:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.t(a,b,c)
else r=new H.t(C.b.t(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dw("Truncated URI"))
C.a.h(r,P.or(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.n(r,"$ib",[P.m],"$ab")
return new P.jm(!1).c5(r)},
mp:function(a){var u=a|32
return 97<=u&&u<=122},
m8:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a6(m,a,t))}}if(s<0&&t>b)throw H.c(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gau(l)
if(r!==44||t!==p+7||!C.b.ad(a,"base64",p+1))throw H.c(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.j_(0,a,o,u)
else{n=P.mr(a,o,u,C.l,!0)
if(n!=null)a=C.b.aZ(a,o,u,n)}return new P.jf(a,l,c)},
oD:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nD(22,new P.kw(),P.S),n=new P.kv(o),m=new P.kx(),l=new P.ky(),k=H.f(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iS"),"]",5)
k=H.f(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iS"),"az",21)
k=H.f(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mw:function(a,b,c,d,e){var u,t,s,r,q
H.n(e,"$ib",[P.m],"$ab")
u=$.n8()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.C(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
O:function O(){},
aB:function aB(a,b){this.a=a
this.b=b},
D:function D(){},
bF:function bF(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
bG:function bG(){},
fy:function fy(){},
e5:function e5(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hh:function hh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
je:function je(a){this.a=a},
jb:function jb(a){this.a=a},
cY:function cY(a){this.a=a},
fL:function fL(a){this.a=a},
i8:function i8(){},
ee:function ee(){},
fS:function fS(a){this.a=a},
eE:function eE(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(){},
m:function m(){},
k:function k(){},
bb:function bb(){},
b:function b(){},
v:function v(){},
J:function J(){},
ab:function ab(){},
R:function R(){},
az:function az(){},
h:function h(){},
aj:function aj(a){this.a=a},
jj:function jj(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b){this.a=a
this.b=b},
cl:function cl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kl:function kl(a,b){this.a=a
this.b=b},
km:function km(){},
ko:function ko(a,b){this.a=a
this.b=b},
kn:function kn(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(){},
kv:function kv(a){this.a=a},
kx:function kx(){},
ky:function ky(){},
k9:function k9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jJ:function jJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pb:function(a){var u,t=J.P(a)
if(!!t.$ibt){u=t.gdE(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fe(a.data,a.height,a.width)},
pa:function(a){if(a instanceof P.fe)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.l8(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.I(t[r])
u.k(0,q,a[q])}return u},
p9:function(a){var u={}
a.u(0,new P.kE(u))
return u},
kb:function kb(){},
kd:function kd(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(){},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ol:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k0:function k0(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
ht:function ht(){},
bh:function bh(){},
i6:function i6(){},
id:function id(){},
cT:function cT(){},
iI:function iI(){},
p:function p(){},
bk:function bk(){},
j0:function j0(){},
eJ:function eJ(){},
eK:function eK(){},
eU:function eU(){},
eV:function eV(){},
f5:function f5(){},
f6:function f6(){},
fc:function fc(){},
fd:function fd(){},
S:function S(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
bZ:function bZ(){},
i7:function i7(){},
ex:function ex(){},
dy:function dy(){},
e9:function e9(){},
ce:function ce(){},
eb:function eb(){},
eh:function eh(){},
en:function en(){},
iA:function iA(){},
f1:function f1(){},
f2:function f2(){}},W={
lE:function(){var u=document.createElement("a")
return u},
kY:function(){var u=document.createElement("canvas")
return u},
nq:function(a,b,c){var u=document.body,t=(u&&C.t).af(u,a,b,c)
t.toString
u=W.E
u=new H.d6(new W.at(t),H.l(new W.h0(),{func:1,ret:P.O,args:[u]}),[u])
return H.f(u.gaL(u),"$iN")},
nr:function(a){H.f(a,"$ij")
return"wheel"},
cD:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cr(a)
t=u.ges(a)
if(typeof t==="string")r=u.ges(a)}catch(s){H.ap(s)}return r},
lN:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
jY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mk:function(a,b,c,d){var u=W.jY(W.jY(W.jY(W.jY(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mA(new W.jN(c),W.o)
if(u!=null&&!0)J.nb(a,b,u,!1)
return new W.jM(a,b,u,!1,[e])},
mj:function(a){var u=W.lE(),t=window.location
u=new W.bS(new W.k5(u,t))
u.eW(a)
return u},
oj:function(a,b,c,d){H.f(a,"$iN")
H.I(b)
H.I(c)
H.f(d,"$ibS")
return!0},
ok:function(a,b,c,d){var u,t,s
H.f(a,"$iN")
H.I(b)
H.I(c)
u=H.f(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ml:function(){var u=P.h,t=P.lP(C.p,u),s=H.r(C.p,0),r=H.l(new W.kh(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kg(t,P.dU(u),P.dU(u),P.dU(u),null)
t.f2(null,new H.hF(C.p,r,[s,u]),q,null)
return t},
mA:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dA(a,b)},
u:function u(){},
fw:function fw(){},
dv:function dv(){},
fx:function fx(){},
cw:function cw(){},
c_:function c_(){},
bz:function bz(){},
c0:function c0(){},
cz:function cz(){},
bB:function bB(){},
cB:function cB(){},
fO:function fO(){},
V:function V(){},
cC:function cC(){},
fP:function fP(){},
b9:function b9(){},
ba:function ba(){},
fQ:function fQ(){},
fR:function fR(){},
fU:function fU(){},
aI:function aI(){},
fV:function fV(){},
dG:function dG(){},
dH:function dH(){},
fW:function fW(){},
fX:function fX(){},
jH:function jH(a,b){this.a=a
this.b=b},
N:function N(){},
h0:function h0(){},
o:function o(){},
j:function j(){},
aJ:function aJ(){},
cE:function cE(){},
h5:function h5(){},
h9:function h9(){},
aU:function aU(){},
he:function he(){},
c4:function c4(){},
bt:function bt(){},
c5:function c5(){},
bd:function bd(){},
dV:function dV(){},
hS:function hS(){},
cK:function cK(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
hV:function hV(){},
hW:function hW(a){this.a=a},
aV:function aV(){},
hX:function hX(){},
a7:function a7(){},
at:function at(a){this.a=a},
E:function E(){},
cQ:function cQ(){},
aW:function aW(){},
ib:function ib(){},
il:function il(){},
im:function im(a){this.a=a},
ip:function ip(){},
aX:function aX(){},
iy:function iy(){},
aY:function aY(){},
iz:function iz(){},
aZ:function aZ(){},
iC:function iC(){},
iD:function iD(a){this.a=a},
aM:function aM(){},
bi:function bi(){},
ef:function ef(){},
iJ:function iJ(){},
iK:function iK(){},
d0:function d0(){},
b_:function b_(){},
aN:function aN(){},
iM:function iM(){},
iN:function iN(){},
iV:function iV(){},
b0:function b0(){},
b1:function b1(){},
iZ:function iZ(){},
j_:function j_(){},
bP:function bP(){},
jk:function jk(){},
jz:function jz(){},
bo:function bo(){},
d7:function d7(){},
d8:function d8(){},
jI:function jI(){},
ez:function ez(){},
jX:function jX(){},
eR:function eR(){},
ka:function ka(){},
ke:function ke(){},
jG:function jG(){},
jK:function jK(a){this.a=a},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
li:function li(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jM:function jM(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jN:function jN(a){this.a=a},
bS:function bS(a){this.a=a},
H:function H(){},
e4:function e4(a){this.a=a},
i4:function i4(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(){},
k7:function k7(){},
k8:function k8(){},
kg:function kg(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kh:function kh(){},
kf:function kf(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aE:function aE(){},
k5:function k5(a,b){this.a=a
this.b=b},
fh:function fh(a){this.a=a},
kr:function kr(a){this.a=a},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eS:function eS(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
df:function df(){},
dg:function dg(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
dh:function dh(){},
di:function di(){},
fa:function fa(){},
fb:function fb(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){}},O={
kZ:function(a){var u=new O.a5([a])
u.bC(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cJ:function cJ(){this.b=this.a=null},
dM:function dM(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hi:function hi(a){this.a=a},
dY:function dY(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hG:function hG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cI:function cI(){},
hH:function hH(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bf:function bf(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hJ:function hJ(){var _=this
_.e=_.d=_.c=_.b=null},
hK:function hK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cf:function cf(){}},E={
l1:function(){var u=new E.ar()
u.a=""
u.b=!0
u.seV(0,O.kZ(E.ar))
u.y.bg(u.gj0(),u.gj3())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbz(0,null)
u.scu(null)
u.sba(null)
return u},
nW:function(a,b){var u=new E.ih(a)
u.eR(a,b)
return u},
o2:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ic0)return E.m4(a,!0,!0,!0,!1)
u=W.kY()
t=u.style
t.width="100%"
t.height="100%"
s.gc4(a).h(0,u)
return E.m4(u,!0,!0,!0,!1)},
m4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ej(),j=H.f(C.i.cC(a,"webgl2",P.nB(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ice")
if(j==null)H.z(P.A("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nW(j,a)
u=new T.iS(j)
u.b=H.a4(j.getParameter(3379))
H.a4(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eq(a)
t=new X.hs()
t.c=new X.aD(!1,!1,!1)
t.shG(P.dU(P.m))
u.b=t
t=new X.hY(u)
t.f=0
t.r=V.bN()
t.x=V.bN()
t.ch=t.Q=1
u.c=t
t=new X.hz(u)
t.r=0
t.x=V.bN()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iY(u)
t.f=V.bN()
t.r=V.bN()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfs(H.d([],[[P.cZ,P.R]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.l(u.gh2(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.l(u.gh8(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.l(u.gfX(),o),!1,p))
t=u.z
n=W.bd
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.l(u.ghc(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.l(u.gha(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.l(u.ghg(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.l(u.ghk(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.l(u.ghi(),q),!1,r))
n=u.z
m=W.bo;(n&&C.a).h(n,W.aa(a,H.I(W.nr(a)),H.l(u.ghm(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.l(u.gh4(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.l(u.gh6(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.l(u.gho(),o),!1,p))
p=u.z
o=W.b1
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.l(u.ghB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.l(u.ghx(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.l(u.ghz(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aB(Date.now(),!1)
k.cy=0
k.dh()
return k},
fG:function fG(){},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iU:function iU(a){this.a=a}},Z={
lh:function(a,b,c){var u
H.n(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,u)},
aP:function(a){return new Z.bn(a)},
eu:function eu(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ev:function ev(a){this.a=a},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dA:function dA(){this.a=null},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a){this.a=a}},D={
T:function(){var u=new D.c2()
u.sak(null)
u.saS(null)
u.c=null
u.d=0
return u},
fJ:function fJ(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
B:function B(){this.b=null},
c6:function c6(a){this.b=null
this.$ti=a},
c7:function c7(a){this.b=null
this.$ti=a},
M:function M(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bE:function bE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dT:function dT(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e7:function e7(){},
ed:function ed(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dS:function dS(a,b){this.a=a
this.b=b},hs:function hs(){var _=this
_.d=_.c=_.b=_.a=null},dW:function dW(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hz:function hz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},bu:function bu(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hY:function hY(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cL:function cL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ic:function ic(){},el:function el(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iY:function iY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eq:function eq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nt:function(a){var u=new X.hb(),t=new V.ac(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m0
if(t==null){t=V.m_(0,0,1,1)
$.m0=t}u.r=t
return u},
dC:function dC(){},
hb:function hb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){}},V={
dD:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.ac(a,a,a,1)},
pC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.be(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.e.ev(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
cq:function(a,b,c){var u,t,s,r,q,p
H.n(a,"$ib",[P.D],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.Y(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ai(u[p],s))}return u},
lx:function(a){return C.e.jr(Math.pow(2,C.S.ce(Math.log(H.p8(a))/Math.log(2))))},
e0:function(){var u=$.lR
return u==null?$.lR=V.bg(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bg:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lQ:function(a,b,c){var u=c.A(0,Math.sqrt(c.H(c))),t=b.b8(u),s=t.A(0,Math.sqrt(t.H(t))),r=u.b8(s),q=new V.U(a.a,a.b,a.c),p=s.R(0).H(q),o=r.R(0).H(q),n=u.R(0).H(q)
return V.bg(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bN:function(){var u=$.lV
return u==null?$.lV=new V.al(0,0):u},
lW:function(){var u=$.cR
return u==null?$.cR=new V.aF(0,0,0):u},
m_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ea(a,b,c,d)},
bm:function(){var u=$.mf
return u==null?$.mf=new V.U(0,0,0):u},
mh:function(){var u=$.me
return u==null?$.me=new V.U(1,0,0):u},
oc:function(){var u=$.jo
return u==null?$.jo=new V.U(-1,0,0):u},
lf:function(){var u=$.jp
return u==null?$.jp=new V.U(0,1,0):u},
od:function(){var u=$.jq
return u==null?$.jq=new V.U(0,0,1):u},
mg:function(){var u=$.md
return u==null?$.md=new V.U(0,0,-1):u},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
e_:function e_(a,b,c,d,e,f,g,h,i){var _=this
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
al:function al(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.A("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.ig()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.iq()
u.eS(a)
return u},
iX:function(){var u=new V.iW(),t=P.h
u.si1(new H.a2([t,V.cX]))
u.si4(new H.a2([t,V.d2]))
u.c=null
return u},
br:function br(){},
aC:function aC(){},
dX:function dX(){},
ay:function ay(){this.a=null},
ig:function ig(){this.b=this.a=null},
iq:function iq(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.b=a
this.c=null},
iW:function iW(){this.c=this.b=this.a=null},
d3:function d3(a){this.b=a
this.a=this.c=null},
px:function(a){P.o3(C.P,new V.kR(a))},
nY:function(a){var u=new V.iu()
u.eT(a,!0)
return u},
bC:function bC(){},
kR:function kR(a){this.a=a},
fT:function fT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ia:function ia(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iu:function iu(){this.b=this.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
ix:function ix(a){this.a=a},
iO:function iO(a,b){this.a=a
this.c=null
this.d=b},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(){}},U={
l_:function(){var u=new U.fK()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lJ:function(a){var u=new U.dE()
u.a=a
return u},
fK:function fK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){this.b=this.a=null},
cG:function cG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
er:function er(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dI:function dI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nE:function(a,b){var u=a.aD,t=new A.dZ(b,u)
t.cJ(b,u)
t.eQ(a,b)
return t},
nF:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(a9,"$ib",[A.aH],"$ab")
H.n(b0,"$ib",[A.aK],"$ab")
H.n(b1,"$ib",[A.aL],"$ab")
u="MaterialLight_"+a0.gap(a0)+a1.gap(a1)+a2.gap(a2)+a3.gap(a3)+a4.gap(a4)+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.x)(a9),++s)u+="_"+H.i(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.x)(b0),++s)u+="_"+H.i(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.x)(b1),++s)u+="_"+H.i(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
for(t=b0.length,s=0;s<t;++s,q=!0)r+=b0[s].b
for(p=b1.length,s=0;s<p;++s,q=!0)r+=b1[s].b
o=a6.a||a6.b||!1||a7.a||a7.b||!1
if(!(a1.a||a1.b||!1))if(!(a2.a||a2.b||!1)){p=a3.a||a3.b||!1||a4.a||a4.b||!1
n=p}else n=!0
else n=!0
p=!a4.a
m=!p||a4.b||!1||t>0||o
if(!(a2.a||a2.b||!1))l=a3.a||a3.b||!1||!p||a4.b||!1
else l=!0
if(!l)k=a5.a||a5.b||!1||o
else k=!0
j=a5.a||a5.b||!1
i=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
h=e>0
g=k||j||m||!1
a=a&&i
f=$.b5()
if(k){t=$.b4()
f=new Z.bn(f.a|t.a)}if(j){t=$.b3()
f=new Z.bn(f.a|t.a)}if(i){t=$.bx()
f=new Z.bn(f.a|t.a)}if(h){t=$.bw()
f=new Z.bn(f.a|t.a)}return new A.hI(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kz:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kA:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kz(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oJ:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kz(b,t,"emission")
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
oG:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kA(b,t,"ambient")
b.a+="\n"},
oH:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kA(b,t,"diffuse")
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
oK:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kA(b,t,"invDiffuse")
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
oQ:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kA(b,t,"specular")
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
oM:function(a,b){var u,t,s
if(!a.k3)return
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
oO:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kz(b,t,"reflect")
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
oP:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kz(b,t,"refract")
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
oI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kS(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aj()
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
r=[P.h]
o=H.d([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(m,"specular(norm, lit.viewDir)")
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
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kS(t)
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
if(typeof u!=="number")return u.aj()
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
c.a=r+"\n"}r=[P.h]
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
o=a.b
if(o.a||o.b||!1)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
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
oR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kS(t)
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
if(typeof u!=="number")return u.aj()
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
c.a=u+"\n"}u=[P.h]
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
r=a.b
if(r.a||r.b||!1)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
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
oL:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.h])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oS:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aj("")
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
A.oJ(a,j)
A.oG(a,j)
A.oH(a,j)
A.oK(a,j)
A.oQ(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oO(a,j)
A.oP(a,j)}A.oM(a,j)
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
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.oI(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.oN(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.oR(a,q[o],j)
A.oL(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.h])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oT:function(a,b){var u,t,s
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
oV:function(a,b){var u
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
oU:function(a,b){var u
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
oX:function(a,b){var u,t
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
oY:function(a,b){var u,t
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
oW:function(a,b){var u
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
oZ:function(a,b){var u
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
kS:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.a9(a,1)},
lc:function(a,b,c,d,e){var u=new A.j4(a,c,e)
u.f=d
u.sic(P.nC(d,0,P.m))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dZ:function dZ(a,b){var _=this
_.jC=_.dJ=_.dI=_.dH=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jK=_.jJ=_.jI=_.cd=_.cc=_.cb=_.ca=_.c9=_.c8=_.jH=_.dV=_.dU=_.jG=_.dT=_.dS=_.dR=_.jF=_.dQ=_.dP=_.dO=_.jE=_.dN=_.dM=_.jD=_.dL=_.dK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aH:function aH(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aD=b3
_.dH=b4},
cg:function cg(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ch:function ch(a,b,c,d,e,f,g,h,i,j){var _=this
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
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
em:function em(){},
j9:function j9(a){this.a=a},
aO:function aO(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
j5:function j5(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bQ:function bQ(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
d4:function d4(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
ao:function ao(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ku:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dl:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.U(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.U(u+a3,t+a1,s+a2)
q=new V.U(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.U(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ku(i)
l=F.ku(j.b)
k=F.pA(d,a0,new F.kt(j,F.ku(j.c),F.ku(j.d),l,m,c),b)
if(k!=null)a.iZ(k)},
pA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.a3,P.D,P.D]})
if(a<1)return
if(b<1)return
u=F.cV()
t=H.d([],[F.a3])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.dt(new V.ac(p,0,0,1),new V.al(r,1))
c.$3(o,r,0)
C.a.h(t,o.c6(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.dt(new V.ac(j,i,h,1),new V.al(r,m))
c.$3(o,r,n)
C.a.h(t,o.c6(d))}}u.d.ik(a+1,b+1,t)
return u},
dK:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.A("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.A("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
ny:function(a,b){var u,t=new F.ax()
if(a==null)H.z(P.A("May not create a line with a null start vertex."))
if(b==null)H.z(P.A("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.z(P.A("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.z(P.A("May not create a line with vertices attached to different shapes."))
t.a=a
C.a.h(a.c.b,t)
t.b=b
C.a.h(b.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.Z()
return t},
nH:function(a){var u=new F.bM()
if(a.a==null)H.z(P.A("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.Z()
return u},
cV:function(){var u=new F.ai(),t=new F.jr(u)
t.b=!1
t.sie(H.d([],[F.a3]))
u.a=t
t=new F.it(u)
t.sbW(H.d([],[F.bM]))
u.b=t
t=new F.is(u)
t.sfB(H.d([],[F.ax]))
u.c=t
t=new F.ir(u)
t.sft(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
lg:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.a3(),r=new F.jw()
r.sbW(H.d([],[F.bM]))
s.b=r
r=new F.jv()
u=[F.ax]
r.sfC(H.d([],u))
r.sfD(H.d([],u))
s.c=r
r=new F.js()
u=[F.a8]
r.sfu(H.d([],u))
r.sfv(H.d([],u))
r.sfw(H.d([],u))
s.d=r
h=$.n2()
s.e=0
r=$.b5()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b4().a)!==0?e:t
s.x=(u&$.b3().a)!==0?b:t
s.y=(u&$.bx().a)!==0?f:t
s.z=(u&$.bY().a)!==0?g:t
s.Q=(u&$.n3().a)!==0?c:t
s.ch=(u&$.cv().a)!==0?i:0
s.cx=(u&$.bw().a)!==0?a:t
return s},
kt:function kt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){this.b=this.a=null},
bM:function bM(){this.a=null},
ai:function ai(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
a3:function a3(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jy:function jy(a){this.a=a},
jx:function jx(a){this.a=a},
jr:function jr(a){this.a=a
this.c=this.b=null},
js:function js(){this.d=this.c=this.b=null},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(){this.c=this.b=null},
jw:function jw(){this.b=null}},T={d1:function d1(){},ei:function ei(){},iR:function iR(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iS:function iS(a){var _=this
_.a=a
_.e=_.d=_.b=null},iT:function iT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
mJ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="bumpMaps",a1="modifiers",a2=V.nY("Test 006"),a3=W.kY()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.h]
a2.dv(H.d(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],u))
a2.ii(H.d(["bumpMaps"],u))
a2.dv(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.z(P.A("Failed to find an element with the identifier, testCanvas."))
s=E.o2(t,!0,!0,!0,!1)
r=F.cV()
F.dl(r,a,a,1,1,1,0,0,1)
F.dl(r,a,a,1,1,0,1,0,3)
F.dl(r,a,a,1,1,0,0,1,2)
F.dl(r,a,a,1,1,-1,0,0,0)
F.dl(r,a,a,1,1,0,-1,0,0)
F.dl(r,a,a,1,1,0,0,-1,3)
r.aC()
q=new O.dY()
q.sfd(O.kZ(V.as))
q.e.bg(q.gfT(),q.gfV())
p=new O.bf(q,"emission")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
q.f=p
p=new O.bf(q,"ambient")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
q.r=p
p=new O.bf(q,"diffuse")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
q.x=p
p=new O.bf(q,"invDiffuse")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
q.y=p
p=new O.hL(q,"specular")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
p.ch=100
q.z=p
p=new O.hH(q,"bump")
p.c=new A.ak(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.bf(q,"reflect")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
q.cx=p
p=new O.hK(q,"refract")
p.c=new A.ak(!1,!1,!1)
p.f=new V.a9(0,0,0)
p.ch=1
q.cy=p
p=new O.hG(q,"alpha")
p.c=new A.ak(!1,!1,!1)
p.f=1
q.db=p
p=new D.dT()
p.bC(D.af)
p.sfp(H.d([],[D.bE]))
p.shD(H.d([],[D.e7]))
p.si0(H.d([],[D.ed]))
p.y=p.x=null
p.cE(p.gfR(),p.ghr(),p.ghv())
q.dx=p
o=new O.hJ()
o.b=new V.ac(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.x
p=o==null?p.x=D.T():o
p.h(0,q.ghO())
p=q.dx
o=p.y
p=o==null?p.y=D.T():o
p.h(0,q.gbj())
q.fr=null
p=q.dx
n=V.lf()
o=U.lJ(V.lQ(V.lW(),n,new V.U(0,0,-1)))
m=new V.a9(1,1,1)
l=new D.bE()
l.c=new V.a9(1,1,1)
l.a=V.od()
l.d=V.lf()
l.e=V.oc()
k=l.b
l.b=o
o.gq().h(0,l.geY())
o=new D.M("mover",k,l.b,[U.ad])
o.b=!0
l.av(o)
if(!l.c.p(0,m)){k=l.c
l.c=m
o=new D.M("color",k,m,[V.a9])
o.b=!0
l.av(o)}p.h(0,l)
p=q.r
p.saa(0,new V.a9(0,0,1))
p=q.x
p.saa(0,new V.a9(0,1,0))
p=q.z
p.saa(0,new V.a9(1,0,0))
p=q.z
p.bZ(new A.ak(!0,p.c.b,!1))
p.dj(10)
j=E.l1()
j.sbz(0,r)
j.scu(q)
i=E.l1()
i.sbz(0,r)
p=new O.dM()
p.b=V.mg()
p.c=new V.ac(0.2,0.3,0.4,1)
p.d=new V.ac(0.1,0.2,0.3,1)
p.e=V.dD(0.7)
p.f=V.dD(0.3)
p.r=V.dD(0.5)
p.x=V.dD(0.5)
p.y=new V.ac(1,1,1,1)
p.z=V.dD(0.8)
p.r1=p.k4=p.k3=p.k2=p.k1=p.id=p.go=p.fy=p.fx=p.fr=p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=!1
p.r2=1
if(!(Math.abs(0.6)<$.Q().a)){p.r2=0.4
o=new D.M("vectorScale",1,0.4,[P.D])
o.b=!0
p.T(o)}if(!p.ch){p.ch=!0
o=new D.M("showWireFrame",!1,!0,[P.O])
o.b=!0
p.T(o)}if(!p.k3){p.k3=!0
o=new D.M("showAxis",!1,!0,[P.O])
o.b=!0
p.T(o)}if(!p.cy){p.cy=!0
o=new D.M("showNormals",!1,!0,[P.O])
o.b=!0
p.T(o)}if(!p.db){p.db=!0
o=new D.M("showBinormals",!1,!0,[P.O])
o.b=!0
p.T(o)}i.scu(p)
h=E.l1()
h.y.h(0,i)
h.y.h(0,j)
p=new U.cG()
p.bC(U.ad)
p.bg(p.gfP(),p.ght())
p.e=null
p.f=V.e0()
p.r=0
o=s.r
l=new U.es()
g=U.l_()
g.scB(0,!0)
g.scl(6.283185307179586)
g.scn(0)
g.sab(0,0)
g.scm(100)
g.sW(0)
g.sc7(0.5)
l.b=g
f=l.gaN()
g.gq().h(0,f)
g=U.l_()
g.scB(0,!0)
g.scl(6.283185307179586)
g.scn(0)
g.sab(0,0)
g.scm(100)
g.sW(0)
g.sc7(0.5)
l.c=g
g.gq().h(0,f)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
e=new X.aD(!1,!1,!1)
k=l.d
l.d=e
g=[X.aD]
f=new D.M(a1,k,e,g)
f.b=!0
l.O(f)
f=l.f
if(f!==!1){l.f=!1
f=new D.M("invertX",f,!1,[P.O])
f.b=!0
l.O(f)}f=l.r
if(f!==!0){l.r=!0
f=new D.M("invertY",f,!0,[P.O])
f.b=!0
l.O(f)}l.b6(o)
p.h(0,l)
o=s.r
l=new U.er()
f=U.l_()
f.scB(0,!0)
f.scl(6.283185307179586)
f.scn(0)
f.sab(0,0)
f.scm(100)
f.sW(0)
f.sc7(0.2)
l.b=f
f.gq().h(0,l.gaN())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
e=new X.aD(!0,!1,!1)
k=l.c
l.c=e
f=new D.M(a1,k,e,g)
f.b=!0
l.O(f)
l.b6(o)
p.h(0,l)
o=s.r
l=new U.et()
l.c=0.01
l.e=l.d=0
e=new X.aD(!1,!1,!1)
l.b=e
g=new D.M(a1,a,e,g)
g.b=!0
l.O(g)
l.b6(o)
p.h(0,l)
h.sba(p)
p=new M.dI()
p.a=!0
p.sfi(0,O.kZ(E.ar))
p.e.bg(p.gfZ(),p.gh0())
p.y=p.x=p.r=p.f=null
d=X.nt(a)
c=new X.e6()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sba(a)
o=c.c
if(!(Math.abs(o-1.0471975511965976)<$.Q().a)){c.c=1.0471975511965976
o=new D.M("fov",o,1.0471975511965976,[P.D])
o.b=!0
c.aQ(o)}o=c.d
if(!(Math.abs(o-0.1)<$.Q().a)){c.d=0.1
o=new D.M("near",o,0.1,[P.D])
o.b=!0
c.aQ(o)}o=c.e
if(!(Math.abs(o-2000)<$.Q().a)){c.e=2000
o=new D.M("far",o,2000,[P.D])
o.b=!0
c.aQ(o)}o=p.b
if(o!==c){if(o!=null)o.gq().a_(0,p.gaO())
k=p.b
p.b=c
c.gq().h(0,p.gaO())
o=new D.M("camera",k,p.b,[X.dC])
o.b=!0
p.aP(o)}o=p.c
if(o!==d){if(o!=null)o.gq().a_(0,p.gaO())
k=p.c
p.c=d
d.gq().h(0,p.gaO())
o=new D.M("target",k,p.c,[X.eg])
o.b=!0
p.aP(o)}p.e.h(0,h)
p.b.sba(U.lJ(V.bg(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=s.d
if(o!==p){if(o!=null)o.gq().a_(0,s.gcK())
s.d=p
p.gq().h(0,s.gcK())
s.cL()}p=new V.iO(a0,new N.kN(q,s))
u=u.getElementById(a0)
p.c=u
if(u==null)H.z("Failed to find bumpMaps for Texture2DGroup")
p.az(0,"../resources/BumpMap1.png",!0)
p.h(0,"../resources/BumpMap2.png")
p.h(0,"../resources/BumpMap3.png")
p.h(0,"../resources/BumpMap4.png")
p.h(0,"../resources/BumpMap5.png")
p.h(0,"../resources/ScrewBumpMap.png")
p.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.T()
p={func:1,ret:-1,args:[D.B]}
o=H.l(new N.kO(a2,q),p)
if(u.b==null)u.saS(H.d([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.px(s)},
kN:function kN(a,b){this.a=a
this.b=b},
kO:function kO(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l6.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gE:function(a){return H.cS(a)},
i:function(a){return"Instance of '"+H.cb(a)+"'"}}
J.hp.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iO:1}
J.dQ.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.dR.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.i9.prototype={}
J.bR.prototype={}
J.bK.prototype={
i:function(a){var u=a[$.mR()]
if(u==null)return this.eM(a)
return"JavaScript function for "+H.i(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibH:1}
J.bc.prototype={
h:function(a,b){H.C(b,H.r(a,0))
if(!!a.fixed$length)H.z(P.K("add"))
a.push(b)},
a_:function(a,b){var u
if(!!a.fixed$length)H.z(P.K("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
u:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b8(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iV:function(a){return this.m(a,"")},
iN:function(a,b,c,d){var u,t,s
H.C(b,d)
H.l(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b8(a))}return t},
iM:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.O,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b8(a))}throw H.c(H.l3())},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eJ:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.l3())},
dz:function(a,b){var u,t
H.l(b,{func:1,ret:P.O,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b8(a))}return!1},
bA:function(a,b){var u=H.r(a,0)
H.l(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.z(P.K("sort"))
H.ec(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.l2(a,"[","]")},
gV:function(a){return new J.aw(a,a.length,[H.r(a,0)])},
gE:function(a){return H.cS(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.K("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bU(a,b))
if(b>=a.length||b<0)throw H.c(H.bU(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.r(a,0))
if(!!a.immutable$list)H.z(P.K("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bU(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.l5.prototype={}
J.aw.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.x(s))
u=t.c
if(u>=r){t.scO(null)
return!1}t.scO(s[u]);++t.c
return!0},
scO:function(a){this.d=H.C(a,H.r(this,0))},
$ibb:1}
J.c8.prototype={
iu:function(a,b){var u
H.mK(b)
if(typeof b!=="number")throw H.c(H.aS(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbq(b)
if(this.gbq(a)===u)return 0
if(this.gbq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbq:function(a){return a===0?1/a<0:a<0},
jr:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.K(""+a+".toInt()"))},
ce:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.K(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.K(""+a+".round()"))},
ev:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbq(a))return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.K("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.w("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
be:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dl(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dl(a,b)},
dl:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.K("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.dk(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hZ:function(a,b){if(b<0)throw H.c(H.aS(b))
return this.dk(a,b)},
dk:function(a,b){return b>31?0:a>>>b},
aq:function(a,b){if(typeof b!=="number")throw H.c(H.aS(b))
return a>b},
$iD:1,
$iab:1}
J.dP.prototype={$im:1}
J.dO.prototype={}
J.bJ.prototype={
Y:function(a,b){if(b<0)throw H.c(H.bU(a,b))
if(b>=a.length)H.z(H.bU(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.bU(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kW(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.bO(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ad:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.ad(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.aS(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.ie(b,null))
if(b>c)throw H.c(P.ie(b,null))
if(c>a.length)throw H.c(P.ie(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.t(a,b,null)},
ju:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ai:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
e3:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e2:function(a,b){return this.e3(a,b,0)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ilT:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad5:function(){return[P.m]},
$ay:function(){return[P.m]},
$ak:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h_.prototype={}
H.c9.prototype={
gV:function(a){var u=this
return new H.cH(u,u.gn(u),[H.au(u,"c9",0)])},
bx:function(a,b){return this.eL(0,H.l(b,{func:1,ret:P.O,args:[H.au(this,"c9",0)]}))}}
H.cH.prototype={
gG:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.dp(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.b8(s))
u=t.c
if(u>=q){t.sb1(null)
return!1}t.sb1(r.F(s,u));++t.c
return!0},
sb1:function(a){this.d=H.C(a,H.r(this,0))},
$ibb:1}
H.hD.prototype={
gV:function(a){return new H.hE(J.by(this.a),this.b,this.$ti)},
gn:function(a){return J.aG(this.a)},
F:function(a,b){return this.b.$1(J.fu(this.a,b))},
$ak:function(a,b){return[b]}}
H.hE.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.sb1(u.c.$1(t.gG(t)))
return!0}u.sb1(null)
return!1},
gG:function(a){return this.a},
sb1:function(a){this.a=H.C(a,H.r(this,1))},
$abb:function(a,b){return[b]}}
H.hF.prototype={
gn:function(a){return J.aG(this.a)},
F:function(a,b){return this.b.$1(J.fu(this.a,b))},
$ac9:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d6.prototype={
gV:function(a){return new H.jA(J.by(this.a),this.b,this.$ti)}}
H.jA.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.F(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.c3.prototype={}
H.d5.prototype={
k:function(a,b,c){H.C(c,H.au(this,"d5",0))
throw H.c(P.K("Cannot modify an unmodifiable list"))}}
H.eo.prototype={}
H.fM.prototype={
i:function(a){return P.la(this)},
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
return H.nn()},
$iv:1}
H.fN.prototype={
gn:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.d4(b)},
d4:function(a){return this.b[H.I(a)]},
u:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.l(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.d4(r),p))}}}
H.j1.prototype={
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
H.i5.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hr.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.jd.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kT.prototype={
$1:function(a){if(!!J.P(a).$ibG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.f3.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaz:1}
H.cA.prototype={
i:function(a){return"Closure '"+H.cb(this).trim()+"'"},
$ibH:1,
gjv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iL.prototype={}
H.iB.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cu(u)+"'"}}
H.cx.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cx))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cS(this.a)
else u=typeof t!=="object"?J.du(t):H.cS(t)
return(u^H.cS(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.cb(u)+"'")}}
H.j3.prototype={
i:function(a){return this.a}}
H.fI.prototype={
i:function(a){return this.a}}
H.io.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jB.prototype={
i:function(a){return"Assertion failed: "+P.dJ(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giU:function(a){return this.a===0},
ga3:function(a){return new H.hv(this,[H.r(this,0)])},
bo:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d1(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d1(t,b)}else return s.iR(b)},
iR:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ci(u.bJ(t,u.cg(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bi(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bi(r,b)
s=t==null?null:t.b
return s}else return q.iS(b)},
iS:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bJ(r,s.cg(a))
t=s.ci(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.r(s,0))
H.C(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cQ(u==null?s.b=s.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cQ(t==null?s.c=s.bT():t,b,c)}else s.iT(b,c)},
iT:function(a,b){var u,t,s,r,q=this
H.C(a,H.r(q,0))
H.C(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bT()
t=q.cg(a)
s=q.bJ(u,t)
if(s==null)q.c_(u,t,[q.bU(a,b)])
else{r=q.ci(s,a)
if(r>=0)s[r].b=b
else s.push(q.bU(a,b))}},
u:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b8(s))
u=u.c}},
cQ:function(a,b,c){var u,t=this
H.C(b,H.r(t,0))
H.C(c,H.r(t,1))
u=t.bi(a,b)
if(u==null)t.c_(a,b,t.bU(b,c))
else u.b=c},
fK:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.hu(H.C(a,H.r(t,0)),H.C(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fK()
return s},
cg:function(a){return J.du(a)&0x3ffffff},
ci:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.la(this)},
bi:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
fn:function(a,b){delete a[b]},
d1:function(a,b){return this.bi(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c_(t,u,t)
this.fn(t,u)
return t}}
H.hu.prototype={}
H.hv.prototype={
gn:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hw(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hw.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b8(t))
else{t=u.c
if(t==null){u.scP(null)
return!1}else{u.scP(t.a)
u.c=u.c.c
return!0}}},
scP:function(a){this.d=H.C(a,H.r(this,0))},
$ibb:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:60}
H.kK.prototype={
$1:function(a){return this.a(H.I(a))},
$S:55}
H.hq.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilT:1,
$inU:1}
H.cN.prototype={$icN:1}
H.bL.prototype={$ibL:1,$io4:1}
H.e1.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cO.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pd(c)
H.bq(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.D]},
$ay:function(){return[P.D]},
$ik:1,
$ak:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.e2.prototype={
k:function(a,b,c){H.a4(c)
H.bq(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.m]},
$ay:function(){return[P.m]},
$ik:1,
$ak:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hZ.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.e3.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bq(b,a,a.length)
return a[b]},
$ipW:1}
H.cP.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bq(b,a,a.length)
return a[b]},
$icP:1,
$iS:1}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
P.jD.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:28}
P.jC.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:50}
P.jE.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f9.prototype={
f3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.kj(this,b),0),a)
else throw H.c(P.K("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.ki(this,a,Date.now(),b),0),a)
else throw H.c(P.K("Periodic timer."))},
$ibj:1}
P.kj.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ki.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eP(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bp.prototype={
iY:function(a){if(this.c!==6)return!0
return this.b.b.ct(H.l(this.d,{func:1,ret:P.O,args:[P.R]}),a.a,P.O,P.R)},
iP:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fs(u,{func:1,args:[P.R,P.az]}))return H.lu(r.jl(u,a.a,a.b,null,t,P.az),s)
else return H.lu(r.ct(H.l(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aQ.prototype={
eu:function(a,b,c){var u,t,s,r=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.p0(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aQ($.a1,[c])
s=b==null?1:3
this.cR(new P.bp(t,s,a,b,[r,c]))
return t},
jq:function(a,b){return this.eu(a,null,b)},
cR:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibp")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaQ")
s=u.a
if(s<4){u.cR(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kD(null,null,s,H.l(new P.jO(t,a),{func:1,ret:-1}))}},
df:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibp")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaQ")
u=q.a
if(u<4){q.df(a)
return}p.a=u
p.c=q.c}o.a=p.bl(a)
u=p.b
u.toString
P.kD(null,null,u,H.l(new P.jS(o,p),{func:1,ret:-1}))}},
bY:function(){var u=H.f(this.c,"$ibp")
this.c=null
return this.bl(u)},
bl:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cY:function(a){var u,t,s=this,r=H.r(s,0)
H.lu(a,{futureOr:1,type:r})
u=s.$ti
if(H.lr(a,"$icF",u,"$acF"))if(H.lr(a,"$iaQ",u,null))P.mi(a,s)
else P.oi(a,s)
else{t=s.bY()
H.C(a,r)
s.a=4
s.c=a
P.d9(s,t)}},
cZ:function(a,b){var u,t=this
H.f(b,"$iaz")
u=t.bY()
t.a=8
t.c=new P.aq(a,b)
P.d9(t,u)},
$icF:1}
P.jO.prototype={
$0:function(){P.d9(this.a,this.b)},
$S:2}
P.jS.prototype={
$0:function(){P.d9(this.b,this.a.a)},
$S:2}
P.jP.prototype={
$1:function(a){var u=this.a
u.a=0
u.cY(a)},
$S:28}
P.jQ.prototype={
$2:function(a,b){H.f(b,"$iaz")
this.a.cZ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jR.prototype={
$0:function(){this.a.cZ(this.b,this.c)},
$S:2}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.er(H.l(s.d,{func:1}),null)}catch(r){u=H.ap(r)
t=H.cs(r)
if(o.d){s=H.f(o.a.a.c,"$iaq").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iaq")
else q.b=new P.aq(u,t)
q.a=!0
return}if(!!J.P(n).$icF){if(n instanceof P.aQ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iaq")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jq(new P.jW(p),null)
s.a=!1}},
$S:3}
P.jW.prototype={
$1:function(a){return this.a},
$S:46}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.C(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.ct(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ap(o)
t=H.cs(o)
s=n.a
s.b=new P.aq(u,t)
s.a=!0}},
$S:3}
P.jT.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iaq")
r=m.c
if(H.F(r.iY(u))&&r.e!=null){q=m.b
q.b=r.iP(u)
q.a=!1}}catch(p){t=H.ap(p)
s=H.cs(p)
r=H.f(m.a.a.c,"$iaq")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aq(t,s)
n.a=!0}},
$S:3}
P.ew.prototype={}
P.iE.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aQ($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.l(new P.iG(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.iH(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iG.prototype={
$1:function(a){H.C(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.r(this.b,0)]}}}
P.iH.prototype={
$0:function(){this.b.cY(this.a.a)},
$S:2}
P.cZ.prototype={}
P.iF.prototype={}
P.bj.prototype={}
P.aq.prototype={
i:function(a){return H.i(this.a)},
$ibG:1}
P.ks.prototype={$iqa:1}
P.kC.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e5():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.k1.prototype={
jm:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mu(r,r,this,a,-1)}catch(s){u=H.ap(s)
t=H.cs(s)
P.kB(r,r,this,u,H.f(t,"$iaz"))}},
jn:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mv(r,r,this,a,b,-1,c)}catch(s){u=H.ap(s)
t=H.cs(s)
P.kB(r,r,this,u,H.f(t,"$iaz"))}},
it:function(a,b){return new P.k3(this,H.l(a,{func:1,ret:b}),b)},
c1:function(a){return new P.k2(this,H.l(a,{func:1,ret:-1}))},
dA:function(a,b){return new P.k4(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
er:function(a,b){H.l(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mu(null,null,this,a,b)},
ct:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a1===C.f)return a.$1(b)
return P.mv(null,null,this,a,b,c,d)},
jl:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.p1(null,null,this,a,b,c,d,e,f)}}
P.k3.prototype={
$0:function(){return this.a.er(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k2.prototype={
$0:function(){return this.a.jm(this.b)},
$S:3}
P.k4.prototype={
$1:function(a){var u=this.c
return this.a.jn(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k_.prototype={
gV:function(a){var u=this,t=new P.eL(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ick")!=null}else{t=this.fj(b)
return t}},
fj:function(a){var u=this.d
if(u==null)return!1
return this.bH(this.d5(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cV(u==null?s.b=P.lj():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cV(t==null?s.c=P.lj():t,b)}else return s.f6(0,b)},
f6:function(a,b){var u,t,s,r=this
H.C(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lj()
t=r.d_(b)
s=u[t]
if(s==null)u[t]=[r.bE(b)]
else{if(r.bH(s,b)>=0)return!1
s.push(r.bE(b))}return!0},
a_:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hJ(this.c,b)
else return this.hI(0,b)},
hI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d5(r,b)
t=s.bH(u,b)
if(t<0)return!1
s.dm(u.splice(t,1)[0])
return!0},
cV:function(a,b){H.C(b,H.r(this,0))
if(H.f(a[b],"$ick")!=null)return!1
a[b]=this.bE(b)
return!0},
hJ:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ick")
if(u==null)return!1
this.dm(u)
delete a[b]
return!0},
cX:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.ck(H.C(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cX()
return s},
dm:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cX()},
d_:function(a){return J.du(a)&1073741823},
d5:function(a,b){return a[this.d_(b)]},
bH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.ck.prototype={}
P.eL.prototype={
gG:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b8(t))
else{t=u.c
if(t==null){u.scW(null)
return!1}else{u.scW(H.C(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scW:function(a){this.d=H.C(a,H.r(this,0))},
$ibb:1}
P.hx.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:7}
P.hy.prototype={$ik:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cH(a,this.gn(a),[H.bV(this,a,"y",0)])},
F:function(a,b){return this.j(a,b)},
u:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.bV(s,a,"y",0)]})
u=s.gn(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gn(a))throw H.c(P.b8(a))}},
jt:function(a,b){var u,t=this,s=H.d([],[H.bV(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
js:function(a){return this.jt(a,!0)},
iJ:function(a,b,c,d){var u
H.C(d,H.bV(this,a,"y",0))
P.bO(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l2(a,"[","]")}}
P.hA.prototype={}
P.hB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:7}
P.ag.prototype={
u:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.bV(s,a,"ag",0),H.bV(s,a,"ag",1)]})
for(u=J.by(s.ga3(a));u.v();){t=u.gG(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aG(this.ga3(a))},
i:function(a){return P.la(a)},
$iv:1}
P.kk.prototype={
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
throw H.c(P.K("Cannot modify unmodifiable map"))}}
P.hC.prototype={
j:function(a,b){return J.dt(this.a,b)},
k:function(a,b,c){J.kU(this.a,H.C(b,H.r(this,0)),H.C(c,H.r(this,1)))},
u:function(a,b){J.lC(this.a,H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aG(this.a)},
i:function(a){return J.av(this.a)},
$iv:1}
P.ep.prototype={}
P.k6.prototype={
as:function(a,b){var u
for(u=J.by(H.n(b,"$ik",this.$ti,"$ak"));u.v();)this.h(0,u.gG(u))},
i:function(a){return P.l2(this,"{","}")},
F:function(a,b){var u,t,s,r=this
P.lZ(b,"index")
for(u=P.om(r,r.r,H.r(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ik:1,
$im1:1}
P.eM.prototype={}
P.ff.prototype={}
P.fE.prototype={
j_:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bO(a0,a1,b.length)
u=$.n5()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kH(C.b.C(b,n))
j=H.kH(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.b.t(b,s,t)
r.a=g+H.cc(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.t(b,s,a1)
f=g.length
if(q>=0)P.lF(b,p,a1,q,o,f)
else{e=C.d.be(f-1,4)+1
if(e===1)throw H.c(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lF(b,p,a1,q,o,d)
else{e=C.d.be(d,4)
if(e===1)throw H.c(P.a6(c,b,a1))
if(e>1)b=C.b.aZ(b,a1,a1,e===2?"==":"=")}return b},
$ac1:function(){return[[P.b,P.m],P.h]}}
P.fF.prototype={
$abD:function(){return[[P.b,P.m],P.h]}}
P.c1.prototype={}
P.bD.prototype={}
P.h1.prototype={
$ac1:function(){return[P.h,[P.b,P.m]]}}
P.hg.prototype={
i:function(a){return this.a}}
P.hf.prototype={
fk:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.e(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.aj("")
if(r>b)q.a+=C.b.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ng(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abD:function(){return[P.h,P.h]}}
P.jl.prototype={
giI:function(){return C.N}}
P.jn.prototype={
c5:function(a){var u,t,s=P.bO(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kq(u)
if(t.fz(a,0,s)!==s)t.dr(J.nc(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oC(0,t.b,u.length)))},
$abD:function(){return[P.h,[P.b,P.m]]}}
P.kq.prototype={
dr:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
fz:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dr(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.jm.prototype={
c5:function(a){var u,t,s,r,q,p,o,n,m
H.n(a,"$ib",[P.m],"$ab")
u=P.o7(!1,a,0,null)
if(u!=null)return u
t=P.bO(0,null,J.aG(a))
s=P.mx(a,0,t)
if(s>0){r=P.d_(a,0,s)
if(s===t)return r
q=new P.aj(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aj("")
n=new P.kp(!1,q)
n.c=o
n.iv(a,p,t)
if(n.e>0){H.z(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cc(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abD:function(){return[[P.b,P.m],P.h]}}
P.kp.prototype={
iv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.n(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dp(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.aj()
if((o&192)!==128){n=P.a6(h+C.d.bd(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a6("Overlong encoding of 0x"+C.d.bd(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.d.bd(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cc(u)
i.c=!1}for(n=p<c;n;){m=P.mx(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d_(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.d.bd(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.d.bd(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.O.prototype={}
P.aB.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.aU(u,30))&1073741823},
i:function(a){var u=this,t=P.no(H.nQ(u)),s=P.dF(H.nO(u)),r=P.dF(H.nK(u)),q=P.dF(H.nL(u)),p=P.dF(H.nN(u)),o=P.dF(H.nP(u)),n=P.np(H.nM(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.bF.prototype={
aq:function(a,b){return C.d.aq(this.a,b.gjx())},
p:function(a,b){if(b==null)return!1
return b instanceof P.bF&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
i:function(a){var u,t,s,r=new P.fZ(),q=this.a
if(q<0)return"-"+new P.bF(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fY().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.bG.prototype={}
P.fy.prototype={
i:function(a){return"Assertion failed"}}
P.e5.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.dJ(q.b)
return t+s+": "+r}}
P.cd.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.hh.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=H.a4(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.je.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jb.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cY.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dJ(u)+"."}}
P.i8.prototype={
i:function(a){return"Out of Memory"},
$ibG:1}
P.ee.prototype={
i:function(a){return"Stack Overflow"},
$ibG:1}
P.fS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eE.prototype={
i:function(a){return"Exception: "+this.a}}
P.ha.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
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
k=""}j=C.b.t(f,m,n)
return h+l+j+k+"\n"+C.b.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bH.prototype={}
P.m.prototype={}
P.k.prototype={
bx:function(a,b){var u=H.au(this,"k",0)
return new H.d6(this,H.l(b,{func:1,ret:P.O,args:[u]}),[u])},
gn:function(a){var u,t=this.gV(this)
for(u=0;t.v();)++u
return u},
gaL:function(a){var u,t=this.gV(this)
if(!t.v())throw H.c(H.l3())
u=t.gG(t)
if(t.v())throw H.c(H.nv())
return u},
F:function(a,b){var u,t,s
P.lZ(b,"index")
for(u=this.gV(this),t=0;u.v();){s=u.gG(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nu(this,"(",")")}}
P.bb.prototype={}
P.b.prototype={$ik:1}
P.v.prototype={}
P.J.prototype={
gE:function(a){return P.R.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
p:function(a,b){return this===b},
gE:function(a){return H.cS(this)},
i:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.h.prototype={$ilT:1}
P.aj.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipL:1}
P.jj.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.n(a,"$iv",[r,r],"$av")
H.I(b)
u=J.dq(b).e2(b,"=")
if(u===-1){if(b!=="")J.kU(a,P.ll(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.t(b,0,u)
s=C.b.a9(b,u+1)
r=this.a
J.kU(a,P.ll(t,0,t.length,r,!0),P.ll(s,0,s.length,r,!0))}return a},
$S:44}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:42}
P.jh.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.ji.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dr(C.b.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:40}
P.cl.prototype={
geB:function(){return this.b},
gcf:function(a){var u=this.c
if(u==null)return""
if(C.b.a2(u,"["))return C.b.t(u,1,u.length-1)
return u},
gbs:function(a){var u=this.d
if(u==null)return P.mm(this.a)
return u},
gcq:function(a){var u=this.f
return u==null?"":u},
gdY:function(){var u=this.r
return u==null?"":u},
ep:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.n(b,"$iv",[P.h,null],"$av")
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
n=P.lk(null,0,0,b)
return new P.cl(u,s,q,r,p,n,m.r)},
gcr:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shH(new P.ep(P.mb(u==null?"":u),[t,t]))}return s.Q},
gdZ:function(){return this.c!=null},
ge1:function(){return this.f!=null},
ge_:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.P(b).$ild)if(s.a==b.gby())if(s.c!=null===b.gdZ())if(s.b==b.geB())if(s.gcf(s)==b.gcf(b))if(s.gbs(s)==b.gbs(b))if(s.e===b.gej(b)){u=s.f
t=u==null
if(!t===b.ge1()){if(t)u=""
if(u===b.gcq(b)){u=s.r
t=u==null
if(!t===b.ge_()){if(t)u=""
u=u===b.gdY()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
return u==null?this.z=C.b.gE(this.i(0)):u},
shH:function(a){var u=P.h
this.Q=H.n(a,"$iv",[u,u],"$av")},
$ild:1,
gby:function(){return this.a},
gej:function(a){return this.e}}
P.kl.prototype={
$1:function(a){throw H.c(P.a6("Invalid port",this.a,this.b+1))},
$S:19}
P.km.prototype={
$1:function(a){return P.fg(C.X,a,C.h,!1)},
$S:20}
P.ko.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fg(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fg(C.n,b,C.h,!0))}},
$S:21}
P.kn.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.by(H.mI(b,"$ik")),t=this.a;u.v();)t.$2(a,H.I(u.gG(u)))},
$S:39}
P.jf.prototype={
geA:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.e3(u,"?",o)
s=u.length
if(t>=0){r=P.dk(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jJ("data",p,p,p,P.dk(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kw.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.kv.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nd(u,0,96,b)
return u},
$S:51}
P.kx.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.k9.prototype={
gdZ:function(){return this.c>0},
ge0:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
ge1:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
ge_:function(){return this.r<this.a.length},
gd7:function(){return this.b===4&&C.b.a2(this.a,"http")},
gd8:function(){return this.b===5&&C.b.a2(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd7())q=t.x="http"
else if(t.gd8()){t.x="https"
q="https"}else if(q===4&&C.b.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a2(t.a,r)){t.x=r
q=r}else{q=C.b.t(t.a,0,q)
t.x=q}return q},
geB:function(){var u=this.c,t=this.b+3
return u>t?C.b.t(this.a,t,u-1):""},
gcf:function(a){var u=this.c
return u>0?C.b.t(this.a,u,this.d):""},
gbs:function(a){var u,t=this
if(t.ge0()){u=t.d
if(typeof u!=="number")return u.B()
return P.dr(C.b.t(t.a,u+1,t.e),null,null)}if(t.gd7())return 80
if(t.gd8())return 443
return 0},
gej:function(a){return C.b.t(this.a,this.e,this.f)},
gcq:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.t(this.a,u+1,t):""},
gdY:function(){var u=this.r,t=this.a
return u<t.length?C.b.a9(t,u+1):""},
gcr:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.h
return new P.ep(P.mb(u.gcq(u)),[t,t])},
ep:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.n(b,"$iv",[P.h,null],"$av")
u=k.gby()
t=u==="file"
s=k.c
r=s>0?C.b.t(k.a,k.b+3,s):""
q=k.ge0()?k.gbs(k):j
s=k.c
if(s>0)p=C.b.t(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.t(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a2(o,"/"))o="/"+o
m=P.lk(j,0,0,b)
n=k.r
l=n<s.length?C.b.a9(s,n+1):j
return new P.cl(u,r,p,q,o,m,l)},
gE:function(a){var u=this.y
return u==null?this.y=C.b.gE(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.P(b).$ild&&this.a===b.i(0)},
i:function(a){return this.a},
$ild:1}
P.jJ.prototype={}
W.u.prototype={}
W.fw.prototype={
gn:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fx.prototype={
i:function(a){return String(a)}}
W.cw.prototype={$icw:1}
W.c_.prototype={$ic_:1}
W.bz.prototype={$ibz:1}
W.c0.prototype={
cC:function(a,b,c){if(c!=null)return a.getContext(b,P.p9(c))
return a.getContext(b)},
eE:function(a,b){return this.cC(a,b,null)},
$ic0:1}
W.cz.prototype={$icz:1}
W.bB.prototype={
gn:function(a){return a.length}}
W.cB.prototype={$icB:1}
W.fO.prototype={
gn:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cC.prototype={
gn:function(a){return a.length}}
W.fP.prototype={}
W.b9.prototype={}
W.ba.prototype={}
W.fQ.prototype={
gn:function(a){return a.length}}
W.fR.prototype={
gn:function(a){return a.length}}
W.fU.prototype={
gn:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fV.prototype={
i:function(a){return String(a)}}
W.dG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.n(c,"$iam",[P.ab],"$aam")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.am,P.ab]]},
$ay:function(){return[[P.am,P.ab]]},
$ik:1,
$ak:function(){return[[P.am,P.ab]]},
$ib:1,
$ab:function(){return[[P.am,P.ab]]},
$aH:function(){return[[P.am,P.ab]]}}
W.dH.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaK(a))+" x "+H.i(this.gaE(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iam)return!1
return a.left===u.gbr(b)&&a.top===u.gbu(b)&&this.gaK(a)===u.gaK(b)&&this.gaE(a)===u.gaE(b)},
gE:function(a){return W.mk(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(this.gaK(a)),C.e.gE(this.gaE(a)))},
gdB:function(a){return a.bottom},
gaE:function(a){return a.height},
gbr:function(a){return a.left},
gcs:function(a){return a.right},
gbu:function(a){return a.top},
gaK:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ab]}}
W.fW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.I(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.h]},
$ay:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.fX.prototype={
gn:function(a){return a.length}}
W.jH.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iN")},
k:function(a,b,c){var u
H.f(c,"$iN")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.js(this)
return new J.aw(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.N]},
$ak:function(){return[W.N]},
$ab:function(){return[W.N]}}
W.N.prototype={
gis:function(a){return new W.jK(a)},
gc4:function(a){return new W.jH(a,a.children)},
gdD:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lM
if(u==null){u=H.d([],[W.aE])
t=new W.e4(u)
C.a.h(u,W.mj(null))
C.a.h(u,W.ml())
$.lM=t
d=t}else d=u
u=$.lL
if(u==null){u=new W.fh(d)
$.lL=u
c=u}else{u.a=d
c=u}}if($.bs==null){u=document
t=u.implementation.createHTMLDocument("")
$.bs=t
$.l0=t.createRange()
t=$.bs.createElement("base")
H.f(t,"$icw")
t.href=u.baseURI
$.bs.head.appendChild(t)}u=$.bs
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibz")}u=$.bs
if(!!this.$ibz)s=u.body
else{s=u.createElement(a.tagName)
$.bs.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.l0.selectNodeContents(s)
r=$.l0.createContextualFragment(b)}else{s.innerHTML=b
r=$.bs.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bs.body
if(s==null?u!=null:s!==u)J.lD(s)
c.cD(r)
document.adoptNode(r)
return r},
ix:function(a,b,c){return this.af(a,b,c,null)},
eG:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iN:1,
ges:function(a){return a.tagName}}
W.h0.prototype={
$1:function(a){return!!J.P(H.f(a,"$iE")).$iN},
$S:24}
W.o.prototype={$io:1}
W.j.prototype={
ij:function(a,b,c,d){H.l(c,{func:1,args:[W.o]})
if(c!=null)this.f7(a,b,c,!1)},
f7:function(a,b,c,d){return a.addEventListener(b,H.cp(H.l(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aJ.prototype={$iaJ:1}
W.cE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ik:1,
$ak:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icE:1,
$aH:function(){return[W.aJ]}}
W.h5.prototype={
gn:function(a){return a.length}}
W.h9.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.he.prototype={
gn:function(a){return a.length}}
W.c4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iE")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ay:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic4:1,
$aH:function(){return[W.E]}}
W.bt.prototype={$ibt:1,
gdE:function(a){return a.data}}
W.c5.prototype={$ic5:1}
W.bd.prototype={$ibd:1}
W.dV.prototype={
i:function(a){return String(a)},
$idV:1}
W.hS.prototype={
gn:function(a){return a.length}}
W.cK.prototype={$icK:1}
W.hT.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
u:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.u(a,new W.hU(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aag:function(){return[P.h,null]},
$iv:1,
$av:function(){return[P.h,null]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hV.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
u:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.u(a,new W.hW(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aag:function(){return[P.h,null]},
$iv:1,
$av:function(){return[P.h,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aV.prototype={$iaV:1}
W.hX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.a7.prototype={$ia7:1}
W.at.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m2("No elements"))
if(t>1)throw H.c(P.m2("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.n(b,"$ik",[W.E],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,[H.bV(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.E]},
$ak:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
jh:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jj:function(a,b){var u,t
try{u=a.parentNode
J.na(u,b,a)}catch(t){H.ap(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eK(a):u},
im:function(a,b){return a.appendChild(H.f(b,"$iE"))},
hM:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iE")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ay:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aH:function(){return[W.E]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.ib.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ik:1,
$ak:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.il.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
u:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.u(a,new W.im(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aag:function(){return[P.h,null]},
$iv:1,
$av:function(){return[P.h,null]}}
W.im.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ip.prototype={
gn:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.iy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ik:1,
$ak:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ik:1,
$ak:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gn:function(a){return a.length}}
W.iC.prototype={
j:function(a,b){return a.getItem(H.I(b))},
k:function(a,b,c){a.setItem(b,c)},
u:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.d([],[P.h])
this.u(a,new W.iD(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iv:1,
$av:function(){return[P.h,P.h]}}
W.iD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aM.prototype={$iaM:1}
W.bi.prototype={$ibi:1}
W.ef.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=W.nq("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).as(0,new W.at(u))
return t}}
W.iJ.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.af(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaL(u)
s.toString
u=new W.at(s)
r=u.gaL(u)
t.toString
r.toString
new W.at(t).as(0,new W.at(r))
return t}}
W.iK.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.af(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaL(u)
t.toString
s.toString
new W.at(t).as(0,new W.at(s))
return t}}
W.d0.prototype={$id0:1}
W.b_.prototype={$ib_:1}
W.aN.prototype={$iaN:1}
W.iM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aH:function(){return[W.aN]}}
W.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ik:1,
$ak:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.iV.prototype={
gn:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.iZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b0]},
$ay:function(){return[W.b0]},
$ik:1,
$ak:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aH:function(){return[W.b0]}}
W.j_.prototype={
gn:function(a){return a.length}}
W.bP.prototype={}
W.jk.prototype={
i:function(a){return String(a)}}
W.jz.prototype={
gn:function(a){return a.length}}
W.bo.prototype={
giA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.K("deltaY is not supported"))},
giz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.K("deltaX is not supported"))},
$ibo:1}
W.d7.prototype={
hN:function(a,b){return a.requestAnimationFrame(H.cp(H.l(b,{func:1,ret:-1,args:[P.ab]}),1))},
fq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d8.prototype={$id8:1}
W.jI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iV")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.V]},
$ay:function(){return[W.V]},
$ik:1,
$ak:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aH:function(){return[W.V]}}
W.ez.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.P(b)
if(!u.$iam)return!1
return a.left===u.gbr(b)&&a.top===u.gbu(b)&&a.width===u.gaK(b)&&a.height===u.gaE(b)},
gE:function(a){return W.mk(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(a.width),C.e.gE(a.height))},
gaE:function(a){return a.height},
gaK:function(a){return a.width}}
W.jX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.eR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iE")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ay:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aH:function(){return[W.E]}}
W.ka.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ik:1,
$ak:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.ke.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aH:function(){return[W.aM]}}
W.jG.prototype={
u:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$id8")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$av:function(){return[P.h,P.h]}}
W.jK.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga3(this).length}}
W.jL.prototype={}
W.li.prototype={}
W.jM.prototype={}
W.jN.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:35}
W.bS.prototype={
eW:function(a){var u
if($.da.giU($.da)){for(u=0;u<262;++u)$.da.k(0,C.U[u],W.pk())
for(u=0;u<12;++u)$.da.k(0,C.q[u],W.pl())}},
aV:function(a){return $.n6().U(0,W.cD(a))},
at:function(a,b,c){var u=$.da.j(0,H.i(W.cD(a))+"::"+b)
if(u==null)u=$.da.j(0,"*::"+b)
if(u==null)return!1
return H.lq(u.$4(a,b,c,this))},
$iaE:1}
W.H.prototype={
gV:function(a){return new W.dL(a,this.gn(a),[H.bV(this,a,"H",0)])}}
W.e4.prototype={
aV:function(a){return C.a.dz(this.a,new W.i4(a))},
at:function(a,b,c){return C.a.dz(this.a,new W.i3(a,b,c))},
$iaE:1}
W.i4.prototype={
$1:function(a){return H.f(a,"$iaE").aV(this.a)},
$S:26}
W.i3.prototype={
$1:function(a){return H.f(a,"$iaE").at(this.a,this.b,this.c)},
$S:26}
W.eZ.prototype={
f2:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bx(0,new W.k7())
t=b.bx(0,new W.k8())
this.b.as(0,u)
s=this.c
s.as(0,C.x)
s.as(0,t)},
aV:function(a){return this.a.U(0,W.cD(a))},
at:function(a,b,c){var u=this,t=W.cD(a),s=u.c
if(s.U(0,H.i(t)+"::"+b))return u.d.il(c)
else if(s.U(0,"*::"+b))return u.d.il(c)
else{s=u.b
if(s.U(0,H.i(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.i(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaE:1}
W.k7.prototype={
$1:function(a){return!C.a.U(C.q,H.I(a))},
$S:27}
W.k8.prototype={
$1:function(a){return C.a.U(C.q,H.I(a))},
$S:27}
W.kg.prototype={
at:function(a,b,c){if(this.eO(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.kh.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.I(a))},
$S:20}
W.kf.prototype={
aV:function(a){var u=J.P(a)
if(!!u.$icT)return!1
u=!!u.$ip
if(u&&W.cD(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a2(b,"on"))return!1
return this.aV(a)},
$iaE:1}
W.dL.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd6(J.dt(u.a,t))
u.c=t
return!0}u.sd6(null)
u.c=s
return!1},
gG:function(a){return this.d},
sd6:function(a){this.d=H.C(a,H.r(this,0))},
$ibb:1}
W.aE.prototype={}
W.k5.prototype={$ipX:1}
W.fh.prototype={
cD:function(a){new W.kr(this).$2(a,null)},
b5:function(a,b){if(b==null)J.lD(a)
else b.removeChild(a)},
hS:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ne(a)
n=o.a.getAttribute("is")
H.f(a,"$iN")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ap(r)}t="element unprintable"
try{t=J.av(a)}catch(r){H.ap(r)}try{s=W.cD(a)
this.hR(H.f(a,"$iN"),b,p,t,s,H.f(o,"$iv"),H.I(n))}catch(r){if(H.ap(r) instanceof P.aT)throw r
else{this.b5(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b5(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aV(a)){o.b5(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b5(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nh(r)
H.I(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$id0)o.cD(a.content)},
$ipJ:1}
W.kr.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hS(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b5(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ap(s)
r=H.f(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iE")}},
$S:34}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f4.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
P.kb.prototype={
dW:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cA:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.P(a)
if(!!u.$iaB)return new Date(a.a)
if(!!u.$inU)throw H.c(P.jc("structured clone of RegExp"))
if(!!u.$iaJ)return a
if(!!u.$ic_)return a
if(!!u.$icE)return a
if(!!u.$ibt)return a
if(!!u.$icN||!!u.$ibL||!!u.$icK)return a
if(!!u.$iv){t=q.dW(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.u(a,new P.kd(p,q))
return p.a}if(!!u.$ib){t=q.dW(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iw(a,t)}throw H.c(P.jc("structured clone of other type"))},
iw:function(a,b){var u,t=J.dp(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cA(t.j(a,u)))
return r}}
P.kd.prototype={
$2:function(a,b){this.a.a[a]=this.b.cA(b)},
$S:7}
P.fe.prototype={$ibt:1,
gdE:function(a){return this.a}}
P.kE.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kc.prototype={}
P.h6.prototype={
gb3:function(){var u=this.b,t=H.au(u,"y",0),s=W.N
return new H.hD(new H.d6(u,H.l(new P.h7(),{func:1,ret:P.O,args:[t]}),[t]),H.l(new P.h8(),{func:1,ret:s,args:[t]}),[t,s])},
u:function(a,b){H.l(b,{func:1,ret:-1,args:[W.N]})
C.a.u(P.l9(this.gb3(),!1,W.N),b)},
k:function(a,b,c){var u
H.f(c,"$iN")
u=this.gb3()
J.nf(u.b.$1(J.fu(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aG(this.gb3().a)},
j:function(a,b){var u=this.gb3()
return u.b.$1(J.fu(u.a,b))},
gV:function(a){var u=P.l9(this.gb3(),!1,W.N)
return new J.aw(u,u.length,[H.r(u,0)])},
$ay:function(){return[W.N]},
$ak:function(){return[W.N]},
$ab:function(){return[W.N]}}
P.h7.prototype={
$1:function(a){return!!J.P(H.f(a,"$iE")).$iN},
$S:24}
P.h8.prototype={
$1:function(a){return H.q(H.f(a,"$iE"),"$iN")},
$S:33}
P.k0.prototype={
gcs:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.G(t)
return H.C(u+t,H.r(this,0))},
gdB:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.G(t)
return H.C(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.P(b)
if(!!u.$iam){t=p.a
if(t==u.gbr(b)){s=p.b
if(s==u.gbu(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.G(r)
q=H.r(p,0)
if(H.C(t+r,q)===u.gcs(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.G(t)
u=H.C(s+t,q)===u.gdB(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.du(s),q=t.b,p=J.du(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.G(o)
u=H.r(t,0)
o=C.d.gE(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.G(s)
u=C.d.gE(H.C(q+s,u))
return P.ol(P.jZ(P.jZ(P.jZ(P.jZ(0,r),p),o),u))}}
P.am.prototype={
gbr:function(a){return this.a},
gbu:function(a){return this.b},
gaK:function(a){return this.c},
gaE:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.ht.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibe")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$ay:function(){return[P.be]},
$ik:1,
$ak:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aH:function(){return[P.be]}}
P.bh.prototype={$ibh:1}
P.i6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibh")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bh]},
$ik:1,
$ak:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aH:function(){return[P.bh]}}
P.id.prototype={
gn:function(a){return a.length}}
P.cT.prototype={$icT:1}
P.iI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.I(c)
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gc4:function(a){return new P.h6(a,new W.at(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aE])
C.a.h(p,W.mj(null))
C.a.h(p,W.ml())
C.a.h(p,new W.kf())
c=new W.fh(new W.e4(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ix(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.at(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bk.prototype={$ibk:1}
P.j0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibk")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bk]},
$ik:1,
$ak:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$aH:function(){return[P.bk]}}
P.eJ.prototype={}
P.eK.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fc.prototype={}
P.fd.prototype={}
P.S.prototype={$ik:1,
$ak:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$io4:1}
P.fA.prototype={
gn:function(a){return a.length}}
P.fB.prototype={
j:function(a,b){return P.bv(a.get(H.I(b)))},
u:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga3:function(a){var u=H.d([],[P.h])
this.u(a,new P.fC(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.K("Not supported"))},
$aag:function(){return[P.h,null]},
$iv:1,
$av:function(){return[P.h,null]}}
P.fC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fD.prototype={
gn:function(a){return a.length}}
P.bZ.prototype={}
P.i7.prototype={
gn:function(a){return a.length}}
P.ex.prototype={}
P.dy.prototype={$idy:1}
P.e9.prototype={$ie9:1}
P.ce.prototype={
jo:function(a,b,c,d,e,f,g){var u,t=J.P(g)
if(!!t.$ibt)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pa(g))
return}if(!!t.$ic5)t=!0
else t=!1
if(t){this.i3(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
i3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a1:function(a,b,c){return a.uniform1f(b,c)},
bw:function(a,b,c){return a.uniform1i(b,c)},
X:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cw:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ey:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ez:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ice:1}
P.eb.prototype={$ieb:1}
P.eh.prototype={$ieh:1}
P.en.prototype={$ien:1}
P.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bv(a.item(b))},
k:function(a,b,c){H.f(c,"$iv")
throw H.c(P.K("Cannot assign element of immutable List."))},
F:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.v,,,]]},
$ik:1,
$ak:function(){return[[P.v,,,]]},
$ib:1,
$ab:function(){return[[P.v,,,]]},
$aH:function(){return[[P.v,,,]]}}
P.f1.prototype={}
P.f2.prototype={}
O.a5.prototype={
bC:function(a){var u=this
u.sfE(H.d([],[a]))
u.sdd(null)
u.sd9(null)
u.sde(null)},
cE:function(a,b,c){var u=this,t=H.au(u,"a5",0)
H.l(b,{func:1,ret:P.O,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.m,[P.k,t]]}
H.l(a,t)
H.l(c,t)
u.sdd(b)
u.sd9(a)
u.sde(c)},
bg:function(a,b){return this.cE(a,null,b)},
hq:function(a){var u
H.n(a,"$ik",[H.au(this,"a5",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eU:function(a,b){var u
H.n(b,"$ik",[H.au(this,"a5",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.aw(u,u.length,[H.r(u,0)])},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.au(s,"a5",0)
H.C(b,r)
r=[r]
if(H.F(s.hq(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eU(t,H.d([b],r))}},
sfE:function(a){this.a=H.n(a,"$ib",[H.au(this,"a5",0)],"$ab")},
sdd:function(a){this.b=H.l(a,{func:1,ret:P.O,args:[[P.k,H.au(this,"a5",0)]]})},
sd9:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.m,[P.k,H.au(this,"a5",0)]]})},
sde:function(a){H.l(a,{func:1,ret:-1,args:[P.m,[P.k,H.au(this,"a5",0)]]})},
$ik:1}
O.cJ.prototype={
gn:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.T():u},
aM:function(){var u=this.b
if(u!=null)u.I(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.e0()},
em:function(a){var u=this.a
if(a==null)C.a.h(u,V.e0())
else C.a.h(u,a)
this.aM()},
cp:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbL:function(a){this.a=H.n(a,"$ib",[V.as],"$ab")}}
E.fG.prototype={}
E.ar.prototype={
cU:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.v();){t=u.d
if(t.f==null)t.cU()}},
sbz:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().a_(0,s.ged())
u=s.c
if(u!=null)u.gq().h(0,s.ged())
t=new D.M("shape",r,s.c,[F.ai])
t.b=!0
s.am(t)}},
scu:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gq().a_(0,s.gef())
u=s.f
s.f=a
if(a!=null)a.gq().h(0,s.gef())
s.cU()
t=new D.M("technique",u,s.f,[O.cf])
t.b=!0
s.am(t)}},
sba:function(a){var u,t,s=this
if(!J.W(s.r,a)){u=s.r
if(u!=null)u.gq().a_(0,s.geb())
if(a!=null)a.gq().h(0,s.geb())
s.r=a
t=new D.M("mover",u,a,[U.ad])
t.b=!0
s.am(t)}},
ao:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b_(0,b,s):null
if(!J.W(q,s.x)){u=s.x
s.x=q
t=new D.M("matrix",u,q,[V.as])
t.b=!0
s.am(t)}r=s.f
if(r!=null)r.ao(0,b)
for(r=s.y.a,r=new J.aw(r,r.length,[H.r(r,0)]);r.v();)r.d.ao(0,b)},
aG:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.w(0,s.ga0(s)))
s.aM()
a.en(t.f)
s=a.dy
u=(s&&C.a).gau(s)
if(u!=null&&t.d!=null)u.eo(a,t)
for(s=t.y.a,s=new J.aw(s,s.length,[H.r(s,0)]);s.v();)s.d.aG(a)
a.ek()
a.dx.cp()},
gq:function(){var u=this.z
return u==null?this.z=D.T():u},
am:function(a){var u=this.z
if(u!=null)u.I(a)},
Z:function(){return this.am(null)},
ee:function(a){H.f(a,"$iB")
this.e=null
this.am(a)},
j6:function(){return this.ee(null)},
eg:function(a){this.am(H.f(a,"$iB"))},
j7:function(){return this.eg(null)},
ec:function(a){this.am(H.f(a,"$iB"))},
j5:function(){return this.ec(null)},
ea:function(a){this.am(H.f(a,"$iB"))},
j2:function(){return this.ea(null)},
j1:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ik",[E.ar],"$ak")
for(u=b.length,t=this.ge9(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
j4:function(a,b){var u,t
H.n(b,"$ik",[E.ar],"$ak")
for(u=b.gV(b),t=this.ge9();u.v();)u.gG(u).gq().a_(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seV:function(a,b){this.y=H.n(b,"$ia5",[E.ar],"$aa5")},
$icM:1}
E.ih.prototype={
eR:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cJ()
t=[V.as]
u.sbL(H.d([],t))
u.b=null
u.gq().h(0,new E.ii(s))
s.cy=u
u=new O.cJ()
u.sbL(H.d([],t))
u.b=null
u.gq().h(0,new E.ij(s))
s.db=u
u=new O.cJ()
u.sbL(H.d([],t))
u.b=null
u.gq().h(0,new E.ik(s))
s.dx=u
s.si2(H.d([],[O.cf]))
u=s.dy;(u&&C.a).h(u,null)
s.shY(new H.a2([P.h,A.cU]))},
gjg:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.w(0,u.ga0(u))
s=u}return s},
gel:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjg()
u=t.dx
u=t.ch=s.w(0,u.ga0(u))
s=u}return s},
geC:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga0(s)
u=t.dx
u=t.cx=s.w(0,u.ga0(u))
s=u}return s},
en:function(a){var u=this.dy,t=a==null?(u&&C.a).gau(u):a;(u&&C.a).h(u,t)},
ek:function(){var u=this.dy
if(u.length>1)u.pop()},
dw:function(a){var u=a.b
if(u.length===0)throw H.c(P.A("May not cache a shader with no name."))
if(this.fr.bo(0,u))throw H.c(P.A('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si2:function(a){this.dy=H.n(a,"$ib",[O.cf],"$ab")},
shY:function(a){this.fr=H.n(a,"$iv",[P.h,A.cU],"$av")}}
E.ii.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:8}
E.ij.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.ik.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:8}
E.ej.prototype={
cM:function(a){H.f(a,"$iB")
this.eq()},
cL:function(){return this.cM(null)},
giO:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.lK(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aB(s,!1)
return u/r},
dh:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.G(r)
u=C.e.ce(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.e.ce(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m5(C.o,s.gjk())}},
eq:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.iU(this),{func:1,ret:-1,args:[P.ab]})
C.E.fq(u)
C.E.hN(u,W.mA(t,P.ab))}},
ji:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dh()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aB(r,!1)
s.y=P.lK(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aM()
r=s.db
C.a.sn(r.a,0)
r.aM()
r=s.dx
C.a.sn(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aG(p.e)}s=p.z
if(s!=null)s.I(null)}catch(q){u=H.ap(q)
t=H.cs(q)
P.ly("Error: "+H.i(u))
P.ly("Stack: "+H.i(t))
throw H.c(u)}}}
E.iU.prototype={
$1:function(a){var u
H.mK(a)
u=this.a
if(u.ch){u.ch=!1
u.ji()}},
$S:61}
Z.eu.prototype={$ipD:1}
Z.dz.prototype={
aA:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ap(s)
t=P.A('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.ev.prototype={$ipE:1}
Z.bA.prototype={
ag:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aA:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aA(a)},
ex:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aG:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
eh:function(a){this.aA(a)
this.aG(a)
this.ex(a)},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfA:function(a){this.b=H.n(a,"$ib",[Z.bI],"$ab")},
$io1:1}
Z.dA.prototype={
sfJ:function(a){this.a=H.n(a,"$iv",[P.h,Z.bA],"$av")},
$io1:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cb(this.c)+"'")+"]"}}
Z.bn.prototype={
gcF:function(a){var u=this.a,t=(u&$.b5().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=2
if((u&$.bY().a)!==0)t+=3
if((u&$.bX().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.cv().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
io:function(a){var u,t=$.b5(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ds()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0)if(u===a)return t
return $.n4()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.b5().a)!==0)C.a.h(u,"Pos")
if((t&$.b4().a)!==0)C.a.h(u,"Norm")
if((t&$.b3().a)!==0)C.a.h(u,"Binm")
if((t&$.bx().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bX().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.cv().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fJ.prototype={}
D.c2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.l(b,u)
if(this.a==null)this.sak(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a_:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).a_(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).a_(u,b)||t}return t},
I:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.u(P.l9(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h3(q))
u=r.b
if(u!=null){r.saS(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.u(u,new D.h4(q))}return!0},
iF:function(){return this.I(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.I(u)}}},
sak:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saS:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h3.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.h4.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.B.prototype={}
D.c6.prototype={}
D.c7.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dB.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dS.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hs.prototype={
jc:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j8:function(a){this.c=a.b
this.d.a_(0,a.a)
return!1},
shG:function(a){this.d=H.n(a,"$im1",[P.m],"$am1")}}
X.dW.prototype={}
X.hz.prototype={
b2:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.al(o.a+n*m,o.b+u*t)
t=q.a.gaX()
r=new X.bu(a,V.bN(),q.x,t,s)
r.b=!0
q.z=new P.aB(p,!1)
q.x=s
return r},
co:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eF()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.b2(a,b))
return!0},
jd:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaX()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cL(new V.X(s*r,q*p),u,t)
t.b=!0
n.I(t)
return!0},
hf:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dW(c,r.a.gaX(),b)
s.b=!0
t.I(s)
r.y=new P.aB(u,!1)
r.x=V.bN()}}
X.aD.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bu.prototype={}
X.hY.prototype={
bI:function(a,b,c){var u=this,t=new P.aB(Date.now(),!1),s=u.a.gaX(),r=new X.bu(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
co:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.I(this.bI(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eF()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.I(u.bI(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.I(this.bI(a,b,!1))
return!0},
je:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaX()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cL(new V.X(t*s,r*q),u,b)
u.b=!0
o.I(u)
return!0},
gdG:function(){var u=this.b
return u==null?this.b=D.T():u},
gcz:function(){var u=this.c
return u==null?this.c=D.T():u},
ge7:function(){var u=this.d
return u==null?this.d=D.T():u}}
X.cL.prototype={}
X.ic.prototype={}
X.el.prototype={}
X.iY.prototype={
b2:function(a,b){var u,t,s,r,q=this
H.n(a,"$ib",[V.al],"$ab")
u=new P.aB(Date.now(),!1)
t=a.length>0?a[0]:V.bN()
s=q.a.gaX()
r=new X.el(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jb:function(a){var u
H.n(a,"$ib",[V.al],"$ab")
u=this.b
if(u==null)return!1
u.I(this.b2(a,!0))
return!0},
j9:function(a){var u
H.n(a,"$ib",[V.al],"$ab")
u=this.c
if(u==null)return!1
u.I(this.b2(a,!0))
return!0},
ja:function(a){var u
H.n(a,"$ib",[V.al],"$ab")
u=this.d
if(u==null)return!1
u.I(this.b2(a,!1))
return!0}}
X.eq.prototype={
gaX:function(){var u=this.a,t=C.i.gdD(u).c
t.toString
u=C.i.gdD(u).d
u.toString
return V.m_(0,0,t,u)},
d2:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dS(u,new X.aD(t,a.altKey,a.shiftKey))},
aT:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
c0:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aD(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.al(s-q,r-u)},
b4:function(a){return new V.X(a.movementX,a.movementY)},
bX:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.al])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.e.an(r.pageX)
C.e.an(r.pageY)
p=o.left
C.e.an(r.pageX)
C.a.h(n,new V.al(q-p,C.e.an(r.pageY)-o.top))}return n},
aw:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dB(u,new X.aD(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h9:function(a){this.f=!0},
fY:function(a){this.f=!1},
h3:function(a){H.f(a,"$ia7")
if(H.F(this.f)&&this.bM(a))a.preventDefault()},
hd:function(a){var u
H.f(a,"$ibd")
if(!H.F(this.f))return
u=this.d2(a)
this.b.jc(u)},
hb:function(a){var u
H.f(a,"$ibd")
if(!H.F(this.f))return
u=this.d2(a)
this.b.j8(u)},
hh:function(a){var u,t,s,r,q=this
H.f(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aT(a)
if(H.F(q.x)){t=q.aw(a)
s=q.b4(a)
if(q.d.co(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aw(a)
r=q.ay(a)
if(q.c.co(t,r))a.preventDefault()},
hl:function(a){var u,t,s,r=this
H.f(a,"$ia7")
r.aT(a)
u=r.aw(a)
if(H.F(r.x)){t=r.b4(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.ay(a)
if(r.c.bc(u,s))a.preventDefault()},
h7:function(a){var u,t,s,r=this
H.f(a,"$ia7")
if(!r.bM(a)){r.aT(a)
u=r.aw(a)
if(H.F(r.x)){t=r.b4(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.ay(a)
if(r.c.bc(u,s))a.preventDefault()}},
hj:function(a){var u,t,s,r=this
H.f(a,"$ia7")
r.aT(a)
u=r.aw(a)
if(H.F(r.x)){t=r.b4(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.ay(a)
if(r.c.bb(u,s))a.preventDefault()},
h5:function(a){var u,t,s,r=this
H.f(a,"$ia7")
if(!r.bM(a)){r.aT(a)
u=r.aw(a)
if(H.F(r.x)){t=r.b4(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.ay(a)
if(r.c.bb(u,s))a.preventDefault()}},
hn:function(a){var u,t,s=this
H.f(a,"$ibo")
s.aT(a)
u=new V.X((a&&C.D).giz(a),C.D.giA(a)).A(0,180)
if(H.F(s.x)){if(s.d.jd(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.ay(a)
if(s.c.je(u,t))a.preventDefault()},
hp:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aw(s.y)
t=s.ay(s.y)
s.d.hf(u,t,r)}},
hC:function(a){var u,t=this
H.f(a,"$ib1")
t.a.focus()
t.f=!0
t.c0(a)
u=t.bX(a)
if(t.e.jb(u))a.preventDefault()},
hy:function(a){var u
H.f(a,"$ib1")
this.c0(a)
u=this.bX(a)
if(this.e.j9(u))a.preventDefault()},
hA:function(a){var u
H.f(a,"$ib1")
this.c0(a)
u=this.bX(a)
if(this.e.ja(u))a.preventDefault()},
sfs:function(a){this.z=H.n(a,"$ib",[[P.cZ,P.R]],"$ab")}}
D.bE.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.T():u},
av:function(a){var u
H.f(a,"$iB")
u=this.r
if(u!=null)u.I(a)},
eZ:function(){return this.av(null)},
$iaf:1,
$icM:1}
D.af.prototype={$icM:1}
D.dT.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.T():u},
av:function(a){var u=this.x
if(u!=null)u.I(a)},
dc:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.I(a)},
he:function(){return this.dc(null)},
hs:function(a){var u,t,s
H.n(a,"$ik",[D.af],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.eX(s))return!1}return!0},
fS:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gda(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bE)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c2()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c6([n])
n.b=!0
this.av(n)},
hw:function(a,b){var u,t,s,r=D.af
H.n(b,"$ik",[r],"$ak")
for(u=b.gV(b),t=this.gda();u.v();){s=u.gG(u)
C.a.a_(this.e,s)
s.gq().a_(0,t)}r=new D.c7([r])
r.b=!0
this.av(r)},
eX:function(a){var u=C.a.U(this.e,a)
return u},
sfp:function(a){this.e=H.n(a,"$ib",[D.bE],"$ab")},
shD:function(a){this.f=H.n(a,"$ib",[D.e7],"$ab")},
si0:function(a){this.r=H.n(a,"$ib",[D.ed],"$ab")},
$ak:function(){return[D.af]},
$aa5:function(){return[D.af]}}
D.e7.prototype={$iaf:1,$icM:1}
D.ed.prototype={$iaf:1,$icM:1}
V.a9.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.ac.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.h2.prototype={}
V.e_.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.D])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e_))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.D],o=V.cq(H.d([q.a,q.d,q.r],p),3,0),n=V.cq(H.d([q.b,q.e,q.x],p),3,0),m=V.cq(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.as.prototype={
a4:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
e5:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.e0()
u=1/b1
t=-n
s=-a0
return V.bg((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bg(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aF(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
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
D:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.cq(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cq(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cq(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cq(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
M:function(){return this.D("")}}
V.al.prototype={
K:function(a,b){return new V.al(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.aF.prototype={
B:function(a,b){return new V.aF(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.aF(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.e8.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.ea.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ea))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.X.prototype={
cj:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.X(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.mc
return u==null?$.mc=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.X(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.U.prototype={
cj:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.U(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b8:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.U(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.U(-this.a,-this.b,-this.c)},
A:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.bm()
return new V.U(this.a/b,this.b/b,this.c/b)},
e6:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fK.prototype={
bD:function(a){var u=V.pC(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.T():u},
O:function(a){var u=this.y
if(u!=null)u.I(a)},
scB:function(a,b){},
scl:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.M("maximumLocation",s,t.b,[P.D])
s.b=!0
t.O(s)}},
scn:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.M("minimumLocation",s,t.c,[P.D])
s.b=!0
t.O(s)}},
sab:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.M("location",u,b,[P.D])
u.b=!0
t.O(u)}},
scm:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.M("maximumVelocity",r,a,[P.D])
r.b=!0
s.O(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.M("velocity",t,a,[P.D])
t.b=!0
u.O(t)}},
sc7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.M("dampening",u,a,[P.D])
u.b=!0
this.O(u)}},
ao:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sab(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dE.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.T():u},
b_:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dE))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cG.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.T():u},
O:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.I(a)},
a5:function(){return this.O(null)},
fQ:function(a,b){var u,t,s,r,q,p,o,n=U.ad
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaN(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.l(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c6([n])
n.b=!0
this.O(n)},
hu:function(a,b){var u,t,s=U.ad
H.n(b,"$ik",[s],"$ak")
for(u=b.gV(b),t=this.gaN();u.v();)u.gG(u).gq().a_(0,t)
s=new D.c7([s])
s.b=!0
this.O(s)},
b_:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aw(r,r.length,[H.r(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.b_(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.e0():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.ad]},
$aa5:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.er.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.T():u},
O:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.I(a)},
a5:function(){return this.O(null)},
b6:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdG().h(0,u.gbN())
u.a.c.ge7().h(0,u.gbP())
u.a.c.gcz().h(0,u.gbR())
return!0},
bO:function(a){var u=this
H.f(a,"$iB")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ibu")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.K(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=n.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.K(0,a.y)
u=new V.X(t.a,t.b).w(0,2).A(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.G(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.X(s.a,s.b).w(0,2).A(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.R()
p=n.e
if(typeof p!=="number")return H.G(p)
o=n.z
if(typeof o!=="number")return H.G(o)
s.sab(0,-q*p+o)
n.b.sW(0)
t=t.K(0,a.z)
n.Q=new V.X(t.a,t.b).w(0,2).A(0,u.gac())}n.a5()},
bS:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.H(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.G(s)
u.sW(t*10*s)
r.a5()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.ao(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bg(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iad:1}
U.es.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.T():u},
O:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.I(a)},
a5:function(){return this.O(null)},
b6:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdG().h(0,s.gbN())
s.a.c.ge7().h(0,s.gbP())
s.a.c.gcz().h(0,s.gbR())
u=s.a.d
t=u.f
u=t==null?u.f=D.T():t
u.h(0,s.gfF())
u=s.a.d
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.gfH())
u=s.a.e
t=u.b
u=t==null?u.b=D.T():t
u.h(0,s.gi9())
u=s.a.e
t=u.d
u=t==null?u.d=D.T():t
u.h(0,s.gi7())
u=s.a.e
t=u.c
u=t==null?u.c=D.T():t
u.h(0,s.gi5())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.X(u,t)},
bO:function(a){var u=this
a=H.q(H.f(a,"$iB"),"$ibu")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ibu")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.K(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.K(0,a.y)
u=n.ar(new V.X(t.a,t.b).w(0,2).A(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ar(new V.X(s.a,s.b).w(0,2).A(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sab(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.ar(new V.X(t.a,t.b).w(0,2).A(0,u.gac()))}n.a5()},
bS:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sW(-t*10*u)
r.a5()}},
fG:function(a){var u=this
if(H.q(H.f(a,"$iB"),"$idW").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fI:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$ibu")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ar(new V.X(s.a,s.b).w(0,2).A(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sab(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.ar(new V.X(t.a,t.b).w(0,2).A(0,u.gac()))
n.a5()},
ia:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i8:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.f(a,"$iB"),"$iel")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.K(0,a.y)
u=new V.X(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.K(0,a.y)
u=n.ar(new V.X(t.a,t.b).w(0,2).A(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.ar(new V.X(s.a,s.b).w(0,2).A(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sab(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sab(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.ar(new V.X(t.a,t.b).w(0,2).A(0,u.gac()))}n.a5()},
i6:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sW(-t*10*u)
r.a5()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.ao(0,u)
r.b.ao(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bg(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.w(0,V.bg(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
U.et.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.T():u},
O:function(a){var u=this.r
if(u!=null)u.I(a)},
b6:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.T():t
t=r.gfL()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.T():s).h(0,t)
return!0},
fM:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.W(q.b,q.a.b.c))return
H.q(a,"$icL")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.M("zoom",u,r,[P.D])
u.b=!0
q.O(u)}},
b_:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bg(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iad:1}
M.dI.prototype={
aP:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.I(a)},
f_:function(){return this.aP(null)},
h_:function(a,b){var u,t,s,r,q,p,o,n=E.ar
H.n(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaO(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sak(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sak(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c6([n])
n.b=!0
this.aP(n)},
h1:function(a,b){var u,t,s=E.ar
H.n(b,"$ik",[s],"$ak")
for(u=b.gV(b),t=this.gaO();u.v();)u.gG(u).gq().a_(0,t)
s=new D.c7([s])
s.b=!0
this.aP(s)},
gq:function(){var u=this.y
return u==null?this.y=D.T():u},
aG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.en(f.d)
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
if(typeof s!=="number")return H.G(s)
o=C.e.an(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.e.an(p*r)
p=C.e.an(q.c*s)
a.c=p
q=C.e.an(q.d*r)
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
i=V.bg(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.em(i)
t=$.lU
if(t==null){t=V.lQ(V.lW(),V.lf(),V.mg())
$.lU=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.w(0,h)}a.db.em(h)
for(u=f.e.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.v();)u.d.ao(0,a)
for(u=f.e.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.v();)u.d.aG(a)
f.b.toString
a.cy.cp()
a.db.cp()
f.c.toString
a.ek()},
sfi:function(a,b){this.e=H.n(b,"$ia5",[E.ar],"$aa5")},
$ipK:1}
A.dx.prototype={}
A.fz.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ak.prototype={
gap:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.ak))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dN.prototype={}
A.dZ.prototype={
eQ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aj("")
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
A.oT(c0,u)
A.oV(c0,u)
A.oU(c0,u)
A.oX(c0,u)
A.oY(c0,u)
A.oW(c0,u)
A.oZ(c0,u)
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
b5.e4(0,s.charCodeAt(0)==0?s:s,A.oS(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.q(b5.y.J(0,"invViewMat"),"$ian")
if(t)b5.dy=H.q(b5.y.J(0,"objMat"),"$ian")
if(r)b5.fr=H.q(b5.y.J(0,"viewObjMat"),"$ian")
b5.fy=H.q(b5.y.J(0,"projViewObjMat"),"$ian")
if(c0.ry)b5.k1=H.q(b5.y.J(0,"txt2DMat"),"$id4")
if(c0.x1)b5.k2=H.q(b5.y.J(0,"txtCubeMat"),"$ian")
if(c0.x2)b5.k3=H.q(b5.y.J(0,"colorMat"),"$ian")
b5.sfc(H.d([],[A.an]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.J(0,"bendMatCount"),"$iaO")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.A(b7+q+b8));(s&&C.a).h(s,H.q(m,"$ian"))}}t=c0.a
if(t.a)b5.r2=H.q(b5.y.J(0,"emissionClr"),"$iZ")
if(t.b)b5.rx=H.q(b5.y.J(0,"emissionTxt"),"$iao")
t=c0.b
if(t.a)b5.x1=H.q(b5.y.J(0,"ambientClr"),"$iZ")
if(t.b)b5.x2=H.q(b5.y.J(0,"ambientTxt"),"$iao")
t=c0.c
if(t.a)b5.y2=H.q(b5.y.J(0,"diffuseClr"),"$iZ")
if(t.b)b5.aD=H.q(b5.y.J(0,"diffuseTxt"),"$iao")
t=c0.d
if(t.a)b5.dI=H.q(b5.y.J(0,"invDiffuseClr"),"$iZ")
if(t.b)b5.dJ=H.q(b5.y.J(0,"invDiffuseTxt"),"$iao")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dM=H.q(b5.y.J(0,"shininess"),"$iae")
if(s)b5.dK=H.q(b5.y.J(0,"specularClr"),"$iZ")
if(t.b)b5.dL=H.q(b5.y.J(0,"specularTxt"),"$iao")}if(c0.f.b)b5.dN=H.q(b5.y.J(0,"bumpTxt"),"$iao")
if(c0.cy){b5.dO=H.q(b5.y.J(0,"envSampler"),"$ici")
t=c0.r
if(t.a)b5.dP=H.q(b5.y.J(0,"reflectClr"),"$iZ")
if(t.b)b5.dQ=H.q(b5.y.J(0,"reflectTxt"),"$iao")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dR=H.q(b5.y.J(0,"refraction"),"$iae")
if(s)b5.dS=H.q(b5.y.J(0,"refractClr"),"$iZ")
if(t.b)b5.dT=H.q(b5.y.J(0,"refractTxt"),"$iao")}}t=c0.y
if(t.a)b5.dU=H.q(b5.y.J(0,"alpha"),"$iae")
if(t.b)b5.dV=H.q(b5.y.J(0,"alphaTxt"),"$iao")
t=P.m
s=[t,A.aO]
b5.sfo(new H.a2(s))
b5.sf0(new H.a2([t,[P.b,A.cg]]))
b5.shE(new H.a2(s))
b5.shF(new H.a2([t,[P.b,A.ch]]))
b5.si_(new H.a2(s))
b5.sf1(new H.a2([t,[P.b,A.cj]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aj()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.A(b7+g+b8))
H.q(m,"$iZ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.A(b7+g+b8))
H.q(f,"$iZ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.A(b7+g+b8))
H.q(e,"$iZ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.A(b7+g+b8))
H.q(m,"$iZ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.A(b7+g+b8))
H.q(f,"$iZ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.A(b7+o+b8))
H.q(e,"$iao")
a=e}else a=b6
C.a.h(h,new A.cg(b,c,d,m,f,a))}b5.c9.k(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.A(b7+o+b8))
q.k(0,j,H.f(m,"$iaO"))}for(t=c0.Q,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.A(b7+o+b8))
H.q(m,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.A(b7+o+b8))
H.q(f,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.A(b7+o+b8))
H.q(e,"$iZ")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.A(b7+o+b8))
H.q(a0,"$id4")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.A(b7+o+b8))
H.q(a0,"$ici")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.A(b7+o+b8))
H.q(a0,"$ici")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.A(b7+o+b8))
H.q(a2,"$ibQ")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.A(b7+o+b8))
H.q(a0,"$iae")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.A(b7+o+b8))
H.q(a2,"$iae")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.A(b7+o+b8))
H.q(a5,"$iae")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ch(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cb.k(0,j,h)
q=b5.ca
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.A(b7+o+b8))
q.k(0,j,H.f(m,"$iaO"))}for(t=c0.ch,s=t.length,r=[A.cj],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.A(b7+o+b8))
H.q(m,"$iZ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.A(b7+o+b8))
H.q(f,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.A(b7+o+b8))
H.q(e,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.A(b7+o+b8))
H.q(a0,"$iZ")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.A(b7+o+b8))
H.q(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.A(b7+o+b8))
H.q(a5,"$iZ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.A(b7+o+b8))
H.q(a9,"$iae")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.A(b7+o+b8))
H.q(b0,"$iae")
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
if(a2==null)H.z(P.A(b7+g+b8))
H.q(a2,"$ibQ")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.A(b7+g+b8))
H.q(a2,"$iae")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.A(b7+g+b8))
H.q(a5,"$iae")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.A(b7+g+b8))
H.q(a2,"$iae")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.A(b7+g+b8))
H.q(a5,"$iae")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.A(b7+g+b8))
H.q(a9,"$iae")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.A(b7+g+b8))
H.q(a2,"$iao")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.A(b7+o+b8))
H.q(a2,"$iao")
a3=a2}else a3=b6
C.a.h(h,new A.cj(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cd.k(0,j,h)
q=b5.cc
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.A(b7+o+b8))
q.k(0,j,H.f(m,"$iaO"))}}},
al:function(a,b){if(b!=null&&b.d)a.eH(b)},
hU:function(a,b){},
sfc:function(a){this.r1=H.n(a,"$ib",[A.an],"$ab")},
sfo:function(a){this.c8=H.n(a,"$iv",[P.m,A.aO],"$av")},
sf0:function(a){this.c9=H.n(a,"$iv",[P.m,[P.b,A.cg]],"$av")},
shE:function(a){this.ca=H.n(a,"$iv",[P.m,A.aO],"$av")},
shF:function(a){this.cb=H.n(a,"$iv",[P.m,[P.b,A.ch]],"$av")},
si_:function(a){this.cc=H.n(a,"$iv",[P.m,A.aO],"$av")},
sf1:function(a){this.cd=H.n(a,"$iv",[P.m,[P.b,A.cj]],"$av")}}
A.aH.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aK.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aL.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hI.prototype={
i:function(a){return this.aD}}
A.cg.prototype={}
A.ch.prototype={}
A.cj.prototype={}
A.cU.prototype={
cJ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e4:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d3(b,35633)
r.f=r.d3(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.F(H.lq(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.A("Failed to link shader: "+H.i(s)))}r.hV()
r.hX()},
aA:function(a){a.a.useProgram(this.r)
this.x.iG()},
d3:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lq(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.A("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hV:function(){var u,t,s,r=this,q=H.d([],[A.dx]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dx(p,t.name,s))}r.x=new A.fz(q)},
hX:function(){var u,t,s,r=this,q=H.d([],[A.em]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iy(t.type,t.size,t.name,s))}r.y=new A.j9(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.aO(u,b,c)
else return A.lc(u,this.r,b,a,c)},
fl:function(a,b,c){var u=this.a
if(a===1)return new A.ao(u,b,c)
else return A.lc(u,this.r,b,a,c)},
fm:function(a,b,c){var u=this.a
if(a===1)return new A.ci(u,b,c)
else return A.lc(u,this.r,b,a,c)},
bm:function(a,b){return new P.eE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iy:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.j5(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.bQ(u.a,c,d)
case 35667:return new A.j6(u.a,c,d)
case 35668:return new A.j7(u.a,c,d)
case 35669:return new A.j8(u.a,c,d)
case 35674:return new A.ja(u.a,c,d)
case 35675:return new A.d4(u.a,c,d)
case 35676:return new A.an(u.a,c,d)
case 35678:return u.fl(b,c,d)
case 35680:return u.fm(b,c,d)
case 35670:throw H.c(u.bm("BOOL",c))
case 35671:throw H.c(u.bm("BOOL_VEC2",c))
case 35672:throw H.c(u.bm("BOOL_VEC3",c))
case 35673:throw H.c(u.bm("BOOL_VEC4",c))
default:throw H.c(P.A("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.em.prototype={}
A.j9.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
J:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.A("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aO.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sic:function(a){H.n(a,"$ib",[P.m],"$ab")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.bQ.prototype={
bf:function(a){return C.c.cw(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d4.prototype={
a8:function(a){var u=new Float32Array(H.cm(H.n(a,"$ib",[P.D],"$ab")))
C.c.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.an.prototype={
a8:function(a){var u=new Float32Array(H.cm(H.n(a,"$ib",[P.D],"$ab")))
C.c.ez(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ao.prototype={
eH:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ci.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kt.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ck(s.b,b).ck(s.d.ck(s.c,b),c)
s=new V.aF(r.a,r.b,r.c)
if(!J.W(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Z()}a.sjp(r.A(0,Math.sqrt(r.H(r))))
s=1-b
u=1-c
u=new V.e8(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.W(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Z()}},
$S:43}
F.a8.prototype={
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bm()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e6())return
return s.A(0,Math.sqrt(s.H(s)))},
fh:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.U(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.H(r)))
r=t.K(0,q)
r=new V.U(r.a,r.b,r.c)
r=s.b8(r.A(0,Math.sqrt(r.H(r))))
return r.A(0,Math.sqrt(r.H(r)))},
c3:function(){var u,t=this
if(t.d!=null)return!0
u=t.f9()
if(u==null){u=t.fh()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bm()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e6())return
return s.A(0,Math.sqrt(s.H(s)))},
fg:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.K(0,g)
l=new V.U(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.H(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.K(0,g)
l=new V.aF(l.a*p,l.b*p,l.c*p).B(0,g).K(0,j)
l=new V.U(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.H(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.H(l)))
l=o.b8(q)
l=l.A(0,Math.sqrt(l.H(l))).b8(o)
q=l.A(0,Math.sqrt(l.H(l)))}return q},
c2:function(){var u,t=this
if(t.e!=null)return!0
u=t.f8()
if(u==null){u=t.fg()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ai(J.av(s.e),0)+", "+C.b.ai(J.av(t.b.e),0)+", "+C.b.ai(J.av(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.ax.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ai(J.av(u.e),0)+", "+C.b.ai(J.av(this.b.e),0)},
M:function(){return this.D("")}}
F.bM.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ai(J.av(u.e),0)},
M:function(){return this.D("")}}
F.ai.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.T():u},
iZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.S()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){r=g[s]
h.a.h(0,r.aY())}h.a.S()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
F.nH(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.ny(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.S()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.S()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dK(l,k,i)}g=h.e
if(g!=null)g.aI(0)},
aC:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aC()||!1
if(!t.a.aC())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
aW:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aW()||!1
if(!t.a.aW())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
bn:function(){var u=this.e
if(u!=null)++u.d
this.a.bn()
u=this.e
if(u!=null)u.aI(0)
return!0},
dC:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b5()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.b4().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.bX().a)!==0)++s
if((t&$.ds().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.bw().a)!==0)++s
r=a3.gcF(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.D
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dz])
for(n=0,m=0;m<s;++m){l=a3.io(m)
k=l.gcF(l)
C.a.k(o,m,new Z.dz(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iW(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.n(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cm(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bA(new Z.eu(a0,f),o,a3)
e.sfA(H.d([],[Z.bI]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.S()
C.a.h(d,c.e)}b=Z.lh(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.S()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.S()
C.a.h(d,c.e)}b=Z.lh(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.S()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.S()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.S()
C.a.h(d,c.e)}b=Z.lh(u,34963,H.n(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.D(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.D(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.D(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.D(t))}return C.a.m(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.I(null)},
$icW:1}
F.cW.prototype={}
F.ir.prototype={
ik:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.a3],"$ab")
u=H.d([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dK(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dK(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dK(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dK(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
aC:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c3())s=!1
return s},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].c2())s=!1
return s},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(a))
return C.a.m(r,"\n")},
M:function(){return this.D("")},
sft:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")}}
F.is.prototype={
az:function(a,b,c){var u,t=this.a
t.a.h(0,b)
t.a.h(0,c)
t=new F.ax()
if(b==null)H.z(P.A("May not create a line with a null start vertex."))
if(c==null)H.z(P.A("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.z(P.A("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.z(P.A("May not create a line with vertices attached to different shapes."))
t.a=b
C.a.h(b.c.b,t)
t.b=c
C.a.h(c.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.Z()
return t},
gn:function(a){return this.b.length},
i:function(a){return this.M()},
D:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].D(a+(""+u+". ")))}return C.a.m(s,"\n")},
M:function(){return this.D("")},
sfB:function(a){this.b=H.n(a,"$ib",[F.ax],"$ab")}}
F.it.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(a))
return C.a.m(r,"\n")},
M:function(){return this.D("")},
sbW:function(a){this.b=H.n(a,"$ib",[F.bM],"$ab")}}
F.a3.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.lg(u.cx,r,o,t,s,q,p,a,n)},
aY:function(){return this.c6(null)},
se8:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.H(a)))
if(!J.W(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
saB:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.H(a)))
if(!J.W(this.x,a)){this.x=a
u=this.a
if(u!=null)u.Z()}},
sjp:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
saa:function(a,b){var u
if(!J.W(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.Z()}},
iW:function(a){var u,t,s=this
if(a.p(0,$.b5())){u=s.f
t=[P.D]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b4())){u=s.r
t=[P.D]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.b3())){u=s.x
t=[P.D]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bx())){u=s.y
t=[P.D]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bY())){u=s.z
t=[P.D]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bX())){u=s.Q
t=[P.D]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.ds())){u=s.Q
t=[P.D]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cv()))return H.d([s.ch],[P.D])
else if(a.p(0,$.bw())){u=s.cx
t=[P.D]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.D])},
c3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bm()
t.d.u(0,new F.jy(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
c2:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bm()
t.d.u(0,new F.jx(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
dX:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.b
t.a.a.S()
t=t.e
a.a.a.S()
if(t==a.e)return s}return},
iL:function(a){var u=this.dX(a)
if(u!=null)return u
return a.dX(this)},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.ai(J.av(s.e),0))
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
C.a.h(q,V.Y(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
M:function(){return this.D("")}}
F.jy.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.jx.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.jr.prototype={
S:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.A("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
dt:function(a,b){var u=null,t=F.lg(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
du:function(a,b,c){var u=null,t=F.lg(u,u,u,new V.aF(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gn:function(a){return this.c.length},
aC:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c3()
return!0},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].c2()
return!0},
bn:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.I(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var u,t,s,r
this.S()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
M:function(){return this.D("")},
sie:function(a){this.c=H.n(a,"$ib",[F.a3],"$ab")}}
F.js.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
u:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a8]})
C.a.u(u.b,b)
C.a.u(u.c,new F.jt(u,b))
C.a.u(u.d,new F.ju(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
return C.a.m(r,"\n")},
sfu:function(a){this.b=H.n(a,"$ib",[F.a8],"$ab")},
sfv:function(a){this.c=H.n(a,"$ib",[F.a8],"$ab")},
sfw:function(a){this.d=H.n(a,"$ib",[F.a8],"$ab")}}
F.jt.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:5}
F.ju.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:5}
F.jv.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
return C.a.m(r,"\n")},
sfC:function(a){this.b=H.n(a,"$ib",[F.ax],"$ab")},
sfD:function(a){this.c=H.n(a,"$ib",[F.ax],"$ab")}}
F.jw.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].D(""))
return C.a.m(r,"\n")},
sbW:function(a){this.b=H.n(a,"$ib",[F.bM],"$ab")}}
O.dM.prototype={
gq:function(){var u=this.rx
return u==null?this.rx=D.T():u},
T:function(a){var u=this.rx
if(u!=null)u.I(a)},
ao:function(a,b){},
eo:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.f(a.fr.j(0,n),"$idN")
if(u==null){t=a.a
u=new A.dN(t,n)
u.cJ(t,n)
u.e4(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.q(u.y.j(0,"lightVec"),"$iZ")
u.db=H.q(u.y.j(0,"ambientClr"),"$ibQ")
u.dx=H.q(u.y.j(0,"diffuseClr"),"$ibQ")
u.dy=H.q(u.y.j(0,"weightScalar"),"$iae")
u.fr=H.q(u.y.j(0,"viewMat"),"$ian")
u.fx=H.q(u.y.j(0,"viewObjMatrix"),"$ian")
u.fy=H.q(u.y.j(0,"projViewObjMatrix"),"$ian")
a.dw(u)}o.a=u}if(b.e==null){b.d.aC()
b.d.aW()
b.d.bn()
t=new Z.dA()
t.sfJ(new H.a2([P.h,Z.bA]))
b.e=t}t=o.a
t.aA(a)
s=o.r2
r=t.dy
C.c.a1(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.c.X(r.a,r.d,q,p,s)
s=a.db
s=s.ga0(s)
p=t.fr
p.toString
p.a8(s.a4(0,!0))
s=a.geC()
p=t.fx
p.toString
p.a8(s.a4(0,!0))
s=a.gel()
t=t.fy
t.toString
t.a8(s.a4(0,!0))
t=b.e
if(t instanceof Z.dA){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.hK(a,t,b.d,"Axis",H.l(o.gcS(),{func:1,ret:F.ai,args:[F.cW]}),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.bk(a,t,b.c,"wireFrame",o.gig(),o.f,o.e)
if(o.cy)o.bk(a,t,b.c,"normals",o.gfN(),o.f,o.e)
if(o.db)o.bk(a,t,b.c,"binormals",o.gfe(),o.f,o.e)
if(o.k3)o.bk(a,t,b.c,"Axis",o.gcS(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dF()},
bk:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ai,args:[F.ai]})
u=b.a.j(0,d)
if(u==null){u=this.cT(a,e.$1(c))
b.a.k(0,d,u)}t=this.a
t.db.bf(f)
t.dx.bf(g)
u.eh(a)},
hK:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ai,args:[F.cW]})
u=b.a.j(0,d)
if(u==null){u=this.cT(a,e.$1(c))
b.a.k(0,d,u)}t=this.a
t.db.bf(f)
t.dx.bf(g)
u.eh(a)},
cT:function(a,b){var u=this,t=$.b5(),s=$.b4(),r=b.dC(new Z.ev(a.a),new Z.bn(t.a|s.a|$.b3().a|$.bX().a))
r.ag($.b5()).e=u.a.z.c
r.ag($.b4()).e=u.a.Q.c
r.ag($.bX()).e=u.a.ch.c
r.ag($.b3()).e=u.a.cx.c
return r},
dq:function(a,b){var u,t,s,r={}
r.a=b
u=F.cV()
r.a=new V.ac(0,0.7,1,1)
t=a.a
t.toString
r=H.l(new O.hm(r,u),{func:1,ret:-1,args:[F.a3]})
C.a.u(t.c,r)
r=new O.hl(u)
t=a.c
t.toString
s=H.l(new O.hn(u,r),{func:1,ret:-1,args:[F.ax]})
C.a.u(t.b,s)
s=a.d
s.toString
r=H.l(new O.ho(u,r),{func:1,ret:-1,args:[F.a8]})
C.a.u(s.b,r)
return u},
ih:function(a){return this.dq(a,null)},
fO:function(a){var u,t=F.cV(),s=a.a
s.toString
u=H.l(new O.hk(new V.ac(1,1,0.3,1),t),{func:1,ret:-1,args:[F.a3]})
C.a.u(s.c,u)
return t},
ff:function(a){var u,t=F.cV(),s=a.a
s.toString
u=H.l(new O.hj(new V.ac(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.a3]})
C.a.u(s.c,u)
return t},
fa:function(a){return this.fb(a)},
fb:function(a){var u=F.cV(),t=new O.hi(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u}}
O.hm.prototype={
$1:function(a){var u,t
H.f(a,"$ia3")
u=this.b.a
t=a.aY()
t.saa(0,this.a.a)
t.saB(V.bm())
u.h(0,t)},
$S:13}
O.hl.prototype={
$2:function(a,b){if(a.iL(b)==null)this.a.c.az(0,a,b)},
$S:48}
O.hn.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iax")
u=this.a
t=u.a
s=a.a
s.a.a.S()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.S()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:49}
O.ho.prototype={
$1:function(a){var u,t,s,r,q,p
H.f(a,"$ia8")
u=this.a
t=u.a
s=a.a
s.a.a.S()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.S()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.S()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.hk.prototype={
$1:function(a){var u,t,s=H.f(a,"$ia3").aY()
s.saa(0,this.a)
s.saB(V.bm())
u=s.aY()
u.saB(s.r)
t=this.b
t.a.h(0,s)
t.a.h(0,u)
t.c.az(0,s,u)},
$S:13}
O.hj.prototype={
$1:function(a){var u,t,s
H.f(a,"$ia3")
u=a.aY()
u.saa(0,this.a)
u.saB(V.bm())
t=u.aY()
t.saB(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.az(0,u,t)},
$S:13}
O.hi.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.ac(s,r,q,1)
s=this.a
u=s.a.du(0,0,0)
u.saB(V.bm())
u.se8(V.mh())
u.saa(0,p)
t=s.a.du(a,b,c)
t.saB(V.bm())
t.se8(V.mh())
t.saa(0,p)
s.c.az(0,u,t)}}
O.dY.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.T():u},
T:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.I(a)},
bV:function(){return this.T(null)},
dg:function(a){H.f(a,"$iB")
this.a=null
this.T(a)},
hP:function(){return this.dg(null)},
fU:function(a,b){var u=V.as
H.n(b,"$ik",[u],"$ak")
u=new D.c6([u])
u.b=!0
this.T(u)},
fW:function(a,b){var u=V.as
H.n(b,"$ik",[u],"$ak")
u=new D.c7([u])
u.b=!0
this.T(u)},
d0:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aH])
h.u(0,new O.hM(j,q))
C.a.bA(q,new O.hN())
p=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gb7()
n=p.j(0,o.gb7())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aK])
p.u(0,new O.hO(j,m))
C.a.bA(m,new O.hP())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gb7()
r=l.j(0,o.gb7())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aL])
l.u(0,new O.hQ(j,k))
C.a.bA(k,new O.hR())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.nF(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ae:function(a,b){H.n(a,"$ib",[T.d1],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
ao:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aw(u,u.length,[H.r(u,0)]);u.v();){t=u.d
t.toString
s=$.jq
if(s==null)s=$.jq=new V.U(0,0,1)
t.a=s
r=$.jp
t.d=r==null?$.jp=new V.U(0,1,0):r
r=$.jo
t.e=r==null?$.jo=new V.U(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bv(s)
r=s.a
p=s.b
o=s.c
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.bv(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.bv(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
eo:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d0()
u=H.f(b4.fr.j(0,b3.aD),"$idZ")
if(u==null){u=A.nE(b3,b4.a)
b4.dw(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dH
b3=b5.e
if(!(b3 instanceof Z.bA))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.aC()
r=t.k4
if(r)b5.d.aW()
q=t.r2
if(q)b5.d.bn()
p=b5.d.dC(new Z.ev(b4.a),s)
p.ag($.b5()).e=b2.a.Q.c
if(b3)p.ag($.b4()).e=b2.a.cx.c
if(r)p.ag($.b3()).e=b2.a.ch.c
if(t.r1)p.ag($.bx()).e=b2.a.cy.c
if(q)p.ag($.bY()).e=b2.a.db.c
if(t.rx)p.ag($.bw()).e=b2.a.dx.c
b5.e=p}b3=T.d1
o=H.d([],[b3])
b2.a.aA(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga0(q)
r=r.dy
r.toString
r.a8(q.a4(0,!0))}if(t.fr){r=b2.a
q=b4.geC()
r=r.fr
r.toString
r.a8(q.a4(0,!0))}r=b2.a
q=b4.gel()
r=r.fy
r.toString
r.a8(q.a4(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.a8(C.j.a4(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.a8(C.j.a4(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.a8(C.j.a4(q,!0))}if(t.y2>0){n=b2.e.a.length
r=b2.a.k4
C.c.bw(r.a,r.d,n)
for(r=[P.D],m=0;m<n;++m){q=b2.a
l=b2.e.a
if(m>=l.length)return H.e(l,m)
l=l[m]
q.toString
H.f(l,"$ias")
q=q.r1
if(m>=q.length)return H.e(q,m)
q=q[m]
k=new Float32Array(H.cm(H.n(l.a4(0,!0),"$ib",r,"$ab")))
C.c.ez(q.a,q.d,!1,k)}}r=t.a
if(r.a){q=b2.a
l=b2.f.f
q=q.r2
C.c.X(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ae(o,b2.f.d)
r=b2.a
q=b2.f.d
r.al(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
l=b2.r.f
q=q.x1
C.c.X(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ae(o,b2.r.d)
r=b2.a
q=b2.r.d
r.al(r.x2,q)}r=t.c
if(r.a){q=b2.a
l=b2.x.f
q=q.y2
C.c.X(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ae(o,b2.x.d)
r=b2.a
q=b2.x.d
r.al(r.aD,q)}r=t.d
if(r.a){q=b2.a
l=b2.y.f
q=q.dI
C.c.X(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ae(o,b2.y.d)
r=b2.a
q=b2.y.d
r.al(r.dJ,q)}r=t.e
q=r.a
if(q||r.b||!1){l=b2.a
j=b2.z.ch
l=l.dM
C.c.a1(l.a,l.d,j)}if(q){q=b2.a
l=b2.z.f
q=q.dK
C.c.X(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ae(o,b2.z.d)
r=b2.a
q=b2.z.d
r.al(r.dL,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.m
h=new H.a2([q,q])
for(q=b2.dx.e,l=q.length,g=0;g<q.length;q.length===l||(0,H.x)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dt(b2.a.c9.j(0,0),e)
j=i.bv(f.a)
c=j.a
b=j.b
a=j.c
a=j.A(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
j=a.b
a=a.c
C.c.X(b.a,b.d,c,j,a)
a=f.c
j=d.f
C.c.X(j.a,j.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){l=r[g].a
n=h.j(0,l)
if(n==null)n=0
l=b2.a.c8.j(0,l)
C.c.bw(l.a,l.d,n)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.m
a0=new H.a2([q,q])
for(q=b2.dx.f,l=q.length,j=[b3],c=[P.D],g=0;g<q.length;q.length===l||(0,H.x)(q),++g){f=q[g]
a1=f.gb7()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dt(b2.a.cb.j(0,a1),e)
a2=i.w(0,f.ga0(f))
b=f.ga0(f)
a=$.cR
b=b.cv(a==null?$.cR=new V.aF(0,0,0):a)
a=d.b
C.c.X(a.a,a.d,b.a,b.b,b.c)
b=$.cR
b=a2.cv(b==null?$.cR=new V.aF(0,0,0):b)
a=d.c
C.c.X(a.a,a.d,b.a,b.b,b.c)
b=f.gaa(f)
a=d.e
C.c.X(a.a,a.d,b.a,b.b,b.c)
f.gaJ()
b=a2.e5(0)
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
k=new Float32Array(H.cm(H.n(new V.e_(a,a3,a4,a5,a6,a7,a8,a9,b).a4(0,!0),"$ib",c,"$ab")))
C.c.ey(b0.a,b0.d,!1,k)
f.gaJ()
b=f.gaJ()
H.n(o,"$ib",j,"$ab")
if(!C.a.U(o,b)){b.a=o.length
C.a.h(o,b)}b=f.gaJ()
a=b.gb9(b)
if(a){a=d.f
a.toString
a3=b.gb9(b)
if(!a3)a.a.uniform1i(a.d,0)
else{b=b.giQ(b)
a.a.uniform1i(a.d,b)}}f.gb0()
b=f.geI()
a=d.x
a.toString
a3=b.giC(b)
a4=b.giD(b)
a5=b.giE()
b=b.giB()
C.c.cw(a.a,a.d,a3,a4,a5,b)
b=f.gb0()
if(!C.a.U(o,b)){b.a=o.length
C.a.h(o,b)}b=f.gb0()
a=b.gb9(b)
if(a){a=d.r
a.toString
a3=b.gb9(b)
if(!a3)a.a.uniform1i(a.d,0)
else{b=b.giQ(b)
a.a.uniform1i(a.d,b)}}if(f.giH()){b=f.gip()
a=d.y
C.c.a1(a.a,a.d,b)
b=f.giq()
a=d.z
C.c.a1(a.a,a.d,b)
b=f.gir()
a=d.Q
C.c.a1(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){l=r[g].a
n=a0.j(0,l)
if(n==null)n=0
l=b2.a.ca.j(0,l)
C.c.bw(l.a,l.d,n)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga0(q)
q=P.m
b1=new H.a2([q,q])
for(q=b2.dx.r,l=q.length,b3=[b3],g=0;g<q.length;q.length===l||(0,H.x)(q),++g){f=q[g]
a1=f.gb7()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dt(b2.a.cd.j(0,a1),e)
j=f.gjf(f)
c=d.b
C.c.X(c.a,c.d,j.a,j.b,j.c)
j=f.gjA(f).jM()
c=d.c
C.c.X(c.a,c.d,j.a,j.b,j.c)
j=i.cv(f.gjf(f))
c=d.d
C.c.X(c.a,c.d,j.a,j.b,j.c)
j=f.gaa(f)
c=d.e
C.c.X(c.a,c.d,j.a,j.b,j.c)
f.gaJ()
j=f.gcz()
c=d.f
C.c.X(c.a,c.d,j.a,j.b,j.c)
j=f.gcs(f)
c=d.r
C.c.X(c.a,c.d,j.a,j.b,j.c)
j=f.gjN()
c=d.x
C.c.a1(c.a,c.d,j)
j=f.gjO()
c=d.y
C.c.a1(c.a,c.d,j)
f.gaJ()
j=f.gaJ()
H.n(o,"$ib",b3,"$ab")
if(!C.a.U(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gaJ()
c=j.gb9(j)
if(c){c=d.dx
c.toString
b=j.d
if(!b)c.a.uniform1i(c.d,0)
else{j=j.a
c.a.uniform1i(c.d,j)}}f.gb0()
j=f.geI()
c=d.z
c.toString
b=j.giC(j)
a=j.giD(j)
a3=j.giE()
j=j.giB()
C.c.cw(c.a,c.d,b,a,a3,j)
j=f.gb0()
if(!C.a.U(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gb0()
c=j.gb9(j)
if(c){c=d.dy
c.toString
b=j.d
if(!b)c.a.uniform1i(c.d,0)
else{j=j.a
c.a.uniform1i(c.d,j)}}if(f.gjB()){j=f.gjz()
c=d.Q
C.c.a1(c.a,c.d,j)
j=f.gjy()
c=d.ch
C.c.a1(c.a,c.d,j)}if(f.giH()){j=f.gip()
c=d.cx
C.c.a1(c.a,c.d,j)
j=f.giq()
c=d.cy
C.c.a1(c.a,c.d,j)
j=f.gir()
c=d.db
C.c.a1(c.a,c.d,j)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.x)(r),++g){q=r[g].a
n=b1.j(0,q)
if(n==null)n=0
q=b2.a.cc.j(0,q)
C.c.bw(q.a,q.d,n)}}}if(t.f.b){b2.ae(o,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.al(b3.dN,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga0(r).e5(0)}b3=b3.id
b3.toString
b3.a8(r.a4(0,!0))}if(t.cy){b2.ae(o,b2.ch)
b3=b2.a
r=b2.ch
b3.hU(b3.dO,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dP
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ae(o,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.al(b3.dQ,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
l=b2.cy.ch
q=q.dR
C.c.a1(q.a,q.d,l)}if(r){r=b2.a
q=b2.cy.f
r=r.dS
C.c.X(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ae(o,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.al(b3.dT,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
l=b2.db.f
r=r.dU
C.c.a1(r.a,r.d,l)}if(b3.b){b2.ae(o,b2.db.d)
r=b2.a
l=b2.db.d
r.al(r.dV,l)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,m=0;m<o.length;++m){l=o[m]
if(!l.c&&l.d){l.c=!0
r.activeTexture(33984+l.a)
r.bindTexture(3553,l.b)}}l=H.q(b5.e,"$ibA")
l.aA(b4)
l.aG(b4)
l.ex(b4)
if(!q||b3.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b3=o[m]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.dF()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d0().aD},
sfd:function(a){this.e=H.n(a,"$ia5",[V.as],"$aa5")}}
O.hM.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aH(a,C.d.a7(b+3,4)*4))},
$S:10}
O.hN.prototype={
$2:function(a,b){H.f(a,"$iaH")
H.f(b,"$iaH")
return J.kV(a.a,b.a)},
$S:52}
O.hO.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aK(a,C.d.a7(b+3,4)*4))},
$S:10}
O.hP.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.kV(a.a,b.a)},
$S:53}
O.hQ.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aL(a,C.d.a7(b+3,4)*4))},
$S:10}
O.hR.prototype={
$2:function(a,b){H.f(a,"$iaL")
H.f(b,"$iaL")
return J.kV(a.a,b.a)},
$S:54}
O.hG.prototype={
ax:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.Q().a)){t.f=1
u=new D.M(t.b,u,1,[P.D])
u.b=!0
t.a.T(u)}}}
O.cI.prototype={
T:function(a){return this.a.T(H.f(a,"$iB"))},
bV:function(){return this.T(null)},
ax:function(){},
bZ:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ax()
u=s.a
u.a=null
u.T(null)}}}
O.hH.prototype={}
O.bf.prototype={
di:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.M(s.b+".color",u,a,[V.a9])
t.b=!0
s.a.T(t)}},
ax:function(){this.cH()
this.di(new V.a9(1,1,1))},
saa:function(a,b){this.bZ(new A.ak(!0,this.c.b,!1))
this.di(b)}}
O.hJ.prototype={}
O.hK.prototype={
ax:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-1)<$.Q().a)){t.ch=1
u=new D.M(t.b+".refraction",u,1,[P.D])
u.b=!0
t.a.T(u)}}}
O.hL.prototype={
dj:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.M(u.b+".shininess",t,a,[P.D])
t.b=!0
u.a.T(t)}},
ax:function(){this.cI()
this.dj(100)}}
O.cf.prototype={}
T.d1.prototype={}
T.ei.prototype={}
T.iR.prototype={
gq:function(){var u=this.y
return u==null?this.y=D.T():u}}
T.iS.prototype={
iX:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lN(a)
t=new T.iR()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.aa(u,"load",H.l(new T.iT(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hQ:function(a,b,c){var u,t,s,r
b=V.lx(b)
u=V.lx(a.width)
t=V.lx(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kY()
s.width=u
s.height=t
r=H.f(C.i.eE(s,"2d"),"$icz")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pb(r.getImageData(0,0,s.width,s.height))}}}
T.iT.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hQ(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jo(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.iF()}++s.e},
$S:16}
V.br.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"},
$iaC:1}
V.aC.prototype={}
V.dX.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.n(a,"$ib",[V.aC],"$ab")},
$iaC:1}
V.ay.prototype={
aF:function(a,b){return!this.eN(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
V.ig.prototype={
aF:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cc(this.a),t=H.cc(this.b)
return u+".."+t},
$iaC:1}
V.iq.prototype={
eS:function(a){var u,t
if(a.a.length<=0)throw H.c(P.A("May not create a SetMatcher with zero characters."))
u=new H.a2([P.m,P.O])
for(t=new H.cH(a,a.gn(a),[H.au(a,"y",0)]);t.v();)u.k(0,t.d,!0)
this.shT(u)},
aF:function(a,b){return this.a.bo(0,b)},
i:function(a){var u=this.a
return P.d_(u.ga3(u),0,null)},
shT:function(a){this.a=H.n(a,"$iv",[P.m,P.O],"$av")},
$iaC:1}
V.cX.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d3(this.a.l(0,b))
r.sa6(H.d([],[V.aC]))
r.c=!1
C.a.h(this.c,r)
return r},
iK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
sib:function(a){this.c=H.n(a,"$ib",[V.d3],"$ab")}}
V.ek.prototype={
i:function(a){var u=H.lz(this.b,"\n","\\n"),t=H.lz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d2.prototype={
aH:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shL:function(a){var u=P.h
this.c=H.n(a,"$iv",[u,u],"$av")}}
V.iW.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.sib(H.d([],[V.d3]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d2(a)
u=P.h
t.shL(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
ew:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ek]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.iK(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d_(i,0,m)
throw H.c(P.A("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d_(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ek(n==null?o.b:n,p,s)}++s}}},
si1:function(a){this.a=H.n(a,"$iv",[P.h,V.cX],"$av")},
si4:function(a){this.b=H.n(a,"$iv",[P.h,V.d2],"$av")}}
V.d3.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
X.dC.prototype={$icM:1}
X.hb.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.T():u}}
X.e6.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.T():u},
aQ:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.I(a)},
f5:function(){return this.aQ(null)},
sba:function(a){var u,t,s=this
if(!J.W(s.b,a)){u=s.b
if(u!=null)u.gq().a_(0,s.gcN())
t=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gcN())
u=new D.M("mover",t,s.b,[U.ad])
u.b=!0
s.aQ(u)}},
$icM:1,
$idC:1}
X.eg.prototype={}
V.bC.prototype={
bh:function(a){this.b=new P.hf(C.Q)
this.c=null
this.sbK(H.d([],[[P.b,W.aI]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aI]))
u=a.split("\n")
for(l=u.length,t=[W.aI],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fk(q,0,q.length)
n=o==null?q:o
C.O.eG(p,H.lz(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gau(m.d),p)}},
ei:function(a,b){var u,t,s,r,q=this
H.n(b,"$ib",[P.h],"$ab")
q.sbK(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bp():t).ew(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)q.bt(t[r])},
sbK:function(a){this.d=H.n(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.kR.prototype={
$1:function(a){var u
H.f(a,"$ibj")
u=C.e.ev(this.a.giO(),2)
if(u!=="0.00")P.ly(u+" fps")},
$S:56}
V.fT.prototype={
bt:function(a){var u=this
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
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iX()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.br())
t=a1.l(0,r).m(0,h)
u=V.w(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.br())
t=a1.l(0,r).m(0,e)
u=V.w(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.ay()
s=[V.aC]
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.ay()
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.t(" \n\t"))
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
u=[P.h]
t.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hc.prototype={
bt:function(a){var u=this
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
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iX()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.br())
t=e.l(0,j).m(0,i)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.ay()
s=[V.aC]
t.sa6(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.ay()
u.sa6(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.t(" \n\t"))
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
t=[P.h]
u.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hd.prototype={
bt:function(a){var u=this,t="#111"
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
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iX()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.br())
C.a.h(l.l(0,s).m(0,m).a,new V.br())
u=l.l(0,m).m(0,m)
t=new V.ay()
t.sa6(H.d([],[V.aC]))
C.a.h(u.a,t)
u=V.w(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.N("Symbol")
u=l.l(0,n)
u.d=u.a.N("String")
u=l.l(0,r)
t=u.a.N(r)
u.d=t
t.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.N(q)
t=l.l(0,m)
t.d=t.a.N(m)
return l}}
V.ia.prototype={
ei:function(a,b){H.n(b,"$ib",[P.h],"$ab")
this.sbK(H.d([],[[P.b,W.aI]]))
this.L(C.a.m(b,"\n"),"#111")},
bt:function(a){},
bp:function(){return}}
V.iu.prototype={
eT:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.aa(q,"scroll",H.l(new V.iw(o),{func:1,ret:-1,args:[r]}),!1,r)},
dv:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.h],"$ab")
this.hW()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ew(C.a.iV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.py(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.fg(C.y,n,C.h,!1)
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
eD:function(a){var u,t,s,r=new V.fT("dart")
r.bh("dart")
u=new V.hc("glsl")
u.bh("glsl")
t=new V.hd("html")
t.bh("html")
s=C.a.iM(H.d([r,u,t],[V.bC]),new V.ix(a))
if(s!=null)return s
r=new V.ia("plain")
r.bh("plain")
return r},
ds:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.n(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dq(r).a2(r,"+")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a2(r,"-")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eD(a8)
q.ei(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fg(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lE()
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
if(s>=u.length)return H.e(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.a_.im(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.v();)c.appendChild(a3.gG(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ii:function(a){var u,t,s,r,q,p,o,n="auto"
H.n(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibi").style
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
o=H.f(r.insertCell(-1),"$ibi")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hW:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iX()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.ay()
r=[V.aC]
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.ay()
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.ay()
s.sa6(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.ay()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.ay()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.br())
s=u.l(0,i).m(0,i)
t=new V.ay()
t.sa6(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("*_`["))
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
V.iw.prototype={
$1:function(a){P.m5(C.o,new V.iv(this.a))},
$S:16}
V.iv.prototype={
$0:function(){var u=C.e.an(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
V.ix.prototype={
$1:function(a){return H.f(a,"$ibC").a===this.a},
$S:57}
V.iO.prototype={
az:function(a,b,c){var u,t,s,r,q=this,p=W.lN(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.fv(q.c)
t=u.gn(u)
u=W.a7
W.aa(p,"click",H.l(new V.iQ(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.fv(q.c).h(0,p)
J.fv(q.c).h(0,document.createElement("br"))
s=P.m9().gcr().j(0,H.i(q.a))
if(s==null){q.dn(t)
r=c}else r=P.dr(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.az(a,b,!1)},
dn:function(a){var u,t,s=P.m9(),r=P.h,q=P.nA(s.gcr(),r,r)
q.k(0,this.a,""+a)
u=s.ep(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kc([],[]).cA(""),"",t)}}
V.iQ.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia7")
u=s.a
t=J.fv(u.c)
t.u(t,new V.iP())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.dn(s.d)},
$S:58}
V.iP.prototype={
$1:function(a){var u
H.f(a,"$iN")
if(!!J.P(a).$ic5){u=a.style
u.border="solid 2px white"}},
$S:59}
N.kN.prototype={
$1:function(a){var u,t=this.a.Q,s=this.b.f.iX(a),r=t.c
if(!r.b)t.bZ(new A.ak(r.a,!0,!1))
r=t.d
if(r!==s){if(r!=null)r.gq().a_(0,t.gbj())
u=t.d
t.d=s
s.gq().h(0,t.gbj())
s=new D.M(t.b+".texture2D",u,t.d,[T.ei])
s.b=!0
t.a.T(s)}},
$S:19}
N.kO.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.ds("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.ds("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eK=u.i
u=J.dR.prototype
u.eM=u.i
u=P.k.prototype
u.eL=u.bx
u=W.N.prototype
u.bB=u.af
u=W.eZ.prototype
u.eO=u.at
u=O.cI.prototype
u.cH=u.ax
u=O.bf.prototype
u.cI=u.ax
u=V.dX.prototype
u.eN=u.aF
u.cG=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p5","of",11)
u(P,"p6","og",11)
u(P,"p7","oh",11)
t(P,"mD","p3",3)
s(W,"pk",4,null,["$4"],["oj"],18,0)
s(W,"pl",4,null,["$4"],["ok"],18,0)
var m
r(m=E.ar.prototype,"ged",0,0,null,["$1","$0"],["ee","j6"],0,0)
r(m,"gef",0,0,null,["$1","$0"],["eg","j7"],0,0)
r(m,"geb",0,0,null,["$1","$0"],["ec","j5"],0,0)
r(m,"ge9",0,0,null,["$1","$0"],["ea","j2"],0,0)
q(m,"gj0","j1",6)
q(m,"gj3","j4",6)
r(m=E.ej.prototype,"gcK",0,0,null,["$1","$0"],["cM","cL"],0,0)
p(m,"gjk","eq",3)
o(m=X.eq.prototype,"gh8","h9",15)
o(m,"gfX","fY",15)
o(m,"gh2","h3",4)
o(m,"ghc","hd",25)
o(m,"gha","hb",25)
o(m,"ghg","hh",4)
o(m,"ghk","hl",4)
o(m,"gh6","h7",4)
o(m,"ghi","hj",4)
o(m,"gh4","h5",4)
o(m,"ghm","hn",36)
o(m,"gho","hp",15)
o(m,"ghB","hC",12)
o(m,"ghx","hy",12)
o(m,"ghz","hA",12)
r(D.bE.prototype,"geY",0,0,null,["$1","$0"],["av","eZ"],0,0)
r(m=D.dT.prototype,"gda",0,0,null,["$1","$0"],["dc","he"],0,0)
o(m,"ghr","hs",38)
q(m,"gfR","fS",22)
q(m,"ghv","hw",22)
n(V.X.prototype,"gn","cj",32)
n(V.U.prototype,"gn","cj",32)
r(m=U.cG.prototype,"gaN",0,0,null,["$1","$0"],["O","a5"],0,0)
q(m,"gfP","fQ",17)
q(m,"ght","hu",17)
r(m=U.er.prototype,"gaN",0,0,null,["$1","$0"],["O","a5"],0,0)
o(m,"gbN","bO",1)
o(m,"gbP","bQ",1)
o(m,"gbR","bS",1)
r(m=U.es.prototype,"gaN",0,0,null,["$1","$0"],["O","a5"],0,0)
o(m,"gbN","bO",1)
o(m,"gbP","bQ",1)
o(m,"gbR","bS",1)
o(m,"gfF","fG",1)
o(m,"gfH","fI",1)
o(m,"gi9","ia",1)
o(m,"gi7","i8",1)
o(m,"gi5","i6",1)
o(U.et.prototype,"gfL","fM",1)
r(m=M.dI.prototype,"gaO",0,0,null,["$1","$0"],["aP","f_"],0,0)
q(m,"gfZ","h_",6)
q(m,"gh0","h1",6)
r(m=O.dM.prototype,"gig",0,1,null,["$2$color","$1"],["dq","ih"],45,0)
o(m,"gfN","fO",14)
o(m,"gfe","ff",14)
o(m,"gcS","fa",14)
r(m=O.dY.prototype,"gbj",0,0,null,["$1","$0"],["T","bV"],0,0)
r(m,"ghO",0,0,null,["$1","$0"],["dg","hP"],0,0)
q(m,"gfT","fU",29)
q(m,"gfV","fW",29)
r(O.cI.prototype,"gbj",0,0,null,["$1","$0"],["T","bV"],0,0)
r(X.e6.prototype,"gcN",0,0,null,["$1","$0"],["aQ","f5"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.l6,J.a,J.aw,P.eM,P.k,H.cH,P.bb,H.c3,H.d5,H.fM,H.j1,P.bG,H.cA,H.f3,P.ag,H.hu,H.hw,H.hq,P.f9,P.bp,P.aQ,P.ew,P.iE,P.cZ,P.iF,P.bj,P.aq,P.ks,P.k6,P.ck,P.eL,P.y,P.kk,P.hC,P.c1,P.hg,P.kq,P.kp,P.O,P.aB,P.ab,P.bF,P.i8,P.ee,P.eE,P.ha,P.bH,P.b,P.v,P.J,P.az,P.h,P.aj,P.cl,P.jf,P.k9,W.fP,W.bS,W.H,W.e4,W.eZ,W.kf,W.dL,W.aE,W.k5,W.fh,P.kb,P.fe,P.k0,P.S,O.a5,O.cJ,E.fG,E.ar,E.ih,E.ej,Z.eu,Z.ev,Z.bA,Z.dA,Z.bI,Z.bn,D.fJ,D.c2,D.B,X.dB,X.dS,X.hs,X.hz,X.aD,X.hY,X.iY,X.eq,D.bE,D.af,D.e7,D.ed,V.a9,V.ac,V.h2,V.e_,V.as,V.al,V.aF,V.e8,V.ea,V.X,V.U,U.er,U.es,U.et,M.dI,A.dx,A.fz,A.ak,A.aH,A.aK,A.aL,A.hI,A.cg,A.ch,A.cj,A.em,A.j9,F.a8,F.ax,F.bM,F.ai,F.ir,F.is,F.it,F.a3,F.jr,F.js,F.jv,F.jw,O.cf,O.cI,O.hJ,T.iS,V.br,V.aC,V.dX,V.ig,V.iq,V.cX,V.ek,V.d2,V.iW,X.dC,X.eg,X.e6,V.bC,V.iu,V.iO])
s(J.a,[J.hp,J.dQ,J.dR,J.bc,J.c8,J.bJ,H.cN,H.bL,W.j,W.fw,W.c_,W.cz,W.b9,W.ba,W.V,W.ey,W.fU,W.fV,W.eA,W.dH,W.eC,W.fX,W.o,W.eF,W.aU,W.he,W.eH,W.bt,W.dV,W.hS,W.eN,W.eO,W.aV,W.eP,W.eS,W.aW,W.eW,W.eY,W.aY,W.f_,W.aZ,W.f4,W.aM,W.f7,W.iV,W.b0,W.fa,W.j_,W.jk,W.fi,W.fk,W.fm,W.fo,W.fq,P.be,P.eJ,P.bh,P.eU,P.id,P.f5,P.bk,P.fc,P.fA,P.ex,P.dy,P.e9,P.ce,P.eb,P.eh,P.en,P.f1])
s(J.dR,[J.i9,J.bR,J.bK])
t(J.l5,J.bc)
s(J.c8,[J.dP,J.dO])
t(P.hy,P.eM)
s(P.hy,[H.eo,W.jH,W.at,P.h6])
t(H.t,H.eo)
s(P.k,[H.h_,H.hD,H.d6])
s(H.h_,[H.c9,H.hv])
s(P.bb,[H.hE,H.jA])
t(H.hF,H.c9)
t(H.fN,H.fM)
s(P.bG,[H.i5,H.hr,H.jd,H.j3,H.fI,H.io,P.fy,P.e5,P.aT,P.je,P.jb,P.cY,P.fL,P.fS])
s(H.cA,[H.kT,H.iL,H.kI,H.kJ,H.kK,P.jD,P.jC,P.jE,P.jF,P.kj,P.ki,P.jO,P.jS,P.jP,P.jQ,P.jR,P.jV,P.jW,P.jU,P.jT,P.iG,P.iH,P.kC,P.k3,P.k2,P.k4,P.hx,P.hB,P.fY,P.fZ,P.jj,P.jg,P.jh,P.ji,P.kl,P.km,P.ko,P.kn,P.kw,P.kv,P.kx,P.ky,W.h0,W.hU,W.hW,W.im,W.iD,W.jN,W.i4,W.i3,W.k7,W.k8,W.kh,W.kr,P.kd,P.kE,P.h7,P.h8,P.fC,E.ii,E.ij,E.ik,E.iU,D.h3,D.h4,F.kt,F.jy,F.jx,F.jt,F.ju,O.hm,O.hl,O.hn,O.ho,O.hk,O.hj,O.hi,O.hM,O.hN,O.hO,O.hP,O.hQ,O.hR,T.iT,V.kR,V.iw,V.iv,V.ix,V.iQ,V.iP,N.kN,N.kO])
s(H.iL,[H.iB,H.cx])
t(H.jB,P.fy)
t(P.hA,P.ag)
s(P.hA,[H.a2,W.jG])
t(H.e1,H.bL)
s(H.e1,[H.db,H.dd])
t(H.dc,H.db)
t(H.cO,H.dc)
t(H.de,H.dd)
t(H.e2,H.de)
s(H.e2,[H.hZ,H.i_,H.i0,H.i1,H.i2,H.e3,H.cP])
t(P.k1,P.ks)
t(P.k_,P.k6)
t(P.ff,P.hC)
t(P.ep,P.ff)
s(P.c1,[P.fE,P.h1])
t(P.bD,P.iF)
s(P.bD,[P.fF,P.hf,P.jn,P.jm])
t(P.jl,P.h1)
s(P.ab,[P.D,P.m])
s(P.aT,[P.cd,P.hh])
t(P.jJ,P.cl)
s(W.j,[W.E,W.h5,W.cK,W.aX,W.df,W.b_,W.aN,W.dh,W.jz,W.d7,P.fD,P.bZ])
s(W.E,[W.N,W.bB,W.d8])
s(W.N,[W.u,P.p])
s(W.u,[W.dv,W.fx,W.cw,W.bz,W.c0,W.aI,W.h9,W.c5,W.ip,W.bi,W.ef,W.iJ,W.iK,W.d0])
s(W.b9,[W.cB,W.fQ,W.fR])
t(W.fO,W.ba)
t(W.cC,W.ey)
t(W.eB,W.eA)
t(W.dG,W.eB)
t(W.eD,W.eC)
t(W.fW,W.eD)
t(W.aJ,W.c_)
t(W.eG,W.eF)
t(W.cE,W.eG)
t(W.eI,W.eH)
t(W.c4,W.eI)
t(W.bP,W.o)
s(W.bP,[W.bd,W.a7,W.b1])
t(W.hT,W.eN)
t(W.hV,W.eO)
t(W.eQ,W.eP)
t(W.hX,W.eQ)
t(W.eT,W.eS)
t(W.cQ,W.eT)
t(W.eX,W.eW)
t(W.ib,W.eX)
t(W.il,W.eY)
t(W.dg,W.df)
t(W.iy,W.dg)
t(W.f0,W.f_)
t(W.iz,W.f0)
t(W.iC,W.f4)
t(W.f8,W.f7)
t(W.iM,W.f8)
t(W.di,W.dh)
t(W.iN,W.di)
t(W.fb,W.fa)
t(W.iZ,W.fb)
t(W.bo,W.a7)
t(W.fj,W.fi)
t(W.jI,W.fj)
t(W.ez,W.dH)
t(W.fl,W.fk)
t(W.jX,W.fl)
t(W.fn,W.fm)
t(W.eR,W.fn)
t(W.fp,W.fo)
t(W.ka,W.fp)
t(W.fr,W.fq)
t(W.ke,W.fr)
t(W.jK,W.jG)
t(W.jL,P.iE)
t(W.li,W.jL)
t(W.jM,P.cZ)
t(W.kg,W.eZ)
t(P.kc,P.kb)
t(P.am,P.k0)
t(P.eK,P.eJ)
t(P.ht,P.eK)
t(P.eV,P.eU)
t(P.i6,P.eV)
t(P.cT,P.p)
t(P.f6,P.f5)
t(P.iI,P.f6)
t(P.fd,P.fc)
t(P.j0,P.fd)
t(P.fB,P.ex)
t(P.i7,P.bZ)
t(P.f2,P.f1)
t(P.iA,P.f2)
s(E.fG,[Z.dz,A.cU,T.d1])
s(D.B,[D.c6,D.c7,D.M,X.ic])
s(X.ic,[X.dW,X.bu,X.cL,X.el])
s(O.a5,[D.dT,U.cG])
s(D.fJ,[U.fK,U.ad,F.cW])
t(U.dE,U.ad)
s(A.cU,[A.dN,A.dZ])
s(A.em,[A.aO,A.j6,A.j7,A.j8,A.j4,A.ae,A.j5,A.Z,A.bQ,A.ja,A.d4,A.an,A.ao,A.ci])
s(O.cf,[O.dM,O.dY])
s(O.cI,[O.hG,O.hH,O.bf])
s(O.bf,[O.hK,O.hL])
t(T.ei,T.d1)
t(T.iR,T.ei)
s(V.dX,[V.ay,V.d3])
t(X.hb,X.eg)
s(V.bC,[V.fT,V.hc,V.hd,V.ia])
u(H.eo,H.d5)
u(H.db,P.y)
u(H.dc,H.c3)
u(H.dd,P.y)
u(H.de,H.c3)
u(P.eM,P.y)
u(P.ff,P.kk)
u(W.ey,W.fP)
u(W.eA,P.y)
u(W.eB,W.H)
u(W.eC,P.y)
u(W.eD,W.H)
u(W.eF,P.y)
u(W.eG,W.H)
u(W.eH,P.y)
u(W.eI,W.H)
u(W.eN,P.ag)
u(W.eO,P.ag)
u(W.eP,P.y)
u(W.eQ,W.H)
u(W.eS,P.y)
u(W.eT,W.H)
u(W.eW,P.y)
u(W.eX,W.H)
u(W.eY,P.ag)
u(W.df,P.y)
u(W.dg,W.H)
u(W.f_,P.y)
u(W.f0,W.H)
u(W.f4,P.ag)
u(W.f7,P.y)
u(W.f8,W.H)
u(W.dh,P.y)
u(W.di,W.H)
u(W.fa,P.y)
u(W.fb,W.H)
u(W.fi,P.y)
u(W.fj,W.H)
u(W.fk,P.y)
u(W.fl,W.H)
u(W.fm,P.y)
u(W.fn,W.H)
u(W.fo,P.y)
u(W.fp,W.H)
u(W.fq,P.y)
u(W.fr,W.H)
u(P.eJ,P.y)
u(P.eK,W.H)
u(P.eU,P.y)
u(P.eV,W.H)
u(P.f5,P.y)
u(P.f6,W.H)
u(P.fc,P.y)
u(P.fd,W.H)
u(P.ex,P.ag)
u(P.f1,P.y)
u(P.f2,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bz.prototype
C.i=W.c0.prototype
C.O=W.aI.prototype
C.R=J.a.prototype
C.a=J.bc.prototype
C.S=J.dO.prototype
C.d=J.dP.prototype
C.j=J.dQ.prototype
C.e=J.c8.prototype
C.b=J.bJ.prototype
C.T=J.bK.prototype
C.Z=W.cQ.prototype
C.B=J.i9.prototype
C.c=P.ce.prototype
C.a_=W.bi.prototype
C.C=W.ef.prototype
C.r=J.bR.prototype
C.D=W.bo.prototype
C.E=W.d7.prototype
C.a0=new P.fF()
C.F=new P.fE()
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

C.M=new P.i8()
C.h=new P.jl()
C.N=new P.jn()
C.f=new P.k1()
C.o=new P.bF(0)
C.P=new P.bF(5e6)
C.Q=new P.hg("element",!0,!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.m])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.d(u([]),[P.h])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.n=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fN(0,{},C.x,[P.h,P.h])})()
var v={mangledGlobalNames:{m:"int",D:"double",ab:"num",h:"String",O:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.J,args:[F.a8]},{func:1,ret:-1,args:[P.m,[P.k,E.ar]]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.J,args:[D.B]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.J,args:[F.a3]},{func:1,ret:F.ai,args:[F.ai]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:-1,args:[P.m,[P.k,U.ad]]},{func:1,ret:P.O,args:[W.N,P.h,P.h,W.bS]},{func:1,ret:P.J,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.m,[P.k,D.af]]},{func:1,args:[,]},{func:1,ret:P.O,args:[W.E]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.O,args:[W.aE]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[P.m,[P.k,V.as]]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.D},{func:1,ret:W.N,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,args:[W.o]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:P.O,args:[[P.k,D.af]]},{func:1,ret:P.J,args:[P.h,,]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:P.J,args:[F.a3,P.D,P.D]},{func:1,ret:[P.v,P.h,P.h],args:[[P.v,P.h,P.h],P.h]},{func:1,ret:F.ai,args:[F.ai],named:{color:V.ac}},{func:1,ret:[P.aQ,,],args:[,]},{func:1,ret:P.J,args:[,],opt:[P.az]},{func:1,ret:-1,args:[F.a3,F.a3]},{func:1,ret:P.J,args:[F.ax]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.m,args:[A.aH,A.aH]},{func:1,ret:P.m,args:[A.aK,A.aK]},{func:1,ret:P.m,args:[A.aL,A.aL]},{func:1,args:[P.h]},{func:1,ret:P.J,args:[P.bj]},{func:1,ret:P.O,args:[V.bC]},{func:1,ret:P.J,args:[W.a7]},{func:1,ret:P.J,args:[W.N]},{func:1,args:[,P.h]},{func:1,ret:P.J,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b7=0
$.cy=null
$.lG=null
$.lm=!1
$.mG=null
$.mB=null
$.mN=null
$.kF=null
$.kL=null
$.lv=null
$.cn=null
$.dm=null
$.dn=null
$.ln=!1
$.a1=C.f
$.aA=[]
$.bs=null
$.l0=null
$.lM=null
$.lL=null
$.da=P.l8(P.h,P.bH)
$.lR=null
$.lV=null
$.cR=null
$.m0=null
$.mc=null
$.mf=null
$.me=null
$.jo=null
$.jp=null
$.jq=null
$.md=null
$.lU=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pH","mR",function(){return H.mF("_$dart_dartClosure")})
u($,"pI","lA",function(){return H.mF("_$dart_js")})
u($,"pM","mS",function(){return H.bl(H.j2({
toString:function(){return"$receiver$"}}))})
u($,"pN","mT",function(){return H.bl(H.j2({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pO","mU",function(){return H.bl(H.j2(null))})
u($,"pP","mV",function(){return H.bl(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pS","mY",function(){return H.bl(H.j2(void 0))})
u($,"pT","mZ",function(){return H.bl(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pR","mX",function(){return H.bl(H.m7(null))})
u($,"pQ","mW",function(){return H.bl(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pV","n0",function(){return H.bl(H.m7(void 0))})
u($,"pU","n_",function(){return H.bl(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qb","lB",function(){return P.oe()})
u($,"pY","n1",function(){return P.o9()})
u($,"qc","n5",function(){return H.nG(H.cm(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qe","n7",function(){return P.nV("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qf","n8",function(){return P.oD()})
u($,"qd","n6",function(){return P.lP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"q4","n4",function(){return Z.aP(0)})
u($,"pZ","n2",function(){return Z.aP(511)})
u($,"q6","b5",function(){return Z.aP(1)})
u($,"q5","b4",function(){return Z.aP(2)})
u($,"q0","b3",function(){return Z.aP(4)})
u($,"q7","bx",function(){return Z.aP(8)})
u($,"q8","bY",function(){return Z.aP(16)})
u($,"q1","bX",function(){return Z.aP(32)})
u($,"q2","ds",function(){return Z.aP(64)})
u($,"q3","n3",function(){return Z.aP(96)})
u($,"q9","cv",function(){return Z.aP(128)})
u($,"q_","bw",function(){return Z.aP(256)})
u($,"pG","mQ",function(){return new V.h2(1e-9)})
u($,"pF","Q",function(){return $.mQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cN,DataView:H.bL,ArrayBufferView:H.bL,Float32Array:H.cO,Float64Array:H.cO,Int16Array:H.hZ,Int32Array:H.i_,Int8Array:H.i0,Uint16Array:H.i1,Uint32Array:H.i2,Uint8ClampedArray:H.e3,CanvasPixelArray:H.e3,Uint8Array:H.cP,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fw,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fx,HTMLBaseElement:W.cw,Blob:W.c_,HTMLBodyElement:W.bz,HTMLCanvasElement:W.c0,CanvasRenderingContext2D:W.cz,CDATASection:W.bB,CharacterData:W.bB,Comment:W.bB,ProcessingInstruction:W.bB,Text:W.bB,CSSNumericValue:W.cB,CSSUnitValue:W.cB,CSSPerspective:W.fO,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cC,MSStyleCSSProperties:W.cC,CSS2Properties:W.cC,CSSImageValue:W.b9,CSSKeywordValue:W.b9,CSSPositionValue:W.b9,CSSResourceValue:W.b9,CSSURLImageValue:W.b9,CSSStyleValue:W.b9,CSSMatrixComponent:W.ba,CSSRotation:W.ba,CSSScale:W.ba,CSSSkew:W.ba,CSSTranslation:W.ba,CSSTransformComponent:W.ba,CSSTransformValue:W.fQ,CSSUnparsedValue:W.fR,DataTransferItemList:W.fU,HTMLDivElement:W.aI,DOMException:W.fV,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.fW,DOMTokenList:W.fX,Element:W.N,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aJ,FileList:W.cE,FileWriter:W.h5,HTMLFormElement:W.h9,Gamepad:W.aU,History:W.he,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.bt,HTMLImageElement:W.c5,KeyboardEvent:W.bd,Location:W.dV,MediaList:W.hS,MessagePort:W.cK,MIDIInputMap:W.hT,MIDIOutputMap:W.hV,MimeType:W.aV,MimeTypeArray:W.hX,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cQ,RadioNodeList:W.cQ,Plugin:W.aW,PluginArray:W.ib,RTCStatsReport:W.il,HTMLSelectElement:W.ip,SourceBuffer:W.aX,SourceBufferList:W.iy,SpeechGrammar:W.aY,SpeechGrammarList:W.iz,SpeechRecognitionResult:W.aZ,Storage:W.iC,CSSStyleSheet:W.aM,StyleSheet:W.aM,HTMLTableCellElement:W.bi,HTMLTableDataCellElement:W.bi,HTMLTableHeaderCellElement:W.bi,HTMLTableElement:W.ef,HTMLTableRowElement:W.iJ,HTMLTableSectionElement:W.iK,HTMLTemplateElement:W.d0,TextTrack:W.b_,TextTrackCue:W.aN,VTTCue:W.aN,TextTrackCueList:W.iM,TextTrackList:W.iN,TimeRanges:W.iV,Touch:W.b0,TouchEvent:W.b1,TouchList:W.iZ,TrackDefaultList:W.j_,CompositionEvent:W.bP,FocusEvent:W.bP,TextEvent:W.bP,UIEvent:W.bP,URL:W.jk,VideoTrackList:W.jz,WheelEvent:W.bo,Window:W.d7,DOMWindow:W.d7,Attr:W.d8,CSSRuleList:W.jI,ClientRect:W.ez,DOMRect:W.ez,GamepadList:W.jX,NamedNodeMap:W.eR,MozNamedAttrMap:W.eR,SpeechRecognitionResultList:W.ka,StyleSheetList:W.ke,SVGLength:P.be,SVGLengthList:P.ht,SVGNumber:P.bh,SVGNumberList:P.i6,SVGPointList:P.id,SVGScriptElement:P.cT,SVGStringList:P.iI,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bk,SVGTransformList:P.j0,AudioBuffer:P.fA,AudioParamMap:P.fB,AudioTrackList:P.fD,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.i7,WebGLBuffer:P.dy,WebGLProgram:P.e9,WebGL2RenderingContext:P.ce,WebGLShader:P.eb,WebGLTexture:P.eh,WebGLUniformLocation:P.en,SQLResultSetRowList:P.iA})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e1.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.e2.$nativeSuperclassTag="ArrayBufferView"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mJ,[])
else N.mJ([])})})()
//# sourceMappingURL=test.dart.js.map
