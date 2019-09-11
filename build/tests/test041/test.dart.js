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
a[c]=function(){a[c]=function(){H.pP(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={li:function li(){},
kI:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lf:function(){return new P.d1("No element")},
nM:function(){return new P.d1("Too many elements")},
ek:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.og(a,b,c,d,e)
else H.of(a,b,c,d,e)},
og:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b4(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
of:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.ag(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.ag(a3+a4,2)
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
if(J.b4(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b4(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b4(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b4(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b4(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b4(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b4(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b4(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b4(a5.$2(k,j),0)){i=j
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
if(J.Z(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.R()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.az()
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
if(typeof a1!=="number")return a1.az()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.az()
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
H.ek(a2,a3,h-2,a5,a6)
H.ek(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.Z(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.Z(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
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
break}}}H.ek(a2,h,g,a5,a6)}else H.ek(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
h8:function h8(){},
c6:function c6(){},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
da:function da(){},
ew:function ew(){},
nE:function(){throw H.d(P.K("Cannot modify unmodifiable Map"))},
cw:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
px:function(a){return v.types[H.a2(a)]},
pE:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.d(H.aF(a))
return u},
cX:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o7:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cb:function(a){return H.nZ(a)+H.lB(H.bX(a),0,null)},
nZ:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibU){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cw(t.length>1&&C.b.C(t,0)===36?C.b.aj(t,1):t)},
o_:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q
H.kN(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o8:function(a){var u,t,s,r=H.c([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aF(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aX(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.d(H.aF(s))}return H.mc(r)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aF(s))
if(s<0)throw H.d(H.aF(s))
if(s>65535)return H.o8(a)}return H.mc(a)},
o9:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aX(u,10))>>>0,56320|u&1023)}}throw H.d(P.af(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o6:function(a){var u=H.ca(a).getFullYear()+0
return u},
o4:function(a){var u=H.ca(a).getMonth()+1
return u},
o0:function(a){var u=H.ca(a).getDate()+0
return u},
o1:function(a){var u=H.ca(a).getHours()+0
return u},
o3:function(a){var u=H.ca(a).getMinutes()+0
return u},
o5:function(a){var u=H.ca(a).getSeconds()+0
return u},
o2:function(a){var u=H.ca(a).getMilliseconds()+0
return u},
F:function(a){throw H.d(H.aF(a))},
e:function(a,b){if(a==null)J.aH(a)
throw H.d(H.cq(a,b))},
cq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,s,null)
u=H.a2(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.il(b,s)},
pq:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end",u)
return new P.aT(!0,b,"end",null)},
aF:function(a){return new P.aT(!0,a,null,null)},
pm:function(a){if(typeof a!=="number")throw H.d(H.aF(a))
return a},
d:function(a){var u
if(a==null)a=new P.eb()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n5})
u.name=""}else u.toString=H.n5
return u},
n5:function(){return J.at(this.dartException)},
B:function(a){throw H.d(a)},
u:function(a){throw H.d(P.bo(a))},
bi:function(a){var u,t,s,r,q,p
a=H.n4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m7:function(a,b){return new H.i9(a,b==null?null:b.method)},
lj:function(a,b){var u=b==null,t=u?null:b.method
return new H.hv(a,t,u?null:b.receiver)},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l4(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lj(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m7(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n8()
q=$.n9()
p=$.na()
o=$.nb()
n=$.ne()
m=$.nf()
l=$.nd()
$.nc()
k=$.nh()
j=$.ng()
i=r.aq(u)
if(i!=null)return f.$1(H.lj(H.J(u),i))
else{i=q.aq(u)
if(i!=null){i.method="call"
return f.$1(H.lj(H.J(u),i))}else{i=p.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=n.aq(u)
if(i==null){i=m.aq(u)
if(i==null){i=l.aq(u)
if(i==null){i=o.aq(u)
if(i==null){i=k.aq(u)
if(i==null){i=j.aq(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m7(H.J(u),i))}}return f.$1(new H.jg(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.em()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aT(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.em()
return a},
cu:function(a){var u
if(a==null)return new H.fb(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fb(a)},
pu:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pD:function(a,b,c,d,e,f){H.f(a,"$ibH")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.D("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var u
H.a2(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pD)
a.$identity=u
return u},
nD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iH().constructor.prototype):Object.create(new H.cz(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b5
if(typeof t!=="number")return t.A()
$.b5=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lV(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.px,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lU:H.l8
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lV(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nA:function(a,b,c,d){var u=H.l8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lV:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nA(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.A()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cA
return new Function(r+H.j(q==null?$.cA=H.fQ("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.A()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cA
return new Function(r+H.j(q==null?$.cA=H.fQ("self"):q)+"."+H.j(u)+"("+o+");}")()},
nB:function(a,b,c,d){var u=H.l8,t=H.lU
switch(b?-1:a){case 0:throw H.d(H.od("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nC:function(a,b){var u,t,s,r,q,p,o,n=$.cA
if(n==null)n=$.cA=H.fQ("self")
u=$.lT
if(u==null)u=$.lT=H.fQ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b5
if(typeof u!=="number")return u.A()
$.b5=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b5
if(typeof u!=="number")return u.A()
$.b5=u+1
return new Function(n+u+"}")()},
lF:function(a,b,c,d,e,f,g){return H.nD(a,b,H.a2(c),d,!!e,!!f,g)},
l8:function(a){return a.a},
lU:function(a){return a.c},
fQ:function(a){var u,t,s,r=new H.cz("self","target","receiver","name"),q=J.lg(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
E:function(a){if(a==null)H.pi("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.b2(a,"String"))},
pr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b2(a,"double"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.b2(a,"num"))},
lC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.b2(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.b2(a,"int"))},
n2:function(a,b){throw H.d(H.b2(a,H.cw(H.J(b).substring(2))))},
pJ:function(a,b){throw H.d(H.nz(a,H.cw(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.n2(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pJ(a,b)},
kN:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.d(H.b2(a,"List<dynamic>"))},
mZ:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.n2(a,b)},
mV:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
fA:function(a,b){var u
if(typeof a=="function")return!0
u=H.mV(J.T(a))
if(u==null)return!1
return H.mK(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ly)return a
$.ly=!0
try{if(H.fA(a,b))return a
u=H.l1(b)
t=H.b2(a,u)
throw H.d(t)}finally{$.ly=!1}},
lG:function(a,b){if(a!=null&&!H.lE(a,b))H.B(H.b2(a,H.l1(b)))
return a},
b2:function(a,b){return new H.j7("TypeError: "+P.dQ(a)+": type '"+H.mQ(a)+"' is not a subtype of type '"+b+"'")},
nz:function(a,b){return new H.fR("CastError: "+P.dQ(a)+": type '"+H.mQ(a)+"' is not a subtype of type '"+b+"'")},
mQ:function(a){var u,t=J.T(a)
if(!!t.$icC){u=H.mV(t)
if(u!=null)return H.l1(u)
return"Closure"}return H.cb(a)},
pi:function(a){throw H.d(new H.jC(a))},
pP:function(a){throw H.d(new P.h0(H.J(a)))},
od:function(a){return new H.iu(a)},
mW:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bX:function(a){if(a==null)return
return a.$ti},
qx:function(a,b,c){return H.cv(a["$a"+H.j(c)],H.bX(b))},
ct:function(a,b,c,d){var u
H.J(c)
H.a2(d)
u=H.cv(a["$a"+H.j(c)],H.bX(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.J(b)
H.a2(c)
u=H.cv(a["$a"+H.j(b)],H.bX(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a2(b)
u=H.bX(a)
return u==null?null:u[b]},
l1:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cw(a[0].name)+H.lB(a,1,b)
if(typeof a=="function")return H.cw(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.oS(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oS:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
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
p=C.b.A(p,a0[n])
m=u[q]
if(m!=null&&m!==P.Q)p+=" extends "+H.bW(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bW(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bW(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bW(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pt(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bW(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lB:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ab("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.i(0)+">"},
cv:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lD:function(a,b,c,d){var u,t
H.J(b)
H.kN(c)
H.J(d)
if(a==null)return!1
u=H.bX(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mT(H.cv(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.kN(c)
H.J(d)
if(a==null)return a
if(H.lD(a,b,c,d))return a
throw H.d(H.b2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cw(b.substring(2))+H.lB(c,0,null),v.mangledGlobalNames)))},
mT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aS(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aS(a[t],b,c[t],d))return!1
return!0},
qv:function(a,b,c){return a.apply(b,H.cv(J.T(b)["$a"+H.j(c)],H.bX(b)))},
mY:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="L"||a===-1||a===-2||H.mY(u)}return!1},
lE:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="L"||b===-1||b===-2||H.mY(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fA(a,b)}u=J.T(a).constructor
t=H.bX(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aS(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lE(a,b))throw H.d(H.b2(a,H.l1(b)))
return a},
aS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aS(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mK(a,b,c,d)
if('func' in a)return c.name==="bH"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aS("type" in a?a.type:l,b,s,d)
else if(H.aS(a,b,s,d))return!0
else{if(!('$i'+"cJ" in t.prototype))return!1
r=t.prototype["$a"+"cJ"]
q=H.cv(r,u?a.slice(1):l)
return H.aS(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mT(H.cv(m,u),b,p,d)},
mK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aS(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aS(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aS(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aS(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pH(h,b,g,d)},
pH:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aS(c[s],d,a[s],b))return!1}return!0},
qw:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pF:function(a){var u,t,s,r,q=H.J($.mX.$1(a)),p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mS.$2(a,q))
if(q!=null){p=$.kG[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kM[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l0(u)
$.kG[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kM[q]=u
return u}if(s==="-"){r=H.l0(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n1(a,u)
if(s==="*")throw H.d(P.jf(q))
if(v.leafTags[q]===true){r=H.l0(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n1(a,u)},
n1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l0:function(a){return J.lI(a,!1,null,!!a.$iM)},
pG:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l0(u)
else return J.lI(u,c,null,null)},
pB:function(){if(!0===$.lH)return
$.lH=!0
H.pC()},
pC:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kM=Object.create(null)
H.pA()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n3.$1(q)
if(p!=null){o=H.pG(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pA:function(){var u,t,s,r,q,p,o=C.G()
o=H.co(C.H,H.co(C.I,H.co(C.v,H.co(C.v,H.co(C.J,H.co(C.K,H.co(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mX=new H.kJ(r)
$.mS=new H.kK(q)
$.n3=new H.kL(p)},
co:function(a,b){return a(b)||b},
nO:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a5("Illegal RegExp pattern ("+String(r)+")",a,null))},
pM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ps:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lK:function(a,b,c){var u=H.pN(a,b,c)
return u},
pN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n4(b),'g'),H.ps(c))},
fV:function fV(){},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j5:function j5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i9:function i9(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a){this.a=a},
l4:function l4(a){this.a=a},
fb:function fb(a){this.a=a
this.b=null},
cC:function cC(){},
iR:function iR(){},
iH:function iH(){},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
fR:function fR(a){this.a=a},
iu:function iu(a){this.a=a},
jC:function jC(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hz:function hz(a,b){this.a=a
this.$ti=b},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function(a){return a},
nX:function(a){return new Int8Array(a)},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.cq(b,a))},
oQ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.pq(a,b,c))
return b},
cS:function cS(){},
bN:function bN(){},
e7:function e7(){},
cT:function cT(){},
e8:function e8(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
e9:function e9(){},
cU:function cU(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
pt:function(a){return J.m2(a?Object.keys(a):[],null)},
pI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kH:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lH==null){H.pB()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.jf("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lL()]
if(r!=null)return r
r=H.pF(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lL(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nN:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.l7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.af(a,0,4294967295,"length",null))
return J.m2(new Array(a),b)},
m2:function(a,b){return J.lg(H.c(a,[b]))},
lg:function(a){H.kN(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dX.prototype
return J.dW.prototype}if(typeof a=="string")return J.bL.prototype
if(a==null)return J.dY.prototype
if(typeof a=="boolean")return J.ht.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.kH(a)},
dv:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.kH(a)},
fB:function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.kH(a)},
pv:function(a){if(typeof a=="number")return J.c5.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bU.prototype
return a},
pw:function(a){if(typeof a=="number")return J.c5.prototype
if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bU.prototype
return a},
dw:function(a){if(typeof a=="string")return J.bL.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bU.prototype
return a},
cs:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bM.prototype
return a}if(a instanceof P.Q)return a
return J.kH(a)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).t(a,b)},
b4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.pv(a).az(a,b)},
dA:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pE(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dv(a).j(a,b)},
l5:function(a,b,c){return J.fB(a).k(a,b,c)},
nq:function(a,b){return J.dw(a).C(a,b)},
nr:function(a,b,c){return J.cs(a).hH(a,b,c)},
ns:function(a,b,c,d){return J.cs(a).i9(a,b,c,d)},
nt:function(a,b){return J.dw(a).a0(a,b)},
l6:function(a,b){return J.pw(a).io(a,b)},
fD:function(a,b){return J.fB(a).I(a,b)},
nu:function(a,b,c,d){return J.cs(a).iz(a,b,c,d)},
lN:function(a,b){return J.fB(a).F(a,b)},
nv:function(a){return J.cs(a).gik(a)},
lO:function(a){return J.cs(a).gcd(a)},
dB:function(a){return J.T(a).gG(a)},
bz:function(a){return J.fB(a).gU(a)},
aH:function(a){return J.dv(a).gn(a)},
lP:function(a){return J.fB(a).j3(a)},
nw:function(a,b){return J.cs(a).j5(a,b)},
nx:function(a,b,c){return J.dw(a).u(a,b,c)},
ny:function(a){return J.dw(a).jf(a)},
at:function(a){return J.T(a).i(a)},
a:function a(){},
ht:function ht(){},
dY:function dY(){},
dZ:function dZ(){},
id:function id(){},
bU:function bU(){},
bM:function bM(){},
b9:function b9(a){this.$ti=a},
lh:function lh(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c5:function c5(){},
dX:function dX(){},
dW:function dW(){},
bL:function bL(){}},P={
os:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pj()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cp(new P.jE(s),1)).observe(u,{childList:true})
return new P.jD(s,u,t)}else if(self.setImmediate!=null)return P.pk()
return P.pl()},
ot:function(a){self.scheduleImmediate(H.cp(new P.jF(H.n(a,{func:1,ret:-1})),0))},
ou:function(a){self.setImmediate(H.cp(new P.jG(H.n(a,{func:1,ret:-1})),0))},
ov:function(a){P.lp(C.o,H.n(a,{func:1,ret:-1}))},
lp:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ag(a.a,1000)
return P.oB(u<0?0:u,b)},
mm:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bg]})
u=C.e.ag(a.a,1000)
return P.oC(u<0?0:u,b)},
oB:function(a,b){var u=new P.fh()
u.f2(a,b)
return u},
oC:function(a,b){var u=new P.fh()
u.f3(a,b)
return u},
ow:function(a,b){var u,t,s
b.a=1
try{a.ez(new P.jQ(b),new P.jR(b),null)}catch(s){u=H.ah(s)
t=H.cu(s)
P.pK(new P.jS(b,u,t))}},
mz:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaR")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.df(b,t)}else{t=H.f(b.c,"$ibl")
b.a=2
b.c=a
a.dv(t)}},
df:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iam")
g=g.b
r=s.a
q=s.b
g.toString
P.kC(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.df(h.a,b)}g=h.a
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
if(m){H.f(o,"$iam")
g=g.b
r=o.a
q=o.b
g.toString
P.kC(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.jW(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jV(u,b,o).$0()}else if((g&2)!==0)new P.jU(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.T(g).$icJ){if(g.a>=4){k=H.f(q.c,"$ibl")
q.c=null
b=q.bo(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mz(g,q)
return}}j=b.b
k=H.f(j.c,"$ibl")
j.c=null
b=j.bo(k)
g=u.a
r=u.b
if(!g){H.C(r,H.r(j,0))
j.a=4
j.c=r}else{H.f(r,"$iam")
j.a=8
j.c=r}h.a=j
g=j}},
pe:function(a,b){if(H.fA(a,{func:1,args:[P.Q,P.ay]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.ay]})
if(H.fA(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.d(P.l7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pd:function(){var u,t
for(;u=$.cn,u!=null;){$.du=null
t=u.b
$.cn=t
if(t==null)$.dt=null
u.a.$0()}},
ph:function(){$.lz=!0
try{P.pd()}finally{$.du=null
$.lz=!1
if($.cn!=null)$.lM().$1(P.mU())}},
mP:function(a){var u=new P.eE(H.n(a,{func:1,ret:-1}))
if($.cn==null){$.cn=$.dt=u
if(!$.lz)$.lM().$1(P.mU())}else $.dt=$.dt.b=u},
pg:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cn
if(u==null){P.mP(a)
$.du=$.dt
return}t=new P.eE(a)
s=$.du
if(s==null){t.b=u
$.cn=$.du=t}else{t.b=s.b
$.du=s.b=t
if(t.b==null)$.dt=t}},
pK:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kE(t,t,C.f,a)
return}u.toString
P.kE(t,t,u,H.n(u.c6(a),s))},
ml:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.lp(a,b)}return P.lp(a,H.n(u.c6(b),t))},
oj:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bg]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.mm(a,b)}t=u.dN(b,P.bg)
$.a1.toString
return P.mm(a,H.n(t,s))},
kC:function(a,b,c,d,e){var u={}
u.a=d
P.pg(new P.kD(u,e))},
mL:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mM:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pf:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kE:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c6(d):c.il(d,-1)
P.mP(d)},
jE:function jE(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fh:function fh(){this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aR:function aR(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jP:function jP(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jX:function jX(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a){this.a=a
this.b=null},
iK:function iK(){},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
d2:function d2(){},
iL:function iL(){},
bg:function bg(){},
am:function am(a,b){this.a=a
this.b=b},
kt:function kt(){},
kD:function kD(a,b){this.a=a
this.b=b},
k2:function k2(){},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function(a,b){return new H.a4([a,b])},
lk:function(a,b){return new H.a4([a,b])},
nS:function(a){return H.pu(a,new H.a4([null,null]))},
e1:function(a){return new P.k0([a])},
lv:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oA:function(a,b,c){var u=new P.eT(a,b,[c])
u.c=a.e
return u},
nL:function(a,b,c){var u,t
if(P.lA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.az,a)
try{P.oT(a,u)}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}t=P.mj(b,H.mZ(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
le:function(a,b,c){var u,t
if(P.lA(a))return b+"..."+c
u=new P.ab(b)
C.a.h($.az,a)
try{t=u
t.a=P.mj(t.a,a,", ")}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lA:function(a){var u,t
for(u=$.az.length,t=0;t<u;++t)if(a===$.az[t])return!0
return!1},
oT:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.j(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.v();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
nR:function(a,b,c){var u=P.nQ(b,c)
a.F(0,new P.hB(u,b,c))
return u},
m3:function(a,b){var u,t,s=P.e1(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.C(a[t],b))
return s},
ll:function(a){var u,t={}
if(P.lA(a))return"{...}"
u=new P.ab("")
try{C.a.h($.az,a)
u.a+="{"
t.a=!0
J.lN(a,new P.hF(t,u))
u.a+="}"}finally{if(0>=$.az.length)return H.e($.az,-1)
$.az.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k0:function k0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ck:function ck(a){this.a=a
this.c=this.b=null},
eT:function eT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(){},
x:function x(){},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
ad:function ad(){},
kl:function kl(){},
hG:function hG(){},
ex:function ex(a,b){this.a=a
this.$ti=b},
k7:function k7(){},
eU:function eU(){},
fn:function fn(){},
on:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oo(!1,b,c,d)
return},
oo:function(a,b,c,d){var u,t,s=$.ni()
if(s==null)return
u=0===c
if(u&&!0)return P.ls(s,b)
t=b.length
d=P.bP(c,d,t)
if(u&&d===t)return P.ls(s,b)
return P.ls(s,b.subarray(c,d))},
ls:function(a,b){if(P.oq(b))return
return P.or(a,b)},
or:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ah(t)}return},
oq:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
op:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ah(t)}return},
mO:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.dv(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.av()
if((s&127)!==s)return t-b}return c-b},
lS:function(a,b,c,d,e,f){if(C.e.bj(f,4)!==0)throw H.d(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
fN:function fN(){},
fO:function fO(){},
c2:function c2(){},
bE:function bE(){},
ha:function ha(){},
hq:function hq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hp:function hp(a){this.a=a},
jo:function jo(){},
jq:function jq(){},
kr:function kr(a){this.b=0
this.c=a},
jp:function jp(a){this.a=a},
kq:function kq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fC:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.h]})
u=H.o7(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a5(a,null,null))},
nJ:function(a){if(a instanceof H.cC)return a.i(0)
return"Instance of '"+H.cb(a)+"'"},
nT:function(a,b,c){var u,t
H.C(b,c)
u=J.nN(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
m4:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bz(a);u.v();)C.a.h(s,H.C(u.gH(u),c))
if(b)return s
return H.l(J.lg(s),"$ib",t,"$ab")},
d3:function(a,b,c){var u,t=P.m
H.l(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$ib9",[t],"$ab9")
u=a.length
c=P.bP(b,c,u)
return H.md(b>0||c<u?C.a.cV(a,b,c):a)}if(!!J.T(a).$icU)return H.o9(a,b,P.bP(b,c,a.length))
return P.oh(a,b,c)},
oh:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ii",[P.m],"$ai")
if(b<0)throw H.d(P.af(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.af(c,b,J.aH(a),q,q))
t=J.bz(a)
for(s=0;s<b;++s)if(!t.v())throw H.d(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gH(t))
else for(s=b;s<c;++s){if(!t.v())throw H.d(P.af(c,b,s,q,q))
r.push(t.gH(t))}return H.md(r)},
ob:function(a){return new H.hu(a,H.nO(a,!1,!0,!1))},
mj:function(a,b,c){var u=J.bz(b)
if(!u.v())return a
if(c.length===0){do a+=H.j(u.gH(u))
while(u.v())}else{a+=H.j(u.gH(u))
for(;u.v();)a=a+c+H.j(u.gH(u))}return a},
mp:function(){var u=H.o_()
if(u!=null)return P.om(u)
throw H.d(P.K("'Uri.base' is not supported"))},
fo:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.no().b
if(typeof b!=="string")H.B(H.aF(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.al(c,"c2",0))
t=c.giy().ce(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nF:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dL:function(a){if(a>=10)return""+a
return"0"+a},
lW:function(a,b){return new P.bF(1e6*b+1000*a)},
dQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nJ(a)},
dD:function(a){return new P.aT(!1,null,null,a)},
l7:function(a,b,c){return new P.aT(!0,a,b,c)},
il:function(a,b){return new P.cd(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
bP:function(a,b,c){if(0>a||a>c)throw H.d(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.af(b,a,c,"end",null))
return b}return c},
me:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.d(P.af(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.a2(e==null?J.aH(b):e)
return new P.hs(u,!0,a,c,"Index out of range")},
K:function(a){return new P.jh(a)},
jf:function(a){return new P.je(a)},
mi:function(a){return new P.d1(a)},
bo:function(a){return new P.fU(a)},
D:function(a){return new P.eM(a)},
a5:function(a,b,c){return new P.hj(a,b,c)},
nU:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.c([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lJ:function(a){H.pI(a)},
om:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.mo(e<e?C.b.u(a,0,e):a,5,f).geE()
else if(u===32)return P.mo(C.b.u(a,5,e),0,f).geE()}t=new Array(8)
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
if(P.mN(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ji()
if(r>=0)if(P.mN(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.F(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.am(a,"..",o)))j=n>o+2&&C.b.am(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.am(a,"file",0)){if(q<=0){if(!C.b.am(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.b_(a,o,n,"/");++e
n=h}k="file"}else if(C.b.am(a,"http",0)){if(t&&p+3===o&&C.b.am(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b_(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.am(a,"https",0)){if(t&&p+4===o&&C.b.am(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b_(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ka(a,r,q,p,o,n,m,k)}return P.oD(a,0,e,r,q,p,o,n,m,k)},
mr:function(a){var u=P.h
return C.a.iC(H.c(a.split("&"),[u]),P.lk(u,u),new P.jm(C.h),[P.y,P.h,P.h])},
ol:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jj(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a0(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fC(C.b.u(a,s,t),n,n)
if(typeof p!=="number")return p.az()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fC(C.b.u(a,s,c),n,n)
if(typeof p!=="number")return p.az()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jk(a)
t=new P.jl(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a0(a,r)
if(n===58){if(r===b){++r
if(C.b.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaE(s)
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
g+=2}else{d=C.e.aX(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oD:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oK(a,b,d)
else{if(d===b)P.dq(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oL(a,u,e-1):""
s=P.oH(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oJ(P.fC(C.b.u(a,r,g),new P.km(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oI(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lw(a,h+1,i,n):n
return new P.cl(j,t,s,q,p,o,i<c?P.oG(a,i+1,c):n)},
mD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dq:function(a,b,c){throw H.d(P.a5(c,a,b))},
oJ:function(a,b){if(a!=null&&a===P.mD(b))return
return a},
oH:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.b.a0(a,u)!==93)P.dq(a,b,"Missing end `]` to match `[` in host")
P.mq(a,b+1,u)
return C.b.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.mq(a,b,c)
return"["+a+"]"}return P.oN(a,b,c)},
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.mJ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ab("")
n=C.b.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ab("")
if(t<u){s.a+=C.b.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dq(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ab("")
n=C.b.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mE(q)
u+=l
t=u}}}}if(s==null)return C.b.u(a,b,c)
if(t<c){n=C.b.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oK:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mG(C.b.C(a,b)))P.dq(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dq(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.u(a,b,c)
return P.oE(t?a.toLowerCase():a)},
oE:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oL:function(a,b,c){return P.dr(a,b,c,C.W,!1)},
oI:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dr(a,b,c,C.A,!0):C.i.jw(d,new P.kn(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a7(u,"/"))u="/"+u
return P.oM(u,e,f)},
oM:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a7(a,"/"))return P.oO(a,!u||c)
return P.oP(a)},
lw:function(a,b,c,d){var u,t={}
H.l(d,"$iy",[P.h,null],"$ay")
if(a!=null){if(d!=null)throw H.d(P.dD("Both query and queryParameters specified"))
return P.dr(a,b,c,C.l,!0)}if(d==null)return
u=new P.ab("")
t.a=""
d.F(0,new P.ko(new P.kp(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oG:function(a,b,c){return P.dr(a,b,c,C.l,!0)},
mJ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a0(a,b+1)
t=C.b.a0(a,p)
s=H.kI(u)
r=H.kI(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aX(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.u(a,b,b+3).toUpperCase()
return},
mE:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.hT(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.d3(t,0,null)},
dr:function(a,b,c,d,e){var u=P.mI(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.u(a,b,c):u},
mI:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.R()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mJ(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dq(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mE(q)}}if(r==null)r=new P.ab("")
r.a+=C.b.u(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.R()
if(s<c)r.a+=C.b.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mH:function(a){if(C.b.a7(a,"."))return!0
return C.b.eh(a,"/.")!==-1},
oP:function(a){var u,t,s,r,q,p,o
if(!P.mH(a))return a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oO:function(a,b){var u,t,s,r,q,p
if(!P.mH(a))return!b?P.mF(a):a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaE(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaE(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mF(u[0]))}return C.a.m(u,"/")},
mF:function(a){var u,t,s,r=a.length
if(r>=2&&P.mG(J.nq(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.u(a,0,u)+"%3A"+C.b.aj(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oF:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.dD("Invalid URL encoding"))}}return u},
lx:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.u(a,b,c)
else r=new H.t(C.b.u(a,b,c))}else{r=H.c([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.d(P.dD("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.dD("Truncated URI"))
C.a.h(r,P.oF(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jp(!1).ce(r)},
mG:function(a){var u=a|32
return 97<=u&&u<=122},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.a5(m,a,t))}}if(s<0&&t>b)throw H.d(P.a5(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaE(l)
if(r!==44||t!==p+7||!C.b.am(a,"base64",p+1))throw H.d(P.a5("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iO(0,a,o,u)
else{n=P.mI(a,o,u,C.l,!0)
if(n!=null)a=C.b.b_(a,o,u,n)}return new P.ji(a,l,c)},
oR:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nU(22,new P.kx(),P.R),n=new P.kw(o),m=new P.ky(),l=new P.kz(),k=H.f(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iR"),"]",5)
k=H.f(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iR"),"az",21)
k=H.f(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mN:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.np()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.C(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
P:function P(){},
aA:function aA(a,b){this.a=a
this.b=b},
A:function A(){},
bF:function bF(a){this.a=a},
h6:function h6(){},
h7:function h7(){},
bG:function bG(){},
fG:function fG(){},
eb:function eb(){},
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
hs:function hs(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jh:function jh(a){this.a=a},
je:function je(a){this.a=a},
d1:function d1(a){this.a=a},
fU:function fU(a){this.a=a},
ic:function ic(){},
em:function em(){},
h0:function h0(a){this.a=a},
eM:function eM(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(){},
m:function m(){},
i:function i(){},
b8:function b8(){},
b:function b(){},
y:function y(){},
L:function L(){},
aa:function aa(){},
Q:function Q(){},
ay:function ay(){},
h:function h(){},
ab:function ab(a){this.a=a},
jm:function jm(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a,b){this.a=a
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
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(){},
kw:function kw(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
ka:function ka(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jK:function jK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pp:function(a){var u,t=J.T(a)
if(!!t.$ibq){u=t.gdR(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fm(a.data,a.height,a.width)},
po:function(a){if(a instanceof P.fm)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.lk(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.J(t[r])
u.k(0,q,a[q])}return u},
pn:function(a){var u={}
a.F(0,new P.kF(u))
return u},
kc:function kc(){},
ke:function ke(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
kd:function kd(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(){},
k_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k1:function k1(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
hx:function hx(){},
be:function be(){},
ia:function ia(){},
ii:function ii(){},
cZ:function cZ(){},
iO:function iO(){},
q:function q(){},
bh:function bh(){},
j4:function j4(){},
eR:function eR(){},
eS:function eS(){},
f1:function f1(){},
f2:function f2(){},
fd:function fd(){},
fe:function fe(){},
fk:function fk(){},
fl:function fl(){},
R:function R(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
fL:function fL(){},
bZ:function bZ(){},
ib:function ib(){},
eF:function eF(){},
dF:function dF(){},
dS:function dS(){},
ee:function ee(){},
ef:function ef(){},
ce:function ce(){},
eg:function eg(){},
eo:function eo(){},
ev:function ev(){},
iG:function iG(){},
f9:function f9(){},
fa:function fa(){}},W={
lQ:function(){var u=document.createElement("a")
return u},
l9:function(){var u=document.createElement("canvas")
return u},
nH:function(a,b,c){var u=document.body,t=(u&&C.t).ao(u,a,b,c)
t.toString
u=W.G
u=new H.dc(new W.as(t),H.n(new W.h9(),{func:1,ret:P.P,args:[u]}),[u])
return H.f(u.gaQ(u),"$iU")},
nI:function(a){H.f(a,"$ik")
return"wheel"},
cF:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cs(a)
t=u.gew(a)
if(typeof t==="string")r=u.gew(a)}catch(s){H.ah(s)}return r},
m1:function(a){var u=document.createElement("img")
u.src=a
return u},
nK:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icM")
try{s.type=a}catch(u){H.ah(u)}return s},
jZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a,b,c,d){var u=W.jZ(W.jZ(W.jZ(W.jZ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.mR(new W.jO(c),W.o)
if(u!=null&&!0)J.ns(a,b,u,!1)
return new W.jN(a,b,u,!1,[e])},
mA:function(a){var u=W.lQ(),t=window.location
u=new W.bV(new W.k6(u,t))
u.eY(a)
return u},
ox:function(a,b,c,d){H.f(a,"$iU")
H.J(b)
H.J(c)
H.f(d,"$ibV")
return!0},
oy:function(a,b,c,d){var u,t,s
H.f(a,"$iU")
H.J(b)
H.J(c)
u=H.f(d,"$ibV").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mC:function(){var u=P.h,t=P.m3(C.p,u),s=H.r(C.p,0),r=H.n(new W.ki(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.kh(t,P.e1(u),P.e1(u),P.e1(u),null)
t.f1(null,new H.hJ(C.p,r,[s,u]),q,null)
return t},
mR:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dN(a,b)},
w:function w(){},
fE:function fE(){},
dC:function dC(){},
fF:function fF(){},
cy:function cy(){},
c_:function c_(){},
bA:function bA(){},
c1:function c1(){},
cB:function cB(){},
bC:function bC(){},
cD:function cD(){},
fX:function fX(){},
W:function W(){},
cE:function cE(){},
fY:function fY(){},
b6:function b6(){},
b7:function b7(){},
fZ:function fZ(){},
h_:function h_(){},
h2:function h2(){},
aJ:function aJ(){},
h3:function h3(){},
dN:function dN(){},
dO:function dO(){},
h4:function h4(){},
h5:function h5(){},
jI:function jI(a,b){this.a=a
this.b=b},
U:function U(){},
h9:function h9(){},
o:function o(){},
k:function k(){},
aK:function aK(){},
cI:function cI(){},
he:function he(){},
hi:function hi(){},
aU:function aU(){},
ho:function ho(){},
c4:function c4(){},
bq:function bq(){},
cL:function cL(){},
cM:function cM(){},
ba:function ba(){},
e2:function e2(){},
hW:function hW(){},
cQ:function cQ(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
aV:function aV(){},
i0:function i0(){},
ae:function ae(){},
as:function as(a){this.a=a},
G:function G(){},
cV:function cV(){},
aW:function aW(){},
ig:function ig(){},
is:function is(){},
it:function it(a){this.a=a},
iv:function iv(){},
aX:function aX(){},
iE:function iE(){},
aY:function aY(){},
iF:function iF(){},
aZ:function aZ(){},
iI:function iI(){},
iJ:function iJ(a){this.a=a},
aN:function aN(){},
bf:function bf(){},
en:function en(){},
iP:function iP(){},
iQ:function iQ(){},
d5:function d5(){},
b_:function b_(){},
aO:function aO(){},
iS:function iS(){},
iT:function iT(){},
iZ:function iZ(){},
b0:function b0(){},
b1:function b1(){},
j2:function j2(){},
j3:function j3(){},
bS:function bS(){},
jn:function jn(){},
jA:function jA(){},
bk:function bk(){},
dd:function dd(){},
de:function de(){},
jJ:function jJ(){},
eH:function eH(){},
jY:function jY(){},
eZ:function eZ(){},
kb:function kb(){},
kf:function kf(){},
jH:function jH(){},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lu:function lu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jN:function jN(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jO:function jO(a){this.a=a},
bV:function bV(a){this.a=a},
H:function H(){},
ea:function ea(a){this.a=a},
i8:function i8(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(){},
k8:function k8(){},
k9:function k9(){},
kh:function kh(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ki:function ki(){},
kg:function kg(){},
dR:function dR(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aD:function aD(){},
k6:function k6(a,b){this.a=a
this.b=b},
fp:function fp(a){this.a=a},
ks:function ks(a){this.a=a},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
dl:function dl(){},
dm:function dm(){},
f7:function f7(){},
f8:function f8(){},
fc:function fc(){},
ff:function ff(){},
fg:function fg(){},
dn:function dn(){},
dp:function dp(){},
fi:function fi(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){}},O={
la:function(a){var u=new O.a3([a])
u.bl(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cP:function cP(){this.b=this.a=null},
m0:function(a,b){var u,t,s,r=new O.dV()
r.r=0
r.scJ(null)
r.sc7(null)
if(a==null){u=$.ms
if(u==null){u=new V.V(1,0)
$.ms=u
t=u}else t=u}else t=a
if(!J.Z(r.d,t)){s=r.d
r.d=t
u=new D.I("blurDirection",s,t,[V.V])
u.b=!0
r.L(u)}r.sdQ(b)
r.sc8(null)
r.sba(0)
return r},
dV:function dV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hK:function hK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cO:function cO(){},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(){var _=this
_.e=_.d=_.c=_.b=null},
hO:function hO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hP:function hP(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ei:function ei(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){}},E={
lZ:function(a){var u=new E.ap()
u.a=""
u.b=!0
u.seX(0,O.la(E.ap))
u.y.b2(u.giP(),u.giS())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scS(0,a)
return u},
oc:function(a,b){var u=new E.io(a)
u.eU(a,b)
return u},
oi:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic1)return E.mk(a,!0,!0,!0,!1)
u=W.l9()
t=u.style
t.width="100%"
t.height="100%"
s.gcd(a).h(0,u)
return E.mk(u,!0,!0,!0,!1)},
mk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eq(),j=H.f(C.j.cO(a,"webgl2",P.nS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ice")
if(j==null)H.B(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oc(j,a)
u=new T.iV(j)
u.b=H.a2(j.getParameter(3379))
u.c=H.a2(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ey(a)
t=new X.hw()
t.c=new X.aC(!1,!1,!1)
t.shC(P.e1(P.m))
u.b=t
t=new X.i1(u)
t.f=0
t.r=V.bt()
t.x=V.bt()
t.ch=t.Q=1
u.c=t
t=new X.hD(u)
t.r=0
t.x=V.bt()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j1(u)
t.f=V.bt()
t.r=V.bt()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfn(H.c([],[[P.d2,P.Q]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.n(u.gfW(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.n(u.gh1(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.n(u.gfQ(),o),!1,p))
t=u.z
n=W.ba
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.n(u.gh5(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.n(u.gh3(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.n(u.gh9(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.n(u.ghd(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.n(u.ghb(),q),!1,r))
n=u.z
m=W.bk;(n&&C.a).h(n,W.a7(a,H.J(W.nI(a)),H.n(u.ghf(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.n(u.gfY(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.n(u.gh_(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.n(u.ghh(),o),!1,p))
p=u.z
o=W.b1
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.n(u.ghx(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.n(u.ght(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.n(u.ghv(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aA(Date.now(),!1)
k.cy=0
k.dz()
return k},
fP:function fP(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iY:function iY(a){this.a=a}},Z={
lt:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cm(c)),35044)
a.bindBuffer(b,null)
return new Z.eD(b,u)},
aQ:function(a){return new Z.bj(a)},
eD:function eD(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
db:function db(a){this.a=a},
bB:function bB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
O:function(){var u=new D.cG()
u.saB(null)
u.sb6(null)
u.c=null
u.d=0
return u},
fS:function fS(){},
cG:function cG(){var _=this
_.d=_.c=_.b=_.a=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
z:function z(){this.b=null},
bJ:function bJ(a){this.b=null
this.$ti=a},
bK:function bK(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dM:function dM(){},
ac:function ac(){},
e0:function e0(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ed:function ed(){},
el:function el(){}},X={dH:function dH(a,b){this.a=a
this.b=b},e_:function e_(a,b){this.a=a
this.b=b},hw:function hw(){var _=this
_.d=_.c=_.b=_.a=null},e3:function e3(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hD:function hD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i1:function i1(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cR:function cR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ih:function ih(){},es:function es(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j1:function j1(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ey:function ey(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lR:function(a,b){var u,t,s,r,q=new X.fM()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.lo(null)
q.cx=new V.an(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.lm()
q.sau(0,512)
q.sap(0,512)
u=new V.an(0,0,0,1)
if(!q.cx.t(0,u)){t=q.cx
q.cx=u
s=new D.I("color",t,u,[V.an])
s.b=!0
q.a2(s)}if(q.cy){q.cy=!1
s=new D.I("clearColor",!0,!1,[P.P])
s.b=!0
q.a2(s)}s=q.db
if(!(Math.abs(s-2000)<$.N().a)){q.db=2000
s=new D.I("depth",s,2000,[P.A])
s.b=!0
q.a2(s)}if(!q.f){q.f=!0
s=new D.I("autoResize",!1,!0,[P.P])
s.b=!0
q.a2(s)}s=q.r
if(!(Math.abs(s-1)<$.N().a)){q.r=1
s=new D.I("autoResizeScalarX",s,1,[P.A])
s.b=!0
q.a2(s)}s=q.x
if(!(Math.abs(s-1)<$.N().a)){q.x=1
s=new D.I("autoResizeScalarY",s,1,[P.A])
s.b=!0
q.a2(s)}r=V.lm()
if(!J.Z(q.dy,r)){t=q.dy
q.dy=r
s=new D.I("region",t,r,[V.cY])
s.b=!0
q.a2(s)}return q},
m_:function(a){var u=new X.hk(),t=new V.an(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lm()
u.r=t
return u},
m9:function(a){var u,t,s=new X.ec()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.gf4())
t=new D.I("mover",u,s.b,[U.aj])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.N().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.N().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.A])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.N().a)){s.e=2000
t=new D.I("far",t,2000,[P.A])
t.b=!0
s.a2(t)}return s},
fM:function fM(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c0:function c0(){},
hk:function hk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(){this.b=this.a=null},
ec:function ec(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){}},V={
pQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bj(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ar("null",c)
return C.b.ar(C.d.eA(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
cr:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.A],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.S(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ar(u[p],s))}return u},
dx:function(a){return C.d.jc(Math.pow(2,C.S.cq(Math.log(H.pm(a))/Math.log(2))))},
c8:function(){var u=$.m6
return u==null?$.m6=V.bd(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bt:function(){var u=$.mb
return u==null?$.mb=new V.a9(0,0):u},
nY:function(){var u=$.cW
return u==null?$.cW=new V.aq(0,0,0):u},
lm:function(){var u=$.mg
return u==null?$.mg=V.mf(0,0,1,1):u},
mf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cY(a,b,c,d)},
eC:function(){var u=$.mx
return u==null?$.mx=new V.X(0,0,0):u},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a){this.a=a},
c7:function c7(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.im()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.iw()
u.eV(a)
return u},
j0:function(){var u=new V.j_(),t=P.h
u.shW(new H.a4([t,V.d0]))
u.shZ(new H.a4([t,V.d7]))
u.c=null
return u},
bn:function bn(){},
aB:function aB(){},
e4:function e4(){},
aw:function aw(){this.a=null},
im:function im(){this.b=this.a=null},
iw:function iw(){this.a=null},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a){this.b=a
this.c=null},
j_:function j_(){this.c=this.b=this.a=null},
d8:function d8(a){this.b=a
this.a=this.c=null},
pL:function(a){P.oj(C.P,new V.l2(a))},
oe:function(a){var u=new V.iA()
u.eW(a,!0)
return u},
bD:function bD(){},
l2:function l2(a){this.a=a},
h1:function h1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hn:function hn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ie:function ie(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ij:function ij(a){this.a=a
this.c=null},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(){this.b=this.a=null},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a},
iD:function iD(a){this.a=a}},U={
lb:function(){var u=new U.fT()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fT:function fT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dJ:function dJ(){this.b=this.a=null},
cK:function cK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ez:function ez(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eB:function eB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
n_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="testCanvas",a2=null,a3="blurValue",a4="modifiers",a5=34067,a6=V.oe("Test 041"),a7=W.l9()
a7.className="pageLargeCanvas"
a7.id=a1
a6.a.appendChild(a7)
u=[P.h]
a6.dL(H.c(["Test of the Gaussian blur technique with a solid blur value for the whole image."],u))
a6.i8(H.c(["blurValue"],u))
a6.dL(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a1)
if(t==null)H.B(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.oi(t,!0,!0,!0,!1)
r=new U.cK()
r.bl(U.aj)
r.b2(r.gfI(),r.ghl())
r.e=null
r.f=V.c8()
r.r=0
q=s.r
p=new U.eA()
o=U.lb()
o.scN(0,!0)
o.scz(6.283185307179586)
o.scB(0)
o.sak(0,0)
o.scA(100)
o.sY(0)
o.scg(0.5)
p.b=o
n=p.gaV()
o.gp().h(0,n)
o=U.lb()
o.scN(0,!0)
o.scz(6.283185307179586)
o.scB(0)
o.sak(0,0)
o.scA(100)
o.sY(0)
o.scg(0.5)
p.c=o
o.gp().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.aC(!1,!1,!1)
l=p.d
p.d=m
o=[X.aC]
n=new D.I(a4,l,m,o)
n.b=!0
p.P(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.I("invertX",n,!1,[P.P])
n.b=!0
p.P(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.I("invertY",n,!1,[P.P])
n.b=!0
p.P(n)}p.b9(q)
r.h(0,p)
q=s.r
p=new U.ez()
n=U.lb()
n.scN(0,!0)
n.scz(6.283185307179586)
n.scB(0)
n.sak(0,0)
n.scA(100)
n.sY(0)
n.scg(0.2)
p.b=n
n.gp().h(0,p.gaV())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.aC(!0,!1,!1)
l=p.c
p.c=m
n=new D.I(a4,l,m,o)
n.b=!0
p.P(n)
p.b9(q)
r.h(0,p)
q=s.r
p=new U.eB()
p.c=0.01
p.e=p.d=0
m=new X.aC(!1,!1,!1)
p.b=m
o=new D.I(a4,a2,m,o)
o.b=!0
p.P(o)
p.b9(q)
r.h(0,p)
k=V.bd(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
q=new U.dJ()
q.a=k
r.h(0,q)
j=X.m9(r)
i=new O.e5()
i.sfb(O.la(V.av))
i.e.b2(i.gfM(),i.gfO())
q=new O.bc(i,"emission")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
i.f=q
q=new O.bc(i,"ambient")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
i.r=q
q=new O.bc(i,"diffuse")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
i.x=q
q=new O.bc(i,"invDiffuse")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
i.y=q
q=new O.hP(i,"specular")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
q.ch=100
i.z=q
q=new O.hL(i,"bump")
q.c=new A.ao(!1,!1,!1)
i.Q=q
i.ch=null
q=new O.bc(i,"reflect")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
i.cx=q
q=new O.hO(i,"refract")
q.c=new A.ao(!1,!1,!1)
q.f=new V.ai(0,0,0)
q.ch=1
i.cy=q
q=new O.hK(i,"alpha")
q.c=new A.ao(!1,!1,!1)
q.f=1
i.db=q
q=new D.e0()
q.bl(D.ac)
q.sfl(H.c([],[D.dM]))
q.shz(H.c([],[D.ed]))
q.shV(H.c([],[D.el]))
q.y=q.x=null
q.cQ(q.gfK(),q.ghj(),q.ghn())
i.dx=q
p=new O.hN()
p.b=new V.an(0,0,0,0)
p.c=1
p.d=10
p.e=!1
i.dy=p
p=q.x
q=p==null?q.x=D.O():p
q.h(0,i.ghJ())
q=i.dx
p=q.y
q=p==null?q.y=D.O():p
q.h(0,i.gaw())
i.fr=null
q=i.r
q.sbc(0,new V.ai(0.3,0.3,0.3))
q=i.x
q.sbc(0,new V.ai(0.8,0.8,0.8))
q=i.x
p=s.f.iL("../resources/Test.png")
o=q.c
if(!o.b)q.dD(new A.ao(o.a,!0,!1))
o=q.d
if(o!==p){if(o!=null)o.gp().X(0,q.gaw())
l=q.d
q.d=p
p.gp().h(0,q.gaw())
p=new D.I(q.b+".texture2D",l,q.d,[T.d6])
p.b=!0
q.a.L(p)}h=X.lR(!0,!1)
g=new M.dP()
g.a=!0
g.sfe(0,O.la(E.ap))
g.e.b2(g.gfS(),g.gfU())
g.y=g.x=g.r=g.f=null
f=X.m_(a2)
g.sbb(a2)
g.sb0(0,f)
g.sbh(a2)
q=g.e
e=F.ln()
F.ds(e,a2,a2,1,1,1,0,0,1)
F.ds(e,a2,a2,1,1,0,1,0,3)
F.ds(e,a2,a2,1,1,0,0,1,2)
F.ds(e,a2,a2,1,1,-1,0,0,0)
F.ds(e,a2,a2,1,1,0,-1,0,0)
F.ds(e,a2,a2,1,1,0,0,-1,3)
e.aK()
q.h(0,E.lZ(e))
g.sbh(i)
g.sb0(0,h)
g.sbb(j)
q=s.f
p=q.a
d=p.createTexture()
p.bindTexture(a5,d)
p.texParameteri(a5,10242,10497)
p.texParameteri(a5,10243,10497)
p.texParameteri(a5,10241,9729)
p.texParameteri(a5,10240,9729)
p.bindTexture(a5,a2)
c=new T.ep()
c.a=0
c.b=d
c.c=!1
c.d=0
q.aU(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aU(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aU(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aU(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aU(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aU(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=M.lc(a2,a2)
q=new O.ei()
q.b=1.0471975511965976
q.d=new V.ai(1,1,1)
l=q.c
q.c=c
c.gp().h(0,q.gaw())
p=new D.I("boxTexture",l,q.c,[T.ep])
p.b=!0
q.L(p)
b.sbh(q)
b.sb0(0,h)
b.sbb(j)
q=h.ch
a=new M.dT()
a.a=!0
a.c=X.lR(!0,!1)
p=O.m0(a2,a2)
o=a.gZ()
p.gp().h(0,o)
a.d=p
a.e=M.lc(a.c,p)
p=a.c.ch
n=$.mt
p=O.m0(n==null?$.mt=new V.V(0,1):n,p)
p.gp().h(0,o)
a.f=p
a.r=M.lc(a2,p)
a.d.sba(0)
a.f.sba(0)
a.d.sdQ(q)
a.d.sc8(a2)
a.f.sc8(a2)
a.d.scJ(a2)
a.f.scJ(a2)
a.d.sc7(a2)
a.f.sc7(a2)
a.r.sb0(0,a2)
q=M.ax
p=H.c([b,g,a],[q])
o=new M.dI()
o.bl(q)
o.e=!0
o.f=!1
o.r=null
o.b2(o.ghp(),o.ghr())
o.ah(0,p)
q=s.d
if(q!==o){if(q!=null)q.gp().X(0,s.gd_())
s.d=o
o.gp().h(0,s.gd_())
s.d0()}a0=new U.kO(a)
q=new V.ij(a3)
u=u.getElementById(a3)
q.c=u
if(u==null)H.B("Failed to find blurValue for RadioGroup")
q.dJ(0,"0.0",new U.kP(a0),!0)
q.an(0,"0.1",new U.kQ(a0))
q.an(0,"0.2",new U.kT(a0))
q.an(0,"0.3",new U.kU(a0))
q.an(0,"0.4",new U.kV(a0))
q.an(0,"0.5",new U.kW(a0))
q.an(0,"0.6",new U.kX(a0))
q.an(0,"0.7",new U.kY(a0))
q.an(0,"0.8",new U.kZ(a0))
q.an(0,"0.9",new U.l_(a0))
q.an(0,"1.0",new U.kR(a0))
u=s.z
if(u==null)u=s.z=D.O()
q={func:1,ret:-1,args:[D.z]}
p=H.n(new U.kS(a6,a),q)
if(u.b==null)u.sb6(H.c([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pL(s)},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b}},M={
lc:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dK()
k.a=!0
u=E.lZ(l)
t=F.ln()
s=t.a
r=new V.X(-1,-1,1)
r=r.w(0,Math.sqrt(r.E(r)))
q=s.bq(new V.bu(1,2,4,6),new V.an(1,0,0,1),new V.aq(-1,-1,0),new V.a9(0,1),r,l)
s=t.a
r=new V.X(1,-1,1)
r=r.w(0,Math.sqrt(r.E(r)))
p=s.bq(new V.bu(0,3,4,6),new V.an(0,0,1,1),new V.aq(1,-1,0),new V.a9(1,1),r,l)
s=t.a
r=new V.X(1,1,1)
r=r.w(0,Math.sqrt(r.E(r)))
o=s.bq(new V.bu(0,2,5,6),new V.an(0,1,0,1),new V.aq(1,1,0),new V.a9(1,0),r,l)
s=t.a
r=V.bt()
n=new V.X(-1,1,1)
n=n.w(0,Math.sqrt(n.E(n)))
m=s.bq(new V.bu(0,2,4,7),new V.an(1,1,0,1),new V.aq(-1,1,0),r,n,l)
t.d.ia(H.c([q,p,o,m],[F.aE]))
t.aK()
u.scS(0,t)
k.e=u
k.sbb(l)
k.sb0(0,a)
k.sbh(b)
return k},
dI:function dI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dK:function dK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){}},A={
nV:function(a,b){var u=a.aL,t=new A.e6(b,u)
t.bI(b,u)
t.eT(a,b)
return t},
nW:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aI],"$ab")
H.l(b0,"$ib",[A.aL],"$ab")
H.l(b1,"$ib",[A.aM],"$ab")
u="MaterialLight_"+a0.gay(a0)+a1.gay(a1)+a2.gay(a2)+a3.gay(a3)+a4.gay(a4)+a5.gay(a5)+a6.gay(a6)+a7.gay(a7)+a8.gay(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.u)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.u)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.u)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.aG()
if(k){t=$.by()
f=new Z.bj(f.a|t.a)}if(j){t=$.bx()
f=new Z.bj(f.a|t.a)}if(i){t=$.b3()
f=new Z.bj(f.a|t.a)}if(h){t=$.bw()
f=new Z.bj(f.a|t.a)}return new A.hM(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kB:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kA(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l3(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oX:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kA(b,t,"emission")
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
oU:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kB(b,t,"ambient")
b.a+="\n"},
oV:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kB(b,t,"diffuse")
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
oY:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kB(b,t,"invDiffuse")
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
p3:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kB(b,t,"specular")
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
p_:function(a,b){var u,t,s
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
p1:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kA(b,t,"reflect")
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
p2:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kA(b,t,"refract")
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
oW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.l3(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.av()
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
o=H.c([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
p0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.l3(t)
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
if(typeof u!=="number")return u.av()
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
k=H.c([],r)
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
p4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.l3(t)
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
if(typeof u!=="number")return u.av()
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
i=H.c([],u)
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
oZ:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.h])
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
p5:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ab("")
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
A.oX(a,j)
A.oU(a,j)
A.oV(a,j)
A.oY(a,j)
A.p3(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p1(a,j)
A.p2(a,j)}A.p_(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.oW(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p0(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p4(a,q[o],j)
A.oZ(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
p6:function(a,b){var u,t,s
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
p8:function(a,b){var u
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
p7:function(a,b){var u
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
pa:function(a,b){var u,t
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
pb:function(a,b){var u,t
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
p9:function(a,b){var u
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
pc:function(a,b){var u
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
l3:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aj(a,1)},
lq:function(a,b,c,d,e){var u=new A.j8(a,c,e)
u.f=d
u.si6(P.nT(d,0,P.m))
return u},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hm:function hm(a,b){this.a=a
this.b=b},
e6:function e6(a,b){var _=this
_.jn=_.dZ=_.dY=_.dX=_.aL=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jv=_.ju=_.jt=_.cp=_.co=_.cn=_.cm=_.cl=_.ck=_.js=_.ea=_.e9=_.jr=_.e8=_.e7=_.e6=_.jq=_.e5=_.e4=_.e3=_.jp=_.e2=_.e1=_.jo=_.e0=_.e_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aI:function aI(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aL=b3
_.dX=b4},
cf:function cf(a,b,c,d,e,f){var _=this
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
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d_:function d_(){},
ej:function ej(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
et:function et(){},
jc:function jc(a){this.a=a},
aP:function aP(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
eu:function eu(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
d9:function d9(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
cg:function cg(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
bT:function bT(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ds:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.X(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.X(u+a3,t+a1,s+a2)
q=new V.X(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.X(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kv(i)
l=F.kv(j.b)
k=F.pO(d,a0,new F.ku(j,F.kv(j.c),F.kv(j.d),l,m,c),b)
if(k!=null)a.iN(k)},
pO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aE,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.ln()
t=H.c([],[F.aE])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jr(g,g,new V.an(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cf(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jr(g,g,new V.an(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cf(d))}}u.d.ib(a+1,b+1,t)
return u},
cH:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.B(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.D("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
nP:function(a,b){var u=new F.br(),t=a.a
if(t==null)H.B(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.B(P.D("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.aa()
return u},
ln:function(){var u=new F.eh(),t=new F.js(u)
t.b=!1
t.si7(H.c([],[F.aE]))
u.a=t
t=new F.iz(u)
t.sc0(H.c([],[F.bO]))
u.b=t
t=new F.iy(u)
t.sfv(H.c([],[F.br]))
u.c=t
t=new F.ix(u)
t.sfo(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
jr:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aE(),r=new F.jx()
r.sc0(H.c([],[F.bO]))
s.b=r
r=new F.jw()
u=[F.br]
r.sfw(H.c([],u))
r.sfz(H.c([],u))
s.c=r
r=new F.jt()
u=[F.a8]
r.sfp(H.c([],u))
r.sfq(H.c([],u))
r.sfs(H.c([],u))
s.d=r
h=$.nj()
s.e=0
r=$.aG()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.by().a)!==0?e:t
s.x=(u&$.bx().a)!==0?b:t
s.y=(u&$.b3().a)!==0?f:t
s.z=(u&$.bY().a)!==0?g:t
s.Q=(u&$.nk().a)!==0?c:t
s.ch=(u&$.cx().a)!==0?i:0
s.cx=(u&$.bw().a)!==0?a:t
return s},
ku:function ku(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
br:function br(){this.b=this.a=null},
bO:function bO(){this.a=null},
eh:function eh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(a){this.a=a
this.b=null},
iy:function iy(a){this.a=a
this.b=null},
iz:function iz(a){this.a=a
this.b=null},
aE:function aE(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jz:function jz(a){this.a=a},
jy:function jy(a){this.a=a},
js:function js(a){this.a=a
this.c=this.b=null},
jt:function jt(){this.d=this.c=this.b=null},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(){this.c=this.b=null},
jx:function jx(){this.b=null}},T={
lo:function(a){var u=new T.iU()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bR:function bR(){},
d6:function d6(){},
iU:function iU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iV:function iV(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iX:function iX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iW:function iW(a,b,c,d,e,f,g){var _=this
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
H.li.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cX(a)},
i:function(a){return"Instance of '"+H.cb(a)+"'"}}
J.ht.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iP:1}
J.dY.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dZ.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.id.prototype={}
J.bU.prototype={}
J.bM.prototype={
i:function(a){var u=a[$.n7()]
if(u==null)return this.eP(a)
return"JavaScript function for "+H.j(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibH:1}
J.b9.prototype={
h:function(a,b){H.C(b,H.r(a,0))
if(!!a.fixed$length)H.B(P.K("add"))
a.push(b)},
X:function(a,b){var u
if(!!a.fixed$length)H.B(P.K("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
ah:function(a,b){var u,t
H.l(b,"$ii",[H.r(a,0)],"$ai")
if(!!a.fixed$length)H.B(P.K("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bo(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
iJ:function(a){return this.m(a,"")},
iC:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bo(a))}return t},
iB:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.P,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.E(b.$1(s)))return s
if(a.length!==u)throw H.d(P.bo(a))}throw H.d(H.lf())},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cV:function(a,b,c){if(b<0||b>a.length)throw H.d(P.af(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.af(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.r(a,0)])
return H.c(a.slice(b,c),[H.r(a,0)])},
cU:function(a,b){return this.cV(a,b,null)},
gaE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.lf())},
dM:function(a,b){var u,t
H.n(b,{func:1,ret:P.P,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.E(b.$1(a[t])))return!0
if(a.length!==u)throw H.d(P.bo(a))}return!1},
bG:function(a,b){var u=H.r(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.B(P.K("sort"))
H.ek(a,0,a.length-1,b,u)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
i:function(a){return P.le(a,"[","]")},
gU:function(a){return new J.au(a,a.length,[H.r(a,0)])},
gG:function(a){return H.cX(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.B(P.K("set length"))
if(b<0)throw H.d(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.cq(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.r(a,0))
if(!!a.immutable$list)H.B(P.K("indexed set"))
if(b>=a.length||b<0)throw H.d(H.cq(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.lh.prototype={}
J.au.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.u(s))
u=t.c
if(u>=r){t.sd3(null)
return!1}t.sd3(s[u]);++t.c
return!0},
sd3:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
J.c5.prototype={
io:function(a,b){var u
H.n0(b)
if(typeof b!=="number")throw H.d(H.aF(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbt(b)
if(this.gbt(a)===u)return 0
if(this.gbt(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbt:function(a){return a===0?1/a<0:a<0},
jc:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.K(""+a+".toInt()"))},
cq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.K(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.K(""+a+".round()"))},
eA:function(a,b){var u
if(b>20)throw H.d(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbt(a))return"-"+u
return u},
bi:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.K("Unexpected toString result: "+u))
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
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
q:function(a,b){if(typeof b!=="number")throw H.d(H.aF(b))
return a*b},
bj:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eS:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dF(a,b)},
ag:function(a,b){return(a|0)===a?a/b|0:this.dF(a,b)},
dF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.K("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.dE(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hT:function(a,b){if(b<0)throw H.d(H.aF(b))
return this.dE(a,b)},
dE:function(a,b){return b>31?0:a>>>b},
az:function(a,b){if(typeof b!=="number")throw H.d(H.aF(b))
return a>b},
$iA:1,
$iaa:1}
J.dX.prototype={$im:1}
J.dW.prototype={}
J.bL.prototype={
a0:function(a,b){if(b<0)throw H.d(H.cq(a,b))
if(b>=a.length)H.B(H.cq(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.d(H.cq(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.d(P.l7(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
c=P.bP(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
am:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.am(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.aF(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.d(P.il(b,null))
if(b>c)throw H.d(P.il(b,null))
if(c>a.length)throw H.d(P.il(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.u(a,b,null)},
jf:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ar:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
ei:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eh:function(a,b){return this.ei(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im8:1,
$ih:1}
H.t.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ada:function(){return[P.m]},
$ax:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h8.prototype={}
H.c6.prototype={
gU:function(a){var u=this
return new H.cN(u,u.gn(u),[H.al(u,"c6",0)])},
bE:function(a,b){return this.eO(0,H.n(b,{func:1,ret:P.P,args:[H.al(this,"c6",0)]}))}}
H.cN.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.dv(s),q=r.gn(s)
if(t.b!==q)throw H.d(P.bo(s))
u=t.c
if(u>=q){t.sb4(null)
return!1}t.sb4(r.I(s,u));++t.c
return!0},
sb4:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
H.hH.prototype={
gU:function(a){return new H.hI(J.bz(this.a),this.b,this.$ti)},
gn:function(a){return J.aH(this.a)},
I:function(a,b){return this.b.$1(J.fD(this.a,b))},
$ai:function(a,b){return[b]}}
H.hI.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.sb4(u.c.$1(t.gH(t)))
return!0}u.sb4(null)
return!1},
gH:function(a){return this.a},
sb4:function(a){this.a=H.C(a,H.r(this,1))},
$ab8:function(a,b){return[b]}}
H.hJ.prototype={
gn:function(a){return J.aH(this.a)},
I:function(a,b){return this.b.$1(J.fD(this.a,b))},
$ac6:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.dc.prototype={
gU:function(a){return new H.jB(J.bz(this.a),this.b,this.$ti)}}
H.jB.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.E(t.$1(u.gH(u))))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.c3.prototype={}
H.da.prototype={
k:function(a,b,c){H.C(c,H.al(this,"da",0))
throw H.d(P.K("Cannot modify an unmodifiable list"))}}
H.ew.prototype={}
H.fV.prototype={
i:function(a){return P.ll(this)},
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
return H.nE()},
$iy:1}
H.fW.prototype={
gn:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.di(b)},
di:function(a){return this.b[H.J(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.r(q,1)
H.n(b,{func:1,ret:-1,args:[H.r(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.di(r),p))}}}
H.j5.prototype={
aq:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i9.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hv.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jg.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l4.prototype={
$1:function(a){if(!!J.T(a).$ibG)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.fb.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iay:1}
H.cC.prototype={
i:function(a){return"Closure '"+H.cb(this).trim()+"'"},
$ibH:1,
gjh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iR.prototype={}
H.iH.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cw(u)+"'"}}
H.cz.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cz))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cX(this.a)
else u=typeof t!=="object"?J.dB(t):H.cX(t)
return(u^H.cX(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.cb(u)+"'")}}
H.j7.prototype={
i:function(a){return this.a}}
H.fR.prototype={
i:function(a){return this.a}}
H.iu.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jC.prototype={
i:function(a){return"Assertion failed: "+P.dQ(this.a)}}
H.a4.prototype={
gn:function(a){return this.a},
giI:function(a){return this.a===0},
ga9:function(a){return new H.hz(this,[H.r(this,0)])},
br:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.df(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.df(t,b)}else return s.iF(b)},
iF:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cu(u.bP(t,u.ct(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bm(r,b)
s=t==null?null:t.b
return s}else return q.iG(b)},
iG:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bP(r,s.ct(a))
t=s.cu(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.r(s,0))
H.C(c,H.r(s,1))
if(typeof b==="string"){u=s.b
s.d5(u==null?s.b=s.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d5(t==null?s.c=s.bZ():t,b,c)}else s.iH(b,c)},
iH:function(a,b){var u,t,s,r,q=this
H.C(a,H.r(q,0))
H.C(b,H.r(q,1))
u=q.d
if(u==null)u=q.d=q.bZ()
t=q.ct(a)
s=q.bP(u,t)
if(s==null)q.c3(u,t,[q.c_(a,b)])
else{r=q.cu(s,a)
if(r>=0)s[r].b=b
else s.push(q.c_(a,b))}},
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.r(s,0),H.r(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.d(P.bo(s))
u=u.c}},
d5:function(a,b,c){var u,t=this
H.C(b,H.r(t,0))
H.C(c,H.r(t,1))
u=t.bm(a,b)
if(u==null)t.c3(a,b,t.c_(b,c))
else u.b=c},
fF:function(){this.r=this.r+1&67108863},
c_:function(a,b){var u,t=this,s=new H.hy(H.C(a,H.r(t,0)),H.C(b,H.r(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fF()
return s},
ct:function(a){return J.dB(a)&0x3ffffff},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
i:function(a){return P.ll(this)},
bm:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
fj:function(a,b){delete a[b]},
df:function(a,b){return this.bm(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c3(t,u,t)
this.fj(t,u)
return t}}
H.hy.prototype={}
H.hz.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hA(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hA.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bo(t))
else{t=u.c
if(t==null){u.sd4(null)
return!1}else{u.sd4(t.a)
u.c=u.c.c
return!0}}},
sd4:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
H.kJ.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:55}
H.kL.prototype={
$1:function(a){return this.a(H.J(a))},
$S:51}
H.hu.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im8:1,
$ioa:1}
H.cS.prototype={$icS:1}
H.bN.prototype={$ibN:1,$iok:1}
H.e7.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cT.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pr(c)
H.bm(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.A]},
$ax:function(){return[P.A]},
$ii:1,
$ai:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e8.prototype={
k:function(a,b,c){H.a2(c)
H.bm(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.m]},
$ax:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.i2.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i5.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.i6.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.e9.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$iqa:1}
H.cU.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$icU:1,
$iR:1}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
P.jE.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.jD.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:56}
P.jF.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jG.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fh.prototype={
f2:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.kk(this,b),0),a)
else throw H.d(P.K("`setTimeout()` not found."))},
f3:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.kj(this,a,Date.now(),b),0),a)
else throw H.d(P.K("Periodic timer."))},
$ibg:1}
P.kk.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kj.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eS(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bl.prototype={
iM:function(a){if(this.c!==6)return!0
return this.b.b.cI(H.n(this.d,{func:1,ret:P.P,args:[P.Q]}),a.a,P.P,P.Q)},
iE:function(a){var u=this.e,t=P.Q,s={futureOr:1,type:H.r(this,1)},r=this.b.b
if(H.fA(u,{func:1,args:[P.Q,P.ay]}))return H.lG(r.j7(u,a.a,a.b,null,t,P.ay),s)
else return H.lG(r.cI(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aR.prototype={
ez:function(a,b,c){var u,t,s,r=H.r(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pe(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aR($.a1,[c])
s=b==null?1:3
this.d6(new P.bl(t,s,a,b,[r,c]))
return t},
jb:function(a,b){return this.ez(a,null,b)},
d6:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibl")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaR")
s=u.a
if(s<4){u.d6(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kE(null,null,s,H.n(new P.jP(t,a),{func:1,ret:-1}))}},
dv:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibl")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaR")
u=q.a
if(u<4){q.dv(a)
return}p.a=u
p.c=q.c}o.a=p.bo(a)
u=p.b
u.toString
P.kE(null,null,u,H.n(new P.jT(o,p),{func:1,ret:-1}))}},
c2:function(){var u=H.f(this.c,"$ibl")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
da:function(a){var u,t,s=this,r=H.r(s,0)
H.lG(a,{futureOr:1,type:r})
u=s.$ti
if(H.lD(a,"$icJ",u,"$acJ"))if(H.lD(a,"$iaR",u,null))P.mz(a,s)
else P.ow(a,s)
else{t=s.c2()
H.C(a,r)
s.a=4
s.c=a
P.df(s,t)}},
dc:function(a,b){var u,t=this
H.f(b,"$iay")
u=t.c2()
t.a=8
t.c=new P.am(a,b)
P.df(t,u)},
$icJ:1}
P.jP.prototype={
$0:function(){P.df(this.a,this.b)},
$S:0}
P.jT.prototype={
$0:function(){P.df(this.b,this.a.a)},
$S:0}
P.jQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.da(a)},
$S:30}
P.jR.prototype={
$2:function(a,b){H.f(b,"$iay")
this.a.dc(a,b)},
$1:function(a){return this.$2(a,null)},
$S:40}
P.jS.prototype={
$0:function(){this.a.dc(this.b,this.c)},
$S:0}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ev(H.n(s.d,{func:1}),null)}catch(r){u=H.ah(r)
t=H.cu(r)
if(o.d){s=H.f(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.T(n).$icJ){if(n instanceof P.aR&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jb(new P.jX(p),null)
s.a=!1}},
$S:3}
P.jX.prototype={
$1:function(a){return this.a},
$S:34}
P.jV.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.r(s,0)
q=H.C(n.c,r)
p=H.r(s,1)
n.a.b=s.b.b.cI(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ah(o)
t=H.cu(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jU.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iam")
r=m.c
if(H.E(r.iM(u))&&r.e!=null){q=m.b
q.b=r.iE(u)
q.a=!1}}catch(p){t=H.ah(p)
s=H.cu(p)
r=H.f(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.eE.prototype={}
P.iK.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aR($.a1,[P.m])
r.a=0
u=H.r(s,0)
t=H.n(new P.iM(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iN(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.iM.prototype={
$1:function(a){H.C(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.r(this.b,0)]}}}
P.iN.prototype={
$0:function(){this.b.da(this.a.a)},
$S:0}
P.d2.prototype={}
P.iL.prototype={}
P.bg.prototype={}
P.am.prototype={
i:function(a){return H.j(this.a)},
$ibG:1}
P.kt.prototype={$iqp:1}
P.kD.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.eb():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k2.prototype={
j8:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mL(r,r,this,a,-1)}catch(s){u=H.ah(s)
t=H.cu(s)
P.kC(r,r,this,u,H.f(t,"$iay"))}},
j9:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mM(r,r,this,a,b,-1,c)}catch(s){u=H.ah(s)
t=H.cu(s)
P.kC(r,r,this,u,H.f(t,"$iay"))}},
il:function(a,b){return new P.k4(this,H.n(a,{func:1,ret:b}),b)},
c6:function(a){return new P.k3(this,H.n(a,{func:1,ret:-1}))},
dN:function(a,b){return new P.k5(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ev:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mL(null,null,this,a,b)},
cI:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a1===C.f)return a.$1(b)
return P.mM(null,null,this,a,b,c,d)},
j7:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pf(null,null,this,a,b,c,d,e,f)}}
P.k4.prototype={
$0:function(){return this.a.ev(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k3.prototype={
$0:function(){return this.a.j8(this.b)},
$S:3}
P.k5.prototype={
$1:function(a){var u=this.c
return this.a.j9(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k0.prototype={
gU:function(a){var u=this,t=new P.eT(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ick")!=null}else{t=this.ff(b)
return t}},
ff:function(a){var u=this.d
if(u==null)return!1
return this.bN(this.dj(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.r(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d7(u==null?s.b=P.lv():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d7(t==null?s.c=P.lv():t,b)}else return s.f6(0,b)},
f6:function(a,b){var u,t,s,r=this
H.C(b,H.r(r,0))
u=r.d
if(u==null)u=r.d=P.lv()
t=r.dd(b)
s=u[t]
if(s==null)u[t]=[r.bK(b)]
else{if(r.bN(s,b)>=0)return!1
s.push(r.bK(b))}return!0},
X:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hF(this.c,b)
else return this.hE(0,b)},
hE:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dj(r,b)
t=s.bN(u,b)
if(t<0)return!1
s.dG(u.splice(t,1)[0])
return!0},
d7:function(a,b){H.C(b,H.r(this,0))
if(H.f(a[b],"$ick")!=null)return!1
a[b]=this.bK(b)
return!0},
hF:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ick")
if(u==null)return!1
this.dG(u)
delete a[b]
return!0},
d9:function(){this.r=1073741823&this.r+1},
bK:function(a){var u,t=this,s=new P.ck(H.C(a,H.r(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d9()
return s},
dG:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d9()},
dd:function(a){return J.dB(a)&1073741823},
dj:function(a,b){return a[this.dd(b)]},
bN:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1}}
P.ck.prototype={}
P.eT.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bo(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(H.C(t.a,H.r(u,0)))
u.c=u.c.b
return!0}}},
sd8:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
P.hB.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hC.prototype={$ii:1,$ib:1}
P.x.prototype={
gU:function(a){return new H.cN(a,this.gn(a),[H.ct(this,a,"x",0)])},
I:function(a,b){return this.j(a,b)},
je:function(a,b){var u,t=this,s=H.c([],[H.ct(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jd:function(a){return this.je(a,!0)},
iz:function(a,b,c,d){var u
H.C(d,H.ct(this,a,"x",0))
P.bP(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.le(a,"[","]")}}
P.hE.prototype={}
P.hF.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:5}
P.ad.prototype={
F:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.ct(s,a,"ad",0),H.ct(s,a,"ad",1)]})
for(u=J.bz(s.ga9(a));u.v();){t=u.gH(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aH(this.ga9(a))},
i:function(a){return P.ll(a)},
$iy:1}
P.kl.prototype={
k:function(a,b,c){H.C(b,H.r(this,0))
H.C(c,H.r(this,1))
throw H.d(P.K("Cannot modify unmodifiable map"))}}
P.hG.prototype={
j:function(a,b){return J.dA(this.a,b)},
k:function(a,b,c){J.l5(this.a,H.C(b,H.r(this,0)),H.C(c,H.r(this,1)))},
F:function(a,b){J.lN(this.a,H.n(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gn:function(a){return J.aH(this.a)},
i:function(a){return J.at(this.a)},
$iy:1}
P.ex.prototype={}
P.k7.prototype={
ah:function(a,b){var u
for(u=J.bz(H.l(b,"$ii",this.$ti,"$ai"));u.v();)this.h(0,u.gH(u))},
i:function(a){return P.le(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.me(b,"index")
for(u=P.oA(r,r.r,H.r(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.a_(b,r,"index",null,t))},
$ii:1,
$imh:1}
P.eU.prototype={}
P.fn.prototype={}
P.fN.prototype={
iO:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bP(a0,a1,b.length)
u=$.nm()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kI(C.b.C(b,n))
j=H.kI(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ab("")
g=r.a+=C.b.u(b,s,t)
r.a=g+H.cc(m)
s=n
continue}}throw H.d(P.a5("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.u(b,s,a1)
f=g.length
if(q>=0)P.lS(b,p,a1,q,o,f)
else{e=C.e.bj(f-1,4)+1
if(e===1)throw H.d(P.a5(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b_(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lS(b,p,a1,q,o,d)
else{e=C.e.bj(d,4)
if(e===1)throw H.d(P.a5(c,b,a1))
if(e>1)b=C.b.b_(b,a1,a1,e===2?"==":"=")}return b},
$ac2:function(){return[[P.b,P.m],P.h]}}
P.fO.prototype={
$abE:function(){return[[P.b,P.m],P.h]}}
P.c2.prototype={}
P.bE.prototype={}
P.ha.prototype={
$ac2:function(){return[P.h,[P.b,P.m]]}}
P.hq.prototype={
i:function(a){return this.a}}
P.hp.prototype={
fg:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ab("")
if(r>b)q.a+=C.b.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nx(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abE:function(){return[P.h,P.h]}}
P.jo.prototype={
giy:function(){return C.N}}
P.jq.prototype={
ce:function(a){var u,t,s=P.bP(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kr(u)
if(t.ft(a,0,s)!==s)t.dI(J.nt(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oQ(0,t.b,u.length)))},
$abE:function(){return[P.h,[P.b,P.m]]}}
P.kr.prototype={
dI:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ft:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dI(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jp.prototype={
ce:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.on(!1,a,0,null)
if(u!=null)return u
t=P.bP(0,null,J.aH(a))
s=P.mO(a,0,t)
if(s>0){r=P.d3(a,0,s)
if(s===t)return r
q=new P.ab(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ab("")
n=new P.kq(!1,q)
n.c=o
n.ip(a,p,t)
if(n.e>0){H.B(P.a5("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cc(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abE:function(){return[[P.b,P.m],P.h]}}
P.kq.prototype={
ip:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dv(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.av()
if((o&192)!==128){n=P.a5(h+C.e.bi(o,16),a,p)
throw H.d(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a5("Overlong encoding of 0x"+C.e.bi(u,16),a,p-s-1)
throw H.d(n)}if(u>1114111){n=P.a5("Character outside valid Unicode range: 0x"+C.e.bi(u,16),a,p-s-1)
throw H.d(n)}if(!i.c||u!==65279)q.a+=H.cc(u)
i.c=!1}for(n=p<c;n;){m=P.mO(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d3(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.R()
if(o<0){j=P.a5("Negative UTF-8 code unit: -0x"+C.e.bi(-o,16),a,k-1)
throw H.d(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a5(h+C.e.bi(o,16),a,k-1)
throw H.d(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.P.prototype={}
P.aA.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.aX(u,30))&1073741823},
i:function(a){var u=this,t=P.nF(H.o6(u)),s=P.dL(H.o4(u)),r=P.dL(H.o0(u)),q=P.dL(H.o1(u)),p=P.dL(H.o3(u)),o=P.dL(H.o5(u)),n=P.nG(H.o2(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bF.prototype={
az:function(a,b){return C.e.az(this.a,b.gjj())},
t:function(a,b){if(b==null)return!1
return b instanceof P.bF&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.h7(),q=this.a
if(q<0)return"-"+new P.bF(0-q).i(0)
u=r.$1(C.e.ag(q,6e7)%60)
t=r.$1(C.e.ag(q,1e6)%60)
s=new P.h6().$1(q%1e6)
return""+C.e.ag(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.h7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.bG.prototype={}
P.fG.prototype={
i:function(a){return"Assertion failed"}}
P.eb.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbM()+o+u
if(!q.a)return t
s=q.gbL()
r=P.dQ(q.b)
return t+s+": "+r}}
P.cd.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hs.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var u,t=H.a2(this.b)
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gn:function(a){return this.f}}
P.jh.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.je.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.d1.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fU.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dQ(u)+"."}}
P.ic.prototype={
i:function(a){return"Out of Memory"},
$ibG:1}
P.em.prototype={
i:function(a){return"Stack Overflow"},
$ibG:1}
P.h0.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eM.prototype={
i:function(a){return"Exception: "+this.a}}
P.hj.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a0(f,q)
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
k=""}j=C.b.u(f,m,n)
return h+l+j+k+"\n"+C.b.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bH.prototype={}
P.m.prototype={}
P.i.prototype={
bE:function(a,b){var u=H.al(this,"i",0)
return new H.dc(this,H.n(b,{func:1,ret:P.P,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.v();)++u
return u},
gaQ:function(a){var u,t=this.gU(this)
if(!t.v())throw H.d(H.lf())
u=t.gH(t)
if(t.v())throw H.d(H.nM())
return u},
I:function(a,b){var u,t,s
P.me(b,"index")
for(u=this.gU(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.d(P.a_(b,this,"index",null,t))},
i:function(a){return P.nL(this,"(",")")}}
P.b8.prototype={}
P.b.prototype={$ii:1}
P.y.prototype={}
P.L.prototype={
gG:function(a){return P.Q.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
t:function(a,b){return this===b},
gG:function(a){return H.cX(this)},
i:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.i(this)}}
P.ay.prototype={}
P.h.prototype={$im8:1}
P.ab.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipZ:1}
P.jm.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$iy",[r,r],"$ay")
H.J(b)
u=J.dw(b).eh(b,"=")
if(u===-1){if(b!=="")J.l5(a,P.lx(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.u(b,0,u)
s=C.b.aj(b,u+1)
r=this.a
J.l5(a,P.lx(t,0,t.length,r,!0),P.lx(s,0,s.length,r,!0))}return a},
$S:31}
P.jj.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jk.prototype={
$2:function(a,b){throw H.d(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.jl.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fC(C.b.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.cl.prototype={
geF:function(){return this.b},
gcr:function(a){var u=this.c
if(u==null)return""
if(C.b.a7(u,"["))return C.b.u(u,1,u.length-1)
return u},
gbx:function(a){var u=this.d
if(u==null)return P.mD(this.a)
return u},
gcF:function(a){var u=this.f
return u==null?"":u},
gec:function(){var u=this.r
return u==null?"":u},
es:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iy",[P.h,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a7(p,"/"))p="/"+p
n=P.lw(null,0,0,b)
return new P.cl(u,s,q,r,p,n,m.r)},
gcG:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shD(new P.ex(P.mr(u==null?"":u),[t,t]))}return s.Q},
ged:function(){return this.c!=null},
geg:function(){return this.f!=null},
gee:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.j(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.j(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.j(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ilr)if(s.a==b.gbF())if(s.c!=null===b.ged())if(s.b==b.geF())if(s.gcr(s)==b.gcr(b))if(s.gbx(s)==b.gbx(b))if(s.e===b.geq(b)){u=s.f
t=u==null
if(!t===b.geg()){if(t)u=""
if(u===b.gcF(b)){u=s.r
t=u==null
if(!t===b.gee()){if(t)u=""
u=u===b.gec()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
shD:function(a){var u=P.h
this.Q=H.l(a,"$iy",[u,u],"$ay")},
$ilr:1,
gbF:function(){return this.a},
geq:function(a){return this.e}}
P.km.prototype={
$1:function(a){throw H.d(P.a5("Invalid port",this.a,this.b+1))},
$S:42}
P.kn.prototype={
$1:function(a){return P.fo(C.X,a,C.h,!1)},
$S:22}
P.kp.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fo(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fo(C.n,b,C.h,!0))}},
$S:17}
P.ko.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bz(H.mZ(b,"$ii")),t=this.a;u.v();)t.$2(a,H.J(u.gH(u)))},
$S:35}
P.ji.prototype={
geE:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.ei(u,"?",o)
s=u.length
if(t>=0){r=P.dr(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jK("data",p,p,p,P.dr(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kx.prototype={
$1:function(a){return new Uint8Array(96)},
$S:47}
P.kw.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nu(u,0,96,b)
return u},
$S:33}
P.ky.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kz.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.ka.prototype={
ged:function(){return this.c>0},
gef:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
geg:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gee:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdm:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbF:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdl())q=t.x="http"
else if(t.gdm()){t.x="https"
q="https"}else if(q===4&&C.b.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a7(t.a,r)){t.x=r
q=r}else{q=C.b.u(t.a,0,q)
t.x=q}return q},
geF:function(){var u=this.c,t=this.b+3
return u>t?C.b.u(this.a,t,u-1):""},
gcr:function(a){var u=this.c
return u>0?C.b.u(this.a,u,this.d):""},
gbx:function(a){var u,t=this
if(t.gef()){u=t.d
if(typeof u!=="number")return u.A()
return P.fC(C.b.u(t.a,u+1,t.e),null,null)}if(t.gdl())return 80
if(t.gdm())return 443
return 0},
geq:function(a){return C.b.u(this.a,this.e,this.f)},
gcF:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.b.u(this.a,u+1,t):""},
gec:function(){var u=this.r,t=this.a
return u<t.length?C.b.aj(t,u+1):""},
gcG:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.h
return new P.ex(P.mr(u.gcF(u)),[t,t])},
es:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iy",[P.h,null],"$ay")
u=k.gbF()
t=u==="file"
s=k.c
r=s>0?C.b.u(k.a,k.b+3,s):""
q=k.gef()?k.gbx(k):j
s=k.c
if(s>0)p=C.b.u(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.u(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a7(o,"/"))o="/"+o
m=P.lw(j,0,0,b)
n=k.r
l=n<s.length?C.b.aj(s,n+1):j
return new P.cl(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilr&&this.a===b.i(0)},
i:function(a){return this.a},
$ilr:1}
P.jK.prototype={}
W.w.prototype={}
W.fE.prototype={
gn:function(a){return a.length}}
W.dC.prototype={
i:function(a){return String(a)},
$idC:1}
W.fF.prototype={
i:function(a){return String(a)}}
W.cy.prototype={$icy:1}
W.c_.prototype={$ic_:1}
W.bA.prototype={$ibA:1}
W.c1.prototype={
cO:function(a,b,c){if(c!=null)return a.getContext(b,P.pn(c))
return a.getContext(b)},
eH:function(a,b){return this.cO(a,b,null)},
$ic1:1}
W.cB.prototype={$icB:1}
W.bC.prototype={
gn:function(a){return a.length}}
W.cD.prototype={$icD:1}
W.fX.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cE.prototype={
gn:function(a){return a.length}}
W.fY.prototype={}
W.b6.prototype={}
W.b7.prototype={}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h_.prototype={
gn:function(a){return a.length}}
W.h2.prototype={
gn:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.h3.prototype={
i:function(a){return String(a)}}
W.dN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$iak",[P.aa],"$aak")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ak,P.aa]]},
$ax:function(){return[[P.ak,P.aa]]},
$ii:1,
$ai:function(){return[[P.ak,P.aa]]},
$ib:1,
$ab:function(){return[[P.ak,P.aa]]},
$aH:function(){return[[P.ak,P.aa]]}}
W.dO.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gau(a))+" x "+H.j(this.gap(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbu(b)&&a.top===u.gbB(b)&&this.gau(a)===u.gau(b)&&this.gap(a)===u.gap(b)},
gG:function(a){return W.mB(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gau(a)),C.d.gG(this.gap(a)))},
gdO:function(a){return a.bottom},
gap:function(a){return a.height},
gbu:function(a){return a.left},
gbA:function(a){return a.right},
gbB:function(a){return a.top},
gau:function(a){return a.width},
$iak:1,
$aak:function(){return[P.aa]}}
W.h4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.J(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.h5.prototype={
gn:function(a){return a.length}}
W.jI.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iU")},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jd(this)
return new J.au(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$ai:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gik:function(a){return new W.jL(a)},
gcd:function(a){return new W.jI(a,a.children)},
gdP:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lY
if(u==null){u=H.c([],[W.aD])
t=new W.ea(u)
C.a.h(u,W.mA(null))
C.a.h(u,W.mC())
$.lY=t
d=t}else d=u
u=$.lX
if(u==null){u=new W.fp(d)
$.lX=u
c=u}else{u.a=d
c=u}}if($.bp==null){u=document
t=u.implementation.createHTMLDocument("")
$.bp=t
$.ld=t.createRange()
t=$.bp.createElement("base")
H.f(t,"$icy")
t.href=u.baseURI
$.bp.head.appendChild(t)}u=$.bp
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibA")}u=$.bp
if(!!this.$ibA)s=u.body
else{s=u.createElement(a.tagName)
$.bp.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.V,a.tagName)){$.ld.selectNodeContents(s)
r=$.ld.createContextualFragment(b)}else{s.innerHTML=b
r=$.bp.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bp.body
if(s==null?u!=null:s!==u)J.lP(s)
c.cP(r)
document.adoptNode(r)
return r},
is:function(a,b,c){return this.ao(a,b,c,null)},
eJ:function(a,b){a.textContent=null
a.appendChild(this.ao(a,b,null,null))},
$iU:1,
gew:function(a){return a.tagName}}
W.h9.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:19}
W.o.prototype={$io:1}
W.k.prototype={
i9:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f7(a,b,c,!1)},
f7:function(a,b,c,d){return a.addEventListener(b,H.cp(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aK.prototype={$iaK:1}
W.cI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaK")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$icI:1,
$aH:function(){return[W.aK]}}
W.he.prototype={
gn:function(a){return a.length}}
W.hi.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.ho.prototype={
gn:function(a){return a.length}}
W.c4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic4:1,
$aH:function(){return[W.G]}}
W.bq.prototype={$ibq:1,
gdR:function(a){return a.data}}
W.cL.prototype={$icL:1}
W.cM.prototype={$icM:1}
W.ba.prototype={$iba:1}
W.e2.prototype={
i:function(a){return String(a)},
$ie2:1}
W.hW.prototype={
gn:function(a){return a.length}}
W.cQ.prototype={$icQ:1}
W.hX.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.h])
this.F(a,new W.hY(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:10}
W.hZ.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.h])
this.F(a,new W.i_(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.i_.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:10}
W.aV.prototype={$iaV:1}
W.i0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.ae.prototype={$iae:1}
W.as.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.mi("No elements"))
if(t>1)throw H.d(P.mi("More than one element"))
return u.firstChild},
ah:function(a,b){var u,t,s,r
H.l(b,"$ii",[W.G],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.dR(u,u.length,[H.ct(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ax:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
j3:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j5:function(a,b){var u,t
try{u=a.parentNode
J.nr(u,b,a)}catch(t){H.ah(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eN(a):u},
ie:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hH:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aW.prototype={$iaW:1,
gn:function(a){return a.length}}
W.ig.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.is.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.h])
this.F(a,new W.it(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
W.it.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:10}
W.iv.prototype={
gn:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ax:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gn:function(a){return a.length}}
W.iI.prototype={
j:function(a,b){return a.getItem(H.J(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.c([],[P.h])
this.F(a,new W.iJ(u))
return u},
gn:function(a){return a.length},
$aad:function(){return[P.h,P.h]},
$iy:1,
$ay:function(){return[P.h,P.h]}}
W.iJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:17}
W.aN.prototype={$iaN:1}
W.bf.prototype={$ibf:1}
W.en.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
u=W.nH("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ah(0,new W.as(u))
return t}}
W.iP.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaQ(u)
s.toString
u=new W.as(s)
r=u.gaQ(u)
t.toString
r.toString
new W.as(t).ah(0,new W.as(r))
return t}}
W.iQ.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaQ(u)
t.toString
s.toString
new W.as(t).ah(0,new W.as(s))
return t}}
W.d5.prototype={$id5:1}
W.b_.prototype={$ib_:1}
W.aO.prototype={$iaO:1}
W.iS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aH:function(){return[W.aO]}}
W.iT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$ax:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.iZ.prototype={
gn:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.j2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b0]},
$ax:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aH:function(){return[W.b0]}}
W.j3.prototype={
gn:function(a){return a.length}}
W.bS.prototype={}
W.jn.prototype={
i:function(a){return String(a)}}
W.jA.prototype={
gn:function(a){return a.length}}
W.bk.prototype={
giv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.K("deltaY is not supported"))},
giu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.K("deltaX is not supported"))},
$ibk:1}
W.dd.prototype={
hI:function(a,b){return a.requestAnimationFrame(H.cp(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
fm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.de.prototype={$ide:1}
W.jJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ax:function(){return[W.W]},
$ii:1,
$ai:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aH:function(){return[W.W]}}
W.eH.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbu(b)&&a.top===u.gbB(b)&&a.width===u.gau(b)&&a.height===u.gap(b)},
gG:function(a){return W.mB(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gap:function(a){return a.height},
gau:function(a){return a.width}}
W.jY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.eZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ax:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.kb.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.kf.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aH:function(){return[W.aN]}}
W.jH.prototype={
F:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga9(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga9:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$ide")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.h,P.h]},
$ay:function(){return[P.h,P.h]}}
W.jL.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga9(this).length}}
W.jM.prototype={}
W.lu.prototype={}
W.jN.prototype={}
W.jO.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:32}
W.bV.prototype={
eY:function(a){var u
if($.dg.giI($.dg)){for(u=0;u<262;++u)$.dg.k(0,C.U[u],W.py())
for(u=0;u<12;++u)$.dg.k(0,C.q[u],W.pz())}},
aY:function(a){return $.nn().S(0,W.cF(a))},
aC:function(a,b,c){var u=$.dg.j(0,H.j(W.cF(a))+"::"+b)
if(u==null)u=$.dg.j(0,"*::"+b)
if(u==null)return!1
return H.lC(u.$4(a,b,c,this))},
$iaD:1}
W.H.prototype={
gU:function(a){return new W.dR(a,this.gn(a),[H.ct(this,a,"H",0)])}}
W.ea.prototype={
aY:function(a){return C.a.dM(this.a,new W.i8(a))},
aC:function(a,b,c){return C.a.dM(this.a,new W.i7(a,b,c))},
$iaD:1}
W.i8.prototype={
$1:function(a){return H.f(a,"$iaD").aY(this.a)},
$S:20}
W.i7.prototype={
$1:function(a){return H.f(a,"$iaD").aC(this.a,this.b,this.c)},
$S:20}
W.f6.prototype={
f1:function(a,b,c,d){var u,t,s
this.a.ah(0,c)
u=b.bE(0,new W.k8())
t=b.bE(0,new W.k9())
this.b.ah(0,u)
s=this.c
s.ah(0,C.x)
s.ah(0,t)},
aY:function(a){return this.a.S(0,W.cF(a))},
aC:function(a,b,c){var u=this,t=W.cF(a),s=u.c
if(s.S(0,H.j(t)+"::"+b))return u.d.ic(c)
else if(s.S(0,"*::"+b))return u.d.ic(c)
else{s=u.b
if(s.S(0,H.j(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.j(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaD:1}
W.k8.prototype={
$1:function(a){return!C.a.S(C.q,H.J(a))},
$S:21}
W.k9.prototype={
$1:function(a){return C.a.S(C.q,H.J(a))},
$S:21}
W.kh.prototype={
aC:function(a,b,c){if(this.eR(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.ki.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.J(a))},
$S:22}
W.kg.prototype={
aY:function(a){var u=J.T(a)
if(!!u.$icZ)return!1
u=!!u.$iq
if(u&&W.cF(a)==="foreignObject")return!1
if(u)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.a7(b,"on"))return!1
return this.aY(a)},
$iaD:1}
W.dR.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdk(J.dA(u.a,t))
u.c=t
return!0}u.sdk(null)
u.c=s
return!1},
gH:function(a){return this.d},
sdk:function(a){this.d=H.C(a,H.r(this,0))},
$ib8:1}
W.aD.prototype={}
W.k6.prototype={$iqb:1}
W.fp.prototype={
cP:function(a){new W.ks(this).$2(a,null)},
b8:function(a,b){if(b==null)J.lP(a)
else b.removeChild(a)},
hM:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nv(a)
n=o.a.getAttribute("is")
H.f(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.E(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ah(r)}t="element unprintable"
try{t=J.at(a)}catch(r){H.ah(r)}try{s=W.cF(a)
this.hL(H.f(a,"$iU"),b,p,t,s,H.f(o,"$iy"),H.J(n))}catch(r){if(H.ah(r) instanceof P.aT)throw r
else{this.b8(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b8(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aY(a)){o.b8(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aC(a,"is",g)){o.b8(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.c(u.slice(0),[H.r(u,0)])
for(s=f.ga9(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.ny(r)
H.J(r)
if(!q.aC(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id5)o.cP(a.content)},
$ipX:1}
W.ks.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hM(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b8(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ah(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:37}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
P.kc.prototype={
eb:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cM:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaA)return new Date(a.a)
if(!!u.$ioa)throw H.d(P.jf("structured clone of RegExp"))
if(!!u.$iaK)return a
if(!!u.$ic_)return a
if(!!u.$icI)return a
if(!!u.$ibq)return a
if(!!u.$icS||!!u.$ibN||!!u.$icQ)return a
if(!!u.$iy){t=q.eb(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.ke(p,q))
return p.a}if(!!u.$ib){t=q.eb(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.ir(a,t)}throw H.d(P.jf("structured clone of other type"))},
ir:function(a,b){var u,t=J.dv(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cM(t.j(a,u)))
return r}}
P.ke.prototype={
$2:function(a,b){this.a.a[a]=this.b.cM(b)},
$S:5}
P.fm.prototype={$ibq:1,
gdR:function(a){return this.a}}
P.kF.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.kd.prototype={}
P.hf.prototype={
gbn:function(){var u=this.b,t=H.al(u,"x",0),s=W.U
return new H.hH(new H.dc(u,H.n(new P.hg(),{func:1,ret:P.P,args:[t]}),[t]),H.n(new P.hh(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbn()
J.nw(u.b.$1(J.fD(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aH(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.fD(u.a,b))},
gU:function(a){var u=P.m4(this.gbn(),!1,W.U)
return new J.au(u,u.length,[H.r(u,0)])},
$ax:function(){return[W.U]},
$ai:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.hg.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:19}
P.hh.prototype={
$1:function(a){return H.p(H.f(a,"$iG"),"$iU")},
$S:39}
P.k1.prototype={
gbA:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.r(this,0))},
gdO:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.r(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iak){t=p.a
if(t==u.gbu(b)){s=p.b
if(s==u.gbB(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.F(r)
q=H.r(p,0)
if(H.C(t+r,q)===u.gbA(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.F(t)
u=H.C(s+t,q)===u.gdO(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dB(s),q=t.b,p=J.dB(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.F(o)
u=H.r(t,0)
o=C.e.gG(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.F(s)
u=C.e.gG(H.C(q+s,u))
return P.oz(P.k_(P.k_(P.k_(P.k_(0,r),p),o),u))}}
P.ak.prototype={
gbu:function(a){return this.a},
gbB:function(a){return this.b},
gau:function(a){return this.c},
gap:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.hx.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibb")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.ia.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibe")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aH:function(){return[P.be]}}
P.ii.prototype={
gn:function(a){return a.length}}
P.cZ.prototype={$icZ:1}
P.iO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.J(c)
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.q.prototype={
gcd:function(a){return new P.hf(a,new W.as(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aD])
C.a.h(p,W.mA(null))
C.a.h(p,W.mC())
C.a.h(p,new W.kg())
c=new W.fp(new W.ea(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).is(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bh.prototype={$ibh:1}
P.j4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibh")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bh]},
$ii:1,
$ai:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aH:function(){return[P.bh]}}
P.eR.prototype={}
P.eS.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.fk.prototype={}
P.fl.prototype={}
P.R.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$iok:1}
P.fI.prototype={
gn:function(a){return a.length}}
P.fJ.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
F:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.h])
this.F(a,new P.fK(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.d(P.K("Not supported"))},
$aad:function(){return[P.h,null]},
$iy:1,
$ay:function(){return[P.h,null]}}
P.fK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:10}
P.fL.prototype={
gn:function(a){return a.length}}
P.bZ.prototype={}
P.ib.prototype={
gn:function(a){return a.length}}
P.eF.prototype={}
P.dF.prototype={$idF:1}
P.dS.prototype={$idS:1}
P.ee.prototype={$iee:1}
P.ef.prototype={$ief:1}
P.ce.prototype={
ey:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibq&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.po(g))
return}if(!!u.$icL&&h==null&&t&&!0){this.hY(a,b,c,d,e,f,g)
return}throw H.d(P.dD("Incorrect number or type of arguments"))},
ex:function(a,b,c,d,e,f,g){return this.ey(a,b,c,d,e,f,g,null,null,null)},
hY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a3:function(a,b,c){return a.uniform1f(b,c)},
bC:function(a,b,c){return a.uniform1i(b,c)},
jg:function(a,b,c,d){return a.uniform2f(b,c,d)},
V:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cL:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ice:1}
P.eg.prototype={$ieg:1}
P.eo.prototype={$ieo:1}
P.ev.prototype={$iev:1}
P.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.a_(b,a,null,null,null))
return P.bv(a.item(b))},
k:function(a,b,c){H.f(c,"$iy")
throw H.d(P.K("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ii:1,
$ai:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aH:function(){return[[P.y,,,]]}}
P.f9.prototype={}
P.fa.prototype={}
O.a3.prototype={
bl:function(a){var u=this
u.sfA(H.c([],[a]))
u.sdt(null)
u.sdn(null)
u.sdu(null)},
cQ:function(a,b,c){var u=this,t=H.al(u,"a3",0)
H.n(b,{func:1,ret:P.P,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdt(b)
u.sdn(a)
u.sdu(c)},
b2:function(a,b){return this.cQ(a,null,b)},
ds:function(a){var u
H.l(a,"$ii",[H.al(this,"a3",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cZ:function(a,b){var u
H.l(b,"$ii",[H.al(this,"a3",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.au(u,u.length,[H.r(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.al(s,"a3",0)
H.C(b,r)
r=[r]
if(H.E(s.ds(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cZ(t,H.c([b],r))}},
ah:function(a,b){var u,t,s=this
H.l(b,"$ii",[H.al(s,"a3",0)],"$ai")
if(H.E(s.ds(b))){u=s.a
t=u.length
C.a.ah(u,b)
s.cZ(t,b)}},
sfA:function(a){this.a=H.l(a,"$ib",[H.al(this,"a3",0)],"$ab")},
sdt:function(a){this.b=H.n(a,{func:1,ret:P.P,args:[[P.i,H.al(this,"a3",0)]]})},
sdn:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.al(this,"a3",0)]]})},
sdu:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.al(this,"a3",0)]]})},
$ii:1}
O.cP.prototype={
gn:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
aR:function(){var u=this.b
if(u!=null)u.B(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gaE(u)
else return V.c8()},
bz:function(a){var u=this.a
if(a==null)C.a.h(u,V.c8())
else C.a.h(u,a)
this.aR()},
aN:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sbR:function(a){this.a=H.l(a,"$ib",[V.av],"$ab")}}
E.fP.prototype={}
E.ap.prototype={
scS:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().X(0,s.gen())
u=s.c
if(u!=null)u.gp().h(0,s.gen())
t=new D.I("shape",r,s.c,[F.eh])
t.b=!0
s.bw(t)}},
ac:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.r(u,0)]);u.v();)u.d.ac(0,b)},
a5:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga6(s))
s.aR()
a.cE(t.f)
s=a.dy
u=(s&&C.a).gaE(s)
if(u!=null&&t.d!=null)u.cH(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.r(s,0)]);s.v();)s.d.a5(a)
a.cD()
a.dx.aN()},
gp:function(){var u=this.z
return u==null?this.z=D.O():u},
bw:function(a){var u=this.z
if(u!=null)u.B(a)},
aa:function(){return this.bw(null)},
eo:function(a){H.f(a,"$iz")
this.e=null
this.bw(a)},
iU:function(){return this.eo(null)},
em:function(a){this.bw(H.f(a,"$iz"))},
iR:function(){return this.em(null)},
iQ:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ap],"$ai")
for(u=b.length,t=this.gel(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cG()
o.saB(null)
o.sb6(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saB(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
iT:function(a,b){var u,t
H.l(b,"$ii",[E.ap],"$ai")
for(u=b.gU(b),t=this.gel();u.v();)u.gH(u).gp().X(0,t)
this.aa()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seX:function(a,b){this.y=H.l(b,"$ia3",[E.ap],"$aa3")},
$ic9:1}
E.io.prototype={
eU:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cP()
t=[V.av]
u.sbR(H.c([],t))
u.b=null
u.gp().h(0,new E.ip(s))
s.cy=u
u=new O.cP()
u.sbR(H.c([],t))
u.b=null
u.gp().h(0,new E.iq(s))
s.db=u
u=new O.cP()
u.sbR(H.c([],t))
u.b=null
u.gp().h(0,new E.ir(s))
s.dx=u
s.shX(H.c([],[O.bQ]))
u=s.dy;(u&&C.a).h(u,null)
s.shS(new H.a4([P.h,A.d_]))},
gj2:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.q(0,u.ga6(u))
s=u}return s},
ger:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj2()
u=t.dx
u=t.ch=s.q(0,u.ga6(u))
s=u}return s},
cE:function(a){var u=this.dy,t=a==null?(u&&C.a).gaE(u):a;(u&&C.a).h(u,t)},
cD:function(){var u=this.dy
if(u.length>1)u.pop()},
c5:function(a){var u=a.b
if(u.length===0)throw H.d(P.D("May not cache a shader with no name."))
if(this.fr.br(0,u))throw H.d(P.D('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
shX:function(a){this.dy=H.l(a,"$ib",[O.bQ],"$ab")},
shS:function(a){this.fr=H.l(a,"$iy",[P.h,A.d_],"$ay")}}
E.ip.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:8}
E.iq.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.ir.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:8}
E.eq.prototype={
d1:function(a){H.f(a,"$iz")
this.eu()},
d0:function(){return this.d1(null)},
giD:function(){var u,t=this,s=Date.now(),r=C.e.ag(P.lW(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aA(s,!1)
return u/r},
dz:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.F(r)
u=C.d.cq(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.cq(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ml(C.o,s.gj6())}},
eu:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iY(this),{func:1,ret:-1,args:[P.aa]})
C.E.fm(u)
C.E.hI(u,W.mR(t,P.aa))}},
j4:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dz()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.lW(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aR()
r=s.db
C.a.sn(r.a,0)
r.aR()
r=s.dx
C.a.sn(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a5(p.e)}s=p.z
if(s!=null)s.B(null)}catch(q){u=H.ah(q)
t=H.cu(q)
P.lJ("Error: "+H.j(u))
P.lJ("Stack: "+H.j(t))
throw H.d(u)}}}
E.iY.prototype={
$1:function(a){var u
H.n0(a)
u=this.a
if(u.ch){u.ch=!1
u.j4()}},
$S:46}
Z.eD.prototype={$ipR:1}
Z.dG.prototype={
a_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ah(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.db.prototype={$ipS:1}
Z.bB.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a_(a)},
at:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a5:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfu:function(a){this.b=H.l(a,"$ib",[Z.bI],"$ab")},
$iq_:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cb(this.c)+"'")+"]"}}
Z.bj.prototype={
gcT:function(a){var u=this.a,t=(u&$.aG().a)!==0?3:0
if((u&$.by().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=2
if((u&$.bY().a)!==0)t+=3
if((u&$.dy().a)!==0)t+=3
if((u&$.dz().a)!==0)t+=4
if((u&$.cx().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
ig:function(a){var u,t=$.aG(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dy()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0)if(u===a)return t
return $.nl()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.aG().a)!==0)C.a.h(u,"Pos")
if((t&$.by().a)!==0)C.a.h(u,"Norm")
if((t&$.bx().a)!==0)C.a.h(u,"Binm")
if((t&$.b3().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bY().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dy().a)!==0)C.a.h(u,"Clr3")
if((t&$.dz().a)!==0)C.a.h(u,"Clr4")
if((t&$.cx().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fS.prototype={}
D.cG.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.saB(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
X:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.a
t=(u&&C.a).X(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.b
t=(u&&C.a).X(u,b)||t}return t},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.m4(u,!0,{func:1,ret:-1,args:[D.z]}),new D.hc(q))
u=r.b
if(u!=null){r.sb6(H.c([],[{func:1,ret:-1,args:[D.z]}]))
C.a.F(u,new D.hd(q))}return!0},
cj:function(){return this.B(null)},
aP:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}},
saB:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sb6:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hc.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.hd.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.z.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dH.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.e_.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.hw.prototype={
iZ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iV:function(a){this.c=a.b
this.d.X(0,a.a)
return!1},
shC:function(a){this.d=H.l(a,"$imh",[P.m],"$amh")}}
X.e3.prototype={}
X.hD.prototype={
b5:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaZ()
r=new X.bs(a,V.bt(),q.x,t,s)
r.b=!0
q.z=new P.aA(p,!1)
q.x=s
return r},
cC:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eI()
if(typeof u!=="number")return u.av()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.b5(a,b))
return!0},
j_:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaZ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.cR(new V.V(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
h8:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e3(c,r.a.gaZ(),b)
s.b=!0
t.B(s)
r.y=new P.aA(u,!1)
r.x=V.bt()}}
X.aC.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aC))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.E(this.b)?"Alt+":""
return u+(H.E(this.c)?"Shift+":"")}}
X.bs.prototype={}
X.i1.prototype={
bO:function(a,b,c){var u=this,t=new P.aA(Date.now(),!1),s=u.a.gaZ(),r=new X.bs(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cC:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bO(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eI()
if(typeof t!=="number")return t.av()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bO(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bO(a,b,!1))
return!0},
j0:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaZ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.cR(new V.V(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gdT:function(){var u=this.b
return u==null?this.b=D.O():u},
gbD:function(){var u=this.c
return u==null?this.c=D.O():u},
gek:function(){var u=this.d
return u==null?this.d=D.O():u}}
X.cR.prototype={}
X.ih.prototype={}
X.es.prototype={}
X.j1.prototype={
b5:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=q.a.gaZ()
r=new X.es(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iY:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.B(this.b5(a,!0))
return!0},
iW:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.B(this.b5(a,!0))
return!0},
iX:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.B(this.b5(a,!1))
return!0}}
X.ey.prototype={
gaZ:function(){var u=this.a,t=C.j.gdP(u).c
t.toString
u=C.j.gdP(u).d
u.toString
return V.mf(0,0,t,u)},
dg:function(a){var u=a.keyCode,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.e_(u,new X.aC(t,a.altKey,a.shiftKey))},
aW:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
c4:function(a){var u=this.b,t=H.E(a.ctrlKey)||H.E(a.metaKey)
u.c=new X.aC(t,a.altKey,a.shiftKey)},
aJ:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.a9(s-q,r-u)},
b7:function(a){return new V.V(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.d.a1(r.pageX)
C.d.a1(r.pageY)
p=o.left
C.d.a1(r.pageX)
C.a.h(n,new V.a9(q-p,C.d.a1(r.pageY)-o.top))}return n},
aH:function(a){var u=a.buttons,t=H.E(a.ctrlKey)||H.E(a.metaKey)
return new X.dH(u,new X.aC(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h2:function(a){this.f=!0},
fR:function(a){this.f=!1},
fX:function(a){H.f(a,"$iae")
if(H.E(this.f)&&this.bS(a))a.preventDefault()},
h6:function(a){var u
H.f(a,"$iba")
if(!H.E(this.f))return
u=this.dg(a)
this.b.iZ(u)},
h4:function(a){var u
H.f(a,"$iba")
if(!H.E(this.f))return
u=this.dg(a)
this.b.iV(u)},
ha:function(a){var u,t,s,r,q=this
H.f(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aW(a)
if(H.E(q.x)){t=q.aH(a)
s=q.b7(a)
if(q.d.cC(t,s))a.preventDefault()
return}if(H.E(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aH(a)
r=q.aJ(a)
if(q.c.cC(t,r))a.preventDefault()},
he:function(a){var u,t,s,r=this
H.f(a,"$iae")
r.aW(a)
u=r.aH(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aJ(a)
if(r.c.bg(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.f(a,"$iae")
if(!r.bS(a)){r.aW(a)
u=r.aH(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aJ(a)
if(r.c.bg(u,s))a.preventDefault()}},
hc:function(a){var u,t,s,r=this
H.f(a,"$iae")
r.aW(a)
u=r.aH(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aJ(a)
if(r.c.bf(u,s))a.preventDefault()},
fZ:function(a){var u,t,s,r=this
H.f(a,"$iae")
if(!r.bS(a)){r.aW(a)
u=r.aH(a)
if(H.E(r.x)){t=r.b7(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(H.E(r.r))return
s=r.aJ(a)
if(r.c.bf(u,s))a.preventDefault()}},
hg:function(a){var u,t,s=this
H.f(a,"$ibk")
s.aW(a)
u=new V.V((a&&C.D).giu(a),C.D.giv(a)).w(0,180)
if(H.E(s.x)){if(s.d.j_(u))a.preventDefault()
return}if(H.E(s.r))return
t=s.aJ(a)
if(s.c.j0(u,t))a.preventDefault()},
hi:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aH(s.y)
t=s.aJ(s.y)
s.d.h8(u,t,r)}},
hy:function(a){var u,t=this
H.f(a,"$ib1")
t.a.focus()
t.f=!0
t.c4(a)
u=t.c1(a)
if(t.e.iY(u))a.preventDefault()},
hu:function(a){var u
H.f(a,"$ib1")
this.c4(a)
u=this.c1(a)
if(this.e.iW(u))a.preventDefault()},
hw:function(a){var u
H.f(a,"$ib1")
this.c4(a)
u=this.c1(a)
if(this.e.iX(u))a.preventDefault()},
sfn:function(a){this.z=H.l(a,"$ib",[[P.d2,P.Q]],"$ab")}}
D.dM.prototype={$iac:1,$ic9:1}
D.ac.prototype={$ic9:1}
D.e0.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.O():u},
d2:function(a){var u=this.x
if(u!=null)u.B(a)},
dr:function(a){var u=this.y
if(u!=null)u.B(a)},
h7:function(){return this.dr(null)},
hk:function(a){var u,t,s
H.l(a,"$ii",[D.ac],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.eZ(s))return!1}return!0},
fL:function(a,b){var u,t,s,r,q=D.ac
H.l(b,"$ii",[q],"$ai")
for(u=b.length,t=this.gdq(),s=0;s<b.length;b.length===u||(0,H.u)(b),++s){r=H.f(b[s],"$iac")
r.gp().h(0,t)}q=new D.bJ([q])
q.b=!0
this.d2(q)},
ho:function(a,b){var u,t,s,r=D.ac
H.l(b,"$ii",[r],"$ai")
for(u=b.gU(b),t=this.gdq();u.v();){s=u.gH(u)
C.a.X(this.e,s)
s.gp().X(0,t)}r=new D.bK([r])
r.b=!0
this.d2(r)},
eZ:function(a){var u=C.a.S(this.e,a)
return u},
sfl:function(a){this.e=H.l(a,"$ib",[D.dM],"$ab")},
shz:function(a){this.f=H.l(a,"$ib",[D.ed],"$ab")},
shV:function(a){this.r=H.l(a,"$ib",[D.el],"$ab")},
$ai:function(){return[D.ac]},
$aa3:function(){return[D.ac]}}
D.ed.prototype={$iac:1,$ic9:1}
D.el.prototype={$iac:1,$ic9:1}
V.ai.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.an.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.hb.prototype={}
V.c7.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c7))return!1
u=b.a
t=$.N().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.cr(H.c([q.a,q.d,q.r],p),3,0),n=V.cr(H.c([q.b,q.e,q.x],p),3,0),m=V.cr(H.c([q.c,q.f,q.y],p),3,0)
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
V.av.prototype={
ab:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
cv:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.N().a)return V.c8()
u=1/b1
t=-n
s=-a0
return V.bd((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bd(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cK:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aq(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.N().a
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
D:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.cr(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cr(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cr(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cr(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.D("")}}
V.a9.prototype={
K:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.aq.prototype={
K:function(a,b){return new V.aq(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aq))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bu.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bu))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.cY.prototype={
gal:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cY))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.V.prototype={
be:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.V(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.mu
return u==null?$.mu=new V.V(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.V(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.X.prototype={
be:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cw:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.X(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bd:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.X(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.X(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.N().a)return V.eC()
return new V.X(this.a/b,this.b/b,this.c/b)},
ej:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.cj.prototype={
be:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cj))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
U.fT.prototype={
bJ:function(a){var u=V.pQ(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.O():u},
P:function(a){var u=this.y
if(u!=null)u.B(a)},
scN:function(a,b){},
scz:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bJ(u)}s=new D.I("maximumLocation",s,t.b,[P.A])
s.b=!0
t.P(s)}},
scB:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bJ(u)}s=new D.I("minimumLocation",s,t.c,[P.A])
s.b=!0
t.P(s)}},
sak:function(a,b){var u,t=this
b=t.bJ(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.I("location",u,b,[P.A])
u.b=!0
t.P(u)}},
scA:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.A])
r.b=!0
s.P(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.I("velocity",t,a,[P.A])
t.b=!0
u.P(t)}},
scg:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.I("dampening",u,a,[P.A])
u.b=!0
this.P(u)}},
ac:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sak(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dJ.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
b1:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dJ))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cK.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u},
P:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.B(a)},
ae:function(){return this.P(null)},
fJ:function(a,b){var u,t,s,r,q,p,o,n=U.aj
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaV(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.saB(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.P(n)},
hm:function(a,b){var u,t,s=U.aj
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gaV();u.v();)u.gH(u).gp().X(0,t)
s=new D.bK([s])
s.b=!0
this.P(s)},
b1:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.r(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.b1(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.c8():u
r=s.e
if(r!=null)r.aP(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cK))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.Z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa3:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ez.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.O():u},
P:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.B(a)},
ae:function(){return this.P(null)},
b9:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdT().h(0,u.gbT())
u.a.c.gek().h(0,u.gbV())
u.a.c.gbD().h(0,u.gbX())
return!0},
bU:function(a){var u=this
H.f(a,"$iz")
if(!J.Z(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iz"),"$ibs")
if(!H.E(n.y))return
if(H.E(n.x)){u=a.d.K(0,a.y)
u=new V.V(u.a,u.b)
u=u.E(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.E(n.d)){u=a.c
t=a.d.K(0,a.y)
u=new V.V(t.a,t.b).q(0,2).w(0,u.gal())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.V(s.a,s.b).q(0,2).w(0,u.gal())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
n.b.sY(0)
t=t.K(0,a.z)
n.Q=new V.V(t.a,t.b).q(0,2).w(0,u.gal())}n.ae()},
bY:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.E(r.y))return
r.y=!1
if(H.E(r.x))return
u=r.Q
if(u.E(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sY(t*10*s)
r.ae()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.ch=p
u=b.y
r.b.ac(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bd(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaj:1}
U.eA.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.O():u},
P:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.B(a)},
ae:function(){return this.P(null)},
b9:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdT().h(0,s.gbT())
s.a.c.gek().h(0,s.gbV())
s.a.c.gbD().h(0,s.gbX())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.gfB())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gfD())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.gi3())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gi1())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.gi_())
return!0},
aA:function(a){var u=a.a,t=a.b
if(H.E(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.E(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.V(u,t)},
bU:function(a){var u=this
a=H.p(H.f(a,"$iz"),"$ibs")
if(!J.Z(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iz"),"$ibs")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.K(0,a.y)
u=new V.V(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.K(0,a.y)
u=n.aA(new V.V(t.a,t.b).q(0,2).w(0,u.gal()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aA(new V.V(s.a,s.b).q(0,2).w(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sak(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.K(0,a.z)
n.dx=n.aA(new V.V(t.a,t.b).q(0,2).w(0,u.gal()))}n.ae()},
bY:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.ae()}},
fC:function(a){var u=this
if(H.p(H.f(a,"$iz"),"$ie3").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fE:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iz"),"$ibs")
if(!J.Z(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aA(new V.V(s.a,s.b).q(0,2).w(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sak(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.K(0,a.z)
n.dx=n.aA(new V.V(t.a,t.b).q(0,2).w(0,u.gal()))
n.ae()},
i4:function(a){var u=this
H.f(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i2:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.f(a,"$iz"),"$ies")
if(!H.E(n.cx))return
if(H.E(n.ch)){u=a.d.K(0,a.y)
u=new V.V(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.E(n.e)){u=a.c
t=a.d.K(0,a.y)
u=n.aA(new V.V(t.a,t.b).q(0,2).w(0,u.gal()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aA(new V.V(s.a,s.b).q(0,2).w(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sak(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sak(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.K(0,a.z)
n.dx=n.aA(new V.V(t.a,t.b).q(0,2).w(0,u.gal()))}n.ae()},
i0:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.E(r.cx))return
r.cx=!1
if(H.E(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.ae()}},
b1:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.R()
if(q<p){r.dy=p
u=b.y
r.c.ac(0,u)
r.b.ac(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bd(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.bd(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaj:1}
U.eB.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.O():u},
P:function(a){var u=this.r
if(u!=null)u.B(a)},
b9:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.O():t
t=r.gfG()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.O():s).h(0,t)
return!0},
fH:function(a){var u,t,s,r,q=this
H.f(a,"$iz")
if(!J.Z(q.b,q.a.b.c))return
H.p(a,"$icR")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.I("zoom",u,r,[P.A])
u.b=!0
q.P(u)}},
b1:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bd(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaj:1}
M.dI.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.O():u},
W:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.B(a)},
aF:function(){return this.W(null)},
hq:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.saB(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.W(n)},
hs:function(a,b){var u,t,s=M.ax
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gZ();u.v();)u.gH(u).gp().X(0,t)
s=new D.bK([s])
s.b=!0
this.W(s)},
a5:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.r(u,0)]);u.v();){t=u.d
if(t!=null)t.a5(a)}s.f=!1},
$ai:function(){return[M.ax]},
$aa3:function(){return[M.ax]},
$iax:1}
M.dK.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.O():u},
W:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.B(a)},
aF:function(){return this.W(null)},
sbb:function(a){var u,t,s=this
if(a==null)a=new X.hr()
u=s.b
if(u!==a){if(u!=null)u.gp().X(0,s.gZ())
t=s.b
s.b=a
a.gp().h(0,s.gZ())
u=new D.I("camera",t,s.b,[X.c0])
u.b=!0
s.W(u)}},
sb0:function(a,b){var u,t,s=this
if(b==null)b=X.m_(null)
u=s.c
if(u!==b){if(u!=null)u.gp().X(0,s.gZ())
t=s.c
s.c=b
b.gp().h(0,s.gZ())
u=new D.I("target",t,s.c,[X.d4])
u.b=!0
s.W(u)}},
sbh:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().X(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gZ())
s=new D.I("technique",u,t.d,[O.bQ])
s.b=!0
t.W(s)}},
a5:function(a){var u,t=this
a.cE(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.ac(0,a)
t.e.ac(0,a)
t.e.a5(a)
t.b.at(a)
t.c.at(a)
a.cD()},
$iax:1}
M.dP.prototype={
W:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.B(a)},
aF:function(){return this.W(null)},
fT:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cG()
o.saB(null)
o.sb6(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saB(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bJ([n])
n.b=!0
this.W(n)},
fV:function(a,b){var u,t,s=E.ap
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gZ();u.v();)u.gH(u).gp().X(0,t)
s=new D.bK([s])
s.b=!0
this.W(s)},
sbb:function(a){var u,t,s=this
if(a==null)a=X.m9(null)
u=s.b
if(u!==a){if(u!=null)u.gp().X(0,s.gZ())
t=s.b
s.b=a
a.gp().h(0,s.gZ())
u=new D.I("camera",t,s.b,[X.c0])
u.b=!0
s.W(u)}},
sb0:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().X(0,t.gZ())
u=t.c
t.c=b
b.gp().h(0,t.gZ())
s=new D.I("target",u,t.c,[X.d4])
s.b=!0
t.W(s)}},
sbh:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().X(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.gZ())
s=new D.I("technique",u,t.d,[O.bQ])
s.b=!0
t.W(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.O():u},
a5:function(a){var u,t=this
a.cE(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.ac(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.v();)u.d.ac(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.r(u,0)]);u.v();)u.d.a5(a)
t.b.toString
a.cy.aN()
a.db.aN()
t.c.at(a)
a.cD()},
sfe:function(a,b){this.e=H.l(b,"$ia3",[E.ap],"$aa3")},
$iax:1}
M.dT.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
W:function(a){var u
H.f(a,"$iz")
u=this.b
if(u!=null)u.B(a)},
aF:function(){return this.W(null)},
a5:function(a){var u=this.e
if(u!=null)u.a5(a)
u=this.r
if(u!=null)u.a5(a)},
$iax:1}
M.ax.prototype={}
A.dE.prototype={}
A.fH.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ci:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gay:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.ao))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dU.prototype={
af:function(a,b){if(b!=null&&b.d)a.cR(b)}}
A.hm.prototype={
aS:function(a,b,c,d){var u,t,s,r,q=[P.A]
H.l(c,"$ib",q,"$ab")
H.l(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.e(c,0)
t=Math.abs(c[0]-0)<$.N().a
if(t){if(0>=d.length)return H.e(d,0)
s=d[0]
d=C.a.cU(d,1)
c=C.a.cU(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.j(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.e(c,r)
a.a+="  offset = blurScale * "+H.j(c[r])+";\n"
if(r>=d.length)return H.e(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.j(d[r])+";\n"
if(r>=d.length)return H.e(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.j(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.e6.prototype={
eT:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ab("")
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
A.p6(c0,u)
A.p8(c0,u)
A.p7(c0,u)
A.pa(c0,u)
A.pb(c0,u)
A.p9(c0,u)
A.pc(c0,u)
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
b5.cs(0,s.charCodeAt(0)==0?s:s,A.p5(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.J(0,"invViewMat"),"$iar")
if(t)b5.dy=H.p(b5.y.J(0,"objMat"),"$iar")
if(r)b5.fr=H.p(b5.y.J(0,"viewObjMat"),"$iar")
b5.fy=H.p(b5.y.J(0,"projViewObjMat"),"$iar")
if(c0.ry)b5.k1=H.p(b5.y.J(0,"txt2DMat"),"$icg")
if(c0.x1)b5.k2=H.p(b5.y.J(0,"txtCubeMat"),"$iar")
if(c0.x2)b5.k3=H.p(b5.y.J(0,"colorMat"),"$iar")
b5.sfa(H.c([],[A.ar]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.J(0,"bendMatCount"),"$iaP")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.B(P.D(b7+q+b8));(s&&C.a).h(s,H.p(m,"$iar"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.J(0,"emissionClr"),"$iY")
if(t.b)b5.rx=H.p(b5.y.J(0,"emissionTxt"),"$iag")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.J(0,"ambientClr"),"$iY")
if(t.b)b5.x2=H.p(b5.y.J(0,"ambientTxt"),"$iag")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.J(0,"diffuseClr"),"$iY")
if(t.b)b5.aL=H.p(b5.y.J(0,"diffuseTxt"),"$iag")
t=c0.d
if(t.a)b5.dY=H.p(b5.y.J(0,"invDiffuseClr"),"$iY")
if(t.b)b5.dZ=H.p(b5.y.J(0,"invDiffuseTxt"),"$iag")
t=c0.e
s=t.a
if(s||t.b||!1){b5.e1=H.p(b5.y.J(0,"shininess"),"$ia6")
if(s)b5.e_=H.p(b5.y.J(0,"specularClr"),"$iY")
if(t.b)b5.e0=H.p(b5.y.J(0,"specularTxt"),"$iag")}if(c0.f.b)b5.e2=H.p(b5.y.J(0,"bumpTxt"),"$iag")
if(c0.cy){b5.e3=H.p(b5.y.J(0,"envSampler"),"$ibT")
t=c0.r
if(t.a)b5.e4=H.p(b5.y.J(0,"reflectClr"),"$iY")
if(t.b)b5.e5=H.p(b5.y.J(0,"reflectTxt"),"$iag")
t=c0.x
s=t.a
if(s||t.b||!1){b5.e6=H.p(b5.y.J(0,"refraction"),"$ia6")
if(s)b5.e7=H.p(b5.y.J(0,"refractClr"),"$iY")
if(t.b)b5.e8=H.p(b5.y.J(0,"refractTxt"),"$iag")}}t=c0.y
if(t.a)b5.e9=H.p(b5.y.J(0,"alpha"),"$ia6")
if(t.b)b5.ea=H.p(b5.y.J(0,"alphaTxt"),"$iag")
t=P.m
s=[t,A.aP]
b5.sfk(new H.a4(s))
b5.sf_(new H.a4([t,[P.b,A.cf]]))
b5.shA(new H.a4(s))
b5.shB(new H.a4([t,[P.b,A.ch]]))
b5.shU(new H.a4(s))
b5.sf0(new H.a4([t,[P.b,A.ci]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cf],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.av()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.B(P.D(b7+g+b8))
H.p(m,"$iY")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.B(P.D(b7+g+b8))
H.p(f,"$iY")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.B(P.D(b7+g+b8))
H.p(e,"$iY")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.B(P.D(b7+g+b8))
H.p(m,"$iY")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.B(P.D(b7+g+b8))
H.p(f,"$iY")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.p(e,"$iag")
a=e}else a=b6
C.a.h(h,new A.cf(b,c,d,m,f,a))}b5.cl.k(0,j,h)
q=b5.ck
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaP"))}for(t=c0.Q,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
H.p(m,"$iY")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.B(P.D(b7+o+b8))
H.p(f,"$iY")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.p(e,"$iY")
if(typeof j!=="number")return j.av()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.p(a0,"$icg")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.p(a0,"$ibT")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.p(a0,"$ibT")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.p(a2,"$id9")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.p(a0,"$ia6")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.p(a2,"$ia6")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.B(P.D(b7+o+b8))
H.p(a5,"$ia6")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ch(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cn.k(0,j,h)
q=b5.cm
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaP"))}for(t=c0.ch,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
H.p(m,"$iY")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.B(P.D(b7+o+b8))
H.p(f,"$iY")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.p(e,"$iY")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.p(a0,"$iY")
if(typeof j!=="number")return j.av()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.p(a2,"$iY")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.B(P.D(b7+o+b8))
H.p(a5,"$iY")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.B(P.D(b7+o+b8))
H.p(a9,"$ia6")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.B(P.D(b7+o+b8))
H.p(b0,"$ia6")
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
if(a2==null)H.B(P.D(b7+g+b8))
H.p(a2,"$id9")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.p(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.B(P.D(b7+g+b8))
H.p(a5,"$ia6")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.p(a2,"$ia6")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.B(P.D(b7+g+b8))
H.p(a5,"$ia6")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.B(P.D(b7+g+b8))
H.p(a9,"$ia6")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.p(a2,"$iag")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.p(a2,"$iag")
a3=a2}else a3=b6
C.a.h(h,new A.ci(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cp.k(0,j,h)
q=b5.co
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaP"))}}},
af:function(a,b){if(b!=null&&b.d)a.cR(b)},
hO:function(a,b){},
sfa:function(a){this.r1=H.l(a,"$ib",[A.ar],"$ab")},
sfk:function(a){this.ck=H.l(a,"$iy",[P.m,A.aP],"$ay")},
sf_:function(a){this.cl=H.l(a,"$iy",[P.m,[P.b,A.cf]],"$ay")},
shA:function(a){this.cm=H.l(a,"$iy",[P.m,A.aP],"$ay")},
shB:function(a){this.cn=H.l(a,"$iy",[P.m,[P.b,A.ch]],"$ay")},
shU:function(a){this.co=H.l(a,"$iy",[P.m,A.aP],"$ay")},
sf0:function(a){this.cp=H.l(a,"$iy",[P.m,[P.b,A.ci]],"$ay")}}
A.aI.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aL.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aM.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hM.prototype={
i:function(a){return this.aL}}
A.cf.prototype={}
A.ch.prototype={}
A.ci.prototype={}
A.d_.prototype={
bI:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cs:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dh(b,35633)
r.f=r.dh(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.E(H.lC(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.B(P.D("Failed to link shader: "+H.j(s)))}r.hP()
r.hR()},
a_:function(a){a.a.useProgram(this.r)
this.x.iw()},
dh:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.E(H.lC(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.D("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hP:function(){var u,t,s,r=this,q=H.c([],[A.dE]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dE(p,t.name,s))}r.x=new A.fH(q)},
hR:function(){var u,t,s,r=this,q=H.c([],[A.et]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.it(t.type,t.size,t.name,s))}r.y=new A.jc(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.aP(u,b,c)
else return A.lq(u,this.r,b,a,c)},
fh:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.lq(u,this.r,b,a,c)},
fi:function(a,b,c){var u=this.a
if(a===1)return new A.bT(u,b,c)
else return A.lq(u,this.r,b,a,c)},
bp:function(a,b){return new P.eM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
it:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.a6(u.a,c,d)
case 35664:return new A.eu(u.a,c,d)
case 35665:return new A.Y(u.a,c,d)
case 35666:return new A.d9(u.a,c,d)
case 35667:return new A.j9(u.a,c,d)
case 35668:return new A.ja(u.a,c,d)
case 35669:return new A.jb(u.a,c,d)
case 35674:return new A.jd(u.a,c,d)
case 35675:return new A.cg(u.a,c,d)
case 35676:return new A.ar(u.a,c,d)
case 35678:return u.fh(b,c,d)
case 35680:return u.fi(b,c,d)
case 35670:throw H.d(u.bp("BOOL",c))
case 35671:throw H.d(u.bp("BOOL_VEC2",c))
case 35672:throw H.d(u.bp("BOOL_VEC3",c))
case 35673:throw H.d(u.bp("BOOL_VEC4",c))
default:throw H.d(P.D("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.ej.prototype={}
A.et.prototype={}
A.jc.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
J:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aP.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
si6:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.a6.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.eu.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.Y.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.d9.prototype={
eL:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.c.cL(this.a,this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cg.prototype={
ai:function(a){var u=new Float32Array(H.cm(H.l(a,"$ib",[P.A],"$ab")))
C.c.eC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ar.prototype={
ai:function(a){var u=new Float32Array(H.cm(H.l(a,"$ib",[P.A],"$ab")))
C.c.eD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ag.prototype={
cR:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bT.prototype={
eK:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.ku.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cw(s.b,b).cw(s.d.cw(s.c,b),c)
s=new V.aq(r.a,r.b,r.c)
if(!J.Z(a.f,s)){a.f=s
s=a.a
if(s!=null)s.aa()}a.sja(r.w(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
u=new V.bu(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.Z(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.aa()}},
$S:44}
F.a8.prototype={
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.eC()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.ej())return
return s.w(0,Math.sqrt(s.E(s)))},
fd:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.X(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.E(r)))
r=t.K(0,q)
r=new V.X(r.a,r.b,r.c)
r=s.bd(r.w(0,Math.sqrt(r.E(r))))
return r.w(0,Math.sqrt(r.E(r)))},
cc:function(){var u,t=this
if(t.d!=null)return!0
u=t.f9()
if(u==null){u=t.fd()
if(u==null)return!1}t.d=u
t.a.a.aa()
return!0},
f8:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.eC()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.ej())return
return s.w(0,Math.sqrt(s.E(s)))},
fc:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.K(0,g)
l=new V.X(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.K(0,g)
l=new V.aq(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).K(0,j)
l=new V.X(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.E(l)))
l=o.bd(q)
l=l.w(0,Math.sqrt(l.E(l))).bd(o)
q=l.w(0,Math.sqrt(l.E(l)))}return q},
ca:function(){var u,t=this
if(t.e!=null)return!0
u=t.f8()
if(u==null){u=t.fc()
if(u==null)return!1}t.e=u
t.a.a.aa()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ar(J.at(s.e),0)+", "+C.b.ar(J.at(t.b.e),0)+", "+C.b.ar(J.at(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
N:function(){return this.D("")}}
F.br.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ar(J.at(u.e),0)+", "+C.b.ar(J.at(this.b.e),0)},
N:function(){return this.D("")}}
F.bO.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ar(J.at(u.e),0)},
N:function(){return this.D("")}}
F.eh.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u},
iN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a4()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.iq())}h.a.a4()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a4()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bO()
if(n.a==null)H.B(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.B(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a4()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a4()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nP(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a4()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a4()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a4()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cH(l,k,i)}g=h.e
if(g!=null)g.aP(0)},
aK:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aK()||!1
if(!t.a.aK())u=!1
s=t.e
if(s!=null)s.aP(0)
return u},
c9:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aG()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.by().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.dy().a)!==0)++s
if((t&$.dz().a)!==0)++s
if((t&$.cx().a)!==0)++s
if((t&$.bw().a)!==0)++s
r=a3.gcT(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dG])
for(n=0,m=0;m<s;++m){l=a3.ig(m)
k=l.gcT(l)
C.a.k(o,m,new Z.dG(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iK(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cm(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bB(new Z.eD(a0,f),o,a3)
e.sfu(H.c([],[Z.bI]))
if(a.b.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a4()
C.a.h(d,c.e)}b=Z.lt(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a4()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.a4()
C.a.h(d,c.e)}b=Z.lt(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a4()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.a4()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.a4()
C.a.h(d,c.e)}b=Z.lt(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bI(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.D(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.D(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.D(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.D(t))}return C.a.m(s,"\n")},
aa:function(){var u=this.e
if(u!=null)u.B(null)},
$ipY:1}
F.ix.prototype={
ia:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.aE],"$ab")
u=H.c([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cH(t,q,p))}return u},
ib:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aE],"$ab")
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
C.a.h(u,F.cH(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cH(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cH(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cH(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
aK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].cc())s=!1
return s},
cb:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].ca())s=!1
return s},
i:function(a){return this.N()},
D:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(a))
return C.a.m(r,"\n")},
N:function(){return this.D("")},
sfo:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.iy.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var u,t,s=H.c([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].D(a+(""+u+". ")))}return C.a.m(s,"\n")},
N:function(){return this.D("")},
sfv:function(a){this.b=H.l(a,"$ib",[F.br],"$ab")}}
F.iz.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
D:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(a))
return C.a.m(r,"\n")},
N:function(){return this.D("")},
sc0:function(a){this.b=H.l(a,"$ib",[F.bO],"$ab")}}
F.aE.prototype={
cf:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jr(u.cx,r,o,t,s,q,p,a,n)},
iq:function(){return this.cf(null)},
sja:function(a){var u
if(!J.Z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.aa()}},
iK:function(a){var u,t,s=this
if(a.t(0,$.aG())){u=s.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.by())){u=s.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bx())){u=s.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.b3())){u=s.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bY())){u=s.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.dy())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.dz())){u=s.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.cx()))return H.c([s.ch],[P.A])
else if(a.t(0,$.bw())){u=s.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
cc:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.eC()
t.d.F(0,new F.jz(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aP(0)}return!0},
ca:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.eC()
t.d.F(0,new F.jy(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aP(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.b.ar(J.at(s.e),0))
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
C.a.h(q,V.S(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
N:function(){return this.D("")}}
F.jz.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:6}
F.jy.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:6}
F.js.prototype={
a4:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.D("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.aa()
return!0},
bq:function(a,b,c,d,e,f){var u=F.jr(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
aK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].cc()
return!0},
cb:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].ca()
return!0},
im:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.N()},
D:function(a){var u,t,s,r
this.a4()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
N:function(){return this.D("")},
si7:function(a){this.c=H.l(a,"$ib",[F.aE],"$ab")}}
F.jt.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.ju(u,b))
C.a.F(u.d,new F.jv(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
return C.a.m(r,"\n")},
sfp:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
sfq:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
sfs:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.ju.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:6}
F.jv.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:6}
F.jw.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
return C.a.m(r,"\n")},
sfw:function(a){this.b=H.l(a,"$ib",[F.br],"$ab")},
sfz:function(a){this.c=H.l(a,"$ib",[F.br],"$ab")}}
F.jx.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].D(""))
return C.a.m(r,"\n")},
sc0:function(a){this.b=H.l(a,"$ib",[F.bO],"$ab")}}
O.dV.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.O():u},
L:function(a){var u
H.f(a,"$iz")
u=this.x
if(u!=null)u.B(a)},
aG:function(){return this.L(null)},
sba:function(a){var u=this.r
if(!(Math.abs(u-a)<$.N().a)){this.r=a
u=new D.I("blurValue",u,a,[P.A])
u.b=!0
this.L(u)}},
sdQ:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gp().X(0,t.gaw())
u=t.e
t.e=a
if(a!=null)a.gp().h(0,t.gaw())
s=new D.I("colorTexture",u,t.e,[T.d6])
s.b=!0
t.L(s)}},
sc8:function(a){},
scJ:function(a){var u,t=this,s=$.m5
if(s==null){s=new V.c7(1,0,0,0,1,0,0,0,1)
$.m5=s
a=s}else a=s
if(!J.Z(t.b,a)){u=t.b
t.b=a
s=new D.I("textureMatrix",u,a,[V.c7])
s.b=!0
t.L(s)}},
sc7:function(a){var u,t=this,s=$.my
if(s==null){s=new V.cj(1,0.00390625,0.0000152587890625,0)
$.my=s
a=s}else a=s
if(!J.Z(t.c,a)){u=t.c
t.c=a
s=new D.I("blurAdjust",u,a,[V.cj])
s.b=!0
t.L(s)}},
ac:function(a,b){},
a8:function(a,b){H.l(a,"$ib",[T.bR],"$ab")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
cH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
if(h==null){u="GaussianBlur_0".charCodeAt(0)==0?"GaussianBlur_0":"GaussianBlur_0"
t=H.f(a.fr.j(0,u),"$idU")
if(t==null){h=a.a
t=new A.dU(h,u)
t.bI(h,u)
s=t.z=new A.hm(!1,u)
r=new P.ab("")
r.a="precision mediump float;\n"
r.a="precision mediump float;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n"
r.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\nuniform vec2 blurScale;\n\nvarying vec2 txt2D;\n\n"
h=[P.A]
s.aS(r,3,H.c([0.75],h),H.c([0.5],h))
s.aS(r,6,H.c([0.42857,2.14286],h),H.c([0.41667,0.08333],h))
s.aS(r,9,H.c([0,1.8],h),H.c([0.5122,0.2439],h))
s.aS(r,12,H.c([0,1.38462,3.23077],h),H.c([0.22703,0.31622,0.07027],h))
s.aS(r,15,H.c([0.9375,2.8125],h),H.c([0.36184,0.13816],h))
s.aS(r,18,H.c([0.47368,2.36842,4.26316],h),H.c([0.29916,0.16318,0.03766],h))
h=r.a+="void main()\n"
h+="{\n"
r.a=h
h+="   float blurOffset = abs(blurValue);\n"
r.a=h
h+="\n"
r.a=h
h+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
r.a=h
h+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
r.a=h
h+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
r.a=h
h+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
r.a=h
h+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
r.a=h
h+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
r.a=h
h+="   else                       gl_FragColor = blur18();\n"
r.a=h
h=r.a=h+"}\n"
t.cs(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",h.charCodeAt(0)==0?h:h)
t.Q=t.x.j(0,"posAttr")
t.ch=t.x.j(0,"txtAttr")
t.cx=H.p(t.y.j(0,"projViewObjMat"),"$iar")
t.cy=H.p(t.y.j(0,"txt2DMat"),"$icg")
t.dy=H.p(t.y.j(0,"colorTxt"),"$iag")
t.dx=H.p(t.y.j(0,"blurScale"),"$ieu")
t.fx=H.p(t.y.j(0,"blurValue"),"$ia6")
a.c5(t)}h=i.a=t
b.e=null}s=h.z
h=b.e
if((!(h instanceof Z.bB)?b.e=null:h)==null){h=b.d
q=$.aG()
p=$.b3()
p=h.c9(new Z.db(a.a),new Z.bj(q.a|p.a))
p.ax($.aG()).e=i.a.Q.c
p.ax($.b3()).e=i.a.ch.c
b.e=p}o=H.c([],[T.bR])
i.a8(o,i.e)
h=s.a
if(h)i.a8(o,i.f)
for(n=0;n<o.length;++n)o[n].a_(a)
q=i.a
q.a_(a)
p=i.e
q.af(q.dy,p)
p=i.b
m=q.cy
m.toString
m.ai(p.ab(0,!0))
p=i.d
m=p.a
l=a.c
if(typeof m!=="number")return m.w()
p=p.b
k=a.d
if(typeof p!=="number")return p.w()
j=q.dx
C.c.jg(j.a,j.d,m/l,p/k)
k=a.ger()
q=q.cx
q.toString
q.ai(k.ab(0,!0))
q=i.a
if(h){h=i.f
q.af(q.fr,h)
h=i.c
q.db.eL(h)}else{h=i.r
q=q.fx
C.c.a3(q.a,q.d,h)}h=b.e
if(h instanceof Z.bB){h.a_(a)
h.a5(a)
h.at(a)}else b.e=null
h=i.a
h.toString
q=a.a
q.useProgram(null)
h.x.ci()
for(n=0;n<o.length;++n){h=o[n]
if(h.c){h.c=!1
q.activeTexture(33984+h.a)
q.bindTexture(3553,null)}}}}
O.e5.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.O():u},
L:function(a){var u
H.f(a,"$iz")
u=this.fr
if(u!=null)u.B(a)},
aG:function(){return this.L(null)},
dw:function(a){H.f(a,"$iz")
this.a=null
this.L(a)},
hK:function(){return this.dw(null)},
fN:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bJ([u])
u.b=!0
this.L(u)},
fP:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bK([u])
u.b=!0
this.L(u)},
de:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a4([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaD()
p=h.j(0,r.gaD())
h.k(0,q,p==null?1:p)}o=H.c([],[A.aI])
h.F(0,new O.hQ(j,o))
C.a.bG(o,new O.hR())
n=new H.a4([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gaD()
p=n.j(0,r.gaD())
n.k(0,q,p==null?1:p)}m=H.c([],[A.aL])
n.F(0,new O.hS(j,m))
C.a.bG(m,new O.hT())
l=new H.a4([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gaD()
q=l.j(0,r.gaD())
l.k(0,t,q==null?1:q)}k=H.c([],[A.aM])
l.F(0,new O.hU(j,k))
C.a.bG(k,new O.hV())
i=C.e.ag(j.e.a.length+3,4)
j.dy.e
return A.nW(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a8:function(a,b){H.l(a,"$ib",[T.bR],"$ab")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
ac:function(a,b){var u
for(u=this.dx.a,u=new J.au(u,u.length,[H.r(u,0)]);u.v();)C.i.ac(u.d,b)},
cH:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.de()
u=H.f(b4.fr.j(0,b3.aL),"$ie6")
if(u==null){u=A.nV(b3,b4.a)
b4.c5(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dX
b3=b5.e
if(!(b3 instanceof Z.bB))b3=b5.e=null
if(b3==null||!b3.d.t(0,s)){b3=t.k3
if(b3)b5.d.aK()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cb()
q.a.cb()
q=q.e
if(q!=null)q.aP(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.im()
p=p.e
if(p!=null)p.aP(0)}n=b5.d.c9(new Z.db(b4.a),s)
n.ax($.aG()).e=b2.a.Q.c
if(b3)n.ax($.by()).e=b2.a.cx.c
if(r)n.ax($.bx()).e=b2.a.ch.c
if(t.r1)n.ax($.b3()).e=b2.a.cy.c
if(q)n.ax($.bY()).e=b2.a.db.c
if(t.rx)n.ax($.bw()).e=b2.a.dx.c
b5.e=n}b3=T.bR
m=H.c([],[b3])
b2.a.a_(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga6(q)
r=r.dy
r.toString
r.ai(q.ab(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga6(q)
p=b4.dx
p=b4.cx=q.q(0,p.ga6(p))
q=p}r=r.fr
r.toString
r.ai(q.ab(0,!0))}r=b2.a
q=b4.ger()
r=r.fy
r.toString
r.ai(q.ab(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ai(C.i.ab(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ai(C.i.ab(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ai(C.i.ab(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.c.bC(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iav")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cm(H.l(p.ab(0,!0),"$ib",r,"$ab")))
C.c.eD(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.c.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a8(m,b2.f.d)
r=b2.a
q=b2.f.d
r.af(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.c.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a8(m,b2.r.d)
r=b2.a
q=b2.r.d
r.af(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.c.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a8(m,b2.x.d)
r=b2.a
q=b2.x.d
r.af(r.aL,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dY
C.c.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a8(m,b2.y.d)
r=b2.a
q=b2.y.d
r.af(r.dZ,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.e1
C.c.a3(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.e_
C.c.V(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a8(m,b2.z.d)
r=b2.a
q=b2.z.d
r.af(r.e0,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.m
h=new H.a4([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaD()
d=h.j(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.dA(b2.a.cl.j(0,e),d)
b=f.gdS(f)
a=C.d.q(i.a,b.gdU(b))+C.d.q(i.b,b.gdV(b))+C.d.q(i.c,b.gdW())
a0=C.d.q(i.e,b.gdU(b))+C.d.q(i.f,b.gdV(b))+C.d.q(i.r,b.gdW())
b=C.d.q(i.y,b.gdU(b))+C.d.q(i.z,b.gdV(b))+C.d.q(i.Q,b.gdW())
b=new V.X(a,a0,b).w(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.c.V(a0.a,a0.d,a,a1,b)
b=f.gbc(f)
a1=c.f
C.c.V(a1.a,a1.d,b.a,b.b,b.c)
f.gas()
b=f.gdS(f)
a=c.d
C.c.V(a.a,a.d,b.a,b.b,b.c)
b=f.gbD()
a=c.b
C.c.V(a.a,a.d,b.a,b.b,b.c)
b=f.gbA(f)
a=c.c
C.c.V(a.a,a.d,b.a,b.b,b.c)
b=f.gas()
H.l(m,"$ib",o,"$ab")
if(!C.a.S(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gas()
a=b.gbv(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.ck.j(0,p)
C.c.bC(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.m
a2=new H.a4([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],b=[P.A],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaD()
d=a2.j(0,e)
if(d==null)d=0
a2.k(0,e,d+1)
c=J.dA(b2.a.cn.j(0,e),d)
a3=i.q(0,f.ga6(f))
a=f.ga6(f)
a0=$.cW
a=a.cK(a0==null?$.cW=new V.aq(0,0,0):a0)
a0=c.b
C.c.V(a0.a,a0.d,a.a,a.b,a.c)
a=$.cW
a=a3.cK(a==null?$.cW=new V.aq(0,0,0):a)
a0=c.c
C.c.V(a0.a,a0.d,a.a,a.b,a.c)
a=f.gbc(f)
a0=c.e
C.c.V(a0.a,a0.d,a.a,a.b,a.c)
f.gas()
a=a3.cv(0)
a0=a.a
a1=a.b
a4=a.c
a5=a.e
a6=a.f
a7=a.r
a8=a.y
a9=a.z
a=a.Q
b0=c.d
b0.toString
j=new Float32Array(H.cm(H.l(new V.c7(a0,a1,a4,a5,a6,a7,a8,a9,a).ab(0,!0),"$ib",b,"$ab")))
C.c.eC(b0.a,b0.d,!1,j)
f.gas()
a=f.gas()
H.l(m,"$ib",o,"$ab")
if(!C.a.S(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gas()
a0=a.gbv(a)
if(a0){a0=c.f
a0.toString
a1=a.d
if(a1<6)a0.a.uniform1i(a0.d,0)
else{a=a.a
a0.a.uniform1i(a0.d,a)}}f.gb3()
a=f.geM()
a0=c.x
C.c.cL(a0.a,a0.d,a.a,a.b,a.c,a.d)
a=f.gb3()
if(!C.a.S(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gb3()
a0=a.gbv(a)
if(a0){a0=c.r
a0.toString
a1=a.d
if(a1<6)a0.a.uniform1i(a0.d,0)
else{a=a.a
a0.a.uniform1i(a0.d,a)}}if(f.gix()){a=f.gih()
a0=c.y
C.c.a3(a0.a,a0.d,a)
a=f.gii()
a0=c.z
C.c.a3(a0.a,a0.d,a)
a=f.gij()
a0=c.Q
C.c.a3(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.cm.j(0,p)
C.c.bC(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.m
b1=new H.a4([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gaD()
d=b1.j(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.dA(b2.a.cp.j(0,e),d)
o=f.gj1(f)
b=c.b
C.c.V(b.a,b.d,o.a,o.b,o.c)
o=f.gdS(f).jx()
b=c.c
C.c.V(b.a,b.d,o.a,o.b,o.c)
o=i.cK(f.gj1(f))
b=c.d
C.c.V(b.a,b.d,o.a,o.b,o.c)
o=f.gbc(f)
b=c.e
C.c.V(b.a,b.d,o.a,o.b,o.c)
f.gas()
o=f.gbD()
b=c.f
C.c.V(b.a,b.d,o.a,o.b,o.c)
o=f.gbA(f)
b=c.r
C.c.V(b.a,b.d,o.a,o.b,o.c)
o=f.gjy()
b=c.x
C.c.a3(b.a,b.d,o)
o=f.gjz()
b=c.y
C.c.a3(b.a,b.d,o)
f.gas()
o=f.gas()
H.l(m,"$ib",b3,"$ab")
if(!C.a.S(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gas()
b=o.gbv(o)
if(b){b=c.dx
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}f.gb3()
o=f.geM()
b=c.z
C.c.cL(b.a,b.d,o.a,o.b,o.c,o.d)
o=f.gb3()
if(!C.a.S(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb3()
b=o.gbv(o)
if(b){b=c.dy
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}if(f.gjm()){o=f.gjl()
b=c.Q
C.c.a3(b.a,b.d,o)
o=f.gjk()
b=c.ch
C.c.a3(b.a,b.d,o)}if(f.gix()){o=f.gih()
b=c.cx
C.c.a3(b.a,b.d,o)
o=f.gii()
b=c.cy
C.c.a3(b.a,b.d,o)
o=f.gij()
b=c.db
C.c.a3(b.a,b.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.co.j(0,q)
C.c.bC(q.a,q.d,l)}}}if(t.f.b){b2.a8(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.af(b3.e2,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga6(r).cv(0)}b3=b3.id
b3.toString
b3.ai(r.ab(0,!0))}if(t.cy){b2.a8(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hO(b3.e3,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.e4
C.c.V(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.a8(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.af(b3.e5,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.e6
C.c.a3(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.e7
C.c.V(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.a8(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.af(b3.e8,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.e9
C.c.a3(r.a,r.d,p)}if(b3.b){b2.a8(m,b2.db.d)
r=b2.a
p=b2.db.d
r.af(r.ea,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a_(b4)
r=b5.e
r.a_(b4)
r.a5(b4)
r.at(b4)
if(!q||b3.b||!1)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(3553,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.ci()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.de().aL},
sfb:function(a){this.e=H.l(a,"$ia3",[V.av],"$aa3")}}
O.hQ.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aI(a,C.e.ag(b+3,4)*4))},
$S:15}
O.hR.prototype={
$2:function(a,b){H.f(a,"$iaI")
H.f(b,"$iaI")
return J.l6(a.a,b.a)},
$S:48}
O.hS.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aL(a,C.e.ag(b+3,4)*4))},
$S:15}
O.hT.prototype={
$2:function(a,b){H.f(a,"$iaL")
H.f(b,"$iaL")
return J.l6(a.a,b.a)},
$S:49}
O.hU.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aM(a,C.e.ag(b+3,4)*4))},
$S:15}
O.hV.prototype={
$2:function(a,b){H.f(a,"$iaM")
H.f(b,"$iaM")
return J.l6(a.a,b.a)},
$S:50}
O.hK.prototype={
aI:function(){var u,t=this
t.cX()
u=t.f
if(!(Math.abs(u-1)<$.N().a)){t.f=1
u=new D.I(t.b,u,1,[P.A])
u.b=!0
t.a.L(u)}}}
O.cO.prototype={
L:function(a){return this.a.L(H.f(a,"$iz"))},
aG:function(){return this.L(null)},
aI:function(){},
dD:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aI()
u=s.a
u.a=null
u.L(null)}}}
O.hL.prototype={}
O.bc.prototype={
dB:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.ai])
t.b=!0
s.a.L(t)}},
aI:function(){this.cX()
this.dB(new V.ai(1,1,1))},
sbc:function(a,b){this.dD(new A.ao(!0,this.c.b,!1))
this.dB(b)}}
O.hN.prototype={}
O.hO.prototype={
aI:function(){var u,t=this
t.cY()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.L(u)}}}
O.hP.prototype={
aI:function(){var u,t=this
t.cY()
u=t.ch
if(!(Math.abs(u-100)<$.N().a)){t.ch=100
u=new D.I(t.b+".shininess",u,100,[P.A])
u.b=!0
t.a.L(u)}}}
O.ei.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u},
L:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.B(a)},
aG:function(){return this.L(null)},
ac:function(a,b){},
cH:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$iej")
if(u==null){t=a.a
u=new A.ej(t,n)
u.bI(t,n)
u.cs(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"fov"),"$ia6")
u.ch=H.p(u.y.j(0,"ratio"),"$ia6")
u.cx=H.p(u.y.j(0,"boxClr"),"$iY")
u.cy=H.p(u.y.j(0,"boxTxt"),"$ibT")
u.db=H.p(u.y.j(0,"viewMat"),"$iar")
a.c5(u)}o.a=u}if(b.e==null){t=b.d.c9(new Z.db(a.a),$.aG())
t.ax($.aG()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a_(a)
q=o.b
p=r.Q
C.c.a3(p.a,p.d,q)
q=r.ch
C.c.a3(q.a,q.d,t/s)
s=o.c
r.cy.eK(s)
s=o.d
t=r.cx
C.c.V(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).cv(0)
r=r.db
r.toString
r.ai(s.ab(0,!0))
t=b.e
if(t instanceof Z.bB){t.a_(a)
t.a5(a)
t.at(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.ci()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bQ.prototype={}
T.bR.prototype={}
T.d6.prototype={}
T.iU.prototype={
dC:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cj()}},
gp:function(){var u=this.y
return u==null?this.y=D.O():u},
a_:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.ep.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.O():u}}
T.iV.prototype={
iL:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.m1(a)
t=T.lo(q)
r=W.o
W.a7(u,"load",H.n(new T.iX(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aU:function(a,b,c,d,e,f){var u,t=W.m1(c);++this.d
u=W.o
W.a7(t,"load",H.n(new T.iW(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dA:function(a,b,c){var u,t,s,r
b=V.dx(b)
u=V.dx(a.width)
t=V.dx(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l9()
s.width=u
s.height=t
r=H.f(C.j.eH(s,"2d"),"$icB")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pp(r.getImageData(0,0,s.width,s.height))}}}
T.iX.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.dA(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.c.ex(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dC();++u.e},
$S:7}
T.iW.prototype={
$1:function(a){var u=this,t=u.a,s=t.dA(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.ex(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cj()}++t.e},
$S:7}
V.bn.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.e4.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sad:function(a){this.a=H.l(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.aw.prototype={
aM:function(a,b){return!this.eQ(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}}
V.im.prototype={
aM:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cc(this.a),t=H.cc(this.b)
return u+".."+t},
$iaB:1}
V.iw.prototype={
eV:function(a){var u,t
if(a.a.length<=0)throw H.d(P.D("May not create a SetMatcher with zero characters."))
u=new H.a4([P.m,P.P])
for(t=new H.cN(a,a.gn(a),[H.al(a,"x",0)]);t.v();)u.k(0,t.d,!0)
this.shN(u)},
aM:function(a,b){return this.a.br(0,b)},
i:function(a){var u=this.a
return P.d3(u.ga9(u),0,null)},
shN:function(a){this.a=H.l(a,"$iy",[P.m,P.P],"$ay")},
$iaB:1}
V.d0.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d8(this.a.l(0,b))
r.sad(H.c([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
iA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
si5:function(a){this.c=H.l(a,"$ib",[V.d8],"$ab")}}
V.er.prototype={
i:function(a){var u=H.lK(this.b,"\n","\\n"),t=H.lK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d7.prototype={
aO:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shG:function(a){var u=P.h
this.c=H.l(a,"$iy",[u,u],"$ay")}}
V.j_.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d0(this,b)
u.si5(H.c([],[V.d8]))
u.d=null
this.a.k(0,b,u)}return u},
O:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d7(a)
u=P.h
t.shG(new H.a4([u,u]))
this.b.k(0,a,t)}return t},
eB:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.c([],[V.er]),k=this.c,j=[P.m],i=H.c([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.iA(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d3(i,0,m)
throw H.d(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.c([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d3(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.er(n==null?o.b:n,p,s)}++s}}},
shW:function(a){this.a=H.l(a,"$iy",[P.h,V.d0],"$ay")},
shZ:function(a){this.b=H.l(a,"$iy",[P.h,V.d7],"$ay")}}
V.d8.prototype={
i:function(a){return this.b.b+": "+this.cW(0)}}
X.fM.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.O():u},
a2:function(a){var u=this.fr
if(u!=null)u.B(a)},
sau:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.I("width",u,b,[P.m])
u.b=!0
t.a2(u)}},
sap:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.I("height",u,b,[P.m])
u.b=!0
t.a2(u)}},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.q()
h.sau(0,C.e.a1(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.q()
h.sap(0,C.e.a1(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.a2(u.getParameter(3379))
p=V.dx(s)
o=V.dx(r)
q=V.dx(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.c.ey(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.lo(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dC()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cj()
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
a.c=C.d.a1(s*h.a)
r=t.d
a.d=C.d.a1(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.F(k)
j=C.d.a1(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.F(l)
u.viewport(j,C.d.a1(t*l),C.d.a1(s*k),C.d.a1(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
at:function(a){a.a.bindFramebuffer(36160,null)}}
X.c0.prototype={$ic9:1}
X.hk.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.O():u},
a_:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.d.a1(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.d.a1(r*t)
r=C.d.a1(s.c*u)
a.c=r
s=C.d.a1(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
at:function(a){}}
X.hr.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.O():u},
a_:function(a){var u
a.cy.bz(V.c8())
u=V.c8()
a.db.bz(u)},
at:function(a){a.cy.aN()
a.db.aN()},
$ic9:1,
$ic0:1}
X.ec.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.O():u},
a2:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.B(a)},
f5:function(){return this.a2(null)},
a_:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.bd(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bz(d)
k=$.ma
if(k==null){k=V.nY()
j=$.mw
if(j==null)j=$.mw=new V.X(0,1,0)
i=$.mv
if(i==null)i=$.mv=new V.X(0,0,-1)
u=i.w(0,Math.sqrt(i.E(i)))
j=j.bd(u)
t=j.w(0,Math.sqrt(j.E(j)))
s=u.bd(t)
r=new V.X(k.a,k.b,k.c)
q=t.T(0).E(r)
p=s.T(0).E(r)
o=u.T(0).E(r)
k=V.bd(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.ma=k
n=k}else n=k
k=l.b
if(k!=null){m=k.b1(0,a,l)
if(m!=null)n=m.q(0,n)}a.db.bz(n)},
at:function(a){a.cy.aN()
a.db.aN()},
$ic9:1,
$ic0:1}
X.d4.prototype={}
V.bD.prototype={
bk:function(a){this.b=new P.hp(C.Q)
this.c=null
this.sbQ(H.c([],[[P.b,W.aJ]]))},
M:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.aJ]))
u=a.split("\n")
for(l=u.length,t=[W.aJ],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.fg(q,0,q.length)
n=o==null?q:o
C.O.eJ(p,H.lK(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaE(m.d),p)}},
ep:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.h],"$ab")
q.sbQ(H.c([],[[P.b,W.aJ]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bs():t).eB(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.by(t[r])},
sbQ:function(a){this.d=H.l(a,"$ib",[[P.b,W.aJ]],"$ab")}}
V.l2.prototype={
$1:function(a){var u
H.f(a,"$ibg")
u=C.d.eA(this.a.giD(),2)
if(u!=="0.00")P.lJ(u+" fps")},
$S:52}
V.h1.prototype={
by:function(a){var u=this
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
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.j0()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.t("_"))
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
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a0("0","9")
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
C.a.h(a1.l(0,k).m(0,k).a,new V.bn())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.bn())
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
t=new V.aw()
s=[V.aB]
t.sad(H.c([],s))
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
t=new V.aw()
t.sad(H.c([],s))
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
u=[P.h]
t.aO(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aO(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aO(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hl.prototype={
by:function(a){var u=this
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
bs:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.j0()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.t("_"))
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
t=V.v(new H.t("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a0("0","9")
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
C.a.h(e.l(0,k).m(0,m).a,new V.bn())
t=e.l(0,j).m(0,i)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.aw()
s=[V.aB]
t.sad(H.c([],s))
C.a.h(u.a,t)
u=V.v(new H.t("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.t("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.aw()
u.sad(H.c([],s))
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
t=[P.h]
u.aO(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aO(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aO(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.hn.prototype={
by:function(a){var u=this,t="#111"
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
bs:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.j0()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
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
C.a.h(l.l(0,o).m(0,o).a,new V.bn())
C.a.h(l.l(0,s).m(0,m).a,new V.bn())
u=l.l(0,m).m(0,m)
t=new V.aw()
t.sad(H.c([],[V.aB]))
C.a.h(u.a,t)
u=V.v(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.O("Symbol")
u=l.l(0,n)
u.d=u.a.O("String")
u=l.l(0,r)
t=u.a.O(r)
u.d=t
t.aO(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.O(q)
t=l.l(0,m)
t.d=t.a.O(m)
return l}}
V.ie.prototype={
ep:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sbQ(H.c([],[[P.b,W.aJ]]))
this.M(C.a.m(b,"\n"),"#111")},
by:function(a){},
bs:function(){return}}
V.ij.prototype={
dJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mp().gcG().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.dH(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lO(m.c).h(0,q)
o=W.nK("radio")
o.checked=s
o.name=u
u=W.o
W.a7(o,"change",H.n(new V.ik(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lO(m.c).h(0,r.createElement("br"))},
an:function(a,b,c){return this.dJ(a,b,c,!1)},
dH:function(a){var u,t,s=P.mp(),r=P.h,q=P.nR(s.gcG(),r,r)
q.k(0,this.a,a)
u=s.es(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kd([],[]).cM(""),"",t)}}
V.ik.prototype={
$1:function(a){var u=this
if(H.E(u.b.checked)){u.c.$0()
u.a.dH(u.d)}},
$S:7}
V.iA.prototype={
eW:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.n(new V.iC(o),{func:1,ret:-1,args:[r]}),!1,r)},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.hQ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eB(C.a.iJ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.fo(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
eG:function(a){var u,t,s,r=new V.h1("dart")
r.bk("dart")
u=new V.hl("glsl")
u.bk("glsl")
t=new V.hn("html")
t.bk("html")
s=C.a.iB(H.c([r,u,t],[V.bD]),new V.iD(a))
if(s!=null)return s
r=new V.ie("plain")
r.bk("plain")
return r},
dK:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dw(r).a7(r,"+")){C.a.k(b0,s,C.b.aj(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a7(r,"-")){C.a.k(b0,s,C.b.aj(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eG(a8)
q.ep(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fo(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lQ()
i.href="#"+H.j(m)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.ie(a,r[a0])
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
for(a3=C.a.gU(r);a3.v();)c.appendChild(a3.gH(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i8:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibf").style
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
o=H.f(r.insertCell(-1),"$ibf")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hQ:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.j0()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.aw()
r=[V.aB]
s.sad(H.c([],r))
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
s=new V.aw()
s.sad(H.c([],r))
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
s=new V.aw()
s.sad(H.c([],r))
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
t=new V.aw()
t.sad(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.aw()
t.sad(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bn())
s=u.l(0,i).m(0,i)
t=new V.aw()
t.sad(H.c([],r))
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
V.iC.prototype={
$1:function(a){P.ml(C.o,new V.iB(this.a))},
$S:7}
V.iB.prototype={
$0:function(){var u=C.d.a1(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.iD.prototype={
$1:function(a){return H.f(a,"$ibD").a===this.a},
$S:53}
U.kO.prototype={
$1:function(a){var u=this.a
u.d.sba(a)
u.f.sba(a)},
$S:54}
U.kP.prototype={
$0:function(){this.a.$1(0)},
$S:0}
U.kQ.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
U.kT.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
U.kU.prototype={
$0:function(){this.a.$1(0.3)},
$S:0}
U.kV.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
U.kW.prototype={
$0:function(){this.a.$1(0.5)},
$S:0}
U.kX.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
U.kY.prototype={
$0:function(){this.a.$1(0.7)},
$S:0}
U.kZ.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
U.l_.prototype={
$0:function(){this.a.$1(0.9)},
$S:0}
U.kR.prototype={
$0:function(){this.a.$1(1)},
$S:0}
U.kS.prototype={
$1:function(a){var u,t,s,r,q=null
H.f(a,"$iz")
u=this.a
t=this.b
s=t.d
if(s==null)s=q
else{s=s.a
s=s==null?q:s.c}r=[P.h]
u.dK("Vertex Shader","glsl",0,H.c(s.split("\n"),r))
t=t.d
if(t==null)t=q
else{t=t.a
t=t==null?q:t.d}u.dK("Fragment Shader","glsl",0,H.c(t.split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eN=u.i
u=J.dZ.prototype
u.eP=u.i
u=P.i.prototype
u.eO=u.bE
u=W.U.prototype
u.bH=u.ao
u=W.f6.prototype
u.eR=u.aC
u=O.cO.prototype
u.cX=u.aI
u=O.bc.prototype
u.cY=u.aI
u=V.e4.prototype
u.eQ=u.aM
u.cW=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pj","ot",12)
u(P,"pk","ou",12)
u(P,"pl","ov",12)
t(P,"mU","ph",3)
s(W,"py",4,null,["$4"],["ox"],26,0)
s(W,"pz",4,null,["$4"],["oy"],26,0)
var m
r(m=E.ap.prototype,"gen",0,0,null,["$1","$0"],["eo","iU"],1,0)
r(m,"gel",0,0,null,["$1","$0"],["em","iR"],1,0)
q(m,"giP","iQ",9)
q(m,"giS","iT",9)
r(m=E.eq.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
p(m,"gj6","eu",3)
o(m=X.ey.prototype,"gh1","h2",13)
o(m,"gfQ","fR",13)
o(m,"gfW","fX",4)
o(m,"gh5","h6",25)
o(m,"gh3","h4",25)
o(m,"gh9","ha",4)
o(m,"ghd","he",4)
o(m,"gh_","h0",4)
o(m,"ghb","hc",4)
o(m,"gfY","fZ",4)
o(m,"ghf","hg",36)
o(m,"ghh","hi",13)
o(m,"ghx","hy",14)
o(m,"ght","hu",14)
o(m,"ghv","hw",14)
r(m=D.e0.prototype,"gdq",0,0,null,["$1","$0"],["dr","h7"],1,0)
o(m,"ghj","hk",38)
q(m,"gfK","fL",27)
q(m,"ghn","ho",27)
n(V.V.prototype,"gn","be",11)
n(V.X.prototype,"gn","be",11)
n(V.cj.prototype,"gn","be",11)
r(m=U.cK.prototype,"gaV",0,0,null,["$1","$0"],["P","ae"],1,0)
q(m,"gfI","fJ",28)
q(m,"ghl","hm",28)
r(m=U.ez.prototype,"gaV",0,0,null,["$1","$0"],["P","ae"],1,0)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
r(m=U.eA.prototype,"gaV",0,0,null,["$1","$0"],["P","ae"],1,0)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gfB","fC",2)
o(m,"gfD","fE",2)
o(m,"gi3","i4",2)
o(m,"gi1","i2",2)
o(m,"gi_","i0",2)
o(U.eB.prototype,"gfG","fH",2)
r(m=M.dI.prototype,"gZ",0,0,null,["$1","$0"],["W","aF"],1,0)
q(m,"ghp","hq",29)
q(m,"ghr","hs",29)
r(M.dK.prototype,"gZ",0,0,null,["$1","$0"],["W","aF"],1,0)
r(m=M.dP.prototype,"gZ",0,0,null,["$1","$0"],["W","aF"],1,0)
q(m,"gfS","fT",9)
q(m,"gfU","fV",9)
r(M.dT.prototype,"gZ",0,0,null,["$1","$0"],["W","aF"],1,0)
r(O.dV.prototype,"gaw",0,0,null,["$1","$0"],["L","aG"],1,0)
r(m=O.e5.prototype,"gaw",0,0,null,["$1","$0"],["L","aG"],1,0)
r(m,"ghJ",0,0,null,["$1","$0"],["dw","hK"],1,0)
q(m,"gfM","fN",16)
q(m,"gfO","fP",16)
r(O.cO.prototype,"gaw",0,0,null,["$1","$0"],["L","aG"],1,0)
r(O.ei.prototype,"gaw",0,0,null,["$1","$0"],["L","aG"],1,0)
r(X.ec.prototype,"gf4",0,0,null,["$1","$0"],["a2","f5"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.li,J.a,J.au,P.eU,P.i,H.cN,P.b8,H.c3,H.da,H.fV,H.j5,P.bG,H.cC,H.fb,P.ad,H.hy,H.hA,H.hu,P.fh,P.bl,P.aR,P.eE,P.iK,P.d2,P.iL,P.bg,P.am,P.kt,P.k7,P.ck,P.eT,P.x,P.kl,P.hG,P.c2,P.hq,P.kr,P.kq,P.P,P.aA,P.aa,P.bF,P.ic,P.em,P.eM,P.hj,P.bH,P.b,P.y,P.L,P.ay,P.h,P.ab,P.cl,P.ji,P.ka,W.fY,W.bV,W.H,W.ea,W.f6,W.kg,W.dR,W.aD,W.k6,W.fp,P.kc,P.fm,P.k1,P.R,O.a3,O.cP,E.fP,E.ap,E.io,E.eq,Z.eD,Z.db,Z.bB,Z.bI,Z.bj,D.fS,D.cG,D.z,X.dH,X.e_,X.hw,X.hD,X.aC,X.i1,X.j1,X.ey,D.dM,D.ac,D.ed,D.el,V.ai,V.an,V.hb,V.c7,V.av,V.a9,V.aq,V.bu,V.cY,V.V,V.X,V.cj,U.ez,U.eA,U.eB,M.dK,M.dP,M.dT,M.ax,A.dE,A.fH,A.ao,A.hm,A.aI,A.aL,A.aM,A.hM,A.cf,A.ch,A.ci,A.et,A.jc,F.a8,F.br,F.bO,F.eh,F.ix,F.iy,F.iz,F.aE,F.js,F.jt,F.jw,F.jx,O.bQ,O.cO,O.hN,T.iV,V.bn,V.aB,V.e4,V.im,V.iw,V.d0,V.er,V.d7,V.j_,X.d4,X.c0,X.hr,X.ec,V.bD,V.ij,V.iA])
s(J.a,[J.ht,J.dY,J.dZ,J.b9,J.c5,J.bL,H.cS,H.bN,W.k,W.fE,W.c_,W.cB,W.b6,W.b7,W.W,W.eG,W.h2,W.h3,W.eI,W.dO,W.eK,W.h5,W.o,W.eN,W.aU,W.ho,W.eP,W.bq,W.e2,W.hW,W.eV,W.eW,W.aV,W.eX,W.f_,W.aW,W.f3,W.f5,W.aY,W.f7,W.aZ,W.fc,W.aN,W.ff,W.iZ,W.b0,W.fi,W.j3,W.jn,W.fq,W.fs,W.fu,W.fw,W.fy,P.bb,P.eR,P.be,P.f1,P.ii,P.fd,P.bh,P.fk,P.fI,P.eF,P.dF,P.dS,P.ee,P.ef,P.ce,P.eg,P.eo,P.ev,P.f9])
s(J.dZ,[J.id,J.bU,J.bM])
t(J.lh,J.b9)
s(J.c5,[J.dX,J.dW])
t(P.hC,P.eU)
s(P.hC,[H.ew,W.jI,W.as,P.hf])
t(H.t,H.ew)
s(P.i,[H.h8,H.hH,H.dc])
s(H.h8,[H.c6,H.hz])
s(P.b8,[H.hI,H.jB])
t(H.hJ,H.c6)
t(H.fW,H.fV)
s(P.bG,[H.i9,H.hv,H.jg,H.j7,H.fR,H.iu,P.fG,P.eb,P.aT,P.jh,P.je,P.d1,P.fU,P.h0])
s(H.cC,[H.l4,H.iR,H.kJ,H.kK,H.kL,P.jE,P.jD,P.jF,P.jG,P.kk,P.kj,P.jP,P.jT,P.jQ,P.jR,P.jS,P.jW,P.jX,P.jV,P.jU,P.iM,P.iN,P.kD,P.k4,P.k3,P.k5,P.hB,P.hF,P.h6,P.h7,P.jm,P.jj,P.jk,P.jl,P.km,P.kn,P.kp,P.ko,P.kx,P.kw,P.ky,P.kz,W.h9,W.hY,W.i_,W.it,W.iJ,W.jO,W.i8,W.i7,W.k8,W.k9,W.ki,W.ks,P.ke,P.kF,P.hg,P.hh,P.fK,E.ip,E.iq,E.ir,E.iY,D.hc,D.hd,F.ku,F.jz,F.jy,F.ju,F.jv,O.hQ,O.hR,O.hS,O.hT,O.hU,O.hV,T.iX,T.iW,V.l2,V.ik,V.iC,V.iB,V.iD,U.kO,U.kP,U.kQ,U.kT,U.kU,U.kV,U.kW,U.kX,U.kY,U.kZ,U.l_,U.kR,U.kS])
s(H.iR,[H.iH,H.cz])
t(H.jC,P.fG)
t(P.hE,P.ad)
s(P.hE,[H.a4,W.jH])
t(H.e7,H.bN)
s(H.e7,[H.dh,H.dj])
t(H.di,H.dh)
t(H.cT,H.di)
t(H.dk,H.dj)
t(H.e8,H.dk)
s(H.e8,[H.i2,H.i3,H.i4,H.i5,H.i6,H.e9,H.cU])
t(P.k2,P.kt)
t(P.k0,P.k7)
t(P.fn,P.hG)
t(P.ex,P.fn)
s(P.c2,[P.fN,P.ha])
t(P.bE,P.iL)
s(P.bE,[P.fO,P.hp,P.jq,P.jp])
t(P.jo,P.ha)
s(P.aa,[P.A,P.m])
s(P.aT,[P.cd,P.hs])
t(P.jK,P.cl)
s(W.k,[W.G,W.he,W.cQ,W.aX,W.dl,W.b_,W.aO,W.dn,W.jA,W.dd,P.fL,P.bZ])
s(W.G,[W.U,W.bC,W.de])
s(W.U,[W.w,P.q])
s(W.w,[W.dC,W.fF,W.cy,W.bA,W.c1,W.aJ,W.hi,W.cL,W.cM,W.iv,W.bf,W.en,W.iP,W.iQ,W.d5])
s(W.b6,[W.cD,W.fZ,W.h_])
t(W.fX,W.b7)
t(W.cE,W.eG)
t(W.eJ,W.eI)
t(W.dN,W.eJ)
t(W.eL,W.eK)
t(W.h4,W.eL)
t(W.aK,W.c_)
t(W.eO,W.eN)
t(W.cI,W.eO)
t(W.eQ,W.eP)
t(W.c4,W.eQ)
t(W.bS,W.o)
s(W.bS,[W.ba,W.ae,W.b1])
t(W.hX,W.eV)
t(W.hZ,W.eW)
t(W.eY,W.eX)
t(W.i0,W.eY)
t(W.f0,W.f_)
t(W.cV,W.f0)
t(W.f4,W.f3)
t(W.ig,W.f4)
t(W.is,W.f5)
t(W.dm,W.dl)
t(W.iE,W.dm)
t(W.f8,W.f7)
t(W.iF,W.f8)
t(W.iI,W.fc)
t(W.fg,W.ff)
t(W.iS,W.fg)
t(W.dp,W.dn)
t(W.iT,W.dp)
t(W.fj,W.fi)
t(W.j2,W.fj)
t(W.bk,W.ae)
t(W.fr,W.fq)
t(W.jJ,W.fr)
t(W.eH,W.dO)
t(W.ft,W.fs)
t(W.jY,W.ft)
t(W.fv,W.fu)
t(W.eZ,W.fv)
t(W.fx,W.fw)
t(W.kb,W.fx)
t(W.fz,W.fy)
t(W.kf,W.fz)
t(W.jL,W.jH)
t(W.jM,P.iK)
t(W.lu,W.jM)
t(W.jN,P.d2)
t(W.kh,W.f6)
t(P.kd,P.kc)
t(P.ak,P.k1)
t(P.eS,P.eR)
t(P.hx,P.eS)
t(P.f2,P.f1)
t(P.ia,P.f2)
t(P.cZ,P.q)
t(P.fe,P.fd)
t(P.iO,P.fe)
t(P.fl,P.fk)
t(P.j4,P.fl)
t(P.fJ,P.eF)
t(P.ib,P.bZ)
t(P.fa,P.f9)
t(P.iG,P.fa)
s(E.fP,[Z.dG,A.d_,T.bR])
s(D.z,[D.bJ,D.bK,D.I,X.ih])
s(X.ih,[X.e3,X.bs,X.cR,X.es])
s(O.a3,[D.e0,U.cK,M.dI])
s(D.fS,[U.fT,U.aj])
t(U.dJ,U.aj)
s(A.d_,[A.dU,A.e6,A.ej])
s(A.et,[A.aP,A.j9,A.ja,A.jb,A.j8,A.a6,A.eu,A.Y,A.d9,A.jd,A.cg,A.ar,A.ag,A.bT])
s(O.bQ,[O.dV,O.e5,O.ei])
s(O.cO,[O.hK,O.hL,O.bc])
s(O.bc,[O.hO,O.hP])
s(T.bR,[T.d6,T.ep])
t(T.iU,T.d6)
s(V.e4,[V.aw,V.d8])
s(X.d4,[X.fM,X.hk])
s(V.bD,[V.h1,V.hl,V.hn,V.ie])
u(H.ew,H.da)
u(H.dh,P.x)
u(H.di,H.c3)
u(H.dj,P.x)
u(H.dk,H.c3)
u(P.eU,P.x)
u(P.fn,P.kl)
u(W.eG,W.fY)
u(W.eI,P.x)
u(W.eJ,W.H)
u(W.eK,P.x)
u(W.eL,W.H)
u(W.eN,P.x)
u(W.eO,W.H)
u(W.eP,P.x)
u(W.eQ,W.H)
u(W.eV,P.ad)
u(W.eW,P.ad)
u(W.eX,P.x)
u(W.eY,W.H)
u(W.f_,P.x)
u(W.f0,W.H)
u(W.f3,P.x)
u(W.f4,W.H)
u(W.f5,P.ad)
u(W.dl,P.x)
u(W.dm,W.H)
u(W.f7,P.x)
u(W.f8,W.H)
u(W.fc,P.ad)
u(W.ff,P.x)
u(W.fg,W.H)
u(W.dn,P.x)
u(W.dp,W.H)
u(W.fi,P.x)
u(W.fj,W.H)
u(W.fq,P.x)
u(W.fr,W.H)
u(W.fs,P.x)
u(W.ft,W.H)
u(W.fu,P.x)
u(W.fv,W.H)
u(W.fw,P.x)
u(W.fx,W.H)
u(W.fy,P.x)
u(W.fz,W.H)
u(P.eR,P.x)
u(P.eS,W.H)
u(P.f1,P.x)
u(P.f2,W.H)
u(P.fd,P.x)
u(P.fe,W.H)
u(P.fk,P.x)
u(P.fl,W.H)
u(P.eF,P.ad)
u(P.f9,P.x)
u(P.fa,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bA.prototype
C.j=W.c1.prototype
C.O=W.aJ.prototype
C.R=J.a.prototype
C.a=J.b9.prototype
C.S=J.dW.prototype
C.e=J.dX.prototype
C.i=J.dY.prototype
C.d=J.c5.prototype
C.b=J.bL.prototype
C.T=J.bM.prototype
C.Z=W.cV.prototype
C.B=J.id.prototype
C.c=P.ce.prototype
C.a_=W.bf.prototype
C.C=W.en.prototype
C.r=J.bU.prototype
C.D=W.bk.prototype
C.E=W.dd.prototype
C.a0=new P.fO()
C.F=new P.fN()
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

C.M=new P.ic()
C.h=new P.jo()
C.N=new P.jq()
C.f=new P.k2()
C.o=new P.bF(0)
C.P=new P.bF(5e6)
C.Q=new P.hq("element",!0,!1,!1,!1)
C.w=H.c(u([127,2047,65535,1114111]),[P.m])
C.k=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.m=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.c(u([]),[P.h])
C.W=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.y=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.n=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.z=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.X=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.A=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fW(0,{},C.x,[P.h,P.h])})()
var v={mangledGlobalNames:{m:"int",A:"double",aa:"num",h:"String",P:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.a8]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:P.L,args:[D.z]},{func:1,ret:-1,args:[P.m,[P.i,E.ap]]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.A},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:-1,args:[P.m,[P.i,V.av]]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:P.P,args:[W.G]},{func:1,ret:P.P,args:[W.aD]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.P,args:[W.U,P.h,P.h,W.bV]},{func:1,ret:-1,args:[P.m,[P.i,D.ac]]},{func:1,ret:-1,args:[P.m,[P.i,U.aj]]},{func:1,ret:-1,args:[P.m,[P.i,M.ax]]},{func:1,ret:P.L,args:[,]},{func:1,ret:[P.y,P.h,P.h],args:[[P.y,P.h,P.h],P.h]},{func:1,args:[W.o]},{func:1,ret:P.R,args:[,,]},{func:1,ret:[P.aR,,],args:[,]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:P.P,args:[[P.i,D.ac]]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:P.L,args:[,],opt:[P.ay]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:P.L,args:[F.aE,P.A,P.A]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.L,args:[P.aa]},{func:1,ret:P.R,args:[P.m]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,ret:P.m,args:[A.aL,A.aL]},{func:1,ret:P.m,args:[A.aM,A.aM]},{func:1,args:[P.h]},{func:1,ret:P.L,args:[P.bg]},{func:1,ret:P.P,args:[V.bD]},{func:1,ret:P.L,args:[P.A]},{func:1,args:[,P.h]},{func:1,ret:P.L,args:[{func:1,ret:-1}]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b5=0
$.cA=null
$.lT=null
$.ly=!1
$.mX=null
$.mS=null
$.n3=null
$.kG=null
$.kM=null
$.lH=null
$.cn=null
$.dt=null
$.du=null
$.lz=!1
$.a1=C.f
$.az=[]
$.bp=null
$.ld=null
$.lY=null
$.lX=null
$.dg=P.lk(P.h,P.bH)
$.m5=null
$.m6=null
$.mb=null
$.cW=null
$.mg=null
$.mu=null
$.ms=null
$.mt=null
$.mx=null
$.mw=null
$.mv=null
$.my=null
$.ma=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pV","n7",function(){return H.mW("_$dart_dartClosure")})
u($,"pW","lL",function(){return H.mW("_$dart_js")})
u($,"q0","n8",function(){return H.bi(H.j6({
toString:function(){return"$receiver$"}}))})
u($,"q1","n9",function(){return H.bi(H.j6({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q2","na",function(){return H.bi(H.j6(null))})
u($,"q3","nb",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q6","ne",function(){return H.bi(H.j6(void 0))})
u($,"q7","nf",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q5","nd",function(){return H.bi(H.mn(null))})
u($,"q4","nc",function(){return H.bi(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q9","nh",function(){return H.bi(H.mn(void 0))})
u($,"q8","ng",function(){return H.bi(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qq","lM",function(){return P.os()})
u($,"qc","ni",function(){return P.op()})
u($,"qr","nm",function(){return H.nX(H.cm(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qt","no",function(){return P.ob("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qu","np",function(){return P.oR()})
u($,"qs","nn",function(){return P.m3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qj","nl",function(){return Z.aQ(0)})
u($,"qd","nj",function(){return Z.aQ(511)})
u($,"ql","aG",function(){return Z.aQ(1)})
u($,"qk","by",function(){return Z.aQ(2)})
u($,"qf","bx",function(){return Z.aQ(4)})
u($,"qm","b3",function(){return Z.aQ(8)})
u($,"qn","bY",function(){return Z.aQ(16)})
u($,"qg","dy",function(){return Z.aQ(32)})
u($,"qh","dz",function(){return Z.aQ(64)})
u($,"qi","nk",function(){return Z.aQ(96)})
u($,"qo","cx",function(){return Z.aQ(128)})
u($,"qe","bw",function(){return Z.aQ(256)})
u($,"pU","n6",function(){return new V.hb(1e-9)})
u($,"pT","N",function(){return $.n6()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cS,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cT,Float64Array:H.cT,Int16Array:H.i2,Int32Array:H.i3,Int8Array:H.i4,Uint16Array:H.i5,Uint32Array:H.i6,Uint8ClampedArray:H.e9,CanvasPixelArray:H.e9,Uint8Array:H.cU,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fE,HTMLAnchorElement:W.dC,HTMLAreaElement:W.fF,HTMLBaseElement:W.cy,Blob:W.c_,HTMLBodyElement:W.bA,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.cB,CDATASection:W.bC,CharacterData:W.bC,Comment:W.bC,ProcessingInstruction:W.bC,Text:W.bC,CSSNumericValue:W.cD,CSSUnitValue:W.cD,CSSPerspective:W.fX,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cE,MSStyleCSSProperties:W.cE,CSS2Properties:W.cE,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.fZ,CSSUnparsedValue:W.h_,DataTransferItemList:W.h2,HTMLDivElement:W.aJ,DOMException:W.h3,ClientRectList:W.dN,DOMRectList:W.dN,DOMRectReadOnly:W.dO,DOMStringList:W.h4,DOMTokenList:W.h5,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aK,FileList:W.cI,FileWriter:W.he,HTMLFormElement:W.hi,Gamepad:W.aU,History:W.ho,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.bq,HTMLImageElement:W.cL,HTMLInputElement:W.cM,KeyboardEvent:W.ba,Location:W.e2,MediaList:W.hW,MessagePort:W.cQ,MIDIInputMap:W.hX,MIDIOutputMap:W.hZ,MimeType:W.aV,MimeTypeArray:W.i0,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.aW,PluginArray:W.ig,RTCStatsReport:W.is,HTMLSelectElement:W.iv,SourceBuffer:W.aX,SourceBufferList:W.iE,SpeechGrammar:W.aY,SpeechGrammarList:W.iF,SpeechRecognitionResult:W.aZ,Storage:W.iI,CSSStyleSheet:W.aN,StyleSheet:W.aN,HTMLTableCellElement:W.bf,HTMLTableDataCellElement:W.bf,HTMLTableHeaderCellElement:W.bf,HTMLTableElement:W.en,HTMLTableRowElement:W.iP,HTMLTableSectionElement:W.iQ,HTMLTemplateElement:W.d5,TextTrack:W.b_,TextTrackCue:W.aO,VTTCue:W.aO,TextTrackCueList:W.iS,TextTrackList:W.iT,TimeRanges:W.iZ,Touch:W.b0,TouchEvent:W.b1,TouchList:W.j2,TrackDefaultList:W.j3,CompositionEvent:W.bS,FocusEvent:W.bS,TextEvent:W.bS,UIEvent:W.bS,URL:W.jn,VideoTrackList:W.jA,WheelEvent:W.bk,Window:W.dd,DOMWindow:W.dd,Attr:W.de,CSSRuleList:W.jJ,ClientRect:W.eH,DOMRect:W.eH,GamepadList:W.jY,NamedNodeMap:W.eZ,MozNamedAttrMap:W.eZ,SpeechRecognitionResultList:W.kb,StyleSheetList:W.kf,SVGLength:P.bb,SVGLengthList:P.hx,SVGNumber:P.be,SVGNumberList:P.ia,SVGPointList:P.ii,SVGScriptElement:P.cZ,SVGStringList:P.iO,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bh,SVGTransformList:P.j4,AudioBuffer:P.fI,AudioParamMap:P.fJ,AudioTrackList:P.fL,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.ib,WebGLBuffer:P.dF,WebGLFramebuffer:P.dS,WebGLProgram:P.ee,WebGLRenderbuffer:P.ef,WebGL2RenderingContext:P.ce,WebGLShader:P.eg,WebGLTexture:P.eo,WebGLUniformLocation:P.ev,SQLResultSetRowList:P.iG})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e7.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.e8.$nativeSuperclassTag="ArrayBufferView"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.n_,[])
else U.n_([])})})()
//# sourceMappingURL=test.dart.js.map
