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
a[c]=function(){a[c]=function(){H.ql(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lZ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lB:function lB(){},
kW:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hs:function(){return new P.cf("No element")},
oj:function(){return new P.cf("Too many elements")},
oi:function(){return new P.cf("Too few elements")},
eh:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oN(a,b,c,d,e)
else H.oM(a,b,c,d,e)},
oN:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b5(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oM:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.ad(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.ad(a3+a4,2)
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
if(J.b5(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b5(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b5(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b5(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b5(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b5(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b5(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b5(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b5(a5.$2(k,j),0)){i=j
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
if(typeof d!=="number")return d.S()
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
if(typeof a0!=="number")return a0.S()
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
if(typeof d!=="number")return d.S()
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
H.eh(a2,a3,h-2,a5,a6)
H.eh(a2,g+2,a4,a5,a6)
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
if(typeof d!=="number")return d.S()
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
break}}}H.eh(a2,h,g,a5,a6)}else H.eh(a2,h,g,a5,a6)},
u:function u(a){this.a=a},
h7:function h7(){},
c7:function c7(){},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
hJ:function hJ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hK:function hK(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
jK:function jK(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(){},
d9:function d9(){},
et:function et(){},
oa:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cv:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
q3:function(a){return v.types[H.a3(a)]},
qa:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iN},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.at(a))
return u},
cW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oE:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
cb:function(a){return H.ov(a)+H.lV(H.bY(a),0,null)},
ov:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibU){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cv(t.length>1&&C.b.F(t,0)===36?C.b.af(t,1):t)},
ow:function(){if(!!self.location)return self.location.href
return},
mB:function(a){var u,t,s,r,q
H.l1(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oF:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aY(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.at(s))}return H.mB(r)},
mC:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<0)throw H.c(H.at(s))
if(s>65535)return H.oF(a)}return H.mB(a)},
oG:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cc:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aY(u,10))>>>0,56320|u&1023)}}throw H.c(P.aj(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oD:function(a){var u=H.ca(a).getFullYear()+0
return u},
oB:function(a){var u=H.ca(a).getMonth()+1
return u},
ox:function(a){var u=H.ca(a).getDate()+0
return u},
oy:function(a){var u=H.ca(a).getHours()+0
return u},
oA:function(a){var u=H.ca(a).getMinutes()+0
return u},
oC:function(a){var u=H.ca(a).getSeconds()+0
return u},
oz:function(a){var u=H.ca(a).getMilliseconds()+0
return u},
E:function(a){throw H.c(H.at(a))},
e:function(a,b){if(a==null)J.aH(a)
throw H.c(H.cp(a,b))},
cp:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,s,null)
u=H.a3(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.ea(b,s)},
pY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cd(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cd(a,c,!0,b,"end",u)
return new P.aT(!0,b,"end",null)},
at:function(a){return new P.aT(!0,a,null,null)},
pU:function(a){if(typeof a!=="number")throw H.c(H.at(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nz})
u.name=""}else u.toString=H.nz
return u},
nz:function(){return J.au(this.dartException)},
B:function(a){throw H.c(a)},
v:function(a){throw H.c(P.bo(a))},
bj:function(a){var u,t,s,r,q,p
a=H.nx(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mM:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mw:function(a,b){return new H.ib(a,b==null?null:b.method)},
lC:function(a,b){var u=b==null,t=u?null:b.method
return new H.hv(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lm(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aY(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lC(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mw(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nD()
q=$.nE()
p=$.nF()
o=$.nG()
n=$.nJ()
m=$.nK()
l=$.nI()
$.nH()
k=$.nM()
j=$.nL()
i=r.an(u)
if(i!=null)return f.$1(H.lC(H.K(u),i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.lC(H.K(u),i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mw(H.K(u),i))}}return f.$1(new H.jk(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ej()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aT(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ej()
return a},
ct:function(a){var u
if(a==null)return new H.f9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f9(a)},
q1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
q9:function(a,b,c,d,e,f){H.f(a,"$ibK")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.D("Unsupported number of arguments for wrapped closure"))},
co:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q9)
a.$identity=u
return u},
o9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iK().constructor.prototype):Object.create(new H.cy(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b6
if(typeof t!=="number")return t.p()
$.b6=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.mf(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.q3,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.me:H.lr
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mf(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
o6:function(a,b,c,d){var u=H.lr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
mf:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.o8(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.o6(t,!r,u,b)
if(t===0){r=$.b6
if(typeof r!=="number")return r.p()
$.b6=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cz
return new Function(r+H.j(q==null?$.cz=H.fP("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b6
if(typeof r!=="number")return r.p()
$.b6=r+1
o+=r
r="return function("+o+"){return this."
q=$.cz
return new Function(r+H.j(q==null?$.cz=H.fP("self"):q)+"."+H.j(u)+"("+o+");}")()},
o7:function(a,b,c,d){var u=H.lr,t=H.me
switch(b?-1:a){case 0:throw H.c(H.oK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
o8:function(a,b){var u,t,s,r,q,p,o,n=$.cz
if(n==null)n=$.cz=H.fP("self")
u=$.md
if(u==null)u=$.md=H.fP("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.o7(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b6
if(typeof u!=="number")return u.p()
$.b6=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b6
if(typeof u!=="number")return u.p()
$.b6=u+1
return new Function(n+u+"}")()},
lZ:function(a,b,c,d,e,f,g){return H.o9(a,b,H.a3(c),d,!!e,!!f,g)},
lr:function(a){return a.a},
me:function(a){return a.c},
fP:function(a){var u,t,s,r=new H.cy("self","target","receiver","name"),q=J.lz(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pQ("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b3(a,"String"))},
pZ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"double"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b3(a,"num"))},
lW:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b3(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b3(a,"int"))},
nv:function(a,b){throw H.c(H.b3(a,H.cv(H.K(b).substring(2))))},
qg:function(a,b){throw H.c(H.o5(a,H.cv(H.K(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.nv(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.qg(a,b)},
l1:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.b3(a,"List<dynamic>"))},
nr:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.nv(a,b)},
nl:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
fy:function(a,b){var u
if(typeof a=="function")return!0
u=H.nl(J.U(a))
if(u==null)return!1
return H.n6(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lS)return a
$.lS=!0
try{if(H.fy(a,b))return a
u=H.lg(b)
t=H.b3(a,u)
throw H.c(t)}finally{$.lS=!1}},
m_:function(a,b){if(a!=null&&!H.lY(a,b))H.B(H.b3(a,H.lg(b)))
return a},
b3:function(a,b){return new H.j9("TypeError: "+P.dN(a)+": type '"+H.nc(a)+"' is not a subtype of type '"+b+"'")},
o5:function(a,b){return new H.fQ("CastError: "+P.dN(a)+": type '"+H.nc(a)+"' is not a subtype of type '"+b+"'")},
nc:function(a){var u,t=J.U(a)
if(!!t.$icC){u=H.nl(t)
if(u!=null)return H.lg(u)
return"Closure"}return H.cb(a)},
pQ:function(a){throw H.c(new H.jL(a))},
ql:function(a){throw H.c(new P.h_(H.K(a)))},
oK:function(a){return new H.iv(a)},
no:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bY:function(a){if(a==null)return
return a.$ti},
r2:function(a,b,c){return H.cu(a["$a"+H.j(c)],H.bY(b))},
bX:function(a,b,c,d){var u
H.K(c)
H.a3(d)
u=H.cu(a["$a"+H.j(c)],H.bY(b))
return u==null?null:u[d]},
ap:function(a,b,c){var u
H.K(b)
H.a3(c)
u=H.cu(a["$a"+H.j(b)],H.bY(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a3(b)
u=H.bY(a)
return u==null?null:u[b]},
lg:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cv(a[0].name)+H.lV(a,1,b)
if(typeof a=="function")return H.cv(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.pp(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pp:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
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
if(m!=null&&m!==P.R)p+=" extends "+H.bW(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bW(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bW(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bW(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.q0(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bW(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lV:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ak("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.i(0)+">"},
cu:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lX:function(a,b,c,d){var u,t
H.K(b)
H.l1(c)
H.K(d)
if(a==null)return!1
u=H.bY(a)
t=J.U(a)
if(t[b]==null)return!1
return H.nf(H.cu(t[d],u),null,c,null)},
l:function(a,b,c,d){H.K(b)
H.l1(c)
H.K(d)
if(a==null)return a
if(H.lX(a,b,c,d))return a
throw H.c(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cv(b.substring(2))+H.lV(c,0,null),v.mangledGlobalNames)))},
nf:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aS(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aS(a[t],b,c[t],d))return!1
return!0},
r0:function(a,b,c){return a.apply(b,H.cu(J.U(b)["$a"+H.j(c)],H.bY(b)))},
nq:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="P"||a===-1||a===-2||H.nq(u)}return!1},
lY:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="P"||b===-1||b===-2||H.nq(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fy(a,b)}u=J.U(a).constructor
t=H.bY(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aS(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lY(a,b))throw H.c(H.b3(a,H.lg(b)))
return a},
aS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aS(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
if('func' in c)return H.n6(a,b,c,d)
if('func' in a)return c.name==="bK"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aS("type" in a?a.type:l,b,s,d)
else if(H.aS(a,b,s,d))return!0
else{if(!('$i'+"cI" in t.prototype))return!1
r=t.prototype["$a"+"cI"]
q=H.cu(r,u?a.slice(1):l)
return H.aS(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.nf(H.cu(m,u),b,p,d)},
n6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.qe(h,b,g,d)},
qe:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aS(c[s],d,a[s],b))return!1}return!0},
r1:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
qc:function(a){var u,t,s,r,q=H.K($.np.$1(a)),p=$.kV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.l_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.ne.$2(a,q))
if(q!=null){p=$.kV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.l_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.lf(u)
$.kV[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.l_[q]=u
return u}if(s==="-"){r=H.lf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nu(a,u)
if(s==="*")throw H.c(P.jj(q))
if(v.leafTags[q]===true){r=H.lf(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nu(a,u)},
nu:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.m1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lf:function(a){return J.m1(a,!1,null,!!a.$iN)},
qd:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lf(u)
else return J.m1(u,c,null,null)},
q7:function(){if(!0===$.m0)return
$.m0=!0
H.q8()},
q8:function(){var u,t,s,r,q,p,o,n
$.kV=Object.create(null)
$.l_=Object.create(null)
H.q6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nw.$1(q)
if(p!=null){o=H.qd(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
q6:function(){var u,t,s,r,q,p,o=C.G()
o=H.cn(C.H,H.cn(C.I,H.cn(C.v,H.cn(C.v,H.cn(C.J,H.cn(C.K,H.cn(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.np=new H.kX(r)
$.ne=new H.kY(q)
$.nw=new H.kZ(p)},
cn:function(a,b){return a(b)||b},
ol:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
qj:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
q_:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nx:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m3:function(a,b,c){var u=H.qk(a,b,c)
return u},
qk:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nx(b),'g'),H.q_(c))},
fU:function fU(){},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j7:function j7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ib:function ib(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
lm:function lm(a){this.a=a},
f9:function f9(a){this.a=a
this.b=null},
cC:function cC(){},
iU:function iU(){},
iK:function iK(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
fQ:function fQ(a){this.a=a},
iv:function iv(a){this.a=a},
jL:function jL(a){this.a=a},
a5:function a5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hz:function hz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hA:function hA(a,b){this.a=a
this.$ti=b},
hB:function hB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){return a},
ou:function(a){return new Int8Array(a)},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cp(b,a))},
pn:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pY(a,b,c))
return b},
cR:function cR(){},
bP:function bP(){},
e2:function e2(){},
cS:function cS(){},
e3:function e3(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
e4:function e4(){},
cT:function cT(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
q0:function(a){return J.mm(a?Object.keys(a):[],null)},
qf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fA:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.m0==null){H.q7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jj("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.m5()]
if(r!=null)return r
r=H.qc(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.m5(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
ok:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aj(a,0,4294967295,"length",null))
return J.mm(new Array(a),b)},
mm:function(a,b){return J.lz(H.d(a,[b]))},
lz:function(a){H.l1(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dR.prototype
return J.dQ.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.dS.prototype
if(typeof a=="boolean")return J.ht.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
q2:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
cr:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
fz:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
nm:function(a){if(typeof a=="number")return J.bO.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bU.prototype
return a},
nn:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bU.prototype
return a},
du:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bU.prototype
return a},
cs:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
nV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.q2(a).p(a,b)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).v(a,b)},
b5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.nm(a).az(a,b)},
m7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nn(a).w(a,b)},
nW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nm(a).t(a,b)},
dy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.qa(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cr(a).j(a,b)},
lo:function(a,b,c){return J.fz(a).k(a,b,c)},
nX:function(a,b){return J.du(a).F(a,b)},
nY:function(a,b,c){return J.cs(a).hW(a,b,c)},
nZ:function(a,b,c,d){return J.cs(a).it(a,b,c,d)},
o_:function(a,b){return J.du(a).a0(a,b)},
lp:function(a,b){return J.nn(a).iH(a,b)},
fC:function(a,b){return J.fz(a).L(a,b)},
o0:function(a,b,c,d){return J.cs(a).iU(a,b,c,d)},
m8:function(a,b){return J.fz(a).I(a,b)},
o1:function(a){return J.cs(a).giD(a)},
m9:function(a){return J.cs(a).gcj(a)},
dz:function(a){return J.U(a).gJ(a)},
bD:function(a){return J.fz(a).gU(a)},
aH:function(a){return J.cr(a).gn(a)},
ma:function(a){return J.fz(a).jo(a)},
o2:function(a,b){return J.cs(a).jr(a,b)},
o3:function(a,b,c){return J.du(a).B(a,b,c)},
o4:function(a){return J.du(a).jB(a)},
au:function(a){return J.U(a).i(a)},
a:function a(){},
ht:function ht(){},
dS:function dS(){},
dT:function dT(){},
ig:function ig(){},
bU:function bU(){},
bs:function bs(){},
aV:function aV(a){this.$ti=a},
lA:function lA(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bO:function bO(){},
dR:function dR(){},
dQ:function dQ(){},
br:function br(){}},P={
p_:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pR()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.co(new P.jN(s),1)).observe(u,{childList:true})
return new P.jM(s,u,t)}else if(self.setImmediate!=null)return P.pS()
return P.pT()},
p0:function(a){self.scheduleImmediate(H.co(new P.jO(H.n(a,{func:1,ret:-1})),0))},
p1:function(a){self.setImmediate(H.co(new P.jP(H.n(a,{func:1,ret:-1})),0))},
p2:function(a){P.lI(C.o,H.n(a,{func:1,ret:-1}))},
lI:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ad(a.a,1000)
return P.p8(u<0?0:u,b)},
mL:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bh]})
u=C.e.ad(a.a,1000)
return P.p9(u<0?0:u,b)},
p8:function(a,b){var u=new P.ff()
u.fi(a,b)
return u},
p9:function(a,b){var u=new P.ff()
u.fj(a,b)
return u},
p3:function(a,b){var u,t,s
b.a=1
try{a.eI(new P.jZ(b),new P.k_(b),null)}catch(s){u=H.al(s)
t=H.ct(s)
P.qh(new P.k0(b,u,t))}},
mW:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaR")
if(u>=4){t=b.c4()
b.a=a.a
b.c=a.c
P.de(b,t)}else{t=H.f(b.c,"$ibl")
b.a=2
b.c=a
a.dD(t)}},
de:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iaq")
g=g.b
r=s.a
q=s.b
g.toString
P.kL(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.de(h.a,b)}g=h.a
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
P.kL(i,i,g,r,q)
return}l=$.a2
if(l!=n)$.a2=n
else l=i
g=b.c
if(g===8)new P.k4(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k3(u,b,o).$0()}else if((g&2)!==0)new P.k2(h,u,b).$0()
if(l!=null)$.a2=l
g=u.b
if(!!J.U(g).$icI){if(g.a>=4){k=H.f(q.c,"$ibl")
q.c=null
b=q.bs(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mW(g,q)
return}}j=b.b
k=H.f(j.c,"$ibl")
j.c=null
b=j.bs(k)
g=u.a
r=u.b
if(!g){H.C(r,H.t(j,0))
j.a=4
j.c=r}else{H.f(r,"$iaq")
j.a=8
j.c=r}h.a=j
g=j}},
pM:function(a,b){if(H.fy(a,{func:1,args:[P.R,P.az]}))return H.n(a,{func:1,ret:null,args:[P.R,P.az]})
if(H.fy(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.lq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pL:function(){var u,t
for(;u=$.cm,u!=null;){$.dt=null
t=u.b
$.cm=t
if(t==null)$.ds=null
u.a.$0()}},
pP:function(){$.lT=!0
try{P.pL()}finally{$.dt=null
$.lT=!1
if($.cm!=null)$.m6().$1(P.ng())}},
nb:function(a){var u=new P.eC(H.n(a,{func:1,ret:-1}))
if($.cm==null){$.cm=$.ds=u
if(!$.lT)$.m6().$1(P.ng())}else $.ds=$.ds.b=u},
pO:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cm
if(u==null){P.nb(a)
$.dt=$.ds
return}t=new P.eC(a)
s=$.dt
if(s==null){t.b=u
$.cm=$.dt=t}else{t.b=s.b
$.dt=s.b=t
if(t.b==null)$.ds=t}},
qh:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a2
if(C.f===u){P.kN(t,t,C.f,a)
return}u.toString
P.kN(t,t,u,H.n(u.cd(a),s))},
mK:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a2
if(u===C.f){u.toString
return P.lI(a,b)}return P.lI(a,H.n(u.cd(b),t))},
oQ:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bh]}
H.n(b,s)
u=$.a2
if(u===C.f){u.toString
return P.mL(a,b)}t=u.dV(b,P.bh)
$.a2.toString
return P.mL(a,H.n(t,s))},
kL:function(a,b,c,d,e){var u={}
u.a=d
P.pO(new P.kM(u,e))},
n7:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a2
if(t===c)return d.$0()
$.a2=c
u=t
try{t=d.$0()
return t}finally{$.a2=u}},
n8:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a2
if(t===c)return d.$1(e)
$.a2=c
u=t
try{t=d.$1(e)
return t}finally{$.a2=u}},
pN:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a2
if(t===c)return d.$2(e,f)
$.a2=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a2=u}},
kN:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cd(d):c.iE(d,-1)
P.nb(d)},
jN:function jN(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
ff:function ff(){this.c=0},
kt:function kt(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
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
jY:function jY(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5:function k5(a){this.a=a},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a
this.b=null},
iN:function iN(){},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
d0:function d0(){},
iO:function iO(){},
bh:function bh(){},
aq:function aq(a,b){this.a=a
this.b=b},
kC:function kC(){},
kM:function kM(a,b){this.a=a
this.b=b},
kb:function kb(){},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function kc(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
on:function(a,b){return new H.a5([a,b])},
lD:function(a,b){return new H.a5([a,b])},
op:function(a){return H.q1(a,new H.a5([null,null]))},
dW:function(a){return new P.k9([a])},
lP:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
p7:function(a,b,c){var u=new P.eR(a,b,[c])
u.c=a.e
return u},
oh:function(a,b,c){var u,t
if(P.lU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.aB,a)
try{P.pq(a,u)}finally{if(0>=$.aB.length)return H.e($.aB,-1)
$.aB.pop()}t=P.mH(b,H.nr(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
ly:function(a,b,c){var u,t
if(P.lU(a))return b+"..."+c
u=new P.ak(b)
C.a.h($.aB,a)
try{t=u
t.a=P.mH(t.a,a,", ")}finally{if(0>=$.aB.length)return H.e($.aB,-1)
$.aB.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lU:function(a){var u,t
for(u=$.aB.length,t=0;t<u;++t)if(a===$.aB[t])return!0
return!1},
pq:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.j(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.C();o=n,n=m){m=u.gK(u);++s
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
oo:function(a,b,c){var u=P.on(b,c)
a.I(0,new P.hC(u,b,c))
return u},
mn:function(a,b){var u,t,s=P.dW(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.C(a[t],b))
return s},
lE:function(a){var u,t={}
if(P.lU(a))return"{...}"
u=new P.ak("")
try{C.a.h($.aB,a)
u.a+="{"
t.a=!0
J.m8(a,new P.hG(t,u))
u.a+="}"}finally{if(0>=$.aB.length)return H.e($.aB,-1)
$.aB.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k9:function k9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cj:function cj(a){this.a=a
this.c=this.b=null},
eR:function eR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(){},
y:function y(){},
hF:function hF(){},
hG:function hG(a,b){this.a=a
this.b=b},
ag:function ag(){},
ku:function ku(){},
hH:function hH(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
kg:function kg(){},
eS:function eS(){},
fl:function fl(){},
oU:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oV(!1,b,c,d)
return},
oV:function(a,b,c,d){var u,t,s=$.nN()
if(s==null)return
u=0===c
if(u&&!0)return P.lL(s,b)
t=b.length
d=P.bw(c,d,t)
if(u&&d===t)return P.lL(s,b)
return P.lL(s,b.subarray(c,d))},
lL:function(a,b){if(P.oX(b))return
return P.oY(a,b)},
oY:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
oX:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oW:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
na:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cr(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ap()
if((s&127)!==s)return t-b}return c-b},
mc:function(a,b,c,d,e,f){if(C.e.bm(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fM:function fM(){},
fN:function fN(){},
c3:function c3(){},
bH:function bH(){},
h9:function h9(){},
hp:function hp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ho:function ho(a){this.a=a},
js:function js(){},
ju:function ju(){},
kA:function kA(a){this.b=0
this.c=a},
jt:function jt(a){this.a=a},
kz:function kz(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fB:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.h]})
u=H.oE(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
of:function(a){if(a instanceof H.cC)return a.i(0)
return"Instance of '"+H.cb(a)+"'"},
oq:function(a,b,c){var u,t
H.C(b,c)
u=J.ok(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
mo:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bD(a);u.C();)C.a.h(s,H.C(u.gK(u),c))
if(b)return s
return H.l(J.lz(s),"$ib",t,"$ab")},
d1:function(a,b,c){var u,t=P.m
H.l(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaV",[t],"$aaV")
u=a.length
c=P.bw(b,c,u)
return H.mC(b>0||c<u?C.a.eY(a,b,c):a)}if(!!J.U(a).$icT)return H.oG(a,b,P.bw(b,c,a.length))
return P.oO(a,b,c)},
oO:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ii",[P.m],"$ai")
if(b<0)throw H.c(P.aj(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.aj(c,b,J.aH(a),q,q))
t=J.bD(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.aj(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.aj(c,b,s,q,q))
r.push(t.gK(t))}return H.mC(r)},
oI:function(a){return new H.hu(a,H.ol(a,!1,!0,!1))},
mH:function(a,b,c){var u=J.bD(b)
if(!u.C())return a
if(c.length===0){do a+=H.j(u.gK(u))
while(u.C())}else{a+=H.j(u.gK(u))
for(;u.C();)a=a+c+H.j(u.gK(u))}return a},
mO:function(){var u=H.ow()
if(u!=null)return P.oT(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fm:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nT().b
if(typeof b!=="string")H.B(H.at(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.ap(c,"c3",0))
t=c.giT().ck(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cc(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ob:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
oc:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dJ:function(a){if(a>=10)return""+a
return"0"+a},
mg:function(a,b){return new P.b9(1e6*b+1000*a)},
dN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.of(a)},
dB:function(a){return new P.aT(!1,null,null,a)},
lq:function(a,b,c){return new P.aT(!0,a,b,c)},
ea:function(a,b){return new P.cd(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.cd(b,c,!0,a,d,"Invalid value")},
bw:function(a,b,c){if(0>a||a>c)throw H.c(P.aj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aj(b,a,c,"end",null))
return b}return c},
lG:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.aj(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.a3(e==null?J.aH(b):e)
return new P.hr(u,!0,a,c,"Index out of range")},
J:function(a){return new P.jl(a)},
jj:function(a){return new P.ji(a)},
mG:function(a){return new P.cf(a)},
bo:function(a){return new P.fT(a)},
D:function(a){return new P.eK(a)},
a8:function(a,b,c){return new P.hj(a,b,c)},
or:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
m2:function(a){H.qf(a)},
oT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mN(e<e?C.b.B(a,0,e):a,5,f).geO()
else if(u===32)return P.mN(C.b.B(a,5,e),0,f).geO()}t=new Array(8)
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
if(P.n9(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jH()
if(r>=0)if(P.n9(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.E(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.aj(a,"..",o)))j=n>o+2&&C.b.aj(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aj(a,"file",0)){if(q<=0){if(!C.b.aj(a,"/",o)){i="file:///"
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
a=C.b.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aj(a,"http",0)){if(t&&p+3===o&&C.b.aj(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aj(a,"https",0)){if(t&&p+4===o&&C.b.aj(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kj(a,r,q,p,o,n,m,k)}return P.pa(a,0,e,r,q,p,o,n,m,k)},
mQ:function(a){var u=P.h
return C.a.iY(H.d(a.split("&"),[u]),P.lD(u,u),new P.jq(C.h),[P.z,P.h,P.h])},
oS:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jn(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a0(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fB(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.az()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fB(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.az()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jo(a)
t=new P.jp(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a0(a,r)
if(n===58){if(r===b){++r
if(C.b.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaD(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oS(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aY(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
pa:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ph(a,b,d)
else{if(d===b)P.dp(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pi(a,u,e-1):""
s=P.pe(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.pg(P.fB(C.b.B(a,r,g),new P.kv(a,f),n),j):n}else{q=n
s=q
t=""}p=P.pf(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.lQ(a,h+1,i,n):n
return new P.ck(j,t,s,q,p,o,i<c?P.pd(a,i+1,c):n)},
n_:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dp:function(a,b,c){throw H.c(P.a8(c,a,b))},
pg:function(a,b){if(a!=null&&a===P.n_(b))return
return a},
pe:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a0(a,u)!==93)P.dp(a,b,"Missing end `]` to match `[` in host")
P.mP(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.E(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.mP(a,b,c)
return"["+a+"]"}return P.pk(a,b,c)},
pk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.n5(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ak("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ak("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dp(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ak("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.n0(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ph:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.n2(C.b.F(a,b)))P.dp(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dp(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.pb(t?a.toLowerCase():a)},
pb:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pi:function(a,b,c){return P.dq(a,b,c,C.W,!1)},
pf:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dq(a,b,c,C.A,!0):C.j.jV(d,new P.kw(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a9(u,"/"))u="/"+u
return P.pj(u,e,f)},
pj:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a9(a,"/"))return P.pl(a,!u||c)
return P.pm(a)},
lQ:function(a,b,c,d){var u,t={}
H.l(d,"$iz",[P.h,null],"$az")
if(a!=null){if(d!=null)throw H.c(P.dB("Both query and queryParameters specified"))
return P.dq(a,b,c,C.l,!0)}if(d==null)return
u=new P.ak("")
t.a=""
d.I(0,new P.kx(new P.ky(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
pd:function(a,b,c){return P.dq(a,b,c,C.l,!0)},
n5:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a0(a,b+1)
t=C.b.a0(a,p)
s=H.kW(u)
r=H.kW(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aY(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cc(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
n0:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.m])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.i9(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.d1(t,0,null)},
dq:function(a,b,c,d,e){var u=P.n4(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
n4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.S()
if(typeof c!=="number")return H.E(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.n5(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dp(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.n0(q)}}if(r==null)r=new P.ak("")
r.a+=C.b.B(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.E(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.S()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
n3:function(a){if(C.b.a9(a,"."))return!0
return C.b.em(a,"/.")!==-1},
pm:function(a){var u,t,s,r,q,p,o
if(!P.n3(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.W(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
pl:function(a,b){var u,t,s,r,q,p
if(!P.n3(a))return!b?P.n1(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaD(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaD(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.n1(u[0]))}return C.a.m(u,"/")},
n1:function(a){var u,t,s,r=a.length
if(r>=2&&P.n2(J.nX(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.af(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
pc:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dB("Invalid URL encoding"))}}return u},
lR:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.u(C.b.B(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dB("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dB("Truncated URI"))
C.a.h(r,P.pc(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jt(!1).ck(r)},
n2:function(a){var u=a|32
return 97<=u&&u<=122},
mN:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a8(m,a,t))}}if(s<0&&t>b)throw H.c(P.a8(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaD(l)
if(r!==44||t!==p+7||!C.b.aj(a,"base64",p+1))throw H.c(P.a8("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.j8(0,a,o,u)
else{n=P.n4(a,o,u,C.l,!0)
if(n!=null)a=C.b.b1(a,o,u,n)}return new P.jm(a,l,c)},
po:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.or(22,new P.kG(),P.T),n=new P.kF(o),m=new P.kH(),l=new P.kI(),k=H.f(n.$2(0,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iT")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iT")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iT")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iT")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iT")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iT"),"]",5)
k=H.f(n.$2(9,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iT")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iT")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iT"),"az",21)
k=H.f(n.$2(21,245),"$iT")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
n9:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nU()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
S:function S(){},
aC:function aC(a,b){this.a=a
this.b=b},
p:function p(){},
b9:function b9(a){this.a=a},
h5:function h5(){},
h6:function h6(){},
bJ:function bJ(){},
fF:function fF(){},
e6:function e6(){},
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
hr:function hr(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jl:function jl(a){this.a=a},
ji:function ji(a){this.a=a},
cf:function cf(a){this.a=a},
fT:function fT(a){this.a=a},
ie:function ie(){},
ej:function ej(){},
h_:function h_(a){this.a=a},
eK:function eK(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(){},
m:function m(){},
i:function i(){},
ba:function ba(){},
b:function b(){},
z:function z(){},
P:function P(){},
ad:function ad(){},
R:function R(){},
az:function az(){},
h:function h(){},
ak:function ak(a){this.a=a},
jq:function jq(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kv:function kv(a,b){this.a=a
this.b=b},
kw:function kw(){},
ky:function ky(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(){},
kF:function kF(a){this.a=a},
kH:function kH(){},
kI:function kI(){},
kj:function kj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jT:function jT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pX:function(a){var u,t=J.U(a)
if(!!t.$ibq){u=t.gdZ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fk(a.data,a.height,a.width)},
pW:function(a){if(a instanceof P.fk)return{data:a.a,height:a.b,width:a.c}
return a},
by:function(a){var u,t,s,r,q
if(a==null)return
u=P.lD(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
pV:function(a){var u={}
a.I(0,new P.kO(u))
return u},
kl:function kl(){},
kn:function kn(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a){this.a=a},
km:function km(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(){},
k8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ka:function ka(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
hx:function hx(){},
bf:function bf(){},
ic:function ic(){},
ik:function ik(){},
cY:function cY(){},
iR:function iR(){},
q:function q(){},
bi:function bi(){},
j6:function j6(){},
eP:function eP(){},
eQ:function eQ(){},
f_:function f_(){},
f0:function f0(){},
fb:function fb(){},
fc:function fc(){},
fi:function fi(){},
fj:function fj(){},
T:function T(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
c_:function c_(){},
id:function id(){},
eD:function eD(){},
dD:function dD(){},
dP:function dP(){},
e9:function e9(){},
eb:function eb(){},
ce:function ce(){},
ed:function ed(){},
el:function el(){},
es:function es(){},
iJ:function iJ(){},
f7:function f7(){},
f8:function f8(){}},W={
mb:function(){var u=document.createElement("a")
return u},
ls:function(){var u=document.createElement("canvas")
return u},
od:function(a,b,c){var u=document.body,t=(u&&C.t).am(u,a,b,c)
t.toString
u=W.G
u=new H.db(new W.as(t),H.n(new W.h8(),{func:1,ret:P.S,args:[u]}),[u])
return H.f(u.gaQ(u),"$iV")},
oe:function(a){H.f(a,"$ik")
return"wheel"},
cF:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cs(a)
t=u.geF(a)
if(typeof t==="string")r=u.geF(a)}catch(s){H.al(s)}return r},
og:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icL")
try{s.type=a}catch(u){H.al(u)}return s},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mY:function(a,b,c,d){var u=W.k7(W.k7(W.k7(W.k7(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.nd(new W.jX(c),W.o)
if(u!=null&&!0)J.nZ(a,b,u,!1)
return new W.jW(a,b,u,!1,[e])},
mX:function(a){var u=W.mb(),t=window.location
u=new W.bV(new W.kf(u,t))
u.f9(a)
return u},
p4:function(a,b,c,d){H.f(a,"$iV")
H.K(b)
H.K(c)
H.f(d,"$ibV")
return!0},
p5:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.K(b)
H.K(c)
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
mZ:function(){var u=P.h,t=P.mn(C.p,u),s=H.t(C.p,0),r=H.n(new W.kr(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kq(t,P.dW(u),P.dW(u),P.dW(u),null)
t.fh(null,new H.hK(C.p,r,[s,u]),q,null)
return t},
nd:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a2
if(u===C.f)return a
return u.dV(a,b)},
x:function x(){},
fD:function fD(){},
dA:function dA(){},
fE:function fE(){},
cx:function cx(){},
c0:function c0(){},
bE:function bE(){},
c2:function c2(){},
cB:function cB(){},
bF:function bF(){},
cD:function cD(){},
fW:function fW(){},
Y:function Y(){},
cE:function cE(){},
fX:function fX(){},
b7:function b7(){},
b8:function b8(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
aJ:function aJ(){},
h2:function h2(){},
dK:function dK(){},
dL:function dL(){},
h3:function h3(){},
h4:function h4(){},
jR:function jR(a,b){this.a=a
this.b=b},
V:function V(){},
h8:function h8(){},
o:function o(){},
k:function k(){},
aK:function aK(){},
cH:function cH(){},
he:function he(){},
hi:function hi(){},
aU:function aU(){},
hn:function hn(){},
c6:function c6(){},
bq:function bq(){},
cK:function cK(){},
cL:function cL(){},
bb:function bb(){},
dX:function dX(){},
hX:function hX(){},
cP:function cP(){},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
i_:function i_(){},
i0:function i0(a){this.a=a},
aW:function aW(){},
i1:function i1(){},
ah:function ah(){},
as:function as(a){this.a=a},
G:function G(){},
cU:function cU(){},
aX:function aX(){},
ii:function ii(){},
it:function it(){},
iu:function iu(a){this.a=a},
iw:function iw(){},
aY:function aY(){},
iH:function iH(){},
aZ:function aZ(){},
iI:function iI(){},
b_:function b_(){},
iL:function iL(){},
iM:function iM(a){this.a=a},
aN:function aN(){},
bg:function bg(){},
ek:function ek(){},
iS:function iS(){},
iT:function iT(){},
d3:function d3(){},
b0:function b0(){},
aO:function aO(){},
iV:function iV(){},
iW:function iW(){},
j0:function j0(){},
b1:function b1(){},
b2:function b2(){},
j4:function j4(){},
j5:function j5(){},
bS:function bS(){},
jr:function jr(){},
jJ:function jJ(){},
bk:function bk(){},
dc:function dc(){},
dd:function dd(){},
jS:function jS(){},
eF:function eF(){},
k6:function k6(){},
eX:function eX(){},
kk:function kk(){},
ko:function ko(){},
jQ:function jQ(){},
jU:function jU(a){this.a=a},
jV:function jV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lO:function lO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jW:function jW(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jX:function jX(a){this.a=a},
bV:function bV(a){this.a=a},
H:function H(){},
e5:function e5(a){this.a=a},
i9:function i9(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(){},
kh:function kh(){},
ki:function ki(){},
kq:function kq(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kr:function kr(){},
kp:function kp(){},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aF:function aF(){},
kf:function kf(a,b){this.a=a
this.b=b},
fn:function fn(a){this.a=a},
kB:function kB(a){this.a=a},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eY:function eY(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
dk:function dk(){},
dl:function dl(){},
f5:function f5(){},
f6:function f6(){},
fa:function fa(){},
fd:function fd(){},
fe:function fe(){},
dm:function dm(){},
dn:function dn(){},
fg:function fg(){},
fh:function fh(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){}},O={
lt:function(a){var u=new O.a4([a])
u.bp(a)
return u},
a4:function a4(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cO:function cO(){this.b=this.a=null},
mp:function(){var u,t,s=new O.e0()
s.sfs(O.lt(V.aw))
s.e.b3(s.gh_(),s.gh1())
u=new O.bd(s,"emission")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.f=u
u=new O.bd(s,"ambient")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.r=u
u=new O.bd(s,"diffuse")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.x=u
u=new O.bd(s,"invDiffuse")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.y=u
u=new O.hQ(s,"specular")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=100
s.z=u
u=new O.hM(s,"bump")
u.c=new A.am(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bd(s,"reflect")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
s.cx=u
u=new O.hP(s,"refract")
u.c=new A.am(!1,!1,!1)
u.f=new V.a6(0,0,0)
u.ch=1
s.cy=u
u=new O.hL(s,"alpha")
u.c=new A.am(!1,!1,!1)
u.f=1
s.db=u
u=new D.dV()
u.bp(D.af)
u.sfb(H.d([],[D.bI]))
u.shN(H.d([],[D.e8]))
u.sfe(H.d([],[D.ei]))
u.y=u.x=null
u.cZ(u.gfY(),u.ghx(),u.ghB())
s.dx=u
t=new O.hO()
t.b=new V.a9(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.O():t
u.h(0,s.ghY())
u=s.dx
t=u.y
u=t==null?u.y=D.O():t
u.h(0,s.gaS())
s.fr=null
return s},
e0:function e0(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(){},
hL:function hL(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cN:function cN(){},
hM:function hM(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bd:function bd(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hO:function hO(){var _=this
_.e=_.d=_.c=_.b=null},
hP:function hP(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hQ:function hQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){}},E={
lx:function(){var u=new E.ar()
u.a=""
u.b=!0
u.sf8(0,O.lt(E.ar))
u.y.b3(u.gj9(),u.gjc())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa8(0,null)
return u},
oJ:function(a,b){var u=new E.ip(a)
u.f5(a,b)
return u},
oP:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ic2)return E.mJ(a,!0,!0,!0,!1)
u=W.ls()
t=u.style
t.width="100%"
t.height="100%"
s.gcj(a).h(0,u)
return E.mJ(u,!0,!0,!0,!1)},
mJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eo(),j=H.f(C.i.cX(a,"webgl2",P.op(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ice")
if(j==null)H.B(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oJ(j,a)
u=new T.iY(j)
H.a3(j.getParameter(3379))
u.c=H.a3(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ev(a)
t=new X.hw()
t.c=new X.aE(!1,!1,!1)
t.shQ(P.dW(P.m))
u.b=t
t=new X.i2(u)
t.f=0
t.r=V.bv()
t.x=V.bv()
t.ch=t.Q=1
u.c=t
t=new X.hE(u)
t.r=0
t.x=V.bv()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j3(u)
t.f=V.bv()
t.r=V.bv()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfG(H.d([],[[P.d0,P.R]]))
t=u.z
s=document
r=W.ah
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.gh9(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.ghf(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gh3(),o),!1,p))
t=u.z
n=W.bb
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.ghj(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.ghh(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.ghn(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.ghr(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.ghp(),q),!1,r))
n=u.z
m=W.bk;(n&&C.a).h(n,W.ac(a,H.K(W.oe(a)),H.n(u.ght(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.n(u.ghb(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.n(u.ghd(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.n(u.ghv(),o),!1,p))
p=u.z
o=W.b2
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.n(u.ghL(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.n(u.ghH(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.n(u.ghJ(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aC(Date.now(),!1)
k.cy=0
k.dF()
return k},
fO:function fO(){},
ar:function ar(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j_:function j_(a){this.a=a}},Z={
lN:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.eA(b,u)},
aQ:function(a){return new Z.bx(a)},
eA:function eA(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eB:function eB(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a){this.a=a}},D={
O:function(){var u=new D.c4()
u.sal(null)
u.saW(null)
u.c=null
u.d=0
return u},
fR:function fR(){},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=null},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
A:function A(){this.b=null},
bM:function bM(a){this.b=null
this.$ti=a},
bN:function bN(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bI:function bI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dV:function dV(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
ei:function ei(){}},X={dF:function dF(a,b){this.a=a
this.b=b},dU:function dU(a,b){this.a=a
this.b=b},hw:function hw(){var _=this
_.d=_.c=_.b=_.a=null},dY:function dY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hE:function hE(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},bu:function bu(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i2:function i2(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cQ:function cQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ij:function ij(){},eq:function eq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j3:function j3(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mk:function(a){var u=new X.hk(),t=new V.a9(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lH()
u.r=t
return u},
lF:function(a){var u,t,s=new X.e7()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gfk())
t=new D.I("mover",u,s.b,[U.ai])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.M().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.p])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.M().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.p])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.M().a)){s.e=2000
t=new D.I("far",t,2000,[P.p])
t.b=!0
s.a2(t)}return s},
fL:function fL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c1:function c1(){},
hk:function hk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){}},V={
ln:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bm(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.c.eJ(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
cq:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.p],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ao(u[p],s))}return u},
dv:function(a){return C.c.jy(Math.pow(2,C.S.cw(Math.log(H.pU(a))/Math.log(2))))},
c8:function(){var u=$.mv
return u==null?$.mv=V.be(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
be:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mu:function(a,b,c){return V.be(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mr:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.be(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ms:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.be(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
mt:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.be(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
mq:function(a,b,c){var u=c.u(0,Math.sqrt(c.D(c))),t=b.aI(u),s=t.u(0,Math.sqrt(t.D(t))),r=u.aI(s),q=new V.L(a.a,a.b,a.c),p=s.T(0).D(q),o=r.T(0).D(q),n=u.T(0).D(q)
return V.be(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bv:function(){var u=$.mz
return u==null?$.mz=new V.a7(0,0):u},
mA:function(){var u=$.cV
return u==null?$.cV=new V.Z(0,0,0):u},
lH:function(){var u=$.mE
return u==null?$.mE=V.mD(0,0,1,1):u},
mD:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cX(a,b,c,d)},
da:function(){var u=$.mU
return u==null?$.mU=new V.L(0,0,0):u},
oZ:function(){var u=$.jv
return u==null?$.jv=new V.L(-1,0,0):u},
lM:function(){var u=$.jw
return u==null?$.jw=new V.L(0,1,0):u},
mV:function(){var u=$.jx
return u==null?$.jx=new V.L(0,0,1):u},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
e1:function e1(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.io()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.ix()
u.f6(a)
return u},
j2:function(){var u=new V.j1(),t=P.h
u.sic(new H.a5([t,V.d_]))
u.sih(new H.a5([t,V.d5]))
u.c=null
return u},
bn:function bn(){},
aD:function aD(){},
dZ:function dZ(){},
ax:function ax(){this.a=null},
io:function io(){this.b=this.a=null},
ix:function ix(){this.a=null},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a){this.b=a
this.c=null},
j1:function j1(){this.c=this.b=this.a=null},
d6:function d6(a){this.b=a
this.a=this.c=null},
qi:function(a){P.oQ(C.P,new V.lh(a))},
oL:function(a){var u=new V.iC()
u.f7(a,!0)
return u},
bG:function bG(){},
lh:function lh(a){this.a=a},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ih:function ih(a){var _=this
_.a=a
_.d=_.c=_.b=null},
il:function il(a){this.a=a
this.c=null},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(){this.b=this.a=null},
iE:function iE(a){this.a=a},
iD:function iD(a){this.a=a},
iF:function iF(a){this.a=a},
ns:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2=34067,b3="modifiers",b4=V.oL("Test 027"),b5=W.ls()
b5.className="pageLargeCanvas"
b5.id=b0
b4.a.appendChild(b5)
u=[P.h]
b4.dR(H.d(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],u))
b4.is(H.d(["shapes"],u))
b4.dR(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.B(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.oP(t,!0,!0,!0,!1)
r=U.ml()
q=new U.ec()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.seQ(0)
q.sey(0,0)
q.seD(0)
p=q.d
if(!(Math.abs(p-0.1)<$.M().a)){q.d=0.1
p=new D.I("deltaYaw",p,0.1,[P.p])
p.b=!0
q.H(p)}p=q.e
if(!(Math.abs(p-0.21)<$.M().a)){q.e=0.21
p=new D.I("deltaPitch",p,0.21,[P.p])
p.b=!0
q.H(p)}p=q.f
if(!(Math.abs(p-0.32)<$.M().a)){q.f=0.32
p=new D.I("deltaRoll",p,0.32,[P.p])
p.b=!0
q.H(p)}r.h(0,q)
r.h(0,U.lv(V.mu(0,0,5)))
o=X.lF(r)
n=new X.fL()
n.d=n.c=n.b=n.a=512
n.e=!0
n.f=!1
n.x=n.r=1
n.ch=T.mI(b1)
n.cx=new V.a9(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.lH()
n.say(0,512)
n.sat(0,512)
m=new V.a9(0,0,0,1)
if(!n.cx.v(0,m)){l=n.cx
n.cx=m
q=new D.I("color",l,m,[V.a9])
q.b=!0
n.a2(q)}if(n.cy){n.cy=!1
q=new D.I("clearColor",!0,!1,[P.S])
q.b=!0
n.a2(q)}q=n.db
if(!(Math.abs(q-2000)<$.M().a)){n.db=2000
q=new D.I("depth",q,2000,[P.p])
q.b=!0
n.a2(q)}q=n.r
if(!(Math.abs(q-1)<$.M().a)){n.r=1
q=new D.I("autoResizeScalarX",q,1,[P.p])
q.b=!0
n.a2(q)}q=n.x
if(!(Math.abs(q-1)<$.M().a)){n.x=1
q=new D.I("autoResizeScalarY",q,1,[P.p])
q.b=!0
n.a2(q)}k=V.lH()
if(!J.W(n.dy,k)){l=n.dy
n.dy=k
q=new D.I("region",l,k,[V.cX])
q.b=!0
n.a2(q)}q=s.f
p=q.a
j=p.createTexture()
p.bindTexture(b2,j)
p.texParameteri(b2,10242,10497)
p.texParameteri(b2,10243,10497)
p.texParameteri(b2,10241,9729)
p.texParameteri(b2,10240,9729)
p.bindTexture(b2,b1)
i=new T.en()
i.a=0
i.b=j
i.c=!1
i.d=0
q.aU(i,j,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aU(i,j,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aU(i,j,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aU(i,j,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aU(i,j,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aU(i,j,"../resources/maskonaive/negz.jpg",34074,!1,!1)
h=new M.dI()
h.a=!0
q=E.lx()
g=F.iy()
p=g.a
f=new V.L(-1,-1,1)
f=f.u(0,Math.sqrt(f.D(f)))
e=p.bu(new V.ay(1,2,4,6),new V.a9(1,0,0,1),new V.Z(-1,-1,0),new V.a7(0,1),f,b1)
p=g.a
f=new V.L(1,-1,1)
f=f.u(0,Math.sqrt(f.D(f)))
d=p.bu(new V.ay(0,3,4,6),new V.a9(0,0,1,1),new V.Z(1,-1,0),new V.a7(1,1),f,b1)
p=g.a
f=new V.L(1,1,1)
f=f.u(0,Math.sqrt(f.D(f)))
c=p.bu(new V.ay(0,2,5,6),new V.a9(0,1,0,1),new V.Z(1,1,0),new V.a7(1,0),f,b1)
p=g.a
f=V.bv()
b=new V.L(-1,1,1)
b=b.u(0,Math.sqrt(b.D(b)))
a=p.bu(new V.ay(0,2,4,7),new V.a9(1,1,0,1),new V.Z(-1,1,0),f,b,b1)
g.d.dP(H.d([e,d,c,a],[F.ae]))
g.as()
q.sa8(0,g)
h.e=q
h.sb_(b1)
h.sbk(0,b1)
h.sb2(b1)
q=new O.ef()
q.b=1.0471975511965976
q.d=new V.a6(1,1,1)
l=q.c
q.c=i
i.gq().h(0,q.gaS())
p=new D.I("boxTexture",l,q.c,[T.en])
p.b=!0
q.X(p)
h.sb2(q)
h.sbk(0,n)
h.sb_(o)
a0=E.lx()
a0.sa8(0,F.nA())
a1=O.mp()
q=a1.dx
a2=V.lM()
p=U.lv(V.mq(V.mA(),a2,new V.L(0,-1,-1)))
m=new V.a6(1,1,1)
f=new D.bI()
f.c=new V.a6(1,1,1)
f.a=V.mV()
f.d=V.lM()
f.e=V.oZ()
l=f.b
f.b=p
p.gq().h(0,f.gfc())
p=new D.I("mover",l,f.b,[U.ai])
p.b=!0
f.aE(p)
if(!f.c.v(0,m)){l=f.c
f.c=m
p=new D.I("color",l,m,[V.a6])
p.b=!0
f.aE(p)}q.h(0,f)
q=a1.r
q.sbc(0,new V.a6(0,0,1))
q=a1.x
q.sbc(0,new V.a6(0,1,0))
q=a1.z
q.sbc(0,new V.a6(1,0,0))
q=a1.z
q.c7(new A.am(!0,q.c.b,!1))
q.dH(10)
a3=M.mj()
a3.sb_(o)
a3.sb2(a1)
a3.sbk(0,n)
a3.e.h(0,a0)
a4=U.ml()
q=s.r
p=new U.ex()
f=U.lu()
f.scW(0,!0)
f.scG(6.283185307179586)
f.scI(0)
f.sa1(0,0)
f.scH(100)
f.sW(0)
f.scm(0.5)
p.b=f
b=p.gaV()
f.gq().h(0,b)
f=U.lu()
f.scW(0,!0)
f.scG(6.283185307179586)
f.scI(0)
f.sa1(0,0)
f.scH(100)
f.sW(0)
f.scm(0.5)
p.c=f
f.gq().h(0,b)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
a5=new X.aE(!1,!1,!1)
l=p.d
p.d=a5
f=[X.aE]
b=new D.I(b3,l,a5,f)
b.b=!0
p.H(b)
b=p.f
if(b!==!1){p.f=!1
b=new D.I("invertX",b,!1,[P.S])
b.b=!0
p.H(b)}b=p.r
if(b!==!1){p.r=!1
b=new D.I("invertY",b,!1,[P.S])
b.b=!0
p.H(b)}p.bb(q)
a4.h(0,p)
q=s.r
p=new U.ew()
b=U.lu()
b.scW(0,!0)
b.scG(6.283185307179586)
b.scI(0)
b.sa1(0,0)
b.scH(100)
b.sW(0)
b.scm(0.2)
p.b=b
b.gq().h(0,p.gaV())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
a5=new X.aE(!0,!1,!1)
l=p.c
p.c=a5
b=new D.I(b3,l,a5,f)
b.b=!0
p.H(b)
p.bb(q)
a4.h(0,p)
q=s.r
p=new U.ey()
p.c=0.01
p.e=p.d=0
a5=new X.aE(!1,!1,!1)
p.b=a5
f=new D.I(b3,b1,a5,f)
f.b=!0
p.H(f)
p.bb(q)
a4.h(0,p)
a4.h(0,U.lv(V.mu(0,0,5)))
a6=X.lF(a4)
a7=E.lx()
a7.sa8(0,F.kP(1,b1,b1,1))
a8=O.mp()
q=a8.f
p=n.ch
f=q.c
if(!f.b)q.c7(new A.am(f.a,!0,!1))
f=q.d
if(f!==p){if(f!=null)f.gq().M(0,q.gaS())
l=q.d
q.d=p
p.gq().h(0,q.gaS())
p=new D.I(q.b+".texture2D",l,q.d,[T.em])
p.b=!0
q.a.X(p)}a9=M.mj()
a9.sb_(a6)
a9.sb2(a8)
a9.e.h(0,a7)
q=M.aG
p=H.d([h,a3,a9],[q])
f=new M.dG()
f.bp(q)
f.e=!0
f.f=!1
f.r=null
f.b3(f.ghD(),f.ghF())
f.ae(0,p)
q=s.d
if(q!==f){if(q!=null)q.gq().M(0,s.gd4())
s.d=f
f.gq().h(0,s.gd4())
s.d5()}q=new V.il("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.B("Failed to find shapes for RadioGroup")
q.dN(0,"Cube",new V.l5(a7),!0)
q.aB(0,"Cuboid",new V.l6(a7))
q.aB(0,"Cylinder",new V.l7(a7))
q.aB(0,"Cone",new V.l8(a7))
q.aB(0,"Cylindrical",new V.l9(a7))
q.aB(0,"Sphere",new V.la(a7))
q.aB(0,"Spherical",new V.lb(a7))
q.aB(0,"Toroid",new V.lc(a7))
q.aB(0,"Knot",new V.ld(a7))
u=s.z
if(u==null)u=s.z=D.O()
q={func:1,ret:-1,args:[D.A]}
p=H.n(new V.le(b4,a8),q)
if(u.b==null)u.saW(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.qi(s)},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l4:function l4(){},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
l3:function l3(){},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
l2:function l2(){},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a,b){this.a=a
this.b=b}},U={
lu:function(){var u=new U.fS()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lv:function(a){var u=new U.dH()
u.a=a
return u},
ml:function(){var u=new U.cJ()
u.bp(U.ai)
u.b3(u.gff(),u.ghz())
u.e=null
u.f=V.c8()
u.r=0
return u},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){this.b=this.a=null},
cJ:function cJ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
ec:function ec(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
mj:function(){var u,t=new M.dM()
t.a=!0
t.sfv(0,O.lt(E.ar))
t.e.b3(t.gh5(),t.gh7())
t.y=t.x=t.r=t.f=null
u=X.mk(null)
t.sb_(null)
t.sbk(0,u)
t.sb2(null)
return t},
dG:function dG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dI:function dI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aG:function aG(){}},A={
os:function(a,b){var u=a.aJ,t=new A.e_(b,u)
t.d3(b,u)
t.f4(a,b)
return t},
ot:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aI],"$ab")
H.l(b0,"$ib",[A.aL],"$ab")
H.l(b1,"$ib",[A.aM],"$ab")
u="MaterialLight_"+a0.gax(a0)+a1.gax(a1)+a2.gax(a2)+a3.gax(a3)+a4.gax(a4)+a5.gax(a5)+a6.gax(a6)+a7.gax(a7)+a8.gax(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.v)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.v)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.v)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.b4()
if(k){t=$.bB()
f=new Z.bx(f.a|t.a)}if(j){t=$.bA()
f=new Z.bx(f.a|t.a)}if(i){t=$.bC()
f=new Z.bx(f.a|t.a)}if(h){t=$.bz()
f=new Z.bx(f.a|t.a)}return new A.hN(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kJ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kK:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kJ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.lk(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
pu:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kJ(b,t,"emission")
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
pr:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kK(b,t,"ambient")
b.a+="\n"},
ps:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kK(b,t,"diffuse")
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
pv:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kK(b,t,"invDiffuse")
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
pB:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kK(b,t,"specular")
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
px:function(a,b){var u,t,s
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
pz:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kJ(b,t,"reflect")
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
pA:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kJ(b,t,"refract")
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
pt:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.lk(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ap()
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
py:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.lk(t)
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
if(typeof u!=="number")return u.ap()
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
pC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.lk(t)
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
if(typeof u!=="number")return u.ap()
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
pw:function(a,b){var u,t
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
pD:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ak("")
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
A.pu(a,j)
A.pr(a,j)
A.ps(a,j)
A.pv(a,j)
A.pB(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pz(a,j)
A.pA(a,j)}A.px(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pt(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.py(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.v)(q),++o)A.pC(a,q[o],j)
A.pw(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.v)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.af(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
pE:function(a,b){var u,t,s
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
pG:function(a,b){var u
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
pF:function(a,b){var u
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
pI:function(a,b){var u,t
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
pJ:function(a,b){var u,t
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
pH:function(a,b){var u
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
pK:function(a,b){var u
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
lk:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.af(a,1)},
lJ:function(a,b,c,d,e){var u=new A.jb(a,c,e)
u.f=d
u.siq(P.oq(d,0,P.m))
return u},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a,b){var _=this
_.jM=_.e3=_.e2=_.e1=_.aJ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jU=_.jT=_.jS=_.cv=_.cu=_.ct=_.cs=_.cr=_.cq=_.jR=_.ef=_.ee=_.jQ=_.ed=_.ec=_.eb=_.jP=_.ea=_.e9=_.e8=_.jO=_.e7=_.e6=_.jN=_.e5=_.e4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aI:function aI(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aJ=b3
_.e1=b4},
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
cZ:function cZ(){},
eg:function eg(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
er:function er(){},
jg:function jg(a){this.a=a},
aP:function aP(a,b,c){this.a=a
this.c=b
this.d=c},
jd:function jd(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
jf:function jf(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
d8:function d8(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
ao:function ao(a,b,c){this.a=a
this.c=b
this.d=c},
bT:function bT(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kP:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ae,P.p,P.p]})
u=F.iy()
F.dr(u,b,c,d,a,1,0,0,1)
F.dr(u,b,c,d,a,0,1,0,3)
F.dr(u,b,c,d,a,0,0,1,2)
F.dr(u,b,c,d,a,-1,0,0,0)
F.dr(u,b,c,d,a,0,-1,0,0)
F.dr(u,b,c,d,a,0,0,-1,3)
u.as()
return u},
kE:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dr:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.ae,P.p,P.p]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.L(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.L(p+a3,o+a1,n+a2)
l=new V.L(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.L(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kE(u)
g=F.kE(e.b)
f=F.m4(d,a0,new F.kD(e,F.kE(e.c),F.kE(e.d),g,h,c),b)
if(f!=null)a.bh(f)},
nk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.p,args:[P.p]})
if(e<3)return
u=F.iy()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ae])
q=u.a
p=new V.L(0,0,t)
p=p.u(0,Math.sqrt(p.D(p)))
C.a.h(r,q.iv(new V.ay(a,-1,-1,-1),new V.a9(1,1,1,1),new V.Z(0,0,c),new V.L(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.L(m,l,t).u(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ez(new V.ay(a,-1,-1,-1),null,new V.a9(i,g,h,1),new V.Z(m*k,l*k,c),new V.L(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dP(r)
return u},
nh:function(a,b,c){return F.ni(!0,a,1,new F.kQ(1,c),b)},
ni:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.m4(c,e,new F.kS(d),null)
if(u==null)return
u.as()
u.cc()
if(b)u.bh(F.nk(3,!1,1,new F.kT(d),e))
u.bh(F.nk(1,!0,-1,new F.kU(d),e))
return u},
ny:function(a,b,c){var u,t={}
t.a=b
if(H.n(b,{func:1,ret:P.p,args:[P.p,P.p]})==null)t.a=new F.li()
u=F.kP(a,null,new F.lj(t,1),c)
u.cc()
return u},
nA:function(){return F.nj(15,30,0.5,1,new F.ll())},
qb:function(){return F.nj(12,120,0.3,1,new F.l0(3,2))},
nj:function(a,b,c,d,e){var u=F.m4(a,b,new F.kR(H.n(e,{func:1,ret:V.Z,args:[P.p]}),d,b,c),null)
if(u==null)return
u.as()
u.cc()
return u},
m4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ae,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.iy()
t=H.d([],[F.ae])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ez(g,g,new V.a9(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cl(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ez(g,g,new V.a9(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cl(d))}}u.d.iu(a+1,b+1,t)
return u},
cG:function(a,b,c){var u=new F.aa(),t=a.a
if(t==null)H.B(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.D("May not create a face with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
u.i4(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
om:function(a,b){var u=new F.bt(),t=a.a
if(t==null)H.B(P.D("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.B(P.D("May not create a line with vertices attached to different shapes."))
u.ca(a)
u.cb(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
iy:function(){var u=new F.ee(),t=new F.jy(u)
t.b=!1
t.sir(H.d([],[F.ae]))
u.a=t
t=new F.iB(u)
t.sc2(H.d([],[F.bQ]))
u.b=t
t=new F.iA(u)
t.sfN(H.d([],[F.bt]))
u.c=t
t=new F.iz(u)
t.sfH(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
ez:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ae(),r=new F.jG()
r.sc2(H.d([],[F.bQ]))
s.b=r
r=new F.jC()
u=[F.bt]
r.sfO(H.d([],u))
r.sfP(H.d([],u))
s.c=r
r=new F.jz()
u=[F.aa]
r.sfI(H.d([],u))
r.sfJ(H.d([],u))
r.sfK(H.d([],u))
s.d=r
h=$.nO()
s.e=0
r=$.b4()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bB().a)!==0?e:t
s.x=(u&$.bA().a)!==0?b:t
s.y=(u&$.bC().a)!==0?f:t
s.z=(u&$.bZ().a)!==0?g:t
s.Q=(u&$.nP().a)!==0?c:t
s.ch=(u&$.cw().a)!==0?i:0
s.cx=(u&$.bz().a)!==0?a:t
return s},
kD:function kD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kQ:function kQ(a,b){this.a=a
this.b=b},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
li:function li(){},
lj:function lj(a,b){this.a=a
this.b=b},
ll:function ll(){},
l0:function l0(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(){},
iG:function iG(){},
bt:function bt(){this.b=this.a=null},
hy:function hy(){},
ja:function ja(){},
bQ:function bQ(){this.a=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(a){this.a=a
this.b=null},
iA:function iA(a){this.a=a
this.b=null},
iB:function iB(a){this.a=a
this.b=null},
ae:function ae(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jI:function jI(a){this.a=a},
jH:function jH(a){this.a=a},
jy:function jy(a){this.a=a
this.c=this.b=null},
jz:function jz(){this.d=this.c=this.b=null},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(){this.c=this.b=null},
jE:function jE(){},
jD:function jD(){},
jF:function jF(){},
ia:function ia(){},
jG:function jG(){this.b=null}},T={
mI:function(a){var u=new T.iX()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
d4:function d4(){},
em:function em(){},
iX:function iX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iY:function iY(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
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
H.lB.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.cb(a)+"'"}}
J.ht.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dS.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dT.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.ig.prototype={}
J.bU.prototype={}
J.bs.prototype={
i:function(a){var u=a[$.nC()]
if(u==null)return this.f0(a)
return"JavaScript function for "+H.j(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibK:1}
J.aV.prototype={
h:function(a,b){H.C(b,H.t(a,0))
if(!!a.fixed$length)H.B(P.J("add"))
a.push(b)},
ez:function(a,b){if(!!a.fixed$length)H.B(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ea(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.B(P.J("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
H.l(b,"$ii",[H.t(a,0)],"$ai")
if(!!a.fixed$length)H.B(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bo(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
j4:function(a){return this.m(a,"")},
iY:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bo(a))}return t},
iX:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bo(a))}throw H.c(H.hs())},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eY:function(a,b,c){if(b<0||b>a.length)throw H.c(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.aj(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
giW:function(a){if(a.length>0)return a[0]
throw H.c(H.hs())},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hs())},
bn:function(a,b,c,d){var u,t,s=H.t(a,0)
H.l(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.B(P.J("setRange"))
P.bw(b,c,a.length)
u=c-b
if(u===0)return
P.lG(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cr(d)
if(u>s.gn(d))throw H.c(H.oi())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dT:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bo(a))}return!1},
bJ:function(a,b){var u=H.t(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.B(P.J("sort"))
H.eh(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.ly(a,"[","]")},
gU:function(a){return new J.av(a,a.length,[H.t(a,0)])},
gJ:function(a){return H.cW(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.B(P.J("set length"))
if(b<0)throw H.c(P.aj(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cp(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.t(a,0))
if(!!a.immutable$list)H.B(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cp(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.t(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.bn(t,0,a.length,a)
this.bn(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.lA.prototype={}
J.av.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.v(s))
u=t.c
if(u>=r){t.sd7(null)
return!1}t.sd7(s[u]);++t.c
return!0},
sd7:function(a){this.d=H.C(a,H.t(this,0))},
$iba:1}
J.bO.prototype={
iH:function(a,b){var u
H.nt(b)
if(typeof b!=="number")throw H.c(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbx(b)
if(this.gbx(a)===u)return 0
if(this.gbx(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbx:function(a){return a===0?1/a<0:a<0},
jy:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cw:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eJ:function(a,b){var u
if(b>20)throw H.c(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbx(a))return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.B(P.J("Unexpected toString result: "+u))
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
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a-b},
w:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a*b},
bm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dJ(a,b)},
ad:function(a,b){return(a|0)===a?a/b|0:this.dJ(a,b)},
dJ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aY:function(a,b){var u
if(a>0)u=this.dI(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i9:function(a,b){if(b<0)throw H.c(H.at(b))
return this.dI(a,b)},
dI:function(a,b){return b>31?0:a>>>b},
az:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a>b},
$ip:1,
$iad:1}
J.dR.prototype={$im:1}
J.dQ.prototype={}
J.br.prototype={
a0:function(a,b){if(b<0)throw H.c(H.cp(a,b))
if(b>=a.length)H.B(H.cp(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cp(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lq(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.bw(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aj:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.aj(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.at(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.ea(b,null))
if(b>c)throw H.c(P.ea(b,null))
if(c>a.length)throw H.c(P.ea(c,null))
return a.substring(b,c)},
af:function(a,b){return this.B(a,b,null)},
jB:function(a){return a.toLowerCase()},
w:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.w(" ",u)+a},
en:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
em:function(a,b){return this.en(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imx:1,
$ih:1}
H.u.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ad9:function(){return[P.m]},
$ay:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h7.prototype={}
H.c7.prototype={
gU:function(a){var u=this
return new H.cM(u,u.gn(u),[H.ap(u,"c7",0)])},
bG:function(a,b){return this.f_(0,H.n(b,{func:1,ret:P.S,args:[H.ap(this,"c7",0)]}))}}
H.cM.prototype={
gK:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.cr(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bo(s))
u=t.c
if(u>=q){t.sb7(null)
return!1}t.sb7(r.L(s,u));++t.c
return!0},
sb7:function(a){this.d=H.C(a,H.t(this,0))},
$iba:1}
H.hI.prototype={
gU:function(a){return new H.hJ(J.bD(this.a),this.b,this.$ti)},
gn:function(a){return J.aH(this.a)},
L:function(a,b){return this.b.$1(J.fC(this.a,b))},
$ai:function(a,b){return[b]}}
H.hJ.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.sb7(u.c.$1(t.gK(t)))
return!0}u.sb7(null)
return!1},
gK:function(a){return this.a},
sb7:function(a){this.a=H.C(a,H.t(this,1))},
$aba:function(a,b){return[b]}}
H.hK.prototype={
gn:function(a){return J.aH(this.a)},
L:function(a,b){return this.b.$1(J.fC(this.a,b))},
$ac7:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.db.prototype={
gU:function(a){return new H.jK(J.bD(this.a),this.b,this.$ti)}}
H.jK.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(H.F(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.c5.prototype={}
H.d9.prototype={
k:function(a,b,c){H.C(c,H.ap(this,"d9",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fU.prototype={
i:function(a){return P.lE(this)},
k:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
return H.oa()},
$iz:1}
H.fV.prototype={
gn:function(a){return this.a},
bv:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bv(0,b))return
return this.dn(b)},
dn:function(a){return this.b[H.K(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.dn(r),p))}}}
H.j7.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ib.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hv.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jk.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lm.prototype={
$1:function(a){if(!!J.U(a).$ibJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f9.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaz:1}
H.cC.prototype={
i:function(a){return"Closure '"+H.cb(this).trim()+"'"},
$ibK:1,
gjG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iU.prototype={}
H.iK.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cv(u)+"'"}}
H.cy.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cy))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cW(this.a)
else u=typeof t!=="object"?J.dz(t):H.cW(t)
return(u^H.cW(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.cb(u)+"'")}}
H.j9.prototype={
i:function(a){return this.a}}
H.fQ.prototype={
i:function(a){return this.a}}
H.iv.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jL.prototype={
i:function(a){return"Assertion failed: "+P.dN(this.a)}}
H.a5.prototype={
gn:function(a){return this.a},
gj3:function(a){return this.a===0},
gaa:function(a){return new H.hA(this,[H.t(this,0)])},
bv:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dj(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dj(t,b)}else return s.j0(b)},
j0:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cB(u.bR(t,u.cA(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.j1(b)},
j1:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bR(r,s.cA(a))
t=s.cB(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.t(s,0))
H.C(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.d9(u==null?s.b=s.c0():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d9(t==null?s.c=s.c0():t,b,c)}else s.j2(b,c)},
j2:function(a,b){var u,t,s,r,q=this
H.C(a,H.t(q,0))
H.C(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.c0()
t=q.cA(a)
s=q.bR(u,t)
if(s==null)q.c8(u,t,[q.c1(a,b)])
else{r=q.cB(s,a)
if(r>=0)s[r].b=b
else s.push(q.c1(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bo(s))
u=u.c}},
d9:function(a,b,c){var u,t=this
H.C(b,H.t(t,0))
H.C(c,H.t(t,1))
u=t.bq(a,b)
if(u==null)t.c8(a,b,t.c1(b,c))
else u.b=c},
fV:function(){this.r=this.r+1&67108863},
c1:function(a,b){var u,t=this,s=new H.hz(H.C(a,H.t(t,0)),H.C(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fV()
return s},
cA:function(a){return J.dz(a)&0x3ffffff},
cB:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.lE(this)},
bq:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
c8:function(a,b,c){a[b]=c},
fC:function(a,b){delete a[b]},
dj:function(a,b){return this.bq(a,b)!=null},
c0:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c8(t,u,t)
this.fC(t,u)
return t}}
H.hz.prototype={}
H.hA.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hB(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hB.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bo(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(t.a)
u.c=u.c.c
return!0}}},
sd8:function(a){this.d=H.C(a,H.t(this,0))},
$iba:1}
H.kX.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kZ.prototype={
$1:function(a){return this.a(H.K(a))},
$S:44}
H.hu.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imx:1,
$ioH:1}
H.cR.prototype={$icR:1}
H.bP.prototype={$ibP:1,$ioR:1}
H.e2.prototype={
gn:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cS.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pZ(c)
H.bm(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.p]},
$ay:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.e3.prototype={
k:function(a,b,c){H.a3(c)
H.bm(b,a,a.length)
a[b]=c},
$ac5:function(){return[P.m]},
$ay:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
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
H.i7.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
H.e4.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$iqG:1}
H.cT.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$icT:1,
$iT:1}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
P.jN.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jM.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jO.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jP.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ff.prototype={
fi:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.co(new P.kt(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fj:function(a,b){if(self.setTimeout!=null)self.setInterval(H.co(new P.ks(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibh:1}
P.kt.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ks.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.f3(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bl.prototype={
j6:function(a){if(this.c!==6)return!0
return this.b.b.cS(H.n(this.d,{func:1,ret:P.S,args:[P.R]}),a.a,P.S,P.R)},
j_:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fy(u,{func:1,args:[P.R,P.az]}))return H.m_(r.jt(u,a.a,a.b,null,t,P.az),s)
else return H.m_(r.cS(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aR.prototype={
eI:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a2
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pM(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aR($.a2,[c])
s=b==null?1:3
this.da(new P.bl(t,s,a,b,[r,c]))
return t},
jx:function(a,b){return this.eI(a,null,b)},
da:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibl")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaR")
s=u.a
if(s<4){u.da(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kN(null,null,s,H.n(new P.jY(t,a),{func:1,ret:-1}))}},
dD:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibl")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaR")
u=q.a
if(u<4){q.dD(a)
return}p.a=u
p.c=q.c}o.a=p.bs(a)
u=p.b
u.toString
P.kN(null,null,u,H.n(new P.k1(o,p),{func:1,ret:-1}))}},
c4:function(){var u=H.f(this.c,"$ibl")
this.c=null
return this.bs(u)},
bs:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
df:function(a){var u,t,s=this,r=H.t(s,0)
H.m_(a,{futureOr:1,type:r})
u=s.$ti
if(H.lX(a,"$icI",u,"$acI"))if(H.lX(a,"$iaR",u,null))P.mW(a,s)
else P.p3(a,s)
else{t=s.c4()
H.C(a,r)
s.a=4
s.c=a
P.de(s,t)}},
dg:function(a,b){var u,t=this
H.f(b,"$iaz")
u=t.c4()
t.a=8
t.c=new P.aq(a,b)
P.de(t,u)},
$icI:1}
P.jY.prototype={
$0:function(){P.de(this.a,this.b)},
$S:0}
P.k1.prototype={
$0:function(){P.de(this.b,this.a.a)},
$S:0}
P.jZ.prototype={
$1:function(a){var u=this.a
u.a=0
u.df(a)},
$S:31}
P.k_.prototype={
$2:function(a,b){H.f(b,"$iaz")
this.a.dg(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.k0.prototype={
$0:function(){this.a.dg(this.b,this.c)},
$S:0}
P.k4.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eE(H.n(s.d,{func:1}),null)}catch(r){u=H.al(r)
t=H.ct(r)
if(o.d){s=H.f(o.a.a.c,"$iaq").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iaq")
else q.b=new P.aq(u,t)
q.a=!0
return}if(!!J.U(n).$icI){if(n instanceof P.aR&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iaq")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jx(new P.k5(p),null)
s.a=!1}},
$S:3}
P.k5.prototype={
$1:function(a){return this.a},
$S:54}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.C(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cS(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.ct(o)
s=n.a
s.b=new P.aq(u,t)
s.a=!0}},
$S:3}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iaq")
r=m.c
if(H.F(r.j6(u))&&r.e!=null){q=m.b
q.b=r.j_(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.ct(p)
r=H.f(m.a.a.c,"$iaq")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aq(t,s)
n.a=!0}},
$S:3}
P.eC.prototype={}
P.iN.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aR($.a2,[P.m])
r.a=0
u=H.t(s,0)
t=H.n(new P.iP(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iQ(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.iP.prototype={
$1:function(a){H.C(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.t(this.b,0)]}}}
P.iQ.prototype={
$0:function(){this.b.df(this.a.a)},
$S:0}
P.d0.prototype={}
P.iO.prototype={}
P.bh.prototype={}
P.aq.prototype={
i:function(a){return H.j(this.a)},
$ibJ:1}
P.kC.prototype={$iqV:1}
P.kM.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e6():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.kb.prototype={
ju:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a2){a.$0()
return}P.n7(r,r,this,a,-1)}catch(s){u=H.al(s)
t=H.ct(s)
P.kL(r,r,this,u,H.f(t,"$iaz"))}},
jv:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a2){a.$1(b)
return}P.n8(r,r,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.ct(s)
P.kL(r,r,this,u,H.f(t,"$iaz"))}},
iE:function(a,b){return new P.kd(this,H.n(a,{func:1,ret:b}),b)},
cd:function(a){return new P.kc(this,H.n(a,{func:1,ret:-1}))},
dV:function(a,b){return new P.ke(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eE:function(a,b){H.n(a,{func:1,ret:b})
if($.a2===C.f)return a.$0()
return P.n7(null,null,this,a,b)},
cS:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a2===C.f)return a.$1(b)
return P.n8(null,null,this,a,b,c,d)},
jt:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a2===C.f)return a.$2(b,c)
return P.pN(null,null,this,a,b,c,d,e,f)}}
P.kd.prototype={
$0:function(){return this.a.eE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kc.prototype={
$0:function(){return this.a.ju(this.b)},
$S:3}
P.ke.prototype={
$1:function(a){var u=this.c
return this.a.jv(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k9.prototype={
gU:function(a){var u=this,t=new P.eR(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icj")!=null}else{t=this.fw(b)
return t}},
fw:function(a){var u=this.d
if(u==null)return!1
return this.bP(this.dq(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dc(u==null?s.b=P.lP():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dc(t==null?s.c=P.lP():t,b)}else return s.fm(0,b)},
fm:function(a,b){var u,t,s,r=this
H.C(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.lP()
t=r.dh(b)
s=u[t]
if(s==null)u[t]=[r.bM(b)]
else{if(r.bP(s,b)>=0)return!1
s.push(r.bM(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hT(this.c,b)
else return this.hS(0,b)},
hS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dq(r,b)
t=s.bP(u,b)
if(t<0)return!1
s.dK(u.splice(t,1)[0])
return!0},
dc:function(a,b){H.C(b,H.t(this,0))
if(H.f(a[b],"$icj")!=null)return!1
a[b]=this.bM(b)
return!0},
hT:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icj")
if(u==null)return!1
this.dK(u)
delete a[b]
return!0},
de:function(){this.r=1073741823&this.r+1},
bM:function(a){var u,t=this,s=new P.cj(H.C(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.de()
return s},
dK:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.de()},
dh:function(a){return J.dz(a)&1073741823},
dq:function(a,b){return a[this.dh(b)]},
bP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.cj.prototype={}
P.eR.prototype={
gK:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bo(t))
else{t=u.c
if(t==null){u.sdd(null)
return!1}else{u.sdd(H.C(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
sdd:function(a){this.d=H.C(a,H.t(this,0))},
$iba:1}
P.hC.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:7}
P.hD.prototype={$ii:1,$ib:1}
P.y.prototype={
gU:function(a){return new H.cM(a,this.gn(a),[H.bX(this,a,"y",0)])},
L:function(a,b){return this.j(a,b)},
jA:function(a,b){var u,t=this,s=H.d([],[H.bX(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jz:function(a){return this.jA(a,!0)},
p:function(a,b){var u,t=this,s=[H.bX(t,a,"y",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.bn(u,0,t.gn(a),a)
C.a.bn(u,t.gn(a),u.length,b)
return u},
iU:function(a,b,c,d){var u
H.C(d,H.bX(this,a,"y",0))
P.bw(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.ly(a,"[","]")}}
P.hF.prototype={}
P.hG.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:7}
P.ag.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bX(s,a,"ag",0),H.bX(s,a,"ag",1)]})
for(u=J.bD(s.gaa(a));u.C();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aH(this.gaa(a))},
i:function(a){return P.lE(a)},
$iz:1}
P.ku.prototype={
k:function(a,b,c){H.C(b,H.t(this,0))
H.C(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hH.prototype={
j:function(a,b){return J.dy(this.a,b)},
k:function(a,b,c){J.lo(this.a,H.C(b,H.t(this,0)),H.C(c,H.t(this,1)))},
I:function(a,b){J.m8(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gn:function(a){return J.aH(this.a)},
i:function(a){return J.au(this.a)},
$iz:1}
P.eu.prototype={}
P.kg.prototype={
ae:function(a,b){var u
for(u=J.bD(H.l(b,"$ii",this.$ti,"$ai"));u.C();)this.h(0,u.gK(u))},
i:function(a){return P.ly(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lG(b,"index")
for(u=P.p7(r,r.r,H.t(r,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ii:1,
$imF:1}
P.eS.prototype={}
P.fl.prototype={}
P.fM.prototype={
j8:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bw(a0,a1,b.length)
u=$.nR()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kW(C.b.F(b,n))
j=H.kW(C.b.F(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ak("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.cc(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.mc(b,p,a1,q,o,f)
else{e=C.e.bm(f-1,4)+1
if(e===1)throw H.c(P.a8(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.mc(b,p,a1,q,o,d)
else{e=C.e.bm(d,4)
if(e===1)throw H.c(P.a8(c,b,a1))
if(e>1)b=C.b.b1(b,a1,a1,e===2?"==":"=")}return b},
$ac3:function(){return[[P.b,P.m],P.h]}}
P.fN.prototype={
$abH:function(){return[[P.b,P.m],P.h]}}
P.c3.prototype={}
P.bH.prototype={}
P.h9.prototype={
$ac3:function(){return[P.h,[P.b,P.m]]}}
P.hp.prototype={
i:function(a){return this.a}}
P.ho.prototype={
fz:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ak("")
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.o3(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abH:function(){return[P.h,P.h]}}
P.js.prototype={
giT:function(){return C.N}}
P.ju.prototype={
ck:function(a){var u,t,s=P.bw(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kA(u)
if(t.fL(a,0,s)!==s)t.dM(J.o_(a,s-1),0)
return new Uint8Array(u.subarray(0,H.pn(0,t.b,u.length)))},
$abH:function(){return[P.h,[P.b,P.m]]}}
P.kA.prototype={
dM:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fL:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dM(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jt.prototype={
ck:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.oU(!1,a,0,null)
if(u!=null)return u
t=P.bw(0,null,J.aH(a))
s=P.na(a,0,t)
if(s>0){r=P.d1(a,0,s)
if(s===t)return r
q=new P.ak(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ak("")
n=new P.kz(!1,q)
n.c=o
n.iI(a,p,t)
if(n.e>0){H.B(P.a8("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cc(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abH:function(){return[[P.b,P.m],P.h]}}
P.kz.prototype={
iI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cr(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ap()
if((o&192)!==128){n=P.a8(h+C.e.bl(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a8("Overlong encoding of 0x"+C.e.bl(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a8("Character outside valid Unicode range: 0x"+C.e.bl(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cc(u)
i.c=!1}for(n=p<c;n;){m=P.na(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d1(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a8("Negative UTF-8 code unit: -0x"+C.e.bl(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a8(h+C.e.bl(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.aC.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aY(u,30))&1073741823},
i:function(a){var u=this,t=P.ob(H.oD(u)),s=P.dJ(H.oB(u)),r=P.dJ(H.ox(u)),q=P.dJ(H.oy(u)),p=P.dJ(H.oA(u)),o=P.dJ(H.oC(u)),n=P.oc(H.oz(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.p.prototype={}
P.b9.prototype={
p:function(a,b){return new P.b9(C.e.p(this.a,b.gdm()))},
t:function(a,b){return new P.b9(C.e.t(this.a,b.gdm()))},
az:function(a,b){return C.e.az(this.a,b.gdm())},
v:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h6(),q=this.a
if(q<0)return"-"+new P.b9(0-q).i(0)
u=r.$1(C.e.ad(q,6e7)%60)
t=r.$1(C.e.ad(q,1e6)%60)
s=new P.h5().$1(q%1e6)
return""+C.e.ad(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h5.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h6.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bJ.prototype={}
P.fF.prototype={
i:function(a){return"Assertion failed"}}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbO()+o+u
if(!q.a)return t
s=q.gbN()
r=P.dN(q.b)
return t+s+": "+r}}
P.cd.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hr.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t=H.a3(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gn:function(a){return this.f}}
P.jl.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ji.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cf.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fT.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dN(u)+"."}}
P.ie.prototype={
i:function(a){return"Out of Memory"},
$ibJ:1}
P.ej.prototype={
i:function(a){return"Stack Overflow"},
$ibJ:1}
P.h_.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eK.prototype={
i:function(a){return"Exception: "+this.a}}
P.hj.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
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
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.w(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bK.prototype={}
P.m.prototype={}
P.i.prototype={
bG:function(a,b){var u=H.ap(this,"i",0)
return new H.db(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.C();)++u
return u},
gaQ:function(a){var u,t=this.gU(this)
if(!t.C())throw H.c(H.hs())
u=t.gK(t)
if(t.C())throw H.c(H.oj())
return u},
L:function(a,b){var u,t,s
P.lG(b,"index")
for(u=this.gU(this),t=0;u.C();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.oh(this,"(",")")}}
P.ba.prototype={}
P.b.prototype={$ii:1}
P.z.prototype={}
P.P.prototype={
gJ:function(a){return P.R.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.cb(this)+"'"},
toString:function(){return this.i(this)}}
P.az.prototype={}
P.h.prototype={$imx:1}
P.ak.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqu:1}
P.jq.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$iz",[r,r],"$az")
H.K(b)
u=J.du(b).em(b,"=")
if(u===-1){if(b!=="")J.lo(a,P.lR(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.af(b,u+1)
r=this.a
J.lo(a,P.lR(t,0,t.length,r,!0),P.lR(s,0,s.length,r,!0))}return a},
$S:50}
P.jn.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jo.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jp.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fB(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.ck.prototype={
geP:function(){return this.b},
gcz:function(a){var u=this.c
if(u==null)return""
if(C.b.a9(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbA:function(a){var u=this.d
if(u==null)return P.n_(this.a)
return u},
gcM:function(a){var u=this.f
return u==null?"":u},
geh:function(){var u=this.r
return u==null?"":u},
eB:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iz",[P.h,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a9(p,"/"))p="/"+p
n=P.lQ(null,0,0,b)
return new P.ck(u,s,q,r,p,n,m.r)},
gcN:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shR(new P.eu(P.mQ(u==null?"":u),[t,t]))}return s.Q},
gei:function(){return this.c!=null},
gel:function(){return this.f!=null},
gej:function(){return this.r!=null},
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
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ilK)if(s.a==b.gbI())if(s.c!=null===b.gei())if(s.b==b.geP())if(s.gcz(s)==b.gcz(b))if(s.gbA(s)==b.gbA(b))if(s.e===b.gex(b)){u=s.f
t=u==null
if(!t===b.gel()){if(t)u=""
if(u===b.gcM(b)){u=s.r
t=u==null
if(!t===b.gej()){if(t)u=""
u=u===b.geh()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shR:function(a){var u=P.h
this.Q=H.l(a,"$iz",[u,u],"$az")},
$ilK:1,
gbI:function(){return this.a},
gex:function(a){return this.e}}
P.kv.prototype={
$1:function(a){throw H.c(P.a8("Invalid port",this.a,this.b+1))},
$S:45}
P.kw.prototype={
$1:function(a){return P.fm(C.X,a,C.h,!1)},
$S:20}
P.ky.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fm(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fm(C.n,b,C.h,!0))}},
$S:21}
P.kx.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bD(H.nr(b,"$ii")),t=this.a;u.C();)t.$2(a,H.K(u.gK(u)))},
$S:43}
P.jm.prototype={
geO:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.en(u,"?",o)
s=u.length
if(t>=0){r=P.dq(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jT("data",p,p,p,P.dq(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kG.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kF.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.o0(u,0,96,b)
return u},
$S:58}
P.kH.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kI.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kj.prototype={
gei:function(){return this.c>0},
gek:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gel:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gej:function(){return this.r<this.a.length},
gds:function(){return this.b===4&&C.b.a9(this.a,"http")},
gdt:function(){return this.b===5&&C.b.a9(this.a,"https")},
gbI:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gds())q=t.x="http"
else if(t.gdt()){t.x="https"
q="https"}else if(q===4&&C.b.a9(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a9(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geP:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcz:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbA:function(a){var u,t=this
if(t.gek()){u=t.d
if(typeof u!=="number")return u.p()
return P.fB(C.b.B(t.a,u+1,t.e),null,null)}if(t.gds())return 80
if(t.gdt())return 443
return 0},
gex:function(a){return C.b.B(this.a,this.e,this.f)},
gcM:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.B(this.a,u+1,t):""},
geh:function(){var u=this.r,t=this.a
return u<t.length?C.b.af(t,u+1):""},
gcN:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.h
return new P.eu(P.mQ(u.gcM(u)),[t,t])},
eB:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iz",[P.h,null],"$az")
u=k.gbI()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.gek()?k.gbA(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a9(o,"/"))o="/"+o
m=P.lQ(j,0,0,b)
n=k.r
l=n<s.length?C.b.af(s,n+1):j
return new P.ck(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilK&&this.a===b.i(0)},
i:function(a){return this.a},
$ilK:1}
P.jT.prototype={}
W.x.prototype={}
W.fD.prototype={
gn:function(a){return a.length}}
W.dA.prototype={
i:function(a){return String(a)},
$idA:1}
W.fE.prototype={
i:function(a){return String(a)}}
W.cx.prototype={$icx:1}
W.c0.prototype={$ic0:1}
W.bE.prototype={$ibE:1}
W.c2.prototype={
cX:function(a,b,c){if(c!=null)return a.getContext(b,P.pV(c))
return a.getContext(b)},
eS:function(a,b){return this.cX(a,b,null)},
$ic2:1}
W.cB.prototype={$icB:1}
W.bF.prototype={
gn:function(a){return a.length}}
W.cD.prototype={$icD:1}
W.fW.prototype={
gn:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cE.prototype={
gn:function(a){return a.length}}
W.fX.prototype={}
W.b7.prototype={}
W.b8.prototype={}
W.fY.prototype={
gn:function(a){return a.length}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h1.prototype={
gn:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.h2.prototype={
i:function(a){return String(a)}}
W.dK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$ian",[P.ad],"$aan")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[[P.an,P.ad]]},
$ay:function(){return[[P.an,P.ad]]},
$ii:1,
$ai:function(){return[[P.an,P.ad]]},
$ib:1,
$ab:function(){return[[P.an,P.ad]]},
$aH:function(){return[[P.an,P.ad]]}}
W.dL.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gay(a))+" x "+H.j(this.gat(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ian)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&this.gay(a)===u.gay(b)&&this.gat(a)===u.gat(b)},
gJ:function(a){return W.mY(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gay(a)),C.c.gJ(this.gat(a)))},
gdW:function(a){return a.bottom},
gat:function(a){return a.height},
gby:function(a){return a.left},
gcR:function(a){return a.right},
gbD:function(a){return a.top},
gay:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ad]}}
W.h3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.h4.prototype={
gn:function(a){return a.length}}
W.jR.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iV")},
k:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jz(this)
return new J.av(u,u.length,[H.t(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
giD:function(a){return new W.jU(a)},
gcj:function(a){return new W.jR(a,a.children)},
gdY:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mi
if(u==null){u=H.d([],[W.aF])
t=new W.e5(u)
C.a.h(u,W.mX(null))
C.a.h(u,W.mZ())
$.mi=t
d=t}else d=u
u=$.mh
if(u==null){u=new W.fn(d)
$.mh=u
c=u}else{u.a=d
c=u}}if($.bp==null){u=document
t=u.implementation.createHTMLDocument("")
$.bp=t
$.lw=t.createRange()
t=$.bp.createElement("base")
H.f(t,"$icx")
t.href=u.baseURI
$.bp.head.appendChild(t)}u=$.bp
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibE")}u=$.bp
if(!!this.$ibE)s=u.body
else{s=u.createElement(a.tagName)
$.bp.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){$.lw.selectNodeContents(s)
r=$.lw.createContextualFragment(b)}else{s.innerHTML=b
r=$.bp.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bp.body
if(s==null?u!=null:s!==u)J.ma(s)
c.cY(r)
document.adoptNode(r)
return r},
iL:function(a,b,c){return this.am(a,b,c,null)},
eU:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iV:1,
geF:function(a){return a.tagName}}
W.h8.prototype={
$1:function(a){return!!J.U(H.f(a,"$iG")).$iV},
$S:25}
W.o.prototype={$io:1}
W.k.prototype={
it:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fn(a,b,c,!1)},
fn:function(a,b,c,d){return a.addEventListener(b,H.co(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aK.prototype={$iaK:1}
W.cH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$icH:1,
$aH:function(){return[W.aK]}}
W.he.prototype={
gn:function(a){return a.length}}
W.hi.prototype={
gn:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.hn.prototype={
gn:function(a){return a.length}}
W.c6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic6:1,
$aH:function(){return[W.G]}}
W.bq.prototype={$ibq:1,
gdZ:function(a){return a.data}}
W.cK.prototype={$icK:1}
W.cL.prototype={$icL:1}
W.bb.prototype={$ibb:1}
W.dX.prototype={
i:function(a){return String(a)},
$idX:1}
W.hX.prototype={
gn:function(a){return a.length}}
W.cP.prototype={$icP:1}
W.hY.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.I(a,new W.hZ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.i_.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.I(a,new W.i0(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.i0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aW.prototype={$iaW:1}
W.i1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.ah.prototype={$iah:1}
W.as.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mG("No elements"))
if(t>1)throw H.c(P.mG("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r
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
return new W.dO(u,u.length,[H.bX(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
jo:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jr:function(a,b){var u,t
try{u=a.parentNode
J.nY(u,b,a)}catch(t){H.al(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eZ(a):u},
iy:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hW:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aX.prototype={$iaX:1,
gn:function(a){return a.length}}
W.ii.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.it.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.I(a,new W.iu(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.iu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.iw.prototype={
gn:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.iH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1}
W.iI.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1,
gn:function(a){return a.length}}
W.iL.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.d([],[P.h])
this.I(a,new W.iM(u))
return u},
gn:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$iz:1,
$az:function(){return[P.h,P.h]}}
W.iM.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aN.prototype={$iaN:1}
W.bg.prototype={$ibg:1}
W.ek.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=W.od("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ae(0,new W.as(u))
return t}}
W.iS.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaQ(u)
s.toString
u=new W.as(s)
r=u.gaQ(u)
t.toString
r.toString
new W.as(t).ae(0,new W.as(r))
return t}}
W.iT.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaQ(u)
t.toString
s.toString
new W.as(t).ae(0,new W.as(s))
return t}}
W.d3.prototype={$id3:1}
W.b0.prototype={$ib0:1}
W.aO.prototype={$iaO:1}
W.iV.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aH:function(){return[W.aO]}}
W.iW.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.b0]},
$ay:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aH:function(){return[W.b0]}}
W.j0.prototype={
gn:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.b2.prototype={$ib2:1}
W.j4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib1")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.b1]},
$ay:function(){return[W.b1]},
$ii:1,
$ai:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aH:function(){return[W.b1]}}
W.j5.prototype={
gn:function(a){return a.length}}
W.bS.prototype={}
W.jr.prototype={
i:function(a){return String(a)}}
W.jJ.prototype={
gn:function(a){return a.length}}
W.bk.prototype={
giO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
giN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibk:1}
W.dc.prototype={
hX:function(a,b){return a.requestAnimationFrame(H.co(H.n(b,{func:1,ret:-1,args:[P.ad]}),1))},
fF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dd.prototype={$idd:1}
W.jS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iY")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.Y]},
$ay:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aH:function(){return[W.Y]}}
W.eF.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ian)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&a.width===u.gay(b)&&a.height===u.gat(b)},
gJ:function(a){return W.mY(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gat:function(a){return a.height},
gay:function(a){return a.width}}
W.k6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.eX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.G]},
$ay:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.kk.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.b_]},
$ay:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.ko.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iN:1,
$aN:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aH:function(){return[W.aN]}}
W.jQ.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gaa(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gaa:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idd")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$az:function(){return[P.h,P.h]}}
W.jU.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.gaa(this).length}}
W.jV.prototype={}
W.lO.prototype={}
W.jW.prototype={}
W.jX.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bV.prototype={
f9:function(a){var u
if($.df.gj3($.df)){for(u=0;u<262;++u)$.df.k(0,C.U[u],W.q4())
for(u=0;u<12;++u)$.df.k(0,C.q[u],W.q5())}},
aZ:function(a){return $.nS().V(0,W.cF(a))},
aC:function(a,b,c){var u=$.df.j(0,H.j(W.cF(a))+"::"+b)
if(u==null)u=$.df.j(0,"*::"+b)
if(u==null)return!1
return H.lW(u.$4(a,b,c,this))},
$iaF:1}
W.H.prototype={
gU:function(a){return new W.dO(a,this.gn(a),[H.bX(this,a,"H",0)])}}
W.e5.prototype={
aZ:function(a){return C.a.dT(this.a,new W.i9(a))},
aC:function(a,b,c){return C.a.dT(this.a,new W.i8(a,b,c))},
$iaF:1}
W.i9.prototype={
$1:function(a){return H.f(a,"$iaF").aZ(this.a)},
$S:27}
W.i8.prototype={
$1:function(a){return H.f(a,"$iaF").aC(this.a,this.b,this.c)},
$S:27}
W.f4.prototype={
fh:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bG(0,new W.kh())
t=b.bG(0,new W.ki())
this.b.ae(0,u)
s=this.c
s.ae(0,C.x)
s.ae(0,t)},
aZ:function(a){return this.a.V(0,W.cF(a))},
aC:function(a,b,c){var u=this,t=W.cF(a),s=u.c
if(s.V(0,H.j(t)+"::"+b))return u.d.iw(c)
else if(s.V(0,"*::"+b))return u.d.iw(c)
else{s=u.b
if(s.V(0,H.j(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.j(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaF:1}
W.kh.prototype={
$1:function(a){return!C.a.V(C.q,H.K(a))},
$S:28}
W.ki.prototype={
$1:function(a){return C.a.V(C.q,H.K(a))},
$S:28}
W.kq.prototype={
aC:function(a,b,c){if(this.f2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.kr.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.K(a))},
$S:20}
W.kp.prototype={
aZ:function(a){var u=J.U(a)
if(!!u.$icY)return!1
u=!!u.$iq
if(u&&W.cF(a)==="foreignObject")return!1
if(u)return!0
return!1},
aC:function(a,b,c){if(b==="is"||C.b.a9(b,"on"))return!1
return this.aZ(a)},
$iaF:1}
W.dO.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdr(J.dy(u.a,t))
u.c=t
return!0}u.sdr(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdr:function(a){this.d=H.C(a,H.t(this,0))},
$iba:1}
W.aF.prototype={}
W.kf.prototype={$iqH:1}
W.fn.prototype={
cY:function(a){new W.kB(this).$2(a,null)},
ba:function(a,b){if(b==null)J.ma(a)
else b.removeChild(a)},
i1:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.o1(a)
n=o.a.getAttribute("is")
H.f(a,"$iV")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.al(r)}t="element unprintable"
try{t=J.au(a)}catch(r){H.al(r)}try{s=W.cF(a)
this.i0(H.f(a,"$iV"),b,p,t,s,H.f(o,"$iz"),H.K(n))}catch(r){if(H.al(r) instanceof P.aT)throw r
else{this.ba(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aZ(a)){o.ba(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aC(a,"is",g)){o.ba(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaa(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.gaa(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.o4(r)
H.K(r)
if(!q.aC(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.U(a).$id3)o.cY(a.content)},
$iqs:1}
W.kB.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i1(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ba(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.al(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:39}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.fa.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
P.kl.prototype={
eg:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cV:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iaC)return new Date(a.a)
if(!!u.$ioH)throw H.c(P.jj("structured clone of RegExp"))
if(!!u.$iaK)return a
if(!!u.$ic0)return a
if(!!u.$icH)return a
if(!!u.$ibq)return a
if(!!u.$icR||!!u.$ibP||!!u.$icP)return a
if(!!u.$iz){t=q.eg(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.kn(p,q))
return p.a}if(!!u.$ib){t=q.eg(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iK(a,t)}throw H.c(P.jj("structured clone of other type"))},
iK:function(a,b){var u,t=J.cr(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cV(t.j(a,u)))
return r}}
P.kn.prototype={
$2:function(a,b){this.a.a[a]=this.b.cV(b)},
$S:7}
P.fk.prototype={$ibq:1,
gdZ:function(a){return this.a}}
P.kO.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.km.prototype={}
P.hf.prototype={
gbr:function(){var u=this.b,t=H.ap(u,"y",0),s=W.V
return new H.hI(new H.db(u,H.n(new P.hg(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.hh(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbr()
J.o2(u.b.$1(J.fC(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aH(this.gbr().a)},
j:function(a,b){var u=this.gbr()
return u.b.$1(J.fC(u.a,b))},
gU:function(a){var u=P.mo(this.gbr(),!1,W.V)
return new J.av(u,u.length,[H.t(u,0)])},
$ay:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.hg.prototype={
$1:function(a){return!!J.U(H.f(a,"$iG")).$iV},
$S:25}
P.hh.prototype={
$1:function(a){return H.r(H.f(a,"$iG"),"$iV")},
$S:38}
P.ka.prototype={
gcR:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.C(u+t,H.t(this,0))},
gdW:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.C(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ian){t=p.a
if(t==u.gby(b)){s=p.b
if(s==u.gbD(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.E(r)
q=H.t(p,0)
if(H.C(t+r,q)===u.gcR(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.E(t)
u=H.C(s+t,q)===u.gdW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dz(s),q=t.b,p=J.dz(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.E(o)
u=H.t(t,0)
o=C.e.gJ(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.E(s)
u=C.e.gJ(H.C(q+s,u))
return P.p6(P.k8(P.k8(P.k8(P.k8(0,r),p),o),u))}}
P.an.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gay:function(a){return this.c},
gat:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.hx.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aH:function(){return[P.bc]}}
P.bf.prototype={$ibf:1}
P.ic.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aH:function(){return[P.bf]}}
P.ik.prototype={
gn:function(a){return a.length}}
P.cY.prototype={$icY:1}
P.iR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.q.prototype={
gcj:function(a){return new P.hf(a,new W.as(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aF])
C.a.h(p,W.mX(null))
C.a.h(p,W.mZ())
C.a.h(p,new W.kp())
c=new W.fn(new W.e5(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iL(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bi.prototype={$ibi:1}
P.j6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibi")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bi]},
$ii:1,
$ai:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aH:function(){return[P.bi]}}
P.eP.prototype={}
P.eQ.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.fb.prototype={}
P.fc.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$ioR:1}
P.fH.prototype={
gn:function(a){return a.length}}
P.fI.prototype={
j:function(a,b){return P.by(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
gaa:function(a){var u=H.d([],[P.h])
this.I(a,new P.fJ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aag:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
P.fJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fK.prototype={
gn:function(a){return a.length}}
P.c_.prototype={}
P.id.prototype={
gn:function(a){return a.length}}
P.eD.prototype={}
P.dD.prototype={$idD:1}
P.dP.prototype={$idP:1}
P.e9.prototype={$ie9:1}
P.eb.prototype={$ieb:1}
P.ce.prototype={
eG:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$ibq&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pW(g))
return}if(!!u.$icK&&h==null&&t&&!0){this.ig(a,b,c,d,e,f,g)
return}throw H.c(P.dB("Incorrect number or type of arguments"))},
jw:function(a,b,c,d,e,f,g){return this.eG(a,b,c,d,e,f,g,null,null,null)},
ig:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6:function(a,b,c){return a.uniform1f(b,c)},
bF:function(a,b,c){return a.uniform1i(b,c)},
Y:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eL:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ice:1}
P.ed.prototype={$ied:1}
P.el.prototype={$iel:1}
P.es.prototype={$ies:1}
P.iJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.by(a.item(b))},
k:function(a,b,c){H.f(c,"$iz")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.z,,,]]},
$ii:1,
$ai:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aH:function(){return[[P.z,,,]]}}
P.f7.prototype={}
P.f8.prototype={}
O.a4.prototype={
bp:function(a){var u=this
u.sfQ(H.d([],[a]))
u.sdB(null)
u.sdv(null)
u.sdC(null)},
cZ:function(a,b,c){var u=this,t=H.ap(u,"a4",0)
H.n(b,{func:1,ret:P.S,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdB(b)
u.sdv(a)
u.sdC(c)},
b3:function(a,b){return this.cZ(a,null,b)},
dA:function(a){var u
H.l(a,"$ii",[H.ap(this,"a4",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
du:function(a,b){var u
H.l(b,"$ii",[H.ap(this,"a4",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.av(u,u.length,[H.t(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ap(s,"a4",0)
H.C(b,r)
r=[r]
if(H.F(s.dA(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.du(t,H.d([b],r))}},
ae:function(a,b){var u,t,s=this
H.l(b,"$ii",[H.ap(s,"a4",0)],"$ai")
if(H.F(s.dA(b))){u=s.a
t=u.length
C.a.ae(u,b)
s.du(t,b)}},
sfQ:function(a){this.a=H.l(a,"$ib",[H.ap(this,"a4",0)],"$ab")},
sdB:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.ap(this,"a4",0)]]})},
sdv:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.ap(this,"a4",0)]]})},
sdC:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.ap(this,"a4",0)]]})},
$ii:1}
O.cO.prototype={
gn:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.O():u},
aR:function(){var u=this.b
if(u!=null)u.E(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.c8()},
bC:function(a){var u=this.a
if(a==null)C.a.h(u,V.c8())
else C.a.h(u,a)
this.aR()},
aM:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sbT:function(a){this.a=H.l(a,"$ib",[V.aw],"$ab")}}
E.fO.prototype={}
E.ar.prototype={
sa8:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().M(0,s.geu())
u=s.c
if(u!=null)u.gq().h(0,s.geu())
t=new D.I("shape",r,s.c,[F.ee])
t.b=!0
s.bz(t)}},
aw:function(a,b){var u
for(u=this.y.a,u=new J.av(u,u.length,[H.t(u,0)]);u.C();)u.d.aw(0,b)},
ah:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga7(s))
s.aR()
a.cL(t.f)
s=a.dy
u=(s&&C.a).gaD(s)
if(u!=null&&t.d!=null)u.eA(a,t)
for(s=t.y.a,s=new J.av(s,s.length,[H.t(s,0)]);s.C();)s.d.ah(a)
a.cK()
a.dx.aM()},
gq:function(){var u=this.z
return u==null?this.z=D.O():u},
bz:function(a){var u=this.z
if(u!=null)u.E(a)},
a4:function(){return this.bz(null)},
ev:function(a){H.f(a,"$iA")
this.e=null
this.bz(a)},
je:function(){return this.ev(null)},
es:function(a){this.bz(H.f(a,"$iA"))},
jb:function(){return this.es(null)},
ja:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.ger(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.sal(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
jd:function(a,b){var u,t
H.l(b,"$ii",[E.ar],"$ai")
for(u=b.gU(b),t=this.ger();u.C();)u.gK(u).gq().M(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf8:function(a,b){this.y=H.l(b,"$ia4",[E.ar],"$aa4")},
$ic9:1}
E.ip.prototype={
f5:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aC(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cO()
t=[V.aw]
u.sbT(H.d([],t))
u.b=null
u.gq().h(0,new E.iq(s))
s.cy=u
u=new O.cO()
u.sbT(H.d([],t))
u.b=null
u.gq().h(0,new E.ir(s))
s.db=u
u=new O.cO()
u.sbT(H.d([],t))
u.b=null
u.gq().h(0,new E.is(s))
s.dx=u
s.sie(H.d([],[O.bR]))
u=s.dy;(u&&C.a).h(u,null)
s.si8(new H.a5([P.h,A.cZ]))},
gjn:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.w(0,u.ga7(u))
s=u}return s},
cL:function(a){var u=this.dy,t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
cK:function(){var u=this.dy
if(u.length>1)u.pop()},
dS:function(a){var u=a.b
if(u.length===0)throw H.c(P.D("May not cache a shader with no name."))
if(this.fr.bv(0,u))throw H.c(P.D('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
sie:function(a){this.dy=H.l(a,"$ib",[O.bR],"$ab")},
si8:function(a){this.fr=H.l(a,"$iz",[P.h,A.cZ],"$az")}}
E.iq.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:9}
E.ir.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.is.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:9}
E.eo.prototype={
d6:function(a){H.f(a,"$iA")
this.eC()},
d5:function(){return this.d6(null)},
giZ:function(){var u,t=this,s=Date.now(),r=C.e.ad(P.mg(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aC(s,!1)
return u/r},
dF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.E(r)
u=C.c.cw(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.w()
t=C.c.cw(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mK(C.o,s.gjs())}},
eC:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.j_(this),{func:1,ret:-1,args:[P.ad]})
C.E.fF(u)
C.E.hX(u,W.nd(t,P.ad))}},
jq:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aC(r,!1)
s.y=P.mg(r-s.r.a,0).a*0.000001
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
o.ah(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.al(q)
t=H.ct(q)
P.m2("Error: "+H.j(u))
P.m2("Stack: "+H.j(t))
throw H.c(u)}}}
E.j_.prototype={
$1:function(a){var u
H.nt(a)
u=this.a
if(u.ch){u.ch=!1
u.jq()}},
$S:37}
Z.eA.prototype={$iqm:1}
Z.dE.prototype={
a3:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.al(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.eB.prototype={$iqn:1}
Z.cA.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a3(a)},
av:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.au(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfM:function(a){this.b=H.l(a,"$ib",[Z.bL],"$ab")},
$iqv:1}
Z.bL.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cb(this.c)+"'")+"]"}}
Z.bx.prototype={
gd_:function(a){var u=this.a,t=(u&$.b4().a)!==0?3:0
if((u&$.bB().a)!==0)t+=3
if((u&$.bA().a)!==0)t+=3
if((u&$.bC().a)!==0)t+=2
if((u&$.bZ().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=4
if((u&$.cw().a)!==0)++t
return(u&$.bz().a)!==0?t+4:t},
iz:function(a){var u,t=$.b4(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0)if(u===a)return t
return $.nQ()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bx))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.b4().a)!==0)C.a.h(u,"Pos")
if((t&$.bB().a)!==0)C.a.h(u,"Norm")
if((t&$.bA().a)!==0)C.a.h(u,"Binm")
if((t&$.bC().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bZ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dw().a)!==0)C.a.h(u,"Clr3")
if((t&$.dx().a)!==0)C.a.h(u,"Clr4")
if((t&$.cw().a)!==0)C.a.h(u,"Weight")
if((t&$.bz().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fR.prototype={}
D.c4.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sal(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.A()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.mo(u,!0,{func:1,ret:-1,args:[D.A]}),new D.hb(q))
u=r.b
if(u!=null){r.saW(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.I(u,new D.hc(q))}return!0},
cp:function(){return this.E(null)},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sal:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
saW:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.hb.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.hc.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.A.prototype={}
D.bM.prototype={}
D.bN.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dF.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dF))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dU.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dU))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.hw.prototype={
jj:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jf:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shQ:function(a){this.d=H.l(a,"$imF",[P.m],"$amF")}}
X.dY.prototype={}
X.hE.prototype={
b8:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.w()
u=b.b
t=q.ch
if(typeof u!=="number")return u.w()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gb0()
r=new X.bu(a,V.bv(),q.x,t,s)
r.b=!0
q.z=new P.aC(p,!1)
q.x=s
return r},
cJ:function(a,b){this.r=a.a
return!1},
bj:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eT()
if(typeof u!=="number")return u.ap()
this.r=(u&~t)>>>0
return!1},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b8(a,b))
return!0},
jk:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb0()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.w()
q=a.b
p=o.cy
if(typeof q!=="number")return q.w()
t=new X.cQ(new V.X(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
hm:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dY(c,r.a.gb0(),b)
s.b=!0
t.E(s)
r.y=new P.aC(u,!1)
r.x=V.bv()}}
X.aE.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aE))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bu.prototype={}
X.i2.prototype={
bQ:function(a,b,c){var u=this,t=new P.aC(Date.now(),!1),s=u.a.gb0(),r=new X.bu(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cJ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bQ(a,b,!0))
return!0},
bj:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eT()
if(typeof t!=="number")return t.ap()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bQ(a,b,!0))
return!0},
bi:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bQ(a,b,!1))
return!0},
jl:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb0()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.w()
r=a.b
q=p.ch
if(typeof r!=="number")return r.w()
u=new X.cQ(new V.X(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
ge0:function(){var u=this.b
return u==null?this.b=D.O():u},
gcU:function(){var u=this.c
return u==null?this.c=D.O():u},
geq:function(){var u=this.d
return u==null?this.d=D.O():u}}
X.cQ.prototype={}
X.ij.prototype={}
X.eq.prototype={}
X.j3.prototype={
b8:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a7],"$ab")
u=new P.aC(Date.now(),!1)
t=a.length>0?a[0]:V.bv()
s=q.a.gb0()
r=new X.eq(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
ji:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b8(a,!0))
return!0},
jg:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b8(a,!0))
return!0},
jh:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b8(a,!1))
return!0}}
X.ev.prototype={
gb0:function(){var u=this.a,t=C.i.gdY(u).c
t.toString
u=C.i.gdY(u).d
u.toString
return V.mD(0,0,t,u)},
dk:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dU(u,new X.aE(t,a.altKey,a.shiftKey))},
aX:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
c9:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aH:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a7(s-q,r-u)},
b9:function(a){return new V.X(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.c.a5(r.pageX)
C.c.a5(r.pageY)
p=o.left
C.c.a5(r.pageX)
C.a.h(n,new V.a7(q-p,C.c.a5(r.pageY)-o.top))}return n},
aF:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dF(u,new X.aE(t,a.altKey,a.shiftKey))},
bU:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hg:function(a){this.f=!0},
h4:function(a){this.f=!1},
ha:function(a){H.f(a,"$iah")
if(H.F(this.f)&&this.bU(a))a.preventDefault()},
hk:function(a){var u
H.f(a,"$ibb")
if(!H.F(this.f))return
u=this.dk(a)
this.b.jj(u)},
hi:function(a){var u
H.f(a,"$ibb")
if(!H.F(this.f))return
u=this.dk(a)
this.b.jf(u)},
ho:function(a){var u,t,s,r,q=this
H.f(a,"$iah")
u=q.a
u.focus()
q.f=!0
q.aX(a)
if(H.F(q.x)){t=q.aF(a)
s=q.b9(a)
if(q.d.cJ(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aF(a)
r=q.aH(a)
if(q.c.cJ(t,r))a.preventDefault()},
hs:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bj(u,s))a.preventDefault()},
he:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bU(a)){r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bj(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bj(u,s))a.preventDefault()}},
hq:function(a){var u,t,s,r=this
H.f(a,"$iah")
r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bi(u,s))a.preventDefault()},
hc:function(a){var u,t,s,r=this
H.f(a,"$iah")
if(!r.bU(a)){r.aX(a)
u=r.aF(a)
if(H.F(r.x)){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aH(a)
if(r.c.bi(u,s))a.preventDefault()}},
hu:function(a){var u,t,s=this
H.f(a,"$ibk")
s.aX(a)
u=new V.X((a&&C.D).giN(a),C.D.giO(a)).u(0,180)
if(H.F(s.x)){if(s.d.jk(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aH(a)
if(s.c.jl(u,t))a.preventDefault()},
hw:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aF(s.y)
t=s.aH(s.y)
s.d.hm(u,t,r)}},
hM:function(a){var u,t=this
H.f(a,"$ib2")
t.a.focus()
t.f=!0
t.c9(a)
u=t.c3(a)
if(t.e.ji(u))a.preventDefault()},
hI:function(a){var u
H.f(a,"$ib2")
this.c9(a)
u=this.c3(a)
if(this.e.jg(u))a.preventDefault()},
hK:function(a){var u
H.f(a,"$ib2")
this.c9(a)
u=this.c3(a)
if(this.e.jh(u))a.preventDefault()},
sfG:function(a){this.z=H.l(a,"$ib",[[P.d0,P.R]],"$ab")}}
D.bI.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.O():u},
aE:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.E(a)},
fd:function(){return this.aE(null)},
$iaf:1,
$ic9:1}
D.af.prototype={$ic9:1}
D.dV.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.O():u},
aE:function(a){var u=this.x
if(u!=null)u.E(a)},
dz:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.E(a)},
hl:function(){return this.dz(null)},
hy:function(a){var u,t,s
H.l(a,"$ii",[D.af],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.fa(s))return!1}return!0},
fZ:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdw(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bI)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c4()
o.sal(null)
o.saW(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bM([n])
n.b=!0
this.aE(n)},
hC:function(a,b){var u,t,s,r=D.af
H.l(b,"$ii",[r],"$ai")
for(u=b.gU(b),t=this.gdw();u.C();){s=u.gK(u)
C.a.M(this.e,s)
s.gq().M(0,t)}r=new D.bN([r])
r.b=!0
this.aE(r)},
fa:function(a){var u=C.a.V(this.e,a)
return u},
sfb:function(a){this.e=H.l(a,"$ib",[D.bI],"$ab")},
shN:function(a){this.f=H.l(a,"$ib",[D.e8],"$ab")},
sfe:function(a){this.r=H.l(a,"$ib",[D.ei],"$ab")},
$ai:function(){return[D.af]},
$aa4:function(){return[D.af]}}
D.e8.prototype={$iaf:1,$ic9:1}
D.ei.prototype={$iaf:1,$ic9:1}
V.a6.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcO()),t=C.c.p(this.b,b.gbH()),s=C.c.p(this.c,b.gce())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcO()),t=C.c.t(this.b,b.gbH()),s=C.c.t(this.c,b.gce())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a6(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.a9.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcO()),s=C.c.p(u.b,b.gbH()),r=C.c.p(u.c,b.gce()),q=C.c.p(u.d,b.gix(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a9(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcO()),s=C.c.t(u.b,b.gbH()),r=C.c.t(u.c,b.gce()),q=C.c.t(u.d,b.gix(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a9(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.ha.prototype={}
V.e1.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.p])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.M().a
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
i:function(a){var u,t,s,r,q=this,p=[P.p],o=V.cq(H.d([q.a,q.d,q.r],p),3,0),n=V.cq(H.d([q.b,q.e,q.x],p),3,0),m=V.cq(H.d([q.c,q.f,q.y],p),3,0)
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
V.aw.prototype={
ai:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.p])
return t},
cC:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.c8()
u=1/b1
t=-n
s=-a0
return V.be((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
w:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.be(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bE:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cT:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Z(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=$.M().a
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
i:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.p],n=V.cq(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cq(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cq(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cq(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.a7.prototype={
p:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.ay.prototype={
p:function(a,b){var u=this
return new V.ay(C.c.p(u.a,b.gjD(b)),C.c.p(u.b,b.gjE(b)),C.c.p(u.c,b.gjF(b)),C.c.p(u.d,b.gjC(b)))},
t:function(a,b){var u=this
return new V.ay(C.c.t(u.a,b.gjD(b)),C.c.t(u.b,b.gjE(b)),C.c.t(u.c,b.gjF(b)),C.c.t(u.d,b.gjC(b)))},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.cX.prototype={
gag:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cX))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+", "+V.Q(u.d,3,0)+"]"}}
V.X.prototype={
cD:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gcn(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gco(b)
if(typeof t!=="number")return t.p()
return new V.X(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gcn(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gco(b)
if(typeof t!=="number")return t.t()
return new V.X(s,C.c.t(t,u))},
w:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.w()
u=this.b
if(typeof u!=="number")return u.w()
return new V.X(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mR
return u==null?$.mR=new V.X(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.X(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.L.prototype={
cD:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cE:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.L(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.M().a)return V.da()
return new V.L(this.a/b,this.b/b,this.c/b)},
ep:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fS.prototype={
bL:function(a){var u=V.ln(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.O():u},
H:function(a){var u=this.y
if(u!=null)u.E(a)},
scW:function(a,b){},
scG:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bL(u)}s=new D.I("maximumLocation",s,t.b,[P.p])
s.b=!0
t.H(s)}},
scI:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bL(u)}s=new D.I("minimumLocation",s,t.c,[P.p])
s.b=!0
t.H(s)}},
sa1:function(a,b){var u,t=this
b=t.bL(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.I("location",u,b,[P.p])
u.b=!0
t.H(u)}},
scH:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.p])
r.b=!0
s.H(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.I("velocity",t,a,[P.p])
t.b=!0
u.H(t)}},
scm:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.I("dampening",u,a,[P.p])
u.b=!0
this.H(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dH.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.O():u},
aP:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dH))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cJ.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.O():u},
H:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.E(a)},
ac:function(){return this.H(null)},
fg:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaV(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bM([n])
n.b=!0
this.H(n)},
hA:function(a,b){var u,t,s=U.ai
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gaV();u.C();)u.gK(u).gq().M(0,t)
s=new D.bN([s])
s.b=!0
this.H(s)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.av(r,r.length,[H.t(r,0)]),u=null;r.C();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.w(0,u)}}s.f=u==null?V.c8():u
r=s.e
if(r!=null)r.au(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ai]},
$aa4:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.ec.prototype={
gq:function(){var u=this.y
return u==null?this.y=D.O():u},
H:function(a){var u=this.y
if(u!=null)u.E(a)},
seQ:function(a){var u
a=V.ln(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.I("yaw",u,a,[P.p])
u.b=!0
this.H(u)}},
sey:function(a,b){var u
b=V.ln(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.I("pitch",u,b,[P.p])
u.b=!0
this.H(u)}},
seD:function(a){var u
a=V.ln(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.I("roll",u,a,[P.p])
u.b=!0
this.H(u)}},
aP:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seQ(u.a+u.d*b.y)
u.sey(0,u.b+u.e*b.y)
u.seD(u.c+u.f*b.y)
u.x=V.mt(u.c).w(0,V.ms(u.b)).w(0,V.mr(u.a))
t=u.y
if(t!=null)t.au(0)}return u.x},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.ec))return!1
u=r.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.Q(u.a,3,0)+", "+V.Q(u.b,3,0)+", "+V.Q(u.c,3,0)+"], ["+V.Q(u.d,3,0)+", "+V.Q(u.e,3,0)+", "+V.Q(u.f,3,0)+"]"}}
U.ew.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.O():u},
H:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.E(a)},
ac:function(){return this.H(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge0().h(0,u.gbV())
u.a.c.geq().h(0,u.gbX())
u.a.c.gcU().h(0,u.gbZ())
return!0},
bW:function(a){var u=this
H.f(a,"$iA")
if(!J.W(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bY:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iA"),"$ibu")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.X(t.a,t.b).w(0,2).u(0,u.gag())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.w()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.X(s.a,s.b).w(0,2).u(0,u.gag())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
n.b.sW(0)
t=t.t(0,a.z)
n.Q=new V.X(t.a,t.b).w(0,2).u(0,u.gag())}n.ac()},
c_:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.w()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sW(t*10*s)
r.ac()}},
aP:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.ch=r
u=b.y
t.b.aw(0,u)
t.cx=V.mt(t.b.d)}return t.cx},
$iai:1}
U.ex.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.O():u},
H:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.E(a)},
ac:function(){return this.H(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge0().h(0,s.gbV())
s.a.c.geq().h(0,s.gbX())
s.a.c.gcU().h(0,s.gbZ())
u=s.a.d
t=u.f
u=t==null?u.f=D.O():t
u.h(0,s.gfR())
u=s.a.d
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gfT())
u=s.a.e
t=u.b
u=t==null?u.b=D.O():t
u.h(0,s.gim())
u=s.a.e
t=u.d
u=t==null?u.d=D.O():t
u.h(0,s.gik())
u=s.a.e
t=u.c
u=t==null?u.c=D.O():t
u.h(0,s.gii())
return!0},
aA:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.X(u,t)},
bW:function(a){var u=this
a=H.r(H.f(a,"$iA"),"$ibu")
if(!J.W(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bY:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iA"),"$ibu")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aA(new V.X(t.a,t.b).w(0,2).u(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aA(new V.X(s.a,s.b).w(0,2).u(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aA(new V.X(t.a,t.b).w(0,2).u(0,u.gag()))}n.ac()},
c_:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sW(-t*10*u)
r.ac()}},
fS:function(a){var u=this
if(H.r(H.f(a,"$iA"),"$idY").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fU:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iA"),"$ibu")
if(!J.W(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aA(new V.X(s.a,s.b).w(0,2).u(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aA(new V.X(t.a,t.b).w(0,2).u(0,u.gag()))
n.ac()},
io:function(a){var u=this
H.f(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
il:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iA"),"$ieq")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.X(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aA(new V.X(t.a,t.b).w(0,2).u(0,u.gag()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aA(new V.X(s.a,s.b).w(0,2).u(0,u.gag()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aA(new V.X(t.a,t.b).w(0,2).u(0,u.gag()))}n.ac()},
ij:function(a){var u,t,s,r=this
H.f(a,"$iA")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sW(-t*10*u)
r.ac()}},
aP:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aw(0,u)
t.b.aw(0,u)
t.fr=V.mr(t.b.d).w(0,V.ms(t.c.d))}return t.fr},
$iai:1}
U.ey.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.O():u},
H:function(a){var u=this.r
if(u!=null)u.E(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.O():t
t=r.gfW()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.O():s).h(0,t)
return!0},
fX:function(a){var u,t,s,r,q=this
H.f(a,"$iA")
if(!J.W(q.b,q.a.b.c))return
H.r(a,"$icQ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.w()
r=u+t*s
if(u!==r){q.d=r
u=new D.I("zoom",u,r,[P.p])
u.b=!0
q.H(u)}},
aP:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.be(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.dG.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.O():u},
a_:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.E(a)},
b5:function(){return this.a_(null)},
hE:function(a,b){var u,t,s,r,q,p,o,n=M.aG
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bM([n])
n.b=!0
this.a_(n)},
hG:function(a,b){var u,t,s=M.aG
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gZ();u.C();)u.gK(u).gq().M(0,t)
s=new D.bN([s])
s.b=!0
this.a_(s)},
ah:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.av(u,u.length,[H.t(u,0)]);u.C();){t=u.d
if(t!=null)t.ah(a)}s.f=!1},
$ai:function(){return[M.aG]},
$aa4:function(){return[M.aG]},
$iaG:1}
M.dI.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.O():u},
a_:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.E(a)},
b5:function(){return this.a_(null)},
sb_:function(a){var u,t,s=this
if(a==null)a=new X.hq()
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gZ())
t=s.b
s.b=a
a.gq().h(0,s.gZ())
u=new D.I("camera",t,s.b,[X.c1])
u.b=!0
s.a_(u)}},
sbk:function(a,b){var u,t,s=this
if(b==null)b=X.mk(null)
u=s.c
if(u!==b){if(u!=null)u.gq().M(0,s.gZ())
t=s.c
s.c=b
b.gq().h(0,s.gZ())
u=new D.I("target",t,s.c,[X.d2])
u.b=!0
s.a_(u)}},
sb2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gZ())
s=new D.I("technique",u,t.d,[O.bR])
s.b=!0
t.a_(s)}},
ah:function(a){var u=this
a.cL(u.d)
u.c.a3(a)
u.b.a3(a)
u.e.aw(0,a)
u.e.ah(a)
u.b.av(a)
u.c.av(a)
a.cK()},
$iaG:1}
M.dM.prototype={
a_:function(a){var u
H.f(a,"$iA")
u=this.y
if(u!=null)u.E(a)},
b5:function(){return this.a_(null)},
h6:function(a,b){var u,t,s,r,q,p,o,n=E.ar
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.sal(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sal(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bM([n])
n.b=!0
this.a_(n)},
h8:function(a,b){var u,t,s=E.ar
H.l(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gZ();u.C();)u.gK(u).gq().M(0,t)
s=new D.bN([s])
s.b=!0
this.a_(s)},
sb_:function(a){var u,t,s=this
if(a==null)a=X.lF(null)
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gZ())
t=s.b
s.b=a
a.gq().h(0,s.gZ())
u=new D.I("camera",t,s.b,[X.c1])
u.b=!0
s.a_(u)}},
sbk:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().M(0,t.gZ())
u=t.c
t.c=b
b.gq().h(0,t.gZ())
s=new D.I("target",u,t.c,[X.d2])
s.b=!0
t.a_(s)}},
sb2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gZ())
s=new D.I("technique",u,t.d,[O.bR])
s.b=!0
t.a_(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.O():u},
ah:function(a){var u,t=this
a.cL(t.d)
t.c.a3(a)
t.b.a3(a)
u=t.d
if(u!=null)u.aw(0,a)
for(u=t.e.a,u=new J.av(u,u.length,[H.t(u,0)]);u.C();)u.d.aw(0,a)
for(u=t.e.a,u=new J.av(u,u.length,[H.t(u,0)]);u.C();)u.d.ah(a)
t.b.toString
a.cy.aM()
a.db.aM()
t.c.av(a)
a.cK()},
sfv:function(a,b){this.e=H.l(b,"$ia4",[E.ar],"$aa4")},
$iaG:1}
M.aG.prototype={}
A.dC.prototype={}
A.fG.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
e_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.am.prototype={
gax:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
v:function(a,b){if(b==null)return!1
if(!(b instanceof A.am))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.e_.prototype={
f4:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ak("")
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
A.pE(c0,u)
A.pG(c0,u)
A.pF(c0,u)
A.pI(c0,u)
A.pJ(c0,u)
A.pH(c0,u)
A.pK(c0,u)
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
b5.eo(0,s.charCodeAt(0)==0?s:s,A.pD(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.N(0,"invViewMat"),"$iaA")
if(t)b5.dy=H.r(b5.y.N(0,"objMat"),"$iaA")
if(r)b5.fr=H.r(b5.y.N(0,"viewObjMat"),"$iaA")
b5.fy=H.r(b5.y.N(0,"projViewObjMat"),"$iaA")
if(c0.ry)b5.k1=H.r(b5.y.N(0,"txt2DMat"),"$id8")
if(c0.x1)b5.k2=H.r(b5.y.N(0,"txtCubeMat"),"$iaA")
if(c0.x2)b5.k3=H.r(b5.y.N(0,"colorMat"),"$iaA")
b5.sfq(H.d([],[A.aA]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.N(0,"bendMatCount"),"$iaP")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.B(P.D(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iaA"))}}t=c0.a
if(t.a)b5.r2=H.r(b5.y.N(0,"emissionClr"),"$ia_")
if(t.b)b5.rx=H.r(b5.y.N(0,"emissionTxt"),"$iao")
t=c0.b
if(t.a)b5.x1=H.r(b5.y.N(0,"ambientClr"),"$ia_")
if(t.b)b5.x2=H.r(b5.y.N(0,"ambientTxt"),"$iao")
t=c0.c
if(t.a)b5.y2=H.r(b5.y.N(0,"diffuseClr"),"$ia_")
if(t.b)b5.aJ=H.r(b5.y.N(0,"diffuseTxt"),"$iao")
t=c0.d
if(t.a)b5.e2=H.r(b5.y.N(0,"invDiffuseClr"),"$ia_")
if(t.b)b5.e3=H.r(b5.y.N(0,"invDiffuseTxt"),"$iao")
t=c0.e
s=t.a
if(s||t.b||!1){b5.e6=H.r(b5.y.N(0,"shininess"),"$iab")
if(s)b5.e4=H.r(b5.y.N(0,"specularClr"),"$ia_")
if(t.b)b5.e5=H.r(b5.y.N(0,"specularTxt"),"$iao")}if(c0.f.b)b5.e7=H.r(b5.y.N(0,"bumpTxt"),"$iao")
if(c0.cy){b5.e8=H.r(b5.y.N(0,"envSampler"),"$ibT")
t=c0.r
if(t.a)b5.e9=H.r(b5.y.N(0,"reflectClr"),"$ia_")
if(t.b)b5.ea=H.r(b5.y.N(0,"reflectTxt"),"$iao")
t=c0.x
s=t.a
if(s||t.b||!1){b5.eb=H.r(b5.y.N(0,"refraction"),"$iab")
if(s)b5.ec=H.r(b5.y.N(0,"refractClr"),"$ia_")
if(t.b)b5.ed=H.r(b5.y.N(0,"refractTxt"),"$iao")}}t=c0.y
if(t.a)b5.ee=H.r(b5.y.N(0,"alpha"),"$iab")
if(t.b)b5.ef=H.r(b5.y.N(0,"alphaTxt"),"$iao")
t=P.m
s=[t,A.aP]
b5.sfD(new H.a5(s))
b5.sfE(new H.a5([t,[P.b,A.cg]]))
b5.shO(new H.a5(s))
b5.shP(new H.a5([t,[P.b,A.ch]]))
b5.sia(new H.a5(s))
b5.sib(new H.a5([t,[P.b,A.ci]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cg],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ap()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.B(P.D(b7+g+b8))
H.r(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.B(P.D(b7+g+b8))
H.r(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.B(P.D(b7+g+b8))
H.r(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.B(P.D(b7+g+b8))
H.r(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.B(P.D(b7+g+b8))
H.r(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.r(e,"$iao")
a=e}else a=b6
C.a.h(h,new A.cg(b,c,d,m,f,a))}b5.cr.k(0,j,h)
q=b5.cq
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaP"))}for(t=c0.Q,s=t.length,r=[A.ch],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
H.r(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.B(P.D(b7+o+b8))
H.r(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.r(e,"$ia_")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.r(a0,"$id8")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.r(a0,"$ibT")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.r(a0,"$ibT")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.r(a2,"$id7")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.r(a0,"$iab")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.r(a2,"$iab")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.B(P.D(b7+o+b8))
H.r(a5,"$iab")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ch(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.ct.k(0,j,h)
q=b5.cs
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaP"))}for(t=c0.ch,s=t.length,r=[A.ci],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
H.r(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.B(P.D(b7+o+b8))
H.r(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.B(P.D(b7+o+b8))
H.r(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.B(P.D(b7+o+b8))
H.r(a0,"$ia_")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.r(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.B(P.D(b7+o+b8))
H.r(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.B(P.D(b7+o+b8))
H.r(a9,"$iab")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.B(P.D(b7+o+b8))
H.r(b0,"$iab")
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
H.r(a2,"$id7")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.r(a2,"$iab")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.B(P.D(b7+g+b8))
H.r(a5,"$iab")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.r(a2,"$iab")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.B(P.D(b7+g+b8))
H.r(a5,"$iab")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.B(P.D(b7+g+b8))
H.r(a9,"$iab")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.B(P.D(b7+g+b8))
H.r(a2,"$iao")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.B(P.D(b7+o+b8))
H.r(a2,"$iao")
a3=a2}else a3=b6
C.a.h(h,new A.ci(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cv.k(0,j,h)
q=b5.cu
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.B(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaP"))}}},
ar:function(a,b){if(b!=null&&b.d)a.eV(b)},
i3:function(a,b){},
sfq:function(a){this.r1=H.l(a,"$ib",[A.aA],"$ab")},
sfD:function(a){this.cq=H.l(a,"$iz",[P.m,A.aP],"$az")},
sfE:function(a){this.cr=H.l(a,"$iz",[P.m,[P.b,A.cg]],"$az")},
shO:function(a){this.cs=H.l(a,"$iz",[P.m,A.aP],"$az")},
shP:function(a){this.ct=H.l(a,"$iz",[P.m,[P.b,A.ch]],"$az")},
sia:function(a){this.cu=H.l(a,"$iz",[P.m,A.aP],"$az")},
sib:function(a){this.cv=H.l(a,"$iz",[P.m,[P.b,A.ci]],"$az")}}
A.aI.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aL.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aM.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hN.prototype={
i:function(a){return this.aJ}}
A.cg.prototype={}
A.ch.prototype={}
A.ci.prototype={}
A.cZ.prototype={
d3:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eo:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dl(b,35633)
r.f=r.dl(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.F(H.lW(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.B(P.D("Failed to link shader: "+H.j(s)))}r.i5()
r.i7()},
a3:function(a){a.a.useProgram(this.r)
this.x.iR()},
dl:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lW(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.D("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
i5:function(){var u,t,s,r=this,q=H.d([],[A.dC]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dC(p,t.name,s))}r.x=new A.fG(q)},
i7:function(){var u,t,s,r=this,q=H.d([],[A.er]),p=r.a,o=H.a3(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iM(t.type,t.size,t.name,s))}r.y=new A.jg(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.aP(u,b,c)
else return A.lJ(u,this.r,b,a,c)},
fA:function(a,b,c){var u=this.a
if(a===1)return new A.ao(u,b,c)
else return A.lJ(u,this.r,b,a,c)},
fB:function(a,b,c){var u=this.a
if(a===1)return new A.bT(u,b,c)
else return A.lJ(u,this.r,b,a,c)},
bt:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iM:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.ab(u.a,c,d)
case 35664:return new A.jc(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.d7(u.a,c,d)
case 35667:return new A.jd(u.a,c,d)
case 35668:return new A.je(u.a,c,d)
case 35669:return new A.jf(u.a,c,d)
case 35674:return new A.jh(u.a,c,d)
case 35675:return new A.d8(u.a,c,d)
case 35676:return new A.aA(u.a,c,d)
case 35678:return u.fA(b,c,d)
case 35680:return u.fB(b,c,d)
case 35670:throw H.c(u.bt("BOOL",c))
case 35671:throw H.c(u.bt("BOOL_VEC2",c))
case 35672:throw H.c(u.bt("BOOL_VEC3",c))
case 35673:throw H.c(u.bt("BOOL_VEC4",c))
default:throw H.c(P.D("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.eg.prototype={}
A.er.prototype={}
A.jg.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aP.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.je.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
siq:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ab.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.d7.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.d8.prototype={
aq:function(a){var u=new Float32Array(H.cl(H.l(a,"$ib",[P.p],"$ab")))
C.d.eM(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aA.prototype={
aq:function(a){var u=new Float32Array(H.cl(H.l(a,"$ib",[P.p],"$ab")))
C.d.eN(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.ao.prototype={
eV:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bT.prototype={
eW:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.kD.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cE(s.b,b).cE(s.d.cE(s.c,b),c)
a.sa1(0,new V.Z(r.a,r.b,r.c))
a.seH(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdU(new V.ay(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kQ.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.kS.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa1(0,new V.Z(s,u,q))
u=new V.L(s,u,q)
a.seH(u.u(0,Math.sqrt(u.D(u))))
a.sdU(new V.ay(1-c,2+c,-1,-1))},
$S:5}
F.kT.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kU.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.li.prototype={
$2:function(a,b){return 0},
$S:11}
F.lj.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.u(0,Math.sqrt(t.D(t))).w(0,this.b+s)
a.sa1(0,new V.Z(s.a,s.b,s.c))},
$S:5}
F.ll.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:18}
F.l0.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kR.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.m7(n.$1(o),m)
m=J.nW(J.m7(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.L(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.D(m)))
n=$.mT
if(n==null){n=new V.L(1,0,0)
$.mT=n
t=n}else t=n
n=u.aI(!J.W(u,t)?V.mV():t)
s=n.u(0,Math.sqrt(n.D(n)))
n=s.aI(u)
t=n.u(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.w(0,n*m)
m=s.w(0,q*m)
a.sa1(0,J.nV(l,new V.Z(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.aa.prototype={
be:function(){var u=this
if(!u.gbf()){C.a.M(u.a.a.d.b,u)
u.a.a.a4()}u.c5()
u.c6()
u.hU()},
ca:function(a){this.a=a
C.a.h(a.d.b,this)},
cb:function(a){this.b=a
C.a.h(a.d.c,this)},
i4:function(a){this.c=a
C.a.h(a.d.d,this)},
c5:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hU:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gbf:function(){return this.a==null||this.b==null||this.c==null},
fp:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.da()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ep())return
return s.u(0,Math.sqrt(s.D(s)))},
fu:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.D(r)))
r=t.t(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aI(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
ci:function(){var u,t=this
if(t.d!=null)return!0
u=t.fp()
if(u==null){u=t.fu()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
fo:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.da()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ep())return
return s.u(0,Math.sqrt(s.D(s)))},
ft:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.t(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.t(0,g).w(0,p).p(0,g).t(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.aI(q)
l=l.u(0,Math.sqrt(l.D(l))).aI(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
cf:function(){var u,t=this
if(t.e!=null)return!0
u=t.fo()
if(u==null){u=t.ft()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
giG:function(a){var u=this
if(J.W(u.a,u.b))return!0
if(J.W(u.b,u.c))return!0
if(J.W(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this
if(s.gbf())return a+"disposed"
u=a+C.b.ao(J.au(s.a.e),0)+", "+C.b.ao(J.au(s.b.e),0)+", "+C.b.ao(J.au(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.hd.prototype={}
F.iG.prototype={
bg:function(a,b,c){var u,t=b.a
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
F.bt.prototype={
be:function(){var u=this
if(!u.gbf()){C.a.M(u.a.a.c.b,u)
u.a.a.a4()}u.c5()
u.c6()},
ca:function(a){this.a=a
C.a.h(a.c.b,this)},
cb:function(a){this.b=a
C.a.h(a.c.c,this)},
c5:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
c6:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gbf:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){if(this.gbf())return a+"disposed"
return a+C.b.ao(J.au(this.a.e),0)+", "+C.b.ao(J.au(this.b.e),0)},
P:function(){return this.G("")}}
F.hy.prototype={}
F.ja.prototype={
bg:function(a,b,c){var u,t=b.a
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
F.bQ.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ao(J.au(u.e),0)},
P:function(){return this.G("")}}
F.ee.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.O():u},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.iJ())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
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
o=new F.bQ()
if(n.a==null)H.B(P.D("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
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
F.om(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
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
F.cG(l,k,i)}g=h.e
if(g!=null)g.au(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
j7:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.t(o,0)])
for(o=[F.ae];u.length!==0;){t=C.a.giW(u)
C.a.ez(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bg(0,t,q)){C.a.h(s,q)
C.a.ez(u,r)}}if(s.length>1)b.bh(s)}}p.a.A()
p.c.cP()
p.d.cP()
p.b.jp()
p.c.cQ(new F.ja())
p.d.cQ(new F.iG())
o=p.e
if(o!=null)o.au(0)},
cc:function(){this.j7(new F.jD(),new F.ia())},
dX:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b4()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bB().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bZ().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.dx().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.bz().a)!==0)++s
r=a3.gd_(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.p
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dE])
for(n=0,m=0;m<s;++m){l=a3.iz(m)
k=l.gd_(l)
C.a.k(o,m,new Z.dE(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].j5(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cl(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cA(new Z.eA(a0,f),o,a3)
e.sfM(H.d([],[Z.bL]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)}b=Z.lN(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.A()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.A()
C.a.h(d,c.e)}b=Z.lN(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(1,d.length,b))}if(a.d.b.length!==0){t=P.m
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
C.a.h(d,c.e)}b=Z.lN(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bL(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.m(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.E(null)},
$iqt:1}
F.iz.prototype={
dP:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ae],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cG(s,p,o))}}return u},
iu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ae],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cG(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cG(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cG(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cG(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bg(0,p,n)){p.be()
break}}}}},
cP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giG(s)
if(t)s.be()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].ci())s=!1
return s},
cg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cf())s=!1
return s},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
P:function(){return this.G("")},
sfH:function(a){this.b=H.l(a,"$ib",[F.aa],"$ab")}}
F.iA.prototype={
gn:function(a){return this.b.length},
cQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bg(0,p,n)){p.be()
break}}}}},
cP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.W(s.a,s.b)
if(t)s.be()}},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.G("")},
sfN:function(a){this.b=H.l(a,"$ib",[F.bt],"$ab")}}
F.iB.prototype={
gn:function(a){return this.b.length},
jp:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(a))
return C.a.m(r,"\n")},
P:function(){return this.G("")},
sc2:function(a){this.b=H.l(a,"$ib",[F.bQ],"$ab")}}
F.ae.prototype={
cl:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ez(u.cx,r,o,t,s,q,p,a,n)},
iJ:function(){return this.cl(null)},
sa1:function(a,b){var u
if(!J.W(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
seH:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
sdU:function(a){var u
if(!J.W(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
j5:function(a){var u,t,s=this
if(a.v(0,$.b4())){u=s.f
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bB())){u=s.r
t=[P.p]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bA())){u=s.x
t=[P.p]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bC())){u=s.y
t=[P.p]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bZ())){u=s.z
t=[P.p]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dw())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dx())){u=s.Q
t=[P.p]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cw()))return H.d([s.ch],[P.p])
else if(a.v(0,$.bz())){u=s.cx
t=[P.p]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.p])},
ci:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.da()
t.d.I(0,new F.jI(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.au(0)}return!0},
cf:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.da()
t.d.I(0,new F.jH(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.au(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.ao(J.au(s.e),0))
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
C.a.h(q,V.Q(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.G("")}}
F.jI.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jH.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jy.prototype={
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
u.a4()
return!0},
dQ:function(a,b,c,d,e,f,g){var u=F.ez(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bu:function(a,b,c,d,e,f){return this.dQ(a,b,c,null,d,e,f)},
iv:function(a,b,c,d,e,f){return this.dQ(a,b,c,d,e,f,null)},
gn:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].ci()
return!0},
cg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cf()
return!0},
iF:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.A()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
P:function(){return this.G("")},
sir:function(a){this.c=H.l(a,"$ib",[F.ae],"$ab")}}
F.jz.prototype={
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
H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.I(u.b,b)
C.a.I(u.c,new F.jA(u,b))
C.a.I(u.d,new F.jB(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfI:function(a){this.b=H.l(a,"$ib",[F.aa],"$ab")},
sfJ:function(a){this.c=H.l(a,"$ib",[F.aa],"$ab")},
sfK:function(a){this.d=H.l(a,"$ib",[F.aa],"$ab")}}
F.jA.prototype={
$1:function(a){H.f(a,"$iaa")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:10}
F.jB.prototype={
$1:function(a){var u
H.f(a,"$iaa")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:10}
F.jC.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sfO:function(a){this.b=H.l(a,"$ib",[F.bt],"$ab")},
sfP:function(a){this.c=H.l(a,"$ib",[F.bt],"$ab")}}
F.jE.prototype={}
F.jD.prototype={
bg:function(a,b,c){return J.W(b.f,c.f)}}
F.jF.prototype={}
F.ia.prototype={
bh:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.ae],"$ab")
u=V.da()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.u(0,Math.sqrt(o*o+n*n+m*m))}if(!J.W(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}return}}
F.jG.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].G(""))
return C.a.m(r,"\n")},
sc2:function(a){this.b=H.l(a,"$ib",[F.bQ],"$ab")}}
O.e0.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.O():u},
X:function(a){var u
H.f(a,"$iA")
u=this.fr
if(u!=null)u.E(a)},
b6:function(){return this.X(null)},
dE:function(a){H.f(a,"$iA")
this.a=null
this.X(a)},
hZ:function(){return this.dE(null)},
h0:function(a,b){var u=V.aw
H.l(b,"$ii",[u],"$ai")
u=new D.bM([u])
u.b=!0
this.X(u)},
h2:function(a,b){var u=V.aw
H.l(b,"$ii",[u],"$ai")
u=new D.bN([u])
u.b=!0
this.X(u)},
di:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a5([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aI])
h.I(0,new O.hR(j,q))
C.a.bJ(q,new O.hS())
p=new H.a5([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gbd()
n=p.j(0,o.gbd())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aL])
p.I(0,new O.hT(j,m))
C.a.bJ(m,new O.hU())
l=new H.a5([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gbd()
r=l.j(0,o.gbd())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aM])
l.I(0,new O.hV(j,k))
C.a.bJ(k,new O.hW())
i=C.e.ad(j.e.a.length+3,4)
j.dy.e
return A.ot(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ak:function(a,b){H.l(a,"$ib",[T.d4],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.av(u,u.length,[H.t(u,0)]);u.C();){t=u.d
t.toString
s=$.jx
if(s==null)s=$.jx=new V.L(0,0,1)
t.a=s
r=$.jw
t.d=r==null?$.jw=new V.L(0,1,0):r
r=$.jv
t.e=r==null?$.jv=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bE(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bE(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bE(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
eA:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.di()
u=H.f(b4.fr.j(0,b3.aJ),"$ie_")
if(u==null){u=A.os(b3,b4.a)
b4.dS(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.e1
b3=b5.e
if(!(b3 instanceof Z.cA))b3=b5.e=null
if(b3==null||!b3.d.v(0,s)){b3=t.k3
if(b3)b5.d.as()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cg()
q.a.cg()
q=q.e
if(q!=null)q.au(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iF()
p=p.e
if(p!=null)p.au(0)}n=b5.d.dX(new Z.eB(b4.a),s)
n.aK($.b4()).e=b2.a.Q.c
if(b3)n.aK($.bB()).e=b2.a.cx.c
if(r)n.aK($.bA()).e=b2.a.ch.c
if(t.r1)n.aK($.bC()).e=b2.a.cy.c
if(q)n.aK($.bZ()).e=b2.a.db.c
if(t.rx)n.aK($.bz()).e=b2.a.dx.c
b5.e=n}b3=T.d4
m=H.d([],[b3])
b2.a.a3(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga7(q)
r=r.dy
r.toString
r.aq(q.ai(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga7(q)
p=b4.dx
p=b4.cx=q.w(0,p.ga7(p))
q=p}r=r.fr
r.toString
r.aq(q.ai(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gjn()
p=b4.dx
p=b4.ch=q.w(0,p.ga7(p))
q=p}r=r.fy
r.toString
r.aq(q.ai(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.aq(C.j.ai(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.aq(C.j.ai(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.aq(C.j.ai(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.d.bF(r.a,r.d,l)
for(r=[P.p],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iaw")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cl(H.l(p.ai(0,!0),"$ib",r,"$ab")))
C.d.eN(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.d.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ak(m,b2.f.d)
r=b2.a
q=b2.f.d
r.ar(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.d.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ak(m,b2.r.d)
r=b2.a
q=b2.r.d
r.ar(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.d.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ak(m,b2.x.d)
r=b2.a
q=b2.x.d
r.ar(r.aJ,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.e2
C.d.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ak(m,b2.y.d)
r=b2.a
q=b2.y.d
r.ar(r.e3,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.e6
C.d.a6(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.e4
C.d.Y(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.ak(m,b2.z.d)
r=b2.a
q=b2.z.d
r.ar(r.e5,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.m
h=new H.a5([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dy(b2.a.cr.j(0,0),e)
o=i.bE(f.a)
c=o.a
b=o.b
a=o.c
a=o.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.d.Y(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.d.Y(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cq.j(0,p)
C.d.bF(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.m
a0=new H.a5([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.p],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gbd()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dy(b2.a.ct.j(0,a1),e)
a2=i.w(0,f.ga7(f))
b=f.ga7(f)
a=$.cV
b=b.cT(a==null?$.cV=new V.Z(0,0,0):a)
a=d.b
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=$.cV
b=a2.cT(b==null?$.cV=new V.Z(0,0,0):b)
a=d.c
C.d.Y(a.a,a.d,b.a,b.b,b.c)
b=f.gbc(f)
a=d.e
C.d.Y(a.a,a.d,b.a,b.b,b.c)
f.gaO()
b=a2.cC(0)
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
j=new Float32Array(H.cl(H.l(new V.e1(a,a3,a4,a5,a6,a7,a8,a9,b).ai(0,!0),"$ib",c,"$ab")))
C.d.eM(b0.a,b0.d,!1,j)
f.gaO()
b=f.gaO()
H.l(m,"$ib",o,"$ab")
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaO()
a=b.gcF(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb4()
b=f.geX()
a=d.x
a.toString
a3=b.gcn(b)
a4=b.gco(b)
a5=b.giQ()
b=b.giP()
C.d.eL(a.a,a.d,a3,a4,a5,b)
b=f.gb4()
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gb4()
a=b.gcF(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giS()){b=f.giA()
a=d.y
C.d.a6(a.a,a.d,b)
b=f.giB()
a=d.z
C.d.a6(a.a,a.d,b)
b=f.giC()
a=d.Q
C.d.a6(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cs.j(0,p)
C.d.bF(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga7(q)
q=P.m
b1=new H.a5([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gbd()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dy(b2.a.cv.j(0,a1),e)
o=f.gjm(f)
c=d.b
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjK(f).jW()
c=d.c
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=i.cT(f.gjm(f))
c=d.d
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gbc(f)
c=d.e
C.d.Y(c.a,c.d,o.a,o.b,o.c)
f.gaO()
o=f.gcU()
c=d.f
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gcR(f)
c=d.r
C.d.Y(c.a,c.d,o.a,o.b,o.c)
o=f.gjX()
c=d.x
C.d.a6(c.a,c.d,o)
o=f.gjY()
c=d.y
C.d.a6(c.a,c.d,o)
f.gaO()
o=f.gaO()
H.l(m,"$ib",b3,"$ab")
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaO()
c=o.gcF(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gb4()
o=f.geX()
c=d.z
c.toString
b=o.gcn(o)
a=o.gco(o)
a3=o.giQ()
o=o.giP()
C.d.eL(c.a,c.d,b,a,a3,o)
o=f.gb4()
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb4()
c=o.gcF(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjL()){o=f.gjJ()
c=d.Q
C.d.a6(c.a,c.d,o)
o=f.gjI()
c=d.ch
C.d.a6(c.a,c.d,o)}if(f.giS()){o=f.giA()
c=d.cx
C.d.a6(c.a,c.d,o)
o=f.giB()
c=d.cy
C.d.a6(c.a,c.d,o)
o=f.giC()
c=d.db
C.d.a6(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.v)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cu.j(0,q)
C.d.bF(q.a,q.d,l)}}}if(t.f.b){b2.ak(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.ar(b3.e7,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga7(r).cC(0)}b3=b3.id
b3.toString
b3.aq(r.ai(0,!0))}if(t.cy){b2.ak(m,b2.ch)
b3=b2.a
r=b2.ch
b3.i3(b3.e8,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.e9
C.d.Y(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ak(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.ar(b3.ea,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.eb
C.d.a6(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.ec
C.d.Y(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ak(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.ar(b3.ed,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.ee
C.d.a6(r.a,r.d,p)}if(b3.b){b2.ak(m,b2.db.d)
r=b2.a
p=b2.db.d
r.ar(r.ef,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b5.e
p.a3(b4)
p.ah(b4)
p.av(b4)
if(!q||b3.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.e_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.di().aJ},
sfs:function(a){this.e=H.l(a,"$ia4",[V.aw],"$aa4")}}
O.hR.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aI(a,C.e.ad(b+3,4)*4))},
$S:12}
O.hS.prototype={
$2:function(a,b){H.f(a,"$iaI")
H.f(b,"$iaI")
return J.lp(a.a,b.a)},
$S:51}
O.hT.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aL(a,C.e.ad(b+3,4)*4))},
$S:12}
O.hU.prototype={
$2:function(a,b){H.f(a,"$iaL")
H.f(b,"$iaL")
return J.lp(a.a,b.a)},
$S:52}
O.hV.prototype={
$2:function(a,b){H.a3(a)
H.a3(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aM(a,C.e.ad(b+3,4)*4))},
$S:12}
O.hW.prototype={
$2:function(a,b){H.f(a,"$iaM")
H.f(b,"$iaM")
return J.lp(a.a,b.a)},
$S:53}
O.hL.prototype={
aG:function(){var u,t=this
t.d1()
u=t.f
if(!(Math.abs(u-1)<$.M().a)){t.f=1
u=new D.I(t.b,u,1,[P.p])
u.b=!0
t.a.X(u)}}}
O.cN.prototype={
X:function(a){return this.a.X(H.f(a,"$iA"))},
b6:function(){return this.X(null)},
aG:function(){},
c7:function(a){var u,t,s=this
if(!s.c.v(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aG()
u=s.a
u.a=null
u.X(null)}}}
O.hM.prototype={}
O.bd.prototype={
dG:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.a6])
t.b=!0
s.a.X(t)}},
aG:function(){this.d1()
this.dG(new V.a6(1,1,1))},
sbc:function(a,b){this.c7(new A.am(!0,this.c.b,!1))
this.dG(b)}}
O.hO.prototype={}
O.hP.prototype={
aG:function(){var u,t=this
t.d2()
u=t.ch
if(!(Math.abs(u-1)<$.M().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1,[P.p])
u.b=!0
t.a.X(u)}}}
O.hQ.prototype={
dH:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.p])
t.b=!0
u.a.X(t)}},
aG:function(){this.d2()
this.dH(100)}}
O.ef.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.O():u},
X:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.E(a)},
b6:function(){return this.X(null)},
eA:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$ieg")
if(u==null){t=a.a
u=new A.eg(t,n)
u.d3(t,n)
u.eo(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$iab")
u.ch=H.r(u.y.j(0,"ratio"),"$iab")
u.cx=H.r(u.y.j(0,"boxClr"),"$ia_")
u.cy=H.r(u.y.j(0,"boxTxt"),"$ibT")
u.db=H.r(u.y.j(0,"viewMat"),"$iaA")
a.dS(u)}o.a=u}if(b.e==null){t=b.d.dX(new Z.eB(a.a),$.b4())
t.aK($.b4()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a3(a)
q=o.b
p=r.Q
C.d.a6(p.a,p.d,q)
q=r.ch
C.d.a6(q.a,q.d,t/s)
s=o.c
r.cy.eW(s)
s=o.d
t=r.cx
C.d.Y(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga7(s).cC(0)
r=r.db
r.toString
r.aq(s.ai(0,!0))
t=b.e
if(t instanceof Z.cA){t.a3(a)
t.ah(a)
t.av(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.e_()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bR.prototype={}
T.d4.prototype={}
T.em.prototype={}
T.iX.prototype={
gq:function(){var u=this.y
return u==null?this.y=D.O():u}}
T.en.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.O():u}}
T.iY.prototype={
aU:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ac(t,"load",H.n(new T.iZ(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
i_:function(a,b,c){var u,t,s,r
b=V.dv(b)
u=V.dv(a.width)
t=V.dv(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ls()
s.width=u
s.height=t
r=H.f(C.i.eS(s,"2d"),"$icB")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pX(r.getImageData(0,0,s.width,s.height))}}}
T.iZ.prototype={
$1:function(a){var u=this,t=u.a,s=t.i_(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.d.jw(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cp()}++t.e},
$S:13}
V.bn.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaD:1}
V.aD.prototype={}
V.dZ.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sab:function(a){this.a=H.l(a,"$ib",[V.aD],"$ab")},
$iaD:1}
V.ax.prototype={
aL:function(a,b){return!this.f1(0,b)},
i:function(a){return"!["+this.d0(0)+"]"}}
V.io.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cc(this.a),t=H.cc(this.b)
return u+".."+t},
$iaD:1}
V.ix.prototype={
f6:function(a){var u,t
if(a.a.length<=0)throw H.c(P.D("May not create a SetMatcher with zero characters."))
u=new H.a5([P.m,P.S])
for(t=new H.cM(a,a.gn(a),[H.ap(a,"y",0)]);t.C();)u.k(0,t.d,!0)
this.si2(u)},
aL:function(a,b){return this.a.bv(0,b)},
i:function(a){var u=this.a
return P.d1(u.gaa(u),0,null)},
si2:function(a){this.a=H.l(a,"$iz",[P.m,P.S],"$az")},
$iaD:1}
V.d_.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d6(this.a.l(0,b))
r.sab(H.d([],[V.aD]))
r.c=!1
C.a.h(this.c,r)
return r},
iV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sip:function(a){this.c=H.l(a,"$ib",[V.d6],"$ab")}}
V.ep.prototype={
i:function(a){var u=H.m3(this.b,"\n","\\n"),t=H.m3(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d5.prototype={
aN:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shV:function(a){var u=P.h
this.c=H.l(a,"$iz",[u,u],"$az")}}
V.j1.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d_(this,b)
u.sip(H.d([],[V.d6]))
u.d=null
this.a.k(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d5(a)
u=P.h
t.shV(new H.a5([u,u]))
this.b.k(0,a,t)}return t},
eK:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ep]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.iV(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d1(i,0,m)
throw H.c(P.D("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d1(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ep(n==null?o.b:n,p,s)}++s}}},
sic:function(a){this.a=H.l(a,"$iz",[P.h,V.d_],"$az")},
sih:function(a){this.b=H.l(a,"$iz",[P.h,V.d5],"$az")}}
V.d6.prototype={
i:function(a){return this.b.b+": "+this.d0(0)}}
X.fL.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.O():u},
a2:function(a){var u=this.fr
if(u!=null)u.E(a)},
say:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.I("width",u,b,[P.m])
u.b=!0
t.a2(u)}},
sat:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.I("height",u,b,[P.m])
u.b=!0
t.a2(u)}},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.a3(u.getParameter(3379))
p=V.dv(s)
o=V.dv(r)
q=V.dv(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.d.eG(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.mI(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cp()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cp()
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
a.c=C.c.a5(s*h.a)
r=t.d
a.d=C.c.a5(r*h.b)
l=t.a
k=h.c
j=C.c.a5(l*k)
t=t.b
l=h.d
u.viewport(j,C.c.a5(t*l),C.c.a5(s*k),C.c.a5(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
av:function(a){a.a.bindFramebuffer(36160,null)}}
X.c1.prototype={$ic9:1}
X.hk.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.O():u},
a3:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.c.a5(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.c.a5(r*t)
r=C.c.a5(s.c*u)
a.c=r
s=C.c.a5(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
av:function(a){}}
X.hq.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.O():u},
a3:function(a){var u
a.cy.bC(V.c8())
u=V.c8()
a.db.bC(u)},
av:function(a){a.cy.aM()
a.db.aM()},
$ic9:1,
$ic1:1}
X.e7.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.O():u},
a2:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.E(a)},
fl:function(){return this.a2(null)},
a3:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.be(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bC(k)
r=$.my
if(r==null){r=V.mA()
q=V.lM()
p=$.mS
r=V.mq(r,q,p==null?$.mS=new V.L(0,0,-1):p)
$.my=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aP(0,a,s)
if(t!=null)u=t.w(0,u)}a.db.bC(u)},
av:function(a){a.cy.aM()
a.db.aM()},
$ic9:1,
$ic1:1}
X.d2.prototype={}
V.bG.prototype={
bo:function(a){this.b=new P.ho(C.Q)
this.c=null
this.sbS(H.d([],[[P.b,W.aJ]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aJ]))
u=a.split("\n")
for(l=u.length,t=[W.aJ],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fz(q,0,q.length)
n=o==null?q:o
C.O.eU(p,H.m3(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaD(m.d),p)}},
ew:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.h],"$ab")
q.sbS(H.d([],[[P.b,W.aJ]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bw():t).eK(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.bB(t[r])},
sbS:function(a){this.d=H.l(a,"$ib",[[P.b,W.aJ]],"$ab")}}
V.lh.prototype={
$1:function(a){var u
H.f(a,"$ibh")
u=C.c.eJ(this.a.giZ(),2)
if(u!=="0.00")P.m2(u+" fps")},
$S:55}
V.h0.prototype={
bB:function(a){var u=this
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
bw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.j2()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bn())
t=a1.l(0,r).m(0,h)
u=V.w(new H.u("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bn())
t=a1.l(0,r).m(0,e)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.ax()
s=[V.aD]
t.sab(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.u("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.ax()
t.sab(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.R("Num")
t=a1.l(0,n)
t.d=t.a.R("Num")
t=a1.l(0,m)
t.d=t.a.R("Symbol")
t=a1.l(0,j)
t.d=t.a.R("String")
t=a1.l(0,g)
t.d=t.a.R("String")
t=a1.l(0,c)
t.d=t.a.R(d)
t=a1.l(0,a0)
t.d=t.a.R(a0)
t=a1.l(0,q)
t=t.d=t.a.R(q)
u=[P.h]
t.aN(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aN(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aN(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hl.prototype={
bB:function(a){var u=this
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
bw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.j2()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a1("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a1("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bn())
t=e.l(0,j).m(0,i)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.ax()
s=[V.aD]
t.sab(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.u("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.ax()
u.sab(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.u("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.R("Num")
u=e.l(0,n)
u.d=u.a.R("Num")
u=e.l(0,m)
u.d=u.a.R("Symbol")
u=e.l(0,i)
u.d=u.a.R(j)
u=e.l(0,g)
u.d=u.a.R(h)
u=e.l(0,f)
u.d=u.a.R(f)
u=e.l(0,q)
u=u.d=u.a.R(q)
t=[P.h]
u.aN(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aN(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aN(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hm.prototype={
bB:function(a){var u=this,t="#111"
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
bw:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.j2()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a1("a","z")
C.a.h(u.a,t)
t=V.a1("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a1("0","9")
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.u("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bn())
C.a.h(l.l(0,s).m(0,m).a,new V.bn())
u=l.l(0,m).m(0,m)
t=new V.ax()
t.sab(H.d([],[V.aD]))
C.a.h(u.a,t)
u=V.w(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a1("a","z")
C.a.h(t.a,u)
u=V.a1("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.R("Symbol")
u=l.l(0,n)
u.d=u.a.R("String")
u=l.l(0,r)
t=u.a.R(r)
u.d=t
t.aN(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.R(q)
t=l.l(0,m)
t.d=t.a.R(m)
return l}}
V.ih.prototype={
ew:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sbS(H.d([],[[P.b,W.aJ]]))
this.O(C.a.m(b,"\n"),"#111")},
bB:function(a){},
bw:function(){return}}
V.il.prototype={
dN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mO().gcN().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.dL(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m9(m.c).h(0,q)
o=W.og("radio")
o.checked=s
o.name=u
u=W.o
W.ac(o,"change",H.n(new V.im(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m9(m.c).h(0,r.createElement("br"))},
aB:function(a,b,c){return this.dN(a,b,c,!1)},
dL:function(a){var u,t,s=P.mO(),r=P.h,q=P.oo(s.gcN(),r,r)
q.k(0,this.a,a)
u=s.eB(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.km([],[]).cV(""),"",t)}}
V.im.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.dL(u.d)}},
$S:13}
V.iC.prototype={
f7:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ac(q,"scroll",H.n(new V.iE(o),{func:1,ret:-1,args:[r]}),!1,r)},
dR:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.i6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eK(C.a.j4(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.qj(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fm(C.y,n,C.h,!1)
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
eR:function(a){var u,t,s,r=new V.h0("dart")
r.bo("dart")
u=new V.hl("glsl")
u.bo("glsl")
t=new V.hm("html")
t.bo("html")
s=C.a.iX(H.d([r,u,t],[V.bG]),new V.iF(a))
if(s!=null)return s
r=new V.ih("plain")
r.bo("plain")
return r},
dO:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.du(r).a9(r,"+")){C.a.k(b0,s,C.b.af(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a9(r,"-")){C.a.k(b0,s,C.b.af(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eR(a8)
q.ew(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fm(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.mb()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.a_.iy(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.v)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gU(r);a3.C();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
is:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ibg").style
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
o=H.f(r.insertCell(-1),"$ibg")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.j2()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.ax()
r=[V.aD]
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.ax()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.ax()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.ax()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.ax()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bn())
s=u.l(0,i).m(0,i)
t=new V.ax()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.R(p)
s=u.l(0,n)
s.d=s.a.R(o)
s=u.l(0,"CodeEnd")
s.d=s.a.R(m)
s=u.l(0,j)
s.d=s.a.R("Link")
s=u.l(0,i)
s.d=s.a.R(i)
this.b=u}}
V.iE.prototype={
$1:function(a){P.mK(C.o,new V.iD(this.a))},
$S:13}
V.iD.prototype={
$0:function(){var u=C.c.a5(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.iF.prototype={
$1:function(a){return H.f(a,"$ibG").a===this.a},
$S:56}
V.l5.prototype={
$0:function(){this.a.sa8(0,F.kP(1,null,null,1))},
$S:0}
V.l6.prototype={
$0:function(){this.a.sa8(0,F.kP(15,null,new V.l4(),15))},
$S:0}
V.l4.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.L(r.a,r.b,r.c)
u=r.u(0,Math.sqrt(r.D(r)))
r=a.f
s=u.w(0,t*0.1+s*0.1)
a.sa1(0,r.p(0,new V.Z(s.a,s.b,s.c)))},
$S:5}
V.l7.prototype={
$0:function(){this.a.sa8(0,F.nh(!0,30,1))},
$S:0}
V.l8.prototype={
$0:function(){this.a.sa8(0,F.nh(!1,30,0))},
$S:0}
V.l9.prototype={
$0:function(){this.a.sa8(0,F.ni(!0,!0,25,new V.l3(),50))},
$S:0}
V.l3.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:11}
V.la.prototype={
$0:function(){this.a.sa8(0,F.ny(6,null,6))},
$S:0}
V.lb.prototype={
$0:function(){this.a.sa8(0,F.ny(10,new V.l2(),10))},
$S:0}
V.l2.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:11}
V.lc.prototype={
$0:function(){this.a.sa8(0,F.nA())},
$S:0}
V.ld.prototype={
$0:function(){this.a.sa8(0,F.qb())},
$S:0}
V.le.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dO("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dO("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.eZ=u.i
u=J.dT.prototype
u.f0=u.i
u=P.i.prototype
u.f_=u.bG
u=W.V.prototype
u.bK=u.am
u=W.f4.prototype
u.f2=u.aC
u=O.cN.prototype
u.d1=u.aG
u=O.bd.prototype
u.d2=u.aG
u=V.dZ.prototype
u.f1=u.aL
u.d0=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pR","p0",14)
u(P,"pS","p1",14)
u(P,"pT","p2",14)
t(P,"ng","pP",3)
s(W,"q4",4,null,["$4"],["p4"],30,0)
s(W,"q5",4,null,["$4"],["p5"],30,0)
var m
r(m=E.ar.prototype,"geu",0,0,null,["$1","$0"],["ev","je"],1,0)
r(m,"ger",0,0,null,["$1","$0"],["es","jb"],1,0)
q(m,"gj9","ja",6)
q(m,"gjc","jd",6)
r(m=E.eo.prototype,"gd4",0,0,null,["$1","$0"],["d6","d5"],1,0)
p(m,"gjs","eC",3)
o(m=X.ev.prototype,"ghf","hg",16)
o(m,"gh3","h4",16)
o(m,"gh9","ha",4)
o(m,"ghj","hk",34)
o(m,"ghh","hi",34)
o(m,"ghn","ho",4)
o(m,"ghr","hs",4)
o(m,"ghd","he",4)
o(m,"ghp","hq",4)
o(m,"ghb","hc",4)
o(m,"ght","hu",36)
o(m,"ghv","hw",16)
o(m,"ghL","hM",15)
o(m,"ghH","hI",15)
o(m,"ghJ","hK",15)
r(D.bI.prototype,"gfc",0,0,null,["$1","$0"],["aE","fd"],1,0)
r(m=D.dV.prototype,"gdw",0,0,null,["$1","$0"],["dz","hl"],1,0)
o(m,"ghx","hy",49)
q(m,"gfY","fZ",29)
q(m,"ghB","hC",29)
n(V.X.prototype,"gn","cD",26)
n(V.L.prototype,"gn","cD",26)
r(m=U.cJ.prototype,"gaV",0,0,null,["$1","$0"],["H","ac"],1,0)
q(m,"gff","fg",23)
q(m,"ghz","hA",23)
r(m=U.ew.prototype,"gaV",0,0,null,["$1","$0"],["H","ac"],1,0)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gbZ","c_",2)
r(m=U.ex.prototype,"gaV",0,0,null,["$1","$0"],["H","ac"],1,0)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gbZ","c_",2)
o(m,"gfR","fS",2)
o(m,"gfT","fU",2)
o(m,"gim","io",2)
o(m,"gik","il",2)
o(m,"gii","ij",2)
o(U.ey.prototype,"gfW","fX",2)
r(m=M.dG.prototype,"gZ",0,0,null,["$1","$0"],["a_","b5"],1,0)
q(m,"ghD","hE",22)
q(m,"ghF","hG",22)
r(M.dI.prototype,"gZ",0,0,null,["$1","$0"],["a_","b5"],1,0)
r(m=M.dM.prototype,"gZ",0,0,null,["$1","$0"],["a_","b5"],1,0)
q(m,"gh5","h6",6)
q(m,"gh7","h8",6)
r(m=O.e0.prototype,"gaS",0,0,null,["$1","$0"],["X","b6"],1,0)
r(m,"ghY",0,0,null,["$1","$0"],["dE","hZ"],1,0)
q(m,"gh_","h0",32)
q(m,"gh1","h2",32)
r(O.cN.prototype,"gaS",0,0,null,["$1","$0"],["X","b6"],1,0)
r(O.ef.prototype,"gaS",0,0,null,["$1","$0"],["X","b6"],1,0)
r(X.e7.prototype,"gfk",0,0,null,["$1","$0"],["a2","fl"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.lB,J.a,J.av,P.eS,P.i,H.cM,P.ba,H.c5,H.d9,H.fU,H.j7,P.bJ,H.cC,H.f9,P.ag,H.hz,H.hB,H.hu,P.ff,P.bl,P.aR,P.eC,P.iN,P.d0,P.iO,P.bh,P.aq,P.kC,P.kg,P.cj,P.eR,P.y,P.ku,P.hH,P.c3,P.hp,P.kA,P.kz,P.S,P.aC,P.ad,P.b9,P.ie,P.ej,P.eK,P.hj,P.bK,P.b,P.z,P.P,P.az,P.h,P.ak,P.ck,P.jm,P.kj,W.fX,W.bV,W.H,W.e5,W.f4,W.kp,W.dO,W.aF,W.kf,W.fn,P.kl,P.fk,P.ka,P.T,O.a4,O.cO,E.fO,E.ar,E.ip,E.eo,Z.eA,Z.eB,Z.cA,Z.bL,Z.bx,D.fR,D.c4,D.A,X.dF,X.dU,X.hw,X.hE,X.aE,X.i2,X.j3,X.ev,D.bI,D.af,D.e8,D.ei,V.a6,V.a9,V.ha,V.e1,V.aw,V.a7,V.Z,V.ay,V.cX,V.X,V.L,U.ew,U.ex,U.ey,M.dI,M.dM,M.aG,A.dC,A.fG,A.am,A.aI,A.aL,A.aM,A.hN,A.cg,A.ch,A.ci,A.er,A.jg,F.aa,F.hd,F.bt,F.hy,F.bQ,F.ee,F.iz,F.iA,F.iB,F.ae,F.jy,F.jz,F.jC,F.jE,F.jF,F.jG,O.bR,O.cN,O.hO,T.iY,V.bn,V.aD,V.dZ,V.io,V.ix,V.d_,V.ep,V.d5,V.j1,X.d2,X.c1,X.hq,X.e7,V.bG,V.il,V.iC])
s(J.a,[J.ht,J.dS,J.dT,J.aV,J.bO,J.br,H.cR,H.bP,W.k,W.fD,W.c0,W.cB,W.b7,W.b8,W.Y,W.eE,W.h1,W.h2,W.eG,W.dL,W.eI,W.h4,W.o,W.eL,W.aU,W.hn,W.eN,W.bq,W.dX,W.hX,W.eT,W.eU,W.aW,W.eV,W.eY,W.aX,W.f1,W.f3,W.aZ,W.f5,W.b_,W.fa,W.aN,W.fd,W.j0,W.b1,W.fg,W.j5,W.jr,W.fo,W.fq,W.fs,W.fu,W.fw,P.bc,P.eP,P.bf,P.f_,P.ik,P.fb,P.bi,P.fi,P.fH,P.eD,P.dD,P.dP,P.e9,P.eb,P.ce,P.ed,P.el,P.es,P.f7])
s(J.dT,[J.ig,J.bU,J.bs])
t(J.lA,J.aV)
s(J.bO,[J.dR,J.dQ])
t(P.hD,P.eS)
s(P.hD,[H.et,W.jR,W.as,P.hf])
t(H.u,H.et)
s(P.i,[H.h7,H.hI,H.db])
s(H.h7,[H.c7,H.hA])
s(P.ba,[H.hJ,H.jK])
t(H.hK,H.c7)
t(H.fV,H.fU)
s(P.bJ,[H.ib,H.hv,H.jk,H.j9,H.fQ,H.iv,P.fF,P.e6,P.aT,P.jl,P.ji,P.cf,P.fT,P.h_])
s(H.cC,[H.lm,H.iU,H.kX,H.kY,H.kZ,P.jN,P.jM,P.jO,P.jP,P.kt,P.ks,P.jY,P.k1,P.jZ,P.k_,P.k0,P.k4,P.k5,P.k3,P.k2,P.iP,P.iQ,P.kM,P.kd,P.kc,P.ke,P.hC,P.hG,P.h5,P.h6,P.jq,P.jn,P.jo,P.jp,P.kv,P.kw,P.ky,P.kx,P.kG,P.kF,P.kH,P.kI,W.h8,W.hZ,W.i0,W.iu,W.iM,W.jX,W.i9,W.i8,W.kh,W.ki,W.kr,W.kB,P.kn,P.kO,P.hg,P.hh,P.fJ,E.iq,E.ir,E.is,E.j_,D.hb,D.hc,F.kD,F.kQ,F.kS,F.kT,F.kU,F.li,F.lj,F.ll,F.l0,F.kR,F.jI,F.jH,F.jA,F.jB,O.hR,O.hS,O.hT,O.hU,O.hV,O.hW,T.iZ,V.lh,V.im,V.iE,V.iD,V.iF,V.l5,V.l6,V.l4,V.l7,V.l8,V.l9,V.l3,V.la,V.lb,V.l2,V.lc,V.ld,V.le])
s(H.iU,[H.iK,H.cy])
t(H.jL,P.fF)
t(P.hF,P.ag)
s(P.hF,[H.a5,W.jQ])
t(H.e2,H.bP)
s(H.e2,[H.dg,H.di])
t(H.dh,H.dg)
t(H.cS,H.dh)
t(H.dj,H.di)
t(H.e3,H.dj)
s(H.e3,[H.i3,H.i4,H.i5,H.i6,H.i7,H.e4,H.cT])
t(P.kb,P.kC)
t(P.k9,P.kg)
t(P.fl,P.hH)
t(P.eu,P.fl)
s(P.c3,[P.fM,P.h9])
t(P.bH,P.iO)
s(P.bH,[P.fN,P.ho,P.ju,P.jt])
t(P.js,P.h9)
s(P.ad,[P.p,P.m])
s(P.aT,[P.cd,P.hr])
t(P.jT,P.ck)
s(W.k,[W.G,W.he,W.cP,W.aY,W.dk,W.b0,W.aO,W.dm,W.jJ,W.dc,P.fK,P.c_])
s(W.G,[W.V,W.bF,W.dd])
s(W.V,[W.x,P.q])
s(W.x,[W.dA,W.fE,W.cx,W.bE,W.c2,W.aJ,W.hi,W.cK,W.cL,W.iw,W.bg,W.ek,W.iS,W.iT,W.d3])
s(W.b7,[W.cD,W.fY,W.fZ])
t(W.fW,W.b8)
t(W.cE,W.eE)
t(W.eH,W.eG)
t(W.dK,W.eH)
t(W.eJ,W.eI)
t(W.h3,W.eJ)
t(W.aK,W.c0)
t(W.eM,W.eL)
t(W.cH,W.eM)
t(W.eO,W.eN)
t(W.c6,W.eO)
t(W.bS,W.o)
s(W.bS,[W.bb,W.ah,W.b2])
t(W.hY,W.eT)
t(W.i_,W.eU)
t(W.eW,W.eV)
t(W.i1,W.eW)
t(W.eZ,W.eY)
t(W.cU,W.eZ)
t(W.f2,W.f1)
t(W.ii,W.f2)
t(W.it,W.f3)
t(W.dl,W.dk)
t(W.iH,W.dl)
t(W.f6,W.f5)
t(W.iI,W.f6)
t(W.iL,W.fa)
t(W.fe,W.fd)
t(W.iV,W.fe)
t(W.dn,W.dm)
t(W.iW,W.dn)
t(W.fh,W.fg)
t(W.j4,W.fh)
t(W.bk,W.ah)
t(W.fp,W.fo)
t(W.jS,W.fp)
t(W.eF,W.dL)
t(W.fr,W.fq)
t(W.k6,W.fr)
t(W.ft,W.fs)
t(W.eX,W.ft)
t(W.fv,W.fu)
t(W.kk,W.fv)
t(W.fx,W.fw)
t(W.ko,W.fx)
t(W.jU,W.jQ)
t(W.jV,P.iN)
t(W.lO,W.jV)
t(W.jW,P.d0)
t(W.kq,W.f4)
t(P.km,P.kl)
t(P.an,P.ka)
t(P.eQ,P.eP)
t(P.hx,P.eQ)
t(P.f0,P.f_)
t(P.ic,P.f0)
t(P.cY,P.q)
t(P.fc,P.fb)
t(P.iR,P.fc)
t(P.fj,P.fi)
t(P.j6,P.fj)
t(P.fI,P.eD)
t(P.id,P.c_)
t(P.f8,P.f7)
t(P.iJ,P.f8)
s(E.fO,[Z.dE,A.cZ,T.d4])
s(D.A,[D.bM,D.bN,D.I,X.ij])
s(X.ij,[X.dY,X.bu,X.cQ,X.eq])
s(O.a4,[D.dV,U.cJ,M.dG])
s(D.fR,[U.fS,U.ai])
s(U.ai,[U.dH,U.ec])
s(A.cZ,[A.e_,A.eg])
s(A.er,[A.aP,A.jd,A.je,A.jf,A.jb,A.ab,A.jc,A.a_,A.d7,A.jh,A.d8,A.aA,A.ao,A.bT])
t(F.iG,F.hd)
t(F.ja,F.hy)
t(F.jD,F.jE)
t(F.ia,F.jF)
s(O.bR,[O.e0,O.ef])
s(O.cN,[O.hL,O.hM,O.bd])
s(O.bd,[O.hP,O.hQ])
s(T.d4,[T.em,T.en])
t(T.iX,T.em)
s(V.dZ,[V.ax,V.d6])
s(X.d2,[X.fL,X.hk])
s(V.bG,[V.h0,V.hl,V.hm,V.ih])
u(H.et,H.d9)
u(H.dg,P.y)
u(H.dh,H.c5)
u(H.di,P.y)
u(H.dj,H.c5)
u(P.eS,P.y)
u(P.fl,P.ku)
u(W.eE,W.fX)
u(W.eG,P.y)
u(W.eH,W.H)
u(W.eI,P.y)
u(W.eJ,W.H)
u(W.eL,P.y)
u(W.eM,W.H)
u(W.eN,P.y)
u(W.eO,W.H)
u(W.eT,P.ag)
u(W.eU,P.ag)
u(W.eV,P.y)
u(W.eW,W.H)
u(W.eY,P.y)
u(W.eZ,W.H)
u(W.f1,P.y)
u(W.f2,W.H)
u(W.f3,P.ag)
u(W.dk,P.y)
u(W.dl,W.H)
u(W.f5,P.y)
u(W.f6,W.H)
u(W.fa,P.ag)
u(W.fd,P.y)
u(W.fe,W.H)
u(W.dm,P.y)
u(W.dn,W.H)
u(W.fg,P.y)
u(W.fh,W.H)
u(W.fo,P.y)
u(W.fp,W.H)
u(W.fq,P.y)
u(W.fr,W.H)
u(W.fs,P.y)
u(W.ft,W.H)
u(W.fu,P.y)
u(W.fv,W.H)
u(W.fw,P.y)
u(W.fx,W.H)
u(P.eP,P.y)
u(P.eQ,W.H)
u(P.f_,P.y)
u(P.f0,W.H)
u(P.fb,P.y)
u(P.fc,W.H)
u(P.fi,P.y)
u(P.fj,W.H)
u(P.eD,P.ag)
u(P.f7,P.y)
u(P.f8,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bE.prototype
C.i=W.c2.prototype
C.O=W.aJ.prototype
C.R=J.a.prototype
C.a=J.aV.prototype
C.S=J.dQ.prototype
C.e=J.dR.prototype
C.j=J.dS.prototype
C.c=J.bO.prototype
C.b=J.br.prototype
C.T=J.bs.prototype
C.Z=W.cU.prototype
C.B=J.ig.prototype
C.d=P.ce.prototype
C.a_=W.bg.prototype
C.C=W.ek.prototype
C.r=J.bU.prototype
C.D=W.bk.prototype
C.E=W.dc.prototype
C.a0=new P.fN()
C.F=new P.fM()
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

C.M=new P.ie()
C.h=new P.js()
C.N=new P.ju()
C.f=new P.kb()
C.o=new P.b9(0)
C.P=new P.b9(5e6)
C.Q=new P.hp("element",!0,!1,!1,!1)
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
C.Y=new H.fV(0,{},C.x,[P.h,P.h])})()
var v={mangledGlobalNames:{m:"int",p:"double",ad:"num",h:"String",S:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.P,args:[F.ae,P.p,P.p]},{func:1,ret:-1,args:[P.m,[P.i,E.ar]]},{func:1,ret:P.P,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.P,args:[D.A]},{func:1,ret:P.P,args:[F.aa]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.P,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:V.Z,args:[P.p]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.m,[P.i,M.aG]]},{func:1,ret:-1,args:[P.m,[P.i,U.ai]]},{func:1,args:[,]},{func:1,ret:P.S,args:[W.G]},{func:1,ret:P.p},{func:1,ret:P.S,args:[W.aF]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.i,D.af]]},{func:1,ret:P.S,args:[W.V,P.h,P.h,W.bV]},{func:1,ret:P.P,args:[,]},{func:1,ret:-1,args:[P.m,[P.i,V.aw]]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[W.bb]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:P.P,args:[P.ad]},{func:1,ret:W.V,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[P.m]},{func:1,args:[,P.h]},{func:1,ret:P.P,args:[P.h,,]},{func:1,args:[P.h]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:P.S,args:[[P.i,D.af]]},{func:1,ret:[P.z,P.h,P.h],args:[[P.z,P.h,P.h],P.h]},{func:1,ret:P.m,args:[A.aI,A.aI]},{func:1,ret:P.m,args:[A.aL,A.aL]},{func:1,ret:P.m,args:[A.aM,A.aM]},{func:1,ret:[P.aR,,],args:[,]},{func:1,ret:P.P,args:[P.bh]},{func:1,ret:P.S,args:[V.bG]},{func:1,ret:P.P,args:[,],opt:[P.az]},{func:1,ret:P.T,args:[,,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b6=0
$.cz=null
$.md=null
$.lS=!1
$.np=null
$.ne=null
$.nw=null
$.kV=null
$.l_=null
$.m0=null
$.cm=null
$.ds=null
$.dt=null
$.lT=!1
$.a2=C.f
$.aB=[]
$.bp=null
$.lw=null
$.mi=null
$.mh=null
$.df=P.lD(P.h,P.bK)
$.mv=null
$.mz=null
$.cV=null
$.mE=null
$.mR=null
$.mU=null
$.mT=null
$.jv=null
$.jw=null
$.jx=null
$.mS=null
$.my=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qq","nC",function(){return H.no("_$dart_dartClosure")})
u($,"qr","m5",function(){return H.no("_$dart_js")})
u($,"qw","nD",function(){return H.bj(H.j8({
toString:function(){return"$receiver$"}}))})
u($,"qx","nE",function(){return H.bj(H.j8({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qy","nF",function(){return H.bj(H.j8(null))})
u($,"qz","nG",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qC","nJ",function(){return H.bj(H.j8(void 0))})
u($,"qD","nK",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qB","nI",function(){return H.bj(H.mM(null))})
u($,"qA","nH",function(){return H.bj(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qF","nM",function(){return H.bj(H.mM(void 0))})
u($,"qE","nL",function(){return H.bj(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qW","m6",function(){return P.p_()})
u($,"qI","nN",function(){return P.oW()})
u($,"qX","nR",function(){return H.ou(H.cl(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qZ","nT",function(){return P.oI("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"r_","nU",function(){return P.po()})
u($,"qY","nS",function(){return P.mn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qP","nQ",function(){return Z.aQ(0)})
u($,"qJ","nO",function(){return Z.aQ(511)})
u($,"qR","b4",function(){return Z.aQ(1)})
u($,"qQ","bB",function(){return Z.aQ(2)})
u($,"qL","bA",function(){return Z.aQ(4)})
u($,"qS","bC",function(){return Z.aQ(8)})
u($,"qT","bZ",function(){return Z.aQ(16)})
u($,"qM","dw",function(){return Z.aQ(32)})
u($,"qN","dx",function(){return Z.aQ(64)})
u($,"qO","nP",function(){return Z.aQ(96)})
u($,"qU","cw",function(){return Z.aQ(128)})
u($,"qK","bz",function(){return Z.aQ(256)})
u($,"qp","nB",function(){return new V.ha(1e-9)})
u($,"qo","M",function(){return $.nB()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cR,DataView:H.bP,ArrayBufferView:H.bP,Float32Array:H.cS,Float64Array:H.cS,Int16Array:H.i3,Int32Array:H.i4,Int8Array:H.i5,Uint16Array:H.i6,Uint32Array:H.i7,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cT,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fD,HTMLAnchorElement:W.dA,HTMLAreaElement:W.fE,HTMLBaseElement:W.cx,Blob:W.c0,HTMLBodyElement:W.bE,HTMLCanvasElement:W.c2,CanvasRenderingContext2D:W.cB,CDATASection:W.bF,CharacterData:W.bF,Comment:W.bF,ProcessingInstruction:W.bF,Text:W.bF,CSSNumericValue:W.cD,CSSUnitValue:W.cD,CSSPerspective:W.fW,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cE,MSStyleCSSProperties:W.cE,CSS2Properties:W.cE,CSSImageValue:W.b7,CSSKeywordValue:W.b7,CSSPositionValue:W.b7,CSSResourceValue:W.b7,CSSURLImageValue:W.b7,CSSStyleValue:W.b7,CSSMatrixComponent:W.b8,CSSRotation:W.b8,CSSScale:W.b8,CSSSkew:W.b8,CSSTranslation:W.b8,CSSTransformComponent:W.b8,CSSTransformValue:W.fY,CSSUnparsedValue:W.fZ,DataTransferItemList:W.h1,HTMLDivElement:W.aJ,DOMException:W.h2,ClientRectList:W.dK,DOMRectList:W.dK,DOMRectReadOnly:W.dL,DOMStringList:W.h3,DOMTokenList:W.h4,Element:W.V,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aK,FileList:W.cH,FileWriter:W.he,HTMLFormElement:W.hi,Gamepad:W.aU,History:W.hn,HTMLCollection:W.c6,HTMLFormControlsCollection:W.c6,HTMLOptionsCollection:W.c6,ImageData:W.bq,HTMLImageElement:W.cK,HTMLInputElement:W.cL,KeyboardEvent:W.bb,Location:W.dX,MediaList:W.hX,MessagePort:W.cP,MIDIInputMap:W.hY,MIDIOutputMap:W.i_,MimeType:W.aW,MimeTypeArray:W.i1,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aX,PluginArray:W.ii,RTCStatsReport:W.it,HTMLSelectElement:W.iw,SourceBuffer:W.aY,SourceBufferList:W.iH,SpeechGrammar:W.aZ,SpeechGrammarList:W.iI,SpeechRecognitionResult:W.b_,Storage:W.iL,CSSStyleSheet:W.aN,StyleSheet:W.aN,HTMLTableCellElement:W.bg,HTMLTableDataCellElement:W.bg,HTMLTableHeaderCellElement:W.bg,HTMLTableElement:W.ek,HTMLTableRowElement:W.iS,HTMLTableSectionElement:W.iT,HTMLTemplateElement:W.d3,TextTrack:W.b0,TextTrackCue:W.aO,VTTCue:W.aO,TextTrackCueList:W.iV,TextTrackList:W.iW,TimeRanges:W.j0,Touch:W.b1,TouchEvent:W.b2,TouchList:W.j4,TrackDefaultList:W.j5,CompositionEvent:W.bS,FocusEvent:W.bS,TextEvent:W.bS,UIEvent:W.bS,URL:W.jr,VideoTrackList:W.jJ,WheelEvent:W.bk,Window:W.dc,DOMWindow:W.dc,Attr:W.dd,CSSRuleList:W.jS,ClientRect:W.eF,DOMRect:W.eF,GamepadList:W.k6,NamedNodeMap:W.eX,MozNamedAttrMap:W.eX,SpeechRecognitionResultList:W.kk,StyleSheetList:W.ko,SVGLength:P.bc,SVGLengthList:P.hx,SVGNumber:P.bf,SVGNumberList:P.ic,SVGPointList:P.ik,SVGScriptElement:P.cY,SVGStringList:P.iR,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bi,SVGTransformList:P.j6,AudioBuffer:P.fH,AudioParamMap:P.fI,AudioTrackList:P.fK,AudioContext:P.c_,webkitAudioContext:P.c_,BaseAudioContext:P.c_,OfflineAudioContext:P.id,WebGLBuffer:P.dD,WebGLFramebuffer:P.dP,WebGLProgram:P.e9,WebGLRenderbuffer:P.eb,WebGL2RenderingContext:P.ce,WebGLShader:P.ed,WebGLTexture:P.el,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iJ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.ns,[])
else V.ns([])})})()
//# sourceMappingURL=test.dart.js.map
