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
a[c]=function(){a[c]=function(){H.nD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kg(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jZ:function jZ(){},
fG:function(){return new P.bX("No element")},
m6:function(){return new P.bX("Too many elements")},
m5:function(){return new P.bX("Too few elements")},
dG:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.mr(a,b,c,d,e)
else H.mq(a,b,c,d,e)},
mr:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aL(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mq:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.e.Z(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.Z(a3+a4,2)
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
if(J.aL(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aL(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aL(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aL(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aL(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aL(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aL(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aL(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aL(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.n(a2,t,n)
C.a.n(a2,r,l)
C.a.n(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.U(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.a3()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ai()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.a3()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ai()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ai()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a3()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,a3,a2[o])
C.a.n(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.n(a2,a4,a2[o])
C.a.n(a2,o,k)
H.dG(a2,a3,h-2,a5,a6)
H.dG(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.U(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.U(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a3()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}H.dG(a2,h,g,a5,a6)}else H.dG(a2,h,g,a5,a6)},
q:function q(a){this.a=a},
fk:function fk(){},
bR:function bR(){},
cr:function cr(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fV:function fV(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fW:function fW(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
dS:function dS(){},
dR:function dR(){},
cd:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nk:function(a){return v.types[H.a2(a)]},
nr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iJ},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aM(a)
if(typeof u!=="string")throw H.i(H.aK(a))
return u},
cz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bU:function(a){return H.md(a)+H.kc(H.bE(a),0,null)},
md:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibz){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cd(t.length>1&&C.d.aD(t,0)===36?C.d.aj(t,1):t)},
kO:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ml:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.aK(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b3(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.aK(s))}return H.kO(r)},
kP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.aK(s))
if(s<0)throw H.i(H.aK(s))
if(s>65535)return H.ml(a)}return H.kO(a)},
k0:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b3(u,10))>>>0,56320|u&1023)}throw H.i(P.b0(a,0,1114111,null,null))},
bT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){var u=H.bT(a).getFullYear()+0
return u},
mi:function(a){var u=H.bT(a).getMonth()+1
return u},
me:function(a){var u=H.bT(a).getDate()+0
return u},
mf:function(a){var u=H.bT(a).getHours()+0
return u},
mh:function(a){var u=H.bT(a).getMinutes()+0
return u},
mj:function(a){var u=H.bT(a).getSeconds()+0
return u},
mg:function(a){var u=H.bT(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.aK(a))},
d:function(a,b){if(a==null)J.bJ(a)
throw H.i(H.c8(a,b))},
c8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,s,null)
u=H.a2(J.bJ(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dC(b,s)},
nf:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bV(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bV(a,c,!0,b,"end",u)
return new P.aN(!0,b,"end",null)},
aK:function(a){return new P.aN(!0,a,null,null)},
i:function(a){var u
if(a==null)a=new P.dy()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lv})
u.name=""}else u.toString=H.lv
return u},
lv:function(){return J.aM(this.dartException)},
B:function(a){throw H.i(a)},
x:function(a){throw H.i(P.br(a))},
b7:function(a){var u,t,s,r,q,p
a=H.lu(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.id(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ie:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kY:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kJ:function(a,b){return new H.hp(a,b==null?null:b.method)},
k_:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b3(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k_(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kJ(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ly()
q=$.lz()
p=$.lA()
o=$.lB()
n=$.lE()
m=$.lF()
l=$.lD()
$.lC()
k=$.lH()
j=$.lG()
i=r.a6(u)
if(i!=null)return f.$1(H.k_(H.I(u),i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.k_(H.I(u),i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kJ(H.I(u),i))}}return f.$1(new H.ir(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dI()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aN(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dI()
return a},
cb:function(a){var u
if(a==null)return new H.ew(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ew(a)},
ni:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nq:function(a,b,c,d,e,f){H.k(a,"$ibu")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.A("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
H.a2(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nq)
a.$identity=u
return u},
lY:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hT().constructor.prototype):Object.create(new H.cg(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aO
if(typeof t!=="number")return t.p()
$.aO=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kx(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nk,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kv:H.jS
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kx(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lV:function(a,b,c,d){var u=H.jS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kx:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lX(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lV(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.p()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ch
return new Function(r+H.j(q==null?$.ch=H.f3("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.p()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.ch
return new Function(r+H.j(q==null?$.ch=H.f3("self"):q)+"."+H.j(u)+"("+o+");}")()},
lW:function(a,b,c,d){var u=H.jS,t=H.kv
switch(b?-1:a){case 0:throw H.i(H.mo("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lX:function(a,b){var u,t,s,r,q,p,o,n=$.ch
if(n==null)n=$.ch=H.f3("self")
u=$.ku
if(u==null)u=$.ku=H.f3("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lW(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aO
if(typeof u!=="number")return u.p()
$.aO=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aO
if(typeof u!=="number")return u.p()
$.aO=u+1
return new Function(n+u+"}")()},
kg:function(a,b,c,d,e,f,g){return H.lY(a,b,H.a2(c),d,!!e,!!f,g)},
jS:function(a){return a.a},
kv:function(a){return a.c},
f3:function(a){var u,t,s,r=new H.cg("self","target","receiver","name"),q=J.jX(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.n9("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
lq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
kd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
ls:function(a,b){throw H.i(H.aJ(a,H.cd(H.I(b).substring(2))))},
nx:function(a,b){throw H.i(H.lU(a,H.cd(H.I(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.ls(a,b)},
v:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.nx(a,b)},
kl:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
ns:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.ls(a,b)},
lj:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
eS:function(a,b){var u
if(typeof a=="function")return!0
u=H.lj(J.Z(a))
if(u==null)return!1
return H.la(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.k9)return a
$.k9=!0
try{if(H.eS(a,b))return a
u=H.jK(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.k9=!1}},
kh:function(a,b){if(a!=null&&!H.kf(a,b))H.B(H.aJ(a,H.jK(b)))
return a},
aJ:function(a,b){return new H.ig("TypeError: "+P.dd(a)+": type '"+H.le(a)+"' is not a subtype of type '"+b+"'")},
lU:function(a,b){return new H.f4("CastError: "+P.dd(a)+": type '"+H.le(a)+"' is not a subtype of type '"+b+"'")},
le:function(a){var u,t=J.Z(a)
if(!!t.$ici){u=H.lj(t)
if(u!=null)return H.jK(u)
return"Closure"}return H.bU(a)},
n9:function(a){throw H.i(new H.iN(a))},
nD:function(a){throw H.i(new P.fc(H.I(a)))},
mo:function(a){return new H.hF(a)},
lm:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
oj:function(a,b,c){return H.cc(a["$a"+H.j(c)],H.bE(b))},
ca:function(a,b,c,d){var u
H.I(c)
H.a2(d)
u=H.cc(a["$a"+H.j(c)],H.bE(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.I(b)
H.a2(c)
u=H.cc(a["$a"+H.j(b)],H.bE(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.a2(b)
u=H.bE(a)
return u==null?null:u[b]},
jK:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
H.m(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.kc(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mJ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.d.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.L)p+=" extends "+H.bD(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bD(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bD(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bD(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nh(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bD(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kc:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bh("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ke:function(a,b,c,d){var u,t
H.I(b)
H.kl(c)
H.I(d)
if(a==null)return!1
u=H.bE(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.lh(H.cc(t[d],u),null,c,null)},
m:function(a,b,c,d){H.I(b)
H.kl(c)
H.I(d)
if(a==null)return a
if(H.ke(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.kc(c,0,null),v.mangledGlobalNames)))},
lh:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.cc(J.Z(b)["$a"+H.j(c)],H.bE(b)))},
lo:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="K"||a===-1||a===-2||H.lo(u)}return!1},
kf:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="K"||b===-1||b===-2||H.lo(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kf(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eS(a,b)}u=J.Z(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kf(a,b))throw H.i(H.aJ(a,H.jK(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.la(a,b,c,d)
if('func' in a)return c.name==="bu"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"co" in t.prototype))return!1
r=t.prototype["$a"+"co"]
q=H.cc(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lh(H.cc(m,u),b,p,d)},
la:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nv(h,b,g,d)},
nv:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nt:function(a){var u,t,s,r,q=H.I($.ln.$1(a)),p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.lg.$2(a,q))
if(q!=null){p=$.jB[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jH[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jJ(u)
$.jB[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jH[q]=u
return u}if(s==="-"){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lr(a,u)
if(s==="*")throw H.i(P.kZ(q))
if(v.leafTags[q]===true){r=H.jJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lr(a,u)},
lr:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.km(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jJ:function(a){return J.km(a,!1,null,!!a.$iJ)},
nu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jJ(u)
else return J.km(u,c,null,null)},
no:function(){if(!0===$.kk)return
$.kk=!0
H.np()},
np:function(){var u,t,s,r,q,p,o,n
$.jB=Object.create(null)
$.jH=Object.create(null)
H.nn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lt.$1(q)
if(p!=null){o=H.nu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nn:function(){var u,t,s,r,q,p,o=C.x()
o=H.c6(C.y,H.c6(C.z,H.c6(C.q,H.c6(C.q,H.c6(C.A,H.c6(C.B,H.c6(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ln=new H.jE(r)
$.lg=new H.jF(q)
$.lt=new H.jG(p)},
c6:function(a,b){return a(b)||b},
m8:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fy("Illegal RegExp pattern ("+String(r)+")",a))},
nA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ng:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lu:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ko:function(a,b,c){var u=H.nB(a,b,c)
return u},
nB:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lu(b),'g'),H.ng(c))},
id:function id(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
jO:function jO(a){this.a=a},
ew:function ew(a){this.a=a
this.b=null},
ci:function ci(){},
i2:function i2(){},
hT:function hT(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a){this.a=a},
f4:function f4(a){this.a=a},
hF:function hF(a){this.a=a},
iN:function iN(a){this.a=a},
a1:function a1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dk:function dk(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cW:function(a){return a},
bC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c8(b,a))},
mI:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.nf(a,b,c))
return b},
cw:function cw(){},
du:function du(){},
cv:function cv(){},
dv:function dv(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
dw:function dw(){},
hl:function hl(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
nh:function(a){return J.kC(a?Object.keys(a):[],null)},
nw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
km:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eT:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kk==null){H.no()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.kZ("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kp()]
if(r!=null)return r
r=H.nt(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.kp(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
m7:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.b0(a,0,4294967295,"length",null))
return J.kC(new Array(a),b)},
kC:function(a,b){return J.jX(H.c(a,[b]))},
jX:function(a){H.kl(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.df.prototype
return J.fI.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.dg.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.L)return a
return J.eT(a)},
nj:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.L)return a
return J.eT(a)},
jC:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.L)return a
return J.eT(a)},
jD:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.L)return a
return J.eT(a)},
lk:function(a){if(typeof a=="number")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
ll:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
ki:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
kj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.L)return a
return J.eT(a)},
lN:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nj(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).u(a,b)},
aL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lk(a).ai(a,b)},
kr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ll(a).t(a,b)},
lO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.lk(a).q(a,b)},
eU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jC(a).j(a,b)},
lP:function(a,b,c,d){return J.kj(a).hm(a,b,c,d)},
jP:function(a,b){return J.ll(a).hz(a,b)},
jQ:function(a,b){return J.jD(a).C(a,b)},
lQ:function(a,b){return J.jD(a).H(a,b)},
lR:function(a){return J.kj(a).ghv(a)},
bH:function(a){return J.Z(a).gF(a)},
bI:function(a){return J.jD(a).gO(a)},
bJ:function(a){return J.jC(a).gm(a)},
ks:function(a){return J.jD(a).ia(a)},
lS:function(a,b,c){return J.ki(a).b_(a,b,c)},
lT:function(a){return J.ki(a).io(a)},
aM:function(a){return J.Z(a).i(a)},
a:function a(){},
fH:function fH(){},
dg:function dg(){},
dh:function dh(){},
ht:function ht(){},
bz:function bz(){},
bd:function bd(){},
aF:function aF(a){this.$ti=a},
jY:function jY(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bv:function bv(){},
df:function df(){},
fI:function fI(){},
bc:function bc(){}},P={
mx:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.na()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c7(new P.iP(s),1)).observe(u,{childList:true})
return new P.iO(s,u,t)}else if(self.setImmediate!=null)return P.nb()
return P.nc()},
my:function(a){self.scheduleImmediate(H.c7(new P.iQ(H.l(a,{func:1,ret:-1})),0))},
mz:function(a){self.setImmediate(H.c7(new P.iR(H.l(a,{func:1,ret:-1})),0))},
mA:function(a){P.k4(C.j,H.l(a,{func:1,ret:-1}))},
k4:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.Z(a.a,1000)
return P.mG(u<0?0:u,b)},
kX:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b5]})
u=C.e.Z(a.a,1000)
return P.mH(u<0?0:u,b)},
mG:function(a,b){var u=new P.eC()
u.ed(a,b)
return u},
mH:function(a,b){var u=new P.eC()
u.ee(a,b)
return u},
mB:function(a,b){var u,t,s
b.a=1
try{a.dF(new P.j_(b),new P.j0(b),null)}catch(s){u=H.au(s)
t=H.cb(s)
P.ny(new P.j1(b,u,t))}},
l5:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaD")
if(u>=4){t=b.bH()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.k(b.c,"$ib9")
b.a=2
b.c=a
a.cO(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iae")
g=g.b
r=s.a
q=s.b
g.toString
P.jw(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cN(h.a,b)}g=h.a
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
if(m){H.k(o,"$iae")
g=g.b
r=o.a
q=o.b
g.toString
P.jw(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.j5(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j4(u,b,o).$0()}else if((g&2)!==0)new P.j3(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.Z(g).$ico){if(g.a>=4){k=H.k(q.c,"$ib9")
q.c=null
b=q.b2(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l5(g,q)
return}}j=b.b
k=H.k(j.c,"$ib9")
j.c=null
b=j.b2(k)
g=u.a
r=u.b
if(!g){H.H(r,H.w(j,0))
j.a=4
j.c=r}else{H.k(r,"$iae")
j.a=8
j.c=r}h.a=j
g=j}},
n5:function(a,b){if(H.eS(a,{func:1,args:[P.L,P.al]}))return H.l(a,{func:1,ret:null,args:[P.L,P.al]})
if(H.eS(a,{func:1,args:[P.L]}))return H.l(a,{func:1,ret:null,args:[P.L]})
throw H.i(P.jR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n4:function(){var u,t
for(;u=$.c5,u!=null;){$.cY=null
t=u.b
$.c5=t
if(t==null)$.cX=null
u.a.$0()}},
n8:function(){$.ka=!0
try{P.n4()}finally{$.cY=null
$.ka=!1
if($.c5!=null)$.kq().$1(P.li())}},
ld:function(a){var u=new P.dY(H.l(a,{func:1,ret:-1}))
if($.c5==null){$.c5=$.cX=u
if(!$.ka)$.kq().$1(P.li())}else $.cX=$.cX.b=u},
n7:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.c5
if(u==null){P.ld(a)
$.cY=$.cX
return}t=new P.dY(a)
s=$.cY
if(s==null){t.b=u
$.c5=$.cY=t}else{t.b=s.b
$.cY=s.b=t
if(t.b==null)$.cX=t}},
ny:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.Y
if(C.f===u){P.jy(t,t,C.f,a)
return}u.toString
P.jy(t,t,u,H.l(u.bK(a),s))},
kW:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.Y
if(u===C.f){u.toString
return P.k4(a,b)}return P.k4(a,H.l(u.bK(b),t))},
mu:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b5]}
H.l(b,s)
u=$.Y
if(u===C.f){u.toString
return P.kX(a,b)}t=u.d0(b,P.b5)
$.Y.toString
return P.kX(a,H.l(t,s))},
jw:function(a,b,c,d,e){var u={}
u.a=d
P.n7(new P.jx(u,e))},
lb:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lc:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
n6:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jy:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bK(d):c.hw(d,-1)
P.ld(d)},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
eC:function eC(){this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
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
aD:function aD(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a){this.a=a
this.b=null},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
cD:function cD(){},
hX:function hX(){},
b5:function b5(){},
ae:function ae(a,b){this.a=a
this.b=b},
jt:function jt(){},
jx:function jx(a,b){this.a=a
this.b=b},
jc:function jc(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function(a,b){return new H.a1([a,b])},
m9:function(a){return H.ni(a,new H.a1([null,null]))},
dl:function(a){return new P.ja([a])},
k8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mF:function(a,b,c){var u=new P.ed(a,b,[c])
u.c=a.e
return u},
m4:function(a,b,c){var u,t
if(P.kb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.an,a)
try{P.mK(a,u)}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}t=P.kU(b,H.ns(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
jW:function(a,b,c){var u,t
if(P.kb(a))return b+"..."+c
u=new P.bh(b)
C.a.h($.an,a)
try{t=u
t.a=P.kU(t.a,a,", ")}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kb:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
mK:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.h],"$ab")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.j(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.A();o=n,n=m){m=u.gE(u);++s
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
kE:function(a,b){var u,t,s=P.dl(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t)s.h(0,H.H(a[t],b))
return s},
kG:function(a){var u,t={}
if(P.kb(a))return"{...}"
u=new P.bh("")
try{C.a.h($.an,a)
u.a+="{"
t.a=!0
J.lQ(a,new P.fT(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c4:function c4(a){this.a=a
this.c=this.b=null},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fQ:function fQ(){},
u:function u(){},
fS:function fS(){},
fT:function fT(a,b){this.a=a
this.b=b},
a7:function a7(){},
jh:function jh(){},
ee:function ee(){},
cj:function cj(){},
ck:function ck(){},
fm:function fm(){},
fE:function fE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fD:function fD(a){this.a=a},
iu:function iu(){},
iv:function iv(){},
jr:function jr(a){this.b=0
this.c=a},
m2:function(a){if(a instanceof H.ci)return a.i(0)
return"Instance of '"+H.bU(a)+"'"},
ma:function(a,b,c){var u,t
H.H(b,c)
u=J.m7(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kF:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bI(a);u.A();)C.a.h(s,H.H(u.gE(u),c))
if(b)return s
return H.m(J.jX(s),"$ib",t,"$ab")},
k3:function(a){var u,t,s=P.p
H.m(a,"$if",[s],"$af")
if(a.constructor===Array){H.m(a,"$iaF",[s],"$aaF")
u=a.length
t=P.k2(0,null,u)
return H.kP(t<u?C.a.dS(a,0,t):a)}return P.ms(a,0,null)},
ms:function(a,b,c){var u,t,s
H.m(a,"$if",[P.p],"$af")
u=J.bI(a)
for(t=0;t<b;++t)if(!u.A())throw H.i(P.b0(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gE(u))
return H.kP(s)},
mm:function(a){return new H.fJ(a,H.m8(a,!1,!0,!1))},
kU:function(a,b,c){var u=J.bI(b)
if(!u.A())return a
if(c.length===0){do a+=H.j(u.gE(u))
while(u.A())}else{a+=H.j(u.gE(u))
for(;u.A();)a=a+c+H.j(u.gE(u))}return a},
l9:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.p],"$ab")
if(c===C.h){u=$.lM().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hA(H.H(b,H.ao(c,"cj",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k0(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lZ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
kz:function(a,b){return new P.aS(1e6*b+1000*a)},
dd:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m2(a)},
jR:function(a,b,c){return new P.aN(!0,a,b,c)},
dC:function(a,b){return new P.bV(null,null,!0,a,b,"Value not in range")},
b0:function(a,b,c,d,e){return new P.bV(b,c,!0,a,d,"Invalid value")},
k2:function(a,b,c){if(0>a||a>c)throw H.i(P.b0(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.b0(b,a,c,"end",null))
return b}return c},
k1:function(a,b){if(typeof a!=="number")return a.a3()
if(a<0)throw H.i(P.b0(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.a2(e==null?J.bJ(b):e)
return new P.fF(u,!0,a,c,"Index out of range")},
am:function(a){return new P.is(a)},
kZ:function(a){return new P.iq(a)},
kT:function(a){return new P.bX(a)},
br:function(a){return new P.f7(a)},
A:function(a){return new P.e5(a)},
kn:function(a){H.nw(a)},
M:function M(){},
av:function av(a,b){this.a=a
this.b=b},
z:function z(){},
aS:function aS(a){this.a=a},
fi:function fi(){},
fj:function fj(){},
bt:function bt(){},
eX:function eX(){},
dy:function dy(){},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bV:function bV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
is:function is(a){this.a=a},
iq:function iq(a){this.a=a},
bX:function bX(a){this.a=a},
f7:function f7(a){this.a=a},
hs:function hs(){},
dI:function dI(){},
fc:function fc(a){this.a=a},
e5:function e5(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
bu:function bu(){},
p:function p(){},
f:function f(){},
aV:function aV(){},
b:function b(){},
G:function G(){},
K:function K(){},
a5:function a5(){},
L:function L(){},
al:function al(){},
h:function h(){},
bh:function bh(a){this.a=a},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.kD(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
nd:function(a){var u={}
a.H(0,new P.jz(u))
return u},
jz:function jz(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(){},
fw:function fw(){},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jb:function jb(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
fM:function fM(){},
bg:function bg(){},
hq:function hq(){},
hx:function hx(){},
cA:function cA(){},
i_:function i_(){},
o:function o(){},
bi:function bi(){},
ic:function ic(){},
eb:function eb(){},
ec:function ec(){},
em:function em(){},
en:function en(){},
ey:function ey(){},
ez:function ez(){},
eF:function eF(){},
eG:function eG(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(a){this.a=a},
f1:function f1(){},
bK:function bK(){},
hr:function hr(){},
dZ:function dZ(){},
d3:function d3(){},
dB:function dB(){},
bW:function bW(){},
dE:function dE(){},
dQ:function dQ(){},
hS:function hS(){},
eu:function eu(){},
ev:function ev(){}},W={
kt:function(){var u=document.createElement("a")
return u},
kw:function(){var u=document.createElement("canvas")
return u},
m0:function(a,b,c){var u=document.body,t=(u&&C.o).a5(u,a,b,c)
t.toString
u=W.E
u=new H.cK(new W.ag(t),H.l(new W.fl(),{func:1,ret:P.M,args:[u]}),[u])
return H.k(u.gaz(u),"$iR")},
m1:function(a){H.k(a,"$ie")
return"wheel"},
cn:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kj(a)
t=u.gdD(a)
if(typeof t==="string")r=u.gdD(a)}catch(s){H.au(s)}return r},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l7:function(a,b,c,d){var u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.lf(new W.iY(c),W.n)
if(u!=null&&!0)J.lP(a,b,u,!1)
return new W.iX(a,b,u,!1,[e])},
l6:function(a){var u=W.kt(),t=window.location
u=new W.bB(new W.jg(u,t))
u.e4(a)
return u},
mC:function(a,b,c,d){H.k(a,"$iR")
H.I(b)
H.I(c)
H.k(d,"$ibB")
return!0},
mD:function(a,b,c,d){var u,t,s
H.k(a,"$iR")
H.I(b)
H.I(c)
u=H.k(d,"$ibB").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l8:function(){var u=P.h,t=P.kE(C.l,u),s=H.w(C.l,0),r=H.l(new W.jo(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.dl(u),P.dl(u),P.dl(u),null)
t.ec(null,new H.fW(C.l,r,[s,u]),q,null)
return t},
lf:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.f)return a
return u.d0(a,b)},
r:function r(){},
eV:function eV(){},
d0:function d0(){},
eW:function eW(){},
cf:function cf(){},
d2:function d2(){},
bo:function bo(){},
bL:function bL(){},
bp:function bp(){},
cl:function cl(){},
f8:function f8(){},
T:function T(){},
cm:function cm(){},
f9:function f9(){},
aQ:function aQ(){},
aR:function aR(){},
fa:function fa(){},
fb:function fb(){},
fe:function fe(){},
ax:function ax(){},
ff:function ff(){},
da:function da(){},
db:function db(){},
fg:function fg(){},
fh:function fh(){},
iT:function iT(a,b){this.a=a
this.b=b},
R:function R(){},
fl:function fl(){},
n:function n(){},
e:function e(){},
aT:function aT(){},
fs:function fs(){},
ft:function ft(){},
fx:function fx(){},
aU:function aU(){},
fC:function fC(){},
bO:function bO(){},
aW:function aW(){},
dm:function dm(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
hc:function hc(){},
hd:function hd(a){this.a=a},
aZ:function aZ(){},
he:function he(){},
a8:function a8(){},
ag:function ag(a){this.a=a},
E:function E(){},
cx:function cx(){},
b_:function b_(){},
hv:function hv(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hG:function hG(){},
b1:function b1(){},
hQ:function hQ(){},
b2:function b2(){},
hR:function hR(){},
b3:function b3(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
aG:function aG(){},
bY:function bY(){},
dJ:function dJ(){},
i0:function i0(){},
i1:function i1(){},
cE:function cE(){},
b4:function b4(){},
aH:function aH(){},
i3:function i3(){},
i4:function i4(){},
i6:function i6(){},
b6:function b6(){},
aI:function aI(){},
ia:function ia(){},
ib:function ib(){},
by:function by(){},
it:function it(){},
iK:function iK(){},
b8:function b8(){},
cL:function cL(){},
cM:function cM(){},
iU:function iU(){},
e0:function e0(){},
j7:function j7(){},
ej:function ej(){},
jk:function jk(){},
jl:function jl(){},
iS:function iS(){},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k7:function k7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iY:function iY(a){this.a=a},
bB:function bB(a){this.a=a},
D:function D(){},
dx:function dx(a){this.a=a},
hn:function hn(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(){},
ji:function ji(){},
jj:function jj(){},
jn:function jn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jo:function jo(){},
jm:function jm(){},
de:function de(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
as:function as(){},
jg:function jg(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
js:function js(a){this.a=a},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
cS:function cS(){},
cT:function cT(){},
es:function es(){},
et:function et(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
cU:function cU(){},
cV:function cV(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){}},O={
jT:function(a){var u=new O.a3([a])
u.bl(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
dq:function dq(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
fY:function fY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dr:function dr(){},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aX:function aX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(){var _=this
_.e=_.d=_.c=_.b=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bZ:function bZ(){}},E={
mn:function(a,b){var u=new E.hz(a)
u.e_(a,b)
return u},
mt:function(a,b,c,d,e){var u,t,s=J.Z(a)
if(!!s.$ibL)return E.kV(a,!0,!0,!0,!1)
u=W.kw()
t=u.style
t.width="100%"
t.height="100%"
s.gd2(a).h(0,u)
return E.kV(u,!0,!0,!0,!1)},
kV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dM(),j=H.k(C.i.dN(a,"webgl2",P.m9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibW")
if(j==null)H.B(P.A("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mn(j,a)
H.a2(j.getParameter(3379))
H.a2(j.getParameter(34076))
u=new X.dT(a)
t=new X.fL()
t.c=new X.ar(!1,!1,!1)
t.sfN(P.dl(P.p))
u.b=t
t=new X.hf(u)
t.f=0
t.r=V.bx()
t.x=V.bx()
t.ch=t.Q=1
u.c=t
t=new X.fR(u)
t.r=0
t.x=V.bx()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i9(u)
t.f=V.bx()
t.r=V.bx()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sez(H.c([],[[P.cD,P.L]]))
t=u.z
s=document
r=W.a8
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ad(s,"contextmenu",H.l(u.gf6(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ad(a,"focus",H.l(u.gfc(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ad(a,"blur",H.l(u.geZ(),o),!1,p))
t=u.z
n=W.aW
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ad(s,"keyup",H.l(u.gfg(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ad(s,"keydown",H.l(u.gfe(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ad(a,"mousedown",H.l(u.gfk(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,"mouseup",H.l(u.gfo(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,l,H.l(u.gfm(),q),!1,r))
n=u.z
m=W.b8;(n&&C.a).h(n,W.ad(a,H.I(W.m1(a)),H.l(u.gfq(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ad(s,l,H.l(u.gf8(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ad(s,"mouseup",H.l(u.gfa(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ad(s,"pointerlockchange",H.l(u.gft(),o),!1,p))
p=u.z
o=W.aI
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ad(a,"touchstart",H.l(u.gfI(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchend",H.l(u.gfE(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchmove",H.l(u.gfG(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.av(Date.now(),!1)
k.cy=0
k.cQ()
return k},
f2:function f2(){},
ah:function ah(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hz:function hz(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
i5:function i5(a){this.a=a}},Z={
mw:function(a,b,c){var u
H.m(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cW(c)),35044)
a.bindBuffer(b,null)
return new Z.dX(b,u)},
aC:function(a){return new Z.bA(a)},
dX:function dX(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iL:function iL(a){this.a=a},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a}},D={
S:function(){var u=new D.bM()
u.sa8(null)
u.saF(null)
u.c=null
u.d=0
return u},
f5:function f5(){},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=null},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
y:function y(){this.b=null},
bP:function bP(a){this.b=null
this.$ti=a},
bQ:function bQ(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bs:function bs(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a6:function a6(){},
dj:function dj(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dA:function dA(){},
dH:function dH(){}},X={d6:function d6(a,b){this.a=a
this.b=b},di:function di(a,b){this.a=a
this.b=b},fL:function fL(){var _=this
_.d=_.c=_.b=_.a=null},dn:function dn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fR:function fR(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bf:function bf(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hf:function hf(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ct:function ct(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hw:function hw(){},dO:function dO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i9:function i9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dT:function dT(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m3:function(a){var u=new X.fz(),t=new V.aP(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kR
if(t==null){t=V.kQ(0,0,1,1)
$.kR=t}u.r=t
return u},
d7:function d7(){},
fz:function fz(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dK:function dK(){}},V={
nF:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dO(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.d.au("null",c)
return C.d.au(C.c.dG(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.n(u,p,C.d.au(u[p],s))}return u},
dt:function(){var u=$.kI
return u==null?$.kI=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kH:function(a,b,c){var u=c.v(0,Math.sqrt(c.B(c))),t=b.ap(u),s=t.v(0,Math.sqrt(t.B(t))),r=u.ap(s),q=new V.Q(a.a,a.b,a.c),p=s.M(0).B(q),o=r.M(0).B(q),n=u.M(0).B(q)
return V.aY(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bx:function(){var u=$.kM
return u==null?$.kM=new V.aa(0,0):u},
kN:function(){var u=$.cy
return u==null?$.cy=new V.ab(0,0,0):u},
kQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dD(a,b,c,d)},
cJ:function(){var u=$.l2
return u==null?$.l2=new V.Q(0,0,0):u},
mv:function(){var u=$.iw
return u==null?$.iw=new V.Q(-1,0,0):u},
k6:function(){var u=$.ix
return u==null?$.ix=new V.Q(0,1,0):u},
l3:function(){var u=$.iy
return u==null?$.iy=new V.Q(0,0,1):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a){this.a=a},
ds:function ds(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
W:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.A("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.d.aD(a,0)
t=C.d.aD(b,0)
s=new V.hy()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.hH()
u.e0(a)
return u},
i8:function(){var u=new V.i7(),t=P.h
u.sha(new H.a1([t,V.cC]))
u.shc(new H.a1([t,V.cF]))
u.c=null
return u},
ba:function ba(){},
aq:function aq(){},
dp:function dp(){},
aj:function aj(){this.a=null},
hy:function hy(){this.b=this.a=null},
hH:function hH(){this.a=null},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.b=a
this.c=null},
i7:function i7(){this.c=this.b=this.a=null},
cG:function cG(a){this.b=a
this.a=this.c=null},
nz:function(a){P.mu(C.G,new V.jL(a))},
mp:function(a){var u=new V.hL()
u.e2(a,!0)
return u},
bq:function bq(){},
jL:function jL(a){this.a=a},
fd:function fd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fB:function fB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hu:function hu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hL:function hL(){this.b=this.a=null},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a}},U={
jU:function(){var u=new U.f6()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ky:function(a){var u=new U.d8()
u.a=a
return u},
f6:function f6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){this.b=this.a=null},
cp:function cp(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dc:function dc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mb:function(a,b){var u=a.aV,t=new A.fX(b,u)
t.e1(b,u)
t.dZ(a,b)
return t},
mc:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.m(a9,"$ib",[A.aw],"$ab")
H.m(b0,"$ib",[A.ay],"$ab")
H.m(b1,"$ib",[A.az],"$ab")
u="MaterialLight_"+a0.gaa(a0)+a1.gaa(a1)+a2.gaa(a2)+a3.gaa(a3)+a4.gaa(a4)+a5.gaa(a5)+a6.gaa(a6)+a7.gaa(a7)+a8.gaa(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.x)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.x)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.x)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.bn()
if(j){t=$.bm()
f=new Z.bA(f.a|t.a)}if(i){t=$.bl()
f=new Z.bA(f.a|t.a)}if(h){t=$.bk()
f=new Z.bA(f.a|t.a)}return new A.h_(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,k,o,q,g,!0,!1,!1,n,q,l,j,i,!1,!1,h,!1,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
ju:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jv:function(a,b,c){var u
A.ju(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jM(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
mO:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ju(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mL:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jv(b,t,"ambient")
b.a+="\n"},
mM:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jv(b,t,"diffuse")
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
mP:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jv(b,t,"invDiffuse")
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
mV:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jv(b,t,"specular")
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
mR:function(a,b){var u,t,s
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
mT:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ju(b,t,"reflect")
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
mU:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ju(b,t,"refract")
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
mN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jM(t)
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
r=[P.h]
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
c.a+="      highLight = intensity*("+C.a.l(m," + ")+");\n"}else c.a+="   highLight = "+C.a.l(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
mS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jM(t)
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
c.a=r+"\n"}r=[P.h]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.l(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.l(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.l(l," + ")+");\n"
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
mW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jM(t)
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
c.a=u+"\n"}u=[P.h]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.l(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
mQ:function(a,b){var u,t
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
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mX:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bh("")
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
A.mO(a,j)
A.mL(a,j)
A.mM(a,j)
A.mP(a,j)
A.mV(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mT(a,j)
A.mU(a,j)}A.mR(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mN(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mS(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.x)(q),++o)A.mW(a,q[o],j)
A.mQ(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.x)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aj(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.l(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mY:function(a,b){var u,t,s
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
n_:function(a,b){var u
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
mZ:function(a,b){var u
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
n1:function(a,b){var u,t
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
n2:function(a,b){var u,t
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
n0:function(a,b){var u
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
n3:function(a,b){var u
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
jM:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.d.aj(a,1)},
k5:function(a,b,c,d,e){var u=new A.ii(a,c,e)
u.f=d
u.shk(P.ma(d,0,P.p))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a,b){var _=this
_.iv=_.iu=_.da=_.d9=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iI=_.iH=_.iG=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.iF=_.iE=_.di=_.iD=_.iC=_.dh=_.dg=_.iB=_.iA=_.df=_.de=_.iz=_.iy=_.dd=_.ix=_.iw=_.dc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aw:function aw(a,b){this.a=a
this.b=b},
ay:function ay(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aV=b3
_.d9=b4},
c_:function c_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c0:function c0(a,b,c,d,e,f,g,h,i,j){var _=this
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
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cB:function cB(){},
dP:function dP(){},
io:function io(a){this.a=a},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nE:function(){return F.ne(15,30,0.5,1,new F.jN())},
ne:function(a,b,c,d,e){var u=F.nC(a,b,new F.jA(H.l(e,{func:1,ret:V.ab,args:[P.z]}),d,b,c))
if(u==null)return
u.aI()
u.hV(new F.iE(),new F.ho())
return u},
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.aB,P.z,P.z]})
if(a<1)return
if(b<1)return
u=new F.dF()
t=new F.iz(u)
t.b=!1
s=[F.aB]
t.shl(H.c([],s))
u.a=t
t=new F.hK()
t.sbF(H.c([],[F.bS]))
u.b=t
t=new F.hJ(u)
t.seG(H.c([],[F.bw]))
u.c=t
t=new F.hI(u)
t.seA(H.c([],[F.a4]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cY(new V.aP(s,0,0,1),new V.aa(p,1))
c.$3(o,p,0)
C.a.h(r,o.d6(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cY(new V.aP(j,i,h,1),new V.aa(p,m))
c.$3(o,p,n)
C.a.h(r,o.d6(null))}}u.d.hn(a+1,b+1,r)
return u},
fq:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.B(P.A("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.B(P.A("May not create a face with vertices attached to different shapes."))
u.h0(a)
u.h1(b)
u.h2(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
l4:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aB(),r=new F.iH()
r.sbF(H.c([],[F.bS]))
s.b=r
r=new F.iD()
u=[F.bw]
r.seH(H.c([],u))
r.seI(H.c([],u))
s.c=r
r=new F.iA()
u=[F.a4]
r.seB(H.c([],u))
r.seC(H.c([],u))
r.seD(H.c([],u))
s.d=r
h=$.lI()
s.e=0
r=$.bn()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.bF().a)!==0?f:t
s.z=(u&$.bG().a)!==0?g:t
s.Q=(u&$.lJ().a)!==0?c:t
s.ch=(u&$.ce().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
jN:function jN(){},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(){},
hP:function hP(){},
bw:function bw(){},
fN:function fN(){},
ih:function ih(){},
bS:function bS(){},
dF:function dF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(){this.b=null},
aB:function aB(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iz:function iz(a){this.a=a
this.c=this.b=null},
iA:function iA(){this.d=this.c=this.b=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(){this.c=this.b=null},
iF:function iF(){},
iE:function iE(){},
iG:function iG(){},
ho:function ho(){},
iH:function iH(){this.b=null}},T={dL:function dL(){}},Q={
lp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.mp("Test 009"),a=W.kw()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.h]
b.cZ(H.c(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],u))
b.cZ(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(e)
if(t==null)H.B(P.A("Failed to find an element with the identifier, testCanvas."))
s=E.mt(t,!0,!0,!0,!1)
r=new E.ah()
r.a=""
r.b=!0
u=E.ah
r.sep(0,O.jT(u))
r.y.aY(r.ghW(),r.ghZ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scg(0,d)
r.scg(0,F.nE())
q=new O.dq()
q.sem(O.jT(V.ai))
q.e.aY(q.geV(),q.geX())
p=new O.aX(q,"emission")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
q.f=p
p=new O.aX(q,"ambient")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
q.r=p
p=new O.aX(q,"diffuse")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
q.x=p
p=new O.aX(q,"invDiffuse")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
q.y=p
p=new O.h2(q,"specular")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
p.ch=100
q.z=p
p=new O.fZ(q,"bump")
p.c=new A.af(!1,!1,!1)
q.Q=p
q.ch=null
p=new O.aX(q,"reflect")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
q.cx=p
p=new O.h1(q,"refract")
p.c=new A.af(!1,!1,!1)
p.f=new V.a0(0,0,0)
p.ch=1
q.cy=p
p=new O.fY(q,"alpha")
p.c=new A.af(!1,!1,!1)
p.f=1
q.db=p
p=new D.dj()
p.bl(D.a6)
p.sex(H.c([],[D.bs]))
p.sfK(H.c([],[D.dA]))
p.sh9(H.c([],[D.dH]))
p.y=p.x=null
p.cf(p.geT(),p.gfw(),p.gfC())
q.dx=p
o=new O.h0()
o.b=new V.aP(0,0,0,0)
o.c=1
o.d=10
o.e=!1
q.dy=o
o=p.x
p=o==null?p.x=D.S():o
p.h(0,q.gfV())
p=q.dx
o=p.y
p=o==null?p.y=D.S():o
p.h(0,q.gf0())
q.fr=null
p=q.dx
n=V.k6()
o=U.ky(V.kH(V.kN(),n,new V.Q(-1,-1,-1)))
m=new V.a0(1,1,1)
l=new D.bs()
l.c=new V.a0(1,1,1)
l.a=V.l3()
l.d=V.k6()
l.e=V.mv()
k=l.b
l.b=o
o.gw().h(0,l.ge6())
o=new D.O("mover",k,l.b,[U.a9])
o.b=!0
l.ak(o)
if(!l.c.u(0,m)){k=l.c
l.c=m
o=new D.O("color",k,m,[V.a0])
o.b=!0
l.ak(o)}p.h(0,l)
q.f.saK(0,new V.a0(0,0,0))
p=q.r
p.saK(0,new V.a0(0,0,1))
p=q.x
p.saK(0,new V.a0(0,1,0))
p=q.z
p.saK(0,new V.a0(1,0,0))
p=q.z
p.cS(new A.af(!0,!1,!1))
p.cT(10)
j=new U.cp()
j.bl(U.a9)
j.aY(j.geR(),j.gfA())
j.e=null
j.f=V.dt()
j.r=0
p=s.r
o=new U.dV()
l=U.jU()
l.scd(0,!0)
l.sc1(6.283185307179586)
l.sc3(0)
l.sa0(0,0)
l.sc2(100)
l.sP(0)
l.sbQ(0.5)
o.b=l
i=o.gaB()
l.gw().h(0,i)
l=U.jU()
l.scd(0,!0)
l.sc1(6.283185307179586)
l.sc3(0)
l.sa0(0,0)
l.sc2(100)
l.sP(0)
l.sbQ(0.5)
o.c=l
l.gw().h(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.ar(!1,!1,!1)
k=o.d
o.d=h
l=[X.ar]
i=new D.O(c,k,h,l)
i.b=!0
o.K(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.O("invertX",i,!1,[P.M])
i.b=!0
o.K(i)}i=o.r
if(i!==!0){o.r=!0
i=new D.O("invertY",i,!0,[P.M])
i.b=!0
o.K(i)}o.aT(p)
j.h(0,o)
p=s.r
o=new U.dU()
i=U.jU()
i.scd(0,!0)
i.sc1(6.283185307179586)
i.sc3(0)
i.sa0(0,0)
i.sc2(100)
i.sP(0)
i.sbQ(0.2)
o.b=i
i.gw().h(0,o.gaB())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.ar(!0,!1,!1)
k=o.c
o.c=h
i=new D.O(c,k,h,l)
i.b=!0
o.K(i)
o.aT(p)
j.h(0,o)
p=s.r
o=new U.dW()
o.c=0.01
o.e=o.d=0
h=new X.ar(!1,!1,!1)
o.b=h
l=new D.O(c,d,h,l)
l.b=!0
o.K(l)
o.aT(p)
j.h(0,o)
j.h(0,U.ky(V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=new M.dc()
p.a=!0
p.se8(0,O.jT(u))
p.e.aY(p.gf2(),p.gf4())
p.y=p.x=p.r=p.f=null
g=X.m3(d)
f=new X.dz()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sdn(d)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.N().a)){f.c=1.0471975511965976
u=new D.O("fov",u,1.0471975511965976,[P.z])
u.b=!0
f.aC(u)}u=f.d
if(!(Math.abs(u-0.1)<$.N().a)){f.d=0.1
u=new D.O("near",u,0.1,[P.z])
u.b=!0
f.aC(u)}u=f.e
if(!(Math.abs(u-2000)<$.N().a)){f.e=2000
u=new D.O("far",u,2000,[P.z])
u.b=!0
f.aC(u)}u=p.b
if(u!==f){if(u!=null)u.gw().S(0,p.gac())
k=p.b
p.b=f
f.gw().h(0,p.gac())
u=new D.O("camera",k,p.b,[X.d7])
u.b=!0
p.al(u)}u=p.c
if(u!==g){if(u!=null)u.gw().S(0,p.gac())
k=p.c
p.c=g
g.gw().h(0,p.gac())
u=new D.O("target",k,p.c,[X.dK])
u.b=!0
p.al(u)}p.sdE(d)
p.sdE(q)
p.e.h(0,r)
p.b.sdn(j)
u=s.d
if(u!==p){if(u!=null)u.gw().S(0,s.gcm())
s.d=p
p.gw().h(0,s.gcm())
s.cn()}u=s.z
if(u==null)u=s.z=D.S()
p={func:1,ret:-1,args:[D.y]}
o=H.l(new Q.jI(b,q),p)
if(u.b==null)u.saF(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.nz(s)},
jI:function jI(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jZ.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gF:function(a){return H.cz(a)},
i:function(a){return"Instance of '"+H.bU(a)+"'"}}
J.fH.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iM:1}
J.dg.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.dh.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.ht.prototype={}
J.bz.prototype={}
J.bd.prototype={
i:function(a){var u=a[$.lx()]
if(u==null)return this.dV(a)
return"JavaScript function for "+H.j(J.aM(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibu:1}
J.aF.prototype={
h:function(a,b){H.H(b,H.w(a,0))
if(!!a.fixed$length)H.B(P.am("add"))
a.push(b)},
dA:function(a,b){if(!!a.fixed$length)H.B(P.am("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dC(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.B(P.am("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.br(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
hR:function(a){return this.l(a,"")},
hM:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.M,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.C(b.$1(s)))return s
if(a.length!==u)throw H.i(P.br(a))}throw H.i(H.fG())},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dS:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.b0(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.b0(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
ghL:function(a){if(a.length>0)return a[0]
throw H.i(H.fG())},
gb9:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.fG())},
aZ:function(a,b,c,d){var u,t,s=H.w(a,0)
H.m(d,"$if",[s],"$af")
if(!!a.immutable$list)H.B(P.am("setRange"))
P.k2(b,c,a.length)
u=c-b
if(u===0)return
P.k1(0,"skipCount")
H.m(d,"$ib",[s],"$ab")
s=J.jC(d)
if(u>s.gm(d))throw H.i(H.m5())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
d_:function(a,b){var u,t
H.l(b,{func:1,ret:P.M,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.C(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.br(a))}return!1},
bi:function(a,b){var u=H.w(a,0)
H.l(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.B(P.am("sort"))
H.dG(a,0,a.length-1,b,u)},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.jW(a,"[","]")},
gO:function(a){return new J.ap(a,a.length,[H.w(a,0)])},
gF:function(a){return H.cz(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.B(P.am("set length"))
if(b<0)throw H.i(P.b0(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c8(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.w(a,0))
if(!!a.immutable$list)H.B(P.am("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c8(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.w(a,0)]
H.m(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gm(b))
t=H.c([],t)
this.sm(t,u)
this.aZ(t,0,a.length,a)
this.aZ(t,a.length,u,b)
return t},
$if:1,
$ib:1}
J.jY.prototype={}
J.ap.prototype={
gE:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.x(s))
u=t.c
if(u>=r){t.scF(null)
return!1}t.scF(s[u]);++t.c
return!0},
scF:function(a){this.d=H.H(a,H.w(this,0))},
$iaV:1}
J.bv.prototype={
hz:function(a,b){var u
H.lq(b)
if(typeof b!=="number")throw H.i(H.aK(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb8(b)
if(this.gb8(a)===u)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
dj:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.am(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.am(""+a+".round()"))},
dG:function(a,b){var u
if(b>20)throw H.i(P.b0(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.i(H.aK(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.i(H.aK(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.i(H.aK(b))
return a*b},
dO:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.am("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
b3:function(a,b){var u
if(a>0)u=this.h7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h7:function(a,b){return b>31?0:a>>>b},
ai:function(a,b){if(typeof b!=="number")throw H.i(H.aK(b))
return a>b},
$iz:1,
$ia5:1}
J.df.prototype={$ip:1}
J.fI.prototype={}
J.bc.prototype={
bP:function(a,b){if(b<0)throw H.i(H.c8(a,b))
if(b>=a.length)H.B(H.c8(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.i(H.c8(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.i(P.jR(b,null,null))
return a+b},
bj:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b_:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dC(b,null))
if(b>c)throw H.i(P.dC(b,null))
if(c>a.length)throw H.i(P.dC(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.b_(a,b,null)},
io:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
au:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikK:1,
$ih:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.d.bP(this.a,b)},
$adS:function(){return[P.p]},
$au:function(){return[P.p]},
$af:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fk.prototype={}
H.bR.prototype={
gO:function(a){var u=this
return new H.cr(u,u.gm(u),[H.ao(u,"bR",0)])},
bg:function(a,b){return this.dU(0,H.l(b,{func:1,ret:P.M,args:[H.ao(this,"bR",0)]}))}}
H.cr.prototype={
gE:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jC(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.br(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.C(s,u));++t.c
return!0},
saP:function(a){this.d=H.H(a,H.w(this,0))},
$iaV:1}
H.fU.prototype={
gO:function(a){return new H.fV(J.bI(this.a),this.b,this.$ti)},
gm:function(a){return J.bJ(this.a)},
C:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$af:function(a,b){return[b]}}
H.fV.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saP(u.c.$1(t.gE(t)))
return!0}u.saP(null)
return!1},
gE:function(a){return this.a},
saP:function(a){this.a=H.H(a,H.w(this,1))},
$aaV:function(a,b){return[b]}}
H.fW.prototype={
gm:function(a){return J.bJ(this.a)},
C:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$abR:function(a,b){return[b]},
$af:function(a,b){return[b]}}
H.cK.prototype={
gO:function(a){return new H.iM(J.bI(this.a),this.b,this.$ti)}}
H.iM.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.C(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bN.prototype={}
H.dS.prototype={}
H.dR.prototype={}
H.id.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hp.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fK.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.ir.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jO.prototype={
$1:function(a){if(!!J.Z(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.ew.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ial:1}
H.ci.prototype={
i:function(a){return"Closure '"+H.bU(this).trim()+"'"},
$ibu:1,
gip:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i2.prototype={}
H.hT.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.cg.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cg))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.cz(this.a)
else u=typeof t!=="object"?J.bH(t):H.cz(t)
return(u^H.cz(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bU(u)+"'")}}
H.ig.prototype={
i:function(a){return this.a}}
H.f4.prototype={
i:function(a){return this.a}}
H.hF.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iN.prototype={
i:function(a){return"Assertion failed: "+P.dd(this.a)}}
H.a1.prototype={
gm:function(a){return this.a},
ga_:function(a){return new H.dk(this,[H.w(this,0)])},
d5:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cC(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cC(t,b)}else return s.hP(b)},
hP:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.bs(u,J.bH(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b1(r,b)
s=t==null?null:t.b
return s}else return q.hQ(b)},
hQ:function(a){var u,t,s=this.d
if(s==null)return
u=this.bs(s,J.bH(a)&0x3ffffff)
t=this.bZ(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.w(o,0))
H.H(c,H.w(o,1))
if(typeof b==="string"){u=o.b
o.cr(u==null?o.b=o.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cr(t==null?o.c=o.bD():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bD()
r=J.bH(b)&0x3ffffff
q=o.bs(s,r)
if(q==null)o.bI(s,r,[o.bE(b,c)])
else{p=o.bZ(q,b)
if(p>=0)q[p].b=c
else q.push(o.bE(b,c))}}},
H:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.br(s))
u=u.c}},
cr:function(a,b,c){var u,t=this
H.H(b,H.w(t,0))
H.H(c,H.w(t,1))
u=t.b1(a,b)
if(u==null)t.bI(a,b,t.bE(b,c))
else u.b=c},
eO:function(){this.r=this.r+1&67108863},
bE:function(a,b){var u,t=this,s=new H.fO(H.H(a,H.w(t,0)),H.H(b,H.w(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eO()
return s},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.kG(this)},
b1:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
ev:function(a,b){delete a[b]},
cC:function(a,b){return this.b1(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bI(t,u,t)
this.ev(t,u)
return t}}
H.fO.prototype={}
H.dk.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fP(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fP.prototype={
gE:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.br(t))
else{t=u.c
if(t==null){u.scq(null)
return!1}else{u.scq(t.a)
u.c=u.c.c
return!0}}},
scq:function(a){this.d=H.H(a,H.w(this,0))},
$iaV:1}
H.jE.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jF.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jG.prototype={
$1:function(a){return this.a(H.I(a))},
$S:32}
H.fJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikK:1}
H.cw.prototype={}
H.du.prototype={
gm:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cv.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$abN:function(){return[P.z]},
$au:function(){return[P.z]},
$if:1,
$af:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dv.prototype={
$abN:function(){return[P.p]},
$au:function(){return[P.p]},
$if:1,
$af:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hg.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.dw.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hl.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.iP.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.iO.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eC.prototype={
ed:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c7(new P.jq(this,b),0),a)
else throw H.i(P.am("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c7(new P.jp(this,a,Date.now(),b),0),a)
else throw H.i(P.am("Periodic timer."))},
$ib5:1}
P.jq.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jp.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dY(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b9.prototype={
hT:function(a){if(this.c!==6)return!0
return this.b.b.ca(H.l(this.d,{func:1,ret:P.M,args:[P.L]}),a.a,P.M,P.L)},
hO:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eS(u,{func:1,args:[P.L,P.al]}))return H.kh(r.ih(u,a.a,a.b,null,t,P.al),s)
else return H.kh(r.ca(H.l(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aD.prototype={
dF:function(a,b,c){var u,t,s,r=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n5(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aD($.Y,[c])
s=b==null?1:3
this.cs(new P.b9(t,s,a,b,[r,c]))
return t},
ik:function(a,b){return this.dF(a,null,b)},
cs:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib9")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaD")
s=u.a
if(s<4){u.cs(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jy(null,null,s,H.l(new P.iZ(t,a),{func:1,ret:-1}))}},
cO:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib9")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaD")
u=q.a
if(u<4){q.cO(a)
return}p.a=u
p.c=q.c}o.a=p.b2(a)
u=p.b
u.toString
P.jy(null,null,u,H.l(new P.j2(o,p),{func:1,ret:-1}))}},
bH:function(){var u=H.k(this.c,"$ib9")
this.c=null
return this.b2(u)},
b2:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cw:function(a){var u,t,s=this,r=H.w(s,0)
H.kh(a,{futureOr:1,type:r})
u=s.$ti
if(H.ke(a,"$ico",u,"$aco"))if(H.ke(a,"$iaD",u,null))P.l5(a,s)
else P.mB(a,s)
else{t=s.bH()
H.H(a,r)
s.a=4
s.c=a
P.cN(s,t)}},
cz:function(a,b){var u,t=this
H.k(b,"$ial")
u=t.bH()
t.a=8
t.c=new P.ae(a,b)
P.cN(t,u)},
$ico:1}
P.iZ.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:2}
P.j2.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:2}
P.j_.prototype={
$1:function(a){var u=this.a
u.a=0
u.cw(a)},
$S:18}
P.j0.prototype={
$2:function(a,b){H.k(b,"$ial")
this.a.cz(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.j1.prototype={
$0:function(){this.a.cz(this.b,this.c)},
$S:2}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dC(H.l(s.d,{func:1}),null)}catch(r){u=H.au(r)
t=H.cb(r)
if(o.d){s=H.k(o.a.a.c,"$iae").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iae")
else q.b=new P.ae(u,t)
q.a=!0
return}if(!!J.Z(n).$ico){if(n instanceof P.aD&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iae")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ik(new P.j6(p),null)
s.a=!1}},
$S:3}
P.j6.prototype={
$1:function(a){return this.a},
$S:39}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.H(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.ca(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.cb(o)
s=n.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iae")
r=m.c
if(H.C(r.hT(u))&&r.e!=null){q=m.b
q.b=r.hO(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.cb(p)
r=H.k(m.a.a.c,"$iae")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.dY.prototype={}
P.hW.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aD($.Y,[P.p])
r.a=0
u=H.w(s,0)
t=H.l(new P.hY(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hZ(r,q),{func:1,ret:-1})
W.ad(s.a,s.b,t,!1,u)
return q}}
P.hY.prototype={
$1:function(a){H.H(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.w(this.b,0)]}}}
P.hZ.prototype={
$0:function(){this.b.cw(this.a.a)},
$S:2}
P.cD.prototype={}
P.hX.prototype={}
P.b5.prototype={}
P.ae.prototype={
i:function(a){return H.j(this.a)},
$ibt:1}
P.jt.prototype={$ioc:1}
P.jx.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dy():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jc.prototype={
ii:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.Y){a.$0()
return}P.lb(r,r,this,a,-1)}catch(s){u=H.au(s)
t=H.cb(s)
P.jw(r,r,this,u,H.k(t,"$ial"))}},
ij:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.Y){a.$1(b)
return}P.lc(r,r,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.cb(s)
P.jw(r,r,this,u,H.k(t,"$ial"))}},
hw:function(a,b){return new P.je(this,H.l(a,{func:1,ret:b}),b)},
bK:function(a){return new P.jd(this,H.l(a,{func:1,ret:-1}))},
d0:function(a,b){return new P.jf(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dC:function(a,b){H.l(a,{func:1,ret:b})
if($.Y===C.f)return a.$0()
return P.lb(null,null,this,a,b)},
ca:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.Y===C.f)return a.$1(b)
return P.lc(null,null,this,a,b,c,d)},
ih:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.Y===C.f)return a.$2(b,c)
return P.n6(null,null,this,a,b,c,d,e,f)}}
P.je.prototype={
$0:function(){return this.a.dC(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jd.prototype={
$0:function(){return this.a.ii(this.b)},
$S:3}
P.jf.prototype={
$1:function(a){var u=this.c
return this.a.ij(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gO:function(a){var u=this,t=new P.ed(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic4")!=null}else{t=this.eq(b)
return t}},
eq:function(a){var u=this.d
if(u==null)return!1
return this.bq(this.cH(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ct(u==null?s.b=P.k8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ct(t==null?s.c=P.k8():t,b)}else return s.eg(0,b)},
eg:function(a,b){var u,t,s,r=this
H.H(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.k8()
t=r.cA(b)
s=u[t]
if(s==null)u[t]=[r.bn(b)]
else{if(r.bq(s,b)>=0)return!1
s.push(r.bn(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fP(this.c,b)
else return this.fO(0,b)},
fO:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cH(r,b)
t=s.bq(u,b)
if(t<0)return!1
s.cV(u.splice(t,1)[0])
return!0},
ct:function(a,b){H.H(b,H.w(this,0))
if(H.k(a[b],"$ic4")!=null)return!1
a[b]=this.bn(b)
return!0},
fP:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic4")
if(u==null)return!1
this.cV(u)
delete a[b]
return!0},
cv:function(){this.r=1073741823&this.r+1},
bn:function(a){var u,t=this,s=new P.c4(H.H(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cv()
return s},
cV:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cv()},
cA:function(a){return J.bH(a)&1073741823},
cH:function(a,b){return a[this.cA(b)]},
bq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.c4.prototype={}
P.ed.prototype={
gE:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.br(t))
else{t=u.c
if(t==null){u.scu(null)
return!1}else{u.scu(H.H(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
scu:function(a){this.d=H.H(a,H.w(this,0))},
$iaV:1}
P.fQ.prototype={$if:1,$ib:1}
P.u.prototype={
gO:function(a){return new H.cr(a,this.gm(a),[H.ca(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
im:function(a,b){var u,t=this,s=H.c([],[H.ca(t,a,"u",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
il:function(a){return this.im(a,!0)},
p:function(a,b){var u,t=this,s=[H.ca(t,a,"u",0)]
H.m(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sm(u,C.e.p(t.gm(a),b.gm(b)))
C.a.aZ(u,0,t.gm(a),a)
C.a.aZ(u,t.gm(a),u.length,b)
return u},
i:function(a){return P.jW(a,"[","]")}}
P.fS.prototype={}
P.fT.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:19}
P.a7.prototype={
H:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.ca(s,a,"a7",0),H.ca(s,a,"a7",1)]})
for(u=J.bI(s.ga_(a));u.A();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bJ(this.ga_(a))},
i:function(a){return P.kG(a)},
$iG:1}
P.jh.prototype={
ae:function(a,b){var u
for(u=J.bI(H.m(b,"$if",this.$ti,"$af"));u.A();)this.h(0,u.gE(u))},
i:function(a){return P.jW(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.k1(b,"index")
for(u=P.mF(r,r.r,H.w(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.i(P.V(b,r,"index",null,t))},
$if:1,
$ikS:1}
P.ee.prototype={}
P.cj.prototype={}
P.ck.prototype={}
P.fm.prototype={
$acj:function(){return[P.h,[P.b,P.p]]}}
P.fE.prototype={
i:function(a){return this.a}}
P.fD.prototype={
er:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.bh("")
if(r>b)q.a+=C.d.b_(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lS(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ack:function(){return[P.h,P.h]}}
P.iu.prototype={}
P.iv.prototype={
hA:function(a){var u,t,s=P.k2(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jr(u)
if(t.eE(a,0,s)!==s)t.cW(C.d.bP(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mI(0,t.b,u.length)))},
$ack:function(){return[P.h,[P.b,P.p]]}}
P.jr.prototype={
cW:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eE:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bP(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.aD(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cW(r,C.d.aD(a,p)))s=p}else if(r<=2047){q=n.b
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
P.M.prototype={}
P.av.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.e.b3(u,30))&1073741823},
i:function(a){var u=this,t=P.lZ(H.mk(u)),s=P.d9(H.mi(u)),r=P.d9(H.me(u)),q=P.d9(H.mf(u)),p=P.d9(H.mh(u)),o=P.d9(H.mj(u)),n=P.m_(H.mg(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.aS.prototype={
p:function(a,b){return new P.aS(C.e.p(this.a,b.gcG()))},
q:function(a,b){return new P.aS(C.e.q(this.a,b.gcG()))},
ai:function(a,b){return C.e.ai(this.a,b.gcG())},
u:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gF:function(a){return C.e.gF(this.a)},
i:function(a){var u,t,s,r=new P.fj(),q=this.a
if(q<0)return"-"+new P.aS(0-q).i(0)
u=r.$1(C.e.Z(q,6e7)%60)
t=r.$1(C.e.Z(q,1e6)%60)
s=new P.fi().$1(q%1e6)
return""+C.e.Z(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fi.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fj.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bt.prototype={}
P.eX.prototype={
i:function(a){return"Assertion failed"}}
P.dy.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gbp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbo:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbp()+o+u
if(!q.a)return t
s=q.gbo()
r=P.dd(q.b)
return t+s+": "+r}}
P.bV.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fF.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t=H.a2(this.b)
if(typeof t!=="number")return t.a3()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gm:function(a){return this.f}}
P.is.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iq.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bX.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f7.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dd(u)+"."}}
P.hs.prototype={
i:function(a){return"Out of Memory"},
$ibt:1}
P.dI.prototype={
i:function(a){return"Stack Overflow"},
$ibt:1}
P.fc.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e5.prototype={
i:function(a){return"Exception: "+this.a}}
P.fy.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.b_(s,0,75)+"...":s
return t+"\n"+r}}
P.bu.prototype={}
P.p.prototype={}
P.f.prototype={
bg:function(a,b){var u=H.ao(this,"f",0)
return new H.cK(this,H.l(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t=this.gO(this)
for(u=0;t.A();)++u
return u},
gaz:function(a){var u,t=this.gO(this)
if(!t.A())throw H.i(H.fG())
u=t.gE(t)
if(t.A())throw H.i(H.m6())
return u},
C:function(a,b){var u,t,s
P.k1(b,"index")
for(u=this.gO(this),t=0;u.A();){s=u.gE(u)
if(b===t)return s;++t}throw H.i(P.V(b,this,"index",null,t))},
i:function(a){return P.m4(this,"(",")")}}
P.aV.prototype={}
P.b.prototype={$if:1}
P.G.prototype={}
P.K.prototype={
gF:function(a){return P.L.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
u:function(a,b){return this===b},
gF:function(a){return H.cz(this)},
i:function(a){return"Instance of '"+H.bU(this)+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.h.prototype={$ikK:1}
P.bh.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eV.prototype={
gm:function(a){return a.length}}
W.d0.prototype={
i:function(a){return String(a)},
$id0:1}
W.eW.prototype={
i:function(a){return String(a)}}
W.cf.prototype={$icf:1}
W.d2.prototype={}
W.bo.prototype={$ibo:1}
W.bL.prototype={
dN:function(a,b,c){var u=a.getContext(b,P.nd(c))
return u},
$ibL:1}
W.bp.prototype={
gm:function(a){return a.length}}
W.cl.prototype={$icl:1}
W.f8.prototype={
gm:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cm.prototype={
gm:function(a){return a.length}}
W.f9.prototype={}
W.aQ.prototype={}
W.aR.prototype={}
W.fa.prototype={
gm:function(a){return a.length}}
W.fb.prototype={
gm:function(a){return a.length}}
W.fe.prototype={
gm:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.ff.prototype={
i:function(a){return String(a)}}
W.da.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ak,P.a5]]},
$au:function(){return[[P.ak,P.a5]]},
$if:1,
$af:function(){return[[P.ak,P.a5]]},
$ib:1,
$ab:function(){return[[P.ak,P.a5]]},
$aD:function(){return[[P.ak,P.a5]]}}
W.db.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gay(a))+" x "+H.j(this.gaq(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iak)return!1
return a.left===u.gba(b)&&a.top===u.gbd(b)&&this.gay(a)===u.gay(b)&&this.gaq(a)===u.gaq(b)},
gF:function(a){return W.l7(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(this.gay(a)),C.c.gF(this.gaq(a)))},
gd1:function(a){return a.bottom},
gaq:function(a){return a.height},
gba:function(a){return a.left},
gc9:function(a){return a.right},
gbd:function(a){return a.top},
gay:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a5]}}
W.fg.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.h]},
$au:function(){return[P.h]},
$if:1,
$af:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fh.prototype={
gm:function(a){return a.length}}
W.iT.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iR")},
h:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.il(this)
return new J.ap(u,u.length,[H.w(u,0)])},
$au:function(){return[W.R]},
$af:function(){return[W.R]},
$ab:function(){return[W.R]}}
W.R.prototype={
ghv:function(a){return new W.iV(a)},
gd2:function(a){return new W.iT(a,a.children)},
gd3:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a3()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a3()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
a5:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kB
if(u==null){u=H.c([],[W.as])
t=new W.dx(u)
C.a.h(u,W.l6(null))
C.a.h(u,W.l8())
$.kB=t
d=t}else d=u
u=$.kA
if(u==null){u=new W.eH(d)
$.kA=u
c=u}else{u.a=d
c=u}}if($.bb==null){u=document
t=u.implementation.createHTMLDocument("")
$.bb=t
$.jV=t.createRange()
t=$.bb.createElement("base")
H.k(t,"$icf")
t.href=u.baseURI
$.bb.head.appendChild(t)}u=$.bb
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibo")}u=$.bb
if(!!this.$ibo)s=u.body
else{s=u.createElement(a.tagName)
$.bb.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.L,a.tagName)){$.jV.selectNodeContents(s)
r=$.jV.createContextualFragment(b)}else{s.innerHTML=b
r=$.bb.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bb.body
if(s==null?u!=null:s!==u)J.ks(s)
c.ce(r)
document.adoptNode(r)
return r},
hB:function(a,b,c){return this.a5(a,b,c,null)},
dQ:function(a,b){a.textContent=null
a.appendChild(this.a5(a,b,null,null))},
$iR:1,
gdD:function(a){return a.tagName}}
W.fl.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iE")).$iR},
$S:25}
W.n.prototype={$in:1}
W.e.prototype={
hm:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.eh(a,b,c,!1)},
eh:function(a,b,c,d){return a.addEventListener(b,H.c7(H.l(c,{func:1,args:[W.n]}),1),!1)},
$ie:1}
W.aT.prototype={$iaT:1}
W.fs.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aT]},
$au:function(){return[W.aT]},
$if:1,
$af:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.ft.prototype={
gm:function(a){return a.length}}
W.fx.prototype={
gm:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.fC.prototype={
gm:function(a){return a.length}}
W.bO.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$au:function(){return[W.E]},
$if:1,
$af:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibO:1,
$aD:function(){return[W.E]}}
W.aW.prototype={$iaW:1}
W.dm.prototype={
i:function(a){return String(a)},
$idm:1}
W.h9.prototype={
gm:function(a){return a.length}}
W.ha.prototype={
j:function(a,b){return P.bj(a.get(H.I(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.h])
this.H(a,new W.hb(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hc.prototype={
j:function(a,b){return P.bj(a.get(H.I(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.h])
this.H(a,new W.hd(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aZ.prototype={$iaZ:1}
W.he.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$if:1,
$af:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aD:function(){return[W.aZ]}}
W.a8.prototype={$ia8:1}
W.ag.prototype={
gaz:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.kT("No elements"))
if(t>1)throw H.i(P.kT("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s,r
H.m(b,"$if",[W.E],"$af")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.de(u,u.length,[H.ca(C.N,u,"D",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.E]},
$af:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
ia:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dT(a):u},
hq:function(a,b){return a.appendChild(b)},
$iE:1}
W.cx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$au:function(){return[W.E]},
$if:1,
$af:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.b_.prototype={$ib_:1,
gm:function(a){return a.length}}
W.hv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b_]},
$au:function(){return[W.b_]},
$if:1,
$af:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aD:function(){return[W.b_]}}
W.hD.prototype={
j:function(a,b){return P.bj(a.get(H.I(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.h])
this.H(a,new W.hE(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hG.prototype={
gm:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.hQ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b1]},
$au:function(){return[W.b1]},
$if:1,
$af:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aD:function(){return[W.b1]}}
W.b2.prototype={$ib2:1}
W.hR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b2]},
$au:function(){return[W.b2]},
$if:1,
$af:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aD:function(){return[W.b2]}}
W.b3.prototype={$ib3:1,
gm:function(a){return a.length}}
W.hU.prototype={
j:function(a,b){return a.getItem(H.I(b))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.c([],[P.h])
this.H(a,new W.hV(u))
return u},
gm:function(a){return a.length},
$aa7:function(){return[P.h,P.h]},
$iG:1,
$aG:function(){return[P.h,P.h]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:46}
W.aG.prototype={$iaG:1}
W.bY.prototype={}
W.dJ.prototype={
a5:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bk(a,b,c,d)
u=W.m0("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ag(t).ae(0,new W.ag(u))
return t}}
W.i0.prototype={
a5:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bk(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.ag(u)
s=u.gaz(u)
s.toString
u=new W.ag(s)
r=u.gaz(u)
t.toString
r.toString
new W.ag(t).ae(0,new W.ag(r))
return t}}
W.i1.prototype={
a5:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bk(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.ag(u)
s=u.gaz(u)
t.toString
s.toString
new W.ag(t).ae(0,new W.ag(s))
return t}}
W.cE.prototype={$icE:1}
W.b4.prototype={$ib4:1}
W.aH.prototype={$iaH:1}
W.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aH]},
$au:function(){return[W.aH]},
$if:1,
$af:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.i4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b4]},
$au:function(){return[W.b4]},
$if:1,
$af:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aD:function(){return[W.b4]}}
W.i6.prototype={
gm:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.aI.prototype={$iaI:1}
W.ia.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b6]},
$au:function(){return[W.b6]},
$if:1,
$af:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aD:function(){return[W.b6]}}
W.ib.prototype={
gm:function(a){return a.length}}
W.by.prototype={}
W.it.prototype={
i:function(a){return String(a)}}
W.iK.prototype={
gm:function(a){return a.length}}
W.b8.prototype={
ghE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.am("deltaY is not supported"))},
ghD:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.am("deltaX is not supported"))},
$ib8:1}
W.cL.prototype={
fU:function(a,b){return a.requestAnimationFrame(H.c7(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
ey:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cM.prototype={$icM:1}
W.iU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.T]},
$au:function(){return[W.T]},
$if:1,
$af:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aD:function(){return[W.T]}}
W.e0.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$iak)return!1
return a.left===u.gba(b)&&a.top===u.gbd(b)&&a.width===u.gay(b)&&a.height===u.gaq(b)},
gF:function(a){return W.l7(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(a.width),C.c.gF(a.height))},
gaq:function(a){return a.height},
gay:function(a){return a.width}}
W.j7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aU]},
$au:function(){return[W.aU]},
$if:1,
$af:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.ej.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$au:function(){return[W.E]},
$if:1,
$af:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b3]},
$au:function(){return[W.b3]},
$if:1,
$af:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aD:function(){return[W.b3]}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aG]},
$au:function(){return[W.aG]},
$if:1,
$af:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.iS.prototype={
H:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icM")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa7:function(){return[P.h,P.h]},
$aG:function(){return[P.h,P.h]}}
W.iV.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
gm:function(a){return this.ga_(this).length}}
W.iW.prototype={}
W.k7.prototype={}
W.iX.prototype={}
W.iY.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:27}
W.bB.prototype={
e4:function(a){var u
if($.e8.a===0){for(u=0;u<262;++u)$.e8.n(0,C.K[u],W.nl())
for(u=0;u<12;++u)$.e8.n(0,C.m[u],W.nm())}},
aH:function(a){return $.lL().R(0,W.cn(a))},
af:function(a,b,c){var u=$.e8.j(0,H.j(W.cn(a))+"::"+b)
if(u==null)u=$.e8.j(0,"*::"+b)
if(u==null)return!1
return H.kd(u.$4(a,b,c,this))},
$ias:1}
W.D.prototype={
gO:function(a){return new W.de(a,this.gm(a),[H.ca(this,a,"D",0)])}}
W.dx.prototype={
aH:function(a){return C.a.d_(this.a,new W.hn(a))},
af:function(a,b,c){return C.a.d_(this.a,new W.hm(a,b,c))},
$ias:1}
W.hn.prototype={
$1:function(a){return H.k(a,"$ias").aH(this.a)},
$S:16}
W.hm.prototype={
$1:function(a){return H.k(a,"$ias").af(this.a,this.b,this.c)},
$S:16}
W.er.prototype={
ec:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bg(0,new W.ji())
t=b.bg(0,new W.jj())
this.b.ae(0,u)
s=this.c
s.ae(0,C.M)
s.ae(0,t)},
aH:function(a){return this.a.R(0,W.cn(a))},
af:function(a,b,c){var u=this,t=W.cn(a),s=u.c
if(s.R(0,H.j(t)+"::"+b))return u.d.ho(c)
else if(s.R(0,"*::"+b))return u.d.ho(c)
else{s=u.b
if(s.R(0,H.j(t)+"::"+b))return!0
else if(s.R(0,"*::"+b))return!0
else if(s.R(0,H.j(t)+"::*"))return!0
else if(s.R(0,"*::*"))return!0}return!1},
$ias:1}
W.ji.prototype={
$1:function(a){return!C.a.R(C.m,H.I(a))},
$S:15}
W.jj.prototype={
$1:function(a){return C.a.R(C.m,H.I(a))},
$S:15}
W.jn.prototype={
af:function(a,b,c){if(this.dX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.R(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))},
$S:28}
W.jm.prototype={
aH:function(a){var u=J.Z(a)
if(!!u.$icA)return!1
u=!!u.$io
if(u&&W.cn(a)==="foreignObject")return!1
if(u)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.d.bj(b,"on"))return!1
return this.aH(a)},
$ias:1}
W.de.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scI(J.eU(u.a,t))
u.c=t
return!0}u.scI(null)
u.c=s
return!1},
gE:function(a){return this.d},
scI:function(a){this.d=H.H(a,H.w(this,0))},
$iaV:1}
W.as.prototype={}
W.jg.prototype={$io_:1}
W.eH.prototype={
ce:function(a){new W.js(this).$2(a,null)},
aS:function(a,b){if(b==null)J.ks(a)
else b.removeChild(a)},
fY:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lR(a)
n=o.a.getAttribute("is")
H.k(a,"$iR")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.C(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.aM(a)}catch(r){H.au(r)}try{s=W.cn(a)
this.fX(H.k(a,"$iR"),b,p,t,s,H.k(o,"$iG"),H.I(n))}catch(r){if(H.au(r) instanceof P.aN)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aH(a)){o.aS(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.af(a,"is",g)){o.aS(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.c(u.slice(0),[H.w(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lT(r)
H.I(r)
if(!q.af(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Z(a).$icE)o.ce(a.content)},
$inM:1}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fY(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:29}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ex.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
P.jz.prototype={
$2:function(a,b){this.a[a]=b},
$S:19}
P.fu.prototype={
gbt:function(){var u=this.b,t=H.ao(u,"u",0),s=W.R
return new H.fU(new H.cK(u,H.l(new P.fv(),{func:1,ret:P.M,args:[t]}),[t]),H.l(new P.fw(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bJ(this.gbt().a)},
j:function(a,b){var u=this.gbt()
return u.b.$1(J.jQ(u.a,b))},
gO:function(a){var u=P.kF(this.gbt(),!1,W.R)
return new J.ap(u,u.length,[H.w(u,0)])},
$au:function(){return[W.R]},
$af:function(){return[W.R]},
$ab:function(){return[W.R]}}
P.fv.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iE")).$iR},
$S:25}
P.fw.prototype={
$1:function(a){return H.v(H.k(a,"$iE"),"$iR")},
$S:30}
P.jb.prototype={
gc9:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.w(this,0))},
gd1:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Z(b)
if(!!u.$iak){t=p.a
if(t==u.gba(b)){s=p.b
if(s==u.gbd(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.F(r)
q=H.w(p,0)
if(H.H(t+r,q)===u.gc9(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gd1(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t=this,s=t.a,r=J.bH(s),q=t.b,p=J.bH(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.F(o)
u=H.w(t,0)
o=C.e.gF(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.F(s)
u=C.e.gF(H.H(q+s,u))
return P.mE(P.j9(P.j9(P.j9(P.j9(0,r),p),o),u))}}
P.ak.prototype={
gba:function(a){return this.a},
gbd:function(a){return this.b},
gay:function(a){return this.c},
gaq:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.fM.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.be]},
$if:1,
$af:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aD:function(){return[P.be]}}
P.bg.prototype={$ibg:1}
P.hq.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.bg]},
$if:1,
$af:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aD:function(){return[P.bg]}}
P.hx.prototype={
gm:function(a){return a.length}}
P.cA.prototype={$icA:1}
P.i_.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.h]},
$if:1,
$af:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.o.prototype={
gd2:function(a){return new P.fu(a,new W.ag(a))},
a5:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.as])
C.a.h(p,W.l6(null))
C.a.h(p,W.l8())
C.a.h(p,new W.jm())
c=new W.eH(new W.dx(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hB(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ag(s)
q=p.gaz(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bi.prototype={$ibi:1}
P.ic.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$au:function(){return[P.bi]},
$if:1,
$af:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aD:function(){return[P.bi]}}
P.eb.prototype={}
P.ec.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eZ.prototype={
gm:function(a){return a.length}}
P.f_.prototype={
j:function(a,b){return P.bj(a.get(H.I(b)))},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
ga_:function(a){var u=H.c([],[P.h])
this.H(a,new P.f0(u))
return u},
gm:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iG:1,
$aG:function(){return[P.h,null]}}
P.f0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.f1.prototype={
gm:function(a){return a.length}}
P.bK.prototype={}
P.hr.prototype={
gm:function(a){return a.length}}
P.dZ.prototype={}
P.d3.prototype={$id3:1}
P.dB.prototype={$idB:1}
P.bW.prototype={
W:function(a,b,c){return a.uniform1f(b,c)},
bf:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dJ:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibW:1}
P.dE.prototype={$idE:1}
P.dQ.prototype={$idQ:1}
P.hS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return P.bj(a.item(b))},
C:function(a,b){return this.j(a,b)},
$au:function(){return[[P.G,,,]]},
$if:1,
$af:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aD:function(){return[[P.G,,,]]}}
P.eu.prototype={}
P.ev.prototype={}
O.a3.prototype={
bl:function(a){var u=this
u.seJ(H.c([],[a]))
u.scM(null)
u.scJ(null)
u.scN(null)},
cf:function(a,b,c){var u=this,t=H.ao(u,"a3",0)
H.l(b,{func:1,ret:P.M,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.p,[P.f,t]]}
H.l(a,t)
H.l(c,t)
u.scM(b)
u.scJ(a)
u.scN(c)},
aY:function(a,b){return this.cf(a,null,b)},
fv:function(a){var u
H.m(a,"$if",[H.ao(this,"a3",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
e3:function(a,b){var u
H.m(b,"$if",[H.ao(this,"a3",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ap(u,u.length,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ao(s,"a3",0)
H.H(b,r)
r=[r]
if(H.C(s.fv(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.e3(t,H.c([b],r))}},
seJ:function(a){this.a=H.m(a,"$ib",[H.ao(this,"a3",0)],"$ab")},
scM:function(a){this.b=H.l(a,{func:1,ret:P.M,args:[[P.f,H.ao(this,"a3",0)]]})},
scJ:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.p,[P.f,H.ao(this,"a3",0)]]})},
scN:function(a){H.l(a,{func:1,ret:-1,args:[P.p,[P.f,H.ao(this,"a3",0)]]})},
$if:1}
O.cs.prototype={
gm:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.S():u},
aA:function(){var u=this.b
if(u!=null)u.D(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gb9(u)
else return V.dt()},
dw:function(a){var u=this.a
if(a==null)C.a.h(u,V.dt())
else C.a.h(u,a)
this.aA()},
c5:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbv:function(a){this.a=H.m(a,"$ib",[V.ai],"$ab")}}
E.f2.prototype={}
E.ah.prototype={
scg:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().S(0,s.gds())
u=s.c
if(u!=null)u.gw().h(0,s.gds())
t=new D.O("shape",r,s.c,[F.dF])
t.b=!0
s.bb(t)}},
ag:function(a,b){var u
for(u=this.y.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.A();)u.d.ag(0,b)},
aM:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gV(s))
s.aA()
a.dz(t.f)
s=a.dy
u=(s&&C.a).gb9(s)
if(u!=null&&t.d!=null)u.ie(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.w(s,0)]);s.A();)s.d.aM(a)
a.dv()
a.dx.c5()},
gw:function(){var u=this.z
return u==null?this.z=D.S():u},
bb:function(a){var u=this.z
if(u!=null)u.D(a)},
a2:function(){return this.bb(null)},
dt:function(a){H.k(a,"$iy")
this.e=null
this.bb(a)},
i0:function(){return this.dt(null)},
dr:function(a){this.bb(H.k(a,"$iy"))},
hY:function(){return this.dr(null)},
hX:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$if",[E.ah],"$af")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bM()
o.sa8(null)
o.saF(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
i_:function(a,b){var u,t
H.m(b,"$if",[E.ah],"$af")
for(u=b.gO(b),t=this.gdq();u.A();)u.gE(u).gw().S(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sep:function(a,b){this.y=H.m(b,"$ia3",[E.ah],"$aa3")},
$icu:1}
E.hz.prototype={
e_:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.av(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cs()
t=[V.ai]
u.sbv(H.c([],t))
u.b=null
u.gw().h(0,new E.hA(s))
s.cy=u
u=new O.cs()
u.sbv(H.c([],t))
u.b=null
u.gw().h(0,new E.hB(s))
s.db=u
u=new O.cs()
u.sbv(H.c([],t))
u.b=null
u.gw().h(0,new E.hC(s))
s.dx=u
s.shb(H.c([],[O.bZ]))
u=s.dy;(u&&C.a).h(u,null)
s.sh6(new H.a1([P.h,A.cB]))},
gi9:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.t(0,u.gV(u))
s=u}return s},
dz:function(a){var u=this.dy,t=a==null?(u&&C.a).gb9(u):a;(u&&C.a).h(u,t)},
dv:function(){var u=this.dy
if(u.length>1)u.pop()},
shb:function(a){this.dy=H.m(a,"$ib",[O.bZ],"$ab")},
sh6:function(a){this.fr=H.m(a,"$iG",[P.h,A.cB],"$aG")}}
E.hA.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:7}
E.hB.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hC.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dM.prototype={
co:function(a){H.k(a,"$iy")
this.dB()},
cn:function(){return this.co(null)},
ghN:function(){var u,t=this,s=Date.now(),r=C.e.Z(P.kz(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.av(s,!1)
return u/r},
cQ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.F(r)
u=C.c.dj(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.c.dj(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kW(C.j,s.gig())}},
dB:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i5(this),{func:1,ret:-1,args:[P.a5]})
C.w.ey(u)
C.w.fU(u,W.lf(t,P.a5))}},
ic:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cQ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.av(r,!1)
s.y=P.kz(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aA()
r=s.db
C.a.sm(r.a,0)
r.aA()
r=s.dx
C.a.sm(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}s=p.z
if(s!=null)s.D(null)}catch(q){u=H.au(q)
t=H.cb(q)
P.kn("Error: "+H.j(u))
P.kn("Stack: "+H.j(t))
throw H.i(u)}}}
E.i5.prototype={
$1:function(a){var u
H.lq(a)
u=this.a
if(u.ch){u.ch=!1
u.ic()}},
$S:47}
Z.dX.prototype={$inG:1}
Z.d4.prototype={
b5:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.A('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.iL.prototype={$inH:1}
Z.d5.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b5:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b5(a)},
dI:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aM(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seF:function(a){this.b=H.m(a,"$ib",[Z.cq],"$ab")},
$inP:1}
Z.cq.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bU(this.c)+"'")+"]"}}
Z.bA.prototype={
gci:function(a){var u=this.a,t=(u&$.bn().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.bF().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
hr:function(a){var u,t=$.bn(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.lK()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bA))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.bn().a)!==0)C.a.h(u,"Pos")
if((t&$.bm().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.bF().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.f5.prototype={}
D.bM.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.l(b,u)
if(this.a==null)this.sa8(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
D:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.kF(u,!0,{func:1,ret:-1,args:[D.y]}),new D.fo(q))
u=r.b
if(u!=null){r.saF(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.H(u,new D.fp(q))}return!0},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sa8:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saF:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fo.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.fp.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.y.prototype={}
D.bP.prototype={}
D.bQ.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d6.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.di.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fL.prototype={
i5:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i1:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sfN:function(a){this.d=H.m(a,"$ikS",[P.p],"$akS")}}
X.dn.prototype={}
X.fR.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaJ()
r=new X.bf(a,V.bx(),q.x,t,s)
r.b=!0
q.z=new P.av(p,!1)
q.x=s
return r},
c4:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dP()
if(typeof u!=="number")return u.ah()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aQ(a,b))
return!0},
i6:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.ct(new V.P(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
fj:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dn(c,r.a.gaJ(),b)
s.b=!0
t.D(s)
r.y=new P.av(u,!1)
r.x=V.bx()}}
X.ar.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bf.prototype={}
X.hf.prototype={
br:function(a,b,c){var u=this,t=new P.av(Date.now(),!1),s=u.a.gaJ(),r=new X.bf(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c4:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.br(a,b,!0))
return!0},
aX:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dP()
if(typeof t!=="number")return t.ah()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.br(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.br(a,b,!1))
return!0},
i7:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.ct(new V.P(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gd8:function(){var u=this.b
return u==null?this.b=D.S():u},
gcc:function(){var u=this.c
return u==null?this.c=D.S():u},
gdm:function(){var u=this.d
return u==null?this.d=D.S():u}}
X.ct.prototype={}
X.hw.prototype={}
X.dO.prototype={}
X.i9.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.aa],"$ab")
u=new P.av(Date.now(),!1)
t=a.length>0?a[0]:V.bx()
s=q.a.gaJ()
r=new X.dO(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
i4:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.D(this.aQ(a,!0))
return!0},
i2:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.D(this.aQ(a,!0))
return!0},
i3:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.D(this.aQ(a,!1))
return!0}}
X.dT.prototype={
gaJ:function(){var u=this.a,t=C.i.gd3(u).c
t.toString
u=C.i.gd3(u).d
u.toString
return V.kQ(0,0,t,u)},
cD:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.di(u,new X.ar(t,a.altKey,a.shiftKey))},
aG:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
bJ:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.aa(s-q,r-u)},
aR:function(a){return new V.P(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.c.a9(r.pageX)
C.c.a9(r.pageY)
p=o.left
C.c.a9(r.pageX)
C.a.h(n,new V.aa(q-p,C.c.a9(r.pageY)-o.top))}return n},
am:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.d6(u,new X.ar(t,a.altKey,a.shiftKey))},
bw:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fd:function(a){this.f=!0},
f_:function(a){this.f=!1},
f7:function(a){H.k(a,"$ia8")
if(H.C(this.f)&&this.bw(a))a.preventDefault()},
fh:function(a){var u
H.k(a,"$iaW")
if(!H.C(this.f))return
u=this.cD(a)
this.b.i5(u)},
ff:function(a){var u
H.k(a,"$iaW")
if(!H.C(this.f))return
u=this.cD(a)
this.b.i1(u)},
fl:function(a){var u,t,s,r,q=this
H.k(a,"$ia8")
u=q.a
u.focus()
q.f=!0
q.aG(a)
if(H.C(q.x)){t=q.am(a)
s=q.aR(a)
if(q.d.c4(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.am(a)
r=q.ao(a)
if(q.c.c4(t,r))a.preventDefault()},
fp:function(a){var u,t,s,r=this
H.k(a,"$ia8")
r.aG(a)
u=r.am(a)
if(H.C(r.x)){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()},
fb:function(a){var u,t,s,r=this
H.k(a,"$ia8")
if(!r.bw(a)){r.aG(a)
u=r.am(a)
if(H.C(r.x)){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()}},
fn:function(a){var u,t,s,r=this
H.k(a,"$ia8")
r.aG(a)
u=r.am(a)
if(H.C(r.x)){t=r.aR(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
H.k(a,"$ia8")
if(!r.bw(a)){r.aG(a)
u=r.am(a)
if(H.C(r.x)){t=r.aR(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()}},
fs:function(a){var u,t,s=this
H.k(a,"$ib8")
s.aG(a)
u=new V.P((a&&C.v).ghD(a),C.v.ghE(a)).v(0,180)
if(H.C(s.x)){if(s.d.i6(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.ao(a)
if(s.c.i7(u,t))a.preventDefault()},
fu:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.am(s.y)
t=s.ao(s.y)
s.d.fj(u,t,r)}},
fJ:function(a){var u,t=this
H.k(a,"$iaI")
t.a.focus()
t.f=!0
t.bJ(a)
u=t.bG(a)
if(t.e.i4(u))a.preventDefault()},
fF:function(a){var u
H.k(a,"$iaI")
this.bJ(a)
u=this.bG(a)
if(this.e.i2(u))a.preventDefault()},
fH:function(a){var u
H.k(a,"$iaI")
this.bJ(a)
u=this.bG(a)
if(this.e.i3(u))a.preventDefault()},
sez:function(a){this.z=H.m(a,"$ib",[[P.cD,P.L]],"$ab")}}
D.bs.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.S():u},
ak:function(a){var u
H.k(a,"$iy")
u=this.r
if(u!=null)u.D(a)},
e7:function(){return this.ak(null)},
$ia6:1,
$icu:1}
D.a6.prototype={$icu:1}
D.dj.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.S():u},
ak:function(a){var u=this.x
if(u!=null)u.D(a)},
cL:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.D(a)},
fi:function(){return this.cL(null)},
fz:function(a){var u,t,s
H.m(a,"$if",[D.a6],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.e5(s))return!1}return!0},
eU:function(a,b){var u,t,s,r,q,p,o,n=D.a6
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gcK(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.k(b[q],"$ia6")
if(p instanceof D.bs)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bM()
o.sa8(null)
o.saF(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bP([n])
n.b=!0
this.ak(n)},
fD:function(a,b){var u,t,s,r=D.a6
H.m(b,"$if",[r],"$af")
for(u=b.gO(b),t=this.gcK();u.A();){s=u.gE(u)
C.a.S(this.e,s)
s.gw().S(0,t)}r=new D.bQ([r])
r.b=!0
this.ak(r)},
e5:function(a){var u=C.a.R(this.e,a)
return u},
sex:function(a){this.e=H.m(a,"$ib",[D.bs],"$ab")},
sfK:function(a){this.f=H.m(a,"$ib",[D.dA],"$ab")},
sh9:function(a){this.r=H.m(a,"$ib",[D.dH],"$ab")},
$af:function(){return[D.a6]},
$aa3:function(){return[D.a6]}}
D.dA.prototype={$ia6:1,$icu:1}
D.dH.prototype={$ia6:1,$icu:1}
V.a0.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gc6()),t=C.c.p(this.b,b.gbh()),s=C.c.p(this.c,b.gbL())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a0(u,t,s)},
q:function(a,b){var u=C.c.q(this.a,b.gc6()),t=C.c.q(this.b,b.gbh()),s=C.c.q(this.c,b.gbL())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a0(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.aP.prototype={
p:function(a,b){var u=this,t=C.c.p(u.a,b.gc6()),s=C.c.p(u.b,b.gbh()),r=C.c.p(u.c,b.gbL()),q=C.c.p(u.d,b.ghp(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aP(t,s,r,q)},
q:function(a,b){var u=this,t=C.c.q(u.a,b.gc6()),s=C.c.q(u.b,b.gbh()),r=C.c.q(u.c,b.gbL()),q=C.c.q(u.d,b.ghp(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aP(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.fn.prototype={}
V.ds.prototype={
a7:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ds))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c9(H.c([q.a,q.d,q.r],p),3,0),n=V.c9(H.c([q.b,q.e,q.x],p),3,0),m=V.c9(H.c([q.c,q.f,q.y],p),3,0)
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
V.ai.prototype={
a7:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dk:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.N().a)return V.dt()
u=1/b1
t=-n
s=-a0
return V.aY((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aY(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
be:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cb:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ab(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
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
I:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c9(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c9(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c9(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c9(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
N:function(){return this.I("")}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.ab.prototype={
p:function(a,b){return new V.ab(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.ab(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.dD.prototype={
ga1:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dD))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a_(u.a,3,0)+", "+V.a_(u.b,3,0)+", "+V.a_(u.c,3,0)+", "+V.a_(u.d,3,0)+"]"}}
V.P.prototype={
c_:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gbR(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gbS(b)
if(typeof t!=="number")return t.p()
return new V.P(s,C.c.p(t,u))},
q:function(a,b){var u,t=this.a,s=b.gbR(b)
if(typeof t!=="number")return t.q()
s=C.c.q(t,s)
t=this.b
u=b.gbS(b)
if(typeof t!=="number")return t.q()
return new V.P(s,C.c.q(t,u))},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.P(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.l_
return u==null?$.l_=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.P(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.Q.prototype={
c_:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a){return new V.Q(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cJ()
return new V.Q(this.a/b,this.b/b,this.c/b)},
dl:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.f6.prototype={
bm:function(a){var u=V.nF(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.S():u},
K:function(a){var u=this.y
if(u!=null)u.D(a)},
scd:function(a,b){},
sc1:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.N().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bm(u)}s=new D.O("maximumLocation",s,t.b,[P.z])
s.b=!0
t.K(s)}},
sc3:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.N().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bm(u)}s=new D.O("minimumLocation",s,t.c,[P.z])
s.b=!0
t.K(s)}},
sa0:function(a,b){var u,t=this
b=t.bm(b)
u=t.d
if(!(Math.abs(u-b)<$.N().a)){t.d=b
u=new D.O("location",u,b,[P.z])
u.b=!0
t.K(u)}},
sc2:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.N().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.z])
r.b=!0
s.K(r)}},
sP:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.N().a)){u.f=a
t=new D.O("velocity",t,a,[P.z])
t.b=!0
u.K(t)}},
sbQ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.O("dampening",u,a,[P.z])
u.b=!0
this.K(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.N().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.N().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sP(u)}}}
U.d8.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.S():u},
aN:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d8))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cp.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.S():u},
K:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.D(a)},
X:function(){return this.K(null)},
eS:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.l(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.K(n)},
fB:function(a,b){var u,t,s=U.a9
H.m(b,"$if",[s],"$af")
for(u=b.gO(b),t=this.gaB();u.A();)u.gE(u).gw().S(0,t)
s=new D.bQ([s])
s.b=!0
this.K(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a3()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.w(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.dt():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.a9]},
$aa3:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dU.prototype={
gw:function(){var u=this.cy
return u==null?this.cy=D.S():u},
K:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.D(a)},
X:function(){return this.K(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd8().h(0,u.gbx())
u.a.c.gdm().h(0,u.gbz())
u.a.c.gcc().h(0,u.gbB())
return!0},
by:function(a){var u=this
H.k(a,"$iy")
if(!J.U(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bA:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$ibf")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.q(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.q(0,a.y)
u=new V.P(t.a,t.b).t(0,2).v(0,u.ga1())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sP(u*10*s)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=new V.P(s.a,s.b).t(0,2).v(0,u.ga1())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
n.b.sP(0)
t=t.q(0,a.z)
n.Q=new V.P(t.a,t.b).t(0,2).v(0,u.ga1())}n.X()},
bC:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sP(t*10*s)
r.X()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.ch=p
u=b.y
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aY(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dV.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.S():u},
K:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.D(a)},
X:function(){return this.K(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd8().h(0,s.gbx())
s.a.c.gdm().h(0,s.gbz())
s.a.c.gcc().h(0,s.gbB())
u=s.a.d
t=u.f
u=t==null?u.f=D.S():t
u.h(0,s.geK())
u=s.a.d
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.geM())
u=s.a.e
t=u.b
u=t==null?u.b=D.S():t
u.h(0,s.ghh())
u=s.a.e
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.ghf())
u=s.a.e
t=u.c
u=t==null?u.c=D.S():t
u.h(0,s.ghd())
return!0},
ad:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.M()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.M()
t=-t}return new V.P(u,t)},
by:function(a){var u=this
a=H.v(H.k(a,"$iy"),"$ibf")
if(!J.U(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bA:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$ibf")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.q(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ad(new V.P(t.a,t.b).t(0,2).v(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ad(new V.P(s.a,s.b).t(0,2).v(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa0(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.q(0,a.z)
n.dx=n.ad(new V.P(t.a,t.b).t(0,2).v(0,u.ga1()))}n.X()},
bC:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sP(-t*10*u)
r.X()}},
eL:function(a){var u=this
if(H.v(H.k(a,"$iy"),"$idn").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eN:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$ibf")
if(!J.U(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ad(new V.P(s.a,s.b).t(0,2).v(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa0(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.q(0,a.z)
n.dx=n.ad(new V.P(t.a,t.b).t(0,2).v(0,u.ga1()))
n.X()},
hi:function(a){var u=this
H.k(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hg:function(a){var u,t,s,r,q,p,o,n=this
a=H.v(H.k(a,"$iy"),"$idO")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.q(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ad(new V.P(t.a,t.b).t(0,2).v(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sP(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sP(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ad(new V.P(s.a,s.b).t(0,2).v(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa0(0,-p*q+s)
n.b.sP(0)
n.c.sP(0)
t=t.q(0,a.z)
n.dx=n.ad(new V.P(t.a,t.b).t(0,2).v(0,u.ga1()))}n.X()},
he:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sP(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sP(-t*10*u)
r.X()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a3()
if(q<p){r.dy=p
u=b.y
r.c.ag(0,u)
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aY(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aY(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dW.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.S():u},
K:function(a){var u=this.r
if(u!=null)u.D(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.S():t
t=r.geP()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.S():s).h(0,t)
return!0},
eQ:function(a){var u,t,s,r,q=this
H.k(a,"$iy")
if(!J.U(q.b,q.a.b.c))return
H.v(a,"$ict")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.z])
u.b=!0
q.K(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aY(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.dc.prototype={
al:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.D(a)},
e9:function(){return this.al(null)},
f3:function(a,b){var u,t,s,r,q,p,o,n=E.ah
H.m(b,"$if",[n],"$af")
for(u=b.length,t=this.gac(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bM()
o.sa8(null)
o.saF(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.al(n)},
f5:function(a,b){var u,t,s=E.ah
H.m(b,"$if",[s],"$af")
for(u=b.gO(b),t=this.gac();u.A();)u.gE(u).gw().S(0,t)
s=new D.bQ([s])
s.b=!0
this.al(s)},
sdE:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().S(0,t.gac())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gac())
s=new D.O("technique",u,t.d,[O.bZ])
s.b=!0
t.al(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.S():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dz(f.d)
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
if(typeof s!=="number")return H.F(s)
o=C.c.a9(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.c.a9(p*r)
p=C.c.a9(q.c*s)
a.c=p
q=C.c.a9(q.d*r)
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
i=V.aY(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dw(i)
t=$.kL
if(t==null){t=V.kN()
q=V.k6()
p=$.l0
t=V.kH(t,q,p==null?$.l0=new V.Q(0,0,-1):p)
$.kL=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aN(0,a,u)
if(g!=null)h=g.t(0,h)}a.db.dw(h)
u=f.d
if(u!=null)u.ag(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.A();)u.d.ag(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.A();)u.d.aM(a)
f.b.toString
a.cy.c5()
a.db.c5()
f.c.toString
a.dv()},
se8:function(a,b){this.e=H.m(b,"$ia3",[E.ah],"$aa3")},
$inN:1}
A.d1.prototype={}
A.eY.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
gaa:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
u:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.af))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fX.prototype={
dZ:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.bh("")
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
A.mY(c3,u)
A.n_(c3,u)
A.mZ(c3,u)
A.n1(c3,u)
A.n2(c3,u)
A.n0(c3,u)
A.n3(c3,u)
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
m=A.mX(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cE(n,35633)
b8.f=b8.cE(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.C(H.kd(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.B(P.A("Failed to link shader: "+H.j(l)))}b8.h3()
b8.h5()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.v(b8.y.T(0,"invViewMat"),"$iat")
if(t)b8.dy=H.v(b8.y.T(0,"objMat"),"$iat")
if(r)b8.fr=H.v(b8.y.T(0,"viewObjMat"),"$iat")
b8.fy=H.v(b8.y.T(0,"projViewObjMat"),"$iat")
if(c3.ry)b8.k1=H.v(b8.y.T(0,"txt2DMat"),"$icI")
if(c3.x1)b8.k2=H.v(b8.y.T(0,"txtCubeMat"),"$iat")
if(c3.x2)b8.k3=H.v(b8.y.T(0,"colorMat"),"$iat")
b8.sel(H.c([],[A.at]))
t=c3.y2
if(t>0){b8.k4=H.k(b8.y.T(0,"bendMatCount"),"$iaA")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.B(P.A(c0+q+c1));(s&&C.a).h(s,H.v(j,"$iat"))}}if(c3.a.a)b8.r2=H.v(b8.y.T(0,"emissionClr"),"$iX")
if(c3.b.a)b8.x1=H.v(b8.y.T(0,"ambientClr"),"$iX")
if(c3.c.a)b8.y2=H.v(b8.y.T(0,"diffuseClr"),"$iX")
if(c3.d.a)b8.da=H.v(b8.y.T(0,"invDiffuseClr"),"$iX")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.dd=H.v(b8.y.T(0,"shininess"),"$iac")
if(t)b8.dc=H.v(b8.y.T(0,"specularClr"),"$iX")}if(c3.cy){b8.de=H.v(b8.y.T(0,"envSampler"),"$ic2")
if(c3.r.a)b8.df=H.v(b8.y.T(0,"reflectClr"),"$iX")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dg=H.v(b8.y.T(0,"refraction"),"$iac")
if(t)b8.dh=H.v(b8.y.T(0,"refractClr"),"$iX")}}if(c3.y.a)b8.di=H.v(b8.y.T(0,"alpha"),"$iac")
t=P.p
s=[t,A.aA]
b8.sew(new H.a1(s))
b8.sea(new H.a1([t,[P.b,A.c_]]))
b8.sfL(new H.a1(s))
b8.sfM(new H.a1([t,[P.b,A.c0]]))
b8.sh8(new H.a1(s))
b8.seb(new H.a1([t,[P.b,A.c3]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c_],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ah()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.B(P.A(c0+d+c1))
H.v(j,"$iX")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.B(P.A(c0+d+c1))
H.v(c,"$iX")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.B(P.A(c0+d+c1))
H.v(b,"$iX")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.B(P.A(c0+d+c1))
H.v(j,"$iX")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.B(P.A(c0+d+c1))
H.v(c,"$iX")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.B(P.A(c0+o+c1))
H.v(b,"$ic1")
a2=b}else a2=b9
C.a.h(e,new A.c_(a1,a0,a,j,c,a2))}b8.bU.n(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.B(P.A(c0+o+c1))
q.n(0,g,H.k(j,"$iaA"))}for(t=c3.Q,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.B(P.A(c0+o+c1))
H.v(j,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.B(P.A(c0+o+c1))
H.v(c,"$iX")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.B(P.A(c0+o+c1))
H.v(b,"$iX")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.B(P.A(c0+o+c1))
H.v(a3,"$icI")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.B(P.A(c0+o+c1))
H.v(a3,"$ic2")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.B(P.A(c0+o+c1))
H.v(a3,"$ic2")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.B(P.A(c0+o+c1))
H.v(a5,"$icH")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.B(P.A(c0+o+c1))
H.v(a3,"$iac")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.B(P.A(c0+o+c1))
H.v(a5,"$iac")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.B(P.A(c0+o+c1))
H.v(a8,"$iac")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c0(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bW.n(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.B(P.A(c0+o+c1))
q.n(0,g,H.k(j,"$iaA"))}for(t=c3.ch,s=t.length,r=[A.c3],i=0;i<t.length;t.length===s||(0,H.x)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.B(P.A(c0+o+c1))
H.v(j,"$iX")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.B(P.A(c0+o+c1))
H.v(c,"$iX")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.B(P.A(c0+o+c1))
H.v(b,"$iX")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.B(P.A(c0+o+c1))
H.v(a3,"$iX")
if(typeof g!=="number")return g.ah()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.B(P.A(c0+o+c1))
H.v(a5,"$iX")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.B(P.A(c0+o+c1))
H.v(a8,"$iX")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.B(P.A(c0+o+c1))
H.v(b2,"$iac")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.B(P.A(c0+o+c1))
H.v(b3,"$iac")
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
if(a5==null)H.B(P.A(c0+d+c1))
H.v(a5,"$icH")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.B(P.A(c0+d+c1))
H.v(a5,"$iac")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.B(P.A(c0+d+c1))
H.v(a8,"$iac")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.B(P.A(c0+d+c1))
H.v(a5,"$iac")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.B(P.A(c0+d+c1))
H.v(a8,"$iac")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.B(P.A(c0+d+c1))
H.v(b2,"$iac")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.B(P.A(c0+d+c1))
H.v(a5,"$ic1")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.B(P.A(c0+o+c1))
H.v(a5,"$ic1")
a6=a5}else a6=b9
C.a.h(e,new A.c3(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bY.n(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.B(P.A(c0+o+c1))
q.n(0,g,H.k(j,"$iaA"))}}},
h_:function(a,b){},
sel:function(a){this.r1=H.m(a,"$ib",[A.at],"$ab")},
sew:function(a){this.bT=H.m(a,"$iG",[P.p,A.aA],"$aG")},
sea:function(a){this.bU=H.m(a,"$iG",[P.p,[P.b,A.c_]],"$aG")},
sfL:function(a){this.bV=H.m(a,"$iG",[P.p,A.aA],"$aG")},
sfM:function(a){this.bW=H.m(a,"$iG",[P.p,[P.b,A.c0]],"$aG")},
sh8:function(a){this.bX=H.m(a,"$iG",[P.p,A.aA],"$aG")},
seb:function(a){this.bY=H.m(a,"$iG",[P.p,[P.b,A.c3]],"$aG")}}
A.aw.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.ay.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.az.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h_.prototype={
i:function(a){return this.aV}}
A.c_.prototype={}
A.c0.prototype={}
A.c3.prototype={}
A.cB.prototype={
e1:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cE:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.kd(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.A("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
h3:function(){var u,t,s,r=this,q=H.c([],[A.d1]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d1(p,t.name,s))}r.x=new A.eY(q)},
h5:function(){var u,t,s,r=this,q=H.c([],[A.dP]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hC(t.type,t.size,t.name,s))}r.y=new A.io(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.aA(u,b,c)
else return A.k5(u,this.r,b,a,c)},
es:function(a,b,c){var u=this.a
if(a===1)return new A.c1(u,b,c)
else return A.k5(u,this.r,b,a,c)},
eu:function(a,b,c){var u=this.a
if(a===1)return new A.c2(u,b,c)
else return A.k5(u,this.r,b,a,c)},
b4:function(a,b){return new P.e5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hC:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.ac(u.a,c,d)
case 35664:return new A.ij(u.a,c,d)
case 35665:return new A.X(u.a,c,d)
case 35666:return new A.cH(u.a,c,d)
case 35667:return new A.ik(u.a,c,d)
case 35668:return new A.il(u.a,c,d)
case 35669:return new A.im(u.a,c,d)
case 35674:return new A.ip(u.a,c,d)
case 35675:return new A.cI(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.es(b,c,d)
case 35680:return u.eu(b,c,d)
case 35670:throw H.i(u.b4("BOOL",c))
case 35671:throw H.i(u.b4("BOOL_VEC2",c))
case 35672:throw H.i(u.b4("BOOL_VEC3",c))
case 35673:throw H.i(u.b4("BOOL_VEC4",c))
default:throw H.i(P.A("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dP.prototype={}
A.io.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.A("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aA.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.il.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.im.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shk:function(a){H.m(a,"$ib",[P.p],"$ab")}}
A.ac.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.X.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cH.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cI.prototype={
ab:function(a){var u=new Float32Array(H.cW(H.m(a,"$ib",[P.z],"$ab")))
C.b.dK(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.at.prototype={
ab:function(a){var u=new Float32Array(H.cW(H.m(a,"$ib",[P.z],"$ab")))
C.b.dL(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.c1.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.c2.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jN.prototype={
$1:function(a){return new V.ab(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jA.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kr(n.$1(o),m)
m=J.lO(J.kr(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.Q(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.B(m)))
n=$.l1
if(n==null){n=new V.Q(1,0,0)
$.l1=n
t=n}else t=n
n=u.ap(!J.U(u,t)?V.l3():t)
s=n.v(0,Math.sqrt(n.B(n)))
n=s.ap(u)
t=n.v(0,Math.sqrt(n.B(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
m=J.lN(l,new V.ab(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.U(a.f,m)){a.f=H.k(m,"$iab")
n=a.a
if(n!=null)n.a2()}},
$S:37}
F.a4.prototype={
b7:function(){var u=this
if(!u.gd7()){C.a.S(u.a.a.d.b,u)
u.a.a.a2()}u.fQ()
u.fR()
u.fS()},
h0:function(a){this.a=a
C.a.h(a.d.b,this)},
h1:function(a){this.b=a
C.a.h(a.d.c,this)},
h2:function(a){this.c=a
C.a.h(a.d.d,this)},
fQ:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
fR:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
fS:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
gd7:function(){return this.a==null||this.b==null||this.c==null},
ek:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cJ()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dl())return
return s.v(0,Math.sqrt(s.B(s)))},
eo:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.B(r)))
r=t.q(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.ap(r.v(0,Math.sqrt(r.B(r))))
return r.v(0,Math.sqrt(r.B(r)))},
bO:function(){var u,t=this
if(t.d!=null)return!0
u=t.ek()
if(u==null){u=t.eo()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cJ()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dl())return
return s.v(0,Math.sqrt(s.B(s)))},
en:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.q(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.M(0)}else{p=(l-u.b)/r
l=d.q(0,g).t(0,p).p(0,g).q(0,j)
l=new V.Q(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.M(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.B(l)))
l=o.ap(q)
l=l.v(0,Math.sqrt(l.B(l))).ap(o)
q=l.v(0,Math.sqrt(l.B(l)))}return q},
bM:function(){var u,t=this
if(t.e!=null)return!0
u=t.ej()
if(u==null){u=t.en()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
gd4:function(a){var u=this
if(J.U(u.a,u.b))return!0
if(J.U(u.b,u.c))return!0
if(J.U(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
I:function(a){var u,t,s=this
if(s.gd7())return a+"disposed"
u=a+C.d.au(J.aM(s.a.e),0)+", "+C.d.au(J.aM(s.b.e),0)+", "+C.d.au(J.aM(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.I("")}}
F.fr.prototype={}
F.hP.prototype={
c0:function(a,b,c){var u,t=b.a
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.L()
t=t.e
u=c.c
u.a.a.L()
if(t==u.e){t=b.b
t.a.a.L()
t=t.e
u=c.a
u.a.a.L()
if(t==u.e){t=b.c
t.a.a.L()
t=t.e
u=c.b
u.a.a.L()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bw.prototype={}
F.fN.prototype={}
F.ih.prototype={}
F.bS.prototype={}
F.dF.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.S():u},
aI:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aI()||!1
if(!t.a.aI())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
hV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.w(o,0)])
for(o=[F.aB];u.length!==0;){t=C.a.ghL(u)
C.a.dA(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.c0(0,t,q)){C.a.h(s,q)
C.a.dA(u,r)}}if(s.length>1)b.hU(s)}}p.a.L()
p.c.c7()
p.d.c7()
p.b.ib()
p.c.c8(new F.ih())
p.d.c8(new F.hP())
o=p.e
if(o!=null)o.aw(0)},
hx:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bn()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bF().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.cZ().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gci(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d4])
for(n=0,m=0;m<s;++m){l=a3.hr(m)
k=l.gci(l)
C.a.n(o,m,new Z.d4(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hS(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cW(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d5(new Z.dX(a0,f),o,a3)
e.seF(H.c([],[Z.cq]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.L()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.L()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.L()
C.a.h(d,c.e)}b=Z.mw(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.cq(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.I("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.I("   "))}return C.a.l(t,"\n")},
a2:function(){var u=this.e
if(u!=null)u.D(null)},
$inO:1}
F.hI.prototype={
hn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aB],"$ab")
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
C.a.h(u,F.fq(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fq(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fq(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fq(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
c8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.c0(0,p,n)){p.b7()
break}}}}},
c7:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gd4(s)
if(t)s.b7()}},
aI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bO())s=!1
return s},
bN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bM())s=!1
return s},
i:function(a){return this.N()},
I:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(a))
return C.a.l(r,"\n")},
N:function(){return this.I("")},
seA:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hJ.prototype={
gm:function(a){return 0},
c8:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
c7:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
s=t[u]
t=s.gd4(s)
if(t)s.b7()}},
i:function(a){return this.N()},
I:function(a){var u,t,s=H.c([],[P.h])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.d(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.l(s,"\n")},
N:function(){return this.I("")},
seG:function(a){this.b=H.m(a,"$ib",[F.bw],"$ab")}}
F.hK.prototype={
gm:function(a){return 0},
ib:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].giN()
t=t.giK(t)
if(t.gm(t).ai(0,1)){t=this.b
return H.d(t,u)
t[u].b7()}}},
i:function(a){return this.N()},
I:function(a){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(a))}return C.a.l(s,"\n")},
N:function(){return this.I("")},
sbF:function(a){this.b=H.m(a,"$ib",[F.bS],"$ab")}}
F.aB.prototype={
d6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l4(u.cx,r,o,t,s,q,p,a,n)},
hS:function(a){var u,t,s=this
if(a.u(0,$.bn())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bm())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bl())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bF())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.u(0,$.bG())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.cZ())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.d_())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.ce()))return H.c([s.ch],[P.z])
else if(a.u(0,$.bk())){u=H.c([-1,-1,-1,-1],[P.z])
return u}else return H.c([],[P.z])},
bO:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.H(0,new F.iJ(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
bM:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.H(0,new F.iI(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
I:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.d.au(J.aM(s.e),0))
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
C.a.h(q,V.a_(s.ch,3,0))
C.a.h(q,r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
N:function(){return this.I("")}}
F.iJ.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iI.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iz.prototype={
L:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.A("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
cY:function(a,b){var u=null,t=F.l4(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
aI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bO()
return!0},
bN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bM()
return!0},
hy:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.N()},
I:function(a){var u,t,s,r
this.L()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
N:function(){return this.I("")},
shl:function(a){this.c=H.m(a,"$ib",[F.aB],"$ab")}}
F.iA.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
H:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.H(u.b,b)
C.a.H(u.c,new F.iB(u,b))
C.a.H(u.d,new F.iC(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].I(""))
return C.a.l(r,"\n")},
seB:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
seC:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
seD:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iB.prototype={
$1:function(a){H.k(a,"$ia4")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:8}
F.iC.prototype={
$1:function(a){var u
H.k(a,"$ia4")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:8}
F.iD.prototype={
gm:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.d(u,t)
return u[t]}else{u=this.b
return H.d(u,b)
return u[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(""))}return C.a.l(s,"\n")},
seH:function(a){this.b=H.m(a,"$ib",[F.bw],"$ab")},
seI:function(a){this.c=H.m(a,"$ib",[F.bw],"$ab")}}
F.iF.prototype={}
F.iE.prototype={
c0:function(a,b,c){return J.U(b.f,c.f)}}
F.iG.prototype={}
F.ho.prototype={
hU:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.aB],"$ab")
u=V.cJ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.Q(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.B(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.v(0,Math.sqrt(o*o+n*n+m*m))}if(!J.U(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}return}}
F.iH.prototype={
gm:function(a){return 0},
i:function(a){return this.N()},
N:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
C.a.h(s,u[t].I(""))}return C.a.l(s,"\n")},
sbF:function(a){this.b=H.m(a,"$ib",[F.bS],"$ab")}}
O.dq.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.S():u},
a4:function(a){var u
H.k(a,"$iy")
u=this.fr
if(u!=null)u.D(a)},
f1:function(){return this.a4(null)},
cP:function(a){H.k(a,"$iy")
this.a=null
this.a4(a)},
fW:function(){return this.cP(null)},
eW:function(a,b){var u=V.ai
H.m(b,"$if",[u],"$af")
u=new D.bP([u])
u.b=!0
this.a4(u)},
eY:function(a,b){var u=V.ai
H.m(b,"$if",[u],"$af")
u=new D.bQ([u])
u.b=!0
this.a4(u)},
cB:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.a1([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.aw])
h.H(0,new O.h3(j,q))
C.a.bi(q,new O.h4())
p=new H.a1([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gaU()
n=p.j(0,o.gaU())
p.n(0,r,n==null?1:n)}m=H.c([],[A.ay])
p.H(0,new O.h5(j,m))
C.a.bi(m,new O.h6())
l=new H.a1([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gaU()
r=l.j(0,o.gaU())
l.n(0,t,r==null?1:r)}k=H.c([],[A.az])
l.H(0,new O.h7(j,k))
C.a.bi(k,new O.h8())
i=C.e.Z(j.e.a.length+3,4)
j.dy.e
return A.mc(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ei:function(a,b){H.m(a,"$ib",[T.dL],"$ab")},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.A();){t=u.d
t.toString
s=$.iy
if(s==null)s=$.iy=new V.Q(0,0,1)
t.a=s
r=$.ix
t.d=r==null?$.ix=new V.Q(0,1,0):r
r=$.iw
t.e=r==null?$.iw=new V.Q(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.be(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.be(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.be(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
ie:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cB()
u=b6.fr.j(0,b5.aV)
if(u==null){u=A.mb(b5,b6.a)
t=u.b
if(t.length===0)H.B(P.A("May not cache a shader with no name."))
if(b6.fr.d5(0,t))H.B(P.A('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.d9
b5=b7.e
if(!(b5 instanceof Z.d5))b5=b7.e=null
if(b5==null||!b5.d.u(0,r)){b5=s.k3
if(b5)b7.d.aI()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bN()
p.a.bN()
p=p.e
if(p!=null)p.aw(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hy()
o=o.e
if(o!=null)o.aw(0)}m=b7.d.hx(new Z.iL(b6.a),r)
m.aL($.bn()).e=b4.a.Q.c
if(b5)m.aL($.bm()).e=b4.a.cx.c
if(q)m.aL($.bl()).e=b4.a.ch.c
if(s.r1)m.aL($.bF()).e=b4.a.cy.c
if(p)m.aL($.bG()).e=b4.a.db.c
if(s.rx)m.aL($.bk()).e=b4.a.dx.c
b7.e=m}b5=T.dL
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hI()
if(s.dy){q=b4.a
o=b6.dx
o=o.gV(o)
q=q.dy
q.toString
q.ab(o.a7(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gV(o)
n=b6.dx
n=b6.cx=o.t(0,n.gV(n))
o=n}q=q.fr
q.toString
q.ab(o.a7(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gi9()
n=b6.dx
n=b6.ch=o.t(0,n.gV(n))
o=n}q=q.fy
q.toString
q.ab(o.a7(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ab(C.k.a7(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ab(C.k.a7(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ab(C.k.a7(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.bf(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.k(n,"$iai")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.cW(H.m(n.a7(0,!0),"$ib",q,"$ab")))
C.b.dL(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.b.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.b.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.b.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.da
C.b.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.dd
C.b.W(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dc
C.b.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.gV(o)
o=P.p
g=new H.a1([o,o])
for(o=b4.dx.e,n=o.length,f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
d=g.j(0,0)
if(d==null)d=0
g.n(0,0,d+1)
c=J.eU(b4.a.bU.j(0,0),d)
b=h.be(e.a)
a=b.a
a0=b.b
a1=b.c
a1=b.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.b.U(a0.a,a0.d,a,b,a1)
a1=e.c
b=c.f
C.b.U(b.a,b.d,a1.a,a1.b,a1.c)}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.x)(q),++f){n=q[f].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.bT.j(0,n)
C.b.bf(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.gV(o)
o=P.p
a2=new H.a1([o,o])
for(o=b4.dx.f,n=o.length,b=[b5],a=[P.z],f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
a3=e.gaU()
d=a2.j(0,a3)
if(d==null)d=0
a2.n(0,a3,d+1)
c=J.eU(b4.a.bW.j(0,a3),d)
a4=h.t(0,e.gV(e))
a0=e.gV(e)
a1=$.cy
a0=a0.cb(a1==null?$.cy=new V.ab(0,0,0):a1)
a1=c.b
C.b.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cy
a0=a4.cb(a0==null?$.cy=new V.ab(0,0,0):a0)
a1=c.c
C.b.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=e.gaK(e)
a1=c.e
C.b.U(a1.a,a1.d,a0.a,a0.b,a0.c)
e.gax()
a0=a4.dk(0)
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
i=new Float32Array(H.cW(H.m(new V.ds(a1,a5,a6,a7,a8,a9,b0,b1,a0).a7(0,!0),"$ib",a,"$ab")))
C.b.dK(b2.a,b2.d,!1,i)
e.gax()
a0=e.gax()
H.m(l,"$ib",b,"$ab")
if(!C.a.R(l,a0)){a0.sar(0,l.length)
C.a.h(l,a0)}a0=e.gax()
a1=a0.gas(a0)
if(a1){a1=c.f
a1.toString
a5=a0.gas(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gar(a0)
a1.a.uniform1i(a1.d,a0)}}e.gaO()
a0=e.gdR()
a1=c.x
a1.toString
a5=a0.gbR(a0)
a6=a0.gbS(a0)
a7=a0.ghH()
a0=a0.ghG()
C.b.dJ(a1.a,a1.d,a5,a6,a7,a0)
a0=e.gaO()
if(!C.a.R(l,a0)){a0.sar(0,l.length)
C.a.h(l,a0)}a0=e.gaO()
a1=a0.gas(a0)
if(a1){a1=c.r
a1.toString
a5=a0.gas(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.gar(a0)
a1.a.uniform1i(a1.d,a0)}}if(e.ghJ()){a0=e.ghs()
a1=c.y
C.b.W(a1.a,a1.d,a0)
a0=e.ght()
a1=c.z
C.b.W(a1.a,a1.d,a0)
a0=e.ghu()
a1=c.Q
C.b.W(a1.a,a1.d,a0)}}for(o=q.length,f=0;f<q.length;q.length===o||(0,H.x)(q),++f){n=q[f].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bV.j(0,n)
C.b.bf(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.gV(o)
o=P.p
b3=new H.a1([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],f=0;f<o.length;o.length===n||(0,H.x)(o),++f){e=o[f]
a3=e.gaU()
d=b3.j(0,a3)
if(d==null)d=0
b3.n(0,a3,d+1)
c=J.eU(b4.a.bY.j(0,a3),d)
b=e.gi8(e)
a=c.b
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.gis(e).iJ()
a=c.c
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=h.cb(e.gi8(e))
a=c.d
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.gaK(e)
a=c.e
C.b.U(a.a,a.d,b.a,b.b,b.c)
e.gax()
b=e.gcc()
a=c.f
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.gc9(e)
a=c.r
C.b.U(a.a,a.d,b.a,b.b,b.c)
b=e.giL()
a=c.x
C.b.W(a.a,a.d,b)
b=e.giM()
a=c.y
C.b.W(a.a,a.d,b)
e.gax()
b=e.gax()
H.m(l,"$ib",b5,"$ab")
if(!C.a.R(l,b)){b.sar(0,l.length)
C.a.h(l,b)}b=e.gax()
a=b.gas(b)
if(a){a=c.dx
a.toString
a0=b.gas(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gar(b)
a.a.uniform1i(a.d,b)}}e.gaO()
b=e.gdR()
a=c.z
a.toString
a0=b.gbR(b)
a1=b.gbS(b)
a5=b.ghH()
b=b.ghG()
C.b.dJ(a.a,a.d,a0,a1,a5,b)
b=e.gaO()
if(!C.a.R(l,b)){b.sar(0,l.length)
C.a.h(l,b)}b=e.gaO()
a=b.gas(b)
if(a){a=c.dy
a.toString
a0=b.gas(b)
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.gar(b)
a.a.uniform1i(a.d,b)}}if(e.git()){b=e.gir()
a=c.Q
C.b.W(a.a,a.d,b)
b=e.giq()
a=c.ch
C.b.W(a.a,a.d,b)}if(e.ghJ()){b=e.ghs()
a=c.cx
C.b.W(a.a,a.d,b)
b=e.ght()
a=c.cy
C.b.W(a.a,a.d,b)
b=e.ghu()
a=c.db
C.b.W(a.a,a.d,b)}}for(b5=q.length,f=0;f<q.length;q.length===b5||(0,H.x)(q),++f){o=q[f].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bX.j(0,o)
C.b.bf(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gV(q).dk(0)}b5=b5.id
b5.toString
b5.ab(q.a7(0,!0))}if(s.cy){b4.ei(l,b4.ch)
b5=b4.a
q=b4.ch
b5.h_(b5.de,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.df
C.b.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dg
C.b.W(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dh
C.b.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.di
C.b.W(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b5(b6)
b5=b7.e
b5.b5(b6)
b5.aM(b6)
b5.dI(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j)l[j].dI(b6)
b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hF()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cB().aV},
sem:function(a){this.e=H.m(a,"$ia3",[V.ai],"$aa3")}}
O.h3.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aw(a,C.e.Z(b+3,4)*4))},
$S:10}
O.h4.prototype={
$2:function(a,b){H.k(a,"$iaw")
H.k(b,"$iaw")
return J.jP(a.a,b.a)},
$S:40}
O.h5.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.ay(a,C.e.Z(b+3,4)*4))},
$S:10}
O.h6.prototype={
$2:function(a,b){H.k(a,"$iay")
H.k(b,"$iay")
return J.jP(a.a,b.a)},
$S:41}
O.h7.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.az(a,C.e.Z(b+3,4)*4))},
$S:10}
O.h8.prototype={
$2:function(a,b){H.k(a,"$iaz")
H.k(b,"$iaz")
return J.jP(a.a,b.a)},
$S:42}
O.fY.prototype={
an:function(){var u,t=this
t.ck()
u=t.f
if(!(Math.abs(u-1)<$.N().a)){t.f=1
u=new D.O(t.b,u,1,[P.z])
u.b=!0
t.a.a4(u)}}}
O.dr.prototype={
an:function(){},
cS:function(a){var u,t,s=this
if(!s.c.u(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.a4(null)}}}
O.fZ.prototype={}
O.aX.prototype={
cR:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.a0])
t.b=!0
s.a.a4(t)}},
an:function(){this.ck()
this.cR(new V.a0(1,1,1))},
saK:function(a,b){this.cS(new A.af(!0,!1,!1))
this.cR(b)}}
O.h0.prototype={}
O.h1.prototype={
an:function(){var u,t=this
t.cl()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.O(t.b+".refraction",u,1,[P.z])
u.b=!0
t.a.a4(u)}}}
O.h2.prototype={
cT:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.a4(t)}},
an:function(){this.cl()
this.cT(100)}}
O.bZ.prototype={}
T.dL.prototype={}
V.ba.prototype={
at:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.dp.prototype={
at:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].at(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sY:function(a){this.a=H.m(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.aj.prototype={
at:function(a,b){return!this.dW(0,b)},
i:function(a){return"!["+this.cj(0)+"]"}}
V.hy.prototype={
at:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k0(this.a),t=H.k0(this.b)
return u+".."+t},
$iaq:1}
V.hH.prototype={
e0:function(a){var u,t
if(a.a.length<=0)throw H.i(P.A("May not create a SetMatcher with zero characters."))
u=new H.a1([P.p,P.M])
for(t=new H.cr(a,a.gm(a),[H.ao(a,"u",0)]);t.A();)u.n(0,t.d,!0)
this.sfZ(u)},
at:function(a,b){return this.a.d5(0,b)},
i:function(a){var u=this.a
return P.k3(new H.dk(u,[H.w(u,0)]))},
sfZ:function(a){this.a=H.m(a,"$iG",[P.p,P.M],"$aG")},
$iaq:1}
V.cC.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cG(this.a.k(0,b))
r.sY(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
hK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.at(0,a))return r}return},
i:function(a){return this.b},
shj:function(a){this.c=H.m(a,"$ib",[V.cG],"$ab")}}
V.dN.prototype={
i:function(a){var u=H.ko(this.b,"\n","\\n"),t=H.ko(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cF.prototype={
av:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfT:function(a){var u=P.h
this.c=H.m(a,"$iG",[u,u],"$aG")}}
V.i7.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cC(this,b)
u.shj(H.c([],[V.cG]))
u.d=null
this.a.n(0,b,u)}return u},
J:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cF(a)
u=P.h
t.sfT(new H.a1([u,u]))
this.b.n(0,a,t)}return t},
dH:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dN]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.d.aD(a,s)
q=l.hK(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k3(j)
throw H.i(P.A("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k3(j)
o=l.d
n=o.c.j(0,p)
t=new V.dN(n==null?o.b:n,p,s)}++s}}},
sha:function(a){this.a=H.m(a,"$iG",[P.h,V.cC],"$aG")},
shc:function(a){this.b=H.m(a,"$iG",[P.h,V.cF],"$aG")}}
V.cG.prototype={
i:function(a){return this.b.b+": "+this.cj(0)}}
X.d7.prototype={$icu:1}
X.fz.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.S():u}}
X.dz.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.S():u},
aC:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.D(a)},
ef:function(){return this.aC(null)},
sdn:function(a){var u,t,s=this
if(!J.U(s.b,a)){u=s.b
if(u!=null)u.gw().S(0,s.gcp())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcp())
u=new D.O("mover",t,s.b,[U.a9])
u.b=!0
s.aC(u)}},
$icu:1,
$id7:1}
X.dK.prototype={}
V.bq.prototype={
b0:function(a){this.b=new P.fD(C.H)
this.c=null
this.sbu(H.c([],[[P.b,W.ax]]))},
G:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ax]))
u=a.split("\n")
for(l=u.length,t=[W.ax],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.er(q,0,q.length)
n=o==null?q:o
C.F.dQ(p,H.ko(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gb9(m.d),p)}},
du:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbu(H.c([],[[P.b,W.ax]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b6():t).dH(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)q.bc(t[r])},
sbu:function(a){this.d=H.m(a,"$ib",[[P.b,W.ax]],"$ab")}}
V.jL.prototype={
$1:function(a){var u
H.k(a,"$ib5")
u=C.c.dG(this.a.ghN(),2)
if(u!=="0.00")P.kn(u+" fps")},
$S:43}
V.fd.prototype={
bc:function(a){var u=this
switch(a.a){case"Class":u.G(a.b,"#551")
break
case"Comment":u.G(a.b,"#777")
break
case"Id":u.G(a.b,"#111")
break
case"Num":u.G(a.b,"#191")
break
case"Reserved":u.G(a.b,"#119")
break
case"String":u.G(a.b,"#171")
break
case"Symbol":u.G(a.b,"#616")
break
case"Type":u.G(a.b,"#B11")
break
case"Whitespace":u.G(a.b,"#111")
break}},
b6:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i8()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.W("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.W("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.t(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.W("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.W("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.t(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.t(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.t(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.ba())
t=a1.k(0,r).l(0,h)
u=V.t(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.t(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.t(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.t(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.ba())
t=a1.k(0,r).l(0,e)
u=V.t(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.aj()
s=[V.aq]
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.t(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.t(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.aj()
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.t(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.t(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.J("Num")
t=a1.k(0,n)
t.d=t.a.J("Num")
t=a1.k(0,m)
t.d=t.a.J("Symbol")
t=a1.k(0,j)
t.d=t.a.J("String")
t=a1.k(0,g)
t.d=t.a.J("String")
t=a1.k(0,c)
t.d=t.a.J(d)
t=a1.k(0,a0)
t.d=t.a.J(a0)
t=a1.k(0,q)
t=t.d=t.a.J(q)
u=[P.h]
t.av(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.av(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.av(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fA.prototype={
bc:function(a){var u=this
switch(a.a){case"Builtin":u.G(a.b,"#411")
break
case"Comment":u.G(a.b,"#777")
break
case"Id":u.G(a.b,"#111")
break
case"Num":u.G(a.b,"#191")
break
case"Preprocess":u.G(a.b,"#737")
break
case"Reserved":u.G(a.b,"#119")
break
case"Symbol":u.G(a.b,"#611")
break
case"Type":u.G(a.b,"#171")
break
case"Whitespace":u.G(a.b,"#111")
break}},
b6:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i8()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.W("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.W("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.t(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.W("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.W("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.t(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.t(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.t(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.ba())
t=e.k(0,j).l(0,i)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.aj()
s=[V.aq]
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.t(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.aj()
u.sY(H.c([],s))
C.a.h(t.a,u)
t=V.t(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.t(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.t(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.J("Num")
u=e.k(0,n)
u.d=u.a.J("Num")
u=e.k(0,m)
u.d=u.a.J("Symbol")
u=e.k(0,i)
u.d=u.a.J(j)
u=e.k(0,g)
u.d=u.a.J(h)
u=e.k(0,f)
u.d=u.a.J(f)
u=e.k(0,q)
u=u.d=u.a.J(q)
t=[P.h]
u.av(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.av(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.av(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fB.prototype={
bc:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.G(a.b,"#911")
u.G("=",t)
break
case"Id":u.G(a.b,t)
break
case"Other":u.G(a.b,t)
break
case"Reserved":u.G(a.b,"#119")
break
case"String":u.G(a.b,"#171")
break
case"Symbol":u.G(a.b,"#616")
break}},
b6:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i8()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.W("a","z")
C.a.h(u.a,t)
t=V.W("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.W("0","9")
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.t(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.t(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.t(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.t(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.ba())
C.a.h(l.k(0,s).l(0,m).a,new V.ba())
u=l.k(0,m).l(0,m)
t=new V.aj()
t.sY(H.c([],[V.aq]))
C.a.h(u.a,t)
u=V.t(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.W("a","z")
C.a.h(t.a,u)
u=V.W("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.J("Symbol")
u=l.k(0,n)
u.d=u.a.J("String")
u=l.k(0,r)
t=u.a.J(r)
u.d=t
t.av(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.J(q)
t=l.k(0,m)
t.d=t.a.J(m)
return l}}
V.hu.prototype={
du:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbu(H.c([],[[P.b,W.ax]]))
this.G(C.a.l(b,"\n"),"#111")},
bc:function(a){},
b6:function(){return}}
V.hL.prototype={
e2:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.ad(q,"scroll",H.l(new V.hN(o),{func:1,ret:-1,args:[r]}),!1,r)},
cZ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.h4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dH(C.a.hR(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.nA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.l9(C.r,n,C.h,!1)
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
dM:function(a){var u,t,s,r=new V.fd("dart")
r.b0("dart")
u=new V.fA("glsl")
u.b0("glsl")
t=new V.fB("html")
t.b0("html")
s=C.a.hM(H.c([r,u,t],[V.bq]),new V.hO(a))
if(s!=null)return s
r=new V.hu("plain")
r.b0("plain")
return r},
cX:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.ki(r).bj(r,"+")){C.a.n(b0,s,C.d.aj(r,1))
C.a.h(u,1)
t=!0}else if(C.d.bj(r,"-")){C.a.n(b0,s,C.d.aj(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dM(a8)
q.du(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.l9(C.r,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kt()
i.href="#"+m
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.O.hq(a,r[a0])
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
for(a3=C.a.gO(r);a3.A();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
h4:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i8()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.aj()
r=[V.aq]
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.aj()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.aj()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.t(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.t(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.aj()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.aj()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.ba())
s=u.k(0,i).l(0,i)
t=new V.aj()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.J(p)
s=u.k(0,n)
s.d=s.a.J(o)
s=u.k(0,"CodeEnd")
s.d=s.a.J(m)
s=u.k(0,j)
s.d=s.a.J("Link")
s=u.k(0,i)
s.d=s.a.J(i)
this.b=u}}
V.hN.prototype={
$1:function(a){P.kW(C.j,new V.hM(this.a))},
$S:44}
V.hM.prototype={
$0:function(){var u=C.c.a9(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
V.hO.prototype={
$1:function(a){return H.k(a,"$ibq").a===this.a},
$S:45}
Q.jI.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.cX("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cX("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.dT=u.i
u=J.dh.prototype
u.dV=u.i
u=P.f.prototype
u.dU=u.bg
u=W.R.prototype
u.bk=u.a5
u=W.er.prototype
u.dX=u.af
u=O.dr.prototype
u.ck=u.an
u=O.aX.prototype
u.cl=u.an
u=V.dp.prototype
u.dW=u.at
u.cj=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"na","my",9)
u(P,"nb","mz",9)
u(P,"nc","mA",9)
t(P,"li","n8",3)
s(W,"nl",4,null,["$4"],["mC"],22,0)
s(W,"nm",4,null,["$4"],["mD"],22,0)
var m
r(m=E.ah.prototype,"gds",0,0,null,["$1","$0"],["dt","i0"],0,0)
r(m,"gdq",0,0,null,["$1","$0"],["dr","hY"],0,0)
q(m,"ghW","hX",6)
q(m,"ghZ","i_",6)
r(m=E.dM.prototype,"gcm",0,0,null,["$1","$0"],["co","cn"],0,0)
p(m,"gig","dB",3)
o(m=X.dT.prototype,"gfc","fd",11)
o(m,"geZ","f_",11)
o(m,"gf6","f7",4)
o(m,"gfg","fh",20)
o(m,"gfe","ff",20)
o(m,"gfk","fl",4)
o(m,"gfo","fp",4)
o(m,"gfa","fb",4)
o(m,"gfm","fn",4)
o(m,"gf8","f9",4)
o(m,"gfq","fs",34)
o(m,"gft","fu",11)
o(m,"gfI","fJ",12)
o(m,"gfE","fF",12)
o(m,"gfG","fH",12)
r(D.bs.prototype,"ge6",0,0,null,["$1","$0"],["ak","e7"],0,0)
r(m=D.dj.prototype,"gcK",0,0,null,["$1","$0"],["cL","fi"],0,0)
o(m,"gfw","fz",35)
q(m,"geT","eU",13)
q(m,"gfC","fD",13)
n(V.P.prototype,"gm","c_",23)
n(V.Q.prototype,"gm","c_",23)
r(m=U.cp.prototype,"gaB",0,0,null,["$1","$0"],["K","X"],0,0)
q(m,"geR","eS",24)
q(m,"gfA","fB",24)
r(m=U.dU.prototype,"gaB",0,0,null,["$1","$0"],["K","X"],0,0)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
r(m=U.dV.prototype,"gaB",0,0,null,["$1","$0"],["K","X"],0,0)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
o(m,"geK","eL",1)
o(m,"geM","eN",1)
o(m,"ghh","hi",1)
o(m,"ghf","hg",1)
o(m,"ghd","he",1)
o(U.dW.prototype,"geP","eQ",1)
r(m=M.dc.prototype,"gac",0,0,null,["$1","$0"],["al","e9"],0,0)
q(m,"gf2","f3",6)
q(m,"gf4","f5",6)
r(m=O.dq.prototype,"gf0",0,0,null,["$1","$0"],["a4","f1"],0,0)
r(m,"gfV",0,0,null,["$1","$0"],["cP","fW"],0,0)
q(m,"geV","eW",26)
q(m,"geX","eY",26)
r(X.dz.prototype,"gcp",0,0,null,["$1","$0"],["aC","ef"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jZ,J.a,J.ap,P.ee,P.f,H.cr,P.aV,H.bN,H.dS,H.id,P.bt,H.ci,H.ew,P.a7,H.fO,H.fP,H.fJ,P.eC,P.b9,P.aD,P.dY,P.hW,P.cD,P.hX,P.b5,P.ae,P.jt,P.jh,P.c4,P.ed,P.u,P.cj,P.fE,P.jr,P.M,P.av,P.a5,P.aS,P.hs,P.dI,P.e5,P.fy,P.bu,P.b,P.G,P.K,P.al,P.h,P.bh,W.f9,W.bB,W.D,W.dx,W.er,W.jm,W.de,W.as,W.jg,W.eH,P.jb,O.a3,O.cs,E.f2,E.ah,E.hz,E.dM,Z.dX,Z.iL,Z.d5,Z.cq,Z.bA,D.f5,D.bM,D.y,X.d6,X.di,X.fL,X.fR,X.ar,X.hf,X.i9,X.dT,D.bs,D.a6,D.dA,D.dH,V.a0,V.aP,V.fn,V.ds,V.ai,V.aa,V.ab,V.dD,V.P,V.Q,U.dU,U.dV,U.dW,M.dc,A.d1,A.eY,A.af,A.aw,A.ay,A.az,A.h_,A.c_,A.c0,A.c3,A.dP,A.io,F.a4,F.fr,F.bw,F.fN,F.bS,F.dF,F.hI,F.hJ,F.hK,F.aB,F.iz,F.iA,F.iD,F.iF,F.iG,F.iH,O.bZ,O.dr,O.h0,V.ba,V.aq,V.dp,V.hy,V.hH,V.cC,V.dN,V.cF,V.i7,X.d7,X.dK,X.dz,V.bq,V.hL])
s(J.a,[J.fH,J.dg,J.dh,J.aF,J.bv,J.bc,H.cw,W.e,W.eV,W.d2,W.aQ,W.aR,W.T,W.e_,W.fe,W.ff,W.e1,W.db,W.e3,W.fh,W.n,W.e6,W.aU,W.fC,W.e9,W.dm,W.h9,W.ef,W.eg,W.aZ,W.eh,W.ek,W.b_,W.eo,W.eq,W.b2,W.es,W.b3,W.ex,W.aG,W.eA,W.i6,W.b6,W.eD,W.ib,W.it,W.eI,W.eK,W.eM,W.eO,W.eQ,P.be,P.eb,P.bg,P.em,P.hx,P.ey,P.bi,P.eF,P.eZ,P.dZ,P.d3,P.dB,P.bW,P.dE,P.dQ,P.eu])
s(J.dh,[J.ht,J.bz,J.bd])
t(J.jY,J.aF)
s(J.bv,[J.df,J.fI])
t(P.fQ,P.ee)
s(P.fQ,[H.dR,W.iT,W.ag,P.fu])
t(H.q,H.dR)
s(P.f,[H.fk,H.fU,H.cK])
s(H.fk,[H.bR,H.dk])
s(P.aV,[H.fV,H.iM])
t(H.fW,H.bR)
s(P.bt,[H.hp,H.fK,H.ir,H.ig,H.f4,H.hF,P.eX,P.dy,P.aN,P.is,P.iq,P.bX,P.f7,P.fc])
s(H.ci,[H.jO,H.i2,H.jE,H.jF,H.jG,P.iP,P.iO,P.iQ,P.iR,P.jq,P.jp,P.iZ,P.j2,P.j_,P.j0,P.j1,P.j5,P.j6,P.j4,P.j3,P.hY,P.hZ,P.jx,P.je,P.jd,P.jf,P.fT,P.fi,P.fj,W.fl,W.hb,W.hd,W.hE,W.hV,W.iY,W.hn,W.hm,W.ji,W.jj,W.jo,W.js,P.jz,P.fv,P.fw,P.f0,E.hA,E.hB,E.hC,E.i5,D.fo,D.fp,F.jN,F.jA,F.iJ,F.iI,F.iB,F.iC,O.h3,O.h4,O.h5,O.h6,O.h7,O.h8,V.jL,V.hN,V.hM,V.hO,Q.jI])
s(H.i2,[H.hT,H.cg])
t(H.iN,P.eX)
t(P.fS,P.a7)
s(P.fS,[H.a1,W.iS])
t(H.du,H.cw)
s(H.du,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cv,H.cP)
t(H.cR,H.cQ)
t(H.dv,H.cR)
s(H.dv,[H.hg,H.hh,H.hi,H.hj,H.hk,H.dw,H.hl])
t(P.jc,P.jt)
t(P.ja,P.jh)
t(P.ck,P.hX)
t(P.fm,P.cj)
s(P.ck,[P.fD,P.iv])
t(P.iu,P.fm)
s(P.a5,[P.z,P.p])
s(P.aN,[P.bV,P.fF])
s(W.e,[W.E,W.ft,W.b1,W.cS,W.b4,W.aH,W.cU,W.iK,W.cL,P.f1,P.bK])
s(W.E,[W.R,W.bp,W.cM])
s(W.R,[W.r,P.o])
s(W.r,[W.d0,W.eW,W.cf,W.bo,W.bL,W.ax,W.fx,W.hG,W.bY,W.dJ,W.i0,W.i1,W.cE])
s(W.aQ,[W.cl,W.fa,W.fb])
t(W.f8,W.aR)
t(W.cm,W.e_)
t(W.e2,W.e1)
t(W.da,W.e2)
t(W.e4,W.e3)
t(W.fg,W.e4)
t(W.aT,W.d2)
t(W.e7,W.e6)
t(W.fs,W.e7)
t(W.ea,W.e9)
t(W.bO,W.ea)
t(W.by,W.n)
s(W.by,[W.aW,W.a8,W.aI])
t(W.ha,W.ef)
t(W.hc,W.eg)
t(W.ei,W.eh)
t(W.he,W.ei)
t(W.el,W.ek)
t(W.cx,W.el)
t(W.ep,W.eo)
t(W.hv,W.ep)
t(W.hD,W.eq)
t(W.cT,W.cS)
t(W.hQ,W.cT)
t(W.et,W.es)
t(W.hR,W.et)
t(W.hU,W.ex)
t(W.eB,W.eA)
t(W.i3,W.eB)
t(W.cV,W.cU)
t(W.i4,W.cV)
t(W.eE,W.eD)
t(W.ia,W.eE)
t(W.b8,W.a8)
t(W.eJ,W.eI)
t(W.iU,W.eJ)
t(W.e0,W.db)
t(W.eL,W.eK)
t(W.j7,W.eL)
t(W.eN,W.eM)
t(W.ej,W.eN)
t(W.eP,W.eO)
t(W.jk,W.eP)
t(W.eR,W.eQ)
t(W.jl,W.eR)
t(W.iV,W.iS)
t(W.iW,P.hW)
t(W.k7,W.iW)
t(W.iX,P.cD)
t(W.jn,W.er)
t(P.ak,P.jb)
t(P.ec,P.eb)
t(P.fM,P.ec)
t(P.en,P.em)
t(P.hq,P.en)
t(P.cA,P.o)
t(P.ez,P.ey)
t(P.i_,P.ez)
t(P.eG,P.eF)
t(P.ic,P.eG)
t(P.f_,P.dZ)
t(P.hr,P.bK)
t(P.ev,P.eu)
t(P.hS,P.ev)
s(E.f2,[Z.d4,A.cB,T.dL])
s(D.y,[D.bP,D.bQ,D.O,X.hw])
s(X.hw,[X.dn,X.bf,X.ct,X.dO])
s(O.a3,[D.dj,U.cp])
s(D.f5,[U.f6,U.a9])
t(U.d8,U.a9)
t(A.fX,A.cB)
s(A.dP,[A.aA,A.ik,A.il,A.im,A.ii,A.ac,A.ij,A.X,A.cH,A.ip,A.cI,A.at,A.c1,A.c2])
t(F.hP,F.fr)
t(F.ih,F.fN)
t(F.iE,F.iF)
t(F.ho,F.iG)
t(O.dq,O.bZ)
s(O.dr,[O.fY,O.fZ,O.aX])
s(O.aX,[O.h1,O.h2])
s(V.dp,[V.aj,V.cG])
t(X.fz,X.dK)
s(V.bq,[V.fd,V.fA,V.fB,V.hu])
u(H.dR,H.dS)
u(H.cO,P.u)
u(H.cP,H.bN)
u(H.cQ,P.u)
u(H.cR,H.bN)
u(P.ee,P.u)
u(W.e_,W.f9)
u(W.e1,P.u)
u(W.e2,W.D)
u(W.e3,P.u)
u(W.e4,W.D)
u(W.e6,P.u)
u(W.e7,W.D)
u(W.e9,P.u)
u(W.ea,W.D)
u(W.ef,P.a7)
u(W.eg,P.a7)
u(W.eh,P.u)
u(W.ei,W.D)
u(W.ek,P.u)
u(W.el,W.D)
u(W.eo,P.u)
u(W.ep,W.D)
u(W.eq,P.a7)
u(W.cS,P.u)
u(W.cT,W.D)
u(W.es,P.u)
u(W.et,W.D)
u(W.ex,P.a7)
u(W.eA,P.u)
u(W.eB,W.D)
u(W.cU,P.u)
u(W.cV,W.D)
u(W.eD,P.u)
u(W.eE,W.D)
u(W.eI,P.u)
u(W.eJ,W.D)
u(W.eK,P.u)
u(W.eL,W.D)
u(W.eM,P.u)
u(W.eN,W.D)
u(W.eO,P.u)
u(W.eP,W.D)
u(W.eQ,P.u)
u(W.eR,W.D)
u(P.eb,P.u)
u(P.ec,W.D)
u(P.em,P.u)
u(P.en,W.D)
u(P.ey,P.u)
u(P.ez,W.D)
u(P.eF,P.u)
u(P.eG,W.D)
u(P.dZ,P.a7)
u(P.eu,P.u)
u(P.ev,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bo.prototype
C.i=W.bL.prototype
C.F=W.ax.prototype
C.I=J.a.prototype
C.a=J.aF.prototype
C.e=J.df.prototype
C.k=J.dg.prototype
C.c=J.bv.prototype
C.d=J.bc.prototype
C.J=J.bd.prototype
C.N=W.cx.prototype
C.t=J.ht.prototype
C.b=P.bW.prototype
C.O=W.bY.prototype
C.u=W.dJ.prototype
C.n=J.bz.prototype
C.v=W.b8.prototype
C.w=W.cL.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.D=new P.hs()
C.h=new P.iu()
C.E=new P.iv()
C.f=new P.jc()
C.j=new P.aS(0)
C.G=new P.aS(5e6)
C.H=new P.fE("element",!0,!1,!1,!1)
C.K=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.L=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.M=H.c(u([]),[P.h])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})()
var v={mangledGlobalNames:{p:"int",z:"double",a5:"num",h:"String",M:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.p,[P.f,E.ah]]},{func:1,ret:P.K,args:[D.y]},{func:1,ret:P.K,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[P.p,[P.f,D.a6]]},{func:1,args:[,]},{func:1,ret:P.M,args:[P.h]},{func:1,ret:P.M,args:[W.as]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:P.h,args:[P.p]},{func:1,ret:P.M,args:[W.R,P.h,P.h,W.bB]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.p,[P.f,U.a9]]},{func:1,ret:P.M,args:[W.E]},{func:1,ret:-1,args:[P.p,[P.f,V.ai]]},{func:1,args:[W.n]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.R,args:[W.E]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:P.K,args:[,],opt:[P.al]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.M,args:[[P.f,D.a6]]},{func:1,ret:V.ab,args:[P.z]},{func:1,ret:P.K,args:[F.aB,P.z,P.z]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:P.p,args:[A.aw,A.aw]},{func:1,ret:P.p,args:[A.ay,A.ay]},{func:1,ret:P.p,args:[A.az,A.az]},{func:1,ret:P.K,args:[P.b5]},{func:1,ret:P.K,args:[W.n]},{func:1,ret:P.M,args:[V.bq]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.K,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aO=0
$.ch=null
$.ku=null
$.k9=!1
$.ln=null
$.lg=null
$.lt=null
$.jB=null
$.jH=null
$.kk=null
$.c5=null
$.cX=null
$.cY=null
$.ka=!1
$.Y=C.f
$.an=[]
$.bb=null
$.jV=null
$.kB=null
$.kA=null
$.e8=P.kD(P.h,P.bu)
$.kI=null
$.kM=null
$.cy=null
$.kR=null
$.l_=null
$.l2=null
$.l1=null
$.iw=null
$.ix=null
$.iy=null
$.l0=null
$.kL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nK","lx",function(){return H.lm("_$dart_dartClosure")})
u($,"nL","kp",function(){return H.lm("_$dart_js")})
u($,"nQ","ly",function(){return H.b7(H.ie({
toString:function(){return"$receiver$"}}))})
u($,"nR","lz",function(){return H.b7(H.ie({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nS","lA",function(){return H.b7(H.ie(null))})
u($,"nT","lB",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nW","lE",function(){return H.b7(H.ie(void 0))})
u($,"nX","lF",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nV","lD",function(){return H.b7(H.kY(null))})
u($,"nU","lC",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nZ","lH",function(){return H.b7(H.kY(void 0))})
u($,"nY","lG",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"od","kq",function(){return P.mx()})
u($,"of","lM",function(){return P.mm("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oe","lL",function(){return P.kE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"o6","lK",function(){return Z.aC(0)})
u($,"o0","lI",function(){return Z.aC(511)})
u($,"o8","bn",function(){return Z.aC(1)})
u($,"o7","bm",function(){return Z.aC(2)})
u($,"o2","bl",function(){return Z.aC(4)})
u($,"o9","bF",function(){return Z.aC(8)})
u($,"oa","bG",function(){return Z.aC(16)})
u($,"o3","cZ",function(){return Z.aC(32)})
u($,"o4","d_",function(){return Z.aC(64)})
u($,"o5","lJ",function(){return Z.aC(96)})
u($,"ob","ce",function(){return Z.aC(128)})
u($,"o1","bk",function(){return Z.aC(256)})
u($,"nJ","lw",function(){return new V.fn(1e-9)})
u($,"nI","N",function(){return $.lw()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cw,ArrayBufferView:H.cw,Float32Array:H.cv,Float64Array:H.cv,Int16Array:H.hg,Int32Array:H.hh,Int8Array:H.hi,Uint16Array:H.hj,Uint32Array:H.hk,Uint8ClampedArray:H.dw,CanvasPixelArray:H.dw,Uint8Array:H.hl,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eV,HTMLAnchorElement:W.d0,HTMLAreaElement:W.eW,HTMLBaseElement:W.cf,Blob:W.d2,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bL,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.cl,CSSUnitValue:W.cl,CSSPerspective:W.f8,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cm,MSStyleCSSProperties:W.cm,CSS2Properties:W.cm,CSSImageValue:W.aQ,CSSKeywordValue:W.aQ,CSSPositionValue:W.aQ,CSSResourceValue:W.aQ,CSSURLImageValue:W.aQ,CSSStyleValue:W.aQ,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.fa,CSSUnparsedValue:W.fb,DataTransferItemList:W.fe,HTMLDivElement:W.ax,DOMException:W.ff,ClientRectList:W.da,DOMRectList:W.da,DOMRectReadOnly:W.db,DOMStringList:W.fg,DOMTokenList:W.fh,Element:W.R,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aT,FileList:W.fs,FileWriter:W.ft,HTMLFormElement:W.fx,Gamepad:W.aU,History:W.fC,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,KeyboardEvent:W.aW,Location:W.dm,MediaList:W.h9,MIDIInputMap:W.ha,MIDIOutputMap:W.hc,MimeType:W.aZ,MimeTypeArray:W.he,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cx,RadioNodeList:W.cx,Plugin:W.b_,PluginArray:W.hv,RTCStatsReport:W.hD,HTMLSelectElement:W.hG,SourceBuffer:W.b1,SourceBufferList:W.hQ,SpeechGrammar:W.b2,SpeechGrammarList:W.hR,SpeechRecognitionResult:W.b3,Storage:W.hU,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.bY,HTMLTableDataCellElement:W.bY,HTMLTableHeaderCellElement:W.bY,HTMLTableElement:W.dJ,HTMLTableRowElement:W.i0,HTMLTableSectionElement:W.i1,HTMLTemplateElement:W.cE,TextTrack:W.b4,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.i3,TextTrackList:W.i4,TimeRanges:W.i6,Touch:W.b6,TouchEvent:W.aI,TouchList:W.ia,TrackDefaultList:W.ib,CompositionEvent:W.by,FocusEvent:W.by,TextEvent:W.by,UIEvent:W.by,URL:W.it,VideoTrackList:W.iK,WheelEvent:W.b8,Window:W.cL,DOMWindow:W.cL,Attr:W.cM,CSSRuleList:W.iU,ClientRect:W.e0,DOMRect:W.e0,GamepadList:W.j7,NamedNodeMap:W.ej,MozNamedAttrMap:W.ej,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jl,SVGLength:P.be,SVGLengthList:P.fM,SVGNumber:P.bg,SVGNumberList:P.hq,SVGPointList:P.hx,SVGScriptElement:P.cA,SVGStringList:P.i_,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bi,SVGTransformList:P.ic,AudioBuffer:P.eZ,AudioParamMap:P.f_,AudioTrackList:P.f1,AudioContext:P.bK,webkitAudioContext:P.bK,BaseAudioContext:P.bK,OfflineAudioContext:P.hr,WebGLBuffer:P.d3,WebGLProgram:P.dB,WebGL2RenderingContext:P.bW,WebGLShader:P.dE,WebGLUniformLocation:P.dQ,SQLResultSetRowList:P.hS})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.du.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dv.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.lp,[])
else Q.lp([])})})()
//# sourceMappingURL=test.dart.js.map
