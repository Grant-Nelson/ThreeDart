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
a[c]=function(){a[c]=function(){H.pR(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lf:function lf(){},
kQ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hq:function(){return new P.cj("No element")},
nP:function(){return new P.cj("Too many elements")},
nO:function(){return new P.cj("Too few elements")},
eh:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
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
r=J.b3(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
og:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.ac(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.ac(a3+a4,2)
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
if(J.b3(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b3(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b3(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b3(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b3(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b3(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b3(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b3(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b3(a5.$2(k,j),0)){i=j
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
if(J.V(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.P()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.as()
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
if(typeof a1!=="number")return a1.as()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.as()
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
H.eh(a2,a3,h-2,a5,a6)
H.eh(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.e(a2,h)
if(!J.V(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.e(a2,g)
if(!J.V(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.e(a2,f)
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
break}}}H.eh(a2,h,g,a5,a6)}else H.eh(a2,h,g,a5,a6)},
t:function t(a){this.a=a},
h5:function h5(){},
cb:function cb(){},
cM:function cM(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hG:function hG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hH:function hH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
jL:function jL(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(){},
d7:function d7(){},
es:function es(){},
nH:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
cz:function(a){var u,t=H.J(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pz:function(a){return v.types[H.a2(a)]},
pG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aR(a)
if(typeof u!=="string")throw H.c(H.at(a))
return u},
cW:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o8:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.J(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
cf:function(a){return H.o_(a)+H.lz(H.bZ(a),0,null)},
o_:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibW){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cz(t.length>1&&C.b.F(t,0)===36?C.b.ag(t,1):t)},
o0:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q
H.kV(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o9:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.at(s))}return H.mc(r)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.at(s))
if(s<0)throw H.c(H.at(s))
if(s>65535)return H.o9(a)}return H.mc(a)},
oa:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cg:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
ce:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o7:function(a){var u=H.ce(a).getFullYear()+0
return u},
o5:function(a){var u=H.ce(a).getMonth()+1
return u},
o1:function(a){var u=H.ce(a).getDate()+0
return u},
o2:function(a){var u=H.ce(a).getHours()+0
return u},
o4:function(a){var u=H.ce(a).getMinutes()+0
return u},
o6:function(a){var u=H.ce(a).getSeconds()+0
return u},
o3:function(a){var u=H.ce(a).getMilliseconds()+0
return u},
E:function(a){throw H.c(H.at(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.c(H.ct(a,b))},
ct:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aS(!0,b,s,null)
u=H.a2(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.eb(b,s)},
pt:function(a,b,c){var u="Invalid value"
if(a>c)return new P.ch(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.ch(a,c,!0,b,"end",u)
return new P.aS(!0,b,"end",null)},
at:function(a){return new P.aS(!0,a,null,null)},
po:function(a){if(typeof a!=="number")throw H.c(H.at(a))
return a},
c:function(a){var u
if(a==null)a=new P.e7()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n6})
u.name=""}else u.toString=H.n6
return u},
n6:function(){return J.aR(this.dartException)},
C:function(a){throw H.c(a)},
y:function(a){throw H.c(P.b5(a))},
bj:function(a){var u,t,s,r,q,p
a=H.n5(a.replace(String({}),'$receiver$'))
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
mn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.i9(a,b==null?null:b.method)},
lg:function(a,b){var u=b==null,t=u?null:b.method
return new H.ht(a,t,u?null:b.receiver)},
an:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l2(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lg(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n9()
q=$.na()
p=$.nb()
o=$.nc()
n=$.nf()
m=$.ng()
l=$.ne()
$.nd()
k=$.ni()
j=$.nh()
i=r.ap(u)
if(i!=null)return f.$1(H.lg(H.J(u),i))
else{i=q.ap(u)
if(i!=null){i.method="call"
return f.$1(H.lg(H.J(u),i))}else{i=p.ap(u)
if(i==null){i=o.ap(u)
if(i==null){i=n.ap(u)
if(i==null){i=m.ap(u)
if(i==null){i=l.ap(u)
if(i==null){i=o.ap(u)
if(i==null){i=k.ap(u)
if(i==null){i=j.ap(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.J(u),i))}}return f.$1(new H.jk(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ej()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aS(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ej()
return a},
cx:function(a){var u
if(a==null)return new H.f6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f6(a)},
px:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pF:function(a,b,c,d,e,f){H.f(a,"$ibK")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.D("Unsupported number of arguments for wrapped closure"))},
cs:function(a,b){var u
H.a2(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pF)
a.$identity=u
return u},
nG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iF().constructor.prototype):Object.create(new H.cC(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b4
if(typeof t!=="number")return t.p()
$.b4=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.lS(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pz,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lR:H.l6
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lS(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nD:function(a,b,c,d){var u=H.l6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nF(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nD(t,!r,u,b)
if(t===0){r=$.b4
if(typeof r!=="number")return r.p()
$.b4=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cD
return new Function(r+H.j(q==null?$.cD=H.fM("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b4
if(typeof r!=="number")return r.p()
$.b4=r+1
o+=r
r="return function("+o+"){return this."
q=$.cD
return new Function(r+H.j(q==null?$.cD=H.fM("self"):q)+"."+H.j(u)+"("+o+");}")()},
nE:function(a,b,c,d){var u=H.l6,t=H.lR
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
nF:function(a,b){var u,t,s,r,q,p,o,n=$.cD
if(n==null)n=$.cD=H.fM("self")
u=$.lQ
if(u==null)u=$.lQ=H.fM("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nE(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b4
if(typeof u!=="number")return u.p()
$.b4=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b4
if(typeof u!=="number")return u.p()
$.b4=u+1
return new Function(n+u+"}")()},
lD:function(a,b,c,d,e,f,g){return H.nG(a,b,H.a2(c),d,!!e,!!f,g)},
l6:function(a){return a.a},
lR:function(a){return a.c},
fM:function(a){var u,t,s,r=new H.cC("self","target","receiver","name"),q=J.ld(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pk("boolean expression must not be null")
return a},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b2(a,"String"))},
pu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"double"))},
n1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b2(a,"num"))},
lA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b2(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b2(a,"int"))},
n3:function(a,b){throw H.c(H.b2(a,H.cz(H.J(b).substring(2))))},
pL:function(a,b){throw H.c(H.nC(a,H.cz(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.n3(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pL(a,b)},
kV:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.b2(a,"List<dynamic>"))},
n_:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.n3(a,b)},
mU:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
fv:function(a,b){var u
if(typeof a=="function")return!0
u=H.mU(J.T(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lw)return a
$.lw=!0
try{if(H.fv(a,b))return a
u=H.kZ(b)
t=H.b2(a,u)
throw H.c(t)}finally{$.lw=!1}},
lE:function(a,b){if(a!=null&&!H.lC(a,b))H.C(H.b2(a,H.kZ(b)))
return a},
b2:function(a,b){return new H.j9("TypeError: "+P.dN(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
nC:function(a,b){return new H.fN("CastError: "+P.dN(a)+": type '"+H.mP(a)+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.T(a)
if(!!t.$icF){u=H.mU(t)
if(u!=null)return H.kZ(u)
return"Closure"}return H.cf(a)},
pk:function(a){throw H.c(new H.jM(a))},
pR:function(a){throw H.c(new P.fX(H.J(a)))},
oe:function(a){return new H.ir(a)},
mX:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bZ:function(a){if(a==null)return
return a.$ti},
qA:function(a,b,c){return H.cy(a["$a"+H.j(c)],H.bZ(b))},
bz:function(a,b,c,d){var u
H.J(c)
H.a2(d)
u=H.cy(a["$a"+H.j(c)],H.bZ(b))
return u==null?null:u[d]},
am:function(a,b,c){var u
H.J(b)
H.a2(c)
u=H.cy(a["$a"+H.j(b)],H.bZ(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.a2(b)
u=H.bZ(a)
return u==null?null:u[b]},
kZ:function(a){return H.bY(a,null)},
bY:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cz(a[0].name)+H.lz(a,1,b)
if(typeof a=="function")return H.cz(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.oU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bY("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
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
if(m!=null&&m!==P.S)p+=" extends "+H.bY(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bY(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bY(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bY(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pw(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.J(b[h])
j=j+i+H.bY(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lz:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bY(p,c)}return"<"+u.i(0)+">"},
cy:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lB:function(a,b,c,d){var u,t
H.J(b)
H.kV(c)
H.J(d)
if(a==null)return!1
u=H.bZ(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mS(H.cy(t[d],u),null,c,null)},
l:function(a,b,c,d){H.J(b)
H.kV(c)
H.J(d)
if(a==null)return a
if(H.lB(a,b,c,d))return a
throw H.c(H.b2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cz(b.substring(2))+H.lz(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aQ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aQ(a[t],b,c[t],d))return!1
return!0},
qy:function(a,b,c){return a.apply(b,H.cy(J.T(b)["$a"+H.j(c)],H.bZ(b)))},
mZ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="L"||a===-1||a===-2||H.mZ(u)}return!1},
lC:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="L"||b===-1||b===-2||H.mZ(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fv(a,b)}u=J.T(a).constructor
t=H.bZ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aQ(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lC(a,b))throw H.c(H.b2(a,H.kZ(b)))
return a},
aQ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aQ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bK"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aQ("type" in a?a.type:l,b,s,d)
else if(H.aQ(a,b,s,d))return!0
else{if(!('$i'+"cK" in t.prototype))return!1
r=t.prototype["$a"+"cK"]
q=H.cy(r,u?a.slice(1):l)
return H.aQ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.cy(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aQ(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aQ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aQ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aQ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pJ(h,b,g,d)},
pJ:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aQ(c[s],d,a[s],b))return!1}return!0},
qz:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pH:function(a){var u,t,s,r,q=H.J($.mY.$1(a)),p=$.kP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.J($.mR.$2(a,q))
if(q!=null){p=$.kP[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kU[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kY(u)
$.kP[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kU[q]=u
return u}if(s==="-"){r=H.kY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n2(a,u)
if(s==="*")throw H.c(P.jj(q))
if(v.leafTags[q]===true){r=H.kY(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n2(a,u)},
n2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lG(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kY:function(a){return J.lG(a,!1,null,!!a.$iM)},
pI:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kY(u)
else return J.lG(u,c,null,null)},
pD:function(){if(!0===$.lF)return
$.lF=!0
H.pE()},
pE:function(){var u,t,s,r,q,p,o,n
$.kP=Object.create(null)
$.kU=Object.create(null)
H.pC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n4.$1(q)
if(p!=null){o=H.pI(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pC:function(){var u,t,s,r,q,p,o=C.G()
o=H.cr(C.H,H.cr(C.I,H.cr(C.v,H.cr(C.v,H.cr(C.J,H.cr(C.K,H.cr(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mY=new H.kR(r)
$.mR=new H.kS(q)
$.n4=new H.kT(p)},
cr:function(a,b){return a(b)||b},
nR:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a6("Illegal RegExp pattern ("+String(r)+")",a,null))},
pO:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pv:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lI:function(a,b,c){var u=H.pP(a,b,c)
return u},
pP:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n5(b),'g'),H.pv(c))},
fR:function fR(){},
fS:function fS(a,b,c,d){var _=this
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
i9:function i9(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
l2:function l2(a){this.a=a},
f6:function f6(a){this.a=a
this.b=null},
cF:function cF(){},
iP:function iP(){},
iF:function iF(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a){this.a=a},
fN:function fN(a){this.a=a},
ir:function ir(a){this.a=a},
jM:function jM(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hy:function hy(a,b){this.a=a
this.$ti=b},
hz:function hz(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cp:function(a){return a},
nZ:function(a){return new Int8Array(a)},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ct(b,a))},
oS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pt(a,b,c))
return b},
cR:function cR(){},
bQ:function bQ(){},
e3:function e3(){},
cS:function cS(){},
e4:function e4(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
e5:function e5(){},
cT:function cT(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
pw:function(a){return J.m_(a?Object.keys(a):[],null)},
pK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fx:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lF==null){H.pD()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jj("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lJ()]
if(r!=null)return r
r=H.pH(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lJ(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.m_(new Array(a),b)},
m_:function(a,b){return J.ld(H.d(a,[b]))},
ld:function(a){H.kV(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dS.prototype
return J.dR.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.dT.prototype
if(typeof a=="boolean")return J.hr.prototype
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.S)return a
return J.fx(a)},
py:function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.S)return a
return J.fx(a)},
cv:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.S)return a
return J.fx(a)},
fw:function(a){if(a==null)return a
if(a.constructor==Array)return J.aU.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.S)return a
return J.fx(a)},
mV:function(a){if(typeof a=="number")return J.bN.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bW.prototype
return a},
mW:function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bW.prototype
return a},
ds:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bW.prototype
return a},
cw:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.S)return a
return J.fx(a)},
nr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.py(a).p(a,b)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).v(a,b)},
b3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mV(a).as(a,b)},
lL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mW(a).u(a,b)},
ns:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mV(a).t(a,b)},
dx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cv(a).j(a,b)},
l3:function(a,b,c){return J.fw(a).k(a,b,c)},
nt:function(a,b){return J.ds(a).F(a,b)},
nu:function(a,b,c){return J.cw(a).hL(a,b,c)},
nv:function(a,b,c,d){return J.cw(a).ii(a,b,c,d)},
nw:function(a,b){return J.ds(a).a0(a,b)},
l4:function(a,b){return J.mW(a).ix(a,b)},
fy:function(a,b){return J.fw(a).J(a,b)},
nx:function(a,b,c,d){return J.cw(a).iJ(a,b,c,d)},
lM:function(a,b){return J.fw(a).C(a,b)},
ny:function(a){return J.cw(a).git(a)},
fz:function(a){return J.cw(a).gcb(a)},
dy:function(a){return J.T(a).gH(a)},
bD:function(a){return J.fw(a).gT(a)},
aF:function(a){return J.cv(a).gl(a)},
lN:function(a){return J.fw(a).jf(a)},
nz:function(a,b){return J.cw(a).ji(a,b)},
nA:function(a,b,c){return J.ds(a).A(a,b,c)},
nB:function(a){return J.ds(a).jr(a)},
aR:function(a){return J.T(a).i(a)},
a:function a(){},
hr:function hr(){},
dT:function dT(){},
dU:function dU(){},
id:function id(){},
bW:function bW(){},
bs:function bs(){},
aU:function aU(a){this.$ti=a},
le:function le(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bN:function bN(){},
dS:function dS(){},
dR:function dR(){},
br:function br(){}},P={
ou:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pl()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cs(new P.jO(s),1)).observe(u,{childList:true})
return new P.jN(s,u,t)}else if(self.setImmediate!=null)return P.pm()
return P.pn()},
ov:function(a){self.scheduleImmediate(H.cs(new P.jP(H.n(a,{func:1,ret:-1})),0))},
ow:function(a){self.setImmediate(H.cs(new P.jQ(H.n(a,{func:1,ret:-1})),0))},
ox:function(a){P.ln(C.o,H.n(a,{func:1,ret:-1}))},
ln:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ac(a.a,1000)
return P.oD(u<0?0:u,b)},
mm:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bh]})
u=C.e.ac(a.a,1000)
return P.oE(u<0?0:u,b)},
oD:function(a,b){var u=new P.fc()
u.f3(a,b)
return u},
oE:function(a,b){var u=new P.fc()
u.f4(a,b)
return u},
oy:function(a,b){var u,t,s
b.a=1
try{a.ew(new P.k_(b),new P.k0(b),null)}catch(s){u=H.an(s)
t=H.cx(s)
P.pM(new P.k1(b,u,t))}},
my:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaP")
if(u>=4){t=b.c1()
b.a=a.a
b.c=a.c
P.dd(b,t)}else{t=H.f(b.c,"$ibl")
b.a=2
b.c=a
a.dv(t)}},
dd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iao")
g=g.b
r=s.a
q=s.b
g.toString
P.kK(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.dd(h.a,b)}g=h.a
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
if(m){H.f(o,"$iao")
g=g.b
r=o.a
q=o.b
g.toString
P.kK(i,i,g,r,q)
return}l=$.a1
if(l!=n)$.a1=n
else l=i
g=b.c
if(g===8)new P.k5(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k4(u,b,o).$0()}else if((g&2)!==0)new P.k3(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.T(g).$icK){if(g.a>=4){k=H.f(q.c,"$ibl")
q.c=null
b=q.bm(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.my(g,q)
return}}j=b.b
k=H.f(j.c,"$ibl")
j.c=null
b=j.bm(k)
g=u.a
r=u.b
if(!g){H.A(r,H.q(j,0))
j.a=4
j.c=r}else{H.f(r,"$iao")
j.a=8
j.c=r}h.a=j
g=j}},
pg:function(a,b){if(H.fv(a,{func:1,args:[P.S,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.S,P.ax]})
if(H.fv(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.l5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pf:function(){var u,t
for(;u=$.cq,u!=null;){$.dr=null
t=u.b
$.cq=t
if(t==null)$.dq=null
u.a.$0()}},
pj:function(){$.lx=!0
try{P.pf()}finally{$.dr=null
$.lx=!1
if($.cq!=null)$.lK().$1(P.mT())}},
mO:function(a){var u=new P.ez(H.n(a,{func:1,ret:-1}))
if($.cq==null){$.cq=$.dq=u
if(!$.lx)$.lK().$1(P.mT())}else $.dq=$.dq.b=u},
pi:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cq
if(u==null){P.mO(a)
$.dr=$.dq
return}t=new P.ez(a)
s=$.dr
if(s==null){t.b=u
$.cq=$.dr=t}else{t.b=s.b
$.dr=s.b=t
if(t.b==null)$.dq=t}},
pM:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.f===u){P.kM(t,t,C.f,a)
return}u.toString
P.kM(t,t,u,H.n(u.c5(a),s))},
ml:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.f){u.toString
return P.ln(a,b)}return P.ln(a,H.n(u.c5(b),t))},
ok:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bh]}
H.n(b,s)
u=$.a1
if(u===C.f){u.toString
return P.mm(a,b)}t=u.dP(b,P.bh)
$.a1.toString
return P.mm(a,H.n(t,s))},
kK:function(a,b,c,d,e){var u={}
u.a=d
P.pi(new P.kL(u,e))},
mK:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mL:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
ph:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kM:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c5(d):c.iu(d,-1)
P.mO(d)},
jO:function jO(a){this.a=a},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
fc:function fc(){this.c=0},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
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
aP:function aP(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a){this.a=a},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a){this.a=a
this.b=null},
iI:function iI(){},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
d0:function d0(){},
iJ:function iJ(){},
bh:function bh(){},
ao:function ao(a,b){this.a=a
this.b=b},
kD:function kD(){},
kL:function kL(a,b){this.a=a
this.b=b},
kc:function kc(){},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function kd(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
nS:function(a,b){return new H.a4([a,b])},
lh:function(a,b){return new H.a4([a,b])},
nU:function(a){return H.px(a,new H.a4([null,null]))},
dX:function(a){return new P.ka([a])},
lt:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oC:function(a,b,c){var u=new P.eO(a,b,[c])
u.c=a.e
return u},
nN:function(a,b,c){var u,t
if(P.ly(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.ay,a)
try{P.oV(a,u)}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}t=P.mj(b,H.n_(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lc:function(a,b,c){var u,t
if(P.ly(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.ay,a)
try{t=u
t.a=P.mj(t.a,a,", ")}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ly:function(a){var u,t
for(u=$.ay.length,t=0;t<u;++t)if(a===$.ay[t])return!0
return!1},
oV:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.j(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.B();o=n,n=m){m=u.gI(u);++s
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
nT:function(a,b,c){var u=P.nS(b,c)
a.C(0,new P.hA(u,b,c))
return u},
m0:function(a,b){var u,t,s=P.dX(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t)s.h(0,H.A(a[t],b))
return s},
lj:function(a){var u,t={}
if(P.ly(a))return"{...}"
u=new P.ai("")
try{C.a.h($.ay,a)
u.a+="{"
t.a=!0
J.lM(a,new P.hE(t,u))
u.a+="}"}finally{if(0>=$.ay.length)return H.e($.ay,-1)
$.ay.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ka:function ka(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cn:function cn(a){this.a=a
this.c=this.b=null},
eO:function eO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(){},
v:function v(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
ag:function ag(){},
kv:function kv(){},
hF:function hF(){},
et:function et(a,b){this.a=a
this.$ti=b},
kh:function kh(){},
eP:function eP(){},
fi:function fi(){},
oo:function(a,b,c,d){H.l(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.op(!1,b,c,d)
return},
op:function(a,b,c,d){var u,t,s=$.nj()
if(s==null)return
u=0===c
if(u&&!0)return P.lq(s,b)
t=b.length
d=P.bv(c,d,t)
if(u&&d===t)return P.lq(s,b)
return P.lq(s,b.subarray(c,d))},
lq:function(a,b){if(P.or(b))return
return P.os(a,b)},
os:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.an(t)}return},
or:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.an(t)}return},
mN:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.m],"$ab")
for(u=J.cv(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ar()
if((s&127)!==s)return t-b}return c-b},
lP:function(a,b,c,d,e,f){if(C.e.bg(f,4)!==0)throw H.c(P.a6("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a6("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a6("Invalid base64 padding, more than two '=' characters",a,b))},
fJ:function fJ(){},
fK:function fK(){},
c5:function c5(){},
bH:function bH(){},
h7:function h7(){},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm:function hm(a){this.a=a},
js:function js(){},
ju:function ju(){},
kB:function kB(a){this.b=0
this.c=a},
jt:function jt(a){this.a=a},
kA:function kA(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dt:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.h]})
u=H.o8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a6(a,null,null))},
nM:function(a){if(a instanceof H.cF)return a.i(0)
return"Instance of '"+H.cf(a)+"'"},
nV:function(a,b,c){var u,t
H.A(b,c)
u=J.nQ(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
li:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bD(a);u.B();)C.a.h(s,H.A(u.gI(u),c))
if(b)return s
return H.l(J.ld(s),"$ib",t,"$ab")},
d1:function(a,b,c){var u,t=P.m
H.l(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaU",[t],"$aaU")
u=a.length
c=P.bv(b,c,u)
return H.md(b>0||c<u?C.a.eL(a,b,c):a)}if(!!J.T(a).$icT)return H.oa(a,b,P.bv(b,c,a.length))
return P.oi(a,b,c)},
oi:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ii",[P.m],"$ai")
if(b<0)throw H.c(P.ah(b,0,J.aF(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aF(a),q,q))
t=J.bD(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gI(t))}return H.md(r)},
oc:function(a){return new H.hs(a,H.nR(a,!1,!0,!1))},
mj:function(a,b,c){var u=J.bD(b)
if(!u.B())return a
if(c.length===0){do a+=H.j(u.gI(u))
while(u.B())}else{a+=H.j(u.gI(u))
for(;u.B();)a=a+c+H.j(u.gI(u))}return a},
mp:function(){var u=H.o0()
if(u!=null)return P.on(u)
throw H.c(P.I("'Uri.base' is not supported"))},
fj:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.np().b
if(typeof b!=="string")H.C(H.at(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.am(c,"c5",0))
t=c.giI().cc(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cg(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nI:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dI:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a,b){return new P.b8(1e6*b+1000*a)},
dN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aR(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nM(a)},
dA:function(a){return new P.aS(!1,null,null,a)},
l5:function(a,b,c){return new P.aS(!0,a,b,c)},
eb:function(a,b){return new P.ch(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.ch(b,c,!0,a,d,"Invalid value")},
bv:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
lk:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.a2(e==null?J.aF(b):e)
return new P.hp(u,!0,a,c,"Index out of range")},
I:function(a){return new P.jl(a)},
jj:function(a){return new P.ji(a)},
mi:function(a){return new P.cj(a)},
b5:function(a){return new P.fQ(a)},
D:function(a){return new P.eH(a)},
a6:function(a,b,c){return new P.hh(a,b,c)},
nW:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lH:function(a){H.pK(a)},
on:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.mo(e<e?C.b.A(a,0,e):a,5,f).geC()
else if(u===32)return P.mo(C.b.A(a,5,e),0,f).geC()}t=new Array(8)
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
if(P.mM(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jx()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.E(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.al(a,"..",o)))j=n>o+2&&C.b.al(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.al(a,"file",0)){if(q<=0){if(!C.b.al(a,"/",o)){i="file:///"
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
a=C.b.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.b.al(a,"http",0)){if(t&&p+3===o&&C.b.al(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.al(a,"https",0)){if(t&&p+4===o&&C.b.al(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kk(a,r,q,p,o,n,m,k)}return P.oF(a,0,e,r,q,p,o,n,m,k)},
mr:function(a){var u=P.h
return C.a.iN(H.d(a.split("&"),[u]),P.lh(u,u),new P.jq(C.h),[P.x,P.h,P.h])},
om:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jn(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a0(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dt(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.as()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dt(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.as()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
l=C.a.gay(s)
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
g+=2}else{d=C.e.aS(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oF:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oM(a,b,d)
else{if(d===b)P.dn(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oN(a,u,e-1):""
s=P.oJ(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.E(g)
q=r<g?P.oL(P.dt(C.b.A(a,r,g),new P.kw(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oK(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lu(a,h+1,i,n):n
return new P.co(j,t,s,q,p,o,i<c?P.oI(a,i+1,c):n)},
mC:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dn:function(a,b,c){throw H.c(P.a6(c,a,b))},
oL:function(a,b){if(a!=null&&a===P.mC(b))return
return a},
oJ:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a0(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a0(a,u)!==93)P.dn(a,b,"Missing end `]` to match `[` in host")
P.mq(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.E(c)
t=b
for(;t<c;++t)if(C.b.a0(a,t)===58){P.mq(a,b,c)
return"["+a+"]"}return P.oP(a,b,c)},
oP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.E(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a0(a,u)
if(q===37){p=P.mI(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dn(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mD(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oM:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.F(a,b)))P.dn(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dn(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.oG(t?a.toLowerCase():a)},
oG:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oN:function(a,b,c){return P.dp(a,b,c,C.W,!1)},
oK:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dp(a,b,c,C.A,!0):C.j.jR(d,new P.kx(),P.h).n(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a8(u,"/"))u="/"+u
return P.oO(u,e,f)},
oO:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a8(a,"/"))return P.oQ(a,!u||c)
return P.oR(a)},
lu:function(a,b,c,d){var u,t={}
H.l(d,"$ix",[P.h,null],"$ax")
if(a!=null){if(d!=null)throw H.c(P.dA("Both query and queryParameters specified"))
return P.dp(a,b,c,C.l,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.C(0,new P.ky(new P.kz(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oI:function(a,b,c){return P.dp(a,b,c,C.l,!0)},
mI:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a0(a,b+1)
t=C.b.a0(a,p)
s=H.kQ(u)
r=H.kQ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aS(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cg(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
mD:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.e.i_(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.d1(t,0,null)},
dp:function(a,b,c,d,e){var u=P.mH(a,b,c,H.l(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.P()
if(typeof c!=="number")return H.E(c)
if(!(t<c))break
c$0:{q=C.b.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mI(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dn(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mD(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.A(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.E(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.P()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mG:function(a){if(C.b.a8(a,"."))return!0
return C.b.ed(a,"/.")!==-1},
oR:function(a){var u,t,s,r,q,p,o
if(!P.mG(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.V(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.n(u,"/")},
oQ:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.k(u,0,P.mE(u[0]))}return C.a.n(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.nt(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.ag(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oH:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dA("Invalid URL encoding"))}}return u},
lv:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.t(C.b.A(a,b,c))}else{r=H.d([],[P.m])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dA("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dA("Truncated URI"))
C.a.h(r,P.oH(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.m],"$ab")
return new P.jt(!1).cc(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a6(m,a,t))}}if(s<0&&t>b)throw H.c(P.a6(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gay(l)
if(r!==44||t!==p+7||!C.b.al(a,"base64",p+1))throw H.c(P.a6("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.j_(0,a,o,u)
else{n=P.mH(a,o,u,C.l,!0)
if(n!=null)a=C.b.aV(a,o,u,n)}return new P.jm(a,l,c)},
oT:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nW(22,new P.kF(),P.U),n=new P.kE(o),m=new P.kG(),l=new P.kH(),k=H.f(n.$2(0,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iU")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iU")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iU")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iU")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iU")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iU"),"]",5)
k=H.f(n.$2(9,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iU")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iU")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iU"),"az",21)
k=H.f(n.$2(21,245),"$iU")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mM:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.m],"$ab")
u=$.nq()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
R:function R(){},
az:function az(a,b){this.a=a
this.b=b},
B:function B(){},
b8:function b8(a){this.a=a},
h3:function h3(){},
h4:function h4(){},
bJ:function bJ(){},
fC:function fC(){},
e7:function e7(){},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d,e,f){var _=this
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
jl:function jl(a){this.a=a},
ji:function ji(a){this.a=a},
cj:function cj(a){this.a=a},
fQ:function fQ(a){this.a=a},
ic:function ic(){},
ej:function ej(){},
fX:function fX(a){this.a=a},
eH:function eH(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(){},
m:function m(){},
i:function i(){},
b9:function b9(){},
b:function b(){},
x:function x(){},
L:function L(){},
ad:function ad(){},
S:function S(){},
ax:function ax(){},
h:function h(){},
ai:function ai(a){this.a=a},
jq:function jq(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kw:function kw(a,b){this.a=a
this.b=b},
kx:function kx(){},
kz:function kz(a,b){this.a=a
this.b=b},
ky:function ky(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(){},
kE:function kE(a){this.a=a},
kG:function kG(){},
kH:function kH(){},
kk:function kk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jU:function jU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pr:function(a){var u,t=J.T(a)
if(!!t.$ibq){u=t.gdW(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fh(a.data,a.height,a.width)},
pq:function(a){if(a instanceof P.fh)return{data:a.a,height:a.b,width:a.c}
return a},
by:function(a){var u,t,s,r,q
if(a==null)return
u=P.lh(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=H.J(t[r])
u.k(0,q,a[q])}return u},
pp:function(a){var u={}
a.C(0,new P.kN(u))
return u},
km:function km(){},
ko:function ko(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(){},
k9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oB:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
kb:function kb(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
hv:function hv(){},
be:function be(){},
ia:function ia(){},
ii:function ii(){},
cY:function cY(){},
iM:function iM(){},
p:function p(){},
bi:function bi(){},
j6:function j6(){},
eM:function eM(){},
eN:function eN(){},
eX:function eX(){},
eY:function eY(){},
f8:function f8(){},
f9:function f9(){},
ff:function ff(){},
fg:function fg(){},
U:function U(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
fH:function fH(){},
c0:function c0(){},
ib:function ib(){},
eA:function eA(){},
dC:function dC(){},
dQ:function dQ(){},
ea:function ea(){},
ec:function ec(){},
ci:function ci(){},
ed:function ed(){},
el:function el(){},
er:function er(){},
iE:function iE(){},
f4:function f4(){},
f5:function f5(){}},W={
lO:function(){var u=document.createElement("a")
return u},
l7:function(){var u=document.createElement("canvas")
return u},
nK:function(a,b,c){var u=document.body,t=(u&&C.t).an(u,a,b,c)
t.toString
u=W.G
u=new H.da(new W.as(t),H.n(new W.h6(),{func:1,ret:P.R,args:[u]}),[u])
return H.f(u.gaL(u),"$iO")},
nL:function(a){H.f(a,"$ik")
return"wheel"},
cI:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cw(a)
t=u.ges(a)
if(typeof t==="string")r=u.ges(a)}catch(s){H.an(s)}return r},
lb:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
k8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a,b,c,d){var u=W.k8(W.k8(W.k8(W.k8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.mQ(new W.jY(c),W.o)
if(u!=null&&!0)J.nv(a,b,u,!1)
return new W.jX(a,b,u,!1,[e])},
mz:function(a){var u=W.lO(),t=window.location
u=new W.bX(new W.kg(u,t))
u.eX(a)
return u},
oz:function(a,b,c,d){H.f(a,"$iO")
H.J(b)
H.J(c)
H.f(d,"$ibX")
return!0},
oA:function(a,b,c,d){var u,t,s
H.f(a,"$iO")
H.J(b)
H.J(c)
u=H.f(d,"$ibX").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mB:function(){var u=P.h,t=P.m0(C.p,u),s=H.q(C.p,0),r=H.n(new W.ks(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kr(t,P.dX(u),P.dX(u),P.dX(u),null)
t.f2(null,new H.hI(C.p,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.f)return a
return u.dP(a,b)},
u:function u(){},
fA:function fA(){},
dz:function dz(){},
fB:function fB(){},
cB:function cB(){},
c1:function c1(){},
bE:function bE(){},
c4:function c4(){},
cE:function cE(){},
bF:function bF(){},
cG:function cG(){},
fT:function fT(){},
X:function X(){},
cH:function cH(){},
fU:function fU(){},
b6:function b6(){},
b7:function b7(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
aH:function aH(){},
h0:function h0(){},
dK:function dK(){},
dL:function dL(){},
h1:function h1(){},
h2:function h2(){},
jS:function jS(a,b){this.a=a
this.b=b},
O:function O(){},
h6:function h6(){},
o:function o(){},
k:function k(){},
aI:function aI(){},
cJ:function cJ(){},
hc:function hc(){},
hg:function hg(){},
aT:function aT(){},
hl:function hl(){},
c8:function c8(){},
bq:function bq(){},
c9:function c9(){},
ba:function ba(){},
dY:function dY(){},
hV:function hV(){},
cP:function cP(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
hY:function hY(){},
hZ:function hZ(a){this.a=a},
aV:function aV(){},
i_:function i_(){},
a7:function a7(){},
as:function as(a){this.a=a},
G:function G(){},
cU:function cU(){},
aW:function aW(){},
ig:function ig(){},
ip:function ip(){},
iq:function iq(a){this.a=a},
is:function is(){},
aX:function aX(){},
iC:function iC(){},
aY:function aY(){},
iD:function iD(){},
aZ:function aZ(){},
iG:function iG(){},
iH:function iH(a){this.a=a},
aL:function aL(){},
bg:function bg(){},
ek:function ek(){},
iN:function iN(){},
iO:function iO(){},
d3:function d3(){},
b_:function b_(){},
aM:function aM(){},
iQ:function iQ(){},
iR:function iR(){},
j0:function j0(){},
b0:function b0(){},
b1:function b1(){},
j4:function j4(){},
j5:function j5(){},
bT:function bT(){},
jr:function jr(){},
jK:function jK(){},
bk:function bk(){},
db:function db(){},
dc:function dc(){},
jT:function jT(){},
eC:function eC(){},
k7:function k7(){},
eU:function eU(){},
kl:function kl(){},
kp:function kp(){},
jR:function jR(){},
jV:function jV(a){this.a=a},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ls:function ls(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jX:function jX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jY:function jY(a){this.a=a},
bX:function bX(a){this.a=a},
H:function H(){},
e6:function e6(a){this.a=a},
i7:function i7(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(){},
ki:function ki(){},
kj:function kj(){},
kr:function kr(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ks:function ks(){},
kq:function kq(){},
dP:function dP(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aC:function aC(){},
kg:function kg(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
kC:function kC(a){this.a=a},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
dj:function dj(){},
dk:function dk(){},
f2:function f2(){},
f3:function f3(){},
f7:function f7(){},
fa:function fa(){},
fb:function fb(){},
dl:function dl(){},
dm:function dm(){},
fd:function fd(){},
fe:function fe(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){}},O={
l8:function(a){var u=new O.a3([a])
u.bj(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cO:function cO(){this.b=this.a=null},
h_:function h_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hJ:function hJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e2:function e2(){},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bc:function bc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(){var _=this
_.e=_.d=_.c=_.b=null},
hN:function hN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hO:function hO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){}},E={
lY:function(){var u=new E.aq()
u.a=""
u.b=!0
u.seW(0,O.l8(E.aq))
u.y.aY(u.gj0(),u.gj3())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbD(0,null)
return u},
od:function(a,b){var u=new E.ik(a)
u.eT(a,b)
return u},
oj:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic4)return E.mk(a,!0,!0,!0,!1)
u=W.l7()
t=u.style
t.width="100%"
t.height="100%"
s.gcb(a).h(0,u)
return E.mk(u,!0,!0,!0,!1)},
mk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.en(),j=H.f(C.i.cS(a,"webgl2",P.nU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ici")
if(j==null)H.C(P.D("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.od(j,a)
u=new T.iX(j)
u.b=H.a2(j.getParameter(3379))
u.c=H.a2(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.eu(a)
t=new X.hu()
t.c=new X.aB(!1,!1,!1)
t.shD(P.dX(P.m))
u.b=t
t=new X.i0(u)
t.f=0
t.r=V.bu()
t.x=V.bu()
t.ch=t.Q=1
u.c=t
t=new X.hC(u)
t.r=0
t.x=V.bu()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j3(u)
t.f=V.bu()
t.r=V.bu()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfo(H.d([],[[P.d0,P.S]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.aa(s,"contextmenu",H.n(u.gfX(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.aa(a,"focus",H.n(u.gh2(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.aa(a,"blur",H.n(u.gfR(),o),!1,p))
t=u.z
n=W.ba
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.aa(s,"keyup",H.n(u.gh6(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.aa(s,"keydown",H.n(u.gh4(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.aa(a,"mousedown",H.n(u.gha(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,"mouseup",H.n(u.ghe(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.aa(a,l,H.n(u.ghc(),q),!1,r))
n=u.z
m=W.bk;(n&&C.a).h(n,W.aa(a,H.J(W.nL(a)),H.n(u.ghg(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.aa(s,l,H.n(u.gfZ(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.aa(s,"mouseup",H.n(u.gh0(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.aa(s,"pointerlockchange",H.n(u.ghi(),o),!1,p))
p=u.z
o=W.b1
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.aa(a,"touchstart",H.n(u.ghy(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchend",H.n(u.ghu(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.aa(a,"touchmove",H.n(u.ghw(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dz()
return k},
fL:function fL(){},
aq:function aq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
en:function en(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j_:function j_(a){this.a=a}},Z={
mx:function(a,b,c){var u
H.l(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cp(c)),35044)
a.bindBuffer(b,null)
return new Z.ey(b,u)},
aO:function(a){return new Z.bx(a)},
ey:function ey(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
d9:function d9(a){this.a=a},
c2:function c2(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a){this.a=a}},D={
N:function(){var u=new D.c6()
u.sam(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fO:function fO(){},
c6:function c6(){var _=this
_.d=_.c=_.b=_.a=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
z:function z(){this.b=null},
bL:function bL(a){this.b=null
this.$ti=a},
bM:function bM(a){this.b=null
this.$ti=a},
K:function K(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bI:function bI(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
af:function af(){},
dW:function dW(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e9:function e9(){},
ei:function ei(){}},X={dE:function dE(a,b){this.a=a
this.b=b},dV:function dV(a,b){this.a=a
this.b=b},hu:function hu(){var _=this
_.d=_.c=_.b=_.a=null},dZ:function dZ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hC:function hC(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},bt:function bt(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i0:function i0(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cQ:function cQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ih:function ih(){},ep:function ep(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j3:function j3(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eu:function eu(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lZ:function(a){var u=new X.hi(),t=new V.ae(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.ll()
u.r=t
return u},
m8:function(a){var u,t,s=new X.e8()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gf5())
t=new D.K("mover",u,s.b,[U.aj])
t.b=!0
s.a2(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.P().a)){s.c=1.0471975511965976
t=new D.K("fov",t,1.0471975511965976,[P.B])
t.b=!0
s.a2(t)}t=s.d
if(!(Math.abs(t-0.1)<$.P().a)){s.d=0.1
t=new D.K("near",t,0.1,[P.B])
t.b=!0
s.a2(t)}t=s.e
if(!(Math.abs(t-2000)<$.P().a)){s.e=2000
t=new D.K("far",t,2000,[P.B])
t.b=!0
s.a2(t)}return s},
fI:function fI(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c3:function c3(){},
hi:function hi(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(){this.b=this.a=null},
e8:function e8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){},
n0:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="modifiers",a9=34067,b0=V.of("Test 029"),b1=W.l7()
b1.className="pageLargeCanvas"
b1.id=a5
b0.a.appendChild(b1)
u=[P.h]
b0.dN(H.d(["Test of bump distort pass. It renders the scene to a back buffer then ","paints that back buffer texture to the front buffer with a distortion."],u))
b0.ih(H.d(["bumpMaps"],u))
b0.dN(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a5)
if(t==null)H.C(P.D("Failed to find an element with the identifier, testCanvas."))
s=E.oj(t,!0,!0,!0,!1)
r=new U.cL()
q=U.aj
r.bj(q)
r.aY(r.gfJ(),r.ghm())
r.e=null
r.f=V.bP()
r.r=0
p=s.r
o=new U.ew()
n=U.l9()
n.scR(0,!0)
n.scA(6.283185307179586)
n.scC(0)
n.sah(0,0)
n.scB(100)
n.sW(0)
n.scd(0.5)
o.b=n
m=o.gaP()
n.gq().h(0,m)
n=U.l9()
n.scR(0,!0)
n.scA(6.283185307179586)
n.scC(0)
n.sah(0,0)
n.scB(100)
n.sW(0)
n.scd(0.5)
o.c=n
n.gq().h(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.aB(!1,!1,!1)
k=o.d
o.d=l
n=[X.aB]
m=new D.K(a8,k,l,n)
m.b=!0
o.O(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.K("invertX",m,!1,[P.R])
m.b=!0
o.O(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.K("invertY",m,!1,[P.R])
m.b=!0
o.O(m)}o.b5(p)
r.h(0,o)
p=s.r
o=new U.ev()
m=U.l9()
m.scR(0,!0)
m.scA(6.283185307179586)
m.scC(0)
m.sah(0,0)
m.scB(100)
m.sW(0)
m.scd(0.2)
o.b=m
m.gq().h(0,o.gaP())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.aB(!0,!1,!1)
k=o.c
o.c=l
m=new D.K(a8,k,l,n)
m.b=!0
o.O(m)
o.b5(p)
r.h(0,o)
p=s.r
o=new U.ex()
o.c=0.01
o.e=o.d=0
l=new X.aB(!1,!1,!1)
o.b=l
n=new D.K(a8,a6,l,n)
n.b=!0
o.O(n)
o.b5(p)
r.h(0,o)
r.h(0,U.lT(V.bd(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.m8(r)
i=new X.fI()
i.d=i.c=i.b=i.a=512
i.e=!0
i.f=!1
i.x=i.r=1
i.ch=T.lm(a6)
i.cx=new V.ae(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.ll()
i.saq(0,512)
i.sao(0,512)
h=new V.ae(0,0,0,1)
if(!i.cx.v(0,h)){k=i.cx
i.cx=h
p=new D.K("color",k,h,[V.ae])
p.b=!0
i.a2(p)}if(i.cy){i.cy=!1
p=new D.K("clearColor",!0,!1,[P.R])
p.b=!0
i.a2(p)}p=i.db
if(!(Math.abs(p-2000)<$.P().a)){i.db=2000
p=new D.K("depth",p,2000,[P.B])
p.b=!0
i.a2(p)}if(!i.f){i.f=!0
p=new D.K("autoResize",!1,!0,[P.R])
p.b=!0
i.a2(p)}p=i.r
if(!(Math.abs(p-1)<$.P().a)){i.r=1
p=new D.K("autoResizeScalarX",p,1,[P.B])
p.b=!0
i.a2(p)}p=i.x
if(!(Math.abs(p-1)<$.P().a)){i.x=1
p=new D.K("autoResizeScalarY",p,1,[P.B])
p.b=!0
i.a2(p)}g=V.ll()
if(!J.V(i.dy,g)){k=i.dy
i.dy=g
p=new D.K("region",k,g,[V.cX])
p.b=!0
i.a2(p)}f=E.lY()
f.sbD(0,F.pS())
e=new O.e0()
e.sfc(O.l8(V.av))
e.e.aY(e.gfN(),e.gfP())
p=new O.bc(e,"emission")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
e.f=p
p=new O.bc(e,"ambient")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
e.r=p
p=new O.bc(e,"diffuse")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
e.x=p
p=new O.bc(e,"invDiffuse")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
e.y=p
p=new O.hO(e,"specular")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
p.ch=100
e.z=p
p=new O.hK(e,"bump")
p.c=new A.ap(!1,!1,!1)
e.Q=p
e.ch=null
p=new O.bc(e,"reflect")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
e.cx=p
p=new O.hN(e,"refract")
p.c=new A.ap(!1,!1,!1)
p.f=new V.a5(0,0,0)
p.ch=1
e.cy=p
p=new O.hJ(e,"alpha")
p.c=new A.ap(!1,!1,!1)
p.f=1
e.db=p
p=new D.dW()
p.bj(D.af)
p.sfm(H.d([],[D.bI]))
p.shA(H.d([],[D.e9]))
p.si1(H.d([],[D.ei]))
p.y=p.x=null
p.cU(p.gfL(),p.ghk(),p.gho())
e.dx=p
o=new O.hM()
o.b=new V.ae(0,0,0,0)
o.c=1
o.d=10
o.e=!1
e.dy=o
o=p.x
p=o==null?p.x=D.N():o
p.h(0,e.ghN())
p=e.dx
o=p.y
p=o==null?p.y=D.N():o
p.h(0,e.gbH())
e.fr=null
p=e.dx
d=V.lr()
o=U.lT(V.m3(V.mb(),d,new V.Q(0,-1,-1)))
h=new V.a5(1,1,1)
n=new D.bI()
n.c=new V.a5(1,1,1)
n.a=V.mw()
n.d=V.lr()
n.e=V.ot()
k=n.b
n.b=o
o.gq().h(0,n.geZ())
q=new D.K("mover",k,n.b,[q])
q.b=!0
n.az(q)
if(!n.c.v(0,h)){k=n.c
n.c=h
q=new D.K("color",k,h,[V.a5])
q.b=!0
n.az(q)}p.h(0,n)
q=e.r
q.sb7(0,new V.a5(0,0,1))
q=e.x
q.sb7(0,new V.a5(0,1,0))
q=e.z
q.sb7(0,new V.a5(1,0,0))
q=e.z
q.dD(new A.ap(!0,!1,!1))
q.dE(10)
q=s.f
p=q.a
c=p.createTexture()
p.bindTexture(a9,c)
p.texParameteri(a9,10242,10497)
p.texParameteri(a9,10243,10497)
p.texParameteri(a9,10241,9729)
p.texParameteri(a9,10240,9729)
p.bindTexture(a9,a6)
b=new T.em()
b.a=0
b.b=c
b.c=!1
b.d=0
q.aO(b,c,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aO(b,c,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aO(b,c,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aO(b,c,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aO(b,c,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aO(b,c,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=M.lU()
q=new O.ef()
q.b=1.0471975511965976
q.d=new V.a5(1,1,1)
k=q.c
q.c=b
b.gq().h(0,q.gbH())
p=new D.K("boxTexture",k,q.c,[T.em])
p.b=!0
q.a5(p)
a.saW(q)
a.sbe(0,i)
a.sb6(j)
a0=new M.dM()
a0.a=!0
a0.sff(0,O.l8(E.aq))
a0.e.aY(a0.gfT(),a0.gfV())
a0.y=a0.x=a0.r=a0.f=null
a1=X.lZ(a6)
a0.sb6(a6)
a0.sbe(0,a1)
a0.saW(a6)
a0.sb6(j)
a0.saW(e)
a0.sbe(0,i)
a0.e.h(0,f)
a2=new O.h_()
a2.sdU(a6)
a2.sdS(a6)
a3=V.m2()
if(!J.V(a2.d,a3)){a2.d=a3
a2.at()}a3=V.m2()
if(!J.V(a2.e,a3)){a2.e=a3
a2.at()}a2.sdR(a6)
a2.sdU(i.ch)
a2.sdR(V.m4(0.05,0.05,0.05))
a4=M.lU()
a4.saW(a2)
q=M.aD
p=H.d([a,a0,a4],[q])
o=new M.dF()
o.bj(q)
o.e=!0
o.f=!1
o.r=null
o.aY(o.ghq(),o.ghs())
o.ad(0,p)
q=s.d
if(q!==o){if(q!=null)q.gq().R(0,s.gd_())
s.d=o
o.gq().h(0,s.gd_())
s.d0()}q=new V.iT(a7,new X.kW(a2,s))
u=u.getElementById(a7)
q.c=u
if(u==null)H.C("Failed to find bumpMaps for Texture2DGroup")
q.dL(0,"../resources/BumpMap1.png",!0)
q.h(0,"../resources/BumpMap2.png")
q.h(0,"../resources/BumpMap3.png")
q.h(0,"../resources/BumpMap4.png")
q.h(0,"../resources/BumpMap5.png")
q.h(0,"../resources/ScrewBumpMap.png")
q.h(0,"../resources/CtrlPnlBumpMap.png")
u=s.z
if(u==null)u=s.z=D.N()
q={func:1,ret:-1,args:[D.z]}
p=H.n(new X.kX(b0,a2),q)
if(u.b==null)u.saQ(H.d([],[q]))
u=u.b;(u&&C.a).h(u,p)
V.pN(s)},
kW:function kW(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b}},V={
pT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bg(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.b.aG("null",c)
return C.b.aG(C.c.ex(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cu:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.B],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.Y(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.aG(u[p],s))}return u},
du:function(a){return C.c.jo(Math.pow(2,C.S.cp(Math.log(H.po(a))/Math.log(2))))},
m2:function(){var u=$.m1
return u==null?$.m1=new V.cN(1,0,0,0,1,0,0,0,1):u},
bP:function(){var u=$.m5
return u==null?$.m5=V.bd(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bd:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){return V.bd(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
m3:function(a,b,c){var u=c.w(0,Math.sqrt(c.D(c))),t=b.aE(u),s=t.w(0,Math.sqrt(t.D(t))),r=u.aE(s),q=new V.Q(a.a,a.b,a.c),p=s.S(0).D(q),o=r.S(0).D(q),n=u.S(0).D(q)
return V.bd(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bu:function(){var u=$.ma
return u==null?$.ma=new V.a9(0,0):u},
mb:function(){var u=$.cV
return u==null?$.cV=new V.a8(0,0,0):u},
ll:function(){var u=$.mf
return u==null?$.mf=V.me(0,0,1,1):u},
me:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cX(a,b,c,d)},
d8:function(){var u=$.mv
return u==null?$.mv=new V.Q(0,0,0):u},
ot:function(){var u=$.jv
return u==null?$.jv=new V.Q(-1,0,0):u},
lr:function(){var u=$.jw
return u==null?$.jw=new V.Q(0,1,0):u},
mw:function(){var u=$.jx
return u==null?$.jx=new V.Q(0,0,1):u},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
cN:function cN(a,b,c,d,e,f,g,h,i){var _=this
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
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.D("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.F(a,0)
t=C.b.F(b,0)
s=new V.ij()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.it()
u.eU(a)
return u},
j2:function(){var u=new V.j1(),t=P.h
u.si2(new H.a4([t,V.d_]))
u.si5(new H.a4([t,V.d4]))
u.c=null
return u},
bo:function bo(){},
aA:function aA(){},
e_:function e_(){},
aw:function aw(){this.a=null},
ij:function ij(){this.b=this.a=null},
it:function it(){this.a=null},
d_:function d_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a){this.b=a
this.c=null},
j1:function j1(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
pN:function(a){P.ok(C.P,new V.l_(a))},
of:function(a){var u=new V.ix()
u.eV(a,!0)
return u},
bG:function bG(){},
l_:function l_(a){this.a=a},
fY:function fY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ie:function ie(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ix:function ix(){this.b=this.a=null},
iz:function iz(a){this.a=a},
iy:function iy(a){this.a=a},
iA:function iA(a){this.a=a},
iT:function iT(a,b){this.a=a
this.c=null
this.d=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(){}},U={
l9:function(){var u=new U.fP()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lT:function(a){var u=new U.dG()
u.a=a
return u},
fP:function fP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){this.b=this.a=null},
cL:function cL(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ev:function ev(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lU:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dH()
k.a=!0
u=E.lY()
t=F.mh()
s=t.a
r=new V.Q(-1,-1,1)
r=r.w(0,Math.sqrt(r.D(r)))
q=s.bo(new V.bf(1,2,4,6),new V.ae(1,0,0,1),new V.a8(-1,-1,0),new V.a9(0,1),r,l)
s=t.a
r=new V.Q(1,-1,1)
r=r.w(0,Math.sqrt(r.D(r)))
p=s.bo(new V.bf(0,3,4,6),new V.ae(0,0,1,1),new V.a8(1,-1,0),new V.a9(1,1),r,l)
s=t.a
r=new V.Q(1,1,1)
r=r.w(0,Math.sqrt(r.D(r)))
o=s.bo(new V.bf(0,2,5,6),new V.ae(0,1,0,1),new V.a8(1,1,0),new V.a9(1,0),r,l)
s=t.a
r=V.bu()
n=new V.Q(-1,1,1)
n=n.w(0,Math.sqrt(n.D(n)))
m=s.bo(new V.bf(0,2,4,7),new V.ae(1,1,0,1),new V.a8(-1,1,0),r,n,l)
t.d.ij(H.d([q,p,o,m],[F.ar]))
t.aD()
u.sbD(0,t)
k.e=u
k.sb6(l)
k.sbe(0,l)
k.saW(l)
return k},
dF:function dF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dH:function dH(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aD:function aD(){}},A={
nX:function(a,b){var u=a.ba,t=new A.e1(b,u)
t.bG(b,u)
t.eS(a,b)
return t},
nY:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aG],"$ab")
H.l(b0,"$ib",[A.aJ],"$ab")
H.l(b1,"$ib",[A.aK],"$ab")
u="MaterialLight_"+a0.gav(a0)+a1.gav(a1)+a2.gav(a2)+a3.gav(a3)+a4.gav(a4)+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.y)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.y)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.y)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.aE()
if(j){t=$.bC()
f=new Z.bx(f.a|t.a)}if(i){t=$.bB()
f=new Z.bx(f.a|t.a)}if(h){t=$.bA()
f=new Z.bx(f.a|t.a)}return new A.hL(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kJ:function(a,b,c){var u
A.kI(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.l0(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oZ:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kI(b,t,"emission")
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
A.kJ(b,t,"ambient")
b.a+="\n"},
oX:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kJ(b,t,"diffuse")
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
A.kJ(b,t,"invDiffuse")
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
A.kJ(b,t,"specular")
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
A.kI(b,t,"reflect")
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
A.kI(b,t,"refract")
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
t="dirLight"+H.j(u)
s=A.l0(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ar()
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
c.a+="      highLight = intensity*("+C.a.n(m," + ")+");\n"}else c.a+="   highLight = "+C.a.n(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.n(o," + ")+");\n"
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
t="pointLight"+H.j(u)
s=A.l0(t)
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
if(typeof u!=="number")return u.ar()
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
o=c.a+="   return "+C.a.n(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.n(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.n(l," + ")+");\n"
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
t="spotLight"+H.j(u)
s=A.l0(t)
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
if(typeof u!=="number")return u.ar()
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
r=c.a+="   return "+C.a.n(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.n(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.n(j," + ")+");\n"
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
t=H.d([],[P.h])
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
u=b.a+="   return "+C.a.n(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
p7:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ai("")
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.oY(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.p2(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)A.p6(a,q[o],j)
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
n=H.d([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.y)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.e(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.n(n," + ")+", alpha);\n"
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
l0:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ag(a,1)},
lo:function(a,b,c,d,e){var u=new A.jb(a,c,e)
u.f=d
u.sie(P.nV(d,0,P.m))
return u},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(a,b){var _=this
_.jD=_.jC=_.e_=_.dZ=_.ba=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jQ=_.jP=_.jO=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.jN=_.jM=_.e6=_.jL=_.jK=_.e5=_.e4=_.jJ=_.jI=_.e3=_.e2=_.jH=_.jG=_.e1=_.jF=_.jE=_.e0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aG:function aG(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ba=b3
_.dZ=b4},
ck:function ck(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cl:function cl(a,b,c,d,e,f,g,h,i,j){var _=this
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
cm:function cm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eq:function eq(){},
jg:function jg(a){this.a=a},
aN:function aN(a,b,c){this.a=a
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
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
bU:function bU(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c}},F={
pS:function(){return F.ps(15,30,0.5,1,new F.l1())},
ps:function(a,b,c,d,e){var u=F.pQ(a,b,new F.kO(H.n(e,{func:1,ret:V.a8,args:[P.B]}),d,b,c))
if(u==null)return
u.aD()
u.iZ(new F.jE(),new F.i8())
return u},
pQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ar,P.B,P.B]})
if(a<1)return
if(b<1)return
u=F.mh()
t=H.d([],[F.ar])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jy(g,g,new V.ae(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dV(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jy(g,g,new V.ae(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dV(g))}}u.d.ik(a+1,b+1,t)
return u},
dO:function(a,b,c){var u=new F.ab(),t=a.a
if(t==null)H.C(P.D("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.C(P.D("May not create a face with vertices attached to different shapes."))
u.hT(a)
u.hU(b)
u.hV(c)
C.a.h(u.a.a.d.b,u)
u.a.a.aj()
return u},
mh:function(){var u=new F.ee(),t=new F.jz(u)
t.b=!1
t.sig(H.d([],[F.ar]))
u.a=t
t=new F.iw()
t.sc_(H.d([],[F.cd]))
u.b=t
t=new F.iv(u)
t.sfw(H.d([],[F.bO]))
u.c=t
t=new F.iu(u)
t.sfp(H.d([],[F.ab]))
u.d=t
u.e=null
return u},
jy:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ar(),r=new F.jH()
r.sc_(H.d([],[F.cd]))
s.b=r
r=new F.jD()
u=[F.bO]
r.sfz(H.d([],u))
r.sfA(H.d([],u))
s.c=r
r=new F.jA()
u=[F.ab]
r.sfq(H.d([],u))
r.sfs(H.d([],u))
r.sft(H.d([],u))
s.d=r
h=$.nk()
s.e=0
r=$.aE()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bC().a)!==0?e:t
s.x=(u&$.bB().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.c_().a)!==0?g:t
s.Q=(u&$.nl().a)!==0?c:t
s.ch=(u&$.cA().a)!==0?i:0
s.cx=(u&$.bA().a)!==0?a:t
return s},
l1:function l1(){},
kO:function kO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(){},
iB:function iB(){},
bO:function bO(){},
hw:function hw(){},
ja:function ja(){},
cd:function cd(){},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a){this.a=a
this.b=null},
iv:function iv(a){this.a=a
this.b=null},
iw:function iw(){this.b=null},
ar:function ar(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jJ:function jJ(a){this.a=a},
jI:function jI(a){this.a=a},
jz:function jz(a){this.a=a
this.c=this.b=null},
jA:function jA(){this.d=this.c=this.b=null},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(){this.c=this.b=null},
jF:function jF(){},
jE:function jE(){},
jG:function jG(){},
i8:function i8(){},
jH:function jH(){this.b=null}},T={
lm:function(a){var u=new T.iW()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bS:function bS(){},
iS:function iS(){},
iW:function iW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iX:function iX(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iZ:function iZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iY:function iY(a,b,c,d,e,f,g){var _=this
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
H.lf.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gH:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.cf(a)+"'"}}
J.hr.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iR:1}
J.dT.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dU.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.id.prototype={}
J.bW.prototype={}
J.bs.prototype={
i:function(a){var u=a[$.n8()]
if(u==null)return this.eO(a)
return"JavaScript function for "+H.j(J.aR(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibK:1}
J.aU.prototype={
h:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.C(P.I("add"))
a.push(b)},
eo:function(a,b){if(!!a.fixed$length)H.C(P.I("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eb(b,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.C(P.I("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
H.l(b,"$ii",[H.q(a,0)],"$ai")
if(!!a.fixed$length)H.C(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
C:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b5(a))}},
n:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
iU:function(a){return this.n(a,"")},
iN:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b5(a))}return t},
iM:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.b5(a))}throw H.c(H.hq())},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eL:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
giL:function(a){if(a.length>0)return a[0]
throw H.c(H.hq())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hq())},
bh:function(a,b,c,d){var u,t,s=H.q(a,0)
H.l(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.C(P.I("setRange"))
P.bv(b,c,a.length)
u=c-b
if(u===0)return
P.lk(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cv(d)
if(u>s.gl(d))throw H.c(H.nO())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dO:function(a,b){var u,t
H.n(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.b5(a))}return!1},
bE:function(a,b){var u=H.q(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.C(P.I("sort"))
H.eh(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.lc(a,"[","]")},
gT:function(a){return new J.au(a,a.length,[H.q(a,0)])},
gH:function(a){return H.cW(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.C(P.I("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ct(a,b))
return a[b]},
k:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.C(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ct(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.q(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gl(b))
t=H.d([],t)
this.sl(t,u)
this.bh(t,0,a.length,a)
this.bh(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.le.prototype={}
J.au.prototype={
gI:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.y(s))
u=t.c
if(u>=r){t.sd2(null)
return!1}t.sd2(s[u]);++t.c
return!0},
sd2:function(a){this.d=H.A(a,H.q(this,0))},
$ib9:1}
J.bN.prototype={
ix:function(a,b){var u
H.n1(b)
if(typeof b!=="number")throw H.c(H.at(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbr(b)
if(this.gbr(a)===u)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
jo:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
cp:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
ex:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.C(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
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
u:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a*b},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.dG(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i_:function(a,b){if(b<0)throw H.c(H.at(b))
return this.dG(a,b)},
dG:function(a,b){return b>31?0:a>>>b},
as:function(a,b){if(typeof b!=="number")throw H.c(H.at(b))
return a>b},
$iB:1,
$iad:1}
J.dS.prototype={$im:1}
J.dR.prototype={}
J.br.prototype={
a0:function(a,b){if(b<0)throw H.c(H.ct(a,b))
if(b>=a.length)H.C(H.ct(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.ct(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l5(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.bv(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.al(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.C(H.at(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.eb(b,null))
if(b>c)throw H.c(P.eb(b,null))
if(c>a.length)throw H.c(P.eb(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.A(a,b,null)},
jr:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aG:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
ee:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ed:function(a,b){return this.ee(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im7:1,
$ih:1}
H.t.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a0(this.a,b)},
$ad7:function(){return[P.m]},
$av:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h5.prototype={}
H.cb.prototype={
gT:function(a){var u=this
return new H.cM(u,u.gl(u),[H.am(u,"cb",0)])},
bA:function(a,b){return this.eN(0,H.n(b,{func:1,ret:P.R,args:[H.am(this,"cb",0)]}))}}
H.cM.prototype={
gI:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.cv(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.b5(s))
u=t.c
if(u>=q){t.sb0(null)
return!1}t.sb0(r.J(s,u));++t.c
return!0},
sb0:function(a){this.d=H.A(a,H.q(this,0))},
$ib9:1}
H.hG.prototype={
gT:function(a){return new H.hH(J.bD(this.a),this.b,this.$ti)},
gl:function(a){return J.aF(this.a)},
J:function(a,b){return this.b.$1(J.fy(this.a,b))},
$ai:function(a,b){return[b]}}
H.hH.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.sb0(u.c.$1(t.gI(t)))
return!0}u.sb0(null)
return!1},
gI:function(a){return this.a},
sb0:function(a){this.a=H.A(a,H.q(this,1))},
$ab9:function(a,b){return[b]}}
H.hI.prototype={
gl:function(a){return J.aF(this.a)},
J:function(a,b){return this.b.$1(J.fy(this.a,b))},
$acb:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.da.prototype={
gT:function(a){return new H.jL(J.bD(this.a),this.b,this.$ti)}}
H.jL.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.F(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.c7.prototype={}
H.d7.prototype={
k:function(a,b,c){H.A(c,H.am(this,"d7",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.es.prototype={}
H.fR.prototype={
i:function(a){return P.lj(this)},
k:function(a,b,c){H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
return H.nH()},
$ix:1}
H.fS.prototype={
gl:function(a){return this.a},
bp:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bp(0,b))return
return this.di(b)},
di:function(a){return this.b[H.J(a)]},
C:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.n(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.di(r),p))}}}
H.j7.prototype={
ap:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ht.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jk.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l2.prototype={
$1:function(a){if(!!J.T(a).$ibJ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.f6.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iax:1}
H.cF.prototype={
i:function(a){return"Closure '"+H.cf(this).trim()+"'"},
$ibK:1,
gjw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iP.prototype={}
H.iF.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cz(u)+"'"}}
H.cC.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cC))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cW(this.a)
else u=typeof t!=="object"?J.dy(t):H.cW(t)
return(u^H.cW(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.cf(u)+"'")}}
H.j9.prototype={
i:function(a){return this.a}}
H.fN.prototype={
i:function(a){return this.a}}
H.ir.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jM.prototype={
i:function(a){return"Assertion failed: "+P.dN(this.a)}}
H.a4.prototype={
gl:function(a){return this.a},
giT:function(a){return this.a===0},
ga9:function(a){return new H.hy(this,[H.q(this,0)])},
bp:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.de(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.de(t,b)}else return s.iQ(b)},
iQ:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cu(u.bO(t,u.ct(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bl(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bl(r,b)
s=t==null?null:t.b
return s}else return q.iR(b)},
iR:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bO(r,s.ct(a))
t=s.cu(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.A(b,H.q(s,0))
H.A(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.d4(u==null?s.b=s.bY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d4(t==null?s.c=s.bY():t,b,c)}else s.iS(b,c)},
iS:function(a,b){var u,t,s,r,q=this
H.A(a,H.q(q,0))
H.A(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bY()
t=q.ct(a)
s=q.bO(u,t)
if(s==null)q.c2(u,t,[q.bZ(a,b)])
else{r=q.cu(s,a)
if(r>=0)s[r].b=b
else s.push(q.bZ(a,b))}},
C:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.b5(s))
u=u.c}},
d4:function(a,b,c){var u,t=this
H.A(b,H.q(t,0))
H.A(c,H.q(t,1))
u=t.bl(a,b)
if(u==null)t.c2(a,b,t.bZ(b,c))
else u.b=c},
fG:function(){this.r=this.r+1&67108863},
bZ:function(a,b){var u,t=this,s=new H.hx(H.A(a,H.q(t,0)),H.A(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fG()
return s},
ct:function(a){return J.dy(a)&0x3ffffff},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.lj(this)},
bl:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
c2:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
de:function(a,b){return this.bl(a,b)!=null},
bY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c2(t,u,t)
this.fk(t,u)
return t}}
H.hx.prototype={}
H.hy.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hz(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hz.prototype={
gI:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b5(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(t.a)
u.c=u.c.c
return!0}}},
sd3:function(a){this.d=H.A(a,H.q(this,0))},
$ib9:1}
H.kR.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.kS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kT.prototype={
$1:function(a){return this.a(H.J(a))},
$S:57}
H.hs.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im7:1,
$iob:1}
H.cR.prototype={$icR:1}
H.bQ.prototype={$ibQ:1,$iol:1}
H.e3.prototype={
gl:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cS.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pu(c)
H.bm(b,a,a.length)
a[b]=c},
$ac7:function(){return[P.B]},
$av:function(){return[P.B]},
$ii:1,
$ai:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.e4.prototype={
k:function(a,b,c){H.a2(c)
H.bm(b,a,a.length)
a[b]=c},
$ac7:function(){return[P.m]},
$av:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.i1.prototype={
j:function(a,b){H.bm(b,a,a.length)
return a[b]}}
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
H.e5.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$iqd:1}
H.cT.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bm(b,a,a.length)
return a[b]},
$icT:1,
$iU:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
P.jO.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.jN.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.jP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fc.prototype={
f3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cs(new P.ku(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cs(new P.kt(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibh:1}
P.ku.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kt.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eR(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bl.prototype={
iX:function(a){if(this.c!==6)return!0
return this.b.b.cN(H.n(this.d,{func:1,ret:P.R,args:[P.S]}),a.a,P.R,P.S)},
iP:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fv(u,{func:1,args:[P.S,P.ax]}))return H.lE(r.jk(u,a.a,a.b,null,t,P.ax),s)
else return H.lE(r.cN(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aP.prototype={
ew:function(a,b,c){var u,t,s,r=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pg(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aP($.a1,[c])
s=b==null?1:3
this.d5(new P.bl(t,s,a,b,[r,c]))
return t},
jn:function(a,b){return this.ew(a,null,b)},
d5:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibl")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaP")
s=u.a
if(s<4){u.d5(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kM(null,null,s,H.n(new P.jZ(t,a),{func:1,ret:-1}))}},
dv:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibl")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaP")
u=q.a
if(u<4){q.dv(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
u=p.b
u.toString
P.kM(null,null,u,H.n(new P.k2(o,p),{func:1,ret:-1}))}},
c1:function(){var u=H.f(this.c,"$ibl")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d9:function(a){var u,t,s=this,r=H.q(s,0)
H.lE(a,{futureOr:1,type:r})
u=s.$ti
if(H.lB(a,"$icK",u,"$acK"))if(H.lB(a,"$iaP",u,null))P.my(a,s)
else P.oy(a,s)
else{t=s.c1()
H.A(a,r)
s.a=4
s.c=a
P.dd(s,t)}},
da:function(a,b){var u,t=this
H.f(b,"$iax")
u=t.c1()
t.a=8
t.c=new P.ao(a,b)
P.dd(t,u)},
$icK:1}
P.jZ.prototype={
$0:function(){P.dd(this.a,this.b)},
$S:2}
P.k2.prototype={
$0:function(){P.dd(this.b,this.a.a)},
$S:2}
P.k_.prototype={
$1:function(a){var u=this.a
u.a=0
u.d9(a)},
$S:30}
P.k0.prototype={
$2:function(a,b){H.f(b,"$iax")
this.a.da(a,b)},
$1:function(a){return this.$2(a,null)},
$S:52}
P.k1.prototype={
$0:function(){this.a.da(this.b,this.c)},
$S:2}
P.k5.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.er(H.n(s.d,{func:1}),null)}catch(r){u=H.an(r)
t=H.cx(r)
if(o.d){s=H.f(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.T(n).$icK){if(n instanceof P.aP&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jn(new P.k6(p),null)
s.a=!1}},
$S:3}
P.k6.prototype={
$1:function(a){return this.a},
$S:48}
P.k4.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.A(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cN(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.an(o)
t=H.cx(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.k3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iao")
r=m.c
if(H.F(r.iX(u))&&r.e!=null){q=m.b
q.b=r.iP(u)
q.a=!1}}catch(p){t=H.an(p)
s=H.cx(p)
r=H.f(m.a.a.c,"$iao")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.ez.prototype={}
P.iI.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aP($.a1,[P.m])
r.a=0
u=H.q(s,0)
t=H.n(new P.iK(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iL(r,q),{func:1,ret:-1})
W.aa(s.a,s.b,t,!1,u)
return q}}
P.iK.prototype={
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.q(this.b,0)]}}}
P.iL.prototype={
$0:function(){this.b.d9(this.a.a)},
$S:2}
P.d0.prototype={}
P.iJ.prototype={}
P.bh.prototype={}
P.ao.prototype={
i:function(a){return H.j(this.a)},
$ibJ:1}
P.kD.prototype={$iqs:1}
P.kL.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e7():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:2}
P.kc.prototype={
jl:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.an(s)
t=H.cx(s)
P.kK(r,r,this,u,H.f(t,"$iax"))}},
jm:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.an(s)
t=H.cx(s)
P.kK(r,r,this,u,H.f(t,"$iax"))}},
iu:function(a,b){return new P.ke(this,H.n(a,{func:1,ret:b}),b)},
c5:function(a){return new P.kd(this,H.n(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.kf(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
er:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cN:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a1===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
jk:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.ph(null,null,this,a,b,c,d,e,f)}}
P.ke.prototype={
$0:function(){return this.a.er(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kd.prototype={
$0:function(){return this.a.jl(this.b)},
$S:3}
P.kf.prototype={
$1:function(a){var u=this.c
return this.a.jm(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ka.prototype={
gT:function(a){var u=this,t=new P.eO(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icn")!=null}else{t=this.fg(b)
return t}},
fg:function(a){var u=this.d
if(u==null)return!1
return this.bM(this.dj(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d6(u==null?s.b=P.lt():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d6(t==null?s.c=P.lt():t,b)}else return s.f7(0,b)},
f7:function(a,b){var u,t,s,r=this
H.A(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lt()
t=r.dc(b)
s=u[t]
if(s==null)u[t]=[r.bJ(b)]
else{if(r.bM(s,b)>=0)return!1
s.push(r.bJ(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hG(this.c,b)
else return this.hF(0,b)},
hF:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dj(r,b)
t=s.bM(u,b)
if(t<0)return!1
s.dI(u.splice(t,1)[0])
return!0},
d6:function(a,b){H.A(b,H.q(this,0))
if(H.f(a[b],"$icn")!=null)return!1
a[b]=this.bJ(b)
return!0},
hG:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icn")
if(u==null)return!1
this.dI(u)
delete a[b]
return!0},
d8:function(){this.r=1073741823&this.r+1},
bJ:function(a){var u,t=this,s=new P.cn(H.A(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d8()
return s},
dI:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d8()},
dc:function(a){return J.dy(a)&1073741823},
dj:function(a,b){return a[this.dc(b)]},
bM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.cn.prototype={}
P.eO.prototype={
gI:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b5(t))
else{t=u.c
if(t==null){u.sd7(null)
return!1}else{u.sd7(H.A(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
sd7:function(a){this.d=H.A(a,H.q(this,0))},
$ib9:1}
P.hA.prototype={
$2:function(a,b){this.a.k(0,H.A(a,this.b),H.A(b,this.c))},
$S:6}
P.hB.prototype={$ii:1,$ib:1}
P.v.prototype={
gT:function(a){return new H.cM(a,this.gl(a),[H.bz(this,a,"v",0)])},
J:function(a,b){return this.j(a,b)},
C:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bz(s,a,"v",0)]})
u=s.gl(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gl(a))throw H.c(P.b5(a))}},
jq:function(a,b){var u,t=this,s=H.d([],[H.bz(t,a,"v",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jp:function(a){return this.jq(a,!0)},
p:function(a,b){var u,t=this,s=[H.bz(t,a,"v",0)]
H.l(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.e.p(t.gl(a),b.gl(b)))
C.a.bh(u,0,t.gl(a),a)
C.a.bh(u,t.gl(a),u.length,b)
return u},
iJ:function(a,b,c,d){var u
H.A(d,H.bz(this,a,"v",0))
P.bv(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lc(a,"[","]")}}
P.hD.prototype={}
P.hE.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:6}
P.ag.prototype={
C:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bz(s,a,"ag",0),H.bz(s,a,"ag",1)]})
for(u=J.bD(s.ga9(a));u.B();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aF(this.ga9(a))},
i:function(a){return P.lj(a)},
$ix:1}
P.kv.prototype={
k:function(a,b,c){H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hF.prototype={
j:function(a,b){return J.dx(this.a,b)},
k:function(a,b,c){J.l3(this.a,H.A(b,H.q(this,0)),H.A(c,H.q(this,1)))},
C:function(a,b){J.lM(this.a,H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gl:function(a){return J.aF(this.a)},
i:function(a){return J.aR(this.a)},
$ix:1}
P.et.prototype={}
P.kh.prototype={
ad:function(a,b){var u
for(u=J.bD(H.l(b,"$ii",this.$ti,"$ai"));u.B();)this.h(0,u.gI(u))},
i:function(a){return P.lc(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.lk(b,"index")
for(u=P.oC(r,r.r,H.q(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ii:1,
$img:1}
P.eP.prototype={}
P.fi.prototype={}
P.fJ.prototype={
j_:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bv(a0,a1,b.length)
u=$.nn()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kQ(C.b.F(b,n))
j=H.kQ(C.b.F(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.cg(m)
s=n
continue}}throw H.c(P.a6("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.lP(b,p,a1,q,o,f)
else{e=C.e.bg(f-1,4)+1
if(e===1)throw H.c(P.a6(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lP(b,p,a1,q,o,d)
else{e=C.e.bg(d,4)
if(e===1)throw H.c(P.a6(c,b,a1))
if(e>1)b=C.b.aV(b,a1,a1,e===2?"==":"=")}return b},
$ac5:function(){return[[P.b,P.m],P.h]}}
P.fK.prototype={
$abH:function(){return[[P.b,P.m],P.h]}}
P.c5.prototype={}
P.bH.prototype={}
P.h7.prototype={
$ac5:function(){return[P.h,[P.b,P.m]]}}
P.hn.prototype={
i:function(a){return this.a}}
P.hm.prototype={
fh:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ai("")
if(r>b)q.a+=C.b.A(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nA(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abH:function(){return[P.h,P.h]}}
P.js.prototype={
giI:function(){return C.N}}
P.ju.prototype={
cc:function(a){var u,t,s=P.bv(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kB(u)
if(t.fu(a,0,s)!==s)t.dK(J.nw(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oS(0,t.b,u.length)))},
$abH:function(){return[P.h,[P.b,P.m]]}}
P.kB.prototype={
dK:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fu:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a0(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dK(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
cc:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.m],"$ab")
u=P.oo(!1,a,0,null)
if(u!=null)return u
t=P.bv(0,null,J.aF(a))
s=P.mN(a,0,t)
if(s>0){r=P.d1(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.kA(!1,q)
n.c=o
n.iy(a,p,t)
if(n.e>0){H.C(P.a6("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cg(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abH:function(){return[[P.b,P.m],P.h]}}
P.kA.prototype={
iy:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cv(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ar()
if((o&192)!==128){n=P.a6(h+C.e.bf(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a6("Overlong encoding of 0x"+C.e.bf(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a6("Character outside valid Unicode range: 0x"+C.e.bf(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cg(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d1(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a6("Negative UTF-8 code unit: -0x"+C.e.bf(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a6(h+C.e.bf(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.az.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.nI(H.o7(u)),s=P.dI(H.o5(u)),r=P.dI(H.o1(u)),q=P.dI(H.o2(u)),p=P.dI(H.o4(u)),o=P.dI(H.o6(u)),n=P.nJ(H.o3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.b8.prototype={
p:function(a,b){return new P.b8(C.e.p(this.a,b.gdh()))},
t:function(a,b){return new P.b8(C.e.t(this.a,b.gdh()))},
as:function(a,b){return C.e.as(this.a,b.gdh())},
v:function(a,b){if(b==null)return!1
return b instanceof P.b8&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.h4(),q=this.a
if(q<0)return"-"+new P.b8(0-q).i(0)
u=r.$1(C.e.ac(q,6e7)%60)
t=r.$1(C.e.ac(q,1e6)%60)
s=new P.h3().$1(q%1e6)
return""+C.e.ac(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.h4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bJ.prototype={}
P.fC.prototype={
i:function(a){return"Assertion failed"}}
P.e7.prototype={
i:function(a){return"Throw of null."}}
P.aS.prototype={
gbL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbK:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbL()+o+u
if(!q.a)return t
s=q.gbK()
r=P.dN(q.b)
return t+s+": "+r}}
P.ch.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hp.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t=H.a2(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gl:function(a){return this.f}}
P.jl.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ji.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fQ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dN(u)+"."}}
P.ic.prototype={
i:function(a){return"Out of Memory"},
$ibJ:1}
P.ej.prototype={
i:function(a){return"Stack Overflow"},
$ibJ:1}
P.fX.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eH.prototype={
i:function(a){return"Exception: "+this.a}}
P.hh.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bK.prototype={}
P.m.prototype={}
P.i.prototype={
bA:function(a,b){var u=H.am(this,"i",0)
return new H.da(this,H.n(b,{func:1,ret:P.R,args:[u]}),[u])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.B();)++u
return u},
gaL:function(a){var u,t=this.gT(this)
if(!t.B())throw H.c(H.hq())
u=t.gI(t)
if(t.B())throw H.c(H.nP())
return u},
J:function(a,b){var u,t,s
P.lk(b,"index")
for(u=this.gT(this),t=0;u.B();){s=u.gI(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nN(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ii:1}
P.x.prototype={}
P.L.prototype={
gH:function(a){return P.S.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ad.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
v:function(a,b){return this===b},
gH:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.cf(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.h.prototype={$im7:1}
P.ai.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq1:1}
P.jq.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$ix",[r,r],"$ax")
H.J(b)
u=J.ds(b).ed(b,"=")
if(u===-1){if(b!=="")J.l3(a,P.lv(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.ag(b,u+1)
r=this.a
J.l3(a,P.lv(t,0,t.length,r,!0),P.lv(s,0,s.length,r,!0))}return a},
$S:47}
P.jn.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv4 address, "+a,this.a,b))},
$S:46}
P.jo.prototype={
$2:function(a,b){throw H.c(P.a6("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jp.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dt(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.co.prototype={
geD:function(){return this.b},
gcq:function(a){var u=this.c
if(u==null)return""
if(C.b.a8(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbu:function(a){var u=this.d
if(u==null)return P.mC(this.a)
return u},
gcG:function(a){var u=this.f
return u==null?"":u},
ge8:function(){var u=this.r
return u==null?"":u},
ep:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$ix",[P.h,null],"$ax")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a8(p,"/"))p="/"+p
n=P.lu(null,0,0,b)
return new P.co(u,s,q,r,p,n,m.r)},
gcH:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shE(new P.et(P.mr(u==null?"":u),[t,t]))}return s.Q},
ge9:function(){return this.c!=null},
gec:function(){return this.f!=null},
gea:function(){return this.r!=null},
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
if(!!J.T(b).$ilp)if(s.a==b.gbC())if(s.c!=null===b.ge9())if(s.b==b.geD())if(s.gcq(s)==b.gcq(b))if(s.gbu(s)==b.gbu(b))if(s.e===b.gem(b)){u=s.f
t=u==null
if(!t===b.gec()){if(t)u=""
if(u===b.gcG(b)){u=s.r
t=u==null
if(!t===b.gea()){if(t)u=""
u=u===b.ge8()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shE:function(a){var u=P.h
this.Q=H.l(a,"$ix",[u,u],"$ax")},
$ilp:1,
gbC:function(){return this.a},
gem:function(a){return this.e}}
P.kw.prototype={
$1:function(a){throw H.c(P.a6("Invalid port",this.a,this.b+1))},
$S:19}
P.kx.prototype={
$1:function(a){return P.fj(C.X,a,C.h,!1)},
$S:20}
P.kz.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fj(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fj(C.n,b,C.h,!0))}},
$S:21}
P.ky.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bD(H.n_(b,"$ii")),t=this.a;u.B();)t.$2(a,H.J(u.gI(u)))},
$S:40}
P.jm.prototype={
geC:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.ee(u,"?",o)
s=u.length
if(t>=0){r=P.dp(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jU("data",p,p,p,P.dp(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kF.prototype={
$1:function(a){return new Uint8Array(96)},
$S:39}
P.kE.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nx(u,0,96,b)
return u},
$S:33}
P.kG.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kH.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kk.prototype={
ge9:function(){return this.c>0},
geb:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.E(t)
t=u+1<t
u=t}else u=!1
return u},
gec:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gea:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.b.a8(this.a,"http")},
gdm:function(){return this.b===5&&C.b.a8(this.a,"https")},
gbC:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdl())q=t.x="http"
else if(t.gdm()){t.x="https"
q="https"}else if(q===4&&C.b.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a8(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
geD:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gcq:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbu:function(a){var u,t=this
if(t.geb()){u=t.d
if(typeof u!=="number")return u.p()
return P.dt(C.b.A(t.a,u+1,t.e),null,null)}if(t.gdl())return 80
if(t.gdm())return 443
return 0},
gem:function(a){return C.b.A(this.a,this.e,this.f)},
gcG:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.A(this.a,u+1,t):""},
ge8:function(){var u=this.r,t=this.a
return u<t.length?C.b.ag(t,u+1):""},
gcH:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.h
return new P.et(P.mr(u.gcG(u)),[t,t])},
ep:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$ix",[P.h,null],"$ax")
u=k.gbC()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.geb()?k.gbu(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a8(o,"/"))o="/"+o
m=P.lu(j,0,0,b)
n=k.r
l=n<s.length?C.b.ag(s,n+1):j
return new P.co(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilp&&this.a===b.i(0)},
i:function(a){return this.a},
$ilp:1}
P.jU.prototype={}
W.u.prototype={}
W.fA.prototype={
gl:function(a){return a.length}}
W.dz.prototype={
i:function(a){return String(a)},
$idz:1}
W.fB.prototype={
i:function(a){return String(a)}}
W.cB.prototype={$icB:1}
W.c1.prototype={$ic1:1}
W.bE.prototype={$ibE:1}
W.c4.prototype={
cS:function(a,b,c){if(c!=null)return a.getContext(b,P.pp(c))
return a.getContext(b)},
eF:function(a,b){return this.cS(a,b,null)},
$ic4:1}
W.cE.prototype={$icE:1}
W.bF.prototype={
gl:function(a){return a.length}}
W.cG.prototype={$icG:1}
W.fT.prototype={
gl:function(a){return a.length}}
W.X.prototype={$iX:1}
W.cH.prototype={
gl:function(a){return a.length}}
W.fU.prototype={}
W.b6.prototype={}
W.b7.prototype={}
W.fV.prototype={
gl:function(a){return a.length}}
W.fW.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.h0.prototype={
i:function(a){return String(a)}}
W.dK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$iak",[P.ad],"$aak")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ak,P.ad]]},
$av:function(){return[[P.ak,P.ad]]},
$ii:1,
$ai:function(){return[[P.ak,P.ad]]},
$ib:1,
$ab:function(){return[[P.ak,P.ad]]},
$aH:function(){return[[P.ak,P.ad]]}}
W.dL.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaq(a))+" x "+H.j(this.gao(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbs(b)&&a.top===u.gbx(b)&&this.gaq(a)===u.gaq(b)&&this.gao(a)===u.gao(b)},
gH:function(a){return W.mA(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(this.gaq(a)),C.c.gH(this.gao(a)))},
gdQ:function(a){return a.bottom},
gao:function(a){return a.height},
gbs:function(a){return a.left},
gcM:function(a){return a.right},
gbx:function(a){return a.top},
gaq:function(a){return a.width},
$iak:1,
$aak:function(){return[P.ad]}}
W.h1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$av:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.h2.prototype={
gl:function(a){return a.length}}
W.jS.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iO")},
k:function(a,b,c){var u
H.f(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.jp(this)
return new J.au(u,u.length,[H.q(u,0)])},
$av:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
git:function(a){return new W.jV(a)},
gcb:function(a){return new W.jS(a,a.children)},
gdT:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.ad])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lX
if(u==null){u=H.d([],[W.aC])
t=new W.e6(u)
C.a.h(u,W.mz(null))
C.a.h(u,W.mB())
$.lX=t
d=t}else d=u
u=$.lW
if(u==null){u=new W.fk(d)
$.lW=u
c=u}else{u.a=d
c=u}}if($.bp==null){u=document
t=u.implementation.createHTMLDocument("")
$.bp=t
$.la=t.createRange()
t=$.bp.createElement("base")
H.f(t,"$icB")
t.href=u.baseURI
$.bp.head.appendChild(t)}u=$.bp
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibE")}u=$.bp
if(!!this.$ibE)s=u.body
else{s=u.createElement(a.tagName)
$.bp.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.la.selectNodeContents(s)
r=$.la.createContextualFragment(b)}else{s.innerHTML=b
r=$.bp.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bp.body
if(s==null?u!=null:s!==u)J.lN(s)
c.cT(r)
document.adoptNode(r)
return r},
iA:function(a,b,c){return this.an(a,b,c,null)},
eH:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
$iO:1,
ges:function(a){return a.tagName}}
W.h6.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iO},
$S:25}
W.o.prototype={$io:1}
W.k.prototype={
ii:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f8(a,b,c,!1)},
f8:function(a,b,c,d){return a.addEventListener(b,H.cs(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ik:1}
W.aI.prototype={$iaI:1}
W.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aI]},
$av:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$icJ:1,
$aH:function(){return[W.aI]}}
W.hc.prototype={
gl:function(a){return a.length}}
W.hg.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.hl.prototype={
gl:function(a){return a.length}}
W.c8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$av:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ic8:1,
$aH:function(){return[W.G]}}
W.bq.prototype={$ibq:1,
gdW:function(a){return a.data}}
W.c9.prototype={$ic9:1}
W.ba.prototype={$iba:1}
W.dY.prototype={
i:function(a){return String(a)},
$idY:1}
W.hV.prototype={
gl:function(a){return a.length}}
W.cP.prototype={$icP:1}
W.hW.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
C:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.C(a,new W.hX(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hY.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
C:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.C(a,new W.hZ(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.hZ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aV.prototype={$iaV:1}
W.i_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$av:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.a7.prototype={$ia7:1}
W.as.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mi("No elements"))
if(t>1)throw H.c(P.mi("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s,r
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
gT:function(a){var u=this.a.childNodes
return new W.dP(u,u.length,[H.bz(C.Z,u,"H",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$av:function(){return[W.G]},
$ai:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
jf:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ji:function(a,b){var u,t
try{u=a.parentNode
J.nu(u,b,a)}catch(t){H.an(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eM(a):u},
io:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hL:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$av:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aW.prototype={$iaW:1,
gl:function(a){return a.length}}
W.ig.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$av:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aH:function(){return[W.aW]}}
W.ip.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
C:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.C(a,new W.iq(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.iq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.is.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.iC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$av:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$av:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.iG.prototype={
j:function(a,b){return a.getItem(H.J(b))},
k:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.d([],[P.h])
this.C(a,new W.iH(u))
return u},
gl:function(a){return a.length},
$aag:function(){return[P.h,P.h]},
$ix:1,
$ax:function(){return[P.h,P.h]}}
W.iH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aL.prototype={$iaL:1}
W.bg.prototype={$ibg:1}
W.ek.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=W.nK("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.as(t).ad(0,new W.as(u))
return t}}
W.iN.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.an(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaL(u)
s.toString
u=new W.as(s)
r=u.gaL(u)
t.toString
r.toString
new W.as(t).ad(0,new W.as(r))
return t}}
W.iO.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.an(u.createElement("table"),b,c,d)
u.toString
u=new W.as(u)
s=u.gaL(u)
t.toString
s.toString
new W.as(t).ad(0,new W.as(s))
return t}}
W.d3.prototype={$id3:1}
W.b_.prototype={$ib_:1}
W.aM.prototype={$iaM:1}
W.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aM]},
$av:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aH:function(){return[W.aM]}}
W.iR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$av:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aH:function(){return[W.b_]}}
W.j0.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.j4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b0]},
$av:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aH:function(){return[W.b0]}}
W.j5.prototype={
gl:function(a){return a.length}}
W.bT.prototype={}
W.jr.prototype={
i:function(a){return String(a)}}
W.jK.prototype={
gl:function(a){return a.length}}
W.bk.prototype={
giD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
giC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibk:1}
W.db.prototype={
hM:function(a,b){return a.requestAnimationFrame(H.cs(H.n(b,{func:1,ret:-1,args:[P.ad]}),1))},
fn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dc.prototype={$idc:1}
W.jT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iX")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.X]},
$av:function(){return[W.X]},
$ii:1,
$ai:function(){return[W.X]},
$ib:1,
$ab:function(){return[W.X]},
$aH:function(){return[W.X]}}
W.eC.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbs(b)&&a.top===u.gbx(b)&&a.width===u.gaq(b)&&a.height===u.gao(b)},
gH:function(a){return W.mA(C.c.gH(a.left),C.c.gH(a.top),C.c.gH(a.width),C.c.gH(a.height))},
gao:function(a){return a.height},
gaq:function(a){return a.width}}
W.k7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$av:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.eU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$av:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.kl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$av:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aH:function(){return[W.aZ]}}
W.kp.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aL]},
$av:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aH:function(){return[W.aL]}}
W.jR.prototype={
C:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga9(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga9:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idc")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aag:function(){return[P.h,P.h]},
$ax:function(){return[P.h,P.h]}}
W.jV.prototype={
j:function(a,b){return this.a.getAttribute(H.J(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga9(this).length}}
W.jW.prototype={}
W.ls.prototype={}
W.jX.prototype={}
W.jY.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:38}
W.bX.prototype={
eX:function(a){var u
if($.de.giT($.de)){for(u=0;u<262;++u)$.de.k(0,C.U[u],W.pA())
for(u=0;u<12;++u)$.de.k(0,C.q[u],W.pB())}},
aT:function(a){return $.no().U(0,W.cI(a))},
ax:function(a,b,c){var u=$.de.j(0,H.j(W.cI(a))+"::"+b)
if(u==null)u=$.de.j(0,"*::"+b)
if(u==null)return!1
return H.lA(u.$4(a,b,c,this))},
$iaC:1}
W.H.prototype={
gT:function(a){return new W.dP(a,this.gl(a),[H.bz(this,a,"H",0)])}}
W.e6.prototype={
aT:function(a){return C.a.dO(this.a,new W.i7(a))},
ax:function(a,b,c){return C.a.dO(this.a,new W.i6(a,b,c))},
$iaC:1}
W.i7.prototype={
$1:function(a){return H.f(a,"$iaC").aT(this.a)},
$S:27}
W.i6.prototype={
$1:function(a){return H.f(a,"$iaC").ax(this.a,this.b,this.c)},
$S:27}
W.f1.prototype={
f2:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.bA(0,new W.ki())
t=b.bA(0,new W.kj())
this.b.ad(0,u)
s=this.c
s.ad(0,C.x)
s.ad(0,t)},
aT:function(a){return this.a.U(0,W.cI(a))},
ax:function(a,b,c){var u=this,t=W.cI(a),s=u.c
if(s.U(0,H.j(t)+"::"+b))return u.d.il(c)
else if(s.U(0,"*::"+b))return u.d.il(c)
else{s=u.b
if(s.U(0,H.j(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.j(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaC:1}
W.ki.prototype={
$1:function(a){return!C.a.U(C.q,H.J(a))},
$S:28}
W.kj.prototype={
$1:function(a){return C.a.U(C.q,H.J(a))},
$S:28}
W.kr.prototype={
ax:function(a,b,c){if(this.eQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.ks.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.J(a))},
$S:20}
W.kq.prototype={
aT:function(a){var u=J.T(a)
if(!!u.$icY)return!1
u=!!u.$ip
if(u&&W.cI(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a8(b,"on"))return!1
return this.aT(a)},
$iaC:1}
W.dP.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdk(J.dx(u.a,t))
u.c=t
return!0}u.sdk(null)
u.c=s
return!1},
gI:function(a){return this.d},
sdk:function(a){this.d=H.A(a,H.q(this,0))},
$ib9:1}
W.aC.prototype={}
W.kg.prototype={$iqe:1}
W.fk.prototype={
cT:function(a){new W.kC(this).$2(a,null)},
b4:function(a,b){if(b==null)J.lN(a)
else b.removeChild(a)},
hQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ny(a)
n=o.a.getAttribute("is")
H.f(a,"$iO")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.an(r)}t="element unprintable"
try{t=J.aR(a)}catch(r){H.an(r)}try{s=W.cI(a)
this.hP(H.f(a,"$iO"),b,p,t,s,H.f(o,"$ix"),H.J(n))}catch(r){if(H.an(r) instanceof P.aS)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b4(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ax(a,"is",g)){o.b4(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga9(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nB(r)
H.J(r)
if(!q.ax(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id3)o.cT(a.content)},
$iq_:1}
W.kC.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.an(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:37}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f7.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
P.km.prototype={
e7:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cQ:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaz)return new Date(a.a)
if(!!u.$iob)throw H.c(P.jj("structured clone of RegExp"))
if(!!u.$iaI)return a
if(!!u.$ic1)return a
if(!!u.$icJ)return a
if(!!u.$ibq)return a
if(!!u.$icR||!!u.$ibQ||!!u.$icP)return a
if(!!u.$ix){t=q.e7(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.C(a,new P.ko(p,q))
return p.a}if(!!u.$ib){t=q.e7(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iz(a,t)}throw H.c(P.jj("structured clone of other type"))},
iz:function(a,b){var u,t=J.cv(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cQ(t.j(a,u)))
return r}}
P.ko.prototype={
$2:function(a,b){this.a.a[a]=this.b.cQ(b)},
$S:6}
P.fh.prototype={$ibq:1,
gdW:function(a){return this.a}}
P.kN.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.kn.prototype={}
P.hd.prototype={
gb2:function(){var u=this.b,t=H.am(u,"v",0),s=W.O
return new H.hG(new H.da(u,H.n(new P.he(),{func:1,ret:P.R,args:[t]}),[t]),H.n(new P.hf(),{func:1,ret:s,args:[t]}),[t,s])},
C:function(a,b){H.n(b,{func:1,ret:-1,args:[W.O]})
C.a.C(P.li(this.gb2(),!1,W.O),b)},
k:function(a,b,c){var u
H.f(c,"$iO")
u=this.gb2()
J.nz(u.b.$1(J.fy(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aF(this.gb2().a)},
j:function(a,b){var u=this.gb2()
return u.b.$1(J.fy(u.a,b))},
gT:function(a){var u=P.li(this.gb2(),!1,W.O)
return new J.au(u,u.length,[H.q(u,0)])},
$av:function(){return[W.O]},
$ai:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.he.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iO},
$S:25}
P.hf.prototype={
$1:function(a){return H.r(H.f(a,"$iG"),"$iO")},
$S:35}
P.kb.prototype={
gcM:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.A(u+t,H.q(this,0))},
gdQ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.A(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iak){t=p.a
if(t==u.gbs(b)){s=p.b
if(s==u.gbx(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.E(r)
q=H.q(p,0)
if(H.A(t+r,q)===u.gcM(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.E(t)
u=H.A(s+t,q)===u.gdQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.dy(s),q=t.b,p=J.dy(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.E(o)
u=H.q(t,0)
o=C.e.gH(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.E(s)
u=C.e.gH(H.A(q+s,u))
return P.oB(P.k9(P.k9(P.k9(P.k9(0,r),p),o),u))}}
P.ak.prototype={
gbs:function(a){return this.a},
gbx:function(a){return this.b},
gaq:function(a){return this.c},
gao:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.hv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aH:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.ia.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibe")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.be]},
$ii:1,
$ai:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aH:function(){return[P.be]}}
P.ii.prototype={
gl:function(a){return a.length}}
P.cY.prototype={$icY:1}
P.iM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gcb:function(a){return new P.hd(a,new W.as(a))},
an:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aC])
C.a.h(p,W.mz(null))
C.a.h(p,W.mB())
C.a.h(p,new W.kq())
c=new W.fk(new W.e6(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iA(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.as(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bi.prototype={$ibi:1}
P.j6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibi")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[P.bi]},
$ii:1,
$ai:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aH:function(){return[P.bi]}}
P.eM.prototype={}
P.eN.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f8.prototype={}
P.f9.prototype={}
P.ff.prototype={}
P.fg.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$iol:1}
P.fE.prototype={
gl:function(a){return a.length}}
P.fF.prototype={
j:function(a,b){return P.by(a.get(H.J(b)))},
C:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.by(t.value[1]))}},
ga9:function(a){var u=H.d([],[P.h])
this.C(a,new P.fG(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aag:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
P.fG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fH.prototype={
gl:function(a){return a.length}}
P.c0.prototype={}
P.ib.prototype={
gl:function(a){return a.length}}
P.eA.prototype={}
P.dC.prototype={$idC:1}
P.dQ.prototype={$idQ:1}
P.ea.prototype={$iea:1}
P.ec.prototype={$iec:1}
P.ci.prototype={
ev:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibq&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.pq(g))
return}if(!!u.$ic9&&h==null&&t&&!0){this.i4(a,b,c,d,e,f,g)
return}throw H.c(P.dA("Incorrect number or type of arguments"))},
eu:function(a,b,c,d,e,f,g){return this.ev(a,b,c,d,e,f,g,null,null,null)},
i4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
bz:function(a,b,c){return a.uniform1i(b,c)},
X:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ez:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ici:1}
P.ed.prototype={$ied:1}
P.el.prototype={$iel:1}
P.er.prototype={$ier:1}
P.iE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.by(a.item(b))},
k:function(a,b,c){H.f(c,"$ix")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$av:function(){return[[P.x,,,]]},
$ii:1,
$ai:function(){return[[P.x,,,]]},
$ib:1,
$ab:function(){return[[P.x,,,]]},
$aH:function(){return[[P.x,,,]]}}
P.f4.prototype={}
P.f5.prototype={}
O.a3.prototype={
bj:function(a){var u=this
u.sfB(H.d([],[a]))
u.sdt(null)
u.sdn(null)
u.sdu(null)},
cU:function(a,b,c){var u=this,t=H.am(u,"a3",0)
H.n(b,{func:1,ret:P.R,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdt(b)
u.sdn(a)
u.sdu(c)},
aY:function(a,b){return this.cU(a,null,b)},
ds:function(a){var u
H.l(a,"$ii",[H.am(this,"a3",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cZ:function(a,b){var u
H.l(b,"$ii",[H.am(this,"a3",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.au(u,u.length,[H.q(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.am(s,"a3",0)
H.A(b,r)
r=[r]
if(H.F(s.ds(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cZ(t,H.d([b],r))}},
ad:function(a,b){var u,t,s=this
H.l(b,"$ii",[H.am(s,"a3",0)],"$ai")
if(H.F(s.ds(b))){u=s.a
t=u.length
C.a.ad(u,b)
s.cZ(t,b)}},
sfB:function(a){this.a=H.l(a,"$ib",[H.am(this,"a3",0)],"$ab")},
sdt:function(a){this.b=H.n(a,{func:1,ret:P.R,args:[[P.i,H.am(this,"a3",0)]]})},
sdn:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.am(this,"a3",0)]]})},
sdu:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.am(this,"a3",0)]]})},
$ii:1}
O.cO.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.N():u},
aM:function(){var u=this.b
if(u!=null)u.E(null)},
ga6:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.bP()},
bw:function(a){var u=this.a
if(a==null)C.a.h(u,V.bP())
else C.a.h(u,a)
this.aM()},
aH:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbQ:function(a){this.a=H.l(a,"$ib",[V.av],"$ab")}}
E.fL.prototype={}
E.aq.prototype={
sbD:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().R(0,s.gej())
u=s.c
if(u!=null)u.gq().h(0,s.gej())
t=new D.K("shape",r,s.c,[F.ee])
t.b=!0
s.bt(t)}},
af:function(a,b){var u
for(u=this.y.a,u=new J.au(u,u.length,[H.q(u,0)]);u.B();)u.d.af(0,b)},
ae:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga6(s))
s.aM()
a.cF(t.f)
s=a.dy
u=(s&&C.a).gay(s)
if(u!=null&&t.d!=null)u.cL(a,t)
for(s=t.y.a,s=new J.au(s,s.length,[H.q(s,0)]);s.B();)s.d.ae(a)
a.cE()
a.dx.aH()},
gq:function(){var u=this.z
return u==null?this.z=D.N():u},
bt:function(a){var u=this.z
if(u!=null)u.E(a)},
aj:function(){return this.bt(null)},
ek:function(a){H.f(a,"$iz")
this.e=null
this.bt(a)},
j5:function(){return this.ek(null)},
ei:function(a){this.bt(H.f(a,"$iz"))},
j2:function(){return this.ei(null)},
j1:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.aq],"$ai")
for(u=b.length,t=this.geh(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c6()
o.sam(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aj()},
j4:function(a,b){var u,t
H.l(b,"$ii",[E.aq],"$ai")
for(u=b.gT(b),t=this.geh();u.B();)u.gI(u).gq().R(0,t)
this.aj()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seW:function(a,b){this.y=H.l(b,"$ia3",[E.aq],"$aa3")},
$icc:1}
E.ik.prototype={
eT:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cO()
t=[V.av]
u.sbQ(H.d([],t))
u.b=null
u.gq().h(0,new E.il(s))
s.cy=u
u=new O.cO()
u.sbQ(H.d([],t))
u.b=null
u.gq().h(0,new E.im(s))
s.db=u
u=new O.cO()
u.sbQ(H.d([],t))
u.b=null
u.gq().h(0,new E.io(s))
s.dx=u
s.si3(H.d([],[O.bR]))
u=s.dy;(u&&C.a).h(u,null)
s.shZ(new H.a4([P.h,A.cZ]))},
gje:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga6(s)
u=t.db
u=t.z=s.u(0,u.ga6(u))
s=u}return s},
gen:function(){var u,t=this,s=t.ch
if(s==null){s=t.gje()
u=t.dx
u=t.ch=s.u(0,u.ga6(u))
s=u}return s},
cF:function(a){var u=this.dy,t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
cE:function(){var u=this.dy
if(u.length>1)u.pop()},
c4:function(a){var u=a.b
if(u.length===0)throw H.c(P.D("May not cache a shader with no name."))
if(this.fr.bp(0,u))throw H.c(P.D('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
si3:function(a){this.dy=H.l(a,"$ib",[O.bR],"$ab")},
shZ:function(a){this.fr=H.l(a,"$ix",[P.h,A.cZ],"$ax")}}
E.il.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:8}
E.im.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.io.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:8}
E.en.prototype={
d1:function(a){H.f(a,"$iz")
this.eq()},
d0:function(){return this.d1(null)},
giO:function(){var u,t=this,s=Date.now(),r=C.e.ac(P.lV(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dz:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.E(r)
u=C.c.cp(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.cp(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ml(C.o,s.gjj())}},
eq:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.j_(this),{func:1,ret:-1,args:[P.ad]})
C.E.fn(u)
C.E.hM(u,W.mQ(t,P.ad))}},
jh:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dz()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.lV(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aM()
r=s.db
C.a.sl(r.a,0)
r.aM()
r=s.dx
C.a.sl(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ae(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.an(q)
t=H.cx(q)
P.lH("Error: "+H.j(u))
P.lH("Stack: "+H.j(t))
throw H.c(u)}}}
E.j_.prototype={
$1:function(a){var u
H.n1(a)
u=this.a
if(u.ch){u.ch=!1
u.jh()}},
$S:32}
Z.ey.prototype={$ipU:1}
Z.dD.prototype={
a_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.an(s)
t=P.D('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.d9.prototype={$ipV:1}
Z.c2.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a_(a)},
ak:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ae:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aR(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.n(p,", ")+"\nAttrs:   "+C.a.n(r,", ")},
sfv:function(a){this.b=H.l(a,"$ib",[Z.ca],"$ab")},
$iq2:1}
Z.ca.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cf(this.c)+"'")+"]"}}
Z.bx.prototype={
gcV:function(a){var u=this.a,t=(u&$.aE().a)!==0?3:0
if((u&$.bC().a)!==0)t+=3
if((u&$.bB().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.c_().a)!==0)t+=3
if((u&$.dv().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=4
if((u&$.cA().a)!==0)++t
return(u&$.bA().a)!==0?t+4:t},
ip:function(a){var u,t=$.aE(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0)if(u===a)return t
return $.nm()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bx))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.aE().a)!==0)C.a.h(u,"Pos")
if((t&$.bC().a)!==0)C.a.h(u,"Norm")
if((t&$.bB().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c_().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dv().a)!==0)C.a.h(u,"Clr3")
if((t&$.dw().a)!==0)C.a.h(u,"Clr4")
if((t&$.cA().a)!==0)C.a.h(u,"Weight")
if((t&$.bA().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.n(u,"|")}}
D.fO.prototype={}
D.c6.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.n(b,u)
if(this.a==null)this.sam(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).R(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.C(P.li(u,!0,{func:1,ret:-1,args:[D.z]}),new D.h9(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.C(u,new D.ha(q))}return!0},
ci:function(){return this.E(null)},
aJ:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sam:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saQ:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h9.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.ha.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.z.prototype={}
D.bL.prototype={}
D.bM.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dE.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dE))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dV.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.hu.prototype={
ja:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j6:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
shD:function(a){this.d=H.l(a,"$img",[P.m],"$amg")}}
X.dZ.prototype={}
X.hC.prototype={
b1:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.bt(a,V.bu(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cD:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eG()
if(typeof u!=="number")return u.ar()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b1(a,b))
return!0},
jb:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cQ(new V.W(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
h9:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dZ(c,r.a.gaU(),b)
s.b=!0
t.E(s)
r.y=new P.az(u,!1)
r.x=V.bu()}}
X.aB.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bt.prototype={}
X.i0.prototype={
bN:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaU(),r=new X.bt(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bN(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eG()
if(typeof t!=="number")return t.ar()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bN(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bN(a,b,!1))
return!0},
jc:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cQ(new V.W(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdY:function(){var u=this.b
return u==null?this.b=D.N():u},
gcP:function(){var u=this.c
return u==null?this.c=D.N():u},
geg:function(){var u=this.d
return u==null?this.d=D.N():u}}
X.cQ.prototype={}
X.ih.prototype={}
X.ep.prototype={}
X.j3.prototype={
b1:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.a9],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bu()
s=q.a.gaU()
r=new X.ep(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j9:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b1(a,!0))
return!0},
j7:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b1(a,!0))
return!0},
j8:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b1(a,!1))
return!0}}
X.eu.prototype={
gaU:function(){var u=this.a,t=C.i.gdT(u).c
t.toString
u=C.i.gdT(u).d
u.toString
return V.me(0,0,t,u)},
df:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dV(u,new X.aB(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
c3:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aB(t,a.altKey,a.shiftKey)},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a9(s-q,r-u)},
b3:function(a){return new V.W(a.movementX,a.movementY)},
c0:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=C.c.a1(r.pageX)
C.c.a1(r.pageY)
p=o.left
C.c.a1(r.pageX)
C.a.h(n,new V.a9(q-p,C.c.a1(r.pageY)-o.top))}return n},
aA:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dE(u,new X.aB(t,a.altKey,a.shiftKey))},
bR:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h3:function(a){this.f=!0},
fS:function(a){this.f=!1},
fY:function(a){H.f(a,"$ia7")
if(H.F(this.f)&&this.bR(a))a.preventDefault()},
h7:function(a){var u
H.f(a,"$iba")
if(!H.F(this.f))return
u=this.df(a)
this.b.ja(u)},
h5:function(a){var u
H.f(a,"$iba")
if(!H.F(this.f))return
u=this.df(a)
this.b.j6(u)},
hb:function(a){var u,t,s,r,q=this
H.f(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.F(q.x)){t=q.aA(a)
s=q.b3(a)
if(q.d.cD(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aA(a)
r=q.aC(a)
if(q.c.cD(t,r))a.preventDefault()},
hf:function(a){var u,t,s,r=this
H.f(a,"$ia7")
r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bd(u,s))a.preventDefault()},
h1:function(a){var u,t,s,r=this
H.f(a,"$ia7")
if(!r.bR(a)){r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bd(u,s))a.preventDefault()}},
hd:function(a){var u,t,s,r=this
H.f(a,"$ia7")
r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bc(u,s))a.preventDefault()},
h_:function(a){var u,t,s,r=this
H.f(a,"$ia7")
if(!r.bR(a)){r.aR(a)
u=r.aA(a)
if(H.F(r.x)){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aC(a)
if(r.c.bc(u,s))a.preventDefault()}},
hh:function(a){var u,t,s=this
H.f(a,"$ibk")
s.aR(a)
u=new V.W((a&&C.D).giC(a),C.D.giD(a)).w(0,180)
if(H.F(s.x)){if(s.d.jb(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aC(a)
if(s.c.jc(u,t))a.preventDefault()},
hj:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aA(s.y)
t=s.aC(s.y)
s.d.h9(u,t,r)}},
hz:function(a){var u,t=this
H.f(a,"$ib1")
t.a.focus()
t.f=!0
t.c3(a)
u=t.c0(a)
if(t.e.j9(u))a.preventDefault()},
hv:function(a){var u
H.f(a,"$ib1")
this.c3(a)
u=this.c0(a)
if(this.e.j7(u))a.preventDefault()},
hx:function(a){var u
H.f(a,"$ib1")
this.c3(a)
u=this.c0(a)
if(this.e.j8(u))a.preventDefault()},
sfo:function(a){this.z=H.l(a,"$ib",[[P.d0,P.S]],"$ab")}}
D.bI.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.N():u},
az:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.E(a)},
f_:function(){return this.az(null)},
$iaf:1,
$icc:1}
D.af.prototype={$icc:1}
D.dW.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.N():u},
az:function(a){var u=this.x
if(u!=null)u.E(a)},
dr:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.E(a)},
h8:function(){return this.dr(null)},
hl:function(a){var u,t,s
H.l(a,"$ii",[D.af],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.eY(s))return!1}return!0},
fM:function(a,b){var u,t,s,r,q,p,o,n=D.af
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=H.f(b[q],"$iaf")
if(p instanceof D.bI)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c6()
o.sam(null)
o.saQ(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bL([n])
n.b=!0
this.az(n)},
hp:function(a,b){var u,t,s,r=D.af
H.l(b,"$ii",[r],"$ai")
for(u=b.gT(b),t=this.gdq();u.B();){s=u.gI(u)
C.a.R(this.e,s)
s.gq().R(0,t)}r=new D.bM([r])
r.b=!0
this.az(r)},
eY:function(a){var u=C.a.U(this.e,a)
return u},
sfm:function(a){this.e=H.l(a,"$ib",[D.bI],"$ab")},
shA:function(a){this.f=H.l(a,"$ib",[D.e9],"$ab")},
si1:function(a){this.r=H.l(a,"$ib",[D.ei],"$ab")},
$ai:function(){return[D.af]},
$aa3:function(){return[D.af]}}
D.e9.prototype={$iaf:1,$icc:1}
D.ei.prototype={$iaf:1,$icc:1}
V.a5.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcI()),t=C.c.p(this.b,b.gbB()),s=C.c.p(this.c,b.gc6())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcI()),t=C.c.t(this.b,b.gbB()),s=C.c.t(this.c,b.gc6())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a5(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.ae.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcI()),s=C.c.p(u.b,b.gbB()),r=C.c.p(u.c,b.gc6()),q=C.c.p(u.d,b.gim(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ae(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcI()),s=C.c.t(u.b,b.gbB()),r=C.c.t(u.c,b.gc6()),q=C.c.t(u.d,b.gim(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ae(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.h8.prototype={}
V.cN.prototype={
a3:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cN))return!1
u=b.a
t=$.P().a
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.cu(H.d([q.a,q.d,q.r],p),3,0),n=V.cu(H.d([q.b,q.e,q.x],p),3,0),m=V.cu(H.d([q.c,q.f,q.y],p),3,0)
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
a3:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
cv:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.P().a)return V.bP()
u=1/b1
t=-n
s=-a0
return V.bd((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bd(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
by:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cO:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a8(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.V()},
K:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.cu(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cu(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cu(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cu(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
V:function(){return this.K("")}}
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.a8.prototype={
p:function(a,b){return new V.a8(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a8(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a8(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.bf.prototype={
p:function(a,b){var u=this
return new V.bf(C.e.p(u.a,b.gjt(b)),C.e.p(u.b,b.gju(b)),C.e.p(u.c,b.gjv(b)),C.e.p(u.d,b.gjs(b)))},
t:function(a,b){var u=this
return new V.bf(C.e.t(u.a,b.gjt(b)),C.e.t(u.b,b.gju(b)),C.e.t(u.c,b.gjv(b)),C.e.t(u.d,b.gjs(b)))},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.cX.prototype={
gai:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cX))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.Y(u.a,3,0)+", "+V.Y(u.b,3,0)+", "+V.Y(u.c,3,0)+", "+V.Y(u.d,3,0)+"]"}}
V.W.prototype={
cw:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gcf(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gcg(b)
if(typeof t!=="number")return t.p()
return new V.W(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gcf(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gcg(b)
if(typeof t!=="number")return t.t()
return new V.W(s,C.c.t(t,u))},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.W(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.ms
return u==null?$.ms=new V.W(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.W(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.P()
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
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.Q.prototype={
cw:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.Q(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.P().a)return V.d8()
return new V.Q(this.a/b,this.b/b,this.c/b)},
ef:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fP.prototype={
bI:function(a){var u=V.pT(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.N():u},
O:function(a){var u=this.y
if(u!=null)u.E(a)},
scR:function(a,b){},
scA:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bI(u)}s=new D.K("maximumLocation",s,t.b,[P.B])
s.b=!0
t.O(s)}},
scC:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bI(u)}s=new D.K("minimumLocation",s,t.c,[P.B])
s.b=!0
t.O(s)}},
sah:function(a,b){var u,t=this
b=t.bI(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.K("location",u,b,[P.B])
u.b=!0
t.O(u)}},
scB:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.K("maximumVelocity",r,a,[P.B])
r.b=!0
s.O(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.K("velocity",t,a,[P.B])
t.b=!0
u.O(t)}},
scd:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.K("dampening",u,a,[P.B])
u.b=!0
this.O(u)}},
af:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sah(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.dG.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.N():u},
aX:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.K("          ")}}
U.cL.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u},
O:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.E(a)},
ab:function(){return this.O(null)},
fK:function(a,b){var u,t,s,r,q,p,o,n=U.aj
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaP(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.O(n)},
hn:function(a,b){var u,t,s=U.aj
H.l(b,"$ii",[s],"$ai")
for(u=b.gT(b),t=this.gaP();u.B();)u.gI(u).gq().R(0,t)
s=new D.bM([s])
s.b=!0
this.O(s)},
aX:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.au(r,r.length,[H.q(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aX(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bP():u
r=s.e
if(r!=null)r.aJ(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cL))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa3:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ev.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.N():u},
O:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.E(a)},
ab:function(){return this.O(null)},
b5:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdY().h(0,u.gbS())
u.a.c.geg().h(0,u.gbU())
u.a.c.gcP().h(0,u.gbW())
return!0},
bT:function(a){var u=this
H.f(a,"$iz")
if(!J.V(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bV:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ibt")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.t(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.W(t.a,t.b).u(0,2).w(0,u.gai())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.W(s.a,s.b).u(0,2).w(0,u.gai())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sah(0,-q*p+o)
n.b.sW(0)
t=t.t(0,a.z)
n.Q=new V.W(t.a,t.b).u(0,2).w(0,u.gai())}n.ab()},
bX:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sW(t*10*s)
r.ab()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.af(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bd(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaj:1}
U.ew.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.N():u},
O:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.E(a)},
ab:function(){return this.O(null)},
b5:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdY().h(0,s.gbS())
s.a.c.geg().h(0,s.gbU())
s.a.c.gcP().h(0,s.gbW())
u=s.a.d
t=u.f
u=t==null?u.f=D.N():t
u.h(0,s.gfC())
u=s.a.d
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.gfE())
u=s.a.e
t=u.b
u=t==null?u.b=D.N():t
u.h(0,s.gia())
u=s.a.e
t=u.d
u=t==null?u.d=D.N():t
u.h(0,s.gi8())
u=s.a.e
t=u.c
u=t==null?u.c=D.N():t
u.h(0,s.gi6())
return!0},
aw:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.W(u,t)},
bT:function(a){var u=this
a=H.r(H.f(a,"$iz"),"$ibt")
if(!J.V(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bV:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ibt")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aw(new V.W(t.a,t.b).u(0,2).w(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aw(new V.W(s.a,s.b).u(0,2).w(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sah(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sah(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aw(new V.W(t.a,t.b).u(0,2).w(0,u.gai()))}n.ab()},
bX:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sW(-t*10*u)
r.ab()}},
fD:function(a){var u=this
if(H.r(H.f(a,"$iz"),"$idZ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fF:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$ibt")
if(!J.V(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aw(new V.W(s.a,s.b).u(0,2).w(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sah(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sah(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aw(new V.W(t.a,t.b).u(0,2).w(0,u.gai()))
n.ab()},
ib:function(a){var u=this
H.f(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i9:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iz"),"$iep")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.t(0,a.y)
u=new V.W(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.aw(new V.W(t.a,t.b).u(0,2).w(0,u.gai()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.aw(new V.W(s.a,s.b).u(0,2).w(0,u.gai()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sah(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sah(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.t(0,a.z)
n.dx=n.aw(new V.W(t.a,t.b).u(0,2).w(0,u.gai()))}n.ab()},
i7:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sW(-t*10*u)
r.ab()}},
aX:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.af(0,u)
r.b.af(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bd(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.bd(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaj:1}
U.ex.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.N():u},
O:function(a){var u=this.r
if(u!=null)u.E(a)},
b5:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.N():t
t=r.gfH()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.N():s).h(0,t)
return!0},
fI:function(a){var u,t,s,r,q=this
H.f(a,"$iz")
if(!J.V(q.b,q.a.b.c))return
H.r(a,"$icQ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.K("zoom",u,r,[P.B])
u.b=!0
q.O(u)}},
aX:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.m4(u,u,u)}return t.f},
$iaj:1}
M.dF.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.N():u},
Z:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.E(a)},
b_:function(){return this.Z(null)},
hr:function(a,b){var u,t,s,r,q,p,o,n=M.aD
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.Z(n)},
ht:function(a,b){var u,t,s=M.aD
H.l(b,"$ii",[s],"$ai")
for(u=b.gT(b),t=this.gY();u.B();)u.gI(u).gq().R(0,t)
s=new D.bM([s])
s.b=!0
this.Z(s)},
ae:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.au(u,u.length,[H.q(u,0)]);u.B();){t=u.d
if(t!=null)t.ae(a)}s.f=!1},
$ai:function(){return[M.aD]},
$aa3:function(){return[M.aD]},
$iaD:1}
M.dH.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.N():u},
Z:function(a){var u
H.f(a,"$iz")
u=this.r
if(u!=null)u.E(a)},
b_:function(){return this.Z(null)},
sb6:function(a){var u,t,s=this
if(a==null)a=new X.ho()
u=s.b
if(u!==a){if(u!=null)u.gq().R(0,s.gY())
t=s.b
s.b=a
a.gq().h(0,s.gY())
u=new D.K("camera",t,s.b,[X.c3])
u.b=!0
s.Z(u)}},
sbe:function(a,b){var u,t,s=this
if(b==null)b=X.lZ(null)
u=s.c
if(u!==b){if(u!=null)u.gq().R(0,s.gY())
t=s.c
s.c=b
b.gq().h(0,s.gY())
u=new D.K("target",t,s.c,[X.d2])
u.b=!0
s.Z(u)}},
saW:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().R(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gY())
s=new D.K("technique",u,t.d,[O.bR])
s.b=!0
t.Z(s)}},
ae:function(a){var u,t=this
a.cF(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.af(0,a)
t.e.af(0,a)
t.e.ae(a)
t.b.ak(a)
t.c.ak(a)
a.cE()},
$iaD:1}
M.dM.prototype={
Z:function(a){var u
H.f(a,"$iz")
u=this.y
if(u!=null)u.E(a)},
b_:function(){return this.Z(null)},
fU:function(a,b){var u,t,s,r,q,p,o,n=E.aq
H.l(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c6()
o.sam(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bL([n])
n.b=!0
this.Z(n)},
fW:function(a,b){var u,t,s=E.aq
H.l(b,"$ii",[s],"$ai")
for(u=b.gT(b),t=this.gY();u.B();)u.gI(u).gq().R(0,t)
s=new D.bM([s])
s.b=!0
this.Z(s)},
sb6:function(a){var u,t,s=this
if(a==null)a=X.m8(null)
u=s.b
if(u!==a){if(u!=null)u.gq().R(0,s.gY())
t=s.b
s.b=a
a.gq().h(0,s.gY())
u=new D.K("camera",t,s.b,[X.c3])
u.b=!0
s.Z(u)}},
sbe:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().R(0,t.gY())
u=t.c
t.c=b
b.gq().h(0,t.gY())
s=new D.K("target",u,t.c,[X.d2])
s.b=!0
t.Z(s)}},
saW:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().R(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gY())
s=new D.K("technique",u,t.d,[O.bR])
s.b=!0
t.Z(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.N():u},
ae:function(a){var u,t=this
a.cF(t.d)
t.c.a_(a)
t.b.a_(a)
u=t.d
if(u!=null)u.af(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.q(u,0)]);u.B();)u.d.af(0,a)
for(u=t.e.a,u=new J.au(u,u.length,[H.q(u,0)]);u.B();)u.d.ae(a)
t.b.toString
a.cy.aH()
a.db.aH()
t.c.ak(a)
a.cE()},
sff:function(a,b){this.e=H.l(b,"$ia3",[E.aq],"$aa3")},
$iaD:1}
M.aD.prototype={}
A.dB.prototype={}
A.fD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ce:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ap.prototype={
gav:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
v:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ap))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.dJ.prototype={
dF:function(a,b){if(b!=null&&b.d)a.eI(b)}}
A.e1.prototype={
eS:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ai("")
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
A.p8(c0,u)
A.pa(c0,u)
A.p9(c0,u)
A.pc(c0,u)
A.pd(c0,u)
A.pb(c0,u)
A.pe(c0,u)
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
b5.cs(0,s.charCodeAt(0)==0?s:s,A.p7(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.M(0,"invViewMat"),"$ial")
if(t)b5.dy=H.r(b5.y.M(0,"objMat"),"$ial")
if(r)b5.fr=H.r(b5.y.M(0,"viewObjMat"),"$ial")
b5.fy=H.r(b5.y.M(0,"projViewObjMat"),"$ial")
if(c0.ry)b5.k1=H.r(b5.y.M(0,"txt2DMat"),"$ibU")
if(c0.x1)b5.k2=H.r(b5.y.M(0,"txtCubeMat"),"$ial")
if(c0.x2)b5.k3=H.r(b5.y.M(0,"colorMat"),"$ial")
b5.sfb(H.d([],[A.al]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.M(0,"bendMatCount"),"$iaN")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.C(P.D(b7+q+b8));(s&&C.a).h(s,H.r(m,"$ial"))}}if(c0.a.a)b5.r2=H.r(b5.y.M(0,"emissionClr"),"$iZ")
if(c0.b.a)b5.x1=H.r(b5.y.M(0,"ambientClr"),"$iZ")
if(c0.c.a)b5.y2=H.r(b5.y.M(0,"diffuseClr"),"$iZ")
if(c0.d.a)b5.e_=H.r(b5.y.M(0,"invDiffuseClr"),"$iZ")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.e1=H.r(b5.y.M(0,"shininess"),"$iac")
if(t)b5.e0=H.r(b5.y.M(0,"specularClr"),"$iZ")}if(c0.cy){b5.e2=H.r(b5.y.M(0,"envSampler"),"$ibV")
if(c0.r.a)b5.e3=H.r(b5.y.M(0,"reflectClr"),"$iZ")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.e4=H.r(b5.y.M(0,"refraction"),"$iac")
if(t)b5.e5=H.r(b5.y.M(0,"refractClr"),"$iZ")}}if(c0.y.a)b5.e6=H.r(b5.y.M(0,"alpha"),"$iac")
t=P.m
s=[t,A.aN]
b5.sfl(new H.a4(s))
b5.sf0(new H.a4([t,[P.b,A.ck]]))
b5.shB(new H.a4(s))
b5.shC(new H.a4([t,[P.b,A.cl]]))
b5.si0(new H.a4(s))
b5.sf1(new H.a4([t,[P.b,A.cm]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.ck],l=0;l<t.length;t.length===s||(0,H.y)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ar()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.C(P.D(b7+g+b8))
H.r(m,"$iZ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.C(P.D(b7+g+b8))
H.r(f,"$iZ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.C(P.D(b7+g+b8))
H.r(e,"$iZ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.C(P.D(b7+g+b8))
H.r(m,"$iZ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.C(P.D(b7+g+b8))
H.r(f,"$iZ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.C(P.D(b7+o+b8))
H.r(e,"$ibw")
a=e}else a=b6
C.a.h(h,new A.ck(b,c,d,m,f,a))}b5.ck.k(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}for(t=c0.Q,s=t.length,r=[A.cl],l=0;l<t.length;t.length===s||(0,H.y)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
H.r(m,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.C(P.D(b7+o+b8))
H.r(f,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.C(P.D(b7+o+b8))
H.r(e,"$iZ")
if(typeof j!=="number")return j.ar()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.r(a0,"$ibU")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.r(a0,"$ibV")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.r(a0,"$ibV")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.r(a2,"$id6")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.r(a0,"$iac")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.r(a2,"$iac")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.C(P.D(b7+o+b8))
H.r(a5,"$iac")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cl(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cm.k(0,j,h)
q=b5.cl
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}for(t=c0.ch,s=t.length,r=[A.cm],l=0;l<t.length;t.length===s||(0,H.y)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
H.r(m,"$iZ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.C(P.D(b7+o+b8))
H.r(f,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.C(P.D(b7+o+b8))
H.r(e,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.C(P.D(b7+o+b8))
H.r(a0,"$iZ")
if(typeof j!=="number")return j.ar()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.r(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.C(P.D(b7+o+b8))
H.r(a5,"$iZ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.C(P.D(b7+o+b8))
H.r(a9,"$iac")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.C(P.D(b7+o+b8))
H.r(b0,"$iac")
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
if(a2==null)H.C(P.D(b7+g+b8))
H.r(a2,"$id6")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.C(P.D(b7+g+b8))
H.r(a2,"$iac")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.C(P.D(b7+g+b8))
H.r(a5,"$iac")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.C(P.D(b7+g+b8))
H.r(a2,"$iac")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.C(P.D(b7+g+b8))
H.r(a5,"$iac")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.C(P.D(b7+g+b8))
H.r(a9,"$iac")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.C(P.D(b7+g+b8))
H.r(a2,"$ibw")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.C(P.D(b7+o+b8))
H.r(a2,"$ibw")
a3=a2}else a3=b6
C.a.h(h,new A.cm(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.co.k(0,j,h)
q=b5.cn
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.C(P.D(b7+o+b8))
q.k(0,j,H.f(m,"$iaN"))}}},
hS:function(a,b){},
sfb:function(a){this.r1=H.l(a,"$ib",[A.al],"$ab")},
sfl:function(a){this.cj=H.l(a,"$ix",[P.m,A.aN],"$ax")},
sf0:function(a){this.ck=H.l(a,"$ix",[P.m,[P.b,A.ck]],"$ax")},
shB:function(a){this.cl=H.l(a,"$ix",[P.m,A.aN],"$ax")},
shC:function(a){this.cm=H.l(a,"$ix",[P.m,[P.b,A.cl]],"$ax")},
si0:function(a){this.cn=H.l(a,"$ix",[P.m,A.aN],"$ax")},
sf1:function(a){this.co=H.l(a,"$ix",[P.m,[P.b,A.cm]],"$ax")}}
A.aG.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aJ.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aK.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hL.prototype={
i:function(a){return this.ba}}
A.ck.prototype={}
A.cl.prototype={}
A.cm.prototype={}
A.cZ.prototype={
bG:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cs:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dg(b,35633)
r.f=r.dg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.F(H.lA(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.C(P.D("Failed to link shader: "+H.j(s)))}r.hW()
r.hY()},
a_:function(a){a.a.useProgram(this.r)
this.x.iG()},
dg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lA(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.D("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hW:function(){var u,t,s,r=this,q=H.d([],[A.dB]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dB(p,t.name,s))}r.x=new A.fD(q)},
hY:function(){var u,t,s,r=this,q=H.d([],[A.eq]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iB(t.type,t.size,t.name,s))}r.y=new A.jg(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.aN(u,b,c)
else return A.lo(u,this.r,b,a,c)},
fi:function(a,b,c){var u=this.a
if(a===1)return new A.bw(u,b,c)
else return A.lo(u,this.r,b,a,c)},
fj:function(a,b,c){var u=this.a
if(a===1)return new A.bV(u,b,c)
else return A.lo(u,this.r,b,a,c)},
bn:function(a,b){return new P.eH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iB:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.ac(u.a,c,d)
case 35664:return new A.jc(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.d6(u.a,c,d)
case 35667:return new A.jd(u.a,c,d)
case 35668:return new A.je(u.a,c,d)
case 35669:return new A.jf(u.a,c,d)
case 35674:return new A.jh(u.a,c,d)
case 35675:return new A.bU(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.fi(b,c,d)
case 35680:return u.fj(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.D("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.eg.prototype={}
A.eq.prototype={}
A.jg.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.D("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.V()},
V:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aN.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.je.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.jf.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sie:function(a){H.l(a,"$ib",[P.m],"$ab")}}
A.ac.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.d6.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.jh.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.bU.prototype={
a7:function(a){var u=new Float32Array(H.cp(H.l(a,"$ib",[P.B],"$ab")))
C.d.eA(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.al.prototype={
a7:function(a){var u=new Float32Array(H.cp(H.l(a,"$ib",[P.B],"$ab")))
C.d.eB(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.bw.prototype={
eI:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.bV.prototype={
eJ:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.l1.prototype={
$1:function(a){return new V.a8(Math.cos(a),Math.sin(a),0)},
$S:44}
F.kO.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lL(n.$1(o),m)
m=J.ns(J.lL(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.Q(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.D(m)))
n=$.mu
if(n==null){n=new V.Q(1,0,0)
$.mu=n
t=n}else t=n
n=u.aE(!J.V(u,t)?V.mw():t)
s=n.w(0,Math.sqrt(n.D(n)))
n=s.aE(u)
t=n.w(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=J.nr(l,new V.a8(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.V(a.f,m)){a.f=H.f(m,"$ia8")
n=a.a
if(n!=null)n.aj()}},
$S:45}
F.ab.prototype={
b9:function(){var u=this
if(!u.gdX()){C.a.R(u.a.a.d.b,u)
u.a.a.aj()}u.hH()
u.hI()
u.hJ()},
hT:function(a){this.a=a
C.a.h(a.d.b,this)},
hU:function(a){this.b=a
C.a.h(a.d.c,this)},
hV:function(a){this.c=a
C.a.h(a.d.d,this)},
hH:function(){var u=this.a
if(u!=null){C.a.R(u.d.b,this)
this.a=null}},
hI:function(){var u=this.b
if(u!=null){C.a.R(u.d.c,this)
this.b=null}},
hJ:function(){var u=this.c
if(u!=null){C.a.R(u.d.d,this)
this.c=null}},
gdX:function(){return this.a==null||this.b==null||this.c==null},
fa:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d8()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ef())return
return s.w(0,Math.sqrt(s.D(s)))},
fe:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.t(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.aE(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
ca:function(){var u,t=this
if(t.d!=null)return!0
u=t.fa()
if(u==null){u=t.fe()
if(u==null)return!1}t.d=u
t.a.a.aj()
return!0},
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d8()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ef())return
return s.w(0,Math.sqrt(s.D(s)))},
fd:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.t(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.t(0,g).u(0,p).p(0,g).t(0,j)
l=new V.Q(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.aE(q)
l=l.w(0,Math.sqrt(l.D(l))).aE(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
c8:function(){var u,t=this
if(t.e!=null)return!0
u=t.f9()
if(u==null){u=t.fd()
if(u==null)return!1}t.e=u
t.a.a.aj()
return!0},
giw:function(a){var u=this
if(J.V(u.a,u.b))return!0
if(J.V(u.b,u.c))return!0
if(J.V(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
K:function(a){var u,t,s=this
if(s.gdX())return a+"disposed"
u=a+C.b.aG(J.aR(s.a.e),0)+", "+C.b.aG(J.aR(s.b.e),0)+", "+C.b.aG(J.aR(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
V:function(){return this.K("")}}
F.hb.prototype={}
F.iB.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bO.prototype={}
F.hw.prototype={}
F.ja.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
return t==u.e}else{t=b.a
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
return t==u.e}else return!1}}}
F.cd.prototype={}
F.ee.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u},
aD:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aD()||!1
if(!t.a.aD())u=!1
s=t.e
if(s!=null)s.aJ(0)
return u},
iZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.ar];u.length!==0;){t=C.a.giL(u)
C.a.eo(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.bb(0,t,q)){C.a.h(s,q)
C.a.eo(u,r)}}if(s.length>1)b.iY(s)}}p.a.G()
p.c.cJ()
p.d.cJ()
p.b.jg()
p.c.cK(new F.ja())
p.d.cK(new F.iB())
o=p.e
if(o!=null)o.aJ(0)},
c7:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aE()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bC().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.c_().a)!==0)++s
if((t&$.dv().a)!==0)++s
if((t&$.dw().a)!==0)++s
if((t&$.cA().a)!==0)++s
if((t&$.bA().a)!==0)++s
r=a3.gcV(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dD])
for(n=0,m=0;m<s;++m){l=a3.ip(m)
k=l.gcV(l)
C.a.k(o,m,new Z.dD(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].iV(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cp(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c2(new Z.ey(a0,f),o,a3)
e.sfv(H.d([],[Z.ca]))
a.b.b
if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.G()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.G()
C.a.h(d,c.e)}b=Z.mx(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.ca(1,d.length,b))}if(a.d.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.G()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.G()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.G()
C.a.h(d,c.e)}b=Z.mx(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.ca(4,d.length,b))}return e},
i:function(a){var u=this,t=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.K("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.K("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.K("   "))}return C.a.n(t,"\n")},
aj:function(){var u=this.e
if(u!=null)u.E(null)},
$iq0:1}
F.iu.prototype={
ij:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.ar],"$ab")
u=H.d([],[F.ab])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dO(t,q,p))}return u},
ik:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ar],"$ab")
u=H.d([],[F.ab])
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
C.a.h(u,F.dO(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dO(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dO(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dO(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bb(0,p,n)){p.b9()
break}}}}},
cJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giw(s)
if(t)s.b9()}},
aD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].ca())s=!1
return s},
c9:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].c8())s=!1
return s},
i:function(a){return this.V()},
K:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].K(a))
return C.a.n(r,"\n")},
V:function(){return this.K("")},
sfp:function(a){this.b=H.l(a,"$ib",[F.ab],"$ab")}}
F.iv.prototype={
gl:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bb(0,p,n)){p.b9()
break}}}}},
cJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.V(s.a,s.b)
if(t)s.b9()}},
i:function(a){return this.V()},
K:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].K(a+(""+u+". ")))}return C.a.n(s,"\n")},
V:function(){return this.K("")},
sfw:function(a){this.b=H.l(a,"$ib",[F.bO],"$ab")}}
F.iw.prototype={
gl:function(a){return 0},
jg:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
t=t[u].gjW()
t=t.gjT(t)
if(t.gl(t).as(0,1)){t=this.b
return H.e(t,u)
t[u].b9()}}},
i:function(a){return this.V()},
K:function(a){var u,t,s=H.d([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].K(a))}return C.a.n(s,"\n")},
V:function(){return this.K("")},
sc_:function(a){this.b=H.l(a,"$ib",[F.cd],"$ab")}}
F.ar.prototype={
dV:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jy(u.cx,r,o,t,s,q,p,a,n)},
iV:function(a){var u,t,s=this
if(a.v(0,$.aE())){u=s.f
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bC())){u=s.r
t=[P.B]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bB())){u=s.x
t=[P.B]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bn())){u=s.y
t=[P.B]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.c_())){u=s.z
t=[P.B]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dv())){u=s.Q
t=[P.B]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dw())){u=s.Q
t=[P.B]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cA()))return H.d([s.ch],[P.B])
else if(a.v(0,$.bA())){u=s.cx
t=[P.B]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.B])},
ca:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.C(0,new F.jJ(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.aj()
s=t.a.e
if(s!=null)s.aJ(0)}return!0},
c8:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d8()
t.d.C(0,new F.jI(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.aj()
s=t.a.e
if(s!=null)s.aJ(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.V()},
K:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.aG(J.aR(s.e),0))
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
t=C.a.n(q,", ")
return a+"{"+t+"}"},
V:function(){return this.K("")}}
F.jJ.prototype={
$1:function(a){var u,t
H.f(a,"$iab")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:9}
F.jI.prototype={
$1:function(a){var u,t
H.f(a,"$iab")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:9}
F.jz.prototype={
G:function(){var u,t,s,r
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
u.aj()
return!0},
bo:function(a,b,c,d,e,f){var u=F.jy(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
aD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].ca()
return!0},
c9:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].c8()
return!0},
iv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.V()},
K:function(a){var u,t,s,r
this.G()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].K(a))
return C.a.n(u,"\n")},
V:function(){return this.K("")},
sig:function(a){this.c=H.l(a,"$ib",[F.ar],"$ab")}}
F.jA.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
C:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.ab]})
C.a.C(u.b,b)
C.a.C(u.c,new F.jB(u,b))
C.a.C(u.d,new F.jC(u,b))},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].K(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].K(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].K(""))
return C.a.n(r,"\n")},
sfq:function(a){this.b=H.l(a,"$ib",[F.ab],"$ab")},
sfs:function(a){this.c=H.l(a,"$ib",[F.ab],"$ab")},
sft:function(a){this.d=H.l(a,"$ib",[F.ab],"$ab")}}
F.jB.prototype={
$1:function(a){H.f(a,"$iab")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:9}
F.jC.prototype={
$1:function(a){var u
H.f(a,"$iab")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:9}
F.jD.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.V()},
V:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].K(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)C.a.h(r,u[s].K(""))
return C.a.n(r,"\n")},
sfz:function(a){this.b=H.l(a,"$ib",[F.bO],"$ab")},
sfA:function(a){this.c=H.l(a,"$ib",[F.bO],"$ab")}}
F.jF.prototype={}
F.jE.prototype={
bb:function(a,b,c){return J.V(b.f,c.f)}}
F.jG.prototype={}
F.i8.prototype={
iY:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.ar],"$ab")
u=V.d8()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.Q(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.V(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}return}}
F.jH.prototype={
gl:function(a){return 0},
i:function(a){return this.V()},
V:function(){var u,t,s=H.d([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].K(""))}return C.a.n(s,"\n")},
sc_:function(a){this.b=H.l(a,"$ib",[F.cd],"$ab")}}
O.h_.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.N():u},
at:function(){var u=this.r
if(u!=null)u.E(null)},
sdU:function(a){if(this.b!=a){this.b=a
this.at()}},
sdS:function(a){if(this.c!=a){this.c=a
this.at()}},
sdR:function(a){var u=a==null?V.bP():a
this.f=u
if(!J.V(u,a)){this.f=a
this.at()}},
af:function(a,b){},
bk:function(a,b){H.l(a,"$ib",[T.bS],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
cL:function(a,b){var u,t,s,r,q,p,o,n=this,m="Distort"
if(n.a==null){u=H.f(a.fr.j(0,m),"$idJ")
if(u==null){t=a.a
u=new A.dJ(t,m)
u.bG(t,m)
u.cs(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.r(u.y.M(0,"projViewObjMat"),"$ial")
u.cx=H.r(u.y.M(0,"colorTxt2DMat"),"$ibU")
u.cy=H.r(u.y.M(0,"bumpTxt2DMat"),"$ibU")
u.db=H.r(u.y.M(0,"colorTxt"),"$ibw")
u.dx=H.r(u.y.M(0,"bumpTxt"),"$ibw")
u.dy=H.r(u.y.M(0,"bumpMat"),"$ial")
a.c4(u)}n.a=u}if(b.e==null){t=b.d
s=$.aE()
r=$.bn()
r=t.c7(new Z.d9(a.a),new Z.bx(s.a|r.a))
r.au($.aE()).e=n.a.z.c
r.au($.bn()).e=n.a.Q.c
b.e=r}q=H.d([],[T.bS])
n.bk(q,n.b)
n.bk(q,n.c)
for(t=a.a,p=0;p<q.length;++p){s=q[p]
if(!s.c&&s.d){s.c=!0
t.activeTexture(33984+s.a)
t.bindTexture(3553,s.b)}}s=n.a
s.a_(a)
r=n.b
s.dF(s.db,r)
r=n.c
s.dF(s.dx,r)
r=a.gen()
o=s.ch
o.toString
o.a7(r.a3(0,!0))
r=n.d
o=s.cx
o.toString
o.a7(r.a3(0,!0))
r=n.e
o=s.cy
o.toString
o.a7(r.a3(0,!0))
r=n.f
s=s.dy
s.toString
s.a7(r.a3(0,!0))
s=b.e
if(s instanceof Z.c2){s.a_(a)
s.ae(a)
s.ak(a)}else b.e=null
s=n.a
s.toString
t.useProgram(null)
s.x.ce()
for(p=0;p<q.length;++p){s=q[p]
if(s.c){s.c=!1
t.activeTexture(33984+s.a)
t.bindTexture(3553,null)}}}}
O.e0.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.N():u},
a5:function(a){var u
H.f(a,"$iz")
u=this.fr
if(u!=null)u.E(a)},
at:function(){return this.a5(null)},
dw:function(a){H.f(a,"$iz")
this.a=null
this.a5(a)},
hO:function(){return this.dw(null)},
fO:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bL([u])
u.b=!0
this.a5(u)},
fQ:function(a,b){var u=V.av
H.l(b,"$ii",[u],"$ai")
u=new D.bM([u])
u.b=!0
this.a5(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a4([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aG])
h.C(0,new O.hP(j,q))
C.a.bE(q,new O.hQ())
p=new H.a4([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){o=u[s]
r=o.gb8()
n=p.j(0,o.gb8())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aJ])
p.C(0,new O.hR(j,m))
C.a.bE(m,new O.hS())
l=new H.a4([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.y)(i),++s){o=i[s]
t=o.gb8()
r=l.j(0,o.gb8())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aK])
l.C(0,new O.hT(j,k))
C.a.bE(k,new O.hU())
i=C.e.ac(j.e.a.length+3,4)
j.dy.e
return A.nY(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
bk:function(a,b){H.l(a,"$ib",[T.bS],"$ab")},
af:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.au(u,u.length,[H.q(u,0)]);u.B();){t=u.d
t.toString
s=$.jx
if(s==null)s=$.jx=new V.Q(0,0,1)
t.a=s
r=$.jw
t.d=r==null?$.jw=new V.Q(0,1,0):r
r=$.jv
t.e=r==null?$.jv=new V.Q(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.by(s)
r=s.a
p=s.b
o=s.c
t.a=s.w(0,Math.sqrt(r*r+p*p+o*o))
o=q.by(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.w(0,Math.sqrt(p*p+r*r+s*s))
s=q.by(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.w(0,Math.sqrt(r*r+p*p+o*o))}}}},
cL:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dd()
u=H.f(b4.fr.j(0,b3.ba),"$ie1")
if(u==null){u=A.nX(b3,b4.a)
b4.c4(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dZ
b3=b5.e
if(!(b3 instanceof Z.c2))b3=b5.e=null
if(b3==null||!b3.d.v(0,s)){b3=t.k3
if(b3)b5.d.aD()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c9()
q.a.c9()
q=q.e
if(q!=null)q.aJ(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iv()
p=p.e
if(p!=null)p.aJ(0)}n=b5.d.c7(new Z.d9(b4.a),s)
n.au($.aE()).e=b2.a.Q.c
if(b3)n.au($.bC()).e=b2.a.cx.c
if(r)n.au($.bB()).e=b2.a.ch.c
if(t.r1)n.au($.bn()).e=b2.a.cy.c
if(q)n.au($.c_()).e=b2.a.db.c
if(t.rx)n.au($.bA()).e=b2.a.dx.c
b5.e=n}b3=T.bS
m=H.d([],[b3])
b2.a.a_(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga6(q)
r=r.dy
r.toString
r.a7(q.a3(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga6(q)
p=b4.dx
p=b4.cx=q.u(0,p.ga6(p))
q=p}r=r.fr
r.toString
r.a7(q.a3(0,!0))}r=b2.a
q=b4.gen()
r=r.fy
r.toString
r.a7(q.a3(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.a7(C.j.a3(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.a7(C.j.a3(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.a7(C.j.a3(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.d.bz(r.a,r.d,l)
for(r=[P.B],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iav")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cp(H.l(p.a3(0,!0),"$ib",r,"$ab")))
C.d.eB(q.a,q.d,!1,j)}}if(t.a.a){r=b2.a
q=b2.f.f
r=r.r2
C.d.X(r.a,r.d,q.a,q.b,q.c)}if(t.id){if(t.b.a){r=b2.a
q=b2.r.f
r=r.x1
C.d.X(r.a,r.d,q.a,q.b,q.c)}if(t.c.a){r=b2.a
q=b2.x.f
r=r.y2
C.d.X(r.a,r.d,q.a,q.b,q.c)}if(t.d.a){r=b2.a
q=b2.y.f
r=r.e_
C.d.X(r.a,r.d,q.a,q.b,q.c)}r=t.e.a
if(!r)q=!1
else q=!0
if(q){q=b2.a
p=b2.z.ch
q=q.e1
C.d.a4(q.a,q.d,p)}if(r){r=b2.a
q=b2.z.f
r=r.e0
C.d.X(r.a,r.d,q.a,q.b,q.c)}r=t.z
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.m
h=new H.a4([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.y)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dx(b2.a.ck.j(0,0),e)
o=i.by(f.a)
c=o.a
b=o.b
a=o.c
a=o.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.d.X(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.d.X(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.y)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cj.j(0,p)
C.d.bz(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.m
a0=new H.a4([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.B],g=0;g<q.length;q.length===p||(0,H.y)(q),++g){f=q[g]
a1=f.gb8()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dx(b2.a.cm.j(0,a1),e)
a2=i.u(0,f.ga6(f))
b=f.ga6(f)
a=$.cV
b=b.cO(a==null?$.cV=new V.a8(0,0,0):a)
a=d.b
C.d.X(a.a,a.d,b.a,b.b,b.c)
b=$.cV
b=a2.cO(b==null?$.cV=new V.a8(0,0,0):b)
a=d.c
C.d.X(a.a,a.d,b.a,b.b,b.c)
b=f.gb7(f)
a=d.e
C.d.X(a.a,a.d,b.a,b.b,b.c)
f.gaK()
b=a2.cv(0)
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
j=new Float32Array(H.cp(H.l(new V.cN(a,a3,a4,a5,a6,a7,a8,a9,b).a3(0,!0),"$ib",c,"$ab")))
C.d.eA(b0.a,b0.d,!1,j)
f.gaK()
b=f.gaK()
H.l(m,"$ib",o,"$ab")
if(!C.a.U(m,b)){b.scr(0,m.length)
C.a.h(m,b)}b=f.gaK()
a=b.gcz(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaZ()
b=f.geK()
a=d.x
a.toString
a3=b.gcf(b)
a4=b.gcg(b)
a5=b.giF()
b=b.giE()
C.d.ez(a.a,a.d,a3,a4,a5,b)
b=f.gaZ()
if(!C.a.U(m,b)){b.scr(0,m.length)
C.a.h(m,b)}b=f.gaZ()
a=b.gcz(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giH()){b=f.giq()
a=d.y
C.d.a4(a.a,a.d,b)
b=f.gir()
a=d.z
C.d.a4(a.a,a.d,b)
b=f.gis()
a=d.Q
C.d.a4(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.y)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cl.j(0,p)
C.d.bz(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga6(q)
q=P.m
b1=new H.a4([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.y)(q),++g){f=q[g]
a1=f.gb8()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dx(b2.a.co.j(0,a1),e)
o=f.gjd(f)
c=d.b
C.d.X(c.a,c.d,o.a,o.b,o.c)
o=f.gjA(f).jS()
c=d.c
C.d.X(c.a,c.d,o.a,o.b,o.c)
o=i.cO(f.gjd(f))
c=d.d
C.d.X(c.a,c.d,o.a,o.b,o.c)
o=f.gb7(f)
c=d.e
C.d.X(c.a,c.d,o.a,o.b,o.c)
f.gaK()
o=f.gcP()
c=d.f
C.d.X(c.a,c.d,o.a,o.b,o.c)
o=f.gcM(f)
c=d.r
C.d.X(c.a,c.d,o.a,o.b,o.c)
o=f.gjU()
c=d.x
C.d.a4(c.a,c.d,o)
o=f.gjV()
c=d.y
C.d.a4(c.a,c.d,o)
f.gaK()
o=f.gaK()
H.l(m,"$ib",b3,"$ab")
if(!C.a.U(m,o)){o.scr(0,m.length)
C.a.h(m,o)}o=f.gaK()
c=o.gcz(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaZ()
o=f.geK()
c=d.z
c.toString
b=o.gcf(o)
a=o.gcg(o)
a3=o.giF()
o=o.giE()
C.d.ez(c.a,c.d,b,a,a3,o)
o=f.gaZ()
if(!C.a.U(m,o)){o.scr(0,m.length)
C.a.h(m,o)}o=f.gaZ()
c=o.gcz(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjB()){o=f.gjz()
c=d.Q
C.d.a4(c.a,c.d,o)
o=f.gjy()
c=d.ch
C.d.a4(c.a,c.d,o)}if(f.giH()){o=f.giq()
c=d.cx
C.d.a4(c.a,c.d,o)
o=f.gir()
c=d.cy
C.d.a4(c.a,c.d,o)
o=f.gis()
c=d.db
C.d.a4(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.y)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cn.j(0,q)
C.d.bz(q.a,q.d,l)}}}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga6(r).cv(0)}b3=b3.id
b3.toString
b3.a7(r.a3(0,!0))}if(t.cy){b2.bk(m,b2.ch)
b3=b2.a
r=b2.ch
b3.hS(b3.e2,r)
if(t.r.a){b3=b2.a
r=b2.cx.f
b3=b3.e3
C.d.X(b3.a,b3.d,r.a,r.b,r.c)}b3=t.x.a
if(!b3)r=!1
else r=!0
if(r){r=b2.a
q=b2.cy.ch
r=r.e4
C.d.a4(r.a,r.d,q)}if(b3){b3=b2.a
r=b2.cy.f
b3=b3.e5
C.d.X(b3.a,b3.d,r.a,r.b,r.c)}}b3=t.y.a
r=!b3
if(r)q=!1
else q=!0
if(q){if(b3){b3=b2.a
q=b2.db.f
b3=b3.e6
C.d.a4(b3.a,b3.d,q)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a_(b4)
b3=b5.e
b3.a_(b4)
b3.ae(b4)
b3.ak(b4)
if(r)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ak(b4)
b3=b2.a
b3.toString
b4.a.useProgram(null)
b3.x.ce()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().ba},
sfc:function(a){this.e=H.l(a,"$ia3",[V.av],"$aa3")}}
O.hP.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aG(a,C.e.ac(b+3,4)*4))},
$S:14}
O.hQ.prototype={
$2:function(a,b){H.f(a,"$iaG")
H.f(b,"$iaG")
return J.l4(a.a,b.a)},
$S:49}
O.hR.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aJ(a,C.e.ac(b+3,4)*4))},
$S:14}
O.hS.prototype={
$2:function(a,b){H.f(a,"$iaJ")
H.f(b,"$iaJ")
return J.l4(a.a,b.a)},
$S:50}
O.hT.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aK(a,C.e.ac(b+3,4)*4))},
$S:14}
O.hU.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.l4(a.a,b.a)},
$S:51}
O.hJ.prototype={
aB:function(){var u,t=this
t.cX()
u=t.f
if(!(Math.abs(u-1)<$.P().a)){t.f=1
u=new D.K(t.b,u,1,[P.B])
u.b=!0
t.a.a5(u)}}}
O.e2.prototype={
aB:function(){},
dD:function(a){var u,t,s=this
if(!s.c.v(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aB()
u=s.a
u.a=null
u.a5(null)}}}
O.hK.prototype={}
O.bc.prototype={
dB:function(a){var u,t,s=this
if(!s.f.v(0,a)){u=s.f
s.f=a
t=new D.K(s.b+".color",u,a,[V.a5])
t.b=!0
s.a.a5(t)}},
aB:function(){this.cX()
this.dB(new V.a5(1,1,1))},
sb7:function(a,b){this.dD(new A.ap(!0,!1,!1))
this.dB(b)}}
O.hM.prototype={}
O.hN.prototype={
aB:function(){var u,t=this
t.cY()
u=t.ch
if(!(Math.abs(u-1)<$.P().a)){t.ch=1
u=new D.K(t.b+".refraction",u,1,[P.B])
u.b=!0
t.a.a5(u)}}}
O.hO.prototype={
dE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.K(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.a5(t)}},
aB:function(){this.cY()
this.dE(100)}}
O.ef.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u},
a5:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.E(a)},
at:function(){return this.a5(null)},
af:function(a,b){},
cL:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$ieg")
if(u==null){t=a.a
u=new A.eg(t,n)
u.bG(t,n)
u.cs(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$iac")
u.ch=H.r(u.y.j(0,"ratio"),"$iac")
u.cx=H.r(u.y.j(0,"boxClr"),"$iZ")
u.cy=H.r(u.y.j(0,"boxTxt"),"$ibV")
u.db=H.r(u.y.j(0,"viewMat"),"$ial")
a.c4(u)}o.a=u}if(b.e==null){t=b.d.c7(new Z.d9(a.a),$.aE())
t.au($.aE()).e=o.a.z.c
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
C.d.a4(p.a,p.d,q)
q=r.ch
C.d.a4(q.a,q.d,t/s)
s=o.c
r.cy.eJ(s)
s=o.d
t=r.cx
C.d.X(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga6(s).cv(0)
r=r.db
r.toString
r.a7(s.a3(0,!0))
t=b.e
if(t instanceof Z.c2){t.a_(a)
t.ae(a)
t.ak(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.ce()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bR.prototype={}
T.bS.prototype={}
T.iS.prototype={}
T.iW.prototype={
dC:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ci()}},
gq:function(){var u=this.y
return u==null?this.y=D.N():u}}
T.em.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.N():u}}
T.iX.prototype={
iW:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lb(a)
t=T.lm(q)
r=W.o
W.aa(u,"load",H.n(new T.iZ(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aO:function(a,b,c,d,e,f){var u,t=W.lb(c);++this.d
u=W.o
W.aa(t,"load",H.n(new T.iY(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
dA:function(a,b,c){var u,t,s,r
b=V.du(b)
u=V.du(a.width)
t=V.du(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l7()
s.width=u
s.height=t
r=H.f(C.i.eF(s,"2d"),"$icE")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pr(r.getImageData(0,0,s.width,s.height))}}}
T.iZ.prototype={
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
C.d.eu(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dC();++u.e},
$S:11}
T.iY.prototype={
$1:function(a){var u=this,t=u.a,s=t.dA(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.d.eu(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ci()}++t.e},
$S:11}
V.bo.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.e_.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saa:function(a){this.a=H.l(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.aw.prototype={
aF:function(a,b){return!this.eP(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}}
V.ij.prototype={
aF:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cg(this.a),t=H.cg(this.b)
return u+".."+t},
$iaA:1}
V.it.prototype={
eU:function(a){var u,t
if(a.a.length<=0)throw H.c(P.D("May not create a SetMatcher with zero characters."))
u=new H.a4([P.m,P.R])
for(t=new H.cM(a,a.gl(a),[H.am(a,"v",0)]);t.B();)u.k(0,t.d,!0)
this.shR(u)},
aF:function(a,b){return this.a.bp(0,b)},
i:function(a){var u=this.a
return P.d1(u.ga9(u),0,null)},
shR:function(a){this.a=H.l(a,"$ix",[P.m,P.R],"$ax")},
$iaA:1}
V.d_.prototype={
n:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.m(0,b))
r.saa(H.d([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
iK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
sic:function(a){this.c=H.l(a,"$ib",[V.d5],"$ab")}}
V.eo.prototype={
i:function(a){var u=H.lI(this.b,"\n","\\n"),t=H.lI(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d4.prototype={
aI:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.y)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shK:function(a){var u=P.h
this.c=H.l(a,"$ix",[u,u],"$ax")}}
V.j1.prototype={
m:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d_(this,b)
u.sic(H.d([],[V.d5]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d4(a)
u=P.h
t.shK(new H.a4([u,u]))
this.b.k(0,a,t)}return t},
ey:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.eo]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.iK(r)
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
t=new V.eo(n==null?o.b:n,p,s)}++s}}},
si2:function(a){this.a=H.l(a,"$ix",[P.h,V.d_],"$ax")},
si5:function(a){this.b=H.l(a,"$ix",[P.h,V.d4],"$ax")}}
V.d5.prototype={
i:function(a){return this.b.b+": "+this.cW(0)}}
X.fI.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.N():u},
a2:function(a){var u=this.fr
if(u!=null)u.E(a)},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.K("width",u,b,[P.m])
u.b=!0
t.a2(u)}},
sao:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.K("height",u,b,[P.m])
u.b=!0
t.a2(u)}},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.saq(0,C.e.a1(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.sao(0,C.e.a1(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.a2(u.getParameter(3379))
p=V.du(s)
o=V.du(r)
q=V.du(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.d.ev(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.lm(n)
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
if(t!=null)t.ci()
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
a.c=C.c.a1(s*h.a)
r=t.d
a.d=C.c.a1(r*h.b)
l=t.a
k=h.c
if(typeof k!=="number")return H.E(k)
j=C.c.a1(l*k)
t=t.b
l=h.d
if(typeof l!=="number")return H.E(l)
u.viewport(j,C.c.a1(t*l),C.c.a1(s*k),C.c.a1(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
ak:function(a){a.a.bindFramebuffer(36160,null)}}
X.c3.prototype={$icc:1}
X.hi.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.N():u},
a_:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.c.a1(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.c.a1(r*t)
r=C.c.a1(s.c*u)
a.c=r
s=C.c.a1(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
ak:function(a){}}
X.ho.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.N():u},
a_:function(a){var u
a.cy.bw(V.bP())
u=V.bP()
a.db.bw(u)},
ak:function(a){a.cy.aH()
a.db.aH()},
$icc:1,
$ic3:1}
X.e8.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.N():u},
a2:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.E(a)},
f6:function(){return this.a2(null)},
a_:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bd(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bw(k)
r=$.m9
if(r==null){r=V.mb()
q=V.lr()
p=$.mt
r=V.m3(r,q,p==null?$.mt=new V.Q(0,0,-1):p)
$.m9=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aX(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bw(u)},
ak:function(a){a.cy.aH()
a.db.aH()},
$icc:1,
$ic3:1}
X.d2.prototype={}
V.bG.prototype={
bi:function(a){this.b=new P.hm(C.Q)
this.c=null
this.sbP(H.d([],[[P.b,W.aH]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aH]))
u=a.split("\n")
for(l=u.length,t=[W.aH],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.J(q)
o=m.b.fh(q,0,q.length)
n=o==null?q:o
C.O.eH(p,H.lI(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gay(m.d),p)}},
el:function(a,b){var u,t,s,r,q=this
H.l(b,"$ib",[P.h],"$ab")
q.sbP(H.d([],[[P.b,W.aH]]))
u=C.a.n(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bq():t).ey(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)q.bv(t[r])},
sbP:function(a){this.d=H.l(a,"$ib",[[P.b,W.aH]],"$ab")}}
V.l_.prototype={
$1:function(a){var u
H.f(a,"$ibh")
u=C.c.ex(this.a.giO(),2)
if(u!=="0.00")P.lH(u+" fps")},
$S:53}
V.fY.prototype={
bv:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.j2()
a1.c=a1.m(0,r)
u=a1.m(0,r).n(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=a1.m(0,q).n(0,q)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=a1.m(0,r).n(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.m(0,p).n(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.m(0,p).n(0,o)
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=a1.m(0,o).n(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=a1.m(0,n).n(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=a1.m(0,r).n(0,m)
u=V.w(new H.t(l))
C.a.h(t.a,u)
u=a1.m(0,m).n(0,m)
t=V.w(new H.t(l))
C.a.h(u.a,t)
t=a1.m(0,r).n(0,k)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
u=a1.m(0,k).n(0,j)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
t=a1.m(0,k).n(0,i)
u=V.w(new H.t("\\"))
C.a.h(t.a,u)
u=a1.m(0,i).n(0,k)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
C.a.h(a1.m(0,k).n(0,k).a,new V.bo())
t=a1.m(0,r).n(0,h)
u=V.w(new H.t("'"))
C.a.h(t.a,u)
u=a1.m(0,h).n(0,g)
t=V.w(new H.t("'"))
C.a.h(u.a,t)
t=a1.m(0,h).n(0,f)
u=V.w(new H.t("\\"))
C.a.h(t.a,u)
u=a1.m(0,f).n(0,h)
t=V.w(new H.t("'"))
C.a.h(u.a,t)
C.a.h(a1.m(0,h).n(0,h).a,new V.bo())
t=a1.m(0,r).n(0,e)
u=V.w(new H.t("/"))
C.a.h(t.a,u)
u=a1.m(0,e).n(0,d)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
t=a1.m(0,d).n(0,c)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=a1.m(0,d).n(0,d)
t=new V.aw()
s=[V.aA]
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=a1.m(0,e).n(0,b)
t=V.w(new H.t("*"))
C.a.h(u.a,t)
t=a1.m(0,b).n(0,a)
u=V.w(new H.t("*"))
C.a.h(t.a,u)
u=a1.m(0,a).n(0,b)
t=new V.aw()
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("*"))
C.a.h(t.a,u)
u=a1.m(0,a).n(0,c)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
t=a1.m(0,r).n(0,a0)
u=V.w(new H.t(" \n\t"))
C.a.h(t.a,u)
u=a1.m(0,a0).n(0,a0)
t=V.w(new H.t(" \n\t"))
C.a.h(u.a,t)
t=a1.m(0,p)
t.d=t.a.N("Num")
t=a1.m(0,n)
t.d=t.a.N("Num")
t=a1.m(0,m)
t.d=t.a.N("Symbol")
t=a1.m(0,j)
t.d=t.a.N("String")
t=a1.m(0,g)
t.d=t.a.N("String")
t=a1.m(0,c)
t.d=t.a.N(d)
t=a1.m(0,a0)
t.d=t.a.N(a0)
t=a1.m(0,q)
t=t.d=t.a.N(q)
u=[P.h]
t.aI(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aI(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aI(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hj.prototype={
bv:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.j2()
e.c=e.m(0,r)
u=e.m(0,r).n(0,q)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=e.m(0,q).n(0,q)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=e.m(0,r).n(0,p)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.m(0,p).n(0,p)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.m(0,p).n(0,o)
t=V.w(new H.t("."))
C.a.h(u.a,t)
t=e.m(0,o).n(0,n)
u=V.a0("0","9")
C.a.h(t.a,u)
u=e.m(0,n).n(0,n)
t=V.a0("0","9")
C.a.h(u.a,t)
t=e.m(0,r).n(0,m)
u=V.w(new H.t(l))
C.a.h(t.a,u)
u=e.m(0,m).n(0,m)
t=V.w(new H.t(l))
C.a.h(u.a,t)
t=e.m(0,r).n(0,k)
u=V.w(new H.t("/"))
C.a.h(t.a,u)
u=e.m(0,k).n(0,j)
t=V.w(new H.t("/"))
C.a.h(u.a,t)
C.a.h(e.m(0,k).n(0,m).a,new V.bo())
t=e.m(0,j).n(0,i)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.m(0,j).n(0,j)
t=new V.aw()
s=[V.aA]
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.m(0,r).n(0,h)
t=V.w(new H.t("#"))
C.a.h(u.a,t)
t=e.m(0,h).n(0,h)
u=new V.aw()
u.saa(H.d([],s))
C.a.h(t.a,u)
t=V.w(new H.t("\n"))
C.a.h(u.a,t)
t=e.m(0,h).n(0,g)
u=V.w(new H.t("\n"))
C.a.h(t.a,u)
u=e.m(0,r).n(0,f)
t=V.w(new H.t(" \n\t"))
C.a.h(u.a,t)
t=e.m(0,f).n(0,f)
u=V.w(new H.t(" \n\t"))
C.a.h(t.a,u)
u=e.m(0,p)
u.d=u.a.N("Num")
u=e.m(0,n)
u.d=u.a.N("Num")
u=e.m(0,m)
u.d=u.a.N("Symbol")
u=e.m(0,i)
u.d=u.a.N(j)
u=e.m(0,g)
u.d=u.a.N(h)
u=e.m(0,f)
u.d=u.a.N(f)
u=e.m(0,q)
u=u.d=u.a.N(q)
t=[P.h]
u.aI(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aI(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aI(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hk.prototype={
bv:function(a){var u=this,t="#111"
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
bq:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.j2()
l.c=l.m(0,s)
u=l.m(0,s).n(0,r)
t=V.w(new H.t("_"))
C.a.h(u.a,t)
t=V.a0("a","z")
C.a.h(u.a,t)
t=V.a0("A","Z")
C.a.h(u.a,t)
t=l.m(0,r).n(0,r)
u=V.w(new H.t("_"))
C.a.h(t.a,u)
u=V.a0("0","9")
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.m(0,r).n(0,q)
t=V.w(new H.t("="))
C.a.h(u.a,t)
u.c=!0
u=l.m(0,s).n(0,p)
t=V.w(new H.t("</\\-!>="))
C.a.h(u.a,t)
t=l.m(0,p).n(0,p)
u=V.w(new H.t("</\\-!>="))
C.a.h(t.a,u)
u=l.m(0,s).n(0,o)
t=V.w(new H.t('"'))
C.a.h(u.a,t)
t=l.m(0,o).n(0,n)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
u=l.m(0,o).n(0,"EscStr")
t=V.w(new H.t("\\"))
C.a.h(u.a,t)
t=l.m(0,"EscStr").n(0,o)
u=V.w(new H.t('"'))
C.a.h(t.a,u)
C.a.h(l.m(0,o).n(0,o).a,new V.bo())
C.a.h(l.m(0,s).n(0,m).a,new V.bo())
u=l.m(0,m).n(0,m)
t=new V.aw()
t.saa(H.d([],[V.aA]))
C.a.h(u.a,t)
u=V.w(new H.t('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a0("a","z")
C.a.h(t.a,u)
u=V.a0("A","Z")
C.a.h(t.a,u)
u=l.m(0,p)
u.d=u.a.N("Symbol")
u=l.m(0,n)
u.d=u.a.N("String")
u=l.m(0,r)
t=u.a.N(r)
u.d=t
t.aI(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.m(0,q)
t.d=t.a.N(q)
t=l.m(0,m)
t.d=t.a.N(m)
return l}}
V.ie.prototype={
el:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sbP(H.d([],[[P.b,W.aH]]))
this.L(C.a.n(b,"\n"),"#111")},
bv:function(a){},
bq:function(){return}}
V.ix.prototype={
eV:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.aa(q,"scroll",H.n(new V.iz(o),{func:1,ret:-1,args:[r]}),!1,r)},
dN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.hX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ey(C.a.iU(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.pO(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
t.appendChild(l)}else{k=P.fj(C.y,n,C.h,!1)
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
eE:function(a){var u,t,s,r=new V.fY("dart")
r.bi("dart")
u=new V.hj("glsl")
u.bi("glsl")
t=new V.hk("html")
t.bi("html")
s=C.a.iM(H.d([r,u,t],[V.bG]),new V.iA(a))
if(s!=null)return s
r=new V.ie("plain")
r.bi("plain")
return r},
dM:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.l(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ds(r).a8(r,"+")){C.a.k(b0,s,C.b.ag(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a8(r,"-")){C.a.k(b0,s,C.b.ag(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eE(a8)
q.el(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fj(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lO()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.y)(r),++a0)C.a_.io(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.y)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gT(r);a3.B();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
ih:function(a){var u,t,s,r,q,p,o,n="auto"
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
hX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.j2()
u.c=u.m(0,q)
t=u.m(0,q).n(0,p)
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,p).n(0,p)
s=new V.aw()
r=[V.aA]
s.saa(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.t("*"))
C.a.h(s.a,t)
t=u.m(0,p).n(0,"BoldEnd")
s=V.w(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,q).n(0,o)
s=V.w(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,o).n(0,o)
s=new V.aw()
s.saa(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.t("_"))
C.a.h(s.a,t)
t=u.m(0,o).n(0,n)
s=V.w(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,q).n(0,m)
s=V.w(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,m).n(0,m)
s=new V.aw()
s.saa(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.t("`"))
C.a.h(s.a,t)
t=u.m(0,m).n(0,"CodeEnd")
s=V.w(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,q).n(0,l)
s=V.w(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.m(0,l).n(0,k)
s=V.w(new H.t("|"))
C.a.h(t.a,s)
s=u.m(0,l).n(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.m(0,l).n(0,l)
t=new V.aw()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
s=u.m(0,k).n(0,j)
t=V.w(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.m(0,k).n(0,k)
t=new V.aw()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.m(0,q).n(0,i).a,new V.bo())
s=u.m(0,i).n(0,i)
t=new V.aw()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.t("*_`["))
C.a.h(t.a,s)
s=u.m(0,"BoldEnd")
s.d=s.a.N(p)
s=u.m(0,n)
s.d=s.a.N(o)
s=u.m(0,"CodeEnd")
s.d=s.a.N(m)
s=u.m(0,j)
s.d=s.a.N("Link")
s=u.m(0,i)
s.d=s.a.N(i)
this.b=u}}
V.iz.prototype={
$1:function(a){P.ml(C.o,new V.iy(this.a))},
$S:11}
V.iy.prototype={
$0:function(){var u=C.c.a1(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
V.iA.prototype={
$1:function(a){return H.f(a,"$ibG").a===this.a},
$S:54}
V.iT.prototype={
dL:function(a,b,c){var u,t,s,r,q=this,p=W.lb(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.fz(q.c)
t=u.gl(u)
u=W.a7
W.aa(p,"click",H.n(new V.iV(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.fz(q.c).h(0,p)
J.fz(q.c).h(0,document.createElement("br"))
s=P.mp().gcH().j(0,H.j(q.a))
if(s==null){q.dJ(t)
r=c}else r=P.dt(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.dL(a,b,!1)},
dJ:function(a){var u,t,s=P.mp(),r=P.h,q=P.nT(s.gcH(),r,r)
q.k(0,this.a,""+a)
u=s.ep(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kn([],[]).cQ(""),"",t)}}
V.iV.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia7")
u=s.a
t=J.fz(u.c)
t.C(t,new V.iU())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.dJ(s.d)},
$S:55}
V.iU.prototype={
$1:function(a){var u
H.f(a,"$iO")
if(!!J.T(a).$ic9){u=a.style
u.border="solid 2px white"}},
$S:56}
X.kW.prototype={
$1:function(a){this.a.sdS(this.b.f.iW(a))},
$S:19}
X.kX.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dM("Vertex Shader for distort","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dM("Fragment Shader for distort","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.eM=u.i
u=J.dU.prototype
u.eO=u.i
u=P.i.prototype
u.eN=u.bA
u=W.O.prototype
u.bF=u.an
u=W.f1.prototype
u.eQ=u.ax
u=O.e2.prototype
u.cX=u.aB
u=O.bc.prototype
u.cY=u.aB
u=V.e_.prototype
u.eP=u.aF
u.cW=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pl","ov",10)
u(P,"pm","ow",10)
u(P,"pn","ox",10)
t(P,"mT","pj",3)
s(W,"pA",4,null,["$4"],["oz"],26,0)
s(W,"pB",4,null,["$4"],["oA"],26,0)
var m
r(m=E.aq.prototype,"gej",0,0,null,["$1","$0"],["ek","j5"],0,0)
r(m,"geh",0,0,null,["$1","$0"],["ei","j2"],0,0)
q(m,"gj0","j1",5)
q(m,"gj3","j4",5)
r(m=E.en.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],0,0)
p(m,"gjj","eq",3)
o(m=X.eu.prototype,"gh2","h3",13)
o(m,"gfR","fS",13)
o(m,"gfX","fY",4)
o(m,"gh6","h7",29)
o(m,"gh4","h5",29)
o(m,"gha","hb",4)
o(m,"ghe","hf",4)
o(m,"gh0","h1",4)
o(m,"ghc","hd",4)
o(m,"gfZ","h_",4)
o(m,"ghg","hh",36)
o(m,"ghi","hj",13)
o(m,"ghy","hz",12)
o(m,"ghu","hv",12)
o(m,"ghw","hx",12)
r(D.bI.prototype,"geZ",0,0,null,["$1","$0"],["az","f_"],0,0)
r(m=D.dW.prototype,"gdq",0,0,null,["$1","$0"],["dr","h8"],0,0)
o(m,"ghk","hl",58)
q(m,"gfL","fM",23)
q(m,"gho","hp",23)
n(V.W.prototype,"gl","cw",22)
n(V.Q.prototype,"gl","cw",22)
r(m=U.cL.prototype,"gaP",0,0,null,["$1","$0"],["O","ab"],0,0)
q(m,"gfJ","fK",18)
q(m,"ghm","hn",18)
r(m=U.ev.prototype,"gaP",0,0,null,["$1","$0"],["O","ab"],0,0)
o(m,"gbS","bT",1)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
r(m=U.ew.prototype,"gaP",0,0,null,["$1","$0"],["O","ab"],0,0)
o(m,"gbS","bT",1)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gfC","fD",1)
o(m,"gfE","fF",1)
o(m,"gia","ib",1)
o(m,"gi8","i9",1)
o(m,"gi6","i7",1)
o(U.ex.prototype,"gfH","fI",1)
r(m=M.dF.prototype,"gY",0,0,null,["$1","$0"],["Z","b_"],0,0)
q(m,"ghq","hr",17)
q(m,"ghs","ht",17)
r(M.dH.prototype,"gY",0,0,null,["$1","$0"],["Z","b_"],0,0)
r(m=M.dM.prototype,"gY",0,0,null,["$1","$0"],["Z","b_"],0,0)
q(m,"gfT","fU",5)
q(m,"gfV","fW",5)
r(m=O.e0.prototype,"gbH",0,0,null,["$1","$0"],["a5","at"],0,0)
r(m,"ghN",0,0,null,["$1","$0"],["dw","hO"],0,0)
q(m,"gfN","fO",16)
q(m,"gfP","fQ",16)
r(O.ef.prototype,"gbH",0,0,null,["$1","$0"],["a5","at"],0,0)
r(X.e8.prototype,"gf5",0,0,null,["$1","$0"],["a2","f6"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.lf,J.a,J.au,P.eP,P.i,H.cM,P.b9,H.c7,H.d7,H.fR,H.j7,P.bJ,H.cF,H.f6,P.ag,H.hx,H.hz,H.hs,P.fc,P.bl,P.aP,P.ez,P.iI,P.d0,P.iJ,P.bh,P.ao,P.kD,P.kh,P.cn,P.eO,P.v,P.kv,P.hF,P.c5,P.hn,P.kB,P.kA,P.R,P.az,P.ad,P.b8,P.ic,P.ej,P.eH,P.hh,P.bK,P.b,P.x,P.L,P.ax,P.h,P.ai,P.co,P.jm,P.kk,W.fU,W.bX,W.H,W.e6,W.f1,W.kq,W.dP,W.aC,W.kg,W.fk,P.km,P.fh,P.kb,P.U,O.a3,O.cO,E.fL,E.aq,E.ik,E.en,Z.ey,Z.d9,Z.c2,Z.ca,Z.bx,D.fO,D.c6,D.z,X.dE,X.dV,X.hu,X.hC,X.aB,X.i0,X.j3,X.eu,D.bI,D.af,D.e9,D.ei,V.a5,V.ae,V.h8,V.cN,V.av,V.a9,V.a8,V.bf,V.cX,V.W,V.Q,U.ev,U.ew,U.ex,M.dH,M.dM,M.aD,A.dB,A.fD,A.ap,A.aG,A.aJ,A.aK,A.hL,A.ck,A.cl,A.cm,A.eq,A.jg,F.ab,F.hb,F.bO,F.hw,F.cd,F.ee,F.iu,F.iv,F.iw,F.ar,F.jz,F.jA,F.jD,F.jF,F.jG,F.jH,O.bR,O.e2,O.hM,T.iX,V.bo,V.aA,V.e_,V.ij,V.it,V.d_,V.eo,V.d4,V.j1,X.d2,X.c3,X.ho,X.e8,V.bG,V.ix,V.iT])
s(J.a,[J.hr,J.dT,J.dU,J.aU,J.bN,J.br,H.cR,H.bQ,W.k,W.fA,W.c1,W.cE,W.b6,W.b7,W.X,W.eB,W.fZ,W.h0,W.eD,W.dL,W.eF,W.h2,W.o,W.eI,W.aT,W.hl,W.eK,W.bq,W.dY,W.hV,W.eQ,W.eR,W.aV,W.eS,W.eV,W.aW,W.eZ,W.f0,W.aY,W.f2,W.aZ,W.f7,W.aL,W.fa,W.j0,W.b0,W.fd,W.j5,W.jr,W.fl,W.fn,W.fp,W.fr,W.ft,P.bb,P.eM,P.be,P.eX,P.ii,P.f8,P.bi,P.ff,P.fE,P.eA,P.dC,P.dQ,P.ea,P.ec,P.ci,P.ed,P.el,P.er,P.f4])
s(J.dU,[J.id,J.bW,J.bs])
t(J.le,J.aU)
s(J.bN,[J.dS,J.dR])
t(P.hB,P.eP)
s(P.hB,[H.es,W.jS,W.as,P.hd])
t(H.t,H.es)
s(P.i,[H.h5,H.hG,H.da])
s(H.h5,[H.cb,H.hy])
s(P.b9,[H.hH,H.jL])
t(H.hI,H.cb)
t(H.fS,H.fR)
s(P.bJ,[H.i9,H.ht,H.jk,H.j9,H.fN,H.ir,P.fC,P.e7,P.aS,P.jl,P.ji,P.cj,P.fQ,P.fX])
s(H.cF,[H.l2,H.iP,H.kR,H.kS,H.kT,P.jO,P.jN,P.jP,P.jQ,P.ku,P.kt,P.jZ,P.k2,P.k_,P.k0,P.k1,P.k5,P.k6,P.k4,P.k3,P.iK,P.iL,P.kL,P.ke,P.kd,P.kf,P.hA,P.hE,P.h3,P.h4,P.jq,P.jn,P.jo,P.jp,P.kw,P.kx,P.kz,P.ky,P.kF,P.kE,P.kG,P.kH,W.h6,W.hX,W.hZ,W.iq,W.iH,W.jY,W.i7,W.i6,W.ki,W.kj,W.ks,W.kC,P.ko,P.kN,P.he,P.hf,P.fG,E.il,E.im,E.io,E.j_,D.h9,D.ha,F.l1,F.kO,F.jJ,F.jI,F.jB,F.jC,O.hP,O.hQ,O.hR,O.hS,O.hT,O.hU,T.iZ,T.iY,V.l_,V.iz,V.iy,V.iA,V.iV,V.iU,X.kW,X.kX])
s(H.iP,[H.iF,H.cC])
t(H.jM,P.fC)
t(P.hD,P.ag)
s(P.hD,[H.a4,W.jR])
t(H.e3,H.bQ)
s(H.e3,[H.df,H.dh])
t(H.dg,H.df)
t(H.cS,H.dg)
t(H.di,H.dh)
t(H.e4,H.di)
s(H.e4,[H.i1,H.i2,H.i3,H.i4,H.i5,H.e5,H.cT])
t(P.kc,P.kD)
t(P.ka,P.kh)
t(P.fi,P.hF)
t(P.et,P.fi)
s(P.c5,[P.fJ,P.h7])
t(P.bH,P.iJ)
s(P.bH,[P.fK,P.hm,P.ju,P.jt])
t(P.js,P.h7)
s(P.ad,[P.B,P.m])
s(P.aS,[P.ch,P.hp])
t(P.jU,P.co)
s(W.k,[W.G,W.hc,W.cP,W.aX,W.dj,W.b_,W.aM,W.dl,W.jK,W.db,P.fH,P.c0])
s(W.G,[W.O,W.bF,W.dc])
s(W.O,[W.u,P.p])
s(W.u,[W.dz,W.fB,W.cB,W.bE,W.c4,W.aH,W.hg,W.c9,W.is,W.bg,W.ek,W.iN,W.iO,W.d3])
s(W.b6,[W.cG,W.fV,W.fW])
t(W.fT,W.b7)
t(W.cH,W.eB)
t(W.eE,W.eD)
t(W.dK,W.eE)
t(W.eG,W.eF)
t(W.h1,W.eG)
t(W.aI,W.c1)
t(W.eJ,W.eI)
t(W.cJ,W.eJ)
t(W.eL,W.eK)
t(W.c8,W.eL)
t(W.bT,W.o)
s(W.bT,[W.ba,W.a7,W.b1])
t(W.hW,W.eQ)
t(W.hY,W.eR)
t(W.eT,W.eS)
t(W.i_,W.eT)
t(W.eW,W.eV)
t(W.cU,W.eW)
t(W.f_,W.eZ)
t(W.ig,W.f_)
t(W.ip,W.f0)
t(W.dk,W.dj)
t(W.iC,W.dk)
t(W.f3,W.f2)
t(W.iD,W.f3)
t(W.iG,W.f7)
t(W.fb,W.fa)
t(W.iQ,W.fb)
t(W.dm,W.dl)
t(W.iR,W.dm)
t(W.fe,W.fd)
t(W.j4,W.fe)
t(W.bk,W.a7)
t(W.fm,W.fl)
t(W.jT,W.fm)
t(W.eC,W.dL)
t(W.fo,W.fn)
t(W.k7,W.fo)
t(W.fq,W.fp)
t(W.eU,W.fq)
t(W.fs,W.fr)
t(W.kl,W.fs)
t(W.fu,W.ft)
t(W.kp,W.fu)
t(W.jV,W.jR)
t(W.jW,P.iI)
t(W.ls,W.jW)
t(W.jX,P.d0)
t(W.kr,W.f1)
t(P.kn,P.km)
t(P.ak,P.kb)
t(P.eN,P.eM)
t(P.hv,P.eN)
t(P.eY,P.eX)
t(P.ia,P.eY)
t(P.cY,P.p)
t(P.f9,P.f8)
t(P.iM,P.f9)
t(P.fg,P.ff)
t(P.j6,P.fg)
t(P.fF,P.eA)
t(P.ib,P.c0)
t(P.f5,P.f4)
t(P.iE,P.f5)
s(E.fL,[Z.dD,A.cZ,T.bS])
s(D.z,[D.bL,D.bM,D.K,X.ih])
s(X.ih,[X.dZ,X.bt,X.cQ,X.ep])
s(O.a3,[D.dW,U.cL,M.dF])
s(D.fO,[U.fP,U.aj])
t(U.dG,U.aj)
s(A.cZ,[A.dJ,A.e1,A.eg])
s(A.eq,[A.aN,A.jd,A.je,A.jf,A.jb,A.ac,A.jc,A.Z,A.d6,A.jh,A.bU,A.al,A.bw,A.bV])
t(F.iB,F.hb)
t(F.ja,F.hw)
t(F.jE,F.jF)
t(F.i8,F.jG)
s(O.bR,[O.h_,O.e0,O.ef])
s(O.e2,[O.hJ,O.hK,O.bc])
s(O.bc,[O.hN,O.hO])
s(T.bS,[T.iS,T.em])
t(T.iW,T.iS)
s(V.e_,[V.aw,V.d5])
s(X.d2,[X.fI,X.hi])
s(V.bG,[V.fY,V.hj,V.hk,V.ie])
u(H.es,H.d7)
u(H.df,P.v)
u(H.dg,H.c7)
u(H.dh,P.v)
u(H.di,H.c7)
u(P.eP,P.v)
u(P.fi,P.kv)
u(W.eB,W.fU)
u(W.eD,P.v)
u(W.eE,W.H)
u(W.eF,P.v)
u(W.eG,W.H)
u(W.eI,P.v)
u(W.eJ,W.H)
u(W.eK,P.v)
u(W.eL,W.H)
u(W.eQ,P.ag)
u(W.eR,P.ag)
u(W.eS,P.v)
u(W.eT,W.H)
u(W.eV,P.v)
u(W.eW,W.H)
u(W.eZ,P.v)
u(W.f_,W.H)
u(W.f0,P.ag)
u(W.dj,P.v)
u(W.dk,W.H)
u(W.f2,P.v)
u(W.f3,W.H)
u(W.f7,P.ag)
u(W.fa,P.v)
u(W.fb,W.H)
u(W.dl,P.v)
u(W.dm,W.H)
u(W.fd,P.v)
u(W.fe,W.H)
u(W.fl,P.v)
u(W.fm,W.H)
u(W.fn,P.v)
u(W.fo,W.H)
u(W.fp,P.v)
u(W.fq,W.H)
u(W.fr,P.v)
u(W.fs,W.H)
u(W.ft,P.v)
u(W.fu,W.H)
u(P.eM,P.v)
u(P.eN,W.H)
u(P.eX,P.v)
u(P.eY,W.H)
u(P.f8,P.v)
u(P.f9,W.H)
u(P.ff,P.v)
u(P.fg,W.H)
u(P.eA,P.ag)
u(P.f4,P.v)
u(P.f5,W.H)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bE.prototype
C.i=W.c4.prototype
C.O=W.aH.prototype
C.R=J.a.prototype
C.a=J.aU.prototype
C.S=J.dR.prototype
C.e=J.dS.prototype
C.j=J.dT.prototype
C.c=J.bN.prototype
C.b=J.br.prototype
C.T=J.bs.prototype
C.Z=W.cU.prototype
C.B=J.id.prototype
C.d=P.ci.prototype
C.a_=W.bg.prototype
C.C=W.ek.prototype
C.r=J.bW.prototype
C.D=W.bk.prototype
C.E=W.db.prototype
C.a0=new P.fK()
C.F=new P.fJ()
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
C.h=new P.js()
C.N=new P.ju()
C.f=new P.kc()
C.o=new P.b8(0)
C.P=new P.b8(5e6)
C.Q=new P.hn("element",!0,!1,!1,!1)
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
C.Y=new H.fS(0,{},C.x,[P.h,P.h])})()
var v={mangledGlobalNames:{m:"int",B:"double",ad:"num",h:"String",R:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.m,[P.i,E.aq]]},{func:1,ret:P.L,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.L,args:[D.z]},{func:1,ret:P.L,args:[F.ab]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.i,V.av]]},{func:1,ret:-1,args:[P.m,[P.i,M.aD]]},{func:1,ret:-1,args:[P.m,[P.i,U.aj]]},{func:1,ret:P.L,args:[P.h]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.m,[P.i,D.af]]},{func:1,args:[,]},{func:1,ret:P.R,args:[W.G]},{func:1,ret:P.R,args:[W.O,P.h,P.h,W.bX]},{func:1,ret:P.R,args:[W.aC]},{func:1,ret:P.R,args:[P.h]},{func:1,ret:-1,args:[W.ba]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.L,args:[P.ad]},{func:1,ret:P.U,args:[,,]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:W.O,args:[W.G]},{func:1,ret:-1,args:[W.bk]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,args:[W.o]},{func:1,ret:P.U,args:[P.m]},{func:1,ret:P.L,args:[P.h,,]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:V.a8,args:[P.B]},{func:1,ret:P.L,args:[F.ar,P.B,P.B]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:[P.x,P.h,P.h],args:[[P.x,P.h,P.h],P.h]},{func:1,ret:[P.aP,,],args:[,]},{func:1,ret:P.m,args:[A.aG,A.aG]},{func:1,ret:P.m,args:[A.aJ,A.aJ]},{func:1,ret:P.m,args:[A.aK,A.aK]},{func:1,ret:P.L,args:[,],opt:[P.ax]},{func:1,ret:P.L,args:[P.bh]},{func:1,ret:P.R,args:[V.bG]},{func:1,ret:P.L,args:[W.a7]},{func:1,ret:P.L,args:[W.O]},{func:1,args:[P.h]},{func:1,ret:P.R,args:[[P.i,D.af]]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b4=0
$.cD=null
$.lQ=null
$.lw=!1
$.mY=null
$.mR=null
$.n4=null
$.kP=null
$.kU=null
$.lF=null
$.cq=null
$.dq=null
$.dr=null
$.lx=!1
$.a1=C.f
$.ay=[]
$.bp=null
$.la=null
$.lX=null
$.lW=null
$.de=P.lh(P.h,P.bK)
$.m1=null
$.m5=null
$.ma=null
$.cV=null
$.mf=null
$.ms=null
$.mv=null
$.mu=null
$.jv=null
$.jw=null
$.jx=null
$.mt=null
$.m9=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pY","n8",function(){return H.mX("_$dart_dartClosure")})
u($,"pZ","lJ",function(){return H.mX("_$dart_js")})
u($,"q3","n9",function(){return H.bj(H.j8({
toString:function(){return"$receiver$"}}))})
u($,"q4","na",function(){return H.bj(H.j8({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q5","nb",function(){return H.bj(H.j8(null))})
u($,"q6","nc",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q9","nf",function(){return H.bj(H.j8(void 0))})
u($,"qa","ng",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q8","ne",function(){return H.bj(H.mn(null))})
u($,"q7","nd",function(){return H.bj(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qc","ni",function(){return H.bj(H.mn(void 0))})
u($,"qb","nh",function(){return H.bj(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qt","lK",function(){return P.ou()})
u($,"qf","nj",function(){return P.oq()})
u($,"qu","nn",function(){return H.nZ(H.cp(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qw","np",function(){return P.oc("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qx","nq",function(){return P.oT()})
u($,"qv","no",function(){return P.m0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qm","nm",function(){return Z.aO(0)})
u($,"qg","nk",function(){return Z.aO(511)})
u($,"qo","aE",function(){return Z.aO(1)})
u($,"qn","bC",function(){return Z.aO(2)})
u($,"qi","bB",function(){return Z.aO(4)})
u($,"qp","bn",function(){return Z.aO(8)})
u($,"qq","c_",function(){return Z.aO(16)})
u($,"qj","dv",function(){return Z.aO(32)})
u($,"qk","dw",function(){return Z.aO(64)})
u($,"ql","nl",function(){return Z.aO(96)})
u($,"qr","cA",function(){return Z.aO(128)})
u($,"qh","bA",function(){return Z.aO(256)})
u($,"pX","n7",function(){return new V.h8(1e-9)})
u($,"pW","P",function(){return $.n7()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cR,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.cS,Float64Array:H.cS,Int16Array:H.i1,Int32Array:H.i2,Int8Array:H.i3,Uint16Array:H.i4,Uint32Array:H.i5,Uint8ClampedArray:H.e5,CanvasPixelArray:H.e5,Uint8Array:H.cT,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fA,HTMLAnchorElement:W.dz,HTMLAreaElement:W.fB,HTMLBaseElement:W.cB,Blob:W.c1,HTMLBodyElement:W.bE,HTMLCanvasElement:W.c4,CanvasRenderingContext2D:W.cE,CDATASection:W.bF,CharacterData:W.bF,Comment:W.bF,ProcessingInstruction:W.bF,Text:W.bF,CSSNumericValue:W.cG,CSSUnitValue:W.cG,CSSPerspective:W.fT,CSSCharsetRule:W.X,CSSConditionRule:W.X,CSSFontFaceRule:W.X,CSSGroupingRule:W.X,CSSImportRule:W.X,CSSKeyframeRule:W.X,MozCSSKeyframeRule:W.X,WebKitCSSKeyframeRule:W.X,CSSKeyframesRule:W.X,MozCSSKeyframesRule:W.X,WebKitCSSKeyframesRule:W.X,CSSMediaRule:W.X,CSSNamespaceRule:W.X,CSSPageRule:W.X,CSSRule:W.X,CSSStyleRule:W.X,CSSSupportsRule:W.X,CSSViewportRule:W.X,CSSStyleDeclaration:W.cH,MSStyleCSSProperties:W.cH,CSS2Properties:W.cH,CSSImageValue:W.b6,CSSKeywordValue:W.b6,CSSPositionValue:W.b6,CSSResourceValue:W.b6,CSSURLImageValue:W.b6,CSSStyleValue:W.b6,CSSMatrixComponent:W.b7,CSSRotation:W.b7,CSSScale:W.b7,CSSSkew:W.b7,CSSTranslation:W.b7,CSSTransformComponent:W.b7,CSSTransformValue:W.fV,CSSUnparsedValue:W.fW,DataTransferItemList:W.fZ,HTMLDivElement:W.aH,DOMException:W.h0,ClientRectList:W.dK,DOMRectList:W.dK,DOMRectReadOnly:W.dL,DOMStringList:W.h1,DOMTokenList:W.h2,Element:W.O,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aI,FileList:W.cJ,FileWriter:W.hc,HTMLFormElement:W.hg,Gamepad:W.aT,History:W.hl,HTMLCollection:W.c8,HTMLFormControlsCollection:W.c8,HTMLOptionsCollection:W.c8,ImageData:W.bq,HTMLImageElement:W.c9,KeyboardEvent:W.ba,Location:W.dY,MediaList:W.hV,MessagePort:W.cP,MIDIInputMap:W.hW,MIDIOutputMap:W.hY,MimeType:W.aV,MimeTypeArray:W.i_,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aW,PluginArray:W.ig,RTCStatsReport:W.ip,HTMLSelectElement:W.is,SourceBuffer:W.aX,SourceBufferList:W.iC,SpeechGrammar:W.aY,SpeechGrammarList:W.iD,SpeechRecognitionResult:W.aZ,Storage:W.iG,CSSStyleSheet:W.aL,StyleSheet:W.aL,HTMLTableCellElement:W.bg,HTMLTableDataCellElement:W.bg,HTMLTableHeaderCellElement:W.bg,HTMLTableElement:W.ek,HTMLTableRowElement:W.iN,HTMLTableSectionElement:W.iO,HTMLTemplateElement:W.d3,TextTrack:W.b_,TextTrackCue:W.aM,VTTCue:W.aM,TextTrackCueList:W.iQ,TextTrackList:W.iR,TimeRanges:W.j0,Touch:W.b0,TouchEvent:W.b1,TouchList:W.j4,TrackDefaultList:W.j5,CompositionEvent:W.bT,FocusEvent:W.bT,TextEvent:W.bT,UIEvent:W.bT,URL:W.jr,VideoTrackList:W.jK,WheelEvent:W.bk,Window:W.db,DOMWindow:W.db,Attr:W.dc,CSSRuleList:W.jT,ClientRect:W.eC,DOMRect:W.eC,GamepadList:W.k7,NamedNodeMap:W.eU,MozNamedAttrMap:W.eU,SpeechRecognitionResultList:W.kl,StyleSheetList:W.kp,SVGLength:P.bb,SVGLengthList:P.hv,SVGNumber:P.be,SVGNumberList:P.ia,SVGPointList:P.ii,SVGScriptElement:P.cY,SVGStringList:P.iM,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bi,SVGTransformList:P.j6,AudioBuffer:P.fE,AudioParamMap:P.fF,AudioTrackList:P.fH,AudioContext:P.c0,webkitAudioContext:P.c0,BaseAudioContext:P.c0,OfflineAudioContext:P.ib,WebGLBuffer:P.dC,WebGLFramebuffer:P.dQ,WebGLProgram:P.ea,WebGLRenderbuffer:P.ec,WebGL2RenderingContext:P.ci,WebGLShader:P.ed,WebGLTexture:P.el,WebGLUniformLocation:P.er,SQLResultSetRowList:P.iE})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e3.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.e4.$nativeSuperclassTag="ArrayBufferView"
W.dj.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.n0,[])
else X.n0([])})})()
//# sourceMappingURL=test.dart.js.map
