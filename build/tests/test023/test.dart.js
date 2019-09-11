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
a[c]=function(){a[c]=function(){H.pS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lb:function lb(){},
kF:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hb:function(){return new P.c8("No element")},
nN:function(){return new P.c8("Too many elements")},
nM:function(){return new P.c8("Too few elements")},
e5:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oh(a,b,c,d,e)
else H.og(a,b,c,d,e)},
oh:function(a,b,c,d,e){var u,t,s,r,q
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
og:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.a5(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a5(a3+a4,2)
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
if(J.S(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.P()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aj()
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
if(typeof a1!=="number")return a1.aj()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aj()
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
H.e5(a2,a3,h-2,a5,a6)
H.e5(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.S(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.S(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
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
break}}}H.e5(a2,h,g,a5,a6)}else H.e5(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
fS:function fS(){},
c2:function c2(){},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
ju:function ju(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d1:function d1(){},
eh:function eh(){},
nD:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pz:function(a){return v.types[H.a3(a)]},
pG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iL},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.ar(a))
return u},
cQ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o8:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
c4:function(a){return H.o_(a)+H.lt(H.bR(a),0,null)},
o_:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibM){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.b.D(t,0)===36?C.b.a6(t,1):t)},
o0:function(){if(!!self.location)return self.location.href
return},
m4:function(a){var u,t,s,r,q
H.kL(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o9:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aM(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.ar(s))}return H.m4(r)},
m5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<0)throw H.c(H.ar(s))
if(s>65535)return H.o9(a)}return H.m4(a)},
oa:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aM(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o7:function(a){var u=H.c3(a).getFullYear()+0
return u},
o5:function(a){var u=H.c3(a).getMonth()+1
return u},
o1:function(a){var u=H.c3(a).getDate()+0
return u},
o2:function(a){var u=H.c3(a).getHours()+0
return u},
o4:function(a){var u=H.c3(a).getMinutes()+0
return u},
o6:function(a){var u=H.c3(a).getSeconds()+0
return u},
o3:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.ar(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.c(H.cl(a,b))},
cl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,s,null)
u=H.a3(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.e1(b,s)},
pt:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end",u)
return new P.aP(!0,b,"end",null)},
ar:function(a){return new P.aP(!0,a,null,null)},
po:function(a){if(typeof a!=="number")throw H.c(H.ar(a))
return a},
c:function(a){var u
if(a==null)a=new P.dY()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n1})
u.name=""}else u.toString=H.n1
return u},
n1:function(){return J.at(this.dartException)},
z:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bj(a))},
be:function(a){var u,t,s,r,q,p
a=H.n0(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
me:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m0:function(a,b){return new H.hW(a,b==null?null:b.method)},
lc:function(a,b){var u=b==null,t=u?null:b.method
return new H.he(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lc(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m0(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n5()
q=$.n6()
p=$.n7()
o=$.n8()
n=$.nb()
m=$.nc()
l=$.na()
$.n9()
k=$.ne()
j=$.nd()
i=r.aa(u)
if(i!=null)return f.$1(H.lc(H.J(u),i))
else{i=q.aa(u)
if(i!=null){i.method="call"
return f.$1(H.lc(H.J(u),i))}else{i=p.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=n.aa(u)
if(i==null){i=m.aa(u)
if(i==null){i=l.aa(u)
if(i==null){i=o.aa(u)
if(i==null){i=k.aa(u)
if(i==null){i=j.aa(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m0(H.J(u),i))}}return f.$1(new H.j3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e7()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aP(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e7()
return a},
cp:function(a){var u
if(a==null)return new H.eV(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eV(a)},
px:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pF:function(a,b,c,d,e,f){H.h(a,"$ibD")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pF)
a.$identity=u
return u},
nC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.it().constructor.prototype):Object.create(new H.cu(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b1
if(typeof t!=="number")return t.p()
$.b1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lQ(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pz,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lP:H.l3
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lQ(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nz:function(a,b,c,d){var u=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nz(t,!r,u,b)
if(t===0){r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fz("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b1
if(typeof r!=="number")return r.p()
$.b1=r+1
o+=r
r="return function("+o+"){return this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fz("self"):q)+"."+H.i(u)+"("+o+");}")()},
nA:function(a,b,c,d){var u=H.l3,t=H.lP
switch(b?-1:a){case 0:throw H.c(H.oe("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nB:function(a,b){var u,t,s,r,q,p,o,n=$.cv
if(n==null)n=$.cv=H.fz("self")
u=$.lO
if(u==null)u=$.lO=H.fz("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nA(s,!q,t,b)
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
lx:function(a,b,c,d,e,f,g){return H.nC(a,b,H.a3(c),d,!!e,!!f,g)},
l3:function(a){return a.a},
lP:function(a){return a.c},
fz:function(a){var u,t,s,r=new H.cu("self","target","receiver","name"),q=J.l9(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.pk("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b_(a,"String"))},
pu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"num"))},
lu:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b_(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b_(a,"int"))},
mZ:function(a,b){throw H.c(H.b_(a,H.cr(H.J(b).substring(2))))},
pM:function(a,b){throw H.c(H.ny(a,H.cr(H.J(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.mZ(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.pM(a,b)},
kL:function(a){if(a==null)return a
if(!!J.Q(a).$ib)return a
throw H.c(H.b_(a,"List<dynamic>"))},
mV:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.mZ(a,b)},
mP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
fj:function(a,b){var u
if(typeof a=="function")return!0
u=H.mP(J.Q(a))
if(u==null)return!1
return H.mB(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lq)return a
$.lq=!0
try{if(H.fj(a,b))return a
u=H.kU(b)
t=H.b_(a,u)
throw H.c(t)}finally{$.lq=!1}},
lz:function(a,b){if(a!=null&&!H.lw(a,b))H.z(H.b_(a,H.kU(b)))
return a},
b_:function(a,b){return new H.iT("TypeError: "+P.dE(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
ny:function(a,b){return new H.fA("CastError: "+P.dE(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t=J.Q(a)
if(!!t.$icx){u=H.mP(t)
if(u!=null)return H.kU(u)
return"Closure"}return H.c4(a)},
pk:function(a){throw H.c(new H.jv(a))},
pS:function(a){throw H.c(new P.fK(H.J(a)))},
oe:function(a){return new H.id(a)},
mS:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
qB:function(a,b,c){return H.cq(a["$a"+H.i(c)],H.bR(b))},
bQ:function(a,b,c,d){var u
H.J(c)
H.a3(d)
u=H.cq(a["$a"+H.i(c)],H.bR(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.J(b)
H.a3(c)
u=H.cq(a["$a"+H.i(b)],H.bR(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a3(b)
u=H.bR(a)
return u==null?null:u[b]},
kU:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.lt(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.N)p+=" extends "+H.bP(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bP(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bP(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bP(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pw(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bP(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lt:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lv:function(a,b,c,d){var u,t
H.J(b)
H.kL(c)
H.J(d)
if(a==null)return!1
u=H.bR(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.mK(H.cq(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.kL(c)
H.J(d)
if(a==null)return a
if(H.lv(a,b,c,d))return a
throw H.c(H.b_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.lt(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qz:function(a,b,c){return a.apply(b,H.cq(J.Q(b)["$a"+H.i(c)],H.bR(b)))},
mU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="M"||a===-1||a===-2||H.mU(u)}return!1},
lw:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="M"||b===-1||b===-2||H.mU(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fj(a,b)}u=J.Q(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lw(a,b))throw H.c(H.b_(a,H.kU(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.mB(a,b,c,d)
if('func' in a)return c.name==="bD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aO("type" in a?a.type:l,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cD" in t.prototype))return!1
r=t.prototype["$a"+"cD"]
q=H.cq(r,u?a.slice(1):l)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mK(H.cq(m,u),b,p,d)},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pK(h,b,g,d)},
pK:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aO(c[s],d,a[s],b))return!1}return!0},
qA:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pI:function(a){var u,t,s,r,q=H.J($.mT.$1(a)),p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mJ.$2(a,q))
if(q!=null){p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kJ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kT(u)
$.kE[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kJ[q]=u
return u}if(s==="-"){r=H.kT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mY(a,u)
if(s==="*")throw H.c(P.j2(q))
if(v.leafTags[q]===true){r=H.kT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mY(a,u)},
mY:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kT:function(a){return J.lB(a,!1,null,!!a.$iL)},
pJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kT(u)
else return J.lB(u,c,null,null)},
pD:function(){if(!0===$.lA)return
$.lA=!0
H.pE()},
pE:function(){var u,t,s,r,q,p,o,n
$.kE=Object.create(null)
$.kJ=Object.create(null)
H.pC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n_.$1(q)
if(p!=null){o=H.pJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pC:function(){var u,t,s,r,q,p,o=C.G()
o=H.cj(C.H,H.cj(C.I,H.cj(C.v,H.cj(C.v,H.cj(C.J,H.cj(C.K,H.cj(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mT=new H.kG(r)
$.mJ=new H.kH(q)
$.n_=new H.kI(p)},
cj:function(a,b){return a(b)||b},
nP:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pv:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lE:function(a,b,c){var u=H.pR(a,b,c)
return u},
pR:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n0(b),'g'),H.pv(c))},
fE:function fE(){},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iR:function iR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(a,b){this.a=a
this.b=b},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
l_:function l_(a){this.a=a},
eV:function eV(a){this.a=a
this.b=null},
cx:function cx(){},
iD:function iD(){},
it:function it(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a){this.a=a},
fA:function fA(a){this.a=a},
id:function id(a){this.a=a},
jv:function jv(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hj:function hj(a,b){this.a=a
this.$ti=b},
hk:function hk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
nY:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cl(b,a))},
oS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pt(a,b,c))
return b},
cL:function cL(){},
bI:function bI(){},
dU:function dU(){},
cM:function cM(){},
dV:function dV(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
dW:function dW(){},
cN:function cN(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
pw:function(a){return J.lW(a?Object.keys(a):[],null)},
pL:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fl:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lA==null){H.pD()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j2("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lG()]
if(r!=null)return r
r=H.pI(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lG(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lW(new Array(a),b)},
lW:function(a,b){return J.l9(H.d(a,[b]))},
l9:function(a){H.kL(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dH.prototype
return J.dG.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.dI.prototype
if(typeof a=="boolean")return J.hc.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.N)return a
return J.fl(a)},
py:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.N)return a
return J.fl(a)},
cn:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.N)return a
return J.fl(a)},
fk:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.N)return a
return J.fl(a)},
mQ:function(a){if(typeof a=="number")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bM.prototype
return a},
mR:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bM.prototype
return a},
dl:function(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bM.prototype
return a},
co:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.N)return a
return J.fl(a)},
nn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.py(a).p(a,b)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).q(a,b)},
b0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mQ(a).aj(a,b)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mR(a).C(a,b)},
no:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mQ(a).t(a,b)},
dp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cn(a).j(a,b)},
l0:function(a,b,c){return J.fk(a).k(a,b,c)},
np:function(a,b){return J.dl(a).D(a,b)},
nq:function(a,b,c){return J.co(a).hr(a,b,c)},
nr:function(a,b,c,d){return J.co(a).hW(a,b,c,d)},
ns:function(a,b){return J.dl(a).W(a,b)},
l1:function(a,b){return J.mR(a).ic(a,b)},
fn:function(a,b){return J.fk(a).I(a,b)},
nt:function(a,b,c,d){return J.co(a).iu(a,b,c,d)},
lJ:function(a,b){return J.fk(a).G(a,b)},
nu:function(a){return J.co(a).gi7(a)},
lK:function(a){return J.co(a).gc0(a)},
dq:function(a){return J.Q(a).gH(a)},
bw:function(a){return J.fk(a).gT(a)},
aC:function(a){return J.cn(a).gn(a)},
lL:function(a){return J.fk(a).j1(a)},
nv:function(a,b){return J.co(a).j5(a,b)},
nw:function(a,b,c){return J.dl(a).w(a,b,c)},
nx:function(a){return J.dl(a).jf(a)},
at:function(a){return J.Q(a).i(a)},
a:function a(){},
hc:function hc(){},
dI:function dI(){},
dJ:function dJ(){},
i_:function i_(){},
bM:function bM(){},
bn:function bn(){},
aR:function aR(a){this.$ti=a},
la:function la(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bF:function bF(){},
dH:function dH(){},
dG:function dG(){},
bm:function bm(){}},P={
ou:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pl()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ck(new P.jx(s),1)).observe(u,{childList:true})
return new P.jw(s,u,t)}else if(self.setImmediate!=null)return P.pm()
return P.pn()},
ov:function(a){self.scheduleImmediate(H.ck(new P.jy(H.n(a,{func:1,ret:-1})),0))},
ow:function(a){self.setImmediate(H.ck(new P.jz(H.n(a,{func:1,ret:-1})),0))},
ox:function(a){P.lh(C.o,H.n(a,{func:1,ret:-1}))},
lh:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a5(a.a,1000)
return P.oD(u<0?0:u,b)},
md:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bc]})
u=C.e.a5(a.a,1000)
return P.oE(u<0?0:u,b)},
oD:function(a,b){var u=new P.f0()
u.eK(a,b)
return u},
oE:function(a,b){var u=new P.f0()
u.eL(a,b)
return u},
oy:function(a,b){var u,t,s
b.a=1
try{a.e9(new P.jJ(b),new P.jK(b),null)}catch(s){u=H.aj(s)
t=H.cp(s)
P.pN(new P.jL(b,u,t))}},
mq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaN")
if(u>=4){t=b.bN()
b.a=a.a
b.c=a.c
P.d6(b,t)}else{t=H.h(b.c,"$ibg")
b.a=2
b.c=a
a.d5(t)}},
d6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kv(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d6(h.a,b)}g=h.a
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
P.kv(i,i,g,r,q)
return}l=$.a0
if(l!=n)$.a0=n
else l=i
g=b.c
if(g===8)new P.jP(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jO(u,b,o).$0()}else if((g&2)!==0)new P.jN(h,u,b).$0()
if(l!=null)$.a0=l
g=u.b
if(!!J.Q(g).$icD){if(g.a>=4){k=H.h(q.c,"$ibg")
q.c=null
b=q.bg(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mq(g,q)
return}}j=b.b
k=H.h(j.c,"$ibg")
j.c=null
b=j.bg(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
pg:function(a,b){if(H.fj(a,{func:1,args:[P.N,P.av]}))return H.n(a,{func:1,ret:null,args:[P.N,P.av]})
if(H.fj(a,{func:1,args:[P.N]}))return H.n(a,{func:1,ret:null,args:[P.N]})
throw H.c(P.l2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pf:function(){var u,t
for(;u=$.ci,u!=null;){$.dk=null
t=u.b
$.ci=t
if(t==null)$.dj=null
u.a.$0()}},
pj:function(){$.lr=!0
try{P.pf()}finally{$.dk=null
$.lr=!1
if($.ci!=null)$.lH().$1(P.mL())}},
mG:function(a){var u=new P.en(H.n(a,{func:1,ret:-1}))
if($.ci==null){$.ci=$.dj=u
if(!$.lr)$.lH().$1(P.mL())}else $.dj=$.dj.b=u},
pi:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ci
if(u==null){P.mG(a)
$.dk=$.dj
return}t=new P.en(a)
s=$.dk
if(s==null){t.b=u
$.ci=$.dk=t}else{t.b=s.b
$.dk=s.b=t
if(t.b==null)$.dj=t}},
pN:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a0
if(C.f===u){P.kx(t,t,C.f,a)
return}u.toString
P.kx(t,t,u,H.n(u.bW(a),s))},
mc:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a0
if(u===C.f){u.toString
return P.lh(a,b)}return P.lh(a,H.n(u.bW(b),t))},
ok:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bc]}
H.n(b,s)
u=$.a0
if(u===C.f){u.toString
return P.md(a,b)}t=u.dm(b,P.bc)
$.a0.toString
return P.md(a,H.n(t,s))},
kv:function(a,b,c,d,e){var u={}
u.a=d
P.pi(new P.kw(u,e))},
mC:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mD:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
ph:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kx:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bW(d):c.i8(d,-1)
P.mG(d)},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
f0:function f0(){this.c=0},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
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
jI:function jI(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jQ:function jQ(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a
this.b=null},
iw:function iw(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
cU:function cU(){},
ix:function ix(){},
bc:function bc(){},
am:function am(a,b){this.a=a
this.b=b},
km:function km(){},
kw:function kw(a,b){this.a=a
this.b=b},
jW:function jW(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
nR:function(a,b){return new H.a1([a,b])},
ld:function(a,b){return new H.a1([a,b])},
nT:function(a){return H.px(a,new H.a1([null,null]))},
dM:function(a){return new P.jU([a])},
ln:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oC:function(a,b,c){var u=new P.eC(a,b,[c])
u.c=a.e
return u},
nL:function(a,b,c){var u,t
if(P.ls(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aw,a)
try{P.oV(a,u)}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=P.ma(b,H.mV(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l8:function(a,b,c){var u,t
if(P.ls(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.aw,a)
try{t=u
t.a=P.ma(t.a,a,", ")}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ls:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oV:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.i(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.B();o=n,n=m){m=u.gJ(u);++s
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
nS:function(a,b,c){var u=P.nR(b,c)
a.G(0,new P.hl(u,b,c))
return u},
lX:function(a,b){var u,t,s=P.dM(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.B(a[t],b))
return s},
le:function(a){var u,t={}
if(P.ls(a))return"{...}"
u=new P.ag("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lJ(a,new P.hp(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jU:function jU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cf:function cf(a){this.a=a
this.c=this.b=null},
eC:function eC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
x:function x(){},
ho:function ho(){},
hp:function hp(a,b){this.a=a
this.b=b},
ad:function ad(){},
ke:function ke(){},
hq:function hq(){},
ei:function ei(a,b){this.a=a
this.$ti=b},
k0:function k0(){},
eD:function eD(){},
f6:function f6(){},
oo:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.op(!1,b,c,d)
return},
op:function(a,b,c,d){var u,t,s=$.nf()
if(s==null)return
u=0===c
if(u&&!0)return P.lk(s,b)
t=b.length
d=P.bq(c,d,t)
if(u&&d===t)return P.lk(s,b)
return P.lk(s,b.subarray(c,d))},
lk:function(a,b){if(P.or(b))return
return P.os(a,b)},
os:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
or:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mF:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cn(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ad()
if((s&127)!==s)return t-b}return c-b},
lN:function(a,b,c,d,e,f){if(C.e.b9(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fw:function fw(){},
fx:function fx(){},
bX:function bX(){},
bA:function bA(){},
fU:function fU(){},
h9:function h9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h8:function h8(a){this.a=a},
jb:function jb(){},
jd:function jd(){},
kk:function kk(a){this.b=0
this.c=a},
jc:function jc(a){this.a=a},
kj:function kj(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fm:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.o8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nI:function(a){if(a instanceof H.cx)return a.i(0)
return"Instance of '"+H.c4(a)+"'"},
nU:function(a,b,c){var u,t
H.B(b,c)
u=J.nO(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
lY:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bw(a);u.B();)C.a.h(s,H.B(u.gJ(u),c))
if(b)return s
return H.l(J.l9(s),"$ib",t,"$ab")},
cV:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaR",[t],"$aaR")
u=a.length
c=P.bq(b,c,u)
return H.m5(b>0||c<u?C.a.en(a,b,c):a)}if(!!J.Q(a).$icN)return H.oa(a,b,P.bq(b,c,a.length))
return P.oi(a,b,c)},
oi:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.c(P.af(b,0,J.aC(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aC(a),q,q))
t=J.bw(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.af(c,b,s,q,q))
r.push(t.gJ(t))}return H.m5(r)},
oc:function(a){return new H.hd(a,H.nP(a,!1,!0,!1))},
ma:function(a,b,c){var u=J.bw(b)
if(!u.B())return a
if(c.length===0){do a+=H.i(u.gJ(u))
while(u.B())}else{a+=H.i(u.gJ(u))
for(;u.B();)a=a+c+H.i(u.gJ(u))}return a},
mg:function(){var u=H.o0()
if(u!=null)return P.on(u)
throw H.c(P.H("'Uri.base' is not supported"))},
f7:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nl().b
if(typeof b!=="string")H.z(H.ar(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.as(c,"bX",0))
t=c.git().c1(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
lS:function(a,b){return new P.b4(1e6*b+1000*a)},
dE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nI(a)},
ds:function(a){return new P.aP(!1,null,null,a)},
l2:function(a,b,c){return new P.aP(!0,a,b,c)},
e1:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
lf:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.a3(e==null?J.aC(b):e)
return new P.ha(u,!0,a,c,"Index out of range")},
H:function(a){return new P.j4(a)},
j2:function(a){return new P.j1(a)},
m9:function(a){return new P.c8(a)},
bj:function(a){return new P.fD(a)},
C:function(a){return new P.ev(a)},
a7:function(a,b,c){return new P.h3(a,b,c)},
nV:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lD:function(a){H.pL(a)},
on:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mf(e<e?C.b.w(a,0,e):a,5,f).gef()
else if(u===32)return P.mf(C.b.w(a,5,e),0,f).gef()}t=new Array(8)
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
if(P.mE(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jm()
if(r>=0)if(P.mE(a,0,r,20,s)===20)s[7]=r
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a7(a,"..",o)))j=n>o+2&&C.b.a7(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a7(a,"file",0)){if(q<=0){if(!C.b.a7(a,"/",o)){i="file:///"
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
a=C.b.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a7(a,"http",0)){if(t&&p+3===o&&C.b.a7(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a7(a,"https",0)){if(t&&p+4===o&&C.b.a7(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.w(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k3(a,r,q,p,o,n,m,k)}return P.oF(a,0,e,r,q,p,o,n,m,k)},
mi:function(a){var u=P.f
return C.a.iy(H.d(a.split("&"),[u]),P.ld(u,u),new P.j9(C.h),[P.y,P.f,P.f])},
om:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j6(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fm(C.b.w(a,s,t),n,n)
if(typeof p!=="number")return p.aj()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fm(C.b.w(a,s,c),n,n)
if(typeof p!=="number")return p.aj()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j7(a)
t=new P.j8(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gas(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.om(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aM(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oM(a,b,d)
else{if(d===b)P.dg(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oN(a,u,e-1):""
s=P.oJ(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oL(P.fm(C.b.w(a,r,g),new P.kf(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oK(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lo(a,h+1,i,n):n
return new P.cg(j,t,s,q,p,o,i<c?P.oI(a,i+1,c):n)},
mu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dg:function(a,b,c){throw H.c(P.a7(c,a,b))},
oL:function(a,b){if(a!=null&&a===P.mu(b))return
return a},
oJ:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.W(a,u)!==93)P.dg(a,b,"Missing end `]` to match `[` in host")
P.mh(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.mh(a,b,c)
return"["+a+"]"}return P.oP(a,b,c)},
oP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.mA(a,u,!0)
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
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dg(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mv(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oM:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mx(C.b.D(a,b)))P.dg(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dg(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.oG(t?a.toLowerCase():a)},
oG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oN:function(a,b,c){return P.dh(a,b,c,C.W,!1)},
oK:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dh(a,b,c,C.A,!0):C.j.jG(d,new P.kg(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a1(u,"/"))u="/"+u
return P.oO(u,e,f)},
oO:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a1(a,"/"))return P.oQ(a,!u||c)
return P.oR(a)},
lo:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.f,null],"$ay")
if(a!=null){if(d!=null)throw H.c(P.ds("Both query and queryParameters specified"))
return P.dh(a,b,c,C.l,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.G(0,new P.kh(new P.ki(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oI:function(a,b,c){return P.dh(a,b,c,C.l,!0)},
mA:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kF(u)
r=H.kF(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aM(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
mv:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.hF(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cV(t,0,null)},
dh:function(a,b,c,d,e){var u=P.mz(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.w(a,b,c):u},
mz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
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
else{if(q===37){o=P.mA(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dg(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mv(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.w(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.P()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
my:function(a){if(C.b.a1(a,"."))return!0
return C.b.dK(a,"/.")!==-1},
oR:function(a){var u,t,s,r,q,p,o
if(!P.my(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.S(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oQ:function(a,b){var u,t,s,r,q,p
if(!P.my(a))return!b?P.mw(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gas(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gas(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mw(u[0]))}return C.a.m(u,"/")},
mw:function(a){var u,t,s,r=a.length
if(r>=2&&P.mx(J.np(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.w(a,0,u)+"%3A"+C.b.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oH:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ds("Invalid URL encoding"))}}return u},
lp:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.w(a,b,c)
else r=new H.t(C.b.w(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.ds("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.ds("Truncated URI"))
C.a.h(r,P.oH(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jc(!1).c1(r)},
mx:function(a){var u=a|32
return 97<=u&&u<=122},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gas(l)
if(r!==44||t!==p+7||!C.b.a7(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iL(0,a,o,u)
else{n=P.mz(a,o,u,C.l,!0)
if(n!=null)a=C.b.aR(a,o,u,n)}return new P.j5(a,l,c)},
oT:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nV(22,new P.kq(),P.O),n=new P.kp(o),m=new P.kr(),l=new P.ks(),k=H.h(n.$2(0,225),"$iO")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iO")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iO")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iO")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iO")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iO")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iO")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iO")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iO")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iO"),"]",5)
k=H.h(n.$2(9,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iO")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iO")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iO"),"az",21)
k=H.h(n.$2(21,245),"$iO")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mE:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nm()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.D(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
P:function P(){},
ay:function ay(a,b){this.a=a
this.b=b},
q:function q(){},
b4:function b4(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
bC:function bC(){},
fq:function fq(){},
dY:function dY(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j4:function j4(a){this.a=a},
j1:function j1(a){this.a=a},
c8:function c8(a){this.a=a},
fD:function fD(a){this.a=a},
hZ:function hZ(){},
e7:function e7(){},
fK:function fK(a){this.a=a},
ev:function ev(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
m:function m(){},
j:function j(){},
b5:function b5(){},
b:function b(){},
y:function y(){},
M:function M(){},
ab:function ab(){},
N:function N(){},
av:function av(){},
f:function f(){},
ag:function ag(a){this.a=a},
j9:function j9(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b){this.a=a
this.b=b},
cg:function cg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(){},
kp:function kp(a){this.a=a},
kr:function kr(){},
ks:function ks(){},
k3:function k3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jD:function jD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pr:function(a){var u,t=J.Q(a)
if(!!t.$ibl){u=t.gds(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f5(a.data,a.height,a.width)},
pq:function(a){if(a instanceof P.f5)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.ld(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.J(t[r])
u.k(0,q,a[q])}return u},
pp:function(a){var u={}
a.G(0,new P.ky(u))
return u},
k5:function k5(){},
k7:function k7(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
k6:function k6(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(){},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jV:function jV(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
hg:function hg(){},
b9:function b9(){},
hX:function hX(){},
i3:function i3(){},
cR:function cR(){},
iA:function iA(){},
p:function p(){},
bd:function bd(){},
iQ:function iQ(){},
eA:function eA(){},
eB:function eB(){},
eL:function eL(){},
eM:function eM(){},
eX:function eX(){},
eY:function eY(){},
f3:function f3(){},
f4:function f4(){},
O:function O(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
bU:function bU(){},
hY:function hY(){},
eo:function eo(){},
du:function du(){},
e0:function e0(){},
c7:function c7(){},
e3:function e3(){},
ea:function ea(){},
eg:function eg(){},
is:function is(){},
eT:function eT(){},
eU:function eU(){}},W={
lM:function(){var u=document.createElement("a")
return u},
l4:function(){var u=document.createElement("canvas")
return u},
nG:function(a,b,c){var u=document.body,t=(u&&C.t).a9(u,a,b,c)
t.toString
u=W.E
u=new H.d3(new W.aq(t),H.n(new W.fT(),{func:1,ret:P.P,args:[u]}),[u])
return H.h(u.gaG(u),"$iT")},
nH:function(a){H.h(a,"$ik")
return"wheel"},
cA:function(a){var u,t,s,r="element tag unavailable"
try{u=J.co(a)
t=u.ge6(a)
if(typeof t==="string")r=u.ge6(a)}catch(s){H.aj(s)}return r},
nK:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icG")
try{s.type=a}catch(u){H.aj(u)}return s},
jS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u=W.jS(W.jS(W.jS(W.jS(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mI(new W.jH(c),W.o)
if(u!=null&&!0)J.nr(a,b,u,!1)
return new W.jG(a,b,u,!1,[e])},
mr:function(a){var u=W.lM(),t=window.location
u=new W.bO(new W.k_(u,t))
u.eC(a)
return u},
oz:function(a,b,c,d){H.h(a,"$iT")
H.J(b)
H.J(c)
H.h(d,"$ibO")
return!0},
oA:function(a,b,c,d){var u,t,s
H.h(a,"$iT")
H.J(b)
H.J(c)
u=H.h(d,"$ibO").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mt:function(){var u=P.f,t=P.lX(C.p,u),s=H.r(C.p,0),r=H.n(new W.kb(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.ka(t,P.dM(u),P.dM(u),P.dM(u),null)
t.eH(null,new H.ht(C.p,r,[s,u]),q,null)
return t},
mI:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.f)return a
return u.dm(a,b)},
w:function w(){},
fo:function fo(){},
dr:function dr(){},
fp:function fp(){},
ct:function ct(){},
bV:function bV(){},
bx:function bx(){},
bW:function bW(){},
cw:function cw(){},
by:function by(){},
cy:function cy(){},
fG:function fG(){},
V:function V(){},
cz:function cz(){},
fH:function fH(){},
b2:function b2(){},
b3:function b3(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
aF:function aF(){},
fN:function fN(){},
dB:function dB(){},
dC:function dC(){},
fO:function fO(){},
fP:function fP(){},
jB:function jB(a,b){this.a=a
this.b=b},
T:function T(){},
fT:function fT(){},
o:function o(){},
k:function k(){},
aG:function aG(){},
cC:function cC(){},
fZ:function fZ(){},
h2:function h2(){},
aQ:function aQ(){},
h7:function h7(){},
c_:function c_(){},
bl:function bl(){},
cF:function cF(){},
cG:function cG(){},
b6:function b6(){},
dN:function dN(){},
hH:function hH(){},
cJ:function cJ(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(){},
hL:function hL(a){this.a=a},
aS:function aS(){},
hM:function hM(){},
ae:function ae(){},
aq:function aq(a){this.a=a},
E:function E(){},
cO:function cO(){},
aT:function aT(){},
i1:function i1(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
ie:function ie(){},
aU:function aU(){},
iq:function iq(){},
aV:function aV(){},
ir:function ir(){},
aW:function aW(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
aJ:function aJ(){},
bb:function bb(){},
e8:function e8(){},
iB:function iB(){},
iC:function iC(){},
cW:function cW(){},
aX:function aX(){},
aK:function aK(){},
iE:function iE(){},
iF:function iF(){},
iK:function iK(){},
aY:function aY(){},
aZ:function aZ(){},
iO:function iO(){},
iP:function iP(){},
bL:function bL(){},
ja:function ja(){},
js:function js(){},
bf:function bf(){},
d4:function d4(){},
d5:function d5(){},
jC:function jC(){},
eq:function eq(){},
jR:function jR(){},
eI:function eI(){},
k4:function k4(){},
k8:function k8(){},
jA:function jA(){},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jH:function jH(a){this.a=a},
bO:function bO(a){this.a=a},
F:function F(){},
dX:function dX(a){this.a=a},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(){},
k1:function k1(){},
k2:function k2(){},
ka:function ka(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kb:function kb(){},
k9:function k9(){},
dF:function dF(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
k_:function k_(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
kl:function kl(a){this.a=a},
ep:function ep(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
dc:function dc(){},
dd:function dd(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
de:function de(){},
df:function df(){},
f1:function f1(){},
f2:function f2(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){}},O={
l5:function(a){var u=new O.a6([a])
u.bx(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cI:function cI(){this.b=this.a=null},
dQ:function dQ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
hv:function hv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dR:function dR(){},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(){var _=this
_.e=_.d=_.c=_.b=null},
hz:function hz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c9:function c9(){}},E={
lV:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seB(0,O.l5(E.ao))
u.y.ba(u.giM(),u.giP())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sae(0,null)
u.sb4(null)
return u},
od:function(a,b){var u=new E.i7(a)
u.ew(a,b)
return u},
oj:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibW)return E.mb(a,!0,!0,!0,!1)
u=W.l4()
t=u.style
t.width="100%"
t.height="100%"
s.gc0(a).h(0,u)
return E.mb(u,!0,!0,!0,!1)},
mb:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ec(),j=H.h(C.i.cu(a,"webgl2",P.nT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(j==null)H.z(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.od(j,a)
u=new T.iH(j)
u.b=H.a3(j.getParameter(3379))
H.a3(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ej(a)
t=new X.hf()
t.shl(P.dM(P.m))
u.b=t
t=new X.hN(u)
t.f=0
t.r=V.bK()
t.x=V.bK()
t.ch=t.Q=1
u.c=t
t=new X.hn(u)
t.r=0
t.x=V.bK()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iN(u)
t.f=V.bK()
t.r=V.bK()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf4(H.d([],[[P.cU,P.N]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfI(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gfO(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfB(),o),!1,p))
t=u.z
n=W.b6
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gfS(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gfQ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gfW(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.gh_(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.gfY(),q),!1,r))
n=u.z
m=W.bf;(n&&C.a).h(n,W.aa(a,H.J(W.nH(a)),H.n(u.gh1(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfK(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gfM(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.gh3(),o),!1,p))
p=u.z
o=W.aZ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghg(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghc(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghe(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.d7()
return k},
fy:function fy(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ec:function ec(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iJ:function iJ(a){this.a=a}},Z={
ll:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.em(b,u)},
aM:function(a){return new Z.bN(a)},
em:function em(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jt:function jt(a){this.a=a},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a){this.a=a}},D={
X:function(){var u=new D.bY()
u.saf(null)
u.saK(null)
u.c=null
u.d=0
return u},
fB:function fB(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
D:function D(){this.b=null},
c0:function c0(a){this.b=null
this.$ti=a},
c1:function c1(a){this.b=null
this.$ti=a},
U:function U(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bB:function bB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dL:function dL(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e_:function e_(){},
e6:function e6(){}},X={dx:function dx(a,b){this.a=a
this.b=b},dK:function dK(a,b){this.a=a
this.b=b},hf:function hf(){this.d=this.b=this.a=null},dO:function dO(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},bH:function bH(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hN:function hN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i2:function i2(){},ee:function ee(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iN:function iN(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ej:function ej(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nJ:function(a){var u=new X.h4(),t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m7
if(t==null){t=V.m6(0,0,1,1)
$.m7=t}u.r=t
return u},
dy:function dy(){},
h4:function h4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){}},V={
pT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.b9(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.b.ab("null",c)
return C.b.ab(C.c.ea(Math.abs(a-0)<$.R().a?0:a,b),c+b+1)},
cm:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.q],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ab(u[p],s))}return u},
lC:function(a){return C.c.jc(Math.pow(2,C.S.cc(Math.log(H.po(a))/Math.log(2))))},
dT:function(){var u=$.m_
return u==null?$.m_=V.bp(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bp:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bp(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bK:function(){var u=$.m3
return u==null?$.m3=new V.a9(0,0):u},
nZ:function(){var u=$.cP
return u==null?$.cP=new V.a5(0,0,0):u},
m6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e2(a,b,c,d)},
d2:function(){var u=$.mn
return u==null?$.mn=new V.K(0,0,0):u},
ot:function(){var u=$.je
return u==null?$.je=new V.K(-1,0,0):u},
mo:function(){var u=$.jf
return u==null?$.jf=new V.K(0,1,0):u},
mp:function(){var u=$.jg
return u==null?$.jg=new V.K(0,0,1):u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a){this.a=a},
dS:function dS(a,b,c,d,e,f,g,h,i){var _=this
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
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.i6()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.ig()
u.ex(a)
return u},
iM:function(){var u=new V.iL(),t=P.f
u.shI(new H.a1([t,V.cT]))
u.shL(new H.a1([t,V.cY]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dP:function dP(){},
au:function au(){this.a=null},
i6:function i6(){this.b=this.a=null},
ig:function ig(){this.a=null},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.b=a
this.c=null},
iL:function iL(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null},
pO:function(a){P.ok(C.P,new V.kV(a))},
of:function(a){var u=new V.ik()
u.ez(a,!0)
return u},
bz:function bz(){},
kV:function kV(a){this.a=a},
fL:function fL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h5:function h5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i0:function i0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i4:function i4(a){this.a=a
this.c=null},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(){this.b=this.a=null},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
io:function io(a){this.a=a}},U={
lR:function(){var u=new U.fC()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
l6:function(a){var u=new U.dz()
u.a=a
return u},
mj:function(a,b){var u,t,s,r=new U.ek(),q=U.lR()
q.seh(0,!0)
q.sdO(6.283185307179586)
q.sdQ(0)
q.sa_(0,0)
q.sdP(100)
q.sY(0)
q.sdr(0.5)
r.b=q
u=r.gbd()
q.gA().h(0,u)
q=U.lR()
q.seh(0,!0)
q.sdO(6.283185307179586)
q.sdQ(0)
q.sa_(0,0)
q.sdP(100)
q.sY(0)
q.sdr(0.5)
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
t=new X.bG(a,!1,!1)
s=r.d
r.d=t
q=new D.U("modifiers",s,t,[X.bG])
q.b=!0
r.X(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.U("invertX",q,!1,[P.P])
q.b=!0
r.X(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.U("invertY",q,!1,[P.P])
q.b=!0
r.X(q)}r.i3(b)
return r},
fC:function fC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){this.b=this.a=null},
cE:function cE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
ek:function ek(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dD:function dD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c=V.of("Test 023"),b=W.l4()
b.className="pageLargeCanvas"
b.id=e
c.a.appendChild(b)
u=[P.f]
c.dj(H.d(["Test of the Material Lighting shader with a textured directional ","light. Use Ctrl plus the mouse to move the light."],u))
c.hV(H.d(["shapes"],u))
c.dj(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.z(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.oj(t,!0,!0,!0,!1)
r=U.mj(!1,s.r)
q=U.mj(!0,s.r)
p=new V.a4(0.6,0.9,1)
o=s.f.iI("../resources/Test.png",!0)
n=new D.bB()
n.c=new V.a4(1,1,1)
n.a=V.mp()
n.d=V.mo()
n.e=V.ot()
m=n.b
n.b=q
q.gA().h(0,n.gbK())
l=new D.U("mover",m,n.b,[U.ak])
l.b=!0
n.ao(l)
if(!n.c.q(0,p)){m=n.c
n.c=p
l=new D.U("color",m,p,[V.a4])
l.b=!0
n.ao(l)}l=n.f
if(l!==o){if(l!=null)l.gA().L(0,n.gbK())
m=n.f
n.f=o
o.gA().h(0,n.gbK())
o=new D.U("texture",m,n.f,[T.eb])
o.b=!0
n.ao(o)}k=new O.dQ()
k.seT(O.l5(V.ap))
k.e.ba(k.gfv(),k.gfz())
o=new O.b8(k,"emission")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
k.f=o
o=new O.b8(k,"ambient")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
k.r=o
o=new O.b8(k,"diffuse")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
k.x=o
o=new O.b8(k,"invDiffuse")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
k.y=o
o=new O.hA(k,"specular")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
o.ch=100
k.z=o
o=new O.hw(k,"bump")
o.c=new A.an(!1,!1,!1)
k.Q=o
k.ch=null
o=new O.b8(k,"reflect")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
k.cx=o
o=new O.hz(k,"refract")
o.c=new A.an(!1,!1,!1)
o.f=new V.a4(0,0,0)
o.ch=1
k.cy=o
o=new O.hv(k,"alpha")
o.c=new A.an(!1,!1,!1)
o.f=1
k.db=o
o=new D.dL()
o.bx(D.ac)
o.sf2(H.d([],[D.bB]))
o.shi(H.d([],[D.e_]))
o.shH(H.d([],[D.e6]))
o.y=o.x=null
o.cw(o.gft(),o.gh6(),o.gha())
k.dx=o
l=new O.hy()
l.b=new V.aD(0,0,0,0)
l.c=1
l.d=10
l.e=!1
k.dy=l
l=o.x
o=l==null?o.x=D.X():l
o.h(0,k.ght())
o=k.dx
l=o.y
o=l==null?o.y=D.X():l
o.h(0,k.geI())
k.fr=null
k.dx.h(0,n)
k.f.saO(0,new V.a4(0,0,0))
o=k.r
o.saO(0,new V.a4(0.01,0.01,0.01))
o=k.x
o.saO(0,new V.a4(0.7,0.7,0.7))
o=k.z
o.saO(0,new V.a4(0.3,0.3,0.3))
o=k.z
o.d9(new A.an(!0,!1,!1))
o.da(100)
j=E.lV()
j.sae(0,F.n2())
i=E.lV()
i.sb4(U.l6(V.bp(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.ly(1,d,d,1)
o.cb()
i.sae(0,o)
h=new U.cE()
h.bx(U.ak)
h.ba(h.gfq(),h.gh8())
h.e=null
h.f=V.dT()
h.r=0
h.h(0,r)
h.h(0,U.l6(V.lZ(3.141592653589793)))
h.h(0,U.l6(V.bp(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=new M.dD()
o.a=!0
o.seW(0,O.l5(E.ao))
o.e.ba(o.gfE(),o.gfG())
o.y=o.x=o.r=o.f=null
g=X.nJ(d)
f=new X.dZ()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb4(d)
l=f.c
if(!(Math.abs(l-1.0471975511965976)<$.R().a)){f.c=1.0471975511965976
l=new D.U("fov",l,1.0471975511965976,[P.q])
l.b=!0
f.aI(l)}l=f.d
if(!(Math.abs(l-0.1)<$.R().a)){f.d=0.1
l=new D.U("near",l,0.1,[P.q])
l.b=!0
f.aI(l)}l=f.e
if(!(Math.abs(l-2000)<$.R().a)){f.e=2000
l=new D.U("far",l,2000,[P.q])
l.b=!0
f.aI(l)}l=o.b
if(l!==f){if(l!=null)l.gA().L(0,o.gam())
m=o.b
o.b=f
f.gA().h(0,o.gam())
l=new D.U("camera",m,o.b,[X.dy])
l.b=!0
o.au(l)}l=o.c
if(l!==g){if(l!=null)l.gA().L(0,o.gam())
m=o.c
o.c=g
g.gA().h(0,o.gam())
l=new D.U("target",m,o.c,[X.e9])
l.b=!0
o.au(l)}o.se7(d)
o.se7(k)
o.e.h(0,j)
o.e.h(0,i)
o.b.sb4(h)
l=s.d
if(l!==o){if(l!=null)l.gA().L(0,s.gcD())
s.d=o
o.gA().h(0,s.gcD())
s.cE()}o=new V.i4("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
o.aX(0,"Cube",new M.kM(j))
o.aX(0,"Cylinder",new M.kN(j))
o.aX(0,"Cone",new M.kO(j))
o.aX(0,"Sphere",new M.kP(j))
o.dh(0,"Toroid",new M.kQ(j),!0)
o.aX(0,"Knot",new M.kR(j))
u=s.z
if(u==null)u=s.z=D.X()
o={func:1,ret:-1,args:[D.D]}
l=H.n(new M.kS(c,k),o)
if(u.b==null)u.saK(H.d([],[o]))
u=u.b;(u&&C.a).h(u,l)
V.pO(s)},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b}},A={
nW:function(a,b){var u=a.b0,t=new A.hu(b,u)
t.ey(b,u)
t.ev(a,b)
return t},
nX:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aE],"$ab")
H.l(b0,"$ib",[A.aH],"$ab")
H.l(b1,"$ib",[A.aI],"$ab")
u="MaterialLight_"+a0.gai(a0)+a1.gai(a1)+a2.gai(a2)+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+"_"
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
f=new Z.bN(f.a|t.a)}if(i){t=$.bt()
f=new Z.bN(f.a|t.a)}if(h){t=$.bs()
f=new Z.bN(f.a|t.a)}return new A.hx(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kt:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ku:function(a,b,c){var u
A.kt(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kY(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oZ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kt(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oW:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ku(b,t,"ambient")
b.a+="\n"},
oX:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ku(b,t,"diffuse")
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
p_:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ku(b,t,"invDiffuse")
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
p5:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ku(b,t,"specular")
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
p1:function(a,b){var u,t,s
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
p3:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kt(b,t,"reflect")
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
p4:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kt(b,t,"refract")
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
oY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kY(t)
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
p2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kY(t)
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
p6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kY(t)
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
p0:function(a,b){var u,t
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
p7:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ag("")
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
A.oZ(a,j)
A.oW(a,j)
A.oX(a,j)
A.p_(a,j)
A.p5(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p3(a,j)
A.p4(a,j)}A.p1(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oY(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p2(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p6(a,q[o],j)
A.p0(a,j)}q=j.a+="// === Main ===\n"
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
p8:function(a,b){var u,t,s
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
pa:function(a,b){var u
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
p9:function(a,b){var u
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
pc:function(a,b){var u,t
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
pd:function(a,b){var u,t
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
pb:function(a,b){var u
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
pe:function(a,b){var u
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
kY:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.a6(a,1)},
li:function(a,b,c,d,e){var u=new A.iV(a,c,e)
u.f=d
u.shT(P.nU(d,0,P.m))
return u},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){var _=this
_.js=_.jr=_.du=_.dt=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jF=_.jE=_.jD=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.jC=_.jB=_.dD=_.jA=_.jz=_.dC=_.dB=_.jy=_.jx=_.dA=_.dz=_.jw=_.jv=_.dw=_.ju=_.jt=_.dv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aE:function aE(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.dt=b4},
ca:function ca(a,b,c,d,e,f){var _=this
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
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cS:function cS(){},
ef:function ef(){},
j_:function j_(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ly:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
u=F.lg()
F.di(u,b,c,d,a,1,0,0,1)
F.di(u,b,c,d,a,0,1,0,3)
F.di(u,b,c,d,a,0,0,1,2)
F.di(u,b,c,d,a,-1,0,0,0)
F.di(u,b,c,d,a,0,-1,0,0)
F.di(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
ko:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
di:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
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
e.d=u}h=F.ko(u)
g=F.ko(e.b)
f=F.lF(d,a0,new F.kn(e,F.ko(e.c),F.ko(e.d),g,h,c),b)
if(f!=null)a.b3(f)},
mO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.lg()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ai])
q=u.a
p=new V.K(0,0,t)
p=p.u(0,Math.sqrt(p.E(p)))
C.a.h(r,q.hZ(new V.ba(a,-1,-1,-1),new V.aD(1,1,1,1),new V.a5(0,0,c),new V.K(0,0,t),new V.a9(0.5,0.5),p))
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
f=F.el(new V.ba(a,-1,-1,-1),null,new V.aD(i,g,h,1),new V.a5(m*k,l*k,c),new V.K(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hX(r)
return u},
mM:function(a,b,c){return F.ps(!0,a,1,new F.kz(1,c),b)},
ps:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.lF(c,e,new F.kB(d),null)
if(u==null)return
u.ar()
u.bU()
if(b)u.b3(F.mO(3,!1,1,new F.kC(d),e))
u.b3(F.mO(1,!0,-1,new F.kD(d),e))
return u},
pP:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kW()
t=F.ly(a,null,new F.kX(s,1),b)
t.bU()
return t},
n2:function(){return F.mN(15,30,0.5,1,new F.kZ())},
pH:function(){return F.mN(12,120,0.3,1,new F.kK(3,2))},
mN:function(a,b,c,d,e){var u=F.lF(a,b,new F.kA(H.n(e,{func:1,ret:V.a5,args:[P.q]}),d,b,c),null)
if(u==null)return
u.ar()
u.bU()
return u},
lF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ai,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.lg()
t=H.d([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.el(g,g,new V.aD(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c2(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.el(g,g,new V.aD(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c2(d))}}u.d.hY(a+1,b+1,t)
return u},
cB:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.C("May not create a face with vertices attached to different shapes."))
u.bS(a)
u.bT(b)
u.hA(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
nQ:function(a,b){var u=new F.bo(),t=a.a
if(t==null)H.z(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.C("May not create a line with vertices attached to different shapes."))
u.bS(a)
u.bT(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
lg:function(){var u=new F.e4(),t=new F.jh(u)
t.b=!1
t.shU(H.d([],[F.ai]))
u.a=t
t=new F.ij(u)
t.sbL(H.d([],[F.bJ]))
u.b=t
t=new F.ii(u)
t.sfb(H.d([],[F.bo]))
u.c=t
t=new F.ih(u)
t.sf5(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
el:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.jp()
r.sbL(H.d([],[F.bJ]))
s.b=r
r=new F.jl()
u=[F.bo]
r.sfc(H.d([],u))
r.sfd(H.d([],u))
s.c=r
r=new F.ji()
u=[F.a8]
r.sf6(H.d([],u))
r.sf7(H.d([],u))
r.sf8(H.d([],u))
s.d=r
h=$.ng()
s.e=0
r=$.bv()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bu().a)!==0?e:t
s.x=(u&$.bt().a)!==0?b:t
s.y=(u&$.bS().a)!==0?f:t
s.z=(u&$.bT().a)!==0?g:t
s.Q=(u&$.nh().a)!==0?c:t
s.ch=(u&$.cs().a)!==0?i:0
s.cx=(u&$.bs().a)!==0?a:t
return s},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kz:function kz(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kW:function kW(){},
kX:function kX(a,b){this.a=a
this.b=b},
kZ:function kZ(){},
kK:function kK(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(){},
ip:function ip(){},
bo:function bo(){this.b=this.a=null},
hh:function hh(){},
iU:function iU(){},
bJ:function bJ(){this.a=null},
e4:function e4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jr:function jr(a){this.a=a},
jq:function jq(a){this.a=a},
jh:function jh(a){this.a=a
this.c=this.b=null},
ji:function ji(){this.d=this.c=this.b=null},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(){this.c=this.b=null},
jn:function jn(){},
jm:function jm(){},
jo:function jo(){},
hV:function hV(){},
jp:function jp(){this.b=null}},T={cX:function cX(){},eb:function eb(){},iG:function iG(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iH:function iH(a){var _=this
_.a=a
_.e=_.d=_.b=null},iI:function iI(a,b,c,d,e,f,g){var _=this
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
H.lb.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.cQ(a)},
i:function(a){return"Instance of '"+H.c4(a)+"'"}}
J.hc.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iP:1}
J.dI.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dJ.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i_.prototype={}
J.bM.prototype={}
J.bn.prototype={
i:function(a){var u=a[$.n4()]
if(u==null)return this.eq(a)
return"JavaScript function for "+H.i(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibD:1}
J.aR.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.z(P.H("add"))
a.push(b)},
e2:function(a,b){if(!!a.fixed$length)H.z(P.H("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e1(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.z(P.H("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iG:function(a){return this.m(a,"")},
iy:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
ix:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.P,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.I(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.hb())},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
en:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giw:function(a){if(a.length>0)return a[0]
throw H.c(H.hb())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hb())},
bb:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.z(P.H("setRange"))
P.bq(b,c,a.length)
u=c-b
if(u===0)return
P.lf(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cn(d)
if(u>s.gn(d))throw H.c(H.nM())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dk:function(a,b){var u,t
H.n(b,{func:1,ret:P.P,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.I(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
bv:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.z(P.H("sort"))
H.e5(a,0,a.length-1,b,u)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.l8(a,"[","]")},
gT:function(a){return new J.ax(a,a.length,[H.r(a,0)])},
gH:function(a){return H.cQ(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.H("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cl(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.z(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cl(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bb(t,0,a.length,a)
this.bb(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.la.prototype={}
J.ax.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.scU(null)
return!1}t.scU(s[u]);++t.c
return!0},
scU:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
J.bF.prototype={
ic:function(a,b){var u
H.mX(b)
if(typeof b!=="number")throw H.c(H.ar(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
jc:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
ea:function(a,b){var u
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.H("Unexpected toString result: "+u))
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a-b},
C:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a*b},
b9:function(a,b){var u=a%b
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
throw H.c(P.H("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.dc(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hF:function(a,b){if(b<0)throw H.c(H.ar(b))
return this.dc(a,b)},
dc:function(a,b){return b>31?0:a>>>b},
aj:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a>b},
$iq:1,
$iab:1}
J.dH.prototype={$im:1}
J.dG.prototype={}
J.bm.prototype={
W:function(a,b){if(b<0)throw H.c(H.cl(a,b))
if(b>=a.length)H.z(H.cl(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cl(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l2(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.bq(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a7:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.a7(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.ar(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.e1(b,null))
if(b>c)throw H.c(P.e1(b,null))
if(c>a.length)throw H.c(P.e1(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.w(a,b,null)},
jf:function(a){return a.toLowerCase()},
C:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ab:function(a,b){var u=b-a.length
if(u<=0)return a
return this.C(" ",u)+a},
dL:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
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
$im1:1,
$if:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$ad1:function(){return[P.m]},
$ax:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fS.prototype={}
H.c2.prototype={
gT:function(a){var u=this
return new H.cH(u,u.gn(u),[H.as(u,"c2",0)])},
bs:function(a,b){return this.ep(0,H.n(b,{func:1,ret:P.P,args:[H.as(this,"c2",0)]}))}}
H.cH.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.cn(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bj(s))
u=t.c
if(u>=q){t.saT(null)
return!1}t.saT(r.I(s,u));++t.c
return!0},
saT:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.hr.prototype={
gT:function(a){return new H.hs(J.bw(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
I:function(a,b){return this.b.$1(J.fn(this.a,b))},
$aj:function(a,b){return[b]}}
H.hs.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saT(u.c.$1(t.gJ(t)))
return!0}u.saT(null)
return!1},
gJ:function(a){return this.a},
saT:function(a){this.a=H.B(a,H.r(this,1))},
$ab5:function(a,b){return[b]}}
H.ht.prototype={
gn:function(a){return J.aC(this.a)},
I:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ac2:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d3.prototype={
gT:function(a){return new H.ju(J.bw(this.a),this.b,this.$ti)}}
H.ju.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.I(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bZ.prototype={}
H.d1.prototype={
k:function(a,b,c){H.B(c,H.as(this,"d1",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.eh.prototype={}
H.fE.prototype={
i:function(a){return P.le(this)},
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nD()},
$iy:1}
H.fF.prototype={
gn:function(a){return this.a},
bj:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bj(0,b))return
return this.cW(b)},
cW:function(a){return this.b[H.J(a)]},
G:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.cW(r),p))}}}
H.iR.prototype={
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
H.hW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.he.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l_.prototype={
$1:function(a){if(!!J.Q(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eV.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cx.prototype={
i:function(a){return"Closure '"+H.c4(this).trim()+"'"},
$ibD:1,
gjl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.it.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.cu.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cu))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cQ(this.a)
else u=typeof t!=="object"?J.dq(t):H.cQ(t)
return(u^H.cQ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c4(u)+"'")}}
H.iT.prototype={
i:function(a){return this.a}}
H.fA.prototype={
i:function(a){return this.a}}
H.id.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jv.prototype={
i:function(a){return"Assertion failed: "+P.dE(this.a)}}
H.a1.prototype={
gn:function(a){return this.a},
giF:function(a){return this.a===0},
ga2:function(a){return new H.hj(this,[H.r(this,0)])},
bj:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cR(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cR(t,b)}else return s.iC(b)},
iC:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cf(u.bE(t,u.ce(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.iD(b)},
iD:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bE(r,s.ce(a))
t=s.cf(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cI(u==null?s.b=s.bI():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cI(t==null?s.c=s.bI():t,b,c)}else s.iE(b,c)},
iE:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bI()
t=q.ce(a)
s=q.bE(u,t)
if(s==null)q.bQ(u,t,[q.bJ(a,b)])
else{r=q.cf(s,a)
if(r>=0)s[r].b=b
else s.push(q.bJ(a,b))}},
G:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bj(s))
u=u.c}},
cI:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.be(a,b)
if(u==null)t.bQ(a,b,t.bJ(b,c))
else u.b=c},
fj:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var u,t=this,s=new H.hi(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fj()
return s},
ce:function(a){return J.dq(a)&0x3ffffff},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.le(this)},
be:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
f0:function(a,b){delete a[b]},
cR:function(a,b){return this.be(a,b)!=null},
bI:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bQ(t,u,t)
this.f0(t,u)
return t}}
H.hi.prototype={}
H.hj.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hk(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hk.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.scH(null)
return!1}else{u.scH(t.a)
u.c=u.c.c
return!0}}},
scH:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kI.prototype={
$1:function(a){return this.a(H.J(a))},
$S:53}
H.hd.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im1:1,
$iob:1}
H.cL.prototype={$icL:1}
H.bI.prototype={$ibI:1,$iol:1}
H.dU.prototype={
gn:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cM.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pu(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.q]},
$ax:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dV.prototype={
k:function(a,b,c){H.a3(c)
H.bh(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.m]},
$ax:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hO.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dW.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$iqe:1}
H.cN.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icN:1,
$iO:1}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
P.jx.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jw.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jy.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f0.prototype={
eK:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.kd(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
eL:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kc(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ibc:1}
P.kd.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kc.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eu(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
iJ:function(a){if(this.c!==6)return!0
return this.b.b.cr(H.n(this.d,{func:1,ret:P.P,args:[P.N]}),a.a,P.P,P.N)},
iA:function(a){var u=this.e,t=P.N,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fj(u,{func:1,args:[P.N,P.av]}))return H.lz(r.j7(u,a.a,a.b,null,t,P.av),s)
else return H.lz(r.cr(H.n(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aN.prototype={
e9:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a0
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pg(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aN($.a0,[c])
s=b==null?1:3
this.cJ(new P.bg(t,s,a,b,[r,c]))
return t},
jb:function(a,b){return this.e9(a,null,b)},
cJ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaN")
s=u.a
if(s<4){u.cJ(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kx(null,null,s,H.n(new P.jI(t,a),{func:1,ret:-1}))}},
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
p.c=q.c}o.a=p.bg(a)
u=p.b
u.toString
P.kx(null,null,u,H.n(new P.jM(o,p),{func:1,ret:-1}))}},
bN:function(){var u=H.h(this.c,"$ibg")
this.c=null
return this.bg(u)},
bg:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cN:function(a){var u,t,s=this,r=H.r(s,0)
H.lz(a,{futureOr:1,type:r})
u=s.$ti
if(H.lv(a,"$icD",u,"$acD"))if(H.lv(a,"$iaN",u,null))P.mq(a,s)
else P.oy(a,s)
else{t=s.bN()
H.B(a,r)
s.a=4
s.c=a
P.d6(s,t)}},
cO:function(a,b){var u,t=this
H.h(b,"$iav")
u=t.bN()
t.a=8
t.c=new P.am(a,b)
P.d6(t,u)},
$icD:1}
P.jI.prototype={
$0:function(){P.d6(this.a,this.b)},
$S:0}
P.jM.prototype={
$0:function(){P.d6(this.b,this.a.a)},
$S:0}
P.jJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.cN(a)},
$S:17}
P.jK.prototype={
$2:function(a,b){H.h(b,"$iav")
this.a.cO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jL.prototype={
$0:function(){this.a.cO(this.b,this.c)},
$S:0}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e5(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cp(r)
if(o.d){s=H.h(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.Q(n).$icD){if(n instanceof P.aN&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jb(new P.jQ(p),null)
s.a=!1}},
$S:3}
P.jQ.prototype={
$1:function(a){return this.a},
$S:46}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cr(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cp(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iam")
r=m.c
if(H.I(r.iJ(u))&&r.e!=null){q=m.b
q.b=r.iA(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cp(p)
r=H.h(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.en.prototype={}
P.iw.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aN($.a0,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iy(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iz(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iy.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.r(this.b,0)]}}}
P.iz.prototype={
$0:function(){this.b.cN(this.a.a)},
$S:0}
P.cU.prototype={}
P.ix.prototype={}
P.bc.prototype={}
P.am.prototype={
i:function(a){return H.i(this.a)},
$ibC:1}
P.km.prototype={$iqt:1}
P.kw.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dY():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jW.prototype={
j8:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a0){a.$0()
return}P.mC(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cp(s)
P.kv(r,r,this,u,H.h(t,"$iav"))}},
j9:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.a0){a.$1(b)
return}P.mD(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cp(s)
P.kv(r,r,this,u,H.h(t,"$iav"))}},
i8:function(a,b){return new P.jY(this,H.n(a,{func:1,ret:b}),b)},
bW:function(a){return new P.jX(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jZ(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e5:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.f)return a.$0()
return P.mC(null,null,this,a,b)},
cr:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a0===C.f)return a.$1(b)
return P.mD(null,null,this,a,b,c,d)},
j7:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a0===C.f)return a.$2(b,c)
return P.ph(null,null,this,a,b,c,d,e,f)}}
P.jY.prototype={
$0:function(){return this.a.e5(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jX.prototype={
$0:function(){return this.a.j8(this.b)},
$S:3}
P.jZ.prototype={
$1:function(a){var u=this.c
return this.a.j9(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jU.prototype={
gT:function(a){var u=this,t=new P.eC(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icf")!=null}else{t=this.eX(b)
return t}},
eX:function(a){var u=this.d
if(u==null)return!1
return this.bC(this.cX(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cK(u==null?s.b=P.ln():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cK(t==null?s.c=P.ln():t,b)}else return s.eN(0,b)},
eN:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.ln()
t=r.cP(b)
s=u[t]
if(s==null)u[t]=[r.bz(b)]
else{if(r.bC(s,b)>=0)return!1
s.push(r.bz(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ho(this.c,b)
else return this.hn(0,b)},
hn:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cX(r,b)
t=s.bC(u,b)
if(t<0)return!1
s.de(u.splice(t,1)[0])
return!0},
cK:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$icf")!=null)return!1
a[b]=this.bz(b)
return!0},
ho:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icf")
if(u==null)return!1
this.de(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bz:function(a){var u,t=this,s=new P.cf(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
de:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cP:function(a){return J.dq(a)&1073741823},
cX:function(a,b){return a[this.cP(b)]},
bC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.cf.prototype={}
P.eC.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.scL(null)
return!1}else{u.scL(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scL:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
P.hl.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.hm.prototype={$ij:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cH(a,this.gn(a),[H.bQ(this,a,"x",0)])},
I:function(a,b){return this.j(a,b)},
je:function(a,b){var u,t=this,s=H.d([],[H.bQ(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jd:function(a){return this.je(a,!0)},
p:function(a,b){var u,t=this,s=[H.bQ(t,a,"x",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bb(u,0,t.gn(a),a)
C.a.bb(u,t.gn(a),u.length,b)
return u},
iu:function(a,b,c,d){var u
H.B(d,H.bQ(this,a,"x",0))
P.bq(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l8(a,"[","]")}}
P.ho.prototype={}
P.hp.prototype={
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
H.n(b,{func:1,ret:-1,args:[H.bQ(s,a,"ad",0),H.bQ(s,a,"ad",1)]})
for(u=J.bw(s.ga2(a));u.B();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aC(this.ga2(a))},
i:function(a){return P.le(a)},
$iy:1}
P.ke.prototype={
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hq.prototype={
j:function(a,b){return J.dp(this.a,b)},
k:function(a,b,c){J.l0(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
G:function(a,b){J.lJ(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aC(this.a)},
i:function(a){return J.at(this.a)},
$iy:1}
P.ei.prototype={}
P.k0.prototype={
ap:function(a,b){var u
for(u=J.bw(H.l(b,"$ij",this.$ti,"$aj"));u.B();)this.h(0,u.gJ(u))},
i:function(a){return P.l8(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.lf(b,"index")
for(u=P.oC(r,r.r,H.r(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,r,"index",null,t))},
$ij:1,
$im8:1}
P.eD.prototype={}
P.f6.prototype={}
P.fw.prototype={
iL:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bq(a0,a1,b.length)
u=$.nj()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kF(C.b.D(b,n))
j=H.kF(C.b.D(b,n+1))
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
r.a=g+H.c5(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.w(b,s,a1)
f=g.length
if(q>=0)P.lN(b,p,a1,q,o,f)
else{e=C.e.b9(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lN(b,p,a1,q,o,d)
else{e=C.e.b9(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aR(b,a1,a1,e===2?"==":"=")}return b},
$abX:function(){return[[P.b,P.m],P.f]}}
P.fx.prototype={
$abA:function(){return[[P.b,P.m],P.f]}}
P.bX.prototype={}
P.bA.prototype={}
P.fU.prototype={
$abX:function(){return[P.f,[P.b,P.m]]}}
P.h9.prototype={
i:function(a){return this.a}}
P.h8.prototype={
eY:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(c>b)q.a+=J.nw(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abA:function(){return[P.f,P.f]}}
P.jb.prototype={
git:function(){return C.N}}
P.jd.prototype={
c1:function(a){var u,t,s=P.bq(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kk(u)
if(t.f9(a,0,s)!==s)t.dg(J.ns(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oS(0,t.b,u.length)))},
$abA:function(){return[P.f,[P.b,P.m]]}}
P.kk.prototype={
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
f9:function(a,b,c){var u,t,s,r,q,p,o,n=this
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
P.jc.prototype={
c1:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.oo(!1,a,0,null)
if(u!=null)return u
t=P.bq(0,null,J.aC(a))
s=P.mF(a,0,t)
if(s>0){r=P.cV(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.kj(!1,q)
n.c=o
n.ie(a,p,t)
if(n.e>0){H.z(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c5(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abA:function(){return[[P.b,P.m],P.f]}}
P.kj.prototype={
ie:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cn(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ad()
if((o&192)!==128){n=P.a7(h+C.e.b7(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.e.b7(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.b7(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c5(u)
i.c=!1}for(n=p<c;n;){m=P.mF(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cV(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.b7(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.b7(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.P.prototype={}
P.ay.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.aM(u,30))&1073741823},
i:function(a){var u=this,t=P.nE(H.o7(u)),s=P.dA(H.o5(u)),r=P.dA(H.o1(u)),q=P.dA(H.o2(u)),p=P.dA(H.o4(u)),o=P.dA(H.o6(u)),n=P.nF(H.o3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.b4.prototype={
p:function(a,b){return new P.b4(C.e.p(this.a,b.gcV()))},
t:function(a,b){return new P.b4(C.e.t(this.a,b.gcV()))},
aj:function(a,b){return C.e.aj(this.a,b.gcV())},
q:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.fR(),q=this.a
if(q<0)return"-"+new P.b4(0-q).i(0)
u=r.$1(C.e.a5(q,6e7)%60)
t=r.$1(C.e.a5(q,1e6)%60)
s=new P.fQ().$1(q%1e6)
return""+C.e.a5(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bC.prototype={}
P.fq.prototype={
i:function(a){return"Assertion failed"}}
P.dY.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbB()+o+u
if(!q.a)return t
s=q.gbA()
r=P.dE(q.b)
return t+s+": "+r}}
P.c6.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.ha.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t=H.a3(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j1.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dE(u)+"."}}
P.hZ.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.e7.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ev.prototype={
i:function(a){return"Exception: "+this.a}}
P.h3.prototype={
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
P.bD.prototype={}
P.m.prototype={}
P.j.prototype={
bs:function(a,b){var u=H.as(this,"j",0)
return new H.d3(this,H.n(b,{func:1,ret:P.P,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.B();)++u
return u},
gaG:function(a){var u,t=this.gT(this)
if(!t.B())throw H.c(H.hb())
u=t.gJ(t)
if(t.B())throw H.c(H.nN())
return u},
I:function(a,b){var u,t,s
P.lf(b,"index")
for(u=this.gT(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.nL(this,"(",")")}}
P.b5.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.M.prototype={
gH:function(a){return P.N.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gH:function(a){return H.cQ(this)},
i:function(a){return"Instance of '"+H.c4(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.f.prototype={$im1:1}
P.ag.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq2:1}
P.j9.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iy",[r,r],"$ay")
H.J(b)
u=J.dl(b).dK(b,"=")
if(u===-1){if(b!=="")J.l0(a,P.lp(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.w(b,0,u)
s=C.b.a6(b,u+1)
r=this.a
J.l0(a,P.lp(t,0,t.length,r,!0),P.lp(s,0,s.length,r,!0))}return a},
$S:45}
P.j6.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j7.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j8.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fm(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cg.prototype={
geg:function(){return this.b},
gcd:function(a){var u=this.c
if(u==null)return""
if(C.b.a1(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbn:function(a){var u=this.d
if(u==null)return P.mu(this.a)
return u},
gcl:function(a){var u=this.f
return u==null?"":u},
gdF:function(){var u=this.r
return u==null?"":u},
e3:function(a,b){var u,t,s,r,q,p,o,n,m=this
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
if(o&&!C.b.a1(p,"/"))p="/"+p
n=P.lo(null,0,0,b)
return new P.cg(u,s,q,r,p,n,m.r)},
gcm:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shm(new P.ei(P.mi(u==null?"":u),[t,t]))}return s.Q},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$ilj)if(s.a==b.gbu())if(s.c!=null===b.gdG())if(s.b==b.geg())if(s.gcd(s)==b.gcd(b))if(s.gbn(s)==b.gbn(b))if(s.e===b.gdZ(b)){u=s.f
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
shm:function(a){var u=P.f
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ilj:1,
gbu:function(){return this.a},
gdZ:function(a){return this.e}}
P.kf.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.kg.prototype={
$1:function(a){return P.f7(C.X,a,C.h,!1)},
$S:22}
P.ki.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f7(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f7(C.n,b,C.h,!0))}},
$S:23}
P.kh.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bw(H.mV(b,"$ij")),t=this.a;u.B();)t.$2(a,H.J(u.gJ(u)))},
$S:40}
P.j5.prototype={
gef:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.dL(u,"?",o)
s=u.length
if(t>=0){r=P.dh(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jD("data",p,p,p,P.dh(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kq.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kp.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nt(u,0,96,b)
return u},
$S:39}
P.kr.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.ks.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.k3.prototype={
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
gcZ:function(){return this.b===4&&C.b.a1(this.a,"http")},
gd_:function(){return this.b===5&&C.b.a1(this.a,"https")},
gbu:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcZ())q=t.x="http"
else if(t.gd_()){t.x="https"
q="https"}else if(q===4&&C.b.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a1(t.a,r)){t.x=r
q=r}else{q=C.b.w(t.a,0,q)
t.x=q}return q},
geg:function(){var u=this.c,t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gcd:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbn:function(a){var u,t=this
if(t.gdI()){u=t.d
if(typeof u!=="number")return u.p()
return P.fm(C.b.w(t.a,u+1,t.e),null,null)}if(t.gcZ())return 80
if(t.gd_())return 443
return 0},
gdZ:function(a){return C.b.w(this.a,this.e,this.f)},
gcl:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.w(this.a,u+1,t):""},
gdF:function(){var u=this.r,t=this.a
return u<t.length?C.b.a6(t,u+1):""},
gcm:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.f
return new P.ei(P.mi(u.gcl(u)),[t,t])},
e3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.f,null],"$ay")
u=k.gbu()
t=u==="file"
s=k.c
r=s>0?C.b.w(k.a,k.b+3,s):""
q=k.gdI()?k.gbn(k):j
s=k.c
if(s>0)p=C.b.w(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.w(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a1(o,"/"))o="/"+o
m=P.lo(j,0,0,b)
n=k.r
l=n<s.length?C.b.a6(s,n+1):j
return new P.cg(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$ilj&&this.a===b.i(0)},
i:function(a){return this.a},
$ilj:1}
P.jD.prototype={}
W.w.prototype={}
W.fo.prototype={
gn:function(a){return a.length}}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.ct.prototype={$ict:1}
W.bV.prototype={$ibV:1}
W.bx.prototype={$ibx:1}
W.bW.prototype={
cu:function(a,b,c){if(c!=null)return a.getContext(b,P.pp(c))
return a.getContext(b)},
ej:function(a,b){return this.cu(a,b,null)},
$ibW:1}
W.cw.prototype={$icw:1}
W.by.prototype={
gn:function(a){return a.length}}
W.cy.prototype={$icy:1}
W.fG.prototype={
gn:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cz.prototype={
gn:function(a){return a.length}}
W.fH.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fI.prototype={
gn:function(a){return a.length}}
W.fJ.prototype={
gn:function(a){return a.length}}
W.fM.prototype={
gn:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.fN.prototype={
i:function(a){return String(a)}}
W.dB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ial",[P.ab],"$aal")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.al,P.ab]]},
$ax:function(){return[[P.al,P.ab]]},
$ij:1,
$aj:function(){return[[P.al,P.ab]]},
$ib:1,
$ab:function(){return[[P.al,P.ab]]},
$aF:function(){return[[P.al,P.ab]]}}
W.dC.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaF(a))+" x "+H.i(this.gaz(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ial)return!1
return a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaF(a)===u.gaF(b)&&this.gaz(a)===u.gaz(b)},
gH:function(a){return W.ms(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaF(a)),C.c.gH(this.gaz(a)))},
gdn:function(a){return a.bottom},
gaz:function(a){return a.height},
gbm:function(a){return a.left},
gcq:function(a){return a.right},
gbp:function(a){return a.top},
gaF:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ab]}}
W.fO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.J(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.f]},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
W.fP.prototype={
gn:function(a){return a.length}}
W.jB.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.h(u[b],"$iT")},
k:function(a,b,c){var u
H.h(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.jd(this)
return new J.ax(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.T]},
$aj:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gi7:function(a){return new W.jE(a)},
gc0:function(a){return new W.jB(a,a.children)},
gdq:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
a9:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lU
if(u==null){u=H.d([],[W.aA])
t=new W.dX(u)
C.a.h(u,W.mr(null))
C.a.h(u,W.mt())
$.lU=t
d=t}else d=u
u=$.lT
if(u==null){u=new W.f8(d)
$.lT=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.l7=t.createRange()
t=$.bk.createElement("base")
H.h(t,"$ict")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibx")}u=$.bk
if(!!this.$ibx)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.V,a.tagName)){$.l7.selectNodeContents(s)
r=$.l7.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lL(s)
c.cv(r)
document.adoptNode(r)
return r},
ii:function(a,b,c){return this.a9(a,b,c,null)},
el:function(a,b){a.textContent=null
a.appendChild(this.a9(a,b,null,null))},
$iT:1,
ge6:function(a){return a.tagName}}
W.fT.prototype={
$1:function(a){return!!J.Q(H.h(a,"$iE")).$iT},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
hW:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eO(a,b,c,!1)},
eO:function(a,b,c,d){return a.addEventListener(b,H.ck(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aG.prototype={$iaG:1}
W.cC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$icC:1,
$aF:function(){return[W.aG]}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h2.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.h7.prototype={
gn:function(a){return a.length}}
W.c_.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ic_:1,
$aF:function(){return[W.E]}}
W.bl.prototype={$ibl:1,
gds:function(a){return a.data}}
W.cF.prototype={$icF:1}
W.cG.prototype={$icG:1}
W.b6.prototype={$ib6:1}
W.dN.prototype={
i:function(a){return String(a)},
$idN:1}
W.hH.prototype={
gn:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.hI.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.G(a,new W.hJ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hK.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.G(a,new W.hL(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aS.prototype={$iaS:1}
W.hM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aF:function(){return[W.aS]}}
W.ae.prototype={$iae:1}
W.aq.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m9("No elements"))
if(t>1)throw H.c(P.m9("More than one element"))
return u.firstChild},
ap:function(a,b){var u,t,s,r
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
gT:function(a){var u=this.a.childNodes
return new W.dF(u,u.length,[H.bQ(C.Z,u,"F",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.E]},
$aj:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
j1:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j5:function(a,b){var u,t
try{u=a.parentNode
J.nq(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
i1:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hr:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.aT.prototype={$iaT:1,
gn:function(a){return a.length}}
W.i1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aF:function(){return[W.aT]}}
W.ib.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.G(a,new W.ic(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.ic.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ie.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.iq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aF:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.ir.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aF:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.iu.prototype={
j:function(a,b){return a.getItem(H.J(b))},
k:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.d([],[P.f])
this.G(a,new W.iv(u))
return u},
gn:function(a){return a.length},
$aad:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.iv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.aJ.prototype={$iaJ:1}
W.bb.prototype={$ibb:1}
W.e8.prototype={
a9:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=W.nG("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ap(0,new W.aq(u))
return t}}
W.iB.prototype={
a9:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaG(u)
s.toString
u=new W.aq(s)
r=u.gaG(u)
t.toString
r.toString
new W.aq(t).ap(0,new W.aq(r))
return t}}
W.iC.prototype={
a9:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.a9(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaG(u)
t.toString
s.toString
new W.aq(t).ap(0,new W.aq(s))
return t}}
W.cW.prototype={$icW:1}
W.aX.prototype={$iaX:1}
W.aK.prototype={$iaK:1}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aF:function(){return[W.aK]}}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aF:function(){return[W.aX]}}
W.iK.prototype={
gn:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aZ.prototype={$iaZ:1}
W.iO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aF:function(){return[W.aY]}}
W.iP.prototype={
gn:function(a){return a.length}}
W.bL.prototype={}
W.ja.prototype={
i:function(a){return String(a)}}
W.js.prototype={
gn:function(a){return a.length}}
W.bf.prototype={
gil:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gik:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibf:1}
W.d4.prototype={
hs:function(a,b){return a.requestAnimationFrame(H.ck(H.n(b,{func:1,ret:-1,args:[P.ab]}),1))},
f3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d5.prototype={$id5:1}
W.jC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iV")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.V]},
$ax:function(){return[W.V]},
$ij:1,
$aj:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aF:function(){return[W.V]}}
W.eq.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
if(!u.$ial)return!1
return a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaF(b)&&a.height===u.gaz(b)},
gH:function(a){return W.ms(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gaz:function(a){return a.height},
gaF:function(a){return a.width}}
W.jR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaQ")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aF:function(){return[W.aQ]}}
W.eI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.E]},
$ax:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aF:function(){return[W.E]}}
W.k4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aF:function(){return[W.aW]}}
W.k8.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaJ")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aF:function(){return[W.aJ]}}
W.jA.prototype={
G:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$id5")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jE.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga2(this).length}}
W.jF.prototype={}
W.lm.prototype={}
W.jG.prototype={}
W.jH.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bO.prototype={
eC:function(a){var u
if($.d7.giF($.d7)){for(u=0;u<262;++u)$.d7.k(0,C.U[u],W.pA())
for(u=0;u<12;++u)$.d7.k(0,C.q[u],W.pB())}},
aN:function(a){return $.nk().R(0,W.cA(a))},
aq:function(a,b,c){var u=$.d7.j(0,H.i(W.cA(a))+"::"+b)
if(u==null)u=$.d7.j(0,"*::"+b)
if(u==null)return!1
return H.lu(u.$4(a,b,c,this))},
$iaA:1}
W.F.prototype={
gT:function(a){return new W.dF(a,this.gn(a),[H.bQ(this,a,"F",0)])}}
W.dX.prototype={
aN:function(a){return C.a.dk(this.a,new W.hU(a))},
aq:function(a,b,c){return C.a.dk(this.a,new W.hT(a,b,c))},
$iaA:1}
W.hU.prototype={
$1:function(a){return H.h(a,"$iaA").aN(this.a)},
$S:29}
W.hT.prototype={
$1:function(a){return H.h(a,"$iaA").aq(this.a,this.b,this.c)},
$S:29}
W.eQ.prototype={
eH:function(a,b,c,d){var u,t,s
this.a.ap(0,c)
u=b.bs(0,new W.k1())
t=b.bs(0,new W.k2())
this.b.ap(0,u)
s=this.c
s.ap(0,C.x)
s.ap(0,t)},
aN:function(a){return this.a.R(0,W.cA(a))},
aq:function(a,b,c){var u=this,t=W.cA(a),s=u.c
if(s.R(0,H.i(t)+"::"+b))return u.d.i_(c)
else if(s.R(0,"*::"+b))return u.d.i_(c)
else{s=u.b
if(s.R(0,H.i(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.i(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$iaA:1}
W.k1.prototype={
$1:function(a){return!C.a.R(C.q,H.J(a))},
$S:30}
W.k2.prototype={
$1:function(a){return C.a.R(C.q,H.J(a))},
$S:30}
W.ka.prototype={
aq:function(a,b,c){if(this.es(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.kb.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.J(a))},
$S:22}
W.k9.prototype={
aN:function(a){var u=J.Q(a)
if(!!u.$icR)return!1
u=!!u.$ip
if(u&&W.cA(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.b.a1(b,"on"))return!1
return this.aN(a)},
$iaA:1}
W.dF.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scY(J.dp(u.a,t))
u.c=t
return!0}u.scY(null)
u.c=s
return!1},
gJ:function(a){return this.d},
scY:function(a){this.d=H.B(a,H.r(this,0))},
$ib5:1}
W.aA.prototype={}
W.k_.prototype={$iqf:1}
W.f8.prototype={
cv:function(a){new W.kl(this).$2(a,null)},
aW:function(a,b){if(b==null)J.lL(a)
else b.removeChild(a)},
hx:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nu(a)
n=o.a.getAttribute("is")
H.h(a,"$iT")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.I(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.aj(r)}try{s=W.cA(a)
this.hw(H.h(a,"$iT"),b,p,t,s,H.h(o,"$iy"),H.J(n))}catch(r){if(H.aj(r) instanceof P.aP)throw r
else{this.aW(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
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
return}u=f.ga2(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nx(r)
H.J(r)
if(!q.aq(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$icW)o.cv(a.content)},
$iq_:1}
W.kl.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hx(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aW(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.de.prototype={}
W.df.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
P.k5.prototype={
dE:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
ct:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$iob)throw H.c(P.j2("structured clone of RegExp"))
if(!!u.$iaG)return a
if(!!u.$ibV)return a
if(!!u.$icC)return a
if(!!u.$ibl)return a
if(!!u.$icL||!!u.$ibI||!!u.$icJ)return a
if(!!u.$iy){t=q.dE(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.G(a,new P.k7(p,q))
return p.a}if(!!u.$ib){t=q.dE(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ih(a,t)}throw H.c(P.j2("structured clone of other type"))},
ih:function(a,b){var u,t=J.cn(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.ct(t.j(a,u)))
return r}}
P.k7.prototype={
$2:function(a,b){this.a.a[a]=this.b.ct(b)},
$S:5}
P.f5.prototype={$ibl:1,
gds:function(a){return this.a}}
P.ky.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k6.prototype={}
P.h_.prototype={
gbf:function(){var u=this.b,t=H.as(u,"x",0),s=W.T
return new H.hr(new H.d3(u,H.n(new P.h0(),{func:1,ret:P.P,args:[t]}),[t]),H.n(new P.h1(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iT")
u=this.gbf()
J.nv(u.b.$1(J.fn(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aC(this.gbf().a)},
j:function(a,b){var u=this.gbf()
return u.b.$1(J.fn(u.a,b))},
gT:function(a){var u=P.lY(this.gbf(),!1,W.T)
return new J.ax(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.T]},
$aj:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.h0.prototype={
$1:function(a){return!!J.Q(H.h(a,"$iE")).$iT},
$S:27}
P.h1.prototype={
$1:function(a){return H.A(H.h(a,"$iE"),"$iT")},
$S:34}
P.jV.prototype={
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
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ial){t=p.a
if(t==u.gbm(b)){s=p.b
if(s==u.gbp(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.G(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gcq(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.G(t)
u=H.B(s+t,q)===u.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dq(s),q=t.b,p=J.dq(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.G(o)
u=H.r(t,0)
o=C.e.gH(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.G(s)
u=C.e.gH(H.B(q+s,u))
return P.oB(P.jT(P.jT(P.jT(P.jT(0,r),p),o),u))}}
P.al.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaF:function(a){return this.c},
gaz:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.hg.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib7")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aF:function(){return[P.b7]}}
P.b9.prototype={$ib9:1}
P.hX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib9")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b9]},
$ij:1,
$aj:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aF:function(){return[P.b9]}}
P.i3.prototype={
gn:function(a){return a.length}}
P.cR.prototype={$icR:1}
P.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.J(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aF:function(){return[P.f]}}
P.p.prototype={
gc0:function(a){return new P.h_(a,new W.aq(a))},
a9:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mr(null))
C.a.h(p,W.mt())
C.a.h(p,new W.k9())
c=new W.f8(new W.dX(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ii(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bd.prototype={$ibd:1}
P.iQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibd")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aF:function(){return[P.bd]}}
P.eA.prototype={}
P.eB.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.O.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$iol:1}
P.fs.prototype={
gn:function(a){return a.length}}
P.ft.prototype={
j:function(a,b){return P.br(a.get(H.J(b)))},
G:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga2:function(a){var u=H.d([],[P.f])
this.G(a,new P.fu(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aad:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fv.prototype={
gn:function(a){return a.length}}
P.bU.prototype={}
P.hY.prototype={
gn:function(a){return a.length}}
P.eo.prototype={}
P.du.prototype={$idu:1}
P.e0.prototype={$ie0:1}
P.c7.prototype={
ja:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$ibl)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pq(g))
return}if(!!t.$icF)t=!0
else t=!1
if(t){this.hK(a,b,c,d,e,f,g)
return}throw H.c(P.ds("Incorrect number or type of arguments"))},
hK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a3:function(a,b,c){return a.uniform1f(b,c)},
br:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ec:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ed:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ee:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic7:1}
P.e3.prototype={$ie3:1}
P.ea.prototype={$iea:1}
P.eg.prototype={$ieg:1}
P.is.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.br(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aF:function(){return[[P.y,,,]]}}
P.eT.prototype={}
P.eU.prototype={}
O.a6.prototype={
bx:function(a){var u=this
u.sfe(H.d([],[a]))
u.sd3(null)
u.sd0(null)
u.sd4(null)},
cw:function(a,b,c){var u=this,t=H.as(u,"a6",0)
H.n(b,{func:1,ret:P.P,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sd3(b)
u.sd0(a)
u.sd4(c)},
ba:function(a,b){return this.cw(a,null,b)},
h5:function(a){var u
H.l(a,"$ij",[H.as(this,"a6",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eA:function(a,b){var u
H.l(b,"$ij",[H.as(this,"a6",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.ax(u,u.length,[H.r(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a6",0)
H.B(b,r)
r=[r]
if(H.I(s.h5(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eA(t,H.d([b],r))}},
sfe:function(a){this.a=H.l(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sd3:function(a){this.b=H.n(a,{func:1,ret:P.P,args:[[P.j,H.as(this,"a6",0)]]})},
sd0:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.as(this,"a6",0)]]})},
sd4:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.as(this,"a6",0)]]})},
$ij:1}
O.cI.prototype={
gn:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.X():u},
aH:function(){var u=this.b
if(u!=null)u.K(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gas(u)
else return V.dT()},
e0:function(a){var u=this.a
if(a==null)C.a.h(u,V.dT())
else C.a.h(u,a)
this.aH()},
ck:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sbG:function(a){this.a=H.l(a,"$ib",[V.ap],"$ab")}}
E.fy.prototype={}
E.ao.prototype={
sae:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().L(0,s.gdW())
u=s.c
if(u!=null)u.gA().h(0,s.gdW())
t=new D.U("shape",r,s.c,[F.e4])
t.b=!0
s.aB(t)}},
sb4:function(a){var u,t,s=this
if(!J.S(s.r,a)){u=s.r
if(u!=null)u.gA().L(0,s.gdU())
if(a!=null)a.gA().h(0,s.gdU())
s.r=a
t=new D.U("mover",u,a,[U.ak])
t.b=!0
s.aB(t)}},
aE:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.S(q,s.x)){u=s.x
s.x=q
t=new D.U("matrix",u,q,[V.ap])
t.b=!0
s.aB(t)}for(r=s.y.a,r=new J.ax(r,r.length,[H.r(r,0)]);r.B();)r.d.aE(0,b)},
aQ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.C(0,s.ga0(s)))
s.aH()
a.e1(t.f)
s=a.dy
u=(s&&C.a).gas(s)
if(u!=null&&t.d!=null)u.j4(a,t)
for(s=t.y.a,s=new J.ax(s,s.length,[H.r(s,0)]);s.B();)s.d.aQ(a)
a.e_()
a.dx.ck()},
gA:function(){var u=this.z
return u==null?this.z=D.X():u},
aB:function(a){var u=this.z
if(u!=null)u.K(a)},
Z:function(){return this.aB(null)},
dX:function(a){H.h(a,"$iD")
this.e=null
this.aB(a)},
iS:function(){return this.dX(null)},
dV:function(a){this.aB(H.h(a,"$iD"))},
iR:function(){return this.dV(null)},
dT:function(a){this.aB(H.h(a,"$iD"))},
iO:function(){return this.dT(null)},
iN:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gdS(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.saf(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saf(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
iQ:function(a,b){var u,t
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.gT(b),t=this.gdS();u.B();)u.gJ(u).gA().L(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seB:function(a,b){this.y=H.l(b,"$ia6",[E.ao],"$aa6")},
$icK:1}
E.i7.prototype={
ew:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cI()
t=[V.ap]
u.sbG(H.d([],t))
u.b=null
u.gA().h(0,new E.i8(s))
s.cy=u
u=new O.cI()
u.sbG(H.d([],t))
u.b=null
u.gA().h(0,new E.i9(s))
s.db=u
u=new O.cI()
u.sbG(H.d([],t))
u.b=null
u.gA().h(0,new E.ia(s))
s.dx=u
s.shJ(H.d([],[O.c9]))
u=s.dy;(u&&C.a).h(u,null)
s.shE(new H.a1([P.f,A.cS]))},
gj0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.C(0,u.ga0(u))
s=u}return s},
e1:function(a){var u=this.dy,t=a==null?(u&&C.a).gas(u):a;(u&&C.a).h(u,t)},
e_:function(){var u=this.dy
if(u.length>1)u.pop()},
shJ:function(a){this.dy=H.l(a,"$ib",[O.c9],"$ab")},
shE:function(a){this.fr=H.l(a,"$iy",[P.f,A.cS],"$ay")}}
E.i8.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:10}
E.i9.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ia.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ec.prototype={
cF:function(a){H.h(a,"$iD")
this.e4()},
cE:function(){return this.cF(null)},
giz:function(){var u,t=this,s=Date.now(),r=C.e.a5(P.lS(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
d7:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.G(r)
u=C.c.cc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.C()
t=C.c.cc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mc(C.o,s.gj6())}},
e4:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iJ(this),{func:1,ret:-1,args:[P.ab]})
C.E.f3(u)
C.E.hs(u,W.mI(t,P.ab))}},
j3:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d7()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lS(r-s.r.a,0).a*0.000001
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
if(s!=null)s.K(null)}catch(q){u=H.aj(q)
t=H.cp(q)
P.lD("Error: "+H.i(u))
P.lD("Stack: "+H.i(t))
throw H.c(u)}}}
E.iJ.prototype={
$1:function(a){var u
H.mX(a)
u=this.a
if(u.ch){u.ch=!1
u.j3()}},
$S:57}
Z.em.prototype={$ipU:1}
Z.dv.prototype={
bV:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jt.prototype={$ipV:1}
Z.dw.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bV:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bV(a)},
jg:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfa:function(a){this.b=H.l(a,"$ib",[Z.bE],"$ab")},
$iq3:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c4(this.c)+"'")+"]"}}
Z.bN.prototype={
gcz:function(a){var u=this.a,t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bS().a)!==0)t+=2
if((u&$.bT().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cs().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
i2:function(a){var u,t=$.bv(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0)if(u===a)return t
return $.ni()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bN))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bv().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bS().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bT().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dm().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cs().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fB.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.n(b,u)
if(this.a==null)this.saf(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
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
return!0}if(!t)C.a.G(P.lY(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fW(q))
u=r.b
if(u!=null){r.saK(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.G(u,new D.fX(q))}return!0},
iq:function(){return this.K(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}},
saf:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saK:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fW.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fX.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.D.prototype={}
D.c0.prototype={}
D.c1.prototype={}
D.U.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dx.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dK.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hf.prototype={
iX:function(a){this.d.h(0,a.a)
return!1},
iT:function(a){this.d.L(0,a.a)
return!1},
shl:function(a){this.d=H.l(a,"$im8",[P.m],"$am8")}}
X.dO.prototype={}
X.hn.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.C()
u=b.b
t=q.ch
if(typeof u!=="number")return u.C()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gbi()
r=new X.bH(a,V.bK(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cj:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ek()
if(typeof u!=="number")return u.ad()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aU(a,b))
return!0},
iY:function(a){return!1},
fV:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dO(c,r.a.gbi(),b)
s.b=!0
t.K(s)
r.y=new P.ay(u,!1)
r.x=V.bK()}}
X.bG.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bG))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.bH.prototype={}
X.hN.prototype={
bD:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbi(),r=new X.bH(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cj:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bD(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ek()
if(typeof t!=="number")return t.ad()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bD(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bD(a,b,!1))
return!0},
iZ:function(a,b){return!1}}
X.i2.prototype={}
X.ee.prototype={}
X.iN.prototype={
aU:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=q.a.gbi()
r=new X.ee(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iW:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.K(this.aU(a,!0))
return!0},
iU:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.K(this.aU(a,!0))
return!0},
iV:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.K(this.aU(a,!1))
return!0}}
X.ej.prototype={
gbi:function(){var u=this.a,t=C.i.gdq(u).c
t.toString
u=C.i.gdq(u).d
u.toString
return V.m6(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dK(u,new X.bG(t,a.altKey,a.shiftKey))},
aL:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
bR:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a9(s-q,r-u)},
aV:function(a){return new V.a2(a.movementX,a.movementY)},
bM:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.ah(r.pageX)
C.c.ah(r.pageY)
p=o.left
C.c.ah(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.ah(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dx(u,new X.bG(t,a.altKey,a.shiftKey))},
bH:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fP:function(a){this.f=!0},
fC:function(a){this.f=!1},
fJ:function(a){H.h(a,"$iae")
if(H.I(this.f)&&this.bH(a))a.preventDefault()},
fT:function(a){var u
H.h(a,"$ib6")
if(!H.I(this.f))return
u=this.cS(a)
this.b.iX(u)},
fR:function(a){var u
H.h(a,"$ib6")
if(!H.I(this.f))return
u=this.cS(a)
this.b.iT(u)},
fX:function(a){var u,t,s,r,q=this
H.h(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aL(a)
if(H.I(q.x)){t=q.av(a)
s=q.aV(a)
if(q.d.cj(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.av(a)
r=q.ax(a)
if(q.c.cj(t,r))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aL(a)
u=r.av(a)
if(H.I(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ax(a)
if(r.c.b6(u,s))a.preventDefault()},
fN:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bH(a)){r.aL(a)
u=r.av(a)
if(H.I(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ax(a)
if(r.c.b6(u,s))a.preventDefault()}},
fZ:function(a){var u,t,s,r=this
H.h(a,"$iae")
r.aL(a)
u=r.av(a)
if(H.I(r.x)){t=r.aV(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()},
fL:function(a){var u,t,s,r=this
H.h(a,"$iae")
if(!r.bH(a)){r.aL(a)
u=r.av(a)
if(H.I(r.x)){t=r.aV(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ax(a)
if(r.c.b5(u,s))a.preventDefault()}},
h2:function(a){var u,t,s=this
H.h(a,"$ibf")
s.aL(a)
u=new V.a2((a&&C.D).gik(a),C.D.gil(a)).u(0,180)
if(H.I(s.x)){if(s.d.iY(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.ax(a)
if(s.c.iZ(u,t))a.preventDefault()},
h4:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ax(s.y)
s.d.fV(u,t,r)}},
hh:function(a){var u,t=this
H.h(a,"$iaZ")
t.a.focus()
t.f=!0
t.bR(a)
u=t.bM(a)
if(t.e.iW(u))a.preventDefault()},
hd:function(a){var u
H.h(a,"$iaZ")
this.bR(a)
u=this.bM(a)
if(this.e.iU(u))a.preventDefault()},
hf:function(a){var u
H.h(a,"$iaZ")
this.bR(a)
u=this.bM(a)
if(this.e.iV(u))a.preventDefault()},
sf4:function(a){this.z=H.l(a,"$ib",[[P.cU,P.N]],"$ab")}}
D.bB.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.X():u},
ao:function(a){var u
H.h(a,"$iD")
u=this.r
if(u!=null)u.K(a)},
fD:function(){return this.ao(null)},
$iac:1,
$icK:1}
D.ac.prototype={$icK:1}
D.dL.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.X():u},
ao:function(a){var u=this.x
if(u!=null)u.K(a)},
d2:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
fU:function(){return this.d2(null)},
h7:function(a){var u,t,s
H.l(a,"$ij",[D.ac],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eD(s))return!1}return!0},
fu:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gd1(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iac")
if(p instanceof D.bB)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bY()
o.saf(null)
o.saK(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.saf(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c0([n])
n.b=!0
this.ao(n)},
hb:function(a,b){var u,t,s,r=D.ac
H.l(b,"$ij",[r],"$aj")
for(u=b.gT(b),t=this.gd1();u.B();){s=u.gJ(u)
C.a.L(this.e,s)
s.gA().L(0,t)}r=new D.c1([r])
r.b=!0
this.ao(r)},
eD:function(a){var u=C.a.R(this.e,a)
return u},
sf2:function(a){this.e=H.l(a,"$ib",[D.bB],"$ab")},
shi:function(a){this.f=H.l(a,"$ib",[D.e_],"$ab")},
shH:function(a){this.r=H.l(a,"$ib",[D.e6],"$ab")},
$aj:function(){return[D.ac]},
$aa6:function(){return[D.ac]}}
D.e_.prototype={$iac:1,$icK:1}
D.e6.prototype={$iac:1,$icK:1}
V.a4.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcn()),t=C.c.p(this.b,b.gbt()),s=C.c.p(this.c,b.gbX())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a4(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcn()),t=C.c.t(this.b,b.gbt()),s=C.c.t(this.c,b.gbX())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a4(u,t,s)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.aD.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcn()),s=C.c.p(u.b,b.gbt()),r=C.c.p(u.c,b.gbX()),q=C.c.p(u.d,b.gi0(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcn()),s=C.c.t(u.b,b.gbt()),r=C.c.t(u.c,b.gbX()),q=C.c.t(u.d,b.gi0(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(t,s,r,q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.fV.prototype={}
V.dS.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dS))return!1
u=b.a
t=$.R().a
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
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cm(H.d([q.a,q.d,q.r],p),3,0),n=V.cm(H.d([q.b,q.e,q.x],p),3,0),m=V.cm(H.d([q.c,q.f,q.y],p),3,0)
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
ac:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
dM:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.R().a)return V.dT()
u=1/b1
t=-n
s=-a0
return V.bp((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
C:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bp(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bq:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.R().a
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
F:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cm(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cm(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cm(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cm(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
t:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.a5.prototype={
p:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
C:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.ba.prototype={
p:function(a,b){var u=this
return new V.ba(C.c.p(u.a,b.gji(b)),C.c.p(u.b,b.gjj(b)),C.c.p(u.c,b.gjk(b)),C.c.p(u.d,b.gjh(b)))},
t:function(a,b){var u=this
return new V.ba(C.c.t(u.a,b.gji(b)),C.c.t(u.b,b.gjj(b)),C.c.t(u.c,b.gjk(b)),C.c.t(u.d,b.gjh(b)))},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.e2.prototype={
gat:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e2))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.a2.prototype={
cg:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gc3(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gc4(b)
if(typeof t!=="number")return t.p()
return new V.a2(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gc3(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gc4(b)
if(typeof t!=="number")return t.t()
return new V.a2(s,C.c.t(t,u))},
C:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.C()
u=this.b
if(typeof u!=="number")return u.C()
return new V.a2(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.R().a){u=$.mk
return u==null?$.mk=new V.a2(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.a2(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=this.a
s=$.R()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.K.prototype={
cg:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
ay:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.K(-this.a,-this.b,-this.c)},
C:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.R().a)return V.d2()
return new V.K(this.a/b,this.b/b,this.c/b)},
dN:function(){var u=$.R().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fC.prototype={
by:function(a){var u=V.pT(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.X():u},
X:function(a){var u=this.y
if(u!=null)u.K(a)},
seh:function(a,b){},
sdO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.R().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.by(u)}s=new D.U("maximumLocation",s,t.b,[P.q])
s.b=!0
t.X(s)}},
sdQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.R().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.by(u)}s=new D.U("minimumLocation",s,t.c,[P.q])
s.b=!0
t.X(s)}},
sa_:function(a,b){var u,t=this
b=t.by(b)
u=t.d
if(!(Math.abs(u-b)<$.R().a)){t.d=b
u=new D.U("location",u,b,[P.q])
u.b=!0
t.X(u)}},
sdP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.R().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.U("maximumVelocity",r,a,[P.q])
r.b=!0
s.X(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.R().a)){u.f=a
t=new D.U("velocity",t,a,[P.q])
t.b=!0
u.X(t)}},
sdr:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.R().a)){this.x=a
u=new D.U("dampening",u,a,[P.q])
u.b=!0
this.X(u)}},
aE:function(a,b){var u,t,s,r=this,q=r.f,p=$.R().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.R().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dz.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.X():u},
b8:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cE.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.X():u},
X:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.K(a)},
al:function(){return this.X(null)},
fs:function(a,b){var u,t,s,r,q,p,o,n=U.ak
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gbd(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.n(t,s)
if(o.a==null)o.saf(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.X(n)},
h9:function(a,b){var u,t,s=U.ak
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gbd();u.B();)u.gJ(u).gA().L(0,t)
s=new D.c1([s])
s.b=!0
this.X(s)},
b8:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.r(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.b8(0,b,c)
if(t!=null)u=u==null?t:t.C(0,u)}}s.f=u==null?V.dT():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.S(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.ek.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.X():u},
X:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.K(a)},
al:function(){return this.X(null)},
i3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gfk())
u=s.a.c
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfm())
u=s.a.c
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.gfo())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.gff())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfh())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.ghQ())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.ghO())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.ghM())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.I(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.I(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.a2(u,t)},
fl:function(a){var u=this
a=H.A(H.h(a,"$iD"),"$ibH")
if(!J.S(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fn:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibH")
if(!H.I(n.cx))return
if(H.I(n.ch)){u=a.d.t(0,a.y)
u=new V.a2(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.I(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.an(new V.a2(t.a,t.b).C(0,2).u(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.an(new V.a2(s.a,s.b).C(0,2).u(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa_(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.t(0,a.z)
n.dx=n.an(new V.a2(t.a,t.b).C(0,2).u(0,u.gat()))}n.al()},
fp:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.I(r.cx))return
r.cx=!1
if(H.I(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sY(-t*10*u)
r.al()}},
fg:function(a){var u=this
if(H.A(H.h(a,"$iD"),"$idO").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fi:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibH")
if(!J.S(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.an(new V.a2(s.a,s.b).C(0,2).u(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa_(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.t(0,a.z)
n.dx=n.an(new V.a2(t.a,t.b).C(0,2).u(0,u.gat()))
n.al()},
hR:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hP:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$iee")
if(!H.I(n.cx))return
if(H.I(n.ch)){u=a.d.t(0,a.y)
u=new V.a2(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.I(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.an(new V.a2(t.a,t.b).C(0,2).u(0,u.gat()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.an(new V.a2(s.a,s.b).C(0,2).u(0,u.gat()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa_(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.t(0,a.z)
n.dx=n.an(new V.a2(t.a,t.b).C(0,2).u(0,u.gat()))}n.al()},
hN:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.I(r.cx))return
r.cx=!1
if(H.I(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.G(u)
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
r.fr=q.C(0,V.bp(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iak:1}
M.dD.prototype={
au:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.K(a)},
eE:function(){return this.au(null)},
fF:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gam(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.saf(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saf(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c0([n])
n.b=!0
this.au(n)},
fH:function(a,b){var u,t,s=E.ao
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gam();u.B();)u.gJ(u).gA().L(0,t)
s=new D.c1([s])
s.b=!0
this.au(s)},
se7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().L(0,t.gam())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gam())
s=new D.U("technique",u,t.d,[O.c9])
s.b=!0
t.au(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.X():u},
aQ:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.e1(a1.d)
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
o=C.c.ah(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.c.ah(p*r)
p=C.c.ah(q.c*s)
a2.c=p
q=C.c.ah(q.d*r)
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
i=V.bp(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.e0(i)
t=$.m2
if(t==null){t=V.nZ()
q=V.mo()
p=$.ml
if(p==null)p=$.ml=new V.K(0,0,-1)
h=p.u(0,Math.sqrt(p.E(p)))
q=q.ay(h)
g=q.u(0,Math.sqrt(q.E(q)))
f=h.ay(g)
e=new V.K(t.a,t.b,t.c)
d=g.S(0).E(e)
c=f.S(0).E(e)
b=h.S(0).E(e)
t=V.bp(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m2=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.b8(0,a2,u)
if(a0!=null)a=a0.C(0,a)}a2.db.e0(a)
u=a1.d
if(u!=null)u.aE(0,a2)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.B();)u.d.aE(0,a2)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.B();)u.d.aQ(a2)
a1.b.toString
a2.cy.ck()
a2.db.ck()
a1.c.toString
a2.e_()},
seW:function(a,b){this.e=H.l(b,"$ia6",[E.ao],"$aa6")},
$iq0:1}
A.dt.prototype={}
A.fr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ir:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
im:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.an.prototype={
gai:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.an))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hu.prototype={
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
A.p8(c3,u)
A.pa(c3,u)
A.p9(c3,u)
A.pc(c3,u)
A.pd(c3,u)
A.pb(c3,u)
A.pe(c3,u)
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
m=A.p7(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cT(n,35633)
b8.f=b8.cT(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.I(H.lu(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.C("Failed to link shader: "+H.i(l)))}b8.hB()
b8.hD()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.V(0,"invViewMat"),"$iaB")
if(t)b8.dy=H.A(b8.y.V(0,"objMat"),"$iaB")
if(r)b8.fr=H.A(b8.y.V(0,"viewObjMat"),"$iaB")
b8.fy=H.A(b8.y.V(0,"projViewObjMat"),"$iaB")
if(c3.ry)b8.k1=H.A(b8.y.V(0,"txt2DMat"),"$id0")
if(c3.x1)b8.k2=H.A(b8.y.V(0,"txtCubeMat"),"$iaB")
if(c3.x2)b8.k3=H.A(b8.y.V(0,"colorMat"),"$iaB")
b8.seS(H.d([],[A.aB]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.V(0,"bendMatCount"),"$iaL")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.C(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaB"))}}if(c3.a.a)b8.r2=H.A(b8.y.V(0,"emissionClr"),"$ia_")
if(c3.b.a)b8.x1=H.A(b8.y.V(0,"ambientClr"),"$ia_")
if(c3.c.a)b8.y2=H.A(b8.y.V(0,"diffuseClr"),"$ia_")
if(c3.d.a)b8.du=H.A(b8.y.V(0,"invDiffuseClr"),"$ia_")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dw=H.A(b8.y.V(0,"shininess"),"$iah")
if(t)b8.dv=H.A(b8.y.V(0,"specularClr"),"$ia_")}if(c3.cy){b8.dz=H.A(b8.y.V(0,"envSampler"),"$icd")
if(c3.r.a)b8.dA=H.A(b8.y.V(0,"reflectClr"),"$ia_")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dB=H.A(b8.y.V(0,"refraction"),"$iah")
if(t)b8.dC=H.A(b8.y.V(0,"refractClr"),"$ia_")}}if(c3.y.a)b8.dD=H.A(b8.y.V(0,"alpha"),"$iah")
t=P.m
s=[t,A.aL]
b8.sf1(new H.a1(s))
b8.seF(new H.a1([t,[P.b,A.ca]]))
b8.shj(new H.a1(s))
b8.shk(new H.a1([t,[P.b,A.cb]]))
b8.shG(new H.a1(s))
b8.seG(new H.a1([t,[P.b,A.ce]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.ca],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ad()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.A(j,"$ia_")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.A(c,"$ia_")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.C(c0+d+c1))
H.A(b,"$ia_")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.C(c0+d+c1))
H.A(j,"$ia_")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.C(c0+d+c1))
H.A(c,"$ia_")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$icc")
a2=b}else a2=b9
C.a.h(e,new A.ca(a1,a0,a,j,c,a2))}b8.c6.k(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}for(t=c3.Q,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.A(j,"$ia_")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.A(c,"$ia_")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$ia_")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$id0")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$icd")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$icd")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$id_")
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
b1=b0}C.a.h(e,new A.cb(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c8.k(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}for(t=c3.ch,s=t.length,r=[A.ce],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
H.A(j,"$ia_")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.C(c0+o+c1))
H.A(c,"$ia_")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.C(c0+o+c1))
H.A(b,"$ia_")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.C(c0+o+c1))
H.A(a3,"$ia_")
if(typeof g!=="number")return g.ad()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$ia_")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.C(c0+o+c1))
H.A(a8,"$ia_")
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
H.A(a5,"$id_")
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
H.A(a5,"$icc")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.C(c0+o+c1))
H.A(a5,"$icc")
a6=a5}else a6=b9
C.a.h(e,new A.ce(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.ca.k(0,g,e)
q=b8.c9
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.C(c0+o+c1))
q.k(0,g,H.h(j,"$iaL"))}}},
hz:function(a,b){},
seS:function(a){this.r1=H.l(a,"$ib",[A.aB],"$ab")},
sf1:function(a){this.c5=H.l(a,"$iy",[P.m,A.aL],"$ay")},
seF:function(a){this.c6=H.l(a,"$iy",[P.m,[P.b,A.ca]],"$ay")},
shj:function(a){this.c7=H.l(a,"$iy",[P.m,A.aL],"$ay")},
shk:function(a){this.c8=H.l(a,"$iy",[P.m,[P.b,A.cb]],"$ay")},
shG:function(a){this.c9=H.l(a,"$iy",[P.m,A.aL],"$ay")},
seG:function(a){this.ca=H.l(a,"$iy",[P.m,[P.b,A.ce]],"$ay")}}
A.aE.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aH.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aI.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hx.prototype={
i:function(a){return this.b0}}
A.ca.prototype={}
A.cb.prototype={}
A.ce.prototype={}
A.cS.prototype={
ey:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.lu(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hB:function(){var u,t,s,r=this,q=H.d([],[A.dt]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dt(p,t.name,s))}r.x=new A.fr(q)},
hD:function(){var u,t,s,r=this,q=H.d([],[A.ef]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ij(t.type,t.size,t.name,s))}r.y=new A.j_(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.aL(u,b,c)
else return A.li(u,this.r,b,a,c)},
eZ:function(a,b,c){var u=this.a
if(a===1)return new A.cc(u,b,c)
else return A.li(u,this.r,b,a,c)},
f_:function(a,b,c){var u=this.a
if(a===1)return new A.cd(u,b,c)
else return A.li(u,this.r,b,a,c)},
bh:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
ij:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iW(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.d_(u.a,c,d)
case 35667:return new A.iX(u.a,c,d)
case 35668:return new A.iY(u.a,c,d)
case 35669:return new A.iZ(u.a,c,d)
case 35674:return new A.j0(u.a,c,d)
case 35675:return new A.d0(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.eZ(b,c,d)
case 35680:return u.f_(b,c,d)
case 35670:throw H.c(u.bh("BOOL",c))
case 35671:throw H.c(u.bh("BOOL_VEC2",c))
case 35672:throw H.c(u.bh("BOOL_VEC3",c))
case 35673:throw H.c(u.bh("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ef.prototype={}
A.j_.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
V:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aL.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shT:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d_.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d0.prototype={
ak:function(a){var u=new Float32Array(H.ch(H.l(a,"$ib",[P.q],"$ab")))
C.d.ed(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aB.prototype={
ak:function(a){var u=new Float32Array(H.ch(H.l(a,"$ib",[P.q],"$ab")))
C.d.ee(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.cc.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.cd.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kn.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ci(s.b,b).ci(s.d.ci(s.c,b),c)
a.sa_(0,new V.a5(r.a,r.b,r.c))
a.se8(r.u(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sdl(new V.ba(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kz.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kB.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.G(p)
s=-s*p
u=r*p
a.sa_(0,new V.a5(s,u,q))
u=new V.K(s,u,q)
a.se8(u.u(0,Math.sqrt(u.E(u))))
a.sdl(new V.ba(1-c,2+c,-1,-1))},
$S:7}
F.kC.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kD.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kW.prototype={
$2:function(a,b){return 0},
$S:20}
F.kX.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.E(t))).C(0,this.b+s)
a.sa_(0,new V.a5(s.a,s.b,s.c))},
$S:7}
F.kZ.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kK.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.kA.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lI(n.$1(o),m)
m=J.no(J.lI(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.E(m)))
n=$.mm
if(n==null){n=new V.K(1,0,0)
$.mm=n
t=n}else t=n
n=u.ay(!J.S(u,t)?V.mp():t)
s=n.u(0,Math.sqrt(n.E(n)))
n=s.ay(u)
t=n.u(0,Math.sqrt(n.E(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.C(0,n*m)
m=s.C(0,q*m)
a.sa_(0,J.nn(l,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.L(u.a.a.d.b,u)
u.a.a.Z()}u.bO()
u.bP()
u.hp()},
bS:function(a){this.a=a
C.a.h(a.d.b,this)},
bT:function(a){this.b=a
C.a.h(a.d.c,this)},
hA:function(a){this.c=a
C.a.h(a.d.d,this)},
bO:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
bP:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hp:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eR:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d2()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dN())return
return s.u(0,Math.sqrt(s.E(s)))},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.E(r)))
r=t.t(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.ay(r.u(0,Math.sqrt(r.E(r))))
return r.u(0,Math.sqrt(r.E(r)))},
c_:function(){var u,t=this
if(t.d!=null)return!0
u=t.eR()
if(u==null){u=t.eV()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eQ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d2()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dN())return
return s.u(0,Math.sqrt(s.E(s)))},
eU:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.R().a){l=d.t(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.t(0,g).C(0,p).p(0,g).t(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.E(l)))
l=o.ay(q)
l=l.u(0,Math.sqrt(l.E(l))).ay(o)
q=l.u(0,Math.sqrt(l.E(l)))}return q},
bY:function(){var u,t=this
if(t.e!=null)return!0
u=t.eQ()
if(u==null){u=t.eU()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gib:function(a){var u=this
if(J.S(u.a,u.b))return!0
if(J.S(u.b,u.c))return!0
if(J.S(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.b.ab(J.at(s.a.e),0)+", "+C.b.ab(J.at(s.b.e),0)+", "+C.b.ab(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.F("")}}
F.fY.prototype={}
F.ip.prototype={
b2:function(a,b,c){var u,t=b.a
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
F.bo.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.L(u.a.a.c.b,u)
u.a.a.Z()}u.bO()
u.bP()},
bS:function(a){this.a=a
C.a.h(a.c.b,this)},
bT:function(a){this.b=a
C.a.h(a.c.c,this)},
bO:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
bP:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gb_())return a+"disposed"
return a+C.b.ab(J.at(this.a.e),0)+", "+C.b.ab(J.at(this.b.e),0)},
N:function(){return this.F("")}}
F.hh.prototype={}
F.iU.prototype={
b2:function(a,b,c){var u,t=b.a
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
F.bJ.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ab(J.at(u.e),0)},
N:function(){return this.F("")}}
F.e4.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.X():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.v()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ig())}h.a.v()
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
o=new F.bJ()
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
F.nQ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
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
if(g!=null)g.ag(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
iK:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.ai];u.length!==0;){t=C.a.giw(u)
C.a.e2(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.e2(u,r)}}if(s.length>1)b.b3(s)}}p.a.v()
p.c.co()
p.d.co()
p.b.j2()
p.c.cp(new F.iU())
p.d.cp(new F.ip())
o=p.e
if(o!=null)o.ag(0)},
bU:function(){this.iK(new F.jm(),new F.hV())},
cb:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cb()
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
if(!J.S(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.ag(0)},
i9:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bv()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bu().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.bT().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bs().a)!==0)++s
r=a3.gcz(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dv])
for(n=0,m=0;m<s;++m){l=a3.i2(m)
k=l.gcz(l)
C.a.k(o,m,new Z.dv(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iH(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ch(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dw(new Z.em(a0,f),o,a3)
e.sfa(H.d([],[Z.bE]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)}b=Z.ll(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.v()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.v()
C.a.h(d,c.e)}b=Z.ll(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
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
C.a.h(d,c.e)}b=Z.ll(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.K(null)},
$iq1:1}
F.ih.prototype={
hX:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ai],"$ab")
u=H.d([],[F.a8])
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
hY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ai],"$ab")
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
if(a.b2(0,p,n)){p.aZ()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gib(s)
if(t)s.aZ()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c_())s=!1
return s},
bZ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bY())s=!1
return s},
cb:function(){var u,t,s,r,q,p
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
F:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sf5:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.ii.prototype={
gn:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.S(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.N()},
F:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.F("")},
sfb:function(a){this.b=H.l(a,"$ib",[F.bo],"$ab")}}
F.ij.prototype={
gn:function(a){return this.b.length},
j2:function(){var u,t,s
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
F:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
N:function(){return this.F("")},
sbL:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
F.ai.prototype={
c2:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.el(u.cx,r,o,t,s,q,p,a,n)},
ig:function(){return this.c2(null)},
sa_:function(a,b){var u
if(!J.S(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdR:function(a){var u
a=a==null?null:a.u(0,Math.sqrt(a.E(a)))
if(!J.S(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
se8:function(a){var u
if(!J.S(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdl:function(a){var u
if(!J.S(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
iH:function(a){var u,t,s=this
if(a.q(0,$.bv())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bu())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bt())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.bS())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.q(0,$.bT())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dm())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.q(0,$.dn())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.cs()))return H.d([s.ch],[P.q])
else if(a.q(0,$.bs())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
c_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d2()
t.d.G(0,new F.jr(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
bY:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d2()
t.d.G(0,new F.jq(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ab(J.at(s.e),0))
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
N:function(){return this.F("")}}
F.jr.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jq.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jh.prototype={
v:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
hZ:function(a,b,c,d,e,f){var u=F.el(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
bZ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bY()
return!0},
ia:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.S(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var u,t,s,r
this.v()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
N:function(){return this.F("")},
shU:function(a){this.c=H.l(a,"$ib",[F.ai],"$ab")}}
F.ji.prototype={
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
C.a.G(u.c,new F.jj(u,b))
C.a.G(u.d,new F.jk(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sf6:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sf7:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sf8:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.jj.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:6}
F.jk.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:6}
F.jl.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfc:function(a){this.b=H.l(a,"$ib",[F.bo],"$ab")},
sfd:function(a){this.c=H.l(a,"$ib",[F.bo],"$ab")}}
F.jn.prototype={}
F.jm.prototype={
b2:function(a,b,c){return J.S(b.f,c.f)}}
F.jo.prototype={}
F.hV.prototype={
b3:function(a){var u,t,s,r
H.l(a,"$ib",[F.ai],"$ab")
u=V.d2()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.E(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdR(u)
return}}
F.jp.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbL:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
O.dQ.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.X():u},
a8:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.K(a)},
eJ:function(){return this.a8(null)},
d6:function(a){H.h(a,"$iD")
this.a=null
this.a8(a)},
hu:function(){return this.d6(null)},
fw:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c0([u])
u.b=!0
this.a8(u)},
fA:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c1([u])
u.b=!0
this.a8(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=P.m,g=new H.a1([h,h])
for(u=i.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s].f!=null
q=r?1:0
p=g.j(0,r?1:0)
g.k(0,q,p==null?1:p)}o=H.d([],[A.aE])
g.G(0,new O.hB(i,o))
C.a.bv(o,new O.hC())
n=new H.a1([h,h])
for(u=i.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){m=u[s]
r=m.gaY()
q=n.j(0,m.gaY())
n.k(0,r,q==null?1:q)}l=H.d([],[A.aH])
n.G(0,new O.hD(i,l))
C.a.bv(l,new O.hE())
k=new H.a1([h,h])
for(h=i.dx.r,u=h.length,s=0;s<h.length;h.length===u||(0,H.u)(h),++s){m=h[s]
t=m.gaY()
r=k.j(0,m.gaY())
k.k(0,t,r==null?1:r)}j=H.d([],[A.aI])
k.G(0,new O.hF(i,j))
C.a.bv(j,new O.hG())
h=C.e.a5(i.e.a.length+3,4)
i.dy.e
return A.nX(!1,!1,!1,!1,h*4,i.f.c,i.r.c,i.x.c,i.y.c,i.z.c,i.Q.c,i.cx.c,i.cy.c,i.db.c,o,l,j)},
eP:function(a,b){H.l(a,"$ib",[T.cX],"$ab")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
aE:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.B();){t=u.d
t.toString
s=$.jg
t.a=s==null?$.jg=new V.K(0,0,1):s
s=$.jf
t.d=s==null?$.jf=new V.K(0,1,0):s
s=$.je
t.e=s==null?$.je=new V.K(-1,0,0):s
s=t.b
if(s!=null){r=s.b8(0,b,t)
if(r!=null){s=r.bq(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(q*q+p*p+o*o))
o=r.bq(t.d)
p=o.a
q=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+q*q+s*s))
s=r.bq(t.e)
q=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(q*q+p*p+o*o))}}}},
j4:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cQ()
u=b6.fr.j(0,b5.b0)
if(u==null){u=A.nW(b5,b6.a)
t=u.b
if(t.length===0)H.z(P.C("May not cache a shader with no name."))
if(b6.fr.bj(0,t))H.z(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dt
b5=b7.e
if(!(b5 instanceof Z.dw))b5=b7.e=null
if(b5==null||!b5.d.q(0,r)){b5=s.k3
if(b5)b7.d.ar()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bZ()
p.a.bZ()
p=p.e
if(p!=null)p.ag(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.ia()
o=o.e
if(o!=null)o.ag(0)}m=b7.d.i9(new Z.jt(b6.a),r)
m.aP($.bv()).e=b4.a.Q.c
if(b5)m.aP($.bu()).e=b4.a.cx.c
if(q)m.aP($.bt()).e=b4.a.ch.c
if(s.r1)m.aP($.bS()).e=b4.a.cy.c
if(p)m.aP($.bT()).e=b4.a.db.c
if(s.rx)m.aP($.bs()).e=b4.a.dx.c
b7.e=m}b5=T.cX
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.ir()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga0(o)
q=q.dy
q.toString
q.ak(o.ac(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga0(o)
n=b6.dx
n=b6.cx=o.C(0,n.ga0(n))
o=n}q=q.fr
q.toString
q.ak(o.ac(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gj0()
n=b6.dx
n=b6.ch=o.C(0,n.ga0(n))
o=n}q=q.fy
q.toString
q.ak(o.ac(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ak(C.j.ac(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ak(C.j.ac(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ak(C.j.ac(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.d.br(q.a,q.d,k)
for(q=[P.q],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$iap")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.ch(H.l(n.ac(0,!0),"$ib",q,"$ab")))
C.d.ee(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.du
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dw
C.d.a3(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dv
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
g=new H.a1([o,o])
for(o=b4.dx.e,n=o.length,f=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.f!=null?1:0
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dp(b4.a.c6.j(0,c),b)
a0=h.bq(d.a)
a1=a0.a
a2=a0.b
a3=a0.c
a3=a0.u(0,Math.sqrt(a1*a1+a2*a2+a3*a3))
a2=a.e
a1=a3.a
a0=a3.b
a3=a3.c
C.d.U(a2.a,a2.d,a1,a0,a3)
a3=d.c
a0=a.f
C.d.U(a0.a,a0.d,a3.a,a3.b,a3.c)
if(d.f!=null){a0=d.a
a1=a.d
a1.toString
a2=a0.a
a3=a0.b
a0=a0.c
C.d.U(a1.a,a1.d,a2,a3,a0)
a0=d.d
a3=a.b
a3.toString
a2=a0.a
a1=a0.b
a0=a0.c
C.d.U(a3.a,a3.d,a2,a1,a0)
a0=d.e
a1=a.c
a1.toString
a2=a0.a
a3=a0.b
a0=a0.c
C.d.U(a1.a,a1.d,a2,a3,a0)
a0=d.f
H.l(l,"$ib",f,"$ab")
if(a0!=null)if(!C.a.R(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.f
a1=a0!=null
if(a1&&a0.d){a2=a.r
a2.toString
if(!a1||!a0.d)a2.a.uniform1i(a2.d,0)
else{a0=a0.a
a2.a.uniform1i(a2.d,a0)}}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c5.j(0,n)
C.d.br(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
a4=new H.a1([o,o])
for(o=b4.dx.f,n=o.length,f=[b5],a0=[P.q],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gaY()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dp(b4.a.c8.j(0,c),b)
a5=h.C(0,d.ga0(d))
a1=d.ga0(d)
a2=$.cP
a1=a1.cs(a2==null?$.cP=new V.a5(0,0,0):a2)
a2=a.b
C.d.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=$.cP
a1=a5.cs(a1==null?$.cP=new V.a5(0,0,0):a1)
a2=a.c
C.d.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=d.gaO(d)
a2=a.e
C.d.U(a2.a,a2.d,a1.a,a1.b,a1.c)
d.gaD()
a1=a5.dM(0)
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
i=new Float32Array(H.ch(H.l(new V.dS(a2,a3,a6,a7,a8,a9,b0,b1,a1).ac(0,!0),"$ib",a0,"$ab")))
C.d.ed(b2.a,b2.d,!1,i)
d.gaD()
a1=d.gaD()
H.l(l,"$ib",f,"$ab")
if(!C.a.R(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gaD()
a2=a1.gb1(a1)
if(a2){a2=a.f
a2.toString
a3=a1.gb1(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.giB(a1)
a2.a.uniform1i(a2.d,a1)}}d.gaS()
a1=d.gem()
a2=a.x
a2.toString
a3=a1.gc3(a1)
a6=a1.gc4(a1)
a7=a1.gip()
a1=a1.gio()
C.d.ec(a2.a,a2.d,a3,a6,a7,a1)
a1=d.gaS()
if(!C.a.R(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gaS()
a2=a1.gb1(a1)
if(a2){a2=a.r
a2.toString
a3=a1.gb1(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.giB(a1)
a2.a.uniform1i(a2.d,a1)}}if(d.gis()){a1=d.gi4()
a2=a.y
C.d.a3(a2.a,a2.d,a1)
a1=d.gi5()
a2=a.z
C.d.a3(a2.a,a2.d,a1)
a1=d.gi6()
a2=a.Q
C.d.a3(a2.a,a2.d,a1)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=b4.a.c7.j(0,n)
C.d.br(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
b3=new H.a1([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gaY()
b=b3.j(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.dp(b4.a.ca.j(0,c),b)
f=d.gj_(d)
a0=a.b
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gjp(d).jH()
a0=a.c
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=h.cs(d.gj_(d))
a0=a.d
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gaO(d)
a0=a.e
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
d.gaD()
f=d.gjK()
a0=a.f
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gcq(d)
a0=a.r
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gjI()
a0=a.x
C.d.a3(a0.a,a0.d,f)
f=d.gjJ()
a0=a.y
C.d.a3(a0.a,a0.d,f)
d.gaD()
f=d.gaD()
H.l(l,"$ib",b5,"$ab")
if(!C.a.R(l,f)){f.a=l.length
C.a.h(l,f)}f=d.gaD()
a0=f.gb1(f)
if(a0){a0=a.dx
a0.toString
a1=f.d
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.a
a0.a.uniform1i(a0.d,f)}}d.gaS()
f=d.gem()
a0=a.z
a0.toString
a1=f.gc3(f)
a2=f.gc4(f)
a3=f.gip()
f=f.gio()
C.d.ec(a0.a,a0.d,a1,a2,a3,f)
f=d.gaS()
if(!C.a.R(l,f)){f.a=l.length
C.a.h(l,f)}f=d.gaS()
a0=f.gb1(f)
if(a0){a0=a.dy
a0.toString
a1=f.d
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.a
a0.a.uniform1i(a0.d,f)}}if(d.gjq()){f=d.gjo()
a0=a.Q
C.d.a3(a0.a,a0.d,f)
f=d.gjn()
a0=a.ch
C.d.a3(a0.a,a0.d,f)}if(d.gis()){f=d.gi4()
a0=a.cx
C.d.a3(a0.a,a0.d,f)
f=d.gi5()
a0=a.cy
C.d.a3(a0.a,a0.d,f)
f=d.gi6()
a0=a.db
C.d.a3(a0.a,a0.d,f)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c9.j(0,o)
C.d.br(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga0(q).dM(0)}b5=b5.id
b5.toString
b5.ak(q.ac(0,!0))}if(s.cy){b4.eP(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hz(b5.dz,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dA
C.d.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dB
C.d.a3(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dC
C.d.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dD
C.d.a3(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){b5=l[j]
if(!b5.c&&b5.d){b5.c=!0
p.activeTexture(33984+b5.a)
p.bindTexture(3553,b5.b)}}b5=b7.e
b5.bV(b6)
b5.aQ(b6)
b5.jg(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.im()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().b0},
seT:function(a){this.e=H.l(a,"$ia6",[V.ap],"$aa6")}}
O.hB.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aE(a,C.e.a5(b+3,4)*4))},
$S:12}
O.hC.prototype={
$2:function(a,b){H.h(a,"$iaE")
H.h(b,"$iaE")
return J.l1(a.a,b.a)},
$S:50}
O.hD.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aH(a,C.e.a5(b+3,4)*4))},
$S:12}
O.hE.prototype={
$2:function(a,b){H.h(a,"$iaH")
H.h(b,"$iaH")
return J.l1(a.a,b.a)},
$S:51}
O.hF.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.e.a5(b+3,4)*4))},
$S:12}
O.hG.prototype={
$2:function(a,b){H.h(a,"$iaI")
H.h(b,"$iaI")
return J.l1(a.a,b.a)},
$S:52}
O.hv.prototype={
aw:function(){var u,t=this
t.cB()
u=t.f
if(!(Math.abs(u-1)<$.R().a)){t.f=1
u=new D.U(t.b,u,1,[P.q])
u.b=!0
t.a.a8(u)}}}
O.dR.prototype={
aw:function(){},
d9:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aw()
u=s.a
u.a=null
u.a8(null)}}}
O.hw.prototype={}
O.b8.prototype={
d8:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.U(s.b+".color",u,a,[V.a4])
t.b=!0
s.a.a8(t)}},
aw:function(){this.cB()
this.d8(new V.a4(1,1,1))},
saO:function(a,b){this.d9(new A.an(!0,!1,!1))
this.d8(b)}}
O.hy.prototype={}
O.hz.prototype={
aw:function(){var u,t=this
t.cC()
u=t.ch
if(!(Math.abs(u-1)<$.R().a)){t.ch=1
u=new D.U(t.b+".refraction",u,1,[P.q])
u.b=!0
t.a.a8(u)}}}
O.hA.prototype={
da:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.R().a)){u.ch=a
t=new D.U(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.a8(t)}},
aw:function(){this.cC()
this.da(100)}}
O.c9.prototype={}
T.cX.prototype={}
T.eb.prototype={}
T.iG.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.X():u}}
T.iH.prototype={
iI:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iG()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.aa(u,"load",H.n(new T.iI(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hv:function(a,b,c){var u,t,s,r
b=V.lC(b)
u=V.lC(a.width)
t=V.lC(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l4()
s.width=u
s.height=t
r=H.h(C.i.ej(s,"2d"),"$icw")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pr(r.getImageData(0,0,s.width,s.height))}}}
T.iI.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hv(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.d.ja(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.iq()}++s.e},
$S:11}
V.bi.prototype={
aA:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dP.prototype={
aA:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aA(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa4:function(a){this.a=H.l(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aA:function(a,b){return!this.er(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}}
V.i6.prototype={
aA:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c5(this.a),t=H.c5(this.b)
return u+".."+t},
$iaz:1}
V.ig.prototype={
ex:function(a){var u,t
if(a.a.length<=0)throw H.c(P.C("May not create a SetMatcher with zero characters."))
u=new H.a1([P.m,P.P])
for(t=new H.cH(a,a.gn(a),[H.as(a,"x",0)]);t.B();)u.k(0,t.d,!0)
this.shy(u)},
aA:function(a,b){return this.a.bj(0,b)},
i:function(a){var u=this.a
return P.cV(u.ga2(u),0,null)},
shy:function(a){this.a=H.l(a,"$iy",[P.m,P.P],"$ay")},
$iaz:1}
V.cT.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cZ(this.a.l(0,b))
r.sa4(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aA(0,a))return r}return},
i:function(a){return this.b},
shS:function(a){this.c=H.l(a,"$ib",[V.cZ],"$ab")}}
V.ed.prototype={
i:function(a){var u=H.lE(this.b,"\n","\\n"),t=H.lE(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cY.prototype={
aC:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shq:function(a){var u=P.f
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.iL.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cT(this,b)
u.shS(H.d([],[V.cZ]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cY(a)
u=P.f
t.shq(new H.a1([u,u]))
this.b.k(0,a,t)}return t},
eb:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ed]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.iv(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cV(i,0,m)
throw H.c(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cV(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ed(n==null?o.b:n,p,s)}++s}}},
shI:function(a){this.a=H.l(a,"$iy",[P.f,V.cT],"$ay")},
shL:function(a){this.b=H.l(a,"$iy",[P.f,V.cY],"$ay")}}
V.cZ.prototype={
i:function(a){return this.b.b+": "+this.cA(0)}}
X.dy.prototype={$icK:1}
X.h4.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.X():u}}
X.dZ.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.X():u},
aI:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.K(a)},
eM:function(){return this.aI(null)},
sb4:function(a){var u,t,s=this
if(!J.S(s.b,a)){u=s.b
if(u!=null)u.gA().L(0,s.gcG())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcG())
u=new D.U("mover",t,s.b,[U.ak])
u.b=!0
s.aI(u)}},
$icK:1,
$idy:1}
X.e9.prototype={}
V.bz.prototype={
bc:function(a){this.b=new P.h8(C.Q)
this.c=null
this.sbF(H.d([],[[P.b,W.aF]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aF]))
u=a.split("\n")
for(l=u.length,t=[W.aF],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.eY(q,0,q.length)
n=o==null?q:o
C.O.el(p,H.lE(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gas(m.d),p)}},
dY:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbF(H.d([],[[P.b,W.aF]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bk():t).eb(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bo(t[r])},
sbF:function(a){this.d=H.l(a,"$ib",[[P.b,W.aF]],"$ab")}}
V.kV.prototype={
$1:function(a){var u
H.h(a,"$ibc")
u=C.c.ea(this.a.giz(),2)
if(u!=="0.00")P.lD(u+" fps")},
$S:54}
V.fL.prototype={
bo:function(a){var u=this
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
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iM()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bi())
t=a1.l(0,r).m(0,h)
u=V.v(new H.t("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.v(new H.t("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.v(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bi())
t=a1.l(0,r).m(0,e)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.au()
s=[V.az]
t.sa4(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.v(new H.t("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.au()
t.sa4(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.v(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.v(new H.t(" \n\t"))
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
t.aC(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aC(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aC(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h5.prototype={
bo:function(a){var u=this
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
bk:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iM()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Z("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Z("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.v(new H.t(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.v(new H.t(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.v(new H.t("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.v(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bi())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa4(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sa4(H.d([],s))
C.a.h(t.a,u)
t=V.v(new H.t("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.v(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.v(new H.t(" \n\t"))
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
u.aC(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aC(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aC(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h6.prototype={
bo:function(a){var u=this,t="#111"
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
bk:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iM()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.Z("a","z")
C.a.h(u.a,t)
t=V.Z("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.Z("0","9")
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.v(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.v(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.v(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.v(new H.t('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.v(new H.t("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.v(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bi())
C.a.h(l.l(0,s).m(0,m).a,new V.bi())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sa4(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.v(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Z("a","z")
C.a.h(t.a,u)
u=V.Z("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.O("Symbol")
u=l.l(0,n)
u.d=u.a.O("String")
u=l.l(0,r)
t=u.a.O(r)
u.d=t
t.aC(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.i0.prototype={
dY:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbF(H.d([],[[P.b,W.aF]]))
this.M(C.a.m(b,"\n"),"#111")},
bo:function(a){},
bk:function(){return}}
V.i4.prototype={
dh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mg().gcm().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.df(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lK(m.c).h(0,q)
o=W.nK("radio")
o.checked=s
o.name=u
u=W.o
W.aa(o,"change",H.n(new V.i5(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lK(m.c).h(0,r.createElement("br"))},
aX:function(a,b,c){return this.dh(a,b,c,!1)},
df:function(a){var u,t,s=P.mg(),r=P.f,q=P.nS(s.gcm(),r,r)
q.k(0,this.a,a)
u=s.e3(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k6([],[]).ct(""),"",t)}}
V.i5.prototype={
$1:function(a){var u=this
if(H.I(u.b.checked)){u.c.$0()
u.a.df(u.d)}},
$S:11}
V.ik.prototype={
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
W.aa(q,"scroll",H.n(new V.im(o),{func:1,ret:-1,args:[r]}),!1,r)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eb(C.a.iG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.pQ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.f7(C.y,n,C.h,!1)
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
ei:function(a){var u,t,s,r=new V.fL("dart")
r.bc("dart")
u=new V.h5("glsl")
u.bc("glsl")
t=new V.h6("html")
t.bc("html")
s=C.a.ix(H.d([r,u,t],[V.bz]),new V.io(a))
if(s!=null)return s
r=new V.i0("plain")
r.bc("plain")
return r},
di:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dl(r).a1(r,"+")){C.a.k(b0,s,C.b.a6(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a1(r,"-")){C.a.k(b0,s,C.b.a6(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ei(a8)
q.dY(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f7(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lM()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.i1(a,r[a0])
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
for(a3=C.a.gT(r);a3.B();)c.appendChild(a3.gJ(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hV:function(a){var u,t,s,r,q,p,o,n="auto"
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
u=V.iM()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sa4(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.au()
s.sa4(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.v(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.au()
s.sa4(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.t("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.v(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.v(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.v(new H.t("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.au()
t.sa4(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sa4(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bi())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sa4(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.t("*_`["))
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
V.im.prototype={
$1:function(a){P.mc(C.o,new V.il(this.a))},
$S:11}
V.il.prototype={
$0:function(){var u=C.c.ah(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.io.prototype={
$1:function(a){return H.h(a,"$ibz").a===this.a},
$S:55}
M.kM.prototype={
$0:function(){this.a.sae(0,F.ly(1,null,null,1))},
$S:0}
M.kN.prototype={
$0:function(){this.a.sae(0,F.mM(!0,40,1))},
$S:0}
M.kO.prototype={
$0:function(){this.a.sae(0,F.mM(!1,40,0))},
$S:0}
M.kP.prototype={
$0:function(){this.a.sae(0,F.pP(6,6))},
$S:0}
M.kQ.prototype={
$0:function(){this.a.sae(0,F.n2())},
$S:0}
M.kR.prototype={
$0:function(){this.a.sae(0,F.pH())},
$S:0}
M.kS.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.di("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.di("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eo=u.i
u=J.dJ.prototype
u.eq=u.i
u=P.j.prototype
u.ep=u.bs
u=W.T.prototype
u.bw=u.a9
u=W.eQ.prototype
u.es=u.aq
u=O.dR.prototype
u.cB=u.aw
u=O.b8.prototype
u.cC=u.aw
u=V.dP.prototype
u.er=u.aA
u.cA=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pl","ov",13)
u(P,"pm","ow",13)
u(P,"pn","ox",13)
t(P,"mL","pj",3)
s(W,"pA",4,null,["$4"],["oz"],28,0)
s(W,"pB",4,null,["$4"],["oA"],28,0)
var m
r(m=E.ao.prototype,"gdW",0,0,null,["$1","$0"],["dX","iS"],1,0)
r(m,"gdU",0,0,null,["$1","$0"],["dV","iR"],1,0)
r(m,"gdS",0,0,null,["$1","$0"],["dT","iO"],1,0)
q(m,"giM","iN",9)
q(m,"giP","iQ",9)
r(m=E.ec.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],1,0)
p(m,"gj6","e4",3)
o(m=X.ej.prototype,"gfO","fP",15)
o(m,"gfB","fC",15)
o(m,"gfI","fJ",4)
o(m,"gfS","fT",31)
o(m,"gfQ","fR",31)
o(m,"gfW","fX",4)
o(m,"gh_","h0",4)
o(m,"gfM","fN",4)
o(m,"gfY","fZ",4)
o(m,"gfK","fL",4)
o(m,"gh1","h2",36)
o(m,"gh3","h4",15)
o(m,"ghg","hh",14)
o(m,"ghc","hd",14)
o(m,"ghe","hf",14)
r(D.bB.prototype,"gbK",0,0,null,["$1","$0"],["ao","fD"],1,0)
r(m=D.dL.prototype,"gd1",0,0,null,["$1","$0"],["d2","fU"],1,0)
o(m,"gh6","h7",38)
q(m,"gft","fu",26)
q(m,"gha","hb",26)
n(V.a2.prototype,"gn","cg",24)
n(V.K.prototype,"gn","cg",24)
r(m=U.cE.prototype,"gbd",0,0,null,["$1","$0"],["X","al"],1,0)
q(m,"gfq","fs",21)
q(m,"gh8","h9",21)
r(m=U.ek.prototype,"gbd",0,0,null,["$1","$0"],["X","al"],1,0)
o(m,"gfk","fl",2)
o(m,"gfm","fn",2)
o(m,"gfo","fp",2)
o(m,"gff","fg",2)
o(m,"gfh","fi",2)
o(m,"ghQ","hR",2)
o(m,"ghO","hP",2)
o(m,"ghM","hN",2)
r(m=M.dD.prototype,"gam",0,0,null,["$1","$0"],["au","eE"],1,0)
q(m,"gfE","fF",9)
q(m,"gfG","fH",9)
r(m=O.dQ.prototype,"geI",0,0,null,["$1","$0"],["a8","eJ"],1,0)
r(m,"ght",0,0,null,["$1","$0"],["d6","hu"],1,0)
q(m,"gfv","fw",33)
q(m,"gfz","fA",33)
r(X.dZ.prototype,"gcG",0,0,null,["$1","$0"],["aI","eM"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.lb,J.a,J.ax,P.eD,P.j,H.cH,P.b5,H.bZ,H.d1,H.fE,H.iR,P.bC,H.cx,H.eV,P.ad,H.hi,H.hk,H.hd,P.f0,P.bg,P.aN,P.en,P.iw,P.cU,P.ix,P.bc,P.am,P.km,P.k0,P.cf,P.eC,P.x,P.ke,P.hq,P.bX,P.h9,P.kk,P.kj,P.P,P.ay,P.ab,P.b4,P.hZ,P.e7,P.ev,P.h3,P.bD,P.b,P.y,P.M,P.av,P.f,P.ag,P.cg,P.j5,P.k3,W.fH,W.bO,W.F,W.dX,W.eQ,W.k9,W.dF,W.aA,W.k_,W.f8,P.k5,P.f5,P.jV,P.O,O.a6,O.cI,E.fy,E.ao,E.i7,E.ec,Z.em,Z.jt,Z.dw,Z.bE,Z.bN,D.fB,D.bY,D.D,X.dx,X.dK,X.hf,X.hn,X.bG,X.hN,X.iN,X.ej,D.bB,D.ac,D.e_,D.e6,V.a4,V.aD,V.fV,V.dS,V.ap,V.a9,V.a5,V.ba,V.e2,V.a2,V.K,U.ek,M.dD,A.dt,A.fr,A.an,A.aE,A.aH,A.aI,A.hx,A.ca,A.cb,A.ce,A.ef,A.j_,F.a8,F.fY,F.bo,F.hh,F.bJ,F.e4,F.ih,F.ii,F.ij,F.ai,F.jh,F.ji,F.jl,F.jn,F.jo,F.jp,O.c9,O.dR,O.hy,T.iH,V.bi,V.az,V.dP,V.i6,V.ig,V.cT,V.ed,V.cY,V.iL,X.dy,X.e9,X.dZ,V.bz,V.i4,V.ik])
s(J.a,[J.hc,J.dI,J.dJ,J.aR,J.bF,J.bm,H.cL,H.bI,W.k,W.fo,W.bV,W.cw,W.b2,W.b3,W.V,W.ep,W.fM,W.fN,W.er,W.dC,W.et,W.fP,W.o,W.ew,W.aQ,W.h7,W.ey,W.bl,W.dN,W.hH,W.eE,W.eF,W.aS,W.eG,W.eJ,W.aT,W.eN,W.eP,W.aV,W.eR,W.aW,W.eW,W.aJ,W.eZ,W.iK,W.aY,W.f1,W.iP,W.ja,W.f9,W.fb,W.fd,W.ff,W.fh,P.b7,P.eA,P.b9,P.eL,P.i3,P.eX,P.bd,P.f3,P.fs,P.eo,P.du,P.e0,P.c7,P.e3,P.ea,P.eg,P.eT])
s(J.dJ,[J.i_,J.bM,J.bn])
t(J.la,J.aR)
s(J.bF,[J.dH,J.dG])
t(P.hm,P.eD)
s(P.hm,[H.eh,W.jB,W.aq,P.h_])
t(H.t,H.eh)
s(P.j,[H.fS,H.hr,H.d3])
s(H.fS,[H.c2,H.hj])
s(P.b5,[H.hs,H.ju])
t(H.ht,H.c2)
t(H.fF,H.fE)
s(P.bC,[H.hW,H.he,H.j3,H.iT,H.fA,H.id,P.fq,P.dY,P.aP,P.j4,P.j1,P.c8,P.fD,P.fK])
s(H.cx,[H.l_,H.iD,H.kG,H.kH,H.kI,P.jx,P.jw,P.jy,P.jz,P.kd,P.kc,P.jI,P.jM,P.jJ,P.jK,P.jL,P.jP,P.jQ,P.jO,P.jN,P.iy,P.iz,P.kw,P.jY,P.jX,P.jZ,P.hl,P.hp,P.fQ,P.fR,P.j9,P.j6,P.j7,P.j8,P.kf,P.kg,P.ki,P.kh,P.kq,P.kp,P.kr,P.ks,W.fT,W.hJ,W.hL,W.ic,W.iv,W.jH,W.hU,W.hT,W.k1,W.k2,W.kb,W.kl,P.k7,P.ky,P.h0,P.h1,P.fu,E.i8,E.i9,E.ia,E.iJ,D.fW,D.fX,F.kn,F.kz,F.kB,F.kC,F.kD,F.kW,F.kX,F.kZ,F.kK,F.kA,F.jr,F.jq,F.jj,F.jk,O.hB,O.hC,O.hD,O.hE,O.hF,O.hG,T.iI,V.kV,V.i5,V.im,V.il,V.io,M.kM,M.kN,M.kO,M.kP,M.kQ,M.kR,M.kS])
s(H.iD,[H.it,H.cu])
t(H.jv,P.fq)
t(P.ho,P.ad)
s(P.ho,[H.a1,W.jA])
t(H.dU,H.bI)
s(H.dU,[H.d8,H.da])
t(H.d9,H.d8)
t(H.cM,H.d9)
t(H.db,H.da)
t(H.dV,H.db)
s(H.dV,[H.hO,H.hP,H.hQ,H.hR,H.hS,H.dW,H.cN])
t(P.jW,P.km)
t(P.jU,P.k0)
t(P.f6,P.hq)
t(P.ei,P.f6)
s(P.bX,[P.fw,P.fU])
t(P.bA,P.ix)
s(P.bA,[P.fx,P.h8,P.jd,P.jc])
t(P.jb,P.fU)
s(P.ab,[P.q,P.m])
s(P.aP,[P.c6,P.ha])
t(P.jD,P.cg)
s(W.k,[W.E,W.fZ,W.cJ,W.aU,W.dc,W.aX,W.aK,W.de,W.js,W.d4,P.fv,P.bU])
s(W.E,[W.T,W.by,W.d5])
s(W.T,[W.w,P.p])
s(W.w,[W.dr,W.fp,W.ct,W.bx,W.bW,W.aF,W.h2,W.cF,W.cG,W.ie,W.bb,W.e8,W.iB,W.iC,W.cW])
s(W.b2,[W.cy,W.fI,W.fJ])
t(W.fG,W.b3)
t(W.cz,W.ep)
t(W.es,W.er)
t(W.dB,W.es)
t(W.eu,W.et)
t(W.fO,W.eu)
t(W.aG,W.bV)
t(W.ex,W.ew)
t(W.cC,W.ex)
t(W.ez,W.ey)
t(W.c_,W.ez)
t(W.bL,W.o)
s(W.bL,[W.b6,W.ae,W.aZ])
t(W.hI,W.eE)
t(W.hK,W.eF)
t(W.eH,W.eG)
t(W.hM,W.eH)
t(W.eK,W.eJ)
t(W.cO,W.eK)
t(W.eO,W.eN)
t(W.i1,W.eO)
t(W.ib,W.eP)
t(W.dd,W.dc)
t(W.iq,W.dd)
t(W.eS,W.eR)
t(W.ir,W.eS)
t(W.iu,W.eW)
t(W.f_,W.eZ)
t(W.iE,W.f_)
t(W.df,W.de)
t(W.iF,W.df)
t(W.f2,W.f1)
t(W.iO,W.f2)
t(W.bf,W.ae)
t(W.fa,W.f9)
t(W.jC,W.fa)
t(W.eq,W.dC)
t(W.fc,W.fb)
t(W.jR,W.fc)
t(W.fe,W.fd)
t(W.eI,W.fe)
t(W.fg,W.ff)
t(W.k4,W.fg)
t(W.fi,W.fh)
t(W.k8,W.fi)
t(W.jE,W.jA)
t(W.jF,P.iw)
t(W.lm,W.jF)
t(W.jG,P.cU)
t(W.ka,W.eQ)
t(P.k6,P.k5)
t(P.al,P.jV)
t(P.eB,P.eA)
t(P.hg,P.eB)
t(P.eM,P.eL)
t(P.hX,P.eM)
t(P.cR,P.p)
t(P.eY,P.eX)
t(P.iA,P.eY)
t(P.f4,P.f3)
t(P.iQ,P.f4)
t(P.ft,P.eo)
t(P.hY,P.bU)
t(P.eU,P.eT)
t(P.is,P.eU)
s(E.fy,[Z.dv,A.cS,T.cX])
s(D.D,[D.c0,D.c1,D.U,X.i2])
s(X.i2,[X.dO,X.bH,X.ee])
s(O.a6,[D.dL,U.cE])
s(D.fB,[U.fC,U.ak])
t(U.dz,U.ak)
t(A.hu,A.cS)
s(A.ef,[A.aL,A.iX,A.iY,A.iZ,A.iV,A.ah,A.iW,A.a_,A.d_,A.j0,A.d0,A.aB,A.cc,A.cd])
t(F.ip,F.fY)
t(F.iU,F.hh)
t(F.jm,F.jn)
t(F.hV,F.jo)
t(O.dQ,O.c9)
s(O.dR,[O.hv,O.hw,O.b8])
s(O.b8,[O.hz,O.hA])
t(T.eb,T.cX)
t(T.iG,T.eb)
s(V.dP,[V.au,V.cZ])
t(X.h4,X.e9)
s(V.bz,[V.fL,V.h5,V.h6,V.i0])
u(H.eh,H.d1)
u(H.d8,P.x)
u(H.d9,H.bZ)
u(H.da,P.x)
u(H.db,H.bZ)
u(P.eD,P.x)
u(P.f6,P.ke)
u(W.ep,W.fH)
u(W.er,P.x)
u(W.es,W.F)
u(W.et,P.x)
u(W.eu,W.F)
u(W.ew,P.x)
u(W.ex,W.F)
u(W.ey,P.x)
u(W.ez,W.F)
u(W.eE,P.ad)
u(W.eF,P.ad)
u(W.eG,P.x)
u(W.eH,W.F)
u(W.eJ,P.x)
u(W.eK,W.F)
u(W.eN,P.x)
u(W.eO,W.F)
u(W.eP,P.ad)
u(W.dc,P.x)
u(W.dd,W.F)
u(W.eR,P.x)
u(W.eS,W.F)
u(W.eW,P.ad)
u(W.eZ,P.x)
u(W.f_,W.F)
u(W.de,P.x)
u(W.df,W.F)
u(W.f1,P.x)
u(W.f2,W.F)
u(W.f9,P.x)
u(W.fa,W.F)
u(W.fb,P.x)
u(W.fc,W.F)
u(W.fd,P.x)
u(W.fe,W.F)
u(W.ff,P.x)
u(W.fg,W.F)
u(W.fh,P.x)
u(W.fi,W.F)
u(P.eA,P.x)
u(P.eB,W.F)
u(P.eL,P.x)
u(P.eM,W.F)
u(P.eX,P.x)
u(P.eY,W.F)
u(P.f3,P.x)
u(P.f4,W.F)
u(P.eo,P.ad)
u(P.eT,P.x)
u(P.eU,W.F)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bx.prototype
C.i=W.bW.prototype
C.O=W.aF.prototype
C.R=J.a.prototype
C.a=J.aR.prototype
C.S=J.dG.prototype
C.e=J.dH.prototype
C.j=J.dI.prototype
C.c=J.bF.prototype
C.b=J.bm.prototype
C.T=J.bn.prototype
C.Z=W.cO.prototype
C.B=J.i_.prototype
C.d=P.c7.prototype
C.a_=W.bb.prototype
C.C=W.e8.prototype
C.r=J.bM.prototype
C.D=W.bf.prototype
C.E=W.d4.prototype
C.a0=new P.fx()
C.F=new P.fw()
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

C.M=new P.hZ()
C.h=new P.jb()
C.N=new P.jd()
C.f=new P.jW()
C.o=new P.b4(0)
C.P=new P.b4(5e6)
C.Q=new P.h9("element",!0,!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.m])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.n=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.Y=new H.fF(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",q:"double",ab:"num",f:"String",P:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.M,args:[,,]},{func:1,ret:P.M,args:[F.a8]},{func:1,ret:P.M,args:[F.ai,P.q,P.q]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.ao]]},{func:1,ret:P.M,args:[D.D]},{func:1,ret:P.M,args:[W.o]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[W.o]},{func:1,ret:V.a5,args:[P.q]},{func:1,ret:P.M,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.j,U.ak]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.q},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ac]]},{func:1,ret:P.P,args:[W.E]},{func:1,ret:P.P,args:[W.T,P.f,P.f,W.bO]},{func:1,ret:P.P,args:[W.aA]},{func:1,ret:P.P,args:[P.f]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[P.m,[P.j,V.ap]]},{func:1,ret:W.T,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.bf]},{func:1,args:[W.o]},{func:1,ret:P.P,args:[[P.j,D.ac]]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.M,args:[P.f,,]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.av]},{func:1,ret:P.O,args:[P.m]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aE,A.aE]},{func:1,ret:P.m,args:[A.aH,A.aH]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,args:[P.f]},{func:1,ret:P.M,args:[P.bc]},{func:1,ret:P.P,args:[V.bz]},{func:1,args:[,P.f]},{func:1,ret:P.M,args:[P.ab]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b1=0
$.cv=null
$.lO=null
$.lq=!1
$.mT=null
$.mJ=null
$.n_=null
$.kE=null
$.kJ=null
$.lA=null
$.ci=null
$.dj=null
$.dk=null
$.lr=!1
$.a0=C.f
$.aw=[]
$.bk=null
$.l7=null
$.lU=null
$.lT=null
$.d7=P.ld(P.f,P.bD)
$.m_=null
$.m3=null
$.cP=null
$.m7=null
$.mk=null
$.mn=null
$.mm=null
$.je=null
$.jf=null
$.jg=null
$.ml=null
$.m2=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pY","n4",function(){return H.mS("_$dart_dartClosure")})
u($,"pZ","lG",function(){return H.mS("_$dart_js")})
u($,"q4","n5",function(){return H.be(H.iS({
toString:function(){return"$receiver$"}}))})
u($,"q5","n6",function(){return H.be(H.iS({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q6","n7",function(){return H.be(H.iS(null))})
u($,"q7","n8",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qa","nb",function(){return H.be(H.iS(void 0))})
u($,"qb","nc",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q9","na",function(){return H.be(H.me(null))})
u($,"q8","n9",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qd","ne",function(){return H.be(H.me(void 0))})
u($,"qc","nd",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qu","lH",function(){return P.ou()})
u($,"qg","nf",function(){return P.oq()})
u($,"qv","nj",function(){return H.nY(H.ch(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qx","nl",function(){return P.oc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qy","nm",function(){return P.oT()})
u($,"qw","nk",function(){return P.lX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qn","ni",function(){return Z.aM(0)})
u($,"qh","ng",function(){return Z.aM(511)})
u($,"qp","bv",function(){return Z.aM(1)})
u($,"qo","bu",function(){return Z.aM(2)})
u($,"qj","bt",function(){return Z.aM(4)})
u($,"qq","bS",function(){return Z.aM(8)})
u($,"qr","bT",function(){return Z.aM(16)})
u($,"qk","dm",function(){return Z.aM(32)})
u($,"ql","dn",function(){return Z.aM(64)})
u($,"qm","nh",function(){return Z.aM(96)})
u($,"qs","cs",function(){return Z.aM(128)})
u($,"qi","bs",function(){return Z.aM(256)})
u($,"pX","n3",function(){return new V.fV(1e-9)})
u($,"pW","R",function(){return $.n3()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cL,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cM,Float64Array:H.cM,Int16Array:H.hO,Int32Array:H.hP,Int8Array:H.hQ,Uint16Array:H.hR,Uint32Array:H.hS,Uint8ClampedArray:H.dW,CanvasPixelArray:H.dW,Uint8Array:H.cN,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fo,HTMLAnchorElement:W.dr,HTMLAreaElement:W.fp,HTMLBaseElement:W.ct,Blob:W.bV,HTMLBodyElement:W.bx,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cw,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cy,CSSUnitValue:W.cy,CSSPerspective:W.fG,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cz,MSStyleCSSProperties:W.cz,CSS2Properties:W.cz,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fI,CSSUnparsedValue:W.fJ,DataTransferItemList:W.fM,HTMLDivElement:W.aF,DOMException:W.fN,ClientRectList:W.dB,DOMRectList:W.dB,DOMRectReadOnly:W.dC,DOMStringList:W.fO,DOMTokenList:W.fP,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aG,FileList:W.cC,FileWriter:W.fZ,HTMLFormElement:W.h2,Gamepad:W.aQ,History:W.h7,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,ImageData:W.bl,HTMLImageElement:W.cF,HTMLInputElement:W.cG,KeyboardEvent:W.b6,Location:W.dN,MediaList:W.hH,MessagePort:W.cJ,MIDIInputMap:W.hI,MIDIOutputMap:W.hK,MimeType:W.aS,MimeTypeArray:W.hM,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aT,PluginArray:W.i1,RTCStatsReport:W.ib,HTMLSelectElement:W.ie,SourceBuffer:W.aU,SourceBufferList:W.iq,SpeechGrammar:W.aV,SpeechGrammarList:W.ir,SpeechRecognitionResult:W.aW,Storage:W.iu,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.e8,HTMLTableRowElement:W.iB,HTMLTableSectionElement:W.iC,HTMLTemplateElement:W.cW,TextTrack:W.aX,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iK,Touch:W.aY,TouchEvent:W.aZ,TouchList:W.iO,TrackDefaultList:W.iP,CompositionEvent:W.bL,FocusEvent:W.bL,TextEvent:W.bL,UIEvent:W.bL,URL:W.ja,VideoTrackList:W.js,WheelEvent:W.bf,Window:W.d4,DOMWindow:W.d4,Attr:W.d5,CSSRuleList:W.jC,ClientRect:W.eq,DOMRect:W.eq,GamepadList:W.jR,NamedNodeMap:W.eI,MozNamedAttrMap:W.eI,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k8,SVGLength:P.b7,SVGLengthList:P.hg,SVGNumber:P.b9,SVGNumberList:P.hX,SVGPointList:P.i3,SVGScriptElement:P.cR,SVGStringList:P.iA,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bd,SVGTransformList:P.iQ,AudioBuffer:P.fs,AudioParamMap:P.ft,AudioTrackList:P.fv,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.hY,WebGLBuffer:P.du,WebGLProgram:P.e0,WebGL2RenderingContext:P.c7,WebGLShader:P.e3,WebGLTexture:P.ea,WebGLUniformLocation:P.eg,SQLResultSetRowList:P.is})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.mW,[])
else M.mW([])})})()
//# sourceMappingURL=test.dart.js.map
