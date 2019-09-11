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
a[c]=function(){a[c]=function(){H.pL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lr(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l5:function l5(){},
kz:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h7:function(){return new P.ca("No element")},
nL:function(){return new P.ca("Too many elements")},
nK:function(){return new P.ca("Too few elements")},
e3:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oe(a,b,c,d,e)
else H.od(a,b,c,d,e)},
oe:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b0(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
od:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.d.a5(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a5(a3+a4,2)
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
if(J.b0(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b0(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b0(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b0(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b0(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b0(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b0(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b0(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b0(a5.$2(k,j),0)){i=j
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
if(J.Q(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.P()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.am()
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
if(typeof a1!=="number")return a1.am()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.am()
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
H.e3(a2,a3,h-2,a5,a6)
H.e3(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.Q(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.Q(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
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
break}}}H.e3(a2,h,g,a5,a6)}else H.e3(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
fO:function fO(){},
c4:function c4(){},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
hp:function hp(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(){},
d_:function d_(){},
ed:function ed(){},
nB:function(){throw H.d(P.J("Cannot modify unmodifiable Map"))},
cs:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
ps:function(a){return v.types[H.a5(a)]},
pz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.d(H.ax(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o5:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.nX(a)+H.ln(H.bT(a),0,null)},
nX:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibO){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.b.D(t,0)===36?C.b.a6(t,1):t)},
nY:function(){if(!!self.location)return self.location.href
return},
m2:function(a){var u,t,s,r,q
H.kF(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o6:function(a){var u,t,s,r=H.c([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ax(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aN(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.ax(s))}return H.m2(r)},
m3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ax(s))
if(s<0)throw H.d(H.ax(s))
if(s>65535)return H.o6(a)}return H.m2(a)},
o7:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aN(u,10))>>>0,56320|u&1023)}}throw H.d(P.af(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o4:function(a){var u=H.c5(a).getFullYear()+0
return u},
o2:function(a){var u=H.c5(a).getMonth()+1
return u},
nZ:function(a){var u=H.c5(a).getDate()+0
return u},
o_:function(a){var u=H.c5(a).getHours()+0
return u},
o1:function(a){var u=H.c5(a).getMinutes()+0
return u},
o3:function(a){var u=H.c5(a).getSeconds()+0
return u},
o0:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
G:function(a){throw H.d(H.ax(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.d(H.cm(a,b))},
cm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.a5(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.e_(b,s)},
pm:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c8(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
ax:function(a){return new P.aP(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.dW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n_})
u.name=""}else u.toString=H.n_
return u},
n_:function(){return J.as(this.dartException)},
z:function(a){throw H.d(a)},
u:function(a){throw H.d(P.bj(a))},
be:function(a){var u,t,s,r,q,p
a=H.mZ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lY:function(a,b){return new H.hT(a,b==null?null:b.method)},
l6:function(a,b){var u=b==null,t=u?null:b.method
return new H.hb(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kU(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l6(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lY(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n3()
q=$.n4()
p=$.n5()
o=$.n6()
n=$.n9()
m=$.na()
l=$.n8()
$.n7()
k=$.nc()
j=$.nb()
i=r.ac(u)
if(i!=null)return f.$1(H.l6(H.I(u),i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.l6(H.I(u),i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lY(H.I(u),i))}}return f.$1(new H.iY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e4()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e4()
return a},
cq:function(a){var u
if(a==null)return new H.eR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eR(a)},
pq:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
py:function(a,b,c,d,e,f){H.h(a,"$ibC")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.C("Unsupported number of arguments for wrapped closure"))},
cl:function(a,b){var u
H.a5(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.py)
a.$identity=u
return u},
nA:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iq().constructor.prototype):Object.create(new H.cv(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b1
if(typeof t!=="number")return t.p()
$.b1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lL(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.ps,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lJ:H.kY
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lL(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nx:function(a,b,c,d){var u=H.kY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lL:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nz(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nx(t,!r,u,b)
if(t===0){r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cw
return new Function(r+H.i(q==null?$.cw=H.fv("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
o+=r
r="return function("+o+"){return this."
q=$.cw
return new Function(r+H.i(q==null?$.cw=H.fv("self"):q)+"."+H.i(u)+"("+o+");}")()},
ny:function(a,b,c,d){var u=H.kY,t=H.lJ
switch(b?-1:a){case 0:throw H.d(H.ob("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nz:function(a,b){var u,t,s,r,q,p,o,n=$.cw
if(n==null)n=$.cw=H.fv("self")
u=$.lI
if(u==null)u=$.lI=H.fv("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ny(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b1
if(typeof u!=="number")return u.p()
$.b1=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b1
if(typeof u!=="number")return u.p()
$.b1=u+1
return new Function(n+u+"}")()},
lr:function(a,b,c,d,e,f,g){return H.nA(a,b,H.a5(c),d,!!e,!!f,g)},
kY:function(a){return a.a},
lJ:function(a){return a.c},
fv:function(a){var u,t,s,r=new H.cv("self","target","receiver","name"),q=J.l3(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.pg("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.b_(a,"String"))},
pn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b_(a,"double"))},
mV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b_(a,"num"))},
lo:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.b_(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.b_(a,"int"))},
mX:function(a,b){throw H.d(H.b_(a,H.cs(H.I(b).substring(2))))},
pF:function(a,b){throw H.d(H.nw(a,H.cs(H.I(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mX(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.pF(a,b)},
kF:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.d(H.b_(a,"List<dynamic>"))},
mT:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mX(a,b)},
mN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
fe:function(a,b){var u
if(typeof a=="function")return!0
u=H.mN(J.V(a))
if(u==null)return!1
return H.mA(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lk)return a
$.lk=!0
try{if(H.fe(a,b))return a
u=H.kO(b)
t=H.b_(a,u)
throw H.d(t)}finally{$.lk=!1}},
lu:function(a,b){if(a!=null&&!H.lq(a,b))H.z(H.b_(a,H.kO(b)))
return a},
b_:function(a,b){return new H.iN("TypeError: "+P.dD(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
nw:function(a,b){return new H.fw("CastError: "+P.dD(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
mG:function(a){var u,t=J.V(a)
if(!!t.$icx){u=H.mN(t)
if(u!=null)return H.kO(u)
return"Closure"}return H.c6(a)},
pg:function(a){throw H.d(new H.jp(a))},
pL:function(a){throw H.d(new P.fG(H.I(a)))},
ob:function(a){return new H.ia(a)},
mQ:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qt:function(a,b,c){return H.cr(a["$a"+H.i(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.I(c)
H.a5(d)
u=H.cr(a["$a"+H.i(c)],H.bT(b))
return u==null?null:u[d]},
ar:function(a,b,c){var u
H.I(b)
H.a5(c)
u=H.cr(a["$a"+H.i(b)],H.bT(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a5(b)
u=H.bT(a)
return u==null?null:u[b]},
kO:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.ln(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oQ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.P)p+=" extends "+H.bR(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bR(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bR(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pp(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bR(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ln:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.i(0)+">"},
cr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lp:function(a,b,c,d){var u,t
H.I(b)
H.kF(c)
H.I(d)
if(a==null)return!1
u=H.bT(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mJ(H.cr(t[d],u),null,c,null)},
l:function(a,b,c,d){H.I(b)
H.kF(c)
H.I(d)
if(a==null)return a
if(H.lp(a,b,c,d))return a
throw H.d(H.b_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cs(b.substring(2))+H.ln(c,0,null),v.mangledGlobalNames)))},
mJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qr:function(a,b,c){return a.apply(b,H.cr(J.V(b)["$a"+H.i(c)],H.bT(b)))},
mS:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="O"||a===-1||a===-2||H.mS(u)}return!1},
lq:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="O"||b===-1||b===-2||H.mS(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fe(a,b)}u=J.V(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lq(a,b))throw H.d(H.b_(a,H.kO(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.mA(a,b,c,d)
if('func' in a)return c.name==="bC"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cD" in t.prototype))return!1
r=t.prototype["$a"+"cD"]
q=H.cr(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mJ(H.cr(m,u),b,p,d)},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aO(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aO(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aO(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pD(h,b,g,d)},
pD:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qs:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pB:function(a){var u,t,s,r,q=H.I($.mR.$1(a)),p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mI.$2(a,q))
if(q!=null){p=$.ky[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kN(u)
$.ky[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kD[q]=u
return u}if(s==="-"){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mW(a,u)
if(s==="*")throw H.d(P.iX(q))
if(v.leafTags[q]===true){r=H.kN(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mW(a,u)},
mW:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kN:function(a){return J.lw(a,!1,null,!!a.$iM)},
pC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kN(u)
else return J.lw(u,c,null,null)},
pw:function(){if(!0===$.lv)return
$.lv=!0
H.px()},
px:function(){var u,t,s,r,q,p,o,n
$.ky=Object.create(null)
$.kD=Object.create(null)
H.pv()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mY.$1(q)
if(p!=null){o=H.pC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pv:function(){var u,t,s,r,q,p,o=C.G()
o=H.ck(C.H,H.ck(C.I,H.ck(C.v,H.ck(C.v,H.ck(C.J,H.ck(C.K,H.ck(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mR=new H.kA(r)
$.mI=new H.kB(q)
$.mY=new H.kC(p)},
ck:function(a,b){return a(b)||b},
nN:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
po:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ly:function(a,b,c){var u=H.pK(a,b,c)
return u},
pK:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mZ(b),'g'),H.po(c))},
fA:function fA(){},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iL:function iL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hT:function hT(a,b){this.a=a
this.b=b},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
kU:function kU(a){this.a=a},
eR:function eR(a){this.a=a
this.b=null},
cx:function cx(){},
iA:function iA(){},
iq:function iq(){},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(a){this.a=a},
fw:function fw(a){this.a=a},
ia:function ia(a){this.a=a},
jp:function jp(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hg:function hg(a,b){this.a=a
this.$ti=b},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ci:function(a){return a},
nW:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cm(b,a))},
oO:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pm(a,b,c))
return b},
cL:function cL(){},
bH:function bH(){},
dS:function dS(){},
cM:function cM(){},
dT:function dT(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
dU:function dU(){},
cN:function cN(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
pp:function(a){return J.lQ(a?Object.keys(a):[],null)},
pE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fg:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lv==null){H.pw()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iX("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lA()]
if(r!=null)return r
r=H.pB(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lA(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nM:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.af(a,0,4294967295,"length",null))
return J.lQ(new Array(a),b)},
lQ:function(a,b){return J.l3(H.c(a,[b]))},
l3:function(a){H.kF(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.h9.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dG.prototype
if(typeof a=="boolean")return J.h8.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.P)return a
return J.fg(a)},
pr:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.P)return a
return J.fg(a)},
co:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.P)return a
return J.fg(a)},
ff:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.P)return a
return J.fg(a)},
mO:function(a){if(typeof a=="number")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
mP:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
dj:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bO.prototype
return a},
cp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.P)return a
return J.fg(a)},
nl:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pr(a).p(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).t(a,b)},
b0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mO(a).am(a,b)},
lC:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mP(a).C(a,b)},
nm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mO(a).q(a,b)},
dm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.co(a).j(a,b)},
kV:function(a,b,c){return J.ff(a).k(a,b,c)},
nn:function(a,b){return J.dj(a).D(a,b)},
no:function(a,b,c){return J.cp(a).hs(a,b,c)},
np:function(a,b,c,d){return J.cp(a).hV(a,b,c,d)},
nq:function(a,b){return J.dj(a).W(a,b)},
kW:function(a,b){return J.mP(a).i8(a,b)},
fi:function(a,b){return J.ff(a).I(a,b)},
nr:function(a,b,c,d){return J.cp(a).ip(a,b,c,d)},
lD:function(a,b){return J.ff(a).G(a,b)},
ns:function(a){return J.cp(a).gi3(a)},
lE:function(a){return J.cp(a).gc2(a)},
dn:function(a){return J.V(a).gH(a)},
bw:function(a){return J.ff(a).gS(a)},
aC:function(a){return J.co(a).gn(a)},
lF:function(a){return J.ff(a).iV(a)},
nt:function(a,b){return J.cp(a).iZ(a,b)},
nu:function(a,b,c){return J.dj(a).w(a,b,c)},
nv:function(a){return J.dj(a).j6(a)},
as:function(a){return J.V(a).i(a)},
a:function a(){},
h8:function h8(){},
dG:function dG(){},
dH:function dH(){},
hX:function hX(){},
bO:function bO(){},
bm:function bm(){},
aR:function aR(a){this.$ti=a},
l4:function l4(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bE:function bE(){},
dF:function dF(){},
h9:function h9(){},
bl:function bl(){}},P={
oq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ph()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cl(new P.jr(s),1)).observe(u,{childList:true})
return new P.jq(s,u,t)}else if(self.setImmediate!=null)return P.pi()
return P.pj()},
or:function(a){self.scheduleImmediate(H.cl(new P.js(H.n(a,{func:1,ret:-1})),0))},
os:function(a){self.setImmediate(H.cl(new P.jt(H.n(a,{func:1,ret:-1})),0))},
ot:function(a){P.lb(C.o,H.n(a,{func:1,ret:-1}))},
lb:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a5(a.a,1000)
return P.oz(u<0?0:u,b)},
mb:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bc]})
u=C.d.a5(a.a,1000)
return P.oA(u<0?0:u,b)},
oz:function(a,b){var u=new P.eX()
u.eL(a,b)
return u},
oA:function(a,b){var u=new P.eX()
u.eM(a,b)
return u},
ou:function(a,b){var u,t,s
b.a=1
try{a.ea(new P.jD(b),new P.jE(b),null)}catch(s){u=H.aj(s)
t=H.cq(s)
P.pG(new P.jF(b,u,t))}},
mp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaN")
if(u>=4){t=b.bQ()
b.a=a.a
b.c=a.c
P.d4(b,t)}else{t=H.h(b.c,"$ibg")
b.a=2
b.c=a
a.d5(t)}},
d4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kp(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d4(h.a,b)}g=h.a
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
if(m){H.h(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kp(i,i,g,r,q)
return}l=$.a_
if(l!=n)$.a_=n
else l=i
g=b.c
if(g===8)new P.jJ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jI(u,b,o).$0()}else if((g&2)!==0)new P.jH(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.V(g).$icD){if(g.a>=4){k=H.h(q.c,"$ibg")
q.c=null
b=q.bi(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mp(g,q)
return}}j=b.b
k=H.h(j.c,"$ibg")
j.c=null
b=j.bi(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
pc:function(a,b){if(H.fe(a,{func:1,args:[P.P,P.av]}))return H.n(a,{func:1,ret:null,args:[P.P,P.av]})
if(H.fe(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.d(P.kX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pb:function(){var u,t
for(;u=$.cj,u!=null;){$.di=null
t=u.b
$.cj=t
if(t==null)$.dh=null
u.a.$0()}},
pf:function(){$.ll=!0
try{P.pb()}finally{$.di=null
$.ll=!1
if($.cj!=null)$.lB().$1(P.mK())}},
mF:function(a){var u=new P.ej(H.n(a,{func:1,ret:-1}))
if($.cj==null){$.cj=$.dh=u
if(!$.ll)$.lB().$1(P.mK())}else $.dh=$.dh.b=u},
pe:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cj
if(u==null){P.mF(a)
$.di=$.dh
return}t=new P.ej(a)
s=$.di
if(s==null){t.b=u
$.cj=$.di=t}else{t.b=s.b
$.di=s.b=t
if(t.b==null)$.dh=t}},
pG:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a_
if(C.f===u){P.kr(t,t,C.f,a)
return}u.toString
P.kr(t,t,u,H.n(u.bY(a),s))},
ma:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a_
if(u===C.f){u.toString
return P.lb(a,b)}return P.lb(a,H.n(u.bY(b),t))},
oh:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bc]}
H.n(b,s)
u=$.a_
if(u===C.f){u.toString
return P.mb(a,b)}t=u.dm(b,P.bc)
$.a_.toString
return P.mb(a,H.n(t,s))},
kp:function(a,b,c,d,e){var u={}
u.a=d
P.pe(new P.kq(u,e))},
mB:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mC:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
pd:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kr:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bY(d):c.i4(d,-1)
P.mF(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
eX:function eX(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aN:function aN(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jC:function jC(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jK:function jK(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a
this.b=null},
it:function it(){},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
cT:function cT(){},
iu:function iu(){},
bc:function bc(){},
am:function am(a,b){this.a=a
this.b=b},
kg:function kg(){},
kq:function kq(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
nP:function(a,b){return new H.a2([a,b])},
l7:function(a,b){return new H.a2([a,b])},
nR:function(a){return H.pq(a,new H.a2([null,null]))},
dK:function(a){return new P.jO([a])},
lh:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oy:function(a,b,c){var u=new P.ey(a,b,[c])
u.c=a.e
return u},
nJ:function(a,b,c){var u,t
if(P.lm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.aw,a)
try{P.oR(a,u)}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=P.m8(b,H.mT(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l2:function(a,b,c){var u,t
if(P.lm(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.aw,a)
try{t=u
t.a=P.m8(t.a,a,", ")}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lm:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oR:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.i(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.A();o=n,n=m){m=u.gJ(u);++s
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
nQ:function(a,b,c){var u=P.nP(b,c)
a.G(0,new P.hi(u,b,c))
return u},
lR:function(a,b){var u,t,s=P.dK(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.B(a[t],b))
return s},
l8:function(a){var u,t={}
if(P.lm(a))return"{...}"
u=new P.ag("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lD(a,new P.hm(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jO:function jO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cg:function cg(a){this.a=a
this.c=this.b=null},
ey:function ey(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(){},
x:function x(){},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
ad:function ad(){},
k8:function k8(){},
hn:function hn(){},
ee:function ee(a,b){this.a=a
this.$ti=b},
jV:function jV(){},
ez:function ez(){},
f1:function f1(){},
ok:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.ol(!1,b,c,d)
return},
ol:function(a,b,c,d){var u,t,s=$.nd()
if(s==null)return
u=0===c
if(u&&!0)return P.le(s,b)
t=b.length
d=P.bp(c,d,t)
if(u&&d===t)return P.le(s,b)
return P.le(s,b.subarray(c,d))},
le:function(a,b){if(P.on(b))return
return P.oo(a,b)},
oo:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
on:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
om:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mE:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.co(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.af()
if((s&127)!==s)return t-b}return c-b},
lH:function(a,b,c,d,e,f){if(C.d.bb(f,4)!==0)throw H.d(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fs:function fs(){},
ft:function ft(){},
bZ:function bZ(){},
bA:function bA(){},
fQ:function fQ(){},
h5:function h5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h4:function h4(a){this.a=a},
j5:function j5(){},
j7:function j7(){},
ke:function ke(a){this.b=0
this.c=a},
j6:function j6(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fh:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.o5(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a7(a,null,null))},
nG:function(a){if(a instanceof H.cx)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nS:function(a,b,c){var u,t
H.B(b,c)
u=J.nM(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
lS:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bw(a);u.A();)C.a.h(s,H.B(u.gJ(u),c))
if(b)return s
return H.l(J.l3(s),"$ib",t,"$ab")},
cU:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bp(b,c,u)
return H.m3(b>0||c<u?C.a.en(a,b,c):a)}if(!!J.V(a).$icN)return H.o7(a,b,P.bp(b,c,a.length))
return P.of(a,b,c)},
of:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.d(P.af(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.af(c,b,J.aC(a),q,q))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.af(c,b,s,q,q))
r.push(t.gJ(t))}return H.m3(r)},
o9:function(a){return new H.ha(a,H.nN(a,!1,!0,!1))},
m8:function(a,b,c){var u=J.bw(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.A())}else{a+=H.i(u.gJ(u))
for(;u.A();)a=a+c+H.i(u.gJ(u))}return a},
me:function(){var u=H.nY()
if(u!=null)return P.oj(u)
throw H.d(P.J("'Uri.base' is not supported"))},
f2:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nj().b
if(typeof b!=="string")H.z(H.ax(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.ar(c,"bZ",0))
t=c.gio().c3(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nC:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dy:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a,b){return new P.b4(1e6*b+1000*a)},
dD:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nG(a)},
fl:function(a){return new P.aP(!1,null,null,a)},
kX:function(a,b,c){return new P.aP(!0,a,b,c)},
e_:function(a,b){return new P.c8(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c){if(0>a||a>c)throw H.d(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.af(b,a,c,"end",null))
return b}return c},
l9:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.d(P.af(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.a5(e==null?J.aC(b):e)
return new P.h6(u,!0,a,c,"Index out of range")},
J:function(a){return new P.iZ(a)},
iX:function(a){return new P.iW(a)},
m7:function(a){return new P.ca(a)},
bj:function(a){return new P.fz(a)},
C:function(a){return new P.er(a)},
a7:function(a,b,c){return new P.h_(a,b,c)},
nT:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.c([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lx:function(a){H.pE(a)},
oj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.md(e<e?C.b.w(a,0,e):a,5,f).geg()
else if(u===32)return P.md(C.b.w(a,5,e),0,f).geg()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.m])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mD(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jd()
if(r>=0)if(P.mD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a9(a,"..",o)))j=n>o+2&&C.b.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a9(a,"file",0)){if(q<=0){if(!C.b.a9(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.w(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aS(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a9(a,"http",0)){if(t&&p+3===o&&C.b.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a9(a,"https",0)){if(t&&p+4===o&&C.b.a9(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jY(a,r,q,p,o,n,m,k)}return P.oB(a,0,e,r,q,p,o,n,m,k)},
mg:function(a){var u=P.f
return C.a.it(H.c(a.split("&"),[u]),P.l7(u,u),new P.j3(C.h),[P.y,P.f,P.f])},
oi:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j0(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fh(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.am()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fh(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.am()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j1(a)
t=new P.j2(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gau(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oi(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.d.aN(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oB:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oI(a,b,d)
else{if(d===b)P.de(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oJ(a,u,e-1):""
s=P.oF(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oH(P.fh(C.b.w(a,r,g),new P.k9(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oG(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.li(a,h+1,i,n):n
return new P.ch(j,t,s,q,p,o,i<c?P.oE(a,i+1,c):n)},
mt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
de:function(a,b,c){throw H.d(P.a7(c,a,b))},
oH:function(a,b){if(a!=null&&a===P.mt(b))return
return a},
oF:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.q()
u=c-1
if(C.b.W(a,u)!==93)P.de(a,b,"Missing end `]` to match `[` in host")
P.mf(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.mf(a,b,c)
return"["+a+"]"}return P.oL(a,b,c)},
oL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.mz(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.de(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mu(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oI:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mw(C.b.D(a,b)))P.de(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.de(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.oC(t?a.toLowerCase():a)},
oC:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oJ:function(a,b,c){return P.df(a,b,c,C.V,!1)},
oG:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.df(a,b,c,C.A,!0):C.i.jy(d,new P.ka(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a2(u,"/"))u="/"+u
return P.oK(u,e,f)},
oK:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a2(a,"/"))return P.oM(a,!u||c)
return P.oN(a)},
li:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.f,null],"$ay")
if(a!=null){if(d!=null)throw H.d(P.fl("Both query and queryParameters specified"))
return P.df(a,b,c,C.k,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.G(0,new P.kb(new P.kc(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oE:function(a,b,c){return P.df(a,b,c,C.k,!0)},
mz:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kz(u)
r=H.kz(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aN(q,4)
if(p>=8)return H.e(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
mu:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.d.hF(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cU(t,0,null)},
df:function(a,b,c,d,e){var u=P.my(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.P()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mz(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.j,p)
p=(C.j[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.de(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mu(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.w(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.P()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mx:function(a){if(C.b.a2(a,"."))return!0
return C.b.dK(a,"/.")!==-1},
oN:function(a){var u,t,s,r,q,p,o
if(!P.mx(a))return a
u=H.c([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oM:function(a,b){var u,t,s,r,q,p
if(!P.mx(a))return!b?P.mv(a):a
u=H.c([],[P.f])
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
C.a.k(u,0,P.mv(u[0]))}return C.a.m(u,"/")},
mv:function(a){var u,t,s,r=a.length
if(r>=2&&P.mw(J.nn(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oD:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.fl("Invalid URL encoding"))}}return u},
lj:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.t(C.b.w(a,b,c))}else{r=H.c([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.d(P.fl("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.fl("Truncated URI"))
C.a.h(r,P.oD(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.j6(!1).c3(r)},
mw:function(a){var u=a|32
return 97<=u&&u<=122},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a7(m,a,t))}}if(s<0&&t>b)throw H.d(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gau(l)
if(r!==44||t!==p+7||!C.b.a9(a,"base64",p+1))throw H.d(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iE(0,a,o,u)
else{n=P.my(a,o,u,C.k,!0)
if(n!=null)a=C.b.aS(a,o,u,n)}return new P.j_(a,l,c)},
oP:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nT(22,new P.kk(),P.R),n=new P.kj(o),m=new P.kl(),l=new P.km(),k=H.h(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iR"),"]",5)
k=H.h(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iR"),"az",21)
k=H.h(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mD:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nk()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
S:function S(){},
ay:function ay(a,b){this.a=a
this.b=b},
p:function p(){},
b4:function b4(a){this.a=a},
fM:function fM(){},
fN:function fN(){},
bB:function bB(){},
fm:function fm(){},
dW:function dW(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h6:function h6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
ca:function ca(a){this.a=a},
fz:function fz(a){this.a=a},
hW:function hW(){},
e4:function e4(){},
fG:function fG(a){this.a=a},
er:function er(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(){},
m:function m(){},
j:function j(){},
b5:function b5(){},
b:function b(){},
y:function y(){},
O:function O(){},
aa:function aa(){},
P:function P(){},
av:function av(){},
f:function f(){},
ag:function ag(a){this.a=a},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(){},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(){},
kj:function kj(a){this.a=a},
kl:function kl(){},
km:function km(){},
jY:function jY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.l7(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.I(t[r])
u.k(0,q,a[q])}return u},
pk:function(a){var u={}
a.G(0,new P.ks(u))
return u},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(){},
fY:function fY(){},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ox:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:function jP(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
hd:function hd(){},
b9:function b9(){},
hU:function hU(){},
i0:function i0(){},
cQ:function cQ(){},
ix:function ix(){},
q:function q(){},
bd:function bd(){},
iK:function iK(){},
ew:function ew(){},
ex:function ex(){},
eH:function eH(){},
eI:function eI(){},
eT:function eT(){},
eU:function eU(){},
f_:function f_(){},
f0:function f0(){},
R:function R(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
fr:function fr(){},
bW:function bW(){},
hV:function hV(){},
ek:function ek(){},
dr:function dr(){},
dZ:function dZ(){},
c9:function c9(){},
e1:function e1(){},
ec:function ec(){},
ip:function ip(){},
eP:function eP(){},
eQ:function eQ(){}},W={
lG:function(){var u=document.createElement("a")
return u},
lK:function(){var u=document.createElement("canvas")
return u},
nE:function(a,b,c){var u=document.body,t=(u&&C.t).ab(u,a,b,c)
t.toString
u=W.E
u=new H.d1(new W.aq(t),H.n(new W.fP(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaH(u),"$iU")},
nF:function(a){H.h(a,"$ik")
return"wheel"},
cA:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cp(a)
t=u.ge8(a)
if(typeof t==="string")r=u.ge8(a)}catch(s){H.aj(s)}return r},
nI:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icG")
try{s.type=a}catch(u){H.aj(u)}return s},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mr:function(a,b,c,d){var u=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mH(new W.jB(c),W.o)
if(u!=null&&!0)J.np(a,b,u,!1)
return new W.jA(a,b,u,!1,[e])},
mq:function(a){var u=W.lG(),t=window.location
u=new W.bQ(new W.jU(u,t))
u.eB(a)
return u},
ov:function(a,b,c,d){H.h(a,"$iU")
H.I(b)
H.I(c)
H.h(d,"$ibQ")
return!0},
ow:function(a,b,c,d){var u,t,s
H.h(a,"$iU")
H.I(b)
H.I(c)
u=H.h(d,"$ibQ").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ms:function(){var u=P.f,t=P.lR(C.p,u),s=H.r(C.p,0),r=H.n(new W.k5(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.k4(t,P.dK(u),P.dK(u),P.dK(u),null)
t.eI(null,new H.hq(C.p,r,[s,u]),q,null)
return t},
mH:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.f)return a
return u.dm(a,b)},
v:function v(){},
fj:function fj(){},
dp:function dp(){},
fk:function fk(){},
cu:function cu(){},
bX:function bX(){},
bx:function bx(){},
bY:function bY(){},
by:function by(){},
cy:function cy(){},
fC:function fC(){},
W:function W(){},
cz:function cz(){},
fD:function fD(){},
b2:function b2(){},
b3:function b3(){},
fE:function fE(){},
fF:function fF(){},
fI:function fI(){},
aF:function aF(){},
fJ:function fJ(){},
dA:function dA(){},
dB:function dB(){},
fK:function fK(){},
fL:function fL(){},
jv:function jv(a,b){this.a=a
this.b=b},
U:function U(){},
fP:function fP(){},
o:function o(){},
k:function k(){},
aG:function aG(){},
cC:function cC(){},
fV:function fV(){},
fZ:function fZ(){},
aQ:function aQ(){},
h3:function h3(){},
c1:function c1(){},
cF:function cF(){},
cG:function cG(){},
b6:function b6(){},
dL:function dL(){},
hE:function hE(){},
cJ:function cJ(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hH:function hH(){},
hI:function hI(a){this.a=a},
aS:function aS(){},
hJ:function hJ(){},
ae:function ae(){},
aq:function aq(a){this.a=a},
E:function E(){},
cO:function cO(){},
aT:function aT(){},
hZ:function hZ(){},
i8:function i8(){},
i9:function i9(a){this.a=a},
ib:function ib(){},
aU:function aU(){},
im:function im(){},
aV:function aV(){},
io:function io(){},
aW:function aW(){},
ir:function ir(){},
is:function is(a){this.a=a},
aJ:function aJ(){},
bb:function bb(){},
e5:function e5(){},
iy:function iy(){},
iz:function iz(){},
cV:function cV(){},
aX:function aX(){},
aK:function aK(){},
iB:function iB(){},
iC:function iC(){},
iE:function iE(){},
aY:function aY(){},
aZ:function aZ(){},
iI:function iI(){},
iJ:function iJ(){},
bN:function bN(){},
j4:function j4(){},
jm:function jm(){},
bf:function bf(){},
d2:function d2(){},
d3:function d3(){},
jw:function jw(){},
em:function em(){},
jL:function jL(){},
eE:function eE(){},
jZ:function jZ(){},
k2:function k2(){},
ju:function ju(){},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lg:function lg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jA:function jA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jB:function jB(a){this.a=a},
bQ:function bQ(a){this.a=a},
F:function F(){},
dV:function dV(a){this.a=a},
hR:function hR(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(){},
jW:function jW(){},
jX:function jX(){},
k4:function k4(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k5:function k5(){},
k3:function k3(){},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
jU:function jU(a,b){this.a=a
this.b=b},
f3:function f3(a){this.a=a},
kf:function kf(a){this.a=a},
el:function el(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
da:function da(){},
db:function db(){},
eN:function eN(){},
eO:function eO(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
dc:function dc(){},
dd:function dd(){},
eY:function eY(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){}},O={
kZ:function(a){var u=new O.a6([a])
u.bB(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cI:function cI(){this.b=this.a=null},
lT:function(){var u,t,s=new O.dO()
s.seU(O.kZ(V.ap))
s.e.bc(s.gfv(),s.gfz())
u=new O.b8(s,"emission")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
s.f=u
u=new O.b8(s,"ambient")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
s.r=u
u=new O.b8(s,"diffuse")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
s.x=u
u=new O.b8(s,"invDiffuse")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
s.y=u
u=new O.hx(s,"specular")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
u.ch=100
s.z=u
u=new O.ht(s,"bump")
u.c=new A.an(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b8(s,"reflect")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
s.cx=u
u=new O.hw(s,"refract")
u.c=new A.an(!1,!1,!1)
u.f=new V.a1(0,0,0)
u.ch=1
s.cy=u
u=new O.hs(s,"alpha")
u.c=new A.an(!1,!1,!1)
u.f=1
s.db=u
u=new D.dJ()
u.bB(D.ac)
u.seD(H.c([],[D.dz]))
u.shj(H.c([],[D.dY]))
u.seE(H.c([],[D.bL]))
u.y=u.x=null
u.cu(u.gft(),u.gh7(),u.ghb())
s.dx=u
t=new O.hv()
t.b=new V.aD(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.a0():t
u.h(0,s.ghu())
u=s.dx
t=u.y
u=t==null?u.y=D.a0():t
u.h(0,s.geJ())
s.fr=null
return s},
dO:function dO(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hs:function hs(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dP:function dP(){},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(){var _=this
_.e=_.d=_.c=_.b=null},
hw:function hw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
l0:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seA(0,O.kZ(E.ao))
u.y.bc(u.giF(),u.giI())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa8(0,null)
u.sb9(null)
u.saQ(null)
return u},
oa:function(a,b){var u=new E.i4(a)
u.ew(a,b)
return u},
og:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibY)return E.m9(a,!0,!0,!0,!1)
u=W.lK()
t=u.style
t.width="100%"
t.height="100%"
s.gc2(a).h(0,u)
return E.m9(u,!0,!0,!0,!1)},
m9:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e8(),j=H.h(C.n.ek(a,"webgl2",P.nR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(j==null)H.z(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oa(j,a)
H.a5(j.getParameter(3379))
H.a5(j.getParameter(34076))
u=new X.ef(a)
t=new X.hc()
t.shm(P.dK(P.m))
u.b=t
t=new X.hK(u)
t.f=0
t.r=V.bJ()
t.x=V.bJ()
t.ch=t.Q=1
u.c=t
t=new X.hk(u)
t.r=0
t.x=V.bJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iH(u)
t.f=V.bJ()
t.r=V.bJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf5(H.c([],[[P.cT,P.P]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.gfJ(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.gfP(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gfB(),o),!1,p))
t=u.z
n=W.b6
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.gfT(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.gfR(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.gfX(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.gh0(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.gfZ(),q),!1,r))
n=u.z
m=W.bf;(n&&C.a).h(n,W.ab(a,H.I(W.nF(a)),H.n(u.gh2(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.gfL(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.gfN(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.gh4(),o),!1,p))
p=u.z
o=W.aZ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghh(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghd(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghf(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.d7()
return k},
fu:function fu(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iD:function iD(a){this.a=a}},Z={
lf:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.ei(b,u)},
aM:function(a){return new Z.bP(a)},
ei:function ei(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jn:function jn(a){this.a=a},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a){this.a=a}},D={
a0:function(){var u=new D.c_()
u.sag(null)
u.saL(null)
u.c=null
u.d=0
return u},
fx:function fx(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
D:function D(){this.b=null},
c2:function c2(a){this.b=null
this.$ti=a},
c3:function c3(a){this.b=null
this.$ti=a},
N:function N(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dz:function dz(){},
ac:function ac(){},
dJ:function dJ(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dY:function dY(){},
bL:function bL(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={du:function du(a,b){this.a=a
this.b=b},dI:function dI(a,b){this.a=a
this.b=b},hc:function hc(){this.d=this.b=this.a=null},dM:function dM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hk:function hk(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},bG:function bG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hK:function hK(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i_:function i_(){},ea:function ea(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iH:function iH(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ef:function ef(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nH:function(a){var u=new X.h0(),t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m5
if(t==null){t=V.m4(0,0,1,1)
$.m5=t}u.r=t
return u},
dv:function dv(){},
h0:function h0(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){}},V={
pM:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bb(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.c.eb(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cn:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ad(u[p],s))}return u},
dR:function(){var u=$.lX
return u==null?$.lX=V.bo(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bo:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lW:function(a,b,c){return V.bo(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lV:function(a,b,c,d){return V.bo(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lU:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bo(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bJ:function(){var u=$.m0
return u==null?$.m0=new V.a9(0,0):u},
m1:function(){var u=$.bK
return u==null?$.bK=new V.a3(0,0,0):u},
m4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e0(a,b,c,d)},
d0:function(){var u=$.ml
return u==null?$.ml=new V.K(0,0,0):u},
op:function(){var u=$.j8
return u==null?$.j8=new V.K(-1,0,0):u},
mm:function(){var u=$.j9
return u==null?$.j9=new V.K(0,1,0):u},
mn:function(){var u=$.ja
return u==null?$.ja=new V.K(0,0,1):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a){this.a=a},
dQ:function dQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ap:function ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.i3()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ic()
u.ex(a)
return u},
iG:function(){var u=new V.iF(),t=P.f
u.shI(new H.a2([t,V.cS]))
u.shK(new H.a2([t,V.cW]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dN:function dN(){},
au:function au(){this.a=null},
i3:function i3(){this.b=this.a=null},
ic:function ic(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.b=a
this.c=null},
iF:function iF(){this.c=this.b=this.a=null},
cX:function cX(a){this.b=a
this.a=this.c=null},
pH:function(a){P.oh(C.P,new V.kP(a))},
oc:function(a){var u=new V.ih()
u.ez(a,!0)
return u},
bz:function bz(){},
kP:function kP(a){this.a=a},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h1:function h1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h2:function h2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hY:function hY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i1:function i1(a){this.a=a
this.c=null},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(){this.b=this.a=null},
ij:function ij(a){this.a=a},
ii:function ii(a){this.a=a},
ik:function ik(a){this.a=a}},U={
lM:function(){var u=new U.fy()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dx:function(a){var u=new U.dw()
u.a=a
return u},
l1:function(){var u=new U.cE()
u.bB(U.ak)
u.bc(u.geF(),u.gh9())
u.e=null
u.f=V.dR()
u.r=0
return u},
mh:function(a,b){var u,t,s,r=new U.eg(),q=U.lM()
q.sei(0,!0)
q.sdO(6.283185307179586)
q.sdQ(0)
q.sa0(0,0)
q.sdP(100)
q.sY(0)
q.sdr(0.5)
r.b=q
u=r.gbf()
q.gB().h(0,u)
q=U.lM()
q.sei(0,!0)
q.sdO(6.283185307179586)
q.sdQ(0)
q.sa0(0,0)
q.sdP(100)
q.sY(0)
q.sdr(0.5)
r.c=q
q.gB().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bF(a,!1,!1)
s=r.d
r.d=t
q=new D.N("modifiers",s,t,[X.bF])
q.b=!0
r.X(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.N("invertX",q,!1,[P.S])
q.b=!0
r.X(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.N("invertY",q,!1,[P.S])
q.b=!0
r.X(q)}r.i2(b)
return r},
fy:function fy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){this.b=this.a=null},
cE:function cE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
eg:function eg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dC:function dC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nU:function(a,b){var u=a.b1,t=new A.hr(b,u)
t.ey(b,u)
t.ev(a,b)
return t},
nV:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aE],"$ab")
H.l(b0,"$ib",[A.aH],"$ab")
H.l(b1,"$ib",[A.aI],"$ab")
u="MaterialLight_"+a0.gal(a0)+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.u)(a9),++s)u+="_"+H.i(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.u)(b0),++s)u+="_"+H.i(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.u)(b1),++s)u+="_"+H.i(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
for(t=b0.length,s=0;s<t;++s,q=!0)r+=b0[s].b
for(p=b1.length,s=0;s<p;++s,q=!0)r+=b1[s].b
if(!a6.a)p=!1
else p=!0
if(!p)if(!a7.a)o=!1
else o=!0
else o=!0
if(!a1.a)p=!1
else p=!0
if(!p){if(!a2.a)p=!1
else p=!0
if(!p){if(!a3.a)p=!1
else p=!0
if(!p)if(!a4.a)p=!1
else p=!0
else p=!0
n=p}else n=!0}else n=!0
p=!a4.a
if(p)m=!1
else m=!0
l=m||t>0||o
if(!a2.a)t=!1
else t=!0
if(!t){if(!a3.a)t=!1
else t=!0
if(!t){if(p)t=!1
else t=!0
k=t}else k=!0}else k=!0
if(!k){if(!a5.a)t=!1
else t=!0
j=t||o}else j=!0
if(!a5.a)i=!1
else i=!0
h=e>0
g=j||i||l||!1
f=$.bv()
if(j){t=$.bu()
f=new Z.bP(f.a|t.a)}if(i){t=$.bt()
f=new Z.bP(f.a|t.a)}if(h){t=$.bs()
f=new Z.bP(f.a|t.a)}return new A.hu(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kn:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ko:function(a,b,c){var u
A.kn(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oV:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kn(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oS:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ko(b,t,"ambient")
b.a+="\n"},
oT:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ko(b,t,"diffuse")
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
oW:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ko(b,t,"invDiffuse")
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
p1:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ko(b,t,"specular")
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
oY:function(a,b){var u,t,s
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
p_:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kn(b,t,"reflect")
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
p0:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kn(b,t,"refract")
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
oU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.af()
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
oZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.af()
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
l=H.c([],r)
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
p2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.af()
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
j=H.c([],u)
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
oX:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.f])
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
p3:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ag("")
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
A.oV(a,j)
A.oS(a,j)
A.oT(a,j)
A.oW(a,j)
A.p1(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p_(a,j)
A.p0(a,j)}A.oY(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oU(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oZ(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p2(a,q[o],j)
A.oX(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.f])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a6(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
p4:function(a,b){var u,t,s
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
p6:function(a,b){var u
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
p5:function(a,b){var u
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
p8:function(a,b){var u,t
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
p9:function(a,b){var u,t
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
p7:function(a,b){var u
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
pa:function(a,b){var u
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
return a[0].toUpperCase()+C.b.a6(a,1)},
lc:function(a,b,c,d,e){var u=new A.iP(a,c,e)
u.f=d
u.shS(P.nS(d,0,P.m))
return u},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b){var _=this
_.jk=_.jj=_.dt=_.ds=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jx=_.jw=_.jv=_.cc=_.cb=_.ca=_.c9=_.c8=_.c7=_.ju=_.jt=_.dC=_.js=_.jr=_.dB=_.dA=_.jq=_.jp=_.dz=_.dw=_.jo=_.jn=_.dv=_.jm=_.jl=_.du=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aE:function aE(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ds=b4},
cb:function cb(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cc:function cc(a,b,c,d,e,f,g,h,i,j){var _=this
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
cR:function cR(){},
eb:function eb(){},
iU:function iU(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ls:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.p,P.p]})
u=F.la()
F.dg(u,b,c,d,a,1,0,0,1)
F.dg(u,b,c,d,a,0,1,0,3)
F.dg(u,b,c,d,a,0,0,1,2)
F.dg(u,b,c,d,a,-1,0,0,0)
F.dg(u,b,c,d,a,0,-1,0,0)
F.dg(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
ki:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.p,P.p]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.K(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.K(p+a3,o+a1,n+a2)
l=new V.K(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.K(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.ki(u)
g=F.ki(e.b)
f=F.lz(d,a0,new F.kh(e,F.ki(e.c),F.ki(e.d),g,h,c),b)
if(f!=null)a.b6(f)},
mM:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.la()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.ai])
q=u.a
p=new V.K(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
C.a.h(r,q.hY(new V.ba(a,-1,-1,-1),new V.aD(1,1,1,1),new V.a3(0,0,c),new V.K(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.K(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.eh(new V.ba(a,-1,-1,-1),null,new V.aD(i,g,h,1),new V.a3(m*k,l*k,c),new V.K(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hW(r)
return u},
lt:function(a,b,c,d,e){return F.pl(b,c,1,new F.kt(a,e),d)},
pl:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.lz(c,e,new F.kv(d),null)
if(u==null)return
u.at()
u.bX()
if(b)u.b6(F.mM(3,!1,1,new F.kw(d),e))
if(a)u.b6(F.mM(1,!0,-1,new F.kx(d),e))
return u},
pI:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kQ()
t=F.ls(a,null,new F.kR(s,1),b)
t.bX()
return t},
n0:function(){return F.mL(15,30,0.5,1,new F.kT())},
pA:function(){return F.mL(12,120,0.3,1,new F.kE(3,2))},
mL:function(a,b,c,d,e){var u=F.lz(a,b,new F.ku(H.n(e,{func:1,ret:V.a3,args:[P.p]}),d,b,c),null)
if(u==null)return
u.at()
u.bX()
return u},
lz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ai,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.la()
t=H.c([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eh(g,g,new V.aD(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c4(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eh(g,g,new V.aD(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c4(d))}}u.d.hX(a+1,b+1,t)
return u},
cB:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.C("May not create a face with vertices attached to different shapes."))
u.bV(a)
u.bW(b)
u.hA(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
nO:function(a,b){var u=new F.bn(),t=a.a
if(t==null)H.z(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.C("May not create a line with vertices attached to different shapes."))
u.bV(a)
u.bW(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
la:function(){var u=new F.e2(),t=new F.jb(u)
t.b=!1
t.shT(H.c([],[F.ai]))
u.a=t
t=new F.ig(u)
t.sbO(H.c([],[F.bI]))
u.b=t
t=new F.ie(u)
t.sfc(H.c([],[F.bn]))
u.c=t
t=new F.id(u)
t.sf6(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
eh:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.jj()
r.sbO(H.c([],[F.bI]))
s.b=r
r=new F.jf()
u=[F.bn]
r.sfd(H.c([],u))
r.sfe(H.c([],u))
s.c=r
r=new F.jc()
u=[F.a8]
r.sf7(H.c([],u))
r.sf8(H.c([],u))
r.sf9(H.c([],u))
s.d=r
h=$.ne()
s.e=0
r=$.bv()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bu().a)!==0?e:t
s.x=(u&$.bt().a)!==0?b:t
s.y=(u&$.bU().a)!==0?f:t
s.z=(u&$.bV().a)!==0?g:t
s.Q=(u&$.nf().a)!==0?c:t
s.ch=(u&$.ct().a)!==0?i:0
s.cx=(u&$.bs().a)!==0?a:t
return s},
kh:function kh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kt:function kt(a,b){this.a=a
this.b=b},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
kQ:function kQ(){},
kR:function kR(a,b){this.a=a
this.b=b},
kT:function kT(){},
kE:function kE(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(){},
il:function il(){},
bn:function bn(){this.b=this.a=null},
he:function he(){},
iO:function iO(){},
bI:function bI(){this.a=null},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){this.a=a
this.b=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jl:function jl(a){this.a=a},
jk:function jk(a){this.a=a},
jb:function jb(a){this.a=a
this.c=this.b=null},
jc:function jc(){this.d=this.c=this.b=null},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(){this.c=this.b=null},
jh:function jh(){},
jg:function jg(){},
ji:function ji(){},
hS:function hS(){},
jj:function jj(){this.b=null}},T={e7:function e7(){}},N={
mU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.oc("Test 024"),a=W.lK()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.f]
b.dj(H.c(["Test of the Material Lighting shader with a simple spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.hU(H.c(["shapes"],u))
b.dj(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.z(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.og(t,!0,!0,!0,!1)
r=U.l1()
r.h(0,U.dx(V.lW(0,0,-2.5)))
r.h(0,U.mh(!0,s.r))
q=new V.a1(1,1,1)
p=new D.bL()
p.r=new V.a1(1,1,1)
p.ch=1.0471975511965976
p.cx=1
p.dx=p.cy=1.5707963267948966
p.db=!0
p.dy=1
p.fx=p.fr=0
p.fy=!0
p.a=V.m1()
p.b=V.mn()
p.c=V.mm()
p.d=V.op()
o=p.f
p.f=r
r.gB().h(0,p.gfD())
n=new D.N("mover",o,p.f,[U.ak])
n.b=!0
p.a_(n)
if(!p.r.t(0,q)){o=p.r
p.r=q
n=new D.N("color",o,q,[V.a1])
n.b=!0
p.a_(n)}n=p.ch
if(!(Math.abs(n-1.0471975511965976)<$.L().a)){p.ch=1.0471975511965976
m=1/(Math.sqrt(2)*Math.tan(p.ch))
p.z=m
p.Q=m*p.cx
n=new D.N("fov",n,p.ch,[P.p])
n.b=!0
p.a_(n)}n=p.cx
if(!(Math.abs(n-1)<$.L().a)){p.cx=1
m=p.z
if(typeof m!=="number")return m.C()
p.Q=m
n=new D.N("ratio",n,1,[P.p])
n.b=!0
p.a_(n)}n=p.cy
if(!(Math.abs(n-0.6)<$.L().a)){p.cy=0.6
n=new D.N("cutoff",n,0.6,[P.p])
n.b=!0
p.a_(n)}n=p.dx
if(!(Math.abs(n-0.5)<$.L().a)){p.dx=0.5
n=new D.N("coneAngle",n,0.5,[P.p])
n.b=!0
p.a_(n)}n=$.mo
if(n==null){n=new V.bq(1,0.00390625,0.0000152587890625,0)
$.mo=n
l=n}else l=n
if(!J.Q(p.e,l)){o=p.e
p.e=l
n=new D.N("shadowAdjust",o,l,[V.bq])
n.b=!0
p.a_(n)}n=p.dy
if(!(Math.abs(n-0.5)<$.L().a)){p.dy=0.5
n=new D.N("attenuation0",n,0.5,[P.p])
n.b=!0
p.a_(n)}n=p.fr
if(!(Math.abs(n-0.05)<$.L().a)){p.fr=0.05
n=new D.N("attenuation1",n,0.05,[P.p])
n.b=!0
p.a_(n)}n=p.fx
if(!(Math.abs(n-0.05)<$.L().a)){p.fx=0.05
n=new D.N("attenuation2",n,0.05,[P.p])
n.b=!0
p.a_(n)}k=O.lT()
k.dx.h(0,p)
k.f.saB(0,new V.a1(0,0,0))
n=k.r
n.saB(0,new V.a1(0,0,0))
n=k.x
n.saB(0,new V.a1(0.7,0.7,0.7))
n=k.z
n.saB(0,new V.a1(0.3,0.3,0.3))
n=k.z
n.d9(new A.an(!0,!1,!1))
n.da(100)
j=E.l0()
j.sa8(0,F.n0())
i=E.l0()
i.saQ(U.dx(V.lV(3,3,3,1)))
n=F.ls(1,c,c,1)
n.cd()
i.sa8(0,n)
h=U.l1()
h.h(0,U.mh(!1,s.r))
h.h(0,U.dx(V.lU(3.141592653589793)))
h.h(0,U.dx(V.lW(0,0,5)))
g=E.l0()
n=U.l1()
n.h(0,U.dx(V.lV(0.1,0.1,0.1,1)))
n.h(0,r)
g.saQ(n)
g.sa8(0,F.lt(0,!1,!0,40,1))
n=O.lT()
m=n.f
m.saB(0,new V.a1(1,1,1))
g.sb9(n)
n=new M.dC()
n.a=!0
n.seX(0,O.kZ(E.ao))
n.e.bc(n.gfF(),n.gfH())
n.y=n.x=n.r=n.f=null
f=X.nH(c)
e=new X.dX()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saQ(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.L().a)){e.c=1.0471975511965976
m=new D.N("fov",m,1.0471975511965976,[P.p])
m.b=!0
e.aJ(m)}m=e.d
if(!(Math.abs(m-0.1)<$.L().a)){e.d=0.1
m=new D.N("near",m,0.1,[P.p])
m.b=!0
e.aJ(m)}m=e.e
if(!(Math.abs(m-2000)<$.L().a)){e.e=2000
m=new D.N("far",m,2000,[P.p])
m.b=!0
e.aJ(m)}m=n.b
if(m!==e){if(m!=null)m.gB().L(0,n.gap())
o=n.b
n.b=e
e.gB().h(0,n.gap())
m=new D.N("camera",o,n.b,[X.dv])
m.b=!0
n.ax(m)}m=n.c
if(m!==f){if(m!=null)m.gB().L(0,n.gap())
o=n.c
n.c=f
f.gB().h(0,n.gap())
m=new D.N("target",o,n.c,[X.e6])
m.b=!0
n.ax(m)}n.sb9(c)
n.sb9(k)
n.e.h(0,j)
n.e.h(0,i)
n.e.h(0,g)
n.b.saQ(h)
m=s.d
if(m!==n){if(m!=null)m.gB().L(0,s.gcC())
s.d=n
n.gB().h(0,s.gcC())
s.cD()}n=new V.i1("shapes")
u=u.getElementById("shapes")
n.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
n.aZ(0,"Cube",new N.kG(j))
n.aZ(0,"Cylinder",new N.kH(j))
n.aZ(0,"Cone",new N.kI(j))
n.aZ(0,"Sphere",new N.kJ(j))
n.dh(0,"Toroid",new N.kK(j),!0)
n.aZ(0,"Knot",new N.kL(j))
u=s.z
if(u==null)u=s.z=D.a0()
n={func:1,ret:-1,args:[D.D]}
m=H.n(new N.kM(b,k),n)
if(u.b==null)u.saL(H.c([],[n]))
u=u.b;(u&&C.a).h(u,m)
V.pH(s)},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l5.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.h8.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iS:1}
J.dG.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dH.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hX.prototype={}
J.bO.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.n2()]
if(u==null)return this.eq(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibC:1}
J.aR.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.z(P.J("add"))
a.push(b)},
e4:function(a,b){if(!!a.fixed$length)H.z(P.J("removeAt"))
if(b<0||b>=a.length)throw H.d(P.e_(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.z(P.J("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iA:function(a){return this.m(a,"")},
it:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bj(a))}return t},
is:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bj(a))}throw H.d(H.h7())},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
en:function(a,b,c){if(b<0||b>a.length)throw H.d(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.af(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
gir:function(a){if(a.length>0)return a[0]
throw H.d(H.h7())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.h7())},
bd:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.z(P.J("setRange"))
P.bp(b,c,a.length)
u=c-b
if(u===0)return
P.l9(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.co(d)
if(u>s.gn(d))throw H.d(H.nK())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dk:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bj(a))}return!1},
bz:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.z(P.J("sort"))
H.e3(a,0,a.length-1,b,u)},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.l2(a,"[","]")},
gS:function(a){return new J.at(a,a.length,[H.r(a,0)])},
gH:function(a){return H.cP(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.J("set length"))
if(b<0)throw H.d(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cm(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.z(P.J("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cm(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.d.p(a.length,b.gn(b))
t=H.c([],t)
this.sn(t,u)
this.bd(t,0,a.length,a)
this.bd(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.l4.prototype={}
J.at.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.u(s))
u=t.c
if(u>=r){t.scG(null)
return!1}t.scG(s[u]);++t.c
return!0},
scG:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
J.bE.prototype={
i8:function(a,b){var u
H.mV(b)
if(typeof b!=="number")throw H.d(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
dE:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.J(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
eb:function(a,b){var u
if(b>20)throw H.d(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
ba:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.C("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.d(H.ax(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.d(H.ax(b))
return a-b},
C:function(a,b){if(typeof b!=="number")throw H.d(H.ax(b))
return a*b},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eu:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dd(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dd(a,b)},
dd:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.dc(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hF:function(a,b){if(b<0)throw H.d(H.ax(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
am:function(a,b){if(typeof b!=="number")throw H.d(H.ax(b))
return a>b},
$ip:1,
$iaa:1}
J.dF.prototype={$im:1}
J.h9.prototype={}
J.bl.prototype={
W:function(a,b){if(b<0)throw H.d(H.cm(a,b))
if(b>=a.length)H.z(H.cm(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.d(H.cm(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.d(P.kX(b,null,null))
return a+b},
aS:function(a,b,c,d){var u,t
c=P.bp(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a9(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.ax(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.d(P.e_(b,null))
if(b>c)throw H.d(P.e_(b,null))
if(c>a.length)throw H.d(P.e_(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.w(a,b,null)},
j6:function(a){return a.toLowerCase()},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.C(" ",u)+a},
dL:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dK:function(a,b){return this.dL(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ilZ:1,
$if:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ad_:function(){return[P.m]},
$ax:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fO.prototype={}
H.c4.prototype={
gS:function(a){var u=this
return new H.cH(u,u.gn(u),[H.ar(u,"c4",0)])},
bw:function(a,b){return this.ep(0,H.n(b,{func:1,ret:P.S,args:[H.ar(this,"c4",0)]}))}}
H.cH.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.co(s),q=r.gn(s)
if(t.b!==q)throw H.d(P.bj(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.I(s,u));++t.c
return!0},
saV:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.ho.prototype={
gS:function(a){return new H.hp(J.bw(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
I:function(a,b){return this.b.$1(J.fi(this.a,b))},
$aj:function(a,b){return[b]}}
H.hp.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saV(u.c.$1(t.gJ(t)))
return!0}u.saV(null)
return!1},
gJ:function(a){return this.a},
saV:function(a){this.a=H.B(a,H.r(this,1))},
$ab5:function(a,b){return[b]}}
H.hq.prototype={
gn:function(a){return J.aC(this.a)},
I:function(a,b){return this.b.$1(J.fi(this.a,b))},
$ac4:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d1.prototype={
gS:function(a){return new H.jo(J.bw(this.a),this.b,this.$ti)}}
H.jo.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.H(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.c0.prototype={}
H.d_.prototype={
k:function(a,b,c){H.B(c,H.ar(this,"d_",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}}
H.ed.prototype={}
H.fA.prototype={
i:function(a){return P.l8(this)},
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nB()},
$iy:1}
H.fB.prototype={
gn:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.cW(b)},
cW:function(a){return this.b[H.I(a)]},
G:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.cW(r),p))}}}
H.iL.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hT.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hb.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.iY.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kU.prototype={
$1:function(a){if(!!J.V(a).$ibB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eR.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cx.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibC:1,
gjc:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iA.prototype={}
H.iq.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.cv.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cv))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.dn(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.iN.prototype={
i:function(a){return this.a}}
H.fw.prototype={
i:function(a){return this.a}}
H.ia.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jp.prototype={
i:function(a){return"Assertion failed: "+P.dD(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giz:function(a){return this.a===0},
ga3:function(a){return new H.hg(this,[H.r(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cS(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cS(t,b)}else return s.iw(b)},
iw:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cg(u.bI(t,u.cf(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.ix(b)},
ix:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bI(r,s.cf(a))
t=s.cg(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cI(u==null?s.b=s.bM():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cI(t==null?s.c=s.bM():t,b,c)}else s.iy(b,c)},
iy:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bM()
t=q.cf(a)
s=q.bI(u,t)
if(s==null)q.bT(u,t,[q.bN(a,b)])
else{r=q.cg(s,a)
if(r>=0)s[r].b=b
else s.push(q.bN(a,b))}},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bj(s))
u=u.c}},
cI:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.bg(a,b)
if(u==null)t.bT(a,b,t.bN(b,c))
else u.b=c},
fk:function(){this.r=this.r+1&67108863},
bN:function(a,b){var u,t=this,s=new H.hf(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fk()
return s},
cf:function(a){return J.dn(a)&0x3ffffff},
cg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.l8(this)},
bg:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
cS:function(a,b){return this.bg(a,b)!=null},
bM:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bT(t,u,t)
this.f1(t,u)
return t}}
H.hf.prototype={}
H.hg.prototype={
gn:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.hh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hh.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bj(t))
else{t=u.c
if(t==null){u.scH(null)
return!1}else{u.scH(t.a)
u.c=u.c.c
return!0}}},
scH:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.kA.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kC.prototype={
$1:function(a){return this.a(H.I(a))},
$S:54}
H.ha.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilZ:1,
$io8:1}
H.cL.prototype={$icL:1}
H.bH.prototype={$ibH:1}
H.dS.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cM.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pn(c)
H.bh(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.p]},
$ax:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.dT.prototype={
k:function(a,b,c){H.a5(c)
H.bh(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.m]},
$ax:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hL.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dU.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.cN.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icN:1,
$iR:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
P.jr.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jq.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.js.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jt.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eX.prototype={
eL:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cl(new P.k7(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cl(new P.k6(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
$ibc:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eu(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
iC:function(a){if(this.c!==6)return!0
return this.b.b.cr(H.n(this.d,{func:1,ret:P.S,args:[P.P]}),a.a,P.S,P.P)},
iv:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fe(u,{func:1,args:[P.P,P.av]}))return H.lu(r.j0(u,a.a,a.b,null,t,P.av),s)
else return H.lu(r.cr(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aN.prototype={
ea:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pc(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a_,[c])
s=b==null?1:3
this.cJ(new P.bg(t,s,a,b,[r,c]))
return t},
j3:function(a,b){return this.ea(a,null,b)},
cJ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaN")
s=u.a
if(s<4){u.cJ(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kr(null,null,s,H.n(new P.jC(t,a),{func:1,ret:-1}))}},
d5:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaN")
u=q.a
if(u<4){q.d5(a)
return}p.a=u
p.c=q.c}o.a=p.bi(a)
u=p.b
u.toString
P.kr(null,null,u,H.n(new P.jG(o,p),{func:1,ret:-1}))}},
bQ:function(){var u=H.h(this.c,"$ibg")
this.c=null
return this.bi(u)},
bi:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cO:function(a){var u,t,s=this,r=H.r(s,0)
H.lu(a,{futureOr:1,type:r})
u=s.$ti
if(H.lp(a,"$icD",u,"$acD"))if(H.lp(a,"$iaN",u,null))P.mp(a,s)
else P.ou(a,s)
else{t=s.bQ()
H.B(a,r)
s.a=4
s.c=a
P.d4(s,t)}},
cP:function(a,b){var u,t=this
H.h(b,"$iav")
u=t.bQ()
t.a=8
t.c=new P.am(a,b)
P.d4(t,u)},
$icD:1}
P.jC.prototype={
$0:function(){P.d4(this.a,this.b)},
$S:0}
P.jG.prototype={
$0:function(){P.d4(this.b,this.a.a)},
$S:0}
P.jD.prototype={
$1:function(a){var u=this.a
u.a=0
u.cO(a)},
$S:18}
P.jE.prototype={
$2:function(a,b){H.h(b,"$iav")
this.a.cP(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jF.prototype={
$0:function(){this.a.cP(this.b,this.c)},
$S:0}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e7(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cq(r)
if(o.d){s=H.h(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.V(n).$icD){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j3(new P.jK(p),null)
s.a=!1}},
$S:3}
P.jK.prototype={
$1:function(a){return this.a},
$S:46}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cr(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cq(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iam")
r=m.c
if(H.H(r.iC(u))&&r.e!=null){q=m.b
q.b=r.iv(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cq(p)
r=H.h(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.ej.prototype={}
P.it.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aN($.a_,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iv(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iw(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.iv.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.r(this.b,0)]}}}
P.iw.prototype={
$0:function(){this.b.cO(this.a.a)},
$S:0}
P.cT.prototype={}
P.iu.prototype={}
P.bc.prototype={}
P.am.prototype={
i:function(a){return H.i(this.a)},
$ibB:1}
P.kg.prototype={$iql:1}
P.kq.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dW():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jQ.prototype={
j1:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.mB(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cq(s)
P.kp(r,r,this,u,H.h(t,"$iav"))}},
j2:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.mC(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cq(s)
P.kp(r,r,this,u,H.h(t,"$iav"))}},
i4:function(a,b){return new P.jS(this,H.n(a,{func:1,ret:b}),b)},
bY:function(a){return new P.jR(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jT(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e7:function(a,b){H.n(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.mB(null,null,this,a,b)},
cr:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a_===C.f)return a.$1(b)
return P.mC(null,null,this,a,b,c,d)},
j0:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.pd(null,null,this,a,b,c,d,e,f)}}
P.jS.prototype={
$0:function(){return this.a.e7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jR.prototype={
$0:function(){return this.a.j1(this.b)},
$S:3}
P.jT.prototype={
$1:function(a){var u=this.c
return this.a.j2(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jO.prototype={
gS:function(a){var u=this,t=new P.ey(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icg")!=null}else{t=this.eY(b)
return t}},
eY:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.cX(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.lh():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.lh():t,b)}else return s.eO(0,b)},
eO:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lh()
t=r.cQ(b)
s=u[t]
if(s==null)u[t]=[r.bD(b)]
else{if(r.bG(s,b)>=0)return!1
s.push(r.bD(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hp(this.c,b)
else return this.ho(0,b)},
ho:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cX(r,b)
t=s.bG(u,b)
if(t<0)return!1
s.de(u.splice(t,1)[0])
return!0},
cL:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$icg")!=null)return!1
a[b]=this.bD(b)
return!0},
hp:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icg")
if(u==null)return!1
this.de(u)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.cg(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cN()
return s},
de:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cN()},
cQ:function(a){return J.dn(a)&1073741823},
cX:function(a,b){return a[this.cQ(b)]},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cg.prototype={}
P.ey.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bj(t))
else{t=u.c
if(t==null){u.scM(null)
return!1}else{u.scM(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scM:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
P.hi.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.hj.prototype={$ij:1,$ib:1}
P.x.prototype={
gS:function(a){return new H.cH(a,this.gn(a),[H.bS(this,a,"x",0)])},
I:function(a,b){return this.j(a,b)},
j5:function(a,b){var u,t=this,s=H.c([],[H.bS(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
j4:function(a){return this.j5(a,!0)},
p:function(a,b){var u,t=this,s=[H.bS(t,a,"x",0)]
H.l(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sn(u,C.d.p(t.gn(a),b.gn(b)))
C.a.bd(u,0,t.gn(a),a)
C.a.bd(u,t.gn(a),u.length,b)
return u},
ip:function(a,b,c,d){var u
H.B(d,H.bS(this,a,"x",0))
P.bp(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l2(a,"[","]")}}
P.hl.prototype={}
P.hm.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.ad.prototype={
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bS(s,a,"ad",0),H.bS(s,a,"ad",1)]})
for(u=J.bw(s.ga3(a));u.A();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga3(a))},
i:function(a){return P.l8(a)},
$iy:1}
P.k8.prototype={
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.d(P.J("Cannot modify unmodifiable map"))}}
P.hn.prototype={
j:function(a,b){return J.dm(this.a,b)},
k:function(a,b,c){J.kV(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
G:function(a,b){J.lD(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.as(this.a)},
$iy:1}
P.ee.prototype={}
P.jV.prototype={
ar:function(a,b){var u
for(u=J.bw(H.l(b,"$ij",this.$ti,"$aj"));u.A();)this.h(0,u.gJ(u))},
i:function(a){return P.l2(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.l9(b,"index")
for(u=P.oy(r,r.r,H.r(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.X(b,r,"index",null,t))},
$ij:1,
$im6:1}
P.ez.prototype={}
P.f1.prototype={}
P.fs.prototype={
iE:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bp(a0,a1,b.length)
u=$.nh()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kz(C.b.D(b,n))
j=H.kz(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.b.w(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.d(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.lH(b,p,a1,q,o,f)
else{e=C.d.bb(f-1,4)+1
if(e===1)throw H.d(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aS(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lH(b,p,a1,q,o,d)
else{e=C.d.bb(d,4)
if(e===1)throw H.d(P.a7(c,b,a1))
if(e>1)b=C.b.aS(b,a1,a1,e===2?"==":"=")}return b},
$abZ:function(){return[[P.b,P.m],P.f]}}
P.ft.prototype={
$abA:function(){return[[P.b,P.m],P.f]}}
P.bZ.prototype={}
P.bA.prototype={}
P.fQ.prototype={
$abZ:function(){return[P.f,[P.b,P.m]]}}
P.h5.prototype={
i:function(a){return this.a}}
P.h4.prototype={
eZ:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ag("")
if(r>b)q.a+=C.b.w(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nu(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abA:function(){return[P.f,P.f]}}
P.j5.prototype={
gio:function(){return C.N}}
P.j7.prototype={
c3:function(a){var u,t,s=P.bp(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ke(u)
if(t.fa(a,0,s)!==s)t.dg(J.nq(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oO(0,t.b,u.length)))},
$abA:function(){return[P.f,[P.b,P.m]]}}
P.ke.prototype={
dg:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fa:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dg(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j6.prototype={
c3:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.ok(!1,a,0,null)
if(u!=null)return u
t=P.bp(0,null,J.aC(a))
s=P.mE(a,0,t)
if(s>0){r=P.cU(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.kd(!1,q)
n.c=o
n.i9(a,p,t)
if(n.e>0){H.z(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abA:function(){return[[P.b,P.m],P.f]}}
P.kd.prototype={
i9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.co(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.af()
if((o&192)!==128){n=P.a7(h+C.d.ba(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.d.ba(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.d.ba(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.c7(u)
i.c=!1}for(n=p<c;n;){m=P.mE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cU(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.d.ba(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.d.ba(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ay.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.nC(H.o4(u)),s=P.dy(H.o2(u)),r=P.dy(H.nZ(u)),q=P.dy(H.o_(u)),p=P.dy(H.o1(u)),o=P.dy(H.o3(u)),n=P.nD(H.o0(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b4.prototype={
p:function(a,b){return new P.b4(C.d.p(this.a,b.gcV()))},
q:function(a,b){return new P.b4(C.d.q(this.a,b.gcV()))},
am:function(a,b){return C.d.am(this.a,b.gcV())},
t:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
i:function(a){var u,t,s,r=new P.fN(),q=this.a
if(q<0)return"-"+new P.b4(0-q).i(0)
u=r.$1(C.d.a5(q,6e7)%60)
t=r.$1(C.d.a5(q,1e6)%60)
s=new P.fM().$1(q%1e6)
return""+C.d.a5(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fM.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fN.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bB.prototype={}
P.fm.prototype={
i:function(a){return"Assertion failed"}}
P.dW.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbF()+o+u
if(!q.a)return t
s=q.gbE()
r=P.dD(q.b)
return t+s+": "+r}}
P.c8.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h6.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var u,t=H.a5(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.iZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iW.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fz.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dD(u)+"."}}
P.hW.prototype={
i:function(a){return"Out of Memory"},
$ibB:1}
P.e4.prototype={
i:function(a){return"Stack Overflow"},
$ibB:1}
P.fG.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.er.prototype={
i:function(a){return"Exception: "+this.a}}
P.h_.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.w(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.W(f,q)
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
k=""}j=C.b.w(f,m,n)
return h+l+j+k+"\n"+C.b.C(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bC.prototype={}
P.m.prototype={}
P.j.prototype={
bw:function(a,b){var u=H.ar(this,"j",0)
return new H.d1(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gS(this)
for(u=0;t.A();)++u
return u},
gaH:function(a){var u,t=this.gS(this)
if(!t.A())throw H.d(H.h7())
u=t.gJ(t)
if(t.A())throw H.d(H.nL())
return u},
I:function(a,b){var u,t,s
P.l9(b,"index")
for(u=this.gS(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.d(P.X(b,this,"index",null,t))},
i:function(a){return P.nJ(this,"(",")")}}
P.b5.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.O.prototype={
gH:function(a){return P.P.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
t:function(a,b){return this===b},
gH:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.f.prototype={$ilZ:1}
P.ag.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipW:1}
P.j3.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iy",[r,r],"$ay")
H.I(b)
u=J.dj(b).dK(b,"=")
if(u===-1){if(b!=="")J.kV(a,P.lj(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.a6(b,u+1)
r=this.a
J.kV(a,P.lj(t,0,t.length,r,!0),P.lj(s,0,s.length,r,!0))}return a},
$S:45}
P.j0.prototype={
$2:function(a,b){throw H.d(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j1.prototype={
$2:function(a,b){throw H.d(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j2.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fh(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ch.prototype={
geh:function(){return this.b},
gce:function(a){var u=this.c
if(u==null)return""
if(C.b.a2(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.mt(this.a)
return u},
gcl:function(a){var u=this.f
return u==null?"":u},
gdF:function(){var u=this.r
return u==null?"":u},
e5:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iy",[P.f,null],"$ay")
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
n=P.li(null,0,0,b)
return new P.ch(u,s,q,r,p,n,m.r)},
gcm:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shn(new P.ee(P.mg(u==null?"":u),[t,t]))}return s.Q},
gdG:function(){return this.c!=null},
gdJ:function(){return this.f!=null},
gdH:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.V(b).$ild)if(s.a==b.gby())if(s.c!=null===b.gdG())if(s.b==b.geh())if(s.gce(s)==b.gce(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.ge0(b)){u=s.f
t=u==null
if(!t===b.gdJ()){if(t)u=""
if(u===b.gcl(b)){u=s.r
t=u==null
if(!t===b.gdH()){if(t)u=""
u=u===b.gdF()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shn:function(a){var u=P.f
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ild:1,
gby:function(){return this.a},
ge0:function(a){return this.e}}
P.k9.prototype={
$1:function(a){throw H.d(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.ka.prototype={
$1:function(a){return P.f2(C.W,a,C.h,!1)},
$S:23}
P.kc.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f2(C.m,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f2(C.m,b,C.h,!0))}},
$S:24}
P.kb.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bw(H.mT(b,"$ij")),t=this.a;u.A();)t.$2(a,H.I(u.gJ(u)))},
$S:40}
P.j_.prototype={
geg:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.dL(u,"?",o)
s=u.length
if(t>=0){r=P.df(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.jx("data",p,p,p,P.df(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kk.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kj.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nr(u,0,96,b)
return u},
$S:39}
P.kl.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.km.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.jY.prototype={
gdG:function(){return this.c>0},
gdI:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
gdJ:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdH:function(){return this.r<this.a.length},
gcZ:function(){return this.b===4&&C.b.a2(this.a,"http")},
gd_:function(){return this.b===5&&C.b.a2(this.a,"https")},
gby:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcZ())q=t.x="http"
else if(t.gd_()){t.x="https"
q="https"}else if(q===4&&C.b.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a2(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
geh:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gce:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdI()){u=t.d
if(typeof u!=="number")return u.p()
return P.fh(C.b.w(t.a,u+1,t.e),null,null)}if(t.gcZ())return 80
if(t.gd_())return 443
return 0},
ge0:function(a){return C.b.w(this.a,this.e,this.f)},
gcl:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.w(this.a,u+1,t):""},
gdF:function(){var u=this.r,t=this.a
return u<t.length?C.b.a6(t,u+1):""},
gcm:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.X
t=P.f
return new P.ee(P.mg(u.gcl(u)),[t,t])},
e5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.f,null],"$ay")
u=k.gby()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.gdI()?k.gbq(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a2(o,"/"))o="/"+o
m=P.li(j,0,0,b)
n=k.r
l=n<s.length?C.b.a6(s,n+1):j
return new P.ch(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ild&&this.a===b.i(0)},
i:function(a){return this.a},
$ild:1}
P.jx.prototype={}
W.v.prototype={}
W.fj.prototype={
gn:function(a){return a.length}}
W.dp.prototype={
i:function(a){return String(a)},
$idp:1}
W.fk.prototype={
i:function(a){return String(a)}}
W.cu.prototype={$icu:1}
W.bX.prototype={$ibX:1}
W.bx.prototype={$ibx:1}
W.bY.prototype={
ek:function(a,b,c){var u=a.getContext(b,P.pk(c))
return u},
$ibY:1}
W.by.prototype={
gn:function(a){return a.length}}
W.cy.prototype={$icy:1}
W.fC.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cz.prototype={
gn:function(a){return a.length}}
W.fD.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fE.prototype={
gn:function(a){return a.length}}
W.fF.prototype={
gn:function(a){return a.length}}
W.fI.prototype={
gn:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fJ.prototype={
i:function(a){return String(a)}}
W.dA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ial",[P.aa],"$aal")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.al,P.aa]]},
$ax:function(){return[[P.al,P.aa]]},
$ij:1,
$aj:function(){return[[P.al,P.aa]]},
$ib:1,
$ab:function(){return[[P.al,P.aa]]},
$aF:function(){return[[P.al,P.aa]]}}
W.dB.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaG(a))+" x "+H.i(this.gaD(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&this.gaG(a)===u.gaG(b)&&this.gaD(a)===u.gaD(b)},
gH:function(a){return W.mr(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaG(a)),C.c.gH(this.gaD(a)))},
gdn:function(a){return a.bottom},
gaD:function(a){return a.height},
gbp:function(a){return a.left},
gcq:function(a){return a.right},
gbs:function(a){return a.top},
gaG:function(a){return a.width},
$ial:1,
$aal:function(){return[P.aa]}}
W.fK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.I(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
W.fL.prototype={
gn:function(a){return a.length}}
W.jv.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.h(u[b],"$iU")},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.j4(this)
return new J.at(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gi3:function(a){return new W.jy(a)},
gc2:function(a){return new W.jv(a,a.children)},
gdq:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lP
if(u==null){u=H.c([],[W.aA])
t=new W.dV(u)
C.a.h(u,W.mq(null))
C.a.h(u,W.ms())
$.lP=t
d=t}else d=u
u=$.lO
if(u==null){u=new W.f3(d)
$.lO=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.l_=t.createRange()
t=$.bk.createElement("base")
H.h(t,"$icu")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibx")}u=$.bk
if(!!this.$ibx)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.U,a.tagName)){$.l_.selectNodeContents(s)
r=$.l_.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lF(s)
c.ct(r)
document.adoptNode(r)
return r},
ic:function(a,b,c){return this.ab(a,b,c,null)},
em:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iU:1,
ge8:function(a){return a.tagName}}
W.fP.prototype={
$1:function(a){return!!J.V(H.h(a,"$iE")).$iU},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
hV:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eP(a,b,c,!1)},
eP:function(a,b,c,d){return a.addEventListener(b,H.cl(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aG.prototype={$iaG:1}
W.cC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaG")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icC:1,
$aF:function(){return[W.aG]}}
W.fV.prototype={
gn:function(a){return a.length}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.h3.prototype={
gn:function(a){return a.length}}
W.c1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic1:1,
$aF:function(){return[W.E]}}
W.cF.prototype={$icF:1}
W.cG.prototype={$icG:1}
W.b6.prototype={$ib6:1}
W.dL.prototype={
i:function(a){return String(a)},
$idL:1}
W.hE.prototype={
gn:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.hF.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.G(a,new W.hG(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hH.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.G(a,new W.hI(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aS.prototype={$iaS:1}
W.hJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aF:function(){return[W.aS]}}
W.ae.prototype={$iae:1}
W.aq.prototype={
gaH:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.m7("No elements"))
if(t>1)throw H.d(P.m7("More than one element"))
return u.firstChild},
ar:function(a,b){var u,t,s,r
H.l(b,"$ij",[W.E],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.dE(u,u.length,[H.bS(C.Y,u,"F",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.E]},
$aj:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
iZ:function(a,b){var u,t
try{u=a.parentNode
J.no(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
i0:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hs:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.hZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aF:function(){return[W.aT]}}
W.i8.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.G(a,new W.i9(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.i9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ib.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.im.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aF:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.io.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aF:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.ir.prototype={
j:function(a,b){return a.getItem(H.I(b))},
k:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.c([],[P.f])
this.G(a,new W.is(u))
return u},
gn:function(a){return a.length},
$aad:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.is.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aJ.prototype={$iaJ:1}
W.bb.prototype={$ibb:1}
W.e5.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.nE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ar(0,new W.aq(u))
return t}}
W.iy.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaH(u)
s.toString
u=new W.aq(s)
r=u.gaH(u)
t.toString
r.toString
new W.aq(t).ar(0,new W.aq(r))
return t}}
W.iz.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaH(u)
t.toString
s.toString
new W.aq(t).ar(0,new W.aq(s))
return t}}
W.cV.prototype={$icV:1}
W.aX.prototype={$iaX:1}
W.aK.prototype={$iaK:1}
W.iB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aF:function(){return[W.aK]}}
W.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.iE.prototype={
gn:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aZ.prototype={$iaZ:1}
W.iI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aF:function(){return[W.aY]}}
W.iJ.prototype={
gn:function(a){return a.length}}
W.bN.prototype={}
W.j4.prototype={
i:function(a){return String(a)}}
W.jm.prototype={
gn:function(a){return a.length}}
W.bf.prototype={
gih:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
gig:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$ibf:1}
W.d2.prototype={
ht:function(a,b){return a.requestAnimationFrame(H.cl(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
f4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d3.prototype={$id3:1}
W.jw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iW")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ax:function(){return[W.W]},
$ij:1,
$aj:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aF:function(){return[W.W]}}
W.em.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$ial)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&a.width===u.gaG(b)&&a.height===u.gaD(b)},
gH:function(a){return W.mr(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gaD:function(a){return a.height},
gaG:function(a){return a.width}}
W.jL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaQ")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aF:function(){return[W.aQ]}}
W.eE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.jZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aF:function(){return[W.aW]}}
W.k2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaJ")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aF:function(){return[W.aJ]}}
W.ju.prototype={
G:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$id3")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jy.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga3(this).length}}
W.jz.prototype={}
W.lg.prototype={}
W.jA.prototype={}
W.jB.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bQ.prototype={
eB:function(a){var u
if($.d5.giz($.d5)){for(u=0;u<262;++u)$.d5.k(0,C.T[u],W.pt())
for(u=0;u<12;++u)$.d5.k(0,C.q[u],W.pu())}},
aO:function(a){return $.ni().T(0,W.cA(a))},
as:function(a,b,c){var u=$.d5.j(0,H.i(W.cA(a))+"::"+b)
if(u==null)u=$.d5.j(0,"*::"+b)
if(u==null)return!1
return H.lo(u.$4(a,b,c,this))},
$iaA:1}
W.F.prototype={
gS:function(a){return new W.dE(a,this.gn(a),[H.bS(this,a,"F",0)])}}
W.dV.prototype={
aO:function(a){return C.a.dk(this.a,new W.hR(a))},
as:function(a,b,c){return C.a.dk(this.a,new W.hQ(a,b,c))},
$iaA:1}
W.hR.prototype={
$1:function(a){return H.h(a,"$iaA").aO(this.a)},
$S:29}
W.hQ.prototype={
$1:function(a){return H.h(a,"$iaA").as(this.a,this.b,this.c)},
$S:29}
W.eM.prototype={
eI:function(a,b,c,d){var u,t,s
this.a.ar(0,c)
u=b.bw(0,new W.jW())
t=b.bw(0,new W.jX())
this.b.ar(0,u)
s=this.c
s.ar(0,C.x)
s.ar(0,t)},
aO:function(a){return this.a.T(0,W.cA(a))},
as:function(a,b,c){var u=this,t=W.cA(a),s=u.c
if(s.T(0,H.i(t)+"::"+b))return u.d.hZ(c)
else if(s.T(0,"*::"+b))return u.d.hZ(c)
else{s=u.b
if(s.T(0,H.i(t)+"::"+b))return!0
else if(s.T(0,"*::"+b))return!0
else if(s.T(0,H.i(t)+"::*"))return!0
else if(s.T(0,"*::*"))return!0}return!1},
$iaA:1}
W.jW.prototype={
$1:function(a){return!C.a.T(C.q,H.I(a))},
$S:30}
W.jX.prototype={
$1:function(a){return C.a.T(C.q,H.I(a))},
$S:30}
W.k4.prototype={
as:function(a,b,c){if(this.es(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.T(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.I(a))},
$S:23}
W.k3.prototype={
aO:function(a){var u=J.V(a)
if(!!u.$icQ)return!1
u=!!u.$iq
if(u&&W.cA(a)==="foreignObject")return!1
if(u)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.b.a2(b,"on"))return!1
return this.aO(a)},
$iaA:1}
W.dE.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scY(J.dm(u.a,t))
u.c=t
return!0}u.scY(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scY:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
W.aA.prototype={}
W.jU.prototype={$iq7:1}
W.f3.prototype={
ct:function(a){new W.kf(this).$2(a,null)},
aY:function(a,b){if(b==null)J.lF(a)
else b.removeChild(a)},
hx:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ns(a)
n=o.a.getAttribute("is")
H.h(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.aj(r)}try{s=W.cA(a)
this.hw(H.h(a,"$iU"),b,p,t,s,H.h(o,"$iy"),H.I(n))}catch(r){if(H.aj(r) instanceof P.aP)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aO(a)){o.aY(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.as(a,"is",g)){o.aY(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.c(u.slice(0),[H.r(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nv(r)
H.I(r)
if(!q.as(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icV)o.ct(a.content)},
$ipT:1}
W.kf.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hx(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.el.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
P.k_.prototype={
dD:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cs:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$io8)throw H.d(P.iX("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibX)return a
if(!!u.$icC)return a
if(!!u.$icF)return a
if(!!u.$icL||!!u.$ibH||!!u.$icJ)return a
if(!!u.$iy){t=q.dD(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.G(a,new P.k1(p,q))
return p.a}if(!!u.$ib){t=q.dD(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ib(a,t)}throw H.d(P.iX("structured clone of other type"))},
ib:function(a,b){var u,t=J.co(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cs(t.j(a,u)))
return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.cs(b)},
$S:5}
P.ks.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k0.prototype={}
P.fW.prototype={
gbh:function(){var u=this.b,t=H.ar(u,"x",0),s=W.U
return new H.ho(new H.d1(u,H.n(new P.fX(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.fY(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.gbh()
J.nt(u.b.$1(J.fi(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbh().a)},
j:function(a,b){var u=this.gbh()
return u.b.$1(J.fi(u.a,b))},
gS:function(a){var u=P.lS(this.gbh(),!1,W.U)
return new J.at(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.fX.prototype={
$1:function(a){return!!J.V(H.h(a,"$iE")).$iU},
$S:27}
P.fY.prototype={
$1:function(a){return H.A(H.h(a,"$iE"),"$iU")},
$S:34}
P.jP.prototype={
gcq:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.G(t)
return H.B(u+t,H.r(this,0))},
gdn:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.G(t)
return H.B(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$ial){t=p.a
if(t==u.gbp(b)){s=p.b
if(s==u.gbs(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.G(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gcq(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.G(t)
u=H.B(s+t,q)===u.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dn(s),q=t.b,p=J.dn(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.G(o)
u=H.r(t,0)
o=C.d.gH(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.G(s)
u=C.d.gH(H.B(q+s,u))
return P.ox(P.jN(P.jN(P.jN(P.jN(0,r),p),o),u))}}
P.al.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaG:function(a){return this.c},
gaD:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.hd.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib7")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aF:function(){return[P.b7]}}
P.b9.prototype={$ib9:1}
P.hU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aF:function(){return[P.b9]}}
P.i0.prototype={
gn:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.ix.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.I(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
P.q.prototype={
gc2:function(a){return new P.fW(a,new W.aq(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aA])
C.a.h(p,W.mq(null))
C.a.h(p,W.ms())
C.a.h(p,new W.k3())
c=new W.f3(new W.dV(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ic(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaH(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bd.prototype={$ibd:1}
P.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibd")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aF:function(){return[P.bd]}}
P.ew.prototype={}
P.ex.prototype={}
P.eH.prototype={}
P.eI.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.R.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
P.fo.prototype={
gn:function(a){return a.length}}
P.fp.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga3:function(a){var u=H.c([],[P.f])
this.G(a,new P.fq(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fr.prototype={
gn:function(a){return a.length}}
P.bW.prototype={}
P.hV.prototype={
gn:function(a){return a.length}}
P.ek.prototype={}
P.dr.prototype={$idr:1}
P.dZ.prototype={$idZ:1}
P.c9.prototype={
a7:function(a,b,c){return a.uniform1f(b,c)},
bv:function(a,b,c){return a.uniform1i(b,c)},
V:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
j7:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ee:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ef:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic9:1}
P.e1.prototype={$ie1:1}
P.ec.prototype={$iec:1}
P.ip.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.X(b,a,null,null,null))
return P.br(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.d(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aF:function(){return[[P.y,,,]]}}
P.eP.prototype={}
P.eQ.prototype={}
O.a6.prototype={
bB:function(a){var u=this
u.sff(H.c([],[a]))
u.sd3(null)
u.sd0(null)
u.sd4(null)},
cu:function(a,b,c){var u=this,t=H.ar(u,"a6",0)
H.n(b,{func:1,ret:P.S,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sd3(b)
u.sd0(a)
u.sd4(c)},
bc:function(a,b){return this.cu(a,null,b)},
h6:function(a){var u
H.l(a,"$ij",[H.ar(this,"a6",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fs:function(a,b){var u
H.l(b,"$ij",[H.ar(this,"a6",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.at(u,u.length,[H.r(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ar(s,"a6",0)
H.B(b,r)
r=[r]
if(H.H(s.h6(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fs(t,H.c([b],r))}},
sff:function(a){this.a=H.l(a,"$ib",[H.ar(this,"a6",0)],"$ab")},
sd3:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.j,H.ar(this,"a6",0)]]})},
sd0:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.ar(this,"a6",0)]]})},
sd4:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.ar(this,"a6",0)]]})},
$ij:1}
O.cI.prototype={
gn:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.a0():u},
aI:function(){var u=this.b
if(u!=null)u.K(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.dR()},
e2:function(a){var u=this.a
if(a==null)C.a.h(u,V.dR())
else C.a.h(u,a)
this.aI()},
ck:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}},
sbK:function(a){this.a=H.l(a,"$ib",[V.ap],"$ab")}}
E.fu.prototype={}
E.ao.prototype={
cK:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();){t=u.d
if(t.f==null)t.cK()}},
sa8:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().L(0,s.gdW())
u=s.c
if(u!=null)u.gB().h(0,s.gdW())
t=new D.N("shape",r,s.c,[F.e2])
t.b=!0
s.ai(t)}},
sb9:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().L(0,s.gdY())
u=s.f
s.f=a
if(a!=null)a.gB().h(0,s.gdY())
s.cK()
t=new D.N("technique",u,s.f,[O.bM])
t.b=!0
s.ai(t)}},
saQ:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gB().L(0,s.gdU())
if(a!=null)a.gB().h(0,s.gdU())
s.r=a
t=new D.N("mover",u,a,[U.ak])
t.b=!0
s.ai(t)}},
aw:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aU(0,b,s):null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.N("matrix",u,q,[V.ap])
t.b=!0
s.ai(t)}r=s.f
if(r!=null)r.aw(0,b)
for(r=s.y.a,r=new J.at(r,r.length,[H.r(r,0)]);r.A();)r.d.aw(0,b)},
aR:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga1(s))
else C.a.h(s.a,r.C(0,s.ga1(s)))
s.aI()
a.e3(t.f)
s=a.dy
u=(s&&C.a).gau(s)
if(u!=null&&t.d!=null)u.iY(a,t)
for(s=t.y.a,s=new J.at(s,s.length,[H.r(s,0)]);s.A();)s.d.aR(a)
a.e1()
a.dx.ck()},
gB:function(){var u=this.z
return u==null?this.z=D.a0():u},
ai:function(a){var u=this.z
if(u!=null)u.K(a)},
Z:function(){return this.ai(null)},
dX:function(a){H.h(a,"$iD")
this.e=null
this.ai(a)},
iL:function(){return this.dX(null)},
dZ:function(a){this.ai(H.h(a,"$iD"))},
iM:function(){return this.dZ(null)},
dV:function(a){this.ai(H.h(a,"$iD"))},
iK:function(){return this.dV(null)},
dT:function(a){this.ai(H.h(a,"$iD"))},
iH:function(){return this.dT(null)},
iG:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gdS(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sag(null)
o.saL(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
iJ:function(a,b){var u,t
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.gS(b),t=this.gdS();u.A();)u.gJ(u).gB().L(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seA:function(a,b){this.y=H.l(b,"$ia6",[E.ao],"$aa6")},
$icK:1}
E.i4.prototype={
ew:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cI()
t=[V.ap]
u.sbK(H.c([],t))
u.b=null
u.gB().h(0,new E.i5(s))
s.cy=u
u=new O.cI()
u.sbK(H.c([],t))
u.b=null
u.gB().h(0,new E.i6(s))
s.db=u
u=new O.cI()
u.sbK(H.c([],t))
u.b=null
u.gB().h(0,new E.i7(s))
s.dx=u
s.shJ(H.c([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.shE(new H.a2([P.f,A.cR]))},
giU:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.C(0,u.ga1(u))
s=u}return s},
e3:function(a){var u=this.dy,t=a==null?(u&&C.a).gau(u):a;(u&&C.a).h(u,t)},
e1:function(){var u=this.dy
if(u.length>1)u.pop()},
shJ:function(a){this.dy=H.l(a,"$ib",[O.bM],"$ab")},
shE:function(a){this.fr=H.l(a,"$iy",[P.f,A.cR],"$ay")}}
E.i5.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:10}
E.i6.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.i7.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:10}
E.e8.prototype={
cE:function(a){H.h(a,"$iD")
this.e6()},
cD:function(){return this.cE(null)},
giu:function(){var u,t=this,s=Date.now(),r=C.d.a5(P.lN(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
d7:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.G(r)
u=C.c.dE(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.C()
t=C.c.dE(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ma(C.o,s.gj_())}},
e6:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iD(this),{func:1,ret:-1,args:[P.aa]})
C.E.f4(u)
C.E.ht(u,W.mH(t,P.aa))}},
iX:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d7()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lN(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aI()
r=s.db
C.a.sn(r.a,0)
r.aI()
r=s.dx
C.a.sn(r.a,0)
r.aI()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aR(p.e)}s=p.z
if(s!=null)s.K(null)}catch(q){u=H.aj(q)
t=H.cq(q)
P.lx("Error: "+H.i(u))
P.lx("Stack: "+H.i(t))
throw H.d(u)}}}
E.iD.prototype={
$1:function(a){var u
H.mV(a)
u=this.a
if(u.ch){u.ch=!1
u.iX()}},
$S:57}
Z.ei.prototype={$ipN:1}
Z.ds.prototype={
bk:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jn.prototype={$ipO:1}
Z.dt.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bk:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bk(a)},
ed:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aR:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfb:function(a){this.b=H.l(a,"$ib",[Z.bD],"$ab")},
$ipX:1}
Z.bD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.bP.prototype={
gcw:function(a){var u=this.a,t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bU().a)!==0)t+=2
if((u&$.bV().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=4
if((u&$.ct().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
i1:function(a){var u,t=$.bv(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0)if(u===a)return t
return $.ng()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bP))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bv().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bU().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bV().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dk().a)!==0)C.a.h(u,"Clr3")
if((t&$.dl().a)!==0)C.a.h(u,"Clr4")
if((t&$.ct().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fx.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.n(b,u)
if(this.a==null)this.sag(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.T(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.G(P.lS(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fS(q))
u=r.b
if(u!=null){r.saL(H.c([],[{func:1,ret:-1,args:[D.D]}]))
C.a.G(u,new D.fT(q))}return!0},
aj:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}},
sag:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saL:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fS.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fT.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.D.prototype={}
D.c2.prototype={}
D.c3.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.du.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dI.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dI))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hc.prototype={
iR:function(a){this.d.h(0,a.a)
return!1},
iN:function(a){this.d.L(0,a.a)
return!1},
shm:function(a){this.d=H.l(a,"$im6",[P.m],"$am6")}}
X.dM.prototype={}
X.hk.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.C()
u=b.b
t=q.ch
if(typeof u!=="number")return u.C()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gbl()
r=new X.bG(a,V.bJ(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.el()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aW(a,b))
return!0},
iS:function(a){return!1},
fW:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dM(c,r.a.gbl(),b)
s.b=!0
t.K(s)
r.y=new P.ay(u,!1)
r.x=V.bJ()}}
X.bF.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bF))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bG.prototype={}
X.hK.prototype={
bH:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbl(),r=new X.bG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bH(a,b,!0))
return!0},
b8:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.el()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bH(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bH(a,b,!1))
return!0},
iT:function(a,b){return!1}}
X.i_.prototype={}
X.ea.prototype={}
X.iH.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=q.a.gbl()
r=new X.ea(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iQ:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.K(this.aW(a,!0))
return!0},
iO:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.K(this.aW(a,!0))
return!0},
iP:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.K(this.aW(a,!1))
return!0}}
X.ef.prototype={
gbl:function(){var u=this.a,t=C.n.gdq(u).c
t.toString
u=C.n.gdq(u).d
u.toString
return V.m4(0,0,t,u)},
cT:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dI(u,new X.bF(t,a.altKey,a.shiftKey))},
aM:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
bU:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a9(s-q,r-u)},
aX:function(a){return new V.a4(a.movementX,a.movementY)},
bP:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.ak(r.pageX)
C.c.ak(r.pageY)
p=o.left
C.c.ak(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.ak(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.du(u,new X.bF(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fQ:function(a){this.f=!0},
fC:function(a){this.f=!1},
fK:function(a){H.h(a,"$iae")
if(H.H(this.f)&&this.bL(a))a.preventDefault()},
fU:function(a){var u
H.h(a,"$ib6")
if(!H.H(this.f))return
u=this.cT(a)
this.b.iR(u)},
fS:function(a){var u
H.h(a,"$ib6")
if(!H.H(this.f))return
u=this.cT(a)
this.b.iN(u)},
fY:function(a){var u,t,s,r,q=this
H.h(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aM(a)
if(H.H(q.x)){t=q.ay(a)
s=q.aX(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ay(a)
r=q.aA(a)
if(q.c.cj(t,r))a.preventDefault()},
h1:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b8(u,s))a.preventDefault()},
fO:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bL(a)){r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b8(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b8(u,s))a.preventDefault()}},
h_:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b7(u,s))a.preventDefault()},
fM:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bL(a)){r.aM(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b7(u,s))a.preventDefault()}},
h3:function(a){var u,t,s=this
H.h(a,"$ibf")
s.aM(a)
u=new V.a4((a&&C.D).gig(a),C.D.gih(a)).u(0,180)
if(H.H(s.x)){if(s.d.iS(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aA(a)
if(s.c.iT(u,t))a.preventDefault()},
h5:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fW(u,t,r)}},
hi:function(a){var u,t=this
H.h(a,"$iaZ")
t.a.focus()
t.f=!0
t.bU(a)
u=t.bP(a)
if(t.e.iQ(u))a.preventDefault()},
he:function(a){var u
H.h(a,"$iaZ")
this.bU(a)
u=this.bP(a)
if(this.e.iO(u))a.preventDefault()},
hg:function(a){var u
H.h(a,"$iaZ")
this.bU(a)
u=this.bP(a)
if(this.e.iP(u))a.preventDefault()},
sf5:function(a){this.z=H.l(a,"$ib",[[P.cT,P.P]],"$ab")}}
D.dz.prototype={$iac:1,$icK:1}
D.ac.prototype={$icK:1}
D.dJ.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.a0():u},
a_:function(a){var u=this.x
if(u!=null)u.K(a)},
d2:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
fV:function(){return this.d2(null)},
h8:function(a){var u,t,s
H.l(a,"$ij",[D.ac],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eC(s))return!1}return!0},
fu:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gd1(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iac")
if(p instanceof D.bL)C.a.h(this.r,p)
o=p.go
if(o==null){o=new D.c_()
o.sag(null)
o.saL(null)
o.c=null
o.d=0
p.go=o}H.n(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c2([n])
n.b=!0
this.a_(n)},
hc:function(a,b){var u,t,s,r=D.ac
H.l(b,"$ij",[r],"$aj")
for(u=b.gS(b),t=this.gd1();u.A();){s=u.gJ(u)
C.a.L(this.e,s)
s.gB().L(0,t)}r=new D.c3([r])
r.b=!0
this.a_(r)},
eC:function(a){var u=C.a.T(this.r,a)
return u},
seD:function(a){this.e=H.l(a,"$ib",[D.dz],"$ab")},
shj:function(a){this.f=H.l(a,"$ib",[D.dY],"$ab")},
seE:function(a){this.r=H.l(a,"$ib",[D.bL],"$ab")},
$aj:function(){return[D.ac]},
$aa6:function(){return[D.ac]}}
D.dY.prototype={$iac:1,$icK:1}
D.bL.prototype={
gB:function(){var u=this.go
return u==null?this.go=D.a0():u},
a_:function(a){var u
H.h(a,"$iD")
u=this.go
if(u!=null)u.K(a)},
fE:function(){return this.a_(null)},
gah:function(){return 12},
$iac:1,
$icK:1}
V.a1.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcn()),t=C.c.p(this.b,b.gbx()),s=C.c.p(this.c,b.gbZ())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
q:function(a,b){var u=C.c.q(this.a,b.gcn()),t=C.c.q(this.b,b.gbx()),s=C.c.q(this.c,b.gbZ())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.aD.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcn()),s=C.c.p(u.b,b.gbx()),r=C.c.p(u.c,b.gbZ()),q=C.c.p(u.d,b.gi_(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(t,s,r,q)},
q:function(a,b){var u=this,t=C.c.q(u.a,b.gcn()),s=C.c.q(u.b,b.gbx()),r=C.c.q(u.c,b.gbZ()),q=C.c.q(u.d,b.gi_(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(t,s,r,q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.fR.prototype={}
V.dQ.prototype={
ae:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dQ))return!1
u=b.a
t=$.L().a
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.cn(H.c([q.a,q.d,q.r],p),3,0),n=V.cn(H.c([q.b,q.e,q.x],p),3,0),m=V.cn(H.c([q.c,q.f,q.y],p),3,0)
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
V.ap.prototype={
ae:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
dM:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.dR()
u=1/b1
t=-n
s=-a0
return V.bo((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
C:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bo(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bu:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a3(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.L().a
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
i:function(a){return this.N()},
F:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.cn(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cn(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cn(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cn(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.F("")}}
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.a3.prototype={
p:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
C:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ba.prototype={
p:function(a,b){var u=this
return new V.ba(C.c.p(u.a,b.gj9(b)),C.c.p(u.b,b.gja(b)),C.c.p(u.c,b.gjb(b)),C.c.p(u.d,b.gj8(b)))},
q:function(a,b){var u=this
return new V.ba(C.c.q(u.a,b.gj9(b)),C.c.q(u.b,b.gja(b)),C.c.q(u.c,b.gjb(b)),C.c.q(u.d,b.gj8(b)))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.e0.prototype={
gav:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e0))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
V.a4.prototype={
b3:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gc5(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gc6(b)
if(typeof t!=="number")return t.p()
return new V.a4(s,C.c.p(t,u))},
q:function(a,b){var u,t=this.a,s=b.gc5(b)
if(typeof t!=="number")return t.q()
s=C.c.q(t,s)
t=this.b
u=b.gc6(b)
if(typeof t!=="number")return t.q()
return new V.a4(s,C.c.q(t,u))},
C:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.C()
u=this.b
if(typeof u!=="number")return u.C()
return new V.a4(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mi
return u==null?$.mi=new V.a4(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.a4(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.K.prototype={
b3:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aC:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
R:function(a){return new V.K(-this.a,-this.b,-this.c)},
C:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d0()
return new V.K(this.a/b,this.b/b,this.c/b)},
dN:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.bq.prototype={
b3:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.bq(C.d.p(u.a,b.gc5(b)),C.c.p(u.b,b.gc6(b)),C.c.p(u.c,b.gil()),C.d.p(u.d,b.gik()))},
q:function(a,b){var u=this
return new V.bq(C.d.q(u.a,b.gc5(b)),C.c.q(u.b,b.gc6(b)),C.c.q(u.c,b.gil()),C.d.q(u.d,b.gik()))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bq))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.T(u.a,3,0)+", "+V.T(u.b,3,0)+", "+V.T(u.c,3,0)+", "+V.T(u.d,3,0)+"]"}}
U.fy.prototype={
bC:function(a){var u=V.pM(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.a0():u},
X:function(a){var u=this.y
if(u!=null)u.K(a)},
sei:function(a,b){},
sdO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bC(u)}s=new D.N("maximumLocation",s,t.b,[P.p])
s.b=!0
t.X(s)}},
sdQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bC(u)}s=new D.N("minimumLocation",s,t.c,[P.p])
s.b=!0
t.X(s)}},
sa0:function(a,b){var u,t=this
b=t.bC(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.N("location",u,b,[P.p])
u.b=!0
t.X(u)}},
sdP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.N("maximumVelocity",r,a,[P.p])
r.b=!0
s.X(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.N("velocity",t,a,[P.p])
t.b=!0
u.X(t)}},
sdr:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.N("dampening",u,a,[P.p])
u.b=!0
this.X(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dw.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.a0():u},
aU:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cE.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.a0():u},
X:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.K(a)},
ao:function(){return this.X(null)},
eG:function(a,b){var u,t,s,r,q,p,o,n=U.ak
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gbf(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.n(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c2([n])
n.b=!0
this.X(n)},
ha:function(a,b){var u,t,s=U.ak
H.l(b,"$ij",[s],"$aj")
for(u=b.gS(b),t=this.gbf();u.A();)u.gJ(u).gB().L(0,t)
s=new D.c3([s])
s.b=!0
this.X(s)},
aU:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.r(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aU(0,b,c)
if(t!=null)u=u==null?t:t.C(0,u)}}s.f=u==null?V.dR():u
r=s.e
if(r!=null)r.aj(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.eg.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.a0():u},
X:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.K(a)},
ao:function(){return this.X(null)},
i2:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.a0():t
u.h(0,s.gfl())
u=s.a.c
t=u.d
u=t==null?u.d=D.a0():t
u.h(0,s.gfn())
u=s.a.c
t=u.c
u=t==null?u.c=D.a0():t
u.h(0,s.gfp())
u=s.a.d
t=u.f
u=t==null?u.f=D.a0():t
u.h(0,s.gfg())
u=s.a.d
t=u.d
u=t==null?u.d=D.a0():t
u.h(0,s.gfi())
u=s.a.e
t=u.b
u=t==null?u.b=D.a0():t
u.h(0,s.ghP())
u=s.a.e
t=u.d
u=t==null?u.d=D.a0():t
u.h(0,s.ghN())
u=s.a.e
t=u.c
u=t==null?u.c=D.a0():t
u.h(0,s.ghL())
return!0},
aq:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.a4(u,t)},
fm:function(a){var u=this
a=H.A(H.h(a,"$iD"),"$ibG")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fo:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibG")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.q(0,a.y)
u=new V.a4(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.aq(new V.a4(t.a,t.b).C(0,2).u(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.aq(new V.a4(s.a,s.b).C(0,2).u(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.aq(new V.a4(t.a,t.b).C(0,2).u(0,u.gav()))}n.ao()},
fq:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.ao()}},
fh:function(a){var u=this
if(H.A(H.h(a,"$iD"),"$idM").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fj:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibG")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.aq(new V.a4(s.a,s.b).C(0,2).u(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.aq(new V.a4(t.a,t.b).C(0,2).u(0,u.gav()))
n.ao()},
hQ:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hO:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$iea")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.q(0,a.y)
u=new V.a4(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.aq(new V.a4(t.a,t.b).C(0,2).u(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.aq(new V.a4(s.a,s.b).C(0,2).u(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa0(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.q(0,a.z)
n.dx=n.aq(new V.a4(t.a,t.b).C(0,2).u(0,u.gav()))}n.ao()},
hM:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.ao()}},
aU:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.aw(0,u)
r.b.aw(0,u)
q=V.lU(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.C(0,V.bo(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iak:1}
M.dC.prototype={
ax:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
eH:function(){return this.ax(null)},
fG:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sag(null)
o.saL(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sag(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c2([n])
n.b=!0
this.ax(n)},
fI:function(a,b){var u,t,s=E.ao
H.l(b,"$ij",[s],"$aj")
for(u=b.gS(b),t=this.gap();u.A();)u.gJ(u).gB().L(0,t)
s=new D.c3([s])
s.b=!0
this.ax(s)},
sb9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().L(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gB().h(0,t.gap())
s=new D.N("technique",u,t.d,[O.bM])
s.b=!0
t.ax(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.a0():u},
aR:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.e3(a1.d)
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
if(typeof s!=="number")return H.G(s)
o=C.c.ak(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.c.ak(p*r)
p=C.c.ak(q.c*s)
a2.c=p
q=C.c.ak(q.d*r)
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
i=V.bo(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e2(i)
t=$.m_
if(t==null){t=V.m1()
q=V.mm()
p=$.mj
if(p==null)p=$.mj=new V.K(0,0,-1)
h=p.u(0,Math.sqrt(p.E(p)))
q=q.aC(h)
g=q.u(0,Math.sqrt(q.E(q)))
f=h.aC(g)
e=new V.K(t.a,t.b,t.c)
d=g.R(0).E(e)
c=f.R(0).E(e)
b=h.R(0).E(e)
t=V.bo(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m_=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aU(0,a2,u)
if(a0!=null)a=a0.C(0,a)}a2.db.e2(a)
u=a1.d
if(u!=null)u.aw(0,a2)
for(u=a1.e.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();)u.d.aw(0,a2)
for(u=a1.e.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();)u.d.aR(a2)
a1.b.toString
a2.cy.ck()
a2.db.ck()
a1.c.toString
a2.e1()},
seX:function(a,b){this.e=H.l(b,"$ia6",[E.ao],"$aa6")},
$ipU:1}
A.dq.prototype={}
A.fn.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
im:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ij:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.an.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.an))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hr.prototype={
ev:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ag("")
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
A.p4(c3,u)
A.p6(c3,u)
A.p5(c3,u)
A.p8(c3,u)
A.p9(c3,u)
A.p7(c3,u)
A.pa(c3,u)
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
m=A.p3(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cU(n,35633)
b8.f=b8.cU(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.H(H.lo(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.C("Failed to link shader: "+H.i(l)))}b8.hB()
b8.hD()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.U(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.A(b8.y.U(0,"objMat"),"$iaB")
if(r)b8.fr=H.A(b8.y.U(0,"viewObjMat"),"$iaB")
b8.fy=H.A(b8.y.U(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.A(b8.y.U(0,"txt2DMat"),"$icZ")
if(c3.x1)b8.k2=H.A(b8.y.U(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.A(b8.y.U(0,"colorMat"),"$iaB")
b8.seT(H.c([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.U(0,"bendMatCount"),"$iaL")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.C(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaB"))}}if(c3.a.a)b8.r2=H.A(b8.y.U(0,"emissionClr"),"$iZ")
if(c3.b.a)b8.x1=H.A(b8.y.U(0,"ambientClr"),"$iZ")
if(c3.c.a)b8.y2=H.A(b8.y.U(0,"diffuseClr"),"$iZ")
if(c3.d.a)b8.dt=H.A(b8.y.U(0,"invDiffuseClr"),"$iZ")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dv=H.A(b8.y.U(0,"shininess"),"$iah")
if(t)b8.du=H.A(b8.y.U(0,"specularClr"),"$iZ")}if(c3.cy){b8.dw=H.A(b8.y.U(0,"envSampler"),"$ice")
if(c3.r.a)b8.dz=H.A(b8.y.U(0,"reflectClr"),"$iZ")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dA=H.A(b8.y.U(0,"refraction"),"$iah")
if(t)b8.dB=H.A(b8.y.U(0,"refractClr"),"$iZ")}}if(c3.y.a)b8.dC=H.A(b8.y.U(0,"alpha"),"$iah")
t=P.m
s=[t,A.aL]
b8.sf2(new H.a2(s))
b8.sf3(new H.a2([t,[P.b,A.cb]]))
b8.shk(new H.a2(s))
b8.shl(new H.a2([t,[P.b,A.cc]]))
b8.shG(new H.a2(s))
b8.shH(new H.a2([t,[P.b,A.cf]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.af()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.A(c,"$iZ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.C(c0+d+c1))
H.A(b,"$iZ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.A(c,"$iZ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$icd")
a2=b}else a2=b9
C.a.h(e,new A.cb(a1,a0,a,j,c,a2))}b8.c8.k(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}for(t=c3.Q,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$iZ")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$icZ")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$ice")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$ice")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$icY")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$iah")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$iah")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.A(a8,"$iah")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cc(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.ca.k(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}for(t=c3.ch,s=t.length,r=[A.cf],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$iZ")
if(typeof g!=="number")return g.af()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$iZ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.A(a8,"$iZ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.z(P.C(c0+o+c1))
H.A(b2,"$iah")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.z(P.C(c0+o+c1))
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
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$icY")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.z(P.C(c0+d+c1))
H.A(a8,"$iah")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.z(P.C(c0+d+c1))
H.A(a8,"$iah")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.z(P.C(c0+d+c1))
H.A(b2,"$iah")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.z(P.C(c0+d+c1))
H.A(a5,"$icd")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$icd")
a6=a5}else a6=b9
C.a.h(e,new A.cf(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cc.k(0,g,e)
q=b8.cb
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}}},
hz:function(a,b){},
seT:function(a){this.r1=H.l(a,"$ib",[A.aB],"$ab")},
sf2:function(a){this.c7=H.l(a,"$iy",[P.m,A.aL],"$ay")},
sf3:function(a){this.c8=H.l(a,"$iy",[P.m,[P.b,A.cb]],"$ay")},
shk:function(a){this.c9=H.l(a,"$iy",[P.m,A.aL],"$ay")},
shl:function(a){this.ca=H.l(a,"$iy",[P.m,[P.b,A.cc]],"$ay")},
shG:function(a){this.cb=H.l(a,"$iy",[P.m,A.aL],"$ay")},
shH:function(a){this.cc=H.l(a,"$iy",[P.m,[P.b,A.cf]],"$ay")}}
A.aE.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aH.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aI.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hu.prototype={
i:function(a){return this.b1}}
A.cb.prototype={}
A.cc.prototype={}
A.cf.prototype={}
A.cR.prototype={
ey:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cU:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.lo(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hB:function(){var u,t,s,r=this,q=H.c([],[A.dq]),p=r.a,o=H.a5(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dq(p,t.name,s))}r.x=new A.fn(q)},
hD:function(){var u,t,s,r=this,q=H.c([],[A.eb]),p=r.a,o=H.a5(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ie(t.type,t.size,t.name,s))}r.y=new A.iU(q)},
aK:function(a,b,c){var u=this.a
if(a===1)return new A.aL(u,b,c)
else return A.lc(u,this.r,b,a,c)},
f_:function(a,b,c){var u=this.a
if(a===1)return new A.cd(u,b,c)
else return A.lc(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.ce(u,b,c)
else return A.lc(u,this.r,b,a,c)},
bj:function(a,b){return new P.er(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ie:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aK(b,c,d)
case 5121:return u.aK(b,c,d)
case 5122:return u.aK(b,c,d)
case 5123:return u.aK(b,c,d)
case 5124:return u.aK(b,c,d)
case 5125:return u.aK(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iQ(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.cY(u.a,c,d)
case 35667:return new A.iR(u.a,c,d)
case 35668:return new A.iS(u.a,c,d)
case 35669:return new A.iT(u.a,c,d)
case 35674:return new A.iV(u.a,c,d)
case 35675:return new A.cZ(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.f_(b,c,d)
case 35680:return u.f0(b,c,d)
case 35670:throw H.d(u.bj("BOOL",c))
case 35671:throw H.d(u.bj("BOOL_VEC2",c))
case 35672:throw H.d(u.bj("BOOL_VEC3",c))
case 35673:throw H.d(u.bj("BOOL_VEC4",c))
default:throw H.d(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eb.prototype={}
A.iU.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
U:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aL.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shS:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cY.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cZ.prototype={
an:function(a){var u=new Float32Array(H.ci(H.l(a,"$ib",[P.p],"$ab")))
C.e.ee(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
an:function(a){var u=new Float32Array(H.ci(H.l(a,"$ib",[P.p],"$ab")))
C.e.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.cd.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ce.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kh.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ci(s.b,b).ci(s.d.ci(s.c,b),c)
a.sa0(0,new V.a3(r.a,r.b,r.c))
a.se9(r.u(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sdl(new V.ba(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kt.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kv.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.G(p)
s=-s*p
u=r*p
a.sa0(0,new V.a3(s,u,q))
u=new V.K(s,u,q)
a.se9(u.u(0,Math.sqrt(u.E(u))))
a.sdl(new V.ba(1-c,2+c,-1,-1))},
$S:7}
F.kw.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kx.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kQ.prototype={
$2:function(a,b){return 0},
$S:21}
F.kR.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.E(t))).C(0,this.b+s)
a.sa0(0,new V.a3(s.a,s.b,s.c))},
$S:7}
F.kT.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kE.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a3(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.ku.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lC(n.$1(o),m)
m=J.nm(J.lC(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.E(m)))
n=$.mk
if(n==null){n=new V.K(1,0,0)
$.mk=n
t=n}else t=n
n=u.aC(!J.Q(u,t)?V.mn():t)
s=n.u(0,Math.sqrt(n.E(n)))
n=s.aC(u)
t=n.u(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.C(0,n*m)
m=s.C(0,q*m)
a.sa0(0,J.nl(l,new V.a3(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.L(u.a.a.d.b,u)
u.a.a.Z()}u.bR()
u.bS()
u.hq()},
bV:function(a){this.a=a
C.a.h(a.d.b,this)},
bW:function(a){this.b=a
C.a.h(a.d.c,this)},
hA:function(a){this.c=a
C.a.h(a.d.d,this)},
bR:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
bS:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hq:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d0()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dN())return
return s.u(0,Math.sqrt(s.E(s)))},
eW:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.E(r)))
r=t.q(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aC(r.u(0,Math.sqrt(r.E(r))))
return r.u(0,Math.sqrt(r.E(r)))},
c1:function(){var u,t=this
if(t.d!=null)return!0
u=t.eS()
if(u==null){u=t.eW()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eR:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d0()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dN())return
return s.u(0,Math.sqrt(s.E(s)))},
eV:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.q(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.q(0,g).C(0,p).p(0,g).q(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.E(l)))
l=o.aC(q)
l=l.u(0,Math.sqrt(l.E(l))).aC(o)
q=l.u(0,Math.sqrt(l.E(l)))}return q},
c_:function(){var u,t=this
if(t.e!=null)return!0
u=t.eR()
if(u==null){u=t.eV()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gi7:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.b.ad(J.as(s.a.e),0)+", "+C.b.ad(J.as(s.b.e),0)+", "+C.b.ad(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.F("")}}
F.fU.prototype={}
F.il.prototype={
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
F.bn.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.L(u.a.a.c.b,u)
u.a.a.Z()}u.bR()
u.bS()},
bV:function(a){this.a=a
C.a.h(a.c.b,this)},
bW:function(a){this.b=a
C.a.h(a.c.c,this)},
bR:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
bS:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gb0())return a+"disposed"
return a+C.b.ad(J.as(this.a.e),0)+", "+C.b.ad(J.as(this.b.e),0)},
N:function(){return this.F("")}}
F.he.prototype={}
F.iO.prototype={
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
F.bI.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ad(J.as(u.e),0)},
N:function(){return this.F("")}}
F.e2.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.a0():u},
b6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ia())}h.a.v()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bI()
if(n.a==null)H.z(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nO(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.v()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cB(l,k,i)}g=h.e
if(g!=null)g.aj(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.aj(0)
return u},
iD:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.r(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.gir(u)
C.a.e4(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b5(0,t,q)){C.a.h(s,q)
C.a.e4(u,r)}}if(s.length>1)b.b6(s)}}p.a.v()
p.c.co()
p.d.co()
p.b.iW()
p.c.cp(new F.iO())
p.d.cp(new F.il())
o=p.e
if(o!=null)o.aj(0)},
bX:function(){this.iD(new F.jg(),new F.hS())},
cd:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cd()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdR(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).u(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.aj(0)},
i5:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bv()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bu().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.dk().a)!==0)++s
if((t&$.dl().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bs().a)!==0)++s
r=a3.gcw(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ds])
for(n=0,m=0;m<s;++m){l=a3.i1(m)
k=l.gcw(l)
C.a.k(o,m,new Z.ds(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iB(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dt(new Z.ei(a0,f),o,a3)
e.sfb(H.c([],[Z.bD]))
if(a.b.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.lf(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.lf(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.v()
C.a.h(d,c.e)}b=Z.lf(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.K(null)},
$ipV:1}
F.id.prototype={
hW:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cB(s,p,o))}}return u},
hX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ai],"$ab")
u=H.c([],[F.a8])
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
C.a.h(u,F.cB(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cB(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cB(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cB(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b5(0,p,n)){p.b_()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gi7(s)
if(t)s.b_()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c1())s=!1
return s},
c0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c_())s=!1
return s},
cd:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sf6:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.ie.prototype={
gn:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b5(0,p,n)){p.b_()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.N()},
F:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.F("")},
sfc:function(a){this.b=H.l(a,"$ib",[F.bn],"$ab")}}
F.ig.prototype={
gn:function(a){return this.b.length},
iW:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sbO:function(a){this.b=H.l(a,"$ib",[F.bI],"$ab")}}
F.ai.prototype={
c4:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.eh(u.cx,r,o,t,s,q,p,a,n)},
ia:function(){return this.c4(null)},
sa0:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdR:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
se9:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdl:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
iB:function(a){var u,t,s=this
if(a.t(0,$.bv())){u=s.f
t=[P.p]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bu())){u=s.r
t=[P.p]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bt())){u=s.x
t=[P.p]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bU())){u=s.y
t=[P.p]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bV())){u=s.z
t=[P.p]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.dk())){u=s.Q
t=[P.p]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.dl())){u=s.Q
t=[P.p]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.ct()))return H.c([s.ch],[P.p])
else if(a.t(0,$.bs())){u=s.cx
t=[P.p]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.p])},
c1:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.G(0,new F.jl(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
c_:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.G(0,new F.jk(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.b.ad(J.as(s.e),0))
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
C.a.h(q,V.T(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
N:function(){return this.F("")}}
F.jl.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jk.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jb.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
hY:function(a,b,c,d,e,f){var u=F.eh(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c1()
return!0},
c0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
i6:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var u,t,s,r
this.v()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
N:function(){return this.F("")},
shT:function(a){this.c=H.l(a,"$ib",[F.ai],"$ab")}}
F.jc.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
G:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.G(u.b,b)
C.a.G(u.c,new F.jd(u,b))
C.a.G(u.d,new F.je(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sf7:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sf8:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sf9:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.jd.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.je.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.jf.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfd:function(a){this.b=H.l(a,"$ib",[F.bn],"$ab")},
sfe:function(a){this.c=H.l(a,"$ib",[F.bn],"$ab")}}
F.jh.prototype={}
F.jg.prototype={
b5:function(a,b,c){return J.Q(b.f,c.f)}}
F.ji.prototype={}
F.hS.prototype={
b6:function(a){var u,t,s,r
H.l(a,"$ib",[F.ai],"$ab")
u=V.d0()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdR(u)
return}}
F.jj.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbO:function(a){this.b=H.l(a,"$ib",[F.bI],"$ab")}}
O.dO.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.a0():u},
aa:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.K(a)},
eK:function(){return this.aa(null)},
d6:function(a){H.h(a,"$iD")
this.a=null
this.aa(a)},
hv:function(){return this.d6(null)},
fw:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c2([u])
u.b=!0
this.aa(u)},
fA:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c3([u])
u.b=!0
this.aa(u)},
cR:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gah()
p=h.j(0,r.gah())
h.k(0,q,p==null?1:p)}o=H.c([],[A.aE])
h.G(0,new O.hy(j,o))
C.a.bz(o,new O.hz())
n=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gah()
p=n.j(0,r.gah())
n.k(0,q,p==null?1:p)}m=H.c([],[A.aH])
n.G(0,new O.hA(j,m))
C.a.bz(m,new O.hB())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gah()
q=l.j(0,r.gah())
l.k(0,t,q==null?1:q)}k=H.c([],[A.aI])
l.G(0,new O.hC(j,k))
C.a.bz(k,new O.hD())
i=C.d.a5(j.e.a.length+3,4)
j.dy.e
return A.nV(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eQ:function(a,b){H.l(a,"$ib",[T.e7],"$ab")},
aw:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.at(u,u.length,[H.r(u,0)]);u.A();){t=u.d
t.toString
s=$.bK
t.a=s==null?$.bK=new V.a3(0,0,0):s
s=$.ja
t.b=s==null?$.ja=new V.K(0,0,1):s
s=$.j9
t.c=s==null?$.j9=new V.K(0,1,0):s
s=$.j8
t.d=s==null?$.j8=new V.K(-1,0,0):s
s=t.f
if(s!=null){r=s.aU(0,b,t)
if(r!=null){t.a=r.bt(t.a)
s=r.bu(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bu(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bu(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
iY:function(b5,b6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.a
if(b4==null){b4=b3.cR()
u=b5.fr.j(0,b4.b1)
if(u==null){u=A.nU(b4,b5.a)
t=u.b
if(t.length===0)H.z(P.C("May not cache a shader with no name."))
if(b5.fr.bm(0,t))H.z(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b5.fr.k(0,t,u)}b4=b3.a=u
b6.e=null}s=b4.z
r=s.ds
b4=b6.e
if(!(b4 instanceof Z.dt))b4=b6.e=null
if(b4==null||!b4.d.t(0,r)){b4=s.k3
if(b4)b6.d.at()
q=s.k4
if(q){p=b6.d
o=p.e
if(o!=null)++o.d
p.d.c0()
p.a.c0()
p=p.e
if(p!=null)p.aj(0)}p=s.r2
if(p){o=b6.d
n=o.e
if(n!=null)++n.d
o.a.i6()
o=o.e
if(o!=null)o.aj(0)}m=b6.d.i5(new Z.jn(b5.a),r)
m.aP($.bv()).e=b3.a.Q.c
if(b4)m.aP($.bu()).e=b3.a.cx.c
if(q)m.aP($.bt()).e=b3.a.ch.c
if(s.r1)m.aP($.bU()).e=b3.a.cy.c
if(p)m.aP($.bV()).e=b3.a.db.c
if(s.rx)m.aP($.bs()).e=b3.a.dx.c
b6.e=m}b4=T.e7
l=H.c([],[b4])
q=b3.a
p=b5.a
p.useProgram(q.r)
q.x.im()
if(s.dy){q=b3.a
o=b5.dx
o=o.ga1(o)
q=q.dy
q.toString
q.an(o.ae(0,!0))}if(s.fr){q=b3.a
o=b5.cx
if(o==null){o=b5.db
o=o.ga1(o)
n=b5.dx
n=b5.cx=o.C(0,n.ga1(n))
o=n}q=q.fr
q.toString
q.an(o.ae(0,!0))}q=b3.a
o=b5.ch
if(o==null){o=b5.giU()
n=b5.dx
n=b5.ch=o.C(0,n.ga1(n))
o=n}q=q.fy
q.toString
q.an(o.ae(0,!0))
if(s.ry){q=b3.a
o=b3.b
q=q.k1
q.toString
q.an(C.i.ae(o,!0))}if(s.x1){q=b3.a
o=b3.c
q=q.k2
q.toString
q.an(C.i.ae(o,!0))}if(s.x2){q=b3.a
o=b3.d
q=q.k3
q.toString
q.an(C.i.ae(o,!0))}if(s.y2>0){k=b3.e.a.length
q=b3.a.k4
C.e.bv(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){o=b3.a
n=b3.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$iap")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.ci(H.l(n.ae(0,!0),"$ib",q,"$ab")))
C.e.ef(o.a,o.d,!1,i)}}if(s.a.a){q=b3.a
o=b3.f.f
q=q.r2
C.e.V(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b3.a
o=b3.r.f
q=q.x1
C.e.V(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b3.a
o=b3.x.f
q=q.y2
C.e.V(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b3.a
o=b3.y.f
q=q.dt
C.e.V(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b3.a
n=b3.z.ch
o=o.dv
C.e.a7(o.a,o.d,n)}if(q){q=b3.a
o=b3.z.f
q=q.du
C.e.V(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b5.db
h=o.ga1(o)
o=P.m
g=new H.a2([o,o])
for(o=b3.dx.e,n=o.length,f=[b4],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gah()
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dm(b3.a.c8.j(0,c),b)
a0=h.bu(d.gii(d))
a1=a0.a
a2=a0.b
a3=a0.c
a3=a0.u(0,Math.sqrt(a1*a1+a2*a2+a3*a3))
a2=a.e
a1=a3.a
a0=a3.b
a3=a3.c
C.e.V(a2.a,a2.d,a1,a0,a3)
a3=d.gaB(d)
a0=a.f
C.e.V(a0.a,a0.d,a3.a,a3.b,a3.c)
d.gaT()
a0=d.gii(d)
a1=a.d
C.e.V(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gjz()
a1=a.b
C.e.V(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gcq(d)
a1=a.c
C.e.V(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaT()
H.l(l,"$ib",f,"$ab")
if(!C.a.T(l,a0)){a0.sb2(0,l.length)
C.a.h(l,a0)}a0=d.gaT()
a1=a0.gb4(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb4(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb2(a0)
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=b3.a.c7.j(0,n)
C.e.bv(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b5.db
h=o.ga1(o)
o=P.m
a4=new H.a2([o,o])
for(o=b3.dx.f,n=o.length,b4=[b4],f=[P.p],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gah()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dm(b3.a.ca.j(0,c),b)
a5=h.C(0,d.ga1(d))
a0=d.ga1(d)
a1=$.bK
a0=a0.bt(a1==null?$.bK=new V.a3(0,0,0):a1)
a1=a.b
C.e.V(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.bK
a0=a5.bt(a0==null?$.bK=new V.a3(0,0,0):a0)
a1=a.c
C.e.V(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaB(d)
a1=a.e
C.e.V(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaT()
a0=a5.dM(0)
a1=a0.a
a2=a0.b
a3=a0.c
a6=a0.e
a7=a0.f
a8=a0.r
a9=a0.y
b0=a0.z
a0=a0.Q
b1=a.d
b1.toString
i=new Float32Array(H.ci(H.l(new V.dQ(a1,a2,a3,a6,a7,a8,a9,b0,a0).ae(0,!0),"$ib",f,"$ab")))
C.e.ee(b1.a,b1.d,!1,i)
d.gaT()
a0=d.gaT()
H.l(l,"$ib",b4,"$ab")
if(!C.a.T(l,a0)){a0.sb2(0,l.length)
C.a.h(l,a0)}a0=d.gaT()
a1=a0.gb4(a0)
if(a1){a1=a.f
a1.toString
a2=a0.gb4(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb2(a0)
a1.a.uniform1i(a1.d,a0)}}d.gcv()
a0=d.gje()
a1=a.x
C.e.j7(a1.a,a1.d,a0.a,a0.b,a0.c,a0.d)
a0=d.gcv()
if(!C.a.T(l,a0)){a0.sb2(0,l.length)
C.a.h(l,a0)}a0=d.gcv()
a1=a0.gb4(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb4(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb2(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.gji()){a0=d.gjf()
a1=a.y
C.e.a7(a1.a,a1.d,a0)
a0=d.gjg()
a1=a.z
C.e.a7(a1.a,a1.d,a0)
a0=d.gjh()
a1=a.Q
C.e.a7(a1.a,a1.d,a0)}}for(b4=q.length,e=0;e<q.length;q.length===b4||(0,H.u)(q),++e){o=q[e].a
k=a4.j(0,o)
if(k==null)k=0
o=b3.a.c9.j(0,o)
C.e.bv(o.a,o.d,k)}}b4=s.ch
if(b4.length>0){q=b5.db
h=q.ga1(q)
q=P.m
b2=new H.a2([q,q])
for(q=b3.dx.r,o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){d=q[e]
c=d.gah()
b=b2.j(0,c)
if(b==null)b=0
b2.k(0,c,b+1)
a=J.dm(b3.a.cc.j(0,c),b)
n=d.a
f=a.b
a0=n.a
a1=n.b
n=n.c
C.e.V(f.a,f.d,a0,a1,n)
n=d.b
a1=n.a
a0=n.b
f=n.c
f=n.u(0,Math.sqrt(a1*a1+a0*a0+f*f))
a0=a.c
a1=f.a
n=f.b
f=f.c
C.e.V(a0.a,a0.d,a1,n,f)
f=h.bt(d.a)
n=a.d
C.e.V(n.a,n.d,f.a,f.b,f.c)
f=d.r
n=a.e
C.e.V(n.a,n.d,f.a,f.b,f.c)
n=d.cy
f=a.Q
C.e.a7(f.a,f.d,n)
n=d.dx
f=a.ch
C.e.a7(f.a,f.d,n)
n=d.dy
f=a.cx
C.e.a7(f.a,f.d,n)
n=d.fr
f=a.cy
C.e.a7(f.a,f.d,n)
n=d.fx
f=a.db
C.e.a7(f.a,f.d,n)}for(q=b4.length,e=0;e<b4.length;b4.length===q||(0,H.u)(b4),++e){o=b4[e].a
k=b2.j(0,o)
if(k==null)k=0
o=b3.a.cb.j(0,o)
C.e.bv(o.a,o.d,k)}}}if(s.dx){b4=b3.a
q=b5.Q
if(q==null){q=b5.db
q=b5.Q=q.ga1(q).dM(0)}b4=b4.id
b4.toString
b4.an(q.ae(0,!0))}if(s.cy){b3.eQ(l,b3.ch)
b4=b3.a
q=b3.ch
b4.hz(b4.dw,q)
if(s.r.a){b4=b3.a
q=b3.cx.f
b4=b4.dz
C.e.V(b4.a,b4.d,q.a,q.b,q.c)}b4=s.x.a
if(!b4)q=!1
else q=!0
if(q){q=b3.a
o=b3.cy.ch
q=q.dA
C.e.a7(q.a,q.d,o)}if(b4){b4=b3.a
q=b3.cy.f
b4=b4.dB
C.e.V(b4.a,b4.d,q.a,q.b,q.c)}}b4=s.y.a
q=!b4
if(q)o=!1
else o=!0
if(o){if(b4){b4=b3.a
o=b3.db.f
b4=b4.dC
C.e.a7(b4.a,b4.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bk(b5)
b4=b6.e
b4.bk(b5)
b4.aR(b5)
b4.ed(b5)
if(q)b4=!1
else b4=!0
if(b4)p.disable(3042)
for(j=0;j<l.length;++j)l[j].ed(b5)
b4=b3.a
b4.toString
p.useProgram(null)
b4.x.ij()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cR().b1},
seU:function(a){this.e=H.l(a,"$ia6",[V.ap],"$aa6")}}
O.hy.prototype={
$2:function(a,b){H.a5(a)
H.a5(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aE(a,C.d.a5(b+3,4)*4))},
$S:11}
O.hz.prototype={
$2:function(a,b){H.h(a,"$iaE")
H.h(b,"$iaE")
return J.kW(a.a,b.a)},
$S:50}
O.hA.prototype={
$2:function(a,b){H.a5(a)
H.a5(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aH(a,C.d.a5(b+3,4)*4))},
$S:11}
O.hB.prototype={
$2:function(a,b){H.h(a,"$iaH")
H.h(b,"$iaH")
return J.kW(a.a,b.a)},
$S:51}
O.hC.prototype={
$2:function(a,b){H.a5(a)
H.a5(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.d.a5(b+3,4)*4))},
$S:11}
O.hD.prototype={
$2:function(a,b){H.h(a,"$iaI")
H.h(b,"$iaI")
return J.kW(a.a,b.a)},
$S:52}
O.hs.prototype={
az:function(){var u,t=this
t.cA()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.N(t.b,u,1,[P.p])
u.b=!0
t.a.aa(u)}}}
O.dP.prototype={
az:function(){},
d9:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.aa(null)}}}
O.ht.prototype={}
O.b8.prototype={
d8:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.N(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.aa(t)}},
az:function(){this.cA()
this.d8(new V.a1(1,1,1))},
saB:function(a,b){this.d9(new A.an(!0,!1,!1))
this.d8(b)}}
O.hv.prototype={}
O.hw.prototype={
az:function(){var u,t=this
t.cB()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.N(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.aa(u)}}}
O.hx.prototype={
da:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.N(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.aa(t)}},
az:function(){this.cB()
this.da(100)}}
O.bM.prototype={}
T.e7.prototype={}
V.bi.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dN.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa4:function(a){this.a=H.l(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aE:function(a,b){return!this.er(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}}
V.i3.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c7(this.a),t=H.c7(this.b)
return u+".."+t},
$iaz:1}
V.ic.prototype={
ex:function(a){var u,t
if(a.a.length<=0)throw H.d(P.C("May not create a SetMatcher with zero characters."))
u=new H.a2([P.m,P.S])
for(t=new H.cH(a,a.gn(a),[H.ar(a,"x",0)]);t.A();)u.k(0,t.d,!0)
this.shy(u)},
aE:function(a,b){return this.a.bm(0,b)},
i:function(a){var u=this.a
return P.cU(u.ga3(u),0,null)},
shy:function(a){this.a=H.l(a,"$iy",[P.m,P.S],"$ay")},
$iaz:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cX(this.a.l(0,b))
r.sa4(H.c([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shR:function(a){this.c=H.l(a,"$ib",[V.cX],"$ab")}}
V.e9.prototype={
i:function(a){var u=H.ly(this.b,"\n","\\n"),t=H.ly(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cW.prototype={
aF:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shr:function(a){var u=P.f
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.iF.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.shR(H.c([],[V.cX]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cW(a)
u=P.f
t.shr(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
ec:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.e9]),k=this.c,j=[P.m],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.iq(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cU(i,0,m)
throw H.d(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cU(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e9(n==null?o.b:n,p,s)}++s}}},
shI:function(a){this.a=H.l(a,"$iy",[P.f,V.cS],"$ay")},
shK:function(a){this.b=H.l(a,"$iy",[P.f,V.cW],"$ay")}}
V.cX.prototype={
i:function(a){return this.b.b+": "+this.cz(0)}}
X.dv.prototype={$icK:1}
X.h0.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.a0():u}}
X.dX.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.a0():u},
aJ:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.K(a)},
eN:function(){return this.aJ(null)},
saQ:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gB().L(0,s.gcF())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gcF())
u=new D.N("mover",t,s.b,[U.ak])
u.b=!0
s.aJ(u)}},
$icK:1,
$idv:1}
X.e6.prototype={}
V.bz.prototype={
be:function(a){this.b=new P.h4(C.Q)
this.c=null
this.sbJ(H.c([],[[P.b,W.aF]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.eZ(q,0,q.length)
n=o==null?q:o
C.O.em(p,H.ly(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gau(m.d),p)}},
e_:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbJ(H.c([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).ec(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.br(t[r])},
sbJ:function(a){this.d=H.l(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kP.prototype={
$1:function(a){var u
H.h(a,"$ibc")
u=C.c.eb(this.a.giu(),2)
if(u!=="0.00")P.lx(u+" fps")},
$S:53}
V.fH.prototype={
br:function(a){var u=this
switch(a.a){case"Class":u.M(a.b,"#551")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break
case"Type":u.M(a.b,"#B11")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iG()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.t("_"))
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
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Y("0","9")
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bi())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bi())
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
t=new V.au()
s=[V.az]
t.sa4(H.c([],s))
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
t=new V.au()
t.sa4(H.c([],s))
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
t.d=t.a.O("Num")
t=a1.l(0,n)
t.d=t.a.O("Num")
t=a1.l(0,m)
t.d=t.a.O("Symbol")
t=a1.l(0,j)
t.d=t.a.O("String")
t=a1.l(0,g)
t.d=t.a.O("String")
t=a1.l(0,c)
t.d=t.a.O(d)
t=a1.l(0,a0)
t.d=t.a.O(a0)
t=a1.l(0,q)
t=t.d=t.a.O(q)
u=[P.f]
t.aF(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aF(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aF(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h1.prototype={
br:function(a){var u=this
switch(a.a){case"Builtin":u.M(a.b,"#411")
break
case"Comment":u.M(a.b,"#777")
break
case"Id":u.M(a.b,"#111")
break
case"Num":u.M(a.b,"#191")
break
case"Preprocess":u.M(a.b,"#737")
break
case"Reserved":u.M(a.b,"#119")
break
case"Symbol":u.M(a.b,"#611")
break
case"Type":u.M(a.b,"#171")
break
case"Whitespace":u.M(a.b,"#111")
break}},
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iG()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.t("_"))
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
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Y("0","9")
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
C.a.h(e.l(0,k).m(0,m).a,new V.bi())
t=e.l(0,j).m(0,i)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa4(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sa4(H.c([],s))
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
u.d=u.a.O("Num")
u=e.l(0,n)
u.d=u.a.O("Num")
u=e.l(0,m)
u.d=u.a.O("Symbol")
u=e.l(0,i)
u.d=u.a.O(j)
u=e.l(0,g)
u.d=u.a.O(h)
u=e.l(0,f)
u.d=u.a.O(f)
u=e.l(0,q)
u=u.d=u.a.O(q)
t=[P.f]
u.aF(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aF(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aF(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.h2.prototype={
br:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.M(a.b,"#911")
u.M("=",t)
break
case"Id":u.M(a.b,t)
break
case"Other":u.M(a.b,t)
break
case"Reserved":u.M(a.b,"#119")
break
case"String":u.M(a.b,"#171")
break
case"Symbol":u.M(a.b,"#616")
break}},
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iG()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
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
C.a.h(l.l(0,o).m(0,o).a,new V.bi())
C.a.h(l.l(0,s).m(0,m).a,new V.bi())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sa4(H.c([],[V.az]))
C.a.h(u.a,t)
u=V.w(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.O("Symbol")
u=l.l(0,n)
u.d=u.a.O("String")
u=l.l(0,r)
t=u.a.O(r)
u.d=t
t.aF(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.hY.prototype={
e_:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbJ(H.c([],[[P.b,W.aF]]))
this.M(C.a.m(b,"\n"),"#111")},
br:function(a){},
bn:function(){return}}
V.i1.prototype={
dh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.me().gcm().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.df(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lE(m.c).h(0,q)
o=W.nI("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.i2(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lE(m.c).h(0,r.createElement("br"))},
aZ:function(a,b,c){return this.dh(a,b,c,!1)},
df:function(a){var u,t,s=P.me(),r=P.f,q=P.nQ(s.gcm(),r,r)
q.k(0,this.a,a)
u=s.e5(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k0([],[]).cs(""),"",t)}}
V.i2.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.df(u.d)}},
$S:16}
V.ih.prototype={
ez:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.ij(o),{func:1,ret:-1,args:[r]}),!1,r)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ec(C.a.iA(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.f2(C.y,n,C.h,!1)
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
ej:function(a){var u,t,s,r=new V.fH("dart")
r.be("dart")
u=new V.h1("glsl")
u.be("glsl")
t=new V.h2("html")
t.be("html")
s=C.a.is(H.c([r,u,t],[V.bz]),new V.ik(a))
if(s!=null)return s
r=new V.hY("plain")
r.be("plain")
return r},
di:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dj(r).a2(r,"+")){C.a.k(b0,s,C.b.a6(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a2(r,"-")){C.a.k(b0,s,C.b.a6(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ej(a8)
q.e_(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f2(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lG()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.Z.i0(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.u)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gS(r);a3.A();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hU:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.f],"$ab")
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
s=H.h(r.insertCell(-1),"$ibb").style
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
o=H.h(r.insertCell(-1),"$ibb")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hC:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iG()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sa4(H.c([],r))
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
s=new V.au()
s.sa4(H.c([],r))
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
s=new V.au()
s.sa4(H.c([],r))
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
t=new V.au()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bi())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.O(p)
s=u.l(0,n)
s.d=s.a.O(o)
s=u.l(0,"CodeEnd")
s.d=s.a.O(m)
s=u.l(0,j)
s.d=s.a.O("Link")
s=u.l(0,i)
s.d=s.a.O(i)
this.b=u}}
V.ij.prototype={
$1:function(a){P.ma(C.o,new V.ii(this.a))},
$S:16}
V.ii.prototype={
$0:function(){var u=C.c.ak(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.ik.prototype={
$1:function(a){return H.h(a,"$ibz").a===this.a},
$S:55}
N.kG.prototype={
$0:function(){this.a.sa8(0,F.ls(1,null,null,1))},
$S:0}
N.kH.prototype={
$0:function(){this.a.sa8(0,F.lt(1,!0,!0,40,1))},
$S:0}
N.kI.prototype={
$0:function(){this.a.sa8(0,F.lt(1,!0,!1,40,0))},
$S:0}
N.kJ.prototype={
$0:function(){this.a.sa8(0,F.pI(6,6))},
$S:0}
N.kK.prototype={
$0:function(){this.a.sa8(0,F.n0())},
$S:0}
N.kL.prototype={
$0:function(){this.a.sa8(0,F.pA())},
$S:0}
N.kM.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.di("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.di("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eo=u.i
u=J.dH.prototype
u.eq=u.i
u=P.j.prototype
u.ep=u.bw
u=W.U.prototype
u.bA=u.ab
u=W.eM.prototype
u.es=u.as
u=O.dP.prototype
u.cA=u.az
u=O.b8.prototype
u.cB=u.az
u=V.dN.prototype
u.er=u.aE
u.cz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ph","or",13)
u(P,"pi","os",13)
u(P,"pj","ot",13)
t(P,"mK","pf",3)
s(W,"pt",4,null,["$4"],["ov"],28,0)
s(W,"pu",4,null,["$4"],["ow"],28,0)
var m
r(m=E.ao.prototype,"gdW",0,0,null,["$1","$0"],["dX","iL"],1,0)
r(m,"gdY",0,0,null,["$1","$0"],["dZ","iM"],1,0)
r(m,"gdU",0,0,null,["$1","$0"],["dV","iK"],1,0)
r(m,"gdS",0,0,null,["$1","$0"],["dT","iH"],1,0)
q(m,"giF","iG",9)
q(m,"giI","iJ",9)
r(m=E.e8.prototype,"gcC",0,0,null,["$1","$0"],["cE","cD"],1,0)
p(m,"gj_","e6",3)
o(m=X.ef.prototype,"gfP","fQ",15)
o(m,"gfB","fC",15)
o(m,"gfJ","fK",4)
o(m,"gfT","fU",31)
o(m,"gfR","fS",31)
o(m,"gfX","fY",4)
o(m,"gh0","h1",4)
o(m,"gfN","fO",4)
o(m,"gfZ","h_",4)
o(m,"gfL","fM",4)
o(m,"gh2","h3",36)
o(m,"gh4","h5",15)
o(m,"ghh","hi",14)
o(m,"ghd","he",14)
o(m,"ghf","hg",14)
r(m=D.dJ.prototype,"gd1",0,0,null,["$1","$0"],["d2","fV"],1,0)
o(m,"gh7","h8",38)
q(m,"gft","fu",26)
q(m,"ghb","hc",26)
r(D.bL.prototype,"gfD",0,0,null,["$1","$0"],["a_","fE"],1,0)
n(V.a4.prototype,"gn","b3",12)
n(V.K.prototype,"gn","b3",12)
n(V.bq.prototype,"gn","b3",12)
r(m=U.cE.prototype,"gbf",0,0,null,["$1","$0"],["X","ao"],1,0)
q(m,"geF","eG",22)
q(m,"gh9","ha",22)
r(m=U.eg.prototype,"gbf",0,0,null,["$1","$0"],["X","ao"],1,0)
o(m,"gfl","fm",2)
o(m,"gfn","fo",2)
o(m,"gfp","fq",2)
o(m,"gfg","fh",2)
o(m,"gfi","fj",2)
o(m,"ghP","hQ",2)
o(m,"ghN","hO",2)
o(m,"ghL","hM",2)
r(m=M.dC.prototype,"gap",0,0,null,["$1","$0"],["ax","eH"],1,0)
q(m,"gfF","fG",9)
q(m,"gfH","fI",9)
r(m=O.dO.prototype,"geJ",0,0,null,["$1","$0"],["aa","eK"],1,0)
r(m,"ghu",0,0,null,["$1","$0"],["d6","hv"],1,0)
q(m,"gfv","fw",33)
q(m,"gfz","fA",33)
r(X.dX.prototype,"gcF",0,0,null,["$1","$0"],["aJ","eN"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.l5,J.a,J.at,P.ez,P.j,H.cH,P.b5,H.c0,H.d_,H.fA,H.iL,P.bB,H.cx,H.eR,P.ad,H.hf,H.hh,H.ha,P.eX,P.bg,P.aN,P.ej,P.it,P.cT,P.iu,P.bc,P.am,P.kg,P.jV,P.cg,P.ey,P.x,P.k8,P.hn,P.bZ,P.h5,P.ke,P.kd,P.S,P.ay,P.aa,P.b4,P.hW,P.e4,P.er,P.h_,P.bC,P.b,P.y,P.O,P.av,P.f,P.ag,P.ch,P.j_,P.jY,W.fD,W.bQ,W.F,W.dV,W.eM,W.k3,W.dE,W.aA,W.jU,W.f3,P.k_,P.jP,P.R,O.a6,O.cI,E.fu,E.ao,E.i4,E.e8,Z.ei,Z.jn,Z.dt,Z.bD,Z.bP,D.fx,D.c_,D.D,X.du,X.dI,X.hc,X.hk,X.bF,X.hK,X.iH,X.ef,D.dz,D.ac,D.dY,D.bL,V.a1,V.aD,V.fR,V.dQ,V.ap,V.a9,V.a3,V.ba,V.e0,V.a4,V.K,V.bq,U.eg,M.dC,A.dq,A.fn,A.an,A.aE,A.aH,A.aI,A.hu,A.cb,A.cc,A.cf,A.eb,A.iU,F.a8,F.fU,F.bn,F.he,F.bI,F.e2,F.id,F.ie,F.ig,F.ai,F.jb,F.jc,F.jf,F.jh,F.ji,F.jj,O.bM,O.dP,O.hv,V.bi,V.az,V.dN,V.i3,V.ic,V.cS,V.e9,V.cW,V.iF,X.dv,X.e6,X.dX,V.bz,V.i1,V.ih])
s(J.a,[J.h8,J.dG,J.dH,J.aR,J.bE,J.bl,H.cL,H.bH,W.k,W.fj,W.bX,W.b2,W.b3,W.W,W.el,W.fI,W.fJ,W.en,W.dB,W.ep,W.fL,W.o,W.es,W.aQ,W.h3,W.eu,W.cF,W.dL,W.hE,W.eA,W.eB,W.aS,W.eC,W.eF,W.aT,W.eJ,W.eL,W.aV,W.eN,W.aW,W.eS,W.aJ,W.eV,W.iE,W.aY,W.eY,W.iJ,W.j4,W.f4,W.f6,W.f8,W.fa,W.fc,P.b7,P.ew,P.b9,P.eH,P.i0,P.eT,P.bd,P.f_,P.fo,P.ek,P.dr,P.dZ,P.c9,P.e1,P.ec,P.eP])
s(J.dH,[J.hX,J.bO,J.bm])
t(J.l4,J.aR)
s(J.bE,[J.dF,J.h9])
t(P.hj,P.ez)
s(P.hj,[H.ed,W.jv,W.aq,P.fW])
t(H.t,H.ed)
s(P.j,[H.fO,H.ho,H.d1])
s(H.fO,[H.c4,H.hg])
s(P.b5,[H.hp,H.jo])
t(H.hq,H.c4)
t(H.fB,H.fA)
s(P.bB,[H.hT,H.hb,H.iY,H.iN,H.fw,H.ia,P.fm,P.dW,P.aP,P.iZ,P.iW,P.ca,P.fz,P.fG])
s(H.cx,[H.kU,H.iA,H.kA,H.kB,H.kC,P.jr,P.jq,P.js,P.jt,P.k7,P.k6,P.jC,P.jG,P.jD,P.jE,P.jF,P.jJ,P.jK,P.jI,P.jH,P.iv,P.iw,P.kq,P.jS,P.jR,P.jT,P.hi,P.hm,P.fM,P.fN,P.j3,P.j0,P.j1,P.j2,P.k9,P.ka,P.kc,P.kb,P.kk,P.kj,P.kl,P.km,W.fP,W.hG,W.hI,W.i9,W.is,W.jB,W.hR,W.hQ,W.jW,W.jX,W.k5,W.kf,P.k1,P.ks,P.fX,P.fY,P.fq,E.i5,E.i6,E.i7,E.iD,D.fS,D.fT,F.kh,F.kt,F.kv,F.kw,F.kx,F.kQ,F.kR,F.kT,F.kE,F.ku,F.jl,F.jk,F.jd,F.je,O.hy,O.hz,O.hA,O.hB,O.hC,O.hD,V.kP,V.i2,V.ij,V.ii,V.ik,N.kG,N.kH,N.kI,N.kJ,N.kK,N.kL,N.kM])
s(H.iA,[H.iq,H.cv])
t(H.jp,P.fm)
t(P.hl,P.ad)
s(P.hl,[H.a2,W.ju])
t(H.dS,H.bH)
s(H.dS,[H.d6,H.d8])
t(H.d7,H.d6)
t(H.cM,H.d7)
t(H.d9,H.d8)
t(H.dT,H.d9)
s(H.dT,[H.hL,H.hM,H.hN,H.hO,H.hP,H.dU,H.cN])
t(P.jQ,P.kg)
t(P.jO,P.jV)
t(P.f1,P.hn)
t(P.ee,P.f1)
s(P.bZ,[P.fs,P.fQ])
t(P.bA,P.iu)
s(P.bA,[P.ft,P.h4,P.j7,P.j6])
t(P.j5,P.fQ)
s(P.aa,[P.p,P.m])
s(P.aP,[P.c8,P.h6])
t(P.jx,P.ch)
s(W.k,[W.E,W.fV,W.cJ,W.aU,W.da,W.aX,W.aK,W.dc,W.jm,W.d2,P.fr,P.bW])
s(W.E,[W.U,W.by,W.d3])
s(W.U,[W.v,P.q])
s(W.v,[W.dp,W.fk,W.cu,W.bx,W.bY,W.aF,W.fZ,W.cG,W.ib,W.bb,W.e5,W.iy,W.iz,W.cV])
s(W.b2,[W.cy,W.fE,W.fF])
t(W.fC,W.b3)
t(W.cz,W.el)
t(W.eo,W.en)
t(W.dA,W.eo)
t(W.eq,W.ep)
t(W.fK,W.eq)
t(W.aG,W.bX)
t(W.et,W.es)
t(W.cC,W.et)
t(W.ev,W.eu)
t(W.c1,W.ev)
t(W.bN,W.o)
s(W.bN,[W.b6,W.ae,W.aZ])
t(W.hF,W.eA)
t(W.hH,W.eB)
t(W.eD,W.eC)
t(W.hJ,W.eD)
t(W.eG,W.eF)
t(W.cO,W.eG)
t(W.eK,W.eJ)
t(W.hZ,W.eK)
t(W.i8,W.eL)
t(W.db,W.da)
t(W.im,W.db)
t(W.eO,W.eN)
t(W.io,W.eO)
t(W.ir,W.eS)
t(W.eW,W.eV)
t(W.iB,W.eW)
t(W.dd,W.dc)
t(W.iC,W.dd)
t(W.eZ,W.eY)
t(W.iI,W.eZ)
t(W.bf,W.ae)
t(W.f5,W.f4)
t(W.jw,W.f5)
t(W.em,W.dB)
t(W.f7,W.f6)
t(W.jL,W.f7)
t(W.f9,W.f8)
t(W.eE,W.f9)
t(W.fb,W.fa)
t(W.jZ,W.fb)
t(W.fd,W.fc)
t(W.k2,W.fd)
t(W.jy,W.ju)
t(W.jz,P.it)
t(W.lg,W.jz)
t(W.jA,P.cT)
t(W.k4,W.eM)
t(P.k0,P.k_)
t(P.al,P.jP)
t(P.ex,P.ew)
t(P.hd,P.ex)
t(P.eI,P.eH)
t(P.hU,P.eI)
t(P.cQ,P.q)
t(P.eU,P.eT)
t(P.ix,P.eU)
t(P.f0,P.f_)
t(P.iK,P.f0)
t(P.fp,P.ek)
t(P.hV,P.bW)
t(P.eQ,P.eP)
t(P.ip,P.eQ)
s(E.fu,[Z.ds,A.cR,T.e7])
s(D.D,[D.c2,D.c3,D.N,X.i_])
s(X.i_,[X.dM,X.bG,X.ea])
s(O.a6,[D.dJ,U.cE])
s(D.fx,[U.fy,U.ak])
t(U.dw,U.ak)
t(A.hr,A.cR)
s(A.eb,[A.aL,A.iR,A.iS,A.iT,A.iP,A.ah,A.iQ,A.Z,A.cY,A.iV,A.cZ,A.aB,A.cd,A.ce])
t(F.il,F.fU)
t(F.iO,F.he)
t(F.jg,F.jh)
t(F.hS,F.ji)
t(O.dO,O.bM)
s(O.dP,[O.hs,O.ht,O.b8])
s(O.b8,[O.hw,O.hx])
s(V.dN,[V.au,V.cX])
t(X.h0,X.e6)
s(V.bz,[V.fH,V.h1,V.h2,V.hY])
u(H.ed,H.d_)
u(H.d6,P.x)
u(H.d7,H.c0)
u(H.d8,P.x)
u(H.d9,H.c0)
u(P.ez,P.x)
u(P.f1,P.k8)
u(W.el,W.fD)
u(W.en,P.x)
u(W.eo,W.F)
u(W.ep,P.x)
u(W.eq,W.F)
u(W.es,P.x)
u(W.et,W.F)
u(W.eu,P.x)
u(W.ev,W.F)
u(W.eA,P.ad)
u(W.eB,P.ad)
u(W.eC,P.x)
u(W.eD,W.F)
u(W.eF,P.x)
u(W.eG,W.F)
u(W.eJ,P.x)
u(W.eK,W.F)
u(W.eL,P.ad)
u(W.da,P.x)
u(W.db,W.F)
u(W.eN,P.x)
u(W.eO,W.F)
u(W.eS,P.ad)
u(W.eV,P.x)
u(W.eW,W.F)
u(W.dc,P.x)
u(W.dd,W.F)
u(W.eY,P.x)
u(W.eZ,W.F)
u(W.f4,P.x)
u(W.f5,W.F)
u(W.f6,P.x)
u(W.f7,W.F)
u(W.f8,P.x)
u(W.f9,W.F)
u(W.fa,P.x)
u(W.fb,W.F)
u(W.fc,P.x)
u(W.fd,W.F)
u(P.ew,P.x)
u(P.ex,W.F)
u(P.eH,P.x)
u(P.eI,W.F)
u(P.eT,P.x)
u(P.eU,W.F)
u(P.f_,P.x)
u(P.f0,W.F)
u(P.ek,P.ad)
u(P.eP,P.x)
u(P.eQ,W.F)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bx.prototype
C.n=W.bY.prototype
C.O=W.aF.prototype
C.R=J.a.prototype
C.a=J.aR.prototype
C.d=J.dF.prototype
C.i=J.dG.prototype
C.c=J.bE.prototype
C.b=J.bl.prototype
C.S=J.bm.prototype
C.Y=W.cO.prototype
C.B=J.hX.prototype
C.e=P.c9.prototype
C.Z=W.bb.prototype
C.C=W.e5.prototype
C.r=J.bO.prototype
C.D=W.bf.prototype
C.E=W.d2.prototype
C.a_=new P.ft()
C.F=new P.fs()
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

C.M=new P.hW()
C.h=new P.j5()
C.N=new P.j7()
C.f=new P.jQ()
C.o=new P.b4(0)
C.P=new P.b4(5e6)
C.Q=new P.h5("element",!0,!1,!1,!1)
C.w=H.c(u([127,2047,65535,1114111]),[P.m])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.T=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.U=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.c(u([]),[P.f])
C.V=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.m=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.W=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.X=new H.fB(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",p:"double",aa:"num",f:"String",S:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.ai,P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.ao]]},{func:1,ret:P.O,args:[D.D]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.p},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:V.a3,args:[P.p]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ak]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ac]]},{func:1,ret:P.S,args:[W.E]},{func:1,ret:P.S,args:[W.U,P.f,P.f,W.bQ]},{func:1,ret:P.S,args:[W.aA]},{func:1,ret:P.S,args:[P.f]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[P.m,[P.j,V.ap]]},{func:1,ret:W.U,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.bf]},{func:1,args:[W.o]},{func:1,ret:P.S,args:[[P.j,D.ac]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.av]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aE,A.aE]},{func:1,ret:P.m,args:[A.aH,A.aH]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,ret:P.O,args:[P.bc]},{func:1,args:[P.f]},{func:1,ret:P.S,args:[V.bz]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b1=0
$.cw=null
$.lI=null
$.lk=!1
$.mR=null
$.mI=null
$.mY=null
$.ky=null
$.kD=null
$.lv=null
$.cj=null
$.dh=null
$.di=null
$.ll=!1
$.a_=C.f
$.aw=[]
$.bk=null
$.l_=null
$.lP=null
$.lO=null
$.d5=P.l7(P.f,P.bC)
$.lX=null
$.m0=null
$.bK=null
$.m5=null
$.mi=null
$.ml=null
$.mk=null
$.j8=null
$.j9=null
$.ja=null
$.mj=null
$.mo=null
$.m_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pR","n2",function(){return H.mQ("_$dart_dartClosure")})
u($,"pS","lA",function(){return H.mQ("_$dart_js")})
u($,"pY","n3",function(){return H.be(H.iM({
toString:function(){return"$receiver$"}}))})
u($,"pZ","n4",function(){return H.be(H.iM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q_","n5",function(){return H.be(H.iM(null))})
u($,"q0","n6",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q3","n9",function(){return H.be(H.iM(void 0))})
u($,"q4","na",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q2","n8",function(){return H.be(H.mc(null))})
u($,"q1","n7",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q6","nc",function(){return H.be(H.mc(void 0))})
u($,"q5","nb",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qm","lB",function(){return P.oq()})
u($,"q8","nd",function(){return P.om()})
u($,"qn","nh",function(){return H.nW(H.ci(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qp","nj",function(){return P.o9("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qq","nk",function(){return P.oP()})
u($,"qo","ni",function(){return P.lR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qf","ng",function(){return Z.aM(0)})
u($,"q9","ne",function(){return Z.aM(511)})
u($,"qh","bv",function(){return Z.aM(1)})
u($,"qg","bu",function(){return Z.aM(2)})
u($,"qb","bt",function(){return Z.aM(4)})
u($,"qi","bU",function(){return Z.aM(8)})
u($,"qj","bV",function(){return Z.aM(16)})
u($,"qc","dk",function(){return Z.aM(32)})
u($,"qd","dl",function(){return Z.aM(64)})
u($,"qe","nf",function(){return Z.aM(96)})
u($,"qk","ct",function(){return Z.aM(128)})
u($,"qa","bs",function(){return Z.aM(256)})
u($,"pQ","n1",function(){return new V.fR(1e-9)})
u($,"pP","L",function(){return $.n1()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cL,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cM,Float64Array:H.cM,Int16Array:H.hL,Int32Array:H.hM,Int8Array:H.hN,Uint16Array:H.hO,Uint32Array:H.hP,Uint8ClampedArray:H.dU,CanvasPixelArray:H.dU,Uint8Array:H.cN,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fj,HTMLAnchorElement:W.dp,HTMLAreaElement:W.fk,HTMLBaseElement:W.cu,Blob:W.bX,HTMLBodyElement:W.bx,HTMLCanvasElement:W.bY,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cy,CSSUnitValue:W.cy,CSSPerspective:W.fC,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cz,MSStyleCSSProperties:W.cz,CSS2Properties:W.cz,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fE,CSSUnparsedValue:W.fF,DataTransferItemList:W.fI,HTMLDivElement:W.aF,DOMException:W.fJ,ClientRectList:W.dA,DOMRectList:W.dA,DOMRectReadOnly:W.dB,DOMStringList:W.fK,DOMTokenList:W.fL,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aG,FileList:W.cC,FileWriter:W.fV,HTMLFormElement:W.fZ,Gamepad:W.aQ,History:W.h3,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.cF,HTMLInputElement:W.cG,KeyboardEvent:W.b6,Location:W.dL,MediaList:W.hE,MessagePort:W.cJ,MIDIInputMap:W.hF,MIDIOutputMap:W.hH,MimeType:W.aS,MimeTypeArray:W.hJ,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aT,PluginArray:W.hZ,RTCStatsReport:W.i8,HTMLSelectElement:W.ib,SourceBuffer:W.aU,SourceBufferList:W.im,SpeechGrammar:W.aV,SpeechGrammarList:W.io,SpeechRecognitionResult:W.aW,Storage:W.ir,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.e5,HTMLTableRowElement:W.iy,HTMLTableSectionElement:W.iz,HTMLTemplateElement:W.cV,TextTrack:W.aX,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iB,TextTrackList:W.iC,TimeRanges:W.iE,Touch:W.aY,TouchEvent:W.aZ,TouchList:W.iI,TrackDefaultList:W.iJ,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.j4,VideoTrackList:W.jm,WheelEvent:W.bf,Window:W.d2,DOMWindow:W.d2,Attr:W.d3,CSSRuleList:W.jw,ClientRect:W.em,DOMRect:W.em,GamepadList:W.jL,NamedNodeMap:W.eE,MozNamedAttrMap:W.eE,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k2,SVGLength:P.b7,SVGLengthList:P.hd,SVGNumber:P.b9,SVGNumberList:P.hU,SVGPointList:P.i0,SVGScriptElement:P.cQ,SVGStringList:P.ix,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bd,SVGTransformList:P.iK,AudioBuffer:P.fo,AudioParamMap:P.fp,AudioTrackList:P.fr,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.hV,WebGLBuffer:P.dr,WebGLProgram:P.dZ,WebGL2RenderingContext:P.c9,WebGLShader:P.e1,WebGLUniformLocation:P.ec,SQLResultSetRowList:P.ip})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mU,[])
else N.mU([])})})()
//# sourceMappingURL=test.dart.js.map
