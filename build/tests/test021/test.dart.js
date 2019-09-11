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
if(w[u][a])return w[u][a]}}var C={},H={l9:function l9(){},
kB:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ha:function(){return new P.ca("No element")},
nP:function(){return new P.ca("Too many elements")},
nO:function(){return new P.ca("Too few elements")},
e3:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oj(a,b,c,d,e)
else H.oi(a,b,c,d,e)},
oj:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b1(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oi:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(J.b1(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b1(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b1(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b1(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b1(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b1(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b1(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b1(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b1(a5.$2(k,j),0)){i=j
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
if(typeof d!=="number")return d.R()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ap()
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
if(typeof a0!=="number")return a0.R()
if(a0<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ap()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ap()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.R()
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
if(typeof d!=="number")return d.R()
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
fR:function fR(){},
c4:function c4(){},
cG:function cG(a,b,c){var _=this
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
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(){},
d0:function d0(){},
ee:function ee(){},
nF:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pw:function(a){return v.types[H.a3(a)]},
pD:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iN},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.ax(a))
return u},
cQ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oa:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
c6:function(a){return H.o1(a)+H.ls(H.bT(a),0,null)},
o1:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibO){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.b.E(t,0)===36?C.b.a7(t,1):t)},
o2:function(){if(!!self.location)return self.location.href
return},
m5:function(a){var u,t,s,r,q
H.kH(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ob:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ax(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aP(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.ax(s))}return H.m5(r)},
m6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ax(s))
if(s<0)throw H.c(H.ax(s))
if(s>65535)return H.ob(a)}return H.m5(a)},
oc:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aP(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o9:function(a){var u=H.c5(a).getFullYear()+0
return u},
o7:function(a){var u=H.c5(a).getMonth()+1
return u},
o3:function(a){var u=H.c5(a).getDate()+0
return u},
o4:function(a){var u=H.c5(a).getHours()+0
return u},
o6:function(a){var u=H.c5(a).getMinutes()+0
return u},
o8:function(a){var u=H.c5(a).getSeconds()+0
return u},
o5:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
E:function(a){throw H.c(H.ax(a))},
e:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cl(a,b))},
cl:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aQ(!0,b,s,null)
u=H.a3(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.dZ(b,s)},
pq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c8(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end",u)
return new P.aQ(!0,b,"end",null)},
ax:function(a){return new P.aQ(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n3})
u.name=""}else u.toString=H.n3
return u},
n3:function(){return J.as(this.dartException)},
z:function(a){throw H.c(a)},
u:function(a){throw H.c(P.bl(a))},
bg:function(a){var u,t,s,r,q,p
a=H.n1(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.hY(a,b==null?null:b.method)},
la:function(a,b){var u=b==null,t=u?null:b.method
return new H.he(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aP(t,16)&8191)===10)switch(s){case 438:return f.$1(H.la(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m1(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n7()
q=$.n8()
p=$.n9()
o=$.na()
n=$.nd()
m=$.ne()
l=$.nc()
$.nb()
k=$.ng()
j=$.nf()
i=r.ae(u)
if(i!=null)return f.$1(H.la(H.I(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.la(H.I(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m1(H.I(u),i))}}return f.$1(new H.j2(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aQ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e5()
return a},
cp:function(a){var u
if(a==null)return new H.eU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eU(a)},
pu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pC:function(a,b,c,d,e,f){H.h(a,"$ibE")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.D("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pC)
a.$identity=u
return u},
nE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iv().constructor.prototype):Object.create(new H.cu(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lQ(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pw,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lO:H.l0
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
nB:function(a,b,c,d){var u=H.l0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nB(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fy("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cv
return new Function(r+H.i(q==null?$.cv=H.fy("self"):q)+"."+H.i(u)+"("+o+");}")()},
nC:function(a,b,c,d){var u=H.l0,t=H.lO
switch(b?-1:a){case 0:throw H.c(H.og("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nD:function(a,b){var u,t,s,r,q,p,o,n=$.cv
if(n==null)n=$.cv=H.fy("self")
u=$.lN
if(u==null)u=$.lN=H.fy("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b2
if(typeof u!=="number")return u.p()
$.b2=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b2
if(typeof u!=="number")return u.p()
$.b2=u+1
return new Function(n+u+"}")()},
lx:function(a,b,c,d,e,f,g){return H.nE(a,b,H.a3(c),d,!!e,!!f,g)},
l0:function(a){return a.a},
lO:function(a){return a.c},
fy:function(a){var u,t,s,r=new H.cu("self","target","receiver","name"),q=J.l7(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pk("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
pr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
mY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lu:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
n_:function(a,b){throw H.c(H.b0(a,H.cr(H.I(b).substring(2))))},
pJ:function(a,b){throw H.c(H.nA(a,H.cr(H.I(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.n_(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pJ(a,b)},
kH:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
mW:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.n_(a,b)},
mQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
fh:function(a,b){var u
if(typeof a=="function")return!0
u=H.mQ(J.X(a))
if(u==null)return!1
return H.mC(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lp)return a
$.lp=!0
try{if(H.fh(a,b))return a
u=H.kQ(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lp=!1}},
lz:function(a,b){if(a!=null&&!H.lw(a,b))H.z(H.b0(a,H.kQ(b)))
return a},
b0:function(a,b){return new H.iS("TypeError: "+P.dF(a)+": type '"+H.mI(a)+"' is not a subtype of type '"+b+"'")},
nA:function(a,b){return new H.fz("CastError: "+P.dF(a)+": type '"+H.mI(a)+"' is not a subtype of type '"+b+"'")},
mI:function(a){var u,t=J.X(a)
if(!!t.$icw){u=H.mQ(t)
if(u!=null)return H.kQ(u)
return"Closure"}return H.c6(a)},
pk:function(a){throw H.c(new H.jr(a))},
pO:function(a){throw H.c(new P.fJ(H.I(a)))},
og:function(a){return new H.ig(a)},
mT:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qv:function(a,b,c){return H.cq(a["$a"+H.i(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.I(c)
H.a3(d)
u=H.cq(a["$a"+H.i(c)],H.bT(b))
return u==null?null:u[d]},
ar:function(a,b,c){var u
H.I(b)
H.a3(c)
u=H.cq(a["$a"+H.i(b)],H.bT(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a3(b)
u=H.bT(a)
return u==null?null:u[b]},
kQ:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.ls(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
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
if(m!=null&&m!==P.R)p+=" extends "+H.bR(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bR(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bR(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pt(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bR(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ls:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ah("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.i(0)+">"},
cq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lv:function(a,b,c,d){var u,t
H.I(b)
H.kH(c)
H.I(d)
if(a==null)return!1
u=H.bT(a)
t=J.X(a)
if(t[b]==null)return!1
return H.mL(H.cq(t[d],u),null,c,null)},
l:function(a,b,c,d){H.I(b)
H.kH(c)
H.I(d)
if(a==null)return a
if(H.lv(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.ls(c,0,null),v.mangledGlobalNames)))},
mL:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aP(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aP(a[t],b,c[t],d))return!1
return!0},
qt:function(a,b,c){return a.apply(b,H.cq(J.X(b)["$a"+H.i(c)],H.bT(b)))},
mV:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="P"||a===-1||a===-2||H.mV(u)}return!1},
lw:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="P"||b===-1||b===-2||H.mV(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fh(a,b)}u=J.X(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aP(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lw(a,b))throw H.c(H.b0(a,H.kQ(b)))
return a},
aP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aP(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.mC(a,b,c,d)
if('func' in a)return c.name==="bE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aP("type" in a?a.type:l,b,s,d)
else if(H.aP(a,b,s,d))return!0
else{if(!('$i'+"cC" in t.prototype))return!1
r=t.prototype["$a"+"cC"]
q=H.cq(r,u?a.slice(1):l)
return H.aP(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mL(H.cq(m,u),b,p,d)},
mC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aP(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aP(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aP(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aP(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pH(h,b,g,d)},
pH:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aP(c[s],d,a[s],b))return!1}return!0},
qu:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pF:function(a){var u,t,s,r,q=H.I($.mU.$1(a)),p=$.kA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mK.$2(a,q))
if(q!=null){p=$.kA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kP(u)
$.kA[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kF[q]=u
return u}if(s==="-"){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mZ(a,u)
if(s==="*")throw H.c(P.j1(q))
if(v.leafTags[q]===true){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mZ(a,u)},
mZ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kP:function(a){return J.lB(a,!1,null,!!a.$iN)},
pG:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kP(u)
else return J.lB(u,c,null,null)},
pA:function(){if(!0===$.lA)return
$.lA=!0
H.pB()},
pB:function(){var u,t,s,r,q,p,o,n
$.kA=Object.create(null)
$.kF=Object.create(null)
H.pz()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n0.$1(q)
if(p!=null){o=H.pG(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pz:function(){var u,t,s,r,q,p,o=C.G()
o=H.cj(C.H,H.cj(C.I,H.cj(C.v,H.cj(C.v,H.cj(C.J,H.cj(C.K,H.cj(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mU=new H.kC(r)
$.mK=new H.kD(q)
$.n0=new H.kE(p)},
cj:function(a,b){return a(b)||b},
nR:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ps:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
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
return a.replace(new RegExp(H.n1(b),'g'),H.ps(c))},
fD:function fD(){},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iQ:function iQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hY:function hY(a,b){this.a=a
this.b=b},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
kW:function kW(a){this.a=a},
eU:function eU(a){this.a=a
this.b=null},
cw:function cw(){},
iF:function iF(){},
iv:function iv(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a){this.a=a},
fz:function fz(a){this.a=a},
ig:function ig(a){this.a=a},
jr:function jr(a){this.a=a},
a2:function a2(a){var _=this
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
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function(a){return a},
o_:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cl(b,a))},
oS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pq(a,b,c))
return b},
cL:function cL(){},
bI:function bI(){},
dS:function dS(){},
cM:function cM(){},
dT:function dT(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
dU:function dU(){},
cN:function cN(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
pt:function(a){return J.lU(a?Object.keys(a):[],null)},
pI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fj:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lA==null){H.pA()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j1("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lF()]
if(r!=null)return r
r=H.pF(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lF(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lU(new Array(a),b)},
lU:function(a,b){return J.l7(H.d(a,[b]))},
l7:function(a){H.kH(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dH.prototype
return J.hc.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.dI.prototype
if(typeof a=="boolean")return J.hb.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fj(a)},
pv:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fj(a)},
cn:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fj(a)},
fi:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fj(a)},
mR:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bO.prototype
return a},
mS:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bO.prototype
return a},
dl:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bO.prototype
return a},
co:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fj(a)},
np:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pv(a).p(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).u(a,b)},
b1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mR(a).ap(a,b)},
lH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mS(a).q(a,b)},
nq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mR(a).t(a,b)},
dp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pD(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cn(a).j(a,b)},
kY:function(a,b,c){return J.fi(a).k(a,b,c)},
nr:function(a,b){return J.dl(a).E(a,b)},
ns:function(a,b,c){return J.co(a).hA(a,b,c)},
nt:function(a,b,c,d){return J.co(a).i2(a,b,c,d)},
nu:function(a,b){return J.dl(a).Y(a,b)},
kZ:function(a,b){return J.mS(a).ih(a,b)},
fl:function(a,b){return J.fi(a).K(a,b)},
nv:function(a,b,c,d){return J.co(a).iu(a,b,c,d)},
lI:function(a,b){return J.fi(a).I(a,b)},
nw:function(a){return J.co(a).gia(a)},
lJ:function(a){return J.co(a).gcc(a)},
dq:function(a){return J.X(a).gJ(a)},
by:function(a){return J.fi(a).gT(a)},
aD:function(a){return J.cn(a).gn(a)},
lK:function(a){return J.fi(a).j1(a)},
nx:function(a,b){return J.co(a).j5(a,b)},
ny:function(a,b,c){return J.dl(a).B(a,b,c)},
nz:function(a){return J.dl(a).jd(a)},
as:function(a){return J.X(a).i(a)},
a:function a(){},
hb:function hb(){},
dI:function dI(){},
dJ:function dJ(){},
i1:function i1(){},
bO:function bO(){},
bo:function bo(){},
aS:function aS(a){this.$ti=a},
l8:function l8(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bG:function bG(){},
dH:function dH(){},
hc:function hc(){},
bn:function bn(){}},P={
ou:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pl()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ck(new P.jt(s),1)).observe(u,{childList:true})
return new P.js(s,u,t)}else if(self.setImmediate!=null)return P.pm()
return P.pn()},
ov:function(a){self.scheduleImmediate(H.ck(new P.ju(H.n(a,{func:1,ret:-1})),0))},
ow:function(a){self.setImmediate(H.ck(new P.jv(H.n(a,{func:1,ret:-1})),0))},
ox:function(a){P.lg(C.o,H.n(a,{func:1,ret:-1}))},
lg:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a5(a.a,1000)
return P.oD(u<0?0:u,b)},
me:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.e.a5(a.a,1000)
return P.oE(u<0?0:u,b)},
oD:function(a,b){var u=new P.f_()
u.eZ(a,b)
return u},
oE:function(a,b){var u=new P.f_()
u.f_(a,b)
return u},
oy:function(a,b){var u,t,s
b.a=1
try{a.en(new P.jF(b),new P.jG(b),null)}catch(s){u=H.ak(s)
t=H.cp(s)
P.pK(new P.jH(b,u,t))}},
mr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaO")
if(u>=4){t=b.c_()
b.a=a.a
b.c=a.c
P.d5(b,t)}else{t=H.h(b.c,"$ibi")
b.a=2
b.c=a
a.dj(t)}},
d5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.kr(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d5(h.a,b)}g=h.a
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
if(m){H.h(o,"$ian")
g=g.b
r=o.a
q=o.b
g.toString
P.kr(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jL(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jK(u,b,o).$0()}else if((g&2)!==0)new P.jJ(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.X(g).$icC){if(g.a>=4){k=H.h(q.c,"$ibi")
q.c=null
b=q.bm(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mr(g,q)
return}}j=b.b
k=H.h(j.c,"$ibi")
j.c=null
b=j.bm(k)
g=u.a
r=u.b
if(!g){H.C(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
pg:function(a,b){if(H.fh(a,{func:1,args:[P.R,P.av]}))return H.n(a,{func:1,ret:null,args:[P.R,P.av]})
if(H.fh(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.l_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pf:function(){var u,t
for(;u=$.ci,u!=null;){$.dk=null
t=u.b
$.ci=t
if(t==null)$.dj=null
u.a.$0()}},
pj:function(){$.lq=!0
try{P.pf()}finally{$.dk=null
$.lq=!1
if($.ci!=null)$.lG().$1(P.mM())}},
mH:function(a){var u=new P.em(H.n(a,{func:1,ret:-1}))
if($.ci==null){$.ci=$.dj=u
if(!$.lq)$.lG().$1(P.mM())}else $.dj=$.dj.b=u},
pi:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ci
if(u==null){P.mH(a)
$.dk=$.dj
return}t=new P.em(a)
s=$.dk
if(s==null){t.b=u
$.ci=$.dk=t}else{t.b=s.b
$.dk=s.b=t
if(t.b==null)$.dj=t}},
pK:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kt(t,t,C.f,a)
return}u.toString
P.kt(t,t,u,H.n(u.c7(a),s))},
md:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lg(a,b)}return P.lg(a,H.n(u.c7(b),t))},
om:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.me(a,b)}t=u.dD(b,P.be)
$.a1.toString
return P.me(a,H.n(t,s))},
kr:function(a,b,c,d,e){var u={}
u.a=d
P.pi(new P.ks(u,e))},
mD:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mE:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
ph:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kt:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c7(d):c.ib(d,-1)
P.mH(d)},
jt:function jt(a){this.a=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
f_:function f_(){this.c=0},
k9:function k9(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aO:function aO(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jE:function jE(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jM:function jM(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a
this.b=null},
iy:function iy(){},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
cU:function cU(){},
iz:function iz(){},
be:function be(){},
an:function an(a,b){this.a=a
this.b=b},
ki:function ki(){},
ks:function ks(a,b){this.a=a
this.b=b},
jS:function jS(){},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b){this.a=a
this.b=b},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
nT:function(a,b){return new H.a2([a,b])},
lb:function(a,b){return new H.a2([a,b])},
nV:function(a){return H.pu(a,new H.a2([null,null]))},
dM:function(a){return new P.jQ([a])},
lm:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oC:function(a,b,c){var u=new P.eB(a,b,[c])
u.c=a.e
return u},
nN:function(a,b,c){var u,t
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aw,a)
try{P.oV(a,u)}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=P.mb(b,H.mW(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l6:function(a,b,c){var u,t
if(P.lr(a))return b+"..."+c
u=new P.ah(b)
C.a.h($.aw,a)
try{t=u
t.a=P.mb(t.a,a,", ")}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lr:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oV:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.f],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.i(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.C();o=n,n=m){m=u.gL(u);++s
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
nU:function(a,b,c){var u=P.nT(b,c)
a.I(0,new P.hl(u,b,c))
return u},
lV:function(a,b){var u,t,s=P.dM(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.C(a[t],b))
return s},
lc:function(a){var u,t={}
if(P.lr(a))return"{...}"
u=new P.ah("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lI(a,new P.hp(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.e($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jQ:function jQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cg:function cg(a){this.a=a
this.c=this.b=null},
eB:function eB(a,b,c){var _=this
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
ae:function ae(){},
ka:function ka(){},
hq:function hq(){},
ef:function ef(a,b){this.a=a
this.$ti=b},
jX:function jX(){},
eC:function eC(){},
f4:function f4(){},
op:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oq(!1,b,c,d)
return},
oq:function(a,b,c,d){var u,t,s=$.nh()
if(s==null)return
u=0===c
if(u&&!0)return P.lj(s,b)
t=b.length
d=P.br(c,d,t)
if(u&&d===t)return P.lj(s,b)
return P.lj(s,b.subarray(c,d))},
lj:function(a,b){if(P.os(b))return
return P.ot(a,b)},
ot:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
os:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
or:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mG:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cn(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ah()
if((s&127)!==s)return t-b}return c-b},
lM:function(a,b,c,d,e,f){if(C.e.bg(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fv:function fv(){},
fw:function fw(){},
bZ:function bZ(){},
bC:function bC(){},
fT:function fT(){},
h8:function h8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h7:function h7(a){this.a=a},
ja:function ja(){},
jc:function jc(){},
kg:function kg(a){this.b=0
this.c=a},
jb:function jb(a){this.a=a},
kf:function kf(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fk:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.oa(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nK:function(a){if(a instanceof H.cw)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nW:function(a,b,c){var u,t
H.C(b,c)
u=J.nQ(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
lW:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.by(a);u.C();)C.a.h(s,H.C(u.gL(u),c))
if(b)return s
return H.l(J.l7(s),"$ib",t,"$ab")},
cV:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaS",[t],"$aaS")
u=a.length
c=P.br(b,c,u)
return H.m6(b>0||c<u?C.a.eA(a,b,c):a)}if(!!J.X(a).$icN)return H.oc(a,b,P.br(b,c,a.length))
return P.ok(a,b,c)},
ok:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.c(P.ag(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aD(a),q,q))
t=J.by(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.ag(c,b,s,q,q))
r.push(t.gL(t))}return H.m6(r)},
oe:function(a){return new H.hd(a,H.nR(a,!1,!0,!1))},
mb:function(a,b,c){var u=J.by(b)
if(!u.C())return a
if(c.length===0){do a+=H.i(u.gL(u))
while(u.C())}else{a+=H.i(u.gL(u))
for(;u.C();)a=a+c+H.i(u.gL(u))}return a},
mh:function(){var u=H.o2()
if(u!=null)return P.oo(u)
throw H.c(P.J("'Uri.base' is not supported"))},
f5:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nn().b
if(typeof b!=="string")H.z(H.ax(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.ar(c,"bZ",0))
t=c.git().cd(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nG:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a,b){return new P.b5(1e6*b+1000*a)},
dF:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nK(a)},
fo:function(a){return new P.aQ(!1,null,null,a)},
l_:function(a,b,c){return new P.aQ(!0,a,b,c)},
dZ:function(a,b){return new P.c8(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
br:function(a,b,c){if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",null))
return b}return c},
le:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.ag(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.a3(e==null?J.aD(b):e)
return new P.h9(u,!0,a,c,"Index out of range")},
J:function(a){return new P.j3(a)},
j1:function(a){return new P.j0(a)},
ma:function(a){return new P.ca(a)},
bl:function(a){return new P.fC(a)},
D:function(a){return new P.eu(a)},
a7:function(a,b,c){return new P.h2(a,b,c)},
nX:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lC:function(a){H.pI(a)},
oo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.mg(e<e?C.b.B(a,0,e):a,5,f).ges()
else if(u===32)return P.mg(C.b.B(a,5,e),0,f).ges()}t=new Array(8)
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
if(P.mF(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jl()
if(r>=0)if(P.mF(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.E(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.ab(a,"..",o)))j=n>o+2&&C.b.ab(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ab(a,"file",0)){if(q<=0){if(!C.b.ab(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.B(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aX(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ab(a,"http",0)){if(t&&p+3===o&&C.b.ab(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aX(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ab(a,"https",0)){if(t&&p+4===o&&C.b.ab(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aX(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k_(a,r,q,p,o,n,m,k)}return P.oF(a,0,e,r,q,p,o,n,m,k)},
mj:function(a){var u=P.f
return C.a.iy(H.d(a.split("&"),[u]),P.lb(u,u),new P.j8(C.h),[P.y,P.f,P.f])},
on:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j5(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fk(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.ap()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fk(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.ap()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j6(a)
t=new P.j7(u,a)
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
l=C.a.gaw(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.on(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aP(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oM(a,b,d)
else{if(d===b)P.df(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oN(a,u,e-1):""
s=P.oJ(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.oL(P.fk(C.b.B(a,r,g),new P.kb(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oK(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.ln(a,h+1,i,n):n
return new P.ch(j,t,s,q,p,o,i<c?P.oI(a,i+1,c):n)},
mv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
df:function(a,b,c){throw H.c(P.a7(c,a,b))},
oL:function(a,b){if(a!=null&&a===P.mv(b))return
return a},
oJ:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.Y(a,u)!==93)P.df(a,b,"Missing end `]` to match `[` in host")
P.mi(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.E(c)
t=b
for(;t<c;++t)if(C.b.Y(a,t)===58){P.mi(a,b,c)
return"["+a+"]"}return P.oP(a,b,c)},
oP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.mB(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ah("")
n=C.b.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ah("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.df(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ah("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mw(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oM:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.my(C.b.E(a,b)))P.df(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.df(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.oG(t?a.toLowerCase():a)},
oG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oN:function(a,b,c){return P.dg(a,b,c,C.V,!1)},
oK:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dg(a,b,c,C.A,!0):C.i.jJ(d,new P.kc(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a0(u,"/"))u="/"+u
return P.oO(u,e,f)},
oO:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a0(a,"/"))return P.oQ(a,!u||c)
return P.oR(a)},
ln:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.f,null],"$ay")
if(a!=null){if(d!=null)throw H.c(P.fo("Both query and queryParameters specified"))
return P.dg(a,b,c,C.k,!0)}if(d==null)return
u=new P.ah("")
t.a=""
d.I(0,new P.kd(new P.ke(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oI:function(a,b,c){return P.dg(a,b,c,C.k,!0)},
mB:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kB(u)
r=H.kB(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aP(q,4)
if(p>=8)return H.e(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
mw:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.E(o,a>>>4))
C.a.k(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.hN(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cV(t,0,null)},
dg:function(a,b,c,d,e){var u=P.mA(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
mA:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.R()
if(typeof c!=="number")return H.E(c)
if(!(t<c))break
c$0:{q=C.b.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mB(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.j,p)
p=(C.j[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.df(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mw(q)}}if(r==null)r=new P.ah("")
r.a+=C.b.B(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.E(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.R()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mz:function(a){if(C.b.a0(a,"."))return!0
return C.b.dY(a,"/.")!==-1},
oR:function(a){var u,t,s,r,q,p,o
if(!P.mz(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oQ:function(a,b){var u,t,s,r,q,p
if(!P.mz(a))return!b?P.mx(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaw(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaw(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mx(u[0]))}return C.a.m(u,"/")},
mx:function(a){var u,t,s,r=a.length
if(r>=2&&P.my(J.nr(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.a7(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oH:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fo("Invalid URL encoding"))}}return u},
lo:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.t(C.b.B(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.c(P.fo("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.fo("Truncated URI"))
C.a.h(r,P.oH(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jb(!1).cd(r)},
my:function(a){var u=a|32
return 97<=u&&u<=122},
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaw(l)
if(r!==44||t!==p+7||!C.b.ab(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iK(0,a,o,u)
else{n=P.mA(a,o,u,C.k,!0)
if(n!=null)a=C.b.aX(a,o,u,n)}return new P.j4(a,l,c)},
oT:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nX(22,new P.km(),P.S),n=new P.kl(o),m=new P.kn(),l=new P.ko(),k=H.h(n.$2(0,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iS")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iS")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iS")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iS")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iS")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iS")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iS")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iS"),"]",5)
k=H.h(n.$2(9,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iS")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iS")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iS")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iS")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iS"),"az",21)
k=H.h(n.$2(21,245),"$iS")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mF:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.no()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.E(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
T:function T(){},
ay:function ay(a,b){this.a=a
this.b=b},
p:function p(){},
b5:function b5(a){this.a=a},
fP:function fP(){},
fQ:function fQ(){},
bD:function bD(){},
fp:function fp(){},
dW:function dW(){},
aQ:function aQ(a,b,c,d){var _=this
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
h9:function h9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
ca:function ca(a){this.a=a},
fC:function fC(a){this.a=a},
i0:function i0(){},
e5:function e5(){},
fJ:function fJ(a){this.a=a},
eu:function eu(a){this.a=a},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
m:function m(){},
j:function j(){},
b6:function b6(){},
b:function b(){},
y:function y(){},
P:function P(){},
aa:function aa(){},
R:function R(){},
av:function av(){},
f:function f(){},
ah:function ah(a){this.a=a},
j8:function j8(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a,b){this.a=a
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
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(){},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(){},
kl:function kl(a){this.a=a},
kn:function kn(){},
ko:function ko(){},
k_:function k_(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jz:function jz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bt:function(a){var u,t,s,r,q
if(a==null)return
u=P.lb(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.I(t[r])
u.k(0,q,a[q])}return u},
po:function(a){var u={}
a.I(0,new P.ku(u))
return u},
k1:function k1(){},
k3:function k3(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(){},
h0:function h0(){},
jP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jR:function jR(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hg:function hg(){},
bb:function bb(){},
hZ:function hZ(){},
i5:function i5(){},
cR:function cR(){},
iC:function iC(){},
q:function q(){},
bf:function bf(){},
iP:function iP(){},
ez:function ez(){},
eA:function eA(){},
eK:function eK(){},
eL:function eL(){},
eW:function eW(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
S:function S(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(a){this.a=a},
fu:function fu(){},
bW:function bW(){},
i_:function i_(){},
en:function en(){},
dt:function dt(){},
dY:function dY(){},
c9:function c9(){},
e1:function e1(){},
ed:function ed(){},
iu:function iu(){},
eS:function eS(){},
eT:function eT(){}},W={
lL:function(){var u=document.createElement("a")
return u},
lP:function(){var u=document.createElement("canvas")
return u},
nI:function(a,b,c){var u=document.body,t=(u&&C.t).ad(u,a,b,c)
t.toString
u=W.G
u=new H.d2(new W.aq(t),H.n(new W.fS(),{func:1,ret:P.T,args:[u]}),[u])
return H.h(u.gaI(u),"$iU")},
nJ:function(a){H.h(a,"$ik")
return"wheel"},
cz:function(a){var u,t,s,r="element tag unavailable"
try{u=J.co(a)
t=u.gel(a)
if(typeof t==="string")r=u.gel(a)}catch(s){H.ak(s)}return r},
nM:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icF")
try{s.type=a}catch(u){H.ak(u)}return s},
jO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mt:function(a,b,c,d){var u=W.jO(W.jO(W.jO(W.jO(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mJ(new W.jD(c),W.o)
if(u!=null&&!0)J.nt(a,b,u,!1)
return new W.jC(a,b,u,!1,[e])},
ms:function(a){var u=W.lL(),t=window.location
u=new W.bQ(new W.jW(u,t))
u.eN(a)
return u},
oz:function(a,b,c,d){H.h(a,"$iU")
H.I(b)
H.I(c)
H.h(d,"$ibQ")
return!0},
oA:function(a,b,c,d){var u,t,s
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
mu:function(){var u=P.f,t=P.lV(C.p,u),s=H.r(C.p,0),r=H.n(new W.k7(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k6(t,P.dM(u),P.dM(u),P.dM(u),null)
t.eW(null,new H.ht(C.p,r,[s,u]),q,null)
return t},
mJ:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dD(a,b)},
v:function v(){},
fm:function fm(){},
dr:function dr(){},
fn:function fn(){},
ct:function ct(){},
bX:function bX(){},
bz:function bz(){},
bY:function bY(){},
bA:function bA(){},
cx:function cx(){},
fF:function fF(){},
Y:function Y(){},
cy:function cy(){},
fG:function fG(){},
b3:function b3(){},
b4:function b4(){},
fH:function fH(){},
fI:function fI(){},
fL:function fL(){},
aG:function aG(){},
fM:function fM(){},
dC:function dC(){},
dD:function dD(){},
fN:function fN(){},
fO:function fO(){},
jx:function jx(a,b){this.a=a
this.b=b},
U:function U(){},
fS:function fS(){},
o:function o(){},
k:function k(){},
aH:function aH(){},
cB:function cB(){},
fY:function fY(){},
h1:function h1(){},
aR:function aR(){},
h6:function h6(){},
c1:function c1(){},
cE:function cE(){},
cF:function cF(){},
b7:function b7(){},
dN:function dN(){},
hJ:function hJ(){},
cI:function cI(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
aT:function aT(){},
hO:function hO(){},
af:function af(){},
aq:function aq(a){this.a=a},
G:function G(){},
cO:function cO(){},
aU:function aU(){},
i3:function i3(){},
id:function id(){},
ie:function ie(a){this.a=a},
ih:function ih(){},
aV:function aV(){},
is:function is(){},
aW:function aW(){},
it:function it(){},
aX:function aX(){},
iw:function iw(){},
ix:function ix(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
e6:function e6(){},
iD:function iD(){},
iE:function iE(){},
cW:function cW(){},
aY:function aY(){},
aL:function aL(){},
iG:function iG(){},
iH:function iH(){},
iJ:function iJ(){},
aZ:function aZ(){},
b_:function b_(){},
iN:function iN(){},
iO:function iO(){},
bN:function bN(){},
j9:function j9(){},
jo:function jo(){},
bh:function bh(){},
d3:function d3(){},
d4:function d4(){},
jy:function jy(){},
ep:function ep(){},
jN:function jN(){},
eH:function eH(){},
k0:function k0(){},
k4:function k4(){},
jw:function jw(){},
jA:function jA(a){this.a=a},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jC:function jC(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jD:function jD(a){this.a=a},
bQ:function bQ(a){this.a=a},
H:function H(){},
dV:function dV(a){this.a=a},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(){},
jY:function jY(){},
jZ:function jZ(){},
k6:function k6(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k7:function k7(){},
k5:function k5(){},
dG:function dG(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
jW:function jW(a,b){this.a=a
this.b=b},
f6:function f6(a){this.a=a},
kh:function kh(a){this.a=a},
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
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){}},O={
l1:function(a){var u=new O.a5([a])
u.bF(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
lX:function(){var u,t,s=new O.dQ()
s.sf8(O.l1(V.al))
s.e.bh(s.gfH(),s.gfJ())
u=new O.b9(s,"emission")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.f=u
u=new O.b9(s,"ambient")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.r=u
u=new O.b9(s,"diffuse")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.x=u
u=new O.b9(s,"invDiffuse")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hA(s,"specular")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hw(s,"bump")
u.c=new A.ao(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b9(s,"reflect")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.hz(s,"refract")
u.c=new A.ao(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hv(s,"alpha")
u.c=new A.ao(!1,!1,!1)
u.f=1
s.db=u
u=new D.dL()
u.bF(D.ad)
u.seP(H.d([],[D.dB]))
u.shr(H.d([],[D.bK]))
u.seS(H.d([],[D.e4]))
u.y=u.x=null
u.cJ(u.gfF(),u.ghf(),u.ghj())
s.dx=u
t=new O.hy()
t.b=new V.aE(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.V():t
u.h(0,s.ghC())
u=s.dx
t=u.y
u=t==null?u.y=D.V():t
u.h(0,s.geX())
s.fr=null
return s},
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
b9:function b9(a,b){var _=this
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
bM:function bM(){}},E={
l4:function(){var u=new E.ap()
u.a=""
u.b=!0
u.seM(0,O.l1(E.ap))
u.y.bh(u.giL(),u.giO())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saa(0,null)
u.sbe(null)
u.saF(null)
return u},
of:function(a,b){var u=new E.i9(a)
u.eI(a,b)
return u},
ol:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibY)return E.mc(a,!0,!0,!0,!1)
u=W.lP()
t=u.style
t.width="100%"
t.height="100%"
s.gcc(a).h(0,u)
return E.mc(u,!0,!0,!0,!1)},
mc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e9(),j=H.h(C.n.ex(a,"webgl2",P.nV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(j==null)H.z(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.of(j,a)
H.a3(j.getParameter(3379))
H.a3(j.getParameter(34076))
u=new X.eg(a)
t=new X.hf()
t.c=new X.aA(!1,!1,!1)
t.shu(P.dM(P.m))
u.b=t
t=new X.hP(u)
t.f=0
t.r=V.bL()
t.x=V.bL()
t.ch=t.Q=1
u.c=t
t=new X.hn(u)
t.r=0
t.x=V.bL()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iM(u)
t.f=V.bL()
t.r=V.bL()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfk(H.d([],[[P.cU,P.R]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.gfR(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.gfX(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gfL(),o),!1,p))
t=u.z
n=W.b7
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.gh0(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.gfZ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.gh4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.gh8(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.gh6(),q),!1,r))
n=u.z
m=W.bh;(n&&C.a).h(n,W.ac(a,H.I(W.nJ(a)),H.n(u.gha(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.n(u.gfT(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.n(u.gfV(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.n(u.ghc(),o),!1,p))
p=u.z
o=W.b_
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.n(u.ghp(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.n(u.ghl(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.n(u.ghn(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dl()
return k},
fx:function fx(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
e9:function e9(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iI:function iI(a){this.a=a}},Z={
lk:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.di(c)),35044)
a.bindBuffer(b,null)
return new Z.el(b,u)},
aN:function(a){return new Z.bP(a)},
el:function el(a,b){this.a=a
this.b=b},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jp:function jp(a){this.a=a},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a){this.a=a}},D={
V:function(){var u=new D.c_()
u.sai(null)
u.saN(null)
u.c=null
u.d=0
return u},
fA:function fA(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
B:function B(){this.b=null},
c2:function c2(a){this.b=null
this.$ti=a},
c3:function c3(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dB:function dB(){},
ad:function ad(){},
dL:function dL(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bK:function bK(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){}},X={dw:function dw(a,b){this.a=a
this.b=b},dK:function dK(a,b){this.a=a
this.b=b},hf:function hf(){var _=this
_.d=_.c=_.b=_.a=null},dO:function dO(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bq:function bq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hP:function hP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cJ:function cJ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i4:function i4(){},eb:function eb(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iM:function iM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eg:function eg(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nL:function(a){var u=new X.h3(),t=new V.aE(0,0,0,1)
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
h3:function h3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){}},V={
kX:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bg(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.c.eo(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cm:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.af(u[p],s))}return u},
bH:function(){var u=$.hI
return u==null?$.hI=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m0:function(a,b,c){return V.ba(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ld:function(a,b,c,d){return V.ba(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lY:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m_:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bL:function(){var u=$.m4
return u==null?$.m4=new V.a9(0,0):u},
o0:function(){var u=$.cP
return u==null?$.cP=new V.a4(0,0,0):u},
m7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e_(a,b,c,d)},
d1:function(){var u=$.mp
return u==null?$.mp=new V.M(0,0,0):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a){this.a=a},
hH:function hH(a,b,c,d,e,f,g,h,i){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.E(a,0)
t=C.b.E(b,0)
s=new V.i8()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ii()
u.eJ(a)
return u},
iL:function(){var u=new V.iK(),t=P.f
u.shQ(new H.a2([t,V.cT]))
u.shS(new H.a2([t,V.cX]))
u.c=null
return u},
bk:function bk(){},
az:function az(){},
dP:function dP(){},
au:function au(){this.a=null},
i8:function i8(){this.b=this.a=null},
ii:function ii(){this.a=null},
cT:function cT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.b=a
this.c=null},
iK:function iK(){this.c=this.b=this.a=null},
cY:function cY(a){this.b=a
this.a=this.c=null},
pL:function(a){P.om(C.P,new V.kR(a))},
oh:function(a){var u=new V.im()
u.eL(a,!0)
return u},
bB:function bB(){},
kR:function kR(a){this.a=a},
fK:function fK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h4:function h4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h5:function h5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a){this.a=a
this.c=null},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(){this.b=this.a=null},
ip:function ip(a){this.a=a},
io:function io(a){this.a=a},
iq:function iq(a){this.a=a}},U={
l2:function(){var u=new U.fB()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dz:function(a){var u=new U.dy()
if(a==null)a=V.bH()
if(null!=a)u.a=a
return u},
l5:function(){var u=new U.cD()
u.bF(U.ab)
u.bh(u.geT(),u.ghh())
u.e=null
u.f=V.bH()
u.r=0
return u},
fB:function fB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){this.b=this.a=null},
cD:function cD(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e0:function e0(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lt:function(a,b,c,d,e,f,g,h){var u,t,s,r,q=c>1?1:c,p=d>1?1:d,o=e>1?1:e,n=new V.a6(q,p,o),m=U.l5()
m.h(0,U.dz(V.m0(0,0,2)))
o=new U.e0()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.sev(0)
o.sec(0,0)
o.sej(0)
q=o.d
if(!(Math.abs(q-f)<$.L().a)){o.d=f
q=new D.K("deltaYaw",q,f,[P.p])
q.b=!0
o.H(q)}q=o.e
if(!(Math.abs(q-g)<$.L().a)){o.e=g
q=new D.K("deltaPitch",q,g,[P.p])
q.b=!0
o.H(q)}q=o.f
if(!(Math.abs(q-h)<$.L().a)){o.f=h
q=new D.K("deltaRoll",q,h,[P.p])
q.b=!0
o.H(q)}m.h(0,o)
u=E.l4()
q=U.l5()
q.h(0,U.dz(V.ld(0.1,0.1,0.1,1)))
q.h(0,m)
u.saF(q)
u.saa(0,F.n2(8,8))
q=O.lX()
q.f.saS(0,n)
u.sbe(q)
t=new D.bK()
t.c=new V.a6(1,1,1)
t.r=1
t.y=t.x=0
t.z=!0
t.a=V.bH()
s=t.b
t.b=m
m.gv().h(0,t.geQ())
q=new D.K("mover",s,t.b,[U.ab])
q.b=!0
t.a8(q)
if(!t.c.u(0,n)){s=t.c
t.c=n
q=new D.K("color",s,n,[V.a6])
q.b=!0
t.a8(q)}q=$.mq
if(q==null){q=new V.bs(1,0.00390625,0.0000152587890625,0)
$.mq=q
r=q}else r=q
if(!J.Q(t.f,r)){s=t.f
t.f=r
q=new D.K("shadowAdjust",s,r,[V.bs])
q.b=!0
t.a8(q)}q=t.r
if(!(Math.abs(q-1)<$.L().a)){t.r=1
q=new D.K("attenuation0",q,1,[P.p])
q.b=!0
t.a8(q)}q=t.x
if(!(Math.abs(q-0.5)<$.L().a)){t.x=0.5
q=new D.K("attenuation1",q,0.5,[P.p])
q.b=!0
t.a8(q)}q=t.y
if(!(Math.abs(q-0.15)<$.L().a)){t.y=0.15
q=new D.K("attenuation2",q,0.15,[P.p])
q.b=!0
t.a8(q)}a.dx.h(0,t)
b.e.h(0,u)},
mX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.oh("Test 021"),a=W.lP()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.f]
b.dA(H.d(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],u))
b.i1(H.d(["shapes"],u))
b.dA(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.z(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.ol(t,!0,!0,!0,!1)
r=E.l4()
r.saF(U.dz(V.bH()))
r.saa(0,F.n4())
q=E.l4()
q.saF(U.dz(V.ld(3,3,3,1)))
p=F.ly(1,d,d,1)
p.cn()
q.saa(0,p)
o=U.l5()
p=s.r
n=new U.ei()
m=U.l2()
m.scH(0,!0)
m.scs(6.283185307179586)
m.scu(0)
m.sZ(0,0)
m.sct(100)
m.sV(0)
m.scf(0.5)
n.b=m
l=n.gaM()
m.gv().h(0,l)
m=U.l2()
m.scH(0,!0)
m.scs(6.283185307179586)
m.scu(0)
m.sZ(0,0)
m.sct(100)
m.sV(0)
m.scf(0.5)
n.c=m
m.gv().h(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.aA(!1,!1,!1)
j=n.d
n.d=k
m=[X.aA]
l=new D.K(c,j,k,m)
l.b=!0
n.H(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.K("invertX",l,!1,[P.T])
l.b=!0
n.H(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.K("invertY",l,!1,[P.T])
l.b=!0
n.H(l)}n.b3(p)
o.h(0,n)
p=s.r
n=new U.eh()
l=U.l2()
l.scH(0,!0)
l.scs(6.283185307179586)
l.scu(0)
l.sZ(0,0)
l.sct(100)
l.sV(0)
l.scf(0.2)
n.b=l
l.gv().h(0,n.gaM())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.aA(!0,!1,!1)
j=n.c
n.c=k
l=new D.K(c,j,k,m)
l.b=!0
n.H(l)
n.b3(p)
o.h(0,n)
p=s.r
n=new U.ej()
n.c=0.01
n.e=n.d=0
k=new X.aA(!1,!1,!1)
n.b=k
m=new D.K(c,d,k,m)
m.b=!0
n.H(m)
n.b3(p)
o.h(0,n)
o.h(0,U.dz(V.m0(0,0,5)))
i=O.lX()
p=i.r
p.saS(0,new V.a6(0.15,0.15,0.15))
p=i.x
p.saS(0,new V.a6(0.4,0.4,0.4))
p=i.z
p.saS(0,new V.a6(0.3,0.3,0.3))
p=i.z
p.dn(new A.ao(!0,!1,!1))
p.dq(100)
h=new M.dE()
h.a=!0
h.sfb(0,O.l1(E.ap))
h.e.bh(h.gfN(),h.gfP())
h.y=h.x=h.r=h.f=null
g=X.nL(d)
f=new X.dX()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saF(d)
p=f.c
if(!(Math.abs(p-1.0471975511965976)<$.L().a)){f.c=1.0471975511965976
p=new D.K("fov",p,1.0471975511965976,[P.p])
p.b=!0
f.aK(p)}p=f.d
if(!(Math.abs(p-0.1)<$.L().a)){f.d=0.1
p=new D.K("near",p,0.1,[P.p])
p.b=!0
f.aK(p)}p=f.e
if(!(Math.abs(p-2000)<$.L().a)){f.e=2000
p=new D.K("far",p,2000,[P.p])
p.b=!0
f.aK(p)}p=h.b
if(p!==f){if(p!=null)p.gv().M(0,h.gar())
j=h.b
h.b=f
f.gv().h(0,h.gar())
p=new D.K("camera",j,h.b,[X.dx])
p.b=!0
h.ay(p)}p=h.c
if(p!==g){if(p!=null)p.gv().M(0,h.gar())
j=h.c
h.c=g
g.gv().h(0,h.gar())
p=new D.K("target",j,h.c,[X.e7])
p.b=!0
h.ay(p)}h.sbe(d)
h.sbe(i)
h.e.h(0,q)
h.e.h(0,r)
h.b.saF(o)
p=s.d
if(p!==h){if(p!=null)p.gv().M(0,s.gcP())
s.d=h
h.gv().h(0,s.gcP())
s.cQ()}U.lt(i,h,1,0,0,0.3,0,0)
U.lt(i,h,0,1,0,0,0.4,0)
U.lt(i,h,0,0,1,0.5,0.5,0)
p=new V.i6("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
p.b2(0,"Cube",new U.kI(r))
p.b2(0,"Cylinder",new U.kJ(r))
p.b2(0,"Cone",new U.kK(r))
p.b2(0,"Sphere",new U.kL(r))
p.dw(0,"Toroid",new U.kM(r),!0)
p.b2(0,"Knot",new U.kN(r))
u=s.z
if(u==null)u=s.z=D.V()
p={func:1,ret:-1,args:[D.B]}
n=H.n(new U.kO(b,i),p)
if(u.b==null)u.saN(H.d([],[p]))
u=u.b;(u&&C.a).h(u,n)
V.pL(s)},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b}},M={dE:function dE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nY:function(a,b){var u=a.b6,t=new A.hu(b,u)
t.eK(b,u)
t.eH(a,b)
return t},
nZ:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aF],"$ab")
H.l(b0,"$ib",[A.aI],"$ab")
H.l(b1,"$ib",[A.aJ],"$ab")
u="MaterialLight_"+a0.gao(a0)+a1.gao(a1)+a2.gao(a2)+a3.gao(a3)+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+"_"
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
f=$.bx()
if(j){t=$.bw()
f=new Z.bP(f.a|t.a)}if(i){t=$.bv()
f=new Z.bP(f.a|t.a)}if(h){t=$.bu()
f=new Z.bP(f.a|t.a)}return new A.hx(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kp:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kq:function(a,b,c){var u
A.kp(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kU(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oZ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kp(b,t,"emission")
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
A.kq(b,t,"ambient")
b.a+="\n"},
oX:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kq(b,t,"diffuse")
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
A.kq(b,t,"invDiffuse")
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
A.kq(b,t,"specular")
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
A.kp(b,t,"reflect")
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
A.kp(b,t,"refract")
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
s=A.kU(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ah()
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
s=A.kU(t)
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
if(typeof u!=="number")return u.ah()
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
s=A.kU(t)
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
if(typeof u!=="number")return u.ah()
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
p7:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ah("")
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
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a7(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
kU:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.a7(a,1)},
lh:function(a,b,c,d,e){var u=new A.iU(a,c,e)
u.f=d
u.si_(P.nW(d,0,P.m))
return u},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){var _=this
_.jv=_.ju=_.dJ=_.dI=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jI=_.jH=_.jG=_.cm=_.cl=_.ck=_.cj=_.ci=_.cg=_.jF=_.jE=_.dQ=_.jD=_.jC=_.dP=_.dO=_.jB=_.jA=_.dN=_.dM=_.jz=_.jy=_.dL=_.jx=_.jw=_.dK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aF:function aF(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
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
_.b6=b3
_.dI=b4},
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
cS:function cS(){},
ec:function ec(){},
iZ:function iZ(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
cd:function cd(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ly:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
u=F.lf()
F.dh(u,b,c,d,a,1,0,0,1)
F.dh(u,b,c,d,a,0,1,0,3)
F.dh(u,b,c,d,a,0,0,1,2)
F.dh(u,b,c,d,a,-1,0,0,0)
F.dh(u,b,c,d,a,0,-1,0,0)
F.dh(u,b,c,d,a,0,0,-1,3)
u.av()
return u},
kk:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dh:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.M(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.M(p+a3,o+a1,n+a2)
l=new V.M(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.M(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kk(u)
g=F.kk(e.b)
f=F.lE(d,a0,new F.kj(e,F.kk(e.c),F.kk(e.d),g,h,c),b)
if(f!=null)a.bb(f)},
mP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.lf()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.aj])
q=u.a
p=new V.M(0,0,t)
p=p.w(0,Math.sqrt(p.D(p)))
C.a.h(r,q.i5(new V.bc(a,-1,-1,-1),new V.aE(1,1,1,1),new V.a4(0,0,c),new V.M(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.M(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ek(new V.bc(a,-1,-1,-1),null,new V.aE(i,g,h,1),new V.a4(m*k,l*k,c),new V.M(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.i3(r)
return u},
mN:function(a,b,c){return F.pp(!0,a,1,new F.kv(1,c),b)},
pp:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.lE(c,e,new F.kx(d),null)
if(u==null)return
u.av()
u.c6()
if(b)u.bb(F.mP(3,!1,1,new F.ky(d),e))
u.bb(F.mP(1,!0,-1,new F.kz(d),e))
return u},
n2:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kS()
t=F.ly(a,null,new F.kT(s,1),b)
t.c6()
return t},
n4:function(){return F.mO(15,30,0.5,1,new F.kV())},
pE:function(){return F.mO(12,120,0.3,1,new F.kG(3,2))},
mO:function(a,b,c,d,e){var u=F.lE(a,b,new F.kw(H.n(e,{func:1,ret:V.a4,args:[P.p]}),d,b,c),null)
if(u==null)return
u.av()
u.c6()
return u},
lE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.lf()
t=H.d([],[F.aj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ek(g,g,new V.aE(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ce(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ek(g,g,new V.aE(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ce(d))}}u.d.i4(a+1,b+1,t)
return u},
cA:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.D("May not create a face with vertices attached to different shapes."))
u.c4(a)
u.c5(b)
u.hI(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nS:function(a,b){var u=new F.bp(),t=a.a
if(t==null)H.z(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.D("May not create a line with vertices attached to different shapes."))
u.c4(a)
u.c5(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lf:function(){var u=new F.e2(),t=new F.jd(u)
t.b=!1
t.si0(H.d([],[F.aj]))
u.a=t
t=new F.il(u)
t.sbY(H.d([],[F.bJ]))
u.b=t
t=new F.ik(u)
t.sfs(H.d([],[F.bp]))
u.c=t
t=new F.ij(u)
t.sfl(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
ek:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.jl()
r.sbY(H.d([],[F.bJ]))
s.b=r
r=new F.jh()
u=[F.bp]
r.sft(H.d([],u))
r.sfu(H.d([],u))
s.c=r
r=new F.je()
u=[F.a8]
r.sfm(H.d([],u))
r.sfn(H.d([],u))
r.sfo(H.d([],u))
s.d=r
h=$.ni()
s.e=0
r=$.bx()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bw().a)!==0?e:t
s.x=(u&$.bv().a)!==0?b:t
s.y=(u&$.bU().a)!==0?f:t
s.z=(u&$.bV().a)!==0?g:t
s.Q=(u&$.nj().a)!==0?c:t
s.ch=(u&$.cs().a)!==0?i:0
s.cx=(u&$.bu().a)!==0?a:t
return s},
kj:function kj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kv:function kv(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kS:function kS(){},
kT:function kT(a,b){this.a=a
this.b=b},
kV:function kV(){},
kG:function kG(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(){},
ir:function ir(){},
bp:function bp(){this.b=this.a=null},
hh:function hh(){},
iT:function iT(){},
bJ:function bJ(){this.a=null},
e2:function e2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
il:function il(a){this.a=a
this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jn:function jn(a){this.a=a},
jm:function jm(a){this.a=a},
jd:function jd(a){this.a=a
this.c=this.b=null},
je:function je(){this.d=this.c=this.b=null},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(){this.c=this.b=null},
jj:function jj(){},
ji:function ji(){},
jk:function jk(){},
hX:function hX(){},
jl:function jl(){this.b=null}},T={e8:function e8(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l9.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gJ:function(a){return H.cQ(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.hb.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iT:1}
J.dI.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dJ.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i1.prototype={}
J.bO.prototype={}
J.bo.prototype={
i:function(a){var u=a[$.n6()]
if(u==null)return this.eD(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aS.prototype={
h:function(a,b){H.C(b,H.r(a,0))
if(!!a.fixed$length)H.z(P.J("add"))
a.push(b)},
eg:function(a,b){if(!!a.fixed$length)H.z(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dZ(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.z(P.J("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bl(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iG:function(a){return this.m(a,"")},
iy:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bl(a))}return t},
ix:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bl(a))}throw H.c(H.ha())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eA:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.r(a,0)])
return H.d(a.slice(b,c),[H.r(a,0)])},
giw:function(a){if(a.length>0)return a[0]
throw H.c(H.ha())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ha())},
bi:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.z(P.J("setRange"))
P.br(b,c,a.length)
u=c-b
if(u===0)return
P.le(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cn(d)
if(u>s.gn(d))throw H.c(H.nO())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dB:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bl(a))}return!1},
bD:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.z(P.J("sort"))
H.e3(a,0,a.length-1,b,u)},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.l6(a,"[","]")},
gT:function(a){return new J.at(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cQ(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.J("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cl(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.r(a,0))
if(!!a.immutable$list)H.z(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cl(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bi(t,0,a.length,a)
this.bi(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.l8.prototype={}
J.at.prototype={
gL:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.sd5(null)
return!1}t.sd5(s[u]);++t.c
return!0},
sd5:function(a){this.d=H.C(a,H.r(this,0))},
$ib6:1}
J.bG.prototype={
ih:function(a,b){var u
H.mY(b)
if(typeof b!=="number")throw H.c(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbs(b)
if(this.gbs(a)===u)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
dS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eo:function(a,b){var u
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.q("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a-b},
q:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a*b},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ds(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.ds(a,b)},
ds:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aP:function(a,b){var u
if(a>0)u=this.dr(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hN:function(a,b){if(b<0)throw H.c(H.ax(b))
return this.dr(a,b)},
dr:function(a,b){return b>31?0:a>>>b},
ap:function(a,b){if(typeof b!=="number")throw H.c(H.ax(b))
return a>b},
$ip:1,
$iaa:1}
J.dH.prototype={$im:1}
J.hc.prototype={}
J.bn.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cl(a,b))
if(b>=a.length)H.z(H.cl(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.cl(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l_(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
c=P.br(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ab:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a0:function(a,b){return this.ab(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.ax(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dZ(b,null))
if(b>c)throw H.c(P.dZ(b,null))
if(c>a.length)throw H.c(P.dZ(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.B(a,b,null)},
jd:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
dZ:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dY:function(a,b){return this.dZ(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im2:1,
$if:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad0:function(){return[P.m]},
$ax:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fR.prototype={}
H.c4.prototype={
gT:function(a){var u=this
return new H.cG(u,u.gn(u),[H.ar(u,"c4",0)])},
bA:function(a,b){return this.eC(0,H.n(b,{func:1,ret:P.T,args:[H.ar(this,"c4",0)]}))}}
H.cG.prototype={
gL:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.cn(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bl(s))
u=t.c
if(u>=q){t.saZ(null)
return!1}t.saZ(r.K(s,u));++t.c
return!0},
saZ:function(a){this.d=H.C(a,H.r(this,0))},
$ib6:1}
H.hr.prototype={
gT:function(a){return new H.hs(J.by(this.a),this.b,this.$ti)},
gn:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fl(this.a,b))},
$aj:function(a,b){return[b]}}
H.hs.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.saZ(u.c.$1(t.gL(t)))
return!0}u.saZ(null)
return!1},
gL:function(a){return this.a},
saZ:function(a){this.a=H.C(a,H.r(this,1))},
$ab6:function(a,b){return[b]}}
H.ht.prototype={
gn:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fl(this.a,b))},
$ac4:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d2.prototype={
gT:function(a){return new H.jq(J.by(this.a),this.b,this.$ti)}}
H.jq.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.F(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c0.prototype={}
H.d0.prototype={
k:function(a,b,c){H.C(c,H.ar(this,"d0",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.ee.prototype={}
H.fD.prototype={
i:function(a){return P.lc(this)},
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
return H.nF()},
$iy:1}
H.fE.prototype={
gn:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bp(0,b))return
return this.d7(b)},
d7:function(a){return this.b[H.I(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.d7(r),p))}}}
H.iQ.prototype={
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
H.hY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.he.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j2.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kW.prototype={
$1:function(a){if(!!J.X(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eU.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cw.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibE:1,
gjk:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iF.prototype={}
H.iv.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.cu.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cu))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cQ(this.a)
else u=typeof t!=="object"?J.dq(t):H.cQ(t)
return(u^H.cQ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.iS.prototype={
i:function(a){return this.a}}
H.fz.prototype={
i:function(a){return this.a}}
H.ig.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jr.prototype={
i:function(a){return"Assertion failed: "+P.dF(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giF:function(a){return this.a===0},
ga1:function(a){return new H.hj(this,[H.r(this,0)])},
bp:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d2(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d2(t,b)}else return s.iB(b)},
iB:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cq(u.bM(t,u.cp(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.iC(b)},
iC:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bM(r,s.cp(a))
t=s.cq(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.r(s,0))
H.C(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cT(u==null?s.b=s.bW():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cT(t==null?s.c=s.bW():t,b,c)}else s.iD(b,c)},
iD:function(a,b){var u,t,s,r,q=this
H.C(a,H.r(q,0))
H.C(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bW()
t=q.cp(a)
s=q.bM(u,t)
if(s==null)q.c2(u,t,[q.bG(a,b)])
else{r=q.cq(s,a)
if(r>=0)s[r].b=b
else s.push(q.bG(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bl(s))
u=u.c}},
cT:function(a,b,c){var u,t=this
H.C(b,H.r(t,0))
H.C(c,H.r(t,1))
u=t.bk(a,b)
if(u==null)t.c2(a,b,t.bG(b,c))
else u.b=c},
f1:function(){this.r=this.r+1&67108863},
bG:function(a,b){var u,t=this,s=new H.hi(H.C(a,H.r(t,0)),H.C(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f1()
return s},
cp:function(a){return J.dq(a)&0x3ffffff},
cq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.lc(this)},
bk:function(a,b){return a[b]},
bM:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
fg:function(a,b){delete a[b]},
d2:function(a,b){return this.bk(a,b)!=null},
bW:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c2(t,u,t)
this.fg(t,u)
return t}}
H.hi.prototype={}
H.hj.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hk(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hk.prototype={
gL:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bl(t))
else{t=u.c
if(t==null){u.scU(null)
return!1}else{u.scU(t.a)
u.c=u.c.c
return!0}}},
scU:function(a){this.d=H.C(a,H.r(this,0))},
$ib6:1}
H.kC.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kE.prototype={
$1:function(a){return this.a(H.I(a))},
$S:54}
H.hd.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im2:1,
$iod:1}
H.cL.prototype={$icL:1}
H.bI.prototype={$ibI:1}
H.dS.prototype={
gn:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cM.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pr(c)
H.bj(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.p]},
$ax:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.dT.prototype={
k:function(a,b,c){H.a3(c)
H.bj(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.m]},
$ax:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hQ.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.dU.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.cN.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icN:1,
$iS:1}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
P.jt.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.js.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.ju.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jv.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f_.prototype={
eZ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.k9(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
f_:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.k8(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibe:1}
P.k9.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k8.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eG(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bi.prototype={
iI:function(a){if(this.c!==6)return!0
return this.b.b.cE(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
iA:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fh(u,{func:1,args:[P.R,P.av]}))return H.lz(r.j7(u,a.a,a.b,null,t,P.av),s)
else return H.lz(r.cE(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aO.prototype={
en:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pg(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aO($.a1,[c])
s=b==null?1:3
this.cW(new P.bi(t,s,a,b,[r,c]))
return t},
ja:function(a,b){return this.en(a,null,b)},
cW:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaO")
s=u.a
if(s<4){u.cW(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kt(null,null,s,H.n(new P.jE(t,a),{func:1,ret:-1}))}},
dj:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaO")
u=q.a
if(u<4){q.dj(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
u=p.b
u.toString
P.kt(null,null,u,H.n(new P.jI(o,p),{func:1,ret:-1}))}},
c_:function(){var u=H.h(this.c,"$ibi")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cZ:function(a){var u,t,s=this,r=H.r(s,0)
H.lz(a,{futureOr:1,type:r})
u=s.$ti
if(H.lv(a,"$icC",u,"$acC"))if(H.lv(a,"$iaO",u,null))P.mr(a,s)
else P.oy(a,s)
else{t=s.c_()
H.C(a,r)
s.a=4
s.c=a
P.d5(s,t)}},
d_:function(a,b){var u,t=this
H.h(b,"$iav")
u=t.c_()
t.a=8
t.c=new P.an(a,b)
P.d5(t,u)},
$icC:1}
P.jE.prototype={
$0:function(){P.d5(this.a,this.b)},
$S:0}
P.jI.prototype={
$0:function(){P.d5(this.b,this.a.a)},
$S:0}
P.jF.prototype={
$1:function(a){var u=this.a
u.a=0
u.cZ(a)},
$S:18}
P.jG.prototype={
$2:function(a,b){H.h(b,"$iav")
this.a.d_(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jH.prototype={
$0:function(){this.a.d_(this.b,this.c)},
$S:0}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ek(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.cp(r)
if(o.d){s=H.h(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.X(n).$icC){if(n instanceof P.aO&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ja(new P.jM(p),null)
s.a=!1}},
$S:3}
P.jM.prototype={
$1:function(a){return this.a},
$S:46}
P.jK.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.C(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cE(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cp(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$ian")
r=m.c
if(H.F(r.iI(u))&&r.e!=null){q=m.b
q.b=r.iA(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cp(p)
r=H.h(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.em.prototype={}
P.iy.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aO($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iA(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iB(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.iA.prototype={
$1:function(a){H.C(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.r(this.b,0)]}}}
P.iB.prototype={
$0:function(){this.b.cZ(this.a.a)},
$S:0}
P.cU.prototype={}
P.iz.prototype={}
P.be.prototype={}
P.an.prototype={
i:function(a){return H.i(this.a)},
$ibD:1}
P.ki.prototype={$iqn:1}
P.ks.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dW():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jS.prototype={
j8:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mD(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kr(r,r,this,u,H.h(t,"$iav"))}},
j9:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mE(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cp(s)
P.kr(r,r,this,u,H.h(t,"$iav"))}},
ib:function(a,b){return new P.jU(this,H.n(a,{func:1,ret:b}),b)},
c7:function(a){return new P.jT(this,H.n(a,{func:1,ret:-1}))},
dD:function(a,b){return new P.jV(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ek:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mD(null,null,this,a,b)},
cE:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a1===C.f)return a.$1(b)
return P.mE(null,null,this,a,b,c,d)},
j7:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.ph(null,null,this,a,b,c,d,e,f)}}
P.jU.prototype={
$0:function(){return this.a.ek(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jT.prototype={
$0:function(){return this.a.j8(this.b)},
$S:3}
P.jV.prototype={
$1:function(a){var u=this.c
return this.a.j9(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jQ.prototype={
gT:function(a){var u=this,t=new P.eB(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icg")!=null}else{t=this.fc(b)
return t}},
fc:function(a){var u=this.d
if(u==null)return!1
return this.bK(this.d8(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cV(u==null?s.b=P.lm():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cV(t==null?s.c=P.lm():t,b)}else return s.f2(0,b)},
f2:function(a,b){var u,t,s,r=this
H.C(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lm()
t=r.d0(b)
s=u[t]
if(s==null)u[t]=[r.bX(b)]
else{if(r.bK(s,b)>=0)return!1
s.push(r.bX(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hx(this.c,b)
else return this.hw(0,b)},
hw:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d8(r,b)
t=s.bK(u,b)
if(t<0)return!1
s.dt(u.splice(t,1)[0])
return!0},
cV:function(a,b){H.C(b,H.r(this,0))
if(H.h(a[b],"$icg")!=null)return!1
a[b]=this.bX(b)
return!0},
hx:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icg")
if(u==null)return!1
this.dt(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bX:function(a){var u,t=this,s=new P.cg(H.C(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dd()
return s},
dt:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dd()},
d0:function(a){return J.dq(a)&1073741823},
d8:function(a,b){return a[this.d0(b)]},
bK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cg.prototype={}
P.eB.prototype={
gL:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bl(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(H.C(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scY:function(a){this.d=H.C(a,H.r(this,0))},
$ib6:1}
P.hl.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hm.prototype={$ij:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cG(a,this.gn(a),[H.bS(this,a,"x",0)])},
K:function(a,b){return this.j(a,b)},
jc:function(a,b){var u,t=this,s=H.d([],[H.bS(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jb:function(a){return this.jc(a,!0)},
p:function(a,b){var u,t=this,s=[H.bS(t,a,"x",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bi(u,0,t.gn(a),a)
C.a.bi(u,t.gn(a),u.length,b)
return u},
iu:function(a,b,c,d){var u
H.C(d,H.bS(this,a,"x",0))
P.br(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l6(a,"[","]")}}
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
P.ae.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bS(s,a,"ae",0),H.bS(s,a,"ae",1)]})
for(u=J.by(s.ga1(a));u.C();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aD(this.ga1(a))},
i:function(a){return P.lc(a)},
$iy:1}
P.ka.prototype={
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hq.prototype={
j:function(a,b){return J.dp(this.a,b)},
k:function(a,b,c){J.kY(this.a,H.C(b,H.r(this,0)),H.C(c,H.r(this,1)))},
I:function(a,b){J.lI(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aD(this.a)},
i:function(a){return J.as(this.a)},
$iy:1}
P.ef.prototype={}
P.jX.prototype={
at:function(a,b){var u
for(u=J.by(H.l(b,"$ij",this.$ti,"$aj"));u.C();)this.h(0,u.gL(u))},
i:function(a){return P.l6(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.le(b,"index")
for(u=P.oC(r,r.r,H.r(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,r,"index",null,t))},
$ij:1,
$im9:1}
P.eC.prototype={}
P.f4.prototype={}
P.fv.prototype={
iK:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.br(a0,a1,b.length)
u=$.nl()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kB(C.b.E(b,n))
j=H.kB(C.b.E(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ah("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.lM(b,p,a1,q,o,f)
else{e=C.e.bg(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aX(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lM(b,p,a1,q,o,d)
else{e=C.e.bg(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aX(b,a1,a1,e===2?"==":"=")}return b},
$abZ:function(){return[[P.b,P.m],P.f]}}
P.fw.prototype={
$abC:function(){return[[P.b,P.m],P.f]}}
P.bZ.prototype={}
P.bC.prototype={}
P.fT.prototype={
$abZ:function(){return[P.f,[P.b,P.m]]}}
P.h8.prototype={
i:function(a){return this.a}}
P.h7.prototype={
fd:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ah("")
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ny(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.f,P.f]}}
P.ja.prototype={
git:function(){return C.N}}
P.jc.prototype={
cd:function(a){var u,t,s=P.br(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kg(u)
if(t.fp(a,0,s)!==s)t.dv(J.nu(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oS(0,t.b,u.length)))},
$abC:function(){return[P.f,[P.b,P.m]]}}
P.kg.prototype={
dv:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fp:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dv(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jb.prototype={
cd:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.op(!1,a,0,null)
if(u!=null)return u
t=P.br(0,null,J.aD(a))
s=P.mG(a,0,t)
if(s>0){r=P.cV(a,0,s)
if(s===t)return r
q=new P.ah(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ah("")
n=new P.kf(!1,q)
n.c=o
n.ii(a,p,t)
if(n.e>0){H.z(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abC:function(){return[[P.b,P.m],P.f]}}
P.kf.prototype={
ii:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cn(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ah()
if((o&192)!==128){n=P.a7(h+C.e.bf(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.e.bf(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.bf(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c7(u)
i.c=!1}for(n=p<c;n;){m=P.mG(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cV(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.bf(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.bf(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.T.prototype={}
P.ay.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aP(u,30))&1073741823},
i:function(a){var u=this,t=P.nG(H.o9(u)),s=P.dA(H.o7(u)),r=P.dA(H.o3(u)),q=P.dA(H.o4(u)),p=P.dA(H.o6(u)),o=P.dA(H.o8(u)),n=P.nH(H.o5(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.e.p(this.a,b.gd6()))},
t:function(a,b){return new P.b5(C.e.t(this.a,b.gd6()))},
ap:function(a,b){return C.e.ap(this.a,b.gd6())},
u:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fQ(),q=this.a
if(q<0)return"-"+new P.b5(0-q).i(0)
u=r.$1(C.e.a5(q,6e7)%60)
t=r.$1(C.e.a5(q,1e6)%60)
s=new P.fP().$1(q%1e6)
return""+C.e.a5(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fP.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fQ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bD.prototype={}
P.fp.prototype={
i:function(a){return"Assertion failed"}}
P.dW.prototype={
i:function(a){return"Throw of null."}}
P.aQ.prototype={
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbJ()+o+u
if(!q.a)return t
s=q.gbI()
r=P.dF(q.b)
return t+s+": "+r}}
P.c8.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h9.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t=H.a3(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j3.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j0.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fC.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dF(u)+"."}}
P.i0.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.e5.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fJ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eu.prototype={
i:function(a){return"Exception: "+this.a}}
P.h2.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
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
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bE.prototype={}
P.m.prototype={}
P.j.prototype={
bA:function(a,b){var u=H.ar(this,"j",0)
return new H.d2(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.C();)++u
return u},
gaI:function(a){var u,t=this.gT(this)
if(!t.C())throw H.c(H.ha())
u=t.gL(t)
if(t.C())throw H.c(H.nP())
return u},
K:function(a,b){var u,t,s
P.le(b,"index")
for(u=this.gT(this),t=0;u.C();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nN(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.P.prototype={
gJ:function(a){return P.R.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
u:function(a,b){return this===b},
gJ:function(a){return H.cQ(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.f.prototype={$im2:1}
P.ah.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipY:1}
P.j8.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iy",[r,r],"$ay")
H.I(b)
u=J.dl(b).dY(b,"=")
if(u===-1){if(b!=="")J.kY(a,P.lo(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.a7(b,u+1)
r=this.a
J.kY(a,P.lo(t,0,t.length,r,!0),P.lo(s,0,s.length,r,!0))}return a},
$S:45}
P.j5.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j6.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j7.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fk(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ch.prototype={
geu:function(){return this.b},
gco:function(a){var u=this.c
if(u==null)return""
if(C.b.a0(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbu:function(a){var u=this.d
if(u==null)return P.mv(this.a)
return u},
gcz:function(a){var u=this.f
return u==null?"":u},
gdT:function(){var u=this.r
return u==null?"":u},
eh:function(a,b){var u,t,s,r,q,p,o,n,m=this
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
if(o&&!C.b.a0(p,"/"))p="/"+p
n=P.ln(null,0,0,b)
return new P.ch(u,s,q,r,p,n,m.r)},
gcA:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shv(new P.ef(P.mj(u==null?"":u),[t,t]))}return s.Q},
gdU:function(){return this.c!=null},
gdX:function(){return this.f!=null},
gdV:function(){return this.r!=null},
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
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.X(b).$ili)if(s.a==b.gbC())if(s.c!=null===b.gdU())if(s.b==b.geu())if(s.gco(s)==b.gco(b))if(s.gbu(s)==b.gbu(b))if(s.e===b.geb(b)){u=s.f
t=u==null
if(!t===b.gdX()){if(t)u=""
if(u===b.gcz(b)){u=s.r
t=u==null
if(!t===b.gdV()){if(t)u=""
u=u===b.gdT()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shv:function(a){var u=P.f
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ili:1,
gbC:function(){return this.a},
geb:function(a){return this.e}}
P.kb.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.kc.prototype={
$1:function(a){return P.f5(C.W,a,C.h,!1)},
$S:23}
P.ke.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f5(C.m,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f5(C.m,b,C.h,!0))}},
$S:24}
P.kd.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.by(H.mW(b,"$ij")),t=this.a;u.C();)t.$2(a,H.I(u.gL(u)))},
$S:40}
P.j4.prototype={
ges:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.dZ(u,"?",o)
s=u.length
if(t>=0){r=P.dg(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.jz("data",p,p,p,P.dg(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.km.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kl.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nv(u,0,96,b)
return u},
$S:39}
P.kn.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.E(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.ko.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.E(b,0),t=C.b.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.k_.prototype={
gdU:function(){return this.c>0},
gdW:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gdX:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdV:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.b.a0(this.a,"http")},
gdc:function(){return this.b===5&&C.b.a0(this.a,"https")},
gbC:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gda())q=t.x="http"
else if(t.gdc()){t.x="https"
q="https"}else if(q===4&&C.b.a0(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a0(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geu:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gco:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbu:function(a){var u,t=this
if(t.gdW()){u=t.d
if(typeof u!=="number")return u.p()
return P.fk(C.b.B(t.a,u+1,t.e),null,null)}if(t.gda())return 80
if(t.gdc())return 443
return 0},
geb:function(a){return C.b.B(this.a,this.e,this.f)},
gcz:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.B(this.a,u+1,t):""},
gdT:function(){var u=this.r,t=this.a
return u<t.length?C.b.a7(t,u+1):""},
gcA:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.f
return new P.ef(P.mj(u.gcz(u)),[t,t])},
eh:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.f,null],"$ay")
u=k.gbC()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.gdW()?k.gbu(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a0(o,"/"))o="/"+o
m=P.ln(j,0,0,b)
n=k.r
l=n<s.length?C.b.a7(s,n+1):j
return new P.ch(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$ili&&this.a===b.i(0)},
i:function(a){return this.a},
$ili:1}
P.jz.prototype={}
W.v.prototype={}
W.fm.prototype={
gn:function(a){return a.length}}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.ct.prototype={$ict:1}
W.bX.prototype={$ibX:1}
W.bz.prototype={$ibz:1}
W.bY.prototype={
ex:function(a,b,c){var u=a.getContext(b,P.po(c))
return u},
$ibY:1}
W.bA.prototype={
gn:function(a){return a.length}}
W.cx.prototype={$icx:1}
W.fF.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cy.prototype={
gn:function(a){return a.length}}
W.fG.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fH.prototype={
gn:function(a){return a.length}}
W.fI.prototype={
gn:function(a){return a.length}}
W.fL.prototype={
gn:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.fM.prototype={
i:function(a){return String(a)}}
W.dC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$iam",[P.aa],"$aam")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.am,P.aa]]},
$ax:function(){return[[P.am,P.aa]]},
$ij:1,
$aj:function(){return[[P.am,P.aa]]},
$ib:1,
$ab:function(){return[[P.am,P.aa]]},
$aH:function(){return[[P.am,P.aa]]}}
W.dD.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaH(a))+" x "+H.i(this.gaD(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iam)return!1
return a.left===u.gbt(b)&&a.top===u.gbx(b)&&this.gaH(a)===u.gaH(b)&&this.gaD(a)===u.gaD(b)},
gJ:function(a){return W.mt(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaH(a)),C.c.gJ(this.gaD(a)))},
gdE:function(a){return a.bottom},
gaD:function(a){return a.height},
gbt:function(a){return a.left},
gbw:function(a){return a.right},
gbx:function(a){return a.top},
gaH:function(a){return a.width},
$iam:1,
$aam:function(){return[P.aa]}}
W.fN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.f]},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.fO.prototype={
gn:function(a){return a.length}}
W.jx.prototype={
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
gT:function(a){var u=this.jb(this)
return new J.at(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gia:function(a){return new W.jA(a)},
gcc:function(a){return new W.jx(a,a.children)},
gdF:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ad:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lT
if(u==null){u=H.d([],[W.aB])
t=new W.dV(u)
C.a.h(u,W.ms(null))
C.a.h(u,W.mu())
$.lT=t
d=t}else d=u
u=$.lS
if(u==null){u=new W.f6(d)
$.lS=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation.createHTMLDocument("")
$.bm=t
$.l3=t.createRange()
t=$.bm.createElement("base")
H.h(t,"$ict")
t.href=u.baseURI
$.bm.head.appendChild(t)}u=$.bm
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibz")}u=$.bm
if(!!this.$ibz)s=u.body
else{s=u.createElement(a.tagName)
$.bm.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.U,a.tagName)){$.l3.selectNodeContents(s)
r=$.l3.createContextualFragment(b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bm.body
if(s==null?u!=null:s!==u)J.lK(s)
c.cI(r)
document.adoptNode(r)
return r},
il:function(a,b,c){return this.ad(a,b,c,null)},
ez:function(a,b){a.textContent=null
a.appendChild(this.ad(a,b,null,null))},
$iU:1,
gel:function(a){return a.tagName}}
W.fS.prototype={
$1:function(a){return!!J.X(H.h(a,"$iG")).$iU},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
i2:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f3(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.ck(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aH.prototype={$iaH:1}
W.cB.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$icB:1,
$aH:function(){return[W.aH]}}
W.fY.prototype={
gn:function(a){return a.length}}
W.h1.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.h6.prototype={
gn:function(a){return a.length}}
W.c1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic1:1,
$aH:function(){return[W.G]}}
W.cE.prototype={$icE:1}
W.cF.prototype={$icF:1}
W.b7.prototype={$ib7:1}
W.dN.prototype={
i:function(a){return String(a)},
$idN:1}
W.hJ.prototype={
gn:function(a){return a.length}}
W.cI.prototype={$icI:1}
W.hK.prototype={
j:function(a,b){return P.bt(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga1:function(a){var u=H.d([],[P.f])
this.I(a,new W.hL(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hM.prototype={
j:function(a,b){return P.bt(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga1:function(a){var u=H.d([],[P.f])
this.I(a,new W.hN(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aT.prototype={$iaT:1}
W.hO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.af.prototype={$iaf:1}
W.aq.prototype={
gaI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ma("No elements"))
if(t>1)throw H.c(P.ma("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r
H.l(b,"$ij",[W.G],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dG(u,u.length,[H.bS(C.Y,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
j1:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j5:function(a,b){var u,t
try{u=a.parentNode
J.ns(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eB(a):u},
i8:function(a,b){return a.appendChild(H.h(b,"$iG"))},
hA:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aU.prototype={$iaU:1,
gn:function(a){return a.length}}
W.i3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.id.prototype={
j:function(a,b){return P.bt(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga1:function(a){var u=H.d([],[P.f])
this.I(a,new W.ie(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ih.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.is.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.it.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.iw.prototype={
j:function(a,b){return a.getItem(H.I(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga1:function(a){var u=H.d([],[P.f])
this.I(a,new W.ix(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.ix.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.e6.prototype={
ad:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=W.nI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).at(0,new W.aq(u))
return t}}
W.iD.prototype={
ad:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaI(u)
s.toString
u=new W.aq(s)
r=u.gaI(u)
t.toString
r.toString
new W.aq(t).at(0,new W.aq(r))
return t}}
W.iE.prototype={
ad:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ad(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaI(u)
t.toString
s.toString
new W.aq(t).at(0,new W.aq(s))
return t}}
W.cW.prototype={$icW:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaL")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.iH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iJ.prototype={
gn:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.iO.prototype={
gn:function(a){return a.length}}
W.bN.prototype={}
W.j9.prototype={
i:function(a){return String(a)}}
W.jo.prototype={
gn:function(a){return a.length}}
W.bh.prototype={
gip:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gio:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibh:1}
W.d3.prototype={
hB:function(a,b){return a.requestAnimationFrame(H.ck(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
fj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d4.prototype={$id4:1}
W.jy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iY")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.Y]},
$ax:function(){return[W.Y]},
$ij:1,
$aj:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aH:function(){return[W.Y]}}
W.ep.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$iam)return!1
return a.left===u.gbt(b)&&a.top===u.gbx(b)&&a.width===u.gaH(b)&&a.height===u.gaD(b)},
gJ:function(a){return W.mt(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaD:function(a){return a.height},
gaH:function(a){return a.width}}
W.jN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.eH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.k0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.k4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aH:function(){return[W.aK]}}
W.jw.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga1(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga1:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$id4")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jA.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga1(this).length}}
W.jB.prototype={}
W.ll.prototype={}
W.jC.prototype={}
W.jD.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bQ.prototype={
eN:function(a){var u
if($.d6.giF($.d6)){for(u=0;u<262;++u)$.d6.k(0,C.T[u],W.px())
for(u=0;u<12;++u)$.d6.k(0,C.q[u],W.py())}},
aQ:function(a){return $.nm().W(0,W.cz(a))},
au:function(a,b,c){var u=$.d6.j(0,H.i(W.cz(a))+"::"+b)
if(u==null)u=$.d6.j(0,"*::"+b)
if(u==null)return!1
return H.lu(u.$4(a,b,c,this))},
$iaB:1}
W.H.prototype={
gT:function(a){return new W.dG(a,this.gn(a),[H.bS(this,a,"H",0)])}}
W.dV.prototype={
aQ:function(a){return C.a.dB(this.a,new W.hW(a))},
au:function(a,b,c){return C.a.dB(this.a,new W.hV(a,b,c))},
$iaB:1}
W.hW.prototype={
$1:function(a){return H.h(a,"$iaB").aQ(this.a)},
$S:29}
W.hV.prototype={
$1:function(a){return H.h(a,"$iaB").au(this.a,this.b,this.c)},
$S:29}
W.eP.prototype={
eW:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bA(0,new W.jY())
t=b.bA(0,new W.jZ())
this.b.at(0,u)
s=this.c
s.at(0,C.x)
s.at(0,t)},
aQ:function(a){return this.a.W(0,W.cz(a))},
au:function(a,b,c){var u=this,t=W.cz(a),s=u.c
if(s.W(0,H.i(t)+"::"+b))return u.d.i6(c)
else if(s.W(0,"*::"+b))return u.d.i6(c)
else{s=u.b
if(s.W(0,H.i(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.i(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaB:1}
W.jY.prototype={
$1:function(a){return!C.a.W(C.q,H.I(a))},
$S:30}
W.jZ.prototype={
$1:function(a){return C.a.W(C.q,H.I(a))},
$S:30}
W.k6.prototype={
au:function(a,b,c){if(this.eF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.k7.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.I(a))},
$S:23}
W.k5.prototype={
aQ:function(a){var u=J.X(a)
if(!!u.$icR)return!1
u=!!u.$iq
if(u&&W.cz(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.b.a0(b,"on"))return!1
return this.aQ(a)},
$iaB:1}
W.dG.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd9(J.dp(u.a,t))
u.c=t
return!0}u.sd9(null)
u.c=s
return!1},
gL:function(a){return this.d},
sd9:function(a){this.d=H.C(a,H.r(this,0))},
$ib6:1}
W.aB.prototype={}
W.jW.prototype={$iq9:1}
W.f6.prototype={
cI:function(a){new W.kh(this).$2(a,null)},
b1:function(a,b){if(b==null)J.lK(a)
else b.removeChild(a)},
hF:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nw(a)
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
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ak(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.ak(r)}try{s=W.cz(a)
this.hE(H.h(a,"$iU"),b,p,t,s,H.h(o,"$iy"),H.I(n))}catch(r){if(H.ak(r) instanceof P.aQ)throw r
else{this.b1(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b1(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aQ(a)){o.b1(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.au(a,"is",g)){o.b1(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga1(f)
t=H.d(u.slice(0),[H.r(u,0)])
for(s=f.ga1(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nz(r)
H.I(r)
if(!q.au(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$icW)o.cI(a.content)},
$ipV:1}
W.kh.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hF(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b1(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.h(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iG")}},
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
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
P.k1.prototype={
dR:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cG:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.X(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$iod)throw H.c(P.j1("structured clone of RegExp"))
if(!!u.$iaH)return a
if(!!u.$ibX)return a
if(!!u.$icB)return a
if(!!u.$icE)return a
if(!!u.$icL||!!u.$ibI||!!u.$icI)return a
if(!!u.$iy){t=q.dR(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.k3(p,q))
return p.a}if(!!u.$ib){t=q.dR(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ik(a,t)}throw H.c(P.j1("structured clone of other type"))},
ik:function(a,b){var u,t=J.cn(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cG(t.j(a,u)))
return r}}
P.k3.prototype={
$2:function(a,b){this.a.a[a]=this.b.cG(b)},
$S:5}
P.ku.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k2.prototype={}
P.fZ.prototype={
gbl:function(){var u=this.b,t=H.ar(u,"x",0),s=W.U
return new H.hr(new H.d2(u,H.n(new P.h_(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h0(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.gbl()
J.nx(u.b.$1(J.fl(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aD(this.gbl().a)},
j:function(a,b){var u=this.gbl()
return u.b.$1(J.fl(u.a,b))},
gT:function(a){var u=P.lW(this.gbl(),!1,W.U)
return new J.at(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.h_.prototype={
$1:function(a){return!!J.X(H.h(a,"$iG")).$iU},
$S:27}
P.h0.prototype={
$1:function(a){return H.A(H.h(a,"$iG"),"$iU")},
$S:34}
P.jR.prototype={
gbw:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.C(u+t,H.r(this,0))},
gdE:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.C(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$iam){t=p.a
if(t==u.gbt(b)){s=p.b
if(s==u.gbx(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.E(r)
q=H.r(p,0)
if(H.C(t+r,q)===u.gbw(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.E(t)
u=H.C(s+t,q)===u.gdE(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dq(s),q=t.b,p=J.dq(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.E(o)
u=H.r(t,0)
o=C.e.gJ(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.E(s)
u=C.e.gJ(H.C(q+s,u))
return P.oB(P.jP(P.jP(P.jP(P.jP(0,r),p),o),u))}}
P.am.prototype={
gbt:function(a){return this.a},
gbx:function(a){return this.b},
gaH:function(a){return this.c},
gaD:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hg.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib8")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b8]},
$ij:1,
$aj:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aH:function(){return[P.b8]}}
P.bb.prototype={$ibb:1}
P.hZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibb")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bb]},
$ij:1,
$aj:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.i5.prototype={
gn:function(a){return a.length}}
P.cR.prototype={$icR:1}
P.iC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
P.q.prototype={
gcc:function(a){return new P.fZ(a,new W.aq(a))},
ad:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aB])
C.a.h(p,W.ms(null))
C.a.h(p,W.mu())
C.a.h(p,new W.k5())
c=new W.f6(new W.dV(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).il(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bf.prototype={$ibf:1}
P.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aH:function(){return[P.bf]}}
P.ez.prototype={}
P.eA.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.S.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
P.fr.prototype={
gn:function(a){return a.length}}
P.fs.prototype={
j:function(a,b){return P.bt(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bt(t.value[1]))}},
ga1:function(a){var u=H.d([],[P.f])
this.I(a,new P.ft(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.ft.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fu.prototype={
gn:function(a){return a.length}}
P.bW.prototype={}
P.i_.prototype={
gn:function(a){return a.length}}
P.en.prototype={}
P.dt.prototype={$idt:1}
P.dY.prototype={$idY:1}
P.c9.prototype={
a2:function(a,b,c){return a.uniform1f(b,c)},
by:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
je:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
jf:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
er:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic9:1}
P.e1.prototype={$ie1:1}
P.ed.prototype={$ied:1}
P.iu.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bt(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.c(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aH:function(){return[[P.y,,,]]}}
P.eS.prototype={}
P.eT.prototype={}
O.a5.prototype={
bF:function(a){var u=this
u.sfv(H.d([],[a]))
u.sdh(null)
u.sde(null)
u.sdi(null)},
cJ:function(a,b,c){var u=this,t=H.ar(u,"a5",0)
H.n(b,{func:1,ret:P.T,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdh(b)
u.sde(a)
u.sdi(c)},
bh:function(a,b){return this.cJ(a,null,b)},
he:function(a){var u
H.l(a,"$ij",[H.ar(this,"a5",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fE:function(a,b){var u
H.l(b,"$ij",[H.ar(this,"a5",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.at(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ar(s,"a5",0)
H.C(b,r)
r=[r]
if(H.F(s.he(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fE(t,H.d([b],r))}},
sfv:function(a){this.a=H.l(a,"$ib",[H.ar(this,"a5",0)],"$ab")},
sdh:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.j,H.ar(this,"a5",0)]]})},
sde:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.ar(this,"a5",0)]]})},
sdi:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.ar(this,"a5",0)]]})},
$ij:1}
O.cH.prototype={
gn:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.V():u},
aJ:function(){var u=this.b
if(u!=null)u.F(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaw(u)
else return V.bH()},
ee:function(a){var u=this.a
if(a==null)C.a.h(u,V.bH())
else C.a.h(u,a)
this.aJ()},
cw:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}},
sbO:function(a){this.a=H.l(a,"$ib",[V.al],"$ab")}}
E.fx.prototype={}
E.ap.prototype={
cX:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.at(u,u.length,[H.r(u,0)]);u.C();){t=u.d
if(t.f==null)t.cX()}},
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().M(0,s.ge6())
u=s.c
if(u!=null)u.gv().h(0,s.ge6())
t=new D.K("shape",r,s.c,[F.e2])
t.b=!0
s.ak(t)}},
sbe:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gv().M(0,s.ge8())
u=s.f
s.f=a
if(a!=null)a.gv().h(0,s.ge8())
s.cX()
t=new D.K("technique",u,s.f,[O.bM])
t.b=!0
s.ak(t)}},
saF:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gv().M(0,s.ge4())
if(a!=null)a.gv().h(0,s.ge4())
s.r=a
t=new D.K("mover",u,a,[U.ab])
t.b=!0
s.ak(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.an(0,b,s):null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.K("matrix",u,q,[V.al])
t.b=!0
s.ak(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.at(r,r.length,[H.r(r,0)]);r.C();)r.d.am(0,b)},
aW:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga6(s))
else C.a.h(s.a,r.q(0,s.ga6(s)))
s.aJ()
a.ef(t.f)
s=a.dy
u=(s&&C.a).gaw(s)
if(u!=null&&t.d!=null)u.j4(a,t)
for(s=t.y.a,s=new J.at(s,s.length,[H.r(s,0)]);s.C();)s.d.aW(a)
a.ed()
a.dx.cw()},
gv:function(){var u=this.z
return u==null?this.z=D.V():u},
ak:function(a){var u=this.z
if(u!=null)u.F(a)},
a_:function(){return this.ak(null)},
e7:function(a){H.h(a,"$iB")
this.e=null
this.ak(a)},
iR:function(){return this.e7(null)},
e9:function(a){this.ak(H.h(a,"$iB"))},
iS:function(){return this.e9(null)},
e5:function(a){this.ak(H.h(a,"$iB"))},
iQ:function(){return this.e5(null)},
e3:function(a){this.ak(H.h(a,"$iB"))},
iN:function(){return this.e3(null)},
iM:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ap],"$aj")
for(u=b.length,t=this.ge2(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sai(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iP:function(a,b){var u,t
H.l(b,"$ij",[E.ap],"$aj")
for(u=b.gT(b),t=this.ge2();u.C();)u.gL(u).gv().M(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seM:function(a,b){this.y=H.l(b,"$ia5",[E.ap],"$aa5")},
$icK:1}
E.i9.prototype={
eI:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.al]
u.sbO(H.d([],t))
u.b=null
u.gv().h(0,new E.ia(s))
s.cy=u
u=new O.cH()
u.sbO(H.d([],t))
u.b=null
u.gv().h(0,new E.ib(s))
s.db=u
u=new O.cH()
u.sbO(H.d([],t))
u.b=null
u.gv().h(0,new E.ic(s))
s.dx=u
s.shR(H.d([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.shM(new H.a2([P.f,A.cS]))},
gj0:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.q(0,u.ga6(u))
s=u}return s},
ef:function(a){var u=this.dy,t=a==null?(u&&C.a).gaw(u):a;(u&&C.a).h(u,t)},
ed:function(){var u=this.dy
if(u.length>1)u.pop()},
shR:function(a){this.dy=H.l(a,"$ib",[O.bM],"$ab")},
shM:function(a){this.fr=H.l(a,"$iy",[P.f,A.cS],"$ay")}}
E.ia.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.ib.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ic.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.e9.prototype={
cR:function(a){H.h(a,"$iB")
this.ei()},
cQ:function(){return this.cR(null)},
giz:function(){var u,t=this,s=Date.now(),r=C.e.a5(P.lR(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dl:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.E(r)
u=C.c.dS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.c.dS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.md(C.o,s.gj6())}},
ei:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iI(this),{func:1,ret:-1,args:[P.aa]})
C.E.fj(u)
C.E.hB(u,W.mJ(t,P.aa))}},
j3:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dl()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lR(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aJ()
r=s.db
C.a.sn(r.a,0)
r.aJ()
r=s.dx
C.a.sn(r.a,0)
r.aJ()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aW(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ak(q)
t=H.cp(q)
P.lC("Error: "+H.i(u))
P.lC("Stack: "+H.i(t))
throw H.c(u)}}}
E.iI.prototype={
$1:function(a){var u
H.mY(a)
u=this.a
if(u.ch){u.ch=!1
u.j3()}},
$S:57}
Z.el.prototype={$ipP:1}
Z.du.prototype={
bo:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jp.prototype={$ipQ:1}
Z.dv.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bo:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bo(a)},
eq:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aW:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfq:function(a){this.b=H.l(a,"$ib",[Z.bF],"$ab")},
$ipZ:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.bP.prototype={
gcL:function(a){var u=this.a,t=(u&$.bx().a)!==0?3:0
if((u&$.bw().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=3
if((u&$.bU().a)!==0)t+=2
if((u&$.bV().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cs().a)!==0)++t
return(u&$.bu().a)!==0?t+4:t},
i9:function(a){var u,t=$.bx(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0)if(u===a)return t
return $.nk()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bP))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bx().a)!==0)C.a.h(u,"Pos")
if((t&$.bw().a)!==0)C.a.h(u,"Norm")
if((t&$.bv().a)!==0)C.a.h(u,"Binm")
if((t&$.bU().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bV().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dm().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cs().a)!==0)C.a.h(u,"Weight")
if((t&$.bu().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fA.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.sai(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.I(P.lW(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fV(q))
u=r.b
if(u!=null){r.saN(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.I(u,new D.fW(q))}return!0},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sai:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saN:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fV.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fW.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.B.prototype={}
D.c2.prototype={}
D.c3.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dw.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dK.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hf.prototype={
iX:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iT:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shu:function(a){this.d=H.l(a,"$im9",[P.m],"$am9")}}
X.dO.prototype={}
X.hn.prototype={
b_:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaR()
r=new X.bq(a,V.bL(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cv:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ey()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b_(a,b))
return!0},
iY:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaR()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cJ(new V.W(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
h3:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dO(c,r.a.gaR(),b)
s.b=!0
t.F(s)
r.y=new P.ay(u,!1)
r.x=V.bL()}}
X.aA.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bq.prototype={}
X.hP.prototype={
bL:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaR(),r=new X.bq(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cv:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bL(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ey()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bL(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bL(a,b,!1))
return!0},
iZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaR()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cJ(new V.W(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdH:function(){var u=this.b
return u==null?this.b=D.V():u},
gbz:function(){var u=this.c
return u==null?this.c=D.V():u},
ge0:function(){var u=this.d
return u==null?this.d=D.V():u}}
X.cJ.prototype={}
X.i4.prototype={}
X.eb.prototype={}
X.iM.prototype={
b_:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bL()
s=q.a.gaR()
r=new X.eb(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iW:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b_(a,!0))
return!0},
iU:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b_(a,!0))
return!0},
iV:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b_(a,!1))
return!0}}
X.eg.prototype={
gaR:function(){var u=this.a,t=C.n.gdF(u).c
t.toString
u=C.n.gdF(u).d
u.toString
return V.m7(0,0,t,u)},
d3:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dK(u,new X.aA(t,a.altKey,a.shiftKey))},
aO:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
c3:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aB:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a9(s-q,r-u)},
b0:function(a){return new V.W(a.movementX,a.movementY)},
bZ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.al(r.pageX)
C.c.al(r.pageY)
p=o.left
C.c.al(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.al(r.pageY)-o.top))}return n},
az:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dw(u,new X.aA(t,a.altKey,a.shiftKey))},
bP:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fY:function(a){this.f=!0},
fM:function(a){this.f=!1},
fS:function(a){H.h(a,"$iaf")
if(H.F(this.f)&&this.bP(a))a.preventDefault()},
h1:function(a){var u
H.h(a,"$ib7")
if(!H.F(this.f))return
u=this.d3(a)
this.b.iX(u)},
h_:function(a){var u
H.h(a,"$ib7")
if(!H.F(this.f))return
u=this.d3(a)
this.b.iT(u)},
h5:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aO(a)
if(H.F(q.x)){t=q.az(a)
s=q.b0(a)
if(q.d.cv(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.az(a)
r=q.aB(a)
if(q.c.cv(t,r))a.preventDefault()},
h9:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.bd(u,s))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bP(a)){r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.bd(u,s))a.preventDefault()}},
h7:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.bc(u,s))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bP(a)){r.aO(a)
u=r.az(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aB(a)
if(r.c.bc(u,s))a.preventDefault()}},
hb:function(a){var u,t,s=this
H.h(a,"$ibh")
s.aO(a)
u=new V.W((a&&C.D).gio(a),C.D.gip(a)).w(0,180)
if(H.F(s.x)){if(s.d.iY(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aB(a)
if(s.c.iZ(u,t))a.preventDefault()},
hd:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.az(s.y)
t=s.aB(s.y)
s.d.h3(u,t,r)}},
hq:function(a){var u,t=this
H.h(a,"$ib_")
t.a.focus()
t.f=!0
t.c3(a)
u=t.bZ(a)
if(t.e.iW(u))a.preventDefault()},
hm:function(a){var u
H.h(a,"$ib_")
this.c3(a)
u=this.bZ(a)
if(this.e.iU(u))a.preventDefault()},
ho:function(a){var u
H.h(a,"$ib_")
this.c3(a)
u=this.bZ(a)
if(this.e.iV(u))a.preventDefault()},
sfk:function(a){this.z=H.l(a,"$ib",[[P.cU,P.R]],"$ab")}}
D.dB.prototype={$iad:1,$icK:1}
D.ad.prototype={$icK:1}
D.dL.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.V():u},
a8:function(a){var u=this.x
if(u!=null)u.F(a)},
dg:function(a){var u
H.h(a,"$iB")
u=this.y
if(u!=null)u.F(a)},
h2:function(){return this.dg(null)},
hg:function(a){var u,t,s
H.l(a,"$ij",[D.ad],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eO(s))return!1}return!0},
fG:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdf(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.bK)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.c_()
o.sai(null)
o.saN(null)
o.c=null
o.d=0
p.Q=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c2([n])
n.b=!0
this.a8(n)},
hk:function(a,b){var u,t,s,r=D.ad
H.l(b,"$ij",[r],"$aj")
for(u=b.gT(b),t=this.gdf();u.C();){s=u.gL(u)
C.a.M(this.e,s)
s.gv().M(0,t)}r=new D.c3([r])
r.b=!0
this.a8(r)},
eO:function(a){var u=C.a.W(this.f,a)
return u},
seP:function(a){this.e=H.l(a,"$ib",[D.dB],"$ab")},
shr:function(a){this.f=H.l(a,"$ib",[D.bK],"$ab")},
seS:function(a){this.r=H.l(a,"$ib",[D.e4],"$ab")},
$aj:function(){return[D.ad]},
$aa5:function(){return[D.ad]}}
D.bK.prototype={
gv:function(){var u=this.Q
return u==null?this.Q=D.V():u},
a8:function(a){var u
H.h(a,"$iB")
u=this.Q
if(u!=null)u.F(a)},
eR:function(){return this.a8(null)},
gaj:function(){return 4},
$iad:1,
$icK:1}
D.e4.prototype={$iad:1,$icK:1}
V.a6.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcB()),t=C.c.p(this.b,b.gbB()),s=C.c.p(this.c,b.gc8())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcB()),t=C.c.t(this.b,b.gbB()),s=C.c.t(this.c,b.gc8())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aE.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcB()),s=C.c.p(u.b,b.gbB()),r=C.c.p(u.c,b.gc8()),q=C.c.p(u.d,b.gi7(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aE(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcB()),s=C.c.t(u.b,b.gbB()),r=C.c.t(u.c,b.gc8()),q=C.c.t(u.d,b.gi7(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aE(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.fU.prototype={}
V.hH.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.hH))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.cm(H.d([q.a,q.d,q.r],p),3,0),n=V.cm(H.d([q.b,q.e,q.x],p),3,0),m=V.cm(H.d([q.c,q.f,q.y],p),3,0)
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
V.al.prototype={
ax:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
iE:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.bH()
u=1/b1
t=-n
s=-a0
return V.ba((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ba(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cF:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
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
i:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.cm(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cm(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cm(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cm(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a4.prototype={
p:function(a,b){return new V.a4(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.a4(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.bc.prototype={
p:function(a,b){var u=this
return new V.bc(C.c.p(u.a,b.gjh(b)),C.c.p(u.b,b.gji(b)),C.c.p(u.c,b.gjj(b)),C.c.p(u.d,b.gjg(b)))},
t:function(a,b){var u=this
return new V.bc(C.c.t(u.a,b.gjh(b)),C.c.t(u.b,b.gji(b)),C.c.t(u.c,b.gjj(b)),C.c.t(u.d,b.gjg(b)))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.e_.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e_))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
V.W.prototype={
b8:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gaT(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gaU(b)
if(typeof t!=="number")return t.p()
return new V.W(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gaT(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gaU(b)
if(typeof t!=="number")return t.t()
return new V.W(s,C.c.t(t,u))},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.W(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mk
return u==null?$.mk=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.W(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.M.prototype={
b8:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cr:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aC:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.M(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d1()
return new V.M(this.a/b,this.b/b,this.c/b)},
e_:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.bs.prototype={
b8:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.bs(C.e.p(u.a,b.gaT(b)),C.c.p(u.b,b.gaU(b)),C.c.p(u.c,b.gbr()),C.e.p(u.d,b.gir()))},
t:function(a,b){var u=this
return new V.bs(C.e.t(u.a,b.gaT(b)),C.c.t(u.b,b.gaU(b)),C.c.t(u.c,b.gbr()),C.e.t(u.d,b.gir()))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bs))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+", "+V.O(u.d,3,0)+"]"}}
U.fB.prototype={
bH:function(a){var u=V.kX(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.V():u},
H:function(a){var u=this.y
if(u!=null)u.F(a)},
scH:function(a,b){},
scs:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bH(u)}s=new D.K("maximumLocation",s,t.b,[P.p])
s.b=!0
t.H(s)}},
scu:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bH(u)}s=new D.K("minimumLocation",s,t.c,[P.p])
s.b=!0
t.H(s)}},
sZ:function(a,b){var u,t=this
b=t.bH(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.K("location",u,b,[P.p])
u.b=!0
t.H(u)}},
sct:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.p])
r.b=!0
s.H(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.K("velocity",t,a,[P.p])
t.b=!0
u.H(t)}},
scf:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.K("dampening",u,a,[P.p])
u.b=!0
this.H(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.L().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.dy.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.V():u},
an:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cD.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.V():u},
H:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.F(a)},
a4:function(){return this.H(null)},
eU:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaM(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gv()
o.toString
H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c2([n])
n.b=!0
this.H(n)},
hi:function(a,b){var u,t,s=U.ab
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gaM();u.C();)u.gL(u).gv().M(0,t)
s=new D.c3([s])
s.b=!0
this.H(s)},
an:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.r(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.an(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.bH():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cD))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ab]},
$aa5:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e0.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.V():u},
H:function(a){var u=this.y
if(u!=null)u.F(a)},
sev:function(a){var u
a=V.kX(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.L().a)){this.a=a
u=new D.K("yaw",u,a,[P.p])
u.b=!0
this.H(u)}},
sec:function(a,b){var u
b=V.kX(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.L().a)){this.b=b
u=new D.K("pitch",u,b,[P.p])
u.b=!0
this.H(u)}},
sej:function(a){var u
a=V.kX(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
u=new D.K("roll",u,a,[P.p])
u.b=!0
this.H(u)}},
an:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sev(u.a+u.d*b.y)
u.sec(0,u.b+u.e*b.y)
u.sej(u.c+u.f*b.y)
u.x=V.m_(u.c).q(0,V.lZ(u.b)).q(0,V.lY(u.a))
t=u.y
if(t!=null)t.ag(0)}return u.x},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e0))return!1
u=r.a
t=b.a
s=$.L().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.O(u.a,3,0)+", "+V.O(u.b,3,0)+", "+V.O(u.c,3,0)+"], ["+V.O(u.d,3,0)+", "+V.O(u.e,3,0)+", "+V.O(u.f,3,0)+"]"}}
U.eh.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.V():u},
H:function(a){var u
H.h(a,"$iB")
u=this.cy
if(u!=null)u.F(a)},
a4:function(){return this.H(null)},
b3:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdH().h(0,u.gbQ())
u.a.c.ge0().h(0,u.gbS())
u.a.c.gbz().h(0,u.gbU())
return!0},
bR:function(a){var u=this
H.h(a,"$iB")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bT:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iB"),"$ibq")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.t(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.W(t.a,t.b).q(0,2).w(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.W(s.a,s.b).q(0,2).w(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
n.b.sV(0)
t=t.t(0,a.z)
n.Q=new V.W(t.a,t.b).q(0,2).w(0,u.ga9())}n.a4()},
bV:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sV(t*10*s)
r.a4()}},
an:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.am(0,u)
t.cx=V.m_(t.b.d)}return t.cx},
$iab:1}
U.ei.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.V():u},
H:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.F(a)},
a4:function(){return this.H(null)},
b3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdH().h(0,s.gbQ())
s.a.c.ge0().h(0,s.gbS())
s.a.c.gbz().h(0,s.gbU())
u=s.a.d
t=u.f
u=t==null?u.f=D.V():t
u.h(0,s.gfw())
u=s.a.d
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.gfA())
u=s.a.e
t=u.b
u=t==null?u.b=D.V():t
u.h(0,s.ghX())
u=s.a.e
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.ghV())
u=s.a.e
t=u.c
u=t==null?u.c=D.V():t
u.h(0,s.ghT())
return!0},
as:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.W(u,t)},
bR:function(a){var u=this
a=H.A(H.h(a,"$iB"),"$ibq")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bT:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iB"),"$ibq")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.as(new V.W(t.a,t.b).q(0,2).w(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.W(s.a,s.b).q(0,2).w(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sZ(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.t(0,a.z)
n.dx=n.as(new V.W(t.a,t.b).q(0,2).w(0,u.ga9()))}n.a4()},
bV:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sV(-t*10*u)
r.a4()}},
fz:function(a){var u=this
if(H.A(H.h(a,"$iB"),"$idO").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fB:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iB"),"$ibq")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.W(s.a,s.b).q(0,2).w(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sZ(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.t(0,a.z)
n.dx=n.as(new V.W(t.a,t.b).q(0,2).w(0,u.ga9()))
n.a4()},
hY:function(a){var u=this
H.h(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hW:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iB"),"$ieb")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.as(new V.W(t.a,t.b).q(0,2).w(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.as(new V.W(s.a,s.b).q(0,2).w(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sZ(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.t(0,a.z)
n.dx=n.as(new V.W(t.a,t.b).q(0,2).w(0,u.ga9()))}n.a4()},
hU:function(a){var u,t,s,r=this
H.h(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sV(-t*10*u)
r.a4()}},
an:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.am(0,u)
t.b.am(0,u)
t.fr=V.lY(t.b.d).q(0,V.lZ(t.c.d))}return t.fr},
$iab:1}
U.ej.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.V():u},
H:function(a){var u=this.r
if(u!=null)u.F(a)},
b3:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.V():t
t=r.gfC()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.V():s).h(0,t)
return!0},
fD:function(a){var u,t,s,r,q=this
H.h(a,"$iB")
if(!J.Q(q.b,q.a.b.c))return
H.A(a,"$icJ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.p])
u.b=!0
q.H(u)}},
an:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ld(u,u,u,1)}return t.f},
$iab:1}
M.dE.prototype={
ay:function(a){var u
H.h(a,"$iB")
u=this.y
if(u!=null)u.F(a)},
eV:function(){return this.ay(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gar(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.sai(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c2([n])
n.b=!0
this.ay(n)},
fQ:function(a,b){var u,t,s=E.ap
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gar();u.C();)u.gL(u).gv().M(0,t)
s=new D.c3([s])
s.b=!0
this.ay(s)},
sbe:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().M(0,t.gar())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.gar())
s=new D.K("technique",u,t.d,[O.bM])
s.b=!0
t.ay(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.V():u},
aW:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.ef(a1.d)
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
if(typeof s!=="number")return H.E(s)
o=C.c.al(p*s)
p=q.b
if(typeof r!=="number")return H.E(r)
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
i=V.ba(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.ee(i)
t=$.m3
if(t==null){t=V.o0()
q=$.mn
if(q==null)q=$.mn=new V.M(0,1,0)
p=$.ml
if(p==null)p=$.ml=new V.M(0,0,-1)
h=p.w(0,Math.sqrt(p.D(p)))
q=q.aC(h)
g=q.w(0,Math.sqrt(q.D(q)))
f=h.aC(g)
e=new V.M(t.a,t.b,t.c)
d=g.S(0).D(e)
c=f.S(0).D(e)
b=h.S(0).D(e)
t=V.ba(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m3=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.an(0,a2,u)
if(a0!=null)a=a0.q(0,a)}a2.db.ee(a)
u=a1.d
if(u!=null)u.am(0,a2)
for(u=a1.e.a,u=new J.at(u,u.length,[H.r(u,0)]);u.C();)u.d.am(0,a2)
for(u=a1.e.a,u=new J.at(u,u.length,[H.r(u,0)]);u.C();)u.d.aW(a2)
a1.b.toString
a2.cy.cw()
a2.db.cw()
a1.c.toString
a2.ed()},
sfb:function(a,b){this.e=H.l(b,"$ia5",[E.ap],"$aa5")},
$ipW:1}
A.ds.prototype={}
A.fq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
is:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gao:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
u:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ao))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hu.prototype={
eH:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ah("")
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
b8.e=b8.d4(n,35633)
b8.f=b8.d4(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lu(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.D("Failed to link shader: "+H.i(l)))}b8.hJ()
b8.hL()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.X(0,"invViewMat"),"$iaC")
if(t)b8.dy=H.A(b8.y.X(0,"objMat"),"$iaC")
if(r)b8.fr=H.A(b8.y.X(0,"viewObjMat"),"$iaC")
b8.fy=H.A(b8.y.X(0,"projViewObjMat"),"$iaC")
if(c3.ry)b8.k1=H.A(b8.y.X(0,"txt2DMat"),"$id_")
if(c3.x1)b8.k2=H.A(b8.y.X(0,"txtCubeMat"),"$iaC")
if(c3.x2)b8.k3=H.A(b8.y.X(0,"colorMat"),"$iaC")
b8.sf7(H.d([],[A.aC]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.X(0,"bendMatCount"),"$iaM")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.D(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaC"))}}if(c3.a.a)b8.r2=H.A(b8.y.X(0,"emissionClr"),"$ia0")
if(c3.b.a)b8.x1=H.A(b8.y.X(0,"ambientClr"),"$ia0")
if(c3.c.a)b8.y2=H.A(b8.y.X(0,"diffuseClr"),"$ia0")
if(c3.d.a)b8.dJ=H.A(b8.y.X(0,"invDiffuseClr"),"$ia0")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dL=H.A(b8.y.X(0,"shininess"),"$iai")
if(t)b8.dK=H.A(b8.y.X(0,"specularClr"),"$ia0")}if(c3.cy){b8.dM=H.A(b8.y.X(0,"envSampler"),"$ice")
if(c3.r.a)b8.dN=H.A(b8.y.X(0,"reflectClr"),"$ia0")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dO=H.A(b8.y.X(0,"refraction"),"$iai")
if(t)b8.dP=H.A(b8.y.X(0,"refractClr"),"$ia0")}}if(c3.y.a)b8.dQ=H.A(b8.y.X(0,"alpha"),"$iai")
t=P.m
s=[t,A.aM]
b8.sfh(new H.a2(s))
b8.sfi(new H.a2([t,[P.b,A.cb]]))
b8.shs(new H.a2(s))
b8.sht(new H.a2([t,[P.b,A.cc]]))
b8.shO(new H.a2(s))
b8.shP(new H.a2([t,[P.b,A.cf]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.cb],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ah()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.D(c0+d+c1))
H.A(j,"$ia0")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.D(c0+d+c1))
H.A(c,"$ia0")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.D(c0+d+c1))
H.A(b,"$ia0")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.D(c0+d+c1))
H.A(j,"$ia0")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.D(c0+d+c1))
H.A(c,"$ia0")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.D(c0+o+c1))
H.A(b,"$icd")
a2=b}else a2=b9
C.a.h(e,new A.cb(a1,a0,a,j,c,a2))}b8.ci.k(0,g,e)
q=b8.cg
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaM"))}for(t=c3.Q,s=t.length,r=[A.cc],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
H.A(j,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.D(c0+o+c1))
H.A(c,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.D(c0+o+c1))
H.A(b,"$ia0")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$id_")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$ice")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$ice")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.D(c0+o+c1))
H.A(a5,"$icZ")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$iai")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.z(P.D(c0+o+c1))
H.A(a5,"$iai")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.z(P.D(c0+o+c1))
H.A(a8,"$iai")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.cc(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.ck.k(0,g,e)
q=b8.cj
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaM"))}for(t=c3.ch,s=t.length,r=[A.cf],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
H.A(j,"$ia0")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.D(c0+o+c1))
H.A(c,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.D(c0+o+c1))
H.A(b,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$ia0")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.D(c0+o+c1))
H.A(a5,"$ia0")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.D(c0+o+c1))
H.A(a8,"$ia0")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.z(P.D(c0+o+c1))
H.A(b2,"$iai")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.z(P.D(c0+o+c1))
H.A(b3,"$iai")
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
if(a5==null)H.z(P.D(c0+d+c1))
H.A(a5,"$icZ")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.z(P.D(c0+d+c1))
H.A(a5,"$iai")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.z(P.D(c0+d+c1))
H.A(a8,"$iai")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.z(P.D(c0+d+c1))
H.A(a5,"$iai")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.z(P.D(c0+d+c1))
H.A(a8,"$iai")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.z(P.D(c0+d+c1))
H.A(b2,"$iai")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.z(P.D(c0+d+c1))
H.A(a5,"$icd")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.D(c0+o+c1))
H.A(a5,"$icd")
a6=a5}else a6=b9
C.a.h(e,new A.cf(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cm.k(0,g,e)
q=b8.cl
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaM"))}}},
hH:function(a,b){},
sf7:function(a){this.r1=H.l(a,"$ib",[A.aC],"$ab")},
sfh:function(a){this.cg=H.l(a,"$iy",[P.m,A.aM],"$ay")},
sfi:function(a){this.ci=H.l(a,"$iy",[P.m,[P.b,A.cb]],"$ay")},
shs:function(a){this.cj=H.l(a,"$iy",[P.m,A.aM],"$ay")},
sht:function(a){this.ck=H.l(a,"$iy",[P.m,[P.b,A.cc]],"$ay")},
shO:function(a){this.cl=H.l(a,"$iy",[P.m,A.aM],"$ay")},
shP:function(a){this.cm=H.l(a,"$iy",[P.m,[P.b,A.cf]],"$ay")}}
A.aF.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aI.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aJ.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hx.prototype={
i:function(a){return this.b6}}
A.cb.prototype={}
A.cc.prototype={}
A.cf.prototype={}
A.cS.prototype={
eK:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d4:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lu(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.D("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hJ:function(){var u,t,s,r=this,q=H.d([],[A.ds]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.ds(p,t.name,s))}r.x=new A.fq(q)},
hL:function(){var u,t,s,r=this,q=H.d([],[A.ec]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.im(t.type,t.size,t.name,s))}r.y=new A.iZ(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.aM(u,b,c)
else return A.lh(u,this.r,b,a,c)},
fe:function(a,b,c){var u=this.a
if(a===1)return new A.cd(u,b,c)
else return A.lh(u,this.r,b,a,c)},
ff:function(a,b,c){var u=this.a
if(a===1)return new A.ce(u,b,c)
else return A.lh(u,this.r,b,a,c)},
bn:function(a,b){return new P.eu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
im:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.ai(u.a,c,d)
case 35664:return new A.iV(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.cZ(u.a,c,d)
case 35667:return new A.iW(u.a,c,d)
case 35668:return new A.iX(u.a,c,d)
case 35669:return new A.iY(u.a,c,d)
case 35674:return new A.j_(u.a,c,d)
case 35675:return new A.d_(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fe(b,c,d)
case 35680:return u.ff(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.D("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.ec.prototype={}
A.iZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aM.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si_:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ai.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cZ.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d_.prototype={
aq:function(a){var u=new Float32Array(H.di(H.l(a,"$ib",[P.p],"$ab")))
C.d.jf(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aC.prototype={
aq:function(a){var u=new Float32Array(H.di(H.l(a,"$ib",[P.p],"$ab")))
C.d.er(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.cd.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ce.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kj.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cr(s.b,b).cr(s.d.cr(s.c,b),c)
a.sZ(0,new V.a4(r.a,r.b,r.c))
a.sem(r.w(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdC(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kv.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kx.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sZ(0,new V.a4(s,u,q))
u=new V.M(s,u,q)
a.sem(u.w(0,Math.sqrt(u.D(u))))
a.sdC(new V.bc(1-c,2+c,-1,-1))},
$S:7}
F.ky.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kz.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kS.prototype={
$2:function(a,b){return 0},
$S:21}
F.kT.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.M(u.a,u.b,u.c)
s=t.w(0,Math.sqrt(t.D(t))).q(0,this.b+s)
a.sZ(0,new V.a4(s.a,s.b,s.c))},
$S:7}
F.kV.prototype={
$1:function(a){return new V.a4(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kG.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a4(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kw.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lH(n.$1(o),m)
m=J.nq(J.lH(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.M(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.D(m)))
n=$.mm
if(n==null){n=new V.M(1,0,0)
$.mm=n
t=n}else t=n
if(!J.Q(u,t)){n=$.mo
if(n==null){n=new V.M(0,0,1)
$.mo=n
t=n}else t=n}n=u.aC(t)
s=n.w(0,Math.sqrt(n.D(n)))
n=s.aC(u)
t=n.w(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,J.np(l,new V.a4(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.M(u.a.a.d.b,u)
u.a.a.a_()}u.c0()
u.c1()
u.hy()},
c4:function(a){this.a=a
C.a.h(a.d.b,this)},
c5:function(a){this.b=a
C.a.h(a.d.c,this)},
hI:function(a){this.c=a
C.a.h(a.d.d,this)},
c0:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
c1:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hy:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
f6:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d1()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e_())return
return s.w(0,Math.sqrt(s.D(s)))},
fa:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.t(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aC(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
cb:function(){var u,t=this
if(t.d!=null)return!0
u=t.f6()
if(u==null){u=t.fa()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
f5:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d1()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e_())return
return s.w(0,Math.sqrt(s.D(s)))},
f9:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.t(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.t(0,g).q(0,p).p(0,g).t(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.aC(q)
l=l.w(0,Math.sqrt(l.D(l))).aC(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
c9:function(){var u,t=this
if(t.e!=null)return!0
u=t.f5()
if(u==null){u=t.f9()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gig:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gb5())return a+"disposed"
u=a+C.b.af(J.as(s.a.e),0)+", "+C.b.af(J.as(s.b.e),0)+", "+C.b.af(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fX.prototype={}
F.ir.prototype={
ba:function(a,b,c){var u,t=b.a
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
F.bp.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.M(u.a.a.c.b,u)
u.a.a.a_()}u.c0()
u.c1()},
c4:function(a){this.a=a
C.a.h(a.c.b,this)},
c5:function(a){this.b=a
C.a.h(a.c.c,this)},
c0:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
c1:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb5())return a+"disposed"
return a+C.b.af(J.as(this.a.e),0)+", "+C.b.af(J.as(this.b.e),0)},
O:function(){return this.G("")}}
F.hh.prototype={}
F.iT.prototype={
ba:function(a,b,c){var u,t=b.a
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
F.bJ.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.af(J.as(u.e),0)},
O:function(){return this.G("")}}
F.e2.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.V():u},
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.ij())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bJ()
if(n.a==null)H.z(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nS(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
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
F.cA(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
iJ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.r(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.giw(u)
C.a.eg(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.ba(0,t,q)){C.a.h(s,q)
C.a.eg(u,r)}}if(s.length>1)b.bb(s)}}p.a.A()
p.c.cC()
p.d.cC()
p.b.j2()
p.c.cD(new F.iT())
p.d.cD(new F.ir())
o=p.e
if(o!=null)o.ag(0)},
c6:function(){this.iJ(new F.ji(),new F.hX())},
cn:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cn()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.se1(new V.M(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.M(s,r,o).w(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}o=p.e
if(o!=null)o.ag(0)},
ic:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bx()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bw().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bu().a)!==0)++s
r=a3.gcL(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.du])
for(n=0,m=0;m<s;++m){l=a3.i9(m)
k=l.gcL(l)
C.a.k(o,m,new Z.du(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iH(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.di(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dv(new Z.el(a0,f),o,a3)
e.sfq(H.d([],[Z.bF]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)}b=Z.lk(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lk(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.A()
C.a.h(d,c.e)}b=Z.lk(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.F(null)},
$ipX:1}
F.ij.prototype={
i3:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cA(s,p,o))}}return u},
i4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cA(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cA(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cA(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cA(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cD:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.ba(0,p,n)){p.b4()
break}}}}},
cC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gig(s)
if(t)s.b4()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cb())s=!1
return s},
ca:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c9())s=!1
return s},
cn:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.M(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.M(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.F(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sfl:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.ik.prototype={
gn:function(a){return this.b.length},
cD:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.ba(0,p,n)){p.b4()
break}}}}},
cC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.G("")},
sfs:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")}}
F.il.prototype={
gn:function(a){return this.b.length},
j2:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sbY:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
F.aj.prototype={
ce:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ek(u.cx,r,o,t,s,q,p,a,n)},
ij:function(){return this.ce(null)},
sZ:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
se1:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.D(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sem:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdC:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iH:function(a){var u,t,s=this
if(a.u(0,$.bx())){u=s.f
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bw())){u=s.r
t=[P.p]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bv())){u=s.x
t=[P.p]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bU())){u=s.y
t=[P.p]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bV())){u=s.z
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dm())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dn())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cs()))return H.d([s.ch],[P.p])
else if(a.u(0,$.bu())){u=s.cx
t=[P.p]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.p])},
cb:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d1()
t.d.I(0,new F.jn(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
c9:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d1()
t.d.I(0,new F.jm(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.af(J.as(s.e),0))
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
C.a.h(q,V.O(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.jn.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jm.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jd.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
i5:function(a,b,c,d,e,f){var u=F.ek(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cb()
return!0},
ca:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c9()
return!0},
ie:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.A()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
O:function(){return this.G("")},
si0:function(a){this.c=H.l(a,"$ib",[F.aj],"$ab")}}
F.je.prototype={
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
I:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.I(u.b,b)
C.a.I(u.c,new F.jf(u,b))
C.a.I(u.d,new F.jg(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfm:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sfn:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sfo:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.jf.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.jg.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.jh.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sft:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")},
sfu:function(a){this.c=H.l(a,"$ib",[F.bp],"$ab")}}
F.jj.prototype={}
F.ji.prototype={
ba:function(a,b,c){return J.Q(b.f,c.f)}}
F.jk.prototype={}
F.hX.prototype={
bb:function(a){var u,t,s,r
H.l(a,"$ib",[F.aj],"$ab")
u=V.d1()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].se1(u)
return}}
F.jl.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sbY:function(a){this.b=H.l(a,"$ib",[F.bJ],"$ab")}}
O.dQ.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.V():u},
ac:function(a){var u
H.h(a,"$iB")
u=this.fr
if(u!=null)u.F(a)},
eY:function(){return this.ac(null)},
dk:function(a){H.h(a,"$iB")
this.a=null
this.ac(a)},
hD:function(){return this.dk(null)},
fI:function(a,b){var u=V.al
H.l(b,"$ij",[u],"$aj")
u=new D.c2([u])
u.b=!0
this.ac(u)},
fK:function(a,b){var u=V.al
H.l(b,"$ij",[u],"$aj")
u=new D.c3([u])
u.b=!0
this.ac(u)},
d1:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaj()
p=h.j(0,r.gaj())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aF])
h.I(0,new O.hB(j,o))
C.a.bD(o,new O.hC())
n=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaj()
p=n.j(0,r.gaj())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aI])
n.I(0,new O.hD(j,m))
C.a.bD(m,new O.hE())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gaj()
q=l.j(0,r.gaj())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aJ])
l.I(0,new O.hF(j,k))
C.a.bD(k,new O.hG())
i=C.e.a5(j.e.a.length+3,4)
j.dy.e
return A.nZ(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
f4:function(a,b){H.l(a,"$ib",[T.e8],"$ab")},
am:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.at(u,u.length,[H.r(u,0)]);u.C();){t=u.d
t.toString
s=$.hI
t.a=s==null?$.hI=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.an(0,b,t)}},
j4:function(a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
if(a8==null){a8=a7.d1()
u=a9.fr.j(0,a8.b6)
if(u==null){u=A.nY(a8,a9.a)
t=u.b
if(t.length===0)H.z(P.D("May not cache a shader with no name."))
if(a9.fr.bp(0,t))H.z(P.D('Shader cache already contains a shader by the name "'+t+'".'))
a9.fr.k(0,t,u)}a8=a7.a=u
b0.e=null}s=a8.z
r=s.dI
a8=b0.e
if(!(a8 instanceof Z.dv))a8=b0.e=null
if(a8==null||!a8.d.u(0,r)){a8=s.k3
if(a8)b0.d.av()
q=s.k4
if(q){p=b0.d
o=p.e
if(o!=null)++o.d
p.d.ca()
p.a.ca()
p=p.e
if(p!=null)p.ag(0)}p=s.r2
if(p){o=b0.d
n=o.e
if(n!=null)++n.d
o.a.ie()
o=o.e
if(o!=null)o.ag(0)}m=b0.d.ic(new Z.jp(a9.a),r)
m.aV($.bx()).e=a7.a.Q.c
if(a8)m.aV($.bw()).e=a7.a.cx.c
if(q)m.aV($.bv()).e=a7.a.ch.c
if(s.r1)m.aV($.bU()).e=a7.a.cy.c
if(p)m.aV($.bV()).e=a7.a.db.c
if(s.rx)m.aV($.bu()).e=a7.a.dx.c
b0.e=m}a8=T.e8
l=H.d([],[a8])
q=a7.a
p=a9.a
p.useProgram(q.r)
q.x.is()
if(s.dy){q=a7.a
o=a9.dx
o=o.ga6(o)
q=q.dy
q.toString
q.aq(o.ax(0,!0))}if(s.fr){q=a7.a
o=a9.cx
if(o==null){o=a9.db
o=o.ga6(o)
n=a9.dx
n=a9.cx=o.q(0,n.ga6(n))
o=n}q=q.fr
q.toString
q.aq(o.ax(0,!0))}q=a7.a
o=a9.ch
if(o==null){o=a9.gj0()
n=a9.dx
n=a9.ch=o.q(0,n.ga6(n))
o=n}q=q.fy
q.toString
q.aq(o.ax(0,!0))
if(s.ry){q=a7.a
o=a7.b
q=q.k1
q.toString
q.aq(C.i.ax(o,!0))}if(s.x1){q=a7.a
o=a7.c
q=q.k2
q.toString
q.aq(C.i.ax(o,!0))}if(s.x2){q=a7.a
o=a7.d
q=q.k3
q.toString
q.aq(C.i.ax(o,!0))}if(s.y2>0){k=a7.e.a.length
q=a7.a.k4
C.d.by(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){o=a7.a
n=a7.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$ial")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.di(H.l(n.ax(0,!0),"$ib",q,"$ab")))
C.d.er(o.a,o.d,!1,i)}}if(s.a.a){q=a7.a
o=a7.f.f
q=q.r2
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=a7.a
o=a7.r.f
q=q.x1
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=a7.a
o=a7.x.f
q=q.y2
C.d.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=a7.a
o=a7.y.f
q=q.dJ
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=a7.a
n=a7.z.ch
o=o.dL
C.d.a2(o.a,o.d,n)}if(q){q=a7.a
o=a7.z.f
q=q.dK
C.d.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=a9.db
h=o.ga6(o)
o=P.m
g=new H.a2([o,o])
for(o=a7.dx.e,n=o.length,f=[a8],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gaj()
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dp(a7.a.ci.j(0,c),b)
a0=d.gdG(d)
a1=C.c.q(h.a,a0.gaT(a0))+C.c.q(h.b,a0.gaU(a0))+C.c.q(h.c,a0.gbr())
a2=C.c.q(h.e,a0.gaT(a0))+C.c.q(h.f,a0.gaU(a0))+C.c.q(h.r,a0.gbr())
a0=C.c.q(h.y,a0.gaT(a0))+C.c.q(h.z,a0.gaU(a0))+C.c.q(h.Q,a0.gbr())
a0=new V.M(a1,a2,a0).w(0,Math.sqrt(a1*a1+a2*a2+a0*a0))
a2=a.e
a1=a0.a
a3=a0.b
a0=a0.c
C.d.U(a2.a,a2.d,a1,a3,a0)
a0=d.gaS(d)
a3=a.f
C.d.U(a3.a,a3.d,a0.a,a0.b,a0.c)
d.gaY()
a0=d.gdG(d)
a1=a.d
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbz()
a1=a.b
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbw(d)
a1=a.c
C.d.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaY()
H.l(l,"$ib",f,"$ab")
if(!C.a.W(l,a0)){a0.sb7(0,l.length)
C.a.h(l,a0)}a0=d.gaY()
a1=a0.gb9(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb9(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.gb7(a0)
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=a7.a.cg.j(0,n)
C.d.by(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=a9.db
h=o.ga6(o)
o=P.m
a4=new H.a2([o,o])
for(o=a7.dx.f,n=o.length,e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gaj()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dp(a7.a.ck.j(0,c),b)
a5=h.q(0,d.a)
f=d.a
a0=$.cP
f=f.cF(a0==null?$.cP=new V.a4(0,0,0):a0)
a0=a.b
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=$.cP
f=a5.cF(f==null?$.cP=new V.a4(0,0,0):f)
a0=a.c
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.c
a0=a.e
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.r
a0=a.y
C.d.a2(a0.a,a0.d,f)
f=d.x
a0=a.z
C.d.a2(a0.a,a0.d,f)
f=d.y
a0=a.Q
C.d.a2(a0.a,a0.d,f)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=a7.a.cj.j(0,n)
C.d.by(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=a9.db
h=o.ga6(o)
o=P.m
a6=new H.a2([o,o])
for(o=a7.dx.r,n=o.length,a8=[a8],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gaj()
b=a6.j(0,c)
if(b==null)b=0
a6.k(0,c,b+1)
a=J.dp(a7.a.cm.j(0,c),b)
f=d.gj_(d)
a0=a.b
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gdG(d).jK()
a0=a.c
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=h.cF(d.gj_(d))
a0=a.d
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gaS(d)
a0=a.e
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
d.gaY()
f=d.gbz()
a0=a.f
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gbw(d)
a0=a.r
C.d.U(a0.a,a0.d,f.a,f.b,f.c)
f=d.gjL()
a0=a.x
C.d.a2(a0.a,a0.d,f)
f=d.gjM()
a0=a.y
C.d.a2(a0.a,a0.d,f)
d.gaY()
f=d.gaY()
H.l(l,"$ib",a8,"$ab")
if(!C.a.W(l,f)){f.sb7(0,l.length)
C.a.h(l,f)}f=d.gaY()
a0=f.gb9(f)
if(a0){a0=a.dx
a0.toString
a1=f.gb9(f)
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.gb7(f)
a0.a.uniform1i(a0.d,f)}}d.gcK()
f=d.gjm()
a0=a.z
C.d.je(a0.a,a0.d,f.a,f.b,f.c,f.d)
f=d.gcK()
if(!C.a.W(l,f)){f.sb7(0,l.length)
C.a.h(l,f)}f=d.gcK()
a0=f.gb9(f)
if(a0){a0=a.dy
a0.toString
a1=f.gb9(f)
if(!a1)a0.a.uniform1i(a0.d,0)
else{f=f.gb7(f)
a0.a.uniform1i(a0.d,f)}}if(d.gjt()){f=d.gjr()
a0=a.Q
C.d.a2(a0.a,a0.d,f)
f=d.gjq()
a0=a.ch
C.d.a2(a0.a,a0.d,f)}if(d.gjs()){f=d.gjn()
a0=a.cx
C.d.a2(a0.a,a0.d,f)
f=d.gjo()
a0=a.cy
C.d.a2(a0.a,a0.d,f)
f=d.gjp()
a0=a.db
C.d.a2(a0.a,a0.d,f)}}for(a8=q.length,e=0;e<q.length;q.length===a8||(0,H.u)(q),++e){o=q[e].a
k=a6.j(0,o)
if(k==null)k=0
o=a7.a.cl.j(0,o)
C.d.by(o.a,o.d,k)}}}if(s.dx){a8=a7.a
q=a9.Q
if(q==null){q=a9.db
q=a9.Q=q.ga6(q).iE(0)}a8=a8.id
a8.toString
a8.aq(q.ax(0,!0))}if(s.cy){a7.f4(l,a7.ch)
a8=a7.a
q=a7.ch
a8.hH(a8.dM,q)
if(s.r.a){a8=a7.a
q=a7.cx.f
a8=a8.dN
C.d.U(a8.a,a8.d,q.a,q.b,q.c)}a8=s.x.a
if(!a8)q=!1
else q=!0
if(q){q=a7.a
o=a7.cy.ch
q=q.dO
C.d.a2(q.a,q.d,o)}if(a8){a8=a7.a
q=a7.cy.f
a8=a8.dP
C.d.U(a8.a,a8.d,q.a,q.b,q.c)}}a8=s.y.a
q=!a8
if(q)o=!1
else o=!0
if(o){if(a8){a8=a7.a
o=a7.db.f
a8=a8.dQ
C.d.a2(a8.a,a8.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bo(a9)
a8=b0.e
a8.bo(a9)
a8.aW(a9)
a8.eq(a9)
if(q)a8=!1
else a8=!0
if(a8)p.disable(3042)
for(j=0;j<l.length;++j)l[j].eq(a9)
a8=a7.a
a8.toString
p.useProgram(null)
a8.x.iq()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d1().b6},
sf8:function(a){this.e=H.l(a,"$ia5",[V.al],"$aa5")}}
O.hB.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aF(a,C.e.a5(b+3,4)*4))},
$S:11}
O.hC.prototype={
$2:function(a,b){H.h(a,"$iaF")
H.h(b,"$iaF")
return J.kZ(a.a,b.a)},
$S:50}
O.hD.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.e.a5(b+3,4)*4))},
$S:11}
O.hE.prototype={
$2:function(a,b){H.h(a,"$iaI")
H.h(b,"$iaI")
return J.kZ(a.a,b.a)},
$S:51}
O.hF.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aJ(a,C.e.a5(b+3,4)*4))},
$S:11}
O.hG.prototype={
$2:function(a,b){H.h(a,"$iaJ")
H.h(b,"$iaJ")
return J.kZ(a.a,b.a)},
$S:52}
O.hv.prototype={
aA:function(){var u,t=this
t.cN()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.K(t.b,u,1,[P.p])
u.b=!0
t.a.ac(u)}}}
O.dR.prototype={
aA:function(){},
dn:function(a){var u,t,s=this
if(!s.c.u(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aA()
u=s.a
u.a=null
u.ac(null)}}}
O.hw.prototype={}
O.b9.prototype={
dm:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.ac(t)}},
aA:function(){this.cN()
this.dm(new V.a6(1,1,1))},
saS:function(a,b){this.dn(new A.ao(!0,!1,!1))
this.dm(b)}}
O.hy.prototype={}
O.hz.prototype={
aA:function(){var u,t=this
t.cO()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.ac(u)}}}
O.hA.prototype={
dq:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.ac(t)}},
aA:function(){this.cO()
this.dq(100)}}
O.bM.prototype={}
T.e8.prototype={}
V.bk.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dP.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa3:function(a){this.a=H.l(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aE:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.cM(0)+"]"}}
V.i8.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c7(this.a),t=H.c7(this.b)
return u+".."+t},
$iaz:1}
V.ii.prototype={
eJ:function(a){var u,t
if(a.a.length<=0)throw H.c(P.D("May not create a SetMatcher with zero characters."))
u=new H.a2([P.m,P.T])
for(t=new H.cG(a,a.gn(a),[H.ar(a,"x",0)]);t.C();)u.k(0,t.d,!0)
this.shG(u)},
aE:function(a,b){return this.a.bp(0,b)},
i:function(a){var u=this.a
return P.cV(u.ga1(u),0,null)},
shG:function(a){this.a=H.l(a,"$iy",[P.m,P.T],"$ay")},
$iaz:1}
V.cT.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cY(this.a.l(0,b))
r.sa3(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shZ:function(a){this.c=H.l(a,"$ib",[V.cY],"$ab")}}
V.ea.prototype={
i:function(a){var u=H.lD(this.b,"\n","\\n"),t=H.lD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cX.prototype={
aG:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shz:function(a){var u=P.f
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.iK.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cT(this,b)
u.shZ(H.d([],[V.cY]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cX(a)
u=P.f
t.shz(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
ep:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ea]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.iv(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cV(i,0,m)
throw H.c(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cV(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ea(n==null?o.b:n,p,s)}++s}}},
shQ:function(a){this.a=H.l(a,"$iy",[P.f,V.cT],"$ay")},
shS:function(a){this.b=H.l(a,"$iy",[P.f,V.cX],"$ay")}}
V.cY.prototype={
i:function(a){return this.b.b+": "+this.cM(0)}}
X.dx.prototype={$icK:1}
X.h3.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.V():u}}
X.dX.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.V():u},
aK:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.F(a)},
f0:function(){return this.aK(null)},
saF:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gv().M(0,s.gcS())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gcS())
u=new D.K("mover",t,s.b,[U.ab])
u.b=!0
s.aK(u)}},
$icK:1,
$idx:1}
X.e7.prototype={}
V.bB.prototype={
bj:function(a){this.b=new P.h7(C.Q)
this.c=null
this.sbN(H.d([],[[P.b,W.aG]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aG]))
u=a.split("\n")
for(l=u.length,t=[W.aG],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fd(q,0,q.length)
n=o==null?q:o
C.O.ez(p,H.lD(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaw(m.d),p)}},
ea:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbN(H.d([],[[P.b,W.aG]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bq():t).ep(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bv(t[r])},
sbN:function(a){this.d=H.l(a,"$ib",[[P.b,W.aG]],"$ab")}}
V.kR.prototype={
$1:function(a){var u
H.h(a,"$ibe")
u=C.c.eo(this.a.giz(),2)
if(u!=="0.00")P.lC(u+" fps")},
$S:53}
V.fK.prototype={
bv:function(a){var u=this
switch(a.a){case"Class":u.N(a.b,"#551")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break
case"Type":u.N(a.b,"#B11")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iL()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a_("0","9")
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bk())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bk())
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
t.sa3(H.d([],s))
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
t.sa3(H.d([],s))
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
t.d=t.a.P("Num")
t=a1.l(0,n)
t.d=t.a.P("Num")
t=a1.l(0,m)
t.d=t.a.P("Symbol")
t=a1.l(0,j)
t.d=t.a.P("String")
t=a1.l(0,g)
t.d=t.a.P("String")
t=a1.l(0,c)
t.d=t.a.P(d)
t=a1.l(0,a0)
t.d=t.a.P(a0)
t=a1.l(0,q)
t=t.d=t.a.P(q)
u=[P.f]
t.aG(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h4.prototype={
bv:function(a){var u=this
switch(a.a){case"Builtin":u.N(a.b,"#411")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Preprocess":u.N(a.b,"#737")
break
case"Reserved":u.N(a.b,"#119")
break
case"Symbol":u.N(a.b,"#611")
break
case"Type":u.N(a.b,"#171")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iL()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a_("0","9")
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
C.a.h(e.l(0,k).m(0,m).a,new V.bk())
t=e.l(0,j).m(0,i)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa3(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sa3(H.d([],s))
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
u.d=u.a.P("Num")
u=e.l(0,n)
u.d=u.a.P("Num")
u=e.l(0,m)
u.d=u.a.P("Symbol")
u=e.l(0,i)
u.d=u.a.P(j)
u=e.l(0,g)
u.d=u.a.P(h)
u=e.l(0,f)
u.d=u.a.P(f)
u=e.l(0,q)
u=u.d=u.a.P(q)
t=[P.f]
u.aG(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h5.prototype={
bv:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.N(a.b,"#911")
u.N("=",t)
break
case"Id":u.N(a.b,t)
break
case"Other":u.N(a.b,t)
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break}},
bq:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iL()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
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
C.a.h(l.l(0,o).m(0,o).a,new V.bk())
C.a.h(l.l(0,s).m(0,m).a,new V.bk())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sa3(H.d([],[V.az]))
C.a.h(u.a,t)
u=V.w(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.P("Symbol")
u=l.l(0,n)
u.d=u.a.P("String")
u=l.l(0,r)
t=u.a.P(r)
u.d=t
t.aG(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.i2.prototype={
ea:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbN(H.d([],[[P.b,W.aG]]))
this.N(C.a.m(b,"\n"),"#111")},
bv:function(a){},
bq:function(){return}}
V.i6.prototype={
dw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mh().gcA().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.du(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lJ(m.c).h(0,q)
o=W.nM("radio")
o.checked=s
o.name=u
u=W.o
W.ac(o,"change",H.n(new V.i7(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lJ(m.c).h(0,r.createElement("br"))},
b2:function(a,b,c){return this.dw(a,b,c,!1)},
du:function(a){var u,t,s=P.mh(),r=P.f,q=P.nU(s.gcA(),r,r)
q.k(0,this.a,a)
u=s.eh(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k2([],[]).cG(""),"",t)}}
V.i7.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.du(u.d)}},
$S:16}
V.im.prototype={
eL:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ac(q,"scroll",H.n(new V.ip(o),{func:1,ret:-1,args:[r]}),!1,r)},
dA:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hK()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ep(C.a.iG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(1>=m.length)return H.e(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.f5(C.y,n,C.h,!1)
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
ew:function(a){var u,t,s,r=new V.fK("dart")
r.bj("dart")
u=new V.h4("glsl")
u.bj("glsl")
t=new V.h5("html")
t.bj("html")
s=C.a.ix(H.d([r,u,t],[V.bB]),new V.iq(a))
if(s!=null)return s
r=new V.i2("plain")
r.bj("plain")
return r},
dz:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dl(r).a0(r,"+")){C.a.k(b0,s,C.b.a7(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a0(r,"-")){C.a.k(b0,s,C.b.a7(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ew(a8)
q.ea(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f5(C.y,a7,C.h,!1)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.Z.i8(a,r[a0])
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
for(a3=C.a.gT(r);a3.C();)c.appendChild(a3.gL(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i1:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.h(r.insertCell(-1),"$ibd").style
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
o=H.h(r.insertCell(-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hK:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iL()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sa3(H.d([],r))
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
s.sa3(H.d([],r))
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
s.sa3(H.d([],r))
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
t.sa3(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sa3(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bk())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sa3(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.P(p)
s=u.l(0,n)
s.d=s.a.P(o)
s=u.l(0,"CodeEnd")
s.d=s.a.P(m)
s=u.l(0,j)
s.d=s.a.P("Link")
s=u.l(0,i)
s.d=s.a.P(i)
this.b=u}}
V.ip.prototype={
$1:function(a){P.md(C.o,new V.io(this.a))},
$S:16}
V.io.prototype={
$0:function(){var u=C.c.al(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.iq.prototype={
$1:function(a){return H.h(a,"$ibB").a===this.a},
$S:55}
U.kI.prototype={
$0:function(){this.a.saa(0,F.ly(1,null,null,1))},
$S:0}
U.kJ.prototype={
$0:function(){this.a.saa(0,F.mN(!0,40,1))},
$S:0}
U.kK.prototype={
$0:function(){this.a.saa(0,F.mN(!1,40,0))},
$S:0}
U.kL.prototype={
$0:function(){this.a.saa(0,F.n2(6,6))},
$S:0}
U.kM.prototype={
$0:function(){this.a.saa(0,F.n4())},
$S:0}
U.kN.prototype={
$0:function(){this.a.saa(0,F.pE())},
$S:0}
U.kO.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dz("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dz("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eB=u.i
u=J.dJ.prototype
u.eD=u.i
u=P.j.prototype
u.eC=u.bA
u=W.U.prototype
u.bE=u.ad
u=W.eP.prototype
u.eF=u.au
u=O.dR.prototype
u.cN=u.aA
u=O.b9.prototype
u.cO=u.aA
u=V.dP.prototype
u.eE=u.aE
u.cM=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pl","ov",13)
u(P,"pm","ow",13)
u(P,"pn","ox",13)
t(P,"mM","pj",3)
s(W,"px",4,null,["$4"],["oz"],28,0)
s(W,"py",4,null,["$4"],["oA"],28,0)
var m
r(m=E.ap.prototype,"ge6",0,0,null,["$1","$0"],["e7","iR"],1,0)
r(m,"ge8",0,0,null,["$1","$0"],["e9","iS"],1,0)
r(m,"ge4",0,0,null,["$1","$0"],["e5","iQ"],1,0)
r(m,"ge2",0,0,null,["$1","$0"],["e3","iN"],1,0)
q(m,"giL","iM",9)
q(m,"giO","iP",9)
r(m=E.e9.prototype,"gcP",0,0,null,["$1","$0"],["cR","cQ"],1,0)
p(m,"gj6","ei",3)
o(m=X.eg.prototype,"gfX","fY",15)
o(m,"gfL","fM",15)
o(m,"gfR","fS",4)
o(m,"gh0","h1",31)
o(m,"gfZ","h_",31)
o(m,"gh4","h5",4)
o(m,"gh8","h9",4)
o(m,"gfV","fW",4)
o(m,"gh6","h7",4)
o(m,"gfT","fU",4)
o(m,"gha","hb",36)
o(m,"ghc","hd",15)
o(m,"ghp","hq",14)
o(m,"ghl","hm",14)
o(m,"ghn","ho",14)
r(m=D.dL.prototype,"gdf",0,0,null,["$1","$0"],["dg","h2"],1,0)
o(m,"ghf","hg",38)
q(m,"gfF","fG",26)
q(m,"ghj","hk",26)
r(D.bK.prototype,"geQ",0,0,null,["$1","$0"],["a8","eR"],1,0)
n(V.W.prototype,"gn","b8",12)
n(V.M.prototype,"gn","b8",12)
n(V.bs.prototype,"gn","b8",12)
r(m=U.cD.prototype,"gaM",0,0,null,["$1","$0"],["H","a4"],1,0)
q(m,"geT","eU",22)
q(m,"ghh","hi",22)
r(m=U.eh.prototype,"gaM",0,0,null,["$1","$0"],["H","a4"],1,0)
o(m,"gbQ","bR",2)
o(m,"gbS","bT",2)
o(m,"gbU","bV",2)
r(m=U.ei.prototype,"gaM",0,0,null,["$1","$0"],["H","a4"],1,0)
o(m,"gbQ","bR",2)
o(m,"gbS","bT",2)
o(m,"gbU","bV",2)
o(m,"gfw","fz",2)
o(m,"gfA","fB",2)
o(m,"ghX","hY",2)
o(m,"ghV","hW",2)
o(m,"ghT","hU",2)
o(U.ej.prototype,"gfC","fD",2)
r(m=M.dE.prototype,"gar",0,0,null,["$1","$0"],["ay","eV"],1,0)
q(m,"gfN","fO",9)
q(m,"gfP","fQ",9)
r(m=O.dQ.prototype,"geX",0,0,null,["$1","$0"],["ac","eY"],1,0)
r(m,"ghC",0,0,null,["$1","$0"],["dk","hD"],1,0)
q(m,"gfH","fI",33)
q(m,"gfJ","fK",33)
r(X.dX.prototype,"gcS",0,0,null,["$1","$0"],["aK","f0"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.l9,J.a,J.at,P.eC,P.j,H.cG,P.b6,H.c0,H.d0,H.fD,H.iQ,P.bD,H.cw,H.eU,P.ae,H.hi,H.hk,H.hd,P.f_,P.bi,P.aO,P.em,P.iy,P.cU,P.iz,P.be,P.an,P.ki,P.jX,P.cg,P.eB,P.x,P.ka,P.hq,P.bZ,P.h8,P.kg,P.kf,P.T,P.ay,P.aa,P.b5,P.i0,P.e5,P.eu,P.h2,P.bE,P.b,P.y,P.P,P.av,P.f,P.ah,P.ch,P.j4,P.k_,W.fG,W.bQ,W.H,W.dV,W.eP,W.k5,W.dG,W.aB,W.jW,W.f6,P.k1,P.jR,P.S,O.a5,O.cH,E.fx,E.ap,E.i9,E.e9,Z.el,Z.jp,Z.dv,Z.bF,Z.bP,D.fA,D.c_,D.B,X.dw,X.dK,X.hf,X.hn,X.aA,X.hP,X.iM,X.eg,D.dB,D.ad,D.bK,D.e4,V.a6,V.aE,V.fU,V.hH,V.al,V.a9,V.a4,V.bc,V.e_,V.W,V.M,V.bs,U.eh,U.ei,U.ej,M.dE,A.ds,A.fq,A.ao,A.aF,A.aI,A.aJ,A.hx,A.cb,A.cc,A.cf,A.ec,A.iZ,F.a8,F.fX,F.bp,F.hh,F.bJ,F.e2,F.ij,F.ik,F.il,F.aj,F.jd,F.je,F.jh,F.jj,F.jk,F.jl,O.bM,O.dR,O.hy,V.bk,V.az,V.dP,V.i8,V.ii,V.cT,V.ea,V.cX,V.iK,X.dx,X.e7,X.dX,V.bB,V.i6,V.im])
s(J.a,[J.hb,J.dI,J.dJ,J.aS,J.bG,J.bn,H.cL,H.bI,W.k,W.fm,W.bX,W.b3,W.b4,W.Y,W.eo,W.fL,W.fM,W.eq,W.dD,W.es,W.fO,W.o,W.ev,W.aR,W.h6,W.ex,W.cE,W.dN,W.hJ,W.eD,W.eE,W.aT,W.eF,W.eI,W.aU,W.eM,W.eO,W.aW,W.eQ,W.aX,W.eV,W.aK,W.eY,W.iJ,W.aZ,W.f0,W.iO,W.j9,W.f7,W.f9,W.fb,W.fd,W.ff,P.b8,P.ez,P.bb,P.eK,P.i5,P.eW,P.bf,P.f2,P.fr,P.en,P.dt,P.dY,P.c9,P.e1,P.ed,P.eS])
s(J.dJ,[J.i1,J.bO,J.bo])
t(J.l8,J.aS)
s(J.bG,[J.dH,J.hc])
t(P.hm,P.eC)
s(P.hm,[H.ee,W.jx,W.aq,P.fZ])
t(H.t,H.ee)
s(P.j,[H.fR,H.hr,H.d2])
s(H.fR,[H.c4,H.hj])
s(P.b6,[H.hs,H.jq])
t(H.ht,H.c4)
t(H.fE,H.fD)
s(P.bD,[H.hY,H.he,H.j2,H.iS,H.fz,H.ig,P.fp,P.dW,P.aQ,P.j3,P.j0,P.ca,P.fC,P.fJ])
s(H.cw,[H.kW,H.iF,H.kC,H.kD,H.kE,P.jt,P.js,P.ju,P.jv,P.k9,P.k8,P.jE,P.jI,P.jF,P.jG,P.jH,P.jL,P.jM,P.jK,P.jJ,P.iA,P.iB,P.ks,P.jU,P.jT,P.jV,P.hl,P.hp,P.fP,P.fQ,P.j8,P.j5,P.j6,P.j7,P.kb,P.kc,P.ke,P.kd,P.km,P.kl,P.kn,P.ko,W.fS,W.hL,W.hN,W.ie,W.ix,W.jD,W.hW,W.hV,W.jY,W.jZ,W.k7,W.kh,P.k3,P.ku,P.h_,P.h0,P.ft,E.ia,E.ib,E.ic,E.iI,D.fV,D.fW,F.kj,F.kv,F.kx,F.ky,F.kz,F.kS,F.kT,F.kV,F.kG,F.kw,F.jn,F.jm,F.jf,F.jg,O.hB,O.hC,O.hD,O.hE,O.hF,O.hG,V.kR,V.i7,V.ip,V.io,V.iq,U.kI,U.kJ,U.kK,U.kL,U.kM,U.kN,U.kO])
s(H.iF,[H.iv,H.cu])
t(H.jr,P.fp)
t(P.ho,P.ae)
s(P.ho,[H.a2,W.jw])
t(H.dS,H.bI)
s(H.dS,[H.d7,H.d9])
t(H.d8,H.d7)
t(H.cM,H.d8)
t(H.da,H.d9)
t(H.dT,H.da)
s(H.dT,[H.hQ,H.hR,H.hS,H.hT,H.hU,H.dU,H.cN])
t(P.jS,P.ki)
t(P.jQ,P.jX)
t(P.f4,P.hq)
t(P.ef,P.f4)
s(P.bZ,[P.fv,P.fT])
t(P.bC,P.iz)
s(P.bC,[P.fw,P.h7,P.jc,P.jb])
t(P.ja,P.fT)
s(P.aa,[P.p,P.m])
s(P.aQ,[P.c8,P.h9])
t(P.jz,P.ch)
s(W.k,[W.G,W.fY,W.cI,W.aV,W.db,W.aY,W.aL,W.dd,W.jo,W.d3,P.fu,P.bW])
s(W.G,[W.U,W.bA,W.d4])
s(W.U,[W.v,P.q])
s(W.v,[W.dr,W.fn,W.ct,W.bz,W.bY,W.aG,W.h1,W.cF,W.ih,W.bd,W.e6,W.iD,W.iE,W.cW])
s(W.b3,[W.cx,W.fH,W.fI])
t(W.fF,W.b4)
t(W.cy,W.eo)
t(W.er,W.eq)
t(W.dC,W.er)
t(W.et,W.es)
t(W.fN,W.et)
t(W.aH,W.bX)
t(W.ew,W.ev)
t(W.cB,W.ew)
t(W.ey,W.ex)
t(W.c1,W.ey)
t(W.bN,W.o)
s(W.bN,[W.b7,W.af,W.b_])
t(W.hK,W.eD)
t(W.hM,W.eE)
t(W.eG,W.eF)
t(W.hO,W.eG)
t(W.eJ,W.eI)
t(W.cO,W.eJ)
t(W.eN,W.eM)
t(W.i3,W.eN)
t(W.id,W.eO)
t(W.dc,W.db)
t(W.is,W.dc)
t(W.eR,W.eQ)
t(W.it,W.eR)
t(W.iw,W.eV)
t(W.eZ,W.eY)
t(W.iG,W.eZ)
t(W.de,W.dd)
t(W.iH,W.de)
t(W.f1,W.f0)
t(W.iN,W.f1)
t(W.bh,W.af)
t(W.f8,W.f7)
t(W.jy,W.f8)
t(W.ep,W.dD)
t(W.fa,W.f9)
t(W.jN,W.fa)
t(W.fc,W.fb)
t(W.eH,W.fc)
t(W.fe,W.fd)
t(W.k0,W.fe)
t(W.fg,W.ff)
t(W.k4,W.fg)
t(W.jA,W.jw)
t(W.jB,P.iy)
t(W.ll,W.jB)
t(W.jC,P.cU)
t(W.k6,W.eP)
t(P.k2,P.k1)
t(P.am,P.jR)
t(P.eA,P.ez)
t(P.hg,P.eA)
t(P.eL,P.eK)
t(P.hZ,P.eL)
t(P.cR,P.q)
t(P.eX,P.eW)
t(P.iC,P.eX)
t(P.f3,P.f2)
t(P.iP,P.f3)
t(P.fs,P.en)
t(P.i_,P.bW)
t(P.eT,P.eS)
t(P.iu,P.eT)
s(E.fx,[Z.du,A.cS,T.e8])
s(D.B,[D.c2,D.c3,D.K,X.i4])
s(X.i4,[X.dO,X.bq,X.cJ,X.eb])
s(O.a5,[D.dL,U.cD])
s(D.fA,[U.fB,U.ab])
s(U.ab,[U.dy,U.e0])
t(A.hu,A.cS)
s(A.ec,[A.aM,A.iW,A.iX,A.iY,A.iU,A.ai,A.iV,A.a0,A.cZ,A.j_,A.d_,A.aC,A.cd,A.ce])
t(F.ir,F.fX)
t(F.iT,F.hh)
t(F.ji,F.jj)
t(F.hX,F.jk)
t(O.dQ,O.bM)
s(O.dR,[O.hv,O.hw,O.b9])
s(O.b9,[O.hz,O.hA])
s(V.dP,[V.au,V.cY])
t(X.h3,X.e7)
s(V.bB,[V.fK,V.h4,V.h5,V.i2])
u(H.ee,H.d0)
u(H.d7,P.x)
u(H.d8,H.c0)
u(H.d9,P.x)
u(H.da,H.c0)
u(P.eC,P.x)
u(P.f4,P.ka)
u(W.eo,W.fG)
u(W.eq,P.x)
u(W.er,W.H)
u(W.es,P.x)
u(W.et,W.H)
u(W.ev,P.x)
u(W.ew,W.H)
u(W.ex,P.x)
u(W.ey,W.H)
u(W.eD,P.ae)
u(W.eE,P.ae)
u(W.eF,P.x)
u(W.eG,W.H)
u(W.eI,P.x)
u(W.eJ,W.H)
u(W.eM,P.x)
u(W.eN,W.H)
u(W.eO,P.ae)
u(W.db,P.x)
u(W.dc,W.H)
u(W.eQ,P.x)
u(W.eR,W.H)
u(W.eV,P.ae)
u(W.eY,P.x)
u(W.eZ,W.H)
u(W.dd,P.x)
u(W.de,W.H)
u(W.f0,P.x)
u(W.f1,W.H)
u(W.f7,P.x)
u(W.f8,W.H)
u(W.f9,P.x)
u(W.fa,W.H)
u(W.fb,P.x)
u(W.fc,W.H)
u(W.fd,P.x)
u(W.fe,W.H)
u(W.ff,P.x)
u(W.fg,W.H)
u(P.ez,P.x)
u(P.eA,W.H)
u(P.eK,P.x)
u(P.eL,W.H)
u(P.eW,P.x)
u(P.eX,W.H)
u(P.f2,P.x)
u(P.f3,W.H)
u(P.en,P.ae)
u(P.eS,P.x)
u(P.eT,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bz.prototype
C.n=W.bY.prototype
C.O=W.aG.prototype
C.R=J.a.prototype
C.a=J.aS.prototype
C.e=J.dH.prototype
C.i=J.dI.prototype
C.c=J.bG.prototype
C.b=J.bn.prototype
C.S=J.bo.prototype
C.Y=W.cO.prototype
C.B=J.i1.prototype
C.d=P.c9.prototype
C.Z=W.bd.prototype
C.C=W.e6.prototype
C.r=J.bO.prototype
C.D=W.bh.prototype
C.E=W.d3.prototype
C.a_=new P.fw()
C.F=new P.fv()
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

C.M=new P.i0()
C.h=new P.ja()
C.N=new P.jc()
C.f=new P.jS()
C.o=new P.b5(0)
C.P=new P.b5(5e6)
C.Q=new P.h8("element",!0,!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.m])
C.j=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.T=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.k=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.l=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.U=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.V=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.m=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.W=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.X=new H.fE(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",p:"double",aa:"num",f:"String",T:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[F.a8]},{func:1,ret:P.P,args:[F.aj,P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.ap]]},{func:1,ret:P.P,args:[D.B]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.p},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.P,args:[W.o]},{func:1,ret:V.a4,args:[P.p]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ab]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ad]]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.T,args:[W.U,P.f,P.f,W.bQ]},{func:1,ret:P.T,args:[W.aB]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.m,[P.j,V.al]]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[W.bh]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[[P.j,D.ad]]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.P,args:[P.f,,]},{func:1,ret:P.P,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[P.av]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aF,A.aF]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,ret:P.m,args:[A.aJ,A.aJ]},{func:1,ret:P.P,args:[P.be]},{func:1,args:[P.f]},{func:1,ret:P.T,args:[V.bB]},{func:1,args:[,P.f]},{func:1,ret:P.P,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b2=0
$.cv=null
$.lN=null
$.lp=!1
$.mU=null
$.mK=null
$.n0=null
$.kA=null
$.kF=null
$.lA=null
$.ci=null
$.dj=null
$.dk=null
$.lq=!1
$.a1=C.f
$.aw=[]
$.bm=null
$.l3=null
$.lT=null
$.lS=null
$.d6=P.lb(P.f,P.bE)
$.hI=null
$.m4=null
$.cP=null
$.m8=null
$.mk=null
$.mp=null
$.mm=null
$.mn=null
$.mo=null
$.ml=null
$.mq=null
$.m3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pT","n6",function(){return H.mT("_$dart_dartClosure")})
u($,"pU","lF",function(){return H.mT("_$dart_js")})
u($,"q_","n7",function(){return H.bg(H.iR({
toString:function(){return"$receiver$"}}))})
u($,"q0","n8",function(){return H.bg(H.iR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q1","n9",function(){return H.bg(H.iR(null))})
u($,"q2","na",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q5","nd",function(){return H.bg(H.iR(void 0))})
u($,"q6","ne",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q4","nc",function(){return H.bg(H.mf(null))})
u($,"q3","nb",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q8","ng",function(){return H.bg(H.mf(void 0))})
u($,"q7","nf",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qo","lG",function(){return P.ou()})
u($,"qa","nh",function(){return P.or()})
u($,"qp","nl",function(){return H.o_(H.di(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qr","nn",function(){return P.oe("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qs","no",function(){return P.oT()})
u($,"qq","nm",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qh","nk",function(){return Z.aN(0)})
u($,"qb","ni",function(){return Z.aN(511)})
u($,"qj","bx",function(){return Z.aN(1)})
u($,"qi","bw",function(){return Z.aN(2)})
u($,"qd","bv",function(){return Z.aN(4)})
u($,"qk","bU",function(){return Z.aN(8)})
u($,"ql","bV",function(){return Z.aN(16)})
u($,"qe","dm",function(){return Z.aN(32)})
u($,"qf","dn",function(){return Z.aN(64)})
u($,"qg","nj",function(){return Z.aN(96)})
u($,"qm","cs",function(){return Z.aN(128)})
u($,"qc","bu",function(){return Z.aN(256)})
u($,"pS","n5",function(){return new V.fU(1e-9)})
u($,"pR","L",function(){return $.n5()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cL,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cM,Float64Array:H.cM,Int16Array:H.hQ,Int32Array:H.hR,Int8Array:H.hS,Uint16Array:H.hT,Uint32Array:H.hU,Uint8ClampedArray:H.dU,CanvasPixelArray:H.dU,Uint8Array:H.cN,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fm,HTMLAnchorElement:W.dr,HTMLAreaElement:W.fn,HTMLBaseElement:W.ct,Blob:W.bX,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bY,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cx,CSSUnitValue:W.cx,CSSPerspective:W.fF,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cy,MSStyleCSSProperties:W.cy,CSS2Properties:W.cy,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fH,CSSUnparsedValue:W.fI,DataTransferItemList:W.fL,HTMLDivElement:W.aG,DOMException:W.fM,ClientRectList:W.dC,DOMRectList:W.dC,DOMRectReadOnly:W.dD,DOMStringList:W.fN,DOMTokenList:W.fO,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aH,FileList:W.cB,FileWriter:W.fY,HTMLFormElement:W.h1,Gamepad:W.aR,History:W.h6,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,ImageData:W.cE,HTMLInputElement:W.cF,KeyboardEvent:W.b7,Location:W.dN,MediaList:W.hJ,MessagePort:W.cI,MIDIInputMap:W.hK,MIDIOutputMap:W.hM,MimeType:W.aT,MimeTypeArray:W.hO,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aU,PluginArray:W.i3,RTCStatsReport:W.id,HTMLSelectElement:W.ih,SourceBuffer:W.aV,SourceBufferList:W.is,SpeechGrammar:W.aW,SpeechGrammarList:W.it,SpeechRecognitionResult:W.aX,Storage:W.iw,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.e6,HTMLTableRowElement:W.iD,HTMLTableSectionElement:W.iE,HTMLTemplateElement:W.cW,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iG,TextTrackList:W.iH,TimeRanges:W.iJ,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iN,TrackDefaultList:W.iO,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.j9,VideoTrackList:W.jo,WheelEvent:W.bh,Window:W.d3,DOMWindow:W.d3,Attr:W.d4,CSSRuleList:W.jy,ClientRect:W.ep,DOMRect:W.ep,GamepadList:W.jN,NamedNodeMap:W.eH,MozNamedAttrMap:W.eH,SpeechRecognitionResultList:W.k0,StyleSheetList:W.k4,SVGLength:P.b8,SVGLengthList:P.hg,SVGNumber:P.bb,SVGNumberList:P.hZ,SVGPointList:P.i5,SVGScriptElement:P.cR,SVGStringList:P.iC,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bf,SVGTransformList:P.iP,AudioBuffer:P.fr,AudioParamMap:P.fs,AudioTrackList:P.fu,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.i_,WebGLBuffer:P.dt,WebGLProgram:P.dY,WebGL2RenderingContext:P.c9,WebGLShader:P.e1,WebGLUniformLocation:P.ed,SQLResultSetRowList:P.iu})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(U.mX,[])
else U.mX([])})})()
//# sourceMappingURL=test.dart.js.map
