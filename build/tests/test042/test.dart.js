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
a[c]=function(){a[c]=function(){H.nx(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kb(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jW:function jW(){},
ku:function(){return new P.hV("No element")},
dP:function(a,b,c,d,e){H.i(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.q,args:[e,e]})
if(c-b<=32)H.mk(a,b,c,d,e)
else H.mj(a,b,c,d,e)},
mk:function(a,b,c,d,e){var u,t,s,r,q
H.i(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.q,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aM(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
mj:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.i(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.q,args:[a6,a6]})
u=C.d.a4(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a4(a3+a4,2)
q=r-u
p=r+u
o=a2.length
if(t<0||t>=o)return H.d(a2,t)
n=a2[t]
if(q<0||q>=o)return H.d(a2,q)
m=a2[q]
if(r<0||r>=o)return H.d(a2,r)
l=a2[r]
if(p<0||p>=o)return H.d(a2,p)
k=a2[p]
if(s<0||s>=o)return H.d(a2,s)
j=a2[s]
if(J.aM(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aM(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aM(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aM(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aM(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aM(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aM(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aM(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aM(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.m(a2,t,n)
C.a.m(a2,r,l)
C.a.m(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.m(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.m(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.H(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.ad()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.m(a2,f,a2[h])
C.a.m(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aE()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.m(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.m(a2,h,a2[g])
C.a.m(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.m(a2,f,a2[g])
C.a.m(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.ad()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.m(a2,f,a2[h])
C.a.m(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aE()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aE()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ad()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.m(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.m(a2,h,a2[g])
C.a.m(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.m(a2,f,a2[g])
C.a.m(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.m(a2,a3,a2[o])
C.a.m(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.m(a2,a4,a2[o])
C.a.m(a2,o,k)
H.dP(a2,a3,h-2,a5,a6)
H.dP(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.H(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.H(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.m(a2,f,a2[h])
C.a.m(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ad()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.m(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.m(a2,h,a2[g])
C.a.m(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.m(a2,f,a2[g])
C.a.m(a2,g,e)}g=c
break}}}H.dP(a2,h,g,a5,a6)}else H.dP(a2,h,g,a5,a6)},
a2:function a2(a){this.a=a},
fv:function fv(){},
dy:function dy(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iK:function iK(a,b,c){this.a=a
this.b=b
this.$ti=c},
iL:function iL(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(){},
e0:function e0(){},
e_:function e_(){},
ce:function(a){var u,t=H.R(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
ng:function(a){return v.types[H.X(a)]},
nl:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iK},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.h(H.ba(a))
return u},
cC:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bY:function(a){return H.m5(a)+H.k8(H.bL(a),0,null)},
m5:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic5){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ce(t.length>1&&C.e.ba(t,0)===36?C.e.aT(t,1):t)},
kG:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
me:function(a){var u,t,s,r=H.c([],[P.q])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.ba(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bd(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.ba(s))}return H.kG(r)},
kH:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.ba(s))
if(s<0)throw H.h(H.ba(s))
if(s>65535)return H.me(a)}return H.kG(a)},
md:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bd(u,10))>>>0,56320|u&1023)}throw H.h(P.b_(a,0,1114111,null,null))},
bX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){var u=H.bX(a).getFullYear()+0
return u},
ma:function(a){var u=H.bX(a).getMonth()+1
return u},
m6:function(a){var u=H.bX(a).getDate()+0
return u},
m7:function(a){var u=H.bX(a).getHours()+0
return u},
m9:function(a){var u=H.bX(a).getMinutes()+0
return u},
mb:function(a){var u=H.bX(a).getSeconds()+0
return u},
m8:function(a){var u=H.bX(a).getMilliseconds()+0
return u},
E:function(a){throw H.h(H.ba(a))},
d:function(a,b){if(a==null)J.ch(a)
throw H.h(H.ca(a,b))},
ca:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,s,null)
u=H.X(J.ch(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,s,null,u)
return P.dJ(b,s)},
n9:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bZ(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bZ(a,c,!0,b,"end",u)
return new P.aN(!0,b,"end",null)},
ba:function(a){return new P.aN(!0,a,null,null)},
n4:function(a){if(typeof a!=="number")throw H.h(H.ba(a))
return a},
h:function(a){var u
if(a==null)a=new P.dG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ls})
u.name=""}else u.toString=H.ls
return u},
ls:function(){return J.aw(this.dartException)},
z:function(a){throw H.h(a)},
w:function(a){throw H.h(P.cn(a))},
b6:function(a){var u,t,s,r,q,p
a=H.lp(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ii:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kR:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kC:function(a,b){return new H.hs(a,b==null?null:b.method)},
jX:function(a,b){var u=b==null,t=u?null:b.method
return new H.fP(a,t,u?null:b.receiver)},
bM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bd(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jX(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kC(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lv()
q=$.lw()
p=$.lx()
o=$.ly()
n=$.lB()
m=$.lC()
l=$.lA()
$.lz()
k=$.lE()
j=$.lD()
i=r.ai(u)
if(i!=null)return f.$1(H.jX(H.R(u),i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.jX(H.R(u),i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kC(H.R(u),i))}}return f.$1(new H.it(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dR()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aN(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dR()
return a},
cc:function(a){var u
if(a==null)return new H.eD(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eD(a)},
nc:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
nk:function(a,b,c,d,e,f){H.k(a,"$ijS")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.x("Unsupported number of arguments for wrapped closure"))},
c9:function(a,b){var u
H.X(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nk)
a.$identity=u
return u},
lQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hW().constructor.prototype):Object.create(new H.ci(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aO
if(typeof t!=="number")return t.F()
$.aO=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ko(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.ng,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kn:H.jO
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ko(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lN:function(a,b,c,d){var u=H.jO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ko:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lN(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.F()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cj
return new Function(r+H.j(q==null?$.cj=H.fd("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.F()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.cj
return new Function(r+H.j(q==null?$.cj=H.fd("self"):q)+"."+H.j(u)+"("+o+");}")()},
lO:function(a,b,c,d){var u=H.jO,t=H.kn
switch(b?-1:a){case 0:throw H.h(H.mh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lP:function(a,b){var u,t,s,r,q,p,o,n=$.cj
if(n==null)n=$.cj=H.fd("self")
u=$.km
if(u==null)u=$.km=H.fd("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aO
if(typeof u!=="number")return u.F()
$.aO=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aO
if(typeof u!=="number")return u.F()
$.aO=u+1
return new Function(n+u+"}")()},
kb:function(a,b,c,d,e,f,g){return H.lQ(a,b,H.X(c),d,!!e,!!f,g)},
jO:function(a){return a.a},
kn:function(a){return a.c},
fd:function(a){var u,t,s,r=new H.ci("self","target","receiver","name"),q=J.jU(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.n0("boolean expression must not be null")
return a},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aL(a,"String"))},
o8:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aL(a,"double"))},
ll:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aL(a,"num"))},
lc:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aL(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aL(a,"int"))},
ln:function(a,b){throw H.h(H.aL(a,H.ce(H.R(b).substring(2))))},
nr:function(a,b){throw H.h(H.lM(a,H.ce(H.R(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.ln(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.nr(a,b)},
kg:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aL(a,"List<dynamic>"))},
nm:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.ln(a,b)},
lg:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
eZ:function(a,b){var u
if(typeof a=="function")return!0
u=H.lg(J.W(a))
if(u==null)return!1
return H.l3(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.k5)return a
$.k5=!0
try{if(H.eZ(a,b))return a
u=H.jF(b)
t=H.aL(a,u)
throw H.h(t)}finally{$.k5=!1}},
kc:function(a,b){if(a!=null&&!H.ka(a,b))H.z(H.aL(a,H.jF(b)))
return a},
aL:function(a,b){return new H.ij("TypeError: "+P.dk(a)+": type '"+H.l7(a)+"' is not a subtype of type '"+b+"'")},
lM:function(a,b){return new H.fe("CastError: "+P.dk(a)+": type '"+H.l7(a)+"' is not a subtype of type '"+b+"'")},
l7:function(a){var u,t=J.W(a)
if(!!t.$icl){u=H.lg(t)
if(u!=null)return H.jF(u)
return"Closure"}return H.bY(a)},
n0:function(a){throw H.h(new H.iM(a))},
nx:function(a){throw H.h(new P.fo(H.R(a)))},
mh:function(a){return new H.hH(a)},
lh:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bL:function(a){if(a==null)return
return a.$ti},
o9:function(a,b,c){return H.cd(a["$a"+H.j(c)],H.bL(b))},
d0:function(a,b,c,d){var u
H.R(c)
H.X(d)
u=H.cd(a["$a"+H.j(c)],H.bL(b))
return u==null?null:u[d]},
au:function(a,b,c){var u
H.R(b)
H.X(c)
u=H.cd(a["$a"+H.j(b)],H.bL(a))
return u==null?null:u[c]},
A:function(a,b){var u
H.X(b)
u=H.bL(a)
return u==null?null:u[b]},
jF:function(a){return H.bK(a,null)},
bK:function(a,b){var u,t
H.i(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.k8(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mA(a,b)
if('futureOr' in a)return"FutureOr<"+H.bK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mA:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.e.F(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bK(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bK(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bK(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bK(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nb(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.R(b[h])
j=j+i+H.bK(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
k8:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bk("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bK(p,c)}return"<"+u.i(0)+">"},
cd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k9:function(a,b,c,d){var u,t
H.R(b)
H.kg(c)
H.R(d)
if(a==null)return!1
u=H.bL(a)
t=J.W(a)
if(t[b]==null)return!1
return H.la(H.cd(t[d],u),null,c,null)},
i:function(a,b,c,d){H.R(b)
H.kg(c)
H.R(d)
if(a==null)return a
if(H.k9(a,b,c,d))return a
throw H.h(H.aL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ce(b.substring(2))+H.k8(c,0,null),v.mangledGlobalNames)))},
la:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aF(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aF(a[t],b,c[t],d))return!1
return!0},
o6:function(a,b,c){return a.apply(b,H.cd(J.W(b)["$a"+H.j(c)],H.bL(b)))},
lj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="N"||a===-1||a===-2||H.lj(u)}return!1},
ka:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="N"||b===-1||b===-2||H.lj(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ka(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eZ(a,b)}u=J.W(a).constructor
t=H.bL(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aF(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.ka(a,b))throw H.h(H.aL(a,H.jF(b)))
return a},
aF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aF(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.l3(a,b,c,d)
if('func' in a)return c.name==="jS"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aF("type" in a?a.type:l,b,s,d)
else if(H.aF(a,b,s,d))return!0
else{if(!('$i'+"cr" in t.prototype))return!1
r=t.prototype["$a"+"cr"]
q=H.cd(r,u?a.slice(1):l)
return H.aF(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.la(H.cd(m,u),b,p,d)},
l3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aF(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aF(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aF(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aF(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.np(h,b,g,d)},
np:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aF(c[s],d,a[s],b))return!1}return!0},
o7:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
nn:function(a){var u,t,s,r,q=H.R($.li.$1(a)),p=$.jy[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.R($.l9.$2(a,q))
if(q!=null){p=$.jy[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jE(u)
$.jy[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jD[q]=u
return u}if(s==="-"){r=H.jE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lm(a,u)
if(s==="*")throw H.h(P.kS(q))
if(v.leafTags[q]===true){r=H.jE(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lm(a,u)},
lm:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kh(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jE:function(a){return J.kh(a,!1,null,!!a.$iK)},
no:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jE(u)
else return J.kh(u,c,null,null)},
ni:function(){if(!0===$.kf)return
$.kf=!0
H.nj()},
nj:function(){var u,t,s,r,q,p,o,n
$.jy=Object.create(null)
$.jD=Object.create(null)
H.nh()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lo.$1(q)
if(p!=null){o=H.no(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nh:function(){var u,t,s,r,q,p,o=C.v()
o=H.c8(C.w,H.c8(C.x,H.c8(C.n,H.c8(C.n,H.c8(C.y,H.c8(C.z,H.c8(C.A(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.li=new H.jA(r)
$.l9=new H.jB(q)
$.lo=new H.jC(p)},
c8:function(a,b){return a(b)||b},
lX:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fH("Illegal RegExp pattern ("+String(r)+")",a))},
nv:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
na:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lp:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lq:function(a,b,c){var u=H.nw(a,b,c)
return u},
nw:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lp(b),'g'),H.na(c))},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hs:function hs(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
jK:function jK(a){this.a=a},
eD:function eD(a){this.a=a
this.b=null},
cl:function cl(){},
i3:function i3(){},
hW:function hW(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
fe:function fe(a){this.a=a},
hH:function hH(a){this.a=a},
iM:function iM(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fT:function fT(a,b){this.a=a
this.b=b
this.c=null},
dx:function dx(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function(a){return a},
bJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.ca(b,a))},
mz:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.n9(a,b,c))
return b},
cz:function cz(){},
dD:function dD(){},
cy:function cy(){},
dE:function dE(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
dF:function dF(){},
hq:function hq(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
nb:function(a){return J.kv(a?Object.keys(a):[],null)},
nq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jz:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kf==null){H.ni()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kS("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kj()]
if(r!=null)return r
r=H.nn(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.kj(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
lW:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.b_(a,0,4294967295,"length",null))
return J.kv(new Array(a),b)},
kv:function(a,b){return J.jU(H.c(a,[b]))},
jU:function(a){H.kg(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ds.prototype
return J.dr.prototype}if(typeof a=="string")return J.bU.prototype
if(a==null)return J.dt.prototype
if(typeof a=="boolean")return J.fN.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.O)return a
return J.jz(a)},
kd:function(a){if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.O)return a
return J.jz(a)},
ke:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.O)return a
return J.jz(a)},
nd:function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c5.prototype
return a},
ne:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c5.prototype
return a},
nf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bD.prototype
return a}if(a instanceof P.O)return a
return J.jz(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).p(a,b)},
aM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.nd(a).aE(a,b)},
f_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kd(a).j(a,b)},
lJ:function(a,b,c,d){return J.nf(a).hR(a,b,c,d)},
jM:function(a,b){return J.ne(a).hY(a,b)},
kl:function(a,b){return J.ke(a).H(a,b)},
lK:function(a,b){return J.ke(a).L(a,b)},
bN:function(a){return J.W(a).gI(a)},
cg:function(a){return J.ke(a).gT(a)},
ch:function(a){return J.kd(a).gk(a)},
aw:function(a){return J.W(a).i(a)},
a:function a(){},
fN:function fN(){},
dt:function dt(){},
du:function du(){},
hw:function hw(){},
c5:function c5(){},
bD:function bD(){},
aV:function aV(a){this.$ti=a},
jV:function jV(a){this.$ti=a},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bT:function bT(){},
ds:function ds(){},
dr:function dr(){},
bU:function bU(){}},P={
mq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n1()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c9(new P.iO(s),1)).observe(u,{childList:true})
return new P.iN(s,u,t)}else if(self.setImmediate!=null)return P.n2()
return P.n3()},
mr:function(a){self.scheduleImmediate(H.c9(new P.iP(H.l(a,{func:1,ret:-1})),0))},
ms:function(a){self.setImmediate(H.c9(new P.iQ(H.l(a,{func:1,ret:-1})),0))},
mt:function(a){P.k0(C.j,H.l(a,{func:1,ret:-1}))},
k0:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.d.a4(a.a,1000)
return P.mw(u<0?0:u,b)},
kQ:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b4]})
u=C.d.a4(a.a,1000)
return P.mx(u<0?0:u,b)},
mw:function(a,b){var u=new P.eJ()
u.eE(a,b)
return u},
mx:function(a,b){var u=new P.eJ()
u.eF(a,b)
return u},
mu:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.iY(b),new P.iZ(b),null)}catch(s){u=H.bM(s)
t=H.cc(s)
P.ns(new P.j_(b,u,t))}},
l0:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaE")
if(u>=4){t=b.bL()
b.a=a.a
b.c=a.c
P.cO(b,t)}else{t=H.k(b.c,"$ib9")
b.a=2
b.c=a
a.d9(t)}},
cO:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iak")
g=g.b
r=s.a
q=s.b
g.toString
P.jq(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cO(h.a,b)}g=h.a
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
if(m){H.k(o,"$iak")
g=g.b
r=o.a
q=o.b
g.toString
P.jq(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.j3(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j2(u,b,o).$0()}else if((g&2)!==0)new P.j1(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.W(g).$icr){if(g.a>=4){k=H.k(q.c,"$ib9")
q.c=null
b=q.bc(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l0(g,q)
return}}j=b.b
k=H.k(j.c,"$ib9")
j.c=null
b=j.bc(k)
g=u.a
r=u.b
if(!g){H.F(r,H.A(j,0))
j.a=4
j.c=r}else{H.k(r,"$iak")
j.a=8
j.c=r}h.a=j
g=j}},
mX:function(a,b){if(H.eZ(a,{func:1,args:[P.O,P.aq]}))return H.l(a,{func:1,ret:null,args:[P.O,P.aq]})
if(H.eZ(a,{func:1,args:[P.O]}))return H.l(a,{func:1,ret:null,args:[P.O]})
throw H.h(P.jN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mW:function(){var u,t
for(;u=$.c7,u!=null;){$.d_=null
t=u.b
$.c7=t
if(t==null)$.cZ=null
u.a.$0()}},
n_:function(){$.k6=!0
try{P.mW()}finally{$.d_=null
$.k6=!1
if($.c7!=null)$.kk().$1(P.lb())}},
l6:function(a){var u=new P.e7(H.l(a,{func:1,ret:-1}))
if($.c7==null){$.c7=$.cZ=u
if(!$.k6)$.kk().$1(P.lb())}else $.cZ=$.cZ.b=u},
mZ:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.c7
if(u==null){P.l6(a)
$.d_=$.cZ
return}t=new P.e7(a)
s=$.d_
if(s==null){t.b=u
$.c7=$.d_=t}else{t.b=s.b
$.d_=s.b=t
if(t.b==null)$.cZ=t}},
ns:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.V
if(C.f===u){P.js(t,t,C.f,a)
return}u.toString
P.js(t,t,u,H.l(u.bU(a),s))},
kP:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.V
if(u===C.f){u.toString
return P.k0(a,b)}return P.k0(a,H.l(u.bU(b),t))},
mp:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b4]}
H.l(b,s)
u=$.V
if(u===C.f){u.toString
return P.kQ(a,b)}t=u.dq(b,P.b4)
$.V.toString
return P.kQ(a,H.l(t,s))},
jq:function(a,b,c,d,e){var u={}
u.a=d
P.mZ(new P.jr(u,e))},
l4:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
l5:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.F(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mY:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
js:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bU(d):c.hV(d,-1)
P.l6(d)},
iO:function iO(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
eJ:function eJ(){this.c=0},
jj:function jj(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aE:function aE(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iX:function iX(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a){this.a=a
this.b=null},
hZ:function hZ(){},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
cG:function cG(){},
i_:function i_(){},
b4:function b4(){},
ak:function ak(a,b){this.a=a
this.b=b},
jl:function jl(){},
jr:function jr(a,b){this.a=a
this.b=b},
jb:function jb(){},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b){this.a=a
this.b=b},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function(a,b){return new H.Y([a,b])},
m_:function(a){return H.nc(a,new H.Y([null,null]))},
m0:function(a){return new P.j8([a])},
k4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l2:function(a,b,c){var u=new P.j9(a,b,[c])
u.c=a.e
return u},
lV:function(a,b,c){var u,t
if(P.k7(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.as,a)
try{P.mB(a,u)}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=P.kL(b,H.nm(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jT:function(a,b,c){var u,t
if(P.k7(a))return b+"..."+c
u=new P.bk(b)
C.a.h($.as,a)
try{t=u
t.a=P.kL(t.a,a,", ")}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k7:function(a){var u,t
for(u=$.as.length,t=0;t<u;++t)if(a===$.as[t])return!0
return!1},
mB:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.o],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.j(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.A();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kx:function(a){var u,t={}
if(P.k7(a))return"{...}"
u=new P.bk("")
try{C.a.h($.as,a)
u.a+="{"
t.a=!0
J.lK(a,new P.fZ(t,u))
u.a+="}"}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j8:function j8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cP:function cP(a){this.a=a
this.c=this.b=null},
j9:function j9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fV:function fV(){},
y:function y(){},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
af:function af(){},
jf:function jf(){},
em:function em(){},
cm:function cm(){},
db:function db(){},
fw:function fw(){},
iw:function iw(){},
ix:function ix(){},
jk:function jk(a){this.b=0
this.c=a},
lU:function(a){if(a instanceof H.cl)return a.i(0)
return"Instance of '"+H.bY(a)+"'"},
m1:function(a,b,c){var u,t
H.F(b,c)
u=J.lW(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
kw:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.cg(a);u.A();)C.a.h(s,H.F(u.gK(u),c))
if(b)return s
return H.i(J.jU(s),"$ib",t,"$ab")},
jZ:function(a){var u,t,s=P.q
H.i(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.i(a,"$iaV",[s],"$aaV")
u=a.length
t=P.kJ(0,null,u)
return H.kH(t<u?C.a.cE(a,0,t):a)}return P.ml(a,0,null)},
ml:function(a,b,c){var u,t,s
H.i(a,"$ie",[P.q],"$ae")
u=J.cg(a)
for(t=0;t<b;++t)if(!u.A())throw H.h(P.b_(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gK(u))
return H.kH(s)},
mf:function(a){return new H.fO(a,H.lX(a,!1,!0,!1))},
kL:function(a,b,c){var u=J.cg(b)
if(!u.A())return a
if(c.length===0){do a+=H.j(u.gK(u))
while(u.A())}else{a+=H.j(u.gK(u))
for(;u.A();)a=a+c+H.j(u.gK(u))}return a},
my:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.q],"$ab")
if(c===C.o){u=$.lI().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.hZ(H.F(b,H.au(c,"cm",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.md(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lR:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dd:function(a){if(a>=10)return""+a
return"0"+a},
kq:function(a,b){return new P.bx(1e6*b+1000*a)},
dk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lU(a)},
lL:function(a){return new P.aN(!1,null,null,a)},
jN:function(a,b,c){return new P.aN(!0,a,b,c)},
dJ:function(a,b){return new P.bZ(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.bZ(b,c,!0,a,d,"Invalid value")},
kJ:function(a,b,c){if(0>a||a>c)throw H.h(P.b_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.b_(b,a,c,"end",null))
return b}return c},
kI:function(a,b){if(typeof a!=="number")return a.ad()
if(a<0)throw H.h(P.b_(a,0,null,b,null))},
T:function(a,b,c,d,e){var u=H.X(e==null?J.ch(b):e)
return new P.fM(u,!0,a,c,"Index out of range")},
ao:function(a){return new P.iu(a)},
kS:function(a){return new P.is(a)},
cn:function(a){return new P.fi(a)},
x:function(a){return new P.ef(a)},
ki:function(a){H.nq(a)},
a_:function a_(){},
ax:function ax(a,b){this.a=a
this.b=b},
n:function n(){},
bx:function bx(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
by:function by(){},
f4:function f4(){},
dG:function dG(){},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fM:function fM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iu:function iu(a){this.a=a},
is:function is(a){this.a=a},
hV:function hV(a){this.a=a},
fi:function fi(a){this.a=a},
hv:function hv(){},
dR:function dR(){},
fo:function fo(a){this.a=a},
ef:function ef(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
q:function q(){},
e:function e(){},
aU:function aU(){},
b:function b(){},
G:function G(){},
N:function N(){},
ab:function ab(){},
O:function O(){},
aq:function aq(){},
o:function o(){},
bk:function bk(a){this.a=a},
n7:function(a){var u,t=J.W(a)
if(!!t.$ibz){u=t.gdz(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eO(a.data,a.height,a.width)},
n6:function(a){if(a instanceof P.eO)return{data:a.a,height:a.b,width:a.c}
return a},
bp:function(a){var u,t,s,r,q
if(a==null)return
u=P.lZ(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=H.R(t[r])
u.m(0,q,a[q])}return u},
n5:function(a){var u={}
a.L(0,new P.jt(u))
return u},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mv:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ja:function ja(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
fR:function fR(){},
bi:function bi(){},
ht:function ht(){},
hz:function hz(){},
i2:function i2(){},
r:function r(){},
bn:function bn(){},
ig:function ig(){},
ek:function ek(){},
el:function el(){},
eu:function eu(){},
ev:function ev(){},
eF:function eF(){},
eG:function eG(){},
eM:function eM(){},
eN:function eN(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bO:function bO(){},
hu:function hu(){},
e8:function e8(){},
d6:function d6(){},
dm:function dm(){},
dI:function dI(){},
dL:function dL(){},
c_:function c_(){},
dN:function dN(){},
dS:function dS(){},
dZ:function dZ(){},
hU:function hU(){},
eB:function eB(){},
eC:function eC(){}},W={
jP:function(){var u=document.createElement("canvas")
return u},
lT:function(a){H.k(a,"$if")
return"wheel"},
j6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l1:function(a,b,c,d){var u=W.j6(W.j6(W.j6(W.j6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.l8(new W.iW(c),W.m)
if(u!=null&&!0)J.lJ(a,b,u,!1)
return new W.iV(a,b,u,!1,[e])},
l8:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.f)return a
return u.dq(a,b)},
t:function t(){},
f0:function f0(){},
f2:function f2(){},
f3:function f3(){},
d5:function d5(){},
bQ:function bQ(){},
ck:function ck(){},
bv:function bv(){},
co:function co(){},
fk:function fk(){},
Q:function Q(){},
cp:function cp(){},
fl:function fl(){},
aP:function aP(){},
aQ:function aQ(){},
fm:function fm(){},
fn:function fn(){},
fp:function fp(){},
df:function df(){},
fq:function fq(){},
dg:function dg(){},
dh:function dh(){},
fr:function fr(){},
fs:function fs(){},
iS:function iS(a,b){this.a=a
this.b=b},
a3:function a3(){},
m:function m(){},
f:function f(){},
aS:function aS(){},
fB:function fB(){},
fC:function fC(){},
fG:function fG(){},
aT:function aT(){},
fK:function fK(){},
bS:function bS(){},
bz:function bz(){},
ct:function ct(){},
aW:function aW(){},
fW:function fW(){},
he:function he(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hh:function hh(){},
hi:function hi(a){this.a=a},
aY:function aY(){},
hj:function hj(){},
ad:function ad(){},
iR:function iR(a){this.a=a},
L:function L(){},
cA:function cA(){},
aZ:function aZ(){},
hx:function hx(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
b0:function b0(){},
hS:function hS(){},
b1:function b1(){},
hT:function hT(){},
b2:function b2(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
aH:function aH(){},
b3:function b3(){},
aI:function aI(){},
i4:function i4(){},
i5:function i5(){},
ia:function ia(){},
b5:function b5(){},
aK:function aK(){},
id:function id(){},
ie:function ie(){},
bH:function bH(){},
iv:function iv(){},
iJ:function iJ(){},
b8:function b8(){},
cN:function cN(){},
iT:function iT(){},
ea:function ea(){},
j5:function j5(){},
er:function er(){},
jg:function jg(){},
jh:function jh(){},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iW:function iW(a){this.a=a},
C:function C(){},
dl:function dl(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
cU:function cU(){},
cV:function cV(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
cW:function cW(){},
cX:function cX(){},
eK:function eK(){},
eL:function eL(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){}},O={
fg:function(a){var u=new O.S([a])
u.b9(a)
return u},
S:function S(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cv:function cv(){this.b=this.a=null},
ks:function(a,b){var u,t,s,r=new O.dq()
r.r=0
r.scs(null)
r.sbV(null)
if(a==null){u=$.kT
if(u==null){u=new V.P(1,0)
$.kT=u
t=u}else t=u}else t=a
if(!J.H(r.d,t)){s=r.d
r.d=t
u=new D.u("blurDirection",s,t,[V.P])
u.b=!0
r.w(u)}r.sdv(b)
r.sbW(null)
r.sbX(0)
return r},
h1:function(){var u,t,s=new O.dC()
s.seM(O.fg(V.a6))
s.e.aF(s.gfm(),s.gfo())
u=new O.aX(s,"emission")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
s.f=u
u=new O.aX(s,"ambient")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
s.r=u
u=new O.aX(s,"diffuse")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
s.x=u
u=new O.aX(s,"invDiffuse")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
s.y=u
u=new O.h7(s,"specular")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
u.ch=100
s.z=u
u=new O.h3(s,"bump")
u.c=new A.al(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.aX(s,"reflect")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
s.cx=u
u=new O.h6(s,"refract")
u.c=new A.al(!1,!1,!1)
u.f=new V.a0(0,0,0)
u.ch=1
s.cy=u
u=new O.h2(s,"alpha")
u.c=new A.al(!1,!1,!1)
u.f=1
s.db=u
u=new D.dw()
u.b9(D.ac)
u.sez(H.c([],[D.de]))
u.shg(H.c([],[D.bE]))
u.seB(H.c([],[D.dQ]))
u.y=u.x=null
u.cA(u.gfk(),u.gh0(),u.gh4())
s.dx=u
t=new O.h5()
t.b=new V.a1(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.I():t
u.h(0,s.ghp())
u=s.dx
t=u.y
u=t==null?u.y=D.I():t
u.h(0,s.ga1())
s.fr=null
return s},
kN:function(){var u,t,s,r=new O.dU()
r.a=new V.a1(0,0,0,0)
r.sf_(O.fg(O.aJ))
r.c.aF(r.gfF(),r.gfH())
r.d=0
r.e=null
r.r=r.f=C.i
u=new V.a1(0,0,0,0)
if(!r.a.p(0,u)){t=r.a
r.a=u
s=new D.u("backColor",t,u,[V.a1])
s.b=!0
r.w(s)}r.sdr(C.i)
return r},
k_:function(a,b){var u,t,s,r,q=new O.aJ(),p=q.a
q.a=b
b.gl().h(0,q.ga1())
u=new D.u("texture",p,q.a,[T.c0])
u.b=!0
q.w(u)
t=a==null?V.bf():a
if(!J.H(q.b,t)){p=q.b
q.b=t
u=new D.u("colorMatrix",p,t,[V.a6])
u.b=!0
q.w(u)}s=V.dK()
if(!J.H(q.c,s)){p=q.c
q.c=s
u=new D.u("source",p,s,[V.bG])
u.b=!0
q.w(u)}r=V.dK()
if(!J.H(q.d,r)){p=q.d
q.d=r
u=new D.u("destination",p,r,[V.bG])
u.b=!0
q.w(u)}if(q.e!==!1){q.e=!1
u=new D.u("flip",!0,!1,[P.a_])
u.b=!0
q.w(u)}q.f=null
return q},
dq:function dq(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
h2:function h2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cu:function cu(){},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aX:function aX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(){var _=this
_.e=_.d=_.c=_.b=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bl:function bl(){},
dU:function dU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aJ:function aJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
di:function(){var u=new E.am()
u.a=""
u.b=!0
u.sey(0,O.fg(E.am))
u.y.aF(u.gig(),u.gij())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saG(0,null)
u.sac(null)
u.sau(null)
return u},
mg:function(a,b){var u=new E.hB(a)
u.eu(a,b)
return u},
mo:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibQ)return E.kO(a,!0,!0,!0,!1)
u=W.jP()
t=u.style
t.width="100%"
t.height="100%"
s.gdt(a).h(0,u)
return E.kO(u,!0,!0,!0,!1)},
kO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dV(),j=H.k(C.h.cz(a,"webgl2",P.m_(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic_")
if(j==null)H.z(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mg(j,a)
u=new T.i7(j)
H.X(j.getParameter(3379))
u.c=H.X(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e1(a)
t=new X.fQ()
t.c=new X.at(!1,!1,!1)
t.shj(P.m0(P.q))
u.b=t
t=new X.hk(u)
t.f=0
t.r=V.bj()
t.x=V.bj()
t.ch=t.Q=1
u.c=t
t=new X.fX(u)
t.r=0
t.x=V.bj()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ic(u)
t.f=V.bj()
t.r=V.bj()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf0(H.c([],[[P.cG,P.O]]))
t=u.z
s=document
r=W.ad
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.l(u.gfz(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.l(u.gfJ(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.l(u.gfq(),o),!1,p))
t=u.z
n=W.aW
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.l(u.gfN(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.l(u.gfL(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.l(u.gfR(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.l(u.gfV(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.l(u.gfT(),q),!1,r))
n=u.z
m=W.b8;(n&&C.a).h(n,W.aa(a,H.R(W.lT(a)),H.l(u.gfX(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.l(u.gfB(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.l(u.gfD(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.l(u.gfZ(),o),!1,p))
p=u.z
o=W.aK
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.l(u.ghe(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.l(u.gha(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.l(u.ghc(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.dc()
return k},
fc:function fc(){},
am:function am(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dV:function dV(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i9:function i9(a){this.a=a}},Z={
k2:function(a,b,c){var u
H.i(c,"$ib",[P.q],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c6(c)),35044)
a.bindBuffer(b,null)
return new Z.e6(b,u)},
aD:function(a){return new Z.b7(a)},
e6:function e6(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cM:function cM(a){this.a=a},
bu:function bu(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
I:function(){var u=new D.aR()
u.sX(null)
u.sas(null)
u.c=null
u.d=0
return u},
ff:function ff(){},
aR:function aR(){var _=this
_.d=_.c=_.b=_.a=null},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
v:function v(){this.b=null},
bB:function bB(a){this.b=null
this.$ti=a},
bC:function bC(a){this.b=null
this.$ti=a},
u:function u(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
de:function de(){},
ac:function ac(){},
dw:function dw(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bE:function bE(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},fQ:function fQ(){var _=this
_.d=_.c=_.b=_.a=null},dz:function dz(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fX:function fX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bg:function bg(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hk:function hk(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cx:function cx(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},dX:function dX(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ic:function ic(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e1:function e1(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fb:function(a,b,c,d){var u,t,s,r,q=new X.fa()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kM(null)
q.cx=new V.a1(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.dK()
q.sam(0,512)
q.sah(0,512)
u=new V.a1(0,0,0,1)
if(!q.cx.p(0,u)){t=q.cx
q.cx=u
s=new D.u("color",t,u,[V.a1])
s.b=!0
q.W(s)}if(q.cy!==d){q.cy=d
s=new D.u("clearColor",!d,d,[P.a_])
s.b=!0
q.W(s)}s=q.db
if(!(Math.abs(s-2000)<$.D().a)){q.db=2000
s=new D.u("depth",s,2000,[P.n])
s.b=!0
q.W(s)}if(!q.f){q.f=!0
s=new D.u("autoResize",!1,!0,[P.a_])
s.b=!0
q.W(s)}s=q.r
if(!(Math.abs(s-b)<$.D().a)){q.r=b
s=new D.u("autoResizeScalarX",s,b,[P.n])
s.b=!0
q.W(s)}s=q.x
if(!(Math.abs(s-c)<$.D().a)){q.x=c
s=new D.u("autoResizeScalarY",s,c,[P.n])
s.b=!0
q.W(s)}r=V.dK()
if(!J.H(q.dy,r)){t=q.dy
q.dy=r
s=new D.u("region",t,r,[V.bG])
s.b=!0
q.W(s)}return q},
kr:function(a){var u=new X.fI(),t=new V.a1(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.dK()
u.r=t
return u},
fa:function fa(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){},
fI:function fI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(){this.b=this.a=null},
dH:function dH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){}},V={
jL:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.ei(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.e.aj("null",c)
return C.e.aj(C.c.ee(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
cb:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.n],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.w)(a),++r){q=V.M(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.m(u,p,C.e.aj(u[p],s))}return u},
d1:function(a){return C.c.iG(Math.pow(2,C.G.cc(Math.log(H.n4(a))/Math.log(2))))},
bf:function(){var u=$.cw
return u==null?$.cw=V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kB:function(a,b,c,d){return V.aG(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jY:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aG(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kz:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aG(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kA:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aG(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bj:function(){var u=$.kF
return u==null?$.kF=new V.Z(0,0):u},
m4:function(){var u=$.cB
return u==null?$.cB=new V.a5(0,0,0):u},
dK:function(){var u=$.cD
return u==null?$.cD=V.hA(0,0,1,1):u},
hA:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bG(a,b,c,d)},
cL:function(){var u=$.kY
return u==null?$.kY=new V.J(0,0,0):u},
l_:function(){var u=$.kZ
return u==null?$.kZ=new V.bo(1,0.00390625,0.0000152587890625,0):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
bV:function bV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a6:function a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function(a){var u=new V.hJ()
u.ev(a)
return u},
f1:function f1(){},
be:function be(){},
dA:function dA(){},
bh:function bh(){this.a=null},
hJ:function hJ(){this.a=null},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a){this.b=a
this.c=null},
ib:function ib(){this.c=this.b=this.a=null},
cK:function cK(a){this.b=a
this.a=this.c=null},
nt:function(a){P.mp(C.E,new V.jG(a))},
mi:function(a){var u=new V.hO()
u.ew(a,!0)
return u},
jG:function jG(a){this.a=a},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a}},U={
jQ:function(){var u=new U.fh()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jR:function(a){var u=new U.da()
u.a=a
return u},
kt:function(){var u=new U.cs()
u.b9(U.a7)
u.aF(u.geC(),u.gh2())
u.e=null
u.f=V.bf()
u.r=0
return u},
fh:function fh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cs:function cs(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a7:function a7(){},
dM:function dM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0="testCanvas",c1=null,c2="../resources/StarsCan.png",c3="../resources/Stars.png",c4="modifiers",c5=V.mi("Test 042"),c6=W.jP()
c6.className="pageLargeCanvas"
c6.id=c0
c5.a.appendChild(c6)
u=[P.o]
c5.dl(H.c(["Test of the Blum effect technique."],u))
c5.dl(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(c0)
if(t==null)H.z(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.mo(t,!0,!0,!0,!1)
r=U.kt()
c5=new U.dM()
c5.r=c5.f=c5.e=c5.d=c5.c=c5.b=c5.a=0
c5.seg(0)
c5.se6(0,0)
c5.sea(0)
u=c5.d
if(!(Math.abs(u-0)<$.D().a)){c5.d=0
u=new D.u("deltaYaw",u,0,[P.n])
u.b=!0
c5.E(u)}u=c5.e
if(!(Math.abs(u-0)<$.D().a)){c5.e=0
u=new D.u("deltaPitch",u,0,[P.n])
u.b=!0
c5.E(u)}u=c5.f
if(!(Math.abs(u-0.5)<$.D().a)){c5.f=0.5
u=new D.u("deltaRoll",u,0.5,[P.n])
u.b=!0
c5.E(u)}r.h(0,c5)
r.h(0,U.jR(V.jY(1.5707963267948966)))
q=E.di()
q.sau(r)
q.saG(0,F.nu(0.6))
c5=O.h1()
c5.f.saO(0,new V.a0(1,1,1))
q.sac(c5)
p=s.f.dV(c2,c2,c2,c2,c2,c2)
o=E.di()
o.sau(r)
o.saG(0,F.le(1.2,16,1.2))
c5=O.h1()
c5.x.saC(p)
c5.db.saC(p)
o.sac(c5)
n=E.di()
n.sau(r)
c5=F.le(1.2,16,1.2)
c5.bh()
n.saG(0,c5)
c5=O.h1()
u=c5.r
u.saO(0,new V.a0(0.6,0.6,0.6))
c5.x.saC(p)
c5.db.saC(p)
n.sac(c5)
m=s.f.dV(c3,c3,c3,c3,c3,c3)
l=new D.bE()
l.c=new V.a0(1,1,1)
l.r=1
l.y=l.x=0
l.z=!0
l.a=V.bf()
k=l.b
l.b=r
r.gl().h(0,l.gbq())
c5=new D.u("mover",k,l.b,[U.a7])
c5.b=!0
l.a7(c5)
j=new V.a0(1,1,1)
if(!l.c.p(0,j)){k=l.c
l.c=j
c5=new D.u("color",k,j,[V.a0])
c5.b=!0
l.a7(c5)}c5=l.d
if(c5!==m){if(c5!=null)c5.gl().C(0,l.gbq())
k=l.d
l.d=m
m.gl().h(0,l.gbq())
c5=new D.u("texture",k,l.d,[T.cI])
c5.b=!0
l.a7(c5)}i=V.l_()
if(!J.H(l.f,i)){k=l.f
l.f=i
c5=new D.u("shadowAdjust",k,i,[V.bo])
c5.b=!0
l.a7(c5)}c5=l.r
if(!(Math.abs(c5-0.5)<$.D().a)){l.r=0.5
c5=new D.u("attenuation0",c5,0.5,[P.n])
c5.b=!0
l.a7(c5)}c5=l.x
if(!(Math.abs(c5-0.05)<$.D().a)){l.x=0.05
c5=new D.u("attenuation1",c5,0.05,[P.n])
c5.b=!0
l.a7(c5)}c5=l.y
if(!(Math.abs(c5-0.025)<$.D().a)){l.y=0.025
c5=new D.u("attenuation2",c5,0.025,[P.n])
c5.b=!0
l.a7(c5)}h=E.di()
h.sau(U.jR(V.kB(10,10,10,1)))
c5=F.ld(1,c1,c1,1)
c5.bh()
h.saG(0,c5)
g=U.kt()
c5=s.r
u=new U.e3()
f=U.jQ()
f.scw(0,!0)
f.sci(6.283185307179586)
f.sck(0)
f.sa_(0,0)
f.scj(100)
f.sS(0)
f.sc3(0.5)
u.b=f
e=u.gaL()
f.gl().h(0,e)
f=U.jQ()
f.scw(0,!0)
f.sci(6.283185307179586)
f.sck(0)
f.sa_(0,0)
f.scj(100)
f.sS(0)
f.sc3(0.5)
u.c=f
f.gl().h(0,e)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
d=new X.at(!1,!1,!1)
k=u.d
u.d=d
f=[X.at]
e=new D.u(c4,k,d,f)
e.b=!0
u.E(e)
e=u.f
if(e!==!1){u.f=!1
e=new D.u("invertX",e,!1,[P.a_])
e.b=!0
u.E(e)}e=u.r
if(e!==!1){u.r=!1
e=new D.u("invertY",e,!1,[P.a_])
e.b=!0
u.E(e)}u.aX(c5)
g.h(0,u)
c5=s.r
u=new U.e2()
e=U.jQ()
e.scw(0,!0)
e.sci(6.283185307179586)
e.sck(0)
e.sa_(0,0)
e.scj(100)
e.sS(0)
e.sc3(0.2)
u.b=e
e.gl().h(0,u.gaL())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
d=new X.at(!0,!1,!1)
k=u.c
u.c=d
e=new D.u(c4,k,d,f)
e.b=!0
u.E(e)
u.aX(c5)
g.h(0,u)
c5=s.r
u=new U.e4()
u.c=0.01
u.e=u.d=0
d=new X.at(!1,!1,!1)
u.b=d
f=new D.u(c4,c1,d,f)
f.b=!0
u.E(f)
u.aX(c5)
g.h(0,u)
g.h(0,U.jR(V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=O.h1()
c.dx.h(0,l)
c5=c.r
c5.saO(0,new V.a0(0.05,0.05,0.05))
c5=c.x
c5.saO(0,new V.a0(0.7,0.7,0.7))
b=X.fb(!0,1,1,!0)
a=new M.dj()
a.a=!0
a.seP(0,O.fg(E.am))
a.e.aF(a.gft(),a.gfv())
a.y=a.x=a.r=a.f=null
a0=X.kr(c1)
a1=new X.dH()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.sau(c1)
c5=a1.c
if(!(Math.abs(c5-1.0471975511965976)<$.D().a)){a1.c=1.0471975511965976
c5=new D.u("fov",c5,1.0471975511965976,[P.n])
c5.b=!0
a1.W(c5)}c5=a1.d
if(!(Math.abs(c5-0.1)<$.D().a)){a1.d=0.1
c5=new D.u("near",c5,0.1,[P.n])
c5.b=!0
a1.W(c5)}c5=a1.e
if(!(Math.abs(c5-2000)<$.D().a)){a1.e=2000
c5=new D.u("far",c5,2000,[P.n])
c5.b=!0
a1.W(c5)}c5=a.b
if(c5!==a1){if(c5!=null)c5.gl().C(0,a.gU())
k=a.b
a.b=a1
a1.gl().h(0,a.gU())
c5=new D.u("camera",k,a.b,[X.bP])
c5.b=!0
a.P(c5)}a.saQ(0,a0)
a.sac(c1)
a.sac(c)
a.e.h(0,h)
a.e.h(0,q)
a.e.h(0,n)
a.e.h(0,o)
a.b.sau(g)
a.saQ(0,b)
a2=X.fb(!0,1,1,!1)
a3=O.kN()
c5=a3.c
u=b.ch
c5.h(0,O.k_(V.aG(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),u))
a4=M.fj(c1,c1)
a4.saQ(0,a2)
a4.sac(a3)
a5=M.kp(c1)
for(c5=H.au(a5,"S",0),u=[c5],f={func:1,ret:-1,args:[D.v]},e=[f],a6=[c5],a7=a2,a8=0;a8<4;++a8,a7=a9){a9=X.fb(!0,0.25,0.25,!1)
b0=new V.bo(10,10,10,1)
b1=a7.ch
b2=a2.ch
b3=new M.dn()
b3.a=!0
b3.c=X.fb(!0,1,1,!1)
b4=O.ks(c1,c1)
b5=b4.x
if(b5==null){b5=new D.aR()
b5.sX(c1)
b5.sas(c1)
b5.c=null
b5.d=0
b4.x=b5}b6=H.l(b3.gU(),f)
if(b5.a==null)b5.sX(H.c([],e))
b5=b5.a;(b5&&C.a).h(b5,b6)
b3.d=b4
b3.e=M.fj(b3.c,b4)
b4=b3.c.ch
b5=$.kU
b4=O.ks(b5==null?$.kU=new V.P(0,1):b5,b4)
b5=b4.x
if(b5==null){b5=new D.aR()
b5.sX(c1)
b5.sas(c1)
b5.c=null
b5.d=0
b4.x=b5}if(b5.a==null)b5.sX(H.c([],e))
b5=b5.a;(b5&&C.a).h(b5,b6)
b3.f=b4
b3.r=M.fj(c1,b4)
b3.d.sbX(0)
b3.f.sbX(0)
b3.d.sdv(b1)
b3.d.sbW(b2)
b3.f.sbW(b2)
b3.d.scs(c1)
b3.f.scs(c1)
b3.d.sbV(b0)
b3.f.sbV(b0)
b3.r.saQ(0,a9)
H.F(b3,c5)
if(H.B(a5.bI(H.c([b3],u)))){b0=a5.a
b7=b0.length
C.a.h(b0,b3)
b0=H.i(H.c([b3],u),"$ie",a6,"$ae")
b1=a5.c
if(b1!=null)b1.$2(b7,b0)}}b8=O.kN()
b8.sdr(C.q)
b8.c.h(0,O.k_(c1,b.ch))
b8.c.h(0,O.k_(c1,a7.ch))
b9=M.fj(c1,c1)
b9.sac(b8)
c5=M.kp(H.c([a,a4,a5,b9],[M.an]))
u=s.d
if(u!==c5){if(u!=null)u.gl().C(0,s.gcJ())
s.d=c5
c5.gl().h(0,s.gcJ())
s.cK()}V.nt(s)}},M={
kp:function(a){var u=new M.d9()
u.b9(M.an)
u.e=!0
u.f=!1
u.r=null
u.aF(u.gh6(),u.gh8())
if(a!=null)u.bS(0,a)
return u},
fj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i=new M.dc()
i.a=!0
u=E.di()
t=F.hK()
s=t.a
r=new V.J(-1,-1,1)
r=r.q(0,Math.sqrt(r.B(r)))
q=s.bf(new V.az(1,2,4,6),new V.a1(1,0,0,1),new V.a5(-1,-1,0),new V.Z(0,1),r,j)
s=t.a
r=new V.J(1,-1,1)
r=r.q(0,Math.sqrt(r.B(r)))
p=s.bf(new V.az(0,3,4,6),new V.a1(0,0,1,1),new V.a5(1,-1,0),new V.Z(1,1),r,j)
s=t.a
r=new V.J(1,1,1)
r=r.q(0,Math.sqrt(r.B(r)))
o=s.bf(new V.az(0,2,5,6),new V.a1(0,1,0,1),new V.a5(1,1,0),new V.Z(1,0),r,j)
s=t.a
r=V.bj()
n=new V.J(-1,1,1)
n=n.q(0,Math.sqrt(n.B(n)))
m=s.bf(new V.az(0,2,4,7),new V.a1(1,1,0,1),new V.a5(-1,1,0),r,n,j)
t.d.dj(H.c([q,p,o,m],[F.a9]))
t.at()
u.saG(0,t)
i.e=u
l=new X.fL()
k=i.b
i.b=l
l.gl().h(0,i.gU())
u=new D.u("camera",k,i.b,[X.bP])
u.b=!0
i.P(u)
i.saQ(0,a)
i.sac(b)
return i},
d9:function d9(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dc:function dc(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
an:function an(){}},A={
m2:function(a,b){var u=a.b0,t=new A.dB(b,u)
t.bp(b,u)
t.es(a,b)
return t},
m3:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.i(b0,"$ib",[A.ay],"$ab")
H.i(b1,"$ib",[A.aA],"$ab")
H.i(b2,"$ib",[A.aB],"$ab")
u="MaterialLight_"+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.w)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.w)(b1),++s)u+="_"+H.j(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.w)(b2),++s)u+="_"+H.j(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
for(t=b1.length,s=0;s<t;++s,q=!0)r+=b1[s].b
for(p=b2.length,s=0;s<p;++s,q=!0)r+=b2[s].b
if(!a7.a)p=a7.c
else p=!0
if(!p)if(!a8.a){p=a8.c
o=p}else o=!0
else o=!0
if(!a2.a)p=a2.c
else p=!0
if(!p){if(!a3.a)p=a3.c
else p=!0
if(!p){if(!a4.a)p=a4.c
else p=!0
if(!p)if(!a5.a)p=a5.c
else p=!0
else p=!0
n=p}else n=!0}else n=!0
p=!a5.a
if(p)m=a5.c
else m=!0
l=m||t>0||o
if(!a3.a)t=a3.c
else t=!0
if(!t){if(!a4.a)t=a4.c
else t=!0
if(!t){if(p)t=a5.c
else t=!0
k=t}else k=!0}else k=!0
if(!k){if(!a6.a)t=a6.c
else t=!0
j=t||o}else j=!0
if(!a6.a)i=a6.c
else i=!0
h=a1.c||a2.c||a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c
g=a0>0
f=j||i||l||!1
b=b&&h
e=$.av()
if(j){t=$.bs()
e=new Z.b7(e.a|t.a)}if(i){t=$.br()
e=new Z.b7(e.a|t.a)}if(h){t=$.bt()
e=new Z.b7(e.a|t.a)}if(g){t=$.bq()
e=new Z.b7(e.a|t.a)}return new A.h4(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
jo:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jp:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jo(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jJ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mF:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jo(b,t,"emission")
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
mC:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jp(b,t,"ambient")
b.a+="\n"},
mD:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jp(b,t,"diffuse")
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
mG:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jp(b,t,"invDiffuse")
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
mM:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jp(b,t,"specular")
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
mI:function(a,b){var u,t,s
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
mK:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jo(b,t,"reflect")
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
mL:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jo(b,t,"refract")
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
mE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jJ(t)
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
r=[P.o]
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
mJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jJ(t)
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
c.a=r+"\n"}r=[P.o]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
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
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
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
mN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jJ(t)
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
c.a=u+"\n"}u=[P.o]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
mH:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.o])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mO:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bk("")
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
A.mF(a,i)
A.mC(a,i)
A.mD(a,i)
A.mG(a,i)
A.mM(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mK(a,i)
A.mL(a,i)}A.mI(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.mE(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.mJ(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.w)(q),++n)A.mN(a,q[n],i)
A.mH(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.o])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(m,"lightAccum")
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aT(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aT(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.w)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aT(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"refract(refl)")
if(m.length<=0)C.a.h(m,"vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.u(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mP:function(a,b){var u,t,s
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
mR:function(a,b){var u
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
mQ:function(a,b){var u
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
mT:function(a,b){var u,t
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
mU:function(a,b){var u,t
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
mS:function(a,b){var u
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
mV:function(a,b){var u
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
jJ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.e.aT(a,1)},
mn:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.p?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.q)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.p
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mm:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.dT(c,u)
t.bp(c,u)
t.ex(a,b,c)
return t},
k1:function(a,b,c,d,e){var u=new A.il(a,c,e)
u.f=d
u.shP(P.m1(d,0,P.q))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fJ:function fJ(a,b){this.a=a
this.b=b},
dB:function dB(a,b){var _=this
_.dG=_.iU=_.dF=_.bg=_.b0=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.j1=_.j0=_.j_=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.dS=_.iZ=_.dR=_.dQ=_.iY=_.dP=_.dO=_.dN=_.iX=_.dM=_.dL=_.dK=_.iW=_.dJ=_.dI=_.iV=_.dH=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ay:function ay(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bg=b4},
c1:function c1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c3:function c3(a,b,c,d,e,f,g,h,i,j){var _=this
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
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cE:function cE(){},
bw:function bw(a,b){this.a=a
this.b=b},
dT:function dT(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dY:function dY(){},
iq:function iq(a){this.a=a},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a8:function a8(a,b,c){this.a=a
this.c=b
this.d=c},
ar:function ar(a,b,c){this.a=a
this.c=b
this.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
bI:function bI(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ld:function(a,b,c,d){var u
H.l(c,{func:1,ret:-1,args:[F.a9,P.n,P.n]})
u=F.hK()
F.cY(u,b,c,d,a,1,0,0,1)
F.cY(u,b,c,d,a,0,1,0,3)
F.cY(u,b,c,d,a,0,0,1,2)
F.cY(u,b,c,d,a,-1,0,0,0)
F.cY(u,b,c,d,a,0,-1,0,0)
F.cY(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
jn:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cY:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.l(c,{func:1,ret:-1,args:[F.a9,P.n,P.n]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.J(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.J(p+a3,o+a1,n+a2)
l=new V.J(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.J(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jn(u)
g=F.jn(e.b)
f=F.lr(d,a0,new F.jm(e,F.jn(e.c),F.jn(e.d),g,h,c),b)
if(f!=null)a.b3(f)},
lf:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(d,{func:1,ret:P.n,args:[P.n]})
if(e<3)return
u=F.hK()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.a9])
q=u.a
p=new V.J(0,0,t)
p=p.q(0,Math.sqrt(p.B(p)))
C.a.h(r,q.hT(new V.az(a,-1,-1,-1),new V.a1(1,1,1,1),new V.a5(0,0,c),new V.J(0,0,t),new V.Z(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.J(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e5(new V.az(a,-1,-1,-1),null,new V.a1(i,g,h,1),new V.a5(m*k,l*k,c),new V.J(0,0,t),new V.Z(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dj(r)
return u},
le:function(a,b,c){return F.n8(!0,!0,1,new F.ju(a,c),b)},
n8:function(a,b,c,d,e){var u
H.l(d,{func:1,ret:P.n,args:[P.n,P.n]})
if(e<3)return
if(c<1)return
u=F.lr(c,e,new F.jv(d),null)
if(u==null)return
u.at()
u.dm()
u.b3(F.lf(3,!1,1,new F.jw(d),e))
u.b3(F.lf(1,!0,-1,new F.jx(d),e))
return u},
nu:function(a){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jH()
t=F.ld(8,null,new F.jI(s,a),8)
t.dm()
return t},
lr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.l(c,{func:1,ret:-1,args:[F.a9,P.n,P.n]})
if(a<1)return
if(b<1)return
u=F.hK()
t=H.c([],[F.a9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e5(g,g,new V.a1(p,0,0,1),g,g,new V.Z(r,1),g,g,0)
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
o=F.e5(g,g,new V.a1(j,i,h,1),g,g,new V.Z(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c2(d))}}u.d.hS(a+1,b+1,t)
return u},
cq:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.z(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.x("May not create a face with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
u.ht(c)
C.a.h(u.a.a.d.b,u)
u.a.a.Z()
return u},
lY:function(a,b){var u=new F.bd(),t=a.a
if(t==null)H.z(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.x("May not create a line with vertices attached to different shapes."))
u.bQ(a)
u.bR(b)
C.a.h(u.a.a.c.b,u)
u.a.a.Z()
return u},
hK:function(){var u=new F.dO(),t=new F.iy(u)
t.b=!1
t.shQ(H.c([],[F.a9]))
u.a=t
t=new F.hN(u)
t.sbJ(H.c([],[F.bF]))
u.b=t
t=new F.hM(u)
t.sfa(H.c([],[F.bd]))
u.c=t
t=new F.hL(u)
t.sf1(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
e5:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.a9(),r=new F.iG()
r.sbJ(H.c([],[F.bF]))
s.b=r
r=new F.iC()
u=[F.bd]
r.sfb(H.c([],u))
r.sfc(H.c([],u))
s.c=r
r=new F.iz()
u=[F.a4]
r.sf2(H.c([],u))
r.sf3(H.c([],u))
r.sf4(H.c([],u))
s.d=r
h=$.lF()
s.e=0
r=$.av()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bs().a)!==0?e:t
s.x=(u&$.br().a)!==0?b:t
s.y=(u&$.bb().a)!==0?f:t
s.z=(u&$.bt().a)!==0?g:t
s.Q=(u&$.lG().a)!==0?c:t
s.ch=(u&$.cf().a)!==0?i:0
s.cx=(u&$.bq().a)!==0?a:t
return s},
jm:function jm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jH:function jH(){},
jI:function jI(a,b){this.a=a
this.b=b},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(){},
hR:function hR(){},
bd:function bd(){this.b=this.a=null},
fS:function fS(){},
ik:function ik(){},
bF:function bF(){this.a=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iI:function iI(a){this.a=a},
iH:function iH(a){this.a=a},
iy:function iy(a){this.a=a
this.c=this.b=null},
iz:function iz(){this.d=this.c=this.b=null},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){this.c=this.b=null},
iE:function iE(){},
iD:function iD(){},
iF:function iF(){},
hr:function hr(){},
iG:function iG(){this.b=null}},T={
kM:function(a){var u=new T.i6()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bm:function bm(){},
c0:function c0(){},
i6:function i6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cI:function cI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i8:function i8(a,b,c,d,e,f,g){var _=this
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
H.jW.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cC(a)},
i:function(a){return"Instance of '"+H.bY(a)+"'"}}
J.fN.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia_:1}
J.dt.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.du.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hw.prototype={}
J.c5.prototype={}
J.bD.prototype={
i:function(a){var u=a[$.lu()]
if(u==null)return this.ep(a)
return"JavaScript function for "+H.j(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijS:1}
J.aV.prototype={
h:function(a,b){H.F(b,H.A(a,0))
if(!!a.fixed$length)H.z(P.ao("add"))
a.push(b)},
e8:function(a,b){if(!!a.fixed$length)H.z(P.ao("removeAt"))
if(b<0||b>=a.length)throw H.h(P.dJ(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.z(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
bS:function(a,b){var u,t
H.i(b,"$ie",[H.A(a,0)],"$ae")
if(!!a.fixed$length)H.z(P.ao("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.A(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.cn(a))}},
u:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.m(t,u,H.j(a[u]))
return t.join(b)},
ia:function(a){return this.u(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cE:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.b_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.b_(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.A(a,0)])
return H.c(a.slice(b,c),[H.A(a,0)])},
cD:function(a,b){return this.cE(a,b,null)},
gi5:function(a){if(a.length>0)return a[0]
throw H.h(H.ku())},
gcf:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.ku())},
bo:function(a,b){var u=H.A(a,0)
H.l(b,{func:1,ret:P.q,args:[u,u]})
if(!!a.immutable$list)H.z(P.ao("sort"))
H.dP(a,0,a.length-1,b,u)},
ag:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
i:function(a){return P.jT(a,"[","]")},
gT:function(a){return new J.aj(a,a.length,[H.A(a,0)])},
gI:function(a){return H.cC(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.z(P.ao("set length"))
if(b<0)throw H.h(P.b_(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.ca(a,b))
return a[b]},
m:function(a,b,c){H.F(c,H.A(a,0))
if(!!a.immutable$list)H.z(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.h(H.ca(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jV.prototype={}
J.aj.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.w(s))
u=t.c
if(u>=r){t.sd_(null)
return!1}t.sd_(s[u]);++t.c
return!0},
sd_:function(a){this.d=H.F(a,H.A(this,0))},
$iaU:1}
J.bT.prototype={
hY:function(a,b){var u
H.ll(b)
if(typeof b!=="number")throw H.h(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbi(b)
if(this.gbi(a)===u)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
iG:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ao(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ao(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ao(""+a+".round()"))},
ee:function(a,b){var u
if(b>20)throw H.h(P.b_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.h(H.ba(b))
return a*b},
ei:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
er:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ao("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bd:function(a,b){var u
if(a>0)u=this.hy(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hy:function(a,b){return b>31?0:a>>>b},
aE:function(a,b){if(typeof b!=="number")throw H.h(H.ba(b))
return a>b},
$in:1,
$iab:1}
J.ds.prototype={$iq:1}
J.dr.prototype={}
J.bU.prototype={
c1:function(a,b){if(b<0)throw H.h(H.ca(a,b))
if(b>=a.length)H.z(H.ca(a,b))
return a.charCodeAt(b)},
ba:function(a,b){if(b>=a.length)throw H.h(H.ca(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.h(P.jN(b,null,null))
return a+b},
cF:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dJ(b,null))
if(b>c)throw H.h(P.dJ(b,null))
if(c>a.length)throw H.h(P.dJ(c,null))
return a.substring(b,c)},
aT:function(a,b){return this.cF(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikD:1,
$io:1}
H.a2.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.c1(this.a,b)},
$ae0:function(){return[P.q]},
$ay:function(){return[P.q]},
$ae:function(){return[P.q]},
$ab:function(){return[P.q]}}
H.fv.prototype={}
H.dy.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.kd(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.cn(s))
u=t.c
if(u>=q){t.saU(null)
return!1}t.saU(r.H(s,u));++t.c
return!0},
saU:function(a){this.d=H.F(a,H.A(this,0))},
$iaU:1}
H.h_.prototype={
gT:function(a){return new H.h0(J.cg(this.a),this.b,this.$ti)},
gk:function(a){return J.ch(this.a)},
H:function(a,b){return this.b.$1(J.kl(this.a,b))},
$ae:function(a,b){return[b]}}
H.h0.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saU(u.c.$1(t.gK(t)))
return!0}u.saU(null)
return!1},
gK:function(a){return this.a},
saU:function(a){this.a=H.F(a,H.A(this,1))},
$aaU:function(a,b){return[b]}}
H.iK.prototype={
gT:function(a){return new H.iL(J.cg(this.a),this.b,this.$ti)}}
H.iL.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.B(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bR.prototype={}
H.e0.prototype={}
H.e_.prototype={}
H.ih.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hs.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fP.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.it.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jK.prototype={
$1:function(a){if(!!J.W(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.eD.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.cl.prototype={
i:function(a){return"Closure '"+H.bY(this).trim()+"'"},
$ijS:1,
giK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.hW.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.ci.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ci))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cC(this.a)
else u=typeof t!=="object"?J.bN(t):H.cC(t)
return(u^H.cC(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bY(u)+"'")}}
H.ij.prototype={
i:function(a){return this.a}}
H.fe.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iM.prototype={
i:function(a){return"Assertion failed: "+P.dk(this.a)}}
H.Y.prototype={
gk:function(a){return this.a},
gaB:function(a){return new H.dx(this,[H.A(this,0)])},
dw:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cX(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cX(t,b)}else return s.i8(b)},
i8:function(a){var u=this.d
if(u==null)return!1
return this.ce(this.bw(u,J.bN(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bb(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bb(r,b)
s=t==null?null:t.b
return s}else return q.i9(b)},
i9:function(a){var u,t,s=this.d
if(s==null)return
u=this.bw(s,J.bN(a)&0x3ffffff)
t=this.ce(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
H.F(b,H.A(o,0))
H.F(c,H.A(o,1))
if(typeof b==="string"){u=o.b
o.cO(u==null?o.b=o.bG():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cO(t==null?o.c=o.bG():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bG()
r=J.bN(b)&0x3ffffff
q=o.bw(s,r)
if(q==null)o.bO(s,r,[o.bH(b,c)])
else{p=o.ce(q,b)
if(p>=0)q[p].b=c
else q.push(o.bH(b,c))}}},
L:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.A(s,0),H.A(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.cn(s))
u=u.c}},
cO:function(a,b,c){var u,t=this
H.F(b,H.A(t,0))
H.F(c,H.A(t,1))
u=t.bb(a,b)
if(u==null)t.bO(a,b,t.bH(b,c))
else u.b=c},
bH:function(a,b){var u=this,t=new H.fT(H.F(a,H.A(u,0)),H.F(b,H.A(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
ce:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
i:function(a){return P.kx(this)},
bb:function(a,b){return a[b]},
bw:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
eU:function(a,b){delete a[b]},
cX:function(a,b){return this.bb(a,b)!=null},
bG:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bO(t,u,t)
this.eU(t,u)
return t}}
H.fT.prototype={}
H.dx.prototype={
gk:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fU(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fU.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cn(t))
else{t=u.c
if(t==null){u.scN(null)
return!1}else{u.scN(t.a)
u.c=u.c.c
return!0}}},
scN:function(a){this.d=H.F(a,H.A(this,0))},
$iaU:1}
H.jA.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.jB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jC.prototype={
$1:function(a){return this.a(H.R(a))},
$S:30}
H.fO.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikD:1}
H.cz.prototype={$inQ:1}
H.dD.prototype={
gk:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cy.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$abR:function(){return[P.n]},
$ay:function(){return[P.n]},
$ie:1,
$ae:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]}}
H.dE.prototype={
$abR:function(){return[P.q]},
$ay:function(){return[P.q]},
$ie:1,
$ae:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.hl.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.ho.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.hp.prototype={
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.dF.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bJ(b,a,a.length)
return a[b]},
$inR:1}
H.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bJ(b,a,a.length)
return a[b]}}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
P.iO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:22}
P.iN.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eJ.prototype={
eE:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c9(new P.jj(this,b),0),a)
else throw H.h(P.ao("`setTimeout()` not found."))},
eF:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c9(new P.ji(this,a,Date.now(),b),0),a)
else throw H.h(P.ao("Periodic timer."))},
$ib4:1}
P.jj.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.ji.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.er(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b9.prototype={
ic:function(a){if(this.c!==6)return!0
return this.b.b.cr(H.l(this.d,{func:1,ret:P.a_,args:[P.O]}),a.a,P.a_,P.O)},
i7:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.A(this,1)},r=this.b.b
if(H.eZ(u,{func:1,args:[P.O,P.aq]}))return H.kc(r.iB(u,a.a,a.b,null,t,P.aq),s)
else return H.kc(r.cr(H.l(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aE.prototype={
ed:function(a,b,c){var u,t,s,r=H.A(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mX(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aE($.V,[c])
s=b==null?1:3
this.cP(new P.b9(t,s,a,b,[r,c]))
return t},
iF:function(a,b){return this.ed(a,null,b)},
cP:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib9")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaE")
s=u.a
if(s<4){u.cP(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.js(null,null,s,H.l(new P.iX(t,a),{func:1,ret:-1}))}},
d9:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib9")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaE")
u=q.a
if(u<4){q.d9(a)
return}p.a=u
p.c=q.c}o.a=p.bc(a)
u=p.b
u.toString
P.js(null,null,u,H.l(new P.j0(o,p),{func:1,ret:-1}))}},
bL:function(){var u=H.k(this.c,"$ib9")
this.c=null
return this.bc(u)},
bc:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cT:function(a){var u,t,s=this,r=H.A(s,0)
H.kc(a,{futureOr:1,type:r})
u=s.$ti
if(H.k9(a,"$icr",u,"$acr"))if(H.k9(a,"$iaE",u,null))P.l0(a,s)
else P.mu(a,s)
else{t=s.bL()
H.F(a,r)
s.a=4
s.c=a
P.cO(s,t)}},
cU:function(a,b){var u,t=this
H.k(b,"$iaq")
u=t.bL()
t.a=8
t.c=new P.ak(a,b)
P.cO(t,u)},
$icr:1}
P.iX.prototype={
$0:function(){P.cO(this.a,this.b)},
$S:2}
P.j0.prototype={
$0:function(){P.cO(this.b,this.a.a)},
$S:2}
P.iY.prototype={
$1:function(a){var u=this.a
u.a=0
u.cT(a)},
$S:22}
P.iZ.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.cU(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j_.prototype={
$0:function(){this.a.cU(this.b,this.c)},
$S:2}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eb(H.l(s.d,{func:1}),null)}catch(r){u=H.bM(r)
t=H.cc(r)
if(o.d){s=H.k(o.a.a.c,"$iak").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iak")
else q.b=new P.ak(u,t)
q.a=!0
return}if(!!J.W(n).$icr){if(n instanceof P.aE&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iak")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.iF(new P.j4(p),null)
s.a=!1}},
$S:3}
P.j4.prototype={
$1:function(a){return this.a},
$S:38}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.A(s,0)
q=H.F(n.c,r)
p=H.A(s,1)
n.a.b=s.b.b.cr(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bM(o)
t=H.cc(o)
s=n.a
s.b=new P.ak(u,t)
s.a=!0}},
$S:3}
P.j1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iak")
r=m.c
if(H.B(r.ic(u))&&r.e!=null){q=m.b
q.b=r.i7(u)
q.a=!1}}catch(p){t=H.bM(p)
s=H.cc(p)
r=H.k(m.a.a.c,"$iak")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ak(t,s)
n.a=!0}},
$S:3}
P.e7.prototype={}
P.hZ.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aE($.V,[P.q])
r.a=0
u=H.A(s,0)
t=H.l(new P.i0(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.i1(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.i0.prototype={
$1:function(a){H.F(a,H.A(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.A(this.b,0)]}}}
P.i1.prototype={
$0:function(){this.b.cT(this.a.a)},
$S:2}
P.cG.prototype={}
P.i_.prototype={}
P.b4.prototype={}
P.ak.prototype={
i:function(a){return H.j(this.a)},
$iby:1}
P.jl.prototype={$io3:1}
P.jr.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dG():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jb.prototype={
iC:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.V){a.$0()
return}P.l4(r,r,this,a,-1)}catch(s){u=H.bM(s)
t=H.cc(s)
P.jq(r,r,this,u,H.k(t,"$iaq"))}},
iD:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.f===$.V){a.$1(b)
return}P.l5(r,r,this,a,b,-1,c)}catch(s){u=H.bM(s)
t=H.cc(s)
P.jq(r,r,this,u,H.k(t,"$iaq"))}},
hV:function(a,b){return new P.jd(this,H.l(a,{func:1,ret:b}),b)},
bU:function(a){return new P.jc(this,H.l(a,{func:1,ret:-1}))},
dq:function(a,b){return new P.je(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
eb:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.f)return a.$0()
return P.l4(null,null,this,a,b)},
cr:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.V===C.f)return a.$1(b)
return P.l5(null,null,this,a,b,c,d)},
iB:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.V===C.f)return a.$2(b,c)
return P.mY(null,null,this,a,b,c,d,e,f)}}
P.jd.prototype={
$0:function(){return this.a.eb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jc.prototype={
$0:function(){return this.a.iC(this.b)},
$S:3}
P.je.prototype={
$1:function(a){var u=this.c
return this.a.iD(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j8.prototype={
gT:function(a){return P.l2(this,this.r,H.A(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.F(b,H.A(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.k4():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.k4():t,b)}else return s.eH(0,b)},
eH:function(a,b){var u,t,s,r=this
H.F(b,H.A(r,0))
u=r.d
if(u==null)u=r.d=P.k4()
t=r.cV(b)
s=u[t]
if(s==null)u[t]=[r.bs(b)]
else{if(r.d0(s,b)>=0)return!1
s.push(r.bs(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hl(this.c,b)
else return this.hk(0,b)},
hk:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.f7(r,b)
t=s.d0(u,b)
if(t<0)return!1
s.dh(u.splice(t,1)[0])
return!0},
cR:function(a,b){H.F(b,H.A(this,0))
if(H.k(a[b],"$icP")!=null)return!1
a[b]=this.bs(b)
return!0},
hl:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icP")
if(u==null)return!1
this.dh(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bs:function(a){var u,t=this,s=new P.cP(H.F(a,H.A(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dh:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
cV:function(a){return J.bN(a)&1073741823},
f7:function(a,b){return a[this.cV(b)]},
d0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.cP.prototype={}
P.j9.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cn(t))
else{t=u.c
if(t==null){u.scS(null)
return!1}else{u.scS(H.F(t.a,H.A(u,0)))
u.c=u.c.b
return!0}}},
scS:function(a){this.d=H.F(a,H.A(this,0))},
$iaU:1}
P.fV.prototype={$ie:1,$ib:1}
P.y.prototype={
gT:function(a){return new H.dy(a,this.gk(a),[H.d0(this,a,"y",0)])},
H:function(a,b){return this.j(a,b)},
iI:function(a,b){var u,t=this,s=H.c([],[H.d0(t,a,"y",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.m(s,u,t.j(a,u))
return s},
iH:function(a){return this.iI(a,!0)},
i:function(a){return P.jT(a,"[","]")}}
P.fY.prototype={}
P.fZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:17}
P.af.prototype={
L:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.d0(s,a,"af",0),H.d0(s,a,"af",1)]})
for(u=J.cg(s.gaB(a));u.A();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.ch(this.gaB(a))},
i:function(a){return P.kx(a)},
$iG:1}
P.jf.prototype={
i:function(a){return P.jT(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.kI(b,"index")
for(u=P.l2(r,r.r,H.A(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.h(P.T(b,r,"index",null,t))},
$ie:1,
$ikK:1}
P.em.prototype={}
P.cm.prototype={}
P.db.prototype={}
P.fw.prototype={
$acm:function(){return[P.o,[P.b,P.q]]}}
P.iw.prototype={}
P.ix.prototype={
hZ:function(a){var u,t,s=P.kJ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jk(u)
if(t.f5(a,0,s)!==s)t.di(C.e.c1(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mz(0,t.b,u.length)))},
$adb:function(){return[P.o,[P.b,P.q]]}}
P.jk.prototype={
di:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
f5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.c1(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.ba(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.di(r,C.e.ba(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.a_.prototype={}
P.ax.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.bd(u,30))&1073741823},
i:function(a){var u=this,t=P.lR(H.mc(u)),s=P.dd(H.ma(u)),r=P.dd(H.m6(u)),q=P.dd(H.m7(u)),p=P.dd(H.m9(u)),o=P.dd(H.mb(u)),n=P.lS(H.m8(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.n.prototype={}
P.bx.prototype={
aE:function(a,b){return C.d.aE(this.a,b.giM())},
p:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fu(),q=this.a
if(q<0)return"-"+new P.bx(0-q).i(0)
u=r.$1(C.d.a4(q,6e7)%60)
t=r.$1(C.d.a4(q,1e6)%60)
s=new P.ft().$1(q%1e6)
return""+C.d.a4(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.by.prototype={}
P.f4.prototype={
i:function(a){return"Assertion failed"}}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbu()+o+u
if(!q.a)return t
s=q.gbt()
r=P.dk(q.b)
return t+s+": "+r}}
P.bZ.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fM.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t=H.X(this.b)
if(typeof t!=="number")return t.ad()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gk:function(a){return this.f}}
P.iu.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.is.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hV.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fi.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dk(u)+"."}}
P.hv.prototype={
i:function(a){return"Out of Memory"},
$iby:1}
P.dR.prototype={
i:function(a){return"Stack Overflow"},
$iby:1}
P.fo.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ef.prototype={
i:function(a){return"Exception: "+this.a}}
P.fH.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.cF(s,0,75)+"...":s
return t+"\n"+r}}
P.q.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gT(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.kI(b,"index")
for(u=this.gT(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.h(P.T(b,this,"index",null,t))},
i:function(a){return P.lV(this,"(",")")}}
P.aU.prototype={}
P.b.prototype={$ie:1}
P.G.prototype={}
P.N.prototype={
gI:function(a){return P.O.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
p:function(a,b){return this===b},
gI:function(a){return H.cC(this)},
i:function(a){return"Instance of '"+H.bY(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.o.prototype={$ikD:1}
P.bk.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f0.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
i:function(a){return String(a)}}
W.f3.prototype={
i:function(a){return String(a)}}
W.d5.prototype={}
W.bQ.prototype={
cz:function(a,b,c){if(c!=null)return a.getContext(b,P.n5(c))
return a.getContext(b)},
eh:function(a,b){return this.cz(a,b,null)},
$ibQ:1}
W.ck.prototype={$ick:1}
W.bv.prototype={
gk:function(a){return a.length}}
W.co.prototype={$ico:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cp.prototype={
gk:function(a){return a.length}}
W.fl.prototype={}
W.aP.prototype={}
W.aQ.prototype={}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.df.prototype={$idf:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.dg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ap,P.ab]]},
$ay:function(){return[[P.ap,P.ab]]},
$ie:1,
$ae:function(){return[[P.ap,P.ab]]},
$ib:1,
$ab:function(){return[[P.ap,P.ab]]},
$aC:function(){return[[P.ap,P.ab]]}}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gam(a))+" x "+H.j(this.gah(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iap)return!1
return a.left===u.gbj(b)&&a.top===u.gbm(b)&&this.gam(a)===u.gam(b)&&this.gah(a)===u.gah(b)},
gI:function(a){return W.l1(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gam(a)),C.c.gI(this.gah(a)))},
gds:function(a){return a.bottom},
gah:function(a){return a.height},
gbj:function(a){return a.left},
gbl:function(a){return a.right},
gbm:function(a){return a.top},
gam:function(a){return a.width},
$iap:1,
$aap:function(){return[P.ab]}}
W.fr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.o]},
$ay:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aC:function(){return[P.o]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.iS.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$ia3")},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.iH(this)
return new J.aj(u,u.length,[H.A(u,0)])},
$ay:function(){return[W.a3]},
$ae:function(){return[W.a3]},
$ab:function(){return[W.a3]}}
W.a3.prototype={
gdt:function(a){return new W.iS(a,a.children)},
gdu:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ad()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ad()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
$ia3:1}
W.m.prototype={$im:1}
W.f.prototype={
hR:function(a,b,c,d){H.l(c,{func:1,args:[W.m]})
if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.c9(H.l(c,{func:1,args:[W.m]}),1),!1)},
$if:1}
W.aS.prototype={$iaS:1}
W.fB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aC:function(){return[W.aS]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fG.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.fK.prototype={
gk:function(a){return a.length}}
W.bS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.L]},
$ay:function(){return[W.L]},
$ie:1,
$ae:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$ibS:1,
$aC:function(){return[W.L]}}
W.bz.prototype={$ibz:1,
gdz:function(a){return a.data}}
W.ct.prototype={$ict:1}
W.aW.prototype={$iaW:1}
W.fW.prototype={
i:function(a){return String(a)}}
W.he.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
j:function(a,b){return P.bp(a.get(H.R(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
gaB:function(a){var u=H.c([],[P.o])
this.L(a,new W.hg(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iG:1,
$aG:function(){return[P.o,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hh.prototype={
j:function(a,b){return P.bp(a.get(H.R(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
gaB:function(a){var u=H.c([],[P.o])
this.L(a,new W.hi(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iG:1,
$aG:function(){return[P.o,null]}}
W.hi.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aY.prototype={$iaY:1}
W.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.ad.prototype={$iad:1}
W.iR.prototype={
gT:function(a){var u=this.a.childNodes
return new W.dl(u,u.length,[H.d0(C.J,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ay:function(){return[W.L]},
$ae:function(){return[W.L]},
$ab:function(){return[W.L]}}
W.L.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
$iL:1}
W.cA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.L]},
$ay:function(){return[W.L]},
$ie:1,
$ae:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$aC:function(){return[W.L]}}
W.aZ.prototype={$iaZ:1,
gk:function(a){return a.length}}
W.hx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aZ]},
$ay:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.hF.prototype={
j:function(a,b){return P.bp(a.get(H.R(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
gaB:function(a){var u=H.c([],[P.o])
this.L(a,new W.hG(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iG:1,
$aG:function(){return[P.o,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hI.prototype={
gk:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b0]},
$ay:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.b1.prototype={$ib1:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b1]},
$ay:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.b2.prototype={$ib2:1,
gk:function(a){return a.length}}
W.hX.prototype={
j:function(a,b){return a.getItem(H.R(b))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaB:function(a){var u=H.c([],[P.o])
this.L(a,new W.hY(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.o,P.o]},
$iG:1,
$aG:function(){return[P.o,P.o]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:34}
W.aH.prototype={$iaH:1}
W.b3.prototype={$ib3:1}
W.aI.prototype={$iaI:1}
W.i4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ie:1,
$ae:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aC:function(){return[W.aI]}}
W.i5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b3]},
$ay:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aC:function(){return[W.b3]}}
W.ia.prototype={
gk:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.aK.prototype={$iaK:1}
W.id.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b5]},
$ay:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aC:function(){return[W.b5]}}
W.ie.prototype={
gk:function(a){return a.length}}
W.bH.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iJ.prototype={
gk:function(a){return a.length}}
W.b8.prototype={
gi2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ao("deltaY is not supported"))},
gi1:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ao("deltaX is not supported"))},
$ib8:1}
W.cN.prototype={
ho:function(a,b){return a.requestAnimationFrame(H.c9(H.l(b,{func:1,ret:-1,args:[P.ab]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.Q]},
$ay:function(){return[W.Q]},
$ie:1,
$ae:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aC:function(){return[W.Q]}}
W.ea.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iap)return!1
return a.left===u.gbj(b)&&a.top===u.gbm(b)&&a.width===u.gam(b)&&a.height===u.gah(b)},
gI:function(a){return W.l1(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gah:function(a){return a.height},
gam:function(a){return a.width}}
W.j5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aC:function(){return[W.aT]}}
W.er.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.L]},
$ay:function(){return[W.L]},
$ie:1,
$ae:function(){return[W.L]},
$ib:1,
$ab:function(){return[W.L]},
$aC:function(){return[W.L]}}
W.jg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b2]},
$ay:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aC:function(){return[W.b2]}}
W.jh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ie:1,
$ae:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aC:function(){return[W.aH]}}
W.iU.prototype={}
W.k3.prototype={}
W.iV.prototype={}
W.iW.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:36}
W.C.prototype={
gT:function(a){return new W.dl(a,this.gk(a),[H.d0(this,a,"C",0)])}}
W.dl.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sd1(J.f_(u.a,t))
u.c=t
return!0}u.sd1(null)
u.c=s
return!1},
gK:function(a){return this.d},
sd1:function(a){this.d=H.F(a,H.A(this,0))},
$iaU:1}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
P.eO.prototype={$ibz:1,
gdz:function(a){return this.a}}
P.jt.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.fD.prototype={
gbx:function(){var u=this.b,t=H.au(u,"y",0),s=W.a3
return new H.h_(new H.iK(u,H.l(new P.fE(),{func:1,ret:P.a_,args:[t]}),[t]),H.l(new P.fF(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ch(this.gbx().a)},
j:function(a,b){var u=this.gbx()
return u.b.$1(J.kl(u.a,b))},
gT:function(a){var u=P.kw(this.gbx(),!1,W.a3)
return new J.aj(u,u.length,[H.A(u,0)])},
$ay:function(){return[W.a3]},
$ae:function(){return[W.a3]},
$ab:function(){return[W.a3]}}
P.fE.prototype={
$1:function(a){return!!J.W(H.k(a,"$iL")).$ia3},
$S:35}
P.fF.prototype={
$1:function(a){return H.p(H.k(a,"$iL"),"$ia3")},
$S:39}
P.ja.prototype={
gbl:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.A(this,0))},
gds:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.A(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iap){t=p.a
if(t==u.gbj(b)){s=p.b
if(s==u.gbm(b)){r=p.c
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.E(r)
q=H.A(p,0)
if(H.F(t+r,q)===u.gbl(b)){t=p.d
if(typeof s!=="number")return s.F()
if(typeof t!=="number")return H.E(t)
u=H.F(s+t,q)===u.gds(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bN(s),q=t.b,p=J.bN(q),o=t.c
if(typeof s!=="number")return s.F()
if(typeof o!=="number")return H.E(o)
u=H.A(t,0)
o=C.d.gI(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.F()
if(typeof s!=="number")return H.E(s)
u=C.d.gI(H.F(q+s,u))
return P.mv(P.j7(P.j7(P.j7(P.j7(0,r),p),o),u))}}
P.ap.prototype={
gbj:function(a){return this.a},
gbm:function(a){return this.b},
gam:function(a){return this.c},
gah:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bc]},
$ie:1,
$ae:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aC:function(){return[P.bc]}}
P.bi.prototype={$ibi:1}
P.ht.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bi]},
$ie:1,
$ae:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aC:function(){return[P.bi]}}
P.hz.prototype={
gk:function(a){return a.length}}
P.i2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aC:function(){return[P.o]}}
P.r.prototype={
gdt:function(a){return new P.fD(a,new W.iR(a))}}
P.bn.prototype={$ibn:1}
P.ig.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bn]},
$ie:1,
$ae:function(){return[P.bn]},
$ib:1,
$ab:function(){return[P.bn]},
$aC:function(){return[P.bn]}}
P.ek.prototype={}
P.el.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.f6.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.bp(a.get(H.R(b)))},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
gaB:function(a){var u=H.c([],[P.o])
this.L(a,new P.f8(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.o,null]},
$iG:1,
$aG:function(){return[P.o,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f9.prototype={
gk:function(a){return a.length}}
P.bO.prototype={}
P.hu.prototype={
gk:function(a){return a.length}}
P.e8.prototype={}
P.d6.prototype={$id6:1}
P.dm.prototype={$idm:1}
P.dI.prototype={$idI:1}
P.dL.prototype={$idL:1}
P.c_.prototype={
ec:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.W(g)
if(!!u.$ibz&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.n6(g))
return}if(!!u.$ict&&h==null&&t&&!0){this.hF(a,b,c,d,e,f,g)
return}throw H.h(P.lL("Incorrect number or type of arguments"))},
iE:function(a,b,c,d,e,f,g){return this.ec(a,b,c,d,e,f,g,null,null,null)},
hF:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a2:function(a,b,c){return a.uniform1f(b,c)},
aS:function(a,b,c){return a.uniform1i(b,c)},
b8:function(a,b,c,d){return a.uniform2f(b,c,d)},
R:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cu:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ef:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cv:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic_:1}
P.dN.prototype={$idN:1}
P.dS.prototype={$idS:1}
P.dZ.prototype={$idZ:1}
P.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return P.bp(a.item(b))},
H:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.G,,,]]},
$ie:1,
$ae:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.eB.prototype={}
P.eC.prototype={}
O.S.prototype={
b9:function(a){var u=this
u.sfd(H.c([],[a]))
u.sd7(null)
u.sd4(null)
u.sd8(null)},
cA:function(a,b,c){var u=this,t=H.au(u,"S",0)
H.l(b,{func:1,ret:P.a_,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.q,[P.e,t]]}
H.l(a,t)
H.l(c,t)
u.sd7(b)
u.sd4(a)
u.sd8(c)},
aF:function(a,b){return this.cA(a,null,b)},
bI:function(a){var u
H.i(a,"$ie",[H.au(this,"S",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d3:function(a,b){var u
H.i(b,"$ie",[H.au(this,"S",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.aj(u,u.length,[H.A(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.au(s,"S",0)
H.F(b,r)
r=[r]
if(H.B(s.bI(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d3(t,H.c([b],r))}},
bS:function(a,b){var u,t,s=this
H.i(b,"$ie",[H.au(s,"S",0)],"$ae")
if(H.B(s.bI(b))){u=s.a
t=u.length
C.a.bS(u,b)
s.d3(t,b)}},
sfd:function(a){this.a=H.i(a,"$ib",[H.au(this,"S",0)],"$ab")},
sd7:function(a){this.b=H.l(a,{func:1,ret:P.a_,args:[[P.e,H.au(this,"S",0)]]})},
sd4:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.q,[P.e,H.au(this,"S",0)]]})},
sd8:function(a){H.l(a,{func:1,ret:-1,args:[P.q,[P.e,H.au(this,"S",0)]]})},
$ie:1}
O.cv.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.I():u},
aH:function(){var u=this.b
if(u!=null)u.v(null)},
ga9:function(a){var u=this.a
if(u.length>0)return C.a.gcf(u)
else return V.bf()},
bk:function(a){var u=this.a
if(a==null)C.a.h(u,V.bf())
else C.a.h(u,a)
this.aH()},
b6:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sby:function(a){this.a=H.i(a,"$ib",[V.a6],"$ab")}}
E.fc.prototype={}
E.am.prototype={
cQ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aj(u,u.length,[H.A(u,0)]);u.A();){t=u.d
if(t.f==null)t.cQ()}},
saG:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().C(0,s.ge2())
u=s.c
if(u!=null)u.gl().h(0,s.ge2())
t=new D.u("shape",r,s.c,[F.dO])
t.b=!0
s.ap(t)}},
sac:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.ge4())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.ge4())
s.cQ()
t=new D.u("technique",u,s.f,[O.bl])
t.b=!0
s.ap(t)}},
sau:function(a){var u,t,s=this
if(!J.H(s.r,a)){u=s.r
if(u!=null)u.gl().C(0,s.ge0())
if(a!=null)a.gl().h(0,s.ge0())
s.r=a
t=new D.u("mover",u,a,[U.a7])
t.b=!0
s.ap(t)}},
a6:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aq(0,b,s):null
if(!J.H(q,s.x)){u=s.x
s.x=q
t=new D.u("matrix",u,q,[V.a6])
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.a6(0,b)
for(r=s.y.a,r=new J.aj(r,r.length,[H.A(r,0)]);r.A();)r.d.a6(0,b)},
a0:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga9(s))
else C.a.h(s.a,r.n(0,s.ga9(s)))
s.aH()
a.cn(t.f)
s=a.dy
u=(s&&C.a).gcf(s)
if(u!=null&&t.d!=null)u.cq(a,t)
for(s=t.y.a,s=new J.aj(s,s.length,[H.A(s,0)]);s.A();)s.d.a0(a)
a.cm()
a.dx.b6()},
gl:function(){var u=this.z
return u==null?this.z=D.I():u},
ap:function(a){var u=this.z
if(u!=null)u.v(a)},
Z:function(){return this.ap(null)},
e3:function(a){H.k(a,"$iv")
this.e=null
this.ap(a)},
im:function(){return this.e3(null)},
e5:function(a){this.ap(H.k(a,"$iv"))},
io:function(){return this.e5(null)},
e1:function(a){this.ap(H.k(a,"$iv"))},
il:function(){return this.e1(null)},
e_:function(a){this.ap(H.k(a,"$iv"))},
ii:function(){return this.e_(null)},
ih:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[E.am],"$ae")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aR()
o.sX(null)
o.sas(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Z()},
ik:function(a,b){var u,t
H.i(b,"$ie",[E.am],"$ae")
for(u=b.gT(b),t=this.gdZ();u.A();)u.gK(u).gl().C(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sey:function(a,b){this.y=H.i(b,"$iS",[E.am],"$aS")},
$ibW:1}
E.hB.prototype={
eu:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cv()
t=[V.a6]
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hC(s))
s.cy=u
u=new O.cv()
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hD(s))
s.db=u
u=new O.cv()
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hE(s))
s.dx=u
s.shE(H.c([],[O.bl]))
u=s.dy;(u&&C.a).h(u,null)
s.shx(new H.Y([P.o,A.cE]))},
gix:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga9(s)
u=t.db
u=t.z=s.n(0,u.ga9(u))
s=u}return s},
ge7:function(){var u,t=this,s=t.ch
if(s==null){s=t.gix()
u=t.dx
u=t.ch=s.n(0,u.ga9(u))
s=u}return s},
cn:function(a){var u=this.dy,t=a==null?(u&&C.a).gcf(u):a;(u&&C.a).h(u,t)},
cm:function(){var u=this.dy
if(u.length>1)u.pop()},
bT:function(a){var u=a.b
if(u.length===0)throw H.h(P.x("May not cache a shader with no name."))
if(this.fr.dw(0,u))throw H.h(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)},
shE:function(a){this.dy=H.i(a,"$ib",[O.bl],"$ab")},
shx:function(a){this.fr=H.i(a,"$iG",[P.o,A.cE],"$aG")}}
E.hC.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:11}
E.hD.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:11}
E.hE.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:11}
E.dV.prototype={
cL:function(a){H.k(a,"$iv")
this.e9()},
cK:function(){return this.cL(null)},
gi6:function(){var u,t=this,s=Date.now(),r=C.d.a4(P.kq(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
dc:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.E(r)
u=C.c.cc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.c.cc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kP(C.j,s.giA())}},
e9:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i9(this),{func:1,ret:-1,args:[P.ab]})
C.u.eZ(u)
C.u.ho(u,W.l8(t,P.ab))}},
iz:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dc()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.kq(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aH()
r=s.db
C.a.sk(r.a,0)
r.aH()
r=s.dx
C.a.sk(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a0(p.e)}}catch(q){u=H.bM(q)
t=H.cc(q)
P.ki("Error: "+H.j(u))
P.ki("Stack: "+H.j(t))
throw H.h(u)}}}
E.i9.prototype={
$1:function(a){var u
H.ll(a)
u=this.a
if(u.ch){u.ch=!1
u.iz()}},
$S:32}
Z.e6.prototype={$iny:1}
Z.d7.prototype={
Y:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bM(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.cM.prototype={$inz:1}
Z.bu.prototype={
ao:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Y:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Y(a)},
aD:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a0:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")},
sf8:function(a){this.b=H.i(a,"$ib",[Z.bA],"$ab")},
$inF:1}
Z.bA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bY(this.c)+"'")+"]"}}
Z.b7.prototype={
gcC:function(a){var u=this.a,t=(u&$.av().a)!==0?3:0
if((u&$.bs().a)!==0)t+=3
if((u&$.br().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=2
if((u&$.bt().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.cf().a)!==0)++t
return(u&$.bq().a)!==0?t+4:t},
hU:function(a){var u,t=$.av(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0)if(u===a)return t
return $.lH()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.av().a)!==0)C.a.h(u,"Pos")
if((t&$.bs().a)!==0)C.a.h(u,"Norm")
if((t&$.br().a)!==0)C.a.h(u,"Binm")
if((t&$.bb().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bt().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.cf().a)!==0)C.a.h(u,"Weight")
if((t&$.bq().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.ff.prototype={}
D.aR.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.l(b,u)
if(this.a==null)this.sX(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
C:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ag(u,b)
if(u===!0){u=s.a
t=(u&&C.a).C(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ag(u,b)
if(u===!0){u=s.b
t=(u&&C.a).C(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.L(P.kw(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fy(q))
u=r.b
if(u!=null){r.sas(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.L(u,new D.fz(q))}return!0},
c5:function(){return this.v(null)},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
sX:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sas:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fy.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fz.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bB.prototype={}
D.bC.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d8.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dv.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fQ.prototype={
it:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ip:function(a){this.c=a.b
this.d.C(0,a.a)
return!1},
shj:function(a){this.d=H.i(a,"$ikK",[P.q],"$akK")}}
X.dz.prototype={}
X.fX.prototype={
aV:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.Z(o.a+n*m,o.b+u*t)
t=q.a.gaN()
r=new X.bg(a,V.bj(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cl:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ej()
if(typeof u!=="number")return u.av()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aV(a,b))
return!0},
iu:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaN()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.cx(new V.P(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
fQ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dz(c,r.a.gaN(),b)
s.b=!0
t.v(s)
r.y=new P.ax(u,!1)
r.x=V.bj()}}
X.at.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.bg.prototype={}
X.hk.prototype={
bv:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gaN(),r=new X.bg(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cl:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bv(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ej()
if(typeof t!=="number")return t.av()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bv(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bv(a,b,!1))
return!0},
iv:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaN()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.cx(new V.P(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gdB:function(){var u=this.b
return u==null?this.b=D.I():u},
gbn:function(){var u=this.c
return u==null?this.c=D.I():u},
gdX:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.cx.prototype={}
X.hy.prototype={}
X.dX.prototype={}
X.ic.prototype={
aV:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.Z],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=q.a.gaN()
r=new X.dX(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
is:function(a){var u
H.i(a,"$ib",[V.Z],"$ab")
u=this.b
if(u==null)return!1
u.v(this.aV(a,!0))
return!0},
iq:function(a){var u
H.i(a,"$ib",[V.Z],"$ab")
u=this.c
if(u==null)return!1
u.v(this.aV(a,!0))
return!0},
ir:function(a){var u
H.i(a,"$ib",[V.Z],"$ab")
u=this.d
if(u==null)return!1
u.v(this.aV(a,!1))
return!0}}
X.e1.prototype={
gaN:function(){var u=this.a,t=C.h.gdu(u).c
t.toString
u=C.h.gdu(u).d
u.toString
return V.hA(0,0,t,u)},
cY:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dv(u,new X.at(t,a.altKey,a.shiftKey))},
aM:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
bP:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.Z(s-q,r-u)},
aW:function(a){return new V.P(a.movementX,a.movementY)},
bK:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.c.V(r.pageX)
C.c.V(r.pageY)
p=o.left
C.c.V(r.pageX)
C.a.h(n,new V.Z(q-p,C.c.V(r.pageY)-o.top))}return n},
ax:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.d8(u,new X.at(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fK:function(a){this.f=!0},
fs:function(a){this.f=!1},
fA:function(a){H.k(a,"$iad")
if(H.B(this.f)&&this.bz(a))a.preventDefault()},
fO:function(a){var u
H.k(a,"$iaW")
if(!H.B(this.f))return
u=this.cY(a)
this.b.it(u)},
fM:function(a){var u
H.k(a,"$iaW")
if(!H.B(this.f))return
u=this.cY(a)
this.b.ip(u)},
fS:function(a){var u,t,s,r,q=this
H.k(a,"$iad")
u=q.a
u.focus()
q.f=!0
q.aM(a)
if(H.B(q.x)){t=q.ax(a)
s=q.aW(a)
if(q.d.cl(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ax(a)
r=q.aA(a)
if(q.c.cl(t,r))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.k(a,"$iad")
r.aM(a)
u=r.ax(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()},
fE:function(a){var u,t,s,r=this
H.k(a,"$iad")
if(!r.bz(a)){r.aM(a)
u=r.ax(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()}},
fU:function(a){var u,t,s,r=this
H.k(a,"$iad")
r.aM(a)
u=r.ax(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aA(a)
if(r.c.b4(u,s))a.preventDefault()},
fC:function(a){var u,t,s,r=this
H.k(a,"$iad")
if(!r.bz(a)){r.aM(a)
u=r.ax(a)
if(H.B(r.x)){t=r.aW(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aA(a)
if(r.c.b4(u,s))a.preventDefault()}},
fY:function(a){var u,t,s=this
H.k(a,"$ib8")
s.aM(a)
u=new V.P((a&&C.t).gi1(a),C.t.gi2(a)).q(0,180)
if(H.B(s.x)){if(s.d.iu(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.aA(a)
if(s.c.iv(u,t))a.preventDefault()},
h_:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ax(s.y)
t=s.aA(s.y)
s.d.fQ(u,t,r)}},
hf:function(a){var u,t=this
H.k(a,"$iaK")
t.a.focus()
t.f=!0
t.bP(a)
u=t.bK(a)
if(t.e.is(u))a.preventDefault()},
hb:function(a){var u
H.k(a,"$iaK")
this.bP(a)
u=this.bK(a)
if(this.e.iq(u))a.preventDefault()},
hd:function(a){var u
H.k(a,"$iaK")
this.bP(a)
u=this.bK(a)
if(this.e.ir(u))a.preventDefault()},
sf0:function(a){this.z=H.i(a,"$ib",[[P.cG,P.O]],"$ab")}}
D.de.prototype={$iac:1,$ibW:1}
D.ac.prototype={$ibW:1}
D.dw.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.I():u},
a7:function(a){var u=this.x
if(u!=null)u.v(a)},
d6:function(a){var u
H.k(a,"$iv")
u=this.y
if(u!=null)u.v(a)},
fP:function(){return this.d6(null)},
h1:function(a){var u,t,s
H.i(a,"$ie",[D.ac],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(s==null||this.eR(s))return!1}return!0},
fl:function(a,b){var u,t,s,r,q,p,o,n=D.ac
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gd5(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=H.k(b[q],"$iac")
if(p instanceof D.bE)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.aR()
o.sX(null)
o.sas(null)
o.c=null
o.d=0
p.Q=o}H.l(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bB([n])
n.b=!0
this.a7(n)},
h5:function(a,b){var u,t,s,r=D.ac
H.i(b,"$ie",[r],"$ae")
for(u=b.gT(b),t=this.gd5();u.A();){s=u.gK(u)
C.a.C(this.e,s)
s.gl().C(0,t)}r=new D.bC([r])
r.b=!0
this.a7(r)},
eR:function(a){var u=C.a.ag(this.f,a)
return u},
sez:function(a){this.e=H.i(a,"$ib",[D.de],"$ab")},
shg:function(a){this.f=H.i(a,"$ib",[D.bE],"$ab")},
seB:function(a){this.r=H.i(a,"$ib",[D.dQ],"$ab")},
$ae:function(){return[D.ac]},
$aS:function(){return[D.ac]}}
D.bE.prototype={
gl:function(){var u=this.Q
return u==null?this.Q=D.I():u},
a7:function(a){var u
H.k(a,"$iv")
u=this.Q
if(u!=null)u.v(a)},
eA:function(){return this.a7(null)},
gan:function(){var u=this.d!=null?1:0
return u+4},
$iac:1,
$ibW:1}
D.dQ.prototype={$iac:1,$ibW:1}
V.a0.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.a1.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.fx.prototype={}
V.bV.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.n])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bV))return!1
u=b.a
t=$.D().a
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
i:function(a){var u,t,s,r,q=this,p=[P.n],o=V.cb(H.c([q.a,q.d,q.r],p),3,0),n=V.cb(H.c([q.b,q.e,q.x],p),3,0),m=V.cb(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.a6.prototype={
a5:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.n])
return t},
dT:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.D().a)return V.bf()
u=1/b1
t=-n
s=-a0
return V.aG((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aG(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ct:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.D().a
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
D:function(a){var u,t,s,r,q,p=this,o=[P.n],n=V.cb(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cb(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cb(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cb(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
M:function(){return this.D("")}}
V.Z.prototype={
J:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.a5.prototype={
J:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.az.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.bG.prototype={
gab:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bG))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.P.prototype={
b1:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.P(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.kV
return u==null?$.kV=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.P(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.J.prototype={
b1:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cg:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aY:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.J(-this.a,-this.b,-this.c)},
q:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cL()
return new V.J(this.a/b,this.b/b,this.c/b)},
dU:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bo.prototype={
b1:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bo))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
U.fh.prototype={
br:function(a){var u=V.jL(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.I():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
scw:function(a,b){},
sci:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.br(u)}s=new D.u("maximumLocation",s,t.b,[P.n])
s.b=!0
t.E(s)}},
sck:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.br(u)}s=new D.u("minimumLocation",s,t.c,[P.n])
s.b=!0
t.E(s)}},
sa_:function(a,b){var u,t=this
b=t.br(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.u("location",u,b,[P.n])
u.b=!0
t.E(u)}},
scj:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a,[P.n])
r.b=!0
s.E(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.u("velocity",t,a,[P.n])
t.b=!0
u.E(t)}},
sc3:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.u("dampening",u,a,[P.n])
u.b=!0
this.E(u)}},
a6:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.D().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.da.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.I():u},
aq:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cs.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.I():u},
E:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.v(a)},
a8:function(){return this.E(null)},
eD:function(a,b){var u,t,s,r,q,p,o,n=U.a7
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaL(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.l(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bB([n])
n.b=!0
this.E(n)},
h3:function(a,b){var u,t,s=U.a7
H.i(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gaL();u.A();)u.gK(u).gl().C(0,t)
s=new D.bC([s])
s.b=!0
this.E(s)},
aq:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ad()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aj(r,r.length,[H.A(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aq(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bf():u
r=s.e
if(r!=null)r.ak(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.H(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a7]},
$aS:function(){return[U.a7]},
$ia7:1}
U.a7.prototype={}
U.dM.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.I():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
seg:function(a){var u
a=V.jL(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.D().a)){this.a=a
u=new D.u("yaw",u,a,[P.n])
u.b=!0
this.E(u)}},
se6:function(a,b){var u
b=V.jL(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.D().a)){this.b=b
u=new D.u("pitch",u,b,[P.n])
u.b=!0
this.E(u)}},
sea:function(a){var u
a=V.jL(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
u=new D.u("roll",u,a,[P.n])
u.b=!0
this.E(u)}},
aq:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seg(u.a+u.d*b.y)
u.se6(0,u.b+u.e*b.y)
u.sea(u.c+u.f*b.y)
u.x=V.kA(u.c).n(0,V.kz(u.b)).n(0,V.jY(u.a))
t=u.y
if(t!=null)t.ak(0)}return u.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dM))return!1
u=r.a
t=b.a
s=$.D().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+"], ["+V.M(u.d,3,0)+", "+V.M(u.e,3,0)+", "+V.M(u.f,3,0)+"]"}}
U.e2.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.I():u},
E:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.v(a)},
a8:function(){return this.E(null)},
aX:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdB().h(0,u.gbA())
u.a.c.gdX().h(0,u.gbC())
u.a.c.gbn().h(0,u.gbE())
return!0},
bB:function(a){var u=this
H.k(a,"$iv")
if(!J.H(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$ibg")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.J(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.J(0,a.y)
u=new V.P(t.a,t.b).n(0,2).q(0,u.gab())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.P(s.a,s.b).n(0,2).q(0,u.gab())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
n.b.sS(0)
t=t.J(0,a.z)
n.Q=new V.P(t.a,t.b).n(0,2).q(0,u.gab())}n.a8()},
bF:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sS(t*10*s)
r.a8()}},
aq:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.ad()
if(s<r){t.ch=r
u=b.y
t.b.a6(0,u)
t.cx=V.kA(t.b.d)}return t.cx},
$ia7:1}
U.e3.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.I():u},
E:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.v(a)},
a8:function(){return this.E(null)},
aX:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdB().h(0,s.gbA())
s.a.c.gdX().h(0,s.gbC())
s.a.c.gbn().h(0,s.gbE())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.h(0,s.gfe())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.h(0,s.gfg())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.h(0,s.ghL())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.h(0,s.ghJ())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.h(0,s.ghH())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
bB:function(a){var u=this
a=H.p(H.k(a,"$iv"),"$ibg")
if(!J.H(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$ibg")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.J(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.ar(new V.P(t.a,t.b).n(0,2).q(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.ar(new V.P(s.a,s.b).n(0,2).q(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.J(0,a.z)
n.dx=n.ar(new V.P(t.a,t.b).n(0,2).q(0,u.gab()))}n.a8()},
bF:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sS(-t*10*u)
r.a8()}},
ff:function(a){var u=this
if(H.p(H.k(a,"$iv"),"$idz").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fh:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$ibg")
if(!J.H(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.ar(new V.P(s.a,s.b).n(0,2).q(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.J(0,a.z)
n.dx=n.ar(new V.P(t.a,t.b).n(0,2).q(0,u.gab()))
n.a8()},
hM:function(a){var u=this
H.k(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hK:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.k(a,"$iv"),"$idX")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.J(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.ar(new V.P(t.a,t.b).n(0,2).q(0,u.gab()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.ar(new V.P(s.a,s.b).n(0,2).q(0,u.gab()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa_(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.J(0,a.z)
n.dx=n.ar(new V.P(t.a,t.b).n(0,2).q(0,u.gab()))}n.a8()},
hI:function(a){var u,t,s,r=this
H.k(a,"$iv")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sS(-t*10*u)
r.a8()}},
aq:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.ad()
if(s<r){t.dy=r
u=b.y
t.c.a6(0,u)
t.b.a6(0,u)
t.fr=V.jY(t.b.d).n(0,V.kz(t.c.d))}return t.fr},
$ia7:1}
U.e4.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.I():u},
E:function(a){var u=this.r
if(u!=null)u.v(a)},
aX:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.gfi()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).h(0,t)
return!0},
fj:function(a){var u,t,s,r,q=this
H.k(a,"$iv")
if(!J.H(q.b,q.a.b.c))return
H.p(a,"$icx")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r,[P.n])
u.b=!0
q.E(u)}},
aq:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kB(u,u,u,1)}return t.f},
$ia7:1}
M.d9.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.I():u},
P:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.v(a)},
aw:function(){return this.P(null)},
h7:function(a,b){var u,t,s,r,q,p,o,n=M.an
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.l(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bB([n])
n.b=!0
this.P(n)},
h9:function(a,b){var u,t,s=M.an
H.i(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gU();u.A();)u.gK(u).gl().C(0,t)
s=new D.bC([s])
s.b=!0
this.P(s)},
a0:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.aj(u,u.length,[H.A(u,0)]);u.A();){t=u.d
if(t!=null)t.a0(a)}s.f=!1},
$ae:function(){return[M.an]},
$aS:function(){return[M.an]},
$ian:1}
M.dc.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.I():u},
P:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.v(a)},
aw:function(){return this.P(null)},
saQ:function(a,b){var u,t,s=this
if(b==null)b=X.kr(null)
u=s.c
if(u!==b){if(u!=null)u.gl().C(0,s.gU())
t=s.c
s.c=b
b.gl().h(0,s.gU())
u=new D.u("target",t,s.c,[X.cH])
u.b=!0
s.P(u)}},
sac:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().C(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.u("technique",u,t.d,[O.bl])
s.b=!0
t.P(s)}},
a0:function(a){var u,t,s=this
a.cn(s.d)
s.c.Y(a)
u=s.b
u.toString
a.cy.bk(V.bf())
t=V.bf()
u.a
a.db.bk(t)
u=s.d
if(u!=null)u.a6(0,a)
s.e.a6(0,a)
s.e.a0(a)
s.b.toString
a.cy.b6()
a.db.b6()
s.c.aD(a)
a.cm()},
$ian:1}
M.dj.prototype={
P:function(a){var u
H.k(a,"$iv")
u=this.y
if(u!=null)u.v(a)},
aw:function(){return this.P(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n=E.am
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gU(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aR()
o.sX(null)
o.sas(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bB([n])
n.b=!0
this.P(n)},
fw:function(a,b){var u,t,s=E.am
H.i(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gU();u.A();)u.gK(u).gl().C(0,t)
s=new D.bC([s])
s.b=!0
this.P(s)},
saQ:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().C(0,t.gU())
u=t.c
t.c=b
b.gl().h(0,t.gU())
s=new D.u("target",u,t.c,[X.cH])
s.b=!0
t.P(s)}},
sac:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().C(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gU())
s=new D.u("technique",u,t.d,[O.bl])
s.b=!0
t.P(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.I():u},
a0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cn(c.d)
c.c.Y(a)
u=c.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aG(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bk(m)
t=$.kE
if(t==null){t=V.m4()
s=$.kX
if(s==null)s=$.kX=new V.J(0,1,0)
r=$.kW
if(r==null)r=$.kW=new V.J(0,0,-1)
l=r.q(0,Math.sqrt(r.B(r)))
s=s.aY(l)
k=s.q(0,Math.sqrt(s.B(s)))
j=l.aY(k)
i=new V.J(t.a,t.b,t.c)
h=k.O(0).B(i)
g=j.O(0).B(i)
f=l.O(0).B(i)
t=V.aG(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.kE=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aq(0,a,u)
if(d!=null)e=d.n(0,e)}a.db.bk(e)
u=c.d
if(u!=null)u.a6(0,a)
for(u=c.e.a,u=new J.aj(u,u.length,[H.A(u,0)]);u.A();)u.d.a6(0,a)
for(u=c.e.a,u=new J.aj(u,u.length,[H.A(u,0)]);u.A();)u.d.a0(a)
c.b.toString
a.cy.b6()
a.db.b6()
c.c.aD(a)
a.cm()},
seP:function(a,b){this.e=H.i(b,"$iS",[E.am],"$aS")},
$ian:1}
M.dn.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.I():u},
P:function(a){var u
H.k(a,"$iv")
u=this.b
if(u!=null)u.v(a)},
aw:function(){return this.P(null)},
a0:function(a){var u=this.e
if(u!=null)u.a0(a)
u=this.r
if(u!=null)u.a0(a)},
$ian:1}
M.an.prototype={}
A.d4.prototype={}
A.f5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
c4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.al.prototype={
gal:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){return""+this.gal(this)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dp.prototype={
df:function(a,b){if(b!=null&&b.d)a.el(b)}}
A.fJ.prototype={
aI:function(a,b,c,d){var u,t,s,r,q=[P.n]
H.i(c,"$ib",q,"$ab")
H.i(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.d(c,0)
t=Math.abs(c[0]-0)<$.D().a
if(t){if(0>=d.length)return H.d(d,0)
s=d[0]
d=C.a.cD(d,1)
c=C.a.cD(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.j(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.d(c,r)
a.a+="  offset = blurScale * "+H.j(c[r])+";\n"
if(r>=d.length)return H.d(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.j(d[r])+";\n"
if(r>=d.length)return H.d(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.j(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dB.prototype={
es:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bk("")
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
A.mP(c0,u)
A.mR(c0,u)
A.mQ(c0,u)
A.mT(c0,u)
A.mU(c0,u)
A.mS(c0,u)
A.mV(c0,u)
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
b5.cd(0,s.charCodeAt(0)==0?s:s,A.mO(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.G(0,"invViewMat"),"$iae")
if(t)b5.dy=H.p(b5.y.G(0,"objMat"),"$iae")
if(r)b5.fr=H.p(b5.y.G(0,"viewObjMat"),"$iae")
b5.fy=H.p(b5.y.G(0,"projViewObjMat"),"$iae")
if(c0.ry)b5.k1=H.p(b5.y.G(0,"txt2DMat"),"$ic2")
if(c0.x1)b5.k2=H.p(b5.y.G(0,"txtCubeMat"),"$iae")
if(c0.x2)b5.k3=H.p(b5.y.G(0,"colorMat"),"$iae")
b5.seL(H.c([],[A.ae]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.G(0,"bendMatCount"),"$iah")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.x(b7+q+b8));(s&&C.a).h(s,H.p(m,"$iae"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.G(0,"emissionClr"),"$iU")
if(t.c)b5.ry=H.p(b5.y.G(0,"emissionTxt"),"$iai")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.G(0,"ambientClr"),"$iU")
if(t.c)b5.y1=H.p(b5.y.G(0,"ambientTxt"),"$iai")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.G(0,"diffuseClr"),"$iU")
if(t.c)b5.bg=H.p(b5.y.G(0,"diffuseTxt"),"$iai")
t=c0.d
if(t.a)b5.dF=H.p(b5.y.G(0,"invDiffuseClr"),"$iU")
if(t.c)b5.dG=H.p(b5.y.G(0,"invDiffuseTxt"),"$iai")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dJ=H.p(b5.y.G(0,"shininess"),"$ia8")
if(s)b5.dH=H.p(b5.y.G(0,"specularClr"),"$iU")
if(t.c)b5.dI=H.p(b5.y.G(0,"specularTxt"),"$iai")}if(c0.f.c)b5.dK=H.p(b5.y.G(0,"bumpTxt"),"$iai")
if(c0.cy){b5.dL=H.p(b5.y.G(0,"envSampler"),"$iai")
t=c0.r
if(t.a)b5.dM=H.p(b5.y.G(0,"reflectClr"),"$iU")
if(t.c)b5.dN=H.p(b5.y.G(0,"reflectTxt"),"$iai")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dO=H.p(b5.y.G(0,"refraction"),"$ia8")
if(s)b5.dP=H.p(b5.y.G(0,"refractClr"),"$iU")
if(t.c)b5.dQ=H.p(b5.y.G(0,"refractTxt"),"$iai")}}t=c0.y
if(t.a)b5.dR=H.p(b5.y.G(0,"alpha"),"$ia8")
if(t.c)b5.dS=H.p(b5.y.G(0,"alphaTxt"),"$iai")
t=P.q
s=[t,A.ah]
b5.seX(new H.Y(s))
b5.seY(new H.Y([t,[P.b,A.c1]]))
b5.shh(new H.Y(s))
b5.shi(new H.Y([t,[P.b,A.c3]]))
b5.shz(new H.Y(s))
b5.shA(new H.Y([t,[P.b,A.c4]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c1],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.av()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.x(b7+g+b8))
H.p(m,"$iU")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.x(b7+g+b8))
H.p(f,"$iU")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.x(b7+g+b8))
H.p(e,"$iU")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.x(b7+g+b8))
H.p(m,"$iU")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.x(b7+g+b8))
H.p(f,"$iU")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.p(e,"$iaC")
a=e}else a=b6
C.a.h(h,new A.c1(b,c,d,m,f,a))}b5.c7.m(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.m(0,j,H.k(m,"$iah"))}for(t=c0.Q,s=t.length,r=[A.c3],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
H.p(m,"$iU")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.x(b7+o+b8))
H.p(f,"$iU")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.p(e,"$iU")
if(typeof j!=="number")return j.av()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.p(a0,"$ic2")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.p(a0,"$iai")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.p(a0,"$iai")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.p(a2,"$ibI")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.p(a0,"$ia8")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.p(a2,"$ia8")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.x(b7+o+b8))
H.p(a5,"$ia8")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c3(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c9.m(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.m(0,j,H.k(m,"$iah"))}for(t=c0.ch,s=t.length,r=[A.c4],l=0;l<t.length;t.length===s||(0,H.w)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
H.p(m,"$iU")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.x(b7+o+b8))
H.p(f,"$iU")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.x(b7+o+b8))
H.p(e,"$iU")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.x(b7+o+b8))
H.p(a0,"$iU")
if(typeof j!=="number")return j.av()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.p(a2,"$iU")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.x(b7+o+b8))
H.p(a5,"$iU")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.x(b7+o+b8))
H.p(a9,"$ia8")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.x(b7+o+b8))
H.p(b0,"$ia8")
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
if(a2==null)H.z(P.x(b7+g+b8))
H.p(a2,"$ibI")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.p(a2,"$ia8")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.x(b7+g+b8))
H.p(a5,"$ia8")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.p(a2,"$ia8")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.x(b7+g+b8))
H.p(a5,"$ia8")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.x(b7+g+b8))
H.p(a9,"$ia8")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.x(b7+g+b8))
H.p(a2,"$iaC")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.x(b7+o+b8))
H.p(a2,"$iaC")
a3=a2}else a3=b6
C.a.h(h,new A.c4(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cb.m(0,j,h)
q=b5.ca
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.x(b7+o+b8))
q.m(0,j,H.k(m,"$iah"))}}},
af:function(a,b){if(b!=null&&b.d>=6)a.em(b)},
seL:function(a){this.r1=H.i(a,"$ib",[A.ae],"$ab")},
seX:function(a){this.c6=H.i(a,"$iG",[P.q,A.ah],"$aG")},
seY:function(a){this.c7=H.i(a,"$iG",[P.q,[P.b,A.c1]],"$aG")},
shh:function(a){this.c8=H.i(a,"$iG",[P.q,A.ah],"$aG")},
shi:function(a){this.c9=H.i(a,"$iG",[P.q,[P.b,A.c3]],"$aG")},
shz:function(a){this.ca=H.i(a,"$iG",[P.q,A.ah],"$aG")},
shA:function(a){this.cb=H.i(a,"$iG",[P.q,[P.b,A.c4]],"$aG")}}
A.ay.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aA.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aB.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h4.prototype={
i:function(a){return this.b0}}
A.c1.prototype={}
A.c3.prototype={}
A.c4.prototype={}
A.cE.prototype={
bp:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cd:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cZ(b,35633)
r.f=r.cZ(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.lc(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.x("Failed to link shader: "+H.j(s)))}r.hu()
r.hw()},
Y:function(a){a.a.useProgram(this.r)
this.x.i3()},
cZ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.lc(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.x("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hu:function(){var u,t,s,r=this,q=H.c([],[A.d4]),p=r.a,o=H.X(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d4(p,t.name,s))}r.x=new A.f5(q)},
hw:function(){var u,t,s,r=this,q=H.c([],[A.dY]),p=r.a,o=H.X(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.i0(t.type,t.size,t.name,s))}r.y=new A.iq(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.k1(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.aC(u,b,c)
else return A.k1(u,this.r,b,a,c)},
eT:function(a,b,c){var u=this.a
if(a===1)return new A.ai(u,b,c)
else return A.k1(u,this.r,b,a,c)},
be:function(a,b){return new P.ef(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
i0:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.a8(u.a,c,d)
case 35664:return new A.ar(u.a,c,d)
case 35665:return new A.U(u.a,c,d)
case 35666:return new A.bI(u.a,c,d)
case 35667:return new A.im(u.a,c,d)
case 35668:return new A.io(u.a,c,d)
case 35669:return new A.ip(u.a,c,d)
case 35674:return new A.ir(u.a,c,d)
case 35675:return new A.c2(u.a,c,d)
case 35676:return new A.ae(u.a,c,d)
case 35678:return u.eS(b,c,d)
case 35680:return u.eT(b,c,d)
case 35670:throw H.h(u.be("BOOL",c))
case 35671:throw H.h(u.be("BOOL_VEC2",c))
case 35672:throw H.h(u.be("BOOL_VEC3",c))
case 35673:throw H.h(u.be("BOOL_VEC4",c))
default:throw H.h(P.x("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bw.prototype={
i:function(a){return this.b}}
A.dT.prototype={
ex:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.cd(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mn(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.p(p.y.G(0,"txtCount"),"$iah")
p.ch=H.p(p.y.G(0,"backClr"),"$ibI")
p.shO(H.c([],[A.aC]))
p.seQ(H.c([],[A.ae]))
u=[A.ar]
p.shB(H.c([],u))
p.shC(H.c([],u))
p.seV(H.c([],u))
p.seW(H.c([],u))
p.sf6(H.c([],[A.ah]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iaC"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iae"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iar"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iar"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iar"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iar"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.z(P.x(o+r+n));(u&&C.a).h(u,H.p(q,"$iah"))}},
shO:function(a){this.cx=H.i(a,"$ib",[A.aC],"$ab")},
seQ:function(a){this.cy=H.i(a,"$ib",[A.ae],"$ab")},
shB:function(a){this.db=H.i(a,"$ib",[A.ar],"$ab")},
shC:function(a){this.dx=H.i(a,"$ib",[A.ar],"$ab")},
seV:function(a){this.dy=H.i(a,"$ib",[A.ar],"$ab")},
seW:function(a){this.fr=H.i(a,"$ib",[A.ar],"$ab")},
sf6:function(a){this.fx=H.i(a,"$ib",[A.ah],"$ab")}}
A.dY.prototype={}
A.iq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
G:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ah.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.il.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shP:function(a){H.i(a,"$ib",[P.q],"$ab")}}
A.a8.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.ar.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.U.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.bI.prototype={
en:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.cu(this.a,this.d,u,t,s,r)},
ek:function(a){return C.b.cu(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.c2.prototype={
ae:function(a){var u=new Float32Array(H.c6(H.i(a,"$ib",[P.n],"$ab")))
C.b.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ae.prototype={
ae:function(a){var u=new Float32Array(H.c6(H.i(a,"$ib",[P.n],"$ab")))
C.b.cv(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.aC.prototype={
el:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ai.prototype={
em:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jm.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cg(s.b,b).cg(s.d.cg(s.c,b),c)
a.sa_(0,new V.a5(r.a,r.b,r.c))
a.saC(r.q(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sdn(new V.az(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:9}
F.ju.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:24}
F.jv.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa_(0,new V.a5(s,u,q))
u=new V.J(s,u,q)
a.saC(u.q(0,Math.sqrt(u.B(u))))
a.sdn(new V.az(1-c,2+c,-1,-1))},
$S:9}
F.jw.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:25}
F.jx.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:25}
F.jH.prototype={
$2:function(a,b){return 0},
$S:24}
F.jI.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=this.b+s
s=a.f
t=new V.J(s.a,s.b,s.c)
s=t.q(0,Math.sqrt(t.B(t)))
a.sa_(0,new V.a5(s.a*u,s.b*u,s.c*u))},
$S:9}
F.a4.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.C(u.a.a.d.b,u)
u.a.a.Z()}u.bM()
u.bN()
u.hm()},
bQ:function(a){this.a=a
C.a.h(a.d.b,this)},
bR:function(a){this.b=a
C.a.h(a.d.c,this)},
ht:function(a){this.c=a
C.a.h(a.d.d,this)},
bM:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
hm:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cL()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dU())return
return s.q(0,Math.sqrt(s.B(s)))},
eO:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.B(r)))
r=t.J(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.aY(r.q(0,Math.sqrt(r.B(r))))
return r.q(0,Math.sqrt(r.B(r)))},
c0:function(){var u,t=this
if(t.d!=null)return!0
u=t.eK()
if(u==null){u=t.eO()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cL()
if(q!=null)s=s.F(0,q)
if(u!=null)s=s.F(0,u)
if(t!=null)s=s.F(0,t)
if(s.dU())return
return s.q(0,Math.sqrt(s.B(s)))},
eN:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.D().a){l=d.J(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.J(0,g)
l=new V.a5(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).J(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.B(l)))
l=o.aY(q)
l=l.q(0,Math.sqrt(l.B(l))).aY(o)
q=l.q(0,Math.sqrt(l.B(l)))}return q},
bZ:function(){var u,t=this
if(t.e!=null)return!0
u=t.eJ()
if(u==null){u=t.eN()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghX:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.e.aj(J.aw(s.a.e),0)+", "+C.e.aj(J.aw(s.b.e),0)+", "+C.e.aj(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.D("")}}
F.fA.prototype={}
F.hR.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.t()
t=t.e
u=c.c
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.c
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bd.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.a.C(u.a.a.c.b,u)
u.a.a.Z()}u.bM()
u.bN()},
bQ:function(a){this.a=a
C.a.h(a.c.b,this)},
bR:function(a){this.b=a
C.a.h(a.c.c,this)},
bM:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
bN:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){if(this.gb_())return a+"disposed"
return a+C.e.aj(J.aw(this.a.e),0)+", "+C.e.aj(J.aw(this.b.e),0)},
M:function(){return this.D("")}}
F.fS.prototype={}
F.ik.prototype={
b2:function(a,b,c){var u,t=b.a
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
return t==u.e}else{t=b.a
t.a.a.t()
t=t.e
u=c.b
u.a.a.t()
if(t==u.e){t=b.b
t.a.a.t()
t=t.e
u=c.a
u.a.a.t()
return t==u.e}else return!1}}}
F.bF.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.aj(J.aw(u.e),0)},
M:function(){return this.D("")}}
F.dO.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.I():u},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.t()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){r=g[s]
h.a.h(0,r.i_())}h.a.t()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bF()
if(n.a==null)H.z(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lY(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.w)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.t()
p=p.e
if(typeof p!=="number")return p.F()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.t()
o=o.e
if(typeof o!=="number")return o.F()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cq(l,k,i)}g=h.e
if(g!=null)g.ak(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
ie:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.A(o,0)])
for(o=[F.a9];u.length!==0;){t=C.a.gi5(u)
C.a.e8(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b2(0,t,q)){C.a.h(s,q)
C.a.e8(u,r)}}if(s.length>1)b.b3(s)}}p.a.t()
p.c.co()
p.d.co()
p.b.iy()
p.c.cp(new F.ik())
p.d.cp(new F.hR())
o=p.e
if(o!=null)o.ak(0)},
dm:function(){this.ie(new F.iD(),new F.hr())},
bh:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bh()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdY(new V.J(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.J(s,r,o).q(0,Math.sqrt(s*s+r*r+o*o))
if(!J.H(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}o=p.e
if(o!=null)o.ak(0)},
bY:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.av()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bs().a)!==0)++s
if((t&$.br().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.d3().a)!==0)++s
if((t&$.cf().a)!==0)++s
if((t&$.bq().a)!==0)++s
r=a3.gcC(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.n
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d7])
for(n=0,m=0;m<s;++m){l=a3.hU(m)
k=l.gcC(l)
C.a.m(o,m,new Z.d7(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].ib(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.m(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c6(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bu(new Z.e6(a0,f),o,a3)
e.sf8(H.c([],[Z.bA]))
if(a.b.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)}b=Z.k2(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(0,d.length,b))}if(a.c.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)}b=Z.k2(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(1,d.length,b))}if(a.d.b.length!==0){t=P.q
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.t()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.t()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.t()
C.a.h(d,c.e)}b=Z.k2(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bA(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.D(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.D(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.D(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.D(t))}return C.a.u(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.v(null)},
$inE:1}
F.hL.prototype={
dj:function(a){var u,t,s,r,q,p,o
H.i(a,"$ib",[F.a9],"$ab")
u=H.c([],[F.a4])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cq(s,p,o))}}return u},
hS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ib",[F.a9],"$ab")
u=H.c([],[F.a4])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cq(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cq(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cq(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cq(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghX(s)
if(t)s.aZ()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].c0())s=!1
return s},
c_:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].bZ())s=!1
return s},
bh:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.v(null)}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(a))
return C.a.u(r,"\n")},
M:function(){return this.D("")},
sf1:function(a){this.b=H.i(a,"$ib",[F.a4],"$ab")}}
F.hM.prototype={
gk:function(a){return this.b.length},
cp:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b2(0,p,n)){p.aZ()
break}}}}},
co:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.H(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.M()},
D:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].D(a+(""+u+". ")))}return C.a.u(s,"\n")},
M:function(){return this.D("")},
sfa:function(a){this.b=H.i(a,"$ib",[F.bd],"$ab")}}
F.hN.prototype={
gk:function(a){return this.b.length},
iy:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.v(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
D:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(a))
return C.a.u(r,"\n")},
M:function(){return this.D("")},
sbJ:function(a){this.b=H.i(a,"$ib",[F.bF],"$ab")}}
F.a9.prototype={
c2:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.e5(u.cx,r,o,t,s,q,p,a,n)},
i_:function(){return this.c2(null)},
sa_:function(a,b){var u
if(!J.H(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdY:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.B(a)))
if(!J.H(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
saC:function(a){var u
if(!J.H(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sdn:function(a){var u
if(!J.H(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
ib:function(a){var u,t,s=this
if(a.p(0,$.av())){u=s.f
t=[P.n]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bs())){u=s.r
t=[P.n]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.br())){u=s.x
t=[P.n]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bb())){u=s.y
t=[P.n]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bt())){u=s.z
t=[P.n]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d2())){u=s.Q
t=[P.n]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d3())){u=s.Q
t=[P.n]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cf()))return H.c([s.ch],[P.n])
else if(a.p(0,$.bq())){u=s.cx
t=[P.n]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.n])},
c0:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cL()
t.d.L(0,new F.iI(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
bZ:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cL()
t.d.L(0,new F.iH(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.e.aj(J.aw(s.e),0))
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
C.a.h(q,V.M(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
M:function(){return this.D("")}}
F.iI.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.iH.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.iy.prototype={
t:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Z()
return!0},
dk:function(a,b,c,d,e,f,g){var u=F.e5(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bf:function(a,b,c,d,e,f){return this.dk(a,b,c,null,d,e,f)},
hT:function(a,b,c,d,e,f){return this.dk(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].c0()
return!0},
c_:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].bZ()
return!0},
hW:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.M()},
D:function(a){var u,t,s,r
this.t()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)C.a.h(u,t[r].D(a))
return C.a.u(u,"\n")},
M:function(){return this.D("")},
shQ:function(a){this.c=H.i(a,"$ib",[F.a9],"$ab")}}
F.iz.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
L:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.L(u.b,b)
C.a.L(u.c,new F.iA(u,b))
C.a.L(u.d,new F.iB(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sf2:function(a){this.b=H.i(a,"$ib",[F.a4],"$ab")},
sf3:function(a){this.c=H.i(a,"$ib",[F.a4],"$ab")},
sf4:function(a){this.d=H.i(a,"$ib",[F.a4],"$ab")}}
F.iA.prototype={
$1:function(a){H.k(a,"$ia4")
if(!J.H(a.a,this.a))this.b.$1(a)},
$S:5}
F.iB.prototype={
$1:function(a){var u
H.k(a,"$ia4")
u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)},
$S:5}
F.iC.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sfb:function(a){this.b=H.i(a,"$ib",[F.bd],"$ab")},
sfc:function(a){this.c=H.i(a,"$ib",[F.bd],"$ab")}}
F.iE.prototype={}
F.iD.prototype={
b2:function(a,b,c){return J.H(b.f,c.f)}}
F.iF.prototype={}
F.hr.prototype={
b3:function(a){var u,t,s,r
H.i(a,"$ib",[F.a9],"$ab")
u=V.cL()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.B(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.w)(a),++s)a[s].sdY(u)
return}}
F.iG.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)C.a.h(r,u[s].D(""))
return C.a.u(r,"\n")},
sbJ:function(a){this.b=H.i(a,"$ib",[F.bF],"$ab")}}
O.dq.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.I():u},
w:function(a){var u
H.k(a,"$iv")
u=this.x
if(u!=null)u.v(a)},
aa:function(){return this.w(null)},
sbX:function(a){var u=this.r
if(!(Math.abs(u-a)<$.D().a)){this.r=a
u=new D.u("blurValue",u,a,[P.n])
u.b=!0
this.w(u)}},
sdv:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().C(0,t.ga1())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga1())
s=new D.u("colorTexture",u,t.e,[T.c0])
s.b=!0
t.w(s)}},
sbW:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.ga1())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.ga1())
r=new D.u("blurTexture",u,s.f,[T.c0])
t=r.b=!0
s.w(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.w(null)}}},
scs:function(a){var u,t=this,s=$.ky
if(s==null){s=new V.bV(1,0,0,0,1,0,0,0,1)
$.ky=s
a=s}else a=s
if(!J.H(t.b,a)){u=t.b
t.b=a
s=new D.u("textureMatrix",u,a,[V.bV])
s.b=!0
t.w(s)}},
sbV:function(a){var u,t,s=this
if(a==null)a=V.l_()
if(!J.H(s.c,a)){u=s.c
s.c=a
t=new D.u("blurAdjust",u,a,[V.bo])
t.b=!0
s.w(t)}},
a6:function(a,b){},
a3:function(a,b){H.i(a,"$ib",[T.bm],"$ab")
if(b!=null)if(!C.a.ag(a,b)){b.a=a.length
C.a.h(a,b)}},
cq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.k(a.fr.j(0,t),"$idp")
if(s==null){g=a.a
s=new A.dp(g,t)
s.bp(g,t)
r=s.z=new A.fJ(u,t)
q=new P.bk("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.n]
r.aI(q,3,H.c([0.75],g),H.c([0.5],g))
r.aI(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aI(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aI(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aI(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aI(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.cd(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.p(s.y.j(0,"projViewObjMat"),"$iae")
s.cy=H.p(s.y.j(0,"txt2DMat"),"$ic2")
s.dy=H.p(s.y.j(0,"colorTxt"),"$iaC")
s.dx=H.p(s.y.j(0,"blurScale"),"$iar")
g=s.y
if(u){s.fr=H.p(g.j(0,"blurTxt"),"$iaC")
s.db=H.p(s.y.j(0,"blurAdj"),"$ibI")}else s.fx=H.p(g.j(0,"blurValue"),"$ia8")
a.bT(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.bu)?b.e=null:g)==null){g=b.d
p=$.av()
o=$.bb()
o=g.bY(new Z.cM(a.a),new Z.b7(p.a|o.a))
o.ao($.av()).e=h.a.Q.c
o.ao($.bb()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bm])
h.a3(n,h.e)
g=r.a
if(g)h.a3(n,h.f)
for(m=0;m<n.length;++m)n[m].Y(a)
p=h.a
p.Y(a)
o=h.e
p.df(p.dy,o)
o=h.b
l=p.cy
l.toString
l.ae(o.a5(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.q()
o=o.b
j=a.d
if(typeof o!=="number")return o.q()
i=p.dx
C.b.b8(i.a,i.d,l/k,o/j)
j=a.ge7()
p=p.cx
p.toString
p.ae(j.a5(0,!0))
p=h.a
if(g){g=h.f
p.df(p.fr,g)
g=h.c
p.db.en(g)}else{g=h.r
p=p.fx
C.b.a2(p.a,p.d,g)}g=b.e
if(g instanceof Z.bu){g.Y(a)
g.a0(a)
g.aD(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.c4()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dC.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.I():u},
w:function(a){var u
H.k(a,"$iv")
u=this.fr
if(u!=null)u.v(a)},
aa:function(){return this.w(null)},
da:function(a){H.k(a,"$iv")
this.a=null
this.w(a)},
hq:function(){return this.da(null)},
fn:function(a,b){var u=V.a6
H.i(b,"$ie",[u],"$ae")
u=new D.bB([u])
u.b=!0
this.w(u)},
fp:function(a,b){var u=V.a6
H.i(b,"$ie",[u],"$ae")
u=new D.bC([u])
u.b=!0
this.w(u)},
cW:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.q,h=new H.Y([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=r.gan()
p=h.j(0,r.gan())
h.m(0,q,p==null?1:p)}o=H.c([],[A.ay])
h.L(0,new O.h8(j,o))
C.a.bo(o,new O.h9())
n=new H.Y([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=r.gan()
p=n.j(0,r.gan())
n.m(0,q,p==null?1:p)}m=H.c([],[A.aA])
n.L(0,new O.ha(j,m))
C.a.bo(m,new O.hb())
l=new H.Y([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.w)(i),++s){r=i[s]
t=r.gan()
q=l.j(0,r.gan())
l.m(0,t,q==null?1:q)}k=H.c([],[A.aB])
l.L(0,new O.hc(j,k))
C.a.bo(k,new O.hd())
i=C.d.a4(j.e.a.length+3,4)
j.dy.e
return A.m3(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a3:function(a,b){H.i(a,"$ib",[T.bm],"$ab")
if(b!=null)if(!C.a.ag(a,b)){b.a=a.length
C.a.h(a,b)}},
a6:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.aj(u,u.length,[H.A(u,0)]);u.A();){t=u.d
t.toString
s=$.cw
t.a=s==null?$.cw=new V.a6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.aq(0,b,t)}},
cq:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cW()
u=H.k(b4.fr.j(0,b3.b0),"$idB")
if(u==null){u=A.m2(b3,b4.a)
b4.bT(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bg
b3=b5.e
if(!(b3 instanceof Z.bu))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.at()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c_()
q.a.c_()
q=q.e
if(q!=null)q.ak(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hW()
p=p.e
if(p!=null)p.ak(0)}n=b5.d.bY(new Z.cM(b4.a),s)
n.ao($.av()).e=b2.a.Q.c
if(b3)n.ao($.bs()).e=b2.a.cx.c
if(r)n.ao($.br()).e=b2.a.ch.c
if(t.r1)n.ao($.bb()).e=b2.a.cy.c
if(q)n.ao($.bt()).e=b2.a.db.c
if(t.rx)n.ao($.bq()).e=b2.a.dx.c
b5.e=n}b3=T.bm
m=H.c([],[b3])
b2.a.Y(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga9(q)
r=r.dy
r.toString
r.ae(q.a5(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga9(q)
p=b4.dx
p=b4.cx=q.n(0,p.ga9(p))
q=p}r=r.fr
r.toString
r.ae(q.a5(0,!0))}r=b2.a
q=b4.ge7()
r=r.fy
r.toString
r.ae(q.a5(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ae(C.k.a5(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ae(C.k.a5(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ae(C.k.a5(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.aS(r.a,r.d,l)
for(r=[P.n],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ia6")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.c6(H.i(p.a5(0,!0),"$ib",r,"$ab")))
C.b.cv(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.f.e)
r=b2.a
q=b2.f.e
r.af(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.r.e)
r=b2.a
q=b2.r.e
r.af(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.x.e)
r=b2.a
q=b2.x.e
r.af(r.bg,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dF
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.y.e)
r=b2.a
q=b2.y.e
r.af(r.dG,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dJ
C.b.a2(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dH
C.b.R(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a3(m,b2.z.e)
r=b2.a
q=b2.z.e
r.af(r.dI,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga9(q)
q=P.q
h=new H.Y([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=f.gan()
d=h.j(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.f_(b2.a.c7.j(0,e),d)
b=f.gdA(f)
a=C.c.n(i.a,b.gdC(b))+C.c.n(i.b,b.gdD(b))+C.c.n(i.c,b.gdE())
a0=C.c.n(i.e,b.gdC(b))+C.c.n(i.f,b.gdD(b))+C.c.n(i.r,b.gdE())
b=C.c.n(i.y,b.gdC(b))+C.c.n(i.z,b.gdD(b))+C.c.n(i.Q,b.gdE())
b=new V.J(a,a0,b).q(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.b.R(a0.a,a0.d,a,a1,b)
b=f.gaO(f)
a1=c.f
C.b.R(a1.a,a1.d,b.a,b.b,b.c)
f.gaR()
b=f.gdA(f)
a=c.d
C.b.R(a.a,a.d,b.a,b.b,b.c)
b=f.gbn()
a=c.b
C.b.R(a.a,a.d,b.a,b.b,b.c)
b=f.gbl(f)
a=c.c
C.b.R(a.a,a.d,b.a,b.b,b.c)
b=f.gaR()
H.i(m,"$ib",o,"$ab")
if(!C.a.ag(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaR()
a=b.gdW(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c6.j(0,p)
C.b.aS(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga9(q)
q=P.q
a2=new H.Y([q,q])
for(q=b2.dx.f,p=q.length,o=[P.n],b=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=f.gan()
d=a2.j(0,e)
if(d==null)d=0
a2.m(0,e,d+1)
c=J.f_(b2.a.c9.j(0,e),d)
a3=i.n(0,f.a)
a=f.a
a0=$.cB
a=a.ct(a0==null?$.cB=new V.a5(0,0,0):a0)
a0=c.b
C.b.R(a0.a,a0.d,a.a,a.b,a.c)
a=$.cB
a=a3.ct(a==null?$.cB=new V.a5(0,0,0):a)
a0=c.c
C.b.R(a0.a,a0.d,a.a,a.b,a.c)
a=f.c
a0=c.e
C.b.R(a0.a,a0.d,a.a,a.b,a.c)
if(f.d!=null||!1){a=a3.dT(0)
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
j=new Float32Array(H.c6(H.i(new V.bV(a0,a1,a4,a5,a6,a7,a8,a9,a).a5(0,!0),"$ib",o,"$ab")))
C.b.ef(b0.a,b0.d,!1,j)}a=f.d
a0=a!=null
if(a0){H.i(m,"$ib",b,"$ab")
if(a0)if(!C.a.ag(m,a)){a.a=m.length
C.a.h(m,a)}a=f.d
a0=a!=null
if(a0&&a.d>=6){a1=c.f
a1.toString
if(!a0||a.d<6)a1.a.uniform1i(a1.d,0)
else{a=a.a
a1.a.uniform1i(a1.d,a)}}}a=f.r
a0=c.y
C.b.a2(a0.a,a0.d,a)
a=f.x
a0=c.z
C.b.a2(a0.a,a0.d,a)
a=f.y
a0=c.Q
C.b.a2(a0.a,a0.d,a)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.w)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.c8.j(0,p)
C.b.aS(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga9(q)
q=P.q
b1=new H.Y([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.w)(q),++g){f=q[g]
e=f.gan()
d=b1.j(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.f_(b2.a.cb.j(0,e),d)
o=f.giw(f)
b=c.b
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gdA(f).j2()
b=c.c
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=i.ct(f.giw(f))
b=c.d
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gaO(f)
b=c.e
C.b.R(b.a,b.d,o.a,o.b,o.c)
f.gaR()
o=f.gbn()
b=c.f
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gbl(f)
b=c.r
C.b.R(b.a,b.d,o.a,o.b,o.c)
o=f.gj3()
b=c.x
C.b.a2(b.a,b.d,o)
o=f.gj4()
b=c.y
C.b.a2(b.a,b.d,o)
f.gaR()
o=f.gaR()
H.i(m,"$ib",b3,"$ab")
if(!C.a.ag(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaR()
b=o.gdW(o)
if(b){b=c.dx
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}f.gcB()
o=f.giL()
b=c.z
C.b.cu(b.a,b.d,o.a,o.b,o.c,o.d)
o=f.gcB()
if(!C.a.ag(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gcB()
b=o.gdW(o)
if(b){b=c.dy
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}if(f.giT()){o=f.giR()
b=c.Q
C.b.a2(b.a,b.d,o)
o=f.giQ()
b=c.ch
C.b.a2(b.a,b.d,o)}if(f.giS()){o=f.giN()
b=c.cx
C.b.a2(b.a,b.d,o)
o=f.giO()
b=c.cy
C.b.a2(b.a,b.d,o)
o=f.giP()
b=c.db
C.b.a2(b.a,b.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.w)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.ca.j(0,q)
C.b.aS(q.a,q.d,l)}}}if(t.f.c){b2.a3(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.af(b3.dK,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga9(r).dT(0)}b3=b3.id
b3.toString
b3.ae(r.a5(0,!0))}if(t.cy){b2.a3(m,b2.ch)
b3=b2.a
r=b2.ch
b3.af(b3.dL,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dM
C.b.R(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a3(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.af(b3.dN,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dO
C.b.a2(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dP
C.b.R(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a3(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.af(b3.dQ,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dR
C.b.a2(r.a,r.d,p)}if(b3.c){b2.a3(m,b2.db.e)
r=b2.a
p=b2.db.e
r.af(r.dS,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d>=6){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(34067,p.b)}}p=b5.e
p.Y(b4)
p.a0(b4)
p.aD(b4)
if(q)b3=b3.c
else b3=!0
if(b3)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(34067,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.c4()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cW().b0},
seM:function(a){this.e=H.i(a,"$iS",[V.a6],"$aS")}}
O.h8.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.ay(a,C.d.a4(b+3,4)*4))},
$S:8}
O.h9.prototype={
$2:function(a,b){H.k(a,"$iay")
H.k(b,"$iay")
return J.jM(a.a,b.a)},
$S:40}
O.ha.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aA(a,C.d.a4(b+3,4)*4))},
$S:8}
O.hb.prototype={
$2:function(a,b){H.k(a,"$iaA")
H.k(b,"$iaA")
return J.jM(a.a,b.a)},
$S:41}
O.hc.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.F()
return C.a.h(this.b,new A.aB(a,C.d.a4(b+3,4)*4))},
$S:8}
O.hd.prototype={
$2:function(a,b){H.k(a,"$iaB")
H.k(b,"$iaB")
return J.jM(a.a,b.a)},
$S:42}
O.h2.prototype={
az:function(){var u,t=this
t.cH()
u=t.f
if(!(Math.abs(u-1)<$.D().a)){t.f=1
u=new D.u(t.b,u,1,[P.n])
u.b=!0
t.a.w(u)}}}
O.cu.prototype={
w:function(a){return this.a.w(H.k(a,"$iv"))},
aa:function(){return this.w(null)},
az:function(){},
de:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.w(null)}},
saC:function(a){var u,t=this,s=t.c
if(!s.c)t.de(new A.al(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gl().C(0,t.ga1())
u=t.e
t.e=a
a.gl().h(0,t.ga1())
s=new D.u(t.b+".textureCube",u,t.e,[T.cI])
s.b=!0
t.a.w(s)}}}
O.h3.prototype={}
O.aX.prototype={
dd:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.u(s.b+".color",u,a,[V.a0])
t.b=!0
s.a.w(t)}},
az:function(){this.cH()
this.dd(new V.a0(1,1,1))},
saO:function(a,b){this.de(new A.al(!0,!1,this.c.c))
this.dd(b)}}
O.h5.prototype={}
O.h6.prototype={
az:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-1)<$.D().a)){t.ch=1
u=new D.u(t.b+".refraction",u,1,[P.n])
u.b=!0
t.a.w(u)}}}
O.h7.prototype={
az:function(){var u,t=this
t.cI()
u=t.ch
if(!(Math.abs(u-100)<$.D().a)){t.ch=100
u=new D.u(t.b+".shininess",u,100,[P.n])
u.b=!0
t.a.w(u)}}}
O.bl.prototype={}
O.dU.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.I():u},
w:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.v(a)},
aa:function(){return this.w(null)},
fG:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[O.aJ],"$ae")
for(u=b.length,t=this.ga1(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.w)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.aR()
o.sX(null)
o.sas(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sX(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
fI:function(a,b){var u,t
H.i(b,"$ie",[O.aJ],"$ae")
for(u=b.gT(b),t=this.ga1();u.A();)u.gK(u).gl().C(0,t)
this.aa()},
sdr:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.u("blend",u,a,[A.bw])
u.b=!0
this.w(u)}},
a6:function(a,b){},
f9:function(a){a=C.d.a4(a+3,4)*4
if(a<=0)return 4
return a},
cq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.f9(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.k(a.fr.j(0,t),"$idT")
if(s==null){s=A.mm(g,u,a.a)
a.bT(s)}h.b=s
u=s}if(b.e==null){u=b.d.bY(new Z.cM(a.a),$.av())
t=u.ao($.av())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.Y(a)
u=T.bm
q=H.c([],[u])
for(t=[P.n],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.i(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ag(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.d(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.d(r,p)
r=r[p]
if(m==null){m=$.cw
if(m==null){m=new V.a6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cw=m}}j=new Float32Array(H.c6(H.i(m.a5(0,!0),"$ib",t,"$ab")))
C.b.cv(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cD
if(m==null){m=V.hA(0,0,1,1)
$.cD=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.d(m,p)
m=m[p]
C.b.b8(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.d(r,p)
r=r[p]
C.b.b8(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cD
if(m==null){m=V.hA(0,0,1,1)
$.cD=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.d(m,p)
m=m[p]
C.b.b8(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.d(r,p)
r=r[p]
C.b.b8(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.d(r,p)
r=r[p]
m=H.B(m)?1:0
C.b.aS(r.a,r.d,m);++p}}u=h.b.Q
C.b.aS(u.a,u.d,p)
u=h.b
t=h.a
u.ch.ek(t)
for(o=0;o<q.length;++o)q[o].Y(a)
u=b.e
if(u instanceof Z.bu){u.Y(a)
u.a0(a)
u.aD(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.c4()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
sf_:function(a){this.c=H.i(a,"$iS",[O.aJ],"$aS")}}
O.aJ.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.I():u},
w:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.v(a)},
aa:function(){return this.w(null)}}
T.bm.prototype={}
T.c0.prototype={}
T.i6.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.I():u},
Y:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cI.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.I():u}}
T.i7.prototype={
dV:function(a,b,c,d,e,f){var u,t=this,s=34067,r=t.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null)
u=new T.cI()
u.a=0
u.b=q
u.c=!1
u.d=0
t.aK(u,q,a,34069,!1,!1)
t.aK(u,q,d,34070,!1,!1)
t.aK(u,q,b,34071,!1,!1)
t.aK(u,q,e,34072,!1,!1)
t.aK(u,q,c,34073,!1,!1)
t.aK(u,q,f,34074,!1,!1)
return u},
aK:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.aa(t,"load",H.l(new T.i8(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hr:function(a,b,c){var u,t,s,r
b=V.d1(b)
u=V.d1(a.width)
t=V.d1(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jP()
s.width=u
s.height=t
r=H.k(C.h.eh(s,"2d"),"$ick")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.n7(r.getImageData(0,0,s.width,s.height))}}}
T.i8.prototype={
$1:function(a){var u=this,t=u.a,s=t.hr(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.iE(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c5()}++t.e},
$S:28}
V.f1.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ibe:1}
V.be.prototype={}
V.dA.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aP(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
say:function(a){this.a=H.i(a,"$ib",[V.be],"$ab")},
$ibe:1}
V.bh.prototype={
aP:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cG(0)+"]"}}
V.hJ.prototype={
ev:function(a){var u,t
if(a.a.length<=0)throw H.h(P.x("May not create a SetMatcher with zero characters."))
u=new H.Y([P.q,P.a_])
for(t=new H.dy(a,a.gk(a),[H.au(a,"y",0)]);t.A();)u.m(0,t.d,!0)
this.shs(u)},
aP:function(a,b){return this.a.dw(0,b)},
i:function(a){var u=this.a
return P.jZ(new H.dx(u,[H.A(u,0)]))},
shs:function(a){this.a=H.i(a,"$iG",[P.q,P.a_],"$aG")},
$ibe:1}
V.cF.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cK(this.a.N(0,b))
r.say(H.c([],[V.be]))
r.c=!1
C.a.h(this.c,r)
return r},
i4:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
i:function(a){return this.b},
shN:function(a){this.c=H.i(a,"$ib",[V.cK],"$ab")}}
V.dW.prototype={
i:function(a){var u=H.lq(this.b,"\n","\\n"),t=H.lq(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cJ.prototype={
i:function(a){return this.b},
shn:function(a){var u=P.o
this.c=H.i(a,"$iG",[u,u],"$aG")}}
V.ib.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cF(this,b)
u.shN(H.c([],[V.cK]))
u.d=null
this.a.m(0,b,u)}return u},
b7:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cJ(a)
u=P.o
t.shn(new H.Y([u,u]))
this.b.m(0,a,t)}return t},
iJ:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dW]),l=this.c,k=[P.q],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.ba(a,s)
q=l.i4(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jZ(j)
throw H.h(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jZ(j)
o=l.d
n=o.c.j(0,p)
t=new V.dW(n==null?o.b:n,p,s)}++s}}},
shD:function(a){this.a=H.i(a,"$iG",[P.o,V.cF],"$aG")},
shG:function(a){this.b=H.i(a,"$iG",[P.o,V.cJ],"$aG")}}
V.cK.prototype={
i:function(a){return this.b.b+": "+this.cG(0)}}
X.fa.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.I():u},
W:function(a){var u=this.fr
if(u!=null)u.v(a)},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.u("width",u,b,[P.q])
u.b=!0
t.W(u)}},
sah:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.u("height",u,b,[P.q])
u.b=!0
t.W(u)}},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.n()
h.sam(0,C.c.V(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.n()
h.sah(0,C.c.V(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.X(u.getParameter(3379))
p=V.d1(s)
o=V.d1(r)
q=V.d1(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.ec(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kM(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.c5()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c5()
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
a.c=C.c.V(s*h.a)
r=t.d
a.d=C.c.V(r*h.b)
l=t.a
k=h.c
j=C.c.V(l*k)
t=t.b
l=h.d
u.viewport(j,C.c.V(t*l),C.c.V(s*k),C.c.V(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aD:function(a){a.a.bindFramebuffer(36160,null)}}
X.bP.prototype={$ibW:1}
X.fI.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.I():u},
Y:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.c.V(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.c.V(r*t)
r=C.c.V(s.c*u)
a.c=r
s=C.c.V(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aD:function(a){}}
X.fL.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.I():u},
$ibW:1,
$ibP:1}
X.dH.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.I():u},
W:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.v(a)},
eG:function(){return this.W(null)},
sau:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gl().C(0,s.gcM())
t=s.b
s.b=a
if(a!=null)a.gl().h(0,s.gcM())
u=new D.u("mover",t,s.b,[U.a7])
u.b=!0
s.W(u)}},
$ibW:1,
$ibP:1}
X.cH.prototype={}
V.jG.prototype={
$1:function(a){var u
H.k(a,"$ib4")
u=C.c.ee(this.a.gi6(),2)
if(u!=="0.00")P.ki(u+" fps")},
$S:37}
V.hO.prototype={
ew:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.m
W.aa(q,"scroll",H.l(new V.hQ(o),{func:1,ret:-1,args:[r]}),!1,r)},
dl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.o],"$ab")
this.hv()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iJ(C.a.ia(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.w)(s),++q){p=s[q]
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
if(H.nv(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
t.appendChild(l)}else{k=P.my(C.I,n,C.o,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hv:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ib()
t=P.o
u.shD(new H.Y([t,V.cF]))
u.shG(new H.Y([t,V.cJ]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).u(0,p)
s=V.ag(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).u(0,p)
s=new V.bh()
r=[V.be]
s.say(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a2("*"))
C.a.h(s.a,t)
t=u.N(0,p).u(0,"BoldEnd")
s=V.ag(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,o)
s=V.ag(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).u(0,o)
s=new V.bh()
s.say(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a2("_"))
C.a.h(s.a,t)
t=u.N(0,o).u(0,n)
s=V.ag(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,m)
s=V.ag(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).u(0,m)
s=new V.bh()
s.say(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a2("`"))
C.a.h(s.a,t)
t=u.N(0,m).u(0,"CodeEnd")
s=V.ag(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).u(0,l)
s=V.ag(new H.a2("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).u(0,k)
s=V.ag(new H.a2("|"))
C.a.h(t.a,s)
s=u.N(0,l).u(0,j)
t=V.ag(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).u(0,l)
t=new V.bh()
t.say(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a2("|]"))
C.a.h(t.a,s)
s=u.N(0,k).u(0,j)
t=V.ag(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).u(0,k)
t=new V.bh()
t.say(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a2("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).u(0,i).a,new V.f1())
s=u.N(0,i).u(0,i)
t=new V.bh()
t.say(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a2("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b7(p)
s=u.N(0,n)
s.d=s.a.b7(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b7(m)
s=u.N(0,j)
s.d=s.a.b7("Link")
s=u.N(0,i)
s.d=s.a.b7(i)
this.b=u}}
V.hQ.prototype={
$1:function(a){P.kP(C.j,new V.hP(this.a))},
$S:28}
V.hP.prototype={
$0:function(){var u=C.c.V(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.eo=u.i
u=J.du.prototype
u.ep=u.i
u=O.cu.prototype
u.cH=u.az
u=O.aX.prototype
u.cI=u.az
u=V.dA.prototype
u.eq=u.aP
u.cG=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"n1","mr",14)
u(P,"n2","ms",14)
u(P,"n3","mt",14)
t(P,"lb","n_",3)
var n
s(n=E.am.prototype,"ge2",0,0,null,["$1","$0"],["e3","im"],0,0)
s(n,"ge4",0,0,null,["$1","$0"],["e5","io"],0,0)
s(n,"ge0",0,0,null,["$1","$0"],["e1","il"],0,0)
s(n,"gdZ",0,0,null,["$1","$0"],["e_","ii"],0,0)
r(n,"gig","ih",7)
r(n,"gij","ik",7)
s(n=E.dV.prototype,"gcJ",0,0,null,["$1","$0"],["cL","cK"],0,0)
q(n,"giA","e9",3)
p(n=X.e1.prototype,"gfJ","fK",10)
p(n,"gfq","fs",10)
p(n,"gfz","fA",4)
p(n,"gfN","fO",19)
p(n,"gfL","fM",19)
p(n,"gfR","fS",4)
p(n,"gfV","fW",4)
p(n,"gfD","fE",4)
p(n,"gfT","fU",4)
p(n,"gfB","fC",4)
p(n,"gfX","fY",33)
p(n,"gfZ","h_",10)
p(n,"ghe","hf",12)
p(n,"gha","hb",12)
p(n,"ghc","hd",12)
s(n=D.dw.prototype,"gd5",0,0,null,["$1","$0"],["d6","fP"],0,0)
p(n,"gh0","h1",43)
r(n,"gfk","fl",20)
r(n,"gh4","h5",20)
s(D.bE.prototype,"gbq",0,0,null,["$1","$0"],["a7","eA"],0,0)
o(V.P.prototype,"gk","b1",13)
o(V.J.prototype,"gk","b1",13)
o(V.bo.prototype,"gk","b1",13)
s(n=U.cs.prototype,"gaL",0,0,null,["$1","$0"],["E","a8"],0,0)
r(n,"geC","eD",18)
r(n,"gh2","h3",18)
s(n=U.e2.prototype,"gaL",0,0,null,["$1","$0"],["E","a8"],0,0)
p(n,"gbA","bB",1)
p(n,"gbC","bD",1)
p(n,"gbE","bF",1)
s(n=U.e3.prototype,"gaL",0,0,null,["$1","$0"],["E","a8"],0,0)
p(n,"gbA","bB",1)
p(n,"gbC","bD",1)
p(n,"gbE","bF",1)
p(n,"gfe","ff",1)
p(n,"gfg","fh",1)
p(n,"ghL","hM",1)
p(n,"ghJ","hK",1)
p(n,"ghH","hI",1)
p(U.e4.prototype,"gfi","fj",1)
s(n=M.d9.prototype,"gU",0,0,null,["$1","$0"],["P","aw"],0,0)
r(n,"gh6","h7",15)
r(n,"gh8","h9",15)
s(M.dc.prototype,"gU",0,0,null,["$1","$0"],["P","aw"],0,0)
s(n=M.dj.prototype,"gU",0,0,null,["$1","$0"],["P","aw"],0,0)
r(n,"gft","fu",7)
r(n,"gfv","fw",7)
s(M.dn.prototype,"gU",0,0,null,["$1","$0"],["P","aw"],0,0)
s(O.dq.prototype,"ga1",0,0,null,["$1","$0"],["w","aa"],0,0)
s(n=O.dC.prototype,"ga1",0,0,null,["$1","$0"],["w","aa"],0,0)
s(n,"ghp",0,0,null,["$1","$0"],["da","hq"],0,0)
r(n,"gfm","fn",26)
r(n,"gfo","fp",26)
s(O.cu.prototype,"ga1",0,0,null,["$1","$0"],["w","aa"],0,0)
s(n=O.dU.prototype,"ga1",0,0,null,["$1","$0"],["w","aa"],0,0)
r(n,"gfF","fG",27)
r(n,"gfH","fI",27)
s(O.aJ.prototype,"ga1",0,0,null,["$1","$0"],["w","aa"],0,0)
s(X.dH.prototype,"gcM",0,0,null,["$1","$0"],["W","eG"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.jW,J.a,J.aj,P.em,P.e,H.dy,P.aU,H.bR,H.e0,H.ih,P.by,H.cl,H.eD,P.af,H.fT,H.fU,H.fO,P.eJ,P.b9,P.aE,P.e7,P.hZ,P.cG,P.i_,P.b4,P.ak,P.jl,P.jf,P.cP,P.j9,P.y,P.cm,P.jk,P.a_,P.ax,P.ab,P.bx,P.hv,P.dR,P.ef,P.fH,P.b,P.G,P.N,P.aq,P.o,P.bk,W.fl,W.C,W.dl,P.eO,P.ja,O.S,O.cv,E.fc,E.am,E.hB,E.dV,Z.e6,Z.cM,Z.bu,Z.bA,Z.b7,D.ff,D.aR,D.v,X.d8,X.dv,X.fQ,X.fX,X.at,X.hk,X.ic,X.e1,D.de,D.ac,D.bE,D.dQ,V.a0,V.a1,V.fx,V.bV,V.a6,V.Z,V.a5,V.az,V.bG,V.P,V.J,V.bo,U.e2,U.e3,U.e4,M.dc,M.dj,M.dn,M.an,A.d4,A.f5,A.al,A.fJ,A.ay,A.aA,A.aB,A.h4,A.c1,A.c3,A.c4,A.bw,A.dY,A.iq,F.a4,F.fA,F.bd,F.fS,F.bF,F.dO,F.hL,F.hM,F.hN,F.a9,F.iy,F.iz,F.iC,F.iE,F.iF,F.iG,O.bl,O.cu,O.h5,O.aJ,T.i7,V.f1,V.be,V.dA,V.hJ,V.cF,V.dW,V.cJ,V.ib,X.cH,X.bP,X.fL,X.dH,V.hO])
s(J.a,[J.fN,J.dt,J.du,J.aV,J.bT,J.bU,H.cz,W.f,W.f0,W.d5,W.ck,W.aP,W.aQ,W.Q,W.e9,W.fp,W.fq,W.eb,W.dh,W.ed,W.fs,W.m,W.eg,W.aT,W.fK,W.ei,W.bz,W.fW,W.he,W.en,W.eo,W.aY,W.ep,W.es,W.aZ,W.ew,W.ey,W.b1,W.ez,W.b2,W.eE,W.aH,W.eH,W.ia,W.b5,W.eK,W.ie,W.iv,W.eP,W.eR,W.eT,W.eV,W.eX,P.bc,P.ek,P.bi,P.eu,P.hz,P.eF,P.bn,P.eM,P.f6,P.e8,P.d6,P.dm,P.dI,P.dL,P.c_,P.dN,P.dS,P.dZ,P.eB])
s(J.du,[J.hw,J.c5,J.bD])
t(J.jV,J.aV)
s(J.bT,[J.ds,J.dr])
t(P.fV,P.em)
s(P.fV,[H.e_,W.iS,W.iR,P.fD])
t(H.a2,H.e_)
s(P.e,[H.fv,H.h_,H.iK])
s(P.aU,[H.h0,H.iL])
s(P.by,[H.hs,H.fP,H.it,H.ij,H.fe,H.hH,P.f4,P.dG,P.aN,P.iu,P.is,P.hV,P.fi,P.fo])
s(H.cl,[H.jK,H.i3,H.jA,H.jB,H.jC,P.iO,P.iN,P.iP,P.iQ,P.jj,P.ji,P.iX,P.j0,P.iY,P.iZ,P.j_,P.j3,P.j4,P.j2,P.j1,P.i0,P.i1,P.jr,P.jd,P.jc,P.je,P.fZ,P.ft,P.fu,W.hg,W.hi,W.hG,W.hY,W.iW,P.jt,P.fE,P.fF,P.f8,E.hC,E.hD,E.hE,E.i9,D.fy,D.fz,F.jm,F.ju,F.jv,F.jw,F.jx,F.jH,F.jI,F.iI,F.iH,F.iA,F.iB,O.h8,O.h9,O.ha,O.hb,O.hc,O.hd,T.i8,V.jG,V.hQ,V.hP])
s(H.i3,[H.hW,H.ci])
t(H.iM,P.f4)
t(P.fY,P.af)
t(H.Y,P.fY)
t(H.dx,H.fv)
t(H.dD,H.cz)
s(H.dD,[H.cQ,H.cS])
t(H.cR,H.cQ)
t(H.cy,H.cR)
t(H.cT,H.cS)
t(H.dE,H.cT)
s(H.dE,[H.hl,H.hm,H.hn,H.ho,H.hp,H.dF,H.hq])
t(P.jb,P.jl)
t(P.j8,P.jf)
t(P.db,P.i_)
t(P.fw,P.cm)
t(P.iw,P.fw)
t(P.ix,P.db)
s(P.ab,[P.n,P.q])
s(P.aN,[P.bZ,P.fM])
s(W.f,[W.L,W.fC,W.b0,W.cU,W.b3,W.aI,W.cW,W.iJ,W.cN,P.f9,P.bO])
s(W.L,[W.a3,W.bv])
s(W.a3,[W.t,P.r])
s(W.t,[W.f2,W.f3,W.bQ,W.df,W.fG,W.ct,W.hI])
s(W.aP,[W.co,W.fm,W.fn])
t(W.fk,W.aQ)
t(W.cp,W.e9)
t(W.ec,W.eb)
t(W.dg,W.ec)
t(W.ee,W.ed)
t(W.fr,W.ee)
t(W.aS,W.d5)
t(W.eh,W.eg)
t(W.fB,W.eh)
t(W.ej,W.ei)
t(W.bS,W.ej)
t(W.bH,W.m)
s(W.bH,[W.aW,W.ad,W.aK])
t(W.hf,W.en)
t(W.hh,W.eo)
t(W.eq,W.ep)
t(W.hj,W.eq)
t(W.et,W.es)
t(W.cA,W.et)
t(W.ex,W.ew)
t(W.hx,W.ex)
t(W.hF,W.ey)
t(W.cV,W.cU)
t(W.hS,W.cV)
t(W.eA,W.ez)
t(W.hT,W.eA)
t(W.hX,W.eE)
t(W.eI,W.eH)
t(W.i4,W.eI)
t(W.cX,W.cW)
t(W.i5,W.cX)
t(W.eL,W.eK)
t(W.id,W.eL)
t(W.b8,W.ad)
t(W.eQ,W.eP)
t(W.iT,W.eQ)
t(W.ea,W.dh)
t(W.eS,W.eR)
t(W.j5,W.eS)
t(W.eU,W.eT)
t(W.er,W.eU)
t(W.eW,W.eV)
t(W.jg,W.eW)
t(W.eY,W.eX)
t(W.jh,W.eY)
t(W.iU,P.hZ)
t(W.k3,W.iU)
t(W.iV,P.cG)
t(P.ap,P.ja)
t(P.el,P.ek)
t(P.fR,P.el)
t(P.ev,P.eu)
t(P.ht,P.ev)
t(P.eG,P.eF)
t(P.i2,P.eG)
t(P.eN,P.eM)
t(P.ig,P.eN)
t(P.f7,P.e8)
t(P.hu,P.bO)
t(P.eC,P.eB)
t(P.hU,P.eC)
s(E.fc,[Z.d7,A.cE,T.bm])
s(D.v,[D.bB,D.bC,D.u,X.hy])
s(X.hy,[X.dz,X.bg,X.cx,X.dX])
s(O.S,[D.dw,U.cs,M.d9])
s(D.ff,[U.fh,U.a7])
s(U.a7,[U.da,U.dM])
s(A.cE,[A.dp,A.dB,A.dT])
s(A.dY,[A.ah,A.im,A.io,A.ip,A.il,A.a8,A.ar,A.U,A.bI,A.ir,A.c2,A.ae,A.aC,A.ai])
t(F.hR,F.fA)
t(F.ik,F.fS)
t(F.iD,F.iE)
t(F.hr,F.iF)
s(O.bl,[O.dq,O.dC,O.dU])
s(O.cu,[O.h2,O.h3,O.aX])
s(O.aX,[O.h6,O.h7])
s(T.bm,[T.c0,T.cI])
t(T.i6,T.c0)
s(V.dA,[V.bh,V.cK])
s(X.cH,[X.fa,X.fI])
u(H.e_,H.e0)
u(H.cQ,P.y)
u(H.cR,H.bR)
u(H.cS,P.y)
u(H.cT,H.bR)
u(P.em,P.y)
u(W.e9,W.fl)
u(W.eb,P.y)
u(W.ec,W.C)
u(W.ed,P.y)
u(W.ee,W.C)
u(W.eg,P.y)
u(W.eh,W.C)
u(W.ei,P.y)
u(W.ej,W.C)
u(W.en,P.af)
u(W.eo,P.af)
u(W.ep,P.y)
u(W.eq,W.C)
u(W.es,P.y)
u(W.et,W.C)
u(W.ew,P.y)
u(W.ex,W.C)
u(W.ey,P.af)
u(W.cU,P.y)
u(W.cV,W.C)
u(W.ez,P.y)
u(W.eA,W.C)
u(W.eE,P.af)
u(W.eH,P.y)
u(W.eI,W.C)
u(W.cW,P.y)
u(W.cX,W.C)
u(W.eK,P.y)
u(W.eL,W.C)
u(W.eP,P.y)
u(W.eQ,W.C)
u(W.eR,P.y)
u(W.eS,W.C)
u(W.eT,P.y)
u(W.eU,W.C)
u(W.eV,P.y)
u(W.eW,W.C)
u(W.eX,P.y)
u(W.eY,W.C)
u(P.ek,P.y)
u(P.el,W.C)
u(P.eu,P.y)
u(P.ev,W.C)
u(P.eF,P.y)
u(P.eG,W.C)
u(P.eM,P.y)
u(P.eN,W.C)
u(P.e8,P.af)
u(P.eB,P.y)
u(P.eC,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bQ.prototype
C.F=J.a.prototype
C.a=J.aV.prototype
C.G=J.dr.prototype
C.d=J.ds.prototype
C.k=J.dt.prototype
C.c=J.bT.prototype
C.e=J.bU.prototype
C.H=J.bD.prototype
C.J=W.cA.prototype
C.r=J.hw.prototype
C.b=P.c_.prototype
C.l=J.c5.prototype
C.t=W.b8.prototype
C.u=W.cN.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.B=new P.hv()
C.o=new P.iw()
C.C=new P.ix()
C.f=new P.jb()
C.p=new A.bw(0,"ColorBlendType.Overwrite")
C.q=new A.bw(1,"ColorBlendType.Additive")
C.D=new A.bw(2,"ColorBlendType.Average")
C.i=new A.bw(3,"ColorBlendType.AlphaBlend")
C.j=new P.bx(0)
C.E=new P.bx(5e6)
C.I=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.q])})()
var v={mangledGlobalNames:{q:"int",n:"double",ab:"num",o:"String",a_:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.N,args:[F.a4]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.q,[P.e,E.am]]},{func:1,ret:-1,args:[P.q,P.q]},{func:1,ret:P.N,args:[F.a9,P.n,P.n]},{func:1,ret:-1,args:[W.m]},{func:1,ret:P.N,args:[D.v]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:P.n},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.q,[P.e,M.an]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.q,[P.e,U.a7]]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.q,[P.e,D.ac]]},{func:1,ret:P.o,args:[P.q]},{func:1,ret:P.N,args:[,]},{func:1,args:[,]},{func:1,ret:P.n,args:[P.n,P.n]},{func:1,ret:P.n,args:[P.n]},{func:1,ret:-1,args:[P.q,[P.e,V.a6]]},{func:1,ret:-1,args:[P.q,[P.e,O.aJ]]},{func:1,ret:P.N,args:[W.m]},{func:1,args:[,P.o]},{func:1,args:[P.o]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[P.ab]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a_,args:[W.L]},{func:1,args:[W.m]},{func:1,ret:P.N,args:[P.b4]},{func:1,ret:[P.aE,,],args:[,]},{func:1,ret:W.a3,args:[W.L]},{func:1,ret:P.q,args:[A.ay,A.ay]},{func:1,ret:P.q,args:[A.aA,A.aA]},{func:1,ret:P.q,args:[A.aB,A.aB]},{func:1,ret:P.a_,args:[[P.e,D.ac]]},{func:1,ret:P.N,args:[,],opt:[P.aq]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aO=0
$.cj=null
$.km=null
$.k5=!1
$.li=null
$.l9=null
$.lo=null
$.jy=null
$.jD=null
$.kf=null
$.c7=null
$.cZ=null
$.d_=null
$.k6=!1
$.V=C.f
$.as=[]
$.ky=null
$.cw=null
$.kF=null
$.cB=null
$.cD=null
$.kV=null
$.kT=null
$.kU=null
$.kY=null
$.kX=null
$.kW=null
$.kZ=null
$.kE=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nC","lu",function(){return H.lh("_$dart_dartClosure")})
u($,"nD","kj",function(){return H.lh("_$dart_js")})
u($,"nG","lv",function(){return H.b6(H.ii({
toString:function(){return"$receiver$"}}))})
u($,"nH","lw",function(){return H.b6(H.ii({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nI","lx",function(){return H.b6(H.ii(null))})
u($,"nJ","ly",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nM","lB",function(){return H.b6(H.ii(void 0))})
u($,"nN","lC",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nL","lA",function(){return H.b6(H.kR(null))})
u($,"nK","lz",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nP","lE",function(){return H.b6(H.kR(void 0))})
u($,"nO","lD",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o4","kk",function(){return P.mq()})
u($,"o5","lI",function(){return P.mf("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nY","lH",function(){return Z.aD(0)})
u($,"nS","lF",function(){return Z.aD(511)})
u($,"o_","av",function(){return Z.aD(1)})
u($,"nZ","bs",function(){return Z.aD(2)})
u($,"nU","br",function(){return Z.aD(4)})
u($,"o0","bb",function(){return Z.aD(8)})
u($,"o1","bt",function(){return Z.aD(16)})
u($,"nV","d2",function(){return Z.aD(32)})
u($,"nW","d3",function(){return Z.aD(64)})
u($,"nX","lG",function(){return Z.aD(96)})
u($,"o2","cf",function(){return Z.aD(128)})
u($,"nT","bq",function(){return Z.aD(256)})
u($,"nB","lt",function(){return new V.fx(1e-9)})
u($,"nA","D",function(){return $.lt()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cz,ArrayBufferView:H.cz,Float32Array:H.cy,Float64Array:H.cy,Int16Array:H.hl,Int32Array:H.hm,Int8Array:H.hn,Uint16Array:H.ho,Uint32Array:H.hp,Uint8ClampedArray:H.dF,CanvasPixelArray:H.dF,Uint8Array:H.hq,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLBodyElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f0,HTMLAnchorElement:W.f2,HTMLAreaElement:W.f3,Blob:W.d5,HTMLCanvasElement:W.bQ,CanvasRenderingContext2D:W.ck,CDATASection:W.bv,CharacterData:W.bv,Comment:W.bv,ProcessingInstruction:W.bv,Text:W.bv,CSSNumericValue:W.co,CSSUnitValue:W.co,CSSPerspective:W.fk,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cp,MSStyleCSSProperties:W.cp,CSS2Properties:W.cp,CSSImageValue:W.aP,CSSKeywordValue:W.aP,CSSPositionValue:W.aP,CSSResourceValue:W.aP,CSSURLImageValue:W.aP,CSSStyleValue:W.aP,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.fm,CSSUnparsedValue:W.fn,DataTransferItemList:W.fp,HTMLDivElement:W.df,DOMException:W.fq,ClientRectList:W.dg,DOMRectList:W.dg,DOMRectReadOnly:W.dh,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.a3,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aS,FileList:W.fB,FileWriter:W.fC,HTMLFormElement:W.fG,Gamepad:W.aT,History:W.fK,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.bz,HTMLImageElement:W.ct,KeyboardEvent:W.aW,Location:W.fW,MediaList:W.he,MIDIInputMap:W.hf,MIDIOutputMap:W.hh,MimeType:W.aY,MimeTypeArray:W.hj,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.L,DocumentFragment:W.L,HTMLDocument:W.L,ShadowRoot:W.L,XMLDocument:W.L,Attr:W.L,DocumentType:W.L,Node:W.L,NodeList:W.cA,RadioNodeList:W.cA,Plugin:W.aZ,PluginArray:W.hx,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.b0,SourceBufferList:W.hS,SpeechGrammar:W.b1,SpeechGrammarList:W.hT,SpeechRecognitionResult:W.b2,Storage:W.hX,CSSStyleSheet:W.aH,StyleSheet:W.aH,TextTrack:W.b3,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.i4,TextTrackList:W.i5,TimeRanges:W.ia,Touch:W.b5,TouchEvent:W.aK,TouchList:W.id,TrackDefaultList:W.ie,CompositionEvent:W.bH,FocusEvent:W.bH,TextEvent:W.bH,UIEvent:W.bH,URL:W.iv,VideoTrackList:W.iJ,WheelEvent:W.b8,Window:W.cN,DOMWindow:W.cN,CSSRuleList:W.iT,ClientRect:W.ea,DOMRect:W.ea,GamepadList:W.j5,NamedNodeMap:W.er,MozNamedAttrMap:W.er,SpeechRecognitionResultList:W.jg,StyleSheetList:W.jh,SVGLength:P.bc,SVGLengthList:P.fR,SVGNumber:P.bi,SVGNumberList:P.ht,SVGPointList:P.hz,SVGStringList:P.i2,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bn,SVGTransformList:P.ig,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bO,webkitAudioContext:P.bO,BaseAudioContext:P.bO,OfflineAudioContext:P.hu,WebGLBuffer:P.d6,WebGLFramebuffer:P.dm,WebGLProgram:P.dI,WebGLRenderbuffer:P.dL,WebGL2RenderingContext:P.c_,WebGLShader:P.dN,WebGLTexture:P.dS,WebGLUniformLocation:P.dZ,SQLResultSetRowList:P.hU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dD.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.dE.$nativeSuperclassTag="ArrayBufferView"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.lk,[])
else U.lk([])})})()
//# sourceMappingURL=test.dart.js.map
