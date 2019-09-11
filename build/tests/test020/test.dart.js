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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lv(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l8:function l8(){},
kB:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
h9:function(){return new P.c7("No element")},
nN:function(){return new P.c7("Too many elements")},
nM:function(){return new P.c7("Too few elements")},
e2:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
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
r=J.b1(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
og:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.a6(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a6(a3+a4,2)
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
if(typeof d!=="number")return d.al()
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
if(typeof a1!=="number")return a1.al()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.al()
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
H.e2(a2,a3,h-2,a5,a6)
H.e2(a2,g+2,a4,a5,a6)
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
break}}}H.e2(a2,h,g,a5,a6)}else H.e2(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
fQ:function fQ(){},
c1:function c1(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
hr:function hr(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(){},
d_:function d_(){},
ed:function ed(){},
nD:function(){throw H.d(P.J("Cannot modify unmodifiable Map"))},
cq:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pv:function(a){return v.types[H.a4(a)]},
pC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.d(H.aw(a))
return u},
cP:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o8:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.E(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.o_(a)+H.lr(H.bQ(a),0,null)},
o_:function(a){var u,t,s,r,q,p,o,n=J.X(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibL){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cq(t.length>1&&C.b.E(t,0)===36?C.b.a7(t,1):t)},
o0:function(){if(!!self.location)return self.location.href
return},
m5:function(a){var u,t,s,r,q
H.kH(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o9:function(a){var u,t,s,r=H.c([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aw(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aQ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.aw(s))}return H.m5(r)},
m6:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aw(s))
if(s<0)throw H.d(H.aw(s))
if(s>65535)return H.o9(a)}return H.m5(a)},
oa:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aQ(u,10))>>>0,56320|u&1023)}}throw H.d(P.ag(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o7:function(a){var u=H.c2(a).getFullYear()+0
return u},
o5:function(a){var u=H.c2(a).getMonth()+1
return u},
o1:function(a){var u=H.c2(a).getDate()+0
return u},
o2:function(a){var u=H.c2(a).getHours()+0
return u},
o4:function(a){var u=H.c2(a).getMinutes()+0
return u},
o6:function(a){var u=H.c2(a).getSeconds()+0
return u},
o3:function(a){var u=H.c2(a).getMilliseconds()+0
return u},
E:function(a){throw H.d(H.aw(a))},
e:function(a,b){if(a==null)J.aD(a)
throw H.d(H.ck(a,b))},
ck:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aQ(!0,b,s,null)
u=H.a4(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.dY(b,s)},
pp:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c5(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c5(a,c,!0,b,"end",u)
return new P.aQ(!0,b,"end",null)},
aw:function(a){return new P.aQ(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.dU()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n1})
u.name=""}else u.toString=H.n1
return u},
n1:function(){return J.as(this.dartException)},
z:function(a){throw H.d(a)},
u:function(a){throw H.d(P.bl(a))},
bg:function(a){var u,t,s,r,q,p
a=H.n0(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m1:function(a,b){return new H.hV(a,b==null?null:b.method)},
l9:function(a,b){var u=b==null,t=u?null:b.method
return new H.hd(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l9(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m1(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n5()
q=$.n6()
p=$.n7()
o=$.n8()
n=$.nb()
m=$.nc()
l=$.na()
$.n9()
k=$.ne()
j=$.nd()
i=r.ac(u)
if(i!=null)return f.$1(H.l9(H.I(u),i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.l9(H.I(u),i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m1(H.I(u),i))}}return f.$1(new H.j_(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e4()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aQ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e4()
return a},
co:function(a){var u
if(a==null)return new H.eT(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eT(a)},
pt:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pB:function(a,b,c,d,e,f){H.h(a,"$ibE")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.D("Unsupported number of arguments for wrapped closure"))},
cj:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pB)
a.$identity=u
return u},
nC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.is().constructor.prototype):Object.create(new H.ct(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lO(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pv,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lM:H.l0
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lO(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nz:function(a,b,c,d){var u=H.l0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lO:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nB(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nz(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cu
return new Function(r+H.i(q==null?$.cu=H.fx("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cu
return new Function(r+H.i(q==null?$.cu=H.fx("self"):q)+"."+H.i(u)+"("+o+");}")()},
nA:function(a,b,c,d){var u=H.l0,t=H.lM
switch(b?-1:a){case 0:throw H.d(H.oe("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nB:function(a,b){var u,t,s,r,q,p,o,n=$.cu
if(n==null)n=$.cu=H.fx("self")
u=$.lL
if(u==null)u=$.lL=H.fx("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nA(s,!q,t,b)
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
lv:function(a,b,c,d,e,f,g){return H.nC(a,b,H.a4(c),d,!!e,!!f,g)},
l0:function(a){return a.a},
lM:function(a){return a.c},
fx:function(a){var u,t,s,r=new H.ct("self","target","receiver","name"),q=J.l6(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pj("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.b0(a,"String"))},
pq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b0(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b0(a,"num"))},
ls:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.b0(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.b0(a,"int"))},
mZ:function(a,b){throw H.d(H.b0(a,H.cq(H.I(b).substring(2))))},
pI:function(a,b){throw H.d(H.ny(a,H.cq(H.I(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.mZ(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pI(a,b)},
kH:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.d(H.b0(a,"List<dynamic>"))},
mV:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.mZ(a,b)},
mP:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
fg:function(a,b){var u
if(typeof a=="function")return!0
u=H.mP(J.X(a))
if(u==null)return!1
return H.mB(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lo)return a
$.lo=!0
try{if(H.fg(a,b))return a
u=H.kQ(b)
t=H.b0(a,u)
throw H.d(t)}finally{$.lo=!1}},
lx:function(a,b){if(a!=null&&!H.lu(a,b))H.z(H.b0(a,H.kQ(b)))
return a},
b0:function(a,b){return new H.iP("TypeError: "+P.dB(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
ny:function(a,b){return new H.fy("CastError: "+P.dB(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t=J.X(a)
if(!!t.$icv){u=H.mP(t)
if(u!=null)return H.kQ(u)
return"Closure"}return H.c3(a)},
pj:function(a){throw H.d(new H.jr(a))},
pO:function(a){throw H.d(new P.fI(H.I(a)))},
oe:function(a){return new H.ic(a)},
mS:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
qv:function(a,b,c){return H.cp(a["$a"+H.i(c)],H.bQ(b))},
bP:function(a,b,c,d){var u
H.I(c)
H.a4(d)
u=H.cp(a["$a"+H.i(c)],H.bQ(b))
return u==null?null:u[d]},
ar:function(a,b,c){var u
H.I(b)
H.a4(c)
u=H.cp(a["$a"+H.i(b)],H.bQ(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a4(b)
u=H.bQ(a)
return u==null?null:u[b]},
kQ:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
H.l(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cq(a[0].name)+H.lr(a,1,b)
if(typeof a=="function")return H.cq(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.oT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oT:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
if(m!=null&&m!==P.R)p+=" extends "+H.bO(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bO(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bO(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bO(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.ps(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bO(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lr:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ah("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
cp:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lt:function(a,b,c,d){var u,t
H.I(b)
H.kH(c)
H.I(d)
if(a==null)return!1
u=H.bQ(a)
t=J.X(a)
if(t[b]==null)return!1
return H.mK(H.cp(t[d],u),null,c,null)},
l:function(a,b,c,d){H.I(b)
H.kH(c)
H.I(d)
if(a==null)return a
if(H.lt(a,b,c,d))return a
throw H.d(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cq(b.substring(2))+H.lr(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aP(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aP(a[t],b,c[t],d))return!1
return!0},
qt:function(a,b,c){return a.apply(b,H.cp(J.X(b)["$a"+H.i(c)],H.bQ(b)))},
mU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="O"||a===-1||a===-2||H.mU(u)}return!1},
lu:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="O"||b===-1||b===-2||H.mU(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fg(a,b)}u=J.X(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aP(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.lu(a,b))throw H.d(H.b0(a,H.kQ(b)))
return a},
aP:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aP(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.mB(a,b,c,d)
if('func' in a)return c.name==="bE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aP("type" in a?a.type:l,b,s,d)
else if(H.aP(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.cp(r,u?a.slice(1):l)
return H.aP(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mK(H.cp(m,u),b,p,d)},
mB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pG(h,b,g,d)},
pG:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aP(c[s],d,a[s],b))return!1}return!0},
qu:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pE:function(a){var u,t,s,r,q=H.I($.mT.$1(a)),p=$.kA[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kF[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mJ.$2(a,q))
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
return r.i}if(s==="+")return H.mY(a,u)
if(s==="*")throw H.d(P.iZ(q))
if(v.leafTags[q]===true){r=H.kP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mY(a,u)},
mY:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kP:function(a){return J.lz(a,!1,null,!!a.$iM)},
pF:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kP(u)
else return J.lz(u,c,null,null)},
pz:function(){if(!0===$.ly)return
$.ly=!0
H.pA()},
pA:function(){var u,t,s,r,q,p,o,n
$.kA=Object.create(null)
$.kF=Object.create(null)
H.py()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n_.$1(q)
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
o=H.ci(C.H,H.ci(C.I,H.ci(C.v,H.ci(C.v,H.ci(C.J,H.ci(C.K,H.ci(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mT=new H.kC(r)
$.mJ=new H.kD(q)
$.n_=new H.kE(p)},
ci:function(a,b){return a(b)||b},
nP:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lB:function(a,b,c){var u=H.pN(a,b,c)
return u},
pN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n0(b),'g'),H.pr(c))},
fC:function fC(){},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hV:function hV(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
kW:function kW(a){this.a=a},
eT:function eT(a){this.a=a
this.b=null},
cv:function cv(){},
iC:function iC(){},
is:function is(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a){this.a=a},
fy:function fy(a){this.a=a},
ic:function ic(a){this.a=a},
jr:function jr(a){this.a=a},
a3:function a3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hi:function hi(a,b){this.a=a
this.$ti=b},
hj:function hj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
hc:function hc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
nY:function(a){return new Int8Array(a)},
bj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ck(b,a))},
oR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pp(a,b,c))
return b},
cK:function cK(){},
bH:function bH(){},
dQ:function dQ(){},
cL:function cL(){},
dR:function dR(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
dS:function dS(){},
cM:function cM(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
ps:function(a){return J.lU(a?Object.keys(a):[],null)},
pH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fi:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ly==null){H.pz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.iZ("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lD()]
if(r!=null)return r
r=H.pE(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lD(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.l_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ag(a,0,4294967295,"length",null))
return J.lU(new Array(a),b)},
lU:function(a,b){return J.l6(H.c(a,[b]))},
l6:function(a){H.kH(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dD.prototype
return J.hb.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.dE.prototype
if(typeof a=="boolean")return J.ha.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fi(a)},
pu:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fi(a)},
cm:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fi(a)},
fh:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fi(a)},
mQ:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
mR:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
dj:function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bL.prototype
return a},
cn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.R)return a
return J.fi(a)},
nn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pu(a).p(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).u(a,b)},
b1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mQ(a).al(a,b)},
lF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mR(a).t(a,b)},
no:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mQ(a).q(a,b)},
dm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cm(a).j(a,b)},
kY:function(a,b,c){return J.fh(a).k(a,b,c)},
np:function(a,b){return J.dj(a).E(a,b)},
nq:function(a,b,c){return J.cn(a).hA(a,b,c)},
nr:function(a,b,c,d){return J.cn(a).i2(a,b,c,d)},
ns:function(a,b){return J.dj(a).X(a,b)},
kZ:function(a,b){return J.mR(a).ik(a,b)},
fk:function(a,b){return J.fh(a).K(a,b)},
nt:function(a,b,c,d){return J.cn(a).iz(a,b,c,d)},
lG:function(a,b){return J.fh(a).I(a,b)},
nu:function(a){return J.cn(a).gie(a)},
lH:function(a){return J.cn(a).gc7(a)},
dn:function(a){return J.X(a).gJ(a)},
bx:function(a){return J.fh(a).gT(a)},
aD:function(a){return J.cm(a).gn(a)},
lI:function(a){return J.fh(a).j4(a)},
nv:function(a,b){return J.cn(a).j8(a,b)},
nw:function(a,b,c){return J.dj(a).A(a,b,c)},
nx:function(a){return J.dj(a).jg(a)},
as:function(a){return J.X(a).i(a)},
a:function a(){},
ha:function ha(){},
dE:function dE(){},
dF:function dF(){},
hZ:function hZ(){},
bL:function bL(){},
bo:function bo(){},
aS:function aS(a){this.$ti=a},
l7:function l7(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bG:function bG(){},
dD:function dD(){},
hb:function hb(){},
bn:function bn(){}},P={
ot:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pk()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cj(new P.jt(s),1)).observe(u,{childList:true})
return new P.js(s,u,t)}else if(self.setImmediate!=null)return P.pl()
return P.pm()},
ou:function(a){self.scheduleImmediate(H.cj(new P.ju(H.n(a,{func:1,ret:-1})),0))},
ov:function(a){self.setImmediate(H.cj(new P.jv(H.n(a,{func:1,ret:-1})),0))},
ow:function(a){P.lf(C.o,H.n(a,{func:1,ret:-1}))},
lf:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a6(a.a,1000)
return P.oC(u<0?0:u,b)},
me:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.e.a6(a.a,1000)
return P.oD(u<0?0:u,b)},
oC:function(a,b){var u=new P.eZ()
u.eW(a,b)
return u},
oD:function(a,b){var u=new P.eZ()
u.eX(a,b)
return u},
ox:function(a,b){var u,t,s
b.a=1
try{a.ek(new P.jF(b),new P.jG(b),null)}catch(s){u=H.ak(s)
t=H.co(s)
P.pJ(new P.jH(b,u,t))}},
mq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaO")
if(u>=4){t=b.bV()
b.a=a.a
b.c=a.c
P.d4(b,t)}else{t=H.h(b.c,"$ibi")
b.a=2
b.c=a
a.dh(t)}},
d4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kr(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
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
P.kr(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jL(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jK(u,b,o).$0()}else if((g&2)!==0)new P.jJ(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.X(g).$icB){if(g.a>=4){k=H.h(q.c,"$ibi")
q.c=null
b=q.bj(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mq(g,q)
return}}j=b.b
k=H.h(j.c,"$ibi")
j.c=null
b=j.bj(k)
g=u.a
r=u.b
if(!g){H.B(r,H.r(j,0))
j.a=4
j.c=r}else{H.h(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
pf:function(a,b){if(H.fg(a,{func:1,args:[P.R,P.au]}))return H.n(a,{func:1,ret:null,args:[P.R,P.au]})
if(H.fg(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.d(P.l_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pe:function(){var u,t
for(;u=$.ch,u!=null;){$.di=null
t=u.b
$.ch=t
if(t==null)$.dh=null
u.a.$0()}},
pi:function(){$.lp=!0
try{P.pe()}finally{$.di=null
$.lp=!1
if($.ch!=null)$.lE().$1(P.mL())}},
mG:function(a){var u=new P.el(H.n(a,{func:1,ret:-1}))
if($.ch==null){$.ch=$.dh=u
if(!$.lp)$.lE().$1(P.mL())}else $.dh=$.dh.b=u},
ph:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ch
if(u==null){P.mG(a)
$.di=$.dh
return}t=new P.el(a)
s=$.di
if(s==null){t.b=u
$.ch=$.di=t}else{t.b=s.b
$.di=s.b=t
if(t.b==null)$.dh=t}},
pJ:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kt(t,t,C.f,a)
return}u.toString
P.kt(t,t,u,H.n(u.c2(a),s))},
md:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lf(a,b)}return P.lf(a,H.n(u.c2(b),t))},
ok:function(a,b){var u,t,s={func:1,ret:-1,args:[P.be]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.me(a,b)}t=u.dB(b,P.be)
$.a1.toString
return P.me(a,H.n(t,s))},
kr:function(a,b,c,d,e){var u={}
u.a=d
P.ph(new P.ks(u,e))},
mC:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mD:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pg:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kt:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c2(d):c.ig(d,-1)
P.mG(d)},
jt:function jt(a){this.a=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
eZ:function eZ(){this.c=0},
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
el:function el(a){this.a=a
this.b=null},
iv:function iv(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
cT:function cT(){},
iw:function iw(){},
be:function be(){},
am:function am(a,b){this.a=a
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
nR:function(a,b){return new H.a3([a,b])},
la:function(a,b){return new H.a3([a,b])},
nT:function(a){return H.pt(a,new H.a3([null,null]))},
dI:function(a){return new P.jQ([a])},
ll:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oB:function(a,b,c){var u=new P.eA(a,b,[c])
u.c=a.e
return u},
nL:function(a,b,c){var u,t
if(P.lq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.av,a)
try{P.oU(a,u)}finally{if(0>=$.av.length)return H.e($.av,-1)
$.av.pop()}t=P.mb(b,H.mV(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l5:function(a,b,c){var u,t
if(P.lq(a))return b+"..."+c
u=new P.ah(b)
C.a.h($.av,a)
try{t=u
t.a=P.mb(t.a,a,", ")}finally{if(0>=$.av.length)return H.e($.av,-1)
$.av.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lq:function(a){var u,t
for(u=$.av.length,t=0;t<u;++t)if(a===$.av[t])return!0
return!1},
oU:function(a,b){var u,t,s,r,q,p,o,n,m,l
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
nS:function(a,b,c){var u=P.nR(b,c)
a.I(0,new P.hk(u,b,c))
return u},
lV:function(a,b){var u,t,s=P.dI(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.B(a[t],b))
return s},
lb:function(a){var u,t={}
if(P.lq(a))return"{...}"
u=new P.ah("")
try{C.a.h($.av,a)
u.a+="{"
t.a=!0
J.lG(a,new P.ho(t,u))
u.a+="}"}finally{if(0>=$.av.length)return H.e($.av,-1)
$.av.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jQ:function jQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ce:function ce(a){this.a=a
this.c=this.b=null},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(){},
x:function x(){},
hn:function hn(){},
ho:function ho(a,b){this.a=a
this.b=b},
ae:function ae(){},
ka:function ka(){},
hp:function hp(){},
ee:function ee(a,b){this.a=a
this.$ti=b},
jX:function jX(){},
eB:function eB(){},
f3:function f3(){},
on:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oo(!1,b,c,d)
return},
oo:function(a,b,c,d){var u,t,s=$.nf()
if(s==null)return
u=0===c
if(u&&!0)return P.li(s,b)
t=b.length
d=P.br(c,d,t)
if(u&&d===t)return P.li(s,b)
return P.li(s,b.subarray(c,d))},
li:function(a,b){if(P.oq(b))return
return P.or(a,b)},
or:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oq:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
op:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
mF:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cm(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
lK:function(a,b,c,d,e,f){if(C.e.bd(f,4)!==0)throw H.d(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fu:function fu(){},
fv:function fv(){},
bW:function bW(){},
bB:function bB(){},
fS:function fS(){},
h7:function h7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h6:function h6(a){this.a=a},
j7:function j7(){},
j9:function j9(){},
kg:function kg(a){this.b=0
this.c=a},
j8:function j8(a){this.a=a},
kf:function kf(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fj:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.f]})
u=H.o8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a7(a,null,null))},
nI:function(a){if(a instanceof H.cv)return a.i(0)
return"Instance of '"+H.c3(a)+"'"},
nU:function(a,b,c){var u,t
H.B(b,c)
u=J.nO(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
lW:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bx(a);u.C();)C.a.h(s,H.B(u.gL(u),c))
if(b)return s
return H.l(J.l6(s),"$ib",t,"$ab")},
cU:function(a,b,c){var u,t=P.m
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaS",[t],"$aaS")
u=a.length
c=P.br(b,c,u)
return H.m6(b>0||c<u?C.a.eA(a,b,c):a)}if(!!J.X(a).$icM)return H.oa(a,b,P.br(b,c,a.length))
return P.oi(a,b,c)},
oi:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.m],"$aj")
if(b<0)throw H.d(P.ag(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.ag(c,b,J.aD(a),q,q))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.C())throw H.d(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.C())throw H.d(P.ag(c,b,s,q,q))
r.push(t.gL(t))}return H.m6(r)},
oc:function(a){return new H.hc(a,H.nP(a,!1,!0,!1))},
mb:function(a,b,c){var u=J.bx(b)
if(!u.C())return a
if(c.length===0){do a+=H.i(u.gL(u))
while(u.C())}else{a+=H.i(u.gL(u))
for(;u.C();)a=a+c+H.i(u.gL(u))}return a},
mh:function(){var u=H.o0()
if(u!=null)return P.om(u)
throw H.d(P.J("'Uri.base' is not supported"))},
f4:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nl().b
if(typeof b!=="string")H.z(H.aw(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.ar(c,"bW",0))
t=c.giy().c8(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c4(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nE:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dx:function(a){if(a>=10)return""+a
return"0"+a},
lQ:function(a,b){return new P.b5(1e6*b+1000*a)},
dB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nI(a)},
fn:function(a){return new P.aQ(!1,null,null,a)},
l_:function(a,b,c){return new P.aQ(!0,a,b,c)},
dY:function(a,b){return new P.c5(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
br:function(a,b,c){if(0>a||a>c)throw H.d(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ag(b,a,c,"end",null))
return b}return c},
lc:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.ag(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.a4(e==null?J.aD(b):e)
return new P.h8(u,!0,a,c,"Index out of range")},
J:function(a){return new P.j0(a)},
iZ:function(a){return new P.iY(a)},
ma:function(a){return new P.c7(a)},
bl:function(a){return new P.fB(a)},
D:function(a){return new P.et(a)},
a7:function(a,b,c){return new P.h1(a,b,c)},
nV:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.c([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lA:function(a){H.pH(a)},
om:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.E(a,4)^58)*3|C.b.E(a,0)^100|C.b.E(a,1)^97|C.b.E(a,2)^116|C.b.E(a,3)^97)>>>0
if(u===0)return P.mg(e<e?C.b.A(a,0,e):a,5,f).ger()
else if(u===32)return P.mg(C.b.A(a,5,e),0,f).ger()}t=new Array(8)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.a9(a,"..",o)))j=n>o+2&&C.b.a9(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a9(a,"file",0)){if(q<=0){if(!C.b.a9(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a9(a,"http",0)){if(t&&p+3===o&&C.b.a9(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a9(a,"https",0)){if(t&&p+4===o&&C.b.a9(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k_(a,r,q,p,o,n,m,k)}return P.oE(a,0,e,r,q,p,o,n,m,k)},
mj:function(a){var u=P.f
return C.a.iD(H.c(a.split("&"),[u]),P.la(u,u),new P.j5(C.h),[P.y,P.f,P.f])},
ol:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j2(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fj(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.al()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fj(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.al()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j3(a)
t=new P.j4(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.X(a,r)
if(n===58){if(r===b){++r
if(C.b.X(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gas(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ol(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aQ(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oE:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oL(a,b,d)
else{if(d===b)P.de(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oM(a,u,e-1):""
s=P.oI(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.oK(P.fj(C.b.A(a,r,g),new P.kb(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oJ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lm(a,h+1,i,n):n
return new P.cf(j,t,s,q,p,o,i<c?P.oH(a,i+1,c):n)},
mu:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
de:function(a,b,c){throw H.d(P.a7(c,a,b))},
oK:function(a,b){if(a!=null&&a===P.mu(b))return
return a},
oI:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.X(a,b)===91){if(typeof c!=="number")return c.q()
u=c-1
if(C.b.X(a,u)!==93)P.de(a,b,"Missing end `]` to match `[` in host")
P.mi(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.E(c)
t=b
for(;t<c;++t)if(C.b.X(a,t)===58){P.mi(a,b,c)
return"["+a+"]"}return P.oO(a,b,c)},
oO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.X(a,u)
if(q===37){p=P.mA(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ah("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ah("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.de(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ah("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mv(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oL:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mx(C.b.E(a,b)))P.de(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.de(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.oF(t?a.toLowerCase():a)},
oF:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oM:function(a,b,c){return P.df(a,b,c,C.V,!1)},
oJ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.df(a,b,c,C.A,!0):C.i.jG(d,new P.kc(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a1(u,"/"))u="/"+u
return P.oN(u,e,f)},
oN:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a1(a,"/"))return P.oP(a,!u||c)
return P.oQ(a)},
lm:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.f,null],"$ay")
if(a!=null){if(d!=null)throw H.d(P.fn("Both query and queryParameters specified"))
return P.df(a,b,c,C.k,!0)}if(d==null)return
u=new P.ah("")
t.a=""
d.I(0,new P.kd(new P.ke(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oH:function(a,b,c){return P.df(a,b,c,C.k,!0)},
mA:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.X(a,b+1)
t=C.b.X(a,p)
s=H.kB(u)
r=H.kB(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aQ(q,4)
if(p>=8)return H.e(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c4(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
mv:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.E(o,a>>>4))
C.a.k(t,2,C.b.E(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.hN(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.E(o,p>>>4))
C.a.k(t,q+2,C.b.E(o,p&15))
q+=3}}return P.cU(t,0,null)},
df:function(a,b,c,d,e){var u=P.mz(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
mz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.R()
if(typeof c!=="number")return H.E(c)
if(!(t<c))break
c$0:{q=C.b.X(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mA(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.j,p)
p=(C.j[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.de(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.X(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mv(q)}}if(r==null)r=new P.ah("")
r.a+=C.b.A(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.E(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.R()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
my:function(a){if(C.b.a1(a,"."))return!0
return C.b.dV(a,"/.")!==-1},
oQ:function(a){var u,t,s,r,q,p,o
if(!P.my(a))return a
u=H.c([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oP:function(a,b){var u,t,s,r,q,p
if(!P.my(a))return!b?P.mw(a):a
u=H.c([],[P.f])
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
if(r>=2&&P.mx(J.np(a,0)))for(u=1;u<r;++u){t=C.b.E(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.a7(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oG:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.fn("Invalid URL encoding"))}}return u},
ln:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.t(C.b.A(a,b,c))}else{r=H.c([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.E(a,q)
if(t>127)throw H.d(P.fn("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.fn("Truncated URI"))
C.a.h(r,P.oG(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.j8(!1).c8(r)},
mx:function(a){var u=a|32
return 97<=u&&u<=122},
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a7(m,a,t))}}if(s<0&&t>b)throw H.d(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gas(l)
if(r!==44||t!==p+7||!C.b.a9(a,"base64",p+1))throw H.d(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iO(0,a,o,u)
else{n=P.mz(a,o,u,C.k,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.j1(a,l,c)},
oS:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nV(22,new P.km(),P.S),n=new P.kl(o),m=new P.kn(),l=new P.ko(),k=H.h(n.$2(0,225),"$iS")
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
mE:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nm()
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
fO:function fO(){},
fP:function fP(){},
bD:function bD(){},
fo:function fo(){},
dU:function dU(){},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f){var _=this
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
j0:function j0(a){this.a=a},
iY:function iY(a){this.a=a},
c7:function c7(a){this.a=a},
fB:function fB(a){this.a=a},
hY:function hY(){},
e4:function e4(){},
fI:function fI(a){this.a=a},
et:function et(a){this.a=a},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
m:function m(){},
j:function j(){},
b6:function b6(){},
b:function b(){},
y:function y(){},
O:function O(){},
aa:function aa(){},
R:function R(){},
au:function au(){},
f:function f(){},
ah:function ah(a){this.a=a},
j5:function j5(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a,b){this.a=a
this.b=b},
cf:function cf(a,b,c,d,e,f,g){var _=this
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
j1:function j1(a,b,c){this.a=a
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
bs:function(a){var u,t,s,r,q
if(a==null)return
u=P.la(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.I(t[r])
u.k(0,q,a[q])}return u},
pn:function(a){var u={}
a.I(0,new P.ku(u))
return u},
k1:function k1(){},
k3:function k3(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h_:function h_(){},
jP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jR:function jR(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hf:function hf(){},
bb:function bb(){},
hW:function hW(){},
i2:function i2(){},
cQ:function cQ(){},
iz:function iz(){},
q:function q(){},
bf:function bf(){},
iM:function iM(){},
ey:function ey(){},
ez:function ez(){},
eJ:function eJ(){},
eK:function eK(){},
eV:function eV(){},
eW:function eW(){},
f1:function f1(){},
f2:function f2(){},
S:function S(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(a){this.a=a},
ft:function ft(){},
bT:function bT(){},
hX:function hX(){},
em:function em(){},
dr:function dr(){},
dX:function dX(){},
c6:function c6(){},
e0:function e0(){},
ec:function ec(){},
ir:function ir(){},
eR:function eR(){},
eS:function eS(){}},W={
lJ:function(){var u=document.createElement("a")
return u},
lN:function(){var u=document.createElement("canvas")
return u},
nG:function(a,b,c){var u=document.body,t=(u&&C.t).ab(u,a,b,c)
t.toString
u=W.G
u=new H.d1(new W.aq(t),H.n(new W.fR(),{func:1,ret:P.T,args:[u]}),[u])
return H.h(u.gaJ(u),"$iU")},
nH:function(a){H.h(a,"$ik")
return"wheel"},
cy:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cn(a)
t=u.geh(a)
if(typeof t==="string")r=u.geh(a)}catch(s){H.ak(s)}return r},
nK:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icE")
try{s.type=a}catch(u){H.ak(u)}return s},
jO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u=W.jO(W.jO(W.jO(W.jO(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mI(new W.jD(c),W.o)
if(u!=null&&!0)J.nr(a,b,u,!1)
return new W.jC(a,b,u,!1,[e])},
mr:function(a){var u=W.lJ(),t=window.location
u=new W.bN(new W.jW(u,t))
u.eO(a)
return u},
oy:function(a,b,c,d){H.h(a,"$iU")
H.I(b)
H.I(c)
H.h(d,"$ibN")
return!0},
oz:function(a,b,c,d){var u,t,s
H.h(a,"$iU")
H.I(b)
H.I(c)
u=H.h(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mt:function(){var u=P.f,t=P.lV(C.p,u),s=H.r(C.p,0),r=H.n(new W.k7(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.k6(t,P.dI(u),P.dI(u),P.dI(u),null)
t.eV(null,new H.hs(C.p,r,[s,u]),q,null)
return t},
mI:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dB(a,b)},
v:function v(){},
fl:function fl(){},
dp:function dp(){},
fm:function fm(){},
cs:function cs(){},
bU:function bU(){},
by:function by(){},
bV:function bV(){},
bz:function bz(){},
cw:function cw(){},
fE:function fE(){},
Y:function Y(){},
cx:function cx(){},
fF:function fF(){},
b3:function b3(){},
b4:function b4(){},
fG:function fG(){},
fH:function fH(){},
fK:function fK(){},
aG:function aG(){},
fL:function fL(){},
dy:function dy(){},
dz:function dz(){},
fM:function fM(){},
fN:function fN(){},
jx:function jx(a,b){this.a=a
this.b=b},
U:function U(){},
fR:function fR(){},
o:function o(){},
k:function k(){},
aH:function aH(){},
cA:function cA(){},
fX:function fX(){},
h0:function h0(){},
aR:function aR(){},
h5:function h5(){},
bZ:function bZ(){},
cD:function cD(){},
cE:function cE(){},
b7:function b7(){},
dJ:function dJ(){},
hG:function hG(){},
cH:function cH(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
aT:function aT(){},
hL:function hL(){},
af:function af(){},
aq:function aq(a){this.a=a},
G:function G(){},
cN:function cN(){},
aU:function aU(){},
i0:function i0(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
id:function id(){},
aV:function aV(){},
ip:function ip(){},
aW:function aW(){},
iq:function iq(){},
aX:function aX(){},
it:function it(){},
iu:function iu(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
e5:function e5(){},
iA:function iA(){},
iB:function iB(){},
cV:function cV(){},
aY:function aY(){},
aL:function aL(){},
iD:function iD(){},
iE:function iE(){},
iG:function iG(){},
aZ:function aZ(){},
b_:function b_(){},
iK:function iK(){},
iL:function iL(){},
bK:function bK(){},
j6:function j6(){},
jo:function jo(){},
bh:function bh(){},
d2:function d2(){},
d3:function d3(){},
jy:function jy(){},
eo:function eo(){},
jN:function jN(){},
eG:function eG(){},
k0:function k0(){},
k4:function k4(){},
jw:function jw(){},
jA:function jA(a){this.a=a},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lk:function lk(a,b,c,d){var _=this
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
bN:function bN(a){this.a=a},
H:function H(){},
dT:function dT(a){this.a=a},
hT:function hT(a){this.a=a},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(){},
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
dC:function dC(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
jW:function jW(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
kh:function kh(a){this.a=a},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
da:function da(){},
db:function db(){},
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
dc:function dc(){},
dd:function dd(){},
f_:function f_(){},
f0:function f0(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){}},O={
l1:function(a){var u=new O.a6([a])
u.bA(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cG:function cG(){this.b=this.a=null},
dM:function dM(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(){},
hu:function hu(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dN:function dN(){},
hv:function hv(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(){var _=this
_.e=_.d=_.c=_.b=null},
hy:function hy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hz:function hz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c8:function c8(){}},E={
lT:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seN(0,O.l1(E.ao))
u.y.be(u.giP(),u.giS())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sah(0,null)
u.sb9(null)
return u},
od:function(a,b){var u=new E.i6(a)
u.eI(a,b)
return u},
oj:function(a,b,c,d,e){var u,t,s=J.X(a)
if(!!s.$ibV)return E.mc(a,!0,!0,!0,!1)
u=W.lN()
t=u.style
t.width="100%"
t.height="100%"
s.gc7(a).h(0,u)
return E.mc(u,!0,!0,!0,!1)},
mc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e8(),j=H.h(C.n.ew(a,"webgl2",P.nT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic6")
if(j==null)H.z(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.od(j,a)
H.a4(j.getParameter(3379))
H.a4(j.getParameter(34076))
u=new X.ef(a)
t=new X.he()
t.c=new X.aA(!1,!1,!1)
t.shu(P.dI(P.m))
u.b=t
t=new X.hM(u)
t.f=0
t.r=V.bJ()
t.x=V.bJ()
t.ch=t.Q=1
u.c=t
t=new X.hm(u)
t.r=0
t.x=V.bJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iJ(u)
t.f=V.bJ()
t.r=V.bJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfg(H.c([],[[P.cT,P.R]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.gfR(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.gfX(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gfJ(),o),!1,p))
t=u.z
n=W.b7
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.gh0(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.gfZ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.gh4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.gh8(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.gh6(),q),!1,r))
n=u.z
m=W.bh;(n&&C.a).h(n,W.ac(a,H.I(W.nH(a)),H.n(u.gha(),{func:1,ret:-1,args:[m]}),!1,m))
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
k.dj()
return k},
fw:function fw(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
iF:function iF(a){this.a=a}},Z={
lj:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cg(c)),35044)
a.bindBuffer(b,null)
return new Z.ek(b,u)},
aN:function(a){return new Z.bM(a)},
ek:function ek(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jp:function jp(a){this.a=a},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a){this.a=a}},D={
V:function(){var u=new D.bX()
u.sai(null)
u.saO(null)
u.c=null
u.d=0
return u},
fz:function fz(){},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
C:function C(){this.b=null},
c_:function c_(a){this.b=null
this.$ti=a},
c0:function c0(a){this.b=null
this.$ti=a},
N:function N(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
l3:function(a,b){var u,t,s=new D.bC()
s.c=new V.a2(1,1,1)
s.a=V.mp()
s.d=V.mo()
s.e=V.os()
u=s.b
s.b=b
b.gB().h(0,s.geQ())
t=new D.N("mover",u,s.b,[U.ab])
t.b=!0
s.av(t)
if(!s.c.u(0,a)){u=s.c
s.c=a
t=new D.N("color",u,a,[V.a2])
t.b=!0
s.av(t)}return s},
bC:function bC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ad:function ad(){},
dH:function dH(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dW:function dW(){},
e3:function e3(){}},X={du:function du(a,b){this.a=a
this.b=b},dG:function dG(a,b){this.a=a
this.b=b},he:function he(){var _=this
_.d=_.c=_.b=_.a=null},dK:function dK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hm:function hm(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bq:function bq(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hM:function hM(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cI:function cI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i1:function i1(){},ea:function ea(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iJ:function iJ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ef:function ef(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nJ:function(a){var u=new X.h2(),t=new V.aE(0,0,0,1)
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
dv:function dv(){},
h2:function h2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){}},V={
kX:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bd(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.c.el(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
cl:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ad(u[p],s))}return u},
dP:function(){var u=$.m0
return u==null?$.m0=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ap(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m_:function(a,b,c,d){return V.ba(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lX:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lY:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ba(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bJ:function(){var u=$.m4
return u==null?$.m4=new V.a9(0,0):u},
nZ:function(){var u=$.cO
return u==null?$.cO=new V.a5(0,0,0):u},
m7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dZ(a,b,c,d)},
d0:function(){var u=$.mn
return u==null?$.mn=new V.K(0,0,0):u},
os:function(){var u=$.ja
return u==null?$.ja=new V.K(-1,0,0):u},
mo:function(){var u=$.jb
return u==null?$.jb=new V.K(0,1,0):u},
mp:function(){var u=$.jc
return u==null?$.jc=new V.K(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a){this.a=a},
dO:function dO(a,b,c,d,e,f,g,h,i){var _=this
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
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.E(a,0)
t=C.b.E(b,0)
s=new V.i5()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ie()
u.eJ(a)
return u},
iI:function(){var u=new V.iH(),t=P.f
u.shQ(new H.a3([t,V.cS]))
u.shS(new H.a3([t,V.cW]))
u.c=null
return u},
bk:function bk(){},
az:function az(){},
dL:function dL(){},
at:function at(){this.a=null},
i5:function i5(){this.b=this.a=null},
ie:function ie(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a){this.b=a
this.c=null},
iH:function iH(){this.c=this.b=this.a=null},
cX:function cX(a){this.b=a
this.a=this.c=null},
pK:function(a){P.ok(C.P,new V.kR(a))},
of:function(a){var u=new V.ij()
u.eL(a,!0)
return u},
bA:function bA(){},
kR:function kR(a){this.a=a},
fJ:function fJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h3:function h3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h4:function h4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i_:function i_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i3:function i3(a){this.a=a
this.c=null},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(){this.b=this.a=null},
il:function il(a){this.a=a},
ik:function ik(a){this.a=a},
im:function im(a){this.a=a}},U={
l2:function(){var u=new U.fA()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lP:function(a){var u=new U.dw()
u.a=a
return u},
ld:function(a,b,c){var u,t=new U.e_()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.seu(0)
t.se8(0,0)
t.sef(0)
u=t.d
if(!(Math.abs(u-c)<$.L().a)){t.d=c
u=new D.N("deltaYaw",u,c,[P.p])
u.b=!0
t.H(u)}u=t.e
if(!(Math.abs(u-a)<$.L().a)){t.e=a
u=new D.N("deltaPitch",u,a,[P.p])
u.b=!0
t.H(u)}u=t.f
if(!(Math.abs(u-b)<$.L().a)){t.f=b
u=new D.N("deltaRoll",u,b,[P.p])
u.b=!0
t.H(u)}return t},
fA:function fA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){this.b=this.a=null},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e_:function e_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.of("Test 020"),a1=W.lN()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
u=[P.f]
a0.dw(H.c(["Test of the Matrial Lighting shader with multiple moving directional lights."],u))
a0.i1(H.c(["shapes"],u))
a0.dw(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(c)
if(t==null)H.z(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.oj(t,!0,!0,!0,!1)
r=U.ld(0,0,0.3)
q=D.l3(new V.a2(1,0,0),r)
r=U.ld(0.4,0,0)
p=D.l3(new V.a2(0,1,0),r)
r=U.ld(0.5,0,0.5)
o=D.l3(new V.a2(0,0,1),r)
n=new O.dM()
n.sf4(O.l1(V.ap))
n.e.be(n.gfF(),n.gfH())
r=new O.b9(n,"emission")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
n.f=r
r=new O.b9(n,"ambient")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
n.r=r
r=new O.b9(n,"diffuse")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
n.x=r
r=new O.b9(n,"invDiffuse")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
n.y=r
r=new O.hz(n,"specular")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
r.ch=100
n.z=r
r=new O.hv(n,"bump")
r.c=new A.an(!1,!1,!1)
n.Q=r
n.ch=null
r=new O.b9(n,"reflect")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
n.cx=r
r=new O.hy(n,"refract")
r.c=new A.an(!1,!1,!1)
r.f=new V.a2(0,0,0)
r.ch=1
n.cy=r
r=new O.hu(n,"alpha")
r.c=new A.an(!1,!1,!1)
r.f=1
n.db=r
r=new D.dH()
r.bA(D.ad)
r.sfe(H.c([],[D.bC]))
r.shr(H.c([],[D.dW]))
r.shP(H.c([],[D.e3]))
r.y=r.x=null
r.cJ(r.gfD(),r.ghf(),r.ghj())
n.dx=r
m=new O.hx()
m.b=new V.aE(0,0,0,0)
m.c=1
m.d=10
m.e=!1
n.dy=m
m=r.x
r=m==null?r.x=D.V():m
r.h(0,n.ghC())
r=n.dx
m=r.y
r=m==null?r.y=D.V():m
r.h(0,n.gfL())
n.fr=null
n.dx.h(0,q)
n.dx.h(0,p)
n.dx.h(0,o)
n.f.saT(0,new V.a2(0,0,0))
r=n.r
r.saT(0,new V.a2(0.1,0.1,0.1))
r=n.x
r.saT(0,new V.a2(0.7,0.7,0.7))
r=n.z
r.saT(0,new V.a2(0.3,0.3,0.3))
r=n.z
r.dl(new A.an(!0,!1,!1))
r.dm(100)
l=E.lT()
l.sah(0,F.n2())
k=E.lT()
k.sb9(U.lP(V.m_(3,3,3,1)))
r=F.lw(1,b,b,1)
r.ck()
k.sah(0,r)
j=new U.cC()
j.bA(U.ab)
j.be(j.gfB(),j.ghh())
j.e=null
j.f=V.dP()
j.r=0
r=s.r
m=new U.eh()
i=U.l2()
i.scH(0,!0)
i.scq(6.283185307179586)
i.scs(0)
i.sZ(0,0)
i.scr(100)
i.sU(0)
i.sca(0.5)
m.b=i
h=m.gaL()
i.gB().h(0,h)
i=U.l2()
i.scH(0,!0)
i.scq(6.283185307179586)
i.scs(0)
i.sZ(0,0)
i.scr(100)
i.sU(0)
i.sca(0.5)
m.c=i
i.gB().h(0,h)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
g=new X.aA(!1,!1,!1)
f=m.d
m.d=g
i=[X.aA]
h=new D.N(a,f,g,i)
h.b=!0
m.H(h)
h=m.f
if(h!==!1){m.f=!1
h=new D.N("invertX",h,!1,[P.T])
h.b=!0
m.H(h)}h=m.r
if(h!==!1){m.r=!1
h=new D.N("invertY",h,!1,[P.T])
h.b=!0
m.H(h)}m.b2(r)
j.h(0,m)
r=s.r
m=new U.eg()
h=U.l2()
h.scH(0,!0)
h.scq(6.283185307179586)
h.scs(0)
h.sZ(0,0)
h.scr(100)
h.sU(0)
h.sca(0.2)
m.b=h
h.gB().h(0,m.gaL())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
g=new X.aA(!0,!1,!1)
f=m.c
m.c=g
h=new D.N(a,f,g,i)
h.b=!0
m.H(h)
m.b2(r)
j.h(0,m)
r=s.r
m=new U.ei()
m.c=0.01
m.e=m.d=0
g=new X.aA(!1,!1,!1)
m.b=g
i=new D.N(a,b,g,i)
i.b=!0
m.H(i)
m.b2(r)
j.h(0,m)
j.h(0,U.lP(V.ba(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
r=new M.dA()
r.a=!0
r.sf7(0,O.l1(E.ao))
r.e.be(r.gfN(),r.gfP())
r.y=r.x=r.r=r.f=null
e=X.nJ(b)
d=new X.dV()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sb9(b)
m=d.c
if(!(Math.abs(m-1.0471975511965976)<$.L().a)){d.c=1.0471975511965976
m=new D.N("fov",m,1.0471975511965976,[P.p])
m.b=!0
d.aM(m)}m=d.d
if(!(Math.abs(m-0.1)<$.L().a)){d.d=0.1
m=new D.N("near",m,0.1,[P.p])
m.b=!0
d.aM(m)}m=d.e
if(!(Math.abs(m-2000)<$.L().a)){d.e=2000
m=new D.N("far",m,2000,[P.p])
m.b=!0
d.aM(m)}m=r.b
if(m!==d){if(m!=null)m.gB().N(0,r.gan())
f=r.b
r.b=d
d.gB().h(0,r.gan())
m=new D.N("camera",f,r.b,[X.dv])
m.b=!0
r.aw(m)}m=r.c
if(m!==e){if(m!=null)m.gB().N(0,r.gan())
f=r.c
r.c=e
e.gB().h(0,r.gan())
m=new D.N("target",f,r.c,[X.e6])
m.b=!0
r.aw(m)}r.sei(b)
r.sei(n)
r.e.h(0,l)
r.e.h(0,k)
r.b.sb9(j)
m=s.d
if(m!==r){if(m!=null)m.gB().N(0,s.gcO())
s.d=r
r.gB().h(0,s.gcO())
s.cP()}r=new V.i3("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
r.b1(0,"Cube",new U.kI(l))
r.b1(0,"Cylinder",new U.kJ(l))
r.b1(0,"Cone",new U.kK(l))
r.b1(0,"Sphere",new U.kL(l))
r.du(0,"Toroid",new U.kM(l),!0)
r.b1(0,"Knot",new U.kN(l))
u=s.z
if(u==null)u=s.z=D.V()
r={func:1,ret:-1,args:[D.C]}
m=H.n(new U.kO(a0,n),r)
if(u.b==null)u.saO(H.c([],[r]))
u=u.b;(u&&C.a).h(u,m)
V.pK(s)},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b}},M={dA:function dA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nW:function(a,b){var u=a.b6,t=new A.ht(b,u)
t.eK(b,u)
t.eH(a,b)
return t},
nX:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aF],"$ab")
H.l(b0,"$ib",[A.aI],"$ab")
H.l(b1,"$ib",[A.aJ],"$ab")
u="MaterialLight_"+a0.gak(a0)+a1.gak(a1)+a2.gak(a2)+a3.gak(a3)+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+"_"
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
f=$.bw()
if(j){t=$.bv()
f=new Z.bM(f.a|t.a)}if(i){t=$.bu()
f=new Z.bM(f.a|t.a)}if(h){t=$.bt()
f=new Z.bM(f.a|t.a)}return new A.hw(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
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
oY:function(a,b){var u,t=a.a,s=t.a
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
oV:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kq(b,t,"ambient")
b.a+="\n"},
oW:function(a,b){var u,t=a.c
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
oZ:function(a,b){var u,t=a.d
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
p4:function(a,b){var u,t=a.e
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
p0:function(a,b){var u,t,s
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
p2:function(a,b){var u,t=a.r,s=t.a
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
p3:function(a,b){var u,t=a.x,s=t.a
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
oX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
p1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
p5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
p_:function(a,b){var u,t
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
p6:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ah("")
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
A.oY(a,j)
A.oV(a,j)
A.oW(a,j)
A.oZ(a,j)
A.p4(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p2(a,j)
A.p3(a,j)}A.p0(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oX(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p1(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p5(a,q[o],j)
A.p_(a,j)}q=j.a+="// === Main ===\n"
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
p7:function(a,b){var u,t,s
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
p9:function(a,b){var u
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
p8:function(a,b){var u
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
pb:function(a,b){var u,t
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
pc:function(a,b){var u,t
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
pa:function(a,b){var u
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
pd:function(a,b){var u
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
lg:function(a,b,c,d,e){var u=new A.iR(a,c,e)
u.f=d
u.si_(P.nU(d,0,P.m))
return u},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b){var _=this
_.js=_.jr=_.dG=_.dF=_.b6=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jF=_.jE=_.jD=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.jC=_.jB=_.dN=_.jA=_.jz=_.dM=_.dL=_.jy=_.jx=_.dK=_.dJ=_.jw=_.jv=_.dI=_.ju=_.jt=_.dH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aF:function aF(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.dF=b4},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
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
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
iW:function iW(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
cY:function cY(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
cZ:function cZ(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lw:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
u=F.le()
F.dg(u,b,c,d,a,1,0,0,1)
F.dg(u,b,c,d,a,0,1,0,3)
F.dg(u,b,c,d,a,0,0,1,2)
F.dg(u,b,c,d,a,-1,0,0,0)
F.dg(u,b,c,d,a,0,-1,0,0)
F.dg(u,b,c,d,a,0,0,-1,3)
u.ar()
return u},
kk:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
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
e.d=u}h=F.kk(u)
g=F.kk(e.b)
f=F.lC(d,a0,new F.kj(e,F.kk(e.c),F.kk(e.d),g,h,c),b)
if(f!=null)a.b8(f)},
mO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.le()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aj])
q=u.a
p=new V.K(0,0,t)
p=p.v(0,Math.sqrt(p.D(p)))
C.a.h(r,q.i5(new V.bc(a,-1,-1,-1),new V.aE(1,1,1,1),new V.a5(0,0,c),new V.K(0,0,t),new V.a9(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.K(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ej(new V.bc(a,-1,-1,-1),null,new V.aE(i,g,h,1),new V.a5(m*k,l*k,c),new V.K(0,0,t),new V.a9(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.i3(r)
return u},
mM:function(a,b,c){return F.po(!0,a,1,new F.kv(1,c),b)},
po:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.lC(c,e,new F.kx(d),null)
if(u==null)return
u.ar()
u.c1()
if(b)u.b8(F.mO(3,!1,1,new F.ky(d),e))
u.b8(F.mO(1,!0,-1,new F.kz(d),e))
return u},
pL:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kS()
t=F.lw(a,null,new F.kT(s,1),b)
t.c1()
return t},
n2:function(){return F.mN(15,30,0.5,1,new F.kV())},
pD:function(){return F.mN(12,120,0.3,1,new F.kG(3,2))},
mN:function(a,b,c,d,e){var u=F.lC(a,b,new F.kw(H.n(e,{func:1,ret:V.a5,args:[P.p]}),d,b,c),null)
if(u==null)return
u.ar()
u.c1()
return u},
lC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aj,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.le()
t=H.c([],[F.aj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ej(g,g,new V.aE(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c9(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ej(g,g,new V.aE(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c9(d))}}u.d.i4(a+1,b+1,t)
return u},
cz:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.D("May not create a face with vertices attached to different shapes."))
u.c_(a)
u.c0(b)
u.hI(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nQ:function(a,b){var u=new F.bp(),t=a.a
if(t==null)H.z(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.D("May not create a line with vertices attached to different shapes."))
u.c_(a)
u.c0(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
le:function(){var u=new F.e1(),t=new F.jd(u)
t.b=!1
t.si0(H.c([],[F.aj]))
u.a=t
t=new F.ii(u)
t.sbT(H.c([],[F.bI]))
u.b=t
t=new F.ih(u)
t.sfn(H.c([],[F.bp]))
u.c=t
t=new F.ig(u)
t.sfh(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
ej:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aj(),r=new F.jl()
r.sbT(H.c([],[F.bI]))
s.b=r
r=new F.jh()
u=[F.bp]
r.sfo(H.c([],u))
r.sfp(H.c([],u))
s.c=r
r=new F.je()
u=[F.a8]
r.sfi(H.c([],u))
r.sfj(H.c([],u))
r.sfk(H.c([],u))
s.d=r
h=$.ng()
s.e=0
r=$.bw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bv().a)!==0?e:t
s.x=(u&$.bu().a)!==0?b:t
s.y=(u&$.bR().a)!==0?f:t
s.z=(u&$.bS().a)!==0?g:t
s.Q=(u&$.nh().a)!==0?c:t
s.ch=(u&$.cr().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
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
fW:function fW(){},
io:function io(){},
bp:function bp(){this.b=this.a=null},
hg:function hg(){},
iQ:function iQ(){},
bI:function bI(){this.a=null},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
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
hU:function hU(){},
jl:function jl(){this.b=null}},T={e7:function e7(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l8.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gJ:function(a){return H.cP(a)},
i:function(a){return"Instance of '"+H.c3(a)+"'"}}
J.ha.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iT:1}
J.dE.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dF.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hZ.prototype={}
J.bL.prototype={}
J.bo.prototype={
i:function(a){var u=a[$.n4()]
if(u==null)return this.eD(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aS.prototype={
h:function(a,b){H.B(b,H.r(a,0))
if(!!a.fixed$length)H.z(P.J("add"))
a.push(b)},
ec:function(a,b){if(!!a.fixed$length)H.z(P.J("removeAt"))
if(b<0||b>=a.length)throw H.d(P.dY(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.z(P.J("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bl(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iK:function(a){return this.m(a,"")},
iD:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bl(a))}return t},
iC:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bl(a))}throw H.d(H.h9())},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eA:function(a,b,c){if(b<0||b>a.length)throw H.d(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ag(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
giB:function(a){if(a.length>0)return a[0]
throw H.d(H.h9())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.h9())},
bf:function(a,b,c,d){var u,t,s=H.r(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.z(P.J("setRange"))
P.br(b,c,a.length)
u=c-b
if(u===0)return
P.lc(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cm(d)
if(u>s.gn(d))throw H.d(H.nM())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dz:function(a,b){var u,t
H.n(b,{func:1,ret:P.T,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bl(a))}return!1},
by:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.z(P.J("sort"))
H.e2(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.l5(a,"[","]")},
gT:function(a){return new J.ax(a,a.length,[H.r(a,0)])},
gJ:function(a){return H.cP(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.J("set length"))
if(b<0)throw H.d(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.ck(a,b))
return a[b]},
k:function(a,b,c){H.B(c,H.r(a,0))
if(!!a.immutable$list)H.z(P.J("indexed set"))
if(b>=a.length||b<0)throw H.d(H.ck(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.r(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.c([],t)
this.sn(t,u)
this.bf(t,0,a.length,a)
this.bf(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.l7.prototype={}
J.ax.prototype={
gL:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.u(s))
u=t.c
if(u>=r){t.sd4(null)
return!1}t.sd4(s[u]);++t.c
return!0},
sd4:function(a){this.d=H.B(a,H.r(this,0))},
$ib6:1}
J.bG.prototype={
ik:function(a,b){var u
H.mX(b)
if(typeof b!=="number")throw H.d(H.aw(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbo(b)
if(this.gbo(a)===u)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
dP:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.J(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.J(""+a+".round()"))},
el:function(a,b){var u
if(b>20)throw H.d(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+u
return u},
bc:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.d(H.aw(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.d(H.aw(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.d(H.aw(b))
return a*b},
bd:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dq(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dq(a,b)},
dq:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.J("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.dn(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hN:function(a,b){if(b<0)throw H.d(H.aw(b))
return this.dn(a,b)},
dn:function(a,b){return b>31?0:a>>>b},
al:function(a,b){if(typeof b!=="number")throw H.d(H.aw(b))
return a>b},
$ip:1,
$iaa:1}
J.dD.prototype={$im:1}
J.hb.prototype={}
J.bn.prototype={
X:function(a,b){if(b<0)throw H.d(H.ck(a,b))
if(b>=a.length)H.z(H.ck(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.d(H.ck(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.d(P.l_(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.br(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.a9(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.aw(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.dY(b,null))
if(b>c)throw H.d(P.dY(b,null))
if(c>a.length)throw H.d(P.dY(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.A(a,b,null)},
jg:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
dW:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dV:function(a,b){return this.dW(a,b,0)},
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
j:function(a,b){return C.b.X(this.a,b)},
$ad_:function(){return[P.m]},
$ax:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.fQ.prototype={}
H.c1.prototype={
gT:function(a){var u=this
return new H.cF(u,u.gn(u),[H.ar(u,"c1",0)])},
bv:function(a,b){return this.eC(0,H.n(b,{func:1,ret:P.T,args:[H.ar(this,"c1",0)]}))}}
H.cF.prototype={
gL:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.cm(s),q=r.gn(s)
if(t.b!==q)throw H.d(P.bl(s))
u=t.c
if(u>=q){t.saY(null)
return!1}t.saY(r.K(s,u));++t.c
return!0},
saY:function(a){this.d=H.B(a,H.r(this,0))},
$ib6:1}
H.hq.prototype={
gT:function(a){return new H.hr(J.bx(this.a),this.b,this.$ti)},
gn:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fk(this.a,b))},
$aj:function(a,b){return[b]}}
H.hr.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.saY(u.c.$1(t.gL(t)))
return!0}u.saY(null)
return!1},
gL:function(a){return this.a},
saY:function(a){this.a=H.B(a,H.r(this,1))},
$ab6:function(a,b){return[b]}}
H.hs.prototype={
gn:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fk(this.a,b))},
$ac1:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d1.prototype={
gT:function(a){return new H.jq(J.bx(this.a),this.b,this.$ti)}}
H.jq.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.F(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bY.prototype={}
H.d_.prototype={
k:function(a,b,c){H.B(c,H.ar(this,"d_",0))
throw H.d(P.J("Cannot modify an unmodifiable list"))}}
H.ed.prototype={}
H.fC.prototype={
i:function(a){return P.lb(this)},
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
return H.nD()},
$iy:1}
H.fD.prototype={
gn:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.d6(b)},
d6:function(a){return this.b[H.I(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.B(q.d6(r),p))}}}
H.iN.prototype={
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
H.hV.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hd.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j_.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kW.prototype={
$1:function(a){if(!!J.X(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eT.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.cv.prototype={
i:function(a){return"Closure '"+H.c3(this).trim()+"'"},
$ibE:1,
gjl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iC.prototype={}
H.is.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cq(u)+"'"}}
H.ct.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ct))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cP(this.a)
else u=typeof t!=="object"?J.dn(t):H.cP(t)
return(u^H.cP(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.c3(u)+"'")}}
H.iP.prototype={
i:function(a){return this.a}}
H.fy.prototype={
i:function(a){return this.a}}
H.ic.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jr.prototype={
i:function(a){return"Assertion failed: "+P.dB(this.a)}}
H.a3.prototype={
gn:function(a){return this.a},
giJ:function(a){return this.a===0},
ga2:function(a){return new H.hi(this,[H.r(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d1(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d1(t,b)}else return s.iG(b)},
iG:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cn(u.bH(t,u.cm(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.iH(b)},
iH:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bH(r,s.cm(a))
t=s.cn(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.B(b,H.r(s,0))
H.B(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.cT(u==null?s.b=s.bR():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cT(t==null?s.c=s.bR():t,b,c)}else s.iI(b,c)},
iI:function(a,b){var u,t,s,r,q=this
H.B(a,H.r(q,0))
H.B(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bR()
t=q.cm(a)
s=q.bH(u,t)
if(s==null)q.bY(u,t,[q.bS(a,b)])
else{r=q.cn(s,a)
if(r>=0)s[r].b=b
else s.push(q.bS(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bl(s))
u=u.c}},
cT:function(a,b,c){var u,t=this
H.B(b,H.r(t,0))
H.B(c,H.r(t,1))
u=t.bh(a,b)
if(u==null)t.bY(a,b,t.bS(b,c))
else u.b=c},
fw:function(){this.r=this.r+1&67108863},
bS:function(a,b){var u,t=this,s=new H.hh(H.B(a,H.r(t,0)),H.B(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fw()
return s},
cm:function(a){return J.dn(a)&0x3ffffff},
cn:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.lb(this)},
bh:function(a,b){return a[b]},
bH:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
d1:function(a,b){return this.bh(a,b)!=null},
bR:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bY(t,u,t)
this.fc(t,u)
return t}}
H.hh.prototype={}
H.hi.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hj(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hj.prototype={
gL:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.scS(null)
return!1}else{u.scS(t.a)
u.c=u.c.c
return!0}}},
scS:function(a){this.d=H.B(a,H.r(this,0))},
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
H.hc.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im2:1,
$iob:1}
H.cK.prototype={$icK:1}
H.bH.prototype={$ibH:1}
H.dQ.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cL.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pq(c)
H.bj(b,a,a.length)
a[b]=c},
$abY:function(){return[P.p]},
$ax:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.dR.prototype={
k:function(a,b,c){H.a4(c)
H.bj(b,a,a.length)
a[b]=c},
$abY:function(){return[P.m]},
$ax:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hN.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.dS.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]}}
H.cM.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bj(b,a,a.length)
return a[b]},
$icM:1,
$iS:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
P.jt.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
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
P.eZ.prototype={
eW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cj(new P.k9(this,b),0),a)
else throw H.d(P.J("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cj(new P.k8(this,a,Date.now(),b),0),a)
else throw H.d(P.J("Periodic timer."))},
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
iM:function(a){if(this.c!==6)return!0
return this.b.b.cD(H.n(this.d,{func:1,ret:P.T,args:[P.R]}),a.a,P.T,P.R)},
iF:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fg(u,{func:1,args:[P.R,P.au]}))return H.lx(r.ja(u,a.a,a.b,null,t,P.au),s)
else return H.lx(r.cD(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aO.prototype={
ek:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pf(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aO($.a1,[c])
s=b==null?1:3
this.cU(new P.bi(t,s,a,b,[r,c]))
return t},
jd:function(a,b){return this.ek(a,null,b)},
cU:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaO")
s=u.a
if(s<4){u.cU(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kt(null,null,s,H.n(new P.jE(t,a),{func:1,ret:-1}))}},
dh:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaO")
u=q.a
if(u<4){q.dh(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
u=p.b
u.toString
P.kt(null,null,u,H.n(new P.jI(o,p),{func:1,ret:-1}))}},
bV:function(){var u=H.h(this.c,"$ibi")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cY:function(a){var u,t,s=this,r=H.r(s,0)
H.lx(a,{futureOr:1,type:r})
u=s.$ti
if(H.lt(a,"$icB",u,"$acB"))if(H.lt(a,"$iaO",u,null))P.mq(a,s)
else P.ox(a,s)
else{t=s.bV()
H.B(a,r)
s.a=4
s.c=a
P.d4(s,t)}},
cZ:function(a,b){var u,t=this
H.h(b,"$iau")
u=t.bV()
t.a=8
t.c=new P.am(a,b)
P.d4(t,u)},
$icB:1}
P.jE.prototype={
$0:function(){P.d4(this.a,this.b)},
$S:0}
P.jI.prototype={
$0:function(){P.d4(this.b,this.a.a)},
$S:0}
P.jF.prototype={
$1:function(a){var u=this.a
u.a=0
u.cY(a)},
$S:17}
P.jG.prototype={
$2:function(a,b){H.h(b,"$iau")
this.a.cZ(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jH.prototype={
$0:function(){this.a.cZ(this.b,this.c)},
$S:0}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eg(H.n(s.d,{func:1}),null)}catch(r){u=H.ak(r)
t=H.co(r)
if(o.d){s=H.h(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.X(n).$icB){if(n instanceof P.aO&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jd(new P.jM(p),null)
s.a=!1}},
$S:3}
P.jM.prototype={
$1:function(a){return this.a},
$S:46}
P.jK.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.B(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cD(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.co(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$iam")
r=m.c
if(H.F(r.iM(u))&&r.e!=null){q=m.b
q.b=r.iF(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.co(p)
r=H.h(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.el.prototype={}
P.iv.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aO($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.ix(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iy(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.ix.prototype={
$1:function(a){H.B(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.r(this.b,0)]}}}
P.iy.prototype={
$0:function(){this.b.cY(this.a.a)},
$S:0}
P.cT.prototype={}
P.iw.prototype={}
P.be.prototype={}
P.am.prototype={
i:function(a){return H.i(this.a)},
$ibD:1}
P.ki.prototype={$iqn:1}
P.ks.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dU():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jS.prototype={
jb:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mC(r,r,this,a,-1)}catch(s){u=H.ak(s)
t=H.co(s)
P.kr(r,r,this,u,H.h(t,"$iau"))}},
jc:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mD(r,r,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.co(s)
P.kr(r,r,this,u,H.h(t,"$iau"))}},
ig:function(a,b){return new P.jU(this,H.n(a,{func:1,ret:b}),b)},
c2:function(a){return new P.jT(this,H.n(a,{func:1,ret:-1}))},
dB:function(a,b){return new P.jV(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eg:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mC(null,null,this,a,b)},
cD:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.a1===C.f)return a.$1(b)
return P.mD(null,null,this,a,b,c,d)},
ja:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pg(null,null,this,a,b,c,d,e,f)}}
P.jU.prototype={
$0:function(){return this.a.eg(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jT.prototype={
$0:function(){return this.a.jb(this.b)},
$S:3}
P.jV.prototype={
$1:function(a){var u=this.c
return this.a.jc(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jQ.prototype={
gT:function(a){var u=this,t=new P.eA(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$ice")!=null}else{t=this.f8(b)
return t}},
f8:function(a){var u=this.d
if(u==null)return!1
return this.bF(this.d7(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.B(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cV(u==null?s.b=P.ll():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cV(t==null?s.c=P.ll():t,b)}else return s.eZ(0,b)},
eZ:function(a,b){var u,t,s,r=this
H.B(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.ll()
t=r.d_(b)
s=u[t]
if(s==null)u[t]=[r.bC(b)]
else{if(r.bF(s,b)>=0)return!1
s.push(r.bC(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hx(this.c,b)
else return this.hw(0,b)},
hw:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d7(r,b)
t=s.bF(u,b)
if(t<0)return!1
s.dr(u.splice(t,1)[0])
return!0},
cV:function(a,b){H.B(b,H.r(this,0))
if(H.h(a[b],"$ice")!=null)return!1
a[b]=this.bC(b)
return!0},
hx:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$ice")
if(u==null)return!1
this.dr(u)
delete a[b]
return!0},
cX:function(){this.r=1073741823&this.r+1},
bC:function(a){var u,t=this,s=new P.ce(H.B(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cX()
return s},
dr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cX()},
d_:function(a){return J.dn(a)&1073741823},
d7:function(a,b){return a[this.d_(b)]},
bF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.ce.prototype={}
P.eA.prototype={
gL:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bl(t))
else{t=u.c
if(t==null){u.scW(null)
return!1}else{u.scW(H.B(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
scW:function(a){this.d=H.B(a,H.r(this,0))},
$ib6:1}
P.hk.prototype={
$2:function(a,b){this.a.k(0,H.B(a,this.b),H.B(b,this.c))},
$S:5}
P.hl.prototype={$ij:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cF(a,this.gn(a),[H.bP(this,a,"x",0)])},
K:function(a,b){return this.j(a,b)},
jf:function(a,b){var u,t=this,s=H.c([],[H.bP(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
je:function(a){return this.jf(a,!0)},
p:function(a,b){var u,t=this,s=[H.bP(t,a,"x",0)]
H.l(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bf(u,0,t.gn(a),a)
C.a.bf(u,t.gn(a),u.length,b)
return u},
iz:function(a,b,c,d){var u
H.B(d,H.bP(this,a,"x",0))
P.br(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l5(a,"[","]")}}
P.hn.prototype={}
P.ho.prototype={
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
H.n(b,{func:1,ret:-1,args:[H.bP(s,a,"ae",0),H.bP(s,a,"ae",1)]})
for(u=J.bx(s.ga2(a));u.C();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aD(this.ga2(a))},
i:function(a){return P.lb(a)},
$iy:1}
P.ka.prototype={
k:function(a,b,c){H.B(b,H.r(this,0))
H.B(c,H.r(this,1))
throw H.d(P.J("Cannot modify unmodifiable map"))}}
P.hp.prototype={
j:function(a,b){return J.dm(this.a,b)},
k:function(a,b,c){J.kY(this.a,H.B(b,H.r(this,0)),H.B(c,H.r(this,1)))},
I:function(a,b){J.lG(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aD(this.a)},
i:function(a){return J.as(this.a)},
$iy:1}
P.ee.prototype={}
P.jX.prototype={
ap:function(a,b){var u
for(u=J.bx(H.l(b,"$ij",this.$ti,"$aj"));u.C();)this.h(0,u.gL(u))},
i:function(a){return P.l5(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.lc(b,"index")
for(u=P.oB(r,r.r,H.r(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.d(P.Z(b,r,"index",null,t))},
$ij:1,
$im9:1}
P.eB.prototype={}
P.f3.prototype={}
P.fu.prototype={
iO:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.br(a0,a1,b.length)
u=$.nj()
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
if(h>=0){i=C.b.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ah("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.c4(m)
s=n
continue}}throw H.d(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.lK(b,p,a1,q,o,f)
else{e=C.e.bd(f-1,4)+1
if(e===1)throw H.d(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lK(b,p,a1,q,o,d)
else{e=C.e.bd(d,4)
if(e===1)throw H.d(P.a7(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.m],P.f]}}
P.fv.prototype={
$abB:function(){return[[P.b,P.m],P.f]}}
P.bW.prototype={}
P.bB.prototype={}
P.fS.prototype={
$abW:function(){return[P.f,[P.b,P.m]]}}
P.h7.prototype={
i:function(a){return this.a}}
P.h6.prototype={
f9:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nw(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.f,P.f]}}
P.j7.prototype={
giy:function(){return C.N}}
P.j9.prototype={
c8:function(a){var u,t,s=P.br(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kg(u)
if(t.fl(a,0,s)!==s)t.dt(J.ns(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oR(0,t.b,u.length)))},
$abB:function(){return[P.f,[P.b,P.m]]}}
P.kg.prototype={
dt:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fl:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dt(r,C.b.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j8.prototype={
c8:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.on(!1,a,0,null)
if(u!=null)return u
t=P.br(0,null,J.aD(a))
s=P.mF(a,0,t)
if(s>0){r=P.cU(a,0,s)
if(s===t)return r
q=new P.ah(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ah("")
n=new P.kf(!1,q)
n.c=o
n.il(a,p,t)
if(n.e>0){H.z(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c4(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abB:function(){return[[P.b,P.m],P.f]}}
P.kf.prototype={
il:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cm(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ag()
if((o&192)!==128){n=P.a7(h+C.e.bc(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a7("Overlong encoding of 0x"+C.e.bc(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.e.bc(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.c4(u)
i.c=!1}for(n=p<c;n;){m=P.mF(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cU(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.e.bc(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.e.bc(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.T.prototype={}
P.ay.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.nE(H.o7(u)),s=P.dx(H.o5(u)),r=P.dx(H.o1(u)),q=P.dx(H.o2(u)),p=P.dx(H.o4(u)),o=P.dx(H.o6(u)),n=P.nF(H.o3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.e.p(this.a,b.gd5()))},
q:function(a,b){return new P.b5(C.e.q(this.a,b.gd5()))},
al:function(a,b){return C.e.al(this.a,b.gd5())},
u:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fP(),q=this.a
if(q<0)return"-"+new P.b5(0-q).i(0)
u=r.$1(C.e.a6(q,6e7)%60)
t=r.$1(C.e.a6(q,1e6)%60)
s=new P.fO().$1(q%1e6)
return""+C.e.a6(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
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
P.bD.prototype={}
P.fo.prototype={
i:function(a){return"Assertion failed"}}
P.dU.prototype={
i:function(a){return"Throw of null."}}
P.aQ.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbE()+o+u
if(!q.a)return t
s=q.gbD()
r=P.dB(q.b)
return t+s+": "+r}}
P.c5.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.h8.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var u,t=H.a4(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j0.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iY.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dB(u)+"."}}
P.hY.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.e4.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fI.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.et.prototype={
i:function(a){return"Exception: "+this.a}}
P.h1.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.X(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bE.prototype={}
P.m.prototype={}
P.j.prototype={
bv:function(a,b){var u=H.ar(this,"j",0)
return new H.d1(this,H.n(b,{func:1,ret:P.T,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.C();)++u
return u},
gaJ:function(a){var u,t=this.gT(this)
if(!t.C())throw H.d(H.h9())
u=t.gL(t)
if(t.C())throw H.d(H.nN())
return u},
K:function(a,b){var u,t,s
P.lc(b,"index")
for(u=this.gT(this),t=0;u.C();){s=u.gL(u)
if(b===t)return s;++t}throw H.d(P.Z(b,this,"index",null,t))},
i:function(a){return P.nL(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ij:1}
P.y.prototype={}
P.O.prototype={
gJ:function(a){return P.R.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
u:function(a,b){return this===b},
gJ:function(a){return H.cP(this)},
i:function(a){return"Instance of '"+H.c3(this)+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.f.prototype={$im2:1}
P.ah.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipY:1}
P.j5.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.l(a,"$iy",[r,r],"$ay")
H.I(b)
u=J.dj(b).dV(b,"=")
if(u===-1){if(b!=="")J.kY(a,P.ln(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.a7(b,u+1)
r=this.a
J.kY(a,P.ln(t,0,t.length,r,!0),P.ln(s,0,s.length,r,!0))}return a},
$S:45}
P.j2.prototype={
$2:function(a,b){throw H.d(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j3.prototype={
$2:function(a,b){throw H.d(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j4.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fj(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cf.prototype={
ges:function(){return this.b},
gcl:function(a){var u=this.c
if(u==null)return""
if(C.b.a1(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbq:function(a){var u=this.d
if(u==null)return P.mu(this.a)
return u},
gcv:function(a){var u=this.f
return u==null?"":u},
gdQ:function(){var u=this.r
return u==null?"":u},
ed:function(a,b){var u,t,s,r,q,p,o,n,m=this
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
n=P.lm(null,0,0,b)
return new P.cf(u,s,q,r,p,n,m.r)},
gcw:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shv(new P.ee(P.mj(u==null?"":u),[t,t]))}return s.Q},
gdR:function(){return this.c!=null},
gdU:function(){return this.f!=null},
gdS:function(){return this.r!=null},
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
if(!!J.X(b).$ilh)if(s.a==b.gbx())if(s.c!=null===b.gdR())if(s.b==b.ges())if(s.gcl(s)==b.gcl(b))if(s.gbq(s)==b.gbq(b))if(s.e===b.ge7(b)){u=s.f
t=u==null
if(!t===b.gdU()){if(t)u=""
if(u===b.gcv(b)){u=s.r
t=u==null
if(!t===b.gdS()){if(t)u=""
u=u===b.gdQ()}else u=!1}else u=!1}else u=!1}else u=!1
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
$ilh:1,
gbx:function(){return this.a},
ge7:function(a){return this.e}}
P.kb.prototype={
$1:function(a){throw H.d(P.a7("Invalid port",this.a,this.b+1))},
$S:41}
P.kc.prototype={
$1:function(a){return P.f4(C.W,a,C.h,!1)},
$S:22}
P.ke.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f4(C.m,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f4(C.m,b,C.h,!0))}},
$S:23}
P.kd.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bx(H.mV(b,"$ij")),t=this.a;u.C();)t.$2(a,H.I(u.gL(u)))},
$S:40}
P.j1.prototype={
ger:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.dW(u,"?",o)
s=u.length
if(t>=0){r=P.df(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.jz("data",p,p,p,P.df(u,o,s,C.A,!1),r,p)},
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
J.nt(u,0,96,b)
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
gdR:function(){return this.c>0},
gdT:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gdU:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdS:function(){return this.r<this.a.length},
gd9:function(){return this.b===4&&C.b.a1(this.a,"http")},
gda:function(){return this.b===5&&C.b.a1(this.a,"https")},
gbx:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd9())q=t.x="http"
else if(t.gda()){t.x="https"
q="https"}else if(q===4&&C.b.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a1(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
ges:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gcl:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbq:function(a){var u,t=this
if(t.gdT()){u=t.d
if(typeof u!=="number")return u.p()
return P.fj(C.b.A(t.a,u+1,t.e),null,null)}if(t.gd9())return 80
if(t.gda())return 443
return 0},
ge7:function(a){return C.b.A(this.a,this.e,this.f)},
gcv:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.A(this.a,u+1,t):""},
gdQ:function(){var u=this.r,t=this.a
return u<t.length?C.b.a7(t,u+1):""},
gcw:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.X
t=P.f
return new P.ee(P.mj(u.gcv(u)),[t,t])},
ed:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.f,null],"$ay")
u=k.gbx()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.gdT()?k.gbq(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a1(o,"/"))o="/"+o
m=P.lm(j,0,0,b)
n=k.r
l=n<s.length?C.b.a7(s,n+1):j
return new P.cf(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$ilh&&this.a===b.i(0)},
i:function(a){return this.a},
$ilh:1}
P.jz.prototype={}
W.v.prototype={}
W.fl.prototype={
gn:function(a){return a.length}}
W.dp.prototype={
i:function(a){return String(a)},
$idp:1}
W.fm.prototype={
i:function(a){return String(a)}}
W.cs.prototype={$ics:1}
W.bU.prototype={$ibU:1}
W.by.prototype={$iby:1}
W.bV.prototype={
ew:function(a,b,c){var u=a.getContext(b,P.pn(c))
return u},
$ibV:1}
W.bz.prototype={
gn:function(a){return a.length}}
W.cw.prototype={$icw:1}
W.fE.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cx.prototype={
gn:function(a){return a.length}}
W.fF.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fG.prototype={
gn:function(a){return a.length}}
W.fH.prototype={
gn:function(a){return a.length}}
W.fK.prototype={
gn:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.fL.prototype={
i:function(a){return String(a)}}
W.dy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ial",[P.aa],"$aal")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.al,P.aa]]},
$ax:function(){return[[P.al,P.aa]]},
$ij:1,
$aj:function(){return[[P.al,P.aa]]},
$ib:1,
$ab:function(){return[[P.al,P.aa]]},
$aH:function(){return[[P.al,P.aa]]}}
W.dz.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaI(a))+" x "+H.i(this.gaB(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ial)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&this.gaI(a)===u.gaI(b)&&this.gaB(a)===u.gaB(b)},
gJ:function(a){return W.ms(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaI(a)),C.c.gJ(this.gaB(a)))},
gdC:function(a){return a.bottom},
gaB:function(a){return a.height},
gbp:function(a){return a.left},
gcC:function(a){return a.right},
gbs:function(a){return a.top},
gaI:function(a){return a.width},
$ial:1,
$aal:function(){return[P.aa]}}
W.fM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.I(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
W.fN.prototype={
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
gT:function(a){var u=this.je(this)
return new J.ax(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gie:function(a){return new W.jA(a)},
gc7:function(a){return new W.jx(a,a.children)},
gdD:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lS
if(u==null){u=H.c([],[W.aB])
t=new W.dT(u)
C.a.h(u,W.mr(null))
C.a.h(u,W.mt())
$.lS=t
d=t}else d=u
u=$.lR
if(u==null){u=new W.f5(d)
$.lR=u
c=u}else{u.a=d
c=u}}if($.bm==null){u=document
t=u.implementation.createHTMLDocument("")
$.bm=t
$.l4=t.createRange()
t=$.bm.createElement("base")
H.h(t,"$ics")
t.href=u.baseURI
$.bm.head.appendChild(t)}u=$.bm
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$iby")}u=$.bm
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bm.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.U,a.tagName)){$.l4.selectNodeContents(s)
r=$.l4.createContextualFragment(b)}else{s.innerHTML=b
r=$.bm.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bm.body
if(s==null?u!=null:s!==u)J.lI(s)
c.cI(r)
document.adoptNode(r)
return r},
ip:function(a,b,c){return this.ab(a,b,c,null)},
ey:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iU:1,
geh:function(a){return a.tagName}}
W.fR.prototype={
$1:function(a){return!!J.X(H.h(a,"$iG")).$iU},
$S:27}
W.o.prototype={$io:1}
W.k.prototype={
i2:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f_(a,b,c,!1)},
f_:function(a,b,c,d){return a.addEventListener(b,H.cj(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aH.prototype={$iaH:1}
W.cA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaH")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$icA:1,
$aH:function(){return[W.aH]}}
W.fX.prototype={
gn:function(a){return a.length}}
W.h0.prototype={
gn:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.h5.prototype={
gn:function(a){return a.length}}
W.bZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibZ:1,
$aH:function(){return[W.G]}}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1}
W.b7.prototype={$ib7:1}
W.dJ.prototype={
i:function(a){return String(a)},
$idJ:1}
W.hG.prototype={
gn:function(a){return a.length}}
W.cH.prototype={$icH:1}
W.hH.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.I(a,new W.hI(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hJ.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.I(a,new W.hK(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aT.prototype={$iaT:1}
W.hL.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaT")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.af.prototype={$iaf:1}
W.aq.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.ma("No elements"))
if(t>1)throw H.d(P.ma("More than one element"))
return u.firstChild},
ap:function(a,b){var u,t,s,r
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
return new W.dC(u,u.length,[H.bP(C.Y,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.G]},
$aj:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
j4:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j8:function(a,b){var u,t
try{u=a.parentNode
J.nq(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eB(a):u},
i8:function(a,b){return a.appendChild(H.h(b,"$iG"))},
hA:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aU.prototype={$iaU:1,
gn:function(a){return a.length}}
W.i0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.ia.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.I(a,new W.ib(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.id.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.ip.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaW")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.it.prototype={
j:function(a,b){return a.getItem(H.I(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.c([],[P.f])
this.I(a,new W.iu(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.iu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:23}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.e5.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
u=W.nG("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).ap(0,new W.aq(u))
return t}}
W.iA.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaJ(u)
s.toString
u=new W.aq(s)
r=u.gaJ(u)
t.toString
r.toString
new W.aq(t).ap(0,new W.aq(r))
return t}}
W.iB.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaJ(u)
t.toString
s.toString
new W.aq(t).ap(0,new W.aq(s))
return t}}
W.cV.prototype={$icV:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaL")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aL]},
$ax:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaY")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iG.prototype={
gn:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaZ")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.iL.prototype={
gn:function(a){return a.length}}
W.bK.prototype={}
W.j6.prototype={
i:function(a){return String(a)}}
W.jo.prototype={
gn:function(a){return a.length}}
W.bh.prototype={
gis:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.J("deltaY is not supported"))},
gir:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.J("deltaX is not supported"))},
$ibh:1}
W.d2.prototype={
hB:function(a,b){return a.requestAnimationFrame(H.cj(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
ff:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d3.prototype={$id3:1}
W.jy.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iY")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Y]},
$ax:function(){return[W.Y]},
$ij:1,
$aj:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aH:function(){return[W.Y]}}
W.eo.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.X(b)
if(!u.$ial)return!1
return a.left===u.gbp(b)&&a.top===u.gbs(b)&&a.width===u.gaI(b)&&a.height===u.gaB(b)},
gJ:function(a){return W.ms(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaB:function(a){return a.height},
gaI:function(a){return a.width}}
W.jN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.eG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iG")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ij:1,
$aj:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.k0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaX")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.k4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaK")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aH:function(){return[W.aK]}}
W.jw.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.h(r[t],"$id3")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jA.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga2(this).length}}
W.jB.prototype={}
W.lk.prototype={}
W.jC.prototype={}
W.jD.prototype={
$1:function(a){return this.a.$1(H.h(a,"$io"))},
$S:37}
W.bN.prototype={
eO:function(a){var u
if($.d5.giJ($.d5)){for(u=0;u<262;++u)$.d5.k(0,C.T[u],W.pw())
for(u=0;u<12;++u)$.d5.k(0,C.q[u],W.px())}},
aR:function(a){return $.nk().V(0,W.cy(a))},
aq:function(a,b,c){var u=$.d5.j(0,H.i(W.cy(a))+"::"+b)
if(u==null)u=$.d5.j(0,"*::"+b)
if(u==null)return!1
return H.ls(u.$4(a,b,c,this))},
$iaB:1}
W.H.prototype={
gT:function(a){return new W.dC(a,this.gn(a),[H.bP(this,a,"H",0)])}}
W.dT.prototype={
aR:function(a){return C.a.dz(this.a,new W.hT(a))},
aq:function(a,b,c){return C.a.dz(this.a,new W.hS(a,b,c))},
$iaB:1}
W.hT.prototype={
$1:function(a){return H.h(a,"$iaB").aR(this.a)},
$S:29}
W.hS.prototype={
$1:function(a){return H.h(a,"$iaB").aq(this.a,this.b,this.c)},
$S:29}
W.eO.prototype={
eV:function(a,b,c,d){var u,t,s
this.a.ap(0,c)
u=b.bv(0,new W.jY())
t=b.bv(0,new W.jZ())
this.b.ap(0,u)
s=this.c
s.ap(0,C.x)
s.ap(0,t)},
aR:function(a){return this.a.V(0,W.cy(a))},
aq:function(a,b,c){var u=this,t=W.cy(a),s=u.c
if(s.V(0,H.i(t)+"::"+b))return u.d.i6(c)
else if(s.V(0,"*::"+b))return u.d.i6(c)
else{s=u.b
if(s.V(0,H.i(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.i(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaB:1}
W.jY.prototype={
$1:function(a){return!C.a.V(C.q,H.I(a))},
$S:30}
W.jZ.prototype={
$1:function(a){return C.a.V(C.q,H.I(a))},
$S:30}
W.k6.prototype={
aq:function(a,b,c){if(this.eF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.k7.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.I(a))},
$S:22}
W.k5.prototype={
aR:function(a){var u=J.X(a)
if(!!u.$icQ)return!1
u=!!u.$iq
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.b.a1(b,"on"))return!1
return this.aR(a)},
$iaB:1}
W.dC.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd8(J.dm(u.a,t))
u.c=t
return!0}u.sd8(null)
u.c=s
return!1},
gL:function(a){return this.d},
sd8:function(a){this.d=H.B(a,H.r(this,0))},
$ib6:1}
W.aB.prototype={}
W.jW.prototype={$iq9:1}
W.f5.prototype={
cI:function(a){new W.kh(this).$2(a,null)},
b0:function(a,b){if(b==null)J.lI(a)
else b.removeChild(a)},
hF:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nu(a)
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
try{t=J.as(a)}catch(r){H.ak(r)}try{s=W.cy(a)
this.hE(H.h(a,"$iU"),b,p,t,s,H.h(o,"$iy"),H.I(n))}catch(r){if(H.ak(r) instanceof P.aQ)throw r
else{this.b0(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aR(a)){o.b0(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aq(a,"is",g)){o.b0(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.c(u.slice(0),[H.r(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nx(r)
H.I(r)
if(!q.aq(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.X(a).$icV)o.cI(a.content)},
$ipV:1}
W.kh.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hF(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b0(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ak(s)
r=H.h(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iG")}},
$S:35}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.da.prototype={}
W.db.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
P.k1.prototype={
dO:function(a){var u,t=this.a,s=t.length
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
if(!!u.$iob)throw H.d(P.iZ("structured clone of RegExp"))
if(!!u.$iaH)return a
if(!!u.$ibU)return a
if(!!u.$icA)return a
if(!!u.$icD)return a
if(!!u.$icK||!!u.$ibH||!!u.$icH)return a
if(!!u.$iy){t=q.dO(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.k3(p,q))
return p.a}if(!!u.$ib){t=q.dO(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.io(a,t)}throw H.d(P.iZ("structured clone of other type"))},
io:function(a,b){var u,t=J.cm(a),s=t.gn(a),r=new Array(s)
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
P.fY.prototype={
gbi:function(){var u=this.b,t=H.ar(u,"x",0),s=W.U
return new H.hq(new H.d1(u,H.n(new P.fZ(),{func:1,ret:P.T,args:[t]}),[t]),H.n(new P.h_(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.gbi()
J.nv(u.b.$1(J.fk(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aD(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.fk(u.a,b))},
gT:function(a){var u=P.lW(this.gbi(),!1,W.U)
return new J.ax(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$aj:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.fZ.prototype={
$1:function(a){return!!J.X(H.h(a,"$iG")).$iU},
$S:27}
P.h_.prototype={
$1:function(a){return H.A(H.h(a,"$iG"),"$iU")},
$S:34}
P.jR.prototype={
gcC:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.B(u+t,H.r(this,0))},
gdC:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.B(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.X(b)
if(!!u.$ial){t=p.a
if(t==u.gbp(b)){s=p.b
if(s==u.gbs(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.E(r)
q=H.r(p,0)
if(H.B(t+r,q)===u.gcC(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.E(t)
u=H.B(s+t,q)===u.gdC(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dn(s),q=t.b,p=J.dn(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.E(o)
u=H.r(t,0)
o=C.e.gJ(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.E(s)
u=C.e.gJ(H.B(q+s,u))
return P.oA(P.jP(P.jP(P.jP(P.jP(0,r),p),o),u))}}
P.al.prototype={
gbp:function(a){return this.a},
gbs:function(a){return this.b},
gaI:function(a){return this.c},
gaB:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hf.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib8")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b8]},
$ij:1,
$aj:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aH:function(){return[P.b8]}}
P.bb.prototype={$ibb:1}
P.hW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibb")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bb]},
$ij:1,
$aj:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.i2.prototype={
gn:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.iz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.I(c)
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aH:function(){return[P.f]}}
P.q.prototype={
gc7:function(a){return new P.fY(a,new W.aq(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aB])
C.a.h(p,W.mr(null))
C.a.h(p,W.mt())
C.a.h(p,new W.k5())
c=new W.f5(new W.dT(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).ip(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bf.prototype={$ibf:1}
P.iM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ibf")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aH:function(){return[P.bf]}}
P.ey.prototype={}
P.ez.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.S.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
P.fq.prototype={
gn:function(a){return a.length}}
P.fr.prototype={
j:function(a,b){return P.bs(a.get(H.I(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bs(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.I(a,new P.fs(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.J("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fs.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.ft.prototype={
gn:function(a){return a.length}}
P.bT.prototype={}
P.hX.prototype={
gn:function(a){return a.length}}
P.em.prototype={}
P.dr.prototype={$idr:1}
P.dX.prototype={$idX:1}
P.c6.prototype={
a3:function(a,b,c){return a.uniform1f(b,c)},
bu:function(a,b,c){return a.uniform1i(b,c)},
Y:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eo:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ep:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eq:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic6:1}
P.e0.prototype={$ie0:1}
P.ec.prototype={$iec:1}
P.ir.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.Z(b,a,null,null,null))
return P.bs(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.d(P.J("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ij:1,
$aj:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aH:function(){return[[P.y,,,]]}}
P.eR.prototype={}
P.eS.prototype={}
O.a6.prototype={
bA:function(a){var u=this
u.sfq(H.c([],[a]))
u.sdf(null)
u.sdc(null)
u.sdg(null)},
cJ:function(a,b,c){var u=this,t=H.ar(u,"a6",0)
H.n(b,{func:1,ret:P.T,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.m,[P.j,t]]}
H.n(a,t)
H.n(c,t)
u.sdf(b)
u.sdc(a)
u.sdg(c)},
be:function(a,b){return this.cJ(a,null,b)},
he:function(a){var u
H.l(a,"$ij",[H.ar(this,"a6",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eM:function(a,b){var u
H.l(b,"$ij",[H.ar(this,"a6",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.ax(u,u.length,[H.r(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ar(s,"a6",0)
H.B(b,r)
r=[r]
if(H.F(s.he(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eM(t,H.c([b],r))}},
sfq:function(a){this.a=H.l(a,"$ib",[H.ar(this,"a6",0)],"$ab")},
sdf:function(a){this.b=H.n(a,{func:1,ret:P.T,args:[[P.j,H.ar(this,"a6",0)]]})},
sdc:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.ar(this,"a6",0)]]})},
sdg:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.j,H.ar(this,"a6",0)]]})},
$ij:1}
O.cG.prototype={
gn:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.V():u},
aK:function(){var u=this.b
if(u!=null)u.F(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gas(u)
else return V.dP()},
ea:function(a){var u=this.a
if(a==null)C.a.h(u,V.dP())
else C.a.h(u,a)
this.aK()},
cu:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sbJ:function(a){this.a=H.l(a,"$ib",[V.ap],"$ab")}}
E.fw.prototype={}
E.ao.prototype={
sah:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().N(0,s.ge4())
u=s.c
if(u!=null)u.gB().h(0,s.ge4())
t=new D.N("shape",r,s.c,[F.e1])
t.b=!0
s.aF(t)}},
sb9:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gB().N(0,s.ge2())
if(a!=null)a.gB().h(0,s.ge2())
s.r=a
t=new D.N("mover",u,a,[U.ab])
t.b=!0
s.aF(t)}},
at:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.N("matrix",u,q,[V.ap])
t.b=!0
s.aF(t)}for(r=s.y.a,r=new J.ax(r,r.length,[H.r(r,0)]);r.C();)r.d.at(0,b)},
aV:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.t(0,s.ga0(s)))
s.aK()
a.eb(t.f)
s=a.dy
u=(s&&C.a).gas(s)
if(u!=null&&t.d!=null)u.j7(a,t)
for(s=t.y.a,s=new J.ax(s,s.length,[H.r(s,0)]);s.C();)s.d.aV(a)
a.e9()
a.dx.cu()},
gB:function(){var u=this.z
return u==null?this.z=D.V():u},
aF:function(a){var u=this.z
if(u!=null)u.F(a)},
a_:function(){return this.aF(null)},
e5:function(a){H.h(a,"$iC")
this.e=null
this.aF(a)},
iV:function(){return this.e5(null)},
e3:function(a){this.aF(H.h(a,"$iC"))},
iU:function(){return this.e3(null)},
e1:function(a){this.aF(H.h(a,"$iC"))},
iR:function(){return this.e1(null)},
iQ:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.ge0(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bX()
o.sai(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iT:function(a,b){var u,t
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.gT(b),t=this.ge0();u.C();)u.gL(u).gB().N(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seN:function(a,b){this.y=H.l(b,"$ia6",[E.ao],"$aa6")},
$icJ:1}
E.i6.prototype={
eI:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cG()
t=[V.ap]
u.sbJ(H.c([],t))
u.b=null
u.gB().h(0,new E.i7(s))
s.cy=u
u=new O.cG()
u.sbJ(H.c([],t))
u.b=null
u.gB().h(0,new E.i8(s))
s.db=u
u=new O.cG()
u.sbJ(H.c([],t))
u.b=null
u.gB().h(0,new E.i9(s))
s.dx=u
s.shR(H.c([],[O.c8]))
u=s.dy;(u&&C.a).h(u,null)
s.shM(new H.a3([P.f,A.cR]))},
gj3:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.t(0,u.ga0(u))
s=u}return s},
eb:function(a){var u=this.dy,t=a==null?(u&&C.a).gas(u):a;(u&&C.a).h(u,t)},
e9:function(){var u=this.dy
if(u.length>1)u.pop()},
shR:function(a){this.dy=H.l(a,"$ib",[O.c8],"$ab")},
shM:function(a){this.fr=H.l(a,"$iy",[P.f,A.cR],"$ay")}}
E.i7.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:10}
E.i8.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.i9.prototype={
$1:function(a){var u
H.h(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:10}
E.e8.prototype={
cQ:function(a){H.h(a,"$iC")
this.ee()},
cP:function(){return this.cQ(null)},
giE:function(){var u,t=this,s=Date.now(),r=C.e.a6(P.lQ(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dj:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.E(r)
u=C.c.dP(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.c.dP(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.md(C.o,s.gj9())}},
ee:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iF(this),{func:1,ret:-1,args:[P.aa]})
C.E.ff(u)
C.E.hB(u,W.mI(t,P.aa))}},
j6:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dj()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lQ(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aK()
r=s.db
C.a.sn(r.a,0)
r.aK()
r=s.dx
C.a.sn(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aV(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.ak(q)
t=H.co(q)
P.lA("Error: "+H.i(u))
P.lA("Stack: "+H.i(t))
throw H.d(u)}}}
E.iF.prototype={
$1:function(a){var u
H.mX(a)
u=this.a
if(u.ch){u.ch=!1
u.j6()}},
$S:57}
Z.ek.prototype={$ipP:1}
Z.ds.prototype={
bl:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ak(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jp.prototype={$ipQ:1}
Z.dt.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bl:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bl(a)},
en:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aV:function(a){var u,t,s,r,q,p=this.b.length
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
sfm:function(a){this.b=H.l(a,"$ib",[Z.bF],"$ab")},
$ipZ:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c3(this.c)+"'")+"]"}}
Z.bM.prototype={
gcK:function(a){var u=this.a,t=(u&$.bw().a)!==0?3:0
if((u&$.bv().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=3
if((u&$.bR().a)!==0)t+=2
if((u&$.bS().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=4
if((u&$.cr().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
i9:function(a){var u,t=$.bw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.ni()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bM))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bw().a)!==0)C.a.h(u,"Pos")
if((t&$.bv().a)!==0)C.a.h(u,"Norm")
if((t&$.bu().a)!==0)C.a.h(u,"Binm")
if((t&$.bR().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bS().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dk().a)!==0)C.a.h(u,"Clr3")
if((t&$.dl().a)!==0)C.a.h(u,"Clr4")
if((t&$.cr().a)!==0)C.a.h(u,"Weight")
if((t&$.bt().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fz.prototype={}
D.bX.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.n(b,u)
if(this.a==null)this.sai(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.C()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.lW(u,!0,{func:1,ret:-1,args:[D.C]}),new D.fU(q))
u=r.b
if(u!=null){r.saO(H.c([],[{func:1,ret:-1,args:[D.C]}]))
C.a.I(u,new D.fV(q))}return!0},
ae:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sai:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saO:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.fU.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fV.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.C.prototype={}
D.c_.prototype={}
D.c0.prototype={}
D.N.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.du.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dG.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.he.prototype={
j_:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iW:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
shu:function(a){this.d=H.l(a,"$im9",[P.m],"$am9")}}
X.dK.prototype={}
X.hm.prototype={
aZ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaS()
r=new X.bq(a,V.bJ(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
ct:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ex()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aZ(a,b))
return!0},
j0:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaS()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cI(new V.W(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
h3:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dK(c,r.a.gaS(),b)
s.b=!0
t.F(s)
r.y=new P.ay(u,!1)
r.x=V.bJ()}}
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
X.hM.prototype={
bG:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaS(),r=new X.bq(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ct:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bG(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ex()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bG(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bG(a,b,!1))
return!0},
j1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaS()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cI(new V.W(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdE:function(){var u=this.b
return u==null?this.b=D.V():u},
gcF:function(){var u=this.c
return u==null?this.c=D.V():u},
gdZ:function(){var u=this.d
return u==null?this.d=D.V():u}}
X.cI.prototype={}
X.i1.prototype={}
X.ea.prototype={}
X.iJ.prototype={
aZ:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=q.a.gaS()
r=new X.ea(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iZ:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.F(this.aZ(a,!0))
return!0},
iX:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.F(this.aZ(a,!0))
return!0},
iY:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.F(this.aZ(a,!1))
return!0}}
X.ef.prototype={
gaS:function(){var u=this.a,t=C.n.gdD(u).c
t.toString
u=C.n.gdD(u).d
u.toString
return V.m7(0,0,t,u)},
d2:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dG(u,new X.aA(t,a.altKey,a.shiftKey))},
aP:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
bZ:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
az:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a9(s-q,r-u)},
b_:function(a){return new V.W(a.movementX,a.movementY)},
bU:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.aj(r.pageX)
C.c.aj(r.pageY)
p=o.left
C.c.aj(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.aj(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.du(u,new X.aA(t,a.altKey,a.shiftKey))},
bK:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fY:function(a){this.f=!0},
fK:function(a){this.f=!1},
fS:function(a){H.h(a,"$iaf")
if(H.F(this.f)&&this.bK(a))a.preventDefault()},
h1:function(a){var u
H.h(a,"$ib7")
if(!H.F(this.f))return
u=this.d2(a)
this.b.j_(u)},
h_:function(a){var u
H.h(a,"$ib7")
if(!H.F(this.f))return
u=this.d2(a)
this.b.iW(u)},
h5:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aP(a)
if(H.F(q.x)){t=q.ax(a)
s=q.b_(a)
if(q.d.ct(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ax(a)
r=q.az(a)
if(q.c.ct(t,r))a.preventDefault()},
h9:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.bb(u,s))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bK(a)){r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.bb(u,s))a.preventDefault()}},
h7:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.ba(u,s))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bK(a)){r.aP(a)
u=r.ax(a)
if(H.F(r.x)){t=r.b_(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.az(a)
if(r.c.ba(u,s))a.preventDefault()}},
hb:function(a){var u,t,s=this
H.h(a,"$ibh")
s.aP(a)
u=new V.W((a&&C.D).gir(a),C.D.gis(a)).v(0,180)
if(H.F(s.x)){if(s.d.j0(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.az(a)
if(s.c.j1(u,t))a.preventDefault()},
hd:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.az(s.y)
s.d.h3(u,t,r)}},
hq:function(a){var u,t=this
H.h(a,"$ib_")
t.a.focus()
t.f=!0
t.bZ(a)
u=t.bU(a)
if(t.e.iZ(u))a.preventDefault()},
hm:function(a){var u
H.h(a,"$ib_")
this.bZ(a)
u=this.bU(a)
if(this.e.iX(u))a.preventDefault()},
ho:function(a){var u
H.h(a,"$ib_")
this.bZ(a)
u=this.bU(a)
if(this.e.iY(u))a.preventDefault()},
sfg:function(a){this.z=H.l(a,"$ib",[[P.cT,P.R]],"$ab")}}
D.bC.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.V():u},
av:function(a){var u
H.h(a,"$iC")
u=this.r
if(u!=null)u.F(a)},
eR:function(){return this.av(null)},
$iad:1,
$icJ:1}
D.ad.prototype={$icJ:1}
D.dH.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.V():u},
av:function(a){var u=this.x
if(u!=null)u.F(a)},
de:function(a){var u
H.h(a,"$iC")
u=this.y
if(u!=null)u.F(a)},
h2:function(){return this.de(null)},
hg:function(a){var u,t,s
H.l(a,"$ij",[D.ad],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eP(s))return!1}return!0},
fE:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdd(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.bC)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bX()
o.sai(null)
o.saO(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sai(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c_([n])
n.b=!0
this.av(n)},
hk:function(a,b){var u,t,s,r=D.ad
H.l(b,"$ij",[r],"$aj")
for(u=b.gT(b),t=this.gdd();u.C();){s=u.gL(u)
C.a.N(this.e,s)
s.gB().N(0,t)}r=new D.c0([r])
r.b=!0
this.av(r)},
eP:function(a){var u=C.a.V(this.e,a)
return u},
sfe:function(a){this.e=H.l(a,"$ib",[D.bC],"$ab")},
shr:function(a){this.f=H.l(a,"$ib",[D.dW],"$ab")},
shP:function(a){this.r=H.l(a,"$ib",[D.e3],"$ab")},
$aj:function(){return[D.ad]},
$aa6:function(){return[D.ad]}}
D.dW.prototype={$iad:1,$icJ:1}
D.e3.prototype={$iad:1,$icJ:1}
V.a2.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcz()),t=C.c.p(this.b,b.gbw()),s=C.c.p(this.c,b.gc3())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
q:function(a,b){var u=C.c.q(this.a,b.gcz()),t=C.c.q(this.b,b.gbw()),s=C.c.q(this.c,b.gc3())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.aE.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcz()),s=C.c.p(u.b,b.gbw()),r=C.c.p(u.c,b.gc3()),q=C.c.p(u.d,b.gi7(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aE(t,s,r,q)},
q:function(a,b){var u=this,t=C.c.q(u.a,b.gcz()),s=C.c.q(u.b,b.gbw()),r=C.c.q(u.c,b.gc3()),q=C.c.q(u.d,b.gi7(b))
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
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fT.prototype={}
V.dO.prototype={
af:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dO))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.cl(H.c([q.a,q.d,q.r],p),3,0),n=V.cl(H.c([q.b,q.e,q.x],p),3,0),m=V.cl(H.c([q.c,q.f,q.y],p),3,0)
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
af:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
dX:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.L().a)return V.dP()
u=1/b1
t=-n
s=-a0
return V.ba((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ba(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bt:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cE:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
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
i:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.cl(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cl(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cl(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cl(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
q:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.a5.prototype={
p:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.bc.prototype={
p:function(a,b){var u=this
return new V.bc(C.c.p(u.a,b.gji(b)),C.c.p(u.b,b.gjj(b)),C.c.p(u.c,b.gjk(b)),C.c.p(u.d,b.gjh(b)))},
q:function(a,b){var u=this
return new V.bc(C.c.q(u.a,b.gji(b)),C.c.q(u.b,b.gjj(b)),C.c.q(u.c,b.gjk(b)),C.c.q(u.d,b.gjh(b)))},
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
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.dZ.prototype={
ga8:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dZ))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.W.prototype={
co:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gcb(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gcc(b)
if(typeof t!=="number")return t.p()
return new V.W(s,C.c.p(t,u))},
q:function(a,b){var u,t=this.a,s=b.gcb(b)
if(typeof t!=="number")return t.q()
s=C.c.q(t,s)
t=this.b
u=b.gcc(b)
if(typeof t!=="number")return t.q()
return new V.W(s,C.c.q(t,u))},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.W(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.mk
return u==null?$.mk=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.W(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.K.prototype={
co:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cp:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aA:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.K(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.L().a)return V.d0()
return new V.K(this.a/b,this.b/b,this.c/b)},
dY:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.fA.prototype={
bB:function(a){var u=V.kX(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.V():u},
H:function(a){var u=this.y
if(u!=null)u.F(a)},
scH:function(a,b){},
scq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.L().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bB(u)}s=new D.N("maximumLocation",s,t.b,[P.p])
s.b=!0
t.H(s)}},
scs:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.L().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bB(u)}s=new D.N("minimumLocation",s,t.c,[P.p])
s.b=!0
t.H(s)}},
sZ:function(a,b){var u,t=this
b=t.bB(b)
u=t.d
if(!(Math.abs(u-b)<$.L().a)){t.d=b
u=new D.N("location",u,b,[P.p])
u.b=!0
t.H(u)}},
scr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.L().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.N("maximumVelocity",r,a,[P.p])
r.b=!0
s.H(r)}},
sU:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.L().a)){u.f=a
t=new D.N("velocity",t,a,[P.p])
t.b=!0
u.H(t)}},
sca:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.N("dampening",u,a,[P.p])
u.b=!0
this.H(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.L().a
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
u=s}r.sU(u)}}}
U.dw.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.V():u},
au:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cC.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.V():u},
H:function(a){var u
H.h(a,"$iC")
u=this.e
if(u!=null)u.F(a)},
a4:function(){return this.H(null)},
fC:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaL(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gB()
o.toString
H.n(t,s)
if(o.a==null)o.sai(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c_([n])
n.b=!0
this.H(n)},
hi:function(a,b){var u,t,s=U.ab
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gaL();u.C();)u.gL(u).gB().N(0,t)
s=new D.c0([s])
s.b=!0
this.H(s)},
au:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.r(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.au(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.dP():u
r=s.e
if(r!=null)r.ae(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ab]},
$aa6:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e_.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.V():u},
H:function(a){var u=this.y
if(u!=null)u.F(a)},
seu:function(a){var u
a=V.kX(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.L().a)){this.a=a
u=new D.N("yaw",u,a,[P.p])
u.b=!0
this.H(u)}},
se8:function(a,b){var u
b=V.kX(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.L().a)){this.b=b
u=new D.N("pitch",u,b,[P.p])
u.b=!0
this.H(u)}},
sef:function(a){var u
a=V.kX(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
u=new D.N("roll",u,a,[P.p])
u.b=!0
this.H(u)}},
au:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seu(u.a+u.d*b.y)
u.se8(0,u.b+u.e*b.y)
u.sef(u.c+u.f*b.y)
u.x=V.lZ(u.c).t(0,V.lY(u.b)).t(0,V.lX(u.a))
t=u.y
if(t!=null)t.ae(0)}return u.x},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e_))return!1
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
return"Rotater: ["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+"], ["+V.P(u.d,3,0)+", "+V.P(u.e,3,0)+", "+V.P(u.f,3,0)+"]"}}
U.eg.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.V():u},
H:function(a){var u
H.h(a,"$iC")
u=this.cy
if(u!=null)u.F(a)},
a4:function(){return this.H(null)},
b2:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdE().h(0,u.gbL())
u.a.c.gdZ().h(0,u.gbN())
u.a.c.gcF().h(0,u.gbP())
return!0},
bM:function(a){var u=this
H.h(a,"$iC")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bO:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iC"),"$ibq")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.q(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.q(0,a.y)
u=new V.W(t.a,t.b).t(0,2).v(0,u.ga8())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=new V.W(s.a,s.b).t(0,2).v(0,u.ga8())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sZ(0,-q*p+o)
n.b.sU(0)
t=t.q(0,a.z)
n.Q=new V.W(t.a,t.b).t(0,2).v(0,u.ga8())}n.a4()},
bQ:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sU(t*10*s)
r.a4()}},
au:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.at(0,u)
t.cx=V.lZ(t.b.d)}return t.cx},
$iab:1}
U.eh.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.V():u},
H:function(a){var u
H.h(a,"$iC")
u=this.fx
if(u!=null)u.F(a)},
a4:function(){return this.H(null)},
b2:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdE().h(0,s.gbL())
s.a.c.gdZ().h(0,s.gbN())
s.a.c.gcF().h(0,s.gbP())
u=s.a.d
t=u.f
u=t==null?u.f=D.V():t
u.h(0,s.gfs())
u=s.a.d
t=u.d
u=t==null?u.d=D.V():t
u.h(0,s.gfu())
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
ao:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.W(u,t)},
bM:function(a){var u=this
a=H.A(H.h(a,"$iC"),"$ibq")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bO:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iC"),"$ibq")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.q(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ao(new V.W(t.a,t.b).t(0,2).v(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ao(new V.W(s.a,s.b).t(0,2).v(0,u.ga8()))
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
n.b.sU(0)
n.c.sU(0)
t=t.q(0,a.z)
n.dx=n.ao(new V.W(t.a,t.b).t(0,2).v(0,u.ga8()))}n.a4()},
bQ:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sU(-t*10*u)
r.a4()}},
ft:function(a){var u=this
if(H.A(H.h(a,"$iC"),"$idK").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fv:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iC"),"$ibq")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ao(new V.W(s.a,s.b).t(0,2).v(0,u.ga8()))
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
n.b.sU(0)
n.c.sU(0)
t=t.q(0,a.z)
n.dx=n.ao(new V.W(t.a,t.b).t(0,2).v(0,u.ga8()))
n.a4()},
hY:function(a){var u=this
H.h(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hW:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iC"),"$iea")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.q(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ao(new V.W(t.a,t.b).t(0,2).v(0,u.ga8()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ao(new V.W(s.a,s.b).t(0,2).v(0,u.ga8()))
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
n.b.sU(0)
n.c.sU(0)
t=t.q(0,a.z)
n.dx=n.ao(new V.W(t.a,t.b).t(0,2).v(0,u.ga8()))}n.a4()},
hU:function(a){var u,t,s,r=this
H.h(a,"$iC")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sU(-t*10*u)
r.a4()}},
au:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.at(0,u)
t.b.at(0,u)
t.fr=V.lX(t.b.d).t(0,V.lY(t.c.d))}return t.fr},
$iab:1}
U.ei.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.V():u},
H:function(a){var u=this.r
if(u!=null)u.F(a)},
b2:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.V():t
t=r.gfz()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.V():s).h(0,t)
return!0},
fA:function(a){var u,t,s,r,q=this
H.h(a,"$iC")
if(!J.Q(q.b,q.a.b.c))return
H.A(a,"$icI")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.N("zoom",u,r,[P.p])
u.b=!0
q.H(u)}},
au:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.m_(u,u,u,1)}return t.f},
$iab:1}
M.dA.prototype={
aw:function(a){var u
H.h(a,"$iC")
u=this.y
if(u!=null)u.F(a)},
eS:function(){return this.aw(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gan(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bX()
o.sai(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sai(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c_([n])
n.b=!0
this.aw(n)},
fQ:function(a,b){var u,t,s=E.ao
H.l(b,"$ij",[s],"$aj")
for(u=b.gT(b),t=this.gan();u.C();)u.gL(u).gB().N(0,t)
s=new D.c0([s])
s.b=!0
this.aw(s)},
sei:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().N(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gB().h(0,t.gan())
s=new D.N("technique",u,t.d,[O.c8])
s.b=!0
t.aw(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.V():u},
aV:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eb(a1.d)
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
o=C.c.aj(p*s)
p=q.b
if(typeof r!=="number")return H.E(r)
n=C.c.aj(p*r)
p=C.c.aj(q.c*s)
a2.c=p
q=C.c.aj(q.d*r)
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
a2.cy.ea(i)
t=$.m3
if(t==null){t=V.nZ()
q=V.mo()
p=$.ml
if(p==null)p=$.ml=new V.K(0,0,-1)
h=p.v(0,Math.sqrt(p.D(p)))
q=q.aA(h)
g=q.v(0,Math.sqrt(q.D(q)))
f=h.aA(g)
e=new V.K(t.a,t.b,t.c)
d=g.S(0).D(e)
c=f.S(0).D(e)
b=h.S(0).D(e)
t=V.ba(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m3=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.au(0,a2,u)
if(a0!=null)a=a0.t(0,a)}a2.db.ea(a)
u=a1.d
if(u!=null)u.at(0,a2)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.C();)u.d.at(0,a2)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.C();)u.d.aV(a2)
a1.b.toString
a2.cy.cu()
a2.db.cu()
a1.c.toString
a2.e9()},
sf7:function(a,b){this.e=H.l(b,"$ia6",[E.ao],"$aa6")},
$ipW:1}
A.dq.prototype={}
A.fp.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
it:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.an.prototype={
gak:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
u:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.an))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.ht.prototype={
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
A.p7(c3,u)
A.p9(c3,u)
A.p8(c3,u)
A.pb(c3,u)
A.pc(c3,u)
A.pa(c3,u)
A.pd(c3,u)
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
m=A.p6(b8.z)
b8.c=n
b8.d=m
b8.e=b8.d3(n,35633)
b8.f=b8.d3(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.ls(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.D("Failed to link shader: "+H.i(l)))}b8.hJ()
b8.hL()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.W(0,"invViewMat"),"$iaC")
if(t)b8.dy=H.A(b8.y.W(0,"objMat"),"$iaC")
if(r)b8.fr=H.A(b8.y.W(0,"viewObjMat"),"$iaC")
b8.fy=H.A(b8.y.W(0,"projViewObjMat"),"$iaC")
if(c3.ry)b8.k1=H.A(b8.y.W(0,"txt2DMat"),"$icZ")
if(c3.x1)b8.k2=H.A(b8.y.W(0,"txtCubeMat"),"$iaC")
if(c3.x2)b8.k3=H.A(b8.y.W(0,"colorMat"),"$iaC")
b8.sf3(H.c([],[A.aC]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.W(0,"bendMatCount"),"$iaM")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.D(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaC"))}}if(c3.a.a)b8.r2=H.A(b8.y.W(0,"emissionClr"),"$ia0")
if(c3.b.a)b8.x1=H.A(b8.y.W(0,"ambientClr"),"$ia0")
if(c3.c.a)b8.y2=H.A(b8.y.W(0,"diffuseClr"),"$ia0")
if(c3.d.a)b8.dG=H.A(b8.y.W(0,"invDiffuseClr"),"$ia0")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dI=H.A(b8.y.W(0,"shininess"),"$iai")
if(t)b8.dH=H.A(b8.y.W(0,"specularClr"),"$ia0")}if(c3.cy){b8.dJ=H.A(b8.y.W(0,"envSampler"),"$icc")
if(c3.r.a)b8.dK=H.A(b8.y.W(0,"reflectClr"),"$ia0")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dL=H.A(b8.y.W(0,"refraction"),"$iai")
if(t)b8.dM=H.A(b8.y.W(0,"refractClr"),"$ia0")}}if(c3.y.a)b8.dN=H.A(b8.y.W(0,"alpha"),"$iai")
t=P.m
s=[t,A.aM]
b8.sfd(new H.a3(s))
b8.seT(new H.a3([t,[P.b,A.c9]]))
b8.shs(new H.a3(s))
b8.sht(new H.a3([t,[P.b,A.ca]]))
b8.shO(new H.a3(s))
b8.seU(new H.a3([t,[P.b,A.cd]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c9],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ag()
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
H.A(b,"$icb")
a2=b}else a2=b9
C.a.h(e,new A.c9(a1,a0,a,j,c,a2))}b8.ce.k(0,g,e)
q=b8.cd
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaM"))}for(t=c3.Q,s=t.length,r=[A.ca],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.c([],r)
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
if(typeof g!=="number")return g.ag()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$icZ")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$icc")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.D(c0+o+c1))
H.A(a3,"$icc")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.D(c0+o+c1))
H.A(a5,"$icY")
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
b1=b0}C.a.h(e,new A.ca(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cg.k(0,g,e)
q=b8.cf
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaM"))}for(t=c3.ch,s=t.length,r=[A.cd],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.c([],r)
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
if(typeof g!=="number")return g.ag()
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
H.A(a5,"$icY")
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
H.A(a5,"$icb")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.D(c0+o+c1))
H.A(a5,"$icb")
a6=a5}else a6=b9
C.a.h(e,new A.cd(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.cj.k(0,g,e)
q=b8.ci
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.D(c0+o+c1))
q.k(0,g,H.h(j,"$iaM"))}}},
hH:function(a,b){},
sf3:function(a){this.r1=H.l(a,"$ib",[A.aC],"$ab")},
sfd:function(a){this.cd=H.l(a,"$iy",[P.m,A.aM],"$ay")},
seT:function(a){this.ce=H.l(a,"$iy",[P.m,[P.b,A.c9]],"$ay")},
shs:function(a){this.cf=H.l(a,"$iy",[P.m,A.aM],"$ay")},
sht:function(a){this.cg=H.l(a,"$iy",[P.m,[P.b,A.ca]],"$ay")},
shO:function(a){this.ci=H.l(a,"$iy",[P.m,A.aM],"$ay")},
seU:function(a){this.cj=H.l(a,"$iy",[P.m,[P.b,A.cd]],"$ay")}}
A.aF.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aI.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aJ.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hw.prototype={
i:function(a){return this.b6}}
A.c9.prototype={}
A.ca.prototype={}
A.cd.prototype={}
A.cR.prototype={
eK:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d3:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.ls(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.D("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hJ:function(){var u,t,s,r=this,q=H.c([],[A.dq]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dq(p,t.name,s))}r.x=new A.fp(q)},
hL:function(){var u,t,s,r=this,q=H.c([],[A.eb]),p=r.a,o=H.a4(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iq(t.type,t.size,t.name,s))}r.y=new A.iW(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.aM(u,b,c)
else return A.lg(u,this.r,b,a,c)},
fa:function(a,b,c){var u=this.a
if(a===1)return new A.cb(u,b,c)
else return A.lg(u,this.r,b,a,c)},
fb:function(a,b,c){var u=this.a
if(a===1)return new A.cc(u,b,c)
else return A.lg(u,this.r,b,a,c)},
bk:function(a,b){return new P.et(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iq:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.ai(u.a,c,d)
case 35664:return new A.iS(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.cY(u.a,c,d)
case 35667:return new A.iT(u.a,c,d)
case 35668:return new A.iU(u.a,c,d)
case 35669:return new A.iV(u.a,c,d)
case 35674:return new A.iX(u.a,c,d)
case 35675:return new A.cZ(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fa(b,c,d)
case 35680:return u.fb(b,c,d)
case 35670:throw H.d(u.bk("BOOL",c))
case 35671:throw H.d(u.bk("BOOL_VEC2",c))
case 35672:throw H.d(u.bk("BOOL_VEC3",c))
case 35673:throw H.d(u.bk("BOOL_VEC4",c))
default:throw H.d(P.D("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eb.prototype={}
A.iW.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aM.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si_:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ai.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cY.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cZ.prototype={
am:function(a){var u=new Float32Array(H.cg(H.l(a,"$ib",[P.p],"$ab")))
C.d.ep(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aC.prototype={
am:function(a){var u=new Float32Array(H.cg(H.l(a,"$ib",[P.p],"$ab")))
C.d.eq(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.cb.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.cc.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kj.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cp(s.b,b).cp(s.d.cp(s.c,b),c)
a.sZ(0,new V.a5(r.a,r.b,r.c))
a.sej(r.v(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdA(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kv.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kx.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sZ(0,new V.a5(s,u,q))
u=new V.K(s,u,q)
a.sej(u.v(0,Math.sqrt(u.D(u))))
a.sdA(new V.bc(1-c,2+c,-1,-1))},
$S:7}
F.ky.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kz.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kS.prototype={
$2:function(a,b){return 0},
$S:20}
F.kT.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.D(t))).t(0,this.b+s)
a.sZ(0,new V.a5(s.a,s.b,s.c))},
$S:7}
F.kV.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kG.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.kw.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lF(n.$1(o),m)
m=J.no(J.lF(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.D(m)))
n=$.mm
if(n==null){n=new V.K(1,0,0)
$.mm=n
t=n}else t=n
n=u.aA(!J.Q(u,t)?V.mp():t)
s=n.v(0,Math.sqrt(n.D(n)))
n=s.aA(u)
t=n.v(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
a.sZ(0,J.nn(l,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.N(u.a.a.d.b,u)
u.a.a.a_()}u.bW()
u.bX()
u.hy()},
c_:function(a){this.a=a
C.a.h(a.d.b,this)},
c0:function(a){this.b=a
C.a.h(a.d.c,this)},
hI:function(a){this.c=a
C.a.h(a.d.d,this)},
bW:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
bX:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
hy:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
f2:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d0()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dY())return
return s.v(0,Math.sqrt(s.D(s)))},
f6:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.D(r)))
r=t.q(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aA(r.v(0,Math.sqrt(r.D(r))))
return r.v(0,Math.sqrt(r.D(r)))},
c6:function(){var u,t=this
if(t.d!=null)return!0
u=t.f2()
if(u==null){u=t.f6()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
f1:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d0()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dY())return
return s.v(0,Math.sqrt(s.D(s)))},
f5:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.L().a){l=d.q(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.q(0,g).t(0,p).p(0,g).q(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.D(l)))
l=o.aA(q)
l=l.v(0,Math.sqrt(l.D(l))).aA(o)
q=l.v(0,Math.sqrt(l.D(l)))}return q},
c4:function(){var u,t=this
if(t.e!=null)return!0
u=t.f1()
if(u==null){u=t.f5()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gij:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gb5())return a+"disposed"
u=a+C.b.ad(J.as(s.a.e),0)+", "+C.b.ad(J.as(s.b.e),0)+", "+C.b.ad(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.fW.prototype={}
F.io.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bp.prototype={
b4:function(){var u=this
if(!u.gb5()){C.a.N(u.a.a.c.b,u)
u.a.a.a_()}u.bW()
u.bX()},
c_:function(a){this.a=a
C.a.h(a.c.b,this)},
c0:function(a){this.b=a
C.a.h(a.c.c,this)},
bW:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
bX:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gb5())return a+"disposed"
return a+C.b.ad(J.as(this.a.e),0)+", "+C.b.ad(J.as(this.b.e),0)},
O:function(){return this.G("")}}
F.hg.prototype={}
F.iQ.prototype={
b7:function(a,b,c){var u,t=b.a
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
F.bI.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ad(J.as(u.e),0)},
O:function(){return this.G("")}}
F.e1.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.V():u},
b8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.im())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bI()
if(n.a==null)H.z(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
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
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.p()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.p()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
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
F.cz(l,k,i)}g=h.e
if(g!=null)g.ae(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.ae(0)
return u},
iN:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.r(o,0)])
for(o=[F.aj];u.length!==0;){t=C.a.giB(u)
C.a.ec(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b7(0,t,q)){C.a.h(s,q)
C.a.ec(u,r)}}if(s.length>1)b.b8(s)}}p.a.w()
p.c.cA()
p.d.cA()
p.b.j5()
p.c.cB(new F.iQ())
p.d.cB(new F.io())
o=p.e
if(o!=null)o.ae(0)},
c1:function(){this.iN(new F.ji(),new F.hU())},
ck:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ck()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.e(o,u)
t=o[u]
o=t.r
if(o!=null)t.se_(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}o=p.e
if(o!=null)o.ae(0)},
ih:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bw()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bv().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.dk().a)!==0)++s
if((t&$.dl().a)!==0)++s
if((t&$.cr().a)!==0)++s
if((t&$.bt().a)!==0)++s
r=a3.gcK(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ds])
for(n=0,m=0;m<s;++m){l=a3.i9(m)
k=l.gcK(l)
C.a.k(o,m,new Z.ds(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iL(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cg(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dt(new Z.ek(a0,f),o,a3)
e.sfm(H.c([],[Z.bF]))
if(a.b.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.lj(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.lj(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.lj(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.F(null)},
$ipX:1}
F.ig.prototype={
i3:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cz(s,p,o))}}return u},
i4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aj],"$ab")
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
C.a.h(u,F.cz(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cz(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cB:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b7(0,p,n)){p.b4()
break}}}}},
cA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gij(s)
if(t)s.b4()}},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c6())s=!1
return s},
c5:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c4())s=!1
return s},
ck:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.F(null)}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sfh:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.ih.prototype={
gn:function(a){return this.b.length},
cB:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b7(0,p,n)){p.b4()
break}}}}},
cA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.O()},
G:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.G("")},
sfn:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")}}
F.ii.prototype={
gn:function(a){return this.b.length},
j5:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
G:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
O:function(){return this.G("")},
sbT:function(a){this.b=H.l(a,"$ib",[F.bI],"$ab")}}
F.aj.prototype={
c9:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ej(u.cx,r,o,t,s,q,p,a,n)},
im:function(){return this.c9(null)},
sZ:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
se_:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.D(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sej:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdA:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iL:function(a){var u,t,s=this
if(a.u(0,$.bw())){u=s.f
t=[P.p]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bv())){u=s.r
t=[P.p]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bu())){u=s.x
t=[P.p]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bR())){u=s.y
t=[P.p]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.u(0,$.bS())){u=s.z
t=[P.p]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.dk())){u=s.Q
t=[P.p]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.dl())){u=s.Q
t=[P.p]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cr()))return H.c([s.ch],[P.p])
else if(a.u(0,$.bt())){u=s.cx
t=[P.p]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.p])},
c6:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.I(0,new F.jn(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ae(0)}return!0},
c4:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d0()
t.d.I(0,new F.jm(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ae(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
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
C.a.h(q,V.P(s.ch,3,0))
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
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
i5:function(a,b,c,d,e,f){var u=F.ej(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c6()
return!0},
c5:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c4()
return!0},
ii:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var u,t,s,r
this.w()
u=H.c([],[P.f])
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
O:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfi:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sfj:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sfk:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
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
O:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfo:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")},
sfp:function(a){this.c=H.l(a,"$ib",[F.bp],"$ab")}}
F.jj.prototype={}
F.ji.prototype={
b7:function(a,b,c){return J.Q(b.f,c.f)}}
F.jk.prototype={}
F.hU.prototype={
b8:function(a){var u,t,s,r
H.l(a,"$ib",[F.aj],"$ab")
u=V.d0()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].se_(u)
return}}
F.jl.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sbT:function(a){this.b=H.l(a,"$ib",[F.bI],"$ab")}}
O.dM.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.V():u},
aa:function(a){var u
H.h(a,"$iC")
u=this.fr
if(u!=null)u.F(a)},
fM:function(){return this.aa(null)},
di:function(a){H.h(a,"$iC")
this.a=null
this.aa(a)},
hD:function(){return this.di(null)},
fG:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c_([u])
u.b=!0
this.aa(u)},
fI:function(a,b){var u=V.ap
H.l(b,"$ij",[u],"$aj")
u=new D.c0([u])
u.b=!0
this.aa(u)},
d0:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a3([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.c([],[A.aF])
h.I(0,new O.hA(j,q))
C.a.by(q,new O.hB())
p=new H.a3([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gb3()
n=p.j(0,o.gb3())
p.k(0,r,n==null?1:n)}m=H.c([],[A.aI])
p.I(0,new O.hC(j,m))
C.a.by(m,new O.hD())
l=new H.a3([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gb3()
r=l.j(0,o.gb3())
l.k(0,t,r==null?1:r)}k=H.c([],[A.aJ])
l.I(0,new O.hE(j,k))
C.a.by(k,new O.hF())
i=C.e.a6(j.e.a.length+3,4)
j.dy.e
return A.nX(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
f0:function(a,b){H.l(a,"$ib",[T.e7],"$ab")},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ax(u,u.length,[H.r(u,0)]);u.C();){t=u.d
t.toString
s=$.jc
t.a=s==null?$.jc=new V.K(0,0,1):s
s=$.jb
t.d=s==null?$.jb=new V.K(0,1,0):s
s=$.ja
t.e=s==null?$.ja=new V.K(-1,0,0):s
s=t.b
if(s!=null){r=s.au(0,b,t)
if(r!=null){s=r.bt(t.a)
q=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(q*q+p*p+o*o))
o=r.bt(t.d)
p=o.a
q=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+q*q+s*s))
s=r.bt(t.e)
q=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(q*q+p*p+o*o))}}}},
j7:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.d0()
u=b6.fr.j(0,b5.b6)
if(u==null){u=A.nW(b5,b6.a)
t=u.b
if(t.length===0)H.z(P.D("May not cache a shader with no name."))
if(b6.fr.bm(0,t))H.z(P.D('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dF
b5=b7.e
if(!(b5 instanceof Z.dt))b5=b7.e=null
if(b5==null||!b5.d.u(0,r)){b5=s.k3
if(b5)b7.d.ar()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.c5()
p.a.c5()
p=p.e
if(p!=null)p.ae(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.ii()
o=o.e
if(o!=null)o.ae(0)}m=b7.d.ih(new Z.jp(b6.a),r)
m.aU($.bw()).e=b4.a.Q.c
if(b5)m.aU($.bv()).e=b4.a.cx.c
if(q)m.aU($.bu()).e=b4.a.ch.c
if(s.r1)m.aU($.bR()).e=b4.a.cy.c
if(p)m.aU($.bS()).e=b4.a.db.c
if(s.rx)m.aU($.bt()).e=b4.a.dx.c
b7.e=m}b5=T.e7
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iw()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga0(o)
q=q.dy
q.toString
q.am(o.af(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga0(o)
n=b6.dx
n=b6.cx=o.t(0,n.ga0(n))
o=n}q=q.fr
q.toString
q.am(o.af(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gj3()
n=b6.dx
n=b6.ch=o.t(0,n.ga0(n))
o=n}q=q.fy
q.toString
q.am(o.af(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.am(C.i.af(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.am(C.i.af(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.am(C.i.af(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.d.bu(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.e(n,j)
n=n[j]
o.toString
H.h(n,"$iap")
o=o.r1
if(j>=o.length)return H.e(o,j)
o=o[j]
i=new Float32Array(H.cg(H.l(n.af(0,!0),"$ib",q,"$ab")))
C.d.eq(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.d.Y(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.d.Y(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.d.Y(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dG
C.d.Y(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dI
C.d.a3(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dH
C.d.Y(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
g=new H.a3([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.dm(b4.a.ce.j(0,0),d)
b=h.bt(e.a)
a=b.a
a0=b.b
a1=b.c
a1=b.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.d.Y(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.d.Y(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.u)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.cd.j(0,n)
C.d.bu(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
a2=new H.a3([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.p],f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
a3=e.gb3()
d=a2.j(0,a3)
if(d==null)d=0
a2.k(0,a3,d+1)
c=J.dm(b4.a.cg.j(0,a3),d)
a4=h.t(0,e.ga0(e))
a0=e.ga0(e)
a1=$.cO
a0=a0.cE(a1==null?$.cO=new V.a5(0,0,0):a1)
a1=c.b
C.d.Y(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cO
a0=a4.cE(a0==null?$.cO=new V.a5(0,0,0):a0)
a1=c.c
C.d.Y(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaT(e)
a1=c.e
C.d.Y(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gaH()
a0=a4.dX(0)
a1=a0.a
a5=a0.b
a6=a0.c
a7=a0.e
a8=a0.f
a9=a0.r
b0=a0.y
b1=a0.z
a0=a0.Q
b2=c.d
b2.toString
i=new Float32Array(H.cg(H.l(new V.dO(a1,a5,a6,a7,a8,a9,b0,b1,a0).af(0,!0),"$ib",a,"$ab")))
C.d.ep(b2.a,b2.d,!1,i)
e.gaH()
a0=e.gaH()
H.l(l,"$ib",b,"$ab")
if(!C.a.V(l,a0)){a0.saC(0,l.length)
C.a.h(l,a0)}a0=e.gaH()
a1=a0.gaD(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gaD(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaC(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaX()
a0=e.gez()
a1=c.x
a1.toString
a5=a0.gcb(a0)
a6=a0.gcc(a0)
a7=a0.giv()
a0=a0.giu()
C.d.eo(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaX()
if(!C.a.V(l,a0)){a0.saC(0,l.length)
C.a.h(l,a0)}a0=e.gaX()
a1=a0.gaD(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gaD(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gaC(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.gix()){a0=e.gia()
a1=c.y
C.d.a3(a1.a,a1.d,a0)
a0=e.gib()
a1=c.z
C.d.a3(a1.a,a1.d,a0)
a0=e.gic()
a1=c.Q
C.d.a3(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.u)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.cf.j(0,n)
C.d.bu(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga0(o)
o=P.m
b3=new H.a3([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.u)(o),++f){e=o[f]
a3=e.gb3()
d=b3.j(0,a3)
if(d==null)d=0
b3.k(0,a3,d+1)
c=J.dm(b4.a.cj.j(0,a3),d)
b=e.gj2(e)
a=c.b
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gjp(e).jH()
a=c.c
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=h.cE(e.gj2(e))
a=c.d
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gaT(e)
a=c.e
C.d.Y(a.a,a.d,b.a,b.b,b.c)
e.gaH()
b=e.gcF()
a=c.f
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gcC(e)
a=c.r
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=e.gjI()
a=c.x
C.d.a3(a.a,a.d,b)
b=e.gjJ()
a=c.y
C.d.a3(a.a,a.d,b)
e.gaH()
b=e.gaH()
H.l(l,"$ib",b5,"$ab")
if(!C.a.V(l,b)){b.saC(0,l.length)
C.a.h(l,b)}b=e.gaH()
a=b.gaD(b)
if(a){a=c.dx
a.toString
a0=b.gaD(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaC(b)
a.a.uniform1i(a.d,b)}}e.gaX()
b=e.gez()
a=c.z
a.toString
a0=b.gcb(b)
a1=b.gcc(b)
a5=b.giv()
b=b.giu()
C.d.eo(a.a,a.d,a0,a1,a5,b)
b=e.gaX()
if(!C.a.V(l,b)){b.saC(0,l.length)
C.a.h(l,b)}b=e.gaX()
a=b.gaD(b)
if(a){a=c.dy
a.toString
a0=b.gaD(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gaC(b)
a.a.uniform1i(a.d,b)}}if(e.gjq()){b=e.gjo()
a=c.Q
C.d.a3(a.a,a.d,b)
b=e.gjn()
a=c.ch
C.d.a3(a.a,a.d,b)}if(e.gix()){b=e.gia()
a=c.cx
C.d.a3(a.a,a.d,b)
b=e.gib()
a=c.cy
C.d.a3(a.a,a.d,b)
b=e.gic()
a=c.db
C.d.a3(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.u)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.ci.j(0,o)
C.d.bu(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga0(q).dX(0)}b5=b5.id
b5.toString
b5.am(q.af(0,!0))}if(s.cy){b4.f0(l,b4.ch)
b5=b4.a
q=b4.ch
b5.hH(b5.dJ,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.dK
C.d.Y(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dL
C.d.a3(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dM
C.d.Y(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dN
C.d.a3(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bl(b6)
b5=b7.e
b5.bl(b6)
b5.aV(b6)
b5.en(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].en(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.it()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d0().b6},
sf4:function(a){this.e=H.l(a,"$ia6",[V.ap],"$aa6")}}
O.hA.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aF(a,C.e.a6(b+3,4)*4))},
$S:11}
O.hB.prototype={
$2:function(a,b){H.h(a,"$iaF")
H.h(b,"$iaF")
return J.kZ(a.a,b.a)},
$S:50}
O.hC.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.e.a6(b+3,4)*4))},
$S:11}
O.hD.prototype={
$2:function(a,b){H.h(a,"$iaI")
H.h(b,"$iaI")
return J.kZ(a.a,b.a)},
$S:51}
O.hE.prototype={
$2:function(a,b){H.a4(a)
H.a4(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aJ(a,C.e.a6(b+3,4)*4))},
$S:11}
O.hF.prototype={
$2:function(a,b){H.h(a,"$iaJ")
H.h(b,"$iaJ")
return J.kZ(a.a,b.a)},
$S:52}
O.hu.prototype={
ay:function(){var u,t=this
t.cM()
u=t.f
if(!(Math.abs(u-1)<$.L().a)){t.f=1
u=new D.N(t.b,u,1,[P.p])
u.b=!0
t.a.aa(u)}}}
O.dN.prototype={
ay:function(){},
dl:function(a){var u,t,s=this
if(!s.c.u(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ay()
u=s.a
u.a=null
u.aa(null)}}}
O.hv.prototype={}
O.b9.prototype={
dk:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.N(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.aa(t)}},
ay:function(){this.cM()
this.dk(new V.a2(1,1,1))},
saT:function(a,b){this.dl(new A.an(!0,!1,!1))
this.dk(b)}}
O.hx.prototype={}
O.hy.prototype={
ay:function(){var u,t=this
t.cN()
u=t.ch
if(!(Math.abs(u-1)<$.L().a)){t.ch=1
u=new D.N(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.aa(u)}}}
O.hz.prototype={
dm:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.L().a)){u.ch=a
t=new D.N(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.aa(t)}},
ay:function(){this.cN()
this.dm(100)}}
O.c8.prototype={}
T.e7.prototype={}
V.bk.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dL.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.l(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.at.prototype={
aE:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.cL(0)+"]"}}
V.i5.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c4(this.a),t=H.c4(this.b)
return u+".."+t},
$iaz:1}
V.ie.prototype={
eJ:function(a){var u,t
if(a.a.length<=0)throw H.d(P.D("May not create a SetMatcher with zero characters."))
u=new H.a3([P.m,P.T])
for(t=new H.cF(a,a.gn(a),[H.ar(a,"x",0)]);t.C();)u.k(0,t.d,!0)
this.shG(u)},
aE:function(a,b){return this.a.bm(0,b)},
i:function(a){var u=this.a
return P.cU(u.ga2(u),0,null)},
shG:function(a){this.a=H.l(a,"$iy",[P.m,P.T],"$ay")},
$iaz:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cX(this.a.l(0,b))
r.sa5(H.c([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
shZ:function(a){this.c=H.l(a,"$ib",[V.cX],"$ab")}}
V.e9.prototype={
i:function(a){var u=H.lB(this.b,"\n","\\n"),t=H.lB(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cW.prototype={
aG:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shz:function(a){var u=P.f
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.iH.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.shZ(H.c([],[V.cX]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cW(a)
u=P.f
t.shz(new H.a3([u,u]))
this.b.k(0,a,t)}return t},
em:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.e9]),k=this.c,j=[P.m],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.E(a,s)
q=k.iA(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cU(i,0,m)
throw H.d(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cU(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e9(n==null?o.b:n,p,s)}++s}}},
shQ:function(a){this.a=H.l(a,"$iy",[P.f,V.cS],"$ay")},
shS:function(a){this.b=H.l(a,"$iy",[P.f,V.cW],"$ay")}}
V.cX.prototype={
i:function(a){return this.b.b+": "+this.cL(0)}}
X.dv.prototype={$icJ:1}
X.h2.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.V():u}}
X.dV.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.V():u},
aM:function(a){var u
H.h(a,"$iC")
u=this.f
if(u!=null)u.F(a)},
eY:function(){return this.aM(null)},
sb9:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gB().N(0,s.gcR())
t=s.b
s.b=a
if(a!=null)a.gB().h(0,s.gcR())
u=new D.N("mover",t,s.b,[U.ab])
u.b=!0
s.aM(u)}},
$icJ:1,
$idv:1}
X.e6.prototype={}
V.bA.prototype={
bg:function(a){this.b=new P.h6(C.Q)
this.c=null
this.sbI(H.c([],[[P.b,W.aG]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aG]))
u=a.split("\n")
for(l=u.length,t=[W.aG],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.f9(q,0,q.length)
n=o==null?q:o
C.O.ey(p,H.lB(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gas(m.d),p)}},
e6:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.f],"$ab")
q.sbI(H.c([],[[P.b,W.aG]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).em(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.br(t[r])},
sbI:function(a){this.d=H.l(a,"$ib",[[P.b,W.aG]],"$ab")}}
V.kR.prototype={
$1:function(a){var u
H.h(a,"$ibe")
u=C.c.el(this.a.giE(),2)
if(u!=="0.00")P.lA(u+" fps")},
$S:53}
V.fJ.prototype={
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iI()
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
t=new V.at()
s=[V.az]
t.sa5(H.c([],s))
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
t=new V.at()
t.sa5(H.c([],s))
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
t.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h3.prototype={
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iI()
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
t=new V.at()
s=[V.az]
t.sa5(H.c([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.at()
u.sa5(H.c([],s))
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
u.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.h4.prototype={
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
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iI()
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
t=new V.at()
t.sa5(H.c([],[V.az]))
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
t.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.i_.prototype={
e6:function(a,b){H.l(b,"$ib",[P.f],"$ab")
this.sbI(H.c([],[[P.b,W.aG]]))
this.M(C.a.m(b,"\n"),"#111")},
br:function(a){},
bn:function(){return}}
V.i3.prototype={
du:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mh().gcw().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.ds(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lH(m.c).h(0,q)
o=W.nK("radio")
o.checked=s
o.name=u
u=W.o
W.ac(o,"change",H.n(new V.i4(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lH(m.c).h(0,r.createElement("br"))},
b1:function(a,b,c){return this.du(a,b,c,!1)},
ds:function(a){var u,t,s=P.mh(),r=P.f,q=P.nS(s.gcw(),r,r)
q.k(0,this.a,a)
u=s.ed(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k2([],[]).cG(""),"",t)}}
V.i4.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.ds(u.d)}},
$S:15}
V.ij.prototype={
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
W.ac(q,"scroll",H.n(new V.il(o),{func:1,ret:-1,args:[r]}),!1,r)},
dw:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.f],"$ab")
this.hK()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.em(C.a.iK(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
t.appendChild(l)}else{k=P.f4(C.y,n,C.h,!1)
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
ev:function(a){var u,t,s,r=new V.fJ("dart")
r.bg("dart")
u=new V.h3("glsl")
u.bg("glsl")
t=new V.h4("html")
t.bg("html")
s=C.a.iC(H.c([r,u,t],[V.bA]),new V.im(a))
if(s!=null)return s
r=new V.i_("plain")
r.bg("plain")
return r},
dv:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dj(r).a1(r,"+")){C.a.k(b0,s,C.b.a7(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a1(r,"-")){C.a.k(b0,s,C.b.a7(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ev(a8)
q.e6(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f4(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lJ()
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
u=V.iI()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.at()
r=[V.az]
s.sa5(H.c([],r))
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
s=new V.at()
s.sa5(H.c([],r))
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
s=new V.at()
s.sa5(H.c([],r))
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
t=new V.at()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.at()
t.sa5(H.c([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bk())
s=u.l(0,i).m(0,i)
t=new V.at()
t.sa5(H.c([],r))
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
V.il.prototype={
$1:function(a){P.md(C.o,new V.ik(this.a))},
$S:15}
V.ik.prototype={
$0:function(){var u=C.c.aj(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.im.prototype={
$1:function(a){return H.h(a,"$ibA").a===this.a},
$S:55}
U.kI.prototype={
$0:function(){this.a.sah(0,F.lw(1,null,null,1))},
$S:0}
U.kJ.prototype={
$0:function(){this.a.sah(0,F.mM(!0,40,1))},
$S:0}
U.kK.prototype={
$0:function(){this.a.sah(0,F.mM(!1,40,0))},
$S:0}
U.kL.prototype={
$0:function(){this.a.sah(0,F.pL(6,6))},
$S:0}
U.kM.prototype={
$0:function(){this.a.sah(0,F.n2())},
$S:0}
U.kN.prototype={
$0:function(){this.a.sah(0,F.pD())},
$S:0}
U.kO.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iC")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dv("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dv("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eB=u.i
u=J.dF.prototype
u.eD=u.i
u=P.j.prototype
u.eC=u.bv
u=W.U.prototype
u.bz=u.ab
u=W.eO.prototype
u.eF=u.aq
u=O.dN.prototype
u.cM=u.ay
u=O.b9.prototype
u.cN=u.ay
u=V.dL.prototype
u.eE=u.aE
u.cL=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pk","ou",12)
u(P,"pl","ov",12)
u(P,"pm","ow",12)
t(P,"mL","pi",3)
s(W,"pw",4,null,["$4"],["oy"],28,0)
s(W,"px",4,null,["$4"],["oz"],28,0)
var m
r(m=E.ao.prototype,"ge4",0,0,null,["$1","$0"],["e5","iV"],1,0)
r(m,"ge2",0,0,null,["$1","$0"],["e3","iU"],1,0)
r(m,"ge0",0,0,null,["$1","$0"],["e1","iR"],1,0)
q(m,"giP","iQ",9)
q(m,"giS","iT",9)
r(m=E.e8.prototype,"gcO",0,0,null,["$1","$0"],["cQ","cP"],1,0)
p(m,"gj9","ee",3)
o(m=X.ef.prototype,"gfX","fY",14)
o(m,"gfJ","fK",14)
o(m,"gfR","fS",4)
o(m,"gh0","h1",31)
o(m,"gfZ","h_",31)
o(m,"gh4","h5",4)
o(m,"gh8","h9",4)
o(m,"gfV","fW",4)
o(m,"gh6","h7",4)
o(m,"gfT","fU",4)
o(m,"gha","hb",36)
o(m,"ghc","hd",14)
o(m,"ghp","hq",13)
o(m,"ghl","hm",13)
o(m,"ghn","ho",13)
r(D.bC.prototype,"geQ",0,0,null,["$1","$0"],["av","eR"],1,0)
r(m=D.dH.prototype,"gdd",0,0,null,["$1","$0"],["de","h2"],1,0)
o(m,"ghf","hg",38)
q(m,"gfD","fE",26)
q(m,"ghj","hk",26)
n(V.W.prototype,"gn","co",24)
n(V.K.prototype,"gn","co",24)
r(m=U.cC.prototype,"gaL",0,0,null,["$1","$0"],["H","a4"],1,0)
q(m,"gfB","fC",21)
q(m,"ghh","hi",21)
r(m=U.eg.prototype,"gaL",0,0,null,["$1","$0"],["H","a4"],1,0)
o(m,"gbL","bM",2)
o(m,"gbN","bO",2)
o(m,"gbP","bQ",2)
r(m=U.eh.prototype,"gaL",0,0,null,["$1","$0"],["H","a4"],1,0)
o(m,"gbL","bM",2)
o(m,"gbN","bO",2)
o(m,"gbP","bQ",2)
o(m,"gfs","ft",2)
o(m,"gfu","fv",2)
o(m,"ghX","hY",2)
o(m,"ghV","hW",2)
o(m,"ghT","hU",2)
o(U.ei.prototype,"gfz","fA",2)
r(m=M.dA.prototype,"gan",0,0,null,["$1","$0"],["aw","eS"],1,0)
q(m,"gfN","fO",9)
q(m,"gfP","fQ",9)
r(m=O.dM.prototype,"gfL",0,0,null,["$1","$0"],["aa","fM"],1,0)
r(m,"ghC",0,0,null,["$1","$0"],["di","hD"],1,0)
q(m,"gfF","fG",33)
q(m,"gfH","fI",33)
r(X.dV.prototype,"gcR",0,0,null,["$1","$0"],["aM","eY"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.l8,J.a,J.ax,P.eB,P.j,H.cF,P.b6,H.bY,H.d_,H.fC,H.iN,P.bD,H.cv,H.eT,P.ae,H.hh,H.hj,H.hc,P.eZ,P.bi,P.aO,P.el,P.iv,P.cT,P.iw,P.be,P.am,P.ki,P.jX,P.ce,P.eA,P.x,P.ka,P.hp,P.bW,P.h7,P.kg,P.kf,P.T,P.ay,P.aa,P.b5,P.hY,P.e4,P.et,P.h1,P.bE,P.b,P.y,P.O,P.au,P.f,P.ah,P.cf,P.j1,P.k_,W.fF,W.bN,W.H,W.dT,W.eO,W.k5,W.dC,W.aB,W.jW,W.f5,P.k1,P.jR,P.S,O.a6,O.cG,E.fw,E.ao,E.i6,E.e8,Z.ek,Z.jp,Z.dt,Z.bF,Z.bM,D.fz,D.bX,D.C,X.du,X.dG,X.he,X.hm,X.aA,X.hM,X.iJ,X.ef,D.bC,D.ad,D.dW,D.e3,V.a2,V.aE,V.fT,V.dO,V.ap,V.a9,V.a5,V.bc,V.dZ,V.W,V.K,U.eg,U.eh,U.ei,M.dA,A.dq,A.fp,A.an,A.aF,A.aI,A.aJ,A.hw,A.c9,A.ca,A.cd,A.eb,A.iW,F.a8,F.fW,F.bp,F.hg,F.bI,F.e1,F.ig,F.ih,F.ii,F.aj,F.jd,F.je,F.jh,F.jj,F.jk,F.jl,O.c8,O.dN,O.hx,V.bk,V.az,V.dL,V.i5,V.ie,V.cS,V.e9,V.cW,V.iH,X.dv,X.e6,X.dV,V.bA,V.i3,V.ij])
s(J.a,[J.ha,J.dE,J.dF,J.aS,J.bG,J.bn,H.cK,H.bH,W.k,W.fl,W.bU,W.b3,W.b4,W.Y,W.en,W.fK,W.fL,W.ep,W.dz,W.er,W.fN,W.o,W.eu,W.aR,W.h5,W.ew,W.cD,W.dJ,W.hG,W.eC,W.eD,W.aT,W.eE,W.eH,W.aU,W.eL,W.eN,W.aW,W.eP,W.aX,W.eU,W.aK,W.eX,W.iG,W.aZ,W.f_,W.iL,W.j6,W.f6,W.f8,W.fa,W.fc,W.fe,P.b8,P.ey,P.bb,P.eJ,P.i2,P.eV,P.bf,P.f1,P.fq,P.em,P.dr,P.dX,P.c6,P.e0,P.ec,P.eR])
s(J.dF,[J.hZ,J.bL,J.bo])
t(J.l7,J.aS)
s(J.bG,[J.dD,J.hb])
t(P.hl,P.eB)
s(P.hl,[H.ed,W.jx,W.aq,P.fY])
t(H.t,H.ed)
s(P.j,[H.fQ,H.hq,H.d1])
s(H.fQ,[H.c1,H.hi])
s(P.b6,[H.hr,H.jq])
t(H.hs,H.c1)
t(H.fD,H.fC)
s(P.bD,[H.hV,H.hd,H.j_,H.iP,H.fy,H.ic,P.fo,P.dU,P.aQ,P.j0,P.iY,P.c7,P.fB,P.fI])
s(H.cv,[H.kW,H.iC,H.kC,H.kD,H.kE,P.jt,P.js,P.ju,P.jv,P.k9,P.k8,P.jE,P.jI,P.jF,P.jG,P.jH,P.jL,P.jM,P.jK,P.jJ,P.ix,P.iy,P.ks,P.jU,P.jT,P.jV,P.hk,P.ho,P.fO,P.fP,P.j5,P.j2,P.j3,P.j4,P.kb,P.kc,P.ke,P.kd,P.km,P.kl,P.kn,P.ko,W.fR,W.hI,W.hK,W.ib,W.iu,W.jD,W.hT,W.hS,W.jY,W.jZ,W.k7,W.kh,P.k3,P.ku,P.fZ,P.h_,P.fs,E.i7,E.i8,E.i9,E.iF,D.fU,D.fV,F.kj,F.kv,F.kx,F.ky,F.kz,F.kS,F.kT,F.kV,F.kG,F.kw,F.jn,F.jm,F.jf,F.jg,O.hA,O.hB,O.hC,O.hD,O.hE,O.hF,V.kR,V.i4,V.il,V.ik,V.im,U.kI,U.kJ,U.kK,U.kL,U.kM,U.kN,U.kO])
s(H.iC,[H.is,H.ct])
t(H.jr,P.fo)
t(P.hn,P.ae)
s(P.hn,[H.a3,W.jw])
t(H.dQ,H.bH)
s(H.dQ,[H.d6,H.d8])
t(H.d7,H.d6)
t(H.cL,H.d7)
t(H.d9,H.d8)
t(H.dR,H.d9)
s(H.dR,[H.hN,H.hO,H.hP,H.hQ,H.hR,H.dS,H.cM])
t(P.jS,P.ki)
t(P.jQ,P.jX)
t(P.f3,P.hp)
t(P.ee,P.f3)
s(P.bW,[P.fu,P.fS])
t(P.bB,P.iw)
s(P.bB,[P.fv,P.h6,P.j9,P.j8])
t(P.j7,P.fS)
s(P.aa,[P.p,P.m])
s(P.aQ,[P.c5,P.h8])
t(P.jz,P.cf)
s(W.k,[W.G,W.fX,W.cH,W.aV,W.da,W.aY,W.aL,W.dc,W.jo,W.d2,P.ft,P.bT])
s(W.G,[W.U,W.bz,W.d3])
s(W.U,[W.v,P.q])
s(W.v,[W.dp,W.fm,W.cs,W.by,W.bV,W.aG,W.h0,W.cE,W.id,W.bd,W.e5,W.iA,W.iB,W.cV])
s(W.b3,[W.cw,W.fG,W.fH])
t(W.fE,W.b4)
t(W.cx,W.en)
t(W.eq,W.ep)
t(W.dy,W.eq)
t(W.es,W.er)
t(W.fM,W.es)
t(W.aH,W.bU)
t(W.ev,W.eu)
t(W.cA,W.ev)
t(W.ex,W.ew)
t(W.bZ,W.ex)
t(W.bK,W.o)
s(W.bK,[W.b7,W.af,W.b_])
t(W.hH,W.eC)
t(W.hJ,W.eD)
t(W.eF,W.eE)
t(W.hL,W.eF)
t(W.eI,W.eH)
t(W.cN,W.eI)
t(W.eM,W.eL)
t(W.i0,W.eM)
t(W.ia,W.eN)
t(W.db,W.da)
t(W.ip,W.db)
t(W.eQ,W.eP)
t(W.iq,W.eQ)
t(W.it,W.eU)
t(W.eY,W.eX)
t(W.iD,W.eY)
t(W.dd,W.dc)
t(W.iE,W.dd)
t(W.f0,W.f_)
t(W.iK,W.f0)
t(W.bh,W.af)
t(W.f7,W.f6)
t(W.jy,W.f7)
t(W.eo,W.dz)
t(W.f9,W.f8)
t(W.jN,W.f9)
t(W.fb,W.fa)
t(W.eG,W.fb)
t(W.fd,W.fc)
t(W.k0,W.fd)
t(W.ff,W.fe)
t(W.k4,W.ff)
t(W.jA,W.jw)
t(W.jB,P.iv)
t(W.lk,W.jB)
t(W.jC,P.cT)
t(W.k6,W.eO)
t(P.k2,P.k1)
t(P.al,P.jR)
t(P.ez,P.ey)
t(P.hf,P.ez)
t(P.eK,P.eJ)
t(P.hW,P.eK)
t(P.cQ,P.q)
t(P.eW,P.eV)
t(P.iz,P.eW)
t(P.f2,P.f1)
t(P.iM,P.f2)
t(P.fr,P.em)
t(P.hX,P.bT)
t(P.eS,P.eR)
t(P.ir,P.eS)
s(E.fw,[Z.ds,A.cR,T.e7])
s(D.C,[D.c_,D.c0,D.N,X.i1])
s(X.i1,[X.dK,X.bq,X.cI,X.ea])
s(O.a6,[D.dH,U.cC])
s(D.fz,[U.fA,U.ab])
s(U.ab,[U.dw,U.e_])
t(A.ht,A.cR)
s(A.eb,[A.aM,A.iT,A.iU,A.iV,A.iR,A.ai,A.iS,A.a0,A.cY,A.iX,A.cZ,A.aC,A.cb,A.cc])
t(F.io,F.fW)
t(F.iQ,F.hg)
t(F.ji,F.jj)
t(F.hU,F.jk)
t(O.dM,O.c8)
s(O.dN,[O.hu,O.hv,O.b9])
s(O.b9,[O.hy,O.hz])
s(V.dL,[V.at,V.cX])
t(X.h2,X.e6)
s(V.bA,[V.fJ,V.h3,V.h4,V.i_])
u(H.ed,H.d_)
u(H.d6,P.x)
u(H.d7,H.bY)
u(H.d8,P.x)
u(H.d9,H.bY)
u(P.eB,P.x)
u(P.f3,P.ka)
u(W.en,W.fF)
u(W.ep,P.x)
u(W.eq,W.H)
u(W.er,P.x)
u(W.es,W.H)
u(W.eu,P.x)
u(W.ev,W.H)
u(W.ew,P.x)
u(W.ex,W.H)
u(W.eC,P.ae)
u(W.eD,P.ae)
u(W.eE,P.x)
u(W.eF,W.H)
u(W.eH,P.x)
u(W.eI,W.H)
u(W.eL,P.x)
u(W.eM,W.H)
u(W.eN,P.ae)
u(W.da,P.x)
u(W.db,W.H)
u(W.eP,P.x)
u(W.eQ,W.H)
u(W.eU,P.ae)
u(W.eX,P.x)
u(W.eY,W.H)
u(W.dc,P.x)
u(W.dd,W.H)
u(W.f_,P.x)
u(W.f0,W.H)
u(W.f6,P.x)
u(W.f7,W.H)
u(W.f8,P.x)
u(W.f9,W.H)
u(W.fa,P.x)
u(W.fb,W.H)
u(W.fc,P.x)
u(W.fd,W.H)
u(W.fe,P.x)
u(W.ff,W.H)
u(P.ey,P.x)
u(P.ez,W.H)
u(P.eJ,P.x)
u(P.eK,W.H)
u(P.eV,P.x)
u(P.eW,W.H)
u(P.f1,P.x)
u(P.f2,W.H)
u(P.em,P.ae)
u(P.eR,P.x)
u(P.eS,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.by.prototype
C.n=W.bV.prototype
C.O=W.aG.prototype
C.R=J.a.prototype
C.a=J.aS.prototype
C.e=J.dD.prototype
C.i=J.dE.prototype
C.c=J.bG.prototype
C.b=J.bn.prototype
C.S=J.bo.prototype
C.Y=W.cN.prototype
C.B=J.hZ.prototype
C.d=P.c6.prototype
C.Z=W.bd.prototype
C.C=W.e5.prototype
C.r=J.bL.prototype
C.D=W.bh.prototype
C.E=W.d2.prototype
C.a_=new P.fv()
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

C.M=new P.hY()
C.h=new P.j7()
C.N=new P.j9()
C.f=new P.jS()
C.o=new P.b5(0)
C.P=new P.b5(5e6)
C.Q=new P.h7("element",!0,!1,!1,!1)
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
C.X=new H.fD(0,{},C.x,[P.f,P.f])})()
var v={mangledGlobalNames:{m:"int",p:"double",aa:"num",f:"String",T:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.C]},{func:1,ret:-1,args:[D.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.aj,P.p,P.p]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.m,[P.j,E.ao]]},{func:1,ret:P.O,args:[D.C]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.O,args:[W.o]},{func:1,ret:V.a5,args:[P.p]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.j,U.ab]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.p},{func:1,args:[,]},{func:1,ret:-1,args:[P.m,[P.j,D.ad]]},{func:1,ret:P.T,args:[W.G]},{func:1,ret:P.T,args:[W.U,P.f,P.f,W.bN]},{func:1,ret:P.T,args:[W.aB]},{func:1,ret:P.T,args:[P.f]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:-1,args:[P.m,[P.j,V.ap]]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[W.bh]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[[P.j,D.ad]]},{func:1,ret:P.S,args:[,,]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aO,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.au]},{func:1,ret:P.S,args:[P.m]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.m,args:[A.aF,A.aF]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,ret:P.m,args:[A.aJ,A.aJ]},{func:1,ret:P.O,args:[P.be]},{func:1,args:[P.f]},{func:1,ret:P.T,args:[V.bA]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b2=0
$.cu=null
$.lL=null
$.lo=!1
$.mT=null
$.mJ=null
$.n_=null
$.kA=null
$.kF=null
$.ly=null
$.ch=null
$.dh=null
$.di=null
$.lp=!1
$.a1=C.f
$.av=[]
$.bm=null
$.l4=null
$.lS=null
$.lR=null
$.d5=P.la(P.f,P.bE)
$.m0=null
$.m4=null
$.cO=null
$.m8=null
$.mk=null
$.mn=null
$.mm=null
$.ja=null
$.jb=null
$.jc=null
$.ml=null
$.m3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pT","n4",function(){return H.mS("_$dart_dartClosure")})
u($,"pU","lD",function(){return H.mS("_$dart_js")})
u($,"q_","n5",function(){return H.bg(H.iO({
toString:function(){return"$receiver$"}}))})
u($,"q0","n6",function(){return H.bg(H.iO({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q1","n7",function(){return H.bg(H.iO(null))})
u($,"q2","n8",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q5","nb",function(){return H.bg(H.iO(void 0))})
u($,"q6","nc",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q4","na",function(){return H.bg(H.mf(null))})
u($,"q3","n9",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q8","ne",function(){return H.bg(H.mf(void 0))})
u($,"q7","nd",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qo","lE",function(){return P.ot()})
u($,"qa","nf",function(){return P.op()})
u($,"qp","nj",function(){return H.nY(H.cg(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qr","nl",function(){return P.oc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qs","nm",function(){return P.oS()})
u($,"qq","nk",function(){return P.lV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qh","ni",function(){return Z.aN(0)})
u($,"qb","ng",function(){return Z.aN(511)})
u($,"qj","bw",function(){return Z.aN(1)})
u($,"qi","bv",function(){return Z.aN(2)})
u($,"qd","bu",function(){return Z.aN(4)})
u($,"qk","bR",function(){return Z.aN(8)})
u($,"ql","bS",function(){return Z.aN(16)})
u($,"qe","dk",function(){return Z.aN(32)})
u($,"qf","dl",function(){return Z.aN(64)})
u($,"qg","nh",function(){return Z.aN(96)})
u($,"qm","cr",function(){return Z.aN(128)})
u($,"qc","bt",function(){return Z.aN(256)})
u($,"pS","n3",function(){return new V.fT(1e-9)})
u($,"pR","L",function(){return $.n3()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.hN,Int32Array:H.hO,Int8Array:H.hP,Uint16Array:H.hQ,Uint32Array:H.hR,Uint8ClampedArray:H.dS,CanvasPixelArray:H.dS,Uint8Array:H.cM,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.fl,HTMLAnchorElement:W.dp,HTMLAreaElement:W.fm,HTMLBaseElement:W.cs,Blob:W.bU,HTMLBodyElement:W.by,HTMLCanvasElement:W.bV,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.cw,CSSUnitValue:W.cw,CSSPerspective:W.fE,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cx,MSStyleCSSProperties:W.cx,CSS2Properties:W.cx,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fG,CSSUnparsedValue:W.fH,DataTransferItemList:W.fK,HTMLDivElement:W.aG,DOMException:W.fL,ClientRectList:W.dy,DOMRectList:W.dy,DOMRectReadOnly:W.dz,DOMStringList:W.fM,DOMTokenList:W.fN,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aH,FileList:W.cA,FileWriter:W.fX,HTMLFormElement:W.h0,Gamepad:W.aR,History:W.h5,HTMLCollection:W.bZ,HTMLFormControlsCollection:W.bZ,HTMLOptionsCollection:W.bZ,ImageData:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b7,Location:W.dJ,MediaList:W.hG,MessagePort:W.cH,MIDIInputMap:W.hH,MIDIOutputMap:W.hJ,MimeType:W.aT,MimeTypeArray:W.hL,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aU,PluginArray:W.i0,RTCStatsReport:W.ia,HTMLSelectElement:W.id,SourceBuffer:W.aV,SourceBufferList:W.ip,SpeechGrammar:W.aW,SpeechGrammarList:W.iq,SpeechRecognitionResult:W.aX,Storage:W.it,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.e5,HTMLTableRowElement:W.iA,HTMLTableSectionElement:W.iB,HTMLTemplateElement:W.cV,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iD,TextTrackList:W.iE,TimeRanges:W.iG,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iK,TrackDefaultList:W.iL,CompositionEvent:W.bK,FocusEvent:W.bK,TextEvent:W.bK,UIEvent:W.bK,URL:W.j6,VideoTrackList:W.jo,WheelEvent:W.bh,Window:W.d2,DOMWindow:W.d2,Attr:W.d3,CSSRuleList:W.jy,ClientRect:W.eo,DOMRect:W.eo,GamepadList:W.jN,NamedNodeMap:W.eG,MozNamedAttrMap:W.eG,SpeechRecognitionResultList:W.k0,StyleSheetList:W.k4,SVGLength:P.b8,SVGLengthList:P.hf,SVGNumber:P.bb,SVGNumberList:P.hW,SVGPointList:P.i2,SVGScriptElement:P.cQ,SVGStringList:P.iz,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bf,SVGTransformList:P.iM,AudioBuffer:P.fq,AudioParamMap:P.fr,AudioTrackList:P.ft,AudioContext:P.bT,webkitAudioContext:P.bT,BaseAudioContext:P.bT,OfflineAudioContext:P.hX,WebGLBuffer:P.dr,WebGLProgram:P.dX,WebGL2RenderingContext:P.c6,WebGLShader:P.e0,WebGLUniformLocation:P.ec,SQLResultSetRowList:P.ir})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(U.mW,[])
else U.mW([])})})()
//# sourceMappingURL=test.dart.js.map
