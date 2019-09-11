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
a[c]=function(){a[c]=function(){H.pj(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lK(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={le:function le(){},
nC:function(){return new P.d5("No element")},
nD:function(){return new P.d5("Too few elements")},
el:function(a,b,c,d,e){H.i(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.o6(a,b,c,d,e)
else H.o5(a,b,c,d,e)},
o6:function(a,b,c,d,e){var u,t,s,r,q
H.i(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.b6(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.q(a,s,a[q])
s=q}C.a.q(a,s,t)}},
o5:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.i(a2,"$ib",[a6],"$ab")
H.m(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.d.aa(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.aa(a3+a4,2)
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
k=i}C.a.q(a2,t,n)
C.a.q(a2,r,l)
C.a.q(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.q(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.q(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.Q(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.S()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.q(a2,f,a2[h])
C.a.q(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aY()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.q(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.q(a2,h,a2[g])
C.a.q(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.q(a2,f,a2[g])
C.a.q(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.S()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.q(a2,f,a2[h])
C.a.q(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aY()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aY()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.S()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.q(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.q(a2,h,a2[g])
C.a.q(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.q(a2,f,a2[g])
C.a.q(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.q(a2,a3,a2[o])
C.a.q(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.q(a2,a4,a2[o])
C.a.q(a2,o,k)
H.el(a2,a3,h-2,a5,a6)
H.el(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.Q(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.Q(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.q(a2,f,a2[h])
C.a.q(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.S()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.q(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.q(a2,h,a2[g])
C.a.q(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.q(a2,f,a2[g])
C.a.q(a2,g,e)}g=c
break}}}H.el(a2,h,g,a5,a6)}else H.el(a2,h,g,a5,a6)},
ab:function ab(a){this.a=a},
h7:function h7(){},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hK:function hK(a,b,c){this.a=a
this.b=b
this.$ti=c},
hL:function hL(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jM:function jM(a,b,c){this.a=a
this.b=b
this.$ti=c},
jN:function jN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(){},
eu:function eu(){},
et:function et(){},
cD:function(a){var u,t=H.S(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
p3:function(a){return v.types[H.a2(a)]},
p8:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iL},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aK(a)
if(typeof u!=="string")throw H.h(H.at(a))
return u},
d1:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o_:function(a,b){var u,t
if(typeof a!=="string")H.z(H.at(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.S(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
nZ:function(a){var u,t
if(typeof a!=="string")H.z(H.at(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.l_(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cn:function(a){return H.nR(a)+H.lI(H.c7(a),0,null)},
nR:function(a){var u,t,s,r,q,p,o,n=J.Y(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.E||!!n.$ic3){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cD(t.length>1&&C.e.b1(t,0)===36?C.e.aZ(t,1):t)},
mq:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o1:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.at(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bG(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.at(s))}return H.mq(r)},
mr:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.at(s))
if(s<0)throw H.h(H.at(s))
if(s>65535)return H.o1(a)}return H.mq(a)},
o0:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bG(u,10))>>>0,56320|u&1023)}throw H.h(P.bl(a,0,1114111,null,null))},
cm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nY:function(a){var u=H.cm(a).getFullYear()+0
return u},
nW:function(a){var u=H.cm(a).getMonth()+1
return u},
nS:function(a){var u=H.cm(a).getDate()+0
return u},
nT:function(a){var u=H.cm(a).getHours()+0
return u},
nV:function(a){var u=H.cm(a).getMinutes()+0
return u},
nX:function(a){var u=H.cm(a).getSeconds()+0
return u},
nU:function(a){var u=H.cm(a).getMilliseconds()+0
return u},
e:function(a){throw H.h(H.at(a))},
d:function(a,b){if(a==null)J.b7(a)
throw H.h(H.c6(a,b))},
c6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b8(!0,b,s,null)
u=H.a2(J.b7(a))
if(!(b<0)){if(typeof u!=="number")return H.e(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.is(b,s)},
oV:function(a,b,c){var u="Invalid value"
if(a>c)return new P.co(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.co(a,c,!0,b,"end",u)
return new P.b8(!0,b,"end",null)},
at:function(a){return new P.b8(!0,a,null,null)},
oR:function(a){if(typeof a!=="number")throw H.h(H.at(a))
return a},
h:function(a){var u
if(a==null)a=new P.cZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n5})
u.name=""}else u.toString=H.n5
return u},
n5:function(){return J.aK(this.dartException)},
z:function(a){throw H.h(a)},
y:function(a){throw H.h(P.cN(a))},
bs:function(a){var u,t,s,r,q,p
a=H.n3(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.jj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
jk:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mk:function(a,b){return new H.ib(a,b==null?null:b.method)},
lf:function(a,b){var u=b==null,t=u?null:b.method
return new H.ht(a,t,u?null:b.receiver)},
az:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kW(a)
if(a==null)return
if(a instanceof H.cQ)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bG(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lf(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mk(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n8()
q=$.n9()
p=$.na()
o=$.nb()
n=$.ne()
m=$.nf()
l=$.nd()
$.nc()
k=$.nh()
j=$.ng()
i=r.as(u)
if(i!=null)return f.$1(H.lf(H.S(u),i))
else{i=q.as(u)
if(i!=null){i.method="call"
return f.$1(H.lf(H.S(u),i))}else{i=p.as(u)
if(i==null){i=o.as(u)
if(i==null){i=n.as(u)
if(i==null){i=m.as(u)
if(i==null){i=l.as(u)
if(i==null){i=o.as(u)
if(i==null){i=k.as(u)
if(i==null){i=j.as(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mk(H.S(u),i))}}return f.$1(new H.ju(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.en()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.b8(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.en()
return a},
c8:function(a){var u
if(a instanceof H.cQ)return a.b
if(a==null)return new H.f7(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f7(a)},
p_:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.q(0,a[u],a[t])}return b},
p7:function(a,b,c,d,e,f){H.k(a,"$il9")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.t("Unsupported number of arguments for wrapped closure"))},
cy:function(a,b){var u
H.a2(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p7)
a.$identity=u
return u},
nu:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iV().constructor.prototype):Object.create(new H.cI(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b9
if(typeof t!=="number")return t.p()
$.b9=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.m4(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.p3,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.m3:H.l2
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m4(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nr:function(a,b,c,d){var u=H.l2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nr(t,!r,u,b)
if(t===0){r=$.b9
if(typeof r!=="number")return r.p()
$.b9=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cJ
return new Function(r+H.l(q==null?$.cJ=H.fO("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b9
if(typeof r!=="number")return r.p()
$.b9=r+1
o+=r
r="return function("+o+"){return this."
q=$.cJ
return new Function(r+H.l(q==null?$.cJ=H.fO("self"):q)+"."+H.l(u)+"("+o+");}")()},
ns:function(a,b,c,d){var u=H.l2,t=H.m3
switch(b?-1:a){case 0:throw H.h(H.o3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nt:function(a,b){var u,t,s,r,q,p,o,n=$.cJ
if(n==null)n=$.cJ=H.fO("self")
u=$.m2
if(u==null)u=$.m2=H.fO("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ns(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.b9
if(typeof u!=="number")return u.p()
$.b9=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.b9
if(typeof u!=="number")return u.p()
$.b9=u+1
return new Function(n+u+"}")()},
lK:function(a,b,c,d,e,f,g){return H.nu(a,b,H.a2(c),d,!!e,!!f,g)},
l2:function(a){return a.a},
m3:function(a){return a.c},
fO:function(a){var u,t,s,r=new H.cI("self","target","receiver","name"),q=J.lb(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.oN("boolean expression must not be null")
return a},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.b3(a,"String"))},
qc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b3(a,"double"))},
n0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.b3(a,"num"))},
mU:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.b3(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.b3(a,"int"))},
lS:function(a,b){throw H.h(H.b3(a,H.cD(H.S(b).substring(2))))},
pe:function(a,b){throw H.h(H.nq(a,H.cD(H.S(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.lS(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.pe(a,b)},
qe:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.Y(a)[b])return a
H.lS(a,b)},
lQ:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.h(H.b3(a,"List<dynamic>"))},
p9:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.lS(a,b)},
mV:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
fu:function(a,b){var u
if(typeof a=="function")return!0
u=H.mV(J.Y(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.lF)return a
$.lF=!0
try{if(H.fu(a,b))return a
u=H.kR(b)
t=H.b3(a,u)
throw H.h(t)}finally{$.lF=!1}},
cA:function(a,b){if(a!=null&&!H.lJ(a,b))H.z(H.b3(a,H.kR(b)))
return a},
b3:function(a,b){return new H.jl("TypeError: "+P.dS(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
nq:function(a,b){return new H.fP("CastError: "+P.dS(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.Y(a)
if(!!t.$icL){u=H.mV(t)
if(u!=null)return H.kR(u)
return"Closure"}return H.cn(a)},
oN:function(a){throw H.h(new H.jP(a))},
pj:function(a){throw H.h(new P.fX(H.S(a)))},
o3:function(a){return new H.iD(a)},
mW:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c7:function(a){if(a==null)return
return a.$ti},
qd:function(a,b,c){return H.cC(a["$a"+H.l(c)],H.c7(b))},
cB:function(a,b,c,d){var u
H.S(c)
H.a2(d)
u=H.cC(a["$a"+H.l(c)],H.c7(b))
return u==null?null:u[d]},
aI:function(a,b,c){var u
H.S(b)
H.a2(c)
u=H.cC(a["$a"+H.l(b)],H.c7(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a2(b)
u=H.c7(a)
return u==null?null:u[b]},
kR:function(a){return H.c5(a,null)},
c5:function(a,b){var u,t
H.i(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cD(a[0].name)+H.lI(a,1,b)
if(typeof a=="function")return H.cD(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.l(b[t])}if('func' in a)return H.om(a,b)
if('futureOr' in a)return"FutureOr<"+H.c5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
om:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.n]
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
p=C.e.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.K)p+=" extends "+H.c5(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.c5(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.c5(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.c5(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oZ(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.S(b[h])
j=j+i+H.c5(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lI:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.c_("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.c5(p,c)}return"<"+u.i(0)+">"},
cC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dx:function(a,b,c,d){var u,t
H.S(b)
H.lQ(c)
H.S(d)
if(a==null)return!1
u=H.c7(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.mS(H.cC(t[d],u),null,c,null)},
i:function(a,b,c,d){H.S(b)
H.lQ(c)
H.S(d)
if(a==null)return a
if(H.dx(a,b,c,d))return a
throw H.h(H.b3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cD(b.substring(2))+H.lI(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aY(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aY(a[t],b,c[t],d))return!1
return!0},
qa:function(a,b,c){return a.apply(b,H.cC(J.Y(b)["$a"+H.l(c)],H.c7(b)))},
mZ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="J"||a===-1||a===-2||H.mZ(u)}return!1},
lJ:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="J"||b===-1||b===-2||H.mZ(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fu(a,b)}u=J.Y(a).constructor
t=H.c7(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aY(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.lJ(a,b))throw H.h(H.b3(a,H.kR(b)))
return a},
aY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aY(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="l9"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aY("type" in a?a.type:l,b,s,d)
else if(H.aY(a,b,s,d))return!0
else{if(!('$i'+"aL" in t.prototype))return!1
r=t.prototype["$a"+"aL"]
q=H.cC(r,u?a.slice(1):l)
return H.aY(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.cC(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aY(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aY(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aY(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aY(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pc(h,b,g,d)},
pc:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aY(c[s],d,a[s],b))return!1}return!0},
qb:function(a,b,c){Object.defineProperty(a,H.S(b),{value:c,enumerable:false,writable:true,configurable:true})},
pa:function(a){var u,t,s,r,q=H.S($.mY.$1(a)),p=$.kJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.S($.mR.$2(a,q))
if(q!=null){p=$.kJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kQ(u)
$.kJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kO[q]=u
return u}if(s==="-"){r=H.kQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n1(a,u)
if(s==="*")throw H.h(P.mB(q))
if(v.leafTags[q]===true){r=H.kQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n1(a,u)},
n1:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kQ:function(a){return J.lR(a,!1,null,!!a.$iL)},
pb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kQ(u)
else return J.lR(u,c,null,null)},
p5:function(){if(!0===$.lO)return
$.lO=!0
H.p6()},
p6:function(){var u,t,s,r,q,p,o,n
$.kJ=Object.create(null)
$.kO=Object.create(null)
H.p4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n2.$1(q)
if(p!=null){o=H.pb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p4:function(){var u,t,s,r,q,p,o=C.u()
o=H.cx(C.v,H.cx(C.w,H.cx(C.o,H.cx(C.o,H.cx(C.x,H.cx(C.y,H.cx(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mY=new H.kL(r)
$.mR=new H.kM(q)
$.n2=new H.kN(p)},
cx:function(a,b){return a(b)||b},
md:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(P.l7("Illegal RegExp pattern ("+String(r)+")",a))},
ph:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
n4:function(a,b,c){var u=H.pi(a,b,c)
return u},
pi:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n3(b),'g'),H.oY(c))},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ib:function ib(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a){this.a=a},
cQ:function cQ(a,b){this.a=a
this.b=b},
kW:function kW(a){this.a=a},
f7:function f7(a){this.a=a
this.b=null},
cL:function cL(){},
j2:function j2(){},
iV:function iV(){},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl:function jl(a){this.a=a},
fP:function fP(a){this.a=a},
iD:function iD(a){this.a=a},
jP:function jP(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hs:function hs(a){this.a=a},
hD:function hD(a,b){this.a=a
this.b=b
this.c=null},
e0:function e0(a,b){this.a=a
this.$ti=b},
hE:function hE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eR:function eR(a){this.b=a},
jO:function jO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dt:function(a){return a},
c4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c6(b,a))},
ol:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.oV(a,b,c))
return b},
cX:function cX(){},
e9:function e9(){},
cW:function cW(){},
ea:function ea(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
eb:function eb(){},
ia:function ia(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
oZ:function(a){return J.mb(a?Object.keys(a):[],null)},
pd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fv:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lO==null){H.p5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.mB("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lU()]
if(r!=null)return r
r=H.pa(a)
if(r!=null)return r
if(typeof a=="function")return C.F
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.lU(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
nE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.l0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.bl(a,0,4294967295,"length",null))
return J.mb(new Array(a),b)},
mb:function(a,b){return J.lb(H.c(a,[b]))},
lb:function(a){H.lQ(a)
a.fixed$length=Array
return a},
mc:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nF:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.b1(a,b)
if(t!==32&&t!==13&&!J.mc(t))break;++b}return b},
lc:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.ba(a,u)
if(t!==32&&t!==13&&!J.mc(t))break}return b},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dW.prototype
return J.dV.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.dX.prototype
if(typeof a=="boolean")return J.hq.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.K)return a
return J.fv(a)},
p0:function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.K)return a
return J.fv(a)},
kK:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.K)return a
return J.fv(a)},
lL:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.K)return a
return J.fv(a)},
lM:function(a){if(typeof a=="number")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.c3.prototype
return a},
p1:function(a){if(typeof a=="number")return J.bY.prototype
if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.c3.prototype
return a},
lN:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.c3.prototype
return a},
p2:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bz.prototype
return a}if(a instanceof P.K)return a
return J.fv(a)},
fx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p0(a).p(a,b)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).m(a,b)},
lX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.lM(a).bg(a,b)},
b6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lM(a).aY(a,b)},
lY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lM(a).S(a,b)},
T:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kK(a).j(a,b)},
nm:function(a,b,c,d){return J.p2(a).j3(a,b,c,d)},
kZ:function(a,b){return J.p1(a).bL(a,b)},
lZ:function(a,b){return J.lL(a).H(a,b)},
m_:function(a,b){return J.lL(a).M(a,b)},
cc:function(a){return J.Y(a).gJ(a)},
cH:function(a){return J.lL(a).gV(a)},
b7:function(a){return J.kK(a).gk(a)},
m0:function(a,b){return J.lN(a).jy(a,b)},
m1:function(a,b,c){return J.lN(a).bw(a,b,c)},
aK:function(a){return J.Y(a).i(a)},
l_:function(a){return J.lN(a).eO(a)},
a:function a(){},
hq:function hq(){},
dX:function dX(){},
dY:function dY(){},
ij:function ij(){},
c3:function c3(){},
bz:function bz(){},
aS:function aS(a){this.$ti=a},
ld:function ld(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bY:function bY(){},
dW:function dW(){},
dV:function dV(){},
by:function by(){}},P={
od:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oO()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cy(new P.jU(s),1)).observe(u,{childList:true})
return new P.jT(s,u,t)}else if(self.setImmediate!=null)return P.oP()
return P.oQ()},
oe:function(a){self.scheduleImmediate(H.cy(new P.jV(H.m(a,{func:1,ret:-1})),0))},
of:function(a){self.setImmediate(H.cy(new P.jW(H.m(a,{func:1,ret:-1})),0))},
og:function(a){P.lz(C.i,H.m(a,{func:1,ret:-1}))},
lz:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.d.aa(a.a,1000)
return P.oi(u<0?0:u,b)},
mz:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.bq]})
u=C.d.aa(a.a,1000)
return P.oj(u<0?0:u,b)},
oi:function(a,b){var u=new P.fe()
u.fB(a,b)
return u},
oj:function(a,b){var u=new P.fe()
u.fC(a,b)
return u},
aF:function(a){return new P.ez(new P.fb(new P.al($.R,[a]),[a]),[a])},
aE:function(a,b){H.m(a,{func:1,ret:-1,args:[P.p,,]})
H.k(b,"$iez")
a.$2(0,null)
b.b=!0
return b.a.a},
as:function(a,b){P.ok(a,H.m(b,{func:1,ret:-1,args:[P.p,,]}))},
aD:function(a,b){H.k(b,"$il6").aI(0,a)},
aC:function(a,b){H.k(b,"$il6").bb(H.az(a),H.c8(a))},
ok:function(a,b){var u,t,s,r,q=null
H.m(b,{func:1,ret:-1,args:[P.p,,]})
u=new P.kx(b)
t=new P.ky(b)
s=J.Y(a)
if(!!s.$ial)a.co(u,t,q)
else if(!!s.$iaL)a.bR(u,t,q)
else{r=new P.al($.R,[null])
H.F(a,null)
r.a=4
r.c=a
r.co(u,q,q)}},
aH:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.R.eH(new P.kG(u),P.J,P.p,null)},
mF:function(a,b){var u,t,s
b.a=1
try{a.bR(new P.k6(b),new P.k7(b),null)}catch(s){u=H.az(s)
t=H.c8(s)
P.lT(new P.k8(b,u,t))}},
k5:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$ial")
if(u>=4){t=b.bE()
b.a=a.a
b.c=a.c
P.cu(b,t)}else{t=H.k(b.c,"$ibu")
b.a=2
b.c=a
a.dM(t)}},
cu:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iav")
g=g.b
r=s.a
q=s.b
g.toString
P.kD(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cu(h.a,b)}g=h.a
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
if(m){H.k(o,"$iav")
g=g.b
r=o.a
q=o.b
g.toString
P.kD(i,i,g,r,q)
return}l=$.R
if(l!=n)$.R=n
else l=i
g=b.c
if(g===8)new P.kd(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.kc(u,b,o).$0()}else if((g&2)!==0)new P.kb(h,u,b).$0()
if(l!=null)$.R=l
g=u.b
if(!!J.Y(g).$iaL){if(g.a>=4){k=H.k(q.c,"$ibu")
q.c=null
b=q.bF(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.k5(g,q)
return}}j=b.b
k=H.k(j.c,"$ibu")
j.c=null
b=j.bF(k)
g=u.a
r=u.b
if(!g){H.F(r,H.x(j,0))
j.a=4
j.c=r}else{H.k(r,"$iav")
j.a=8
j.c=r}h.a=j
g=j}},
oJ:function(a,b){if(H.fu(a,{func:1,args:[P.K,P.a9]}))return b.eH(a,null,P.K,P.a9)
if(H.fu(a,{func:1,args:[P.K]}))return H.m(a,{func:1,ret:null,args:[P.K]})
throw H.h(P.l0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oI:function(){var u,t
for(;u=$.cv,u!=null;){$.dv=null
t=u.b
$.cv=t
if(t==null)$.du=null
u.a.$0()}},
oM:function(){$.lG=!0
try{P.oI()}finally{$.dv=null
$.lG=!1
if($.cv!=null)$.lW().$1(P.mT())}},
mM:function(a){var u=new P.eA(H.m(a,{func:1,ret:-1}))
if($.cv==null){$.cv=$.du=u
if(!$.lG)$.lW().$1(P.mT())}else $.du=$.du.b=u},
oL:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.cv
if(u==null){P.mM(a)
$.dv=$.du
return}t=new P.eA(a)
s=$.dv
if(s==null){t.b=u
$.cv=$.dv=t}else{t.b=s.b
$.dv=s.b=t
if(t.b==null)$.du=t}},
lT:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.R
if(C.f===u){P.cw(t,t,C.f,a)
return}u.toString
P.cw(t,t,u,H.m(u.cs(a),s))},
ps:function(a,b){return new P.kr(H.i(a,"$id6",[b],"$ad6"),[b])},
ly:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.R
if(u===C.f){u.toString
return P.lz(a,b)}return P.lz(a,H.m(u.cs(b),t))},
oa:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bq]}
H.m(b,s)
u=$.R
if(u===C.f){u.toString
return P.mz(a,b)}t=u.dY(b,P.bq)
$.R.toString
return P.mz(a,H.m(t,s))},
kD:function(a,b,c,d,e){var u={}
u.a=d
P.oL(new P.kE(u,e))},
mK:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
mL:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.F(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
oK:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
cw:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cs(d):c.jb(d,-1)
P.mM(d)},
jU:function jU(a){this.a=a},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
fe:function fe(){this.c=0},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a,b){this.a=a
this.b=!1
this.$ti=b},
jR:function jR(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kG:function kG(a){this.a=a},
eC:function eC(){},
jS:function jS(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b){this.a=a
this.$ti=b},
bu:function bu(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
al:function al(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
k2:function k2(a,b){this.a=a
this.b=b},
ka:function ka(a,b){this.a=a
this.b=b},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b){this.a=a
this.b=b},
k9:function k9(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ke:function ke(a){this.a=a},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a){this.a=a
this.b=null},
d6:function d6(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
d7:function d7(){},
iY:function iY(){},
kr:function kr(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bq:function bq(){},
av:function av(a,b){this.a=a
this.b=b},
kw:function kw(){},
kE:function kE(a,b){this.a=a
this.b=b},
kl:function kl(){},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function(a,b){return new H.a4([a,b])},
nI:function(a){return H.p_(a,new H.a4([null,null]))},
nJ:function(a){return new P.ki([a])},
lE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mH:function(a,b,c){var u=new P.kj(a,b,[c])
u.c=a.e
return u},
nB:function(a,b,c){var u,t
if(P.lH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
C.a.h($.aG,a)
try{P.on(a,u)}finally{if(0>=$.aG.length)return H.d($.aG,-1)
$.aG.pop()}t=P.mx(b,H.p9(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
la:function(a,b,c){var u,t
if(P.lH(a))return b+"..."+c
u=new P.c_(b)
C.a.h($.aG,a)
try{t=u
t.a=P.mx(t.a,a,", ")}finally{if(0>=$.aG.length)return H.d($.aG,-1)
$.aG.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lH:function(a){var u,t
for(u=$.aG.length,t=0;t<u;++t)if(a===$.aG[t])return!0
return!1},
on:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.n],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.B();o=n,n=m){m=u.gL(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mh:function(a){var u,t={}
if(P.lH(a))return"{...}"
u=new P.c_("")
try{C.a.h($.aG,a)
u.a+="{"
t.a=!0
J.m_(a,new P.hJ(t,u))
u.a+="}"}finally{if(0>=$.aG.length)return H.d($.aG,-1)
$.aG.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ki:function ki(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dj:function dj(a){this.a=a
this.c=this.b=null},
kj:function kj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hF:function hF(){},
C:function C(){},
hI:function hI(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
am:function am(){},
kp:function kp(){},
eQ:function eQ(){},
cM:function cM(){},
dL:function dL(){},
h8:function h8(){},
jx:function jx(){},
jy:function jy(){},
kv:function kv(a){this.b=0
this.c=a},
lP:function(a){var u=H.o_(a,null)
if(u!=null)return u
throw H.h(P.l7(a,null))},
oX:function(a){var u=H.nZ(a)
if(u!=null)return u
throw H.h(P.l7("Invalid double",a))},
nz:function(a){if(a instanceof H.cL)return a.i(0)
return"Instance of '"+H.cn(a)+"'"},
nK:function(a,b,c){var u,t
H.F(b,c)
u=J.nE(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
mf:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.cH(a);u.B();)C.a.h(s,H.F(u.gL(u),c))
if(b)return s
return H.i(J.lb(s),"$ib",t,"$ab")},
lv:function(a){var u,t,s=P.p
H.i(a,"$if",[s],"$af")
if(a.constructor===Array){H.i(a,"$iaS",[s],"$aaS")
u=a.length
t=P.lp(0,null,u)
return H.mr(t<u?C.a.f_(a,0,t):a)}return P.o7(a,0,null)},
o7:function(a,b,c){var u,t,s
H.i(a,"$if",[P.p],"$af")
u=J.cH(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.bl(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gL(u))
return H.mr(s)},
lq:function(a){return new H.hr(a,H.md(a,!1,!0,!1))},
mx:function(a,b,c){var u=J.cH(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.B())}else{a+=H.l(u.gL(u))
for(;u.B();)a=a+c+H.l(u.gL(u))}return a},
mI:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.p],"$ab")
if(c===C.j){u=$.nl().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.jj(H.F(b,H.aI(c,"cM",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.o0(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dN:function(a){if(a>=10)return""+a
return"0"+a},
m7:function(a,b){return new P.bx(1e6*b+1000*a)},
dS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nz(a)},
no:function(a){return new P.b8(!1,null,null,a)},
l0:function(a,b,c){return new P.b8(!0,a,b,c)},
is:function(a,b){return new P.co(null,null,!0,a,b,"Value not in range")},
bl:function(a,b,c,d,e){return new P.co(b,c,!0,a,d,"Invalid value")},
lp:function(a,b,c){if(0>a||a>c)throw H.h(P.bl(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.bl(b,a,c,"end",null))
return b}return c},
lo:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.h(P.bl(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.a2(e==null?J.b7(b):e)
return new P.hp(u,!0,a,c,"Index out of range")},
ay:function(a){return new P.jv(a)},
mB:function(a){return new P.jt(a)},
lu:function(a){return new P.d5(a)},
cN:function(a){return new P.fS(a)},
t:function(a){return new P.eJ(a)},
l7:function(a,b){return new P.hi(a,b)},
nL:function(a,b,c,d){var u,t,s
H.m(b,{func:1,ret:d,args:[P.p]})
u=new Array(a)
u.fixed$length=Array
t=H.c(u,[d])
for(s=0;s<a;++s)C.a.q(t,s,b.$1(s))
return t},
fw:function(a){H.pd(a)},
a8:function a8(){},
aP:function aP(a,b){this.a=a
this.b=b},
E:function E(){},
bx:function bx(a){this.a=a},
h1:function h1(){},
h2:function h2(){},
bT:function bT(){},
fC:function fC(){},
cZ:function cZ(){},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hp:function hp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(a){this.a=a},
jt:function jt(a){this.a=a},
d5:function d5(a){this.a=a},
fS:function fS(a){this.a=a},
ie:function ie(){},
en:function en(){},
fX:function fX(a){this.a=a},
eJ:function eJ(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b},
p:function p(){},
f:function f(){},
aR:function aR(){},
b:function b(){},
H:function H(){},
J:function J(){},
ai:function ai(){},
K:function K(){},
e3:function e3(){},
a9:function a9(){},
n:function n(){},
c_:function c_(a){this.a=a},
oU:function(a){var u,t=J.Y(a)
if(!!t.$ibU){u=t.ge8(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
oT:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
bL:function(a){var u,t,s,r,q
if(a==null)return
u=P.nH(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=H.S(t[r])
u.q(0,q,a[q])}return u},
oS:function(a){var u={}
a.M(0,new P.kH(u))
return u},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a){this.a=a},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(){},
kh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oh:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kk:function kk(){},
aA:function aA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bA:function bA(){},
hC:function hC(){},
bF:function bF(){},
ic:function ic(){},
im:function im(){},
j1:function j1(){},
u:function u(){},
bI:function bI(){},
ji:function ji(){},
eO:function eO(){},
eP:function eP(){},
eZ:function eZ(){},
f_:function f_(){},
f9:function f9(){},
fa:function fa(){},
fh:function fh(){},
fi:function fi(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
fH:function fH(){},
cd:function cd(){},
id:function id(){},
eB:function eB(){},
dE:function dE(){},
dU:function dU(){},
ee:function ee(){},
ef:function ef(){},
cp:function cp(){},
eg:function eg(){},
eo:function eo(){},
es:function es(){},
iP:function iP(){},
f5:function f5(){},
f6:function f6(){}},W={
nn:function(){var u=document.createElement("a")
return u},
l3:function(){var u=document.createElement("canvas")
return u},
ny:function(a){H.k(a,"$ij")
return"wheel"},
m9:function(a){return W.nA(a,null,null).au(new W.hm(),P.n)},
nA:function(a,b,c){var u,t=W.be,s=new P.al($.R,[t]),r=new P.jS(s,[t]),q=new XMLHttpRequest()
C.D.jP(q,"GET",a,!0)
t=W.bk
u={func:1,ret:-1,args:[t]}
W.a7(q,"load",H.m(new W.hn(q,r),u),!1,t)
W.a7(q,"error",H.m(r.ge3(),u),!1,t)
q.send()
return s},
ma:function(a){var u=document.createElement("img")
u.src=a
return u},
kg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mG:function(a,b,c,d){var u=W.kg(W.kg(W.kg(W.kg(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.mQ(new W.k1(c),W.o)
u=new W.k0(a,b,u,!1,[e])
u.j_()
return u},
mQ:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.f)return a
return u.dY(a,b)},
w:function w(){},
fy:function fy(){},
fA:function fA(){},
fB:function fB(){},
dC:function dC(){},
cg:function cg(){},
cK:function cK(){},
bR:function bR(){},
cO:function cO(){},
fT:function fT(){},
V:function V(){},
cP:function cP(){},
fU:function fU(){},
ba:function ba(){},
bb:function bb(){},
fV:function fV(){},
fW:function fW(){},
fY:function fY(){},
dO:function dO(){},
fZ:function fZ(){},
dP:function dP(){},
dQ:function dQ(){},
h_:function h_(){},
h0:function h0(){},
jY:function jY(a,b){this.a=a
this.b=b},
ad:function ad(){},
o:function o(){},
j:function j(){},
bc:function bc(){},
hc:function hc(){},
hd:function hd(){},
hh:function hh(){},
bd:function bd(){},
hl:function hl(){},
ck:function ck(){},
be:function be(){},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
cS:function cS(){},
bU:function bU(){},
cT:function cT(){},
bf:function bf(){},
hG:function hG(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
i1:function i1(){},
i2:function i2(a){this.a=a},
bi:function bi(){},
i3:function i3(){},
ak:function ak(){},
jX:function jX(a){this.a=a},
M:function M(){},
cY:function cY(){},
bj:function bj(){},
ik:function ik(){},
bk:function bk(){},
iB:function iB(){},
iC:function iC(a){this.a=a},
iE:function iE(){},
bm:function bm(){},
iN:function iN(){},
bn:function bn(){},
iO:function iO(){},
bo:function bo(){},
iW:function iW(){},
iX:function iX(a){this.a=a},
b0:function b0(){},
bp:function bp(){},
b1:function b1(){},
j3:function j3(){},
j4:function j4(){},
jd:function jd(){},
br:function br(){},
b2:function b2(){},
jg:function jg(){},
jh:function jh(){},
c1:function c1(){},
jw:function jw(){},
jL:function jL(){},
bt:function bt(){},
di:function di(){},
jZ:function jZ(){},
eE:function eE(){},
kf:function kf(){},
eW:function eW(){},
kq:function kq(){},
ks:function ks(){},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lD:function lD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k0:function k0(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
k1:function k1(a){this.a=a},
G:function G(){},
dT:function dT(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eX:function eX(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
dp:function dp(){},
dq:function dq(){},
f3:function f3(){},
f4:function f4(){},
f8:function f8(){},
fc:function fc(){},
fd:function fd(){},
dr:function dr(){},
ds:function ds(){},
ff:function ff(){},
fg:function fg(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},O={
l4:function(a){var u=new O.Z([a])
u.bx(a)
return u},
Z:function Z(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cV:function cV(){this.b=this.a=null},
mX:function(a){var u=C.e.jD(a,"/")
if(u<=0)return a
return C.e.bw(a,0,u)},
mO:function(a){var u,t,s=P.lq("([^\\s]+)")
$.mN=s
u=s.jt(a)
if(u==null)return H.c([],[P.n])
s=u.b
if(1>=s.length)return H.d(s,1)
t=s[1]
return H.c([t,C.e.eO(C.e.aZ(a,t.length))],[P.n])},
kF:function(a){var u,t=H.c([],[P.n]),s=P.lq("([^\\s]+)")
$.mN=s
s=new H.jO(s,a,0)
for(;s.B();){u=s.d.b
if(1>=u.length)return H.d(u,1)
C.a.h(t,u[1])}return t},
bK:function(a){var u,t=O.kF(a),s=H.c([],[P.E]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,P.oX(t[u]))}return s},
e8:function(a,b,c){return O.nP(a,b,!1)},
nP:function(a,b,c){var u=0,t=P.aF([P.H,P.n,O.aM]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$e8=P.aH(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.mX(a)
k=new O.kB(b)
k.sca(new H.a4([P.n,O.aM]))
k.c=null
n=k
u=7
return P.as(W.m9(a),$async$e8)
case 7:m=e
u=8
return P.as(n.aC(m,o,!1),$async$e8)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.az(h)
P.fw(a+": "+H.l(l))
j=P.t(a+": "+H.l(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aD(s,t)
case 2:return P.aC(q,t)}})
return P.aE($async$e8,t)},
aT:function(a,b){var u=null,t=null,s=!1
return O.nQ(a,b)},
nQ:function(a,b){var u=0,t=P.aF(E.U),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$aT=P.aH(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.mX(a)
k=f
j=new O.kC(b)
j.sis(H.c([],[O.dw]))
j.siQ(H.c([],[V.a6]))
j.shr(H.c([],[V.N]))
j.sca(new H.a4([P.n,O.aM]))
j.f=e
j.r=""
i=O.an()
h=i.r
h.st(0,new V.v(0.35,0.35,0.35))
h=i.x
h.st(0,new V.v(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.a3(null,!0,null,"",null,null)
if(k!=null)j.e.aH(0,k)
j.bH()
n=j
u=7
return P.as(W.m9(a),$async$aT)
case 7:m=a1
u=8
return P.as(n.aC(m,o,d),$async$aT)
case 8:k=e
if(k!=null){i=new O.io()
i.b=!0
k.D(i)}k=n.gjr()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.az(c)
P.fw(a+": "+H.l(l))
k=P.t(a+": "+H.l(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aD(s,t)
case 2:return P.aC(q,t)}})
return P.aE($async$aT,t)},
kB:function kB(a){this.a=a
this.c=this.b=null},
dw:function dw(a){this.a=a
this.b=null},
kC:function kC(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
io:function io(){this.b=null},
an:function(){var u,t,s=new O.aM()
s.sfL(O.l4(V.ao))
s.e.bh(s.ghw(),s.ghy())
u=new O.bh(s,"emission")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
s.f=u
u=new O.bh(s,"ambient")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
s.r=u
u=new O.bh(s,"diffuse")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
s.x=u
u=new O.bh(s,"invDiffuse")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
s.y=u
u=new O.hR(s,"specular")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
u.ch=100
s.z=u
u=new O.hN(s,"bump")
u.c=new A.a5(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bh(s,"reflect")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
s.cx=u
u=new O.hQ(s,"refract")
u.c=new A.a5(!1,!1,!1)
u.f=new V.v(0,0,0)
u.ch=1
s.cy=u
u=new O.hM(s,"alpha")
u.c=new A.a5(!1,!1,!1)
u.f=1
s.db=u
u=new D.e_()
u.bx(D.aj)
u.sfj(H.c([],[D.ch]))
u.sip(H.c([],[D.ed]))
u.sfk(H.c([],[D.em]))
u.y=u.x=null
u.d4(u.ghu(),u.gi5(),u.gi9())
s.dx=u
t=new O.hP()
t.b=new V.ac(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.P():t
u.h(0,s.giB())
u=s.dx
t=u.y
u=t==null?u.y=D.P():t
u.h(0,s.gaE())
s.fr=null
return s},
aM:function aM(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){},
hM:function hM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cU:function cU(){},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bh:function bh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hP:function hP(){var _=this
_.e=_.d=_.c=_.b=null},
hQ:function hQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hR:function hR(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ei:function ei(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iM:function iM(){this.c=this.b=this.a=null},
c0:function c0(){}},E={
a3:function(a,b,c,d,e,f){var u=new E.U()
u.am(a,b,c,d,e,f)
return u},
o2:function(a,b){var u=new E.it(a)
u.fc(a,b)
return u},
o8:function(a,b,c,d,e){var u,t,s=J.Y(a)
if(!!s.$icg)return E.my(a,!0,!0,!0,!1)
u=W.l3()
t=u.style
t.width="100%"
t.height="100%"
s.ge_(a).h(0,u)
return E.my(u,!0,!0,!0,!1)},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ep(),j=H.k(C.h.d1(a,"webgl2",P.nI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icp")
if(j==null)H.z(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o2(j,a)
u=new T.j6(j)
u.b=H.a2(j.getParameter(3379))
u.c=H.a2(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ev(a)
t=new X.hu()
t.sit(P.nJ(P.p))
u.b=t
t=new X.i4(u)
t.f=0
t.r=V.bH()
t.x=V.bH()
t.ch=t.Q=1
u.c=t
t=new X.hH(u)
t.r=0
t.x=V.bH()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.jf(u)
t.f=V.bH()
t.r=V.bH()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sh0(H.c([],[[P.d7,P.K]]))
t=u.z
s=document
r=W.ak
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.m(u.ghG(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.m(u.ghM(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.m(u.ghA(),o),!1,p))
t=u.z
n=W.bf
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.m(u.ghS(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.m(u.ghQ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.m(u.ghW(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.m(u.gi_(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.m(u.ghY(),q),!1,r))
n=u.z
m=W.bt;(n&&C.a).h(n,W.a7(a,H.S(W.ny(a)),H.m(u.gi1(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.m(u.ghI(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.m(u.ghK(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.m(u.gi3(),o),!1,p))
p=u.z
o=W.b2
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.m(u.gil(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.m(u.gih(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.m(u.gij(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aP(Date.now(),!1)
k.cy=0
k.dO()
return k},
fJ:function fJ(){},
U:function U(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ja:function ja(a){this.a=a}},Z={
lC:function(a,b,c){var u
H.i(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.dt(c)),35044)
a.bindBuffer(b,null)
return new Z.ey(b,u)},
aX:function(a){return new Z.bJ(a)},
ey:function ey(a,b){this.a=a
this.b=b},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dh:function dh(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a}},D={
P:function(){var u=new D.ci()
u.sao(null)
u.sbn(null)
u.c=null
u.d=0
return u},
fQ:function fQ(){},
ci:function ci(){var _=this
_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
A:function A(){this.b=null},
bW:function bW(a){this.b=null
this.$ti=a},
bX:function bX(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
m6:function(){var u=new D.ch()
u.c=new V.v(1,1,1)
u.a=V.oc()
u.d=V.jC()
u.e=V.ob()
u.st(0,null)
return u},
ch:function ch(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aj:function aj(){},
e_:function e_(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
ed:function ed(){},
em:function em(){}},X={dG:function dG(a,b){this.a=a
this.b=b},dZ:function dZ(a,b){this.a=a
this.b=b},hu:function hu(){this.d=this.b=this.a=null},e2:function e2(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hH:function hH(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},aZ:function aZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i4:function i4(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},il:function il(){},de:function de(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jf:function jf(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l8:function(a){var u=new X.hj(),t=new V.ac(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.lr()
u.r=t
return u},
mn:function(a){var u,t,s=new X.ec()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gfD())
t=new D.I("mover",u,s.b,[U.aw])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.O().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.E])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.O().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.E])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.O().a)){s.e=2000
t=new D.I("far",t,2000,[P.E])
t.b=!0
s.a2(t)}return s},
fI:function fI(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cf:function cf(){},
hj:function hj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(){this.b=this.a=null},
ec:function ec(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){}},V={
l5:function(a){var u,t,s
H.i(a,"$ib",[P.E],"$ab")
u=a.length
if(0>=u)return H.d(a,0)
t=a[0]
if(1>=u)return H.d(a,1)
s=a[1]
if(2>=u)return H.d(a,2)
u=a[2]
if(typeof t!=="number")return t.S()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.S()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.S()
if(u<0)u=0
else if(u>1)u=1
return new V.v(t,s,u)},
nv:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.c.bc(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.v(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.v(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.v(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.v(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.v(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.v(p,o,n)}},
pk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.d2(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.e.at("null",c)
return C.e.at(C.c.eN(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cz:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.E],"$ab")
u=H.c([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.q(u,p,C.e.at(u[p],s))}return u},
dy:function(a){return C.c.kf(Math.pow(2,C.k.bc(Math.log(H.oR(a))/Math.log(2))))},
bZ:function(){var u=$.mj
return u==null?$.mj=V.bC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e7:function(a,b,c){return V.bC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lk:function(a,b,c,d){return V.bC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mi:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bC(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lj:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bC(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
li:function(a,b,c){var u=c.v(0,Math.sqrt(c.F(c))),t=b.bq(u),s=t.v(0,Math.sqrt(t.F(t))),r=u.bq(s),q=new V.N(a.a,a.b,a.c),p=s.O(0).F(q),o=r.O(0).F(q),n=u.O(0).F(q)
return V.bC(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bH:function(){var u=$.mp
return u==null?$.mp=new V.a6(0,0):u},
lm:function(){var u=$.d0
return u==null?$.d0=new V.ah(0,0,0):u},
lr:function(){var u=$.mu
return u==null?$.mu=V.mt(0,0,1,1):u},
mt:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d2(a,b,c,d)},
ex:function(){var u=$.mE
return u==null?$.mE=new V.N(0,0,0):u},
ob:function(){var u=$.jz
return u==null?$.jz=new V.N(-1,0,0):u},
jC:function(){var u=$.jA
return u==null?$.jA=new V.N(0,1,0):u},
oc:function(){var u=$.jB
return u==null?$.jB=new V.N(0,0,1):u},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
e6:function e6(a,b,c,d,e,f,g,h,i){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function a1(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function(a){var u=new V.iF()
u.fe(a)
return u},
fz:function fz(){},
bB:function bB(){},
e4:function e4(){},
bE:function bE(){this.a=null},
iF:function iF(){this.a=null},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a){this.b=a
this.c=null},
je:function je(){this.c=this.b=this.a=null},
df:function df(a){this.b=a
this.a=this.c=null},
pf:function(a){P.oa(C.C,new V.kS(a))},
o4:function(a){var u=new V.iJ()
u.ff(a,!0)
return u},
kS:function kS(a){this.a=a},
iJ:function iJ(){this.b=this.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a}},U={
m5:function(){var u=new U.fR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bS:function(a){var u=new U.dK()
u.sZ(0,a)
return u},
fR:function fR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){this.b=this.a=null},
cR:function cR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aw:function aw(){},
ew:function ew(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
m8:function(){var u,t=new M.dR()
t.a=!0
t.sfP(0,O.l4(E.U))
t.e.bh(t.ghC(),t.ghE())
t.y=t.x=t.r=t.f=null
u=X.l8(null)
t.sb9(null)
t.sbf(0,u)
return t},
dJ:function dJ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dM:function dM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aN:function aN(){}},A={
nM:function(a,b){var u=a.aT,t=new A.e5(b,u)
t.bY(b,u)
t.f8(a,b)
return t},
nN:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.i(a9,"$ib",[A.aQ],"$ab")
H.i(b0,"$ib",[A.aU],"$ab")
H.i(b1,"$ib",[A.aV],"$ab")
u="MaterialLight_"+a0.gag(a0)+a1.gag(a1)+a2.gag(a2)+a3.gag(a3)+a4.gag(a4)+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.y)(a9),++s)u+="_"+H.l(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.y)(b0),++s)u+="_"+H.l(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.y)(b1),++s)u+="_"+H.l(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.aO()
if(k){t=$.bP()
f=new Z.bJ(f.a|t.a)}if(j){t=$.bO()
f=new Z.bJ(f.a|t.a)}if(i){t=$.bQ()
f=new Z.bJ(f.a|t.a)}if(h){t=$.bN()
f=new Z.bJ(f.a|t.a)}return new A.hO(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kz:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kA:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kz(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kV(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
or:function(a,b){var u,t=a.a,s=t.a
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
oo:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kA(b,t,"ambient")
b.a+="\n"},
op:function(a,b){var u,t=a.c
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
os:function(a,b){var u,t=a.d
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
oy:function(a,b){var u,t=a.e
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
ou:function(a,b){var u,t,s
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
ow:function(a,b){var u,t=a.r,s=t.a
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
ox:function(a,b){var u,t=a.x,s=t.a
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
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.l(u)
s=A.kV(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.A()
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
r=[P.n]
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
c.a+="      highLight = intensity*("+C.a.w(m," + ")+");\n"}else c.a+="   highLight = "+C.a.w(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.w(o," + ")+");\n"
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
ov:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.l(u)
s=A.kV(t)
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
if(typeof u!=="number")return u.A()
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
c.a=r+"\n"}r=[P.n]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.w(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.w(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.w(l," + ")+");\n"
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
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.l(u)
s=A.kV(t)
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
if(typeof u!=="number")return u.A()
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
c.a=u+"\n"}u=[P.n]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.w(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.w(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.w(j," + ")+");\n"
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
ot:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.n])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.w(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oA:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.c_("")
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
A.or(a,j)
A.oo(a,j)
A.op(a,j)
A.os(a,j)
A.oy(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ow(a,j)
A.ox(a,j)}A.ou(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.oq(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.ov(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.oz(a,q[o],j)
A.ot(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.n])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.e.aZ(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.e.aZ(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.e.aZ(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.w(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oB:function(a,b){var u,t,s
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
oD:function(a,b){var u
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
oC:function(a,b){var u
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
oF:function(a,b){var u,t
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
oG:function(a,b){var u,t
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
oE:function(a,b){var u
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
oH:function(a,b){var u
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
kV:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.e.aZ(a,1)},
lA:function(a,b,c,d,e){var u=new A.jm(a,c,e)
u.f=d
u.sj0(P.nK(d,0,P.p))
return u},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b){var _=this
_.kr=_.ef=_.ee=_.ed=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kz=_.ky=_.kx=_.cG=_.cF=_.cE=_.cD=_.cC=_.cB=_.kw=_.er=_.eq=_.kv=_.ep=_.eo=_.en=_.ku=_.em=_.el=_.ek=_.kt=_.ej=_.ei=_.ks=_.eh=_.eg=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
hO:function hO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aT=b3
_.ed=b4},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cs:function cs(a,b,c,d,e,f,g,h,i,j){var _=this
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
ct:function ct(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d3:function d3(){},
ej:function ej(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ek:function ek(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
er:function er(){},
jr:function jr(a){this.a=a},
aW:function aW(a,b,c){this.a=a
this.c=b
this.d=c},
jo:function jo(a,b,c){this.a=a
this.c=b
this.d=c},
jp:function jp(a,b,c){this.a=a
this.c=b
this.d=c},
jq:function jq(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
jn:function jn(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){this.a=a
this.c=b
this.d=c},
dg:function dg(a,b,c){this.a=a
this.c=b
this.d=c},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.kI()
if(a<3)return
u=F.lt()
t=-6.283185307179586/a
s=H.c([],[F.ar])
r=u.a
q=new V.N(0,0,1)
q=q.v(0,Math.sqrt(q.F(q)))
C.a.h(s,r.j6(new V.b_(-1,-1,-1,-1),new V.ac(1,1,1,1),new V.ah(0,0,0),new V.N(0,0,1),new V.a6(0.5,0.5),q))
for(p=0;p<=a;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=g.$1(p/a)
r=u.a
if(typeof l!=="number")return H.e(l)
q=new V.N(n,m,1).v(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.lB(new V.b_(-1,-1,-1,-1),null,new V.ac(k,i,j,1),new V.ah(n*l,m*l,0),new V.N(0,0,1),new V.a6(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.h(0,h)
C.a.h(s,h)}u.d.cp(s)
return u},
nG:function(a,b){var u=new F.bg(),t=a.a
if(t==null)H.z(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.t("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ah()
return u},
lt:function(){var u=new F.eh(),t=new F.jD(u)
t.b=!1
t.sj1(H.c([],[F.ar]))
u.a=t
t=new F.iI(u)
t.scd(H.c([],[F.bG]))
u.b=t
t=new F.iH(u)
t.shb(H.c([],[F.bg]))
u.c=t
t=new F.iG(u)
t.sh2(H.c([],[F.ag]))
u.d=t
u.e=null
return u},
lB:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ar(),r=new F.jI()
r.scd(H.c([],[F.bG]))
s.b=r
r=new F.jH()
u=[F.bg]
r.shc(H.c([],u))
r.shd(H.c([],u))
s.c=r
r=new F.jE()
u=[F.ag]
r.sh3(H.c([],u))
r.sh4(H.c([],u))
r.sh5(H.c([],u))
s.d=r
h=$.ni()
s.e=0
r=$.aO()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bP().a)!==0?e:t
s.x=(u&$.bO().a)!==0?b:t
s.y=(u&$.bQ().a)!==0?f:t
s.z=(u&$.cb().a)!==0?g:t
s.Q=(u&$.nj().a)!==0?c:t
s.ch=(u&$.cG().a)!==0?i:0
s.cx=(u&$.bN().a)!==0?a:t
return s},
kI:function kI(){},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bg:function bg(){this.b=this.a=null},
bG:function bG(){this.a=null},
eh:function eh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iG:function iG(a){this.a=a
this.b=null},
iH:function iH(a){this.a=a
this.b=null},
iI:function iI(a){this.a=a
this.b=null},
ar:function ar(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jK:function jK(a){this.a=a},
jJ:function jJ(a){this.a=a},
jD:function jD(a){this.a=a
this.c=this.b=null},
jE:function jE(){this.d=this.c=this.b=null},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(){this.c=this.b=null},
jI:function jI(){this.b=null}},T={
lw:function(a){var u=new T.j5()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
dH:function dH(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(a,b){this.c=a
this.d=b
this.b=null},
d9:function d9(){},
da:function da(){},
j5:function j5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j6:function j6(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
j8:function j8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c}},Q={
mg:function(a){if(a>=64)return new Q.q(0,0)
return new Q.q(C.d.aa(a,8)+1,C.d.d2(a,8)+1)},
mw:function(){var u=new Q.iQ()
u.fg()
return u},
aB:function(a){return new Q.B(a)},
hk:function hk(){this.d=this.c=this.a=null},
q:function q(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iQ:function iQ(){this.c=this.a=null},
iR:function iR(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(){this.d=this.c=null},
B:function B(a){this.a=a}},S={
fL:function(a,b,c,d,e,f){var u=null,t=new S.fK(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.f3(a,b,c,d,e,f)
return t},
np:function(a,b){var u=null,t=new S.dD(b)
t.am(u,!0,u,"",u,u)
t.f4(a,b)
return t},
h4:function(a,b,c,d,e,f){var u=null,t=new S.h3()
t.am(u,!0,u,"",u,u)
t.f5(a,b,c,d,e,f)
return t},
pg:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="modifiers",a4=document.getElementById("targetCanvas")
if(a4==null)H.z(P.t("Failed to find an element with the identifier, targetCanvas."))
u=E.o8(a4,!0,!0,!0,!1)
t=u.r
s=new U.ew()
r=U.m5()
r.sd0(0,!0)
r.scP(6.283185307179586)
r.scQ(0)
r.sar(0,0)
r.sew(100)
r.sa5(0)
r.se7(0.5)
s.b=r
q=s.gbB()
r.gu().h(0,q)
r=U.m5()
r.sd0(0,!0)
r.scP(6.283185307179586)
r.scQ(0)
r.sar(0,0)
r.sew(100)
r.sa5(0)
r.se7(0.5)
s.c=r
r.gu().h(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bD(!1,!1,!1)
o=s.d
s.d=p
r=[X.bD]
q=new D.I(a3,o,p,r)
q.b=!0
s.Y(q)
q=s.f
if(q!==!1){s.f=!1
q=new D.I("invertX",q,!1,[P.a8])
q.b=!0
s.Y(q)}q=s.r
if(q!==!1){s.r=!1
q=new D.I("invertY",q,!1,[P.a8])
q.b=!0
s.Y(q)}s.cr(t)
s.b.scQ(-1.5707963267948966)
s.b.scP(0)
s.b.sar(0,-0.5)
s.b.sd0(0,!1)
t=U.aw
s=H.c([s,U.bS(V.lk(1.75,1.75,1.75,1)),U.bS(V.e7(0,0,15))],[t])
q=new U.cR()
q.bx(t)
q.bh(q.ghs(),q.gi7())
q.aH(0,s)
q.e=null
q.f=V.bZ()
q.r=0
n=X.mn(q)
m=X.l8(a2)
if(m.b){m.b=!1
t=new D.I("clearColor",!0,!1,[P.a8])
t.b=!0
m.a2(t)}l=S.np(u,a5)
t=l.k4.a
k=new M.dM()
k.a=!0
s=E.a3(a2,!0,a2,"",a2,a2)
j=F.lt()
q=j.a
i=new V.N(-1,-1,1)
i=i.v(0,Math.sqrt(i.F(i)))
h=q.bJ(new V.b_(1,2,4,6),new V.ac(1,0,0,1),new V.ah(-1,-1,0),new V.a6(0,1),i,a2)
q=j.a
i=new V.N(1,-1,1)
i=i.v(0,Math.sqrt(i.F(i)))
g=q.bJ(new V.b_(0,3,4,6),new V.ac(0,0,1,1),new V.ah(1,-1,0),new V.a6(1,1),i,a2)
q=j.a
i=new V.N(1,1,1)
i=i.v(0,Math.sqrt(i.F(i)))
f=q.bJ(new V.b_(0,2,5,6),new V.ac(0,1,0,1),new V.ah(1,1,0),new V.a6(1,0),i,a2)
q=j.a
i=V.bH()
e=new V.N(-1,1,1)
e=e.v(0,Math.sqrt(e.F(e)))
d=q.bJ(new V.b_(0,2,4,7),new V.ac(1,1,0,1),new V.ah(-1,1,0),i,e,a2)
j.d.cp(H.c([h,g,f,d],[F.ar]))
j.b8()
s.sa0(0,j)
k.e=s
k.sb9(a2)
k.sbf(0,a2)
k.sa_(a2)
s=new O.ei()
s.b=1.0471975511965976
s.d=new V.v(1,1,1)
if(null!=t){o=s.c
s.c=t
t.gu().h(0,s.gaE())
t=new D.I("boxTexture",o,s.c,[T.db])
t.b=!0
s.U(t)}k.sa_(s)
k.sbf(0,m)
k.sb9(n)
c=M.m8()
c.sbf(0,m)
c.sb9(n)
c.e.h(0,l)
b=new X.fI()
b.d=b.c=b.b=b.a=512
b.e=!0
b.f=!1
b.x=b.r=1
b.ch=T.lw(a2)
b.cx=new V.ac(0,0,0,1)
b.cy=!0
b.db=2000
b.dx=!0
b.dy=V.lr()
b.sav(0,512)
b.saq(0,512)
a=new V.ac(0,0,0,1)
if(!b.cx.m(0,a)){o=b.cx
b.cx=a
t=new D.I("color",o,a,[V.ac])
t.b=!0
b.a2(t)}t=b.db
if(!(Math.abs(t-2000)<$.O().a)){b.db=2000
t=new D.I("depth",t,2000,[P.E])
t.b=!0
b.a2(t)}if(!b.f){b.f=!0
t=new D.I("autoResize",!1,!0,[P.a8])
t.b=!0
b.a2(t)}t=b.r
if(!(Math.abs(t-0.5)<$.O().a)){b.r=0.5
t=new D.I("autoResizeScalarX",t,0.5,[P.E])
t.b=!0
b.a2(t)}t=b.x
if(!(Math.abs(t-0.5)<$.O().a)){b.x=0.5
t=new D.I("autoResizeScalarY",t,0.5,[P.E])
t.b=!0
b.a2(t)}a0=V.lr()
if(!J.Q(b.dy,a0)){o=b.dy
b.dy=a0
t=new D.I("region",o,a0,[V.d2])
t.b=!0
b.a2(t)}a1=M.m8()
a1.sbf(0,b)
a1.sb9(n)
a1.e.h(0,l)
t=u.f
s=u.r
q=b.ch
i=new T.dH()
i.a=t
i.z=4
i.ch=i.Q=!1
p=new X.bD(!1,!1,!1)
i.c=p
t=new D.I(a3,a2,p,r)
t.b=!0
i.bz(t)
t=i.d
if(t!==q){if(t!=null)t.gu().R(0,i.gdj())
o=i.d
i.d=q
q.gu().h(0,i.gdj())
t=new D.I("texture",o,i.d,[T.da])
t.b=!0
i.bz(t)}i.cr(s)
t=i.f
if(t==null)t=i.f=D.P()
t.h(0,new S.kT(l,u,a1))
t=i.x
if(t==null)t=i.x=D.P()
t.h(0,new S.kU(l))
t=M.aN
s=H.c([k,c],[t])
r=new M.dJ()
r.bx(t)
r.e=!0
r.f=!1
r.r=null
r.bh(r.gib(),r.gie())
r.aH(0,s)
t=u.d
if(t!==r){if(t!=null)t.gu().R(0,u.gdg())
u.d=r
r.gu().h(0,u.gdg())
u.dh()}V.pf(u)},
me:function(a,b,c,d,e){var u=null,t=new S.hv(d,e,b,c)
t.am(u,!0,u,"",u,u)
t.b_(b,c,d,e)
t.f6(a,b,c,d,e)
return t},
hz:function(a,b,c,d,e,f){var u=null,t=new S.hy(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.f7(a,b,c,d,e,f)
return t},
nO:function(a){var u=new S.hY()
u.f9(a)
return u},
mm:function(a,b,c,d,e,f){var u=null,t=new S.ig(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fa(a,b,c,d,e,f)
return t},
ms:function(a,b,c,d,e,f){var u=null,t=new S.ip(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fb(a,b,c,d,e,f)
return t},
iy:function(a,b,c,d,e,f){var u=null,t=new S.ix(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.b_(b,c,e,f)
t.fd(a,b,c,d,e,f)
return t},
o9:function(a,b,c,d){var u=null,t=new S.dc(d,b,c)
t.am(u,!0,u,"",u,u)
t.fh(a,b,c,d)
return t},
fK:function fK(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
fN:function fN(){},
dD:function dD(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
h3:function h3(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(){},
kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function kU(a){this.a=a},
hv:function hv(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hx:function hx(){},
hy:function hy(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hB:function hB(){},
hY:function hY(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ii:function ii(){},
d_:function d_(){},
ip:function ip(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ir:function ir(){},
ix:function ix(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
iA:function iA(){},
dc:function dc(a,b,c){var _=this
_.fy=a
_.id=b
_.k1=c
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=null},
jc:function jc(){}},L={
n_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=V.o4("3Dart Chess"),d=[P.n]
e.b7(H.c(["This example is in development and may still have a few issues and glitches."],d))
u=W.l3()
u.className="pageLargeCanvas"
u.id="targetCanvas"
e.a.appendChild(u)
e.dV(1,"About")
e.b7(H.c(["Click and drag to see the board from different angles. ","Click without dragging to select a piece, unselect a piece, or pick which movement should be made. ","The game will start with white's turn."],d))
e.b7(H.c(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],d))
e.b7(H.c(["\xab[Back to Examples List|../../]"],d))
e.dV(1,"Help wanted")
e.b7(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],d))
e.b7(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],d))
t=new Q.hk()
t.a=!0
s=Q.mw()
d=$.b5()
e=$.bw()
d=d.a
e=e.a
if(typeof d!=="number")return d.X()
if(typeof e!=="number")return H.e(e)
r=d|e
q=$.b4().a
if(typeof q!=="number")return H.e(q)
p=1&q
s.C(new Q.q(1,1),new Q.B((r|p)>>>0))
o=$.cE()
o=o.a
if(typeof o!=="number")return o.X()
n=o|e
s.C(new Q.q(1,2),new Q.B((n|p)>>>0))
m=$.bv()
m=m.a
if(typeof m!=="number")return m.X()
l=m|e
s.C(new Q.q(1,3),new Q.B((l|p)>>>0))
k=$.bM()
k=k.a
if(typeof k!=="number")return k.X()
s.C(new Q.q(1,4),new Q.B((k|e|p)>>>0))
j=$.aJ()
j=j.a
if(typeof j!=="number")return j.X()
s.C(new Q.q(1,5),new Q.B((j|e|p)>>>0))
i=2&q
s.C(new Q.q(1,6),new Q.B((l|i)>>>0))
s.C(new Q.q(1,7),new Q.B((n|i)>>>0))
s.C(new Q.q(1,8),new Q.B((r|i)>>>0))
r=$.cF()
r=r.a
if(typeof r!=="number")return r.X()
e=r|e
s.C(new Q.q(2,1),new Q.B((e|p)>>>0))
s.C(new Q.q(2,2),new Q.B((e|i)>>>0))
n=3&q
s.C(new Q.q(2,3),new Q.B((e|n)>>>0))
l=4&q
s.C(new Q.q(2,4),new Q.B((e|l)>>>0))
h=5&q
s.C(new Q.q(2,5),new Q.B((e|h)>>>0))
g=6&q
s.C(new Q.q(2,6),new Q.B((e|g)>>>0))
f=7&q
s.C(new Q.q(2,7),new Q.B((e|f)>>>0))
q=8&q
s.C(new Q.q(2,8),new Q.B((e|q)>>>0))
e=$.af()
e=e.a
if(typeof e!=="number")return H.e(e)
r|=e
s.C(new Q.q(7,1),new Q.B((r|p)>>>0))
s.C(new Q.q(7,2),new Q.B((r|i)>>>0))
s.C(new Q.q(7,3),new Q.B((r|n)>>>0))
s.C(new Q.q(7,4),new Q.B((r|l)>>>0))
s.C(new Q.q(7,5),new Q.B((r|h)>>>0))
s.C(new Q.q(7,6),new Q.B((r|g)>>>0))
s.C(new Q.q(7,7),new Q.B((r|f)>>>0))
s.C(new Q.q(7,8),new Q.B((r|q)>>>0))
d|=e
s.C(new Q.q(8,1),new Q.B((d|p)>>>0))
r=o|e
s.C(new Q.q(8,2),new Q.B((r|p)>>>0))
q=m|e
s.C(new Q.q(8,3),new Q.B((q|p)>>>0))
s.C(new Q.q(8,4),new Q.B((k|e|p)>>>0))
s.C(new Q.q(8,5),new Q.B((j|e|p)>>>0))
s.C(new Q.q(8,6),new Q.B((q|i)>>>0))
s.C(new Q.q(8,7),new Q.B((r|i)>>>0))
s.C(new Q.q(8,8),new Q.B((d|i)>>>0))
t.c=s
P.ly(C.i,new L.kP(t))},
kP:function kP(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q,S,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.le.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gJ:function(a){return H.d1(a)},
i:function(a){return"Instance of '"+H.cn(a)+"'"}}
J.hq.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ia8:1}
J.dX.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iJ:1}
J.dY.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.ij.prototype={}
J.c3.prototype={}
J.bz.prototype={
i:function(a){var u=a[$.n7()]
if(u==null)return this.f1(a)
return"JavaScript function for "+H.l(J.aK(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$il9:1}
J.aS.prototype={
h:function(a,b){H.F(b,H.x(a,0))
if(!!a.fixed$length)H.z(P.ay("add"))
a.push(b)},
R:function(a,b){var u
if(!!a.fixed$length)H.z(P.ay("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
aH:function(a,b){var u,t
H.i(b,"$if",[H.x(a,0)],"$af")
if(!!a.fixed$length)H.z(P.ay("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.cN(a))}},
w:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.q(t,u,H.l(a[u]))
return t.join(b)},
jC:function(a){return this.w(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
f_:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.bl(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.bl(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gcM:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.nC())},
bv:function(a,b,c,d){var u,t,s=H.x(a,0)
H.i(d,"$if",[s],"$af")
if(!!a.immutable$list)H.z(P.ay("setRange"))
P.lp(b,c,a.length)
u=c-b
if(u===0)return
P.lo(0,"skipCount")
H.i(d,"$ib",[s],"$ab")
s=J.kK(d)
if(u>s.gk(d))throw H.h(H.nD())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
bX:function(a,b){var u=H.x(a,0)
H.m(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.z(P.ay("sort"))
H.el(a,0,a.length-1,b,u)},
aJ:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.la(a,"[","]")},
gV:function(a){return new J.au(a,a.length,[H.x(a,0)])},
gJ:function(a){return H.d1(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.z(P.ay("set length"))
if(b<0)throw H.h(P.bl(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c6(a,b))
return a[b]},
q:function(a,b,c){H.F(c,H.x(a,0))
if(!!a.immutable$list)H.z(P.ay("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c6(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.x(a,0)]
H.i(b,"$ib",t,"$ab")
u=C.d.p(a.length,b.gk(b))
t=H.c([],t)
this.sk(t,u)
this.bv(t,0,a.length,a)
this.bv(t,a.length,u,b)
return t},
$if:1,
$ib:1}
J.ld.prototype={}
J.au.prototype={
gL:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.y(s))
u=t.c
if(u>=r){t.sdz(null)
return!1}t.sdz(s[u]);++t.c
return!0},
sdz:function(a){this.d=H.F(a,H.x(this,0))},
$iaR:1}
J.bY.prototype={
bL:function(a,b){var u
H.n0(b)
if(typeof b!=="number")throw H.h(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbM(b)
if(this.gbM(a)===u)return 0
if(this.gbM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbM:function(a){return a===0?1/a<0:a<0},
kf:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ay(""+a+".toInt()"))},
bc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ay(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ay(""+a+".round()"))},
je:function(a,b,c){if(C.d.bL(b,c)>0)throw H.h(H.at(b))
if(this.bL(a,b)<0)return b
if(this.bL(a,c)>0)return c
return a},
eN:function(a,b){var u
if(b>20)throw H.h(P.bl(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbM(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a+b},
d2:function(a,b){var u
if(typeof b!=="number")throw H.h(H.at(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
de:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dR(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dR(a,b)},
dR:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ay("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bG:function(a,b){var u
if(a>0)u=this.iK(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iK:function(a,b){return b>31?0:a>>>b},
S:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a<b},
aY:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a>b},
bg:function(a,b){if(typeof b!=="number")throw H.h(H.at(b))
return a>=b},
$iE:1,
$iai:1}
J.dW.prototype={$ip:1}
J.dV.prototype={}
J.by.prototype={
ba:function(a,b){if(b<0)throw H.h(H.c6(a,b))
if(b>=a.length)H.z(H.c6(a,b))
return a.charCodeAt(b)},
b1:function(a,b){if(b>=a.length)throw H.h(H.c6(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.h(P.l0(b,null,null))
return a+b},
bw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.is(b,null))
if(b>c)throw H.h(P.is(b,null))
if(c>a.length)throw H.h(P.is(c,null))
return a.substring(b,c)},
aZ:function(a,b){return this.bw(a,b,null)},
eO:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.b1(r,0)===133){u=J.nF(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.ba(r,t)===133?J.lc(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
kj:function(a){var u,t,s
if(typeof a.trimRight!="undefined"){u=a.trimRight()
t=u.length
if(t===0)return u
s=t-1
if(this.ba(u,s)===133)t=J.lc(u,s)}else{t=J.lc(a,a.length)
u=a}if(t===u.length)return u
if(t===0)return""
return u.substring(0,t)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
at:function(a,b){var u=b-a.length
if(u<=0)return a
return this.l(" ",u)+a},
bP:function(a,b){var u=b-a.length
if(u<=0)return a
return a+this.l(" ",u)},
jy:function(a,b){var u=a.indexOf(b,0)
return u},
jD:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.h(H.c6(a,b))
return a[b]},
$iml:1,
$in:1}
H.ab.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.ba(this.a,b)},
$aeu:function(){return[P.p]},
$aC:function(){return[P.p]},
$af:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.h7.prototype={}
H.e1.prototype={
gL:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.kK(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.cN(s))
u=t.c
if(u>=q){t.sbl(null)
return!1}t.sbl(r.H(s,u));++t.c
return!0},
sbl:function(a){this.d=H.F(a,H.x(this,0))},
$iaR:1}
H.hK.prototype={
gV:function(a){return new H.hL(J.cH(this.a),this.b,this.$ti)},
gk:function(a){return J.b7(this.a)},
H:function(a,b){return this.b.$1(J.lZ(this.a,b))},
$af:function(a,b){return[b]}}
H.hL.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.sbl(u.c.$1(t.gL(t)))
return!0}u.sbl(null)
return!1},
gL:function(a){return this.a},
sbl:function(a){this.a=H.F(a,H.x(this,1))},
$aaR:function(a,b){return[b]}}
H.jM.prototype={
gV:function(a){return new H.jN(J.cH(this.a),this.b,this.$ti)}}
H.jN.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.D(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.cj.prototype={}
H.eu.prototype={}
H.et.prototype={}
H.jj.prototype={
as:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ht.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.ju.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cQ.prototype={}
H.kW.prototype={
$1:function(a){if(!!J.Y(a).$ibT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.f7.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia9:1}
H.cL.prototype={
i:function(a){return"Closure '"+H.cn(this).trim()+"'"},
$il9:1,
gkl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.j2.prototype={}
H.iV.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cD(u)+"'"}}
H.cI.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.d1(this.a)
else u=typeof t!=="object"?J.cc(t):H.d1(t)
return(u^H.d1(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.cn(u)+"'")}}
H.jl.prototype={
i:function(a){return this.a}}
H.fP.prototype={
i:function(a){return this.a}}
H.iD.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jP.prototype={
i:function(a){return"Assertion failed: "+P.dS(this.a)}}
H.a4.prototype={
gk:function(a){return this.a},
gaU:function(a){return new H.e0(this,[H.x(this,0)])},
e5:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.du(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.du(t,b)}else return s.jz(b)},
jz:function(a){var u=this.d
if(u==null)return!1
return this.cK(this.c6(u,J.cc(a)&0x3ffffff),a)>=0},
aH:function(a,b){J.m_(H.i(b,"$iH",this.$ti,"$aH"),new H.hs(this))},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bA(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bA(r,b)
s=t==null?null:t.b
return s}else return q.jA(b)},
jA:function(a){var u,t,s=this.d
if(s==null)return
u=this.c6(s,J.cc(a)&0x3ffffff)
t=this.cK(u,a)
if(t<0)return
return u[t].b},
q:function(a,b,c){var u,t,s,r,q,p,o=this
H.F(b,H.x(o,0))
H.F(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.dl(u==null?o.b=o.cb():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.dl(t==null?o.c=o.cb():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.cb()
r=J.cc(b)&0x3ffffff
q=o.c6(s,r)
if(q==null)o.cm(s,r,[o.cc(b,c)])
else{p=o.cK(q,b)
if(p>=0)q[p].b=c
else q.push(o.cc(b,c))}}},
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.cN(s))
u=u.c}},
dl:function(a,b,c){var u,t=this
H.F(b,H.x(t,0))
H.F(c,H.x(t,1))
u=t.bA(a,b)
if(u==null)t.cm(a,b,t.cc(b,c))
else u.b=c},
cc:function(a,b){var u=this,t=new H.hD(H.F(a,H.x(u,0)),H.F(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.mh(this)},
bA:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
fW:function(a,b){delete a[b]},
du:function(a,b){return this.bA(a,b)!=null},
cb:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cm(t,u,t)
this.fW(t,u)
return t}}
H.hs.prototype={
$2:function(a,b){var u=this.a
u.q(0,H.F(a,H.x(u,0)),H.F(b,H.x(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.J,args:[H.x(u,0),H.x(u,1)]}}}
H.hD.prototype={}
H.e0.prototype={
gk:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hE(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hE.prototype={
gL:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cN(t))
else{t=u.c
if(t==null){u.sdk(null)
return!1}else{u.sdk(t.a)
u.c=u.c.c
return!0}}},
sdk:function(a){this.d=H.F(a,H.x(this,0))},
$iaR:1}
H.kL.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kM.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.kN.prototype={
$1:function(a){return this.a(H.S(a))},
$S:33}
H.hr.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
ghq:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.md(u.a,t.multiline,!t.ignoreCase,!0)},
jt:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eR(u)},
h1:function(a,b){var u,t=this.ghq()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eR(u)},
$iml:1}
H.eR.prototype={
j:function(a,b){return C.a.j(this.b,b)},
$ie3:1}
H.jO.prototype={
gL:function(a){return this.d},
B:function(){var u,t,s,r=this,q=r.b
if(q==null)return!1
u=r.c
if(u<=q.length){t=r.a.h1(q,u)
if(t!=null){r.d=t
q=t.b
u=q.index
s=u+q[0].length
r.c=u===s?s+1:s
return!0}}r.b=r.d=null
return!1},
$iaR:1,
$aaR:function(){return[P.e3]}}
H.cX.prototype={$ipT:1}
H.e9.prototype={
gk:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cW.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]},
$acj:function(){return[P.E]},
$aC:function(){return[P.E]},
$if:1,
$af:function(){return[P.E]},
$ib:1,
$ab:function(){return[P.E]}}
H.ea.prototype={
$acj:function(){return[P.p]},
$aC:function(){return[P.p]},
$if:1,
$af:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.i5.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.i6.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.i7.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.i8.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.i9.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.eb.prototype={
gk:function(a){return a.length},
j:function(a,b){H.c4(b,a,a.length)
return a[b]},
$ipU:1}
H.ia.prototype={
gk:function(a){return a.length},
j:function(a,b){H.c4(b,a,a.length)
return a[b]},
$ipV:1}
H.dk.prototype={}
H.dl.prototype={}
H.dm.prototype={}
H.dn.prototype={}
P.jU.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jT.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:37}
P.jV.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jW.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fe.prototype={
fB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cy(new P.ku(this,b),0),a)
else throw H.h(P.ay("`setTimeout()` not found."))},
fC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cy(new P.kt(this,a,Date.now(),b),0),a)
else throw H.h(P.ay("Periodic timer."))},
$ibq:1}
P.ku.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:4}
P.kt.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.de(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.ez.prototype={
aI:function(a,b){var u,t=this
H.cA(b,{futureOr:1,type:H.x(t,0)})
if(t.b)t.a.aI(0,b)
else if(H.dx(b,"$iaL",t.$ti,"$aaL")){u=t.a
b.bR(u.gjg(u),u.ge3(),-1)}else P.lT(new P.jR(t,b))},
bb:function(a,b){if(this.b)this.a.bb(a,b)
else P.lT(new P.jQ(this,a,b))},
$il6:1}
P.jR.prototype={
$0:function(){this.a.a.aI(0,this.b)},
$S:2}
P.jQ.prototype={
$0:function(){this.a.a.bb(this.b,this.c)},
$S:2}
P.kx.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:50}
P.ky.prototype={
$2:function(a,b){this.a.$2(1,new H.cQ(a,H.k(b,"$ia9")))},
$S:43}
P.kG.prototype={
$2:function(a,b){this.a(H.a2(a),b)},
$S:47}
P.eC.prototype={
bb:function(a,b){H.k(b,"$ia9")
if(a==null)a=new P.cZ()
if(this.a.a!==0)throw H.h(P.lu("Future already completed"))
$.R.toString
this.aM(a,b)},
e4:function(a){return this.bb(a,null)},
$il6:1}
P.jS.prototype={
aI:function(a,b){var u
H.cA(b,{futureOr:1,type:H.x(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.lu("Future already completed"))
u.fG(b)},
aM:function(a,b){this.a.fH(a,b)}}
P.fb.prototype={
aI:function(a,b){var u
H.cA(b,{futureOr:1,type:H.x(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.lu("Future already completed"))
u.c1(b)},
jh:function(a){return this.aI(a,null)},
aM:function(a,b){this.a.aM(a,b)}}
P.bu.prototype={
jF:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.m(this.d,{func:1,ret:P.a8,args:[P.K]}),a.a,P.a8,P.K)},
jv:function(a){var u=this.e,t=P.K,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.fu(u,{func:1,args:[P.K,P.a9]}))return H.cA(r.kc(u,a.a,a.b,null,t,P.a9),s)
else return H.cA(r.cX(H.m(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.al.prototype={
bR:function(a,b,c){var u,t=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=$.R
if(u!==C.f){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
if(b!=null)b=P.oJ(b,u)}return this.co(a,b,c)},
au:function(a,b){return this.bR(a,null,b)},
co:function(a,b,c){var u,t,s=H.x(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[s]})
u=new P.al($.R,[c])
t=b==null?1:3
this.dm(new P.bu(u,t,a,b,[s,c]))
return u},
dm:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ibu")
t.c=a}else{if(s===2){u=H.k(t.c,"$ial")
s=u.a
if(s<4){u.dm(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.cw(null,null,s,H.m(new P.k2(t,a),{func:1,ret:-1}))}},
dM:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ibu")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$ial")
u=q.a
if(u<4){q.dM(a)
return}p.a=u
p.c=q.c}o.a=p.bF(a)
u=p.b
u.toString
P.cw(null,null,u,H.m(new P.ka(o,p),{func:1,ret:-1}))}},
bE:function(){var u=H.k(this.c,"$ibu")
this.c=null
return this.bF(u)},
bF:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c1:function(a){var u,t,s=this,r=H.x(s,0)
H.cA(a,{futureOr:1,type:r})
u=s.$ti
if(H.dx(a,"$iaL",u,"$aaL"))if(H.dx(a,"$ial",u,null))P.k5(a,s)
else P.mF(a,s)
else{t=s.bE()
H.F(a,r)
s.a=4
s.c=a
P.cu(s,t)}},
aM:function(a,b){var u,t=this
H.k(b,"$ia9")
u=t.bE()
t.a=8
t.c=new P.av(a,b)
P.cu(t,u)},
fG:function(a){var u,t=this
H.cA(a,{futureOr:1,type:H.x(t,0)})
if(H.dx(a,"$iaL",t.$ti,"$aaL")){t.fO(a)
return}t.a=1
u=t.b
u.toString
P.cw(null,null,u,H.m(new P.k4(t,a),{func:1,ret:-1}))},
fO:function(a){var u=this,t=u.$ti
H.i(a,"$iaL",t,"$aaL")
if(H.dx(a,"$ial",t,null)){if(a.a===8){u.a=1
t=u.b
t.toString
P.cw(null,null,t,H.m(new P.k9(u,a),{func:1,ret:-1}))}else P.k5(a,u)
return}P.mF(a,u)},
fH:function(a,b){var u
this.a=1
u=this.b
u.toString
P.cw(null,null,u,H.m(new P.k3(this,a,b),{func:1,ret:-1}))},
$iaL:1}
P.k2.prototype={
$0:function(){P.cu(this.a,this.b)},
$S:2}
P.ka.prototype={
$0:function(){P.cu(this.b,this.a.a)},
$S:2}
P.k6.prototype={
$1:function(a){var u=this.a
u.a=0
u.c1(a)},
$S:17}
P.k7.prototype={
$2:function(a,b){H.k(b,"$ia9")
this.a.aM(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.k8.prototype={
$0:function(){this.a.aM(this.b,this.c)},
$S:2}
P.k4.prototype={
$0:function(){var u=this.a,t=H.F(this.b,H.x(u,0)),s=u.bE()
u.a=4
u.c=t
P.cu(u,s)},
$S:2}
P.k9.prototype={
$0:function(){P.k5(this.b,this.a)},
$S:2}
P.k3.prototype={
$0:function(){this.a.aM(this.b,this.c)},
$S:2}
P.kd.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eI(H.m(s.d,{func:1}),null)}catch(r){u=H.az(r)
t=H.c8(r)
if(o.d){s=H.k(o.a.a.c,"$iav").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iav")
else q.b=new P.av(u,t)
q.a=!0
return}if(!!J.Y(n).$iaL){if(n instanceof P.al&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iav")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.au(new P.ke(p),null)
s.a=!1}},
$S:4}
P.ke.prototype={
$1:function(a){return this.a},
$S:31}
P.kc.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.F(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.cX(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.az(o)
t=H.c8(o)
s=n.a
s.b=new P.av(u,t)
s.a=!0}},
$S:4}
P.kb.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iav")
r=m.c
if(H.D(r.jF(u))&&r.e!=null){q=m.b
q.b=r.jv(u)
q.a=!1}}catch(p){t=H.az(p)
s=H.c8(p)
r=H.k(m.a.a.c,"$iav")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.av(t,s)
n.a=!0}},
$S:4}
P.eA.prototype={}
P.d6.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.al($.R,[P.p])
r.a=0
u=H.x(s,0)
t=H.m(new P.iZ(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.j_(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.iZ.prototype={
$1:function(a){H.F(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.x(this.b,0)]}}}
P.j_.prototype={
$0:function(){this.b.c1(this.a.a)},
$S:2}
P.d7.prototype={}
P.iY.prototype={}
P.kr.prototype={}
P.bq.prototype={}
P.av.prototype={
i:function(a){return H.l(this.a)},
$ibT:1}
P.kw.prototype={$iq7:1}
P.kE.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cZ():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.kl.prototype={
kd:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.f===$.R){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.az(s)
t=H.c8(s)
P.kD(r,r,this,u,H.k(t,"$ia9"))}},
ke:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.f===$.R){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.az(s)
t=H.c8(s)
P.kD(r,r,this,u,H.k(t,"$ia9"))}},
jb:function(a,b){return new P.kn(this,H.m(a,{func:1,ret:b}),b)},
cs:function(a){return new P.km(this,H.m(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.ko(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
eI:function(a,b){H.m(a,{func:1,ret:b})
if($.R===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cX:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.R===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
kc:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.R===C.f)return a.$2(b,c)
return P.oK(null,null,this,a,b,c,d,e,f)},
eH:function(a,b,c,d){return H.m(a,{func:1,ret:b,args:[c,d]})}}
P.kn.prototype={
$0:function(){return this.a.eI(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.km.prototype={
$0:function(){return this.a.kd(this.b)},
$S:4}
P.ko.prototype={
$1:function(a){var u=this.c
return this.a.ke(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ki.prototype={
gV:function(a){return P.mH(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.F(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dq(u==null?s.b=P.lE():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dq(t==null?s.c=P.lE():t,b)}else return s.fQ(0,b)},
fQ:function(a,b){var u,t,s,r=this
H.F(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.lE()
t=r.ds(b)
s=u[t]
if(s==null)u[t]=[r.c0(b)]
else{if(r.dA(s,b)>=0)return!1
s.push(r.c0(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iy(this.c,b)
else return this.ix(0,b)},
ix:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.h8(r,b)
t=s.dA(u,b)
if(t<0)return!1
s.dS(u.splice(t,1)[0])
return!0},
dq:function(a,b){H.F(b,H.x(this,0))
if(H.k(a[b],"$idj")!=null)return!1
a[b]=this.c0(b)
return!0},
iy:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$idj")
if(u==null)return!1
this.dS(u)
delete a[b]
return!0},
dD:function(){this.r=1073741823&this.r+1},
c0:function(a){var u,t=this,s=new P.dj(H.F(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dD()
return s},
dS:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dD()},
ds:function(a){return J.cc(a)&1073741823},
h8:function(a,b){return a[this.ds(b)]},
dA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.dj.prototype={}
P.kj.prototype={
gL:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cN(t))
else{t=u.c
if(t==null){u.sdr(null)
return!1}else{u.sdr(H.F(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
sdr:function(a){this.d=H.F(a,H.x(this,0))},
$iaR:1}
P.hF.prototype={$if:1,$ib:1}
P.C.prototype={
gV:function(a){return new H.e1(a,this.gk(a),[H.cB(this,a,"C",0)])},
H:function(a,b){return this.j(a,b)},
kh:function(a,b){var u,t=this,s=H.c([],[H.cB(t,a,"C",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.q(s,u,t.j(a,u))
return s},
kg:function(a){return this.kh(a,!0)},
p:function(a,b){var u,t=this,s=[H.cB(t,a,"C",0)]
H.i(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sk(u,C.d.p(t.gk(a),b.gk(b)))
C.a.bv(u,0,t.gk(a),a)
C.a.bv(u,t.gk(a),u.length,b)
return u},
i:function(a){return P.la(a,"[","]")}}
P.hI.prototype={}
P.hJ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:18}
P.am.prototype={
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.cB(s,a,"am",0),H.cB(s,a,"am",1)]})
for(u=J.cH(s.gaU(a));u.B();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.b7(this.gaU(a))},
i:function(a){return P.mh(a)},
$iH:1}
P.kp.prototype={
i:function(a){return P.la(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.lo(b,"index")
for(u=P.mH(r,r.r,H.x(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.a_(b,r,"index",null,t))},
$if:1,
$imv:1}
P.eQ.prototype={}
P.cM.prototype={}
P.dL.prototype={}
P.h8.prototype={
$acM:function(){return[P.n,[P.b,P.p]]}}
P.jx.prototype={}
P.jy.prototype={
jj:function(a){var u,t,s=P.lp(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kv(u)
if(t.h6(a,0,s)!==s)t.dU(C.e.ba(a,s-1),0)
return new Uint8Array(u.subarray(0,H.ol(0,t.b,u.length)))},
$adL:function(){return[P.n,[P.b,P.p]]}}
P.kv.prototype={
dU:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
h6:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.ba(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.b1(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dU(r,C.e.b1(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a8.prototype={}
P.aP.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.bG(u,30))&1073741823},
i:function(a){var u=this,t=P.nw(H.nY(u)),s=P.dN(H.nW(u)),r=P.dN(H.nS(u)),q=P.dN(H.nT(u)),p=P.dN(H.nV(u)),o=P.dN(H.nX(u)),n=P.nx(H.nU(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.E.prototype={}
P.bx.prototype={
p:function(a,b){return new P.bx(C.d.p(this.a,b.gc2()))},
S:function(a,b){return C.d.S(this.a,b.gc2())},
aY:function(a,b){return C.d.aY(this.a,b.gc2())},
bg:function(a,b){return C.d.bg(this.a,b.gc2())},
m:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h2(),q=this.a
if(q<0)return"-"+new P.bx(0-q).i(0)
u=r.$1(C.d.aa(q,6e7)%60)
t=r.$1(C.d.aa(q,1e6)%60)
s=new P.h1().$1(q%1e6)
return""+C.d.aa(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.h1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.h2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bT.prototype={}
P.fC.prototype={
i:function(a){return"Assertion failed"}}
P.cZ.prototype={
i:function(a){return"Throw of null."}}
P.b8.prototype={
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc4()+o+u
if(!q.a)return t
s=q.gc3()
r=P.dS(q.b)
return t+s+": "+r}}
P.co.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.hp.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t=H.a2(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.jv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jt.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.d5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dS(u)+"."}}
P.ie.prototype={
i:function(a){return"Out of Memory"},
$ibT:1}
P.en.prototype={
i:function(a){return"Stack Overflow"},
$ibT:1}
P.fX.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hi.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.l(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.bw(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.p.prototype={}
P.f.prototype={
gk:function(a){var u,t=this.gV(this)
for(u=0;t.B();)++u
return u},
H:function(a,b){var u,t,s
P.lo(b,"index")
for(u=this.gV(this),t=0;u.B();){s=u.gL(u)
if(b===t)return s;++t}throw H.h(P.a_(b,this,"index",null,t))},
i:function(a){return P.nB(this,"(",")")}}
P.aR.prototype={}
P.b.prototype={$if:1}
P.H.prototype={}
P.J.prototype={
gJ:function(a){return P.K.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ai.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
m:function(a,b){return this===b},
gJ:function(a){return H.d1(this)},
i:function(a){return"Instance of '"+H.cn(this)+"'"},
toString:function(){return this.i(this)}}
P.e3.prototype={}
P.a9.prototype={}
P.n.prototype={$iml:1}
P.c_.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.fy.prototype={
gk:function(a){return a.length}}
W.fA.prototype={
i:function(a){return String(a)}}
W.fB.prototype={
i:function(a){return String(a)}}
W.dC.prototype={}
W.cg.prototype={
d1:function(a,b,c){if(c!=null)return a.getContext(b,P.oS(c))
return a.getContext(b)},
eS:function(a,b){return this.d1(a,b,null)},
$icg:1}
W.cK.prototype={$icK:1}
W.bR.prototype={
gk:function(a){return a.length}}
W.cO.prototype={$icO:1}
W.fT.prototype={
gk:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cP.prototype={
gk:function(a){return a.length}}
W.fU.prototype={}
W.ba.prototype={}
W.bb.prototype={}
W.fV.prototype={
gk:function(a){return a.length}}
W.fW.prototype={
gk:function(a){return a.length}}
W.fY.prototype={
j:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dO.prototype={$idO:1}
W.fZ.prototype={
i:function(a){return String(a)}}
W.dP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.aA,P.ai]]},
$aC:function(){return[[P.aA,P.ai]]},
$if:1,
$af:function(){return[[P.aA,P.ai]]},
$ib:1,
$ab:function(){return[[P.aA,P.ai]]},
$aG:function(){return[[P.aA,P.ai]]}}
W.dQ.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gav(a))+" x "+H.l(this.gaq(a))},
m:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$iaA)return!1
return a.left===u.gbN(b)&&a.top===u.gbS(b)&&this.gav(a)===u.gav(b)&&this.gaq(a)===u.gaq(b)},
gJ:function(a){return W.mG(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gav(a)),C.c.gJ(this.gaq(a)))},
gdZ:function(a){return a.bottom},
gaq:function(a){return a.height},
gbN:function(a){return a.left},
gcW:function(a){return a.right},
gbS:function(a){return a.top},
gav:function(a){return a.width},
$iaA:1,
$aaA:function(){return[P.ai]}}
W.h_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.n]},
$aC:function(){return[P.n]},
$if:1,
$af:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aG:function(){return[P.n]}}
W.h0.prototype={
gk:function(a){return a.length}}
W.jY.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iad")},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.kg(this)
return new J.au(u,u.length,[H.x(u,0)])},
$aC:function(){return[W.ad]},
$af:function(){return[W.ad]},
$ab:function(){return[W.ad]}}
W.ad.prototype={
ge_:function(a){return new W.jY(a,a.children)},
ge2:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.aA(u,t,s,r,[P.ai])},
i:function(a){return a.localName},
$iad:1}
W.o.prototype={$io:1}
W.j.prototype={
j3:function(a,b,c,d){H.m(c,{func:1,args:[W.o]})
if(c!=null)this.fF(a,b,c,!1)},
fF:function(a,b,c,d){return a.addEventListener(b,H.cy(H.m(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.bc.prototype={$ibc:1}
W.hc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bc]},
$aC:function(){return[W.bc]},
$if:1,
$af:function(){return[W.bc]},
$ib:1,
$ab:function(){return[W.bc]},
$aG:function(){return[W.bc]}}
W.hd.prototype={
gk:function(a){return a.length}}
W.hh.prototype={
gk:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.hl.prototype={
gk:function(a){return a.length}}
W.ck.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.M]},
$aC:function(){return[W.M]},
$if:1,
$af:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$ick:1,
$aG:function(){return[W.M]}}
W.be.prototype={
jP:function(a,b,c,d){return a.open(b,c,!0)},
$ibe:1}
W.hm.prototype={
$1:function(a){return H.k(a,"$ibe").responseText},
$S:35}
W.hn.prototype={
$1:function(a){var u,t,s,r,q
H.k(a,"$ibk")
u=this.a
t=u.status
if(typeof t!=="number")return t.bg()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.aI(0,u)
else q.e4(a)},
$S:27}
W.cS.prototype={}
W.bU.prototype={$ibU:1,
ge8:function(a){return a.data}}
W.cT.prototype={$icT:1}
W.bf.prototype={$ibf:1}
W.hG.prototype={
i:function(a){return String(a)}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.i_.prototype={
j:function(a,b){return P.bL(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bL(t.value[1]))}},
gaU:function(a){var u=H.c([],[P.n])
this.M(a,new W.i0(u))
return u},
gk:function(a){return a.size},
$aam:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
W.i0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.i1.prototype={
j:function(a,b){return P.bL(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bL(t.value[1]))}},
gaU:function(a){var u=H.c([],[P.n])
this.M(a,new W.i2(u))
return u},
gk:function(a){return a.size},
$aam:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
W.i2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.bi.prototype={$ibi:1}
W.i3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bi]},
$aC:function(){return[W.bi]},
$if:1,
$af:function(){return[W.bi]},
$ib:1,
$ab:function(){return[W.bi]},
$aG:function(){return[W.bi]}}
W.ak.prototype={$iak:1}
W.jX.prototype={
gV:function(a){var u=this.a.childNodes
return new W.dT(u,u.length,[H.cB(C.G,u,"G",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aC:function(){return[W.M]},
$af:function(){return[W.M]},
$ab:function(){return[W.M]}}
W.M.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.f0(a):u},
$iM:1}
W.cY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.M]},
$aC:function(){return[W.M]},
$if:1,
$af:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$aG:function(){return[W.M]}}
W.bj.prototype={$ibj:1,
gk:function(a){return a.length}}
W.ik.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bj]},
$aC:function(){return[W.bj]},
$if:1,
$af:function(){return[W.bj]},
$ib:1,
$ab:function(){return[W.bj]},
$aG:function(){return[W.bj]}}
W.bk.prototype={$ibk:1}
W.iB.prototype={
j:function(a,b){return P.bL(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bL(t.value[1]))}},
gaU:function(a){var u=H.c([],[P.n])
this.M(a,new W.iC(u))
return u},
gk:function(a){return a.size},
$aam:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
W.iC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.iE.prototype={
gk:function(a){return a.length}}
W.bm.prototype={$ibm:1}
W.iN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bm]},
$aC:function(){return[W.bm]},
$if:1,
$af:function(){return[W.bm]},
$ib:1,
$ab:function(){return[W.bm]},
$aG:function(){return[W.bm]}}
W.bn.prototype={$ibn:1}
W.iO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bn]},
$aC:function(){return[W.bn]},
$if:1,
$af:function(){return[W.bn]},
$ib:1,
$ab:function(){return[W.bn]},
$aG:function(){return[W.bn]}}
W.bo.prototype={$ibo:1,
gk:function(a){return a.length}}
W.iW.prototype={
j:function(a,b){return a.getItem(H.S(b))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaU:function(a){var u=H.c([],[P.n])
this.M(a,new W.iX(u))
return u},
gk:function(a){return a.length},
$aam:function(){return[P.n,P.n]},
$iH:1,
$aH:function(){return[P.n,P.n]}}
W.iX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:38}
W.b0.prototype={$ib0:1}
W.bp.prototype={$ibp:1}
W.b1.prototype={$ib1:1}
W.j3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b1]},
$aC:function(){return[W.b1]},
$if:1,
$af:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aG:function(){return[W.b1]}}
W.j4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bp]},
$aC:function(){return[W.bp]},
$if:1,
$af:function(){return[W.bp]},
$ib:1,
$ab:function(){return[W.bp]},
$aG:function(){return[W.bp]}}
W.jd.prototype={
gk:function(a){return a.length}}
W.br.prototype={$ibr:1}
W.b2.prototype={$ib2:1}
W.jg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.br]},
$aC:function(){return[W.br]},
$if:1,
$af:function(){return[W.br]},
$ib:1,
$ab:function(){return[W.br]},
$aG:function(){return[W.br]}}
W.jh.prototype={
gk:function(a){return a.length}}
W.c1.prototype={}
W.jw.prototype={
i:function(a){return String(a)}}
W.jL.prototype={
gk:function(a){return a.length}}
W.bt.prototype={
gjm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ay("deltaY is not supported"))},
gjl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ay("deltaX is not supported"))},
$ibt:1}
W.di.prototype={
iA:function(a,b){return a.requestAnimationFrame(H.cy(H.m(b,{func:1,ret:-1,args:[P.ai]}),1))},
h_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.V]},
$aC:function(){return[W.V]},
$if:1,
$af:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aG:function(){return[W.V]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
m:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$iaA)return!1
return a.left===u.gbN(b)&&a.top===u.gbS(b)&&a.width===u.gav(b)&&a.height===u.gaq(b)},
gJ:function(a){return W.mG(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaq:function(a){return a.height},
gav:function(a){return a.width}}
W.kf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bd]},
$aC:function(){return[W.bd]},
$if:1,
$af:function(){return[W.bd]},
$ib:1,
$ab:function(){return[W.bd]},
$aG:function(){return[W.bd]}}
W.eW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.M]},
$aC:function(){return[W.M]},
$if:1,
$af:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$aG:function(){return[W.M]}}
W.kq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.bo]},
$aC:function(){return[W.bo]},
$if:1,
$af:function(){return[W.bo]},
$ib:1,
$ab:function(){return[W.bo]},
$aG:function(){return[W.bo]}}
W.ks.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.b0]},
$aC:function(){return[W.b0]},
$if:1,
$af:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aG:function(){return[W.b0]}}
W.k_.prototype={}
W.lD.prototype={}
W.k0.prototype={
j_:function(){var u=this,t=u.d
if(t!=null&&u.a<=0)J.nm(u.b,u.c,t,!1)}}
W.k1.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:39}
W.G.prototype={
gV:function(a){return new W.dT(a,this.gk(a),[H.cB(this,a,"G",0)])}}
W.dT.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdB(J.T(u.a,t))
u.c=t
return!0}u.sdB(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdB:function(a){this.d=H.F(a,H.x(this,0))},
$iaR:1}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.fj.prototype={$ibU:1,
ge8:function(a){return this.a}}
P.kH.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.he.prototype={
gc7:function(){var u=this.b,t=H.aI(u,"C",0),s=W.ad
return new H.hK(new H.jM(u,H.m(new P.hf(),{func:1,ret:P.a8,args:[t]}),[t]),H.m(new P.hg(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.b7(this.gc7().a)},
j:function(a,b){var u=this.gc7()
return u.b.$1(J.lZ(u.a,b))},
gV:function(a){var u=P.mf(this.gc7(),!1,W.ad)
return new J.au(u,u.length,[H.x(u,0)])},
$aC:function(){return[W.ad]},
$af:function(){return[W.ad]},
$ab:function(){return[W.ad]}}
P.hf.prototype={
$1:function(a){return!!J.Y(H.k(a,"$iM")).$iad},
$S:41}
P.hg.prototype={
$1:function(a){return H.r(H.k(a,"$iM"),"$iad")},
$S:42}
P.kk.prototype={
gcW:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return H.F(u+t,H.x(this,0))},
gdZ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return H.F(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
m:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Y(b)
if(!!u.$iaA){t=p.a
if(t==u.gbN(b)){s=p.b
if(s==u.gbS(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.e(r)
q=H.x(p,0)
if(H.F(t+r,q)===u.gcW(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.e(t)
u=H.F(s+t,q)===u.gdZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.cc(s),q=t.b,p=J.cc(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.e(o)
u=H.x(t,0)
o=C.d.gJ(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.e(s)
u=C.d.gJ(H.F(q+s,u))
return P.oh(P.kh(P.kh(P.kh(P.kh(0,r),p),o),u))}}
P.aA.prototype={
gbN:function(a){return this.a},
gbS:function(a){return this.b},
gav:function(a){return this.c},
gaq:function(a){return this.d}}
P.bA.prototype={$ibA:1}
P.hC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.bA]},
$if:1,
$af:function(){return[P.bA]},
$ib:1,
$ab:function(){return[P.bA]},
$aG:function(){return[P.bA]}}
P.bF.prototype={$ibF:1}
P.ic.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.bF]},
$if:1,
$af:function(){return[P.bF]},
$ib:1,
$ab:function(){return[P.bF]},
$aG:function(){return[P.bF]}}
P.im.prototype={
gk:function(a){return a.length}}
P.j1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.n]},
$if:1,
$af:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aG:function(){return[P.n]}}
P.u.prototype={
ge_:function(a){return new P.he(a,new W.jX(a))}}
P.bI.prototype={$ibI:1}
P.ji.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return a.getItem(b)},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[P.bI]},
$if:1,
$af:function(){return[P.bI]},
$ib:1,
$ab:function(){return[P.bI]},
$aG:function(){return[P.bI]}}
P.eO.prototype={}
P.eP.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.fE.prototype={
gk:function(a){return a.length}}
P.fF.prototype={
j:function(a,b){return P.bL(a.get(H.S(b)))},
M:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bL(t.value[1]))}},
gaU:function(a){var u=H.c([],[P.n])
this.M(a,new P.fG(u))
return u},
gk:function(a){return a.size},
$aam:function(){return[P.n,null]},
$iH:1,
$aH:function(){return[P.n,null]}}
P.fG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fH.prototype={
gk:function(a){return a.length}}
P.cd.prototype={}
P.id.prototype={
gk:function(a){return a.length}}
P.eB.prototype={}
P.dE.prototype={$idE:1}
P.dU.prototype={$idU:1}
P.ee.prototype={$iee:1}
P.ef.prototype={$ief:1}
P.cp.prototype={
eK:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Y(g)
if(!!u.$ibU&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.oT(g))
return}if(!!u.$icT&&h==null&&t&&!0){this.iP(a,b,c,d,e,f,g)
return}throw H.h(P.no("Incorrect number or type of arguments"))},
eJ:function(a,b,c,d,e,f,g){return this.eK(a,b,c,d,e,f,g,null,null,null)},
iP:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ac:function(a,b,c){return a.uniform1f(b,c)},
bU:function(a,b,c){return a.uniform1i(b,c)},
W:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cZ:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$icp:1}
P.eg.prototype={$ieg:1}
P.eo.prototype={$ieo:1}
P.es.prototype={$ies:1}
P.iP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.a_(b,a,null,null,null))
return P.bL(a.item(b))},
H:function(a,b){return this.j(a,b)},
$aC:function(){return[[P.H,,,]]},
$if:1,
$af:function(){return[[P.H,,,]]},
$ib:1,
$ab:function(){return[[P.H,,,]]},
$aG:function(){return[[P.H,,,]]}}
P.f5.prototype={}
P.f6.prototype={}
O.Z.prototype={
bx:function(a){var u=this
u.she(H.c([],[a]))
u.sdI(null)
u.sdF(null)
u.sdJ(null)},
d4:function(a,b,c){var u=this,t=H.aI(u,"Z",0)
H.m(b,{func:1,ret:P.a8,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.p,[P.f,t]]}
H.m(a,t)
H.m(c,t)
u.sdI(b)
u.sdF(a)
u.sdJ(c)},
bh:function(a,b){return this.d4(a,null,b)},
aQ:function(a){var u
H.i(a,"$if",[H.aI(this,"Z",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
df:function(a,b){var u
H.i(b,"$if",[H.aI(this,"Z",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.au(u,u.length,[H.x(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aI(s,"Z",0)
H.F(b,r)
r=[r]
if(H.D(s.aQ(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.df(t,H.c([b],r))}},
aH:function(a,b){var u,t,s=this
H.i(b,"$if",[H.aI(s,"Z",0)],"$af")
if(H.D(s.aQ(b))){u=s.a
t=u.length
C.a.aH(u,b)
s.df(t,b)}},
j:function(a,b){var u=this.a
if(b>=u.length)return H.d(u,b)
return u[b]},
she:function(a){this.a=H.i(a,"$ib",[H.aI(this,"Z",0)],"$ab")},
sdI:function(a){this.b=H.m(a,{func:1,ret:P.a8,args:[[P.f,H.aI(this,"Z",0)]]})},
sdF:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.p,[P.f,H.aI(this,"Z",0)]]})},
sdJ:function(a){H.m(a,{func:1,ret:-1,args:[P.p,[P.f,H.aI(this,"Z",0)]]})},
$if:1}
O.cV.prototype={
gk:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.P():u},
b0:function(){var u=this.b
if(u!=null)u.D(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gcM(u)
else return V.bZ()},
bQ:function(a){var u=this.a
if(a==null)C.a.h(u,V.bZ())
else C.a.h(u,a)
this.b0()},
aW:function(){var u=this.a
if(u.length>0){u.pop()
this.b0()}},
sc8:function(a){this.a=H.i(a,"$ib",[V.ao],"$ab")}}
E.fJ.prototype={}
E.U.prototype={
am:function(a,b,c,d,e,f){var u=this
u.a=d
u.b=b
u.x=u.r=u.f=u.e=u.d=u.c=null
u.sfi(0,O.l4(E.U))
u.y.bh(u.gjH(),u.gjK())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa0(0,e)
u.sa_(f)
u.sbO(c)
if(a!=null)u.y.aH(0,a)},
dn:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.au(u,u.length,[H.x(u,0)]);u.B();){t=u.d
if(t.f==null)t.dn()}},
sa0:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().R(0,s.geC())
u=s.c
if(u!=null)u.gu().h(0,s.geC())
t=new D.I("shape",r,s.c,[F.eh])
t.b=!0
s.aA(t)}},
sa_:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().R(0,s.geE())
u=s.f
s.f=a
if(a!=null)a.gu().h(0,s.geE())
s.dn()
t=new D.I("technique",u,s.f,[O.c0])
t.b=!0
s.aA(t)}},
sbO:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gu().R(0,s.geA())
if(a!=null)a.gu().h(0,s.geA())
s.r=a
t=new D.I("mover",u,a,[U.aw])
t.b=!0
s.aA(t)}},
aD:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.I("matrix",u,q,[V.ao])
t.b=!0
s.aA(t)}r=s.f
if(r!=null)r.aD(0,b)
for(r=s.y.a,r=new J.au(r,r.length,[H.x(r,0)]);r.B();)r.d.aD(0,b)},
ab:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.gZ(u))
else C.a.h(u.a,t.l(0,u.gZ(u)))
u.b0()
a.cT(r.f)
u=a.dy
s=(u&&C.a).gcM(u)
if(s!=null&&r.d!=null)s.cU(a,r)
for(u=r.y.a,u=new J.au(u,u.length,[H.x(u,0)]);u.B();)u.d.ab(a)
a.cS()
a.dx.aW()},
gu:function(){var u=this.z
return u==null?this.z=D.P():u},
aA:function(a){var u=this.z
if(u!=null)u.D(a)},
ah:function(){return this.aA(null)},
eD:function(a){H.k(a,"$iA")
this.e=null
this.aA(a)},
jN:function(){return this.eD(null)},
eF:function(a){this.aA(H.k(a,"$iA"))},
jO:function(){return this.eF(null)},
eB:function(a){this.aA(H.k(a,"$iA"))},
jM:function(){return this.eB(null)},
ez:function(a){this.aA(H.k(a,"$iA"))},
jJ:function(){return this.ez(null)},
jI:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$if",[E.U],"$af")
for(u=b.length,t=this.gey(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ci()
o.sao(null)
o.sbn(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ah()},
jL:function(a,b){var u,t
H.i(b,"$if",[E.U],"$af")
for(u=b.gV(b),t=this.gey();u.B();)u.gL(u).gu().R(0,t)
this.ah()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfi:function(a,b){this.y=H.i(b,"$iZ",[E.U],"$aZ")},
$icl:1}
E.it.prototype={
fc:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aP(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cV()
t=[V.ao]
u.sc8(H.c([],t))
u.b=null
u.gu().h(0,new E.iu(s))
s.cy=u
u=new O.cV()
u.sc8(H.c([],t))
u.b=null
u.gu().h(0,new E.iv(s))
s.db=u
u=new O.cV()
u.sc8(H.c([],t))
u.b=null
u.gu().h(0,new E.iw(s))
s.dx=u
s.siO(H.c([],[O.c0]))
u=s.dy;(u&&C.a).h(u,null)
s.siJ(new H.a4([P.n,A.d3]))},
gk8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.l(0,u.gZ(u))
s=u}return s},
geG:function(){var u,t=this,s=t.ch
if(s==null){s=t.gk8()
u=t.dx
u=t.ch=s.l(0,u.gZ(u))
s=u}return s},
cT:function(a){var u=this.dy,t=a==null?(u&&C.a).gcM(u):a;(u&&C.a).h(u,t)},
cS:function(){var u=this.dy
if(u.length>1)u.pop()},
cq:function(a){var u=a.b
if(u.length===0)throw H.h(P.t("May not cache a shader with no name."))
if(this.fr.e5(0,u))throw H.h(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.q(0,u,a)},
siO:function(a){this.dy=H.i(a,"$ib",[O.c0],"$ab")},
siJ:function(a){this.fr=H.i(a,"$iH",[P.n,A.d3],"$aH")}}
E.iu.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.ch=u.z=null},
$S:6}
E.iv.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:6}
E.iw.prototype={
$1:function(a){var u
H.k(a,"$iA")
u=this.a
u.cx=u.ch=null},
$S:6}
E.ep.prototype={
di:function(a){H.k(a,"$iA")
this.cV()},
dh:function(){return this.di(null)},
gju:function(){var u,t=this,s=Date.now(),r=C.d.aa(P.m7(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aP(s,!1)
return u/r},
dO:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.l()
if(typeof r!=="number")return H.e(r)
u=C.c.bc(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.l()
t=C.c.bc(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ly(C.i,s.gkb())}},
cV:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.ja(this),{func:1,ret:-1,args:[P.ai]})
C.t.h_(u)
C.t.iA(u,W.mQ(t,P.ai))}},
ab:function(a){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dO()
if(a==null)a=p.d
if(a!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aP(r,!1)
s.y=P.m7(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.b0()
r=s.db
C.a.sk(r.a,0)
r.b0()
r=s.dx
C.a.sk(r.a,0)
r.b0()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
a.ab(p.e)}}catch(q){u=H.az(q)
t=H.c8(q)
P.fw("Error: "+H.l(u))
P.fw("Stack: "+H.l(t))
throw H.h(u)}},
ka:function(){return this.ab(null)}}
E.ja.prototype={
$1:function(a){var u
H.n0(a)
u=this.a
if(u.ch){u.ch=!1
u.ka()}},
$S:51}
Z.ey.prototype={$ipl:1}
Z.dF.prototype={
T:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.az(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.dh.prototype={$ipm:1}
Z.ce.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
T:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].T(a)},
af:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ab:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aK(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(p,", ")+"\nAttrs:   "+C.a.w(r,", ")},
sh9:function(a){this.b=H.i(a,"$ib",[Z.bV],"$ab")},
$ipt:1}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cn(this.c)+"'")+"]"}}
Z.bJ.prototype={
gd8:function(a){var u=this.a,t=(u&$.aO().a)!==0?3:0
if((u&$.bP().a)!==0)t+=3
if((u&$.bO().a)!==0)t+=3
if((u&$.bQ().a)!==0)t+=2
if((u&$.cb().a)!==0)t+=3
if((u&$.dz().a)!==0)t+=3
if((u&$.dA().a)!==0)t+=4
if((u&$.cG().a)!==0)++t
return(u&$.bN().a)!==0?t+4:t},
j7:function(a){var u,t=$.aO(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bN()
if((s&t.a)!==0)if(u===a)return t
return $.nk()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bJ))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.n]),t=this.a
if((t&$.aO().a)!==0)C.a.h(u,"Pos")
if((t&$.bP().a)!==0)C.a.h(u,"Norm")
if((t&$.bO().a)!==0)C.a.h(u,"Binm")
if((t&$.bQ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.cb().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dz().a)!==0)C.a.h(u,"Clr3")
if((t&$.dA().a)!==0)C.a.h(u,"Clr4")
if((t&$.cG().a)!==0)C.a.h(u,"Weight")
if((t&$.bN().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.fQ.prototype={}
D.ci.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.m(b,u)
if(this.a==null)this.sao(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.A]})
u=s.a
u=u==null?null:C.a.aJ(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aJ(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
D:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.M(P.mf(u,!0,{func:1,ret:-1,args:[D.A]}),new D.ha(q))
u=r.b
if(u!=null){r.sbn(H.c([],[{func:1,ret:-1,args:[D.A]}]))
C.a.M(u,new D.hb(q))}return!0},
cA:function(){return this.D(null)},
be:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sao:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
sbn:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.ha.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.hb.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.A.prototype={}
D.bW.prototype={}
D.bX.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
O.kB.prototype={
aC:function(a,b,c){var u=0,t=P.aF(null),s=this
var $async$aC=P.aH(function(d,e){if(d===1)return P.aC(e,t)
while(true)switch(u){case 0:u=2
return P.as(s.aB(H.c(a.split("\n"),[P.n]),b,!1),$async$aC)
case 2:return P.aD(null,t)}})
return P.aE($async$aC,t)},
aB:function(a,b,c){H.i(a,"$ib",[P.n],"$ab")
return this.k6(a,b,!1)},
k6:function(a,b,c){var u=0,t=P.aF(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$aB=P.aH(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.lY(o,a.length)){u=4
break}s=6
u=9
return P.as(p.ae(C.a.j(a,o),b,!1),$async$aB)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.az(k)
l=P.t("Line "+H.l(J.fx(o,1))+": "+H.l(n))
throw H.h(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fx(o,1)
u=2
break
case 4:return P.aD(null,t)
case 1:return P.aC(r,t)}})
return P.aE($async$aB,t)},
ae:function(a,b,c){return this.k0(a,b,!1)},
k0:function(a,b,c){var u=0,t=P.aF(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$ae=P.aH(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.m0(a,"#")
if(J.lX(n,0))a=J.m1(a,0,n)
a=J.l_(a)
if(J.b7(a)<=0){u=1
break}m=O.mO(a)
if(J.b7(m)<1){u=1
break}case 7:switch(J.T(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.T(m,1)
j=O.an()
o.c=j
o.b.q(0,k,j)
u=1
break
case 10:i=O.bK(J.T(m,1))
o.c.r.st(0,V.l5(i))
u=1
break
case 11:i=O.bK(J.T(m,1))
o.c.x.st(0,V.l5(i))
u=1
break
case 12:i=O.bK(J.T(m,1))
o.c.z.st(0,V.l5(i))
u=1
break
case 13:i=O.bK(J.T(m,1))
k=i.length
if(k!==1)H.z(P.t("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.d(i,0)
u=1
break}j.sa9(i[0])
u=1
break
case 14:i=O.bK(J.T(m,1))
k=i.length
if(k!==1)H.z(P.t("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}j.sag(0,i[0])
u=1
break
case 15:i=O.bK(J.T(m,1))
k=i.length
if(k!==1)H.z(P.t("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.e(k)
u=1
break}j.sag(0,1-k)
u=1
break
case 16:u=23
return P.as(o.cf(J.T(m,1),b),$async$ae)
case 23:u=1
break
case 17:u=24
return P.as(o.cg(J.T(m,1),b),$async$ae)
case 24:u=1
break
case 18:u=25
return P.as(o.ci(J.T(m,1),b),$async$ae)
case 25:u=1
break
case 19:u=26
return P.as(o.ce(J.T(m,1),b),$async$ae)
case 26:u=1
break
case 20:u=27
return P.as(o.bC(J.T(m,1),b),$async$ae)
case 27:u=1
break
case 21:u=28
return P.as(o.bC(J.T(m,1),b),$async$ae)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.az(g)
k=P.t('Line: "'+H.l(a)+'": '+H.l(l))
throw H.h(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aD(s,t)
case 2:return P.aC(q,t)}})
return P.aE($async$ae,t)},
cf:function(a,b){var u=0,t=P.aF(null),s=this,r
var $async$cf=P.aH(function(c,d){if(c===1)return P.aC(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sai(s.a.ay(r))
return P.aD(null,t)}})
return P.aE($async$cf,t)},
cg:function(a,b){var u=0,t=P.aF(null),s=this,r
var $async$cg=P.aH(function(c,d){if(c===1)return P.aC(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sai(s.a.ay(r))
return P.aD(null,t)}})
return P.aE($async$cg,t)},
ci:function(a,b){var u=0,t=P.aF(null),s=this,r
var $async$ci=P.aH(function(c,d){if(c===1)return P.aC(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sai(s.a.ay(r))
return P.aD(null,t)}})
return P.aE($async$ci,t)},
ce:function(a,b){var u=0,t=P.aF(null),s=this,r
var $async$ce=P.aH(function(c,d){if(c===1)return P.aC(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sai(s.a.ay(r))
return P.aD(null,t)}})
return P.aE($async$ce,t)},
bC:function(a,b){var u=0,t=P.aF(null),s=this,r
var $async$bC=P.aH(function(c,d){if(c===1)return P.aC(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sai(s.a.ay(r))
return P.aD(null,t)}})
return P.aE($async$bC,t)},
sca:function(a){this.b=H.i(a,"$iH",[P.n,O.aM],"$aH")}}
O.dw.prototype={
skk:function(a){this.b=H.i(a,"$ib",[F.ar],"$ab")}}
O.kC.prototype={
gjr:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.d(t,0)
return t[0]}return u},
aC:function(a,b,c){var u=0,t=P.aF(null),s=this
var $async$aC=P.aH(function(d,e){if(d===1)return P.aC(e,t)
while(true)switch(u){case 0:u=2
return P.as(s.aB(H.c(a.split("\n"),[P.n]),b,!1),$async$aC)
case 2:return P.aD(null,t)}})
return P.aE($async$aC,t)},
aB:function(a,b,c){H.i(a,"$ib",[P.n],"$ab")
return this.k7(a,b,!1)},
k7:function(a,b,c){var u=0,t=P.aF(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$aB=P.aH(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.lY(o,a.length)){u=4
break}s=6
u=9
return P.as(p.ae(C.a.j(a,o),b,!1),$async$aB)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.az(k)
l=P.t("Line "+H.l(J.fx(o,1))+": "+H.l(n))
throw H.h(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fx(o,1)
u=2
break
case 4:return P.aD(null,t)
case 1:return P.aC(r,t)}})
return P.aE($async$aB,t)},
ae:function(a,b,c){return this.k5(a,b,!1)},
k5:function(a,b,c){var u=0,t=P.aF(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ae=P.aH(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.m0(a,"#")
if(J.lX(n,0))a=J.m1(a,0,n)
a=J.l_(a)
if(J.b7(a)<=0){u=1
break}m=O.mO(a)
if(J.b7(m)<1){u=1
break}case 7:switch(J.T(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:k=O.bK(J.T(m,1))
j=k.length
if(j<3)H.z(P.t("Positions must have at least 3 numbers."))
if(j>4)H.z(P.t("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.d(k,3)
u=1
break}i=k[3]
h=$.O()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.z(P.t("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.d(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.d(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.d(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.dw(new V.ah(g[0],g[1],g[2]))
g.skk(H.c([],[F.ar]))
C.a.h(i,g)
u=1
break
case 10:k=O.bK(J.T(m,1))
j=k.length
if(j<2)H.z(P.t("Textures must have at least 2 numbers."))
if(j>3)H.z(P.t("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.d(k,2)
u=1
break}i=k[2]
h=$.O()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.z(P.t("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.d(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.d(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.a6(h[0],h[1]))
u=1
break
case 11:k=O.bK(J.T(m,1))
j=k.length
if(j!==3)H.z(P.t("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.d(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.d(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.d(k,2)
u=1
break}C.a.h(i,new V.N(h,g,k[2]))
u=1
break
case 12:o.iw(J.T(m,1))
u=1
break
case 13:o.iv(J.T(m,1))
u=1
break
case 14:o.iu(J.T(m,1))
u=1
break
case 15:u=20
return P.as(o.bD(J.T(m,1),b,!1),$async$ae)
case 20:u=1
break
case 16:j=J.T(m,1)
o.x=H.k(o.e.j(0,j),"$iaM")
o.bH()
u=1
break
case 17:o.r=H.S(J.T(m,1))
o.bH()
u=1
break
case 18:o.r=H.S(J.T(m,1))
o.bH()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.az(e)
j=P.t('Line: "'+H.l(a)+'": '+H.l(l))
throw H.h(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.aD(s,t)
case 2:return P.aC(q,t)}})
return P.aE($async$ae,t)},
bH:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.lt()
r.y=u
u=E.a3(null,!0,null,"",u,null)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.sk(u[s].b,0)}r.z.sa_(r.x)
r.z.a=r.r},
bZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=", was out of range [-",g=null,f=a.split("/"),e=f.length
if(0>=e)return H.d(f,0)
u=P.lP(f[0])
t=i.b.length
if(typeof u!=="number")return u.S()
if(u<-t||u>t||u===0)throw H.h(P.t("The position index, "+u+h+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.lP(s)
q=i.c
t=q.length
if(typeof r!=="number")return r.S()
if(r<-t||r>t||r===0)throw H.h(P.t("The texture index, "+r+h+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.d(q,p)
o=q[p]}else o=g}else o=g
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.lP(s)
e=i.d
t=e.length
if(typeof n!=="number")return n.S()
if(n<-t||n>t||n===0)throw H.h(P.t("The normal index, "+n+h+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.d(e,q)
m=e[q]}else m=g}else m=g
e=i.b
if(u<0||u>=e.length)return H.d(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.y)(e),++k){j=e[k]
if(J.Q(j.y,o)&&J.Q(j.r,m))return j}j=F.lB(g,g,g,g,g,g,g,g,0)
e=l.a
if(!J.Q(j.f,e)){j.f=e
e=j.a
if(e!=null)e.ah()}if(!J.Q(j.y,o)){j.y=o
e=j.a
if(e!=null)e.ah()}m=m==null?g:m.v(0,Math.sqrt(m.F(m)))
if(!J.Q(j.r,m)){j.r=m
e=j.a
if(e!=null)e.ah()}i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
iw:function(a){var u,t=O.kF(a),s=H.c([],[F.ar]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bZ(t[u]))}this.y.b.j5(s)},
iv:function(a){var u,t=O.kF(a),s=H.c([],[F.ar]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bZ(t[u]))}this.y.c.j4(s)},
iu:function(a){var u,t=O.kF(a),s=H.c([],[F.ar]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bZ(t[u]))}this.y.d.cp(s)},
bD:function(a,b,c){var u=0,t=P.aF(null),s=this,r
var $async$bD=P.aH(function(d,e){if(d===1)return P.aC(e,t)
while(true)switch(u){case 0:u=2
return P.as(O.e8(b+"/"+a,s.a,!1),$async$bD)
case 2:r=e
s.e.aH(0,r)
return P.aD(null,t)}})
return P.aE($async$bD,t)},
sis:function(a){this.b=H.i(a,"$ib",[O.dw],"$ab")},
siQ:function(a){this.c=H.i(a,"$ib",[V.a6],"$ab")},
shr:function(a){this.d=H.i(a,"$ib",[V.N],"$ab")},
sca:function(a){this.e=H.i(a,"$iH",[P.n,O.aM],"$aH")}}
O.io.prototype={}
X.dG.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dG))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dZ.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dZ))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hu.prototype={
jU:function(a){this.d.h(0,a.a)
return!1},
jQ:function(a){this.d.R(0,a.a)
return!1},
sit:function(a){this.d=H.i(a,"$imv",[P.p],"$amv")}}
X.e2.prototype={}
X.hH.prototype={
bm:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.l()
u=b.b
t=p.ch
if(typeof u!=="number")return u.l()
s=n.a
if(typeof s!=="number")return s.p()
n=n.b
if(typeof n!=="number")return n.p()
r=new V.a6(s+m*l,n+u*t)
t=p.a.gbK()
q=new X.aZ(a,V.bH(),p.x,t,r)
q.b=!0
p.z=new P.aP(o,!1)
p.x=r
return q},
cR:function(a,b){this.r=a.a
return!1},
bt:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eU()
if(typeof u!=="number")return u.A()
this.r=(u&~t)>>>0
return!1},
bs:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bm(a,b))
return!0},
jV:function(a){return!1},
hV:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e2(c,r.a.gbK(),b)
s.b=!0
t.D(s)
r.y=new P.aP(u,!1)
r.x=V.bH()}}
X.bD.prototype={
m:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.aZ.prototype={}
X.i4.prototype={
c5:function(a,b,c){var u=this,t=new P.aP(Date.now(),!1),s=u.a.gbK(),r=new X.aZ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cR:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.c5(a,b,!0))
return!0},
bt:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eU()
if(typeof t!=="number")return t.A()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.c5(a,b,!0))
return!0},
bs:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.c5(a,b,!1))
return!0},
jW:function(a,b){return!1},
ge9:function(){var u=this.b
return u==null?this.b=D.P():u},
gd_:function(){var u=this.c
return u==null?this.c=D.P():u},
gbr:function(){var u=this.d
return u==null?this.d=D.P():u}}
X.il.prototype={}
X.de.prototype={}
X.jf.prototype={
bm:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a6],"$ab")
u=new P.aP(Date.now(),!1)
t=a.length>0?a[0]:V.bH()
s=q.a.gbK()
r=new X.de(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jT:function(a){var u
H.i(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.D(this.bm(a,!0))
return!0},
jR:function(a){var u
H.i(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.D(this.bm(a,!0))
return!0},
jS:function(a){var u
H.i(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.D(this.bm(a,!1))
return!0},
gd9:function(a){var u=this.b
return u==null?this.b=D.P():u},
gec:function(a){var u=this.c
return u==null?this.c=D.P():u},
gbr:function(){var u=this.d
return u==null?this.d=D.P():u}}
X.ev.prototype={
gbK:function(){var u=this.a,t=C.h.ge2(u).c
t.toString
u=C.h.ge2(u).d
u.toString
return V.mt(0,0,t,u)},
dv:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dZ(u,new X.bD(t,a.altKey,a.shiftKey))},
b6:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
cn:function(a){if(!H.D(a.ctrlKey))H.D(a.metaKey)
a.shiftKey},
aR:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.a6(s-q,r-u)},
bo:function(a){return new V.a1(a.movementX,a.movementY)},
cj:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=C.c.a4(r.pageX)
C.c.a4(r.pageY)
p=o.left
C.c.a4(r.pageX)
C.a.h(n,new V.a6(q-p,C.c.a4(r.pageY)-o.top))}return n},
aN:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dG(u,new X.bD(t,a.altKey,a.shiftKey))},
c9:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hN:function(a){this.f=!0},
hB:function(a){this.f=!1},
hH:function(a){H.k(a,"$iak")
if(H.D(this.f)&&this.c9(a))a.preventDefault()},
hT:function(a){var u
H.k(a,"$ibf")
if(!H.D(this.f))return
u=this.dv(a)
this.b.jU(u)},
hR:function(a){var u
H.k(a,"$ibf")
if(!H.D(this.f))return
u=this.dv(a)
this.b.jQ(u)},
hX:function(a){var u,t,s,r,q=this
H.k(a,"$iak")
u=q.a
u.focus()
q.f=!0
q.b6(a)
if(H.D(q.x)){t=q.aN(a)
s=q.bo(a)
if(q.d.cR(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aN(a)
r=q.aR(a)
if(q.c.cR(t,r))a.preventDefault()},
i0:function(a){var u,t,s,r=this
H.k(a,"$iak")
r.b6(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bo(a)
if(r.d.bt(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bt(u,s))a.preventDefault()},
hL:function(a){var u,t,s,r=this
H.k(a,"$iak")
if(!r.c9(a)){r.b6(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bo(a)
if(r.d.bt(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bt(u,s))a.preventDefault()}},
hZ:function(a){var u,t,s,r=this
H.k(a,"$iak")
r.b6(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bo(a)
if(r.d.bs(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bs(u,s))a.preventDefault()},
hJ:function(a){var u,t,s,r=this
H.k(a,"$iak")
if(!r.c9(a)){r.b6(a)
u=r.aN(a)
if(H.D(r.x)){t=r.bo(a)
if(r.d.bs(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aR(a)
if(r.c.bs(u,s))a.preventDefault()}},
i2:function(a){var u,t,s=this
H.k(a,"$ibt")
s.b6(a)
u=new V.a1((a&&C.r).gjl(a),C.r.gjm(a)).v(0,180)
if(H.D(s.x)){if(s.d.jV(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aR(a)
if(s.c.jW(u,t))a.preventDefault()},
i4:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aN(s.y)
t=s.aR(s.y)
s.d.hV(u,t,r)}},
im:function(a){var u,t=this
H.k(a,"$ib2")
t.a.focus()
t.f=!0
t.cn(a)
u=t.cj(a)
if(t.e.jT(u))a.preventDefault()},
ii:function(a){var u
H.k(a,"$ib2")
this.cn(a)
u=this.cj(a)
if(this.e.jR(u))a.preventDefault()},
ik:function(a){var u
H.k(a,"$ib2")
this.cn(a)
u=this.cj(a)
if(this.e.jS(u))a.preventDefault()},
sh0:function(a){this.z=H.i(a,"$ib",[[P.d7,P.K]],"$ab")}}
D.ch.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.P():u},
by:function(a){var u
H.k(a,"$iA")
u=this.r
if(u!=null)u.D(a)},
st:function(a,b){var u,t,s=this
if(b==null)b=new V.v(1,1,1)
if(!s.c.m(0,b)){u=s.c
s.c=b
t=new D.I("color",u,b,[V.v])
t.b=!0
s.by(t)}},
$iaj:1,
$icl:1}
D.aj.prototype={$icl:1}
D.e_.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.P():u},
by:function(a){var u=this.x
if(u!=null)u.D(a)},
dH:function(a){var u
H.k(a,"$iA")
u=this.y
if(u!=null)u.D(a)},
hU:function(){return this.dH(null)},
i6:function(a){var u,t,s
H.i(a,"$if",[D.aj],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.fR(s))return!1}return!0},
hv:function(a,b){var u,t,s,r,q,p,o,n=D.aj
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.gdG(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=H.k(b[q],"$iaj")
if(p instanceof D.ch)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.ci()
o.sao(null)
o.sbn(null)
o.c=null
o.d=0
p.r=o}H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bW([n])
n.b=!0
this.by(n)},
ia:function(a,b){var u,t,s,r=D.aj
H.i(b,"$if",[r],"$af")
for(u=b.gV(b),t=this.gdG();u.B();){s=u.gL(u)
C.a.R(this.e,s)
s.gu().R(0,t)}r=new D.bX([r])
r.b=!0
this.by(r)},
fR:function(a){var u=C.a.aJ(this.e,a)
return u},
sfj:function(a){this.e=H.i(a,"$ib",[D.ch],"$ab")},
sip:function(a){this.f=H.i(a,"$ib",[D.ed],"$ab")},
sfk:function(a){this.r=H.i(a,"$ib",[D.em],"$ab")},
$af:function(){return[D.aj]},
$aZ:function(){return[D.aj]}}
D.ed.prototype={$iaj:1,$icl:1}
D.em.prototype={$iaj:1,$icl:1}
V.v.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gk9()),t=C.c.p(this.b,b.geT()),s=C.c.p(this.c,b.gjc())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.v(u,t,s)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.ac.prototype={
eP:function(){var u=this
return new V.ac(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
p:function(a,b){var u=this,t=C.c.p(u.a,b.gk9()),s=C.c.p(u.b,b.geT()),r=C.c.p(u.c,b.gjc()),q=C.c.p(u.d,b.gkm(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ac(t,s,r,q)},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.h9.prototype={}
V.e6.prototype={
aj:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.E])
return t},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e6))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.E],o=V.cz(H.c([q.a,q.d,q.r],p),3,0),n=V.cz(H.c([q.b,q.e,q.x],p),3,0),m=V.cz(H.c([q.c,q.f,q.y],p),3,0)
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
V.ao.prototype={
aj:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.E])
return t},
cL:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.e(r)
q=a9.c
if(typeof q!=="number")return q.l()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.l()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.l()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.l()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.O().a)return V.bZ()
a6=1/a5
a7=-t
a8=-f
return V.bC((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
l:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.e(o)
n=b3.f
if(typeof n!=="number")return H.e(n)
m=b3.z
if(typeof m!=="number")return H.e(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.e(k)
j=b3.r
if(typeof j!=="number")return H.e(j)
i=b3.Q
if(typeof i!=="number")return H.e(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.l()
b=a9.f
if(typeof b!=="number")return b.l()
a=a9.r
if(typeof a!=="number")return a.l()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.l()
a2=a9.z
if(typeof a2!=="number")return a2.l()
a3=a9.Q
if(typeof a3!=="number")return a3.l()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bC(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
bT:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.e(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.N(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
cY:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.e(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.ah(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r,q,p=this,o=[P.E],n=V.cz(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cz(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cz(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cz(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.G("")}}
V.a6.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return new V.a6(s+r,u+t)},
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
return new V.a6(s-r,u-t)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.ah.prototype={
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return new V.ah(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
return new V.ah(q-p,u-t,s-r)},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.b_.prototype={
p:function(a,b){var u=this
return new V.b_(C.d.p(u.a,b.gkE(b)),C.d.p(u.b,b.gkF(b)),C.d.p(u.c,b.gkG(b)),C.d.p(u.d,b.gkD(b)))},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.d2.prototype={
gaL:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
m:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d2))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.a1.prototype={
cN:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gea(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.geb(b)
if(typeof t!=="number")return t.p()
return new V.a1(s,C.c.p(t,u))},
l:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.l()
u=this.b
if(typeof u!=="number")return u.l()
return new V.a1(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.mC
return u==null?$.mC=new V.a1(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.a1(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.N.prototype={
cN:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.e(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
return q*p+u*t+s*r},
bq:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.e(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=a.a
if(typeof s!=="number")return H.e(s)
r=this.a
if(typeof r!=="number")return r.l()
return new V.N(q*p-u*t,u*s-r*p,r*t-q*s)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return new V.N(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.N(-s,-u,-t)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.O().a)return V.ex()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.N(u/b,t/b,s/b)},
ev:function(){var u=this.a,t=$.O()
t.toString
if(typeof u!=="number")return H.e(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.e(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.e(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
m:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fR.prototype={
c_:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.pk(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gu:function(){var u=this.y
return u==null?this.y=D.P():u},
Y:function(a){var u=this.y
if(u!=null)u.D(a)},
sd0:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.I("wrap",u,b,[P.a8])
u.b=!0
this.Y(u)}},
scP:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c_(u)}s=new D.I("maximumLocation",s,t.b,[P.E])
s.b=!0
t.Y(s)}},
scQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c_(u)}s=new D.I("minimumLocation",s,t.c,[P.E])
s.b=!0
t.Y(s)}},
sar:function(a,b){var u,t=this
b=t.c_(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.I("location",u,b,[P.E])
u.b=!0
t.Y(u)}},
sew:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.E])
r.b=!0
s.Y(r)}},
sa5:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.I("velocity",t,a,[P.E])
t.b=!0
u.Y(t)}},
se7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.I("dampening",u,a,[P.E])
u.b=!0
this.Y(u)}},
aD:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sar(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa5(u)}}}
U.dK.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.P():u},
sZ:function(a,b){var u,t,s,r=this
if(b==null)b=V.bZ()
if(!J.Q(r.a,b)){u=r.a
r.a=b
t=new D.I("matrix",u,b,[V.ao])
t.b=!0
s=r.b
if(s!=null)s.D(t)}},
bV:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dK))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cR.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.P():u},
Y:function(a){var u
H.k(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
aG:function(){return this.Y(null)},
ht:function(a,b){var u,t,s,r,q,p,o,n=U.aw
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.gbB(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bW([n])
n.b=!0
this.Y(n)},
i8:function(a,b){var u,t,s=U.aw
H.i(b,"$if",[s],"$af")
for(u=b.gV(b),t=this.gbB();u.B();)u.gL(u).gu().R(0,t)
s=new D.bX([s])
s.b=!0
this.Y(s)},
bV:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.x(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.bV(0,b,c)
if(t!=null)u=u==null?t:t.l(0,u)}}s.f=u==null?V.bZ():u
r=s.e
if(r!=null)r.be(0)}return s.f},
m:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cR))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.aw]},
$aZ:function(){return[U.aw]},
$iaw:1}
U.aw.prototype={}
U.ew.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.P():u},
Y:function(a){var u
H.k(a,"$iA")
u=this.fx
if(u!=null)u.D(a)},
aG:function(){return this.Y(null)},
cr:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge9().h(0,s.gfl())
s.a.c.gbr().h(0,s.gfn())
s.a.c.gd_().h(0,s.gfp())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.h(0,s.ghf())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.ghh())
u=s.a.e
u.gd9(u).h(0,s.gfw())
s.a.e.gbr().h(0,s.gfu())
u=s.a.e
u.gec(u).h(0,s.gfs())
return!0},
aF:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.a1(u,t)},
fm:function(a){var u=this
a=H.r(H.k(a,"$iA"),"$iaZ")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fo:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iA"),"$iaZ")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.n(0,a.y)
u=new V.a1(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.n(0,a.y)
u=n.aF(new V.a1(t.a,t.b).l(0,2).v(0,u.gaL()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sa5(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sa5(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aF(new V.a1(s.a,s.b).l(0,2).v(0,u.gaL()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sar(0,-p*q+s)
n.b.sa5(0)
n.c.sa5(0)
t=t.n(0,a.z)
n.dx=n.aF(new V.a1(t.a,t.b).l(0,2).v(0,u.gaL()))}n.aG()},
fq:function(a){var u,t,s,r=this
H.k(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sa5(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sa5(-t*10*u)
r.aG()}},
hg:function(a){var u=this
if(H.r(H.k(a,"$iA"),"$ie2").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
hi:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iA"),"$iaZ")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aF(new V.a1(s.a,s.b).l(0,2).v(0,u.gaL()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sar(0,-p*q+s)
n.b.sa5(0)
n.c.sa5(0)
t=t.n(0,a.z)
n.dx=n.aF(new V.a1(t.a,t.b).l(0,2).v(0,u.gaL()))
n.aG()},
fz:function(a){var u=this
H.k(a,"$iA")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fv:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.k(a,"$iA"),"$ide")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.n(0,a.y)
u=new V.a1(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.n(0,a.y)
u=n.aF(new V.a1(t.a,t.b).l(0,2).v(0,u.gaL()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sa5(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sa5(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aF(new V.a1(s.a,s.b).l(0,2).v(0,u.gaL()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sar(0,-p*q+s)
n.b.sa5(0)
n.c.sa5(0)
t=t.n(0,a.z)
n.dx=n.aF(new V.a1(t.a,t.b).l(0,2).v(0,u.gaL()))}n.aG()},
ft:function(a){var u,t,s,r=this
H.k(a,"$iA")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sa5(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sa5(-t*10*u)
r.aG()}},
bV:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aD(0,u)
t.b.aD(0,u)
t.fr=V.mi(t.b.d).l(0,V.lj(t.c.d))}return t.fr},
$iaw:1}
M.dJ.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.P():u},
a1:function(a){var u
H.k(a,"$iA")
u=this.r
if(u!=null)u.D(a)},
bj:function(){return this.a1(null)},
ic:function(a,b){var u,t,s,r,q,p,o,n=M.aN
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bW([n])
n.b=!0
this.a1(n)},
ig:function(a,b){var u,t,s=M.aN
H.i(b,"$if",[s],"$af")
for(u=b.gV(b),t=this.ga6();u.B();)u.gL(u).gu().R(0,t)
s=new D.bX([s])
s.b=!0
this.a1(s)},
ab:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.x(u,0)]);u.B();){t=u.d
if(t!=null)t.ab(a)}s.f=!1},
$af:function(){return[M.aN]},
$aZ:function(){return[M.aN]},
$iaN:1}
M.dM.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.P():u},
a1:function(a){var u
H.k(a,"$iA")
u=this.r
if(u!=null)u.D(a)},
bj:function(){return this.a1(null)},
sb9:function(a){var u,t,s=this
if(a==null)a=new X.ho()
u=s.b
if(u!==a){if(u!=null)u.gu().R(0,s.ga6())
t=s.b
s.b=a
a.gu().h(0,s.ga6())
u=new D.I("camera",t,s.b,[X.cf])
u.b=!0
s.a1(u)}},
sbf:function(a,b){var u,t,s=this
if(b==null)b=X.l8(null)
u=s.c
if(u!==b){if(u!=null)u.gu().R(0,s.ga6())
t=s.c
s.c=b
b.gu().h(0,s.ga6())
u=new D.I("target",t,s.c,[X.d8])
u.b=!0
s.a1(u)}},
sa_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().R(0,t.ga6())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga6())
s=new D.I("technique",u,t.d,[O.c0])
s.b=!0
t.a1(s)}},
ab:function(a){var u=this
a.cT(u.d)
u.c.T(a)
u.b.T(a)
u.e.aD(0,a)
u.e.ab(a)
u.b.af(a)
u.c.toString
a.cS()},
$iaN:1}
M.dR.prototype={
a1:function(a){var u
H.k(a,"$iA")
u=this.y
if(u!=null)u.D(a)},
bj:function(){return this.a1(null)},
hD:function(a,b){var u,t,s,r,q,p,o,n=E.U
H.i(b,"$if",[n],"$af")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.ci()
o.sao(null)
o.sbn(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sao(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bW([n])
n.b=!0
this.a1(n)},
hF:function(a,b){var u,t,s=E.U
H.i(b,"$if",[s],"$af")
for(u=b.gV(b),t=this.ga6();u.B();)u.gL(u).gu().R(0,t)
s=new D.bX([s])
s.b=!0
this.a1(s)},
sb9:function(a){var u,t,s=this
if(a==null)a=X.mn(null)
u=s.b
if(u!==a){if(u!=null)u.gu().R(0,s.ga6())
t=s.b
s.b=a
a.gu().h(0,s.ga6())
u=new D.I("camera",t,s.b,[X.cf])
u.b=!0
s.a1(u)}},
sbf:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gu().R(0,t.ga6())
u=t.c
t.c=b
b.gu().h(0,t.ga6())
s=new D.I("target",u,t.c,[X.d8])
s.b=!0
t.a1(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.P():u},
ab:function(a){var u,t=this
a.cT(t.d)
t.c.T(a)
t.b.T(a)
for(u=t.e.a,u=new J.au(u,u.length,[H.x(u,0)]);u.B();)u.d.aD(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.x(u,0)]);u.B();)u.d.ab(a)
t.b.toString
a.cy.aW()
a.db.aW()
t.c.af(a)
a.cS()},
sfP:function(a,b){this.e=H.i(b,"$iZ",[E.U],"$aZ")},
$iaN:1}
M.aN.prototype={}
A.dB.prototype={}
A.fD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a5.prototype={
gag:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){return""+this.gag(this)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.a5))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.e5.prototype={
f8:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.c_("")
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
A.oB(c0,u)
A.oD(c0,u)
A.oC(c0,u)
A.oF(c0,u)
A.oG(c0,u)
A.oE(c0,u)
A.oH(c0,u)
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
b5.cJ(0,s.charCodeAt(0)==0?s:s,A.oA(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.I(0,"invViewMat"),"$iax")
if(t)b5.dy=H.r(b5.y.I(0,"objMat"),"$iax")
if(r)b5.fr=H.r(b5.y.I(0,"viewObjMat"),"$iax")
b5.fy=H.r(b5.y.I(0,"projViewObjMat"),"$iax")
if(c0.ry)b5.k1=H.r(b5.y.I(0,"txt2DMat"),"$idg")
if(c0.x1)b5.k2=H.r(b5.y.I(0,"txtCubeMat"),"$iax")
if(c0.x2)b5.k3=H.r(b5.y.I(0,"colorMat"),"$iax")
b5.sfK(H.c([],[A.ax]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.I(0,"bendMatCount"),"$iaW")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.t(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iax"))}}t=c0.a
if(t.a)b5.r2=H.r(b5.y.I(0,"emissionClr"),"$iX")
if(t.b)b5.rx=H.r(b5.y.I(0,"emissionTxt"),"$iaq")
t=c0.b
if(t.a)b5.x1=H.r(b5.y.I(0,"ambientClr"),"$iX")
if(t.b)b5.x2=H.r(b5.y.I(0,"ambientTxt"),"$iaq")
t=c0.c
if(t.a)b5.y2=H.r(b5.y.I(0,"diffuseClr"),"$iX")
if(t.b)b5.aT=H.r(b5.y.I(0,"diffuseTxt"),"$iaq")
t=c0.d
if(t.a)b5.ee=H.r(b5.y.I(0,"invDiffuseClr"),"$iX")
if(t.b)b5.ef=H.r(b5.y.I(0,"invDiffuseTxt"),"$iaq")
t=c0.e
s=t.a
if(s||t.b||!1){b5.ei=H.r(b5.y.I(0,"shininess"),"$iae")
if(s)b5.eg=H.r(b5.y.I(0,"specularClr"),"$iX")
if(t.b)b5.eh=H.r(b5.y.I(0,"specularTxt"),"$iaq")}if(c0.f.b)b5.ej=H.r(b5.y.I(0,"bumpTxt"),"$iaq")
if(c0.cy){b5.ek=H.r(b5.y.I(0,"envSampler"),"$ic2")
t=c0.r
if(t.a)b5.el=H.r(b5.y.I(0,"reflectClr"),"$iX")
if(t.b)b5.em=H.r(b5.y.I(0,"reflectTxt"),"$iaq")
t=c0.x
s=t.a
if(s||t.b||!1){b5.en=H.r(b5.y.I(0,"refraction"),"$iae")
if(s)b5.eo=H.r(b5.y.I(0,"refractClr"),"$iX")
if(t.b)b5.ep=H.r(b5.y.I(0,"refractTxt"),"$iaq")}}t=c0.y
if(t.a)b5.eq=H.r(b5.y.I(0,"alpha"),"$iae")
if(t.b)b5.er=H.r(b5.y.I(0,"alphaTxt"),"$iaq")
t=P.p
s=[t,A.aW]
b5.sfX(new H.a4(s))
b5.sfY(new H.a4([t,[P.b,A.cr]]))
b5.siq(new H.a4(s))
b5.sir(new H.a4([t,[P.b,A.cs]]))
b5.siL(new H.a4(s))
b5.siM(new H.a4([t,[P.b,A.ct]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cr],l=0;l<t.length;t.length===s||(0,H.y)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.l(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.A()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.t(b7+g+b8))
H.r(m,"$iX")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.t(b7+g+b8))
H.r(f,"$iX")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.t(b7+g+b8))
H.r(e,"$iX")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.t(b7+g+b8))
H.r(m,"$iX")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.t(b7+g+b8))
H.r(f,"$iX")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.t(b7+o+b8))
H.r(e,"$iaq")
a=e}else a=b6
C.a.h(h,new A.cr(b,c,d,m,f,a))}b5.cC.q(0,j,h)
q=b5.cB
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.t(b7+o+b8))
q.q(0,j,H.k(m,"$iaW"))}for(t=c0.Q,s=t.length,r=[A.cs],l=0;l<t.length;t.length===s||(0,H.y)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.l(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.t(b7+o+b8))
H.r(m,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.t(b7+o+b8))
H.r(f,"$iX")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.t(b7+o+b8))
H.r(e,"$iX")
if(typeof j!=="number")return j.A()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.t(b7+o+b8))
H.r(a0,"$idg")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.t(b7+o+b8))
H.r(a0,"$ic2")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.t(b7+o+b8))
H.r(a0,"$ic2")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.t(b7+o+b8))
H.r(a2,"$icq")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.t(b7+o+b8))
H.r(a0,"$iae")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.t(b7+o+b8))
H.r(a2,"$iae")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.t(b7+o+b8))
H.r(a5,"$iae")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cs(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cE.q(0,j,h)
q=b5.cD
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.t(b7+o+b8))
q.q(0,j,H.k(m,"$iaW"))}for(t=c0.ch,s=t.length,r=[A.ct],l=0;l<t.length;t.length===s||(0,H.y)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.l(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.t(b7+o+b8))
H.r(m,"$iX")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.t(b7+o+b8))
H.r(f,"$iX")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.t(b7+o+b8))
H.r(e,"$iX")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.t(b7+o+b8))
H.r(a0,"$iX")
if(typeof j!=="number")return j.A()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.t(b7+o+b8))
H.r(a2,"$iX")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.t(b7+o+b8))
H.r(a5,"$iX")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.t(b7+o+b8))
H.r(a9,"$iae")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.t(b7+o+b8))
H.r(b0,"$iae")
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
if(a2==null)H.z(P.t(b7+g+b8))
H.r(a2,"$icq")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.t(b7+g+b8))
H.r(a2,"$iae")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.t(b7+g+b8))
H.r(a5,"$iae")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.t(b7+g+b8))
H.r(a2,"$iae")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.t(b7+g+b8))
H.r(a5,"$iae")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.t(b7+g+b8))
H.r(a9,"$iae")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.t(b7+g+b8))
H.r(a2,"$iaq")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.t(b7+o+b8))
H.r(a2,"$iaq")
a3=a2}else a3=b6
C.a.h(h,new A.ct(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cG.q(0,j,h)
q=b5.cF
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.t(b7+o+b8))
q.q(0,j,H.k(m,"$iaW"))}}},
aw:function(a,b){if(b!=null&&b.d)a.eY(b)},
iF:function(a,b){if(b!=null&&b.d>=6)a.d6(b)},
sfK:function(a){this.r1=H.i(a,"$ib",[A.ax],"$ab")},
sfX:function(a){this.cB=H.i(a,"$iH",[P.p,A.aW],"$aH")},
sfY:function(a){this.cC=H.i(a,"$iH",[P.p,[P.b,A.cr]],"$aH")},
siq:function(a){this.cD=H.i(a,"$iH",[P.p,A.aW],"$aH")},
sir:function(a){this.cE=H.i(a,"$iH",[P.p,[P.b,A.cs]],"$aH")},
siL:function(a){this.cF=H.i(a,"$iH",[P.p,A.aW],"$aH")},
siM:function(a){this.cG=H.i(a,"$iH",[P.p,[P.b,A.ct]],"$aH")}}
A.aQ.prototype={
i:function(a){return"dirLight"+H.l(this.a)}}
A.aU.prototype={
i:function(a){return"pointLight"+H.l(this.a)}}
A.aV.prototype={
i:function(a){return"spotLight"+H.l(this.a)}}
A.hO.prototype={
i:function(a){return this.aT}}
A.cr.prototype={}
A.cs.prototype={}
A.ct.prototype={}
A.d3.prototype={
bY:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cJ:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dw(b,35633)
r.f=r.dw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.mU(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.t("Failed to link shader: "+H.l(s)))}r.iG()
r.iI()},
T:function(a){a.a.useProgram(this.r)
this.x.jp()},
dw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.mU(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.t("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
iG:function(){var u,t,s,r=this,q=H.c([],[A.dB]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dB(p,t.name,s))}r.x=new A.fD(q)},
iI:function(){var u,t,s,r=this,q=H.c([],[A.er]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.jk(t.type,t.size,t.name,s))}r.y=new A.jr(q)},
b2:function(a,b,c){var u=this.a
if(a===1)return new A.aW(u,b,c)
else return A.lA(u,this.r,b,a,c)},
fT:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.lA(u,this.r,b,a,c)},
fU:function(a,b,c){var u=this.a
if(a===1)return new A.c2(u,b,c)
else return A.lA(u,this.r,b,a,c)},
bI:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jk:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b2(b,c,d)
case 5121:return u.b2(b,c,d)
case 5122:return u.b2(b,c,d)
case 5123:return u.b2(b,c,d)
case 5124:return u.b2(b,c,d)
case 5125:return u.b2(b,c,d)
case 5126:return new A.ae(u.a,c,d)
case 35664:return new A.jn(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.cq(u.a,c,d)
case 35667:return new A.jo(u.a,c,d)
case 35668:return new A.jp(u.a,c,d)
case 35669:return new A.jq(u.a,c,d)
case 35674:return new A.js(u.a,c,d)
case 35675:return new A.dg(u.a,c,d)
case 35676:return new A.ax(u.a,c,d)
case 35678:return u.fT(b,c,d)
case 35680:return u.fU(b,c,d)
case 35670:throw H.h(u.bI("BOOL",c))
case 35671:throw H.h(u.bI("BOOL_VEC2",c))
case 35672:throw H.h(u.bI("BOOL_VEC3",c))
case 35673:throw H.h(u.bI("BOOL_VEC4",c))
default:throw H.h(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.ej.prototype={}
A.ek.prototype={}
A.er.prototype={}
A.jr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
I:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aW.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.jo.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.jp.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.jq.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sj0:function(a){H.i(a,"$ib",[P.p],"$ab")}}
A.ae.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.jn.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cq.prototype={
eW:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.cZ(this.a,this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.js.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.dg.prototype={
al:function(a){var u=new Float32Array(H.dt(H.i(a,"$ib",[P.E],"$ab")))
C.b.eQ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ax.prototype={
al:function(a){var u=new Float32Array(H.dt(H.i(a,"$ib",[P.E],"$ab")))
C.b.eR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.aq.prototype={
eY:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.c2.prototype={
d6:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kI.prototype={
$1:function(a){return 1},
$S:40}
F.ag.prototype={
fJ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.ex()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ev())return
return s.v(0,Math.sqrt(s.F(s)))},
fN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.N(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.F(r)))
r=t.n(0,q)
r=new V.N(r.a,r.b,r.c)
r=s.bq(r.v(0,Math.sqrt(r.F(r))))
return r.v(0,Math.sqrt(r.F(r)))},
cw:function(){var u,t=this
if(t.d!=null)return!0
u=t.fJ()
if(u==null){u=t.fN()
if(u==null)return!1}t.d=u
t.a.a.ah()
return!0},
fI:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.ex()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ev())return
return s.v(0,Math.sqrt(s.F(s)))},
fM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.e(k)
r=l-k
if(Math.abs(r-0)<$.O().a){l=d.n(0,g)
l=new V.N(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.e(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.e(k)
p=(l-k)/r
k=d.n(0,g)
l=k.a
if(typeof l!=="number")return l.l()
i=k.b
if(typeof i!=="number")return i.l()
k=k.c
if(typeof k!=="number")return k.l()
h=g.a
if(typeof h!=="number")return H.e(h)
f=g.b
if(typeof f!=="number")return H.e(f)
e=g.c
if(typeof e!=="number")return H.e(e)
e=new V.ah(l*p+h,i*p+f,k*p+e).n(0,j)
e=new V.N(e.a,e.b,e.c)
q=e.v(0,Math.sqrt(e.F(e)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.e(t)
u=u.a
if(typeof u!=="number")return H.e(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.F(l)))
l=o.bq(q)
l=l.v(0,Math.sqrt(l.F(l))).bq(o)
q=l.v(0,Math.sqrt(l.F(l)))}return q},
cu:function(){var u,t=this
if(t.e!=null)return!0
u=t.fI()
if(u==null){u=t.fM()
if(u==null)return!1}t.e=u
t.a.a.ah()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.e.at(J.aK(s.e),0)+", "+C.e.at(J.aK(t.b.e),0)+", "+C.e.at(J.aK(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.bg.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.e.at(J.aK(u.e),0)+", "+C.e.at(J.aK(this.b.e),0)},
N:function(){return this.G("")}}
F.bG.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.at(J.aK(u.e),0)},
N:function(){return this.G("")}}
F.eh.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.P():u},
b8:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.b8()||!1
if(!t.a.b8())u=!1
s=t.e
if(s!=null)s.be(0)
return u},
ct:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aO()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bP().a)!==0)++s
if((t&$.bO().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.cb().a)!==0)++s
if((t&$.dz().a)!==0)++s
if((t&$.dA().a)!==0)++s
if((t&$.cG().a)!==0)++s
if((t&$.bN().a)!==0)++s
r=a3.gd8(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.E
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dF])
for(n=0,m=0;m<s;++m){l=a3.j7(m)
k=l.gd8(l)
C.a.q(o,m,new Z.dF(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].jE(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.q(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.dt(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ce(new Z.ey(a0,f),o,a3)
e.sh9(H.c([],[Z.bV]))
if(a.b.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.aS()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bV(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.aS()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.aS()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bV(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.aS()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.aS()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.aS()
C.a.h(d,c.e)}b=Z.lC(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bV(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.w(s,"\n")},
ah:function(){var u=this.e
if(u!=null)u.D(null)},
$ipr:1}
F.iG.prototype={
cp:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ib",[F.ar],"$ab")
u=H.c([],[F.ag])
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
n=new F.ag()
m=s.a
if(m==null)H.z(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.z(P.t("May not create a face with vertices attached to different shapes."))
n.a=s
C.a.h(s.d.b,n)
n.b=p
C.a.h(p.d.c,n)
n.c=o
C.a.h(o.d.d,n)
C.a.h(n.a.a.d.b,n)
p=n.a.a.e
if(p!=null)p.D(null)
C.a.h(u,n)}}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.d(u,b)
return u[b]},
b8:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cw())s=!1
return s},
cv:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cu())s=!1
return s},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(a))
return C.a.w(r,"\n")},
N:function(){return this.G("")},
sh2:function(a){this.b=H.i(a,"$ib",[F.ag],"$ab")}}
F.iH.prototype={
j4:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ar],"$ab")
u=H.c([],[F.bg])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.d(a,q)
q=a[q]
if(r>=p)return H.d(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.nG(q,p))}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.d(u,b)
return u[b]},
i:function(a){return this.N()},
G:function(a){var u,t,s=H.c([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.w(s,"\n")},
N:function(){return this.G("")},
shb:function(a){this.b=H.i(a,"$ib",[F.bg],"$ab")}}
F.iI.prototype={
j5:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ar],"$ab")
u=H.c([],[F.bG])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.d(a,r)
q=a[r]
s.a.h(0,q)
p=new F.bG()
if(q.a==null)H.z(P.t("May not create a point with a vertex which is not attached to a shape."))
p.a=q
C.a.h(q.b.b,p)
C.a.h(p.a.a.b.b,p)
q=p.a.a.e
if(q!=null)q.D(null)
C.a.h(u,p)}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.d(u,b)
return u[b]},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(a))
return C.a.w(r,"\n")},
N:function(){return this.G("")},
scd:function(a){this.b=H.i(a,"$ib",[F.bG],"$ab")}}
F.ar.prototype={
jE:function(a){var u,t,s=this
if(a.m(0,$.aO())){u=s.f
t=[P.E]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.bP())){u=s.r
t=[P.E]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.bO())){u=s.x
t=[P.E]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.bQ())){u=s.y
t=[P.E]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.m(0,$.cb())){u=s.z
t=[P.E]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.dz())){u=s.Q
t=[P.E]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.m(0,$.dA())){u=s.Q
t=[P.E]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.cG()))return H.c([s.ch],[P.E])
else if(a.m(0,$.bN())){u=s.cx
t=[P.E]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.E])},
cw:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ex()
t.d.M(0,new F.jK(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.ah()
s=t.a.e
if(s!=null)s.be(0)}return!0},
cu:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.ex()
t.d.M(0,new F.jJ(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.ah()
s=t.a.e
if(s!=null)s.be(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.c([],[P.n])
C.a.h(q,C.e.at(J.aK(s.e),0))
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
t=C.a.w(q,", ")
return a+"{"+t+"}"},
N:function(){return this.G("")}}
F.jK.prototype={
$1:function(a){var u,t
H.k(a,"$iag")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:9}
F.jJ.prototype={
$1:function(a){var u,t
H.k(a,"$iag")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:9}
F.jD.prototype={
aS:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.ah()
return!0},
dW:function(a,b,c,d,e,f,g){var u=F.lB(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bJ:function(a,b,c,d,e,f){return this.dW(a,b,c,null,d,e,f)},
j6:function(a,b,c,d,e,f){return this.dW(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
j:function(a,b){var u=this.c
if(b>=u.length)return H.d(u,b)
return u[b]},
b8:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cw()
return!0},
cv:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cu()
return!0},
jd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r
this.aS()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.w(u,"\n")},
N:function(){return this.G("")},
sj1:function(a){this.c=H.i(a,"$ib",[F.ar],"$ab")}}
F.jE.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this,s=t.b.length
if(b.S(0,s))return C.a.j(t.b,b)
b=b.n(0,s)
u=t.c.length
if(b.S(0,u))return C.a.j(t.c,b)
b=b.n(0,u)
return C.a.j(t.d,b)},
M:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.ag]})
C.a.M(u.b,b)
C.a.M(u.c,new F.jF(u,b))
C.a.M(u.d,new F.jG(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(""))
return C.a.w(r,"\n")},
sh3:function(a){this.b=H.i(a,"$ib",[F.ag],"$ab")},
sh4:function(a){this.c=H.i(a,"$ib",[F.ag],"$ab")},
sh5:function(a){this.d=H.i(a,"$ib",[F.ag],"$ab")}}
F.jF.prototype={
$1:function(a){H.k(a,"$iag")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:9}
F.jG.prototype={
$1:function(a){var u
H.k(a,"$iag")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:9}
F.jH.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u=this.b.length
if(b.bg(0,u))return C.a.j(this.c,b.n(0,u))
else return C.a.j(this.b,b)},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(""))
return C.a.w(r,"\n")},
shc:function(a){this.b=H.i(a,"$ib",[F.bg],"$ab")},
shd:function(a){this.c=H.i(a,"$ib",[F.bg],"$ab")}}
F.jI.prototype={
gk:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].G(""))
return C.a.w(r,"\n")},
scd:function(a){this.b=H.i(a,"$ib",[F.bG],"$ab")}}
O.aM.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.P():u},
U:function(a){var u
H.k(a,"$iA")
u=this.fr
if(u!=null)u.D(a)},
bk:function(){return this.U(null)},
dN:function(a){H.k(a,"$iA")
this.a=null
this.U(a)},
iC:function(){return this.dN(null)},
hx:function(a,b){var u=V.ao
H.i(b,"$if",[u],"$af")
u=new D.bW([u])
u.b=!0
this.U(u)},
hz:function(a,b){var u=V.ao
H.i(b,"$if",[u],"$af")
u=new D.bX([u])
u.b=!0
this.U(u)},
sad:function(a){var u,t=this,s=t.ch
if(s!=a){if(s!=null)s.gu().R(0,t.gaE())
u=t.ch
t.ch=a
if(a!=null)a.gu().h(0,t.gaE())
s=new D.I("environment",u,t.ch,[T.db])
s.b=!0
t.U(s)}},
dt:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.a4([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=h.j(0,0)
h.q(0,0,r==null?1:r)}q=H.c([],[A.aQ])
h.M(0,new O.hS(j,q))
C.a.bX(q,new O.hT())
p=new H.a4([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){o=u[s]
r=o.gbp()
n=p.j(0,o.gbp())
p.q(0,r,n==null?1:n)}m=H.c([],[A.aU])
p.M(0,new O.hU(j,m))
C.a.bX(m,new O.hV())
l=new H.a4([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.y)(i),++s){o=i[s]
t=o.gbp()
r=l.j(0,o.gbp())
l.q(0,t,r==null?1:r)}k=H.c([],[A.aV])
l.M(0,new O.hW(j,k))
C.a.bX(k,new O.hX())
i=C.d.aa(j.e.a.length+3,4)
j.dy.e
return A.nN(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
an:function(a,b){H.i(a,"$ib",[T.d9],"$ab")
if(b!=null)if(!C.a.aJ(a,b)){b.sax(0,a.length)
C.a.h(a,b)}},
aD:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.au(u,u.length,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.jB
if(s==null)s=$.jB=new V.N(0,0,1)
t.a=s
r=$.jA
t.d=r==null?$.jA=new V.N(0,1,0):r
r=$.jz
t.e=r==null?$.jz=new V.N(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bT(s)
r=s.a
if(typeof r!=="number")return r.l()
p=s.b
if(typeof p!=="number")return p.l()
o=s.c
if(typeof o!=="number")return o.l()
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bT(t.d)
p=o.a
if(typeof p!=="number")return p.l()
r=o.b
if(typeof r!=="number")return r.l()
s=o.c
if(typeof s!=="number")return s.l()
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bT(t.e)
r=s.a
if(typeof r!=="number")return r.l()
p=s.b
if(typeof p!=="number")return p.l()
o=s.c
if(typeof o!=="number")return o.l()
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
cU:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dt()
u=H.k(b4.fr.j(0,b3.aT),"$ie5")
if(u==null){u=A.nM(b3,b4.a)
b4.cq(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.ed
b3=b5.e
if(!(b3 instanceof Z.ce))b3=b5.e=null
if(b3==null||!b3.d.m(0,s)){b3=t.k3
if(b3)b5.d.b8()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cv()
q.a.cv()
q=q.e
if(q!=null)q.be(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.jd()
p=p.e
if(p!=null)p.be(0)}n=b5.d.ct(new Z.dh(b4.a),s)
n.aK($.aO()).e=b2.a.Q.c
if(b3)n.aK($.bP()).e=b2.a.cx.c
if(r)n.aK($.bO()).e=b2.a.ch.c
if(t.r1)n.aK($.bQ()).e=b2.a.cy.c
if(q)n.aK($.cb()).e=b2.a.db.c
if(t.rx)n.aK($.bN()).e=b2.a.dx.c
b5.e=n}b3=T.d9
m=H.c([],[b3])
b2.a.T(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gZ(q)
r=r.dy
r.toString
r.al(q.aj(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gZ(q)
p=b4.dx
p=b4.cx=q.l(0,p.gZ(p))
q=p}r=r.fr
r.toString
r.al(q.aj(0,!0))}r=b2.a
q=b4.geG()
r=r.fy
r.toString
r.al(q.aj(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.al(C.l.aj(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.al(C.l.aj(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.al(C.l.aj(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bU(r.a,r.d,l)
for(r=[P.E],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$iao")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.dt(H.i(p.aj(0,!0),"$ib",r,"$ab")))
C.b.eR(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.W(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.an(m,b2.f.d)
r=b2.a
q=b2.f.d
r.aw(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.W(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.an(m,b2.r.d)
r=b2.a
q=b2.r.d
r.aw(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.W(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.an(m,b2.x.d)
r=b2.a
q=b2.x.d
r.aw(r.aT,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.ee
C.b.W(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.an(m,b2.y.d)
r=b2.a
q=b2.y.d
r.aw(r.ef,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.ei
C.b.ac(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.eg
C.b.W(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.an(m,b2.z.d)
r=b2.a
q=b2.z.d
r.aw(r.eh,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gZ(q)
q=P.p
h=new H.a4([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.y)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.q(0,0,e+1)
d=J.T(b2.a.cC.j(0,0),e)
o=i.bT(f.a)
c=o.a
if(typeof c!=="number")return c.l()
b=o.b
if(typeof b!=="number")return b.l()
a=o.c
if(typeof a!=="number")return a.l()
a=o.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.W(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.W(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.y)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cB.j(0,p)
C.b.bU(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gZ(q)
q=P.p
a0=new H.a4([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.E],g=0;g<q.length;q.length===p||(0,H.y)(q),++g){f=q[g]
a1=f.gbp()
e=a0.j(0,a1)
if(e==null)e=0
a0.q(0,a1,e+1)
d=J.T(b2.a.cE.j(0,a1),e)
a2=i.l(0,f.gZ(f))
b=f.gZ(f)
a=$.d0
b=b.cY(a==null?$.d0=new V.ah(0,0,0):a)
a=d.b
C.b.W(a.a,a.d,b.a,b.b,b.c)
b=$.d0
b=a2.cY(b==null?$.d0=new V.ah(0,0,0):b)
a=d.c
C.b.W(a.a,a.d,b.a,b.b,b.c)
b=f.gt(f)
a=d.e
C.b.W(a.a,a.d,b.a,b.b,b.c)
f.gaX()
b=a2.cL(0)
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
j=new Float32Array(H.dt(H.i(new V.e6(a,a3,a4,a5,a6,a7,a8,a9,b).aj(0,!0),"$ib",c,"$ab")))
C.b.eQ(b0.a,b0.d,!1,j)
f.gaX()
b=f.gaX()
H.i(m,"$ib",o,"$ab")
if(!C.a.aJ(m,b)){b.sax(0,m.length)
C.a.h(m,b)}b=f.gaX()
a=b.gcO(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gbi()
b=f.geZ()
a=d.x
a.toString
a3=b.gea(b)
a4=b.geb(b)
a5=b.gjo()
b=b.gjn()
C.b.cZ(a.a,a.d,a3,a4,a5,b)
b=f.gbi()
if(!C.a.aJ(m,b)){b.sax(0,m.length)
C.a.h(m,b)}b=f.gbi()
a=b.gcO(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.gjq()){b=f.gj8()
a=d.y
C.b.ac(a.a,a.d,b)
b=f.gj9()
a=d.z
C.b.ac(a.a,a.d,b)
b=f.gja()
a=d.Q
C.b.ac(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.y)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cD.j(0,p)
C.b.bU(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gZ(q)
q=P.p
b1=new H.a4([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.y)(q),++g){f=q[g]
a1=f.gbp()
e=b1.j(0,a1)
if(e==null)e=0
b1.q(0,a1,e+1)
d=J.T(b2.a.cG.j(0,a1),e)
o=f.gk_(f)
c=d.b
C.b.W(c.a,c.d,o.a,o.b,o.c)
o=f.gkp(f).kA()
c=d.c
C.b.W(c.a,c.d,o.a,o.b,o.c)
o=i.cY(f.gk_(f))
c=d.d
C.b.W(c.a,c.d,o.a,o.b,o.c)
o=f.gt(f)
c=d.e
C.b.W(c.a,c.d,o.a,o.b,o.c)
f.gaX()
o=f.gd_()
c=d.f
C.b.W(c.a,c.d,o.a,o.b,o.c)
o=f.gcW(f)
c=d.r
C.b.W(c.a,c.d,o.a,o.b,o.c)
o=f.gkB()
c=d.x
C.b.ac(c.a,c.d,o)
o=f.gkC()
c=d.y
C.b.ac(c.a,c.d,o)
f.gaX()
o=f.gaX()
H.i(m,"$ib",b3,"$ab")
if(!C.a.aJ(m,o)){o.sax(0,m.length)
C.a.h(m,o)}o=f.gaX()
c=o.gcO(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gbi()
o=f.geZ()
c=d.z
c.toString
b=o.gea(o)
a=o.geb(o)
a3=o.gjo()
o=o.gjn()
C.b.cZ(c.a,c.d,b,a,a3,o)
o=f.gbi()
if(!C.a.aJ(m,o)){o.sax(0,m.length)
C.a.h(m,o)}o=f.gbi()
c=o.gcO(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gkq()){o=f.gko()
c=d.Q
C.b.ac(c.a,c.d,o)
o=f.gkn()
c=d.ch
C.b.ac(c.a,c.d,o)}if(f.gjq()){o=f.gj8()
c=d.cx
C.b.ac(c.a,c.d,o)
o=f.gj9()
c=d.cy
C.b.ac(c.a,c.d,o)
o=f.gja()
c=d.db
C.b.ac(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.y)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cF.j(0,q)
C.b.bU(q.a,q.d,l)}}}if(t.f.b){b2.an(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.aw(b3.ej,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gZ(r).cL(0)}b3=b3.id
b3.toString
b3.al(r.aj(0,!0))}if(t.cy){b2.an(m,b2.ch)
b3=b2.a
r=b2.ch
b3.iF(b3.ek,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.el
C.b.W(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.an(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.aw(b3.em,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.en
C.b.ac(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.eo
C.b.W(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.an(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.aw(b3.ep,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.eq
C.b.ac(r.a,r.d,p)}if(b3.b){b2.an(m,b2.db.d)
r=b2.a
p=b2.db.d
r.aw(r.er,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].T(b4)
r=b5.e
r.T(b4)
r.ab(b4)
r.af(b4)
if(!q||b3.b||!1)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].af(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.cz()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dt().aT},
sfL:function(a){this.e=H.i(a,"$iZ",[V.ao],"$aZ")}}
O.hS.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aQ(a,C.d.aa(b+3,4)*4))},
$S:13}
O.hT.prototype={
$2:function(a,b){H.k(a,"$iaQ")
H.k(b,"$iaQ")
return J.kZ(a.a,b.a)},
$S:44}
O.hU.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aU(a,C.d.aa(b+3,4)*4))},
$S:13}
O.hV.prototype={
$2:function(a,b){H.k(a,"$iaU")
H.k(b,"$iaU")
return J.kZ(a.a,b.a)},
$S:45}
O.hW.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aV(a,C.d.aa(b+3,4)*4))},
$S:13}
O.hX.prototype={
$2:function(a,b){H.k(a,"$iaV")
H.k(b,"$iaV")
return J.kZ(a.a,b.a)},
$S:46}
O.hM.prototype={
ck:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.I(u.b,t,a,[P.E])
t.b=!0
u.a.U(t)}},
aP:function(){this.dc()
this.ck(1)},
sag:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.ap(new A.a5(!1,u,!1))
t.ck(0)}else{t.ap(new A.a5(!0,u,!1))
t.ck(b>=1?1:b)}}}
O.cU.prototype={
U:function(a){return this.a.U(H.k(a,"$iA"))},
bk:function(){return this.U(null)},
aP:function(){},
ap:function(a){var u,t,s=this
if(!s.c.m(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aP()
u=s.a
u.a=null
u.U(null)}},
sai:function(a){var u,t=this,s=t.c
if(!s.b)t.ap(new A.a5(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gu().R(0,t.gaE())
u=t.d
t.d=a
a.gu().h(0,t.gaE())
s=new D.I(t.b+".texture2D",u,t.d,[T.da])
s.b=!0
t.a.U(s)}}}
O.hN.prototype={}
O.bh.prototype={
b5:function(a){var u,t,s=this
if(!s.f.m(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.v])
t.b=!0
s.a.U(t)}},
aP:function(){this.dc()
this.b5(new V.v(1,1,1))},
st:function(a,b){this.ap(new A.a5(!0,this.c.b,!1))
this.b5(b)}}
O.hP.prototype={}
O.hQ.prototype={
aP:function(){var u,t=this
t.dd()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1,[P.E])
u.b=!0
t.a.U(u)}}}
O.hR.prototype={
cl:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.E])
t.b=!0
u.a.U(t)}},
aP:function(){this.dd()
this.cl(100)},
sa9:function(a){var u,t=this
if(a==null)a=100
u=t.c.b
if(a<=0){t.ap(new A.a5(!1,u,!1))
t.cl(0)}else{t.ap(new A.a5(!0,u,!1))
t.cl(a)}}}
O.ei.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.P():u},
U:function(a){var u
H.k(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
bk:function(){return this.U(null)},
cU:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$iej")
if(u==null){t=a.a
u=new A.ej(t,n)
u.bY(t,n)
u.cJ(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$iae")
u.ch=H.r(u.y.j(0,"ratio"),"$iae")
u.cx=H.r(u.y.j(0,"boxClr"),"$iX")
u.cy=H.r(u.y.j(0,"boxTxt"),"$ic2")
u.db=H.r(u.y.j(0,"viewMat"),"$iax")
a.cq(u)}o.a=u}if(b.e==null){t=b.d.ct(new Z.dh(a.a),$.aO())
t.aK($.aO()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.T(a)}t=a.d
s=a.c
r=o.a
r.T(a)
q=o.b
p=r.Q
C.b.ac(p.a,p.d,q)
q=r.ch
C.b.ac(q.a,q.d,t/s)
s=o.c
r.cy.d6(s)
s=o.d
t=r.cx
C.b.W(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gZ(s).cL(0)
r=r.db
r.toString
r.al(s.aj(0,!0))
t=b.e
if(t instanceof Z.ce){t.T(a)
t.ab(a)
t.af(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cz()
t=o.c
if(t!=null)t.af(a)}}
O.iM.prototype={
gu:function(){var u=this.c
return u==null?this.c=D.P():u},
aD:function(a,b){},
cU:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=H.k(a.fr.j(0,q),"$iek")
if(u==null){p=a.a
u=new A.ek(p,q)
u.bY(p,q)
u.cJ(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"color"),"$icq")
u.ch=H.r(u.y.j(0,"projViewObjMat"),"$iax")
a.cq(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.ce)?b.e=null:t)==null){p=b.d.ct(new Z.dh(a.a),$.aO())
t=p.aK($.aO())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.T(a)
t=r.b
p.Q.eW(t)
t=a.geG()
p=p.ch
p.toString
p.al(t.aj(0,!0))
t=b.e
t.T(a)
t.ab(a)
t.af(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.cz()}}
O.c0.prototype={}
T.dH.prototype={
bz:function(a){H.k(a,"$iA")},
fA:function(){return this.bz(null)},
cr:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.ge9().h(0,t.ghk())
t.b.c.gbr().h(0,t.ghm())
t.b.c.gd_().h(0,t.gho())
u=t.b.e
u.gd9(u).h(0,t.giX())
t.b.e.gbr().h(0,t.giV())
u=t.b.e
u.gec(u).h(0,t.giT())
return!0},
hl:function(a){if(!H.r(H.k(a,"$iA"),"$iaZ").x.b.m(0,this.c))return
this.ch=this.Q=!0},
hn:function(a){var u,t=this
H.k(a,"$iA")
if(!t.Q)return
if(t.ch){H.r(a,"$iaZ")
u=a.d.n(0,a.y)
u=new V.a1(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
hp:function(a){var u=this
H.k(a,"$iA")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dK(a)},
iY:function(a){H.k(a,"$iA")
this.ch=this.Q=!0},
iW:function(a){var u,t=this
H.k(a,"$iA")
if(!t.Q)return
if(t.ch){H.r(a,"$ide")
u=a.d.n(0,a.y)
u=new V.a1(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
iU:function(a){var u=this
H.k(a,"$iA")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dK(a)},
dK:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.r(a,"$iaZ")
u=new D.A()
u.b=!0
t=k.f
if(t!=null)t.D(u)
u=a.d
t=u.a
s=a.c
if(typeof t!=="number")return t.v()
r=t/s.c
u=u.b
if(typeof u!=="number")return u.v()
q=u/s.d
s=k.a
u=k.d
t=u.r
if(typeof t!=="number")return t.n()
p=C.k.bc(r*(t-1))
t=u.x
if(typeof t!=="number")return t.n()
o=C.k.bc(q*(t-1))
s=s.a
t=u.x
if(typeof t!=="number")return t.n()
n=t-1-o
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
m=new Uint8Array(4)
s.readPixels(p,n,1,1,6408,5121,m)
s.bindFramebuffer(36160,null)
new T.j9(m,1,1).h7()
u=m.length
if(0>=u)return H.d(m,0)
t=m[0]/255
if(1>=u)return H.d(m,1)
s=m[1]/255
if(2>=u)return H.d(m,2)
l=m[2]/255
if(3>=u)return H.d(m,3)
u=m[3]/255
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(l<0)l=0
else if(l>1)l=1
if(u<0)u=0
else if(u>1)u=1
u=new T.dI(new V.a1(r,q),new V.ac(t,s,l,u))
u.b=!0
l=k.x
if(l!=null)l.D(u)}}
T.dI.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.d9.prototype={}
T.da.prototype={}
T.j5.prototype={
dQ:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cA()}},
sax:function(a,b){this.a=b},
gu:function(){var u=this.y
return u==null?this.y=D.P():u},
T:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
af:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.db.prototype={
sax:function(a,b){this.a=b},
gu:function(){var u=this.e
return u==null?this.e=D.P():u},
T:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
af:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.j6.prototype={
ay:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.ma(a)
t=T.lw(q)
r=W.o
W.a7(u,"load",H.m(new T.j8(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
b4:function(a,b,c,d,e,f){var u,t=W.ma(c);++this.d
u=W.o
W.a7(t,"load",H.m(new T.j7(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dP:function(a,b,c){var u,t,s,r
b=V.dy(b)
u=V.dy(a.width)
t=V.dy(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l3()
s.width=u
s.height=t
r=H.k(C.h.eS(s,"2d"),"$icK")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oU(r.getImageData(0,0,s.width,s.height))}}}
T.j8.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.dP(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.b.eJ(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dQ();++u.e},
$S:14}
T.j7.prototype={
$1:function(a){var u=this,t=u.a,s=t.dP(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.eJ(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cA()}++t.e},
$S:14}
T.j9.prototype={
h7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.de()
u=C.d.aa(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.d(s,i)
g=s[i]
if(h<0||h>=r)return H.d(s,h)
s[i]=s[h]
s[h]=g}}}}}
V.fz.prototype={
bd:function(a,b){return!0},
i:function(a){return"all"},
$ibB:1}
V.bB.prototype={}
V.e4.prototype={
bd:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].bd(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saO:function(a){this.a=H.i(a,"$ib",[V.bB],"$ab")},
$ibB:1}
V.bE.prototype={
bd:function(a,b){return!this.f2(0,b)},
i:function(a){return"!["+this.da(0)+"]"}}
V.iF.prototype={
fe:function(a){var u,t
if(a.a.length<=0)throw H.h(P.t("May not create a SetMatcher with zero characters."))
u=new H.a4([P.p,P.a8])
for(t=new H.e1(a,a.gk(a),[H.aI(a,"C",0)]);t.B();)u.q(0,t.d,!0)
this.siE(u)},
bd:function(a,b){return this.a.e5(0,b)},
i:function(a){var u=this.a
return P.lv(new H.e0(u,[H.x(u,0)]))},
siE:function(a){this.a=H.i(a,"$iH",[P.p,P.a8],"$aH")},
$ibB:1}
V.d4.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.df(this.a.P(0,b))
r.saO(H.c([],[V.bB]))
r.c=!1
C.a.h(this.c,r)
return r},
js:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.bd(0,a))return r}return},
i:function(a){return this.b},
siZ:function(a){this.c=H.i(a,"$ib",[V.df],"$ab")}}
V.eq.prototype={
i:function(a){var u=H.n4(this.b,"\n","\\n"),t=H.n4(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.dd.prototype={
i:function(a){return this.b},
siz:function(a){var u=P.n
this.c=H.i(a,"$iH",[u,u],"$aH")}}
V.je.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d4(this,b)
u.siZ(H.c([],[V.df]))
u.d=null
this.a.q(0,b,u)}return u},
bu:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.dd(a)
u=P.n
t.siz(new H.a4([u,u]))
this.b.q(0,a,t)}return t},
ki:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.eq]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.b1(a,s)
q=l.js(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.lv(j)
throw H.h(P.t("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.lv(j)
o=l.d
n=o.c.j(0,p)
t=new V.eq(n==null?o.b:n,p,s)}++s}}},
siN:function(a){this.a=H.i(a,"$iH",[P.n,V.d4],"$aH")},
siS:function(a){this.b=H.i(a,"$iH",[P.n,V.dd],"$aH")}}
V.df.prototype={
i:function(a){return this.b.b+": "+this.da(0)}}
X.fI.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.P():u},
a2:function(a){var u=this.fr
if(u!=null)u.D(a)},
sav:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.I("width",u,b,[P.p])
u.b=!0
t.a2(u)}},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.I("height",u,b,[P.p])
u.b=!0
t.a2(u)}},
T:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.l()
i.sav(0,C.c.a4(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.l()
i.saq(0,C.c.a4(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.a2(u.getParameter(3379))
p=V.dy(s)
o=V.dy(r)
q=V.dy(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.b.eK(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lw(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dQ()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cA()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.c.a4(s*i.a)
r=t.d
a.d=C.c.a4(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.e(k)
j=C.c.a4(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.e(l)
u.viewport(j,C.c.a4(t*l),C.c.a4(s*k),C.c.a4(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
af:function(a){a.a.bindFramebuffer(36160,null)}}
X.cf.prototype={$icl:1}
X.hj.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.P():u},
a2:function(a){var u=this.x
if(u!=null)u.D(a)},
T:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.e(u)
q=C.c.a4(r*u)
r=s.b
if(typeof t!=="number")return H.e(t)
p=C.c.a4(r*t)
r=C.c.a4(s.c*u)
a.c=r
s=C.c.a4(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
af:function(a){}}
X.ho.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.P():u},
T:function(a){var u
a.cy.bQ(V.bZ())
u=V.bZ()
a.db.bQ(u)},
af:function(a){a.cy.aW()
a.db.aW()},
$icl:1,
$icf:1}
X.ec.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.P():u},
a2:function(a){var u
H.k(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
fE:function(){return this.a2(null)},
T:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bC(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bQ(k)
r=$.mo
if(r==null){r=V.lm()
q=V.jC()
p=$.mD
r=V.li(r,q,p==null?$.mD=new V.N(0,0,-1):p)
$.mo=r
u=r}else u=r
r=s.b
if(r!=null){t=r.bV(0,a,s)
if(t!=null)u=t.l(0,u)}a.db.bQ(u)},
af:function(a){a.cy.aW()
a.db.aW()},
$icl:1,
$icf:1}
X.d8.prototype={}
V.kS.prototype={
$1:function(a){var u
H.k(a,"$ibq")
u=C.c.eN(this.a.gju(),2)
if(u!=="0.00")P.fw(u+" fps")},
$S:48}
V.iJ.prototype={
ff:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a7(q,"scroll",H.m(new V.iL(o),{func:1,ret:-1,args:[r]}),!1,r)},
dV:function(a,b){var u,t,s,r,q
a=H.a2(C.d.je(a,0,4))
u=P.mI(C.p,b,C.j,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.nn()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
b7:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.n],"$ab")
this.iH()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ki(C.a.jC(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.ph(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
t.appendChild(l)}else{k=P.mI(C.p,n,C.j,!1)
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
iH:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.je()
t=P.n
u.siN(new H.a4([t,V.d4]))
u.siS(new H.a4([t,V.dd]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).w(0,p)
s=V.ap(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).w(0,p)
s=new V.bE()
r=[V.bB]
s.saO(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.ab("*"))
C.a.h(s.a,t)
t=u.P(0,p).w(0,"BoldEnd")
s=V.ap(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).w(0,o)
s=V.ap(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).w(0,o)
s=new V.bE()
s.saO(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.ab("_"))
C.a.h(s.a,t)
t=u.P(0,o).w(0,n)
s=V.ap(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).w(0,m)
s=V.ap(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).w(0,m)
s=new V.bE()
s.saO(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.ab("`"))
C.a.h(s.a,t)
t=u.P(0,m).w(0,"CodeEnd")
s=V.ap(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).w(0,l)
s=V.ap(new H.ab("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).w(0,k)
s=V.ap(new H.ab("|"))
C.a.h(t.a,s)
s=u.P(0,l).w(0,j)
t=V.ap(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).w(0,l)
t=new V.bE()
t.saO(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.ab("|]"))
C.a.h(t.a,s)
s=u.P(0,k).w(0,j)
t=V.ap(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).w(0,k)
t=new V.bE()
t.saO(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.ab("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).w(0,i).a,new V.fz())
s=u.P(0,i).w(0,i)
t=new V.bE()
t.saO(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.ab("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bu(p)
s=u.P(0,n)
s.d=s.a.bu(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bu(m)
s=u.P(0,j)
s.d=s.a.bu("Link")
s=u.P(0,i)
s.d=s.a.bu(i)
this.b=u}}
V.iL.prototype={
$1:function(a){P.ly(C.i,new V.iK(this.a))},
$S:14}
V.iK.prototype={
$0:function(){var u=C.c.a4(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
Q.hk.prototype={
gu:function(){var u=this.d
return u==null?this.d=D.P():u}}
Q.q.prototype={
gaz:function(){var u=this.a
if(u>=1)if(u<=8){u=this.b
u=u>=1&&u<=8}else u=!1
else u=!1
return u},
gax:function(a){return this.gaz()?(this.a-1)*8+(this.b-1):-1},
i:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.q))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.a0.prototype={
i:function(a){var u=this,t=u.d,s=t!=null?", "+t.i(0)+" => "+H.l(u.e):""
return u.a+", "+u.b.i(0)+" => "+u.c.i(0)+s}}
Q.iQ.prototype={
fg:function(){this.sfV(P.nL(64,new Q.iR($.aa().a),!1,P.p))
this.c=null},
e6:function(){var u,t,s,r=Q.mw()
for(u=0;u<64;++u){t=r.a
s=this.a
if(u>=s.length)return H.d(s,u);(t&&C.a).q(t,u,s[u])}return r},
E:function(a){var u,t
if(!a.gaz())return $.kY()
u=a.gax(a)
t=this.a
if(u<0||u>=t.length)return H.d(t,u)
return new Q.B(t[u])},
C:function(a,b){var u
if(!a.gaz())return!1
u=this.a;(u&&C.a).q(u,a.gax(a),b.a)
return!0},
cH:function(a){var u,t,s=a.a,r=$.kX(),q=r.a
if(typeof s!=="number")return s.A()
if(typeof q!=="number")return H.e(q)
u=new Q.B((s&q)>>>0)
for(t=0;s=this.a,t<s.length;++t){s=s[t]
q=r.a
if(typeof s!=="number")return s.A()
if(typeof q!=="number")return H.e(q)
if(new Q.B((s&q)>>>0).m(0,u))return Q.mg(t)}return new Q.q(0,0)},
dX:function(a){var u=this,t=a.b,s=u.E(t),r=a.d,q=r!=null?u.E(r):null,p=$.aa()
u.C(t,p)
t=q!=null
if(t)u.C(r,p)
r=$.c9()
p=s.a
r=r.a
if(typeof p!=="number")return p.X()
if(typeof r!=="number")return H.e(r)
u.C(a.c,new Q.B((p|r)>>>0))
if(t&&a.e!=null){t=q.a
if(typeof t!=="number")return t.X()
u.C(a.e,new Q.B((t|r)>>>0))}},
ji:function(a){if(this.eu(a)){if(!this.jw(a))return 2
return 1}return 0},
eu:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.bM(),f=a?$.af():$.bw()
g=g.a
f=f.a
if(typeof g!=="number")return g.X()
if(typeof f!=="number")return H.e(f)
u=$.b4().a
if(typeof u!=="number")return H.e(u)
t=h.cH(new Q.B((g|f|1&u)>>>0))
if(!t.gaz())return!1
s=a?-1:1
g=t.a
f=g+s
u=t.b
r=u+1
q=!a
p=$.cF()
o=[Q.B]
if(h.K(new Q.q(f,r),q,H.c([p],o)))return!0
n=u+-1
if(h.K(new Q.q(f,n),q,H.c([p],o)))return!0
f=g+2
p=$.cE()
if(h.K(new Q.q(f,r),q,H.c([p],o)))return!0
if(h.K(new Q.q(f,n),q,H.c([p],o)))return!0
f=g+1
m=u+2
if(h.K(new Q.q(f,m),q,H.c([p],o)))return!0
l=g+-1
if(h.K(new Q.q(l,m),q,H.c([p],o)))return!0
m=g+-2
if(h.K(new Q.q(m,r),q,H.c([p],o)))return!0
if(h.K(new Q.q(m,n),q,H.c([p],o)))return!0
m=u+-2
if(h.K(new Q.q(f,m),q,H.c([p],o)))return!0
if(h.K(new Q.q(l,m),q,H.c([p],o)))return!0
for(p=g>=1,m=g<=8,k=1;k<8;++k){j=u+k
i=new Q.q(g,j)
if(h.K(i,q,H.c([$.b5(),$.aJ()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.aa().a))break}for(k=1;k<8;++k){j=u+-k
i=new Q.q(g,j)
if(h.K(i,q,H.c([$.b5(),$.aJ()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.aa().a))break}for(p=u>=1,m=u<=8,k=1;k<8;++k){j=g+k
i=new Q.q(j,u)
if(h.K(i,q,H.c([$.b5(),$.aJ()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.aa().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.q(j,u)
if(h.K(i,q,H.c([$.b5(),$.aJ()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.aa().a))break}for(k=1;k<8;++k){p=g+k
m=u+k
i=new Q.q(p,m)
if(h.K(i,q,H.c([$.bv(),$.aJ()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.aa().a))break}for(k=1;k<8;++k){p=g+k
m=u+-k
i=new Q.q(p,m)
if(h.K(i,q,H.c([$.bv(),$.aJ()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.aa().a))break}for(k=1;k<8;++k){p=g+-k
m=u+k
i=new Q.q(p,m)
if(h.K(i,q,H.c([$.bv(),$.aJ()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.aa().a))break}for(k=1;k<8;++k){p=-k
m=g+p
p=u+p
i=new Q.q(m,p)
if(h.K(i,q,H.c([$.bv(),$.aJ()],o)))return!0
if(!(m>=1&&m<=8&&p>=1&&p<=8&&h.E(i).a==$.aa().a))break}p=$.bM()
if(h.K(new Q.q(f,r),q,H.c([p],o)))return!0
if(h.K(new Q.q(f,u),q,H.c([p],o)))return!0
if(h.K(new Q.q(f,n),q,H.c([p],o)))return!0
if(h.K(new Q.q(g,n),q,H.c([p],o)))return!0
if(h.K(new Q.q(l,n),q,H.c([p],o)))return!0
if(h.K(new Q.q(l,u),q,H.c([p],o)))return!0
if(h.K(new Q.q(l,r),q,H.c([p],o)))return!0
if(h.K(new Q.q(g,r),q,H.c([p],o)))return!0
return!1},
K:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[Q.B],"$ab")
if(a.gaz()){u=this.E(a)
u.toString
t=$.af()
s=u.a
t=t.a
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.e(t)
if((s&t)>>>0===t===b){t=$.ca()
r=t.a
if(typeof r!=="number")return H.e(r)
q=new Q.B((s&r)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.d(c,p)
s=c[p].a
r=t.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.e(r)
if(q.m(0,new Q.B((s&r)>>>0)))return!0}}}return!1},
jw:function(a){var u,t,s
for(u=0;u<64;++u){t=this.a
if(u>=t.length)return H.d(t,u)
t=t[u]
if(t!=$.aa().a){s=$.af().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
s=(t&s)>>>0===s===a
t=s}else t=!1
if(t)if(this.jx(Q.mg(u)))return!0}return!1},
jx:function(a){var u={}
u.a=!1
this.cI(new Q.iT(u),a)
return u.a},
jB:function(a){var u={}
u.a=!1
this.cI(new Q.iU(u,a),a.b)
return u.a},
cI:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b="Pawn en passent ",a={func:1,ret:-1,args:[Q.a0]}
H.m(a0,a)
if(!a1.gaz())return
u=d.E(a1)
t=new Q.iS(d,u,a0)
s=u.a
r=$.ca().a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.e(r)
q=new Q.B((s&r)>>>0)
if(q.m(0,$.cF())){H.m(t,a)
u=d.E(a1)
u.toString
a=$.af()
s=u.a
a=a.a
if(typeof s!=="number")return s.A()
if(typeof a!=="number")return H.e(a)
p=(s&a)>>>0===a
r=$.c9().a
if(typeof r!=="number")return H.e(r)
o=p?-1:1
n=a1.a
m=n+o
l=a1.b
k=new Q.q(m,l)
j=d.E(k).a
i=$.aa().a
if(j==i){t.$1(new Q.a0("Pawn move to "+k.i(0),a1,k,c,c))
if((s&r)>>>0!==r){k=new Q.q(n+(o+o),l)
if(d.E(k).a==i)t.$1(new Q.a0("Pawn move to "+k.i(0),a1,k,c,c))}}s=l+-1
k=new Q.q(m,s)
h=d.E(k)
j=h.a
g=$.kY().a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.A()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a0("Pawn take "+h.gaV()+" at "+k.i(0),a1,k,k,c));++l
k=new Q.q(m,l)
h=d.E(k)
j=h.a
if(j!=g)if(j!=i){if(typeof j!=="number")return j.A()
j=(j&a)>>>0===a!==p}else j=!1
else j=!1
if(j)t.$1(new Q.a0("Pawn take "+h.gaV()+" at "+k.i(0),a1,k,k,c))
if(d.c!=null)j=n===(p?4:5)
else j=!1
if(j){k=new Q.q(m,s)
if(k.gaz()&&d.E(k).a==i){f=new Q.q(n,s)
h=d.E(f)
j=h.a
if(j!=i){if(typeof j!=="number")return j.A()
j=(j&a)>>>0===a!==p}else j=!1
if(j){e=d.c.E(new Q.q(n+(o+o),s))
s=e.a
if(typeof s!=="number")return s.A()
if((s&r)>>>0!==r&&e.d3(h))t.$1(new Q.a0(b+h.gaV()+" at "+k.i(0),a1,k,f,c))}}k=new Q.q(m,l)
if(k.gaz()&&d.E(k).a==i){f=new Q.q(n,l)
h=d.E(f)
s=h.a
if(s!=i){if(typeof s!=="number")return s.A()
a=(s&a)>>>0===a!==p}else a=!1
if(a){e=d.c.E(new Q.q(n+(o+o),l))
a=e.a
if(typeof a!=="number")return a.A()
if((a&r)>>>0!==r&&e.d3(h))t.$1(new Q.a0(b+h.gaV()+" at "+k.i(0),a1,k,f,c))}}}}else if(q.m(0,$.b5()))d.iD(t,a1)
else if(q.m(0,$.cE())){H.m(t,a)
d.a3(t,a1,2,1)
d.a3(t,a1,2,-1)
d.a3(t,a1,1,2)
d.a3(t,a1,-1,2)
d.a3(t,a1,-2,1)
d.a3(t,a1,-2,-1)
d.a3(t,a1,1,-2)
d.a3(t,a1,-1,-2)}else if(q.m(0,$.bv())){H.m(t,a)
d.a8(t,a1,1,1)
d.a8(t,a1,1,-1)
d.a8(t,a1,-1,-1)
d.a8(t,a1,-1,1)}else if(q.m(0,$.aJ())){H.m(t,a)
d.a8(t,a1,1,1)
d.a8(t,a1,1,0)
d.a8(t,a1,1,-1)
d.a8(t,a1,0,-1)
d.a8(t,a1,-1,-1)
d.a8(t,a1,-1,0)
d.a8(t,a1,-1,1)
d.a8(t,a1,0,1)}else if(q.m(0,$.bM()))d.ha(t,a1)},
a3:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,{func:1,ret:-1,args:[Q.a0]})
u=new Q.q(b.a+c,b.b+d)
if(!u.gaz())return!0
t=this.E(b)
s=this.E(u)
r=s.a
if(r==$.aa().a){a.$1(new Q.a0(t.gaV()+" move to "+u.i(0),b,u,null,null))
return!1}t.toString
q=$.af()
p=t.a
q=q.a
if(typeof p!=="number")return p.A()
if(typeof q!=="number")return H.e(q)
if(typeof r!=="number")return r.A()
r=(r&q)>>>0===q!==((p&q)>>>0===q)
if(r)a.$1(new Q.a0(t.gaV()+" take "+s.gaV()+" at "+u.i(0),b,u,u,null))
return!0},
a8:function(a,b,c,d){var u
H.m(a,{func:1,ret:-1,args:[Q.a0]})
for(u=1;u<8;++u)if(this.a3(a,b,c*u,d*u))return},
iD:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(a,{func:1,ret:-1,args:[Q.a0]})
u=m.E(b)
u.toString
t=$.af()
s=u.a
t=t.a
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.e(t)
r=$.c9().a
if(typeof r!=="number")return H.e(r)
m.a8(a,b,0,1)
m.a8(a,b,0,-1)
m.a8(a,b,1,0)
m.a8(a,b,-1,0)
if((s&r)>>>0!==r){q=new Q.q((s&t)>>>0===t?8:1,4)
t=m.E(q).a
s=$.ca().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
if(new Q.B((t&s)>>>0).m(0,$.bM())&&(t&r)>>>0!==r){t=b.b
p=t>4?-1:1
n=t+p
t=b.a
while(!0){if(!(n!==4)){o=!0
break}if(m.E(new Q.q(t,n)).a!=$.aa().a){o=!1
break}n+=p}if(o){t=q.a
s=4-p-p
a.$1(new Q.a0("Rook castles with King",b,new Q.q(t,s+p),q,new Q.q(t,s)))}}}},
ha:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this
H.m(a,{func:1,ret:-1,args:[Q.a0]})
u=j.E(b)
u.toString
t=$.c9()
s=u.a
t=t.a
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.e(t)
j.a3(a,b,1,1)
j.a3(a,b,1,0)
j.a3(a,b,1,-1)
j.a3(a,b,0,-1)
j.a3(a,b,-1,-1)
j.a3(a,b,-1,0)
j.a3(a,b,-1,1)
j.a3(a,b,0,1)
if((s&t)>>>0!==t)for(t=b.a,s=b.b,r=1;r<=8;r+=7){q=new Q.q(t,r)
p=j.E(q).a
o=$.ca().a
if(typeof p!=="number")return p.A()
if(typeof o!=="number")return H.e(o)
if(new Q.B((p&o)>>>0).m(0,$.b5())){o=$.c9().a
if(typeof o!=="number")return H.e(o)
o=(p&o)>>>0!==o
p=o}else p=!1
if(p){n=s>r?-1:1
l=s+n
k=l
while(!0){if(!(k!==r)){m=!0
break}if(j.E(new Q.q(t,k)).a!=$.aa().a){m=!1
break}k+=n}if(m){p=l+n
a.$1(new Q.a0("King castles with Rook",b,new Q.q(t,p),q,new Q.q(t,p-n)))}}}},
i:function(a){var u,t,s,r,q,p,o,n,m=0
while(!0){if(!(m<64)){u=!1
break}t=this.a
if(m>=t.length)return H.d(t,m)
t=t[m]
s=$.c9().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
if((t&s)>>>0===s){u=!0
break}++m}r=new Q.j0()
r.d=!1
t=new Array(64)
t.fixed$length=Array
r.sfS(0,H.c(t,[P.n]))
r.d=!0
for(q=0;q<8;q=p)for(p=q+1,t=(p-1)*8,o=0;o<8;o=n){n=o+1
m=t+(n-1)
s=this.a
if(m<0||m>=s.length)return H.d(s,m)
r.eV(q,o,new Q.B(s[m]).eM(0,!1,u))}return r.i(0)},
sfV:function(a){this.a=H.i(a,"$ib",[P.p],"$ab")}}
Q.iR.prototype={
$1:function(a){return this.a},
$S:49}
Q.iT.prototype={
$1:function(a){this.a.a=!0},
$S:15}
Q.iU.prototype={
$1:function(a){var u,t=this.a
if(t.a)return
u=this.b
if(a.b.m(0,u.b)&&a.c.m(0,u.c)&&J.Q(a.d,u.d)&&J.Q(a.e,u.e))t.a=!0},
$S:15}
Q.iS.prototype={
$1:function(a){var u,t,s=this.a.e6()
s.dX(a)
u=this.b
u.toString
t=$.af()
u=u.a
t=t.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.e(t)
if(!s.eu((u&t)>>>0===t))this.c.$1(a)},
$S:15}
Q.j0.prototype={
dC:function(a,b){var u=a*8+b
if(u>=64)return-1
return u},
eV:function(a,b,c){var u=this.dC(a,b)
if(u<0)return
C.a.q(this.c,u,c)},
hj:function(){var u,t,s,r,q=this.c,p=q.length
if(p<=0)return 0
u=q[0]
t=(u==null?"":u).length
for(s=1;s<p;++s){u=q[s]
r=(u==null?"":u).length
if(r>t)t=r}return t},
i:function(a){var u,t,s,r,q,p,o,n=this,m=H.c([],[P.n]),l=n.hj()
if(n.d){u=C.e.bP("",2+C.d.aa(l-1,2))
for(t=l+1,s=0;s<8;){++s
u+=C.e.bP(" "+s,t)}C.a.h(m,C.e.kj(u))
r=2}else r=0
for(q=0;q<8;++q){u=n.d?C.e.bP(""+(q+1),r):""
for(s=0;s<8;++s){if(n.d||s!==0)u+="|"
p=n.dC(q,s)
t=n.c
if(p<0||p>=t.length)return H.d(t,p)
o=t[p]
u+=C.e.bP(o==null?"":o,l)}C.a.h(m,n.d?u+"|":u)}return C.a.w(m,"\n")},
sfS:function(a,b){this.c=H.i(b,"$ib",[P.n],"$ab")}}
Q.B.prototype={
X:function(a,b){var u=this.a,t=b.a
if(typeof u!=="number")return u.X()
if(typeof t!=="number")return H.e(t)
return new Q.B((u|t)>>>0)},
d3:function(a){var u,t=this.a,s=$.kX().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
u=a.a
if(typeof u!=="number")return u.A()
return(t&s)>>>0===(u&s)>>>0},
m:function(a,b){var u
if(b==null)return!1
if(!(b instanceof Q.B))return!1
u=b.a
return this.a==u},
gjf:function(){var u,t=this.a,s=$.lV().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
u=new Q.B((t&s)>>>0)
if(u.m(0,$.bw()))return"B"
if(u.m(0,$.af()))return"W"
return" "},
gjZ:function(){var u,t=this.a,s=$.ca().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
u=new Q.B((t&s)>>>0)
if(u.m(0,$.cF()))return"P"
if(u.m(0,$.b5()))return"R"
if(u.m(0,$.cE()))return"H"
if(u.m(0,$.bv()))return"B"
if(u.m(0,$.aJ()))return"Q"
if(u.m(0,$.bM()))return"K"
return" "},
gjG:function(){var u=this.a,t=$.b4().a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.e(t)
t=(u&t)>>>0
if(t===$.aa().a)return" "
return""+t},
gaV:function(){var u,t=this.a,s=$.ca().a
if(typeof t!=="number")return t.A()
if(typeof s!=="number")return H.e(s)
u=new Q.B((t&s)>>>0)
if(u.m(0,$.cF()))return"Pawn"
if(u.m(0,$.b5()))return"Rook"
if(u.m(0,$.cE()))return"Knight"
if(u.m(0,$.bv()))return"Bishop"
if(u.m(0,$.aJ()))return"Queen"
if(u.m(0,$.bM()))return"King"
return"Empty"},
eM:function(a,b,c){var u,t,s=this,r=s.a
if(r==$.aa().a)return""
if(c){u=$.c9().a
if(typeof r!=="number")return r.A()
if(typeof u!=="number")return H.e(u)
t=(r&u)>>>0===u?"+":" "}else t=""
t=t+s.gjf()+s.gjZ()
return b?t+s.gjG():t},
i:function(a){return this.eM(a,!0,!0)}}
S.fK.prototype={
f3:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.fM==null){$.fM=E.a3(q,!0,q,"color bishop shape",q,q)
$.l1=E.a3(q,!0,q,"pick bishop shape",q,q)
O.aT("./resources/bishop.obj",a.f).au(new S.fN(),q)}u=this.k3
t=u?"white":"black"
s=t+(" bishop "+d)
t=$.bv()
u=u?$.af():$.bw()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.e(u)
r=$.b4().a
if(typeof r!=="number")return H.e(r)
this.b3(s,new Q.B((t|u|d&r)>>>0),$.fM,$.l1)}}
S.fN.prototype={
$1:function(a){H.k(a,"$iU")
$.fM.sa0(0,a.c)
$.l1.sa0(0,a.c)},
$S:3}
S.dD.prototype={
f4:function(a,b){var u,t,s,r,q,p,o,n,m,l=this,k=null
l.sio(H.c([],[S.d_]))
l.siR(H.c([],[S.dc]))
l.sdE(H.c([],[Q.a0]))
l.k4=S.nO(a)
l.a="board"
l.r1=!1
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=S.o9(a,l,(u+t)%2===0,new Q.q(u,t))
r=l.id;(r&&C.a).h(r,s)
r=l.y
q=H.x(r,0)
H.F(s,q)
p=[q]
if(H.D(r.aQ(H.c([s],p)))){o=r.a
n=o.length
C.a.h(o,s)
q=H.i(H.c([s],p),"$if",[q],"$af")
r=r.c
if(r!=null)r.$2(n,q)}}for(u=1;u<=8;++u){r=S.mm(a,l,!0,u,0,0.7)
q=l.go;(q&&C.a).h(q,r)
q=l.y
p=H.x(q,0)
H.F(r,p)
o=[p]
if(H.D(q.aQ(H.c([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$if",[p],"$af")
r=q.c
if(r!=null)r.$2(n,p)}r=S.mm(a,l,!1,u,0,0.7)
q=l.go;(q&&C.a).h(q,r)
q=l.y
p=H.x(q,0)
H.F(r,p)
o=[p]
if(H.D(q.aQ(H.c([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$if",[p],"$af")
r=q.c
if(r!=null)r.$2(n,p)}}l.a7(0,S.iy(a,l,!0,1,0,0.7))
l.a7(0,S.iy(a,l,!0,2,0,0.7))
l.a7(0,S.iy(a,l,!1,1,0,0.7))
l.a7(0,S.iy(a,l,!1,2,0,0.7))
l.a7(0,S.hz(a,l,!0,1,0,0.7))
l.a7(0,S.hz(a,l,!0,2,3.141592653589793,0.7))
l.a7(0,S.hz(a,l,!1,1,0,0.7))
l.a7(0,S.hz(a,l,!1,2,3.141592653589793,0.7))
l.a7(0,S.fL(a,l,!0,1,-1.5707963267948966,0.8))
l.a7(0,S.fL(a,l,!0,2,1.5707963267948966,0.8))
l.a7(0,S.fL(a,l,!1,1,-1.5707963267948966,0.8))
l.a7(0,S.fL(a,l,!1,2,1.5707963267948966,0.8))
l.a7(0,S.ms(a,l,!0,1,0,1))
l.a7(0,S.ms(a,l,!1,1,0,1))
l.a7(0,S.me(a,l,!0,1.5707963267948966,0.9))
l.a7(0,S.me(a,l,!1,1.5707963267948966,0.9))
r=E.a3(k,!0,k,"",k,k)
l.k3=r
l.y.h(0,r)
l.k3.y.h(0,S.h4(a,l,0,0,0,0))
l.k3.y.h(0,S.h4(a,l,8,0,1.5707963267948966,1))
l.k3.y.h(0,S.h4(a,l,8,8,3.141592653589793,2))
l.k3.y.h(0,S.h4(a,l,0,8,4.71238898038469,3))
r=F.oW(30)
q=l.k4.db
q=E.a3(k,!0,U.bS(V.e7(0,-0.5,0).l(0,V.mi(-1.5707963267948966)).l(0,V.lk(12,12,12,1))),"",r,q)
l.k2=q
l.y.h(0,q)
q=l.fy
r=q.d
if(r==null)r=q.d=D.P()
r.h(0,l.ghO())
l.d5(q.c)},
a7:function(a,b){var u=this.go;(u&&C.a).h(u,b)
this.y.h(0,b)},
jX:function(a){var u,t,s,r,q,p=this
for(u=p.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(J.Q(r.ry.b,a)){p.dL(r.fy)
return}}for(u=p.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){q=u[s]
if(J.Q(q.r1.b,a)){p.dL(q.fy)
return}}},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
for(u=j.k1,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.c.m(0,a)||J.Q(r.d,a)){u=j.fy
H.k(r,"$ia0")
q=u.c.E(r.b)
q.toString
t=$.af()
p=q.a
t=t.a
if(typeof p!=="number")return p.A()
if(typeof t!=="number")return H.e(t)
if((p&t)>>>0===t!==u.a)H.z(P.t("may not make a move movement out-of-turn"))
if(!u.c.jB(r))H.z(P.t("not a valid move: "+J.aK(r)))
t=u.c
o=t.e6()
o.c=t
u.c=o
o.dX(r)
t=!u.a
u.a=t
u.c.ji(t)
u=u.d
if(u!=null)u.D(null)
u=j.k1;(u&&C.a).sk(u,0)
return}}u=j.fy
n=u.c.E(a)
t=n.a
if(t!=$.aa().a){p=$.af().a
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.e(p)
p=(t&p)>>>0===p!==u.a}else p=!0
if(p)return
q=j.es(n)
m=q!=null&&H.D(q.r1)
j.e0()
j.e1()
if(!m){q=j.es(n)
if(q!=null){q.sbW(0,!0)
l=j.eL(q.fy)
if(l!=null)l.sbW(0,!0)}if(t==$.kY().a)H.z(P.t("may not get movements for an out-of-bounds piece"))
p=$.af().a
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.e(p)
if((t&p)>>>0===p!==u.a)H.z(P.t("may not get movements out-of-turn"))
u=u.c
t=u.cH(n)
k=H.c([],[Q.a0])
u.cI(C.a.gj2(k),t)
j.sdE(k)
j.eX(j.k1)}},
hP:function(a){var u=this
H.k(a,"$iA")
u.e0()
u.e1()
u.d5(u.fy.c)},
es:function(a){var u,t,s,r,q,p=a.a,o=$.kX(),n=o.a
if(typeof p!=="number")return p.A()
if(typeof n!=="number")return H.e(n)
u=new Q.B((p&n)>>>0)
for(p=this.go,n=p.length,t=0;t<p.length;p.length===n||(0,H.y)(p),++t){s=p[t]
r=s.k4.a
q=o.a
if(typeof r!=="number")return r.A()
if(typeof q!=="number")return H.e(q)
if(new Q.B((r&q)>>>0).m(0,u))return s}return},
jY:function(a){var u,t,s,r
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(J.Q(r.fy,a))return r}return},
eL:function(a){var u,t,s,r
for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.fy.m(0,a))return r}return},
e0:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(!1!==r.r2){r.r1=r.r2=!1
r.ak()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){q=u[s]
if(!1!==q.k3){q.k2=q.k3=!1
q.ak()}}},
e1:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(!1!==r.r1){r.r2=r.r1=!1
r.ak()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){q=u[s]
if(!1!==q.k2){q.k3=q.k2=!1
q.ak()}}},
sd7:function(a){var u,t,s,r,q,p,o=this
if(a!==o.r1){o.r1=a
u=o.k2.b=!a
o.k3.b=u
for(t=o.go,s=t.length,r=0;r<s;++r){q=t[r]
if(a!==q.rx){q.rx=a
q.x1.b=u
q.x2.b=a}}for(t=o.id,s=t.length,r=0;r<s;++r){p=t[r]
if(a!==p.k4){p.k4=a
p.r2.b=u
p.rx.b=a}}}},
d5:function(a){var u,t,s,r,q,p
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=a.cH(r.k4)
if(!J.Q(r.fy,q)){r.fy=q
r.dT()}p=q.a
if(p>=1)if(p<=8){p=q.b
p=p>=1&&p<=8}else p=!1
else p=!1
r.b=p}},
eX:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[Q.a0],"$ab")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
r=this.eL(s.c)
if(!0!==r.k3){r.k3=!0
r.k2=!1
r.ak()}q=s.d
if(q!=null){p=this.jY(q)
if(!0!==p.r2){p.r2=!0
p.r1=!1
p.ak()}}}},
sio:function(a){this.go=H.i(a,"$ib",[S.d_],"$ab")},
siR:function(a){this.id=H.i(a,"$ib",[S.dc],"$ab")},
sdE:function(a){this.k1=H.i(a,"$ib",[Q.a0],"$ab")}}
S.h3.prototype={
f5:function(a,b,c,d,e,f){var u,t=this,s=null
if($.h5==null){$.h5=E.a3(s,!0,s,"edge shape",s,s)
O.aT("./resources/edge.obj",a.f).au(new S.h6(),s)}t.sbO(U.bS(V.e7(c-4,0,d-4).l(0,V.lj(e))))
t.a="edge"
t.y.h(0,$.h5)
u=b.k4.cy
if(f>=u.length)return H.d(u,f)
t.sa_(u[f])}}
S.h6.prototype={
$1:function(a){H.k(a,"$iU")
$.h5.sa0(0,a.c)},
$S:3}
S.kT.prototype={
$1:function(a){var u,t
H.k(a,"$iA")
u=this.a
u.sd7(!0)
t=this.b
t.ab(this.c)
u.sd7(!1)
t.cV()},
$S:6}
S.kU.prototype={
$1:function(a){this.a.jX(H.r(H.k(a,"$iA"),"$idI").d.eP())},
$S:6}
S.hv.prototype={
f6:function(a,b,c,d,e){var u,t,s,r,q=null
if($.hw==null){$.hw=E.a3(q,!0,q,"color king shape",q,q)
$.lg=E.a3(q,!0,q,"pick king shape",q,q)
O.aT("./resources/king.obj",a.f).au(new S.hx(),q)}u=this.k3
t=(u?"white":"black")+" king"
s=$.bM()
u=u?$.af():$.bw()
s=s.a
u=u.a
if(typeof s!=="number")return s.X()
if(typeof u!=="number")return H.e(u)
r=$.b4().a
if(typeof r!=="number")return H.e(r)
this.b3(t,new Q.B((s|u|1&r)>>>0),$.hw,$.lg)}}
S.hx.prototype={
$1:function(a){H.k(a,"$iU")
$.hw.sa0(0,a.c)
$.lg.sa0(0,a.c)},
$S:3}
S.hy.prototype={
f7:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.hA==null){$.hA=E.a3(q,!0,q,"color knight shape",q,q)
$.lh=E.a3(q,!0,q,"pick knight shape",q,q)
O.aT("./resources/knight.obj",a.f).au(new S.hB(),q)}u=this.k3
t=u?"white":"black"
s=t+(" knight "+d)
t=$.cE()
u=u?$.af():$.bw()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.e(u)
r=$.b4().a
if(typeof r!=="number")return H.e(r)
this.b3(s,new Q.B((t|u|d&r)>>>0),$.hA,$.lh)}}
S.hB.prototype={
$1:function(a){H.k(a,"$iU")
$.hA.sa0(0,a.c)
$.lh.sa0(0,a.c)},
$S:3}
S.hY.prototype={
f9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=34067,e=a.f,d=e.a,c=d.createTexture()
d.bindTexture(f,c)
d.texParameteri(f,10242,10497)
d.texParameteri(f,10243,10497)
d.texParameteri(f,10241,9729)
d.texParameteri(f,10240,9729)
d.bindTexture(f,null)
u=new T.db()
u.a=0
u.b=c
u.c=!1
u.d=0
e.b4(u,c,"resources/posx.png",34069,!1,!1)
e.b4(u,c,"resources/negx.png",34070,!1,!1)
e.b4(u,c,"resources/posy.png",34071,!1,!1)
e.b4(u,c,"resources/negy.png",34072,!1,!1)
e.b4(u,c,"resources/posz.png",34073,!1,!1)
e.b4(u,c,"resources/negz.png",34074,!1,!1)
g.a=u
t=D.m6()
t.st(0,new V.v(1,0.9,0.8))
t.b=U.bS(V.li(V.lm(),V.jC(),new V.N(0,-1,-0.25)))
s=D.m6()
s.st(0,new V.v(0,0.1,0.3))
s.b=U.bS(V.li(V.lm(),V.jC(),new V.N(0,1,0.25)))
r=new V.v(0.15,0.15,0.15)
e=O.an()
d=e.x
d.st(0,new V.v(0.6,0.6,0.6))
d=e.r
d.st(0,new V.v(0.4,0.4,0.4))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.b=e
e=O.an()
d=e.x
d.st(0,new V.v(0.2,0.2,0.2))
d=e.r
d.st(0,new V.v(0.1,0.1,0.1))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.c=e
e=O.an()
d=e.x
d.st(0,new V.v(0.6,0,0))
d=e.r
d.st(0,new V.v(0.8,0,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.d=e
e=O.an()
d=e.x
d.st(0,new V.v(0.2,0,0))
d=e.r
d.st(0,new V.v(0.6,0,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.e=e
e=O.an()
d=e.x
d.st(0,new V.v(0.5,0.5,0))
d=e.r
d.st(0,new V.v(0.7,0.7,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.f=e
e=O.an()
d=e.x
d.st(0,new V.v(0.1,0.1,0))
d=e.r
d.st(0,new V.v(0.5,0.5,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.r=e
q=new V.v(0.075,0.075,0.075)
e=O.an()
d=e.x
d.st(0,new V.v(0.6,0.6,0.6))
d=e.r
d.st(0,new V.v(0.4,0.4,0.4))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.x=e
e=O.an()
d=e.x
d.st(0,new V.v(0.2,0.2,0.2))
d=e.r
d.st(0,new V.v(0.1,0.1,0.1))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(60)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.y=e
e=O.an()
d=e.x
d.st(0,new V.v(0.6,0,0))
d=e.r
d.st(0,new V.v(0.8,0,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.z=e
e=O.an()
d=e.x
d.st(0,new V.v(0.2,0,0))
d=e.r
d.st(0,new V.v(0.6,0,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.Q=e
e=O.an()
d=e.x
d.st(0,new V.v(0.5,0.5,0))
d=e.r
d.st(0,new V.v(0.7,0.7,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.ch=e
e=O.an()
d=e.x
d.st(0,new V.v(0.1,0.1,0))
d=e.r
d.st(0,new V.v(0.5,0.5,0))
e.z.st(0,new V.v(1,1,1))
e.z.sa9(100)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.cx=e
g.sfZ(H.c([],[O.aM]))
for(p=0;p<4;++p){o=a.f.ay("resources/edge"+p+".png")
e=g.cy
d=O.an()
n=d.x
n.ap(new A.a5(!0,n.c.b,!1))
n.b5(new V.v(0.6,0.6,0.6))
d.x.sai(o)
n=d.r
n.ap(new A.a5(!0,n.c.b,!1))
n.b5(new V.v(0.4,0.4,0.4))
d.r.sai(o)
n=d.z
n.ap(new A.a5(!0,n.c.b,!1))
n.b5(new V.v(1,1,1))
d.z.sa9(80)
d.sad(g.a)
n=d.cx
n.ap(new A.a5(!0,n.c.b,!1))
n.b5(new V.v(0.1,0.1,0.1))
n=d.dx
n.toString
m=H.aI(n,"Z",0)
H.F(t,m)
l=[m]
if(H.D(n.aQ(H.c([t],l)))){k=n.a
j=k.length
C.a.h(k,t)
m=H.i(H.c([t],l),"$if",[m],"$af")
n=n.c
if(n!=null)n.$2(j,m)}n=d.dx
n.toString
m=H.aI(n,"Z",0)
H.F(s,m)
l=[m]
if(H.D(n.aQ(H.c([s],l)))){k=n.a
j=k.length
C.a.h(k,s)
m=H.i(H.c([s],l),"$if",[m],"$af")
n=n.c
if(n!=null)n.$2(j,m)}(e&&C.a).h(e,d)}i=a.f.ay("resources/tableColor.png")
h=a.f.ay("resources/tableSpec.png")
e=O.an()
d=e.x
d.st(0,new V.v(0.6,0.6,0.6))
e.x.sai(i)
d=e.r
d.st(0,new V.v(0.4,0.4,0.4))
e.r.sai(i)
e.z.st(0,new V.v(1,1,1))
e.z.sa9(80)
e.z.sai(h)
e.sad(g.a)
e.cx.sai(h)
e.Q.sai(a.f.ay("resources/tableNormal.png"))
e.dx.h(0,t)
e.dx.h(0,s)
g.db=e},
ex:function(a){var u=V.nv(a/96,1,1),t=new V.ac(u.a,u.b,u.c,1).eP()
u=new O.iM()
u.b=t
return u},
sfZ:function(a){this.cy=H.i(a,"$ib",[O.aM],"$ab")}}
S.ig.prototype={
fa:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.ih==null){$.ih=E.a3(q,!0,q,"color pawn shape",q,q)
$.ll=E.a3(q,!0,q,"pick pawn shape",q,q)
O.aT("./resources/pawn.obj",a.f).au(new S.ii(),q)}u=this.k3
t=u?"white":"black"
s=t+(" pawn "+d)
t=$.cF()
u=u?$.af():$.bw()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.e(u)
r=$.b4().a
if(typeof r!=="number")return H.e(r)
this.b3(s,new Q.B((t|u|d&r)>>>0),$.ih,$.ll)}}
S.ii.prototype={
$1:function(a){H.k(a,"$iU")
$.ih.sa0(0,a.c)
$.ll.sa0(0,a.c)},
$S:3}
S.d_.prototype={
b_:function(a,b,c,d){var u=this
u.fy=new Q.q(0,0)
u.k1=U.bS(null)
u.k4=$.aa()
u.rx=u.r2=u.r1=!1},
b3:function(a,b,c,d){var u=this,t=null,s=u.k2
u.ry=s.k4.ex(s.y.a.length)
u.k4=b
s=[E.U]
u.x1=E.a3(H.c([c],s),!0,t,"color "+a,t,t)
u.x2=E.a3(H.c([d],s),!1,t,"pick "+a,t,u.ry)
u.sbO(u.k1)
u.a=a
u.y.h(0,u.x1)
u.y.h(0,u.x2)
u.dT()
u.ak()},
sbW:function(a,b){var u=this
if(b!==u.r1){u.r1=b
u.r2=!1
u.ak()}},
dT:function(){var u=this,t=u.k1,s=u.fy,r=u.id
r=V.e7(s.a-4.5,0,s.b-4.5).l(0,V.lj(u.go)).l(0,V.lk(r,r,r,1))
t.sZ(0,r)
return r},
ak:function(){var u,t,s=this
if(s.k3)if(H.D(s.r1))s.sa_(s.k2.k4.d)
else{u=H.D(s.r2)
t=s.k2.k4
if(u)s.sa_(t.f)
else s.sa_(t.b)}else if(H.D(s.r1))s.sa_(s.k2.k4.e)
else{u=H.D(s.r2)
t=s.k2.k4
if(u)s.sa_(t.r)
else s.sa_(t.c)}}}
S.ip.prototype={
fb:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.iq==null){$.iq=E.a3(q,!0,q,"color queen shape",q,q)
$.ln=E.a3(q,!0,q,"pick queen shape",q,q)
O.aT("./resources/queen.obj",a.f).au(new S.ir(),q)}u=this.k3
t=u?"white":"black"
s=t+(" queen "+d)
t=$.aJ()
u=u?$.af():$.bw()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.e(u)
r=$.b4().a
if(typeof r!=="number")return H.e(r)
this.b3(s,new Q.B((t|u|d&r)>>>0),$.iq,$.ln)}}
S.ir.prototype={
$1:function(a){H.k(a,"$iU")
$.iq.sa0(0,a.c)
$.ln.sa0(0,a.c)},
$S:3}
S.ix.prototype={
fd:function(a,b,c,d,e,f){var u,t,s,r,q=null,p="rook shape"
if($.iz==null){$.iz=E.a3(q,!0,q,p,q,q)
$.ls=E.a3(q,!0,q,p,q,q)
O.aT("./resources/rook.obj",a.f).au(new S.iA(),q)}u=this.k3
t=u?"white":"black"
s=t+(" rook "+d)
t=$.b5()
u=u?$.af():$.bw()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.e(u)
r=$.b4().a
if(typeof r!=="number")return H.e(r)
this.b3(s,new Q.B((t|u|d&r)>>>0),$.iz,$.ls)}}
S.iA.prototype={
$1:function(a){H.k(a,"$iU")
$.iz.sa0(0,a.c)
$.ls.sa0(0,a.c)},
$S:3}
S.dc.prototype={
fh:function(a,b,c,d){var u,t,s,r,q=this,p=null
if($.jb==null){$.jb=E.a3(p,!0,p,"color tile shape",p,p)
$.lx=E.a3(p,!0,p,"pick tile shape",p,p)
O.aT("./resources/tile.obj",a.f).au(new S.jc(),p)}q.k4=q.k3=q.k2=!1
u=q.k1?"white":"black"
t=q.fy
s=t.a
t=t.b
r=u+(" tile "+s+" "+t)
u=q.id
q.r1=u.k4.ex(u.y.a.length)
u=[E.U]
q.r2=E.a3(H.c([$.jb],u),!0,p,"color "+r,p,p)
q.rx=E.a3(H.c([$.lx],u),!1,p,"pick "+r,p,q.r1)
q.sbO(U.bS(V.e7(s-4.5,0,t-4.5)))
q.a=r
q.y.h(0,q.r2)
q.y.h(0,q.rx)
q.ak()},
sbW:function(a,b){var u=this
if(b!==u.k2){u.k2=b
u.k3=!1
u.ak()}},
ak:function(){var u,t,s=this
if(s.k1)if(H.D(s.k2))s.sa_(s.id.k4.z)
else{u=H.D(s.k3)
t=s.id.k4
if(u)s.sa_(t.ch)
else s.sa_(t.x)}else if(H.D(s.k2))s.sa_(s.id.k4.Q)
else{u=H.D(s.k3)
t=s.id.k4
if(u)s.sa_(t.cx)
else s.sa_(t.y)}}}
S.jc.prototype={
$1:function(a){H.k(a,"$iU")
$.jb.sa0(0,a.c)
$.lx.sa0(0,a.c)},
$S:3}
L.kP.prototype={
$0:function(){return S.pg(this.a)},
$S:4};(function aliases(){var u=J.a.prototype
u.f0=u.i
u=J.dY.prototype
u.f1=u.i
u=O.cU.prototype
u.dc=u.aP
u=O.bh.prototype
u.dd=u.aP
u=V.e4.prototype
u.f2=u.bd
u.da=u.i})();(function installTearOffs(){var u=hunkHelpers._instance_1i,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J.aS.prototype,"gj2","h",36)
t(P,"oO","oe",12)
t(P,"oP","of",12)
t(P,"oQ","og",12)
s(P,"mT","oM",4)
r(P.eC.prototype,"ge3",0,1,null,["$2","$1"],["bb","e4"],28,0)
r(P.fb.prototype,"gjg",1,0,null,["$1","$0"],["aI","jh"],29,0)
var m
r(m=E.U.prototype,"geC",0,0,null,["$1","$0"],["eD","jN"],0,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","jO"],0,0)
r(m,"geA",0,0,null,["$1","$0"],["eB","jM"],0,0)
r(m,"gey",0,0,null,["$1","$0"],["ez","jJ"],0,0)
q(m,"gjH","jI",8)
q(m,"gjK","jL",8)
r(m=E.ep.prototype,"gdg",0,0,null,["$1","$0"],["di","dh"],0,0)
p(m,"gkb","cV",4)
o(m=X.ev.prototype,"ghM","hN",10)
o(m,"ghA","hB",10)
o(m,"ghG","hH",5)
o(m,"ghS","hT",21)
o(m,"ghQ","hR",21)
o(m,"ghW","hX",5)
o(m,"gi_","i0",5)
o(m,"ghK","hL",5)
o(m,"ghY","hZ",5)
o(m,"ghI","hJ",5)
o(m,"gi1","i2",32)
o(m,"gi3","i4",10)
o(m,"gil","im",11)
o(m,"gih","ii",11)
o(m,"gij","ik",11)
r(m=D.e_.prototype,"gdG",0,0,null,["$1","$0"],["dH","hU"],0,0)
o(m,"gi5","i6",52)
q(m,"ghu","hv",22)
q(m,"gi9","ia",22)
n(V.a1.prototype,"gk","cN",23)
n(V.N.prototype,"gk","cN",23)
r(m=U.cR.prototype,"gbB",0,0,null,["$1","$0"],["Y","aG"],0,0)
q(m,"ghs","ht",24)
q(m,"gi7","i8",24)
r(m=U.ew.prototype,"gbB",0,0,null,["$1","$0"],["Y","aG"],0,0)
o(m,"gfl","fm",1)
o(m,"gfn","fo",1)
o(m,"gfp","fq",1)
o(m,"ghf","hg",1)
o(m,"ghh","hi",1)
o(m,"gfw","fz",1)
o(m,"gfu","fv",1)
o(m,"gfs","ft",1)
r(m=M.dJ.prototype,"ga6",0,0,null,["$1","$0"],["a1","bj"],0,0)
q(m,"gib","ic",25)
q(m,"gie","ig",25)
r(M.dM.prototype,"ga6",0,0,null,["$1","$0"],["a1","bj"],0,0)
r(m=M.dR.prototype,"ga6",0,0,null,["$1","$0"],["a1","bj"],0,0)
q(m,"ghC","hD",8)
q(m,"ghE","hF",8)
r(m=O.aM.prototype,"gaE",0,0,null,["$1","$0"],["U","bk"],0,0)
r(m,"giB",0,0,null,["$1","$0"],["dN","iC"],0,0)
q(m,"ghw","hx",26)
q(m,"ghy","hz",26)
r(O.cU.prototype,"gaE",0,0,null,["$1","$0"],["U","bk"],0,0)
r(O.ei.prototype,"gaE",0,0,null,["$1","$0"],["U","bk"],0,0)
r(m=T.dH.prototype,"gdj",0,0,null,["$1","$0"],["bz","fA"],0,0)
o(m,"ghk","hl",1)
o(m,"ghm","hn",1)
o(m,"gho","hp",1)
o(m,"giX","iY",1)
o(m,"giV","iW",1)
o(m,"giT","iU",1)
r(X.ec.prototype,"gfD",0,0,null,["$1","$0"],["a2","fE"],0,0)
o(S.dD.prototype,"ghO","hP",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.le,J.a,J.au,P.eQ,P.f,H.e1,P.aR,H.cj,H.eu,H.jj,P.bT,H.cQ,H.cL,H.f7,P.am,H.hD,H.hE,H.hr,H.eR,H.jO,P.fe,P.ez,P.eC,P.bu,P.al,P.eA,P.d6,P.d7,P.iY,P.kr,P.bq,P.av,P.kw,P.kp,P.dj,P.kj,P.C,P.cM,P.kv,P.a8,P.aP,P.ai,P.bx,P.ie,P.en,P.eJ,P.hi,P.b,P.H,P.J,P.e3,P.a9,P.n,P.c_,W.fU,W.G,W.dT,P.fj,P.kk,O.Z,O.cV,E.fJ,E.U,E.it,E.ep,Z.ey,Z.dh,Z.ce,Z.bV,Z.bJ,D.fQ,D.ci,D.A,O.kB,O.dw,O.kC,X.dG,X.dZ,X.hu,X.hH,X.bD,X.i4,X.jf,X.ev,D.ch,D.aj,D.ed,D.em,V.v,V.ac,V.h9,V.e6,V.ao,V.a6,V.ah,V.b_,V.d2,V.a1,V.N,U.ew,M.dM,M.dR,M.aN,A.dB,A.fD,A.a5,A.aQ,A.aU,A.aV,A.hO,A.cr,A.cs,A.ct,A.er,A.jr,F.ag,F.bg,F.bG,F.eh,F.iG,F.iH,F.iI,F.ar,F.jD,F.jE,F.jH,F.jI,O.c0,O.cU,O.hP,T.dH,T.j6,T.j9,V.fz,V.bB,V.e4,V.iF,V.d4,V.eq,V.dd,V.je,X.d8,X.cf,X.ho,X.ec,V.iJ,Q.hk,Q.q,Q.a0,Q.iQ,Q.j0,Q.B,S.hY])
s(J.a,[J.hq,J.dX,J.dY,J.aS,J.bY,J.by,H.cX,W.j,W.fy,W.dC,W.cK,W.ba,W.bb,W.V,W.eD,W.fY,W.fZ,W.eF,W.dQ,W.eH,W.h0,W.o,W.eK,W.bd,W.hl,W.eM,W.bU,W.hG,W.hZ,W.eS,W.eT,W.bi,W.eU,W.eX,W.bj,W.f0,W.f2,W.bn,W.f3,W.bo,W.f8,W.b0,W.fc,W.jd,W.br,W.ff,W.jh,W.jw,W.fk,W.fm,W.fo,W.fq,W.fs,P.bA,P.eO,P.bF,P.eZ,P.im,P.f9,P.bI,P.fh,P.fE,P.eB,P.dE,P.dU,P.ee,P.ef,P.cp,P.eg,P.eo,P.es,P.f5])
s(J.dY,[J.ij,J.c3,J.bz])
t(J.ld,J.aS)
s(J.bY,[J.dW,J.dV])
t(P.hF,P.eQ)
s(P.hF,[H.et,W.jY,W.jX,P.he])
t(H.ab,H.et)
s(P.f,[H.h7,H.hK,H.jM])
s(P.aR,[H.hL,H.jN])
s(P.bT,[H.ib,H.ht,H.ju,H.jl,H.fP,H.iD,P.fC,P.cZ,P.b8,P.jv,P.jt,P.d5,P.fS,P.fX])
s(H.cL,[H.kW,H.j2,H.hs,H.kL,H.kM,H.kN,P.jU,P.jT,P.jV,P.jW,P.ku,P.kt,P.jR,P.jQ,P.kx,P.ky,P.kG,P.k2,P.ka,P.k6,P.k7,P.k8,P.k4,P.k9,P.k3,P.kd,P.ke,P.kc,P.kb,P.iZ,P.j_,P.kE,P.kn,P.km,P.ko,P.hJ,P.h1,P.h2,W.hm,W.hn,W.i0,W.i2,W.iC,W.iX,W.k1,P.kH,P.hf,P.hg,P.fG,E.iu,E.iv,E.iw,E.ja,D.ha,D.hb,F.kI,F.jK,F.jJ,F.jF,F.jG,O.hS,O.hT,O.hU,O.hV,O.hW,O.hX,T.j8,T.j7,V.kS,V.iL,V.iK,Q.iR,Q.iT,Q.iU,Q.iS,S.fN,S.h6,S.kT,S.kU,S.hx,S.hB,S.ii,S.ir,S.iA,S.jc,L.kP])
s(H.j2,[H.iV,H.cI])
t(H.jP,P.fC)
t(P.hI,P.am)
t(H.a4,P.hI)
t(H.e0,H.h7)
t(H.e9,H.cX)
s(H.e9,[H.dk,H.dm])
t(H.dl,H.dk)
t(H.cW,H.dl)
t(H.dn,H.dm)
t(H.ea,H.dn)
s(H.ea,[H.i5,H.i6,H.i7,H.i8,H.i9,H.eb,H.ia])
s(P.eC,[P.jS,P.fb])
t(P.kl,P.kw)
t(P.ki,P.kp)
t(P.dL,P.iY)
t(P.h8,P.cM)
t(P.jx,P.h8)
t(P.jy,P.dL)
s(P.ai,[P.E,P.p])
s(P.b8,[P.co,P.hp])
s(W.j,[W.M,W.hd,W.cS,W.bm,W.dp,W.bp,W.b1,W.dr,W.jL,W.di,P.fH,P.cd])
s(W.M,[W.ad,W.bR])
s(W.ad,[W.w,P.u])
s(W.w,[W.fA,W.fB,W.cg,W.dO,W.hh,W.cT,W.iE])
s(W.ba,[W.cO,W.fV,W.fW])
t(W.fT,W.bb)
t(W.cP,W.eD)
t(W.eG,W.eF)
t(W.dP,W.eG)
t(W.eI,W.eH)
t(W.h_,W.eI)
t(W.bc,W.dC)
t(W.eL,W.eK)
t(W.hc,W.eL)
t(W.eN,W.eM)
t(W.ck,W.eN)
t(W.be,W.cS)
s(W.o,[W.c1,W.bk])
s(W.c1,[W.bf,W.ak,W.b2])
t(W.i_,W.eS)
t(W.i1,W.eT)
t(W.eV,W.eU)
t(W.i3,W.eV)
t(W.eY,W.eX)
t(W.cY,W.eY)
t(W.f1,W.f0)
t(W.ik,W.f1)
t(W.iB,W.f2)
t(W.dq,W.dp)
t(W.iN,W.dq)
t(W.f4,W.f3)
t(W.iO,W.f4)
t(W.iW,W.f8)
t(W.fd,W.fc)
t(W.j3,W.fd)
t(W.ds,W.dr)
t(W.j4,W.ds)
t(W.fg,W.ff)
t(W.jg,W.fg)
t(W.bt,W.ak)
t(W.fl,W.fk)
t(W.jZ,W.fl)
t(W.eE,W.dQ)
t(W.fn,W.fm)
t(W.kf,W.fn)
t(W.fp,W.fo)
t(W.eW,W.fp)
t(W.fr,W.fq)
t(W.kq,W.fr)
t(W.ft,W.fs)
t(W.ks,W.ft)
t(W.k_,P.d6)
t(W.lD,W.k_)
t(W.k0,P.d7)
t(P.aA,P.kk)
t(P.eP,P.eO)
t(P.hC,P.eP)
t(P.f_,P.eZ)
t(P.ic,P.f_)
t(P.fa,P.f9)
t(P.j1,P.fa)
t(P.fi,P.fh)
t(P.ji,P.fi)
t(P.fF,P.eB)
t(P.id,P.cd)
t(P.f6,P.f5)
t(P.iP,P.f6)
s(E.fJ,[Z.dF,A.d3,T.d9])
s(D.A,[D.bW,D.bX,D.I,O.io,X.il,T.dI])
s(X.il,[X.e2,X.aZ,X.de])
s(O.Z,[D.e_,U.cR,M.dJ])
s(D.fQ,[U.fR,U.aw])
t(U.dK,U.aw)
s(A.d3,[A.e5,A.ej,A.ek])
s(A.er,[A.aW,A.jo,A.jp,A.jq,A.jm,A.ae,A.jn,A.X,A.cq,A.js,A.dg,A.ax,A.aq,A.c2])
s(O.c0,[O.aM,O.ei,O.iM])
s(O.cU,[O.hM,O.hN,O.bh])
s(O.bh,[O.hQ,O.hR])
s(T.d9,[T.da,T.db])
t(T.j5,T.da)
s(V.e4,[V.bE,V.df])
s(X.d8,[X.fI,X.hj])
s(E.U,[S.d_,S.dD,S.h3,S.dc])
s(S.d_,[S.fK,S.hv,S.hy,S.ig,S.ip,S.ix])
u(H.et,H.eu)
u(H.dk,P.C)
u(H.dl,H.cj)
u(H.dm,P.C)
u(H.dn,H.cj)
u(P.eQ,P.C)
u(W.eD,W.fU)
u(W.eF,P.C)
u(W.eG,W.G)
u(W.eH,P.C)
u(W.eI,W.G)
u(W.eK,P.C)
u(W.eL,W.G)
u(W.eM,P.C)
u(W.eN,W.G)
u(W.eS,P.am)
u(W.eT,P.am)
u(W.eU,P.C)
u(W.eV,W.G)
u(W.eX,P.C)
u(W.eY,W.G)
u(W.f0,P.C)
u(W.f1,W.G)
u(W.f2,P.am)
u(W.dp,P.C)
u(W.dq,W.G)
u(W.f3,P.C)
u(W.f4,W.G)
u(W.f8,P.am)
u(W.fc,P.C)
u(W.fd,W.G)
u(W.dr,P.C)
u(W.ds,W.G)
u(W.ff,P.C)
u(W.fg,W.G)
u(W.fk,P.C)
u(W.fl,W.G)
u(W.fm,P.C)
u(W.fn,W.G)
u(W.fo,P.C)
u(W.fp,W.G)
u(W.fq,P.C)
u(W.fr,W.G)
u(W.fs,P.C)
u(W.ft,W.G)
u(P.eO,P.C)
u(P.eP,W.G)
u(P.eZ,P.C)
u(P.f_,W.G)
u(P.f9,P.C)
u(P.fa,W.G)
u(P.fh,P.C)
u(P.fi,W.G)
u(P.eB,P.am)
u(P.f5,P.C)
u(P.f6,W.G)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.cg.prototype
C.D=W.be.prototype
C.E=J.a.prototype
C.a=J.aS.prototype
C.k=J.dV.prototype
C.d=J.dW.prototype
C.l=J.dX.prototype
C.c=J.bY.prototype
C.e=J.by.prototype
C.F=J.bz.prototype
C.G=W.cY.prototype
C.q=J.ij.prototype
C.b=P.cp.prototype
C.m=J.c3.prototype
C.r=W.bt.prototype
C.t=W.di.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.A=new P.ie()
C.j=new P.jx()
C.B=new P.jy()
C.f=new P.kl()
C.i=new P.bx(0)
C.C=new P.bx(5e6)
C.p=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])})()
var v={mangledGlobalNames:{p:"int",E:"double",ai:"num",n:"String",a8:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:P.J},{func:1,ret:P.J,args:[E.U]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ak]},{func:1,ret:P.J,args:[D.A]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.p,[P.f,E.U]]},{func:1,ret:P.J,args:[F.ag]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:P.J,args:[Q.a0]},{func:1,args:[,]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.n,args:[P.p]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[W.bf]},{func:1,ret:-1,args:[P.p,[P.f,D.aj]]},{func:1,ret:P.E},{func:1,ret:-1,args:[P.p,[P.f,U.aw]]},{func:1,ret:-1,args:[P.p,[P.f,M.aN]]},{func:1,ret:-1,args:[P.p,[P.f,V.ao]]},{func:1,ret:P.J,args:[W.bk]},{func:1,ret:-1,args:[P.K],opt:[P.a9]},{func:1,ret:-1,opt:[P.K]},{func:1,ret:P.J,args:[,],opt:[P.a9]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:-1,args:[W.bt]},{func:1,args:[P.n]},{func:1,args:[,P.n]},{func:1,ret:P.n,args:[W.be]},{func:1,ret:-1,args:[P.K]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[W.o]},{func:1,ret:P.E,args:[P.E]},{func:1,ret:P.a8,args:[W.M]},{func:1,ret:W.ad,args:[W.M]},{func:1,ret:P.J,args:[,P.a9]},{func:1,ret:P.p,args:[A.aQ,A.aQ]},{func:1,ret:P.p,args:[A.aU,A.aU]},{func:1,ret:P.p,args:[A.aV,A.aV]},{func:1,ret:P.J,args:[P.p,,]},{func:1,ret:P.J,args:[P.bq]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[,]},{func:1,ret:P.J,args:[P.ai]},{func:1,ret:P.a8,args:[[P.f,D.aj]]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b9=0
$.cJ=null
$.m2=null
$.lF=!1
$.mY=null
$.mR=null
$.n2=null
$.kJ=null
$.kO=null
$.lO=null
$.cv=null
$.du=null
$.dv=null
$.lG=!1
$.R=C.f
$.aG=[]
$.mN=null
$.mj=null
$.mp=null
$.d0=null
$.mu=null
$.mC=null
$.mE=null
$.jz=null
$.jA=null
$.jB=null
$.mD=null
$.mo=null
$.fM=null
$.l1=null
$.h5=null
$.hw=null
$.lg=null
$.hA=null
$.lh=null
$.ih=null
$.ll=null
$.iq=null
$.ln=null
$.iz=null
$.ls=null
$.jb=null
$.lx=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pp","n7",function(){return H.mW("_$dart_dartClosure")})
u($,"pq","lU",function(){return H.mW("_$dart_js")})
u($,"pJ","n8",function(){return H.bs(H.jk({
toString:function(){return"$receiver$"}}))})
u($,"pK","n9",function(){return H.bs(H.jk({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pL","na",function(){return H.bs(H.jk(null))})
u($,"pM","nb",function(){return H.bs(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pP","ne",function(){return H.bs(H.jk(void 0))})
u($,"pQ","nf",function(){return H.bs(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pO","nd",function(){return H.bs(H.mA(null))})
u($,"pN","nc",function(){return H.bs(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pS","nh",function(){return H.bs(H.mA(void 0))})
u($,"pR","ng",function(){return H.bs(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q8","lW",function(){return P.od()})
u($,"q9","nl",function(){return P.lq("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q1","nk",function(){return Z.aX(0)})
u($,"pW","ni",function(){return Z.aX(511)})
u($,"q3","aO",function(){return Z.aX(1)})
u($,"q2","bP",function(){return Z.aX(2)})
u($,"pY","bO",function(){return Z.aX(4)})
u($,"q4","bQ",function(){return Z.aX(8)})
u($,"q5","cb",function(){return Z.aX(16)})
u($,"pZ","dz",function(){return Z.aX(32)})
u($,"q_","dA",function(){return Z.aX(64)})
u($,"q0","nj",function(){return Z.aX(96)})
u($,"q6","cG",function(){return Z.aX(128)})
u($,"pX","bN",function(){return Z.aX(256)})
u($,"po","n6",function(){return new V.h9(1e-9)})
u($,"pn","O",function(){return $.n6()})
u($,"pD","kY",function(){return Q.aB(-1)})
u($,"py","aa",function(){return Q.aB(0)})
u($,"pC","c9",function(){return Q.aB(4096)})
u($,"px","b4",function(){return Q.aB(15)})
u($,"pz","kX",function(){return $.lV().X(0,$.ca()).X(0,$.b4())})
u($,"pv","bw",function(){return Q.aB(256)})
u($,"pI","af",function(){return Q.aB(512)})
u($,"pw","lV",function(){return Q.aB(768)})
u($,"pE","cF",function(){return Q.aB(16)})
u($,"pH","b5",function(){return Q.aB(32)})
u($,"pB","cE",function(){return Q.aB(48)})
u($,"pu","bv",function(){return Q.aB(64)})
u($,"pG","aJ",function(){return Q.aB(80)})
u($,"pA","bM",function(){return Q.aB(96)})
u($,"pF","ca",function(){return Q.aB(240)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cX,ArrayBufferView:H.cX,Float32Array:H.cW,Float64Array:H.cW,Int16Array:H.i5,Int32Array:H.i6,Int8Array:H.i7,Uint16Array:H.i8,Uint32Array:H.i9,Uint8ClampedArray:H.eb,CanvasPixelArray:H.eb,Uint8Array:H.ia,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLBodyElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableCellElement:W.w,HTMLTableDataCellElement:W.w,HTMLTableHeaderCellElement:W.w,HTMLTableColElement:W.w,HTMLTableElement:W.w,HTMLTableRowElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fy,HTMLAnchorElement:W.fA,HTMLAreaElement:W.fB,Blob:W.dC,HTMLCanvasElement:W.cg,CanvasRenderingContext2D:W.cK,CDATASection:W.bR,CharacterData:W.bR,Comment:W.bR,ProcessingInstruction:W.bR,Text:W.bR,CSSNumericValue:W.cO,CSSUnitValue:W.cO,CSSPerspective:W.fT,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cP,MSStyleCSSProperties:W.cP,CSS2Properties:W.cP,CSSImageValue:W.ba,CSSKeywordValue:W.ba,CSSPositionValue:W.ba,CSSResourceValue:W.ba,CSSURLImageValue:W.ba,CSSStyleValue:W.ba,CSSMatrixComponent:W.bb,CSSRotation:W.bb,CSSScale:W.bb,CSSSkew:W.bb,CSSTranslation:W.bb,CSSTransformComponent:W.bb,CSSTransformValue:W.fV,CSSUnparsedValue:W.fW,DataTransferItemList:W.fY,HTMLDivElement:W.dO,DOMException:W.fZ,ClientRectList:W.dP,DOMRectList:W.dP,DOMRectReadOnly:W.dQ,DOMStringList:W.h_,DOMTokenList:W.h0,Element:W.ad,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.bc,FileList:W.hc,FileWriter:W.hd,HTMLFormElement:W.hh,Gamepad:W.bd,History:W.hl,HTMLCollection:W.ck,HTMLFormControlsCollection:W.ck,HTMLOptionsCollection:W.ck,XMLHttpRequest:W.be,XMLHttpRequestUpload:W.cS,XMLHttpRequestEventTarget:W.cS,ImageData:W.bU,HTMLImageElement:W.cT,KeyboardEvent:W.bf,Location:W.hG,MediaList:W.hZ,MIDIInputMap:W.i_,MIDIOutputMap:W.i1,MimeType:W.bi,MimeTypeArray:W.i3,PointerEvent:W.ak,MouseEvent:W.ak,DragEvent:W.ak,Document:W.M,DocumentFragment:W.M,HTMLDocument:W.M,ShadowRoot:W.M,XMLDocument:W.M,Attr:W.M,DocumentType:W.M,Node:W.M,NodeList:W.cY,RadioNodeList:W.cY,Plugin:W.bj,PluginArray:W.ik,ProgressEvent:W.bk,ResourceProgressEvent:W.bk,RTCStatsReport:W.iB,HTMLSelectElement:W.iE,SourceBuffer:W.bm,SourceBufferList:W.iN,SpeechGrammar:W.bn,SpeechGrammarList:W.iO,SpeechRecognitionResult:W.bo,Storage:W.iW,CSSStyleSheet:W.b0,StyleSheet:W.b0,TextTrack:W.bp,TextTrackCue:W.b1,VTTCue:W.b1,TextTrackCueList:W.j3,TextTrackList:W.j4,TimeRanges:W.jd,Touch:W.br,TouchEvent:W.b2,TouchList:W.jg,TrackDefaultList:W.jh,CompositionEvent:W.c1,FocusEvent:W.c1,TextEvent:W.c1,UIEvent:W.c1,URL:W.jw,VideoTrackList:W.jL,WheelEvent:W.bt,Window:W.di,DOMWindow:W.di,CSSRuleList:W.jZ,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.kf,NamedNodeMap:W.eW,MozNamedAttrMap:W.eW,SpeechRecognitionResultList:W.kq,StyleSheetList:W.ks,SVGLength:P.bA,SVGLengthList:P.hC,SVGNumber:P.bF,SVGNumberList:P.ic,SVGPointList:P.im,SVGStringList:P.j1,SVGAElement:P.u,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGCircleElement:P.u,SVGClipPathElement:P.u,SVGDefsElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGEllipseElement:P.u,SVGFEBlendElement:P.u,SVGFEColorMatrixElement:P.u,SVGFEComponentTransferElement:P.u,SVGFECompositeElement:P.u,SVGFEConvolveMatrixElement:P.u,SVGFEDiffuseLightingElement:P.u,SVGFEDisplacementMapElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFloodElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEGaussianBlurElement:P.u,SVGFEImageElement:P.u,SVGFEMergeElement:P.u,SVGFEMergeNodeElement:P.u,SVGFEMorphologyElement:P.u,SVGFEOffsetElement:P.u,SVGFEPointLightElement:P.u,SVGFESpecularLightingElement:P.u,SVGFESpotLightElement:P.u,SVGFETileElement:P.u,SVGFETurbulenceElement:P.u,SVGFilterElement:P.u,SVGForeignObjectElement:P.u,SVGGElement:P.u,SVGGeometryElement:P.u,SVGGraphicsElement:P.u,SVGImageElement:P.u,SVGLineElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMaskElement:P.u,SVGMetadataElement:P.u,SVGPathElement:P.u,SVGPatternElement:P.u,SVGPolygonElement:P.u,SVGPolylineElement:P.u,SVGRadialGradientElement:P.u,SVGRectElement:P.u,SVGScriptElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGElement:P.u,SVGSVGElement:P.u,SVGSwitchElement:P.u,SVGSymbolElement:P.u,SVGTSpanElement:P.u,SVGTextContentElement:P.u,SVGTextElement:P.u,SVGTextPathElement:P.u,SVGTextPositioningElement:P.u,SVGTitleElement:P.u,SVGUseElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGTransform:P.bI,SVGTransformList:P.ji,AudioBuffer:P.fE,AudioParamMap:P.fF,AudioTrackList:P.fH,AudioContext:P.cd,webkitAudioContext:P.cd,BaseAudioContext:P.cd,OfflineAudioContext:P.id,WebGLBuffer:P.dE,WebGLFramebuffer:P.dU,WebGLProgram:P.ee,WebGLRenderbuffer:P.ef,WebGL2RenderingContext:P.cp,WebGLShader:P.eg,WebGLTexture:P.eo,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iP})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e9.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.ea.$nativeSuperclassTag="ArrayBufferView"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.n_,[])
else L.n_([])})})()
//# sourceMappingURL=main.dart.js.map
